/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/smartcontract",{

/***/ "./pages/smartcontract.js":
/*!********************************!*\
  !*** ./pages/smartcontract.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SmartContract; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContainerBlock */ \"./components/ContainerBlock.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/zxero/Development/website/portfolio/myportfolio/website/pages/smartcontract.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction SmartContract() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      address = _useState[0],\n      setAddress = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var cont;\n\n    var getAddress = /*#__PURE__*/function () {\n      var _ref = (0,_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var currentAddress;\n        return _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return window.ethereum.request({\n                  method: 'eth_requestAccounts'\n                });\n\n              case 3:\n                currentAddress = _context.sent;\n                cont = true;\n                console.log(\"Current Address: \", currentAddress);\n                _context.next = 12;\n                break;\n\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context[\"catch\"](0);\n                cont = false;\n                alert(\"No Metamask Address Detected. Please login.\");\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 8]]);\n      }));\n\n      return function getAddress() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    if (window.ethereum) {\n      getAddress()[\"catch\"](console.error);\n      window.ethereum.on('chainChanged', function () {\n        window.location.reload();\n      });\n      window.ethereum.on('accountsChanged', function () {\n        getAddress()[\"catch\"](console.error);\n      });\n    } // checks if metamask is available\n    // if(window.ethereum) {\n    //   // invokes metamask to log in, and retrieves the id\n    //   const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});\n    //   console.log(\"accounts\", accounts);\n    //   // if chain is changed, this will reload the page\n    //   window.ethereum.on('chainChanged', () => {\n    //     console.log(\"chain changed\");\n    //     window.location.reload();\n    //   })\n    //   // if account selected is changed, this will reload the address\n    //   window.ethereum.on('accountsChanged', () => {\n    //     //const accounts = window.ethereum.request({method: 'eth_requestAccounts'});\n    //     //console.log(\"accounts\", accounts);\n    //   })\n    // } else {\n    //   alert(\"Please install Metamask!!\");\n    // }\n\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__.default, {\n    title: \"Project - Smart Contract\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Metamask Address: \", address]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SmartContract, \"BL/QCs5/kMqjJqJ2fF15pwEGKyE=\");\n\n_c = SmartContract;\n\nvar _c;\n\n$RefreshReg$(_c, \"SmartContract\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc21hcnRjb250cmFjdC5qcz8zMDkzIl0sIm5hbWVzIjpbIlNtYXJ0Q29udHJhY3QiLCJ1c2VTdGF0ZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwidXNlRWZmZWN0IiwiY29udCIsImdldEFkZHJlc3MiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJjdXJyZW50QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImVycm9yIiwib24iLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxHQUF5QjtBQUFBOztBQUFBLGtCQUVSQywrQ0FBUSxDQUFDLEVBQUQsQ0FGQTtBQUFBLE1BRS9CQyxPQUYrQjtBQUFBLE1BRXRCQyxVQUZzQjs7QUFLdENDLGtEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUlDLElBQUo7O0FBRUEsUUFBTUMsVUFBVTtBQUFBLGlWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFY0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFDQyx3QkFBTSxFQUFFO0FBQVQsaUJBQXhCLENBRmQ7O0FBQUE7QUFFVEMsOEJBRlM7QUFHZk4sb0JBQUksR0FBRyxJQUFQO0FBQ0FPLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsY0FBakM7QUFKZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1mTixvQkFBSSxHQUFHLEtBQVA7QUFDQVMscUJBQUssQ0FBQyw2Q0FBRCxDQUFMOztBQVBlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZSLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBV0EsUUFBSUMsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQ25CRixnQkFBVSxXQUFWLENBQ1NNLE9BQU8sQ0FBQ0csS0FEakI7QUFHQVIsWUFBTSxDQUFDQyxRQUFQLENBQWdCUSxFQUFoQixDQUFtQixjQUFuQixFQUFtQyxZQUFNO0FBQ3ZDVCxjQUFNLENBQUNVLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0QsT0FGRDtBQUlBWCxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JRLEVBQWhCLENBQW1CLGlCQUFuQixFQUFzQyxZQUFNO0FBQzFDVixrQkFBVSxXQUFWLENBQ1NNLE9BQU8sQ0FBQ0csS0FEakI7QUFFRCxPQUhEO0FBTUQsS0E3QmEsQ0FnQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNILEdBdERRLEVBc0ROLEVBdERNLENBQVQ7QUF3REEsc0JBQ0UsOERBQUMsK0RBQUQ7QUFBZ0IsU0FBSyxFQUFDLDBCQUF0QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDRTtBQUFBLHlDQUF1QmIsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQXBFdUJGLGE7O0tBQUFBLGEiLCJmaWxlIjoiLi9wYWdlcy9zbWFydGNvbnRyYWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJCbG9ja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbWFydENvbnRyYWN0KCkge1xuXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIHZhciBjb250O1xuXG4gICAgY29uc3QgZ2V0QWRkcmVzcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBZGRyZXNzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSk7XG4gICAgICAgIGNvbnQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgQWRkcmVzczogXCIsIGN1cnJlbnRBZGRyZXNzKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBjb250ID0gZmFsc2U7XG4gICAgICAgIGFsZXJ0KFwiTm8gTWV0YW1hc2sgQWRkcmVzcyBEZXRlY3RlZC4gUGxlYXNlIGxvZ2luLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBnZXRBZGRyZXNzKClcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSlcblxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgIGdldEFkZHJlc3MoKVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgIH0pXG5cblxuICAgIH1cblxuXG4gICAgICAvLyBjaGVja3MgaWYgbWV0YW1hc2sgaXMgYXZhaWxhYmxlXG4gICAgICAvLyBpZih3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIC8vICAgLy8gaW52b2tlcyBtZXRhbWFzayB0byBsb2cgaW4sIGFuZCByZXRyaWV2ZXMgdGhlIGlkXG4gICAgICAvLyAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHNcIiwgYWNjb3VudHMpO1xuXG5cbiAgICAgIC8vICAgLy8gaWYgY2hhaW4gaXMgY2hhbmdlZCwgdGhpcyB3aWxsIHJlbG9hZCB0aGUgcGFnZVxuICAgICAgLy8gICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNoYWluIGNoYW5nZWRcIik7XG4gICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgLy8gICB9KVxuXG4gICAgICAvLyAgIC8vIGlmIGFjY291bnQgc2VsZWN0ZWQgaXMgY2hhbmdlZCwgdGhpcyB3aWxsIHJlbG9hZCB0aGUgYWRkcmVzc1xuICAgICAgLy8gICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgIC8vICAgICAvL2NvbnN0IGFjY291bnRzID0gd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSk7XG4gICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhcImFjY291bnRzXCIsIGFjY291bnRzKTtcbiAgICAgIC8vICAgfSlcblxuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzayEhXCIpO1xuICAgICAgLy8gfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJCbG9jayB0aXRsZT1cIlByb2plY3QgLSBTbWFydCBDb250cmFjdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDI+TWV0YW1hc2sgQWRkcmVzczoge2FkZHJlc3N9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyQmxvY2s+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/smartcontract.js\n");

/***/ })

});