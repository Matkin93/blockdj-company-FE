# blockdj-company-FE

To access the Auth0 service a config file is required called config/index.js - This is missing on this repo to prevent naughty boys playing...However the file layout is as follows...

```
export default {
    domain: '',
    clientID: '',
    callbackUri: 'http://localhost:3000/callback',
    logoutUri: 'https://blockdj.eu.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3000',
    audience: '',
    authTokenTimeout: 1000,
    scope: 'openid',
    responseType: 'token id_token'
};
```
In the above domain and clientid should be got from Auth0 dashboard -> applications -> blockdj-company (single page app)

In the above the audience represents the API you want to call so dashboard -> APIs -> blockdj-company-api and find the identifier (will start http://blockdj-company etc..)