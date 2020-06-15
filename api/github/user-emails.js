import fetch from 'node-fetch';

// const permittedOrigins = [
//   "https://www.carbondesignsystem.com",
//   "https://w3.ibm.com",
// ];

module.exports = async (req, res) => {
  // Only allow requests from specified urls
  // const { origin } = req.headers;
  // if (!origin || Array.isArray(origin) || !permittedOrigins.includes(origin)) {
  //   return res.json({
  //     error: `Request sent from unauthorized origin: ${origin}`,
  //   });
  // }

  const { access_token: accessToken } = req.query;

  if (!accessToken) {
    return res.json({
      error: 'Did not get expected query string named [access_token].',
    });
  }

  const response = await fetch('https://api.github.com/user/emails', {
    method: 'GET',
    headers: {
      authorization: `token ${accessToken}`,
      'content-type': 'application/json',
    },
  }).catch((error) => res.json({ error: error.message }));

  const json = await response.json();

  res.status(200).send(json);
};
