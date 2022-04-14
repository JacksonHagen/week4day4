// @ts-nocheck

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    timeout: 8000
})

export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    timeout: 8000
})