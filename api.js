const axios = require('axios')

const getAPI = axios.create({
    withCredentials: true,
    baseURL: process.env.API_URL,
})