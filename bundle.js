/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./sass/style.scss");




})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/


const burgerButton = document.querySelector(".side-menu__burger");
const burgerOpenCloseButtons = document.querySelectorAll(".side-menu__burger svg");
const mainLogo = document.querySelector(".side-menu__logo");
const sideMenuLinkSpans = document.querySelectorAll(".side-menu__link span");
const bottomListTexts = document.querySelectorAll(".bottom-list__text");
const sideMenuInput = document.querySelector(".side-menu__input");
const sideMenu = document.querySelector(".side-menu");
const containers = document.querySelectorAll(".container");

// Open menu

const openMenu = () => {
  burgerOpenCloseButtons.forEach((item) => {
    item.classList.toggle("hidden");
  });
  if (!mainLogo.classList.contains("hidden")) {
    mainLogo.classList.add("hidden");
  } else {
    mainLogo.classList.remove("hidden");
  }
  sideMenuLinkSpans.forEach((item) => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
  bottomListTexts.forEach((item) => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
  if (!sideMenuInput.classList.contains("side-menu__input--small")) {
    sideMenuInput.classList.add("side-menu__input--small");
  } else {
    sideMenuInput.classList.remove("side-menu__input--small");
  }
  if (!sideMenu.classList.contains("side-menu--open")) {
    sideMenu.classList.add("side-menu--open");
  } else {
    sideMenu.classList.remove("side-menu--open");
  }
  containers.forEach((item) => {
    if (!item.classList.contains("container--active")) {
      item.classList.add("container--active");
    } else {
      item.classList.remove("container--active");
    }
  });
};

burgerButton.addEventListener("click", openMenu);

// Tabs

const sideMenuItems = document.querySelectorAll(".side-menu__item");
const sideMenuLinks = document.querySelectorAll(".side-menu__link");
const sideMenuSvgs = document.querySelectorAll(".side-menu__svg");

const hideContent = () => {
  sideMenuItems.forEach((item) => {
    item.classList.remove("side-menu__item--active");
  });
  sideMenuLinks.forEach((item) => {
    item.classList.remove("side-menu__link--active");
  });
  sideMenuSvgs.forEach((item) => {
    item.classList.remove("side-menu__svg--active");
  });
};

const showContent = (i = 2) => {
  sideMenuItems[i].classList.add("side-menu__item--active");
  sideMenuLinks[i].classList.add("side-menu__link--active");
  sideMenuSvgs[i].classList.add("side-menu__svg--active");
};

hideContent();
showContent();

})();

/******/ })()
;