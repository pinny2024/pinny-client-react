import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://43.203.192.255', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
