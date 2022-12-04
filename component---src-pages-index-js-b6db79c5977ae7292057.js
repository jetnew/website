"use strict";(self.webpackChunkjet_new=self.webpackChunkjet_new||[]).push([[678],{643:function(e,t,n){n.r(t),n.d(t,{Head:function(){return U},default:function(){return V}});var r=n(7294),a=n(1883),o=n(9428),i=n(72),s=n(2061),l=n(1647),c=n(3366),u=n(7462),p=n(6010),m=n(5408),d=n(9707),v=n(4780),f=n(5031),g=n(1951),w=n(7878),b=n(4218);var x=r.createContext(),h=n(1588),Z=n(8562);function $(e){return(0,Z.Z)("MuiGrid",e)}const E=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var k=(0,h.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...E.map((e=>`grid-xs-${e}`)),...E.map((e=>`grid-sm-${e}`)),...E.map((e=>`grid-md-${e}`)),...E.map((e=>`grid-lg-${e}`)),...E.map((e=>`grid-xl-${e}`))]),S=n(5893);const M=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function N(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function j({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const r=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return r.slice(0,r.indexOf(n))}const y=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:a,item:o,spacing:i,wrap:s,zeroMinWidth:l,breakpoints:c}=n;let u=[];r&&(u=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const r=[];return t.forEach((t=>{const a=e[t];Number(a)>0&&r.push(n[`spacing-${t}-${String(a)}`])})),r}(i,c,t));const p=[];return c.forEach((e=>{const r=n[e];r&&p.push(t[`grid-${e}-${String(r)}`])})),[t.root,r&&t.container,o&&t.item,l&&t.zeroMinWidth,...u,"row"!==a&&t[`direction-xs-${String(a)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...p]}})((({ownerState:e})=>(0,u.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,m.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,m.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${k.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let a={};if(n&&0!==r){const t=(0,m.P$)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=j({breakpoints:e.breakpoints.values,values:t})),a=(0,m.k9)({theme:e},t,((t,r)=>{var a;const o=e.spacing(t);return"0px"!==o?{marginTop:`-${N(o)}`,[`& > .${k.item}`]:{paddingTop:N(o)}}:null!=(a=n)&&a.includes(r)?{}:{marginTop:0,[`& > .${k.item}`]:{paddingTop:0}}}))}return a}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let a={};if(n&&0!==r){const t=(0,m.P$)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=j({breakpoints:e.breakpoints.values,values:t})),a=(0,m.k9)({theme:e},t,((t,r)=>{var a;const o=e.spacing(t);return"0px"!==o?{width:`calc(100% + ${N(o)})`,marginLeft:`-${N(o)}`,[`& > .${k.item}`]:{paddingLeft:N(o)}}:null!=(a=n)&&a.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${k.item}`]:{paddingLeft:0}}}))}return a}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,a)=>{let o={};if(t[a]&&(n=t[a]),!n)return r;if(!0===n)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=(0,m.P$)({values:t.columns,breakpoints:e.breakpoints.values}),s="object"==typeof i?i[a]:i;if(null==s)return r;const l=Math.round(n/s*1e8)/1e6+"%";let c={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${l} + ${N(n)})`;c={flexBasis:e,maxWidth:e}}}o=(0,u.Z)({flexBasis:l,flexGrow:0,maxWidth:l},c)}return 0===e.breakpoints.values[a]?Object.assign(r,o):r[e.breakpoints.up(a)]=o,r}),{})}));const P=e=>{const{classes:t,container:n,direction:r,item:a,spacing:o,wrap:i,zeroMinWidth:s,breakpoints:l}=e;let c=[];n&&(c=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e=`spacing-${t}-${String(r)}`;n.push(e)}})),n}(o,l));const u=[];l.forEach((t=>{const n=e[t];n&&u.push(`grid-${t}-${String(n)}`)}));const p={root:["root",n&&"container",a&&"item",s&&"zeroMinWidth",...c,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==i&&`wrap-xs-${String(i)}`,...u]};return(0,v.Z)(p,$,t)},C=r.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiGrid"}),{breakpoints:a}=(0,w.Z)(b.Z),o=(0,d.Z)(n),{className:i,columns:s,columnSpacing:l,component:m="div",container:v=!1,direction:f="row",item:h=!1,rowSpacing:Z,spacing:$=0,wrap:E="wrap",zeroMinWidth:k=!1}=o,N=(0,c.Z)(o,M),j=Z||$,C=l||$,W=r.useContext(x),R=v?s||12:W,z={},q=(0,u.Z)({},N);a.keys.forEach((e=>{null!=N[e]&&(z[e]=N[e],delete q[e])}));const G=(0,u.Z)({},o,{columns:R,container:v,direction:f,item:h,rowSpacing:j,columnSpacing:C,wrap:E,zeroMinWidth:k,spacing:$},z,{breakpoints:a.keys}),I=P(G);return(0,S.jsx)(x.Provider,{value:R,children:(0,S.jsx)(y,(0,u.Z)({ownerState:G,className:(0,p.Z)(I.root,i),as:m,ref:t},q))})}));var W=C;var R=e=>{let{post:t}=e;return r.createElement(W,{container:!0,spacing:2},r.createElement(W,{item:!0},r.createElement(l.Z,{variant:"button"},t.date)),r.createElement(W,{item:!0},r.createElement(s.Z,{to:"/blog/"+t.slug},r.createElement(l.Z,{variant:"body1"},r.createElement("b",null,t.title)))))},z=n(1796);var q=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function G(e){return(0,Z.Z)("MuiPaper",e)}(0,h.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const I=["className","component","elevation","square","variant"],F=(0,f.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,u.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,u.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,z.Fq)("#fff",q(t.elevation))}, ${(0,z.Fq)("#fff",q(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))}));var B=r.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiPaper"}),{className:r,component:a="div",elevation:o=1,square:i=!1,variant:s="elevation"}=n,l=(0,c.Z)(n,I),m=(0,u.Z)({},n,{component:a,elevation:o,square:i,variant:s}),d=(e=>{const{square:t,elevation:n,variant:r,classes:a}=e,o={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,v.Z)(o,G,a)})(m);return(0,S.jsx)(F,(0,u.Z)({as:a,ownerState:m,className:(0,p.Z)(d.root,r),ref:t},l))}));function L(e){return(0,Z.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);const O=["className","raised"],T=(0,f.ZP)(B,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var H=r.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiCard"}),{className:r,raised:a=!1}=n,o=(0,c.Z)(n,O),i=(0,u.Z)({},n,{raised:a}),s=(e=>{const{classes:t}=e;return(0,v.Z)({root:["root"]},L,t)})(i);return(0,S.jsx)(T,(0,u.Z)({className:(0,p.Z)(s.root,r),elevation:a?8:void 0,ref:t,ownerState:i},o))}));function _(e){return(0,Z.Z)("MuiCardContent",e)}(0,h.Z)("MuiCardContent",["root"]);const A=["className","component"],D=(0,f.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var J=r.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiCardContent"}),{className:r,component:a="div"}=n,o=(0,c.Z)(n,A),i=(0,u.Z)({},n,{component:a}),s=(e=>{const{classes:t}=e;return(0,v.Z)({root:["root"]},_,t)})(i);return(0,S.jsx)(D,(0,u.Z)({as:a,className:(0,p.Z)(s.root,r),ownerState:i,ref:t},o))}));var K=e=>{let{project:t}=e;return r.createElement(H,{variant:"outlined",sx:{p:1}},r.createElement(s.Z,{to:"/portfolio/"+t.slug,underline:"none"},r.createElement(J,null,r.createElement(l.Z,{variant:"button"},t.date),r.createElement(l.Z,{variant:"body1"},r.createElement("b",null,t.title)))))},Q=n(9357);const U=()=>r.createElement(Q.Z,{title:"Home Page"});var V=()=>{const e=(0,a.K2)("286033883"),t=e.allMdx.nodes.filter((e=>e.internal.contentFilePath.match(new RegExp("/blog/")))),n=e.allMdx.nodes.filter((e=>e.internal.contentFilePath.match(new RegExp("/portfolio/"))));return r.createElement(i.Z,{pageTitle:"Hi! I'm Jet :)"},r.createElement("p",null,"I'm a data scientist in Singapore. I write about data science, engineering and research. I like games and building AI to play games."),r.createElement("p",null,"More ",r.createElement(o.Z,{to:"/about"},"about me"),"."),r.createElement("h1",null,"Latest Posts"),r.createElement(W,{container:!0,spacing:2},r.createElement(W,{item:!0,xs:6},r.createElement(R,{post:t[0].frontmatter})),r.createElement(W,{item:!0,xs:6},r.createElement(R,{post:t[1].frontmatter}))),r.createElement("h1",null,"Projects"),r.createElement(W,{container:!0,spacing:2},r.createElement(W,{item:!0,xs:4},r.createElement(K,{project:n[0].frontmatter})),r.createElement(W,{item:!0,xs:4},r.createElement(K,{project:n[1].frontmatter})),r.createElement(W,{item:!0,xs:4},r.createElement(K,{project:n[2].frontmatter}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b6db79c5977ae7292057.js.map