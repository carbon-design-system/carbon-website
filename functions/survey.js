require('dotenv').config();
const fetch = require('node-fetch');
const cookie = require('cookie');

// const permittedOrigins = ['https://www.carbondesignsystem.com'];

exports.handler = async function survey(event) {
  // const { httpMethod, origin } = event;
  if (event.headers.cookie) {
    const { SURVEY_RECENTLY_SUBMITTED } = cookie.parse(event.headers.cookie);
    if (SURVEY_RECENTLY_SUBMITTED) {
      return {
        statusCode: 429,
        body: 'Survey recently submitted. Try again in 2 minutes.',
      };
    }
  }

  // if (httpMethod !== 'POST') {
  //   return { statusCode: 405, body: 'Method Not Allowed' };
  // }

  // if (!permittedOrigins.includes(origin)) {
  //   return { statusCode: 403, body: 'Invalid origin' };
  // }

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
  }).catch(({ statusCode, message }) => {
    return { statusCode, body: message };
  });

  return {
    statusCode: 200,
    body: JSON.stringify('Feedback submitted! Thank you.'),
    headers: {
      'Set-Cookie': `SURVEY_RECENTLY_SUBMITTED=true`,
      'Max-Age': 120,
      Secure: true,
      SameSite: 'None'
    },
  };
};
