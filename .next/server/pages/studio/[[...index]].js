"use strict";
(() => {
var exports = {};
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 8641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Logo = (props)=>{
    const { renderDefault , title  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center space-x-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "object-cover",
                height: 50,
                width: 50,
                src: "/assets/images/logo1.png",
                alt: "logo"
            }),
            renderDefault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: renderDefault(props)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 6028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_StudioNavbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@heroicons/react/24/solid"
const solid_namespaceObject = require("@heroicons/react/24/solid");
;// CONCATENATED MODULE: ./components/StudioNavbar.tsx




const StudioNavbar = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-between p-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ArrowUturnLeftIcon, {
                            className: "mr-2 h-6 w-6"
                        }),
                        "Go to website"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: props.renderDefault(props)
            })
        ]
    });
};
/* harmony default export */ const components_StudioNavbar = (StudioNavbar);


/***/ }),

/***/ 5590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StudioPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_sanity_studio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8331);
/* harmony import */ var next_sanity_studio_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7152);
/* harmony import */ var _sanity_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7240);
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8315);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity_studio__WEBPACK_IMPORTED_MODULE_2__, next_sanity_studio_head__WEBPACK_IMPORTED_MODULE_3__, _sanity_config__WEBPACK_IMPORTED_MODULE_4__, sanity__WEBPACK_IMPORTED_MODULE_5__]);
([next_sanity_studio__WEBPACK_IMPORTED_MODULE_2__, next_sanity_studio_head__WEBPACK_IMPORTED_MODULE_3__, _sanity_config__WEBPACK_IMPORTED_MODULE_4__, sanity__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.createGlobalStyle)(({ theme  })=>({
        html: {
            backgroundColor: theme.sanity.color.base.bg
        }
    }));
function StudioPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_sanity_studio_head__WEBPACK_IMPORTED_MODULE_3__.NextStudioHead, {
                    favicons: false
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_sanity_studio__WEBPACK_IMPORTED_MODULE_2__.NextStudio, {
                config: _sanity_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(sanity__WEBPACK_IMPORTED_MODULE_5__.StudioProvider, {
                    config: _sanity_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalStyle, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sanity__WEBPACK_IMPORTED_MODULE_5__.StudioLayout, {})
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var sanity_desk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9933);
/* harmony import */ var _sanity_vision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8884);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3554);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8641);
/* harmony import */ var _components_StudioNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6028);
/* harmony import */ var _sanity_google_maps_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6372);
/* harmony import */ var _sanity_google_maps_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_google_maps_input__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__, sanity_desk__WEBPACK_IMPORTED_MODULE_1__, _sanity_vision__WEBPACK_IMPORTED_MODULE_2__, _schemas__WEBPACK_IMPORTED_MODULE_3__]);
([sanity__WEBPACK_IMPORTED_MODULE_0__, sanity_desk__WEBPACK_IMPORTED_MODULE_1__, _sanity_vision__WEBPACK_IMPORTED_MODULE_2__, _schemas__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



//import {googleMapsInput} from '@sanity/google-maps-input'



const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineConfig)({
    name: "default",
    title: "Ingigante Property Management",
    basePath: "/studio",
    projectId,
    dataset,
    plugins: [
        (0,_sanity_google_maps_input__WEBPACK_IMPORTED_MODULE_6__.googleMapsInput)({
            apiKey: "AIzaSyCNhsU6R9HsP40Xu9QTwvWKCeWAZdpSRfM"
        }),
        (0,sanity_desk__WEBPACK_IMPORTED_MODULE_1__.deskTool)(),
        (0,_sanity_vision__WEBPACK_IMPORTED_MODULE_2__.visionTool)()
    ],
    schema: {
        types: _schemas__WEBPACK_IMPORTED_MODULE_3__/* .schemaTypes */ .Y
    },
    studio: {
        components: {
            logo: _components_Logo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            navbar: _components_StudioNavbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    title: "Block Content",
    name: "blockContent",
    type: "array",
    of: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineArrayMember)({
            title: "Block",
            type: "block",
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
                {
                    title: "Normal",
                    value: "normal"
                },
                {
                    title: "H1",
                    value: "h1"
                },
                {
                    title: "H2",
                    value: "h2"
                },
                {
                    title: "H3",
                    value: "h3"
                },
                {
                    title: "H4",
                    value: "h4"
                },
                {
                    title: "Quote",
                    value: "blockquote"
                }
            ],
            lists: [
                {
                    title: "Bullet",
                    value: "bullet"
                }
            ],
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [
                    {
                        title: "Strong",
                        value: "strong"
                    },
                    {
                        title: "Emphasis",
                        value: "em"
                    }
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        title: "URL",
                        name: "link",
                        type: "object",
                        fields: [
                            {
                                title: "URL",
                                name: "href",
                                type: "url"
                            }
                        ]
                    }
                ]
            }
        }),
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineArrayMember)({
            type: "image",
            options: {
                hotspot: true
            }
        })
    ]
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "blog",
    title: "Blog",
    type: "document",
    icon: react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdOutlineComment,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "title",
            title: "Title",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "description",
            description: "Enter a short snippet for the blog...",
            title: "Description",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "publishedAt",
            title: "Published at",
            type: "datetime"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "body",
            title: "Body",
            type: "blockContent"
        })
    ],
    preview: {
        select: {
            title: "title",
            media: "mainImage"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "contactForm",
    type: "document",
    title: "Contact Form",
    icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiContactsBookLine,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "firstName",
            type: "string",
            title: "First Name"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "lastName",
            type: "string",
            title: "Last Name"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "email",
            type: "string",
            title: "Email Address"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "phone",
            type: "string",
            title: "Phone Number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "message",
            type: "text",
            title: "Message"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "property",
            title: "Related Property",
            type: "reference",
            to: [
                {
                    type: "properties"
                },
                {
                    type: "propertiesRent"
                }
            ]
        })
    ],
    preview: {
        select: {
            title: "email"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6044:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "faq",
    type: "document",
    title: "FAQ",
    icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineQuestionCircle,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "question",
            type: "string",
            title: "Question"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "answer",
            type: "string",
            title: "Answer"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "question",
                maxLength: 100
            }
        })
    ],
    preview: {
        select: {
            title: "question"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "features",
    type: "document",
    title: "Features",
    icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineStar,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "featureName",
            type: "string",
            title: "Feature Name"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "featureName",
                maxLength: 100
            }
        })
    ],
    preview: {
        select: {
            title: "featureName"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ schemaTypes)
/* harmony export */ });
/* harmony import */ var _blockContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3949);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2903);
/* harmony import */ var _propertyImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5410);
/* harmony import */ var _references__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4787);
/* harmony import */ var _subscribers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9082);
/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9978);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5231);
/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(319);
/* harmony import */ var _propertiesRent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8576);
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6174);
/* harmony import */ var _propertyType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1753);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1196);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4844);
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6044);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blockContent__WEBPACK_IMPORTED_MODULE_0__, _properties__WEBPACK_IMPORTED_MODULE_1__, _propertyImage__WEBPACK_IMPORTED_MODULE_2__, _references__WEBPACK_IMPORTED_MODULE_3__, _subscribers__WEBPACK_IMPORTED_MODULE_4__, _contactForm__WEBPACK_IMPORTED_MODULE_5__, _services__WEBPACK_IMPORTED_MODULE_6__, _locations__WEBPACK_IMPORTED_MODULE_7__, _propertiesRent__WEBPACK_IMPORTED_MODULE_8__, _features__WEBPACK_IMPORTED_MODULE_9__, _propertyType__WEBPACK_IMPORTED_MODULE_10__, _blog__WEBPACK_IMPORTED_MODULE_11__, _team__WEBPACK_IMPORTED_MODULE_12__, _faq__WEBPACK_IMPORTED_MODULE_13__]);
([_blockContent__WEBPACK_IMPORTED_MODULE_0__, _properties__WEBPACK_IMPORTED_MODULE_1__, _propertyImage__WEBPACK_IMPORTED_MODULE_2__, _references__WEBPACK_IMPORTED_MODULE_3__, _subscribers__WEBPACK_IMPORTED_MODULE_4__, _contactForm__WEBPACK_IMPORTED_MODULE_5__, _services__WEBPACK_IMPORTED_MODULE_6__, _locations__WEBPACK_IMPORTED_MODULE_7__, _propertiesRent__WEBPACK_IMPORTED_MODULE_8__, _features__WEBPACK_IMPORTED_MODULE_9__, _propertyType__WEBPACK_IMPORTED_MODULE_10__, _blog__WEBPACK_IMPORTED_MODULE_11__, _team__WEBPACK_IMPORTED_MODULE_12__, _faq__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const schemaTypes = [
    // Document types
    _properties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    _propertiesRent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    _propertyType__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    _locations__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    _features__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    _services__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    _team__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
    _blog__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    _faq__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
    _references__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    _contactForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    _subscribers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    // consulting,
    // other,
    // Other types
    _blockContent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    _propertyImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5856);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "locations",
    type: "document",
    title: "Locations",
    icon: react_icons_go__WEBPACK_IMPORTED_MODULE_1__.GoLocation,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "locationName",
            type: "string",
            title: "Location Name"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "locationName",
                maxLength: 100
            }
        })
    ],
    preview: {
        select: {
            title: "locationName"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2903:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "properties",
    title: "Sales Listings",
    type: "document",
    icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsBuilding,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "sellPrice",
            title: "Price",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "price_old",
            title: "market Value (Price Old)",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "mortgage",
            title: "Mortgage",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "propertyId",
            title: "Property ID",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "propertyType",
            title: "Property Type",
            type: "reference",
            to: [
                {
                    type: "propertyType"
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "location",
            title: "Location",
            type: "reference",
            to: [
                {
                    type: "locations"
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "title",
            title: "Title",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "flash_text",
            title: "Flash text",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "featured",
            title: "Featured Listing",
            type: "boolean"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "area_total",
            title: "Area",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "parking",
            title: "Parking",
            type: "string",
            options: {
                list: [
                    {
                        title: "Yes",
                        value: "Yes"
                    },
                    {
                        title: "No",
                        value: "No"
                    }
                ],
                layout: "radio"
            }
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "rooms",
            title: "Number of rooms",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "bathrooms",
            title: "Bathrooms",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "propertySize",
            title: "Property Size",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "lotSize",
            title: "Lot Size",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "beachfront",
            title: "Beachfront",
            type: "string",
            options: {
                list: [
                    {
                        title: "Yes",
                        value: "Yes"
                    },
                    {
                        title: "No",
                        value: "No"
                    }
                ],
                layout: "radio"
            }
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "propertyImage"
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "vrview",
            title: "360 View",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "overview",
            title: "Overview",
            type: "blockContent"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            title: "Map Location",
            name: "maplocation",
            type: "geopoint"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule)=>Rule.required(),
            options: {
                source: "title",
                maxLength: 100
            }
        })
    ],
    preview: {
        select: {
            media: "mainImage",
            title: "title"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8866);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "propertiesRent",
    title: "Rental Listings",
    type: "document",
    icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_1__.GiHouseKeys,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "category",
            title: "Price Category",
            type: "string",
            options: {
                list: [
                    {
                        title: "Price/Month",
                        value: "month"
                    },
                    {
                        title: "Price/Day",
                        value: "day"
                    }
                ],
                layout: "radio"
            },
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "price",
            title: "Price",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "price_old",
            title: "Price Old",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "propertyId",
            title: "Property ID",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "propertyType",
            title: "Property Type",
            type: "reference",
            to: [
                {
                    type: "propertyType"
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "location",
            title: "Location",
            type: "reference",
            to: [
                {
                    type: "locations"
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "title",
            title: "Title",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "flash_text",
            title: "Flash text",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "features",
            title: "Feature",
            type: "reference",
            to: [
                {
                    type: "features"
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "area_total",
            title: "Area",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "parking",
            title: "Parking",
            type: "string",
            options: {
                list: [
                    {
                        title: "Yes",
                        value: "Yes"
                    },
                    {
                        title: "No",
                        value: "No"
                    }
                ],
                layout: "radio"
            }
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "rooms",
            title: "Number of rooms",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "bathrooms",
            title: "Bathrooms",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "propertySize",
            title: "Property Size",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "lotSize",
            title: "Lot Size",
            type: "number"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "beachfront",
            title: "Beachfront",
            type: "string",
            options: {
                list: [
                    {
                        title: "Yes",
                        value: "Yes"
                    },
                    {
                        title: "No",
                        value: "No"
                    }
                ],
                layout: "radio"
            }
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "propertyImage"
                }
            ],
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "vrview",
            title: "360 View",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "overview",
            title: "Overview",
            type: "blockContent"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            title: "Map Location",
            name: "maplocation",
            type: "geopoint"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule)=>Rule.required(),
            options: {
                source: "title",
                maxLength: 100
            }
        })
    ],
    preview: {
        select: {
            media: "mainImage",
            title: "title"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "propertyImage",
    title: "Property Image",
    type: "image",
    options: {
        hotspot: true
    },
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "caption",
            title: "Caption",
            type: "string"
        })
    ]
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "propertyType",
    type: "document",
    title: "Property Types",
    icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineEdit,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "typeName",
            type: "string",
            title: "Type"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "typeName",
                maxLength: 100
            }
        })
    ],
    preview: {
        select: {
            title: "typeName"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "references",
    title: "References",
    type: "document",
    icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsChatLeftQuote,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "referenceText",
            title: "Reference Text",
            type: "text"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "clientName",
            title: "Client Name",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "propertyName",
            title: "Property Name",
            type: "string"
        })
    ],
    preview: {
        select: {
            title: "clientName"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "services",
    type: "document",
    title: "Services",
    icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlinePaperClip,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "servicesTitle",
            type: "string",
            title: "Header"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "servicesText",
            type: "blockContent",
            title: "Text"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "ordering",
            type: "number",
            title: "Ordering",
            validation: (Rule)=>Rule.required()
        })
    ],
    preview: {
        select: {
            media: "image",
            title: "servicesTitle"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "subscribers",
    type: "document",
    title: "Subscribers",
    icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsPersonPlus,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "email",
            type: "string",
            title: "Email Address"
        })
    ],
    preview: {
        select: {
            title: "email"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8315);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sanity__WEBPACK_IMPORTED_MODULE_0__]);
sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineType)({
    name: "team",
    title: "Team",
    type: "document",
    icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineTeam,
    fields: [
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "name",
            title: "Name",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "position",
            title: "Position",
            type: "string"
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "ordering",
            title: "Ordering",
            type: "number",
            validation: (Rule)=>Rule.required()
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            }
        }),
        (0,sanity__WEBPACK_IMPORTED_MODULE_0__.defineField)({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        })
    ],
    preview: {
        select: {
            title: "name",
            media: "image"
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6372:
/***/ ((module) => {

module.exports = require("@sanity/google-maps-input");

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

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("react-icons/gi");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 8884:
/***/ ((module) => {

module.exports = import("@sanity/vision");;

/***/ }),

/***/ 8331:
/***/ ((module) => {

module.exports = import("next-sanity/studio");;

/***/ }),

/***/ 7152:
/***/ ((module) => {

module.exports = import("next-sanity/studio/head");;

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = import("sanity");;

/***/ }),

/***/ 9933:
/***/ ((module) => {

module.exports = import("sanity/desk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675], () => (__webpack_exec__(5590)));
module.exports = __webpack_exports__;

})();