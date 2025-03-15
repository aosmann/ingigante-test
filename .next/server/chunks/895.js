"use strict";
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 1895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getPropertiesRent),
/* harmony export */   "v": () => (/* binding */ getProperties)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);
_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// lib/api.js

async function getProperties({ category =null , minBedrooms =null , minBathrooms =null , sortByPrice =null , sortDescending =null , searchQuery ="" , priceMin =null , priceMax =null , location =null  }) {
    let query = `*[_type == "properties"`;
    let params = {};
    if (searchQuery) {
        query += ` && title match $searchTerm`;
        params.searchTerm = searchQuery;
    }
    if (category) {
        query += ` && propertyType->typeName == $categoryID`;
        params.categoryID = category;
    }
    if (priceMin) {
        query += ` && sellPrice >= $priceMin`;
        params.priceMin = priceMin;
    }
    if (priceMax) {
        query += ` && sellPrice <= $priceMax`;
        params.priceMax = priceMax;
    }
    if (location) {
        query += ` && location->locationName == $location`;
        params.location = location;
    }
    // if (minBedrooms !== null) {
    //   query += ` && bedrooms >= $minBedrooms`;
    //   params.minBedrooms = minBedrooms;
    // }
    // if (minBathrooms !== null) {
    //   query += ` && bathrooms >= $minBathrooms`;
    //   params.minBathrooms = minBathrooms;
    // }
    query += `]`;
    if (sortByPrice) {
        query += `| order(sellPrice ${sortDescending === "sellPrice-desc" ? "desc" : "asc"})`;
    }
    query += ` {
      ...,
      location->,
      propertyType->
    }`;
    const response = await _sanity_client__WEBPACK_IMPORTED_MODULE_0__/* .client.fetch */ .Lp.fetch(query, params);
    return response;
}
async function getPropertiesRent({ category =null , minBedrooms =null , minBathrooms =null , sortByPrice =null , sortDescending =null , searchQuery ="" , priceMin =null , priceMax =null , location =null , feature =null , priceCategory =null  }) {
    let query = `*[_type == "propertiesRent"`;
    let params = {};
    if (searchQuery) {
        query += ` && title match $searchTerm`;
        params.searchTerm = searchQuery;
    }
    if (category) {
        query += ` && propertyType->typeName == $categoryID`;
        params.categoryID = category;
    }
    if (priceMin) {
        query += ` && price >= $priceMin`;
        params.priceMin = priceMin;
    }
    if (priceMax) {
        query += ` && price <= $priceMax`;
        params.priceMax = priceMax;
    }
    if (priceCategory) {
        query += ` && category == $priceCategory`;
        params.priceCategory = priceCategory;
    }
    if (location) {
        query += ` && location->locationName == $location`;
        params.location = location;
    }
    if (feature) {
        query += ` && features->featureName == $feature`;
        params.feature = feature;
    }
    query += `]`;
    if (sortByPrice) {
        query += `| order(price ${sortDescending === "price-desc" ? "desc" : "asc"})`;
    }
    query += ` {
      ...,
      location->,
      propertyType->,
      features->
    }`;
    const response = await _sanity_client__WEBPACK_IMPORTED_MODULE_0__/* .client.fetch */ .Lp.fetch(query, params);
    console.log(query);
    console.log(response);
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;