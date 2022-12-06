/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/cloud.js":
/*!*********************************!*\
  !*** ./src/components/cloud.js ***!
  \*********************************/
/***/ (() => {

eval("//cloud settings\n\nvar myTags = ['JavaScript', 'CSS3', 'HTML5', 'React.js', 'express.js', 'git', 'Node.js', 'Figma', 'SASS', 'MongoDB', 'WebPack', 'REST API', \"responsive\", \"VSCode\", \"English\", \"Vercel\", \"npm\", \"React Router\", \"CRUD\"];\nvar resizeCloudFunction = function resizeCloudFunction() {\n  if (screen.width <= 420) {\n    return 130;\n  } else if (screen.width <= 550) {\n    return 200;\n  } else return 250;\n};\nwindow.addEventListener('resize', function () {\n  resizeCloudFunction();\n  console.log(resizeCloudFunction());\n});\nvar tagCloud = TagCloud('.cloud', myTags, {\n  radius: resizeCloudFunction(),\n  maxSpeed: 'fast',\n  initSpeed: \"normal\",\n  direction: 135,\n  keep: true\n});\n\n//# sourceURL=webpack://portfolio-page/./src/components/cloud.js?");

/***/ }),

/***/ "./src/components/projectCard.js":
/*!***************************************!*\
  !*** ./src/components/projectCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectCard\": () => (/* binding */ ProjectCard)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar ProjectCard = /*#__PURE__*/function () {\n  function ProjectCard(_ref, cardSelector) {\n    var header = _ref.header,\n      techs = _ref.techs,\n      repoLink = _ref.repoLink,\n      webLink = _ref.webLink,\n      imgLink = _ref.imgLink;\n    _classCallCheck(this, ProjectCard);\n    this._header = header;\n    this._techs = techs;\n    this._repoLink = repoLink;\n    this._webLink = webLink;\n    this._imgLink = imgLink;\n    this._cardSelector = cardSelector;\n  }\n  _createClass(ProjectCard, [{\n    key: \"_getTemplate\",\n    value: function _getTemplate() {\n      var cardElement = document.querySelector(this._cardSelector).content.querySelector(\".swiper-slide\").cloneNode(true);\n      return cardElement;\n    }\n  }, {\n    key: \"generateCard\",\n    value: function generateCard() {\n      this._element = this._getTemplate();\n      this._element.querySelector(\".slide-image\").src = this._imgLink;\n      this._element.querySelector(\".slide-header\").textContent = this._header;\n      this._element.querySelector(\".slide-techs\").textContent = this._techs;\n      this._element.querySelector(\".slide__link_repo\").href = this._repoLink;\n      this._element.querySelector(\".slide__link_web\").href = this._webLink;\n      return this._element;\n    }\n  }]);\n  return ProjectCard;\n}();\n\n//# sourceURL=webpack://portfolio-page/./src/components/projectCard.js?");

/***/ }),

/***/ "./src/components/swiperSection.js":
/*!*****************************************!*\
  !*** ./src/components/swiperSection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SwiperSection)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar SwiperSection = /*#__PURE__*/function () {\n  function SwiperSection(_ref, swiperSelector) {\n    var items = _ref.items,\n      renderer = _ref.renderer;\n    _classCallCheck(this, SwiperSection);\n    this._container = swiperSelector;\n    this._renderedItems = items;\n    this._renderer = renderer;\n  }\n  _createClass(SwiperSection, [{\n    key: \"addItem\",\n    value: function addItem(element) {\n      this._container.prepend(element);\n    }\n  }, {\n    key: \"renderItems\",\n    value: function renderItems() {\n      var _this = this;\n      this._renderedItems.forEach(function (item) {\n        _this._renderer(item);\n      });\n    }\n  }]);\n  return SwiperSection;\n}();\n\n\n//# sourceURL=webpack://portfolio-page/./src/components/swiperSection.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _components_projectCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/projectCard.js */ \"./src/components/projectCard.js\");\n/* harmony import */ var _components_swiperSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/swiperSection.js */ \"./src/components/swiperSection.js\");\n/* harmony import */ var _components_cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cloud */ \"./src/components/cloud.js\");\n/* harmony import */ var _components_cloud__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_cloud__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _assets_Anastasiia_Iuferova_JunFrontendDev_pdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Anastasiia_Iuferova_JunFrontendDev.pdf */ \"./src/assets/Anastasiia_Iuferova_JunFrontendDev.pdf\");\n\n\n\n\n\n\n\n//Constants\n\nvar headerMenuButton = document.getElementsByClassName(\"header__menu\")[0];\nvar headerMenuPopup = document.getElementsByClassName(\"menu__popup\")[0];\nvar popupNav = headerMenuPopup.getElementsByTagName(\"li\");\ndocument.getElementById(\"pdf-link\").href = _assets_Anastasiia_Iuferova_JunFrontendDev_pdf__WEBPACK_IMPORTED_MODULE_5__;\ndocument.getElementById(\"pdf-link2\").href = _assets_Anastasiia_Iuferova_JunFrontendDev_pdf__WEBPACK_IMPORTED_MODULE_5__;\n\n//Functions\nvar openPopup = function openPopup() {\n  headerMenuButton.classList.add(\"header__menu_open\");\n  headerMenuPopup.classList.add(\"menu__popup_opened\");\n};\nvar closePopup = function closePopup() {\n  headerMenuButton.classList.remove(\"header__menu_open\");\n  headerMenuPopup.classList.remove(\"menu__popup_opened\");\n};\nvar popupToggle = function popupToggle() {\n  if (!Array.from(headerMenuPopup.classList).includes(\"menu__popup_opened\")) {\n    return openPopup();\n  } else return closePopup();\n};\nfunction resizeFunction() {\n  if (screen.width >= 900) {\n    closePopup();\n  }\n}\n\n//EventListeners\n\nArray.from(popupNav).forEach(function (item) {\n  return item.addEventListener(\"click\", closePopup);\n});\nheaderMenuButton.addEventListener(\"click\", popupToggle);\nwindow.addEventListener(\"resize\", resizeFunction);\n\n//Color-change\n\nvar header = document.querySelector('.header');\nvar colorSwitchButton = header.querySelector('.header__button_color');\nvar aboutMe = document.querySelector('.about-me');\nvar skills = document.getElementById(\"skills\");\nvar projects = document.getElementById(\"projects\");\nfunction toggleColor() {\n  colorSwitchButton.classList.toggle(\"header__button_color_type_grey\");\n  header.classList.toggle(\"header__theme_light\");\n  headerMenuPopup.classList.toggle(\"menu__popup_theme_light\");\n  aboutMe.classList.toggle(\"about-me_theme_light\");\n  skills.classList.toggle(\"about-me_theme_light\");\n  projects.classList.toggle(\"about-me_theme_light\");\n}\ncolorSwitchButton.addEventListener(\"click\", toggleColor);\n\n//Swiper\n\n// Project Section: swiper + cards rendering\nvar projectCardList = new _components_swiperSection_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.initialProjectCards,\n  renderer: function renderer(item) {\n    var projectCard = new _components_projectCard_js__WEBPACK_IMPORTED_MODULE_1__.ProjectCard(item, \".project-card-template\");\n    var projectCardElement = projectCard.generateCard();\n    projectCardList.addItem(projectCardElement);\n  }\n}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.projectSwiperSelector);\nprojectCardList.renderItems();\n\n// Swiper settings\nvar swiper = new Swiper('.mySwiper', {\n  lazy: true,\n  direction: \"horizontal\",\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\"\n  },\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true\n  },\n  scrollbar: {\n    el: \".swiper-scrollbar\",\n    hide: true\n  },\n  keyboard: {\n    enabled: true,\n    onlyInViewport: false\n  },\n  spaceBetween: 20,\n  breakpoints: {\n    1440: {\n      slidesPerView: 4\n    },\n    1000: {\n      slidesPerView: 3,\n      spaceBetween: 30\n    },\n    600: {\n      slidesPerView: 2,\n      spaceBetween: 10\n    }\n  }\n});\n\n//# sourceURL=webpack://portfolio-page/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialProjectCards\": () => (/* binding */ initialProjectCards),\n/* harmony export */   \"projectSwiperSelector\": () => (/* binding */ projectSwiperSelector)\n/* harmony export */ });\nvar portfolioImage = new URL(/* asset import */ __webpack_require__(/*! ../images/Portfolio.png */ \"./src/images/Portfolio.png\"), __webpack_require__.b);\nvar HowToLearn = new URL(/* asset import */ __webpack_require__(/*! ../images/HowToLearn.png */ \"./src/images/HowToLearn.png\"), __webpack_require__.b);\nvar Films = new URL(/* asset import */ __webpack_require__(/*! ../images/Films.png */ \"./src/images/Films.png\"), __webpack_require__.b);\nvar Mesto = new URL(/* asset import */ __webpack_require__(/*! ../images/Mesto.png */ \"./src/images/Mesto.png\"), __webpack_require__.b);\nvar ToDo = new URL(/* asset import */ __webpack_require__(/*! ../images/ToDo.png */ \"./src/images/ToDo.png\"), __webpack_require__.b);\nvar initialProjectCards = [{\n  header: \"Portfolio Page\",\n  techs: \"React.js, JS, SCSS\",\n  repoLink: \"https://github.com/AnastasiiaUferova/portfolio-page\",\n  webLink: \"https://portfolio-page-8x3v-hi4hk8i2u-anastasiiauferova.vercel.app\",\n  imgLink: portfolioImage\n}, {\n  header: \"‘How to learn’ landing page\",\n  techs: \"JS, HTML5, CSS3\",\n  repoLink: \"https://github.com/AnastasiiaUferova/how-to-learn\",\n  webLink: \"https://anastasiiauferova.github.io/how-to-learn/index.html \",\n  imgLink: HowToLearn\n}, {\n  header: \"‘Film search’ website\",\n  techs: \"React.js, JS, CSS3\",\n  repoLink: \"https://github.com/AnastasiiaUferova/film-search\",\n  webLink: \"https://anastasiiauferova.github.io/film-search/#/movies\",\n  imgLink: Films\n}, {\n  header: \"‘Mesto’ (‘Place’) Website\",\n  techs: \"React.js, JS, CSS3\",\n  repoLink: \"https://github.com/AnastasiiaUferova/react-mesto-auth\",\n  webLink: \"https://anastasiiauferova.github.io/react-mesto-auth/#/\",\n  imgLink: Mesto\n}, {\n  header: \"‘To-Do’ Web App\",\n  techs: \"React.js, JS, CSS3\",\n  repoLink: \"https://github.com/AnastasiiaUferova/to-do-list-app\",\n  webLink: \"https://anastasiiauferova.github.io/to-do-list-app/#/todo \",\n  imgLink: ToDo\n}];\nvar projectSwiperSelector = document.querySelector(\".swiper-wrapper\");\n\n\n//# sourceURL=webpack://portfolio-page/./src/utils/constants.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio-page/./src/css/style.css?");

/***/ }),

/***/ "./src/assets/Anastasiia_Iuferova_JunFrontendDev.pdf":
/*!***********************************************************!*\
  !*** ./src/assets/Anastasiia_Iuferova_JunFrontendDev.pdf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/Anastasiia_Iuferova_JunFrontendDev.pdf\";\n\n//# sourceURL=webpack://portfolio-page/./src/assets/Anastasiia_Iuferova_JunFrontendDev.pdf?");

/***/ }),

/***/ "./src/images/Films.png":
/*!******************************!*\
  !*** ./src/images/Films.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"25cf50e610c3982dda05.png\";\n\n//# sourceURL=webpack://portfolio-page/./src/images/Films.png?");

/***/ }),

/***/ "./src/images/HowToLearn.png":
/*!***********************************!*\
  !*** ./src/images/HowToLearn.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e04a5e5a1dad8bd6285b.png\";\n\n//# sourceURL=webpack://portfolio-page/./src/images/HowToLearn.png?");

/***/ }),

/***/ "./src/images/Mesto.png":
/*!******************************!*\
  !*** ./src/images/Mesto.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a00eac72fc1d728d8c83.png\";\n\n//# sourceURL=webpack://portfolio-page/./src/images/Mesto.png?");

/***/ }),

/***/ "./src/images/Portfolio.png":
/*!**********************************!*\
  !*** ./src/images/Portfolio.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"da5a7c8c7b0295839a57.png\";\n\n//# sourceURL=webpack://portfolio-page/./src/images/Portfolio.png?");

/***/ }),

/***/ "./src/images/ToDo.png":
/*!*****************************!*\
  !*** ./src/images/ToDo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b6fbf50703f8a5a0ee29.png\";\n\n//# sourceURL=webpack://portfolio-page/./src/images/ToDo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;