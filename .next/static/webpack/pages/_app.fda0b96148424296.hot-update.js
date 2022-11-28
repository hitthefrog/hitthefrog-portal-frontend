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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/common/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CardContainer = (param)=>{\n    let { children , type  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n        w: \"full\",\n        h: \"full\",\n        maxWidth: type === \"default\" ? \"320px\" : \"640px\",\n        maxHeight: \"480px\",\n        transition: \"max-width 0.2s ease-in-out\",\n        background: \"rgba(255, 255, 255, 0.1)\",\n        border: \"1px solid rgba(245, 245, 245, 0.2)\",\n        backdropFilter: \"blur(40.775px)\",\n        borderRadius: \"16px\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardContainer;\nconst WhiteListCard = ()=>{\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const buttonText = type === \"default\" ? \"Get Started\" : type === \"search\" ? \"Next\" : type === \"comment\" ? \"\" : type === \"select\" ? \"\" : \"\";\n    const onClick = ()=>{\n        type === \"default\" ? setType(\"search\") : type === \"search\" ? setType(\"default\") : type === \"comment\" ? \"\" : type === \"select\" ? \"\" : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardContainer, {\n        type: type,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            h: \"full\",\n            flexDirection: \"column\",\n            padding: \"16px\",\n            justifyContent: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {}, void 0, false, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    flexDirection: \"column\",\n                    gap: \"24px\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            fontSize: \"xl\",\n                            color: \"#DBDBDB\",\n                            textAlign: \"center\",\n                            fontWeight: \"medium\",\n                            children: \"Just recommend 3books, then be our whitelist!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            text: buttonText,\n                            onClick: onClick\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WhiteListCard, \"Bnlub6Fl0Ix7e4CiUdlefTP1zpY=\");\n_c1 = WhiteListCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhiteListCard);\nvar _c, _c1;\n$RefreshReg$(_c, \"CardContainer\");\n$RefreshReg$(_c1, \"WhiteListCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9XaGl0ZUxpc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWlFO0FBQ2xCO0FBQ2pCO0FBUzlCLE1BQU1NLGdCQUFnQixTQUE0QztRQUEzQyxFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBc0I7SUFDM0QscUJBQ0UsOERBQUNOLDBEQUFZQTtRQUNYTyxHQUFFO1FBQ0ZDLEdBQUU7UUFDRkMsVUFBVUgsU0FBUyxZQUFZLFVBQVUsT0FBTztRQUNoREksV0FBVTtRQUNWQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxnQkFBZ0I7UUFDaEJDLGNBQWE7a0JBRVpWOzs7Ozs7QUFHUDtLQWhCTUQ7QUFrQk4sTUFBTVksZ0JBQWdCLElBQU07O0lBQzFCLE1BQU0sQ0FBQ1YsTUFBTVcsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FDOUI7SUFFRixNQUFNZ0IsYUFDSlosU0FBUyxZQUNMLGdCQUNBQSxTQUFTLFdBQ1QsU0FDQUEsU0FBUyxZQUNULEtBQ0FBLFNBQVMsV0FDVCxLQUNBLEVBQUU7SUFFUixNQUFNYSxVQUFVLElBQU07UUFDcEJiLFNBQVMsWUFDTFcsUUFBUSxZQUNSWCxTQUFTLFdBQ1RXLFFBQVEsYUFDUlgsU0FBUyxZQUNULEtBQ0FBLFNBQVMsV0FDVCxLQUNBLEVBQUU7SUFDUjtJQUVBLHFCQUNFLDhEQUFDRjtRQUFjRSxNQUFNQTtrQkFDbkIsNEVBQUNQLGtEQUFJQTtZQUNIUyxHQUFFO1lBQ0ZZLGVBQWU7WUFDZkMsU0FBUTtZQUNSQyxnQkFBZTs7OEJBRWYsOERBQUN4QixpREFBR0E7Ozs7OzhCQUNKLDhEQUFDQyxrREFBSUE7b0JBQUNxQixlQUFlO29CQUFVRyxLQUFJOztzQ0FDakMsOERBQUN0QixrREFBSUE7NEJBQ0h1QixVQUFVOzRCQUNWQyxPQUFNOzRCQUNOQyxXQUFXOzRCQUNYQyxZQUFXO3NDQUNaOzs7Ozs7c0NBR0QsOERBQUN4QiwrQ0FBTUE7NEJBQUN5QixNQUFNVjs0QkFBWUMsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdDO0dBbERNSDtNQUFBQTtBQW9ETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9XaGl0ZUxpc3RDYXJkLnRzeD83ZjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgTW9kYWxDb250ZW50LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmludGVyZmFjZSBXaGl0ZUxpc3RDYXJkUHJvcHMge1xuICBjaGlsZHJlbjogYW55O1xuICB0eXBlOiBcImRlZmF1bHRcIiB8IFwic2VhcmNoXCIgfCBcInNlbGVjdFwiIHwgXCJjb21tZW50XCI7XG4gIG9uQ2xpY2s/OiBhbnk7XG4gIGJ1dHRvblRleHQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENhcmRDb250YWluZXIgPSAoeyBjaGlsZHJlbiwgdHlwZSB9OiBXaGl0ZUxpc3RDYXJkUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWxDb250ZW50XG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBoPVwiZnVsbFwiXG4gICAgICBtYXhXaWR0aD17dHlwZSA9PT0gXCJkZWZhdWx0XCIgPyBcIjMyMHB4XCIgOiBcIjY0MHB4XCJ9XG4gICAgICBtYXhIZWlnaHQ9XCI0ODBweFwiXG4gICAgICB0cmFuc2l0aW9uPXtcIm1heC13aWR0aCAwLjJzIGVhc2UtaW4tb3V0XCJ9XG4gICAgICBiYWNrZ3JvdW5kPXtcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVwifVxuICAgICAgYm9yZGVyPXtcIjFweCBzb2xpZCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMilcIn1cbiAgICAgIGJhY2tkcm9wRmlsdGVyPXtcImJsdXIoNDAuNzc1cHgpXCJ9XG4gICAgICBib3JkZXJSYWRpdXM9XCIxNnB4XCJcbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Nb2RhbENvbnRlbnQ+XG4gICk7XG59O1xuXG5jb25zdCBXaGl0ZUxpc3RDYXJkID0gKCkgPT4ge1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTxcImRlZmF1bHRcIiB8IFwic2VhcmNoXCIgfCBcInNlbGVjdFwiIHwgXCJjb21tZW50XCI+KFxuICAgIFwiZGVmYXVsdFwiXG4gICk7XG4gIGNvbnN0IGJ1dHRvblRleHQgPVxuICAgIHR5cGUgPT09IFwiZGVmYXVsdFwiXG4gICAgICA/IFwiR2V0IFN0YXJ0ZWRcIlxuICAgICAgOiB0eXBlID09PSBcInNlYXJjaFwiXG4gICAgICA/IFwiTmV4dFwiXG4gICAgICA6IHR5cGUgPT09IFwiY29tbWVudFwiXG4gICAgICA/IFwiXCJcbiAgICAgIDogdHlwZSA9PT0gXCJzZWxlY3RcIlxuICAgICAgPyBcIlwiXG4gICAgICA6IFwiXCI7XG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICB0eXBlID09PSBcImRlZmF1bHRcIlxuICAgICAgPyBzZXRUeXBlKFwic2VhcmNoXCIpXG4gICAgICA6IHR5cGUgPT09IFwic2VhcmNoXCJcbiAgICAgID8gc2V0VHlwZShcImRlZmF1bHRcIilcbiAgICAgIDogdHlwZSA9PT0gXCJjb21tZW50XCJcbiAgICAgID8gXCJcIlxuICAgICAgOiB0eXBlID09PSBcInNlbGVjdFwiXG4gICAgICA/IFwiXCJcbiAgICAgIDogXCJcIjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkQ29udGFpbmVyIHR5cGU9e3R5cGV9PlxuICAgICAgPEZsZXhcbiAgICAgICAgaD1cImZ1bGxcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxuICAgICAgICBwYWRkaW5nPVwiMTZweFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICA+XG4gICAgICAgIDxCb3g+PC9Cb3g+XG4gICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9IGdhcD1cIjI0cHhcIj5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgZm9udFNpemU9e1wieGxcIn1cbiAgICAgICAgICAgIGNvbG9yPVwiI0RCREJEQlwiXG4gICAgICAgICAgICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9XG4gICAgICAgICAgICBmb250V2VpZ2h0PVwibWVkaXVtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBKdXN0IHJlY29tbWVuZCAzYm9va3MsIHRoZW4gYmUgb3VyIHdoaXRlbGlzdCFcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtidXR0b25UZXh0fSBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9DYXJkQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2hpdGVMaXN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJCb3giLCJGbGV4IiwiTW9kYWxDb250ZW50IiwiVGV4dCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQ2FyZENvbnRhaW5lciIsImNoaWxkcmVuIiwidHlwZSIsInciLCJoIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJhY2tkcm9wRmlsdGVyIiwiYm9yZGVyUmFkaXVzIiwiV2hpdGVMaXN0Q2FyZCIsInNldFR5cGUiLCJidXR0b25UZXh0Iiwib25DbGljayIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/WhiteListCard.tsx\n"));

/***/ })

});