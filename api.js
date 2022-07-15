const axios = require('axios')

const getAPI = axios.create({
    withCredentials: true,
    baseURL: process.env.API_URL,
})

export async function apiRegister(data){
    await getAPI.post(`https://server.plebea.site/auth/new`, data).then((res) => res.data).catch((e) => console.log(e))
}

export async function apiLogin(data){ 
    await getAPI.post(`https://server.plebea.site/auth/lgoin`, data).then((res) => res.data).catch((e) => console.log(e))
}

export async function apiLogout() {
    getAPI.defaults.headers.common['Authorization'] = null
    await getAPI.delete(`https://server.plebea.site/auth/logout`).then((res) => res.data).catch((e) => console.log(e))
}

export async function getAuthToken(id) {
    await getAPI.get(`https://server.plebea.site/auth/signin`).then((res) => {
        getAPI.defaults.headers.common['Authorization'] = res.data.authToken
        getAPI.defaults.headers.common['id']=id
        return res.data
    })
}

export async function getList(id) {
    const trashList = await getAPI.get(`https://server.plebea.site/auth/list?id=${id}`).then((res) => res.data).catch((e) => console.log(e))
    return trashList
}

export async function editAccount(data) {
    const trashList = await getAPI.put(`https://server.plebea.site/auth/edit`, data).then((res) => res.data).catch((e) => console.log(e))
    return trashList
}

export async function getProcessor() {
    const processor = await getAPI.get(`https://server.plebea.site/processor`).then((res) => res.data).catch((e) => console.log(e))
    return processor
}