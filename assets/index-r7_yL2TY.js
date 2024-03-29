var ye=Object.defineProperty;var ve=(i,e,t)=>e in i?ye(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>(ve(i,typeof e!="symbol"?e+"":e,t),t),I=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var f=(i,e,t)=>(I(i,e,"read from private field"),t?t.call(i):e.get(i)),F=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},y=(i,e,t,s)=>(I(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t);var se=(i,e,t,s)=>({set _(u){y(i,e,u,t)},get _(){return f(i,e,s)}}),ie=(i,e,t)=>(I(i,e,"access private method"),t);import{r as g,_ as re,j as m}from"./index-DSvTwJ02.js";import{G as Me,V as l,a as xe,u as j,b as Se}from"./index-HEwvLPao.js";var W;class O extends Me{constructor(t,s){super(t);r(this,"empty");r(this,"shouldTryAwakeNeighbours");r(this,"color");F(this,W,!1);r(this,"index",-1);r(this,"position",new l(0,0));r(this,"brushSize",4);r(this,"brushFillRate",.05);r(this,"velocity",new l(0,0));r(this,"gravity",new l(0,9));const{empty:u,shouldTryAwakeNeighbours:n}={empty:!1,shouldTryAwakeNeighbours:!0,...s};this.empty=u,this.shouldTryAwakeNeighbours=n,this.color=this.getRGBA()}isSleeping(){return f(this,W)}sleep(){y(this,W,!0),this.grid.registerChanged(this)}awake(){y(this,W,!1),this.grid.registerChanged(this)}die(){this.grid.set(this.position,new k(this.grid))}getRGBA(){return this.color}}W=new WeakMap;class k extends O{constructor(t){super(t,{empty:!0});r(this,"brushSize",2);r(this,"brushFillRate",1);r(this,"color",[50,50,50,255]);this.sleep()}awake(){}step(){}}class G extends O{}class A extends O{constructor(t,s){super(t,s);r(this,"numFramesOfHorizontalMovement",0);r(this,"maxFramesOfHorizontalMovement",100+Math.random()*25);r(this,"numFramesWithoutMovement",0);r(this,"maxFramesWithoutMovement",100+Math.random()*25);r(this,"dispersionRate");r(this,"erosionFactor");const{dispersionRate:u,erosionFactor:n}=s||{};this.dispersionRate=u||50,this.erosionFactor=n||.005}step(t){var n,h;let s=!1;const u=[-1,1];if(Math.random()>.5&&u.reverse(),this.isSleeping()){const a=this.getNeighbourInDirection(this.gravity.y<0?l.up():l.down());a!=null&&a.empty?(this.swapWith(a),this.numFramesOfHorizontalMovement=0):u.every(c=>{const d=this.getNeighbourInDirection(new l(c,0));return d!=null&&d.empty?(this.swapWith(d),!1):!0})}else{this.velocity=this.velocity.add(this.gravity.multiplyScalar(t));let a=this;if(this.getLineTo(this.position.add(this.velocity),{excludeStart:!0}).every(c=>{const d=this.grid.get(c);return d!=null&&d.empty?(a=d,!0):!1}),a!==this)this.swapWith(a),s=!0,this.numFramesOfHorizontalMovement=0;else if(this.numFramesOfHorizontalMovement<=this.maxFramesOfHorizontalMovement){const c=this.dir.N();c instanceof A&&Math.random()<5e-4?this.swapWith(c):u.every(d=>{const N=this.grid;if(this.erosionFactor>0){const b=this.dir.S();if(b instanceof E&&Math.random()<this.erosionFactor)return this.swapWith(b),!0}return N.getPositionsInLine(this.position,this.position.add(new l(d*this.dispersionRate,0)),{excludeStart:!0}).every(b=>{const p=N.getAtPosition(b);return p!=null&&p.empty?(this.swapWith(p),s=!0,this.numFramesOfHorizontalMovement++,!1):!(p instanceof G)}),!s})}else((n=this.dir.W())!=null&&n.empty||(h=this.dir.E())!=null&&h.empty)&&this.die()}s?(u.every(a=>{const c=this.getNeighbourInDirection(new l(a,0));return c!=null&&c.empty||c==null||c.awake(),!0}),this.numFramesWithoutMovement=0):(this.numFramesWithoutMovement++,this.numFramesWithoutMovement>=this.maxFramesWithoutMovement&&this.sleep())}}var D,z;class E extends G{constructor(){super(...arguments);F(this,D,0);F(this,z,100)}step(t){let s=!1;const u=[-1,1];if(Math.random()>=.5&&u.reverse(),this.isSleeping()){const n=this.dir.S();(n!=null&&n.empty||n instanceof A)&&(this.swapWith(n),s=!0)}else{this.velocity=this.velocity.add(this.gravity.multiplyScalar(t)),this.velocity=this.velocity.multiply(new l(.95,1));let n=this;this.getLineTo(this.position.add(this.velocity),{excludeStart:!0}).every(h=>{const a=this.grid.get(h);return a!=null&&a.empty?(n=a,!0):!1}),n!==this?(this.swapWith(n),s=!0):u.every(h=>{const a=this.getNeighbourInDirection(new l(h,1));return a!=null&&a.empty||a instanceof A?(this.swapWith(a),s=!0,!1):!0})}s?(u.every(n=>{const h=this.getNeighbourInDirection(new l(n,0));return h!=null&&h.empty||h==null||h.awake(),!0}),y(this,D,0)):(se(this,D)._++,f(this,D)>=f(this,z)&&this.sleep())}}D=new WeakMap,z=new WeakMap;class Fe extends E{constructor(){super(...arguments);r(this,"_r",Math.random()*20);r(this,"color",[191-this._r,155-this._r,123-this._r,255])}}class B extends A{}class ne extends A{constructor(t,s){super(t,{dispersionRate:8,erosionFactor:0,shouldTryAwakeNeighbours:!1,...s});r(this,"gravity",new l(0,-.25));this.velocity=this.velocity.add(l.random().multiplyScalar(2).add(l.one().multiplyScalar(-1)).multiplyScalar(.025).multiply(l.right()))}step(t){const s=this.dir.N();if(s instanceof B){this.swapWith(s);return}super.step(t)}}class Re extends ne{constructor(){super(...arguments);r(this,"color",[90,90,90,Math.round(Math.random()*185)+70])}}class L extends E{constructor(){super(...arguments);r(this,"_r",Math.random()*20);r(this,"color",[220-this._r,220-this._r,255,255])}step(t){if(!this.isSleeping()||Math.random()<.995){super.step(t);return}this.getNeighbourhood().map(n=>n===void 0?.25:n.empty?.5:n instanceof L?-1:n instanceof G?2:n instanceof B?1:0).reduce((n,h)=>n+h)>0&&this.die()}getRGBA(){return this.isSleeping()?this.color:[220,220,255,255]}die(){this.grid.set(this.position,Math.random()<.25?new q(this.grid):new k(this.grid))}}class oe extends ne{constructor(){super(...arguments);r(this,"_r",Math.round(Math.random()*80)+100);r(this,"color",[255,255,255,this._r])}die(){this.grid.set(this.position,Math.random()<.05?new q(this.grid):new k(this.grid))}}class ae extends G{constructor(t,s){super(t,{shouldTryAwakeNeighbours:!1,...s});r(this,"brushSize",2);r(this,"brushFillRate",1);this.sleep()}awake(){}step(){}}class be extends ae{constructor(){super(...arguments);r(this,"color",[100,100,100,255])}}class q extends B{constructor(t,s){super(t,{...s,dispersionRate:3});r(this,"_r",Math.round(Math.random()*100)+155);r(this,"color",[46,137,255,this._r])}die(){this.grid.set(this.position,Math.random()<.25?new oe(this.grid):new k(this.grid))}}class We extends ae{constructor(){super(...arguments);r(this,"_r",Math.random()*20);r(this,"color",[180-this._r,100-this._r,100-this._r,255-this._r])}}var v,R,C,he;class De{constructor(e){F(this,C);F(this,v,void 0);F(this,R,!0);r(this,"materialPalette");y(this,v,new xe({...e,createEmpty:t=>new k(t)})),this.materialPalette=ie(this,C,he).call(this,f(this,v))}isRunning(){return f(this,R)}start(){y(this,R,!0)}stop(){y(this,R,!1)}restart(){this.stop(),f(this,v).clear(),this.start()}getGrid(){return f(this,v)}step(e){if(!f(this,R))return;f(this,v).forEach(s=>{s.empty||s.step(e)},{alternateRows:!0})}}v=new WeakMap,R=new WeakMap,C=new WeakSet,he=function(e){return{empty:()=>new k(e),sand:()=>new Fe(e),smoke:()=>new Re(e),snow:()=>new L(e),steam:()=>new oe(e),stone:()=>new be(e),water:()=>new q(e),wood:()=>new We(e)}};function je(){var K;const t=g.useRef(null),s=g.useRef(),u=g.useRef(),n=g.useRef(),h=g.useRef(),a=g.useRef(void 0),[c,d]=j(!1),[N,b]=j([0,0]),[p,ue]=j("sand"),[V,le]=g.useState([0]),[X,ce]=j(!1),[de,me]=g.useState([]);g.useEffect(()=>(s.current=new De({width:320,height:180}),u.current=s.current.getGrid(),me(re.keys(s.current.materialPalette)),J(),n.current=requestAnimationFrame(Y),()=>{n.current!==void 0&&cancelAnimationFrame(n.current)}),[]);function fe(o){o.preventDefault()}function pe(o){const w=o.target,{x:M,y:x,width:S,height:Q}=w.getBoundingClientRect();b([(o.clientX-M)/S,(o.clientY-x)/Q])}function Y(o){if(h.current===void 0)h.current=o;else{const w=(o-h.current)/1e3;{const M=s.current;if(!M)return;const x=M.getGrid();we(x),M.step(w),h.current=o,le(S=>[...S.slice(S.length-100),1/w])}}n.current=requestAnimationFrame(Y)}function ge(){d(!0)}function U(){d(!1),a.current=void 0}function we(o){if(!c.current||!p.current)return;const[w,M]=N.current,x=new l(Math.floor(w*o.width),Math.floor(M*o.height)),S=s.current;if(!S)return;const P=S.materialPalette[p.current];if(!P)return;const _=P(),Z=Math.floor(_.brushSize);(a.current?o.getPositionsInLine(a.current,x):[x]).every($=>{for(let T=-Z;T<_.brushSize;T++)for(let H=-Z;H<_.brushSize;H++){if(Math.random()>_.brushFillRate)continue;const ee=$.x+H;if(ee<0)continue;const te=$.y+T;te<0||o.setAtPosition(new l(ee,te),P())}return!0}),a.current=x}function J(){const o=s.current;o&&o.restart()}return m.jsxs("div",{className:"route sand",ref:t,children:[m.jsxs("div",{className:"materials",children:[m.jsx("div",{className:"material",children:"reset",onClick:J}),m.jsx("div",{className:"separator"}),re.map(de,o=>m.jsx("div",{className:"material",children:o,onClick:()=>ue(o),style:p.current===o?{border:"1px solid white"}:void 0},o)),m.jsx("div",{className:"separator"}),m.jsxs("div",{children:[m.jsx("input",{id:"debugDraw",type:"checkbox",checked:X.current,onChange:o=>ce(o.target.checked)}),m.jsx("label",{htmlFor:"debugDraw",children:"debugDraw"})]}),m.jsx("div",{className:"separator"}),m.jsxs("div",{style:{width:"60px",whiteSpace:"nowrap"},children:["fps: ",Math.round(V.reduce((o,w)=>o+w)/V.length||1)]})]}),m.jsx(Se,{grid:(K=s.current)==null?void 0:K.getGrid(),onMouseDown:ge,onMouseUp:U,onMouseLeave:U,onMouseMove:pe,onContextMenu:fe,pickColor:o=>X.current&&!o.isSleeping()?[255,255,255,255]:o.getRGBA()})]})}export{je as default};