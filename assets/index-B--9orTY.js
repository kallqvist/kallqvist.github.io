import{_ as h,j as e,r as p,R as y}from"./index-DXWUy1KW.js";import{E as s}from"./index-PHWpciil.js";import"./react-spring_web.modern-CMtpY8LM.js";function u(i){const{emotion:t,style:r,onClick:o}=i,n=h.chain(["mouth",t]).compact().join(" ").value();return e.jsx("div",{className:n,style:r,onClick:o})}const x="/assets/photo-7P5qFgXK.png";function g(){return e.jsxs("div",{className:"photo",style:{width:"500px",height:"300px",backgroundImage:`url(${x})`,backgroundPosition:"top center",backgroundSize:"cover",borderRadius:"0.5em",aspectRatio:"16/9"},children:[e.jsx(s,{followCursor:!0,emotion:"sad",eyeRotation:-10,pupilSize:.45,style:{position:"absolute",top:"39%",left:"34%",width:"30px",height:"30px"},irisStyle:{background:"brown"}}),e.jsx(s,{followCursor:!0,emotion:"sad",side:"right",eyeRotation:-10,irisSize:.5,pupilSize:.3,style:{position:"absolute",top:"37%",left:"41%",width:"30px",height:"30px"},irisStyle:{background:"brown"}}),e.jsx(s,{followCursor:!0,eyeRotation:10,style:{position:"absolute",top:"29%",left:"53%",width:"30px",height:"30px"}}),e.jsx(s,{followCursor:!0,side:"right",eyeRotation:10,style:{position:"absolute",top:"31%",left:"62%",width:"30px",height:"30px"}}),e.jsx(u,{emotion:"happy",style:{position:"absolute",top:"51%",left:"54%",width:"3em",transform:"rotate(10deg)"}})]})}const m="/assets/ainar-bzzhq_qH.png";function b(i){const{eyeProps:t}=i,{left:r,right:o}=t,[n,c]=p.useState(!1),a={followCursor:n,simple:!0,style:{position:"absolute",top:"46%"}};return e.jsx("div",{className:"ainar",onClick:()=>c(d=>!d),children:e.jsxs("div",{style:{position:"relative",width:"150px",height:"150px",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundImage:`url(${m})`},children:[e.jsx(s,{...a,...r||t,side:"left",style:{...a.style,left:"12%"}}),e.jsx(s,{...a,...o||t,side:"right",style:{...a.style,right:"12%"}}),e.jsx(u,{emotion:(r||t||{}).emotion,style:{position:"absolute",left:"40%",bottom:"12%"}})]})})}const l=[{irisStyle:{background:"green"}},{emotion:"sad",pupilSize:.3},{emotion:"happy",pupilSize:.45,irisStyle:{background:"purple"}},{emotion:"angry",irisSize:.4,pupilSize:.2,irisStyle:{background:"black",opacity:.8},pupilStyle:{background:"red",border:"1px solid rgba(0, 0, 0, 0.8)"}},{emotion:"suspicious",maxLookDistance:.5},{left:{emotion:"suspicious",maxLookDistance:.5},right:{emotion:"surprised"}},{emotion:"surprised",irisStyle:{background:"brown"}}];function S(){const i={followCursor:!0},[t,r]=p.useState(l[0]);return e.jsxs("div",{className:"route eyes",children:[e.jsx(g,{}),e.jsxs(y,{id:"konami",children:[e.jsx(b,{eyeProps:t}),e.jsx("div",{children:l.map((o,n)=>e.jsxs("div",{className:"eyes",onClick:()=>r(o),children:[e.jsx(s,{...i,...o.left?o.left:o,side:"left"}),e.jsx(s,{...i,...o.right||o,side:"right"})]},n))})]})]})}export{S as default};
