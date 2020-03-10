require('dotenv').config();
const fetch = require('node-fetch');

exports.handler = async function survey(event, _, callback) {
  const { experience, comment, path } = JSON.parse(event.body);

  const body = JSON.stringify({
    data: {
      '2': { value: experience },
      '3': { value: comment },
      '4': { value: path },
    },
  });

  const res = await fetch(
    `https://restapi.surveygizmo.com/v5/survey/${process.env.SURVEY_ID}/surveyresponse?api_token=${process.env.SURVEYGIZMO_API_TOKEN}&api_token_secret=${process.env.SURVEYGIZMO_API_TOKEN_SECRET}`,
    {
      method: 'PUT',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).catch(error =>
    callback(error.message, {
      statusCode: error.code,
    })
  );

  const json = await res.json();

  callback(null, {
    statusCode: 200,
    body: json,
  });
};
