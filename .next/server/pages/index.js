"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/assets/images/about.png
/* harmony default export */ const about = ({"src":"/_next/static/media/about.abd7c286.png","height":2000,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEUDDgoZSj4HHRYUNSoNJx4hXE4gQTNAWUbwS8p5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGNgZWVkZmFiYmBgZQQxGEAMdjZmFgYGBkY2iAADVAUDAAljAF0TLPO5AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/About.tsx




const About = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "text-primary flex px-4 xl:justify-center py-14",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center lg:flex-row lg:space-x-10 mt-10 mb-10 max-w-7xl",
            id: "about",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: about,
                    alt: "about",
                    className: "w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px] pb-4"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-[17px] lg:w-[500px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-[35px] lg:text-[50px]",
                            children: "About Us"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-justify",
                                children: "Our team consists of experienced real estate agents, brokers, property managers, and consultants, each with a unique set of skills and expertise. We work collaboratively to provide our clients with a comprehensive range of real estate services, customized to meet their specific needs and goal."
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_About = (About);


/***/ }),

/***/ 1000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Faq)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: ./components/Faq.tsx



const Faq = ({ faqs  })=>{
    function toggleAccordion(id) {
        const accordion = document.getElementById(`accordion${id}`);
        const chevron = document.getElementById(`chevron${id}`);
        accordion.classList.toggle("hidden");
        chevron.classList.toggle("rotate-180");
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-primary flex flex-col py-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full px-4 flex justify-center pb-14",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-4xl w-full py-14 space-y-4 text-secondary px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-[35px] sm:text-[50px] text-center",
                        children: "FAQ"
                    }),
                    faqs.map((faq)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-b border-secondary pb-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cursor-pointer flex justify-between items-center",
                                    onClick: ()=>{
                                        toggleAccordion(faq._id);
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-lg",
                                            children: faq.question
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(bi_namespaceObject.BiChevronDown, {
                                            className: "transform transition-transform duration-500",
                                            id: `chevron${faq._id}`,
                                            size: 36
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pb-4 hidden text-justify",
                                    id: `accordion${faq._id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: faq.answer
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: ""
                                })
                            ]
                        }, faq._id))
                ]
            })
        })
    });
};
/* harmony default export */ const components_Faq = (Faq);


/***/ }),

/***/ 6691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/images/hero.png
/* harmony default export */ const hero = ({"src":"/_next/static/media/hero.6f2be5e0.png","height":997,"width":1078,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAb1BMVEXc8vZdQzo5NylJVGapqrGBjp5iXFaay/CGhYqm0OZARE9gcYqMwumipbI7PESnqbGbwebz2MWuu9W7wtKUnatbYG6aoayHkJN3fo2MpMJkZ3AxJBpUVVqis8VEQjdkcH95c3JmYmJweIm1t8B4eoOU6OSbAAAAFXRSTlP8/v79/v7++v75/vv44ftZ8wRvaFQEFhZLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nAXBBQKAMAwEsEOHeztX+P8bSXA+h1jECOz8ciQJ3N82kRlaXGWmolTCahrS2nfIdbDRuYxk+ypIzz9+zgRj3UQ94gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(1929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ./components/Hero.tsx







const Hero = ({ propertyType , locations  })=>{
    const [location, setLocation] = (0,external_react_.useState)(null);
    const [category, setCategory] = (0,external_react_.useState)(null);
    // const [searchCat, setSearchCat] = useState(null);
    function handleCategoryChange(event) {
        setCategory(event.value);
    }
    function handleLocationChange(event) {
        setLocation(event.value);
    }
    const locationOptions = locations.map((item)=>({
            value: item.locationName,
            label: item.locationName
        }));
    const typeOptions = [
        {
            value: "rentals",
            label: "For Rent"
        },
        {
            value: "sales",
            label: "For Sale"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-primary py-16 flex flex-col justify-center items-center top-0 sm:mt-4 m--1 overflow-y-hidden z-10",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col space-y-5 lg:items-center justify-center max-w-7xl lg:flex-row p-4 relative items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-4 md:mb-20 sm:mb-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-[35px] lg:text-[64px] text-secondary font-bely uppercase leading-snug",
                            id: "customFont",
                            children: "YOUR LOCAL EXPERTS!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-secondary-light font-thin tracking-wider leading-[30px] text-[14px] sm:text-[21px] mb-4 line-h-2 pt-4 sm:pt-0",
                            children: "We have developed a deep understanding of the local market and are dedicated to helping our clients achieve their real estate goals."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: hero,
                    alt: "hero",
                    className: "w-[300px] sm:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[650px]"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-[#F4F4F4] p-4 rounded mt-6 lg:absolute lg:w-2/3 w-full lg:bottom-14 lg:left-4 xl:bottom-20 2xl:bottom-34 max-w-[47rem] z-50",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-4 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative mb-6 lg:mb-0 lg:w-full z-20",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                                    defaultValue: category,
                                    onChange: handleCategoryChange,
                                    options: typeOptions,
                                    isSearchable: false,
                                    placeholder: "Type"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative mb-6 lg:mb-0 lg:w-full z-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                                    defaultValue: location,
                                    onChange: handleLocationChange,
                                    options: locationOptions,
                                    isSearchable: false,
                                    placeholder: "Location",
                                    maxMenuHeight: 145
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: {
                                    pathname: category == "sales" ? "/sales" : "/rentals",
                                    query: {
                                        loc: location
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "bg-btn text-white flex items-center justify-center py-3 rounded-md lg:py-2 lg:px-4 w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiSearch, {
                                                className: "mr-4"
                                            })
                                        }),
                                        "Search"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Hero = (Hero);


/***/ }),

/***/ 8172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_urlFor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6253);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__]);
_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Offers = ({ properties  })=>{
    const NextArrow = ({ onClick  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "absolute top-1/2 right-[-25px] transform -translate-y-1/2 z-10 cursor-pointer",
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaArrowRight, {
                size: 20
            })
        });
    const PrevArrow = ({ onClick  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "absolute top-1/2 left-[-25px] transform -translate-y-1/2 z-10 cursor-pointer",
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaArrowLeft, {
                size: 20
            })
        });
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: properties.length >= 4 ? 4 : properties.length,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        initialSlide: 0,
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {}),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {}),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "text-primary flex flex-col bg-[#F4F4F4] justify-center items-center py-9 md:items-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mt-6 mb-10 px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-10 px-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-[35px] font-bold",
                            children: "Featured Listings"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[16px] opacity-60",
                            children: "Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-7xl w-screen space-x-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                        ...settings,
                        children: properties.map((property)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/property/${property.slug.current}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-sm h-[450px] rounded overflow-hidden mx-auto bg-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-[290px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: `${(0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(property.mainImage).url()}?w=390&h=290&fit=crop&crop=center`,
                                                alt: "card",
                                                className: "object-cover lg:object-center w-full h-full",
                                                width: 390,
                                                height: 290
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "px-6 py-4 text-left h-[80px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-[20px] line-clamp-2",
                                                children: property.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "px-6 py-4 text-[17px] text-left",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "opacity-60 pb-1",
                                                    children: property.propertyType.typeName
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "opacity-60 pb-1",
                                                    children: [
                                                        "in ",
                                                        property.location.locationName
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-secondary font-bold",
                                                    children: [
                                                        "$",
                                                        property.sellPrice.toLocaleString()
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, property._id))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center mt-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/sales",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "py-2 px-4 border-primary border-2 rounded-md text-[16px]",
                            children: "Show Sale Listings"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_urlFor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6253);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_urlFor__WEBPACK_IMPORTED_MODULE_2__]);
_lib_urlFor__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const OurTeam = ({ teamMembers  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "text-primary flex flex-col bg-white justify-center items-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mt-10 mb-10 px-4 text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-[35px] sm:text-[50px] ",
                        children: "Our Team"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 mb-8 sm:mb-2 place-content-center",
                    children: teamMembers.map((member)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-sm overflow-hidden mx-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative w-[240px] h-[297px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(member.image).url(),
                                        alt: "card",
                                        fill: true,
                                        style: {
                                            objectFit: "cover"
                                        }
                                    }, member._id)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold text-[20px] mt-3",
                                    children: member.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: member.position
                                })
                            ]
                        }, member._id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurTeam);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6691);
/* harmony import */ var _components_Offers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8172);
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8067);
/* harmony import */ var _components_Reference__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2257);
/* harmony import */ var _components_OurTeam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6557);
/* harmony import */ var _components_Faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1000);
/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Offers__WEBPACK_IMPORTED_MODULE_3__, _components_OurTeam__WEBPACK_IMPORTED_MODULE_6__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Offers__WEBPACK_IMPORTED_MODULE_3__, _components_OurTeam__WEBPACK_IMPORTED_MODULE_6__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const getStaticProps = async (context)=>{
    const properties = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__/* .client.fetch */ .Lp.fetch(`*[_type == "properties" && _id in path("drafts.**") == false && featured == true]{
      ...,
      location->,
    } | order(_createdAt asc)`);
    const references = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__/* .client.fetch */ .Lp.fetch(`*[_type == "references" && _id in path("drafts.**") == false]`);
    const ourteam = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__/* .client.fetch */ .Lp.fetch(`*[_type == "team" && _id in path("drafts.**") == false] | order(ordering asc)`);
    const faq = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__/* .client.fetch */ .Lp.fetch(`*[_type == "faq" && _id in path("drafts.**") == false]`);
    const propertyType = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__/* .client.fetch */ .Lp.fetch(`*[_type == "propertyType" && _id in path("drafts.**") == false]{
    ...,
    propertyType->,
    location->
  }`);
    const locations = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_8__/* .client.fetch */ .Lp.fetch(`*[_type == "locations" && _id in path("drafts.**") == false]{
    ...,
  }`);
    return {
        props: {
            properties,
            references,
            ourteam,
            faq,
            propertyType,
            locations
        },
        revalidate: 10
    };
};
function Home({ properties , ourteam , references , faq , propertyType , locations  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col items-center justify-center overflow-x-hidden ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Ingigante | Real Estate in Nicaragua"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Explore the best real estate opportunities in Nicaragua with Ingigante. Find beachfront properties, rental homes, and investment opportunities in paradise."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "Real estate Nicaragua, beachfront properties, homes for rent Nicaragua, investment properties Nicaragua, Ingigante real estate"
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex w-full flex-1 flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        propertyType: propertyType,
                        locations: locations
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Offers__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        properties: properties
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OurTeam__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        teamMembers: ourteam
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Faq__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        faqs: faq
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reference__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        references: references
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,253,257], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();