import{s as d,n as v}from"../chunks/scheduler.5nauvt-X.js";import{S as w,i as C,e as D,u as l,c as b,d as x,v as i,f as p,k as S,l as h,w as c,t as $,a as f,x as m,s as k,g as y}from"../chunks/index.Bg-TUWyg.js";import{O as L}from"../chunks/OrbitControls.44Y22uLp.js";import{C as O,T as u}from"../chunks/fragment.CMKErrS1.js";function P(o){let t,a;return t=new L({props:{enableDamping:!0}}),{c(){l(t.$$.fragment)},l(r){i(t.$$.fragment,r)},m(r,n){c(t,r,n),a=!0},p:v,i(r){a||($(t.$$.fragment,r),a=!0)},o(r){f(t.$$.fragment,r),a=!1},d(r){m(t,r)}}}function q(o){let t,a;return t=new u.DirectionalLightHelper({props:{args:[o[1],5,"yellow"]}}),{c(){l(t.$$.fragment)},l(r){i(t.$$.fragment,r)},m(r,n){c(t,r,n),a=!0},p(r,n){const e={};n&2&&(e.args=[r[1],5,"yellow"]),t.$set(e)},i(r){a||($(t.$$.fragment,r),a=!0)},o(r){f(t.$$.fragment,r),a=!1},d(r){m(t,r)}}}function E(o){let t,a,r,n;return t=new u.PerspectiveCamera({props:{makeDefault:!0,position:[20,20,20],fov:50,$$slots:{default:[P,({ref:e})=>({1:e}),({ref:e})=>e?2:0]},$$scope:{ctx:o}}}),r=new u.DirectionalLight({props:{color:"white",intensity:10,position:[10,10,-10],"shadow.camera.top":20,"shadow.camera.right":20,castShadow:!0,$$slots:{default:[q,({ref:e})=>({1:e}),({ref:e})=>e?2:0]},$$scope:{ctx:o}}}),{c(){l(t.$$.fragment),a=k(),l(r.$$.fragment)},l(e){i(t.$$.fragment,e),a=y(e),i(r.$$.fragment,e)},m(e,s){c(t,e,s),h(e,a,s),c(r,e,s),n=!0},p(e,s){const _={};s&4&&(_.$$scope={dirty:s,ctx:e}),t.$set(_);const g={};s&6&&(g.$$scope={dirty:s,ctx:e}),r.$set(g)},i(e){n||($(t.$$.fragment,e),$(r.$$.fragment,e),n=!0)},o(e){f(t.$$.fragment,e),f(r.$$.fragment,e),n=!1},d(e){e&&p(a),m(t,e),m(r,e)}}}function H(o){let t,a,r;return a=new O({props:{$$slots:{default:[E]},$$scope:{ctx:o}}}),{c(){t=D("div"),l(a.$$.fragment),this.h()},l(n){t=b(n,"DIV",{class:!0});var e=x(t);i(a.$$.fragment,e),e.forEach(p),this.h()},h(){S(t,"class","scene absolute w-full h-full inset-0 svelte-1g7yaxd")},m(n,e){h(n,t,e),c(a,t,null),r=!0},p(n,[e]){const s={};e&4&&(s.$$scope={dirty:e,ctx:n}),a.$set(s)},i(n){r||($(a.$$.fragment,n),r=!0)},o(n){f(a.$$.fragment,n),r=!1},d(n){n&&p(t),m(a)}}}function I(o){return[]}class A extends w{constructor(t){super(),C(this,t,I,H,d,{})}}export{A as component};