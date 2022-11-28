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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/common/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CardContainer = (param)=>{\n    let { children , type  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n        w: \"full\",\n        h: \"full\",\n        maxWidth: type === \"default\" || \"job\" ? \"320px\" : 0,\n        maxHeight: \"480px\",\n        transition: \"max-width 0.2s ease-in-out\",\n        background: \"rgba(255, 255, 255, 0.1)\",\n        border: \"1px solid rgba(245, 245, 245, 0.2)\",\n        backdropFilter: \"blur(40.775px)\",\n        borderRadius: \"16px\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardContainer;\nconst WhiteListCard = ()=>{\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const buttonText = type === \"default\" ? \"Get Started\" : type === \"job\" ? \"go to search\" : type === \"search\" ? \"Next\" : type === \"comment\" ? \"\" : type === \"select\" ? \"\" : \"\";\n    const onClick = ()=>{\n        type === \"default\" ? setType(\"job\") : type === \"job\" ? setType(\"search\") : type === \"search\" ? setType(\"default\") : type === \"comment\" ? \"\" : type === \"select\" ? \"\" : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardContainer, {\n        type: type,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            h: \"full\",\n            flexDirection: \"column\",\n            padding: \"16px\",\n            justifyContent: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {}, void 0, false, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    flexDirection: \"column\",\n                    gap: \"32px\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            fontSize: \"xl\",\n                            color: \"#DBDBDB\",\n                            textAlign: \"center\",\n                            fontWeight: \"medium\",\n                            children: \"Just recommend 3books, then be our whitelist!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            text: buttonText,\n                            onClick: onClick\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/WhiteListCard.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WhiteListCard, \"Bnlub6Fl0Ix7e4CiUdlefTP1zpY=\");\n_c1 = WhiteListCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhiteListCard);\nvar _c, _c1;\n$RefreshReg$(_c, \"CardContainer\");\n$RefreshReg$(_c1, \"WhiteListCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9XaGl0ZUxpc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWlFO0FBQ2xCO0FBQ2pCO0FBUzlCLE1BQU1NLGdCQUFnQixTQUE0QztRQUEzQyxFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBc0I7SUFDM0QscUJBQ0UsOERBQUNOLDBEQUFZQTtRQUNYTyxHQUFFO1FBQ0ZDLEdBQUU7UUFDRkMsVUFBVUgsU0FBUyxhQUFhLFFBQVEsVUFBVSxDQUFPO1FBQ3pESSxXQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLGdCQUFnQjtRQUNoQkMsY0FBYTtrQkFFWlY7Ozs7OztBQUdQO0tBaEJNRDtBQWtCTixNQUFNWSxnQkFBZ0IsSUFBTTs7SUFDMUIsTUFBTSxDQUFDVixNQUFNVyxRQUFRLEdBQUdmLCtDQUFRQSxDQUU5QjtJQUNGLE1BQU1nQixhQUNKWixTQUFTLFlBQ0wsZ0JBQ0FBLFNBQVMsUUFDVCxpQkFDQUEsU0FBUyxXQUNULFNBQ0FBLFNBQVMsWUFDVCxLQUNBQSxTQUFTLFdBQ1QsS0FDQSxFQUFFO0lBRVIsTUFBTWEsVUFBVSxJQUFNO1FBQ3BCYixTQUFTLFlBQ0xXLFFBQVEsU0FDUlgsU0FBUyxRQUNUVyxRQUFRLFlBQ1JYLFNBQVMsV0FDVFcsUUFBUSxhQUNSWCxTQUFTLFlBQ1QsS0FDQUEsU0FBUyxXQUNULEtBQ0EsRUFBRTtJQUNSO0lBRUEscUJBQ0UsOERBQUNGO1FBQWNFLE1BQU1BO2tCQUNuQiw0RUFBQ1Asa0RBQUlBO1lBQ0hTLEdBQUU7WUFDRlksZUFBZTtZQUNmQyxTQUFRO1lBQ1JDLGdCQUFlOzs4QkFFZiw4REFBQ3hCLGlEQUFHQTs7Ozs7OEJBQ0osOERBQUNDLGtEQUFJQTtvQkFBQ3FCLGVBQWU7b0JBQVVHLEtBQUk7O3NDQUNqQyw4REFBQ3RCLGtEQUFJQTs0QkFDSHVCLFVBQVU7NEJBQ1ZDLE9BQU07NEJBQ05DLFdBQVc7NEJBQ1hDLFlBQVc7c0NBQ1o7Ozs7OztzQ0FHRCw4REFBQ3hCLCtDQUFNQTs0QkFBQ3lCLE1BQU1WOzRCQUFZQyxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0M7R0F0RE1IO01BQUFBO0FBd0ROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL1doaXRlTGlzdENhcmQudHN4PzdmNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBNb2RhbENvbnRlbnQsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuaW50ZXJmYWNlIFdoaXRlTGlzdENhcmRQcm9wcyB7XG4gIGNoaWxkcmVuOiBhbnk7XG4gIHR5cGU6IFwiZGVmYXVsdFwiIHwgXCJqb2JcIiB8IFwic2VhcmNoXCIgfCBcInNlbGVjdFwiIHwgXCJjb21tZW50XCI7XG4gIG9uQ2xpY2s/OiBhbnk7XG4gIGJ1dHRvblRleHQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENhcmRDb250YWluZXIgPSAoeyBjaGlsZHJlbiwgdHlwZSB9OiBXaGl0ZUxpc3RDYXJkUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWxDb250ZW50XG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBoPVwiZnVsbFwiXG4gICAgICBtYXhXaWR0aD17dHlwZSA9PT0gXCJkZWZhdWx0XCIgfHwgXCJqb2JcIiA/IFwiMzIwcHhcIiA6IFwiNjQwcHhcIn1cbiAgICAgIG1heEhlaWdodD1cIjQ4MHB4XCJcbiAgICAgIHRyYW5zaXRpb249e1wibWF4LXdpZHRoIDAuMnMgZWFzZS1pbi1vdXRcIn1cbiAgICAgIGJhY2tncm91bmQ9e1wicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXCJ9XG4gICAgICBib3JkZXI9e1wiMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4yKVwifVxuICAgICAgYmFja2Ryb3BGaWx0ZXI9e1wiYmx1cig0MC43NzVweClcIn1cbiAgICAgIGJvcmRlclJhZGl1cz1cIjE2cHhcIlxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01vZGFsQ29udGVudD5cbiAgKTtcbn07XG5cbmNvbnN0IFdoaXRlTGlzdENhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlPFxuICAgIFwiZGVmYXVsdFwiIHwgXCJqb2JcIiB8IFwic2VhcmNoXCIgfCBcInNlbGVjdFwiIHwgXCJjb21tZW50XCJcbiAgPihcImRlZmF1bHRcIik7XG4gIGNvbnN0IGJ1dHRvblRleHQgPVxuICAgIHR5cGUgPT09IFwiZGVmYXVsdFwiXG4gICAgICA/IFwiR2V0IFN0YXJ0ZWRcIlxuICAgICAgOiB0eXBlID09PSBcImpvYlwiXG4gICAgICA/IFwiZ28gdG8gc2VhcmNoXCJcbiAgICAgIDogdHlwZSA9PT0gXCJzZWFyY2hcIlxuICAgICAgPyBcIk5leHRcIlxuICAgICAgOiB0eXBlID09PSBcImNvbW1lbnRcIlxuICAgICAgPyBcIlwiXG4gICAgICA6IHR5cGUgPT09IFwic2VsZWN0XCJcbiAgICAgID8gXCJcIlxuICAgICAgOiBcIlwiO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdHlwZSA9PT0gXCJkZWZhdWx0XCJcbiAgICAgID8gc2V0VHlwZShcImpvYlwiKVxuICAgICAgOiB0eXBlID09PSBcImpvYlwiXG4gICAgICA/IHNldFR5cGUoXCJzZWFyY2hcIilcbiAgICAgIDogdHlwZSA9PT0gXCJzZWFyY2hcIlxuICAgICAgPyBzZXRUeXBlKFwiZGVmYXVsdFwiKVxuICAgICAgOiB0eXBlID09PSBcImNvbW1lbnRcIlxuICAgICAgPyBcIlwiXG4gICAgICA6IHR5cGUgPT09IFwic2VsZWN0XCJcbiAgICAgID8gXCJcIlxuICAgICAgOiBcIlwiO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRDb250YWluZXIgdHlwZT17dHlwZX0+XG4gICAgICA8RmxleFxuICAgICAgICBoPVwiZnVsbFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XG4gICAgICAgIHBhZGRpbmc9XCIxNnB4XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPEJveD48L0JveD5cbiAgICAgICAgPEZsZXggZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn0gZ2FwPVwiMzJweFwiPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBmb250U2l6ZT17XCJ4bFwifVxuICAgICAgICAgICAgY29sb3I9XCIjREJEQkRCXCJcbiAgICAgICAgICAgIHRleHRBbGlnbj17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJtZWRpdW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEp1c3QgcmVjb21tZW5kIDNib29rcywgdGhlbiBiZSBvdXIgd2hpdGVsaXN0IVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uIHRleHQ9e2J1dHRvblRleHR9IG9uQ2xpY2s9e29uQ2xpY2t9IC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0NhcmRDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaGl0ZUxpc3RDYXJkO1xuIl0sIm5hbWVzIjpbIkJveCIsIkZsZXgiLCJNb2RhbENvbnRlbnQiLCJUZXh0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDYXJkQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJ0eXBlIiwidyIsImgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInRyYW5zaXRpb24iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYmFja2Ryb3BGaWx0ZXIiLCJib3JkZXJSYWRpdXMiLCJXaGl0ZUxpc3RDYXJkIiwic2V0VHlwZSIsImJ1dHRvblRleHQiLCJvbkNsaWNrIiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImdhcCIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/WhiteListCard.tsx\n"));

/***/ })

});