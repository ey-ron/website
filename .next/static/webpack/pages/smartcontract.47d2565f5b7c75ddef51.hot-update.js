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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SmartContract; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContainerBlock */ \"./components/ContainerBlock.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zxero/Development/website/portfolio/myportfolio/website/pages/smartcontract.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction SmartContract() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      address = _useState[0],\n      setAddress = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      balance = _useState2[0],\n      setBalance = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isMetamask = _useState3[0],\n      setMetamask = _useState3[1];\n\n  var fetchMetamaskAddressData = function fetchMetamaskAddressData() {\n    setAddress(\"-----------\");\n    setBalance(\"-----------\");\n    window.ethereum.request({\n      method: 'eth_requestAccounts'\n    });\n    window.ethereum.request({\n      method: 'eth_requestAccounts'\n    }).then(function (currentAddress) {\n      setAddress(currentAddress[0]); //console.log(\"Current Address: \", currentAddress[0]);\n\n      console.log(\"length \", currentAddress[0].length);\n\n      if (currentAddress[0].length) {\n        setMetamask(true);\n      }\n\n      window.ethereum.request({\n        method: 'eth_getBalance',\n        params: [currentAddress[0], 'latest']\n      }).then(function (currentAddressBalance) {\n        setBalance(parseInt(currentAddressBalance, 16) / Math.pow(10, 18)); //console.log(\"Current Address Balance: \", parseInt(currentAddressBalance, 16) / Math.pow(10, 18));\n      });\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (typeof window.ethereum.isMetaMask) {\n      fetchMetamaskAddressData();\n      window.ethereum.on('chainChanged', function () {\n        console.log(\"Chain Changed\");\n        window.location.reload();\n      });\n      window.ethereum.on('accountsChanged', function () {\n        console.log(\"Account Changed\");\n        setMetamask(false);\n        fetchMetamaskAddressData();\n      });\n    } else {\n      alert(\"Please install Metamask\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__.default, {\n    title: \"Project - Smart Contract\",\n    children: [isMetamask && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Metamask Address: \", address]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Address BNB Balance : \", balance, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Address TOKEN Balance : \", balance, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-red-500 text-white font-bold px-4 rounded my-20\",\n        onClick: fetchMetamaskAddressData,\n        children: \"Update Details\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this), !isMetamask && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"text-3xl bg-red-500 text-white font-bold -mt-20 px-4 rounded my-20\",\n        onClick: fetchMetamaskAddressData,\n        children: \"Login to Metamask\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SmartContract, \"1Bh/g0hBI4Ng5S16C+LkNx2kgc0=\");\n\n_c = SmartContract;\n\nvar _c;\n\n$RefreshReg$(_c, \"SmartContract\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc21hcnRjb250cmFjdC5qcz8zMDkzIl0sIm5hbWVzIjpbIlNtYXJ0Q29udHJhY3QiLCJ1c2VTdGF0ZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJpc01ldGFtYXNrIiwic2V0TWV0YW1hc2siLCJmZXRjaE1ldGFtYXNrQWRkcmVzc0RhdGEiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwiY3VycmVudEFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicGFyYW1zIiwiY3VycmVudEFkZHJlc3NCYWxhbmNlIiwicGFyc2VJbnQiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiaXNNZXRhTWFzayIsIm9uIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxrQkFFUkMsK0NBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUUvQkMsT0FGK0I7QUFBQSxNQUV0QkMsVUFGc0I7O0FBQUEsbUJBR1JGLCtDQUFRLENBQUMsQ0FBRCxDQUhBO0FBQUEsTUFHL0JHLE9BSCtCO0FBQUEsTUFHdEJDLFVBSHNCOztBQUFBLG1CQUlKSiwrQ0FBUSxDQUFDLEtBQUQsQ0FKSjtBQUFBLE1BSS9CSyxVQUorQjtBQUFBLE1BSW5CQyxXQUptQjs7QUFNdEMsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFNO0FBQ3JDTCxjQUFVLENBQUMsYUFBRCxDQUFWO0FBQ0FFLGNBQVUsQ0FBQyxhQUFELENBQVY7QUFFQUksVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQUF4QjtBQUVBSCxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQXhCLEVBQ0NDLElBREQsQ0FDTSxVQUFBQyxjQUFjLEVBQUc7QUFDckJYLGdCQUFVLENBQUNXLGNBQWMsQ0FBQyxDQUFELENBQWYsQ0FBVixDQURxQixDQUVyQjs7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQkcsTUFBekM7O0FBQ0EsVUFBSUgsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQkcsTUFBdEIsRUFBOEI7QUFDNUJWLG1CQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBRURFLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBQ0MsY0FBTSxFQUFFLGdCQUFUO0FBQTJCTSxjQUFNLEVBQUUsQ0FBQ0osY0FBYyxDQUFDLENBQUQsQ0FBZixFQUFvQixRQUFwQjtBQUFuQyxPQUF4QixFQUNDRCxJQURELENBQ00sVUFBQU0scUJBQXFCLEVBQUc7QUFDNUJkLGtCQUFVLENBQUNlLFFBQVEsQ0FBQ0QscUJBQUQsRUFBd0IsRUFBeEIsQ0FBUixHQUFzQ0UsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhLEVBQWIsQ0FBdkMsQ0FBVixDQUQ0QixDQUU1QjtBQUNELE9BSkQ7QUFLRCxLQWREO0FBZUQsR0FyQkQ7O0FBdUJBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLE9BQU9kLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQmMsVUFBM0IsRUFBdUM7QUFDckNoQiw4QkFBd0I7QUFFeEJDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQmUsRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUMsWUFBTTtBQUN2Q1YsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBUCxjQUFNLENBQUNpQixRQUFQLENBQWdCQyxNQUFoQjtBQUNELE9BSEQ7QUFLQWxCLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQmUsRUFBaEIsQ0FBbUIsaUJBQW5CLEVBQXNDLFlBQU07QUFDMUNWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FULG1CQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FDLGdDQUF3QjtBQUN6QixPQUpEO0FBTUQsS0FkRCxNQWNPO0FBQ0xvQixXQUFLLENBQUMseUJBQUQsQ0FBTDtBQUNEO0FBQ0YsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVDtBQXFCQSxzQkFDRSw4REFBQywrREFBRDtBQUFnQixTQUFLLEVBQUMsMEJBQXRCO0FBQUEsZUFDR3RCLFVBQVUsaUJBQ1Q7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNBO0FBQUEseUNBQXVCSixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUEsNkNBQTJCRSxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQUEsK0NBQTZCQSxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxlQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQSxlQUtBO0FBQVEsaUJBQVMsRUFBQyxvREFBbEI7QUFBdUUsZUFBTyxFQUFFSSx3QkFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQSxlQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQVdHLENBQUNGLFVBQUQsaUJBQ0M7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNFO0FBQVEsaUJBQVMsRUFBQyxvRUFBbEI7QUFBdUYsZUFBTyxFQUFFRSx3QkFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBckV1QlIsYTs7S0FBQUEsYSIsImZpbGUiOiIuL3BhZ2VzL3NtYXJ0Y29udHJhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lckJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNtYXJ0Q29udHJhY3QoKSB7XG5cbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzTWV0YW1hc2ssIHNldE1ldGFtYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IGZldGNoTWV0YW1hc2tBZGRyZXNzRGF0YSA9ICgpID0+IHtcbiAgICBzZXRBZGRyZXNzKFwiLS0tLS0tLS0tLS1cIik7XG4gICAgc2V0QmFsYW5jZShcIi0tLS0tLS0tLS0tXCIpO1xuXG4gICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSk7XG5cbiAgICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cyd9KVxuICAgIC50aGVuKGN1cnJlbnRBZGRyZXNzPT4ge1xuICAgICAgc2V0QWRkcmVzcyhjdXJyZW50QWRkcmVzc1swXSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiQ3VycmVudCBBZGRyZXNzOiBcIiwgY3VycmVudEFkZHJlc3NbMF0pO1xuICAgICAgY29uc29sZS5sb2coXCJsZW5ndGggXCIsIGN1cnJlbnRBZGRyZXNzWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoY3VycmVudEFkZHJlc3NbMF0ubGVuZ3RoKSB7XG4gICAgICAgIHNldE1ldGFtYXNrKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2dldEJhbGFuY2UnLCBwYXJhbXM6IFtjdXJyZW50QWRkcmVzc1swXSwgJ2xhdGVzdCddfSlcbiAgICAgIC50aGVuKGN1cnJlbnRBZGRyZXNzQmFsYW5jZT0+IHtcbiAgICAgICAgc2V0QmFsYW5jZShwYXJzZUludChjdXJyZW50QWRkcmVzc0JhbGFuY2UsIDE2KSAvIE1hdGgucG93KDEwLCAxOCkpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ3VycmVudCBBZGRyZXNzIEJhbGFuY2U6IFwiLCBwYXJzZUludChjdXJyZW50QWRkcmVzc0JhbGFuY2UsIDE2KSAvIE1hdGgucG93KDEwLCAxOCkpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bS5pc01ldGFNYXNrKSB7XG4gICAgICBmZXRjaE1ldGFtYXNrQWRkcmVzc0RhdGEoKTtcblxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhaW4gQ2hhbmdlZFwiKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSlcblxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBDaGFuZ2VkXCIpO1xuICAgICAgICBzZXRNZXRhbWFzayhmYWxzZSk7XG4gICAgICAgIGZldGNoTWV0YW1hc2tBZGRyZXNzRGF0YSgpO1xuICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrXCIpO1xuICAgIH1cbiAgfSwgW10pXG5cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJCbG9jayB0aXRsZT1cIlByb2plY3QgLSBTbWFydCBDb250cmFjdFwiPlxuICAgICAge2lzTWV0YW1hc2sgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDI+TWV0YW1hc2sgQWRkcmVzczoge2FkZHJlc3N9PC9oMj5cbiAgICAgICAgPGgyPkFkZHJlc3MgQk5CIEJhbGFuY2UgOiB7YmFsYW5jZX0gPC9oMj5cbiAgICAgICAgPGgyPkFkZHJlc3MgVE9LRU4gQmFsYW5jZSA6IHtiYWxhbmNlfSA8L2gyPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHgtNCByb3VuZGVkIG15LTIwXCIgb25DbGljaz17ZmV0Y2hNZXRhbWFza0FkZHJlc3NEYXRhfT5VcGRhdGUgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICA8YnIvPlxuICAgICAgPC9kaXY+fVxuXG4gICAgICB7IWlzTWV0YW1hc2sgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC0zeGwgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCAtbXQtMjAgcHgtNCByb3VuZGVkIG15LTIwXCIgb25DbGljaz17ZmV0Y2hNZXRhbWFza0FkZHJlc3NEYXRhfT5Mb2dpbiB0byBNZXRhbWFzazwvYnV0dG9uPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9Db250YWluZXJCbG9jaz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/smartcontract.js\n");

/***/ })

});