<<<<<<< HEAD:assets/index-1929de69.js
import{r as f,u as B,_ as G,j as e}from"./index-80757357.js";import{u as j,a as b}from"./react-spring_web.modern-ce45b14e.js";const _="/assets/photo-16fcab66.png";function a(c){const{side:z,emotion:D,followCursor:g,lookAngle:m,lookDistance:u,maxLookDistance:x,eyeRotation:s,irisSize:n,pupilSize:r,style:M,irisStyle:N,pupilStyle:E}={side:"left",lookDistance:0,maxLookDistance:1,irisSize:.6,pupilSize:.25,...c},[d,S]=f.useState(m),[o,$]=f.useState(u),y={mass:.4,tension:100,friction:6},[A]=j({config:y,transform:`rotate(${d||0}deg)`},[d]),[L]=j({config:y,transform:`translate3d(0, ${(-o+n*o)*100}%, 0) scale3d(1, ${30-(o||0)*30+70}%, 1)`,top:`calc(50% - ${n*100}% / 2)`,left:`calc(50% - ${n*100}% / 2)`,width:`${n*100}%`,height:`${n*100}%`},[d,o,n]),[P]=j({config:y,transform:`translate3d(0, ${(-o+r*o)*100}%, 0) scale3d(1, ${30-(o||0)*30+70}%, 1)`,top:`calc(50% - ${r*100}% / 2)`,left:`calc(50% - ${r*100}% / 2)`,width:`${r*100}%`,height:`${r*100}%`},[d,o,r]),k=f.useRef(null);B({onMouseMove:({event:i})=>{var R;if(!g)return;const t=(R=k.current)==null?void 0:R.getBoundingClientRect();if(!t)return;const h=t.x+t.width/2,p=t.y+t.height/2,w=i.clientX-h,Y=i.clientY-p;let v=Math.atan2(Y,w)/Math.PI*180+90;const q=Math.min(I([h,p],[i.clientX,i.clientY])/(t.width/2),x||1);s!==void 0&&(v-=s),$(q),S(C=>{let l=v-(C||0)%360;return l<-180&&(l+=360),l>180&&(l-=360),(C||0)+l})}},{target:window}),f.useEffect(()=>{if(g)return;let i=m,t=u;i!==void 0&&(t||(t=x),s!==void 0&&(i-=s)),t=Math.min(u,x),S(i),$(t)},[m,u,g]);function I(i,t){return Math.sqrt(i.reduce((h,p,w)=>h+Math.pow(p-t[w],2),0))}const X=G.chain(["eye",z,D]).compact().join(" ").value();return e.jsxs("div",{className:X,ref:k,style:{...s!==void 0?{transform:`rotate(${s}deg)`}:void 0,...M},children:[e.jsxs(b.div,{className:"inner",style:A,children:[e.jsx(b.div,{className:"iris",style:{...N,...L}}),e.jsx(b.div,{className:"pupil",style:{...E,...P}})]}),e.jsx("div",{className:"highlight"})]})}function O(c){return e.jsxs("div",{className:"eyes",children:[e.jsx(a,{...c,side:"left"}),e.jsx(a,{...c,side:"right"})]})}function Q(){return e.jsxs("div",{className:"eyes",style:{width:"500px",height:"300px",backgroundImage:`url(${_})`,backgroundPosition:"top center",backgroundSize:"cover",borderRadius:"0.5em",aspectRatio:"16/9"},children:[e.jsx(a,{followCursor:!0,emotion:"sad",eyeRotation:-10,pupilSize:.45,style:{position:"absolute",top:"39%",left:"34%",width:"30px",height:"30px"},irisStyle:{background:"brown"}}),e.jsx(a,{followCursor:!0,emotion:"sad",side:"right",eyeRotation:-10,irisSize:.5,pupilSize:.3,style:{position:"absolute",top:"37%",left:"41%",width:"30px",height:"30px"},irisStyle:{background:"brown"}}),e.jsx(a,{followCursor:!0,eyeRotation:10,style:{position:"absolute",top:"29%",left:"53%",width:"30px",height:"30px"}}),e.jsx(a,{followCursor:!0,side:"right",eyeRotation:10,style:{position:"absolute",top:"31%",left:"62%",width:"30px",height:"30px"}})]})}export{a as E,Q as a,O as b};
=======
import{r as f,u as B,_ as G,j as e}from"./index-78101ce2.js";import{u as j,a as b}from"./react-spring_web.modern-467223c1.js";const _="/assets/photo-16fcab66.png";function a(c){const{side:z,emotion:D,followCursor:g,lookAngle:m,lookDistance:u,maxLookDistance:x,eyeRotation:s,irisSize:n,pupilSize:r,style:M,irisStyle:N,pupilStyle:E}={side:"left",lookDistance:0,maxLookDistance:1,irisSize:.6,pupilSize:.25,...c},[d,S]=f.useState(m),[o,$]=f.useState(u),y={mass:.4,tension:100,friction:6},[A]=j({config:y,transform:`rotate(${d||0}deg)`},[d]),[L]=j({config:y,transform:`translate3d(0, ${(-o+n*o)*100}%, 0) scale3d(1, ${30-(o||0)*30+70}%, 1)`,top:`calc(50% - ${n*100}% / 2)`,left:`calc(50% - ${n*100}% / 2)`,width:`${n*100}%`,height:`${n*100}%`},[d,o,n]),[P]=j({config:y,transform:`translate3d(0, ${(-o+r*o)*100}%, 0) scale3d(1, ${30-(o||0)*30+70}%, 1)`,top:`calc(50% - ${r*100}% / 2)`,left:`calc(50% - ${r*100}% / 2)`,width:`${r*100}%`,height:`${r*100}%`},[d,o,r]),k=f.useRef(null);B({onMouseMove:({event:i})=>{var R;if(!g)return;const t=(R=k.current)==null?void 0:R.getBoundingClientRect();if(!t)return;const h=t.x+t.width/2,p=t.y+t.height/2,w=i.clientX-h,Y=i.clientY-p;let v=Math.atan2(Y,w)/Math.PI*180+90;const q=Math.min(I([h,p],[i.clientX,i.clientY])/(t.width/2),x||1);s!==void 0&&(v-=s),$(q),S(C=>{let l=v-(C||0)%360;return l<-180&&(l+=360),l>180&&(l-=360),(C||0)+l})}},{target:window}),f.useEffect(()=>{if(g)return;let i=m,t=u;i!==void 0&&(t||(t=x),s!==void 0&&(i-=s)),t=Math.min(u,x),S(i),$(t)},[m,u,g]);function I(i,t){return Math.sqrt(i.reduce((h,p,w)=>h+Math.pow(p-t[w],2),0))}const X=G.chain(["eye",z,D]).compact().join(" ").value();return e.jsxs("div",{className:X,ref:k,style:{...s!==void 0?{transform:`rotate(${s}deg)`}:void 0,...M},children:[e.jsxs(b.div,{className:"inner",style:A,children:[e.jsx(b.div,{className:"iris",style:{...N,...L}}),e.jsx(b.div,{className:"pupil",style:{...E,...P}})]}),e.jsx("div",{className:"highlight"})]})}function O(c){return e.jsxs("div",{className:"eyes",children:[e.jsx(a,{...c,side:"left"}),e.jsx(a,{...c,side:"right"})]})}function Q(){return e.jsxs("div",{className:"eyes",style:{width:"500px",height:"300px",backgroundImage:`url(${_})`,backgroundPosition:"top center",backgroundSize:"cover",borderRadius:"0.5em",aspectRatio:"16/9"},children:[e.jsx(a,{followCursor:!0,emotion:"sad",eyeRotation:-10,pupilSize:.45,style:{position:"absolute",top:"39%",left:"34%",width:"30px",height:"30px"},irisStyle:{background:"brown"}}),e.jsx(a,{followCursor:!0,emotion:"sad",side:"right",eyeRotation:-10,irisSize:.5,pupilSize:.3,style:{position:"absolute",top:"37%",left:"41%",width:"30px",height:"30px"},irisStyle:{background:"brown"}}),e.jsx(a,{followCursor:!0,eyeRotation:10,style:{position:"absolute",top:"29%",left:"53%",width:"30px",height:"30px"}}),e.jsx(a,{followCursor:!0,side:"right",eyeRotation:10,style:{position:"absolute",top:"31%",left:"62%",width:"30px",height:"30px"}})]})}export{a as E,Q as a,O as b};
>>>>>>> f1e1800f4482fbd03ba600a8327d869b1c04aa5f:assets/index-4853151c.js
