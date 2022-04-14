import { ProxyState } from "../AppState.js"
import { giftsService } from "../Services/GiftsService.js"
import { Pop } from "../Utils/Pop.js"

function _drawGifts() {
    let template = ''
    ProxyState.gifts.forEach(g => template += g.Template)
    document.getElementById('display-area').innerHTML = template
}
export class GiftsController {
    constructor() {
        ProxyState.on('gifts', _drawGifts)
        this.getGifts()
    }
    async createGift() {
        try {
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = {
                // @ts-ignore
                tag: form.tag.value,
                // @ts-ignore
                url: form.giphyurl.value
            }
            await giftsService.createGift(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.error(error)
        }
    }
    async getGifts() {
        try {
            await giftsService.getAllGifts()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.error(error)
        }
    }
    openGift(url) {
        giftsService.openGift(url)
    }
}