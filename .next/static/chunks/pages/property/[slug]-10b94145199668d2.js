(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8941,3852,9045],{17410:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/property/[slug]",function(){return s(42001)}])},29045:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(67294),l=s(25675),o=s.n(l),i=s(56253),n=s(8193);let c=e=>{let{images:t}=e,[s,l]=(0,r.useState)(!1),[c,d]=(0,r.useState)(0),m=e=>{d(e),l(!0)},p=()=>l(!1),u=()=>{d(e=>e===t.length-1?0:e+1)},x=()=>{d(e=>0===e?t.length-1:e-1)};return(0,r.useEffect)(()=>{let e=e=>{s&&("Escape"===e.key?p():"ArrowRight"===e.key?u():"ArrowLeft"===e.key&&x())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]),(0,r.useEffect)(()=>(document.body.style.overflow=s?"hidden":"unset",()=>{document.body.style.overflow="unset"}),[s]),(0,a.jsxs)("div",{className:"grid grid-cols-4 grid-rows-2 gap-4 max-sm:grid-cols-2 max-sm:grid-rows-auto",children:[t[0]&&(0,a.jsx)("div",{className:"col-span-2 row-span-2 max-sm:col-span-2 max-sm:row-span-1 relative w-full h-96 sm:h-full rounded-lg overflow-hidden cursor-pointer",onClick:()=>m(0),children:(0,a.jsx)(o(),{src:(0,i.Z)(t[0].asset).url(),alt:"Main Image",fill:!0,className:"object-cover"})}),t[1]&&(0,a.jsx)("div",{className:"col-start-3 row-start-1 max-sm:col-span-1 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer",onClick:()=>m(1),children:(0,a.jsx)(o(),{src:(0,i.Z)(t[1].asset).url(),alt:"Image 2",fill:!0,className:"object-cover"})}),t[2]&&(0,a.jsx)("div",{className:"col-start-4 row-start-1 max-sm:col-span-1 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer",onClick:()=>m(2),children:(0,a.jsx)(o(),{src:(0,i.Z)(t[2].asset).url(),alt:"Image 3",fill:!0,className:"object-cover"})}),t[3]&&(0,a.jsx)("div",{className:"col-start-3 row-start-2 max-sm:col-span-1 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer",onClick:()=>m(3),children:(0,a.jsx)(o(),{src:(0,i.Z)(t[3].asset).url(),alt:"Image 4",fill:!0,className:"object-cover"})}),t[4]&&(0,a.jsxs)("div",{className:"col-start-4 row-start-2 max-sm:col-span-1 relative h-44 w-full rounded-lg overflow-hidden cursor-pointer",onClick:()=>m(4),children:[(0,a.jsx)(o(),{src:(0,i.Z)(t[4].asset).url(),alt:"Image 5",fill:!0,className:"object-cover"}),t.length>5&&(0,a.jsxs)("div",{className:"absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-lg font-semibold",onClick:()=>m(4),children:["+",t.length-5," more"]})]}),s&&(0,a.jsxs)("div",{className:"fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-2",onClick:p,children:[(0,a.jsx)("div",{className:"absolute inset-0",onClick:p}),(0,a.jsx)("button",{className:"absolute top-4 right-4 text-white text-2xl z-50",onClick:p,children:"\xd7"}),(0,a.jsx)("button",{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50",onClick:e=>{e.stopPropagation(),x()},children:(0,a.jsx)(n._u0,{size:40})}),(0,a.jsx)("div",{className:"relative w-full max-w-5xl h-[80vh] z-40",onClick:e=>e.stopPropagation(),children:(0,a.jsx)(o(),{src:(0,i.Z)(t[c].asset).url(),alt:"Image ".concat(c+1),fill:!0,className:"object-contain"})}),(0,a.jsx)("button",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50",onClick:e=>{e.stopPropagation(),u()},children:(0,a.jsx)(n.bBv,{size:40})})]})]})};t.default=c},63852:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(67294),l=s(37054);let o=e=>{let{location:t}=e,{isLoaded:s}=(0,l.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyCNhsU6R9HsP40Xu9QTwvWKCeWAZdpSRfM"}),o={lat:(null==t?void 0:t.lat)||0,lng:(null==t?void 0:t.lng)||0},[i,n]=r.useState(null),c=r.useCallback(e=>{e.setCenter(o),e.setZoom(15),n(e)},[o]),d=r.useCallback(()=>{n(null)},[]);return t&&t.lat&&t.lng?s?(0,a.jsx)(l.b6,{mapContainerStyle:{width:"100%",height:"400px"},center:o,zoom:15,onLoad:c,onUnmount:d,children:(0,a.jsx)(l.Jx,{position:o,icon:{url:"https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png",anchor:new google.maps.Point(16,32)}})}):(0,a.jsx)("p",{className:"text-gray-500",children:"Loading map..."}):(0,a.jsx)("p",{className:"text-gray-500",children:"Location data unavailable"})};t.default=r.memo(o)},58008:function(e,t,s){"use strict";var a=s(85893),r=s(56253),l=s(25675),o=s.n(l),i=s(41664),n=s.n(i);s(67294),t.Z={types:{image:e=>{let{value:t}=e;return(0,a.jsx)("div",{className:"relative w-full h-96 m-10 mx-auto ",children:(0,a.jsx)(o(),{className:"object-contain",src:(0,r.Z)(t).url(),alt:"Blog Post Image",fill:!0})})}},list:{bullet:e=>{let{children:t}=e;return(0,a.jsx)("ul",{className:"ml-10 py-5 list-disc space-y-5",children:t})},number:e=>{let{children:t}=e;return(0,a.jsx)("ol",{className:"mt-lg py-5 list-decimal",children:t})}},block:{h1:e=>{let{children:t}=e;return(0,a.jsx)("h1",{className:"text-5xl py-10 font-bold",children:t})},h2:e=>{let{children:t}=e;return(0,a.jsx)("h2",{className:"text-4xl py-10 font-bold",children:t})},h3:e=>{let{children:t}=e;return(0,a.jsx)("h3",{className:"text-3xl py-10 font-bold",children:t})},h4:e=>{let{children:t}=e;return(0,a.jsx)("h4",{className:"text-2xl py-10 font-bold",children:t})},blockquote:e=>{let{children:t}=e;return(0,a.jsx)("blockquote",{className:"border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5",children:t})}},marks:{link:e=>{let{children:t,value:s}=e,r=s.href.startWith("/")?void 0:"norefferer noopener";return(0,a.jsx)(n(),{href:s.href,rel:r,className:"underline decoration-[#F7AB0A] hover:decoration-black",children:t})}}}},35953:function(e,t,s){"use strict";s.d(t,{Lp:function(){return c},rp:function(){return d}});var a=s(21777),r=s(34155);let l=r.env.NEXT_PUBLIC_SANITY_PROJECT_ID,o=r.env.NEXT_PUBLIC_SANITY_DATASET,i=r.env.NEXT_PUBLIC_SANITY_API_VERSION,n=r.env.NEXT_PUBLIC_SANITY_TOKEN,c=(0,a.e)({projectId:l,dataset:o,apiVersion:i,useCdn:!1}),d=(0,a.e)({projectId:l,dataset:o,apiVersion:i,token:n,useCdn:!1})},56253:function(e,t,s){"use strict";var a=s(35953),r=s(6803),l=s.n(r);let o=l()(a.Lp);t.Z=function(e){return o.image(e)}},42001:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return v}});var a=s(85893),r=s(67294),l=s(25675),o=s.n(l),i=s(5434),n=s(41664),c=s.n(n),d=s(35953),m=s(58008),p=s(54217),u=s(9008),x=s.n(u),f=s(56253);s(67731);var h=s(86501),g=s(63852),b=s(8193),y=s(29045),v=!0;t.default=function(e){var t,s;let{property:l,images:n}=e,u=(0,r.useRef)(),v=async e=>{e.preventDefault();let t={_type:"contactForm",firstName:e.target[0].value,lastName:e.target[1].value,email:e.target[3].value,phone:e.target[2].value,message:e.target[4].value,property:{_type:"reference",_ref:l._id}};d.rp.create(t).then(e=>{h.ZP.success("Thank you for your message. We will get back shortly!",{duration:3e3}),u.current.reset()}).catch(e=>{h.ZP.error("Something went wrong! Please try again")})},[j,N]=(0,r.useState)(0),[w,k]=(0,r.useState)(""),[_,E]=(0,r.useState)(!1),C=()=>{k("slide-left"),N(e=>e===n.length-1?0:e+1)},S=()=>{k("slide-right"),N(e=>0===e?n.length-1:e-1)},I=e=>{k(e>j?"slide-left":"slide-right"),N(e)};(0,r.useEffect)(()=>{let e=setTimeout(()=>{k("")},500);return()=>clearTimeout(e)},[j]);let P=()=>{E(!_)};return(0,r.useEffect)(()=>{let e=e=>{_&&("Escape"===e.key?E(!1):"ArrowRight"===e.key?C():"ArrowLeft"===e.key&&S())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[_]),(0,r.useEffect)(()=>(_?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[_]),(0,a.jsxs)("div",{className:"min-h-screen mt-10",children:[(0,a.jsx)(x(),{children:(0,a.jsxs)("title",{children:[l.propertyType.typeName," "," for Sale in "," ",l.location.locationName,", Nicaragua"]})}),(0,a.jsx)("div",{className:"space-y-10 flex flex-col px-4 justify-center items-center",children:(0,a.jsxs)("div",{className:"flex flex-col items-top justify-center xl:flex-row xl:space-x-4 max-w-[1200px]",children:[(0,a.jsxs)("div",{className:"w-full lg:w-[800px]",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)(c(),{href:"/sales",className:"flex items-center text-[#484848] bg-[#f1f1f1] w-fit pl-[0.4rem] pr-[1rem] rounded",children:[(0,a.jsx)(i.U1p,{size:20}),(0,a.jsx)("p",{className:"text-lg ml-[0.1rem]",children:"Back"})]}),(0,a.jsxs)("h1",{className:"text-[25px] leading-none sm:text-[35px] md:text-[35px] lg:text-[35px] text-normal mb-6 pb-6 text-normal",children:[l.propertyType.typeName," "," for Sale in "," ",l.location.locationName,", Nicaragua"]})]}),(0,a.jsx)(y.default,{images:n}),(0,a.jsxs)("div",{className:"text-left pt-4",children:[(0,a.jsx)("div",{className:"flex items-center space-x-4",children:(0,a.jsxs)("h2",{className:"text-4xl py-3 font-normal",children:["$",l.sellPrice.toLocaleString()]})}),(0,a.jsxs)("div",{className:"flex items-center space-x-4 pb-2",children:[(0,a.jsx)("p",{className:"font-normal bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2",children:l.flash_text}),l.price_old&&(0,a.jsxs)("p",{className:" font-normal bg-[#dcefea] text-[#236253] w-fit rounded px-2",children:["Market value ","$",l.price_old.toLocaleString()]})]}),(0,a.jsx)("div",{className:"flex items-center text-xl font-normal text-gray-700",children:(0,a.jsxs)("p",{children:[l.title,", ",l.location.locationName,", Nicaragua"]})}),(0,a.jsx)("div",{className:"flex items-center text-gray-500 font-normal",children:[l.rooms&&"".concat(l.rooms," rooms"),l.bathrooms&&"".concat(l.bathrooms," bathrooms"),l.area_total&&"".concat(l.area_total.toLocaleString()," m\xb2")].filter(Boolean).join(", ")})]}),(0,a.jsxs)("div",{className:"space-y-4 pt-6 pr-[1rem]",children:[(0,a.jsx)("p",{className:"text-xl font-bold border-b pb-2 text-gray-700",children:"Details"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(null===(t=l.location)||void 0===t?void 0:t.locationName)&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"City:"}),(0,a.jsx)("p",{className:"text-gray-500",children:l.location.locationName})]}),(null===(s=l.propertyType)||void 0===s?void 0:s.typeName)&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"Type:"}),(0,a.jsx)("p",{className:"text-gray-500",children:l.propertyType.typeName})]}),"Yes"===l.beachfront&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"Beachfront:"}),(0,a.jsx)("p",{className:"text-gray-500",children:"Yes"})]}),l.lotSize&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"Land Area:"}),(0,a.jsx)("p",{className:"text-gray-500",children:"".concat(l.lotSize.toLocaleString()," m\xb2")})]}),l.area_total&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"Property Area:"}),(0,a.jsx)("p",{className:"text-gray-500",children:"".concat(l.area_total.toLocaleString()," m\xb2")})]}),l.rooms&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"Rooms:"}),(0,a.jsx)("p",{className:"text-gray-500",children:l.rooms})]}),l.bathrooms&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"Bathrooms:"}),(0,a.jsx)("p",{className:"text-gray-500",children:l.bathrooms})]}),"Yes"===l.parking&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"Parking:"}),(0,a.jsx)("p",{className:"text-gray-500",children:"Yes"})]}),l.propertyId&&(0,a.jsxs)("div",{className:"flex justify-between border-b py-2",children:[(0,a.jsx)("p",{className:"font-medium text-gray-700",children:"ID:"}),(0,a.jsx)("p",{className:"text-gray-500",children:l.propertyId})]})]})]}),(0,a.jsxs)("div",{className:"space-y-4 pt-10 pb-4",children:[(0,a.jsx)("p",{className:"text-xl font-bold border-b pb-2 text-gray-700",children:"Description"}),(0,a.jsxs)("div",{className:"space-y-2 text-gray-700",children:[(0,a.jsx)(p.YI,{value:l.overview,components:m.Z}),l.vrview?(0,a.jsx)("iframe",{height:"400px",width:"100%",allowFullScreen:"true",src:l.vrview}):"",(0,a.jsxs)(c(),{href:"/contact",className:"underline block sm:hidden",children:["Contact Us ",">"]})]})]}),(0,a.jsx)("div",{className:"flex justify-center py-10",children:l.maplocation?(0,a.jsx)(g.default,{location:l.maplocation}):""})]}),(0,a.jsxs)("div",{className:"mt-6 lg:mt-[6.4rem] space-y-6 w-full mb-20",children:[(0,a.jsxs)("div",{className:"bg-[#F4F4F4] rounded p-6 text-[#143D30] ",children:[(0,a.jsx)("p",{className:"text-lg text-bold text-gray-700",children:"Contact Us"}),(0,a.jsx)(h.x7,{}),(0,a.jsxs)("form",{className:"space-y-4 mt-4",id:"property",ref:u,onSubmit:v,children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),(0,a.jsx)("input",{type:"text",name:"firstName",id:"firstName",placeholder:"First Name",required:!0})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),(0,a.jsx)("input",{type:"text",name:"lastName",id:"lastName",placeholder:"Last Name",required:!0})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,a.jsx)("input",{type:"tel",name:"phone",id:"phone",placeholder:"+1(500) 000 000"})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"email",children:"Email"}),(0,a.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"your@company.com",required:!0})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"comment",children:"Message"}),(0,a.jsx)("textarea",{id:"comment",name:"comment",rows:10,placeholder:"Leave us a message..."})]}),(0,a.jsx)("button",{className:"text-btn w-full py-3.5 border-[3px] rounded-md border-btn",children:"Send Message"})]})]}),(0,a.jsx)("div",{className:"max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",children:(0,a.jsxs)(c(),{href:"https://ingigante.com/rental/hotel-ingigante-rent",target:"_blank",children:[(0,a.jsx)("div",{className:"h-40 relative",children:(0,a.jsx)(o(),{src:"/assets/images/hotel-cover.webp",alt:"Hotel Ingigante",className:"h-full w-full object-cover",layout:"fill",objectFit:"cover"})}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("div",{className:"bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2",children:"Promoted"}),(0,a.jsx)("h3",{className:"text-lg font-bold text-gray-800 pt-2",children:"Hotel Ingigante"}),(0,a.jsx)("div",{className:"flex items-center text-gray-500 font-normal mb-4",children:"14 rooms, 14 bathrooms, 1,867.72 m\xb2"}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("a",{href:"https://ingigante.com/rental/hotel-ingigante-rent",target:"_blank",rel:"noopener noreferrer",className:"flex-1 text-center border border-[#236253] text-green-800 py-2 rounded-md text-sm hover:bg-[#d4e8e3]",children:"Check hotel"}),(0,a.jsx)("a",{href:"https://us2.cloudbeds.com/reservation/MBptIV",target:"_blank",rel:"noopener noreferrer",className:"flex-1 text-center bg-[#236253] text-white py-2 rounded-md text-sm hover:bg-[#134a3d]",children:"Book now"})]})]})]})}),(0,a.jsx)("div",{className:"max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",children:(0,a.jsxs)(c(),{href:"https://ingigante.com/property/surf-ranch-popoyo-home",target:"_blank",children:[(0,a.jsx)("div",{className:"h-40 relative",children:(0,a.jsx)(o(),{src:"/assets/images/promoted-2.webp",alt:"Surf Ranch Popoyo Home",className:"h-full w-full object-cover",layout:"fill",objectFit:"cover"})}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("div",{className:"bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2",children:"Hot SALE"}),(0,a.jsx)("h3",{className:"text-lg font-bold text-gray-800 pt-2",children:"Surf Ranch Popoyo Home"}),(0,a.jsx)("div",{className:"flex items-center text-gray-500 font-normal mb-4",children:"5 rooms, 4 bathrooms, 275 m\xb2"}),(0,a.jsx)("div",{className:"flex gap-2",children:(0,a.jsx)("a",{href:"https://ingigante.com/property/surf-ranch-popoyo-home",target:"_blank",rel:"noopener noreferrer",className:"flex-1 text-center bg-[#236253] text-white py-2 rounded-md text-sm hover:bg-[#134a3d]",children:"Buy Home"})})]})]})})]})]})}),_&&(0,a.jsxs)("div",{className:"fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center",children:[(0,a.jsx)("button",{onClick:P,className:"absolute top-4 right-4 text-white z-50 hover:opacity-75 transition-opacity",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,a.jsx)("button",{onClick:S,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white z-50 hover:scale-110 transition-transform",children:(0,a.jsx)(b._u0,{size:40})}),(0,a.jsx)("button",{onClick:C,className:"absolute right-4 top-1/2 -translate-y-1/2 text-white z-50 hover:scale-110 transition-transform",children:(0,a.jsx)(b.bBv,{size:40})}),(0,a.jsx)("div",{className:"relative w-full h-full flex items-center justify-center p-4",children:(0,a.jsx)("div",{className:"relative w-full h-full",children:(0,a.jsx)(o(),{src:(0,f.Z)(n[j].asset).url(),alt:"",fill:!0,className:"object-contain transition-transform duration-500 ".concat(w)})})}),(0,a.jsx)("div",{className:"absolute bottom-4 left-0 right-0",children:(0,a.jsx)("div",{className:"flex justify-center gap-2 px-4 overflow-x-auto pb-2",children:n.map((e,t)=>(0,a.jsx)("button",{onClick:()=>I(t),className:"relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transform transition-all duration-200 hover:scale-105 ".concat(j===t?"ring-2 ring-offset-2 ring-blue-500 scale-105":"hover:ring-1 hover:ring-blue-300"),children:(0,a.jsx)(o(),{src:(0,f.Z)(e.asset).url(),alt:"",fill:!0,className:"object-cover"})},e._ref))})})]})]})}},67731:function(){},86501:function(e,t,s){"use strict";let a,r;s.d(t,{x7:function(){return er},ZP:function(){return el}});var l,o=s(67294);let i={data:""},n=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,p=(e,t)=>{let s="",a="",r="";for(let l in e){let o=e[l];"@"==l[0]?"i"==l[1]?s=l+" "+o+";":a+="f"==l[1]?p(o,l):l+"{"+p(o,"k"==l[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>l.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):l):null!=o&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(l,o):l+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},u={},x=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+x(e[s]);return t}return e},f=(e,t,s,a,r)=>{var l,o;let i=x(e),n=u[i]||(u[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!u[n]){let t=i!==e?e:(e=>{let t,s,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(m," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(m," ").trim();return a[0]})(e);u[n]=p(r?{["@keyframes "+n]:t}:t,s?"":"."+n)}let f=s&&u.g?u.g:null;return s&&(u.g=u[n]),l=u[n],o=t,f?o.data=o.data.replace(f,l):-1===o.data.indexOf(l)&&(o.data=a?l+o.data:o.data+l),n},h=(e,t,s)=>e.reduce((e,a,r)=>{let l=t[r];if(l&&l.call){let e=l(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;l=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==l?"":l)},"");function g(e){let t=this||{},s=e.call?e(t.p):e;return f(s.unshift?s.raw?h(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,n(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,y,v,j=g.bind({k:1});function N(e,t){let s=this||{};return function(){let a=arguments;function r(l,o){let i=Object.assign({},l),n=i.className||r.className;s.p=Object.assign({theme:y&&y()},i),s.o=/ *go\d+/.test(n),i.className=g.apply(s,a)+(n?" "+n:""),t&&(i.ref=o);let c=e;return e[0]&&(c=i.as||e,delete i.as),v&&c[0]&&v(i),b(c,i)}return t?t(r):r}}var w=e=>"function"==typeof e,k=(e,t)=>w(e)?e(t):e,_=(a=0,()=>(++a).toString()),E=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},C=new Map,S=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),T({type:4,toastId:e})},1e3);C.set(e,t)},I=e=>{let t=C.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&I(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return e.toasts.find(e=>e.id===s.id)?P(e,{type:1,toast:s}):P(e,{type:0,toast:s});case 3:let{toastId:a}=t;return a?S(a):e.toasts.forEach(e=>{S(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},L=[],A={toasts:[],pausedAt:void 0},T=e=>{A=P(A,e),L.forEach(e=>{e(A)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={})=>{let[t,s]=(0,o.useState)(A);(0,o.useEffect)(()=>(L.push(s),()=>{let e=L.indexOf(s);e>-1&&L.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var s,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},$=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||_()}),B=e=>(t,s)=>{let a=$(t,e,s);return T({type:2,toast:a}),a.id},O=(e,t)=>B("blank")(e,t);O.error=B("error"),O.success=B("success"),O.loading=B("loading"),O.custom=B("custom"),O.dismiss=e=>{T({type:3,toastId:e})},O.remove=e=>T({type:4,toastId:e}),O.promise=(e,t,s)=>{let a=O.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then(e=>(O.success(k(t.success,e),{id:a,...s,...null==s?void 0:s.success}),e)).catch(e=>{O.error(k(t.error,e),{id:a,...s,...null==s?void 0:s.error})}),e};var Z=(e,t)=>{T({type:1,toast:{id:e,height:t}})},D=()=>{T({type:5,time:Date.now()})},M=e=>{let{toasts:t,pausedAt:s}=F(e);(0,o.useEffect)(()=>{if(s)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(s<0){t.visible&&O.dismiss(t.id);return}return setTimeout(()=>O.dismiss(t.id),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,s]);let a=(0,o.useCallback)(()=>{s&&T({type:6,time:Date.now()})},[s]),r=(0,o.useCallback)((e,s)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:l}=s||{},o=t.filter(t=>(t.position||l)===(e.position||l)&&t.height),i=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<i&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:D,endPause:a,calculateOffset:r}}},H=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,U=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=N("div")`
  position: absolute;
`,X=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(q,null,t):t:"blank"===s?null:o.createElement(X,null,o.createElement(R,{...a}),"loading"!==s&&o.createElement(Y,null,"error"===s?o.createElement(H,{...a}):o.createElement(U,{...a})))},J=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,G=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(s),K(s)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?G(e.position||t||"top-center",e.visible):{opacity:0},l=o.createElement(W,{toast:e}),i=o.createElement(Q,{...e.ariaProps},k(e.message,e));return o.createElement(V,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:l,message:i}):o.createElement(o.Fragment,null,l,i))});l=o.createElement,p.p=void 0,b=l,y=void 0,v=void 0;var et=({id:e,className:t,style:s,onHeightUpdate:a,children:r})=>{let l=o.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:l,className:t,style:s},r)},es=(e,t)=>{let s=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...a}},ea=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:r,containerStyle:l,containerClassName:i})=>{let{toasts:n,handlers:c}=M(s);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(s=>{let l=s.position||t,i=es(l,c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?ea:"",style:i},"custom"===s.type?k(s.message,s):r?r(s):o.createElement(ee,{toast:s,position:l}))}))},el=O}},function(e){e.O(0,[4617,1228,1255,1777,1182,4217,9774,2888,179],function(){return e(e.s=17410)}),_N_E=e.O()}]);