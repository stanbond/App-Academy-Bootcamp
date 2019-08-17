/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n// import 'warmup.js';\n\n\nclass Clock {\n  constructor(element) {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    this.clockEl = element;\n    // 3. Call printTime.\n    this.printTime();\n    \n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    Object(_warmup_js__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, this.clockEl);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const clockEl = document.getElementById(\"clock\");\n    console.log(clockEl);\n    const clock = new Clock(clockEl);\n})\n\n\n// const clock = new Clock();\n// const clockHolder = document.getElementsByClassName(\"clock-holder\");\n// clockHolder.appendChild(clock.printTime());\n\n/*\nclass Clock {\n    constructor(params) {\n\n    }\n}\n\nlet clock = new Clock();\nlet clockElement =\n\nmodule.exports = Clock;\n*/\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator () {\n  // Create an a tag\n  // Set the a tag's innerHTML to be the dog's name\n  // Set the a tag's href to be the dog's information link\n  // Create a li tag\n  // Give the li tag the class of 'dog-link'\n  // Append the a tag to the li tag\n  // Push the completed li into an array of the dog links completed so far.\n  let links = []\n  // for (let i = 0; i < dogs.length; i++) {\n    Object.keys(dogs).forEach(key => {\n      const a = document.createElement(\"a\");\n      const li = document.createElement(\"li\");\n      a.setAttribute(\"href\", dogs[key]);\n      a.innerText = key;\n      li.classList.add(\"dog-link\");\n      li.classList.add(\"hide-dog\");\n      li.appendChild(a);\n      links.push(li);\n    })\n  // }\n  return links;\n};\n\n\nfunction attachDogLinks () {\n  // invoke the dogLinkCreator  \n  // assign the result to a variable named dogLinks.\n  let dogLinks = dogLinkCreator();\n  let dropdownUL = document.querySelector('.drop-down-dog-list');\n  dogLinks.forEach(li => {\n    dropdownUL.appendChild(li);\n  });\n\n  // Now that you have your dogLinks array iterate \n  // through it and attach each li to the ul element \n  // with the class of .drop - down - dog - list\n};\n\nfunction handleEnter () {\n  let dogLinks = document.getElementsByClassName('dog-link');\n  Array.from(dogLinks).forEach(li => {\n    li.classList.remove(\"hide-dog\");\n  });\n};\n\nfunction handleLeave () {\n  let dogLinks = document.getElementsByClassName('dog-link');\n  Array.from(dogLinks).forEach(li => {\n    li.classList.add(\"hide-dog\");\n  });\n};\n\n\nattachDogLinks();\nconst hoverEle = document.querySelector(\".drop-down-dog-nav\");\nhoverEle.addEventListener('mouseenter', handleEnter);\nhoverEle.addEventListener('mouseleave', handleLeave);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import bouncer from \"./bouncer.js\";\n\n\n// const clockEl = document.getElementById('clock');\n// const clock = new Clock(clockEl);\n// import { Course } from './course.js';\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    // The desired behavior of this function is the input string will be converted \n    // into a < p > tag and then appended to the input HTML Element\n\n    Array.from(htmlElement.children).forEach(e => htmlElement.removeChild(e));\n    \n    \n    const p = document.createElement(\"p\");\n    p.innerText = string;\n    htmlElement.appendChild(p);\n};\n\n\nhtmlGenerator('Party Time.', partyHeader);\n// let logo = htmlGenerator('Party Time.', partyHeader);\n\n// logo.classList.add(\"marquee\");\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });