var ct=Object.defineProperty;var ft=(r,t,e)=>t in r?ct(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>(ft(r,typeof t!="symbol"?t+"":t,e),e),et=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var s=(r,t,e)=>(et(r,t,"read from private field"),e?e.call(r):t.get(r)),f=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},a=(r,t,e,i)=>(et(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e);var q=(r,t,e)=>(et(r,t,"access private method"),e);import{r as S,j as it,_ as lt}from"./index-1QbDTXoe.js";import"./react-spring_web.modern-zzy-tHnq.js";function dt(r){const[t,e]=S.useState(r),i=S.useRef(t);return[i,h=>{h instanceof Function?(i.current=h(i.current),e(h)):(i.current=h,e(h))}]}class rt{constructor(t){u(this,"grid");u(this,"index");u(this,"position");u(this,"dir",{NW:()=>this.getNeighbourInDirection(w.NW),N:()=>this.getNeighbourInDirection(w.N),NE:()=>this.getNeighbourInDirection(w.NE),E:()=>this.getNeighbourInDirection(w.E),SE:()=>this.getNeighbourInDirection(w.SE),S:()=>this.getNeighbourInDirection(w.S),SW:()=>this.getNeighbourInDirection(w.SW),W:()=>this.getNeighbourInDirection(w.W)});this.grid=t,this.index=-1,this.position=new l(0,0)}getNeighbourInDirection(t){if(this.position)return this.grid.getAtPosition(this.position.add(t))}getNeighbourhood(){const t=[];return pt.forEach(e=>{const i=this.getNeighbourInDirection(e);t.push(i)}),t}getLineTo(t,e){return this.grid.getPositionsInLine(this.position,t,e)}swapWith(t){this.grid.swap(this,t)}getRGBA(){return[0,0,0,0]}}var A,b,K,st;class nt{constructor(t){f(this,K);u(this,"size");u(this,"alternateRows");u(this,"createEmpty");f(this,A,void 0);f(this,b,void 0);const{size:e,alternateRows:i,createEmpty:o}={alternateRows:!1,...t};a(this,A,[]),a(this,b,new Set([])),this.size=e,this.alternateRows=i,this.createEmpty=o?()=>o(this):()=>new rt(this),q(this,K,st).call(this)}clear(){q(this,K,st).call(this),this.resetChanges()}indexOf(t){return t?t.index:-1}positionOf(t){if(t)return t.position}forEach(t,e){const{alternateRowDirections:i,evenRows:o,oddRows:h,evenCols:d,oddCols:E}={evenRows:!0,oddRows:!0,evenCols:!0,oddCols:!0,...e},p=new Set,R=(m,I)=>{const y=this.position2index(new l(m,I)),c=s(this,A)[y];if(!c||p.has(c))return;if(t(c,y)===!1)return!1;p.add(c)};for(let m=0;m<this.size.y;m++){const I=m%2;if(I===0&&!o)continue;if(I===1&&!h)continue;let y;if(i&&m%2===0&&Math.random()<.5){for(let c=this.size.x-1;c>=0;c--){const g=c%2;if(!(g===0&&!d)&&!(g===1&&!E)&&(y=R(c,m),y===!1))break}if(y===!1)break;continue}for(let c=0;c<this.size.x;c++){const g=c%2;if(!(g===0&&!d)&&!(g===1&&!E)&&(y=R(c,m),y===!1))break}if(y===!1)break}}map(t){return s(this,A).map(t)}mapChanged(t){return this.getAllChanges().map(t)}getAllChanges(){return[...s(this,b).values()]}countChanges(){return s(this,b).size}forEachChanged(t,e=!1){s(this,b).forEach(i=>t(i)),e&&this.resetChanges()}registerChanged(t){s(this,b).has(t)||s(this,b).add(t)}resetChanges(){s(this,b).clear()}position2index(t){const{x:e,y:i}=t;return e<0||e>=this.size.x||i<0||i>=this.size.y?-1:e+i*this.size.x}index2position(t){const e=Math.floor(t/this.size.x),i=t-e*this.size.x;return new l(i,e)}get(t){return this.getAtPosition(t)}set(t,e){this.setAtPosition(t,e)}getPositionsInLine(t,e,i){const{excludeStart:o,excludeEnd:h}=i||{},d=e.x-t.x,E=e.y-t.y;if(d===0&&E===0)return[t];const p=d<0?-1:1,R=E<0?-1:1,m=Math.abs(d),I=Math.abs(E),y=m>=I,c=Math.min(m,I),g=Math.max(m,I),U=c/g,x=[];for(let v=o?1:0;v<(h?g:g+1);v++){const N=Math.round(v*U);y?x.push(new l(t.x+v*p,t.y+N*R)):x.push(new l(t.x+N*p,t.y+v*R))}return x}getAtPosition(t){const e=this.position2index(t);if(e!==-1)return this.getAtIndex(e)}setAtPosition(t,e){const i=this.position2index(t);this.setAtIndex(i,e)}getAtIndex(t){return s(this,A)[t]}swap(t,e){const i=this.indexOf(t),o=this.indexOf(e);if(i===-1||o===-1)throw new Error("Can't swap unless both cells exists in the grid");const h=s(this,A)[i];this.setAtIndex(i,s(this,A)[o]),this.setAtIndex(o,h)}setAtIndex(t,e){e.index=t,e.position=this.index2position(t),s(this,A)[t]=e,this.registerChanged(e)}}A=new WeakMap,b=new WeakMap,K=new WeakSet,st=function(){for(let t=0;t<this.size.x*this.size.y;t++)this.setAtIndex(t,this.createEmpty())};var M,D,G,L;class gt extends rt{constructor(){super(...arguments);f(this,M,new Set);f(this,D,void 0);f(this,G,void 0);f(this,L,void 0)}get dirtyRect(){return s(this,L)}haveChanges(){return s(this,M).size>0}countChanges(){return s(this,M).size}registerChange(e){s(this,M).has(e)||(s(this,M).add(e),a(this,D,l.min(s(this,D)||l.positiveInfinity,e.position)),a(this,G,l.max(s(this,G)||l.negativeInfinity,e.position)),a(this,L,new yt(s(this,D),s(this,G).subtract(s(this,D)))))}resetChanges(){s(this,M).clear(),a(this,D,void 0),a(this,G,void 0),a(this,L,void 0)}forEachChangedCell(e,i=!1){s(this,M).forEach(o=>e(o)),i&&this.resetChanges()}}M=new WeakMap,D=new WeakMap,G=new WeakMap,L=new WeakMap;function xt(r){return new Worker("/assets/worker-G1OrwRg-.js",{name:r==null?void 0:r.name})}var z,Y,O,Q,V,ot,_,ht,tt,at;class mt extends nt{constructor(e){const{chunkSize:i,workerize:o,...h}=e;super(h);f(this,V);f(this,_);f(this,tt);u(this,"chunkSize",new l(64,64));f(this,z,void 0);f(this,Y,void 0);f(this,O,void 0);f(this,Q,[]);this.chunkSize=i||new l(64,64),a(this,z,new nt({size:this.size.divide(this.chunkSize),createEmpty:d=>new gt(d)})),a(this,Y,o||!1),s(this,Y)&&(a(this,O,new xt),s(this,O).onmessage=this.handleWorkerResponse),q(this,V,ot).call(this)}clear(){super.clear(),this.forEachChunk(e=>e.resetChanges())}registerChanged(e){super.registerChanged(e);const i=this.chunkOf(e);i&&i.registerChange(e)}resetChanges(){super.resetChanges(),this.forEachChunk(e=>e.resetChanges())}countChanges(){return this.mapChunks(e=>e.countChanges()).reduce((e,i)=>e+i)}forEachChanged(e,i){this.forEachChunk(o=>{o.haveChanges()&&o.forEachChangedCell(e,i)})}chunkOf(e){if(!e||!this.chunkSize)return;const i=e.position.divide(this.chunkSize).floor();return s(this,z).get(i)}forEachChunk(e,i){s(this,z).forEach(e,i)}mapChunks(e){return s(this,z).map(e)}forEachChangedChunkPass(e,i=!1){this.forEachChunkPass(o=>{const h=o.filter(d=>d.haveChanges());h.length!==0&&(e(h),i&&h.forEach(d=>d.resetChanges()))})}forEachChunkPass(e){s(this,Q).forEach((i,o)=>{s(this,Y)?q(this,tt,at).call(this,()=>e(i,o)):e(i,o)})}handleWorkerResponse(e){console.log("worker says:",this,e.data)}}z=new WeakMap,Y=new WeakMap,O=new WeakMap,Q=new WeakMap,V=new WeakSet,ot=function(){for(let e=0;e<s(this,z).size.x*s(this,z).size.y;e++)s(this,z).setAtIndex(e,s(this,z).createEmpty());q(this,_,ht).call(this)},_=new WeakSet,ht=function(){const e=[[!1,!1],[!1,!0],[!0,!1],[!0,!0]],i=[];e.forEach(([o,h])=>{const d=[];this.forEachChunk(E=>{d.push(E)},{evenRows:!o,oddRows:o,evenCols:!h,oddCols:h}),i.push(d)}),a(this,Q,i)},tt=new WeakSet,at=function(e){s(this,O)&&s(this,O).postMessage({f:e})};class yt{constructor(t,e){u(this,"position");u(this,"size");this.position=t,this.size=e}toArray(){return[...this.position.toArray(),...this.size.toArray()]}}const n=class n{constructor(t=0,e=0){u(this,"x");u(this,"y");this.x=t,this.y=e}clone(){return new n(this.x,this.y)}add(t){return new n(this.x+t.x,this.y+t.y)}addScalar(t){return new n(this.x+t,this.y+t)}subtract(t=n.zero){return new n(this.x-t.x,this.y-t.y)}subtractScalar(t){return new n(this.x-t,this.y-t)}multiply(t){return new n(this.x*t.x,this.y*t.y)}multiplyScalar(t){return new n(this.x*t,this.y*t)}divide(t){return new n(this.x/t.x,this.y/t.y)}divideScalar(t){return new n(this.x/t,this.y/t)}mod(t){return new n(this.x%t.x,this.y%t.y)}modScalar(t){return new n(this.x%t,this.y%t)}abs(){return new n(Math.abs(this.x),Math.abs(this.y))}round(){return new n(Math.round(this.x),Math.round(this.y))}floor(){return new n(Math.floor(this.x),Math.floor(this.y))}ceil(){return new n(Math.ceil(this.x),Math.ceil(this.y))}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){const t=this.length();return t===0?n.zero:this.multiplyScalar(1/t)}dot(t){const e=this.multiply(t);return e.x+e.y}isEqual(t){return this.x===t.x&&this.y===t.y}isNear(t,e=.001){const i=this.subtract(t).abs();return i.x<=e&&i.y<=e}toArray(){return[this.x,this.y]}join(t){return this.toArray().join(t)}static min(t,e){return new n(Math.min(t.x,e.x),Math.min(t.y,e.y))}static max(t,e){return new n(Math.max(t.x,e.x),Math.max(t.y,e.y))}static fromArray([t,e]){return new n(t,e)}static random(){return new n(Math.random(),Math.random())}};u(n,"zero",new n),u(n,"one",new n(1,1)),u(n,"up",new n(0,-1)),u(n,"down",new n(0,1)),u(n,"left",new n(-1,0)),u(n,"right",new n(1,0)),u(n,"negativeInfinity",new n(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY)),u(n,"positiveInfinity",new n(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY));let l=n;const w={NW:new l(-1,-1),N:new l(0,-1),NE:new l(1,-1),E:new l(1,0),SE:new l(1,1),S:new l(0,1),SW:new l(-1,1),W:new l(-1,0)},pt=[w.NW,w.N,w.NE,w.W,w.E,w.SW,w.S,w.SE];class kt{constructor(t){u(this,"grid");const{gridOptions:e}=t;this.grid=this.createGrid(e)}clear(){this.grid.clear()}}function wt(r,t){const{children:e,grid:i,debugDraw:o,pickColor:h,...d}={debugDraw:!1,...r},E=S.useRef(null),p=S.useRef(),[R,m]=dt(!0);S.useImperativeHandle(t,()=>({clear:c,render:g})),S.useEffect(()=>{i&&(c(),g(i))},[i]);function I(){return E.current?E.current.getContext("2d"):null}function y(){if(p.current)return p.current;const x=I();if(x)return p.current=x.createImageData(...i.size.toArray()),p.current}function c(){const x=y();x&&(x.data.fill(0),m(!0))}function g(x,v={debugDraw:o}){const{debugDraw:N,resetChanges:X}={debugDraw:!1,resetChanges:!1,...v};if(!x)return;const C=I();if(!C)return;const Z=y();Z&&(R.current===!0?x.forEach(J=>U({imageData:Z,cell:J})):x.forEachChanged(J=>U({imageData:Z,cell:J}),X),C.putImageData(Z,0,0),N&&x instanceof mt&&x.forEachChunkPass((J,ut)=>{J.forEach(F=>{C.strokeStyle=F.haveChanges()?"white":"black",C.fillStyle=C.strokeStyle,C.lineWidth=1;const $=F.position.multiply(x.chunkSize);C.strokeRect(...$.toArray(),...x.chunkSize.toArray()),C.textAlign="right",C.fillText(F.position.toArray().toString(),...$.add(x.chunkSize).subtractScalar(2).toArray()),C.textAlign="center",C.fillText(ut.toString(),...$.add(x.chunkSize.divideScalar(2)).toArray()),C.textAlign="left",C.fillText(F.countChanges().toString(),...$.add(l.fromArray([5,10])).toArray()),F.dirtyRect&&(C.strokeStyle="red",C.strokeRect(...F.dirtyRect.position.toArray(),...F.dirtyRect.size.toArray()))})}),m(!1))}function U(x){const{imageData:v,cell:N}=x;if(N.index===-1)return;const X=h?h({cell:N}):N.getRGBA();X&&v.data.set(X,N.index*4)}if(i)return it.jsxs("div",{className:"grid canvas",children:[it.jsx("canvas",{ref:E,width:i.size.x||1,height:i.size.y||1,...d}),e]})}const Ct=S.forwardRef(wt);var P,H,k,B,W,T,j;class Et{constructor(t){f(this,P,void 0);f(this,H,void 0);f(this,k,void 0);u(this,"limitFps");f(this,B,void 0);f(this,W,!0);f(this,T,void 0);f(this,j,void 0);const{gridRenderer:e,renderOptions:i,simulation:o,limitFps:h,onStep:d}=t;a(this,P,e),a(this,H,i),a(this,k,o),this.limitFps=h,a(this,B,d),this._stepInternal=this._stepInternal.bind(this),a(this,T,requestAnimationFrame(this._stepInternal))}_stepInternal(t){this.step(t),a(this,T,requestAnimationFrame(this._stepInternal))}get simulation(){return s(this,k)}destroy(){var t,e;this.stop(),(t=s(this,k))==null||t.clear(),(e=s(this,P))==null||e.clear(),s(this,T)!==void 0&&cancelAnimationFrame(s(this,T))}start(){s(this,W)||(a(this,W,!0),this._stepInternal(Date.now()))}stop(){a(this,W,!1)}restart(){this.destroy(),this.start()}isRunning(){return s(this,W)}registerSimulation(t){s(this,k)&&(console.error("already have one"),this.destroy()),a(this,k,t)}registerGridRenderer(t,e){a(this,P,t),e&&a(this,H,e)}step(t){if(s(this,j)===void 0)a(this,j,t);else{const e=(t-s(this,j))/1e3;if(this.limitFps===void 0||e>1/this.limitFps){if(s(this,k)){const i=s(this,k).grid;if(!i)throw new Error("simulation or grid must be provided");s(this,W)&&s(this,k).step(e),s(this,B)&&s(this,B).call(this,{grid:i,deltaTime:e}),s(this,P)&&s(this,P).render(i,{resetChanges:!1,...s(this,H)}),i.resetChanges()}a(this,j,t)}}}}P=new WeakMap,H=new WeakMap,k=new WeakMap,B=new WeakMap,W=new WeakMap,T=new WeakMap,j=new WeakMap;function Rt(r,t){var y,c;const{limitFps:e,renderOptions:i,children:o,initSimulation:h,onStep:d,...E}=r,p=S.useRef(null),R=S.useRef(null),m=S.useRef();S.useImperativeHandle(t,()=>R.current),S.useEffect(()=>{if(p.current&&!R.current)return R.current=new Et({gridRenderer:p.current,simulation:h(),limitFps:e,renderOptions:i,onStep:d}),()=>{var g;(g=R.current)==null||g.destroy()}}),S.useEffect(()=>{var g;p.current&&(lt.isEqual(i,m.current)||(m.current=i,(g=R.current)==null||g.registerGridRenderer(p.current,i)))},[i]);function I(g){g.preventDefault()}return it.jsx(Ct,{ref:p,grid:(c=(y=R.current)==null?void 0:y.simulation)==null?void 0:c.grid,children:o,onContextMenu:I,...E})}const At=S.forwardRef(Rt);export{mt as C,rt as G,kt as S,l as V,At as a,nt as b,pt as n,dt as u};
