var Be=Object.defineProperty;var Pe=(i,t,e)=>t in i?Be(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var r=(i,t,e)=>(Pe(i,typeof t!="symbol"?t+"":t,e),e),Q=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var m=(i,t,e)=>(Q(i,t,"read from private field"),e?e.call(i):t.get(i)),w=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},g=(i,t,e,s)=>(Q(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e);var Z=(i,t,e,s)=>({set _(n){g(i,t,n,e)},get _(){return m(i,t,s)}}),le=(i,t,e)=>(Q(i,t,"access private method"),e);import{r as x,_ as me,j as c,F as We,i as Ee,l as Ie}from"./index-uC-jsA8-.js";import{G as ze,V as l,a as Le,u as W,b as He}from"./index-Ut-N_FJs.js";var _;class $ extends ze{constructor(e,s){super(e);r(this,"shouldTryAwakeNeighbours");r(this,"empty");r(this,"behaviors");r(this,"color");w(this,_,!1);r(this,"index",-1);r(this,"position",new l(0,0));r(this,"age",0);r(this,"brushSize",4);r(this,"brushFillRate",.05);r(this,"velocity",new l(0,0));const{empty:n,shouldTryAwakeNeighbours:a,behaviors:d}={empty:!1,shouldTryAwakeNeighbours:!0,behaviors:[],...s};this.empty=n,this.shouldTryAwakeNeighbours=a,this.color=this.getRGBA(),this.behaviors=d}isSleeping(){return m(this,_)}sleep(){g(this,_,!0),this.grid.registerChanged(this)}awake(){g(this,_,!1),this.grid.registerChanged(this)}die(){this.grid.set(this.position,new T(this.grid))}getRGBA(){return this.color}addBehaviors(...e){this.behaviors.push(...e)}step(e){this.age+=e,this.behaviors.forEach(s=>{s.step({deltaTime:e,cell:this,grid:this.grid})})}}_=new WeakMap;class T extends ${constructor(e){super(e,{empty:!0});r(this,"name","empty");r(this,"brushSize",2);r(this,"brushFillRate",1);r(this,"color",[50,50,50,255]);this.sleep()}awake(){}step(){}}class p{}class fe extends ${constructor(t,e){super(t,e);const{gravity:s,dispersionRate:n,erosionFactor:a}=e||{};this.addBehaviors(new pe(s),new Oe(n),new Xe(a))}}class B extends fe{}class O extends p{constructor(e=1){super();r(this,"sinkChance");this.sinkChance=e}step({cell:e}){if(Math.random()>this.sinkChance)return;const s=e.dir.S();if(s instanceof B){e.swapWith(s);return}const n=[-1,1];Math.random()>=.5&&n.reverse(),n.every(a=>{const d=e.getNeighbourInDirection(new l(a,1));return d instanceof B?(e.swapWith(d),!1):!0})}}class ge extends p{constructor(e=1){super();r(this,"floatChance");this.floatChance=e}step({cell:e}){if(Math.random()>this.floatChance)return;const s=e.dir.N();s instanceof B&&e.swapWith(s)}}class V extends ${}class b extends V{constructor(t,e){super(t,e),this.addBehaviors(new pe)}}class qe extends p{constructor(e=.05){super();r(this,"digChance");this.digChance=e}step({cell:e}){if(Math.random()>this.digChance)return;const s=e.getNeighbourhood().filter(n=>n&&!(n!=null&&n.empty)&&n instanceof b);if(s.length>0){const n=s[Math.floor(Math.random()*s.length)];if(!n)return;e.swapWith(n)}}}var E,L;class Oe extends p{constructor(e=50){super();w(this,E,0);w(this,L,100+Math.random()*25);r(this,"dispersionRate");this.dispersionRate=e}step({cell:e,grid:s}){var d,u;let n=!1;const a=[-1,1];Math.random()>=.5&&a.reverse(),e.isSleeping()&&a.every(f=>{const h=e.getNeighbourInDirection(new l(f,0));return h!=null&&h.empty?(e.swapWith(h),!1):!0}),m(this,E)<=m(this,L)?a.every(f=>(s.getPositionsInLine(e.position,e.position.add(new l(f*this.dispersionRate,0)),{excludeStart:!0}).every(h=>{const v=s.getAtPosition(h);return v!=null&&v.empty?(e.swapWith(v),n=!0,Z(this,E)._++,!1):!(v instanceof V)}),!n)):((d=e.dir.W())!=null&&d.empty||(u=e.dir.E())!=null&&u.empty)&&e.die()}}E=new WeakMap,L=new WeakMap;var G;class Ve extends p{constructor(e=.05,s=5){super();r(this,"eatChance");r(this,"starveTime");w(this,G,0);this.eatChance=e,this.starveTime=s}step({cell:e,deltaTime:s}){if(g(this,G,m(this,G)+s),m(this,G)>this.starveTime){e.die();return}if(Math.random()>this.eatChance)return;const n=e.getNeighbourhood().filter(a=>a&&!(a!=null&&a.empty)&&a instanceof we);if(n.length>0){const a=n[Math.floor(Math.random()*n.length)];if(!a)return;a.die(),g(this,G,0)}}}G=new WeakMap;class Xe extends p{constructor(e=.005){super();r(this,"erosionFactor");this.erosionFactor=e}step({cell:e}){if(this.erosionFactor>0){const s=e.dir.S();s instanceof b&&Math.random()<this.erosionFactor&&e.swapWith(s)}}}class X extends V{constructor(e,s){super(e,{shouldTryAwakeNeighbours:!1,...s});r(this,"brushSize",2);r(this,"brushFillRate",1);this.sleep()}awake(){}step(){}}var N,H;class pe extends p{constructor(e=new l(0,9)){super();w(this,N,0);w(this,H,100);r(this,"isFalling",!1);r(this,"gravity");this.gravity=e}step({cell:e,grid:s,deltaTime:n}){let a=!1;const d=[-1,1];if(Math.random()>=.5&&d.reverse(),e.isSleeping()){const u=e.getNeighbourInDirection(this.gravity.y<0?l.up():l.down());u!=null&&u.empty&&(e.swapWith(u),a=!0,this.isFalling=!0)}else{e.velocity=e.velocity.add(this.gravity.multiplyScalar(n));let u=e;e.getLineTo(e.position.add(e.velocity),{excludeStart:!0}).every(f=>{const h=s.get(f);if(!(h!=null&&h.empty)){if(this.isFalling&&(h instanceof X||h instanceof b)){const v=e.velocity.subtract((h==null?void 0:h.velocity)||l.zero()).abs(),z=Math.random()*.2,Y=Math.random()*.05;v.length()>0&&(e.velocity=new l(e.velocity.x+(Math.random()<.5?-1:1)*v.y*z,-v.y*Y),u=e,this.isFalling=!1)}return!1}return u=h,!0}),u!==e?(e.swapWith(u),a=!0):d.every(f=>{const h=e.getNeighbourInDirection(new l(f,1));return h!=null&&h.empty?(e.swapWith(h),a=!0,!1):!0})}a?(d.every(u=>{const f=e.getNeighbourInDirection(new l(u,0));return f!=null&&f.empty||f==null||f.awake(),!0}),g(this,N,0)):(this.isFalling=!1,Z(this,N)._++,m(this,N)>=m(this,H)&&e.sleep())}}N=new WeakMap,H=new WeakMap;class Ye extends p{constructor(e=.05,s=1,n=2){super();r(this,"jumpChance");r(this,"jumpHeight");r(this,"jumpLength");this.jumpChance=e,this.jumpHeight=s,this.jumpLength=n}step({cell:e}){if(Math.random()>this.jumpChance)return;const s=(Math.random()*2-1)*this.jumpLength,n=-Math.random()*this.jumpHeight;e.velocity=new l(s,n),Math.random()<.1&&(e.velocity=e.velocity.multiplyScalar(1.2)),e.awake()}}class Je extends p{constructor(e,s=1){super();r(this,"maxAge");r(this,"survivalChance");this.maxAge=e,this.survivalChance=s}step({cell:e}){Math.random()<this.survivalChance||e.age>this.maxAge&&e.die()}}class Ue extends p{constructor(e=.05){super();r(this,"survivalChance");this.survivalChance=e}step({cell:e}){if(Math.random()<this.survivalChance)return;e.getNeighbourhood().map(a=>a instanceof B?1:0).reduce((a,d)=>a+d)>2&&e.die()}}class Ke extends p{constructor(e,s=3,n=5,a=.005){super();r(this,"spawn");r(this,"breedMinAge");r(this,"breedMaxAge");r(this,"breedChance");this.spawn=e,this.breedMinAge=s,this.breedMaxAge=n,this.breedChance=a}step({cell:e,grid:s}){if(e.isSleeping()||e.age<this.breedMinAge||e.age>this.breedMaxAge||Math.random()>this.breedChance)return;const n=e.dir.S();n&&n.constructor.prototype===e.constructor.prototype&&(n.age<this.breedMinAge||n.age>this.breedMaxAge||e.getNeighbourhood().every(a=>a!=null&&a.empty?(s.setAtIndex(a.index,this.spawn()),!1):!0))}}class Qe extends p{step({cell:t}){if(!t.isSleeping()||Math.random()<.995)return;t.getNeighbourhood().map(n=>n===void 0?1:n.empty?.5:n instanceof Me?-1:n instanceof V?2:n instanceof B?1:0).reduce((n,a)=>n+a)>0&&t.die()}}class ee extends b{constructor(e,s){super(e,s);r(this,"name","flea");r(this,"_r",Math.random()*20);r(this,"color",[0,this._r,0,255]);r(this,"brushFillRate",.005);const n=7;this.addBehaviors(new Ye,new Ke(()=>new ee(e),2,n,.1),new ge,new Ue(.95),new Ve,new qe)}die(){this.grid.setAtIndex(this.index,new Ze(this,this.grid))}}class Ze extends b{constructor(e,s,n){super(s,n);r(this,"name","dead flea");r(this,"_r",Math.random()*20+10);r(this,"color");this.color=[...e.color.slice(0,3).map(a=>a+this._r),255],this.addBehaviors(new O(.05),new Je(10,.995))}}class we extends X{constructor(){super(...arguments);r(this,"name","leaf");r(this,"_r",Math.random()*20);r(this,"color",[100-this._r,180-this._r,100-this._r,255-this._r]);r(this,"brushFillRate",.4)}}function $e(i){const[t,e,s]=i,n=e*Math.min(s,1-s),a=d=>{const u=(d+t/30)%12;return s-n*Math.max(Math.min(u-3,9-u,1),-1)};return[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)]}var j,I;class ve extends p{constructor(e){super();r(this,"isGlittering",!1);r(this,"glitterChance");r(this,"glitterMaxTime");r(this,"glitterColor");w(this,j,void 0);w(this,I,0);const{glitterChance:s,glitterMaxTime:n,glitterColor:a}={glitterChance:2e-4,glitterMaxTime:.1,glitterColor:[255,255,255,255],...e};this.glitterChance=s,this.glitterMaxTime=n,this.glitterColor=a}step({cell:e,deltaTime:s}){this.isGlittering?(g(this,I,m(this,I)+s),m(this,I)>this.glitterMaxTime&&(m(this,j)&&(e.color=m(this,j),g(this,j,void 0)),this.isGlittering=!1)):Math.random()<this.glitterChance&&(g(this,j,e.color),e.color=this.glitterColor,this.isGlittering=!0)}}j=new WeakMap,I=new WeakMap;class et extends b{constructor(e,s){super(e,s);r(this,"name","magic dust");r(this,"color",[...$e([Date.now()/20%360,.6,.5]),255]);this.addBehaviors(new O,new ve)}}class tt extends b{constructor(e,s){super(e,s);r(this,"name","sand");r(this,"_r",Math.random()*20);r(this,"color",[191-this._r,155-this._r,123-this._r,255]);this.addBehaviors(new O)}}class xe extends fe{constructor(t,e){super(t,{dispersionRate:8,gravity:new l(0,-.25),erosionFactor:0,shouldTryAwakeNeighbours:!1,...e}),this.addBehaviors(new ge(.2)),this.velocity=this.velocity.add(l.random().multiplyScalar(2).add(l.one().multiplyScalar(-1)).multiplyScalar(.025).multiply(l.right()))}}class st extends xe{constructor(){super(...arguments);r(this,"name","smoke");r(this,"color",[90,90,90,Math.round(Math.random()*185)+70])}}class Me extends b{constructor(e,s){super(e,s);r(this,"name","snow");r(this,"_r",Math.random()*20);r(this,"color",[220-this._r,220-this._r,255,255]);this.addBehaviors(new Qe,new O(.05))}getRGBA(){return this.isSleeping()?this.color:[220,220,255,255]}die(){this.grid.set(this.position,Math.random()<.25?new te(this.grid):new T(this.grid))}}class ye extends xe{constructor(){super(...arguments);r(this,"name","steam");r(this,"_r",Math.round(Math.random()*80)+100);r(this,"color",[255,255,255,this._r])}die(){this.grid.set(this.position,Math.random()<.05?new te(this.grid):new T(this.grid))}}class rt extends X{constructor(){super(...arguments);r(this,"name","stone");r(this,"color",[100,100,100,255])}}class te extends B{constructor(e,s){super(e,{...s,dispersionRate:3});r(this,"name","water");r(this,"_r",Math.round(Math.random()*100)+155);r(this,"color",[46,137,255,this._r]);this.addBehaviors(new ve({glitterColor:[86,177,255,255]}))}die(){this.grid.set(this.position,Math.random()<.25?new ye(this.grid):new T(this.grid))}}class it extends X{constructor(){super(...arguments);r(this,"name","wood");r(this,"_r",Math.random()*20);r(this,"color",[180-this._r,100-this._r,100-this._r,255-this._r])}}var y,D,q,be;class nt{constructor(t){w(this,q);w(this,y,void 0);w(this,D,!0);r(this,"materialPalette");g(this,y,new Le({...t,createEmpty:e=>new T(e)})),this.materialPalette=le(this,q,be).call(this,m(this,y))}isRunning(){return m(this,D)}start(){g(this,D,!0)}stop(){g(this,D,!1)}restart(){this.stop(),m(this,y).clear(),this.start()}getGrid(){return m(this,y)}step(t){if(!m(this,D))return;m(this,y).forEach(s=>{s.empty||s.step(t)},{alternateRowDirections:!0})}}y=new WeakMap,D=new WeakMap,q=new WeakSet,be=function(t){return{empty:()=>new T(t),flea:()=>new ee(t),leaf:()=>new we(t),magicDust:()=>new et(t),sand:()=>new tt(t),smoke:()=>new st(t),snow:()=>new Me(t),steam:()=>new ye(t),stone:()=>new rt(t),water:()=>new te(t),wood:()=>new it(t)}};function ut(){var oe;const e=x.useRef(null),s=x.useRef(),n=x.useRef(),a=x.useRef(),d=x.useRef(),u=x.useRef(void 0),[f,h]=W(!0),[v,z]=W(!1),[Y,Se]=W([0,0]),[J,Ce]=W("sand"),[se,Fe]=x.useState([0]),[re,Re]=W(!1),[Ae,je]=x.useState(void 0),[De,ke]=x.useState([]);x.useEffect(()=>(s.current=new nt({width:320,height:180}),n.current=s.current.getGrid(),ke(me.keys(s.current.materialPalette)),ae(),a.current=requestAnimationFrame(ie),()=>{a.current!==void 0&&cancelAnimationFrame(a.current)}),[]),x.useEffect(()=>{const o=s.current;o&&(f.current?o.start():o.stop())},[f.current]);function _e(o){o.preventDefault()}function Ge(o){const M=o.target,{x:S,y:C,width:F,height:he}=M.getBoundingClientRect(),R=[(o.clientX-S)/F,(o.clientY-C)/he];Se(R);const A=s.current;if(!A)return;const k=A.getGrid(),ue=new l(Math.floor(R[0]*k.width),Math.floor(R[1]*k.height)),P=k.getAtPosition(ue);P&&je(P.name)}function ie(o){if(d.current===void 0)d.current=o;else{const M=(o-d.current)/1e3;{const S=s.current;if(!S)return;const C=S.getGrid();Te(C),S.step(M),d.current=o,Fe(F=>[...F.slice(F.length-100),1/M])}}a.current=requestAnimationFrame(ie)}function Ne(){z(!0)}function ne(){z(!1),u.current=void 0}function Te(o){if(!v.current||!J.current)return;const[M,S]=Y.current,C=new l(Math.floor(M*o.width),Math.floor(S*o.height)),F=s.current;if(!F)return;const R=F.materialPalette[J.current];if(!R)return;const A=R(),k=Math.floor(A.brushSize);(u.current?o.getPositionsInLine(u.current,C):[C]).every(P=>{for(let U=-k;U<A.brushSize;U++)for(let K=-k;K<A.brushSize;K++){if(Math.random()>A.brushFillRate)continue;const ce=P.x+K;if(ce<0)continue;const de=P.y+U;de<0||o.setAtPosition(new l(ce,de),R())}return!0}),u.current=C}function ae(){const o=s.current;o&&o.restart()}return c.jsxs("div",{className:"route sand",ref:e,children:[c.jsxs("div",{className:"materials",children:[c.jsxs("div",{children:[c.jsx("button",{onClick:()=>h(o=>!o),children:f.current?c.jsxs(c.Fragment,{children:[c.jsx(We,{}),"stop"]}):c.jsxs(c.Fragment,{children:[c.jsx(Ee,{}),"start"]})}),c.jsxs("button",{onClick:()=>ae(),children:[c.jsx(Ie,{}),"reset"]})]}),c.jsx("div",{className:"separator"}),me.map(De,o=>c.jsx("div",{className:"material",children:o,onClick:()=>Ce(o),style:J.current===o?{border:"1px solid white"}:void 0},o)),c.jsx("div",{className:"separator"}),c.jsxs("div",{children:[c.jsx("input",{id:"debugDraw",type:"checkbox",checked:re.current,onChange:o=>Re(o.target.checked)}),c.jsx("label",{htmlFor:"debugDraw",children:"debugDraw"})]}),c.jsx("div",{className:"separator"}),c.jsxs("div",{style:{width:"60px",whiteSpace:"nowrap"},children:["fps: ",Math.round(se.reduce((o,M)=>o+M)/se.length||1)]})]}),c.jsx(He,{grid:(oe=s.current)==null?void 0:oe.getGrid(),onMouseDown:Ne,onMouseUp:ne,onMouseLeave:ne,onMouseMove:Ge,onContextMenu:_e,pickColor:o=>re.current&&!o.isSleeping()?[255,255,255,255]:o.getRGBA(),children:c.jsx("div",{style:{position:"absolute",top:0,right:0,padding:"0.25em",fontSize:"0.8em"},children:Ae})})]})}export{ut as default};
