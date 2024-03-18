import{s as K,n as j,v as P,q as A,x as Q,c as $,o as ee}from"./scheduler.DgBL_1-D.js";import{S as W,i as F,m as X,j as M,d as g,e as x,t as Z,c as v,a as k,f as J,E as q,k as p,F as te,s as T,b as H,g as I,h as b,l as ne,r as D,o as ae,q as se,p as C,D as le,u as oe,v as ie,w as re,x as ce}from"./index.CO7fLiMo.js";import{p as de}from"./stores.vsyDeTYf.js";import{p as fe,o as he,b as R}from"./entry.B80igVE_.js";import{a as ue,d as me}from"./index.wotBBkUg.js";import{g as pe}from"./spread.CgU5AtxT.js";function V(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const Y=10,z=40,B=800;function ge(a){let e=0,n=0,l=0,t=0;return"detail"in a&&(n=a.detail),"wheelDelta"in a&&(n=-a.wheelDelta/120),"wheelDeltaY"in a&&(n=-a.wheelDeltaY/120),"wheelDeltaX"in a&&(e=-a.wheelDeltaX/120),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(e=n,n=0),l=e*Y,t=n*Y,"deltaY"in a&&(t=a.deltaY),"deltaX"in a&&(l=a.deltaX),(l||t)&&a.deltaMode&&(a.deltaMode==1?(l*=z,t*=z):(l*=B,t*=B)),l&&!e&&(e=l<1?-1:1),t&&!n&&(n=t<1?-1:1),{spinX:e,spinY:n,pixelX:l,pixelY:t}}const U={"/":[{text:"About",href:"#about"},{text:"Projects",href:"#projects"},{text:"Contact",href:"#contact"},{text:"Blog",href:"/blog",disabled:!0}],"/blog":[{text:"Home",href:"/"},{text:"About",href:"/#about"},{text:"Projects",href:"/#projects"},{text:"Contact",href:"/#contact"},{text:"Blog",href:"/blog"}]};function E({hash:a="",scrollElement:e,duration:n=1e3}){if(e instanceof HTMLElement){const l=a.replace("#",""),t=document.getElementById(l);if(window.matchMedia("(min-width: 768px)").matches){const o=(t==null?void 0:t.offsetLeft)??0,r=e.getBoundingClientRect().width,c=Math.min(Math.max(o/r*-100,-75),0);e.dataset.scrolledAmount=(o/2).toString(),e.dataset.percentage=c.toString(),e.animate({transformOrigin:"center",left:`${Math.abs(c)}%`,transform:`translate(${c}%, 0% )`},{duration:n,fill:"forwards"})}else window.scrollTo({top:(t==null?void 0:t.offsetTop)??0,behavior:"smooth"})}}function xe({scrollElement:a}){return e=>{var o;const n=new URL(((o=e.target)==null?void 0:o.href)??""),l=n.hash.replace("#",""),t=document.querySelector(".menu-container"),s=window.matchMedia("(min-width: 768px)");t&&!s.matches&&ue(t,"show"),l!==""&&a instanceof HTMLElement&&(e.preventDefault(),E({hash:n.hash,scrollElement:a}),fe(n,{hash:n.hash,pathname:n.pathname}))}}function ve({scrollElement:a}){return e=>{const n=new URL(e.newURL);E({hash:n==null?void 0:n.hash,scrollElement:a})}}function be(a){let e,n,l=[{href:a[0]},a[3],{class:"menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2"}],t={};for(let s=0;s<l.length;s+=1)t=A(t,l[s]);return{c(){e=x("a"),n=Z(a[1]),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var o=k(e);n=J(o,a[1]),o.forEach(g),this.h()},h(){q(e,t)},m(s,o){M(s,e,o),p(e,n)},p(s,o){o&2&&te(n,s[1],t.contenteditable),q(e,t=pe(l,[o&1&&{href:s[0]},o&8&&s[3],{class:"menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2"}]))},d(s){s&&g(e)}}}function we(a){let e,n,l,t,s,o="Soon";return{c(){e=x("span"),n=x("div"),l=Z(a[1]),t=T(),s=x("div"),s.textContent=o,this.h()},l(r){e=v(r,"SPAN",{class:!0});var c=k(e);n=v(c,"DIV",{class:!0});var h=k(n);l=J(h,a[1]),h.forEach(g),t=H(c),s=v(c,"DIV",{class:!0,"data-svelte-h":!0}),I(s)!=="svelte-12i10eu"&&(s.textContent=o),c.forEach(g),this.h()},h(){b(n,"class","text-slate-500 line-through"),b(s,"class","text-xs leading-none bg-tulip-tree-400 rounded-full overflow-hidden px-2 py-1"),b(e,"class","menu-link-disabled flex items-center gap-2 max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2")},m(r,c){M(r,e,c),p(e,n),p(n,l),p(e,t),p(e,s)},p(r,c){c&2&&ne(l,r[1])},d(r){r&&g(e)}}}function _e(a){let e;function n(s,o){return s[2]?we:be}let l=n(a),t=l(a);return{c(){t.c(),e=X()},l(s){t.l(s),e=X()},m(s,o){t.m(s,o),M(s,e,o)},p(s,[o]){l===(l=n(s))&&t?t.p(s,o):(t.d(1),t=l(s),t&&(t.c(),t.m(e.parentNode,e)))},i:j,o:j,d(s){s&&g(e),t.d(s)}}}function ke(a,e,n){const l=["href","text","disabled"];let t=P(e,l),{href:s="/"}=e,{text:o="Link"}=e,{disabled:r=!1}=e;return a.$$set=c=>{e=A(A({},e),Q(c)),n(3,t=P(e,l)),"href"in c&&n(0,s=c.href),"text"in c&&n(1,o=c.text),"disabled"in c&&n(2,r=c.disabled)},[s,o,r,t]}class Se extends W{constructor(e){super(),F(this,e,ke,_e,K,{href:0,text:1,disabled:2})}}function G(a,e,n){const l=a.slice();return l[1]=e[n].text,l[2]=e[n].href,l[3]=e[n].disabled,l}function O(a){let e,n;return e=new Se({props:{href:""+(R+a[2]),text:a[1],disabled:a[3],"aria-label":"Go to "+a[1].toLowerCase()+" section."}}),{c(){oe(e.$$.fragment)},l(l){ie(e.$$.fragment,l)},m(l,t){re(e,l,t),n=!0},p(l,t){const s={};t&1&&(s.href=""+(R+l[2])),t&1&&(s.text=l[1]),t&1&&(s.disabled=l[3]),t&1&&(s["aria-label"]="Go to "+l[1].toLowerCase()+" section."),e.$set(s)},i(l){n||(D(e.$$.fragment,l),n=!0)},o(l){C(e.$$.fragment,l),n=!1},d(l){ce(e,l)}}}function Le(a){let e,n,l='<div class="stellar-colored svelte-x2r4ko"></div> <img src="/img/ui/stellar-bg/grayscale.webp" alt="" class="stellar-grayscale hidden md:block svelte-x2r4ko"/>',t,s,o,r,c,h,L='<div class="w-10 h-10"><img src="/img/ui/svelte-logo.svg" alt="" width="100" height="100" class="object-contain aspect-square"/></div> <span class="font-zenless-copy">Proudly made with <a href="https://kit.svelte.dev/" aria-label="Proudly made with SvelteKit" target="_blank" class="text-[#ff3e00] outline-none hover:underline focus:underline">SvelteKit</a></span>',w,m=V(U[new URL(a[0].url).pathname]),i=[];for(let d=0;d<m.length;d+=1)i[d]=O(G(a,m,d));const S=d=>C(i[d],1,1,()=>{i[d]=null});return{c(){e=x("div"),n=x("div"),n.innerHTML=l,t=T(),s=x("div"),o=x("nav"),r=x("div");for(let d=0;d<i.length;d+=1)i[d].c();c=T(),h=x("div"),h.innerHTML=L,this.h()},l(d){e=v(d,"DIV",{class:!0});var u=k(e);n=v(u,"DIV",{class:!0,"data-svelte-h":!0}),I(n)!=="svelte-1dg1urr"&&(n.innerHTML=l),t=H(u),s=v(u,"DIV",{class:!0});var f=k(s);o=v(f,"NAV",{class:!0});var _=k(o);r=v(_,"DIV",{class:!0});var N=k(r);for(let y=0;y<i.length;y+=1)i[y].l(N);N.forEach(g),c=H(_),h=v(_,"DIV",{class:!0,"data-svelte-h":!0}),I(h)!=="svelte-1t21kj"&&(h.innerHTML=L),_.forEach(g),f.forEach(g),u.forEach(g),this.h()},h(){b(n,"class","stellar-bg h-full relative svelte-x2r4ko"),b(r,"class","menu-links-container flex flex-col gap-2 px-4 py-6 pt-36 md:pt-0 md:pl-[5rem]"),b(h,"class","flex items-center gap-2 px-8 py-6 md:pl-[6.5rem]"),b(o,"class","menu w-full h-full flex flex-col justify-between md:p-20 svelte-x2r4ko"),b(s,"class","menu-container absolute inset-0 z-30 svelte-x2r4ko"),b(e,"class","stellar-container fixed inset-0 md:relative w-screen h-[100dvh] overflow-hidden shrink-0 z-20 svelte-x2r4ko")},m(d,u){M(d,e,u),p(e,n),p(e,t),p(e,s),p(s,o),p(o,r);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(r,null);p(o,c),p(o,h),w=!0},p(d,[u]){if(u&1){m=V(U[new URL(d[0].url).pathname]);let f;for(f=0;f<m.length;f+=1){const _=G(d,m,f);i[f]?(i[f].p(_,u),D(i[f],1)):(i[f]=O(_),i[f].c(),D(i[f],1),i[f].m(r,null))}for(ae(),f=m.length;f<i.length;f+=1)S(f);se()}},i(d){if(!w){for(let u=0;u<m.length;u+=1)D(i[u]);w=!0}},o(d){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)C(i[u]);w=!1},d(d){d&&g(e),le(i,d)}}}function De(a,e,n){let l;return $(a,de,t=>n(0,l=t)),he(t=>{var o,r;const s=document.querySelector("main");E({hash:(r=(o=t.to)==null?void 0:o.url)==null?void 0:r.hash,scrollElement:s}),document.startViewTransition}),ee(()=>{me({target:".menu-link"});const t=document.querySelector("main");t instanceof HTMLElement&&window.addEventListener("wheel",h=>{if(window.matchMedia("(min-width: 768px)").matches){h.preventDefault();const w=ge(h);t.dataset.scrolledAmount=(Number(t.dataset.scrolledAmount)+w.pixelY).toString();const m=Number(t.dataset.scrolledAmount),i=t.getBoundingClientRect().width/2;m<0&&(t.dataset.scrolledAmount="0"),m>=i&&(t.dataset.scrolledAmount=i.toString());const S=Math.min(Math.max(m/i*-100,-75),0);t.dataset.percentage=S.toString(),t.animate({transformOrigin:"center",left:`${Math.abs(S)}%`,transform:`translate(${S}%, 0% )`},{duration:3e3,fill:"forwards"})}},{passive:!1}),document.querySelectorAll(".menu-link").forEach(h=>{h.onclick=xe({scrollElement:t})}),[".project-internal-link",".project-external-link"].forEach(h=>{document.querySelectorAll(h).forEach(w=>{w.onclick=m=>{m.stopPropagation()}})});let r=window.location.hash;[].includes(r)||E({hash:r,scrollElement:t}),window.onhashchange=ve({scrollElement:t})}),[l]}class Ie extends W{constructor(e){super(),F(this,e,De,Le,K,{})}}export{Ie as N,V as e,ge as n,E as s};
