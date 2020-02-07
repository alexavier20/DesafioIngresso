import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-content.ingresso.com/v0/templates/highlights',
});

export default api;
