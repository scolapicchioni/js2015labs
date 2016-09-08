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
/******/ 	return __webpack_require__(__webpack_require__.s = 215);
/******/ })
/************************************************************************/
/******/ ({

/***/ 201:
/*!*****************************!*\
  !*** ./wwwroot/js/lab07.js ***!
  \*****************************/
/***/ function(module, exports) {

	eval("'use strict';\n\n// An object without Symbol.toPrimitive property.\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar obj1 = {};\nconsole.log(\"************obj1********************\");\nconsole.log(+obj1); // NaN\nconsole.log(\"\" + obj1); // \"[object Object]\"\nconsole.log(obj1 == 0); // false\n\n// An object with Symbol.toPrimitive property.\nvar obj2 = _defineProperty({}, Symbol.toPrimitive, function (hint) {\n    if (hint == \"number\") {\n        return 10;\n    }\n    if (hint == \"string\") {\n        return \"hello\";\n    }\n    return true;\n});\nconsole.log(\"*************obj2*******************\");\nconsole.log(+obj2); // 10      -- hint is \"number\"\nconsole.log(\"\" + obj2); // \"hello\" -- hint is \"string\"\nconsole.log(obj2 == 0); //false -- hint is \"default\"//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3d3d3Jvb3QvanMvbGFiMDcuanM/MTE2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBBbiBvYmplY3Qgd2l0aG91dCBTeW1ib2wudG9QcmltaXRpdmUgcHJvcGVydHkuXHJcbnZhciBvYmoxID0geyB9O1xyXG5jb25zb2xlLmxvZyhcIioqKioqKioqKioqKm9iajEqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuY29uc29sZS5sb2coK29iajEpOyAgICAgLy8gTmFOXHJcbmNvbnNvbGUubG9nKGAke29iajF9YCk7IC8vIFwiW29iamVjdCBPYmplY3RdXCJcclxuY29uc29sZS5sb2cob2JqMSA9PSAwKTsgLy8gZmFsc2VcclxuXHJcbi8vIEFuIG9iamVjdCB3aXRoIFN5bWJvbC50b1ByaW1pdGl2ZSBwcm9wZXJ0eS5cclxudmFyIG9iajIgPSB7XHJcbiAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludCkge1xyXG4gICAgICBpZiAoaGludCA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpbnQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwiaGVsbG9cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07XHJcbmNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKm9iajIqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5jb25zb2xlLmxvZygrb2JqMik7ICAgICAvLyAxMCAgICAgIC0tIGhpbnQgaXMgXCJudW1iZXJcIlxyXG5jb25zb2xlLmxvZyhgJHtvYmoyfWApOyAvLyBcImhlbGxvXCIgLS0gaGludCBpcyBcInN0cmluZ1wiXHJcbmNvbnNvbGUubG9nKG9iajIgPT0gMCk7IC8vZmFsc2UgLS0gaGludCBpcyBcImRlZmF1bHRcIlxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3d3dyb290L2pzL2xhYjA3LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 215:
/*!*******************!*\
  !*** multi lab07 ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./wwwroot/js/lab07.js */201);


/***/ }

/******/ });