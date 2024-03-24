var pt=Object.defineProperty;var wt=(s,t,e)=>t in s?pt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>(wt(s,typeof t!="symbol"?t+"":t,e),e),K=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var d=(s,t,e)=>(K(s,t,"read from private field"),e?e.call(s):t.get(s)),v=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},R=(s,t,e,i)=>(K(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var ot=(s,t,e,i)=>({set _(n){R(s,t,n,e)},get _(){return d(s,t,i)}}),at=(s,t,e)=>(K(s,t,"access private method"),e);import{r as m,j as x,_ as ht}from"./index-p_kRe4cG.js";function O(s){const[t,e]=m.useState(s),i=m.useRef(t);return[i,o=>{o instanceof Function?(i.current=o(i.current),e(o)):(i.current=o,e(o))}]}class c{constructor(t,e){a(this,"x");a(this,"y");this.x=t,this.y=e}add(t){return new c(this.x+t.x,this.y+t.y)}}const S={NW:new c(-1,-1),N:new c(0,-1),NE:new c(1,-1),E:new c(1,0),SE:new c(1,1),S:new c(0,1),SW:new c(-1,1),W:new c(-1,0)};var W;class Q{constructor(t,e){a(this,"empty",!1);a(this,"color");a(this,"grid");a(this,"shouldTryAwakeNeighbours");a(this,"index",-1);a(this,"position",new c(0,0));v(this,W,!0);a(this,"brushSize",4);a(this,"brushFillRate",.05);a(this,"maxSpeed",8);a(this,"acceleration",.4);a(this,"velocity",0);a(this,"dir",{NW:()=>this.getNeighbourInDirection(S.NW),N:()=>this.getNeighbourInDirection(S.N),NE:()=>this.getNeighbourInDirection(S.NE),E:()=>this.getNeighbourInDirection(S.E),SE:()=>this.getNeighbourInDirection(S.SE),S:()=>this.getNeighbourInDirection(S.S),SW:()=>this.getNeighbourInDirection(S.SW),W:()=>this.getNeighbourInDirection(S.W)});const{isEmpty:i,shouldTryAwakeNeighbours:n}={shouldTryAwakeNeighbours:!0,...e};this.grid=t,this.shouldTryAwakeNeighbours=n,this.empty=i||!1,this.maxSpeed=8,this.acceleration=.4,this.velocity=0,this.color=this.getRGBA()}isSleeping(){return d(this,W)}sleep(){R(this,W,!0),this.grid.registerChanged(this)}awake(){R(this,W,!1),this.grid.registerChanged(this)}die(){this.grid.set(this.position,new L(this.grid))}getPosition(){return this.grid.positionOf(this)}getNeighbourInDirection(t){const e=this.grid,i=e.positionOf(this);if(i)return e.getAtPosition(i.add(t))}swap(t){this.grid.swap(this,t)}}W=new WeakMap;class L extends Q{constructor(e){super(e,{isEmpty:!0});a(this,"brushSize",2);a(this,"brushFillRate",1)}getRGBA(){return[50,50,50,255]}awake(){}step(){}}class V extends Q{}class P extends Q{constructor(e,i){super(e,i);a(this,"numFramesOfHorizontalMovement",0);a(this,"maxFramesOfHorizontalMovement",100);a(this,"dispersionRate");a(this,"fallDirection");a(this,"erosionFactor");const{dispersionRate:n,fallDirection:o,erosionFactor:r}=i||{};this.dispersionRate=n||5,this.fallDirection=o||1,this.erosionFactor=r||.03}step(){var o,r;let e=!1;const i=[-this.dispersionRate,this.dispersionRate];Math.random()>.5&&i.reverse(),this.shouldTryAwakeNeighbours&&!this.isSleeping()&&i.every(u=>{const h=this.getNeighbourInDirection(new c(u,0));h!=null&&h.empty||h==null||h.awake(),this.erosionFactor>0&&h instanceof ct&&Math.random()<this.erosionFactor&&this.swap(h)});const n=this.getNeighbourInDirection(new c(0,this.fallDirection));n!=null&&n.empty?(this.swap(n),e=!0,this.numFramesOfHorizontalMovement=0):this.numFramesOfHorizontalMovement<=this.maxFramesOfHorizontalMovement&&i.every(u=>{const h=this.grid;return h.getPositionsInLine(this.position,this.position.add(new c(u,0)),{excludeStart:!0}).every(y=>{const p=h.getAtPosition(y);return p!=null&&p.empty?(this.swap(p),e=!0,this.numFramesOfHorizontalMovement++,!1):!(p instanceof V)}),!e}),e||((o=this.dir.W())!=null&&o.empty||(r=this.dir.E())!=null&&r.empty?this.die():this.sleep())}}var j,q;class ct extends V{constructor(){super(...arguments);v(this,j,0);v(this,q,100)}step(){let e=!1;const i=[-1,1];Math.random()>=.5&&i.reverse();const n=this.dir.S();n!=null&&n.empty||n instanceof P?(this.swap(n),e=!0):this.isSleeping()||i.every(o=>{const r=this.getNeighbourInDirection(new c(o,1));return r!=null&&r.empty||r instanceof P?(this.swap(r),e=!0,!1):!0}),e?(i.every(o=>{const r=this.getNeighbourInDirection(new c(o,0));return r!=null&&r.empty||r==null||r.awake(),!0}),R(this,j,0)):(ot(this,j)._++,d(this,j)>=d(this,q)&&this.sleep())}}j=new WeakMap,q=new WeakMap;class xt extends ct{getRGBA(){const t=Math.random()*20;return[191-t,155-t,123-t,255]}}class ut extends P{constructor(t,e){super(t,{...e,dispersionRate:3})}getRGBA(){return[46,137,255,Math.round(Math.random()*100)+155]}die(){this.grid.set(this.position,new lt(this.grid))}}class yt extends V{constructor(e,i){super(e,{shouldTryAwakeNeighbours:!1,...i});a(this,"brushSize",2);a(this,"brushFillRate",1)}awake(){}step(){}}class Rt extends yt{getRGBA(){return[100,100,100,255]}}class G extends P{constructor(t,e){super(t,{fallDirection:-1,dispersionRate:3,erosionFactor:0,shouldTryAwakeNeighbours:!1,...e})}step(){const t=this.dir.N();if(t instanceof P&&!(t instanceof G)&&t instanceof P&&!(t instanceof G)){this.swap(t),this.numFramesOfHorizontalMovement=0;return}super.step()}}class Mt extends G{getRGBA(){return[90,90,90,Math.round(Math.random()*185)+70]}}class lt extends G{getRGBA(){return[255,255,255,Math.round(Math.random()*100)+55]}die(){this.grid.set(this.position,Math.random()<.05?new ut(this.grid):new L(this.grid))}}var b,C;class vt{constructor(t){a(this,"width");a(this,"height");a(this,"alternateRows");a(this,"createEmpty");a(this,"onCellsChanged");v(this,b,void 0);v(this,C,void 0);const{width:e,height:i,alternateRows:n,onCellsChanged:o,createEmpty:r}=t;R(this,b,[]),R(this,C,new Set([])),this.width=e,this.height=i,this.alternateRows=n||!1,this.createEmpty=r,this.onCellsChanged=o,this.clear()}clear(){for(let t=0;t<this.width*this.height;t++)this.setAtIndex(t,this.createEmpty(this))}indexOf(t){return t?t.index:-1}positionOf(t){if(t)return t.position}forEach(t,e){const{alternateRows:i}=e||{},n=new Set;let o=(r,u)=>{const h=this.position2index(new c(r,u)),g=d(this,b)[h];return!g||n.has(g)?!0:t(g,h)===!1?!1:(n.add(g),!0)};for(let r=0;r<this.height;r++){if(i&&r%2===0){for(let h=this.width-1;h>=0;h--)if(o(h,r)===!1)return!1;continue}for(let u=0;u<this.width;u++)o(u,r)}}forEachChanged(t,e=!0){d(this,C).forEach(i=>t(i)),e&&d(this,C).clear()}position2index(t){const{x:e,y:i}=t;return e<0||e>=this.width||i<0||i>=this.height?-1:e+i*this.width}index2position(t){let e=Math.floor(t/this.width),i=t-e*this.width;return new c(i,e)}get(t){return this.getAtPosition(t)}set(t,e){this.setAtPosition(t,e)}getPositionsInLine(t,e,i){const{excludeStart:n,excludeEnd:o}=i||{},r=e.x-t.x,u=e.y-t.y;if(r===0&&u===0)return[t];const h=r<0?-1:1,g=u<0?-1:1,y=Math.abs(r),p=Math.abs(u),F=y>=p,k=Math.min(y,p),f=Math.max(y,p),w=k/f,M=[];for(let E=n?1:0;E<(o?f:f+1);E++){const H=Math.round(E*w);F?M.push(new c(t.x+E*h,t.y+H*g)):M.push(new c(t.x+H*h,t.y+E*g))}return M}getAtPosition(t){const e=this.position2index(t);if(e!==-1)return this.getAtIndex(e)}setAtPosition(t,e){const i=this.position2index(t);this.setAtIndex(i,e)}getAtIndex(t){return d(this,b)[t]}registerChanged(t){d(this,C).add(t)}swap(t,e){const i=this.indexOf(t),n=this.indexOf(e),o=d(this,b)[i];this.setAtIndex(i,d(this,b)[n]),this.setAtIndex(n,o),this.onCellsChanged&&this.onCellsChanged([t,e])}setAtIndex(t,e){e.index=t,e.position=this.index2position(t),d(this,b)[t]=e,this.registerChanged(e)}}b=new WeakMap,C=new WeakMap;var A,I,X,dt;class bt{constructor(t){v(this,X);v(this,A,void 0);v(this,I,!0);a(this,"materialPalette");const{width:e,height:i}=t;R(this,A,new vt({width:e,height:i,createEmpty:n=>new L(n),onCellsChanged:n=>n.forEach(o=>o.awake())})),this.materialPalette=at(this,X,dt).call(this,d(this,A))}isRunning(){return d(this,I)}start(){R(this,I,!0)}stop(){R(this,I,!1)}restart(){this.stop(),d(this,A).clear(),this.start()}getGrid(){return d(this,A)}step(){if(!d(this,I))return;d(this,A).forEach(e=>{e.empty||e.step(-1)},{alternateRows:!0})}}A=new WeakMap,I=new WeakMap,X=new WeakSet,dt=function(t){return{empty:()=>new L(t),sand:()=>new xt(t),water:()=>new ut(t),stone:()=>new Rt(t),smoke:()=>new Mt(t),steam:()=>new lt(t)}};const Dt=m.forwardRef((s,t)=>{const{grid:e,debugDraw:i,...n}=s,o=m.useRef(null),r=m.useRef(),[u,h]=O(!0);m.useImperativeHandle(t,()=>({clear:p,render:F})),m.useEffect(()=>{h(!0),p()},[e]);function g(){return o.current?o.current.getContext("2d"):null}function y(){if(r.current)return r.current;if(!e)return;const f=g();if(f)return r.current=f.createImageData(e.width,e.height),r.current}function p(){const f=y();f&&(f.data.fill(255),h(!0))}function F(){if(!e)return;const f=g();if(!f)return;const w=y();w&&(u.current===!0?e.forEach(M=>k(w,M)):e.forEachChanged(M=>k(w,M)),f.putImageData(w,0,0),h(!1))}function k(f,w){w.index!==-1&&e&&f.data.set(i&&!w.isSleeping()?[255,255,255,255]:w.color,w.index*4)}return e?x.jsx("div",{className:"grid canvas",children:x.jsx("canvas",{ref:o,width:e.width,height:e.height,...n})}):null});function Nt(){var tt;const e=m.useRef(null),i=m.useRef(null),n=m.useRef(),o=m.useRef(),r=m.useRef(),u=m.useRef(void 0),[h,g]=O(!1),[y,p]=O([0,0]),[F,k]=O(!1),[f,w]=O("sand"),[M,E]=m.useState([]);m.useEffect(()=>(n.current=new bt({width:320,height:180}),o.current=n.current.getGrid(),E(ht.keys(n.current.materialPalette)),_(),r.current=requestAnimationFrame(Z),()=>{r.current!==void 0&&cancelAnimationFrame(r.current)}),[]);function H(l){l.preventDefault()}function ft(l){const N=l.target,{x:z,y:D,width:B,height:et}=N.getBoundingClientRect();p([(l.clientX-z)/B,(l.clientY-D)/et])}function Z(l){var D;const N=n.current;if(!N)return;const z=N.getGrid();mt(z),N.step(),(D=e.current)==null||D.render(),r.current=requestAnimationFrame(Z)}function gt(){g(!0)}function $(){g(!1),u.current=void 0}function mt(l){if(!h.current||!f.current)return;const[N,z]=y.current,D=new c(Math.floor(N*320),Math.floor(z*180)),B=n.current;if(!B)return;const Y=B.materialPalette[f.current];if(!Y)return;const T=Y(),it=Math.floor(T.brushSize);(u.current?l.getPositionsInLine(u.current,D):[D]).every(st=>{for(let U=-it;U<T.brushSize;U++)for(let J=-it;J<T.brushSize;J++){if(Math.random()>T.brushFillRate)continue;const nt=st.x+J;if(nt<0)continue;const rt=st.y+U;rt<0||l.setAtPosition(new c(nt,rt),Y())}return!0}),u.current=D}function _(){const l=n.current;l&&l.restart()}return x.jsxs("div",{className:"route sand",ref:i,children:[x.jsxs("div",{className:"materials",children:[x.jsx("div",{className:"material",children:"reset",onClick:_}),x.jsx("div",{className:"separator"}),ht.map(M,l=>x.jsx("div",{className:"material",children:l,onClick:()=>w(l),style:f.current===l?{border:"1px solid white"}:void 0},l)),x.jsx("div",{className:"separator"}),x.jsxs("div",{children:[x.jsx("input",{id:"debugDraw",type:"checkbox",checked:F.current,onChange:l=>k(l.target.checked)}),x.jsx("label",{htmlFor:"debugDraw",children:"debugDraw"})]})]}),x.jsx(Dt,{ref:e,grid:(tt=n.current)==null?void 0:tt.getGrid(),debugDraw:F.current,onMouseDown:gt,onMouseUp:$,onMouseLeave:$,onMouseMove:ft,onContextMenu:H})]})}export{Nt as default};
