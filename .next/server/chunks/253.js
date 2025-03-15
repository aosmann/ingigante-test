"use strict";
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 5953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lp": () => (/* binding */ client),
/* harmony export */   "rp": () => (/* binding */ client_with_token)
/* harmony export */ });
/* unused harmony exports projectId, dataset, apiVersion, token */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);
next_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
// console.log({projectId,dataset,apiVersion})
const client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({
    projectId,
    dataset,
    apiVersion,
    // token,
    useCdn: false
});
const client_with_token = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5953);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);
_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Get a pre configured url builder from your sanity client.
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_sanity_client__WEBPACK_IMPORTED_MODULE_0__/* .client */ .Lp);
function urlFor(source) {
    return builder.image(source);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlFor);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;