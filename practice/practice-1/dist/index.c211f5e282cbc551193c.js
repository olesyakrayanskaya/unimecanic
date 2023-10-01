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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/placeholders */ \"./src/js/placeholders.js\");\n/* harmony import */ var _js_placeholders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_placeholders__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/inputs */ \"./src/js/inputs.js\");\n/* harmony import */ var _js_inputs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_inputs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/inputs.js":
/*!**************************!*\
  !*** ./src/js/inputs.js ***!
  \**************************/
/***/ (() => {

eval("const logoClose = document.getElementById('logo-close');\nconst inputLogo = document.getElementById('file');\nconst filePlaceholder = document.getElementById('file-placeholder');\nlogoClose.addEventListener('click', () => {\n  inputLogo.value = '';\n  filePlaceholder.style.opacity = 1;\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/inputs.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

eval("const modal = document.getElementById('mod');\nconst closeModal = document.querySelector('.modal__close');\nconst openModal = document.querySelector('.open-form');\nopenModal.addEventListener('click', () => {\n  modal.style.display = 'block';\n  openModal.style.display = 'none';\n});\ncloseModal.addEventListener('click', () => {\n  modal.style.display = 'none';\n  openModal.style.display = 'block';\n});\nwindow.addEventListener('click', event => {\n  if (event.target == modal) {\n    modal.style.display = 'none';\n    openModal.style.display = 'block';\n  }\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/placeholders.js":
/*!********************************!*\
  !*** ./src/js/placeholders.js ***!
  \********************************/
/***/ (() => {

eval("const inputs = document.querySelectorAll('.form__input_sm');\nconst inputLogo = document.getElementById('file');\nconst filePlaceholder = document.getElementById('file-placeholder');\nconst select = document.getElementById('direct');\nconst form = document.querySelector('.form');\ninputs.forEach(el => {\n  el.addEventListener('change', () => {\n    el.nextElementSibling.style.display = 'none';\n  });\n});\ninputLogo.addEventListener('change', () => {\n  filePlaceholder.style.opacity = 0;\n});\nselect.addEventListener('change', () => {\n  select.nextElementSibling.style.display = 'none';\n});\ninputs.forEach(el => {\n  el.addEventListener('blur', () => {\n    if (el.value === '') {\n      el.nextElementSibling.style.display = 'block';\n    }\n  });\n});\ninputLogo.addEventListener('blur', () => {\n  if (inputLogo.value === '') {\n    filePlaceholder.style.opacity = 1;\n  }\n});\nselect.addEventListener('blur', () => {\n  if (select.value === '') {\n    select.nextElementSibling.style.display = 'block';\n  }\n});\nform.addEventListener('reset', () => {\n  inputs.forEach(el => {\n    el.nextElementSibling.style.display = 'block';\n  });\n  filePlaceholder.style.opacity = 1;\n  select.nextElementSibling.style.display = 'block';\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/placeholders.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/main.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;