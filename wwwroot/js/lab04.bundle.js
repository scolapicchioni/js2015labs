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
/******/ 	return __webpack_require__(__webpack_require__.s = 211);
/******/ })
/************************************************************************/
/******/ ({

/***/ 197:
/*!*****************************!*\
  !*** ./wwwroot/js/lab04.js ***!
  \*****************************/
/***/ function(module, exports) {

	eval("'use strict';\n\nfunction sum() {\n    var result = 0;\n\n    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {\n        numbers[_key] = arguments[_key];\n    }\n\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var n = _step.value;\n\n            result += n;\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return result;\n}\n\nvar sum2 = function sum2() {\n    for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        numbers[_key2] = arguments[_key2];\n    }\n\n    return numbers.reduce(function (prev, curr) {\n        return prev + curr;\n    }, 0);\n};\n\nfunction hello() {\n    var name = arguments.length <= 0 || arguments[0] === undefined ? \"you\" : arguments[0];\n\n    console.log(\"Hello \" + name);\n}\n\nvar hello2 = function hello2() {\n    var name = arguments.length <= 0 || arguments[0] === undefined ? \"you\" : arguments[0];\n    return console.log(\"Hello \" + name);\n};\n\nconsole.log(sum(1, 2, 3, 4, 5));\nconsole.log(sum2(1, 2, 3, 4, 5));\nhello();\nhello(\"Simona\");\nhello2();\nhello2(\"Simona\");//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3d3d3Jvb3QvanMvbGFiMDQuanM/OWQxYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBzdW0oLi4ubnVtYmVycyl7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGZvcihsZXQgbiBvZiBudW1iZXJzKVxyXG4gICAgICAgIHJlc3VsdCArPSBuO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxubGV0IHN1bTIgPSAoLi4ubnVtYmVycykgPT4gbnVtYmVycy5yZWR1Y2UoKHByZXYsIGN1cnIpPT4gcHJldiArIGN1cnIgLDApXHJcblxyXG5mdW5jdGlvbiBoZWxsbyhuYW1lID0gXCJ5b3VcIil7XHJcbiAgICBjb25zb2xlLmxvZyhgSGVsbG8gJHtuYW1lfWApO1xyXG59XHJcblxyXG4gICAgbGV0IGhlbGxvMiA9IChuYW1lID0gXCJ5b3VcIikgPT4gY29uc29sZS5sb2coYEhlbGxvICR7bmFtZX1gKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN1bSgxLDIsMyw0LDUpKTtcclxuICAgIGNvbnNvbGUubG9nKHN1bTIoMSwyLDMsNCw1KSk7XHJcbiAgICBoZWxsbygpO1xyXG4gICAgaGVsbG8oXCJTaW1vbmFcIik7XHJcbiAgICBoZWxsbzIoKTtcclxuICAgIGhlbGxvMihcIlNpbW9uYVwiKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd3d3cm9vdC9qcy9sYWIwNC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFDQTtBQUdBO0FBSkE7QUFDQTtBQU1BO0FBQUE7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 211:
/*!*******************!*\
  !*** multi lab04 ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./wwwroot/js/lab04.js */197);


/***/ }

/******/ });