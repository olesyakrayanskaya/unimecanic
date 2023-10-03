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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/placeholders */ \"./src/js/placeholders.js\");\n/* harmony import */ var _js_placeholders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_placeholders__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/inputs */ \"./src/js/inputs.js\");\n\n\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/inputs.js":
/*!**************************!*\
  !*** ./src/js/inputs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/logo.svg */ \"./src/assets/images/logo.svg\");\nconst logoClose = document.getElementById('logo-close');\nconst logoFileIcon = document.getElementById('icon-file');\nconst inputLogo = document.getElementById('file');\nconst filePlaceholder = document.getElementById('file-placeholder');\nconst logo = document.getElementById('logo');\nconst logoText = document.querySelector('.logo__text');\n\nlogoClose.addEventListener('click', () => {\n  inputLogo.value = '';\n  filePlaceholder.style.opacity = 1;\n  logo.src = _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;\n  logoText.style.display = 'inline-block';\n  logoFileIcon.style.display = 'block';\n});\ninputLogo.addEventListener('change', event => {\n  const files = event.target.files;\n  const countFiles = files.length;\n  if (!countFiles) {\n    alert('Не выбран файл!');\n    return;\n  }\n  const selectedFile = files[0];\n  if (!/^image/.test(selectedFile.type)) {\n    alert('Выбранный файл не является изображением!');\n    return;\n  }\n  const reader = new FileReader();\n  reader.readAsDataURL(selectedFile);\n  reader.addEventListener('load', event => {\n    logo.src = event.target.result;\n    logo.alt = selectedFile.name;\n    logo.textContent = selectedFile.name;\n    logo.style.width = '164px';\n    logo.style.height = '164px';\n    logo.style.borderRadius = '50%';\n    logo.style.objectFit = 'cover';\n    logo.style.objectPosition = 'center';\n  });\n  logoText.style.display = 'none';\n  logoFileIcon.style.display = 'none';\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/inputs.js?");

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

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"logo.20871447fca62e546628.svg\";\n\n//# sourceURL=webpack://webpackbaseconfig/./src/assets/images/logo.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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