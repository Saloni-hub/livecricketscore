(this.webpackJsonpcricket=this.webpackJsonpcricket||[]).push([[0],{57:function(t,e,c){},58:function(t,e,c){},68:function(t,e,c){"use strict";c.r(e);var n=c(3),i=c(0),a=c.n(i),r=c(8),s=c.n(r),o=(c(57),c(26)),j=(c(58),c(84)),l=c(87),h=c(88),d=c(45),u=c(42),b=c.n(u);function O(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(j.a,{position:"static",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(h.a,{color:"inherit",children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(d.a,{variant:"h6",children:"Live Score"})]})})})}var x=c(91),m=c(89),f=c(90),p=c(92),g=c(93),y=c(98),v=c(94),S=c(95),k=c(96),F=c(97),T="mLIFjBhNGnbPPOTGEvWaDwODSko1",w=function(){var t="https://cricapi.com/api/matches/?apikey=".concat(T);return fetch(t).then((function(t){return t.json()})).catch((function(t){return console.log("Error",t)}))},C=function(t){var e=t.match,c=Object(i.useState)({}),a=Object(o.a)(c,2),r=a[0],s=a[1],j=Object(i.useState)(!1),l=Object(o.a)(j,2),h=l[0],u=l[1],b=function(t){(function(t){var e="https://cricapi.com/api/cricketScore/?apikey=".concat(T,"&unique_id=").concat(t);return fetch(e).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))})(t).then((function(t){console.log("Match data",t),s(t),w()})).catch((function(t){return console.log(t)}))},O=function(){u(!1)},w=function(){u(!0)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(m.a,{style:{marginTop:15},children:[Object(n.jsx)(f.a,{children:Object(n.jsxs)(x.a,{container:!0,justify:"center",alignItems:"center",spacing:"4",children:[Object(n.jsx)(x.a,{item:!0,children:Object(n.jsx)(d.a,{variant:"h5",children:e["team-1"]})}),Object(n.jsx)(x.a,{item:!0,children:Object(n.jsx)("img",{style:{width:85},src:"vs1.png",alt:"myImg"})}),Object(n.jsx)(x.a,{item:!0,children:Object(n.jsx)(d.a,{variant:"h5",children:e["team-2"]})})]})}),Object(n.jsx)(p.a,{children:Object(n.jsxs)(x.a,{container:!0,justify:"center",children:[Object(n.jsx)(g.a,{onClick:function(){b(e.unique_id)},variant:"contained",color:"primary",children:"show detail"}),Object(n.jsxs)(g.a,{style:{marginLeft:5},variant:"contained",color:"primary",children:["Start Time ",new Date(e.dateTimeGMT).toLocaleString()]})]})})]}),Object(n.jsxs)(y.a,{open:h,onClose:O,children:[Object(n.jsx)(v.a,{id:"alert-dialog-title",children:"Match Detail..."}),Object(n.jsx)(S.a,{children:Object(n.jsxs)(k.a,{id:"alert-dialog-discription",children:[Object(n.jsx)(d.a,{children:r.stat}),Object(n.jsxs)(d.a,{children:["Match ",Object(n.jsxs)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:[r.matchStarted?"Started":"Still not started"," "]})]}),Object(n.jsxs)(d.a,{children:["Score ",Object(n.jsxs)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:[" ",r.score]})]})]})}),Object(n.jsx)(F.a,{children:Object(n.jsx)(g.a,{onClick:O,color:"primary",autoFocus:!0,children:"Close"})})]})]})};var L=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),c=e[0],r=e[1];return Object(i.useEffect)((function(){w().then((function(t){r(t.matches),console.log(t.matches)})).catch((function(t){return alert("could not load data")}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(O,{}),Object(n.jsx)(d.a,{variant:"h3",style:{marginTop:20},children:"Welcome to my live score app"}),Object(n.jsxs)(x.a,{container:!0,children:[Object(n.jsx)(x.a,{sm:"2"}),Object(n.jsx)(x.a,{sm:"8",children:c.map((function(t){return Object(n.jsx)(a.a.Fragment,{children:"Twenty20"===t.type?Object(n.jsx)(C,{match:t},t.unique_id):" "},t.unique_id)}))})]})]})},D=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),i(t),a(t),r(t)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),D()}},[[68,1,2]]]);
//# sourceMappingURL=main.02006217.chunk.js.map