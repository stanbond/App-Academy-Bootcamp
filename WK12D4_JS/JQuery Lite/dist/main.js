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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n\n    constructor (htmlEles) {\n        this.htmlEles = htmlEles;\n    };\n\n    html(string) {\n        if (string) {\n            debugger\n            this.htmlEles.forEach(el => {\n                el.innerHTML = string \n            })\n        }\n        else {\n            return this.htmlEles.first.innerHTML\n        }\n\n    }\n\n    empty() {\n        this.html(\"\")\n        return this.htmlEles;\n    }\n\n    append(arg) {\n        \n        for (let i = 0; i < this.htmlEles.length; i++) {\n            \n            if (typeof arg === 'string') {\n                this.htmlEles[i].innerHTML += arg;\n            }\n        \n            else if (arg instanceof HTMLElement) {\n                \n                this.htmlEles[i].innerHTML += arg.outerHTML;\n            }\n\n            else {\n                \n                for (let j = 0; j < arg.length; j++) {\n                this.htmlEles[i].innerHTML += arg.htmlEles[j].outerHTML;\n                }\n            }\n        }\n    }\n\n\n    attr(name, value) {\n        if (typeof value === 'string') {\n            this.htmlEles.forEach(el => {\n                el.setAttribute(name,value)\n            })\n        } else {\n            debugger\n            return this.htmlEles[0].getAttribute(name);\n        };\n    };\n\n    addClass (className) {\n        this.attr('class', className)\n    }\n\n    removeClass () {\n        this.attr('class', \"\")\n    }\n\n    children() {\n\n    }\n\n     parents() {\n\n     }\n\n     find(selector) {\n\n     }\n\n     remove() {\n       \n     }\n\n}\nmodule.exports = DOMNodeCollection;\n\n/*\nconst ul = document.createElement('ul');\nconst $ul = $l(ul);\nconst li = document.createElement('li');\nconst $li = $l(li);\n$ul.append($li);\n*/\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nWindow.prototype.$l = function(arg) {\n    if (typeof arg === 'string') {\n        let nodeList = this.document.getElementsByClassName(arg);\n        const nodeArr = Array.from(nodeList);\n        return new DOMNodeCollection(nodeArr);\n    } \n    else if (arg instanceof HTMLElement) {\n        return new DOMNodeCollection ([arg]);\n    };\n}\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });