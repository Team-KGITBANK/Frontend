const axios = require('axios')

const getAPI = axios.create({
    withCredentials: true,
    baseURL: process.env.API_URL,
})

export async function apiRegister(data){
    await getAPI.post(`/auth/new`, data).then((res) => res.data).catch((e) => console.log(e))
}

export async function apiLogin(data){ 
    await getAPI.post(`/auth/lgoin`, data).then((res) => res.data).catch((e) => console.log(e))
}

export async function apiLogout() {
    getAPI.defaults.headers.common['Authorization'] = null
    await getAPI.delete(`/auth/logout`).then((res) => res.data).catch((e) => console.log(e))
}

export async function getAuthToken(id) {
    await getAPI.get(`/auth/signin`).then((res) => {
        getAPI.defaults.headers.common['Authorization'] = res.data.authToken
        getAPI.defaults.headers.common['id']=id
        return res.data
    })
}

export async function getList() {
    const trashList = await getAPI.get(`/auth/list`).then((res) => res.data).catch((e) => console.log(e))
    return trashList
}