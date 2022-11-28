"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/common/WhiteListCard.tsx":
/*!*********************************************!*\
  !*** ./components/common/WhiteListCard.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/common/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CardContainer = (param)=>{\n    let { children , type  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n        w: \"full\",\n        h: \"full\",\n        maxWidth: type === \"default\" ? \"320px\" : \"640px\",\n        maxHeight: type === \"default\" ? \"480px\" : \"72px\",\n        transition: \"max-width 0.2s ease-in-out\",\n        background: \"rgba(255, 255, 255, 0.1)\",\n        border: \"1px solid rgba(245, 245, 245, 0.2)\",\n        backdropFilter: \"blur(40.775px)\",\n        borderRadius: \"16px\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardContainer;\nconst WhiteListCard = ()=>{\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const buttonText = type === \"default\" ? \"\" : type === \"search\" ? \"\" : type === \"comment\" ? \"\" : type === \"select\" ? \"\" : \"\";\n    const onClick = type === \"default\" ? \"\" : type === \"search\" ? \"\" : type === \"comment\" ? \"\" : type === \"select\" ? \"\" : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardContainer, {\n        type: type,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            text: buttonText,\n            onClick: onClick\n        }, void 0, false, {\n            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WhiteListCard, \"Bnlub6Fl0Ix7e4CiUdlefTP1zpY=\");\n_c1 = WhiteListCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhiteListCard);\nvar _c, _c1;\n$RefreshReg$(_c, \"CardContainer\");\n$RefreshReg$(_c1, \"WhiteListCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9XaGl0ZUxpc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWdEO0FBQ0Q7QUFDakI7QUFTOUIsTUFBTUcsZ0JBQWdCLFNBQTRDO1FBQTNDLEVBQUVDLFNBQVEsRUFBRUMsS0FBSSxFQUFzQjtJQUMzRCxxQkFDRSw4REFBQ0wsMERBQVlBO1FBQ1hNLEdBQUU7UUFDRkMsR0FBRTtRQUNGQyxVQUFVSCxTQUFTLFlBQVksVUFBVSxPQUFPO1FBQ2hESSxXQUFXSixTQUFTLFlBQVksVUFBVSxNQUFNO1FBQ2hESyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxnQkFBZ0I7UUFDaEJDLGNBQWE7a0JBRVpWOzs7Ozs7QUFHUDtLQWhCTUQ7QUFrQk4sTUFBTVksZ0JBQWdCLElBQU07O0lBQzFCLE1BQU0sQ0FBQ1YsTUFBTVcsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FDOUI7SUFFRixNQUFNZ0IsYUFDSlosU0FBUyxZQUNMLEtBQ0FBLFNBQVMsV0FDVCxLQUNBQSxTQUFTLFlBQ1QsS0FDQUEsU0FBUyxXQUNULEtBQ0EsRUFBRTtJQUVSLE1BQU1hLFVBQ0piLFNBQVMsWUFDTCxLQUNBQSxTQUFTLFdBQ1QsS0FDQUEsU0FBUyxZQUNULEtBQ0FBLFNBQVMsV0FDVCxLQUNBLEVBQUU7SUFFUixxQkFDRSw4REFBQ0Y7UUFBY0UsTUFBTUE7a0JBQ25CLDRFQUFDSCwrQ0FBTUE7WUFBQ2lCLE1BQU1GO1lBQVlDLFNBQVNBOzs7Ozs7Ozs7OztBQUd6QztHQS9CTUg7TUFBQUE7QUFpQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vV2hpdGVMaXN0Q2FyZC50c3g/N2Y2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbENvbnRlbnQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuaW50ZXJmYWNlIFdoaXRlTGlzdENhcmRQcm9wcyB7XG4gIGNoaWxkcmVuOiBhbnk7XG4gIHR5cGU6IFwiZGVmYXVsdFwiIHwgXCJzZWFyY2hcIiB8IFwic2VsZWN0XCIgfCBcImNvbW1lbnRcIjtcbiAgb25DbGljaz86IGFueTtcbiAgYnV0dG9uVGV4dD86IHN0cmluZztcbn1cblxuY29uc3QgQ2FyZENvbnRhaW5lciA9ICh7IGNoaWxkcmVuLCB0eXBlIH06IFdoaXRlTGlzdENhcmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNb2RhbENvbnRlbnRcbiAgICAgIHc9XCJmdWxsXCJcbiAgICAgIGg9XCJmdWxsXCJcbiAgICAgIG1heFdpZHRoPXt0eXBlID09PSBcImRlZmF1bHRcIiA/IFwiMzIwcHhcIiA6IFwiNjQwcHhcIn1cbiAgICAgIG1heEhlaWdodD17dHlwZSA9PT0gXCJkZWZhdWx0XCIgPyBcIjQ4MHB4XCIgOiBcIjcycHhcIn1cbiAgICAgIHRyYW5zaXRpb249e1wibWF4LXdpZHRoIDAuMnMgZWFzZS1pbi1vdXRcIn1cbiAgICAgIGJhY2tncm91bmQ9e1wicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXCJ9XG4gICAgICBib3JkZXI9e1wiMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4yKVwifVxuICAgICAgYmFja2Ryb3BGaWx0ZXI9e1wiYmx1cig0MC43NzVweClcIn1cbiAgICAgIGJvcmRlclJhZGl1cz1cIjE2cHhcIlxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01vZGFsQ29udGVudD5cbiAgKTtcbn07XG5cbmNvbnN0IFdoaXRlTGlzdENhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlPFwiZGVmYXVsdFwiIHwgXCJzZWFyY2hcIiB8IFwic2VsZWN0XCIgfCBcImNvbW1lbnRcIj4oXG4gICAgXCJkZWZhdWx0XCJcbiAgKTtcbiAgY29uc3QgYnV0dG9uVGV4dCA9XG4gICAgdHlwZSA9PT0gXCJkZWZhdWx0XCJcbiAgICAgID8gXCJcIlxuICAgICAgOiB0eXBlID09PSBcInNlYXJjaFwiXG4gICAgICA/IFwiXCJcbiAgICAgIDogdHlwZSA9PT0gXCJjb21tZW50XCJcbiAgICAgID8gXCJcIlxuICAgICAgOiB0eXBlID09PSBcInNlbGVjdFwiXG4gICAgICA/IFwiXCJcbiAgICAgIDogXCJcIjtcblxuICBjb25zdCBvbkNsaWNrID1cbiAgICB0eXBlID09PSBcImRlZmF1bHRcIlxuICAgICAgPyBcIlwiXG4gICAgICA6IHR5cGUgPT09IFwic2VhcmNoXCJcbiAgICAgID8gXCJcIlxuICAgICAgOiB0eXBlID09PSBcImNvbW1lbnRcIlxuICAgICAgPyBcIlwiXG4gICAgICA6IHR5cGUgPT09IFwic2VsZWN0XCJcbiAgICAgID8gXCJcIlxuICAgICAgOiBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRDb250YWluZXIgdHlwZT17dHlwZX0+XG4gICAgICA8QnV0dG9uIHRleHQ9e2J1dHRvblRleHR9IG9uQ2xpY2s9e29uQ2xpY2t9IC8+XG4gICAgPC9DYXJkQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2hpdGVMaXN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJNb2RhbENvbnRlbnQiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNhcmRDb250YWluZXIiLCJjaGlsZHJlbiIsInR5cGUiLCJ3IiwiaCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwidHJhbnNpdGlvbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJiYWNrZHJvcEZpbHRlciIsImJvcmRlclJhZGl1cyIsIldoaXRlTGlzdENhcmQiLCJzZXRUeXBlIiwiYnV0dG9uVGV4dCIsIm9uQ2xpY2siLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/WhiteListCard.tsx\n"));

/***/ })

});