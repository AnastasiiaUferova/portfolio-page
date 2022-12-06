export class ProjectCard {
    constructor({ header, techs, repoLink, webLink, imgLink}, cardSelector) {
      this._header = header;
      this._techs = techs;
      this._repoLink = repoLink;
      this._webLink = webLink;
      this._imgLink = imgLink;
      this._cardSelector = cardSelector;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector(".swiper-slide")
        .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector(".slide-image").src = this._imgLink;
      this._element.querySelector(".slide-header").textContent = this._header;
      this._element.querySelector(".slide-techs").textContent = this._techs;
      this._element.querySelector(".slide__link_repo").href = this._repoLink;
      this._element.querySelector(".slide__link_web").href = this._webLink;
  
      return this._element;
    }
  }

