import { initialProjectCards, projectSwiperSelector } from "../utils/constants.js";
import { ProjectCard } from "../components/projectCard.js";
import SwiperSection from "../components/swiperSection.js";


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
const aboutMe = document.querySelector('.about-me');
const skills = document.getElementById("skills");

function toggleColor() {
    colorSwitchButton.classList.toggle("header__button_color_type_grey");
    header.classList.toggle("header__theme_light");
    headerMenuPopup.classList.toggle("menu__popup_theme_light");
    aboutMe.classList.toggle("about-me_theme_light");
    skills.classList.toggle("about-me_theme_light");
}

colorSwitchButton.addEventListener("click",toggleColor);


//Swiper


// Project Section: swiper + cards rendering
const projectCardList = new SwiperSection(
  {
    items: initialProjectCards,
    renderer: (item) => {
      const projectCard = new ProjectCard(item, ".project-card-template");
      const projectCardElement = projectCard.generateCard();
      projectCardList.addItem(projectCardElement);
    },
  },
  projectSwiperSelector
);

projectCardList.renderItems();


      // Swiper: Slider
      const swiper = new Swiper('.mySwiper', {
              lazy: true,
              direction: "horizontal",
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
              },

              keyboard: {
                enabled: true,
                onlyInViewport: false,
              },
              spaceBetween: 20,
              breakpoints: {
                1440: {
                  slidesPerView: 4,
                },

                  1000: {
                      slidesPerView: 3,
                      spaceBetween: 30
                  },
                  480: {
                      slidesPerView: 2,
                      spaceBetween: 10
                  }
              }
          });


// Now you can use all slider methods like
swiper.slideNext();
      

console.log(swiper)




/*var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });*/