(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{150:function(e,a,t){e.exports={container:"WorkDetail_container__3t70K","bread-crumb":"WorkDetail_bread-crumb__1oPv8","header-texts":"WorkDetail_header-texts__2KTc2","header-image":"WorkDetail_header-image__mWxEY","main-texts":"WorkDetail_main-texts__oov9Q","image-gallery":"WorkDetail_image-gallery__3VDXM",links:"WorkDetail_links__3N0a5",container__loading:"WorkDetail_container__loading__31gvH"}},151:function(e,a,t){e.exports={"image-container":"DetailGallery_image-container__19E15",image:"DetailGallery_image__1V7lo",inlinevideo:"DetailGallery_inlinevideo__3k4k7","video-container":"DetailGallery_video-container__1Gc9Z",video:"DetailGallery_video__2Z11z",portrait:"DetailGallery_portrait__ANxTk",landscape:"DetailGallery_landscape__3vX03",large:"DetailGallery_large__3YY1Z",standard:"DetailGallery_standard__1pNlI"}},170:function(e,a,t){"use strict";t.r(a);var c=t(24),i=t(25),r=t(4),n=t(27),l=t(66),o=t(1),s=t(150),d=t.n(s),j=t(151),u=t.n(j),b=t(2),m=function(e){var a=e.media,t=e.mediaType,c=e.mediaCss,i="<></>",r=u.a["image-container"];return null!=a&&(i=a.map((function(e,a){switch(t[a]){case"image":return Object(b.jsx)("div",{className:"".concat(u.a.image," ").concat(u.a[c[a]]),children:Object(b.jsx)("img",{src:"/portfolio/media/".concat(e),alt:"gallery"})},a);case"video":return Object(b.jsx)("div",{className:"".concat(u.a.inlinevideo," ").concat(u.a[c[a]]),children:Object(b.jsx)("video",{src:"/portfolio/media/".concat(e),autoPlay:!0,muted:!0,loop:!0,playsInline:!0})},a);case"video-youtube":return r=u.a["video-container"],Object(b.jsx)("div",{className:"".concat(u.a.video," ").concat(u.a[c[a]]),children:Object(b.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(e),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},a);default:return null}}))),Object(b.jsx)("div",{className:r,children:i})};a.default=function(){var e=Object(r.i)().workId,a=Object(o.useState)(),t=Object(i.a)(a,2),s=t[0],j=t[1],u=Object(l.a)(),_=Object(i.a)(u,3),p=_[0],h=_[1],x=_[2];Object(o.useEffect)((function(){x({url:"https://portfolio-b6895-default-rtdb.europe-west1.firebasedatabase.app/worksdetail/".concat(e,".json")},(function(e){j(Object(c.a)({},e)),document.title=e.title+" - Joe Noordally Portfolio",window.scrollTo(0,0)}))}),[x,e]);var O=Object(b.jsx)("div",{className:"".concat(d.a.container__loading," ").concat(d.a.container)});if(!p&&!h&&null!=s){console.log({workDetailData:s});var v=s.heroImage,f=s.title,g=s.subtitle,k=s.introText,y=s.para1,D=s.para2,w=s.media,N=s.mediaCss,G=s.mediaType,T=s.links,W=s.linksText;console.log({linksText:W}),O=Object(b.jsxs)("div",{className:d.a.container,children:[Object(b.jsxs)("section",{className:d.a["bread-crumb"],children:[Object(b.jsx)(n.b,{to:"/portfolio/work",children:"Selected works"})," > ",e]}),Object(b.jsxs)("header",{children:[Object(b.jsxs)("div",{className:d.a["header-texts"],children:[Object(b.jsx)("h2",{children:f}),Object(b.jsx)("h4",{children:g}),Object(b.jsx)("p",{children:k})]}),Object(b.jsx)("div",{className:d.a["header-image"],children:Object(b.jsx)("img",{src:"/portfolio/media/".concat(v),alt:f})})]}),Object(b.jsxs)("section",{className:d.a["main-texts"],children:[Object(b.jsx)("div",{children:y.length<=50?Object(b.jsx)("h5",{children:y}):Object(b.jsx)("p",{children:y})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:D})})]}),Object(b.jsx)("section",{className:d.a["image-gallery"],children:Object(b.jsx)(m,{media:w,mediaType:G,mediaCss:N})}),T&&Object(b.jsx)("section",{className:d.a.links,children:T.map((function(e,a){return Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:W[a]})},"link".concat(a))}))})]})}return O}},66:function(e,a,t){"use strict";var c=t(74),i=t.n(c),r=t(75),n=t(25),l=t(1),o=t(76),s=t.n(o);a.a=function(){var e=Object(l.useState)(!1),a=Object(n.a)(e,2),t=a[0],c=a[1],o=Object(l.useState)(null),d=Object(n.a)(o,2),j=d[0],u=d[1];return[t,j,Object(l.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(a,t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),u(null),e.prev=2,e.next=5,s.a.get(a.url);case 5:r=e.sent,t(r.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),u(e.t0);case 12:c(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a,t){return e.apply(this,arguments)}}(),[])]}}}]);
//# sourceMappingURL=10.4a5433d1.chunk.js.map