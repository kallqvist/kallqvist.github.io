import{r as o,_ as r,u as $,j as a}from"./index-80757357.js";import{u as c,a as l}from"./react-spring_web.modern-ce45b14e.js";function N(){const[d,g]=o.useState(!1),[t,m]=o.useState([0,0]),[s,u]=o.useState([.5,.5]);o.useEffect(()=>{u([r.clamp((t[0]+window.innerWidth/2)/window.innerWidth,0,1),r.clamp((t[1]+window.innerHeight/2)/window.innerHeight,0,1)])},[t]);const[w]=c(()=>{const e=r.clamp((t[0]+window.innerWidth/2)/window.innerWidth,0,1),n=r.clamp((t[1]+window.innerHeight/2)/window.innerHeight,0,1),x=1,i=1+Math.abs(e-.5)*x,y=n*2-1,S=(e*2-1)*30*y;return{transform:`translate3d(${t[0]}px, ${t[1]}px, 0) rotate3d(0, 0, 1, ${S}deg) scale3d(${i}, ${i}, ${i})`,cursor:d?"grabbing":"grab"}},[d,t]),[f]=c(()=>{const e=Math.max(1-s[0]*2,0),n=s[1];return{opacity:e,background:`radial-gradient(circle at -50% ${n*100}%, maroon 0%, transparent 60%)`}},[s]),[h]=c(()=>{const e=Math.max(s[0]*2-1,0),n=s[1];return{opacity:e,background:`radial-gradient(circle at 150% ${n*100}%, maroon 0%, transparent 60%)`}},[s]),p=$({onDragStart:()=>g(!0),onDrag:e=>m(e.movement),onDragEnd:()=>{g(!1),m([0,0])}});return a.jsxs("div",{className:"route home",children:[a.jsx(l.div,{className:"glow left",style:f}),a.jsx(l.div,{className:"glow right",style:h}),a.jsx(l.div,{className:"logo",...p(),style:w,children:a.jsx("div",{className:"k",children:"K"})})]})}export{N as default};
