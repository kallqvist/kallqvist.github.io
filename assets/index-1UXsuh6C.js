var _e=Object.defineProperty;var Ge=(i,t,e)=>t in i?_e(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var r=(i,t,e)=>(Ge(i,typeof t!="symbol"?t+"":t,e),e),Q=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var m=(i,t,e)=>(Q(i,t,"read from private field"),e?e.call(i):t.get(i)),w=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},g=(i,t,e,s)=>(Q(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e);var Z=(i,t,e,s)=>({set _(n){g(i,t,n,e)},get _(){return m(i,t,s)}}),ue=(i,t,e)=>(Q(i,t,"access private method"),e);import{r as y,_ as ce,j as u,F as Ne,i as Te,l as Be}from"./index-Kqp9EvPw.js";import{G as Pe,V as c,C as ze,u as z,a as We}from"./index-CyfE-eYX.js";var j;class $ extends Pe{constructor(e,s){super(e);r(this,"shouldTryAwakeNeighbours");r(this,"empty");r(this,"behaviors");r(this,"color");w(this,j,!1);r(this,"index",-1);r(this,"position",new c(0,0));r(this,"age",0);r(this,"brushSize",4);r(this,"brushFillRate",.05);r(this,"velocity",new c(0,0));const{empty:n,shouldTryAwakeNeighbours:a,behaviors:d}={empty:!1,shouldTryAwakeNeighbours:!0,behaviors:[],...s};this.empty=n,this.shouldTryAwakeNeighbours=a,this.color=this.getRGBA(),this.behaviors=d}isSleeping(){return m(this,j)}sleep(){g(this,j,!0),this.grid.registerChanged(this)}awake(){g(this,j,!1),this.grid.registerChanged(this)}die(){this.grid.set(this.position,this.grid.createEmpty(this.grid))}getRGBA(){return this.color}addBehaviors(...e){this.behaviors.push(...e)}step(e){this.age+=e,this.behaviors.forEach(s=>{s.step({deltaTime:e,cell:this,grid:this.grid})})}}j=new WeakMap;class W extends ${constructor(e){super(e,{empty:!0});r(this,"name","empty");r(this,"brushSize",2);r(this,"brushFillRate",1);r(this,"color",[50,50,50,255]);this.sleep()}awake(){}step(){}}class p{}class de extends ${constructor(t,e){super(t,e);const{gravity:s,dispersionRate:n,erosionFactor:a}=e||{};this.addBehaviors(new me(s),new Le(n),new Oe(a))}}class G extends de{}class V extends p{constructor(e=1){super();r(this,"sinkChance");this.sinkChance=e}step({cell:e}){if(Math.random()>this.sinkChance)return;const s=e.dir.S();if(s instanceof G){e.swapWith(s);return}const n=[-1,1];Math.random()>=.5&&n.reverse(),n.every(a=>{const d=e.getNeighbourInDirection(new c(a,1));return d instanceof G?(e.swapWith(d),!1):!0})}}class le extends p{constructor(e=1){super();r(this,"floatChance");this.floatChance=e}step({cell:e}){if(Math.random()>this.floatChance)return;const s=e.dir.N();s instanceof G&&e.swapWith(s)}}class Ee extends p{constructor(e,s=3,n=5,a=.005){super();r(this,"spawn");r(this,"breedMinAge");r(this,"breedMaxAge");r(this,"breedChance");this.spawn=e,this.breedMinAge=s,this.breedMaxAge=n,this.breedChance=a}step({cell:e,grid:s}){if(e.isSleeping()||e.age<this.breedMinAge||e.age>this.breedMaxAge||Math.random()>this.breedChance)return;const n=e.dir.S();n&&n.constructor.prototype===e.constructor.prototype&&(n.age<this.breedMinAge||n.age>this.breedMaxAge||e.getNeighbourhood().every(a=>a!=null&&a.empty?(s.setAtIndex(a.index,this.spawn()),!1):!0))}}class J extends ${}class C extends J{constructor(t,e){super(t,e),this.addBehaviors(new me)}}class Ie extends p{constructor(e=.05){super();r(this,"digChance");this.digChance=e}step({cell:e}){if(Math.random()>this.digChance)return;const s=e.getNeighbourhood().filter(n=>n&&!(n!=null&&n.empty)&&n instanceof C);if(s.length>0){const n=s[Math.floor(Math.random()*s.length)];if(!n)return;e.swapWith(n)}}}var E,H;class Le extends p{constructor(e=50){super();w(this,E,0);w(this,H,100+Math.random()*25);r(this,"dispersionRate");this.dispersionRate=e}step({cell:e,grid:s}){var d,l;let n=!1;const a=[-1,1];Math.random()>=.5&&a.reverse(),e.isSleeping()&&a.every(f=>{const h=e.getNeighbourInDirection(new c(f,0));return h!=null&&h.empty?(e.swapWith(h),!1):!0}),m(this,E)<=m(this,H)?a.every(f=>(s.getPositionsInLine(e.position,e.position.add(new c(f*this.dispersionRate,0)),{excludeStart:!0}).every(h=>{const v=s.getAtPosition(h);return v!=null&&v.empty?(e.swapWith(v),n=!0,Z(this,E)._++,!1):!(v instanceof J)}),!n)):((d=e.dir.W())!=null&&d.empty||(l=e.dir.E())!=null&&l.empty)&&e.die()}}E=new WeakMap,H=new WeakMap;class He extends p{constructor(e=.05){super();r(this,"survivalChance");this.survivalChance=e}step({cell:e}){if(Math.random()<this.survivalChance)return;e.getNeighbourhood().map(a=>a instanceof G?1:0).reduce((a,d)=>a+d)>2&&e.die()}}var k;class qe extends p{constructor(e=.05,s=5){super();r(this,"eatChance");r(this,"starveTime");w(this,k,0);this.eatChance=e,this.starveTime=s}step({cell:e,deltaTime:s}){if(g(this,k,m(this,k)+s),m(this,k)>this.starveTime){e.die();return}if(Math.random()>this.eatChance)return;const n=e.getNeighbourhood().filter(a=>a&&!(a!=null&&a.empty)&&a instanceof fe);if(n.length>0){const a=n[Math.floor(Math.random()*n.length)];if(!a)return;a.die(),g(this,k,0)}}}k=new WeakMap;class Oe extends p{constructor(e=.005){super();r(this,"erosionFactor");this.erosionFactor=e}step({cell:e}){if(this.erosionFactor>0){const s=e.dir.S();s instanceof C&&Math.random()<this.erosionFactor&&e.swapWith(s)}}}class Ve extends p{constructor(e,s=1){super();r(this,"maxAge");r(this,"survivalChance");this.maxAge=e,this.survivalChance=s}step({cell:e}){Math.random()<this.survivalChance||e.age>this.maxAge&&e.die()}}class U extends J{constructor(e,s){super(e,{shouldTryAwakeNeighbours:!1,...s});r(this,"brushSize",2);r(this,"brushFillRate",1);this.sleep()}awake(){}step(){}}var _,q;class me extends p{constructor(e=new c(0,9)){super();w(this,_,0);w(this,q,100);r(this,"isFalling",!1);r(this,"gravity");this.gravity=e}step({cell:e,grid:s,deltaTime:n}){let a=!1;const d=[-1,1];if(Math.random()>=.5&&d.reverse(),e.isSleeping()){const l=e.getNeighbourInDirection(this.gravity.y<0?c.up():c.down());l!=null&&l.empty&&(e.swapWith(l),a=!0,this.isFalling=!0)}else{e.velocity=e.velocity.add(this.gravity.multiplyScalar(n));let l=e;e.getLineTo(e.position.add(e.velocity),{excludeStart:!0}).every(f=>{const h=s.get(f);if(!(h!=null&&h.empty)){if(this.isFalling&&(h instanceof U||h instanceof C)){const v=e.velocity.subtract((h==null?void 0:h.velocity)||c.zero()).abs(),X=Math.random()*.2,N=Math.random()*.05;v.length()>0&&(e.velocity=new c(e.velocity.x+(Math.random()<.5?-1:1)*v.y*X,-v.y*N),l=e,this.isFalling=!1)}return!1}return l=h,!0}),l!==e?(e.swapWith(l),a=!0):d.every(f=>{const h=e.getNeighbourInDirection(new c(f,1));return h!=null&&h.empty?(e.swapWith(h),a=!0,!1):!0})}a?(d.every(l=>{const f=e.getNeighbourInDirection(new c(l,0));return f!=null&&f.empty||f==null||f.awake(),!0}),g(this,_,0)):(this.isFalling=!1,Z(this,_)._++,m(this,_)>=m(this,q)&&e.sleep())}}_=new WeakMap,q=new WeakMap;class Je extends p{constructor(e=.05,s=1,n=2){super();r(this,"jumpChance");r(this,"jumpHeight");r(this,"jumpLength");this.jumpChance=e,this.jumpHeight=s,this.jumpLength=n}step({cell:e}){if(Math.random()>this.jumpChance)return;const s=(Math.random()*2-1)*this.jumpLength,n=-Math.random()*this.jumpHeight;e.velocity=new c(s,n),Math.random()<.1&&(e.velocity=e.velocity.multiplyScalar(1.2)),e.awake()}}class Ue extends p{step({cell:t}){if(!t.isSleeping()||Math.random()<.995)return;t.getNeighbourhood().map(n=>n===void 0?1:n.empty?.5:n instanceof we?-1:n instanceof J?2:n instanceof G?1:0).reduce((n,a)=>n+a)>0&&t.die()}}class ee extends C{constructor(e,s){super(e,s);r(this,"name","flea");r(this,"_r",Math.random()*20);r(this,"color",[0,this._r,0,255]);r(this,"brushFillRate",.005);const n=7;this.addBehaviors(new Je,new Ee(()=>new ee(e),2,n,.1),new le,new He(.95),new qe,new Ie)}die(){this.grid.setAtIndex(this.index,new Xe(this,this.grid))}}class Xe extends C{constructor(e,s,n){super(s,n);r(this,"name","dead flea");r(this,"_r",Math.random()*20+10);r(this,"color");this.color=[...e.color.slice(0,3).map(a=>a+this._r),255],this.addBehaviors(new V(.05),new Ve(10,.995))}}class fe extends U{constructor(){super(...arguments);r(this,"name","leaf");r(this,"_r",Math.random()*20);r(this,"color",[100-this._r,180-this._r,100-this._r,255-this._r]);r(this,"brushFillRate",.4)}}function Ye(i){const[t,e,s]=i,n=e*Math.min(s,1-s),a=d=>{const l=(d+t/30)%12;return s-n*Math.max(Math.min(l-3,9-l,1),-1)};return[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)]}var F,I;class ge extends p{constructor(e){super();r(this,"isGlittering",!1);r(this,"glitterChance");r(this,"glitterMaxTime");r(this,"glitterColor");w(this,F,void 0);w(this,I,0);const{glitterChance:s,glitterMaxTime:n,glitterColor:a}={glitterChance:2e-4,glitterMaxTime:.1,glitterColor:[255,255,255,255],...e};this.glitterChance=s,this.glitterMaxTime=n,this.glitterColor=a}step({cell:e,deltaTime:s}){this.isGlittering?(g(this,I,m(this,I)+s),m(this,I)>this.glitterMaxTime&&(m(this,F)&&(e.color=m(this,F),g(this,F,void 0)),this.isGlittering=!1)):Math.random()<this.glitterChance&&(g(this,F,e.color),e.color=this.glitterColor,this.isGlittering=!0)}}F=new WeakMap,I=new WeakMap;class Ke extends C{constructor(e,s){super(e,s);r(this,"name","magic dust");r(this,"color",[...Ye([Date.now()/20%360,.6,.5]),255]);this.addBehaviors(new V,new ge)}}class Qe extends C{constructor(e,s){super(e,s);r(this,"name","sand");r(this,"_r",Math.random()*20);r(this,"color",[191-this._r,155-this._r,123-this._r,255]);this.addBehaviors(new V)}}class pe extends de{constructor(t,e){super(t,{dispersionRate:8,gravity:new c(0,-.25),erosionFactor:0,shouldTryAwakeNeighbours:!1,...e}),this.addBehaviors(new le(.2)),this.velocity=this.velocity.add(c.random().multiplyScalar(2).add(c.one().multiplyScalar(-1)).multiplyScalar(.025).multiply(c.right()))}}class Ze extends pe{constructor(){super(...arguments);r(this,"name","smoke");r(this,"color",[90,90,90,Math.round(Math.random()*185)+70])}}class we extends C{constructor(e,s){super(e,s);r(this,"name","snow");r(this,"_r",Math.random()*20);r(this,"color",[220-this._r,220-this._r,255,255]);this.addBehaviors(new Ue,new V(.05))}getRGBA(){return this.isSleeping()?this.color:[220,220,255,255]}die(){this.grid.set(this.position,Math.random()<.25?new te(this.grid):new W(this.grid))}}class ve extends pe{constructor(){super(...arguments);r(this,"name","steam");r(this,"_r",Math.round(Math.random()*80)+100);r(this,"color",[255,255,255,this._r])}die(){this.grid.set(this.position,Math.random()<.05?new te(this.grid):new W(this.grid))}}class $e extends U{constructor(){super(...arguments);r(this,"name","stone");r(this,"color",[100,100,100,255])}}class te extends G{constructor(e,s){super(e,{...s,dispersionRate:3});r(this,"name","water");r(this,"_r",Math.round(Math.random()*100)+155);r(this,"color",[46,137,255,this._r]);this.addBehaviors(new ge({glitterColor:[86,177,255,255]}))}die(){this.grid.set(this.position,Math.random()<.25?new ve(this.grid):new W(this.grid))}}class et extends U{constructor(){super(...arguments);r(this,"name","wood");r(this,"_r",Math.random()*20);r(this,"color",[180-this._r,100-this._r,100-this._r,255-this._r])}}var S,R,O,xe;class tt{constructor(t){w(this,O);w(this,S,void 0);w(this,R,!0);r(this,"materialPalette");g(this,S,new ze({...t,createEmpty:e=>new W(e)})),this.materialPalette=ue(this,O,xe).call(this,m(this,S))}isRunning(){return m(this,R)}start(){g(this,R,!0)}stop(){g(this,R,!1)}restart(){this.stop(),m(this,S).clear(),this.start()}getGrid(){return m(this,S)}step(t){if(!m(this,R))return;m(this,S).forEach(s=>{s.empty||s.step(t)},{alternateRowDirections:!0})}}S=new WeakMap,R=new WeakMap,O=new WeakSet,xe=function(t){return{empty:()=>new W(t),flea:()=>new ee(t),leaf:()=>new fe(t),magicDust:()=>new Ke(t),sand:()=>new Qe(t),smoke:()=>new Ze(t),snow:()=>new we(t),steam:()=>new ve(t),stone:()=>new $e(t),water:()=>new te(t),wood:()=>new et(t)}};function nt(){var ae;const i=new c(320,192),t=y.useRef(),e=y.useRef(),s=y.useRef(),n=y.useRef(),a=y.useRef(void 0),[d,l]=z(!0),[f,h]=z(!1),[v,X]=z([0,0]),[N,ye]=z("magicDust"),[Y,Me]=z(!1),[se,be]=y.useState([0]),[Se,Ce]=y.useState(void 0),[Fe,Re]=y.useState([]);y.useEffect(()=>(t.current=new tt({size:i}),e.current=t.current.getGrid(),Re(ce.keys(t.current.materialPalette)),ne(),s.current=requestAnimationFrame(re),()=>{s.current!==void 0&&cancelAnimationFrame(s.current)}),[]),y.useEffect(()=>{const o=t.current;o&&(d.current?o.start():o.stop())},[d.current]);function Ae(o){o.preventDefault()}function De(o){const x=o.target,{x:M,y:L,width:b,height:A}=x.getBoundingClientRect(),T=[(o.clientX-M)/b,(o.clientY-L)/A];X(T);const K=t.current;if(!K)return;const B=K.getGrid(),P=c.fromArray(T).multiply(B.size).floor(),D=B.getAtPosition(P);D&&Ce(D.name)}function re(o){if(n.current===void 0)n.current=o;else{const x=(o-n.current)/1e3;{const M=t.current;if(!M)return;const L=M.getGrid();ke(L),M.step(x),n.current=o,be(b=>[...b.slice(b.length-100),1/x])}}s.current=requestAnimationFrame(re)}function je(){h(!0)}function ie(){h(!1),a.current=void 0}function ke(o){if(!f.current||!N.current)return;const x=c.fromArray(v.current).multiply(o.size).floor(),M=t.current;if(!M)return;const b=M.materialPalette[N.current];if(!b)return;const A=b(),T=Math.floor(A.brushSize);(a.current?o.getPositionsInLine(a.current,x):[x]).every(B=>{for(let P=-T;P<A.brushSize;P++)for(let D=-T;D<A.brushSize;D++){if(Math.random()>A.brushFillRate)continue;const oe=B.x+D;if(oe<0)continue;const he=B.y+P;he<0||o.setAtPosition(new c(oe,he),b())}return!0}),a.current=x}function ne(){const o=t.current;o&&o.restart()}return u.jsxs("div",{className:"route sand",children:[u.jsxs("div",{className:"materials",children:[u.jsxs("div",{children:[u.jsx("button",{onClick:()=>l(o=>!o),children:d.current?u.jsxs(u.Fragment,{children:[u.jsx(Ne,{}),"stop"]}):u.jsxs(u.Fragment,{children:[u.jsx(Te,{}),"start"]})}),u.jsxs("button",{onClick:()=>ne(),children:[u.jsx(Be,{}),"reset"]})]}),u.jsx("div",{className:"separator"}),ce.map(Fe,o=>u.jsx("div",{className:"material",children:o,onClick:()=>ye(o),style:N.current===o?{border:"1px solid white"}:void 0},o)),u.jsx("div",{className:"separator"}),u.jsxs("div",{children:[u.jsx("input",{id:"debugDraw",type:"checkbox",checked:Y.current,onChange:o=>Me(o.target.checked)}),u.jsx("label",{htmlFor:"debugDraw",children:"debugDraw"})]}),u.jsx("div",{className:"separator"}),u.jsxs("div",{style:{width:"60px",whiteSpace:"nowrap"},children:["fps: ",Math.round(se.reduce((o,x)=>o+x)/se.length||1)]})]}),u.jsx(We,{grid:(ae=t.current)==null?void 0:ae.getGrid(),onMouseDown:je,onMouseUp:ie,onMouseLeave:ie,onMouseMove:De,onContextMenu:Ae,debugDraw:Y.current,pickColor:({cell:o})=>Y.current&&!o.isSleeping()?[255,255,255,255]:o.getRGBA(),children:u.jsx("div",{style:{position:"absolute",top:0,right:0,padding:"0.25em",fontSize:"0.8em"},children:Se})})]})}export{nt as default};
