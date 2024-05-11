import{s as ce,n as R,v as ve,q as U,w as Ge,J as je,d as Me,b as oe,o as Fe,p as Ue,y as qe}from"./scheduler.Bs-Ydizp.js";import{S as ue,i as de,o as Z,l as N,f as _,e as E,b as fe,c as A,d as M,h as he,E as W,m as k,I as Ie,s as Q,g as $,j as le,k as S,n as Ke,J as ee,F as Pe,t as J,v as Xe,w as Be,a as ie,x as Ye,y as Je,z as Ze,A as Qe}from"./index.cVSpFuol.js";import{p as $e}from"./stores.Nba_D4Up.js";import{d as et,o as tt,c as _e}from"./entry.CQDOp_-W.js";import{a as nt,d as rt}from"./index.wotBBkUg.js";import{g as me}from"./spread.CgU5AtxT.js";import{d as Ce,w as pe,r as j}from"./index.Cjnls_wo.js";function te(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const ke=10,we=40,xe=800;function at(t){let e=0,n=0,a=0,s=0;return"detail"in t&&(n=t.detail),"wheelDelta"in t&&(n=-t.wheelDelta/120),"wheelDeltaY"in t&&(n=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=n,n=0),a=e*ke,s=n*ke,"deltaY"in t&&(s=t.deltaY),"deltaX"in t&&(a=t.deltaX),(a||s)&&t.deltaMode&&(t.deltaMode==1?(a*=we,s*=we):(a*=xe,s*=xe)),a&&!e&&(e=a<1?-1:1),s&&!n&&(n=s<1?-1:1),{spinX:e,spinY:n,pixelX:a,pixelY:s}}const D={"/":[{text:"About",href:"#about"},{text:"Projects",href:"#projects"},{text:"Contact",href:"#contact"},{text:"Resume",href:"/resume"},{text:"Blog",href:"/blog",disabled:!0}],"/blog":[{text:"Home",href:"/"},{text:"About",href:"/#about"},{text:"Projects",href:"/#projects"},{text:"Contact",href:"/#contact"},{text:"Blog",href:"/blog"}]};function ne({hash:t="",scrollElement:e,duration:n=1e3}){if(e instanceof HTMLElement){const a=t.replace("#",""),s=document.getElementById(a);if(window.matchMedia("(min-width: 768px)").matches){const o=(s==null?void 0:s.offsetLeft)??0,c=e.getBoundingClientRect().width,l=Math.min(Math.max(o/c*-100,-100),0);e.dataset.scrolledAmount=(o/2).toString(),e.dataset.percentage=l.toString(),e.animate({transformOrigin:"center",left:`${Math.abs(l)}%`,transform:`translate(${l}%, 0% )`},{duration:n,fill:"forwards"})}else window.scrollTo({top:(s==null?void 0:s.offsetTop)??0,behavior:"smooth"})}}function st({scrollElement:t}){return e=>{var o;const n=new URL(((o=e.target)==null?void 0:o.href)??""),a=n.hash.replace("#",""),s=document.querySelector(".menu-container"),r=window.matchMedia("(min-width: 768px)");s&&!r.matches&&nt(s,"show"),a!==""&&t instanceof HTMLElement&&(e.preventDefault(),ne({hash:n.hash,scrollElement:t}),et(n,{hash:n.hash,pathname:n.pathname}))}}function ot({scrollElement:t}){return e=>{const n=new URL(e.newURL);ne({hash:n==null?void 0:n.hash,scrollElement:t})}}function lt(t){let e,n,a=[{href:t[0]},t[3],{class:"menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2"}],s={};for(let r=0;r<a.length;r+=1)s=U(s,a[r]);return{c(){e=E("a"),n=fe(t[1]),this.h()},l(r){e=A(r,"A",{href:!0,class:!0});var o=M(e);n=he(o,t[1]),o.forEach(_),this.h()},h(){W(e,s)},m(r,o){N(r,e,o),k(e,n)},p(r,o){o&2&&Ie(n,r[1],s.contenteditable),W(e,s=me(a,[o&1&&{href:r[0]},o&8&&r[3],{class:"menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2"}]))},d(r){r&&_(e)}}}function it(t){let e,n,a,s,r,o="Soon";return{c(){e=E("span"),n=E("div"),a=fe(t[1]),s=Q(),r=E("div"),r.textContent=o,this.h()},l(c){e=A(c,"SPAN",{class:!0});var l=M(e);n=A(l,"DIV",{class:!0});var d=M(n);a=he(d,t[1]),d.forEach(_),s=$(l),r=A(l,"DIV",{class:!0,"data-svelte-h":!0}),le(r)!=="svelte-12i10eu"&&(r.textContent=o),l.forEach(_),this.h()},h(){S(n,"class","text-slate-500 line-through"),S(r,"class","text-xs leading-none bg-tulip-tree-400 rounded-full overflow-hidden px-2 py-1"),S(e,"class","menu-link-disabled flex items-center gap-2 max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2")},m(c,l){N(c,e,l),k(e,n),k(n,a),k(e,s),k(e,r)},p(c,l){l&2&&Ke(a,c[1])},d(c){c&&_(e)}}}function ct(t){let e;function n(r,o){return r[2]?it:lt}let a=n(t),s=a(t);return{c(){s.c(),e=Z()},l(r){s.l(r),e=Z()},m(r,o){s.m(r,o),N(r,e,o)},p(r,[o]){a===(a=n(r))&&s?s.p(r,o):(s.d(1),s=a(r),s&&(s.c(),s.m(e.parentNode,e)))},i:R,o:R,d(r){r&&_(e),s.d(r)}}}function ut(t,e,n){const a=["href","text","disabled"];let s=ve(e,a),{href:r="/"}=e,{text:o="Link"}=e,{disabled:c=!1}=e;return t.$$set=l=>{e=U(U({},e),Ge(l)),n(3,s=ve(e,a)),"href"in l&&n(0,r=l.href),"text"in l&&n(1,o=l.text),"disabled"in l&&n(2,c=l.disabled)},[r,o,c,s]}class dt extends ue{constructor(e){super(),de(this,e,ut,ct,ce,{href:0,text:1,disabled:2})}}function ft(t){return Object.keys(t).reduce((e,n)=>t[n]===void 0?e:e+`${n}:${t[n]};`,"")}function ye(t){return t?!0:void 0}ft({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function Ee(t){function e(n){return n(t),()=>{}}return{subscribe:e}}const X=t=>new Proxy(t,{get(e,n,a){return Reflect.get(e,n,a)},ownKeys(e){return Reflect.ownKeys(e).filter(n=>n!=="action")}}),Ae=t=>typeof t=="function";H("empty");function H(t,e){const{stores:n,action:a,returned:s}=e??{},r=(()=>{if(n&&s)return Ce(n,c=>{const l=s(c);if(Ae(l)){const d=(...f)=>X({...l(...f),[`data-melt-${t}`]:"",action:a??z});return d.action=a??z,d}return X({...l,[`data-melt-${t}`]:"",action:a??z})});{const c=s,l=c==null?void 0:c();if(Ae(l)){const d=(...f)=>X({...l(...f),[`data-melt-${t}`]:"",action:a??z});return d.action=a??z,Ee(d)}return Ee(X({...l,[`data-melt-${t}`]:"",action:a??z}))}})(),o=a??(()=>{});return o.subscribe=r.subscribe,o}function He(t){const e=r=>r?`${t}-${r}`:t,n=r=>`data-melt-${t}${r?`-${r}`:""}`,a=r=>`[data-melt-${t}${r?`-${r}`:""}]`;return{name:e,attribute:n,selector:a,getEl:r=>document.querySelector(a(r))}}const ht=typeof document<"u";function G(t){return t instanceof HTMLElement}function mt(...t){return(...e)=>{for(const n of t)typeof n=="function"&&n(...e)}}function z(){}function Ne(t,e,n,a){const s=Array.isArray(e)?e:[e];return s.forEach(r=>t.addEventListener(r,n,a)),()=>{s.forEach(r=>t.removeEventListener(r,n,a))}}function B(t,e,n,a){const s=Array.isArray(e)?e:[e];if(typeof n=="function"){const r=bt(o=>n(o));return s.forEach(o=>t.addEventListener(o,r,a)),()=>{s.forEach(o=>t.removeEventListener(o,r,a))}}return()=>void 0}function pt(t){const e=t.currentTarget;if(!G(e))return null;const n=new CustomEvent(`m-${t.type}`,{detail:{originalEvent:t},cancelable:!0});return e.dispatchEvent(n),n}function bt(t){return e=>{const n=pt(e);if(!(n!=null&&n.defaultPrevented))return t(e)}}function re(t){return{...t,get:()=>je(t)}}re.writable=function(t){const e=pe(t);let n=t;return{subscribe:e.subscribe,set(a){e.set(a),n=a},update(a){const s=a(n);e.set(s),n=s},get(){return n}}};re.derived=function(t,e){const n=new Map,a=()=>{const r=Array.isArray(t)?t.map(o=>o.get()):t.get();return e(r)};return{get:a,subscribe:r=>{const o=[];return(Array.isArray(t)?t:[t]).forEach(l=>{o.push(l.subscribe(()=>{r(a())}))}),r(a()),n.set(r,o),()=>{const l=n.get(r);if(l)for(const d of l)d();n.delete(r)}}}};const gt=(t,e)=>{const n=re(t),a=(r,o)=>{n.update(c=>{const l=r(c);let d=l;return e&&(d=e({curr:c,next:l})),o==null||o(d),d})};return{...n,update:a,set:r=>{a(()=>r)}}};function vt(t){return new Promise(e=>setTimeout(e,t))}const L={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};function Te(t){const e={};return Object.keys(t).forEach(n=>{const a=n,s=t[a];e[a]=re(pe(s))}),e}function V(t){ht&&vt(1).then(()=>{const e=document.activeElement;!G(e)||e===t||(e.tabIndex=-1,t&&(t.tabIndex=0,t.focus()))})}j(void 0,t=>{function e(a){t(a),t(void 0)}return Ne(document,"pointerup",e,{passive:!1,capture:!0})});j(void 0,t=>{function e(a){a&&a.key===L.ESCAPE&&t(a),t(void 0)}return Ne(document,"keydown",e,{passive:!1})});j(!1),j(!1),j(void 0);const _t={loop:!0,orientation:"horizontal"},{name:Y,selector:ae}=He("toolbar"),kt=t=>{const e={..._t,...t},n=Te(e),{loop:a,orientation:s}=n,r=H(Y(),{stores:s,returned:u=>({role:"toolbar","data-orientation":u})}),o=H(Y("button"),{returned:()=>({role:"button",type:"button"}),action:u=>(se(u),{destroy:B(u,"keydown",p)})}),c=H(Y("link"),{returned:()=>({role:"link"}),action:u=>(se(u),{destroy:B(u,"keydown",p)})}),l=H(Y("separator"),{stores:s,returned:u=>({role:"separator","data-orientation":u==="horizontal"?"vertical":"horizontal","aria-orientation":u==="horizontal"?"vertical":"horizontal"})}),d={type:"single",disabled:!1},f=u=>{const i={...d,...u},w=Te(i),{type:m,disabled:b}=w,h=i.defaultValue?i.defaultValue:i.type==="single"?void 0:[],y=i.value??pe(h),v=gt(y,i==null?void 0:i.onValueChange),{name:T}=He("toolbar-group"),I=H(T(),{stores:s,returned:x=>({role:"group","data-orientation":x})}),ze=H(T("item"),{stores:[b,m,v,s],returned:([x,P,O,be])=>g=>{const C=typeof g=="string"?g:g.value,F=typeof g=="string"?!1:!!g.disabled,q=x||F,K=Array.isArray(O)?O.includes(C):O===C,ge=P==="single",We=P==="multiple";return{disabled:ye(q),pressed:K,"data-orientation":be,"data-disabled":ye(q),"data-value":C,"data-state":K?"on":"off","aria-checked":ge?K:void 0,"aria-pressed":We?K:void 0,type:"button",role:ge?"radio":void 0,"data-melt-toolbar-item":""}},action:x=>{se(x);function P(){const g=x.dataset.value,C=x.dataset.disabled==="true";return{value:g,disabled:C}}function O(){const{value:g,disabled:C}=P();g===void 0||C||v.update(F=>Array.isArray(F)?F.includes(g)?F.filter(q=>q!==g):(F.push(g),F):F===g?void 0:g)}return{destroy:mt(B(x,"click",()=>{O()}),B(x,"keydown",g=>{if(g.key===L.ENTER||g.key===L.SPACE){g.preventDefault(),O();return}p(g)}))}}}),Ve=Ce(v,x=>P=>Array.isArray(x)?x.includes(P):x===P);return{elements:{group:I,item:ze},states:{value:v},helpers:{isPressed:Ve},options:w}};function p(u){const i=s.get(),w=a.get(),m={horizontal:L.ARROW_RIGHT,vertical:L.ARROW_DOWN}[i??"horizontal"],b={horizontal:L.ARROW_LEFT,vertical:L.ARROW_UP}[i??"horizontal"],h=u.currentTarget;if(!G(h))return;const y=h.closest("[data-melt-toolbar]");if(!G(y))return;const v=Oe(y),T=v.indexOf(h);if(u.key===m){u.preventDefault();const I=T+1;I>=v.length&&w?V(v[0]):V(v[I])}else if(u.key===b){u.preventDefault();const I=T-1;I<0&&w?V(v[v.length-1]):V(v[I])}else u.key===L.HOME?(u.preventDefault(),V(v[0])):u.key===L.END&&(u.preventDefault(),V(v[v.length-1]))}return{elements:{root:r,button:o,separator:l,link:c},builders:{createToolbarGroup:f},options:n}};function se(t){const e=t.closest("[data-melt-toolbar]");if(!G(e))return;Oe(e)[0]===t?t.tabIndex=0:t.tabIndex=-1}function Oe(t){return Array.from(t.querySelectorAll(`${ae("item")}, ${ae("button")}, ${ae("link")}`)).filter(e=>G(e))}function Le(t,e,n){const a=t.slice();return a[10]=e[n].href,a[11]=e[n].text,a[12]=e[n].disabled,a[14]=n,a}function wt(t){return{c:R,l:R,m:R,p:R,d:R}}function xt(t){let e,n=t[11]+"",a,s,r,o,c,l,d,f=[t[3],{href:r=t[10]},{"data-count":o=t[14]},{"aria-label":c="Go to "+t[11].toLowerCase()+" section."},{class:"floating-nav-link block font-zenless-title uppercase text-xl text-slate-900 dark:text-white tracking-wider leading-none outline-none hover:underline focus:underline px-2 py-1 mx-1"}],p={};for(let u=0;u<f.length;u+=1)p=U(p,f[u]);return{c(){e=E("a"),a=fe(n),s=Q(),this.h()},l(u){e=A(u,"A",{href:!0,"data-count":!0,"aria-label":!0,class:!0});var i=M(e);a=he(i,n),s=$(i),i.forEach(_),this.h()},h(){W(e,p),ee(e,"svelte-1rtmkeb",!0)},m(u,i){N(u,e,i),k(e,a),k(e,s),l||(d=Me(t[3].action(e)),l=!0)},p(u,i){i&1&&n!==(n=u[11]+"")&&Ie(a,n,p.contenteditable),W(e,p=me(f,[i&8&&u[3],i&1&&r!==(r=u[10])&&{href:r},{"data-count":o},i&1&&c!==(c="Go to "+u[11].toLowerCase()+" section.")&&{"aria-label":c},{class:"floating-nav-link block font-zenless-title uppercase text-xl text-slate-900 dark:text-white tracking-wider leading-none outline-none hover:underline focus:underline px-2 py-1 mx-1"}])),ee(e,"svelte-1rtmkeb",!0)},d(u){u&&_(e),l=!1,d()}}}function Se(t){let e;function n(r,o){return r[12]?wt:xt}let a=n(t),s=a(t);return{c(){s.c(),e=Z()},l(r){s.l(r),e=Z()},m(r,o){s.m(r,o),N(r,e,o)},p(r,o){a===(a=n(r))&&s?s.p(r,o):(s.d(1),s=a(r),s&&(s.c(),s.m(e.parentNode,e)))},d(r){r&&_(e),s.d(r)}}}function yt(t){let e,n,a,s=te(t[0]),r=[];for(let l=0;l<s.length;l+=1)r[l]=Se(Le(t,s,l));let o=[t[2],{class:"floating-nav fixed left-[50%] -translate-x-1/2 flex bottom-4"}],c={};for(let l=0;l<o.length;l+=1)c=U(c,o[l]);return{c(){e=E("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=A(l,"DIV",{class:!0});var d=M(e);for(let f=0;f<r.length;f+=1)r[f].l(d);d.forEach(_),this.h()},h(){W(e,c),ee(e,"svelte-1rtmkeb",!0)},m(l,d){N(l,e,d);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(e,null);t[6](e),n||(a=Me(t[2].action(e)),n=!0)},p(l,[d]){if(d&9){s=te(l[0]);let f;for(f=0;f<s.length;f+=1){const p=Le(l,s,f);r[f]?r[f].p(p,d):(r[f]=Se(p),r[f].c(),r[f].m(e,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=s.length}W(e,c=me(o,[d&4&&l[2],{class:"floating-nav fixed left-[50%] -translate-x-1/2 flex bottom-4"}])),ee(e,"svelte-1rtmkeb",!0)},i:R,o:R,d(l){l&&_(e),Pe(r,l),t[6](null),n=!1,a()}}}function Et(t,e,n){let a,s,{navlinks:r}=e,o;const{elements:{root:c,button:l,link:d,separator:f},builders:{createToolbarGroup:p}}=kt();oe(t,c,i=>n(2,a=i)),oe(t,d,i=>n(3,s=i)),Fe(async()=>{});function u(i){Ue[i?"unshift":"push"](()=>{o=i,n(1,o)})}return t.$$set=i=>{"navlinks"in i&&n(0,r=i.navlinks)},[r,o,a,s,c,d,u]}class At extends ue{constructor(e){super(),de(this,e,Et,yt,ce,{navlinks:0})}}function De(t,e,n){const a=t.slice();return a[3]=e[n].text,a[4]=e[n].href,a[5]=e[n].disabled,a}function Re(t){let e,n;return e=new dt({props:{href:""+(_e+t[4]),text:t[3],disabled:t[5],"aria-label":"Go to "+t[3].toLowerCase()+" section."}}),{c(){Ye(e.$$.fragment)},l(a){Je(e.$$.fragment,a)},m(a,s){Ze(e,a,s),n=!0},p(a,s){const r={};s&1&&(r.href=""+(_e+a[4])),s&1&&(r.text=a[3]),s&1&&(r.disabled=a[5]),s&1&&(r["aria-label"]="Go to "+a[3].toLowerCase()+" section."),e.$set(r)},i(a){n||(J(e.$$.fragment,a),n=!0)},o(a){ie(e.$$.fragment,a),n=!1},d(a){Qe(e,a)}}}function Tt(t){let e,n,a='<div class="stellar-colored svelte-10gxpuk"></div> <img src="/img/ui/stellar-bg/grayscale.webp" alt="" class="stellar-grayscale hidden md:block svelte-10gxpuk"/>',s,r,o,c,l,d,f='<div class="w-10 h-10"><img src="/img/ui/svelte-logo.svg" alt="" width="100" height="100" class="object-contain aspect-square"/></div> <span class="font-zenless-copy">Proudly made with <a href="https://kit.svelte.dev/" aria-label="Proudly made with SvelteKit" target="_blank" class="text-[#ff3e00] outline-none hover:underline focus:underline">SvelteKit</a></span>',p,u=te((D==null?void 0:D[new URL(t[0].url).pathname])??[]),i=[];for(let m=0;m<u.length;m+=1)i[m]=Re(De(t,u,m));const w=m=>ie(i[m],1,1,()=>{i[m]=null});return{c(){e=E("div"),n=E("div"),n.innerHTML=a,s=Q(),r=E("div"),o=E("nav"),c=E("div");for(let m=0;m<i.length;m+=1)i[m].c();l=Q(),d=E("div"),d.innerHTML=f,this.h()},l(m){e=A(m,"DIV",{class:!0});var b=M(e);n=A(b,"DIV",{class:!0,"data-svelte-h":!0}),le(n)!=="svelte-1dg1urr"&&(n.innerHTML=a),s=$(b),r=A(b,"DIV",{class:!0});var h=M(r);o=A(h,"NAV",{class:!0});var y=M(o);c=A(y,"DIV",{class:!0});var v=M(c);for(let T=0;T<i.length;T+=1)i[T].l(v);v.forEach(_),l=$(y),d=A(y,"DIV",{class:!0,"data-svelte-h":!0}),le(d)!=="svelte-1t21kj"&&(d.innerHTML=f),y.forEach(_),h.forEach(_),b.forEach(_),this.h()},h(){S(n,"class","stellar-bg h-full relative svelte-10gxpuk"),S(c,"class","menu-links-container flex flex-col gap-2 px-4 py-6 pt-36 md:pt-0 md:pl-[5rem]"),S(d,"class","flex items-center gap-2 px-8 py-6 md:pl-[6.5rem]"),S(o,"class","menu w-full h-full md:h-[min-content] md:p-20 svelte-10gxpuk"),S(r,"class","menu-container absolute inset-0 z-30 flex items-center svelte-10gxpuk"),S(e,"class","stellar-container fixed inset-0 md:relative w-screen h-[100dvh] overflow-hidden shrink-0 z-20 svelte-10gxpuk")},m(m,b){N(m,e,b),k(e,n),k(e,s),k(e,r),k(r,o),k(o,c);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(c,null);k(o,l),k(o,d),p=!0},p(m,[b]){if(b&1){u=te((D==null?void 0:D[new URL(m[0].url).pathname])??[]);let h;for(h=0;h<u.length;h+=1){const y=De(m,u,h);i[h]?(i[h].p(y,b),J(i[h],1)):(i[h]=Re(y),i[h].c(),J(i[h],1),i[h].m(c,null))}for(Xe(),h=u.length;h<i.length;h+=1)w(h);Be()}},i(m){if(!p){for(let b=0;b<u.length;b+=1)J(i[b]);p=!0}},o(m){i=i.filter(Boolean);for(let b=0;b<i.length;b+=1)ie(i[b]);p=!1},d(m){m&&_(e),Pe(i,m)}}}function Lt(t,e,n){let a;oe(t,$e,o=>n(0,a=o));let s;tt(o=>{var l,d;const c=document.querySelector("main");if(ne({hash:(d=(l=o.to)==null?void 0:l.url)==null?void 0:d.hash,scrollElement:c}),!!document.startViewTransition)return new Promise(f=>{document.startViewTransition(async()=>{f(),await o.complete})})});const r=o=>{const c=document.querySelector("main"),l=c==null?void 0:c.lastElementChild;if(c instanceof HTMLElement&&l instanceof HTMLElement&&window.matchMedia("(min-width: 768px)").matches){o.preventDefault();const f=at(o);c.dataset.scrolledAmount=(Number(c.dataset.scrolledAmount)+f.pixelY).toString();const p=Number(c.dataset.scrolledAmount),u=c.offsetWidth/2;p<0&&(c.dataset.scrolledAmount="0"),p>=u&&(c.dataset.scrolledAmount=u.toString());const i=l.offsetLeft/2/u*-100,w=Math.min(Math.max(p/u*-100,i),0);c.dataset.percentage=w.toString(),c.animate({transformOrigin:"center",left:`${Math.abs(w)}%`,transform:`translate(${w}%, 0% )`},{duration:3e3,fill:"forwards"})}};return Fe(()=>{a.route.id==="/(horizontal)"&&(s=new At({target:document.body,props:{navlinks:(D==null?void 0:D[new URL(a.url).pathname])??[]}})),rt({target:".menu-link"});const o=document.querySelector("main");o instanceof HTMLElement&&window.addEventListener("wheel",r,{passive:!1}),[".menu-link",".floating-nav-link"].forEach(p=>{document.querySelectorAll(p).forEach(i=>{i.onclick=st({scrollElement:o})})}),[".project-internal-link",".project-external-link"].forEach(p=>{document.querySelectorAll(p).forEach(i=>{i.onclick=w=>{w.stopPropagation()}})});let d=window.location.hash;[].includes(d)||ne({hash:d,scrollElement:o}),window.onhashchange=ot({scrollElement:o})}),qe(()=>{window.removeEventListener("wheel",r),s==null||s.$destroy()}),[a]}class Ct extends ue{constructor(e){super(),de(this,e,Lt,Tt,ce,{})}}export{Ct as N,te as e};
