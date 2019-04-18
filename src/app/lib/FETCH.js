const axios = require('axios');

const Fetch = axios.create({
  baseURL: 'https://api.domain.com/v1',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

module.exports = Fetch;
