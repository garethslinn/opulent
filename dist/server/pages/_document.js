"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n        const originalRenderPage = ctx.renderPage;\n        try {\n            ctx.renderPage = ()=>originalRenderPage({\n                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/garethslinn/private_projects/opulent/src/pages/_document.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 45\n                            }, this))\n                });\n            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n            return {\n                ...initialProps,\n                styles: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        initialProps.styles,\n                        sheet.getStyleElement()\n                    ]\n                }, void 0, true)\n            };\n        } finally{\n            sheet.seal();\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNxQztBQUNnQjtBQUV0QyxNQUFNRSxtQkFBbUJGLHNEQUFRQTtJQUM1QyxhQUFhRyxnQkFDVEMsR0FBb0IsRUFDUztRQUM3QixNQUFNQyxRQUFRLElBQUlKLCtEQUFnQkE7UUFDbEMsTUFBTUsscUJBQXFCRixJQUFJRyxVQUFVO1FBRXpDLElBQUk7WUFDQUgsSUFBSUcsVUFBVSxHQUFHLElBQ2JELG1CQUFtQjtvQkFDZkUsWUFBWSxDQUFDQyxNQUFRLENBQUNDLFFBQ2xCTCxNQUFNTSxhQUFhLGVBQUMsOERBQUNGO2dDQUFLLEdBQUdDLEtBQUs7Ozs7OztnQkFDMUM7WUFFSixNQUFNRSxlQUFlLE1BQU1aLG9FQUF3QixDQUFDSTtZQUNwRCxPQUFPO2dCQUNILEdBQUdRLFlBQVk7Z0JBQ2ZDLHNCQUNJOzt3QkFDS0QsYUFBYUMsTUFBTTt3QkFDbkJSLE1BQU1TLGVBQWU7OztZQUdsQztRQUNKLFNBQVU7WUFDTlQsTUFBTVUsSUFBSTtRQUNkO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL29wdWxlbnQvLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeD8xODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcyB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICBjdHg6IERvY3VtZW50Q29udGV4dCxcbiAgICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICAgICAgICAgICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPiksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5pdGlhbFByb3BzLnN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaGVldC5nZXRTdHlsZUVsZW1lbnQoKX1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzaGVldC5zZWFsKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkRvY3VtZW50IiwiU2VydmVyU3R5bGVTaGVldCIsIk15RG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzaGVldCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJlbmhhbmNlQXBwIiwiQXBwIiwicHJvcHMiLCJjb2xsZWN0U3R5bGVzIiwiaW5pdGlhbFByb3BzIiwic3R5bGVzIiwiZ2V0U3R5bGVFbGVtZW50Iiwic2VhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();