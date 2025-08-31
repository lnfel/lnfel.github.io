var rt=Object.defineProperty;var nt=(t,e,n)=>e in t?rt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>nt(t,typeof e!="symbol"?e+"":e,n);import{a4 as V,aa as O,W as it,a3 as N,S as q,i as Y,s as J,c as j,t as M,a as S,u as B,g as H,b as L,w as Z,L as re,M as ne,N as ie,O as oe,d as te,I as fe,J as de,f as he,D as ot,j as st,k as at,l as ct,q as lt,U as ye,Z as ut,F as xe,m as ft,y as _e,r as dt,a0 as we,_ as Ce,a1 as Se}from"./xk3pEXYh.js";import"./IHki7fMi.js";import{d as je,w as R,r as ht}from"./py_jMq1I.js";import{a1 as mt,ai as vt,ap as pt,ad as yt,an as Be,am as xt,aA as gt,aB as bt,V as ge,l as He,X as Dt,aC as k,a2 as _t,a as Le,U as wt,at as Me}from"./BWs5EcuF.js";function Ct(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map(function(i){i(n)}),(r=t.get("*"))&&r.slice().map(function(i){i(e,n)})}}}class z{constructor(){_(this,"allVertices",{});_(this,"isolatedVertices",{});_(this,"connectedVertices",{});_(this,"sortedConnectedValues",[]);_(this,"needsSort",!1);_(this,"emitter",Ct());_(this,"emit",this.emitter.emit.bind(this.emitter));_(this,"on",this.emitter.on.bind(this.emitter));_(this,"off",this.emitter.off.bind(this.emitter));_(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const n=this.connectedVertices[e];n&&(this.isolatedVertices[e]=n,delete this.connectedVertices[e])}moveToConnected(e){const n=this.isolatedVertices[e];n&&(this.connectedVertices[e]=n,delete this.isolatedVertices[e])}add(e,n,r){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=n):(i={value:n,previous:new Set,next:new Set},this.allVertices[e]=i);const o=i.next.size>0||i.previous.size>0;if(!(r!=null&&r.after)&&!(r!=null&&r.before)&&!o){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:n});return}else this.connectedVertices[e]=i;if(r!=null&&r.after){const s=Array.isArray(r.after)?r.after:[r.after];s.forEach(a=>{i.previous.add(this.getKey(a))}),s.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(r!=null&&r.before){const s=Array.isArray(r.before)?r.before:[r.before];s.forEach(a=>{i.next.add(this.getKey(a))}),s.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:n}),this.needsSort=!0}remove(e){const n=this.getKey(e);if(this.isolatedVertices[n]){delete this.isolatedVertices[n],delete this.allVertices[n],this.emit("node:removed",{key:n,type:"isolated"});return}const i=this.connectedVertices[n];i&&(i.next.forEach(o=>{const s=this.connectedVertices[o];s&&(s.previous.delete(n),s.previous.size===0&&s.next.size===0&&this.moveToIsolated(o))}),i.previous.forEach(o=>{const s=this.connectedVertices[o];s&&(s.next.delete(n),s.previous.size===0&&s.next.size===0&&this.moveToIsolated(o))}),delete this.connectedVertices[n],delete this.allVertices[n],this.emit("node:removed",{key:n,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const n=[];return this.forEachNode((r,i)=>{n.push(e(r,i))}),n}forEachNode(e){this.needsSort&&this.sort();let n=0;for(;n<this.sortedConnectedValues.length;n++)e(this.sortedConnectedValues[n],n);Reflect.ownKeys(this.isolatedVertices).forEach(r=>{const i=this.isolatedVertices[r];i.value!==void 0&&e(i.value,n++)})}getValueByKey(e){var n;return(n=this.allVertices[e])==null?void 0:n.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(n=>this.connectedVertices[n].value===e)??Reflect.ownKeys(this.isolatedVertices).find(n=>this.isolatedVertices[n].value===e)}sort(){var s;const e=new Map,n=[],r=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,c)=>{a===0&&n.push(c)});n.length>0;){const a=n.shift();r.push(a);const c=i.find(l=>l===a);c&&((s=this.connectedVertices[c])==null||s.next.forEach(l=>{const u=(e.get(l)||0)-1;e.set(l,u),u===0&&n.push(l)}))}if(r.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const o=a=>a!==void 0;this.sortedConnectedValues=r.map(a=>this.connectedVertices[a].value).filter(o),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class St{constructor(e,n,r){_(this,"key");_(this,"stage");_(this,"callback");_(this,"runTask",!0);this.stage=e,this.key=n,this.callback=r}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class Mt extends z{constructor(n,r,i){super();_(this,"key");_(this,"scheduler");_(this,"callback",(n,r)=>r());_(this,"removeTask",this.remove.bind(this));this.scheduler=n,this.key=r,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(n,r,i){const o=new St(this,n,r);return this.add(n,o,i),o}getTask(n){return this.getValueByKey(n)}run(n){this.callback(n,r=>{this.forEachNode(i=>{i.run(r??n)})})}runWithTiming(n){const r={};return this.callback(n,i=>{this.forEachNode(o=>{const s=performance.now();o.run(i??n);const a=performance.now()-s;r[o.key]=a})}),r}getSchedule(){return this.mapNodes(n=>n.key.toString())}}class It extends z{constructor(n){super();_(this,"lastTime",performance.now());_(this,"clampDeltaTo",.1);_(this,"removeStage",this.remove.bind(this));n!=null&&n.clampDeltaTo&&(this.clampDeltaTo=n.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(n,r){const i=new Mt(this,n,r==null?void 0:r.callback);return this.add(n,i,{after:r==null?void 0:r.after,before:r==null?void 0:r.before}),i}getStage(n){return this.getValueByKey(n)}run(n){const r=n-this.lastTime;this.forEachNode(i=>{i.run(Math.min(r/1e3,this.clampDeltaTo))}),this.lastTime=n}runWithTiming(n){const r=n-this.lastTime,i={},o=performance.now();return this.forEachNode(s=>{const a=performance.now(),c=s.runWithTiming(Math.min(r/1e3,this.clampDeltaTo)),l=performance.now()-a;i[s.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-o,stages:i}}getSchedule(n={tasks:!0}){return{stages:this.mapNodes(r=>{if(r===void 0)throw new Error("Stage not found");return{key:r.key.toString(),tasks:n.tasks?r.getSchedule():void 0}})}}dispose(){this.clear()}}const T=(t,e)=>{const n=je(t,o=>o);let r;const i=n.subscribe(async o=>{r&&r();const s=await e(o);s&&(r=s)});V(()=>{i(),r&&r()})},P=t=>{const e=R(t),n={set:r=>{n.current=r,e.set(r)},subscribe:e.subscribe,update:r=>{const i=r(n.current);n.current=i,e.set(i)},current:t};return n},se=new mt(75,0,.1,1e3);se.position.z=5;se.lookAt(0,0,0);const Pt=()=>se,Tt=t=>{T(t.size,e=>{if(t.camera.current===se){const n=t.camera.current;n.aspect=e.width/e.height,n.updateProjectionMatrix(),t.invalidate()}})},Vt=Symbol("use-legacy-frame-compatibility-context"),Et=()=>{const t={useFrameOrders:[],useRenderOrders:[]};return O(Vt,t),t},kt=t=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(l=!1)=>{await it(),!(!e.shouldDispose&&!l)&&(e.disposableObjects.forEach((u,f)=>{var d;(u===0||l)&&((d=f==null?void 0:f.dispose)==null||d.call(f),e.disposableObjects.delete(f))}),e.shouldDispose=!1)},collectDisposableObjects:(l,u)=>{const f=u??[];return l&&(l!=null&&l.dispose&&typeof l.dispose=="function"&&l.type!=="Scene"&&f.push(l),Object.entries(l).forEach(([d,m])=>{if(d==="parent"||d==="children"||typeof m!="object")return;const h=m;h!=null&&h.dispose&&e.collectDisposableObjects(h,f)})),f},addDisposableObjects:l=>{l.forEach(u=>{const f=e.disposableObjects.get(u);f?e.disposableObjects.set(u,f+1):e.disposableObjects.set(u,1)})},removeDisposableObjects:l=>{l.length!==0&&(l.forEach(u=>{const f=e.disposableObjects.get(u);f&&f>0&&e.disposableObjects.set(u,f-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:n}=Et(),r=new It,i=r.createStage(Symbol("threlte-main-stage")),o=r.createStage(Symbol("threlte-render-stage"),{after:i,callback(l,u){a.shouldRender()&&u()}}),s=o.createTask(Symbol("threlte-auto-render-task"),l=>{n.length>0||a.renderer.render(a.scene,a.camera.current)}),a={size:je([t.userSize,t.parentSize],([l,u])=>l||u),camera:P(Pt()),scene:new vt,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:P(t.colorSpace),toneMapping:P(t.toneMapping),dpr:P(t.dpr),useLegacyLights:P(t.useLegacyLights),shadows:P(t.shadows),colorManagementEnabled:P(t.colorManagementEnabled),renderMode:P(t.renderMode),autoRender:P(t.autoRender),scheduler:r,mainStage:i,renderStage:o,autoRenderTask:s,shouldRender:()=>a.renderMode.current==="always"||a.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||a.renderMode.current==="manual"&&e.advance};Tt(a);const c=P({});return O("threlte",a),O("threlte-internal-context",e),O("threlte-user-context",c),a},be=typeof window<"u",Ot=()=>{const t=P({width:0,height:0});if(!be)return{parentSize:t,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let n;const r=a=>{i.disconnect(),o.disconnect(),i.observe(a),o.observe(a,e)},i=new ResizeObserver(([a])=>{const{width:c,height:l}=a.contentRect;c===t.current.width&&l===t.current.height||t.set({width:c,height:l})}),o=new MutationObserver(a=>{for(const c of a)for(const l of c.removedNodes)if(n===l&&n.parentElement){r(n.parentElement);return}}),s=a=>{n=a;const c=n.parentElement;c&&(t.set({width:c.clientWidth,height:c.clientHeight}),r(c))};return V(()=>{i.disconnect(),o.disconnect()}),{parentSize:t,parentSizeAction:s}};function Ge(t,e){const n=R(t);let r=t;const i=n.subscribe(a=>r=a);return V(i),{...n,set:a=>{if((a==null?void 0:a.uuid)===(r==null?void 0:r.uuid))return;const c=r;n.set(a),e==null||e(a,c)},update:a=>{const c=a(r);if((c==null?void 0:c.uuid)===(r==null?void 0:r.uuid))return;const l=r;n.set(c),e==null||e(c,l)}}}const X=()=>{const t=N("threlte");if(t===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return t},De=Symbol("threlte-hierarchical-parent-context"),Ze=()=>N(De),Rt=t=>O(De,t),Nt=t=>{const e=Ge(t);return O(De,e),e};function zt(t){let e;const n=t[7].default,r=j(n,t,t[6],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,[o]){r&&r.p&&(!e||o&64)&&B(r,n,i,i[6],e?L(n,i[6],o,null):H(i[6]),null)},i(i){e||(S(r,i),e=!0)},o(i){M(r,i),e=!1},d(i){r&&r.d(i)}}}const At=()=>({onChildMount:N("threlte-hierarchical-object-on-mount"),onChildDestroy:N("threlte-hierarchical-object-on-destroy")});function Ft(t,e,n){var v;let r,{$$slots:i={},$$scope:o}=e,{object:s=void 0}=e,{onChildMount:a=void 0}=e;const c=g=>{a==null||a(g)};let{onChildDestroy:l=void 0}=e;const u=g=>{l==null||l(g)},{invalidate:f}=X(),d=Ze();Z(t,d,g=>n(5,r=g));let{parent:m=r}=e;const h=At();s&&((v=h.onChildMount)==null||v.call(h,s),f());const b=Ge(s,(g,E)=>{var p,y;E&&((p=h.onChildDestroy)==null||p.call(h,E),f()),g&&((y=h.onChildMount)==null||y.call(h,g),f())});return V(()=>{var g;s&&((g=h.onChildDestroy)==null||g.call(h,s),f())}),O("threlte-hierarchical-object-on-mount",c),O("threlte-hierarchical-object-on-destroy",u),Rt(b),t.$$set=g=>{"object"in g&&n(2,s=g.object),"onChildMount"in g&&n(3,a=g.onChildMount),"onChildDestroy"in g&&n(4,l=g.onChildDestroy),"parent"in g&&n(1,m=g.parent),"$$scope"in g&&n(6,o=g.$$scope)},t.$$.update=()=>{t.$$.dirty&32&&n(1,m=r),t.$$.dirty&4&&b.set(s)},[d,m,s,a,l,r,o,i]}class jt extends q{constructor(e){super(),Y(this,e,Ft,zt,J,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function Bt(t){let e;const n=t[1].default,r=j(n,t,t[4],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,o){r&&r.p&&(!e||o&16)&&B(r,n,i,i[4],e?L(n,i[4],o,null):H(i[4]),null)},i(i){e||(S(r,i),e=!0)},o(i){M(r,i),e=!1},d(i){r&&r.d(i)}}}function Ht(t){let e,n;return e=new jt({props:{object:t[0],onChildMount:t[2],onChildDestroy:t[3],$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){oe(e.$$.fragment)},l(r){ie(e.$$.fragment,r)},m(r,i){ne(e,r,i),n=!0},p(r,[i]){const o={};i&1&&(o.object=r[0]),i&1&&(o.onChildMount=r[2]),i&1&&(o.onChildDestroy=r[3]),i&16&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){re(e,r)}}}function Lt(t,e,n){let{$$slots:r={},$$scope:i}=e,{object:o}=e;const s=c=>o.add(c),a=c=>o.remove(c);return t.$$set=c=>{"object"in c&&n(0,o=c.object),"$$scope"in c&&n(4,i=c.$$scope)},[o,r,s,a,i]}class Ke extends q{constructor(e){super(),Y(this,e,Lt,Ht,J,{object:0})}}const Ie=(t,e)=>{if(t===e)return!0;if(!t||!e)return!1;const n=t.length;if(e.length!==n)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0},Gt=()=>{O("threlte-cache",[])},Jr=()=>{const t=N("threlte-cache");if(!t)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return{remember:(r,i)=>{for(const s of t)if(Ie(i,s.keys)){if(s.error)throw s.error;if(s.promise)return s.promise}const o={promise:r(),keys:i,value:void 0};return t.push(o),o.promise.catch(s=>{o.error=s}),o.promise},clear:r=>{const i=t.findIndex(o=>Ie(r,o.keys));i!==-1&&t.splice(i,1)}}},Zt=pt.replace("dev",""),Kt=Number.parseInt(Zt),Wt=t=>{const e=R(void 0),n=(r,i)=>{t.renderer=new xt({powerPreference:"high-performance",canvas:r,antialias:!0,alpha:!0,...i}),e.set(t.renderer)};return T([t.colorManagementEnabled],([r])=>{yt.enabled=r}),T([e,t.colorSpace],([r,i])=>{r&&(r.outputColorSpace=i)}),T([e,t.dpr],([r,i])=>{r==null||r.setPixelRatio(i)}),T([e,t.size],([r,i])=>{var o;(o=r==null?void 0:r.xr)!=null&&o.isPresenting||r==null||r.setSize(i.width,i.height)}),T([e,t.shadows],([r,i])=>{r&&(r.shadowMap.enabled=!!i,i&&i!==!0?r.shadowMap.type=i:i===!0&&(r.shadowMap.type=Be))}),T([e,t.toneMapping],([r,i])=>{r&&(r.toneMapping=i)}),T([e,t.useLegacyLights],([r,i])=>{r&&i&&(r.useLegacyLights=i)}),{createRenderer:n}},We=()=>N("threlte-internal-context");function Pe(t){let e,n;return e=new Ke({props:{object:t[0].scene,$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){oe(e.$$.fragment)},l(r){ie(e.$$.fragment,r)},m(r,i){ne(e,r,i),n=!0},p(r,i){const o={};i&131072&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){re(e,r)}}}function Ut(t){let e;const n=t[15].default,r=j(n,t,t[17],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,o){r&&r.p&&(!e||o&131072)&&B(r,n,i,i[17],e?L(n,i[17],o,null):H(i[17]),null)},i(i){e||(S(r,i),e=!0)},o(i){M(r,i),e=!1},d(i){r&&r.d(i)}}}function qt(t){let e,n,r,i,o=t[2]&&Pe(t);return{c(){e=lt("canvas"),o&&o.c(),this.h()},l(s){e=at(s,"CANVAS",{class:!0});var a=ct(e);o&&o.l(a),a.forEach(te),this.h()},h(){st(e,"class","svelte-o3oskp")},m(s,a){he(s,e,a),o&&o.m(e,null),t[16](e),n=!0,r||(i=ot(t[4].call(null,e)),r=!0)},p(s,[a]){s[2]?o?(o.p(s,a),a&4&&S(o,1)):(o=Pe(s),o.c(),S(o,1),o.m(e,null)):o&&(fe(),M(o,1,1,()=>{o=null}),de())},i(s){n||(S(o),n=!0)},o(s){M(o),n=!1},d(s){s&&te(e),o&&o.d(),t[16](null),r=!1,i()}}}function Yt(t,e,n){let r,{$$slots:i={},$$scope:o}=e,{colorManagementEnabled:s=!0}=e,{colorSpace:a="srgb"}=e,{dpr:c=be?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:u=void 0}=e,{shadows:f=Be}=e,{size:d=void 0}=e,{toneMapping:m=gt}=e,{useLegacyLights:h=!(Kt>=155)}=e,{autoRender:b=!0}=e,v,g=R(!1);Z(t,g,x=>n(2,r=x));const E=R(d),{parentSize:p,parentSizeAction:y}=Ot(),I=kt({colorManagementEnabled:s,colorSpace:a,dpr:c,renderMode:l,parentSize:p,autoRender:b,shadows:f,toneMapping:m,useLegacyLights:h,userSize:E}),G=We(),C=I;T([g,C.autoRender],([x,w])=>(x&&w?C.autoRenderTask.start():C.autoRenderTask.stop(),()=>{C.autoRenderTask.stop()})),Gt();const{createRenderer:Q}=Wt(C);ye(()=>{Q(v,u),C.renderer.setAnimationLoop(x=>{G.dispose(),C.scheduler.run(x),G.resetFrameInvalidation()}),g.set(!0)}),V(()=>{var x;G.dispose(!0),C.scheduler.dispose(),(x=C.renderer)==null||x.dispose()});function le(x){ut[x?"unshift":"push"](()=>{v=x,n(1,v)})}return t.$$set=x=>{"colorManagementEnabled"in x&&n(5,s=x.colorManagementEnabled),"colorSpace"in x&&n(6,a=x.colorSpace),"dpr"in x&&n(7,c=x.dpr),"renderMode"in x&&n(8,l=x.renderMode),"rendererParameters"in x&&n(9,u=x.rendererParameters),"shadows"in x&&n(10,f=x.shadows),"size"in x&&n(11,d=x.size),"toneMapping"in x&&n(12,m=x.toneMapping),"useLegacyLights"in x&&n(13,h=x.useLegacyLights),"autoRender"in x&&n(14,b=x.autoRender),"$$scope"in x&&n(17,o=x.$$scope)},t.$$.update=()=>{t.$$.dirty&2048&&E.set(d),t.$$.dirty&64&&C.colorSpace.set(a),t.$$.dirty&128&&C.dpr.set(c),t.$$.dirty&256&&C.renderMode.set(l),t.$$.dirty&16384&&C.autoRender.set(b),t.$$.dirty&1024&&C.shadows.set(f),t.$$.dirty&4096&&C.toneMapping.set(m)},[C,v,r,g,y,s,a,c,l,u,f,d,m,h,b,i,le,o]}class Xr extends q{constructor(e){super(),Y(this,e,Yt,qt,J,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function Jt(t){let e;const n=t[9].default,r=j(n,t,t[8],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,[o]){r&&r.p&&(!e||o&256)&&B(r,n,i,i[8],e?L(n,i[8],o,null):H(i[8]),null)},i(i){e||(S(r,i),e=!0)},o(i){M(r,i),e=!1},d(i){r&&r.d(i)}}}const Te="threlte-disposable-object-context";function Xt(t,e,n){let r,i,{$$slots:o={},$$scope:s}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=We();let{object:u=void 0}=e,f=u,{dispose:d=void 0}=e;const m=N(Te);Z(t,m,v=>n(7,i=v));const h=R(d??i??!0);Z(t,h,v=>n(6,r=v)),O(Te,h);let b=r?a(u):[];return c(b),V(()=>{l(b)}),t.$$set=v=>{"object"in v&&n(2,u=v.object),"dispose"in v&&n(3,d=v.dispose),"$$scope"in v&&n(8,s=v.$$scope)},t.$$.update=()=>{t.$$.dirty&136&&h.set(d??i??!0),t.$$.dirty&116&&u!==f&&(l(b),n(5,b=r?a(u):[]),c(b),n(4,f=u))},[m,h,u,d,f,b,r,i,s,o]}class Qt extends q{constructor(e){super(),Y(this,e,Xt,Jt,J,{object:2,dispose:3})}}const $t=/^\s*class\s+/,er=t=>typeof t!="function"?!1:$t.test(t.toString()),tr=t=>Array.isArray(t),Ve=(t,e)=>er(t)?tr(e)?new t(...e):new t:t,rr=t=>"isObject3D"in t,Ee=t=>"dispose"in t,Ue=(t,e)=>{if(e.includes(".")){const n=e.split("."),r=n.pop();for(let i=0;i<n.length;i+=1)t=t[n[i]];return{target:t,key:r}}else return{target:t,key:e}},ue=Symbol("initialValueBeforeAttach"),nr=()=>{const{invalidate:t}=X();let e=!1,n=ue,r,i,o;const s=(c,l,u)=>{if(a(),!u){const f=c;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")r=u(l,c);else{const{target:f,key:d}=Ue(l,u);n=f[d],f[d]=c,i=f,o=d}e=!0,t()}},a=()=>{e&&(r?(r(),r=void 0):i&&o&&n!==ue&&(i[o]=n,n=ue,i=void 0,o=void 0),e=!1,t())};return V(()=>{a()}),{update:s}},ir=t=>t&&t.isCamera,qe=t=>t&&t.isOrthographicCamera,Ye=t=>t&&t.isPerspectiveCamera,or=t=>Ye(t)||qe(t),sr=()=>{const{invalidate:t,size:e,camera:n}=X();let r,i;V(()=>{i==null||i()});const o=c=>{r&&(qe(r)?(r.left=c.width/-2,r.right=c.width/2,r.top=c.height/2,r.bottom=c.height/-2,r.updateProjectionMatrix(),r.updateMatrixWorld(),t()):Ye(r)&&(r.aspect=c.width/c.height,r.updateProjectionMatrix(),r.updateMatrixWorld(),t()))};return{update:(c,l)=>{if(i==null||i(),l||!or(c)){r=void 0;return}r=c,i=e.subscribe(o)},makeDefaultCamera:(c,l)=>{!ir(c)||!l||(n.set(c),t())}}},Je=()=>{const t=xe(),e=(r,i)=>{const o=t.$$.callbacks[r];o&&o.forEach(s=>{s(i)})};return Object.defineProperty(e,"hasEventListener",{value:r=>!!t.$$.callbacks[r],enumerable:!0}),e},ar=()=>{const t=Je(),e=[];let n,r=!1;const i=()=>{e.forEach(a=>a()),e.length=0,t("create",{ref:n,cleanup:a=>{e.push(a)}})},o=s=>{n=s,r&&i()};return ye(()=>{i(),r=!0}),V(()=>{e.forEach(s=>s())}),{updateRef:o}},ke=t=>!!(t!=null&&t.addEventListener),cr=()=>{const t=Je(),e=xe(),n=c=>{c!=null&&c.type&&t(c.type,c)},r=(c,l)=>{ke(c)&&l.forEach(u=>{c.removeEventListener(u,n)})},i=(c,l)=>{ke(c)&&l.forEach(u=>{c.addEventListener(u,n)})},o=R(),s=R([]);return T([o,s],([c,l])=>(i(c,l),()=>r(c,l))),ye(()=>{s.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{o.set(c)}}},lr=t=>{const n=N("threlte-plugin-context");if(!n)return;const r=Object.values(n).map(l=>l(t)).filter(Boolean),i=r.flatMap(l=>l.pluginProps??[]);let o=[];return V(()=>{o.forEach(l=>l())}),{updateRef:l=>{o.forEach(u=>u()),o=[],r.forEach(u=>{var d;const f=(d=u.onRefChange)==null?void 0:d.call(u,l);f&&o.push(f)})},updateProps:l=>{r.forEach(u=>{var f;(f=u.onPropsChange)==null||f.call(u,l)})},updateRestProps:l=>{r.forEach(u=>{var f;(f=u.onRestPropsChange)==null||f.call(u,l)})},pluginsProps:i}},ur=new Set(["$$scope","$$slots","type","args","attach","instance"]),fr=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),dr=t=>typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t>"u"||t===null,Oe=(t,e,n)=>{var r,i,o;return!Array.isArray(n)&&typeof n=="number"&&typeof((r=t[e])==null?void 0:r.setScalar)=="function"&&!((i=t[e])!=null&&i.isColor)?(s,a,c)=>{s[a].setScalar(c)}:typeof((o=t[e])==null?void 0:o.set)=="function"?Array.isArray(n)?(s,a,c)=>{s[a].set(...c)}:(s,a,c)=>{s[a].set(c)}:(s,a,c)=>{s[a]=c}},hr=()=>{const{invalidate:t}=X(),e=new Map,n=new Map,r=(o,s,a,c)=>{if(dr(a)){const f=e.get(s);if(f&&f.instance===o&&f.value===a)return;e.set(s,{instance:o,value:a})}const{key:l,target:u}=Ue(o,s);if(a!=null){const f=n.get(s);if(f)f(u,l,a);else{const d=Oe(u,l,a);n.set(s,d),d(u,l,a)}}else Oe(u,l,a)(u,l,a);c.manualCamera||fr.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(o,s,a)=>{var c;for(const l in s)!ur.has(l)&&!((c=a.pluginsProps)!=null&&c.includes(l))&&r(o,l,s[l],a),t()}}},mr=t=>({ref:t&2}),Re=t=>({ref:t[1]}),vr=t=>({ref:t&2}),Ne=t=>({ref:t[1]});function ze(t){let e,n;return e=new Qt({props:{object:t[1],dispose:t[0]}}),{c(){oe(e.$$.fragment)},l(r){ie(e.$$.fragment,r)},m(r,i){ne(e,r,i),n=!0},p(r,i){const o={};i&2&&(o.object=r[1]),i&1&&(o.dispose=r[0]),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){re(e,r)}}}function pr(t){let e;const n=t[10].default,r=j(n,t,t[11],Re);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,o){r&&r.p&&(!e||o&2050)&&B(r,n,i,i[11],e?L(n,i[11],o,mr):H(i[11]),Re)},i(i){e||(S(r,i),e=!0)},o(i){M(r,i),e=!1},d(i){r&&r.d(i)}}}function yr(t){let e,n;return e=new Ke({props:{object:t[1],$$slots:{default:[xr]},$$scope:{ctx:t}}}),{c(){oe(e.$$.fragment)},l(r){ie(e.$$.fragment,r)},m(r,i){ne(e,r,i),n=!0},p(r,i){const o={};i&2&&(o.object=r[1]),i&2050&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){re(e,r)}}}function xr(t){let e;const n=t[10].default,r=j(n,t,t[11],Ne);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,o){r&&r.p&&(!e||o&2050)&&B(r,n,i,i[11],e?L(n,i[11],o,vr):H(i[11]),Ne)},i(i){e||(S(r,i),e=!0)},o(i){M(r,i),e=!1},d(i){r&&r.d(i)}}}function gr(t){let e=Ee(t[1]),n,r,i,o,s,a,c=e&&ze(t);const l=[yr,pr],u=[];function f(d,m){return m&2&&(r=null),r==null&&(r=!!rr(d[1])),r?0:1}return i=f(t,-1),o=u[i]=l[i](t),{c(){c&&c.c(),n=dt(),o.c(),s=_e()},l(d){c&&c.l(d),n=ft(d),o.l(d),s=_e()},m(d,m){c&&c.m(d,m),he(d,n,m),u[i].m(d,m),he(d,s,m),a=!0},p(d,[m]){m&2&&(e=Ee(d[1])),e?c?(c.p(d,m),m&2&&S(c,1)):(c=ze(d),c.c(),S(c,1),c.m(n.parentNode,n)):c&&(fe(),M(c,1,1,()=>{c=null}),de());let h=i;i=f(d,m),i===h?u[i].p(d,m):(fe(),M(u[h],1,1,()=>{u[h]=null}),de(),o=u[i],o?o.p(d,m):(o=u[i]=l[i](d),o.c()),S(o,1),o.m(s.parentNode,s))},i(d){a||(S(c),S(o),a=!0)},o(d){M(c),M(o),a=!1},d(d){d&&(te(n),te(s)),c&&c.d(d),u[i].d(d)}}}function br(t,e,n){const r=["is","args","attach","manual","makeDefault","dispose","ref"];let i=we(e,r),o,{$$slots:s={},$$scope:a}=e,{is:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:d=void 0}=e,{dispose:m=void 0}=e;const h=Ze();Z(t,h,w=>n(9,o=w));const b=ar();let v=Ve(c,l);b.updateRef(v);let g=!1;const E=()=>{if(!g){g=!0;return}n(1,v=Ve(c,l)),b.updateRef(v)};let{ref:p=v}=e;const y=Nt(v),I=lr({ref:v,props:e}),G=(I==null?void 0:I.pluginsProps)??[],C=hr(),Q=sr(),le=nr(),x=cr();return t.$$set=w=>{n(23,e=Ce(Ce({},e),Se(w))),n(22,i=we(e,r)),"is"in w&&n(4,c=w.is),"args"in w&&n(5,l=w.args),"attach"in w&&n(6,u=w.attach),"manual"in w&&n(7,f=w.manual),"makeDefault"in w&&n(8,d=w.makeDefault),"dispose"in w&&n(0,m=w.dispose),"ref"in w&&n(3,p=w.ref),"$$scope"in w&&n(11,a=w.$$scope)},t.$$.update=()=>{t.$$.dirty&48&&E(),t.$$.dirty&2&&n(3,p=v),t.$$.dirty&2&&y.set(v),C.updateProps(v,i,{manualCamera:f,pluginsProps:G}),t.$$.dirty&130&&Q.update(v,f),t.$$.dirty&258&&Q.makeDefaultCamera(v,d),t.$$.dirty&578&&le.update(v,o,u),t.$$.dirty&2&&x.updateRef(v),t.$$.dirty&2&&(I==null||I.updateRef(v)),I==null||I.updateProps(e),I==null||I.updateRestProps(i)},e=Se(e),[m,v,h,p,c,l,u,f,d,o,s,a]}let Xe=class extends q{constructor(e){super(),Y(this,e,br,gr,J,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const Dr={},_r=(t,e)=>{const n=Dr[e]||bt[e];if(!n)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...t,props:{...t.props,is:n}}},wr=t=>new Proxy(class{},{construct(e,[n]){const r=n;return new Xe(_r(r,t))}}),$r=new Proxy(class{},{construct(t,[e]){const n=e;return new Xe(n)},get(t,e){return wr(e)}});function en(t,e,n){if(!be)return{task:void 0,start:()=>{},stop:()=>{},started:ht(!1)};let r,i,o;z.isKey(t)?(r=t,i=e,o=n):(r=Symbol("useTask"),i=t,o=e);const s=X();let a=s.mainStage;if(o){if(o.stage)if(z.isValue(o.stage))a=o.stage;else{const m=s.scheduler.getStage(o.stage);if(!m)throw new Error(`No stage found with key ${o.stage.toString()}`);a=m}else if(o.after)if(Array.isArray(o.after))for(let m=0;m<o.after.length;m++){const h=o.after[m];if(z.isValue(h)){a=h.stage;break}}else z.isValue(o.after)&&(a=o.after.stage);else if(o.before)if(Array.isArray(o.before))for(let m=0;m<o.before.length;m++){const h=o.before[m];if(z.isValue(h)){a=h.stage;break}}else z.isValue(o.before)&&(a=o.before.stage)}const{autoInvalidations:c}=N("threlte-internal-context"),l=R(!1),u=a.createTask(r,i,o),f=()=>{l.set(!0),((o==null?void 0:o.autoInvalidate)??!0)&&c.add(i),u.start()},d=()=>{l.set(!0),((o==null?void 0:o.autoInvalidate)??!0)&&c.delete(i),u.stop()};return(o==null?void 0:o.autoStart)??!0?f():d(),V(()=>{a&&a.removeTask(r)}),{task:u,start:f,stop:d,started:{subscribe:l.subscribe}}}const tn=()=>{const t=xe(),e=R(void 0);return T(e,n=>{n&&Object.entries(t.$$.callbacks).forEach(r=>{const[i,o]=r;i in n.$$.callbacks&&Array.isArray(n.$$.callbacks[i])?n.$$.callbacks[i].push(...o):n.$$.callbacks[i]=o})}),e};new ge;new ge;new ge;new He;new He;new Dt;`${k.logdepthbuf_pars_vertex}${k.fog_pars_vertex}${k.logdepthbuf_vertex}${k.fog_vertex}`;`${k.tonemapping_fragment}${k.colorspace_fragment}`;`${k.tonemapping_fragment}${k.colorspace_fragment}`;const Cr=`

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
`,Sr=`

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
`,Mr=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Ir=Mr,Pr=`
	${Cr}
	${Sr}
`;`${Ir}${Pr}${k.tonemapping_fragment}${k.colorspace_fragment}`;for(let t=0;t<256;t++)(t<16?"0":"")+t.toString(16);new _t(-1,1,1,-1,0,1);class Tr extends wt{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}}new Tr;var Qe={exports:{}};Qe.exports=ae;Qe.exports.default=ae;function ae(t,e,n){n=n||2;var r=e&&e.length,i=r?e[0]*n:t.length,o=$e(t,0,i,n,!0),s=[];if(!o||o.next===o.prev)return s;var a,c,l,u,f,d,m;if(r&&(o=Rr(t,e,o,n)),t.length>80*n){a=l=t[0],c=u=t[1];for(var h=n;h<i;h+=n)f=t[h],d=t[h+1],f<a&&(a=f),d<c&&(c=d),f>l&&(l=f),d>u&&(u=d);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return K(o,s,n,a,c,m,0),s}function $e(t,e,n,r,i){var o,s;if(i===pe(t,e,n,r)>0)for(o=e;o<n;o+=r)s=Ae(o,t[o],t[o+1],s);else for(o=n-r;o>=e;o-=r)s=Ae(o,t[o],t[o+1],s);return s&&ce(s,s.next)&&(U(s),s=s.next),s}function A(t,e){if(!t)return t;e||(e=t);var n=t,r;do if(r=!1,!n.steiner&&(ce(n,n.next)||D(n.prev,n,n.next)===0)){if(U(n),n=e=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==e);return e}function K(t,e,n,r,i,o,s){if(t){!s&&o&&jr(t,r,i,o);for(var a=t,c,l;t.prev!==t.next;){if(c=t.prev,l=t.next,o?Er(t,r,i,o):Vr(t)){e.push(c.i/n|0),e.push(t.i/n|0),e.push(l.i/n|0),U(t),t=l.next,a=l.next;continue}if(t=l,t===a){s?s===1?(t=kr(A(t),e,n),K(t,e,n,r,i,o,2)):s===2&&Or(t,e,n,r,i,o):K(A(t),e,n,r,i,o,1);break}}}}function Vr(t){var e=t.prev,n=t,r=t.next;if(D(e,n,r)>=0)return!1;for(var i=e.x,o=n.x,s=r.x,a=e.y,c=n.y,l=r.y,u=i<o?i<s?i:s:o<s?o:s,f=a<c?a<l?a:l:c<l?c:l,d=i>o?i>s?i:s:o>s?o:s,m=a>c?a>l?a:l:c>l?c:l,h=r.next;h!==e;){if(h.x>=u&&h.x<=d&&h.y>=f&&h.y<=m&&F(i,a,o,c,s,l,h.x,h.y)&&D(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function Er(t,e,n,r){var i=t.prev,o=t,s=t.next;if(D(i,o,s)>=0)return!1;for(var a=i.x,c=o.x,l=s.x,u=i.y,f=o.y,d=s.y,m=a<c?a<l?a:l:c<l?c:l,h=u<f?u<d?u:d:f<d?f:d,b=a>c?a>l?a:l:c>l?c:l,v=u>f?u>d?u:d:f>d?f:d,g=me(m,h,e,n,r),E=me(b,v,e,n,r),p=t.prevZ,y=t.nextZ;p&&p.z>=g&&y&&y.z<=E;){if(p.x>=m&&p.x<=b&&p.y>=h&&p.y<=v&&p!==i&&p!==s&&F(a,u,c,f,l,d,p.x,p.y)&&D(p.prev,p,p.next)>=0||(p=p.prevZ,y.x>=m&&y.x<=b&&y.y>=h&&y.y<=v&&y!==i&&y!==s&&F(a,u,c,f,l,d,y.x,y.y)&&D(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;p&&p.z>=g;){if(p.x>=m&&p.x<=b&&p.y>=h&&p.y<=v&&p!==i&&p!==s&&F(a,u,c,f,l,d,p.x,p.y)&&D(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;y&&y.z<=E;){if(y.x>=m&&y.x<=b&&y.y>=h&&y.y<=v&&y!==i&&y!==s&&F(a,u,c,f,l,d,y.x,y.y)&&D(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kr(t,e,n){var r=t;do{var i=r.prev,o=r.next.next;!ce(i,o)&&et(i,r,r.next,o)&&W(i,o)&&W(o,i)&&(e.push(i.i/n|0),e.push(r.i/n|0),e.push(o.i/n|0),U(r),U(r.next),r=t=o),r=r.next}while(r!==t);return A(r)}function Or(t,e,n,r,i,o){var s=t;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&Lr(s,a)){var c=tt(s,a);s=A(s,s.next),c=A(c,c.next),K(s,e,n,r,i,o,0),K(c,e,n,r,i,o,0);return}a=a.next}s=s.next}while(s!==t)}function Rr(t,e,n,r){var i=[],o,s,a,c,l;for(o=0,s=e.length;o<s;o++)a=e[o]*r,c=o<s-1?e[o+1]*r:t.length,l=$e(t,a,c,r,!1),l===l.next&&(l.steiner=!0),i.push(Hr(l));for(i.sort(Nr),o=0;o<i.length;o++)n=zr(i[o],n);return n}function Nr(t,e){return t.x-e.x}function zr(t,e){var n=Ar(t,e);if(!n)return e;var r=tt(n,t);return A(r,r.next),A(n,n.next)}function Ar(t,e){var n=e,r=t.x,i=t.y,o=-1/0,s;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var a=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=r&&a>o&&(o=a,s=n.x<n.next.x?n:n.next,a===r))return s}n=n.next}while(n!==e);if(!s)return null;var c=s,l=s.x,u=s.y,f=1/0,d;n=s;do r>=n.x&&n.x>=l&&r!==n.x&&F(i<u?r:o,i,l,u,i<u?o:r,i,n.x,n.y)&&(d=Math.abs(i-n.y)/(r-n.x),W(n,t)&&(d<f||d===f&&(n.x>s.x||n.x===s.x&&Fr(s,n)))&&(s=n,f=d)),n=n.next;while(n!==c);return s}function Fr(t,e){return D(t.prev,t,e.prev)<0&&D(e.next,t,t.next)<0}function jr(t,e,n,r){var i=t;do i.z===0&&(i.z=me(i.x,i.y,e,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,Br(i)}function Br(t){var e,n,r,i,o,s,a,c,l=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,r=n,a=0,e=0;e<l&&(a++,r=r.nextZ,!!r);e++);for(c=l;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,c--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;n=r}o.nextZ=null,l*=2}while(s>1);return t}function me(t,e,n,r,i){return t=(t-n)*i|0,e=(e-r)*i|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Hr(t){var e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function F(t,e,n,r,i,o,s,a){return(i-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(r-a)>=(n-s)*(e-a)&&(n-s)*(o-a)>=(i-s)*(r-a)}function Lr(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Gr(t,e)&&(W(t,e)&&W(e,t)&&Zr(t,e)&&(D(t.prev,t,e.prev)||D(t,e.prev,e))||ce(t,e)&&D(t.prev,t,t.next)>0&&D(e.prev,e,e.next)>0)}function D(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ce(t,e){return t.x===e.x&&t.y===e.y}function et(t,e,n,r){var i=ee(D(t,e,n)),o=ee(D(t,e,r)),s=ee(D(n,r,t)),a=ee(D(n,r,e));return!!(i!==o&&s!==a||i===0&&$(t,n,e)||o===0&&$(t,r,e)||s===0&&$(n,t,r)||a===0&&$(n,e,r))}function $(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ee(t){return t>0?1:t<0?-1:0}function Gr(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&et(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function W(t,e){return D(t.prev,t,t.next)<0?D(t,e,t.next)>=0&&D(t,t.prev,e)>=0:D(t,e,t.prev)<0||D(t,t.next,e)<0}function Zr(t,e){var n=t,r=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r}function tt(t,e){var n=new ve(t.i,t.x,t.y),r=new ve(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=i,i.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function Ae(t,e,n,r){var i=new ve(t,e,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function U(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ve(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ae.deviation=function(t,e,n,r){var i=e&&e.length,o=i?e[0]*n:t.length,s=Math.abs(pe(t,0,o,n));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*n,u=a<c-1?e[a+1]*n:t.length;s-=Math.abs(pe(t,l,u,n))}var f=0;for(a=0;a<r.length;a+=3){var d=r[a]*n,m=r[a+1]*n,h=r[a+2]*n;f+=Math.abs((t[d]-t[h])*(t[m+1]-t[d+1])-(t[d]-t[m])*(t[h+1]-t[d+1]))}return s===0&&f===0?0:Math.abs((f-s)/s)};function pe(t,e,n,r){for(var i=0,o=e,s=n-r;o<n;o+=r)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}ae.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)n.vertices.push(t[i][o][s]);i>0&&(r+=t[i-1].length,n.holes.push(r))}return n};new Le;new Le;var Fe;(t=>{function e(i){let o=i.slice();return o.sort(t.POINT_COMPARATOR),t.makeHullPresorted(o)}t.makeHull=e;function n(i){if(i.length<=1)return i.slice();let o=[];for(let a=0;a<i.length;a++){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],u=o[o.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))o.pop();else break}o.push(c)}o.pop();let s=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;s.length>=2;){const l=s[s.length-1],u=s[s.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))s.pop();else break}s.push(c)}return s.pop(),o.length==1&&s.length==1&&o[0].x==s[0].x&&o[0].y==s[0].y?o:o.concat(s)}t.makeHullPresorted=n;function r(i,o){return i.x<o.x?-1:i.x>o.x?1:i.y<o.y?-1:i.y>o.y?1:0}t.POINT_COMPARATOR=r})(Fe||(Fe={}));export{Xr as C,jt as H,$r as T,X as a,en as b,Jr as c,P as d,tn as f,Ze as u,T as w};
