import{s as E,n as w,q as h,w as g,c as z,u as A,g as C,a as H,o as R}from"./scheduler.Bs-Ydizp.js";import{S,i as q,e as _,c as p,d as x,j as T,f as m,k as d,l as k,m as b,x as I,s as j,y as D,g as F,z as M,t as v,a as y,A as O}from"./index.cVSpFuol.js";import{c as V}from"./entry.CA5sL7lm.js";const W=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function B(r){let e,a,o="lnfel's Room",i;return{c(){e=_("a"),a=_("h1"),a.textContent=o,this.h()},l(n){e=p(n,"A",{href:!0,draggable:!0,"aria-label":!0,class:!0});var l=x(e);a=p(l,"H1",{class:!0,"data-svelte-h":!0}),T(a)!=="svelte-15lcnew"&&(a.textContent=o),l.forEach(m),this.h()},h(){d(a,"class","logo-text uppercase font-zenless-logo tracking-wider whitespace-nowrap italic px-4 transition-all duration-300 svelte-x8dn08"),d(e,"href",V+"/"),d(e,"draggable","false"),d(e,"aria-label","Infel's Room logo"),d(e,"class",i="logo group md:-rotate-90 text-indigo-500 dark:text-indigo-200 outline-none "+r[0].class+" svelte-x8dn08")},m(n,l){k(n,e,l),b(e,a)},p(n,[l]){l&1&&i!==(i="logo group md:-rotate-90 text-indigo-500 dark:text-indigo-200 outline-none "+n[0].class+" svelte-x8dn08")&&d(e,"class",i)},i:w,o:w,d(n){n&&m(e)}}}function G(r,e,a){return r.$$set=o=>{a(0,e=h(h({},e),g(o)))},e=g(e),[e]}class J extends S{constructor(e){super(),q(this,e,G,B,E,{})}}function K(r){let e,a,o,i,n,l;o=new J({props:{class:"md:absolute md:translate-y-[-50%] md:translate-x-[-50%] md:top-[50%] md:left-[50%]"}});const f=r[2].default,s=z(f,r,r[1],null);return{c(){e=_("header"),a=_("div"),I(o.$$.fragment),i=j(),s&&s.c(),this.h()},l(t){e=p(t,"HEADER",{class:!0});var c=x(e);a=p(c,"DIV",{class:!0});var u=x(a);D(o.$$.fragment,u),i=F(u),s&&s.l(u),u.forEach(m),c.forEach(m),this.h()},h(){d(a,"class","flex items-center justify-between"),d(e,"class",n="fixed top-0 left-0 w-full md:w-[7rem] md:h-full px-4 py-2 lg:px-[3rem] z-30 transition-all duration-300 no-print "+r[0].class)},m(t,c){k(t,e,c),b(e,a),M(o,a,null),b(a,i),s&&s.m(a,null),l=!0},p(t,[c]){s&&s.p&&(!l||c&2)&&A(s,f,t,t[1],l?H(f,t[1],c,null):C(t[1]),null),(!l||c&1&&n!==(n="fixed top-0 left-0 w-full md:w-[7rem] md:h-full px-4 py-2 lg:px-[3rem] z-30 transition-all duration-300 no-print "+t[0].class))&&d(e,"class",n)},i(t){l||(v(o.$$.fragment,t),v(s,t),l=!0)},o(t){y(o.$$.fragment,t),y(s,t),l=!1},d(t){t&&m(e),O(o),s&&s.d(t)}}}function L(r,e,a){let{$$slots:o={},$$scope:i}=e;return R(()=>{const n=document.querySelector("nav"),l=new IntersectionObserver(f=>{const s=document.querySelector("header"),t=document.querySelectorAll(".floating-nav-link"),c=window.matchMedia("(min-width: 768px)");s&&window.location.pathname==="/"&&(s.querySelector(".logo-text"),f[0].intersectionRatio<=.1?(s.style.backdropFilter="saturate(50%) blur(4px)",s.style.cssText="--header-bg: rgb(15 23 42 / 0.5)",c.matches&&(t==null||t.forEach(u=>{u.classList.add("enter")}))):(s.style.backdropFilter="none",s.style.cssText="--header-bg: transparent",c.matches&&(t==null||t.forEach(u=>{u.classList.remove("enter")}))))},{threshold:.1});n&&l.observe(n)}),r.$$set=n=>{a(0,e=h(h({},e),g(n))),"$$scope"in n&&a(1,i=n.$$scope)},e=g(e),[e,i,o]}class X extends S{constructor(e){super(),q(this,e,L,K,E,{})}}export{X as H,W as g};
