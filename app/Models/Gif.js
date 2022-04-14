
export class Gif {
    constructor(data) {
        this.url = data.images.downsized.url
        
    }
    get Template() {
        return /*html*/`
        <div class="col-md-3 py-3">
            <img src="${this.url}" alt="" class="img-fit selectable" onclick="app.giphyController.addUrl('${this.url}')">
        </div>
        `
    }
}