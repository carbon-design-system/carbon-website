import { NowRequest, NowResponse } from '@now/node';
import fetch, { FetchError } from 'node-fetch';

import { WebClient } from '@slack/web-api';

require('dotenv').config(); //eslint-disable-line @typescript-eslint/no-var-requires

const permittedOrigins = [
  'https://www.carbondesignsystem.com',
  'https://w3.ibm.com',
];

module.exports = async (req: NowRequest, res: NowResponse) => {
  if (req.cookies.survey_recently_submitted) {
    return res.json({ error: 'Survey recently submitted.' });
  }

  if (!process.env.SURVEYGIZMO_REQUEST_URI) {
    return res.json({ error: 'Invalid SurveyGizmo request uri.' });
  }

  if (!process.env.SLACK_TOKEN || !process.env.SLACK_CHANNEL) {
    return res.json({ error: 'Invalid Slack token or channel.' });
  }

  // Initialize Slack web client
  const slack = new WebClient(process.env.SLACK_TOKEN);

  // Only allow requests from specified urls
  const { origin } = req.headers;
  if (!origin || Array.isArray(origin) || !permittedOrigins.includes(origin)) {
    return res.json({
      error: `Request sent from unauthorized origin: ${origin}`,
    });
  }

  // Prepare data for SurveyGizmo
  const { experience, comment, path } = JSON.parse(req.body);
  const surveyBody = JSON.stringify({
    data: {
      '2': { value: experience },
      '3': { value: comment },
      '4': { value: path },
    },
  });

  await fetch(process.env.SURVEYGIZMO_REQUEST_URI, {
    method: 'PUT',
    body: surveyBody,
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch((error: FetchError) => res.json({ error: error.message }));

  // Prepare data for Slack
  const emoji =
    experience === 'Negative'
      ? ':disappointed:'
      : experience === 'Neutral'
      ? ':neutral_face:'
      : ':grinning:';

  const blocks = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `${emoji} *${experience}* web page experience ${emoji}`,
      },
    },
  ];

  if (path) {
    blocks[0].text.text += `\n>*Path:*\n>${path}`;
  }

  if (comment) {
    blocks[0].text.text += `\n>*Comment:*\n>${comment}`;
  }

  await slack.chat.postMessage({
    blocks,
    channel: process.env.SLACK_CHANNEL,
  } as any);

  // Set a "recently submitted" cookie that expires after one minute to mitigate spam
  res.setHeader(
    'Set-Cookie',
    'survey_recently_submitted=true; Max-Age=60; Secure; SameSite=None'
  );

  res.status(200).send('success');
};
