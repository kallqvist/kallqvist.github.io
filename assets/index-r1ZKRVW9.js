var wt=Object.defineProperty;var pt=(s,t,e)=>t in s?wt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var u=(s,t,e)=>(pt(s,typeof t!="symbol"?t+"":t,e),e),_=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var l=(s,t,e)=>(_(s,t,"read from private field"),e?e.call(s):t.get(s)),b=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},R=(s,t,e,i)=>(_(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var nt=(s,t,e,i)=>({set _(n){R(s,t,n,e)},get _(){return l(s,t,i)}}),ot=(s,t,e)=>(_(s,t,"access private method"),e);import{r as g,j as x,_ as at}from"./index-piCkZc4G.js";function z(s){const[t,e]=g.useState(s),i=g.useRef(t);return[i,o=>{o instanceof Function?(i.current=o(i.current),e(o)):(i.current=o,e(o))}]}class h{constructor(t,e){u(this,"x");u(this,"y");this.x=t,this.y=e}add(t){return new h(this.x+t.x,this.y+t.y)}}const S={NW:new h(-1,-1),N:new h(0,-1),NE:new h(1,-1),E:new h(1,0),SE:new h(1,1),S:new h(0,1),SW:new h(-1,1),W:new h(-1,0)};var C;class J{constructor(t,e){u(this,"empty",!1);u(this,"color");u(this,"grid");u(this,"shouldTryAwakeNeighbours");u(this,"index",-1);u(this,"position",new h(0,0));b(this,C,!0);u(this,"brushSize",4);u(this,"brushFillRate",.05);u(this,"maxSpeed",8);u(this,"acceleration",.4);u(this,"velocity",0);u(this,"dir",{NW:()=>this.getNeighbourInDirection(S.NW),N:()=>this.getNeighbourInDirection(S.N),NE:()=>this.getNeighbourInDirection(S.NE),E:()=>this.getNeighbourInDirection(S.E),SE:()=>this.getNeighbourInDirection(S.SE),S:()=>this.getNeighbourInDirection(S.S),SW:()=>this.getNeighbourInDirection(S.SW),W:()=>this.getNeighbourInDirection(S.W)});const{isEmpty:i,shouldTryAwakeNeighbours:n}={shouldTryAwakeNeighbours:!0,...e};this.grid=t,this.shouldTryAwakeNeighbours=n,this.empty=i||!1,this.maxSpeed=8,this.acceleration=.4,this.velocity=0,this.color=this.getRGBA()}isSleeping(){return l(this,C)}sleep(){R(this,C,!0),this.grid.registerChanged(this)}awake(){R(this,C,!1),this.grid.registerChanged(this)}die(){this.grid.set(this.position,new q(this.grid))}getPosition(){return this.grid.positionOf(this)}getNeighbourInDirection(t){const e=this.grid,i=e.positionOf(this);if(i)return e.getAtPosition(i.add(t))}swap(t){this.grid.swap(this,t)}}C=new WeakMap;class q extends J{constructor(e){super(e,{isEmpty:!0});u(this,"brushSize",2);u(this,"brushFillRate",1)}getRGBA(){return[50,50,50,255]}awake(){}step(){}}class K extends J{}class B extends J{constructor(e,i){super(e,i);u(this,"numFramesOfHorizontalMovement",0);u(this,"maxFramesOfHorizontalMovement",100);u(this,"dispersionRate");u(this,"fallDirection");u(this,"erosionFactor");const{dispersionRate:n,fallDirection:o,erosionFactor:r}=i||{};this.dispersionRate=n||5,this.fallDirection=o||1,this.erosionFactor=r||.03}step(){var o,r;let e=!1;const i=[-this.dispersionRate,this.dispersionRate];Math.random()>.5&&i.reverse(),this.shouldTryAwakeNeighbours&&!this.isSleeping()&&i.every(c=>{const a=this.getNeighbourInDirection(new h(c,0));a!=null&&a.empty||a==null||a.awake(),this.erosionFactor>0&&a instanceof ut&&Math.random()<this.erosionFactor&&this.swap(a)});const n=this.getNeighbourInDirection(new h(0,this.fallDirection));n!=null&&n.empty?(this.swap(n),e=!0,this.numFramesOfHorizontalMovement=0):this.numFramesOfHorizontalMovement<=this.maxFramesOfHorizontalMovement&&i.every(c=>{const a=this.grid;return a.getPositionsInLine(this.position,this.position.add(new h(c,0)),{excludeStart:!0}).every(y=>{const w=a.getAtPosition(y);return w!=null&&w.empty?(this.swap(w),e=!0,this.numFramesOfHorizontalMovement++,!1):!(w instanceof K)}),!e}),e||((o=this.dir.W())!=null&&o.empty||(r=this.dir.E())!=null&&r.empty?this.die():this.sleep())}}var W,T;class ut extends K{constructor(){super(...arguments);b(this,W,0);b(this,T,100)}step(){let e=!1;const i=[-1,1];Math.random()>=.5&&i.reverse();const n=this.dir.S();n!=null&&n.empty||n instanceof B?(this.swap(n),e=!0):this.isSleeping()||i.every(o=>{const r=this.getNeighbourInDirection(new h(o,1));return r!=null&&r.empty||r instanceof B?(this.swap(r),e=!0,!1):!0}),e?(i.every(o=>{const r=this.getNeighbourInDirection(new h(o,0));return r!=null&&r.empty||r==null||r.awake(),!0}),R(this,W,0)):(nt(this,W)._++,l(this,W)>=l(this,T)&&this.sleep())}}W=new WeakMap,T=new WeakMap;class xt extends ut{getRGBA(){const t=Math.random()*20;return[191-t,155-t,123-t,255]}}class ht extends B{constructor(t,e){super(t,{...e,dispersionRate:3})}getRGBA(){return[46,137,255,Math.round(Math.random()*100)+155]}die(){this.grid.set(this.position,new dt(this.grid))}}class yt extends K{constructor(e,i){super(e,{shouldTryAwakeNeighbours:!1,...i});u(this,"brushSize",2);u(this,"brushFillRate",1)}awake(){}step(){}}class Rt extends yt{getRGBA(){return[100,100,100,255]}}class ct extends B{constructor(t,e){super(t,{fallDirection:-1,dispersionRate:3,erosionFactor:0,shouldTryAwakeNeighbours:!1,...e})}}class Mt extends ct{getRGBA(){return[90,90,90,Math.round(Math.random()*185)+70]}}class dt extends ct{getRGBA(){return[255,255,255,Math.round(Math.random()*100)+55]}die(){this.grid.set(this.position,Math.random()<.05?new ht(this.grid):new q(this.grid))}}var v,F;class bt{constructor(t,e){u(this,"width");u(this,"height");b(this,v,void 0);b(this,F,void 0);this.width=t,this.height=e,R(this,v,[]),R(this,F,new Set([])),this.clear()}clear(){for(let t=0;t<this.width*this.height;t++)this.setAtIndex(t,new q(this))}indexOf(t){return t?t.index:-1}positionOf(t){if(t)return t.position}forEach(t,e){const{alternateRows:i}=e||{},n=new Set;let o=(r,c)=>{const a=this.position2index(new h(r,c)),m=l(this,v)[a];return n.has(m)?!0:t(m,a)===!1?!1:(n.add(m),!0)};for(let r=0;r<this.height;r++){if(i&&r%2===0){for(let a=this.width-1;a>0;a--)if(o(a,r)===!1)return!1;continue}for(let c=0;c<this.width;c++)o(c,r)}}forEachChanged(t,e=!0){l(this,F).forEach(i=>t(i)),e&&l(this,F).clear()}position2index(t){const{x:e,y:i}=t;return e<0||e>=this.width||i<0||i>=this.height?-1:e+i*this.width}index2position(t){let e=Math.floor(t/this.width),i=t-e*this.width;return new h(i,e)}get(t){return this.getAtPosition(t)}set(t,e){this.setAtPosition(t,e)}getPositionsInLine(t,e,i){const{excludeStart:n,excludeEnd:o}=i||{},r=e.x-t.x,c=e.y-t.y;if(r===0&&c===0)return[t];const a=r<0?-1:1,m=c<0?-1:1,y=Math.abs(r),w=Math.abs(c),k=y>=w,P=Math.min(y,w),f=Math.max(y,w),p=P/f,M=[];for(let I=n?1:0;I<(o?f:f+1);I++){const G=Math.round(I*p);k?M.push(new h(t.x+I*a,t.y+G*m)):M.push(new h(t.x+G*a,t.y+I*m))}return M}getAtPosition(t){const e=this.position2index(t);if(e!==-1)return this.getAtIndex(e)}setAtPosition(t,e){const i=this.position2index(t);this.setAtIndex(i,e)}getAtIndex(t){return l(this,v)[t]}registerChanged(t){l(this,F).add(t)}swap(t,e){const i=this.indexOf(t),n=this.indexOf(e),o=l(this,v)[i];this.setAtIndex(i,l(this,v)[n]),this.setAtIndex(n,o),t.awake(),e.awake()}setAtIndex(t,e){e.index=t,e.position=this.index2position(t),l(this,v)[t]=e,this.registerChanged(e)}}v=new WeakMap,F=new WeakMap;var A,E,L,lt;class vt{constructor(t){b(this,L);b(this,A,void 0);b(this,E,!0);u(this,"materialPalette");const{width:e,height:i}=t;R(this,A,new bt(e,i)),this.materialPalette=ot(this,L,lt).call(this,l(this,A))}isRunning(){return l(this,E)}start(){R(this,E,!0)}stop(){R(this,E,!1)}restart(){this.stop(),l(this,A).clear(),this.start()}getGrid(){return l(this,A)}step(){if(!l(this,E))return;l(this,A).forEach(e=>{e.empty||e.step(-1)},{alternateRows:!0})}}A=new WeakMap,E=new WeakMap,L=new WeakSet,lt=function(t){return{empty:()=>new q(t),sand:()=>new xt(t),water:()=>new ht(t),stone:()=>new Rt(t),smoke:()=>new Mt(t),steam:()=>new dt(t)}};const Dt=g.forwardRef((s,t)=>{const{grid:e,debugDraw:i,...n}=s,o=g.useRef(null),r=g.useRef(),[c,a]=z(!0);g.useImperativeHandle(t,()=>({clear:w,render:k})),g.useEffect(()=>{a(!0),w()},[e]);function m(){return o.current?o.current.getContext("2d"):null}function y(){if(r.current)return r.current;if(!e)return;const f=m();if(f)return r.current=f.createImageData(e.width,e.height),r.current}function w(){const f=y();f&&(f.data.fill(255),a(!0))}function k(){if(!e)return;const f=m();if(!f)return;const p=y();p&&(c.current===!0?e.forEach(M=>P(p,M)):e.forEachChanged(M=>P(p,M)),f.putImageData(p,0,0),a(!1))}function P(f,p){p.index!==-1&&e&&f.data.set(i&&!p.isSleeping()?[255,255,255,255]:p.color,p.index*4)}return e?x.jsx("div",{className:"grid canvas",children:x.jsx("canvas",{ref:o,width:e.width,height:e.height,...n})}):null});function Nt(){var $;const e=g.useRef(null),i=g.useRef(null),n=g.useRef(),o=g.useRef(),r=g.useRef(),c=g.useRef(void 0),[a,m]=z(!1),[y,w]=z([0,0]),[k,P]=z(!1),[f,p]=z("sand"),[M,I]=g.useState([]);g.useEffect(()=>(n.current=new vt({width:320,height:180}),o.current=n.current.getGrid(),I(at.keys(n.current.materialPalette)),Z(),r.current=requestAnimationFrame(Q),()=>{r.current!==void 0&&cancelAnimationFrame(r.current)}),[]);function G(d){d.preventDefault()}function ft(d){const N=d.target,{x:j,y:D,width:O,height:tt}=N.getBoundingClientRect();w([(d.clientX-j)/O,(d.clientY-D)/tt])}function Q(d){var D;const N=n.current;if(!N)return;const j=N.getGrid();mt(j),N.step(),(D=e.current)==null||D.render(),r.current=requestAnimationFrame(Q)}function gt(){m(!0)}function V(){m(!1),c.current=void 0}function mt(d){if(!a.current||!f.current)return;const[N,j]=y.current,D=new h(Math.floor(N*320),Math.floor(j*180)),O=n.current;if(!O)return;const X=O.materialPalette[f.current];if(!X)return;const H=X(),et=Math.floor(H.brushSize);(c.current?d.getPositionsInLine(c.current,D):[D]).every(it=>{for(let Y=-et;Y<H.brushSize;Y++)for(let U=-et;U<H.brushSize;U++){if(Math.random()>H.brushFillRate)continue;const st=it.x+U;if(st<0)continue;const rt=it.y+Y;rt<0||d.setAtPosition(new h(st,rt),X())}return!0}),c.current=D}function Z(){const d=n.current;d&&d.restart()}return x.jsxs("div",{className:"route sand",ref:i,children:[x.jsxs("div",{className:"materials",children:[x.jsx("div",{className:"material",children:"reset",onClick:Z}),x.jsx("div",{className:"separator"}),at.map(M,d=>x.jsx("div",{className:"material",children:d,onClick:()=>p(d),style:f.current===d?{border:"1px solid white"}:void 0},d)),x.jsx("div",{className:"separator"}),x.jsxs("div",{children:[x.jsx("input",{id:"debugDraw",type:"checkbox",checked:k.current,onChange:d=>P(d.target.checked)}),x.jsx("label",{htmlFor:"debugDraw",children:"debugDraw"})]})]}),x.jsx(Dt,{ref:e,grid:($=n.current)==null?void 0:$.getGrid(),debugDraw:k.current,onMouseDown:gt,onMouseUp:V,onMouseLeave:V,onMouseMove:ft,onContextMenu:G})]})}export{Nt as default};
