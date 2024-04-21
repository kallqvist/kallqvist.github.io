var B=Object.defineProperty;var N=(r,n,t)=>n in r?B(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var P=(r,n,t)=>(N(r,typeof n!="symbol"?n+"":n,t),t),U=(r,n,t)=>{if(!n.has(r))throw TypeError("Cannot "+t)};var R=(r,n,t)=>{if(n.has(r))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(r):n.set(r,t)};var M=(r,n,t)=>(U(r,n,"access private method"),t);import{r as y,j as w}from"./index-Lmnj-Ws3.js";import{G as V,S as X,e as Y,n as _,V as e,u as A,b as k}from"./index-kz889-NO.js";import"./react-spring_web.modern-P6pRlssA.js";class p extends V{constructor(t,o){super(t);P(this,"alive",!1);this.alive=o||!1}getRGBA(){return this.alive?[255,0,0,255]:[0,0,0,0]}}var v,C;class q extends X{constructor(){super(...arguments);R(this,v)}createGrid(t){return new Y({...t,createEmpty:o=>new p(o)})}step(){const t=this.grid.map(o=>o.alive);this.grid.forEach(o=>{const s=M(this,v,C).call(this,t,o);o.alive!==s&&this.grid.setAtIndex(o.index,new p(this.grid,s))})}}v=new WeakSet,C=function(t,o){let s=0;return _.forEach(f=>{if(!o.position)return;const b=this.grid.position2index(o.position.add(f));t[b]===!0&&s++}),o.alive&&(s<2||s>3)?!1:!o.alive&&s===3?!0:o.alive};function Q(){const r=e.create(160,90),n=y.useRef(null),t=y.useRef(void 0),[o,s]=A(void 0),[f,b]=A(e.create(0,0));function G(){const i=new q({gridOptions:{size:r}});return O(i.grid),i}function O(i){const a={glider:`01
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
                001`};function c(u,h){u.trim().split(`
`).forEach((d,x)=>{d=d.trim();for(let l=0;l<d.length;l++)Number.parseInt(d[l])!==0&&i.set(e.create(l,x).add(h),new p(i,!0))})}[e.create(0,5),e.create(0,26),e.create(0,47),e.create(0,68)].forEach(u=>{c(a.grabbyEdge,u)}),[e.create(30,20),e.create(30,30),e.create(30,40),e.create(30,50),e.create(30,60),e.create(40,20),e.create(40,30),e.create(40,40),e.create(40,50),e.create(40,60),e.create(50,20),e.create(50,30),e.create(50,40),e.create(50,50),e.create(50,60)].forEach(u=>{c(a.glider,u)})}function I(i){var E;const a=(E=n.current)==null?void 0:E.simulation;if(!a)return;const c=i.target,{x:g,y:m,width:u,height:h}=c.getBoundingClientRect(),d=e.create(g,m),x=e.create(u,h),l=e.create(i.clientX,i.clientY).subtract(d).divide(x).multiply(r).floor(),S=a.grid.get(l);S&&s(S.alive?"erase":"add")}function L(){s(void 0),t.current=void 0}function j(i){const a=i.target,{x:c,y:g,width:m,height:u}=a.getBoundingClientRect(),h=e.create(c,g),d=e.create(m,u);b(e.create(i.clientX,i.clientY).subtract(h).divide(d).multiply(r).floor())}function z(i){const{grid:a}=i;D(a)}function D(i){if(o.current===void 0)return;(t.current?i.getCellsInLine(t.current,f.current):[i.getAtPosition(f.current)]).forEach(c=>{c&&i.setAtIndex(c.index,new p(i,o.current==="add"))}),t.current=f.current}return w.jsx("div",{className:"route game-of-life",children:w.jsx(k,{ref:n,initSimulation:G,onStep:z,onMouseDown:I,onMouseUp:L,onMouseMove:j})})}export{Q as default};
