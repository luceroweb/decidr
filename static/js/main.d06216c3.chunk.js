(this.webpackJsonpdecidr=this.webpackJsonpdecidr||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),r=n(6),s=n.n(r),o=(n(12),n(2)),a=(n(13),n.p+"static/media/decidr.5fcf9849.svg"),l=n(7),d=n(0);function j(t){var e=t.listContainer,n=t.setListContainer,c=Object(i.useState)(""),r=Object(o.a)(c,2),s=r[0],a=r[1],j=Object(i.useState)(""),u=Object(o.a)(j,2),b=u[0],O=u[1],h=Object(i.useState)("Add an option"),f=Object(o.a)(h,2),p=f[0],x=f[1],g=function(t){return""===t?(C(!0,"Option must not be blank"),!0):(C(!1),!1)},m=function(t){return void 0!==e.find((function(e){return e.toLowerCase()===t.toLowerCase()}))?(C(!0,"Option already in list"),!0):(C(!1),!1)},C=function(t,e){if(console.log("Invalid:",t,e),t)return O("invalid"),void x(e);O(""),x("Add an option")};return Object(d.jsxs)("form",{id:"add-option",onSubmit:function(t){return t.preventDefault(),g(s.trim())||m(s.trim())?a(""):(n([].concat(Object(l.a)(e),[s.trim()])),void a(""))},children:[Object(d.jsx)("input",{id:"newOption",className:b,value:s,onInput:function(t){return function(t){a(t.target.value),g(t.target.value.trim())}(t)},placeholder:p,required:!0}),Object(d.jsx)("button",{type:"submit",children:"Add Item"})]})}function u(t){var e=t.listContainer,n=t.setListContainer,i=e.length,c=function(t){n(e.filter((function(e){return e!==t.target.dataset.option})))},r=e.slice(0).reverse().map((function(t,e){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("span",{children:[i--,"."]}),Object(d.jsx)("span",{children:t}),Object(d.jsx)("button",{"data-option":t,onClick:c,children:"\ud83d\uddd1\ufe0f"})]},e)}));return Object(d.jsxs)("div",{id:"display-list",children:[e.length>0?Object(d.jsxs)("p",{children:[e.length," Options"]}):Object(d.jsxs)("p",{children:["I can help you decide.",Object(d.jsx)("br",{}),"Add options to your list."]}),Object(d.jsx)("ol",{reversed:!0,children:r})]})}function b(t){var e=t.selectedItem,n=t.setSelectedItem,i=t.listContainer,c=t.setListContainer,r=function(){var t=Math.floor(Math.random()*i.length);n(i.length>0?i[t]:"")},s=function(){n("")},o=function(){s(),c([])};return Object(d.jsx)(d.Fragment,{children:e.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:s,children:"Clear Selection"}),Object(d.jsx)("button",{onClick:r,children:"Select Again"}),Object(d.jsx)("button",{onClick:o,children:"Restart"})]}):Object(d.jsx)(d.Fragment,{children:i.length>1?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:r,children:"Select An Option"}),Object(d.jsx)("button",{onClick:o,children:"Restart"})]}):Object(d.jsx)("button",{disabled:!0,children:"Add at least 2 options"})})})}var O=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(i.useState)(""),s=Object(o.a)(r,2),l=s[0],O=s[1];Object(i.useEffect)((function(){c(JSON.parse(window.localStorage.getItem("listContainer")||"[]"))}),[]);var h=function(t){window.localStorage.setItem("listContainer",JSON.stringify(t)),c(t)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{src:a,alt:"",className:"logo"}),"Decider"]}),Object(d.jsx)("main",{children:l.length>0?Object(d.jsx)("p",{id:"selected",children:l}):Object(d.jsx)(u,{listContainer:n,setListContainer:h})}),Object(d.jsx)(j,{listContainer:n,setListContainer:h}),Object(d.jsx)("footer",{children:Object(d.jsx)(b,{listContainer:n,setListContainer:h,selectedItem:l,setSelectedItem:O})})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),r(t),s(t)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.d06216c3.chunk.js.map