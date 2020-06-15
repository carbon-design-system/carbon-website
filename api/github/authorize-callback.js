const https = require('https');
const { URL } = require('url');

require('dotenv').config();

// const permittedOrigins = [
//   "https://www.carbondesignsystem.com",
//   "https://w3.ibm.com",
// ];

const exchangeCodeForToken = async (code) => {
  const url = new URL('/login/oauth/access_token', 'https://github.com');
  url.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID);
  url.searchParams.set('client_secret', process.env.GITHUB_CLIENT_SECRET);
  url.searchParams.set('code', code);

  return new Promise(function (resolve, reject) {
    https
      .request(
        {
          method: 'POST',
          host: url.host,
          path: url.pathname + url.search,
          headers: {
            Accept: 'application/json',
          },
        },
        (resp) => {
          let data = '';
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            try {
              const parsed = JSON.parse(data);
              resolve(parsed);
            } catch (e) {
              reject(data);
            }
          });
        }
      )
      .on('error', reject)
      .end();
  });
};

module.exports = async (req, res) => {
  if (!process.env.GITHUB_CLIENT_ID) {
    return res.json({ error: 'GITHUB_CLIENT_ID is not set in environment.' });
  }

  if (!process.env.GITHUB_CLIENT_SECRET) {
    return res.json({
      error: 'GITHUB_CLIENT_SECRET is not set in environment.',
    });
  }

  if (!process.env.GITHUB_OAUTH_CALLBACK_URL) {
    return res.json({
      error: 'GITHUB_OAUTH_CALLBACK_URL is not set in environment.',
    });
  }

  // Only allow requests from specified urls
  // const { origin } = req.headers;
  // if (!origin || Array.isArray(origin) || !permittedOrigins.includes(origin)) {
  //   return res.json({
  //     error: `Request sent from unauthorized origin: ${origin}`,
  //   });
  // }

  const { code } = req.query;

  if (!code) {
    return res.json({
      error: 'Did not get expected query string named [code].',
    });
  }

  let response;
  try {
    response = await exchangeCodeForToken(code);
  } catch (e) {
    return res.json({ error: 'Failed to exchange [code] for [access_token].' });
  }

  if (!response || !response.access_token) {
    return res.json({ error: 'Did not receive expected [access_token].' });
  }

  const callbackUrl = `${process.env.GITHUB_OAUTH_CALLBACK_URL}?access_token=${response.access_token}`;

  res.setHeader('location', callbackUrl);
  res.status(302).send('');
};
