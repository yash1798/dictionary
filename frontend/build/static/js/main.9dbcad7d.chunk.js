(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),r=n.n(a),i=n(11),o=n.n(i),s=(n(104),n(170)),l=n(82),j=n(13),d=n(41),u=n.n(d),b=n(52),h=n(17),p=n(46),O=n(153),f=n(156),x=n(88),m=n(172),g=n(150),v=n(16),y=n(79),w=n.n(y),C=n(155),S=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginLeft:0,width:"20%"},e.breakpoints.down("sm"),{marginLeft:e.spacing(1),width:"50%"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function k(e){var t=e.handleTerm,n=S(),r=Object(a.useState)(""),i=Object(h.a)(r,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){t(o)}),[o,t]),Object(c.jsx)("div",{className:n.root,children:Object(c.jsx)(O.a,{position:"static",children:Object(c.jsx)(C.a,{maxWidth:"md",children:Object(c.jsxs)(f.a,{children:[Object(c.jsx)(x.a,{className:n.title,variant:"h5",noWrap:!0,children:"Vocabulary"}),Object(c.jsxs)("div",{className:n.search,children:[Object(c.jsx)("div",{className:n.searchIcon,children:Object(c.jsx)(w.a,{})}),Object(c.jsx)(m.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},onChange:function(e){return s(e.target.value)}})]})]})})})})}var N=n(87),T=n(80),R=n(157),W=n(158),E=n(159),I=n(161),A=n(162),z=n(160),F=n(81),L=n.n(F),B=Object(g.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},lexical:{fontStyle:"italic",color:"grey",fontSize:"1.5rem",margin:"2rem 0"}}})),G=r.a.forwardRef((function(e,t){return Object(c.jsx)(R.a,Object(T.a)({direction:"up",ref:t},e))}));function J(e){var t=e.open,n=e.handleClose,a=e.word,r=B();return Object(c.jsxs)(W.a,{fullScreen:!0,open:t,TransitionComponent:G,children:[Object(c.jsx)(O.a,{className:r.appBar,children:Object(c.jsx)(C.a,{children:Object(c.jsxs)(f.a,{children:[Object(c.jsx)(x.a,{variant:"h5",className:r.title,children:a.text}),Object(c.jsx)(E.a,{onClick:function(){return n(!1)},edge:"start",color:"inherit","aria-label":"close",children:Object(c.jsx)(z.a,{})})]})})}),Object(c.jsx)(C.a,{children:a.entries.map((function(e,t){return Object(c.jsxs)(I.a,{container:!0,direction:"column",spacing:5,children:[Object(c.jsxs)(I.a,{item:!0,children:[Object(c.jsxs)(x.a,{className:r.lexical,children:["(",e.lexicalCategory,")"]}),Object(c.jsx)(I.a,{container:!0,item:!0,direction:"column",spacing:5,children:e.definitions.map((function(e,t){return Object(c.jsx)(I.a,{item:!0,children:Object(c.jsxs)(x.a,{variant:"h5",children:[Object(c.jsx)(L.a,{style:{fontSize:10}})," ",e]})},t)}))})]}),Object(c.jsx)(A.a,{})]},t)}))})]})}var D=Object(g.a)({lexicalTerm:{fontStyle:"italic",color:"grey",fontSize:"1rem",marginTop:"1rem"},paper:{padding:"1.5rem 0",cursor:"pointer"},text:{fontWeight:"700"}}),H=function(e){var t=e.word,n=D(),r=Object(a.useState)(!1),i=Object(h.a)(r,2),o=i[0],s=i[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N.a,{onClick:function(){s(!0)},elevation:2,className:n.paper,children:Object(c.jsxs)(C.a,{maxWidth:"md",children:[Object(c.jsx)(x.a,{variant:"h4",className:n.text,children:t.text}),t.entries.map((function(e,t){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsxs)(x.a,{variant:"h6",className:n.lexicalTerm,children:["(",e.lexicalCategory,")"]}),Object(c.jsx)(x.a,{variant:"h5",children:e.definitions[0]})]},t)}))]})}),Object(c.jsx)(J,{handleClose:function(e){return s(e)},open:o,word:t})]})},K=Object(g.a)({root:{backgroundColor:"white",borderTopLeftRadius:"5rem",borderTopRightRadius:"5rem"}}),P=function(e){var t=e.wordArray,n=K();return Object(c.jsx)("div",{className:n.root,children:t.map((function(e,t){return Object(c.jsx)(H,{word:e},t)}))})},V=n(121),q=n(164),M=n(165),Q=n(166),U=n(167),X=n(171),Y=n(168),Z=n(169),$=n(163),_=Object(g.a)((function(e){return{backdrop:{zIndex:"11 !important",color:"#fff"}}}));function ee(e){var t=e.handleReload,n=_(),r=Object(a.useState)(!1),i=Object(h.a)(r,2),o=i[0],s=i[1],l=Object(a.useState)(""),j=Object(h.a)(l,2),d=j[0],p=j[1],O=Object(a.useState)(""),f=Object(h.a)(O,2),x=f[0],m=f[1],g=Object(a.useState)(!1),v=Object(h.a)(g,2),y=v[0],w=v[1],C=function(){s(!1),m("")},S=function(){var e=Object(b.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,fetch("/api/addWord",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({text:d})}).then((function(e){return e.json()}));case 3:n=e.sent,w(!1),"success"===n.status?(s(!1),t(!0)):"fail"===n.status&&(m(n.payload),setTimeout((function(){m("")}),5e3));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E.a,{color:"primary",onClick:function(){s(!0)},style:{backgroundColor:"#720D5d"},children:Object(c.jsx)($.a,{fontSize:"large",style:{color:"white"}})}),Object(c.jsx)(V.a,{className:n.backdrop,open:y,children:Object(c.jsx)(q.a,{color:"inherit"})}),Object(c.jsxs)(W.a,{open:o,onClose:C,style:{top:"2rem",position:"fixed"},children:[Object(c.jsx)(M.a,{id:"form-dialog-title",children:"Add a new Word"}),Object(c.jsxs)(Q.a,{children:[Object(c.jsx)(U.a,{style:{color:"#E30425"},children:x}),Object(c.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"word",label:"Word",type:"text",fullWidth:!0,onChange:function(e){return p(e.target.value)}})]}),Object(c.jsxs)(Y.a,{children:[Object(c.jsx)(Z.a,{onClick:C,color:"primary",children:"Cancel"}),Object(c.jsx)(Z.a,{onClick:S,color:"primary",children:"Add"})]})]})]})}var te=Object(g.a)((function(e){return{homepage:{position:"relative",minHeight:"100vh"},add:{position:"fixed",bottom:"10vh",right:"5vw",backgroundColor:e.palette.primary}}})),ne=function(){var e=te(),t=Object(a.useState)([]),n=Object(h.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)([]),s=Object(h.a)(o,2),l=s[0],j=s[1],d=Object(a.useState)(!1),p=Object(h.a)(d,2),O=p[0],f=p[1],x=Object(a.useState)(""),m=Object(h.a)(x,2),g=m[0],v=m[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/getAllWords",{method:"GET"}).then((function(e){return e.json()}));case 2:t=e.sent,i(t),f(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[O]),Object(a.useEffect)((function(){if(g){var e=r.filter((function(e){return e.text.includes(g)}));j(e)}else j(r)}),[g,r,l]),Object(c.jsxs)("div",{className:e.homepage,children:[Object(c.jsx)(k,{handleTerm:function(e){return v(e)}}),Object(c.jsx)(P,{wordArray:l}),Object(c.jsx)("div",{className:e.add,children:Object(c.jsx)(ee,{handleReload:function(e){return f(e)}})})]})},ce=function(){return Object(c.jsx)(l.a,{children:Object(c.jsx)(j.c,{children:Object(c.jsx)(j.a,{path:"/",component:ne})})})},ae=n(84),re=Object(ae.a)({palette:{primary:{main:"#5D1049"},secondary:{main:"#E30425"}},typography:{fontFamily:"Kumbh Sans"}});var ie=function(){return Object(c.jsx)(s.a,{theme:re,children:Object(c.jsx)(ce,{})})};o.a.render(Object(c.jsx)(ie,{}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.9dbcad7d.chunk.js.map