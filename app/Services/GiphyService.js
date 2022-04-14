import { ProxyState } from "../AppState.js"
import { Gif } from "../Models/Gif.js"
import { giphyApi } from "./AxiosService.js"


let params = {
    api_key: 'zGvN3WOisXIzQBEBL4Wje9TYOD26d90M',
    rating: 'pg',
    q: ''
}
class GiphyService {
    async search(query) {
        params.q = query.split(' ').join('+') 
        const res = await giphyApi.get('search', {params})
        console.log(res.data.data)
        ProxyState.gifs = res.data.data.map(g => new Gif(g))
        console.log(ProxyState.gifs);
    }

}

export const giphyService = new GiphyService()