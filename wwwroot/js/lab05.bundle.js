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
/******/ 	return __webpack_require__(__webpack_require__.s = 212);
/******/ })
/************************************************************************/
/******/ ({

/***/ 198:
/*!*****************************!*\
  !*** ./wwwroot/js/lab05.js ***!
  \*****************************/
/***/ function(module, exports) {

	eval("'use strict';\n\nvar CreateCustomer = function CreateCustomer(id, name, city) {\n    return {\n        id: id,\n        name: name,\n        city: city,\n        nrOfUnpaidBills: 0,\n        buyStuff: function buyStuff() {\n            this.nrOfUnpaidBills++;\n        },\n        payBill: function payBill() {\n            this.nrOfUnpaidBills--;\n        },\n        toString: function toString() {\n            return \"(\" + this.id + \") \" + this.name + \" - \" + this.city;\n        }\n    };\n};\n\nvar c1 = CreateCustomer(1, \"John\", \"New York\");\n\nc1.buyStuff();\nc1.buyStuff();\nc1.buyStuff();\nconsole.log(c1 + \" has \" + c1.nrOfUnpaidBills);\nc1.payBill();\nconsole.log(c1 + \" has \" + c1.nrOfUnpaidBills);//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3d3d3Jvb3QvanMvbGFiMDUuanM/MWRkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgQ3JlYXRlQ3VzdG9tZXIgPSAoaWQsIG5hbWUsIGNpdHkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjaXR5LFxyXG4gICAgICAgIG5yT2ZVbnBhaWRCaWxsczogMCxcclxuICAgICAgICBidXlTdHVmZigpIHtcclxuICAgICAgICAgICAgdGhpcy5uck9mVW5wYWlkQmlsbHMrKztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBheUJpbGwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnJPZlVucGFpZEJpbGxzLS07XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAoJHt0aGlzLmlkfSkgJHt0aGlzLm5hbWV9IC0gJHt0aGlzLmNpdHl9YDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5sZXQgYzEgPSBDcmVhdGVDdXN0b21lcigxLCBcIkpvaG5cIiwgXCJOZXcgWW9ya1wiKTtcclxuXHJcbmMxLmJ1eVN0dWZmKCk7XHJcbmMxLmJ1eVN0dWZmKCk7XHJcbmMxLmJ1eVN0dWZmKCk7XHJcbmNvbnNvbGUubG9nKGAke2MxfSBoYXMgJHtjMS5uck9mVW5wYWlkQmlsbHN9YCk7XHJcbmMxLnBheUJpbGwoKTtcclxuY29uc29sZS5sb2coYCR7YzF9IGhhcyAke2MxLm5yT2ZVbnBhaWRCaWxsc31gKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd3d3cm9vdC9qcy9sYWIwNS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFaQTtBQUFBO0FBREE7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 212:
/*!*******************!*\
  !*** multi lab05 ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./wwwroot/js/lab05.js */198);


/***/ }

/******/ });