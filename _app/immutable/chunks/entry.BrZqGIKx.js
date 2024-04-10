import{n as G,H as me,r as _e,s as ye,x as we,t as yt,o as ve}from"./scheduler.Bv9kgQnj.js";new URL("sveltekit-internal://");function be(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function Ee(t){return t.split("%25").map(decodeURI).join("%25")}function ke(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function pt({href:t}){return t.split("#")[0]}const Se=["href","pathname","search","toString","toJSON"];function Ae(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of Se)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const Re="/__data.json",Ie=".html__data.json";function Le(t){return t.endsWith(".html")?t.replace(/\.html$/,Ie):t.replace(/\/$/,"")+Re}function xe(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Pe(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Ht=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&H.delete(kt(t)),Ht(t,n));const H=new Map;function Ue(t,n){const e=kt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&H.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Pe(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Ne(t,n,e){if(H.size>0){const r=kt(t,e),a=H.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);H.delete(r)}}return window.fetch(n,e)}function kt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${xe(...a)}"]`}return r}const Te=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Oe(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${$e(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return gt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return gt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Te.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return gt(c)}).join("")}).join("")}/?$`),params:n}}function je(t){return!/^\([^)]+\)$/.test(t)}function $e(t){return t.slice(1).split("/").filter(je)}function De(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function gt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ce({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=Oe(s),d={id:s,exec:m=>{const f=h.exec(m);if(f)return De(f,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Bt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function jt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const $=[];function Ve(t,n){return{subscribe:at(t,n).subscribe}}function at(t,n=G){let e;const r=new Set;function a(s){if(ye(t,s)&&(t=s,e)){const c=!$.length;for(const l of r)l[1](),$.push(l,t);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function o(s){a(s(t))}function i(s,c=G){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||G),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}function ln(t,n,e){const r=!Array.isArray(t),a=r?[t]:t;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=n.length<2;return Ve(e,(i,s)=>{let c=!1;const l=[];let u=0,h=G;const g=()=>{if(u)return;h();const m=n(r?l[0]:l,i,s);o?i(m):h=we(m)?m:G},d=a.map((m,f)=>me(m,_=>{l[f]=_,u&=~(1<<f),c&&g()},()=>{u|=1<<f}));return c=!0,g(),function(){_e(d),h(),c=!1}})}var Mt;const I=((Mt=globalThis.__sveltekit_67xpip)==null?void 0:Mt.base)??"";var Gt;const Fe=((Gt=globalThis.__sveltekit_67xpip)==null?void 0:Gt.assets)??I,qe="1712727272242",Kt="sveltekit:snapshot",zt="sveltekit:scroll",St="sveltekit:states",Jt="sveltekit:pageurl",O="sveltekit:history",C="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function At(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function Rt(){return{x:pageXOffset,y:pageYOffset}}function D(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const $t={...X,"":X.hover};function Yt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Wt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Yt(t)}}function wt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||rt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===Y&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function Z(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=D(s,"preload-code")),a===null&&(a=D(s,"preload-data")),n===null&&(n=D(s,"keepfocus")),e===null&&(e=D(s,"noscroll")),o===null&&(o=D(s,"reload")),i===null&&(i=D(s,"replacestate")),s=Yt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:$t[r??"off"],preload_data:$t[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Dt(t){const n=at(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Me(){const{set:t,subscribe:n}=at(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${Fe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==qe;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function rt(t,n){return t.origin!==Y||!t.pathname.startsWith(n)}const Ge=-1,He=-2,Be=-3,Ke=-4,ze=-5,Je=-6;function fn(t,n){return Xt(JSON.parse(t),n)}function Xt(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===Ge)return;if(o===Be)return NaN;if(o===Ke)return 1/0;if(o===ze)return-1/0;if(o===Je)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==He&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Zt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Zt];const Ye=new Set([...Zt]);[...Ye];function We(t){return t.filter(n=>n!=null)}class ot{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Qt{constructor(n,e){this.status=n,this.location=e}}class It extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Xe="x-sveltekit-invalidated",Ze="x-sveltekit-trailing-slash";function Q(t){return t instanceof ot||t instanceof It?t.status:500}function Qe(t){return t instanceof It?t.text:"Internal Error"}const j=Bt(zt)??{},B=Bt(Kt)??{},P={url:Dt({}),page:Dt({}),navigating:at(null),updated:Me()};function st(t){j[t]=Rt()}function te(t,n){let e=t+1;for(;j[e];)delete j[e],e+=1;for(e=n+1;B[e];)delete B[e],e+=1}function V(t){return location.href=t.href,new Promise(()=>{})}function Ct(){}let it,vt,tt,L,bt,q;const ee=[],et=[];let x=null;const ne=[],ae=[];let T=[],y={branch:[],error:null,url:null},Lt=!1,nt=!1,Vt=!0,K=!1,M=!1,xt=!1,ct=!1,U,E,R,S,F,mt;async function un(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),q=t,it=Ce(t),L=document.documentElement,bt=n,vt=t.nodes[0],tt=t.nodes[1],vt(),tt(),E=(a=history.state)==null?void 0:a[O],R=(o=history.state)==null?void 0:o[C],E||(E=R=Date.now(),history.replaceState({...history.state,[O]:E,[C]:R},""));const r=j[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await sn(bt,e):rn(location.href,{replaceState:!0}),on()}async function tn(){if(await(mt||(mt=Promise.resolve())),!mt)return;mt=null;const t=ut(y.url,!0);x=null;const n=F={},e=t&&await Nt(t);if(!(!e||n!==F)){if(e.type==="redirect")return lt(new URL(e.location,y.url).href,{},1,n);e.props.page&&(S=e.props.page),y=e.state,re(),U.$set(e.props)}}function re(){ee.length=0,ct=!1}function oe(t){et.some(n=>n==null?void 0:n.snapshot)&&(B[t]=et.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function se(t){var n;(n=B[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=et[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Ft(){st(E),jt(zt,j),oe(R),jt(Kt,B)}async function lt(t,n,e,r){return W({type:"goto",url:At(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(ct=!0)}})}async function en(t){return x={id:t.id,promise:Nt(t).then(n=>(n.type==="loaded"&&n.state.error&&(x=null),n))},x.promise}async function _t(t){const n=it.find(e=>e.exec(le(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ie(t,n){var a;y=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),S=t.props.page,U=new q.root({target:n,props:{...t.props,stores:P,components:et},hydrate:!0}),se(R);const r={from:null,to:{params:y.params,route:{id:((a=y.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};T.forEach(o=>o(r)),nt=!0}async function z({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(I&&(t.pathname===I||t.pathname===I+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=be(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:We(e).map(d=>d.node.component),page:S}};i!==void 0&&(c.props.form=i);let l={},u=!S,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const m=e[d],f=y.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==a||i!==void 0&&i!==S.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:S.data}),c}async function Pt({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:Ae(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const A=new URL(v,e);return s&&d(A.href),A.origin===e.origin&&(v=A.href.slice(e.origin.length)),nt?Ne(v,A.href,_):Ue(v,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function qt(t,n,e,r,a,o){if(ct)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(ee.some(s=>s(new URL(i))))return!0;return!1}function Ut(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function nn(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}async function Nt({id:t,invalidating:n,url:e,params:r,route:a}){if((x==null?void 0:x.id)===t)return x.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=y.url?t!==y.url.pathname+y.url.search:!1,h=y.route?a.id!==y.route.id:!1,g=nn(y.url,e);let d=!1;const m=c.map((p,w)=>{var N;const b=y.branch[w],k=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||qt(d,h,u,g,(N=b.server)==null?void 0:N.uses,r));return k&&(d=!0),k});if(m.some(Boolean)){try{l=await he(e,m)}catch(p){return ft({status:Q(p),error:await J(p,{url:e,params:r,route:{id:a.id}}),url:e,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,w)=>{var dt;if(!p)return;const b=y.branch[w],k=f==null?void 0:f[w];if((!k||k.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!qt(_,h,u,g,(dt=b.universal)==null?void 0:dt.uses,r))return b;if(_=!0,(k==null?void 0:k.type)==="error")throw k;return Pt({loader:p[1],url:e,params:r,route:a,parent:async()=>{var Ot;const Tt={};for(let ht=0;ht<w;ht+=1)Object.assign(Tt,(Ot=await v[ht])==null?void 0:Ot.data);return Tt},server_data_node:Ut(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const A=[];for(let p=0;p<c.length;p+=1)if(c[p])try{A.push(await v[p])}catch(w){if(w instanceof Qt)return{type:"redirect",location:w.location};let b=Q(w),k;if(f!=null&&f.includes(w))b=w.status??b,k=w.error;else if(w instanceof ot)k=w.body;else{if(await P.updated.check())return await V(e);k=await J(w,{params:r,url:e,route:{id:a.id}})}const N=await ce(p,A,o);return N?await z({url:e,params:r,branch:A.slice(0,N.idx).concat(N.node),status:b,error:k,route:a}):await ue(e,{id:a.id},k,b)}else A.push(void 0);return await z({url:e,params:r,branch:A,status:200,error:null,route:a,form:n?void 0:null})}async function ce(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ft({status:t,error:n,url:e,route:r}){const a={};let o=null;if(q.server_loads[0]===0)try{const l=await he(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==Y||e.pathname!==location.pathname||Lt)&&await V(e)}const s=await Pt({loader:vt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ut(o)}),c={node:await tt(),loader:tt,universal:null,server:null,data:null};return await z({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function ut(t,n){if(!t||rt(t,I))return;let e;try{e=q.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=le(e);for(const a of it){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:ke(o),url:t}}}function le(t){return Ee(t.slice(I.length)||"/")}function fe({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ge(y,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return K||ne.forEach(s=>s(i)),a?null:o}async function W({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ct,block:u=Ct}){const h=ut(n,!1),g=fe({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=E,m=R;l(),K=!0,nt&&P.navigating.set(g.navigation),F=c;let f=h&&await Nt(h);if(!f){if(rt(n,I))return await V(n);f=await ue(n,{id:null},await J(new It(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,F!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ft({status:500,error:await J(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return lt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await P.updated.check()&&await V(n);if(re(),st(d),oe(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const p=o?0:1,w={[O]:E+=p,[C]:R+=p,[St]:i};(o?history.replaceState:history.pushState).call(history,w,"",n),o||te(E,R)}if(x=null,f.props.page.state=i,nt){y=f.state,f.props.page&&(f.props.page.url=n);const p=(await Promise.all(ae.map(w=>w(g.navigation)))).filter(w=>typeof w=="function");if(p.length>0){let w=function(){T=T.filter(b=>!p.includes(b))};p.push(w),T.push(...p)}U.$set(f.props),xt=!0}else ie(f,bt);const{activeElement:_}=document;await yt();const v=e?e.scroll:a?Rt():null;if(Vt){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==_&&document.activeElement!==document.body;!r&&!A&&Et(),Vt=!0,f.props.page&&(S=f.props.page),K=!1,t==="popstate"&&se(R),g.fulfil(void 0),T.forEach(p=>p(g.navigation)),P.navigating.set(null)}async function ue(t,n,e,r){return t.origin===Y&&t.pathname===location.pathname&&!Lt?await ft({status:r,error:e,url:t,route:n}):await V(t)}function an(){let t;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(_t(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Wt(o,L);if(!s)return;const{url:c,external:l,download:u}=wt(s,I);if(l||u)return;const h=Z(s);if(!h.reload)if(i<=h.preload_data){const g=ut(c,!1);g&&en(g)}else i<=h.preload_code&&_t(c.pathname)}function a(){e.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=wt(o,I);if(s||c)continue;const l=Z(o);l.reload||(l.preload_code===X.viewport&&e.observe(o),l.preload_code===X.eager&&_t(i.pathname))}}T.push(a),a()}function J(t,n){if(t instanceof ot)return t.body;const e=Q(t),r=Qe(t);return q.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function de(t,n){ve(()=>(t.push(n),()=>{const e=t.indexOf(n);t.splice(e,1)}))}function dn(t){de(T,t)}function hn(t){de(ae,t)}function rn(t,n={}){return t=At(t),t.origin!==Y?Promise.reject(new Error("goto: invalid URL")):lt(t,n,0)}function pn(){return ct=!0,tn()}function gn(t,n){st(E);const e={[O]:E+=1,[C]:R,[Jt]:S.url.href,[St]:n};history.pushState(e,"",At(t)),xt=!0,S={...S,state:n},U.$set({page:S}),te(E,R)}async function mn(t){if(t.type==="error"){const n=new URL(location.href),{branch:e,route:r}=y;if(!r)return;const a=await ce(y.branch.length,e,r.errors);if(a){const o=await z({url:n,params:y.params,branch:e.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});y=o.state,U.$set(o.props),yt().then(Et)}}else t.type==="redirect"?lt(t.location,{invalidateAll:!0},0):(U.$set({form:null,page:{...S,form:t.data,status:t.status}}),await yt(),U.$set({form:t.data}),t.type==="success"&&Et())}function on(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Ft(),!K){const a=ge(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ne.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ft()}),(n=navigator.connection)!=null&&n.saveData||an(),L.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Wt(e.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=wt(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){fe({url:a,type:"link"})?K=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===pt(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(M=!0,st(E),t(a),!c.replace_state)return;M=!1}e.preventDefault(),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(rt(i,I))return;const s=e.target,c=Z(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),W({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[O]){const a=e.state[O];if(F={},a===E)return;const o=j[a],i=e.state[St]??{},s=new URL(e.state[Jt]??location.href),c=e.state[C],l=pt(location)===pt(y.url);if(c===R&&(xt||l)){t(s),j[E]=Rt(),o&&scrollTo(o.x,o.y),i!==S.state&&(S={...S,state:i},U.$set({page:S})),E=a;return}const h=a-E;await W({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,R=c},block:()=>{history.go(-h)},nav_token:F})}else if(!M){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[O]:++E,[C]:R},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&P.navigating.set(null)});function t(e){y.url=e,P.page.set({...S,url:e}),P.page.notify()}}async function sn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){Lt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ut(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=pe(f.uses)),Pt({loader:q.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:Ut(f)})}),h=await Promise.all(u),g=it.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await z({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof Qt){await V(new URL(u.location,location.href));return}l=await ft({status:Q(u),error:await J(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),ie(l,t)}async function he(t,n){var a;const e=new URL(t);e.pathname=Le(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Ze,"1"),e.searchParams.append(Xe,n.map(o=>o?"1":"0").join(""));const r=await Ht(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ot(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Xt(g,{Promise:d=>new Promise((m,f)=>{i.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=pe(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:A}=f,p=i.get(_);i.delete(_),A?p.reject(l(A)):p.fulfil(l(v))}}}})}function pe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Et(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ge(t,n,e,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{mn as a,dn as b,I as c,gn as d,ln as e,un as f,pn as i,hn as o,fn as p,Ve as r,P as s,at as w};
