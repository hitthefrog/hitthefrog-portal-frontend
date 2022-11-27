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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ \"./hooks/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경\nconst scrollLink = [\n    {\n        id: \"story\",\n        name: \"Story\"\n    },\n    {\n        id: \"roadmap\",\n        name: \"Roadmap\"\n    },\n    {\n        id: \"team\",\n        name: \"Team\"\n    }\n];\nconst Header = ()=>{\n    _s();\n    const { account , getAccount  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useWallet)();\n    const onClickWallet = ()=>{\n        getAccount();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        position: \"fixed\",\n        w: \"full\",\n        height: 90,\n        top: 0,\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        px: 8,\n        py: 2,\n        zIndex: 1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        color: \"#fff\",\n                        fontWeight: \"bold\",\n                        fontSize: \"xl\",\n                        cursor: \"pointer\",\n                        children: \"HIT THE FROG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                gap: 2,\n                children: [\n                    scrollLink.map((v, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            to: v.id,\n                            spy: true,\n                            smooth: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"#fff\",\n                                fontSize: 14,\n                                variant: \"ghost\",\n                                fontWeight: \"regular\",\n                                children: v.name\n                            }, void 0, false, {\n                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/well\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                fontSize: 14,\n                                variant: \"ghost\",\n                                fontWeight: \"regular\",\n                                children: \"Well\"\n                            }, void 0, false, {\n                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        children: account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineWallet, {\n                                                size: 28\n                                            }, void 0, false, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                ml: 2,\n                                                fontSize: \"xs\",\n                                                children: [\n                                                    account.substring(0, 4),\n                                                    \"...\",\n                                                    account.substring(account.length - 4)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverArrow, {}, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverCloseButton, {}, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverHeader, {\n                                            fontWeight: \"bold\",\n                                            children: \"HIT THE FROG NFT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverBody, {\n                                            cursor: \"pointer\",\n                                            fontSize: \"m\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/my-nft\",\n                                                children: \"My NFT\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            onClick: onClickWallet,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineWallet, {\n                                    size: 28\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    ml: 2,\n                                    fontSize: \"xs\",\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"PQa6NYURpQj4hkih33Jg542rMS4=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useWallet\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlci50c3g/ODZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgUG9wb3ZlcixcbiAgUG9wb3ZlckFycm93LFxuICBQb3BvdmVyQm9keSxcbiAgUG9wb3ZlckNsb3NlQnV0dG9uLFxuICBQb3BvdmVyQ29udGVudCxcbiAgUG9wb3ZlckhlYWRlcixcbiAgUG9wb3ZlclRyaWdnZXIsXG4gIFRleHQsXG4gIFRvb2x0aXAsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHsgQWlPdXRsaW5lV2FsbGV0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiaG9va3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuLy8gUExOIO2UhOuhnOygne2KuOyXkCDrp57qsowg7IS46rOE6rSALCDroZzrk5zrp7UsIO2MgCDrs4Dqsr1cbmNvbnN0IHNjcm9sbExpbmsgPSBbXG4gIHsgaWQ6IFwic3RvcnlcIiwgbmFtZTogXCJTdG9yeVwiIH0sXG4gIHsgaWQ6IFwicm9hZG1hcFwiLCBuYW1lOiBcIlJvYWRtYXBcIiB9LFxuICB7IGlkOiBcInRlYW1cIiwgbmFtZTogXCJUZWFtXCIgfSxcbl07XG5cbmNvbnN0IEhlYWRlcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWNjb3VudCwgZ2V0QWNjb3VudCB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgY29uc3Qgb25DbGlja1dhbGxldCA9ICgpID0+IHtcbiAgICBnZXRBY2NvdW50KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBoZWlnaHQ9ezkwfVxuICAgICAgdG9wPXswfVxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgcHg9ezh9XG4gICAgICBweT17Mn1cbiAgICAgIHpJbmRleD17MX1cbiAgICA+XG4gICAgICA8Qm94PlxuICAgICAgICB7LyogUExOIOuhnOqzoCDsnbTrpoQgb3Ig7J2066+47KeAIOuzgOqyvSAqL31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8VGV4dCBjb2xvcj17XCIjZmZmXCJ9IGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCJ4bFwiIGN1cnNvcj1cInBvaW50ZXJcIj5cbiAgICAgICAgICAgIEhJVCBUSEUgRlJPR1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Cb3g+XG4gICAgICA8RmxleCBnYXA9ezJ9PlxuICAgICAgICB7c2Nyb2xsTGluay5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNjcm9sbExpbmsga2V5PXtpfSB0bz17di5pZH0gc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9e1wiI2ZmZlwifVxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxNH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJyZWd1bGFyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2Lm5hbWV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3dlbGxcIj5cbiAgICAgICAgICAgIDxCdXR0b24gZm9udFNpemU9ezE0fSB2YXJpYW50PVwiZ2hvc3RcIiBmb250V2VpZ2h0PVwicmVndWxhclwiPlxuICAgICAgICAgICAgICBXZWxsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvRmxleD5cblxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7YWNjb3VudCA/IChcbiAgICAgICAgICAgIDxQb3BvdmVyPlxuICAgICAgICAgICAgICA8UG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVXYWxsZXQgc2l6ZT17Mjh9IC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBtbD17Mn0gZm9udFNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5zdWJzdHJpbmcoMCwgNCl9Li4uXG4gICAgICAgICAgICAgICAgICAgIHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgICAgICA8UG9wb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJBcnJvdyAvPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlckhlYWRlciBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgSElUIFRIRSBGUk9HIE5GVFxuICAgICAgICAgICAgICAgIDwvUG9wb3ZlckhlYWRlcj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHkgY3Vyc29yPVwicG9pbnRlclwiIGZvbnRTaXplPVwibVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teS1uZnRcIj5NeSBORlQ8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyQ29udGVudD5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrV2FsbGV0fT5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZVdhbGxldCBzaXplPXsyOH0gLz5cbiAgICAgICAgICAgICAgPFRleHQgbWw9ezJ9IGZvbnRTaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICBDb25uZWN0XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiRmxleCIsIlBvcG92ZXIiLCJQb3BvdmVyQXJyb3ciLCJQb3BvdmVyQm9keSIsIlBvcG92ZXJDbG9zZUJ1dHRvbiIsIlBvcG92ZXJDb250ZW50IiwiUG9wb3ZlckhlYWRlciIsIlBvcG92ZXJUcmlnZ2VyIiwiVGV4dCIsIkxpbmsiLCJTY3JvbGxMaW5rIiwiQWlPdXRsaW5lV2FsbGV0IiwidXNlV2FsbGV0Iiwic2Nyb2xsTGluayIsImlkIiwibmFtZSIsIkhlYWRlciIsImFjY291bnQiLCJnZXRBY2NvdW50Iiwib25DbGlja1dhbGxldCIsInBvc2l0aW9uIiwidyIsImhlaWdodCIsInRvcCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInB4IiwicHkiLCJ6SW5kZXgiLCJocmVmIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjdXJzb3IiLCJnYXAiLCJtYXAiLCJ2IiwiaSIsInRvIiwic3B5Iiwic21vb3RoIiwidmFyaWFudCIsInNpemUiLCJtbCIsInN1YnN0cmluZyIsImxlbmd0aCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/Header.tsx\n"));

/***/ })

});