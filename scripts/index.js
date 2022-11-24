//Constants

const headerMenuButton = document.getElementsByClassName("header__menu")[0];
const headerMenuPopup = document.getElementsByClassName("menu__popup")[0];
const popupNav = headerMenuPopup.getElementsByTagName("li");


//Functions
const openPopup = function ()  {
    headerMenuButton.classList.add("header__menu_open");
    headerMenuPopup.classList.add("menu__popup_opened");
}

const closePopup = function ()  {
    headerMenuButton.classList.remove("header__menu_open");
    headerMenuPopup.classList.remove("menu__popup_opened");
}

const popupToggle = function () {
    if(!Array.from(headerMenuPopup.classList).includes("menu__popup_opened")) {
        return openPopup()
    }
    else return  closePopup()
}

function resizeFunction() {
    if (screen.width >= 900){
        closePopup()
    }
}

//EventListeners

Array.from(popupNav).forEach(item => item.addEventListener("click", closePopup))

headerMenuButton.addEventListener("click", popupToggle)

window.addEventListener("resize", resizeFunction);

//Color-change

const header = document.querySelector('.header')
const colorSwitchButton = header.querySelector('.header__button_color')

function toggleColor() {
    colorSwitchButton.classList.toggle("header__button_color_type_grey");
    header.classList.toggle("header__theme_light");
    headerMenuPopup.classList.toggle("menu__popup_theme_light");
}

colorSwitchButton.addEventListener("click",toggleColor);