var U=Object.defineProperty;var V=(s,t,i)=>t in s?U(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var P=(s,t,i)=>(V(s,typeof t!="symbol"?t+"":t,i),i),X=(s,t,i)=>{if(!t.has(s))throw TypeError("Cannot "+i)};var C=(s,t,i)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,i)};var M=(s,t,i)=>(X(s,t,"access private method"),i);import{r as m,j as r,F as Y,l as T,t as _,m as q}from"./index-LpZb3aPR.js";import{G as H,S as J,b as K,n as Q,u as R,a as W,V as e}from"./index--gJK9da2.js";import"./react-spring_web.modern-XE_gvtFi.js";class x extends H{constructor(i,o){super(i);P(this,"alive",!1);this.alive=o||!1}getRGBA(){return this.alive?[255,0,0,255]:[0,0,0,0]}}var v,F;class Z extends J{constructor(){super(...arguments);C(this,v)}createGrid(i){return new K({...i,createEmpty:o=>new x(o)})}step(){const i=this.grid.map(o=>o.alive);this.grid.forEach(o=>{const a=M(this,v,F).call(this,i,o);o.alive!==a&&this.grid.setAtIndex(o.index,new x(this.grid,a))})}}v=new WeakSet,F=function(i,o){let a=0;return Q.forEach(h=>{if(!o.position)return;const b=this.grid.position2index(o.position.add(h));i[b]===!0&&a++}),o.alive&&(a<2||a>3)?!1:!o.alive&&a===3?!0:o.alive};function sn(){const s=new e(160,90),t=m.useRef(null),i=m.useRef(void 0),[o,a]=R(void 0),[h,b]=R(new e(0,0)),[S,G]=m.useState(!0);m.useEffect(()=>{const n=t.current;n&&(S?n.start():n.stop())},[S]);function A(){const n=new Z({gridOptions:{size:s}});return D(n.grid),n}function D(n){const u={glider:`01
                001
                111`,grabbyEdge:`001
                001
                011
                0
                1100111
                10101
                011
                0
                011
                10101
                1100111
                0
                011
                001
                001`};function c(l,w){l.trim().split(`
`).forEach((d,j)=>{d=d.trim();for(let f=0;f<d.length;f++)Number.parseInt(d[f])!==0&&n.set(new e(f,j).add(w),new x(n,!0))})}[new e(0,5),new e(0,26),new e(0,47),new e(0,68)].forEach(l=>{c(u.grabbyEdge,l)}),[new e(30,20),new e(30,30),new e(30,40),new e(30,50),new e(30,60),new e(40,20),new e(40,30),new e(40,40),new e(40,50),new e(40,60),new e(50,20),new e(50,30),new e(50,40),new e(50,50),new e(50,60)].forEach(l=>{c(u.glider,l)})}function I(n){n.preventDefault()}function O(n){var E;const u=(E=t.current)==null?void 0:E.simulation;if(!u)return;const c=n.target,{x:p,y:g,width:l,height:w}=c.getBoundingClientRect(),d=new e(p,g),j=new e(l,w),f=new e(n.clientX,n.clientY).subtract(d).divide(j).multiply(s).floor(),y=u.grid.get(f);y&&a(y.alive?"erase":"add")}function k(){a(void 0),i.current=void 0}function z(n){const u=n.target,{x:c,y:p,width:g,height:l}=u.getBoundingClientRect(),w=new e(c,p),d=new e(g,l);b(new e(n.clientX,n.clientY).subtract(w).divide(d).multiply(s).floor())}function L(n){const{grid:u}=n;B(u)}function B(n){if(o.current===void 0)return;(i.current?n.getPositionsInLine(i.current,h.current):[h.current]).forEach(c=>{n.get(c)&&n.set(c,new x(n,o.current==="add"))}),i.current=h.current}function N(){const n=t.current;n&&n.restart()}return r.jsxs("div",{className:"route game-of-life",children:[r.jsxs("div",{style:{position:"absolute",top:0,width:"100%",display:"flex",justifyContent:"center",background:"black",color:"white",zIndex:100},children:[r.jsx("button",{onClick:()=>G(n=>!n),children:S?r.jsxs(r.Fragment,{children:[r.jsx(Y,{}),"stop"]}):r.jsxs(r.Fragment,{children:[r.jsx(T,{}),"start"]})}),r.jsxs("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.step(Date.now())},children:[r.jsx(_,{}),"step"]}),r.jsxs("button",{onClick:()=>N(),children:[r.jsx(q,{}),"reset"]})]}),r.jsx(W,{ref:t,limitFps:12,initSimulation:A,onStep:L,onMouseDown:O,onMouseUp:k,onMouseMove:z,onContextMenu:I})]})}export{sn as default};
