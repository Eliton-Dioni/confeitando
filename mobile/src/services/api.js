import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.43.218:80',
});

export default api;