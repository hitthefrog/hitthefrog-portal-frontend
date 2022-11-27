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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ \"./hooks/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경\nconst scrollLink = [\n    {\n        id: \"story\",\n        name: \"Story\"\n    },\n    {\n        id: \"roadmap\",\n        name: \"Roadmap\"\n    },\n    {\n        id: \"team\",\n        name: \"Team\"\n    }\n];\nconst Header = ()=>{\n    _s();\n    const { account , getAccount  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useWallet)();\n    const onClickWallet = ()=>{\n        getAccount();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        position: \"fixed\",\n        w: \"full\",\n        height: 90,\n        top: 0,\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        px: 8,\n        py: 2,\n        zIndex: 1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        color: \"#fff\",\n                        fontWeight: \"bold\",\n                        fontSize: \"xl\",\n                        cursor: \"pointer\",\n                        children: \"HIT THE FROG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                gap: 2,\n                children: [\n                    scrollLink.map((v, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            to: v.id,\n                            spy: true,\n                            smooth: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"#fff\",\n                                fontSize: 14,\n                                variant: \"ghost\",\n                                fontWeight: \"regular\",\n                                children: v.name\n                            }, void 0, false, {\n                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/well\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"#fff\",\n                                fontSize: 14,\n                                variant: \"ghost\",\n                                fontWeight: \"regular\",\n                                children: \"Well\"\n                            }, void 0, false, {\n                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        children: account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        backgroundColor: \"#202020\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineWallet, {\n                                                color: \"#fff\",\n                                                size: 28\n                                            }, void 0, false, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                color: \"#fff\",\n                                                ml: 2,\n                                                fontSize: \"xs\",\n                                                children: [\n                                                    account.substring(0, 4),\n                                                    \"...\",\n                                                    account.substring(account.length - 4)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverArrow, {}, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverCloseButton, {}, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverHeader, {\n                                            fontWeight: \"bold\",\n                                            children: \"HIT THE FROG NFT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.PopoverBody, {\n                                            cursor: \"pointer\",\n                                            fontSize: \"m\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/my-nft\",\n                                                children: \"My NFT\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            onClick: onClickWallet,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineWallet, {\n                                    size: 28\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    color: \"#fff\",\n                                    ml: 2,\n                                    fontSize: \"xs\",\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/son/Documents/GitHub/hitthefrog-portal-frontend/components/common/Header.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"PQa6NYURpQj4hkih33Jg542rMS4=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useWallet\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3FDQUk3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0ExRk1oQjs7UUFDNEJKLDRDQUFTQTs7O0tBRHJDSTtBQTRGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9IZWFkZXIudHN4Pzg2YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIFBvcG92ZXIsXG4gIFBvcG92ZXJBcnJvdyxcbiAgUG9wb3ZlckJvZHksXG4gIFBvcG92ZXJDbG9zZUJ1dHRvbixcbiAgUG9wb3ZlckNvbnRlbnQsXG4gIFBvcG92ZXJIZWFkZXIsXG4gIFBvcG92ZXJUcmlnZ2VyLFxuICBUZXh0LFxuICBUb29sdGlwLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcbmltcG9ydCB7IEFpT3V0bGluZVdhbGxldCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSBcImhvb2tzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbi8vIFBMTiDtlITroZzsoJ3tirjsl5Ag66ee6rKMIOyEuOqzhOq0gCwg66Gc65Oc66e1LCDtjIAg67OA6rK9XG5jb25zdCBzY3JvbGxMaW5rID0gW1xuICB7IGlkOiBcInN0b3J5XCIsIG5hbWU6IFwiU3RvcnlcIiB9LFxuICB7IGlkOiBcInJvYWRtYXBcIiwgbmFtZTogXCJSb2FkbWFwXCIgfSxcbiAgeyBpZDogXCJ0ZWFtXCIsIG5hbWU6IFwiVGVhbVwiIH0sXG5dO1xuXG5jb25zdCBIZWFkZXI6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFjY291bnQsIGdldEFjY291bnQgfSA9IHVzZVdhbGxldCgpO1xuXG4gIGNvbnN0IG9uQ2xpY2tXYWxsZXQgPSAoKSA9PiB7XG4gICAgZ2V0QWNjb3VudCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgdz1cImZ1bGxcIlxuICAgICAgaGVpZ2h0PXs5MH1cbiAgICAgIHRvcD17MH1cbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIHB4PXs4fVxuICAgICAgcHk9ezJ9XG4gICAgICB6SW5kZXg9ezF9XG4gICAgPlxuICAgICAgPEJveD5cbiAgICAgICAgey8qIFBMTiDroZzqs6Ag7J2066aEIG9yIOydtOuvuOyngCDrs4Dqsr0gKi99XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPFRleHQgY29sb3I9e1wiI2ZmZlwifSBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPVwieGxcIiBjdXJzb3I9XCJwb2ludGVyXCI+XG4gICAgICAgICAgICBISVQgVEhFIEZST0dcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQm94PlxuICAgICAgPEZsZXggZ2FwPXsyfT5cbiAgICAgICAge3Njcm9sbExpbmsubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTY3JvbGxMaW5rIGtleT17aX0gdG89e3YuaWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPXtcIiNmZmZcIn1cbiAgICAgICAgICAgICAgICBmb250U2l6ZT17MTR9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwicmVndWxhclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7di5uYW1lfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi93ZWxsXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbG9yPXtcIiNmZmZcIn1cbiAgICAgICAgICAgICAgZm9udFNpemU9ezE0fVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwicmVndWxhclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFdlbGxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICAgICAgPFBvcG92ZXI+XG4gICAgICAgICAgICAgIDxQb3BvdmVyVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGJhY2tncm91bmRDb2xvcj17XCIjMjAyMDIwXCJ9PlxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVdhbGxldCBjb2xvcj17XCIjZmZmXCJ9IHNpemU9ezI4fSAvPlxuICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9e1wiI2ZmZlwifSBtbD17Mn0gZm9udFNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5zdWJzdHJpbmcoMCwgNCl9Li4uXG4gICAgICAgICAgICAgICAgICAgIHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgICAgICA8UG9wb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJBcnJvdyAvPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlckhlYWRlciBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgSElUIFRIRSBGUk9HIE5GVFxuICAgICAgICAgICAgICAgIDwvUG9wb3ZlckhlYWRlcj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHkgY3Vyc29yPVwicG9pbnRlclwiIGZvbnRTaXplPVwibVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teS1uZnRcIj5NeSBORlQ8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyQ29udGVudD5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrV2FsbGV0fT5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZVdhbGxldCBzaXplPXsyOH0gLz5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9e1wiI2ZmZlwifSBtbD17Mn0gZm9udFNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICAgIENvbm5lY3RcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGbGV4IiwiUG9wb3ZlciIsIlBvcG92ZXJBcnJvdyIsIlBvcG92ZXJCb2R5IiwiUG9wb3ZlckNsb3NlQnV0dG9uIiwiUG9wb3ZlckNvbnRlbnQiLCJQb3BvdmVySGVhZGVyIiwiUG9wb3ZlclRyaWdnZXIiLCJUZXh0IiwiTGluayIsIlNjcm9sbExpbmsiLCJBaU91dGxpbmVXYWxsZXQiLCJ1c2VXYWxsZXQiLCJzY3JvbGxMaW5rIiwiaWQiLCJuYW1lIiwiSGVhZGVyIiwiYWNjb3VudCIsImdldEFjY291bnQiLCJvbkNsaWNrV2FsbGV0IiwicG9zaXRpb24iLCJ3IiwiaGVpZ2h0IiwidG9wIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicHgiLCJweSIsInpJbmRleCIsImhyZWYiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImN1cnNvciIsImdhcCIsIm1hcCIsInYiLCJpIiwidG8iLCJzcHkiLCJzbW9vdGgiLCJ2YXJpYW50IiwiYmFja2dyb3VuZENvbG9yIiwic2l6ZSIsIm1sIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/Header.tsx\n"));

/***/ })

});