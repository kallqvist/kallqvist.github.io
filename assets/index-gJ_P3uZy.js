var B=Object.defineProperty;var D=(s,t,e)=>t in s?B(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var p=(s,t,e)=>(D(s,typeof t!="symbol"?t+"":t,e),e),G=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var r=(s,t,e)=>(G(s,t,"read from private field"),e?e.call(s):t.get(s)),z=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},I=(s,t,e,i)=>(G(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var F=(s,t,e)=>(G(s,t,"access private method"),e);import{r as M,j as O}from"./index-VwKpoZVL.js";function H(s){const[t,e]=M.useState(s),i=M.useRef(t);return[i,a=>{a instanceof Function?(i.current=a(i.current),e(a)):(i.current=a,e(a))}]}class J{constructor(t){p(this,"grid");p(this,"index");p(this,"position");p(this,"dir",{NW:()=>this.getNeighbourInDirection(f.NW),N:()=>this.getNeighbourInDirection(f.N),NE:()=>this.getNeighbourInDirection(f.NE),E:()=>this.getNeighbourInDirection(f.E),SE:()=>this.getNeighbourInDirection(f.SE),S:()=>this.getNeighbourInDirection(f.S),SW:()=>this.getNeighbourInDirection(f.SW),W:()=>this.getNeighbourInDirection(f.W)});this.grid=t,this.index=-1,this.position=new n(0,0)}getNeighbourInDirection(t){if(this.position)return this.grid.getAtPosition(this.position.add(t))}getNeighbourhood(){const t=[];return Y.forEach(e=>{const i=this.getNeighbourInDirection(e);t.push(i)}),t}getLineTo(t,e){return this.grid.getPositionsInLine(this.position,t,e)}swapWith(t){this.grid.swap(this,t)}getRGBA(){return[0,0,0,0]}}var S,b;class q{constructor(t){p(this,"size");p(this,"alternateRows");p(this,"createEmpty");z(this,S,void 0);z(this,b,void 0);const{size:e,alternateRows:i,createEmpty:u}={alternateRows:!1,...t};I(this,S,[]),I(this,b,new Set([])),this.size=e,this.alternateRows=i,this.createEmpty=u,this.clear()}clear(){for(let t=0;t<this.size.x*this.size.y;t++)this.setAtIndex(t,this.createEmpty(this))}indexOf(t){return t?t.index:-1}positionOf(t){if(t)return t.position}forEach(t,e){const{alternateRowDirections:i,evenRows:u,oddRows:a,evenCols:c,oddCols:g}={evenRows:!0,oddRows:!0,evenCols:!0,oddCols:!0,...e},C=new Set,N=r(this,S);let E=(l,k)=>{const d=this.position2index(new n(l,k)),h=N[d];if(!h||C.has(h))return;if(t(h,d)===!1)return!1;C.add(h)};for(let l=0;l<this.size.y;l++){const k=l%2;if(k===0&&!u)continue;if(k===1&&!a)continue;let d;if(i&&l%2===0&&Math.random()<.5){for(let h=this.size.x-1;h>=0;h--){const m=h%2;if(!(m===0&&!c)&&!(m===1&&!g)&&(d=E(h,l),d===!1))break}if(d===!1)break;continue}for(let h=0;h<this.size.x;h++){const m=h%2;if(!(m===0&&!c)&&!(m===1&&!g)&&(d=E(h,l),d===!1))break}if(d===!1)break}}map(t){return r(this,S).map(t)}forEachChanged(t,e=!1){r(this,b).forEach(i=>t(i)),e&&this.resetChanges()}registerChanged(t){r(this,b).add(t)}resetChanges(){r(this,b).clear()}position2index(t){const{x:e,y:i}=t;return e<0||e>=this.size.x||i<0||i>=this.size.y?-1:e+i*this.size.x}index2position(t){let e=Math.floor(t/this.size.x),i=t-e*this.size.x;return new n(i,e)}get(t){return this.getAtPosition(t)}set(t,e){this.setAtPosition(t,e)}getPositionsInLine(t,e,i){const{excludeStart:u,excludeEnd:a}=i||{},c=e.x-t.x,g=e.y-t.y;if(c===0&&g===0)return[t];const C=c<0?-1:1,N=g<0?-1:1,E=Math.abs(c),l=Math.abs(g),k=E>=l,d=Math.min(E,l),h=Math.max(E,l),m=d/h,o=[];for(let y=u?1:0;y<(a?h:h+1);y++){const x=Math.round(y*m);k?o.push(new n(t.x+y*C,t.y+x*N)):o.push(new n(t.x+x*C,t.y+y*N))}return o}getAtPosition(t){const e=this.position2index(t);if(e!==-1)return this.getAtIndex(e)}setAtPosition(t,e){const i=this.position2index(t);this.setAtIndex(i,e)}getAtIndex(t){return r(this,S)[t]}swap(t,e){const i=this.indexOf(t),u=this.indexOf(e),a=r(this,S)[i];this.setAtIndex(i,r(this,S)[u]),this.setAtIndex(u,a)}setAtIndex(t,e){e.index=t,e.position=this.index2position(t),r(this,S)[t]=e,this.registerChanged(e)}}S=new WeakMap,b=new WeakMap;var R;class K extends J{constructor(){super(...arguments);z(this,R,new Set)}haveChanges(){return r(this,R).size>0}registerChange(e){r(this,R).add(e)}resetChanges(){r(this,R).clear()}forEachChangedCell(e,i=!1){r(this,R).forEach(u=>e(u)),i&&r(this,R).clear()}}R=new WeakMap;function Q(s){return new Worker("/assets/worker-G1OrwRg-.js",{name:s==null?void 0:s.name})}const U=[[!1,!1],[!1,!0],[!0,!1],[!0,!0]];var w,v,A,W,L;class X extends q{constructor(e){const{chunkSize:i,workerize:u,...a}=e;super(a);z(this,W);p(this,"chunkSize",new n(64,64));z(this,w,void 0);z(this,v,void 0);z(this,A,void 0);i&&(this.chunkSize=i),I(this,w,new q({size:this.size.divide(this.chunkSize),createEmpty:c=>new K(c)})),I(this,v,u||!1),r(this,v)&&(I(this,A,new Q),r(this,A).onmessage=this.handleWorkerResponse),this.clearChunks()}clearChunks(){for(let e=0;e<r(this,w).size.x*r(this,w).size.y;e++)r(this,w).setAtIndex(e,r(this,w).createEmpty(r(this,w)))}chunkOf(e){if(!e||!this.chunkSize)return;const i=e.position.divide(this.chunkSize).floor();return r(this,w).get(i)}forEachChunk(e,i){r(this,w).forEach(e,i)}mapChunks(e){return r(this,w).map(e)}forEachChangedChunkPass(e,i=!1){this.forEachChunkPass(u=>{const a=u.filter(c=>c.haveChanges());a.length!==0&&(e(a),i&&a.forEach(c=>c.resetChanges()))})}forEachChunkPass(e){U.forEach(([i,u],a)=>{const c=[];this.forEachChunk(g=>{c.push(g)},{evenRows:!i,oddRows:i,evenCols:!u,oddCols:u}),r(this,v)?F(this,W,L).call(this,()=>e(c,a)):e(c,a)})}handleWorkerResponse(e){console.log("worker says:",this,e.data)}}w=new WeakMap,v=new WeakMap,A=new WeakMap,W=new WeakSet,L=function(e){r(this,A)&&r(this,A).postMessage({f:e})};class n{constructor(t=0,e=0){p(this,"x");p(this,"y");this.x=t,this.y=e}clone(){return new n(this.x,this.y)}add(t){return new n(this.x+t.x,this.y+t.y)}addScalar(t){return new n(this.x+t,this.y+t)}subtract(t){return new n(this.x-t.x,this.y-t.y)}subtractScalar(t){return new n(this.x-t,this.y-t)}multiply(t){return new n(this.x*t.x,this.y*t.y)}multiplyScalar(t){return new n(this.x*t,this.y*t)}divide(t){return new n(this.x/t.x,this.y/t.y)}divideScalar(t){return new n(this.x/t,this.y/t)}mod(t){return new n(this.x%t.x,this.y%t.y)}modScalar(t){return new n(this.x%t,this.y%t)}abs(){return new n(Math.abs(this.x),Math.abs(this.y))}round(){return new n(Math.round(this.x),Math.round(this.y))}floor(){return new n(Math.floor(this.x),Math.floor(this.y))}ceil(){return new n(Math.ceil(this.x),Math.ceil(this.y))}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){const t=this.length();return t===0?n.zero():this.multiplyScalar(1/t)}dot(t){const e=this.multiply(t);return e.x+e.y}isEqual(t){return this.x===t.x&&this.y===t.y}isNear(t,e=.001){const i=this.subtract(t).abs();return i.x<=e&&i.y<=e}toArray(){return[this.x,this.y]}join(t){return this.toArray().join(t)}static fromArray([t,e]){return new n(t,e)}static zero(){return new n}static one(){return new n(1,1)}static up(){return new n(0,-1)}static down(){return new n(0,1)}static left(){return new n(-1,0)}static right(){return new n(-1,0)}static random(){return new n(Math.random(),Math.random())}}const f={NW:new n(-1,-1),N:new n(0,-1),NE:new n(1,-1),E:new n(1,0),SE:new n(1,1),S:new n(0,1),SW:new n(-1,1),W:new n(-1,0)},Y=[f.NW,f.N,f.NE,f.W,f.E,f.SW,f.S,f.SE];function V(s){const{children:t,grid:e,debugDraw:i,pickColor:u,...a}={debugDraw:!1,...s},c=M.useRef(),g=M.useRef(null),C=M.useRef(),[N,E]=H(!0);M.useEffect(()=>{if(e)return E(!0),d(),h(),c.current=requestAnimationFrame(h),()=>{c.current!==void 0&&cancelAnimationFrame(c.current)}},[i,e]);function l(){return g.current?g.current.getContext("2d"):null}function k(){if(C.current)return C.current;if(!e)return;const o=l();if(o)return C.current=o.createImageData(...e.size.toArray()),C.current}function d(){const o=k();o&&(o.data.fill(0),E(!0))}function h(){if(!e)return;const o=l();if(!o)return;const y=k();y&&(N.current===!0?e.forEach(x=>m({imageData:y,cell:x})):e.forEachChanged(x=>m({imageData:y,cell:x}),!0),o.putImageData(y,0,0),i&&e instanceof X&&(o.lineWidth=.25,o.textAlign="right",e.forEachChunkPass((x,T)=>{x.forEach(P=>{o.strokeStyle=P.haveChanges()?"white":"black",o.fillStyle=o.strokeStyle;const j=P.position.multiply(e.chunkSize);o.strokeRect(...j.toArray(),...e.chunkSize.toArray()),o.fillText(P.position.toArray().toString(),...j.add(e.chunkSize).subtractScalar(2).toArray()),o.fillText(T.toString(),...j.add(e.chunkSize.divideScalar(2)).toArray())})})),E(!1),c.current=requestAnimationFrame(h))}function m(o){const{imageData:y,cell:x}=o;x.index!==-1&&e&&y.data.set(u?u({cell:x}):x.getRGBA(),x.index*4)}return e?O.jsxs("div",{className:"grid canvas",children:[O.jsx("canvas",{ref:g,width:e.size.x,height:e.size.y,...a}),t]}):null}export{X as C,J as G,n as V,V as a,q as b,Y as n,H as u};
