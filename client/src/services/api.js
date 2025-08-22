import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor to attach the token to every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
// api.js

// This code creates an Axios instance with a base URL pointing to a local server.
// You can use this instance to make HTTP requests to your API endpoints.
