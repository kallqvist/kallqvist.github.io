var it=Object.defineProperty;var st=(n,t,e)=>t in n?it(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var u=(n,t,e)=>(st(n,typeof t!="symbol"?t+"":t,e),e),U=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var s=(n,t,e)=>(U(n,t,"read from private field"),e?e.call(n):t.get(n)),w=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},C=(n,t,e,i)=>(U(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e);var q=(n,t,e)=>(U(n,t,"access private method"),e);import{r as R,j as X}from"./index-yvgX-7gA.js";import"./react-spring_web.modern-3aA2RvZl.js";function nt(n){const[t,e]=R.useState(n),i=R.useRef(t);return[i,a=>{a instanceof Function?(i.current=a(i.current),e(a)):(i.current=a,e(a))}]}class Z{constructor(t){u(this,"grid");u(this,"index");u(this,"position");u(this,"dir",{NW:()=>this.getNeighbourInDirection(m.NW),N:()=>this.getNeighbourInDirection(m.N),NE:()=>this.getNeighbourInDirection(m.NE),E:()=>this.getNeighbourInDirection(m.E),SE:()=>this.getNeighbourInDirection(m.SE),S:()=>this.getNeighbourInDirection(m.S),SW:()=>this.getNeighbourInDirection(m.SW),W:()=>this.getNeighbourInDirection(m.W)});this.grid=t,this.index=-1,this.position=new x(0,0)}getNeighbourInDirection(t){if(this.position)return this.grid.getAtPosition(this.position.add(t))}getNeighbourhood(){const t=[];return ht.forEach(e=>{const i=this.getNeighbourInDirection(e);t.push(i)}),t}getLineTo(t,e){return this.grid.getPositionsInLine(this.position,t,e)}swapWith(t){this.grid.swap(this,t)}getRGBA(){return[0,0,0,0]}}var b,A;class Y{constructor(t){u(this,"size");u(this,"alternateRows");u(this,"createEmpty");w(this,b,void 0);w(this,A,void 0);const{size:e,alternateRows:i,createEmpty:o}={alternateRows:!1,...t};C(this,b,[]),C(this,A,new Set([])),this.size=e,this.alternateRows=i,this.createEmpty=o?()=>o(this):()=>new Z(this),this.clear()}clear(){this.resetChanges();for(let t=0;t<this.size.x*this.size.y;t++)this.setAtIndex(t,this.createEmpty())}indexOf(t){return t?t.index:-1}positionOf(t){if(t)return t.position}forEach(t,e){const{alternateRowDirections:i,evenRows:o,oddRows:a,evenCols:c,oddCols:p}={evenRows:!0,oddRows:!0,evenCols:!0,oddCols:!0,...e},S=new Set;let E=(d,y)=>{const f=this.position2index(new x(d,y)),h=s(this,b)[f];if(!h||S.has(h))return;if(t(h,f)===!1)return!1;S.add(h)};for(let d=0;d<this.size.y;d++){const y=d%2;if(y===0&&!o)continue;if(y===1&&!a)continue;let f;if(i&&d%2===0&&Math.random()<.5){for(let h=this.size.x-1;h>=0;h--){const g=h%2;if(!(g===0&&!c)&&!(g===1&&!p)&&(f=E(h,d),f===!1))break}if(f===!1)break;continue}for(let h=0;h<this.size.x;h++){const g=h%2;if(!(g===0&&!c)&&!(g===1&&!p)&&(f=E(h,d),f===!1))break}if(f===!1)break}}map(t){return s(this,b).map(t)}forEachChanged(t,e=!1){s(this,A).forEach(i=>t(i)),e&&this.resetChanges()}registerChanged(t){s(this,A).has(t)||s(this,A).add(t)}resetChanges(){s(this,A).clear()}position2index(t){const{x:e,y:i}=t;return e<0||e>=this.size.x||i<0||i>=this.size.y?-1:e+i*this.size.x}index2position(t){let e=Math.floor(t/this.size.x),i=t-e*this.size.x;return new x(i,e)}get(t){return this.getAtPosition(t)}set(t,e){this.setAtPosition(t,e)}getPositionsInLine(t,e,i){const{excludeStart:o,excludeEnd:a}=i||{},c=e.x-t.x,p=e.y-t.y;if(c===0&&p===0)return[t];const S=c<0?-1:1,E=p<0?-1:1,d=Math.abs(c),y=Math.abs(p),f=d>=y,h=Math.min(d,y),g=Math.max(d,y),M=h/g,l=[];for(let I=o?1:0;I<(a?g:g+1);I++){const v=Math.round(I*M);f?l.push(new x(t.x+I*S,t.y+v*E)):l.push(new x(t.x+v*S,t.y+I*E))}return l}getAtPosition(t){const e=this.position2index(t);if(e!==-1)return this.getAtIndex(e)}setAtPosition(t,e){const i=this.position2index(t);this.setAtIndex(i,e)}getAtIndex(t){return s(this,b)[t]}swap(t,e){const i=this.indexOf(t),o=this.indexOf(e),a=s(this,b)[i];this.setAtIndex(i,s(this,b)[o]),this.setAtIndex(o,a)}setAtIndex(t,e){e.index=t,e.position=this.index2position(t),s(this,b)[t]=e,this.registerChanged(e)}}b=new WeakMap,A=new WeakMap;var N;class rt extends Z{constructor(){super(...arguments);w(this,N,new Set)}haveChanges(){return s(this,N).size>0}registerChange(e){s(this,N).has(e)||s(this,N).add(e)}resetChanges(){s(this,N).clear()}forEachChangedCell(e,i=!1){s(this,N).forEach(o=>e(o)),i&&this.resetChanges()}}N=new WeakMap;function ot(n){return new Worker("/assets/worker-G1OrwRg-.js",{name:n==null?void 0:n.name})}var k,F,W,L,H,$,B,V,J,_;class at extends Y{constructor(e){const{chunkSize:i,workerize:o,...a}=e;super(a);w(this,H);w(this,B);w(this,J);u(this,"chunkSize",new x(64,64));w(this,k,void 0);w(this,F,void 0);w(this,W,void 0);w(this,L,[]);this.chunkSize=i||new x(64,64),C(this,k,new Y({size:this.size.divide(this.chunkSize),createEmpty:c=>new rt(c)})),C(this,F,o||!1),s(this,F)&&(C(this,W,new ot),s(this,W).onmessage=this.handleWorkerResponse),q(this,H,$).call(this)}chunkOf(e){if(!e||!this.chunkSize)return;const i=e.position.divide(this.chunkSize).floor();return s(this,k).get(i)}forEachChunk(e,i){s(this,k).forEach(e,i)}mapChunks(e){return s(this,k).map(e)}forEachChangedChunkPass(e,i=!1){this.forEachChunkPass(o=>{const a=o.filter(c=>c.haveChanges());a.length!==0&&(e(a),i&&a.forEach(c=>c.resetChanges()))})}forEachChunkPass(e){s(this,L).forEach((i,o)=>{s(this,F)?q(this,J,_).call(this,()=>e(i,o)):e(i,o)})}handleWorkerResponse(e){console.log("worker says:",this,e.data)}}k=new WeakMap,F=new WeakMap,W=new WeakMap,L=new WeakMap,H=new WeakSet,$=function(){for(let e=0;e<s(this,k).size.x*s(this,k).size.y;e++)s(this,k).setAtIndex(e,s(this,k).createEmpty());q(this,B,V).call(this)},B=new WeakSet,V=function(){const e=[[!1,!1],[!1,!0],[!0,!1],[!0,!0]],i=[];e.forEach(([o,a])=>{const c=[];this.forEachChunk(p=>{c.push(p)},{evenRows:!o,oddRows:o,evenCols:!a,oddCols:a}),i.push(c)}),C(this,L,i)},J=new WeakSet,_=function(e){s(this,W)&&s(this,W).postMessage({f:e})};const r=class r{constructor(t=0,e=0){u(this,"x");u(this,"y");this.x=t,this.y=e}clone(){return new r(this.x,this.y)}add(t){return new r(this.x+t.x,this.y+t.y)}addScalar(t){return new r(this.x+t,this.y+t)}subtract(t=r.zero){return new r(this.x-t.x,this.y-t.y)}subtractScalar(t){return new r(this.x-t,this.y-t)}multiply(t){return new r(this.x*t.x,this.y*t.y)}multiplyScalar(t){return new r(this.x*t,this.y*t)}divide(t){return new r(this.x/t.x,this.y/t.y)}divideScalar(t){return new r(this.x/t,this.y/t)}mod(t){return new r(this.x%t.x,this.y%t.y)}modScalar(t){return new r(this.x%t,this.y%t)}abs(){return new r(Math.abs(this.x),Math.abs(this.y))}round(){return new r(Math.round(this.x),Math.round(this.y))}floor(){return new r(Math.floor(this.x),Math.floor(this.y))}ceil(){return new r(Math.ceil(this.x),Math.ceil(this.y))}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){const t=this.length();return t===0?r.zero:this.multiplyScalar(1/t)}dot(t){const e=this.multiply(t);return e.x+e.y}isEqual(t){return this.x===t.x&&this.y===t.y}isNear(t,e=.001){const i=this.subtract(t).abs();return i.x<=e&&i.y<=e}toArray(){return[this.x,this.y]}join(t){return this.toArray().join(t)}static fromArray([t,e]){return new r(t,e)}static random(){return new r(Math.random(),Math.random())}};u(r,"zero",new r),u(r,"one",new r(1,1)),u(r,"up",new r(0,-1)),u(r,"down",new r(0,1)),u(r,"left",new r(-1,0)),u(r,"right",new r(1,0));let x=r;const m={NW:new x(-1,-1),N:new x(0,-1),NE:new x(1,-1),E:new x(1,0),SE:new x(1,1),S:new x(0,1),SW:new x(-1,1),W:new x(-1,0)},ht=[m.NW,m.N,m.NE,m.W,m.E,m.SW,m.S,m.SE];class mt{constructor(t){u(this,"grid");const{gridOptions:e}=t;this.grid=this.createGrid(e)}clear(){this.grid.clear()}}function ut(n,t){const{children:e,grid:i,debugDraw:o,pickColor:a,...c}={debugDraw:!1,...n},p=R.useRef(null),S=R.useRef(),[E,d]=nt(!0);R.useImperativeHandle(t,()=>({clear:h,render:g})),R.useEffect(()=>{i&&(h(),g(i))},[i]);function y(){return p.current?p.current.getContext("2d"):null}function f(){if(S.current)return S.current;const l=y();if(l)return S.current=l.createImageData(...i.size.toArray()),S.current}function h(){const l=f();l&&(l.data.fill(0),d(!0))}function g(l,I={debugDraw:o}){const{debugDraw:v,resetChanges:tt}={debugDraw:!1,resetChanges:!1,...I};if(!l)return;const z=y();if(!z)return;const T=f();T&&(E.current===!0?l.forEach(j=>M({imageData:T,cell:j})):l.forEachChanged(j=>M({imageData:T,cell:j}),tt),z.putImageData(T,0,0),v&&l instanceof at&&(z.lineWidth=.25,z.textAlign="right",l.forEachChunkPass((j,et)=>{j.forEach(K=>{z.strokeStyle=K.haveChanges()?"white":"black",z.fillStyle=z.strokeStyle;const Q=K.position.multiply(l.chunkSize);z.strokeRect(...Q.toArray(),...l.chunkSize.toArray()),z.fillText(K.position.toArray().toString(),...Q.add(l.chunkSize).subtractScalar(2).toArray()),z.fillText(et.toString(),...Q.add(l.chunkSize.divideScalar(2)).toArray())})})),d(!1))}function M(l){const{imageData:I,cell:v}=l;v.index!==-1&&I.data.set(a?a({cell:v}):v.getRGBA(),v.index*4)}if(i)return X.jsxs("div",{className:"grid canvas",children:[X.jsx("canvas",{ref:p,width:i.size.x||1,height:i.size.y||1,...c}),e]})}const ct=R.forwardRef(ut);var O,D,G,P;class lt{constructor(t){u(this,"gridRenderer");u(this,"renderOptions");u(this,"simulation");u(this,"limitFps");w(this,O,void 0);w(this,D,!0);w(this,G,void 0);w(this,P,void 0);const{gridRenderer:e,renderOptions:i,simulation:o,limitFps:a,onStep:c}=t;this.gridRenderer=e,this.renderOptions=i,this.simulation=o,this.limitFps=a,C(this,O,c),this._stepInternal=this._stepInternal.bind(this),this.start()}_stepInternal(t){s(this,D)!==!1&&(this.step(t),C(this,G,requestAnimationFrame(this._stepInternal)))}destroy(){this.stop()}start(){s(this,D)||(C(this,D,!0),this._stepInternal(Date.now()))}stop(){C(this,D,!1),s(this,G)!==void 0&&cancelAnimationFrame(s(this,G))}restart(){this.stop(),this.simulation&&this.simulation.clear(),this.gridRenderer&&this.gridRenderer.clear(),this.start()}isRunning(){return s(this,D)}step(t){if(s(this,P)===void 0)C(this,P,t);else{const e=(t-s(this,P))/1e3;if(this.limitFps===void 0||e>1/this.limitFps){if(this.simulation){const i=this.simulation.grid;if(!i)throw new Error("simulation or grid must be provided");this.simulation.step(e),s(this,O)&&s(this,O).call(this,{grid:i,deltaTime:e}),this.gridRenderer&&this.gridRenderer.render(i,{resetChanges:!1,...this.renderOptions}),i.resetChanges()}C(this,P,t)}}}}O=new WeakMap,D=new WeakMap,G=new WeakMap,P=new WeakMap;function dt(n,t){var f,h;const{limitFps:e,renderOptions:i,children:o,initSimulation:a,onStep:c,...p}=n,{debugDraw:S}=i||{},E=R.useRef(null),d=R.useRef();R.useImperativeHandle(t,()=>d.current),R.useEffect(()=>{if(!E.current)return;if(d.current){console.error("already exists");return}const g=a(),M=new lt({simulation:g,gridRenderer:E.current,limitFps:e,renderOptions:i,onStep:c});return d.current=M,()=>{M.destroy()}},[S]);function y(g){g.preventDefault()}return X.jsx(ct,{ref:E,grid:(h=(f=d.current)==null?void 0:f.simulation)==null?void 0:h.grid,children:o,onContextMenu:y,...p})}const wt=R.forwardRef(dt);export{at as C,Z as G,mt as S,x as V,wt as a,Y as b,ht as n,nt as u};
