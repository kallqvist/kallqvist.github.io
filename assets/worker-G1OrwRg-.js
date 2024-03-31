(function(){"use strict";onmessage=s=>{const{data:o}=s;console.log("worker:",s.data);const e=o.f();postMessage("worker response",e)}})();
