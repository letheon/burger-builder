import axios from 'axios';

const burgerApi = axios.create({
  baseURL: 'http://localhost:8756',
});

export default burgerApi;
