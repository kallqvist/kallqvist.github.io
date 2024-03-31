var K=Object.defineProperty;var Q=(s,n,e)=>n in s?K(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e;var T=(s,n,e)=>(Q(s,typeof n!="symbol"?n+"":n,e),e),S=(s,n,e)=>{if(!n.has(s))throw TypeError("Cannot "+e)};var d=(s,n,e)=>(S(s,n,"read from private field"),e?e.call(s):n.get(s)),E=(s,n,e)=>{if(n.has(s))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(s):n.set(s,e)},F=(s,n,e,i)=>(S(s,n,"write to private field"),i?i.call(s,e):n.set(s,e),e);var q=(s,n,e)=>(S(s,n,"access private method"),e);import{r as b,j as o,F as W,i as Z,m as $,l as ee}from"./index-Kqp9EvPw.js";import{G as te,C as ne,n as re,u as R,a as se,V as r}from"./index-CyfE-eYX.js";class C extends te{constructor(e,i){super(e);T(this,"alive",!1);this.alive=i||!1}getRGBA(){return this.alive?[255,0,0,255]:[0,0,0,0]}}var a,w,P,B;class ie{constructor(n){E(this,P);E(this,a,void 0);E(this,w,!1);F(this,a,new ne({...n,createEmpty:e=>new C(e)}))}start(){F(this,w,!0)}stop(){F(this,w,!1)}isRunning(){return d(this,w)}getGrid(){return d(this,a)}restart(){d(this,a).clear()}step(n){if(!d(this,w))return;const e=d(this,a).map(i=>i.alive);d(this,a).forEach(i=>{let g=q(this,P,B).call(this,e,i);i.alive!==g&&d(this,a).setAtIndex(i.index,new C(d(this,a),g))})}}a=new WeakMap,w=new WeakMap,P=new WeakSet,B=function(n,e){let i=0;return re.forEach(g=>{if(!e.position)return;const p=d(this,a).position2index(e.position.add(g));n[p]===!0&&i++}),e.alive&&(i<2||i>3)?!1:!e.alive&&i===3?!0:e.alive};function ce(){const s=new r(160,90),n=1/12,e=b.useRef(),[i,g]=R(void 0),p=b.useRef(),j=b.useRef(void 0),[k,D]=R(void 0),[M,N]=R(new r(0,0)),[G,U]=R(!0),[L,z]=R(-1);b.useEffect(()=>(e.current=new ie({size:s}),g(e.current.getGrid()),O(),V(),p.current=requestAnimationFrame(I),()=>{p.current!==void 0&&cancelAnimationFrame(p.current)}),[]),b.useEffect(()=>{const t=e.current;t&&(G.current?t.start():t.stop())},[G.current]);function V(){const t={glider:`01
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
                001`};function u(c,v){c.trim().split(`
`).forEach((f,x)=>{var y;f=f.trim();for(let m=0;m<f.length;m++)Number.parseInt(f[m])!==0&&((y=i.current)==null||y.set(new r(m,x).add(v),new C(i.current,!0)))})}[new r(0,5),new r(0,26),new r(0,47),new r(0,68)].forEach(c=>{u(t.grabbyEdge,c)}),[new r(30,20),new r(30,30),new r(30,40),new r(30,50),new r(30,60),new r(40,20),new r(40,30),new r(40,40),new r(40,50),new r(40,60),new r(50,20),new r(50,30),new r(50,40),new r(50,50),new r(50,60)].forEach(c=>{u(t.glider,c)})}function X(t){t.preventDefault()}function Y(t){var A;const u=t.target,{x:l,y:h,width:c,height:v}=u.getBoundingClientRect(),f=new r(l,h),x=new r(c,v),y=new r(t.clientX,t.clientY).subtract(f).divide(x).multiply(s).floor(),m=(A=i.current)==null?void 0:A.get(y);m&&D(m.alive?"erase":"add")}function _(){D(void 0),j.current=void 0}function H(t){const u=t.target,{x:l,y:h,width:c,height:v}=u.getBoundingClientRect(),f=new r(l,h),x=new r(c,v);N(new r(t.clientX,t.clientY).subtract(f).divide(x).multiply(s).floor())}function I(t){if(L.current===-1)z(t);else{const u=(t-L.current)/1e3;if(u>n){const l=e.current;if(!l)return;J(l.getGrid()),l.step(u),z(t)}}p.current=requestAnimationFrame(I)}function J(t){if(k.current===void 0||!e.current)return;(j.current?t.getPositionsInLine(j.current,M.current):[M.current]).forEach(h=>{t.get(h)&&t.set(h,new C(t,k.current==="add"))}),j.current=M.current}function O(){const t=e.current;t&&t.restart()}return o.jsxs("div",{className:"route game-of-life",children:[o.jsxs("div",{style:{position:"absolute",top:0,width:"100%",display:"flex",justifyContent:"center",background:"black",color:"white",zIndex:100},children:[o.jsx("button",{onClick:()=>U(t=>!t),children:G.current?o.jsxs(o.Fragment,{children:[o.jsx(W,{}),"stop"]}):o.jsxs(o.Fragment,{children:[o.jsx(Z,{}),"start"]})}),o.jsxs("button",{onClick:()=>{var t;return(t=e.current)==null?void 0:t.step(1)},children:[o.jsx($,{}),"step"]}),o.jsxs("button",{onClick:()=>O(),children:[o.jsx(ee,{}),"reset"]})]}),o.jsx(se,{debugDraw:!0,grid:i.current,onMouseDown:Y,onMouseUp:_,onMouseMove:H,onContextMenu:X})]})}export{ce as default};