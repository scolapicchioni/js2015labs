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
/******/ 	return __webpack_require__(__webpack_require__.s = 216);
/******/ })
/************************************************************************/
/******/ ({

/***/ 202:
/*!*****************************!*\
  !*** ./wwwroot/js/lab08.js ***!
  \*****************************/
/***/ function(module, exports) {

	eval("'use strict';\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar serverdata = [{\n    email: \"user1@gmail.com\",\n    name: \"User1\",\n    address: \"Street 1\"\n}, {\n    email: \"user2@hotmail.com\",\n    name: \"User2\",\n    address: \"Street 2\"\n}, {\n    email: \"user3@yahoo.com\",\n    name: \"User3\",\n    address: \"Street 3\"\n}, {\n    email: \"user4@outlook.com\",\n    name: \"User4\",\n    address: \"Street 4\"\n}];\n\nvar createUser = function createUser() {\n    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n    var email = _ref.email;\n    var name = _ref.name;\n    var address = _ref.address;\n\n    return _defineProperty({\n        email: email, name: name, address: address\n    }, Symbol.toPrimitive, function (hint) {\n        //if(hint==\"string\"){\n        return this.email + \" \" + this.name + \" \" + this.address;\n        //}\n        //else return this;\n    });\n};\n\nvar users = function () {\n    var res = new Map();\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = serverdata[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var user = _step.value;\n\n            res.set(user.email, createUser(user));\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return res;\n}();\n\nvar _iteratorNormalCompletion2 = true;\nvar _didIteratorError2 = false;\nvar _iteratorError2 = undefined;\n\ntry {\n    for (var _iterator2 = users.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var _step2$value = _slicedToArray(_step2.value, 2);\n\n        var key = _step2$value[0];\n        var user = _step2$value[1];\n\n        console.log(\"key: \" + key + \" - value: \" + user);\n    }\n} catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n            _iterator2.return();\n        }\n    } finally {\n        if (_didIteratorError2) {\n            throw _iteratorError2;\n        }\n    }\n}\n\nvar addUser = function addUser(user) {\n    users.set(user.email, createUser(user));\n};\n\nconsole.log(users.size);\naddUser({ email: \"a@a.a\", name: \"bla\", address: \"yada\" });\nconsole.log(users.size);\nconsole.log(\"\" + users.get(\"a@a.a\"));\n\naddUser({ email: \"a@a.a\", name: \"gu\", address: \"plump\" });\nconsole.log(users.has(\"a@a.a\"));\nconsole.log(\"\" + users.get(\"a@a.a\"));//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3d3d3Jvb3QvanMvbGFiMDguanM/ODJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgc2VydmVyZGF0YSA9IFt7XHJcbiAgICBlbWFpbDogXCJ1c2VyMUBnbWFpbC5jb21cIixcclxuICAgIG5hbWU6IFwiVXNlcjFcIixcclxuICAgIGFkZHJlc3M6IFwiU3RyZWV0IDFcIlxyXG59LCB7XHJcbiAgICBlbWFpbDogXCJ1c2VyMkBob3RtYWlsLmNvbVwiLFxyXG4gICAgbmFtZTogXCJVc2VyMlwiLFxyXG4gICAgYWRkcmVzczogXCJTdHJlZXQgMlwiXHJcbn0sIHtcclxuICAgIGVtYWlsOiBcInVzZXIzQHlhaG9vLmNvbVwiLFxyXG4gICAgbmFtZTogXCJVc2VyM1wiLFxyXG4gICAgYWRkcmVzczogXCJTdHJlZXQgM1wiXHJcbn0sIHtcclxuICAgIGVtYWlsOiBcInVzZXI0QG91dGxvb2suY29tXCIsXHJcbiAgICBuYW1lOiBcIlVzZXI0XCIsXHJcbiAgICBhZGRyZXNzOiBcIlN0cmVldCA0XCJcclxufV07XHJcblxyXG5sZXQgY3JlYXRlVXNlciA9ICh7ZW1haWwsIG5hbWUsIGFkZHJlc3N9ID0ge30pPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVtYWlsLCBuYW1lLCBhZGRyZXNzLFxyXG4gICAgICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpIHtcclxuICAgICAgICAgICAgLy9pZihoaW50PT1cInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuZW1haWx9ICR7dGhpcy5uYW1lfSAke3RoaXMuYWRkcmVzc31gO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgLy9lbHNlIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IHVzZXJzID0gKCgpID0+IHtcclxuICAgIGxldCByZXMgPSBuZXcgTWFwKCk7XHJcbiAgICBmb3IobGV0IHVzZXIgb2Ygc2VydmVyZGF0YSkge1xyXG4gICAgICAgIHJlcy5zZXQodXNlci5lbWFpbCwgY3JlYXRlVXNlcih1c2VyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59KSgpO1xyXG5cclxuZm9yKGxldCBba2V5LHVzZXJdIG9mIHVzZXJzLmVudHJpZXMoKSkge1xyXG4gICAgY29uc29sZS5sb2coYGtleTogJHtrZXl9IC0gdmFsdWU6ICR7dXNlcn1gKTtcclxufVxyXG5cclxubGV0IGFkZFVzZXIgPSAodXNlcik9PntcclxuICAgIHVzZXJzLnNldCh1c2VyLmVtYWlsLCBjcmVhdGVVc2VyKHVzZXIpKTtcclxufTtcclxuXHJcbmNvbnNvbGUubG9nKHVzZXJzLnNpemUpO1xyXG5hZGRVc2VyKHtlbWFpbDpcImFAYS5hXCIsIG5hbWU6XCJibGFcIixhZGRyZXNzOlwieWFkYVwifSk7XHJcbmNvbnNvbGUubG9nKHVzZXJzLnNpemUpO1xyXG5jb25zb2xlLmxvZyhgJHt1c2Vycy5nZXQoXCJhQGEuYVwiKX1gKTtcclxuXHJcbmFkZFVzZXIoe2VtYWlsOlwiYUBhLmFcIiwgbmFtZTpcImd1XCIsYWRkcmVzczpcInBsdW1wXCJ9KTtcclxuY29uc29sZS5sb2codXNlcnMuaGFzKFwiYUBhLmFcIikpO1xyXG5jb25zb2xlLmxvZyhgJHt1c2Vycy5nZXQoXCJhQGEuYVwiKX1gKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3d3dyb290L2pzL2xhYjA4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBZkE7QUFDQTtBQWlCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBRkE7QUFIQTtBQUNBO0FBV0E7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQUNBO0FBSUE7QUFMQTtBQUNBOzs7Ozs7QUFPQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 216:
/*!*******************!*\
  !*** multi lab08 ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./wwwroot/js/lab08.js */202);


/***/ }

/******/ });