import{d as y,w as p,r as f}from"./index.Cjnls_wo.js";import{J as h}from"./scheduler.Bs-Ydizp.js";function w(e){return Object.keys(e).reduce((t,n)=>e[n]===void 0?t:t+`${n}:${e[n]};`,"")}function C(e){return e?!0:void 0}w({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function S(e){if(e!==null)return e}function A(e){function t(n){return n(e),()=>{}}return{subscribe:t}}const l=e=>new Proxy(e,{get(t,n,r){return Reflect.get(t,n,r)},ownKeys(t){return Reflect.ownKeys(t).filter(n=>n!=="action")}}),m=e=>typeof e=="function";T("empty");function T(e,t){const{stores:n,action:r,returned:o}=t??{},s=(()=>{if(n&&o)return y(n,a=>{const c=o(a);if(m(c)){const i=(...E)=>l({...c(...E),[`data-melt-${e}`]:"",action:r??d});return i.action=r??d,i}return l({...c,[`data-melt-${e}`]:"",action:r??d})});{const a=o,c=a==null?void 0:a();if(m(c)){const i=(...E)=>l({...c(...E),[`data-melt-${e}`]:"",action:r??d});return i.action=r??d,A(i)}return A(l({...c,[`data-melt-${e}`]:"",action:r??d}))}})(),u=r??(()=>{});return u.subscribe=s.subscribe,u}function O(e){const t=s=>s?`${e}-${s}`:e,n=s=>`data-melt-${e}${s?`-${s}`:""}`,r=s=>`[data-melt-${e}${s?`-${s}`:""}]`;return{name:t,attribute:n,selector:r,getEl:s=>document.querySelector(r(s))}}const k=typeof document<"u";function M(e){return e instanceof Document}function D(e){return e instanceof Element}function v(e){return e instanceof HTMLElement}function W(e){return e.pointerType==="touch"}function _(...e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}function d(){}function F(e,t,n,r){const o=Array.isArray(t)?t:[t];return o.forEach(s=>e.addEventListener(s,n,r)),()=>{o.forEach(s=>e.removeEventListener(s,n,r))}}function H(e,t,n,r){const o=Array.isArray(t)?t:[t];if(typeof n=="function"){const s=P(u=>n(u));return o.forEach(u=>e.addEventListener(u,s,r)),()=>{o.forEach(u=>e.removeEventListener(u,s,r))}}return()=>void 0}function L(e){const t=e.currentTarget;if(!v(t))return null;const n=new CustomEvent(`m-${e.type}`,{detail:{originalEvent:e},cancelable:!0});return t.dispatchEvent(n),n}function P(e){return t=>{const n=L(t);if(!(n!=null&&n.defaultPrevented))return e(t)}}function b(e){return{...e,get:()=>h(e)}}b.writable=function(e){const t=p(e);let n=e;return{subscribe:t.subscribe,set(r){t.set(r),n=r},update(r){const o=r(n);t.set(o),n=o},get(){return n}}};b.derived=function(e,t){const n=new Map,r=()=>{const s=Array.isArray(e)?e.map(u=>u.get()):e.get();return t(s)};return{get:r,subscribe:s=>{const u=[];return(Array.isArray(e)?e:[e]).forEach(c=>{u.push(c.subscribe(()=>{s(r())}))}),s(r()),n.set(s,u),()=>{const c=n.get(s);if(c)for(const i of c)i();n.delete(s)}}}};const K=(e,t)=>{const n=b(e),r=(s,u)=>{n.update(a=>{const c=s(a);let i=c;return t&&(i=t({curr:a,next:c})),u==null||u(i),i})};return{...n,update:r,set:s=>{r(()=>s)}}};function N(e){return new Promise(t=>setTimeout(t,e))}const R={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};function B(e){const t={};return Object.keys(e).forEach(n=>{const r=n,o=e[r];t[r]=b(p(o))}),t}f(void 0,e=>{function t(r){e(r),e(void 0)}return F(document,"pointerup",t,{passive:!1,capture:!0})});f(void 0,e=>{function t(r){r&&r.key===R.ESCAPE&&e(r),e(void 0)}return F(document,"keydown",t,{passive:!1})});f(!1),f(!1),f(void 0);export{v as a,H as b,O as c,C as d,_ as e,F as f,w as g,W as h,k as i,D as j,R as k,M as l,T as m,d as n,K as o,S as p,N as s,B as t};