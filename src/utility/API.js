import axios from 'axios';

const API = axios.create({
  baseURL: 'https://wl-api-staging.kaizenhealth.org/platforms/sandbox_status/',
  responseType: 'json',
});

export default {
  getComments: (params) => API.get('/comments', params),
};
