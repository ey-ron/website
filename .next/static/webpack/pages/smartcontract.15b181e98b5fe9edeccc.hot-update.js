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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SmartContract; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContainerBlock */ \"./components/ContainerBlock.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/zxero/Development/website/portfolio/myportfolio/website/pages/smartcontract.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction SmartContract() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      address = _useState[0],\n      setAddress = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var getAddress = /*#__PURE__*/function () {\n      var _ref = (0,_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var _currentAddress;\n\n        return _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return window.ethereum.request({\n                  method: 'eth_requestAccounts'\n                });\n\n              case 3:\n                _currentAddress = _context.sent;\n                setAddress(_currentAddress);\n                console.log(\"Current Address: \", _currentAddress);\n                console.log(_currentAddress.length);\n\n                if (_currentAddress.length > 0) {\n                  getBalance()[\"catch\"](console.error);\n                }\n\n                _context.next = 14;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](0);\n                setAddress(null);\n                alert(\"No Metamask Address Detected. \\nPlease login.\");\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 10]]);\n      }));\n\n      return function getAddress() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    var getBalance = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        var currentAddressBalance;\n        return _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return window.ethereum.request({\n                  method: 'eth_getBalance',\n                  params: [currentAddress, 'latest']\n                });\n\n              case 3:\n                currentAddressBalance = _context2.sent;\n                console.log(\"currentAddressBalance: \", currentAddressBalance);\n                _context2.next = 9;\n                break;\n\n              case 7:\n                _context2.prev = 7;\n                _context2.t0 = _context2[\"catch\"](0);\n\n              case 9:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 7]]);\n      }));\n\n      return function getBalance() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    if (window.ethereum) {\n      console.log(\"Fetching Address\");\n      getAddress()[\"catch\"](console.error);\n      window.ethereum.on('chainChanged', function () {\n        console.log(\"Chain Changed\");\n        window.location.reload();\n      });\n      window.ethereum.on('accountsChanged', function () {\n        console.log(\"Account Changed\");\n        getAddress()[\"catch\"](console.error);\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__.default, {\n    title: \"Project - Smart Contract\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Metamask Address: \", address]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SmartContract, \"BL/QCs5/kMqjJqJ2fF15pwEGKyE=\");\n\n_c = SmartContract;\n\nvar _c;\n\n$RefreshReg$(_c, \"SmartContract\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc21hcnRjb250cmFjdC5qcz8zMDkzIl0sIm5hbWVzIjpbIlNtYXJ0Q29udHJhY3QiLCJ1c2VTdGF0ZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwidXNlRWZmZWN0IiwiZ2V0QWRkcmVzcyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImN1cnJlbnRBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImdldEJhbGFuY2UiLCJlcnJvciIsImFsZXJ0IiwicGFyYW1zIiwiY3VycmVudEFkZHJlc3NCYWxhbmNlIiwib24iLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxHQUF5QjtBQUFBOztBQUFBLGtCQUVSQywrQ0FBUSxDQUFDLEVBQUQsQ0FGQTtBQUFBLE1BRS9CQyxPQUYrQjtBQUFBLE1BRXRCQyxVQUZzQjs7QUFLdENDLGtEQUFTLENBQUMsWUFBTTtBQUVkLFFBQU1DLFVBQVU7QUFBQSxpVkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVjQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQUNDLHdCQUFNLEVBQUU7QUFBVCxpQkFBeEIsQ0FGZDs7QUFBQTtBQUVUQywrQkFGUztBQUdmUCwwQkFBVSxDQUFDTyxlQUFELENBQVY7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixlQUFqQztBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLGVBQWMsQ0FBQ0csTUFBM0I7O0FBQ0Esb0JBQUlILGVBQWMsQ0FBQ0csTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUM3QkMsNEJBQVUsV0FBVixDQUNTSCxPQUFPLENBQUNJLEtBRGpCO0FBRUQ7O0FBVGM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZZlosMEJBQVUsQ0FBQyxJQUFELENBQVY7QUFDQWEscUJBQUssQ0FBQywrQ0FBRCxDQUFMOztBQWJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZYLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBaUJBLFFBQU1TLFVBQVU7QUFBQSxrVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRXFCUixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQUNDLHdCQUFNLEVBQUUsZ0JBQVQ7QUFBMkJRLHdCQUFNLEVBQUUsQ0FBQ1AsY0FBRCxFQUFpQixRQUFqQjtBQUFuQyxpQkFBeEIsQ0FGckI7O0FBQUE7QUFFVFEscUNBRlM7QUFHZlAsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDTSxxQkFBdkM7QUFIZTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFWSixVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQVNBLFFBQUlSLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNuQkksYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQVAsZ0JBQVUsV0FBVixDQUNTTSxPQUFPLENBQUNJLEtBRGpCO0FBR0FULFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQlksRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUMsWUFBTTtBQUN2Q1IsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBTixjQUFNLENBQUNjLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0QsT0FIRDtBQUtBZixZQUFNLENBQUNDLFFBQVAsQ0FBZ0JZLEVBQWhCLENBQW1CLGlCQUFuQixFQUFzQyxZQUFNO0FBQzFDUixlQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBUCxrQkFBVSxXQUFWLENBQ1NNLE9BQU8sQ0FBQ0ksS0FEakI7QUFFRCxPQUpEO0FBTUQ7QUFDRixHQTdDUSxFQTZDTixFQTdDTSxDQUFUO0FBK0NBLHNCQUNFLDhEQUFDLCtEQUFEO0FBQWdCLFNBQUssRUFBQywwQkFBdEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0U7QUFBQSx5Q0FBdUJiLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0EzRHVCRixhOztLQUFBQSxhIiwiZmlsZSI6Ii4vcGFnZXMvc21hcnRjb250cmFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyQmxvY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU21hcnRDb250cmFjdCgpIHtcblxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBnZXRBZGRyZXNzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3VycmVudEFkZHJlc3MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cyd9KTtcbiAgICAgICAgc2V0QWRkcmVzcyhjdXJyZW50QWRkcmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBBZGRyZXNzOiBcIiwgY3VycmVudEFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QWRkcmVzcy5sZW5ndGgpO1xuICAgICAgICBpZiAoY3VycmVudEFkZHJlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGdldEJhbGFuY2UoKVxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBzZXRBZGRyZXNzKG51bGwpO1xuICAgICAgICBhbGVydChcIk5vIE1ldGFtYXNrIEFkZHJlc3MgRGV0ZWN0ZWQuIFxcblBsZWFzZSBsb2dpbi5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBZGRyZXNzQmFsYW5jZSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfZ2V0QmFsYW5jZScsIHBhcmFtczogW2N1cnJlbnRBZGRyZXNzLCAnbGF0ZXN0J119KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50QWRkcmVzc0JhbGFuY2U6IFwiLCBjdXJyZW50QWRkcmVzc0JhbGFuY2UpO1xuICAgICAgfSBjYXRjaCB7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZldGNoaW5nIEFkZHJlc3NcIik7XG4gICAgICBnZXRBZGRyZXNzKClcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGFpbiBDaGFuZ2VkXCIpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9KVxuXG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IENoYW5nZWRcIik7XG4gICAgICAgIGdldEFkZHJlc3MoKVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgIH0pXG5cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckJsb2NrIHRpdGxlPVwiUHJvamVjdCAtIFNtYXJ0IENvbnRyYWN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMj5NZXRhbWFzayBBZGRyZXNzOiB7YWRkcmVzc308L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXJCbG9jaz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/smartcontract.js\n");

/***/ })

});