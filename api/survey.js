require('dotenv').config();
const fetch = require('node-fetch');
const cookie = require('cookie');

const permittedOrigins = [
  'https://www.carbondesignsystem.com',
  'https://w3.ibm.com',
];

exports.survey = async function (event) {
  const { httpMethod, headers } = event;

  if (headers.cookie) {
    const { SURVEY_RECENTLY_SUBMITTED } = cookie.parse(headers.cookie);
    if (SURVEY_RECENTLY_SUBMITTED) {
      console.log(event);
      return {
        statusCode: 429,
        body: 'Survey recently submitted. Try again in 2 minutes.',
      };
    }
  }

  if (httpMethod !== 'POST') {
    console.log(event);
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  if (!permittedOrigins.includes(headers.origin)) {
    console.log(event);
    return { statusCode: 403, body: `Invalid origin: ${headers.origin}` };
  }

  const { experience, comment, path } = JSON.parse(event.body);

  const body = JSON.stringify({
    data: {
      '2': { value: experience },
      '3': { value: comment },
      '4': { value: path },
    },
  });

  await fetch(process.env.SURVEYGIZMO_REQUEST_URI, {
    method: 'PUT',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(({ statusCode, message }) => ({ statusCode, body: message }));

  return {
    statusCode: 200,
    body: JSON.stringify('Feedback submitted! Thank you.'),
    headers: {
      'Set-Cookie': `SURVEY_RECENTLY_SUBMITTED=true; Max-Age=120; Secure; SameSite=None`,
    },
  };
};
