"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/experience",{

/***/ "./src/app/components/inlineList/InlineList.style.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/inlineList/InlineList.style.ts ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CompaniesListLayout: function() { return /* binding */ CompaniesListLayout; },\n/* harmony export */   CompaniesListWrapper: function() { return /* binding */ CompaniesListWrapper; },\n/* harmony export */   Company: function() { return /* binding */ Company; },\n/* harmony export */   CompanyImage: function() { return /* binding */ CompanyImage; },\n/* harmony export */   CompanyTitle: function() { return /* binding */ CompanyTitle; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background: #505275;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: var(--spacing-padding);\\n  display: flex;\\n  gap: 5px;\\n  width: 100%;\\n  background: #505275;\\n  transform: \",\n        \";\\n  transition: transform 0.5s ease;\\n\\n@media (max-width: 900px) {\\n    gap: 5px;\\n    transform: \",\n        \";\\n  \\n@media (max-width: 450px) {\\n display: none;\\n}};\\n\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  flex: 0 0 auto;\\n  border: \",\n        \";\\n  padding: 0 10px;\\n  border-radius: 5px;\\n  transition: background-color 0.3s, border 0.3s;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: auto;\\n  height: 45px;\\n  object-fit: cover;\\n  position: relative;\\n  top: 10px;\\n\\n  @media (max-width: 900px) {\\n    height: 45px;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-top: 5px;\\n  font-size: 14px;\\n\\n  @media (max-width: 900px) {\\n    font-size: 7px;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst CompaniesListLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst CompaniesListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1(), (param)=>{\n    let { activeIndex, itemWidth, visibleItems } = param;\n    const halfway = Math.floor(visibleItems / 3);\n    const moveIndex = activeIndex >= halfway ? activeIndex - halfway : 0;\n    return \"translateX(-\".concat(moveIndex * (itemWidth + 20), \"px)\");\n}, (param)=>{\n    let { activeIndex, itemWidth, visibleItems } = param;\n    const halfway = Math.floor(visibleItems / 5);\n    const moveIndex = activeIndex >= halfway ? activeIndex - halfway : 0;\n    return \"translateX(-\".concat(moveIndex * (itemWidth + 55), \"px)\");\n});\nconst Company = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), (param)=>{\n    let { active } = param;\n    return active ? \"1px solid #fff\" : \"none\";\n});\nconst CompanyImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject3());\nconst CompanyTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvaW5saW5lTGlzdC9JbmxpbmVMaXN0LnN0eWxlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBWWhDLE1BQU1DLHNCQUFzQkQseURBQU1BLENBQUNFLEdBQUcsb0JBRTNDO0FBRUssTUFBTUMsdUJBQXVCSCx5REFBTUEsQ0FBQ0UsR0FBRyxxQkFNL0I7UUFBQyxFQUFFRSxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFO0lBQ3BELE1BQU1DLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0gsZUFBZTtJQUMxQyxNQUFNSSxZQUFZTixlQUFlRyxVQUFVSCxjQUFjRyxVQUFVO0lBQ25FLE9BQU8sZUFBNEMsT0FBN0JHLFlBQWFMLENBQUFBLFlBQVksRUFBQyxHQUFHO0FBQ3ZELEdBS2lCO1FBQUMsRUFBRUQsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRTtJQUN0RCxNQUFNQyxVQUFVQyxLQUFLQyxLQUFLLENBQUNILGVBQWU7SUFDMUMsTUFBTUksWUFBWU4sZUFBZUcsVUFBVUgsY0FBY0csVUFBVTtJQUNuRSxPQUFPLGVBQTRDLE9BQTdCRyxZQUFhTCxDQUFBQSxZQUFZLEVBQUMsR0FBRztBQUN2RCxHQU9FO0FBRUssTUFBTU0sVUFBVVgseURBQU1BLENBQUNFLEdBQUcscUJBRXJCO1FBQUMsRUFBRVUsTUFBTSxFQUFFO1dBQU1BLFNBQVMsbUJBQW1CO0dBS3ZEO0FBRUssTUFBTUMsZUFBZWIseURBQU1BLENBQUNjLEdBQUcscUJBVXBDO0FBRUssTUFBTUMsZUFBZWYseURBQU1BLENBQUNFLEdBQUcscUJBT3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmxpbmVMaXN0L0lubGluZUxpc3Quc3R5bGUudHM/ZjE4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIENvbXBhbmllc0xpc3RXcmFwcGVyUHJvcHMge1xuICAgIGFjdGl2ZUluZGV4OiBudW1iZXI7XG4gICAgaXRlbVdpZHRoOiBudW1iZXI7XG4gICAgdmlzaWJsZUl0ZW1zOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDb21wYW55UHJvcHMge1xuICAgIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IENvbXBhbmllc0xpc3RMYXlvdXQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjNTA1Mjc1O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbXBhbmllc0xpc3RXcmFwcGVyID0gc3R5bGVkLmRpdjxDb21wYW5pZXNMaXN0V3JhcHBlclByb3BzPmBcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1wYWRkaW5nKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNTA1Mjc1O1xuICB0cmFuc2Zvcm06ICR7KHsgYWN0aXZlSW5kZXgsIGl0ZW1XaWR0aCwgdmlzaWJsZUl0ZW1zIH0pID0+IHtcbiAgICBjb25zdCBoYWxmd2F5ID0gTWF0aC5mbG9vcih2aXNpYmxlSXRlbXMgLyAzKTtcbiAgICBjb25zdCBtb3ZlSW5kZXggPSBhY3RpdmVJbmRleCA+PSBoYWxmd2F5ID8gYWN0aXZlSW5kZXggLSBoYWxmd2F5IDogMDtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZVgoLSR7bW92ZUluZGV4ICogKGl0ZW1XaWR0aCArIDIwKX1weClgO1xufX07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGdhcDogNXB4O1xuICAgIHRyYW5zZm9ybTogJHsoeyBhY3RpdmVJbmRleCwgaXRlbVdpZHRoLCB2aXNpYmxlSXRlbXMgfSkgPT4ge1xuICAgIGNvbnN0IGhhbGZ3YXkgPSBNYXRoLmZsb29yKHZpc2libGVJdGVtcyAvIDUpO1xuICAgIGNvbnN0IG1vdmVJbmRleCA9IGFjdGl2ZUluZGV4ID49IGhhbGZ3YXkgPyBhY3RpdmVJbmRleCAtIGhhbGZ3YXkgOiAwO1xuICAgIHJldHVybiBgdHJhbnNsYXRlWCgtJHttb3ZlSW5kZXggKiAoaXRlbVdpZHRoICsgNTUpfXB4KWA7XG59fTtcbiAgXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiBkaXNwbGF5OiBub25lO1xufX07XG5cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbXBhbnkgPSBzdHlsZWQuZGl2PENvbXBhbnlQcm9wcz5gXG4gIGZsZXg6IDAgMCBhdXRvO1xuICBib3JkZXI6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmUgPyAnMXB4IHNvbGlkICNmZmYnIDogJ25vbmUnKX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlciAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29tcGFueUltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNDVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbXBhbnlUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbXBhbmllc0xpc3RMYXlvdXQiLCJkaXYiLCJDb21wYW5pZXNMaXN0V3JhcHBlciIsImFjdGl2ZUluZGV4IiwiaXRlbVdpZHRoIiwidmlzaWJsZUl0ZW1zIiwiaGFsZndheSIsIk1hdGgiLCJmbG9vciIsIm1vdmVJbmRleCIsIkNvbXBhbnkiLCJhY3RpdmUiLCJDb21wYW55SW1hZ2UiLCJpbWciLCJDb21wYW55VGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/inlineList/InlineList.style.ts\n"));

/***/ })

});