import{s as ce,n as R,p as ve,m as U,q as Ge,F as je,b as Fe,h as re,o as Me,l as Ue,G as qe}from"./scheduler.Bv9kgQnj.js";import{S as ue,i as de,z as $,l as N,h as _,e as E,b as fe,c as A,d as F,g as he,E as W,m as k,G as Ie,s as J,f as Q,j as le,k as S,o as Ke,I as ee,F as Pe,t as Z,x as Xe,y as Be,a as ie,r as Ye,u as Ze,v as $e,w as Je}from"./index.D85UXi4P.js";import{p as Qe}from"./stores.DFTYqFB5.js";import{d as et,e as Ce,w as me,r as j,o as tt,c as _e}from"./entry.BrZqGIKx.js";import{a as nt,d as ot}from"./index.wotBBkUg.js";function te(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function pe(t,e){const n={},s={},a={$$scope:1};let o=t.length;for(;o--;){const r=t[o],i=e[o];if(i){for(const l in r)l in i||(s[l]=1);for(const l in i)a[l]||(n[l]=i[l],a[l]=1);t[o]=i}else for(const l in r)a[l]=1}for(const r in s)r in n||(n[r]=void 0);return n}const ke=10,we=40,ye=800;function st(t){let e=0,n=0,s=0,a=0;return"detail"in t&&(n=t.detail),"wheelDelta"in t&&(n=-t.wheelDelta/120),"wheelDeltaY"in t&&(n=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=n,n=0),s=e*ke,a=n*ke,"deltaY"in t&&(a=t.deltaY),"deltaX"in t&&(s=t.deltaX),(s||a)&&t.deltaMode&&(t.deltaMode==1?(s*=we,a*=we):(s*=ye,a*=ye)),s&&!e&&(e=s<1?-1:1),a&&!n&&(n=a<1?-1:1),{spinX:e,spinY:n,pixelX:s,pixelY:a}}const D={"/":[{text:"About",href:"#about"},{text:"Projects",href:"#projects"},{text:"Contact",href:"#contact"},{text:"Resume",href:"/resume"},{text:"Blog",href:"/blog",disabled:!0}],"/blog":[{text:"Home",href:"/"},{text:"About",href:"/#about"},{text:"Projects",href:"/#projects"},{text:"Contact",href:"/#contact"},{text:"Blog",href:"/blog"}]};function ne({hash:t="",scrollElement:e,duration:n=1e3}){if(e instanceof HTMLElement){const s=t.replace("#",""),a=document.getElementById(s);if(window.matchMedia("(min-width: 768px)").matches){const r=(a==null?void 0:a.offsetLeft)??0,i=e.getBoundingClientRect().width,l=Math.min(Math.max(r/i*-100,-100),0);e.dataset.scrolledAmount=(r/2).toString(),e.dataset.percentage=l.toString(),e.animate({transformOrigin:"center",left:`${Math.abs(l)}%`,transform:`translate(${l}%, 0% )`},{duration:n,fill:"forwards"})}else window.scrollTo({top:(a==null?void 0:a.offsetTop)??0,behavior:"smooth"})}}function at({scrollElement:t}){return e=>{var r;const n=new URL(((r=e.target)==null?void 0:r.href)??""),s=n.hash.replace("#",""),a=document.querySelector(".menu-container"),o=window.matchMedia("(min-width: 768px)");a&&!o.matches&&nt(a,"show"),s!==""&&t instanceof HTMLElement&&(e.preventDefault(),ne({hash:n.hash,scrollElement:t}),et(n,{hash:n.hash,pathname:n.pathname}))}}function rt({scrollElement:t}){return e=>{const n=new URL(e.newURL);ne({hash:n==null?void 0:n.hash,scrollElement:t})}}function lt(t){let e,n,s=[{href:t[0]},t[3],{class:"menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2"}],a={};for(let o=0;o<s.length;o+=1)a=U(a,s[o]);return{c(){e=E("a"),n=fe(t[1]),this.h()},l(o){e=A(o,"A",{href:!0,class:!0});var r=F(e);n=he(r,t[1]),r.forEach(_),this.h()},h(){W(e,a)},m(o,r){N(o,e,r),k(e,n)},p(o,r){r&2&&Ie(n,o[1],a.contenteditable),W(e,a=pe(s,[r&1&&{href:o[0]},r&8&&o[3],{class:"menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2"}]))},d(o){o&&_(e)}}}function it(t){let e,n,s,a,o,r="Soon";return{c(){e=E("span"),n=E("div"),s=fe(t[1]),a=J(),o=E("div"),o.textContent=r,this.h()},l(i){e=A(i,"SPAN",{class:!0});var l=F(e);n=A(l,"DIV",{class:!0});var d=F(n);s=he(d,t[1]),d.forEach(_),a=Q(l),o=A(l,"DIV",{class:!0,"data-svelte-h":!0}),le(o)!=="svelte-12i10eu"&&(o.textContent=r),l.forEach(_),this.h()},h(){S(n,"class","text-slate-500 line-through"),S(o,"class","text-xs leading-none bg-tulip-tree-400 rounded-full overflow-hidden px-2 py-1"),S(e,"class","menu-link-disabled flex items-center gap-2 max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2")},m(i,l){N(i,e,l),k(e,n),k(n,s),k(e,a),k(e,o)},p(i,l){l&2&&Ke(s,i[1])},d(i){i&&_(e)}}}function ct(t){let e;function n(o,r){return o[2]?it:lt}let s=n(t),a=s(t);return{c(){a.c(),e=$()},l(o){a.l(o),e=$()},m(o,r){a.m(o,r),N(o,e,r)},p(o,[r]){s===(s=n(o))&&a?a.p(o,r):(a.d(1),a=s(o),a&&(a.c(),a.m(e.parentNode,e)))},i:R,o:R,d(o){o&&_(e),a.d(o)}}}function ut(t,e,n){const s=["href","text","disabled"];let a=ve(e,s),{href:o="/"}=e,{text:r="Link"}=e,{disabled:i=!1}=e;return t.$$set=l=>{e=U(U({},e),Ge(l)),n(3,a=ve(e,s)),"href"in l&&n(0,o=l.href),"text"in l&&n(1,r=l.text),"disabled"in l&&n(2,i=l.disabled)},[o,r,i,a]}class dt extends ue{constructor(e){super(),de(this,e,ut,ct,ce,{href:0,text:1,disabled:2})}}function ft(t){return Object.keys(t).reduce((e,n)=>t[n]===void 0?e:e+`${n}:${t[n]};`,"")}function xe(t){return t?!0:void 0}ft({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function Ee(t){function e(n){return n(t),()=>{}}return{subscribe:e}}const X=t=>new Proxy(t,{get(e,n,s){return Reflect.get(e,n,s)},ownKeys(e){return Reflect.ownKeys(e).filter(n=>n!=="action")}}),Ae=t=>typeof t=="function";H("empty");function H(t,e){const{stores:n,action:s,returned:a}=e??{},o=(()=>{if(n&&a)return Ce(n,i=>{const l=a(i);if(Ae(l)){const d=(...f)=>X({...l(...f),[`data-melt-${t}`]:"",action:s??z});return d.action=s??z,d}return X({...l,[`data-melt-${t}`]:"",action:s??z})});{const i=a,l=i==null?void 0:i();if(Ae(l)){const d=(...f)=>X({...l(...f),[`data-melt-${t}`]:"",action:s??z});return d.action=s??z,Ee(d)}return Ee(X({...l,[`data-melt-${t}`]:"",action:s??z}))}})(),r=s??(()=>{});return r.subscribe=o.subscribe,r}function He(t){const e=o=>o?`${t}-${o}`:t,n=o=>`data-melt-${t}${o?`-${o}`:""}`,s=o=>`[data-melt-${t}${o?`-${o}`:""}]`;return{name:e,attribute:n,selector:s,getEl:o=>document.querySelector(s(o))}}const ht=typeof document<"u";function G(t){return t instanceof HTMLElement}function mt(...t){return(...e)=>{for(const n of t)typeof n=="function"&&n(...e)}}function z(){}function Ne(t,e,n,s){const a=Array.isArray(e)?e:[e];return a.forEach(o=>t.addEventListener(o,n,s)),()=>{a.forEach(o=>t.removeEventListener(o,n,s))}}function B(t,e,n,s){const a=Array.isArray(e)?e:[e];if(typeof n=="function"){const o=bt(r=>n(r));return a.forEach(r=>t.addEventListener(r,o,s)),()=>{a.forEach(r=>t.removeEventListener(r,o,s))}}return()=>void 0}function pt(t){const e=t.currentTarget;if(!G(e))return null;const n=new CustomEvent(`m-${t.type}`,{detail:{originalEvent:t},cancelable:!0});return e.dispatchEvent(n),n}function bt(t){return e=>{const n=pt(e);if(!(n!=null&&n.defaultPrevented))return t(e)}}function oe(t){return{...t,get:()=>je(t)}}oe.writable=function(t){const e=me(t);let n=t;return{subscribe:e.subscribe,set(s){e.set(s),n=s},update(s){const a=s(n);e.set(a),n=a},get(){return n}}};oe.derived=function(t,e){const n=new Map,s=()=>{const o=Array.isArray(t)?t.map(r=>r.get()):t.get();return e(o)};return{get:s,subscribe:o=>{const r=[];return(Array.isArray(t)?t:[t]).forEach(l=>{r.push(l.subscribe(()=>{o(s())}))}),o(s()),n.set(o,r),()=>{const l=n.get(o);if(l)for(const d of l)d();n.delete(o)}}}};const gt=(t,e)=>{const n=oe(t),s=(o,r)=>{n.update(i=>{const l=o(i);let d=l;return e&&(d=e({curr:i,next:l})),r==null||r(d),d})};return{...n,update:s,set:o=>{s(()=>o)}}};function vt(t){return new Promise(e=>setTimeout(e,t))}const L={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};function Te(t){const e={};return Object.keys(t).forEach(n=>{const s=n,a=t[s];e[s]=oe(me(a))}),e}function V(t){ht&&vt(1).then(()=>{const e=document.activeElement;!G(e)||e===t||(e.tabIndex=-1,t&&(t.tabIndex=0,t.focus()))})}j(void 0,t=>{function e(s){t(s),t(void 0)}return Ne(document,"pointerup",e,{passive:!1,capture:!0})});j(void 0,t=>{function e(s){s&&s.key===L.ESCAPE&&t(s),t(void 0)}return Ne(document,"keydown",e,{passive:!1})});j(!1),j(!1),j(void 0);const _t={loop:!0,orientation:"horizontal"},{name:Y,selector:se}=He("toolbar"),kt=t=>{const e={..._t,...t},n=Te(e),{loop:s,orientation:a}=n,o=H(Y(),{stores:a,returned:u=>({role:"toolbar","data-orientation":u})}),r=H(Y("button"),{returned:()=>({role:"button",type:"button"}),action:u=>(ae(u),{destroy:B(u,"keydown",p)})}),i=H(Y("link"),{returned:()=>({role:"link"}),action:u=>(ae(u),{destroy:B(u,"keydown",p)})}),l=H(Y("separator"),{stores:a,returned:u=>({role:"separator","data-orientation":u==="horizontal"?"vertical":"horizontal","aria-orientation":u==="horizontal"?"vertical":"horizontal"})}),d={type:"single",disabled:!1},f=u=>{const c={...d,...u},w=Te(c),{type:m,disabled:b}=w,h=c.defaultValue?c.defaultValue:c.type==="single"?void 0:[],x=c.value??me(h),v=gt(x,c==null?void 0:c.onValueChange),{name:T}=He("toolbar-group"),I=H(T(),{stores:a,returned:y=>({role:"group","data-orientation":y})}),ze=H(T("item"),{stores:[b,m,v,a],returned:([y,P,O,be])=>g=>{const C=typeof g=="string"?g:g.value,M=typeof g=="string"?!1:!!g.disabled,q=y||M,K=Array.isArray(O)?O.includes(C):O===C,ge=P==="single",We=P==="multiple";return{disabled:xe(q),pressed:K,"data-orientation":be,"data-disabled":xe(q),"data-value":C,"data-state":K?"on":"off","aria-checked":ge?K:void 0,"aria-pressed":We?K:void 0,type:"button",role:ge?"radio":void 0,"data-melt-toolbar-item":""}},action:y=>{ae(y);function P(){const g=y.dataset.value,C=y.dataset.disabled==="true";return{value:g,disabled:C}}function O(){const{value:g,disabled:C}=P();g===void 0||C||v.update(M=>Array.isArray(M)?M.includes(g)?M.filter(q=>q!==g):(M.push(g),M):M===g?void 0:g)}return{destroy:mt(B(y,"click",()=>{O()}),B(y,"keydown",g=>{if(g.key===L.ENTER||g.key===L.SPACE){g.preventDefault(),O();return}p(g)}))}}}),Ve=Ce(v,y=>P=>Array.isArray(y)?y.includes(P):y===P);return{elements:{group:I,item:ze},states:{value:v},helpers:{isPressed:Ve},options:w}};function p(u){const c=a.get(),w=s.get(),m={horizontal:L.ARROW_RIGHT,vertical:L.ARROW_DOWN}[c??"horizontal"],b={horizontal:L.ARROW_LEFT,vertical:L.ARROW_UP}[c??"horizontal"],h=u.currentTarget;if(!G(h))return;const x=h.closest("[data-melt-toolbar]");if(!G(x))return;const v=Oe(x),T=v.indexOf(h);if(u.key===m){u.preventDefault();const I=T+1;I>=v.length&&w?V(v[0]):V(v[I])}else if(u.key===b){u.preventDefault();const I=T-1;I<0&&w?V(v[v.length-1]):V(v[I])}else u.key===L.HOME?(u.preventDefault(),V(v[0])):u.key===L.END&&(u.preventDefault(),V(v[v.length-1]))}return{elements:{root:o,button:r,separator:l,link:i},builders:{createToolbarGroup:f},options:n}};function ae(t){const e=t.closest("[data-melt-toolbar]");if(!G(e))return;Oe(e)[0]===t?t.tabIndex=0:t.tabIndex=-1}function Oe(t){return Array.from(t.querySelectorAll(`${se("item")}, ${se("button")}, ${se("link")}`)).filter(e=>G(e))}function Le(t,e,n){const s=t.slice();return s[10]=e[n].href,s[11]=e[n].text,s[12]=e[n].disabled,s[14]=n,s}function wt(t){return{c:R,l:R,m:R,p:R,d:R}}function yt(t){let e,n=t[11]+"",s,a,o,r,i,l,d,f=[t[3],{href:o=t[10]},{"data-count":r=t[14]},{"aria-label":i="Go to "+t[11].toLowerCase()+" section."},{class:"floating-nav-link block font-zenless-title uppercase text-xl text-slate-900 dark:text-white tracking-wider leading-none outline-none hover:underline focus:underline px-2 py-1 mx-1"}],p={};for(let u=0;u<f.length;u+=1)p=U(p,f[u]);return{c(){e=E("a"),s=fe(n),a=J(),this.h()},l(u){e=A(u,"A",{href:!0,"data-count":!0,"aria-label":!0,class:!0});var c=F(e);s=he(c,n),a=Q(c),c.forEach(_),this.h()},h(){W(e,p),ee(e,"svelte-1rtmkeb",!0)},m(u,c){N(u,e,c),k(e,s),k(e,a),l||(d=Fe(t[3].action(e)),l=!0)},p(u,c){c&1&&n!==(n=u[11]+"")&&Ie(s,n,p.contenteditable),W(e,p=pe(f,[c&8&&u[3],c&1&&o!==(o=u[10])&&{href:o},{"data-count":r},c&1&&i!==(i="Go to "+u[11].toLowerCase()+" section.")&&{"aria-label":i},{class:"floating-nav-link block font-zenless-title uppercase text-xl text-slate-900 dark:text-white tracking-wider leading-none outline-none hover:underline focus:underline px-2 py-1 mx-1"}])),ee(e,"svelte-1rtmkeb",!0)},d(u){u&&_(e),l=!1,d()}}}function Se(t){let e;function n(o,r){return o[12]?wt:yt}let s=n(t),a=s(t);return{c(){a.c(),e=$()},l(o){a.l(o),e=$()},m(o,r){a.m(o,r),N(o,e,r)},p(o,r){s===(s=n(o))&&a?a.p(o,r):(a.d(1),a=s(o),a&&(a.c(),a.m(e.parentNode,e)))},d(o){o&&_(e),a.d(o)}}}function xt(t){let e,n,s,a=te(t[0]),o=[];for(let l=0;l<a.length;l+=1)o[l]=Se(Le(t,a,l));let r=[t[2],{class:"floating-nav fixed left-[50%] -translate-x-1/2 flex bottom-4"}],i={};for(let l=0;l<r.length;l+=1)i=U(i,r[l]);return{c(){e=E("div");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){e=A(l,"DIV",{class:!0});var d=F(e);for(let f=0;f<o.length;f+=1)o[f].l(d);d.forEach(_),this.h()},h(){W(e,i),ee(e,"svelte-1rtmkeb",!0)},m(l,d){N(l,e,d);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(e,null);t[6](e),n||(s=Fe(t[2].action(e)),n=!0)},p(l,[d]){if(d&9){a=te(l[0]);let f;for(f=0;f<a.length;f+=1){const p=Le(l,a,f);o[f]?o[f].p(p,d):(o[f]=Se(p),o[f].c(),o[f].m(e,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=a.length}W(e,i=pe(r,[d&4&&l[2],{class:"floating-nav fixed left-[50%] -translate-x-1/2 flex bottom-4"}])),ee(e,"svelte-1rtmkeb",!0)},i:R,o:R,d(l){l&&_(e),Pe(o,l),t[6](null),n=!1,s()}}}function Et(t,e,n){let s,a,{navlinks:o}=e,r;const{elements:{root:i,button:l,link:d,separator:f},builders:{createToolbarGroup:p}}=kt();re(t,i,c=>n(2,s=c)),re(t,d,c=>n(3,a=c)),Me(async()=>{});function u(c){Ue[c?"unshift":"push"](()=>{r=c,n(1,r)})}return t.$$set=c=>{"navlinks"in c&&n(0,o=c.navlinks)},[o,r,s,a,i,d,u]}class At extends ue{constructor(e){super(),de(this,e,Et,xt,ce,{navlinks:0})}}function De(t,e,n){const s=t.slice();return s[3]=e[n].text,s[4]=e[n].href,s[5]=e[n].disabled,s}function Re(t){let e,n;return e=new dt({props:{href:""+(_e+t[4]),text:t[3],disabled:t[5],"aria-label":"Go to "+t[3].toLowerCase()+" section."}}),{c(){Ye(e.$$.fragment)},l(s){Ze(e.$$.fragment,s)},m(s,a){$e(e,s,a),n=!0},p(s,a){const o={};a&1&&(o.href=""+(_e+s[4])),a&1&&(o.text=s[3]),a&1&&(o.disabled=s[5]),a&1&&(o["aria-label"]="Go to "+s[3].toLowerCase()+" section."),e.$set(o)},i(s){n||(Z(e.$$.fragment,s),n=!0)},o(s){ie(e.$$.fragment,s),n=!1},d(s){Je(e,s)}}}function Tt(t){let e,n,s='<div class="stellar-colored svelte-7tiain"></div> <img src="/img/ui/stellar-bg/grayscale.webp" alt="" class="stellar-grayscale hidden md:block svelte-7tiain"/>',a,o,r,i,l,d,f='<div class="w-10 h-10"><img src="/img/ui/svelte-logo.svg" alt="" width="100" height="100" class="object-contain aspect-square"/></div> <span class="font-zenless-copy">Proudly made with <a href="https://kit.svelte.dev/" aria-label="Proudly made with SvelteKit" target="_blank" class="text-[#ff3e00] outline-none hover:underline focus:underline">SvelteKit</a></span>',p,u=te((D==null?void 0:D[new URL(t[0].url).pathname])??[]),c=[];for(let m=0;m<u.length;m+=1)c[m]=Re(De(t,u,m));const w=m=>ie(c[m],1,1,()=>{c[m]=null});return{c(){e=E("div"),n=E("div"),n.innerHTML=s,a=J(),o=E("div"),r=E("nav"),i=E("div");for(let m=0;m<c.length;m+=1)c[m].c();l=J(),d=E("div"),d.innerHTML=f,this.h()},l(m){e=A(m,"DIV",{class:!0});var b=F(e);n=A(b,"DIV",{class:!0,"data-svelte-h":!0}),le(n)!=="svelte-1dg1urr"&&(n.innerHTML=s),a=Q(b),o=A(b,"DIV",{class:!0});var h=F(o);r=A(h,"NAV",{class:!0});var x=F(r);i=A(x,"DIV",{class:!0});var v=F(i);for(let T=0;T<c.length;T+=1)c[T].l(v);v.forEach(_),l=Q(x),d=A(x,"DIV",{class:!0,"data-svelte-h":!0}),le(d)!=="svelte-1t21kj"&&(d.innerHTML=f),x.forEach(_),h.forEach(_),b.forEach(_),this.h()},h(){S(n,"class","stellar-bg h-full relative svelte-7tiain"),S(i,"class","menu-links-container flex flex-col gap-2 px-4 py-6 pt-36 md:pt-0 md:pl-[5rem]"),S(d,"class","flex items-center gap-2 px-8 py-6 md:pl-[6.5rem]"),S(r,"class","menu w-full h-full md:h-[min-content] md:p-20 svelte-7tiain"),S(o,"class","menu-container absolute inset-0 z-30 flex items-center svelte-7tiain"),S(e,"class","stellar-container fixed inset-0 md:relative w-screen h-[100dvh] overflow-hidden shrink-0 z-20 svelte-7tiain")},m(m,b){N(m,e,b),k(e,n),k(e,a),k(e,o),k(o,r),k(r,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null);k(r,l),k(r,d),p=!0},p(m,[b]){if(b&1){u=te((D==null?void 0:D[new URL(m[0].url).pathname])??[]);let h;for(h=0;h<u.length;h+=1){const x=De(m,u,h);c[h]?(c[h].p(x,b),Z(c[h],1)):(c[h]=Re(x),c[h].c(),Z(c[h],1),c[h].m(i,null))}for(Xe(),h=u.length;h<c.length;h+=1)w(h);Be()}},i(m){if(!p){for(let b=0;b<u.length;b+=1)Z(c[b]);p=!0}},o(m){c=c.filter(Boolean);for(let b=0;b<c.length;b+=1)ie(c[b]);p=!1},d(m){m&&_(e),Pe(c,m)}}}function Lt(t,e,n){let s;re(t,Qe,r=>n(0,s=r));let a;tt(r=>{var l,d;const i=document.querySelector("main");if(ne({hash:(d=(l=r.to)==null?void 0:l.url)==null?void 0:d.hash,scrollElement:i}),!!document.startViewTransition)return new Promise(f=>{document.startViewTransition(async()=>{f(),await r.complete})})});const o=r=>{const i=document.querySelector("main"),l=i==null?void 0:i.lastElementChild;if(i instanceof HTMLElement&&l instanceof HTMLElement&&window.matchMedia("(min-width: 768px)").matches){r.preventDefault();const f=st(r);i.dataset.scrolledAmount=(Number(i.dataset.scrolledAmount)+f.pixelY).toString();const p=Number(i.dataset.scrolledAmount),u=i.offsetWidth/2;p<0&&(i.dataset.scrolledAmount="0"),p>=u&&(i.dataset.scrolledAmount=u.toString());const c=l.offsetLeft/2/u*-100,w=Math.min(Math.max(p/u*-100,c),0);i.dataset.percentage=w.toString(),i.animate({transformOrigin:"center",left:`${Math.abs(w)}%`,transform:`translate(${w}%, 0% )`},{duration:3e3,fill:"forwards"})}};return Me(()=>{s.route.id==="/(horizontal)"&&(a=new At({target:document.body,props:{navlinks:(D==null?void 0:D[new URL(s.url).pathname])??[]}})),ot({target:".menu-link"});const r=document.querySelector("main");r instanceof HTMLElement&&window.addEventListener("wheel",o,{passive:!1}),[".menu-link",".floating-nav-link"].forEach(p=>{document.querySelectorAll(p).forEach(c=>{c.onclick=at({scrollElement:r})})}),[".project-internal-link",".project-external-link"].forEach(p=>{document.querySelectorAll(p).forEach(c=>{c.onclick=w=>{w.stopPropagation()}})});let d=window.location.hash;[].includes(d)||ne({hash:d,scrollElement:r}),window.onhashchange=rt({scrollElement:r})}),qe(()=>{window.removeEventListener("wheel",o),a==null||a.$destroy()}),[s]}class It extends ue{constructor(e){super(),de(this,e,Lt,Tt,ce,{})}}export{It as N,te as e,pe as g};
