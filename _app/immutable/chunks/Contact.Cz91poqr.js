import{s as V,c as D,u as F,g as H,a as O}from"./scheduler.Bs-Ydizp.js";import{S as U,i as G,e as w,s as q,b as J,c as x,d as v,g as S,h as K,f as _,j as P,k as o,l as A,m,q as Q,n as R,t as W,a as X,r as B,u as N}from"./index.cVSpFuol.js";import{c as Y}from"./index.wotBBkUg.js";const Z=n=>({}),M=n=>({});function $(n){let e,t,l;return{c(){e=B("svg"),t=B("rect"),l=B("path"),this.h()},l(s){e=N(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var c=v(e);t=N(c,"rect",{width:!0,height:!0,x:!0,y:!0,rx:!0,ry:!0}),v(t).forEach(_),l=N(c,"path",{d:!0}),v(l).forEach(_),c.forEach(_),this.h()},h(){o(t,"width","14"),o(t,"height","14"),o(t,"x","8"),o(t,"y","8"),o(t,"rx","2"),o(t,"ry","2"),o(l,"d","M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","24"),o(e,"height","24"),o(e,"viewBox","0 0 24 24"),o(e,"fill","none"),o(e,"stroke","currentColor"),o(e,"stroke-width","2"),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"class","lucide lucide-copy w-4 h-4 md:w-6 md:h-6 pointer-events-none")},m(s,c){A(s,e,c),m(e,t),m(e,l)},d(s){s&&_(e)}}}function ee(n){let e,t="Copied!";return{c(){e=w("span"),e.textContent=t,this.h()},l(l){e=x(l,"SPAN",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1qvaqub"&&(e.textContent=t),this.h()},h(){o(e,"class","text-xs")},m(l,s){A(l,e,s)},d(l){l&&_(e)}}}function te(n){let e,t,l,s,c,y,i,p,d,k="Copy",a,u,g,z;const T=n[6].icon,f=D(T,n,n[5],M);function I(r,h){return r[3]?ee:$}let C=I(n),b=C(n);return{c(){e=w("li"),t=w("div"),f&&f.c(),l=q(),s=w("a"),c=J(n[1]),y=q(),i=w("button"),b.c(),p=q(),d=w("span"),d.textContent=k,this.h()},l(r){e=x(r,"LI",{class:!0});var h=v(e);t=x(h,"DIV",{class:!0});var E=v(t);f&&f.l(E),l=S(E),s=x(E,"A",{href:!0,class:!0});var L=v(s);c=K(L,n[1]),L.forEach(_),E.forEach(_),y=S(h),i=x(h,"BUTTON",{type:!0,class:!0});var j=v(i);b.l(j),p=S(j),d=x(j,"SPAN",{class:!0,"data-svelte-h":!0}),P(d)!=="svelte-1cbrti2"&&(d.textContent=k),j.forEach(_),h.forEach(_),this.h()},h(){o(s,"href",n[2]),o(s,"class","contact-link text-tulip-tree-400 outline-none hover:underline focus:underline"),o(t,"class","flex items-center gap-2 dark:bg-slate-900 pr-2 md:pr-0"),o(d,"class","sr-only"),o(i,"type","button"),o(i,"class","contact-copy flex items-center justify-center dark:bg-slate-900 md:opacity-0 pointer-events-none px-2 md:px-0 outline-none hover:text-malibu-500 focus:text-malibu-500 group-hover:opacity-100 group-hover:pointer-events-auto"),o(e,"class",a="contact "+n[0]+" relative md:w-[min-content] group flex items-center justify-between md:justify-start gap-2 before:content-[''] before:w-full before:absolute before:top-[50%] before:translate-y-[-50%] before:z-[-1] before:border-t-2 before:border-white before:border-dotted md:before:hidden")},m(r,h){A(r,e,h),m(e,t),f&&f.m(t,null),m(t,l),m(t,s),m(s,c),m(e,y),m(e,i),b.m(i,null),m(i,p),m(i,d),u=!0,g||(z=Q(i,"click",n[4]),g=!0)},p(r,[h]){f&&f.p&&(!u||h&32)&&F(f,T,r,r[5],u?O(T,r[5],h,Z):H(r[5]),M),(!u||h&2)&&R(c,r[1]),(!u||h&4)&&o(s,"href",r[2]),C!==(C=I(r))&&(b.d(1),b=C(r),b&&(b.c(),b.m(i,p))),(!u||h&1&&a!==(a="contact "+r[0]+" relative md:w-[min-content] group flex items-center justify-between md:justify-start gap-2 before:content-[''] before:w-full before:absolute before:top-[50%] before:translate-y-[-50%] before:z-[-1] before:border-t-2 before:border-white before:border-dotted md:before:hidden"))&&o(e,"class",a)},i(r){u||(W(f,r),u=!0)},o(r){X(f,r),u=!1},d(r){r&&_(e),f&&f.d(r),b.d(),g=!1,z()}}}function oe(n,e,t){let{$$slots:l={},$$scope:s}=e,{name:c="contact"}=e,{text:y="Contact"}=e,{href:i="#"}=e,p=!1,d;function k(a){d&&clearTimeout(d);const u=a.target;if(console.log(u),u instanceof HTMLButtonElement){const g=u.parentNode;console.log(g),g&&(Y(g.querySelector("a")),t(3,p=!0),d=setTimeout(()=>{t(3,p=!1)},1e3))}}return n.$$set=a=>{"name"in a&&t(0,c=a.name),"text"in a&&t(1,y=a.text),"href"in a&&t(2,i=a.href),"$$scope"in a&&t(5,s=a.$$scope)},[c,y,i,p,k,s,l]}class le extends U{constructor(e){super(),G(this,e,oe,te,V,{name:0,text:1,href:2})}}export{le as C};