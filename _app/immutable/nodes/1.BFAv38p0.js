import{s as N,n as o,b as O}from"../chunks/scheduler.5nauvt-X.js";import{S as A,i as B,e as d,s as I,b as D,c as _,d as g,f,g as S,h as V,j as F,k as v,l as q,m as c,n as L,H as G,o as M,p as J}from"../chunks/index.Bg-TUWyg.js";import{h as P,u as K}from"../chunks/await_block.BR6m7ppK.js";import{p as Q}from"../chunks/stores.CPFxxeJL.js";function R(s){return{c:o,l:o,m:o,p:o,d:o}}function U(s){let t,n=s[2]+"",r;return{c(){t=new G(!1),r=M(),this.h()},l(e){t=J(e,!1),r=M(),this.h()},h(){t.a=r},m(e,a){t.m(n,e,a),q(e,r,a)},p(e,a){a&1&&n!==(n=e[2]+"")&&t.p(n)},d(e){e&&(f(r),t.d())}}}function W(s){return{c:o,l:o,m:o,p:o,d:o}}function X(s){var j;let t,n,r,e,a,k=s[1].status+"",x,H,b=((j=s[1].error)==null?void 0:j.message)+"",y,T,m,$='The site renovation is still in progress and some links are unfortunately broken at the moment. <a href="/" class="text-tulip-tree-400 outline-none hover:underline focus:underline">Take me home</a>',C,h,w,l={ctx:s,current:null,token:null,hasCatch:!1,pending:W,then:U,catch:R,value:2};return P(w=s[0],l),{c(){t=d("section"),n=d("div"),r=I(),e=d("div"),a=d("h1"),x=D(k),H=D(": "),y=D(b),T=I(),m=d("p"),m.innerHTML=$,C=I(),h=d("div"),l.block.c(),this.h()},l(p){t=_(p,"SECTION",{class:!0});var i=g(t);n=_(i,"DIV",{class:!0}),g(n).forEach(f),r=S(i),e=_(i,"DIV",{class:!0});var u=g(e);a=_(u,"H1",{class:!0});var E=g(a);x=V(E,k),H=V(E,": "),y=V(E,b),E.forEach(f),T=S(u),m=_(u,"P",{class:!0,"data-svelte-h":!0}),F(m)!=="svelte-1cdus3l"&&(m.innerHTML=$),C=S(u),h=_(u,"DIV",{class:!0});var z=g(h);l.block.l(z),z.forEach(f),u.forEach(f),i.forEach(f),this.h()},h(){v(n,"class","md:w-[7rem]"),v(a,"class","font-zenless-title text-4xl md:text-5xl py-2"),v(m,"class","font-zenless-copy text-2xl text-pretty"),v(h,"class","w-full flex items-center justify-center text-tulip-tree-300"),v(e,"class","section-content px-6 space-y-4"),v(t,"class","w-screen h-screen shrink-0 flex px-4 py-6 pt-[9rem] md:p-20")},m(p,i){q(p,t,i),c(t,n),c(t,r),c(t,e),c(e,a),c(a,x),c(a,H),c(a,y),c(e,T),c(e,m),c(e,C),c(e,h),l.block.m(h,l.anchor=null),l.mount=()=>h,l.anchor=null},p(p,[i]){var u;s=p,i&2&&k!==(k=s[1].status+"")&&L(x,k),i&2&&b!==(b=((u=s[1].error)==null?void 0:u.message)+"")&&L(y,b),l.ctx=s,i&1&&w!==(w=s[0])&&P(w,l)||K(l,s,i)},i:o,o,d(p){p&&f(t),l.block.d(),l.token=null,l=null}}}function Y(s,t,n){let r;O(s,Q,a=>n(1,r=a));let e=new Promise(()=>{});return e=fetch("/img/ui/suisei-not-found.svg").then(async a=>await a.text()),[e,r]}class ae extends A{constructor(t){super(),B(this,t,Y,X,N,{})}}export{ae as component};