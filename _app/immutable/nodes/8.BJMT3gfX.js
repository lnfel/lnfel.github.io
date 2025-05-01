var am=Object.defineProperty;var nm=(e,t,r)=>t in e?am(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var $s=(e,t,r)=>nm(e,typeof t!="symbol"?t+"":t,r);import{s as sm,n as yi,r as om,d as um}from"../chunks/DYL6wxSU.js";import{S as lm,i as dm,d as jt,b as pm,c as Ue,q as cm,e as Qe,f as pt,g as xr,h as kr,k as _i,l as ct,m as Sr}from"../chunks/C-HYWZlc.js";import{e as hm}from"../chunks/CyXxgf-f.js";import{_ as Kt}from"../chunks/C1FmrZbK.js";/*!
 * ONNX Runtime Web v1.21.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ea=Object.defineProperty,fm=Object.getOwnPropertyDescriptor,mm=Object.getOwnPropertyNames,gm=Object.prototype.hasOwnProperty,ym=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),pr=(e,t)=>{for(var r in t)Ea(e,r,{get:t[r],enumerable:!0})},_m=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of mm(t))!gm.call(e,n)&&n!==r&&Ea(e,n,{get:()=>t[n],enumerable:!(a=fm(t,n))||a.enumerable});return e},Lr=e=>_m(Ea({},"__esModule",{value:!0}),e),Zt,ht,Dt,vs,rd,id=P(()=>{Zt=new Map,ht=[],Dt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Zt.get(e);if(a===void 0)Zt.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=ht.indexOf(e);n!==-1&&ht.splice(n,1);for(let i=0;i<ht.length;i++)if(Zt.get(ht[i]).priority<=r){ht.splice(i,0,e);return}ht.push(e)}return}throw new TypeError("not a valid backend")},vs=async e=>{let t=Zt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},rd=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),a=r.length===0?ht:r,n,i=[],s=new Set;for(let l of a){let d=await vs(l);typeof d=="string"?i.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${i.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of i)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),wm=P(()=>{id()}),ad,bm=P(()=>{ad="1.21.1"}),wi,Pe,nd=P(()=>{bm(),wi="warning",Pe={wasm:{},webgl:{},webgpu:{},versions:{common:ad},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);wi=e}},get logLevel(){return wi}},Object.defineProperty(Pe,"logLevel",{enumerable:!0})}),fe,$m=P(()=>{nd(),fe=Pe}),sd,od,vm=P(()=>{sd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let n,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[3]):(n=e.dims[3],i=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=i*n,h=0,f=c,g=c*2,y=-1;s==="RGBA"?(h=0,f=c,g=c*2,y=c*3):s==="RGB"?(h=0,f=c,g=c*2):s==="RBG"&&(h=0,g=c,f=c*2);for(let w=0;w<i;w++)for(let x=0;x<n;x++){let $=(e.data[h++]-d[0])*l[0],b=(e.data[f++]-d[1])*l[1],S=(e.data[g++]-d[2])*l[2],k=y===-1?255:(e.data[y++]-d[3])*l[3];a.fillStyle="rgba("+$+","+b+","+S+","+k+")",a.fillRect(x,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},od=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let n,i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[1],s=e.dims[3]):(n=e.dims[3],i=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=i*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,g=0,y=1,w=2,x=3,$=0,b=h,S=h*2,k=-1;u==="RGBA"?($=0,b=h,S=h*2,k=h*3):u==="RGB"?($=0,b=h,S=h*2):u==="RBG"&&($=0,S=h,b=h*2),a=r.createImageData(n,i);for(let T=0;T<i*n;g+=f,y+=f,w+=f,x+=f,T++)a.data[g]=(e.data[$++]-c[0])*d[0],a.data[y]=(e.data[b++]-c[1])*d[1],a.data[w]=(e.data[S++]-c[2])*d[2],a.data[x]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return a}}),Tr,ud,ld,dd,pd,cd,xm=P(()=>{Ca(),Tr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,n=t.norm??{mean:255,bias:0},i,s;typeof n.mean=="number"?i=[n.mean,n.mean,n.mean,n.mean]:i=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,f=0,g=1,y=2,w=3,x=0,$=d,b=d*2,S=-1;u==="RGB"&&(h=3,f=0,g=1,y=2,w=-1),l==="RGBA"?S=d*3:l==="RBG"?(x=0,b=d,$=d*2):l==="BGR"&&(b=0,$=d,x=d*2);for(let k=0;k<d;k++,f+=h,y+=h,g+=h,w+=h)c[x++]=(e[f]+s[0])/i[0],c[$++]=(e[g]+s[1])/i[1],c[b++]=(e[y]+s[2])/i[2],S!==-1&&w!==-1&&(c[S++]=(e[w]+s[3])/i[3]);return l==="RGBA"?new Be("float32",c,[1,4,r,a]):new Be("float32",c,[1,3,r,a])},ud=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let f=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=f,u.width=g}else u.tensorFormat="RGBA",u.height=f,u.width=g;h.drawImage(e,0,0),s=h.getImageData(0,0,g,f).data}else throw new Error("Can not access image data")}else if(a){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let f=l();f.width=h,f.height=c;let g=d(f);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let f=e.height,g=e.width;return h.drawImage(e,0,0,g,f),s=h.getImageData(0,0,g,f).data,u.height=f,u.width=g,Tr(s,u)}else throw new Error("Can not access image data")}else{if(i)return new Promise((c,h)=>{let f=l(),g=d(f);if(!e||!g)return h();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{f.width=y.width,f.height=y.height,g.drawImage(y,0,0,f.width,f.height);let w=g.getImageData(0,0,f.width,f.height);u.height=f.height,u.width=f.width,c(Tr(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Tr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},ld=(e,t)=>{let{width:r,height:a,download:n,dispose:i}=t,s=[1,a,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:i})},dd=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:n,dispose:i})},pd=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:n,dispose:i})},cd=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),St,ar,bi,hd,km=P(()=>{St=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ar=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),bi=!1,hd=()=>{if(!bi){bi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(St.set("int64",BigInt64Array),ar.set(BigInt64Array,"int64")),t&&(St.set("uint64",BigUint64Array),ar.set(BigUint64Array,"uint64")),a?(St.set("float16",r),ar.set(r,"float16")):St.set("float16",Uint16Array)}}}),fd,md,Sm=P(()=>{Ca(),fd=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},md=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,Ca=P(()=>{vm(),xm(),km(),Sm(),Be=class{constructor(e,t,r){hd();let a,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=St.get(a);if(!s)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(a=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=St.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")a="string",s=e;else if(l==="boolean")a="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(e);else{let l=ar.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");n=u,this.cpuData=s,this.dataLocation="cpu"}let i=fd(n);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=i}static async fromImage(e,t){return ud(e,t)}static fromTexture(e,t){return ld(e,t)}static fromGpuBuffer(e,t){return dd(e,t)}static fromMLTensor(e,t){return pd(e,t)}static fromPinnedBuffer(e,t,r){return cd(e,t,r)}toDataURL(e){return sd(this,e)}toImageData(e){return od(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return md(this,e)}}}),He,gd=P(()=>{Ca(),He=Be}),Vr,$i,Je,Fe,yd=P(()=>{nd(),Vr=(e,t)=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.timeStamp(`${e}::ORT::${t}`)},$i=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Vr("CPU",s);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},Je=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||$i("BEGIN",e)},Fe=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||$i("END",e)}}),_d,Tm=P(()=>{id(),gd(),yd(),_d=class wd{constructor(t){this.handler=t}async run(t,r,a){Je();let n={},i={};if(typeof t!="object"||t===null||t instanceof He||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof He)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let f=r[h];(f===null||f instanceof He)&&(d=!0,s=!1,n[h]=f)}if(d){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let u=await this.handler.run(t,n,i),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof He?l[d]=c:l[d]=new He(c.type,c.data,c.dims)}return Fe(),l}async release(){return this.handler.dispose()}static async create(t,r,a,n){Je();let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,f=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(f=t.byteLength-h,typeof a=="number"){if(f=a,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||h+f>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(c,h,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await rd(s),d=await u.createInferenceSessionHandler(i,l);return Fe(),new wd(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),za,Im=P(()=>{Tm(),za=_d}),Em=P(()=>{}),Cm=P(()=>{}),zm=P(()=>{}),Am=P(()=>{}),Om={};pr(Om,{InferenceSession:()=>za,TRACE:()=>Vr,TRACE_FUNC_BEGIN:()=>Je,TRACE_FUNC_END:()=>Fe,Tensor:()=>He,env:()=>fe,registerBackend:()=>Dt});var je=P(()=>{wm(),$m(),Im(),gd(),Em(),Cm(),yd(),zm(),Am()}),Aa=P(()=>{}),bd={};pr(bd,{default:()=>$d});var vi,xi,$d,Rm=P(()=>{var e;kh(),At(),Oa(),vi="ort-wasm-proxy-worker",xi=((e=globalThis.self)==null?void 0:e.name)===vi,xi&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":Ra(a.wasm).then(()=>{Qa(a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:i}=a;Ya(i,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=a,i=Zr(n);postMessage({type:r,out:i});break}case"create":{let{model:n,options:i}=a;Ja(n,i).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":en(a),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:u,options:l}=a;tn(n,i,s,u,new Array(u.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},an([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":rn(a),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),$d=xi?null:t=>new Worker(t??Re,{type:"module",name:vi})}),vd={};pr(vd,{default:()=>xd});var ki,Si,xd,xs,Bm=P(()=>{var e,t;Si=(ki=import.meta.url,async function(r={}){var bs;var a,n,i=r,s=new Promise((o,p)=>{a=o,n=p}),u=typeof window=="object",l=typeof WorkerGlobalScope<"u",d=l&&((bs=self.name)==null?void 0:bs.startsWith("em-pthread"));i.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Fb||(i.Fb=new Map)).set(o,p)},i.unmountExternalData=()=>{delete i.Fb};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let h=()=>{let o=(m,_,v)=>(...I)=>{let O=Ze,M=_==null?void 0:_();I=m(...I);let W=_==null?void 0:_();return M!==W&&(m=W,v(M),_=v=null),Ze!=O?new Promise((G,te)=>{li={resolve:G,reject:te}}):I},p=m=>async(..._)=>{var v;try{if(i.Gb)throw Error("Session already started");let I=i.Gb={fc:_[0],errors:[]},O=await m(..._);if(i.Gb!==I)throw Error("Session mismatch");(v=i.Hb)==null||v.flush();let M=I.errors;if(0<M.length){let W=await Promise.all(M);if(W=W.filter(G=>G),0<W.length)throw Error(W.join(`
`))}return O}finally{i.Gb=null}};i._OrtCreateSession=o(i._OrtCreateSession,()=>i._OrtCreateSession,m=>i._OrtCreateSession=m),i._OrtRun=p(o(i._OrtRun,()=>i._OrtRun,m=>i._OrtRun=m)),i._OrtRunWithBinding=p(o(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,m=>i._OrtRunWithBinding=m)),i._OrtBindInput=o(i._OrtBindInput,()=>i._OrtBindInput,m=>i._OrtBindInput=m),h=void 0};i.jsepInit=(o,p)=>{if(h==null||h(),o==="webgpu"){[i.Hb,i.Vb,i.Zb,i.Lb,i.Yb,i.kb,i.$b,i.cc,i.Wb,i.Xb,i.ac]=p;let m=i.Hb;i.jsepRegisterBuffer=(_,v,I,O)=>m.registerBuffer(_,v,I,O),i.jsepGetBuffer=_=>m.getBuffer(_),i.jsepCreateDownloader=(_,v,I)=>m.createDownloader(_,v,I),i.jsepOnCreateSession=_=>{m.onCreateSession(_)},i.jsepOnReleaseSession=_=>{m.onReleaseSession(_)},i.jsepOnRunStart=_=>m.onRunStart(_),i.dc=(_,v)=>{m.upload(_,v)}}else if(o==="webnn"){[i.Hb,i.bc,i.Mb,i.jsepEnsureTensor,i.Nb,i.jsepDownloadTensor]=p,i.jsepReleaseTensorId=i.Mb,i.jsepUploadTensor=i.Nb;let m=i.Hb;i.jsepOnRunStart=_=>m.onRunStart(_),i.jsepOnRunEnd=m.onRunEnd.bind(m),i.jsepRegisterMLContext=(_,v)=>{m.registerMLContext(_,v)},i.jsepOnReleaseSession=_=>{m.onReleaseSession(_)},i.jsepCreateMLTensorDownloader=(_,v)=>m.createMLTensorDownloader(_,v),i.jsepRegisterMLTensor=(_,v,I,O)=>m.registerMLTensor(_,v,I,O),i.jsepCreateMLContext=_=>m.createMLContext(_),i.jsepRegisterMLConstant=(_,v,I,O,M)=>m.registerMLConstant(_,v,I,O,M,i.Fb),i.jsepRegisterGraphInput=m.registerGraphInput.bind(m),i.jsepIsGraphInput=m.isGraphInput.bind(m),i.jsepCreateTemporaryTensor=m.createTemporaryTensor.bind(m)}};var f,g,y=Object.assign({},i),w=(o,p)=>{throw p},x="";(u||l)&&(l?x=self.location.href:typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),ki&&(x=ki),x=x.startsWith("blob:")?"":x.slice(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(g=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),f=async o=>{if(ce(o))return new Promise((m,_)=>{var v=new XMLHttpRequest;v.open("GET",o,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?m(v.response):_(v.status)},v.onerror=_,v.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var $=console.log.bind(console),b=console.error.bind(console),S=$,k=b;Object.assign(i,y),y=null;var T,E,C,A,D,L,Y,ee,K,J,X,q,ne,pe=i.wasmBinary,V=!1,ce=o=>o.startsWith("file://");function B(){return T.buffer!=A.buffer&&he(),A}function U(){return T.buffer!=A.buffer&&he(),D}function ae(){return T.buffer!=A.buffer&&he(),L}function ye(){return T.buffer!=A.buffer&&he(),Y}function N(){return T.buffer!=A.buffer&&he(),ee}function de(){return T.buffer!=A.buffer&&he(),K}function Me(){return T.buffer!=A.buffer&&he(),J}function ze(){return T.buffer!=A.buffer&&he(),ne}if(d){let o=function(p){try{var m=p.data,_=m.Cb;if(_==="load"){let v=[];self.onmessage=I=>v.push(I),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let I of v)o(I);self.onmessage=o};for(let I of m.Sb)i[I]&&!i[I].proxy||(i[I]=(...O)=>{postMessage({Cb:"callHandler",Rb:I,args:O})},I=="print"&&(S=i[I]),I=="printErr"&&(k=i[I]));T=m.mc,he(),_t(m.nc)}else if(_==="run"){Wh(m.Bb),hi(m.Bb,0,0,1,0,0),fn(),oi(m.Bb),ve||(us(),ve=!0);try{qh(m.ic,m.Jb)}catch(v){if(v!="unwind")throw v}}else m.target!=="setimmediate"&&(_==="checkMailbox"?ve&&cr():_&&(k(`worker: received unknown command ${_}`),k(m)))}catch(v){throw ls(),v}};var _t,ve=!1;k=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),kc:br()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}function he(){var o=T.buffer;i.HEAP8=A=new Int8Array(o),i.HEAP16=L=new Int16Array(o),i.HEAPU8=D=new Uint8Array(o),i.HEAPU16=Y=new Uint16Array(o),i.HEAP32=ee=new Int32Array(o),i.HEAPU32=K=new Uint32Array(o),i.HEAPF32=J=new Float32Array(o),i.HEAPF64=ne=new Float64Array(o),i.HEAP64=X=new BigInt64Array(o),i.HEAPU64=q=new BigUint64Array(o)}function at(){d?startWorker(i):Z.Ca()}d||(T=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),he());var Lt,wt=0,Vt=null;function on(){if(--wt==0&&Vt){var o=Vt;Vt=null,o()}}function nt(o){throw k(o="Aborted("+o+")"),V=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),n(o),o}function un(){return{a:{L:Uh,Aa:Ph,b:Vh,$:_n,A:$n,pa:vn,X:kn,Z:Sn,qa:Tn,na:In,ga:En,ma:Cn,J:zn,Y:An,V:On,oa:Rn,W:Bn,va:Gh,E:Hh,Q:Fh,O:Kh,D:Xh,u:Qh,r:Yh,P:Jh,z:of,R:uf,ja:lf,T:df,aa:pf,M:cf,F:hf,ia:oi,sa:ff,t:mf,Ba:gf,w:wf,n:bf,m:vf,c:ai,o:xf,k:Tf,v:If,p:Ef,f:Cf,s:zf,l:Af,e:Of,j:Rf,i:Bf,g:Nf,d:Mf,da:Df,ea:Pf,fa:Uf,ba:Kn,ca:Zn,N:Xn,xa:qf,ua:Vf,h:Gf,C:Hf,G:Ff,ta:Lf,x:jf,ra:Kf,U:Zf,q:Wf,y:Xf,K:Qf,S:Yf,za:Jf,ya:em,ka:es,la:ts,_:ei,B:rs,I:is,ha:as,H:ns,a:T,wa:Jr}}}var Xr={819692:(o,p,m,_,v)=>{if(i===void 0||!i.Fb)return 1;if((o=$e(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Fb.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),_=Number(_>>>0),p+m>o.byteLength)return 3;try{let I=o.subarray(p,p+m);switch(v){case 0:U().set(I,_>>>0);break;case 1:i.dc(_,I);break;default:return 4}return 0}catch{return 4}},820407:(o,p,m)=>{i.Nb(o,U().subarray(p>>>0,p+m>>>0))},820470:()=>i.bc(),820511:o=>{i.Mb(o)},820547:()=>{i.Wb()},820578:()=>{i.Xb()},820607:()=>{i.ac()},820632:o=>i.Vb(o),820665:o=>i.Zb(o),820697:(o,p,m)=>{i.Lb(Number(o),Number(p),Number(m),!0)},820760:(o,p,m)=>{i.Lb(Number(o),Number(p),Number(m))},820817:()=>typeof wasmOffsetConverter<"u",820874:o=>{i.kb("Abs",o,void 0)},820925:o=>{i.kb("Neg",o,void 0)},820976:o=>{i.kb("Floor",o,void 0)},821029:o=>{i.kb("Ceil",o,void 0)},821081:o=>{i.kb("Reciprocal",o,void 0)},821139:o=>{i.kb("Sqrt",o,void 0)},821191:o=>{i.kb("Exp",o,void 0)},821242:o=>{i.kb("Erf",o,void 0)},821293:o=>{i.kb("Sigmoid",o,void 0)},821348:(o,p,m)=>{i.kb("HardSigmoid",o,{alpha:p,beta:m})},821427:o=>{i.kb("Log",o,void 0)},821478:o=>{i.kb("Sin",o,void 0)},821529:o=>{i.kb("Cos",o,void 0)},821580:o=>{i.kb("Tan",o,void 0)},821631:o=>{i.kb("Asin",o,void 0)},821683:o=>{i.kb("Acos",o,void 0)},821735:o=>{i.kb("Atan",o,void 0)},821787:o=>{i.kb("Sinh",o,void 0)},821839:o=>{i.kb("Cosh",o,void 0)},821891:o=>{i.kb("Asinh",o,void 0)},821944:o=>{i.kb("Acosh",o,void 0)},821997:o=>{i.kb("Atanh",o,void 0)},822050:o=>{i.kb("Tanh",o,void 0)},822102:o=>{i.kb("Not",o,void 0)},822153:(o,p,m)=>{i.kb("Clip",o,{min:p,max:m})},822222:o=>{i.kb("Clip",o,void 0)},822274:(o,p)=>{i.kb("Elu",o,{alpha:p})},822332:o=>{i.kb("Gelu",o,void 0)},822384:o=>{i.kb("Relu",o,void 0)},822436:(o,p)=>{i.kb("LeakyRelu",o,{alpha:p})},822500:(o,p)=>{i.kb("ThresholdedRelu",o,{alpha:p})},822570:(o,p)=>{i.kb("Cast",o,{to:p})},822628:o=>{i.kb("Add",o,void 0)},822679:o=>{i.kb("Sub",o,void 0)},822730:o=>{i.kb("Mul",o,void 0)},822781:o=>{i.kb("Div",o,void 0)},822832:o=>{i.kb("Pow",o,void 0)},822883:o=>{i.kb("Equal",o,void 0)},822936:o=>{i.kb("Greater",o,void 0)},822991:o=>{i.kb("GreaterOrEqual",o,void 0)},823053:o=>{i.kb("Less",o,void 0)},823105:o=>{i.kb("LessOrEqual",o,void 0)},823164:(o,p,m,_,v)=>{i.kb("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},823339:(o,p,m,_,v)=>{i.kb("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},823513:(o,p,m,_,v)=>{i.kb("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},823687:(o,p,m,_,v)=>{i.kb("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},823862:(o,p,m,_,v)=>{i.kb("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824036:(o,p,m,_,v)=>{i.kb("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824209:(o,p,m,_,v)=>{i.kb("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824382:(o,p,m,_,v)=>{i.kb("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824559:(o,p,m,_,v)=>{i.kb("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824739:(o,p,m,_,v)=>{i.kb("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},824919:o=>{i.kb("Where",o,void 0)},824972:(o,p,m)=>{i.kb("Transpose",o,{perm:p?Array.from(N().subarray(Number(p)>>>0,Number(m)>>>0)):[]})},825096:(o,p,m,_)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:$e(m),format:_?"NHWC":"NCHW"})},825229:(o,p,m,_)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:$e(m),format:_?"NHWC":"NCHW"})},825362:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te,Bt)=>{i.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:[m],group:_,kernelShape:[v],pads:[I,O],strides:[M],wIsConst:()=>!!B()[G>>>0],outputPadding:te?Array.from(N().subarray(Number(te)>>>0,Number(oe)>>>0)):[],outputShape:ge?Array.from(N().subarray(Number(ge)>>>0,Number(Te)>>>0)):[],activation:$e(Bt)})},825795:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te)=>{i.kb("ConvTranspose",o,{format:M?"NHWC":"NCHW",autoPad:p,dilations:Array.from(N().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:_,kernelShape:Array.from(N().subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),pads:Array.from(N().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(N().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!B()[W>>>0],outputPadding:G?Array.from(N().subarray(Number(G)>>>0,Number(te)>>>0)):[],outputShape:oe?Array.from(N().subarray(Number(oe)>>>0,Number(ge)>>>0)):[],activation:$e(Te)})},826456:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te,Bt)=>{i.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:[m],group:_,kernelShape:[v],pads:[I,O],strides:[M],wIsConst:()=>!!B()[G>>>0],outputPadding:te?Array.from(N().subarray(Number(te)>>>0,Number(oe)>>>0)):[],outputShape:ge?Array.from(N().subarray(Number(ge)>>>0,Number(Te)>>>0)):[],activation:$e(Bt)})},826889:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te)=>{i.kb("ConvTranspose",o,{format:M?"NHWC":"NCHW",autoPad:p,dilations:Array.from(N().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:_,kernelShape:Array.from(N().subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),pads:Array.from(N().subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(N().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!B()[W>>>0],outputPadding:G?Array.from(N().subarray(Number(G)>>>0,Number(te)>>>0)):[],outputShape:oe?Array.from(N().subarray(Number(oe)>>>0,Number(ge)>>>0)):[],activation:$e(Te)})},827550:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},827641:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te)=>{i.kb("AveragePool",o,{format:Te?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:_,storage_order:v,dilations:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],pads:G?Array.from(N().subarray(Number(G)>>>0,Number(te)>>>0)):[],strides:oe?Array.from(N().subarray(Number(oe)>>>0,Number(ge)>>>0)):[]})},828120:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},828211:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te)=>{i.kb("AveragePool",o,{format:Te?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:_,storage_order:v,dilations:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],pads:G?Array.from(N().subarray(Number(G)>>>0,Number(te)>>>0)):[],strides:oe?Array.from(N().subarray(Number(oe)>>>0,Number(ge)>>>0)):[]})},828690:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},828777:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te)=>{i.kb("MaxPool",o,{format:Te?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:_,storage_order:v,dilations:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],pads:G?Array.from(N().subarray(Number(G)>>>0,Number(te)>>>0)):[],strides:oe?Array.from(N().subarray(Number(oe)>>>0,Number(ge)>>>0)):[]})},829252:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},829339:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te)=>{i.kb("MaxPool",o,{format:Te?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:_,storage_order:v,dilations:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],kernel_shape:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],pads:G?Array.from(N().subarray(Number(G)>>>0,Number(te)>>>0)):[],strides:oe?Array.from(N().subarray(Number(oe)>>>0,Number(ge)>>>0)):[]})},829814:(o,p,m,_,v)=>{i.kb("Gemm",o,{alpha:p,beta:m,transA:_,transB:v})},829918:o=>{i.kb("MatMul",o,void 0)},829972:(o,p,m,_)=>{i.kb("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:_})},830080:(o,p,m,_)=>{i.kb("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:_})},830188:(o,p)=>{i.kb("Softmax",o,{axis:p})},830251:(o,p)=>{i.kb("Concat",o,{axis:p})},830311:(o,p,m,_,v)=>{i.kb("Split",o,{axis:p,numOutputs:m,splitSizes:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},830467:o=>{i.kb("Expand",o,void 0)},830521:(o,p)=>{i.kb("Gather",o,{axis:Number(p)})},830592:(o,p)=>{i.kb("GatherElements",o,{axis:Number(p)})},830671:(o,p)=>{i.kb("GatherND",o,{batch_dims:Number(p)})},830750:(o,p,m,_,v,I,O,M,W,G,te)=>{i.kb("Resize",o,{antialias:p,axes:m?Array.from(N().subarray(Number(m)>>>0,Number(_)>>>0)):[],coordinateTransformMode:$e(v),cubicCoeffA:I,excludeOutside:O,extrapolationValue:M,keepAspectRatioPolicy:$e(W),mode:$e(G),nearestMode:$e(te)})},831112:(o,p,m,_,v,I,O)=>{i.kb("Slice",o,{starts:p?Array.from(N().subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[],axes:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[]})},831376:o=>{i.kb("Tile",o,void 0)},831428:(o,p,m)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},831542:(o,p,m)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},831656:o=>{i.kb("Range",o,void 0)},831709:(o,p)=>{i.kb("Einsum",o,{equation:$e(p)})},831790:(o,p,m,_,v)=>{i.kb("Pad",o,{mode:p,value:m,pads:_?Array.from(N().subarray(Number(_)>>>0,Number(v)>>>0)):[]})},831933:(o,p,m,_,v,I)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!_,format:I?"NHWC":"NCHW"})},832102:(o,p,m,_,v,I)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!_,format:I?"NHWC":"NCHW"})},832271:(o,p,m)=>{i.kb("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},832368:(o,p,m)=>{i.kb("DequantizeLinear",o,{axis:p,blockSize:m})},832458:(o,p,m,_,v)=>{i.kb("GridSample",o,{align_corners:p,mode:$e(m),padding_mode:$e(_),format:v?"NHWC":"NCHW"})},832628:(o,p,m,_,v)=>{i.kb("GridSample",o,{align_corners:p,mode:$e(m),padding_mode:$e(_),format:v?"NHWC":"NCHW"})},832798:(o,p)=>{i.kb("ScatterND",o,{reduction:$e(p)})},832883:(o,p,m,_,v,I,O,M,W)=>{i.kb("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:_,scale:v,doRotary:I,qkvHiddenSizes:O?Array.from(N().subarray(Number(M)>>>0,Number(M)+O>>>0)):[],pastPresentShareBuffer:!!W})},833155:o=>{i.kb("BiasAdd",o,void 0)},833210:o=>{i.kb("BiasSplitGelu",o,void 0)},833271:o=>{i.kb("FastGelu",o,void 0)},833327:(o,p,m,_,v,I,O,M,W,G,te,oe,ge,Te,Bt,im)=>{i.kb("Conv",o,{format:oe?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(N().subarray(Number(m)>>>0,Number(_)>>>0)):[],group:v,kernel_shape:I?Array.from(N().subarray(Number(I)>>>0,Number(O)>>>0)):[],pads:M?Array.from(N().subarray(Number(M)>>>0,Number(W)>>>0)):[],strides:G?Array.from(N().subarray(Number(G)>>>0,Number(te)>>>0)):[],w_is_const:()=>!!B()[Number(ge)>>>0],activation:$e(Te),activation_params:Bt?Array.from(Me().subarray(Number(Bt)>>>0,Number(im)>>>0)):[]})},833911:o=>{i.kb("Gelu",o,void 0)},833963:(o,p,m,_,v,I,O,M,W)=>{i.kb("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:_,softcap:v,doRotary:I,rotaryInterleaved:O,smoothSoftmax:M,localWindowSize:W})},834180:(o,p,m,_)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!_})},834291:(o,p,m,_)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!_})},834402:(o,p,m,_,v,I)=>{i.kb("MatMulNBits",o,{k:p,n:m,accuracyLevel:_,bits:v,blockSize:I})},834529:(o,p,m,_,v,I)=>{i.kb("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:_,scale:v,doRotary:I})},834688:(o,p)=>{i.kb("QuickGelu",o,{alpha:p})},834752:(o,p,m,_,v)=>{i.kb("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:_,scale:v})},834891:(o,p,m)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},834993:(o,p,m)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},835095:(o,p,m,_)=>{i.kb("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:_})},835216:o=>{i.$b(o)},835250:(o,p)=>i.cc(Number(o),Number(p),i.Gb.fc,i.Gb.errors)};function Ph(o,p,m){return Ln(async()=>{await i.Yb(Number(o),Number(p),Number(m))})}function Uh(){return typeof wasmOffsetConverter<"u"}class Qr{constructor(p){$s(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var ln=o=>{o.terminate(),o.onmessage=()=>{}},Yr=[],dn=o=>{ot.length==0&&(gn(),mn(ot[0]));var p=ot.pop();if(!p)return 6;Gt.push(p),bt[o.Bb]=p,p.Bb=o.Bb;var m={Cb:"run",ic:o.hc,Jb:o.Jb,Bb:o.Bb};return p.postMessage(m,o.Pb),0},st=0,_e=(o,p,...m)=>{for(var _=2*m.length,v=gi(),I=mi(8*_),O=I>>>3,M=0;M<m.length;M++){var W=m[M];typeof W=="bigint"?(X[O+2*M]=1n,X[O+2*M+1]=W):(X[O+2*M]=0n,ze()[O+2*M+1>>>0]=W)}return o=ds(o,0,_,I,p),vr(v),o};function Jr(o){if(d)return _e(0,1,o);if(C=o,!(0<st)){for(var p of Gt)ln(p);for(p of ot)ln(p);ot=[],Gt=[],bt={},V=!0}w(0,new Qr(o))}function pn(o){if(d)return _e(1,0,o);ei(o)}var ei=o=>{if(C=o,d)throw pn(o),"unwind";Jr(o)},ot=[],Gt=[],cn=[],bt={},hn=o=>{var p=o.Bb;delete bt[p],ot.push(o),Gt.splice(Gt.indexOf(o),1),o.Bb=0,ps(p)};function fn(){cn.forEach(o=>o())}var mn=o=>new Promise(p=>{o.onmessage=v=>{var I=(v=v.data).Cb;if(v.Ib&&v.Ib!=br()){var O=bt[v.Ib];O?O.postMessage(v,v.Pb):k(`Internal error! Worker sent a message "${I}" to target pthread ${v.Ib}, but that thread no longer exists!`)}else I==="checkMailbox"?cr():I==="spawnThread"?dn(v):I==="cleanupThread"?hn(bt[v.jc]):I==="loaded"?(o.loaded=!0,p(o)):I==="alert"?alert(`Thread ${v.kc}: ${v.text}`):v.target==="setimmediate"?o.postMessage(v):I==="callHandler"?i[v.Rb](...v.args):I&&k(`worker sent an unknown command ${I}`)},o.onerror=v=>{throw k(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var m,_=[];for(m of[])i.propertyIsEnumerable(m)&&_.push(m);o.postMessage({Cb:"load",Sb:_,mc:T,nc:E})});function gn(){var o=new Worker(import.meta.url.startsWith("file:")?new URL(""+new URL("../assets/ort.bundle.min.DVT1aZ7z.mjs",import.meta.url).href,import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});ot.push(o)}var Wh=o=>{he();var p=de()[o+52>>>2>>>0];o=de()[o+56>>>2>>>0],fs(p,p-o),vr(p)},qh=(o,p)=>{st=0,o=ms(o,p),0<st?C=o:fi(o)};class Lh{constructor(p){this.Kb=p-24}}function Vh(o,p,m){var _=new Lh(o>>>=0);throw p>>>=0,m>>>=0,de()[_.Kb+16>>>2>>>0]=0,de()[_.Kb+4>>>2>>>0]=p,de()[_.Kb+8>>>2>>>0]=m,o}function yn(o,p,m,_){return d?_e(2,1,o,p,m,_):_n(o,p,m,_)}function _n(o,p,m,_){if(o>>>=0,m>>>=0,_>>>=0,c===void 0)return 6;var v=[];return d&&v.length===0?yn(o,p>>>=0,m,_):(o={hc:m,Bb:o,Jb:_,Pb:v},d?(o.Cb="spawnThread",postMessage(o,v),0):dn(o))}var wn=typeof TextDecoder<"u"?new TextDecoder:void 0,bn=(o,p=0,m=NaN)=>{var _=(p>>>=0)+m;for(m=p;o[m]&&!(m>=_);)++m;if(16<m-p&&o.buffer&&wn)return wn.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(_="";p<m;){var v=o[p++];if(128&v){var I=63&o[p++];if((224&v)==192)_+=String.fromCharCode((31&v)<<6|I);else{var O=63&o[p++];65536>(v=(240&v)==224?(15&v)<<12|I<<6|O:(7&v)<<18|I<<12|O<<6|63&o[p++])?_+=String.fromCharCode(v):(v-=65536,_+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else _+=String.fromCharCode(v)}return _},$e=(o,p)=>(o>>>=0)?bn(U(),o,p):"";function $n(o,p,m){return d?_e(3,1,o,p,m):0}function vn(o,p){if(d)return _e(4,1,o,p)}var xn=o=>{for(var p=0,m=0;m<o.length;++m){var _=o.charCodeAt(m);127>=_?p++:2047>=_?p+=2:55296<=_&&57343>=_?(p+=4,++m):p+=3}return p},Rt=(o,p,m)=>{var _=U();if(p>>>=0,0<m){var v=p;m=p+m-1;for(var I=0;I<o.length;++I){var O=o.charCodeAt(I);if(55296<=O&&57343>=O&&(O=65536+((1023&O)<<10)|1023&o.charCodeAt(++I)),127>=O){if(p>=m)break;_[p++>>>0]=O}else{if(2047>=O){if(p+1>=m)break;_[p++>>>0]=192|O>>6}else{if(65535>=O){if(p+2>=m)break;_[p++>>>0]=224|O>>12}else{if(p+3>=m)break;_[p++>>>0]=240|O>>18,_[p++>>>0]=128|O>>12&63}_[p++>>>0]=128|O>>6&63}_[p++>>>0]=128|63&O}}_[p>>>0]=0,o=p-v}else o=0;return o};function kn(o,p){if(d)return _e(5,1,o,p)}function Sn(o,p,m){if(d)return _e(6,1,o,p,m)}function Tn(o,p,m){return d?_e(7,1,o,p,m):0}function In(o,p){if(d)return _e(8,1,o,p)}function En(o,p,m){if(d)return _e(9,1,o,p,m)}function Cn(o,p,m,_){if(d)return _e(10,1,o,p,m,_)}function zn(o,p,m,_){if(d)return _e(11,1,o,p,m,_)}function An(o,p,m,_){if(d)return _e(12,1,o,p,m,_)}function On(o){if(d)return _e(13,1,o)}function Rn(o,p){if(d)return _e(14,1,o,p)}function Bn(o,p,m){if(d)return _e(15,1,o,p,m)}var Nn,ut,Gh=()=>nt(""),Ke=o=>{for(var p="";U()[o>>>0];)p+=Nn[U()[o++>>>0]];return p},ti={},ri={};function et(o,p,m={}){return function(_,v,I={}){var O=v.name;if(!_)throw new ut(`type "${O}" must have a positive integer typeid pointer`);if(ri.hasOwnProperty(_)){if(I.Tb)return;throw new ut(`Cannot register type '${O}' twice`)}ri[_]=v,ti.hasOwnProperty(_)&&(v=ti[_],delete ti[_],v.forEach(M=>M()))}(o,p,m)}var Mn=(o,p,m)=>{switch(p){case 1:return m?_=>B()[_>>>0]:_=>U()[_>>>0];case 2:return m?_=>ae()[_>>>1>>>0]:_=>ye()[_>>>1>>>0];case 4:return m?_=>N()[_>>>2>>>0]:_=>de()[_>>>2>>>0];case 8:return m?_=>X[_>>>3]:_=>q[_>>>3];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Hh(o,p,m){m>>>=0,et(o>>>=0,{name:p=Ke(p>>>0),fromWireType:_=>_,toWireType:function(_,v){if(typeof v!="bigint"&&typeof v!="number")throw v=v===null?"null":(_=typeof v)=="object"||_==="array"||_==="function"?v.toString():""+v,new TypeError(`Cannot convert "${v}" to ${this.name}`);return typeof v=="number"&&(v=BigInt(v)),v},Db:lt,readValueFromPointer:Mn(p,m,p.indexOf("u")==-1),Eb:null})}var lt=8;function Fh(o,p,m,_){et(o>>>=0,{name:p=Ke(p>>>0),fromWireType:function(v){return!!v},toWireType:function(v,I){return I?m:_},Db:lt,readValueFromPointer:function(v){return this.fromWireType(U()[v>>>0])},Eb:null})}var ii=[],tt=[];function ai(o){9<(o>>>=0)&&--tt[o+1]==0&&(tt[o]=void 0,ii.push(o))}var Oe=o=>{if(!o)throw new ut("Cannot use deleted val. handle = "+o);return tt[o]},De=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=ii.pop()||tt.length;return tt[p]=o,tt[p+1]=1,p}};function ni(o){return this.fromWireType(de()[o>>>2>>>0])}var jh={name:"emscripten::val",fromWireType:o=>{var p=Oe(o);return ai(o),p},toWireType:(o,p)=>De(p),Db:lt,readValueFromPointer:ni,Eb:null};function Kh(o){return et(o>>>0,jh)}var Zh=(o,p)=>{switch(p){case 4:return function(m){return this.fromWireType(Me()[m>>>2>>>0])};case 8:return function(m){return this.fromWireType(ze()[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Xh(o,p,m){m>>>=0,et(o>>>=0,{name:p=Ke(p>>>0),fromWireType:_=>_,toWireType:(_,v)=>v,Db:lt,readValueFromPointer:Zh(p,m),Eb:null})}function Qh(o,p,m,_,v){if(o>>>=0,m>>>=0,p=Ke(p>>>0),v===-1&&(v=4294967295),v=M=>M,_===0){var I=32-8*m;v=M=>M<<I>>>I}var O=p.includes("unsigned")?function(M,W){return W>>>0}:function(M,W){return W};et(o,{name:p,fromWireType:v,toWireType:O,Db:lt,readValueFromPointer:Mn(p,m,_!==0),Eb:null})}function Yh(o,p,m){function _(I){var O=de()[I>>>2>>>0];return I=de()[I+4>>>2>>>0],new v(B().buffer,I,O)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];et(o>>>=0,{name:m=Ke(m>>>0),fromWireType:_,Db:lt,readValueFromPointer:_},{Tb:!0})}function Jh(o,p){et(o>>>=0,{name:p=Ke(p>>>0),fromWireType:function(m){for(var _,v=de()[m>>>2>>>0],I=m+4,O=I,M=0;M<=v;++M){var W=I+M;M!=v&&U()[W>>>0]!=0||(O=$e(O,W-O),_===void 0?_=O:(_+="\0",_+=O),O=W+1)}return Xe(m),_},toWireType:function(m,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var v=typeof _=="string";if(!(v||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int8Array))throw new ut("Cannot pass non-string to std::string");var I=v?xn(_):_.length,O=$r(4+I+1),M=O+4;if(de()[O>>>2>>>0]=I,v)Rt(_,M,I+1);else if(v)for(v=0;v<I;++v){var W=_.charCodeAt(v);if(255<W)throw Xe(O),new ut("String has UTF-16 code units that do not fit in 8 bits");U()[M+v>>>0]=W}else for(v=0;v<I;++v)U()[M+v>>>0]=_[v];return m!==null&&m.push(Xe,O),O},Db:lt,readValueFromPointer:ni,Eb(m){Xe(m)}})}var Dn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ef=(o,p)=>{for(var m=o>>1,_=m+p/2;!(m>=_)&&ye()[m>>>0];)++m;if(32<(m<<=1)-o&&Dn)return Dn.decode(U().slice(o,m));for(m="",_=0;!(_>=p/2);++_){var v=ae()[o+2*_>>>1>>>0];if(v==0)break;m+=String.fromCharCode(v)}return m},tf=(o,p,m)=>{if(m??(m=2147483647),2>m)return 0;var _=p;m=(m-=2)<2*o.length?m/2:o.length;for(var v=0;v<m;++v){var I=o.charCodeAt(v);ae()[p>>>1>>>0]=I,p+=2}return ae()[p>>>1>>>0]=0,p-_},rf=o=>2*o.length,af=(o,p)=>{for(var m=0,_="";!(m>=p/4);){var v=N()[o+4*m>>>2>>>0];if(v==0)break;++m,65536<=v?(v-=65536,_+=String.fromCharCode(55296|v>>10,56320|1023&v)):_+=String.fromCharCode(v)}return _},nf=(o,p,m)=>{if(p>>>=0,m??(m=2147483647),4>m)return 0;var _=p;m=_+m-4;for(var v=0;v<o.length;++v){var I=o.charCodeAt(v);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&o.charCodeAt(++v)),N()[p>>>2>>>0]=I,(p+=4)+4>m)break}return N()[p>>>2>>>0]=0,p-_},sf=o=>{for(var p=0,m=0;m<o.length;++m){var _=o.charCodeAt(m);55296<=_&&57343>=_&&++m,p+=4}return p};function of(o,p,m){if(o>>>=0,p>>>=0,m=Ke(m>>>=0),p===2)var _=ef,v=tf,I=rf,O=M=>ye()[M>>>1>>>0];else p===4&&(_=af,v=nf,I=sf,O=M=>de()[M>>>2>>>0]);et(o,{name:m,fromWireType:M=>{for(var W,G=de()[M>>>2>>>0],te=M+4,oe=0;oe<=G;++oe){var ge=M+4+oe*p;oe!=G&&O(ge)!=0||(te=_(te,ge-te),W===void 0?W=te:(W+="\0",W+=te),te=ge+p)}return Xe(M),W},toWireType:(M,W)=>{if(typeof W!="string")throw new ut(`Cannot pass non-string to C++ string type ${m}`);var G=I(W),te=$r(4+G+p);return de()[te>>>2>>>0]=G/p,v(W,te+4,G+p),M!==null&&M.push(Xe,te),te},Db:lt,readValueFromPointer:ni,Eb(M){Xe(M)}})}function uf(o,p){et(o>>>=0,{Ub:!0,name:p=Ke(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function lf(o){hi(o>>>0,!l,1,!u,131072,!1),fn()}var si=o=>{if(!V)try{if(o(),!(0<st))try{d?fi(C):ei(C)}catch(p){p instanceof Qr||p=="unwind"||w(0,p)}}catch(p){p instanceof Qr||p=="unwind"||w(0,p)}};function oi(o){o>>>=0,typeof Atomics.lc=="function"&&(Atomics.lc(N(),o>>>2,o).value.then(cr),o+=128,Atomics.store(N(),o>>>2,1))}var cr=()=>{var o=br();o&&(oi(o),si(hs))};function df(o,p){(o>>>=0)==p>>>0?setTimeout(cr):d?postMessage({Ib:o,Cb:"checkMailbox"}):(o=bt[o])&&o.postMessage({Cb:"checkMailbox"})}var ui=[];function pf(o,p,m,_,v){for(p>>>=0,_/=2,ui.length=_,m=v>>>0>>>3,v=0;v<_;v++)ui[v]=X[m+2*v]?X[m+2*v+1]:ze()[m+2*v+1>>>0];return(p?Xr[p]:rm[o])(...ui)}var cf=()=>{st=0};function hf(o){o>>>=0,d?postMessage({Cb:"cleanupThread",jc:o}):hn(bt[o])}function ff(o){}var hr=(o,p)=>{var m=ri[o];if(m===void 0)throw o=os(o),m=Ke(o),Xe(o),new ut(`${p} has unknown type ${m}`);return m},Pn=(o,p,m)=>{var _=[];return o=o.toWireType(_,m),_.length&&(de()[p>>>2>>>0]=De(_)),o};function mf(o,p,m){return p>>>=0,m>>>=0,o=Oe(o>>>0),p=hr(p,"emval::as"),Pn(p,m,o)}function gf(o,p){return p>>>=0,o=Oe(o>>>0),(p=hr(p,"emval::as")).toWireType(null,o)}var fr=o=>{try{o()}catch(p){nt(p)}},dt=0,Ze=null,Un=0,mr=[],Wn={},qn={},yf=0,li=null,_f=[];function Ln(o){return function(p){if(!V){if(dt===0){var m=!1,_=!1;p((v=0)=>{if(!V&&(Un=v,m=!0,_)){dt=2,fr(()=>_s(Ze)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),v=!1;try{var I=function(){var W=N()[Ze+8>>>2>>>0];return W=Z[qn[W]],--st,W()}()}catch(W){I=W,v=!0}var O=!1;if(!Ze){var M=li;M&&(li=null,(v?M.reject:M.resolve)(I),O=!0)}if(v&&!O)throw I}}),_=!0,m||(dt=1,Ze=function(){var v=$r(65548),I=v+12;de()[v>>>2>>>0]=I,de()[v+4>>>2>>>0]=I+65536,I=mr[0];var O=Wn[I];return O===void 0&&(O=yf++,Wn[I]=O,qn[O]=I),I=O,N()[v+8>>>2>>>0]=I,v}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),fr(()=>gs(Ze)))}else dt===2?(dt=0,fr(ws),Xe(Ze),Ze=null,_f.forEach(si)):nt(`invalid state: ${dt}`);return Un}}(p=>{o().then(p)})}function wf(o){return o>>>=0,Ln(async()=>{var p=await Oe(o);return De(p)})}var gr=[];function bf(o,p,m,_){return m>>>=0,_>>>=0,(o=gr[o>>>0])(null,p=Oe(p>>>0),m,_)}var $f={},yr=o=>{var p=$f[o];return p===void 0?Ke(o):p};function vf(o,p,m,_,v){return m>>>=0,_>>>=0,v>>>=0,(o=gr[o>>>0])(p=Oe(p>>>0),p[m=yr(m)],_,v)}var Vn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function xf(o){return(o>>>=0)==0?De(Vn()):(o=yr(o),De(Vn()[o]))}var kf=o=>{var p=gr.length;return gr.push(o),p},Sf=(o,p)=>{for(var m=Array(o),_=0;_<o;++_)m[_]=hr(de()[p+4*_>>>2>>>0],"parameter "+_);return m},Gn=(o,p)=>Object.defineProperty(p,"name",{value:o});function Tf(o,p,m){var _=(p=Sf(o,p>>>0)).shift();o--;var v=`return function (obj, func, destructorsRef, args) {
`,I=0,O=[];m===0&&O.push("obj");for(var M=["retType"],W=[_],G=0;G<o;++G)O.push("arg"+G),M.push("argType"+G),W.push(p[G]),v+=`  var arg${G} = argType${G}.readValueFromPointer(args${I?"+"+I:""});
`,I+=p[G].Db;return v+=`  var rv = ${m===1?"new func":"func.call"}(${O.join(", ")});
`,_.Ub||(M.push("emval_returnValue"),W.push(Pn),v+=`  return emval_returnValue(retType, destructorsRef, rv);
`),M.push(v+`};
`),o=function(te){var oe=Function;if(!(oe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof oe} which is not a function`);var ge=Gn(oe.name||"unknownFunctionName",function(){});return ge.prototype=oe.prototype,ge=new ge,(te=oe.apply(ge,te))instanceof Object?te:ge}(M)(...W),m=`methodCaller<(${p.map(te=>te.name).join(", ")}) => ${_.name}>`,kf(Gn(m,o))}function If(o){return o=yr(o>>>0),De(i[o])}function Ef(o,p){return p>>>=0,o=Oe(o>>>0),p=Oe(p),De(o[p])}function Cf(o){9<(o>>>=0)&&(tt[o+1]+=1)}function zf(){return De([])}function Af(o){o=Oe(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return De(p)}function Of(o){return De(yr(o>>>0))}function Rf(){return De({})}function Bf(o){for(var p=Oe(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}ai(o)}function Nf(o,p,m){p>>>=0,m>>>=0,o=Oe(o>>>0),p=Oe(p),m=Oe(m),o[p]=m}function Mf(o,p){return p>>>=0,o=(o=hr(o>>>0,"_emval_take_value")).readValueFromPointer(p),De(o)}function Df(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),N()[p>>>2>>>0]=o.getUTCSeconds(),N()[p+4>>>2>>>0]=o.getUTCMinutes(),N()[p+8>>>2>>>0]=o.getUTCHours(),N()[p+12>>>2>>>0]=o.getUTCDate(),N()[p+16>>>2>>>0]=o.getUTCMonth(),N()[p+20>>>2>>>0]=o.getUTCFullYear()-1900,N()[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,N()[p+28>>>2>>>0]=o}var Hn=o=>o%4==0&&(o%100!=0||o%400==0),Fn=[0,31,60,91,121,152,182,213,244,274,305,335],jn=[0,31,59,90,120,151,181,212,243,273,304,334];function Pf(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),N()[p>>>2>>>0]=o.getSeconds(),N()[p+4>>>2>>>0]=o.getMinutes(),N()[p+8>>>2>>>0]=o.getHours(),N()[p+12>>>2>>>0]=o.getDate(),N()[p+16>>>2>>>0]=o.getMonth(),N()[p+20>>>2>>>0]=o.getFullYear()-1900,N()[p+24>>>2>>>0]=o.getDay();var m=(Hn(o.getFullYear())?Fn:jn)[o.getMonth()]+o.getDate()-1|0;N()[p+28>>>2>>>0]=m,N()[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var _=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=_&&o.getTimezoneOffset()==Math.min(_,m)),N()[p+32>>>2>>>0]=o}function Uf(o){o>>>=0;var p=new Date(N()[o+20>>>2>>>0]+1900,N()[o+16>>>2>>>0],N()[o+12>>>2>>>0],N()[o+8>>>2>>>0],N()[o+4>>>2>>>0],N()[o>>>2>>>0],0),m=N()[o+32>>>2>>>0],_=p.getTimezoneOffset(),v=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),O=Math.min(I,v);return 0>m?N()[o+32>>>2>>>0]=+(v!=I&&O==_):0<m!=(O==_)&&(v=Math.max(I,v),p.setTime(p.getTime()+6e4*((0<m?O:v)-_))),N()[o+24>>>2>>>0]=p.getDay(),m=(Hn(p.getFullYear())?Fn:jn)[p.getMonth()]+p.getDate()-1|0,N()[o+28>>>2>>>0]=m,N()[o>>>2>>>0]=p.getSeconds(),N()[o+4>>>2>>>0]=p.getMinutes(),N()[o+8>>>2>>>0]=p.getHours(),N()[o+12>>>2>>>0]=p.getDate(),N()[o+16>>>2>>>0]=p.getMonth(),N()[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Kn(o,p,m,_,v,I,O){return d?_e(16,1,o,p,m,_,v,I,O):-52}function Zn(o,p,m,_,v,I){if(d)return _e(17,1,o,p,m,_,v,I)}var Ht={},Wf=()=>performance.timeOrigin+performance.now();function Xn(o,p){if(d)return _e(18,1,o,p);if(Ht[o]&&(clearTimeout(Ht[o].id),delete Ht[o]),!p)return 0;var m=setTimeout(()=>{delete Ht[o],si(()=>cs(o,performance.timeOrigin+performance.now()))},p);return Ht[o]={id:m,pc:p},0}function qf(o,p,m,_){o>>>=0,p>>>=0,m>>>=0,_>>>=0;var v=new Date().getFullYear(),I=new Date(v,0,1).getTimezoneOffset();v=new Date(v,6,1).getTimezoneOffset();var O=Math.max(I,v);de()[o>>>2>>>0]=60*O,N()[p>>>2>>>0]=+(I!=v),o=(p=M=>{var W=Math.abs(M);return`UTC${0<=M?"-":"+"}${String(Math.floor(W/60)).padStart(2,"0")}${String(W%60).padStart(2,"0")}`})(I),p=p(v),v<I?(Rt(o,m,17),Rt(p,_,17)):(Rt(o,_,17),Rt(p,m,17))}var Lf=()=>Date.now();function Vf(o,p,m){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),X[m>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var di=[],Qn=(o,p)=>{di.length=0;for(var m;m=U()[o++>>>0];){var _=m!=105;p+=(_&=m!=112)&&p%8?4:0,di.push(m==112?de()[p>>>2>>>0]:m==106?X[p>>>3]:m==105?N()[p>>>2>>>0]:ze()[p>>>3>>>0]),p+=_?8:4}return di};function Gf(o,p,m){return o>>>=0,p=Qn(p>>>0,m>>>0),Xr[o](...p)}function Hf(o,p,m){return o>>>=0,p=Qn(p>>>0,m>>>0),Xr[o](...p)}var Ff=()=>{};function jf(o,p){return k($e(o>>>0,p>>>0))}var Kf=()=>{throw st+=1,"unwind"};function Zf(){return 4294901760}var Xf=()=>navigator.hardwareConcurrency;function Qf(){return nt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Yf(o){o>>>=0;var p=U().length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var _=p*(1+.2/m);_=Math.min(_,o+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(o,_)/65536))-T.buffer.byteLength+65535)/65536|0;try{T.grow(_),he();var v=1;break e}catch{}v=void 0}if(v)return!0}return!1}var _r=()=>(nt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ft={},Yn=o=>{o.forEach(p=>{_r()})};function Jf(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Yn(o),Ft.Ob=_r(),Ft.ec=o,Ft.Ob}function em(o,p,m){if(o>>>=0,p>>>=0,Ft.Ob==o)var _=Ft.ec;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),Yn(_);for(var v=3;_[v]&&_r()!=o;)++v;for(o=0;o<m&&_[o+v];++o)N()[p+4*o>>>2>>>0]=_r();return o}var pi,ci={},Jn=()=>{if(!pi){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ci)ci[o]===void 0?delete p[o]:p[o]=ci[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);pi=m}return pi};function es(o,p){if(d)return _e(19,1,o,p);o>>>=0,p>>>=0;var m=0;return Jn().forEach((_,v)=>{var I=p+m;for(v=de()[o+4*v>>>2>>>0]=I,I=0;I<_.length;++I)B()[v++>>>0]=_.charCodeAt(I);B()[v>>>0]=0,m+=_.length+1}),0}function ts(o,p){if(d)return _e(20,1,o,p);o>>>=0,p>>>=0;var m=Jn();de()[o>>>2>>>0]=m.length;var _=0;return m.forEach(v=>_+=v.length+1),de()[p>>>2>>>0]=_,0}function rs(o){return d?_e(21,1,o):52}function is(o,p,m,_){return d?_e(22,1,o,p,m,_):52}function as(o,p,m,_){return d?_e(23,1,o,p,m,_):70}var tm=[null,[],[]];function ns(o,p,m,_){if(d)return _e(24,1,o,p,m,_);p>>>=0,m>>>=0,_>>>=0;for(var v=0,I=0;I<m;I++){var O=de()[p>>>2>>>0],M=de()[p+4>>>2>>>0];p+=8;for(var W=0;W<M;W++){var G=U()[O+W>>>0],te=tm[o];G===0||G===10?((o===1?S:k)(bn(te)),te.length=0):te.push(G)}v+=M}return de()[_>>>2>>>0]=v,0}d||function(){for(var o=i.numThreads-1;o--;)gn();Yr.unshift(()=>{wt++,function(p){d?p():Promise.all(ot.map(mn)).then(p)}(()=>on())})}();for(var ss=Array(256),wr=0;256>wr;++wr)ss[wr]=String.fromCharCode(wr);Nn=ss,ut=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},tt.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>tt.length/2-5-ii.length;var Z,rm=[Jr,pn,yn,$n,vn,kn,Sn,Tn,In,En,Cn,zn,An,On,Rn,Bn,Kn,Zn,Xn,es,ts,rs,is,as,ns];(async function(){function o(_,v){return Z=_.exports,Z=function(){var I=Z,O={};for(let[M,W]of Object.entries(I))O[M]=typeof W=="function"?(...G)=>{mr.push(M);try{return W(...G)}finally{V||(mr.pop(),Ze&&dt===1&&mr.length===0&&(dt=0,st+=1,fr(ys),typeof Fibers<"u"&&Fibers.qc()))}}:W;return O}(),Z=function(){var I=Z,O=W=>G=>W(G)>>>0,M=W=>()=>W()>>>0;return(I=Object.assign({},I)).Da=O(I.Da),I.gb=M(I.gb),I.ib=O(I.ib),I.ub=O(I.ub),I.vb=M(I.vb),I.__cxa_get_exception_ptr=O(I.__cxa_get_exception_ptr),I}(),cn.push(Z.jb),E=v,on(),Z}wt++;var p=un();if(i.instantiateWasm)return new Promise(_=>{i.instantiateWasm(p,(v,I)=>{o(v,I),_(v.exports)})});if(d)return new Promise(_=>{_t=v=>{var I=new WebAssembly.Instance(v,un());_(o(I,v))}});Lt??(Lt=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",x):x+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.B5gdmGHs.wasm",import.meta.url).href,import.meta.url).href);try{var m=await async function(_){var v=Lt;if(!pe&&typeof WebAssembly.instantiateStreaming=="function"&&!ce(v))try{var I=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,_)}catch(O){k(`wasm streaming compile failed: ${O}`),k("falling back to ArrayBuffer instantiation")}return async function(O,M){try{var W=await async function(G){if(!pe)try{var te=await f(G);return new Uint8Array(te)}catch{}if(G==Lt&&pe)G=new Uint8Array(pe);else{if(!g)throw"both async and sync fetching of the wasm failed";G=g(G)}return G}(O);return await WebAssembly.instantiate(W,M)}catch(G){k(`failed to asynchronously prepare wasm: ${G}`),nt(G)}}(v,_)}(p);return o(m.instance,m.module)}catch(_){return n(_),Promise.reject(_)}})();var os=o=>(os=Z.Da)(o),us=()=>(us=Z.Ea)();i._OrtInit=(o,p)=>(i._OrtInit=Z.Fa)(o,p),i._OrtGetLastError=(o,p)=>(i._OrtGetLastError=Z.Ga)(o,p),i._OrtCreateSessionOptions=(o,p,m,_,v,I,O,M,W,G)=>(i._OrtCreateSessionOptions=Z.Ha)(o,p,m,_,v,I,O,M,W,G),i._OrtAppendExecutionProvider=(o,p)=>(i._OrtAppendExecutionProvider=Z.Ia)(o,p),i._OrtAddFreeDimensionOverride=(o,p,m)=>(i._OrtAddFreeDimensionOverride=Z.Ja)(o,p,m),i._OrtAddSessionConfigEntry=(o,p,m)=>(i._OrtAddSessionConfigEntry=Z.Ka)(o,p,m),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=Z.La)(o),i._OrtCreateSession=(o,p,m)=>(i._OrtCreateSession=Z.Ma)(o,p,m),i._OrtReleaseSession=o=>(i._OrtReleaseSession=Z.Na)(o),i._OrtGetInputOutputCount=(o,p,m)=>(i._OrtGetInputOutputCount=Z.Oa)(o,p,m),i._OrtGetInputName=(o,p)=>(i._OrtGetInputName=Z.Pa)(o,p),i._OrtGetOutputName=(o,p)=>(i._OrtGetOutputName=Z.Qa)(o,p),i._OrtFree=o=>(i._OrtFree=Z.Ra)(o),i._OrtCreateTensor=(o,p,m,_,v,I)=>(i._OrtCreateTensor=Z.Sa)(o,p,m,_,v,I),i._OrtGetTensorData=(o,p,m,_,v)=>(i._OrtGetTensorData=Z.Ta)(o,p,m,_,v),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=Z.Ua)(o),i._OrtCreateRunOptions=(o,p,m,_)=>(i._OrtCreateRunOptions=Z.Va)(o,p,m,_),i._OrtAddRunConfigEntry=(o,p,m)=>(i._OrtAddRunConfigEntry=Z.Wa)(o,p,m),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=Z.Xa)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=Z.Ya)(o),i._OrtBindInput=(o,p,m)=>(i._OrtBindInput=Z.Za)(o,p,m),i._OrtBindOutput=(o,p,m,_)=>(i._OrtBindOutput=Z._a)(o,p,m,_),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=Z.$a)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=Z.ab)(o),i._OrtRunWithBinding=(o,p,m,_,v)=>(i._OrtRunWithBinding=Z.bb)(o,p,m,_,v),i._OrtRun=(o,p,m,_,v,I,O,M)=>(i._OrtRun=Z.cb)(o,p,m,_,v,I,O,M),i._OrtEndProfiling=o=>(i._OrtEndProfiling=Z.db)(o),i._JsepOutput=(o,p,m)=>(i._JsepOutput=Z.eb)(o,p,m),i._JsepGetNodeName=o=>(i._JsepGetNodeName=Z.fb)(o);var br=()=>(br=Z.gb)(),Xe=i._free=o=>(Xe=i._free=Z.hb)(o),$r=i._malloc=o=>($r=i._malloc=Z.ib)(o),hi=(o,p,m,_,v,I)=>(hi=Z.lb)(o,p,m,_,v,I),ls=()=>(ls=Z.mb)(),ds=(o,p,m,_,v)=>(ds=Z.nb)(o,p,m,_,v),ps=o=>(ps=Z.ob)(o),fi=o=>(fi=Z.pb)(o),cs=(o,p)=>(cs=Z.qb)(o,p),hs=()=>(hs=Z.rb)(),fs=(o,p)=>(fs=Z.sb)(o,p),vr=o=>(vr=Z.tb)(o),mi=o=>(mi=Z.ub)(o),gi=()=>(gi=Z.vb)(),ms=i.dynCall_ii=(o,p)=>(ms=i.dynCall_ii=Z.wb)(o,p),gs=o=>(gs=Z.xb)(o),ys=()=>(ys=Z.yb)(),_s=o=>(_s=Z.zb)(o),ws=()=>(ws=Z.Ab)();return i.stackSave=()=>gi(),i.stackRestore=o=>vr(o),i.stackAlloc=o=>mi(o),i.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":B()[o>>>0]=p;break;case"i16":ae()[o>>>1>>>0]=p;break;case"i32":N()[o>>>2>>>0]=p;break;case"i64":X[o>>>3]=BigInt(p);break;case"float":Me()[o>>>2>>>0]=p;break;case"double":ze()[o>>>3>>>0]=p;break;case"*":de()[o>>>2>>>0]=p;break;default:nt(`invalid type for setValue: ${m}`)}},i.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return B()[o>>>0];case"i16":return ae()[o>>>1>>>0];case"i32":return N()[o>>>2>>>0];case"i64":return X[o>>>3];case"float":return Me()[o>>>2>>>0];case"double":return ze()[o>>>3>>>0];case"*":return de()[o>>>2>>>0];default:nt(`invalid type for getValue: ${p}`)}},i.UTF8ToString=$e,i.stringToUTF8=Rt,i.lengthBytesUTF8=xn,function o(){if(0<wt)Vt=o;else if(d)a(i),at();else{for(;0<Yr.length;)Yr.shift()(i);0<wt?Vt=o:(i.calledRun=!0,V||(at(),a(i)))}}(),i.PTR_SIZE=4,s}),xd=Si,xs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),xs&&Si()}),Ti,ks,Re,kd,Ir,Ss,Ts,Ii,Is,Ei,Sd,Ci,Td,Oa=P(()=>{Aa(),Ti=typeof location>"u"?void 0:location.origin,ks=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL(""+new URL("../assets/ort.bundle.min.DVT1aZ7z.mjs",import.meta.url).href,import.meta.url).href,Ti).href:import.meta.url},Re=ks(),kd=()=>{if(Re&&!Re.startsWith("blob:"))return Re.substring(0,Re.lastIndexOf("/")+1)},Ir=(e,t)=>{try{let r=t??Re;return(r?new URL(e,r):new URL(e)).origin===Ti}catch{return!1}},Ss=(e,t)=>{let r=t??Re;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ts=(e,t)=>`${t??"./"}${e}`,Ii=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Is=async e=>(await import(e)).default,Ei=(Rm(),Lr(bd)).default,Sd=async()=>{if(!Re)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ir(Re))return[void 0,Ei()];let e=await Ii(Re);return[e,Ei(e)]},Ci=(Bm(),Lr(vd)).default,Td=async(e,t,r)=>{if(!e&&!t&&Ci&&Re&&Ir(Re))return[void 0,Ci];{let a="ort-wasm-simd-threaded.jsep.mjs",n=e??Ss(a,t),i=r&&n&&!Ir(n,t),s=i?await Ii(n):n??Ts(a,t);return[i?s:void 0,await Is(s)]}}}),zi,Er,Xt,Ai,Es,Cs,Ra,xe,At=P(()=>{Oa(),Er=!1,Xt=!1,Ai=!1,Es=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Cs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ra=async e=>{if(Er)return Promise.resolve();if(Xt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ai)throw new Error("previous call to 'initializeWebAssembly()' failed.");Xt=!0;let t=e.initTimeout,r=e.numThreads;if(!Cs())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=Es();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,i=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,u=(s==null?void 0:s.href)??s,l=n==null?void 0:n.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[h,f]=await Td(u,i,r>1),g=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{g=!0,w()},t)})),y.push(new Promise((w,x)=>{let $={numThreads:r};if(c)$.wasmBinary=c;else if(d||i)$.locateFile=b=>d??i+b;else if(u&&u.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,u).href;else if(h){let b=kd();b&&($.locateFile=S=>b+S)}f($).then(b=>{Xt=!1,Er=!0,zi=b,w(),h&&URL.revokeObjectURL(h)},b=>{Xt=!1,Ai=!0,x(b)})})),await Promise.race(y),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},xe=()=>{if(Er&&zi)return zi;throw new Error("WebAssembly is not initialized yet.")}}),Ie,Gr,le,Ba=P(()=>{At(),Ie=(e,t)=>{let r=xe(),a=r.lengthBytesUTF8(e)+1,n=r._malloc(a);return r.stringToUTF8(e,n,a),t.push(n),n},Gr=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,i])=>{let s=t?t+n:n;if(typeof i=="object")Gr(i,s+".",r,a);else if(typeof i=="string"||typeof i=="number")a(s,i.toString());else if(typeof i=="boolean")a(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},le=e=>{let t=xe(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetLastError(n,n+a);let i=Number(t.getValue(n,a===4?"i32":"i64")),s=t.getValue(n+a,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Id,Nm=P(()=>{At(),Ba(),Id=e=>{let t=xe(),r=0,a=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Ie(e.tag,a)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,i),r===0&&le("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Gr(e.extra,"",new WeakSet,(s,u)=>{let l=Ie(s,a),d=Ie(u,a);t._OrtAddRunConfigEntry(r,l,d)!==0&&le(`Can't set a run config entry: ${s} - ${u}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(s=>t._free(s)),i}}}),zs,As,Os,Rs,Ed,Mm=P(()=>{At(),Ba(),zs=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},As=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Os=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Rs=(e,t,r)=>{for(let a of t){let n=typeof a=="string"?a:a.name;switch(n){case"webnn":if(n="WEBNN",typeof a!="string"){let s=a==null?void 0:a.deviceType;if(s){let u=Ie("deviceType",r),l=Ie(s,r);xe()._OrtAddSessionConfigEntry(e,u,l)!==0&&le(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(n="JS",typeof a!="string"){let s=a;if(s!=null&&s.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let u=Ie("preferredLayout",r),l=Ie(s.preferredLayout,r);xe()._OrtAddSessionConfigEntry(e,u,l)!==0&&le(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let i=Ie(n,r);xe()._OrtAppendExecutionProvider(e,i)!==0&&le(`Can't append execution provider: ${n}.`)}},Ed=e=>{let t=xe(),r=0,a=[],n=e||{};Os(n);try{let i=zs(n.graphOptimizationLevel??"all"),s=As(n.executionMode??"sequential"),u=typeof n.logId=="string"?Ie(n.logId,a):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?Ie(n.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,u,l,d,c),r===0&&le("Can't create session options."),n.executionProviders&&Rs(r,n.executionProviders,a),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let h=Ie("enableGraphCapture",a),f=Ie(n.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,h,f)!==0&&le(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[h,f]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let g=Ie(h,a);t._OrtAddFreeDimensionOverride(r,g,f)!==0&&le(`Can't set a free dimension override: ${h} - ${f}.`)}return n.extra!==void 0&&Gr(n.extra,"",new WeakSet,(h,f)=>{let g=Ie(h,a),y=Ie(f,a);t._OrtAddSessionConfigEntry(r,g,y)!==0&&le(`Can't set a session config entry: ${h} - ${f}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&le("Can't release session options."),a.forEach(s=>t._free(s)),i}}}),Mt,Tt,It,Na,Hr,Ma,Da,fa,Q=P(()=>{Mt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Tt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},It=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((n,i)=>n*i,1);return r>0?Math.ceil(a*r):void 0},Na=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Hr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ma=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Da=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",fa=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Pa,Cd=P(()=>{Aa(),Pa=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(u){if(u instanceof RangeError){let l=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await n.read();if(u)break;let d=l.byteLength;new Uint8Array(i,s,d).set(l),s+=d}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Bs,Ns,Ms,Ds,Ua,Ps,se,it=P(()=>{Q(),Bs=["V","I","W","E","F"],Ns=(e,t)=>{console.log(`[${Bs[e]},${new Date().toISOString()}]${t}`)},Ua=(e,t)=>{Ms=e,Ds=t},Ps=(e,t)=>{let r=Hr(e),a=Hr(Ms);r>=a&&Ns(r,typeof t=="function"?t():t)},se=(...e)=>{Ds&&Ps(...e)}}),Wa,zd=P(()=>{Q(),Wa=(e,t)=>new(Na(t))(e)}),qa=P(()=>{}),Oi,Cr,zr,Us,Ws,Ri,ma,qs,Ad,Dm=P(()=>{it(),qa(),Oi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Cr=[],zr=e=>Math.ceil(Number(e)/16)*16,Us=e=>{for(let t=0;t<Cr.length;t++){let r=Cr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ws=1,Ri=()=>Ws++,ma=async(e,t,r,a)=>{let n=zr(r),i=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,n),e.flush(),await i.mapAsync(GPUMapMode.READ);let u=i.getMappedRange();if(a){let l=a();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{i.destroy()}},qs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Oi)Cr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,n=t.byteLength,i=zr(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,a,n)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([d.finish()]),u.destroy(),se("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=zr(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Ri();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),se("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Us(e),a,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||i){let u=(n?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?a=u.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ri(),type:0,buffer:a};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),se("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return se("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ma(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Oi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(se("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ad=(...e)=>new qs(...e)}),Ls,me,be=P(()=>{Ls=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},me=e=>new Ls(e)}),Vs,Wt,z,Fr,Od,Rd,Bd,re=P(()=>{Vs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Wt=class{static calcShape(e,t,r=!1){let a=e.length,n=t.length;if(a===0)return t;if(n===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(a<2||n<2)return;let u=Vs.calcMatMulShape([e[a-2],e[a-1]],[t[n-2],t[n-1]]);if(u===void 0)return;[s[i-2],s[i-1]]=u}for(let u=r?3:1;u<=i;u++){let l=a-u<0?1:e[a-u],d=n-u<0?1:t[n-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[i-u]=Math.max(l,d);else{if(c>1)return;s[i-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[a-n])return!1;return!0}},z=class Wr{static size(t){return Wr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let n=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){n[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");n[i]=1,r/=t[i],i--}for(i--;i>=0;i--)n[i]=t[i];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Wr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Wr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let n=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[i])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let n=r-3;n>=0;--n)a[n]=a[n+1]*t[n+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((n,i)=>n+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,n)=>a===r[n])}},Fr=class nr{static adjustPoolAttributes(t,r,a,n,i,s){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=a.length?a.push(r[u+2]):a[u]=r[u+2];for(let u=0;u<a.length;u++)if(u<n.length){if(n[u]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let u=0;u<a.length;u++)if(u<i.length){if(i[u]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let u=0;u<a.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<a.length;u++){if(a[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=a[u]||s[u+a.length]>=a[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,n,i,s,u){if(u){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)nr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],a[l],n[l],i,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,a,n,i,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return nr.computeShapeHelper(t,r,l,a,n,i,s,u),l}static computeConvOutputShape(t,r,a,n,i,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return nr.computeShapeHelper(!1,t,l,a,n,i,s,u),l}static computeShapeHelper(t,r,a,n,i,s,u,l){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(nr.adjustPadAndReturnShape(r[d+2],n[d],i[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,a,n,i,s,u,l){let d=a*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return i[s]=0,i[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return i[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),i[u]=c-i[s],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[u]-d)/r+1)}},Od=class{static getShapeOfGemmResult(e,t,r,a,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,u;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let l=-1;if(a?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(i<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Wt.isValidBroadcast(n,[i,u]))throw new Error("gemm: invalid bias shape for broadcast");return[i,u,s]}},Rd=-34028234663852886e22,Bd=34028234663852886e22}),qt,Ar,ke,Ee,j,we,ga,Pt,gt,F,Qt,R,H,Nd,La,Gs,Md,ie=P(()=>{Q(),re(),qt=64,Ar=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ke=(e,t=1)=>{let r=Ar(e,t);return typeof r=="string"?r:r[0]},Ee=(e,t=1)=>{let r=Ar(e,t);return typeof r=="string"?r:r[1]},j=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:z.computeStrides(r)})}),t},we=e=>e%4===0?4:e%2===0?2:1,ga=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Pt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,gt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,F=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Qt=(e,t,r,a,n)=>{let i=typeof r=="number",s=i?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Ar(t,n),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],f={indices:l,value:c,storage:h,tensor:t},g=B=>typeof B=="string"?B:`${B}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=i?"uniforms.":"",x=`${w}${e}_shape`,$=`${w}${e}_strides`,b="";for(let B=0;B<s-1;B++)b+=`
    let dim${B} = current / ${F($,B,s)};
    let rest${B} = current % ${F($,B,s)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;b+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${b}
    return indices;
  }`,k=B=>(y.offsetToIndices=!0,s<2?B:`o2i_${e}(${B})`),T=[];if(s>=2)for(let B=s-1;B>=0;B--)T.push(`${F($,B,s)} * (indices[${B}])`);let E=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${T.join("+")};
  }`,C=B=>(y.indicesToOffset=!0,s<2?B:`i2o_${e}(${B})`),A=(...B)=>s===0?"0u":`${f.indices}(${B.map(g).join(",")})`,D=(B,U)=>s<2?`${B}`:`${F(B,U,s)}`,L=(B,U,ae)=>s<2?`${B}=${ae};`:`${F(B,U,s)}=${ae};`,Y={},ee=(B,U)=>{y.broadcastedIndicesToOffset=!0;let ae=`${U.name}broadcastedIndicesTo${e}Offset`;if(ae in Y)return`${ae}(${B})`;let ye=[];for(let N=s-1;N>=0;N--){let de=U.indicesGet("outputIndices",N+U.rank-s);ye.push(`${D($,N)} * (${de} % ${D(x,N)})`)}return Y[ae]=`fn ${ae}(outputIndices: ${U.type.indices}) -> u32 {
             return ${ye.length>0?ye.join("+"):"0u"};
           }`,`${ae}(${B})`},K=(B,U)=>(()=>{if(f.storage===f.value)return`${e}[${B}]=${U};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${U}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),J=B=>(()=>{if(f.storage===f.value)return`${e}[${B}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${B}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${B}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),X=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${c} {
    return ${J(`i2o_${e}(indices)`)};
  }`,q=s<2?"":(()=>{let B=u.map(ae=>`d${ae}: u32`).join(", "),U=u.map(ae=>`d${ae}`).join(", ");return`
  fn get_${e}(${B}) -> ${c} {
    return get_${e}ByIndices(${A(U)});
  }`})(),ne=(...B)=>{if(B.length!==s)throw new Error(`indices length must be ${s}`);let U=B.map(g).join(",");return s===0?J("0u"):s===1?J(U[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${U})`)},pe=B=>s<2?J(B):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${B})`),V=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${c}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,ce=s<2?"":(()=>{let B=u.map(ae=>`d${ae}: u32`).join(", "),U=u.map(ae=>`d${ae}`).join(", ");return`
  fn set_${e}(${B}, value: ${c}) {
    set_${e}ByIndices(${A(U)}, value);
  }`})();return{impl:()=>{let B=[],U=!1;return y.offsetToIndices&&(B.push(S),U=!0),y.indicesToOffset&&(B.push(E),U=!0),y.broadcastedIndicesToOffset&&(Object.values(Y).forEach(ae=>B.push(ae)),U=!0),y.set&&(B.push(ce),U=!0),y.setByIndices&&(B.push(V),U=!0),y.get&&(B.push(q),U=!0),y.getByIndices&&(B.push(X),U=!0),!i&&U&&B.unshift(`const ${x} = ${f.indices}(${r.join(",")});`,`const ${$} = ${f.indices}(${z.computeStrides(r).join(",")});`),B.join(`
`)},type:f,offsetToIndices:k,indicesToOffset:C,broadcastedIndicesToOffset:ee,indices:A,indicesGet:D,indicesSet:L,set:(...B)=>{if(B.length!==s+1)throw new Error(`indices length must be ${s}`);let U=B[s];if(typeof U!="string")throw new Error("value must be string");let ae=B.slice(0,s).map(g).join(",");return s===0?K("0u",U):s===1?K(ae[0],U):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${ae}, ${U})`)},setByOffset:K,setByIndices:(B,U)=>s<2?K(B,U):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${U});`),get:ne,getByOffset:J,getByIndices:pe,usage:a,name:e,strides:$,shape:x,rank:s}},R=(e,t,r,a=1)=>Qt(e,t,r,"input",a),H=(e,t,r,a=1)=>Qt(e,t,r,"output",a),Nd=(e,t,r)=>Qt(e,t,r,"atomicOutput",1),La=(e,t,r,a=1)=>Qt(e,t,r,"internal",a),Gs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=qt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let n=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Md=(e,t)=>new Gs(e,t)}),Hs,Bi,Fs,js,Ks,Zs,Ne,Dd,Pd,yt=P(()=>{Q(),re(),be(),ie(),Hs=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Bi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Fs=(e,t)=>z.sortBasedOnPerm(e,Bi(e.length,t)),js=(e,t,r,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)n+=`a[${e[i]}]=i[${i}];`;return n+="return a;}"},Ks=(e,t)=>{let r=[],a=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&a.push(t[n]);return{newShape:r,newPerm:a}},Zs=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Ne=(e,t)=>{let r=e.dataType,a=e.dims.length,n=Bi(a,t),i=Fs(e.dims,n),s=e.dims,u=i,l=a<2||Zs(n,e.dims),d;if(l)return d=y=>{let w=R("input",r,s,4),x=H("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,x)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=z.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=Ks(e.dims,n),f=z.areEqual(h,[2,3,1]),g=z.areEqual(h,[3,1,2]);if(c.length===2||f||g){s=f?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let y=16;return d=w=>{let x=R("a",r,s.length),$=H("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(x,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${y+1}>, ${y}>;
  ${w.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=z.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:w},...j(s,u)]}},getShaderSource:d}}return d=y=>{let w=R("a",r,s.length),x=H("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,x)}

  ${js(n,a,w,x)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=z.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...j(s,u)]}},getShaderSource:d}},Dd=(e,t)=>{Hs(e.inputs,t.perm),e.compute(Ne(e.inputs[0],t.perm))},Pd=e=>me({perm:e.perm})}),Xs,Qs,Ys,Js,eo,to,ro,io,ao,no,We,Ud,Wd,qd,Ld,Vd,Gd,Hd,Fd,jd,Kd,Pm=P(()=>{Q(),re(),ie(),Va(),yt(),Xs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Qs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ys={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Js={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},eo=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},to=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let n=t.map(i=>e[i]);return[r,n]},ro=(e,t)=>{let r=e.length+t.length,a=[],n=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[n++]):a.push(1);return a},io=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},ao=(e,t)=>{let r=[];if(!io(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},no=(e,t,r,a,n,i,s)=>{let u=r[0].dims,l=z.size(i),d=z.size(s),c=R("_A",r[0].dataType,u),h=H("output",n,i),f=64;l===1&&(f=256);let g=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,y=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ys[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Xs[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Qs[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${a==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Js[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},We=(e,t,r,a)=>{let n=e.inputs.length===1?r:ya(e.inputs,r),i=n.axes;i.length===0&&!n.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((g,y)=>y));let s=z.normalizeAxes(i,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=ao(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ne(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=eo(u.length,l.dims.length));let[c,h]=to(l.dims,u),f=c;n.keepDims&&(f=ro(c,s)),e.compute(no(t,n.cacheKey,[l],a,e.inputs[0].dataType,f,h),{inputs:[l]})},Ud=(e,t)=>{We(e,"ReduceMeanShared",t,"mean")},Wd=(e,t)=>{We(e,"ReduceL1Shared",t,"l1")},qd=(e,t)=>{We(e,"ReduceL2Shared",t,"l2")},Ld=(e,t)=>{We(e,"ReduceLogSumExpShared",t,"logSumExp")},Vd=(e,t)=>{We(e,"ReduceMaxShared",t,"max")},Gd=(e,t)=>{We(e,"ReduceMinShared",t,"min")},Hd=(e,t)=>{We(e,"ReduceProdShared",t,"prod")},Fd=(e,t)=>{We(e,"ReduceSumShared",t,"sum")},jd=(e,t)=>{We(e,"ReduceSumSquareShared",t,"sumSquare")},Kd=(e,t)=>{We(e,"ReduceLogSumShared",t,"logSum")}}),qe,so,jr,ya,Le,oo,uo,lo,po,co,ho,fo,mo,go,yo,Ve,Zd,Xd,Qd,Yd,Jd,ep,tp,rp,ip,ap,Va=P(()=>{Q(),re(),be(),ie(),Pm(),qe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},so=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],jr=(e,t,r,a,n,i,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,h=z.normalizeAxes(n,c),f=!u&&h.length===0;d.forEach((w,x)=>{f||h.indexOf(x)>=0?s&&l.push(1):l.push(w)});let g=l.length,y=z.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let x=[],$=R("_A",r[0].dataType,c),b=H("output",i,g),S=a($,b,h),k=S[2];for(let T=0,E=0;T<c;T++)f||h.indexOf(T)>=0?(s&&E++,k=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${S[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${$.indicesSet("input_indices",T,`j${T}`)}
                  ${k}
                }`):(x.push(`${$.indicesSet("input_indices",T,b.indicesGet("output_indices",E))};`),E++);return`

        ${w.registerUniform("output_size","u32").declareVariables($,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?b.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:i}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...j(d,l)]})}},ya=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),me({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Le=(e,t,r,a)=>{let n=e.inputs,i=n.length===1?r:ya(n,r);e.compute(jr(t,{hint:i.cacheKey,inputDependencies:["rank"]},[n[0]],i.noopWithEmptyAxes&&i.axes.length===0?so:a,i.axes,n[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},oo=(e,t)=>{qe(e.inputs),Le(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},uo=(e,t)=>{qe(e.inputs),Le(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},lo=(e,t)=>{qe(e.inputs),Le(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},po=(e,t)=>{qe(e.inputs),Le(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},co=(e,t)=>{qe(e.inputs),Le(e,"ReduceMax",t,(r,a,n)=>{let i=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},ho=(e,t)=>{qe(e.inputs),Le(e,"ReduceMean",t,(r,a,n)=>{let i=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},fo=(e,t)=>{qe(e.inputs),Le(e,"ReduceMin",t,(r,a,n)=>{let i=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},mo=(e,t)=>{qe(e.inputs),Le(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},go=(e,t)=>{qe(e.inputs),Le(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},yo=(e,t)=>{qe(e.inputs),Le(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ve=(e,t,r)=>{if(t.length===0)return r;let a=1,n=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:n*=e[i];return n<32&&a>1024},Zd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ho(e,t):Ud(e,t)},Xd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Wd(e,t)},Qd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lo(e,t):qd(e,t)},Yd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?po(e,t):Ld(e,t)},Jd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?co(e,t):Vd(e,t)},ep=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fo(e,t):Gd(e,t)},tp=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mo(e,t):Hd(e,t)},rp=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?go(e,t):Fd(e,t)},ip=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yo(e,t):jd(e,t)},ap=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Kd(e,t)}}),Ni,np,sp,_a,Um=P(()=>{Q(),be(),Va(),Ni=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},np=(e,t)=>{Ni(e.inputs);let r=(a,n,i)=>{let s=[];for(let u=0;u<a.rank;u++)(i.indexOf(u)>=0||i.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(jr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},sp=(e,t)=>{Ni(e.inputs);let r=(a,n,i)=>{let s=[];for(let u=0;u<a.rank;u++)(i.indexOf(u)>=0||i.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(jr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},_a=e=>me(e)}),_o,Or,wo,bo,$o,dr,vo,op,Ga=P(()=>{Q(),re(),qa(),ie(),_o=(e,t)=>{let r=e[0],a=e[1],n=e[2],i=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,f=h,g=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let y=d;if(h!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+f+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(f!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let x=y+w,$=-1,b=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:c,hiddenSize:h,vHiddenSize:g,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Or=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,wo=(e,t,r,a,n,i,s,u)=>{let l=we(s?1:i),d=64,c=i/l;c<d&&(d=32);let h=Math.ceil(i/l/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:n},{type:12,data:c},{type:12,data:h}],g=ke(e.dataType,l),y=Ee(1,l),w=["type"];s&&w.push("type"),u&&w.push("type");let x=$=>{let b=H("x",e.dataType,e.dims,l),S=[b],k=s?R("seq_lens",s.dataType,s.dims):void 0;k&&S.push(k);let T=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;T&&S.push(T);let E=Ee(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(C).declareVariables(...S)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Or(k,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:w},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/d),y:n,z:t*r},programUniforms:f})}},bo=(e,t,r,a,n,i,s,u,l)=>{let d=s+i.kvSequenceLength,c=[i.batchSize,i.numHeads,i.sequenceLength,d],h=e>1&&a,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=h?[i.batchSize,f,d,i.headSize]:void 0,y=i.nReps?i.nReps:1,w=i.scale===0?1/Math.sqrt(i.headSize):i.scale,x=we(i.headSize),$=i.headSize/x,b=12,S={x:Math.ceil(d/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:y}],T=h&&a&&z.size(a.dims)>0,E=["type","type"];T&&E.push("type"),n&&E.push("type"),u&&E.push("type"),l&&E.push("type");let C=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&C.push({dims:g,dataType:t.dataType,gpuDataType:0});let A=D=>{let L=R("q",t.dataType,t.dims,x),Y=R("key",r.dataType,r.dims,x),ee=[L,Y];if(T){let V=R("past_key",a.dataType,a.dims,x);ee.push(V)}n&&ee.push(R("attention_bias",n.dataType,n.dims));let K=u?R("seq_lens",u.dataType,u.dims):void 0;K&&ee.push(K);let J=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;J&&ee.push(J);let X=H("output",t.dataType,c),q=[X];h&&q.push(H("present_key",t.dataType,g,x));let ne=Ee(1,x),pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${L.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${L.type.storage}, ${b*b}>;
  ${D.registerUniforms(pe).declareVariables(...ee,...q)}
  ${D.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Or(K,J,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ne}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ne}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${X.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${n!==void 0};${a!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:C,dispatchGroup:S,programUniforms:k}),getShaderSource:A}},$o=(e,t,r,a,n,i,s=void 0,u=void 0)=>{let l=i+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,h=e>1&&a,f=n.kvNumHeads?n.kvNumHeads:n.numHeads,g=h?[n.batchSize,f,l,n.headSize]:void 0,y=[n.batchSize,n.sequenceLength,c],w=12,x={x:Math.ceil(n.vHeadSize/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},$=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:i},{type:12,data:n.kvSequenceLength},{type:12,data:d}],b=h&&a&&z.size(a.dims)>0,S=["type","type"];b&&S.push("type"),s&&S.push("type"),u&&S.push("type");let k=[{dims:y,dataType:t.dataType,gpuDataType:0}];h&&k.push({dims:g,dataType:t.dataType,gpuDataType:0});let T=E=>{let C=R("probs",t.dataType,t.dims),A=R("v",r.dataType,r.dims),D=[C,A];b&&D.push(R("past_value",a.dataType,a.dims));let L=s?R("seq_lens",s.dataType,s.dims):void 0;s&&D.push(L);let Y=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;u&&D.push(Y);let ee=[H("output",t.dataType,y)];h&&ee.push(H("present_value",t.dataType,g));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${C.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${C.type.value}, ${w*w}>;
  ${E.registerUniforms(K).declareVariables(...D,...ee)}
  ${E.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Or(L,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:x,programUniforms:$}),getShaderSource:T}},dr=(e,t,r,a,n,i,s,u,l,d,c=void 0,h=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),g=f>1?d.pastSequenceLength:0,y=g+d.kvSequenceLength,w=l&&z.size(l.dims)>0?l:void 0,x=[t,r];f>1&&s&&z.size(s.dims)>0&&x.push(s),w&&x.push(w),c&&x.push(c),h&&x.push(h);let $=e.compute(bo(f,t,r,s,w,d,g,c,h),{inputs:x,outputs:f>1?[-1,1]:[-1]})[0];e.compute(wo($,d.batchSize,d.numHeads,g,d.sequenceLength,y,c,h),{inputs:c&&h?[$,c,h]:[$],outputs:[]});let b=[$,a];f>1&&u&&z.size(u.dims)>0&&b.push(u),c&&b.push(c),h&&b.push(h),e.compute($o(f,$,a,u,d,g,c,h),{inputs:b,outputs:f>1?[0,2]:[0]})},vo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,n=t.inputHiddenSize,i=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let f=H("output_q",l[0].dataType,r),g=H("output_k",l[0].dataType,r),y=H("output_v",l[0].dataType,r),w=R("input",l[0].dataType,l[0].dims),x=R("weight",l[1].dataType,l[1].dims),$=R("bias",l[2].dataType,l[2].dims),b=w.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${h.registerUniforms(S).declareVariables(w,x,$,f,g,y)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},op=(e,t)=>{let r=_o(e.inputs,t),[a,n,i]=vo(e,r);return dr(e,a,n,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),xo,ko,So,up,Wm=P(()=>{je(),Q(),re(),be(),ie(),xo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,n,i)=>{let s=n.length;if(s!==a.length)throw new Error(`${i}: num dimensions != ${s}`);n.forEach((u,l)=>{if(u!==a[l])throw new Error(`${i}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},ko=(e,t)=>{let{epsilon:r,spatial:a,format:n}=t,i=e[0].dims,s=a?we(i[i.length-1]):1,u=n==="NHWC"&&i.length>1?s:1,l=z.size(i)/s,d=a,c=d?i.length:i,h=R("x",e[0].dataType,e[0].dims,s),f=R("scale",e[1].dataType,e[1].dims,u),g=R("bias",e[2].dataType,e[2].dims,u),y=R("inputMean",e[3].dataType,e[3].dims,u),w=R("inputVar",e[4].dataType,e[4].dims,u),x=H("y",e[0].dataType,c,s),$=()=>{let S="";if(a)S=`let cOffset = ${i.length===1?"0u":n==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")S=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<f.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return S},b=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(h,f,g,y,w,x)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...j(i)]:[{type:12,data:l}]})}},So=e=>me(e),up=(e,t)=>{let{inputs:r,outputCount:a}=e,n=So({...t,outputCount:a});if(fe.webgpu.validateInputContent&&xo(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(ko(r,n))}}),To,Io,lp,qm=P(()=>{re(),ie(),To=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Io=e=>{let t=e[0].dims,r=e[0].dims[2],a=z.size(t)/4,n=e[0].dataType,i=R("input",n,t,4),s=R("bias",n,[r],4),u=R("residual",n,t,4),l=H("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(i,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},lp=e=>{To(e.inputs),e.compute(Io(e.inputs))}}),Eo,ue,dp,pp,cp,hp,fp,mp,gp,yp,_p,Co,wp,bp,$p,vp,sr,xp,qr,kp,Sp,Tp,Ip,Ep,Cp,zp,Ap,Op,Rp,Bp,Np,Mp,Dp,Pp,Up,Mi,Wp,wa,ba,qp,Lp,Vp,zo,Ao,Gp,Ha=P(()=>{Q(),re(),be(),ie(),Eo=(e,t,r,a,n,i,s)=>{let u=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=R("inputData",r,[u],4),c=H("outputData",a,[u],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ue=(e,t,r,a,n,i=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Eo(d,z.size(e.dims),e.dataType,i,r,a,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(z.size(d[0].dims)/64/4)},programUniforms:l})}},dp=e=>{e.compute(ue(e.inputs[0],"Abs","abs"))},pp=e=>{e.compute(ue(e.inputs[0],"Acos","acos"))},cp=e=>{e.compute(ue(e.inputs[0],"Acosh","acosh"))},hp=e=>{e.compute(ue(e.inputs[0],"Asin","asin"))},fp=e=>{e.compute(ue(e.inputs[0],"Asinh","asinh"))},mp=e=>{e.compute(ue(e.inputs[0],"Atan","atan"))},gp=e=>{e.compute(ue(e.inputs[0],"Atanh","atanh"))},yp=e=>me(e),_p=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ue(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Co=e=>{let t,r,a=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return me({min:t,max:r})},wp=(e,t)=>{let r=t||Co(e.inputs),a=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},bp=e=>{e.compute(ue(e.inputs[0],"Ceil","ceil"))},$p=e=>{e.compute(ue(e.inputs[0],"Cos","cos"))},vp=e=>{e.compute(ue(e.inputs[0],"Cosh","cosh"))},sr=e=>me(e),xp=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},qr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,kp=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,qr(t)))},Sp=e=>{e.compute(ue(e.inputs[0],"Exp","exp"))},Tp=e=>{e.compute(ue(e.inputs[0],"Floor","floor"))},Ip=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,qr(t)))},Ep=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Cp=e=>{e.compute(ue(e.inputs[0],"Not",t=>`!${t}`))},zp=e=>{e.compute(ue(e.inputs[0],"Neg",t=>`-${t}`))},Ap=e=>{e.compute(ue(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Op=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Rp=e=>{e.compute(ue(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Bp=e=>me(e),Np=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Mp=e=>{e.compute(ue(e.inputs[0],"Sin","sin"))},Dp=e=>{e.compute(ue(e.inputs[0],"Sinh","sinh"))},Pp=e=>{e.compute(ue(e.inputs[0],"Sqrt","sqrt"))},Up=e=>{e.compute(ue(e.inputs[0],"Tan","tan"))},Mi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Wp=e=>{e.compute(ue(e.inputs[0],"Tanh",Mi))},wa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Mi("v")};
}
`,ba=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,qp=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"FastGelu",ba,wa(t),void 0,e.inputs[0].dataType))},Lp=(e,t)=>{let r=Ee(e.inputs[0].dataType);return e.compute(ue(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Vp=e=>{e.compute(ue(e.inputs[0],"Log","log"))},zo=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Ao=e=>`quick_gelu_impl(${e})`,Gp=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"QuickGelu",Ao,zo(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Oo,Ro,Hp,Lm=P(()=>{re(),ie(),Ha(),Oo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ro=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=R("input",e[0].dataType,e[0].dims,4),a=R("bias",e[0].dataType,[e[0].dims[2]],4),n=H("output",e[0].dataType,t,4),i=z.size(t)/4,s=ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,a,n)}

  ${qr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Hp=e=>{Oo(e.inputs),e.compute(Ro(e.inputs))}}),Bo,No,Ge,Fp,jp,Kp,Zp,Xp,Qp,Yp,Jp,ec,tc,Vm=P(()=>{Q(),re(),ie(),Bo=(e,t,r,a,n,i,s,u,l,d,c,h)=>{let f,g;typeof u=="string"?f=g=(b,S)=>`${u}((${b}),(${S}))`:typeof u=="function"?f=g=u:(f=u.scalar,g=u.vector);let y=H("outputData",c,a.length,4),w=R("aData",l,t.length,4),x=R("bData",d,r.length,4),$;if(n)if(i){let b=z.size(t)===1,S=z.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;b||S?$=y.setByOffset("global_idx",g(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),S?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):$=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",g(s||k?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=y.setByOffset("global_idx",g(w.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(S,k,T="")=>{let E=`aData[indexA${k}][componentA${k}]`,C=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${y.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${w.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let offsetB${k} = ${x.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${T}(${f(E,C)});
          `};c===9?$=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,x,y)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},No=(e,t,r,a,n,i,s=r.dataType)=>{let u=r.dims.map(w=>Number(w)??1),l=a.dims.map(w=>Number(w)??1),d=!z.areEqual(u,l),c=u,h=z.size(u),f=!1,g=!1,y=[d];if(d){let w=Wt.calcShape(u,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),h=z.size(c);let x=z.size(u)===1,$=z.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;y.push(x),y.push($),y.push(b),y.push(S);let k=1;for(let T=1;T<c.length;T++){let E=u[u.length-T],C=l[l.length-T];if(E===C)k*=E;else break}k%4===0?(g=!0,f=!0):(x||$||b||S)&&(f=!0)}else f=!0;return y.push(f),{name:e,shaderCache:{hint:t+y.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Bo(w,u,l,c,f,d,g,n,r.dataType,a.dataType,s,i),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(c)/4)},...j(u,l,c)]})}},Ge=(e,t,r,a,n,i)=>{e.compute(No(t,n??"",e.inputs[0],e.inputs[1],r,a,i))},Fp=e=>{Ge(e,"Add",(t,r)=>`${t}+${r}`)},jp=e=>{Ge(e,"Div",(t,r)=>`${t}/${r}`)},Kp=e=>{Ge(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Zp=e=>{Ge(e,"Mul",(t,r)=>`${t}*${r}`)},Xp=e=>{let t=R("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ge(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Qp=e=>{Ge(e,"Sub",(t,r)=>`${t}-${r}`)},Yp=e=>{Ge(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Jp=e=>{Ge(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ec=e=>{Ge(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},tc=e=>{Ge(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Mo,Do,Po,Uo,rc,ic,Gm=P(()=>{Q(),re(),be(),ie(),Mo=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],n=a.dataType,i=a.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==a.dims[d])throw new Error("non concat dimensions must match")})}})},Do=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Po=(e,t)=>{let r=e.length,a=[];for(let n=0;n<r;++n){let i=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?a.push(i):n===0?a.push(`if (inputIndex == ${n}u) { ${i} }`):n===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${n}) { ${i} }`)}return a.join(`
`)},Uo=(e,t,r,a)=>{let n=z.size(r),i=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:n}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],i[w]=u,d.push(e[w].dims.length),s[w]=R(`input${w}`,a,d[w]),l.push("rank"),c.push({type:12,data:i[w]});for(let w=0;w<e.length;++w)c.push(...j(e[w].dims));c.push(...j(r));let h=H("output",a,r.length),f=h.indicesGet("indices",t),g=Array.from(Array(i.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),y=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)w.registerUniform(`sizeInConcatAxis${x}`,"u32");return w.declareVariables(...s,h)})()}

  ${Do(i.length,g)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${g});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Po(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:y}},rc=(e,t)=>{let r=e.inputs,a=r[0].dims,n=z.normalizeAxis(t.axis,a.length);Mo(r,n);let i=a.slice();i[n]=r.reduce((u,l)=>u+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(u=>z.size(u.dims)>0);e.compute(Uo(s,n,i,r[0].dataType),{inputs:s})},ic=e=>me({axis:e.axis})}),Et,Ct,zt,Fa,Ot=P(()=>{Q(),re(),Et=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ct=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},zt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Fa=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[Rd,Bd];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Se,ac,ja=P(()=>{Se=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ac=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),nc,Hm=P(()=>{nc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),lr,Ka,Za=P(()=>{Q(),re(),ie(),Ot(),lr=(e,t,r,a,n)=>{let i=a-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${F(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,F(n,u+i,a))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Ka=(e,t,r,a,n=!1,i)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],h=we(d),f=we(c),g=we(l),y=z.size(r)/h/g,w=e.length>2,x=a?a.slice(0,-2):r.slice(0,-2),$=[z.size(x),l,d],b=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Ct(t,b),b.push(...j(x,s,u)),w&&b.push(...j(e[2].dims)),b.push(...j($));let S=k=>{let T=La("batch_dims",e[0].dataType,x.length),E=R("a",e[0].dataType,s.length,f),C=R("b",e[1].dataType,u.length,h),A=H("output",e[0].dataType,$.length,h),D=ke(A.type.tensor),L=Et(t,A.type.value,D),Y=[E,C],ee="";if(w){let X=n?h:1;Y.push(R("bias",e[2].dataType,e[2].dims.length,X)),ee=`${n?`value += bias[col / ${X}];`:`value += ${A.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];zt(t,K);let J=()=>{let X=`var a_data: ${E.type.value};`;for(let q=0;q<f;q++)X+=`
              let b_data${q} = b[(b_offset + (k + ${q}) * uniforms.N + col) / ${h}];`;for(let q=0;q<g;q++){X+=`a_data = a[(a_offset + (row + ${q}) * uniforms.K + k) / ${f}];`;for(let ne=0;ne<f;ne++)X+=`
            values[${q}] = fma(${C.type.value}(a_data${f===1?"":`[${ne}]`}), b_data${ne}, values[${q}]);
`}return X};return`
  ${k.registerUniforms(K).registerInternalVariables(T).declareVariables(...Y,A)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${lr("a_indices",E,E.rank-2,T.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${lr("b_indices",C,C.rank-2,T.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${A.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${J()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${ee}
      ${L}
      let cur_indices = ${A.type.indices}(batch, row + i, col);
      let offset = ${A.indicesToOffset("cur_indices")};
      ${A.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${f};${g};${n}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:S}}}),Wo,qo,$a,Di,Lo,va,Vo,Kr,Xa=P(()=>{Q(),re(),ie(),Ot(),Za(),ja(),Wo=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,qo=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,$a=(e,t,r="f32",a,n=!1,i=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=n?l:i,h=n?i:l,f=c/t[0],g=i/t[1];if(!((n&&f===4&&e[1]===4||!n&&(f===3||f===4))&&c%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${r}>, ${c/f}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Wo(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${qo(n,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Di=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Lo=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",va=(e,t,r="f32",a,n=!1,i=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=n?d:i,f=n?i:d;if(!(f%t[1]===0&&h%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let g=f/t[1],y=h/t[0],w=i/t[1],x=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Di(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Di(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Lo(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},Vo=(e,t,r,a,n=!1)=>{let[i,s,u,l]=a,d=ke(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Se(e,d)} {
      var value = ${Se(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${lr("aIndices",s,s.rank-2,i.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Se(e,d)} {
      var value = ${Se(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${lr("bIndices",u,u.rank-2,i.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Se(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Se(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Kr=(e,t,r,a,n=!1,i)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=a?a.slice(0,-2):r.slice(0,-2),h=z.size(c),f=s[s.length-2],g=s[s.length-1],y=u[u.length-1],w=g%4===0&&y%4===0,x=f<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(y/$[0]/x[0]),Math.ceil(f/$[1]/x[1]),Math.ceil(h/$[2]/x[2])],S=w?4:1,k=[...l,f,g/S],T=k.length,E=[...d,g,y/S],C=E.length,A=[h,f,y/S],D=[{type:6,data:f},{type:6,data:y},{type:6,data:g}];Ct(t,D),D.push(...j(c,k,E));let L=["rank","rank"],Y=e.length>2;Y&&(D.push(...j(e[2].dims)),L.push("rank")),D.push(...j(A));let ee=K=>{let J=c.length,X=La("batchDims",e[0].dataType,J,1),q=ke(e[0].dataType),ne=R("a",e[0].dataType,T,S),pe=R("b",e[1].dataType,C,S),V=H("result",e[0].dataType,A.length,S),ce=[ne,pe];if(Y){let N=n?S:1;ce.push(R("bias",e[2].dataType,e[2].dims.length,N))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];zt(t,B);let U=ke(V.type.tensor),ae=Et(t,V.type.value,U),ye=Vo(S,Y,ae,[X,ne,pe,V],n);return`
  ${K.registerUniforms(B).registerInternalVariables(X).declareVariables(...ce,V)}
  ${ye}
  ${w?$a(x,$,q,X):va(x,$,q,X)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${w};${n}`,inputDependencies:L},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:D}),getShaderSource:ee}}}),Go,sc,Fm=P(()=>{Q(),it(),ie(),Ot(),ja(),Hm(),Xa(),Go=(e,t,r,a,n=!1,i,s=4,u=4,l=4,d="f32")=>{let c=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},h=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",$=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Se(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${w}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&a?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Se(s,d)}(0.0);`:a&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Se(s,d)}(0.0);`,k=e?a&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Se(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Se(u,d)}(0.0);`,T=Se(l,d),E=Se(e?s:u,d),C=Se(e?u:s,d),A=Et(i,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${ac(n)}
      ${A}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},sc=(e,t,r,a,n,i,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],f=d?r[2]:r[3],g=d?r[1]:r[2],y=d?r[3]:r[1],w=d&&(c%4===0||c%3===0)&&y%4===0,x=d?y:f*g,$=d?f*g:y,b=[8,8,1],S=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(x/b[0]/S[0]),Math.ceil($/b[1]/S[1]),Math.ceil(h/b[2]/S[2])];se("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=w?d&&c%4!==0?3:4:1,E=b[1]*S[1],C=b[0]*S[0],A=Math.max(b[0]*T,b[1]),D=a%E===0,L=n%C===0,Y=i%A===0,ee=w?[T,4,4]:[1,1,1],K=[{type:6,data:a},{type:6,data:n},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ct(t,K),K.push(...j(e[0].dims,e[1].dims));let J=["rank","rank"];s&&(K.push(...j(e[2].dims)),J.push("rank")),K.push(...j(r));let X=q=>{let ne=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];zt(t,ne);let pe=w?4:1,V=ke(e[0].dataType),ce=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${V}>`:V}) {
        result[flatIndex] = ${w?`vec4<${V}>`:V}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${V}>`:V}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,B=R("x",e[0].dataType,e[0].dims.length,T===3?1:T),U=R("w",e[1].dataType,e[1].dims.length,pe),ae=[B,U],ye=H("result",e[0].dataType,r.length,pe);if(s){let N=R("bias",e[2].dataType,e[2].dims.length,pe);ae.push(N),ce+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${V}>`:V} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${nc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${q.registerUniforms(ne).declareVariables(...ae,ye)}
        ${ce}
        ${Go(d,D,L,Y,s,t,ee[0],ee[1],ee[2],V)}
        ${w?$a(S,b,V,void 0,!d,A):va(S,b,V,void 0,!d,A,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${w};${D};${L};${Y};${E};${C};${A}`,inputDependencies:J},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:K}),getShaderSource:X}}}),Ho,Pi,Yt,Fo,Ui,jo,oc,uc,jm=P(()=>{Q(),it(),re(),ie(),Ot(),ja(),Ho=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Pi=e=>typeof e=="number"?[e,e,e]:e,Yt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Fo=(e,t,r,a=1)=>{let n=Yt(t,a);return Math.floor((e[0]*(r-1)-r+n)/2)},Ui=(e,t,r,a,n)=>{n==null&&(n=Fo(e,t[0],a[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*n)/a[s]+1));return i},jo=(e,t,r,a,n,i,s,u,l,d)=>{let c,h,f,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=Ui([t,r,a,1],[u,l,d],1,[n,i,s],e);h=y[0],f=y[1],g=y[2]}else if(Array.isArray(e)){if(!e.every((w,x,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=Ui([t,r,a,1],[u,l,d],1,[n,i,s],e[0]);h=y[0],f=y[1],g=y[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),f=Math.ceil(r/i),g=Math.ceil(a/s);let y=(h-1)*n+u-t,w=(f-1)*i+l-r,x=(g-1)*s+d-a,$=Math.floor(y/2),b=y-$,S=Math.floor(w/2),k=w-S,T=Math.floor(x/2),E=x-T;c={top:S,bottom:k,left:T,right:E,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:f,outWidth:g}},oc=(e,t,r,a,n,i=!1,s="channelsLast")=>{let u,l,d,c,h;if(s==="channelsLast")[u,l,d,c,h]=e;else if(s==="channelsFirst")[u,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,g,y,w]=t,[x,$,b]=Pi(r),[S,k,T]=Pi(a),E=Yt(g,S),C=Yt(y,k),A=Yt(w,T),{padInfo:D,outDepth:L,outHeight:Y,outWidth:ee}=jo(n,l,d,c,x,$,b,E,C,A),K=i?f*h:f,J=[0,0,0,0,0];return s==="channelsFirst"?J=[u,K,L,Y,ee]:s==="channelsLast"&&(J=[u,L,Y,ee,K]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:L,outHeight:Y,outWidth:ee,outChannels:K,padInfo:D,strideDepth:x,strideHeight:$,strideWidth:b,filterDepth:g,filterHeight:y,filterWidth:w,effectiveFilterDepth:E,effectiveFilterHeight:C,effectiveFilterWidth:A,dilationDepth:S,dilationHeight:k,dilationWidth:T,inShape:e,outShape:J,filterShape:t}},uc=(e,t,r,a,n,i)=>{let s=i==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((x,$)=>$)},d=[Math.ceil(Ho(l.x.map(x=>r[x]))/u[0]),1,1];se("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,h=z.size(r),f=[{type:12,data:h},{type:12,data:a},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Ct(t,f),f.push(...j(e[0].dims,e[1].dims));let g=["rank","rank"],y=e.length===3;y&&(f.push(...j(e[2].dims)),g.push("rank")),f.push(...j(r));let w=x=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];zt(t,$);let b=1,S=ke(e[0].dataType),k=R("x",e[0].dataType,e[0].dims.length,c),T=R("W",e[1].dataType,e[1].dims.length,b),E=[k,T],C=H("result",e[0].dataType,r.length,b),A="";if(y){let Y=R("bias",e[2].dataType,e[2].dims.length,b);E.push(Y),A+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?F("coords",4,5):F("coords",1,5)}];
        }`}let D=Se(c,S),L=Et(t,D,S);return`
            ${A}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${x.registerUniforms($).declareVariables(...E,C)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${F("coords",0,k.rank)};
              let d2 = ${s?F("coords",k.rank-1,k.rank):F("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?F("coords",1,k.rank):F("coords",2,k.rank)},
              ${s?F("coords",2,k.rank):F("coords",3,k.rank)},
              ${s?F("coords",3,k.rank):F("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?F("uniforms.x_shape",1,k.rank):F("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?F("uniforms.x_shape",2,k.rank):F("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?F("uniforms.x_shape",3,k.rank):F("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?F("uniforms.x_shape",4,k.rank):F("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${L}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${y}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:w}}}),lc,dc,Km=P(()=>{Q(),re(),ie(),Ot(),lc=(e,t,r,a)=>{let n=e.length>2,i=n?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?we(d):1,f=z.size(r)/h,g=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Ct(t,g),g.push(...j(s,[u[0],u[1],u[2],u[3]/h]));let y=n?["rank","rank","rank"]:["rank","rank"];g.push(...j([r[0],r[1],r[2],r[3]/h]));let w=x=>{let $=H("output",e[0].dataType,r.length,h),b=ke($.type.tensor),S=Et(t,$.type.value,b),k=R("x",e[0].dataType,s.length),T=R("w",e[1].dataType,u.length,h),E=[k,T];n&&E.push(R("b",e[2].dataType,e[2].dims,h));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];zt(t,C);let A=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(C).declareVariables(...E,$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${A}
    ${i}
    ${S}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:w}},dc=(e,t,r,a)=>{let n=e.length>2,i=we(r[3]),s=we(r[2]),u=z.size(r)/i/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],c=[r[0],r[1],r[2],r[3]/i],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ct(t,h),h.push(...j(l,d,c));let f=(s-1)*t.strides[1]+d[1],g=y=>{let w=H("output",e[0].dataType,c.length,i),x=ke(w.type.tensor),$=Et(t,w.type.value,x),b=R("x",e[0].dataType,l.length,i),S=R("w",e[1].dataType,d.length,i),k=[b,S];n&&k.push(R("b",e[2].dataType,e[2].dims,i));let T=n?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return zt(t,E),`
  ${y.registerUniforms(E).declareVariables(...k,w)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${f}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${$}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${f};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:g}}}),Ko,Rr,Zo,Br,xa,Wi,Xo,Qo,ka,Zm=P(()=>{re(),Fm(),jm(),Xa(),Km(),Ot(),Za(),yt(),Ko=(e,t,r,a,n,i)=>{let s=e[0],u=e.slice(i?1:2,i?3:4),l=u.length,d=t[0],c=t.slice(2).map((f,g)=>f+(f-1)*(r[g]-1)),h=u.map((f,g)=>f+a[g]+a[g+l]).map((f,g)=>Math.floor((f-c[g]+n[g])/n[g]));return h.splice(0,0,s),h.splice(i?3:1,0,d),h},Rr=[2,3,1,0],Zo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Br=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();Fr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:a}),n},xa=e=>{let t=Fa(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,i=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:n,group:i,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Wi=(e,t,r,a)=>{let n=r.format==="NHWC",i=Ko(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let E=[t[0]];if(n){let C=e.kernelCustomData.wT??e.compute(Ne(t[1],Rr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),E.push(C)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(dc(E,r,i,a),{inputs:E}):e.compute(lc(E,r,i,a),{inputs:E});return}let s=t.length===3,u=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],h=t[1].dims[3],f=i[n?1:2],g=i[n?2:3],y=i[n?3:1],w=n&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=i[0],C,A,D,L=[];if(n){let K=e.kernelCustomData.wT??e.compute(Ne(t[1],Rr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),w){let J=u*l*d;C=t[0].reshape([1,E,J]),A=K.reshape([1,J,y]),D=[1,E,y]}else C=t[0].reshape([E,u*l,d]),A=K.reshape([1,d,y]),D=[E,f*g,y];L.push(C),L.push(A)}else C=t[0].reshape([E,d,u*l]),A=t[1].reshape([1,y,d]),D=[E,y,f*g],L.push(A),L.push(C);s&&L.push(t[2]);let Y=D[2],ee=L[0].dims[L[0].dims.length-1];Y<8&&ee<8?e.compute(Ka(L,r,i,D,n,a),{inputs:L}):e.compute(Kr(L,r,i,D,n,a),{inputs:L});return}let x=!0,$=e.kernelCustomData.wT??e.compute(Ne(t[1],Rr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];s&&b.push(t[2]);let S=n?f*g:y,k=n?y:f*g,T=c*h*d;e.compute(sc(b,r,i,S,k,T,s,x,a),{inputs:b})},Xo=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Br({...t,pads:n,strides:i,dilations:s,kernelShape:u},a);Wi(e,a,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Qo=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Br(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=oc(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(uc(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],a))},ka=(e,t)=>{if(Zo(e.inputs,t),e.inputs[0].dims.length===3)Xo(e,t);else if(e.inputs[0].dims.length===5)Qo(e,e.inputs,t);else{let r=Br(t,e.inputs);Wi(e,e.inputs,r)}}}),pc,Xm=P(()=>{Q(),it(),re(),ie(),pc=(e,t,r)=>{let a=e.length>2,n=t.outputShape,i=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=i?we(l):1,h=i?we(d):1,f=i?d===1?c:h:1,g=z.size(n)/h,y=[Math.ceil(g/64),1,1];se("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let w=["rank","rank"],x=[t.strides[0],t.strides[1]],$=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],b=[t.dilations[0],t.dilations[1]],S=[$[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),$[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],k=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],T=[{type:12,data:g},{type:12,data:x},{type:12,data:$},{type:12,data:b},{type:12,data:S},{type:6,data:k},{type:12,data:l},{type:12,data:d},...j(e[0].dims,e[1].dims)];a&&(T.push(...j(e[2].dims)),w.push("rank")),T.push(...j(n));let E=C=>{let A=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:$.length},{name:"dilations",type:"u32",length:$.length},{name:"effective_filter_dims",type:"u32",length:S.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],D=ke(e[0].dataType),L=i?1:2,Y=i?2:3,ee=i?3:1,K=R("W",e[1].dataType,e[1].dims.length,f),J=R("Dy",e[0].dataType,e[0].dims.length,c),X=[J,K];a&&X.push(R("bias",e[2].dataType,[n[ee]].length,h));let q=H("result",e[0].dataType,n.length,h),ne=()=>{let V="";if(c===1)V+=`
        let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${K.getByOffset(`w_offset / ${f}`)};
        dotProd = dotProd + xValue * wValue;`;else if(d===1)V+=`
          let wValue = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${f}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ce=0;ce<c;ce++)V+=`
            let wValue${ce} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ce}, wOutChannel)`)} / ${f}`)};
            dotProd = dotProd + xValue[${ce}] * wValue${ce};`;return V},pe=`
            let outputIndices = ${q.offsetToIndices(`global_idx * ${h}`)};
            let batch = ${q.indicesGet("outputIndices",0)};
            let d1 = ${q.indicesGet("outputIndices",ee)};
            let r = ${q.indicesGet("outputIndices",L)};
            let c = ${q.indicesGet("outputIndices",Y)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${D}(dyRCorner) + ${D}(wR)) / ${D}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${D}(uniforms.Dy_shape[${L}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${D}(dyCCorner) + ${D}(wC)) / ${D}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${D}(uniforms.Dy_shape[${Y}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${c}) {
                  let xValue = ${i?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):J.get("batch","inputChannel","idyR","idyC")};
                  ${ne()}
                  inputChannel = inputChannel + ${c};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${h}]`:""};
            ${q.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(A).declareVariables(...X,q)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${pe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${f}${h}${d===1}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:T}),getShaderSource:E}}}),Yo,Jo,eu,qi,cc,tu,Li,ru,hc,Qm=P(()=>{Xm(),Ot(),yt(),Yo=(e,t,r,a,n,i)=>(e-1)*t+r+(a-1)*n+1-i,Jo=(e,t,r,a,n)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[n]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[n]=i)},eu=(e,t,r,a,n,i,s,u,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let f=e[0],g=t[u?3:1]*n;for(let y=0,w=e.length-c-(u?1:0);y<c;++y,++w){let x=e[w],$=h?x*s[y]:d[y],b=Yo(x,s[y],i[y],t[w],r[y],$);Jo(b,a,i,y,y+c),h&&d.push(s[y]*(x-1)+l[y]+(t[w]-1)*r[y]+1-i[y]-i[y+c])}d.splice(0,0,f),d.splice(u?3:1,0,g)},qi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,f)=>h*f,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let n=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}eu(u,r,l,e.autoPad,e.group,n,d,a,s,i);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:s,outputShape:i,dilations:l,strides:d}),c},cc=e=>{let t=Fa(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,i=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:a,format:r,dilations:n,group:i,kernelShape:s,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},tu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Li=(e,t,r,a)=>{let n=e.kernelCustomData.wT??e.compute(Ne(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let i=[t[0],n];t.length===3&&i.push(t[2]),e.compute(pc(i,r,a),{inputs:i})},ru=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),i=[1].concat(i),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=qi({...t,pads:u,strides:s,dilations:i,kernelShape:n,outputPadding:l},a);Li(e,a,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},hc=(e,t)=>{if(tu(e.inputs,t),e.inputs[0].dims.length===3)ru(e,t);else{let r=qi(t,e.inputs);Li(e,e.inputs,r)}}}),iu,fc,mc,Ym=P(()=>{Q(),re(),be(),ie(),iu=(e,t,r,a)=>{let n=z.size(t),i=t.length,s=R("input",e,i),u=H("output",e,i),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=z.normalizeAxis(l,i),c=h=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=F("uniforms.input_shape","uniforms.axis",i),y=a.reverse?f+(a.exclusive?" + 1":""):"0",w=a.reverse?g:f+(a.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...j(t,t)]}),getShaderSource:c}},fc=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,n=e.inputs[1];e.compute(iu(a,r,n,t),{inputs:[0]})},mc=e=>{let t=e.exclusive===1,r=e.reverse===1;return me({exclusive:t,reverse:r})}}),au,nu,su,gc,yc,Jm=P(()=>{Q(),re(),be(),ie(),au=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},nu=(e,t,r,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)n.push(r.indicesSet("a",e[i],`i[${i}]`));return n.push("return a;}"),n.join(`
`)},su=(e,t)=>{let r,a,n,i,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,a,n,i]=e.dims,s=c?[r,a,n,d,d,i/d**2]:[r,a,n,i/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,n,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,i/d**2,a,n]:[r,i/d**2,d,d,a,n],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),f=h.dims.length,g=e.dataType,y=R("a",g,f),w=H("output",g,f),x=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(y,w)}

  ${nu(u,f,y,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=l?[r,a*d,n*d,i/d**2]:[r,i/d**2,a*d,n*d],S=z.size(b),k=h.dims,T=z.sortBasedOnPerm(k,u);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...j(k,T)]}},getShaderSource:x}},gc=(e,t)=>{au(e.inputs),e.compute(su(e.inputs[0],t))},yc=e=>me({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Nr,Jt,Vi,ou,uu,lu,du,Gi,pu,_c,wc,eg=P(()=>{Q(),re(),be(),ie(),Nr="[a-zA-Z]|\\.\\.\\.",Jt="("+Nr+")+",Vi="^"+Jt+"$",ou="("+Jt+",)*"+Jt,uu="^"+ou+"$",lu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},du=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(uu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let u=e[s].dims.slice();if(!i.match(RegExp(Vi)))throw new Error("Invalid LHS term");let l=this.processTerm(i,!0,u,s);this.lhs.push(l)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(Jt)))throw new Error("Invalid RHS");(n=a.match(RegExp(Nr,"g")))==null||n.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let n=r.length,i=!1,s=[],u=0;if(!e.match(RegExp(Vi))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Nr,"g")),d=new lu(a);return l==null||l.forEach((c,h)=>{if(c==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let f=n-l.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let y=String.fromCharCode(48+g);d.addSymbol(y,h+g),this.addSymbol(y,r[u++],a)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],a)}),d}},Gi=e=>e+"_max",pu=(e,t,r,a)=>{let n=e.map(d=>d.length).map((d,c)=>R(`input${c}`,t,d)),i=z.size(a),s=H("output",t,a.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",f="var sum = 0.0;",g="sum += prod;",y=[],w=[],x=[],$=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,T)=>{var E;if(r.rhs.symbolToIndices.has(T)){let C=(E=r.rhs.symbolToIndices.get(T))==null?void 0:E[0];C!==void 0&&r.lhs.forEach((A,D)=>{if(k.inputIndices.includes(D)){let L=A.symbolToIndices.get(T);if(L===void 0)throw new Error("Invalid symbol error");L.forEach(Y=>{c.push(`${n[D].indicesSet(`input${D}Indices`,Y,s.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,A)=>{if(k.inputIndices.includes(A)){let D=C.symbolToIndices.get(T);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(L=>{y.push(`${n[A].indicesSet(`input${A}Indices`,L,`${T}`)}`)}),$.push(`prod *= ${n[A].getByIndices(`input${A}Indices`)};`)}}),w.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Gi(T)}; ${T}++) {`),x.push("}")});let S=b?[...c,`let sum = ${n.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...c,f,...w,...y,h,...$,g,...x];return`
            ${d.registerUniforms(u.map(k=>({name:`${Gi(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((k,T)=>`var input${T}Indices: ${n[T].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>{var f;return{type:12,data:((f=r.symbolToInfo.get(h))==null?void 0:f.dimValue)||0}});d.push({type:12,data:i});let c=e.map((h,f)=>[...j(h)]).reduce((h,f)=>h.concat(f),d);return c.push(...j(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}},getShaderSource:l}},_c=(e,t)=>{let r=new du(e.inputs,t.equation),a=r.outputDims,n=e.inputs.map((i,s)=>i.dims);e.compute(pu(n,e.inputs[0].dataType,r,a))},wc=e=>{let t=e.equation.replace(/\s+/g,"");return me({equation:t})}}),cu,Hi,hu,fu,bc,tg=P(()=>{Q(),re(),ie(),cu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;a<r.length&&n<t.length;++a,++n)if(r[a]!==t[n]&&r[a]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Hi=(e,t)=>{let r=e.length-t.length,a=[];for(let n=0;n<r;++n)a.push(e[n]);for(let n=0;n<t.length;++n)a.push(t[n]===1?e[n+r]:t[n]);return a},hu=(e,t)=>e.length>t.length?Hi(e,t):Hi(t,e),fu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=hu(t,r),n=e[0].dataType,i=n===9||z.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,u=i||a.length>0&&a[a.length-1]%4===0?4:1,l=Math.ceil(z.size(a)/u),d=h=>{let f=R("input",n,t.length,s),g=H("output",n,a.length,u),y;if(n===9){let w=(x,$,b="")=>`
          let outputIndices${$} = ${g.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${f.broadcastedIndicesToOffset(`outputIndices${$}`,g)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${x}[${$}] = ${b}(${f.getByOffset(`index${$}`)}[component${$}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(f,g)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},c=[{type:12,data:l},...j(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},bc=e=>{cu(e.inputs),e.compute(fu(e.inputs),{inputs:[0]})}}),mu,$c,rg=P(()=>{Q(),re(),ie(),Ha(),mu=e=>{let t=e[0].dataType,r=z.size(e[0].dims),a=z.size(e[1].dims),n=a%4===0,i=s=>{let u=R("x",t,[1],4),l=R("bias",t,[1],4),d=H("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,f=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${wa(Ee(t))}

    ${s.mainStart(qt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ba("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/qt/4)}})}},$c=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?qp(e):e.compute(mu(e.inputs))}}),gu,yu,vc,xc,ig=P(()=>{Q(),re(),be(),ie(),gu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},yu=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=z.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(i,1,...a);let u=r[i],l=e[0].dataType===9?4:1,d=Math.ceil(z.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:i},...j(e[0].dims,e[1].dims,s)],h=f=>{let g=R("data",e[0].dataType,e[0].dims.length,l),y=R("inputIndices",e[1].dataType,e[1].dims.length),w=H("output",e[0].dataType,s.length,l),x=b=>{let S=a.length,k=`var indicesIndices${b}  = ${y.type.indices}(0);`;for(let T=0;T<S;T++)k+=`${S>1?`indicesIndices${b}[${T}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${T}]`:`outputIndices${b}`};`;k+=`
          var idx${b} = ${y.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${g.type.indices};
        `;for(let T=0,E=0;T<n;T++)T===i?(k+=`${n>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = u32(idx${b});`,E+=S):(k+=`${n>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${E}]`:`outputIndices${b}`};`,E++);return k},$;if(e[0].dataType===9){let b=(S,k,T="")=>`
          let outputIndices${k} = ${w.offsetToIndices(`outputOffset + ${k}u`)};
          ${x(k)};
          let offset${k} = ${g.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${T}(${g.getByOffset(`index${k}`)}[component${k}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${g.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,w)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},vc=e=>me({axis:e.axis}),xc=(e,t)=>{let r=e.inputs;gu(r),e.compute(yu(e.inputs,t))}}),_u,kc,Sc,ag=P(()=>{Q(),re(),ie(),_u=(e,t,r,a,n,i,s,u,l)=>{let d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[i];d.push(...j(t.dims,c));let h=f=>{let g=R("indices_data",t.dataType,t.dims.length),y=H("input_slice_offsets_data",12,1,1),w=[g,y],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(x).declareVariables(...w)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},kc=(e,t)=>{let r=e.inputs,a=r[0].dims,n=r[0].dataType,i=r[1].dims,s=i[i.length-1],u=z.sizeToDimension(i,i.length-1),l=z.sizeFromDimension(a,t.batchDims+s),d=z.sizeToDimension(a,t.batchDims),c=z.sizeFromDimension(a,t.batchDims),h=u/d,f=new Array(s),g=l;for(let k=0;k<s;++k)f[s-1-k]=g,g*=a[t.batchDims+s-1-k];let y=_u(e,r[1],f,t.batchDims,a,u,h,c,s),w=t.batchDims+s;if(w>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=i.slice(0,-1).concat(a.slice(w)),$=z.size(x),b=[{type:12,data:$},{type:12,data:l},...j(r[0].dims,y.dims,x)],S=k=>{let T=R("data",r[0].dataType,r[0].dims.length),E=R("slice_offsets",12,y.dims.length),C=H("output",r[0].dataType,x.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,E,C)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:n}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:S},{inputs:[r[0],y]})},Sc=e=>({batchDims:e.batch_dims,cacheKey:""})}),wu,bu,Tc,Ic,ng=P(()=>{Q(),re(),be(),ie(),wu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,n=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==n.dims.length||!n.dims.map((u,l)=>l===r?Math.ceil(u/a)===i.dims[l]:u===i.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((u,l)=>u===i.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},bu=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=z.normalizeAxis(t.gatherAxis,n),s=z.normalizeAxis(t.quantizeAxis,n),u=r.slice(0);u.splice(i,1,...a);let l=z.size(u),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...j(...e.map((g,y)=>g.dims),u)],f=g=>{let y=R("data",e[0].dataType,e[0].dims.length),w=R("inputIndices",e[1].dataType,e[1].dims.length),x=R("scales",e[2].dataType,e[2].dims.length),$=e.length>3?R("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=H("output",d,u.length),S=[y,w,x];$&&S.push($);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(k).declareVariables(...S,b)}
        ${g.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ee(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,y)=>y!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:f}},Tc=(e,t)=>{let r=e.inputs;wu(r,t),e.compute(bu(e.inputs,t))},Ic=e=>me({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),$u,vu,Ec,Cc,sg=P(()=>{Q(),re(),be(),ie(),$u=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},vu=(e,t)=>{let r=e[0].dims,a=e[0].dataType,n=r.length,i=e[1].dims,s=e[1].dataType,u=z.normalizeAxis(t.axis,n),l=r[u],d=i.slice(0),c=z.size(d),h=R("input",a,n),f=R("indicesInput",s,i.length),g=H("output",a,d.length),y=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return y.push(...j(r,i,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,g)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},Ec=e=>me({axis:e.axis}),Cc=(e,t)=>{let r=e.inputs;$u(r),e.compute(vu(e.inputs,t))}}),xu,ku,zc,Ac,og=P(()=>{Q(),re(),ie(),xu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ku=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[n,i,s]=Od.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),u=[n,i];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(i/l),c=Math.ceil(n/l),h=!0,f=z.size(u),g=[{type:12,data:h?d:f},{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(g.push(...j(e[2].dims)),y.push("rank")),g.push(...j(u));let w=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",k=R("a",e[0].dataType,e[0].dims),T=R("b",e[1].dataType,e[1].dims),E=k.type.value,C=null,A=[k,T];e.length===3&&(C=R("c",e[2].dataType,e[2].dims.length),A.push(C));let D=H("output",e[0].dataType,u.length);A.push(D);let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(L).declareVariables(...A)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${S}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${E}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=$=>{let b=R("a",e[0].dataType,e[0].dims),S=R("b",e[1].dataType,e[1].dims),k=null,T=[b,S];e.length===3&&(k=R("c",e[2].dataType,e[2].dims.length),T.push(k));let E=H("output",e[0].dataType,u.length);T.push(E);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],A="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let L=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(C).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${$.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${A}
      }
      workgroupBarrier();
    }

    ${L}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:g}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:w}},zc=e=>{let t=e.transA,r=e.transB,a=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:a,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Ac=(e,t)=>{xu(e.inputs),e.compute(ku(e.inputs,t))}}),Ye,rt,$t,vt,Su,Tu,Iu,Eu,Cu,zu,Au,Ou,Oc,Rc,ug=P(()=>{Q(),re(),be(),ie(),[Ye,rt,$t,vt]=[0,1,2,3],Su=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Tu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Iu=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Eu=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Cu=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,zu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ye}] = batch;
     indices[${rt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${$t}] = u32(r);
            indices[${vt}] = u32(c);
          }
        `;case"border":return`
          indices[${$t}] = u32(clamp(r, 0, H - 1));
          indices[${vt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${$t}] = gs_reflect(r, border[1], border[3]);
          indices[${vt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Au=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ye}], indices[${rt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ye}], indices[${rt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ye}], indices[${rt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ou=(e,t)=>{let r=R("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=R("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ye,rt,$t,vt]=[0,3,1,2]);let s=H("output",e[0].dataType,i.length),u=r.type.value,l=z.size(i),d=[{type:12,data:l},...j(e[0].dims,a,i)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Tu}
  ${Iu(u)}
  ${Eu(t)}
  ${Cu(t)}
  ${zu(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${$t}]);
      let W_in = i32(uniforms.x_shape[${vt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ye}], indices[${$t}], indices[${vt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Au(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let f=z.size(i);return{outputs:[{dims:i,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:c}},Oc=(e,t)=>{Su(e.inputs),e.compute(Ou(e.inputs,t))},Rc=e=>me({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ce,Ru,Bc,Fi,Bu,or,Nc,Mc=P(()=>{Q(),re(),be(),qa(),Ga(),ie(),yt(),Ce=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ru=(e,t)=>{let r=e[0],a=Ce(e,1),n=Ce(e,2),i=Ce(e,3),s=Ce(e,4),u=Ce(e,5),l=Ce(e,6),d=Ce(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=h,y=0,w=0,x=Math.floor(f/t.numHeads);if(l&&d&&z.size(l.dims)&&z.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],w=l.dims[2]}else if(l&&z.size(l.dims)||d&&z.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(a&&z.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,g=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,g=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,g=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(i&&z.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=y+g,S=0;if(s&&z.size(s.dims)>0){S=8;let C=s.dims;throw C.length===1?C[0]===c?S=1:C[0]===3*c+2&&(S=3):C.length===2&&C[0]===c&&C[1]===b&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=f;if(n&&z.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(g!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(g!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],k=!0}}let E=!1;if(s&&z.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&z.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:f,vHiddenSize:T,headSize:x,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:E,passPastInKv:k,qkvFormat:$}},Bc=e=>me({...e}),Fi=me({perm:[0,2,1,3]}),Bu=(e,t,r,a,n,i,s)=>{let u=[a,n,i],l=z.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:i}],c=h=>{let f=H("qkv_with_bias",t.dataType,u),g=R("qkv",t.dataType,u),y=R("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(g,y,f)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},or=(e,t,r,a,n,i,s,u)=>{let l=i;if(s&&z.size(s.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Bu(e,i,s,t,a,r*n,u),l=l.reshape([t,a,r,n]),r===1||a===1?l:e.compute(Ne(l,Fi.perm),{inputs:[l],outputs:[-1]})[0]}else return i.dims.length===3&&(l=i.reshape([t,a,r,n])),r===1||a===1?l:e.compute(Ne(l,Fi.perm),{inputs:[l],outputs:[-1]})[0]},Nc=(e,t)=>{let r=Ru(e.inputs,t),a=e.inputs[0],n=Ce(e.inputs,1),i=Ce(e.inputs,2),s=Ce(e.inputs,3),u=Ce(e.inputs,4),l=Ce(e.inputs,5),d=Ce(e.inputs,6),c=Ce(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let h=n&&i&&n.dims.length===4&&i.dims.length===4,f=or(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,s,0);if(h)return dr(e,f,n,i,u,void 0,d,c,l,r);if(!n||!i)throw new Error("key and value must be provided");let g=or(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),y=or(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);dr(e,f,g,y,u,void 0,d,c,l,r)}}),Nu,Mu,Du,Pu,Sa,Dc,Pc,Uc=P(()=>{Q(),re(),be(),ie(),Nu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Mu=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),a=r.length),me({numOutputs:a,axis:t.axis,splitSizes:r})},Du=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${F("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Pu=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let n=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(n):a===0?r.push(`if (output_number == ${a}u) { ${n} }`):a===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Sa=(e,t)=>{let r=e[0].dims,a=z.size(r),n=e[0].dataType,i=z.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=R("input",n,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,f=[{type:12,data:a}];for(let y=0;y<t.numOutputs;y++){h+=t.splitSizes[y],l[y]=h;let w=r.slice();w[i]=t.splitSizes[y],c.push(w),s[y]=H(`output${y}`,n,w.length),d.push({dims:c[y],dataType:e[0].dataType})}f.push({type:12,data:l},...j(r,...c));let g=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${Du(l.length)}
  ${Pu(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${F("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f})}},Dc=(e,t)=>{Nu(e.inputs);let r=e.inputs.length===1?t:Mu(e.inputs,t);e.compute(Sa(e.inputs,r),{inputs:[0]})},Pc=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return me({axis:t,numOutputs:a,splitSizes:r})}}),Uu,Wu,ji,Wc,lg=P(()=>{be(),Ga(),Mc(),Uc(),yt(),Uu=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],n=e[2],i=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,f=0,g=!a||a.dims.length===0,y=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=y*t.numHeads);let w=i&&i.dims.length!==0,x=s&&s.dims.length!==0;if(w&&i.dims.length===4&&i.dims[0]===l&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&x){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=i.dims[2]}else if(w||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,S=!1,k=t.kvNumHeads?y*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],S=!0}}let T=e.length>4?e[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:y,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:$}},Wu=me({perm:[0,2,1,3]}),ji=(e,t,r)=>{let a=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),a=e.compute(Ne(a,Wu.perm),{inputs:[a],outputs:[-1]})[0]),a},Wc=(e,t)=>{var x;let r=Uu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((x=e.inputs[1])==null?void 0:x.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=me({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[f,g,y]=!n&&!i?e.compute(Sa([a],h),{inputs:[a],outputs:[-1,-1,-1]}):[a,n,i],w=or(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,f,void 0,0);dr(e,w,ji(e,g,r),ji(e,y,r),void 0,void 0,s,u,void 0,r,l,d)}}),Ki,qu,Lu,qc,dg=P(()=>{Q(),re(),yt(),ie(),Ki=(e,t,r,a,n,i,s,u)=>{let l=we(i),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=n*s,f=64;h===1&&(f=256);let g=[n,s,i/l],y=[n,s,2],w=["rank","type","type"],x=[];x.push(...j(g,y));let $=b=>{let S=R("x",t.dataType,3,l),k=R("scale",r.dataType,r.dims),T=R("bias",a.dataType,a.dims),E=H("output",1,3,2),C=[S,k,T,E];return`
  var<workgroup> workgroup_shared : array<${c}, ${f}>;
  const workgroup_size = ${f}u;
  ${b.declareVariables(...C)}
  ${b.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${gt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${gt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:h},programUniforms:x}),getShaderSource:$},{inputs:[t,r,a],outputs:[-1]})[0]},qu=(e,t,r)=>{let a=t[0].dims,n=a,i=2,s=a[0],u=a[1],l=z.sizeFromDimension(a,i),d=we(l),c=z.size(n)/d,h=Ki(e,t[0],t[1],t[2],s,l,u,r.epsilon),f=[s,u,l/d],g=[s,u],y=["type","none"],w=x=>{let $=R("x",t[0].dataType,f.length,d),b=R("scale_shift",1,g.length,2),S=H("output",t[0].dataType,f.length,d),k=[$,b,S];return`
  ${x.registerUniform("output_size","u32").declareVariables(...k)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...j(f,g,f)]}),getShaderSource:w},{inputs:[t[0],h]})},Lu=(e,t,r)=>{let a=t[0].dims,n=a,i=a[0],s=a[a.length-1],u=z.sizeFromDimension(a,1)/s,l=we(s),d=z.size(n)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],h=["type","type"],f=!1,g=[0,a.length-1];for(let $=0;$<a.length-2;$++)f=f||a[$+1]!==1,g.push($+1);f=f&&a[a.length-1]!==1;let y=f?e.compute(Ne(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},($,b)=>a[g[b]])),w=Ki(e,y,t[1],t[2],i,u,s,r.epsilon),x=$=>{let b=ke(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,k=C=>{let A=C===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${D}(scale.${A}))`;case 2:return`vec2<${b}>(${D}(scale[0].${A}, scale[1].${A}))`;case 4:return`vec4<${b}>(${D}(scale[0].${A}, scale[1].${A}, scale[2].${A}, scale[3].${A}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=R("input",t[0].dataType,t[0].dims,l),E=H("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:x},{inputs:[t[0],w]})},qc=(e,t)=>{t.format==="NHWC"?Lu(e,e.inputs,t):qu(e,e.inputs,t)}}),Vu,Gu,Lc,pg=P(()=>{Q(),re(),ie(),Vu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Gu=(e,t,r)=>{let a=t.simplified,n=e[0].dims,i=e[1],s=!a&&e[2],u=n,l=z.normalizeAxis(t.axis,n.length),d=z.sizeToDimension(n,l),c=z.sizeFromDimension(n,l),h=z.size(i.dims),f=s?z.size(s.dims):0;if(h!==c||s&&f!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${f}`);let g=[];for(let T=0;T<n.length;++T)T<l?g.push(n[T]):g.push(1);let y=we(c),w=["type","type"],x=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&w.push("type");let $=r>1,b=r>2,S=T=>{let E=ke(e[0].dataType),C=[R("x",e[0].dataType,e[0].dims,y),R("scale",i.dataType,i.dims,y)];s&&C.push(R("bias",s.dataType,s.dims,y)),C.push(H("output",e[0].dataType,u,y)),$&&C.push(H("mean_data_output",1,g)),b&&C.push(H("inv_std_output",1,g));let A=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(A).declareVariables(...C)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ga("f32",y)};
    var mean_square_vector = ${ga("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Pt(E,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${gt("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${gt("mean_square_vector",y)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Pt(E,y,"x[j + offset]")};
      let f32scale = ${Pt(E,y,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Pt(E,y,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return $&&k.push({dims:g,dataType:1}),b&&k.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${a}`,inputDependencies:w},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:x}),getShaderSource:S}},Lc=(e,t)=>{Vu(e.inputs),e.compute(Gu(e.inputs,t,e.outputCount))}}),Hu,Vc,cg=P(()=>{re(),Za(),Xa(),Hu=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Vc=e=>{Hu(e.inputs);let t=Wt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Ka(e.inputs,{activation:""},t));else{let n=t[t.length-2],i=z.size(e.inputs[0].dims.slice(0,-2)),s=z.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&n===1&&s===1){let u=e.inputs[0].reshape([1,i,a]),l=e.inputs[1].reshape([1,a,r]),d=[1,i,r],c=[u,l];e.compute(Kr(c,{activation:""},t,d),{inputs:c})}else e.compute(Kr(e.inputs,{activation:""},t))}}}),Fu,ju,Ku,Gc,Hc,hg=P(()=>{Q(),re(),be(),ie(),Fu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!z.areEqual(s.dims,[t.n,n,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(z.size(u)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(z.size(l)!==d)throw new Error("zeroPoints input size error.")}},ju=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,s=t.n,u=r.slice(0,a-2),l=z.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=we(t.k),f=we(d),g=we(s),y=u.concat([n,s]),w=n>1&&s/g%2===0?2:1,x=z.size(y)/g/w,$=64,b=[],S=[l,n,i/h],k=z.convertShape(e[1].dims).slice();k.splice(-1,1,d/f),b.push(...j(S)),b.push(...j(k)),b.push(...j(e[2].dims)),e.length===4&&b.push(...j(z.convertShape(e[3].dims)));let T=[l,n,s/g];b.push(...j(T));let E=C=>{let A=S.length,D=R("a",e[0].dataType,A,h),L=R("b",12,k.length,f),Y=R("scales",e[2].dataType,e[2].dims.length),ee=[D,L,Y],K=e.length===4?R("zero_points",12,e[3].dims.length):void 0;K&&ee.push(K);let J=T.length,X=H("output",e[0].dataType,J,g),q=ke(e[0].dataType),ne=(()=>{switch(h){case 1:return`array<${q}, 8>`;case 2:return`mat4x2<${q}>`;case 4:return`mat2x4<${q}>`;default:throw new Error(`${h}-component is not supported.`)}})(),pe=()=>{let B=`
          // reuse a data
            var input_offset = ${D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ne};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${D.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let U=0;U<g*w;U++)B+=`
            b_value = ${f===1?`b${U}_data`:`b${U}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ne}(${Array.from({length:4},(ae,ye)=>`${q}(b_value_lower[${ye}]), ${q}(b_value_upper[${ye}])`).join(", ")});
            b_dequantized_values = ${h===1?`${ne}(${Array.from({length:8},(ae,ye)=>`(b_quantized_values[${ye}] - ${K?`zero_point${U}`:"zero_point"}) * scale${U}`).join(", ")});`:`(b_quantized_values - ${ne}(${Array(8).fill(`${K?`zero_point${U}`:"zero_point"}`).join(",")})) * scale${U};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(U/g)}]${g>1?`[${U%g}]`:""} += ${Array.from({length:8/h},(ae,ye)=>`${h===1?`a_data[${ye}] * b_dequantized_values[${ye}]`:`dot(a_data[${ye}], b_dequantized_values[${ye}])`}`).join(" + ")};
          `;return B},V=()=>{let B=`
            var col_index = col * ${g};
            ${K?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${q}(8);`}
            `;for(let U=0;U<g*w;U++)B+=`
            let scale${U} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return B},ce=()=>{let B=`col_index = col * ${g};`;for(let U=0;U<g*w;U++)B+=`
            let b${U}_data = ${L.getByIndices(`${L.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return B+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ne};
            var b_dequantized_values: ${ne};`,B};return`
        var<workgroup> workgroup_shared: array<${X.type.value}, ${w*$}>;
        ${C.declareVariables(...ee,X)}
        ${C.mainStart([$,1,1])}
          let output_indices = ${X.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${V()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${ce()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${pe()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${X.type.value} = ${X.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${X.setByIndices(`${X.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${f};${g};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x},programUniforms:b}),getShaderSource:E}},Ku=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,s=t.n,u=r.slice(0,a-2),l=z.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=we(t.k),f=we(d),g=u.concat([n,s]),y=128,w=s%8===0?8:s%4===0?4:1,x=y/w,$=x*f*8,b=$/h,S=$/t.blockSize,k=z.size(g)/w,T=[],E=[l,n,i/h],C=z.convertShape(e[1].dims).slice();C.splice(-1,1,d/f),T.push(...j(E)),T.push(...j(C)),T.push(...j(e[2].dims)),e.length===4&&T.push(...j(z.convertShape(e[3].dims)));let A=[l,n,s];T.push(...j(A));let D=L=>{let Y=E.length,ee=R("a",e[0].dataType,Y,h),K=R("b",12,C.length,f),J=R("scales",e[2].dataType,e[2].dims.length),X=[ee,K,J],q=e.length===4?R("zero_points",12,e[3].dims.length):void 0;q&&X.push(q);let ne=A.length,pe=H("output",e[0].dataType,ne),V=ke(e[0].dataType),ce=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${V}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${V}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${V}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${V}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${pe.type.value}, ${x}>, ${w}>;
        ${L.declareVariables(...X,pe)}
        ${L.mainStart([x,w,1])}
          let output_indices = ${pe.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ee.getByIndices(`${ee.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ee.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${q?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${V}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${V}(8);`}
            let scale = ${J.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${K.getByIndices(`${K.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${ce()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${V}>(${Array.from({length:4},(B,U)=>`${V}(b_value_lower[${U}]), ${V}(b_value_upper[${U}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${V}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(B,U)=>`${`dot(a_data${U}, b_dequantized_values[${U}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${pe.type.value} = ${pe.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${pe.setByIndices(`${pe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${f};${x};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:k},programUniforms:T}),getShaderSource:D}},Gc=(e,t)=>{Fu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Ku(e.inputs,t)):e.compute(ju(e.inputs,t))},Hc=e=>me(e)}),Zu,Xu,Qu,Yu,Ju,el,tl,rl,Fc,fg=P(()=>{Q(),re(),ie(),Zu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Xu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
            k = i32(${e.indicesGet("indices",n)}) - ${F("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${F("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${F("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Qu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${F("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${F("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${F("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${F("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Yu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${F("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${F("uniforms.x_shape",n,t)})) {
                  k = i32(${F("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${F("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Ju=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${F("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${F("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${F("uniforms.x_shape",n,t)})) {
                  k -= i32(${F("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${F("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},el=(e,t,r)=>{switch(r.mode){case 0:return Xu(e,t,r.pads.length);case 1:return Qu(e,t,r.pads.length);case 2:return Yu(e,t,r.pads.length);case 3:return Ju(e,t,r.pads.length);default:throw new Error("Invalid mode")}},tl=(e,t)=>{let r=z.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,n=z.size(r),i=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...j(e[0].dims,r));let u=["rank"],l=d=>{let c=H("output",e[0].dataType,r.length),h=R("x",e[0].dataType,a.length),f=h.type.value,g=el(c,a.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(y).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(r)/64)},programUniforms:i}),getShaderSource:l}},rl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,i=new Int32Array(2*n).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)i[Number(u[l])]=Number(r[l]),i[Number(u[l])+n]=Number(r[l+u.length])}else r.forEach((u,l)=>i[Number(l)]=Number(u));let s=[];return i.forEach(u=>s.push(u)),{mode:t.mode,value:a,pads:s}}else return t},Fc=(e,t)=>{Zu(e.inputs);let r=rl(e.inputs,t);e.compute(tl(e.inputs,r),{inputs:[0]})}}),er,Zi,Xi,Qi,Yi,il,al,Ji,ea,jc,Kc,ta,Zc,Xc,ra,Qc,Yc,Jc,eh,mg=P(()=>{je(),Q(),re(),ie(),er=e=>{if(fe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Zi=(e,t,r)=>{let a=t.format==="NHWC",n=e.dims.slice();a&&n.splice(1,0,n.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=i?t.dilations.slice():[],d=t.pads.slice();Fr.adjustPoolAttributes(r,n,s,u,l,d);let c=Fr.computePoolOutputShape(r,n,u,l,s,d,t.autoPad),h=Object.assign({},t);i?Object.assign(h,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let f=c.slice();return f.push(f.splice(1,1)[0]),[h,a?f:c]},Xi=(e,t)=>{let r=t.format==="NHWC",a=z.size(e),n=z.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);i.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];f=!!(w+x),i.push({type:12,data:g},{type:12,data:y},{type:12,data:w},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,h,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=z.computeStrides(t.kernelShape);i.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[i,s,!!l,!1,!1]}},Qi=(e,t,r,a,n,i,s,u,l,d,c,h)=>{let f=n.format==="NHWC",g=t.type.value,y=H("output",t.type.tensor,a);if(n.kernelShape.length<=2){let w="",x="",$="",b=r-(f?2:1);if(c?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,n.kernelShape.length===2){let S=r-(f?3:2);h?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${g}(${u});
              var pad = 0;
              ${x}
              ${w}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=n.kernelShape.length,x=n.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${g}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${F("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${F("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${F("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${F("uniforms.pads","j - 2u",x)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},Yi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,il=e=>`${Yi(e)};${e.countIncludePad}`,al=e=>`${Yi(e)};${e.storageOrder};${e.dilations}`,Ji=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ea=(e,t,r,a)=>{let[n,i]=Zi(t,a,r),s=R("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,f,g,y]=Xi(i,n);c.push(...j(t.dims,i));let w=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${f};${g};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(i)/64)},programUniforms:c}),getShaderSource:x=>Qi(x,s,t.dims.length,i.length,n,l,d,0,h,f,g,y)}},jc=e=>{let t=e.count_include_pad!==0,r=Ji(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:il(a)}},Kc=(e,t)=>{er(e.inputs),e.compute(ea("AveragePool",e.inputs[0],!1,t))},ta={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Zc=e=>{let t=e.format;return{format:t,...ta,cacheKey:t}},Xc=(e,t)=>{er(e.inputs),e.compute(ea("GlobalAveragePool",e.inputs[0],!0,t))},ra=(e,t,r,a)=>{let[n,i]=Zi(t,a,r),s=`
      value = max(x_val, value);
    `,u="",l=R("x",t.dataType,t.dims.length),d=["rank"],[c,h,f,g,y]=Xi(i,n);return c.push(...j(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${f};${g};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(i)/64)},programUniforms:c}),getShaderSource:w=>Qi(w,l,t.dims.length,i.length,n,s,u,t.dataType===10?-65504:-1e5,h,f,g,y)}},Qc=(e,t)=>{er(e.inputs),e.compute(ra("MaxPool",e.inputs[0],!1,t))},Yc=e=>{let t=e.storage_order,r=e.dilations,a=Ji(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...a,cacheKey:""};return{...n,cacheKey:al(n)}},Jc=e=>{let t=e.format;return{format:t,...ta,cacheKey:t}},eh=(e,t)=>{er(e.inputs),e.compute(ra("GlobalMaxPool",e.inputs[0],!0,t))}}),nl,sl,th,rh,gg=P(()=>{Q(),re(),be(),ie(),nl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,i)=>i===t.axis||n===e[0].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},sl=(e,t)=>{let r=z.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,n=a===3,i=e[0].dims,s=e[1].dataType,u=z.size(i),l=a===3||a===2,d=l?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,f=h?l?[Math.ceil(z.size(h.dims)/4)]:h.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,y=g===!1&&c.length===1,w=we(u),x=g&&(!l||w===4),$=x?w:1,b=x&&!l?w:1,S=R("input",l?12:a,d.length,b),k=R("scale",s,c.length),T=h?R("zero_point",l?12:a,f.length):void 0,E=H("output",s,i.length,$),C=[S,k];T&&C.push(T);let A=[d,c];h&&A.push(f);let D=[{type:12,data:u/$},{type:12,data:r},{type:12,data:t.blockSize},...j(...A,i)],L=Y=>{let ee=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(ee).declareVariables(...C,E)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${k.getByOffset("0")}`:y?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?g?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:y?l?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:L,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(u/$/64),y:1,z:1},programUniforms:D})}},th=(e,t)=>{nl(e.inputs,t),e.compute(sl(e.inputs,t))},rh=e=>me({axis:e.axis,blockSize:e.blockSize})}),ol,ul,ih,yg=P(()=>{je(),Q(),ie(),ol=(e,t,r)=>{let a=e===t,n=e<t&&r<0,i=e>t&&r>0;if(a||n||i)throw new Error("Range these inputs' contents are invalid.")},ul=(e,t,r,a)=>{let n=Math.abs(Math.ceil((t-e)/r)),i=[n],s=n,u=[{type:12,data:s},{type:a,data:e},{type:a,data:r},...j(i)],l=d=>{let c=H("output",a,i.length),h=c.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(f).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},ih=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),fe.webgpu.validateInputContent&&ol(t,r,a),e.compute(ul(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),ll,dl,ah,nh,_g=P(()=>{Q(),re(),be(),ie(),ll=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${n}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${n}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},dl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r,i=1,s=Math.ceil(z.size(a)/i),u=a[a.length-1],l=z.sizeFromDimension(r,u),d=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...j(e[1].dims,e[2].dims,n)],c=h=>{let f=R("indices",e[1].dataType,e[1].dims.length),g=R("updates",e[2].dataType,e[2].dims.length,i),y=t.reduction!=="none"&&t.reduction!==""?Nd("output",e[0].dataType,n.length):H("output",e[0].dataType,n.length,i);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,g,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${z.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${ll(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},ah=e=>me({reduction:e.reduction}),nh=(e,t)=>{e.compute(dl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),pl,cl,hl,ia,fl,ml,gl,yl,_l,wl,bl,$l,aa,vl,xl,kl,Sl,Tl,sh,oh,wg=P(()=>{Q(),re(),be(),ie(),pl=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},cl=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((n,i)=>a[n]=e[i]),a},hl=(e,t,r,a,n,i)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>i.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>a.push(c)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");pl(a,t),t.axes.length>0&&cl(a,t.axes,d).forEach((c,h)=>a[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof n<"u"&&a.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},ia=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,fl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ia("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ia("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ml=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",gl=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,s)=>{a[i]=n[s],a[s+r]=n[t.length+s]}),a):n},yl=(e,t,r,a)=>{let n=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>n.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,s)=>n[i]=r[s])}else r.forEach(i=>n.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((i,s)=>Math.round(i*t[s]))}return n},_l=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>n[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),n.forEach((i,s)=>n[s]=Math.round(i*t[s]))),n},wl=(e,t,r,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${F("uniforms.scales","i",a)};
        var roi_low = ${F("uniforms.roi","i",n)};
        var roi_hi = ${F("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${F("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,bl=(e,t,r,a,n,i,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${F("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${F("uniforms.roi","i",i)};
          var roi_hi = ${F("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${F("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,$l=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${F("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,aa=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",vl=(e,t,r,a,n)=>{let[i,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${aa(e,l,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${a?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},xl=(e,t,r,a,n,i,s,u,l,d)=>{let c=r.length===2,[h,f]=c?[0,1]:[2,3],g=e.type.value,y=w=>{let x=w===h?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[w]},
        ${a[w]}, ${r[w]}, ${i[w]}, ${i[w]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${g} = originalIdx + ${g}(i);
          if (${x} < 0 || ${x} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${x} = max(0, min(${x}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${x})`)};
          data[i + 1] = ${w===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(h)};
    ${y(f)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},kl=(e,t,r,a,n)=>{let[i,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${aa(e,d,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Sl=(e,t,r,a,n,i)=>{let s=e.dims,u=gl(i,t.axes,s.length),l=yl(s,a,n,t.axes),d=a.slice();a.length===0&&(d=s.map((b,S)=>b===0?1:l[S]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=_l(s,d,t)));let c=H("output",e.dataType,l.length),h=R("input",e.dataType,s.length),f=z.size(l),g=s.length===l.length&&s.every((b,S)=>b===l[S]),y=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,x=h.type.value,$=b=>`
      ${g?"":`
      ${fl(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${$l(h,s)};
              ${ml(t.nearestMode,r,x)};
              ${bl(h,c,s,l,d.length,u.length,y)};
              `;case"linear":return`
              ${wl(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${vl(h,c,s,y,w)}`;if(s.length===3||s.length===5)return`${kl(h,c,s,y,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${xl(h,c,s,l,d,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(h,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:u},...j(s,l)]})}},Tl=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},sh=(e,t)=>{let r=[],a=[],n=[],i=Tl(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");hl(e.inputs,t,i,r,a,n),e.compute(Sl(e.inputs[0],t,i,r,a,n),{inputs:[0]})},oh=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,n=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return me({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Il,El,uh,bg=P(()=>{Q(),re(),be(),ie(),Il=(e,t)=>{let[r,a,n,i]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!z.areEqual(a.dims,[])&&!z.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!z.areEqual(n.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],h=z.sizeFromDimension(r.dims,1)/d,f=u===0?n.dims[1]*2:h/s;if(u>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(l!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(f/2!==n.dims[1]&&u/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},El=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:n,scale:i}=t,s=e[0].dims[0],u=z.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],h=n===0?c*2:d/a,f=new Array(s,l,d/h,h-c),g=z.computeStrides(f),y=[{type:1,data:i},{type:12,data:f},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...j(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=x=>{let $=R("input",e[0].dataType,e[0].dims.length),b=R("position_ids",e[1].dataType,e[1].dims.length),S=R("cos_cache",e[2].dataType,e[2].dims.length),k=R("sin_cache",e[3].dataType,e[3].dims.length),T=H("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${x.declareVariables($,b,S,k,T)}

        ${x.mainStart(qt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",H("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:me({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(f)/qt)},programUniforms:y})}},uh=(e,t)=>{Il(e.inputs,t),e.compute(El(e.inputs,t))}}),Cl,zl,lh,$g=P(()=>{Q(),re(),ie(),Cl=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},zl=(e,t,r,a)=>{let n=t.simplified,i=e[0].dims,s=z.size(i),u=i,l=s,d=i.slice(-1)[0],c=a?i.slice(0,-1).concat(1):[],h=!n&&e.length>3,f=e.length>4,g=a&&r>1,y=a&&r>2,w=r>3,x=64,$=we(d),b=[{type:12,data:l},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],S=T=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[R("x",e[0].dataType,e[0].dims,$),R("skip",e[1].dataType,e[1].dims,$),R("gamma",e[2].dataType,e[2].dims,$)];h&&C.push(R("beta",e[3].dataType,e[3].dims,$)),f&&C.push(R("bias",e[4].dataType,e[4].dims,$)),C.push(H("output",e[0].dataType,u,$)),g&&C.push(H("mean_output",1,c)),y&&C.push(H("inv_std_output",1,c)),w&&C.push(H("input_skip_bias_sum",e[0].dataType,u,$));let A=ke(e[0].dataType),D=ke(1,$);return`

      ${T.registerUniforms(E).declareVariables(...C)}
      var<workgroup> sum_shared : array<${D}, ${x}>;
      var<workgroup> sum_squared_shared : array<${D}, ${x}>;

      ${T.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":A+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Pt(A,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${gt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${gt("square_sum",$)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${A}(mean)`}) *
            ${A}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${g};${y};${w}`,inputDependencies:e.map((T,E)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},lh=(e,t)=>{Cl(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(zl(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Al,tr,Ol,na,Rl,Bl,dh,ph,vg=P(()=>{Q(),re(),be(),ie(),Al=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},tr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ol=(e,t)=>{if(e.length>1){let r=tr(e,1),a=tr(e,2),n=tr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),me({starts:r,ends:a,axes:n})}else return t},na=(e,t,r,a,n)=>{let i=e;return e<0&&(i+=r[a[t]]),n[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},Rl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${F("uniforms.input_shape","i",r.length)};
            let steps_i = ${F("uniforms.steps","i",r.length)};
            let signs_i = ${F("uniforms.signs","i",r.length)};
            let starts_i = ${F("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Bl=(e,t)=>{let r=e[0].dims,a=z.size(r),n=t.axes.length>0?z.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=tr(e,4);i.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(n.length).fill(1));let s=t.starts.map(($,b)=>na($,b,r,n,i)),u=t.ends.map(($,b)=>na($,b,r,n,i));if(n.length!==s.length||n.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let $=0;$<r.length;++$)n.includes($)||(s.splice($,0,0),u.splice($,0,r[$]),i.splice($,0,1));let l=i.map($=>Math.sign($));i.forEach(($,b,S)=>{if($<0){let k=(u[b]-s[b])/$,T=s[b],E=T+k*i[b];s[b]=E,u[b]=T,S[b]=-$}});let d=r.slice(0);n.forEach(($,b)=>{d[$]=Math.ceil((u[$]-s[$])/i[$])});let c={dims:d,dataType:e[0].dataType},h=H("output",e[0].dataType,d.length),f=R("input",e[0].dataType,e[0].dims.length),g=z.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:i.length}],w=[{type:12,data:g},{type:12,data:s},{type:6,data:l},{type:12,data:i},...j(e[0].dims,d)],x=$=>`
      ${$.registerUniforms(y).declareVariables(f,h)}
        ${Rl(f,h,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:w})}},dh=(e,t)=>{Al(e.inputs,t);let r=Ol(e.inputs,t);e.compute(Bl(e.inputs,r),{inputs:[0]})},ph=e=>{let t=e.starts,r=e.ends,a=e.axes;return me({starts:t,ends:r,axes:a})}}),Nl,Ml,ch,hh,xg=P(()=>{Q(),re(),be(),yt(),ie(),Nl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ml=(e,t)=>{let r=e.inputs[0],a=r.dims,n=z.size(a),i=a.length,s=z.normalizeAxis(t.axis,i),u=s<a.length-1,l,d=[];u?(d=Array.from({length:i},(C,A)=>A),d[s]=i-1,d[i-1]=s,l=e.compute(Ne(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[i-1],f=n/h,g=we(h),y=h/g,w=64;f===1&&(w=256);let x=(C,A)=>A===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:A===2?`max(${C}.x, ${C}.y)`:A===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,$=R("x",l.dataType,l.dims,g),b=H("result",l.dataType,l.dims,g),S=$.type.value,k=ke(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,T=C=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables($,b)}
      ${C.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${x("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${gt("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${g};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:y}]}),getShaderSource:T},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ne(E,d),{inputs:[E]})},ch=(e,t)=>{Nl(e.inputs),Ml(e,t)},hh=e=>me({axis:e.axis})}),sa,Dl,Pl,Ul,fh,kg=P(()=>{Q(),re(),ie(),sa=e=>Array.from(e.getBigInt64Array(),Number),Dl=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(sa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Pl=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Ul=(e,t)=>{let r=e[0].dims,a=t??sa(e[1]),n=Pl(r,a),i=z.size(n),s=e[0].dataType,u=R("input",s,r.length),l=H("output",s,n.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...j(e[0].dims,n)]}),getShaderSource:d}},fh=e=>{Dl(e.inputs),e.compute(Ul(e.inputs),{inputs:[0]})}}),Wl,ql,mh,Sg=P(()=>{Q(),re(),ie(),Wl=(e,t,r,a,n)=>{let i=H("output_data",n,r.length,4),s=R("a_data",t[1].dataType,t[1].dims.length,4),u=R("b_data",t[2].dataType,t[2].dims.length,4),l=R("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,f,g)=>`select(${f}, ${h}, ${g})`;if(!a)d=i.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(f,g,y="")=>{let w=`a_data[index_a${g}][component_a${g}]`,x=`b_data[index_b${g}][component_b${g}]`,$=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${i.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,i)};
            let offset_b${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,i)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,i)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${f}[${g}] = ${y}(${c(w,x,$)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},ql=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,n=e[1].dataType,i=!(z.areEqual(t,r)&&z.areEqual(r,a)),s=t,u=z.size(t);if(i){let d=Wt.calcShape(Wt.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=z.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Wl(d,e,s,i,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...j(a,t,r,s)]})}},mh=e=>{e.compute(ql(e.inputs))}}),gh,Tg=P(()=>{Um(),Ga(),Wm(),qm(),Lm(),Vm(),Gm(),Zm(),Qm(),Ym(),Jm(),eg(),tg(),rg(),ig(),ag(),ng(),sg(),og(),ug(),lg(),dg(),pg(),cg(),hg(),Mc(),fg(),mg(),gg(),yg(),_g(),Va(),wg(),bg(),$g(),vg(),xg(),Uc(),kg(),yt(),Ha(),Sg(),gh=new Map([["Abs",[dp]],["Acos",[pp]],["Acosh",[cp]],["Add",[Fp]],["ArgMax",[sp,_a]],["ArgMin",[np,_a]],["Asin",[hp]],["Asinh",[fp]],["Atan",[mp]],["Atanh",[gp]],["Attention",[op]],["AveragePool",[Kc,jc]],["BatchNormalization",[up]],["BiasAdd",[lp]],["BiasSplitGelu",[Hp]],["Cast",[_p,yp]],["Ceil",[bp]],["Clip",[wp]],["Concat",[rc,ic]],["Conv",[ka,xa]],["ConvTranspose",[hc,cc]],["Cos",[$p]],["Cosh",[vp]],["CumSum",[fc,mc]],["DepthToSpace",[gc,yc]],["DequantizeLinear",[th,rh]],["Div",[jp]],["Einsum",[_c,wc]],["Elu",[xp,sr]],["Equal",[Kp]],["Erf",[kp]],["Exp",[Sp]],["Expand",[bc]],["FastGelu",[$c]],["Floor",[Tp]],["FusedConv",[ka,xa]],["Gather",[xc,vc]],["GatherElements",[Cc,Ec]],["GatherBlockQuantized",[Tc,Ic]],["GatherND",[kc,Sc]],["Gelu",[Ip]],["Gemm",[Ac,zc]],["GlobalAveragePool",[Xc,Zc]],["GlobalMaxPool",[eh,Jc]],["Greater",[Yp]],["GreaterOrEqual",[ec]],["GridSample",[Oc,Rc]],["GroupQueryAttention",[Wc]],["HardSigmoid",[Np,Bp]],["InstanceNormalization",[qc]],["LayerNormalization",[Lc]],["LeakyRelu",[Ep,sr]],["Less",[Jp]],["LessOrEqual",[tc]],["Log",[Vp]],["MatMul",[Vc]],["MatMulNBits",[Gc,Hc]],["MaxPool",[Qc,Yc]],["Mul",[Zp]],["MultiHeadAttention",[Nc,Bc]],["Neg",[zp]],["Not",[Cp]],["Pad",[Fc]],["Pow",[Xp]],["QuickGelu",[Gp,sr]],["Range",[ih]],["Reciprocal",[Ap]],["ReduceMin",[ep]],["ReduceMean",[Zd]],["ReduceMax",[Jd]],["ReduceSum",[rp]],["ReduceProd",[tp]],["ReduceL1",[Xd]],["ReduceL2",[Qd]],["ReduceLogSum",[ap]],["ReduceLogSumExp",[Yd]],["ReduceSumSquare",[ip]],["Relu",[Op]],["Resize",[sh,oh]],["RotaryEmbedding",[uh]],["ScatterND",[nh,ah]],["Sigmoid",[Rp]],["Sin",[Mp]],["Sinh",[Dp]],["Slice",[dh,ph]],["SkipLayerNormalization",[lh]],["Split",[Dc,Pc]],["Sqrt",[Pp]],["Softmax",[ch,hh]],["Sub",[Qp]],["Tan",[Up]],["Tanh",[Wp]],["ThresholdedRelu",[Lp,sr]],["Tile",[fh]],["Transpose",[Dd,Pd]],["Where",[mh]]])}),yh,Ig=P(()=>{je(),it(),ie(),yh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,n){Je(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});n&&u.push({binding:u.length,resource:n});let l=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Fe(e.programInfo.name)}dispose(){}build(e,t){Je(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let n=Md(t,this.backend.device.limits),i=e.getShaderSource(n),s=`${a.join(`
`)}
${n.additionalImplementations}
${i}`,u=r.createShaderModule({code:s,label:e.name});se("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Fe(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&a<=n)return[t,r,a];let i=t*r*a,s=Math.ceil(Math.sqrt(i));if(s>n){if(s=Math.ceil(Math.cbrt(i)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Ll,Vl,Gl,Hl,_h,Eg=P(()=>{je(),Q(),it(),zd(),Dm(),Tg(),Ig(),Ll=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let n=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let i=e[a].dims.length;r.push(`${n};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${n};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Vl=(e,t,r)=>{var n,i;let a=e.name;return(n=e.shaderCache)!=null&&n.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Ll(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Gl=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Hl=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},_h=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=i=>t.features.has(i)&&r.push(i)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups")&&n("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new Hl(this.device),this.adapterInfo=new Gl(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Ad(this),this.programManager=new yh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ua(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Je(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,u=this.kernels.get(s),l=u.kernelType,d=u.kernelName,c=i.programName,h=i.inputTensorViews,f=i.outputTensorViews,g=t[n*2],y=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let w=Number(g-this.queryTimeBase),x=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(x))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map($=>({dims:$.dims,dataType:Tt($.dataType)})),outputsMetadata:f.map($=>({dims:$.dims,dataType:Tt($.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:c,startTime:w,endTime:x});else{let $="";h.forEach((S,k)=>{$+=`input[${k}]: [${S.dims}] | ${Tt(S.dataType)}, `});let b="";f.forEach((S,k)=>{b+=`output[${k}]: [${S.dims}] | ${Tt(S.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${c}" ${$}${b}execution time: ${x-w} ns`)}Vr("GPU",`${c}::${g}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Fe()}run(e,t,r,a,n,i){Je(e.name);let s=[];for(let b=0;b<t.length;++b){let S=t[b].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);s.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((b,S)=>S):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],f=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=i)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let S=c[b]===-1,k=c[b]===-2,T=S||k?n(u[b].dataType,u[b].dims):a(c[b],u[b].dataType,u[b].dims);if(h.push(T),T.data===0)continue;let E=this.gpuDataManager.get(T.data);if(!E)throw new Error(`no GPU data for output: ${T.data}`);if(S&&this.temporaryData.push(E),k){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(E)}f.push(E)}if(s.length!==t.length||f.length!==h.length){if(f.length===0)return Fe(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let b=0,S=[];d.forEach(C=>{let A=typeof C.data=="number"?[C.data]:C.data;if(A.length===0)return;let D=C.type===10?2:4,L,Y;C.type===10?(Y=A.length>4?16:A.length>2?8:A.length*D,L=A.length>4?16:D*A.length):(Y=A.length<=2?A.length*D:16,L=16),b=Math.ceil(b/Y)*Y,S.push(b);let ee=C.type===10?8:4;b+=A.length>4?Math.ceil(A.length/ee)*L:A.length*D});let k=16;b=Math.ceil(b/k)*k;let T=new ArrayBuffer(b);d.forEach((C,A)=>{let D=S[A],L=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(T,D,L.length).set(L);else if(C.type===12)new Uint32Array(T,D,L.length).set(L);else if(C.type===10)new Uint16Array(T,D,L.length).set(L);else if(C.type===1)new Float32Array(T,D,L.length).set(L);else throw new Error(`Unsupported uniform type: ${Tt(C.type)}`)});let E=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,T,0,b),this.gpuDataManager.release(E.id),g={offset:0,size:b,buffer:E.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),w=y[1]===1&&y[2]===1,x=Vl(e,t,w),$=this.programManager.getArtifact(x);if($||($=this.programManager.build(e,y),this.programManager.setArtifact(x,$),se("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let b=0;b<d.length;b++){let S=d[b],k=S.type,T=typeof S.data=="number"?1:S.data.length,[E,C]=$.uniformVariablesInfo[b];if(k!==E||T!==C)throw new Error(`Uniform variable ${b} mismatch: expect type ${E} with size ${C}, got type ${k} with size ${T} in program "${$.programInfo.name}".`)}}if(se("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,s,f,y,g),Fe(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let n=gh.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let n=a.kernelType,i=a.kernelName,s=a.kernelEntry,u=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),se("info",()=>`[WebGPU] Start to run kernel "[${n}] ${i}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${i}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${i}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let i=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,a,i);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await ma(this,e,t);return Wa(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){se("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){se("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){se("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let n=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Fl,oa,jl,ua,la,da,Kl,wh,Cg=P(()=>{it(),Fl=1,oa=()=>Fl++,jl=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ua=(e,t)=>{let r=jl.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,n)=>a*n)*r/8):0},la=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return ua(this.dataType,this.tensorShape)}destroy(){se("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,n)=>a===r[n])}},da=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let n=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==ua(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else se("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Kl=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=oa();return this.tensorTrackersById.set(e,new da(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,n){se("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${n}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){se("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let n=this.getMLContext(e),i=oa(),s=new la({sessionId:e,context:n,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new da(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,a,n,i){let s=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(s,t,r)){se("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}se("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let u=await s.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:n,readable:i});return new la({sessionId:e,context:s,tensor:u,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},wh=(...e)=>new Kl(...e)}),Mr,Zl,bh,zg=P(()=>{Q(),At(),zd(),Cg(),it(),Mr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Zl=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((n,i)=>n===a[i]&&e[n]===t[n])},bh=class{constructor(e){this.tensorManager=wh(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Ua(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){se("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){se("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)se("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Zl(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(n=>n.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){se("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,n){let i=Mr.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,n)}async createTemporaryTensor(e,t,r){se("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Mr.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!xe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");se("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Wa(r,t)}}registerMLTensor(e,t,r,a){let n=Mr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,n,a);return se("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,n,i){if(!i)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=i.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+r).buffer,d;switch(n.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return se("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}}`),a.constant(n,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),$h={};pr($h,{init:()=>vh});var Dr,Xl,vh,Ag=P(()=>{Q(),Eg(),it(),re(),zg(),Dr=class xh{constructor(t,r,a,n){this.module=t,this.dataType=r,this.data=a,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(z.size(t)!==z.size(this.dims))throw new Error("Invalid new shape");return new xh(this.module,this.dataType,this.data,t)}},Xl=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,n=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*n++,i));let s=Number(e.getValue(a*n++,i));this.outputCount=Number(e.getValue(a*n++,i)),this.customDataOffset=Number(e.getValue(a*n++,"*")),this.customDataSize=Number(e.getValue(a*n++,i));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(a*n++,i)),c=Number(e.getValue(a*n++,"*")),h=Number(e.getValue(a*n++,i)),f=[];for(let g=0;g<h;g++)f.push(Number(e.getValue(a*n++,i)));u.push(new Dr(e,d,c,f))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,a=(t==null?void 0:t.outputs)??[],n=(u,l,d)=>new Dr(this.module,l,this.output(u,d),d),i=(u,l)=>{let d=It(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Dr(this.module,u,c,l)};return this.backend.run(e,r,a,n,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,n=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(i+a*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},vh=async(e,t,r,a)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new _h;await i.initialize(r,a),n("webgpu",[i,s=>i.alloc(Number(s)),s=>i.free(s),(s,u,l,d=!1)=>{if(d)se("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),i.memcpy(Number(s),Number(u));else{se("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));i.upload(Number(u),c)}},async(s,u,l)=>{se("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await i.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>i.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>i.releaseKernel(s),(s,u,l,d)=>{se("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let c=new Xl(t,i,Number(u));return i.computeKernel(Number(s),c,d)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new bh(r);n("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,u,l,d,c)=>i.ensureTensor(s,u,l,d,c),(s,u)=>{i.uploadTensor(s,u)},async(s,u)=>i.downloadTensor(s,u)])}}}),Ql,Qa,Ya,ft,Yl,Zr,Ja,en,pa,tn,rn,an,kh=P(()=>{Nm(),Mm(),Q(),At(),Ba(),Cd(),Ql=(e,t)=>{xe()._OrtInit(e,t)!==0&&le("Can't initialize onnxruntime.")},Qa=async e=>{Ql(e.wasm.numThreads,Hr(e.logLevel))},Ya=async(e,t)=>{{let r=(Ag(),Lr($h)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",xe(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",xe(),e)}}},ft=new Map,Yl=e=>{let t=xe(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,n,n+a)!==0&&le("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(n,i)),Number(t.getValue(n+a,i))]}finally{t.stackRestore(r)}},Zr=e=>{let t=xe(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ja=async(e,t)=>{var h,f,g;let r,a,n=xe();Array.isArray(e)?[r,a]=e:e.buffer===n.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=Zr(e);let i=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=Ed(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let T=[];for(let E of t.externalData){let C=typeof E=="string"?E:E.path;T.push(Pa(typeof E=="string"?E:E.data).then(A=>{n.mountExternalData(C,A)}))}await Promise.all(T)}for(let T of(t==null?void 0:t.executionProviders)??[])if((typeof T=="string"?T:T.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof T!="string"){let E=T,C=E==null?void 0:E.context,A=E==null?void 0:E.gpuDevice,D=E==null?void 0:E.deviceType,L=E==null?void 0:E.powerPreference;C?n.currentContext=C:A?n.currentContext=await n.jsepCreateMLContext(A):n.currentContext=await n.jsepCreateMLContext({deviceType:D,powerPreference:L})}else n.currentContext=await n.jsepCreateMLContext();break}i=await n._OrtCreateSession(r,a,s),i===0&&le("Can't create a session."),(h=n.jsepOnCreateSession)==null||h.call(n),n.currentContext&&(n.jsepRegisterMLContext(i,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[y,w]=Yl(i),x=!!(t!=null&&t.enableGraphCapture),$=[],b=[],S=[];for(let T=0;T<y;T++){let E=n._OrtGetInputName(i,T);E===0&&le("Can't get an input name."),d.push(E),$.push(n.UTF8ToString(E))}for(let T=0;T<w;T++){let E=n._OrtGetOutputName(i,T);E===0&&le("Can't get an output name."),c.push(E);let C=n.UTF8ToString(E);b.push(C);{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){S.push("gpu-buffer");continue}let A=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[C])??"cpu";if(A!=="cpu"&&A!=="cpu-pinned"&&A!=="gpu-buffer"&&A!=="ml-tensor")throw new Error(`Not supported preferred output location: ${A}.`);if(x&&A!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${A}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);S.push(A)}}let k=null;return S.some(T=>T==="gpu-buffer"||T==="ml-tensor")&&(u=n._OrtCreateBinding(i),u===0&&le("Can't create IO binding."),k={handle:u,outputPreferredLocations:S,outputPreferredLocationsEncoded:S.map(T=>fa(T))}),ft.set(i,[i,d,c,k,x,!1]),[i,$,b]}catch(y){throw d.forEach(w=>n._OrtFree(w)),c.forEach(w=>n._OrtFree(w)),u!==0&&n._OrtReleaseBinding(u)!==0&&le("Can't release IO binding."),i!==0&&n._OrtReleaseSession(i)!==0&&le("Can't release session."),y}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&le("Can't release session options."),l.forEach(y=>n._free(y)),(g=n.unmountExternalData)==null||g.call(n)}},en=e=>{var l;let t=xe(),r=ft.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,n,i,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&le("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&le("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),n.forEach(d=>t._OrtFree(d)),i.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(a)!==0&&le("Can't release session."),ft.delete(e)},pa=async(e,t,r,a,n,i=!1)=>{if(!e){t.push(0);return}let s=xe(),u=s.PTR_SIZE,l=e[0],d=e[1],c=e[3],h=c,f,g;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let x=e[2].gpuBuffer;g=It(Mt(l),d);let $=s.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=$(a,n,x,g)}else if(c==="ml-tensor"){let x=e[2].mlTensor;g=It(Mt(l),d);let $=s.jsepRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=$(a,x,Mt(l),d)}else{let x=e[2];if(Array.isArray(x)){g=u*x.length,f=s._malloc(g),r.push(f);for(let $=0;$<x.length;$++){if(typeof x[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);s.setValue(f+$*u,Ie(x[$],r),"*")}}else{let $=s.jsepIsGraphInput;if(l!=="string"&&$){let b=s._OrtGetInputName(a,n),S=s.UTF8ToString(b);if($(a,S)){let k=Mt(l);g=It(k,d),h="ml-tensor";let T=s.jsepCreateTemporaryTensor,E=s.jsepUploadTensor;if(!T||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let C=await T(a,k,d);E(C,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),f=C}else g=x.byteLength,f=s._malloc(g),r.push(f),s.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),f)}else g=x.byteLength,f=s._malloc(g),r.push(f),s.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),f)}}let y=s.stackSave(),w=s.stackAlloc(4*d.length);try{d.forEach(($,b)=>s.setValue(w+b*u,$,u===4?"i32":"i64"));let x=s._OrtCreateTensor(Mt(l),f,g,w,d.length,fa(h));x===0&&le(`Can't create tensor for input/output. session=${a}, index=${n}.`),t.push(x)}finally{s.stackRestore(y)}},tn=async(e,t,r,a,n,i)=>{var Y,ee,K;let s=xe(),u=s.PTR_SIZE,l=ft.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],f=l[3],g=l[4],y=l[5],w=t.length,x=a.length,$=0,b=[],S=[],k=[],T=[],E=s.stackSave(),C=s.stackAlloc(w*u),A=s.stackAlloc(w*u),D=s.stackAlloc(x*u),L=s.stackAlloc(x*u);try{[$,b]=Id(i);for(let q=0;q<w;q++)await pa(r[q],S,T,e,t[q],g);for(let q=0;q<x;q++)await pa(n[q],k,T,e,w+a[q],g);for(let q=0;q<w;q++)s.setValue(C+q*u,S[q],"*"),s.setValue(A+q*u,c[t[q]],"*");for(let q=0;q<x;q++)s.setValue(D+q*u,k[q],"*"),s.setValue(L+q*u,h[a[q]],"*");if(f&&!y){let{handle:q,outputPreferredLocations:ne,outputPreferredLocationsEncoded:pe}=f;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);for(let V=0;V<w;V++){let ce=t[V];await s._OrtBindInput(q,c[ce],S[V])!==0&&le(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<x;V++){let ce=a[V];(Y=n[V])!=null&&Y[3]?s._OrtBindOutput(q,h[ce],k[V],0)!==0&&le(`Can't bind pre-allocated output[${V}] for session=${e}.`):s._OrtBindOutput(q,h[ce],0,pe[ce])!==0&&le(`Can't bind output[${V}] to ${ne[V]} for session=${e}.`)}ft.set(e,[d,c,h,f,g,!0])}(ee=s.jsepOnRunStart)==null||ee.call(s,d);let J;f?J=await s._OrtRunWithBinding(d,f.handle,x,D,$):J=await s._OrtRun(d,A,C,w,L,x,D,$),J!==0&&le("failed to call OrtRun().");let X=[];for(let q=0;q<x;q++){let ne=Number(s.getValue(D+q*u,"*"));if(ne===k[q]){X.push(n[q]);continue}let pe=s.stackSave(),V=s.stackAlloc(4*u),ce=!1,B,U=0;try{s._OrtGetTensorData(ne,V,V+u,V+2*u,V+3*u)!==0&&le(`Can't access output tensor data on index ${q}.`);let ae=u===4?"i32":"i64",ye=Number(s.getValue(V,ae));U=s.getValue(V+u,"*");let N=s.getValue(V+u*2,"*"),de=Number(s.getValue(V+u*3,ae)),Me=[];for(let ve=0;ve<de;ve++)Me.push(Number(s.getValue(N+ve*u,ae)));s._OrtFree(N)!==0&&le("Can't free memory for tensor dims.");let ze=Me.reduce((ve,he)=>ve*he,1);B=Tt(ye);let _t=f==null?void 0:f.outputPreferredLocations[a[q]];if(B==="string"){if(_t==="gpu-buffer"||_t==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ve=[];for(let he=0;he<ze;he++){let at=s.getValue(U+he*u,"*"),Lt=s.getValue(U+(he+1)*u,"*"),wt=he===ze-1?void 0:Lt-at;ve.push(s.UTF8ToString(at,wt))}X.push([B,Me,ve,"cpu"])}else if(_t==="gpu-buffer"&&ze>0){let ve=s.jsepGetBuffer;if(!ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let he=ve(U),at=It(ye,ze);if(at===void 0||!Ma(B))throw new Error(`Unsupported data type: ${B}`);ce=!0,X.push([B,Me,{gpuBuffer:he,download:s.jsepCreateDownloader(he,at,B),dispose:()=>{s._OrtReleaseTensor(ne)!==0&&le("Can't release tensor.")}},"gpu-buffer"])}else if(_t==="ml-tensor"&&ze>0){let ve=s.jsepEnsureTensor;if(!ve)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(It(ye,ze)===void 0||!Da(B))throw new Error(`Unsupported data type: ${B}`);let he=await ve(e,U,ye,Me,!1);ce=!0,X.push([B,Me,{mlTensor:he,download:s.jsepCreateMLTensorDownloader(U,B),dispose:()=>{s.jsepReleaseTensorId(U),s._OrtReleaseTensor(ne)}},"ml-tensor"])}else{let ve=Na(B),he=new ve(ze);new Uint8Array(he.buffer,he.byteOffset,he.byteLength).set(s.HEAPU8.subarray(U,U+he.byteLength)),X.push([B,Me,he,"cpu"])}}finally{s.stackRestore(pe),B==="string"&&U&&s._free(U),ce||s._OrtReleaseTensor(ne),(K=s.jsepOnRunEnd)==null||K.call(s,d)}}return f&&!g&&(s._OrtClearBoundOutputs(f.handle)!==0&&le("Can't clear bound outputs."),ft.set(e,[d,c,h,f,g,!1])),X}finally{s.stackRestore(E),S.forEach(J=>s._OrtReleaseTensor(J)),k.forEach(J=>s._OrtReleaseTensor(J)),T.forEach(J=>s._free(J)),$!==0&&s._OrtReleaseRunOptions($),b.forEach(J=>s._free(J))}},rn=e=>{let t=xe(),r=ft.get(e);if(!r)throw new Error("invalid session id");let a=r[0],n=t._OrtEndProfiling(a);n===0&&le("Can't get an profile file name."),t._OrtFree(n)},an=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),mt,Ae,Nt,rr,ir,Pr,ca,Ur,xt,kt,Jl,Sh,Th,Ih,Eh,Ch,zh,Ah,Oh=P(()=>{je(),kh(),At(),Oa(),mt=()=>!!fe.wasm.proxy&&typeof document<"u",Nt=!1,rr=!1,ir=!1,Ur=new Map,xt=(e,t)=>{let r=Ur.get(e);r?r.push(t):Ur.set(e,[t])},kt=()=>{if(Nt||!rr||ir||!Ae)throw new Error("worker not ready")},Jl=e=>{switch(e.data.type){case"init-wasm":Nt=!1,e.data.err?(ir=!0,ca[1](e.data.err)):(rr=!0,ca[0]()),Pr&&(URL.revokeObjectURL(Pr),Pr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ur.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Sh=async()=>{if(!rr){if(Nt)throw new Error("multiple calls to 'initWasm()' detected.");if(ir)throw new Error("previous call to 'initWasm()' failed.");if(Nt=!0,mt())return new Promise((e,t)=>{Ae==null||Ae.terminate(),Sd().then(([r,a])=>{var n;try{Ae=a,Ae.onerror=s=>t(s),Ae.onmessage=Jl,ca=[e,t];let i={type:"init-wasm",in:fe};!i.in.wasm.wasmPaths&&(r||(n=import.meta.url)!=null&&n.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.B5gdmGHs.wasm",import.meta.url).href,import.meta.url).href}),Ae.postMessage(i),Pr=r}catch(i){t(i)}},t)});try{await Ra(fe.wasm),await Qa(fe),rr=!0}catch(e){throw ir=!0,e}finally{Nt=!1}}},Th=async e=>{if(mt())return kt(),new Promise((t,r)=>{xt("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:fe}};Ae.postMessage(a)});await Ya(fe,e)},Ih=async e=>mt()?(kt(),new Promise((t,r)=>{xt("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};Ae.postMessage(a,[e.buffer])})):Zr(e),Eh=async(e,t)=>{if(mt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return kt(),new Promise((r,a)=>{xt("create",[r,a]);let n={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),Ae.postMessage(n,i)})}else return Ja(e,t)},Ch=async e=>{if(mt())return kt(),new Promise((t,r)=>{xt("release",[t,r]);let a={type:"release",in:e};Ae.postMessage(a)});en(e)},zh=async(e,t,r,a,n,i)=>{if(mt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return kt(),new Promise((s,u)=>{xt("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:a,options:i}};Ae.postMessage(d,an(l))})}else return tn(e,t,r,a,n,i)},Ah=async e=>{if(mt())return kt(),new Promise((t,r)=>{xt("end-profiling",[t,r]);let a={type:"end-profiling",in:e};Ae.postMessage(a)});rn(e)}}),ha,ed,Rh,Og=P(()=>{je(),Oh(),Q(),Aa(),Cd(),ha=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},ed=e=>{switch(e[3]){case"cpu":return new He(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ma(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:n}=e[2];return He.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:n})}case"ml-tensor":{let t=e[0];if(!Da(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:n}=e[2];return He.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Rh=class{async fetchModelAndCopyToWasmMemory(e){return Ih(await Pa(e))}async loadModel(e,t){Je();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Eh(r,t),Fe()}async dispose(){return Ch(this.sessionId)}async run(e,t,r){Je();let a=[],n=[];Object.entries(e).forEach(h=>{let f=h[0],g=h[1],y=this.inputNames.indexOf(f);if(y===-1)throw new Error(`invalid input '${f}'`);a.push(g),n.push(y)});let i=[],s=[];Object.entries(t).forEach(h=>{let f=h[0],g=h[1],y=this.outputNames.indexOf(f);if(y===-1)throw new Error(`invalid output '${f}'`);i.push(g),s.push(y)});let u=a.map((h,f)=>ha(h,()=>`input "${this.inputNames[n[f]]}"`)),l=i.map((h,f)=>h?ha(h,()=>`output "${this.outputNames[s[f]]}"`):null),d=await zh(this.sessionId,n,u,s,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[s[h]]]=i[h]??ed(d[h]);return Fe(),c}startProfiling(){}endProfiling(){Ah(this.sessionId)}}}),Bh={};pr(Bh,{OnnxruntimeWebAssemblyBackend:()=>Ia,initializeFlags:()=>Ta,wasmBackend:()=>Nh});var Ta,Ia,Nh,Rg=P(()=>{je(),Oh(),Og(),Ta=()=>{if((typeof fe.wasm.initTimeout!="number"||fe.wasm.initTimeout<0)&&(fe.wasm.initTimeout=0),fe.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof fe.wasm.proxy!="boolean"&&(fe.wasm.proxy=!1),typeof fe.wasm.trace!="boolean"&&(fe.wasm.trace=!1),typeof fe.wasm.numThreads!="number"||!Number.isInteger(fe.wasm.numThreads)||fe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)fe.wasm.numThreads=1;else{let e=typeof navigator>"u"?ym("node:os").cpus().length:navigator.hardwareConcurrency;fe.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Ia=class{async init(e){Ta(),await Sh(),await Th(e)}async createInferenceSessionHandler(e,t){let r=new Rh;return await r.loadModel(e,t),Promise.resolve(r)}},Nh=new Ia});je();je();je();var Bg="1.21.1";{let e=(Rg(),Lr(Bh)).wasmBackend;Dt("webgpu",e,5),Dt("webnn",e,5),Dt("cpu",e,10),Dt("wasm",e,10)}Object.defineProperty(fe.versions,"web",{value:Bg,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ng="modern-rembg",Mh="URL"in globalThis,Mg="fetch"in globalThis,Dg="Blob"in globalThis,td="navigator"in globalThis,ur=(...e)=>console.debug(`[${Ng}][${new Date().toLocaleTimeString()}]`,...e);class Ut{constructor(t,r){this.data=t,this.dims=r}static async from(t){if(Mh&&t instanceof URL&&(t=t.href),Mg&&typeof t=="string"&&(t=await fetch(t).then(r=>r.blob())),Dg&&((t instanceof ArrayBuffer||ArrayBuffer.isView(t))&&(t=new Blob([t])),t instanceof Blob)){const r=await createImageBitmap(t),a=new OffscreenCanvas(r.width,r.height),n=a.getContext("2d");n.drawImage(r,0,0);const i=n.getImageData(0,0,a.width,a.height);return new Ut(new Float32Array(i.data),[r.height,r.width,4])}throw new TypeError("Not supported image source")}resize(t,r){const[a,n,i]=this.dims,s=n/t,u=a/r,l=new Uint8Array(i*t*r);for(let d=0;d<r;d++)for(let c=0;c<t;c++)for(let h=0;h<i;h++){const f=c*s,g=d*u,y=Math.floor(f),w=Math.ceil(f),x=Math.floor(g),$=Math.ceil(g),b=f-y,S=g-x,k=this.data[x*n*i+y*i+h],T=this.data[x*n*i+w*i+h],E=this.data[$*n*i+y*i+h],C=this.data[$*n*i+w*i+h],A=(1-b)*(1-S)*k+b*(1-S)*T+(1-b)*S*E+b*S*C;l[d*t*i+c*i+h]=Math.round(A)}return new Ut(new Float32Array(l),[r,t,i])}toBchwImageTensor(t=[128,128,128],r=[256,256,256]){const{data:a,dims:n}=this,[i,s,u]=n,l=i*s,d=new Float32Array(3*l);for(let c=0,h=0;c<a.length;c+=u,h+=1)d[h]=(a[c]-t[0])/r[0],d[h+l]=(a[c+1]-t[1])/r[1],d[h+l+l]=(a[c+2]-t[2])/r[2];return new Ut(d,[1,3,i,s])}toBlob(t=.8,r="image/png"){const{data:a,dims:n}=this,[i,s]=n;switch(r){case"image/x-rgba8":return new Blob([a],{type:"image/x-rgba8"});case"image/png":case"image/jpeg":case"image/webp":{const u=new ImageData(new Uint8ClampedArray(a),s,i),l=new OffscreenCanvas(u.width,u.height);return l.getContext("2d").putImageData(u,0,0),l.convertToBlob({quality:t,type:r})}default:throw new Error(`Invalid format: ${r}`)}}toTensor(){return new He("float32",this.data,this.dims)}}class nn{constructor(t,r){this._data=t,this._options=r}static async from(t){let r;if(typeof t=="string"||Mh&&t instanceof URL)r=await fetch(t).then(a=>a.arrayBuffer());else if(ArrayBuffer.isView(t))r=t.buffer;else if(t instanceof ArrayBuffer)r=t;else throw new TypeError("Not supported model source");return new nn(r)}async load(){return this._session=await za.create(this._data,{executionProviders:["wasm"],graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0,...this._options}),this}async release(){var t;return await((t=this._session)==null?void 0:t.release()),this}async run(t,r){this._session||await this.load();const a={};return this._session.inputNames.forEach((i,s)=>{a[i]=t[s]}),(await this._session.run(a,r))[this._session.outputNames[0]]}}class sn{static async createObjectURL(t){let r,a;switch(t){case"u2netp.onnx":r=await Kt(()=>import("../chunks/CxiniucO.js"),[],import.meta.url),a="application/octet-steam";break;case"ort-wasm.wasm":r=await Kt(()=>import("../chunks/BxvEb7z-.js"),[],import.meta.url),a="application/wasm";break;case"ort-wasm-threaded.wasm":r=await Kt(()=>import("../chunks/CNuba3vz.js"),[],import.meta.url),a="application/wasm";break;case"ort-wasm-simd.wasm":r=await Kt(()=>import("../chunks/CFQe7hOo.js"),[],import.meta.url),a="application/wasm";break;case"ort-wasm-simd-threaded.wasm":r=await Kt(()=>import("../chunks/5ZyesEds.js"),[],import.meta.url),a="application/wasm";break;default:throw new Error(`Not supported asset ${t}`)}return URL.createObjectURL(new Blob([r.default],{type:a}))}static async getObjectUrl(t){return this.objectUrls.has(t)||this.objectUrls.set(t,await this.createObjectURL(t)),this.objectUrls.get(t)}static release(){this.objectUrls.forEach(t=>{URL.revokeObjectURL(t)}),this.objectUrls.clear()}}sn.objectUrls=new Map;class Dh{static get capabilities(){return this._capabilities||(this._capabilities={simd:WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),threads:(()=>{try{return new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}})(),webgpu:td?navigator.gpu!==void 0:!1,numThreads:td?navigator.hardwareConcurrency??4:4}),this._capabilities}static async init(t={}){const r=this.capabilities;t.debug&&(ur("Capabilities:",r),fe.debug=!0,fe.logLevel="verbose"),fe.wasm.numThreads=r.numThreads,fe.wasm.simd=r.simd,fe.wasm.proxy=t.proxy;const a=async n=>t.wasmPaths&&n in t.wasmPaths?t.wasmPaths[n]:await sn.getObjectUrl(n);fe.wasm.wasmPaths={"ort-wasm-simd-threaded.wasm":r.simd&&r.threads?await a("ort-wasm-simd-threaded.wasm"):void 0,"ort-wasm-simd.wasm":r.simd&&!r.threads?await a("ort-wasm-simd.wasm"):void 0,"ort-wasm-threaded.wasm":!r.simd&&r.threads?await a("ort-wasm-threaded.wasm"):void 0,"ort-wasm.wasm":!r.simd&&!r.threads?await a("ort-wasm.wasm"):void 0}}}Dh.wasmPaths={};async function Pg(e,t){const{debug:r,resolution:a=320,model:n=await sn.getObjectUrl("u2netp.onnx")}=t;r&&ur("Loading onnx runtime..."),await Dh.init(t);const i=await Ut.from(e);let s=i.resize(a,a);r&&ur("Loading model...");const u=await nn.from(n);await u.load(),r&&ur("Processing...");const l=await u.run([s.toBchwImageTensor().toTensor()]);u.release(),r&&ur("Completion",l);const d=a*a;switch(t.output??"foreground"){case"mask":s=new Ut(new Float32Array(4*d),[a,a,4]);for(let c=0;c<4*d;c+=4){const h=c/4,f=l.data[h];s.data[c+3]=f*255}break;case"foreground":for(let c=0;c<4*d;c+=4){const h=c/4,f=l.data[h];s.data[c+3]=f*255}break;case"background":for(let c=0;c<4*d;c+=4){const h=c/4,f=l.data[h];s.data[c+3]=(1-f)*255}break}return await s.resize(i.dims[1],i.dims[0]).toBlob()}function Ug(e){let t,r,a,n,i,s="Image background remover",u,l,d,c,h,f="Remove background",g,y,w='<div id="source-image" class="preview-card space-y-4"><h2 class="text-xl text-center">Source image</h2></div> <div id="output-image" class="preview-card space-y-4"><h2 class="text-xl text-center">Output image</h2></div>',x,$;return{c(){t=ct("section"),r=ct("div"),a=Sr(),n=ct("div"),i=ct("h1"),i.textContent=s,u=Sr(),l=ct("form"),d=ct("input"),c=Sr(),h=ct("button"),h.textContent=f,g=Sr(),y=ct("div"),y.innerHTML=w,this.h()},l(b){t=pt(b,"SECTION",{class:!0});var S=xr(t);r=pt(S,"DIV",{class:!0}),xr(r).forEach(jt),a=kr(S),n=pt(S,"DIV",{class:!0});var k=xr(n);i=pt(k,"H1",{class:!0,"data-svelte-h":!0}),_i(i)!=="svelte-er8t4x"&&(i.textContent=s),u=kr(k),l=pt(k,"FORM",{method:!0,class:!0,enctype:!0});var T=xr(l);d=pt(T,"INPUT",{type:!0,name:!0}),c=kr(T),h=pt(T,"BUTTON",{"data-svelte-h":!0}),_i(h)!=="svelte-1ug3ftq"&&(h.textContent=f),T.forEach(jt),g=kr(k),y=pt(k,"DIV",{class:!0,"data-svelte-h":!0}),_i(y)!=="svelte-1wr6lza"&&(y.innerHTML=w),k.forEach(jt),S.forEach(jt),this.h()},h(){Qe(r,"class","md:w-[7rem]"),Qe(i,"class","w-full font-zenless-title text-4xl md:text-5xl dark:bg-slate-900 py-2"),Qe(d,"type","file"),Qe(d,"name","image_source"),Qe(l,"method","POST"),Qe(l,"class",""),Qe(l,"enctype","multipart/form-data"),Qe(y,"class","preview w-full grid grid-cols-2 gap-4"),Qe(n,"class","section-content flex-grow px-4 md:p-20 space-y-10"),Qe(t,"class","min-h-[100vh] md:flex px-4 py-6 pt-[9rem] md:p-0 md:pb-56 bg-white dark:text-white dark:bg-slate-900")},m(b,S){pm(b,t,S),Ue(t,r),Ue(t,a),Ue(t,n),Ue(n,i),Ue(n,u),Ue(n,l),Ue(l,d),Ue(l,c),Ue(l,h),Ue(n,g),Ue(n,y),x||($=[cm(d,"input",Wg),um(hm.call(null,l,e[1]))],x=!0)},p:yi,i:yi,o:yi,d(b){b&&jt(t),x=!1,om($)}}}function Wg({target:e}){var t;if(e instanceof HTMLInputElement){const r=(t=e.files)==null?void 0:t[0];if(r){const a="w-full h-96 object-contain object-center",n=document.querySelector("#source-image"),i=URL.createObjectURL(r),s=document.createElement("img");s.src=i,s.classList.add(...a.split(" ")),n==null||n.append(s)}}}function qg(e){async function t(a,n){const i={debug:!0,model:"/python/ai/models/isnet-anime.onnx",output:"foreground",resolution:320},s="w-full h-96 object-contain object-center",u=await Pg(a,Object.assign(i,n)),l=document.querySelector("#output-image"),d=URL.createObjectURL(u);console.log("output: ",d);const c=document.createElement("img");c.classList.add(...s.split(" ")),l==null||l.append(c)}return[t,({formData:a})=>t(a.get("image_source")??"")]}class jg extends lm{constructor(t){super(),dm(this,t,qg,Ug,sm,{})}}export{jg as component};
