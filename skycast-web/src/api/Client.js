// client.js: the one axios setup for the whole app. It sets the Laravel backend URL

import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default client;