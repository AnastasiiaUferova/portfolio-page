const headerMenuButton = document.getElementsByClassName("header__menu")[0];
console.log(headerMenuButton)

const headerMenuPopup = document.getElementsByClassName("menu__popup")[0];

const openPopup = function ()  {
    headerMenuButton.classList.toggle("header__menu_open");
    headerMenuPopup.classList.toggle("menu__popup_opened");
}

headerMenuButton.addEventListener("click", openPopup)

//screenwidth