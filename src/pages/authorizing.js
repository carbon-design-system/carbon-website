import React, { useEffect } from 'react';

import { navigate } from 'gatsby';

const Authorizing = ({ location }) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const accessToken = urlParams.get('access_token');
    const redirectTo = sessionStorage.getItem('github-redirect-to');

    if (accessToken) {
      sessionStorage.setItem('github-auth-token', accessToken);
    }

    navigate(redirectTo || '/', {
      replace: true,
    });
  }, [location.search]);

  return (
    <>
      <p style={{ color: '#fff' }}>Authorizing with GitHub, please wait...</p>
    </>
  );
};

export default Authorizing;
