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
/******/ 	return __webpack_require__(__webpack_require__.s = 209);
/******/ })
/************************************************************************/
/******/ ({

/***/ 195:
/*!*****************************!*\
  !*** ./wwwroot/js/lab02.js ***!
  \*****************************/
/***/ function(module, exports) {

	eval("\"use strict\";\n\n//before\nfor (var i = 1; i <= 4; i++) {\n    var b = document.getElementById(\"button\" + i);\n    b.addEventListener(\"click\", function () {\n        console.log(\"You clicked on \" + i);\n    });\n}\n\n//after\n'use strict';\n\nvar _loop = function _loop(_i) {\n    var b = document.getElementById(\"button\" + _i);\n    b.addEventListener(\"click\", function () {\n        console.log(\"You clicked on \" + _i);\n    });\n};\n\nfor (var _i = 1; _i <= 4; _i++) {\n    _loop(_i);\n}//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3d3d3Jvb3QvanMvbGFiMDIuanM/NDllOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2JlZm9yZVxyXG5mb3IgKHZhciBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgIHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIiArIGkpO1xyXG4gICAgYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQgb24gXCIgKyBpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy9hZnRlclxyXG4ndXNlIHN0cmljdCc7XHJcbmZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiICsgaSk7XHJcbiAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgY2xpY2tlZCBvbiBcIiArIGkpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd3d3cm9vdC9qcy9sYWIwMi5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7O0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQUZBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 209:
/*!*******************!*\
  !*** multi lab02 ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./wwwroot/js/lab02.js */195);


/***/ }

/******/ });