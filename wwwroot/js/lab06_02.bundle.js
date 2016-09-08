/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 214);
/******/ })
/************************************************************************/
/******/ ({

/***/ 200:
/*!********************************!*\
  !*** ./wwwroot/js/lab06_02.js ***!
  \********************************/
/***/ function(module, exports) {

	eval("\"use strict\";\n\n//excercise 2\nvar addEdition = function addEdition(title) {\n    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    var _ref$trainer = _ref.trainer;\n    var trainer = _ref$trainer === undefined ? \"TBD\" : _ref$trainer;\n    var _ref$startDate = _ref.startDate;\n    var startDate = _ref$startDate === undefined ? new Date() : _ref$startDate;\n    var _ref$duration = _ref.duration;\n    var duration = _ref$duration === undefined ? 5 : _ref$duration;\n    var _ref$city = _ref.city;\n    var city = _ref$city === undefined ? \"TBD\" : _ref$city;\n\n    console.log(title, trainer, startDate, duration, city);\n};\n\naddEdition(\"Course1\", { trainer: \"T1\", startDate: new Date(2016, 3, 1), duration: 3, city: \"New York\" });\naddEdition(\"Course2\", { startDate: new Date(2016, 3, 12) });\naddEdition(\"Course3\");//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3d3d3Jvb3QvanMvbGFiMDZfMDIuanM/ZGQ3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2V4Y2VyY2lzZSAyXHJcbmxldCBhZGRFZGl0aW9uID0gKHRpdGxlLCB7dHJhaW5lciA9IFwiVEJEXCIsIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCkgLCBkdXJhdGlvbiA9IDUsIGNpdHkgPSBcIlRCRFwifSA9IHt9KT0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlLCB0cmFpbmVyLCBzdGFydERhdGUsIGR1cmF0aW9uLCBjaXR5KTtcclxufVxyXG5cclxuYWRkRWRpdGlvbihcIkNvdXJzZTFcIiwge3RyYWluZXIgOiBcIlQxXCIsIHN0YXJ0RGF0ZSA6IG5ldyBEYXRlKDIwMTYsMywxKSwgZHVyYXRpb24gOiAzLCBjaXR5OiBcIk5ldyBZb3JrXCJ9KTtcclxuYWRkRWRpdGlvbihcIkNvdXJzZTJcIiwge3N0YXJ0RGF0ZSA6IG5ldyBEYXRlKDIwMTYsMywxMil9KTtcclxuYWRkRWRpdGlvbihcIkNvdXJzZTNcIik7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3d3dyb290L2pzL2xhYjA2XzAyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 214:
/*!**********************!*\
  !*** multi lab06_02 ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./wwwroot/js/lab06_02.js */200);


/***/ }

/******/ });