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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ \"./hooks/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경\nconst scrollLink = [\n    {\n        id: \"story\",\n        name: \"Story\"\n    },\n    {\n        id: \"roadmap\",\n        name: \"Roadmap\"\n    },\n    {\n        id: \"team\",\n        name: \"Team\"\n    }\n];\nconst Header = ()=>{\n    _s();\n    const { account , getAccount  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useWallet)();\n    const onClickWallet = ()=>{\n        getAccount();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        position: \"fixed\",\n        w: \"full\",\n        height: 90,\n        top: 0,\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        px: 8,\n        py: 2,\n        zIndex: 1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        fontWeight: \"bold\",\n                        fontSize: \"xl\",\n                        cursor: \"pointer\",\n                        children: \"HIT THE FROG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                children: [\n                    scrollLink.map((v, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            to: v.id,\n                            spy: true,\n                            smooth: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                mx: 12,\n                                variant: \"ghost\",\n                                fontWeight: \"bold\",\n                                children: v.name\n                            }, void 0, false, {\n                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/well\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                fontWeight: \"bold\",\n                                fontSize: \"xl\",\n                                cursor: \"pointer\",\n                                children: \"Well\"\n                            }, void 0, false, {\n                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        children: account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineWallet, {\n                                                size: 28\n                                            }, void 0, false, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                ml: 2,\n                                                fontSize: \"xs\",\n                                                children: [\n                                                    account.substring(0, 4),\n                                                    \"...\",\n                                                    account.substring(account.length - 4)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverArrow, {}, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverCloseButton, {}, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverHeader, {\n                                            fontWeight: \"bold\",\n                                            children: \"ProjectLion NFT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverBody, {\n                                            cursor: \"pointer\",\n                                            fontSize: \"xl\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/my-nft\",\n                                                children: \"내 NFT 보기\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            onClick: onClickWallet,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineWallet, {\n                                    size: 28\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    ml: 2,\n                                    fontSize: \"xs\",\n                                    children: [\n                                        \"MetaMask\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \" LogIn\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"PQa6NYURpQj4hkih33Jg542rMS4=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useWallet\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlci50c3g/ODZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgUG9wb3ZlcixcbiAgUG9wb3ZlckFycm93LFxuICBQb3BvdmVyQm9keSxcbiAgUG9wb3ZlckNsb3NlQnV0dG9uLFxuICBQb3BvdmVyQ29udGVudCxcbiAgUG9wb3ZlckhlYWRlcixcbiAgUG9wb3ZlclRyaWdnZXIsXG4gIFRleHQsXG4gIFRvb2x0aXAsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHsgQWlPdXRsaW5lV2FsbGV0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiaG9va3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuLy8gUExOIO2UhOuhnOygne2KuOyXkCDrp57qsowg7IS46rOE6rSALCDroZzrk5zrp7UsIO2MgCDrs4Dqsr1cbmNvbnN0IHNjcm9sbExpbmsgPSBbXG4gIHsgaWQ6IFwic3RvcnlcIiwgbmFtZTogXCJTdG9yeVwiIH0sXG4gIHsgaWQ6IFwicm9hZG1hcFwiLCBuYW1lOiBcIlJvYWRtYXBcIiB9LFxuICB7IGlkOiBcInRlYW1cIiwgbmFtZTogXCJUZWFtXCIgfSxcbl07XG5cbmNvbnN0IEhlYWRlcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWNjb3VudCwgZ2V0QWNjb3VudCB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgY29uc3Qgb25DbGlja1dhbGxldCA9ICgpID0+IHtcbiAgICBnZXRBY2NvdW50KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBoZWlnaHQ9ezkwfVxuICAgICAgdG9wPXswfVxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgcHg9ezh9XG4gICAgICBweT17Mn1cbiAgICAgIHpJbmRleD17MX1cbiAgICA+XG4gICAgICA8Qm94PlxuICAgICAgICB7LyogUExOIOuhnOqzoCDsnbTrpoQgb3Ig7J2066+47KeAIOuzgOqyvSAqL31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPVwieGxcIiBjdXJzb3I9XCJwb2ludGVyXCI+XG4gICAgICAgICAgICBISVQgVEhFIEZST0dcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQm94PlxuICAgICAgPEZsZXg+XG4gICAgICAgIHtzY3JvbGxMaW5rLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2Nyb2xsTGluayBrZXk9e2l9IHRvPXt2LmlkfSBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+XG4gICAgICAgICAgICAgIDxCdXR0b24gbXg9ezEyfSB2YXJpYW50PVwiZ2hvc3RcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgIHt2Lm5hbWV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3dlbGxcIj5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCJ4bFwiIGN1cnNvcj1cInBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgV2VsbFxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICAgICAgPFBvcG92ZXI+XG4gICAgICAgICAgICAgIDxQb3BvdmVyVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVdhbGxldCBzaXplPXsyOH0gLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1sPXsyfSBmb250U2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY2NvdW50LnN1YnN0cmluZygwLCA0KX0uLi5cbiAgICAgICAgICAgICAgICAgICAge2FjY291bnQuc3Vic3RyaW5nKGFjY291bnQubGVuZ3RoIC0gNCl9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvUG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgICAgIDxQb3BvdmVyQ29udGVudD5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlckFycm93IC8+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVySGVhZGVyIGZvbnRXZWlnaHQ9XCJib2xkXCI+UHJvamVjdExpb24gTkZUPC9Qb3BvdmVySGVhZGVyPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyQm9keSBjdXJzb3I9XCJwb2ludGVyXCIgZm9udFNpemU9XCJ4bFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teS1uZnRcIj7rgrQgTkZUIOuztOq4sDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXJCb2R5PlxuICAgICAgICAgICAgICA8L1BvcG92ZXJDb250ZW50PlxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tXYWxsZXR9PlxuICAgICAgICAgICAgICA8QWlPdXRsaW5lV2FsbGV0IHNpemU9ezI4fSAvPlxuICAgICAgICAgICAgICA8VGV4dCBtbD17Mn0gZm9udFNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgIE1ldGFNYXNrXG4gICAgICAgICAgICAgICAgPGJyIC8+IExvZ0luXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiRmxleCIsIlBvcG92ZXIiLCJQb3BvdmVyQXJyb3ciLCJQb3BvdmVyQm9keSIsIlBvcG92ZXJDbG9zZUJ1dHRvbiIsIlBvcG92ZXJDb250ZW50IiwiUG9wb3ZlckhlYWRlciIsIlBvcG92ZXJUcmlnZ2VyIiwiVGV4dCIsIkxpbmsiLCJTY3JvbGxMaW5rIiwiQWlPdXRsaW5lV2FsbGV0IiwidXNlV2FsbGV0Iiwic2Nyb2xsTGluayIsImlkIiwibmFtZSIsIkhlYWRlciIsImFjY291bnQiLCJnZXRBY2NvdW50Iiwib25DbGlja1dhbGxldCIsInBvc2l0aW9uIiwidyIsImhlaWdodCIsInRvcCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInB4IiwicHkiLCJ6SW5kZXgiLCJocmVmIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY3Vyc29yIiwibWFwIiwidiIsImkiLCJ0byIsInNweSIsInNtb290aCIsIm14IiwidmFyaWFudCIsInNpemUiLCJtbCIsInN1YnN0cmluZyIsImxlbmd0aCIsIm9uQ2xpY2siLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/Header.tsx\n"));

/***/ })

});