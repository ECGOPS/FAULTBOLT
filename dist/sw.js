if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>s(e,r),d={module:{uri:r},exports:c,require:l};i[r]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/html2canvas.esm-CBrSDip1.js",revision:null},{url:"assets/index-2p6azAf6.js",revision:null},{url:"assets/index-Uvm7ic5C.css",revision:null},{url:"assets/index.es-CM-7Sxnn.js",revision:null},{url:"assets/purify.es-C_uT9hQ1.js",revision:null},{url:"favicon.ico",revision:"ad1a6f4c5183484aea75bd061d11fc25"},{url:"icons/generate-icons.js",revision:"ed8b3f38d631a39b51430a3cb891cea6"},{url:"icons/icon-192x192.png",revision:"34ba363b60f452387dfe0c78bca97002"},{url:"icons/icon-512x512.png",revision:"6b240f22b7f1035079cb841215c4d936"},{url:"index.html",revision:"9e82e7bfae6d7e4174f0d975d00987cc"},{url:"lovable-uploads/ecg-logo.png",revision:"fd2cc4671e881359f0ad17eff96b6284"},{url:"lovable-uploads/ecg-logo1.png",revision:"0adb739bd845309122b577d7673e732e"},{url:"placeholder.svg",revision:"35707bd9960ba5281c72af927b79291f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-192x192.png",revision:"34ba363b60f452387dfe0c78bca97002"},{url:"icons/icon-512x512.png",revision:"6b240f22b7f1035079cb841215c4d936"},{url:"manifest.webmanifest",revision:"715b5371f327434cbe4df93bea439c30"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
