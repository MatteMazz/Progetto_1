(this.webpackJsonpprogetto_1=this.webpackJsonpprogetto_1||[]).push([[0],{86:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(29),i=c.n(n),l=(c(86),c(146)),s=c(145),o=c(147),u=c(143),d=c(144),b=c(151),v=c(16),j=c(2);function m(e){var t=Object(v.f)();return Object(j.jsx)(d.a,{sx:e.det?{margin:5,maxWidth:500}:{},children:Object(j.jsxs)(b.a,{onClick:function(){return t.push(e.det?"/progetto_1":"/det/".concat(e.prod.UPC))},children:[Object(j.jsx)(s.a,{component:"img",height:"auto",image:"https://via.placeholder.com/350",alt:"prodotto"}),Object(j.jsxs)(l.a,{children:[Object(j.jsx)(o.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.prod.name}),Object(j.jsxs)(o.a,{sx:{fontSize:15},variant:"body2",color:"text.secondary",children:["$ ",e.prod.price.current.value]}),Object(j.jsx)(o.a,{sx:{marginTop:1},variant:"body2",color:"text.secondary",children:e.prod.availability.stock>0?Object(j.jsx)(u.a,{label:"In stock"}):Object(j.jsx)(u.a,{label:"Out of stock",variant:"outlined"})})]})]})})}var p=[{UPC:"1",name:"Turbine\u2122 Rotor",price:{current:{value:206},currency:"USD"},availability:{stock:1},variants:[]},{UPC:"2",name:"ERIKA COLOR",price:{current:{value:167},currency:"USD"},availability:{stock:10},variants:[{UPC:"3",name:"ERIKA COLOR",price:{current:{value:132},currency:"USD"},availability:{stock:0}},{UPC:"4",name:"ERIKA COLOR",price:{current:{value:157},currency:"USD"},availability:{stock:2}}]},{UPC:"4",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:1},variants:[{UPC:"5",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:16}},{UPC:"6",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}},{UPC:"7",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:11}},{UPC:"8",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:3}},{UPC:"9",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:2}},{UPC:"10",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:2}},{UPC:"11",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}}]},{UPC:"12",name:"Round",price:{current:{value:244},currency:"USD"},availability:{stock:226},variants:[]},{UPC:"13",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9},variants:[{UPC:"14",name:"ROUND METAL",price:{current:{value:154},currency:"USD"},availability:{stock:14}},{UPC:"15",name:"ROUND METAL",price:{current:{value:153},currency:"USD"},availability:{stock:4}},{UPC:"16",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9}}]},{UPC:"17",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:1},variants:[{UPC:"18",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:5}},{UPC:"19",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:6}},{UPC:"20",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"21",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}}]},{UPC:"22",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:0},variants:[{UPC:"23",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:2}},{UPC:"24",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:2}},{UPC:"25",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:1}},{UPC:"26",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"27",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:1}},{UPC:"28",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"29",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"30",name:"Springfield XL",price:{current:{value:136},currency:"USD"},availability:{stock:0}}]}];function O(e){return Object(j.jsx)(m,{prod:p.find((function(t){return t.UPC===e.match.params.UPC})),det:!0})}var y=c(13),h=c(142),x=c(138),U=c(148),S=c(153),C=c(152);function f(e){var t=e.selected,c=e.setSelected;return Object(j.jsxs)(C.a,{sx:{marginTop:2.5},children:[Object(j.jsx)(S.a,{variant:"in"===t?"contained":"outlined",onClick:function(){c("in"===t?"none":"in")},children:"IN STOCK"}),Object(j.jsx)(S.a,{variant:"out"===t?"contained":"outlined",onClick:function(){c("out"===t?"none":"out")},children:"OUT OF STOCK"})]})}var k=c(139);function g(e){var t=e.searchTerm,c=e.setSearchTerm;return Object(j.jsx)(U.a,{sx:{marginTop:1.5},children:Object(j.jsxs)(h.a,{container:!0,spacing:2,children:[Object(j.jsx)(h.a,{item:!0,xs:8,children:Object(j.jsx)(k.a,{fullWidth:!0,id:"outlined-basic",label:"Search",variant:"outlined",value:t,onChange:function(e){c(e.target.value)}})}),Object(j.jsx)(h.a,{item:!0,xs:4,children:Object(j.jsx)(S.a,{sx:{marginTop:1},variant:"contained",onClick:function(){c("")},children:"Reset"})})]})})}function D(e){var t=e.searchTerm,c=e.setSearchTerm,a=e.selected,n=e.setSelected;return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(x.a,{}),Object(j.jsx)(U.a,{sx:{borderBottom:1,display:"block"},children:Object(j.jsxs)(h.a,{container:!0,spacing:2,children:[Object(j.jsx)(h.a,{item:!0,xs:12,sm:4,md:4,children:Object(j.jsx)("img",{style:{display:"block"},src:"https://via.placeholder.com/150x80",alt:"prod"})}),Object(j.jsx)(h.a,{item:!0,xs:12,sm:4,md:4,children:Object(j.jsx)(f,{selected:a,setSelected:n})}),Object(j.jsx)(h.a,{item:!0,xs:12,sm:4,md:4,children:Object(j.jsx)(g,{searchTerm:t,setSearchTerm:c})})]})})]})}var P=c(149);function T(){return Object(j.jsxs)(U.a,{sx:{textAlign:"right",padding:3,backgroundColor:"#BDBDBD"},children:[Object(j.jsx)(P.a,{href:"https://twitter.com/?lang=it",children:"TWITTER | "}),Object(j.jsx)(P.a,{href:"https://www.facebook.com/",children:"FACEBOOK"})]})}function A(){var e=Object(r.useState)("none"),t=Object(y.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(""),i=Object(y.a)(n,2),l=i[0],s=i[1];return Object(j.jsxs)(h.a,{container:!0,direction:"column",style:{minHeight:"100vh"},children:[Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsx)(D,{selected:c,setSelected:a,searchTerm:l,setSearchTerm:s})}),Object(j.jsx)(h.a,{flex:1,item:!0,xs:12,children:Object(j.jsx)(h.a,{p:2,container:!0,spacing:{xs:1,md:2},columns:{xs:2,sm:8,md:12},children:null===p||void 0===p?void 0:p.filter((function(e){var t="in"===c&&e.availability.stock>0,r="out"===c&&e.availability.stock<=0;return!(!t&&!r&&"none"!==c)})).filter((function(e){return!!e.name.toLowerCase().includes(l)})).map((function(e,t){return Object(j.jsx)(h.a,{item:!0,xs:2,sm:4,md:3,children:Object(j.jsx)(m,{prod:e,det:!1})},t)}))})}),Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsx)(T,{})})]})}function R(){return Object(j.jsxs)(v.c,{children:[Object(j.jsx)(v.a,{path:"/det/:UPC",component:O}),Object(j.jsx)(v.a,{path:"/",component:A})]})}var L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,154)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),r(e),a(e),n(e),i(e)}))},I=c(40);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(I.a,{basename:"/",children:Object(j.jsx)(R,{})})}),document.getElementById("root")),L()}},[[94,1,2]]]);
//# sourceMappingURL=main.89ed8252.chunk.js.map