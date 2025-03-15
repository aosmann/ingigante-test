(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 9045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_urlFor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6253);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__]);
_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// ✅ Enhanced ImageCarousel: Grid View + Overlay + Image Viewer Modal + Keyboard Navigation + Mobile Friendly + Overlay Click Close





const ImageCarousel = ({ images  })=>{
    const [isViewerOpen, setIsViewerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const openViewer = (index)=>{
        setCurrentIndex(index);
        setIsViewerOpen(true);
    };
    const closeViewer = ()=>setIsViewerOpen(false);
    const nextImage = ()=>{
        setCurrentIndex((prev)=>prev === images.length - 1 ? 0 : prev + 1);
    };
    const prevImage = ()=>{
        setCurrentIndex((prev)=>prev === 0 ? images.length - 1 : prev - 1);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleKeyDown = (e)=>{
            if (!isViewerOpen) return;
            if (e.key === "Escape") closeViewer();
            else if (e.key === "ArrowRight") nextImage();
            else if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        isViewerOpen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.style.overflow = isViewerOpen ? "hidden" : "unset";
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        isViewerOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-4 grid-rows-2 gap-4 max-sm:grid-cols-2 max-sm:grid-rows-auto",
        children: [
            images[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-span-2 row-span-2 max-sm:col-span-2 max-sm:row-span-1 relative w-full h-96 sm:h-full rounded-lg overflow-hidden cursor-pointer",
                onClick: ()=>openViewer(0),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(images[0].asset).url(),
                    alt: "Main Image",
                    fill: true,
                    className: "object-cover"
                })
            }),
            images[1] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-start-3 row-start-1 max-sm:col-span-1 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer",
                onClick: ()=>openViewer(1),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(images[1].asset).url(),
                    alt: "Image 2",
                    fill: true,
                    className: "object-cover"
                })
            }),
            images[2] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-start-4 row-start-1 max-sm:col-span-1 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer",
                onClick: ()=>openViewer(2),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(images[2].asset).url(),
                    alt: "Image 3",
                    fill: true,
                    className: "object-cover"
                })
            }),
            images[3] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-start-3 row-start-2 max-sm:col-span-1 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer",
                onClick: ()=>openViewer(3),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(images[3].asset).url(),
                    alt: "Image 4",
                    fill: true,
                    className: "object-cover"
                })
            }),
            images[4] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-start-4 row-start-2 max-sm:col-span-1 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer",
                onClick: ()=>openViewer(4),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(images[4].asset).url(),
                        alt: "Image 5",
                        fill: true,
                        className: "object-cover"
                    }),
                    images.length > 5 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-lg font-semibold",
                        onClick: ()=>openViewer(4),
                        children: [
                            "+",
                            images.length - 5,
                            " more"
                        ]
                    })
                ]
            }),
            isViewerOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-2",
                onClick: closeViewer,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0",
                        onClick: closeViewer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "absolute top-4 right-4 text-white text-2xl z-50",
                        onClick: closeViewer,
                        children: "\xd7"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50",
                        onClick: (e)=>{
                            e.stopPropagation();
                            prevImage();
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLeftCircle, {
                            size: 40
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-full max-w-5xl h-[80vh] z-40",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(images[currentIndex].asset).url(),
                            alt: `Image ${currentIndex + 1}`,
                            fill: true,
                            className: "object-contain"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50",
                        onClick: (e)=>{
                            e.stopPropagation();
                            nextImage();
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillRightCircle, {
                            size: 40
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCarousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Map)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@react-google-maps/api"
const api_namespaceObject = require("@react-google-maps/api");
;// CONCATENATED MODULE: ./components/Map.tsx



const Map = ({ location  })=>{
    const { isLoaded  } = (0,api_namespaceObject.useJsApiLoader)({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCNhsU6R9HsP40Xu9QTwvWKCeWAZdpSRfM"
    });
    const containerStyle = {
        width: "100%",
        height: "400px"
    };
    const center = {
        lat: location?.lat || 0,
        lng: location?.lng || 0
    };
    const [map, setMap] = external_react_default().useState(null);
    const onLoad = external_react_default().useCallback((map)=>{
        map.setCenter(center);
        map.setZoom(15); // Explicit zoom level
        setMap(map);
    }, [
        center
    ]);
    const onUnmount = external_react_default().useCallback(()=>{
        setMap(null);
    }, []);
    if (!location || !location.lat || !location.lng) {
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: "text-gray-500",
            children: "Location data unavailable"
        });
    }
    return isLoaded ? /*#__PURE__*/ jsx_runtime_.jsx(api_namespaceObject.GoogleMap, {
        mapContainerStyle: containerStyle,
        center: center,
        zoom: 15,
        onLoad: onLoad,
        onUnmount: onUnmount,
        children: /*#__PURE__*/ jsx_runtime_.jsx(api_namespaceObject.Marker, {
            position: center,
            icon: {
                url: "https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png",
                anchor: new google.maps.Point(16, 32)
            }
        })
    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: "text-gray-500",
        children: "Loading map..."
    });
};
/* harmony default export */ const components_Map = (/*#__PURE__*/external_react_default().memo(Map));


/***/ }),

/***/ 2001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5953);
/* harmony import */ var _components_RichTextComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8008);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5711);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_urlFor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6253);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3559);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6201);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3147);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_ImageCarousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9045);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_sanity_client__WEBPACK_IMPORTED_MODULE_5__, _components_RichTextComponent__WEBPACK_IMPORTED_MODULE_6__, _portabletext_react__WEBPACK_IMPORTED_MODULE_7__, _lib_urlFor__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_11__, _components_ImageCarousel__WEBPACK_IMPORTED_MODULE_14__]);
([_lib_sanity_client__WEBPACK_IMPORTED_MODULE_5__, _components_RichTextComponent__WEBPACK_IMPORTED_MODULE_6__, _portabletext_react__WEBPACK_IMPORTED_MODULE_7__, _lib_urlFor__WEBPACK_IMPORTED_MODULE_9__, react_hot_toast__WEBPACK_IMPORTED_MODULE_11__, _components_ImageCarousel__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore
















function PropertyDetails({ property , images  }) {
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const submitContact = async (e)=>{
        e.preventDefault();
        const newContact = {
            _type: "contactForm",
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[3].value,
            phone: e.target[2].value,
            message: e.target[4].value,
            property: {
                _type: "reference",
                _ref: property._id
            }
        };
        _lib_sanity_client__WEBPACK_IMPORTED_MODULE_5__/* .client_with_token.create */ .rp.create(newContact).then((result)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].success("Thank you for your message. We will get back shortly!", {
                duration: 3000
            });
            formRef.current.reset();
        }).catch((error)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].error("Something went wrong! Please try again");
        });
    // const res = await sendContactForm({
    //   firstName: e.target[0].value,
    //   lastName: e.target[1].value,
    //   email: e.target[2].value,
    //   phone: e.target[3].value,
    //   comment: e.target[4].value,
    // });
    // if (res == 0) {
    //   toast.success("Thank you for your message. We will get back shortly!", {
    //     duration: 3000,
    //   });
    //   formRef.current.reset();
    // } else {
    //   toast.error("Something went wrong! Please try again", { duration: 3000 });
    // }
    };
    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [slideDirection, setSlideDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isFullscreen, setIsFullscreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const nextImage = ()=>{
        setSlideDirection("slide-left");
        setCurrentImageIndex((prev)=>prev === images.length - 1 ? 0 : prev + 1);
    };
    const previousImage = ()=>{
        setSlideDirection("slide-right");
        setCurrentImageIndex((prev)=>prev === 0 ? images.length - 1 : prev - 1);
    };
    const handleThumbnailClick = (index)=>{
        setSlideDirection(index > currentImageIndex ? "slide-left" : "slide-right");
        setCurrentImageIndex(index);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setSlideDirection("");
        }, 500);
        return ()=>clearTimeout(timer);
    }, [
        currentImageIndex
    ]);
    const toggleFullscreen = ()=>{
        setIsFullscreen(!isFullscreen);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleKeydown = (e)=>{
            if (!isFullscreen) return;
            if (e.key === "Escape") {
                setIsFullscreen(false);
            } else if (e.key === "ArrowRight") {
                nextImage();
            } else if (e.key === "ArrowLeft") {
                previousImage();
            }
        };
        window.addEventListener("keydown", handleKeydown);
        return ()=>window.removeEventListener("keydown", handleKeydown);
    }, [
        isFullscreen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isFullscreen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        isFullscreen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen mt-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        property.propertyType.typeName,
                        " ",
                        " for Sale in ",
                        " ",
                        property.location.locationName,
                        ", Nicaragua"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "space-y-10 flex flex-col px-4 justify-center items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-top justify-center xl:flex-row xl:space-x-4 max-w-[1200px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full lg:w-[800px]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/sales",
                                            className: "flex items-center text-[#484848] bg-[#f1f1f1] w-fit pl-[0.4rem] pr-[1rem] rounded",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineArrowBack, {
                                                    size: 20
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-lg ml-[0.1rem]",
                                                    children: "Back"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "text-[25px] leading-none sm:text-[35px] md:text-[35px] lg:text-[35px] text-normal mb-6 pb-6 text-normal",
                                            children: [
                                                property.propertyType.typeName,
                                                " ",
                                                " for Sale in ",
                                                " ",
                                                property.location.locationName,
                                                ", Nicaragua"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageCarousel__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    images: images
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-left pt-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center space-x-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "text-4xl py-3 font-normal",
                                                children: [
                                                    "$",
                                                    property.sellPrice.toLocaleString()
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center space-x-4 pb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "font-normal bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2",
                                                    children: property.flash_text
                                                }),
                                                property.price_old && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: " font-normal bg-[#dcefea] text-[#236253] w-fit rounded px-2",
                                                    children: [
                                                        "Market value ",
                                                        "$",
                                                        property.price_old.toLocaleString()
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center text-xl font-normal text-gray-700",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    property.title,
                                                    ", ",
                                                    property.location.locationName,
                                                    ", Nicaragua"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center text-gray-500 font-normal",
                                            children: [
                                                property.rooms && `${property.rooms} rooms`,
                                                property.bathrooms && `${property.bathrooms} bathrooms`,
                                                property.area_total && `${property.area_total.toLocaleString()} m²`
                                            ].filter(Boolean) // Remove falsy values (null, undefined, 0, "")
                                            .join(", ")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-y-4 pt-6 pr-[1rem]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xl font-bold border-b pb-2 text-gray-700",
                                            children: "Details"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                                property.location?.locationName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "City:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: property.location.locationName
                                                        })
                                                    ]
                                                }),
                                                property.propertyType?.typeName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Type:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: property.propertyType.typeName
                                                        })
                                                    ]
                                                }),
                                                property.beachfront === "Yes" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Beachfront:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: "Yes"
                                                        })
                                                    ]
                                                }),
                                                property.lotSize && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Land Area:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: `${property.lotSize.toLocaleString()} m²`
                                                        })
                                                    ]
                                                }),
                                                property.area_total && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Property Area:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: `${property.area_total.toLocaleString()} m²`
                                                        })
                                                    ]
                                                }),
                                                property.rooms && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Rooms:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: property.rooms
                                                        })
                                                    ]
                                                }),
                                                property.bathrooms && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Bathrooms:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: property.bathrooms
                                                        })
                                                    ]
                                                }),
                                                property.parking === "Yes" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "Parking:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: "Yes"
                                                        })
                                                    ]
                                                }),
                                                property.propertyId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between border-b py-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "font-medium text-gray-700",
                                                            children: "ID:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-500",
                                                            children: property.propertyId
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-y-4 pt-10 pb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xl font-bold border-b pb-2 text-gray-700",
                                            children: "Description"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-2 text-gray-700",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_portabletext_react__WEBPACK_IMPORTED_MODULE_7__.PortableText, {
                                                    value: property.overview,
                                                    components: _components_RichTextComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
                                                }),
                                                property.vrview ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                    height: "400px",
                                                    width: "100%",
                                                    allowFullScreen: "true",
                                                    src: property.vrview
                                                }) : "",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/contact",
                                                    className: "underline block sm:hidden",
                                                    children: [
                                                        "Contact Us ",
                                                        ">"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center py-10",
                                    children: property.maplocation ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Map__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        location: property.maplocation
                                    }) : ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-6 lg:mt-[6.4rem] space-y-6 w-full mb-20",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-[#F4F4F4] rounded p-6 text-[#143D30] ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-lg text-bold text-gray-700",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_11__.Toaster, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: "space-y-4 mt-4",
                                            id: "property",
                                            ref: formRef,
                                            onSubmit: submitContact,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "firstName",
                                                            children: "First Name"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "firstName",
                                                            id: "firstName",
                                                            placeholder: "First Name",
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "lastName",
                                                            children: "Last Name"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "lastName",
                                                            id: "lastName",
                                                            placeholder: "Last Name",
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "phone",
                                                            children: "Phone Number"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "tel",
                                                            name: "phone",
                                                            id: "phone",
                                                            placeholder: "+1(500) 000 000"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "email",
                                                            children: "Email"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "email",
                                                            name: "email",
                                                            id: "email",
                                                            placeholder: "your@company.com",
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "comment",
                                                            children: "Message"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            id: "comment",
                                                            name: "comment",
                                                            rows: 10,
                                                            placeholder: "Leave us a message..."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "text-btn w-full py-3.5 border-[3px] rounded-md border-btn",
                                                    children: "Send Message"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "https://ingigante.com/rental/hotel-ingigante-rent",
                                        target: "_blank",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-40 relative",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: "/assets/images/hotel-cover.webp",
                                                    alt: "Hotel Ingigante",
                                                    className: "h-full w-full object-cover",
                                                    layout: "fill" // Automatically fits container dimensions
                                                    ,
                                                    objectFit: "cover"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2",
                                                        children: "Promoted"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-lg font-bold text-gray-800 pt-2",
                                                        children: "Hotel Ingigante"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center text-gray-500 font-normal mb-4",
                                                        children: "14 rooms, 14 bathrooms, 1,867.72 m\xb2"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://ingigante.com/rental/hotel-ingigante-rent",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex-1 text-center border border-[#236253] text-green-800 py-2 rounded-md text-sm hover:bg-[#d4e8e3]",
                                                                children: "Check hotel"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://us2.cloudbeds.com/reservation/MBptIV",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex-1 text-center bg-[#236253] text-white py-2 rounded-md text-sm hover:bg-[#134a3d]",
                                                                children: "Book now"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "https://ingigante.com/property/surf-ranch-popoyo-home",
                                        target: "_blank",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-40 relative",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: "/assets/images/promoted-2.webp",
                                                    alt: "Surf Ranch Popoyo Home",
                                                    className: "h-full w-full object-cover",
                                                    layout: "fill" // Automatically fits container dimensions
                                                    ,
                                                    objectFit: "cover"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2",
                                                        children: "Hot SALE"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-lg font-bold text-gray-800 pt-2",
                                                        children: "Surf Ranch Popoyo Home"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center text-gray-500 font-normal mb-4",
                                                        children: "5 rooms, 4 bathrooms, 275 m\xb2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex gap-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://ingigante.com/property/surf-ranch-popoyo-home",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "flex-1 text-center bg-[#236253] text-white py-2 rounded-md text-sm hover:bg-[#134a3d]",
                                                            children: "Buy Home"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            isFullscreen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: toggleFullscreen,
                        className: "absolute top-4 right-4 text-white z-50 hover:opacity-75 transition-opacity",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-8 w-8",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: previousImage,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-white z-50 hover:scale-110 transition-transform",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__.AiFillLeftCircle, {
                            size: 40
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: nextImage,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-white z-50 hover:scale-110 transition-transform",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__.AiFillRightCircle, {
                            size: 40
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-full h-full flex items-center justify-center p-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-full h-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(images[currentImageIndex].asset).url(),
                                alt: "",
                                fill: true,
                                className: `object-contain transition-transform duration-500 ${slideDirection}`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-4 left-0 right-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center gap-2 px-4 overflow-x-auto pb-2",
                            children: images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>handleThumbnailClick(index),
                                    className: `relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transform transition-all duration-200 hover:scale-105 ${currentImageIndex === index ? "ring-2 ring-offset-2 ring-blue-500 scale-105" : "hover:ring-1 hover:ring-blue-300"}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: (0,_lib_urlFor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(image.asset).url(),
                                        alt: "",
                                        fill: true,
                                        className: "object-cover"
                                    })
                                }, image._ref))
                        })
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async (pageContext)=>{
    const pageSlug = pageContext.query.slug;
    const query = `*[ _type == "properties" && slug.current == $pageSlug][0]{
    _id,
    ...,
    location->,
    propertyType->
  }`;
    const property = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_5__/* .client.fetch */ .Lp.fetch(query, {
        pageSlug
    });
    let allImages = property.images.concat(property.mainImage);
    if (!property) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    } else {
        return {
            props: {
                property,
                images: allImages
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3559:
/***/ (() => {



/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5711:
/***/ ((module) => {

"use strict";
module.exports = import("@portabletext/react");;

/***/ }),

/***/ 5091:
/***/ ((module) => {

"use strict";
module.exports = import("next-sanity");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,253,8], () => (__webpack_exec__(2001)));
module.exports = __webpack_exports__;

})();