const portfolioImage = new URL('../images/Portfolio.png', import.meta.url);
const HowToLearn = new URL('../images/HowToLearn.png', import.meta.url);
const Films = new URL('../images/Films.png', import.meta.url);
const Mesto = new URL('../images/Mesto.png', import.meta.url);
const ToDo = new URL('../images/ToDo.png', import.meta.url);

const initialProjectCards = [

      {
        header: "Portfolio Page",  
        techs: "React.js, JS, SCSS",
        repoLink: "https://github.com/AnastasiiaUferova/portfolio-page",
        webLink: "https://portfolio-page-8x3v.vercel.app", 
        imgLink: portfolioImage,
      },
  
      {
        header: "‘How to learn’ landing page",  
        techs: "JS, HTML5, CSS3",
        repoLink: "https://github.com/AnastasiiaUferova/how-to-learn",
        webLink: "https://anastasiiauferova.github.io/how-to-learn/index.html ", 
        imgLink: HowToLearn,
      },
      

      {
        header: "‘Film search’ website",  
        techs: "React.js, JS, CSS3",
        repoLink: "https://github.com/AnastasiiaUferova/film-search",
        webLink: "https://anastasiiauferova.github.io/film-search/#/movies", 
        imgLink: Films,
      },

      {
        header: "‘Mesto’ (‘Place’) Website",  
        techs: "React.js, JS, CSS3",
        repoLink: "https://github.com/AnastasiiaUferova/react-mesto-auth",
        webLink: "https://anastasiiauferova.github.io/react-mesto-auth/#/", 
        imgLink: Mesto,
      },
      {
        header: "‘To-Do’ Web App",  
        techs: "React.js, JS, CSS3",
        repoLink: "https://github.com/AnastasiiaUferova/to-do-list-app",
        webLink: "https://anastasiiauferova.github.io/to-do-list-app/#/todo ", 
        imgLink: ToDo,
      },

   
  ];
  
  const projectSwiperSelector = document.querySelector(".swiper-wrapper");
  
  export {initialProjectCards, projectSwiperSelector};

