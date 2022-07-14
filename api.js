const axios = require('axios')

const getAPI = axios.create({
    withCredentials: true,
    baseURL: process.env.API_URL,
})

export async function apiRegister(data){
    await getAPI.post(`/auth/new`, data).then((res) => res.data).catch((e) => console.log(e))
}

export async function apiLogin(data){ 
    await getAPI.post(`/auth/signin`, data).then((res) => res.data).catch((e) => console.log(e))
}

export async function apiLogout() {
    getAPI.defaults.headers.common['Authorization'] = null
    await getAPI.delete(`/auth/logout`).then((res) => res.data).catch((e) => console.log(e))
}

export async function getAuthToken() {
    await getAPI.get(`/auth/signin`).then((res) => {
        getAPI.defaults.headers.common['Authorization'] = res.data.authToken
        return res.data
    })
}
