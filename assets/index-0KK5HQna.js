var I=Object.defineProperty;var O=(s,t,n)=>t in s?I(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var f=(s,t,n)=>(O(s,typeof t!="symbol"?t+"":t,n),n),z=(s,t,n)=>{if(!t.has(s))throw TypeError("Cannot "+n)};var x=(s,t,n)=>(z(s,t,"read from private field"),n?n.call(s):t.get(s)),g=(s,t,n)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,n)};import{r as a,j as i,q as D,s as B,t as U,F as V}from"./index-IM_J7gAs.js";import{G as q,S as L,V as o,b as N,u as m,a as T}from"./index-xy6M_Rlh.js";import"./react-spring_web.modern-7vUs08G8.js";var l;class c extends q{constructor(){super(...arguments);f(this,"age",0);g(this,l,30)}step(n){this.age+=n,this.age>x(this,l)&&this.grid.setAtIndex(this.index,this.grid.createEmpty()),this.grid.registerChanged(this)}getRGBA(){return[255,0,100,255]}}l=new WeakMap;class X extends L{constructor(t){super(t),this.grid.set(new o(3,3),new c(this.grid))}createGrid(t){return new N({...t,createEmpty:n=>new c(n)})}step(t){this.grid.forEach(n=>{n.step(t)})}}function Q(){const s=new o(160,90),t=a.useRef(null),n=a.useRef(void 0),[d,w]=a.useState(!0),[j,S]=m(void 0),[h,C]=m(new o(0,0));a.useEffect(()=>{const e=t.current;e&&(d?e.start():e.stop())},[d]);function b(){const e=new X({gridOptions:{size:s}}),r=e.grid;return r.set(new o(3,3),new c(r)),e}function F(e){e.preventDefault()}function R(){S(void 0),n.current=void 0}function v(e){const r=e.target,{x:u,y:p,width:A,height:E}=r.getBoundingClientRect(),k=new o(u,p),G=new o(A,E);C(new o(e.clientX,e.clientY).subtract(k).divide(G).multiply(s).floor())}function y({grid:e}){M(e)}function M(e){if(j.current===void 0)return;(n.current?e.getPositionsInLine(n.current,h.current):[h.current]).forEach(u=>{e.get(u)&&e.set(u,new c(e))}),n.current=h.current}function P(){var e;(e=t.current)==null||e.restart()}return i.jsxs("div",{className:"route fluid",children:[i.jsxs("div",{style:{position:"absolute",top:0,width:"100%",display:"flex",justifyContent:"center",background:"black",color:"white",zIndex:100},children:[i.jsx("button",{onClick:()=>w(e=>!e),children:d?i.jsxs(i.Fragment,{children:[i.jsx(D,{}),"stop"]}):i.jsxs(i.Fragment,{children:[i.jsx(B,{}),"start"]})}),i.jsxs("button",{onClick:()=>{var e;return(e=t.current)==null?void 0:e.step(1)},children:[i.jsx(U,{}),"step"]}),i.jsxs("button",{onClick:()=>P(),children:[i.jsx(V,{}),"reset"]})]}),i.jsx(T,{ref:t,renderOptions:{debugDraw:!0},initSimulation:b,onStep:y,onMouseUp:R,onMouseMove:v,onContextMenu:F})]})}export{Q as default};