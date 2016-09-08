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
/******/ 	return __webpack_require__(__webpack_require__.s = 213);
/******/ })
/************************************************************************/
/******/ ({

/***/ 199:
/*!********************************!*\
  !*** ./wwwroot/js/lab06_01.js ***!
  \********************************/
/***/ function(module, exports) {

	eval("'use strict';\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar course = {\n    title: 'ES6',\n    description: 'blabla',\n    editions: [{\n        trainer: 'Matt Smith',\n        dates: {\n            start: '01/01/2016',\n            end: '05/01/2016'\n        },\n        location: {\n            address1: 'One Way Street',\n            city: 'New York'\n        }\n    }, {\n        trainer: 'Frank Gambale',\n        dates: {\n            start: '03/05/2016',\n            end: '08/05/2016'\n        },\n        location: {\n            address1: 'Two Blocks Road',\n            city: 'Las Vegas'\n        }\n    }, {\n        trainer: 'John Doe',\n        dates: {\n            start: '10/10/2016',\n            end: '15/10/2016'\n        },\n        location: {\n            address1: 'One Way Street',\n            city: 'New York'\n        }\n    }]\n};\n\nvar firstEdition = function firstEdition() {\n    var title = course.title;\n\n    var _course$editions = _slicedToArray(course.editions, 1);\n\n    var _course$editions$ = _course$editions[0];\n    var _course$editions$$tra = _course$editions$.trainer;\n    var trainer = _course$editions$$tra === undefined ? \"TBD\" : _course$editions$$tra;\n    var startDate = _course$editions$.dates.start;\n    var city = _course$editions$.location.city;\n\n    return { title: title, trainer: trainer, startDate: startDate, city: city };\n};\n\nvar _firstEdition = firstEdition();\n\nvar t = _firstEdition.trainer;\nvar c = _firstEdition.city;\n\nconsole.log(t, c);//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3d3d3Jvb3QvanMvbGFiMDZfMDEuanM/ZDc3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgY291cnNlID0ge1xyXG4gICAgdGl0bGU6ICdFUzYnLFxyXG4gICAgZGVzY3JpcHRpb246ICdibGFibGEnLFxyXG4gICAgZWRpdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyYWluZXI6ICdNYXR0IFNtaXRoJyxcclxuICAgICAgICAgICAgZGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAnMDEvMDEvMjAxNicsXHJcbiAgICAgICAgICAgICAgICBlbmQgOiAnMDUvMDEvMjAxNidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxOiAnT25lIFdheSBTdHJlZXQnLFxyXG4gICAgICAgICAgICAgICAgY2l0eSA6ICdOZXcgWW9yaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cmFpbmVyOiAnRnJhbmsgR2FtYmFsZScsXHJcbiAgICAgICAgICAgIGRhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogJzAzLzA1LzIwMTYnLFxyXG4gICAgICAgICAgICAgICAgZW5kOiAnMDgvMDUvMjAxNidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxOiAnVHdvIEJsb2NrcyBSb2FkJyxcclxuICAgICAgICAgICAgICAgIGNpdHk6ICdMYXMgVmVnYXMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJhaW5lcjogJ0pvaG4gRG9lJyxcclxuICAgICAgICAgICAgZGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAnMTAvMTAvMjAxNicsXHJcbiAgICAgICAgICAgICAgICBlbmQgOiAnMTUvMTAvMjAxNidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxOiAnT25lIFdheSBTdHJlZXQnLFxyXG4gICAgICAgICAgICAgICAgY2l0eSA6ICdOZXcgWW9yaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn07XHJcblxyXG5cclxubGV0IGZpcnN0RWRpdGlvbiA9ICgpID0+IHtcclxuICAgIGxldCB7IHRpdGxlLCBlZGl0aW9ucyA6IFt7dHJhaW5lciA9IFwiVEJEXCIsIGRhdGVzIDoge3N0YXJ0IDogc3RhcnREYXRlIH0sIGxvY2F0aW9uIDoge2NpdHkgfSB9XX0gPSBjb3Vyc2U7XHJcbiAgICByZXR1cm4ge3RpdGxlLCB0cmFpbmVyLCBzdGFydERhdGUsIGNpdHl9O1xyXG59XHJcblxyXG5sZXQge3RyYWluZXIgOiB0LCBjaXR5OmN9ID0gZmlyc3RFZGl0aW9uKCk7XHJcbmNvbnNvbGUubG9nKHQsIGMpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3d3dyb290L2pzL2xhYjA2XzAxLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBbEJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQTdCQTtBQUhBO0FBQ0E7QUF3Q0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 213:
/*!**********************!*\
  !*** multi lab06_01 ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./wwwroot/js/lab06_01.js */199);


/***/ }

/******/ });