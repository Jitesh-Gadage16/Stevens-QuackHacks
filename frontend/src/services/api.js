import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

// http://localhost:3000/api/auth/signup
export default api;
