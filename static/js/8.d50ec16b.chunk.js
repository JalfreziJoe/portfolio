(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[8],{147:function(e,t,r){e.exports={"work-container":"Work_work-container__fwQd4",title__container:"Work_title__container__wamEI",intro:"Work_intro__1pewg",disclaimer:"Work_disclaimer__3APLR",intro__box:"Work_intro__box__3xkt9",disclaimer__box:"Work_disclaimer__box__1TNbV","content-area":"Work_content-area__s3Wo5",works:"Work_works__C2mQZ"}},148:function(e,t,r){e.exports={"work-slide":"WorkSlide_work-slide__31npv","work-slide__image-container":"WorkSlide_work-slide__image-container__1-ZxH","work-slide__panel":"WorkSlide_work-slide__panel__oLRTS"}},149:function(e,t,r){e.exports={"work-gallery__wrapper":"WorkGallery_work-gallery__wrapper__2oMFc"}},169:function(e,t,r){"use strict";r.r(t);var i=r(1),a=r.n(i),o=r(147),n=r.n(o),c=r(25),s=r(148),l=r.n(s),d=r(4),_=r(89),u=r.n(_),b=r(2),h=function(e){e.loading;var t=e.imageSrc,r=e.title,i=e.desc,a=e.link,o=Object(d.g)();return Object(b.jsxs)("div",{className:l.a["work-slide"],children:[Object(b.jsx)("div",{className:l.a["work-slide__panel"],children:Object(b.jsx)("h2",{children:r||Object(b.jsx)(u.a,{count:1,width:"90%"})})}),t?Object(b.jsx)("div",{className:l.a["work-slide__image-container"],onClick:function(){var e;e="/portfolio/work/".concat(a),console.log("work gallery click. scroll: "+window.scrollY),o.push(e)},children:Object(b.jsx)("img",{src:t,alt:r})}):Object(b.jsx)("div",{style:{padding:"1em"},children:Object(b.jsx)(u.a,{height:600})}),Object(b.jsx)("div",{className:l.a["work-slide__panel"],children:i?Object(b.jsx)("p",{children:i}):Object(b.jsx)("p",{children:Object(b.jsx)(u.a,{count:3,width:"90%"})})})]})},j=r(149),p=r.n(j),m=r(66),k=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),r=t[0],a=t[1],o=Object(m.a)(),n=Object(c.a)(o,3),s=n[0],l=n[1],d=n[2];Object(i.useEffect)((function(){d({url:"https://portfolio-b6895-default-rtdb.europe-west1.firebasedatabase.app/works.json"},(function(e){var t=[];for(var r in e)t.push({id:r,title:e[r].title,desc:e[r].desc,imageSrc:e[r].imageSrc,link:e[r].link});t.sort(),t.reverse(),a(t)}))}),[d]);var _=Object(b.jsx)(h,{loading:!0});return r.length>0&&!s&&!l&&(_=r.map((function(e){return Object(b.jsx)(h,{imageSrc:"images/"+e.imageSrc,title:e.title,desc:e.desc,link:e.link},e.id)}))),l&&(_=Object(b.jsx)("p",{children:"Whoops! There has been an error. Please refresh or try again later."})),Object(b.jsx)("div",{className:p.a["work-gallery__wrapper"],children:_})},x=a.a.memo(k),w=r(65),g=function(){return Object(b.jsxs)("div",{className:n.a["work-container"],children:[Object(b.jsx)("div",{className:n.a.title__container,children:Object(b.jsx)(w.a,{titleText:"Selected works",titleBackgroundClass:"title-background__works"})}),Object(b.jsx)("div",{className:n.a.intro,children:Object(b.jsx)("div",{className:n.a.intro__box,children:Object(b.jsxs)("div",{className:n.a["content-area"],children:[Object(b.jsx)("h3",{children:"Here are some of my selected works."}),Object(b.jsx)("p",{children:"Click/tap the image to see more"}),Object(b.jsx)("p",{children:"The ad units are designed in Photoshop, assets are optimised, exported and then coded using an ad codebase."}),Object(b.jsx)("p",{children:"All works are coded using HTML5, CSS3 and vanilla Javascript. There are some bespoke JS modules in use such as a Gallery or Carousel. Animation is a combination of the GSAP library and CSS3 transitions. The code is compiled down to the most compatiable format for most browsers."})]})})}),Object(b.jsx)("div",{className:n.a.disclaimer,children:Object(b.jsx)("div",{className:n.a.disclaimer__box,children:Object(b.jsxs)("div",{className:n.a["content-area"],children:[Object(b.jsx)("h4",{children:"Disclaimer"}),Object(b.jsx)("p",{children:"Some of the works on this portfolio have been produced whilst employed by Adapt Rich Media Ltd."})]})})}),Object(b.jsx)("div",{className:n.a.works,children:Object(b.jsx)(x,{})})]})};t.default=a.a.memo(g)},65:function(e,t,r){"use strict";var i=r(73),a=r.n(i),o=r(2);t.a=function(e){var t=e.titleBackgroundClass,r=void 0===t?null:t,i=e.titleText;return Object(o.jsx)("div",{className:"".concat(a.a.title," ").concat(null!==r?a.a[r]:""),children:Object(o.jsx)("div",{className:a.a["title-text"],children:i})})}},66:function(e,t,r){"use strict";var i=r(74),a=r.n(i),o=r(75),n=r(25),c=r(1),s=r(76),l=r.n(s);t.a=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),r=t[0],i=t[1],s=Object(c.useState)(null),d=Object(n.a)(s,2),_=d[0],u=d[1];return[r,_,Object(c.useCallback)(function(){var e=Object(o.a)(a.a.mark((function e(t,r){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),u(null),e.prev=2,e.next=5,l.a.get(t.url);case 5:o=e.sent,r(o.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),u(e.t0);case 12:i(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,r){return e.apply(this,arguments)}}(),[])]}},68:function(e,t,r){"use strict";t.a=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var i=e(r);return t.set(r,i),i}}},69:function(e,t,r){"use strict";t.a=function(e){for(var t,r=0,i=0,a=e.length;a>=4;++i,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(i)|(255&e.charCodeAt(++i))<<8|(255&e.charCodeAt(++i))<<16|(255&e.charCodeAt(++i))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(i+2))<<16;case 2:r^=(255&e.charCodeAt(i+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(i)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}},70:function(e,t,r){"use strict";t.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},73:function(e,t,r){e.exports={title:"Title_title__1w0DW",title__blue:"Title_title__blue__wMPUj","title-text":"Title_title-text__21ELW","title-background__works":"Title_title-background__works__1tBA3","title-background__highlight":"Title_title-background__highlight__1lgve","title-background__contact":"Title_title-background__contact__1avCD"}}}]);
//# sourceMappingURL=8.d50ec16b.chunk.js.map