(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9351],{77119:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/open",function(){return l(27373)}])},51895:function(e,n,l){"use strict";l.d(n,{A:function(){return i},v:function(){return r}});var t=l(35953);async function r(e){let{category:n=null,minBedrooms:l=null,minBathrooms:r=null,sortByPrice:i=null,sortDescending:c=null,searchQuery:o="",priceMin:a=null,priceMax:s=null,location:u=null}=e,p='*[_type == "properties"',d={};o&&(p+=" && title match $searchTerm",d.searchTerm=o),n&&(p+=" && propertyType->typeName == $categoryID",d.categoryID=n),a&&(p+=" && sellPrice >= $priceMin",d.priceMin=a),s&&(p+=" && sellPrice <= $priceMax",d.priceMax=s),u&&(p+=" && location->locationName == $location",d.location=u),p+="]",i&&(p+="| order(sellPrice ".concat("sellPrice-desc"===c?"desc":"asc",")")),p+=" {\n      ...,\n      location->,\n      propertyType->\n    }";let h=await t.Lp.fetch(p,d);return h}async function i(e){let{category:n=null,minBedrooms:l=null,minBathrooms:r=null,sortByPrice:i=null,sortDescending:c=null,searchQuery:o="",priceMin:a=null,priceMax:s=null,location:u=null,feature:p=null,priceCategory:d=null}=e,h='*[_type == "propertiesRent"',f={};o&&(h+=" && title match $searchTerm",f.searchTerm=o),n&&(h+=" && propertyType->typeName == $categoryID",f.categoryID=n),a&&(h+=" && price >= $priceMin",f.priceMin=a),s&&(h+=" && price <= $priceMax",f.priceMax=s),d&&(h+=" && category == $priceCategory",f.priceCategory=d),u&&(h+=" && location->locationName == $location",f.location=u),p&&(h+=" && features->featureName == $feature",f.feature=p),h+="]",i&&(h+="| order(price ".concat("price-desc"===c?"desc":"asc",")")),h+=" {\n      ...,\n      location->,\n      propertyType->,\n      features->\n    }";let v=await t.Lp.fetch(h,f);return console.log(h),console.log(v),v}},35953:function(e,n,l){"use strict";l.d(n,{Lp:function(){return s},rp:function(){return u}});var t=l(21777),r=l(34155);let i=r.env.NEXT_PUBLIC_SANITY_PROJECT_ID,c=r.env.NEXT_PUBLIC_SANITY_DATASET,o=r.env.NEXT_PUBLIC_SANITY_API_VERSION,a=r.env.NEXT_PUBLIC_SANITY_TOKEN,s=(0,t.e)({projectId:i,dataset:c,apiVersion:o,useCdn:!1}),u=(0,t.e)({projectId:i,dataset:c,apiVersion:o,token:a,useCdn:!1})},27373:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return c}});var t=l(85893),r=l(67294),i=l(51895);function c(){let[e,n]=(0,r.useState)([]),[l,c]=(0,r.useState)(null),[o,a]=(0,r.useState)(null),[s,u]=(0,r.useState)(null),[p,d]=(0,r.useState)(!1),[h,f]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{(async function(){let e=await (0,i.v)({category:l,minBedrooms:o,minBathrooms:s,sortByPrice:p,sortDescending:h});n(e)})()},[l,o,s,p,h]),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Properties"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{children:["Category:",(0,t.jsxs)("select",{value:l||"",onChange:function(e){c(e.target.value)},children:[(0,t.jsx)("option",{value:"",children:"All"}),(0,t.jsx)("option",{value:"House",children:"House"}),(0,t.jsx)("option",{value:"Apartment",children:"Apartment"}),(0,t.jsx)("option",{value:"category3-id",children:"Category 3"})]})]}),(0,t.jsxs)("label",{children:["Minimum Bedrooms:",(0,t.jsx)("input",{type:"number",value:o||"",onChange:function(e){a(parseInt(e.target.value)||null)}})]}),(0,t.jsxs)("label",{children:["Minimum Bathrooms:",(0,t.jsx)("input",{type:"number",value:s||"",onChange:function(e){u(parseInt(e.target.value)||null)}})]}),(0,t.jsxs)("label",{children:["Sort by:",(0,t.jsxs)("select",{value:p?h?"sellPrice-desc":"Price":"none",onChange:function(e){let n=e.target.value;d("sellPrice"===n),f("sellPrice-desc"===n)},children:[(0,t.jsx)("option",{value:"none",children:"None"}),(0,t.jsx)("option",{value:"sellPrice",children:"Price (low to high)"}),(0,t.jsx)("option",{value:"sellPrice-desc",children:"Price (high to low)"})]})]})]}),(0,t.jsx)("ul",{children:e.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("div",{children:e.sellPrice}),(0,t.jsxs)("div",{children:[e.bedrooms," Bedrooms"]}),(0,t.jsxs)("div",{children:[e.bathrooms," Bathrooms"]})]},e._id))})]})}}},function(e){e.O(0,[1777,9774,2888,179],function(){return e(e.s=77119)}),_N_E=e.O()}]);