import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api-content.ingresso.com/v0/templates/highlights',
    // baseURL: 'http://localhost:3333',
});

export default api;
