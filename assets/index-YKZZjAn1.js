var U=Object.defineProperty;var V=(r,n,i)=>n in r?U(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i;var C=(r,n,i)=>(V(r,typeof n!="symbol"?n+"":n,i),i),X=(r,n,i)=>{if(!n.has(r))throw TypeError("Cannot "+i)};var w=(r,n,i)=>{if(n.has(r))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(r):n.set(r,i)};var M=(r,n,i)=>(X(r,n,"access private method"),i);import{r as x,j as o,F as Y,l as T,m as _,n as q}from"./index-uaQOYxUX.js";import{G as H,S as J,c as K,n as Q,V as t,u as R,b as W}from"./index-hTUbDY-1.js";import"./react-spring_web.modern-83pUniV1.js";class v extends H{constructor(i,s){super(i);C(this,"alive",!1);this.alive=s||!1}getRGBA(){return this.alive?[255,0,0,255]:[0,0,0,0]}}var b,F;class Z extends J{constructor(){super(...arguments);w(this,b)}createGrid(i){return new K({...i,createEmpty:s=>new v(s)})}step(){const i=this.grid.map(s=>s.alive);this.grid.forEach(s=>{const a=M(this,b,F).call(this,i,s);s.alive!==a&&this.grid.setAtIndex(s.index,new v(this.grid,a))})}}b=new WeakSet,F=function(i,s){let a=0;return Q.forEach(h=>{if(!s.position)return;const S=this.grid.position2index(s.position.add(h));i[S]===!0&&a++}),s.alive&&(a<2||a>3)?!1:!s.alive&&a===3?!0:s.alive};function ie(){const r=t.create(160,90),n=x.useRef(null),i=x.useRef(void 0),[s,a]=R(void 0),[h,S]=R(t.create(0,0)),[j,A]=x.useState(!0);x.useEffect(()=>{const e=n.current;e&&(j?e.start():e.stop())},[j]);function G(){const e=new Z({gridOptions:{size:r}});return I(e.grid),e}function I(e){const c={glider:`01
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
                001`};function u(l,p){l.trim().split(`
`).forEach((d,y)=>{d=d.trim();for(let f=0;f<d.length;f++)Number.parseInt(d[f])!==0&&e.set(t.create(f,y).add(p),new v(e,!0))})}[t.create(0,5),t.create(0,26),t.create(0,47),t.create(0,68)].forEach(l=>{u(c.grabbyEdge,l)}),[t.create(30,20),t.create(30,30),t.create(30,40),t.create(30,50),t.create(30,60),t.create(40,20),t.create(40,30),t.create(40,40),t.create(40,50),t.create(40,60),t.create(50,20),t.create(50,30),t.create(50,40),t.create(50,50),t.create(50,60)].forEach(l=>{u(c.glider,l)})}function D(e){e.preventDefault()}function O(e){var P;const c=(P=n.current)==null?void 0:P.simulation;if(!c)return;const u=e.target,{x:g,y:m,width:l,height:p}=u.getBoundingClientRect(),d=t.create(g,m),y=t.create(l,p),f=t.create(e.clientX,e.clientY).subtract(d).divide(y).multiply(r).floor(),E=c.grid.get(f);E&&a(E.alive?"erase":"add")}function k(){a(void 0),i.current=void 0}function z(e){const c=e.target,{x:u,y:g,width:m,height:l}=c.getBoundingClientRect(),p=t.create(u,g),d=t.create(m,l);S(t.create(e.clientX,e.clientY).subtract(p).divide(d).multiply(r).floor())}function L(e){const{grid:c}=e;B(c)}function B(e){if(s.current===void 0)return;(i.current?e.getCellsInLine(i.current,h.current):[e.getAtPosition(h.current)]).forEach(u=>{u&&e.setAtIndex(u.index,new v(e,s.current==="add"))}),i.current=h.current}function N(){const e=n.current;e&&e.clear()}return o.jsxs("div",{className:"route game-of-life",children:[o.jsxs("div",{style:{position:"absolute",top:0,width:"100%",display:"flex",justifyContent:"center",background:"black",color:"white",zIndex:100},children:[o.jsx("button",{onClick:()=>A(e=>!e),children:j?o.jsxs(o.Fragment,{children:[o.jsx(Y,{}),"stop"]}):o.jsxs(o.Fragment,{children:[o.jsx(T,{}),"start"]})}),o.jsxs("button",{onClick:()=>{var e;return(e=n.current)==null?void 0:e.step(Date.now())},children:[o.jsx(_,{}),"step"]}),o.jsxs("button",{onClick:()=>N(),children:[o.jsx(q,{}),"reset"]})]}),o.jsx(W,{ref:n,limitFps:12,initSimulation:G,onStep:L,onMouseDown:O,onMouseUp:k,onMouseMove:z,onContextMenu:D})]})}export{ie as default};