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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SmartContract; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContainerBlock */ \"./components/ContainerBlock.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/zxero/Development/website/portfolio/myportfolio/website/pages/smartcontract.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction SmartContract() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      address = _useState[0],\n      setAddress = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      balance = _useState2[0],\n      setBalance = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var getAddress = function getAddress() {\n      try {\n        //const currentAddress = await window.ethereum.request({method: 'eth_requestAccounts'});\n        window.ethereum.request({\n          method: 'eth_requestAccounts'\n        }).then(function (currentAddress) {\n          setAddress(currentAddress[0]);\n          console.log(\"Current Address: \", currentAddress[0]);\n        });\n      } catch (_unused) {\n        setAddress(null);\n        alert(\"No Metamask Address Detected. \\nPlease login.\");\n      }\n    };\n\n    var getBalance = /*#__PURE__*/function () {\n      var _ref = (0,_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var currentAddressBalance;\n        return _Users_zxero_Development_website_portfolio_myportfolio_website_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return window.ethereum.request({\n                  method: 'eth_getBalance',\n                  params: [address, 'latest']\n                });\n\n              case 3:\n                currentAddressBalance = _context.sent;\n                setBalance(parseInt(currentAddressBalance, 16) / Math.pow(10, 18));\n                console.log(\"currentAddressBalance: \", parseInt(currentAddressBalance, 16) / Math.pow(10, 18));\n                _context.next = 11;\n                break;\n\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context[\"catch\"](0);\n                alert(\"error get balance\");\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 8]]);\n      }));\n\n      return function getBalance() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    if (window.ethereum) {\n      console.log(\"Fetching Address\"); // getAddress()\n      //   .catch(console.error);\n\n      window.ethereum.request({\n        method: 'eth_requestAccounts'\n      }).then(function (currentAddress) {\n        setAddress(currentAddress[0]);\n        console.log(\"Current Address: \", currentAddress[0]);\n        window.ethereum.request({\n          method: 'eth_getBalance',\n          params: [currentAddress[0], 'latest']\n        }).then(function (currentAddressBalance) {\n          setBalance(parseInt(currentAddressBalance, 16) / Math.pow(10, 18));\n          console.log(\"Current Address Balance: \", parseInt(currentAddressBalance, 16) / Math.pow(10, 18));\n        });\n      });\n      console.log(\"Address Length: \", address.length);\n\n      if (address.length > 0) {\n        getBalance()[\"catch\"](console.error);\n      }\n\n      window.ethereum.on('chainChanged', function () {\n        console.log(\"Chain Changed\");\n        window.location.reload();\n      });\n      window.ethereum.on('accountsChanged', function () {\n        console.log(\"Account Changed\");\n        getAddress()[\"catch\"](console.error);\n        console.log(\"Address Length: \", address.length);\n\n        if (address.length > 0) {\n          getBalance()[\"catch\"](console.error);\n        }\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__.default, {\n    title: \"Project - Smart Contract\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Metamask Address: \", address]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Address Balance : \", balance, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SmartContract, \"7S0rt66GPksbFNCSkgHbLqMyOQs=\");\n\n_c = SmartContract;\n\nvar _c;\n\n$RefreshReg$(_c, \"SmartContract\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc21hcnRjb250cmFjdC5qcz8zMDkzIl0sIm5hbWVzIjpbIlNtYXJ0Q29udHJhY3QiLCJ1c2VTdGF0ZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ1c2VFZmZlY3QiLCJnZXRBZGRyZXNzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsImN1cnJlbnRBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiZ2V0QmFsYW5jZSIsInBhcmFtcyIsImN1cnJlbnRBZGRyZXNzQmFsYW5jZSIsInBhcnNlSW50IiwiTWF0aCIsInBvdyIsImxlbmd0aCIsImVycm9yIiwib24iLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxHQUF5QjtBQUFBOztBQUFBLGtCQUVSQywrQ0FBUSxDQUFDLEVBQUQsQ0FGQTtBQUFBLE1BRS9CQyxPQUYrQjtBQUFBLE1BRXRCQyxVQUZzQjs7QUFBQSxtQkFHUkYsK0NBQVEsQ0FBQyxDQUFELENBSEE7QUFBQSxNQUcvQkcsT0FIK0I7QUFBQSxNQUd0QkMsVUFIc0I7O0FBTXRDQyxrREFBUyxDQUFDLFlBQU07QUFFZCxRQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFVBQUk7QUFDRjtBQUNBQyxjQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQUNDLGdCQUFNLEVBQUU7QUFBVCxTQUF4QixFQUNDQyxJQURELENBQ00sVUFBQUMsY0FBYyxFQUFHO0FBQ3JCVixvQkFBVSxDQUFDVSxjQUFjLENBQUMsQ0FBRCxDQUFmLENBQVY7QUFDQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixjQUFjLENBQUMsQ0FBRCxDQUEvQztBQUNELFNBSkQ7QUFNRCxPQVJELENBUUUsZ0JBQU07QUFDTlYsa0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQWEsYUFBSyxDQUFDLCtDQUFELENBQUw7QUFDRDtBQUNGLEtBYkQ7O0FBZUEsUUFBTUMsVUFBVTtBQUFBLGlWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFcUJULE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBQ0Msd0JBQU0sRUFBRSxnQkFBVDtBQUEyQk8sd0JBQU0sRUFBRSxDQUFDaEIsT0FBRCxFQUFVLFFBQVY7QUFBbkMsaUJBQXhCLENBRnJCOztBQUFBO0FBRVRpQixxQ0FGUztBQUdmZCwwQkFBVSxDQUFDZSxRQUFRLENBQUNELHFCQUFELEVBQXdCLEVBQXhCLENBQVIsR0FBc0NFLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxFQUFiLENBQXZDLENBQVY7QUFDQVIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDSyxRQUFRLENBQUNELHFCQUFELEVBQXdCLEVBQXhCLENBQVIsR0FBc0NFLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxFQUFiLENBQTdFO0FBSmU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNZk4scUJBQUssQ0FBQyxtQkFBRCxDQUFMOztBQU5lO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZDLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBV0EsUUFBSVQsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQ25CSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQURtQixDQUVuQjtBQUNBOztBQUVBUCxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQUNDLGNBQU0sRUFBRTtBQUFULE9BQXhCLEVBQ0NDLElBREQsQ0FDTSxVQUFBQyxjQUFjLEVBQUc7QUFDckJWLGtCQUFVLENBQUNVLGNBQWMsQ0FBQyxDQUFELENBQWYsQ0FBVjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsY0FBYyxDQUFDLENBQUQsQ0FBL0M7QUFFQUwsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFDQyxnQkFBTSxFQUFFLGdCQUFUO0FBQTJCTyxnQkFBTSxFQUFFLENBQUNMLGNBQWMsQ0FBQyxDQUFELENBQWYsRUFBb0IsUUFBcEI7QUFBbkMsU0FBeEIsRUFDQ0QsSUFERCxDQUNNLFVBQUFPLHFCQUFxQixFQUFHO0FBQzVCZCxvQkFBVSxDQUFDZSxRQUFRLENBQUNELHFCQUFELEVBQXdCLEVBQXhCLENBQVIsR0FBc0NFLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxFQUFiLENBQXZDLENBQVY7QUFDQVIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDSyxRQUFRLENBQUNELHFCQUFELEVBQXdCLEVBQXhCLENBQVIsR0FBc0NFLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxFQUFiLENBQS9FO0FBQ0QsU0FKRDtBQU1ELE9BWEQ7QUFhQVIsYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NiLE9BQU8sQ0FBQ3FCLE1BQXhDOztBQUNBLFVBQUlyQixPQUFPLENBQUNxQixNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCTixrQkFBVSxXQUFWLENBQ1NILE9BQU8sQ0FBQ1UsS0FEakI7QUFFRDs7QUFFRGhCLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQmdCLEVBQWhCLENBQW1CLGNBQW5CLEVBQW1DLFlBQU07QUFDdkNYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQVAsY0FBTSxDQUFDa0IsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRCxPQUhEO0FBS0FuQixZQUFNLENBQUNDLFFBQVAsQ0FBZ0JnQixFQUFoQixDQUFtQixpQkFBbkIsRUFBc0MsWUFBTTtBQUMxQ1gsZUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQVIsa0JBQVUsV0FBVixDQUNTTyxPQUFPLENBQUNVLEtBRGpCO0FBR0FWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDYixPQUFPLENBQUNxQixNQUF4Qzs7QUFDQSxZQUFJckIsT0FBTyxDQUFDcUIsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUN0Qk4sb0JBQVUsV0FBVixDQUNTSCxPQUFPLENBQUNVLEtBRGpCO0FBRUQ7QUFDRixPQVZEO0FBWUQ7QUFDRixHQXRFUSxFQXNFTixFQXRFTSxDQUFUO0FBd0VBLHNCQUNFLDhEQUFDLCtEQUFEO0FBQWdCLFNBQUssRUFBQywwQkFBdEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0U7QUFBQSx5Q0FBdUJ0QixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEseUNBQXVCRSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0F0RnVCSixhOztLQUFBQSxhIiwiZmlsZSI6Ii4vcGFnZXMvc21hcnRjb250cmFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyQmxvY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU21hcnRDb250cmFjdCgpIHtcblxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgZ2V0QWRkcmVzcyA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vY29uc3QgY3VycmVudEFkZHJlc3MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cyd9KTtcbiAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSlcbiAgICAgICAgLnRoZW4oY3VycmVudEFkZHJlc3M9PiB7XG4gICAgICAgICAgc2V0QWRkcmVzcyhjdXJyZW50QWRkcmVzc1swXSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IEFkZHJlc3M6IFwiLCBjdXJyZW50QWRkcmVzc1swXSk7XG4gICAgICAgIH0pXG5cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBzZXRBZGRyZXNzKG51bGwpO1xuICAgICAgICBhbGVydChcIk5vIE1ldGFtYXNrIEFkZHJlc3MgRGV0ZWN0ZWQuIFxcblBsZWFzZSBsb2dpbi5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBZGRyZXNzQmFsYW5jZSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfZ2V0QmFsYW5jZScsIHBhcmFtczogW2FkZHJlc3MsICdsYXRlc3QnXX0pO1xuICAgICAgICBzZXRCYWxhbmNlKHBhcnNlSW50KGN1cnJlbnRBZGRyZXNzQmFsYW5jZSwgMTYpIC8gTWF0aC5wb3coMTAsIDE4KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudEFkZHJlc3NCYWxhbmNlOiBcIiwgcGFyc2VJbnQoY3VycmVudEFkZHJlc3NCYWxhbmNlLCAxNikgLyBNYXRoLnBvdygxMCwgMTgpKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBhbGVydChcImVycm9yIGdldCBiYWxhbmNlXCIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBBZGRyZXNzXCIpO1xuICAgICAgLy8gZ2V0QWRkcmVzcygpXG4gICAgICAvLyAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICAgICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSlcbiAgICAgIC50aGVuKGN1cnJlbnRBZGRyZXNzPT4ge1xuICAgICAgICBzZXRBZGRyZXNzKGN1cnJlbnRBZGRyZXNzWzBdKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IEFkZHJlc3M6IFwiLCBjdXJyZW50QWRkcmVzc1swXSk7XG5cbiAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9nZXRCYWxhbmNlJywgcGFyYW1zOiBbY3VycmVudEFkZHJlc3NbMF0sICdsYXRlc3QnXX0pXG4gICAgICAgIC50aGVuKGN1cnJlbnRBZGRyZXNzQmFsYW5jZT0+IHtcbiAgICAgICAgICBzZXRCYWxhbmNlKHBhcnNlSW50KGN1cnJlbnRBZGRyZXNzQmFsYW5jZSwgMTYpIC8gTWF0aC5wb3coMTAsIDE4KSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IEFkZHJlc3MgQmFsYW5jZTogXCIsIHBhcnNlSW50KGN1cnJlbnRBZGRyZXNzQmFsYW5jZSwgMTYpIC8gTWF0aC5wb3coMTAsIDE4KSk7XG4gICAgICAgIH0pXG5cbiAgICAgIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKFwiQWRkcmVzcyBMZW5ndGg6IFwiLCBhZGRyZXNzLmxlbmd0aCk7XG4gICAgICBpZiAoYWRkcmVzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldEJhbGFuY2UoKVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhaW4gQ2hhbmdlZFwiKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSlcblxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBDaGFuZ2VkXCIpO1xuICAgICAgICBnZXRBZGRyZXNzKClcbiAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIkFkZHJlc3MgTGVuZ3RoOiBcIiwgYWRkcmVzcy5sZW5ndGgpO1xuICAgICAgICBpZiAoYWRkcmVzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZ2V0QmFsYW5jZSgpXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckJsb2NrIHRpdGxlPVwiUHJvamVjdCAtIFNtYXJ0IENvbnRyYWN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMj5NZXRhbWFzayBBZGRyZXNzOiB7YWRkcmVzc308L2gyPlxuICAgICAgICA8aDI+QWRkcmVzcyBCYWxhbmNlIDoge2JhbGFuY2V9IDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lckJsb2NrPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/smartcontract.js\n");

/***/ })

});