var ht=Object.defineProperty;var ut=(s,t,e)=>t in s?ht(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var l=(s,t,e)=>(ut(s,typeof t!="symbol"?t+"":t,e),e),G=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var c=(s,t,e)=>(G(s,t,"read from private field"),e?e.call(s):t.get(s)),R=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},M=(s,t,e,i)=>(G(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var q=(s,t,e)=>(G(s,t,"access private method"),e);import{r as S,_ as T,j as p}from"./index-swLNbJvt.js";function j(s){const[t,e]=S.useState(s),i=S.useRef(t);return[i,r=>{r instanceof Function?(i.current=r(i.current),e(r)):(i.current=r,e(r))}]}class h{constructor(t,e){l(this,"x");l(this,"y");this.x=t,this.y=e}add(t){return new h(this.x+t.x,this.y+t.y)}}const y={NW:new h(-1,-1),N:new h(0,-1),NE:new h(1,-1),E:new h(1,0),SE:new h(1,1),S:new h(0,1),SW:new h(-1,1),W:new h(-1,0)};function lt(s,t){const[e,i,n]=s;if(t===void 0)return`hsl(${e}, ${i}%, ${n}%)`;const[r,o,d]=C(s,t);return`hsl(${r}, ${o}%, ${d}%)`}function C(s,t=[Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10)]){const[e,i,n]=s,[r=0,o=0,d=0]=t||[];return[Math.min(Math.max(e+Math.round(Math.random()*(r*2))-r,0),360),Math.min(Math.max(i+Math.round(Math.random()*(o*2))-o,0),100),Math.min(Math.max(n+Math.round(Math.random()*(d*2))-d,0),100)]}var E;class Y{constructor(t,e){l(this,"empty",!1);l(this,"color");l(this,"grid");l(this,"tryWakeNeighbours");R(this,E,!0);l(this,"dir",{NW:()=>this.getNeighbourInDirection(y.NW),N:()=>this.getNeighbourInDirection(y.N),NE:()=>this.getNeighbourInDirection(y.NE),E:()=>this.getNeighbourInDirection(y.E),SE:()=>this.getNeighbourInDirection(y.SE),S:()=>this.getNeighbourInDirection(y.S),SW:()=>this.getNeighbourInDirection(y.SW),W:()=>this.getNeighbourInDirection(y.W)});const{isEmpty:i,tryWakeNeighbours:n}={tryWakeNeighbours:!0,...e};this.grid=t,this.tryWakeNeighbours=n,this.empty=i||!1,this.color=lt(this.getHSL())}isSleeping(){return c(this,E)}sleep(){M(this,E,!0)}awake(){M(this,E,!1)}getPosition(){return this.grid.positionOf(this)}getNeighbourInDirection(t){const e=this.grid,i=e.positionOf(this).add(t);return e.getAtPosition(i)}swap(t){this.getHSL(),this.grid.swap(this,t)}}E=new WeakMap;class et extends Y{constructor(t){super(t,{isEmpty:!0})}awake(){}getHSL(){return[50,0,20]}step(){}}class z extends Y{}class P extends Y{constructor(e,i){super(e,i);l(this,"dispersionRate");l(this,"fallDirection");l(this,"erosionFactor");const{dispersionRate:n,fallDirection:r,erosionFactor:o}=i||{};this.dispersionRate=n||5,this.fallDirection=r||1,this.erosionFactor=o||.01}step(){let e=!1;const i=[-this.dispersionRate,this.dispersionRate];Math.random()>=.5&&i.reverse(),this.tryWakeNeighbours&&!this.isSleeping()&&i.every(r=>{const o=this.getNeighbourInDirection(new h(r,0));o!=null&&o.empty||o==null||o.awake(),this.erosionFactor>0&&o instanceof it&&Math.random()<this.erosionFactor&&this.swap(o)});const n=this.getNeighbourInDirection(new h(0,this.fallDirection));n!=null&&n.empty?(this.swap(n),e=!0):i.every(r=>{const o=this.grid,d=o.positionOf(this);return o.getPositionsInLine(d,d.add(new h(r,0)),{excludeStart:!0}).every(k=>{const m=o.getAtPosition(k);return m!=null&&m.empty?(this.swap(m),e=!0,!1):!(m instanceof z)}),!e}),e||this.sleep()}}class it extends z{step(){let t=!1;const e=[-1,1];Math.random()>=.5&&e.reverse();const i=this.dir.S();i!=null&&i.empty||i instanceof P?(this.swap(i),t=!0):this.isSleeping()||e.every(n=>{const r=this.getNeighbourInDirection(new h(n,1));return r!=null&&r.empty||r instanceof P?(this.swap(r),t=!0,!1):!0}),t?e.every(n=>{const r=this.getNeighbourInDirection(new h(n,0));return r!=null&&r.empty||r==null||r.awake(),!0}):this.sleep()}}class dt extends it{getHSL(){return C([27.8,31.8,58.6])}}class ft extends P{constructor(t,e){super(t,{...e,dispersionRate:3})}getHSL(){return C([216,100,60],[5,5,3])}}class gt extends z{awake(){}step(){}}class mt extends gt{getHSL(){return C([150,5,58.6],[5,0,5])}}class B extends P{constructor(t,e){super(t,{fallDirection:-1,dispersionRate:2,erosionFactor:0,tryWakeNeighbours:!1,...e})}step(){super.step();let t=!1;if(Math.random()<.98){const e=this.dir.N();e instanceof P&&!(e instanceof B)&&(this.swap(e),t=!0)}else{const e=[-this.dispersionRate,this.dispersionRate];Math.random()>=.5&&e.reverse(),e.every(i=>{const n=this.getNeighbourInDirection(new h(i,0));return n!=null&&n.empty||n instanceof P?(this.swap(n),t=!0,!1):!0})}t||this.sleep()}}class pt extends B{getHSL(){return C([200,10,38.6],[5,10,5])}}var g,b;class tt{constructor(t,e){l(this,"width");l(this,"height");R(this,g,void 0);R(this,b,void 0);this.width=t,this.height=e,M(this,g,[]),M(this,b,new Set([])),this.clear()}clear(){for(let t=0;t<this.width*this.height;t++)c(this,g)[t]=new et(this)}indexOf(t,e){return t?c(this,g).indexOf(t,e):-1}positionOf(t,e){const i=this.indexOf(t,e);return this.index2position(i)}forEach(t){const e=[];for(let i=0;i<c(this,g).length;i++){const n=c(this,g)[i];if(e.indexOf(n)!==-1)continue;if(t(n,i)===!1)break;e.push(n)}}forEachChanged(t,e=!0){c(this,b).forEach(i=>t(i)),e&&c(this,b).clear()}position2index(t){const{x:e,y:i}=t;return e<0||e>=this.width||i<0||i>=this.height?-1:e+i*this.width}index2position(t){let e=Math.floor(t/this.width),i=t-e*this.width;return new h(i,e)}get(t){return this.getAtPosition(t)}set(t,e){this.setAtPosition(t,e)}getPositionsInLine(t,e,i){const{excludeStart:n,excludeEnd:r}=i||{},o=e.x-t.x,d=e.y-t.y;if(o===0&&d===0)return[t];const I=o<0?-1:1,k=d<0?-1:1,m=Math.abs(o),v=Math.abs(d),$=m>=v,F=Math.min(m,v),W=Math.max(m,v),A=F/W,L=[];for(let D=n?1:0;D<(r?W:W+1);D++){const O=Math.round(D*A);$?L.push(new h(t.x+D*I,t.y+O*k)):L.push(new h(t.x+O*I,t.y+D*k))}return L}getAtPosition(t){const e=this.position2index(t);if(e!==-1)return this.getAtIndex(e)}setAtPosition(t,e){const i=this.position2index(t);this.setAtIndex(i,e)}getAtIndex(t){return c(this,g)[t]}setAtIndex(t,e){c(this,g)[t]=e,c(this,b).add(e)}swap(t,e){const i=this.indexOf(t),n=this.indexOf(e),r=c(this,g)[i];this.setAtIndex(i,c(this,g)[n]),this.setAtIndex(n,r),t.awake(),e.awake()}}g=new WeakMap,b=new WeakMap;var x,N,H,X;class xt{constructor(t){R(this,H);R(this,x,void 0);R(this,N,!0);l(this,"materialPalette");const{width:e,height:i}=t;M(this,x,new tt(e,i)),this.materialPalette=q(this,H,X).call(this,c(this,x))}isRunning(){return c(this,N)}start(){M(this,N,!0)}stop(){M(this,N,!1)}restart(){stop();const{width:t,height:e}=c(this,x);M(this,x,new tt(t,e));const i=q(this,H,X).call(this,c(this,x));for(const n in i)this.materialPalette[n]=i[n];this.start()}getGrid(){return c(this,x)}step(){if(!c(this,N))return;c(this,x).forEach(e=>{e.empty||e.step(-1)})}}x=new WeakMap,N=new WeakMap,H=new WeakSet,X=function(t){return{empty:()=>new et(t),sand:()=>new dt(t),water:()=>new ft(t),stone:()=>new mt(t),smoke:()=>new pt(t)}};function yt(){const i=S.useRef(null),n=S.useRef(null),r=S.useRef(),o=S.useRef(),[d,I]=j(!1),[k,m]=j([0,0]),[v,$]=j(void 0),[F,W]=j(!1),[A,L]=j("sand"),[D,O]=S.useState([]);S.useEffect(()=>(r.current=new xt({width:128,height:128}),O(T.keys(r.current.materialPalette)),Q(),o.current=requestAnimationFrame(U),()=>{o.current!==void 0&&cancelAnimationFrame(o.current)}),[]);function st(a){a.preventDefault()}function nt(a){if(!n.current)return;const{x:u,y:f,width:w,height:Z}=n.current.getBoundingClientRect();m([(a.clientX-u)/w,(a.clientY-f)/Z])}function U(a){const u=r.current;if(!u)return;const f=u.getGrid();at(f),u.step(),rt(f),o.current=requestAnimationFrame(U)}function V(){return n.current?n.current.getContext("2d"):null}function rt(a){const u=V();u&&a.forEachChanged(f=>J(u,f))}function J(a,u){const{x:f,y:w}=u.getPosition();a.fillStyle=F.current&&!u.isSleeping()?"white":u.color,a.fillRect(f*4,w*4,4,4)}function ot(){I(!0)}function K(){I(!1),$(void 0)}function at(a){if(!d.current||!A.current)return;const[u,f]=k.current,w=new h(Math.floor(u*128),Math.floor(f*128));(v.current?a.getPositionsInLine(v.current,w):[w]).every(ct=>{var _;return a.setAtPosition(ct,T.invoke((_=r.current)==null?void 0:_.materialPalette,A.current)),!0}),v.current=w}function Q(){const a=r.current;if(!a)return;a.restart();const u=a.getGrid(),f=V();f&&u.forEach(w=>J(f,w))}return p.jsxs("div",{className:"route sand",ref:i,children:[p.jsxs("div",{className:"materials",children:[p.jsx("div",{className:"material",children:"reset",onClick:Q}),p.jsx("div",{className:"separator"}),T.map(D,a=>p.jsx("div",{className:"material",children:a,onClick:()=>L(a),style:A.current===a?{border:"1px solid white"}:void 0},a)),p.jsx("div",{className:"separator"}),p.jsxs("div",{children:[p.jsx("input",{id:"debugDraw",type:"checkbox",checked:F.current,onChange:a=>W(a.target.checked)}),p.jsx("label",{htmlFor:"debugDraw",children:"debugDraw"})]})]}),p.jsx("canvas",{ref:n,width:`${128*4}px`,height:`${128*4}px`,onMouseDown:ot,onMouseUp:K,onMouseLeave:K,onMouseMove:nt,onContextMenu:st})]})}export{yt as default};
