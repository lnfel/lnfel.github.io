import{s as ce,n as R,v as ve,q as U,w as Ge,J as je,d as Me,b as se,o as Fe,p as Ue,y as qe}from"./scheduler.Bs-Ydizp.js";import{S as ue,i as de,o as Z,l as z,f as _,e as E,b as fe,c as A,d as M,h as he,E as W,m as w,I as Ie,s as Q,g as $,j as le,k as S,n as Ke,J as ee,F as Pe,t as J,v as Xe,w as Be,a as ie,x as Ye,y as Je,z as Ze,A as Qe}from"./index.cVSpFuol.js";import{p as $e}from"./stores.BkP8fOKD.js";import{d as et,o as tt,c as _e}from"./entry.Bh_xxGMd.js";import{a as nt,d as rt}from"./index.wotBBkUg.js";import{g as me}from"./spread.CgU5AtxT.js";import{d as Ce,w as pe,r as j}from"./index.Cjnls_wo.js";function te(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const we=10,ke=40,ye=800;function ot(t){let e=0,n=0,o=0,a=0;return"detail"in t&&(n=t.detail),"wheelDelta"in t&&(n=-t.wheelDelta/120),"wheelDeltaY"in t&&(n=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=n,n=0),o=e*we,a=n*we,"deltaY"in t&&(a=t.deltaY),"deltaX"in t&&(o=t.deltaX),(o||a)&&t.deltaMode&&(t.deltaMode==1?(o*=ke,a*=ke):(o*=ye,a*=ye)),o&&!e&&(e=o<1?-1:1),a&&!n&&(n=a<1?-1:1),{spinX:e,spinY:n,pixelX:o,pixelY:a}}const D={"/":[{text:"About",href:"#about"},{text:"Projects",href:"#projects"},{text:"Contact",href:"#contact"},{text:"Resume",href:"/resume"},{text:"Blog",href:"/blog",disabled:!0}],"/blog":[{text:"Home",href:"/"},{text:"About",href:"/#about"},{text:"Projects",href:"/#projects"},{text:"Contact",href:"/#contact"},{text:"Blog",href:"/blog"}]};function ne({hash:t="",scrollElement:e,duration:n=1e3}){if(e instanceof HTMLElement){const o=t.replace("#",""),a=document.getElementById(o);if(window.matchMedia("(min-width: 768px)").matches){const s=(a==null?void 0:a.offsetLeft)??0,c=e.getBoundingClientRect().width,l=Math.min(Math.max(s/c*-100,-100),0);e.dataset.scrolledAmount=(s/2).toString(),e.dataset.percentage=l.toString(),e.animate({transformOrigin:"center",left:`${Math.abs(l)}%`,transform:`translate(${l}%, 0% )`},{duration:n,fill:"forwards"})}else window.scrollTo({top:(a==null?void 0:a.offsetTop)??0,behavior:"smooth"})}}function at({scrollElement:t}){return e=>{var s;const n=new URL(((s=e.target)==null?void 0:s.href)??""),o=n.hash.replace("#",""),a=document.querySelector(".menu-container"),r=window.matchMedia("(min-width: 768px)");a&&!r.matches&&nt(a,"show"),o!==""&&t instanceof HTMLElement&&(e.preventDefault(),ne({hash:n.hash,scrollElement:t}),et(n,{hash:n.hash,pathname:n.pathname}))}}function st({scrollElement:t}){return e=>{const n=new URL(e.newURL);ne({hash:n==null?void 0:n.hash,scrollElement:t})}}function lt(t){let e,n,o=[{href:t[0]},t[3],{class:"menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2"}],a={};for(let r=0;r<o.length;r+=1)a=U(a,o[r]);return{c(){e=E("a"),n=fe(t[1]),this.h()},l(r){e=A(r,"A",{href:!0,class:!0});var s=M(e);n=he(s,t[1]),s.forEach(_),this.h()},h(){W(e,a)},m(r,s){z(r,e,s),w(e,n)},p(r,s){s&2&&Ie(n,r[1],a.contenteditable),W(e,a=me(o,[s&1&&{href:r[0]},s&8&&r[3],{class:"menu-link max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2"}]))},d(r){r&&_(e)}}}function it(t){let e,n,o,a,r,s="Soon";return{c(){e=E("span"),n=E("div"),o=fe(t[1]),a=Q(),r=E("div"),r.textContent=s,this.h()},l(c){e=A(c,"SPAN",{class:!0});var l=M(e);n=A(l,"DIV",{class:!0});var d=M(n);o=he(d,t[1]),d.forEach(_),a=$(l),r=A(l,"DIV",{class:!0,"data-svelte-h":!0}),le(r)!=="svelte-12i10eu"&&(r.textContent=s),l.forEach(_),this.h()},h(){S(n,"class","text-slate-500 line-through"),S(r,"class","text-xs leading-none bg-tulip-tree-400 rounded-full overflow-hidden px-2 py-1"),S(e,"class","menu-link-disabled flex items-center gap-2 max-w-fit font-zenless-title uppercase text-4xl md:text-5xl outline-none px-6 py-2")},m(c,l){z(c,e,l),w(e,n),w(n,o),w(e,a),w(e,r)},p(c,l){l&2&&Ke(o,c[1])},d(c){c&&_(e)}}}function ct(t){let e;function n(r,s){return r[2]?it:lt}let o=n(t),a=o(t);return{c(){a.c(),e=Z()},l(r){a.l(r),e=Z()},m(r,s){a.m(r,s),z(r,e,s)},p(r,[s]){o===(o=n(r))&&a?a.p(r,s):(a.d(1),a=o(r),a&&(a.c(),a.m(e.parentNode,e)))},i:R,o:R,d(r){r&&_(e),a.d(r)}}}function ut(t,e,n){const o=["href","text","disabled"];let a=ve(e,o),{href:r="/"}=e,{text:s="Link"}=e,{disabled:c=!1}=e;return t.$$set=l=>{e=U(U({},e),Ge(l)),n(3,a=ve(e,o)),"href"in l&&n(0,r=l.href),"text"in l&&n(1,s=l.text),"disabled"in l&&n(2,c=l.disabled)},[r,s,c,a]}class dt extends ue{constructor(e){super(),de(this,e,ut,ct,ce,{href:0,text:1,disabled:2})}}function ft(t){return Object.keys(t).reduce((e,n)=>t[n]===void 0?e:e+`${n}:${t[n]};`,"")}function xe(t){return t?!0:void 0}ft({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function Ee(t){function e(n){return n(t),()=>{}}return{subscribe:e}}const X=t=>new Proxy(t,{get(e,n,o){return Reflect.get(e,n,o)},ownKeys(e){return Reflect.ownKeys(e).filter(n=>n!=="action")}}),Ae=t=>typeof t=="function";H("empty");function H(t,e){const{stores:n,action:o,returned:a}=e??{},r=(()=>{if(n&&a)return Ce(n,c=>{const l=a(c);if(Ae(l)){const d=(...f)=>X({...l(...f),[`data-melt-${t}`]:"",action:o??O});return d.action=o??O,d}return X({...l,[`data-melt-${t}`]:"",action:o??O})});{const c=a,l=c==null?void 0:c();if(Ae(l)){const d=(...f)=>X({...l(...f),[`data-melt-${t}`]:"",action:o??O});return d.action=o??O,Ee(d)}return Ee(X({...l,[`data-melt-${t}`]:"",action:o??O}))}})(),s=o??(()=>{});return s.subscribe=r.subscribe,s}function He(t){const e=r=>r?`${t}-${r}`:t,n=r=>`data-melt-${t}${r?`-${r}`:""}`,o=r=>`[data-melt-${t}${r?`-${r}`:""}]`;return{name:e,attribute:n,selector:o,getEl:r=>document.querySelector(o(r))}}const ht=typeof document<"u";function G(t){return t instanceof HTMLElement}function mt(...t){return(...e)=>{for(const n of t)typeof n=="function"&&n(...e)}}function O(){}function ze(t,e,n,o){const a=Array.isArray(e)?e:[e];return a.forEach(r=>t.addEventListener(r,n,o)),()=>{a.forEach(r=>t.removeEventListener(r,n,o))}}function B(t,e,n,o){const a=Array.isArray(e)?e:[e];if(typeof n=="function"){const r=bt(s=>n(s));return a.forEach(s=>t.addEventListener(s,r,o)),()=>{a.forEach(s=>t.removeEventListener(s,r,o))}}return()=>void 0}function pt(t){const e=t.currentTarget;if(!G(e))return null;const n=new CustomEvent(`m-${t.type}`,{detail:{originalEvent:t},cancelable:!0});return e.dispatchEvent(n),n}function bt(t){return e=>{const n=pt(e);if(!(n!=null&&n.defaultPrevented))return t(e)}}function re(t){return{...t,get:()=>je(t)}}re.writable=function(t){const e=pe(t);let n=t;return{subscribe:e.subscribe,set(o){e.set(o),n=o},update(o){const a=o(n);e.set(a),n=a},get(){return n}}};re.derived=function(t,e){const n=new Map,o=()=>{const r=Array.isArray(t)?t.map(s=>s.get()):t.get();return e(r)};return{get:o,subscribe:r=>{const s=[];return(Array.isArray(t)?t:[t]).forEach(l=>{s.push(l.subscribe(()=>{r(o())}))}),r(o()),n.set(r,s),()=>{const l=n.get(r);if(l)for(const d of l)d();n.delete(r)}}}};const gt=(t,e)=>{const n=re(t),o=(r,s)=>{n.update(c=>{const l=r(c);let d=l;return e&&(d=e({curr:c,next:l})),s==null||s(d),d})};return{...n,update:o,set:r=>{o(()=>r)}}};function vt(t){return new Promise(e=>setTimeout(e,t))}const L={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};function Te(t){const e={};return Object.keys(t).forEach(n=>{const o=n,a=t[o];e[o]=re(pe(a))}),e}function V(t){ht&&vt(1).then(()=>{const e=document.activeElement;!G(e)||e===t||(e.tabIndex=-1,t&&(t.tabIndex=0,t.focus()))})}j(void 0,t=>{function e(o){t(o),t(void 0)}return ze(document,"pointerup",e,{passive:!1,capture:!0})});j(void 0,t=>{function e(o){o&&o.key===L.ESCAPE&&t(o),t(void 0)}return ze(document,"keydown",e,{passive:!1})});j(!1),j(!1),j(void 0);const _t={loop:!0,orientation:"horizontal"},{name:Y,selector:oe}=He("toolbar"),wt=t=>{const e={..._t,...t},n=Te(e),{loop:o,orientation:a}=n,r=H(Y(),{stores:a,returned:u=>({role:"toolbar","data-orientation":u})}),s=H(Y("button"),{returned:()=>({role:"button",type:"button"}),action:u=>(ae(u),{destroy:B(u,"keydown",p)})}),c=H(Y("link"),{returned:()=>({role:"link"}),action:u=>(ae(u),{destroy:B(u,"keydown",p)})}),l=H(Y("separator"),{stores:a,returned:u=>({role:"separator","data-orientation":u==="horizontal"?"vertical":"horizontal","aria-orientation":u==="horizontal"?"vertical":"horizontal"})}),d={type:"single",disabled:!1},f=u=>{const i={...d,...u},k=Te(i),{type:m,disabled:b}=k,h=i.defaultValue?i.defaultValue:i.type==="single"?void 0:[],x=i.value??pe(h),v=gt(x,i==null?void 0:i.onValueChange),{name:T}=He("toolbar-group"),I=H(T(),{stores:a,returned:y=>({role:"group","data-orientation":y})}),Oe=H(T("item"),{stores:[b,m,v,a],returned:([y,P,N,be])=>g=>{const C=typeof g=="string"?g:g.value,F=typeof g=="string"?!1:!!g.disabled,q=y||F,K=Array.isArray(N)?N.includes(C):N===C,ge=P==="single",We=P==="multiple";return{disabled:xe(q),pressed:K,"data-orientation":be,"data-disabled":xe(q),"data-value":C,"data-state":K?"on":"off","aria-checked":ge?K:void 0,"aria-pressed":We?K:void 0,type:"button",role:ge?"radio":void 0,"data-melt-toolbar-item":""}},action:y=>{ae(y);function P(){const g=y.dataset.value,C=y.dataset.disabled==="true";return{value:g,disabled:C}}function N(){const{value:g,disabled:C}=P();g===void 0||C||v.update(F=>Array.isArray(F)?F.includes(g)?F.filter(q=>q!==g):(F.push(g),F):F===g?void 0:g)}return{destroy:mt(B(y,"click",()=>{N()}),B(y,"keydown",g=>{if(g.key===L.ENTER||g.key===L.SPACE){g.preventDefault(),N();return}p(g)}))}}}),Ve=Ce(v,y=>P=>Array.isArray(y)?y.includes(P):y===P);return{elements:{group:I,item:Oe},states:{value:v},helpers:{isPressed:Ve},options:k}};function p(u){const i=a.get(),k=o.get(),m={horizontal:L.ARROW_RIGHT,vertical:L.ARROW_DOWN}[i??"horizontal"],b={horizontal:L.ARROW_LEFT,vertical:L.ARROW_UP}[i??"horizontal"],h=u.currentTarget;if(!G(h))return;const x=h.closest("[data-melt-toolbar]");if(!G(x))return;const v=Ne(x),T=v.indexOf(h);if(u.key===m){u.preventDefault();const I=T+1;I>=v.length&&k?V(v[0]):V(v[I])}else if(u.key===b){u.preventDefault();const I=T-1;I<0&&k?V(v[v.length-1]):V(v[I])}else u.key===L.HOME?(u.preventDefault(),V(v[0])):u.key===L.END&&(u.preventDefault(),V(v[v.length-1]))}return{elements:{root:r,button:s,separator:l,link:c},builders:{createToolbarGroup:f},options:n}};function ae(t){const e=t.closest("[data-melt-toolbar]");if(!G(e))return;Ne(e)[0]===t?t.tabIndex=0:t.tabIndex=-1}function Ne(t){return Array.from(t.querySelectorAll(`${oe("item")}, ${oe("button")}, ${oe("link")}`)).filter(e=>G(e))}function Le(t,e,n){const o=t.slice();return o[10]=e[n].href,o[11]=e[n].text,o[12]=e[n].disabled,o[14]=n,o}function kt(t){return{c:R,l:R,m:R,p:R,d:R}}function yt(t){let e,n=t[11]+"",o,a,r,s,c,l,d,f=[t[3],{href:r=t[10]},{"data-count":s=t[14]},{"aria-label":c="Go to "+t[11].toLowerCase()+" section."},{class:"floating-nav-link block font-zenless-title uppercase text-xl text-slate-900 dark:text-white tracking-wider leading-none outline-none hover:underline focus:underline px-2 py-1 mx-1"}],p={};for(let u=0;u<f.length;u+=1)p=U(p,f[u]);return{c(){e=E("a"),o=fe(n),a=Q(),this.h()},l(u){e=A(u,"A",{href:!0,"data-count":!0,"aria-label":!0,class:!0});var i=M(e);o=he(i,n),a=$(i),i.forEach(_),this.h()},h(){W(e,p),ee(e,"svelte-1rtmkeb",!0)},m(u,i){z(u,e,i),w(e,o),w(e,a),l||(d=Me(t[3].action(e)),l=!0)},p(u,i){i&1&&n!==(n=u[11]+"")&&Ie(o,n,p.contenteditable),W(e,p=me(f,[i&8&&u[3],i&1&&r!==(r=u[10])&&{href:r},{"data-count":s},i&1&&c!==(c="Go to "+u[11].toLowerCase()+" section.")&&{"aria-label":c},{class:"floating-nav-link block font-zenless-title uppercase text-xl text-slate-900 dark:text-white tracking-wider leading-none outline-none hover:underline focus:underline px-2 py-1 mx-1"}])),ee(e,"svelte-1rtmkeb",!0)},d(u){u&&_(e),l=!1,d()}}}function Se(t){let e;function n(r,s){return r[12]?kt:yt}let o=n(t),a=o(t);return{c(){a.c(),e=Z()},l(r){a.l(r),e=Z()},m(r,s){a.m(r,s),z(r,e,s)},p(r,s){o===(o=n(r))&&a?a.p(r,s):(a.d(1),a=o(r),a&&(a.c(),a.m(e.parentNode,e)))},d(r){r&&_(e),a.d(r)}}}function xt(t){let e,n,o,a=te(t[0]),r=[];for(let l=0;l<a.length;l+=1)r[l]=Se(Le(t,a,l));let s=[t[2],{class:"floating-nav fixed left-[50%] -translate-x-1/2 flex bottom-4"}],c={};for(let l=0;l<s.length;l+=1)c=U(c,s[l]);return{c(){e=E("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=A(l,"DIV",{class:!0});var d=M(e);for(let f=0;f<r.length;f+=1)r[f].l(d);d.forEach(_),this.h()},h(){W(e,c),ee(e,"svelte-1rtmkeb",!0)},m(l,d){z(l,e,d);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(e,null);t[6](e),n||(o=Me(t[2].action(e)),n=!0)},p(l,[d]){if(d&9){a=te(l[0]);let f;for(f=0;f<a.length;f+=1){const p=Le(l,a,f);r[f]?r[f].p(p,d):(r[f]=Se(p),r[f].c(),r[f].m(e,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=a.length}W(e,c=me(s,[d&4&&l[2],{class:"floating-nav fixed left-[50%] -translate-x-1/2 flex bottom-4"}])),ee(e,"svelte-1rtmkeb",!0)},i:R,o:R,d(l){l&&_(e),Pe(r,l),t[6](null),n=!1,o()}}}function Et(t,e,n){let o,a,{navlinks:r}=e,s;const{elements:{root:c,button:l,link:d,separator:f},builders:{createToolbarGroup:p}}=wt();se(t,c,i=>n(2,o=i)),se(t,d,i=>n(3,a=i)),Fe(async()=>{});function u(i){Ue[i?"unshift":"push"](()=>{s=i,n(1,s)})}return t.$$set=i=>{"navlinks"in i&&n(0,r=i.navlinks)},[r,s,o,a,c,d,u]}class At extends ue{constructor(e){super(),de(this,e,Et,xt,ce,{navlinks:0})}}function De(t,e,n){const o=t.slice();return o[3]=e[n].text,o[4]=e[n].href,o[5]=e[n].disabled,o}function Re(t){let e,n;return e=new dt({props:{href:""+(_e+t[4]),text:t[3],disabled:t[5],"aria-label":"Go to "+t[3].toLowerCase()+" section."}}),{c(){Ye(e.$$.fragment)},l(o){Je(e.$$.fragment,o)},m(o,a){Ze(e,o,a),n=!0},p(o,a){const r={};a&1&&(r.href=""+(_e+o[4])),a&1&&(r.text=o[3]),a&1&&(r.disabled=o[5]),a&1&&(r["aria-label"]="Go to "+o[3].toLowerCase()+" section."),e.$set(r)},i(o){n||(J(e.$$.fragment,o),n=!0)},o(o){ie(e.$$.fragment,o),n=!1},d(o){Qe(e,o)}}}function Tt(t){let e,n,o='<div class="stellar-colored svelte-e3t4yc"></div>',a,r,s,c,l,d,f='<div class="w-10 h-10"><img src="/img/ui/svelte-logo.svg" alt="" width="100" height="100" class="object-contain aspect-square"/></div> <span class="font-zenless-copy">Proudly made with <a href="https://kit.svelte.dev/" aria-label="Proudly made with SvelteKit" target="_blank" class="text-[#ff3e00] outline-none hover:underline focus:underline">SvelteKit</a></span>',p,u=te((D==null?void 0:D[new URL(t[0].url).pathname])??[]),i=[];for(let m=0;m<u.length;m+=1)i[m]=Re(De(t,u,m));const k=m=>ie(i[m],1,1,()=>{i[m]=null});return{c(){e=E("div"),n=E("div"),n.innerHTML=o,a=Q(),r=E("div"),s=E("nav"),c=E("div");for(let m=0;m<i.length;m+=1)i[m].c();l=Q(),d=E("div"),d.innerHTML=f,this.h()},l(m){e=A(m,"DIV",{class:!0});var b=M(e);n=A(b,"DIV",{class:!0,"data-svelte-h":!0}),le(n)!=="svelte-1ptflhw"&&(n.innerHTML=o),a=$(b),r=A(b,"DIV",{class:!0});var h=M(r);s=A(h,"NAV",{class:!0});var x=M(s);c=A(x,"DIV",{class:!0});var v=M(c);for(let T=0;T<i.length;T+=1)i[T].l(v);v.forEach(_),l=$(x),d=A(x,"DIV",{class:!0,"data-svelte-h":!0}),le(d)!=="svelte-1t21kj"&&(d.innerHTML=f),x.forEach(_),h.forEach(_),b.forEach(_),this.h()},h(){S(n,"class","stellar-bg h-full relative"),S(c,"class","menu-links-container flex flex-col gap-2 px-4 py-6 pt-36 md:pt-0 md:pl-[5rem]"),S(d,"class","flex items-center gap-2 px-8 py-6 md:pl-[6.5rem]"),S(s,"class","menu w-full h-full md:h-[min-content] md:p-20 svelte-e3t4yc"),S(r,"class","menu-container absolute inset-0 z-30 flex items-center svelte-e3t4yc"),S(e,"class","stellar-container fixed inset-0 md:relative w-screen h-[100dvh] overflow-hidden shrink-0 z-20 svelte-e3t4yc")},m(m,b){z(m,e,b),w(e,n),w(e,a),w(e,r),w(r,s),w(s,c);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(c,null);w(s,l),w(s,d),p=!0},p(m,[b]){if(b&1){u=te((D==null?void 0:D[new URL(m[0].url).pathname])??[]);let h;for(h=0;h<u.length;h+=1){const x=De(m,u,h);i[h]?(i[h].p(x,b),J(i[h],1)):(i[h]=Re(x),i[h].c(),J(i[h],1),i[h].m(c,null))}for(Xe(),h=u.length;h<i.length;h+=1)k(h);Be()}},i(m){if(!p){for(let b=0;b<u.length;b+=1)J(i[b]);p=!0}},o(m){i=i.filter(Boolean);for(let b=0;b<i.length;b+=1)ie(i[b]);p=!1},d(m){m&&_(e),Pe(i,m)}}}function Lt(t,e,n){let o;se(t,$e,s=>n(0,o=s));let a;tt(s=>{var l,d;const c=document.querySelector("main");if(ne({hash:(d=(l=s.to)==null?void 0:l.url)==null?void 0:d.hash,scrollElement:c}),!!document.startViewTransition)return new Promise(f=>{document.startViewTransition(async()=>{f(),await s.complete})})});const r=s=>{const c=document.querySelector("main"),l=c==null?void 0:c.lastElementChild;if(c instanceof HTMLElement&&l instanceof HTMLElement&&window.matchMedia("(min-width: 768px)").matches){s.preventDefault();const f=ot(s);c.dataset.scrolledAmount=(Number(c.dataset.scrolledAmount)+f.pixelY).toString();const p=Number(c.dataset.scrolledAmount),u=c.offsetWidth/2;p<0&&(c.dataset.scrolledAmount="0"),p>=u&&(c.dataset.scrolledAmount=u.toString());const i=l.offsetLeft/2/u*-100,k=Math.min(Math.max(p/u*-100,i),0);c.dataset.percentage=k.toString(),c.animate({transformOrigin:"center",left:`${Math.abs(k)}%`,transform:`translate(${k}%, 0% )`,easing:"cubic-bezier(0.5, 1, 0.89, 1)"},{duration:300,fill:"forwards",easing:"cubic-bezier(0.5, 1, 0.89, 1)"})}};return Fe(()=>{o.route.id==="/(horizontal)"&&(a=new At({target:document.body,props:{navlinks:(D==null?void 0:D[new URL(o.url).pathname])??[]}})),rt({target:".menu-link"});const s=document.querySelector("main");s instanceof HTMLElement&&window.addEventListener("wheel",r,{passive:!1}),[".menu-link",".floating-nav-link"].forEach(p=>{document.querySelectorAll(p).forEach(i=>{i.onclick=at({scrollElement:s})})}),[".project-internal-link",".project-external-link"].forEach(p=>{document.querySelectorAll(p).forEach(i=>{i.onclick=k=>{k.stopPropagation()}})});let d=window.location.hash;[].includes(d)||ne({hash:d,scrollElement:s}),window.onhashchange=st({scrollElement:s})}),qe(()=>{window.removeEventListener("wheel",r),a==null||a.$destroy()}),[o]}class Ct extends ue{constructor(e){super(),de(this,e,Lt,Tt,ce,{})}}export{Ct as N,te as e};
