import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { sandboxApi } from "./AxiosService.js"

class GiftsService {
    async openGift(id) {
        let gift = ProxyState.gifts.find(g => g.id === id)
        if(!gift.opened) {
            gift.opened = !gift.opened
            const res = await sandboxApi.put('gifts/' + gift.id, gift)
            console.log(res)
            const index = ProxyState.gifts.findIndex(g => g.id === res.data._id)
            ProxyState.gifts.splice(index, 1, new Gift(res.data))
            ProxyState.gifts = ProxyState.gifts
        }
    }
    async createGift(formData) {
        console.log(formData)
        const res = await sandboxApi.post('gifts', formData)
        ProxyState.gifts = [...ProxyState.gifts, new Gift(res.data)]
    }
    async getAllGifts() {
        const res = await sandboxApi.get('gifts')
        console.log(res);
        ProxyState.gifts = res.data.map(g => new Gift(g))
    }

}

export const giftsService = new GiftsService()