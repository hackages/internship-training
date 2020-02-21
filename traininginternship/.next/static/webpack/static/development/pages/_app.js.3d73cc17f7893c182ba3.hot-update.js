webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=_app.js.3d73cc17f7893c182ba3.hot-update.js.map