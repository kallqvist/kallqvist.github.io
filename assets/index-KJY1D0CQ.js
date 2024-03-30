var v=Object.defineProperty;var P=(r,t,e)=>t in r?v(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var x=(r,t,e)=>(P(r,typeof t!="symbol"?t+"":t,e),e),C=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var w=(r,t,e)=>(C(r,t,"read from private field"),e?e.call(r):t.get(r)),S=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},M=(r,t,e,n)=>(C(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e);import{r as R,j as W}from"./index-HCLPNXdc.js";function F(r){const[t,e]=R.useState(r),n=R.useRef(t);return[n,o=>{o instanceof Function?(n.current=o(n.current),e(o)):(n.current=o,e(o))}]}class q{constructor(t){x(this,"grid");x(this,"index");x(this,"position");x(this,"dir",{NW:()=>this.getNeighbourInDirection(a.NW),N:()=>this.getNeighbourInDirection(a.N),NE:()=>this.getNeighbourInDirection(a.NE),E:()=>this.getNeighbourInDirection(a.E),SE:()=>this.getNeighbourInDirection(a.SE),S:()=>this.getNeighbourInDirection(a.S),SW:()=>this.getNeighbourInDirection(a.SW),W:()=>this.getNeighbourInDirection(a.W)});this.grid=t,this.index=-1,this.position=new i(0,0)}getNeighbourInDirection(t){if(this.position)return this.grid.getAtPosition(this.position.add(t))}getNeighbourhood(){const t=[];return G.forEach(e=>{const n=this.getNeighbourInDirection(e);t.push(n)}),t}getLineTo(t,e){return this.grid.getPositionsInLine(this.position,t,e)}swapWith(t){this.grid.swap(this,t)}getRGBA(){return[0,0,0,0]}}var y,I;class L{constructor(t){x(this,"width");x(this,"height");x(this,"alternateRows");x(this,"createEmpty");S(this,y,void 0);S(this,I,void 0);const{width:e,height:n,alternateRows:f,createEmpty:o}={alternateRows:!1,...t};M(this,y,[]),M(this,I,new Set([])),this.width=e,this.height=n,this.alternateRows=f,this.createEmpty=o,this.clear()}clear(){for(let t=0;t<this.width*this.height;t++)this.setAtIndex(t,this.createEmpty(this))}indexOf(t){return t?t.index:-1}positionOf(t){if(t)return t.position}forEach(t,e){const{alternateRowDirections:n,evenRows:f,oddRows:o,evenCols:g,oddCols:l}={evenRows:!0,oddRows:!0,evenCols:!0,oddCols:!0,...e},N=new Set,E=w(this,y);let m=(u,b)=>{const c=this.position2index(new i(u,b)),s=E[c];if(!s||N.has(s))return;if(t(s,c)===!1)return!1;N.add(s)};for(let u=0;u<this.height;u++){const b=u%2;if(b===0&&!f)continue;if(b===1&&!o)continue;let c;if(n&&u%2===0&&Math.random()<.5){for(let s=this.width-1;s>=0;s--){const h=s%2;if(!(h===0&&!g)&&!(h===1&&!l)&&(c=m(s,u),c===!1))break}if(c===!1)break;continue}for(let s=0;s<this.width;s++){const h=s%2;if(!(h===0&&!g)&&!(h===1&&!l)&&(c=m(s,u),c===!1))break}if(c===!1)break}}map(t){return w(this,y).map(t)}forEachChanged(t,e=!0){w(this,I).forEach(n=>t(n)),e&&w(this,I).clear()}position2index(t){const{x:e,y:n}=t;return e<0||e>=this.width||n<0||n>=this.height?-1:e+n*this.width}index2position(t){let e=Math.floor(t/this.width),n=t-e*this.width;return new i(n,e)}get(t){return this.getAtPosition(t)}set(t,e){this.setAtPosition(t,e)}getPositionsInLine(t,e,n){const{excludeStart:f,excludeEnd:o}=n||{},g=e.x-t.x,l=e.y-t.y;if(g===0&&l===0)return[t];const N=g<0?-1:1,E=l<0?-1:1,m=Math.abs(g),u=Math.abs(l),b=m>=u,c=Math.min(m,u),s=Math.max(m,u),h=c/s,d=[];for(let p=f?1:0;p<(o?s:s+1);p++){const A=Math.round(p*h);b?d.push(new i(t.x+p*N,t.y+A*E)):d.push(new i(t.x+A*N,t.y+p*E))}return d}getAtPosition(t){const e=this.position2index(t);if(e!==-1)return this.getAtIndex(e)}setAtPosition(t,e){const n=this.position2index(t);this.setAtIndex(n,e)}getAtIndex(t){return w(this,y)[t]}registerChanged(t){w(this,I).add(t)}swap(t,e){const n=this.indexOf(t),f=this.indexOf(e),o=w(this,y)[n];this.setAtIndex(n,w(this,y)[f]),this.setAtIndex(f,o)}setAtIndex(t,e){e.index=t,e.position=this.index2position(t),w(this,y)[t]=e,this.registerChanged(e)}}y=new WeakMap,I=new WeakMap;class i{constructor(t=0,e=0){x(this,"x");x(this,"y");this.x=t,this.y=e}clone(){return new i(this.x,this.y)}add(t){return new i(this.x+t.x,this.y+t.y)}addScalar(t){return new i(this.x+t,this.y+t)}subtract(t){return new i(this.x-t.x,this.y-t.y)}subtractScalar(t){return new i(this.x-t,this.y-t)}multiply(t){return new i(this.x*t.x,this.y*t.y)}multiplyScalar(t){return new i(this.x*t,this.y*t)}divide(t){return new i(this.x/t.x,this.y/t.y)}divideScalar(t){return new i(this.x/t,this.y/t)}mod(t){return new i(this.x%t.x,this.y%t.y)}modScalar(t){return new i(this.x%t,this.y%t)}abs(){return new i(Math.abs(this.x),Math.abs(this.y))}round(){return new i(Math.round(this.x),Math.round(this.y))}floor(){return new i(Math.floor(this.x),Math.floor(this.y))}ceil(){return new i(Math.ceil(this.x),Math.ceil(this.y))}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){const t=this.length();return t===0?i.zero():this.multiplyScalar(1/t)}dot(t){const e=this.multiply(t);return e.x+e.y}isEqual(t){return this.x===t.x&&this.y===t.y}isNear(t,e=.001){const n=this.subtract(t).abs();return n.x<=e&&n.y<=e}toArray(){return[this.x,this.y]}static fromArray([t,e]){return new i(t,e)}static zero(){return new i}static one(){return new i(1,1)}static up(){return new i(0,-1)}static down(){return new i(0,1)}static left(){return new i(-1,0)}static right(){return new i(-1,0)}static random(){return new i(Math.random(),Math.random())}}const a={NW:new i(-1,-1),N:new i(0,-1),NE:new i(1,-1),E:new i(1,0),SE:new i(1,1),S:new i(0,1),SW:new i(-1,1),W:new i(-1,0)},G=[a.NW,a.N,a.NE,a.W,a.E,a.SW,a.S,a.SE];function z(r){const{children:t,grid:e,pickColor:n,...f}=r,o=R.useRef(),g=R.useRef(null),l=R.useRef(),[N,E]=F(!0);R.useEffect(()=>(o.current=requestAnimationFrame(c),()=>{o.current!==void 0&&cancelAnimationFrame(o.current)}),[]),R.useEffect(()=>{e&&(E(!0),b(),c())},[e]);function m(){return g.current?g.current.getContext("2d"):null}function u(){if(l.current)return l.current;if(!e)return;const h=m();if(h)return l.current=h.createImageData(e.width,e.height),l.current}function b(){const h=u();h&&(h.data.fill(0),E(!0))}function c(){if(!e)return;const h=m();if(!h)return;const d=u();d&&(N.current===!0?e.forEach(p=>s(d,p)):e.forEachChanged(p=>s(d,p)),h.putImageData(d,0,0),E(!1),o.current=requestAnimationFrame(c))}function s(h,d){d.index!==-1&&e&&h.data.set(n?n(d):d.getRGBA(),d.index*4)}return e?W.jsxs("div",{className:"grid canvas",children:[W.jsx("canvas",{ref:g,width:e.width,height:e.height,...f}),t]}):null}export{q as G,i as V,L as a,z as b,G as n,F as u};
