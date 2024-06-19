import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://15.165.18.83', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
