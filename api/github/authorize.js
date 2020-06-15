require('dotenv').config();

// const permittedOrigins = [
//   "https://www.carbondesignsystem.com",
//   "https://w3.ibm.com",
// ];
const baseUrl = 'https://github.com';
const authorizePath = '/login/oauth/authorize';
const scope = 'user:email';
const allowSignup = 'false';

module.exports = (req, res) => {
  if (!process.env.GITHUB_CLIENT_ID) {
    return res.json({ error: 'GITHUB_CLIENT_ID is not set in environment.' });
  }

  // Only allow requests from specified urls
  // const { origin } = req.headers;
  // if (!origin || Array.isArray(origin) || !permittedOrigins.includes(origin)) {
  //   return res.json({
  //     error: `Request sent from unauthorized origin: ${origin}`,
  //   });
  // }

  const authorizationUrl = `${baseUrl}${authorizePath}?client_id=${process.env.GITHUB_CLIENT_ID}&scope=${scope}&allow_signup=${allowSignup}`;

  res.setHeader('location', authorizationUrl);
  res.status(302).send('');
};
