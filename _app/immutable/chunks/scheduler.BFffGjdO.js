function y(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function F(){return Object.create(null)}function E(t){t.forEach(j)}function v(t){return typeof t=="function"}function M(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t){let n;return m(t,e=>n=e)(),n}function B(t,n,e){t.$$.on_destroy.push(m(n,e))}function G(t,n,e,o){if(t){const r=x(t,n,e,o);return t[0](r)}}function x(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function H(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const f=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)f[u]=n.dirty[u]|r[u];return f}return n.dirty|r}return n.dirty}function I(t,n,e,o,r,f){if(r){const _=x(n,e,o,f);t.p(_,r)}}function P(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function U(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function J(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function K(t){return t&&v(t.destroy)?t.destroy:y}let l;function d(t){l=t}function a(){if(!l)throw new Error("Function called outside component initialization");return l}function L(t){a().$$.on_mount.push(t)}function N(t){a().$$.after_update.push(t)}function Q(t){a().$$.on_destroy.push(t)}function R(t,n){return a().$$.context.set(t,n),n}function T(t){return a().$$.context.get(t)}const i=[],b=[];let c=[];const p=[],k=Promise.resolve();let g=!1;function C(){g||(g=!0,k.then(q))}function V(){return C(),k}function O(t){c.push(t)}function W(t){p.push(t)}const h=new Set;let s=0;function q(){if(s!==0)return;const t=l;do{try{for(;s<i.length;){const n=i[s];s++,d(n),z(n.$$)}}catch(n){throw i.length=0,s=0,n}for(d(null),i.length=0,s=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(i.length);for(;p.length;)p.pop()();g=!1,h.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function X(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{j as A,i as B,C,D,a as E,W as F,R as G,A as H,K as I,m as a,N as b,B as c,b as d,w as e,J as f,T as g,Q as h,v as i,U as j,G as k,P as l,H as m,y as n,L as o,F as p,q,E as r,M as s,V as t,I as u,S as v,O as w,X as x,l as y,d as z};
