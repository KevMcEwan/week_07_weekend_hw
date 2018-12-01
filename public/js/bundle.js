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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TvShows = __webpack_require__(/*! ./models/tv_shows.js */ \"./src/models/tv_shows.js\");\nconst TvShowListView = __webpack_require__(/*! ./views/tv_show_list_view.js */ \"./src/views/tv_show_list_view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('Ready to rock');\n  const listContainer = document.querySelector('#show-list');\n  const tvShowListView = new TvShowListView(listContainer);\n  tvShowListView.bindEvents();\n\n  const shows = new TvShows;\n  shows.getData();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/tv_shows.js":
/*!********************************!*\
  !*** ./src/models/tv_shows.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst TvShows = function (){\n  this.tvShowsData = [];\n};\n\nTvShows.prototype.getData = function () {\n  const requestHelper = new Request ('http://api.tvmaze.com/shows');\n  requestHelper.get()\n  .then(data => {\n    this.tvShowsData = data;\n    PubSub.publish('TvShows:list-of-shows-ready', this.tvShowsData);\n  });\n};\n\nmodule.exports = TvShows;\n\n// 'http://api.tvmaze.com/shows'\n\n\n//# sourceURL=webpack:///./src/models/tv_shows.js?");

/***/ }),

/***/ "./src/views/tv_show_detail_view.js":
/*!******************************************!*\
  !*** ./src/views/tv_show_detail_view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const TvShowDetailView = function () {};\n\nTvShowDetailView.prototype.createTvShowDetail = function (show){\n  const tvShowDetail = document.createElement('div');\n  tvShowDetail.classList.add('tv-show-detail');\n\n  const name = document.createElement('h3');\n  name.textContent = show.name;\n  tvShowDetail.appendChild(name);\n\n  const tvShowDetailsList = document.createElement('ul');\n\n  const summary = this.createDetailListItem('Summary', show.summary);\n  tvShowDetailsList.appendChild(summary);\n\n  const image = document.createElement('img');\n  image.src = show.image.medium;\n  tvShowDetailsList.appendChild(image);\n\n  tvShowDetail.appendChild(tvShowDetailsList);\n\n  return tvShowDetail;\n};\n\nTvShowDetailView.prototype.createDetailListItem = function (label, property) {\n  const element = document.createElement('li');\n  element.textContent = `${label}: ${property}`;\n  return element;\n};\n\nmodule.exports = TvShowDetailView;\n\n\n//# sourceURL=webpack:///./src/views/tv_show_detail_view.js?");

/***/ }),

/***/ "./src/views/tv_show_list_view.js":
/*!****************************************!*\
  !*** ./src/views/tv_show_list_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst TvShowDetailView = __webpack_require__(/*! ./tv_show_detail_view.js */ \"./src/views/tv_show_detail_view.js\");\n\nconst TvShowListView = function (container) {\n  this.container = container;\n};\n\nTvShowListView.prototype.bindEvents = function () {\n  PubSub.subscribe('TvShows:list-of-shows-ready', (event) => {\n    this.renderTvShowDetailViews(event.detail);\n  });\n};\n\nTvShowListView.prototype.renderTvShowDetailViews = function (tvShows) {\n  tvShows.forEach( (show) => {\n    const showItem = this.createTvShowListItem(show);\n    this.container.appendChild(showItem);\n  });\n};\n\nTvShowListView.prototype.createTvShowListItem = function (show) {\n  const tvShowDetailView = new TvShowDetailView();\n  const tvShowDetail = tvShowDetailView.createTvShowDetail(show);\n  return tvShowDetail;\n};\n\nmodule.exports = TvShowListView;\n\n\n//# sourceURL=webpack:///./src/views/tv_show_list_view.js?");

/***/ })

/******/ });