(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c,i,r,a,j=n(1),s=n(11),d=n.n(s),l=(n(23),n(2)),o=n(3),b=n.p+"static/media/logo.6ce24c58.svg",u=n(0),x=o.a.div(c||(c=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),O=o.a.img(i||(i=Object(l.a)(["\n  width: 3cm;\n"]))),h=o.a.div(r||(r=Object(l.a)(["\n  width: 5cm;\n  height: 4cm;\n  background-color: #ddd;\n  margin: 0 0 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),f=o.a.div(a||(a=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n  line-height: 0.7;\n"])));var m=function(){return Object(u.jsxs)(x,{children:[Object(u.jsx)(f,{children:Object(u.jsx)(O,{src:b,alt:"logo"})}),Object(u.jsx)(h,{children:Object(u.jsx)("p",{children:"Stamp Area"})})]})},g=n(4);var v=function(e){var t=Object(j.useState)(!1),n=Object(g.a)(t,2),c=n[0],i=n[1];function r(t){t.key===e&&i(!0)}var a=function(t){t.key===e&&i(!1)};return Object(j.useEffect)((function(){return window.addEventListener("keydown",r),window.addEventListener("keyup",a),function(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",a)}}),[]),c};var p=function(e,t){Object(j.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},w=n(8),y=n.n(w);var S,k,E,X=function(e){var t=Object(j.useState)(!1),n=Object(g.a)(t,2),c=n[0],i=n[1],r=Object(j.useState)(e.text),a=Object(g.a)(r,2),s=a[0],d=a[1],l=Object(j.useRef)(null),o=Object(j.useRef)(null),b=Object(j.useRef)(null),x=v("Enter"),O=v("Escape"),h=e.onSetText,f=e.lineH,m=e.align;p(l,(function(){c&&(h(s),i(!1))}));var w=Object(j.useCallback)((function(){x&&(h(s),i(!1))}),[x,s,h]),S=Object(j.useCallback)((function(){O&&(d(e.text),i(!1))}),[O,e.text]);Object(j.useEffect)((function(){c&&b.current.focus()}),[c]),Object(j.useEffect)((function(){c&&(w(),S())}),[w,S,c]);var k=Object(j.useCallback)((function(e){d(y.a.sanitize(e.target.value))}),[d]),E=Object(j.useCallback)((function(){return i(!0)}),[i]);return Object(u.jsxs)("span",{className:"inline-text",ref:l,children:[Object(u.jsx)("span",{ref:o,onClick:E,className:"inline-text_copy inline-text_copy--".concat(c?"hidden":"active"),children:e.text}),Object(u.jsx)("textarea",{ref:b,style:{width:"100%",height:"".concat(f,"cm"),textAlign:m&&"right"},value:s,onChange:k,className:"inline-text_input inline-text_input--".concat(c?"active":"hidden")})]})},C=o.a.div(S||(S=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1cm;\n"]))),T=o.a.table(k||(k=Object(l.a)(["\n  text-align: left;\n"]))),L=o.a.table(E||(E=Object(l.a)(["\n  text-align: right;\n"])));var I,N,A=function(){var e=Object(j.useState)("XXX-XXX-XXXX"),t=Object(g.a)(e,2),n=t[0],c=t[1],i=Object(j.useState)("Mail@Email.com"),r=Object(g.a)(i,2),a=r[0],s=r[1],d=Object(j.useState)("Corp"),l=Object(g.a)(d,2),o=l[0],b=l[1];return Object(u.jsxs)(C,{children:[Object(u.jsxs)(T,{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:"Riccardo Cogoni ltd."})}),Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:"Manchester Area, UK"})}),Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:"MX XXX"})})]}),Object(u.jsxs)(L,{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:Object(u.jsx)(X,{text:n,onSetText:function(e){return c(e)}})})}),Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:Object(u.jsx)(X,{text:a,onSetText:function(e){return s(e)}})})}),Object(u.jsx)("tr",{}),Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:Object(u.jsx)(X,{text:o,onSetText:function(e){return b(e)}})})})]})]})},q=o.a.div(I||(I=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1cm 0;\n  line-height: 2;\n"]))),H=o.a.table(N||(N=Object(l.a)(["\n  text-align: right;\n  th {\n    background-color: #eee;\n  }\n  th:nth-child(2) {\n    text-align: right;\n    width: 3cm;\n  }\n  td:nth-child(2) {\n    text-align: right;\n    width: 3cm;\n  }\n"])));var R,U,P,_=function(){var e=Object(j.useState)(2),t=Object(g.a)(e,2),n=t[0],c=t[1],i=Object(j.useState)(0),r=Object(g.a)(i,2),a=r[0],s=r[1];return Object(u.jsx)(q,{children:Object(u.jsxs)(H,{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"Prezzo"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Amount"}),Object(u.jsxs)("td",{children:["\xa3"," ",Object(u.jsx)(X,{lineH:"1",text:a,align:"right",onSetText:function(e){return s(e)}})]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Stamp"}),Object(u.jsxs)("td",{children:["\xa3"," ",Object(u.jsx)(X,{lineH:"1",align:"right",text:n,onSetText:function(e){return c(e)}})]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Total"}),Object(u.jsxs)("td",{children:["\u20ac ",parseInt(n)+parseInt(a)]})]})]})})},z=o.a.div(R||(R=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1cm 0;\n  line-height: 2;\n"]))),D=o.a.table(U||(U=Object(l.a)(["\n  text-align: left;\n  table-layout: fixed;\n  width: 100%;\n  th {\n    background-color: #eee;\n  }\n"]))),M=o.a.table(P||(P=Object(l.a)(["\n  text-align: left;\n  width: 70%;\n  margin: 0 0 0.5cm 0;\n"])));var B,J,K=function(){var e=Object(j.useState)("Add notes here..."),t=Object(g.a)(e,2),n=t[0],c=t[1],i=Object(j.useState)("Add description here..."),r=Object(g.a)(i,2),a=r[0],s=r[1],d=Object(j.useState)("01/2021"),l=Object(g.a)(d,2),o=l[0],b=l[1];return Object(u.jsxs)(z,{children:[Object(u.jsx)(M,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Invoice #"}),Object(u.jsx)("td",{children:Object(u.jsx)(X,{text:o,onSetText:function(e){return b(e)},lineH:"1"})})]})}),Object(u.jsxs)(D,{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:"Invoice Description"})}),Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:Object(u.jsx)(X,{text:a,onSetText:function(e){return s(e)}})})})]}),Object(u.jsxs)(D,{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:"Notes"})}),Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:Object(u.jsx)(X,{text:n,onSetText:function(e){return c(e)},lineH:"3"})})})]})]})},W=o.a.div(B||(B=Object(l.a)([""]))),Y=o.a.table(J||(J=Object(l.a)(["\n  text-align: left;\n  width: 100%;\n  line-height: 2;\n  th {\n    background-color: #eee;\n  }\n"])));var G,F,Q=function(){return Object(u.jsxs)(W,{children:[Object(u.jsxs)(Y,{children:[Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:"Personal Code:"})}),Object(u.jsx)("td",{children:"UK URYTCN9WOIUYWCC5N8720"}),Object(u.jsx)("tr",{})]}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},V=o.a.div(G||(G=Object(l.a)(["\n  background: white;\n  display: block;\n  margin: 3cm auto;\n  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);\n  width: 21cm;\n  height: 29.7cm;\n"]))),Z=o.a.div(F||(F=Object(l.a)(["\n  padding: 1cm;\n  height: 95%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"])));var $,ee,te=function(){return Object(u.jsx)(V,{children:Object(u.jsxs)(Z,{id:"invoice",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)(A,{}),Object(u.jsx)(K,{})]}),Object(u.jsx)(_,{}),Object(u.jsx)(Q,{})]})})},ne=n.p+"static/media/download.188335c8.svg",ce=o.a.nav($||($=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  height: 2cm;\n  width: 100%;\n  background-color: #000000dd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ie=o.a.img(ee||(ee=Object(l.a)(["\n  height: 1.2cm;\n  filter: invert(100%);\n"])));var re=function(){return Object(u.jsx)(ce,{children:Object(u.jsx)(ie,{src:ne,alt:"download"})})},ae=n(15),je=n(16),se=n.n(je);var de=function(){var e=document.getElementById("invoice"),t=new ae.a;t&&se.a.toPng(e).then((function(e){t.addImage(e,"PNG",0,0),t.save("download.pdf")}))};var le=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(re,{}),Object(u.jsx)(te,{}),Object(u.jsx)("button",{onClick:de,style:{width:"3cm",height:"3cm"},children:"Download"})]})};d.a.render(Object(u.jsx)(le,{}),document.getElementById("root"))}},[[26,1,3]]]);
//# sourceMappingURL=main.24566782.chunk.js.map