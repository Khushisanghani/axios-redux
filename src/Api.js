import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://679328645eae7e5c4d8dbc1f.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
