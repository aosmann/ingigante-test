"use strict";
(() => {
var exports = {};
exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 4275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_urlFor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6253);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1895);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_urlFor__WEBPACK_IMPORTED_MODULE_4__, _lib_api__WEBPACK_IMPORTED_MODULE_7__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__]);
([_lib_urlFor__WEBPACK_IMPORTED_MODULE_4__, _lib_api__WEBPACK_IMPORTED_MODULE_7__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const getStaticProps = async ()=>{
    const propertiesList = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__/* .client.fetch */ .Lp.fetch(`*[_type == "properties" && _id in path("drafts.**") == false]{
    ...,
    propertyType->,
    location->
  }`);
    const types = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__/* .client.fetch */ .Lp.fetch(`*[_type == "propertyType" && _id in path("drafts.**") == false]{
    ...,
  }`);
    const locations = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__/* .client.fetch */ .Lp.fetch(`*[_type == "locations" && _id in path("drafts.**") == false]{
    ...,
  }`);
    console.log(propertiesList);
    return {
        props: {
            propertiesList,
            types,
            locations
        },
        revalidate: 10
    };
};
function sales({ propertiesList , types , locations  }) {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const locationOptions = locations.map((item)=>({
            value: item.locationName,
            label: item.locationName,
            instanceId: (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)()
        }));
    const typeOptions = types.map((item1)=>({
            value: item1.typeName,
            label: item1.typeName,
            instanceId: (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)()
        }));
    const sortOptions = [
        {
            value: "sort",
            label: "Sort",
            instanceId: (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)()
        },
        {
            value: "sellPrice",
            label: "Price (low to high)",
            instanceId: (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)()
        },
        {
            value: "sellPrice-desc",
            label: "Price (high to low)",
            instanceId: (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)()
        }
    ];
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [properties, setProperties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(propertiesList);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query ? router.query.cat : null);
    const [minBedrooms, setMinBedrooms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [minBathrooms, setMinBathrooms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [sortByPrice, setSortByPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [sortDescending, setSortDescending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // const [price, setPrice] = useState(null);
    const [priceMin, setPriceMin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [priceMax, setPriceMax] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query ? router.query.loc : null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchProperties() {
            const data = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .getProperties */ .v)({
                category,
                minBedrooms,
                minBathrooms,
                sortByPrice,
                sortDescending,
                searchQuery,
                priceMin,
                priceMax,
                location
            });
            // Sort data by `updatedAt` or `createdAt` in descending order
            const sortedData = data.sort((a, b)=>{
                const dateA = new Date(a._updatedAt || a._createdAt);
                const dateB = new Date(b._updatedAt || b._createdAt);
                return dateB - dateA; // Descending order
            });
            setProperties(data);
        }
        fetchProperties();
    }, [
        category,
        minBedrooms,
        minBathrooms,
        sortByPrice,
        sortDescending,
        searchQuery,
        priceMin,
        priceMax,
        location
    ]);
    function handleCategoryChange(event) {
        setCategory(event.value);
    }
    function handleLocationChange(event) {
        setLocation(event.value);
    }
    function handleSearchQuery(event) {
        setSearchQuery(inputRef.current.value);
    // setSearchQuery(event.target.value);
    }
    // function handleBedroomsChange(event) {
    //   setMinBedrooms(parseInt(event.target.value) || null);
    // }
    // function handleBathroomsChange(event) {
    //   setMinBathrooms(parseInt(event.target.value) || null);
    // }
    function handlePriceMinChange(event) {
        setPriceMin(parseInt(event.target.value) || null);
    }
    function handlePriceMaxChange(event) {
        setPriceMax(parseInt(event.target.value) || null);
    }
    function handleSortChange(event) {
        const value = event.value;
        setSortByPrice(value);
        setSortDescending(value);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Sales | Ingigante"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-11184375903"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11184375903');
              `
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=G-TWF5MYQK4E"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TWF5MYQK4E');
            `
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#F4F4F4] w-full flex justify-center px-4 py-14",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-7xl w-full px-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center text-secondary",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-[35px] text-center font-bold",
                                    children: "Search for Properties"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Browse our exclusive listings"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-4 mt-4 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: "bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5",
                                    placeholder: "Enter a keyword",
                                    ref: inputRef
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    // type="submit"
                                    className: "bg-btn text-white border-0 flex items-center justify-center py-2.5 rounded-md md:px-6 w-full md:w-1/6",
                                    onClick: handleSearchQuery,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiSearch, {
                                                className: "mr-4"
                                            })
                                        }),
                                        "Search"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center mt-4 mb-4 opacity-50",
                            children: "Filter Settings"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "md:flex md:flex-row md:space-x-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative mb-6 md:mb-0 md:w-1/4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        defaultValue: category,
                                        onChange: handleCategoryChange,
                                        options: typeOptions,
                                        placeholder: "Type",
                                        isSearchable: false
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative mb-6 md:mb-0 md:w-1/4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        defaultValue: location,
                                        onChange: handleLocationChange,
                                        options: locationOptions,
                                        placeholder: "Location",
                                        isSearchable: false
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative mb-6 md:mb-0 md:w-1/4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none opacity-40",
                                            children: "$"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            placeholder: "Price min.",
                                            className: "w-full pl-6 rounded-md border border-gray-300",
                                            onChange: handlePriceMinChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative mb-6 md:mb-0 md:w-1/4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none opacity-40",
                                            children: "$"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            placeholder: "Price max.",
                                            className: "w-full pl-6 rounded-md border border-gray-300",
                                            onChange: handlePriceMaxChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative mb-6 md:mb-0 md:w-1/4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        // defaultValue={feature}
                                        onChange: handleSortChange,
                                        options: sortOptions,
                                        placeholder: "Sort",
                                        isSearchable: false
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-7xl w-full mt-14",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 px-4",
                    children: properties.length > 0 ? properties.map((property)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative max-w-sm rounded overflow-hidden shadow-md mx-auto h-full flex flex-col",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: `/property/${property.slug.current}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: `${(0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(property.mainImage).url()}?w=390&h=290&fit=crop&crop=center`,
                                        alt: "card",
                                        className: "object-cover lg:object-center",
                                        width: 390,
                                        height: 290,
                                        priority: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "font-bold text-[20px]",
                                            children: property.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "px-6 py-4 text-[17px] mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-secondary",
                                                children: [
                                                    "$",
                                                    property.sellPrice.toLocaleString()
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: property.location.locationName
                                            })
                                        ]
                                    })
                                ]
                            }, property._id)
                        }, property._id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "No Result!"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sales);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,253,895], () => (__webpack_exec__(4275)));
module.exports = __webpack_exports__;

})();