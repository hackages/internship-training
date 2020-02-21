module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/redux/store.js":
/*!*********************************!*\
  !*** ./src/core/redux/store.js ***!
  \*********************************/
/*! exports provided: Store, detailsReducer, StoreProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailsReducer", function() { return detailsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jawad/Desktop/trainings/internship-training/traininginternship/src/core/redux/store.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Store = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);
const initialState = {
  trainings: []
};
const detailsReducer = (state = initialState, action) => {
  if (action.type === 'SET_TRAININGS') {
    return {
      trainings: action.payload
    };
  } else if (action.type === 'ADD_TRAINING') {
    if (state.trainings.find(e => e.id == action.payload.id)) {
      // pour les doublons ( children HOME -> DETAILS -> HOME
      return {
        trainings: state.trainings
      };
    } else {
      return {
        trainings: [...state.trainings, action.payload]
      };
    }
  }

  return state;
};
function StoreProvider(props) {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(detailsReducer, initialState);
  const value = {
    state,
    dispatch
  };
  return __jsx(Store.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.children);
}

/***/ }),

/***/ "./src/fakeData.json":
/*!***************************!*\
  !*** ./src/fakeData.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"title01\",\"days\":2,\"dates\":[\"2020-01-24\",\"2020-01-26\"],\"location\":{\"country\":\"Belgium\",\"locality\":\"Brussels\"},\"price\":200,\"topics\":[{\"name\":\"JS\"}],\"activity\":{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"}},{\"id\":2,\"title\":\"title02\",\"days\":1,\"dates\":[\"2020-01-20\"],\"location\":{\"country\":\"Belgium\",\"locality\":\"Liege\"},\"price\":200,\"topics\":[{\"name\":\"Angular\"}],\"activity\":{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"}},{\"id\":3,\"title\":\"title03\",\"days\":2,\"dates\":[\"2020-01-24\",\"2020-01-25\",\"2020-01-27\"],\"location\":{\"country\":\"France\",\"locality\":\"Paris\"},\"price\":200,\"topics\":[{\"name\":\"JS\"}],\"activity\":{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"}},{\"id\":4,\"title\":\"title04\",\"days\":2,\"dates\":[\"2020-01-02\"],\"location\":{\"country\":\"UK\",\"locality\":\"London\"},\"price\":200,\"topics\":[{\"name\":\"C#\"}],\"activity\":{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"}}]");

/***/ }),

/***/ "./src/pages/Details/[id].js":
/*!***********************************!*\
  !*** ./src/pages/Details/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Loading */ "./src/shared/Loading.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fakeData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fakeData.json */ "./src/fakeData.json");
var _fakeData_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fakeData.json */ "./src/fakeData.json", 1);
/* harmony import */ var _core_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/redux/store */ "./src/core/redux/store.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jawad/Desktop/trainings/internship-training/traininginternship/src/pages/Details/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const getLessonById = id => new Promise(res => {
  setTimeout(() => {
    res(_fakeData_json__WEBPACK_IMPORTED_MODULE_4__.find(d => d.id == id));
  }, 1000);
});

const Details = () => {
  const {
    0: training,
    1: setTraining
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    state,
    dispatch
  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_core_redux_store__WEBPACK_IMPORTED_MODULE_5__["Store"]);
  const id = router.query.id;

  function redirection() {
    return window.location = `${process.env.REACT_APP_URL_BASE_PAYMENT}?id=${id}&redirectTo=https%3A%2F%2Fdev.community.hackages.io%2Factivity%2Fevent%2F${id}`;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getLessonById(id).then(data => {
      if (data) {
        setTraining(data);
        dispatch({
          type: "ADD_TRAINING",
          payload: data
        });
      }
    });
  }, [id, training]);

  if (training) {
    const days = training.dates.map((date, index) => {
      if (index === 0) {
        return "From " + date + " ";
      } else if (index === training.dates.length - 1) {
        return "to " + date;
      }

      return "";
    });
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, "Details"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, id), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, "Title : ", training.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, "Date : ", training.dates[0]), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, "days : ", training.dates.length), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, days), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, "Price : ", training.price + ' €', " / day "), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, "Language : ", training.topics[0].name), __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, " Description "), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      source: training.activity.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onClick: redirection,
      variant: "outlined",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, "Buy your training"));
  } else {
    return __jsx(_shared_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ "./src/shared/Loading.js":
/*!*******************************!*\
  !*** ./src/shared/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jawad/Desktop/trainings/internship-training/traininginternship/src/shared/Loading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Loading() {
  return __jsx("div", {
    className: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** multi ./src/pages/Details/[id].js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jawad/Desktop/trainings/internship-training/traininginternship/src/pages/Details/[id].js */"./src/pages/Details/[id].js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map