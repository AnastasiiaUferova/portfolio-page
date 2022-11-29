export default class SwiperSection {
    constructor({ items, renderer }, swiperSelector) {
      this._container = swiperSelector;
      this._renderedItems = items;
      this._renderer = renderer;
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  
    renderItems() {
      this._renderedItems.forEach((item) => {
        this._renderer(item);
      });
    }
  }