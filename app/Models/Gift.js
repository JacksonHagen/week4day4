export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened || false
        this.id = data._id
    }
    get Template() {
        const giftImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkYsOADT5hxUXHngN3kQ5Lkf_hF7gjoM4LQ&usqp=CAU'
        const onclick = `onclick="app.giftsController.openGift('${this.id}')"`
        return /*html*/ `
        <div class="col-md-3 px-3 pt-2 pb-5 m-3 bg-warning text-center rounded">
            <img src="${this.opened ? this.url : giftImg}" alt="" class="img-fit ${this.opened ? '' : 'selectable'}" ${this.opened ? '' : onclick}>
            <p>${this.tag}</p>
        </div>
        `
    }
}