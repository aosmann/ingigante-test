"use strict";
(() => {
var exports = {};
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 7215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rp": () => (/* binding */ client_with_token)
/* harmony export */ });
/* unused harmony exports projectId, dataset, apiVersion, token, client */
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

/***/ 2139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);
_lib_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getRequestParams(email) {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DATACENTER = API_KEY.split("-")[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    const data = {
        email_address: email,
        status: "subscribed"
    };
    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64ApiKey}`
    };
    return {
        url,
        data,
        headers
    };
}
async function handler(req, res) {
    const email = req.body;
    if (!email || !email.length) {
        res.status(200).json({
            error: "Please enter a email address"
        });
    }
    try {
        const { url , data , headers  } = getRequestParams(email);
        // Add to sanity
        const newSubscriber = {
            _type: "subscribers",
            email
        };
        _lib_sanity_client__WEBPACK_IMPORTED_MODULE_0__/* .client_with_token.create */ .rp.create(newSubscriber).then((result)=>{
            console.log("New subscriber created with ID", result._id);
        }).catch((error)=>{
            console.error("Error creating new subscriber:", error.message);
        });
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                email_address: data.email_address,
                status: data.status
            })
        });
        res.status(200).json({
            error: null
        });
    } catch (err) {
        res.status(400).json({
            error: "Please try again!!"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2139));
module.exports = __webpack_exports__;

})();