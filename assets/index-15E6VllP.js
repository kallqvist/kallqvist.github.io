var k=Object.defineProperty;var A=(o,n,e)=>n in o?k(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e;var p=(o,n,e)=>(A(o,typeof n!="symbol"?n+"":n,e),e);import{r as a,j as s,F as G,l as z,t as I,m as O}from"./index-LpZb3aPR.js";import{G as B,S as D,b as U,u as l,a as V,V as i}from"./index--gJK9da2.js";import"./react-spring_web.modern-XE_gvtFi.js";class m extends B{constructor(e){super(e);p(this,"age",0)}getRGBA(){return[255,0,100,255]}}class L extends D{createGrid(n){return new U({...n,createEmpty:e=>new m(e)})}step(n){this.grid.forEach(e=>{e.age+=n})}}function q(){const o=new i(160,90),n=a.useRef(null),e=a.useRef(void 0),[u,x]=l(!0),[h,j]=l(void 0),[c,g]=l(new i(0,0));a.useEffect(()=>{const t=n.current;t&&(u.current?t.start():t.stop())},[u]);function w(){return new L({gridOptions:{size:o}})}function S(t){t.preventDefault()}function C(){j(void 0),e.current=void 0}function F(t){const d=t.target,{x:r,y:f,width:M,height:y}=d.getBoundingClientRect(),P=new i(r,f),E=new i(M,y);g(new i(t.clientX,t.clientY).subtract(P).divide(E).multiply(o).floor())}function R({grid:t}){b(t)}function b(t){if(h.current===void 0)return;(e.current?t.getPositionsInLine(e.current,c.current):[c.current]).forEach(r=>{t.get(r)&&t.set(r,new m(t))}),e.current=c.current}function v(){var t;(t=n.current)==null||t.restart()}return s.jsxs("div",{className:"route fluid",children:[s.jsxs("div",{style:{position:"absolute",top:0,width:"100%",display:"flex",justifyContent:"center",background:"black",color:"white",zIndex:100},children:[s.jsx("button",{onClick:()=>x(t=>!t),children:u.current?s.jsxs(s.Fragment,{children:[s.jsx(G,{}),"stop"]}):s.jsxs(s.Fragment,{children:[s.jsx(z,{}),"start"]})}),s.jsxs("button",{onClick:()=>{var t;return(t=n.current)==null?void 0:t.step(1)},children:[s.jsx(I,{}),"step"]}),s.jsxs("button",{onClick:()=>v(),children:[s.jsx(O,{}),"reset"]})]}),s.jsx(V,{ref:n,initSimulation:w,onStep:R,onMouseUp:C,onMouseMove:F,onContextMenu:S})]})}export{q as default};
