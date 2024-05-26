(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cd(i,e){const t=new Set(i.split(","));return e?n=>t.has(n.toLowerCase()):n=>t.has(n)}const At={},Va=[],pn=()=>{},qy=()=>!1,Iu=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Rd=i=>i.startsWith("onUpdate:"),ci=Object.assign,Pd=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},jy=Object.prototype.hasOwnProperty,ct=(i,e)=>jy.call(i,e),He=Array.isArray,Ha=i=>Rl(i)==="[object Map]",Ou=i=>Rl(i)==="[object Set]",Vp=i=>Rl(i)==="[object Date]",je=i=>typeof i=="function",Zt=i=>typeof i=="string",Qr=i=>typeof i=="symbol",Mt=i=>i!==null&&typeof i=="object",J_=i=>(Mt(i)||je(i))&&je(i.then)&&je(i.catch),Q_=Object.prototype.toString,Rl=i=>Q_.call(i),$y=i=>Rl(i).slice(8,-1),e0=i=>Rl(i)==="[object Object]",Ld=i=>Zt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Wo=Cd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nu=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Ky=/-(\w)/g,Kn=Nu(i=>i.replace(Ky,(e,t)=>t?t.toUpperCase():"")),Zy=/\B([A-Z])/g,mo=Nu(i=>i.replace(Zy,"-$1").toLowerCase()),Uu=Nu(i=>i.charAt(0).toUpperCase()+i.slice(1)),ff=Nu(i=>i?`on${Uu(i)}`:""),es=(i,e)=>!Object.is(i,e),kc=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},tu=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Jy=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Hp;const t0=()=>Hp||(Hp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fu(i){if(He(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Zt(n)?ib(n):Fu(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Zt(i)||Mt(i))return i}const Qy=/;(?![^(]*\))/g,eb=/:([^]+)/,tb=/\/\*[^]*?\*\//g;function ib(i){const e={};return i.replace(tb,"").split(Qy).forEach(t=>{if(t){const n=t.split(eb);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Wr(i){let e="";if(Zt(i))e=i;else if(He(i))for(let t=0;t<i.length;t++){const n=Wr(i[t]);n&&(e+=n+" ")}else if(Mt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const nb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rb=Cd(nb);function i0(i){return!!i||i===""}function sb(i,e){if(i.length!==e.length)return!1;let t=!0;for(let n=0;t&&n<i.length;n++)t=ku(i[n],e[n]);return t}function ku(i,e){if(i===e)return!0;let t=Vp(i),n=Vp(e);if(t||n)return t&&n?i.getTime()===e.getTime():!1;if(t=Qr(i),n=Qr(e),t||n)return i===e;if(t=He(i),n=He(e),t||n)return t&&n?sb(i,e):!1;if(t=Mt(i),n=Mt(e),t||n){if(!t||!n)return!1;const r=Object.keys(i).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in i){const o=i.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ku(i[a],e[a]))return!1}}return String(i)===String(e)}function n0(i,e){return i.findIndex(t=>ku(t,e))}const Dd=i=>Zt(i)?i:i==null?"":He(i)||Mt(i)&&(i.toString===Q_||!je(i.toString))?JSON.stringify(i,r0,2):String(i),r0=(i,e)=>e&&e.__v_isRef?r0(i,e.value):Ha(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[hf(n,s)+" =>"]=r,t),{})}:Ou(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>hf(t))}:Qr(e)?hf(e):Mt(e)&&!He(e)&&!e0(e)?String(e):e,hf=(i,e="")=>{var t;return Qr(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class s0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=En,!e&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=En;try{return En=this,e()}finally{En=t}}}on(){En=this}off(){En=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ab(i){return new s0(i)}function ob(i,e=En){e&&e.active&&e.effects.push(i)}function lb(){return En}let zs;class Id{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ob(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,sa();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(cb(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),aa()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Xr,t=zs;try{return Xr=!0,zs=this,this._runnings++,Gp(this),this.fn()}finally{Wp(this),this._runnings--,zs=t,Xr=e}}stop(){var e;this.active&&(Gp(this),Wp(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function cb(i){return i.value}function Gp(i){i._trackId++,i._depsLength=0}function Wp(i){if(i.deps.length>i._depsLength){for(let e=i._depsLength;e<i.deps.length;e++)a0(i.deps[e],i);i.deps.length=i._depsLength}}function a0(i,e){const t=i.get(e);t!==void 0&&e._trackId!==t&&(i.delete(e),i.size===0&&i.cleanup())}let Xr=!0,Mh=0;const o0=[];function sa(){o0.push(Xr),Xr=!1}function aa(){const i=o0.pop();Xr=i===void 0?!0:i}function Od(){Mh++}function Nd(){for(Mh--;!Mh&&Eh.length;)Eh.shift()()}function l0(i,e,t){if(e.get(i)!==i._trackId){e.set(i,i._trackId);const n=i.deps[i._depsLength];n!==e?(n&&a0(n,i),i.deps[i._depsLength++]=e):i._depsLength++}}const Eh=[];function c0(i,e,t){Od();for(const n of i.keys()){let r;n._dirtyLevel<e&&(r??(r=i.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(r??(r=i.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&Eh.push(n.scheduler)))}Nd()}const u0=(i,e)=>{const t=new Map;return t.cleanup=i,t.computed=e,t},Th=new WeakMap,Vs=Symbol(""),wh=Symbol("");function Xi(i,e,t){if(Xr&&zs){let n=Th.get(i);n||Th.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=u0(()=>n.delete(t))),l0(zs,r)}}function pr(i,e,t,n,r,s){const a=Th.get(i);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&He(i)){const l=Number(n);a.forEach((c,u)=>{(u==="length"||!Qr(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":He(i)?Ld(t)&&o.push(a.get("length")):(o.push(a.get(Vs)),Ha(i)&&o.push(a.get(wh)));break;case"delete":He(i)||(o.push(a.get(Vs)),Ha(i)&&o.push(a.get(wh)));break;case"set":Ha(i)&&o.push(a.get(Vs));break}Od();for(const l of o)l&&c0(l,4);Nd()}const ub=Cd("__proto__,__v_isRef,__isVue"),f0=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Qr)),Xp=fb();function fb(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=dt(this);for(let s=0,a=this.length;s<a;s++)Xi(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(dt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){sa(),Od();const n=dt(this)[e].apply(this,t);return Nd(),aa(),n}}),i}function hb(i){const e=dt(this);return Xi(e,"has",i),e.hasOwnProperty(i)}class h0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?Tb:g0:s?m0:p0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=He(e);if(!r){if(a&&ct(Xp,t))return Reflect.get(Xp,t,n);if(t==="hasOwnProperty")return hb}const o=Reflect.get(e,t,n);return(Qr(t)?f0.has(t):ub(t))||(r||Xi(e,"get",t),s)?o:Yi(o)?a&&Ld(t)?o:o.value:Mt(o)?r?_0(o):zu(o):o}}class d0 extends h0{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=to(s);if(!iu(n)&&!to(n)&&(s=dt(s),n=dt(n)),!He(e)&&Yi(s)&&!Yi(n))return l?!1:(s.value=n,!0)}const a=He(e)&&Ld(t)?Number(t)<e.length:ct(e,t),o=Reflect.set(e,t,n,r);return e===dt(r)&&(a?es(n,s)&&pr(e,"set",t,n):pr(e,"add",t,n)),o}deleteProperty(e,t){const n=ct(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!Qr(t)||!f0.has(t))&&Xi(e,"has",t),n}ownKeys(e){return Xi(e,"iterate",He(e)?"length":Vs),Reflect.ownKeys(e)}}class db extends h0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const pb=new d0,mb=new db,gb=new d0(!0),Ud=i=>i,Bu=i=>Reflect.getPrototypeOf(i);function Vl(i,e,t=!1,n=!1){i=i.__v_raw;const r=dt(i),s=dt(e);t||(es(e,s)&&Xi(r,"get",e),Xi(r,"get",s));const{has:a}=Bu(r),o=n?Ud:t?Bd:ul;if(a.call(r,e))return o(i.get(e));if(a.call(r,s))return o(i.get(s));i!==r&&i.get(e)}function Hl(i,e=!1){const t=this.__v_raw,n=dt(t),r=dt(i);return e||(es(i,r)&&Xi(n,"has",i),Xi(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Gl(i,e=!1){return i=i.__v_raw,!e&&Xi(dt(i),"iterate",Vs),Reflect.get(i,"size",i)}function Yp(i){i=dt(i);const e=dt(this);return Bu(e).has.call(e,i)||(e.add(i),pr(e,"add",i,i)),this}function qp(i,e){e=dt(e);const t=dt(this),{has:n,get:r}=Bu(t);let s=n.call(t,i);s||(i=dt(i),s=n.call(t,i));const a=r.call(t,i);return t.set(i,e),s?es(e,a)&&pr(t,"set",i,e):pr(t,"add",i,e),this}function jp(i){const e=dt(this),{has:t,get:n}=Bu(e);let r=t.call(e,i);r||(i=dt(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&pr(e,"delete",i,void 0),s}function $p(){const i=dt(this),e=i.size!==0,t=i.clear();return e&&pr(i,"clear",void 0,void 0),t}function Wl(i,e){return function(n,r){const s=this,a=s.__v_raw,o=dt(a),l=e?Ud:i?Bd:ul;return!i&&Xi(o,"iterate",Vs),a.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Xl(i,e,t){return function(...n){const r=this.__v_raw,s=dt(r),a=Ha(s),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=r[i](...n),u=t?Ud:e?Bd:ul;return!e&&Xi(s,"iterate",l?wh:Vs),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Er(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function _b(){const i={get(s){return Vl(this,s)},get size(){return Gl(this)},has:Hl,add:Yp,set:qp,delete:jp,clear:$p,forEach:Wl(!1,!1)},e={get(s){return Vl(this,s,!1,!0)},get size(){return Gl(this)},has:Hl,add:Yp,set:qp,delete:jp,clear:$p,forEach:Wl(!1,!0)},t={get(s){return Vl(this,s,!0)},get size(){return Gl(this,!0)},has(s){return Hl.call(this,s,!0)},add:Er("add"),set:Er("set"),delete:Er("delete"),clear:Er("clear"),forEach:Wl(!0,!1)},n={get(s){return Vl(this,s,!0,!0)},get size(){return Gl(this,!0)},has(s){return Hl.call(this,s,!0)},add:Er("add"),set:Er("set"),delete:Er("delete"),clear:Er("clear"),forEach:Wl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Xl(s,!1,!1),t[s]=Xl(s,!0,!1),e[s]=Xl(s,!1,!0),n[s]=Xl(s,!0,!0)}),[i,t,e,n]}const[vb,xb,yb,bb]=_b();function Fd(i,e){const t=e?i?bb:yb:i?xb:vb;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(ct(t,r)&&r in n?t:n,r,s)}const Sb={get:Fd(!1,!1)},Mb={get:Fd(!1,!0)},Eb={get:Fd(!0,!1)},p0=new WeakMap,m0=new WeakMap,g0=new WeakMap,Tb=new WeakMap;function wb(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ab(i){return i.__v_skip||!Object.isExtensible(i)?0:wb($y(i))}function zu(i){return to(i)?i:kd(i,!1,pb,Sb,p0)}function Cb(i){return kd(i,!1,gb,Mb,m0)}function _0(i){return kd(i,!0,mb,Eb,g0)}function kd(i,e,t,n,r){if(!Mt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const a=Ab(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return r.set(i,o),o}function Ga(i){return to(i)?Ga(i.__v_raw):!!(i&&i.__v_isReactive)}function to(i){return!!(i&&i.__v_isReadonly)}function iu(i){return!!(i&&i.__v_isShallow)}function v0(i){return Ga(i)||to(i)}function dt(i){const e=i&&i.__v_raw;return e?dt(e):i}function x0(i){return Object.isExtensible(i)&&tu(i,"__v_skip",!0),i}const ul=i=>Mt(i)?zu(i):i,Bd=i=>Mt(i)?_0(i):i;class y0{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Id(()=>e(this._value),()=>Bc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=dt(this);return(!e._cacheable||e.effect.dirty)&&es(e._value,e._value=e.effect.run())&&Bc(e,4),b0(e),e.effect._dirtyLevel>=2&&Bc(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rb(i,e,t=!1){let n,r;const s=je(i);return s?(n=i,r=pn):(n=i.get,r=i.set),new y0(n,r,s||!r,t)}function b0(i){var e;Xr&&zs&&(i=dt(i),l0(zs,(e=i.dep)!=null?e:i.dep=u0(()=>i.dep=void 0,i instanceof y0?i:void 0)))}function Bc(i,e=4,t){i=dt(i);const n=i.dep;n&&c0(n,e)}function Yi(i){return!!(i&&i.__v_isRef===!0)}function df(i){return Pb(i,!1)}function Pb(i,e){return Yi(i)?i:new Lb(i,e)}class Lb{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:dt(e),this._value=t?e:ul(e)}get value(){return b0(this),this._value}set value(e){const t=this.__v_isShallow||iu(e)||to(e);e=t?e:dt(e),es(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ul(e),Bc(this,4))}}function lr(i){return Yi(i)?i.value:i}const Db={get:(i,e,t)=>lr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Yi(r)&&!Yi(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function S0(i){return Ga(i)?i:new Proxy(i,Db)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yr(i,e,t,n){try{return n?i(...n):i()}catch(r){Vu(r,e,t)}}function Rn(i,e,t,n){if(je(i)){const s=Yr(i,e,t,n);return s&&J_(s)&&s.catch(a=>{Vu(a,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Rn(i[s],e,t,n));return r}function Vu(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Yr(l,null,10,[i,a,o]);return}}Ib(i,t,r,n)}function Ib(i,e,t,n=!0){console.error(i)}let fl=!1,Ah=!1;const gi=[];let kn=0;const Wa=[];let Ir=null,Ps=0;const M0=Promise.resolve();let zd=null;function Ob(i){const e=zd||M0;return i?e.then(this?i.bind(this):i):e}function Nb(i){let e=kn+1,t=gi.length;for(;e<t;){const n=e+t>>>1,r=gi[n],s=hl(r);s<i||s===i&&r.pre?e=n+1:t=n}return e}function Vd(i){(!gi.length||!gi.includes(i,fl&&i.allowRecurse?kn+1:kn))&&(i.id==null?gi.push(i):gi.splice(Nb(i.id),0,i),E0())}function E0(){!fl&&!Ah&&(Ah=!0,zd=M0.then(w0))}function Ub(i){const e=gi.indexOf(i);e>kn&&gi.splice(e,1)}function Fb(i){He(i)?Wa.push(...i):(!Ir||!Ir.includes(i,i.allowRecurse?Ps+1:Ps))&&Wa.push(i),E0()}function Kp(i,e,t=fl?kn+1:0){for(;t<gi.length;t++){const n=gi[t];if(n&&n.pre){if(i&&n.id!==i.uid)continue;gi.splice(t,1),t--,n()}}}function T0(i){if(Wa.length){const e=[...new Set(Wa)].sort((t,n)=>hl(t)-hl(n));if(Wa.length=0,Ir){Ir.push(...e);return}for(Ir=e,Ps=0;Ps<Ir.length;Ps++)Ir[Ps]();Ir=null,Ps=0}}const hl=i=>i.id==null?1/0:i.id,kb=(i,e)=>{const t=hl(i)-hl(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function w0(i){Ah=!1,fl=!0,gi.sort(kb);try{for(kn=0;kn<gi.length;kn++){const e=gi[kn];e&&e.active!==!1&&Yr(e,null,14)}}finally{kn=0,gi.length=0,T0(),fl=!1,zd=null,(gi.length||Wa.length)&&w0()}}function Bb(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||At;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=n[u]||At;h&&(r=t.map(d=>Zt(d)?d.trim():d)),f&&(r=t.map(Jy))}let o,l=n[o=ff(e)]||n[o=ff(Kn(e))];!l&&s&&(l=n[o=ff(mo(e))]),l&&Rn(l,i,6,r);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Rn(c,i,6,r)}}function A0(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let a={},o=!1;if(!je(i)){const l=c=>{const u=A0(c,e,!0);u&&(o=!0,ci(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!o?(Mt(i)&&n.set(i,null),null):(He(s)?s.forEach(l=>a[l]=null):ci(a,s),Mt(i)&&n.set(i,a),a)}function Hu(i,e){return!i||!Iu(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(i,e[0].toLowerCase()+e.slice(1))||ct(i,mo(e))||ct(i,e))}let si=null,C0=null;function nu(i){const e=si;return si=i,C0=i&&i.type.__scopeId||null,e}function Da(i,e=si,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&om(-1);const s=nu(e);let a;try{a=i(...r)}finally{nu(s),n._d&&om(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function pf(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=i;let m,p;const S=nu(i);try{if(t.shapeFlag&4){const E=r||n,R=E;m=Nn(u.call(R,E,f,s,d,h,_)),p=l}else{const E=e;m=Nn(E.length>1?E(s,{attrs:l,slots:o,emit:c}):E(s,null)),p=e.props?l:zb(l)}}catch(E){$o.length=0,Vu(E,i,1),m=mt(ts)}let x=m;if(p&&g!==!1){const E=Object.keys(p),{shapeFlag:R}=x;E.length&&R&7&&(a&&E.some(Rd)&&(p=Vb(p,a)),x=io(x,p))}return t.dirs&&(x=io(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,nu(S),m}const zb=i=>{let e;for(const t in i)(t==="class"||t==="style"||Iu(t))&&((e||(e={}))[t]=i[t]);return e},Vb=(i,e)=>{const t={};for(const n in i)(!Rd(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Hb(i,e,t){const{props:n,children:r,component:s}=i,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Zp(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==n[h]&&!Hu(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Zp(n,a,c):!0:!!a;return!1}function Zp(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Hu(t,s))return!0}return!1}function Gb({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const R0="components";function Hd(i,e){return Xb(R0,i,!0,e)||i}const Wb=Symbol.for("v-ndc");function Xb(i,e,t=!0,n=!1){const r=si||_i;if(r){const s=r.type;if(i===R0){const o=zS(s,!1);if(o&&(o===e||o===Kn(e)||o===Uu(Kn(e))))return s}const a=Jp(r[i]||s[i],e)||Jp(r.appContext[i],e);return!a&&n?s:a}}function Jp(i,e){return i&&(i[e]||i[Kn(e)]||i[Uu(Kn(e))])}const Yb=i=>i.__isSuspense;function qb(i,e){e&&e.pendingBranch?He(i)?e.effects.push(...i):e.effects.push(i):Fb(i)}const jb=Symbol.for("v-scx"),$b=()=>jo(jb),Yl={};function Hs(i,e,t){return P0(i,e,t)}function P0(i,e,{immediate:t,deep:n,flush:r,once:s,onTrack:a,onTrigger:o}=At){if(e&&s){const w=e;e=(...T)=>{w(...T),R()}}const l=_i,c=w=>n===!0?w:Is(w,n===!1?1:void 0);let u,f=!1,h=!1;if(Yi(i)?(u=()=>i.value,f=iu(i)):Ga(i)?(u=()=>c(i),f=!0):He(i)?(h=!0,f=i.some(w=>Ga(w)||iu(w)),u=()=>i.map(w=>{if(Yi(w))return w.value;if(Ga(w))return c(w);if(je(w))return Yr(w,l,2)})):je(i)?e?u=()=>Yr(i,l,2):u=()=>(d&&d(),Rn(i,l,3,[_])):u=pn,e&&n){const w=u;u=()=>Is(w())}let d,_=w=>{d=x.onStop=()=>{Yr(w,l,4),d=x.onStop=void 0}},g;if(Yu)if(_=pn,e?t&&Rn(e,l,3,[u(),h?[]:void 0,_]):u(),r==="sync"){const w=$b();g=w.__watcherHandles||(w.__watcherHandles=[])}else return pn;let m=h?new Array(i.length).fill(Yl):Yl;const p=()=>{if(!(!x.active||!x.dirty))if(e){const w=x.run();(n||f||(h?w.some((T,L)=>es(T,m[L])):es(w,m)))&&(d&&d(),Rn(e,l,3,[w,m===Yl?void 0:h&&m[0]===Yl?[]:m,_]),m=w)}else x.run()};p.allowRecurse=!!e;let S;r==="sync"?S=p:r==="post"?S=()=>Ni(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),S=()=>Vd(p));const x=new Id(u,pn,S),E=lb(),R=()=>{x.stop(),E&&Pd(E.effects,x)};return e?t?p():m=x.run():r==="post"?Ni(x.run.bind(x),l&&l.suspense):x.run(),g&&g.push(R),R}function Kb(i,e,t){const n=this.proxy,r=Zt(i)?i.includes(".")?L0(n,i):()=>n[i]:i.bind(n,n);let s;je(e)?s=e:(s=e.handler,t=e);const a=Pl(this),o=P0(r,s.bind(n),t);return a(),o}function L0(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Is(i,e,t=0,n){if(!Mt(i)||i.__v_skip)return i;if(e&&e>0){if(t>=e)return i;t++}if(n=n||new Set,n.has(i))return i;if(n.add(i),Yi(i))Is(i.value,e,t,n);else if(He(i))for(let r=0;r<i.length;r++)Is(i[r],e,t,n);else if(Ou(i)||Ha(i))i.forEach(r=>{Is(r,e,t,n)});else if(e0(i))for(const r in i)Is(i[r],e,t,n);return i}function D0(i,e){if(si===null)return i;const t=qu(si)||si.proxy,n=i.dirs||(i.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=At]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&Is(a),n.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return i}function ps(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(sa(),Rn(l,t,8,[i.el,o,i,e]),aa())}}/*! #__NO_SIDE_EFFECTS__ */function Zb(i,e){return je(i)?ci({name:i.name},e,{setup:i}):i}const Xo=i=>!!i.type.__asyncLoader,I0=i=>i.type.__isKeepAlive;function Jb(i,e){O0(i,"a",e)}function Qb(i,e){O0(i,"da",e)}function O0(i,e,t=_i){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Gu(e,n,t),t){let r=t.parent;for(;r&&r.parent;)I0(r.parent.vnode)&&eS(n,e,t,r),r=r.parent}}function eS(i,e,t,n){const r=Gu(e,i,n,!0);N0(()=>{Pd(n[e],r)},t)}function Gu(i,e,t=_i,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;sa();const o=Pl(t),l=Rn(e,t,i,a);return o(),aa(),l});return n?r.unshift(s):r.push(s),s}}const br=i=>(e,t=_i)=>(!Yu||i==="sp")&&Gu(i,(...n)=>e(...n),t),tS=br("bm"),Ur=br("m"),iS=br("bu"),nS=br("u"),rS=br("bum"),N0=br("um"),sS=br("sp"),aS=br("rtg"),oS=br("rtc");function lS(i,e=_i){Gu("ec",i,e)}function U0(i,e,t,n){let r;const s=t&&t[n];if(He(i)||Zt(i)){r=new Array(i.length);for(let a=0,o=i.length;a<o;a++)r[a]=e(i[a],a,void 0,s&&s[a])}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(Mt(i))if(i[Symbol.iterator])r=Array.from(i,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(i);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(i[c],c,o,s&&s[o])}}else r=[];return t&&(t[n]=r),r}function Ch(i,e,t={},n,r){if(si.isCE||si.parent&&Xo(si.parent)&&si.parent.isCE)return e!=="default"&&(t.name=e),mt("slot",t,n&&n());let s=i[e];s&&s._c&&(s._d=!1),Di();const a=s&&F0(s(t)),o=j0(Fi,{key:t.key||a&&a.key||`_${e}`},a||(n?n():[]),a&&i._===1?64:-2);return!r&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function F0(i){return i.some(e=>su(e)?!(e.type===ts||e.type===Fi&&!F0(e.children)):!0)?i:null}const Rh=i=>i?Z0(i)?qu(i)||i.proxy:Rh(i.parent):null,Yo=ci(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Rh(i.parent),$root:i=>Rh(i.root),$emit:i=>i.emit,$options:i=>Gd(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Vd(i.update)}),$nextTick:i=>i.n||(i.n=Ob.bind(i.proxy)),$watch:i=>Kb.bind(i)}),mf=(i,e)=>i!==At&&!i.__isScriptSetup&&ct(i,e),cS={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(mf(n,e))return a[e]=1,n[e];if(r!==At&&ct(r,e))return a[e]=2,r[e];if((c=i.propsOptions[0])&&ct(c,e))return a[e]=3,s[e];if(t!==At&&ct(t,e))return a[e]=4,t[e];Ph&&(a[e]=0)}}const u=Yo[e];let f,h;if(u)return e==="$attrs"&&Xi(i,"get",e),u(i);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==At&&ct(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,ct(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return mf(r,e)?(r[e]=t,!0):n!==At&&ct(n,e)?(n[e]=t,!0):ct(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},a){let o;return!!t[a]||i!==At&&ct(i,a)||mf(e,a)||(o=s[0])&&ct(o,a)||ct(n,a)||ct(Yo,a)||ct(r.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ct(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Qp(i){return He(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Ph=!0;function uS(i){const e=Gd(i),t=i.proxy,n=i.ctx;Ph=!1,e.beforeCreate&&em(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:x,unmounted:E,render:R,renderTracked:w,renderTriggered:T,errorCaptured:L,serverPrefetch:M,expose:b,inheritAttrs:k,components:B,directives:N,filters:$}=e;if(c&&fS(c,n,null),a)for(const Y in a){const H=a[Y];je(H)&&(n[Y]=H.bind(t))}if(r){const Y=r.call(t,t);Mt(Y)&&(i.data=zu(Y))}if(Ph=!0,s)for(const Y in s){const H=s[Y],se=je(H)?H.bind(t,t):je(H.get)?H.get.bind(t,t):pn,P=!je(H)&&je(H.set)?H.set.bind(t):pn,he=Un({get:se,set:P});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>he.value,set:we=>he.value=we})}if(o)for(const Y in o)k0(o[Y],n,t,Y);if(l){const Y=je(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(H=>{_S(H,Y[H])})}u&&em(u,i,"c");function te(Y,H){He(H)?H.forEach(se=>Y(se.bind(t))):H&&Y(H.bind(t))}if(te(tS,f),te(Ur,h),te(iS,d),te(nS,_),te(Jb,g),te(Qb,m),te(lS,L),te(oS,w),te(aS,T),te(rS,S),te(N0,E),te(sS,M),He(b))if(b.length){const Y=i.exposed||(i.exposed={});b.forEach(H=>{Object.defineProperty(Y,H,{get:()=>t[H],set:se=>t[H]=se})})}else i.exposed||(i.exposed={});R&&i.render===pn&&(i.render=R),k!=null&&(i.inheritAttrs=k),B&&(i.components=B),N&&(i.directives=N)}function fS(i,e,t=pn){He(i)&&(i=Lh(i));for(const n in i){const r=i[n];let s;Mt(r)?"default"in r?s=jo(r.from||n,r.default,!0):s=jo(r.from||n):s=jo(r),Yi(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[n]=s}}function em(i,e,t){Rn(He(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function k0(i,e,t,n){const r=n.includes(".")?L0(t,n):()=>t[n];if(Zt(i)){const s=e[i];je(s)&&Hs(r,s)}else if(je(i))Hs(r,i.bind(t));else if(Mt(i))if(He(i))i.forEach(s=>k0(s,e,t,n));else{const s=je(i.handler)?i.handler.bind(t):e[i.handler];je(s)&&Hs(r,s,i)}}function Gd(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=i.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ru(l,c,a,!0)),ru(l,e,a)),Mt(e)&&s.set(e,l),l}function ru(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ru(i,s,t,!0),r&&r.forEach(a=>ru(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=hS[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const hS={data:tm,props:im,emits:im,methods:Oo,computed:Oo,beforeCreate:Mi,created:Mi,beforeMount:Mi,mounted:Mi,beforeUpdate:Mi,updated:Mi,beforeDestroy:Mi,beforeUnmount:Mi,destroyed:Mi,unmounted:Mi,activated:Mi,deactivated:Mi,errorCaptured:Mi,serverPrefetch:Mi,components:Oo,directives:Oo,watch:pS,provide:tm,inject:dS};function tm(i,e){return e?i?function(){return ci(je(i)?i.call(this,this):i,je(e)?e.call(this,this):e)}:e:i}function dS(i,e){return Oo(Lh(i),Lh(e))}function Lh(i){if(He(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Mi(i,e){return i?[...new Set([].concat(i,e))]:e}function Oo(i,e){return i?ci(Object.create(null),i,e):e}function im(i,e){return i?He(i)&&He(e)?[...new Set([...i,...e])]:ci(Object.create(null),Qp(i),Qp(e??{})):e}function pS(i,e){if(!i)return e;if(!e)return i;const t=ci(Object.create(null),i);for(const n in e)t[n]=Mi(i[n],e[n]);return t}function B0(){return{app:null,config:{isNativeTag:qy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mS=0;function gS(i,e){return function(n,r=null){je(n)||(n=ci({},n)),r!=null&&!Mt(r)&&(r=null);const s=B0(),a=new WeakSet;let o=!1;const l=s.app={_uid:mS++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:GS,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&je(c.install)?(a.add(c),c.install(l,...u)):je(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=mt(n,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):i(h,c,f),o=!0,l._container=c,c.__vue_app__=l,qu(h.component)||h.component.proxy}},unmount(){o&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=qo;qo=l;try{return c()}finally{qo=u}}};return l}}let qo=null;function _S(i,e){if(_i){let t=_i.provides;const n=_i.parent&&_i.parent.provides;n===t&&(t=_i.provides=Object.create(n)),t[i]=e}}function jo(i,e,t=!1){const n=_i||si;if(n||qo){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:qo._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&je(e)?e.call(n&&n.proxy):e}}function vS(i,e,t,n=!1){const r={},s={};tu(s,Xu,1),i.propsDefaults=Object.create(null),z0(i,e,r,s);for(const a in i.propsOptions[0])a in r||(r[a]=void 0);t?i.props=n?r:Cb(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function xS(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:a}}=i,o=dt(r),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Hu(i.emitsOptions,h))continue;const d=e[h];if(l)if(ct(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=Kn(h);r[_]=Dh(l,o,_,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{z0(i,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ct(e,f)&&((u=mo(f))===f||!ct(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Dh(l,o,f,void 0,i,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ct(e,f))&&(delete s[f],c=!0)}c&&pr(i,"set","$attrs")}function z0(i,e,t,n){const[r,s]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(Wo(l))continue;const c=e[l];let u;r&&ct(r,u=Kn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Hu(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=dt(t),c=o||At;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Dh(r,l,f,c[f],i,!ct(c,f))}}return a}function Dh(i,e,t,n,r,s){const a=i[t];if(a!=null){const o=ct(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=Pl(r);n=c[t]=l.call(null,e),u()}}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===mo(t))&&(n=!0))}return n}function V0(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,a={},o=[];let l=!1;if(!je(i)){const u=f=>{l=!0;const[h,d]=V0(f,e,!0);ci(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Mt(i)&&n.set(i,Va),Va;if(He(s))for(let u=0;u<s.length;u++){const f=Kn(s[u]);nm(f)&&(a[f]=At)}else if(s)for(const u in s){const f=Kn(u);if(nm(f)){const h=s[u],d=a[f]=He(h)||je(h)?{type:h}:ci({},h);if(d){const _=am(Boolean,d.type),g=am(String,d.type);d[0]=_>-1,d[1]=g<0||_<g,(_>-1||ct(d,"default"))&&o.push(f)}}}const c=[a,o];return Mt(i)&&n.set(i,c),c}function nm(i){return i[0]!=="$"&&!Wo(i)}function rm(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function sm(i,e){return rm(i)===rm(e)}function am(i,e){return He(e)?e.findIndex(t=>sm(t,i)):je(e)&&sm(e,i)?0:-1}const H0=i=>i[0]==="_"||i==="$stable",Wd=i=>He(i)?i.map(Nn):[Nn(i)],yS=(i,e,t)=>{if(e._n)return e;const n=Da((...r)=>Wd(e(...r)),t);return n._c=!1,n},G0=(i,e,t)=>{const n=i._ctx;for(const r in i){if(H0(r))continue;const s=i[r];if(je(s))e[r]=yS(r,s,n);else if(s!=null){const a=Wd(s);e[r]=()=>a}}},W0=(i,e)=>{const t=Wd(e);i.slots.default=()=>t},bS=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=dt(e),tu(e,"_",t)):G0(e,i.slots={})}else i.slots={},e&&W0(i,e);tu(i.slots,Xu,1)},SS=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,a=At;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ci(r,e),!t&&o===1&&delete r._):(s=!e.$stable,G0(e,r)),a=e}else e&&(W0(i,e),a={default:1});if(s)for(const o in r)!H0(o)&&a[o]==null&&delete r[o]};function Ih(i,e,t,n,r=!1){if(He(i)){i.forEach((h,d)=>Ih(h,e&&(He(e)?e[d]:e),t,n,r));return}if(Xo(n)&&!r)return;const s=n.shapeFlag&4?qu(n.component)||n.component.proxy:n.el,a=r?null:s,{i:o,r:l}=i,c=e&&e.r,u=o.refs===At?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Zt(c)?(u[c]=null,ct(f,c)&&(f[c]=null)):Yi(c)&&(c.value=null)),je(l))Yr(l,o,12,[a,u]);else{const h=Zt(l),d=Yi(l);if(h||d){const _=()=>{if(i.f){const g=h?ct(f,l)?f[l]:u[l]:l.value;r?He(g)&&Pd(g,s):He(g)?g.includes(s)||g.push(s):h?(u[l]=[s],ct(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=a,ct(f,l)&&(f[l]=a)):d&&(l.value=a,i.k&&(u[i.k]=a))};a?(_.id=-1,Ni(_,t)):_()}}}const Ni=qb;function MS(i){return ES(i)}function ES(i,e){const t=t0();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=pn,insertStaticContent:_}=i,g=(C,I,G,Q=null,v=null,y=null,O=void 0,U=null,z=!!I.dynamicChildren)=>{if(C===I)return;C&&!bo(C,I)&&(Q=ue(C),we(C,v,y,!0),C=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:F,ref:re,shapeFlag:J}=I;switch(F){case Wu:m(C,I,G,Q);break;case ts:p(C,I,G,Q);break;case zc:C==null&&S(I,G,Q,O);break;case Fi:B(C,I,G,Q,v,y,O,U,z);break;default:J&1?R(C,I,G,Q,v,y,O,U,z):J&6?N(C,I,G,Q,v,y,O,U,z):(J&64||J&128)&&F.process(C,I,G,Q,v,y,O,U,z,Ve)}re!=null&&v&&Ih(re,C&&C.ref,y,I||C,!I)},m=(C,I,G,Q)=>{if(C==null)n(I.el=o(I.children),G,Q);else{const v=I.el=C.el;I.children!==C.children&&c(v,I.children)}},p=(C,I,G,Q)=>{C==null?n(I.el=l(I.children||""),G,Q):I.el=C.el},S=(C,I,G,Q)=>{[C.el,C.anchor]=_(C.children,I,G,Q,C.el,C.anchor)},x=({el:C,anchor:I},G,Q)=>{let v;for(;C&&C!==I;)v=h(C),n(C,G,Q),C=v;n(I,G,Q)},E=({el:C,anchor:I})=>{let G;for(;C&&C!==I;)G=h(C),r(C),C=G;r(I)},R=(C,I,G,Q,v,y,O,U,z)=>{I.type==="svg"?O="svg":I.type==="math"&&(O="mathml"),C==null?w(I,G,Q,v,y,O,U,z):M(C,I,v,y,O,U,z)},w=(C,I,G,Q,v,y,O,U)=>{let z,F;const{props:re,shapeFlag:J,transition:ne,dirs:ce}=C;if(z=C.el=a(C.type,y,re&&re.is,re),J&8?u(z,C.children):J&16&&L(C.children,z,null,Q,v,gf(C,y),O,U),ce&&ps(C,null,Q,"created"),T(z,C,C.scopeId,O,Q),re){for(const oe in re)oe!=="value"&&!Wo(oe)&&s(z,oe,null,re[oe],y,C.children,Q,v,me);"value"in re&&s(z,"value",null,re.value,y),(F=re.onVnodeBeforeMount)&&Ln(F,Q,C)}ce&&ps(C,null,Q,"beforeMount");const ie=TS(v,ne);ie&&ne.beforeEnter(z),n(z,I,G),((F=re&&re.onVnodeMounted)||ie||ce)&&Ni(()=>{F&&Ln(F,Q,C),ie&&ne.enter(z),ce&&ps(C,null,Q,"mounted")},v)},T=(C,I,G,Q,v)=>{if(G&&d(C,G),Q)for(let y=0;y<Q.length;y++)d(C,Q[y]);if(v){let y=v.subTree;if(I===y){const O=v.vnode;T(C,O,O.scopeId,O.slotScopeIds,v.parent)}}},L=(C,I,G,Q,v,y,O,U,z=0)=>{for(let F=z;F<C.length;F++){const re=C[F]=U?Or(C[F]):Nn(C[F]);g(null,re,I,G,Q,v,y,O,U)}},M=(C,I,G,Q,v,y,O)=>{const U=I.el=C.el;let{patchFlag:z,dynamicChildren:F,dirs:re}=I;z|=C.patchFlag&16;const J=C.props||At,ne=I.props||At;let ce;if(G&&ms(G,!1),(ce=ne.onVnodeBeforeUpdate)&&Ln(ce,G,I,C),re&&ps(I,C,G,"beforeUpdate"),G&&ms(G,!0),F?b(C.dynamicChildren,F,U,G,Q,gf(I,v),y):O||H(C,I,U,null,G,Q,gf(I,v),y,!1),z>0){if(z&16)k(U,I,J,ne,G,Q,v);else if(z&2&&J.class!==ne.class&&s(U,"class",null,ne.class,v),z&4&&s(U,"style",J.style,ne.style,v),z&8){const ie=I.dynamicProps;for(let oe=0;oe<ie.length;oe++){const ge=ie[oe],de=J[ge],xe=ne[ge];(xe!==de||ge==="value")&&s(U,ge,de,xe,v,C.children,G,Q,me)}}z&1&&C.children!==I.children&&u(U,I.children)}else!O&&F==null&&k(U,I,J,ne,G,Q,v);((ce=ne.onVnodeUpdated)||re)&&Ni(()=>{ce&&Ln(ce,G,I,C),re&&ps(I,C,G,"updated")},Q)},b=(C,I,G,Q,v,y,O)=>{for(let U=0;U<I.length;U++){const z=C[U],F=I[U],re=z.el&&(z.type===Fi||!bo(z,F)||z.shapeFlag&70)?f(z.el):G;g(z,F,re,null,Q,v,y,O,!0)}},k=(C,I,G,Q,v,y,O)=>{if(G!==Q){if(G!==At)for(const U in G)!Wo(U)&&!(U in Q)&&s(C,U,G[U],null,O,I.children,v,y,me);for(const U in Q){if(Wo(U))continue;const z=Q[U],F=G[U];z!==F&&U!=="value"&&s(C,U,F,z,O,I.children,v,y,me)}"value"in Q&&s(C,"value",G.value,Q.value,O)}},B=(C,I,G,Q,v,y,O,U,z)=>{const F=I.el=C?C.el:o(""),re=I.anchor=C?C.anchor:o("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:ce}=I;ce&&(U=U?U.concat(ce):ce),C==null?(n(F,G,Q),n(re,G,Q),L(I.children||[],G,re,v,y,O,U,z)):J>0&&J&64&&ne&&C.dynamicChildren?(b(C.dynamicChildren,ne,G,v,y,O,U),(I.key!=null||v&&I===v.subTree)&&X0(C,I,!0)):H(C,I,G,re,v,y,O,U,z)},N=(C,I,G,Q,v,y,O,U,z)=>{I.slotScopeIds=U,C==null?I.shapeFlag&512?v.ctx.activate(I,G,Q,O,z):$(I,G,Q,v,y,O,z):Z(C,I,z)},$=(C,I,G,Q,v,y,O)=>{const U=C.component=NS(C,Q,v);if(I0(C)&&(U.ctx.renderer=Ve),US(U),U.asyncDep){if(v&&v.registerDep(U,te),!C.el){const z=U.subTree=mt(ts);p(null,z,I,G)}}else te(U,C,I,G,v,y,O)},Z=(C,I,G)=>{const Q=I.component=C.component;if(Hb(C,I,G))if(Q.asyncDep&&!Q.asyncResolved){Y(Q,I,G);return}else Q.next=I,Ub(Q.update),Q.effect.dirty=!0,Q.update();else I.el=C.el,Q.vnode=I},te=(C,I,G,Q,v,y,O)=>{const U=()=>{if(C.isMounted){let{next:re,bu:J,u:ne,parent:ce,vnode:ie}=C;{const Ae=Y0(C);if(Ae){re&&(re.el=ie.el,Y(C,re,O)),Ae.asyncDep.then(()=>{C.isUnmounted||U()});return}}let oe=re,ge;ms(C,!1),re?(re.el=ie.el,Y(C,re,O)):re=ie,J&&kc(J),(ge=re.props&&re.props.onVnodeBeforeUpdate)&&Ln(ge,ce,re,ie),ms(C,!0);const de=pf(C),xe=C.subTree;C.subTree=de,g(xe,de,f(xe.el),ue(xe),C,v,y),re.el=de.el,oe===null&&Gb(C,de.el),ne&&Ni(ne,v),(ge=re.props&&re.props.onVnodeUpdated)&&Ni(()=>Ln(ge,ce,re,ie),v)}else{let re;const{el:J,props:ne}=I,{bm:ce,m:ie,parent:oe}=C,ge=Xo(I);if(ms(C,!1),ce&&kc(ce),!ge&&(re=ne&&ne.onVnodeBeforeMount)&&Ln(re,oe,I),ms(C,!0),J&&ke){const de=()=>{C.subTree=pf(C),ke(J,C.subTree,C,v,null)};ge?I.type.__asyncLoader().then(()=>!C.isUnmounted&&de()):de()}else{const de=C.subTree=pf(C);g(null,de,G,Q,C,v,y),I.el=de.el}if(ie&&Ni(ie,v),!ge&&(re=ne&&ne.onVnodeMounted)){const de=I;Ni(()=>Ln(re,oe,de),v)}(I.shapeFlag&256||oe&&Xo(oe.vnode)&&oe.vnode.shapeFlag&256)&&C.a&&Ni(C.a,v),C.isMounted=!0,I=G=Q=null}},z=C.effect=new Id(U,pn,()=>Vd(F),C.scope),F=C.update=()=>{z.dirty&&z.run()};F.id=C.uid,ms(C,!0),F()},Y=(C,I,G)=>{I.component=C;const Q=C.vnode.props;C.vnode=I,C.next=null,xS(C,I.props,Q,G),SS(C,I.children,G),sa(),Kp(C),aa()},H=(C,I,G,Q,v,y,O,U,z=!1)=>{const F=C&&C.children,re=C?C.shapeFlag:0,J=I.children,{patchFlag:ne,shapeFlag:ce}=I;if(ne>0){if(ne&128){P(F,J,G,Q,v,y,O,U,z);return}else if(ne&256){se(F,J,G,Q,v,y,O,U,z);return}}ce&8?(re&16&&me(F,v,y),J!==F&&u(G,J)):re&16?ce&16?P(F,J,G,Q,v,y,O,U,z):me(F,v,y,!0):(re&8&&u(G,""),ce&16&&L(J,G,Q,v,y,O,U,z))},se=(C,I,G,Q,v,y,O,U,z)=>{C=C||Va,I=I||Va;const F=C.length,re=I.length,J=Math.min(F,re);let ne;for(ne=0;ne<J;ne++){const ce=I[ne]=z?Or(I[ne]):Nn(I[ne]);g(C[ne],ce,G,null,v,y,O,U,z)}F>re?me(C,v,y,!0,!1,J):L(I,G,Q,v,y,O,U,z,J)},P=(C,I,G,Q,v,y,O,U,z)=>{let F=0;const re=I.length;let J=C.length-1,ne=re-1;for(;F<=J&&F<=ne;){const ce=C[F],ie=I[F]=z?Or(I[F]):Nn(I[F]);if(bo(ce,ie))g(ce,ie,G,null,v,y,O,U,z);else break;F++}for(;F<=J&&F<=ne;){const ce=C[J],ie=I[ne]=z?Or(I[ne]):Nn(I[ne]);if(bo(ce,ie))g(ce,ie,G,null,v,y,O,U,z);else break;J--,ne--}if(F>J){if(F<=ne){const ce=ne+1,ie=ce<re?I[ce].el:Q;for(;F<=ne;)g(null,I[F]=z?Or(I[F]):Nn(I[F]),G,ie,v,y,O,U,z),F++}}else if(F>ne)for(;F<=J;)we(C[F],v,y,!0),F++;else{const ce=F,ie=F,oe=new Map;for(F=ie;F<=ne;F++){const We=I[F]=z?Or(I[F]):Nn(I[F]);We.key!=null&&oe.set(We.key,F)}let ge,de=0;const xe=ne-ie+1;let Ae=!1,Ke=0;const qe=new Array(xe);for(F=0;F<xe;F++)qe[F]=0;for(F=ce;F<=J;F++){const We=C[F];if(de>=xe){we(We,v,y,!0);continue}let ye;if(We.key!=null)ye=oe.get(We.key);else for(ge=ie;ge<=ne;ge++)if(qe[ge-ie]===0&&bo(We,I[ge])){ye=ge;break}ye===void 0?we(We,v,y,!0):(qe[ye-ie]=F+1,ye>=Ke?Ke=ye:Ae=!0,g(We,I[ye],G,null,v,y,O,U,z),de++)}const Ze=Ae?wS(qe):Va;for(ge=Ze.length-1,F=xe-1;F>=0;F--){const We=ie+F,ye=I[We],D=We+1<re?I[We+1].el:Q;qe[F]===0?g(null,ye,G,D,v,y,O,U,z):Ae&&(ge<0||F!==Ze[ge]?he(ye,G,D,2):ge--)}}},he=(C,I,G,Q,v=null)=>{const{el:y,type:O,transition:U,children:z,shapeFlag:F}=C;if(F&6){he(C.component.subTree,I,G,Q);return}if(F&128){C.suspense.move(I,G,Q);return}if(F&64){O.move(C,I,G,Ve);return}if(O===Fi){n(y,I,G);for(let J=0;J<z.length;J++)he(z[J],I,G,Q);n(C.anchor,I,G);return}if(O===zc){x(C,I,G);return}if(Q!==2&&F&1&&U)if(Q===0)U.beforeEnter(y),n(y,I,G),Ni(()=>U.enter(y),v);else{const{leave:J,delayLeave:ne,afterLeave:ce}=U,ie=()=>n(y,I,G),oe=()=>{J(y,()=>{ie(),ce&&ce()})};ne?ne(y,ie,oe):oe()}else n(y,I,G)},we=(C,I,G,Q=!1,v=!1)=>{const{type:y,props:O,ref:U,children:z,dynamicChildren:F,shapeFlag:re,patchFlag:J,dirs:ne}=C;if(U!=null&&Ih(U,null,G,C,!0),re&256){I.ctx.deactivate(C);return}const ce=re&1&&ne,ie=!Xo(C);let oe;if(ie&&(oe=O&&O.onVnodeBeforeUnmount)&&Ln(oe,I,C),re&6)le(C.component,G,Q);else{if(re&128){C.suspense.unmount(G,Q);return}ce&&ps(C,null,I,"beforeUnmount"),re&64?C.type.remove(C,I,G,v,Ve,Q):F&&(y!==Fi||J>0&&J&64)?me(F,I,G,!1,!0):(y===Fi&&J&384||!v&&re&16)&&me(z,I,G),Q&&$e(C)}(ie&&(oe=O&&O.onVnodeUnmounted)||ce)&&Ni(()=>{oe&&Ln(oe,I,C),ce&&ps(C,null,I,"unmounted")},G)},$e=C=>{const{type:I,el:G,anchor:Q,transition:v}=C;if(I===Fi){ee(G,Q);return}if(I===zc){E(C);return}const y=()=>{r(G),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(C.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:U}=v,z=()=>O(G,y);U?U(C.el,y,z):z()}else y()},ee=(C,I)=>{let G;for(;C!==I;)G=h(C),r(C),C=G;r(I)},le=(C,I,G)=>{const{bum:Q,scope:v,update:y,subTree:O,um:U}=C;Q&&kc(Q),v.stop(),y&&(y.active=!1,we(O,C,I,G)),U&&Ni(U,I),Ni(()=>{C.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},me=(C,I,G,Q=!1,v=!1,y=0)=>{for(let O=y;O<C.length;O++)we(C[O],I,G,Q,v)},ue=C=>C.shapeFlag&6?ue(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el);let Pe=!1;const Ie=(C,I,G)=>{C==null?I._vnode&&we(I._vnode,null,null,!0):g(I._vnode||null,C,I,null,null,null,G),Pe||(Pe=!0,Kp(),T0(),Pe=!1),I._vnode=C},Ve={p:g,um:we,m:he,r:$e,mt:$,mc:L,pc:H,pbc:b,n:ue,o:i};let W,ke;return e&&([W,ke]=e(Ve)),{render:Ie,hydrate:W,createApp:gS(Ie,W)}}function gf({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ms({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function TS(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function X0(i,e,t=!1){const n=i.children,r=e.children;if(He(n)&&He(r))for(let s=0;s<n.length;s++){const a=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Or(r[s]),o.el=a.el),t||X0(a,o)),o.type===Wu&&(o.el=a.el)}}function wS(i){const e=i.slice(),t=[0];let n,r,s,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,i[t[o]]<c?s=o+1:a=o;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Y0(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Y0(e)}const AS=i=>i.__isTeleport,Fi=Symbol.for("v-fgt"),Wu=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),zc=Symbol.for("v-stc"),$o=[];let An=null;function Di(i=!1){$o.push(An=i?null:[])}function CS(){$o.pop(),An=$o[$o.length-1]||null}let dl=1;function om(i){dl+=i}function q0(i){return i.dynamicChildren=dl>0?An||Va:null,CS(),dl>0&&An&&An.push(i),i}function nn(i,e,t,n,r,s){return q0(Te(i,e,t,n,r,s,!0))}function j0(i,e,t,n,r){return q0(mt(i,e,t,n,r,!0))}function su(i){return i?i.__v_isVNode===!0:!1}function bo(i,e){return i.type===e.type&&i.key===e.key}const Xu="__vInternal",$0=({key:i})=>i??null,Vc=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Zt(i)||Yi(i)||je(i)?{i:si,r:i,k:e,f:!!t}:i:null);function Te(i,e=null,t=null,n=0,r=null,s=i===Fi?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&$0(e),ref:e&&Vc(e),scopeId:C0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:si};return o?(Xd(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Zt(t)?8:16),dl>0&&!a&&An&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&An.push(l),l}const mt=RS;function RS(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Wb)&&(i=ts),su(i)){const o=io(i,e,!0);return t&&Xd(o,t),dl>0&&!s&&An&&(o.shapeFlag&6?An[An.indexOf(i)]=o:An.push(o)),o.patchFlag|=-2,o}if(VS(i)&&(i=i.__vccOpts),e){e=PS(e);let{class:o,style:l}=e;o&&!Zt(o)&&(e.class=Wr(o)),Mt(l)&&(v0(l)&&!He(l)&&(l=ci({},l)),e.style=Fu(l))}const a=Zt(i)?1:Yb(i)?128:AS(i)?64:Mt(i)?4:je(i)?2:0;return Te(i,e,t,n,r,a,s,!0)}function PS(i){return i?v0(i)||Xu in i?ci({},i):i:null}function io(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:a}=i,o=e?DS(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&$0(o),ref:e&&e.ref?t&&r?He(r)?r.concat(Vc(e)):[r,Vc(e)]:Vc(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Fi?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&io(i.ssContent),ssFallback:i.ssFallback&&io(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Gs(i=" ",e=0){return mt(Wu,null,i,e)}function LS(i,e){const t=mt(zc,null,i);return t.staticCount=e,t}function K0(i="",e=!1){return e?(Di(),j0(ts,null,i)):mt(ts,null,i)}function Nn(i){return i==null||typeof i=="boolean"?mt(ts):He(i)?mt(Fi,null,i.slice()):typeof i=="object"?Or(i):mt(Wu,null,String(i))}function Or(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:io(i)}function Xd(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Xd(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Xu in e)?e._ctx=si:r===3&&si&&(si.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:si},t=32):(e=String(e),n&64?(t=16,e=[Gs(e)]):t=8);i.children=e,i.shapeFlag|=t}function DS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Wr([e.class,n.class]));else if(r==="style")e.style=Fu([e.style,n.style]);else if(Iu(r)){const s=e[r],a=n[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=n[r])}return e}function Ln(i,e,t,n=null){Rn(i,e,7,[t,n])}const IS=B0();let OS=0;function NS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||IS,s={uid:OS++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new s0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:V0(n,r),emitsOptions:A0(n,r),emit:null,emitted:null,propsDefaults:At,inheritAttrs:n.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Bb.bind(null,s),i.ce&&i.ce(s),s}let _i=null,au,Oh;{const i=t0(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};au=e("__VUE_INSTANCE_SETTERS__",t=>_i=t),Oh=e("__VUE_SSR_SETTERS__",t=>Yu=t)}const Pl=i=>{const e=_i;return au(i),i.scope.on(),()=>{i.scope.off(),au(e)}},lm=()=>{_i&&_i.scope.off(),au(null)};function Z0(i){return i.vnode.shapeFlag&4}let Yu=!1;function US(i,e=!1){e&&Oh(e);const{props:t,children:n}=i.vnode,r=Z0(i);vS(i,t,r,e),bS(i,n);const s=r?FS(i,e):void 0;return e&&Oh(!1),s}function FS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=x0(new Proxy(i.ctx,cS));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?BS(i):null,s=Pl(i);sa();const a=Yr(n,i,0,[i.props,r]);if(aa(),s(),J_(a)){if(a.then(lm,lm),e)return a.then(o=>{cm(i,o,e)}).catch(o=>{Vu(o,i,0)});i.asyncDep=a}else cm(i,a,e)}else J0(i,e)}function cm(i,e,t){je(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Mt(e)&&(i.setupState=S0(e)),J0(i,t)}let um;function J0(i,e,t){const n=i.type;if(!i.render){if(!e&&um&&!n.render){const r=n.template||Gd(i).template;if(r){const{isCustomElement:s,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,c=ci(ci({isCustomElement:s,delimiters:o},a),l);n.render=um(r,c)}}i.render=n.render||pn}{const r=Pl(i);sa();try{uS(i)}finally{aa(),r()}}}function kS(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return Xi(i,"get","$attrs"),e[t]}}))}function BS(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return kS(i)},slots:i.slots,emit:i.emit,expose:e}}function qu(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(S0(x0(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Yo)return Yo[t](i)},has(e,t){return t in e||t in Yo}}))}function zS(i,e=!0){return je(i)?i.displayName||i.name:i.name||e&&i.__name}function VS(i){return je(i)&&"__vccOpts"in i}const Un=(i,e)=>Rb(i,e,Yu);function HS(i,e,t){const n=arguments.length;return n===2?Mt(e)&&!He(e)?su(e)?mt(i,null,[e]):mt(i,e):mt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&su(t)&&(t=[t]),mt(i,e,t))}const GS="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const WS="http://www.w3.org/2000/svg",XS="http://www.w3.org/1998/Math/MathML",Nr=typeof document<"u"?document:null,fm=Nr&&Nr.createElement("template"),YS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?Nr.createElementNS(WS,i):e==="mathml"?Nr.createElementNS(XS,i):Nr.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Nr.createTextNode(i),createComment:i=>Nr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Nr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{fm.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const o=fm.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qS=Symbol("_vtc");function jS(i,e,t){const n=i[qS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const ou=Symbol("_vod"),Q0=Symbol("_vsh"),$S={beforeMount(i,{value:e},{transition:t}){i[ou]=i.style.display==="none"?"":i.style.display,t&&e?t.beforeEnter(i):So(i,e)},mounted(i,{value:e},{transition:t}){t&&e&&t.enter(i)},updated(i,{value:e,oldValue:t},{transition:n}){!e!=!t&&(n?e?(n.beforeEnter(i),So(i,!0),n.enter(i)):n.leave(i,()=>{So(i,!1)}):So(i,e))},beforeUnmount(i,{value:e}){So(i,e)}};function So(i,e){i.style.display=e?i[ou]:"none",i[Q0]=!e}const KS=Symbol(""),ZS=/(^|;)\s*display\s*:/;function JS(i,e,t){const n=i.style,r=Zt(t);let s=!1;if(t&&!r){if(e)if(Zt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Hc(n,o,"")}else for(const a in e)t[a]==null&&Hc(n,a,"");for(const a in t)a==="display"&&(s=!0),Hc(n,a,t[a])}else if(r){if(e!==t){const a=n[KS];a&&(t+=";"+a),n.cssText=t,s=ZS.test(t)}}else e&&i.removeAttribute("style");ou in i&&(i[ou]=s?n.display:"",i[Q0]&&(n.display="none"))}const hm=/\s*!important$/;function Hc(i,e,t){if(He(t))t.forEach(n=>Hc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=QS(i,e);hm.test(t)?i.setProperty(mo(n),t.replace(hm,""),"important"):i[n]=t}}const dm=["Webkit","Moz","ms"],_f={};function QS(i,e){const t=_f[e];if(t)return t;let n=Kn(e);if(n!=="filter"&&n in i)return _f[e]=n;n=Uu(n);for(let r=0;r<dm.length;r++){const s=dm[r]+n;if(s in i)return _f[e]=s}return e}const pm="http://www.w3.org/1999/xlink";function eM(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(pm,e.slice(6,e.length)):i.setAttributeNS(pm,e,t);else{const s=rb(e);t==null||s&&!i0(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function tM(i,e,t,n,r,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,r,s),i[e]=t??"";return}const o=i.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?i.getAttribute("value")||"":i.value,u=t??"";(c!==u||!("_value"in i))&&(i.value=u),t==null&&i.removeAttribute(e),i._value=t;return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=i0(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function ev(i,e,t,n){i.addEventListener(e,t,n)}function iM(i,e,t,n){i.removeEventListener(e,t,n)}const mm=Symbol("_vei");function nM(i,e,t,n,r=null){const s=i[mm]||(i[mm]={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=rM(e);if(n){const c=s[e]=oM(n,r);ev(i,o,c,l)}else a&&(iM(i,o,a,l),s[e]=void 0)}}const gm=/(?:Once|Passive|Capture)$/;function rM(i){let e;if(gm.test(i)){e={};let n;for(;n=i.match(gm);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):mo(i.slice(2)),e]}let vf=0;const sM=Promise.resolve(),aM=()=>vf||(sM.then(()=>vf=0),vf=Date.now());function oM(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Rn(lM(n,t.value),e,5,[n])};return t.value=i,t.attached=aM(),t}function lM(i,e){if(He(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const _m=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,cM=(i,e,t,n,r,s,a,o,l)=>{const c=r==="svg";e==="class"?jS(i,n,c):e==="style"?JS(i,t,n):Iu(e)?Rd(e)||nM(i,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uM(i,e,n,c))?tM(i,e,n,s,a,o,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),eM(i,e,n,c))};function uM(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&_m(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _m(e)&&Zt(t)?!1:e in i}const vm=i=>{const e=i.props["onUpdate:modelValue"]||!1;return He(e)?t=>kc(e,t):e},xf=Symbol("_assign"),fM={deep:!0,created(i,e,t){i[xf]=vm(t),ev(i,"change",()=>{const n=i._modelValue,r=hM(i),s=i.checked,a=i[xf];if(He(n)){const o=n0(n,r),l=o!==-1;if(s&&!l)a(n.concat(r));else if(!s&&l){const c=[...n];c.splice(o,1),a(c)}}else if(Ou(n)){const o=new Set(n);s?o.add(r):o.delete(r),a(o)}else a(tv(i,s))})},mounted:xm,beforeUpdate(i,e,t){i[xf]=vm(t),xm(i,e,t)}};function xm(i,{value:e,oldValue:t},n){i._modelValue=e,He(e)?i.checked=n0(e,n.props.value)>-1:Ou(e)?i.checked=e.has(n.props.value):e!==t&&(i.checked=ku(e,tv(i,!0)))}function hM(i){return"_value"in i?i._value:i.value}function tv(i,e){const t=e?"_trueValue":"_falseValue";return t in i?i[t]:e}const dM=ci({patchProp:cM},YS);let ym;function pM(){return ym||(ym=MS(dM))}const mM=(...i)=>{const e=pM().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=_M(n);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,gM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function gM(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function _M(i){return Zt(i)?document.querySelector(i):i}const vM="/assets/banner-profile-removebg-BJG3MEu4.png";function xM(){return iv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function iv(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const yM=typeof Proxy=="function",bM="devtools-plugin:setup",SM="plugin:settings:set";let ca,Nh;function MM(){var i;return ca!==void 0||(typeof window<"u"&&window.performance?(ca=!0,Nh=window.performance):typeof globalThis<"u"&&(!((i=globalThis.perf_hooks)===null||i===void 0)&&i.performance)?(ca=!0,Nh=globalThis.perf_hooks.performance):ca=!1),ca}function EM(){return MM()?Nh.now():Date.now()}class TM{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const a in e.settings){const o=e.settings[a];n[a]=o.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const a=localStorage.getItem(r),o=JSON.parse(a);Object.assign(s,o)}catch{}this.fallbacks={getSettings(){return s},setSettings(a){try{localStorage.setItem(r,JSON.stringify(a))}catch{}s=a},now(){return EM()}},t&&t.on(SM,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...l)=>{this.onQueue.push({method:o,args:l})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...l)=>(this.targetQueue.push({method:o,args:l,resolve:()=>{}}),this.fallbacks[o](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:o,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function wM(i,e){const t=i,n=iv(),r=xM(),s=yM&&t.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(bM,i,e);else{const a=s?new TM(t,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:a}),a&&e(a.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var nv="store";function AM(i){return i===void 0&&(i=null),jo(i!==null?i:nv)}function go(i,e){Object.keys(i).forEach(function(t){return e(i[t],t)})}function CM(i){return i!==null&&typeof i=="object"}function RM(i){return i&&typeof i.then=="function"}function PM(i,e){return function(){return i(e)}}function rv(i,e,t){return e.indexOf(i)<0&&(t&&t.prepend?e.unshift(i):e.push(i)),function(){var n=e.indexOf(i);n>-1&&e.splice(n,1)}}function sv(i,e){i._actions=Object.create(null),i._mutations=Object.create(null),i._wrappedGetters=Object.create(null),i._modulesNamespaceMap=Object.create(null);var t=i.state;ju(i,t,[],i._modules.root,!0),Yd(i,t,e)}function Yd(i,e,t){var n=i._state,r=i._scope;i.getters={},i._makeLocalGettersCache=Object.create(null);var s=i._wrappedGetters,a={},o={},l=ab(!0);l.run(function(){go(s,function(c,u){a[u]=PM(c,i),o[u]=Un(function(){return a[u]()}),Object.defineProperty(i.getters,u,{get:function(){return o[u].value},enumerable:!0})})}),i._state=zu({data:e}),i._scope=l,i.strict&&NM(i),n&&t&&i._withCommit(function(){n.data=null}),r&&r.stop()}function ju(i,e,t,n,r){var s=!t.length,a=i._modules.getNamespace(t);if(n.namespaced&&(i._modulesNamespaceMap[a],i._modulesNamespaceMap[a]=n),!s&&!r){var o=qd(e,t.slice(0,-1)),l=t[t.length-1];i._withCommit(function(){o[l]=n.state})}var c=n.context=LM(i,a,t);n.forEachMutation(function(u,f){var h=a+f;DM(i,h,u,c)}),n.forEachAction(function(u,f){var h=u.root?f:a+f,d=u.handler||u;IM(i,h,d,c)}),n.forEachGetter(function(u,f){var h=a+f;OM(i,h,u,c)}),n.forEachChild(function(u,f){ju(i,e,t.concat(f),u,r)})}function LM(i,e,t){var n=e==="",r={dispatch:n?i.dispatch:function(s,a,o){var l=lu(s,a,o),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=e+f),i.dispatch(f,c)},commit:n?i.commit:function(s,a,o){var l=lu(s,a,o),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=e+f),i.commit(f,c,u)}};return Object.defineProperties(r,{getters:{get:n?function(){return i.getters}:function(){return av(i,e)}},state:{get:function(){return qd(i.state,t)}}}),r}function av(i,e){if(!i._makeLocalGettersCache[e]){var t={},n=e.length;Object.keys(i.getters).forEach(function(r){if(r.slice(0,n)===e){var s=r.slice(n);Object.defineProperty(t,s,{get:function(){return i.getters[r]},enumerable:!0})}}),i._makeLocalGettersCache[e]=t}return i._makeLocalGettersCache[e]}function DM(i,e,t,n){var r=i._mutations[e]||(i._mutations[e]=[]);r.push(function(a){t.call(i,n.state,a)})}function IM(i,e,t,n){var r=i._actions[e]||(i._actions[e]=[]);r.push(function(a){var o=t.call(i,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:i.getters,rootState:i.state},a);return RM(o)||(o=Promise.resolve(o)),i._devtoolHook?o.catch(function(l){throw i._devtoolHook.emit("vuex:error",l),l}):o})}function OM(i,e,t,n){i._wrappedGetters[e]||(i._wrappedGetters[e]=function(s){return t(n.state,n.getters,s.state,s.getters)})}function NM(i){Hs(function(){return i._state.data},function(){},{deep:!0,flush:"sync"})}function qd(i,e){return e.reduce(function(t,n){return t[n]},i)}function lu(i,e,t){return CM(i)&&i.type&&(t=e,e=i,i=i.type),{type:i,payload:e,options:t}}var UM="vuex bindings",bm="vuex:mutations",yf="vuex:actions",ua="vuex",FM=0;function kM(i,e){wM({id:"org.vuejs.vuex",app:i,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[UM]},function(t){t.addTimelineLayer({id:bm,label:"Vuex Mutations",color:Sm}),t.addTimelineLayer({id:yf,label:"Vuex Actions",color:Sm}),t.addInspector({id:ua,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(n){if(n.app===i&&n.inspectorId===ua)if(n.filter){var r=[];uv(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[cv(e._modules.root,"")]}),t.on.getInspectorState(function(n){if(n.app===i&&n.inspectorId===ua){var r=n.nodeId;av(e,r),n.state=VM(GM(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),t.on.editInspectorState(function(n){if(n.app===i&&n.inspectorId===ua){var r=n.nodeId,s=n.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){n.set(e._state.data,s,n.state.value)})}}),e.subscribe(function(n,r){var s={};n.payload&&(s.payload=n.payload),s.state=r,t.notifyComponentUpdate(),t.sendInspectorTree(ua),t.sendInspectorState(ua),t.addTimelineEvent({layerId:bm,event:{time:Date.now(),title:n.type,data:s}})}),e.subscribeAction({before:function(n,r){var s={};n.payload&&(s.payload=n.payload),n._id=FM++,n._time=Date.now(),s.state=r,t.addTimelineEvent({layerId:yf,event:{time:n._time,title:n.type,groupId:n._id,subtitle:"start",data:s}})},after:function(n,r){var s={},a=Date.now()-n._time;s.duration={_custom:{type:"duration",display:a+"ms",tooltip:"Action duration",value:a}},n.payload&&(s.payload=n.payload),s.state=r,t.addTimelineEvent({layerId:yf,event:{time:Date.now(),title:n.type,groupId:n._id,subtitle:"end",data:s}})}})})}var Sm=8702998,BM=6710886,zM=16777215,ov={label:"namespaced",textColor:zM,backgroundColor:BM};function lv(i){return i&&i!=="root"?i.split("/").slice(-2,-1)[0]:"Root"}function cv(i,e){return{id:e||"root",label:lv(e),tags:i.namespaced?[ov]:[],children:Object.keys(i._children).map(function(t){return cv(i._children[t],e+t+"/")})}}function uv(i,e,t,n){n.includes(t)&&i.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:e.namespaced?[ov]:[]}),Object.keys(e._children).forEach(function(r){uv(i,e._children[r],t,n+r+"/")})}function VM(i,e,t){e=t==="root"?e:e[t];var n=Object.keys(e),r={state:Object.keys(i.state).map(function(a){return{key:a,editable:!0,value:i.state[a]}})};if(n.length){var s=HM(e);r.getters=Object.keys(s).map(function(a){return{key:a.endsWith("/")?lv(a):a,editable:!1,value:Uh(function(){return s[a]})}})}return r}function HM(i){var e={};return Object.keys(i).forEach(function(t){var n=t.split("/");if(n.length>1){var r=e,s=n.pop();n.forEach(function(a){r[a]||(r[a]={_custom:{value:{},display:a,tooltip:"Module",abstract:!0}}),r=r[a]._custom.value}),r[s]=Uh(function(){return i[t]})}else e[t]=Uh(function(){return i[t]})}),e}function GM(i,e){var t=e.split("/").filter(function(n){return n});return t.reduce(function(n,r,s){var a=n[r];if(!a)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===t.length-1?a:a._children},e==="root"?i:i.root._children)}function Uh(i){try{return i()}catch(e){return e}}var Pn=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=(typeof n=="function"?n():n)||{}},fv={namespaced:{configurable:!0}};fv.namespaced.get=function(){return!!this._rawModule.namespaced};Pn.prototype.addChild=function(e,t){this._children[e]=t};Pn.prototype.removeChild=function(e){delete this._children[e]};Pn.prototype.getChild=function(e){return this._children[e]};Pn.prototype.hasChild=function(e){return e in this._children};Pn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Pn.prototype.forEachChild=function(e){go(this._children,e)};Pn.prototype.forEachGetter=function(e){this._rawModule.getters&&go(this._rawModule.getters,e)};Pn.prototype.forEachAction=function(e){this._rawModule.actions&&go(this._rawModule.actions,e)};Pn.prototype.forEachMutation=function(e){this._rawModule.mutations&&go(this._rawModule.mutations,e)};Object.defineProperties(Pn.prototype,fv);var oa=function(e){this.register([],e,!1)};oa.prototype.get=function(e){return e.reduce(function(t,n){return t.getChild(n)},this.root)};oa.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(n,r){return t=t.getChild(r),n+(t.namespaced?r+"/":"")},"")};oa.prototype.update=function(e){hv([],this.root,e)};oa.prototype.register=function(e,t,n){var r=this;n===void 0&&(n=!0);var s=new Pn(t,n);if(e.length===0)this.root=s;else{var a=this.get(e.slice(0,-1));a.addChild(e[e.length-1],s)}t.modules&&go(t.modules,function(o,l){r.register(e.concat(l),o,n)})};oa.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)};oa.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return t?t.hasChild(n):!1};function hv(i,e,t){if(e.update(t),t.modules)for(var n in t.modules){if(!e.getChild(n))return;hv(i.concat(n),e.getChild(n),t.modules[n])}}function WM(i){return new ji(i)}var ji=function(e){var t=this;e===void 0&&(e={});var n=e.plugins;n===void 0&&(n=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new oa(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var a=this,o=this,l=o.dispatch,c=o.commit;this.dispatch=function(h,d){return l.call(a,h,d)},this.commit=function(h,d,_){return c.call(a,h,d,_)},this.strict=r;var u=this._modules.root.state;ju(this,u,[],this._modules.root),Yd(this,u),n.forEach(function(f){return f(t)})},jd={state:{configurable:!0}};ji.prototype.install=function(e,t){e.provide(t||nv,this),e.config.globalProperties.$store=this;var n=this._devtools!==void 0?this._devtools:!1;n&&kM(e,this)};jd.state.get=function(){return this._state.data};jd.state.set=function(i){};ji.prototype.commit=function(e,t,n){var r=this,s=lu(e,t,n),a=s.type,o=s.payload,l={type:a,payload:o},c=this._mutations[a];c&&(this._withCommit(function(){c.forEach(function(f){f(o)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};ji.prototype.dispatch=function(e,t){var n=this,r=lu(e,t),s=r.type,a=r.payload,o={type:s,payload:a},l=this._actions[s];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(o,n.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(a)})):l[0](a);return new Promise(function(u,f){c.then(function(h){try{n._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(o,n.state)})}catch{}u(h)},function(h){try{n._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(o,n.state,h)})}catch{}f(h)})})}};ji.prototype.subscribe=function(e,t){return rv(e,this._subscribers,t)};ji.prototype.subscribeAction=function(e,t){var n=typeof e=="function"?{before:e}:e;return rv(n,this._actionSubscribers,t)};ji.prototype.watch=function(e,t,n){var r=this;return Hs(function(){return e(r.state,r.getters)},t,Object.assign({},n))};ji.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};ji.prototype.registerModule=function(e,t,n){n===void 0&&(n={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),ju(this,this.state,e,this._modules.get(e),n.preserveState),Yd(this,this.state)};ji.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var n=qd(t.state,e.slice(0,-1));delete n[e[e.length-1]]}),sv(this)};ji.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ji.prototype.hotUpdate=function(e){this._modules.update(e),sv(this,!0)};ji.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(ji.prototype,jd);function ar(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function dv(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},no={duration:.5,overwrite:!1,delay:0},$d,xi,Ot,mn=1e8,St=1/mn,Fh=Math.PI*2,XM=Fh/4,YM=0,pv=Math.sqrt,qM=Math.cos,jM=Math.sin,oi=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},gr=function(e){return typeof e=="number"},Kd=function(e){return typeof e>"u"},Zn=function(e){return typeof e=="object"},Bi=function(e){return e!==!1},Zd=function(){return typeof window<"u"},ql=function(e){return Bt(e)||oi(e)},mv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yi=Array.isArray,kh=/(?:-?\.?\d|\.)+/gi,gv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Na=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_v=/[+-]=-?[.\d]+/,vv=/[^,'"\[\]\s]+/gi,$M=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Dn,Bh,Jd,an={},cu={},xv,yv=function(e){return(cu=Zs(e,an))&&qi},Qd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pl=function(e,t){return!t&&console.warn(e)},bv=function(e,t){return e&&(an[e]=t)&&cu&&(cu[e]=t)||an},ml=function(){return 0},KM={suppressEvents:!0,isStart:!0,kill:!1},Gc={suppressEvents:!0,kill:!1},ZM={suppressEvents:!0},ep={},qr=[],zh={},Sv,Qi={},Sf={},Mm=30,Wc=[],tp="",ip=function(e){var t=e[0],n,r;if(Zn(t)||Bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Wc.length;r--&&!Wc[r].targetTest(t););n=Wc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Yv(e[r],n)))||e.splice(r,1);return e},Ws=function(e){return e._gsap||ip(gn(e))[0]._gsap},Mv=function(e,t,n){return(n=e[t])&&Bt(n)?e[t]():Kd(n)&&e.getAttribute&&e.getAttribute(t)||n},zi=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},ri=function(e){return Math.round(e*1e7)/1e7||0},Xa=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},JM=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},uu=function(){var e=qr.length,t=qr.slice(0),n,r;for(zh={},qr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ev=function(e,t,n,r){qr.length&&!xi&&uu(),e.render(t,n,r||xi&&t<0&&(e._initted||e._startAt)),qr.length&&!xi&&uu()},Tv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vv).length<2?t:oi(e)?e.trim():e},wv=function(e){return e},xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},QM=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Zs=function(e,t){for(var n in t)e[n]=t[n];return e},Em=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},fu=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ko=function(e){var t=e.parent||Ut,n=e.keyframes?QM(yi(e.keyframes)):xn;if(Bi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},e1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Av=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},$u=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},is=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},t1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vh=function(e,t,n,r){return e._startAt&&(xi?e._startAt.revert(Gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},i1=function i(e){return!e||e._ts&&i(e.parent)},Tm=function(e){return e._repeat?ro(e._tTime,e=e.duration()+e._rDelay)*e:0},ro=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},hu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ku=function(e){return e._end=ri(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},Zu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ri(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ku(e),n._dirty||Xs(n,e)),e},Cv=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=hu(e.rawTime(),t),(!t._dur||Ll(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),Xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},Bn=function(e,t,n,r){return t.parent&&is(t),t._start=ri((gr(n)?n:n||e!==Ut?un(e,n,t):e._time)+t._delay),t._end=ri(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Av(e,t,"_first","_last",e._sort?"_start":0),Hh(t)||(e._recent=t),r||Cv(e,t),e._ts<0&&Zu(e,e._tTime),e},Rv=function(e,t){return(an.ScrollTrigger||Qd("scrollTrigger",t))&&an.ScrollTrigger.create(t,e)},Pv=function(e,t,n,r,s){if(rp(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!xi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sv!==en.frame)return qr.push(e),e._lazy=[s,r],1},n1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Hh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},r1=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&n1(e)&&!(!e._initted&&Hh(e))||(e._ts<0||e._dp._ts<0)&&!Hh(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Ll(0,e._tDur,t),u=ro(l,o),e._yoyo&&u&1&&(a=1-a),u!==ro(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||xi||r||e._zTime===St||!t&&e._zTime){if(!e._initted&&Pv(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Vh(e,t,n,!0),e._onUpdate&&!n&&rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&is(e,1),!n&&!xi&&(rn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},s1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},so=function(e,t,n,r){var s=e._repeat,a=ri(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ri(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Zu(e,e._tTime=e._tDur*o),e.parent&&Ku(e),n||Xs(e.parent,e),e},wm=function(e){return e instanceof Ri?Xs(e):so(e,e._dur)},a1={_start:0,endTime:ml,totalDuration:ml},un=function i(e,t,n){var r=e.labels,s=e._recent||a1,a=e.duration()>=mn?s.endTime(!1):e._dur,o,l,c;return oi(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(yi(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Zo=function(e,t,n){var r=gr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Bi(l.vars.inherit)&&l.parent;a.immediateRender=Bi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new qt(t[0],a,t[s+1])},us=function(e,t){return e||e===0?t(e):t},Ll=function(e,t,n){return n<e?e:n>t?t:n},vi=function(e,t){return!oi(e)||!(t=$M.exec(e))?"":t[1]},o1=function(e,t,n){return us(n,function(r){return Ll(e,t,r)})},Gh=[].slice,Lv=function(e,t){return e&&Zn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zn(e[0]))&&!e.nodeType&&e!==Dn},l1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return oi(r)&&!t||Lv(r,1)?(s=n).push.apply(s,gn(r)):n.push(r)})||n},gn=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):oi(e)&&!n&&(Bh||!ao())?Gh.call((t||Jd).querySelectorAll(e),0):yi(e)?l1(e,n):Lv(e)?Gh.call(e,0):e?[e]:[]},Wh=function(e){return e=gn(e)[0]||pl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gn(t,n.querySelectorAll?n:n===e?pl("Invalid scope")||Jd.createElement("div"):e)}},Dv=function(e){return e.sort(function(){return .5-Math.random()})},Iv=function(e){if(Bt(e))return e;var t=Zn(e)?e:{each:e},n=Ys(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return oi(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,_){var g=(_||t).length,m=a[g],p,S,x,E,R,w,T,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,mn])[1],!M){for(T=-mn;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=a[g]=[],p=l?Math.min(M,g)*u-.5:r%M,S=M===mn?0:l?g*f/M-.5:r/M|0,T=0,L=mn,w=0;w<g;w++)x=w%M-p,E=S-(w/M|0),m[w]=R=c?Math.abs(c==="y"?E:x):pv(x*x+E*E),R>T&&(T=R),R<L&&(L=R);r==="random"&&Dv(m),m.max=T-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=vi(t.amount||t.each)||0,n=n&&g<0?Gv(n):n}return g=(m[h]-m.min)/m.max||0,ri(m.b+(n?n(g):g)*m.v)+m.u}},Xh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=ri(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(gr(n)?0:vi(n))}},Ov=function(e,t){var n=yi(e),r,s;return!n&&Zn(e)&&(r=n=e.radius||mn,e.values?(e=gn(e.values),(s=!gr(e[0]))&&(r*=r)):e=Xh(e.increment)),us(t,n?Bt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=mn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||gr(a)?u:u+vi(a)}:Xh(e))},Nv=function(e,t,n,r){return us(yi(e)?!t:n===!0?!!(n=0):!r,function(){return yi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},c1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},u1=function(e,t){return function(n){return e(parseFloat(n))+(t||vi(n))}},f1=function(e,t,n){return Fv(e,t,0,1,n)},Uv=function(e,t,n){return us(n,function(r){return e[~~t(r)]})},h1=function i(e,t,n){var r=t-e;return yi(e)?Uv(e,i(0,e.length),t):us(n,function(s){return(r+(s-e)%r)%r+e})},d1=function i(e,t,n){var r=t-e,s=r*2;return yi(e)?Uv(e,i(0,e.length-1),t):us(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},gl=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?vv:kh),n+=e.substr(t,r-t)+Nv(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Fv=function(e,t,n,r,s){var a=t-e,o=r-n;return us(s,function(l){return n+((l-e)/a*o||0)})},p1=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=oi(e),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(yi(e)&&!yi(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else r||(e=Zs(yi(e)?[]:{},e));if(!u){for(l in t)np.call(o,e,l,"get",t[l]);s=function(_){return op(_,o)||(a?e.p:e)}}}return us(n,s)},Am=function(e,t,n){var r=e.labels,s=mn,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},rn=function(e,t,n){var r=e.vars,s=r[t],a=Ot,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&qr.length&&uu(),o&&(Ot=o),u=l?s.apply(c,l):s.call(c),Ot=a,u},No=function(e){return is(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xi),e.progress()<1&&rn(e,"onInterrupt"),e},Ua,kv=[],Bv=function(e){if(e)if(e=!e.name&&e.default||e,Zd()||e.headless){var t=e.name,n=Bt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ml,render:op,add:np,kill:P1,modifier:R1,rawVars:0},a={targetTest:0,get:0,getSetter:ap,aliases:{},register:0};if(ao(),e!==r){if(Qi[t])return;xn(r,xn(fu(e,s),a)),Zs(r.prototype,Zs(s,fu(e,a))),Qi[r.prop=t]=r,e.targetTest&&(Wc.push(r),ep[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bv(t,r),e.register&&e.register(qi,r,Vi)}else kv.push(e)},xt=255,Uo={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Mf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},zv=function(e,t,n){var r=e?gr(e)?[e>>16,e>>8&xt,e&xt]:0:Uo.black,s,a,o,l,c,u,f,h,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Uo[e])r=Uo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&xt,r&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(kh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Mf(l+1/3,s,a),r[1]=Mf(l,s,a),r[2]=Mf(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(gv),n&&r.length<4&&(r[3]=1),r}else r=e.match(kh)||Uo.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/xt,a=r[1]/xt,o=r[2]/xt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Vv=function(e){var t=[],n=[],r=-1;return e.split(jr).forEach(function(s){var a=s.match(Na)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Cm=function(e,t,n){var r="",s=(e+r).match(jr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=zv(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Vv(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(jr,"1").split(Na),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(jr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},jr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Uo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),m1=/hsl[a]?\(/,Hv=function(e){var t=e.join(" "),n;if(jr.lastIndex=0,jr.test(t))return n=m1.test(t),e[1]=Cm(e[1],n),e[0]=Cm(e[0],n,Vv(e[1])),!0},_l,en=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,_=function g(m){var p=i()-r,S=m===!0,x,E,R,w;if((p>e||p<0)&&(n+=p-t),r+=p,R=r-n,x=R-a,(x>0||S)&&(w=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,a+=x+(x>=s?4:s-x),E=1),S||(l=c(g)),E)for(d=0;d<o.length;d++)o[d](R,h,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){xv&&(!Bh&&Zd()&&(Dn=Bh=window,Jd=Dn.document||{},an.gsap=qi,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(qi.version),yv(cu||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),kv.forEach(Bv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},_l=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),_l=0,c=ml},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,S){var x=p?function(E,R,w,T){m(E,R,w,T),f.remove(x)}:m;return f.remove(m),o[S?"unshift":"push"](x),ao(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),ao=function(){return!_l&&en.wake()},lt={},g1=/^[\d.\-M][\d.\-,\s]/,_1=/["']/g,v1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(_1,"").trim():+c,r=l.substr(o+1).trim();return t},x1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},y1=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[v1(t[1])]:x1(e).split(",").map(Tv)):lt._CE&&g1.test(e)?lt._CE("",e):n},Gv=function(e){return function(t){return 1-e(1-t)}},Wv=function i(e,t){for(var n=e._first,r;n;)n instanceof Ri?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Ys=function(e,t){return e&&(Bt(e)?e:lt[e]||y1(e))||t},la=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return zi(e,function(o){lt[o]=an[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},Xv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ef=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Fh*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*jM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Xv(o);return s=Fh/s,l.config=function(c,u){return i(e,c,u)},l},Tf=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Xv(n);return r.config=function(s){return i(e,s)},r};zi("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;la(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;la("Elastic",Ef("in"),Ef("out"),Ef());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};la("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);la("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});la("Circ",function(i){return-(pv(1-i*i)-1)});la("Sine",function(i){return i===1?1:-qM(i*XM)+1});la("Back",Tf("in"),Tf("out"),Tf());lt.SteppedEase=lt.steps=an.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-St;return function(o){return((r*Ll(0,a,o)|0)+s)*n}}};no.ease=lt["quad.out"];zi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return tp+=i+","+i+"Params,"});var Yv=function(e,t){this.id=YM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Mv,this.set=t?t.getSetter:ap},vl=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,so(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),_l||en.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,so(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ao(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Zu(this,n),!s._dp||s.parent||Cv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===St||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ev(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Tm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Tm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ro(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?hu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(Ll(-Math.abs(this._delay),this._tDur,s),r!==!1),Ku(this),t1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Bn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hu(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ZM);var r=xi;return xi=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xi=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,wm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(un(this,n),Bi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Bi(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-St)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Bt(n)?n:wv,o=function(){var c=r.then;r.then=null,Bt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){No(this)},i}();xn(vl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Ri=function(i){dv(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bi(n.sortChildren),Ut&&Bn(n.parent||Ut,ar(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Rv(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Zo(0,arguments,this),this},t.from=function(r,s,a){return Zo(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Zo(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,un(this,a),1),this},t.call=function(r,s,a){return Bn(this,qt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new qt(r,a,un(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Ko(a).immediateRender=Bi(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Ko(o).immediateRender=Bi(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ri(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,_,g,m,p,S,x,E,R,w,T;if(this!==Ut&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,E=this._start,x=this._ts,p=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=ri(u%m),u===l?(g=this._repeat,h=c):(g=~~(u/m),g&&g===u/m&&(h=c,g--),h>c&&(h=c)),R=ro(this._tTime,m),!o&&this._tTime&&R!==g&&this._tTime-R*m-this._dur<=0&&(R=g),w&&g&1&&(h=c-h,T=1),g!==R&&!this._lock){var L=w&&R&1,M=L===(w&&g&1);if(g<R&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(T?0:ri(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Wv(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=s1(this,ri(o),ri(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!g&&(rn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-St);break}}d=_}else{d=this._last;for(var b=r<0?r:h;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||xi&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=b?-St:St);break}}d=_}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-St)._zTime=h>=o?1:-1,this._ts))return this._start=E,Ku(this),this.render(r,s,a);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&is(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(rn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(gr(s)||(s=un(this,s,r)),!(r instanceof vl)){if(yi(r))return r.forEach(function(o){return a.add(o,s)}),this;if(oi(r))return this.addLabel(r,s);if(Bt(r))r=qt.delayedCall(0,r);else return this}return this!==r?Bn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-mn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof qt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return oi(r)?this.removeLabel(r):Bt(r)?this.killTweensOf(r):($u(this,r),r===this._recent&&(this._recent=this._last),Xs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ri(en.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=un(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=qt.delayedCall(0,s||ml,a);return o.data="isPause",this._hasPause=1,Bn(this,o,un(this,r))},t.removePause=function(r){var s=this._first;for(r=un(this,r);s;)s._start===r&&s.data==="isPause"&&is(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)kr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=gn(r),l=this._first,c=gr(s),u;l;)l instanceof qt?JM(l._targets,o)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=un(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=qt.to(a,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||St,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&so(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,xn({startAt:{time:un(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Am(this,un(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Am(this,un(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Xs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Xs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=mn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Bn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;so(a,a===Ut&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Ut._ts&&(Ev(Ut,hu(r,Ut)),Sv=en.frame),en.frame>=Mm){Mm+=sn.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&sn.autoSleep&&en._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||en.sleep()}}},e}(vl);xn(Ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var b1=function(e,t,n,r,s,a,o){var l=new Vi(this._pt,e,t,0,1,Jv,null,s),c=0,u=0,f,h,d,_,g,m,p,S;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=gl(r)),a&&(S=[n,r],a(S,e,t),n=S[0],r=S[1]),h=n.match(bf)||[];f=bf.exec(r);)_=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Xa(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=bf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(_v.test(r)||p)&&(l.e=0),this._pt=l,l},np=function(e,t,n,r,s,a,o,l,c,u){Bt(r)&&(r=r(s||0,e,a));var f=e[t],h=n!=="get"?n:Bt(f)?c?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Bt(f)?c?w1:Kv:sp,_;if(oi(r)&&(~r.indexOf("random(")&&(r=gl(r)),r.charAt(1)==="="&&(_=Xa(h,r)+(vi(h)||0),(_||_===0)&&(r=_))),!u||h!==r||Yh)return!isNaN(h*r)&&r!==""?(_=new Vi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?C1:Zv,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Qd(t,r),b1.call(this,e,t,h,r,d,l||sn.stringFilter,c))},S1=function(e,t,n,r,s){if(Bt(e)&&(e=Jo(e,s,t,n,r)),!Zn(e)||e.style&&e.nodeType||yi(e)||mv(e))return oi(e)?Jo(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Jo(e[o],s,t,n,r);return a},qv=function(e,t,n,r,s,a){var o,l,c,u;if(Qi[e]&&(o=new Qi[e]).init(s,o.rawVars?t[e]:S1(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Vi(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ua))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},kr,Yh,rp=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!$d,E=e.timeline,R,w,T,L,M,b,k,B,N,$,Z,te,Y;if(E&&(!h||!s)&&(s="none"),e._ease=Ys(s,no.ease),e._yEase=f?Gv(Ys(f===!0?s:f,no.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!E&&!!r.runBackwards,!E||h&&!r.stagger){if(B=m[0]?Ws(m[0]).harness:0,te=B&&r[B.prop],R=fu(r,ep),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Gc:KM),g._lazy=0),a){if(is(e._startAt=qt.set(m,xn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Bi(l),startAt:null,delay:0,onUpdate:c&&function(){return rn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xi||!o&&!d)&&e._startAt.revert(Gc),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),T=xn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Bi(l),immediateRender:o,stagger:0,parent:p},R),te&&(T[B.prop]=te),is(e._startAt=qt.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xi?e._startAt.revert(Gc):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Bi(l)||l&&!_,w=0;w<m.length;w++){if(M=m[w],k=M._gsap||ip(m)[w]._gsap,e._ptLookup[w]=$={},zh[k.id]&&qr.length&&uu(),Z=S===m?w:S.indexOf(M),B&&(N=new B).init(M,te||R,e,Z,S)!==!1&&(e._pt=L=new Vi(e._pt,M,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(H){$[H]=L}),N.priority&&(b=1)),!B||te)for(T in R)Qi[T]&&(N=qv(T,R,e,Z,M,S))?N.priority&&(b=1):$[T]=L=np.call(e,M,T,"get",R[T],Z,S,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),x&&e._pt&&(kr=e,Ut.killTweensOf(M,$,e.globalTime(t)),Y=!e.parent,kr=0),e._pt&&l&&(zh[k.id]=1)}b&&Qv(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&E.render(mn,!0,!0)},M1=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Yh=1,e.vars[t]="+=0",rp(e,o),Yh=0,l?pl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Vt(n)+vi(f.e)),f.b&&(f.b=u.s+vi(f.b))},E1=function(e,t){var n=e[0]?Ws(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=Zs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},T1=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(yi(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Jo=function(e,t,n,r,s){return Bt(e)?e.call(t,n,r,s):oi(e)&&~e.indexOf("random(")?gl(e):e},jv=tp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$v={};zi(jv+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return $v[i]=1});var qt=function(i){dv(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Ko(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=r.parent||Ut,x=(yi(n)||mv(n)?gr(n[0]):"length"in r)?[n]:gn(n),E,R,w,T,L,M,b,k;if(o._targets=x.length?ip(x):pl("GSAP target "+n+" not found. https://gsap.com",!sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||ql(c)||ql(u)){if(r=o.vars,E=o.timeline=new Ri({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:x}),E.kill(),E.parent=E._dp=ar(o),E._start=0,h||ql(c)||ql(u)){if(T=x.length,b=h&&Iv(h),Zn(h))for(L in h)~jv.indexOf(L)&&(k||(k={}),k[L]=h[L]);for(R=0;R<T;R++)w=fu(r,$v),w.stagger=0,p&&(w.yoyoEase=p),k&&Zs(w,k),M=x[R],w.duration=+Jo(c,ar(o),R,M,x),w.delay=(+Jo(u,ar(o),R,M,x)||0)-o._delay,!h&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),E.to(M,w,b?b(R,M,x):0),E._ease=lt.none;E.duration()?c=u=0:o.timeline=0}else if(_){Ko(xn(E.vars.defaults,{ease:"none"})),E._ease=Ys(_.ease||r.ease||"none");var B=0,N,$,Z;if(yi(_))_.forEach(function(te){return E.to(x,te,">")}),E.duration();else{w={};for(L in _)L==="ease"||L==="easeEach"||T1(L,_[L],w,_.easeEach);for(L in w)for(N=w[L].sort(function(te,Y){return te.t-Y.t}),B=0,R=0;R<N.length;R++)$=N[R],Z={ease:$.e,duration:($.t-(R?N[R-1].t:0))/100*c},Z[L]=$.v,E.to(x,Z,B),B+=Z.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return d===!0&&!$d&&(kr=ar(o),Ut.killTweensOf(x),kr=0),Bn(S,ar(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!_&&o._start===ri(S._time)&&Bi(f)&&i1(ar(o))&&S.data!=="nested")&&(o._tTime=-St,o.render(Math.max(0,-u)||0)),m&&Rv(ar(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-St&&!u?l:r<St?0:r,h,d,_,g,m,p,S,x,E;if(!c)r1(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(h=ri(f%g),f===l?(_=this._repeat,h=c):(_=~~(f/g),_&&_===ri(f/g)&&(h=c,_--),h>c&&(h=c)),p=this._yoyo&&_&1,p&&(E=this._yEase,h=c-h),m=ro(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(x&&this._yEase&&Wv(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(ri(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Pv(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(E||this._ease)(h/c),this._from&&(this.ratio=S=1-S),h&&!o&&!s&&!_&&(rn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Vh(this,r,s,a),rn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Vh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&is(this,1),!s&&!(u&&!o)&&(f||o||p)&&(rn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){_l||en.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||rp(this,c),u=this._ease(c/this._dur),M1(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Zu(this,0),this.parent||Av(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?No(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,kr&&kr.vars.overwrite!==!0)._first||No(this),this.parent&&a!==this.timeline.totalDuration()&&so(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?gn(r):o,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&e1(o,l))return s==="all"&&(this._pt=0),No(this);for(f=this._op=this._op||[],s!=="all"&&(oi(s)&&(g={},zi(s,function(S){return g[S]=1}),s=g),s=E1(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&$u(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&No(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Zo(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Zo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Ut.killTweensOf(r,s,a)},e}(vl);xn(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zi("staggerTo,staggerFrom,staggerFromTo",function(i){qt[i]=function(){var e=new Ri,t=Gh.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var sp=function(e,t,n){return e[t]=n},Kv=function(e,t,n){return e[t](n)},w1=function(e,t,n,r){return e[t](r.fp,n)},A1=function(e,t,n){return e.setAttribute(t,n)},ap=function(e,t){return Bt(e[t])?Kv:Kd(e[t])&&e.setAttribute?A1:sp},Zv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},C1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jv=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},op=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},R1=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},P1=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?$u(this,t,"_pt"):t.dep||(n=1),t=r;return!n},L1=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Qv=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Vi=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Zv,this.d=l||this,this.set=c||sp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=L1,this.m=n,this.mt=s,this.tween=r},i}();zi(tp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return ep[i]=1});an.TweenMax=an.TweenLite=qt;an.TimelineLite=an.TimelineMax=Ri;Ut=new Ri({sortChildren:!1,defaults:no,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=Hv;var qs=[],Xc={},D1=[],Rm=0,I1=0,wf=function(e){return(Xc[e]||D1).map(function(t){return t()})},qh=function(){var e=Date.now(),t=[];e-Rm>2&&(wf("matchMediaInit"),qs.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Dn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),wf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Rm=e,wf("matchMedia"))},ex=function(){function i(t,n){this.selector=n&&Wh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=I1++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Bt(n)&&(s=r,r=n,n=Bt);var a=this,o=function(){var c=Ot,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wh(s)),Ot=a,f=r.apply(a,arguments),Bt(f)&&a._r.push(f),Ot=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Bt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Ot;Ot=null,n(this),Ot=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ri?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=qs.length;a--;)qs[a].id===this.id&&qs.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),O1=function(){function i(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Zn(n)||(n={matches:n});var a=new ex(0,s||this.scope),o=a.conditions={},l,c,u;Ot&&!a.selector&&(a.selector=Ot.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Dn.matchMedia(n[c]),l&&(qs.indexOf(a)<0&&qs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(qh):l.addEventListener("change",qh)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),du={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Bv(r)})},timeline:function(e){return new Ri(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,r){oi(e)&&(e=gn(e)[0]);var s=Ws(e||{}).get,a=n?wv:Tv;return n==="native"&&(n=""),e&&(t?a((Qi[t]&&Qi[t].get||s)(e,t,n,r)):function(o,l,c){return a((Qi[o]&&Qi[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=gn(e),e.length>1){var r=e.map(function(u){return qi.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=Qi[t],o=Ws(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Ua._pt=0,f.init(e,n?u+n:u,Ua,0,[e]),f.render(1,f),Ua._pt&&op(1,Ua)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=qi.to(e,Zs((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ys(e.ease,no.ease)),Em(no,e||{})},config:function(e){return Em(sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Qi[o]&&!an[o]&&pl(t+" effect requires "+o+" plugin.")}),Sf[t]=function(o,l,c){return n(gn(o),xn(l||{},s),c)},a&&(Ri.prototype[t]=function(o,l,c){return this.add(Sf[t](o,Zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Ys(t)},parseEase:function(e,t){return arguments.length?Ys(e,t):lt},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ri(e),r,s;for(n.smoothChildTiming=Bi(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,r=Ut._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&Bn(n,r,r._start-r._delay),r=s;return Bn(Ut,n,0),n},context:function(e,t){return e?new ex(e,t):Ot},matchMedia:function(e){return new O1(e)},matchMediaRefresh:function(){return qs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||qh()},addEventListener:function(e,t){var n=Xc[e]||(Xc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:h1,wrapYoyo:d1,distribute:Iv,random:Nv,snap:Ov,normalize:f1,getUnit:vi,clamp:o1,splitColor:zv,toArray:gn,selector:Wh,mapRange:Fv,pipe:c1,unitize:u1,interpolate:p1,shuffle:Dv},install:yv,effects:Sf,ticker:en,updateRoot:Ri.updateRoot,plugins:Qi,globalTimeline:Ut,core:{PropTween:Vi,globals:bv,Tween:qt,Timeline:Ri,Animation:vl,getCache:Ws,_removeLinkedListItem:$u,reverting:function(){return xi},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return $d=e}}};zi("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return du[i]=qt[i]});en.add(Ri.updateRoot);Ua=du.to({},{duration:0});var N1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},U1=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=N1(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Af=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(oi(s)&&(l={},zi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}U1(o,s)}}}},qi=du.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)xi?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Af("roundProps",Xh),Af("modifiers"),Af("snap",Ov))||du;qt.version=Ri.version=qi.version="3.12.5";xv=1;Zd()&&ao();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pm,Br,Ya,lp,Os,Lm,cp,F1=function(){return typeof window<"u"},_r={},Es=180/Math.PI,qa=Math.PI/180,fa=Math.atan2,Dm=1e8,up=/([A-Z])/g,k1=/(left|right|width|margin|padding|x)/i,B1=/[\s,\(]\S/,Vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},z1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},V1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},H1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ix=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},G1=function(e,t,n){return e.style[t]=n},W1=function(e,t,n){return e.style.setProperty(t,n)},X1=function(e,t,n){return e._gsap[t]=n},Y1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},q1=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},j1=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ft="transform",Hi=Ft+"Origin",$1=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in _r&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=or(r,o)}):this.tfm[e]=a.x?a[e]:or(r,e),e===Hi&&(this.tfm.zOrigin=a.zOrigin);else return Vn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Ft)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Hi,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},nx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},K1=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(up,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=cp(),(!s||!s.isStart)&&!n[Ft]&&(nx(n),r.zOrigin&&n[Hi]&&(n[Hi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},rx=function(e,t){var n={target:e,props:[],revert:K1,save:$1};return e._gsap||qi.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},sx,$h=function(e,t){var n=Br.createElementNS?Br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Br.createElement(e);return n&&n.style?n:Br.createElement(e)},Yn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(up,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,oo(t)||t,1)||""},Im="O,Moz,ms,Ms,Webkit".split(","),oo=function(e,t,n){var r=t||Os,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Im[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Im[a]:"")+e},Kh=function(){F1()&&window.document&&(Pm=window,Br=Pm.document,Ya=Br.documentElement,Os=$h("div")||{style:{}},$h("div"),Ft=oo(Ft),Hi=Ft+"Origin",Os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sx=!!oo("perspective"),cp=qi.core.reverting,lp=1)},Cf=function i(e){var t=$h("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Ya.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Ya.removeChild(t),this.style.cssText=s,a},Om=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ax=function(e){var t;try{t=e.getBBox()}catch{t=Cf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Cf||(t=Cf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Om(e,["x","cx","x1"])||0,y:+Om(e,["y","cy","y1"])||0,width:0,height:0}:t},ox=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ax(e))},Js=function(e,t){if(t){var n=e.style,r;t in _r&&t!==Hi&&(t=Ft),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(up,"-$1").toLowerCase())):n.removeAttribute(t)}},zr=function(e,t,n,r,s,a){var o=new Vi(e._pt,t,n,0,1,a?ix:tx);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Nm={deg:1,rad:1,turn:1},Z1={grid:1,flex:1},ns=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Os.style,l=k1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",_,g,m,p;if(r===a||!s||Nm[r]||Nm[a])return s;if(a!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&ox(e),(d||a==="%")&&(_r[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Vt(d?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(h?a:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Br||!g.appendChild)&&(g=Br.body),m=g._gsap,m&&d&&m.width&&l&&m.time===en.time&&!m.uncache)return Vt(s/m.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+r,_=e[u],S?e.style[t]=S:Js(e,t)}else(d||a==="%")&&!Z1[Yn(g,"display")]&&(o.position=Yn(e,"position")),g===e&&(o.position="static"),g.appendChild(Os),_=Os[u],g.removeChild(Os),o.position="absolute";return l&&d&&(m=Ws(g),m.time=en.time,m.width=g[u]),Vt(h?_*s/f:_&&s?f/_*s:0)},or=function(e,t,n,r){var s;return lp||Kh(),t in Vn&&t!=="transform"&&(t=Vn[t],~t.indexOf(",")&&(t=t.split(",")[0])),_r[t]&&t!=="transform"?(s=yl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:mu(Yn(e,Hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=pu[t]&&pu[t](e,t,n)||Yn(e,t)||Mv(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ns(e,t,s,n)+n:s},J1=function(e,t,n,r){if(!n||n==="none"){var s=oo(t,e,1),a=s&&Yn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Yn(e,"borderTopColor"))}var o=new Vi(this._pt,e.style,t,0,1,Jv),l=0,c=0,u,f,h,d,_,g,m,p,S,x,E,R;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=Yn(e,t)||r,g?e.style[t]=g:Js(e,t)),u=[n,r],Hv(u),n=u[0],r=u[1],h=n.match(Na)||[],R=r.match(Na)||[],R.length){for(;f=Na.exec(r);)m=f[0],S=r.substring(l,f.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,E=g.substr((d+"").length),m.charAt(1)==="="&&(m=Xa(d,m)+E),p=parseFloat(m),x=m.substr((p+"").length),l=Na.lastIndex-x.length,x||(x=x||sn.units[t]||E,l===r.length&&(r+=x,o.e+=x)),E!==x&&(d=ns(e,t,g,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?ix:tx;return _v.test(r)&&(o.e=0),this._pt=o,o},Um={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Q1=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Um[n]||n,t[1]=Um[r]||r,t.join(" ")},eE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],_r[o]&&(l=1,o=o==="transformOrigin"?Hi:Ft),Js(n,o);l&&(Js(n,Ft),a&&(a.svg&&n.removeAttribute("transform"),yl(n,1),a.uncache=1,nx(r)))}},pu={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Vi(e._pt,t,n,0,0,eE);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},xl=[1,0,0,1,0,0],lx={},cx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fm=function(e){var t=Yn(e,Ft);return cx(t)?xl:t.substr(7).match(gv).map(Vt)},fp=function(e,t){var n=e._gsap||Ws(e),r=e.style,s=Fm(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?xl:s):(s===xl&&!e.offsetParent&&e!==Ya&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ya.appendChild(e)),s=Fm(e),l?r.display=l:Js(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ya.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zh=function(e,t,n,r,s,a){var o=e._gsap,l=s||fp(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],x=t.split(" "),E=parseFloat(x[0])||0,R=parseFloat(x[1])||0,w,T,L,M;n?l!==xl&&(T=d*m-_*g)&&(L=E*(m/T)+R*(-g/T)+(g*S-m*p)/T,M=E*(-_/T)+R*(d/T)-(d*S-_*p)/T,E=L,R=M):(w=ax(e),E=w.x+(~x[0].indexOf("%")?E/100*w.width:E),R=w.y+(~(x[1]||x[0]).indexOf("%")?R/100*w.height:R)),r||r!==!1&&o.smooth?(p=E-c,S=R-u,o.xOffset=f+(p*d+S*g)-p,o.yOffset=h+(p*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=R,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Hi]="0px 0px",a&&(zr(a,o,"xOrigin",c,E),zr(a,o,"yOrigin",u,R),zr(a,o,"xOffset",f,o.xOffset),zr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+R)},yl=function(e,t){var n=e._gsap||new Yv(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Yn(e,Hi)||"0",u,f,h,d,_,g,m,p,S,x,E,R,w,T,L,M,b,k,B,N,$,Z,te,Y,H,se,P,he,we,$e,ee,le;return u=f=h=g=m=p=S=x=E=0,d=_=1,n.svg=!!(e.getCTM&&ox(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),T=fp(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Zh(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,w=n.yOrigin||0,T!==xl&&(k=T[0],B=T[1],N=T[2],$=T[3],u=Z=T[4],f=te=T[5],T.length===6?(d=Math.sqrt(k*k+B*B),_=Math.sqrt($*$+N*N),g=k||B?fa(B,k)*Es:0,S=N||$?fa(N,$)*Es+g:0,S&&(_*=Math.abs(Math.cos(S*qa))),n.svg&&(u-=R-(R*k+w*N),f-=w-(R*B+w*$))):(le=T[6],$e=T[7],P=T[8],he=T[9],we=T[10],ee=T[11],u=T[12],f=T[13],h=T[14],L=fa(le,we),m=L*Es,L&&(M=Math.cos(-L),b=Math.sin(-L),Y=Z*M+P*b,H=te*M+he*b,se=le*M+we*b,P=Z*-b+P*M,he=te*-b+he*M,we=le*-b+we*M,ee=$e*-b+ee*M,Z=Y,te=H,le=se),L=fa(-N,we),p=L*Es,L&&(M=Math.cos(-L),b=Math.sin(-L),Y=k*M-P*b,H=B*M-he*b,se=N*M-we*b,ee=$*b+ee*M,k=Y,B=H,N=se),L=fa(B,k),g=L*Es,L&&(M=Math.cos(L),b=Math.sin(L),Y=k*M+B*b,H=Z*M+te*b,B=B*M-k*b,te=te*M-Z*b,k=Y,Z=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Vt(Math.sqrt(k*k+B*B+N*N)),_=Vt(Math.sqrt(te*te+le*le)),L=fa(Z,te),S=Math.abs(L)>2e-4?L*Es:0,E=ee?1/(ee<0?-ee:ee):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cx(Yn(e,Ft)),Y&&e.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Vt(d),n.scaleY=Vt(_),n.rotation=Vt(g)+o,n.rotationX=Vt(m)+o,n.rotationY=Vt(p)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Hi]=mu(c)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?iE:sx?ux:tE,n.uncache=0,n},mu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Rf=function(e,t,n){var r=vi(t);return Vt(parseFloat(t)+parseFloat(ns(e,"x",n+"px",r)))+r},tE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ux(e,t)},gs="0deg",Mo="0px",_s=") ",ux=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,x=n.zOrigin,E="",R=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==gs||u!==gs)){var w=parseFloat(u)*qa,T=Math.sin(w),L=Math.cos(w),M;w=parseFloat(f)*qa,M=Math.cos(w),a=Rf(S,a,T*M*-x),o=Rf(S,o,-Math.sin(w)*-x),l=Rf(S,l,L*M*-x+x)}m!==Mo&&(E+="perspective("+m+_s),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(R||a!==Mo||o!==Mo||l!==Mo)&&(E+=l!==Mo||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+_s),c!==gs&&(E+="rotate("+c+_s),u!==gs&&(E+="rotateY("+u+_s),f!==gs&&(E+="rotateX("+f+_s),(h!==gs||d!==gs)&&(E+="skew("+h+", "+d+_s),(_!==1||g!==1)&&(E+="scale("+_+", "+g+_s),S.style[Ft]=E||"translate(0, 0)"},iE=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,x=parseFloat(a),E=parseFloat(o),R,w,T,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qa,c*=qa,R=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=qa,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,w*=M)),R=Vt(R),w=Vt(w),T=Vt(T),L=Vt(L)):(R=f,L=h,w=T=0),(x&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(x=ns(d,"x",a,"px"),E=ns(d,"y",o,"px")),(_||g||m||p)&&(x=Vt(x+_-(_*R+g*T)+m),E=Vt(E+g-(_*w+g*L)+p)),(r||s)&&(M=d.getBBox(),x=Vt(x+r/100*M.width),E=Vt(E+s/100*M.height)),M="matrix("+R+","+w+","+T+","+L+","+x+","+E+")",d.setAttribute("transform",M),S&&(d.style[Ft]=M)},nE=function(e,t,n,r,s){var a=360,o=oi(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Es:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Dm)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Dm)%a-~~(c/a)*a)),e._pt=h=new Vi(e._pt,t,n,r,c,z1),h.e=u,h.u="deg",e._props.push(n),h},km=function(e,t){for(var n in t)e[n]=t[n];return e},rE=function(e,t,n){var r=km({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ft]=t,o=yl(n,1),Js(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],a[Ft]=t,o=yl(n,1),a[Ft]=c);for(l in _r)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=vi(c),_=vi(u),f=d!==_?ns(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Vi(e._pt,o,l,f,h-f,jh),e._pt.u=_||0,e._props.push(l));km(o,r)};zi("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});pu[e>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return or(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var fx={name:"css",register:Kh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,_,g,m,p,S,x,E,R,w,T,L;lp||Kh(),this.styles=this.styles||rx(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Qi[g]&&qv(g,t,n,r,e,s)))){if(d=typeof u,_=pu[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=gl(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",jr.lastIndex=0,jr.test(c)||(m=vi(c),p=vi(u)),p?m!==p&&(c=ns(e,g,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),L.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],oi(c)&&~c.indexOf("random(")&&(c=gl(c)),vi(c+"")||c==="auto"||(c+=sn.units[g]||vi(or(e,g))||""),(c+"").charAt(1)==="="&&(c=or(e,g))):c=or(e,g),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),g in Vn&&(g==="autoAlpha"&&(h===1&&or(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,o.visibility),zr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Vn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in _r,x){if(this.styles.save(g),E||(R=e._gsap,R.renderTransform&&!t.parseTransform||yl(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,E=this._pt=new Vi(this._pt,o,Ft,0,1,R.renderTransform,R,0,-1),E.dep=1),g==="scale")this._pt=new Vi(this._pt,R,"scaleY",R.scaleY,(S?Xa(R.scaleY,S+f):f)-R.scaleY||0,jh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(Hi,0,o[Hi]),u=Q1(u),R.svg?Zh(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&zr(this,R,"zOrigin",R.zOrigin,p),zr(this,o,g,mu(c),mu(u)));continue}else if(g==="svgOrigin"){Zh(e,u,1,w,0,this);continue}else if(g in lx){nE(this,R,g,h,S?Xa(h,S+u):u);continue}else if(g==="smoothOrigin"){zr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){rE(this,u,e);continue}}else g in o||(g=oo(g)||g);if(x||(f||f===0)&&(h||h===0)&&!B1.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),p=vi(u)||(g in sn.units?sn.units[g]:m),m!==p&&(h=ns(e,g,c,p)),this._pt=new Vi(this._pt,x?R:o,g,h,(S?Xa(h,S+f):f)-h,!x&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?H1:jh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=V1);else if(g in o)J1.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,r,s);else if(g!=="parseTransform"){Qd(g,u);continue}x||(g in o?L.push(g,0,o[g]):L.push(g,1,c||e[g])),a.push(g)}}T&&Qv(this)},render:function(e,t){if(t.tween._time||!cp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:or,aliases:Vn,getSetter:function(e,t,n){var r=Vn[t];return r&&r.indexOf(",")<0&&(t=r),t in _r&&t!==Hi&&(e._gsap.x||or(e,"x"))?n&&Lm===n?t==="scale"?Y1:X1:(Lm=n||{})&&(t==="scale"?q1:j1):e.style&&!Kd(e.style[t])?G1:~t.indexOf("-")?W1:ap(e,t)},core:{_removeProperty:Js,_getMatrix:fp}};qi.utils.checkPrefix=oo;qi.core.getStyleSaver=rx;(function(i,e,t,n){var r=zi(i+","+e+","+t,function(s){_r[s]=1});zi(e,function(s){sn.units[s]="deg",lx[s]=1}),Vn[r[13]]=i+","+e,zi(n,function(s){var a=s.split(":");Vn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){sn.units[i]="px"});qi.registerPlugin(fx);var Ts=qi.registerPlugin(fx)||qi;Ts.core.Tween;function Bm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function sE(i,e,t){return e&&Bm(i.prototype,e),t&&Bm(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var li,Yc,tn,Vr,Hr,ja,hx,ws,Qo,dx,hr,Mn,px,mx=function(){return li||typeof window<"u"&&(li=window.gsap)&&li.registerPlugin&&li},gx=1,Fa=[],rt=[],qn=[],el=Date.now,Jh=function(e,t){return t},aE=function(){var e=Qo.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,rt),r.push.apply(r,qn),rt=n,qn=r,Jh=function(a,o){return t[a](o)}},$r=function(e,t){return~qn.indexOf(e)&&qn[qn.indexOf(e)+1][t]},tl=function(e){return!!~dx.indexOf(e)},Ei=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Si=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},jl="scrollLeft",$l="scrollTop",Qh=function(){return hr&&hr.isPressed||rt.cache++},gu=function(e,t){var n=function r(s){if(s||s===0){gx&&(tn.history.scrollRestoration="manual");var a=hr&&hr.isPressed;s=r.v=Math.round(s)||(hr&&hr.iOS?1:0),e(s),r.cacheID=rt.cache,a&&Jh("ss",s)}else(t||rt.cache!==r.cacheID||Jh("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Pi={s:jl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gu(function(i){return arguments.length?tn.scrollTo(i,Kt.sc()):tn.pageXOffset||Vr[jl]||Hr[jl]||ja[jl]||0})},Kt={s:$l,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pi,sc:gu(function(i){return arguments.length?tn.scrollTo(Pi.sc(),i):tn.pageYOffset||Vr[$l]||Hr[$l]||ja[$l]||0})},Ui=function(e,t){return(t&&t._ctx&&t._ctx.selector||li.utils.toArray)(e)[0]||(typeof e=="string"&&li.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},rs=function(e,t){var n=t.s,r=t.sc;tl(e)&&(e=Vr.scrollingElement||Hr);var s=rt.indexOf(e),a=r===Kt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Ei(e,"scroll",Qh);var o=rt[s+a],l=o||(rt[s+a]=gu($r(e,n),!0)||(tl(e)?r:gu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=li.getProperty(e,"scrollBehavior")==="smooth"),l},ed=function(e,t,n){var r=e,s=e,a=el(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=el();g||m-a>l?(s=r,r=_,o=a,a=m):n?r+=_:r=s+(_-s)/(m-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},h=function(_){var g=o,m=s,p=el();return(_||_===0)&&_!==r&&u(_),a===o||p-o>c?0:(r+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Eo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},_x=function(){Qo=li.core.globals().ScrollTrigger,Qo&&Qo.core&&aE()},vx=function(e){return li=e||mx(),!Yc&&li&&typeof document<"u"&&document.body&&(tn=window,Vr=document,Hr=Vr.documentElement,ja=Vr.body,dx=[tn,Vr,Hr,ja],li.utils.clamp,px=li.core.context||function(){},ws="onpointerenter"in ja?"pointer":"mouse",hx=Ht.isTouch=tn.matchMedia&&tn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in tn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mn=Ht.eventTypes=("ontouchstart"in Hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gx=0},500),_x(),Yc=1),Yc};Pi.op=Kt;rt.cache=0;var Ht=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Yc||vx(li)||console.warn("Please gsap.registerPlugin(Observer)"),Qo||_x();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,x=n.onPress,E=n.onRelease,R=n.onRight,w=n.onLeft,T=n.onUp,L=n.onDown,M=n.onChangeX,b=n.onChangeY,k=n.onChange,B=n.onToggleX,N=n.onToggleY,$=n.onHover,Z=n.onHoverEnd,te=n.onMove,Y=n.ignoreCheck,H=n.isNormalizer,se=n.onGestureStart,P=n.onGestureEnd,he=n.onWheel,we=n.onEnable,$e=n.onDisable,ee=n.onClick,le=n.scrollSpeed,me=n.capture,ue=n.allowClicks,Pe=n.lockAxis,Ie=n.onLockAxis;this.target=o=Ui(o)||Hr,this.vars=n,d&&(d=li.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,le=le||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(tn.getComputedStyle(ja).lineHeight)||22);var Ve,W,ke,C,I,G,Q,v=this,y=0,O=0,U=n.passive||!u,z=rs(o,Pi),F=rs(o,Kt),re=z(),J=F(),ne=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Mn[0]==="pointerdown",ce=tl(o),ie=o.ownerDocument||Vr,oe=[0,0,0],ge=[0,0,0],de=0,xe=function(){return de=el()},Ae=function(Le,tt){return(v.event=Le)&&d&&~d.indexOf(Le.target)||tt&&ne&&Le.pointerType!=="touch"||Y&&Y(Le,tt)},Ke=function(){v._vx.reset(),v._vy.reset(),W.pause(),f&&f(v)},qe=function(){var Le=v.deltaX=zm(oe),tt=v.deltaY=zm(ge),_e=Math.abs(Le)>=r,Xe=Math.abs(tt)>=r;k&&(_e||Xe)&&k(v,Le,tt,oe,ge),_e&&(R&&v.deltaX>0&&R(v),w&&v.deltaX<0&&w(v),M&&M(v),B&&v.deltaX<0!=y<0&&B(v),y=v.deltaX,oe[0]=oe[1]=oe[2]=0),Xe&&(L&&v.deltaY>0&&L(v),T&&v.deltaY<0&&T(v),b&&b(v),N&&v.deltaY<0!=O<0&&N(v),O=v.deltaY,ge[0]=ge[1]=ge[2]=0),(C||ke)&&(te&&te(v),ke&&(S(v),ke=!1),C=!1),G&&!(G=!1)&&Ie&&Ie(v),I&&(he(v),I=!1),Ve=0},Ze=function(Le,tt,_e){oe[_e]+=Le,ge[_e]+=tt,v._vx.update(Le),v._vy.update(tt),c?Ve||(Ve=requestAnimationFrame(qe)):qe()},We=function(Le,tt){Pe&&!Q&&(v.axis=Q=Math.abs(Le)>Math.abs(tt)?"x":"y",G=!0),Q!=="y"&&(oe[2]+=Le,v._vx.update(Le,!0)),Q!=="x"&&(ge[2]+=tt,v._vy.update(tt,!0)),c?Ve||(Ve=requestAnimationFrame(qe)):qe()},ye=function(Le){if(!Ae(Le,1)){Le=Eo(Le,u);var tt=Le.clientX,_e=Le.clientY,Xe=tt-v.x,Fe=_e-v.y,Ge=v.isDragging;v.x=tt,v.y=_e,(Ge||Math.abs(v.startX-tt)>=s||Math.abs(v.startY-_e)>=s)&&(S&&(ke=!0),Ge||(v.isDragging=!0),We(Xe,Fe),Ge||m&&m(v))}},D=v.onPress=function(Ue){Ae(Ue,1)||Ue&&Ue.button||(v.axis=Q=null,W.pause(),v.isPressed=!0,Ue=Eo(Ue),y=O=0,v.startX=v.x=Ue.clientX,v.startY=v.y=Ue.clientY,v._vx.reset(),v._vy.reset(),Ei(H?o:ie,Mn[1],ye,U,!0),v.deltaX=v.deltaY=0,x&&x(v))},ae=v.onRelease=function(Ue){if(!Ae(Ue,1)){Si(H?o:ie,Mn[1],ye,!0);var Le=!isNaN(v.y-v.startY),tt=v.isDragging,_e=tt&&(Math.abs(v.x-v.startX)>3||Math.abs(v.y-v.startY)>3),Xe=Eo(Ue);!_e&&Le&&(v._vx.reset(),v._vy.reset(),u&&ue&&li.delayedCall(.08,function(){if(el()-de>300&&!Ue.defaultPrevented){if(Ue.target.click)Ue.target.click();else if(ie.createEvent){var Fe=ie.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,tn,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Ue.target.dispatchEvent(Fe)}}})),v.isDragging=v.isGesturing=v.isPressed=!1,f&&tt&&!H&&W.restart(!0),p&&tt&&p(v),E&&E(v,_e)}},pe=function(Le){return Le.touches&&Le.touches.length>1&&(v.isGesturing=!0)&&se(Le,v.isDragging)},Me=function(){return(v.isGesturing=!1)||P(v)},Ce=function(Le){if(!Ae(Le)){var tt=z(),_e=F();Ze((tt-re)*le,(_e-J)*le,1),re=tt,J=_e,f&&W.restart(!0)}},it=function(Le){if(!Ae(Le)){Le=Eo(Le,u),he&&(I=!0);var tt=(Le.deltaMode===1?l:Le.deltaMode===2?tn.innerHeight:1)*_;Ze(Le.deltaX*tt,Le.deltaY*tt,0),f&&!H&&W.restart(!0)}},ft=function(Le){if(!Ae(Le)){var tt=Le.clientX,_e=Le.clientY,Xe=tt-v.x,Fe=_e-v.y;v.x=tt,v.y=_e,C=!0,f&&W.restart(!0),(Xe||Fe)&&We(Xe,Fe)}},pt=function(Le){v.event=Le,$(v)},yt=function(Le){v.event=Le,Z(v)},ht=function(Le){return Ae(Le)||Eo(Le,u)&&ee(v)};W=v._dc=li.delayedCall(h||.25,Ke).pause(),v.deltaX=v.deltaY=0,v._vx=ed(0,50,!0),v._vy=ed(0,50,!0),v.scrollX=z,v.scrollY=F,v.isDragging=v.isGesturing=v.isPressed=!1,px(this),v.enable=function(Ue){return v.isEnabled||(Ei(ce?ie:o,"scroll",Qh),a.indexOf("scroll")>=0&&Ei(ce?ie:o,"scroll",Ce,U,me),a.indexOf("wheel")>=0&&Ei(o,"wheel",it,U,me),(a.indexOf("touch")>=0&&hx||a.indexOf("pointer")>=0)&&(Ei(o,Mn[0],D,U,me),Ei(ie,Mn[2],ae),Ei(ie,Mn[3],ae),ue&&Ei(o,"click",xe,!0,!0),ee&&Ei(o,"click",ht),se&&Ei(ie,"gesturestart",pe),P&&Ei(ie,"gestureend",Me),$&&Ei(o,ws+"enter",pt),Z&&Ei(o,ws+"leave",yt),te&&Ei(o,ws+"move",ft)),v.isEnabled=!0,Ue&&Ue.type&&D(Ue),we&&we(v)),v},v.disable=function(){v.isEnabled&&(Fa.filter(function(Ue){return Ue!==v&&tl(Ue.target)}).length||Si(ce?ie:o,"scroll",Qh),v.isPressed&&(v._vx.reset(),v._vy.reset(),Si(H?o:ie,Mn[1],ye,!0)),Si(ce?ie:o,"scroll",Ce,me),Si(o,"wheel",it,me),Si(o,Mn[0],D,me),Si(ie,Mn[2],ae),Si(ie,Mn[3],ae),Si(o,"click",xe,!0),Si(o,"click",ht),Si(ie,"gesturestart",pe),Si(ie,"gestureend",Me),Si(o,ws+"enter",pt),Si(o,ws+"leave",yt),Si(o,ws+"move",ft),v.isEnabled=v.isPressed=v.isDragging=!1,$e&&$e(v))},v.kill=v.revert=function(){v.disable();var Ue=Fa.indexOf(v);Ue>=0&&Fa.splice(Ue,1),hr===v&&(hr=0)},Fa.push(v),H&&tl(o)&&(hr=v),v.enable(g)},sE(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Ht.version="3.12.5";Ht.create=function(i){return new Ht(i)};Ht.register=vx;Ht.getAll=function(){return Fa.slice()};Ht.getById=function(i){return Fa.filter(function(e){return e.vars.id===i})[0]};mx()&&li.registerPlugin(Ht);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,Ia,ot,Nt,Tn,wt,xx,_u,bl,il,Fo,Kl,pi,Ju,td,Ai,Vm,Hm,Oa,yx,Pf,bx,wi,id,Sx,Mx,Dr,nd,hp,$a,dp,vu,rd,Lf,Zl=1,mi=Date.now,Df=mi(),vn=0,ko=0,Gm=function(e,t,n){var r=Ji(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Wm=function(e,t){return t&&(!Ji(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},oE=function i(){return ko&&requestAnimationFrame(i)},Xm=function(){return Ju=1},Ym=function(){return Ju=0},In=function(e){return e},Bo=function(e){return Math.round(e*1e5)/1e5||0},Ex=function(){return typeof window<"u"},Tx=function(){return Ee||Ex()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Qs=function(e){return!!~xx.indexOf(e)},wx=function(e){return(e==="Height"?dp:ot["inner"+e])||Tn["client"+e]||wt["client"+e]},Ax=function(e){return $r(e,"getBoundingClientRect")||(Qs(e)?function(){return Zc.width=ot.innerWidth,Zc.height=dp,Zc}:function(){return cr(e)})},lE=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=$r(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?wx(s):e["client"+s])||0}},cE=function(e,t){return!t||~qn.indexOf(e)?Ax(e):function(){return Zc}},Hn=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=$r(e,n))?a()-Ax(e)()[s]:Qs(e)?(Tn[n]||wt[n])-wx(r):e[n]-e["offset"+r])},Jl=function(e,t){for(var n=0;n<Oa.length;n+=3)(!t||~t.indexOf(Oa[n+1]))&&e(Oa[n],Oa[n+1],Oa[n+2])},Ji=function(e){return typeof e=="string"},Li=function(e){return typeof e=="function"},zo=function(e){return typeof e=="number"},As=function(e){return typeof e=="object"},To=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},If=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ha=Math.abs,Cx="left",Rx="top",pp="right",mp="bottom",js="width",$s="height",nl="Right",rl="Left",sl="Top",al="Bottom",Yt="padding",fn="margin",lo="Width",gp="Height",$t="px",hn=function(e){return ot.getComputedStyle(e)},uE=function(e){var t=hn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cr=function(e,t){var n=t&&hn(e)[td]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},xu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Px=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},fE=function(e){return function(t){return Ee.utils.snap(Px(e),t)}},_p=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},hE=function(e){return function(t,n){return _p(Px(e))(t,n.direction)}},Ql=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},ni=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},ii=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ec=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},jm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},tc={toggleActions:"play",anticipatePin:0},yu={top:0,left:0,center:.5,bottom:1,right:1},qc=function(e,t){if(Ji(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in yu?yu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ic=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=Nt.createElement("div"),g=Qs(n)||$r(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?wt:n,S=e.indexOf("start")!==-1,x=S?c:u,E="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(E+=(r===Kt?pp:mp)+":"+(a+parseFloat(h))+"px;"),o&&(E+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=E,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],jc(_,0,r,S),_},jc=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+lo]=1,s["border"+o+lo]=0,s[n.p]=t+"px",Ee.set(e,s)},nt=[],sd={},Sl,$m=function(){return mi()-vn>34&&(Sl||(Sl=requestAnimationFrame(mr)))},da=function(){(!wi||!wi.isPressed||wi.startX>wt.clientWidth)&&(rt.cache++,wi?Sl||(Sl=requestAnimationFrame(mr)):mr(),vn||ta("scrollStart"),vn=mi())},Of=function(){Mx=ot.innerWidth,Sx=ot.innerHeight},Vo=function(){rt.cache++,!pi&&!bx&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!id||Mx!==ot.innerWidth||Math.abs(ot.innerHeight-Sx)>ot.innerHeight*.25)&&_u.restart(!0)},ea={},dE=[],Lx=function i(){return ii(at,"scrollEnd",i)||Ns(!0)},ta=function(e){return ea[e]&&ea[e].map(function(t){return t()})||dE},Zi=[],Dx=function(e){for(var t=0;t<Zi.length;t+=5)(!e||Zi[t+4]&&Zi[t+4].query===e)&&(Zi[t].style.cssText=Zi[t+1],Zi[t].getBBox&&Zi[t].setAttribute("transform",Zi[t+2]||""),Zi[t+3].uncache=1)},vp=function(e,t){var n;for(Ai=0;Ai<nt.length;Ai++)n=nt[Ai],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));vu=!0,t&&Dx(t),t||ta("revert")},Ix=function(e,t){rt.cache++,(t||!Ci)&&rt.forEach(function(n){return Li(n)&&n.cacheID++&&(n.rec=0)}),Ji(e)&&(ot.history.scrollRestoration=hp=e)},Ci,Ks=0,Km,pE=function(){if(Km!==Ks){var e=Km=Ks;requestAnimationFrame(function(){return e===Ks&&Ns(!0)})}},Ox=function(){wt.appendChild($a),dp=!wi&&$a.offsetHeight||ot.innerHeight,wt.removeChild($a)},Zm=function(e){return bl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ns=function(e,t){if(vn&&!e&&!vu){ni(at,"scrollEnd",Lx);return}Ox(),Ci=at.isRefreshing=!0,rt.forEach(function(r){return Li(r)&&++r.cacheID&&(r.rec=r())});var n=ta("refreshInit");yx&&at.sort(),t||vp(),rt.forEach(function(r){Li(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),vu=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),rd=1,Zm(!0),nt.forEach(function(r){var s=Hn(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Zm(!1),rd=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Li(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Ix(hp,1),_u.pause(),Ks++,Ci=2,mr(2),nt.forEach(function(r){return Li(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Ci=at.isRefreshing=!1,ta("refresh")},ad=0,$c=1,ol,mr=function(e){if(e===2||!Ci&&!vu){at.isUpdating=!0,ol&&ol.update(0);var t=nt.length,n=mi(),r=n-Df>=50,s=t&&nt[0].scroll();if($c=ad>s?-1:1,Ci||(ad=s),r&&(vn&&!Ju&&n-vn>200&&(vn=0,ta("scrollEnd")),Fo=Df,Df=n),$c<0){for(Ai=t;Ai-- >0;)nt[Ai]&&nt[Ai].update(0,r);$c=1}else for(Ai=0;Ai<t;Ai++)nt[Ai]&&nt[Ai].update(0,r);at.isUpdating=!1}Sl=0},od=[Cx,Rx,mp,pp,fn+al,fn+nl,fn+sl,fn+rl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Kc=od.concat([js,$s,"boxSizing","max"+lo,"max"+gp,"position",fn,Yt,Yt+sl,Yt+nl,Yt+al,Yt+rl]),mE=function(e,t,n){Ka(n);var r=e._gsap;if(r.spacerIsNative)Ka(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=od.length,a=t.style,o=e.style,l;s--;)l=od[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[mp]=o[pp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[js]=xu(e,Pi)+$t,a[$s]=xu(e,Kt)+$t,a[Yt]=o[fn]=o[Rx]=o[Cx]="0",Ka(r),o[js]=o["max"+lo]=n[js],o[$s]=o["max"+gp]=n[$s],o[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},gE=/([A-Z])/g,Ka=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(gE,"-$1").toLowerCase())}},nc=function(e){for(var t=Kc.length,n=e.style,r=[],s=0;s<t;s++)r.push(Kc[s],n[Kc[s]]);return r.t=e,r},_E=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Zc={left:0,top:0},Jm=function(e,t,n,r,s,a,o,l,c,u,f,h,d,_){Li(e)&&(e=e(l)),Ji(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?qc("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),zo(e))d&&(e=Ee.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&jc(o,n,r,!0);else{Li(t)&&(t=t(l));var x=(e||"0").split(" "),E,R,w,T;S=Ui(t,l)||wt,E=cr(S)||{},(!E||!E.left&&!E.top)&&hn(S).display==="none"&&(T=S.style.display,S.style.display="block",E=cr(S),T?S.style.display=T:S.style.removeProperty("display")),R=qc(x[0],E[r.d]),w=qc(x[1]||"0",n),e=E[r.p]-c[r.p]-u+R+s-w,o&&jc(o,w,r,n-w<20||o._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var L=e+n,M=a._isStart;m="scroll"+r.d2,jc(a,L,r,M&&L>20||!M&&(f?Math.max(wt[m],Tn[m]):a.parentNode[m])<=L+1),f&&(c=cr(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+$t))}return d&&S&&(m=cr(S),d.seek(h),p=cr(S),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},vE=/(webkit|moz|length|cssText|inset)/i,Qm=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===wt){e._stOrig=s.cssText,o=hn(e);for(a in o)!+a&&!vE.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Nx=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=a,a}},rc=function(e,t,n){var r={};r[t.p]="+="+n,Ee.set(e,r)},eg=function(e,t){var n=rs(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,_={};c=c||n();var g=Nx(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&mr()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Ee.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ni(e,"wheel",n.wheelHandler),at.isTouch&&ni(e,"touchmove",n.wheelHandler),s},at=function(){function i(t,n){Ia||i.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),nd(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ko){this.update=this.refresh=this.kill=In;return}n=qm(Ji(n)||zo(n)||n.nodeType?{trigger:n}:n,tc);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,x=s.once,E=s.snap,R=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,L=s.fastScrollEnd,M=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pi:Kt,k=!f&&f!==0,B=Ui(n.scroller||ot),N=Ee.core.getCache(B),$=Qs(B),Z=("pinType"in n?n.pinType:$r(B,"pinType")||$&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=k&&n.toggleActions.split(" "),H="markers"in n?n.markers:tc.markers,se=$?0:parseFloat(hn(B)["border"+b.p2+lo])||0,P=this,he=n.onRefreshInit&&function(){return n.onRefreshInit(P)},we=lE(B,$,b),$e=cE(B,$),ee=0,le=0,me=0,ue=rs(B,b),Pe,Ie,Ve,W,ke,C,I,G,Q,v,y,O,U,z,F,re,J,ne,ce,ie,oe,ge,de,xe,Ae,Ke,qe,Ze,We,ye,D,ae,pe,Me,Ce,it,ft,pt,yt;if(P._startClamp=P._endClamp=!1,P._dir=b,m*=45,P.scroller=B,P.scroll=T?T.time.bind(T):ue,W=ue(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(yx=1,n.refreshPriority===-9999&&(ol=P)),N.tweenScroll=N.tweenScroll||{top:eg(B,Kt),left:eg(B,Pi)},P.tweenTo=Pe=N.tweenScroll[b.p],P.scrubDuration=function(_e){pe=zo(_e)&&_e,pe?ae?ae.duration(_e):ae=Ee.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pe,paused:!0,onComplete:function(){return p&&p(P)}}):(ae&&ae.progress(1).kill(),ae=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(f),ye=0,l||(l=r.vars.id)),E&&((!As(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in wt.style&&Ee.set($?[wt,Tn]:B,{scrollBehavior:"auto"}),rt.forEach(function(_e){return Li(_e)&&_e.target===($?Nt.scrollingElement||Tn:B)&&(_e.smooth=!1)}),Ve=Li(E.snapTo)?E.snapTo:E.snapTo==="labels"?fE(r):E.snapTo==="labelsDirectional"?hE(r):E.directional!==!1?function(_e,Xe){return _p(E.snapTo)(_e,mi()-le<500?0:Xe.direction)}:Ee.utils.snap(E.snapTo),Me=E.duration||{min:.1,max:2},Me=As(Me)?il(Me.min,Me.max):il(Me,Me),Ce=Ee.delayedCall(E.delay||pe/2||.1,function(){var _e=ue(),Xe=mi()-le<500,Fe=Pe.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!Fe&&!Ju&&ee!==_e){var Ge=(_e-C)/z,zt=r&&!k?r.totalProgress():Ge,Je=Xe?0:(zt-D)/(mi()-Fo)*1e3||0,Pt=Ee.utils.clamp(-Ge,1-Ge,ha(Je/2)*Je/.185),jt=Ge+(E.inertia===!1?0:Pt),Lt,bt,gt=E,A=gt.onStart,V=gt.onInterrupt,q=gt.onComplete;if(Lt=Ve(jt,P),zo(Lt)||(Lt=jt),bt=Math.round(C+Lt*z),_e<=I&&_e>=C&&bt!==_e){if(Fe&&!Fe._initted&&Fe.data<=ha(bt-_e))return;E.inertia===!1&&(Pt=Lt-Ge),Pe(bt,{duration:Me(ha(Math.max(ha(jt-zt),ha(Lt-zt))*.185/Je/.05||0)),ease:E.ease||"power3",data:ha(bt-_e),onInterrupt:function(){return Ce.restart(!0)&&V&&V(P)},onComplete:function(){P.update(),ee=ue(),r&&(ae?ae.resetTo("totalProgress",Lt,r._tTime/r._tDur):r.progress(Lt)),ye=D=r&&!k?r.totalProgress():P.progress,S&&S(P),q&&q(P)}},_e,Pt*z,bt-_e-Pt*z),A&&A(P,Pe.tween)}}else P.isActive&&ee!==_e&&Ce.restart(!0)}).pause()),l&&(sd[l]=P),h=P.trigger=Ui(h||d!==!0&&d),yt=h&&h._gsap&&h._gsap.stRevert,yt&&(yt=yt(P)),d=d===!0?h:Ui(d),Ji(o)&&(o={targets:h,className:o}),d&&(_===!1||_===fn||(_=!_&&d.parentNode&&d.parentNode.style&&hn(d.parentNode).display==="flex"?!1:Yt),P.pin=d,Ie=Ee.core.getCache(d),Ie.spacer?F=Ie.pinState:(w&&(w=Ui(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ie.spacerIsNative=!!w,w&&(Ie.spacerState=nc(w))),Ie.spacer=ne=w||Nt.createElement("div"),ne.classList.add("pin-spacer"),l&&ne.classList.add("pin-spacer-"+l),Ie.pinState=F=nc(d)),n.force3D!==!1&&Ee.set(d,{force3D:!0}),P.spacer=ne=Ie.spacer,We=hn(d),xe=We[_+b.os2],ie=Ee.getProperty(d),oe=Ee.quickSetter(d,b.a,$t),Nf(d,ne,We),J=nc(d)),H){O=As(H)?qm(H,jm):jm,v=ic("scroller-start",l,B,b,O,0),y=ic("scroller-end",l,B,b,O,0,v),ce=v["offset"+b.op.d2];var ht=Ui($r(B,"content")||B);G=this.markerStart=ic("start",l,ht,b,O,ce,0,T),Q=this.markerEnd=ic("end",l,ht,b,O,ce,0,T),T&&(pt=Ee.quickSetter([G,Q],b.a,$t)),!Z&&!(qn.length&&$r(B,"fixedMarkers")===!0)&&(uE($?wt:B),Ee.set([v,y],{force3D:!0}),Ke=Ee.quickSetter(v,b.a,$t),Ze=Ee.quickSetter(y,b.a,$t))}if(T){var Ue=T.vars.onUpdate,Le=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),Ue&&Ue.apply(T,Le||[])})}if(P.previous=function(){return nt[nt.indexOf(P)-1]},P.next=function(){return nt[nt.indexOf(P)+1]},P.revert=function(_e,Xe){if(!Xe)return P.kill(!0);var Fe=_e!==!1||!P.enabled,Ge=pi;Fe!==P.isReverted&&(Fe&&(it=Math.max(ue(),P.scroll.rec||0),me=P.progress,ft=r&&r.progress()),G&&[G,Q,v,y].forEach(function(zt){return zt.style.display=Fe?"none":"block"}),Fe&&(pi=P,P.update(Fe)),d&&(!R||!P.isActive)&&(Fe?mE(d,ne,F):Nf(d,ne,hn(d),Ae)),Fe||P.update(Fe),pi=Ge,P.isReverted=Fe)},P.refresh=function(_e,Xe,Fe,Ge){if(!((pi||!P.enabled)&&!Xe)){if(d&&_e&&vn){ni(i,"scrollEnd",Lx);return}!Ci&&he&&he(P),pi=P,Pe.tween&&!Fe&&(Pe.tween.kill(),Pe.tween=0),ae&&ae.pause(),g&&r&&r.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var zt=we(),Je=$e(),Pt=T?T.duration():Hn(B,b),jt=z<=.01,Lt=0,bt=Ge||0,gt=As(Fe)?Fe.end:n.end,A=n.endTrigger||h,V=As(Fe)?Fe.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),q=P.pinnedContainer=n.pinnedContainer&&Ui(n.pinnedContainer,P),K=h&&Math.max(0,nt.indexOf(P))||0,X=K,fe,be,Ne,ze,Oe,Re,Be,Et,ui,Dt,Wt,_t,Ye;for(H&&As(Fe)&&(_t=Ee.getProperty(v,b.p),Ye=Ee.getProperty(y,b.p));X--;)Re=nt[X],Re.end||Re.refresh(0,1)||(pi=P),Be=Re.pin,Be&&(Be===h||Be===d||Be===q)&&!Re.isReverted&&(Dt||(Dt=[]),Dt.unshift(Re),Re.revert(!0,!0)),Re!==nt[X]&&(K--,X--);for(Li(V)&&(V=V(P)),V=Gm(V,"start",P),C=Jm(V,h,zt,b,ue(),G,v,P,Je,se,Z,Pt,T,P._startClamp&&"_startClamp")||(d?-.001:0),Li(gt)&&(gt=gt(P)),Ji(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(Ji(V)?V.split(" ")[0]:"")+gt:(Lt=qc(gt.substr(2),zt),gt=Ji(V)?V:(T?Ee.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,C):C)+Lt,A=h)),gt=Gm(gt,"end",P),I=Math.max(C,Jm(gt||(A?"100% 0":Pt),A,zt,b,ue()+Lt,Q,y,P,Je,se,Z,Pt,T,P._endClamp&&"_endClamp"))||-.001,Lt=0,X=K;X--;)Re=nt[X],Be=Re.pin,Be&&Re.start-Re._pinPush<=C&&!T&&Re.end>0&&(fe=Re.end-(P._startClamp?Math.max(0,Re.start):Re.start),(Be===h&&Re.start-Re._pinPush<C||Be===q)&&isNaN(V)&&(Lt+=fe*(1-Re.progress)),Be===d&&(bt+=fe));if(C+=Lt,I+=Lt,P._startClamp&&(P._startClamp+=Lt),P._endClamp&&!Ci&&(P._endClamp=I||-.001,I=Math.min(I,Hn(B,b))),z=I-C||(C-=.01)&&.001,jt&&(me=Ee.utils.clamp(0,1,Ee.utils.normalize(C,I,it))),P._pinPush=bt,G&&Lt&&(fe={},fe[b.a]="+="+Lt,q&&(fe[b.p]="-="+ue()),Ee.set([G,Q],fe)),d&&!(rd&&P.end>=Hn(B,b)))fe=hn(d),ze=b===Kt,Ne=ue(),ge=parseFloat(ie(b.a))+bt,!Pt&&I>1&&(Wt=($?Nt.scrollingElement||Tn:B).style,Wt={style:Wt,value:Wt["overflow"+b.a.toUpperCase()]},$&&hn(wt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+b.a.toUpperCase()]="scroll")),Nf(d,ne,fe),J=nc(d),be=cr(d,!0),Et=Z&&rs(B,ze?Pi:Kt)(),_?(Ae=[_+b.os2,z+bt+$t],Ae.t=ne,X=_===Yt?xu(d,b)+z+bt:0,X&&(Ae.push(b.d,X+$t),ne.style.flexBasis!=="auto"&&(ne.style.flexBasis=X+$t)),Ka(Ae),q&&nt.forEach(function(Qn){Qn.pin===q&&Qn.vars.pinSpacing!==!1&&(Qn._subPinOffset=!0)}),Z&&ue(it)):(X=xu(d,b),X&&ne.style.flexBasis!=="auto"&&(ne.style.flexBasis=X+$t)),Z&&(Oe={top:be.top+(ze?Ne-C:Et)+$t,left:be.left+(ze?Et:Ne-C)+$t,boxSizing:"border-box",position:"fixed"},Oe[js]=Oe["max"+lo]=Math.ceil(be.width)+$t,Oe[$s]=Oe["max"+gp]=Math.ceil(be.height)+$t,Oe[fn]=Oe[fn+sl]=Oe[fn+nl]=Oe[fn+al]=Oe[fn+rl]="0",Oe[Yt]=fe[Yt],Oe[Yt+sl]=fe[Yt+sl],Oe[Yt+nl]=fe[Yt+nl],Oe[Yt+al]=fe[Yt+al],Oe[Yt+rl]=fe[Yt+rl],re=_E(F,Oe,R),Ci&&ue(0)),r?(ui=r._initted,Pf(1),r.render(r.duration(),!0,!0),de=ie(b.a)-ge+z+bt,qe=Math.abs(z-de)>1,Z&&qe&&re.splice(re.length-2,2),r.render(0,!0,!0),ui||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Pf(0)):de=z,Wt&&(Wt.value?Wt.style["overflow"+b.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+b.a));else if(h&&ue()&&!T)for(be=h.parentNode;be&&be!==wt;)be._pinOffset&&(C-=be._pinOffset,I-=be._pinOffset),be=be.parentNode;Dt&&Dt.forEach(function(Qn){return Qn.revert(!1,!0)}),P.start=C,P.end=I,W=ke=Ci?it:ue(),!T&&!Ci&&(W<it&&ue(it),P.scroll.rec=0),P.revert(!1,!0),le=mi(),Ce&&(ee=-1,Ce.restart(!0)),pi=0,r&&k&&(r._initted||ft)&&r.progress()!==ft&&r.progress(ft||0,!0).render(r.time(),!0,!0),(jt||me!==P.progress||T||g)&&(r&&!k&&r.totalProgress(T&&C<-.001&&!me?Ee.utils.normalize(C,I,0):me,!0),P.progress=jt||(W-C)/z===me?0:me),d&&_&&(ne._pinOffset=Math.round(P.progress*de)),ae&&ae.invalidate(),isNaN(_t)||(_t-=Ee.getProperty(v,b.p),Ye-=Ee.getProperty(y,b.p),rc(v,b,_t),rc(G,b,_t-(Ge||0)),rc(y,b,Ye),rc(Q,b,Ye-(Ge||0))),jt&&!Ci&&P.update(),u&&!Ci&&!U&&(U=!0,u(P),U=!1)}},P.getVelocity=function(){return(ue()-ke)/(mi()-Fo)*1e3||0},P.endAnimation=function(){To(P.callbackAnimation),r&&(ae?ae.progress(1):r.paused()?k||To(r,P.direction<0,1):To(r,r.reversed()))},P.labelToScroll=function(_e){return r&&r.labels&&(C||P.refresh()||C)+r.labels[_e]/r.duration()*z||0},P.getTrailing=function(_e){var Xe=nt.indexOf(P),Fe=P.direction>0?nt.slice(0,Xe).reverse():nt.slice(Xe+1);return(Ji(_e)?Fe.filter(function(Ge){return Ge.vars.preventOverlaps===_e}):Fe).filter(function(Ge){return P.direction>0?Ge.end<=C:Ge.start>=I})},P.update=function(_e,Xe,Fe){if(!(T&&!Fe&&!_e)){var Ge=Ci===!0?it:P.scroll(),zt=_e?0:(Ge-C)/z,Je=zt<0?0:zt>1?1:zt||0,Pt=P.progress,jt,Lt,bt,gt,A,V,q,K;if(Xe&&(ke=W,W=T?ue():Ge,E&&(D=ye,ye=r&&!k?r.totalProgress():Je)),m&&d&&!pi&&!Zl&&vn&&(!Je&&C<Ge+(Ge-ke)/(mi()-Fo)*m?Je=1e-4:Je===1&&I>Ge+(Ge-ke)/(mi()-Fo)*m&&(Je=.9999)),Je!==Pt&&P.enabled){if(jt=P.isActive=!!Je&&Je<1,Lt=!!Pt&&Pt<1,V=jt!==Lt,A=V||!!Je!=!!Pt,P.direction=Je>Pt?1:-1,P.progress=Je,A&&!pi&&(bt=Je&&!Pt?0:Je===1?1:Pt===1?2:3,k&&(gt=!V&&Y[bt+1]!=="none"&&Y[bt+1]||Y[bt],K=r&&(gt==="complete"||gt==="reset"||gt in r))),M&&(V||K)&&(K||f||!r)&&(Li(M)?M(P):P.getTrailing(M).forEach(function(Ne){return Ne.endAnimation()})),k||(ae&&!pi&&!Zl?(ae._dp._time-ae._start!==ae._time&&ae.render(ae._dp._time-ae._start),ae.resetTo?ae.resetTo("totalProgress",Je,r._tTime/r._tDur):(ae.vars.totalProgress=Je,ae.invalidate().restart())):r&&r.totalProgress(Je,!!(pi&&(le||_e)))),d){if(_e&&_&&(ne.style[_+b.os2]=xe),!Z)oe(Bo(ge+de*Je));else if(A){if(q=!_e&&Je>Pt&&I+1>Ge&&Ge+1>=Hn(B,b),R)if(!_e&&(jt||q)){var X=cr(d,!0),fe=Ge-C;Qm(d,wt,X.top+(b===Kt?fe:0)+$t,X.left+(b===Kt?0:fe)+$t)}else Qm(d,ne);Ka(jt||q?re:J),qe&&Je<1&&jt||oe(ge+(Je===1&&!q?de:0))}}E&&!Pe.tween&&!pi&&!Zl&&Ce.restart(!0),o&&(V||x&&Je&&(Je<1||!Lf))&&bl(o.targets).forEach(function(Ne){return Ne.classList[jt||x?"add":"remove"](o.className)}),a&&!k&&!_e&&a(P),A&&!pi?(k&&(K&&(gt==="complete"?r.pause().totalProgress(1):gt==="reset"?r.restart(!0).pause():gt==="restart"?r.restart(!0):r[gt]()),a&&a(P)),(V||!Lf)&&(c&&V&&If(P,c),te[bt]&&If(P,te[bt]),x&&(Je===1?P.kill(!1,1):te[bt]=0),V||(bt=Je===1?1:3,te[bt]&&If(P,te[bt]))),L&&!jt&&Math.abs(P.getVelocity())>(zo(L)?L:2500)&&(To(P.callbackAnimation),ae?ae.progress(1):To(r,gt==="reverse"?1:!Je,1))):k&&a&&!pi&&a(P)}if(Ze){var be=T?Ge/T.duration()*(T._caScrollDist||0):Ge;Ke(be+(v._isFlipped?1:0)),Ze(be)}pt&&pt(-Ge/T.duration()*(T._caScrollDist||0))}},P.enable=function(_e,Xe){P.enabled||(P.enabled=!0,ni(B,"resize",Vo),$||ni(B,"scroll",da),he&&ni(i,"refreshInit",he),_e!==!1&&(P.progress=me=0,W=ke=ee=ue()),Xe!==!1&&P.refresh())},P.getTween=function(_e){return _e&&Pe?Pe.tween:ae},P.setPositions=function(_e,Xe,Fe,Ge){if(T){var zt=T.scrollTrigger,Je=T.duration(),Pt=zt.end-zt.start;_e=zt.start+Pt*_e/Je,Xe=zt.start+Pt*Xe/Je}P.refresh(!1,!1,{start:Wm(_e,Fe&&!!P._startClamp),end:Wm(Xe,Fe&&!!P._endClamp)},Ge),P.update()},P.adjustPinSpacing=function(_e){if(Ae&&_e){var Xe=Ae.indexOf(b.d)+1;Ae[Xe]=parseFloat(Ae[Xe])+_e+$t,Ae[1]=parseFloat(Ae[1])+_e+$t,Ka(Ae)}},P.disable=function(_e,Xe){if(P.enabled&&(_e!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Xe||ae&&ae.pause(),it=0,Ie&&(Ie.uncache=1),he&&ii(i,"refreshInit",he),Ce&&(Ce.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!$)){for(var Fe=nt.length;Fe--;)if(nt[Fe].scroller===B&&nt[Fe]!==P)return;ii(B,"resize",Vo),$||ii(B,"scroll",da)}},P.kill=function(_e,Xe){P.disable(_e,Xe),ae&&!Xe&&ae.kill(),l&&delete sd[l];var Fe=nt.indexOf(P);Fe>=0&&nt.splice(Fe,1),Fe===Ai&&$c>0&&Ai--,Fe=0,nt.forEach(function(Ge){return Ge.scroller===P.scroller&&(Fe=1)}),Fe||Ci||(P.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),Xe||r.kill()),G&&[G,Q,v,y].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),ol===P&&(ol=0),d&&(Ie&&(Ie.uncache=1),Fe=0,nt.forEach(function(Ge){return Ge.pin===d&&Fe++}),Fe||(Ie.spacer=0)),n.onKill&&n.onKill(P)},nt.push(P),P.enable(!1,!1),yt&&yt(P),r&&r.add&&!z){var tt=P.update;P.update=function(){P.update=tt,C||I||P.refresh()},Ee.delayedCall(.01,P.update),z=.01,C=I=0}else P.refresh();d&&pE()},i.register=function(n){return Ia||(Ee=n||Tx(),Ex()&&window.document&&i.enable(),Ia=ko),Ia},i.defaults=function(n){if(n)for(var r in n)tc[r]=n[r];return tc},i.disable=function(n,r){ko=0,nt.forEach(function(a){return a[r?"kill":"disable"](n)}),ii(ot,"wheel",da),ii(Nt,"scroll",da),clearInterval(Kl),ii(Nt,"touchcancel",In),ii(wt,"touchstart",In),Ql(ii,Nt,"pointerdown,touchstart,mousedown",Xm),Ql(ii,Nt,"pointerup,touchend,mouseup",Ym),_u.kill(),Jl(ii);for(var s=0;s<rt.length;s+=3)ec(ii,rt[s],rt[s+1]),ec(ii,rt[s],rt[s+2])},i.enable=function(){if(ot=window,Nt=document,Tn=Nt.documentElement,wt=Nt.body,Ee&&(bl=Ee.utils.toArray,il=Ee.utils.clamp,nd=Ee.core.context||In,Pf=Ee.core.suppressOverwrites||In,hp=ot.history.scrollRestoration||"auto",ad=ot.pageYOffset,Ee.core.globals("ScrollTrigger",i),wt)){ko=1,$a=document.createElement("div"),$a.style.height="100vh",$a.style.position="absolute",Ox(),oE(),Ht.register(Ee),i.isTouch=Ht.isTouch,Dr=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),id=Ht.isTouch===1,ni(ot,"wheel",da),xx=[ot,Nt,Tn,wt],Ee.matchMedia?(i.matchMedia=function(l){var c=Ee.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ee.addEventListener("matchMediaInit",function(){return vp()}),Ee.addEventListener("matchMediaRevert",function(){return Dx()}),Ee.addEventListener("matchMedia",function(){Ns(0,1),ta("matchMedia")}),Ee.matchMedia("(orientation: portrait)",function(){return Of(),Of})):console.warn("Requires GSAP 3.11.0 or later"),Of(),ni(Nt,"scroll",da);var n=wt.style,r=n.borderTopStyle,s=Ee.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=cr(wt),Kt.m=Math.round(a.top+Kt.sc())||0,Pi.m=Math.round(a.left+Pi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Kl=setInterval($m,250),Ee.delayedCall(.5,function(){return Zl=0}),ni(Nt,"touchcancel",In),ni(wt,"touchstart",In),Ql(ni,Nt,"pointerdown,touchstart,mousedown",Xm),Ql(ni,Nt,"pointerup,touchend,mouseup",Ym),td=Ee.utils.checkPrefix("transform"),Kc.push(td),Ia=mi(),_u=Ee.delayedCall(.2,Ns).pause(),Oa=[Nt,"visibilitychange",function(){var l=ot.innerWidth,c=ot.innerHeight;Nt.hidden?(Vm=l,Hm=c):(Vm!==l||Hm!==c)&&Vo()},Nt,"DOMContentLoaded",Ns,ot,"load",Ns,ot,"resize",Vo],Jl(ni),nt.forEach(function(l){return l.enable(0,1)}),o=0;o<rt.length;o+=3)ec(ii,rt[o],rt[o+1]),ec(ii,rt[o],rt[o+2])}},i.config=function(n){"limitCallbacks"in n&&(Lf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Kl)||(Kl=r)&&setInterval($m,r),"ignoreMobileResize"in n&&(id=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Jl(ii)||Jl(ni,n.autoRefreshEvents||"none"),bx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Ui(n),a=rt.indexOf(s),o=Qs(s);~a&&rt.splice(a,o?6:2),r&&(o?qn.unshift(ot,r,wt,r,Tn,r):qn.unshift(s,r))},i.clearMatchMedia=function(n){nt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(Ji(n)?Ui(n):n).getBoundingClientRect(),o=a[s?js:$s]*r||0;return s?a.right-o>0&&a.left+o<ot.innerWidth:a.bottom-o>0&&a.top+o<ot.innerHeight},i.positionInViewport=function(n,r,s){Ji(n)&&(n=Ui(n));var a=n.getBoundingClientRect(),o=a[s?js:$s],l=r==null?o/2:r in yu?yu[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/ot.innerWidth:(a.top+l)/ot.innerHeight},i.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=ea.killAll||[];ea={},r.forEach(function(s){return s()})}},i}();at.version="3.12.5";at.saveStyles=function(i){return i?bl(i).forEach(function(e){if(e&&e.style){var t=Zi.indexOf(e);t>=0&&Zi.splice(t,5),Zi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),nd())}}):Zi};at.revert=function(i,e){return vp(!i,e)};at.create=function(i,e){return new at(i,e)};at.refresh=function(i){return i?Vo():(Ia||at.register())&&Ns(!0)};at.update=function(i){return++rt.cache&&mr(i===!0?2:0)};at.clearScrollMemory=Ix;at.maxScroll=function(i,e){return Hn(i,e?Pi:Kt)};at.getScrollFunc=function(i,e){return rs(Ui(i),e?Pi:Kt)};at.getById=function(i){return sd[i]};at.getAll=function(){return nt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!vn};at.snapDirectional=_p;at.addEventListener=function(i,e){var t=ea[i]||(ea[i]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(i,e){var t=ea[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Ee.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Li(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Li(s)&&(s=s(),ni(at,"refresh",function(){return s=e.batchMax()})),bl(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(at.create(c))}),t};var tg=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Uf=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ht.isTouch?" pinch-zoom":""):"none",e===Tn&&i(wt,t)},sc={auto:1,scroll:1},xE=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ee.core.getCache(s),o=mi(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(sc[(l=hn(s)).overflowY]||sc[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Qs(s)&&(sc[(l=hn(s)).overflowY]||sc[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ux=function(e,t,n,r){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&xE,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&ni(Nt,Ht.eventTypes[0],ng,!1,!0)},onDisable:function(){return ii(Nt,Ht.eventTypes[0],ng,!0)}})},yE=/(input|label|select|textarea)/i,ig,ng=function(e){var t=yE.test(e.target.tagName);(t||ig)&&(e._gsapAllow=!0,ig=t)},bE=function(e){As(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Ui(e.target)||Tn,u=Ee.core.globals().ScrollSmoother,f=u&&u.get(),h=Dr&&(e.content&&Ui(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=rs(c,Kt),_=rs(c,Pi),g=1,m=(Ht.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,S=Li(r)?function(){return r(o)}:function(){return r||2.8},x,E,R=Ux(c,e.type,!0,s),w=function(){return E=!1},T=In,L=In,M=function(){l=Hn(c,Kt),L=il(Dr?1:0,l),n&&(T=il(0,Hn(c,Pi))),x=Ks},b=function(){h._gsap.y=Bo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},k=function(){if(E){requestAnimationFrame(w);var H=Bo(o.deltaY/2),se=L(d.v-H);if(h&&se!==d.v+d.offset){d.offset=se-d.v;var P=Bo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=rt.cache,mr()}return!0}d.offset&&b(),E=!0},B,N,$,Z,te=function(){M(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return h&&Ee.set(h,{y:"+=0"}),e.ignoreCheck=function(Y){return Dr&&Y.type==="touchmove"&&k()||g>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){E=!1;var Y=g;g=Bo((ot.visualViewport&&ot.visualViewport.scale||1)/m),B.pause(),Y!==g&&Uf(c,g>1.01?!0:n?!1:"x"),N=_(),$=d(),M(),x=Ks},e.onRelease=e.onGestureStart=function(Y,H){if(d.offset&&b(),!H)Z.restart(!0);else{rt.cache++;var se=S(),P,he;n&&(P=_(),he=P+se*.05*-Y.velocityX/.227,se*=tg(_,P,he,Hn(c,Pi)),B.vars.scrollX=T(he)),P=d(),he=P+se*.05*-Y.velocityY/.227,se*=tg(d,P,he,Hn(c,Kt)),B.vars.scrollY=L(he),B.invalidate().duration(se).play(.01),(Dr&&B.vars.scrollY>=l||P>=l-1)&&Ee.to({},{onUpdate:te,duration:se})}a&&a(Y)},e.onWheel=function(){B._ts&&B.pause(),mi()-p>1e3&&(x=0,p=mi())},e.onChange=function(Y,H,se,P,he){if(Ks!==x&&M(),H&&n&&_(T(P[2]===H?N+(Y.startX-Y.x):_()+H-P[1])),se){d.offset&&b();var we=he[2]===se,$e=we?$+Y.startY-Y.y:d()+se-he[1],ee=L($e);we&&$e!==ee&&($+=ee-$e),d(ee)}(se||H)&&mr()},e.onEnable=function(){Uf(c,n?!1:"x"),at.addEventListener("refresh",te),ni(ot,"resize",te),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){Uf(c,!0),ii(ot,"resize",te),at.removeEventListener("refresh",te),R.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ht(e),o.iOS=Dr,Dr&&!d()&&d(1),Dr&&Ee.ticker.add(In),Z=o._dc,B=Ee.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Nx(d,d(),function(){return B.pause()})},onUpdate:mr,onComplete:Z.vars.onComplete}),o};at.sort=function(i){return nt.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};at.observe=function(i){return new Ht(i)};at.normalizeScroll=function(i){if(typeof i>"u")return wi;if(i===!0&&wi)return wi.enable();if(i===!1){wi&&wi.kill(),wi=i;return}var e=i instanceof Ht?i:bE(i);return wi&&wi.target===e.target&&wi.kill(),Qs(e.target)&&(wi=e),e};at.core={_getVelocityProp:ed,_inputObserver:Ux,_scrollers:rt,_proxies:qn,bridge:{ss:function(){vn||ta("scrollStart"),vn=mi()},ref:function(){return pi}}};Tx()&&Ee.registerPlugin(at);const Fx=[{label:"ABOUT",path:"#about"},{label:"PROJECT",path:"#project"},{label:"CONTECT",path:"#contact"}];function kx(i,e){i.preventDefault(),document.querySelector(e).scrollIntoView({behavior:"smooth"})}const SE={class:"topnav_container"},ME=["href","onClick"],EE={__name:"TopNav",props:{order:{type:Array,default:()=>["logo","nav","func"]},center:{type:String,default:"right"},toId:{type:Boolean,default:!1}},setup(i){return(e,t)=>(Di(),nn("div",SE,[Te("div",{class:Wr(["topnav_logo",[`order-${i.order.findIndex(n=>n=="logo")}`,{"center-left":i.order.findIndex(n=>n=="logo")==1&&i.center=="left"},{"center-center":i.order.findIndex(n=>n=="logo")==1&&i.center=="center"},{"center-right":i.order.findIndex(n=>n=="logo")==1&&i.center=="right"}]])},[Ch(e.$slots,"logo")],2),Te("ul",{class:Wr(["topnav_nav_list",[`order-${i.order.findIndex(n=>n=="nav")}`,{"center-left":i.order.findIndex(n=>n=="nav")==1&&i.center=="left"},{"center-center":i.order.findIndex(n=>n=="nav")==1&&i.center=="center"},{"center-right":i.order.findIndex(n=>n=="nav")==1&&i.center=="right"}]])},[(Di(!0),nn(Fi,null,U0(lr(Fx),n=>(Di(),nn("li",{key:n.path,class:"topnav_nav_item"},[i.toId?(Di(),nn("a",{key:0,href:n.path,onClick:r=>lr(kx)(r,n.path)},Dd(n.label),9,ME)):K0("",!0)]))),128))],2),Te("div",{class:Wr(["topnav_functions",[`order-${i.order.findIndex(n=>n=="func")}`,{"center-left":i.order.findIndex(n=>n=="func")==1&&i.center=="left"},{"center-center":i.order.findIndex(n=>n=="func")==1&&i.center=="center"},{"center-right":i.order.findIndex(n=>n=="func")==1&&i.center=="right"}]])},[Ch(e.$slots,"function")],2)]))}},TE={class:"project_card"},wE={class:"project_img"},AE=["src","alt"],CE={class:"project_card_content"},RE={class:"project_link_group"},PE=["href"],LE=Te("span",null,"Code",-1),DE=["href"],IE=Te("span",null,"View Demo",-1),Ff={__name:"ProjectCard",props:{title:String,img:String,codeLink:String,demoLink:String},setup(i){return(e,t)=>{const n=Hd("font-awesome-icon");return Di(),nn("div",TE,[Te("h4",null,Dd(i.title),1),Te("div",wE,[Te("img",{src:i.img,alt:`project-${i.title}-image`},null,8,AE)]),Te("div",CE,[Te("p",null,[Ch(e.$slots,"default")])]),Te("div",RE,[Te("a",{href:i.codeLink,target:"_blank",class:"project_link"},[mt(n,{icon:"fa-solid fa-code"}),LE],8,PE),Te("a",{href:i.demoLink,target:"_blank",class:"project_link"},[mt(n,{icon:"fa-solid fa-arrow-up-right-from-square"}),IE],8,DE)])])}}},OE=Te("span",{class:"ham-filling"},null,-1),NE=Te("span",{class:"ham-filling"},null,-1),UE={class:"ham-filling"},FE={__name:"hamburger",props:{modelValue:Boolean,devideNum:{type:Number,default:3},openStyle:{type:String,default:"line"}},emits:["update:modelValue"],setup(i,{emit:e}){const t=i,n=e,r=()=>{n("update:modelValue",!t.modelValue)};return(s,a)=>(Di(),nn("button",{onClick:r,class:Wr([[i.devideNum===3?"three-fillings":"two-fillings",{open:i.modelValue},{"open-style__line":i.openStyle==="line"},{"open-style__cross":i.openStyle==="cross"}],"hamburger"])},[OE,NE,D0(Te("span",UE,null,512),[[$S,i.devideNum===3]])],2))}},kE={class:"mobile-menu__nav-list"},BE=["href","onClick"],zE={__name:"mobileMenuDrawer",props:{modelValue:Boolean,menu:Array,zIndex:{type:Number,default:1e3},direction:{type:String,default:"ttb"},heightIs100Vh:{type:Boolean,default:!0},toId:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:e}){const t=e,n=()=>{t("update:modelValue",!1)};return(r,s)=>(Di(),nn("div",{style:Fu({zIndex:i.zIndex,height:i.heightIs100Vh?"100vh":"fit-content"}),class:Wr([[i.direction,{open:i.modelValue}],"mobile-menu__drawer padding-top"])},[Te("ul",kE,[(Di(!0),nn(Fi,null,U0(i.menu,a=>(Di(),nn("li",{key:a.path,class:"mobile-menu__nav-item"},[i.toId?(Di(),nn("a",{key:0,href:a.path,onClick:o=>{lr(kx)(o,a.path),n()}},Dd(a.label),9,BE)):K0("",!0)]))),128))])],6))}},VE="/assets/project-screen-vote-DwPd_D4E.jpg",HE="/assets/project-screen-freshDrop-D7m6vm-x.jpg",GE="/assets/project-screen-aster-De0KY2Ld.jpg",WE="163",XE=0,rg=1,YE=2,Bx=1,qE=2,sr=3,ss=0,Gi=1,ur=2,Kr=0,Za=1,sg=2,ag=3,og=4,jE=5,Ls=100,$E=101,KE=102,ZE=103,JE=104,QE=200,eT=201,tT=202,iT=203,ld=204,cd=205,nT=206,rT=207,sT=208,aT=209,oT=210,lT=211,cT=212,uT=213,fT=214,hT=0,dT=1,pT=2,bu=3,mT=4,gT=5,_T=6,vT=7,xp=0,xT=1,yT=2,Zr=0,bT=1,ST=2,MT=3,ET=4,TT=5,wT=6,AT=7,zx=300,co=301,uo=302,ud=303,fd=304,Qu=306,hd=1e3,Us=1001,dd=1002,_n=1003,CT=1004,ac=1005,wn=1006,kf=1007,Fs=1008,Jr=1009,RT=1010,PT=1011,Vx=1012,Hx=1013,fo=1014,Gr=1015,Su=1016,Gx=1017,Wx=1018,Dl=1020,LT=35902,DT=1021,IT=1022,Gn=1023,OT=1024,NT=1025,Ja=1026,Ml=1027,UT=1028,Xx=1029,FT=1030,Yx=1031,qx=1033,Bf=33776,zf=33777,Vf=33778,Hf=33779,lg=35840,cg=35841,ug=35842,fg=35843,jx=36196,hg=37492,dg=37496,pg=37808,mg=37809,gg=37810,_g=37811,vg=37812,xg=37813,yg=37814,bg=37815,Sg=37816,Mg=37817,Eg=37818,Tg=37819,wg=37820,Ag=37821,Gf=36492,Cg=36494,Rg=36495,kT=36283,Pg=36284,Lg=36285,Dg=36286,BT=3200,zT=3201,$x=0,VT=1,Fr="",On="srgb",fs="srgb-linear",yp="display-p3",ef="display-p3-linear",Mu="linear",Tt="srgb",Eu="rec709",Tu="p3",pa=7680,Ig=519,HT=512,GT=513,WT=514,Kx=515,XT=516,YT=517,qT=518,jT=519,Og=35044,Ng="300 es",dr=2e3,wu=2001;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=Math.PI/180,pd=180/Math.PI;function Il(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hi[i&255]+hi[i>>8&255]+hi[i>>16&255]+hi[i>>24&255]+"-"+hi[e&255]+hi[e>>8&255]+"-"+hi[e>>16&15|64]+hi[e>>24&255]+"-"+hi[t&63|128]+hi[t>>8&255]+"-"+hi[t>>16&255]+hi[t>>24&255]+hi[n&255]+hi[n>>8&255]+hi[n>>16&255]+hi[n>>24&255]).toLowerCase()}function ki(i,e,t){return Math.max(e,Math.min(t,i))}function $T(i,e){return(i%e+e)%e}function Xf(i,e,t){return(1-t)*i+t*e}function wo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ki(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,r,s,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=r[0],m=r[3],p=r[6],S=r[1],x=r[4],E=r[7],R=r[2],w=r[5],T=r[8];return s[0]=a*g+o*S+l*R,s[3]=a*m+o*x+l*w,s[6]=a*p+o*E+l*T,s[1]=c*g+u*S+f*R,s[4]=c*m+u*x+f*w,s[7]=c*p+u*E+f*T,s[2]=h*g+d*S+_*R,s[5]=h*m+d*x+_*w,s[8]=h*p+d*E+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+n*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yf.makeScale(e,t)),this}rotate(e){return this.premultiply(Yf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yf=new et;function Zx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Au(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function KT(){const i=Au("canvas");return i.style.display="block",i}const Ug={};function ZT(i){i in Ug||(Ug[i]=!0,console.warn(i))}const Fg=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kg=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oc={[fs]:{transfer:Mu,primaries:Eu,toReference:i=>i,fromReference:i=>i},[On]:{transfer:Tt,primaries:Eu,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ef]:{transfer:Mu,primaries:Tu,toReference:i=>i.applyMatrix3(kg),fromReference:i=>i.applyMatrix3(Fg)},[yp]:{transfer:Tt,primaries:Tu,toReference:i=>i.convertSRGBToLinear().applyMatrix3(kg),fromReference:i=>i.applyMatrix3(Fg).convertLinearToSRGB()}},JT=new Set([fs,ef]),vt={enabled:!0,_workingColorSpace:fs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!JT.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=oc[e].toReference,r=oc[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return oc[i].primaries},getTransfer:function(i){return i===Fr?Mu:oc[i].transfer}};function Qa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ma;class QT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ma===void 0&&(ma=Au("canvas")),ma.width=e.width,ma.height=e.height;const n=ma.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ma}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Au("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qa(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qa(t[n]/255)*255):t[n]=Qa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ew=0;class Jx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ew++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jf(r[a].image)):s.push(jf(r[a]))}else s=jf(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function jf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?QT.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tw=0;class Wi extends _o{constructor(e=Wi.DEFAULT_IMAGE,t=Wi.DEFAULT_MAPPING,n=Us,r=Us,s=wn,a=Fs,o=Gn,l=Jr,c=Wi.DEFAULT_ANISOTROPY,u=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=Il(),this.name="",this.source=new Jx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case Us:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case Us:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wi.DEFAULT_IMAGE=null;Wi.DEFAULT_MAPPING=zx;Wi.DEFAULT_ANISOTROPY=1;class ai{constructor(e=0,t=0,n=0,r=1){ai.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(d+1)/2,R=(p+1)/2,w=(u+h)/4,T=(f+g)/4,L=(_+m)/4;return x>E&&x>R?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=T/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=L/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=T/s,r=L/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-g)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iw extends _o{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ai(0,0,e,t),this.scissorTest=!1,this.viewport=new ai(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Wi(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends iw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qx extends Wi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nw extends Wi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-o;const p=l*h+c*d+u*_+f*g,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,p*S);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const E=o*S;if(l=l*m+h*E,c=c*m+d*E,u=u*m+_*E,f=f*m+g*E,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ki(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $f.copy(this).projectOnVector(e),this.sub($f)}reflect(e){return this.sub($f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ki(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $f=new j,Bg=new Ol;class Nl{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lc.copy(n.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),cc.subVectors(this.max,Ao),ga.subVectors(e.a,Ao),_a.subVectors(e.b,Ao),va.subVectors(e.c,Ao),Tr.subVectors(_a,ga),wr.subVectors(va,_a),vs.subVectors(ga,va);let t=[0,-Tr.z,Tr.y,0,-wr.z,wr.y,0,-vs.z,vs.y,Tr.z,0,-Tr.x,wr.z,0,-wr.x,vs.z,0,-vs.x,-Tr.y,Tr.x,0,-wr.y,wr.x,0,-vs.y,vs.x,0];return!Kf(t,ga,_a,va,cc)||(t=[1,0,0,0,1,0,0,0,1],!Kf(t,ga,_a,va,cc))?!1:(uc.crossVectors(Tr,wr),t=[uc.x,uc.y,uc.z],Kf(t,ga,_a,va,cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const er=[new j,new j,new j,new j,new j,new j,new j,new j],yn=new j,lc=new Nl,ga=new j,_a=new j,va=new j,Tr=new j,wr=new j,vs=new j,Ao=new j,cc=new j,uc=new j,xs=new j;function Kf(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xs.fromArray(i,s);const o=r.x*Math.abs(xs.x)+r.y*Math.abs(xs.y)+r.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),u=n.dot(xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rw=new Nl,Co=new j,Zf=new j;class bp{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rw.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const t=Co.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Co,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Zf)),this.expandByPoint(Co.copy(e.center).sub(Zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tr=new j,Jf=new j,fc=new j,Ar=new j,Qf=new j,hc=new j,eh=new j;class sw{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jf.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(Jf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fc),o=Ar.dot(this.direction),l=-Ar.dot(fc),c=Ar.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jf).addScaledVector(fc,h),d}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const n=tr.dot(this.direction),r=tr.dot(tr)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,n,r,s){Qf.subVectors(t,e),hc.subVectors(n,e),eh.crossVectors(Qf,hc);let a=this.direction.dot(eh),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ar.subVectors(this.origin,e);const l=o*this.direction.dot(hc.crossVectors(Ar,hc));if(l<0)return null;const c=o*this.direction.dot(Qf.cross(Ar));if(c<0||l+c>a)return null;const u=-o*Ar.dot(eh);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,n,r,s,a,o,l,c,u,f,h,d,_,g,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,h,d,_,g,m)}set(e,t,n,r,s,a,o,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/xa.setFromMatrixColumn(e,0).length(),s=1/xa.setFromMatrixColumn(e,1).length(),a=1/xa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aw,e,ow)}lookAt(e,t,n){const r=this.elements;return $i.subVectors(e,t),$i.lengthSq()===0&&($i.z=1),$i.normalize(),Cr.crossVectors(n,$i),Cr.lengthSq()===0&&(Math.abs(n.z)===1?$i.x+=1e-4:$i.z+=1e-4,$i.normalize(),Cr.crossVectors(n,$i)),Cr.normalize(),dc.crossVectors($i,Cr),r[0]=Cr.x,r[4]=dc.x,r[8]=$i.x,r[1]=Cr.y,r[5]=dc.y,r[9]=$i.y,r[2]=Cr.z,r[6]=dc.z,r[10]=$i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],x=n[7],E=n[11],R=n[15],w=r[0],T=r[4],L=r[8],M=r[12],b=r[1],k=r[5],B=r[9],N=r[13],$=r[2],Z=r[6],te=r[10],Y=r[14],H=r[3],se=r[7],P=r[11],he=r[15];return s[0]=a*w+o*b+l*$+c*H,s[4]=a*T+o*k+l*Z+c*se,s[8]=a*L+o*B+l*te+c*P,s[12]=a*M+o*N+l*Y+c*he,s[1]=u*w+f*b+h*$+d*H,s[5]=u*T+f*k+h*Z+d*se,s[9]=u*L+f*B+h*te+d*P,s[13]=u*M+f*N+h*Y+d*he,s[2]=_*w+g*b+m*$+p*H,s[6]=_*T+g*k+m*Z+p*se,s[10]=_*L+g*B+m*te+p*P,s[14]=_*M+g*N+m*Y+p*he,s[3]=S*w+x*b+E*$+R*H,s[7]=S*T+x*k+E*Z+R*se,s[11]=S*L+x*B+E*te+R*P,s[15]=S*M+x*N+E*Y+R*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*d-n*l*d)+g*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+m*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=f*m*c-g*h*c+g*l*d-o*m*d-f*l*p+o*h*p,x=_*h*c-u*m*c-_*l*d+a*m*d+u*l*p-a*h*p,E=u*g*c-_*f*c+_*o*d-a*g*d-u*o*p+a*f*p,R=_*f*l-u*g*l-_*o*h+a*g*h+u*o*m-a*f*m,w=t*S+n*x+r*E+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=S*T,e[1]=(g*h*s-f*m*s-g*r*d+n*m*d+f*r*p-n*h*p)*T,e[2]=(o*m*s-g*l*s+g*r*c-n*m*c-o*r*p+n*l*p)*T,e[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*T,e[4]=x*T,e[5]=(u*m*s-_*h*s+_*r*d-t*m*d-u*r*p+t*h*p)*T,e[6]=(_*l*s-a*m*s-_*r*c+t*m*c+a*r*p-t*l*p)*T,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*T,e[8]=E*T,e[9]=(_*f*s-u*g*s-_*n*d+t*g*d+u*n*p-t*f*p)*T,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*p+t*o*p)*T,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*T,e[12]=R*T,e[13]=(u*g*r-_*f*r+_*n*h-t*g*h-u*n*m+t*f*m)*T,e[14]=(_*o*r-a*g*r-_*n*l+t*g*l+a*n*m-t*o*m)*T,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*h+t*o*h)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,g=a*u,m=a*f,p=o*f,S=l*c,x=l*u,E=l*f,R=n.x,w=n.y,T=n.z;return r[0]=(1-(g+p))*R,r[1]=(d+E)*R,r[2]=(_-x)*R,r[3]=0,r[4]=(d-E)*w,r[5]=(1-(h+p))*w,r[6]=(m+S)*w,r[7]=0,r[8]=(_+x)*T,r[9]=(m-S)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=xa.set(r[0],r[1],r[2]).length();const a=xa.set(r[4],r[5],r[6]).length(),o=xa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,u=1/a,f=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=dr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,_;if(o===dr)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===wu)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=dr){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(a-s),h=(t+e)*c,d=(n+r)*u;let _,g;if(o===dr)_=(a+s)*f,g=-2*f;else if(o===wu)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xa=new j,bn=new Gt,aw=new j(0,0,0),ow=new j(1,1,1),Cr=new j,dc=new j,$i=new j,zg=new Gt,Vg=new Ol;class Jn{constructor(e=0,t=0,n=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ki(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ki(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ki(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ki(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ki(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ki(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";let ey=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lw=0;const Hg=new j,ya=new Ol,ir=new Gt,pc=new j,Ro=new j,cw=new j,uw=new Ol,Gg=new j(1,0,0),Wg=new j(0,1,0),Xg=new j(0,0,1),Yg={type:"added"},fw={type:"removed"},ba={type:"childadded",child:null},th={type:"childremoved",child:null};class bi extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bi.DEFAULT_UP.clone();const e=new j,t=new Jn,n=new Ol,r=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new et}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=bi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ey,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis(Gg,e)}rotateY(e){return this.rotateOnAxis(Wg,e)}rotateZ(e){return this.rotateOnAxis(Xg,e)}translateOnAxis(e,t){return Hg.copy(e).applyQuaternion(this.quaternion),this.position.add(Hg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gg,e)}translateY(e){return this.translateOnAxis(Wg,e)}translateZ(e){return this.translateOnAxis(Xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pc.copy(e):pc.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Ro,pc,this.up):ir.lookAt(pc,Ro,this.up),this.quaternion.setFromRotationMatrix(ir),r&&(ir.extractRotation(r.matrixWorld),ya.setFromRotationMatrix(ir),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),ba.child=e,this.dispatchEvent(ba),ba.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fw),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,cw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,uw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bi.DEFAULT_UP=new j(0,1,0);bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new j,nr=new j,ih=new j,rr=new j,Sa=new j,Ma=new j,qg=new j,nh=new j,rh=new j,sh=new j;class zn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Sn.subVectors(r,t),nr.subVectors(n,t),ih.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(nr),l=Sn.dot(ih),c=nr.dot(nr),u=nr.dot(ih),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rr.x),l.addScaledVector(a,rr.y),l.addScaledVector(o,rr.z),l)}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),nr.subVectors(e,t),Sn.cross(nr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Sn.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Sa.subVectors(r,n),Ma.subVectors(s,n),nh.subVectors(e,n);const l=Sa.dot(nh),c=Ma.dot(nh);if(l<=0&&c<=0)return t.copy(n);rh.subVectors(e,r);const u=Sa.dot(rh),f=Ma.dot(rh);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Sa,a);sh.subVectors(e,s);const d=Sa.dot(sh),_=Ma.dot(sh);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ma,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return qg.subVectors(s,r),o=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(qg,o);const p=1/(m+g+h);return a=g*p,o=h*p,t.copy(n).addScaledVector(Sa,a).addScaledVector(Ma,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},mc={h:0,s:0,l:0};function ah(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=vt.workingColorSpace){if(e=$T(e,1),t=ki(t,0,1),n=ki(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ah(a,s,e+1/3),this.g=ah(a,s,e),this.b=ah(a,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const n=ty[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}copyLinearToSRGB(e){return this.r=qf(e.r),this.g=qf(e.g),this.b=qf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return vt.fromWorkingColorSpace(di.copy(this),e),Math.round(ki(di.r*255,0,255))*65536+Math.round(ki(di.g*255,0,255))*256+Math.round(ki(di.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(di.copy(this),t);const n=di.r,r=di.g,s=di.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(di.copy(this),t),e.r=di.r,e.g=di.g,e.b=di.b,e}getStyle(e=On){vt.fromWorkingColorSpace(di.copy(this),e);const t=di.r,n=di.g,r=di.b;return e!==On?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(mc);const n=Xf(Rr.h,mc.h,t),r=Xf(Rr.s,mc.s,t),s=Xf(Rr.l,mc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const di=new ut;ut.NAMES=ty;let hw=0;class Ul extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=Za,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=bu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Za&&(n.blending=this.blending),this.side!==ss&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ld&&(n.blendSrc=this.blendSrc),this.blendDst!==cd&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bu&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class iy extends Ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new j,gc=new st;class jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Og,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ZT("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ii(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ii(t,this.array),n=Ii(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ii(t,this.array),n=Ii(n,this.array),r=Ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ii(t,this.array),n=Ii(n,this.array),r=Ii(r,this.array),s=Ii(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Og&&(e.usage=this.usage),e}}class ny extends jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ry extends jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $n extends jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dw=0;const cn=new Gt,oh=new bi,Ea=new j,Ki=new Nl,Po=new Nl,ti=new j;class hs extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zx(e)?ry:ny)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ea).negate(),this.translate(Ea.x,Ea.y,Ea.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ki.setFromBufferAttribute(s),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Ki.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Po.setFromBufferAttribute(o),this.morphTargetsRelative?(ti.addVectors(Ki.min,Po.min),Ki.expandByPoint(ti),ti.addVectors(Ki.max,Po.max),Ki.expandByPoint(ti)):(Ki.expandByPoint(Po.min),Ki.expandByPoint(Po.max))}Ki.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ti.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ti));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ti.fromBufferAttribute(o,c),l&&(Ea.fromBufferAttribute(e,c),ti.add(Ea)),r=Math.max(r,n.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new j,l[L]=new j;const c=new j,u=new j,f=new j,h=new st,d=new st,_=new st,g=new j,m=new j;function p(L,M,b){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,b),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,b),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const k=1/(d.x*_.y-_.x*d.y);isFinite(k)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(k),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(k),o[L].add(g),o[M].add(g),o[b].add(g),l[L].add(m),l[M].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,M=S.length;L<M;++L){const b=S[L],k=b.start,B=b.count;for(let N=k,$=k+B;N<$;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new j,E=new j,R=new j,w=new j;function T(L){R.fromBufferAttribute(r,L),w.copy(R);const M=o[L];x.copy(M),x.sub(R.multiplyScalar(R.dot(M))).normalize(),E.crossVectors(w,M);const k=E.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,k)}for(let L=0,M=S.length;L<M;++L){const b=S[L],k=b.start,B=b.count;for(let N=k,$=k+B;N<$;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new jn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hs,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new Gt,ys=new sw,_c=new bp,$g=new j,Ta=new j,wa=new j,Aa=new j,lh=new j,vc=new j,xc=new st,yc=new st,bc=new st,Kg=new j,Zg=new j,Jg=new j,Sc=new j,Mc=new j;class Wn extends bi{constructor(e=new hs,t=new iy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(lh.fromBufferAttribute(f,e),a?vc.addScaledVector(lh,u):vc.addScaledVector(lh.sub(t),u))}t.add(vc)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),ys.copy(e.ray).recast(e.near),!(_c.containsPoint(ys.origin)===!1&&(ys.intersectSphere(_c,$g)===null||ys.origin.distanceToSquared($g)>(e.far-e.near)**2))&&(jg.copy(s).invert(),ys.copy(e.ray).applyMatrix4(jg),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,R=x;E<R;E+=3){const w=o.getX(E),T=o.getX(E+1),L=o.getX(E+2);r=Ec(this,p,e,n,c,u,f,w,T,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);r=Ec(this,a,e,n,c,u,f,S,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,R=x;E<R;E+=3){const w=E,T=E+1,L=E+2;r=Ec(this,p,e,n,c,u,f,w,T,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,x=m+1,E=m+2;r=Ec(this,a,e,n,c,u,f,S,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pw(i,e,t,n,r,s,a,o){let l;if(e.side===Gi?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===ss,o),l===null)return null;Mc.copy(o),Mc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mc);return c<t.near||c>t.far?null:{distance:c,point:Mc.clone(),object:i}}function Ec(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ta),i.getVertexPosition(l,wa),i.getVertexPosition(c,Aa);const u=pw(i,e,t,n,Ta,wa,Aa,Sc);if(u){r&&(xc.fromBufferAttribute(r,o),yc.fromBufferAttribute(r,l),bc.fromBufferAttribute(r,c),u.uv=zn.getInterpolation(Sc,Ta,wa,Aa,xc,yc,bc,new st)),s&&(xc.fromBufferAttribute(s,o),yc.fromBufferAttribute(s,l),bc.fromBufferAttribute(s,c),u.uv1=zn.getInterpolation(Sc,Ta,wa,Aa,xc,yc,bc,new st)),a&&(Kg.fromBufferAttribute(a,o),Zg.fromBufferAttribute(a,l),Jg.fromBufferAttribute(a,c),u.normal=zn.getInterpolation(Sc,Ta,wa,Aa,Kg,Zg,Jg,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new j,materialIndex:0};zn.getNormal(Ta,wa,Aa,f.normal),u.face=f}return u}class Fl extends hs{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(f,2));function _(g,m,p,S,x,E,R,w,T,L,M){const b=E/T,k=R/L,B=E/2,N=R/2,$=w/2,Z=T+1,te=L+1;let Y=0,H=0;const se=new j;for(let P=0;P<te;P++){const he=P*k-N;for(let we=0;we<Z;we++){const $e=we*b-B;se[g]=$e*S,se[m]=he*x,se[p]=$,c.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[p]=w>0?1:-1,u.push(se.x,se.y,se.z),f.push(we/T),f.push(1-P/L),Y+=1}}for(let P=0;P<L;P++)for(let he=0;he<T;he++){const we=h+he+Z*P,$e=h+he+Z*(P+1),ee=h+(he+1)+Z*(P+1),le=h+(he+1)+Z*P;l.push(we,$e,le),l.push($e,ee,le),H+=6}o.addGroup(d,H,M),d+=H,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ti(i){const e={};for(let t=0;t<i.length;t++){const n=ho(i[t]);for(const r in n)e[r]=n[r]}return e}function mw(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sy(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const gw={clone:ho,merge:Ti},_w=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,vw=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class as extends Ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_w,this.fragmentShader=vw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=mw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ay extends bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new j,Qg=new st,e_=new st;class dn extends ay{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(Wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,Qg,e_),t.subVectors(e_,Qg)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wf*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ca=-90,Ra=1;class xw extends bi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Ca,Ra,e,t);r.layers=this.layers,this.add(r);const s=new dn(Ca,Ra,e,t);s.layers=this.layers,this.add(s);const a=new dn(Ca,Ra,e,t);a.layers=this.layers,this.add(a);const o=new dn(Ca,Ra,e,t);o.layers=this.layers,this.add(o);const l=new dn(Ca,Ra,e,t);l.layers=this.layers,this.add(l);const c=new dn(Ca,Ra,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wu)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class oy extends Wi{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:co,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yw extends ia{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fl(5,5,5),s=new as({name:"CubemapFromEquirect",uniforms:ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gi,blending:Kr});s.uniforms.tEquirect.value=t;const a=new Wn(r,s),o=t.minFilter;return t.minFilter===Fs&&(t.minFilter=wn),new xw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ch=new j,bw=new j,Sw=new et;class Cs{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ch.subVectors(n,t).cross(bw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ch),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sw.getNormalMatrix(e),r=this.coplanarPoint(ch).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new bp,Tc=new j;class Sp{constructor(e=new Cs,t=new Cs,n=new Cs,r=new Cs,s=new Cs,a=new Cs){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],S=r[13],x=r[14],E=r[15];if(n[0].setComponents(l-s,h-c,m-d,E-p).normalize(),n[1].setComponents(l+s,h+c,m+d,E+p).normalize(),n[2].setComponents(l+a,h+u,m+_,E+S).normalize(),n[3].setComponents(l-a,h-u,m-_,E-S).normalize(),n[4].setComponents(l-o,h-f,m-g,E-x).normalize(),t===dr)n[5].setComponents(l+o,h+f,m+g,E+x).normalize();else if(t===wu)n[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Tc.x=r.normal.x>0?e.max.x:e.min.x,Tc.y=r.normal.y>0?e.max.y:e.min.y,Tc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ly(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Mw(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,o),f.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let d=0,_=h.length;d<_;d++){const g=h[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class tf extends hs{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let x=0;x<c;x++){const E=x*f-s;_.push(E,-S,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,E=S+c*(p+1),R=S+1+c*(p+1),w=S+1+c*p;d.push(x,E,w),d.push(E,R,w)}this.setIndex(d),this.setAttribute("position",new $n(_,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.width,e.height,e.widthSegments,e.heightSegments)}}const Ew=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,Tw=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,ww=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,Aw=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Cw=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,Rw=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Pw=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,Lw=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Dw=`
#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}
#endif
`,Iw=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif
`,Ow=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,Nw=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Uw=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,Fw=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,kw=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,Bw=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`,zw=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Vw=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Hw=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Gw=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Ww=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Xw=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,Yw=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,qw=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,jw=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,$w=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Kw=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Zw=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,Jw=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Qw=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,eA=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,tA=`

// http://www.russellcottrell.com/photo/matrixCalculator.htm

// Linear sRGB => XYZ => Linear Display P3
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);

// Linear Display P3 => XYZ => Linear sRGB
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);

vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}

vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

// @deprecated, r156
vec4 LinearToLinear( in vec4 value ) {
	return value;
}

// @deprecated, r156
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}
`,iA=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,nA=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,rA=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,sA=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,aA=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,oA=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,lA=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,cA=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,uA=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,fA=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,hA=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,dA=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,pA=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,mA=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,gA=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,_A=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,vA=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,xA=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,yA=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,bA=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,SA=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,MA=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,EA=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,TA=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,wA=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,AA=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,CA=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,RA=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,PA=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,LA=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,DA=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,IA=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,OA=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,NA=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,UA=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,FA=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[MORPHTARGETS_COUNT];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,kA=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,BA=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,zA=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;

	#endif

	#ifdef MORPHTARGETS_TEXTURE

		#ifndef USE_INSTANCING_MORPH

			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

		#endif

		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,VA=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,HA=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,GA=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,WA=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,XA=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,YA=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,qA=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,jA=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,$A=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,KA=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,ZA=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,JA=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,QA=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,eC=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,tC=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,iC=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,nC=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,rC=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,sC=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,aC=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return shadow;

	}

#endif
`,oC=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,lC=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`,cC=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,uC=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,fC=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`,hC=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,dC=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,pC=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,mC=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,gC=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,_C=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;

	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;

	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;

	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,vC=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,xC=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,yC=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,bC=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,SC=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`,MC=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,EC=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,TC=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,wC=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,AC=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,CC=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,RC=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,PC=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,LC=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,DC=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,IC=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,OC=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,NC=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,UC=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,FC=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,kC=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,BC=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,zC=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,VC=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,HC=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,GC=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,WC=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,XC=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,YC=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,qC=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,jC=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,$C=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,KC=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,ZC=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,JC=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,QC=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,eR=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,tR=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,iR=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,nR=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,Qe={alphahash_fragment:Ew,alphahash_pars_fragment:Tw,alphamap_fragment:ww,alphamap_pars_fragment:Aw,alphatest_fragment:Cw,alphatest_pars_fragment:Rw,aomap_fragment:Pw,aomap_pars_fragment:Lw,batching_pars_vertex:Dw,batching_vertex:Iw,begin_vertex:Ow,beginnormal_vertex:Nw,bsdfs:Uw,iridescence_fragment:Fw,bumpmap_pars_fragment:kw,clipping_planes_fragment:Bw,clipping_planes_pars_fragment:zw,clipping_planes_pars_vertex:Vw,clipping_planes_vertex:Hw,color_fragment:Gw,color_pars_fragment:Ww,color_pars_vertex:Xw,color_vertex:Yw,common:qw,cube_uv_reflection_fragment:jw,defaultnormal_vertex:$w,displacementmap_pars_vertex:Kw,displacementmap_vertex:Zw,emissivemap_fragment:Jw,emissivemap_pars_fragment:Qw,colorspace_fragment:eA,colorspace_pars_fragment:tA,envmap_fragment:iA,envmap_common_pars_fragment:nA,envmap_pars_fragment:rA,envmap_pars_vertex:sA,envmap_physical_pars_fragment:_A,envmap_vertex:aA,fog_vertex:oA,fog_pars_vertex:lA,fog_fragment:cA,fog_pars_fragment:uA,gradientmap_pars_fragment:fA,lightmap_fragment:hA,lightmap_pars_fragment:dA,lights_lambert_fragment:pA,lights_lambert_pars_fragment:mA,lights_pars_begin:gA,lights_toon_fragment:vA,lights_toon_pars_fragment:xA,lights_phong_fragment:yA,lights_phong_pars_fragment:bA,lights_physical_fragment:SA,lights_physical_pars_fragment:MA,lights_fragment_begin:EA,lights_fragment_maps:TA,lights_fragment_end:wA,logdepthbuf_fragment:AA,logdepthbuf_pars_fragment:CA,logdepthbuf_pars_vertex:RA,logdepthbuf_vertex:PA,map_fragment:LA,map_pars_fragment:DA,map_particle_fragment:IA,map_particle_pars_fragment:OA,metalnessmap_fragment:NA,metalnessmap_pars_fragment:UA,morphinstance_vertex:FA,morphcolor_vertex:kA,morphnormal_vertex:BA,morphtarget_pars_vertex:zA,morphtarget_vertex:VA,normal_fragment_begin:HA,normal_fragment_maps:GA,normal_pars_fragment:WA,normal_pars_vertex:XA,normal_vertex:YA,normalmap_pars_fragment:qA,clearcoat_normal_fragment_begin:jA,clearcoat_normal_fragment_maps:$A,clearcoat_pars_fragment:KA,iridescence_pars_fragment:ZA,opaque_fragment:JA,packing:QA,premultiplied_alpha_fragment:eC,project_vertex:tC,dithering_fragment:iC,dithering_pars_fragment:nC,roughnessmap_fragment:rC,roughnessmap_pars_fragment:sC,shadowmap_pars_fragment:aC,shadowmap_pars_vertex:oC,shadowmap_vertex:lC,shadowmask_pars_fragment:cC,skinbase_vertex:uC,skinning_pars_vertex:fC,skinning_vertex:hC,skinnormal_vertex:dC,specularmap_fragment:pC,specularmap_pars_fragment:mC,tonemapping_fragment:gC,tonemapping_pars_fragment:_C,transmission_fragment:vC,transmission_pars_fragment:xC,uv_pars_fragment:yC,uv_pars_vertex:bC,uv_vertex:SC,worldpos_vertex:MC,background_vert:EC,background_frag:TC,backgroundCube_vert:wC,backgroundCube_frag:AC,cube_vert:CC,cube_frag:RC,depth_vert:PC,depth_frag:LC,distanceRGBA_vert:DC,distanceRGBA_frag:IC,equirect_vert:OC,equirect_frag:NC,linedashed_vert:UC,linedashed_frag:FC,meshbasic_vert:kC,meshbasic_frag:BC,meshlambert_vert:zC,meshlambert_frag:VC,meshmatcap_vert:HC,meshmatcap_frag:GC,meshnormal_vert:WC,meshnormal_frag:XC,meshphong_vert:YC,meshphong_frag:qC,meshphysical_vert:jC,meshphysical_frag:$C,meshtoon_vert:KC,meshtoon_frag:ZC,points_vert:JC,points_frag:QC,shadow_vert:eR,shadow_frag:tR,sprite_vert:iR,sprite_frag:nR},ve={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Fn={basic:{uniforms:Ti([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Ti([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ut(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Ti([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Ti([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Ti([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ut(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Ti([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Ti([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Ti([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Ti([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Ti([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Ti([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Ti([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Ti([ve.lights,ve.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Fn.physical={uniforms:Ti([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const wc={r:0,b:0,g:0},Ss=new Jn,rR=new Gt;function sR(i,e,t,n,r,s,a){const o=new ut(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(m,p){let S=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Qu)?(u===void 0&&(u=new Wn(new Fl(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:ho(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ss.copy(p.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rR.makeRotationFromEuler(Ss)),u.material.toneMapped=vt.getTransfer(x.colorSpace)!==Tt,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Wn(new tf(2,2),new as({name:"BackgroundMaterial",uniforms:ho(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=vt.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(wc,sy(i)),n.buffers.color.setClear(wc.r,wc.g,wc.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function aR(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(b,k,B,N,$){let Z=!1;const te=f(N,B,k);s!==te&&(s=te,c(s.object)),Z=d(b,N,B,$),Z&&_(b,N,B,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(b,k,B,N),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,k,B){const N=B.wireframe===!0;let $=n[b.id];$===void 0&&($={},n[b.id]=$);let Z=$[k.id];Z===void 0&&(Z={},$[k.id]=Z);let te=Z[N];return te===void 0&&(te=h(l()),Z[N]=te),te}function h(b){const k=[],B=[],N=[];for(let $=0;$<t;$++)k[$]=0,B[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:N,object:b,attributes:{},index:null}}function d(b,k,B,N){const $=s.attributes,Z=k.attributes;let te=0;const Y=B.getAttributes();for(const H in Y)if(Y[H].location>=0){const P=$[H];let he=Z[H];if(he===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),P===void 0||P.attribute!==he||he&&P.data!==he.data)return!0;te++}return s.attributesNum!==te||s.index!==N}function _(b,k,B,N){const $={},Z=k.attributes;let te=0;const Y=B.getAttributes();for(const H in Y)if(Y[H].location>=0){let P=Z[H];P===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(P=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(P=b.instanceColor));const he={};he.attribute=P,P&&P.data&&(he.data=P.data),$[H]=he,te++}s.attributes=$,s.attributesNum=te,s.index=N}function g(){const b=s.newAttributes;for(let k=0,B=b.length;k<B;k++)b[k]=0}function m(b){p(b,0)}function p(b,k){const B=s.newAttributes,N=s.enabledAttributes,$=s.attributeDivisors;B[b]=1,N[b]===0&&(i.enableVertexAttribArray(b),N[b]=1),$[b]!==k&&(i.vertexAttribDivisor(b,k),$[b]=k)}function S(){const b=s.newAttributes,k=s.enabledAttributes;for(let B=0,N=k.length;B<N;B++)k[B]!==b[B]&&(i.disableVertexAttribArray(B),k[B]=0)}function x(b,k,B,N,$,Z,te){te===!0?i.vertexAttribIPointer(b,k,B,$,Z):i.vertexAttribPointer(b,k,B,N,$,Z)}function E(b,k,B,N){g();const $=N.attributes,Z=B.getAttributes(),te=k.defaultAttributeValues;for(const Y in Z){const H=Z[Y];if(H.location>=0){let se=$[Y];if(se===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const P=se.normalized,he=se.itemSize,we=e.get(se);if(we===void 0)continue;const $e=we.buffer,ee=we.type,le=we.bytesPerElement,me=ee===i.INT||ee===i.UNSIGNED_INT||se.gpuType===Hx;if(se.isInterleavedBufferAttribute){const ue=se.data,Pe=ue.stride,Ie=se.offset;if(ue.isInstancedInterleavedBuffer){for(let Ve=0;Ve<H.locationSize;Ve++)p(H.location+Ve,ue.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)m(H.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Ve=0;Ve<H.locationSize;Ve++)x(H.location+Ve,he/H.locationSize,ee,P,Pe*le,(Ie+he/H.locationSize*Ve)*le,me)}else{if(se.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)p(H.location+ue,se.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ue=0;ue<H.locationSize;ue++)m(H.location+ue);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ue=0;ue<H.locationSize;ue++)x(H.location+ue,he/H.locationSize,ee,P,he*le,he/H.locationSize*ue*le,me)}}else if(te!==void 0){const P=te[Y];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(H.location,P);break;case 3:i.vertexAttrib3fv(H.location,P);break;case 4:i.vertexAttrib4fv(H.location,P);break;default:i.vertexAttrib1fv(H.location,P)}}}}S()}function R(){L();for(const b in n){const k=n[b];for(const B in k){const N=k[B];for(const $ in N)u(N[$].object),delete N[$];delete k[B]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const k=n[b.id];for(const B in k){const N=k[B];for(const $ in N)u(N[$].object),delete N[$];delete k[B]}delete n[b.id]}function T(b){for(const k in n){const B=n[k];if(B[b.id]===void 0)continue;const N=B[b.id];for(const $ in N)u(N[$].object),delete N[$];delete B[b.id]}}function L(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function oR(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{f.multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function lR(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:p,maxSamples:S}}function cR(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Cs,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,x=S*4;let E=p.clippingState||null;l.value=E,E=u(_,h,x,d);for(let R=0;R!==x;++R)E[R]=t[R];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=d;x!==g;++x,E+=4)a.copy(f[x]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function uR(i){let e=new WeakMap;function t(a,o){return o===ud?a.mapping=co:o===fd&&(a.mapping=uo),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ud||o===fd)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yw(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class cy extends ay{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ka=4,t_=[.125,.215,.35,.446,.526,.582],Ds=20,uh=new cy,i_=new ut;let fh=null,hh=0,dh=0,ph=!1;const Rs=(1+Math.sqrt(5))/2,Pa=1/Rs,n_=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Rs,Pa),new j(0,Rs,-Pa),new j(Pa,0,Rs),new j(-Pa,0,Rs),new j(Rs,Pa,0),new j(-Rs,Pa,0)];class r_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,e.scissorTest=!1,Ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Su,format:Gn,colorSpace:fs,depthBuffer:!1},r=s_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s_(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fR(s)),this._blurMaterial=hR(s,e,t)}return r}_compileMaterial(e){const t=new Wn(this._lodPlanes[0],e);this._renderer.compile(t,uh)}_sceneToCubeUV(e,t,n,r){const o=new dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(i_),u.toneMapping=Zr,u.autoClear=!1;const d=new iy({name:"PMREM.Background",side:Gi,depthWrite:!1,depthTest:!1}),_=new Wn(new Fl,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(i_),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Ac(r,S*x,p>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===co||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=o_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Wn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ac(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,uh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=n_[(r-1)%n_.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ds-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ds;m>Ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);const p=[];let S=0;for(let T=0;T<Ds;++T){const L=T/g,M=Math.exp(-L*L/2);p.push(M),T===0?S+=M:T<m&&(S+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const E=this._sizeLods[r],R=3*E*(r>x-ka?r-x+ka:0),w=4*(this._cubeSize-E);Ac(t,R,w,3*E,2*E),l.setRenderTarget(t),l.render(f,uh)}}function fR(i){const e=[],t=[],n=[];let r=i;const s=i-ka+1+t_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ka?l=t_[a-i+ka-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),x=new Float32Array(m*_*d),E=new Float32Array(p*_*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,L=w>2?0:-1,M=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];S.set(M,g*_*w),x.set(h,m*_*w);const b=[w,w,w,w,w,w];E.set(b,p*_*w)}const R=new hs;R.setAttribute("position",new jn(S,g)),R.setAttribute("uv",new jn(x,m)),R.setAttribute("faceIndex",new jn(E,p)),e.push(R),r>ka&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function s_(i,e,t){const n=new ia(i,e,t);return n.texture.mapping=Qu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ac(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hR(i,e,t){const n=new Float32Array(Ds),r=new j(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function a_(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function o_(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function Mp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dR(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ud||l===fd,u=l===co||l===uo;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new r_(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new r_(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pR(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mR(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let x=0,E=S.length;x<E;x+=3){const R=S[x+0],w=S[x+1],T=S[x+2];h.push(R,w,w,T,T,R)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,E=S.length/3-1;x<E;x+=3){const R=x+0,w=x+1,T=x+2;h.push(R,w,w,T,T,R)}}else return;const m=new(Zx(h)?ry:ny)(h,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function gR(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d;g++)this.render(f[g]/a,h[g]);else{_.multiDrawElementsWEBGL(n,h,0,s,f,0,d);let g=0;for(let m=0;m<d;m++)g+=h[m];t.update(g,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function _R(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vR(i,e,t){const n=new WeakMap,r=new ai;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let R=o.attributes.position.count*E,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*w*4*f),L=new Qx(T,R,w,f);L.type=Gr,L.needsUpdate=!0;const M=E*4;for(let k=0;k<f;k++){const B=p[k],N=S[k],$=x[k],Z=R*w*4*k;for(let te=0;te<B.count;te++){const Y=te*M;_===!0&&(r.fromBufferAttribute(B,te),T[Z+Y+0]=r.x,T[Z+Y+1]=r.y,T[Z+Y+2]=r.z,T[Z+Y+3]=0),g===!0&&(r.fromBufferAttribute(N,te),T[Z+Y+4]=r.x,T[Z+Y+5]=r.y,T[Z+Y+6]=r.z,T[Z+Y+7]=0),m===!0&&(r.fromBufferAttribute($,te),T[Z+Y+8]=r.x,T[Z+Y+9]=r.y,T[Z+Y+10]=r.z,T[Z+Y+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new st(R,w)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function xR(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class uy extends Wi{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Ja,u!==Ja&&u!==Ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ja&&(n=fo),n===void 0&&u===Ml&&(n=Dl),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fy=new Wi,hy=new uy(1,1);hy.compareFunction=Kx;const dy=new Qx,py=new nw,my=new oy,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),h_=new Float32Array(4);function vo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=l_[r];if(s===void 0&&(s=new Float32Array(r),l_[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nf(i,e){let t=c_[e];t===void 0&&(t=new Int32Array(e),c_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function SR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function MR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function ER(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;h_.set(n),i.uniformMatrix2fv(this.addr,!1,h_),Qt(t,n)}}function TR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;f_.set(n),i.uniformMatrix3fv(this.addr,!1,f_),Qt(t,n)}}function wR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;u_.set(n),i.uniformMatrix4fv(this.addr,!1,u_),Qt(t,n)}}function AR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function CR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function RR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function PR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function LR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function IR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function OR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function NR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?hy:fy;t.setTexture2D(e||s,r)}function UR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||py,r)}function FR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||my,r)}function kR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||dy,r)}function BR(i){switch(i){case 5126:return yR;case 35664:return bR;case 35665:return SR;case 35666:return MR;case 35674:return ER;case 35675:return TR;case 35676:return wR;case 5124:case 35670:return AR;case 35667:case 35671:return CR;case 35668:case 35672:return RR;case 35669:case 35673:return PR;case 5125:return LR;case 36294:return DR;case 36295:return IR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return NR;case 35679:case 36299:case 36307:return UR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return kR}}function zR(i,e){i.uniform1fv(this.addr,e)}function VR(i,e){const t=vo(e,this.size,2);i.uniform2fv(this.addr,t)}function HR(i,e){const t=vo(e,this.size,3);i.uniform3fv(this.addr,t)}function GR(i,e){const t=vo(e,this.size,4);i.uniform4fv(this.addr,t)}function WR(i,e){const t=vo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function XR(i,e){const t=vo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function YR(i,e){const t=vo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qR(i,e){i.uniform1iv(this.addr,e)}function jR(i,e){i.uniform2iv(this.addr,e)}function $R(i,e){i.uniform3iv(this.addr,e)}function KR(i,e){i.uniform4iv(this.addr,e)}function ZR(i,e){i.uniform1uiv(this.addr,e)}function JR(i,e){i.uniform2uiv(this.addr,e)}function QR(i,e){i.uniform3uiv(this.addr,e)}function e2(i,e){i.uniform4uiv(this.addr,e)}function t2(i,e,t){const n=this.cache,r=e.length,s=nf(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||fy,s[a])}function i2(i,e,t){const n=this.cache,r=e.length,s=nf(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||py,s[a])}function n2(i,e,t){const n=this.cache,r=e.length,s=nf(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||my,s[a])}function r2(i,e,t){const n=this.cache,r=e.length,s=nf(t,r);Jt(n,s)||(i.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||dy,s[a])}function s2(i){switch(i){case 5126:return zR;case 35664:return VR;case 35665:return HR;case 35666:return GR;case 35674:return WR;case 35675:return XR;case 35676:return YR;case 5124:case 35670:return qR;case 35667:case 35671:return jR;case 35668:case 35672:return $R;case 35669:case 35673:return KR;case 5125:return ZR;case 36294:return JR;case 36295:return QR;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return r2}}class a2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=BR(t.type)}}class o2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s2(t.type)}}class l2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function d_(i,e){i.seq.push(e),i.map[e.id]=e}function c2(i,e,t){const n=i.name,r=n.length;for(mh.lastIndex=0;;){const s=mh.exec(n),a=mh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){d_(t,c===void 0?new a2(o,i,e):new o2(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new l2(o),d_(t,f)),t=f}}}class Jc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);c2(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function p_(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const u2=37297;let f2=0;function h2(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function d2(i){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(i);let n;switch(e===t?n="":e===Tu&&t===Eu?n="LinearDisplayP3ToLinearSRGB":e===Eu&&t===Tu&&(n="LinearSRGBToLinearDisplayP3"),i){case fs:case ef:return[n,"LinearTransferOETF"];case On:case yp:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function m_(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+h2(i.getShaderSource(e),a)}else return r}function p2(i,e){const t=d2(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function m2(i,e){let t;switch(e){case bT:t="Linear";break;case ST:t="Reinhard";break;case MT:t="OptimizedCineon";break;case ET:t="ACESFilmic";break;case wT:t="AgX";break;case AT:t="Neutral";break;case TT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function g2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function _2(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v2(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ho(i){return i!==""}function g_(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x2=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(i){return i.replace(x2,b2)}const y2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function b2(i,e){let t=Qe[e];if(t===void 0){const n=y2.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return md(t)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(i){return i.replace(S2,M2)}function M2(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function x_(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bx?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qE?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sr&&(e="SHADOWMAP_TYPE_VSM"),e}function T2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case Qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function A2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xp:e="ENVMAP_BLENDING_MULTIPLY";break;case xT:e="ENVMAP_BLENDING_MIX";break;case yT:e="ENVMAP_BLENDING_ADD";break}return e}function C2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function R2(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=E2(t),c=T2(t),u=w2(t),f=A2(t),h=C2(t),d=g2(t),_=_2(s),g=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(m=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zr?"#define TONE_MAPPING":"",t.toneMapping!==Zr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Zr?m2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,p2("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),a=md(a),a=g_(a,t),a=__(a,t),o=md(o),o=g_(o,t),o=__(o,t),a=v_(a),o=v_(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,E=S+p+o,R=p_(r,r.VERTEX_SHADER,x),w=p_(r,r.FRAGMENT_SHADER,E);r.attachShader(g,R),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(k){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(w).trim();let Z=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,R,w);else{const Y=m_(r,R,"vertex"),H=m_(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+B+`
`+Y+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||$==="")&&(te=!1);te&&(k.diagnostics={runnable:Z,programLog:B,vertexShader:{log:N,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(R),r.deleteShader(w),L=new Jc(r,g),M=v2(r,g)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(g,u2)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let P2=0;class L2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new D2(e),t.set(e,n)),n}}class D2{constructor(e){this.id=P2++,this.code=e,this.usedTimes=0}}function I2(i,e,t,n,r,s,a){const o=new ey,l=new L2,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,k,B,N){const $=B.fog,Z=N.geometry,te=M.isMeshStandardMaterial?B.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),H=Y&&Y.mapping===Qu?Y.image.height:null,se=_[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const P=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,he=P!==void 0?P.length:0;let we=0;Z.morphAttributes.position!==void 0&&(we=1),Z.morphAttributes.normal!==void 0&&(we=2),Z.morphAttributes.color!==void 0&&(we=3);let $e,ee,le,me;if(se){const yt=Fn[se];$e=yt.vertexShader,ee=yt.fragmentShader}else $e=M.vertexShader,ee=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const ue=i.getRenderTarget(),Pe=N.isInstancedMesh===!0,Ie=N.isBatchedMesh===!0,Ve=!!M.map,W=!!M.matcap,ke=!!Y,C=!!M.aoMap,I=!!M.lightMap,G=!!M.bumpMap,Q=!!M.normalMap,v=!!M.displacementMap,y=!!M.emissiveMap,O=!!M.metalnessMap,U=!!M.roughnessMap,z=M.anisotropy>0,F=M.clearcoat>0,re=M.iridescence>0,J=M.sheen>0,ne=M.transmission>0,ce=z&&!!M.anisotropyMap,ie=F&&!!M.clearcoatMap,oe=F&&!!M.clearcoatNormalMap,ge=F&&!!M.clearcoatRoughnessMap,de=re&&!!M.iridescenceMap,xe=re&&!!M.iridescenceThicknessMap,Ae=J&&!!M.sheenColorMap,Ke=J&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Ze=!!M.specularColorMap,We=!!M.specularIntensityMap,ye=ne&&!!M.transmissionMap,D=ne&&!!M.thicknessMap,ae=!!M.gradientMap,pe=!!M.alphaMap,Me=M.alphaTest>0,Ce=!!M.alphaHash,it=!!M.extensions;let ft=Zr;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ft=i.toneMapping);const pt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:ee,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ie,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:fs,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:W,envMap:ke,envMapMode:ke&&Y.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:I,bumpMap:G,normalMap:Q,displacementMap:h&&v,emissiveMap:y,normalMapObjectSpace:Q&&M.normalMapType===VT,normalMapTangentSpace:Q&&M.normalMapType===$x,metalnessMap:O,roughnessMap:U,anisotropy:z,anisotropyMap:ce,clearcoat:F,clearcoatMap:ie,clearcoatNormalMap:oe,clearcoatRoughnessMap:ge,iridescence:re,iridescenceMap:de,iridescenceThicknessMap:xe,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:Ke,specularMap:qe,specularColorMap:Ze,specularIntensityMap:We,transmission:ne,transmissionMap:ye,thicknessMap:D,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Za&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:Me,alphaHash:Ce,combine:M.combine,mapUv:Ve&&g(M.map.channel),aoMapUv:C&&g(M.aoMap.channel),lightMapUv:I&&g(M.lightMap.channel),bumpMapUv:G&&g(M.bumpMap.channel),normalMapUv:Q&&g(M.normalMap.channel),displacementMapUv:v&&g(M.displacementMap.channel),emissiveMapUv:y&&g(M.emissiveMap.channel),metalnessMapUv:O&&g(M.metalnessMap.channel),roughnessMapUv:U&&g(M.roughnessMap.channel),anisotropyMapUv:ce&&g(M.anisotropyMap.channel),clearcoatMapUv:ie&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&g(M.sheenRoughnessMap.channel),specularMapUv:qe&&g(M.specularMap.channel),specularColorMapUv:Ze&&g(M.specularColorMap.channel),specularIntensityMapUv:We&&g(M.specularIntensityMap.channel),transmissionMapUv:ye&&g(M.transmissionMap.channel),thicknessMapUv:D&&g(M.thicknessMap.channel),alphaMapUv:pe&&g(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Q||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(Ve||pe),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:we,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===Tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ur,flipSided:M.side===Gi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:it&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)b.push(k),b.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(S(b,M),x(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),M.push(o.mask)}function E(M){const b=_[M.type];let k;if(b){const B=Fn[b];k=gw.clone(B.uniforms)}else k=M.uniforms;return k}function R(M,b){let k;for(let B=0,N=u.length;B<N;B++){const $=u[B];if($.cacheKey===b){k=$,++k.usedTimes;break}}return k===void 0&&(k=new R2(i,b,M,s),u.push(k)),k}function w(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:L}}function O2(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function N2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function b_(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,d,_,g,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function o(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||N2),n.length>1&&n.sort(h||y_),r.length>1&&r.sort(h||y_)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function U2(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new b_,i.set(n,[a])):r>=s.length?(a=new b_,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function F2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ut};break;case"SpotLight":t={position:new j,direction:new j,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function k2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let B2=0;function z2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V2(i){const e=new F2,t=k2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const r=new j,s=new Gt,a=new Gt;function o(c,u){let f=0,h=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let _=0,g=0,m=0,p=0,S=0,x=0,E=0,R=0,w=0,T=0,L=0;c.sort(z2);const M=u===!0?Math.PI:1;for(let k=0,B=c.length;k<B;k++){const N=c[k],$=N.color,Z=N.intensity,te=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=$.r*Z*M,h+=$.g*Z*M,d+=$.b*Z*M;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],Z);L++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const se=N.shadow,P=t.get(N);P.shadowBias=se.bias,P.shadowNormalBias=se.normalBias,P.shadowRadius=se.radius,P.shadowMapSize=se.mapSize,n.directionalShadow[_]=P,n.directionalShadowMap[_]=Y,n.directionalShadowMatrix[_]=N.shadow.matrix,x++}n.directional[_]=H,_++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy($).multiplyScalar(Z*M),H.distance=te,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[m]=H;const se=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,se.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[m]=se.matrix,N.castShadow){const P=t.get(N);P.shadowBias=se.bias,P.shadowNormalBias=se.normalBias,P.shadowRadius=se.radius,P.shadowMapSize=se.mapSize,n.spotShadow[m]=P,n.spotShadowMap[m]=Y,R++}m++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy($).multiplyScalar(Z),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=H,p++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*M),H.distance=N.distance,H.decay=N.decay,N.castShadow){const se=N.shadow,P=t.get(N);P.shadowBias=se.bias,P.shadowNormalBias=se.normalBias,P.shadowRadius=se.radius,P.shadowMapSize=se.mapSize,P.shadowCameraNear=se.camera.near,P.shadowCameraFar=se.camera.far,n.pointShadow[g]=P,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=N.shadow.matrix,E++}n.point[g]=H,g++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(Z*M),H.groundColor.copy(N.groundColor).multiplyScalar(Z*M),n.hemi[S]=H,S++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==_||b.pointLength!==g||b.spotLength!==m||b.rectAreaLength!==p||b.hemiLength!==S||b.numDirectionalShadows!==x||b.numPointShadows!==E||b.numSpotShadows!==R||b.numSpotMaps!==w||b.numLightProbes!==L)&&(n.directional.length=_,n.spot.length=m,n.rectArea.length=p,n.point.length=g,n.hemi.length=S,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=R+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,b.directionalLength=_,b.pointLength=g,b.spotLength=m,b.rectAreaLength=p,b.hemiLength=S,b.numDirectionalShadows=x,b.numPointShadows=E,b.numSpotShadows=R,b.numSpotMaps=w,b.numLightProbes=L,n.version=B2++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(x.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function S_(i){const e=new V2(i),t=[],n=[];function r(){t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function H2(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new S_(i),e.set(r,[o])):s>=a.length?(o=new S_(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class G2 extends Ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W2 extends Ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Y2=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function q2(i,e,t){let n=new Sp;const r=new st,s=new st,a=new ai,o=new G2({depthPacking:zT}),l=new W2,c={},u=t.maxTextureSize,f={[ss]:Gi,[Gi]:ss,[ur]:ur},h=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:X2,fragmentShader:Y2}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new hs;_.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bx;let p=this.type;this.render=function(w,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Kr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=p!==sr&&this.type===sr,$=p===sr&&this.type!==sr;for(let Z=0,te=w.length;Z<te;Z++){const Y=w[Z],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||N===!0||$===!0){const he=this.type!==sr?{minFilter:_n,magFilter:_n}:{};H.map!==null&&H.map.dispose(),H.map=new ia(r.x,r.y,he),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const P=H.getViewportCount();for(let he=0;he<P;he++){const we=H.getViewport(he);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),B.viewport(a),H.updateMatrices(Y,he),n=H.getFrustum(),E(T,L,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===sr&&S(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,k)};function S(w,T){const L=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ia(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,L,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,L,d,g,null)}function x(w,T,L,M){let b=null;const k=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)b=k;else if(b=L.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=b.uuid,N=T.uuid;let $=c[B];$===void 0&&($={},c[B]=$);let Z=$[N];Z===void 0&&(Z=b.clone(),$[N]=Z,T.addEventListener("dispose",R)),b=Z}if(b.visible=T.visible,b.wireframe=T.wireframe,M===sr?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=i.properties.get(b);B.light=L}return b}function E(w,T,L,M,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===sr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const N=e.update(w),$=w.material;if(Array.isArray($)){const Z=N.groups;for(let te=0,Y=Z.length;te<Y;te++){const H=Z[te],se=$[H.materialIndex];if(se&&se.visible){const P=x(w,se,M,b);w.onBeforeShadow(i,w,T,L,N,P,H),i.renderBufferDirect(L,null,N,P,w,H),w.onAfterShadow(i,w,T,L,N,P,H)}}}else if($.visible){const Z=x(w,$,M,b);w.onBeforeShadow(i,w,T,L,N,Z,null),i.renderBufferDirect(L,null,N,Z,w,null),w.onAfterShadow(i,w,T,L,N,Z,null)}}const B=w.children;for(let N=0,$=B.length;N<$;N++)E(B[N],T,L,M,b)}function R(w){w.target.removeEventListener("dispose",R);for(const L in c){const M=c[L],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function j2(i){function e(){let D=!1;const ae=new ai;let pe=null;const Me=new ai(0,0,0,0);return{setMask:function(Ce){pe!==Ce&&!D&&(i.colorMask(Ce,Ce,Ce,Ce),pe=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,it,ft,pt,yt){yt===!0&&(Ce*=pt,it*=pt,ft*=pt),ae.set(Ce,it,ft,pt),Me.equals(ae)===!1&&(i.clearColor(Ce,it,ft,pt),Me.copy(ae))},reset:function(){D=!1,pe=null,Me.set(-1,0,0,0)}}}function t(){let D=!1,ae=null,pe=null,Me=null;return{setTest:function(Ce){Ce?me(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(Ce){ae!==Ce&&!D&&(i.depthMask(Ce),ae=Ce)},setFunc:function(Ce){if(pe!==Ce){switch(Ce){case hT:i.depthFunc(i.NEVER);break;case dT:i.depthFunc(i.ALWAYS);break;case pT:i.depthFunc(i.LESS);break;case bu:i.depthFunc(i.LEQUAL);break;case mT:i.depthFunc(i.EQUAL);break;case gT:i.depthFunc(i.GEQUAL);break;case _T:i.depthFunc(i.GREATER);break;case vT:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){Me!==Ce&&(i.clearDepth(Ce),Me=Ce)},reset:function(){D=!1,ae=null,pe=null,Me=null}}}function n(){let D=!1,ae=null,pe=null,Me=null,Ce=null,it=null,ft=null,pt=null,yt=null;return{setTest:function(ht){D||(ht?me(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(ht){ae!==ht&&!D&&(i.stencilMask(ht),ae=ht)},setFunc:function(ht,Ue,Le){(pe!==ht||Me!==Ue||Ce!==Le)&&(i.stencilFunc(ht,Ue,Le),pe=ht,Me=Ue,Ce=Le)},setOp:function(ht,Ue,Le){(it!==ht||ft!==Ue||pt!==Le)&&(i.stencilOp(ht,Ue,Le),it=ht,ft=Ue,pt=Le)},setLocked:function(ht){D=ht},setClear:function(ht){yt!==ht&&(i.clearStencil(ht),yt=ht)},reset:function(){D=!1,ae=null,pe=null,Me=null,Ce=null,it=null,ft=null,pt=null,yt=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,m=null,p=null,S=null,x=null,E=null,R=null,w=new ut(0,0,0),T=0,L=!1,M=null,b=null,k=null,B=null,N=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,te=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=te>=2);let H=null,se={};const P=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),we=new ai().fromArray(P),$e=new ai().fromArray(he);function ee(D,ae,pe,Me){const Ce=new Uint8Array(4),it=i.createTexture();i.bindTexture(D,it),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<pe;ft++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(ae+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return it}const le={};le[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(i.DEPTH_TEST),s.setFunc(bu),G(!1),Q(rg),me(i.CULL_FACE),C(Kr);function me(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function ue(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Pe(D,ae){return u[D]!==ae?(i.bindFramebuffer(D,ae),u[D]=ae,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ie(D,ae){let pe=h,Me=!1;if(D){pe=f.get(ae),pe===void 0&&(pe=[],f.set(ae,pe));const Ce=D.textures;if(pe.length!==Ce.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let it=0,ft=Ce.length;it<ft;it++)pe[it]=i.COLOR_ATTACHMENT0+it;pe.length=Ce.length,Me=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Me=!0);Me&&i.drawBuffers(pe)}function Ve(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const W={[Ls]:i.FUNC_ADD,[$E]:i.FUNC_SUBTRACT,[KE]:i.FUNC_REVERSE_SUBTRACT};W[ZE]=i.MIN,W[JE]=i.MAX;const ke={[QE]:i.ZERO,[eT]:i.ONE,[tT]:i.SRC_COLOR,[ld]:i.SRC_ALPHA,[oT]:i.SRC_ALPHA_SATURATE,[sT]:i.DST_COLOR,[nT]:i.DST_ALPHA,[iT]:i.ONE_MINUS_SRC_COLOR,[cd]:i.ONE_MINUS_SRC_ALPHA,[aT]:i.ONE_MINUS_DST_COLOR,[rT]:i.ONE_MINUS_DST_ALPHA,[lT]:i.CONSTANT_COLOR,[cT]:i.ONE_MINUS_CONSTANT_COLOR,[uT]:i.CONSTANT_ALPHA,[fT]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,ae,pe,Me,Ce,it,ft,pt,yt,ht){if(D===Kr){_===!0&&(ue(i.BLEND),_=!1);return}if(_===!1&&(me(i.BLEND),_=!0),D!==jE){if(D!==g||ht!==L){if((m!==Ls||x!==Ls)&&(i.blendEquation(i.FUNC_ADD),m=Ls,x=Ls),ht)switch(D){case Za:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sg:i.blendFunc(i.ONE,i.ONE);break;case ag:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case og:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sg:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ag:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case og:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,S=null,E=null,R=null,w.set(0,0,0),T=0,g=D,L=ht}return}Ce=Ce||ae,it=it||pe,ft=ft||Me,(ae!==m||Ce!==x)&&(i.blendEquationSeparate(W[ae],W[Ce]),m=ae,x=Ce),(pe!==p||Me!==S||it!==E||ft!==R)&&(i.blendFuncSeparate(ke[pe],ke[Me],ke[it],ke[ft]),p=pe,S=Me,E=it,R=ft),(pt.equals(w)===!1||yt!==T)&&(i.blendColor(pt.r,pt.g,pt.b,yt),w.copy(pt),T=yt),g=D,L=!1}function I(D,ae){D.side===ur?ue(i.CULL_FACE):me(i.CULL_FACE);let pe=D.side===Gi;ae&&(pe=!pe),G(pe),D.blending===Za&&D.transparent===!1?C(Kr):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Me=D.stencilWrite;a.setTest(Me),Me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),y(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Q(D){D!==XE?(me(i.CULL_FACE),D!==b&&(D===rg?i.cullFace(i.BACK):D===YE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),b=D}function v(D){D!==k&&(Z&&i.lineWidth(D),k=D)}function y(D,ae,pe){D?(me(i.POLYGON_OFFSET_FILL),(B!==ae||N!==pe)&&(i.polygonOffset(ae,pe),B=ae,N=pe)):ue(i.POLYGON_OFFSET_FILL)}function O(D){D?me(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function U(D){D===void 0&&(D=i.TEXTURE0+$-1),H!==D&&(i.activeTexture(D),H=D)}function z(D,ae,pe){pe===void 0&&(H===null?pe=i.TEXTURE0+$-1:pe=H);let Me=se[pe];Me===void 0&&(Me={type:void 0,texture:void 0},se[pe]=Me),(Me.type!==D||Me.texture!==ae)&&(H!==pe&&(i.activeTexture(pe),H=pe),i.bindTexture(D,ae||le[D]),Me.type=D,Me.texture=ae)}function F(){const D=se[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(D){we.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function qe(D){$e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$e.copy(D))}function Ze(D,ae){let pe=l.get(ae);pe===void 0&&(pe=new WeakMap,l.set(ae,pe));let Me=pe.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(ae,D.name),pe.set(D,Me))}function We(D,ae){const Me=l.get(ae).get(D);o.get(ae)!==Me&&(i.uniformBlockBinding(ae,Me,D.__bindingPointIndex),o.set(ae,Me))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,se={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,m=null,p=null,S=null,x=null,E=null,R=null,w=new ut(0,0,0),T=0,L=!1,M=null,b=null,k=null,B=null,N=null,we.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:me,disable:ue,bindFramebuffer:Pe,drawBuffers:Ie,useProgram:Ve,setBlending:C,setMaterial:I,setFlipSided:G,setCullFace:Q,setLineWidth:v,setPolygonOffset:y,setScissorTest:O,activeTexture:U,bindTexture:z,unbindTexture:F,compressedTexImage2D:re,compressedTexImage3D:J,texImage2D:xe,texImage3D:Ae,updateUBOMapping:Ze,uniformBlockBinding:We,texStorage2D:ge,texStorage3D:de,texSubImage2D:ne,texSubImage3D:ce,compressedTexSubImage2D:ie,compressedTexSubImage3D:oe,scissor:Ke,viewport:qe,reset:ye}}function $2(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(v,y){return d?new OffscreenCanvas(v,y):Au("canvas")}function g(v,y,O){let U=1;const z=Q(v);if((z.width>O||z.height>O)&&(U=O/Math.max(z.width,z.height)),U<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const F=Math.floor(U*z.width),re=Math.floor(U*z.height);f===void 0&&(f=_(F,re));const J=y?_(F,re):f;return J.width=F,J.height=re,J.getContext("2d").drawImage(v,0,0,F,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+F+"x"+re+")."),J}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),v;return v}function m(v){return v.generateMipmaps&&v.minFilter!==_n&&v.minFilter!==wn}function p(v){i.generateMipmap(v)}function S(v,y,O,U,z=!1){if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let F=y;if(y===i.RED&&(O===i.FLOAT&&(F=i.R32F),O===i.HALF_FLOAT&&(F=i.R16F),O===i.UNSIGNED_BYTE&&(F=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(F=i.R8UI),O===i.UNSIGNED_SHORT&&(F=i.R16UI),O===i.UNSIGNED_INT&&(F=i.R32UI),O===i.BYTE&&(F=i.R8I),O===i.SHORT&&(F=i.R16I),O===i.INT&&(F=i.R32I)),y===i.RG&&(O===i.FLOAT&&(F=i.RG32F),O===i.HALF_FLOAT&&(F=i.RG16F),O===i.UNSIGNED_BYTE&&(F=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(F=i.RG8UI),O===i.UNSIGNED_SHORT&&(F=i.RG16UI),O===i.UNSIGNED_INT&&(F=i.RG32UI),O===i.BYTE&&(F=i.RG8I),O===i.SHORT&&(F=i.RG16I),O===i.INT&&(F=i.RG32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),y===i.RGBA){const re=z?Mu:vt.getTransfer(U);O===i.FLOAT&&(F=i.RGBA32F),O===i.HALF_FLOAT&&(F=i.RGBA16F),O===i.UNSIGNED_BYTE&&(F=re===Tt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function x(v,y){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==_n&&v.minFilter!==wn?Math.log2(Math.max(y.width,y.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?y.mipmaps.length:1}function E(v){const y=v.target;y.removeEventListener("dispose",E),w(y),y.isVideoTexture&&u.delete(y)}function R(v){const y=v.target;y.removeEventListener("dispose",R),L(y)}function w(v){const y=n.get(v);if(y.__webglInit===void 0)return;const O=v.source,U=h.get(O);if(U){const z=U[y.__cacheKey];z.usedTimes--,z.usedTimes===0&&T(v),Object.keys(U).length===0&&h.delete(O)}n.remove(v)}function T(v){const y=n.get(v);i.deleteTexture(y.__webglTexture);const O=v.source,U=h.get(O);delete U[y.__cacheKey],a.memory.textures--}function L(v){const y=n.get(v);if(v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(y.__webglFramebuffer[U]))for(let z=0;z<y.__webglFramebuffer[U].length;z++)i.deleteFramebuffer(y.__webglFramebuffer[U][z]);else i.deleteFramebuffer(y.__webglFramebuffer[U]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[U])}else{if(Array.isArray(y.__webglFramebuffer))for(let U=0;U<y.__webglFramebuffer.length;U++)i.deleteFramebuffer(y.__webglFramebuffer[U]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let U=0;U<y.__webglColorRenderbuffer.length;U++)y.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[U]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=v.textures;for(let U=0,z=O.length;U<z;U++){const F=n.get(O[U]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(O[U])}n.remove(v)}let M=0;function b(){M=0}function k(){const v=M;return v>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),M+=1,v}function B(v){const y=[];return y.push(v.wrapS),y.push(v.wrapT),y.push(v.wrapR||0),y.push(v.magFilter),y.push(v.minFilter),y.push(v.anisotropy),y.push(v.internalFormat),y.push(v.format),y.push(v.type),y.push(v.generateMipmaps),y.push(v.premultiplyAlpha),y.push(v.flipY),y.push(v.unpackAlignment),y.push(v.colorSpace),y.join()}function N(v,y){const O=n.get(v);if(v.isVideoTexture&&I(v),v.isRenderTargetTexture===!1&&v.version>0&&O.__version!==v.version){const U=v.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(O,v,y);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function $(v,y){const O=n.get(v);if(v.version>0&&O.__version!==v.version){we(O,v,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function Z(v,y){const O=n.get(v);if(v.version>0&&O.__version!==v.version){we(O,v,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function te(v,y){const O=n.get(v);if(v.version>0&&O.__version!==v.version){$e(O,v,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const Y={[hd]:i.REPEAT,[Us]:i.CLAMP_TO_EDGE,[dd]:i.MIRRORED_REPEAT},H={[_n]:i.NEAREST,[CT]:i.NEAREST_MIPMAP_NEAREST,[ac]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[kf]:i.LINEAR_MIPMAP_NEAREST,[Fs]:i.LINEAR_MIPMAP_LINEAR},se={[HT]:i.NEVER,[jT]:i.ALWAYS,[GT]:i.LESS,[Kx]:i.LEQUAL,[WT]:i.EQUAL,[qT]:i.GEQUAL,[XT]:i.GREATER,[YT]:i.NOTEQUAL};function P(v,y){if(y.type===Gr&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===wn||y.magFilter===kf||y.magFilter===ac||y.magFilter===Fs||y.minFilter===wn||y.minFilter===kf||y.minFilter===ac||y.minFilter===Fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(v,i.TEXTURE_WRAP_S,Y[y.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,Y[y.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,Y[y.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,H[y.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,H[y.minFilter]),y.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_n||y.minFilter!==ac&&y.minFilter!==Fs||y.type===Gr&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(v,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function he(v,y){let O=!1;v.__webglInit===void 0&&(v.__webglInit=!0,y.addEventListener("dispose",E));const U=y.source;let z=h.get(U);z===void 0&&(z={},h.set(U,z));const F=B(y);if(F!==v.__cacheKey){z[F]===void 0&&(z[F]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),z[F].usedTimes++;const re=z[v.__cacheKey];re!==void 0&&(z[v.__cacheKey].usedTimes--,re.usedTimes===0&&T(y)),v.__cacheKey=F,v.__webglTexture=z[F].texture}return O}function we(v,y,O){let U=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(U=i.TEXTURE_3D);const z=he(v,y),F=y.source;t.bindTexture(U,v.__webglTexture,i.TEXTURE0+O);const re=n.get(F);if(F.version!==re.__version||z===!0){t.activeTexture(i.TEXTURE0+O);const J=vt.getPrimaries(vt.workingColorSpace),ne=y.colorSpace===Fr?null:vt.getPrimaries(y.colorSpace),ce=y.colorSpace===Fr||J===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ie=g(y.image,!1,r.maxTextureSize);ie=G(y,ie);const oe=s.convert(y.format,y.colorSpace),ge=s.convert(y.type);let de=S(y.internalFormat,oe,ge,y.colorSpace,y.isVideoTexture);P(U,y);let xe;const Ae=y.mipmaps,Ke=y.isVideoTexture!==!0&&de!==jx,qe=re.__version===void 0||z===!0,Ze=F.dataReady,We=x(y,ie);if(y.isDepthTexture)de=i.DEPTH_COMPONENT16,y.type===Gr?de=i.DEPTH_COMPONENT32F:y.type===fo?de=i.DEPTH_COMPONENT24:y.type===Dl&&(de=i.DEPTH24_STENCIL8),qe&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,de,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,de,ie.width,ie.height,0,oe,ge,null));else if(y.isDataTexture)if(Ae.length>0){Ke&&qe&&t.texStorage2D(i.TEXTURE_2D,We,de,Ae[0].width,Ae[0].height);for(let ye=0,D=Ae.length;ye<D;ye++)xe=Ae[ye],Ke?Ze&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,xe.width,xe.height,oe,ge,xe.data):t.texImage2D(i.TEXTURE_2D,ye,de,xe.width,xe.height,0,oe,ge,xe.data);y.generateMipmaps=!1}else Ke?(qe&&t.texStorage2D(i.TEXTURE_2D,We,de,ie.width,ie.height),Ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,oe,ge,ie.data)):t.texImage2D(i.TEXTURE_2D,0,de,ie.width,ie.height,0,oe,ge,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,de,Ae[0].width,Ae[0].height,ie.depth);for(let ye=0,D=Ae.length;ye<D;ye++)xe=Ae[ye],y.format!==Gn?oe!==null?Ke?Ze&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,xe.width,xe.height,ie.depth,oe,xe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,de,xe.width,xe.height,ie.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,xe.width,xe.height,ie.depth,oe,ge,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,de,xe.width,xe.height,ie.depth,0,oe,ge,xe.data)}else{Ke&&qe&&t.texStorage2D(i.TEXTURE_2D,We,de,Ae[0].width,Ae[0].height);for(let ye=0,D=Ae.length;ye<D;ye++)xe=Ae[ye],y.format!==Gn?oe!==null?Ke?Ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,xe.width,xe.height,oe,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,de,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Ze&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,xe.width,xe.height,oe,ge,xe.data):t.texImage2D(i.TEXTURE_2D,ye,de,xe.width,xe.height,0,oe,ge,xe.data)}else if(y.isDataArrayTexture)Ke?(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,de,ie.width,ie.height,ie.depth),Ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,oe,ge,ie.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,ie.width,ie.height,ie.depth,0,oe,ge,ie.data);else if(y.isData3DTexture)Ke?(qe&&t.texStorage3D(i.TEXTURE_3D,We,de,ie.width,ie.height,ie.depth),Ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,oe,ge,ie.data)):t.texImage3D(i.TEXTURE_3D,0,de,ie.width,ie.height,ie.depth,0,oe,ge,ie.data);else if(y.isFramebufferTexture){if(qe)if(Ke)t.texStorage2D(i.TEXTURE_2D,We,de,ie.width,ie.height);else{let ye=ie.width,D=ie.height;for(let ae=0;ae<We;ae++)t.texImage2D(i.TEXTURE_2D,ae,de,ye,D,0,oe,ge,null),ye>>=1,D>>=1}}else if(Ae.length>0){if(Ke&&qe){const ye=Q(Ae[0]);t.texStorage2D(i.TEXTURE_2D,We,de,ye.width,ye.height)}for(let ye=0,D=Ae.length;ye<D;ye++)xe=Ae[ye],Ke?Ze&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,oe,ge,xe):t.texImage2D(i.TEXTURE_2D,ye,de,oe,ge,xe);y.generateMipmaps=!1}else if(Ke){if(qe){const ye=Q(ie);t.texStorage2D(i.TEXTURE_2D,We,de,ye.width,ye.height)}Ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,ge,ie)}else t.texImage2D(i.TEXTURE_2D,0,de,oe,ge,ie);m(y)&&p(U),re.__version=F.version,y.onUpdate&&y.onUpdate(y)}v.__version=y.version}function $e(v,y,O){if(y.image.length!==6)return;const U=he(v,y),z=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+O);const F=n.get(z);if(z.version!==F.__version||U===!0){t.activeTexture(i.TEXTURE0+O);const re=vt.getPrimaries(vt.workingColorSpace),J=y.colorSpace===Fr?null:vt.getPrimaries(y.colorSpace),ne=y.colorSpace===Fr||re===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ce=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let D=0;D<6;D++)!ce&&!ie?oe[D]=g(y.image[D],!0,r.maxCubemapSize):oe[D]=ie?y.image[D].image:y.image[D],oe[D]=G(y,oe[D]);const ge=oe[0],de=s.convert(y.format,y.colorSpace),xe=s.convert(y.type),Ae=S(y.internalFormat,de,xe,y.colorSpace),Ke=y.isVideoTexture!==!0,qe=F.__version===void 0||U===!0,Ze=z.dataReady;let We=x(y,ge);P(i.TEXTURE_CUBE_MAP,y);let ye;if(ce){Ke&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Ae,ge.width,ge.height);for(let D=0;D<6;D++){ye=oe[D].mipmaps;for(let ae=0;ae<ye.length;ae++){const pe=ye[ae];y.format!==Gn?de!==null?Ke?Ze&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae,0,0,pe.width,pe.height,de,xe,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae,Ae,pe.width,pe.height,0,de,xe,pe.data)}}}else{if(ye=y.mipmaps,Ke&&qe){ye.length>0&&We++;const D=Q(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Ae,D.width,D.height)}for(let D=0;D<6;D++)if(ie){Ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,oe[D].width,oe[D].height,de,xe,oe[D].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ae,oe[D].width,oe[D].height,0,de,xe,oe[D].data);for(let ae=0;ae<ye.length;ae++){const Me=ye[ae].image[D].image;Ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae+1,0,0,Me.width,Me.height,de,xe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae+1,Ae,Me.width,Me.height,0,de,xe,Me.data)}}else{Ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,de,xe,oe[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ae,de,xe,oe[D]);for(let ae=0;ae<ye.length;ae++){const pe=ye[ae];Ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae+1,0,0,de,xe,pe.image[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae+1,Ae,de,xe,pe.image[D])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),F.__version=z.version,y.onUpdate&&y.onUpdate(y)}v.__version=y.version}function ee(v,y,O,U,z,F){const re=s.convert(O.format,O.colorSpace),J=s.convert(O.type),ne=S(O.internalFormat,re,J,O.colorSpace);if(!n.get(y).__hasExternalTextures){const ie=Math.max(1,y.width>>F),oe=Math.max(1,y.height>>F);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?t.texImage3D(z,F,ne,ie,oe,y.depth,0,re,J,null):t.texImage2D(z,F,ne,ie,oe,0,re,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,v),C(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,z,n.get(O).__webglTexture,0,ke(y)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,z,n.get(O).__webglTexture,F),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(v,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,v),y.depthBuffer&&!y.stencilBuffer){let U=i.DEPTH_COMPONENT24;if(O||C(y)){const z=y.depthTexture;z&&z.isDepthTexture&&(z.type===Gr?U=i.DEPTH_COMPONENT32F:z.type===fo&&(U=i.DEPTH_COMPONENT24));const F=ke(y);C(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,U,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,F,U,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,U,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,v)}else if(y.depthBuffer&&y.stencilBuffer){const U=ke(y);O&&C(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,U,i.DEPTH24_STENCIL8,y.width,y.height):C(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,U,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,v)}else{const U=y.textures;for(let z=0;z<U.length;z++){const F=U[z],re=s.convert(F.format,F.colorSpace),J=s.convert(F.type),ne=S(F.internalFormat,re,J,F.colorSpace),ce=ke(y);O&&C(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ne,y.width,y.height):C(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ne,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ne,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(v,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,v),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),N(y.depthTexture,0);const U=n.get(y.depthTexture).__webglTexture,z=ke(y);if(y.depthTexture.format===Ja)C(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0);else if(y.depthTexture.format===Ml)C(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function ue(v){const y=n.get(v),O=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");me(y.__webglFramebuffer,v)}else if(O){y.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[U]),y.__webglDepthbuffer[U]=i.createRenderbuffer(),le(y.__webglDepthbuffer[U],v,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),le(y.__webglDepthbuffer,v,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(v,y,O){const U=n.get(v);y!==void 0&&ee(U.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ue(v)}function Ie(v){const y=v.texture,O=n.get(v),U=n.get(y);v.addEventListener("dispose",R);const z=v.textures,F=v.isWebGLCubeRenderTarget===!0,re=z.length>1;if(re||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=y.version,a.memory.textures++),F){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let ne=0;ne<y.mipmaps.length;ne++)O.__webglFramebuffer[J][ne]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(re)for(let J=0,ne=z.length;J<ne;J++){const ce=n.get(z[J]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(v.samples>0&&C(v)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<z.length;J++){const ne=z[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const ce=s.convert(ne.format,ne.colorSpace),ie=s.convert(ne.type),oe=S(ne.internalFormat,ce,ie,ne.colorSpace,v.isXRRenderTarget===!0),ge=ke(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,oe,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),le(O.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),P(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)ee(O.__webglFramebuffer[J][ne],v,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else ee(O.__webglFramebuffer[J],v,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let J=0,ne=z.length;J<ne;J++){const ce=z[J],ie=n.get(ce);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),P(i.TEXTURE_2D,ce),ee(O.__webglFramebuffer,v,ce,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,0),m(ce)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(J=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,U.__webglTexture),P(J,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)ee(O.__webglFramebuffer[ne],v,y,i.COLOR_ATTACHMENT0,J,ne);else ee(O.__webglFramebuffer,v,y,i.COLOR_ATTACHMENT0,J,0);m(y)&&p(J),t.unbindTexture()}v.depthBuffer&&ue(v)}function Ve(v){const y=v.textures;for(let O=0,U=y.length;O<U;O++){const z=y[O];if(m(z)){const F=v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(z).__webglTexture;t.bindTexture(F,re),p(F),t.unbindTexture()}}}function W(v){if(v.samples>0&&C(v)===!1){const y=v.textures,O=v.width,U=v.height;let z=i.COLOR_BUFFER_BIT;const F=[],re=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=n.get(v),ne=y.length>1;if(ne)for(let ce=0;ce<y.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){F.push(i.COLOR_ATTACHMENT0+ce),v.depthBuffer&&F.push(re);const ie=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(ie===!1&&(v.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&J.__isTransmissionRenderTarget!==!0&&(z|=i.STENCIL_BUFFER_BIT)),ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,J.__webglColorRenderbuffer[ce]),ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[re])),ne){const oe=n.get(y[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,O,U,0,0,O,U,z,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ce=0;ce<y.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,J.__webglColorRenderbuffer[ce]);const ie=n.get(y[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function ke(v){return Math.min(r.maxSamples,v.samples)}function C(v){const y=n.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function I(v){const y=a.render.frame;u.get(v)!==y&&(u.set(v,y),v.update())}function G(v,y){const O=v.colorSpace,U=v.format,z=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||O!==fs&&O!==Fr&&(vt.getTransfer(O)===Tt?(U!==Gn||z!==Jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Q(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=b,this.setTexture2D=N,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=Pe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=C}function K2(i,e){function t(n,r=Fr){let s;const a=vt.getTransfer(r);if(n===Jr)return i.UNSIGNED_BYTE;if(n===Gx)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wx)return i.UNSIGNED_SHORT_5_5_5_1;if(n===LT)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===RT)return i.BYTE;if(n===PT)return i.SHORT;if(n===Vx)return i.UNSIGNED_SHORT;if(n===Hx)return i.INT;if(n===fo)return i.UNSIGNED_INT;if(n===Gr)return i.FLOAT;if(n===Su)return i.HALF_FLOAT;if(n===DT)return i.ALPHA;if(n===IT)return i.RGB;if(n===Gn)return i.RGBA;if(n===OT)return i.LUMINANCE;if(n===NT)return i.LUMINANCE_ALPHA;if(n===Ja)return i.DEPTH_COMPONENT;if(n===Ml)return i.DEPTH_STENCIL;if(n===UT)return i.RED;if(n===Xx)return i.RED_INTEGER;if(n===FT)return i.RG;if(n===Yx)return i.RG_INTEGER;if(n===qx)return i.RGBA_INTEGER;if(n===Bf||n===zf||n===Vf||n===Hf)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Bf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Bf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lg||n===cg||n===ug||n===fg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ug)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jx)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===hg||n===dg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hg)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pg||n===mg||n===gg||n===_g||n===vg||n===xg||n===yg||n===bg||n===Sg||n===Mg||n===Eg||n===Tg||n===wg||n===Ag)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_g)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wg)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ag)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gf||n===Cg||n===Rg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Gf)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kT||n===Pg||n===Lg||n===Dg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dl?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Z2 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cc extends bi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J2={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Wi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new as({vertexShader:Q2,fragmentShader:eP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wn(new tf(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class iP extends _o{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new tP,m=t.getContextAttributes();let p=null,S=null;const x=[],E=[],R=new st;let w=null;const T=new dn;T.layers.enable(1),T.viewport=new ai;const L=new dn;L.layers.enable(2),L.viewport=new ai;const M=[T,L],b=new Z2;b.layers.enable(1),b.layers.enable(2);let k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=x[ee];return le===void 0&&(le=new gh,x[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=x[ee];return le===void 0&&(le=new gh,x[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=x[ee];return le===void 0&&(le=new gh,x[ee]=le),le.getHandSpace()};function N(ee){const le=E.indexOf(ee.inputSource);if(le===-1)return;const me=x[le];me!==void 0&&(me.update(ee.inputSource,ee.frame,c||a),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<x.length;ee++){const le=E[ee];le!==null&&(E[ee]=null,x[ee].disconnect(le))}k=null,B=null,g.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,S=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ia(d.framebufferWidth,d.framebufferHeight,{format:Gn,type:Jr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,me=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?Ml:Ja,me=m.stencil?Dl:fo);const Pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new ia(h.textureWidth,h.textureHeight,{format:Gn,type:Jr,depthTexture:new uy(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ie=e.properties.get(S);Ie.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(ee){for(let le=0;le<ee.removed.length;le++){const me=ee.removed[le],ue=E.indexOf(me);ue>=0&&(E[ue]=null,x[ue].disconnect(me))}for(let le=0;le<ee.added.length;le++){const me=ee.added[le];let ue=E.indexOf(me);if(ue===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=E.length){E.push(me),ue=Ie;break}else if(E[Ie]===null){E[Ie]=me,ue=Ie;break}if(ue===-1)break}const Pe=x[ue];Pe&&Pe.connect(me)}}const te=new j,Y=new j;function H(ee,le,me){te.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);const ue=te.distanceTo(Y),Pe=le.projectionMatrix.elements,Ie=me.projectionMatrix.elements,Ve=Pe[14]/(Pe[10]-1),W=Pe[14]/(Pe[10]+1),ke=(Pe[9]+1)/Pe[5],C=(Pe[9]-1)/Pe[5],I=(Pe[8]-1)/Pe[0],G=(Ie[8]+1)/Ie[0],Q=Ve*I,v=Ve*G,y=ue/(-I+G),O=y*-I;le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(O),ee.translateZ(y),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const U=Ve+y,z=W+y,F=Q-O,re=v+(ue-O),J=ke*W/z*U,ne=C*W/z*U;ee.projectionMatrix.makePerspective(F,re,J,ne,U,z),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function se(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;g.texture!==null&&(ee.near=g.depthNear,ee.far=g.depthFar),b.near=L.near=T.near=ee.near,b.far=L.far=T.far=ee.far,(k!==b.near||B!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,B=b.far,T.near=k,T.far=B,L.near=k,L.far=B,T.updateProjectionMatrix(),L.updateProjectionMatrix(),ee.updateProjectionMatrix());const le=ee.parent,me=b.cameras;se(b,le);for(let ue=0;ue<me.length;ue++)se(me[ue],le);me.length===2?H(b,T,L):b.projectionMatrix.copy(T.projectionMatrix),P(ee,b,le)};function P(ee,le,me){me===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=pd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null};let he=null;function we(ee,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ue=!1;me.length!==b.cameras.length&&(b.cameras.length=0,ue=!0);for(let Ie=0;Ie<me.length;Ie++){const Ve=me[Ie];let W=null;if(d!==null)W=d.getViewport(Ve);else{const C=f.getViewSubImage(h,Ve);W=C.viewport,Ie===0&&(e.setRenderTargetTextures(S,C.colorTexture,h.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(S))}let ke=M[Ie];ke===void 0&&(ke=new dn,ke.layers.enable(Ie),ke.viewport=new ai,M[Ie]=ke),ke.matrix.fromArray(Ve.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ve.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(W.x,W.y,W.width,W.height),Ie===0&&(b.matrix.copy(ke.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ue===!0&&b.cameras.push(ke)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ie=f.getDepthInformation(me[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,r.renderState)}}for(let me=0;me<x.length;me++){const ue=E[me],Pe=x[me];ue!==null&&Pe!==void 0&&Pe.update(ue,le,c||a)}g.render(e,b),he&&he(ee,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const $e=new ly;$e.setAnimationLoop(we),this.setAnimationLoop=function(ee){he=ee},this.dispose=function(){}}}const Ms=new Jn,nP=new Gt;function rP(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sy(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,E=S.envMapRotation;if(x&&(m.envMap.value=x,Ms.copy(E),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(nP.makeRotationFromEuler(Ms)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const R=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*R,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gi&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sP(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const E=x.program;n.uniformBlockBinding(S,E)}function c(S,x){let E=r[S.id];E===void 0&&(_(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(S,R);const w=e.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function u(S){const x=f();S.__bindingPointIndex=x;const E=i.createBuffer(),R=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=r[S.id],E=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,T=E.length;w<T;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,b=L.length;M<b;M++){const k=L[M];if(d(k,w,M,R)===!0){const B=k.__offset,N=Array.isArray(k.value)?k.value:[k.value];let $=0;for(let Z=0;Z<N.length;Z++){const te=N[Z],Y=g(te);typeof te=="number"||typeof te=="boolean"?(k.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,B+$,k.__data)):te.isMatrix3?(k.__data[0]=te.elements[0],k.__data[1]=te.elements[1],k.__data[2]=te.elements[2],k.__data[3]=0,k.__data[4]=te.elements[3],k.__data[5]=te.elements[4],k.__data[6]=te.elements[5],k.__data[7]=0,k.__data[8]=te.elements[6],k.__data[9]=te.elements[7],k.__data[10]=te.elements[8],k.__data[11]=0):(te.toArray(k.__data,$),$+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,x,E,R){const w=S.value,T=x+"_"+E;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const L=R[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return R[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(S){const x=S.uniforms;let E=0;const R=16;for(let T=0,L=x.length;T<L;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,k=M.length;b<k;b++){const B=M[b],N=Array.isArray(B.value)?B.value:[B.value];for(let $=0,Z=N.length;$<Z;$++){const te=N[$],Y=g(te),H=E%R;H!==0&&R-H<Y.boundary&&(E+=R-H),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=Y.storage}}}const w=E%R;return w>0&&(E+=R-w),S.__size=E,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class aP{constructor(e={}){const{canvas:t=KT(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this._useLegacyLights=!1,this.toneMapping=Zr,this.toneMappingExposure=1;const x=this;let E=!1,R=0,w=0,T=null,L=-1,M=null;const b=new ai,k=new ai;let B=null;const N=new ut(0);let $=0,Z=t.width,te=t.height,Y=1,H=null,se=null;const P=new ai(0,0,Z,te),he=new ai(0,0,Z,te);let we=!1;const $e=new Sp;let ee=!1,le=!1;const me=new Gt,ue=new st,Pe=new j,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return T===null?Y:1}let W=n;function ke(A,V){const q=t.getContext(A,V);return q!==null?q:null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${WE}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),W===null){const V="webgl2";if(W=ke(V,A),W===null)throw ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let C,I,G,Q,v,y,O,U,z,F,re,J,ne,ce,ie,oe,ge,de,xe,Ae,Ke,qe,Ze,We;function ye(){C=new pR(W),C.init(),I=new lR(W,C,e),qe=new K2(W,C),G=new j2(W),Q=new _R(W),v=new O2,y=new $2(W,C,G,v,I,qe,Q),O=new uR(x),U=new dR(x),z=new Mw(W),Ze=new aR(W,z),F=new mR(W,z,Q,Ze),re=new xR(W,F,z,Q),xe=new vR(W,I,y),oe=new cR(v),J=new I2(x,O,U,C,I,Ze,oe),ne=new rP(x,v),ce=new U2,ie=new H2(C),de=new sR(x,O,U,G,re,h,l),ge=new q2(x,re,I),We=new sP(W,Q,I,G),Ae=new oR(W,C,Q),Ke=new gR(W,C,Q),Q.programs=J.programs,x.capabilities=I,x.extensions=C,x.properties=v,x.renderLists=ce,x.shadowMap=ge,x.state=G,x.info=Q}ye();const D=new iP(x,W);this.xr=D,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=C.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=C.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(Z,te,!1))},this.getSize=function(A){return A.set(Z,te)},this.setSize=function(A,V,q=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,te=V,t.width=Math.floor(A*Y),t.height=Math.floor(V*Y),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(Z*Y,te*Y).floor()},this.setDrawingBufferSize=function(A,V,q){Z=A,te=V,Y=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,V,q,K){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,V,q,K),G.viewport(b.copy(P).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,V,q,K){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,V,q,K),G.scissor(k.copy(he).multiplyScalar(Y).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){G.setScissorTest(we=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(A=!0,V=!0,q=!0){let K=0;if(A){let X=!1;if(T!==null){const fe=T.texture.format;X=fe===qx||fe===Yx||fe===Xx}if(X){const fe=T.texture.type,be=fe===Jr||fe===fo||fe===Vx||fe===Dl||fe===Gx||fe===Wx,Ne=de.getClearColor(),ze=de.getClearAlpha(),Oe=Ne.r,Re=Ne.g,Be=Ne.b;be?(d[0]=Oe,d[1]=Re,d[2]=Be,d[3]=ze,W.clearBufferuiv(W.COLOR,0,d)):(_[0]=Oe,_[1]=Re,_[2]=Be,_[3]=ze,W.clearBufferiv(W.COLOR,0,_))}else K|=W.COLOR_BUFFER_BIT}V&&(K|=W.DEPTH_BUFFER_BIT),q&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ce.dispose(),ie.dispose(),v.dispose(),O.dispose(),U.dispose(),re.dispose(),Ze.dispose(),We.dispose(),J.dispose(),D.dispose(),D.removeEventListener("sessionstart",Ue),D.removeEventListener("sessionend",Le),tt.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Q.autoReset,V=ge.enabled,q=ge.autoUpdate,K=ge.needsUpdate,X=ge.type;ye(),Q.autoReset=A,ge.enabled=V,ge.autoUpdate=q,ge.needsUpdate=K,ge.type=X}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ce(A){const V=A.target;V.removeEventListener("dispose",Ce),it(V)}function it(A){ft(A),v.remove(A)}function ft(A){const V=v.get(A).programs;V!==void 0&&(V.forEach(function(q){J.releaseProgram(q)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,K,X,fe){V===null&&(V=Ie);const be=X.isMesh&&X.matrixWorld.determinant()<0,Ne=Lt(A,V,q,K,X);G.setMaterial(K,be);let ze=q.index,Oe=1;if(K.wireframe===!0){if(ze=F.getWireframeAttribute(q),ze===void 0)return;Oe=2}const Re=q.drawRange,Be=q.attributes.position;let Et=Re.start*Oe,ui=(Re.start+Re.count)*Oe;fe!==null&&(Et=Math.max(Et,fe.start*Oe),ui=Math.min(ui,(fe.start+fe.count)*Oe)),ze!==null?(Et=Math.max(Et,0),ui=Math.min(ui,ze.count)):Be!=null&&(Et=Math.max(Et,0),ui=Math.min(ui,Be.count));const Dt=ui-Et;if(Dt<0||Dt===1/0)return;Ze.setup(X,K,Ne,q,ze);let Wt,_t=Ae;if(ze!==null&&(Wt=z.get(ze),_t=Ke,_t.setIndex(Wt)),X.isMesh)K.wireframe===!0?(G.setLineWidth(K.wireframeLinewidth*Ve()),_t.setMode(W.LINES)):_t.setMode(W.TRIANGLES);else if(X.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),G.setLineWidth(Ye*Ve()),X.isLineSegments?_t.setMode(W.LINES):X.isLineLoop?_t.setMode(W.LINE_LOOP):_t.setMode(W.LINE_STRIP)}else X.isPoints?_t.setMode(W.POINTS):X.isSprite&&_t.setMode(W.TRIANGLES);if(X.isBatchedMesh)_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)_t.renderInstances(Et,Dt,X.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Qn=Math.min(q.instanceCount,Ye);_t.renderInstances(Et,Dt,Qn)}else _t.render(Et,Dt)};function pt(A,V,q){A.transparent===!0&&A.side===ur&&A.forceSinglePass===!1?(A.side=Gi,A.needsUpdate=!0,Je(A,V,q),A.side=ss,A.needsUpdate=!0,Je(A,V,q),A.side=ur):Je(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),m=ie.get(q),m.init(),S.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),A!==q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(x._useLegacyLights);const K=new Set;return A.traverse(function(X){const fe=X.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){const Ne=fe[be];pt(Ne,q,X),K.add(Ne)}else pt(fe,q,X),K.add(fe)}),S.pop(),m=null,K},this.compileAsync=function(A,V,q=null){const K=this.compile(A,V,q);return new Promise(X=>{function fe(){if(K.forEach(function(be){v.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){X(A);return}setTimeout(fe,10)}C.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let yt=null;function ht(A){yt&&yt(A)}function Ue(){tt.stop()}function Le(){tt.start()}const tt=new ly;tt.setAnimationLoop(ht),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(A){yt=A,D.setAnimationLoop(A),A===null?tt.stop():tt.start()},D.addEventListener("sessionstart",Ue),D.addEventListener("sessionend",Le),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(V),V=D.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,T),m=ie.get(A,S.length),m.init(),S.push(m),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),$e.setFromProjectionMatrix(me),le=this.localClippingEnabled,ee=oe.init(this.clippingPlanes,le),g=ce.get(A,p.length),g.init(),p.push(g),_e(A,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(H,se),this.info.render.frame++,ee===!0&&oe.beginShadows();const q=m.state.shadowsArray;if(ge.render(q,A,V),ee===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1)&&de.render(g,A),m.setupLights(x._useLegacyLights),V.isArrayCamera){const K=V.cameras;for(let X=0,fe=K.length;X<fe;X++){const be=K[X];Xe(g,A,be,be.viewport)}}else Xe(g,A,V);T!==null&&(y.updateMultisampleRenderTarget(T),y.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,V),Ze.resetDefaultState(),L=-1,M=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function _e(A,V,q,K){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){K&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const be=re.update(A),Ne=A.material;Ne.visible&&g.push(A,be,Ne,q,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const be=re.update(A),Ne=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Pe.copy(be.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Ne)){const ze=be.groups;for(let Oe=0,Re=ze.length;Oe<Re;Oe++){const Be=ze[Oe],Et=Ne[Be.materialIndex];Et&&Et.visible&&g.push(A,be,Et,q,Pe.z,Be)}}else Ne.visible&&g.push(A,be,Ne,q,Pe.z,null)}}const fe=A.children;for(let be=0,Ne=fe.length;be<Ne;be++)_e(fe[be],V,q,K)}function Xe(A,V,q,K){const X=A.opaque,fe=A.transmissive,be=A.transparent;m.setupLightsView(q),ee===!0&&oe.setGlobalState(x.clippingPlanes,q),fe.length>0&&Fe(X,fe,V,q),K&&G.viewport(b.copy(K)),X.length>0&&Ge(X,V,q),fe.length>0&&Ge(fe,V,q),be.length>0&&Ge(be,V,q),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Fe(A,V,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new ia(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?Su:Jr,minFilter:Fs,samples:4,stencilBuffer:s});const Oe=v.get(m.state.transmissionRenderTarget);Oe.__isTransmissionRenderTarget=!0}const fe=m.state.transmissionRenderTarget;x.getDrawingBufferSize(ue),fe.setSize(ue.x,ue.y);const be=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(N),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear();const Ne=x.toneMapping;x.toneMapping=Zr,Ge(A,q,K),y.updateMultisampleRenderTarget(fe),y.updateRenderTargetMipmap(fe);let ze=!1;for(let Oe=0,Re=V.length;Oe<Re;Oe++){const Be=V[Oe],Et=Be.object,ui=Be.geometry,Dt=Be.material,Wt=Be.group;if(Dt.side===ur&&Et.layers.test(K.layers)){const _t=Dt.side;Dt.side=Gi,Dt.needsUpdate=!0,zt(Et,q,K,ui,Dt,Wt),Dt.side=_t,Dt.needsUpdate=!0,ze=!0}}ze===!0&&(y.updateMultisampleRenderTarget(fe),y.updateRenderTargetMipmap(fe)),x.setRenderTarget(be),x.setClearColor(N,$),x.toneMapping=Ne}function Ge(A,V,q){const K=V.isScene===!0?V.overrideMaterial:null;for(let X=0,fe=A.length;X<fe;X++){const be=A[X],Ne=be.object,ze=be.geometry,Oe=K===null?be.material:K,Re=be.group;Ne.layers.test(q.layers)&&zt(Ne,V,q,ze,Oe,Re)}}function zt(A,V,q,K,X,fe){A.onBeforeRender(x,V,q,K,X,fe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(x,V,q,K,A,fe),X.transparent===!0&&X.side===ur&&X.forceSinglePass===!1?(X.side=Gi,X.needsUpdate=!0,x.renderBufferDirect(q,V,K,X,A,fe),X.side=ss,X.needsUpdate=!0,x.renderBufferDirect(q,V,K,X,A,fe),X.side=ur):x.renderBufferDirect(q,V,K,X,A,fe),A.onAfterRender(x,V,q,K,X,fe)}function Je(A,V,q){V.isScene!==!0&&(V=Ie);const K=v.get(A),X=m.state.lights,fe=m.state.shadowsArray,be=X.state.version,Ne=J.getParameters(A,X.state,fe,V,q),ze=J.getProgramCacheKey(Ne);let Oe=K.programs;K.environment=A.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(A.isMeshStandardMaterial?U:O).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Ce),Oe=new Map,K.programs=Oe);let Re=Oe.get(ze);if(Re!==void 0){if(K.currentProgram===Re&&K.lightsStateVersion===be)return jt(A,Ne),Re}else Ne.uniforms=J.getUniforms(A),A.onBuild(q,Ne,x),A.onBeforeCompile(Ne,x),Re=J.acquireProgram(Ne,ze),Oe.set(ze,Re),K.uniforms=Ne.uniforms;const Be=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=oe.uniform),jt(A,Ne),K.needsLights=gt(A),K.lightsStateVersion=be,K.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMap.value=X.state.directionalShadowMap,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotShadowMap.value=X.state.spotShadowMap,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMap.value=X.state.pointShadowMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Re,K.uniformsList=null,Re}function Pt(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Jc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function jt(A,V){const q=v.get(A);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Lt(A,V,q,K,X){V.isScene!==!0&&(V=Ie),y.resetTextureUnits();const fe=V.fog,be=K.isMeshStandardMaterial?V.environment:null,Ne=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:fs,ze=(K.isMeshStandardMaterial?U:O).get(K.envMap||be),Oe=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Re=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!q.morphAttributes.position,Et=!!q.morphAttributes.normal,ui=!!q.morphAttributes.color;let Dt=Zr;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const Wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=Wt!==void 0?Wt.length:0,Ye=v.get(K),Qn=m.state.lights;if(ee===!0&&(le===!0||A!==M)){const ln=A===M&&K.id===L;oe.setState(K,A,ln)}let It=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Qn.state.version||Ye.outputColorSpace!==Ne||X.isBatchedMesh&&Ye.batching===!1||!X.isBatchedMesh&&Ye.batching===!0||X.isInstancedMesh&&Ye.instancing===!1||!X.isInstancedMesh&&Ye.instancing===!0||X.isSkinnedMesh&&Ye.skinning===!1||!X.isSkinnedMesh&&Ye.skinning===!0||X.isInstancedMesh&&Ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ye.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ye.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ye.instancingMorph===!1&&X.morphTexture!==null||Ye.envMap!==ze||K.fog===!0&&Ye.fog!==fe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==oe.numPlanes||Ye.numIntersection!==oe.numIntersection)||Ye.vertexAlphas!==Oe||Ye.vertexTangents!==Re||Ye.morphTargets!==Be||Ye.morphNormals!==Et||Ye.morphColors!==ui||Ye.toneMapping!==Dt||Ye.morphTargetsCount!==_t)&&(It=!0):(It=!0,Ye.__version=K.version);let ds=Ye.currentProgram;It===!0&&(ds=Je(K,V,X));let Bp=!1,yo=!1,lf=!1;const fi=ds.getUniforms(),Mr=Ye.uniforms;if(G.useProgram(ds.program)&&(Bp=!0,yo=!0,lf=!0),K.id!==L&&(L=K.id,yo=!0),Bp||M!==A){fi.setValue(W,"projectionMatrix",A.projectionMatrix),fi.setValue(W,"viewMatrix",A.matrixWorldInverse);const ln=fi.map.cameraPosition;ln!==void 0&&ln.setValue(W,Pe.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&fi.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&fi.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,yo=!0,lf=!0)}if(X.isSkinnedMesh){fi.setOptional(W,X,"bindMatrix"),fi.setOptional(W,X,"bindMatrixInverse");const ln=X.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),fi.setValue(W,"boneTexture",ln.boneTexture,y))}X.isBatchedMesh&&(fi.setOptional(W,X,"batchingTexture"),fi.setValue(W,"batchingTexture",X._matricesTexture,y));const cf=q.morphAttributes;if((cf.position!==void 0||cf.normal!==void 0||cf.color!==void 0)&&xe.update(X,q,ds),(yo||Ye.receiveShadow!==X.receiveShadow)&&(Ye.receiveShadow=X.receiveShadow,fi.setValue(W,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Mr.envMap.value=ze,Mr.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(Mr.envMapIntensity.value=V.environmentIntensity),yo&&(fi.setValue(W,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&bt(Mr,lf),fe&&K.fog===!0&&ne.refreshFogUniforms(Mr,fe),ne.refreshMaterialUniforms(Mr,K,Y,te,m.state.transmissionRenderTarget),Jc.upload(W,Pt(Ye),Mr,y)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Jc.upload(W,Pt(Ye),Mr,y),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&fi.setValue(W,"center",X.center),fi.setValue(W,"modelViewMatrix",X.modelViewMatrix),fi.setValue(W,"normalMatrix",X.normalMatrix),fi.setValue(W,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let uf=0,Yy=ln.length;uf<Yy;uf++){const zp=ln[uf];We.update(zp,ds),We.bind(zp,ds)}}return ds}function bt(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function gt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,V,q){v.get(A.texture).__webglTexture=V,v.get(A.depthTexture).__webglTexture=q;const K=v.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const q=v.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,q=0){T=A,R=V,w=q;let K=!0,X=null,fe=!1,be=!1;if(A){const ze=v.get(A);ze.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(W.FRAMEBUFFER,null),K=!1):ze.__webglFramebuffer===void 0?y.setupRenderTarget(A):ze.__hasExternalTextures&&y.rebindTextures(A,v.get(A.texture).__webglTexture,v.get(A.depthTexture).__webglTexture);const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(be=!0);const Re=v.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[V])?X=Re[V][q]:X=Re[V],fe=!0):A.samples>0&&y.useMultisampledRTT(A)===!1?X=v.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?X=Re[q]:X=Re,b.copy(A.viewport),k.copy(A.scissor),B=A.scissorTest}else b.copy(P).multiplyScalar(Y).floor(),k.copy(he).multiplyScalar(Y).floor(),B=we;if(G.bindFramebuffer(W.FRAMEBUFFER,X)&&K&&G.drawBuffers(A,X),G.viewport(b),G.scissor(k),G.setScissorTest(B),fe){const ze=v.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,q)}else if(be){const ze=v.get(A.texture),Oe=V||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,ze.__webglTexture,q||0,Oe)}L=-1},this.readRenderTargetPixels=function(A,V,q,K,X,fe,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=v.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne){G.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const ze=A.texture,Oe=ze.format,Re=ze.type;if(Oe!==Gn&&qe.convert(Oe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Re===Su&&(C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float"));if(Re!==Jr&&qe.convert(Re)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&Re!==Gr&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-K&&q>=0&&q<=A.height-X&&W.readPixels(V,q,K,X,qe.convert(Oe),qe.convert(Re),fe)}finally{const ze=T!==null?v.get(T).__webglFramebuffer:null;G.bindFramebuffer(W.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(A,V,q=0){const K=Math.pow(2,-q),X=Math.floor(V.image.width*K),fe=Math.floor(V.image.height*K);y.setTexture2D(V,0),W.copyTexSubImage2D(W.TEXTURE_2D,q,0,0,A.x,A.y,X,fe),G.unbindTexture()},this.copyTextureToTexture=function(A,V,q,K=0){const X=V.image.width,fe=V.image.height,be=qe.convert(q.format),Ne=qe.convert(q.type);y.setTexture2D(q,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,K,A.x,A.y,X,fe,be,Ne,V.image.data):V.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,K,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,be,V.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,K,A.x,A.y,be,Ne,V.image),K===0&&q.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(A,V,q,K,X=0){const fe=Math.round(A.max.x-A.min.x),be=Math.round(A.max.y-A.min.y),Ne=A.max.z-A.min.z+1,ze=qe.convert(K.format),Oe=qe.convert(K.type);let Re;if(K.isData3DTexture)y.setTexture3D(K,0),Re=W.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)y.setTexture2DArray(K,0),Re=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const Be=W.getParameter(W.UNPACK_ROW_LENGTH),Et=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ui=W.getParameter(W.UNPACK_SKIP_PIXELS),Dt=W.getParameter(W.UNPACK_SKIP_ROWS),Wt=W.getParameter(W.UNPACK_SKIP_IMAGES),_t=q.isCompressedTexture?q.mipmaps[X]:q.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,_t.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_t.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,A.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,A.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?W.texSubImage3D(Re,X,V.x,V.y,V.z,fe,be,Ne,ze,Oe,_t.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(Re,X,V.x,V.y,V.z,fe,be,Ne,ze,_t.data):W.texSubImage3D(Re,X,V.x,V.y,V.z,fe,be,Ne,ze,Oe,_t),W.pixelStorei(W.UNPACK_ROW_LENGTH,Be),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Et),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ui),W.pixelStorei(W.UNPACK_SKIP_ROWS,Dt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Wt),X===0&&K.generateMipmaps&&W.generateMipmap(Re),G.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?y.setTextureCube(A,0):A.isData3DTexture?y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?y.setTexture2DArray(A,0):y.setTexture2D(A,0),G.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,G.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yp?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===ef?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=n}clone(){return new Cu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class oP extends bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ep extends hs{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new $n(s,3)),this.setAttribute("normal",new $n(s.slice(),3)),this.setAttribute("uv",new $n(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new j,E=new j,R=new j;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],E),d(t[w+2],R),l(x,E,R,S)}function l(S,x,E,R){const w=R+1,T=[];for(let L=0;L<=w;L++){T[L]=[];const M=S.clone().lerp(E,L/w),b=x.clone().lerp(E,L/w),k=w-L;for(let B=0;B<=k;B++)B===0&&L===w?T[L][B]=M:T[L][B]=M.clone().lerp(b,B/k)}for(let L=0;L<w;L++)for(let M=0;M<2*(w-L)-1;M++){const b=Math.floor(M/2);M%2===0?(h(T[L][b+1]),h(T[L+1][b]),h(T[L][b])):(h(T[L][b+1]),h(T[L+1][b+1]),h(T[L+1][b]))}}function c(S){const x=new j;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(S),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function u(){const S=new j;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const E=m(S)/2/Math.PI+.5,R=p(S)/Math.PI+.5;a.push(E,1-R)}_(),f()}function f(){for(let S=0;S<a.length;S+=6){const x=a[S+0],E=a[S+2],R=a[S+4],w=Math.max(x,E,R),T=Math.min(x,E,R);w>.9&&T<.1&&(x<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),R<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function d(S,x){const E=S*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function _(){const S=new j,x=new j,E=new j,R=new j,w=new st,T=new st,L=new st;for(let M=0,b=0;M<s.length;M+=9,b+=6){S.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),E.set(s[M+6],s[M+7],s[M+8]),w.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),R.copy(S).add(x).add(E).divideScalar(3);const k=m(R);g(w,b+0,S,k),g(T,b+2,x,k),g(L,b+4,E,k)}}function g(S,x,E,R){R<0&&S.x===1&&(a[x]=S.x-1),E.x===0&&E.z===0&&(a[x]=R/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.vertices,e.indices,e.radius,e.details)}}class Tp extends Ep{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tp(e.radius,e.detail)}}class lP extends Ul{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$x,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cP extends bi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _h=new Gt,M_=new j,E_=new j;class uP{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sp,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ai(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;M_.setFromMatrixPosition(e.matrixWorld),t.position.copy(M_),E_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(E_),t.updateMatrixWorld(),_h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fP extends uP{constructor(){super(new cy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hP extends cP{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bi.DEFAULT_UP),this.updateMatrix(),this.target=new bi,this.shadow=new fP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const dP={class:"three-bg"},Lo=.4,pP={__name:"globeBg",props:{darkMode:{type:Boolean,default:!1}},setup(i){const e=i,t=new oP,n=new dn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new aP;r.setClearColor(0,0),r.setSize(window.innerWidth,window.innerHeight),Ur(()=>{document.querySelector(".three-bg").appendChild(r.domElement)});const s=Un(()=>e.darkMode?11645361:14671839),a=new Tp(7,20),o=new lP({color:s.value,wireframe:!0}),l=new Wn(a,o);l.rotation.x+=.5,l.scale.set(Lo,Lo,Lo),t.add(l);const c=new hP(16777215,3);c.position.set(-1,2,4),t.add(c),n.position.z=6.9;const u=Un(()=>e.darkMode?0:15724527);t.fog=new Cu(u.value,5,15);function f(_){const g=r.domElement;n.aspect=g.clientWidth/g.clientHeight,n.updateProjectionMatrix(),r.render(t,n),requestAnimationFrame(f)}Ur(()=>{f()});const h=()=>{r.setSize(window.innerWidth,window.innerHeight)};Ur(()=>{window.addEventListener("resize",h)}),Ur(()=>{window.addEventListener("scroll",d)});const d=()=>{let _=window.scrollY,m=document.querySelector("section#about").offsetTop;if(_<=m){let p=Lo+_/m*(1-Lo);l.scale.set(p,p,p)}else l.scale.set(1,1,1);l.rotation.z=_*.001,l.rotation.x=_*5e-4,r.render(t,n)};return Ur(()=>{d()}),Hs(()=>e.darkMode,()=>{t.fog=new Cu(u.value,5,15),l.material.color.set(s.value),r.render(t,n)},{immediate:!0}),(_,g)=>(Di(),nn("div",dP))}},mP=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},gP={},_P={class:"mouse-scroll"},vP=Te("div",{class:"mouse"},null,-1);function xP(i,e){const t=Hd("font-awesome-icon");return Di(),nn("div",_P,[vP,mt(t,{class:"down-icon",icon:"fa-solid fa-angles-down",size:"lg"})])}const yP=mP(gP,[["render",xP]]),bP=Te("div",{class:"linear-gray-bg"},null,-1),SP={class:"social-wrapper"},MP={href:"https://github.com/edwardtsai54398",target:"_blank",class:"social-logo"},EP={href:"https://www.linkedin.com/in/chung-hua-tsai-598ba022b/",target:"_blank",class:"social-logo"},TP={class:"theme-toggle theme_wrapper",title:"Toggle theme",style:{position:"relative"}},wP=Te("span",{class:"toggle_border"},null,-1),AP=Te("span",{class:"theme-toggle-sr"},"Toggle theme",-1),CP=Te("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"20px",height:"20px",fill:"currentColor","stroke-linecap":"round",class:"theme-toggle__classic",viewBox:"0 0 32 32"},[Te("clipPath",{id:"theme-toggle__classic__cutout"},[Te("path",{d:"M0-5h30a1 1 0 0 0 9 13v24H0Z"})]),Te("g",{"clip-path":"url(#theme-toggle__classic__cutout)"},[Te("circle",{cx:"16",cy:"16",r:"9.34"}),Te("g",{stroke:"currentColor","stroke-width":"1.5"},[Te("path",{d:"M16 5.5v-4"}),Te("path",{d:"M16 30.5v-4"}),Te("path",{d:"M1.5 16h4"}),Te("path",{d:"M26.5 16h4"}),Te("path",{d:"m23.4 8.6 2.8-2.8"}),Te("path",{d:"m5.7 26.3 2.9-2.9"}),Te("path",{d:"m5.8 5.8 2.8 2.8"}),Te("path",{d:"m23.4 23.4 2.9 2.9"})])])],-1),RP={class:"intro_section",id:"intro"},PP=Te("div",{class:"intro_img"},[Te("div",{class:"noise_overlay"}),Te("img",{src:vM,alt:""})],-1),LP=Te("div",{class:"intro_wrapper"},[Te("h2",null,[Gs("Hi, I' m "),Te("span",null,"Edward Tsai.")]),Te("p",null,[Gs("I' m a Front-end developer"),Te("br"),Gs(" base in Taipei.")])],-1),DP=LS('<section class="about_section" id="about"><h3>ABOUT ME</h3><div class="wrapper"><article class="about_intro"><p> I specialize in developing of websites and web applications, playing a important role in their overall success. Feel free to explore examples of my work in the Projects section. </p><p> I&#39;m actively seeking job opportunities where I can both contribute and developing professionally. If you have a fitting opportunity that aligns with my skills and experience, please don&#39;t hesitate to reach out to me. </p></article><div class="skill_wrapper"><h4>Skill</h4><div class="skill_tags_wrapper"><span class="skill_tag"># HTML</span><span class="skill_tag"># Scss</span><span class="skill_tag"># Vue.js</span><span class="skill_tag"># Javascript</span><span class="skill_tag"># git</span><span class="skill_tag"># Vuex</span><span class="skill_tag"># Bootstrap</span><span class="skill_tag"># D3.js</span><span class="skill_tag"># Axios</span></div></div></div></section>',1),IP={class:"project_section",id:"project"},OP=Te("h3",null,"PROJECT",-1),NP={class:"projects_wrapper_prime"},UP={class:"projects_wrapper_others"},FP={class:"card_col"},kP={class:"contact_section",id:"contact"},BP=Te("h3",null,"Contact to Me",-1),zP={class:"contact_wrapper"},VP=Te("span",{class:"mail"},"donkeycoder.ET@gmail.com",-1),HP={class:"social-wrapper"},GP={href:"https://github.com/edwardtsai54398",target:"_blank",class:"social-logo"},WP={href:"https://www.linkedin.com/in/chung-hua-tsai-598ba022b/",target:"_blank",class:"social-logo"},Do=100,La=1,Io=0,XP={__name:"App",setup(i){const e=AM(),t=df(!1),n=()=>{t.value?(localStorage.setItem("theme","dark"),e.commit("updateTheme","dark")):(localStorage.setItem("theme","bright"),e.commit("updateTheme","bright")),r(t.value)},r=o=>{const l=document.querySelector("html");o?l.classList.add("dark"):l.classList.remove("dark")};Ur(()=>{localStorage.getItem("theme")==="dark"&&(t.value=!0),r(t.value)});const s=df(!1);Ts.registerPlugin(at);const a=df();return Ur(()=>{Ts.from("#about h3",{scrollTrigger:{trigger:"#about",start:"top 50%",toggleAction:"play none none none"},opacity:Io,y:Do,duration:La}),Ts.from("#about .wrapper",{scrollTrigger:{trigger:"#about",start:"top 50%",toggleAction:"play none none none"},opacity:Io,y:Do,duration:La,delay:.3}),Ts.from("#project h3",{scrollTrigger:{trigger:"#project",start:"top 50%",toggleAction:"play none none none"},opacity:Io,y:Do,duration:La}),Ts.from("#project .projects_wrapper_prime",{scrollTrigger:{trigger:"#project",start:"top 50%",toggleAction:"play none none none"},opacity:Io,y:Do,duration:La,delay:.2}),Ts.from("#project .projects_wrapper_others",{scrollTrigger:{trigger:"#project",start:"top 50%",toggleAction:"play none none none"},opacity:Io,y:Do,duration:La,delay:La-.2})}),(o,l)=>{const c=Hd("font-awesome-icon");return Di(),nn(Fi,null,[bP,mt(pP,{"dark-mode":lr(e).state.theme==="dark"},null,8,["dark-mode"]),mt(EE,{"to-id":"",center:"center"},{logo:Da(()=>[Te("div",SP,[Te("a",MP,[mt(c,{icon:"fa-brands fa-github"})]),Te("a",EP,[mt(c,{icon:"fa-brands fa-linkedin"})])]),mt(FE,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=u=>s.value=u),"devide-num":2,"open-style":"cross"},null,8,["modelValue"])]),function:Da(()=>[Te("label",TP,[wP,D0(Te("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=u=>t.value=u),onChange:n},null,544),[[fM,t.value]]),AP,CP])]),_:1}),mt(zE,{menu:lr(Fx),modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=u=>s.value=u),"to-id":""},null,8,["menu","modelValue"]),Te("div",{class:"home",ref_key:"main",ref:a},[Te("section",RP,[PP,LP,mt(yP)]),DP,Te("section",IP,[OP,Te("div",NP,[mt(Ff,{title:"Vote for Taiwan",img:lr(VE),"code-link":"https://github.com/edwardtsai54398/F2Evotefortw2024","demo-link":"https://edwardtsai54398.github.io/F2Evotefortw2024/#/"},{default:Da(()=>[Gs(" I utilized D3.js to convert geographical data into SVG path information, combined with Vue.js to render maps of various administrative regions. ")]),_:1},8,["img"]),mt(Ff,{title:"Fresh Drop",img:lr(HE),"code-link":"https://github.com/edwardtsai54398/fresh_drop/tree/dev","demo-link":"https://tibamef2e.com/chd102/g2/"},{default:Da(()=>[Gs(" Fresh Drop is a side project conceptualized as an e-commerce platform for ingredient ordering. ")]),_:1},8,["img"])]),Te("div",UP,[Te("div",FP,[mt(Ff,{title:"Aster-select",img:lr(GE),"code-link":"https://github.com/edwardtsai54398/ASTER_tableware-select-shop","demo-link":"https://edwardtsai54398.github.io/ASTER_tableware-select-shop/"},{default:Da(()=>[Gs(" ASTER-select is a demo-website of an e-commerce platform of tableware selection shop. ")]),_:1},8,["img"])])])]),Te("section",kP,[BP,Te("div",zP,[VP,Te("div",HP,[Te("a",GP,[mt(c,{icon:"fa-brands fa-github"})]),Te("a",WP,[mt(c,{icon:"fa-brands fa-linkedin"})])])])])],512)],64)}}},YP=WM({state:{theme:localStorage.getItem("theme")?localStorage.getItem("theme"):"bright"},mutations:{updateTheme(i,e){i.theme=e}}});function T_(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Se(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?T_(Object(t),!0).forEach(function(n){ei(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):T_(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Ru(i){"@babel/helpers - typeof";return Ru=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ru(i)}function qP(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function w_(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function jP(i,e,t){return e&&w_(i.prototype,e),t&&w_(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function ei(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function wp(i,e){return KP(i)||JP(i,e)||gy(i,e)||eL()}function kl(i){return $P(i)||ZP(i)||gy(i)||QP()}function $P(i){if(Array.isArray(i))return gd(i)}function KP(i){if(Array.isArray(i))return i}function ZP(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function JP(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n=[],r=!0,s=!1,a,o;try{for(t=t.call(i);!(r=(a=t.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw o}}return n}}function gy(i,e){if(i){if(typeof i=="string")return gd(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gd(i,e)}}function gd(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function QP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var A_=function(){},Ap={},_y={},vy=null,xy={mark:A_,measure:A_};try{typeof window<"u"&&(Ap=window),typeof document<"u"&&(_y=document),typeof MutationObserver<"u"&&(vy=MutationObserver),typeof performance<"u"&&(xy=performance)}catch{}var tL=Ap.navigator||{},C_=tL.userAgent,R_=C_===void 0?"":C_,os=Ap,Rt=_y,P_=vy,Rc=xy;os.document;var Sr=!!Rt.documentElement&&!!Rt.head&&typeof Rt.addEventListener=="function"&&typeof Rt.createElement=="function",yy=~R_.indexOf("MSIE")||~R_.indexOf("Trident/"),Pc,Lc,Dc,Ic,Oc,vr="___FONT_AWESOME___",_d=16,by="fa",Sy="svg-inline--fa",na="data-fa-i2svg",vd="data-fa-pseudo-element",iL="data-fa-pseudo-element-pending",Cp="data-prefix",Rp="data-icon",L_="fontawesome-i2svg",nL="async",rL=["HTML","HEAD","STYLE","SCRIPT"],My=function(){try{return!0}catch{return!1}}(),Ct="classic",kt="sharp",Pp=[Ct,kt];function Bl(i){return new Proxy(i,{get:function(t,n){return n in t?t[n]:t[Ct]}})}var El=Bl((Pc={},ei(Pc,Ct,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ei(Pc,kt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Pc)),Tl=Bl((Lc={},ei(Lc,Ct,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ei(Lc,kt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Lc)),wl=Bl((Dc={},ei(Dc,Ct,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ei(Dc,kt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Dc)),sL=Bl((Ic={},ei(Ic,Ct,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ei(Ic,kt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ic)),aL=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ey="fa-layers-text",oL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,lL=Bl((Oc={},ei(Oc,Ct,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ei(Oc,kt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Oc)),Ty=[1,2,3,4,5,6,7,8,9,10],cL=Ty.concat([11,12,13,14,15,16,17,18,19,20]),uL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ks={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Al=new Set;Object.keys(Tl[Ct]).map(Al.add.bind(Al));Object.keys(Tl[kt]).map(Al.add.bind(Al));var fL=[].concat(Pp,kl(Al),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ks.GROUP,ks.SWAP_OPACITY,ks.PRIMARY,ks.SECONDARY]).concat(Ty.map(function(i){return"".concat(i,"x")})).concat(cL.map(function(i){return"w-".concat(i)})),ll=os.FontAwesomeConfig||{};function hL(i){var e=Rt.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function dL(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}if(Rt&&typeof Rt.querySelector=="function"){var pL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pL.forEach(function(i){var e=wp(i,2),t=e[0],n=e[1],r=dL(hL(t));r!=null&&(ll[n]=r)})}var wy={styleDefault:"solid",familyDefault:"classic",cssPrefix:by,replacementClass:Sy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ll.familyPrefix&&(ll.cssPrefix=ll.familyPrefix);var po=Se(Se({},wy),ll);po.autoReplaceSvg||(po.observeMutations=!1);var De={};Object.keys(wy).forEach(function(i){Object.defineProperty(De,i,{enumerable:!0,set:function(t){po[i]=t,cl.forEach(function(n){return n(De)})},get:function(){return po[i]}})});Object.defineProperty(De,"familyPrefix",{enumerable:!0,set:function(e){po.cssPrefix=e,cl.forEach(function(t){return t(De)})},get:function(){return po.cssPrefix}});os.FontAwesomeConfig=De;var cl=[];function mL(i){return cl.push(i),function(){cl.splice(cl.indexOf(i),1)}}var Lr=_d,Xn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gL(i){if(!(!i||!Sr)){var e=Rt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;for(var t=Rt.head.childNodes,n=null,r=t.length-1;r>-1;r--){var s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=s)}return Rt.head.insertBefore(e,n),i}}var _L="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cl(){for(var i=12,e="";i-- >0;)e+=_L[Math.random()*62|0];return e}function xo(i){for(var e=[],t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function Lp(i){return i.classList?xo(i.classList):(i.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ay(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vL(i){return Object.keys(i||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Ay(i[t]),'" ')},"").trim()}function rf(i){return Object.keys(i||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(i[t].trim(),";")},"")}function Dp(i){return i.size!==Xn.size||i.x!==Xn.x||i.y!==Xn.y||i.rotate!==Xn.rotate||i.flipX||i.flipY}function xL(i){var e=i.transform,t=i.containerWidth,n=i.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:c}}function yL(i){var e=i.transform,t=i.width,n=t===void 0?_d:t,r=i.height,s=r===void 0?_d:r,a=i.startCentered,o=a===void 0?!1:a,l="";return o&&yy?l+="translate(".concat(e.x/Lr-n/2,"em, ").concat(e.y/Lr-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Lr,"em), calc(-50% + ").concat(e.y/Lr,"em)) "):l+="translate(".concat(e.x/Lr,"em, ").concat(e.y/Lr,"em) "),l+="scale(".concat(e.size/Lr*(e.flipX?-1:1),", ").concat(e.size/Lr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var bL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cy(){var i=by,e=Sy,t=De.cssPrefix,n=De.replacementClass,r=bL;if(t!==i||n!==e){var s=new RegExp("\\.".concat(i,"\\-"),"g"),a=new RegExp("\\--".concat(i,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(n))}return r}var D_=!1;function vh(){De.autoAddCss&&!D_&&(gL(Cy()),D_=!0)}var SL={mixout:function(){return{dom:{css:Cy,insertCss:vh}}},hooks:function(){return{beforeDOMElementCreation:function(){vh()},beforeI2svg:function(){vh()}}}},xr=os||{};xr[vr]||(xr[vr]={});xr[vr].styles||(xr[vr].styles={});xr[vr].hooks||(xr[vr].hooks={});xr[vr].shims||(xr[vr].shims=[]);var Cn=xr[vr],Ry=[],ML=function i(){Rt.removeEventListener("DOMContentLoaded",i),Pu=1,Ry.map(function(e){return e()})},Pu=!1;Sr&&(Pu=(Rt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Rt.readyState),Pu||Rt.addEventListener("DOMContentLoaded",ML));function EL(i){Sr&&(Pu?setTimeout(i,0):Ry.push(i))}function zl(i){var e=i.tag,t=i.attributes,n=t===void 0?{}:t,r=i.children,s=r===void 0?[]:r;return typeof i=="string"?Ay(i):"<".concat(e," ").concat(vL(n),">").concat(s.map(zl).join(""),"</").concat(e,">")}function I_(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var TL=function(e,t){return function(n,r,s,a){return e.call(t,n,r,s,a)}},xh=function(e,t,n,r){var s=Object.keys(e),a=s.length,o=r!==void 0?TL(t,r):t,l,c,u;for(n===void 0?(l=1,u=e[s[0]]):(l=0,u=n);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function wL(i){for(var e=[],t=0,n=i.length;t<n;){var r=i.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var s=i.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function xd(i){var e=wL(i);return e.length===1?e[0].toString(16):null}function AL(i,e){var t=i.length,n=i.charCodeAt(e),r;return n>=55296&&n<=56319&&t>e+1&&(r=i.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function O_(i){return Object.keys(i).reduce(function(e,t){var n=i[t],r=!!n.icon;return r?e[n.iconName]=n.icon:e[t]=n,e},{})}function yd(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,r=n===void 0?!1:n,s=O_(e);typeof Cn.hooks.addPack=="function"&&!r?Cn.hooks.addPack(i,O_(e)):Cn.styles[i]=Se(Se({},Cn.styles[i]||{}),s),i==="fas"&&yd("fa",e)}var Nc,Uc,Fc,Ba=Cn.styles,CL=Cn.shims,RL=(Nc={},ei(Nc,Ct,Object.values(wl[Ct])),ei(Nc,kt,Object.values(wl[kt])),Nc),Ip=null,Py={},Ly={},Dy={},Iy={},Oy={},PL=(Uc={},ei(Uc,Ct,Object.keys(El[Ct])),ei(Uc,kt,Object.keys(El[kt])),Uc);function LL(i){return~fL.indexOf(i)}function DL(i,e){var t=e.split("-"),n=t[0],r=t.slice(1).join("-");return n===i&&r!==""&&!LL(r)?r:null}var Ny=function(){var e=function(s){return xh(Ba,function(a,o,l){return a[l]=xh(o,s,{}),a},{})};Py=e(function(r,s,a){if(s[3]&&(r[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=a})}return r}),Ly=e(function(r,s,a){if(r[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=a})}return r}),Oy=e(function(r,s,a){var o=s[2];return r[a]=a,o.forEach(function(l){r[l]=a}),r});var t="far"in Ba||De.autoFetchSvg,n=xh(CL,function(r,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Dy=n.names,Iy=n.unicodes,Ip=sf(De.styleDefault,{family:De.familyDefault})};mL(function(i){Ip=sf(i.styleDefault,{family:De.familyDefault})});Ny();function Op(i,e){return(Py[i]||{})[e]}function IL(i,e){return(Ly[i]||{})[e]}function Bs(i,e){return(Oy[i]||{})[e]}function Uy(i){return Dy[i]||{prefix:null,iconName:null}}function OL(i){var e=Iy[i],t=Op("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ls(){return Ip}var Np=function(){return{prefix:null,iconName:null,rest:[]}};function sf(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,n=t===void 0?Ct:t,r=El[n][i],s=Tl[n][i]||Tl[n][r],a=i in Cn.styles?i:null;return s||a||null}var N_=(Fc={},ei(Fc,Ct,Object.keys(wl[Ct])),ei(Fc,kt,Object.keys(wl[kt])),Fc);function af(i){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,s=(e={},ei(e,Ct,"".concat(De.cssPrefix,"-").concat(Ct)),ei(e,kt,"".concat(De.cssPrefix,"-").concat(kt)),e),a=null,o=Ct;(i.includes(s[Ct])||i.some(function(c){return N_[Ct].includes(c)}))&&(o=Ct),(i.includes(s[kt])||i.some(function(c){return N_[kt].includes(c)}))&&(o=kt);var l=i.reduce(function(c,u){var f=DL(De.cssPrefix,u);if(Ba[u]?(u=RL[o].includes(u)?sL[o][u]:u,a=u,c.prefix=u):PL[o].indexOf(u)>-1?(a=u,c.prefix=sf(u,{family:o})):f?c.iconName=f:u!==De.replacementClass&&u!==s[Ct]&&u!==s[kt]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=a==="fa"?Uy(c.iconName):{},d=Bs(c.prefix,c.iconName);h.prefix&&(a=null),c.iconName=h.iconName||d||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Ba.far&&Ba.fas&&!De.autoFetchSvg&&(c.prefix="fas")}return c},Np());return(i.includes("fa-brands")||i.includes("fab"))&&(l.prefix="fab"),(i.includes("fa-duotone")||i.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===kt&&(Ba.fass||De.autoFetchSvg)&&(l.prefix="fass",l.iconName=Bs(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=ls()||"fas"),l}var NL=function(){function i(){qP(this,i),this.definitions={}}return jP(i,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=Se(Se({},t.definitions[o]||{}),a[o]),yd(o,a[o]);var l=wl[Ct][o];l&&yd(l,a[o]),Ny()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];t[o]||(t[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(t[o][f]=c)}),t[o][l]=c}),t}}]),i}(),U_=[],za={},eo={},UL=Object.keys(eo);function FL(i,e){var t=e.mixoutsTo;return U_=i,za={},Object.keys(eo).forEach(function(n){UL.indexOf(n)===-1&&delete eo[n]}),U_.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(t[a]=r[a]),Ru(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){t[a]||(t[a]={}),t[a][o]=r[a][o]})}),n.hooks){var s=n.hooks();Object.keys(s).forEach(function(a){za[a]||(za[a]=[]),za[a].push(s[a])})}n.provides&&n.provides(eo)}),t}function bd(i,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var s=za[i]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(n))}),e}function ra(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var r=za[i]||[];r.forEach(function(s){s.apply(null,t)})}function yr(){var i=arguments[0],e=Array.prototype.slice.call(arguments,1);return eo[i]?eo[i].apply(null,e):void 0}function Sd(i){i.prefix==="fa"&&(i.prefix="fas");var e=i.iconName,t=i.prefix||ls();if(e)return e=Bs(t,e)||e,I_(Fy.definitions,t,e)||I_(Cn.styles,t,e)}var Fy=new NL,kL=function(){De.autoReplaceSvg=!1,De.observeMutations=!1,ra("noAuto")},BL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Sr?(ra("beforeI2svg",e),yr("pseudoElements2svg",e),yr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;De.autoReplaceSvg===!1&&(De.autoReplaceSvg=!0),De.observeMutations=!0,EL(function(){VL({autoReplaceSvgRoot:t}),ra("watch",e)})}},zL={icon:function(e){if(e===null)return null;if(Ru(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Bs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=sf(e[0]);return{prefix:n,iconName:Bs(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(De.cssPrefix,"-"))>-1||e.match(aL))){var r=af(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||ls(),iconName:Bs(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=ls();return{prefix:s,iconName:Bs(s,e)||e}}}},on={noAuto:kL,config:De,dom:BL,parse:zL,library:Fy,findIconDefinition:Sd,toHtml:zl},VL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,n=t===void 0?Rt:t;(Object.keys(Cn.styles).length>0||De.autoFetchSvg)&&Sr&&De.autoReplaceSvg&&on.dom.i2svg({node:n})};function of(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(function(n){return zl(n)})}}),Object.defineProperty(i,"node",{get:function(){if(Sr){var n=Rt.createElement("div");return n.innerHTML=i.html,n.children}}}),i}function HL(i){var e=i.children,t=i.main,n=i.mask,r=i.attributes,s=i.styles,a=i.transform;if(Dp(a)&&t.found&&!n.found){var o=t.width,l=t.height,c={x:o/l/2,y:.5};r.style=rf(Se(Se({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function GL(i){var e=i.prefix,t=i.iconName,n=i.children,r=i.attributes,s=i.symbol,a=s===!0?"".concat(e,"-").concat(De.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Se(Se({},r),{},{id:a}),children:n}]}]}function Up(i){var e=i.icons,t=e.main,n=e.mask,r=i.prefix,s=i.iconName,a=i.transform,o=i.symbol,l=i.title,c=i.maskId,u=i.titleId,f=i.extra,h=i.watchable,d=h===void 0?!1:h,_=n.found?n:t,g=_.width,m=_.height,p=r==="fak",S=[De.replacementClass,s?"".concat(De.cssPrefix,"-").concat(s):""].filter(function(M){return f.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(f.classes).join(" "),x={children:[],attributes:Se(Se({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(m)})},E=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/m*16*.0625,"em")}:{};d&&(x.attributes[na]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||Cl())},children:[l]}),delete x.attributes.title);var R=Se(Se({},x),{},{prefix:r,iconName:s,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:Se(Se({},E),f.styles)}),w=n.found&&t.found?yr("generateAbstractMask",R)||{children:[],attributes:{}}:yr("generateAbstractIcon",R)||{children:[],attributes:{}},T=w.children,L=w.attributes;return R.children=T,R.attributes=L,o?GL(R):HL(R)}function F_(i){var e=i.content,t=i.width,n=i.height,r=i.transform,s=i.title,a=i.extra,o=i.watchable,l=o===void 0?!1:o,c=Se(Se(Se({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(c[na]="");var u=Se({},a.styles);Dp(r)&&(u.transform=yL({transform:r,startCentered:!0,width:t,height:n}),u["-webkit-transform"]=u.transform);var f=rf(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function WL(i){var e=i.content,t=i.title,n=i.extra,r=Se(Se(Se({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),s=rf(n.styles);s.length>0&&(r.style=s);var a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}var yh=Cn.styles;function Md(i){var e=i[0],t=i[1],n=i.slice(4),r=wp(n,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(De.cssPrefix,"-").concat(ks.GROUP)},children:[{tag:"path",attributes:{class:"".concat(De.cssPrefix,"-").concat(ks.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(De.cssPrefix,"-").concat(ks.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:a}}var XL={found:!1,width:512,height:512};function YL(i,e){!My&&!De.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function Ed(i,e){var t=e;return e==="fa"&&De.styleDefault!==null&&(e=ls()),new Promise(function(n,r){if(yr("missingIconAbstract"),t==="fa"){var s=Uy(i)||{};i=s.iconName||i,e=s.prefix||e}if(i&&e&&yh[e]&&yh[e][i]){var a=yh[e][i];return n(Md(a))}YL(i,e),n(Se(Se({},XL),{},{icon:De.showMissingIcons&&i?yr("missingIconAbstract")||{}:{}}))})}var k_=function(){},Td=De.measurePerformance&&Rc&&Rc.mark&&Rc.measure?Rc:{mark:k_,measure:k_},Go='FA "6.5.1"',qL=function(e){return Td.mark("".concat(Go," ").concat(e," begins")),function(){return ky(e)}},ky=function(e){Td.mark("".concat(Go," ").concat(e," ends")),Td.measure("".concat(Go," ").concat(e),"".concat(Go," ").concat(e," begins"),"".concat(Go," ").concat(e," ends"))},Fp={begin:qL,end:ky},Qc=function(){};function B_(i){var e=i.getAttribute?i.getAttribute(na):null;return typeof e=="string"}function jL(i){var e=i.getAttribute?i.getAttribute(Cp):null,t=i.getAttribute?i.getAttribute(Rp):null;return e&&t}function $L(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(De.replacementClass)}function KL(){if(De.autoReplaceSvg===!0)return eu.replace;var i=eu[De.autoReplaceSvg];return i||eu.replace}function ZL(i){return Rt.createElementNS("http://www.w3.org/2000/svg",i)}function JL(i){return Rt.createElement(i)}function By(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,n=t===void 0?i.tag==="svg"?ZL:JL:t;if(typeof i=="string")return Rt.createTextNode(i);var r=n(i.tag);Object.keys(i.attributes||[]).forEach(function(a){r.setAttribute(a,i.attributes[a])});var s=i.children||[];return s.forEach(function(a){r.appendChild(By(a,{ceFn:n}))}),r}function QL(i){var e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var eu={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(By(r),t)}),t.getAttribute(na)===null&&De.keepOriginalSource){var n=Rt.createComment(QL(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Lp(t).indexOf(De.replacementClass))return eu.replace(e);var r=new RegExp("".concat(De.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var s=n[0].attributes.class.split(" ").reduce(function(o,l){return l===De.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var a=n.map(function(o){return zl(o)}).join(`
`);t.setAttribute(na,""),t.innerHTML=a}};function z_(i){i()}function zy(i,e){var t=typeof e=="function"?e:Qc;if(i.length===0)t();else{var n=z_;De.mutateApproach===nL&&(n=os.requestAnimationFrame||z_),n(function(){var r=KL(),s=Fp.begin("mutate");i.map(r),s(),t()})}}var kp=!1;function Vy(){kp=!0}function wd(){kp=!1}var Lu=null;function V_(i){if(P_&&De.observeMutations){var e=i.treeCallback,t=e===void 0?Qc:e,n=i.nodeCallback,r=n===void 0?Qc:n,s=i.pseudoElementsCallback,a=s===void 0?Qc:s,o=i.observeMutationsRoot,l=o===void 0?Rt:o;Lu=new P_(function(c){if(!kp){var u=ls();xo(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!B_(f.addedNodes[0])&&(De.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&De.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&B_(f.target)&&~uL.indexOf(f.attributeName))if(f.attributeName==="class"&&jL(f.target)){var h=af(Lp(f.target)),d=h.prefix,_=h.iconName;f.target.setAttribute(Cp,d||u),_&&f.target.setAttribute(Rp,_)}else $L(f.target)&&r(f.target)})}}),Sr&&Lu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function e3(){Lu&&Lu.disconnect()}function t3(i){var e=i.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(n,r){var s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(n[a]=o.join(":").trim()),n},{})),t}function i3(i){var e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),n=i.innerText!==void 0?i.innerText.trim():"",r=af(Lp(i));return r.prefix||(r.prefix=ls()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=IL(r.prefix,i.innerText)||Op(r.prefix,xd(i.innerText))),!r.iconName&&De.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=i.firstChild.data)),r}function n3(i){var e=xo(i.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),t=i.getAttribute("title"),n=i.getAttribute("data-fa-title-id");return De.autoA11y&&(t?e["aria-labelledby"]="".concat(De.replacementClass,"-title-").concat(n||Cl()):(e["aria-hidden"]="true",e.focusable="false")),e}function r3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Xn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function H_(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=i3(i),n=t.iconName,r=t.prefix,s=t.rest,a=n3(i),o=bd("parseNodeAttributes",{},i),l=e.styleParser?t3(i):[];return Se({iconName:n,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:Xn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var s3=Cn.styles;function Hy(i){var e=De.autoReplaceSvg==="nest"?H_(i,{styleParser:!1}):H_(i);return~e.extra.classes.indexOf(Ey)?yr("generateLayersText",i,e):yr("generateSvgReplacementMutation",i,e)}var cs=new Set;Pp.map(function(i){cs.add("fa-".concat(i))});Object.keys(El[Ct]).map(cs.add.bind(cs));Object.keys(El[kt]).map(cs.add.bind(cs));cs=kl(cs);function G_(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Sr)return Promise.resolve();var t=Rt.documentElement.classList,n=function(f){return t.add("".concat(L_,"-").concat(f))},r=function(f){return t.remove("".concat(L_,"-").concat(f))},s=De.autoFetchSvg?cs:Pp.map(function(u){return"fa-".concat(u)}).concat(Object.keys(s3));s.includes("fa")||s.push("fa");var a=[".".concat(Ey,":not([").concat(na,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(na,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=xo(i.querySelectorAll(a))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var l=Fp.begin("onTree"),c=o.reduce(function(u,f){try{var h=Hy(f);h&&u.push(h)}catch(d){My||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){zy(h,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function a3(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hy(i).then(function(t){t&&zy([t],e)})}function o3(i){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Sd(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Sd(r||{})),i(n,Se(Se({},t),{},{mask:r}))}}var l3=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Xn:n,s=t.symbol,a=s===void 0?!1:s,o=t.mask,l=o===void 0?null:o,c=t.maskId,u=c===void 0?null:c,f=t.title,h=f===void 0?null:f,d=t.titleId,_=d===void 0?null:d,g=t.classes,m=g===void 0?[]:g,p=t.attributes,S=p===void 0?{}:p,x=t.styles,E=x===void 0?{}:x;if(e){var R=e.prefix,w=e.iconName,T=e.icon;return of(Se({type:"icon"},e),function(){return ra("beforeDOMElementCreation",{iconDefinition:e,params:t}),De.autoA11y&&(h?S["aria-labelledby"]="".concat(De.replacementClass,"-title-").concat(_||Cl()):(S["aria-hidden"]="true",S.focusable="false")),Up({icons:{main:Md(T),mask:l?Md(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:w,transform:Se(Se({},Xn),r),symbol:a,title:h,maskId:u,titleId:_,extra:{attributes:S,styles:E,classes:m}})})}},c3={mixout:function(){return{icon:o3(l3)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=G_,t.nodeCallback=a3,t}}},provides:function(e){e.i2svg=function(t){var n=t.node,r=n===void 0?Rt:n,s=t.callback,a=s===void 0?function(){}:s;return G_(r,a)},e.generateSvgReplacementMutation=function(t,n){var r=n.iconName,s=n.title,a=n.titleId,o=n.prefix,l=n.transform,c=n.symbol,u=n.mask,f=n.maskId,h=n.extra;return new Promise(function(d,_){Promise.all([Ed(r,o),u.iconName?Ed(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var m=wp(g,2),p=m[0],S=m[1];d([t,Up({icons:{main:p,mask:S},prefix:o,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:a,extra:h,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(t){var n=t.children,r=t.attributes,s=t.main,a=t.transform,o=t.styles,l=rf(o);l.length>0&&(r.style=l);var c;return Dp(a)&&(c=yr("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},u3={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,s=r===void 0?[]:r;return of({type:"layer"},function(){ra("beforeDOMElementCreation",{assembler:t,params:n});var a=[];return t(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(De.cssPrefix,"-layers")].concat(kl(s)).join(" ")},children:a}]})}}}},f3={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,s=r===void 0?null:r,a=n.classes,o=a===void 0?[]:a,l=n.attributes,c=l===void 0?{}:l,u=n.styles,f=u===void 0?{}:u;return of({type:"counter",content:t},function(){return ra("beforeDOMElementCreation",{content:t,params:n}),WL({content:t.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(De.cssPrefix,"-layers-counter")].concat(kl(o))}})})}}}},h3={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Xn:r,a=n.title,o=a===void 0?null:a,l=n.classes,c=l===void 0?[]:l,u=n.attributes,f=u===void 0?{}:u,h=n.styles,d=h===void 0?{}:h;return of({type:"text",content:t},function(){return ra("beforeDOMElementCreation",{content:t,params:n}),F_({content:t,transform:Se(Se({},Xn),s),title:o,extra:{attributes:f,styles:d,classes:["".concat(De.cssPrefix,"-layers-text")].concat(kl(c))}})})}}},provides:function(e){e.generateLayersText=function(t,n){var r=n.title,s=n.transform,a=n.extra,o=null,l=null;if(yy){var c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/c,l=u.height/c}return De.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,F_({content:t.innerHTML,width:o,height:l,transform:s,title:r,extra:a,watchable:!0})])}}},d3=new RegExp('"',"ug"),W_=[1105920,1112319];function p3(i){var e=i.replace(d3,""),t=AL(e,0),n=t>=W_[0]&&t<=W_[1],r=e.length===2?e[0]===e[1]:!1;return{value:xd(r?e[0]:e),isSecondary:n||r}}function X_(i,e){var t="".concat(iL).concat(e.replace(":","-"));return new Promise(function(n,r){if(i.getAttribute(t)!==null)return n();var s=xo(i.children),a=s.filter(function(T){return T.getAttribute(vd)===e})[0],o=os.getComputedStyle(i,e),l=o.getPropertyValue("font-family").match(oL),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!l)return i.removeChild(a),n();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?kt:Ct,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Tl[h][l[2].toLowerCase()]:lL[h][c],_=p3(f),g=_.value,m=_.isSecondary,p=l[0].startsWith("FontAwesome"),S=Op(d,g),x=S;if(p){var E=OL(g);E.iconName&&E.prefix&&(S=E.iconName,d=E.prefix)}if(S&&!m&&(!a||a.getAttribute(Cp)!==d||a.getAttribute(Rp)!==x)){i.setAttribute(t,x),a&&i.removeChild(a);var R=r3(),w=R.extra;w.attributes[vd]=e,Ed(S,d).then(function(T){var L=Up(Se(Se({},R),{},{icons:{main:T,mask:Np()},prefix:d,iconName:x,extra:w,watchable:!0})),M=Rt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?i.insertBefore(M,i.firstChild):i.appendChild(M),M.outerHTML=L.map(function(b){return zl(b)}).join(`
`),i.removeAttribute(t),n()}).catch(r)}else n()}else n()})}function m3(i){return Promise.all([X_(i,"::before"),X_(i,"::after")])}function g3(i){return i.parentNode!==document.head&&!~rL.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(vd)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function Y_(i){if(Sr)return new Promise(function(e,t){var n=xo(i.querySelectorAll("*")).filter(g3).map(m3),r=Fp.begin("searchPseudoElements");Vy(),Promise.all(n).then(function(){r(),wd(),e()}).catch(function(){r(),wd(),t()})})}var _3={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Y_,t}}},provides:function(e){e.pseudoElements2svg=function(t){var n=t.node,r=n===void 0?Rt:n;De.searchPseudoElements&&Y_(r)}}},q_=!1,v3={mixout:function(){return{dom:{unwatch:function(){Vy(),q_=!0}}}},hooks:function(){return{bootstrap:function(){V_(bd("mutationObserverCallbacks",{}))},noAuto:function(){e3()},watch:function(t){var n=t.observeMutationsRoot;q_?wd():V_(bd("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},j_=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var s=r.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return n.flipX=!0,n;if(a&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(a){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)},x3={mixout:function(){return{parse:{transform:function(t){return j_(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-transform");return r&&(t.transform=j_(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var n=t.main,r=t.transform,s=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(a/2*-1," -256)")},d={outer:o,inner:f,path:h};return{tag:"g",attributes:Se({},d.outer),children:[{tag:"g",attributes:Se({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Se(Se({},n.icon.attributes),d.path)}]}]}}}},bh={x:0,y:0,width:"100%",height:"100%"};function $_(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function y3(i){return i.tag==="g"?i.children:[i]}var b3={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-mask"),s=r?af(r.split(" ").map(function(a){return a.trim()})):Np();return s.prefix||(s.prefix=ls()),t.mask=s,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var n=t.children,r=t.attributes,s=t.main,a=t.mask,o=t.maskId,l=t.transform,c=s.width,u=s.icon,f=a.width,h=a.icon,d=xL({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:Se(Se({},bh),{},{fill:"white"})},g=u.children?{children:u.children.map($_)}:{},m={tag:"g",attributes:Se({},d.inner),children:[$_(Se({tag:u.tag,attributes:Se(Se({},u.attributes),d.path)},g))]},p={tag:"g",attributes:Se({},d.outer),children:[m]},S="mask-".concat(o||Cl()),x="clip-".concat(o||Cl()),E={tag:"mask",attributes:Se(Se({},bh),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,p]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:y3(h)},E]};return n.push(R,{tag:"rect",attributes:Se({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(S,")")},bh)}),{children:n,attributes:r}}}},S3={provides:function(e){var t=!1;os.matchMedia&&(t=os.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Se(Se({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=Se(Se({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Se(Se({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:Se(Se({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Se(Se({},a),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:Se(Se({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Se(Se({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:Se(Se({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Se(Se({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},M3={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},E3=[SL,c3,u3,f3,h3,_3,v3,x3,b3,S3,M3];FL(E3,{mixoutsTo:on});on.noAuto;on.config;var T3=on.library;on.dom;var Ad=on.parse;on.findIconDefinition;on.toHtml;var w3=on.icon;on.layer;on.text;on.counter;function K_(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function fr(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?K_(Object(t),!0).forEach(function(n){Oi(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):K_(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Du(i){"@babel/helpers - typeof";return Du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Du(i)}function Oi(i,e,t){return e=P3(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function A3(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function C3(i,e){if(i==null)return{};var t=A3(i,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function R3(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function P3(i){var e=R3(i,"string");return typeof e=="symbol"?e:String(e)}var L3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gy={exports:{}};(function(i){(function(e){var t=function(p,S,x){if(!c(S)||f(S)||h(S)||d(S)||l(S))return S;var E,R=0,w=0;if(u(S))for(E=[],w=S.length;R<w;R++)E.push(t(p,S[R],x));else{E={};for(var T in S)Object.prototype.hasOwnProperty.call(S,T)&&(E[p(T,x)]=t(p,S[T],x))}return E},n=function(p,S){S=S||{};var x=S.separator||"_",E=S.split||/(?=[A-Z])/;return p.split(E).join(x)},r=function(p){return _(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(S,x){return x?x.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},s=function(p){var S=r(p);return S.substr(0,1).toUpperCase()+S.substr(1)},a=function(p,S){return n(p,S).toLowerCase()},o=Object.prototype.toString,l=function(p){return typeof p=="function"},c=function(p){return p===Object(p)},u=function(p){return o.call(p)=="[object Array]"},f=function(p){return o.call(p)=="[object Date]"},h=function(p){return o.call(p)=="[object RegExp]"},d=function(p){return o.call(p)=="[object Boolean]"},_=function(p){return p=p-0,p===p},g=function(p,S){var x=S&&"process"in S?S.process:S;return typeof x!="function"?p:function(E,R){return x(E,p,R)}},m={camelize:r,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(p,S){return t(g(r,S),p)},decamelizeKeys:function(p,S){return t(g(a,S),p,S)},pascalizeKeys:function(p,S){return t(g(s,S),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};i.exports?i.exports=m:e.humps=m})(L3)})(Gy);var D3=Gy.exports,I3=["class","style"];function O3(i){return i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(":"),r=D3.camelize(t.slice(0,n)),s=t.slice(n+1).trim();return e[r]=s,e},{})}function N3(i){return i.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Wy(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof i=="string")return i;var n=(i.children||[]).map(function(l){return Wy(l)}),r=Object.keys(i.attributes||{}).reduce(function(l,c){var u=i.attributes[c];switch(c){case"class":l.class=N3(u);break;case"style":l.style=O3(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});t.class;var s=t.style,a=s===void 0?{}:s,o=C3(t,I3);return HS(i.tag,fr(fr(fr({},e),{},{class:r.class,style:fr(fr({},r.style),a)},r.attrs),o),n)}var Xy=!1;try{Xy=!0}catch{}function U3(){if(!Xy&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function Sh(i,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Oi({},i,e):{}}function F3(i){var e,t=(e={"fa-spin":i.spin,"fa-pulse":i.pulse,"fa-fw":i.fixedWidth,"fa-border":i.border,"fa-li":i.listItem,"fa-inverse":i.inverse,"fa-flip":i.flip===!0,"fa-flip-horizontal":i.flip==="horizontal"||i.flip==="both","fa-flip-vertical":i.flip==="vertical"||i.flip==="both"},Oi(e,"fa-".concat(i.size),i.size!==null),Oi(e,"fa-rotate-".concat(i.rotation),i.rotation!==null),Oi(e,"fa-pull-".concat(i.pull),i.pull!==null),Oi(e,"fa-swap-opacity",i.swapOpacity),Oi(e,"fa-bounce",i.bounce),Oi(e,"fa-shake",i.shake),Oi(e,"fa-beat",i.beat),Oi(e,"fa-fade",i.fade),Oi(e,"fa-beat-fade",i.beatFade),Oi(e,"fa-flash",i.flash),Oi(e,"fa-spin-pulse",i.spinPulse),Oi(e,"fa-spin-reverse",i.spinReverse),e);return Object.keys(t).map(function(n){return t[n]?n:null}).filter(function(n){return n})}function Z_(i){if(i&&Du(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(Ad.icon)return Ad.icon(i);if(i===null)return null;if(Du(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}var k3=Zb({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=Un(function(){return Z_(e.icon)}),s=Un(function(){return Sh("classes",F3(e))}),a=Un(function(){return Sh("transform",typeof e.transform=="string"?Ad.transform(e.transform):e.transform)}),o=Un(function(){return Sh("mask",Z_(e.mask))}),l=Un(function(){return w3(r.value,fr(fr(fr(fr({},s.value),a.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Hs(l,function(u){if(!u)return U3("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var c=Un(function(){return l.value?Wy(l.value.abstract[0],{},n):null});return function(){return c.value}}}),B3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},z3={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},V3={prefix:"fas",iconName:"angles-down",icon:[448,512,["angle-double-down"],"f103","M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"]},H3={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},G3={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]};T3.add(z3,B3,G3,H3,V3);const W3=mM(XP);W3.use(YP).component("font-awesome-icon",k3).mount("#app");
