var D=Object.defineProperty;var L=(r,t,n)=>t in r?D(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var G=(r,t,n)=>(L(r,typeof t!="symbol"?t+"":t,n),n),y=(r,t,n)=>{if(!t.has(r))throw TypeError("Cannot "+n)};var l=(r,t,n)=>(y(r,t,"read from private field"),n?n.call(r):t.get(r)),R=(r,t,n)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,n)},g=(r,t,n,i)=>(y(r,t,"write to private field"),i?i.call(r,n):t.set(r,n),n);import{r as d,j as s,F as U,i as V,l as z,m as N}from"./index-O0Fl2C7K.js";import{G as X,a as Y,u as f,b as J,V as A}from"./index-IS-IpSmw.js";class b extends X{constructor(n){super(n);G(this,"age",0)}getRGBA(){return[255,0,100,255]}}var o,u;class K{constructor(t){R(this,o,void 0);R(this,u,!1);g(this,o,new Y({...t,createEmpty:n=>new b(n)}))}start(){g(this,u,!0)}stop(){g(this,u,!1)}isRunning(){return l(this,u)}getGrid(){return l(this,o)}restart(){this.stop(),l(this,o).clear()}step(t){l(this,o).forEach(n=>{n.age+=t})}}o=new WeakMap,u=new WeakMap;function $(){const n=.08333333333333333,i=d.useRef(),[E,P]=f(void 0),m=d.useRef(),h=d.useRef(void 0),[k,S]=f(void 0),[F,T]=f(new A(0,0)),[p,q]=f(!0),[j,v]=f(-1);d.useEffect(()=>(i.current=new K({width:160,height:90}),P(i.current.getGrid()),w(),m.current=requestAnimationFrame(M),()=>{m.current!==void 0&&cancelAnimationFrame(m.current)}),[]),d.useEffect(()=>{const e=i.current;e&&(p.current?e.start():e.stop())},[p]);function H(e){e.preventDefault()}function I(){S(void 0),h.current=void 0}function O(e){const a=e.target,{x:c,y:x,width:C,height:B}=a.getBoundingClientRect();T(new A(Math.floor((e.clientX-c)/C*160),Math.floor((e.clientY-x)/B*90)))}function M(e){if(j.current===-1)v(e);else{const a=(e-j.current)/1e3;if(a>n){const c=i.current;if(!c)return;W(c.getGrid()),p.current&&c.step(a),v(e)}}m.current=requestAnimationFrame(M)}function W(e){if(k.current===void 0||!i.current)return;(h.current?e.getPositionsInLine(h.current,F.current):[F.current]).forEach(x=>{e.get(x)&&e.set(x,new b(e))}),h.current=F.current}function w(){const e=i.current;e&&e.restart()}return s.jsxs("div",{className:"route fluid",children:[s.jsxs("div",{style:{position:"absolute",top:0,width:"100%",display:"flex",justifyContent:"center",background:"black",color:"white",zIndex:100},children:[s.jsx("button",{onClick:()=>q(e=>!e),children:p.current?s.jsxs(s.Fragment,{children:[s.jsx(U,{}),"stop"]}):s.jsxs(s.Fragment,{children:[s.jsx(V,{}),"start"]})}),s.jsxs("button",{onClick:()=>{var e;return(e=i.current)==null?void 0:e.step(1)},children:[s.jsx(z,{}),"step"]}),s.jsxs("button",{onClick:()=>w(),children:[s.jsx(N,{}),"reset"]})]}),s.jsx(J,{grid:E.current,onMouseUp:I,onMouseMove:O,onContextMenu:H})]})}export{$ as default};
