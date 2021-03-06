/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/nav.js */ "./src/js/nav.js");
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_nav_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_studyCarousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/studyCarousel.js */ "./src/js/studyCarousel.js");
/* harmony import */ var _js_studyCarousel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_studyCarousel_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");




/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// nav
document.onclick = toggleNav;

function toggleNav() {
  var navElement = document.getElementById('nav');
  var navBtn = document.getElementById('navBtn');

  if (!navElement.contains(event.target)) {
    navElement.classList.remove('nav-active');
  }

  if (navBtn.contains(event.target)) {
    navElement.classList.toggle('nav-active');
  }
} // nav-dropdown


var acc = document.getElementsByClassName("nav-current");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle('nav-current--active');

    if (this.querySelector('.nav-dropdown')) {
      var currentDropdown = this.querySelector('.nav-dropdown');
      currentDropdown.classList.toggle('nav-dropdown--active');
    }
  });
}

/***/ }),

/***/ "./src/js/studyCarousel.js":
/*!*********************************!*\
  !*** ./src/js/studyCarousel.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

var firstCarousel = $('.study-carousel');
var secondCarousel = $('.study-carousel--second');
var threeCarousel = $('.study-carousel--three');
firstCarousel.owlCarousel({
  items: 3,
  mouseDrag: false,
  touchDrag: false,
  loop: false,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      touchDrag: true,
      loop: false,
      dots: true,
      nav: true,
      navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">']
    },
    540: {
      items: 2,
      mouseDrag: true,
      touchDrag: true,
      loop: false,
      dots: true,
      nav: true,
      navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">']
    },
    767: {
      items: 3
    }
  }
});
secondCarousel.owlCarousel({
  items: 3,
  mouseDrag: false,
  touchDrag: false,
  loop: false,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      touchDrag: true,
      loop: false,
      dots: true,
      nav: true,
      navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">']
    },
    540: {
      items: 2,
      mouseDrag: true,
      touchDrag: true,
      loop: false,
      dots: true,
      nav: true,
      navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">']
    },
    767: {
      items: 3
    }
  }
});
threeCarousel.owlCarousel({
  items: 3,
  mouseDrag: false,
  touchDrag: false,
  loop: false,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      touchDrag: true,
      loop: false,
      dots: true,
      nav: true,
      navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">']
    },
    540: {
      items: 2,
      mouseDrag: true,
      touchDrag: true,
      loop: false,
      dots: true,
      nav: true,
      navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">']
    },
    767: {
      items: 3
    }
  }
});

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map