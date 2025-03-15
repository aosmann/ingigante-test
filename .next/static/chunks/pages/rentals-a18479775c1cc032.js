(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4261],{91373:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var l=a(67294);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=(...e)=>e.filter((e,t,a)=>Boolean(e)&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:c="",children:i,iconNode:o,...d},u)=>(0,l.createElement)("svg",{ref:u,...s,width:t,height:t,stroke:e,strokeWidth:n?24*Number(a)/Number(t):a,className:r("lucide",c),...d},[...o.map(([e,t])=>(0,l.createElement)(e,t)),...Array.isArray(i)?i:[i]])),i=(e,t)=>{let a=(0,l.forwardRef)(({className:a,...s},i)=>(0,l.createElement)(c,{ref:i,iconNode:t,className:r(`lucide-${n(e)}`,a),...s}));return a.displayName=`${e}`,a}},72409:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var l=a(91373);let n=(0,l.Z)("Bath",[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]])},82307:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var l=a(91373);let n=(0,l.Z)("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]])},53103:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var l=a(91373);let n=(0,l.Z)("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]])},52056:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rentals",function(){return a(50417)}])},51895:function(e,t,a){"use strict";a.d(t,{A:function(){return r},v:function(){return n}});var l=a(35953);async function n(e){let{category:t=null,minBedrooms:a=null,minBathrooms:n=null,sortByPrice:r=null,sortDescending:s=null,searchQuery:c="",priceMin:i=null,priceMax:o=null,location:d=null}=e,u='*[_type == "properties"',m={};c&&(u+=" && title match $searchTerm",m.searchTerm=c),t&&(u+=" && propertyType->typeName == $categoryID",m.categoryID=t),i&&(u+=" && sellPrice >= $priceMin",m.priceMin=i),o&&(u+=" && sellPrice <= $priceMax",m.priceMax=o),d&&(u+=" && location->locationName == $location",m.location=d),u+="]",r&&(u+="| order(sellPrice ".concat("sellPrice-desc"===s?"desc":"asc",")")),u+=" {\n      ...,\n      location->,\n      propertyType->\n    }";let p=await l.Lp.fetch(u,m);return p}async function r(e){let{category:t=null,minBedrooms:a=null,minBathrooms:n=null,sortByPrice:r=null,sortDescending:s=null,searchQuery:c="",priceMin:i=null,priceMax:o=null,location:d=null,feature:u=null,priceCategory:m=null}=e,p='*[_type == "propertiesRent"',h={};c&&(p+=" && title match $searchTerm",h.searchTerm=c),t&&(p+=" && propertyType->typeName == $categoryID",h.categoryID=t),i&&(p+=" && price >= $priceMin",h.priceMin=i),o&&(p+=" && price <= $priceMax",h.priceMax=o),m&&(p+=" && category == $priceCategory",h.priceCategory=m),d&&(p+=" && location->locationName == $location",h.location=d),u&&(p+=" && features->featureName == $feature",h.feature=u),p+="]",r&&(p+="| order(price ".concat("price-desc"===s?"desc":"asc",")")),p+=" {\n      ...,\n      location->,\n      propertyType->,\n      features->\n    }";let x=await l.Lp.fetch(p,h);return console.log(p),console.log(x),x}},35953:function(e,t,a){"use strict";a.d(t,{Lp:function(){return o},rp:function(){return d}});var l=a(21777),n=a(34155);let r=n.env.NEXT_PUBLIC_SANITY_PROJECT_ID,s=n.env.NEXT_PUBLIC_SANITY_DATASET,c=n.env.NEXT_PUBLIC_SANITY_API_VERSION,i=n.env.NEXT_PUBLIC_SANITY_TOKEN,o=(0,l.e)({projectId:r,dataset:s,apiVersion:c,useCdn:!1}),d=(0,l.e)({projectId:r,dataset:s,apiVersion:c,token:i,useCdn:!1})},56253:function(e,t,a){"use strict";var l=a(35953),n=a(6803),r=a.n(n);let s=r()(l.Lp);t.Z=function(e){return s.image(e)}},50417:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return j},default:function(){return b}});var l=a(85893),n=a(9008),r=a.n(n),s=a(41664),c=a.n(s),i=a(91373);let o=(0,i.Z)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);var d=a(82307),u=a(72409),m=a(53103),p=a(67294),h=a(86893),x=a(56253),f=a(25675),g=a.n(f),y=a(17598),v=a(51895),w=a(11163);let N=e=>{let{rentals:t,features:a,types:n,locations:s}=e,i=(0,p.useRef)(null),f=(0,w.useRouter)(),[N,j]=(0,p.useState)(null),[b,_]=(0,p.useState)(null),[k,S]=(0,p.useState)(""),[T,M]=(0,p.useState)(null),[P,C]=(0,p.useState)(null),[I,L]=(0,p.useState)(null),[A,Z]=(0,p.useState)(t),[E,$]=(0,p.useState)(null),[R,D]=(0,p.useState)(f.query?f.query.loc:null),[B,F]=(0,p.useState)(null),[V,Y]=(0,p.useState)(a);(0,p.useEffect)(()=>{!async function(){let e=await (0,v.A)({category:E,sortByPrice:P,sortDescending:I,searchQuery:k,priceMin:N,priceMax:b,location:R,feature:T,priceCategory:B});Z("price"===P?e.sort((e,t)=>{let a=e.price||0,l=t.price||0;return I?l-a:a-l}):e.sort((e,t)=>{let a=new Date(e._updatedAt||e._createdAt),l=new Date(t._updatedAt||t._createdAt);return l-a}))}()},[E,P,I,k,N,b,R,T,B]);let O=V.map(e=>({value:e.featureName,label:e.featureName})),W=n.map(e=>({value:e.typeName,label:e.typeName})),X=s.map(e=>({value:e.locationName,label:e.locationName,instanceId:(0,p.useId)()}));return(0,l.jsxs)("div",{className:"min-h-screen flex flex-col items-center",children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:"Rentals | Ingigante"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,l.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=AW-11184375903"}),(0,l.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'AW-11184375903');\n              "}}),(0,l.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-TWF5MYQK4E"}),(0,l.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-TWF5MYQK4E');\n            "}})]}),(0,l.jsx)("div",{className:"bg-[#F4F4F4] w-full flex justify-center px-4 py-14",children:(0,l.jsxs)("div",{className:"max-w-7xl w-full px-4",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center text-secondary",children:[(0,l.jsx)("h1",{className:"text-[35px] font-bold",children:"Search for Rentals"}),(0,l.jsx)("p",{children:"Vacation and long-term rentals"})]}),(0,l.jsxs)("div",{className:"space-y-4 mt-4 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-5",children:[(0,l.jsx)("input",{type:"text",className:"bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5",placeholder:"Enter a keyword",ref:i}),(0,l.jsxs)("button",{onClick:function(e){S(i.current.value)},className:"bg-btn text-white flex items-center justify-center py-2.5 rounded-md md:px-6 w-full md:w-1/6",children:[(0,l.jsx)("span",{children:(0,l.jsx)(h.jRj,{className:"mr-4"})}),"Search"]})]}),(0,l.jsx)("p",{className:"text-center mt-4 mb-4 opacity-50",children:"Filter Settings"}),(0,l.jsxs)("div",{className:"md:flex md:flex-row md:space-x-4",children:[(0,l.jsx)("div",{className:"relative mb-6 md:mb-0 md:w-1/4",children:(0,l.jsx)(y.ZP,{defaultValue:E,onChange:function(e){$(e.value)},options:W,placeholder:"Type",isSearchable:!1})}),(0,l.jsx)("div",{className:"relative mb-6 md:mb-0 md:w-1/4",children:(0,l.jsx)(y.ZP,{defaultValue:T,onChange:function(e){M(e.value)},options:O,placeholder:"Feature",isSearchable:!1})}),(0,l.jsx)("div",{className:"relative mb-6 md:mb-0 md:w-1/4",children:(0,l.jsx)(y.ZP,{defaultValue:R,onChange:function(e){D(e.value)},options:X,placeholder:"Location",isSearchable:!1})}),(0,l.jsx)("div",{className:"relative mb-6 md:mb-0 md:w-1/4",children:(0,l.jsx)(y.ZP,{defaultValue:B,onChange:function(e){F(e.value)},options:[{value:"month",label:"Price / month"},{value:"day",label:"Price / day"}],placeholder:"Price Category",isSearchable:!1})}),(0,l.jsxs)("div",{className:"relative mb-6 md:mb-0 md:w-1/4",children:[(0,l.jsx)("p",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none opacity-40",children:"$"}),(0,l.jsx)("input",{type:"number",placeholder:"Price max.",className:"w-full pl-6 rounded-md border border-gray-300 ",onChange:function(e){_(parseInt(e.target.value)||null)}})]}),(0,l.jsx)("div",{className:"relative mb-6 md:mb-0 md:w-1/4",children:(0,l.jsx)(y.ZP,{onChange:function(e){let t=e.value;"price"===t?(C("price"),L(!1)):"price-desc"===t&&(C("price"),L(!0))},options:[{value:"price",label:"Price (low to high)"},{value:"price-desc",label:"Price (high to low)"}],placeholder:"Sort",isSearchable:!1})})]})]})}),(0,l.jsx)("div",{className:"max-w-7xl w-full mt-14",children:(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 px-4",children:A.length>0?A.map(e=>(0,l.jsx)(c(),{href:"/rental/".concat(e.slug.current),className:"block",children:(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl duration-300 h-full flex flex-col justify-between",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(g(),{src:"".concat((0,x.Z)(e.mainImage).url(),"?w=390&h=290&fit=crop&crop=center"),alt:e.title,className:"object-cover w-full h-[250px]",width:390,height:290,priority:!0}),(0,l.jsx)("button",{className:"absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition",children:(0,l.jsx)(o,{className:"h-5 w-5 text-gray-600"})}),(0,l.jsx)("div",{className:"absolute bottom-3 left-3 bg-[#008975] text-white text-xs px-3 py-1 rounded-md",children:e.propertyType.typeName}),"Yes"===e.beachfront&&(0,l.jsx)("div",{className:"absolute bottom-3 right-3 bg-[#0171d0] text-white text-xs px-3 py-1 rounded-md",children:"Beachfront"})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between h-full p-4 space-y-2",children:[(0,l.jsx)("h2",{className:"text-lg font-bold text-gray-900 line-clamp-2 leading-snug min-h-[3rem]",children:e.title}),(0,l.jsxs)("p",{className:"text-sm text-gray-600 line-clamp-1 min-h-[1.25rem]",children:[e.location.locationName,", Nicaragua"]}),(0,l.jsxs)("p",{className:"text-lg font-bold text-[#008975]",children:["$",e.price.toLocaleString()," / ","month"===e.category?"month":"day"]}),(0,l.jsxs)("div",{className:"flex flex-wrap items-center text-sm text-gray-700 mt-2 gap-x-4 gap-y-2",children:[e.rooms&&(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(d.Z,{className:"h-4 w-4"}),(0,l.jsxs)("span",{children:[e.rooms," beds"]})]}),e.bathrooms&&(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(u.Z,{className:"h-4 w-4"}),(0,l.jsxs)("span",{children:[e.bathrooms," baths"]})]}),e.area_total&&(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(m.Z,{className:"h-4 w-4"}),(0,l.jsxs)("span",{children:[e.area_total," sqft"]})]})]})]})]})})):(0,l.jsx)("h1",{children:"No Result!"})})})]})};var j=!0,b=N},11163:function(e,t,a){e.exports=a(80880)}},function(e){e.O(0,[1777,1182,6251,6863,9774,2888,179],function(){return e(e.s=52056)}),_N_E=e.O()}]);