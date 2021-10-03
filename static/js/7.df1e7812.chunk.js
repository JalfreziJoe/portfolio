/*! For license information please see 7.df1e7812.chunk.js.LICENSE.txt */
(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[7],{115:function(e,t,a){e.exports={bio__wrapper:"Bio_bio__wrapper__3_lLl",title:"Bio_title__3v1GM","bio-text":"Bio_bio-text__1Cm3E",header:"Bio_header__1Wk8A",bolder:"Bio_bolder__3sLiz",para1:"Bio_para1__DwNbC",para2:"Bio_para2__1-KUv",fontAddWeight:"Bio_fontAddWeight__2i5FG"}},116:function(e,t,a){e.exports={"brand-image":"BrandsMarquee_brand-image__D-oMl","marquee-container":"BrandsMarquee_marquee-container__2sU3Q",marquee:"BrandsMarquee_marquee__1cfow"}},117:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(1);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=i(n),s=function(){return(s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');t.default=function(e){var t,a,i,l,c=e.style,o=void 0===c?{}:c,d=e.className,u=void 0===d?"":d,p=e.play,m=void 0===p||p,f=e.pauseOnHover,b=void 0!==f&&f,g=e.pauseOnClick,j=void 0!==g&&g,v=e.direction,h=void 0===v?"left":v,_=e.speed,x=void 0===_?20:_,O=e.delay,y=void 0===O?0:O,k=e.gradient,w=void 0===k||k,N=e.gradientColor,C=void 0===N?[255,255,255]:N,B=e.gradientWidth,M=void 0===B?200:B,q=e.children,S=e.loop,E=void 0===S?0:S,I=n.useState(0),z=I[0],L=I[1],R=n.useState(0),G=R[0],T=R[1],H=n.useState(0),W=H[0],F=H[1],J=n.useState(!1),A=J[0],P=J[1],U=n.useRef(null),D=n.useRef(null),Q=function(){D.current&&U.current&&(L(U.current.getBoundingClientRect().width),T(D.current.getBoundingClientRect().width)),F(G<z?z/x:G/x)};n.useEffect((function(){return Q(),window.addEventListener("resize",Q),function(){window.removeEventListener("resize",Q)}})),n.useEffect((function(){P(!0)}),[]);var X="rgba("+C[0]+", "+C[1]+", "+C[2];return r.default.createElement(n.Fragment,null,A?r.default.createElement("div",{ref:U,style:s(s({},o),(t={},t["--pause-on-hover"]=b?"paused":"running",t["--pause-on-click"]=j?"paused":"running",t)),className:u+" marquee-container"},w&&r.default.createElement("div",{style:(a={},a["--gradient-color"]=X+", 1), "+X+", 0)",a["--gradient-width"]="number"===typeof M?M+"px":M,a),className:"overlay"}),r.default.createElement("div",{ref:D,style:(i={},i["--play"]=m?"running":"paused",i["--direction"]="left"===h?"normal":"reverse",i["--duration"]=W+"s",i["--delay"]=y+"s",i["--iteration-count"]=E?""+E:"infinite",i),className:"marquee"},q),r.default.createElement("div",{style:(l={},l["--play"]=m?"running":"paused",l["--direction"]="left"===h?"normal":"reverse",l["--duration"]=W+"s",l["--delay"]=y+"s",l["--iteration-count"]=E?""+E:"infinite",l),className:"marquee"},q)):null)}},139:function(e,t,a){e.exports={skills:"Skills_skills__mzJQN","skills-wrapper":"Skills_skills-wrapper__2Zgyd","skill-container":"Skills_skill-container__1anzp"}},140:function(e,t,a){e.exports={"gallery-container":"Gallery_gallery-container__MFPBu","gallery-slide":"Gallery_gallery-slide__2fUgn","gallery-image-container":"Gallery_gallery-image-container__1MRBy","gallery-image":"Gallery_gallery-image__2kJjQ","gallery-image-mobile":"Gallery_gallery-image-mobile__2NL2C",prev:"Gallery_prev__2b_nr",next:"Gallery_next__sypwL"}},141:function(e,t,a){"use strict";var n=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(64)),r=a(2),s=(0,i.default)((0,r.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.default=s},144:function(e,t,a){"use strict";var n=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(64)),r=a(2),s=(0,i.default)((0,r.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=s},145:function(e,t,a){e.exports={highlight__wrapper:"Highlight_highlight__wrapper__28GzA",gallery__wrapper:"Highlight_gallery__wrapper__57usw"}},167:function(e,t,a){"use strict";a.r(t);var n=a(94),i=a.n(n),r=a(80),s=a(115),l=a.n(s),c=a(65),o=a(1),d=a(92),u=a(78),p=a(25),m=a(116),f=a.n(m),b=a(89),g=a.n(b),j=a(117),v=a.n(j),h=a(2),_=function(e){var t=e.data,a=e.className,n=e.imgClassName,i=e.direction,r=function(e){var t;try{t="images/"+e}catch(a){t=""}return t};return Object(h.jsx)(v.a,{className:a,direction:i,speed:40,gradient:!1,children:t.map((function(e){return Object(h.jsx)("img",{className:n,src:r(e.img),alt:e.name},e.id)}))})},x=a(66),O=function(){var e=Object(o.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1],i=Object(x.a)(),r=Object(p.a)(i,3),s=r[0],l=r[1],c=r[2];Object(o.useEffect)((function(){c({url:"https://portfolio-b6895-default-rtdb.europe-west1.firebasedatabase.app/brands.json"},(function(e){var t=[];for(var a in e)t.push({id:a,name:e[a].name,img:e[a].img});n(t)}))}),[c]);var d=Object(h.jsx)(g.a,{count:3});if(a.length>0&&!s&&!l){var m=Math.floor(a.length/3),b=Object(u.a)(a),j=b.splice(0,m),v=b.splice(0,m);d=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{className:f.a.marquee,imgClassName:f.a["brand-image"],direction:"left",data:b}),Object(h.jsx)(_,{className:f.a.marquee,imgClassName:f.a["brand-image"],direction:"right",data:j}),Object(h.jsx)(_,{className:f.a.marquee,imgClassName:f.a["brand-image"],direction:"left",data:v})]})}return Object(h.jsx)("div",{className:f.a["marquee-container"],children:d})},y=function(){var e=Object(o.useRef)(),t=Object(o.useRef)(),a=Object(o.useRef)();return Object(o.useEffect)((function(){d.a.to([e.current,t.current],{color:"#705475",duration:5,stagger:.3})}),[]),Object(h.jsxs)("div",{className:l.a.bio__wrapper,children:[Object(h.jsx)("div",{className:l.a.title,children:Object(h.jsx)(c.a,{titleBackgroundClass:"title-background__bio",titleText:"Bio"})}),Object(h.jsxs)("div",{className:l.a.header,children:[Object(h.jsxs)("h2",{ref:e,children:["Web developer with over"," ",Object(h.jsx)("span",{className:l.a.bolder,ref:a,children:"10 years"})," ","professional experience."]}),Object(h.jsx)("h3",{ref:t,children:"Coding & design with UX at its heart."})]}),Object(h.jsxs)("div",{className:"".concat(l.a.para1," ").concat(l.a["bio-text"]),children:[Object(h.jsx)("h3",{children:"Who"}),Object(h.jsx)("p",{children:"I have worked prominently in the advertisting industry on many brands."}),Object(h.jsx)(O,{})]}),Object(h.jsxs)("div",{className:"".concat(l.a.para2," ").concat(l.a["bio-text"]),children:[Object(h.jsx)("h3",{children:"What"}),Object(h.jsx)("p",{children:"I have produced various web works. For advertisting, rich media banners have been my bread & butter. Ranging from simple in-page units to expandables, full-width responsive and takeovers."}),Object(h.jsx)("p",{children:"Other works include simple websites, HTML emails, website app widgets and (old school) Flash apps."})]})]})},k=a(139),w=a.n(k),N=[{id:"s1",skillName:"HTML",skillIcon:"html-5.svg"},{id:"s2",skillName:"CSS",skillIcon:"css-3.svg"},{id:"s3",skillName:"Javascript",skillIcon:"javascript.svg"},{id:"s4",skillName:"React",skillIcon:"react.svg"},{id:"s5",skillName:"NodeJS",skillIcon:"nodejs.svg"},{id:"s6",skillName:"Express",skillIcon:"express.svg"},{id:"s7",skillName:"MongoDB/\nMongoose",skillIcon:"mongodb.svg"},{id:"s8",skillName:"Vue",skillIcon:"vue.svg"}],C=function(){var e=a(73);return Object(h.jsxs)("div",{className:w.a.skills,children:[Object(h.jsx)(c.a,{titleBackgroundClass:"title-background__skills",titleText:"Skills"}),Object(h.jsx)("div",{className:w.a["skills-wrapper"],children:N.map((function(t){return Object(h.jsxs)("div",{className:w.a["skill-container"],children:[console.log(e("./"+t.skillIcon)),Object(h.jsx)("img",{src:e("./"+t.skillIcon).default,alt:t.skillName})]},t.id)}))})]})},B=a(140),M=a.n(B),q=a(60),S=a(59),E=a(141),I=a.n(E),z=a(144),L=a.n(z),R=a(4),G={enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{x:e<0?1e3:-1e3,opacity:0,zIndex:0}}},T=function(){var e=Object(R.g)(),t=Object(o.useState)(0),a=Object(p.a)(t,2),n=a[0],i=a[1],r=Object(o.useState)(0),s=Object(p.a)(r,2),l=s[0],c=s[1],d=Object(o.useState)([]),u=Object(p.a)(d,2),m=u[0],f=u[1],b=function(e,t,a){var n=t-e;return((a-e)%n+n)%n+e}(0,m.length,n),g=Object(o.useCallback)((function(e){i(n+e),c(e)}),[n]),j=Object(o.useRef)(),v=Object(o.useRef)(),_=Object(x.a)(),O=Object(p.a)(_,3),y=O[0],k=O[1],w=O[2],N=Object(h.jsx)("div",{});return Object(o.useEffect)((function(){w({url:"https://portfolio-b6895-default-rtdb.europe-west1.firebasedatabase.app/highlights.json"},(function(e){console.log(e),f(e)}))}),[w]),Object(o.useLayoutEffect)((function(){var e=setTimeout((function(){g(1)}),5e3);return function(){clearTimeout(e)}}),[g]),y||k||0===m.length||(N=Object(h.jsxs)("div",{className:M.a["gallery-slide"],ref:j,children:[Object(h.jsx)(q.a,{initial:!1,custom:l,children:Object(h.jsxs)(S.a.div,{className:M.a["gallery-image-container"],ref:v,custom:l,variants:G,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30,opacity:{duration:.2}}},onClick:function(){return t=m[b].link,void e.push("/work/".concat(t));var t},children:[Object(h.jsx)("img",{className:M.a["gallery-image"],alt:"gallery",src:"/images/".concat(m[b].galleryImage)}),Object(h.jsx)("img",{className:M.a["gallery-image-mobile"],alt:"gallery mobile",src:"/images/".concat(m[b].galleryMobileImage)})]},n)}),Object(h.jsx)("div",{className:M.a.prev,onClick:function(){return g(-1)},children:Object(h.jsx)(I.a,{})}),Object(h.jsx)("div",{className:M.a.next,onClick:function(){return g(1)},children:Object(h.jsx)(L.a,{})})]})),Object(h.jsx)("div",{className:M.a["gallery-container"],children:N})},H=a(145),W=a.n(H),F=function(){return Object(h.jsxs)("div",{className:W.a.highlight__wrapper,children:[Object(h.jsx)(c.a,{titleText:"Highlight",titleBackgroundClass:"title-background__highlight"}),Object(h.jsx)("div",{className:W.a.gallery__wrapper,children:Object(h.jsx)(T,{})})]})};t.default=function(){return Object(h.jsxs)("div",{className:i.a["home-container"],children:[Object(h.jsx)(r.a,{heroType:"hero"}),Object(h.jsx)(y,{}),Object(h.jsx)(C,{}),Object(h.jsx)(F,{})]})}},66:function(e,t,a){"use strict";var n=a(75),i=a.n(n),r=a(76),s=a(25),l=a(1),c=a(77),o=a.n(c);t.a=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(null),d=Object(s.a)(c,2),u=d[0],p=d[1];return[a,u,Object(l.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),p(null),e.prev=2,e.next=5,o.a.get(t.url);case 5:r=e.sent,a(r.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),p(e.t0);case 12:n(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),[])]}},94:function(e,t,a){e.exports={"home-container":"Home_home-container__3ot6V"}}}]);
//# sourceMappingURL=7.df1e7812.chunk.js.map