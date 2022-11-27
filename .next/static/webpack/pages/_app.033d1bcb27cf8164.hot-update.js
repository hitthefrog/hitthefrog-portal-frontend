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

/***/ "./components/common/Header.tsx":
/*!**************************************!*\
  !*** ./components/common/Header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ \"./hooks/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경\nconst scrollLink = [\n    {\n        id: \"story\",\n        name: \"세계관\"\n    },\n    {\n        id: \"roadmap\",\n        name: \"로드맵\"\n    },\n    {\n        id: \"team\",\n        name: \"팀\"\n    }\n];\nconst Header = ()=>{\n    _s();\n    const { account , getAccount  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useWallet)();\n    const onClickWallet = ()=>{\n        getAccount();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        position: \"fixed\",\n        w: \"full\",\n        top: 0,\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        px: 8,\n        py: 2,\n        shadow: \"md\",\n        zIndex: 1,\n        bgColor: \"gray.50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        fontWeight: \"bold\",\n                        fontSize: \"xl\",\n                        cursor: \"pointer\",\n                        children: \"ProjectLion NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: scrollLink.map((v, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                        to: v.id,\n                        spy: true,\n                        smooth: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            mx: 12,\n                            variant: \"ghost\",\n                            fontWeight: \"bold\",\n                            children: v.name\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                children: account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineWallet, {\n                                        size: 28\n                                    }, void 0, false, {\n                                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        ml: 2,\n                                        fontSize: \"xs\",\n                                        children: [\n                                            account.substring(0, 4),\n                                            \"...\",\n                                            account.substring(account.length - 4)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverArrow, {}, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverCloseButton, {}, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverHeader, {\n                                    fontWeight: \"bold\",\n                                    children: \"ProjectLion NFT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverBody, {\n                                    cursor: \"pointer\",\n                                    fontSize: \"xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/my-nft\",\n                                        children: \"내 NFT 보기\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    onClick: onClickWallet,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineWallet, {\n                            size: 28\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            ml: 2,\n                            fontSize: \"xs\",\n                            children: [\n                                \"MetaMask\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, undefined),\n                                \" LogIn\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"PQa6NYURpQj4hkih33Jg542rMS4=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useWallet\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQWEwQjtBQUV3QjtBQUNEO0FBQ2Y7QUFDTDtBQUU3Qiw4QkFBOEI7QUFDOUIsTUFBTWUsYUFBYTtJQUNqQjtRQUFFQyxJQUFJO1FBQVNDLE1BQU07SUFBTTtJQUMzQjtRQUFFRCxJQUFJO1FBQVdDLE1BQU07SUFBTTtJQUM3QjtRQUFFRCxJQUFJO1FBQVFDLE1BQU07SUFBSTtDQUN6QjtBQUVELE1BQU1DLFNBQWEsSUFBTTs7SUFDdkIsTUFBTSxFQUFFQyxRQUFPLEVBQUVDLFdBQVUsRUFBRSxHQUFHTixnREFBU0E7SUFFekMsTUFBTU8sZ0JBQWdCLElBQU07UUFDMUJEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2xCLGtEQUFJQTtRQUNIb0IsVUFBUztRQUNUQyxHQUFFO1FBQ0ZDLEtBQUs7UUFDTEMsZ0JBQWU7UUFDZkMsWUFBVztRQUNYQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsUUFBTztRQUNQQyxRQUFRO1FBQ1JDLFNBQVE7OzBCQUVSLDhEQUFDL0IsaURBQUdBOzBCQUdGLDRFQUFDVyxrREFBSUE7b0JBQUNxQixNQUFLOzhCQUNULDRFQUFDdEIsa0RBQUlBO3dCQUFDdUIsWUFBVzt3QkFBT0MsVUFBUzt3QkFBS0MsUUFBTztrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQkFLM0QsOERBQUNuQyxpREFBR0E7MEJBQ0RlLFdBQVdxQixHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTTtvQkFDeEIscUJBQ0UsOERBQUMxQiw4Q0FBVUE7d0JBQVMyQixJQUFJRixFQUFFckIsRUFBRTt3QkFBRXdCLEtBQUssSUFBSTt3QkFBRUMsUUFBUSxJQUFJO2tDQUNuRCw0RUFBQ3hDLG9EQUFNQTs0QkFBQ3lDLElBQUk7NEJBQUlDLFNBQVE7NEJBQVFWLFlBQVc7c0NBQ3hDSSxFQUFFcEIsSUFBSTs7Ozs7O3VCQUZNcUI7Ozs7O2dCQU1yQjs7Ozs7OzBCQUVGLDhEQUFDcEMsa0RBQUlBO2dCQUFDdUIsZ0JBQWU7Z0JBQVNDLFlBQVc7MEJBQ3RDUCx3QkFDQyw4REFBQ2hCLHFEQUFPQTs7c0NBQ04sOERBQUNNLDREQUFjQTtzQ0FDYiw0RUFBQ1Isb0RBQU1BOztrREFDTCw4REFBQ1ksMkRBQWVBO3dDQUFDK0IsTUFBTTs7Ozs7O2tEQUN2Qiw4REFBQ2xDLGtEQUFJQTt3Q0FBQ21DLElBQUk7d0NBQUdYLFVBQVM7OzRDQUNuQmYsUUFBUTJCLFNBQVMsQ0FBQyxHQUFHOzRDQUFHOzRDQUN4QjNCLFFBQVEyQixTQUFTLENBQUMzQixRQUFRNEIsTUFBTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTFDLDhEQUFDeEMsNERBQWNBOzs4Q0FDYiw4REFBQ0gsMERBQVlBOzs7Ozs4Q0FDYiw4REFBQ0UsZ0VBQWtCQTs7Ozs7OENBQ25CLDhEQUFDRSwyREFBYUE7b0NBQUN5QixZQUFXOzhDQUFPOzs7Ozs7OENBQ2pDLDhEQUFDNUIseURBQVdBO29DQUFDOEIsUUFBTztvQ0FBVUQsVUFBUzs4Q0FDckMsNEVBQUN2QixrREFBSUE7d0NBQUNxQixNQUFLO2tEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUszQiw4REFBQy9CLG9EQUFNQTtvQkFBQytDLFNBQVMzQjs7c0NBQ2YsOERBQUNSLDJEQUFlQTs0QkFBQytCLE1BQU07Ozs7OztzQ0FDdkIsOERBQUNsQyxrREFBSUE7NEJBQUNtQyxJQUFJOzRCQUFHWCxVQUFTOztnQ0FBSzs4Q0FFekIsOERBQUNlOzs7OztnQ0FBSzs7Ozs7Ozs7Ozs7OzZCQUdYOzs7Ozs7Ozs7Ozs7QUFJVDtHQXpFTS9COztRQUM0QkosNENBQVNBOzs7S0FEckNJO0FBMkVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlci50c3g/ODZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgUG9wb3ZlcixcbiAgUG9wb3ZlckFycm93LFxuICBQb3BvdmVyQm9keSxcbiAgUG9wb3ZlckNsb3NlQnV0dG9uLFxuICBQb3BvdmVyQ29udGVudCxcbiAgUG9wb3ZlckhlYWRlcixcbiAgUG9wb3ZlclRyaWdnZXIsXG4gIFRleHQsXG4gIFRvb2x0aXAsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHsgQWlPdXRsaW5lV2FsbGV0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiaG9va3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuLy8gUExOIO2UhOuhnOygne2KuOyXkCDrp57qsowg7IS46rOE6rSALCDroZzrk5zrp7UsIO2MgCDrs4Dqsr1cbmNvbnN0IHNjcm9sbExpbmsgPSBbXG4gIHsgaWQ6IFwic3RvcnlcIiwgbmFtZTogXCLshLjqs4TqtIBcIiB9LFxuICB7IGlkOiBcInJvYWRtYXBcIiwgbmFtZTogXCLroZzrk5zrp7VcIiB9LFxuICB7IGlkOiBcInRlYW1cIiwgbmFtZTogXCLtjIBcIiB9LFxuXTtcblxuY29uc3QgSGVhZGVyOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBhY2NvdW50LCBnZXRBY2NvdW50IH0gPSB1c2VXYWxsZXQoKTtcblxuICBjb25zdCBvbkNsaWNrV2FsbGV0ID0gKCkgPT4ge1xuICAgIGdldEFjY291bnQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIHc9XCJmdWxsXCJcbiAgICAgIHRvcD17MH1cbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIHB4PXs4fVxuICAgICAgcHk9ezJ9XG4gICAgICBzaGFkb3c9XCJtZFwiXG4gICAgICB6SW5kZXg9ezF9XG4gICAgICBiZ0NvbG9yPVwiZ3JheS41MFwiXG4gICAgPlxuICAgICAgPEJveD5cbiAgICAgICAgey8qIFBMTiDroZzqs6Ag7J2066aEIG9yIOydtOuvuOyngCDrs4Dqsr0gKi99XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPVwieGxcIiBjdXJzb3I9XCJwb2ludGVyXCI+XG4gICAgICAgICAgICBQcm9qZWN0TGlvbiBORlRcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveD5cbiAgICAgICAge3Njcm9sbExpbmsubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTY3JvbGxMaW5rIGtleT17aX0gdG89e3YuaWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBteD17MTJ9IHZhcmlhbnQ9XCJnaG9zdFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0JveD5cbiAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICB7YWNjb3VudCA/IChcbiAgICAgICAgICA8UG9wb3Zlcj5cbiAgICAgICAgICAgIDxQb3BvdmVyVHJpZ2dlcj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lV2FsbGV0IHNpemU9ezI4fSAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1sPXsyfSBmb250U2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgICAgICB7YWNjb3VudC5zdWJzdHJpbmcoMCwgNCl9Li4uXG4gICAgICAgICAgICAgICAgICB7YWNjb3VudC5zdWJzdHJpbmcoYWNjb3VudC5sZW5ndGggLSA0KX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Qb3BvdmVyVHJpZ2dlcj5cbiAgICAgICAgICAgIDxQb3BvdmVyQ29udGVudD5cbiAgICAgICAgICAgICAgPFBvcG92ZXJBcnJvdyAvPlxuICAgICAgICAgICAgICA8UG9wb3ZlckNsb3NlQnV0dG9uIC8+XG4gICAgICAgICAgICAgIDxQb3BvdmVySGVhZGVyIGZvbnRXZWlnaHQ9XCJib2xkXCI+UHJvamVjdExpb24gTkZUPC9Qb3BvdmVySGVhZGVyPlxuICAgICAgICAgICAgICA8UG9wb3ZlckJvZHkgY3Vyc29yPVwicG9pbnRlclwiIGZvbnRTaXplPVwieGxcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215LW5mdFwiPuuCtCBORlQg67O06riwPC9MaW5rPlxuICAgICAgICAgICAgICA8L1BvcG92ZXJCb2R5PlxuICAgICAgICAgICAgPC9Qb3BvdmVyQ29udGVudD5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrV2FsbGV0fT5cbiAgICAgICAgICAgIDxBaU91dGxpbmVXYWxsZXQgc2l6ZT17Mjh9IC8+XG4gICAgICAgICAgICA8VGV4dCBtbD17Mn0gZm9udFNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICBNZXRhTWFza1xuICAgICAgICAgICAgICA8YnIgLz4gTG9nSW5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiRmxleCIsIlBvcG92ZXIiLCJQb3BvdmVyQXJyb3ciLCJQb3BvdmVyQm9keSIsIlBvcG92ZXJDbG9zZUJ1dHRvbiIsIlBvcG92ZXJDb250ZW50IiwiUG9wb3ZlckhlYWRlciIsIlBvcG92ZXJUcmlnZ2VyIiwiVGV4dCIsIkxpbmsiLCJTY3JvbGxMaW5rIiwiQWlPdXRsaW5lV2FsbGV0IiwidXNlV2FsbGV0Iiwic2Nyb2xsTGluayIsImlkIiwibmFtZSIsIkhlYWRlciIsImFjY291bnQiLCJnZXRBY2NvdW50Iiwib25DbGlja1dhbGxldCIsInBvc2l0aW9uIiwidyIsInRvcCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInB4IiwicHkiLCJzaGFkb3ciLCJ6SW5kZXgiLCJiZ0NvbG9yIiwiaHJlZiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImN1cnNvciIsIm1hcCIsInYiLCJpIiwidG8iLCJzcHkiLCJzbW9vdGgiLCJteCIsInZhcmlhbnQiLCJzaXplIiwibWwiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJvbkNsaWNrIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/Header.tsx\n"));

/***/ })

});