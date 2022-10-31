/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/smartcontract";
exports.ids = ["pages/smartcontract"];
exports.modules = {

/***/ "./pages/smartcontract.js":
/*!********************************!*\
  !*** ./pages/smartcontract.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SmartContract; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContainerBlock */ \"./components/ContainerBlock.js\");\n\nvar _jsxFileName = \"/Users/zxero/Development/website/portfolio/myportfolio/website/pages/smartcontract.js\";\n\n\nfunction SmartContract() {\n  const {\n    0: address,\n    1: setAddress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: balance,\n    1: setBalance\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const {\n    0: isMetamask,\n    1: setMetamask\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  const fetchMetamaskAddressData = () => {\n    setAddress(\"-----------\");\n    setBalance(\"-----------\");\n    window.ethereum.request({\n      method: 'eth_requestAccounts'\n    });\n    window.ethereum.request({\n      method: 'eth_requestAccounts'\n    }).then(currentAddress => {\n      setAddress(currentAddress[0]); //console.log(\"Current Address: \", currentAddress[0]);\n\n      window.ethereum.request({\n        method: 'eth_getBalance',\n        params: [currentAddress[0], 'latest']\n      }).then(currentAddressBalance => {\n        setBalance(parseInt(currentAddressBalance, 16) / Math.pow(10, 18)); //console.log(\"Current Address Balance: \", parseInt(currentAddressBalance, 16) / Math.pow(10, 18));\n      });\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (typeof window.ethereum.isMetaMask) {\n      setMetamask(true);\n      fetchMetamaskAddressData();\n      window.ethereum.on('chainChanged', () => {\n        console.log(\"Chain Changed\");\n        window.location.reload();\n      });\n      window.ethereum.on('accountsChanged', () => {\n        console.log(\"Account Changed\");\n        fetchMetamaskAddressData();\n      });\n    } else {\n      alert(\"Please install Metamask\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__.default, {\n    title: \"Project - Smart Contract\",\n    children: !isMetamask && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Metamask Address: \", address]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Address Balance : \", balance, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-red-500 text-white font-bold py-2 px-4 rounded\",\n        onClick: fetchMetamaskAddressData,\n        children: \"Update Details\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9zbWFydGNvbnRyYWN0LmpzPzMwOTMiXSwibmFtZXMiOlsiU21hcnRDb250cmFjdCIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwidXNlU3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImlzTWV0YW1hc2siLCJzZXRNZXRhbWFzayIsImZldGNoTWV0YW1hc2tBZGRyZXNzRGF0YSIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInRoZW4iLCJjdXJyZW50QWRkcmVzcyIsInBhcmFtcyIsImN1cnJlbnRBZGRyZXNzQmFsYW5jZSIsInBhcnNlSW50IiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsImlzTWV0YU1hc2siLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBRXRDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBNEJKLCtDQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxRQUFNSyx3QkFBd0IsR0FBRyxNQUFNO0FBQ3JDTixjQUFVLENBQUMsYUFBRCxDQUFWO0FBQ0FHLGNBQVUsQ0FBQyxhQUFELENBQVY7QUFFQUksVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQUF4QjtBQUVBSCxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQXhCLEVBQ0NDLElBREQsQ0FDTUMsY0FBYyxJQUFHO0FBQ3JCWixnQkFBVSxDQUFDWSxjQUFjLENBQUMsQ0FBRCxDQUFmLENBQVYsQ0FEcUIsQ0FFckI7O0FBRUFMLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBQ0MsY0FBTSxFQUFFLGdCQUFUO0FBQTJCRyxjQUFNLEVBQUUsQ0FBQ0QsY0FBYyxDQUFDLENBQUQsQ0FBZixFQUFvQixRQUFwQjtBQUFuQyxPQUF4QixFQUNDRCxJQURELENBQ01HLHFCQUFxQixJQUFHO0FBQzVCWCxrQkFBVSxDQUFDWSxRQUFRLENBQUNELHFCQUFELEVBQXdCLEVBQXhCLENBQVIsR0FBc0NFLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEVBQVQsRUFBYSxFQUFiLENBQXZDLENBQVYsQ0FENEIsQ0FFNUI7QUFDRCxPQUpEO0FBS0QsS0FWRDtBQVdELEdBakJEOztBQW1CQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxPQUFPWCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JXLFVBQTNCLEVBQXVDO0FBQ3JDZCxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBQyw4QkFBd0I7QUFFeEJDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQlksRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUMsTUFBTTtBQUN2Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBZixjQUFNLENBQUNnQixRQUFQLENBQWdCQyxNQUFoQjtBQUNELE9BSEQ7QUFLQWpCLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQlksRUFBaEIsQ0FBbUIsaUJBQW5CLEVBQXNDLE1BQU07QUFDMUNDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FoQixnQ0FBd0I7QUFDekIsT0FIRDtBQUtELEtBZEQsTUFjTztBQUNMbUIsV0FBSyxDQUFDLHlCQUFELENBQUw7QUFDRDtBQUNGLEdBbEJRLEVBa0JOLEVBbEJNLENBQVQ7QUFxQkEsc0JBQ0UsOERBQUMsK0RBQUQ7QUFBZ0IsU0FBSyxFQUFDLDBCQUF0QjtBQUFBLGNBQ0csQ0FBQ3JCLFVBQUQsaUJBQ0M7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNBO0FBQUEseUNBQXVCTCxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUEseUNBQXVCRyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxlQUlBO0FBQVEsaUJBQVMsRUFBQyxtREFBbEI7QUFBc0UsZUFBTyxFQUFFSSx3QkFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQSxlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRCIsImZpbGUiOiIuL3BhZ2VzL3NtYXJ0Y29udHJhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lckJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNtYXJ0Q29udHJhY3QoKSB7XG5cbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzTWV0YW1hc2ssIHNldE1ldGFtYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IGZldGNoTWV0YW1hc2tBZGRyZXNzRGF0YSA9ICgpID0+IHtcbiAgICBzZXRBZGRyZXNzKFwiLS0tLS0tLS0tLS1cIik7XG4gICAgc2V0QmFsYW5jZShcIi0tLS0tLS0tLS0tXCIpO1xuXG4gICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSk7XG5cbiAgICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cyd9KVxuICAgIC50aGVuKGN1cnJlbnRBZGRyZXNzPT4ge1xuICAgICAgc2V0QWRkcmVzcyhjdXJyZW50QWRkcmVzc1swXSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiQ3VycmVudCBBZGRyZXNzOiBcIiwgY3VycmVudEFkZHJlc3NbMF0pO1xuXG4gICAgICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2dldEJhbGFuY2UnLCBwYXJhbXM6IFtjdXJyZW50QWRkcmVzc1swXSwgJ2xhdGVzdCddfSlcbiAgICAgIC50aGVuKGN1cnJlbnRBZGRyZXNzQmFsYW5jZT0+IHtcbiAgICAgICAgc2V0QmFsYW5jZShwYXJzZUludChjdXJyZW50QWRkcmVzc0JhbGFuY2UsIDE2KSAvIE1hdGgucG93KDEwLCAxOCkpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ3VycmVudCBBZGRyZXNzIEJhbGFuY2U6IFwiLCBwYXJzZUludChjdXJyZW50QWRkcmVzc0JhbGFuY2UsIDE2KSAvIE1hdGgucG93KDEwLCAxOCkpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bS5pc01ldGFNYXNrKSB7XG4gICAgICBzZXRNZXRhbWFzayh0cnVlKTtcbiAgICAgIGZldGNoTWV0YW1hc2tBZGRyZXNzRGF0YSgpO1xuXG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGFpbiBDaGFuZ2VkXCIpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9KVxuXG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IENoYW5nZWRcIik7XG4gICAgICAgIGZldGNoTWV0YW1hc2tBZGRyZXNzRGF0YSgpO1xuICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrXCIpO1xuICAgIH1cbiAgfSwgW10pXG5cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJCbG9jayB0aXRsZT1cIlByb2plY3QgLSBTbWFydCBDb250cmFjdFwiPlxuICAgICAgeyFpc01ldGFtYXNrICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgyPk1ldGFtYXNrIEFkZHJlc3M6IHthZGRyZXNzfTwvaDI+XG4gICAgICAgIDxoMj5BZGRyZXNzIEJhbGFuY2UgOiB7YmFsYW5jZX0gPC9oMj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCIgb25DbGljaz17ZmV0Y2hNZXRhbWFza0FkZHJlc3NEYXRhfT5VcGRhdGUgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICA8YnIvPlxuICAgICAgPC9kaXY+fVxuICAgIDwvQ29udGFpbmVyQmxvY2s+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/smartcontract.js\n");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ContainerBlock_js"], function() { return __webpack_exec__("./pages/smartcontract.js"); });
module.exports = __webpack_exports__;

})();