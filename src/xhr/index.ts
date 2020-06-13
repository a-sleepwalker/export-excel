import axios from 'axios';

const xhr = axios.create();

xhr.interceptors.request.use(
  (config) => config
);

xhr.interceptors.response.use(
  (response) => response
);

export default xhr;
