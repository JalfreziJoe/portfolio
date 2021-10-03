(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[4],{15:function(e,t,n){e.exports={"mobile-menu":"MobileMenu_mobile-menu__szP3x","menu-bar":"MobileMenu_menu-bar__3-yvB",open:"MobileMenu_open__2Nt7c",closed:"MobileMenu_closed__3vK2y"}},26:function(e,t,n){e.exports={"nav-button":"NavButton_nav-button__3h5Tv","active-underline":"NavButton_active-underline__13V1V",active:"NavButton_active__-5vhf"}},31:function(e,t,n){e.exports={header:"Header_header__3bWls",header__wrapper:"Header_header__wrapper__1vIV7"}},32:function(e,t,n){e.exports={overlay:"MobileMenuOverlay_overlay__1I_Wg",slideOutArea:"MobileMenuOverlay_slideOutArea__1uW3q","slide-in":"MobileMenuOverlay_slide-in__3SuOW","slide-out":"MobileMenuOverlay_slide-out__2Ewd7"}},33:function(e,t,n){e.exports={desktop:"Navigation_desktop__1Bdf1",mobile:"Navigation_mobile__AklQZ"}},41:function(e,t,n){e.exports={footer:"Footer_footer__v4JMI"}},46:function(e,t,n){},47:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),c=n(23),a=n.n(c),l=n(27),r=(n(46),n(24)),s=(n(47),n(4)),u=n(59),b=n(2),j=function(e){var t=e.title,n=e.children;Object(o.useEffect)((function(){document.title=t+" - Joe Noordally Portfolio"||!1}),[t]);return Object(b.jsx)(u.a.div,{initial:"hidden",animate:"visible",exit:"hidden",variants:{hidden:{opacity:0,transition:{duration:.4,ease:"easeOut"}},visible:{opacity:1,transition:{duration:.6,ease:"easeOut"}}},children:n},t)},d=n(31),p=n.n(d),O=n(25),x=n(15),h=n.n(x),f=n(60),v=n(32),M=n.n(v),_=function(e){var t=e.exitMenu;return Object(b.jsx)(u.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:M.a.overlay,onClick:t},"modal")},m=function(e){var t=e.children;e.refHandler;return Object(b.jsx)(u.a.div,{initial:{opacity:0,right:"-180px"},animate:{opacity:1,right:0},exit:{right:"-180px"},className:"".concat(M.a.slideOutArea),children:t},"menu")},y=function(e){var t=Object(o.useRef)(),n=Object(o.useState)(!0),i=Object(O.a)(n,2),c=i[0],l=i[1];Object(o.useLayoutEffect)((function(){}),[]);return Object(b.jsxs)(b.Fragment,{children:[a.a.createPortal(Object(b.jsx)(f.a,{children:c&&Object(b.jsx)(_,{exitMenu:function(){l(!1),e.exitMenu()}})}),document.getElementById("overlay")),a.a.createPortal(Object(b.jsx)(f.a,{children:c&&Object(b.jsx)(m,{children:e.children,refHandler:t})}),document.getElementById("mobileMenu"))]})},g=n(33),N=n.n(g),k=n(26),C=n.n(k),A=function(e){var t=e.route,n=e.buttonText,o=e.navType,i=e.closeMobileMenu,c=Object(s.g)(),a=Object(s.h)();return Object(b.jsxs)("button",{className:"".concat(C.a["nav-button"]," ").concat(function(){var e=a.pathname.split("/");return e.shift(),e.length>1&&e[1]!==t||1===e.length&&e[0]!==t||1!==e.length&&e[1]!==t?null:C.a.active}()),onClick:function(){!function(e){"mobile"===o&&i(),"portfolio"===e?c.push("/portfolio"):c.push("/portfolio/"+e)}(t)},children:[n,Object(b.jsx)("div",{className:C.a["active-underline"]})]})},w=function(e){var t=e.navType,n=void 0===t?"desktop":t,o=e.closeMobileMenu,i=void 0===o?null:o;return Object(b.jsx)("nav",{className:"desktop"===n?N.a.desktop:N.a.mobile,children:Object(b.jsx)("ul",{children:[{text:"Home",route:"portfolio"},{text:"Work",route:"work"},{text:"About",route:"about"}].map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(A,{route:e.route,buttonText:e.text,navType:n,closeMobileMenu:i},e.text)},e.text)}))})})},P=function(e){var t=e.onOpenMobileMenu,n=e.onCloseMobileMenu,i=Object(o.useState)(h.a.closed),c=Object(O.a)(i,2),a=c[0],l=c[1],r=function(){console.log("menuClickHandler"),a===h.a.closed?(console.log("open it"),l(h.a.open),t()):(console.log("close it"),l(h.a.closed),n())};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:h.a["mobile-menu"],onClick:r,children:[Object(b.jsx)("div",{className:"".concat(a," ").concat(h.a["menu-bar"])}),Object(b.jsx)("div",{className:"".concat(a," ").concat(h.a["menu-bar"])}),Object(b.jsx)("div",{className:"".concat(a," ").concat(h.a["menu-bar"])})]}),a===h.a.open&&Object(b.jsx)(y,{exitMenu:r,children:Object(b.jsx)(w,{navType:"mobile",closeMobileMenu:function(){console.log("closeMobileMenu"),l(h.a.closed),n()}})})]})},T=function(e){var t=e.onOpenMobileMenu,n=e.onCloseMobileMenu;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{navType:"desktop"}),Object(b.jsx)(P,{onOpenMobileMenu:t,onCloseMobileMenu:n})]})},B=function(e){var t=e.onOpenMobileMenu,n=e.onCloseMobileMenu;return Object(b.jsx)("div",{className:p.a.header,children:Object(b.jsxs)("div",{className:p.a.header__wrapper,children:[Object(b.jsxs)("h1",{children:["Joe",Object(b.jsx)("span",{children:"Noordally"})]}),Object(b.jsx)(T,{onOpenMobileMenu:t,onCloseMobileMenu:n})]})})},F=n(41),I=n.n(F),H=function(){var e=(new Date).getFullYear().toString();return Object(b.jsxs)("div",{className:I.a.footer,children:[Object(b.jsxs)("p",{children:["Joe Noordally ",e]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"mailto:joenoordally@gmail.com",children:"joenoordally@gmail.com"})})]})},L=i.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(1),n.e(7)]).then(n.bind(null,168))})),S=i.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(8)]).then(n.bind(null,169))})),W=i.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,170))})),E=i.a.lazy((function(){return Promise.all([n.e(2),n.e(1),n.e(9)]).then(n.bind(null,171))}));var J=function(){var e=Object(o.useRef)();return Object(b.jsxs)("div",{className:"App",ref:e,children:[Object(b.jsx)(B,{onOpenMobileMenu:function(){e.current.classList.remove("App__closeMobileMenu"),e.current.classList.add("App__openMobileMenu")},onCloseMobileMenu:function(){e.current.classList.remove("App__openMobileMenu"),e.current.classList.add("App__closeMobileMenu")}}),Object(b.jsx)("div",{className:"App__main",children:Object(b.jsx)(o.Suspense,{fallback:Object(b.jsx)("p",{children:"loading..."}),children:Object(b.jsx)(f.a,{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/portfolio",render:function(e){return Object(b.jsx)(j,{title:"Home",children:Object(b.jsx)(L,Object(r.a)({},e))})},exact:!0}),Object(b.jsx)(s.b,{path:"/portfolio/work",render:function(e){return Object(b.jsx)(j,{title:"Works",children:Object(b.jsx)(S,Object(r.a)({},e))})},exact:!0}),Object(b.jsx)(s.b,{path:"/portfolio/work/:workId",render:function(e){return Object(b.jsx)(j,{title:"Works Detail",children:Object(b.jsx)(W,Object(r.a)({},e))})}}),Object(b.jsx)(s.b,{path:"/portfolio/about",render:function(e){return Object(b.jsx)(j,{title:"About",children:Object(b.jsx)(E,Object(r.a)({},e))})},exact:!0}),Object(b.jsx)(s.b,{path:"*",children:Object(b.jsx)(s.a,{to:"/portfolio"})})]})})})}),Object(b.jsx)(H,{})]})},z=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,167)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(J,{})})}),document.getElementById("root")),z()}},[[58,5,6]]]);
//# sourceMappingURL=main.2f52d712.chunk.js.map