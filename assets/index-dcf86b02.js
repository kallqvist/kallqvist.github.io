import{r as f,u as _,_ as F,j as e}from"./index-15cf2d42.js";import{u as k,a as b}from"./react-spring_web.modern-38271b91.js";const H="/assets/photo-16fcab66.png";function a(l){const{side:m,emotion:D,followCursor:g,lookAngle:x,lookDistance:u,maxLookDistance:y,eyeRotation:s,irisSize:n,pupilSize:r,simple:M,style:N,irisStyle:E,pupilStyle:A,onClick:L}={side:"left",lookDistance:0,maxLookDistance:1,irisSize:.6,pupilSize:.25,...l},[d,S]=f.useState(x),[o,$]=f.useState(u),w={mass:.4,tension:100,friction:6},[P]=k({config:w,transform:`rotate(${d||0}deg)`},[d]),[I]=k({config:w,transform:`translate3d(0, ${(-o+n*o)*100}%, 0) scale3d(1, ${30-(o||0)*30+70}%, 1)`,top:`calc(50% - ${n*100}% / 2)`,left:`calc(50% - ${n*100}% / 2)`,width:`${n*100}%`,height:`${n*100}%`},[d,o,n]),[X]=k({config:w,transform:`translate3d(0, ${(-o+r*o)*100}%, 0) scale3d(1, ${30-(o||0)*30+70}%, 1)`,top:`calc(50% - ${r*100}% / 2)`,left:`calc(50% - ${r*100}% / 2)`,width:`${r*100}%`,height:`${r*100}%`},[d,o,r]),v=f.useRef(null);_({onMouseMove:({event:i})=>{var R;if(!g)return;const t=(R=v.current)==null?void 0:R.getBoundingClientRect();if(!t)return;const h=t.x+t.width/2,p=t.y+t.height/2,j=i.clientX-h,B=i.clientY-p;let C=Math.atan2(B,j)/Math.PI*180+90;const G=Math.min(Y([h,p],[i.clientX,i.clientY])/(t.width/2),y||1);s!==void 0&&(C-=s),$(G),S(z=>{let c=C-(z||0)%360;return c<-180&&(c+=360),c>180&&(c-=360),(z||0)+c})}},{target:window}),f.useEffect(()=>{if(g)return;let i=x,t=u;i!==void 0&&(t||(t=y),s!==void 0&&(i-=s)),t=Math.min(u,y),S(i),$(t)},[x,u,g]);function Y(i,t){return Math.sqrt(i.reduce((h,p,j)=>h+Math.pow(p-t[j],2),0))}const q=F.chain(["eye",M?"simple":void 0,m,D]).compact().join(" ").value();return e.jsxs("div",{ref:v,className:q,onClick:L,style:{...s!==void 0?{transform:`rotate(${s}deg)`}:void 0,...N},children:[e.jsxs(b.div,{className:"inner",style:P,children:[e.jsx(b.div,{className:"iris",style:{...E,...I}}),e.jsx(b.div,{className:"pupil",style:{...A,...X}})]}),e.jsx("div",{className:"highlight"})]})}function T(l){const{onClick:m}=l;return e.jsxs("div",{className:"eyes",onClick:m,children:[e.jsx(a,{...l,side:"left"}),e.jsx(a,{...l,side:"right"})]})}function U(){return e.jsxs("div",{className:"eyes",style:{width:"500px",height:"300px",backgroundImage:`url(${H})`,backgroundPosition:"top center",backgroundSize:"cover",borderRadius:"0.5em",aspectRatio:"16/9"},children:[e.jsx(a,{followCursor:!0,emotion:"sad",eyeRotation:-10,pupilSize:.45,style:{position:"absolute",top:"39%",left:"34%",width:"30px",height:"30px"},irisStyle:{background:"brown"}}),e.jsx(a,{followCursor:!0,emotion:"sad",side:"right",eyeRotation:-10,irisSize:.5,pupilSize:.3,style:{position:"absolute",top:"37%",left:"41%",width:"30px",height:"30px"},irisStyle:{background:"brown"}}),e.jsx(a,{followCursor:!0,eyeRotation:10,style:{position:"absolute",top:"29%",left:"53%",width:"30px",height:"30px"}}),e.jsx(a,{followCursor:!0,side:"right",eyeRotation:10,style:{position:"absolute",top:"31%",left:"62%",width:"30px",height:"30px"}})]})}export{a as E,U as a,T as b};
