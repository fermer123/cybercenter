// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080',
});
