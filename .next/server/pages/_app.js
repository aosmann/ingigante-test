(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1773:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Merriweather_d84d7e', '__Merriweather_Fallback_d84d7e'","fontWeight":700,"fontStyle":"normal"},
	"className": "__className_d84d7e",
	"variable": "__variable_d84d7e"
};


/***/ }),

/***/ 5443:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__bely_53958e', '__bely_Fallback_53958e'"},
	"className": "__className_53958e",
	"variable": "__variable_53958e"
};


/***/ }),

/***/ 4690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Merriweather","arguments":[{"weight":"700","subsets":["latin"],"variable":"--merri-font"}],"variableName":"merri"}
var _app_tsx_import_Merriweather_arguments_weight_700_subsets_latin_variable_merri_font_variableName_merri_ = __webpack_require__(1773);
var _app_tsx_import_Merriweather_arguments_weight_700_subsets_latin_variable_merri_font_variableName_merri_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Merriweather_arguments_weight_700_subsets_latin_variable_merri_font_variableName_merri_);
// EXTERNAL MODULE: ./node_modules/@next/font/local/target.css?{"path":"pages/_app.tsx","import":"","arguments":[{"src":"./Bely-Display.ttf","variable":"--bely-font","display":"swap"}],"variableName":"bely"}
var _app_tsx_import_arguments_src_Bely_Display_ttf_variable_bely_font_display_swap_variableName_bely_ = __webpack_require__(5443);
var _app_tsx_import_arguments_src_Bely_Display_ttf_variable_bely_font_display_swap_variableName_bely_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_arguments_src_Bely_Display_ttf_variable_bely_font_display_swap_variableName_bely_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(1598);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.7271ed9c.png","height":39,"width":234,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEWyqXeyqXezqXfTXWcTAAAAA3RSTlM2S2MdpvvQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYmJgZGRgYAQAADEACPlZKeoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navbar.tsx





const Navbar = ()=>{
    const [navbar, setNavbar] = (0,external_react_.useState)(false);
    const handleLinkClick = ()=>{
        setNavbar(false); // Close the menu when a link is clicked
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "w-full bg-primary absolute sticky fixed top-0 z-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between py-3 md:py-5 md:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                onClick: handleLinkClick,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo,
                                    alt: "logo",
                                    height: 32
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",
                                    onClick: ()=>setNavbar(!navbar),
                                    children: navbar ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6",
                                        viewBox: "0 0 20 20",
                                        fill: "#B2A978",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "#B2A978",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 text-secondary gap-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-secondary hover:text-[#cfc591]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/sales",
                                        onClick: handleLinkClick,
                                        children: "For Sale"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-secondary hover:text-[#cfc591]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/rentals",
                                        onClick: handleLinkClick,
                                        children: "For Rent"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-secondary hover:text-[#cfc591]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/services",
                                        onClick: handleLinkClick,
                                        children: "Services"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-secondary hover:text-[#cfc591]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#about",
                                        scroll: false,
                                        onClick: handleLinkClick,
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-secondary hover:text-[#cfc591]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blog",
                                        onClick: handleLinkClick,
                                        children: "Blog"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "hover:text-secondary",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        onClick: handleLinkClick,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "bg-secondary hover:bg-[#9c9260] py-2 px-4 text-white rounded-md",
                                            children: "Contact Us"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./public/assets/images/footer_logo.png
/* harmony default export */ const footer_logo = ({"src":"/_next/static/media/footer_logo.e5a3f7fa.png","height":52,"width":212,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEWyqXeyqXeyqXezqneyqXeZHoUWAAAABXRSTlMvPyBhmeTKYXUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAXSURBVHicY2BkYWBkBCFmZiYGBiYmBgAA1gAWaffaDAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./components/Footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "gap-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex h-full w-full items-center justify-center border-t bg-[#255143] text-secondary gap-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.facebook.com/profile.php?id=100090605568150",
                        id: "facebook",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-[#2a5c4c] my-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-secondary transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.instagram.com/ingigante/",
                        id: "instagram",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-[#2a5c4c] my-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-secondary transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex h-24 w-full items-center justify-center bg-primary text-secondary",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: footer_logo,
                    alt: "footer_logo"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Newsletter.tsx



const Newsletter = ()=>{
    const [state, setState] = (0,external_react_.useState)(0);
    const [errorMsg, setErrorMsg] = (0,external_react_.useState)("");
    const [email, setEmail] = (0,external_react_.useState)("");
    // 0 - initial , 1 - loading, 2 - success, 3 - error
    const subscribe = async (e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        setState(1);
        setErrorMsg("");
        console.log(e.target[0].value);
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                body: email
            });
            const data = await res.json();
            if (data.error !== null) {
                throw data.error;
            }
            setState(2);
        } catch (e) {
            setErrorMsg(e);
            setState(3);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "text-primary bg-[#F4F4F4] px-4 py-10 flex flex-col justify-center items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-7xl flex justify-between w-full md:items-center flex-col md:flex-row space-y-5 px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-[33px]",
                            children: "Subscribe to newsletter"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-[16px] md:text-[20px]",
                            children: "Get the latest news and offers"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: state == 2 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-medium mt-4 text-xl text-green-800",
                        children: "Thanks for subscribing!"
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "md:flex md:flex-row md:items-center md:space-x-2 space-y-3 md:space-y-0",
                        onSubmit: subscribe,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                className: "bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-4 py-3",
                                placeholder: "Your e-mail address",
                                onChange: (event)=>setEmail(event.target.value),
                                required: true,
                                value: email
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "bg-secondary hover:bg-[#9c9260] text-white px-4 py-3 rounded-md md:w-1/3 w-full md:px-4",
                                type: "submit",
                                children: "Subscribe"
                            }),
                            state === 3 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-red-500 mt-3",
                                children: errorMsg
                            }) : ""
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Newsletter = (Newsletter);

;// CONCATENATED MODULE: ./pages/_app.tsx










function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: style_default().dynamic([
            [
                "f2149f045249fa77",
                [
                    (_app_tsx_import_Merriweather_arguments_weight_700_subsets_latin_variable_merri_font_variableName_merri_default()).style.fontFamily,
                    (_app_tsx_import_arguments_src_Bely_Display_ttf_variable_bely_font_display_swap_variableName_bely_default()).style.fontFamily
                ]
            ]
        ]),
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "f2149f045249fa77",
                dynamic: [
                    (_app_tsx_import_Merriweather_arguments_weight_700_subsets_latin_variable_merri_font_variableName_merri_default()).style.fontFamily,
                    (_app_tsx_import_arguments_src_Bely_Display_ttf_variable_bely_font_display_swap_variableName_bely_default()).style.fontFamily
                ],
                children: `:root{--merri-font:${(_app_tsx_import_Merriweather_arguments_weight_700_subsets_latin_variable_merri_font_variableName_merri_default()).style.fontFamily};--bely-font:${(_app_tsx_import_arguments_src_Bely_Display_ttf_variable_bely_font_display_swap_variableName_bely_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: style_default().dynamic([
                    [
                        "f2149f045249fa77",
                        [
                            (_app_tsx_import_Merriweather_arguments_weight_700_subsets_latin_variable_merri_font_variableName_merri_default()).style.fontFamily,
                            (_app_tsx_import_arguments_src_Bely_Display_ttf_variable_bely_font_display_swap_variableName_bely_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Newsletter, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675], () => (__webpack_exec__(4690)));
module.exports = __webpack_exports__;

})();