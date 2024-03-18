var Fe=Object.defineProperty;var je=(i,t,n)=>t in i?Fe(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var b=(i,t,n)=>(je(i,typeof t!="symbol"?t+"":t,n),n);import{I as E,w as M,p as V,s as L,c as A,u as F,g as j,a as B,b as H,J as Be,t as He,K as Le,o as oe,m as Ge,d as se,v as ue,q as fe,x as de}from"./scheduler.5nauvt-X.js";import{S as G,i as K,t as x,a as _,u as Y,v as J,w as Q,x as X,e as Ke,c as We,d as Ue,f as q,k as qe,l as re,q as ne,r as ie,s as Ye,o as he,g as Je}from"./index.Bg-TUWyg.js";import{d as Me,w as P,r as Qe}from"./index.BR5gSEEd.js";import{X as Xe,ai as Ze,ap as $e,a1 as me,an as Ie,am as et,aA as tt,aB as ve,aC as rt,aD as nt,V as ae,m as Ee,H as it,aE as I}from"./three.module.CvVa4e-M.js";function ot(i){return{all:i=i||new Map,on:function(t,n){var e=i.get(t);e?e.push(n):i.set(t,[n])},off:function(t,n){var e=i.get(t);e&&(n?e.splice(e.indexOf(n)>>>0,1):i.set(t,[]))},emit:function(t,n){var e=i.get(t);e&&e.slice().map(function(r){r(n)}),(e=i.get("*"))&&e.slice().map(function(r){r(t,n)})}}}class R{constructor(){b(this,"allVertices",{});b(this,"isolatedVertices",{});b(this,"connectedVertices",{});b(this,"sortedConnectedValues",[]);b(this,"needsSort",!1);b(this,"emitter",ot());b(this,"emit",this.emitter.emit.bind(this.emitter));b(this,"on",this.emitter.on.bind(this.emitter));b(this,"off",this.emitter.off.bind(this.emitter));b(this,"getKey",t=>typeof t=="object"?t.key:t)}get sortedVertices(){return this.mapNodes(t=>t)}moveToIsolated(t){const n=this.connectedVertices[t];n&&(this.isolatedVertices[t]=n,delete this.connectedVertices[t])}moveToConnected(t){const n=this.isolatedVertices[t];n&&(this.connectedVertices[t]=n,delete this.isolatedVertices[t])}add(t,n,e){if(this.allVertices[t]&&this.allVertices[t].value!==void 0)throw new Error(`A node with the key ${t.toString()} already exists`);let r=this.allVertices[t];r?r.value===void 0&&(r.value=n):(r={value:n,previous:new Set,next:new Set},this.allVertices[t]=r);const o=r.next.size>0||r.previous.size>0;if(!(e!=null&&e.after)&&!(e!=null&&e.before)&&!o){this.isolatedVertices[t]=r,this.emit("node:added",{key:t,type:"isolated",value:n});return}else this.connectedVertices[t]=r;if(e!=null&&e.after){const c=Array.isArray(e.after)?e.after:[e.after];c.forEach(a=>{r.previous.add(this.getKey(a))}),c.forEach(a=>{const s=this.getKey(a),l=this.allVertices[s];l?(l.next.add(t),this.moveToConnected(s)):(this.allVertices[s]={value:void 0,previous:new Set,next:new Set([t])},this.connectedVertices[s]=this.allVertices[s])})}if(e!=null&&e.before){const c=Array.isArray(e.before)?e.before:[e.before];c.forEach(a=>{r.next.add(this.getKey(a))}),c.forEach(a=>{const s=this.getKey(a),l=this.allVertices[s];l?(l.previous.add(t),this.moveToConnected(s)):(this.allVertices[s]={value:void 0,previous:new Set([t]),next:new Set},this.connectedVertices[s]=this.allVertices[s])})}this.emit("node:added",{key:t,type:"connected",value:n}),this.needsSort=!0}remove(t){const n=this.getKey(t);if(this.isolatedVertices[n]){delete this.isolatedVertices[n],delete this.allVertices[n],this.emit("node:removed",{key:n,type:"isolated"});return}const r=this.connectedVertices[n];r&&(r.next.forEach(o=>{const c=this.connectedVertices[o];c&&(c.previous.delete(n),c.previous.size===0&&c.next.size===0&&this.moveToIsolated(o))}),r.previous.forEach(o=>{const c=this.connectedVertices[o];c&&(c.next.delete(n),c.previous.size===0&&c.next.size===0&&this.moveToIsolated(o))}),delete this.connectedVertices[n],delete this.allVertices[n],this.emit("node:removed",{key:n,type:"connected"}),this.needsSort=!0)}mapNodes(t){this.needsSort&&this.sort();const n=[];return this.forEachNode((e,r)=>{n.push(t(e,r))}),n}forEachNode(t){this.needsSort&&this.sort();let n=0;for(;n<this.sortedConnectedValues.length;n++)t(this.sortedConnectedValues[n],n);Reflect.ownKeys(this.isolatedVertices).forEach(e=>{const r=this.isolatedVertices[e];r.value!==void 0&&t(r.value,n++)})}getValueByKey(t){var n;return(n=this.allVertices[t])==null?void 0:n.value}getKeyByValue(t){return Reflect.ownKeys(this.connectedVertices).find(n=>this.connectedVertices[n].value===t)??Reflect.ownKeys(this.isolatedVertices).find(n=>this.isolatedVertices[n].value===t)}sort(){var c;const t=new Map,n=[],e=[],r=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(r.forEach(a=>{t.set(a,0)}),r.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&t.set(l,(t.get(l)||0)+1)})}),t.forEach((a,s)=>{a===0&&n.push(s)});n.length>0;){const a=n.shift();e.push(a);const s=r.find(l=>l===a);s&&((c=this.connectedVertices[s])==null||c.next.forEach(l=>{const u=(t.get(l)||0)-1;t.set(l,u),u===0&&n.push(l)}))}if(e.length!==r.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const o=a=>a!==void 0;this.sortedConnectedValues=e.map(a=>this.connectedVertices[a].value).filter(o),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(t){return typeof t=="string"||typeof t=="symbol"}static isValue(t){return typeof t=="object"&&"key"in t}}class st{constructor(t,n,e){b(this,"key");b(this,"stage");b(this,"callback");b(this,"runTask",!0);this.stage=t,this.key=n,this.callback=e}stop(){this.runTask=!1}start(){this.runTask=!0}run(t){this.runTask&&this.callback(t)}}class at extends R{constructor(n,e,r){super();b(this,"key");b(this,"scheduler");b(this,"callback",(n,e)=>e());b(this,"removeTask",this.remove.bind(this));this.scheduler=n,this.key=e,r&&(this.callback=r.bind(this))}get tasks(){return this.sortedVertices}createTask(n,e,r){const o=new st(this,n,e);return this.add(n,o,r),o}getTask(n){return this.getValueByKey(n)}run(n){this.callback(n,e=>{this.forEachNode(r=>{r.run(e??n)})})}runWithTiming(n){const e={};return this.callback(n,r=>{this.forEachNode(o=>{const c=performance.now();o.run(r??n);const a=performance.now()-c;e[o.key]=a})}),e}getSchedule(){return this.mapNodes(n=>n.key.toString())}}class ct extends R{constructor(n){super();b(this,"lastTime",performance.now());b(this,"clampDeltaTo",.1);b(this,"removeStage",this.remove.bind(this));n!=null&&n.clampDeltaTo&&(this.clampDeltaTo=n.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(n,e){const r=new at(this,n,e==null?void 0:e.callback);return this.add(n,r,{after:e==null?void 0:e.after,before:e==null?void 0:e.before}),r}getStage(n){return this.getValueByKey(n)}run(n){const e=n-this.lastTime;this.forEachNode(r=>{r.run(Math.min(e/1e3,this.clampDeltaTo))}),this.lastTime=n}runWithTiming(n){const e=n-this.lastTime,r={},o=performance.now();return this.forEachNode(c=>{const a=performance.now(),s=c.runWithTiming(Math.min(e/1e3,this.clampDeltaTo)),l=performance.now()-a;r[c.key.toString()]={duration:l,tasks:s}}),{total:performance.now()-o,stages:r}}getSchedule(n={tasks:!0}){return{stages:this.mapNodes(e=>{if(e===void 0)throw new Error("Stage not found");return{key:e.key.toString(),tasks:n.tasks?e.getSchedule():void 0}})}}dispose(){this.clear()}}const lt=Symbol("use-legacy-frame-compatibility-context"),ut=()=>{const i={useFrameOrders:[],useRenderOrders:[]};return E(lt,i),i},S=(i,t)=>{const n=Me(i,o=>o);let e;const r=n.subscribe(async o=>{e&&e();const c=await t(o);c&&(e=c)});M(()=>{r(),e&&e()})},w=i=>{const t=P(i),n={set:e=>{n.current=e,t.set(e)},subscribe:t.subscribe,update:e=>{const r=e(n.current);n.current=r,t.set(r)},current:i};return n},ce=typeof window<"u",ft=()=>{const i=w({width:0,height:0});if(!ce)return{parentSize:i,parentSizeAction:()=>{}};const t={childList:!0,subtree:!1,attributes:!1};let n;const e=a=>{r.disconnect(),o.disconnect(),r.observe(a),o.observe(a,t)},r=new ResizeObserver(([a])=>{const{width:s,height:l}=a.contentRect;s===i.current.width&&l===i.current.height||i.set({width:s,height:l})}),o=new MutationObserver(a=>{for(const s of a)for(const l of s.removedNodes)if(n===l&&n.parentElement){e(n.parentElement);return}}),c=a=>{n=a;const s=n.parentElement;s&&(i.set({width:s.clientWidth,height:s.clientHeight}),e(s))};return M(()=>{r.disconnect(),o.disconnect()}),{parentSize:i,parentSizeAction:c}};function Pe(i,t){const n=P(i);let e=i;const r=n.subscribe(a=>e=a);return M(r),{...n,set:a=>{if((a==null?void 0:a.uuid)===(e==null?void 0:e.uuid))return;const s=e;n.set(a),t==null||t(a,s)},update:a=>{const s=a(e);if((s==null?void 0:s.uuid)===(e==null?void 0:e.uuid))return;const l=e;n.set(s),t==null||t(s,l)}}}const W=()=>{const i=V("threlte");if(i===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return i},le=Symbol("threlte-hierarchical-parent-context"),Ve=()=>V(le),dt=i=>E(le,i),ht=i=>{const t=Pe(i);return E(le,t),t};function mt(i){let t;const n=i[7].default,e=A(n,i,i[6],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,[o]){e&&e.p&&(!t||o&64)&&F(e,n,r,r[6],t?B(n,r[6],o,null):j(r[6]),null)},i(r){t||(x(e,r),t=!0)},o(r){_(e,r),t=!1},d(r){e&&e.d(r)}}}const vt=()=>({onChildMount:V("threlte-hierarchical-object-on-mount"),onChildDestroy:V("threlte-hierarchical-object-on-destroy")});function gt(i,t,n){var g;let e,{$$slots:r={},$$scope:o}=t,{object:c=void 0}=t,{onChildMount:a=void 0}=t;const s=p=>{a==null||a(p)};let{onChildDestroy:l=void 0}=t;const u=p=>{l==null||l(p)},{invalidate:f}=W(),h=Ve();H(i,h,p=>n(5,e=p));let{parent:m=e}=t;const v=vt();c&&((g=v.onChildMount)==null||g.call(v,c),f());const D=Pe(c,(p,N)=>{var T,O;N&&((T=v.onChildDestroy)==null||T.call(v,N),f()),p&&((O=v.onChildMount)==null||O.call(v,p),f())});return M(()=>{var p;c&&((p=v.onChildDestroy)==null||p.call(v,c),f())}),E("threlte-hierarchical-object-on-mount",s),E("threlte-hierarchical-object-on-destroy",u),dt(D),i.$$set=p=>{"object"in p&&n(2,c=p.object),"onChildMount"in p&&n(3,a=p.onChildMount),"onChildDestroy"in p&&n(4,l=p.onChildDestroy),"parent"in p&&n(1,m=p.parent),"$$scope"in p&&n(6,o=p.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&n(1,m=e),i.$$.dirty&4&&D.set(c)},[h,m,c,a,l,e,o,r]}class pt extends G{constructor(t){super(),K(this,t,gt,mt,L,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function yt(i){let t;const n=i[1].default,e=A(n,i,i[4],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&16)&&F(e,n,r,r[4],t?B(n,r[4],o,null):j(r[4]),null)},i(r){t||(x(e,r),t=!0)},o(r){_(e,r),t=!1},d(r){e&&e.d(r)}}}function bt(i){let t,n;return t=new pt({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[yt]},$$scope:{ctx:i}}}),{c(){Y(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,r){Q(t,e,r),n=!0},p(e,[r]){const o={};r&1&&(o.object=e[0]),r&1&&(o.onChildMount=e[2]),r&1&&(o.onChildDestroy=e[3]),r&16&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function xt(i,t,n){let{$$slots:e={},$$scope:r}=t,{object:o}=t;const c=s=>o.add(s),a=s=>o.remove(s);return i.$$set=s=>{"object"in s&&n(0,o=s.object),"$$scope"in s&&n(4,r=s.$$scope)},[o,e,c,a,r]}class Te extends G{constructor(t){super(),K(this,t,xt,bt,L,{object:0})}}const ge=(i,t)=>{if(i===t)return!0;if(!i||!t)return!1;const n=i.length;if(t.length!==n)return!1;for(let e=0;e<n;e++)if(i[e]!==t[e])return!1;return!0},Dt=()=>{E("threlte-cache",[])},pr=()=>{const i=V("threlte-cache");if(!i)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return{remember:(e,r)=>{for(const c of i)if(ge(r,c.keys)){if(c.error)throw c.error;if(c.promise)return c.promise}const o={promise:e(),keys:r,value:void 0};return i.push(o),o.promise.catch(c=>{o.error=c}),o.promise},clear:e=>{const r=i.findIndex(o=>ge(e,o.keys));r!==-1&&i.splice(r,1)}}},ke=i=>i.userData,_t=()=>{const i=new Xe(75,0,.1,1e3);return ke(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},Ct=i=>{S(i.size,t=>{ke(Be(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const e=n;return e.aspect=t.width/t.height,e.updateProjectionMatrix(),i.invalidate(),e})})},wt=i=>{const t={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{t.frameInvalidated=!1,t.advance=!1},dispose:async(c=!1)=>{await He(),!(!t.shouldDispose&&!c)&&(t.disposableObjects.forEach((a,s)=>{var l;(a===0||c)&&((l=s==null?void 0:s.dispose)==null||l.call(s),t.disposableObjects.delete(s))}),t.shouldDispose=!1)},collectDisposableObjects:(c,a)=>{const s=a??[];return c&&(c!=null&&c.dispose&&typeof c.dispose=="function"&&c.type!=="Scene"&&s.push(c),Object.entries(c).forEach(([l,u])=>{if(l==="parent"||l==="children"||typeof u!="object")return;const f=u;f!=null&&f.dispose&&t.collectDisposableObjects(f,s)})),s},addDisposableObjects:c=>{c.forEach(a=>{const s=t.disposableObjects.get(a);s?t.disposableObjects.set(a,s+1):t.disposableObjects.set(a,1)})},removeDisposableObjects:c=>{c.length!==0&&(c.forEach(a=>{const s=t.disposableObjects.get(a);s&&s>0&&t.disposableObjects.set(a,s-1)}),t.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},n={size:Me([i.userSize,i.parentSize],([c,a])=>c||a),camera:w(_t()),scene:new Ze,renderer:void 0,invalidate:()=>{t.frameInvalidated=!0},advance:()=>{t.advance=!0},colorSpace:w(i.colorSpace),toneMapping:w(i.toneMapping),dpr:w(i.dpr),useLegacyLights:w(i.useLegacyLights),shadows:w(i.shadows),colorManagementEnabled:w(i.colorManagementEnabled),renderMode:w(i.renderMode),autoRender:w(i.autoRender),scheduler:void 0,mainStage:void 0,renderStage:void 0,autoRenderTask:void 0,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(t.frameInvalidated||t.autoInvalidations.size>0)||n.renderMode.current==="manual"&&t.advance},e=w({});return E("threlte",n),E("threlte-internal-context",t),E("threlte-user-context",e),{ctx:n,internalCtx:t,getCtx:()=>n,getInternalCtx:()=>t}},St=$e.replace("dev",""),U=Number.parseInt(St),Mt={srgb:tt,"srgb-linear":ve,"":ve},It=i=>i.outputColorSpace!==void 0,Et=i=>{const t=P(void 0),n=(e,r)=>{i.renderer=new et({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r}),t.set(i.renderer)};return S([i.colorManagementEnabled],([e])=>{U>=150?me.enabled=e:me.legacyMode=!e}),S([t,i.colorSpace],([e,r])=>{if(e)if(It(e))e.outputColorSpace=r;else{const o=Mt[r];o?e.outputEncoding=o:console.warn("No encoding found for colorSpace",r)}}),S([t,i.dpr],([e,r])=>{e==null||e.setPixelRatio(r)}),S([t,i.size],([e,r])=>{var o;(o=e==null?void 0:e.xr)!=null&&o.isPresenting||e==null||e.setSize(r.width,r.height)}),S([t,i.shadows],([e,r])=>{e&&(e.shadowMap.enabled=!!r,r&&r!==!0?e.shadowMap.type=r:r===!0&&(e.shadowMap.type=Ie))}),S([t,i.toneMapping],([e,r])=>{e&&(e.toneMapping=r)}),S([t,i.useLegacyLights],([e,r])=>{e&&(U>=150&&r?e.useLegacyLights=r:U<150&&(e.physicallyCorrectLights=!r))}),{createRenderer:n}};function pe(i){let t,n;return t=new Te({props:{object:i[4].ctx.scene,$$slots:{default:[Pt]},$$scope:{ctx:i}}}),{c(){Y(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,r){Q(t,e,r),n=!0},p(e,r){const o={};r&262144&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function Pt(i){let t;const n=i[16].default,e=A(n,i,i[18],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&262144)&&F(e,n,r,r[18],t?B(n,r[18],o,null):j(r[18]),null)},i(r){t||(x(e,r),t=!0)},o(r){_(e,r),t=!1},d(r){e&&e.d(r)}}}function Vt(i){let t,n,e,r,o=i[1]&&pe(i);return{c(){t=Ke("canvas"),o&&o.c(),this.h()},l(c){t=We(c,"CANVAS",{class:!0});var a=Ue(t);o&&o.l(a),a.forEach(q),this.h()},h(){qe(t,"class","svelte-o3oskp")},m(c,a){re(c,t,a),o&&o.m(t,null),i[17](t),n=!0,e||(r=Le(i[3].call(null,t)),e=!0)},p(c,[a]){c[1]?o?(o.p(c,a),a&2&&x(o,1)):(o=pe(c),o.c(),x(o,1),o.m(t,null)):o&&(ne(),_(o,1,1,()=>{o=null}),ie())},i(c){n||(x(o),n=!0)},o(c){_(o),n=!1},d(c){c&&q(t),o&&o.d(),i[17](null),e=!1,r()}}}function Tt(i,t,n){let e,{$$slots:r={},$$scope:o}=t,{colorManagementEnabled:c=!0}=t,{colorSpace:a="srgb"}=t,{dpr:s=ce?window.devicePixelRatio:1}=t,{renderMode:l="on-demand"}=t,{rendererParameters:u=void 0}=t,{shadows:f=Ie}=t,{size:h=void 0}=t,{toneMapping:m=rt}=t,{useLegacyLights:v=!(U>=155)}=t,{autoRender:D=!0}=t,g,p=P(!1);H(i,p,d=>n(1,e=d));const N=P(h),{parentSize:T,parentSizeAction:O}=ft(),{useRenderOrders:C}=ut(),y=wt({colorManagementEnabled:c,colorSpace:a,dpr:s,renderMode:l,parentSize:T,autoRender:D,shadows:f,toneMapping:m,useLegacyLights:v,userSize:N}),z=new ct;y.getCtx().mainStage=z.createStage(Symbol("threlte-main-stage")),y.getCtx().renderStage=z.createStage(Symbol("threlte-render-stage"),{after:y.ctx.mainStage,callback(d,ee){y.ctx.shouldRender()&&ee()}}),y.getCtx().autoRenderTask=y.ctx.renderStage.createTask(Symbol("threlte-auto-render-task"),d=>{C.length>0||y.ctx.renderer.render(k.scene,k.camera.current)}),S([p,y.ctx.autoRender],([d,ee])=>(d&&ee?y.getCtx().autoRenderTask.start():y.getCtx().autoRenderTask.stop(),()=>{y.getCtx().autoRenderTask.stop()})),y.getCtx().scheduler=z,Dt();const k=y.ctx;Ct(k);const{createRenderer:Z}=Et(k);oe(()=>{Z(g,u),y.getCtx().renderer.setAnimationLoop(d=>{y.getInternalCtx().dispose(),z.run(d),y.getInternalCtx().resetFrameInvalidation()}),p.set(!0)}),M(()=>{var d;y.internalCtx.dispose(!0),y.ctx.scheduler.dispose(),(d=y.ctx.renderer)==null||d.dispose()});function $(d){Ge[d?"unshift":"push"](()=>{g=d,n(0,g)})}return i.$$set=d=>{"colorManagementEnabled"in d&&n(5,c=d.colorManagementEnabled),"colorSpace"in d&&n(6,a=d.colorSpace),"dpr"in d&&n(7,s=d.dpr),"renderMode"in d&&n(8,l=d.renderMode),"rendererParameters"in d&&n(9,u=d.rendererParameters),"shadows"in d&&n(10,f=d.shadows),"size"in d&&n(11,h=d.size),"toneMapping"in d&&n(12,m=d.toneMapping),"useLegacyLights"in d&&n(13,v=d.useLegacyLights),"autoRender"in d&&n(14,D=d.autoRender),"$$scope"in d&&n(18,o=d.$$scope)},i.$$.update=()=>{i.$$.dirty&2048&&N.set(h),i.$$.dirty&64&&y.ctx.colorSpace.set(a),i.$$.dirty&128&&y.ctx.dpr.set(s),i.$$.dirty&256&&y.ctx.renderMode.set(l),i.$$.dirty&16384&&y.ctx.autoRender.set(D),i.$$.dirty&1024&&y.ctx.shadows.set(f),i.$$.dirty&4096&&y.ctx.toneMapping.set(m)},[g,e,p,O,y,c,a,s,l,u,f,h,m,v,D,k,r,$,o]}class yr extends G{constructor(t){super(),K(this,t,Tt,Vt,L,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:15})}get ctx(){return this.$$.ctx[15]}}const kt=()=>V("threlte-internal-context");function Rt(i){let t;const n=i[9].default,e=A(n,i,i[8],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,[o]){e&&e.p&&(!t||o&256)&&F(e,n,r,r[8],t?B(n,r[8],o,null):j(r[8]),null)},i(r){t||(x(e,r),t=!0)},o(r){_(e,r),t=!1},d(r){e&&e.d(r)}}}const ye="threlte-disposable-object-context";function Nt(i,t,n){let e,r,{$$slots:o={},$$scope:c}=t;const{collectDisposableObjects:a,addDisposableObjects:s,removeDisposableObjects:l}=kt();let{object:u=void 0}=t,f=u,{dispose:h=void 0}=t;const m=V(ye);H(i,m,g=>n(7,r=g));const v=P(h??r??!0);H(i,v,g=>n(6,e=g)),E(ye,v);let D=e?a(u):[];return s(D),M(()=>{l(D)}),i.$$set=g=>{"object"in g&&n(2,u=g.object),"dispose"in g&&n(3,h=g.dispose),"$$scope"in g&&n(8,c=g.$$scope)},i.$$.update=()=>{i.$$.dirty&136&&v.set(h??r??!0),i.$$.dirty&116&&u!==f&&(l(D),n(5,D=e?a(u):[]),s(D),n(4,f=u))},[m,v,u,h,f,D,e,r,c,o]}class Ot extends G{constructor(t){super(),K(this,t,Nt,Rt,L,{object:2,dispose:3})}}const zt=/^\s*class\s+/,At=i=>typeof i!="function"?!1:zt.test(i.toString()),Ft=i=>Array.isArray(i),be=(i,t)=>At(i)?Ft(t)?new i(...t):new i:i,jt=i=>"isObject3D"in i,xe=i=>"dispose"in i,Re=(i,t)=>{if(t.includes(".")){const n=t.split("."),e=n.pop();for(let r=0;r<n.length;r+=1)i=i[n[r]];return{target:i,key:e}}else return{target:i,key:t}},te=Symbol("initialValueBeforeAttach"),Bt=()=>{const{invalidate:i}=W();let t=!1,n=te,e,r,o;const c=(s,l,u)=>{if(a(),!u){const f=s;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")e=u(l,s);else{const{target:f,key:h}=Re(l,u);n=f[h],f[h]=s,r=f,o=h}t=!0,i()}},a=()=>{t&&(e?(e(),e=void 0):r&&o&&n!==te&&(r[o]=n,n=te,r=void 0,o=void 0),t=!1,i())};return M(()=>{a()}),{update:c}},Ht=i=>i&&i.isCamera,Ne=i=>i&&i.isOrthographicCamera,Oe=i=>i&&i.isPerspectiveCamera,Lt=i=>Oe(i)||Ne(i),Gt=()=>{const{invalidate:i,size:t,camera:n}=W();let e,r;M(()=>{r==null||r()});const o=s=>{e&&(Ne(e)?(e.left=s.width/-2,e.right=s.width/2,e.top=s.height/2,e.bottom=s.height/-2,e.updateProjectionMatrix(),e.updateMatrixWorld(),i()):Oe(e)&&(e.aspect=s.width/s.height,e.updateProjectionMatrix(),e.updateMatrixWorld(),i()))};return{update:(s,l)=>{if(r==null||r(),l||!Lt(s)){e=void 0;return}e=s,r=t.subscribe(o)},makeDefaultCamera:(s,l)=>{!Ht(s)||!l||(n.set(s),i())}}},ze=()=>{const i=se(),t=(e,r)=>{const o=i.$$.callbacks[e];o&&o.forEach(c=>{c(r)})};return Object.defineProperty(t,"hasEventListener",{value:e=>!!i.$$.callbacks[e],enumerable:!0}),t},Kt=()=>{const i=ze(),t=[];let n,e=!1;const r=()=>{t.forEach(a=>a()),t.length=0,i("create",{ref:n,cleanup:a=>{t.push(a)}})},o=c=>{n=c,e&&r()};return oe(()=>{r(),e=!0}),M(()=>{t.forEach(c=>c())}),{updateRef:o}},De=i=>!!(i!=null&&i.addEventListener),Wt=()=>{const i=ze(),t=se(),n=s=>{s!=null&&s.type&&i(s.type,s)},e=(s,l)=>{De(s)&&l.forEach(u=>{s.removeEventListener(u,n)})},r=(s,l)=>{De(s)&&l.forEach(u=>{s.addEventListener(u,n)})},o=P(),c=P([]);return S([o,c],([s,l])=>(r(s,l),()=>e(s,l))),oe(()=>{c.set(Object.keys(t.$$.callbacks))}),{updateRef:s=>{o.set(s)}}},Ut=i=>{const n=V("threlte-plugin-context");if(!n)return;const e=Object.values(n).map(l=>l(i)).filter(Boolean),r=e.flatMap(l=>l.pluginProps??[]);let o=[];return M(()=>{o.forEach(l=>l())}),{updateRef:l=>{o.forEach(u=>u()),o=[],e.forEach(u=>{var h;const f=(h=u.onRefChange)==null?void 0:h.call(u,l);f&&o.push(f)})},updateProps:l=>{e.forEach(u=>{var f;(f=u.onPropsChange)==null||f.call(u,l)})},updateRestProps:l=>{e.forEach(u=>{var f;(f=u.onRestPropsChange)==null||f.call(u,l)})},pluginsProps:r}},qt=new Set(["$$scope","$$slots","type","args","attach","instance"]),Yt=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),Jt=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,_e=(i,t,n)=>{var e,r,o;return!Array.isArray(n)&&typeof n=="number"&&typeof((e=i[t])==null?void 0:e.setScalar)=="function"&&!((r=i[t])!=null&&r.isColor)?(c,a,s)=>{c[a].setScalar(s)}:typeof((o=i[t])==null?void 0:o.set)=="function"?Array.isArray(n)?(c,a,s)=>{c[a].set(...s)}:(c,a,s)=>{c[a].set(s)}:(c,a,s)=>{c[a]=s}},Qt=()=>{const{invalidate:i}=W(),t=new Map,n=new Map,e=(o,c,a,s)=>{if(Jt(a)){const f=t.get(c);if(f&&f.instance===o&&f.value===a)return;t.set(c,{instance:o,value:a})}const{key:l,target:u}=Re(o,c);if(a!=null){const f=n.get(c);if(f)f(u,l,a);else{const h=_e(u,l,a);n.set(c,h),h(u,l,a)}}else _e(u,l,a)(u,l,a);s.manualCamera||Yt.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(o,c,a)=>{var s;for(const l in c)!qt.has(l)&&!((s=a.pluginsProps)!=null&&s.includes(l))&&e(o,l,c[l],a),i()}}},Xt=i=>({ref:i&2}),Ce=i=>({ref:i[1]}),Zt=i=>({ref:i&2}),we=i=>({ref:i[1]});function Se(i){let t,n;return t=new Ot({props:{object:i[1],dispose:i[0]}}),{c(){Y(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,r){Q(t,e,r),n=!0},p(e,r){const o={};r&2&&(o.object=e[1]),r&1&&(o.dispose=e[0]),t.$set(o)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function $t(i){let t;const n=i[10].default,e=A(n,i,i[11],Ce);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&2050)&&F(e,n,r,r[11],t?B(n,r[11],o,Xt):j(r[11]),Ce)},i(r){t||(x(e,r),t=!0)},o(r){_(e,r),t=!1},d(r){e&&e.d(r)}}}function er(i){let t,n;return t=new Te({props:{object:i[1],$$slots:{default:[tr]},$$scope:{ctx:i}}}),{c(){Y(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,r){Q(t,e,r),n=!0},p(e,r){const o={};r&2&&(o.object=e[1]),r&2050&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function tr(i){let t;const n=i[10].default,e=A(n,i,i[11],we);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&2050)&&F(e,n,r,r[11],t?B(n,r[11],o,Zt):j(r[11]),we)},i(r){t||(x(e,r),t=!0)},o(r){_(e,r),t=!1},d(r){e&&e.d(r)}}}function rr(i){let t=xe(i[1]),n,e,r,o,c,a,s=t&&Se(i);const l=[er,$t],u=[];function f(h,m){return m&2&&(e=null),e==null&&(e=!!jt(h[1])),e?0:1}return r=f(i,-1),o=u[r]=l[r](i),{c(){s&&s.c(),n=Ye(),o.c(),c=he()},l(h){s&&s.l(h),n=Je(h),o.l(h),c=he()},m(h,m){s&&s.m(h,m),re(h,n,m),u[r].m(h,m),re(h,c,m),a=!0},p(h,[m]){m&2&&(t=xe(h[1])),t?s?(s.p(h,m),m&2&&x(s,1)):(s=Se(h),s.c(),x(s,1),s.m(n.parentNode,n)):s&&(ne(),_(s,1,1,()=>{s=null}),ie());let v=r;r=f(h,m),r===v?u[r].p(h,m):(ne(),_(u[v],1,1,()=>{u[v]=null}),ie(),o=u[r],o?o.p(h,m):(o=u[r]=l[r](h),o.c()),x(o,1),o.m(c.parentNode,c))},i(h){a||(x(s),x(o),a=!0)},o(h){_(s),_(o),a=!1},d(h){h&&(q(n),q(c)),s&&s.d(h),u[r].d(h)}}}function nr(i,t,n){const e=["is","args","attach","manual","makeDefault","dispose","ref"];let r=ue(t,e),o,{$$slots:c={},$$scope:a}=t,{is:s}=t,{args:l=void 0}=t,{attach:u=void 0}=t,{manual:f=void 0}=t,{makeDefault:h=void 0}=t,{dispose:m=void 0}=t;const v=Ve();H(i,v,d=>n(9,o=d));const D=Kt();let g=be(s,l);D.updateRef(g);let p=!1;const N=()=>{if(!p){p=!0;return}n(1,g=be(s,l)),D.updateRef(g)};let{ref:T=g}=t;const O=ht(g),C=Ut({ref:g,props:t}),y=(C==null?void 0:C.pluginsProps)??[],z=Qt(),k=Gt(),Z=Bt(),$=Wt();return i.$$set=d=>{n(23,t=fe(fe({},t),de(d))),n(22,r=ue(t,e)),"is"in d&&n(4,s=d.is),"args"in d&&n(5,l=d.args),"attach"in d&&n(6,u=d.attach),"manual"in d&&n(7,f=d.manual),"makeDefault"in d&&n(8,h=d.makeDefault),"dispose"in d&&n(0,m=d.dispose),"ref"in d&&n(3,T=d.ref),"$$scope"in d&&n(11,a=d.$$scope)},i.$$.update=()=>{i.$$.dirty&48&&N(),i.$$.dirty&2&&n(3,T=g),i.$$.dirty&2&&O.set(g),z.updateProps(g,r,{manualCamera:f,pluginsProps:y}),i.$$.dirty&130&&k.update(g,f),i.$$.dirty&258&&k.makeDefaultCamera(g,h),i.$$.dirty&578&&Z.update(g,o,u),i.$$.dirty&2&&$.updateRef(g),i.$$.dirty&2&&(C==null||C.updateRef(g)),C==null||C.updateProps(t),C==null||C.updateRestProps(r)},t=de(t),[m,g,v,T,s,l,u,f,h,o,c,a]}let Ae=class extends G{constructor(t){super(),K(this,t,nr,rr,L,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const ir={},or=(i,t)=>{const n=ir[t]||nt[t];if(!n)throw new Error(`No Three.js module found for ${t}. Did you forget to extend the catalogue?`);return{...i,props:{...i.props,is:n}}},sr=i=>new Proxy(class{},{construct(t,[n]){const e=n;return new Ae(or(e,i))}}),xr=new Proxy(class{},{construct(i,[t]){const n=t;return new Ae(n)},get(i,t){return sr(t)}});function Dr(i,t,n){if(!ce)return{task:void 0,start:()=>{},stop:()=>{},started:Qe(!1)};let e,r,o;R.isKey(i)?(e=i,r=t,o=n):(e=Symbol("useTask"),r=i,o=t);const c=W();let a=c.mainStage;if(o){if(o.stage)if(R.isValue(o.stage))a=o.stage;else{const m=c.scheduler.getStage(o.stage);if(!m)throw new Error(`No stage found with key ${o.stage.toString()}`);a=m}else if(o.after)if(Array.isArray(o.after))for(let m=0;m<o.after.length;m++){const v=o.after[m];if(R.isValue(v)){a=v.stage;break}}else R.isValue(o.after)&&(a=o.after.stage);else if(o.before)if(Array.isArray(o.before))for(let m=0;m<o.before.length;m++){const v=o.before[m];if(R.isValue(v)){a=v.stage;break}}else R.isValue(o.before)&&(a=o.before.stage)}const{autoInvalidations:s}=V("threlte-internal-context"),l=P(!1),u=a.createTask(e,r,o),f=()=>{l.set(!0),((o==null?void 0:o.autoInvalidate)??!0)&&s.add(r),u.start()},h=()=>{l.set(!0),((o==null?void 0:o.autoInvalidate)??!0)&&s.delete(r),u.stop()};return(o==null?void 0:o.autoStart)??!0?f():h(),M(()=>{a&&a.removeTask(e)}),{task:u,start:f,stop:h,started:{subscribe:l.subscribe}}}const _r=()=>{const i=se(),t=P(void 0);return S(t,n=>{n&&Object.entries(i.$$.callbacks).forEach(e=>{const[r,o]=e;r in n.$$.callbacks&&Array.isArray(n.$$.callbacks[r])?n.$$.callbacks[r].push(...o):n.$$.callbacks[r]=o})}),t};new ae;new ae;new ae;new Ee;new Ee;new it;`${I.logdepthbuf_pars_vertex}${I.fog_pars_vertex}${I.logdepthbuf_vertex}${I.fog_vertex}`;`${I.tonemapping_fragment}${I.colorspace_fragment}`;`${I.tonemapping_fragment}${I.colorspace_fragment}`;const ar=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,cr=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,lr=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,ur=lr,fr=`
	${ar}
	${cr}
`;`${ur}${fr}${I.tonemapping_fragment}${I.colorspace_fragment}`;export{yr as C,pt as H,xr as T,W as a,Dr as b,pr as c,w as d,_r as f,Ve as u,S as w};
