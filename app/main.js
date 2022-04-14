import { GiftsController } from "./Controllers/GiftsController.js";
import { GiphyController } from "./Controllers/GiphyController.js";


class App {
  giphyController = new GiphyController()
  giftsController = new GiftsController()
}

window["app"] = new App();
