(this.webpackJsonpicici=this.webpackJsonpicici||[]).push([[0],{21:function(e,t,c){},39:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);c(34);var n=c(0),s=c.n(n),a=c(16),r=c.n(a),i=(c(39),c(21),c(7)),o=c(50),j=c(51),l=c(27),b=c(1);var d=function(e){var t=e.name,c=e.sub,s=e.code,a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],j=r[1];return Object(n.useEffect)((function(){switch(s){case"solo":fetch("https://dog.ceo/api/breed/"+t+"/images/random").then((function(e){return e.json()})).then((function(e){j([e.message])}));break;case"sub":fetch("https://dog.ceo/api/breed/"+t+"/"+c+"/images/random").then((function(e){return e.json()})).then((function(e){j([e.message])}));break;case"more":fetch("https://dog.ceo/api/breed/"+t+"/images/random/4").then((function(e){return e.json()})).then((function(e){j(e.message)}));break;case"custom":j([c])}}),[t]),Object(b.jsx)(b.Fragment,{children:o.length>0?o.map((function(e){return Object(b.jsx)("img",{className:"img-fluid resize",src:e,alt:"Not found"})})):""})},u=c(49);var h=function(e){var t=e.show,c=e.setShow,n=e.name,s=e.sub,a=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(u.a,{show:t,onHide:function(){return c(!1)},className:"modal-dialog-scrollable ",children:[Object(b.jsx)(u.a.Header,{closeButton:!0,children:Object(b.jsx)(u.a.Title,{children:a(n)})}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Sub Breads"}),Object(b.jsx)("div",{className:"d-flex flex-lg-wrap",children:s.length>0?s.map((function(e,t){return Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)(d,{name:n,sub:e,code:"sub"},t),Object(b.jsx)("p",{children:a(e)})]})})):Object(b.jsx)("p",{children:"No sub-breads found!"})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"More Images"}),Object(b.jsx)(d,{name:n,code:"more",style:{margin:"5px"}})]})]})]})})};var O=function(e){for(var t=e.dogs,c=[],s=Object(n.useState)(!1),a=Object(i.a)(s,2),r=a[0],o=a[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),O=u[0],m=u[1],x=Object(n.useState)([]),f=Object(i.a)(x,2),g=f[0],p=f[1],v=0,S=Object.entries(t);v<S.length;v++){var w=Object(i.a)(S[v],2),N=w[0],y=w[1];c=[].concat(Object(l.a)(c),[{name:N,sub:y}])}return Object(b.jsxs)("div",{className:"d-flex flex-lg-wrap",style:{padding:"5px"},children:[c.length>0?c.map((function(e,t){return Object(b.jsxs)("div",{onClick:function(){return t=e.name,c=e.sub,m(t),p(c),void o(!0);var t,c},style:{textAlign:"center"},children:[Object(b.jsx)(d,{name:e.name,code:"solo"},t),Object(b.jsx)("p",{children:(c=e.name,c.charAt(0).toUpperCase()+c.slice(1))})]});var c})):"Loading..",Object(b.jsx)(h,{show:r,setShow:o,name:O,setName:m,sub:g,setSub:p})]})},m=c(46),x=c(47),f=c(48);var g=function(e){for(var t=e.show,c=e.setShow,s=e.dogs,a=[],r=Object(n.useState)(""),o=Object(i.a)(r,2),h=o[0],O=o[1],g=Object(n.useState)(0),p=Object(i.a)(g,2),v=p[0],S=p[1],w=Object(n.useState)(""),N=Object(i.a)(w,2),y=N[0],C=N[1],k=Object(n.useState)([]),B=Object(i.a)(k,2),A=B[0],H=B[1],I=0,E=Object.entries(s);I<E.length;I++){var F=Object(i.a)(E[I],1)[0];a=[].concat(Object(l.a)(a),[F])}var T=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(u.a,{show:t,onHide:function(){O(""),H([]),S(0),C(""),c(!1)},className:"modal-dialog-scrollable",children:[Object(b.jsx)(u.a.Header,{closeButton:!0,children:Object(b.jsx)(u.a.Title,{children:"Custom Search"})}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)("div",{children:Object(b.jsxs)(m.a,{fluid:"md",children:[Object(b.jsxs)(x.a,{children:[Object(b.jsx)(f.a,{className:"text-center",children:Object(b.jsxs)("select",{className:"input",onChange:function(e){O(e.target.value),console.log(h)},children:[Object(b.jsx)("option",{children:"Select a bread"}),a.map((function(e){return Object(b.jsx)("option",{value:e,children:T(e)})}))]})}),Object(b.jsx)(f.a,{children:Object(b.jsx)("input",{className:"input",type:"number",placeholder:"Number of Images",onChange:function(e){S(e.target.value)}})})]}),Object(b.jsx)(x.a,{style:{marginTop:"10px"},children:Object(b.jsx)(f.a,{className:"text-center",children:Object(b.jsx)(j.a,{variant:"success",onClick:function(e){v>0&&""!==h&&(e.preventDefault(),C('Showing "'+v+'" images of "'+T(h)+'"'),H([]),fetch("https://dog.ceo/api/breed/"+h+"/images/random/"+v).then((function(e){return e.json()})).then((function(e){H(e.message)})).catch((function(e){console.log(e)})))},children:"Get Images"})})})]})}),Object(b.jsx)("div",{style:{margin:"10px"},children:y}),Object(b.jsx)("div",{className:"d-flex flex-lg-wrap align-content-center",children:A.length>0?A.map((function(e,t){return Object(b.jsx)(d,{sub:e,code:"custom",style:{margin:"5px"}},t)})):""})]})]})})};var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(i.a)(a,2),l=r[0],d=r[1];return Object(n.useEffect)((function(){fetch("https://dog.ceo/api/breeds/list/all").then((function(e){return e.json()})).then((function(e){s(e.message)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)(o.a,{bg:"primary",variant:"dark",children:[Object(b.jsx)(o.a.Brand,{className:"ml-auto p-1",children:"Dog Gallery"}),Object(b.jsx)(j.a,{variant:"success",className:"ml-auto p-2",onClick:function(){d(!0)},children:"Custom Search"})]}),Object(b.jsx)(O,{dogs:c}),Object(b.jsx)(g,{show:l,setShow:d,dogs:c})]})};var v=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(p,{})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9001c56e.chunk.js.map