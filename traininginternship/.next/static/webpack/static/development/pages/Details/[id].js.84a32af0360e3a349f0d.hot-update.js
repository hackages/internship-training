webpackHotUpdate("static/development/pages/Details/[id].js",{

/***/ "./src/pages/Details/[id].js":
/*!***********************************!*\
  !*** ./src/pages/Details/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _shared_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Loading */ "./src/shared/Loading.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fakeData_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fakeData.json */ "./src/fakeData.json");
var _fakeData_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fakeData.json */ "./src/fakeData.json", 1);
/* harmony import */ var _core_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/redux/store */ "./src/core/redux/store.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/jawad/Desktop/trainings/internship-training/traininginternship/src/pages/Details/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const getLessonById = id => new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(res => {
  setTimeout(() => {
    res(_fakeData_json__WEBPACK_IMPORTED_MODULE_5__.find(d => d.id === id));
  }, 1000);
});

const Details = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    state,
    dispatch
  } = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_core_redux_store__WEBPACK_IMPORTED_MODULE_6__["Store"]);
  const id = router.query.id;
  let training = undefined;

  function redirection() {
    return window.location = "".concat(process.env.REACT_APP_URL_BASE_PAYMENT, "?id=").concat(id, "&redirectTo=https%3A%2F%2Fdev.community.hackages.io%2Factivity%2Fevent%2F").concat(id);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: "ADD_TRAINING",
      payload: trainings
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getLessonById(id).then(data => {
      training = data;
      dispatch({
        type: "ADD_TRAINING",
        payload: training
      });
    });
  }, [id, training]);
  const trainings = state.trainings;

  if (!trainings) {
    training = trainings.find(t => t.id === id);
  }

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
        lineNumber: 66
      },
      __self: undefined
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, "Details"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, id), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, "Title : ", training.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, "Date : ", training.dates[0]), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, "days : ", training.dates.length), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, days), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, "Price : ", training.price + ' €', " / day "), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, "Language : ", training.topics[0].name), __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, " Description "), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
      source: training.activity.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: redirection,
      variant: "outlined",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, "Buy your training"));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_shared_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Details);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=[id].js.84a32af0360e3a349f0d.hot-update.js.map