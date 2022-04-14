import { ProxyState } from "../AppState.js";
import { giphyService } from "../Services/GiphyService.js";
import { Pop } from "../Utils/Pop.js";

function _drawGifs() {
    let template = ''
    ProxyState.gifs.forEach(g => template += g.Template)
    document.getElementById('display-area').innerHTML = template
}

export class GiphyController {
    constructor() {
        ProxyState.on('gifs', _drawGifs)
    }
    async search() {
        window.event.preventDefault()
        try {
            const form = window.event.target
            // @ts-ignore
            const query = form.searchgifs.value
            await giphyService.search(query)
        } catch (error) {
            Pop.toast(error.message, 'error')
        }
    }
    addUrl(url) {
        // @ts-ignore
        document.getElementById('giphyurl').value = url
        console.log(url)
    }
}