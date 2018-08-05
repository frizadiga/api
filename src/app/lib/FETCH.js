import axios from 'axios';

const FETCH = axios.create({
  baseURL: 'https://api.domain.com/v1',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials' : true,
  }
})

export default FETCH