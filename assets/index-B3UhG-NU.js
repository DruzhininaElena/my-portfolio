function _y(i,l){for(var c=0;c<l.length;c++){const o=l[c];if(typeof o!="string"&&!Array.isArray(o)){for(const m in o)if(m!=="default"&&!(m in i)){const p=Object.getOwnPropertyDescriptor(o,m);p&&Object.defineProperty(i,m,p.get?p:{enumerable:!0,get:()=>o[m]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const T of p.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&o(T)}).observe(document,{childList:!0,subtree:!0});function c(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(m){if(m.ep)return;m.ep=!0;const p=c(m);fetch(m.href,p)}})();function bf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ys={exports:{}},qr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Ty(){if(hm)return qr;hm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function c(o,m,p){var T=null;if(p!==void 0&&(T=""+p),m.key!==void 0&&(T=""+m.key),"key"in m){p={};for(var f in m)f!=="key"&&(p[f]=m[f])}else p=m;return m=p.ref,{$$typeof:i,type:o,key:T,ref:m!==void 0?m:null,props:p}}return qr.Fragment=l,qr.jsx=c,qr.jsxs=c,qr}var mm;function Ey(){return mm||(mm=1,ys.exports=Ty()),ys.exports}var Q=Ey(),bs={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function Oy(){if(pm)return _t;pm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),T=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),w=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,A={};function C(M,G,et){this.props=M,this.context=G,this.refs=A,this.updater=et||b}C.prototype.isReactComponent={},C.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},C.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function B(){}B.prototype=C.prototype;function R(M,G,et){this.props=M,this.context=G,this.refs=A,this.updater=et||b}var y=R.prototype=new B;y.constructor=R,_(y,C.prototype),y.isPureReactComponent=!0;var O=Array.isArray,v={H:null,A:null,T:null,S:null},x=Object.prototype.hasOwnProperty;function D(M,G,et,ut,N,St){return et=St.ref,{$$typeof:i,type:M,key:G,ref:et!==void 0?et:null,props:St}}function P(M,G){return D(M.type,G,void 0,void 0,void 0,M.props)}function H(M){return typeof M=="object"&&M!==null&&M.$$typeof===i}function K(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(et){return G[et]})}var V=/\/+/g;function z(M,G){return typeof M=="object"&&M!==null&&M.key!=null?K(""+M.key):G.toString(36)}function I(){}function W(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(I,I):(M.status="pending",M.then(function(G){M.status==="pending"&&(M.status="fulfilled",M.value=G)},function(G){M.status==="pending"&&(M.status="rejected",M.reason=G)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function F(M,G,et,ut,N){var St=typeof M;(St==="undefined"||St==="boolean")&&(M=null);var it=!1;if(M===null)it=!0;else switch(St){case"bigint":case"string":case"number":it=!0;break;case"object":switch(M.$$typeof){case i:case l:it=!0;break;case g:return it=M._init,F(it(M._payload),G,et,ut,N)}}if(it)return N=N(M),it=ut===""?"."+z(M,0):ut,O(N)?(et="",it!=null&&(et=it.replace(V,"$&/")+"/"),F(N,G,et,"",function(vt){return vt})):N!=null&&(H(N)&&(N=P(N,et+(N.key==null||M&&M.key===N.key?"":(""+N.key).replace(V,"$&/")+"/")+it)),G.push(N)),1;it=0;var pt=ut===""?".":ut+":";if(O(M))for(var dt=0;dt<M.length;dt++)ut=M[dt],St=pt+z(ut,dt),it+=F(ut,G,et,St,N);else if(dt=S(M),typeof dt=="function")for(M=dt.call(M),dt=0;!(ut=M.next()).done;)ut=ut.value,St=pt+z(ut,dt++),it+=F(ut,G,et,St,N);else if(St==="object"){if(typeof M.then=="function")return F(W(M),G,et,ut,N);throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return it}function Y(M,G,et){if(M==null)return M;var ut=[],N=0;return F(M,ut,"","",function(St){return G.call(et,St,N++)}),ut}function at(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(et){(M._status===0||M._status===-1)&&(M._status=1,M._result=et)},function(et){(M._status===0||M._status===-1)&&(M._status=2,M._result=et)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var tt=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function rt(){}return _t.Children={map:Y,forEach:function(M,G,et){Y(M,function(){G.apply(this,arguments)},et)},count:function(M){var G=0;return Y(M,function(){G++}),G},toArray:function(M){return Y(M,function(G){return G})||[]},only:function(M){if(!H(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},_t.Component=C,_t.Fragment=c,_t.Profiler=m,_t.PureComponent=R,_t.StrictMode=o,_t.Suspense=d,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,_t.act=function(){throw Error("act(...) is not supported in production builds of React.")},_t.cache=function(M){return function(){return M.apply(null,arguments)}},_t.cloneElement=function(M,G,et){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ut=_({},M.props),N=M.key,St=void 0;if(G!=null)for(it in G.ref!==void 0&&(St=void 0),G.key!==void 0&&(N=""+G.key),G)!x.call(G,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&G.ref===void 0||(ut[it]=G[it]);var it=arguments.length-2;if(it===1)ut.children=et;else if(1<it){for(var pt=Array(it),dt=0;dt<it;dt++)pt[dt]=arguments[dt+2];ut.children=pt}return D(M.type,N,void 0,void 0,St,ut)},_t.createContext=function(M){return M={$$typeof:T,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:p,_context:M},M},_t.createElement=function(M,G,et){var ut,N={},St=null;if(G!=null)for(ut in G.key!==void 0&&(St=""+G.key),G)x.call(G,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(N[ut]=G[ut]);var it=arguments.length-2;if(it===1)N.children=et;else if(1<it){for(var pt=Array(it),dt=0;dt<it;dt++)pt[dt]=arguments[dt+2];N.children=pt}if(M&&M.defaultProps)for(ut in it=M.defaultProps,it)N[ut]===void 0&&(N[ut]=it[ut]);return D(M,St,void 0,void 0,null,N)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(M){return{$$typeof:f,render:M}},_t.isValidElement=H,_t.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:at}},_t.memo=function(M,G){return{$$typeof:s,type:M,compare:G===void 0?null:G}},_t.startTransition=function(M){var G=v.T,et={};v.T=et;try{var ut=M(),N=v.S;N!==null&&N(et,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(rt,tt)}catch(St){tt(St)}finally{v.T=G}},_t.unstable_useCacheRefresh=function(){return v.H.useCacheRefresh()},_t.use=function(M){return v.H.use(M)},_t.useActionState=function(M,G,et){return v.H.useActionState(M,G,et)},_t.useCallback=function(M,G){return v.H.useCallback(M,G)},_t.useContext=function(M){return v.H.useContext(M)},_t.useDebugValue=function(){},_t.useDeferredValue=function(M,G){return v.H.useDeferredValue(M,G)},_t.useEffect=function(M,G){return v.H.useEffect(M,G)},_t.useId=function(){return v.H.useId()},_t.useImperativeHandle=function(M,G,et){return v.H.useImperativeHandle(M,G,et)},_t.useInsertionEffect=function(M,G){return v.H.useInsertionEffect(M,G)},_t.useLayoutEffect=function(M,G){return v.H.useLayoutEffect(M,G)},_t.useMemo=function(M,G){return v.H.useMemo(M,G)},_t.useOptimistic=function(M,G){return v.H.useOptimistic(M,G)},_t.useReducer=function(M,G,et){return v.H.useReducer(M,G,et)},_t.useRef=function(M){return v.H.useRef(M)},_t.useState=function(M){return v.H.useState(M)},_t.useSyncExternalStore=function(M,G,et){return v.H.useSyncExternalStore(M,G,et)},_t.useTransition=function(){return v.H.useTransition()},_t.version="19.0.0",_t}var vm;function rn(){return vm||(vm=1,bs.exports=Oy()),bs.exports}var yt=rn();const nn=bf(yt),gm=_y({__proto__:null,default:nn},[yt]);var Ss={exports:{}},Hr={},_s={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Ay(){return ym||(ym=1,function(i){function l(Y,at){var tt=Y.length;Y.push(at);t:for(;0<tt;){var rt=tt-1>>>1,M=Y[rt];if(0<m(M,at))Y[rt]=at,Y[tt]=M,tt=rt;else break t}}function c(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var at=Y[0],tt=Y.pop();if(tt!==at){Y[0]=tt;t:for(var rt=0,M=Y.length,G=M>>>1;rt<G;){var et=2*(rt+1)-1,ut=Y[et],N=et+1,St=Y[N];if(0>m(ut,tt))N<M&&0>m(St,ut)?(Y[rt]=St,Y[N]=tt,rt=N):(Y[rt]=ut,Y[et]=tt,rt=et);else if(N<M&&0>m(St,tt))Y[rt]=St,Y[N]=tt,rt=N;else break t}}return at}function m(Y,at){var tt=Y.sortIndex-at.sortIndex;return tt!==0?tt:Y.id-at.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var T=Date,f=T.now();i.unstable_now=function(){return T.now()-f}}var d=[],s=[],g=1,w=null,S=3,b=!1,_=!1,A=!1,C=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function y(Y){for(var at=c(s);at!==null;){if(at.callback===null)o(s);else if(at.startTime<=Y)o(s),at.sortIndex=at.expirationTime,l(d,at);else break;at=c(s)}}function O(Y){if(A=!1,y(Y),!_)if(c(d)!==null)_=!0,W();else{var at=c(s);at!==null&&F(O,at.startTime-Y)}}var v=!1,x=-1,D=5,P=-1;function H(){return!(i.unstable_now()-P<D)}function K(){if(v){var Y=i.unstable_now();P=Y;var at=!0;try{t:{_=!1,A&&(A=!1,B(x),x=-1),b=!0;var tt=S;try{e:{for(y(Y),w=c(d);w!==null&&!(w.expirationTime>Y&&H());){var rt=w.callback;if(typeof rt=="function"){w.callback=null,S=w.priorityLevel;var M=rt(w.expirationTime<=Y);if(Y=i.unstable_now(),typeof M=="function"){w.callback=M,y(Y),at=!0;break e}w===c(d)&&o(d),y(Y)}else o(d);w=c(d)}if(w!==null)at=!0;else{var G=c(s);G!==null&&F(O,G.startTime-Y),at=!1}}break t}finally{w=null,S=tt,b=!1}at=void 0}}finally{at?V():v=!1}}}var V;if(typeof R=="function")V=function(){R(K)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,I=z.port2;z.port1.onmessage=K,V=function(){I.postMessage(null)}}else V=function(){C(K,0)};function W(){v||(v=!0,V())}function F(Y,at){x=C(function(){Y(i.unstable_now())},at)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_continueExecution=function(){_||b||(_=!0,W())},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_getFirstCallbackNode=function(){return c(d)},i.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var at=3;break;default:at=S}var tt=S;S=at;try{return Y()}finally{S=tt}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Y,at){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var tt=S;S=Y;try{return at()}finally{S=tt}},i.unstable_scheduleCallback=function(Y,at,tt){var rt=i.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?rt+tt:rt):tt=rt,Y){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=tt+M,Y={id:g++,callback:at,priorityLevel:Y,startTime:tt,expirationTime:M,sortIndex:-1},tt>rt?(Y.sortIndex=tt,l(s,Y),c(d)===null&&Y===c(s)&&(A?(B(x),x=-1):A=!0,F(O,tt-rt))):(Y.sortIndex=M,l(d,Y),_||b||(_=!0,W())),Y},i.unstable_shouldYield=H,i.unstable_wrapCallback=function(Y){var at=S;return function(){var tt=S;S=at;try{return Y.apply(this,arguments)}finally{S=tt}}}}(Ts)),Ts}var bm;function wy(){return bm||(bm=1,_s.exports=Ay()),_s.exports}var Es={exports:{}},pe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function xy(){if(Sm)return pe;Sm=1;var i=rn();function l(d){var s="https://react.dev/errors/"+d;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)s+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(l(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(d,s,g){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:w==null?null:""+w,children:d,containerInfo:s,implementation:g}}var T=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,s){if(d==="font")return"";if(typeof s=="string")return s==="use-credentials"?s:""}return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,pe.createPortal=function(d,s){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)throw Error(l(299));return p(d,s,null,g)},pe.flushSync=function(d){var s=T.T,g=o.p;try{if(T.T=null,o.p=2,d)return d()}finally{T.T=s,o.p=g,o.d.f()}},pe.preconnect=function(d,s){typeof d=="string"&&(s?(s=s.crossOrigin,s=typeof s=="string"?s==="use-credentials"?s:"":void 0):s=null,o.d.C(d,s))},pe.prefetchDNS=function(d){typeof d=="string"&&o.d.D(d)},pe.preinit=function(d,s){if(typeof d=="string"&&s&&typeof s.as=="string"){var g=s.as,w=f(g,s.crossOrigin),S=typeof s.integrity=="string"?s.integrity:void 0,b=typeof s.fetchPriority=="string"?s.fetchPriority:void 0;g==="style"?o.d.S(d,typeof s.precedence=="string"?s.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:b}):g==="script"&&o.d.X(d,{crossOrigin:w,integrity:S,fetchPriority:b,nonce:typeof s.nonce=="string"?s.nonce:void 0})}},pe.preinitModule=function(d,s){if(typeof d=="string")if(typeof s=="object"&&s!==null){if(s.as==null||s.as==="script"){var g=f(s.as,s.crossOrigin);o.d.M(d,{crossOrigin:g,integrity:typeof s.integrity=="string"?s.integrity:void 0,nonce:typeof s.nonce=="string"?s.nonce:void 0})}}else s==null&&o.d.M(d)},pe.preload=function(d,s){if(typeof d=="string"&&typeof s=="object"&&s!==null&&typeof s.as=="string"){var g=s.as,w=f(g,s.crossOrigin);o.d.L(d,g,{crossOrigin:w,integrity:typeof s.integrity=="string"?s.integrity:void 0,nonce:typeof s.nonce=="string"?s.nonce:void 0,type:typeof s.type=="string"?s.type:void 0,fetchPriority:typeof s.fetchPriority=="string"?s.fetchPriority:void 0,referrerPolicy:typeof s.referrerPolicy=="string"?s.referrerPolicy:void 0,imageSrcSet:typeof s.imageSrcSet=="string"?s.imageSrcSet:void 0,imageSizes:typeof s.imageSizes=="string"?s.imageSizes:void 0,media:typeof s.media=="string"?s.media:void 0})}},pe.preloadModule=function(d,s){if(typeof d=="string")if(s){var g=f(s.as,s.crossOrigin);o.d.m(d,{as:typeof s.as=="string"&&s.as!=="script"?s.as:void 0,crossOrigin:g,integrity:typeof s.integrity=="string"?s.integrity:void 0})}else o.d.m(d)},pe.requestFormReset=function(d){o.d.r(d)},pe.unstable_batchedUpdates=function(d,s){return d(s)},pe.useFormState=function(d,s,g){return T.H.useFormState(d,s,g)},pe.useFormStatus=function(){return T.H.useHostTransitionStatus()},pe.version="19.0.0",pe}var _m;function Dy(){if(_m)return Es.exports;_m=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Es.exports=xy(),Es.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function My(){if(Tm)return Hr;Tm=1;var i=wy(),l=rn(),c=Dy();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var p=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),b=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),O=Symbol.for("react.memo_cache_sentinel"),v=Symbol.iterator;function x(t){return t===null||typeof t!="object"?null:(t=v&&t[v]||t["@@iterator"],typeof t=="function"?t:null)}var D=Symbol.for("react.client.reference");function P(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===D?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case d:return"Fragment";case f:return"Portal";case g:return"Profiler";case s:return"StrictMode";case A:return"Suspense";case C:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b:return(t.displayName||"Context")+".Provider";case S:return(t._context.displayName||"Context")+".Consumer";case _:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return e=t.displayName||null,e!==null?e:P(t.type)||"Memo";case R:e=t._payload,t=t._init;try{return P(t(e))}catch{}}return null}var H=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=Object.assign,V,z;function I(t){if(V===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);V=e&&e[1]||"",z=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+t+z}var W=!1;function F(t,e){if(!t||W)return"";W=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var nt=function(){throw Error()};if(Object.defineProperty(nt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(nt,[])}catch(Z){var $=Z}Reflect.construct(t,[],nt)}else{try{nt.call()}catch(Z){$=Z}t.call(nt.prototype)}}else{try{throw Error()}catch(Z){$=Z}(nt=t())&&typeof nt.catch=="function"&&nt.catch(function(){})}}catch(Z){if(Z&&$&&typeof Z.stack=="string")return[Z.stack,$.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),h=u[0],E=u[1];if(h&&E){var j=h.split(`
`),L=E.split(`
`);for(r=a=0;a<j.length&&!j[a].includes("DetermineComponentFrameRoot");)a++;for(;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;if(a===j.length||r===L.length)for(a=j.length-1,r=L.length-1;1<=a&&0<=r&&j[a]!==L[r];)r--;for(;1<=a&&0<=r;a--,r--)if(j[a]!==L[r]){if(a!==1||r!==1)do if(a--,r--,0>r||j[a]!==L[r]){var k=`
`+j[a].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=a&&0<=r);break}}}finally{W=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?I(n):""}function Y(t){switch(t.tag){case 26:case 27:case 5:return I(t.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return t=F(t.type,!1),t;case 11:return t=F(t.type.render,!1),t;case 1:return t=F(t.type,!0),t;default:return""}}function at(t){try{var e="";do e+=Y(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function tt(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function M(t){if(tt(t)!==t)throw Error(o(188))}function G(t){var e=t.alternate;if(!e){if(e=tt(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,a=e;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return M(r),t;if(u===a)return M(r),e;u=u.sibling}throw Error(o(188))}if(n.return!==a.return)n=r,a=u;else{for(var h=!1,E=r.child;E;){if(E===n){h=!0,n=r,a=u;break}if(E===a){h=!0,a=r,n=u;break}E=E.sibling}if(!h){for(E=u.child;E;){if(E===n){h=!0,n=u,a=r;break}if(E===a){h=!0,a=u,n=r;break}E=E.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function et(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=et(t),e!==null)return e;t=t.sibling}return null}var ut=Array.isArray,N=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,St={pending:!1,data:null,method:null,action:null},it=[],pt=-1;function dt(t){return{current:t}}function vt(t){0>pt||(t.current=it[pt],it[pt]=null,pt--)}function ht(t,e){pt++,it[pt]=t.current,t.current=e}var Ut=dt(null),It=dt(null),Se=dt(null),ln=dt(null);function ua(t,e){switch(ht(Se,e),ht(It,t),ht(Ut,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Xh(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Xh(t),e=$h(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Ut),ht(Ut,e)}function ze(){vt(Ut),vt(It),vt(Se)}function Li(t){t.memoizedState!==null&&ht(ln,t);var e=Ut.current,n=$h(e,t.type);e!==n&&(ht(It,t),ht(Ut,n))}function oa(t){It.current===t&&(vt(Ut),vt(It)),ln.current===t&&(vt(ln),Nr._currentValue=St)}var Bi=Object.prototype.hasOwnProperty,qi=i.unstable_scheduleCallback,Ba=i.unstable_cancelCallback,Hi=i.unstable_shouldYield,Yi=i.unstable_requestPaint,Ue=i.unstable_now,Pi=i.unstable_getCurrentPriorityLevel,ca=i.unstable_ImmediatePriority,Xi=i.unstable_UserBlockingPriority,qa=i.unstable_NormalPriority,so=i.unstable_LowPriority,Ha=i.unstable_IdlePriority,fo=i.log,Ya=i.unstable_setDisableYieldValue,sa=null,Ae=null;function rg(t){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(sa,t,void 0,(t.current.flags&128)===128)}catch{}}function Ln(t){if(typeof fo=="function"&&Ya(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(sa,t)}catch{}}var we=Math.clz32?Math.clz32:og,lg=Math.log,ug=Math.LN2;function og(t){return t>>>=0,t===0?32:31-(lg(t)/ug|0)|0}var ll=128,ul=4194304;function fa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var a=0,r=t.suspendedLanes,u=t.pingedLanes,h=t.warmLanes;t=t.finishedLanes!==0;var E=n&134217727;return E!==0?(n=E&~r,n!==0?a=fa(n):(u&=E,u!==0?a=fa(u):t||(h=E&~h,h!==0&&(a=fa(h))))):(E=n&~r,E!==0?a=fa(E):u!==0?a=fa(u):t||(h=n&~h,h!==0&&(a=fa(h)))),a===0?0:e!==0&&e!==a&&(e&r)===0&&(r=a&-a,h=e&-e,r>=h||r===32&&(h&4194176)!==0)?e:a}function $i(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function cg(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(){var t=ll;return ll<<=1,(ll&4194176)===0&&(ll=128),t}function Uf(){var t=ul;return ul<<=1,(ul&62914560)===0&&(ul=4194304),t}function ho(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sg(t,e,n,a,r,u){var h=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var E=t.entanglements,j=t.expirationTimes,L=t.hiddenUpdates;for(n=h&~n;0<n;){var k=31-we(n),nt=1<<k;E[k]=0,j[k]=-1;var $=L[k];if($!==null)for(L[k]=null,k=0;k<$.length;k++){var Z=$[k];Z!==null&&(Z.lane&=-536870913)}n&=~nt}a!==0&&Lf(t,a,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(h&~e))}function Lf(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-we(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194218}function Bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-we(n),r=1<<a;r&e|t[a]&e&&(t[a]|=e),n&=~r}}function qf(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hf(){var t=N.p;return t!==0?t:(t=window.event,t===void 0?32:um(t.type))}function fg(t,e){var n=N.p;try{return N.p=t,e()}finally{N.p=n}}var Bn=Math.random().toString(36).slice(2),he="__reactFiber$"+Bn,_e="__reactProps$"+Bn,Pa="__reactContainer$"+Bn,mo="__reactEvents$"+Bn,dg="__reactListeners$"+Bn,hg="__reactHandles$"+Bn,Yf="__reactResources$"+Bn,Vi="__reactMarker$"+Bn;function po(t){delete t[he],delete t[_e],delete t[mo],delete t[dg],delete t[hg]}function da(t){var e=t[he];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pa]||n[he]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[he])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){if(t=t[he]||t[Pa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Qi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function $a(t){var e=t[Yf];return e||(e=t[Yf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ne(t){t[Vi]=!0}var Pf=new Set,Xf={};function ha(t,e){Ga(t,e),Ga(t+"Capture",e)}function Ga(t,e){for(Xf[t]=e,t=0;t<e.length;t++)Pf.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$f={},Gf={};function pg(t){return Bi.call(Gf,t)?!0:Bi.call($f,t)?!1:mg.test(t)?Gf[t]=!0:($f[t]=!0,!1)}function cl(t,e,n){if(pg(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function sl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function yn(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function Le(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vg(t){var e=Vf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(h){a=""+h,u.call(this,h)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fl(t){t._valueTracker||(t._valueTracker=vg(t))}function Qf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Vf(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var gg=/[\n"\\]/g;function Be(t){return t.replace(gg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vo(t,e,n,a,r,u,h,E){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Le(e)):t.value!==""+Le(e)&&(t.value=""+Le(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?go(t,h,Le(e)):n!=null?go(t,h,Le(n)):a!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Le(E):t.removeAttribute("name")}function If(t,e,n,a,r,u,h,E){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Le(n):"",e=e!=null?""+Le(e):n,E||e===t.value||(t.value=e),t.defaultValue=e}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=E?t.checked:!!a,t.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function go(t,e,n){e==="number"&&dl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Va(t,e,n,a){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Le(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,a&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zf(t,e,n){if(e!=null&&(e=""+Le(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Le(n):""}function Kf(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(o(92));if(ut(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Le(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function Qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kf(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||yg.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Jf(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var r in e)a=e[r],e.hasOwnProperty(r)&&n[r]!==a&&kf(t,r,a)}else for(var u in e)e.hasOwnProperty(u)&&kf(t,u,e[u])}function yo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(t){return Sg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var bo=null;function So(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,Za=null;function Wf(t){var e=Xa(t);if(e&&(t=e.stateNode)){var n=t[_e]||null;t:switch(t=e.stateNode,e.type){case"input":if(vo(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Be(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var r=a[_e]||null;if(!r)throw Error(o(90));vo(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&Qf(a)}break t;case"textarea":Zf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Va(t,!!n.multiple,e,!1)}}}var _o=!1;function Ff(t,e,n){if(_o)return t(e,n);_o=!0;try{var a=t(e);return a}finally{if(_o=!1,(Ia!==null||Za!==null)&&(kl(),Ia&&(e=Ia,t=Za,Za=Ia=null,Wf(e),t)))for(e=0;e<t.length;e++)Wf(t[e])}}function Ii(t,e){var n=t.stateNode;if(n===null)return null;var a=n[_e]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var To=!1;if(gn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){To=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{To=!1}var qn=null,Eo=null,ml=null;function td(){if(ml)return ml;var t,e=Eo,n=e.length,a,r="value"in qn?qn.value:qn.textContent,u=r.length;for(t=0;t<n&&e[t]===r[t];t++);var h=n-t;for(a=1;a<=h&&e[n-a]===r[u-a];a++);return ml=r.slice(t,1<a?1-a:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function ed(){return!1}function Te(t){function e(n,a,r,u,h){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(n=t[E],this[E]=n?n(u):u[E]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?vl:ed,this.isPropagationStopped=ed,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Te(ma),Ki=K({},ma,{view:0,detail:0}),_g=Te(Ki),Oo,Ao,ki,yl=K({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(Oo=t.screenX-ki.screenX,Ao=t.screenY-ki.screenY):Ao=Oo=0,ki=t),Oo)},movementY:function(t){return"movementY"in t?t.movementY:Ao}}),nd=Te(yl),Tg=K({},yl,{dataTransfer:0}),Eg=Te(Tg),Og=K({},Ki,{relatedTarget:0}),wo=Te(Og),Ag=K({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),wg=Te(Ag),xg=K({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dg=Te(xg),Mg=K({},ma,{data:0}),ad=Te(Mg),Cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rg[t])?!!e[t]:!1}function xo(){return Ng}var zg=K({},Ki,{key:function(t){if(t.key){var e=Cg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ug=Te(zg),Lg=K({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=Te(Lg),Bg=K({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),qg=Te(Bg),Hg=K({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=Te(Hg),Pg=K({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=Te(Pg),$g=K({},ma,{newState:0,oldState:0}),Gg=Te($g),Vg=[9,13,27,32],Do=gn&&"CompositionEvent"in window,Ji=null;gn&&"documentMode"in document&&(Ji=document.documentMode);var Qg=gn&&"TextEvent"in window&&!Ji,rd=gn&&(!Do||Ji&&8<Ji&&11>=Ji),ld=" ",ud=!1;function od(t,e){switch(t){case"keyup":return Vg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ka=!1;function Ig(t,e){switch(t){case"compositionend":return cd(e);case"keypress":return e.which!==32?null:(ud=!0,ld);case"textInput":return t=e.data,t===ld&&ud?null:t;default:return null}}function Zg(t,e){if(Ka)return t==="compositionend"||!Do&&od(t,e)?(t=td(),ml=Eo=qn=null,Ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rd&&e.locale!=="ko"?null:e.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kg[t.type]:e==="textarea"}function fd(t,e,n,a){Ia?Za?Za.push(a):Za=[a]:Ia=a,e=eu(e,"onChange"),0<e.length&&(n=new gl("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Wi=null,Fi=null;function kg(t){Bh(t,0)}function bl(t){var e=Qi(t);if(Qf(e))return t}function dd(t,e){if(t==="change")return e}var hd=!1;if(gn){var Mo;if(gn){var Co="oninput"in document;if(!Co){var md=document.createElement("div");md.setAttribute("oninput","return;"),Co=typeof md.oninput=="function"}Mo=Co}else Mo=!1;hd=Mo&&(!document.documentMode||9<document.documentMode)}function pd(){Wi&&(Wi.detachEvent("onpropertychange",vd),Fi=Wi=null)}function vd(t){if(t.propertyName==="value"&&bl(Fi)){var e=[];fd(e,Fi,t,So(t)),Ff(kg,e)}}function Jg(t,e,n){t==="focusin"?(pd(),Wi=e,Fi=n,Wi.attachEvent("onpropertychange",vd)):t==="focusout"&&pd()}function Wg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(Fi)}function Fg(t,e){if(t==="click")return bl(e)}function t1(t,e){if(t==="input"||t==="change")return bl(e)}function e1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xe=typeof Object.is=="function"?Object.is:e1;function tr(t,e){if(xe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Bi.call(e,r)||!xe(t[r],e[r]))return!1}return!0}function gd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yd(t,e){var n=gd(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=gd(n)}}function bd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=dl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function jo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function n1(t,e){var n=Sd(e);e=t.focusedElem;var a=t.selectionRange;if(n!==e&&e&&e.ownerDocument&&bd(e.ownerDocument.documentElement,e)){if(a!==null&&jo(e)){if(t=a.start,n=a.end,n===void 0&&(n=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(n,e.value.length);else if(n=(t=e.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var r=e.textContent.length,u=Math.min(a.start,r);a=a.end===void 0?u:Math.min(a.end,r),!n.extend&&u>a&&(r=a,a=u,u=r),r=yd(e,u);var h=yd(e,a);r&&h&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==h.node||n.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),n.removeAllRanges(),u>a?(n.addRange(t),n.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),n.addRange(t)))}}for(t=[],n=e;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)n=t[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var a1=gn&&"documentMode"in document&&11>=document.documentMode,ka=null,Ro=null,er=null,No=!1;function _d(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;No||ka==null||ka!==dl(a)||(a=ka,"selectionStart"in a&&jo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),er&&tr(er,a)||(er=a,a=eu(Ro,"onSelect"),0<a.length&&(e=new gl("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=ka)))}function pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ja={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},zo={},Td={};gn&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function va(t){if(zo[t])return zo[t];if(!Ja[t])return t;var e=Ja[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Td)return zo[t]=e[n];return t}var Ed=va("animationend"),Od=va("animationiteration"),Ad=va("animationstart"),i1=va("transitionrun"),r1=va("transitionstart"),l1=va("transitioncancel"),wd=va("transitionend"),xd=new Map,Dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ke(t,e){xd.set(t,e),ha(e,[t])}var qe=[],Wa=0,Uo=0;function Sl(){for(var t=Wa,e=Uo=Wa=0;e<t;){var n=qe[e];qe[e++]=null;var a=qe[e];qe[e++]=null;var r=qe[e];qe[e++]=null;var u=qe[e];if(qe[e++]=null,a!==null&&r!==null){var h=a.pending;h===null?r.next=r:(r.next=h.next,h.next=r),a.pending=r}u!==0&&Md(n,r,u)}}function _l(t,e,n,a){qe[Wa++]=t,qe[Wa++]=e,qe[Wa++]=n,qe[Wa++]=a,Uo|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Lo(t,e,n,a){return _l(t,e,n,a),Tl(t)}function Hn(t,e){return _l(t,null,null,e),Tl(t)}function Md(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var r=!1,u=t.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),t=u,u=u.return;r&&e!==null&&t.tag===3&&(u=t.stateNode,r=31-we(n),u=u.hiddenUpdates,t=u[r],t===null?u[r]=[e]:t.push(e),e.lane=n|536870912)}function Tl(t){if(50<wr)throw wr=0,Xc=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Fa={},Cd=new WeakMap;function He(t,e){if(typeof t=="object"&&t!==null){var n=Cd.get(t);return n!==void 0?n:(e={value:t,source:e,stack:at(e)},Cd.set(t,e),e)}return{value:t,source:e,stack:at(e)}}var ti=[],ei=0,El=null,Ol=0,Ye=[],Pe=0,ga=null,bn=1,Sn="";function ya(t,e){ti[ei++]=Ol,ti[ei++]=El,El=t,Ol=e}function jd(t,e,n){Ye[Pe++]=bn,Ye[Pe++]=Sn,Ye[Pe++]=ga,ga=t;var a=bn;t=Sn;var r=32-we(a)-1;a&=~(1<<r),n+=1;var u=32-we(e)+r;if(30<u){var h=r-r%5;u=(a&(1<<h)-1).toString(32),a>>=h,r-=h,bn=1<<32-we(e)+r|n<<r|a,Sn=u+t}else bn=1<<u|n<<r|a,Sn=t}function Bo(t){t.return!==null&&(ya(t,1),jd(t,1,0))}function qo(t){for(;t===El;)El=ti[--ei],ti[ei]=null,Ol=ti[--ei],ti[ei]=null;for(;t===ga;)ga=Ye[--Pe],Ye[Pe]=null,Sn=Ye[--Pe],Ye[Pe]=null,bn=Ye[--Pe],Ye[Pe]=null}var ye=null,oe=null,Dt=!1,Je=null,un=!1,Ho=Error(o(519));function ba(t){var e=Error(o(418,""));throw ir(He(e,t)),Ho}function Rd(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[he]=t,e[_e]=a,n){case"dialog":wt("cancel",e),wt("close",e);break;case"iframe":case"object":case"embed":wt("load",e);break;case"video":case"audio":for(n=0;n<Dr.length;n++)wt(Dr[n],e);break;case"source":wt("error",e);break;case"img":case"image":case"link":wt("error",e),wt("load",e);break;case"details":wt("toggle",e);break;case"input":wt("invalid",e),If(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),fl(e);break;case"select":wt("invalid",e);break;case"textarea":wt("invalid",e),Kf(e,a.value,a.defaultValue,a.children),fl(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Ph(e.textContent,n)?(a.popover!=null&&(wt("beforetoggle",e),wt("toggle",e)),a.onScroll!=null&&wt("scroll",e),a.onScrollEnd!=null&&wt("scrollend",e),a.onClick!=null&&(e.onclick=nu),e=!0):e=!1,e||ba(t)}function Nd(t){for(ye=t.return;ye;)switch(ye.tag){case 3:case 27:un=!0;return;case 5:case 13:un=!1;return;default:ye=ye.return}}function nr(t){if(t!==ye)return!1;if(!Dt)return Nd(t),Dt=!0,!1;var e=!1,n;if((n=t.tag!==3&&t.tag!==27)&&((n=t.tag===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||rs(t.type,t.memoizedProps)),n=!n),n&&(e=!0),e&&oe&&ba(t),Nd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){oe=Fe(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}oe=null}}else oe=ye?Fe(t.stateNode.nextSibling):null;return!0}function ar(){oe=ye=null,Dt=!1}function ir(t){Je===null?Je=[t]:Je.push(t)}var rr=Error(o(460)),zd=Error(o(474)),Yo={then:function(){}};function Ud(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Al(){}function Ld(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Al,Al),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===rr?Error(o(483)):t;default:if(typeof e.status=="string")e.then(Al,Al);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=a}},function(a){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===rr?Error(o(483)):t}throw lr=e,rr}}var lr=null;function Bd(){if(lr===null)throw Error(o(459));var t=lr;return lr=null,t}var ni=null,ur=0;function wl(t){var e=ur;return ur+=1,ni===null&&(ni=[]),Ld(ni,t,e)}function or(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function xl(t,e){throw e.$$typeof===p?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function qd(t){var e=t._init;return e(t._payload)}function Hd(t){function e(q,U){if(t){var X=q.deletions;X===null?(q.deletions=[U],q.flags|=16):X.push(U)}}function n(q,U){if(!t)return null;for(;U!==null;)e(q,U),U=U.sibling;return null}function a(q){for(var U=new Map;q!==null;)q.key!==null?U.set(q.key,q):U.set(q.index,q),q=q.sibling;return U}function r(q,U){return q=Jn(q,U),q.index=0,q.sibling=null,q}function u(q,U,X){return q.index=X,t?(X=q.alternate,X!==null?(X=X.index,X<U?(q.flags|=33554434,U):X):(q.flags|=33554434,U)):(q.flags|=1048576,U)}function h(q){return t&&q.alternate===null&&(q.flags|=33554434),q}function E(q,U,X,J){return U===null||U.tag!==6?(U=zc(X,q.mode,J),U.return=q,U):(U=r(U,X),U.return=q,U)}function j(q,U,X,J){var ot=X.type;return ot===d?k(q,U,X.props.children,J,X.key):U!==null&&(U.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===R&&qd(ot)===U.type)?(U=r(U,X.props),or(U,X),U.return=q,U):(U=Vl(X.type,X.key,X.props,null,q.mode,J),or(U,X),U.return=q,U)}function L(q,U,X,J){return U===null||U.tag!==4||U.stateNode.containerInfo!==X.containerInfo||U.stateNode.implementation!==X.implementation?(U=Uc(X,q.mode,J),U.return=q,U):(U=r(U,X.children||[]),U.return=q,U)}function k(q,U,X,J,ot){return U===null||U.tag!==7?(U=Ma(X,q.mode,J,ot),U.return=q,U):(U=r(U,X),U.return=q,U)}function nt(q,U,X){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=zc(""+U,q.mode,X),U.return=q,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case T:return X=Vl(U.type,U.key,U.props,null,q.mode,X),or(X,U),X.return=q,X;case f:return U=Uc(U,q.mode,X),U.return=q,U;case R:var J=U._init;return U=J(U._payload),nt(q,U,X)}if(ut(U)||x(U))return U=Ma(U,q.mode,X,null),U.return=q,U;if(typeof U.then=="function")return nt(q,wl(U),X);if(U.$$typeof===b)return nt(q,Xl(q,U),X);xl(q,U)}return null}function $(q,U,X,J){var ot=U!==null?U.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return ot!==null?null:E(q,U,""+X,J);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case T:return X.key===ot?j(q,U,X,J):null;case f:return X.key===ot?L(q,U,X,J):null;case R:return ot=X._init,X=ot(X._payload),$(q,U,X,J)}if(ut(X)||x(X))return ot!==null?null:k(q,U,X,J,null);if(typeof X.then=="function")return $(q,U,wl(X),J);if(X.$$typeof===b)return $(q,U,Xl(q,X),J);xl(q,X)}return null}function Z(q,U,X,J,ot){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return q=q.get(X)||null,E(U,q,""+J,ot);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case T:return q=q.get(J.key===null?X:J.key)||null,j(U,q,J,ot);case f:return q=q.get(J.key===null?X:J.key)||null,L(U,q,J,ot);case R:var Ot=J._init;return J=Ot(J._payload),Z(q,U,X,J,ot)}if(ut(J)||x(J))return q=q.get(X)||null,k(U,q,J,ot,null);if(typeof J.then=="function")return Z(q,U,X,wl(J),ot);if(J.$$typeof===b)return Z(q,U,X,Xl(U,J),ot);xl(U,J)}return null}function ct(q,U,X,J){for(var ot=null,Ot=null,st=U,mt=U=0,re=null;st!==null&&mt<X.length;mt++){st.index>mt?(re=st,st=null):re=st.sibling;var Mt=$(q,st,X[mt],J);if(Mt===null){st===null&&(st=re);break}t&&st&&Mt.alternate===null&&e(q,st),U=u(Mt,U,mt),Ot===null?ot=Mt:Ot.sibling=Mt,Ot=Mt,st=re}if(mt===X.length)return n(q,st),Dt&&ya(q,mt),ot;if(st===null){for(;mt<X.length;mt++)st=nt(q,X[mt],J),st!==null&&(U=u(st,U,mt),Ot===null?ot=st:Ot.sibling=st,Ot=st);return Dt&&ya(q,mt),ot}for(st=a(st);mt<X.length;mt++)re=Z(st,q,mt,X[mt],J),re!==null&&(t&&re.alternate!==null&&st.delete(re.key===null?mt:re.key),U=u(re,U,mt),Ot===null?ot=re:Ot.sibling=re,Ot=re);return t&&st.forEach(function(ia){return e(q,ia)}),Dt&&ya(q,mt),ot}function gt(q,U,X,J){if(X==null)throw Error(o(151));for(var ot=null,Ot=null,st=U,mt=U=0,re=null,Mt=X.next();st!==null&&!Mt.done;mt++,Mt=X.next()){st.index>mt?(re=st,st=null):re=st.sibling;var ia=$(q,st,Mt.value,J);if(ia===null){st===null&&(st=re);break}t&&st&&ia.alternate===null&&e(q,st),U=u(ia,U,mt),Ot===null?ot=ia:Ot.sibling=ia,Ot=ia,st=re}if(Mt.done)return n(q,st),Dt&&ya(q,mt),ot;if(st===null){for(;!Mt.done;mt++,Mt=X.next())Mt=nt(q,Mt.value,J),Mt!==null&&(U=u(Mt,U,mt),Ot===null?ot=Mt:Ot.sibling=Mt,Ot=Mt);return Dt&&ya(q,mt),ot}for(st=a(st);!Mt.done;mt++,Mt=X.next())Mt=Z(st,q,mt,Mt.value,J),Mt!==null&&(t&&Mt.alternate!==null&&st.delete(Mt.key===null?mt:Mt.key),U=u(Mt,U,mt),Ot===null?ot=Mt:Ot.sibling=Mt,Ot=Mt);return t&&st.forEach(function(Sy){return e(q,Sy)}),Dt&&ya(q,mt),ot}function Qt(q,U,X,J){if(typeof X=="object"&&X!==null&&X.type===d&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case T:t:{for(var ot=X.key;U!==null;){if(U.key===ot){if(ot=X.type,ot===d){if(U.tag===7){n(q,U.sibling),J=r(U,X.props.children),J.return=q,q=J;break t}}else if(U.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===R&&qd(ot)===U.type){n(q,U.sibling),J=r(U,X.props),or(J,X),J.return=q,q=J;break t}n(q,U);break}else e(q,U);U=U.sibling}X.type===d?(J=Ma(X.props.children,q.mode,J,X.key),J.return=q,q=J):(J=Vl(X.type,X.key,X.props,null,q.mode,J),or(J,X),J.return=q,q=J)}return h(q);case f:t:{for(ot=X.key;U!==null;){if(U.key===ot)if(U.tag===4&&U.stateNode.containerInfo===X.containerInfo&&U.stateNode.implementation===X.implementation){n(q,U.sibling),J=r(U,X.children||[]),J.return=q,q=J;break t}else{n(q,U);break}else e(q,U);U=U.sibling}J=Uc(X,q.mode,J),J.return=q,q=J}return h(q);case R:return ot=X._init,X=ot(X._payload),Qt(q,U,X,J)}if(ut(X))return ct(q,U,X,J);if(x(X)){if(ot=x(X),typeof ot!="function")throw Error(o(150));return X=ot.call(X),gt(q,U,X,J)}if(typeof X.then=="function")return Qt(q,U,wl(X),J);if(X.$$typeof===b)return Qt(q,U,Xl(q,X),J);xl(q,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,U!==null&&U.tag===6?(n(q,U.sibling),J=r(U,X),J.return=q,q=J):(n(q,U),J=zc(X,q.mode,J),J.return=q,q=J),h(q)):n(q,U)}return function(q,U,X,J){try{ur=0;var ot=Qt(q,U,X,J);return ni=null,ot}catch(st){if(st===rr)throw st;var Ot=Ve(29,st,null,q.mode);return Ot.lanes=J,Ot.return=q,Ot}finally{}}}var Sa=Hd(!0),Yd=Hd(!1),ai=dt(null),Dl=dt(0);function Pd(t,e){t=jn,ht(Dl,t),ht(ai,e),jn=t|e.baseLanes}function Po(){ht(Dl,jn),ht(ai,ai.current)}function Xo(){jn=Dl.current,vt(ai),vt(Dl)}var Xe=dt(null),on=null;function Yn(t){var e=t.alternate;ht(te,te.current&1),ht(Xe,t),on===null&&(e===null||ai.current!==null||e.memoizedState!==null)&&(on=t)}function Xd(t){if(t.tag===22){if(ht(te,te.current),ht(Xe,t),on===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(on=t)}}else Pn()}function Pn(){ht(te,te.current),ht(Xe,Xe.current)}function _n(t){vt(Xe),on===t&&(on=null),vt(te)}var te=dt(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var u1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},o1=i.unstable_scheduleCallback,c1=i.unstable_NormalPriority,ee={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $o(){return{controller:new u1,data:new Map,refCount:0}}function cr(t){t.refCount--,t.refCount===0&&o1(c1,function(){t.controller.abort()})}var sr=null,Go=0,ii=0,ri=null;function s1(t,e){if(sr===null){var n=sr=[];Go=0,ii=kc(),ri={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Go++,e.then($d,$d),e}function $d(){if(--Go===0&&sr!==null){ri!==null&&(ri.status="fulfilled");var t=sr;sr=null,ii=0,ri=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function f1(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Gd=H.S;H.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&s1(t,e),Gd!==null&&Gd(t,e)};var _a=dt(null);function Vo(){var t=_a.current;return t!==null?t:Ht.pooledCache}function Cl(t,e){e===null?ht(_a,_a.current):ht(_a,e.pool)}function Vd(){var t=Vo();return t===null?null:{parent:ee._currentValue,pool:t}}var Xn=0,Et=null,Lt=null,Kt=null,jl=!1,li=!1,Ta=!1,Rl=0,fr=0,ui=null,d1=0;function Zt(){throw Error(o(321))}function Qo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xe(t[n],e[n]))return!1;return!0}function Io(t,e,n,a,r,u){return Xn=u,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,H.H=t===null||t.memoizedState===null?Ea:$n,Ta=!1,u=n(a,r),Ta=!1,li&&(u=Id(e,n,a,r)),Qd(t),u}function Qd(t){H.H=cn;var e=Lt!==null&&Lt.next!==null;if(Xn=0,Kt=Lt=Et=null,jl=!1,fr=0,ui=null,e)throw Error(o(300));t===null||ae||(t=t.dependencies,t!==null&&Pl(t)&&(ae=!0))}function Id(t,e,n,a){Et=t;var r=0;do{if(li&&(ui=null),fr=0,li=!1,25<=r)throw Error(o(301));if(r+=1,Kt=Lt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}H.H=Oa,u=e(n,a)}while(li);return u}function h1(){var t=H.H,e=t.useState()[0];return e=typeof e.then=="function"?dr(e):e,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(Et.flags|=1024),e}function Zo(){var t=Rl!==0;return Rl=0,t}function Ko(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function ko(t){if(jl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}jl=!1}Xn=0,Kt=Lt=Et=null,li=!1,fr=Rl=0,ui=null}function Ee(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Et.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function kt(){if(Lt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Kt===null?Et.memoizedState:Kt.next;if(e!==null)Kt=e,Lt=t;else{if(t===null)throw Et.alternate===null?Error(o(467)):Error(o(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Kt===null?Et.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}var Nl;Nl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function dr(t){var e=fr;return fr+=1,ui===null&&(ui=[]),t=Ld(ui,t,e),e=Et,(Kt===null?e.memoizedState:Kt.next)===null&&(e=e.alternate,H.H=e===null||e.memoizedState===null?Ea:$n),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return dr(t);if(t.$$typeof===b)return me(t)}throw Error(o(438,String(t)))}function Jo(t){var e=null,n=Et.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=Et.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Nl(),Et.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=O;return e.index++,n}function Tn(t,e){return typeof e=="function"?e(t):e}function Ul(t){var e=kt();return Wo(e,Lt,t)}function Wo(t,e,n){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var r=t.baseQueue,u=a.pending;if(u!==null){if(r!==null){var h=r.next;r.next=u.next,u.next=h}e.baseQueue=r=u,a.pending=null}if(u=t.baseState,r===null)t.memoizedState=u;else{e=r.next;var E=h=null,j=null,L=e,k=!1;do{var nt=L.lane&-536870913;if(nt!==L.lane?(xt&nt)===nt:(Xn&nt)===nt){var $=L.revertLane;if($===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),nt===ii&&(k=!0);else if((Xn&$)===$){L=L.next,$===ii&&(k=!0);continue}else nt={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},j===null?(E=j=nt,h=u):j=j.next=nt,Et.lanes|=$,Wn|=$;nt=L.action,Ta&&n(u,nt),u=L.hasEagerState?L.eagerState:n(u,nt)}else $={lane:nt,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},j===null?(E=j=$,h=u):j=j.next=$,Et.lanes|=nt,Wn|=nt;L=L.next}while(L!==null&&L!==e);if(j===null?h=u:j.next=E,!xe(u,t.memoizedState)&&(ae=!0,k&&(n=ri,n!==null)))throw n;t.memoizedState=u,t.baseState=h,t.baseQueue=j,a.lastRenderedState=u}return r===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Fo(t){var e=kt(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var a=n.dispatch,r=n.pending,u=e.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do u=t(u,h.action),h=h.next;while(h!==r);xe(u,e.memoizedState)||(ae=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,a]}function Zd(t,e,n){var a=Et,r=kt(),u=Dt;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=e();var h=!xe((Lt||r).memoizedState,n);if(h&&(r.memoizedState=n,ae=!0),r=r.queue,nc(Jd.bind(null,a,r,t),[t]),r.getSnapshot!==e||h||Kt!==null&&Kt.memoizedState.tag&1){if(a.flags|=2048,oi(9,kd.bind(null,a,r,n,e),{destroy:void 0},null),Ht===null)throw Error(o(349));u||(Xn&60)!==0||Kd(a,e,n)}return n}function Kd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e=Nl(),Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kd(t,e,n,a){e.value=n,e.getSnapshot=a,Wd(e)&&Fd(t)}function Jd(t,e,n){return n(function(){Wd(e)&&Fd(t)})}function Wd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xe(t,n)}catch{return!0}}function Fd(t){var e=Hn(t,2);e!==null&&be(e,t,2)}function tc(t){var e=Ee();if(typeof t=="function"){var n=t;if(t=n(),Ta){Ln(!0);try{n()}finally{Ln(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:t},e}function t0(t,e,n,a){return t.baseState=n,Wo(t,Lt,typeof a=="function"?a:Tn)}function m1(t,e,n,a,r){if(ql(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};H.T!==null?n(!0):u.isTransition=!1,a(u),n=e.pending,n===null?(u.next=e.pending=u,e0(e,u)):(u.next=n.next,e.pending=n.next=u)}}function e0(t,e){var n=e.action,a=e.payload,r=t.state;if(e.isTransition){var u=H.T,h={};H.T=h;try{var E=n(r,a),j=H.S;j!==null&&j(h,E),n0(t,e,E)}catch(L){ec(t,e,L)}finally{H.T=u}}else try{u=n(r,a),n0(t,e,u)}catch(L){ec(t,e,L)}}function n0(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){a0(t,e,a)},function(a){return ec(t,e,a)}):a0(t,e,n)}function a0(t,e,n){e.status="fulfilled",e.value=n,i0(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,e0(t,n)))}function ec(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,i0(e),e=e.next;while(e!==a)}t.action=null}function i0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function r0(t,e){return e}function l0(t,e){if(Dt){var n=Ht.formState;if(n!==null){t:{var a=Et;if(Dt){if(oe){e:{for(var r=oe,u=un;r.nodeType!==8;){if(!u){r=null;break e}if(r=Fe(r.nextSibling),r===null){r=null;break e}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){oe=Fe(r.nextSibling),a=r.data==="F!";break t}}ba(a)}a=!1}a&&(e=n[0])}}return n=Ee(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:e},n.queue=a,n=O0.bind(null,Et,a),a.dispatch=n,a=tc(!1),u=uc.bind(null,Et,!1,a.queue),a=Ee(),r={state:e,dispatch:null,action:t,pending:null},a.queue=r,n=m1.bind(null,Et,r,u,n),r.dispatch=n,a.memoizedState=t,[e,n,!1]}function u0(t){var e=kt();return o0(e,Lt,t)}function o0(t,e,n){e=Wo(t,e,r0)[0],t=Ul(Tn)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?dr(e):e;var a=kt(),r=a.queue,u=r.dispatch;return n!==a.memoizedState&&(Et.flags|=2048,oi(9,p1.bind(null,r,n),{destroy:void 0},null)),[e,u,t]}function p1(t,e){t.action=e}function c0(t){var e=kt(),n=Lt;if(n!==null)return o0(e,n,t);kt(),e=e.memoizedState,n=kt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function oi(t,e,n,a){return t={tag:t,create:e,inst:n,deps:a,next:null},e=Et.updateQueue,e===null&&(e=Nl(),Et.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function s0(){return kt().memoizedState}function Ll(t,e,n,a){var r=Ee();Et.flags|=t,r.memoizedState=oi(1|e,n,{destroy:void 0},a===void 0?null:a)}function Bl(t,e,n,a){var r=kt();a=a===void 0?null:a;var u=r.memoizedState.inst;Lt!==null&&a!==null&&Qo(a,Lt.memoizedState.deps)?r.memoizedState=oi(e,n,u,a):(Et.flags|=t,r.memoizedState=oi(1|e,n,u,a))}function f0(t,e){Ll(8390656,8,t,e)}function nc(t,e){Bl(2048,8,t,e)}function d0(t,e){return Bl(4,2,t,e)}function h0(t,e){return Bl(4,4,t,e)}function m0(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p0(t,e,n){n=n!=null?n.concat([t]):null,Bl(4,4,m0.bind(null,e,t),n)}function ac(){}function v0(t,e){var n=kt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Qo(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function g0(t,e){var n=kt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Qo(e,a[1]))return a[0];if(a=t(),Ta){Ln(!0);try{t()}finally{Ln(!1)}}return n.memoizedState=[a,e],a}function ic(t,e,n){return n===void 0||(Xn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=bh(),Et.lanes|=t,Wn|=t,n)}function y0(t,e,n,a){return xe(n,e)?n:ai.current!==null?(t=ic(t,n,a),xe(t,e)||(ae=!0),t):(Xn&42)===0?(ae=!0,t.memoizedState=n):(t=bh(),Et.lanes|=t,Wn|=t,e)}function b0(t,e,n,a,r){var u=N.p;N.p=u!==0&&8>u?u:8;var h=H.T,E={};H.T=E,uc(t,!1,e,n);try{var j=r(),L=H.S;if(L!==null&&L(E,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var k=f1(j,a);hr(t,e,k,je(t))}else hr(t,e,a,je(t))}catch(nt){hr(t,e,{then:function(){},status:"rejected",reason:nt},je())}finally{N.p=u,H.T=h}}function v1(){}function rc(t,e,n,a){if(t.tag!==5)throw Error(o(476));var r=S0(t).queue;b0(t,r,e,St,n===null?v1:function(){return _0(t),n(a)})}function S0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:St,baseState:St,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:St},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function _0(t){var e=S0(t).next.queue;hr(t,e,{},je())}function lc(){return me(Nr)}function T0(){return kt().memoizedState}function E0(){return kt().memoizedState}function g1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=je();t=Qn(n);var a=In(e,t,n);a!==null&&(be(a,e,n),vr(a,e,n)),e={cache:$o()},t.payload=e;return}e=e.return}}function y1(t,e,n){var a=je();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ql(t)?A0(e,n):(n=Lo(t,e,n,a),n!==null&&(be(n,t,a),w0(n,e,a)))}function O0(t,e,n){var a=je();hr(t,e,n,a)}function hr(t,e,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ql(t))A0(e,r);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var h=e.lastRenderedState,E=u(h,n);if(r.hasEagerState=!0,r.eagerState=E,xe(E,h))return _l(t,e,r,0),Ht===null&&Sl(),!1}catch{}finally{}if(n=Lo(t,e,r,a),n!==null)return be(n,t,a),w0(n,e,a),!0}return!1}function uc(t,e,n,a){if(a={lane:2,revertLane:kc(),action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(e)throw Error(o(479))}else e=Lo(t,n,a,2),e!==null&&be(e,t,2)}function ql(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function A0(t,e){li=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w0(t,e,n){if((n&4194176)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Bf(t,n)}}var cn={readContext:me,use:zl,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useLayoutEffect:Zt,useInsertionEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useSyncExternalStore:Zt,useId:Zt};cn.useCacheRefresh=Zt,cn.useMemoCache=Zt,cn.useHostTransitionStatus=Zt,cn.useFormState=Zt,cn.useActionState=Zt,cn.useOptimistic=Zt;var Ea={readContext:me,use:zl,useCallback:function(t,e){return Ee().memoizedState=[t,e===void 0?null:e],t},useContext:me,useEffect:f0,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ll(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){Ll(4,2,t,e)},useMemo:function(t,e){var n=Ee();e=e===void 0?null:e;var a=t();if(Ta){Ln(!0);try{t()}finally{Ln(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=Ee();if(n!==void 0){var r=n(e);if(Ta){Ln(!0);try{n(e)}finally{Ln(!1)}}}else r=e;return a.memoizedState=a.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=y1.bind(null,Et,t),[a.memoizedState,t]},useRef:function(t){var e=Ee();return t={current:t},e.memoizedState=t},useState:function(t){t=tc(t);var e=t.queue,n=O0.bind(null,Et,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ac,useDeferredValue:function(t,e){var n=Ee();return ic(n,t,e)},useTransition:function(){var t=tc(!1);return t=b0.bind(null,Et,t.queue,!0,!1),Ee().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=Et,r=Ee();if(Dt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),Ht===null)throw Error(o(349));(xt&60)!==0||Kd(a,e,n)}r.memoizedState=n;var u={value:n,getSnapshot:e};return r.queue=u,f0(Jd.bind(null,a,u,t),[t]),a.flags|=2048,oi(9,kd.bind(null,a,u,n,e),{destroy:void 0},null),n},useId:function(){var t=Ee(),e=Ht.identifierPrefix;if(Dt){var n=Sn,a=bn;n=(a&~(1<<32-we(a)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=d1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Ee().memoizedState=g1.bind(null,Et)}};Ea.useMemoCache=Jo,Ea.useHostTransitionStatus=lc,Ea.useFormState=l0,Ea.useActionState=l0,Ea.useOptimistic=function(t){var e=Ee();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=uc.bind(null,Et,!0,n),n.dispatch=e,[t,e]};var $n={readContext:me,use:zl,useCallback:v0,useContext:me,useEffect:nc,useImperativeHandle:p0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:g0,useReducer:Ul,useRef:s0,useState:function(){return Ul(Tn)},useDebugValue:ac,useDeferredValue:function(t,e){var n=kt();return y0(n,Lt.memoizedState,t,e)},useTransition:function(){var t=Ul(Tn)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:dr(t),e]},useSyncExternalStore:Zd,useId:T0};$n.useCacheRefresh=E0,$n.useMemoCache=Jo,$n.useHostTransitionStatus=lc,$n.useFormState=u0,$n.useActionState=u0,$n.useOptimistic=function(t,e){var n=kt();return t0(n,Lt,t,e)};var Oa={readContext:me,use:zl,useCallback:v0,useContext:me,useEffect:nc,useImperativeHandle:p0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:g0,useReducer:Fo,useRef:s0,useState:function(){return Fo(Tn)},useDebugValue:ac,useDeferredValue:function(t,e){var n=kt();return Lt===null?ic(n,t,e):y0(n,Lt.memoizedState,t,e)},useTransition:function(){var t=Fo(Tn)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:dr(t),e]},useSyncExternalStore:Zd,useId:T0};Oa.useCacheRefresh=E0,Oa.useMemoCache=Jo,Oa.useHostTransitionStatus=lc,Oa.useFormState=c0,Oa.useActionState=c0,Oa.useOptimistic=function(t,e){var n=kt();return Lt!==null?t0(n,Lt,t,e):(n.baseState=t,[t,n.queue.dispatch])};function oc(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:K({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={isMounted:function(t){return(t=t._reactInternals)?tt(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var a=je(),r=Qn(a);r.payload=e,n!=null&&(r.callback=n),e=In(t,r,a),e!==null&&(be(e,t,a),vr(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=je(),r=Qn(a);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=In(t,r,a),e!==null&&(be(e,t,a),vr(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),a=Qn(n);a.tag=2,e!=null&&(a.callback=e),e=In(t,a,n),e!==null&&(be(e,t,n),vr(e,t,n))}};function x0(t,e,n,a,r,u,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,h):e.prototype&&e.prototype.isPureReactComponent?!tr(n,a)||!tr(r,u):!0}function D0(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function Aa(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=K({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function M0(t){Hl(t)}function C0(t){console.error(t)}function j0(t){Hl(t)}function Yl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function R0(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function sc(t,e,n){return n=Qn(n),n.tag=3,n.payload={element:null},n.callback=function(){Yl(t,e)},n}function N0(t){return t=Qn(t),t.tag=3,t}function z0(t,e,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=a.value;t.payload=function(){return r(u)},t.callback=function(){R0(e,n,a)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){R0(e,n,a),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var E=a.stack;this.componentDidCatch(a.value,{componentStack:E!==null?E:""})})}function b1(t,e,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&pr(e,n,r,!0),n=Xe.current,n!==null){switch(n.tag){case 13:return on===null?Vc():n.alternate===null&&Vt===0&&(Vt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Yo?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Ic(t,a,r)),!1;case 22:return n.flags|=65536,a===Yo?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Ic(t,a,r)),!1}throw Error(o(435,n.tag))}return Ic(t,a,r),Vc(),!1}if(Dt)return e=Xe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,a!==Ho&&(t=Error(o(422),{cause:a}),ir(He(t,n)))):(a!==Ho&&(e=Error(o(423),{cause:a}),ir(He(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,a=He(a,n),r=sc(t.stateNode,a,r),Ac(t,r),Vt!==4&&(Vt=2)),!1;var u=Error(o(520),{cause:a});if(u=He(u,n),Or===null?Or=[u]:Or.push(u),Vt!==4&&(Vt=2),e===null)return!0;a=He(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=sc(n.stateNode,a,t),Ac(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Fn===null||!Fn.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=N0(r),z0(r,t,n,a),Ac(n,r),!1}n=n.return}while(n!==null);return!1}var U0=Error(o(461)),ae=!1;function ce(t,e,n,a){e.child=t===null?Yd(e,null,n,a):Sa(e,t.child,n,a)}function L0(t,e,n,a,r){n=n.render;var u=e.ref;if("ref"in a){var h={};for(var E in a)E!=="ref"&&(h[E]=a[E])}else h=a;return xa(e),a=Io(t,e,n,h,u,r),E=Zo(),t!==null&&!ae?(Ko(t,e,r),En(t,e,r)):(Dt&&E&&Bo(e),e.flags|=1,ce(t,e,a,r),e.child)}function B0(t,e,n,a,r){if(t===null){var u=n.type;return typeof u=="function"&&!Nc(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,q0(t,e,u,a,r)):(t=Vl(n.type,null,a,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!bc(t,r)){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(h,a)&&t.ref===e.ref)return En(t,e,r)}return e.flags|=1,t=Jn(u,a),t.ref=e.ref,t.return=e,e.child=t}function q0(t,e,n,a,r){if(t!==null){var u=t.memoizedProps;if(tr(u,a)&&t.ref===e.ref)if(ae=!1,e.pendingProps=a=u,bc(t,r))(t.flags&131072)!==0&&(ae=!0);else return e.lanes=t.lanes,En(t,e,r)}return fc(t,e,n,a,r)}function H0(t,e,n){var a=e.pendingProps,r=a.children,u=(e.stateNode._pendingVisibility&2)!==0,h=t!==null?t.memoizedState:null;if(mr(t,e),a.mode==="hidden"||u){if((e.flags&128)!==0){if(a=h!==null?h.baseLanes|n:n,t!==null){for(r=e.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;e.childLanes=u&~a}else e.childLanes=0,e.child=null;return Y0(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(e,h!==null?h.cachePool:null),h!==null?Pd(e,h):Po(),Xd(e);else return e.lanes=e.childLanes=536870912,Y0(t,e,h!==null?h.baseLanes|n:n,n)}else h!==null?(Cl(e,h.cachePool),Pd(e,h),Pn(),e.memoizedState=null):(t!==null&&Cl(e,null),Po(),Pn());return ce(t,e,r,n),e.child}function Y0(t,e,n,a){var r=Vo();return r=r===null?null:{parent:ee._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Cl(e,null),Po(),Xd(e),t!==null&&pr(t,e,a,!0),null}function mr(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=2097664)}}function fc(t,e,n,a,r){return xa(e),n=Io(t,e,n,a,void 0,r),a=Zo(),t!==null&&!ae?(Ko(t,e,r),En(t,e,r)):(Dt&&a&&Bo(e),e.flags|=1,ce(t,e,n,r),e.child)}function P0(t,e,n,a,r,u){return xa(e),e.updateQueue=null,n=Id(e,a,n,r),Qd(t),a=Zo(),t!==null&&!ae?(Ko(t,e,u),En(t,e,u)):(Dt&&a&&Bo(e),e.flags|=1,ce(t,e,n,u),e.child)}function X0(t,e,n,a,r){if(xa(e),e.stateNode===null){var u=Fa,h=n.contextType;typeof h=="object"&&h!==null&&(u=me(h)),u=new n(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=cc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},Ec(e),h=n.contextType,u.context=typeof h=="object"&&h!==null?me(h):Fa,u.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(oc(e,n,h,a),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&cc.enqueueReplaceState(u,u.state,null),yr(e,a,u,r),gr(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var E=e.memoizedProps,j=Aa(n,E);u.props=j;var L=u.context,k=n.contextType;h=Fa,typeof k=="object"&&k!==null&&(h=me(k));var nt=n.getDerivedStateFromProps;k=typeof nt=="function"||typeof u.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,k||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(E||L!==h)&&D0(e,u,a,h),Vn=!1;var $=e.memoizedState;u.state=$,yr(e,a,u,r),gr(),L=e.memoizedState,E||$!==L||Vn?(typeof nt=="function"&&(oc(e,n,nt,a),L=e.memoizedState),(j=Vn||x0(e,n,j,a,$,L,h))?(k||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=L),u.props=a,u.state=L,u.context=h,a=j):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,Oc(t,e),h=e.memoizedProps,k=Aa(n,h),u.props=k,nt=e.pendingProps,$=u.context,L=n.contextType,j=Fa,typeof L=="object"&&L!==null&&(j=me(L)),E=n.getDerivedStateFromProps,(L=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==nt||$!==j)&&D0(e,u,a,j),Vn=!1,$=e.memoizedState,u.state=$,yr(e,a,u,r),gr();var Z=e.memoizedState;h!==nt||$!==Z||Vn||t!==null&&t.dependencies!==null&&Pl(t.dependencies)?(typeof E=="function"&&(oc(e,n,E,a),Z=e.memoizedState),(k=Vn||x0(e,n,k,a,$,Z,j)||t!==null&&t.dependencies!==null&&Pl(t.dependencies))?(L||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,Z,j),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,Z,j)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&$===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&$===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=Z),u.props=a,u.state=Z,u.context=j,a=k):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&$===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&$===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,mr(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=Sa(e,t.child,null,r),e.child=Sa(e,null,n,r)):ce(t,e,n,r),e.memoizedState=u.state,t=e.child):t=En(t,e,r),t}function $0(t,e,n,a){return ar(),e.flags|=256,ce(t,e,n,a),e.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function hc(t){return{baseLanes:t,cachePool:Vd()}}function mc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Qe),t}function G0(t,e,n){var a=e.pendingProps,r=!1,u=(e.flags&128)!==0,h;if((h=u)||(h=t!==null&&t.memoizedState===null?!1:(te.current&2)!==0),h&&(r=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(Dt){if(r?Yn(e):Pn(),Dt){var E=oe,j;if(j=E){t:{for(j=E,E=un;j.nodeType!==8;){if(!E){E=null;break t}if(j=Fe(j.nextSibling),j===null){E=null;break t}}E=j}E!==null?(e.memoizedState={dehydrated:E,treeContext:ga!==null?{id:bn,overflow:Sn}:null,retryLane:536870912},j=Ve(18,null,null,0),j.stateNode=E,j.return=e,e.child=j,ye=e,oe=null,j=!0):j=!1}j||ba(e)}if(E=e.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?e.lanes=16:e.lanes=536870912,null;_n(e)}return E=a.children,a=a.fallback,r?(Pn(),r=e.mode,E=vc({mode:"hidden",children:E},r),a=Ma(a,r,n,null),E.return=e,a.return=e,E.sibling=a,e.child=E,r=e.child,r.memoizedState=hc(n),r.childLanes=mc(t,h,n),e.memoizedState=dc,a):(Yn(e),pc(e,E))}if(j=t.memoizedState,j!==null&&(E=j.dehydrated,E!==null)){if(u)e.flags&256?(Yn(e),e.flags&=-257,e=gc(t,e,n)):e.memoizedState!==null?(Pn(),e.child=t.child,e.flags|=128,e=null):(Pn(),r=a.fallback,E=e.mode,a=vc({mode:"visible",children:a.children},E),r=Ma(r,E,n,null),r.flags|=2,a.return=e,r.return=e,a.sibling=r,e.child=a,Sa(e,t.child,null,n),a=e.child,a.memoizedState=hc(n),a.childLanes=mc(t,h,n),e.memoizedState=dc,e=r);else if(Yn(e),E.data==="$!"){if(h=E.nextSibling&&E.nextSibling.dataset,h)var L=h.dgst;h=L,a=Error(o(419)),a.stack="",a.digest=h,ir({value:a,source:null,stack:null}),e=gc(t,e,n)}else if(ae||pr(t,e,n,!1),h=(n&t.childLanes)!==0,ae||h){if(h=Ht,h!==null){if(a=n&-n,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(h.suspendedLanes|n))!==0?0:a,a!==0&&a!==j.retryLane)throw j.retryLane=a,Hn(t,a),be(h,t,a),U0}E.data==="$?"||Vc(),e=gc(t,e,n)}else E.data==="$?"?(e.flags|=128,e.child=t.child,e=z1.bind(null,t),E._reactRetry=e,e=null):(t=j.treeContext,oe=Fe(E.nextSibling),ye=e,Dt=!0,Je=null,un=!1,t!==null&&(Ye[Pe++]=bn,Ye[Pe++]=Sn,Ye[Pe++]=ga,bn=t.id,Sn=t.overflow,ga=e),e=pc(e,a.children),e.flags|=4096);return e}return r?(Pn(),r=a.fallback,E=e.mode,j=t.child,L=j.sibling,a=Jn(j,{mode:"hidden",children:a.children}),a.subtreeFlags=j.subtreeFlags&31457280,L!==null?r=Jn(L,r):(r=Ma(r,E,n,null),r.flags|=2),r.return=e,a.return=e,a.sibling=r,e.child=a,a=r,r=e.child,E=t.child.memoizedState,E===null?E=hc(n):(j=E.cachePool,j!==null?(L=ee._currentValue,j=j.parent!==L?{parent:L,pool:L}:j):j=Vd(),E={baseLanes:E.baseLanes|n,cachePool:j}),r.memoizedState=E,r.childLanes=mc(t,h,n),e.memoizedState=dc,a):(Yn(e),n=t.child,t=n.sibling,n=Jn(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=n,e.memoizedState=null,n)}function pc(t,e){return e=vc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function vc(t,e){return vh(t,e,0,null)}function gc(t,e,n){return Sa(e,t.child,null,n),t=pc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function V0(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),_c(t.return,e,n)}function yc(t,e,n,a,r){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=r)}function Q0(t,e,n){var a=e.pendingProps,r=a.revealOrder,u=a.tail;if(ce(t,e,a.children,n),a=te.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V0(t,n,e);else if(t.tag===19)V0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(ht(te,a),r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yc(e,!1,r,n,u);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yc(e,!0,n,null,u);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(pr(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=Jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pl(t)))}function S1(t,e,n){switch(e.tag){case 3:ua(e,e.stateNode.containerInfo),Gn(e,ee,t.memoizedState.cache),ar();break;case 27:case 5:Li(e);break;case 4:ua(e,e.stateNode.containerInfo);break;case 10:Gn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Yn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?G0(t,e,n):(Yn(e),t=En(t,e,n),t!==null?t.sibling:null);Yn(e);break;case 19:var r=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(pr(t,e,n,!1),a=(n&e.childLanes)!==0),r){if(a)return Q0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(te,te.current),a)break;return null;case 22:case 23:return e.lanes=0,H0(t,e,n);case 24:Gn(e,ee,t.memoizedState.cache)}return En(t,e,n)}function I0(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)ae=!0;else{if(!bc(t,n)&&(e.flags&128)===0)return ae=!1,S1(t,e,n);ae=(t.flags&131072)!==0}else ae=!1,Dt&&(e.flags&1048576)!==0&&jd(e,Ol,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,r=a._init;if(a=r(a._payload),e.type=a,typeof a=="function")Nc(a)?(t=Aa(a,t),e.tag=1,e=X0(null,e,a,t,n)):(e.tag=0,e=fc(null,e,a,t,n));else{if(a!=null){if(r=a.$$typeof,r===_){e.tag=11,e=L0(null,e,a,t,n);break t}else if(r===B){e.tag=14,e=B0(null,e,a,t,n);break t}}throw e=P(a)||a,Error(o(306,e,""))}}return e;case 0:return fc(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,r=Aa(a,e.pendingProps),X0(t,e,a,r,n);case 3:t:{if(ua(e,e.stateNode.containerInfo),t===null)throw Error(o(387));var u=e.pendingProps;r=e.memoizedState,a=r.element,Oc(t,e),yr(e,u,null,n);var h=e.memoizedState;if(u=h.cache,Gn(e,ee,u),u!==r.cache&&Tc(e,[ee],n,!0),gr(),u=h.element,r.isDehydrated)if(r={element:u,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=$0(t,e,u,n);break t}else if(u!==a){a=He(Error(o(424)),e),ir(a),e=$0(t,e,u,n);break t}else for(oe=Fe(e.stateNode.containerInfo.firstChild),ye=e,Dt=!0,Je=null,un=!0,n=Yd(e,null,u,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),u===a){e=En(t,e,n);break t}ce(t,e,u,n)}e=e.child}return e;case 26:return mr(t,e),t===null?(n=kh(e.type,null,e.pendingProps,null))?e.memoizedState=n:Dt||(n=e.type,t=e.pendingProps,a=au(Se.current).createElement(n),a[he]=e,a[_e]=t,se(a,n,t),ne(a),e.stateNode=a):e.memoizedState=kh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Li(e),t===null&&Dt&&(a=e.stateNode=Ih(e.type,e.pendingProps,Se.current),ye=e,un=!0,oe=Fe(a.firstChild)),a=e.pendingProps.children,t!==null||Dt?ce(t,e,a,n):e.child=Sa(e,null,a,n),mr(t,e),e.child;case 5:return t===null&&Dt&&((r=a=oe)&&(a=k1(a,e.type,e.pendingProps,un),a!==null?(e.stateNode=a,ye=e,oe=Fe(a.firstChild),un=!1,r=!0):r=!1),r||ba(e)),Li(e),r=e.type,u=e.pendingProps,h=t!==null?t.memoizedProps:null,a=u.children,rs(r,u)?a=null:h!==null&&rs(r,h)&&(e.flags|=32),e.memoizedState!==null&&(r=Io(t,e,h1,null,null,n),Nr._currentValue=r),mr(t,e),ce(t,e,a,n),e.child;case 6:return t===null&&Dt&&((t=n=oe)&&(n=J1(n,e.pendingProps,un),n!==null?(e.stateNode=n,ye=e,oe=null,t=!0):t=!1),t||ba(e)),null;case 13:return G0(t,e,n);case 4:return ua(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Sa(e,null,a,n):ce(t,e,a,n),e.child;case 11:return L0(t,e,e.type,e.pendingProps,n);case 7:return ce(t,e,e.pendingProps,n),e.child;case 8:return ce(t,e,e.pendingProps.children,n),e.child;case 12:return ce(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,Gn(e,e.type,a.value),ce(t,e,a.children,n),e.child;case 9:return r=e.type._context,a=e.pendingProps.children,xa(e),r=me(r),a=a(r),e.flags|=1,ce(t,e,a,n),e.child;case 14:return B0(t,e,e.type,e.pendingProps,n);case 15:return q0(t,e,e.type,e.pendingProps,n);case 19:return Q0(t,e,n);case 22:return H0(t,e,n);case 24:return xa(e),a=me(ee),t===null?(r=Vo(),r===null&&(r=Ht,u=$o(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),e.memoizedState={parent:a,cache:r},Ec(e),Gn(e,ee,r)):((t.lanes&n)!==0&&(Oc(t,e),yr(e,null,null,n),gr()),r=t.memoizedState,u=e.memoizedState,r.parent!==a?(r={parent:a,cache:a},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Gn(e,ee,a)):(a=u.cache,Gn(e,ee,a),a!==r.cache&&Tc(e,[ee],n,!0))),ce(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}var Sc=dt(null),wa=null,On=null;function Gn(t,e,n){ht(Sc,e._currentValue),e._currentValue=n}function An(t){t._currentValue=Sc.current,vt(Sc)}function _c(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Tc(t,e,n,a){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var u=r.dependencies;if(u!==null){var h=r.child;u=u.firstContext;t:for(;u!==null;){var E=u;u=r;for(var j=0;j<e.length;j++)if(E.context===e[j]){u.lanes|=n,E=u.alternate,E!==null&&(E.lanes|=n),_c(u.return,n,t),a||(h=null);break t}u=E.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(o(341));h.lanes|=n,u=h.alternate,u!==null&&(u.lanes|=n),_c(h,n,t),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===t){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function pr(t,e,n,a){t=null;for(var r=e,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var E=r.type;xe(r.pendingProps.value,h.value)||(t!==null?t.push(E):t=[E])}}else if(r===ln.current){if(h=r.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(Nr):t=[Nr])}r=r.return}t!==null&&Tc(e,t,n,a),e.flags|=262144}function Pl(t){for(t=t.firstContext;t!==null;){if(!xe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xa(t){wa=t,On=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function me(t){return Z0(wa,t)}function Xl(t,e){return wa===null&&xa(t),Z0(t,e)}function Z0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},On===null){if(t===null)throw Error(o(308));On=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else On=On.next=e;return n}var Vn=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function In(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,($t&2)!==0){var r=a.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),a.pending=e,e=Tl(t),Md(t,null,n),e}return _l(t,a,e,n),Tl(t)}function vr(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194176)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Bf(t,n)}}function Ac(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?r=u=e:u=u.next=e}else r=u=e;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var wc=!1;function gr(){if(wc){var t=ri;if(t!==null)throw t}}function yr(t,e,n,a){wc=!1;var r=t.updateQueue;Vn=!1;var u=r.firstBaseUpdate,h=r.lastBaseUpdate,E=r.shared.pending;if(E!==null){r.shared.pending=null;var j=E,L=j.next;j.next=null,h===null?u=L:h.next=L,h=j;var k=t.alternate;k!==null&&(k=k.updateQueue,E=k.lastBaseUpdate,E!==h&&(E===null?k.firstBaseUpdate=L:E.next=L,k.lastBaseUpdate=j))}if(u!==null){var nt=r.baseState;h=0,k=L=j=null,E=u;do{var $=E.lane&-536870913,Z=$!==E.lane;if(Z?(xt&$)===$:(a&$)===$){$!==0&&$===ii&&(wc=!0),k!==null&&(k=k.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ct=t,gt=E;$=e;var Qt=n;switch(gt.tag){case 1:if(ct=gt.payload,typeof ct=="function"){nt=ct.call(Qt,nt,$);break t}nt=ct;break t;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=gt.payload,$=typeof ct=="function"?ct.call(Qt,nt,$):ct,$==null)break t;nt=K({},nt,$);break t;case 2:Vn=!0}}$=E.callback,$!==null&&(t.flags|=64,Z&&(t.flags|=8192),Z=r.callbacks,Z===null?r.callbacks=[$]:Z.push($))}else Z={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},k===null?(L=k=Z,j=nt):k=k.next=Z,h|=$;if(E=E.next,E===null){if(E=r.shared.pending,E===null)break;Z=E,E=Z.next,Z.next=null,r.lastBaseUpdate=Z,r.shared.pending=null}}while(!0);k===null&&(j=nt),r.baseState=j,r.firstBaseUpdate=L,r.lastBaseUpdate=k,u===null&&(r.shared.lanes=0),Wn|=h,t.lanes=h,t.memoizedState=nt}}function K0(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function k0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)K0(n[t],e)}function br(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&t)===t){a=void 0;var u=n.create,h=n.inst;a=u(),h.destroy=a}n=n.next}while(n!==r)}}catch(E){qt(e,e.return,E)}}function Zn(t,e,n){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){var h=a.inst,E=h.destroy;if(E!==void 0){h.destroy=void 0,r=e;var j=n;try{E()}catch(L){qt(r,j,L)}}}a=a.next}while(a!==u)}}catch(L){qt(e,e.return,L)}}function J0(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{k0(e,n)}catch(a){qt(t,t.return,a)}}}function W0(t,e,n){n.props=Aa(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){qt(t,e,a)}}function Da(t,e){try{var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 26:case 27:case 5:var r=a;break;default:r=a}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(u){qt(t,e,u)}}function De(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){qt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){qt(t,e,r)}else n.current=null}function F0(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){qt(t,t.return,r)}}function th(t,e,n){try{var a=t.stateNode;V1(a,t.type,n,e),a[_e]=e}catch(r){qt(t,t.return,r)}}function eh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function xc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||eh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dc(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(a!==4&&a!==27&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}function $l(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&a!==27&&(t=t.child,t!==null))for($l(t,e,n),t=t.sibling;t!==null;)$l(t,e,n),t=t.sibling}var wn=!1,Gt=!1,Mc=!1,nh=typeof WeakSet=="function"?WeakSet:Set,ie=null,ah=!1;function _1(t,e){if(t=t.containerInfo,as=cu,t=Sd(t),jo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var h=0,E=-1,j=-1,L=0,k=0,nt=t,$=null;e:for(;;){for(var Z;nt!==n||r!==0&&nt.nodeType!==3||(E=h+r),nt!==u||a!==0&&nt.nodeType!==3||(j=h+a),nt.nodeType===3&&(h+=nt.nodeValue.length),(Z=nt.firstChild)!==null;)$=nt,nt=Z;for(;;){if(nt===t)break e;if($===n&&++L===r&&(E=h),$===u&&++k===a&&(j=h),(Z=nt.nextSibling)!==null)break;nt=$,$=nt.parentNode}nt=Z}n=E===-1||j===-1?null:{start:E,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:t,selectionRange:n},cu=!1,ie=e;ie!==null;)if(e=ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ie=t;else for(;ie!==null;){switch(e=ie,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var ct=Aa(n.type,r,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(ct,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(gt){qt(n,n.return,gt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)os(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":os(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,ie=t;break}ie=e.return}return ct=ah,ah=!1,ct}function ih(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Dn(t,n),a&4&&br(5,n);break;case 1:if(Dn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(E){qt(n,n.return,E)}else{var r=Aa(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(E){qt(n,n.return,E)}}a&64&&J0(n),a&512&&Da(n,n.return);break;case 3:if(Dn(t,n),a&64&&(a=n.updateQueue,a!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{k0(a,t)}catch(E){qt(n,n.return,E)}}break;case 26:Dn(t,n),a&512&&Da(n,n.return);break;case 27:case 5:Dn(t,n),e===null&&a&4&&F0(n),a&512&&Da(n,n.return);break;case 12:Dn(t,n);break;case 13:Dn(t,n),a&4&&uh(t,n);break;case 22:if(r=n.memoizedState!==null||wn,!r){e=e!==null&&e.memoizedState!==null||Gt;var u=wn,h=Gt;wn=r,(Gt=e)&&!h?Kn(t,n,(n.subtreeFlags&8772)!==0):Dn(t,n),wn=u,Gt=h}a&512&&(n.memoizedProps.mode==="manual"?Da(n,n.return):De(n,n.return));break;default:Dn(t,n)}}function rh(t){var e=t.alternate;e!==null&&(t.alternate=null,rh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&po(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Me=!1;function xn(t,e,n){for(n=n.child;n!==null;)lh(t,e,n),n=n.sibling}function lh(t,e,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(sa,n)}catch{}switch(n.tag){case 26:Gt||De(n,e),xn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Gt||De(n,e);var a=Jt,r=Me;for(Jt=n.stateNode,xn(t,e,n),n=n.stateNode,e=n.attributes;e.length;)n.removeAttributeNode(e[0]);po(n),Jt=a,Me=r;break;case 5:Gt||De(n,e);case 6:r=Jt;var u=Me;if(Jt=null,xn(t,e,n),Jt=r,Me=u,Jt!==null)if(Me)try{t=Jt,a=n.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)}catch(h){qt(n,e,h)}else try{Jt.removeChild(n.stateNode)}catch(h){qt(n,e,h)}break;case 18:Jt!==null&&(Me?(e=Jt,n=n.stateNode,e.nodeType===8?us(e.parentNode,n):e.nodeType===1&&us(e,n),Br(e)):us(Jt,n.stateNode));break;case 4:a=Jt,r=Me,Jt=n.stateNode.containerInfo,Me=!0,xn(t,e,n),Jt=a,Me=r;break;case 0:case 11:case 14:case 15:Gt||Zn(2,n,e),Gt||Zn(4,n,e),xn(t,e,n);break;case 1:Gt||(De(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&W0(n,e,a)),xn(t,e,n);break;case 21:xn(t,e,n);break;case 22:Gt||De(n,e),Gt=(a=Gt)||n.memoizedState!==null,xn(t,e,n),Gt=a;break;default:xn(t,e,n)}}function uh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Br(t)}catch(n){qt(e,e.return,n)}}function T1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new nh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new nh),e;default:throw Error(o(435,t.tag))}}function Cc(t,e){var n=T1(t);e.forEach(function(a){var r=U1.bind(null,t,a);n.has(a)||(n.add(a),a.then(r,r))})}function $e(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],u=t,h=e,E=h;t:for(;E!==null;){switch(E.tag){case 27:case 5:Jt=E.stateNode,Me=!1;break t;case 3:Jt=E.stateNode.containerInfo,Me=!0;break t;case 4:Jt=E.stateNode.containerInfo,Me=!0;break t}E=E.return}if(Jt===null)throw Error(o(160));lh(u,h,r),Jt=null,Me=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)oh(e,t),e=e.sibling}var We=null;function oh(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$e(e,t),Ge(t),a&4&&(Zn(3,t,t.return),br(3,t),Zn(5,t,t.return));break;case 1:$e(e,t),Ge(t),a&512&&(Gt||n===null||De(n,n.return)),a&64&&wn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=We;if($e(e,t),Ge(t),a&512&&(Gt||n===null||De(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(a){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Vi]||u[he]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(a),r.head.insertBefore(u,r.querySelector("head > title"))),se(u,a,n),u[he]=t,ne(u),a=u;break t;case"link":var h=Fh("link","href",r).get(a+(n.href||""));if(h){for(var E=0;E<h.length;E++)if(u=h[E],u.getAttribute("href")===(n.href==null?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(E,1);break e}}u=r.createElement(a),se(u,a,n),r.head.appendChild(u);break;case"meta":if(h=Fh("meta","content",r).get(a+(n.content||""))){for(E=0;E<h.length;E++)if(u=h[E],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(E,1);break e}}u=r.createElement(a),se(u,a,n),r.head.appendChild(u);break;default:throw Error(o(468,a))}u[he]=t,ne(u),a=u}t.stateNode=a}else tm(r,t.type,t.stateNode);else t.stateNode=Wh(r,a,t.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?tm(r,t.type,t.stateNode):Wh(r,a,t.memoizedProps)):a===null&&t.stateNode!==null&&th(t,t.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&t.alternate===null){r=t.stateNode,u=t.memoizedProps;try{for(var j=r.firstChild;j;){var L=j.nextSibling,k=j.nodeName;j[Vi]||k==="HEAD"||k==="BODY"||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&j.rel.toLowerCase()==="stylesheet"||r.removeChild(j),j=L}for(var nt=t.type,$=r.attributes;$.length;)r.removeAttributeNode($[0]);se(r,nt,u),r[he]=t,r[_e]=u}catch(ct){qt(t,t.return,ct)}}case 5:if($e(e,t),Ge(t),a&512&&(Gt||n===null||De(n,n.return)),t.flags&32){r=t.stateNode;try{Qa(r,"")}catch(ct){qt(t,t.return,ct)}}a&4&&t.stateNode!=null&&(r=t.memoizedProps,th(t,r,n!==null?n.memoizedProps:r)),a&1024&&(Mc=!0);break;case 6:if($e(e,t),Ge(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(ct){qt(t,t.return,ct)}}break;case 3:if(lu=null,r=We,We=iu(e.containerInfo),$e(e,t),We=r,Ge(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(e.containerInfo)}catch(ct){qt(t,t.return,ct)}Mc&&(Mc=!1,ch(t));break;case 4:a=We,We=iu(t.stateNode.containerInfo),$e(e,t),Ge(t),We=a;break;case 12:$e(e,t),Ge(t);break;case 13:$e(e,t),Ge(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hc=Ue()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Cc(t,a)));break;case 22:if(a&512&&(Gt||n===null||De(n,n.return)),j=t.memoizedState!==null,L=n!==null&&n.memoizedState!==null,k=wn,nt=Gt,wn=k||j,Gt=nt||L,$e(e,t),Gt=nt,wn=k,Ge(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=j?e._visibility&-2:e._visibility|1,j&&(e=wn||Gt,n===null||L||e||ci(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(n=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(n===null){L=n=e;try{if(r=L.stateNode,j)u=r.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{h=L.stateNode,E=L.memoizedProps.style;var Z=E!=null&&E.hasOwnProperty("display")?E.display:null;h.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(ct){qt(L,L.return,ct)}}}else if(e.tag===6){if(n===null){L=e;try{L.stateNode.nodeValue=j?"":L.memoizedProps}catch(ct){qt(L,L.return,ct)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Cc(t,n))));break;case 19:$e(e,t),Ge(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Cc(t,a)));break;case 21:break;default:$e(e,t),Ge(t)}}function Ge(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var n=t.return;n!==null;){if(eh(n)){var a=n;break t}n=n.return}throw Error(o(160))}switch(a.tag){case 27:var r=a.stateNode,u=xc(t);$l(t,u,r);break;case 5:var h=a.stateNode;a.flags&32&&(Qa(h,""),a.flags&=-33);var E=xc(t);$l(t,E,h);break;case 3:case 4:var j=a.stateNode.containerInfo,L=xc(t);Dc(t,L,j);break;default:throw Error(o(161))}}}catch(k){qt(t,t.return,k)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ch(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ch(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Dn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ih(t,e.alternate,e),e=e.sibling}function ci(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Zn(4,e,e.return),ci(e);break;case 1:De(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&W0(e,e.return,n),ci(e);break;case 26:case 27:case 5:De(e,e.return),ci(e);break;case 22:De(e,e.return),e.memoizedState===null&&ci(e);break;default:ci(e)}t=t.sibling}}function Kn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,r=t,u=e,h=u.flags;switch(u.tag){case 0:case 11:case 15:Kn(r,u,n),br(4,u);break;case 1:if(Kn(r,u,n),a=u,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(L){qt(a,a.return,L)}if(a=u,r=a.updateQueue,r!==null){var E=a.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)K0(j[r],E)}catch(L){qt(a,a.return,L)}}n&&h&64&&J0(u),Da(u,u.return);break;case 26:case 27:case 5:Kn(r,u,n),n&&a===null&&h&4&&F0(u),Da(u,u.return);break;case 12:Kn(r,u,n);break;case 13:Kn(r,u,n),n&&h&4&&uh(r,u);break;case 22:u.memoizedState===null&&Kn(r,u,n),Da(u,u.return);break;default:Kn(r,u,n)}e=e.sibling}}function jc(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&cr(n))}function Rc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&cr(t))}function kn(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sh(t,e,n,a),e=e.sibling}function sh(t,e,n,a){var r=e.flags;switch(e.tag){case 0:case 11:case 15:kn(t,e,n,a),r&2048&&br(9,e);break;case 3:kn(t,e,n,a),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&cr(t)));break;case 12:if(r&2048){kn(t,e,n,a),t=e.stateNode;try{var u=e.memoizedProps,h=u.id,E=u.onPostCommit;typeof E=="function"&&E(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){qt(e,e.return,j)}}else kn(t,e,n,a);break;case 23:break;case 22:u=e.stateNode,e.memoizedState!==null?u._visibility&4?kn(t,e,n,a):Sr(t,e):u._visibility&4?kn(t,e,n,a):(u._visibility|=4,si(t,e,n,a,(e.subtreeFlags&10256)!==0)),r&2048&&jc(e.alternate,e);break;case 24:kn(t,e,n,a),r&2048&&Rc(e.alternate,e);break;default:kn(t,e,n,a)}}function si(t,e,n,a,r){for(r=r&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,h=e,E=n,j=a,L=h.flags;switch(h.tag){case 0:case 11:case 15:si(u,h,E,j,r),br(8,h);break;case 23:break;case 22:var k=h.stateNode;h.memoizedState!==null?k._visibility&4?si(u,h,E,j,r):Sr(u,h):(k._visibility|=4,si(u,h,E,j,r)),r&&L&2048&&jc(h.alternate,h);break;case 24:si(u,h,E,j,r),r&&L&2048&&Rc(h.alternate,h);break;default:si(u,h,E,j,r)}e=e.sibling}}function Sr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,r=a.flags;switch(a.tag){case 22:Sr(n,a),r&2048&&jc(a.alternate,a);break;case 24:Sr(n,a),r&2048&&Rc(a.alternate,a);break;default:Sr(n,a)}e=e.sibling}}var _r=8192;function fi(t){if(t.subtreeFlags&_r)for(t=t.child;t!==null;)fh(t),t=t.sibling}function fh(t){switch(t.tag){case 26:fi(t),t.flags&_r&&t.memoizedState!==null&&sy(We,t.memoizedState,t.memoizedProps);break;case 5:fi(t);break;case 3:case 4:var e=We;We=iu(t.stateNode.containerInfo),fi(t),We=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=_r,_r=16777216,fi(t),_r=e):fi(t));break;default:fi(t)}}function dh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Tr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];ie=a,mh(a,t)}dh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hh(t),t=t.sibling}function hh(t){switch(t.tag){case 0:case 11:case 15:Tr(t),t.flags&2048&&Zn(9,t,t.return);break;case 3:Tr(t);break;case 12:Tr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Gl(t)):Tr(t);break;default:Tr(t)}}function Gl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];ie=a,mh(a,t)}dh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Zn(8,e,e.return),Gl(e);break;case 22:n=e.stateNode,n._visibility&4&&(n._visibility&=-5,Gl(e));break;default:Gl(e)}t=t.sibling}}function mh(t,e){for(;ie!==null;){var n=ie;switch(n.tag){case 0:case 11:case 15:Zn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:cr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,ie=a;else t:for(n=t;ie!==null;){a=ie;var r=a.sibling,u=a.return;if(rh(a),a===n){ie=null;break t}if(r!==null){r.return=u,ie=r;break t}ie=u}}}function E1(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,n,a){return new E1(t,e,n,a)}function Nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jn(t,e){var n=t.alternate;return n===null?(n=Ve(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&31457280,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function ph(t,e){t.flags&=31457282;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Vl(t,e,n,a,r,u){var h=0;if(a=t,typeof t=="function")Nc(t)&&(h=1);else if(typeof t=="string")h=oy(t,n,Ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case d:return Ma(n.children,r,u,e);case s:h=8,r|=24;break;case g:return t=Ve(12,n,e,r|2),t.elementType=g,t.lanes=u,t;case A:return t=Ve(13,n,e,r),t.elementType=A,t.lanes=u,t;case C:return t=Ve(19,n,e,r),t.elementType=C,t.lanes=u,t;case y:return vh(n,r,u,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:case b:h=10;break t;case S:h=9;break t;case _:h=11;break t;case B:h=14;break t;case R:h=16,a=null;break t}h=29,n=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=Ve(h,n,e,r),e.elementType=t,e.type=a,e.lanes=u,e}function Ma(t,e,n,a){return t=Ve(7,t,a,e),t.lanes=n,t}function vh(t,e,n,a){t=Ve(22,t,a,e),t.elementType=y,t.lanes=n;var r={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=r._current;if(u===null)throw Error(o(456));if((r._pendingVisibility&2)===0){var h=Hn(u,2);h!==null&&(r._pendingVisibility|=2,be(h,u,2))}},attach:function(){var u=r._current;if(u===null)throw Error(o(456));if((r._pendingVisibility&2)!==0){var h=Hn(u,2);h!==null&&(r._pendingVisibility&=-3,be(h,u,2))}}};return t.stateNode=r,t}function zc(t,e,n){return t=Ve(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mn(t){t.flags|=4}function gh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!em(e)){if(e=Xe.current,e!==null&&((xt&4194176)===xt?on!==null:(xt&62914560)!==xt&&(xt&536870912)===0||e!==on))throw lr=Yo,zd;t.flags|=8192}}function Ql(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Uf():536870912,t.lanes|=e,hi|=e)}function Er(t,e){if(!Dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&31457280,a|=r.flags&31457280,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function O1(t,e,n){var a=e.pendingProps;switch(qo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return Xt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),An(ee),ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(nr(e)?Mn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Je!==null&&($c(Je),Je=null))),Xt(e),null;case 26:return n=e.memoizedState,t===null?(Mn(e),n!==null?(Xt(e),gh(e,n)):(Xt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Mn(e),Xt(e),gh(e,n)):(Xt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Mn(e),Xt(e),e.flags&=-16777217),null;case 27:oa(e),n=Se.current;var r=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Mn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Xt(e),null}t=Ut.current,nr(e)?Rd(e):(t=Ih(r,a,n),e.stateNode=t,Mn(e))}return Xt(e),null;case 5:if(oa(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Mn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Xt(e),null}if(t=Ut.current,nr(e))Rd(e);else{switch(r=au(Se.current),t){case 1:t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=r.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}t[he]=e,t[_e]=a;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=t;t:switch(se(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Mn(e)}}return Xt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Mn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=Se.current,nr(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,r=ye,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}t[he]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ph(t.nodeValue,n)),t||ba(e)}else t=au(t).createTextNode(a),t[he]=e,e.stateNode=t}return Xt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=nr(e),a!==null&&a.dehydrated!==null){if(t===null){if(!r)throw Error(o(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[he]=e}else ar(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xt(e),r=!1}else Je!==null&&($c(Je),Je=null),r=!0;if(!r)return e.flags&256?(_n(e),e):(_n(e),null)}if(_n(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==r&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Ql(e,e.updateQueue),Xt(e),null;case 4:return ze(),t===null&&ts(e.stateNode.containerInfo),Xt(e),null;case 10:return An(e.type),Xt(e),null;case 19:if(vt(te),r=e.memoizedState,r===null)return Xt(e),null;if(a=(e.flags&128)!==0,u=r.rendering,u===null)if(a)Er(r,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Ml(t),u!==null){for(e.flags|=128,Er(r,!1),t=u.updateQueue,e.updateQueue=t,Ql(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)ph(n,t),n=n.sibling;return ht(te,te.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ue()>Il&&(e.flags|=128,a=!0,Er(r,!1),e.lanes=4194304)}else{if(!a)if(t=Ml(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ql(e,t),Er(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Dt)return Xt(e),null}else 2*Ue()-r.renderingStartTime>Il&&n!==536870912&&(e.flags|=128,a=!0,Er(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ue(),e.sibling=null,t=te.current,ht(te,a?t&1|2:t&1),e):(Xt(e),null);case 22:case 23:return _n(e),Xo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),n=e.updateQueue,n!==null&&Ql(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&vt(_a),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),An(ee),Xt(e),null;case 25:return null}throw Error(o(156,e.tag))}function A1(t,e){switch(qo(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return An(ee),ze(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return oa(e),null;case 13:if(_n(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(te),null;case 4:return ze(),null;case 10:return An(e.type),null;case 22:case 23:return _n(e),Xo(),t!==null&&vt(_a),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return An(ee),null;case 25:return null;default:return null}}function yh(t,e){switch(qo(e),e.tag){case 3:An(ee),ze();break;case 26:case 27:case 5:oa(e);break;case 4:ze();break;case 13:_n(e);break;case 19:vt(te);break;case 10:An(e.type);break;case 22:case 23:_n(e),Xo(),t!==null&&vt(_a);break;case 24:An(ee)}}var w1={getCacheForType:function(t){var e=me(ee),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},x1=typeof WeakMap=="function"?WeakMap:Map,$t=0,Ht=null,At=null,xt=0,Yt=0,Ce=null,Cn=!1,di=!1,Lc=!1,jn=0,Vt=0,Wn=0,Ca=0,Bc=0,Qe=0,hi=0,Or=null,sn=null,qc=!1,Hc=0,Il=1/0,Zl=null,Fn=null,Kl=!1,ja=null,Ar=0,Yc=0,Pc=null,wr=0,Xc=null;function je(){if(($t&2)!==0&&xt!==0)return xt&-xt;if(H.T!==null){var t=ii;return t!==0?t:kc()}return Hf()}function bh(){Qe===0&&(Qe=(xt&536870912)===0||Dt?zf():536870912);var t=Xe.current;return t!==null&&(t.flags|=32),Qe}function be(t,e,n){(t===Ht&&Yt===2||t.cancelPendingCommit!==null)&&(mi(t,0),Rn(t,xt,Qe,!1)),Gi(t,n),(($t&2)===0||t!==Ht)&&(t===Ht&&(($t&2)===0&&(Ca|=n),Vt===4&&Rn(t,xt,Qe,!1)),fn(t))}function Sh(t,e,n){if(($t&6)!==0)throw Error(o(327));var a=!n&&(e&60)===0&&(e&t.expiredLanes)===0||$i(t,e),r=a?C1(t,e):Qc(t,e,!0),u=a;do{if(r===0){di&&!a&&Rn(t,e,0,!1);break}else if(r===6)Rn(t,e,0,!Cn);else{if(n=t.current.alternate,u&&!D1(n)){r=Qc(t,e,!1),u=!1;continue}if(r===2){if(u=e,t.errorRecoveryDisabledLanes&u)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var E=t;r=Or;var j=E.current.memoizedState.isDehydrated;if(j&&(mi(E,h).flags|=256),h=Qc(E,h,!1),h!==2){if(Lc&&!j){E.errorRecoveryDisabledLanes|=u,Ca|=u,r=4;break t}u=sn,sn=r,u!==null&&$c(u)}r=h}if(u=!1,r!==2)continue}}if(r===1){mi(t,0),Rn(t,e,0,!0);break}t:{switch(a=t,r){case 0:case 1:throw Error(o(345));case 4:if((e&4194176)===e){Rn(a,e,Qe,!Cn);break t}break;case 2:sn=null;break;case 3:case 5:break;default:throw Error(o(329))}if(a.finishedWork=n,a.finishedLanes=e,(e&62914560)===e&&(u=Hc+300-Ue(),10<u)){if(Rn(a,e,Qe,!Cn),ol(a,0)!==0)break t;a.timeoutHandle=Gh(_h.bind(null,a,n,sn,Zl,qc,e,Qe,Ca,hi,Cn,2,-0,0),u);break t}_h(a,n,sn,Zl,qc,e,Qe,Ca,hi,Cn,0,-0,0)}}break}while(!0);fn(t)}function $c(t){sn===null?sn=t:sn.push.apply(sn,t)}function _h(t,e,n,a,r,u,h,E,j,L,k,nt,$){var Z=e.subtreeFlags;if((Z&8192||(Z&16785408)===16785408)&&(Rr={stylesheets:null,count:0,unsuspend:cy},fh(e),e=fy(),e!==null)){t.cancelPendingCommit=e(Dh.bind(null,t,n,a,r,h,E,j,1,nt,$)),Rn(t,u,h,!L);return}Dh(t,n,a,r,h,E,j,k,nt,$)}function D1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],u=r.getSnapshot;r=r.value;try{if(!xe(u(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e,n,a){e&=~Bc,e&=~Ca,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var r=e;0<r;){var u=31-we(r),h=1<<u;a[u]=-1,r&=~h}n!==0&&Lf(t,n,e)}function kl(){return($t&6)===0?(xr(0),!1):!0}function Gc(){if(At!==null){if(Yt===0)var t=At.return;else t=At,On=wa=null,ko(t),ni=null,ur=0,t=At;for(;t!==null;)yh(t.alternate,t),t=t.return;At=null}}function mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,I1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Gc(),Ht=t,At=n=Jn(t.current,null),xt=e,Yt=0,Ce=null,Cn=!1,di=$i(t,e),Lc=!1,hi=Qe=Bc=Ca=Wn=Vt=0,sn=Or=null,qc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var r=31-we(a),u=1<<r;e|=t[r],a&=~u}return jn=e,Sl(),n}function Th(t,e){Et=null,H.H=cn,e===rr?(e=Bd(),Yt=3):e===zd?(e=Bd(),Yt=4):Yt=e===U0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ce=e,At===null&&(Vt=1,Yl(t,He(e,t.current)))}function Eh(){var t=H.H;return H.H=cn,t===null?cn:t}function Oh(){var t=H.A;return H.A=w1,t}function Vc(){Vt=4,Cn||(xt&4194176)!==xt&&Xe.current!==null||(di=!0),(Wn&134217727)===0&&(Ca&134217727)===0||Ht===null||Rn(Ht,xt,Qe,!1)}function Qc(t,e,n){var a=$t;$t|=2;var r=Eh(),u=Oh();(Ht!==t||xt!==e)&&(Zl=null,mi(t,e)),e=!1;var h=Vt;t:do try{if(Yt!==0&&At!==null){var E=At,j=Ce;switch(Yt){case 8:Gc(),h=6;break t;case 3:case 2:case 6:Xe.current===null&&(e=!0);var L=Yt;if(Yt=0,Ce=null,pi(t,E,j,L),n&&di){h=0;break t}break;default:L=Yt,Yt=0,Ce=null,pi(t,E,j,L)}}M1(),h=Vt;break}catch(k){Th(t,k)}while(!0);return e&&t.shellSuspendCounter++,On=wa=null,$t=a,H.H=r,H.A=u,At===null&&(Ht=null,xt=0,Sl()),h}function M1(){for(;At!==null;)Ah(At)}function C1(t,e){var n=$t;$t|=2;var a=Eh(),r=Oh();Ht!==t||xt!==e?(Zl=null,Il=Ue()+500,mi(t,e)):di=$i(t,e);t:do try{if(Yt!==0&&At!==null){e=At;var u=Ce;e:switch(Yt){case 1:Yt=0,Ce=null,pi(t,e,u,1);break;case 2:if(Ud(u)){Yt=0,Ce=null,wh(e);break}e=function(){Yt===2&&Ht===t&&(Yt=7),fn(t)},u.then(e,e);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:Ud(u)?(Yt=0,Ce=null,wh(e)):(Yt=0,Ce=null,pi(t,e,u,7));break;case 5:var h=null;switch(At.tag){case 26:h=At.memoizedState;case 5:case 27:var E=At;if(!h||em(h)){Yt=0,Ce=null;var j=E.sibling;if(j!==null)At=j;else{var L=E.return;L!==null?(At=L,Jl(L)):At=null}break e}}Yt=0,Ce=null,pi(t,e,u,5);break;case 6:Yt=0,Ce=null,pi(t,e,u,6);break;case 8:Gc(),Vt=6;break t;default:throw Error(o(462))}}j1();break}catch(k){Th(t,k)}while(!0);return On=wa=null,H.H=a,H.A=r,$t=n,At!==null?0:(Ht=null,xt=0,Sl(),Vt)}function j1(){for(;At!==null&&!Hi();)Ah(At)}function Ah(t){var e=I0(t.alternate,t,jn);t.memoizedProps=t.pendingProps,e===null?Jl(t):At=e}function wh(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=P0(n,e,e.pendingProps,e.type,void 0,xt);break;case 11:e=P0(n,e,e.pendingProps,e.type.render,e.ref,xt);break;case 5:ko(e);default:yh(n,e),e=At=ph(e,jn),e=I0(n,e,jn)}t.memoizedProps=t.pendingProps,e===null?Jl(t):At=e}function pi(t,e,n,a){On=wa=null,ko(e),ni=null,ur=0;var r=e.return;try{if(b1(t,r,e,n,xt)){Vt=1,Yl(t,He(n,t.current)),At=null;return}}catch(u){if(r!==null)throw At=r,u;Vt=1,Yl(t,He(n,t.current)),At=null;return}e.flags&32768?(Dt||a===1?t=!0:di||(xt&536870912)!==0?t=!1:(Cn=t=!0,(a===2||a===3||a===6)&&(a=Xe.current,a!==null&&a.tag===13&&(a.flags|=16384))),xh(e,t)):Jl(e)}function Jl(t){var e=t;do{if((e.flags&32768)!==0){xh(e,Cn);return}t=e.return;var n=O1(e.alternate,e,jn);if(n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Vt===0&&(Vt=5)}function xh(t,e){do{var n=A1(t.alternate,t);if(n!==null){n.flags&=32767,At=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){At=t;return}At=t=n}while(t!==null);Vt=6,At=null}function Dh(t,e,n,a,r,u,h,E,j,L){var k=H.T,nt=N.p;try{N.p=2,H.T=null,R1(t,e,n,a,nt,r,u,h,E,j,L)}finally{H.T=k,N.p=nt}}function R1(t,e,n,a,r,u,h,E){do vi();while(ja!==null);if(($t&6)!==0)throw Error(o(327));var j=t.finishedWork;if(a=t.finishedLanes,j===null)return null;if(t.finishedWork=null,t.finishedLanes=0,j===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var L=j.lanes|j.childLanes;if(L|=Uo,sg(t,a,L,u,h,E),t===Ht&&(At=Ht=null,xt=0),(j.subtreeFlags&10256)===0&&(j.flags&10256)===0||Kl||(Kl=!0,Yc=L,Pc=n,L1(qa,function(){return vi(),null})),n=(j.flags&15990)!==0,(j.subtreeFlags&15990)!==0||n?(n=H.T,H.T=null,u=N.p,N.p=2,h=$t,$t|=4,_1(t,j),oh(j,t),n1(is,t.containerInfo),cu=!!as,is=as=null,t.current=j,ih(t,j.alternate,j),Yi(),$t=h,N.p=u,H.T=n):t.current=j,Kl?(Kl=!1,ja=t,Ar=a):Mh(t,L),L=t.pendingLanes,L===0&&(Fn=null),rg(j.stateNode),fn(t),e!==null)for(r=t.onRecoverableError,j=0;j<e.length;j++)L=e[j],r(L.value,{componentStack:L.stack});return(Ar&3)!==0&&vi(),L=t.pendingLanes,(a&4194218)!==0&&(L&42)!==0?t===Xc?wr++:(wr=0,Xc=t):wr=0,xr(0),null}function Mh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,cr(e)))}function vi(){if(ja!==null){var t=ja,e=Yc;Yc=0;var n=qf(Ar),a=H.T,r=N.p;try{if(N.p=32>n?32:n,H.T=null,ja===null)var u=!1;else{n=Pc,Pc=null;var h=ja,E=Ar;if(ja=null,Ar=0,($t&6)!==0)throw Error(o(331));var j=$t;if($t|=4,hh(h.current),sh(h,h.current,E,n),$t=j,xr(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(sa,h)}catch{}u=!0}return u}finally{N.p=r,H.T=a,Mh(t,e)}}return!1}function Ch(t,e,n){e=He(n,e),e=sc(t.stateNode,e,2),t=In(t,e,2),t!==null&&(Gi(t,2),fn(t))}function qt(t,e,n){if(t.tag===3)Ch(t,t,n);else for(;e!==null;){if(e.tag===3){Ch(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Fn===null||!Fn.has(a))){t=He(n,t),n=N0(2),a=In(e,n,2),a!==null&&(z0(n,a,e,t),Gi(a,2),fn(a));break}}e=e.return}}function Ic(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new x1;var r=new Set;a.set(e,r)}else r=a.get(e),r===void 0&&(r=new Set,a.set(e,r));r.has(n)||(Lc=!0,r.add(n),t=N1.bind(null,t,e,n),e.then(t,t))}function N1(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ht===t&&(xt&n)===n&&(Vt===4||Vt===3&&(xt&62914560)===xt&&300>Ue()-Hc?($t&2)===0&&mi(t,0):Bc|=n,hi===xt&&(hi=0)),fn(t)}function jh(t,e){e===0&&(e=Uf()),t=Hn(t,e),t!==null&&(Gi(t,e),fn(t))}function z1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jh(t,n)}function U1(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),jh(t,n)}function L1(t,e){return qi(t,e)}var Wl=null,gi=null,Zc=!1,Fl=!1,Kc=!1,Ra=0;function fn(t){t!==gi&&t.next===null&&(gi===null?Wl=gi=t:gi=gi.next=t),Fl=!0,Zc||(Zc=!0,q1(B1))}function xr(t,e){if(!Kc&&Fl){Kc=!0;do for(var n=!1,a=Wl;a!==null;){if(t!==0){var r=a.pendingLanes;if(r===0)var u=0;else{var h=a.suspendedLanes,E=a.pingedLanes;u=(1<<31-we(42|t)+1)-1,u&=r&~(h&~E),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(n=!0,zh(a,u))}else u=xt,u=ol(a,a===Ht?u:0),(u&3)===0||$i(a,u)||(n=!0,zh(a,u));a=a.next}while(n);Kc=!1}}function B1(){Fl=Zc=!1;var t=0;Ra!==0&&(Q1()&&(t=Ra),Ra=0);for(var e=Ue(),n=null,a=Wl;a!==null;){var r=a.next,u=Rh(a,e);u===0?(a.next=null,n===null?Wl=r:n.next=r,r===null&&(gi=n)):(n=a,(t!==0||(u&3)!==0)&&(Fl=!0)),a=r}xr(t)}function Rh(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var h=31-we(u),E=1<<h,j=r[h];j===-1?((E&n)===0||(E&a)!==0)&&(r[h]=cg(E,e)):j<=e&&(t.expiredLanes|=E),u&=~E}if(e=Ht,n=xt,n=ol(t,t===e?n:0),a=t.callbackNode,n===0||t===e&&Yt===2||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ba(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||$i(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Ba(a),qf(n)){case 2:case 8:n=Xi;break;case 32:n=qa;break;case 268435456:n=Ha;break;default:n=qa}return a=Nh.bind(null,t),n=qi(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Ba(a),t.callbackPriority=2,t.callbackNode=null,2}function Nh(t,e){var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var a=xt;return a=ol(t,t===Ht?a:0),a===0?null:(Sh(t,a,e),Rh(t,Ue()),t.callbackNode!=null&&t.callbackNode===n?Nh.bind(null,t):null)}function zh(t,e){if(vi())return null;Sh(t,e,!0)}function q1(t){Z1(function(){($t&6)!==0?qi(ca,t):t()})}function kc(){return Ra===0&&(Ra=zf()),Ra}function Uh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hl(""+t)}function Lh(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function H1(t,e,n,a,r){if(e==="submit"&&n&&n.stateNode===r){var u=Uh((r[_e]||null).action),h=a.submitter;h&&(e=(e=h[_e]||null)?Uh(e.formAction):h.getAttribute("formAction"),e!==null&&(u=e,h=null));var E=new gl("action","action",null,a,r);t.push({event:E,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ra!==0){var j=h?Lh(r,h):new FormData(r);rc(n,{pending:!0,data:j,method:r.method,action:u},null,j)}}else typeof u=="function"&&(E.preventDefault(),j=h?Lh(r,h):new FormData(r),rc(n,{pending:!0,data:j,method:r.method,action:u},u,j))},currentTarget:r}]})}}for(var Jc=0;Jc<Dd.length;Jc++){var Wc=Dd[Jc],Y1=Wc.toLowerCase(),P1=Wc[0].toUpperCase()+Wc.slice(1);ke(Y1,"on"+P1)}ke(Ed,"onAnimationEnd"),ke(Od,"onAnimationIteration"),ke(Ad,"onAnimationStart"),ke("dblclick","onDoubleClick"),ke("focusin","onFocus"),ke("focusout","onBlur"),ke(i1,"onTransitionRun"),ke(r1,"onTransitionStart"),ke(l1,"onTransitionCancel"),ke(wd,"onTransitionEnd"),Ga("onMouseEnter",["mouseout","mouseover"]),Ga("onMouseLeave",["mouseout","mouseover"]),Ga("onPointerEnter",["pointerout","pointerover"]),Ga("onPointerLeave",["pointerout","pointerover"]),ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dr));function Bh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],r=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var h=a.length-1;0<=h;h--){var E=a[h],j=E.instance,L=E.currentTarget;if(E=E.listener,j!==u&&r.isPropagationStopped())break t;u=E,r.currentTarget=L;try{u(r)}catch(k){Hl(k)}r.currentTarget=null,u=j}else for(h=0;h<a.length;h++){if(E=a[h],j=E.instance,L=E.currentTarget,E=E.listener,j!==u&&r.isPropagationStopped())break t;u=E,r.currentTarget=L;try{u(r)}catch(k){Hl(k)}r.currentTarget=null,u=j}}}}function wt(t,e){var n=e[mo];n===void 0&&(n=e[mo]=new Set);var a=t+"__bubble";n.has(a)||(qh(e,t,2,!1),n.add(a))}function Fc(t,e,n){var a=0;e&&(a|=4),qh(n,t,a,e)}var tu="_reactListening"+Math.random().toString(36).slice(2);function ts(t){if(!t[tu]){t[tu]=!0,Pf.forEach(function(n){n!=="selectionchange"&&(X1.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tu]||(e[tu]=!0,Fc("selectionchange",!1,e))}}function qh(t,e,n,a){switch(um(e)){case 2:var r=my;break;case 8:r=py;break;default:r=hs}n=r.bind(null,e,n,t),r=void 0,!To||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),a?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function es(t,e,n,a,r){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var E=a.stateNode.containerInfo;if(E===r||E.nodeType===8&&E.parentNode===r)break;if(h===4)for(h=a.return;h!==null;){var j=h.tag;if((j===3||j===4)&&(j=h.stateNode.containerInfo,j===r||j.nodeType===8&&j.parentNode===r))return;h=h.return}for(;E!==null;){if(h=da(E),h===null)return;if(j=h.tag,j===5||j===6||j===26||j===27){a=u=h;continue t}E=E.parentNode}}a=a.return}Ff(function(){var L=u,k=So(n),nt=[];t:{var $=xd.get(t);if($!==void 0){var Z=gl,ct=t;switch(t){case"keypress":if(pl(n)===0)break t;case"keydown":case"keyup":Z=Ug;break;case"focusin":ct="focus",Z=wo;break;case"focusout":ct="blur",Z=wo;break;case"beforeblur":case"afterblur":Z=wo;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=qg;break;case Ed:case Od:case Ad:Z=wg;break;case wd:Z=Yg;break;case"scroll":case"scrollend":Z=_g;break;case"wheel":Z=Xg;break;case"copy":case"cut":case"paste":Z=Dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=id;break;case"toggle":case"beforetoggle":Z=Gg}var gt=(e&4)!==0,Qt=!gt&&(t==="scroll"||t==="scrollend"),q=gt?$!==null?$+"Capture":null:$;gt=[];for(var U=L,X;U!==null;){var J=U;if(X=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||X===null||q===null||(J=Ii(U,q),J!=null&&gt.push(Mr(U,J,X))),Qt)break;U=U.return}0<gt.length&&($=new Z($,ct,null,n,k),nt.push({event:$,listeners:gt}))}}if((e&7)===0){t:{if($=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",$&&n!==bo&&(ct=n.relatedTarget||n.fromElement)&&(da(ct)||ct[Pa]))break t;if((Z||$)&&($=k.window===k?k:($=k.ownerDocument)?$.defaultView||$.parentWindow:window,Z?(ct=n.relatedTarget||n.toElement,Z=L,ct=ct?da(ct):null,ct!==null&&(Qt=tt(ct),gt=ct.tag,ct!==Qt||gt!==5&&gt!==27&&gt!==6)&&(ct=null)):(Z=null,ct=L),Z!==ct)){if(gt=nd,J="onMouseLeave",q="onMouseEnter",U="mouse",(t==="pointerout"||t==="pointerover")&&(gt=id,J="onPointerLeave",q="onPointerEnter",U="pointer"),Qt=Z==null?$:Qi(Z),X=ct==null?$:Qi(ct),$=new gt(J,U+"leave",Z,n,k),$.target=Qt,$.relatedTarget=X,J=null,da(k)===L&&(gt=new gt(q,U+"enter",ct,n,k),gt.target=X,gt.relatedTarget=Qt,J=gt),Qt=J,Z&&ct)e:{for(gt=Z,q=ct,U=0,X=gt;X;X=yi(X))U++;for(X=0,J=q;J;J=yi(J))X++;for(;0<U-X;)gt=yi(gt),U--;for(;0<X-U;)q=yi(q),X--;for(;U--;){if(gt===q||q!==null&&gt===q.alternate)break e;gt=yi(gt),q=yi(q)}gt=null}else gt=null;Z!==null&&Hh(nt,$,Z,gt,!1),ct!==null&&Qt!==null&&Hh(nt,Qt,ct,gt,!0)}}t:{if($=L?Qi(L):window,Z=$.nodeName&&$.nodeName.toLowerCase(),Z==="select"||Z==="input"&&$.type==="file")var ot=dd;else if(sd($))if(hd)ot=t1;else{ot=Wg;var Ot=Jg}else Z=$.nodeName,!Z||Z.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?L&&yo(L.elementType)&&(ot=dd):ot=Fg;if(ot&&(ot=ot(t,L))){fd(nt,ot,n,k);break t}Ot&&Ot(t,$,L),t==="focusout"&&L&&$.type==="number"&&L.memoizedProps.value!=null&&go($,"number",$.value)}switch(Ot=L?Qi(L):window,t){case"focusin":(sd(Ot)||Ot.contentEditable==="true")&&(ka=Ot,Ro=L,er=null);break;case"focusout":er=Ro=ka=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,_d(nt,n,k);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":_d(nt,n,k)}var st;if(Do)t:{switch(t){case"compositionstart":var mt="onCompositionStart";break t;case"compositionend":mt="onCompositionEnd";break t;case"compositionupdate":mt="onCompositionUpdate";break t}mt=void 0}else Ka?od(t,n)&&(mt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(mt="onCompositionStart");mt&&(rd&&n.locale!=="ko"&&(Ka||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Ka&&(st=td()):(qn=k,Eo="value"in qn?qn.value:qn.textContent,Ka=!0)),Ot=eu(L,mt),0<Ot.length&&(mt=new ad(mt,t,null,n,k),nt.push({event:mt,listeners:Ot}),st?mt.data=st:(st=cd(n),st!==null&&(mt.data=st)))),(st=Qg?Ig(t,n):Zg(t,n))&&(mt=eu(L,"onBeforeInput"),0<mt.length&&(Ot=new ad("onBeforeInput","beforeinput",null,n,k),nt.push({event:Ot,listeners:mt}),Ot.data=st)),H1(nt,t,L,n,k)}Bh(nt,e)})}function Mr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",a=[];t!==null;){var r=t,u=r.stateNode;r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=Ii(t,n),r!=null&&a.unshift(Mr(t,r,u)),r=Ii(t,e),r!=null&&a.push(Mr(t,r,u))),t=t.return}return a}function yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hh(t,e,n,a,r){for(var u=e._reactName,h=[];n!==null&&n!==a;){var E=n,j=E.alternate,L=E.stateNode;if(E=E.tag,j!==null&&j===a)break;E!==5&&E!==26&&E!==27||L===null||(j=L,r?(L=Ii(n,u),L!=null&&h.unshift(Mr(n,L,j))):r||(L=Ii(n,u),L!=null&&h.push(Mr(n,L,j)))),n=n.return}h.length!==0&&t.push({event:e,listeners:h})}var $1=/\r\n?/g,G1=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace($1,`
`).replace(G1,"")}function Ph(t,e){return e=Yh(e),Yh(t)===e}function nu(){}function Bt(t,e,n,a,r,u){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Qa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Qa(t,""+a);break;case"className":sl(t,"class",a);break;case"tabIndex":sl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":sl(t,n,a);break;case"style":Jf(t,a,u);break;case"data":if(e!=="object"){sl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=hl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Bt(t,e,"name",r.name,r,null),Bt(t,e,"formEncType",r.formEncType,r,null),Bt(t,e,"formMethod",r.formMethod,r,null),Bt(t,e,"formTarget",r.formTarget,r,null)):(Bt(t,e,"encType",r.encType,r,null),Bt(t,e,"method",r.method,r,null),Bt(t,e,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=hl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=nu);break;case"onScroll":a!=null&&wt("scroll",t);break;case"onScrollEnd":a!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=hl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":wt("beforetoggle",t),wt("toggle",t),cl(t,"popover",a);break;case"xlinkActuate":yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":yn(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":yn(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":yn(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":yn(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":cl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=bg.get(n)||n,cl(t,n,a))}}function ns(t,e,n,a,r,u){switch(n){case"style":Jf(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"children":typeof a=="string"?Qa(t,a):(typeof a=="number"||typeof a=="bigint")&&Qa(t,""+a);break;case"onScroll":a!=null&&wt("scroll",t);break;case"onScrollEnd":a!=null&&wt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=nu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xf.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[_e]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,r),typeof a=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,r);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):cl(t,n,a)}}}function se(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var a=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var h=n[u];if(h!=null)switch(u){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Bt(t,e,u,h,n,null)}}r&&Bt(t,e,"srcSet",n.srcSet,n,null),a&&Bt(t,e,"src",n.src,n,null);return;case"input":wt("invalid",t);var E=u=h=r=null,j=null,L=null;for(a in n)if(n.hasOwnProperty(a)){var k=n[a];if(k!=null)switch(a){case"name":r=k;break;case"type":h=k;break;case"checked":j=k;break;case"defaultChecked":L=k;break;case"value":u=k;break;case"defaultValue":E=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,e));break;default:Bt(t,e,a,k,n,null)}}If(t,u,E,j,L,h,r,!1),fl(t);return;case"select":wt("invalid",t),a=h=u=null;for(r in n)if(n.hasOwnProperty(r)&&(E=n[r],E!=null))switch(r){case"value":u=E;break;case"defaultValue":h=E;break;case"multiple":a=E;default:Bt(t,e,r,E,n,null)}e=u,n=h,t.multiple=!!a,e!=null?Va(t,!!a,e,!1):n!=null&&Va(t,!!a,n,!0);return;case"textarea":wt("invalid",t),u=r=a=null;for(h in n)if(n.hasOwnProperty(h)&&(E=n[h],E!=null))switch(h){case"value":a=E;break;case"defaultValue":r=E;break;case"children":u=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(91));break;default:Bt(t,e,h,E,n,null)}Kf(t,a,r,u),fl(t);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(a=n[j],a!=null))switch(j){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Bt(t,e,j,a,n,null)}return;case"dialog":wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(a=0;a<Dr.length;a++)wt(Dr[a],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(a=n[L],a!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Bt(t,e,L,a,n,null)}return;default:if(yo(e)){for(k in n)n.hasOwnProperty(k)&&(a=n[k],a!==void 0&&ns(t,e,k,a,n,void 0));return}}for(E in n)n.hasOwnProperty(E)&&(a=n[E],a!=null&&Bt(t,e,E,a,n,null))}function V1(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,h=null,E=null,j=null,L=null,k=null;for(Z in n){var nt=n[Z];if(n.hasOwnProperty(Z)&&nt!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":j=nt;default:a.hasOwnProperty(Z)||Bt(t,e,Z,null,a,nt)}}for(var $ in a){var Z=a[$];if(nt=n[$],a.hasOwnProperty($)&&(Z!=null||nt!=null))switch($){case"type":u=Z;break;case"name":r=Z;break;case"checked":L=Z;break;case"defaultChecked":k=Z;break;case"value":h=Z;break;case"defaultValue":E=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(o(137,e));break;default:Z!==nt&&Bt(t,e,$,Z,a,nt)}}vo(t,h,E,j,L,k,u,r);return;case"select":Z=h=E=$=null;for(u in n)if(j=n[u],n.hasOwnProperty(u)&&j!=null)switch(u){case"value":break;case"multiple":Z=j;default:a.hasOwnProperty(u)||Bt(t,e,u,null,a,j)}for(r in a)if(u=a[r],j=n[r],a.hasOwnProperty(r)&&(u!=null||j!=null))switch(r){case"value":$=u;break;case"defaultValue":E=u;break;case"multiple":h=u;default:u!==j&&Bt(t,e,r,u,a,j)}e=E,n=h,a=Z,$!=null?Va(t,!!n,$,!1):!!a!=!!n&&(e!=null?Va(t,!!n,e,!0):Va(t,!!n,n?[]:"",!1));return;case"textarea":Z=$=null;for(E in n)if(r=n[E],n.hasOwnProperty(E)&&r!=null&&!a.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Bt(t,e,E,null,a,r)}for(h in a)if(r=a[h],u=n[h],a.hasOwnProperty(h)&&(r!=null||u!=null))switch(h){case"value":$=r;break;case"defaultValue":Z=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==u&&Bt(t,e,h,r,a,u)}Zf(t,$,Z);return;case"option":for(var ct in n)if($=n[ct],n.hasOwnProperty(ct)&&$!=null&&!a.hasOwnProperty(ct))switch(ct){case"selected":t.selected=!1;break;default:Bt(t,e,ct,null,a,$)}for(j in a)if($=a[j],Z=n[j],a.hasOwnProperty(j)&&$!==Z&&($!=null||Z!=null))switch(j){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Bt(t,e,j,$,a,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in n)$=n[gt],n.hasOwnProperty(gt)&&$!=null&&!a.hasOwnProperty(gt)&&Bt(t,e,gt,null,a,$);for(L in a)if($=a[L],Z=n[L],a.hasOwnProperty(L)&&$!==Z&&($!=null||Z!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,e));break;default:Bt(t,e,L,$,a,Z)}return;default:if(yo(e)){for(var Qt in n)$=n[Qt],n.hasOwnProperty(Qt)&&$!==void 0&&!a.hasOwnProperty(Qt)&&ns(t,e,Qt,void 0,a,$);for(k in a)$=a[k],Z=n[k],!a.hasOwnProperty(k)||$===Z||$===void 0&&Z===void 0||ns(t,e,k,$,a,Z);return}}for(var q in n)$=n[q],n.hasOwnProperty(q)&&$!=null&&!a.hasOwnProperty(q)&&Bt(t,e,q,null,a,$);for(nt in a)$=a[nt],Z=n[nt],!a.hasOwnProperty(nt)||$===Z||$==null&&Z==null||Bt(t,e,nt,$,a,Z)}var as=null,is=null;function au(t){return t.nodeType===9?t:t.ownerDocument}function Xh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $h(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function rs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ls=null;function Q1(){var t=window.event;return t&&t.type==="popstate"?t===ls?!1:(ls=t,!0):(ls=null,!1)}var Gh=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,Z1=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(t){return Vh.resolve(null).then(t).catch(K1)}:Gh;function K1(t){setTimeout(function(){throw t})}function us(t,e){var n=e,a=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(a===0){t.removeChild(r),Br(e);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=r}while(n);Br(e)}function os(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":os(n),po(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function k1(t,e,n,a){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Vi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==r.rel||t.getAttribute("href")!==(r.href==null?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Fe(t.nextSibling),t===null)break}return null}function J1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Fe(t.nextSibling),t===null))return null;return t}function Fe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function Ih(t,e,n){switch(e=au(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}var Ie=new Map,Zh=new Set;function iu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Nn=N.d;N.d={f:W1,r:F1,D:ty,C:ey,L:ny,m:ay,X:ry,S:iy,M:ly};function W1(){var t=Nn.f(),e=kl();return t||e}function F1(t){var e=Xa(t);e!==null&&e.tag===5&&e.type==="form"?_0(e):Nn.r(t)}var bi=typeof document>"u"?null:document;function Kh(t,e,n){var a=bi;if(a&&typeof e=="string"&&e){var r=Be(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Zh.has(r)||(Zh.add(r),t={rel:t,crossOrigin:n,href:e},a.querySelector(r)===null&&(e=a.createElement("link"),se(e,"link",t),ne(e),a.head.appendChild(e)))}}function ty(t){Nn.D(t),Kh("dns-prefetch",t,null)}function ey(t,e){Nn.C(t,e),Kh("preconnect",t,e)}function ny(t,e,n){Nn.L(t,e,n);var a=bi;if(a&&t&&e){var r='link[rel="preload"][as="'+Be(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Be(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Be(n.imageSizes)+'"]')):r+='[href="'+Be(t)+'"]';var u=r;switch(e){case"style":u=Si(t);break;case"script":u=_i(t)}Ie.has(u)||(t=K({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ie.set(u,t),a.querySelector(r)!==null||e==="style"&&a.querySelector(Cr(u))||e==="script"&&a.querySelector(jr(u))||(e=a.createElement("link"),se(e,"link",t),ne(e),a.head.appendChild(e)))}}function ay(t,e){Nn.m(t,e);var n=bi;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Be(a)+'"][href="'+Be(t)+'"]',u=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=_i(t)}if(!Ie.has(u)&&(t=K({rel:"modulepreload",href:t},e),Ie.set(u,t),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(jr(u)))return}a=n.createElement("link"),se(a,"link",t),ne(a),n.head.appendChild(a)}}}function iy(t,e,n){Nn.S(t,e,n);var a=bi;if(a&&t){var r=$a(a).hoistableStyles,u=Si(t);e=e||"default";var h=r.get(u);if(!h){var E={loading:0,preload:null};if(h=a.querySelector(Cr(u)))E.loading=5;else{t=K({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ie.get(u))&&cs(t,n);var j=h=a.createElement("link");ne(j),se(j,"link",t),j._p=new Promise(function(L,k){j.onload=L,j.onerror=k}),j.addEventListener("load",function(){E.loading|=1}),j.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ru(h,e,a)}h={type:"stylesheet",instance:h,count:1,state:E},r.set(u,h)}}}function ry(t,e){Nn.X(t,e);var n=bi;if(n&&t){var a=$a(n).hoistableScripts,r=_i(t),u=a.get(r);u||(u=n.querySelector(jr(r)),u||(t=K({src:t,async:!0},e),(e=Ie.get(r))&&ss(t,e),u=n.createElement("script"),ne(u),se(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function ly(t,e){Nn.M(t,e);var n=bi;if(n&&t){var a=$a(n).hoistableScripts,r=_i(t),u=a.get(r);u||(u=n.querySelector(jr(r)),u||(t=K({src:t,async:!0,type:"module"},e),(e=Ie.get(r))&&ss(t,e),u=n.createElement("script"),ne(u),se(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function kh(t,e,n,a){var r=(r=Se.current)?iu(r):null;if(!r)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Si(n.href),n=$a(r).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Si(n.href);var u=$a(r).hoistableStyles,h=u.get(t);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,h),(u=r.querySelector(Cr(t)))&&!u._p&&(h.instance=u,h.state.loading=5),Ie.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ie.set(t,n),u||uy(r,t,n,h.state))),e&&a===null)throw Error(o(528,""));return h}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=_i(n),n=$a(r).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Si(t){return'href="'+Be(t)+'"'}function Cr(t){return'link[rel="stylesheet"]['+t+"]"}function Jh(t){return K({},t,{"data-precedence":t.precedence,precedence:null})}function uy(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),se(e,"link",n),ne(e),t.head.appendChild(e))}function _i(t){return'[src="'+Be(t)+'"]'}function jr(t){return"script[async]"+t}function Wh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Be(n.href)+'"]');if(a)return e.instance=a,ne(a),a;var r=K({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ne(a),se(a,"style",r),ru(a,n.precedence,t),e.instance=a;case"stylesheet":r=Si(n.href);var u=t.querySelector(Cr(r));if(u)return e.state.loading|=4,e.instance=u,ne(u),u;a=Jh(n),(r=Ie.get(r))&&cs(a,r),u=(t.ownerDocument||t).createElement("link"),ne(u);var h=u;return h._p=new Promise(function(E,j){h.onload=E,h.onerror=j}),se(u,"link",a),e.state.loading|=4,ru(u,n.precedence,t),e.instance=u;case"script":return u=_i(n.src),(r=t.querySelector(jr(u)))?(e.instance=r,ne(r),r):(a=n,(r=Ie.get(u))&&(a=K({},n),ss(a,r)),t=t.ownerDocument||t,r=t.createElement("script"),ne(r),se(r,"link",a),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,ru(a,n.precedence,t));return e.instance}function ru(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,u=r,h=0;h<a.length;h++){var E=a[h];if(E.dataset.precedence===e)u=E;else if(u!==r)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function cs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ss(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var lu=null;function Fh(t,e,n){if(lu===null){var a=new Map,r=lu=new Map;r.set(n,a)}else r=lu,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var u=n[r];if(!(u[Vi]||u[he]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(e)||"";h=t+h;var E=a.get(h);E?E.push(u):a.set(h,[u])}}return a}function tm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function oy(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function em(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Rr=null;function cy(){}function sy(t,e,n){if(Rr===null)throw Error(o(475));var a=Rr;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=Si(n.href),u=t.querySelector(Cr(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=uu.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=u,ne(u);return}u=t.ownerDocument||t,n=Jh(n),(r=Ie.get(r))&&cs(n,r),u=u.createElement("link"),ne(u);var h=u;h._p=new Promise(function(E,j){h.onload=E,h.onerror=j}),se(u,"link",n),e.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=uu.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function fy(){if(Rr===null)throw Error(o(475));var t=Rr;return t.stylesheets&&t.count===0&&fs(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&fs(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function uu(){if(this.count--,this.count===0){if(this.stylesheets)fs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ou=null;function fs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ou=new Map,e.forEach(dy,t),ou=null,uu.call(t))}function dy(t,e){if(!(e.state.loading&4)){var n=ou.get(t);if(n)var a=n.get(null);else{n=new Map,ou.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var h=r[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),a=h)}a&&n.set(null,a)}r=e.instance,h=r.getAttribute("data-precedence"),u=n.get(h)||a,u===a&&n.set(null,r),n.set(h,r),this.count++,a=uu.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var Nr={$$typeof:b,Provider:null,Consumer:null,_currentValue:St,_currentValue2:St,_threadCount:0};function hy(t,e,n,a,r,u,h,E){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.hiddenUpdates=ho(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function nm(t,e,n,a,r,u,h,E,j,L,k,nt){return t=new hy(t,e,n,h,E,j,L,nt),e=1,u===!0&&(e|=24),u=Ve(3,null,null,e),t.current=u,u.stateNode=t,e=$o(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:e},Ec(u),t}function am(t){return t?(t=Fa,t):Fa}function im(t,e,n,a,r,u){r=am(r),a.context===null?a.context=r:a.pendingContext=r,a=Qn(e),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=In(t,a,e),n!==null&&(be(n,t,e),vr(n,t,e))}function rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ds(t,e){rm(t,e),(t=t.alternate)&&rm(t,e)}function lm(t){if(t.tag===13){var e=Hn(t,67108864);e!==null&&be(e,t,67108864),ds(t,67108864)}}var cu=!0;function my(t,e,n,a){var r=H.T;H.T=null;var u=N.p;try{N.p=2,hs(t,e,n,a)}finally{N.p=u,H.T=r}}function py(t,e,n,a){var r=H.T;H.T=null;var u=N.p;try{N.p=8,hs(t,e,n,a)}finally{N.p=u,H.T=r}}function hs(t,e,n,a){if(cu){var r=ms(a);if(r===null)es(t,e,a,su,n),om(t,a);else if(gy(r,t,e,n,a))a.stopPropagation();else if(om(t,a),e&4&&-1<vy.indexOf(t)){for(;r!==null;){var u=Xa(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=fa(u.pendingLanes);if(h!==0){var E=u;for(E.pendingLanes|=2,E.entangledLanes|=2;h;){var j=1<<31-we(h);E.entanglements[1]|=j,h&=~j}fn(u),($t&6)===0&&(Il=Ue()+500,xr(0))}}break;case 13:E=Hn(u,2),E!==null&&be(E,u,2),kl(),ds(u,2)}if(u=ms(a),u===null&&es(t,e,a,su,n),u===r)break;r=u}r!==null&&a.stopPropagation()}else es(t,e,a,null,n)}}function ms(t){return t=So(t),ps(t)}var su=null;function ps(t){if(su=null,t=da(t),t!==null){var e=tt(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=rt(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return su=t,null}function um(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pi()){case ca:return 2;case Xi:return 8;case qa:case so:return 32;case Ha:return 268435456;default:return 32}default:return 32}}var vs=!1,ta=null,ea=null,na=null,zr=new Map,Ur=new Map,aa=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function om(t,e){switch(t){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":zr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(e.pointerId)}}function Lr(t,e,n,a,r,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&lm(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function gy(t,e,n,a,r){switch(e){case"focusin":return ta=Lr(ta,t,e,n,a,r),!0;case"dragenter":return ea=Lr(ea,t,e,n,a,r),!0;case"mouseover":return na=Lr(na,t,e,n,a,r),!0;case"pointerover":var u=r.pointerId;return zr.set(u,Lr(zr.get(u)||null,t,e,n,a,r)),!0;case"gotpointercapture":return u=r.pointerId,Ur.set(u,Lr(Ur.get(u)||null,t,e,n,a,r)),!0}return!1}function cm(t){var e=da(t.target);if(e!==null){var n=tt(e);if(n!==null){if(e=n.tag,e===13){if(e=rt(n),e!==null){t.blockedOn=e,fg(t.priority,function(){if(n.tag===13){var a=je(),r=Hn(n,a);r!==null&&be(r,n,a),ds(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ms(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);bo=a,n.target.dispatchEvent(a),bo=null}else return e=Xa(n),e!==null&&lm(e),t.blockedOn=n,!1;e.shift()}return!0}function sm(t,e,n){fu(t)&&n.delete(e)}function yy(){vs=!1,ta!==null&&fu(ta)&&(ta=null),ea!==null&&fu(ea)&&(ea=null),na!==null&&fu(na)&&(na=null),zr.forEach(sm),Ur.forEach(sm)}function du(t,e){t.blockedOn===e&&(t.blockedOn=null,vs||(vs=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yy)))}var hu=null;function fm(t){hu!==t&&(hu=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){hu===t&&(hu=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],r=t[e+2];if(typeof a!="function"){if(ps(a||n)===null)continue;break}var u=Xa(n);u!==null&&(t.splice(e,3),e-=3,rc(u,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Br(t){function e(j){return du(j,t)}ta!==null&&du(ta,t),ea!==null&&du(ea,t),na!==null&&du(na,t),zr.forEach(e),Ur.forEach(e);for(var n=0;n<aa.length;n++){var a=aa[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<aa.length&&(n=aa[0],n.blockedOn===null);)cm(n),n.blockedOn===null&&aa.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],u=n[a+1],h=r[_e]||null;if(typeof u=="function")h||fm(n);else if(h){var E=null;if(u&&u.hasAttribute("formAction")){if(r=u,h=u[_e]||null)E=h.formAction;else if(ps(r)!==null)continue}else E=h.action;typeof E=="function"?n[a+1]=E:(n.splice(a,3),a-=3),fm(n)}}}function gs(t){this._internalRoot=t}mu.prototype.render=gs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,a=je();im(n,a,t,e,null,null)},mu.prototype.unmount=gs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&vi(),im(t.current,2,null,t,null,null),kl(),e[Pa]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<aa.length&&e!==0&&e<aa[n].priority;n++);aa.splice(n,0,t),n===0&&cm(t)}};var dm=l.version;if(dm!=="19.0.0")throw Error(o(527,dm,"19.0.0"));N.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=G(e),t=t!==null?et(t):null,t=t===null?null:t.stateNode,t};var by={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:H,findFiberByHostInstance:da,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{sa=pu.inject(by),Ae=pu}catch{}}return Hr.createRoot=function(t,e){if(!m(t))throw Error(o(299));var n=!1,a="",r=M0,u=C0,h=j0,E=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(E=e.unstable_transitionCallbacks)),e=nm(t,1,!1,null,null,n,a,r,u,h,E,null),t[Pa]=e.current,ts(t.nodeType===8?t.parentNode:t),new gs(e)},Hr.hydrateRoot=function(t,e,n){if(!m(t))throw Error(o(299));var a=!1,r="",u=M0,h=C0,E=j0,j=null,L=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(j=n.unstable_transitionCallbacks),n.formState!==void 0&&(L=n.formState)),e=nm(t,1,!0,e,n??null,a,r,u,h,E,j,L),e.context=am(null),n=e.current,a=je(),r=Qn(a),r.callback=null,In(n,r,a),e.current.lanes=a,Gi(e,a),fn(e),t[Pa]=e.current,ts(t),new mu(e)},Hr.version="19.0.0",Hr}var Em;function Cy(){if(Em)return Ss.exports;Em=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Ss.exports=My(),Ss.exports}var jy=Cy();const Ry=""+new URL("icons-sprite-rdZ_UXRX.svg",import.meta.url).href,za=i=>Q.jsx("svg",{width:i.width||"120",height:i.height||"120",viewBox:i.viewBox||"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Q.jsx("use",{xlinkHref:`${Ry}#${i.iconId}`})});var ge=function(){return ge=Object.assign||function(l){for(var c,o=1,m=arguments.length;o<m;o++){c=arguments[o];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(l[p]=c[p])}return l},ge.apply(this,arguments)};function Zr(i,l,c){if(c||arguments.length===2)for(var o=0,m=l.length,p;o<m;o++)(p||!(o in l))&&(p||(p=Array.prototype.slice.call(l,0,o)),p[o]=l[o]);return i.concat(p||Array.prototype.slice.call(l))}var Pt="-ms-",Ir="-moz-",zt="-webkit-",Gp="comm",Ju="rule",Sf="decl",Ny="@import",Vp="@keyframes",zy="@layer",Qp=Math.abs,_f=String.fromCharCode,rf=Object.assign;function Uy(i,l){return ue(i,0)^45?(((l<<2^ue(i,0))<<2^ue(i,1))<<2^ue(i,2))<<2^ue(i,3):0}function Ip(i){return i.trim()}function zn(i,l){return(i=l.exec(i))?i[0]:i}function Tt(i,l,c){return i.replace(l,c)}function Lu(i,l,c){return i.indexOf(l,c)}function ue(i,l){return i.charCodeAt(l)|0}function Di(i,l,c){return i.slice(l,c)}function dn(i){return i.length}function Zp(i){return i.length}function Qr(i,l){return l.push(i),i}function Ly(i,l){return i.map(l).join("")}function Om(i,l){return i.filter(function(c){return!zn(c,l)})}var Wu=1,Mi=1,Kp=0,Ke=0,Wt=0,zi="";function Fu(i,l,c,o,m,p,T,f){return{value:i,root:l,parent:c,type:o,props:m,children:p,line:Wu,column:Mi,length:T,return:"",siblings:f}}function ra(i,l){return rf(Fu("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},l)}function Ti(i){for(;i.root;)i=ra(i.root,{children:[i]});Qr(i,i.siblings)}function By(){return Wt}function qy(){return Wt=Ke>0?ue(zi,--Ke):0,Mi--,Wt===10&&(Mi=1,Wu--),Wt}function an(){return Wt=Ke<Kp?ue(zi,Ke++):0,Mi++,Wt===10&&(Mi=1,Wu++),Wt}function Ua(){return ue(zi,Ke)}function Bu(){return Ke}function to(i,l){return Di(zi,i,l)}function lf(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hy(i){return Wu=Mi=1,Kp=dn(zi=i),Ke=0,[]}function Yy(i){return zi="",i}function Os(i){return Ip(to(Ke-1,uf(i===91?i+2:i===40?i+1:i)))}function Py(i){for(;(Wt=Ua())&&Wt<33;)an();return lf(i)>2||lf(Wt)>3?"":" "}function Xy(i,l){for(;--l&&an()&&!(Wt<48||Wt>102||Wt>57&&Wt<65||Wt>70&&Wt<97););return to(i,Bu()+(l<6&&Ua()==32&&an()==32))}function uf(i){for(;an();)switch(Wt){case i:return Ke;case 34:case 39:i!==34&&i!==39&&uf(Wt);break;case 40:i===41&&uf(i);break;case 92:an();break}return Ke}function $y(i,l){for(;an()&&i+Wt!==57;)if(i+Wt===84&&Ua()===47)break;return"/*"+to(l,Ke-1)+"*"+_f(i===47?i:an())}function Gy(i){for(;!lf(Ua());)an();return to(i,Ke)}function Vy(i){return Yy(qu("",null,null,null,[""],i=Hy(i),0,[0],i))}function qu(i,l,c,o,m,p,T,f,d){for(var s=0,g=0,w=T,S=0,b=0,_=0,A=1,C=1,B=1,R=0,y="",O=m,v=p,x=o,D=y;C;)switch(_=R,R=an()){case 40:if(_!=108&&ue(D,w-1)==58){Lu(D+=Tt(Os(R),"&","&\f"),"&\f",Qp(s?f[s-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:D+=Os(R);break;case 9:case 10:case 13:case 32:D+=Py(_);break;case 92:D+=Xy(Bu()-1,7);continue;case 47:switch(Ua()){case 42:case 47:Qr(Qy($y(an(),Bu()),l,c,d),d);break;default:D+="/"}break;case 123*A:f[s++]=dn(D)*B;case 125*A:case 59:case 0:switch(R){case 0:case 125:C=0;case 59+g:B==-1&&(D=Tt(D,/\f/g,"")),b>0&&dn(D)-w&&Qr(b>32?wm(D+";",o,c,w-1,d):wm(Tt(D," ","")+";",o,c,w-2,d),d);break;case 59:D+=";";default:if(Qr(x=Am(D,l,c,s,g,m,f,y,O=[],v=[],w,p),p),R===123)if(g===0)qu(D,l,x,x,O,p,w,f,v);else switch(S===99&&ue(D,3)===110?100:S){case 100:case 108:case 109:case 115:qu(i,x,x,o&&Qr(Am(i,x,x,0,0,m,f,y,m,O=[],w,v),v),m,v,w,f,o?O:v);break;default:qu(D,x,x,x,[""],v,0,f,v)}}s=g=b=0,A=B=1,y=D="",w=T;break;case 58:w=1+dn(D),b=_;default:if(A<1){if(R==123)--A;else if(R==125&&A++==0&&qy()==125)continue}switch(D+=_f(R),R*A){case 38:B=g>0?1:(D+="\f",-1);break;case 44:f[s++]=(dn(D)-1)*B,B=1;break;case 64:Ua()===45&&(D+=Os(an())),S=Ua(),g=w=dn(y=D+=Gy(Bu())),R++;break;case 45:_===45&&dn(D)==2&&(A=0)}}return p}function Am(i,l,c,o,m,p,T,f,d,s,g,w){for(var S=m-1,b=m===0?p:[""],_=Zp(b),A=0,C=0,B=0;A<o;++A)for(var R=0,y=Di(i,S+1,S=Qp(C=T[A])),O=i;R<_;++R)(O=Ip(C>0?b[R]+" "+y:Tt(y,/&\f/g,b[R])))&&(d[B++]=O);return Fu(i,l,c,m===0?Ju:f,d,s,g,w)}function Qy(i,l,c,o){return Fu(i,l,c,Gp,_f(By()),Di(i,2,-2),0,o)}function wm(i,l,c,o,m){return Fu(i,l,c,Sf,Di(i,0,o),Di(i,o+1,-1),o,m)}function kp(i,l,c){switch(Uy(i,l)){case 5103:return zt+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return zt+i+i;case 4789:return Ir+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return zt+i+Ir+i+Pt+i+i;case 5936:switch(ue(i,l+11)){case 114:return zt+i+Pt+Tt(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return zt+i+Pt+Tt(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return zt+i+Pt+Tt(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return zt+i+Pt+i+i;case 6165:return zt+i+Pt+"flex-"+i+i;case 5187:return zt+i+Tt(i,/(\w+).+(:[^]+)/,zt+"box-$1$2"+Pt+"flex-$1$2")+i;case 5443:return zt+i+Pt+"flex-item-"+Tt(i,/flex-|-self/g,"")+(zn(i,/flex-|baseline/)?"":Pt+"grid-row-"+Tt(i,/flex-|-self/g,""))+i;case 4675:return zt+i+Pt+"flex-line-pack"+Tt(i,/align-content|flex-|-self/g,"")+i;case 5548:return zt+i+Pt+Tt(i,"shrink","negative")+i;case 5292:return zt+i+Pt+Tt(i,"basis","preferred-size")+i;case 6060:return zt+"box-"+Tt(i,"-grow","")+zt+i+Pt+Tt(i,"grow","positive")+i;case 4554:return zt+Tt(i,/([^-])(transform)/g,"$1"+zt+"$2")+i;case 6187:return Tt(Tt(Tt(i,/(zoom-|grab)/,zt+"$1"),/(image-set)/,zt+"$1"),i,"")+i;case 5495:case 3959:return Tt(i,/(image-set\([^]*)/,zt+"$1$`$1");case 4968:return Tt(Tt(i,/(.+:)(flex-)?(.*)/,zt+"box-pack:$3"+Pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+zt+i+i;case 4200:if(!zn(i,/flex-|baseline/))return Pt+"grid-column-align"+Di(i,l)+i;break;case 2592:case 3360:return Pt+Tt(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(o,m){return l=m,zn(o.props,/grid-\w+-end/)})?~Lu(i+(c=c[l].value),"span",0)?i:Pt+Tt(i,"-start","")+i+Pt+"grid-row-span:"+(~Lu(c,"span",0)?zn(c,/\d+/):+zn(c,/\d+/)-+zn(i,/\d+/))+";":Pt+Tt(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(o){return zn(o.props,/grid-\w+-start/)})?i:Pt+Tt(Tt(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return Tt(i,/(.+)-inline(.+)/,zt+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(i)-1-l>6)switch(ue(i,l+1)){case 109:if(ue(i,l+4)!==45)break;case 102:return Tt(i,/(.+:)(.+)-([^]+)/,"$1"+zt+"$2-$3$1"+Ir+(ue(i,l+3)==108?"$3":"$2-$3"))+i;case 115:return~Lu(i,"stretch",0)?kp(Tt(i,"stretch","fill-available"),l,c)+i:i}break;case 5152:case 5920:return Tt(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,m,p,T,f,d,s){return Pt+m+":"+p+s+(T?Pt+m+"-span:"+(f?d:+d-+p)+s:"")+i});case 4949:if(ue(i,l+6)===121)return Tt(i,":",":"+zt)+i;break;case 6444:switch(ue(i,ue(i,14)===45?18:11)){case 120:return Tt(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+zt+(ue(i,14)===45?"inline-":"")+"box$3$1"+zt+"$2$3$1"+Pt+"$2box$3")+i;case 100:return Tt(i,":",":"+Pt)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Tt(i,"scroll-","scroll-snap-")+i}return i}function Vu(i,l){for(var c="",o=0;o<i.length;o++)c+=l(i[o],o,i,l)||"";return c}function Iy(i,l,c,o){switch(i.type){case zy:if(i.children.length)break;case Ny:case Sf:return i.return=i.return||i.value;case Gp:return"";case Vp:return i.return=i.value+"{"+Vu(i.children,o)+"}";case Ju:if(!dn(i.value=i.props.join(",")))return""}return dn(c=Vu(i.children,o))?i.return=i.value+"{"+c+"}":""}function Zy(i){var l=Zp(i);return function(c,o,m,p){for(var T="",f=0;f<l;f++)T+=i[f](c,o,m,p)||"";return T}}function Ky(i){return function(l){l.root||(l=l.return)&&i(l)}}function ky(i,l,c,o){if(i.length>-1&&!i.return)switch(i.type){case Sf:i.return=kp(i.value,i.length,c);return;case Vp:return Vu([ra(i,{value:Tt(i.value,"@","@"+zt)})],o);case Ju:if(i.length)return Ly(c=i.props,function(m){switch(zn(m,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ti(ra(i,{props:[Tt(m,/:(read-\w+)/,":"+Ir+"$1")]})),Ti(ra(i,{props:[m]})),rf(i,{props:Om(c,o)});break;case"::placeholder":Ti(ra(i,{props:[Tt(m,/:(plac\w+)/,":"+zt+"input-$1")]})),Ti(ra(i,{props:[Tt(m,/:(plac\w+)/,":"+Ir+"$1")]})),Ti(ra(i,{props:[Tt(m,/:(plac\w+)/,Pt+"input-$1")]})),Ti(ra(i,{props:[m]})),rf(i,{props:Om(c,o)});break}return""})}}var Jy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Re={},Ci=typeof process<"u"&&Re!==void 0&&(Re.REACT_APP_SC_ATTR||Re.SC_ATTR)||"data-styled",Jp="active",Wp="data-styled-version",eo="6.1.15",Tf=`/*!sc*/
`,Qu=typeof window<"u"&&"HTMLElement"in window,Wy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Re!==void 0&&Re.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Re.REACT_APP_SC_DISABLE_SPEEDY!==""?Re.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Re.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Re!==void 0&&Re.SC_DISABLE_SPEEDY!==void 0&&Re.SC_DISABLE_SPEEDY!==""&&Re.SC_DISABLE_SPEEDY!=="false"&&Re.SC_DISABLE_SPEEDY),Fy={},no=Object.freeze([]),ji=Object.freeze({});function Fp(i,l,c){return c===void 0&&(c=ji),i.theme!==c.theme&&i.theme||l||c.theme}var tv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eb=/(^-|-$)/g;function xm(i){return i.replace(tb,"-").replace(eb,"")}var nb=/(a)(d)/gi,vu=52,Dm=function(i){return String.fromCharCode(i+(i>25?39:97))};function of(i){var l,c="";for(l=Math.abs(i);l>vu;l=l/vu|0)c=Dm(l%vu)+c;return(Dm(l%vu)+c).replace(nb,"$1-$2")}var As,ev=5381,wi=function(i,l){for(var c=l.length;c;)i=33*i^l.charCodeAt(--c);return i},nv=function(i){return wi(ev,i)};function av(i){return of(nv(i)>>>0)}function ab(i){return i.displayName||i.name||"Component"}function ws(i){return typeof i=="string"&&!0}var iv=typeof Symbol=="function"&&Symbol.for,rv=iv?Symbol.for("react.memo"):60115,ib=iv?Symbol.for("react.forward_ref"):60112,rb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ub=((As={})[ib]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},As[rv]=lv,As);function Mm(i){return("type"in(l=i)&&l.type.$$typeof)===rv?lv:"$$typeof"in i?ub[i.$$typeof]:rb;var l}var ob=Object.defineProperty,cb=Object.getOwnPropertyNames,Cm=Object.getOwnPropertySymbols,sb=Object.getOwnPropertyDescriptor,fb=Object.getPrototypeOf,jm=Object.prototype;function uv(i,l,c){if(typeof l!="string"){if(jm){var o=fb(l);o&&o!==jm&&uv(i,o,c)}var m=cb(l);Cm&&(m=m.concat(Cm(l)));for(var p=Mm(i),T=Mm(l),f=0;f<m.length;++f){var d=m[f];if(!(d in lb||c&&c[d]||T&&d in T||p&&d in p)){var s=sb(l,d);try{ob(i,d,s)}catch{}}}}return i}function Ri(i){return typeof i=="function"}function Ef(i){return typeof i=="object"&&"styledComponentId"in i}function Na(i,l){return i&&l?"".concat(i," ").concat(l):i||l||""}function cf(i,l){if(i.length===0)return"";for(var c=i[0],o=1;o<i.length;o++)c+=i[o];return c}function Kr(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function sf(i,l,c){if(c===void 0&&(c=!1),!c&&!Kr(i)&&!Array.isArray(i))return l;if(Array.isArray(l))for(var o=0;o<l.length;o++)i[o]=sf(i[o],l[o]);else if(Kr(l))for(var o in l)i[o]=sf(i[o],l[o]);return i}function Of(i,l){Object.defineProperty(i,"toString",{value:l})}function el(i){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var db=function(){function i(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return i.prototype.indexOfGroup=function(l){for(var c=0,o=0;o<l;o++)c+=this.groupSizes[o];return c},i.prototype.insertRules=function(l,c){if(l>=this.groupSizes.length){for(var o=this.groupSizes,m=o.length,p=m;l>=p;)if((p<<=1)<0)throw el(16,"".concat(l));this.groupSizes=new Uint32Array(p),this.groupSizes.set(o),this.length=p;for(var T=m;T<p;T++)this.groupSizes[T]=0}for(var f=this.indexOfGroup(l+1),d=(T=0,c.length);T<d;T++)this.tag.insertRule(f,c[T])&&(this.groupSizes[l]++,f++)},i.prototype.clearGroup=function(l){if(l<this.length){var c=this.groupSizes[l],o=this.indexOfGroup(l),m=o+c;this.groupSizes[l]=0;for(var p=o;p<m;p++)this.tag.deleteRule(o)}},i.prototype.getGroup=function(l){var c="";if(l>=this.length||this.groupSizes[l]===0)return c;for(var o=this.groupSizes[l],m=this.indexOfGroup(l),p=m+o,T=m;T<p;T++)c+="".concat(this.tag.getRule(T)).concat(Tf);return c},i}(),Hu=new Map,Iu=new Map,Yu=1,gu=function(i){if(Hu.has(i))return Hu.get(i);for(;Iu.has(Yu);)Yu++;var l=Yu++;return Hu.set(i,l),Iu.set(l,i),l},hb=function(i,l){Yu=l+1,Hu.set(i,l),Iu.set(l,i)},mb="style[".concat(Ci,"][").concat(Wp,'="').concat(eo,'"]'),pb=new RegExp("^".concat(Ci,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vb=function(i,l,c){for(var o,m=c.split(","),p=0,T=m.length;p<T;p++)(o=m[p])&&i.registerName(l,o)},gb=function(i,l){for(var c,o=((c=l.textContent)!==null&&c!==void 0?c:"").split(Tf),m=[],p=0,T=o.length;p<T;p++){var f=o[p].trim();if(f){var d=f.match(pb);if(d){var s=0|parseInt(d[1],10),g=d[2];s!==0&&(hb(g,s),vb(i,g,d[3]),i.getTag().insertRules(s,m)),m.length=0}else m.push(f)}}},Rm=function(i){for(var l=document.querySelectorAll(mb),c=0,o=l.length;c<o;c++){var m=l[c];m&&m.getAttribute(Ci)!==Jp&&(gb(i,m),m.parentNode&&m.parentNode.removeChild(m))}};function yb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ov=function(i){var l=document.head,c=i||l,o=document.createElement("style"),m=function(f){var d=Array.from(f.querySelectorAll("style[".concat(Ci,"]")));return d[d.length-1]}(c),p=m!==void 0?m.nextSibling:null;o.setAttribute(Ci,Jp),o.setAttribute(Wp,eo);var T=yb();return T&&o.setAttribute("nonce",T),c.insertBefore(o,p),o},bb=function(){function i(l){this.element=ov(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var o=document.styleSheets,m=0,p=o.length;m<p;m++){var T=o[m];if(T.ownerNode===c)return T}throw el(17)}(this.element),this.length=0}return i.prototype.insertRule=function(l,c){try{return this.sheet.insertRule(c,l),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},i.prototype.getRule=function(l){var c=this.sheet.cssRules[l];return c&&c.cssText?c.cssText:""},i}(),Sb=function(){function i(l){this.element=ov(l),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(l,c){if(l<=this.length&&l>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[l]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},i.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},i}(),_b=function(){function i(l){this.rules=[],this.length=0}return i.prototype.insertRule=function(l,c){return l<=this.length&&(this.rules.splice(l,0,c),this.length++,!0)},i.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},i.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},i}(),Nm=Qu,Tb={isServer:!Qu,useCSSOMInjection:!Wy},Zu=function(){function i(l,c,o){l===void 0&&(l=ji),c===void 0&&(c={});var m=this;this.options=ge(ge({},Tb),l),this.gs=c,this.names=new Map(o),this.server=!!l.isServer,!this.server&&Qu&&Nm&&(Nm=!1,Rm(this)),Of(this,function(){return function(p){for(var T=p.getTag(),f=T.length,d="",s=function(w){var S=function(B){return Iu.get(B)}(w);if(S===void 0)return"continue";var b=p.names.get(S),_=T.getGroup(w);if(b===void 0||!b.size||_.length===0)return"continue";var A="".concat(Ci,".g").concat(w,'[id="').concat(S,'"]'),C="";b!==void 0&&b.forEach(function(B){B.length>0&&(C+="".concat(B,","))}),d+="".concat(_).concat(A,'{content:"').concat(C,'"}').concat(Tf)},g=0;g<f;g++)s(g);return d}(m)})}return i.registerId=function(l){return gu(l)},i.prototype.rehydrate=function(){!this.server&&Qu&&Rm(this)},i.prototype.reconstructWithOptions=function(l,c){return c===void 0&&(c=!0),new i(ge(ge({},this.options),l),this.gs,c&&this.names||void 0)},i.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(l=function(c){var o=c.useCSSOMInjection,m=c.target;return c.isServer?new _b(m):o?new bb(m):new Sb(m)}(this.options),new db(l)));var l},i.prototype.hasNameForId=function(l,c){return this.names.has(l)&&this.names.get(l).has(c)},i.prototype.registerName=function(l,c){if(gu(l),this.names.has(l))this.names.get(l).add(c);else{var o=new Set;o.add(c),this.names.set(l,o)}},i.prototype.insertRules=function(l,c,o){this.registerName(l,c),this.getTag().insertRules(gu(l),o)},i.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},i.prototype.clearRules=function(l){this.getTag().clearGroup(gu(l)),this.clearNames(l)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Eb=/&/g,Ob=/^\s*\/\/.*$/gm;function cv(i,l){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(l," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(l," ")),c.props=c.props.map(function(o){return"".concat(l," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=cv(c.children,l)),c})}function Ab(i){var l,c,o,m=ji,p=m.options,T=p===void 0?ji:p,f=m.plugins,d=f===void 0?no:f,s=function(S,b,_){return _.startsWith(c)&&_.endsWith(c)&&_.replaceAll(c,"").length>0?".".concat(l):S},g=d.slice();g.push(function(S){S.type===Ju&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(Eb,c).replace(o,s))}),T.prefix&&g.push(ky),g.push(Iy);var w=function(S,b,_,A){b===void 0&&(b=""),_===void 0&&(_=""),A===void 0&&(A="&"),l=A,c=b,o=new RegExp("\\".concat(c,"\\b"),"g");var C=S.replace(Ob,""),B=Vy(_||b?"".concat(_," ").concat(b," { ").concat(C," }"):C);T.namespace&&(B=cv(B,T.namespace));var R=[];return Vu(B,Zy(g.concat(Ky(function(y){return R.push(y)})))),R};return w.hash=d.length?d.reduce(function(S,b){return b.name||el(15),wi(S,b.name)},ev).toString():"",w}var wb=new Zu,ff=Ab(),sv=nn.createContext({shouldForwardProp:void 0,styleSheet:wb,stylis:ff});sv.Consumer;nn.createContext(void 0);function df(){return yt.useContext(sv)}var xb=function(){function i(l,c){var o=this;this.inject=function(m,p){p===void 0&&(p=ff);var T=o.name+p.hash;m.hasNameForId(o.id,T)||m.insertRules(o.id,T,p(o.rules,T,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=c,Of(this,function(){throw el(12,String(o.name))})}return i.prototype.getName=function(l){return l===void 0&&(l=ff),this.name+l.hash},i}(),Db=function(i){return i>="A"&&i<="Z"};function zm(i){for(var l="",c=0;c<i.length;c++){var o=i[c];if(c===1&&o==="-"&&i[0]==="-")return i;Db(o)?l+="-"+o.toLowerCase():l+=o}return l.startsWith("ms-")?"-"+l:l}var fv=function(i){return i==null||i===!1||i===""},dv=function(i){var l,c,o=[];for(var m in i){var p=i[m];i.hasOwnProperty(m)&&!fv(p)&&(Array.isArray(p)&&p.isCss||Ri(p)?o.push("".concat(zm(m),":"),p,";"):Kr(p)?o.push.apply(o,Zr(Zr(["".concat(m," {")],dv(p),!1),["}"],!1)):o.push("".concat(zm(m),": ").concat((l=m,(c=p)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||l in Jy||l.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return o};function la(i,l,c,o){if(fv(i))return[];if(Ef(i))return[".".concat(i.styledComponentId)];if(Ri(i)){if(!Ri(p=i)||p.prototype&&p.prototype.isReactComponent||!l)return[i];var m=i(l);return la(m,l,c,o)}var p;return i instanceof xb?c?(i.inject(c,o),[i.getName(o)]):[i]:Kr(i)?dv(i):Array.isArray(i)?Array.prototype.concat.apply(no,i.map(function(T){return la(T,l,c,o)})):[i.toString()]}function hv(i){for(var l=0;l<i.length;l+=1){var c=i[l];if(Ri(c)&&!Ef(c))return!1}return!0}var Mb=nv(eo),Cb=function(){function i(l,c,o){this.rules=l,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&hv(l),this.componentId=c,this.baseHash=wi(Mb,c),this.baseStyle=o,Zu.registerId(c)}return i.prototype.generateAndInjectStyles=function(l,c,o){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,c,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))m=Na(m,this.staticRulesId);else{var p=cf(la(this.rules,l,c,o)),T=of(wi(this.baseHash,p)>>>0);if(!c.hasNameForId(this.componentId,T)){var f=o(p,".".concat(T),void 0,this.componentId);c.insertRules(this.componentId,T,f)}m=Na(m,T),this.staticRulesId=T}else{for(var d=wi(this.baseHash,o.hash),s="",g=0;g<this.rules.length;g++){var w=this.rules[g];if(typeof w=="string")s+=w;else if(w){var S=cf(la(w,l,c,o));d=wi(d,S+g),s+=S}}if(s){var b=of(d>>>0);c.hasNameForId(this.componentId,b)||c.insertRules(this.componentId,b,o(s,".".concat(b),void 0,this.componentId)),m=Na(m,b)}}return m},i}(),Af=nn.createContext(void 0);Af.Consumer;var xs={};function jb(i,l,c){var o=Ef(i),m=i,p=!ws(i),T=l.attrs,f=T===void 0?no:T,d=l.componentId,s=d===void 0?function(O,v){var x=typeof O!="string"?"sc":xm(O);xs[x]=(xs[x]||0)+1;var D="".concat(x,"-").concat(av(eo+x+xs[x]));return v?"".concat(v,"-").concat(D):D}(l.displayName,l.parentComponentId):d,g=l.displayName,w=g===void 0?function(O){return ws(O)?"styled.".concat(O):"Styled(".concat(ab(O),")")}(i):g,S=l.displayName&&l.componentId?"".concat(xm(l.displayName),"-").concat(l.componentId):l.componentId||s,b=o&&m.attrs?m.attrs.concat(f).filter(Boolean):f,_=l.shouldForwardProp;if(o&&m.shouldForwardProp){var A=m.shouldForwardProp;if(l.shouldForwardProp){var C=l.shouldForwardProp;_=function(O,v){return A(O,v)&&C(O,v)}}else _=A}var B=new Cb(c,S,o?m.componentStyle:void 0);function R(O,v){return function(x,D,P){var H=x.attrs,K=x.componentStyle,V=x.defaultProps,z=x.foldedComponentIds,I=x.styledComponentId,W=x.target,F=nn.useContext(Af),Y=df(),at=x.shouldForwardProp||Y.shouldForwardProp,tt=Fp(D,F,V)||ji,rt=function(St,it,pt){for(var dt,vt=ge(ge({},it),{className:void 0,theme:pt}),ht=0;ht<St.length;ht+=1){var Ut=Ri(dt=St[ht])?dt(vt):dt;for(var It in Ut)vt[It]=It==="className"?Na(vt[It],Ut[It]):It==="style"?ge(ge({},vt[It]),Ut[It]):Ut[It]}return it.className&&(vt.className=Na(vt.className,it.className)),vt}(H,D,tt),M=rt.as||W,G={};for(var et in rt)rt[et]===void 0||et[0]==="$"||et==="as"||et==="theme"&&rt.theme===tt||(et==="forwardedAs"?G.as=rt.forwardedAs:at&&!at(et,M)||(G[et]=rt[et]));var ut=function(St,it){var pt=df(),dt=St.generateAndInjectStyles(it,pt.styleSheet,pt.stylis);return dt}(K,rt),N=Na(z,I);return ut&&(N+=" "+ut),rt.className&&(N+=" "+rt.className),G[ws(M)&&!tv.has(M)?"class":"className"]=N,P&&(G.ref=P),yt.createElement(M,G)}(y,O,v)}R.displayName=w;var y=nn.forwardRef(R);return y.attrs=b,y.componentStyle=B,y.displayName=w,y.shouldForwardProp=_,y.foldedComponentIds=o?Na(m.foldedComponentIds,m.styledComponentId):"",y.styledComponentId=S,y.target=o?m.target:i,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=o?function(v){for(var x=[],D=1;D<arguments.length;D++)x[D-1]=arguments[D];for(var P=0,H=x;P<H.length;P++)sf(v,H[P],!0);return v}({},m.defaultProps,O):O}}),Of(y,function(){return".".concat(y.styledComponentId)}),p&&uv(y,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Um(i,l){for(var c=[i[0]],o=0,m=l.length;o<m;o+=1)c.push(l[o],i[o+1]);return c}var Lm=function(i){return Object.assign(i,{isCss:!0})};function pn(i){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];if(Ri(i)||Kr(i))return Lm(la(Um(no,Zr([i],l,!0))));var o=i;return l.length===0&&o.length===1&&typeof o[0]=="string"?la(o):Lm(la(Um(o,l)))}function hf(i,l,c){if(c===void 0&&(c=ji),!l)throw el(1,l);var o=function(m){for(var p=[],T=1;T<arguments.length;T++)p[T-1]=arguments[T];return i(l,c,pn.apply(void 0,Zr([m],p,!1)))};return o.attrs=function(m){return hf(i,l,ge(ge({},c),{attrs:Array.prototype.concat(c.attrs,m).filter(Boolean)}))},o.withConfig=function(m){return hf(i,l,ge(ge({},c),m))},o}var mv=function(i){return hf(jb,i)},bt=mv;tv.forEach(function(i){bt[i]=mv(i)});var Rb=function(){function i(l,c){this.rules=l,this.componentId=c,this.isStatic=hv(l),Zu.registerId(this.componentId+1)}return i.prototype.createStyles=function(l,c,o,m){var p=m(cf(la(this.rules,c,o,m)),""),T=this.componentId+l;o.insertRules(T,T,p)},i.prototype.removeStyles=function(l,c){c.clearRules(this.componentId+l)},i.prototype.renderStyles=function(l,c,o,m){l>2&&Zu.registerId(this.componentId+l),this.removeStyles(l,o),this.createStyles(l,c,o,m)},i}();function Nb(i){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];var o=pn.apply(void 0,Zr([i],l,!1)),m="sc-global-".concat(av(JSON.stringify(o))),p=new Rb(o,m),T=function(d){var s=df(),g=nn.useContext(Af),w=nn.useRef(s.styleSheet.allocateGSInstance(m)).current;return s.styleSheet.server&&f(w,d,s.styleSheet,g,s.stylis),nn.useLayoutEffect(function(){if(!s.styleSheet.server)return f(w,d,s.styleSheet,g,s.stylis),function(){return p.removeStyles(w,s.styleSheet)}},[w,d,s.styleSheet,g,s.stylis]),null};function f(d,s,g,w,S){if(p.isStatic)p.renderStyles(d,Fy,g,S);else{var b=ge(ge({},s),{theme:Fp(s,w,T.defaultProps)});p.renderStyles(d,b,g,S)}}return nn.memo(T)}const ft={colors:{primaryBg:"#F9FAFF",secondaryBg:"#FFFFFF",accent:"#FDC435",primaryFont:"#25282B",secondaryFont:"#828282",borderColor:"#E8ECF4"},media:{desktopXl:"screen and (max-width: 1200px)",desktopLg:"screen and (max-width: 992px)",tablet:"screen and (max-width: 768px)",mobile:"screen and (max-width: 576px)"}},zb=bt.a`
    @media ${ft.media.mobile} {
        svg {
            width: 35px;
            height: 35px;
        }
    }
`,Ub={StyledLogo:zb},Lb=()=>Q.jsx(Ub.StyledLogo,{href:"#about",children:Q.jsx(za,{iconId:"logo",viewBox:"0 -2 50 50",height:"50",width:"50"})}),Bb=bt.ul`
    font-family: "Raleway", sans-serif;
    display: flex;
    gap: 48px;
    font-weight: 500;
    line-height: 1.5;

    font-size: 18px;
    color: ${ft.colors.primaryFont};
`,pv=bt.a`
    // background-image: linear-gradient(
    //         to right,
    //         ${ft.colors.accent},
    //         ${ft.colors.accent} 50%,
    //         #000 50%
    // );
    // background-size: 200% 100%;
    // background-position: -100%;
    // display: inline-block;
    // padding: 5px 0;
    // position: relative;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // transition: all 0.25s ease-in-out;
    //
    // &::before {
    //     content: '';
    //     background-color: ${ft.colors.secondaryFont};
    //     display: block;
    //     position: absolute;
    //     bottom: -2px;
    //     left: 0;
    //     width: 0;
    //     height: 3px;
    //     transition: all 0.25s ease-in-out;
    // }
    //
    // &:hover, &.active {
    //     background-position: 0;
    // }
    //
    // &:hover::before, &.active::before {
    //     width: 100%;
    // }

    
        
        position: relative;
        text-decoration: none;
    

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: ${ft.colors.primaryFont};
        bottom: -4px;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .25s ease-in-out;
    }

    &:hover::before, &.active::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`,qb=bt.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(#FDC435, #25282B);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    transition: 0.75s ease;
    
    
    ${i=>i.$isOpen&&pn`
        transform: translateY(0);
    `}
    
    ul {
        font-size: 34px;
        color: ${ft.colors.primaryBg};

        flex-direction: column;
        align-items: center;

        @media ${ft.media.mobile} {
            font-size: 28px;
        }
        li {
            ${pv} {
                &::before {
                    background-color: ${ft.colors.primaryBg};
                }
            }
        }
    }

`,Hb=bt.div`
    width: 30px;
    height: 30px;
    position: fixed;
    top: 16px;
    right: 30px;
    cursor: pointer;
    z-index: 30;

    span {
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 3px;
        background-color: #000;

        position: absolute;
        top: 12px;
        z-index: 30;

        transition: all 0.3s ease;

        &::before, &::after {
            display: block;
            content: '';
            width: 100%;
            height: 2px;
            border-radius: 3px;
            background-color: #000;
            position: absolute;
            z-index: 30;
            transition: all 0.3s ease;
        }

        &::before {
            transform: translateY(8px);

            ${i=>i.$isOpen&&pn`
                transform: rotate(45deg) translateY(0);
                background-color: ${ft.colors.primaryBg}
            `}
        }

        &::after {
            transform: translateY(-8px);

            ${i=>i.$isOpen&&pn`
                transform: rotate(-45deg) translateY(0);
                background-color: ${ft.colors.primaryBg}
            `}
        }
    }

    ${i=>i.$isOpen&&pn`
        span {
            background-color: rgba(0, 0, 0, 0);
        }
    `}

    @media ${ft.media.mobile} {
        width: 20px;
        height: 20px;
        right: 15px;

        span {
            &::before {
                transform: translateY(5px);

                ${i=>i.$isOpen&&pn`
                transform: rotate(45deg) translateY(0);
            `}
            }

            &::after {
                transform: translateY(-5px);

                ${i=>i.$isOpen&&pn`
                transform: rotate(-45deg) translateY(0);
            `}
            }
        }
    }

`,Ku={MenuList:Bb,NavLink:pv,MobileMenuPopup:qb,BurgerButton:Hb},vv=()=>{const i=["About","Skills","Projects","Testimony","Contacts"],[l,c]=yt.useState(0),o=p=>{c(p)},m=()=>{const p=window.scrollY,T=i.map(d=>{const s=document.getElementById(d.toLowerCase());return s?s.offsetTop:0}),f=T.findIndex((d,s)=>p>=d&&(s===T.length-1||p<T[s+1]));c(f)};return yt.useEffect(()=>(window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}),[]),Q.jsx(Ku.MenuList,{children:i.map((p,T)=>Q.jsx("li",{onClick:()=>o(T),children:Q.jsx(Ku.NavLink,{href:`#${p.toLowerCase()}`,className:l===T?"active":"",children:p})},T))})},Yb=()=>Q.jsx("nav",{children:Q.jsx(vv,{})}),nl=bt.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 120px;
    min-height: 100%;
    
    @media screen and (max-width: 1199px) {
        padding: 0 90px;
    }
    @media screen and (max-width: 991px) {
        padding: 0 60px;
    }
    @media screen and (max-width: 767px) {
        padding: 0 30px;
    }
    @media screen and (max-width: 575px) {
        padding: 0 15px;
    }
`,ao=bt.div`
    display: flex;
    flex-direction: ${i=>i.$direction||"row"};
    justify-content: ${i=>i.$justify||"start"};
    align-items: ${i=>i.$align||"stretch"};
    flex-wrap: ${i=>i.$wrap||"nowrap"};
    gap: ${i=>i.$gap||"0"};;
`,Pb=()=>{const[i,l]=yt.useState(!1);function c(){l(!i)}return Q.jsxs("nav",{children:[Q.jsx(Ku.BurgerButton,{$isOpen:i,onClick:c,"aria-haspopup":!0,children:Q.jsx("span",{})}),Q.jsx(Ku.MobileMenuPopup,{$isOpen:i,"aria-modal":!0,onClick:()=>{l(!1)},children:Q.jsx(vv,{})})]})},Xb=bt.header`
    ${ao} {
        padding: 12px 0;
    }
    
    position: sticky;
    top: 0;
    z-index: 10;

    ${i=>i.$isPageScrolled&&pn`
        background-color: rgba(255, 255, 255, 0.75)
    `}
`,$b={Header:Xb},Gb=()=>{const[i,l]=yt.useState(window.scrollY),c=()=>{l(window.scrollY)};yt.useEffect(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)),[]);const[o,m]=yt.useState(window.innerWidth),p=768;return yt.useEffect(()=>{const T=()=>m(window.innerWidth);return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]),Q.jsx($b.Header,{$isPageScrolled:i>0,children:Q.jsx(nl,{children:Q.jsxs(ao,{$justify:"space-between",$align:"center",children:[Q.jsx(Lb,{}),o>p?Q.jsx(Yb,{}):Q.jsx(Pb,{})]})})})},kr=bt.a`
    border-radius: 8px;
    background-color: ${ft.colors.accent};
    padding: 8px 24px;
    height: 43px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    
    &:hover {
        opacity: 0.8;
    }
    
    ${i=>i.$outlined&&pn`
        border: 2px solid ${ft.colors.primaryFont};
        background-color: transparent;
        padding-top: 6px;
    `}
    
`,Bm=""+new URL("photoMy-AgdFpN68.webp",import.meta.url).href,Vb=bt.div`
    width: 50%;
    transform: translate(8%, -28%);

    @media ${ft.media.desktopLg} {
        width: 60%;
    }

    @media ${ft.media.desktopLg} {
        width: 60%;
        align-self: flex-end;
    }

    @media ${ft.media.tablet} {
        width: 75%;
        transform: translate(0, 0);
    }

    @media ${ft.media.mobile} {
        width: 100%;
        
    }
`,qm={PhotoWrapper:Vb},Qb=()=>{const[i,l]=yt.useState(window.innerWidth),c=768;return nn.useEffect(()=>{const o=()=>l(window.innerWidth);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),Q.jsx(Q.Fragment,{children:i>c?Q.jsx(qm.PhotoWrapper,{children:Q.jsxs("svg",{viewBox:"0 0 777 877",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Q.jsx("path",{d:"M426.75 0.66C526.01 5.37 630.41 42.26 691.01 119.05C747.05 190.06 709.4 290.88 725.4 379.11C738.27 450.04 786.3 512.96 775.4 584.2C763.33 663.13 724.84 738.45 662.53 790.18C597.27 844.36 510.83 889.89 426.75 873.67C345.26 857.94 319.87 754.82 250.24 710.63C174.06 662.28 41.25 688.78 6.43 606.91C-27.69 526.71 83.95 456.25 106.3 372.2C131.06 279.1 79.6 166.63 143.09 93.02C208.86 16.76 324.68 -4.19 426.75 0.66Z",fill:"#FDC435"}),Q.jsx("pattern",{id:"pattern",width:"100%",height:"100%",patternTransform:"translate(200 360)",children:Q.jsx("image",{width:"60%",height:"60%",xlinkHref:Bm,preserveAspectRatio:"xMidYMid meet"})}),Q.jsx("path",{d:"M426.75 0.66C526.01 5.37 630.41 42.26 691.01 119.05C747.05 190.06 709.4 290.88 725.4 379.11C738.27 450.04 786.3 512.96 775.4 584.2C763.33 663.13 724.84 738.45 662.53 790.18C597.27 844.36 510.83 889.89 426.75 873.67C345.26 857.94 319.87 754.82 250.24 710.63C174.06 662.28 41.25 688.78 6.43 606.91C-27.69 526.71 83.95 456.25 106.3 372.2C131.06 279.1 79.6 166.63 143.09 93.02C208.86 16.76 324.68 -4.19 426.75 0.66Z",fill:"url(#pattern)"})]})}):Q.jsx(qm.PhotoWrapper,{children:Q.jsxs("svg",{viewBox:"0 0 720 629",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Q.jsx("path",{d:"M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z",fill:"#FDC435"}),Q.jsx("pattern",{id:"pattern",width:"100%",height:"100%",patternTransform:"translate(200 360)",children:Q.jsx("image",{width:"85%",height:"85%",xlinkHref:Bm,preserveAspectRatio:"xMidYMid meet"})}),Q.jsx("path",{d:"M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z",fill:"url(#pattern)"})]})})})},Ib=bt.section`
    margin: -80px auto 0;
    max-width: 1440px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-top: 0;
    
    @media ${ft.media.desktopLg} {
        flex-direction: column-reverse;
        justify-content: flex-end;
    }
`,Zb=bt.div`
    width: 50%;
    margin-top: 135px;
    padding: 0 92px 0 120px;

    @media ${ft.media.desktopXl} {
        padding-left: 90px;
        padding-right: 0;
    }

    @media ${ft.media.desktopLg} {
        padding: 0 60px;
        margin-top: -20%;
        width: 100%;
    }

    @media ${ft.media.tablet} {
        padding: 0 30px;
        margin-top: 20px;
    }

    @media ${ft.media.mobile} {
        padding: 0 15px;
    }
`,Kb=bt.h1`
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${ft.colors.accent};

    @media ${ft.media.desktopXl} {
        width: 100%;
        margin-top: 0;
    }
    
    p {
        display: none;
    }
`,kb=bt.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: calc((100vw - 375px) / (1440 - 375) * (63 - 42) + 42px);
    line-height: 1.2;
`,Jb=bt.p`
    margin-top: 32px;
    font-size: 24px;
    padding-right: 22px;

    @media ${ft.media.desktopLg} {
        padding-right: 0;
    }
`,Wb=bt.div`
    display: flex;
    margin-top: 32px;

    a + a {
        margin-left: 12px;
    }
`,Ei={StyledMain:Ib,ContentWrapper:Zb,Title:Kb,Name:kb,Description:Jb,ButtonsWrapper:Wb};var Pu={exports:{}},Fb=Pu.exports,Hm;function tS(){return Hm||(Hm=1,function(i,l){(function(c,o){i.exports=o(rn())})(typeof self<"u"?self:Fb,c=>(()=>{var o={7403:(f,d,s)=>{s.d(d,{default:()=>tt});var g=s(4087),w=s.n(g);const S=function(rt){return new RegExp(/<[a-z][\s\S]*>/i).test(rt)},b=function(rt,M){return Math.floor(Math.random()*(M-rt+1))+rt};var _="TYPE_CHARACTER",A="REMOVE_CHARACTER",C="REMOVE_ALL",B="REMOVE_LAST_VISIBLE_NODE",R="PAUSE_FOR",y="CALL_FUNCTION",O="ADD_HTML_TAG_ELEMENT",v="CHANGE_DELETE_SPEED",x="CHANGE_DELAY",D="CHANGE_CURSOR",P="PASTE_STRING",H="HTML_TAG";function K(rt){return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},K(rt)}function V(rt,M){var G=Object.keys(rt);if(Object.getOwnPropertySymbols){var et=Object.getOwnPropertySymbols(rt);M&&(et=et.filter(function(ut){return Object.getOwnPropertyDescriptor(rt,ut).enumerable})),G.push.apply(G,et)}return G}function z(rt){for(var M=1;M<arguments.length;M++){var G=arguments[M]!=null?arguments[M]:{};M%2?V(Object(G),!0).forEach(function(et){Y(rt,et,G[et])}):Object.getOwnPropertyDescriptors?Object.defineProperties(rt,Object.getOwnPropertyDescriptors(G)):V(Object(G)).forEach(function(et){Object.defineProperty(rt,et,Object.getOwnPropertyDescriptor(G,et))})}return rt}function I(rt){return function(M){if(Array.isArray(M))return W(M)}(rt)||function(M){if(typeof Symbol<"u"&&M[Symbol.iterator]!=null||M["@@iterator"]!=null)return Array.from(M)}(rt)||function(M,G){if(M){if(typeof M=="string")return W(M,G);var et=Object.prototype.toString.call(M).slice(8,-1);return et==="Object"&&M.constructor&&(et=M.constructor.name),et==="Map"||et==="Set"?Array.from(M):et==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(et)?W(M,G):void 0}}(rt)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function W(rt,M){(M==null||M>rt.length)&&(M=rt.length);for(var G=0,et=new Array(M);G<M;G++)et[G]=rt[G];return et}function F(rt,M){for(var G=0;G<M.length;G++){var et=M[G];et.enumerable=et.enumerable||!1,et.configurable=!0,"value"in et&&(et.writable=!0),Object.defineProperty(rt,at(et.key),et)}}function Y(rt,M,G){return(M=at(M))in rt?Object.defineProperty(rt,M,{value:G,enumerable:!0,configurable:!0,writable:!0}):rt[M]=G,rt}function at(rt){var M=function(G,et){if(K(G)!=="object"||G===null)return G;var ut=G[Symbol.toPrimitive];if(ut!==void 0){var N=ut.call(G,"string");if(K(N)!=="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(G)}(rt);return K(M)==="symbol"?M:String(M)}const tt=function(){function rt(et,ut){var N=this;if(function(it,pt){if(!(it instanceof pt))throw new TypeError("Cannot call a class as a function")}(this,rt),Y(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),Y(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),Y(this,"setupWrapperElement",function(){N.state.elements.container&&(N.state.elements.wrapper.className=N.options.wrapperClassName,N.state.elements.cursor.className=N.options.cursorClassName,N.state.elements.cursor.innerHTML=N.options.cursor,N.state.elements.container.innerHTML="",N.state.elements.container.appendChild(N.state.elements.wrapper),N.state.elements.container.appendChild(N.state.elements.cursor))}),Y(this,"start",function(){return N.state.eventLoopPaused=!1,N.runEventLoop(),N}),Y(this,"pause",function(){return N.state.eventLoopPaused=!0,N}),Y(this,"stop",function(){return N.state.eventLoop&&((0,g.cancel)(N.state.eventLoop),N.state.eventLoop=null),N}),Y(this,"pauseFor",function(it){return N.addEventToQueue(R,{ms:it}),N}),Y(this,"typeOutAllStrings",function(){return typeof N.options.strings=="string"?(N.typeString(N.options.strings).pauseFor(N.options.pauseFor),N):(N.options.strings.forEach(function(it){N.typeString(it).pauseFor(N.options.pauseFor).deleteAll(N.options.deleteSpeed)}),N)}),Y(this,"typeString",function(it){var pt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(S(it))return N.typeOutHTMLString(it,pt);if(it){var dt=(N.options||{}).stringSplitter,vt=typeof dt=="function"?dt(it):it.split("");N.typeCharacters(vt,pt)}return N}),Y(this,"pasteString",function(it){var pt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return S(it)?N.typeOutHTMLString(it,pt,!0):(it&&N.addEventToQueue(P,{character:it,node:pt}),N)}),Y(this,"typeOutHTMLString",function(it){var pt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,dt=arguments.length>2?arguments[2]:void 0,vt=function(Se){var ln=document.createElement("div");return ln.innerHTML=Se,ln.childNodes}(it);if(vt.length>0)for(var ht=0;ht<vt.length;ht++){var Ut=vt[ht],It=Ut.innerHTML;Ut&&Ut.nodeType!==3?(Ut.innerHTML="",N.addEventToQueue(O,{node:Ut,parentNode:pt}),dt?N.pasteString(It,Ut):N.typeString(It,Ut)):Ut.textContent&&(dt?N.pasteString(Ut.textContent,pt):N.typeString(Ut.textContent,pt))}return N}),Y(this,"deleteAll",function(){var it=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return N.addEventToQueue(C,{speed:it}),N}),Y(this,"changeDeleteSpeed",function(it){if(!it)throw new Error("Must provide new delete speed");return N.addEventToQueue(v,{speed:it}),N}),Y(this,"changeDelay",function(it){if(!it)throw new Error("Must provide new delay");return N.addEventToQueue(x,{delay:it}),N}),Y(this,"changeCursor",function(it){if(!it)throw new Error("Must provide new cursor");return N.addEventToQueue(D,{cursor:it}),N}),Y(this,"deleteChars",function(it){if(!it)throw new Error("Must provide amount of characters to delete");for(var pt=0;pt<it;pt++)N.addEventToQueue(A);return N}),Y(this,"callFunction",function(it,pt){if(!it||typeof it!="function")throw new Error("Callback must be a function");return N.addEventToQueue(y,{cb:it,thisArg:pt}),N}),Y(this,"typeCharacters",function(it){var pt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it||!Array.isArray(it))throw new Error("Characters must be an array");return it.forEach(function(dt){N.addEventToQueue(_,{character:dt,node:pt})}),N}),Y(this,"removeCharacters",function(it){if(!it||!Array.isArray(it))throw new Error("Characters must be an array");return it.forEach(function(){N.addEventToQueue(A)}),N}),Y(this,"addEventToQueue",function(it,pt){var dt=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return N.addEventToStateProperty(it,pt,dt,"eventQueue")}),Y(this,"addReverseCalledEvent",function(it,pt){var dt=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return N.options.loop?N.addEventToStateProperty(it,pt,dt,"reverseCalledEvents"):N}),Y(this,"addEventToStateProperty",function(it,pt){var dt=arguments.length>2&&arguments[2]!==void 0&&arguments[2],vt=arguments.length>3?arguments[3]:void 0,ht={eventName:it,eventArgs:pt||{}};return N.state[vt]=dt?[ht].concat(I(N.state[vt])):[].concat(I(N.state[vt]),[ht]),N}),Y(this,"runEventLoop",function(){N.state.lastFrameTime||(N.state.lastFrameTime=Date.now());var it=Date.now(),pt=it-N.state.lastFrameTime;if(!N.state.eventQueue.length){if(!N.options.loop)return;N.state.eventQueue=I(N.state.calledEvents),N.state.calledEvents=[],N.options=z({},N.state.initialOptions)}if(N.state.eventLoop=w()(N.runEventLoop),!N.state.eventLoopPaused){if(N.state.pauseUntil){if(it<N.state.pauseUntil)return;N.state.pauseUntil=null}var dt,vt=I(N.state.eventQueue),ht=vt.shift();if(!(pt<=(dt=ht.eventName===B||ht.eventName===A?N.options.deleteSpeed==="natural"?b(40,80):N.options.deleteSpeed:N.options.delay==="natural"?b(120,160):N.options.delay))){var Ut=ht.eventName,It=ht.eventArgs;switch(N.logInDevMode({currentEvent:ht,state:N.state,delay:dt}),Ut){case P:case _:var Se=It.character,ln=It.node,ua=document.createTextNode(Se),ze=ua;N.options.onCreateTextNode&&typeof N.options.onCreateTextNode=="function"&&(ze=N.options.onCreateTextNode(Se,ua)),ze&&(ln?ln.appendChild(ze):N.state.elements.wrapper.appendChild(ze)),N.state.visibleNodes=[].concat(I(N.state.visibleNodes),[{type:"TEXT_NODE",character:Se,node:ze}]);break;case A:vt.unshift({eventName:B,eventArgs:{removingCharacterNode:!0}});break;case R:var Li=ht.eventArgs.ms;N.state.pauseUntil=Date.now()+parseInt(Li);break;case y:var oa=ht.eventArgs,Bi=oa.cb,qi=oa.thisArg;Bi.call(qi,{elements:N.state.elements});break;case O:var Ba=ht.eventArgs,Hi=Ba.node,Yi=Ba.parentNode;Yi?Yi.appendChild(Hi):N.state.elements.wrapper.appendChild(Hi),N.state.visibleNodes=[].concat(I(N.state.visibleNodes),[{type:H,node:Hi,parentNode:Yi||N.state.elements.wrapper}]);break;case C:var Ue=N.state.visibleNodes,Pi=It.speed,ca=[];Pi&&ca.push({eventName:v,eventArgs:{speed:Pi,temp:!0}});for(var Xi=0,qa=Ue.length;Xi<qa;Xi++)ca.push({eventName:B,eventArgs:{removingCharacterNode:!1}});Pi&&ca.push({eventName:v,eventArgs:{speed:N.options.deleteSpeed,temp:!0}}),vt.unshift.apply(vt,ca);break;case B:var so=ht.eventArgs.removingCharacterNode;if(N.state.visibleNodes.length){var Ha=N.state.visibleNodes.pop(),fo=Ha.type,Ya=Ha.node,sa=Ha.character;N.options.onRemoveNode&&typeof N.options.onRemoveNode=="function"&&N.options.onRemoveNode({node:Ya,character:sa}),Ya&&Ya.parentNode.removeChild(Ya),fo===H&&so&&vt.unshift({eventName:B,eventArgs:{}})}break;case v:N.options.deleteSpeed=ht.eventArgs.speed;break;case x:N.options.delay=ht.eventArgs.delay;break;case D:N.options.cursor=ht.eventArgs.cursor,N.state.elements.cursor.innerHTML=ht.eventArgs.cursor}N.options.loop&&(ht.eventName===B||ht.eventArgs&&ht.eventArgs.temp||(N.state.calledEvents=[].concat(I(N.state.calledEvents),[ht]))),N.state.eventQueue=vt,N.state.lastFrameTime=it}}}),et)if(typeof et=="string"){var St=document.querySelector(et);if(!St)throw new Error("Could not find container element");this.state.elements.container=St}else this.state.elements.container=et;ut&&(this.options=z(z({},this.options),ut)),this.state.initialOptions=z({},this.options),this.init()}var M,G;return M=rt,(G=[{key:"init",value:function(){var et,ut;this.setupWrapperElement(),this.addEventToQueue(D,{cursor:this.options.cursor},!0),this.addEventToQueue(C,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(et=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(ut=document.createElement("style")).appendChild(document.createTextNode(et)),document.head.appendChild(ut),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(et){this.options.devMode&&console.log(et)}}])&&F(M.prototype,G),Object.defineProperty(M,"prototype",{writable:!1}),rt}()},8552:(f,d,s)=>{var g=s(852)(s(5639),"DataView");f.exports=g},1989:(f,d,s)=>{var g=s(1789),w=s(401),S=s(7667),b=s(1327),_=s(1866);function A(C){var B=-1,R=C==null?0:C.length;for(this.clear();++B<R;){var y=C[B];this.set(y[0],y[1])}}A.prototype.clear=g,A.prototype.delete=w,A.prototype.get=S,A.prototype.has=b,A.prototype.set=_,f.exports=A},8407:(f,d,s)=>{var g=s(7040),w=s(4125),S=s(2117),b=s(7518),_=s(4705);function A(C){var B=-1,R=C==null?0:C.length;for(this.clear();++B<R;){var y=C[B];this.set(y[0],y[1])}}A.prototype.clear=g,A.prototype.delete=w,A.prototype.get=S,A.prototype.has=b,A.prototype.set=_,f.exports=A},7071:(f,d,s)=>{var g=s(852)(s(5639),"Map");f.exports=g},3369:(f,d,s)=>{var g=s(4785),w=s(1285),S=s(6e3),b=s(9916),_=s(5265);function A(C){var B=-1,R=C==null?0:C.length;for(this.clear();++B<R;){var y=C[B];this.set(y[0],y[1])}}A.prototype.clear=g,A.prototype.delete=w,A.prototype.get=S,A.prototype.has=b,A.prototype.set=_,f.exports=A},3818:(f,d,s)=>{var g=s(852)(s(5639),"Promise");f.exports=g},8525:(f,d,s)=>{var g=s(852)(s(5639),"Set");f.exports=g},8668:(f,d,s)=>{var g=s(3369),w=s(619),S=s(2385);function b(_){var A=-1,C=_==null?0:_.length;for(this.__data__=new g;++A<C;)this.add(_[A])}b.prototype.add=b.prototype.push=w,b.prototype.has=S,f.exports=b},6384:(f,d,s)=>{var g=s(8407),w=s(7465),S=s(3779),b=s(7599),_=s(4758),A=s(4309);function C(B){var R=this.__data__=new g(B);this.size=R.size}C.prototype.clear=w,C.prototype.delete=S,C.prototype.get=b,C.prototype.has=_,C.prototype.set=A,f.exports=C},2705:(f,d,s)=>{var g=s(5639).Symbol;f.exports=g},1149:(f,d,s)=>{var g=s(5639).Uint8Array;f.exports=g},577:(f,d,s)=>{var g=s(852)(s(5639),"WeakMap");f.exports=g},4963:f=>{f.exports=function(d,s){for(var g=-1,w=d==null?0:d.length,S=0,b=[];++g<w;){var _=d[g];s(_,g,d)&&(b[S++]=_)}return b}},4636:(f,d,s)=>{var g=s(2545),w=s(5694),S=s(1469),b=s(4144),_=s(5776),A=s(6719),C=Object.prototype.hasOwnProperty;f.exports=function(B,R){var y=S(B),O=!y&&w(B),v=!y&&!O&&b(B),x=!y&&!O&&!v&&A(B),D=y||O||v||x,P=D?g(B.length,String):[],H=P.length;for(var K in B)!R&&!C.call(B,K)||D&&(K=="length"||v&&(K=="offset"||K=="parent")||x&&(K=="buffer"||K=="byteLength"||K=="byteOffset")||_(K,H))||P.push(K);return P}},2488:f=>{f.exports=function(d,s){for(var g=-1,w=s.length,S=d.length;++g<w;)d[S+g]=s[g];return d}},2908:f=>{f.exports=function(d,s){for(var g=-1,w=d==null?0:d.length;++g<w;)if(s(d[g],g,d))return!0;return!1}},8470:(f,d,s)=>{var g=s(7813);f.exports=function(w,S){for(var b=w.length;b--;)if(g(w[b][0],S))return b;return-1}},8866:(f,d,s)=>{var g=s(2488),w=s(1469);f.exports=function(S,b,_){var A=b(S);return w(S)?A:g(A,_(S))}},4239:(f,d,s)=>{var g=s(2705),w=s(9607),S=s(2333),b=g?g.toStringTag:void 0;f.exports=function(_){return _==null?_===void 0?"[object Undefined]":"[object Null]":b&&b in Object(_)?w(_):S(_)}},9454:(f,d,s)=>{var g=s(4239),w=s(7005);f.exports=function(S){return w(S)&&g(S)=="[object Arguments]"}},939:(f,d,s)=>{var g=s(2492),w=s(7005);f.exports=function S(b,_,A,C,B){return b===_||(b==null||_==null||!w(b)&&!w(_)?b!=b&&_!=_:g(b,_,A,C,S,B))}},2492:(f,d,s)=>{var g=s(6384),w=s(7114),S=s(8351),b=s(6096),_=s(4160),A=s(1469),C=s(4144),B=s(6719),R="[object Arguments]",y="[object Array]",O="[object Object]",v=Object.prototype.hasOwnProperty;f.exports=function(x,D,P,H,K,V){var z=A(x),I=A(D),W=z?y:_(x),F=I?y:_(D),Y=(W=W==R?O:W)==O,at=(F=F==R?O:F)==O,tt=W==F;if(tt&&C(x)){if(!C(D))return!1;z=!0,Y=!1}if(tt&&!Y)return V||(V=new g),z||B(x)?w(x,D,P,H,K,V):S(x,D,W,P,H,K,V);if(!(1&P)){var rt=Y&&v.call(x,"__wrapped__"),M=at&&v.call(D,"__wrapped__");if(rt||M){var G=rt?x.value():x,et=M?D.value():D;return V||(V=new g),K(G,et,P,H,V)}}return!!tt&&(V||(V=new g),b(x,D,P,H,K,V))}},8458:(f,d,s)=>{var g=s(3560),w=s(5346),S=s(3218),b=s(346),_=/^\[object .+?Constructor\]$/,A=Function.prototype,C=Object.prototype,B=A.toString,R=C.hasOwnProperty,y=RegExp("^"+B.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");f.exports=function(O){return!(!S(O)||w(O))&&(g(O)?y:_).test(b(O))}},8749:(f,d,s)=>{var g=s(4239),w=s(1780),S=s(7005),b={};b["[object Float32Array]"]=b["[object Float64Array]"]=b["[object Int8Array]"]=b["[object Int16Array]"]=b["[object Int32Array]"]=b["[object Uint8Array]"]=b["[object Uint8ClampedArray]"]=b["[object Uint16Array]"]=b["[object Uint32Array]"]=!0,b["[object Arguments]"]=b["[object Array]"]=b["[object ArrayBuffer]"]=b["[object Boolean]"]=b["[object DataView]"]=b["[object Date]"]=b["[object Error]"]=b["[object Function]"]=b["[object Map]"]=b["[object Number]"]=b["[object Object]"]=b["[object RegExp]"]=b["[object Set]"]=b["[object String]"]=b["[object WeakMap]"]=!1,f.exports=function(_){return S(_)&&w(_.length)&&!!b[g(_)]}},280:(f,d,s)=>{var g=s(5726),w=s(6916),S=Object.prototype.hasOwnProperty;f.exports=function(b){if(!g(b))return w(b);var _=[];for(var A in Object(b))S.call(b,A)&&A!="constructor"&&_.push(A);return _}},2545:f=>{f.exports=function(d,s){for(var g=-1,w=Array(d);++g<d;)w[g]=s(g);return w}},1717:f=>{f.exports=function(d){return function(s){return d(s)}}},4757:f=>{f.exports=function(d,s){return d.has(s)}},4429:(f,d,s)=>{var g=s(5639)["__core-js_shared__"];f.exports=g},7114:(f,d,s)=>{var g=s(8668),w=s(2908),S=s(4757);f.exports=function(b,_,A,C,B,R){var y=1&A,O=b.length,v=_.length;if(O!=v&&!(y&&v>O))return!1;var x=R.get(b),D=R.get(_);if(x&&D)return x==_&&D==b;var P=-1,H=!0,K=2&A?new g:void 0;for(R.set(b,_),R.set(_,b);++P<O;){var V=b[P],z=_[P];if(C)var I=y?C(z,V,P,_,b,R):C(V,z,P,b,_,R);if(I!==void 0){if(I)continue;H=!1;break}if(K){if(!w(_,function(W,F){if(!S(K,F)&&(V===W||B(V,W,A,C,R)))return K.push(F)})){H=!1;break}}else if(V!==z&&!B(V,z,A,C,R)){H=!1;break}}return R.delete(b),R.delete(_),H}},8351:(f,d,s)=>{var g=s(2705),w=s(1149),S=s(7813),b=s(7114),_=s(8776),A=s(1814),C=g?g.prototype:void 0,B=C?C.valueOf:void 0;f.exports=function(R,y,O,v,x,D,P){switch(O){case"[object DataView]":if(R.byteLength!=y.byteLength||R.byteOffset!=y.byteOffset)return!1;R=R.buffer,y=y.buffer;case"[object ArrayBuffer]":return!(R.byteLength!=y.byteLength||!D(new w(R),new w(y)));case"[object Boolean]":case"[object Date]":case"[object Number]":return S(+R,+y);case"[object Error]":return R.name==y.name&&R.message==y.message;case"[object RegExp]":case"[object String]":return R==y+"";case"[object Map]":var H=_;case"[object Set]":var K=1&v;if(H||(H=A),R.size!=y.size&&!K)return!1;var V=P.get(R);if(V)return V==y;v|=2,P.set(R,y);var z=b(H(R),H(y),v,x,D,P);return P.delete(R),z;case"[object Symbol]":if(B)return B.call(R)==B.call(y)}return!1}},6096:(f,d,s)=>{var g=s(8234),w=Object.prototype.hasOwnProperty;f.exports=function(S,b,_,A,C,B){var R=1&_,y=g(S),O=y.length;if(O!=g(b).length&&!R)return!1;for(var v=O;v--;){var x=y[v];if(!(R?x in b:w.call(b,x)))return!1}var D=B.get(S),P=B.get(b);if(D&&P)return D==b&&P==S;var H=!0;B.set(S,b),B.set(b,S);for(var K=R;++v<O;){var V=S[x=y[v]],z=b[x];if(A)var I=R?A(z,V,x,b,S,B):A(V,z,x,S,b,B);if(!(I===void 0?V===z||C(V,z,_,A,B):I)){H=!1;break}K||(K=x=="constructor")}if(H&&!K){var W=S.constructor,F=b.constructor;W==F||!("constructor"in S)||!("constructor"in b)||typeof W=="function"&&W instanceof W&&typeof F=="function"&&F instanceof F||(H=!1)}return B.delete(S),B.delete(b),H}},1957:(f,d,s)=>{var g=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g;f.exports=g},8234:(f,d,s)=>{var g=s(8866),w=s(9551),S=s(3674);f.exports=function(b){return g(b,S,w)}},5050:(f,d,s)=>{var g=s(7019);f.exports=function(w,S){var b=w.__data__;return g(S)?b[typeof S=="string"?"string":"hash"]:b.map}},852:(f,d,s)=>{var g=s(8458),w=s(7801);f.exports=function(S,b){var _=w(S,b);return g(_)?_:void 0}},9607:(f,d,s)=>{var g=s(2705),w=Object.prototype,S=w.hasOwnProperty,b=w.toString,_=g?g.toStringTag:void 0;f.exports=function(A){var C=S.call(A,_),B=A[_];try{A[_]=void 0;var R=!0}catch{}var y=b.call(A);return R&&(C?A[_]=B:delete A[_]),y}},9551:(f,d,s)=>{var g=s(4963),w=s(479),S=Object.prototype.propertyIsEnumerable,b=Object.getOwnPropertySymbols,_=b?function(A){return A==null?[]:(A=Object(A),g(b(A),function(C){return S.call(A,C)}))}:w;f.exports=_},4160:(f,d,s)=>{var g=s(8552),w=s(7071),S=s(3818),b=s(8525),_=s(577),A=s(4239),C=s(346),B="[object Map]",R="[object Promise]",y="[object Set]",O="[object WeakMap]",v="[object DataView]",x=C(g),D=C(w),P=C(S),H=C(b),K=C(_),V=A;(g&&V(new g(new ArrayBuffer(1)))!=v||w&&V(new w)!=B||S&&V(S.resolve())!=R||b&&V(new b)!=y||_&&V(new _)!=O)&&(V=function(z){var I=A(z),W=I=="[object Object]"?z.constructor:void 0,F=W?C(W):"";if(F)switch(F){case x:return v;case D:return B;case P:return R;case H:return y;case K:return O}return I}),f.exports=V},7801:f=>{f.exports=function(d,s){return d==null?void 0:d[s]}},1789:(f,d,s)=>{var g=s(4536);f.exports=function(){this.__data__=g?g(null):{},this.size=0}},401:f=>{f.exports=function(d){var s=this.has(d)&&delete this.__data__[d];return this.size-=s?1:0,s}},7667:(f,d,s)=>{var g=s(4536),w=Object.prototype.hasOwnProperty;f.exports=function(S){var b=this.__data__;if(g){var _=b[S];return _==="__lodash_hash_undefined__"?void 0:_}return w.call(b,S)?b[S]:void 0}},1327:(f,d,s)=>{var g=s(4536),w=Object.prototype.hasOwnProperty;f.exports=function(S){var b=this.__data__;return g?b[S]!==void 0:w.call(b,S)}},1866:(f,d,s)=>{var g=s(4536);f.exports=function(w,S){var b=this.__data__;return this.size+=this.has(w)?0:1,b[w]=g&&S===void 0?"__lodash_hash_undefined__":S,this}},5776:f=>{var d=/^(?:0|[1-9]\d*)$/;f.exports=function(s,g){var w=typeof s;return!!(g=g??9007199254740991)&&(w=="number"||w!="symbol"&&d.test(s))&&s>-1&&s%1==0&&s<g}},7019:f=>{f.exports=function(d){var s=typeof d;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?d!=="__proto__":d===null}},5346:(f,d,s)=>{var g,w=s(4429),S=(g=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+g:"";f.exports=function(b){return!!S&&S in b}},5726:f=>{var d=Object.prototype;f.exports=function(s){var g=s&&s.constructor;return s===(typeof g=="function"&&g.prototype||d)}},7040:f=>{f.exports=function(){this.__data__=[],this.size=0}},4125:(f,d,s)=>{var g=s(8470),w=Array.prototype.splice;f.exports=function(S){var b=this.__data__,_=g(b,S);return!(_<0||(_==b.length-1?b.pop():w.call(b,_,1),--this.size,0))}},2117:(f,d,s)=>{var g=s(8470);f.exports=function(w){var S=this.__data__,b=g(S,w);return b<0?void 0:S[b][1]}},7518:(f,d,s)=>{var g=s(8470);f.exports=function(w){return g(this.__data__,w)>-1}},4705:(f,d,s)=>{var g=s(8470);f.exports=function(w,S){var b=this.__data__,_=g(b,w);return _<0?(++this.size,b.push([w,S])):b[_][1]=S,this}},4785:(f,d,s)=>{var g=s(1989),w=s(8407),S=s(7071);f.exports=function(){this.size=0,this.__data__={hash:new g,map:new(S||w),string:new g}}},1285:(f,d,s)=>{var g=s(5050);f.exports=function(w){var S=g(this,w).delete(w);return this.size-=S?1:0,S}},6e3:(f,d,s)=>{var g=s(5050);f.exports=function(w){return g(this,w).get(w)}},9916:(f,d,s)=>{var g=s(5050);f.exports=function(w){return g(this,w).has(w)}},5265:(f,d,s)=>{var g=s(5050);f.exports=function(w,S){var b=g(this,w),_=b.size;return b.set(w,S),this.size+=b.size==_?0:1,this}},8776:f=>{f.exports=function(d){var s=-1,g=Array(d.size);return d.forEach(function(w,S){g[++s]=[S,w]}),g}},4536:(f,d,s)=>{var g=s(852)(Object,"create");f.exports=g},6916:(f,d,s)=>{var g=s(5569)(Object.keys,Object);f.exports=g},1167:(f,d,s)=>{f=s.nmd(f);var g=s(1957),w=d&&!d.nodeType&&d,S=w&&f&&!f.nodeType&&f,b=S&&S.exports===w&&g.process,_=function(){try{return S&&S.require&&S.require("util").types||b&&b.binding&&b.binding("util")}catch{}}();f.exports=_},2333:f=>{var d=Object.prototype.toString;f.exports=function(s){return d.call(s)}},5569:f=>{f.exports=function(d,s){return function(g){return d(s(g))}}},5639:(f,d,s)=>{var g=s(1957),w=typeof self=="object"&&self&&self.Object===Object&&self,S=g||w||Function("return this")();f.exports=S},619:f=>{f.exports=function(d){return this.__data__.set(d,"__lodash_hash_undefined__"),this}},2385:f=>{f.exports=function(d){return this.__data__.has(d)}},1814:f=>{f.exports=function(d){var s=-1,g=Array(d.size);return d.forEach(function(w){g[++s]=w}),g}},7465:(f,d,s)=>{var g=s(8407);f.exports=function(){this.__data__=new g,this.size=0}},3779:f=>{f.exports=function(d){var s=this.__data__,g=s.delete(d);return this.size=s.size,g}},7599:f=>{f.exports=function(d){return this.__data__.get(d)}},4758:f=>{f.exports=function(d){return this.__data__.has(d)}},4309:(f,d,s)=>{var g=s(8407),w=s(7071),S=s(3369);f.exports=function(b,_){var A=this.__data__;if(A instanceof g){var C=A.__data__;if(!w||C.length<199)return C.push([b,_]),this.size=++A.size,this;A=this.__data__=new S(C)}return A.set(b,_),this.size=A.size,this}},346:f=>{var d=Function.prototype.toString;f.exports=function(s){if(s!=null){try{return d.call(s)}catch{}try{return s+""}catch{}}return""}},7813:f=>{f.exports=function(d,s){return d===s||d!=d&&s!=s}},5694:(f,d,s)=>{var g=s(9454),w=s(7005),S=Object.prototype,b=S.hasOwnProperty,_=S.propertyIsEnumerable,A=g(function(){return arguments}())?g:function(C){return w(C)&&b.call(C,"callee")&&!_.call(C,"callee")};f.exports=A},1469:f=>{var d=Array.isArray;f.exports=d},8612:(f,d,s)=>{var g=s(3560),w=s(1780);f.exports=function(S){return S!=null&&w(S.length)&&!g(S)}},4144:(f,d,s)=>{f=s.nmd(f);var g=s(5639),w=s(5062),S=d&&!d.nodeType&&d,b=S&&f&&!f.nodeType&&f,_=b&&b.exports===S?g.Buffer:void 0,A=(_?_.isBuffer:void 0)||w;f.exports=A},8446:(f,d,s)=>{var g=s(939);f.exports=function(w,S){return g(w,S)}},3560:(f,d,s)=>{var g=s(4239),w=s(3218);f.exports=function(S){if(!w(S))return!1;var b=g(S);return b=="[object Function]"||b=="[object GeneratorFunction]"||b=="[object AsyncFunction]"||b=="[object Proxy]"}},1780:f=>{f.exports=function(d){return typeof d=="number"&&d>-1&&d%1==0&&d<=9007199254740991}},3218:f=>{f.exports=function(d){var s=typeof d;return d!=null&&(s=="object"||s=="function")}},7005:f=>{f.exports=function(d){return d!=null&&typeof d=="object"}},6719:(f,d,s)=>{var g=s(8749),w=s(1717),S=s(1167),b=S&&S.isTypedArray,_=b?w(b):g;f.exports=_},3674:(f,d,s)=>{var g=s(4636),w=s(280),S=s(8612);f.exports=function(b){return S(b)?g(b):w(b)}},479:f=>{f.exports=function(){return[]}},5062:f=>{f.exports=function(){return!1}},75:function(f){(function(){var d,s,g,w,S,b;typeof performance<"u"&&performance!==null&&performance.now?f.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(f.exports=function(){return(d()-S)/1e6},s=process.hrtime,w=(d=function(){var _;return 1e9*(_=s())[0]+_[1]})(),b=1e9*process.uptime(),S=w-b):Date.now?(f.exports=function(){return Date.now()-g},g=Date.now()):(f.exports=function(){return new Date().getTime()-g},g=new Date().getTime())}).call(this)},4087:(f,d,s)=>{for(var g=s(75),w=typeof window>"u"?s.g:window,S=["moz","webkit"],b="AnimationFrame",_=w["request"+b],A=w["cancel"+b]||w["cancelRequest"+b],C=0;!_&&C<S.length;C++)_=w[S[C]+"Request"+b],A=w[S[C]+"Cancel"+b]||w[S[C]+"CancelRequest"+b];if(!_||!A){var B=0,R=0,y=[];_=function(O){if(y.length===0){var v=g(),x=Math.max(0,16.666666666666668-(v-B));B=x+v,setTimeout(function(){var D=y.slice(0);y.length=0;for(var P=0;P<D.length;P++)if(!D[P].cancelled)try{D[P].callback(B)}catch(H){setTimeout(function(){throw H},0)}},Math.round(x))}return y.push({handle:++R,callback:O,cancelled:!1}),R},A=function(O){for(var v=0;v<y.length;v++)y[v].handle===O&&(y[v].cancelled=!0)}}f.exports=function(O){return _.call(w,O)},f.exports.cancel=function(){A.apply(w,arguments)},f.exports.polyfill=function(O){O||(O=w),O.requestAnimationFrame=_,O.cancelAnimationFrame=A}},8156:f=>{f.exports=c}},m={};function p(f){var d=m[f];if(d!==void 0)return d.exports;var s=m[f]={id:f,loaded:!1,exports:{}};return o[f].call(s.exports,s,s.exports,p),s.loaded=!0,s.exports}p.n=f=>{var d=f&&f.__esModule?()=>f.default:()=>f;return p.d(d,{a:d}),d},p.d=(f,d)=>{for(var s in d)p.o(d,s)&&!p.o(f,s)&&Object.defineProperty(f,s,{enumerable:!0,get:d[s]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),p.o=(f,d)=>Object.prototype.hasOwnProperty.call(f,d),p.nmd=f=>(f.paths=[],f.children||(f.children=[]),f);var T={};return(()=>{p.d(T,{default:()=>y});var f=p(8156),d=p.n(f),s=p(7403),g=p(8446),w=p.n(g);function S(O){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},S(O)}function b(O,v){for(var x=0;x<v.length;x++){var D=v[x];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(O,B(D.key),D)}}function _(O,v){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,D){return x.__proto__=D,x},_(O,v)}function A(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function C(O){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},C(O)}function B(O){var v=function(x,D){if(S(x)!=="object"||x===null)return x;var P=x[Symbol.toPrimitive];if(P!==void 0){var H=P.call(x,"string");if(S(H)!=="object")return H;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(O);return S(v)==="symbol"?v:String(v)}var R=function(O){(function(V,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");V.prototype=Object.create(z&&z.prototype,{constructor:{value:V,writable:!0,configurable:!0}}),Object.defineProperty(V,"prototype",{writable:!1}),z&&_(V,z)})(K,O);var v,x,D,P,H=(D=K,P=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var V,z=C(D);if(P){var I=C(this).constructor;V=Reflect.construct(z,arguments,I)}else V=z.apply(this,arguments);return function(W,F){if(F&&(S(F)==="object"||typeof F=="function"))return F;if(F!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(W)}(this,V)});function K(){var V,z,I,W;(function(tt,rt){if(!(tt instanceof rt))throw new TypeError("Cannot call a class as a function")})(this,K);for(var F=arguments.length,Y=new Array(F),at=0;at<F;at++)Y[at]=arguments[at];return z=A(V=H.call.apply(H,[this].concat(Y))),W={instance:null},(I=B(I="state"))in z?Object.defineProperty(z,I,{value:W,enumerable:!0,configurable:!0,writable:!0}):z[I]=W,V}return v=K,(x=[{key:"componentDidMount",value:function(){var V=this,z=new s.default(this.typewriter,this.props.options);this.setState({instance:z},function(){var I=V.props.onInit;I&&I(z)})}},{key:"componentDidUpdate",value:function(V){w()(this.props.options,V.options)||this.setState({instance:new s.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var V=this,z=this.props.component;return d().createElement(z,{ref:function(I){return V.typewriter=I},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&b(v.prototype,x),Object.defineProperty(v,"prototype",{writable:!1}),K}(f.Component);R.defaultProps={component:"div"};const y=R})(),T.default})())}(Pu)),Pu.exports}var eS=tS();const nS=bf(eS),aS=()=>Q.jsxs(Ei.StyledMain,{id:"about",children:[Q.jsxs(Ei.ContentWrapper,{children:[Q.jsxs(Ei.Title,{children:[Q.jsx("p",{children:"Frontend Developer"}),Q.jsx(nS,{options:{strings:["Frontend Developer"],autoStart:!0,loop:!0}})]}),Q.jsx(Ei.Name,{children:"Hello, my name is Elena Druzhinina"}),Q.jsx(Ei.Description,{children:"Short text with details about you, what you do or your professional career. You can add more information on the about page."}),Q.jsxs(Ei.ButtonsWrapper,{children:[Q.jsx(kr,{href:"#projects",children:"Projects"}),Q.jsx(kr,{href:"#",$outlined:!0,children:"LinkedIn"})]})]}),Q.jsx(Qb,{})]}),iS=bt.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    color: #25282b;
    font-family: "Playfair Display", sans-serif;
    position: relative;
    margin-bottom: 88px;

    &::after {
        content: '';
        position: absolute;
        display: block;
        margin: 0 auto;
        bottom: -8px;
        left: 50%;
        transform: translate(-50%);
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background: ${ft.colors.accent};
    }

    @media ${ft.media.desktopLg} {
        margin-bottom: 70px;
    }
    
    @media ${ft.media.tablet} {
        margin-bottom: 60px;
    }

    @media ${ft.media.mobile} {
        margin-bottom: 50px;
    }
`,rS={StyledSectionTitle:iS},io=({title:i})=>Q.jsx(rS.StyledSectionTitle,{children:i}),lS=[{iconId:"js"},{iconId:"ts"},{iconId:"css",viewBox:"7 6 106 106"},{iconId:"sass",viewBox:"0 -15 120 120"},{iconId:"html",viewBox:"7 6 106 106"},{iconId:"styledComponent"},{iconId:"git",viewBox:"1 1 30 30"},{iconId:"gitHub",viewBox:"0 0 90 90"},{iconId:"redux"},{iconId:"react",viewBox:"6 6 108 108"},{iconId:"vscode",viewBox:"3 0 105 105"},{iconId:"webstorm",viewBox:"-10 -10 270 270"}],uS=bt.section`
`,oS=bt.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    gap: 74px 0;
    justify-items: center;
    
    @media ${ft.media.desktopXl} {
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${ft.media.desktopLg} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${ft.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
        gap: 50px 0;
        svg {
            width: 100px;height: 100px;
        }
    }
`,Ym={StyledSkills:uS,GridWrapper:oS};function cS(i){if(i.sheet)return i.sheet;for(var l=0;l<document.styleSheets.length;l++)if(document.styleSheets[l].ownerNode===i)return document.styleSheets[l]}function sS(i){var l=document.createElement("style");return l.setAttribute("data-emotion",i.key),i.nonce!==void 0&&l.setAttribute("nonce",i.nonce),l.appendChild(document.createTextNode("")),l.setAttribute("data-s",""),l}var fS=function(){function i(c){var o=this;this._insertTag=function(m){var p;o.tags.length===0?o.insertionPoint?p=o.insertionPoint.nextSibling:o.prepend?p=o.container.firstChild:p=o.before:p=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(m,p),o.tags.push(m)},this.isSpeedy=c.speedy===void 0?!0:c.speedy,this.tags=[],this.ctr=0,this.nonce=c.nonce,this.key=c.key,this.container=c.container,this.prepend=c.prepend,this.insertionPoint=c.insertionPoint,this.before=null}var l=i.prototype;return l.hydrate=function(o){o.forEach(this._insertTag)},l.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sS(this));var m=this.tags[this.tags.length-1];if(this.isSpeedy){var p=cS(m);try{p.insertRule(o,p.cssRules.length)}catch{}}else m.appendChild(document.createTextNode(o));this.ctr++},l.flush=function(){this.tags.forEach(function(o){var m;return(m=o.parentNode)==null?void 0:m.removeChild(o)}),this.tags=[],this.ctr=0},i}(),ve="-ms-",ku="-moz-",Ct="-webkit-",gv="comm",wf="rule",xf="decl",dS="@import",yv="@keyframes",hS="@layer",mS=Math.abs,ro=String.fromCharCode,pS=Object.assign;function vS(i,l){return fe(i,0)^45?(((l<<2^fe(i,0))<<2^fe(i,1))<<2^fe(i,2))<<2^fe(i,3):0}function bv(i){return i.trim()}function gS(i,l){return(i=l.exec(i))?i[0]:i}function jt(i,l,c){return i.replace(l,c)}function mf(i,l){return i.indexOf(l)}function fe(i,l){return i.charCodeAt(l)|0}function Jr(i,l,c){return i.slice(l,c)}function hn(i){return i.length}function Df(i){return i.length}function yu(i,l){return l.push(i),i}function yS(i,l){return i.map(l).join("")}var lo=1,Ni=1,Sv=0,Oe=0,Ft=0,Ui="";function uo(i,l,c,o,m,p,T){return{value:i,root:l,parent:c,type:o,props:m,children:p,line:lo,column:Ni,length:T,return:""}}function Yr(i,l){return pS(uo("",null,null,"",null,null,0),i,{length:-i.length},l)}function bS(){return Ft}function SS(){return Ft=Oe>0?fe(Ui,--Oe):0,Ni--,Ft===10&&(Ni=1,lo--),Ft}function Ne(){return Ft=Oe<Sv?fe(Ui,Oe++):0,Ni++,Ft===10&&(Ni=1,lo++),Ft}function vn(){return fe(Ui,Oe)}function Xu(){return Oe}function al(i,l){return Jr(Ui,i,l)}function Wr(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _v(i){return lo=Ni=1,Sv=hn(Ui=i),Oe=0,[]}function Tv(i){return Ui="",i}function $u(i){return bv(al(Oe-1,pf(i===91?i+2:i===40?i+1:i)))}function _S(i){for(;(Ft=vn())&&Ft<33;)Ne();return Wr(i)>2||Wr(Ft)>3?"":" "}function TS(i,l){for(;--l&&Ne()&&!(Ft<48||Ft>102||Ft>57&&Ft<65||Ft>70&&Ft<97););return al(i,Xu()+(l<6&&vn()==32&&Ne()==32))}function pf(i){for(;Ne();)switch(Ft){case i:return Oe;case 34:case 39:i!==34&&i!==39&&pf(Ft);break;case 40:i===41&&pf(i);break;case 92:Ne();break}return Oe}function ES(i,l){for(;Ne()&&i+Ft!==57;)if(i+Ft===84&&vn()===47)break;return"/*"+al(l,Oe-1)+"*"+ro(i===47?i:Ne())}function OS(i){for(;!Wr(vn());)Ne();return al(i,Oe)}function AS(i){return Tv(Gu("",null,null,null,[""],i=_v(i),0,[0],i))}function Gu(i,l,c,o,m,p,T,f,d){for(var s=0,g=0,w=T,S=0,b=0,_=0,A=1,C=1,B=1,R=0,y="",O=m,v=p,x=o,D=y;C;)switch(_=R,R=Ne()){case 40:if(_!=108&&fe(D,w-1)==58){mf(D+=jt($u(R),"&","&\f"),"&\f")!=-1&&(B=-1);break}case 34:case 39:case 91:D+=$u(R);break;case 9:case 10:case 13:case 32:D+=_S(_);break;case 92:D+=TS(Xu()-1,7);continue;case 47:switch(vn()){case 42:case 47:yu(wS(ES(Ne(),Xu()),l,c),d);break;default:D+="/"}break;case 123*A:f[s++]=hn(D)*B;case 125*A:case 59:case 0:switch(R){case 0:case 125:C=0;case 59+g:B==-1&&(D=jt(D,/\f/g,"")),b>0&&hn(D)-w&&yu(b>32?Xm(D+";",o,c,w-1):Xm(jt(D," ","")+";",o,c,w-2),d);break;case 59:D+=";";default:if(yu(x=Pm(D,l,c,s,g,m,f,y,O=[],v=[],w),p),R===123)if(g===0)Gu(D,l,x,x,O,p,w,f,v);else switch(S===99&&fe(D,3)===110?100:S){case 100:case 108:case 109:case 115:Gu(i,x,x,o&&yu(Pm(i,x,x,0,0,m,f,y,m,O=[],w),v),m,v,w,f,o?O:v);break;default:Gu(D,x,x,x,[""],v,0,f,v)}}s=g=b=0,A=B=1,y=D="",w=T;break;case 58:w=1+hn(D),b=_;default:if(A<1){if(R==123)--A;else if(R==125&&A++==0&&SS()==125)continue}switch(D+=ro(R),R*A){case 38:B=g>0?1:(D+="\f",-1);break;case 44:f[s++]=(hn(D)-1)*B,B=1;break;case 64:vn()===45&&(D+=$u(Ne())),S=vn(),g=w=hn(y=D+=OS(Xu())),R++;break;case 45:_===45&&hn(D)==2&&(A=0)}}return p}function Pm(i,l,c,o,m,p,T,f,d,s,g){for(var w=m-1,S=m===0?p:[""],b=Df(S),_=0,A=0,C=0;_<o;++_)for(var B=0,R=Jr(i,w+1,w=mS(A=T[_])),y=i;B<b;++B)(y=bv(A>0?S[B]+" "+R:jt(R,/&\f/g,S[B])))&&(d[C++]=y);return uo(i,l,c,m===0?wf:f,d,s,g)}function wS(i,l,c){return uo(i,l,c,gv,ro(bS()),Jr(i,2,-2),0)}function Xm(i,l,c,o){return uo(i,l,c,xf,Jr(i,0,o),Jr(i,o+1,-1),o)}function xi(i,l){for(var c="",o=Df(i),m=0;m<o;m++)c+=l(i[m],m,i,l)||"";return c}function xS(i,l,c,o){switch(i.type){case hS:if(i.children.length)break;case dS:case xf:return i.return=i.return||i.value;case gv:return"";case yv:return i.return=i.value+"{"+xi(i.children,o)+"}";case wf:i.value=i.props.join(",")}return hn(c=xi(i.children,o))?i.return=i.value+"{"+c+"}":""}function DS(i){var l=Df(i);return function(c,o,m,p){for(var T="",f=0;f<l;f++)T+=i[f](c,o,m,p)||"";return T}}function MS(i){return function(l){l.root||(l=l.return)&&i(l)}}function CS(i){var l=Object.create(null);return function(c){return l[c]===void 0&&(l[c]=i(c)),l[c]}}var jS=function(l,c,o){for(var m=0,p=0;m=p,p=vn(),m===38&&p===12&&(c[o]=1),!Wr(p);)Ne();return al(l,Oe)},RS=function(l,c){var o=-1,m=44;do switch(Wr(m)){case 0:m===38&&vn()===12&&(c[o]=1),l[o]+=jS(Oe-1,c,o);break;case 2:l[o]+=$u(m);break;case 4:if(m===44){l[++o]=vn()===58?"&\f":"",c[o]=l[o].length;break}default:l[o]+=ro(m)}while(m=Ne());return l},NS=function(l,c){return Tv(RS(_v(l),c))},$m=new WeakMap,zS=function(l){if(!(l.type!=="rule"||!l.parent||l.length<1)){for(var c=l.value,o=l.parent,m=l.column===o.column&&l.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(l.props.length===1&&c.charCodeAt(0)!==58&&!$m.get(o))&&!m){$m.set(l,!0);for(var p=[],T=NS(c,p),f=o.props,d=0,s=0;d<T.length;d++)for(var g=0;g<f.length;g++,s++)l.props[s]=p[d]?T[d].replace(/&\f/g,f[g]):f[g]+" "+T[d]}}},US=function(l){if(l.type==="decl"){var c=l.value;c.charCodeAt(0)===108&&c.charCodeAt(2)===98&&(l.return="",l.value="")}};function Ev(i,l){switch(vS(i,l)){case 5103:return Ct+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ct+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return Ct+i+ku+i+ve+i+i;case 6828:case 4268:return Ct+i+ve+i+i;case 6165:return Ct+i+ve+"flex-"+i+i;case 5187:return Ct+i+jt(i,/(\w+).+(:[^]+)/,Ct+"box-$1$2"+ve+"flex-$1$2")+i;case 5443:return Ct+i+ve+"flex-item-"+jt(i,/flex-|-self/,"")+i;case 4675:return Ct+i+ve+"flex-line-pack"+jt(i,/align-content|flex-|-self/,"")+i;case 5548:return Ct+i+ve+jt(i,"shrink","negative")+i;case 5292:return Ct+i+ve+jt(i,"basis","preferred-size")+i;case 6060:return Ct+"box-"+jt(i,"-grow","")+Ct+i+ve+jt(i,"grow","positive")+i;case 4554:return Ct+jt(i,/([^-])(transform)/g,"$1"+Ct+"$2")+i;case 6187:return jt(jt(jt(i,/(zoom-|grab)/,Ct+"$1"),/(image-set)/,Ct+"$1"),i,"")+i;case 5495:case 3959:return jt(i,/(image-set\([^]*)/,Ct+"$1$`$1");case 4968:return jt(jt(i,/(.+:)(flex-)?(.*)/,Ct+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ct+i+i;case 4095:case 3583:case 4068:case 2532:return jt(i,/(.+)-inline(.+)/,Ct+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(i)-1-l>6)switch(fe(i,l+1)){case 109:if(fe(i,l+4)!==45)break;case 102:return jt(i,/(.+:)(.+)-([^]+)/,"$1"+Ct+"$2-$3$1"+ku+(fe(i,l+3)==108?"$3":"$2-$3"))+i;case 115:return~mf(i,"stretch")?Ev(jt(i,"stretch","fill-available"),l)+i:i}break;case 4949:if(fe(i,l+1)!==115)break;case 6444:switch(fe(i,hn(i)-3-(~mf(i,"!important")&&10))){case 107:return jt(i,":",":"+Ct)+i;case 101:return jt(i,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ct+(fe(i,14)===45?"inline-":"")+"box$3$1"+Ct+"$2$3$1"+ve+"$2box$3")+i}break;case 5936:switch(fe(i,l+11)){case 114:return Ct+i+ve+jt(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return Ct+i+ve+jt(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return Ct+i+ve+jt(i,/[svh]\w+-[tblr]{2}/,"lr")+i}return Ct+i+ve+i+i}return i}var LS=function(l,c,o,m){if(l.length>-1&&!l.return)switch(l.type){case xf:l.return=Ev(l.value,l.length);break;case yv:return xi([Yr(l,{value:jt(l.value,"@","@"+Ct)})],m);case wf:if(l.length)return yS(l.props,function(p){switch(gS(p,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return xi([Yr(l,{props:[jt(p,/:(read-\w+)/,":"+ku+"$1")]})],m);case"::placeholder":return xi([Yr(l,{props:[jt(p,/:(plac\w+)/,":"+Ct+"input-$1")]}),Yr(l,{props:[jt(p,/:(plac\w+)/,":"+ku+"$1")]}),Yr(l,{props:[jt(p,/:(plac\w+)/,ve+"input-$1")]})],m)}return""})}},BS=[LS],qS=function(l){var c=l.key;if(c==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(A){var C=A.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(A),A.setAttribute("data-s",""))})}var m=l.stylisPlugins||BS,p={},T,f=[];T=l.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+c+' "]'),function(A){for(var C=A.getAttribute("data-emotion").split(" "),B=1;B<C.length;B++)p[C[B]]=!0;f.push(A)});var d,s=[zS,US];{var g,w=[xS,MS(function(A){g.insert(A)})],S=DS(s.concat(m,w)),b=function(C){return xi(AS(C),S)};d=function(C,B,R,y){g=R,b(C?C+"{"+B.styles+"}":B.styles),y&&(_.inserted[B.name]=!0)}}var _={key:c,sheet:new fS({key:c,container:T,nonce:l.nonce,speedy:l.speedy,prepend:l.prepend,insertionPoint:l.insertionPoint}),nonce:l.nonce,inserted:p,registered:{},insert:d};return _.sheet.hydrate(f),_},Ds={exports:{}},Rt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function HS(){if(Gm)return Rt;Gm=1;var i=typeof Symbol=="function"&&Symbol.for,l=i?Symbol.for("react.element"):60103,c=i?Symbol.for("react.portal"):60106,o=i?Symbol.for("react.fragment"):60107,m=i?Symbol.for("react.strict_mode"):60108,p=i?Symbol.for("react.profiler"):60114,T=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.async_mode"):60111,s=i?Symbol.for("react.concurrent_mode"):60111,g=i?Symbol.for("react.forward_ref"):60112,w=i?Symbol.for("react.suspense"):60113,S=i?Symbol.for("react.suspense_list"):60120,b=i?Symbol.for("react.memo"):60115,_=i?Symbol.for("react.lazy"):60116,A=i?Symbol.for("react.block"):60121,C=i?Symbol.for("react.fundamental"):60117,B=i?Symbol.for("react.responder"):60118,R=i?Symbol.for("react.scope"):60119;function y(v){if(typeof v=="object"&&v!==null){var x=v.$$typeof;switch(x){case l:switch(v=v.type,v){case d:case s:case o:case p:case m:case w:return v;default:switch(v=v&&v.$$typeof,v){case f:case g:case _:case b:case T:return v;default:return x}}case c:return x}}}function O(v){return y(v)===s}return Rt.AsyncMode=d,Rt.ConcurrentMode=s,Rt.ContextConsumer=f,Rt.ContextProvider=T,Rt.Element=l,Rt.ForwardRef=g,Rt.Fragment=o,Rt.Lazy=_,Rt.Memo=b,Rt.Portal=c,Rt.Profiler=p,Rt.StrictMode=m,Rt.Suspense=w,Rt.isAsyncMode=function(v){return O(v)||y(v)===d},Rt.isConcurrentMode=O,Rt.isContextConsumer=function(v){return y(v)===f},Rt.isContextProvider=function(v){return y(v)===T},Rt.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===l},Rt.isForwardRef=function(v){return y(v)===g},Rt.isFragment=function(v){return y(v)===o},Rt.isLazy=function(v){return y(v)===_},Rt.isMemo=function(v){return y(v)===b},Rt.isPortal=function(v){return y(v)===c},Rt.isProfiler=function(v){return y(v)===p},Rt.isStrictMode=function(v){return y(v)===m},Rt.isSuspense=function(v){return y(v)===w},Rt.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===o||v===s||v===p||v===m||v===w||v===S||typeof v=="object"&&v!==null&&(v.$$typeof===_||v.$$typeof===b||v.$$typeof===T||v.$$typeof===f||v.$$typeof===g||v.$$typeof===C||v.$$typeof===B||v.$$typeof===R||v.$$typeof===A)},Rt.typeOf=y,Rt}var Vm;function YS(){return Vm||(Vm=1,Ds.exports=HS()),Ds.exports}var Ms,Qm;function PS(){if(Qm)return Ms;Qm=1;var i=YS(),l={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p={};p[i.ForwardRef]=o,p[i.Memo]=m;function T(_){return i.isMemo(_)?m:p[_.$$typeof]||l}var f=Object.defineProperty,d=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,S=Object.prototype;function b(_,A,C){if(typeof A!="string"){if(S){var B=w(A);B&&B!==S&&b(_,B,C)}var R=d(A);s&&(R=R.concat(s(A)));for(var y=T(_),O=T(A),v=0;v<R.length;++v){var x=R[v];if(!c[x]&&!(C&&C[x])&&!(O&&O[x])&&!(y&&y[x])){var D=g(A,x);try{f(_,x,D)}catch{}}}}return _}return Ms=b,Ms}PS();var XS=!0;function Ov(i,l,c){var o="";return c.split(" ").forEach(function(m){i[m]!==void 0?l.push(i[m]+";"):m&&(o+=m+" ")}),o}var Mf=function(l,c,o){var m=l.key+"-"+c.name;(o===!1||XS===!1)&&l.registered[m]===void 0&&(l.registered[m]=c.styles)},Av=function(l,c,o){Mf(l,c,o);var m=l.key+"-"+c.name;if(l.inserted[c.name]===void 0){var p=c;do l.insert(c===p?"."+m:"",p,l.sheet,!0),p=p.next;while(p!==void 0)}};function $S(i){for(var l=0,c,o=0,m=i.length;m>=4;++o,m-=4)c=i.charCodeAt(o)&255|(i.charCodeAt(++o)&255)<<8|(i.charCodeAt(++o)&255)<<16|(i.charCodeAt(++o)&255)<<24,c=(c&65535)*1540483477+((c>>>16)*59797<<16),c^=c>>>24,l=(c&65535)*1540483477+((c>>>16)*59797<<16)^(l&65535)*1540483477+((l>>>16)*59797<<16);switch(m){case 3:l^=(i.charCodeAt(o+2)&255)<<16;case 2:l^=(i.charCodeAt(o+1)&255)<<8;case 1:l^=i.charCodeAt(o)&255,l=(l&65535)*1540483477+((l>>>16)*59797<<16)}return l^=l>>>13,l=(l&65535)*1540483477+((l>>>16)*59797<<16),((l^l>>>15)>>>0).toString(36)}var GS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},VS=/[A-Z]|^ms/g,QS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,wv=function(l){return l.charCodeAt(1)===45},Im=function(l){return l!=null&&typeof l!="boolean"},Cs=CS(function(i){return wv(i)?i:i.replace(VS,"-$&").toLowerCase()}),Zm=function(l,c){switch(l){case"animation":case"animationName":if(typeof c=="string")return c.replace(QS,function(o,m,p){return mn={name:m,styles:p,next:mn},m})}return GS[l]!==1&&!wv(l)&&typeof c=="number"&&c!==0?c+"px":c};function Fr(i,l,c){if(c==null)return"";var o=c;if(o.__emotion_styles!==void 0)return o;switch(typeof c){case"boolean":return"";case"object":{var m=c;if(m.anim===1)return mn={name:m.name,styles:m.styles,next:mn},m.name;var p=c;if(p.styles!==void 0){var T=p.next;if(T!==void 0)for(;T!==void 0;)mn={name:T.name,styles:T.styles,next:mn},T=T.next;var f=p.styles+";";return f}return IS(i,l,c)}case"function":{if(i!==void 0){var d=mn,s=c(i);return mn=d,Fr(i,l,s)}break}}var g=c;if(l==null)return g;var w=l[g];return w!==void 0?w:g}function IS(i,l,c){var o="";if(Array.isArray(c))for(var m=0;m<c.length;m++)o+=Fr(i,l,c[m])+";";else for(var p in c){var T=c[p];if(typeof T!="object"){var f=T;l!=null&&l[f]!==void 0?o+=p+"{"+l[f]+"}":Im(f)&&(o+=Cs(p)+":"+Zm(p,f)+";")}else if(Array.isArray(T)&&typeof T[0]=="string"&&(l==null||l[T[0]]===void 0))for(var d=0;d<T.length;d++)Im(T[d])&&(o+=Cs(p)+":"+Zm(p,T[d])+";");else{var s=Fr(i,l,T);switch(p){case"animation":case"animationName":{o+=Cs(p)+":"+s+";";break}default:o+=p+"{"+s+"}"}}}return o}var Km=/label:\s*([^\s;{]+)\s*(;|$)/g,mn;function Cf(i,l,c){if(i.length===1&&typeof i[0]=="object"&&i[0]!==null&&i[0].styles!==void 0)return i[0];var o=!0,m="";mn=void 0;var p=i[0];if(p==null||p.raw===void 0)o=!1,m+=Fr(c,l,p);else{var T=p;m+=T[0]}for(var f=1;f<i.length;f++)if(m+=Fr(c,l,i[f]),o){var d=p;m+=d[f]}Km.lastIndex=0;for(var s="",g;(g=Km.exec(m))!==null;)s+="-"+g[1];var w=$S(m)+s;return{name:w,styles:m,next:mn}}var ZS=function(l){return l()},KS=gm.useInsertionEffect?gm.useInsertionEffect:!1,xv=KS||ZS,Dv=yt.createContext(typeof HTMLElement<"u"?qS({key:"css"}):null);Dv.Provider;var Mv=function(l){return yt.forwardRef(function(c,o){var m=yt.useContext(Dv);return l(c,m,o)})},Cv=yt.createContext({}),oo={}.hasOwnProperty,vf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jv=function(l,c){var o={};for(var m in c)oo.call(c,m)&&(o[m]=c[m]);return o[vf]=l,o},kS=function(l){var c=l.cache,o=l.serialized,m=l.isStringTag;return Mf(c,o,m),xv(function(){return Av(c,o,m)}),null},JS=Mv(function(i,l,c){var o=i.css;typeof o=="string"&&l.registered[o]!==void 0&&(o=l.registered[o]);var m=i[vf],p=[o],T="";typeof i.className=="string"?T=Ov(l.registered,p,i.className):i.className!=null&&(T=i.className+" ");var f=Cf(p,void 0,yt.useContext(Cv));T+=l.key+"-"+f.name;var d={};for(var s in i)oo.call(i,s)&&s!=="css"&&s!==vf&&(d[s]=i[s]);return d.className=T,c&&(d.ref=c),yt.createElement(yt.Fragment,null,yt.createElement(kS,{cache:l,serialized:f,isStringTag:typeof m=="string"}),yt.createElement(m,d))}),Rv=JS,WS=Q.Fragment,le=function(l,c,o){return oo.call(c,"css")?Q.jsx(Rv,jv(l,c),o):Q.jsx(l,c,o)},km=function(l,c){var o=arguments;if(c==null||!oo.call(c,"css"))return yt.createElement.apply(void 0,o);var m=o.length,p=new Array(m);p[0]=Rv,p[1]=jv(l,c);for(var T=2;T<m;T++)p[T]=o[T];return yt.createElement.apply(null,p)};(function(i){var l;l||(l=i.JSX||(i.JSX={}))})(km||(km={}));function Nv(){for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return Cf(l)}function lt(){var i=Nv.apply(void 0,arguments),l="animation-"+i.name;return{name:l,styles:"@keyframes "+l+"{"+i.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var FS=function i(l){for(var c=l.length,o=0,m="";o<c;o++){var p=l[o];if(p!=null){var T=void 0;switch(typeof p){case"boolean":break;case"object":{if(Array.isArray(p))T=i(p);else{T="";for(var f in p)p[f]&&f&&(T&&(T+=" "),T+=f)}break}default:T=p}T&&(m&&(m+=" "),m+=T)}}return m};function t3(i,l,c){var o=[],m=Ov(i,o,c);return o.length<2?c:m+l(o)}var e3=function(l){var c=l.cache,o=l.serializedArr;return xv(function(){for(var m=0;m<o.length;m++)Av(c,o[m],!1)}),null},js=Mv(function(i,l){var c=[],o=function(){for(var d=arguments.length,s=new Array(d),g=0;g<d;g++)s[g]=arguments[g];var w=Cf(s,l.registered);return c.push(w),Mf(l,w,!1),l.key+"-"+w.name},m=function(){for(var d=arguments.length,s=new Array(d),g=0;g<d;g++)s[g]=arguments[g];return t3(l.registered,o,FS(s))},p={css:o,cx:m,theme:yt.useContext(Cv)},T=i.children(p);return yt.createElement(yt.Fragment,null,yt.createElement(e3,{cache:l,serializedArr:c}),T)}),n3=Object.defineProperty,a3=(i,l,c)=>l in i?n3(i,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):i[l]=c,bu=(i,l,c)=>a3(i,typeof l!="symbol"?l+"":l,c),gf=new Map,Su=new WeakMap,Jm=0,i3=void 0;function r3(i){return i?(Su.has(i)||(Jm+=1,Su.set(i,Jm.toString())),Su.get(i)):"0"}function l3(i){return Object.keys(i).sort().filter(l=>i[l]!==void 0).map(l=>`${l}_${l==="root"?r3(i.root):i[l]}`).toString()}function u3(i){const l=l3(i);let c=gf.get(l);if(!c){const o=new Map;let m;const p=new IntersectionObserver(T=>{T.forEach(f=>{var d;const s=f.isIntersecting&&m.some(g=>f.intersectionRatio>=g);i.trackVisibility&&typeof f.isVisible>"u"&&(f.isVisible=s),(d=o.get(f.target))==null||d.forEach(g=>{g(s,f)})})},i);m=p.thresholds||(Array.isArray(i.threshold)?i.threshold:[i.threshold||0]),c={id:l,observer:p,elements:o},gf.set(l,c)}return c}function zv(i,l,c={},o=i3){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const d=i.getBoundingClientRect();return l(o,{isIntersecting:o,target:i,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:m,observer:p,elements:T}=u3(c),f=T.get(i)||[];return T.has(i)||T.set(i,f),f.push(l),p.observe(i),function(){f.splice(f.indexOf(l),1),f.length===0&&(T.delete(i),p.unobserve(i)),T.size===0&&(p.disconnect(),gf.delete(m))}}function o3(i){return typeof i.children!="function"}var Wm=class extends yt.Component{constructor(i){super(i),bu(this,"node",null),bu(this,"_unobserveCb",null),bu(this,"handleNode",l=>{this.node&&(this.unobserve(),!l&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=l||null,this.observeNode()}),bu(this,"handleChange",(l,c)=>{l&&this.props.triggerOnce&&this.unobserve(),o3(this.props)||this.setState({inView:l,entry:c}),this.props.onChange&&this.props.onChange(l,c)}),this.state={inView:!!i.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:i,root:l,rootMargin:c,trackVisibility:o,delay:m,fallbackInView:p}=this.props;this._unobserveCb=zv(this.node,this.handleChange,{threshold:i,root:l,rootMargin:c,trackVisibility:o,delay:m},p)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:i}=this.props;if(typeof i=="function"){const{inView:b,entry:_}=this.state;return i({inView:b,entry:_,ref:this.handleNode})}const{as:l,triggerOnce:c,threshold:o,root:m,rootMargin:p,onChange:T,skip:f,trackVisibility:d,delay:s,initialInView:g,fallbackInView:w,...S}=this.props;return yt.createElement(l||"div",{ref:this.handleNode,...S},i)}};function Uv({threshold:i,delay:l,trackVisibility:c,rootMargin:o,root:m,triggerOnce:p,skip:T,initialInView:f,fallbackInView:d,onChange:s}={}){var g;const[w,S]=yt.useState(null),b=yt.useRef(s),[_,A]=yt.useState({inView:!!f,entry:void 0});b.current=s,yt.useEffect(()=>{if(T||!w)return;let y;return y=zv(w,(O,v)=>{A({inView:O,entry:v}),b.current&&b.current(O,v),v.isIntersecting&&p&&y&&(y(),y=void 0)},{root:m,rootMargin:o,threshold:i,trackVisibility:c,delay:l},d),()=>{y&&y()}},[Array.isArray(i)?i.toString():i,w,m,o,p,T,c,d,l]);const C=(g=_.entry)==null?void 0:g.target,B=yt.useRef(void 0);!w&&C&&!p&&!T&&B.current!==C&&(B.current=C,A({inView:!!f,entry:void 0}));const R=[S,_.inView,_.entry];return R.ref=R[0],R.inView=R[1],R.entry=R[2],R}var Rs={exports:{}},Nt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function c3(){if(Fm)return Nt;Fm=1;var i=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),T=Symbol.for("react.context"),f=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),_;_=Symbol.for("react.module.reference");function A(C){if(typeof C=="object"&&C!==null){var B=C.$$typeof;switch(B){case i:switch(C=C.type,C){case c:case m:case o:case s:case g:return C;default:switch(C=C&&C.$$typeof,C){case f:case T:case d:case S:case w:case p:return C;default:return B}}case l:return B}}}return Nt.ContextConsumer=T,Nt.ContextProvider=p,Nt.Element=i,Nt.ForwardRef=d,Nt.Fragment=c,Nt.Lazy=S,Nt.Memo=w,Nt.Portal=l,Nt.Profiler=m,Nt.StrictMode=o,Nt.Suspense=s,Nt.SuspenseList=g,Nt.isAsyncMode=function(){return!1},Nt.isConcurrentMode=function(){return!1},Nt.isContextConsumer=function(C){return A(C)===T},Nt.isContextProvider=function(C){return A(C)===p},Nt.isElement=function(C){return typeof C=="object"&&C!==null&&C.$$typeof===i},Nt.isForwardRef=function(C){return A(C)===d},Nt.isFragment=function(C){return A(C)===c},Nt.isLazy=function(C){return A(C)===S},Nt.isMemo=function(C){return A(C)===w},Nt.isPortal=function(C){return A(C)===l},Nt.isProfiler=function(C){return A(C)===m},Nt.isStrictMode=function(C){return A(C)===o},Nt.isSuspense=function(C){return A(C)===s},Nt.isSuspenseList=function(C){return A(C)===g},Nt.isValidElementType=function(C){return typeof C=="string"||typeof C=="function"||C===c||C===m||C===o||C===s||C===g||C===b||typeof C=="object"&&C!==null&&(C.$$typeof===S||C.$$typeof===w||C.$$typeof===p||C.$$typeof===T||C.$$typeof===d||C.$$typeof===_||C.getModuleId!==void 0)},Nt.typeOf=A,Nt}var tp;function s3(){return tp||(tp=1,Rs.exports=c3()),Rs.exports}var f3=s3();lt`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;lt`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;lt`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;lt`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;lt`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;lt`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;lt`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;lt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;lt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;lt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;lt`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;lt`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;lt`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const d3=lt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,h3=lt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,m3=lt`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,p3=lt`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,v3=lt`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jf=lt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,g3=lt`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,y3=lt`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,b3=lt`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S3=lt`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_3=lt`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T3=lt`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E3=lt`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function O3({duration:i=1e3,delay:l=0,timingFunction:c="ease",keyframes:o=jf,iterationCount:m=1}){return Nv`
    animation-duration: ${i}ms;
    animation-timing-function: ${c};
    animation-delay: ${l}ms;
    animation-name: ${o};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${m};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function A3(i){return i==null}function w3(i){return typeof i=="string"||typeof i=="number"||typeof i=="boolean"}function Lv(i,l){return c=>c?i():l()}function tl(i){return Lv(i,()=>null)}function yf(i){return tl(()=>({opacity:0}))(i)}const Bv=i=>{const{cascade:l=!1,damping:c=.5,delay:o=0,duration:m=1e3,fraction:p=0,keyframes:T=jf,triggerOnce:f=!1,className:d,style:s,childClassName:g,childStyle:w,children:S,onVisibilityChange:b}=i,_=yt.useMemo(()=>O3({keyframes:T,duration:m}),[m,T]);return A3(S)?null:w3(S)?le(D3,{...i,animationStyles:_,children:String(S)}):f3.isFragment(S)?le(qv,{...i,animationStyles:_}):le(WS,{children:yt.Children.map(S,(A,C)=>{if(!yt.isValidElement(A))return null;const B=o+(l?C*m*c:0);switch(A.type){case"ol":case"ul":return le(js,{children:({cx:R})=>le(A.type,{...A.props,className:R(d,A.props.className),style:Object.assign({},s,A.props.style),children:le(Bv,{...i,children:A.props.children})})});case"li":return le(Wm,{threshold:p,triggerOnce:f,onChange:b,children:({inView:R,ref:y})=>le(js,{children:({cx:O})=>le(A.type,{...A.props,ref:y,className:O(g,A.props.className),css:tl(()=>_)(R),style:Object.assign({},w,A.props.style,yf(!R),{animationDelay:B+"ms"})})})});default:return le(Wm,{threshold:p,triggerOnce:f,onChange:b,children:({inView:R,ref:y})=>le("div",{ref:y,className:d,css:tl(()=>_)(R),style:Object.assign({},s,yf(!R),{animationDelay:B+"ms"}),children:le(js,{children:({cx:O})=>le(A.type,{...A.props,className:O(g,A.props.className),style:Object.assign({},w,A.props.style)})})})})}})})},x3={display:"inline-block",whiteSpace:"pre"},D3=i=>{const{animationStyles:l,cascade:c=!1,damping:o=.5,delay:m=0,duration:p=1e3,fraction:T=0,triggerOnce:f=!1,className:d,style:s,children:g,onVisibilityChange:w}=i,{ref:S,inView:b}=Uv({triggerOnce:f,threshold:T,onChange:w});return Lv(()=>le("div",{ref:S,className:d,style:Object.assign({},s,x3),children:g.split("").map((_,A)=>le("span",{css:tl(()=>l)(b),style:{animationDelay:m+A*p*o+"ms"},children:_},A))}),()=>le(qv,{...i,children:g}))(c)},qv=i=>{const{animationStyles:l,fraction:c=0,triggerOnce:o=!1,className:m,style:p,children:T,onVisibilityChange:f}=i,{ref:d,inView:s}=Uv({triggerOnce:o,threshold:c,onChange:f});return le("div",{ref:d,className:m,css:tl(()=>l)(s),style:Object.assign({},p,yf(!s)),children:T})};lt`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;lt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;lt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;lt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;lt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;lt`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;lt`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;lt`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;lt`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;lt`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const M3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,C3=lt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,j3=lt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,R3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,N3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,z3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,U3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,L3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,B3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,q3=lt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,H3=lt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Y3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,P3=lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function X3(i,l,c){switch(c){case"bottom-left":return l?C3:h3;case"bottom-right":return l?j3:m3;case"down":return i?l?N3:v3:l?R3:p3;case"left":return i?l?U3:g3:l?z3:jf;case"right":return i?l?B3:b3:l?L3:y3;case"top-left":return l?q3:S3;case"top-right":return l?H3:_3;case"up":return i?l?P3:E3:l?Y3:T3;default:return l?M3:d3}}const $3=i=>{const{big:l=!1,direction:c,reverse:o=!1,...m}=i,p=yt.useMemo(()=>X3(l,o,c),[l,c,o]);return le(Bv,{keyframes:p,...m})};lt`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;lt`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;lt`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;lt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;lt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;lt`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;lt`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;lt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;lt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;lt`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;lt`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;lt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;lt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;lt`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;lt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;lt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;lt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;lt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;lt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;lt`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;lt`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;lt`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;lt`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;lt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;lt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;lt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;lt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;lt`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;lt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;lt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;lt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;lt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;lt`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;lt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;lt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;lt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;lt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const G3=()=>Q.jsx(Ym.StyledSkills,{id:"skills",children:Q.jsxs(nl,{children:[Q.jsx(io,{title:"Skills"}),Q.jsx(Ym.GridWrapper,{children:Q.jsx($3,{cascade:!0,damping:.1,direction:"up",children:lS.map(i=>yt.createElement(za,{...i,key:i.iconId}))})})]})}),V3=bt.div`
    display: flex;
    margin: 0 auto 80px;
    border-radius: 24px;
    overflow: hidden;
    min-height: 524px;
    max-width: 992px;
    
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);

    &:nth-of-type(even) {
        flex-direction: row-reverse;
    }
    
    
    @media ${ft.media.desktopXl} {
        max-width: 100%;
    }

    @media ${ft.media.tablet} {
        flex-direction: column-reverse;
        &:nth-of-type(even) {
            flex-direction: column-reverse;
        }
    }
`,Q3=bt.div`
    background-color: ${ft.colors.secondaryBg};
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${ft.media.tablet} {
        width: 100%;
    }
`,I3=bt.div`
    padding: 50px;
    ${kr} {
        border-radius: 24px;
    }

    @media ${ft.media.tablet} {
        padding: 130px 30px;
    }
`,Z3=bt.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
`,K3=bt.p`
    font-size: 18px;
    margin: 24px 0 30px;
`,k3=bt.picture`
    width: 50%;
    source, img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media ${ft.media.tablet} {
        width: 100%;
        min-height: 524px;
        source, img {
            min-height: 524px;
        }
    }
`,Oi={StyledProject:V3,ProjectContent:Q3,ContentWrapper:I3,ProjectTitle:Z3,ProjectDescription:K3,ProjectImg:k3},J3=({title:i,description:l,imageSrc:c,imageSrcWebp:o})=>Q.jsxs(Oi.StyledProject,{children:[Q.jsx(Oi.ProjectContent,{children:Q.jsxs(Oi.ContentWrapper,{children:[Q.jsx(Oi.ProjectTitle,{children:i}),Q.jsx(Oi.ProjectDescription,{children:l}),Q.jsx(kr,{href:"#",$outlined:!0,children:"View Project"})]})}),Q.jsxs(Oi.ProjectImg,{children:[Q.jsx("source",{srcSet:o,type:"image/webp"}),Q.jsx("img",{src:c,alt:"project photo"})]})]}),W3=""+new URL("project1-Cnqaohjm.jpeg",import.meta.url).href,F3=""+new URL("project2-Cr1DV7xa.jpeg",import.meta.url).href,t_=""+new URL("project3-DnS3B1Ix.jpeg",import.meta.url).href,e_=""+new URL("project1-CX-hyiKO.webp",import.meta.url).href,n_=""+new URL("project2-BijT9l8I.webp",import.meta.url).href,a_=""+new URL("project3-Cs3zwRPk.webp",import.meta.url).href,i_=[{id:1,title:"Project Name1",description:"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",imageSrc:W3,imageSrcWebp:e_},{id:2,title:"Project Name2",description:"What was your role, your deliverables, if the project was personal, freelancing.",imageSrc:F3,imageSrcWebp:n_},{id:3,title:"Project Name3",description:"You can also add in this description the type of the project, if it was for web, mobile, electron.",imageSrc:t_,imageSrcWebp:a_}],r_=bt.section`
    position: relative;
    background-color: ${ft.colors.primaryBg};
`,l_={StyledProjects:r_},u_=()=>Q.jsx(l_.StyledProjects,{id:"projects",children:Q.jsxs(nl,{children:[Q.jsx(io,{title:"Projects"}),i_.map(i=>yt.createElement(J3,{...i,key:i.id}))]})});var Ns={},zs={},Us={},_u={},Ze={},ep;function La(){if(ep)return Ze;ep=1,Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.TraceDirectionKey=Ze.Direction=Ze.Axis=void 0;var i;Ze.TraceDirectionKey=i,function(o){o.NEGATIVE="NEGATIVE",o.POSITIVE="POSITIVE",o.NONE="NONE"}(i||(Ze.TraceDirectionKey=i={}));var l;Ze.Direction=l,function(o){o.TOP="TOP",o.LEFT="LEFT",o.RIGHT="RIGHT",o.BOTTOM="BOTTOM",o.NONE="NONE"}(l||(Ze.Direction=l={}));var c;return Ze.Axis=c,function(o){o.X="x",o.Y="y"}(c||(Ze.Axis=c={})),Ze}var np;function Hv(){if(np)return _u;np=1,Object.defineProperty(_u,"__esModule",{value:!0}),_u.calculateDirection=l;var i=La();function l(c){var o,m=i.TraceDirectionKey.NEGATIVE,p=i.TraceDirectionKey.POSITIVE,T=c[c.length-1],f=c[c.length-2]||0;return c.every(function(d){return d===0})?i.TraceDirectionKey.NONE:(o=T>f?p:m,T===0&&(o=f<0?p:m),o)}return _u}var Tu={},tn={},ap;function Rf(){if(ap)return tn;ap=1,Object.defineProperty(tn,"__esModule",{value:!0}),tn.resolveAxisDirection=tn.getDirectionValue=tn.getDirectionKey=tn.getDifference=void 0;var i=La(),l=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=Object.keys(T).toString();switch(f){case i.TraceDirectionKey.POSITIVE:return i.TraceDirectionKey.POSITIVE;case i.TraceDirectionKey.NEGATIVE:return i.TraceDirectionKey.NEGATIVE;default:return i.TraceDirectionKey.NONE}};tn.getDirectionKey=l;var c=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return T[T.length-1]||0};tn.getDirectionValue=c;var o=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Math.abs(T-f)};tn.getDifference=o;var m=function(T,f){var d=i.Direction.LEFT,s=i.Direction.RIGHT,g=i.Direction.NONE;return T===i.Axis.Y&&(d=i.Direction.BOTTOM,s=i.Direction.TOP),f===i.TraceDirectionKey.NEGATIVE&&(g=d),f===i.TraceDirectionKey.POSITIVE&&(g=s),g};return tn.resolveAxisDirection=m,tn}var ip;function Yv(){if(ip)return Tu;ip=1,Object.defineProperty(Tu,"__esModule",{value:!0}),Tu.calculateDirectionDelta=c;var i=La(),l=Rf();function c(o){for(var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,p=o.length,T=p-1,f=i.TraceDirectionKey.NONE;T>=0;T--){var d=o[T],s=(0,l.getDirectionKey)(d),g=(0,l.getDirectionValue)(d[s]),w=o[T-1]||{},S=(0,l.getDirectionKey)(w),b=(0,l.getDirectionValue)(w[S]),_=(0,l.getDifference)(g,b);if(_>=m){f=s;break}else f=S}return f}return Tu}var Eu={},rp;function Pv(){if(rp)return Eu;rp=1,Object.defineProperty(Eu,"__esModule",{value:!0}),Eu.calculateDuration=i;function i(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return l?c-l:0}return Eu}var Ou={},lp;function o_(){if(lp)return Ou;lp=1,Object.defineProperty(Ou,"__esModule",{value:!0}),Ou.calculateMovingPosition=i;function i(l){if("changedTouches"in l){var c=l.changedTouches&&l.changedTouches[0];return{x:c&&c.clientX,y:c&&c.clientY}}return{x:l.clientX,y:l.clientY}}return Ou}var Au={},wu={},up;function Xv(){if(up)return wu;up=1,Object.defineProperty(wu,"__esModule",{value:!0}),wu.updateTrace=i;function i(l,c){var o=l[l.length-1];return o!==c&&l.push(c),l}return wu}var xu={},Du={},op;function $v(){if(op)return Du;op=1,Object.defineProperty(Du,"__esModule",{value:!0}),Du.calculateTraceDirections=c;var i=La();function l(o,m,p){return m in o?Object.defineProperty(o,m,{value:p,enumerable:!0,configurable:!0,writable:!0}):o[m]=p,o}function c(){for(var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=[],p=i.TraceDirectionKey.POSITIVE,T=i.TraceDirectionKey.NEGATIVE,f=0,d=[],s=i.TraceDirectionKey.NONE;f<o.length;f++){var g=o[f],w=o[f-1];if(d.length){var S=g>w?p:T;s===i.TraceDirectionKey.NONE&&(s=S),S===s?d.push(g):(m.push(l({},s,d.slice())),d=[],d.push(g),s=S)}else g!==0&&(s=g>0?p:T),d.push(g)}return d.length&&m.push(l({},s,d)),m}return Du}var cp;function Gv(){if(cp)return xu;cp=1,Object.defineProperty(xu,"__esModule",{value:!0}),xu.resolveDirection=p;var i=Hv(),l=$v(),c=Yv(),o=Rf(),m=La();function p(T){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:m.Axis.X,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(d){var s=(0,l.calculateTraceDirections)(T),g=(0,c.calculateDirectionDelta)(s,d);return(0,o.resolveAxisDirection)(f,g)}var w=(0,i.calculateDirection)(T);return(0,o.resolveAxisDirection)(f,w)}return xu}var Mu={},sp;function Vv(){if(sp)return Mu;sp=1,Object.defineProperty(Mu,"__esModule",{value:!0}),Mu.calculateVelocity=i;function i(l,c,o){var m=Math.sqrt(l*l+c*c);return m/(o||1)}return Mu}var fp;function c_(){if(fp)return Au;fp=1,Object.defineProperty(Au,"__esModule",{value:!0}),Au.calculatePosition=p;var i=Xv(),l=Gv(),c=Pv(),o=Vv(),m=La();function p(T,f){var d=T.start,s=T.x,g=T.y,w=T.traceX,S=T.traceY,b=f.rotatePosition,_=f.directionDelta,A=b.x-s,C=g-b.y,B=Math.abs(A),R=Math.abs(C);(0,i.updateTrace)(w,A),(0,i.updateTrace)(S,C);var y=(0,l.resolveDirection)(w,m.Axis.X,_),O=(0,l.resolveDirection)(S,m.Axis.Y,_),v=(0,c.calculateDuration)(d,Date.now()),x=(0,o.calculateVelocity)(B,R,v);return{absX:B,absY:R,deltaX:A,deltaY:C,directionX:y,directionY:O,duration:v,positionX:b.x,positionY:b.y,velocity:x}}return Au}var Pr={},dp;function s_(){if(dp)return Pr;dp=1,Object.defineProperty(Pr,"__esModule",{value:!0}),Pr.checkIsMoreThanSingleTouches=void 0;var i=function(c){return!!(c.touches&&c.touches.length>1)};return Pr.checkIsMoreThanSingleTouches=i,Pr}var Ai={},Cu={},hp;function Qv(){if(hp)return Cu;hp=1,Object.defineProperty(Cu,"__esModule",{value:!0}),Cu.createOptions=i;function i(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.defineProperty(l,"passive",{get:function(){return this.isPassiveSupported=!0,!0},enumerable:!0}),l}return Cu}var mp;function f_(){if(mp)return Ai;mp=1,Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.checkIsPassiveSupported=l,Ai.noop=void 0;var i=Qv();function l(o){if(typeof o=="boolean")return o;var m={isPassiveSupported:o};try{var p=(0,i.createOptions)(m);window.addEventListener("checkIsPassiveSupported",c,p),window.removeEventListener("checkIsPassiveSupported",c,p)}catch{}return m.isPassiveSupported}var c=function(){};return Ai.noop=c,Ai}var Xr={},pp;function d_(){if(pp)return Xr;pp=1,Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.checkIsTouchEventsSupported=void 0;function i(c){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},i(c)}var l=function(){return(typeof window>"u"?"undefined":i(window))==="object"&&("ontouchstart"in window||!!window.navigator.maxTouchPoints)};return Xr.checkIsTouchEventsSupported=l,Xr}var $r={},vp;function h_(){if(vp)return $r;vp=1,Object.defineProperty($r,"__esModule",{value:!0}),$r.getInitialState=void 0;function i(m,p){var T=Object.keys(m);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(m);p&&(f=f.filter(function(d){return Object.getOwnPropertyDescriptor(m,d).enumerable})),T.push.apply(T,f)}return T}function l(m){for(var p=1;p<arguments.length;p++){var T=arguments[p]!=null?arguments[p]:{};p%2?i(Object(T),!0).forEach(function(f){c(m,f,T[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(T)):i(Object(T)).forEach(function(f){Object.defineProperty(m,f,Object.getOwnPropertyDescriptor(T,f))})}return m}function c(m,p,T){return p in m?Object.defineProperty(m,p,{value:T,enumerable:!0,configurable:!0,writable:!0}):m[p]=T,m}var o=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return l({x:0,y:0,start:0,isSwiping:!1,traceX:[],traceY:[]},p)};return $r.getInitialState=o,$r}var Gr={},gp;function m_(){if(gp)return Gr;gp=1,Object.defineProperty(Gr,"__esModule",{value:!0}),Gr.getInitialProps=void 0;function i(m,p){var T=Object.keys(m);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(m);p&&(f=f.filter(function(d){return Object.getOwnPropertyDescriptor(m,d).enumerable})),T.push.apply(T,f)}return T}function l(m){for(var p=1;p<arguments.length;p++){var T=arguments[p]!=null?arguments[p]:{};p%2?i(Object(T),!0).forEach(function(f){c(m,f,T[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(T)):i(Object(T)).forEach(function(f){Object.defineProperty(m,f,Object.getOwnPropertyDescriptor(T,f))})}return m}function c(m,p,T){return p in m?Object.defineProperty(m,p,{value:T,enumerable:!0,configurable:!0,writable:!0}):m[p]=T,m}var o=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return l({element:null,target:null,delta:10,directionDelta:0,rotationAngle:0,mouseTrackingEnabled:!1,touchTrackingEnabled:!0,preventDefaultTouchmoveEvent:!1,preventTrackingOnMouseleave:!1},p)};return Gr.getInitialProps=o,Gr}var ju={},yp;function p_(){if(yp)return ju;yp=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.getOptions=i;function i(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return l?{passive:!1}:{}}return ju}var Ru={},bp;function v_(){if(bp)return Ru;bp=1,Object.defineProperty(Ru,"__esModule",{value:!0}),Ru.rotateByAngle=i;function i(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(c===0)return l;var o=l.x,m=l.y,p=Math.PI/180*c,T=o*Math.cos(p)+m*Math.sin(p),f=m*Math.cos(p)-o*Math.sin(p);return{x:T,y:f}}return Ru}var Sp;function g_(){return Sp||(Sp=1,function(i){Object.defineProperty(i,"__esModule",{value:!0});var l=Hv();Object.keys(l).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===l[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return l[y]}})});var c=Yv();Object.keys(c).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===c[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return c[y]}})});var o=Pv();Object.keys(o).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===o[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return o[y]}})});var m=o_();Object.keys(m).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===m[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return m[y]}})});var p=c_();Object.keys(p).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===p[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return p[y]}})});var T=$v();Object.keys(T).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===T[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return T[y]}})});var f=Vv();Object.keys(f).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===f[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return f[y]}})});var d=s_();Object.keys(d).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===d[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return d[y]}})});var s=f_();Object.keys(s).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===s[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return s[y]}})});var g=d_();Object.keys(g).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===g[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return g[y]}})});var w=Rf();Object.keys(w).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===w[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return w[y]}})});var S=Qv();Object.keys(S).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===S[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return S[y]}})});var b=h_();Object.keys(b).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===b[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return b[y]}})});var _=m_();Object.keys(_).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===_[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return _[y]}})});var A=p_();Object.keys(A).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===A[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return A[y]}})});var C=Gv();Object.keys(C).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===C[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return C[y]}})});var B=v_();Object.keys(B).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===B[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return B[y]}})});var R=Xv();Object.keys(R).forEach(function(y){y==="default"||y==="__esModule"||y in i&&i[y]===R[y]||Object.defineProperty(i,y,{enumerable:!0,get:function(){return R[y]}})})}(Us)),Us}var _p;function y_(){return _p||(_p=1,function(i){function l(S){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},l(S)}Object.defineProperty(i,"__esModule",{value:!0});var c={};i.default=void 0;var o=T(g_()),m=La();Object.keys(m).forEach(function(S){S==="default"||S==="__esModule"||Object.prototype.hasOwnProperty.call(c,S)||S in i&&i[S]===m[S]||Object.defineProperty(i,S,{enumerable:!0,get:function(){return m[S]}})});function p(S){if(typeof WeakMap!="function")return null;var b=new WeakMap,_=new WeakMap;return(p=function(C){return C?_:b})(S)}function T(S,b){if(S&&S.__esModule)return S;if(S===null||l(S)!=="object"&&typeof S!="function")return{default:S};var _=p(b);if(_&&_.has(S))return _.get(S);var A={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in S)if(B!=="default"&&Object.prototype.hasOwnProperty.call(S,B)){var R=C?Object.getOwnPropertyDescriptor(S,B):null;R&&(R.get||R.set)?Object.defineProperty(A,B,R):A[B]=S[B]}return A.default=S,_&&_.set(S,A),A}function f(S,b){if(!(S instanceof b))throw new TypeError("Cannot call a class as a function")}function d(S,b){for(var _=0;_<b.length;_++){var A=b[_];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(S,A.key,A)}}function s(S,b,_){return b&&d(S.prototype,b),_&&d(S,_),Object.defineProperty(S,"prototype",{writable:!1}),S}function g(S,b,_){return b in S?Object.defineProperty(S,b,{value:_,enumerable:!0,configurable:!0,writable:!0}):S[b]=_,S}var w=function(){function S(b){f(this,S),g(this,"state",void 0),g(this,"props",void 0),this.state=o.getInitialState(),this.props=o.getInitialProps(b),this.handleSwipeStart=this.handleSwipeStart.bind(this),this.handleSwipeMove=this.handleSwipeMove.bind(this),this.handleSwipeEnd=this.handleSwipeEnd.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}return s(S,[{key:"init",value:function(){this.setupTouchListeners(),this.setupMouseListeners()}},{key:"update",value:function(_){var A=this.props,C=Object.assign({},A,_);if(A.element!==C.element||A.target!==C.target){this.destroy(),this.props=C,this.init();return}this.props=C,(A.mouseTrackingEnabled!==C.mouseTrackingEnabled||A.preventTrackingOnMouseleave!==C.preventTrackingOnMouseleave)&&(this.cleanupMouseListeners(),C.mouseTrackingEnabled?this.setupMouseListeners():this.cleanupMouseListeners()),A.touchTrackingEnabled!==C.touchTrackingEnabled&&(this.cleanupTouchListeners(),C.touchTrackingEnabled?this.setupTouchListeners():this.cleanupTouchListeners())}},{key:"destroy",value:function(){this.cleanupMouseListeners(),this.cleanupTouchListeners(),this.state=o.getInitialState(),this.props=o.getInitialProps()}},{key:"setupTouchListeners",value:function(){var _=this.props,A=_.element,C=_.target,B=_.touchTrackingEnabled;if(A&&B){var R=C||A,y=o.checkIsPassiveSupported(),O=o.getOptions(y);R.addEventListener("touchstart",this.handleSwipeStart,O),R.addEventListener("touchmove",this.handleSwipeMove,O),R.addEventListener("touchend",this.handleSwipeEnd,O)}}},{key:"cleanupTouchListeners",value:function(){var _=this.props,A=_.element,C=_.target,B=C||A;B&&(B.removeEventListener("touchstart",this.handleSwipeStart),B.removeEventListener("touchmove",this.handleSwipeMove),B.removeEventListener("touchend",this.handleSwipeEnd))}},{key:"setupMouseListeners",value:function(){var _=this.props,A=_.element,C=_.mouseTrackingEnabled,B=_.preventTrackingOnMouseleave;C&&A&&(A.addEventListener("mousedown",this.handleMouseDown),A.addEventListener("mousemove",this.handleMouseMove),A.addEventListener("mouseup",this.handleMouseUp),B&&A.addEventListener("mouseleave",this.handleMouseLeave))}},{key:"cleanupMouseListeners",value:function(){var _=this.props.element;_&&(_.removeEventListener("mousedown",this.handleMouseDown),_.removeEventListener("mousemove",this.handleMouseMove),_.removeEventListener("mouseup",this.handleMouseUp),_.removeEventListener("mouseleave",this.handleMouseLeave))}},{key:"getEventData",value:function(_){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{directionDelta:0},C=this.props.rotationAngle,B=A.directionDelta,R=o.calculateMovingPosition(_),y=o.rotateByAngle(R,C);return o.calculatePosition(this.state,{rotatePosition:y,directionDelta:B})}},{key:"handleSwipeStart",value:function(_){if(!o.checkIsMoreThanSingleTouches(_)){var A=this.props.rotationAngle,C=o.calculateMovingPosition(_),B=o.rotateByAngle(C,A),R=B.x,y=B.y;this.state=o.getInitialState({isSwiping:!1,start:Date.now(),x:R,y})}}},{key:"handleSwipeMove",value:function(_){var A=this.state,C=A.x,B=A.y,R=A.isSwiping;if(!(!C||!B||o.checkIsMoreThanSingleTouches(_))){var y=this.props.directionDelta||0,O=this.getEventData(_,{directionDelta:y}),v=O.absX,x=O.absY,D=O.deltaX,P=O.deltaY,H=O.directionX,K=O.directionY,V=O.duration,z=O.velocity,I=this.props,W=I.delta,F=I.preventDefaultTouchmoveEvent,Y=I.onSwipeStart,at=I.onSwiping;_.cancelable&&F&&_.preventDefault(),!(v<Number(W)&&x<Number(W)&&!R)&&(Y&&!R&&Y(_,{deltaX:D,deltaY:P,absX:v,absY:x,directionX:H,directionY:K,duration:V,velocity:z}),this.state.isSwiping=!0,at&&at(_,{deltaX:D,deltaY:P,absX:v,absY:x,directionX:H,directionY:K,duration:V,velocity:z}))}}},{key:"handleSwipeEnd",value:function(_){var A=this.props,C=A.onSwiped,B=A.onTap;if(this.state.isSwiping){var R=this.props.directionDelta||0,y=this.getEventData(_,{directionDelta:R});C&&C(_,y)}else{var O=this.getEventData(_);B&&B(_,O)}this.state=o.getInitialState()}},{key:"handleMouseDown",value:function(_){var A=this.props.target;A?A===_.target&&this.handleSwipeStart(_):this.handleSwipeStart(_)}},{key:"handleMouseMove",value:function(_){this.handleSwipeMove(_)}},{key:"handleMouseUp",value:function(_){var A=this.state.isSwiping,C=this.props.target;C?(C===_.target||A)&&this.handleSwipeEnd(_):this.handleSwipeEnd(_)}},{key:"handleMouseLeave",value:function(_){var A=this.state.isSwiping;A&&this.handleSwipeEnd(_)}}],[{key:"isTouchEventsSupported",value:function(){return o.checkIsTouchEventsSupported()}}]),S}();i.default=w}(zs)),zs}var Ls={},Bs={},Tp;function Un(){return Tp||(Tp=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.Modifiers=i.Classnames=i.AutoplayDirection=i.ControlsStrategy=i.AutoPlayStrategy=i.AnimationType=i.EventType=void 0,function(l){l.ACTION="action",l.INIT="init",l.RESIZE="resize",l.UPDATE="update"}(i.EventType||(i.EventType={})),function(l){l.FADEOUT="fadeout",l.SLIDE="slide"}(i.AnimationType||(i.AnimationType={})),function(l){l.DEFAULT="default",l.ALL="all",l.ACTION="action",l.NONE="none"}(i.AutoPlayStrategy||(i.AutoPlayStrategy={})),function(l){l.DEFAULT="default",l.ALTERNATE="alternate",l.RESPONSIVE="responsive"}(i.ControlsStrategy||(i.ControlsStrategy={})),function(l){l.RTL="rtl",l.LTR="ltr"}(i.AutoplayDirection||(i.AutoplayDirection={})),function(l){l.ANIMATED="animated animated-out fadeOut",l.ROOT="alice-carousel",l.WRAPPER="alice-carousel__wrapper",l.STAGE="alice-carousel__stage",l.STAGE_ITEM="alice-carousel__stage-item",l.DOTS="alice-carousel__dots",l.DOTS_ITEM="alice-carousel__dots-item",l.PLAY_BTN="alice-carousel__play-btn",l.PLAY_BTN_ITEM="alice-carousel__play-btn-item",l.PLAY_BTN_WRAPPER="alice-carousel__play-btn-wrapper",l.SLIDE_INFO="alice-carousel__slide-info",l.SLIDE_INFO_ITEM="alice-carousel__slide-info-item",l.BUTTON_PREV="alice-carousel__prev-btn",l.BUTTON_PREV_WRAPPER="alice-carousel__prev-btn-wrapper",l.BUTTON_PREV_ITEM="alice-carousel__prev-btn-item",l.BUTTON_NEXT="alice-carousel__next-btn",l.BUTTON_NEXT_WRAPPER="alice-carousel__next-btn-wrapper",l.BUTTON_NEXT_ITEM="alice-carousel__next-btn-item"}(i.Classnames||(i.Classnames={})),function(l){l.ACTIVE="__active",l.INACTIVE="__inactive",l.CLONED="__cloned",l.CUSTOM="__custom",l.PAUSE="__pause",l.SEPARATOR="__separator",l.SSR="__ssr",l.TARGET="__target"}(i.Modifiers||(i.Modifiers={}))}(Bs)),Bs}var Ep;function b_(){return Ep||(Ep=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.defaultProps=void 0;var l=Un();i.defaultProps={activeIndex:0,animationDuration:400,animationEasingFunction:"ease",animationType:l.AnimationType.SLIDE,autoHeight:!1,autoWidth:!1,autoPlay:!1,autoPlayControls:!1,autoPlayDirection:l.AutoplayDirection.LTR,autoPlayInterval:400,autoPlayStrategy:l.AutoPlayStrategy.DEFAULT,children:void 0,controlsStrategy:l.ControlsStrategy.DEFAULT,disableButtonsControls:!1,disableDotsControls:!1,disableSlideInfo:!0,infinite:!1,innerWidth:void 0,items:void 0,keyboardNavigation:!1,mouseTracking:!1,syncStateOnPropsUpdate:!0,name:"",paddingLeft:0,paddingRight:0,responsive:void 0,swipeDelta:20,swipeExtraPadding:200,ssrSilentMode:!0,touchTracking:!0,touchMoveDefaultEvents:!0,onInitialized:function(){},onResized:function(){},onUpdated:function(){},onResizeEvent:void 0,onSlideChange:function(){},onSlideChanged:function(){}}}(Ls)),Ls}var qs={},Op;function S_(){return Op||(Op=1,function(i){var l=function(){return(l=Object.assign||function(p){for(var T,f=1,d=arguments.length;f<d;f++)for(var s in T=arguments[f])Object.prototype.hasOwnProperty.call(T,s)&&(p[s]=T[s]);return p}).apply(this,arguments)},c=function(p){return p&&p.__esModule?p:{default:p}},o=(Object.defineProperty(i,"__esModule",{value:!0}),c(rn()));function m(p){var T={xDown:null,xUp:null};return o.default.createElement("a",l({onClick:function(f){T.xDown!==T.xUp&&f.preventDefault()},onMouseDown:function(f){f.preventDefault(),T.xUp=null,T.xDown=f.clientX},onMouseUp:function(f){f.preventDefault(),T.xUp=f.clientX}},p),p.children)}i.default=m}(qs)),qs}var Hs={},Ys={},Ps={},Xs={},$s={},Gs={},Ap;function Iv(){return Ap||(Ap=1,function(i){var l=function(){return(l=Object.assign||function(m){for(var p,T=1,f=arguments.length;T<f;T++)for(var d in p=arguments[T])Object.prototype.hasOwnProperty.call(p,d)&&(m[d]=p[d]);return m}).apply(this,arguments)},c=(Object.defineProperty(i,"__esModule",{value:!0}),i.mapPositionCoords=i.mapPartialCoords=void 0,function(m){return m.map(function(p){return{width:p.width,position:0}})}),o=(i.mapPartialCoords=c,function(m,p){return p===void 0&&(p=0),m.map(function(T){return T.position>p?l(l({},T),{position:p}):T})});i.mapPositionCoords=o}(Gs)),Gs}var Vs={},wp;function co(){return wp||(wp=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.isVerticalTouchmoveDetected=i.getFadeoutAnimationPosition=i.getFadeoutAnimationIndex=i.getSwipeTouchendIndex=i.getSwipeTouchendPosition=i.getSwipeTransformationCursor=i.getTransformationItemIndex=i.getSwipeShiftValue=i.getItemCoords=i.getIsLeftDirection=i.shouldRecalculateSwipePosition=i.getSwipeLimitMax=i.getSwipeLimitMin=i.shouldCancelSlideAnimation=i.shouldRecalculateSlideIndex=i.getUpdateSlidePositionIndex=i.getActiveIndex=i.getStartIndex=i.getShiftIndex=void 0;var l=function(O,v){return(O=O===void 0?0:O)+(v=v===void 0?0:v)},c=(i.getShiftIndex=l,function(O,v){if(O===void 0&&(O=0),v=v===void 0?0:v){if(v<=O)return v-1;if(0<O)return O}return 0}),o=(i.getStartIndex=c,function(D){var v=D.startIndex,v=v===void 0?0:v,x=D.itemsCount,D=D.infinite;return D!==void 0&&D?v:(0,i.getStartIndex)(v,x===void 0?0:x)}),m=(i.getActiveIndex=o,function(O,v){return O<0?v-1:v<=O?0:O}),p=(i.getUpdateSlidePositionIndex=m,function(O,v){return O<0||v<=O}),T=(i.shouldRecalculateSlideIndex=p,function(O,v){return O<0||v<=O}),f=(i.shouldCancelSlideAnimation=T,function(D,H){var x=D.itemsOffset,D=D.transformationSet,D=D===void 0?[]:D,P=H.infinite,H=H.swipeExtraPadding;return P?(D[x===void 0?0:x]||{}).position:(P=(D[0]||{}).width,Math.min(H===void 0?0:H,P===void 0?0:P))}),d=(i.getSwipeLimitMin=f,function(V,D){var x=D.infinite,D=D.swipeExtraPadding,D=D===void 0?0:D,P=V.itemsCount,H=V.itemsOffset,K=V.itemsInSlide,K=K===void 0?1:K,V=V.transformationSet,V=V===void 0?[]:V;return x?(V[(P===void 0?1:P)+(0,i.getShiftIndex)(K,H===void 0?0:H)]||{}).position||0:(0,i.getItemCoords)(-K,V).position+D}),s=(i.getSwipeLimitMax=d,function(O,v,x){return-v<=O||Math.abs(O)>=x}),g=(i.shouldRecalculateSwipePosition=s,function(O){return(O=O===void 0?0:O)<0}),w=(i.getIsLeftDirection=g,function(O,v){return(v=v===void 0?[]:v).slice(O=O===void 0?0:O)[0]||{position:0,width:0}}),S=(i.getItemCoords=w,function(O,v){return O===void 0&&(O=0),v===void 0&&(v=[]),(0,i.getItemCoords)(O,v).position}),b=(i.getSwipeShiftValue=S,function(O,v){return v===void 0&&(v=0),(O=O===void 0?[]:O).findIndex(function(x){return x.position>=Math.abs(v)})}),_=(i.getTransformationItemIndex=b,function(O,v,x){return O===void 0&&(O=[]),v===void 0&&(v=0),x===void 0&&(x=0),O=(0,i.getTransformationItemIndex)(O,v),(0,i.getIsLeftDirection)(x)?O:O-1}),A=(i.getSwipeTransformationCursor=_,function(V,I,z){z===void 0&&(z=0);var D=V.infinite,P=V.autoWidth,H=V.isStageContentPartial,K=V.swipeAllowedPositionMax,V=V.transformationSet,z=(0,i.getSwipeTransformationCursor)(V,z,I),I=(0,i.getItemCoords)(z,V).position;if(!D){if(P&&H)return 0;if(K<I)return-K}return-I}),C=(i.getSwipeTouchendPosition=A,function(O,I){var x=I.transformationSet,D=I.itemsInSlide,P=I.itemsOffset,H=I.itemsCount,K=I.infinite,V=I.isStageContentPartial,z=I.activeIndex,I=I.translate3d;return K||!V&&I!==Math.abs(O)?(V=(0,i.getTransformationItemIndex)(x,O),K?V<(I=(0,i.getShiftIndex)(D,P))?H-D-P+V:I+H<=V?V-(I+H):V-I:V):z}),B=(i.getSwipeTouchendIndex=C,function(D){var v=D.infinite,x=D.activeIndex,D=D.itemsInSlide;return v?x+D:x}),R=(i.getFadeoutAnimationIndex=B,function(O,D){var x=D.activeIndex,D=D.stageWidth;return O<x?(x-O)*-D||0:(O-x)*D||0}),y=(i.getFadeoutAnimationPosition=R,function(O,v,x){return O<(x=x===void 0?0:x)||O<.1*v});i.isVerticalTouchmoveDetected=y}(Vs)),Vs}var xp;function Zv(){return xp||(xp=1,function(i){var l=function(){return(l=Object.assign||function(z){for(var I,W=1,F=arguments.length;W<F;W++)for(var Y in I=arguments[W])Object.prototype.hasOwnProperty.call(I,Y)&&(z[Y]=I[Y]);return z}).apply(this,arguments)},c=(Object.defineProperty(i,"__esModule",{value:!0}),i.getItemsInSlide=i.canUseDOM=i.getTransformMatrix=i.getTranslateXProperty=i.getTouchmoveTranslatePosition=i.getTranslate3dProperty=i.getRenderStageItemStyles=i.getRenderStageStyles=i.getTransitionProperty=i.getRenderWrapperStyles=i.animate=i.shouldHandleResizeEvent=i.getElementFirstChild=i.getElementCursor=i.getAutoheightProperty=i.getElementDimensions=i.getItemWidth=i.createDefaultTransformationSet=i.createAutowidthTransformationSet=i.isElement=i.createClones=i.getItemsOffset=i.getItemsCount=i.getSlides=void 0,Iv()),o=co(),m=function(W){var I=W.children,W=W.items;return I?I.length?I:[I]:W===void 0?[]:W},p=(i.getSlides=m,function(z){return(0,i.getSlides)(z).length}),T=(i.getItemsCount=p,function(F){var I=F.infinite,W=F.paddingRight,F=F.paddingLeft;return I&&(F||W)?1:0}),f=(i.getItemsOffset=T,function(z){var I,W,F,Y,at=(0,i.getSlides)(z);return z.infinite?(I=(0,i.getItemsCount)(z),Y=(0,i.getItemsOffset)(z),z=(0,i.getItemsInSlide)(I,z),F=Math.min(z,I)+Y,W=at.slice(0,F),F=at.slice(-F),Y&&z===I&&(Y=at[0],z=at.slice(-1)[0],F.unshift(z),W.push(Y)),F.concat(at,W)):at}),d=(i.createClones=f,function(z){try{return z instanceof Element||z instanceof HTMLDocument}catch{return!1}}),s=(i.isElement=d,function(z,I,W){I===void 0&&(I=0),W===void 0&&(W=!1);var F=0,Y=!0,at=[];return(0,i.isElement)(z)&&(at=Array.from((z==null?void 0:z.children)||[]).reduce(function(tt,N,et){var G=0,et=et-1,ut=tt[et],N=S(N==null?void 0:N.firstChild).width,N=N===void 0?0:N;return Y=(F+=N)<=I,ut&&(G=et==0?ut.width:ut.width+ut.position),tt.push({position:G,width:N}),tt},[]),W||(at=Y?(0,c.mapPartialCoords)(at):(z=F-I,(0,c.mapPositionCoords)(at,z)))),{coords:at,content:F,partial:Y}}),g=(i.createAutowidthTransformationSet=s,function(z,I,W,F){F===void 0&&(F=!1);var Y=0,at=!0,tt=[],rt=(0,i.getItemWidth)(I,W);return tt=z.reduce(function(M,G,N){var ut=0,N=M[N-1];return at=(Y+=rt)<=I,N&&(ut=rt+N.position||0),M.push({width:rt,position:ut}),M},[]),{coords:tt=F?tt:at?(0,c.mapPartialCoords)(tt):(W=Y-I,(0,c.mapPositionCoords)(tt,W)),content:Y,partial:at}}),w=(i.createDefaultTransformationSet=g,function(z,I){return 0<I?z/I:z});function S(z){return z&&z.getBoundingClientRect?{width:(z=z.getBoundingClientRect()).width,height:z.height}:{width:0,height:0}}i.getItemWidth=w,i.getElementDimensions=S;var b=function(z,F,Y){var F=(0,i.getElementCursor)(F,Y),Y=(0,i.getElementFirstChild)(z,F);if((0,i.isElement)(Y))return z=window.getComputedStyle(Y),F=parseFloat(z.marginTop),z=parseFloat(z.marginBottom),Math.ceil(Y.offsetHeight+F+z)},_=(i.getAutoheightProperty=b,function(z,F){var W=F.activeIndex,F=F.itemsInSlide;return z.infinite?W+F+(0,i.getItemsOffset)(z):W}),A=(i.getElementCursor=_,function(z,I){return z=z&&z.children||[],z[I]&&z[I].firstChild||null});function C(z,I,W){return(I=I===void 0?{}:I).width!==(W=W===void 0?{}:W).width}function B(z,Y){var Y=Y||{},W=Y.position,W=W===void 0?0:W,F=Y.animationDuration,F=F===void 0?0:F,Y=Y.animationEasingFunction,Y=Y===void 0?"ease":Y;return z&&(0,i.isElement)(z)&&(z.style.transition="transform ".concat(F,"ms ").concat(Y," 0ms"),z.style.transform="translate3d(".concat(W,"px, 0, 0)")),z}i.getElementFirstChild=A,i.shouldHandleResizeEvent=C,i.animate=B;var R=function(z,I,W){var at=z||{},F=at.paddingLeft,Y=at.paddingRight,tt=at.autoHeight,at=at.animationDuration,tt=tt?(0,i.getAutoheightProperty)(W,z,I):void 0;return{height:tt,transition:tt?"height ".concat(at,"ms"):void 0,paddingLeft:"".concat(F,"px"),paddingRight:"".concat(Y,"px")}},y=(i.getRenderWrapperStyles=R,function(W){var W=W||{},I=W.animationDuration,W=W.animationEasingFunction,W=W===void 0?"ease":W;return"transform ".concat(I===void 0?0:I,"ms ").concat(W," 0ms")}),O=(i.getTransitionProperty=y,function(z,I){return z=(z||{}).translate3d,z="translate3d(".concat(-(z===void 0?0:z),"px, 0, 0)"),l(l({},I),{transform:z})}),v=(i.getRenderStageStyles=O,function(z,at){var tt=at.transformationSet,W=at.fadeoutAnimationIndex,F=at.fadeoutAnimationPosition,Y=at.fadeoutAnimationProcessing,at=at.animationDuration,tt=(tt[z]||{}).width;return Y&&W===z?{transform:"translateX(".concat(F,"px)"),animationDuration:"".concat(at,"ms"),width:"".concat(tt,"px")}:{width:tt}}),x=(i.getRenderStageItemStyles=v,function(z,tt){var W=z,F=tt.infinite,Y=tt.itemsOffset,at=tt.itemsInSlide,tt=tt.transformationSet;return((tt===void 0?[]:tt)[W=F?z+(0,o.getShiftIndex)(at===void 0?0:at,Y===void 0?0:Y):W]||{}).position||0}),D=(i.getTranslate3dProperty=x,function(z,I){return-(I-Math.floor(z))});function P(z){return z=H(z),z=z&&z[4]||"",Number(z)}function H(z){return z&&(0,i.isElement)(z)&&window.getComputedStyle(z).transform.match(/(-?[0-9.]+)/g)||[]}i.getTouchmoveTranslatePosition=D,i.getTranslateXProperty=P,i.getTransformMatrix=H;var K=function(){var z;try{return!!((z=window==null?void 0:window.document)!=null&&z.createElement)}catch{return!1}},V=(i.canUseDOM=K,function(z,rt){var W,F=1,Y=rt.responsive,at=rt.autoWidth,tt=rt.infinite,rt=rt.innerWidth;return at!==void 0&&at?tt!==void 0&&tt?z:F:(Y&&(at=Object.keys(Y)).length&&(rt||(0,i.canUseDOM)())&&(W=rt===void 0?window.innerWidth:rt,at.forEach(function(M){var G;Number(M)<=W&&(G=(M=Y[M]).items,M=M.itemsFit,F=(M===void 0?"fill":M)==="contain"?G:Math.min(G,z))})),F||1)});i.getItemsInSlide=V}($s)),$s}var Dp;function Kv(){return Dp||(Dp=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.calculateInitialState=i.getIsStageContentPartial=i.concatClassnames=void 0;var l=Zv(),c=co(),o=function(){for(var T=[],f=0;f<arguments.length;f++)T[f]=arguments[f];return T.filter(Boolean).join(" ")},m=(i.concatClassnames=o,function(T,f,d){return f===void 0&&(f=0),d===void 0&&(d=0),!(T=T!==void 0&&T)&&d<=f}),p=(i.getIsStageContentPartial=m,function(P,f,d){d===void 0&&(d=(0,l.canUseDOM)());var s,g,w=P.animationDuration,w=w===void 0?0:w,S=P.infinite,S=S!==void 0&&S,b=P.autoPlay,b=b!==void 0&&b,_=P.autoWidth,_=_!==void 0&&_,A=(0,l.createClones)(P),C=(0,l.getTransitionProperty)(),B=(0,l.getItemsCount)(P),R=(0,l.getItemsOffset)(P),y=(0,l.getItemsInSlide)(B,P),O=(0,c.getStartIndex)(P.activeIndex,B),O=(0,c.getActiveIndex)({startIndex:O,itemsCount:B,infinite:S}),v=(0,l.getElementDimensions)(f).width,x=(g=(f=(_?(s=(f=(0,l.createAutowidthTransformationSet)(f,v,S)).coords,g=f.content,f):(s=(f=(0,l.createDefaultTransformationSet)(A,v,y,S)).coords,g=f.content,f)).partial,g),(0,c.getItemCoords)(-y,s=s).position),D=(0,c.getSwipeLimitMin)({itemsOffset:R,transformationSet:s},P),P=(0,c.getSwipeLimitMax)({itemsCount:B,itemsOffset:R,itemsInSlide:y,transformationSet:s},P),H=(0,c.getSwipeShiftValue)(B,s);return{activeIndex:O,autoWidth:_,animationDuration:w,clones:A,infinite:S,itemsCount:B,itemsInSlide:y,itemsOffset:R,translate3d:(0,l.getTranslate3dProperty)(O,{itemsInSlide:y,itemsOffset:R,transformationSet:s,autoWidth:_,infinite:S}),stageWidth:v,stageContentWidth:g,initialStageHeight:0,isStageContentPartial:f,isAutoPlaying:b,isAutoPlayCanceledOnAction:!1,transformationSet:s,transition:C,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1,swipeLimitMin:D,swipeLimitMax:P,swipeAllowedPositionMax:x,swipeShiftValue:H,canUseDom:d}});i.calculateInitialState=p}(Xs)),Xs}var Qs={},Mp;function __(){return Mp||(Mp=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.isClonedItem=i.isTargetItem=i.isActiveItem=i.getRenderStageItemClasses=void 0;var l=Un(),c=Kv(),o=co(),m=function(_,b){_===void 0&&(_=0);var g=b.fadeoutAnimationIndex,w=(0,i.isActiveItem)(_,b)?l.Modifiers.ACTIVE:"",S=(0,i.isClonedItem)(_,b)?l.Modifiers.CLONED:"",b=(0,i.isTargetItem)(_,b)?l.Modifiers.TARGET:"",_=_===g?l.Classnames.ANIMATED:"";return(0,c.concatClassnames)(l.Classnames.STAGE_ITEM,w,S,b,_)},p=(i.getRenderStageItemClasses=m,function(d,_){d===void 0&&(d=0);var g=_.activeIndex,w=_.itemsInSlide,S=_.itemsOffset,b=_.infinite,_=_.autoWidth,A=(0,o.getShiftIndex)(w,S);return _&&b?d-A===g+S:(_=g+A,b?_<=d&&d<_+w:g<=d&&d<_)}),T=(i.isActiveItem=p,function(d,b){d===void 0&&(d=0);var g=b.activeIndex,_=b.itemsInSlide,w=b.itemsOffset,S=b.infinite,b=b.autoWidth,_=(0,o.getShiftIndex)(_,w);return S?b&&S?d-_===g+w:d===g+_:d===g}),f=(i.isTargetItem=T,function(d,_){d===void 0&&(d=0);var g=_.itemsInSlide,w=_.itemsOffset,S=_.itemsCount,b=_.infinite,_=_.autoWidth;return!!b&&(_&&b?d<g||S-1+g<d:d<(_=(0,o.getShiftIndex)(g,w))||S-1+_<d)});i.isClonedItem=f}(Qs)),Qs}var Is={},Cp;function T_(){return Cp||(Cp=1,function(i){function l(c,o){o===void 0&&(o=0);function m(){p&&(clearTimeout(p),p=void 0)}var p=void 0;return[function(){for(var T=this,f=[],d=0;d<arguments.length;d++)f[d]=arguments[d];m(),p=window.setTimeout(function(){c.apply(T,f),p=void 0},o)},m]}Object.defineProperty(i,"__esModule",{value:!0}),i.debounce=void 0,i.debounce=l}(Is)),Is}var Zs={},jp;function E_(){return jp||(jp=1,function(i){function l(){for(var c=[],o=0;o<arguments.length;o++)c[o]=arguments[o]}Object.defineProperty(i,"__esModule",{value:!0}),i.debug=void 0,i.debug=l}(Zs)),Zs}var Ks={},Rp;function O_(){return Rp||(Rp=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.getSlideItemInfo=i.getSlideInfo=i.getSlideIndexForMultipleItems=i.getSlideIndexForNonMultipleItems=i.getActiveSlideDotsLength=i.getActiveSlideIndex=void 0;var l=function(f,g){var g=g||{},w=g.activeIndex,s=g.itemsInSlide,g=g.itemsCount,w=w+s;return s===1?(0,i.getSlideIndexForNonMultipleItems)(w,s,g):(0,i.getSlideIndexForMultipleItems)(w,s,g,f)},c=(i.getActiveSlideIndex=l,function(f,d){var s;return d===void 0&&(d=1),(f=f===void 0?0:f)&&d?(s=Math.floor(f/d),f%d==0?s-1:s):0}),o=(i.getActiveSlideDotsLength=c,function(f,d,s){return f<d?s-d:s<f?0:f-1}),m=(i.getSlideIndexForNonMultipleItems=o,function(f,d,s,g){var w=(0,i.getActiveSlideDotsLength)(s,d);return f===s+d?0:g||f<d&&f!==0?w:f===0?s%d==0?w:w-1:0<d?Math.floor(f/d)-1:0}),p=(i.getSlideIndexForMultipleItems=m,function(f,d){return d===void 0&&(d=0),f=(f=f===void 0?0:f)+1,f<1?f=d:d<f&&(f=1),{item:f,itemsCount:d}}),T=(i.getSlideInfo=p,function(d){var d=d||{},s=d.itemsInSlide,g=d.activeIndex,w=d.infinite,S=d.itemsCount;return d.isStageContentPartial?{isPrevSlideDisabled:!0,isNextSlideDisabled:!0}:{isPrevSlideDisabled:w===!1&&g===0,isNextSlideDisabled:w===!1&&S-s<=g}});i.getSlideItemInfo=T}(Ks)),Ks}var ks={},Np;function A_(){return Np||(Np=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.shouldCancelAutoPlayOnHover=i.shouldCancelAutoPlayOnAction=i.getItemIndexForDotNavigation=i.checkIsTheLastDotIndex=i.getDotsNavigationLength=i.hasDotForEachSlide=i.isStrategy=i.shouldDisableButtons=i.shouldDisableDots=i.shouldDisableControls=void 0;var l=Un();function c(_,B){var _=(_||{}).controlsStrategy,B=B||{},A=B.itemsInSlide,C=B.itemsCount,B=B.autoWidth;if((0,i.isStrategy)(_,l.ControlsStrategy.RESPONSIVE))return!B&&A===C}function o(S,b){return S.disableDotsControls||c(S,b)}function m(S,b){return S.disableButtonsControls||!S.infinite&&c(S,b)}i.shouldDisableControls=c,i.shouldDisableDots=o,i.shouldDisableButtons=m;var p=function(S,b){return S===void 0&&(S=""),b===void 0&&(b=""),!!(S&&S.includes(b))},T=(i.isStrategy=p,function(S,b){return S||(0,i.isStrategy)(b,l.ControlsStrategy.ALTERNATE)}),f=(i.hasDotForEachSlide=T,function(S,b,_){return S===void 0&&(S=0),b===void 0&&(b=1),(_=_!==void 0&&_)?S:Number(b)!==0&&Math.ceil(S/b)||0}),d=(i.getDotsNavigationLength=f,function(S,b,_){return!b&&S===_-1}),s=(i.checkIsTheLastDotIndex=d,function(S,b,_,A){return(b?_-A:S*A)||0}),g=(i.getItemIndexForDotNavigation=s,function(S){return(S=S===void 0?"":S)===l.AutoPlayStrategy.ACTION||S===l.AutoPlayStrategy.ALL}),w=(i.shouldCancelAutoPlayOnAction=g,function(S){return(S=S===void 0?"":S)===l.AutoPlayStrategy.DEFAULT||S===l.AutoPlayStrategy.ALL});i.shouldCancelAutoPlayOnHover=w}(ks)),ks}var zp;function il(){return zp||(zp=1,function(i){var l=Object.create?function(o,m,p,T){T===void 0&&(T=p);var f=Object.getOwnPropertyDescriptor(m,p);f&&("get"in f?m.__esModule:!f.writable&&!f.configurable)||(f={enumerable:!0,get:function(){return m[p]}}),Object.defineProperty(o,T,f)}:function(o,m,p,T){o[T=T===void 0?p:T]=m[p]},c=function(o,m){for(var p in o)p==="default"||Object.prototype.hasOwnProperty.call(m,p)||l(m,o,p)};Object.defineProperty(i,"__esModule",{value:!0}),c(Kv(),i),c(Zv(),i),c(__(),i),c(T_(),i),c(co(),i),c(E_(),i),c(O_(),i),c(A_(),i),c(Iv(),i)}(Ps)),Ps}var Up;function w_(){return Up||(Up=1,function(i){var l=function(T){return T&&T.__esModule?T:{default:T}},c=(Object.defineProperty(i,"__esModule",{value:!0}),i.SlideInfo=void 0,l(rn())),o=Un(),m=il(),p=function(d){var s=d.activeIndex,f=d.itemsCount,d=d.renderSlideInfo,s=(0,m.getSlideInfo)(s,f).item;return typeof d=="function"?c.default.createElement("div",{className:o.Classnames.SLIDE_INFO},d({item:s,itemsCount:f})):(d=(0,m.concatClassnames)(o.Classnames.SLIDE_INFO_ITEM,o.Modifiers.SEPARATOR),c.default.createElement("div",{className:o.Classnames.SLIDE_INFO},c.default.createElement("span",{className:o.Classnames.SLIDE_INFO_ITEM},s),c.default.createElement("span",{className:d},"/"),c.default.createElement("span",{className:o.Classnames.SLIDE_INFO_ITEM},f)))};i.SlideInfo=p}(Ys)),Ys}var Js={},Lp;function x_(){return Lp||(Lp=1,function(i){var l=function(m){return m&&m.__esModule?m:{default:m}},c=(Object.defineProperty(i,"__esModule",{value:!0}),i.StageItem=void 0,l(rn())),o=function(f){var p=f.item,T=f.className,f=f.styles;return c.default.createElement("li",{style:f,className:T},p)};i.StageItem=o}(Js)),Js}var Ws={},Bp;function D_(){return Bp||(Bp=1,function(i){var l=function(T){return T&&T.__esModule?T:{default:T}},c=(Object.defineProperty(i,"__esModule",{value:!0}),i.DotsNavigation=void 0,l(rn())),o=Un(),m=il(),p=function(C){var f=C.state,d=C.onClick,s=C.onMouseEnter,g=C.onMouseLeave,w=C.controlsStrategy,S=C.renderDotsItem,b=f.itemsCount,_=f.itemsInSlide,A=f.infinite,C=f.autoWidth,B=f.activeIndex,R=(0,m.getSlideItemInfo)(f).isNextSlideDisabled,y=(0,m.hasDotForEachSlide)(C,w),O=(0,m.getDotsNavigationLength)(b,_,y);return c.default.createElement("ul",{className:o.Classnames.DOTS},Array.from({length:b}).map(function(v,x){var D,P,H;if(x<O)return P=(0,m.checkIsTheLastDotIndex)(x,!!A,O),D=(0,m.getItemIndexForDotNavigation)(x,P,b,_),P=(0,m.getActiveSlideIndex)(R,f),y&&((P=B)<0?P=b-1:b<=B&&(P=0),D=x),P=P===x?o.Modifiers.ACTIVE:"",H=S?o.Modifiers.CUSTOM:"",H=(0,m.concatClassnames)(o.Classnames.DOTS_ITEM,P,H),c.default.createElement("li",{key:"dot-item-".concat(x),onMouseEnter:s,onMouseLeave:g,onClick:function(){return d(D)},className:H},S&&S({isActive:!!P,activeIndex:x}))}))};i.DotsNavigation=p}(Ws)),Ws}var Fs={},qp;function M_(){return qp||(qp=1,function(i){var l=function(T){return T&&T.__esModule?T:{default:T}},c=(Object.defineProperty(i,"__esModule",{value:!0}),i.PlayPauseButton=void 0,l(rn())),o=Un(),m=il(),p=function(s){var f=s.isPlaying,d=s.onClick,s=s.renderPlayPauseButton;return typeof s=="function"?c.default.createElement("div",{className:o.Classnames.PLAY_BTN,onClick:d},s({isPlaying:f})):(s=f?o.Modifiers.PAUSE:"",f=(0,m.concatClassnames)(o.Classnames.PLAY_BTN_ITEM,s),c.default.createElement("div",{className:o.Classnames.PLAY_BTN},c.default.createElement("div",{className:o.Classnames.PLAY_BTN_WRAPPER},c.default.createElement("div",{onClick:d,className:f}))))};i.PlayPauseButton=p}(Fs)),Fs}var tf={},Hp;function C_(){return Hp||(Hp=1,function(i){var l=function(T){return T&&T.__esModule?T:{default:T}},c=(Object.defineProperty(i,"__esModule",{value:!0}),i.PrevNextButton=void 0,l(rn())),o=Un(),m=il(),p=function(S){var f,d=S.name,s=S.isDisabled,g=S.onClick,w=S.renderPrevButton,S=S.renderNextButton;return typeof w=="function"?c.default.createElement("div",{className:o.Classnames.BUTTON_PREV,onClick:g},w({isDisabled:s})):typeof S=="function"?c.default.createElement("div",{className:o.Classnames.BUTTON_NEXT,onClick:g},S({isDisabled:s})):(S=(w=d==="prev")?"<":">",d=w?o.Classnames.BUTTON_PREV:o.Classnames.BUTTON_NEXT,f=w?o.Classnames.BUTTON_PREV_WRAPPER:o.Classnames.BUTTON_NEXT_WRAPPER,w=w?o.Classnames.BUTTON_PREV_ITEM:o.Classnames.BUTTON_NEXT_ITEM,s=s?o.Modifiers.INACTIVE:"",w=(0,m.concatClassnames)(w,s),c.default.createElement("div",{className:d},c.default.createElement("div",{className:f},c.default.createElement("p",{className:w,onClick:function(b){return g(b)}},c.default.createElement("span",{"data-area":S})))))};i.PrevNextButton=p}(tf)),tf}var Yp;function j_(){return Yp||(Yp=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.PrevNextButton=i.PlayPauseButton=i.DotsNavigation=i.StageItem=i.SlideInfo=void 0;var l=w_(),c=(Object.defineProperty(i,"SlideInfo",{enumerable:!0,get:function(){return l.SlideInfo}}),x_()),o=(Object.defineProperty(i,"StageItem",{enumerable:!0,get:function(){return c.StageItem}}),D_()),m=(Object.defineProperty(i,"DotsNavigation",{enumerable:!0,get:function(){return o.DotsNavigation}}),M_()),p=(Object.defineProperty(i,"PlayPauseButton",{enumerable:!0,get:function(){return m.PlayPauseButton}}),C_());Object.defineProperty(i,"PrevNextButton",{enumerable:!0,get:function(){return p.PrevNextButton}})}(Hs)),Hs}var Pp;function R_(){return Pp||(Pp=1,function(i){var l=function(){var R=function(y,O){return(R=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(v,x){v.__proto__=x}:function(v,x){for(var D in x)Object.prototype.hasOwnProperty.call(x,D)&&(v[D]=x[D])}))(y,O)};return function(y,O){if(typeof O!="function"&&O!==null)throw new TypeError("Class extends value "+String(O)+" is not a constructor or null");function v(){this.constructor=y}R(y,O),y.prototype=O===null?Object.create(O):(v.prototype=O.prototype,new v)}}(),c=function(){return(c=Object.assign||function(R){for(var y,O=1,v=arguments.length;O<v;O++)for(var x in y=arguments[O])Object.prototype.hasOwnProperty.call(y,x)&&(R[x]=y[x]);return R}).apply(this,arguments)},o=Object.create?function(R,y,O,v){v===void 0&&(v=O);var x=Object.getOwnPropertyDescriptor(y,O);x&&("get"in x?y.__esModule:!x.writable&&!x.configurable)||(x={enumerable:!0,get:function(){return y[O]}}),Object.defineProperty(R,v,x)}:function(R,y,O,v){R[v=v===void 0?O:v]=y[O]},m=Object.create?function(R,y){Object.defineProperty(R,"default",{enumerable:!0,value:y})}:function(R,y){R.default=y},p=function(R){if(R&&R.__esModule)return R;var y={};if(R!=null)for(var O in R)O!=="default"&&Object.prototype.hasOwnProperty.call(R,O)&&o(y,R,O);return m(y,R),y},T=function(R,y){for(var O in R)O==="default"||Object.prototype.hasOwnProperty.call(y,O)||o(y,R,O)},f=function(R,y,O,v){return new(O=O||Promise)(function(x,D){function P(V){try{K(v.next(V))}catch(z){D(z)}}function H(V){try{K(v.throw(V))}catch(z){D(z)}}function K(V){var z;V.done?x(V.value):((z=V.value)instanceof O?z:new O(function(I){I(z)})).then(P,H)}K((v=v.apply(R,[])).next())})},d=function(R,y){var O,v,x,D={label:0,sent:function(){if(1&x[0])throw x[1];return x[1]},trys:[],ops:[]},P={next:H(0),throw:H(1),return:H(2)};return typeof Symbol=="function"&&(P[Symbol.iterator]=function(){return this}),P;function H(K){return function(V){var z=[K,V];if(O)throw new TypeError("Generator is already executing.");for(;D;)try{if(O=1,v&&(x=2&z[0]?v.return:z[0]?v.throw||((x=v.return)&&x.call(v),0):v.next)&&!(x=x.call(v,z[1])).done)return x;switch(v=0,(z=x?[2&z[0],x.value]:z)[0]){case 0:case 1:x=z;break;case 4:return D.label++,{value:z[1],done:!1};case 5:D.label++,v=z[1],z=[0];continue;case 7:z=D.ops.pop(),D.trys.pop();continue;default:if(!(x=0<(x=D.trys).length&&x[x.length-1])&&(z[0]===6||z[0]===2)){D=0;continue}if(z[0]===3&&(!x||z[1]>x[0]&&z[1]<x[3]))D.label=z[1];else if(z[0]===6&&D.label<x[1])D.label=x[1],x=z;else{if(!(x&&D.label<x[2])){x[2]&&D.ops.pop(),D.trys.pop();continue}D.label=x[2],D.ops.push(z)}}z=y.call(R,D)}catch(I){z=[6,I],v=0}finally{O=x=0}if(5&z[0])throw z[1];return{value:z[0]?z[1]:void 0,done:!0}}}},s=function(R){return R&&R.__esModule?R:{default:R}},g=(Object.defineProperty(i,"__esModule",{value:!0}),i.Link=void 0,s(rn())),w=s(y_()),S=b_(),b=s(S_()),_=(i.Link=b.default,p(j_())),A=p(il()),C=Un(),B=(T(Un(),i),function(R){function y(O){var v=R.call(this,O)||this;return v.swipeListener=null,v._handleKeyboardEvents=function(x){switch(x.code){case"Space":return v.props.autoPlay&&v._handlePlayPauseToggle();case"ArrowLeft":return v.slidePrev(x);case"ArrowRight":return v.slideNext(x)}},v._handleBeforeSlideEnd=function(x){return f(v,void 0,void 0,function(){var D,P,H;return d(this,function(K){switch(K.label){case 0:return P=this.state,H=P.activeIndex,D=P.itemsCount,P=P.fadeoutAnimationProcessing,A.shouldRecalculateSlideIndex(H,D)?(H=A.getUpdateSlidePositionIndex(H,D),[4,this._handleUpdateSlidePosition(H)]):[3,2];case 1:return K.sent(),[3,4];case 2:return P?[4,this.setState({fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})]:[3,4];case 3:K.sent(),K.label=4;case 4:return this._handleSlideChanged(x),[2]}})})},v._handleMouseEnter=function(){var x=v.props.autoPlayStrategy;A.shouldCancelAutoPlayOnHover(x)&&v.state.isAutoPlaying&&(v.isHovered=!0,v._handlePause())},v._handleMouseLeave=function(){v.state.isAutoPlaying&&(v.isHovered=!1,v._handlePlay())},v._handlePause=function(){v._clearAutoPlayTimeout()},v._handlePlayPauseToggle=function(){return f(v,void 0,void 0,function(){var x;return d(this,function(D){switch(D.label){case 0:return x=this.state.isAutoPlaying,this.hasUserAction=!0,[4,this.setState({isAutoPlaying:!x,isAutoPlayCanceledOnAction:!0})];case 1:return D.sent(),x?this._handlePause():this._handlePlay(),[2]}})})},v._setRootComponentRef=function(x){return v.rootElement=x},v._setStageComponentRef=function(x){return v.stageComponent=x},v._renderStageItem=function(x,D){var P=A.getRenderStageItemStyles(D,v.state),H=A.getRenderStageItemClasses(D,v.state);return g.default.createElement(_.StageItem,{styles:P,className:H,key:"stage-item-".concat(D),item:x})},v._renderSlideInfo=function(){var x=v.props.renderSlideInfo,P=v.state,D=P.activeIndex,P=P.itemsCount;return g.default.createElement(_.SlideInfo,{itemsCount:P,activeIndex:D,renderSlideInfo:x})},v.state=A.calculateInitialState(O,null),v.isHovered=!1,v.isAnimationDisabled=!1,v.isTouchMoveProcessStarted=!1,v.cancelTouchAnimations=!1,v.hasUserAction=!1,v.rootElement=null,v.rootComponentDimensions={},v.stageComponent=null,v.startTouchmovePosition=void 0,v.slideTo=v.slideTo.bind(v),v.slidePrev=v.slidePrev.bind(v),v.slideNext=v.slideNext.bind(v),v._handleTouchmove=v._handleTouchmove.bind(v),v._handleTouchend=v._handleTouchend.bind(v),v._handleDotClick=v._handleDotClick.bind(v),v._handleResize=v._handleResize.bind(v),O=A.debounce(v._handleResize,100),v._handleResizeDebounced=O[0],v._cancelResizeDebounced=O[1],v}return l(y,R),y.prototype.componentDidMount=function(){return f(this,void 0,void 0,function(){return d(this,function(O){switch(O.label){case 0:return[4,this._setInitialState()];case 1:return O.sent(),this._addEventListeners(),this._setupSwipeHandlers(),this.props.autoPlay&&this._handlePlay(),[2]}})})},y.prototype.componentDidUpdate=function(O){var tt=this.props,v=tt.activeIndex,x=tt.animationDuration,D=tt.autoWidth,P=tt.children,H=tt.infinite,K=tt.items,V=tt.paddingLeft,z=tt.paddingRight,I=tt.responsive,W=tt.swipeExtraPadding,F=tt.mouseTracking,Y=tt.swipeDelta,at=tt.touchTracking,tt=tt.touchMoveDefaultEvents;P&&O.children!==P||O.autoWidth!==D||O.infinite!==H||O.items!==K||O.paddingLeft!==V||O.paddingRight!==z||O.responsive!==I||O.swipeExtraPadding!==W?this._updateComponent():(O.animationDuration!==x&&this.setState({animationDuration:x}),O.activeIndex!==v&&this.slideTo(v,C.EventType.UPDATE)),O.swipeDelta===Y&&O.mouseTracking===F&&O.touchTracking===at&&O.touchMoveDefaultEvents===tt||this._updateSwipeProps(),this.props.keyboardNavigation!==O.keyboardNavigation&&this._updateEventListeners()},y.prototype.componentWillUnmount=function(){this._cancelResizeDebounced(),this._cancelTimeoutAnimations(),this._removeEventListeners()},Object.defineProperty(y.prototype,"eventObject",{get:function(){var v=this.state,O=v.itemsInSlide,v=v.activeIndex,D=A.getSlideItemInfo(this.state),x=D.isNextSlideDisabled,D=D.isPrevSlideDisabled;return{item:v,slide:A.getActiveSlideIndex(x,this.state),itemsInSlide:O,isNextSlideDisabled:x,isPrevSlideDisabled:D,type:C.EventType.ACTION}},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"isFadeoutAnimationAllowed",{get:function(){var O=this.state.itemsInSlide,P=this.props,v=P.animationType,x=P.paddingLeft,D=P.paddingRight,P=P.autoWidth;return O===1&&v===C.AnimationType.FADEOUT&&!(x||D||P)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"touchmovePosition",{get:function(){return this.startTouchmovePosition!==void 0?this.startTouchmovePosition:this.state.translate3d},enumerable:!1,configurable:!0}),y.prototype.slideTo=function(O,v){var x,D,P;O===void 0&&(O=0),this._handlePause(),this.isFadeoutAnimationAllowed?(x=A.getUpdateSlidePositionIndex(O,this.state.itemsCount),D=A.getFadeoutAnimationPosition(x,this.state),P=A.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:x,fadeoutAnimationIndex:P,fadeoutAnimationPosition:D,eventType:v})):this._handleSlideTo({activeIndex:O,eventType:v})},y.prototype.slidePrev=function(D){this._handlePause(),D&&D.isTrusted&&(this.hasUserAction=!0);var v,x,D=this.state.activeIndex-1;this.isFadeoutAnimationAllowed?(v=-this.state.stageWidth,x=A.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:D,fadeoutAnimationIndex:x,fadeoutAnimationPosition:v})):this._handleSlideTo({activeIndex:D})},y.prototype.slideNext=function(D){this._handlePause(),D&&D.isTrusted&&(this.hasUserAction=!0);var v,x,D=this.state.activeIndex+1;this.isFadeoutAnimationAllowed?(v=this.state.stageWidth,x=A.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:D,fadeoutAnimationIndex:x,fadeoutAnimationPosition:v})):this._handleSlideTo({activeIndex:D})},y.prototype._addEventListeners=function(){window.addEventListener("resize",this._handleResizeDebounced),this.props.keyboardNavigation&&window.addEventListener("keyup",this._handleKeyboardEvents)},y.prototype._removeEventListeners=function(){this.swipeListener&&this.swipeListener.destroy(),window.removeEventListener("resize",this._handleResizeDebounced),window.removeEventListener("keyup",this._handleKeyboardEvents)},y.prototype._updateEventListeners=function(){this.props.keyboardNavigation?window.addEventListener("keyup",this._handleKeyboardEvents):window.removeEventListener("keyup",this._handleKeyboardEvents)},y.prototype._handleResize=function(O){return f(this,void 0,void 0,function(){var v,x,D,P;return d(this,function(H){switch(H.label){case 0:return D=this.props.onResizeEvent,x=A.getElementDimensions(this.rootElement),(D||A.shouldHandleResizeEvent)(O,this.rootComponentDimensions,x)?(this._cancelTimeoutAnimations(),this.rootComponentDimensions=x,D=this.state,x=D.itemsCount,v=D.isAutoPlaying,D=A.getUpdateSlidePositionIndex(this.state.activeIndex,x),x=A.calculateInitialState(c(c({},this.props),{activeIndex:D}),this.stageComponent),D=A.getTranslate3dProperty(x.activeIndex,x),P=c(c({},x),{translate3d:D,isAutoPlaying:v}),A.animate(this.stageComponent,{position:-D}),[4,this.setState(P)]):[3,2];case 1:H.sent(),this._handleResized({itemsInSlide:P.itemsInSlide}),this.isAnimationDisabled=!1,v&&this._handlePlay(),H.label=2;case 2:return[2]}})})},y.prototype._handleTouchmove=function(O,H){var x=H.absY,D=H.absX,P=H.deltaX,H=this.props.swipeDelta,W=this.state,K=W.swipeShiftValue,V=W.swipeLimitMin,z=W.swipeLimitMax,I=W.infinite,W=W.fadeoutAnimationProcessing;if(this.hasUserAction=!0,!(W||!this.isTouchMoveProcessStarted&&A.isVerticalTouchmoveDetected(D,x,H))){this.isTouchMoveProcessStarted||(this._cancelTimeoutAnimations(),this._setTouchmovePosition(),this.isAnimationDisabled=!0,this.isTouchMoveProcessStarted=!0,this._handleSlideChange());var F=A.getTouchmoveTranslatePosition(P,this.touchmovePosition);if(I===!1)return V<F||F<-z?void 0:void A.animate(this.stageComponent,{position:F});if(A.shouldRecalculateSwipePosition(F,V,z))try{(function Y(){A.getIsLeftDirection(P)?F+=K:F+=-K,A.shouldRecalculateSwipePosition(F,V,z)&&Y()})()}catch(Y){A.debug(Y)}A.animate(this.stageComponent,{position:F})}},y.prototype._handleTouchend=function(O,H){var x,D,P,H=H.deltaX;this._clearTouchmovePosition(),this.isTouchMoveProcessStarted&&(this.isTouchMoveProcessStarted=!1,x=this.state.animationDuration,D=this.props.animationEasingFunction,P=A.getTranslateXProperty(this.stageComponent),H=A.getSwipeTouchendPosition(this.state,H,P),A.animate(this.stageComponent,{position:H,animationDuration:x,animationEasingFunction:D}),this._handleBeforeTouchEnd(H))},y.prototype._handleBeforeTouchEnd=function(O){var v=this,x=this.state.animationDuration;this.touchEndTimeoutId=window.setTimeout(function(){return f(v,void 0,void 0,function(){var D,P,H,K=this;return d(this,function(V){switch(V.label){case 0:return D=A.getSwipeTouchendIndex(O,this.state),P=A.getTranslate3dProperty(D,this.state),A.animate(this.stageComponent,{position:-P}),H=A.getTransitionProperty(),[4,this.setState({activeIndex:D,translate3d:P,transition:H})];case 1:return V.sent(),requestAnimationFrame(function(){return K._handleSlideChanged()}),[2]}})})},x)},y.prototype._handleSlideTo=function(O){var D=O.activeIndex,v=D===void 0?0:D,D=O.fadeoutAnimationIndex,x=D===void 0?null:D,D=O.fadeoutAnimationPosition,P=D===void 0?null:D,H=O.eventType;return f(this,void 0,void 0,function(){var K,V,z,I,W=this;return d(this,function(F){switch(F.label){case 0:return V=this.props,z=V.infinite,V=V.animationEasingFunction,K=this.state,I=K.itemsCount,K=K.animationDuration,this.isAnimationDisabled||this.state.activeIndex===v||!z&&A.shouldCancelSlideAnimation(v,I)?[2]:(this.isAnimationDisabled=!0,this._cancelTimeoutAnimations(),this._handleSlideChange(H),z=!1,I=A.getTranslate3dProperty(v,this.state),V=x!==null&&P!==null?(z=!0,A.getTransitionProperty()):A.getTransitionProperty({animationDuration:K,animationEasingFunction:V}),[4,this.setState({activeIndex:v,transition:V,translate3d:I,animationDuration:K,fadeoutAnimationIndex:x,fadeoutAnimationPosition:P,fadeoutAnimationProcessing:z})]);case 1:return F.sent(),this.slideEndTimeoutId=window.setTimeout(function(){return W._handleBeforeSlideEnd(H)},K),[2]}})})},y.prototype._handleUpdateSlidePosition=function(O){return f(this,void 0,void 0,function(){var v,x,D;return d(this,function(P){switch(P.label){case 0:return v=this.state.animationDuration,x=A.getTranslate3dProperty(O,this.state),D=A.getTransitionProperty({animationDuration:0}),[4,this.setState({activeIndex:O,translate3d:x,transition:D,animationDuration:v,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})];case 1:return P.sent(),[2]}})})},y.prototype._handleUpdated=function(){this.props.onUpdated&&this.props.onUpdated(c(c({},this.eventObject),{type:C.EventType.UPDATE}))},y.prototype._handleResized=function(O){O===void 0&&(O={}),this.props.onResized&&this.props.onResized(c(c(c({},this.eventObject),O),{type:C.EventType.RESIZE}))},y.prototype._handleSlideChange=function(O){this.props.onSlideChange&&(O=O?c(c({},this.eventObject),{type:O}):this.eventObject,this.props.onSlideChange(O))},y.prototype._handleSlideChanged=function(O){return f(this,void 0,void 0,function(){var v,x,D,P;return d(this,function(H){switch(H.label){case 0:return x=this.state,v=x.isAutoPlaying,x=x.isAutoPlayCanceledOnAction,D=this.props,P=D.autoPlayStrategy,D=D.onSlideChanged,A.shouldCancelAutoPlayOnAction(P)&&this.hasUserAction&&!x?[4,this.setState({isAutoPlayCanceledOnAction:!0,isAutoPlaying:!1})]:[3,2];case 1:return H.sent(),[3,3];case 2:v&&this._handlePlay(),H.label=3;case 3:return this.isAnimationDisabled=!1,D&&(P=O?c(c({},this.eventObject),{type:O}):this.eventObject,D(P)),O===C.EventType.UPDATE&&this._handleUpdated(),[2]}})})},y.prototype._handleDotClick=function(O){this.hasUserAction=!0,this.slideTo(O)},y.prototype._handlePlay=function(){this._setAutoPlayInterval()},y.prototype._cancelTimeoutAnimations=function(){this._clearAutoPlayTimeout(),this._clearSlideEndTimeout(),this.clearTouchendTimeout()},y.prototype._clearAutoPlayTimeout=function(){window.clearTimeout(this.autoPlayTimeoutId),this.autoPlayTimeoutId=void 0},y.prototype._clearSlideEndTimeout=function(){clearTimeout(this.slideEndTimeoutId),this.slideEndTimeoutId=void 0},y.prototype.clearTouchendTimeout=function(){clearTimeout(this.touchEndTimeoutId),this.touchEndTimeoutId=void 0},y.prototype._clearTouchmovePosition=function(){this.startTouchmovePosition=void 0},y.prototype._setTouchmovePosition=function(){var O=A.getTranslateXProperty(this.stageComponent);this.startTouchmovePosition=-O},y.prototype._setInitialState=function(){return f(this,void 0,void 0,function(){var O;return d(this,function(v){switch(v.label){case 0:return O=A.calculateInitialState(this.props,this.stageComponent),this.rootComponentDimensions=A.getElementDimensions(this.rootElement),[4,this.setState(O)];case 1:return v.sent(),this.props.onInitialized&&this.props.onInitialized(c(c({},this.eventObject),{type:C.EventType.INIT})),[2]}})})},y.prototype._setAutoPlayInterval=function(){var O=this,x=this.props,v=x.autoPlayDirection,x=x.autoPlayInterval;this.autoPlayTimeoutId=window.setTimeout(function(){O.isHovered||(v===C.AutoplayDirection.RTL?O.slidePrev():O.slideNext())},x)},y.prototype._setupSwipeHandlers=function(){this.swipeListener=new w.default({element:this.rootElement,delta:this.props.swipeDelta,onSwiping:this._handleTouchmove,onSwiped:this._handleTouchend,rotationAngle:5,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents,preventTrackingOnMouseleave:!0}),this.swipeListener.init()},y.prototype._updateComponent=function(){var O=this,v=(this.props.syncStateOnPropsUpdate?this.state:this.props).activeIndex,x=c(c({},this.props),{activeIndex:v});this._cancelTimeoutAnimations(),this.isAnimationDisabled=!1,this.state.isAutoPlaying&&this._handlePlay(),this.setState({clones:A.createClones(x)}),requestAnimationFrame(function(){O.setState(A.calculateInitialState(x,O.stageComponent),function(){return O._handleUpdated()})})},y.prototype._updateSwipeProps=function(){this.swipeListener&&this.swipeListener.update({delta:this.props.swipeDelta,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents})},y.prototype._renderDotsNavigation=function(){var v=this.props,O=v.renderDotsItem,v=v.controlsStrategy;return g.default.createElement(_.DotsNavigation,{state:this.state,onClick:this._handleDotClick,renderDotsItem:O,controlsStrategy:v})},y.prototype._renderPrevButton=function(){var O=this.props.renderPrevButton,v=A.getSlideItemInfo(this.state).isPrevSlideDisabled;return g.default.createElement(_.PrevNextButton,{name:"prev",onClick:this.slidePrev,isDisabled:v,renderPrevButton:O})},y.prototype._renderNextButton=function(){var O=this.props.renderNextButton,v=A.getSlideItemInfo(this.state).isNextSlideDisabled;return g.default.createElement(_.PrevNextButton,{name:"next",onClick:this.slideNext,isDisabled:v,renderNextButton:O})},y.prototype._renderPlayPauseButton=function(){var O=this.props.renderPlayPauseButton,v=this.state.isAutoPlaying;return g.default.createElement(_.PlayPauseButton,{isPlaying:v,onClick:this._handlePlayPauseToggle,renderPlayPauseButton:O})},y.prototype.render=function(){var K=this.state,P=K.translate3d,O=K.clones,H=K.transition,K=K.canUseDom,v=A.shouldDisableDots(this.props,this.state),x=A.shouldDisableButtons(this.props,this.state),D=A.getRenderWrapperStyles(this.props,this.state,this.stageComponent),P=A.getRenderStageStyles({translate3d:P},{transition:H}),H=this.props.ssrSilentMode||K?"":C.Modifiers.SSR,K=A.concatClassnames(C.Classnames.ROOT,H);return g.default.createElement("div",{className:K},g.default.createElement("div",{ref:this._setRootComponentRef},g.default.createElement("div",{style:D,className:C.Classnames.WRAPPER,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave},g.default.createElement("ul",{style:P,className:C.Classnames.STAGE,ref:this._setStageComponentRef},O.map(this._renderStageItem)))),v?null:this._renderDotsNavigation(),x?null:this._renderPrevButton(),x?null:this._renderNextButton(),this.props.disableSlideInfo?null:this._renderSlideInfo(),this.props.autoPlayControls?this._renderPlayPauseButton():null)},y.defaultProps=S.defaultProps,y}(g.default.PureComponent));i.default=B}(Ns)),Ns}var N_=R_();const z_=bf(N_),U_=bt.div`
    cursor: grab;
    &:active {
        cursor: grabbing;
        user-select: none;
    }
`,L_=bt.p`
    padding: 0 30px;
    margin: 20px 0;
    font-size: 18px;
    text-align: center;
`,B_=bt.span`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    width: 100%;
    text-align: center;
`,q_=bt.picture`
    img {
        width: 98px;
        height: 98px;
        border-radius: 50%;
        object-fit: cover;
        top: 0;
        margin: 0 auto;
    }
    
    //position: absolute;
    //top: -49px;
    //left: 50%;
    //transform: translateX(-50%);
`,Nu={Slide:U_,TestimonyText:L_,TestimonyName:B_,TestimonyPhoto:q_},H_=""+new URL("user-photo-1-Jc1a0GRG.jpg",import.meta.url).href,Y_=""+new URL("user-photo-1-zhtvcE6A.webp",import.meta.url).href,P_=""+new URL("user-photo-2-kCYNDMUe.jpg",import.meta.url).href,X_=""+new URL("user-photo-2-DY2pJC6b.webp",import.meta.url).href,$_=""+new URL("user-photo-3-zRtAiqfn.jpg",import.meta.url).href,G_=""+new URL("user-photo-3-CRNZ9akY.webp",import.meta.url).href,kv=[{id:1,userPhotoSrc:H_,userPhotoSrcWebp:Y_,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",userName:"Karmani"},{id:2,userPhotoSrc:P_,userPhotoSrcWebp:X_,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",userName:"Ivan"},{id:3,userPhotoSrc:$_,userPhotoSrcWebp:G_,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",userName:"Aleksey"}],ef=i=>Q.jsxs(Nu.Slide,{children:[Q.jsxs(Nu.TestimonyPhoto,{children:[Q.jsx("source",{srcSet:i.userPhotoSrcWebp,type:"image/webp"}),Q.jsx("img",{src:i.userPhotoSrc,alt:"user photo"})]}),Q.jsx(Nu.TestimonyText,{children:i.text}),Q.jsxs(Nu.TestimonyName,{children:["@",i.userName]})]}),[zu,Uu,nf]=kv,V_=[Q.jsx(ef,{userPhotoSrc:zu.userPhotoSrc,userPhotoSrcWebp:zu.userPhotoSrcWebp,text:zu.text,userName:zu.userName}),Q.jsx(ef,{userPhotoSrc:Uu.userPhotoSrc,userPhotoSrcWebp:Uu.userPhotoSrcWebp,text:Uu.text,userName:Uu.userName}),Q.jsx(ef,{userPhotoSrc:nf.userPhotoSrc,userPhotoSrcWebp:nf.userPhotoSrcWebp,text:nf.text,userName:kv[2].userName})],Q_=()=>Q.jsx(z_,{mouseTracking:!0,items:V_,disableButtonsControls:!0}),I_=bt.div`
    background-color: ${ft.colors.secondaryBg};
    border-radius: 24px;
    max-width: 650px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 49px 0 40px;

    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);

    position: relative;
`,Z_=bt.div`
    &.firstQuote {
        align-self: flex-start;
    }
    &.secondQuote {
        align-self: flex-end;
    }
`,af={SliderWrapper:I_,IconWrapper:Z_},K_=()=>Q.jsx("section",{id:"testimony",children:Q.jsx(nl,{children:Q.jsxs(ao,{$direction:"column",$align:"center",children:[Q.jsx(io,{title:"Testimony"}),Q.jsxs(af.SliderWrapper,{children:[Q.jsx(af.IconWrapper,{className:"firstQuote",children:Q.jsx(za,{iconId:"quote",width:"30",height:"30",viewBox:"0 0 50 50"})}),Q.jsx(Q_,{}),Q.jsx(af.IconWrapper,{className:"secondQuote",children:Q.jsx(za,{iconId:"quote",width:"30",height:"30",viewBox:"0 0 50 50"})})]})]})})}),k_=bt.section`
    margin-bottom: 56px;
`,J_=bt.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 24px;

    button {
        align-self: flex-end;
    }

    textarea {
        resize: none;
        height: 160px;
    }
`,W_=bt.div`
`,F_=bt.label`
    display: inline-block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    flex-direction: column-reverse;
`,t5=bt.input`
    border: 1px solid ${ft.colors.borderColor};
    border-radius: 8px;
    width: 100%;
    padding: 8px 12px;
    min-height: 40px;
    background-color: ${ft.colors.secondaryBg};
    
    &:focus {
        outline: 1px solid ${ft.colors.accent};
    }
`,en={Field:t5,FieldLabel:F_,FieldWrapper:W_,StyledForm:J_,StyledContacts:k_};class rl{constructor(l=0,c="Network Error"){this.status=l,this.text=c}}const e5=()=>{if(!(typeof localStorage>"u"))return{get:i=>Promise.resolve(localStorage.getItem(i)),set:(i,l)=>Promise.resolve(localStorage.setItem(i,l)),remove:i=>Promise.resolve(localStorage.removeItem(i))}},de={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:e5()},Nf=i=>i?typeof i=="string"?{publicKey:i}:i.toString()==="[object Object]"?i:{}:{},n5=(i,l="https://api.emailjs.com")=>{if(!i)return;const c=Nf(i);de.publicKey=c.publicKey,de.blockHeadless=c.blockHeadless,de.storageProvider=c.storageProvider,de.blockList=c.blockList,de.limitRate=c.limitRate,de.origin=c.origin||l},Jv=async(i,l,c={})=>{const o=await fetch(de.origin+i,{method:"POST",headers:c,body:l}),m=await o.text(),p=new rl(o.status,m);if(o.ok)return p;throw p},Wv=(i,l,c)=>{if(!i||typeof i!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!l||typeof l!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!c||typeof c!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},a5=i=>{if(i&&i.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Fv=i=>i.webdriver||!i.languages||i.languages.length===0,tg=()=>new rl(451,"Unavailable For Headless Browser"),i5=(i,l)=>{if(!Array.isArray(i))throw"The BlockList list has to be an array";if(typeof l!="string")throw"The BlockList watchVariable has to be a string"},r5=i=>{var l;return!((l=i.list)!=null&&l.length)||!i.watchVariable},l5=(i,l)=>i instanceof FormData?i.get(l):i[l],eg=(i,l)=>{if(r5(i))return!1;i5(i.list,i.watchVariable);const c=l5(l,i.watchVariable);return typeof c!="string"?!1:i.list.includes(c)},ng=()=>new rl(403,"Forbidden"),u5=(i,l)=>{if(typeof i!="number"||i<0)throw"The LimitRate throttle has to be a positive number";if(l&&typeof l!="string")throw"The LimitRate ID has to be a non-empty string"},o5=async(i,l,c)=>{const o=Number(await c.get(i)||0);return l-Date.now()+o},ag=async(i,l,c)=>{if(!l.throttle||!c)return!1;u5(l.throttle,l.id);const o=l.id||i;return await o5(o,l.throttle,c)>0?!0:(await c.set(o,Date.now().toString()),!1)},ig=()=>new rl(429,"Too Many Requests"),c5=async(i,l,c,o)=>{const m=Nf(o),p=m.publicKey||de.publicKey,T=m.blockHeadless||de.blockHeadless,f=m.storageProvider||de.storageProvider,d={...de.blockList,...m.blockList},s={...de.limitRate,...m.limitRate};return T&&Fv(navigator)?Promise.reject(tg()):(Wv(p,i,l),a5(c),c&&eg(d,c)?Promise.reject(ng()):await ag(location.pathname,s,f)?Promise.reject(ig()):Jv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:p,service_id:i,template_id:l,template_params:c}),{"Content-type":"application/json"}))},s5=i=>{if(!i||i.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},f5=i=>typeof i=="string"?document.querySelector(i):i,d5=async(i,l,c,o)=>{const m=Nf(o),p=m.publicKey||de.publicKey,T=m.blockHeadless||de.blockHeadless,f=de.storageProvider||m.storageProvider,d={...de.blockList,...m.blockList},s={...de.limitRate,...m.limitRate};if(T&&Fv(navigator))return Promise.reject(tg());const g=f5(c);Wv(p,i,l),s5(g);const w=new FormData(g);return eg(d,w)?Promise.reject(ng()):await ag(location.pathname,s,f)?Promise.reject(ig()):(w.append("lib_version","4.4.1"),w.append("service_id",i),w.append("template_id",l),w.append("user_id",p),Jv("/api/v1.0/email/send-form",w))},h5={init:n5,send:c5,sendForm:d5,EmailJSResponseStatus:rl},m5=bt.div`
    position: fixed;
    top: 100px;
    right: 40px;
    padding: 10px;
    z-index: 500;
    background-color: ${i=>i.$bgColor||"rgba(101,253,138,0.5)"};
    border-radius: 10px;
    min-height: 20px;
    width: 200px;
    text-align: center;
    
    @media ${ft.media.tablet} {
        right: unset;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
`,p5={PopupMessageStyled:m5},Xp=({text:i,bgColor:l})=>Q.jsx(p5.PopupMessageStyled,{$bgColor:l,children:i}),v5=()=>{const[i,l]=yt.useState(!1),[c,o]=yt.useState(!1),m=yt.useRef(null),p=T=>{T.preventDefault(),m.current&&(h5.sendForm("service_cqrb5ju","template_hh9jb5f",m.current,{publicKey:"mQMPdrR-jVpbBU4Vu"}).then(()=>{console.log("SUCCESS!"),l(!0),setTimeout(()=>{l(!1)},3e3)},f=>{console.log("FAILED...",f.text),o(!0),setTimeout(()=>{o(!1)},3e3)}),T.currentTarget.reset())};return Q.jsxs(en.StyledContacts,{id:"contacts",children:[Q.jsxs(nl,{children:[Q.jsx(io,{title:"Contact me"}),Q.jsxs(en.StyledForm,{ref:m,onSubmit:p,children:[Q.jsxs(en.FieldWrapper,{children:[Q.jsx(en.FieldLabel,{htmlFor:"name",children:"Name"}),Q.jsx(en.Field,{id:"name",name:"user_name",required:!0})]}),Q.jsxs(en.FieldWrapper,{children:[Q.jsx(en.FieldLabel,{htmlFor:"email",children:"Email"}),Q.jsx(en.Field,{id:"email",name:"email",required:!0})]}),Q.jsxs(en.FieldWrapper,{children:[Q.jsx(en.FieldLabel,{htmlFor:"message",children:"Message"}),Q.jsx(en.Field,{as:"textarea",id:"message",name:"message",required:!0})]}),Q.jsx(kr,{as:"button",type:"submit",children:"Send"})]})]}),i&&Q.jsx(Xp,{text:"Your message has been sent successfully"}),c&&Q.jsx(Xp,{text:"Error! Your message was not sent.",bgColor:"rgba(253,130,165,0.5)"})]})},g5=bt.div`
    margin-bottom: 29px;
`,y5=bt.ul`
    display: flex;
    justify-content: space-around;
    min-width: 180px;
    color: ${ft.colors.primaryFont};
`,b5=bt.li`
    
    transition: all 0.05s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`,Vr={StyledSocial:g5,ListSocialIcons:y5,SocialIcon:b5},S5=()=>Q.jsx(Vr.StyledSocial,{children:Q.jsxs(Vr.ListSocialIcons,{children:[Q.jsx(Vr.SocialIcon,{children:Q.jsx("a",{href:"#",children:Q.jsx(za,{iconId:"telegram",height:"40",width:"40",viewBox:"3 2 18 18"})})}),Q.jsx(Vr.SocialIcon,{children:Q.jsx("a",{href:"#",children:Q.jsx(za,{iconId:"whatsapp",height:"40",width:"40",viewBox:"-2 -2 23 23"})})}),Q.jsx(Vr.SocialIcon,{children:Q.jsx("a",{href:"#",children:Q.jsx(za,{iconId:"email",height:"40",width:"40",viewBox:"-2 -8 45 45"})})})]})}),_5=""+new URL("yellow-bg-footer-BH1L16bM.png",import.meta.url).href,T5=bt.footer`
    margin: 0 auto;
    background-image: url(${_5});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    max-width: 1440px;
    width: 100%;
`,E5=bt.small`
    text-align: center;
    font-size: 16px;
    color: ${ft.colors.secondaryFont};
    margin-bottom: 240px;

    @media ${ft.media.tablet} {
        margin-bottom: 200px;
    }
    
    @media ${ft.media.mobile} {
        margin-bottom: 177px;
    }
`,$p={StyledFooter:T5,Copyright:E5},O5=()=>Q.jsx($p.StyledFooter,{children:Q.jsxs(ao,{$direction:"column",$align:"center",children:[Q.jsx(S5,{}),Q.jsx($p.Copyright,{children:"Madelyn Torff 2021 "})]})});function A5(){return Q.jsxs(Q.Fragment,{children:[Q.jsx(Gb,{}),Q.jsx(aS,{}),Q.jsx(G3,{}),Q.jsx(u_,{}),Q.jsx(K_,{}),Q.jsx(v5,{}),Q.jsx(O5,{})]})}const w5=Nb`
    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    *, *:before, *:after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
    }
    
    *::selection {
        background-color: ${ft.colors.secondaryFont};
        color: #fff;
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    
    body {
        font-family: 'Nunito', Helvetica, Arial, sans-serif;
        background-color: ${ft.colors.primaryBg};
        color: ${ft.colors.primaryFont};
        //min-width: 375px;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
        
    }

    button {
        cursor: pointer;
        border: none;
    }
    a, a:visited, a:hover{
        text-decoration: none;
        color: inherit;
    }
    ul li {
        list-style: none;
    }

    section {
        //margin-bottom: 144px;
        padding-top: 144px;
        
        @media ${ft.media.mobile} {
            padding-top: 80px;
        }
    }

    img {
        display: block;
    }
    
    input, textarea {
        font-family: inherit;
        color: inherit;
    }
    
    p {
        line-height: 1.5;
        color: ${ft.colors.secondaryFont};
    }
    
    @media (prefers-reduced-motion: reduce) {
        *, *:before, *:after {
            animation: none !important;
        }
    }
`;jy.createRoot(document.getElementById("root")).render(Q.jsxs(yt.StrictMode,{children:[Q.jsx(A5,{}),Q.jsx(w5,{})]}));
