module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZjpD");


/***/ }),

/***/ "K3nC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openDB; });
const sqlite3 = __webpack_require__("b2Bn");

const sqlite = __webpack_require__("oAu/"); //https://stackoverflow.com/questions/63823970/sqlite-filename-cannot-be-null-undefined


async function openDB() {
  return sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });
}
/****ADD CUSTOME YOUR PATH WITH MIGRATIONS****/
// async function setup() {
//     const db = await openDb();
//     await db.migrate(
//         {
//             migrationsPath: './src/migrations', 
//             force: 'last'
//         }
//     )
// }

/***/ }),

/***/ "YcMO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return secretKey; });
const secretKey = '03d61622-78bf-474d-b00c-b4856383ee9f';

/***/ }),

/***/ "ZjpD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _api_secretKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YcMO");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rlPI");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_openDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K3nC");


const bcrypt = __webpack_require__("jeq0");

const jwt = __webpack_require__("tMJi");



async function Login(req, res) {
  const db = await Object(_api_openDB__WEBPACK_IMPORTED_MODULE_2__[/* openDB */ "a"])();

  if (req.method === 'POST') {
    const people = await db.get(`SELECT * FROM People WHERE email= ?`, req.body.email);
    bcrypt.compare(req.body.password, people.password, async function (err, result) {
      // result == true
      console.log("login");

      if (!err && result) {
        const token = jwt.sign({
          sub: people.id,
          Email: people.email
        }, _api_secretKey__WEBPACK_IMPORTED_MODULE_0__[/* secretKey */ "a"], {
          expiresIn: '1h'
        });
        res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_1___default.a.serialize('auth', token, {
          httpOnly: true,
          secure: true,
          // allow not use https on dev
          sameSite: 'strict',
          //same with true
          maxAge: 3600,
          path: '/'
        }));
        res.json({
          message: "Welcome back Master!"
        });
      } else {
        res.json({
          message: "Oop! Something went wrong!"
        });
      }
    });
  } else {
    res.status(405).json({
      message: "This page only for Post!!!"
    });
  }
}

/***/ }),

/***/ "b2Bn":
/***/ (function(module, exports) {

module.exports = require("sqlite3");

/***/ }),

/***/ "jeq0":
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "oAu/":
/***/ (function(module, exports) {

module.exports = require("sqlite");

/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });