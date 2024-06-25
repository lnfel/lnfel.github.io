import{t as gt,o as pe}from"./scheduler.Bs-Ydizp.js";import{w as vt}from"./index.Cjnls_wo.js";new URL("sveltekit-internal://");function ge(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function me(t){return t.split("%25").map(decodeURI).join("%25")}function _e(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ut({href:t}){return t.split("#")[0]}const ye=["href","pathname","search","toString","toJSON"];function we(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(e(i),a[o](i));n();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of ye)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ve="/__data.json",be=".html__data.json";function Ee(t){return t.endsWith(".html")?t.replace(/\.html$/,be):t.replace(/\/$/,"")+ve}function ke(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Se(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Gt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(bt(t)),Gt(t,n));const G=new Map;function Ae(t,n){const e=bt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&G.set(e,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=Se(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Re(t,n,e){if(G.size>0){const r=bt(t,e),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,e)}function bt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${ke(...a)}"]`}return r}const Ie=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Le(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ue(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return dt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return dt(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const u=Ie.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?f===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return dt(c)}).join("")}).join("")}/?$`),params:n}}function Pe(t){return!/^\([^)]+\)$/.test(t)}function Ue(t){return t.slice(1).split("/").filter(Pe)}function xe(t,n,e){const r={},a=t.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=a[i-s];if(c.chained&&c.rest&&s&&(f=a.slice(i-s,i+1).filter(u=>u).join("/"),s=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](f)){r[c.name]=f;const u=n[i+1],h=a[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function dt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ne({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([i,[c,f,u]])=>{const{pattern:h,params:g}=Le(i),d={id:i,exec:m=>{const l=h.exec(m);if(l)return xe(l,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...f||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,t[i]]}function s(i){return i===void 0?i:[a.has(i),t[i]]}}function qt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Tt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}var Ft;const I=((Ft=globalThis.__sveltekit_11759fd)==null?void 0:Ft.base)??"";var Mt;const Te=((Mt=globalThis.__sveltekit_11759fd)==null?void 0:Mt.assets)??I,Oe="1719295184098",Ht="sveltekit:snapshot",Bt="sveltekit:scroll",Et="sveltekit:states",Kt="sveltekit:pageurl",O="sveltekit:history",D="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function kt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function St(){return{x:pageXOffset,y:pageYOffset}}function $(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Ot={...W,"":W.hover};function Jt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Yt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Jt(t)}}function mt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||et(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===J&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function z(t){let n=null,e=null,r=null,a=null,o=null,s=null,i=t;for(;i&&i!==document.documentElement;)r===null&&(r=$(i,"preload-code")),a===null&&(a=$(i,"preload-data")),n===null&&(n=$(i,"keepfocus")),e===null&&(e=$(i,"noscroll")),o===null&&(o=$(i,"reload")),s===null&&(s=$(i,"replacestate")),i=Jt(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ot[r??"off"],preload_data:Ot[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(s)}}function jt(t){const n=vt(t);let e=!0;function r(){e=!0,n.update(s=>s)}function a(s){e=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||e&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function je(){const{set:t,subscribe:n}=vt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${Te}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==Oe;return s&&(t(!0),clearTimeout(e)),s}catch{return!1}}return{subscribe:n,check:r}}function et(t,n){return t.origin!==J||!t.pathname.startsWith(n)}const $e=-1,De=-2,Ce=-3,Ve=-4,Fe=-5,Me=-6;function nn(t,n){return Wt(JSON.parse(t),n)}function Wt(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,s=!1){if(o===$e)return;if(o===Ce)return NaN;if(o===Ve)return 1/0;if(o===Fe)return-1/0;if(o===Me)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=e[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<i.length;d+=1)u.add(a(i[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<i.length;d+=2)h.set(a(i[d]),a(i[d+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=a(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let f=0;f<i.length;f+=1){const u=i[f];u!==De&&(c[f]=a(u))}}else{const c={};r[o]=c;for(const f in i){const u=i[f];c[f]=a(u)}}return r[o]}return a(0)}const zt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...zt];const Ge=new Set([...zt]);[...Ge];function qe(t){return t.filter(n=>n!=null)}class nt{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Xt{constructor(n,e){this.status=n,this.location=e}}class At extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const He="x-sveltekit-invalidated",Be="x-sveltekit-trailing-slash";function X(t){return t instanceof nt||t instanceof At?t.status:500}function Ke(t){return t instanceof At?t.text:"Internal Error"}const j=qt(Bt)??{},q=qt(Ht)??{},U={url:jt({}),page:jt({}),navigating:vt(null),updated:je()};function at(t){j[t]=St()}function Zt(t,n){let e=t+1;for(;j[e];)delete j[e],e+=1;for(e=n+1;q[e];)delete q[e],e+=1}function C(t){return location.href=t.href,new Promise(()=>{})}function $t(){}let rt,_t,Z,L,yt,F;const Qt=[],Q=[];let P=null;const te=[],ee=[];let T=[],y={branch:[],error:null,url:null},Rt=!1,tt=!1,Dt=!0,H=!1,M=!1,It=!1,ot=!1,x,E,R,S,V,ht;async function an(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),F=t,rt=Ne(t),L=document.documentElement,yt=n,_t=t.nodes[0],Z=t.nodes[1],_t(),Z(),E=(a=history.state)==null?void 0:a[O],R=(o=history.state)==null?void 0:o[D],E||(E=R=Date.now(),history.replaceState({...history.state,[O]:E,[D]:R},""));const r=j[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await Qe(yt,e):Xe(location.href,{replaceState:!0}),Ze()}async function Je(){if(await(ht||(ht=Promise.resolve())),!ht)return;ht=null;const t=ct(y.url,!0);P=null;const n=V={},e=t&&await Ut(t);if(!(!e||n!==V)){if(e.type==="redirect")return it(new URL(e.location,y.url).href,{},1,n);e.props.page&&(S=e.props.page),y=e.state,ne(),x.$set(e.props)}}function ne(){Qt.length=0,ot=!1}function ae(t){Q.some(n=>n==null?void 0:n.snapshot)&&(q[t]=Q.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function re(t){var n;(n=q[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=Q[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Ct(){at(E),Tt(Bt,j),ae(R),Tt(Ht,q)}async function it(t,n,e,r){return Y({type:"goto",url:kt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(ot=!0)}})}async function Ye(t){return P={id:t.id,promise:Ut(t).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function pt(t){const n=rt.find(e=>e.exec(se(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function oe(t,n){var a;y=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),S=t.props.page,x=new F.root({target:n,props:{...t.props,stores:U,components:Q},hydrate:!0}),re(R);const r={from:null,to:{params:y.params,route:{id:((a=y.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};T.forEach(o=>o(r)),tt=!0}async function B({url:t,params:n,branch:e,status:r,error:a,route:o,form:s}){let i="never";if(I&&(t.pathname===I||t.pathname===I+"/"))i="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);t.pathname=ge(t.pathname,i),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:qe(e).map(d=>d.node.component),page:S}};s!==void 0&&(c.props.form=s);let f={},u=!S,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const m=e[d],l=y.branch[d];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(u=!0),m&&(f={...f,...m.data},u&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==a||s!==void 0&&s!==S.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:s??null,data:u?f:S.data}),c}async function Lt({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((u=f.universal)!=null&&u.load){let d=function(...l){for(const _ of l){const{href:v}=new URL(_,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(l,_)=>(i&&(c.route=!0),l[_])}),params:new Proxy(r,{get:(l,_)=>(i&&c.params.add(_),l[_])}),data:(o==null?void 0:o.data)??null,url:we(e,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,_){let v;l instanceof Request?(v=l.url,_={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,..._}):v=l;const A=new URL(v,e);return i&&d(A.href),A.origin===e.origin&&(v=A.href.slice(e.origin.length)),tt?Re(v,A.href,_):Ae(v,_)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,m)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Vt(t,n,e,r,a,o){if(ot)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==y.params[s])return!0;for(const s of a.dependencies)if(Qt.some(i=>i(new URL(s))))return!0;return!1}function Pt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function We(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&e.delete(r)}return e}async function Ut({id:t,invalidating:n,url:e,params:r,route:a}){if((P==null?void 0:P.id)===t)return P.promise;const{errors:o,layouts:s,leaf:i}=a,c=[...s,i];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let f=null;const u=y.url?t!==y.url.pathname+y.url.search:!1,h=y.route?a.id!==y.route.id:!1,g=We(y.url,e);let d=!1;const m=c.map((p,w)=>{var N;const b=y.branch[w],k=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Vt(d,h,u,g,(N=b.server)==null?void 0:N.uses,r));return k&&(d=!0),k});if(m.some(Boolean)){try{f=await ue(e,m)}catch(p){return st({status:X(p),error:await K(p,{url:e,params:r,route:{id:a.id}}),url:e,route:a})}if(f.type==="redirect")return f}const l=f==null?void 0:f.nodes;let _=!1;const v=c.map(async(p,w)=>{var lt;if(!p)return;const b=y.branch[w],k=l==null?void 0:l[w];if((!k||k.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Vt(_,h,u,g,(lt=b.universal)==null?void 0:lt.uses,r))return b;if(_=!0,(k==null?void 0:k.type)==="error")throw k;return Lt({loader:p[1],url:e,params:r,route:a,parent:async()=>{var Nt;const xt={};for(let ft=0;ft<w;ft+=1)Object.assign(xt,(Nt=await v[ft])==null?void 0:Nt.data);return xt},server_data_node:Pt(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const A=[];for(let p=0;p<c.length;p+=1)if(c[p])try{A.push(await v[p])}catch(w){if(w instanceof Xt)return{type:"redirect",location:w.location};let b=X(w),k;if(l!=null&&l.includes(w))b=w.status??b,k=w.error;else if(w instanceof nt)k=w.body;else{if(await U.updated.check())return await C(e);k=await K(w,{params:r,url:e,route:{id:a.id}})}const N=await ie(p,A,o);return N?await B({url:e,params:r,branch:A.slice(0,N.idx).concat(N.node),status:b,error:k,route:a}):await le(e,{id:a.id},k,b)}else A.push(void 0);return await B({url:e,params:r,branch:A,status:200,error:null,route:a,form:n?void 0:null})}async function ie(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function st({status:t,error:n,url:e,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const f=await ue(e,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(e.origin!==J||e.pathname!==location.pathname||Rt)&&await C(e)}const i=await Lt({loader:_t,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Pt(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return await B({url:e,params:a,branch:[i,c],status:t,error:n,route:null})}function ct(t,n){if(!t||et(t,I))return;let e;try{e=F.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=se(e);for(const a of rt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:_e(o),url:t}}}function se(t){return me(t.slice(I.length)||"/")}function ce({url:t,type:n,intent:e,delta:r}){let a=!1;const o=he(y,e,t,n);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return H||te.forEach(i=>i(s)),a?null:o}async function Y({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=$t,block:u=$t}){const h=ct(n,!1),g=ce({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=E,m=R;f(),H=!0,tt&&U.navigating.set(g.navigation),V=c;let l=h&&await Ut(h);if(!l){if(et(n,I))return await C(n);l=await le(n,{id:null},await K(new At(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,V!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await st({status:500,error:await K(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return it(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await U.updated.check()&&await C(n);if(ne(),at(d),ae(m),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=e?e.state:s,!e){const p=o?0:1,w={[O]:E+=p,[D]:R+=p,[Et]:s};(o?history.replaceState:history.pushState).call(history,w,"",n),o||Zt(E,R)}if(P=null,l.props.page.state=s,tt){y=l.state,l.props.page&&(l.props.page.url=n);const p=(await Promise.all(ee.map(w=>w(g.navigation)))).filter(w=>typeof w=="function");if(p.length>0){let w=function(){T=T.filter(b=>!p.includes(b))};p.push(w),T.push(...p)}x.$set(l.props),It=!0}else oe(l,yt);const{activeElement:_}=document;await gt();const v=e?e.scroll:a?St():null;if(Dt){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==_&&document.activeElement!==document.body;!r&&!A&&wt(),Dt=!0,l.props.page&&(S=l.props.page),H=!1,t==="popstate"&&re(R),g.fulfil(void 0),T.forEach(p=>p(g.navigation)),U.navigating.set(null)}async function le(t,n,e,r){return t.origin===J&&t.pathname===location.pathname&&!Rt?await st({status:r,error:e,url:t,route:n}):await C(t)}function ze(){let t;L.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(t),t=setTimeout(()=>{r(s,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(pt(s.target.href),e.unobserve(s.target))},{threshold:0});function r(o,s){const i=Yt(o,L);if(!i)return;const{url:c,external:f,download:u}=mt(i,I);if(f||u)return;const h=z(i);if(!h.reload)if(s<=h.preload_data){const g=ct(c,!1);g&&Ye(g)}else s<=h.preload_code&&pt(c.pathname)}function a(){e.disconnect();for(const o of L.querySelectorAll("a")){const{url:s,external:i,download:c}=mt(o,I);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===W.viewport&&e.observe(o),f.preload_code===W.eager&&pt(s.pathname))}}T.push(a),a()}function K(t,n){if(t instanceof nt)return t.body;const e=X(t),r=Ke(t);return F.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function fe(t,n){pe(()=>(t.push(n),()=>{const e=t.indexOf(n);t.splice(e,1)}))}function rn(t){fe(T,t)}function on(t){fe(ee,t)}function Xe(t,n={}){return t=kt(t),t.origin!==J?Promise.reject(new Error("goto: invalid URL")):it(t,n,0)}function sn(){return ot=!0,Je()}function cn(t,n){at(E);const e={[O]:E+=1,[D]:R,[Kt]:S.url.href,[Et]:n};history.pushState(e,"",kt(t)),It=!0,S={...S,state:n},x.$set({page:S}),Zt(E,R)}async function ln(t){if(t.type==="error"){const n=new URL(location.href),{branch:e,route:r}=y;if(!r)return;const a=await ie(y.branch.length,e,r.errors);if(a){const o=await B({url:n,params:y.params,branch:e.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});y=o.state,x.$set(o.props),gt().then(wt)}}else t.type==="redirect"?it(t.location,{invalidateAll:!0},0):(x.$set({form:null,page:{...S,form:t.data,status:t.status}}),await gt(),x.$set({form:t.data}),t.type==="success"&&wt())}function Ze(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Ct(),!H){const a=he(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};te.forEach(s=>s(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ct()}),(n=navigator.connection)!=null&&n.saveData||ze(),L.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Yt(e.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:s,download:i}=mt(r,I);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){ce({url:a,type:"link"})?H=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ut(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(M=!0,at(E),t(a),!c.replace_state)return;M=!1}e.preventDefault(),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(et(s,I))return;const i=e.target,c=z(i);if(c.reload)return;e.preventDefault(),e.stopPropagation();const f=new FormData(i),u=a==null?void 0:a.getAttribute("name");u&&f.append(u,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(f).toString(),Y({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[O]){const a=e.state[O];if(V={},a===E)return;const o=j[a],s=e.state[Et]??{},i=new URL(e.state[Kt]??location.href),c=e.state[D],f=ut(location)===ut(y.url);if(c===R&&(It||f)){t(i),j[E]=St(),o&&scrollTo(o.x,o.y),s!==S.state&&(S={...S,state:s},x.$set({page:S})),E=a;return}const h=a-E;await Y({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{E=a,R=c},block:()=>{history.go(-h)},nav_token:V})}else if(!M){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[O]:++E,[D]:R},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&U.navigating.set(null)});function t(e){y.url=e,U.page.set({...S,url:e}),U.page.notify()}}async function Qe(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:s,form:i}){Rt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ct(c,!1)||{});let f;try{const u=r.map(async(d,m)=>{const l=s[m];return l!=null&&l.uses&&(l.uses=de(l.uses)),Lt({loader:F.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:Pt(l)})}),h=await Promise.all(u),g=rt.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}f=await B({url:c,params:a,branch:h,status:n,error:e,form:i,route:g??null})}catch(u){if(u instanceof Xt){await C(new URL(u.location,location.href));return}f=await st({status:X(u),error:await K(u,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),oe(f,t)}async function ue(t,n){var a;const e=new URL(t);e.pathname=Ee(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Be,"1"),e.searchParams.append(He,n.map(o=>o?"1":"0").join(""));const r=await Gt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new nt(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function f(g){return Wt(g,{Promise:d=>new Promise((m,l)=>{s.set(d,{fulfil:m,reject:l})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const l=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=de(_.uses),_.data=f(_.data))}),o(l);else if(l.type==="chunk"){const{id:_,data:v,error:A}=l,p=s.get(_);s.delete(_),A?p.reject(f(A)):p.fulfil(f(v))}}}})}function de(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function wt(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function he(t,n,e,r){var c,f;let a,o;const s=new Promise((u,h)=>{a=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:e},willUnload:!n,type:r,complete:s},fulfil:a,reject:o}}export{ln as a,rn as b,I as c,cn as d,an as e,sn as i,on as o,nn as p,U as s};
