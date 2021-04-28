(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("zUnb")},zUnb:function(t,e,n){"use strict";function r(t){return"function"==typeof t}n.r(e);let s=!1;const o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else s&&console.log("RxJS: Back to a better error behavior. Thank you. <3");s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function i(t){setTimeout(()=>{throw t},0)}const a={closed:!0,next(t){},error(t){if(o.useDeprecatedSynchronousErrorHandling)throw t;i(t)},complete(){}},l=(()=>Array.isArray||(t=>t&&"number"==typeof t.length))();function u(t){return null!==t&&"object"==typeof t}const c=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();let h=(()=>{class t{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:s,_unsubscribe:o,_subscriptions:i}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(let t=0;t<n.length;++t)n[t].remove(this);if(r(o)){s&&(this._unsubscribe=void 0);try{o.call(this)}catch(a){e=a instanceof c?d(a.errors):[a]}}if(l(i)){let t=-1,n=i.length;for(;++t<n;){const n=i[t];if(u(n))try{n.unsubscribe()}catch(a){e=e||[],a instanceof c?e=e.concat(d(a.errors)):e.push(a)}}}if(e)throw new c(e)}add(e){let n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){const e=n;n=new t,n._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof t){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(t){const e=this._subscriptions;if(e){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}}return t.EMPTY=function(t){return t.closed=!0,t}(new t),t})();function d(t){return t.reduce((t,e)=>t.concat(e instanceof c?e.errors:e),[])}const p=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class f extends h{constructor(t,e,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=a;break;case 1:if(!t){this.destination=a;break}if("object"==typeof t){t instanceof f?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new g(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new g(this,t,e,n)}}[p](){return this}static create(t,e,n){const r=new f(t,e,n);return r.syncErrorThrowable=!1,r}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class g extends f{constructor(t,e,n,s){let o;super(),this._parentSubscriber=t;let i=this;r(e)?o=e:e&&(o=e.next,n=e.error,s=e.complete,e!==a&&(i=Object.create(e),r(i.unsubscribe)&&this.add(i.unsubscribe.bind(i)),i.unsubscribe=this.unsubscribe.bind(this))),this._context=i,this._next=o,this._error=n,this._complete=s}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:e}=this;o.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:n}=o;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):i(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;i(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const e=()=>this._complete.call(this._context);o.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,e){try{t.call(this._context,e)}catch(n){if(this.unsubscribe(),o.useDeprecatedSynchronousErrorHandling)throw n;i(n)}}__tryOrSetError(t,e,n){if(!o.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(r){return o.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(i(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const m=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function y(t){return t}let v=(()=>{class t{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(e){const n=new t;return n.source=this,n.operator=e,n}subscribe(t,e,n){const{operator:r}=this,s=function(t,e,n){if(t){if(t instanceof f)return t;if(t[p])return t[p]()}return t||e||n?new f(t,e,n):new f(a)}(t,e,n);if(s.add(r?r.call(s,this.source):this.source||o.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),o.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(t){try{return this._subscribe(t)}catch(e){o.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){const{closed:e,destination:n,isStopped:r}=t;if(e||r)return!1;t=n&&n instanceof f?n:null}return!0}(t)?t.error(e):console.warn(e)}}forEach(t,e){return new(e=_(e))((e,n)=>{let r;r=this.subscribe(e=>{try{t(e)}catch(s){n(s),r&&r.unsubscribe()}},n,e)})}_subscribe(t){const{source:e}=this;return e&&e.subscribe(t)}[m](){return this}pipe(...t){return 0===t.length?this:(0===(e=t).length?y:1===e.length?e[0]:function(t){return e.reduce((t,e)=>e(t),t)})(this);var e}toPromise(t){return new(t=_(t))((t,e)=>{let n;this.subscribe(t=>n=t,t=>e(t),()=>t(n))})}}return t.create=e=>new t(e),t})();function _(t){if(t||(t=o.Promise||Promise),!t)throw new Error("no Promise impl found");return t}const w=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class b extends h{constructor(t,e){super(),this.subject=t,this.subscriber=e,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,e=t.observers;if(this.subject=null,!e||0===e.length||t.isStopped||t.closed)return;const n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}class S extends f{constructor(t){super(t),this.destination=t}}let C=(()=>{class t extends v{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[p](){return new S(this)}lift(t){const e=new x(this,this);return e.operator=t,e}next(t){if(this.closed)throw new w;if(!this.isStopped){const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].next(t)}}error(t){if(this.closed)throw new w;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].error(t);this.observers.length=0}complete(){if(this.closed)throw new w;this.isStopped=!0;const{observers:t}=this,e=t.length,n=t.slice();for(let r=0;r<e;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new w;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new w;return this.hasError?(t.error(this.thrownError),h.EMPTY):this.isStopped?(t.complete(),h.EMPTY):(this.observers.push(t),new b(this,t))}asObservable(){const t=new v;return t.source=this,t}}return t.create=(t,e)=>new x(t,e),t})();class x extends C{constructor(t,e){super(),this.destination=t,this.source=e}next(t){const{destination:e}=this;e&&e.next&&e.next(t)}error(t){const{destination:e}=this;e&&e.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:e}=this;return e?this.source.subscribe(t):h.EMPTY}}function E(t){return t&&"function"==typeof t.schedule}function T(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new k(t,e))}}class k{constructor(t,e){this.project=t,this.thisArg=e}call(t,e){return e.subscribe(new A(t,this.project,this.thisArg))}}class A extends f{constructor(t,e,n){super(t),this.project=e,this.count=0,this.thisArg=n||this}_next(t){let e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}const R=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()};function I(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const O=I(),P=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function j(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}const D=t=>{if(t&&"function"==typeof t[m])return r=t,t=>{const e=r[m]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(P(t))return R(t);if(j(t))return n=t,t=>(n.then(e=>{t.closed||(t.next(e),t.complete())},e=>t.error(e)).then(null,i),t);if(t&&"function"==typeof t[O])return e=t,t=>{const n=e[O]();for(;;){let e;try{e=n.next()}catch(r){return t.error(r),t}if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add(()=>{n.return&&n.return()}),t};{const e=u(t)?"an invalid object":`'${t}'`;throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var e,n,r};function U(t,e){return new v(n=>{const r=new h;let s=0;return r.add(e.schedule(function(){s!==t.length?(n.next(t[s++]),n.closed||r.add(this.schedule())):n.complete()})),r})}function N(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[m]}(t))return function(t,e){return new v(n=>{const r=new h;return r.add(e.schedule(()=>{const s=t[m]();r.add(s.subscribe({next(t){r.add(e.schedule(()=>n.next(t)))},error(t){r.add(e.schedule(()=>n.error(t)))},complete(){r.add(e.schedule(()=>n.complete()))}}))})),r})}(t,e);if(j(t))return function(t,e){return new v(n=>{const r=new h;return r.add(e.schedule(()=>t.then(t=>{r.add(e.schedule(()=>{n.next(t),r.add(e.schedule(()=>n.complete()))}))},t=>{r.add(e.schedule(()=>n.error(t)))}))),r})}(t,e);if(P(t))return U(t,e);if(function(t){return t&&"function"==typeof t[O]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new v(n=>{const r=new h;let s;return r.add(()=>{s&&"function"==typeof s.return&&s.return()}),r.add(e.schedule(()=>{s=t[O](),r.add(e.schedule(function(){if(n.closed)return;let t,e;try{const n=s.next();t=n.value,e=n.done}catch(r){return void n.error(r)}e?n.complete():(n.next(t),this.schedule())}))})),r})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof v?t:new v(D(t))}class H extends f{constructor(t){super(),this.parent=t}_next(t){this.parent.notifyNext(t)}_error(t){this.parent.notifyError(t),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class M extends f{notifyNext(t){this.destination.next(t)}notifyError(t){this.destination.error(t)}notifyComplete(){this.destination.complete()}}function L(t,e){if(e.closed)return;if(t instanceof v)return t.subscribe(e);let n;try{n=D(t)(e)}catch(r){e.error(r)}return n}function F(t,e,n=Number.POSITIVE_INFINITY){return"function"==typeof e?r=>r.pipe(F((n,r)=>N(t(n,r)).pipe(T((t,s)=>e(n,t,r,s))),n)):("number"==typeof e&&(n=e),e=>e.lift(new $(t,n)))}class ${constructor(t,e=Number.POSITIVE_INFINITY){this.project=t,this.concurrent=e}call(t,e){return e.subscribe(new V(t,this.project,this.concurrent))}}class V extends M{constructor(t,e,n=Number.POSITIVE_INFINITY){super(t),this.project=e,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)}_tryNext(t){let e;const n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(e)}_innerSub(t){const e=new H(this),n=this.destination;n.add(e);const r=L(t,e);r!==e&&n.add(r)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(t){this.destination.next(t)}notifyComplete(){const t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function z(t=Number.POSITIVE_INFINITY){return F(y,t)}function B(t,e){return e?U(t,e):new v(R(t))}function q(){return function(t){return t.lift(new Z(t))}}class Z{constructor(t){this.connectable=t}call(t,e){const{connectable:n}=this;n._refCount++;const r=new G(t,n),s=e.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class G extends f{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:n}=this,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class W extends v{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new h,t.add(this.source.subscribe(new J(this.getSubject(),this))),t.closed&&(this._connection=null,t=h.EMPTY)),t}refCount(){return q()(this)}}const Q=(()=>{const t=W.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class J extends S{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function Y(){return new C}
/**
 * @license Angular v11.2.11
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function K(t){for(let e in t)if(t[e]===K)return e;throw Error("Could not find renamed property on target object.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function X(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(X).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function tt(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const et=K({__forward_ref__:K});function nt(t){return t.__forward_ref__=nt,t.toString=function(){return X(this())},t}function rt(t){return"function"==typeof(e=t)&&e.hasOwnProperty(et)&&e.__forward_ref__===nt?t():t;var e;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}class st extends Error{constructor(t,e){super(function(t,e){return`${t?`NG0${t}: `:""}${e}`}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e)),this.code=t}}function ot(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():function(t){return"string"==typeof t?t:null==t?"":String(t)}(t)}function it(t,e){const n=e?` in ${e}`:"";throw new st("201",`No provider for ${ot(t)} found${n}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function at(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function lt(t){return{providers:t.providers||[],imports:t.imports||[]}}function ut(t){return ct(t,dt)||ct(t,ft)}function ct(t,e){return t.hasOwnProperty(e)?t[e]:null}function ht(t){return t&&(t.hasOwnProperty(pt)||t.hasOwnProperty(gt))?t[pt]:null}const dt=K({"\u0275prov":K}),pt=K({"\u0275inj":K}),ft=K({ngInjectableDef:K}),gt=K({ngInjectorDef:K});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var mt=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let yt;function vt(t){const e=yt;return yt=t,e}function _t(t,e,n){const r=ut(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&mt.Optional?null:void 0!==e?e:void it(X(t),"Injector")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function wt(t){return{toString:t}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var bt=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}({}),St=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ct="undefined"!=typeof globalThis&&globalThis,xt="undefined"!=typeof window&&window,Et="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Tt="undefined"!=typeof global&&global,kt=Ct||Tt||xt||Et,At={},Rt=[],It=K({"\u0275cmp":K}),Ot=K({"\u0275dir":K}),Pt=K({"\u0275pipe":K}),jt=K({"\u0275mod":K}),Dt=K({"\u0275loc":K}),Ut=K({"\u0275fac":K}),Nt=K({__NG_ELEMENT_ID__:K});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Ht=0;function Mt(t){return wt(()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===bt.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||Rt,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||St.Emulated,id:"c",styles:t.styles||Rt,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,s=t.features,o=t.pipes;return n.id+=Ht++,n.inputs=zt(t.inputs,e),n.outputs=zt(t.outputs),s&&s.forEach(t=>t(n)),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(Lt):null,n.pipeDefs=o?()=>("function"==typeof o?o():o).map(Ft):null,n})}function Lt(t){return qt(t)||function(t){return t[Ot]||null}(t)}function Ft(t){return function(t){return t[Pt]||null}(t)}const $t={};function Vt(t){const e={type:t.type,bootstrap:t.bootstrap||Rt,declarations:t.declarations||Rt,imports:t.imports||Rt,exports:t.exports||Rt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&wt(()=>{$t[t.id]=t.type}),e}function zt(t,e){if(null==t)return At;const n={};for(const r in t)if(t.hasOwnProperty(r)){let s=t[r],o=s;Array.isArray(s)&&(o=s[1],s=s[0]),n[s]=r,e&&(e[s]=o)}return n}const Bt=Mt;function qt(t){return t[It]||null}function Zt(t,e){const n=t[jt]||null;if(!n&&!0===e)throw new Error(`Type ${X(t)} does not have '\u0275mod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Gt=10;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Wt(t){return Array.isArray(t)&&"object"==typeof t[1]}function Qt(t){return Array.isArray(t)&&!0===t[1]}function Jt(t){return 0!=(8&t.flags)}function Yt(t){return 2==(2&t.flags)}function Kt(t){return null!==t.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Xt(t,e){return t.hasOwnProperty(Ut)?t[Ut]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class te{constructor(t,e,n){this.previousValue=t,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ee(){const t=re(this),e=null==t?void 0:t.current;if(e){const n=t.previous;if(n===At)t.previous=e;else for(let t in e)n[t]=e[t];t.current=null,this.ngOnChanges(e)}}function ne(t,e,n,r){const s=re(t)||function(t,e){return t.__ngSimpleChanges__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,{previous:At,current:null}),o=s.current||(s.current={}),i=s.previous,a=this.declaredInputs[n],l=i[a];o[a]=new te(l&&l.currentValue,e,i===At),t[r]=e}function re(t){return t.__ngSimpleChanges__||null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let se;function oe(t){return!!t.listen}const ie={createRenderer:(t,e)=>void 0!==se?se:"undefined"!=typeof document?document:void 0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ae(t){for(;Array.isArray(t);)t=t[0];return t}function le(t,e){return ae(e[t.index])}function ue(t,e){const n=e[t];return Wt(n)?n:n[0]}function ce(t){const e=function(t){return t.__ngContext__||null}(t);return e?Array.isArray(e)?e:e.lView:null}function he(t){return 128==(128&t[2])}function de(t,e){return null==e?null:t[e]}function pe(t){t[18]=0}function fe(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ge={lFrame:Pe(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function me(){return ge.bindingsEnabled}function ye(){return ge.lFrame.lView}function ve(){return ge.lFrame.tView}function _e(){let t=we();for(;null!==t&&64===t.type;)t=t.parent;return t}function we(){return ge.lFrame.currentTNode}function be(t,e){const n=ge.lFrame;n.currentTNode=t,n.isParent=e}function Se(){return ge.lFrame.isParent}function Ce(){return ge.isInCheckNoChangesMode}function xe(t){ge.isInCheckNoChangesMode=t}function Ee(t,e){const n=ge.lFrame;n.bindingIndex=n.bindingRootIndex=t,Te(e)}function Te(t){ge.lFrame.currentDirectiveIndex=t}function ke(t){ge.lFrame.currentQueryIndex=t}function Ae(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function Re(t,e,n){if(n&mt.SkipSelf){let r=e,s=t;for(;r=r.parent,!(null!==r||n&mt.Host||(r=Ae(s),null===r)||(s=s[15],10&r.type)););if(null===r)return!1;e=r,t=s}const r=ge.lFrame=Oe();return r.currentTNode=e,r.lView=t,!0}function Ie(t){const e=Oe(),n=t[1];ge.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Oe(){const t=ge.lFrame,e=null===t?null:t.child;return null===e?Pe(t):e}function Pe(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function je(){const t=ge.lFrame;return ge.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const De=je;function Ue(){const t=je();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Ne(t){ge.lFrame.selectedIndex=t}function He(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const e=t.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:s,ngAfterViewInit:o,ngAfterViewChecked:i,ngOnDestroy:a}=e;r&&(t.contentHooks||(t.contentHooks=[])).push(-n,r),s&&((t.contentHooks||(t.contentHooks=[])).push(n,s),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,s)),o&&(t.viewHooks||(t.viewHooks=[])).push(-n,o),i&&((t.viewHooks||(t.viewHooks=[])).push(n,i),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,i)),null!=a&&(t.destroyHooks||(t.destroyHooks=[])).push(n,a)}}function Me(t,e,n){$e(t,e,3,n)}function Le(t,e,n,r){(3&t[2])===n&&$e(t,e,n,r)}function Fe(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function $e(t,e,n,r){const s=null!=r?r:-1,o=e.length-1;let i=0;for(let a=void 0!==r?65535&t[18]:0;a<o;a++)if("number"==typeof e[a+1]){if(i=e[a],null!=r&&i>=r)break}else e[a]<0&&(t[18]+=65536),(i<s||-1==s)&&(Ve(t,n,e,a),t[18]=(4294901760&t[18])+a+2),a++}function Ve(t,e,n,r){const s=n[r]<0,o=n[r+1],i=t[s?-n[r]:n[r]];if(s){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048;try{o.call(i)}finally{}}}else try{o.call(i)}finally{}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ze=-1;class Be{constructor(t,e,n){this.factory=t,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=n}}function qe(t,e,n){const r=oe(t);let s=0;for(;s<n.length;){const o=n[s];if("number"==typeof o){if(0!==o)break;s++;const i=n[s++],a=n[s++],l=n[s++];r?t.setAttribute(e,a,l,i):e.setAttributeNS(i,a,l)}else{const i=o,a=n[++s];64===i.charCodeAt(0)?r&&t.setProperty(e,i,a):r?t.setAttribute(e,i,a):e.setAttribute(i,a),s++}}return s}function Ze(t){return 3===t||4===t||6===t}function Ge(t,e){if(null===e||0===e.length);else if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const s=e[r];"number"==typeof s?n=s:0===n||We(t,n,s,null,-1===n||2===n?e[++r]:null)}}return t}function We(t,e,n,r,s){let o=0,i=t.length;if(-1===e)i=-1;else for(;o<t.length;){const n=t[o++];if("number"==typeof n){if(n===e){i=-1;break}if(n>e){i=o-1;break}}}for(;o<t.length;){const e=t[o];if("number"==typeof e)break;if(e===n){if(null===r)return void(null!==s&&(t[o+1]=s));if(r===t[o+1])return void(t[o+2]=s)}o++,null!==r&&o++,null!==s&&o++}-1!==i&&(t.splice(i,0,e),o=i+1),t.splice(o++,0,n),null!==r&&t.splice(o++,0,r),null!==s&&t.splice(o++,0,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Qe(t){return t!==ze}function Je(t){return 32767&t}function Ye(t,e){let n=t>>16,r=e;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ke=!0;function Xe(t){const e=Ke;return Ke=t,e}let tn=0;function en(t,e){const n=rn(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,nn(r.data,t),nn(e,null),nn(r.blueprint,null));const s=sn(t,e),o=t.injectorIndex;if(Qe(s)){const t=Je(s),n=Ye(s,e),r=n[1].data;for(let s=0;s<8;s++)e[o+s]=n[t+s]|r[t+s]}return e[o+8]=s,o}function nn(t,e){t.push(0,0,0,0,0,0,0,0,e)}function rn(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function sn(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,s=e;for(;null!==s;){const t=s[1],e=t.type;if(r=2===e?t.declTNode:1===e?s[6]:null,null===r)return ze;if(n++,s=s[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return ze}function on(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Nt)&&(r=n[Nt]),null==r&&(r=n[Nt]=tn++);const s=255&r;e.data[t+(s>>5)]|=1<<s}(t,e,n)}function an(t,e,n){if(n&mt.Optional)return t;it(e,"NodeInjector")}function ln(t,e,n,r){if(n&mt.Optional&&void 0===r&&(r=null),0==(n&(mt.Self|mt.Host))){const s=t[9],o=vt(void 0);try{return s?s.get(e,r,n&mt.Optional):_t(e,r,n&mt.Optional)}finally{vt(o)}}return an(r,e,n)}function un(t,e,n,r=mt.Default,s){if(null!==t){const o=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(Nt)?t[Nt]:void 0;return"number"==typeof e?e>=0?255&e:hn:e}(n);if("function"==typeof o){if(!Re(e,t,r))return r&mt.Host?an(s,n,r):ln(e,n,r,s);try{const t=o();if(null!=t||r&mt.Optional)return t;it(n)}finally{De()}}else if("number"==typeof o){let s=null,i=rn(t,e),a=ze,l=r&mt.Host?e[16][6]:null;for((-1===i||r&mt.SkipSelf)&&(a=-1===i?sn(t,e):e[i+8],a!==ze&&gn(r,!1)?(s=e[1],i=Je(a),e=Ye(a,e)):i=-1);-1!==i;){const t=e[1];if(fn(o,i,t.data)){const t=dn(i,e,n,s,r,l);if(t!==cn)return t}a=e[i+8],a!==ze&&gn(r,e[1].data[i+8]===l)&&fn(o,i,e)?(s=t,i=Je(a),e=Ye(a,e)):i=-1}}}return ln(e,n,r,s)}const cn={};function hn(){return new mn(_e(),ye())}function dn(t,e,n,r,s,o){const i=e[1],a=i.data[t+8],l=function(t,e,n,r,s){const o=t.providerIndexes,i=e.data,a=1048575&o,l=t.directiveStart,u=o>>20,c=s?a+u:t.directiveEnd;for(let h=r?a:a+u;h<c;h++){const t=i[h];if(h<l&&n===t||h>=l&&t.type===n)return h}if(s){const t=i[l];if(t&&Kt(t)&&t.type===n)return l}return null}(a,i,n,null==r?Yt(a)&&Ke:r!=i&&0!=(3&a.type),s&mt.Host&&o===a);return null!==l?pn(e,i,l,a):cn}function pn(t,e,n,r){let s=t[n];const o=e.data;if(s instanceof Be){const i=s;i.resolving&&function(t,e){throw new st("200",`Circular dependency in DI detected for ${t}`)}(ot(o[n]));const a=Xe(i.canSeeViewProviders);i.resolving=!0;const l=i.injectImpl?vt(i.injectImpl):null;Re(t,r,mt.Default);try{s=t[n]=i.factory(void 0,o,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const{ngOnChanges:r,ngOnInit:s,ngDoCheck:o}=e.type.prototype;if(r){const r=((i=e).type.prototype.ngOnChanges&&(i.setInput=ne),ee);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,r)}var i;s&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,s),o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,o))}(n,o[n],e)}finally{null!==l&&vt(l),Xe(a),i.resolving=!1,De()}}return s}function fn(t,e,n){return!!(n[e+(t>>5)]&1<<t)}function gn(t,e){return!(t&mt.Self||t&mt.Host&&e)}class mn{constructor(t,e){this._tNode=t,this._lView=e}get(t,e){return un(this._tNode,this._lView,t,void 0,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const yn="__parameters__";function vn(t,e,n){return wt(()=>{const r=function(t){return function(...e){if(t){const n=t(...e);for(const t in n)this[t]=n[t]}}}(e);function s(...t){if(this instanceof s)return r.apply(this,t),this;const e=new s(...t);return n.annotation=e,n;function n(t,n,r){const s=t.hasOwnProperty(yn)?t[yn]:Object.defineProperty(t,yn,{value:[]})[yn];for(;s.length<=r;)s.push(null);return(s[r]=s[r]||[]).push(e),t}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class _n{constructor(t,e){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.\u0275prov=at({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const wn=new _n("AnalyzeForEntryComponents"),bn=Function;function Sn(t,e){t.forEach(t=>Array.isArray(t)?Sn(t,e):e(t))}function Cn(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function xn(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const En={},Tn=/\n/gm,kn="__source",An=K({provide:String,useValue:K});let Rn;function In(t){const e=Rn;return Rn=t,e}function On(t,e=mt.Default){if(void 0===Rn)throw new Error("inject() must be called from an injection context");return null===Rn?_t(t,void 0,e):Rn.get(t,e&mt.Optional?null:void 0,e)}function Pn(t,e=mt.Default){return(yt||On)(rt(t),e)}function jn(t){const e=[];for(let n=0;n<t.length;n++){const r=rt(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let t,n=mt.Default;for(let e=0;e<r.length;e++){const s=r[e],o=s.__NG_DI_FLAG__;"number"==typeof o?-1===o?t=s.token:n|=o:t=s}e.push(Pn(t,n))}else e.push(Pn(r))}return e}function Dn(t,e){return t.__NG_DI_FLAG__=e,t.prototype.__NG_DI_FLAG__=e,t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Un=Dn(vn("Inject",t=>({token:t})),-1),Nn=Dn(vn("Optional"),8),Hn=Dn(vn("SkipSelf"),4);function Mn(t){return t.ngDebugContext}function Ln(t){return t.ngOriginalError}function Fn(t,...e){t.error(...e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class $n{constructor(){this._console=console}handleError(t){const e=this._findOriginalError(t),n=this._findContext(t),r=function(t){return t.ngErrorLogger||Fn}(t);r(this._console,"ERROR",t),e&&r(this._console,"ORIGINAL ERROR",e),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(t){return t?Mn(t)?Mn(t):this._findContext(Ln(t)):null}_findOriginalError(t){let e=Ln(t);for(;e&&Ln(e);)e=Ln(e);return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vn(t,e){t.__ngContext__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const zn=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(kt))();function Bn(t){return t instanceof Function?t():t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var qn=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Zn(t,e){return(void 0)(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Gn(t){const e=t[3];return Qt(e)?e[3]:e}function Wn(t){return Jn(t[13])}function Qn(t){return Jn(t[4])}function Jn(t){for(;null!==t&&!Qt(t);)t=t[4];return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yn(t,e,n,r,s){if(null!=r){let o,i=!1;Qt(r)?o=r:Wt(r)&&(i=!0,r=r[0]);const a=ae(r);0===t&&null!==n?null==s?sr(e,n,a):rr(e,n,a,s||null,!0):1===t&&null!==n?rr(e,n,a,s||null,!0):2===t?function(t,e,n){const r=ir(t,e);r&&function(t,e,n,r){oe(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}(e,a,i):3===t&&e.destroyNode(a),null!=o&&function(t,e,n,r,s){const o=n[7];o!==ae(n)&&Yn(e,t,r,o,s);for(let i=Gt;i<n.length;i++){const s=n[i];dr(s[1],s,t,e,r,o)}}(e,t,o,n,s)}}function Kn(t,e,n){return oe(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function Xn(t,e){const n=t[9],r=n.indexOf(e),s=e[3];1024&e[2]&&(e[2]&=-1025,fe(s,-1)),n.splice(r,1)}function tr(t,e){if(t.length<=Gt)return;const n=Gt+e,r=t[n];if(r){const o=r[17];null!==o&&o!==t&&Xn(o,r),e>0&&(t[n-1][4]=r[4]);const i=xn(t,Gt+e);dr(r[1],s=r,s[11],2,null,null),s[0]=null,s[6]=null;const a=i[19];null!==a&&a.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}var s;return r}function er(t,e){if(!(256&e[2])){const n=e[11];oe(n)&&n.destroyNode&&dr(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return nr(t[1],t);for(;e;){let n=null;if(Wt(e))n=e[13];else{const t=e[10];t&&(n=t)}if(!n){for(;e&&!e[4]&&e!==t;)Wt(e)&&nr(e[1],e),e=e[3];null===e&&(e=t),Wt(e)&&nr(e[1],e),n=e&&e[4]}e=n}}(e)}}function nr(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const t=e[n[r]];if(!(t instanceof Be)){const e=n[r+1];if(Array.isArray(e))for(let n=0;n<e.length;n+=2)e[n+1].call(t[e[n]]);else e.call(t)}}}(t,e),function(t,e){const n=t.cleanup,r=e[7];let s=-1;if(null!==n)for(let o=0;o<n.length-1;o+=2)if("string"==typeof n[o]){const t=n[o+1],i="function"==typeof t?t(e):ae(e[t]),a=r[s=n[o+2]],l=n[o+3];"boolean"==typeof l?i.removeEventListener(n[o],a,l):l>=0?r[s=l]():r[s=-l].unsubscribe(),o+=2}else{const t=r[s=n[o+1]];n[o].call(t)}if(null!==r){for(let t=s+1;t<r.length;t++)(0,r[t])();e[7]=null}}(t,e),1===e[1].type&&oe(e[11])&&e[11].destroy();const n=e[17];if(null!==n&&Qt(e[3])){n!==e[3]&&Xn(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function rr(t,e,n,r,s){oe(t)?t.insertBefore(e,n,r,s):e.insertBefore(n,r,s)}function sr(t,e,n){oe(t)?t.appendChild(e,n):e.appendChild(n)}function or(t,e,n,r,s){null!==r?rr(t,e,n,r,s):sr(t,e,n)}function ir(t,e){return oe(t)?t.parentNode(e):e.parentNode}function ar(t,e,n,r){const s=function(t,e,n){return function(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const e=t.data[r.directiveStart].encapsulation;if(e===St.None||e===St.Emulated)return null}return le(r,n)}(t,e.parent,n)}(t,r,e),o=e[11],i=function(t,e,n){return function(t,e,n){return 40&t.type?le(t,n):null}(t,0,n)}(r.parent||e[6],0,e);if(null!=s)if(Array.isArray(n))for(let a=0;a<n.length;a++)or(o,s,n[a],i,!1);else or(o,s,n,i,!1)}function lr(t,e){if(null!==e){const n=e.type;if(3&n)return le(e,t);if(4&n)return cr(-1,t[e.index]);if(8&n){const n=e.child;if(null!==n)return lr(t,n);{const n=t[e.index];return Qt(n)?cr(-1,n):ae(n)}}if(32&n)return Zn(e,t)()||ae(t[e.index]);{const n=ur(t,e);return null!==n?Array.isArray(n)?n[0]:lr(Gn(t[16]),n):lr(t,e.next)}}return null}function ur(t,e){return null!==e?t[16][6].projection[e.projection]:null}function cr(t,e){const n=Gt+t+1;if(n<e.length){const t=e[n],r=t[1].firstChild;if(null!==r)return lr(t,r)}return e[7]}function hr(t,e,n,r,s,o,i){for(;null!=n;){const a=r[n.index],l=n.type;if(i&&0===e&&(a&&Vn(ae(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)hr(t,e,n.child,r,s,o,!1),Yn(e,t,s,a,o);else if(32&l){const i=Zn(n,r);let l;for(;l=i();)Yn(e,t,s,l,o);Yn(e,t,s,a,o)}else 16&l?pr(t,e,r,n,s,o):Yn(e,t,s,a,o);n=i?n.projectionNext:n.next}}function dr(t,e,n,r,s,o){hr(n,r,t.firstChild,e,s,o,!1)}function pr(t,e,n,r,s,o){const i=n[16],a=i[6].projection[r.projection];if(Array.isArray(a))for(let l=0;l<a.length;l++)Yn(e,t,s,a[l],o);else hr(t,e,a,i[3],s,o,!0)}function fr(t,e,n){oe(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function gr(t,e,n){oe(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function mr(t,e,n){let r=t.length;for(;;){const s=t.indexOf(e,n);if(-1===s)return s;if(0===s||t.charCodeAt(s-1)<=32){const n=e.length;if(s+n===r||t.charCodeAt(s+n)<=32)return s}n=s+1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const yr="ng-template";function vr(t,e,n){let r=0;for(;r<t.length;){let s=t[r++];if(n&&"class"===s){if(s=t[r],-1!==mr(s.toLowerCase(),e,0))return!0}else if(1===s){for(;r<t.length&&"string"==typeof(s=t[r++]);)if(s.toLowerCase()===e)return!0;return!1}}return!1}function _r(t){return 4===t.type&&t.value!==yr}function wr(t,e,n){return e===(4!==t.type||n?t.value:yr)}function br(t,e,n){let r=4;const s=t.attrs||[],o=function(t){for(let e=0;e<t.length;e++)if(Ze(t[e]))return e;return t.length}(s);let i=!1;for(let a=0;a<e.length;a++){const l=e[a];if("number"!=typeof l){if(!i)if(4&r){if(r=2|1&r,""!==l&&!wr(t,l,n)||""===l&&1===e.length){if(Sr(r))return!1;i=!0}}else{const u=8&r?l:e[++a];if(8&r&&null!==t.attrs){if(!vr(t.attrs,u,n)){if(Sr(r))return!1;i=!0}continue}const c=Cr(8&r?"class":l,s,_r(t),n);if(-1===c){if(Sr(r))return!1;i=!0;continue}if(""!==u){let t;t=c>o?"":s[c+1].toLowerCase();const e=8&r?t:null;if(e&&-1!==mr(e,u,0)||2&r&&u!==t){if(Sr(r))return!1;i=!0}}}}else{if(!i&&!Sr(r)&&!Sr(l))return!1;if(i&&Sr(l))continue;i=!1,r=l|1&r}}return Sr(r)||i}function Sr(t){return 0==(1&t)}function Cr(t,e,n,r){if(null===e)return-1;let s=0;if(r||!n){let n=!1;for(;s<e.length;){const r=e[s];if(r===t)return s;if(3===r||6===r)n=!0;else{if(1===r||2===r){let t=e[++s];for(;"string"==typeof t;)t=e[++s];continue}if(4===r)break;if(0===r){s+=4;continue}}s+=n?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function xr(t,e,n=!1){for(let r=0;r<e.length;r++)if(br(t,e[r],n))return!0;return!1}function Er(t,e){return t?":not("+e.trim()+")":e}function Tr(t){let e=t[0],n=1,r=2,s="",o=!1;for(;n<t.length;){let i=t[n];if("string"==typeof i)if(2&r){const e=t[++n];s+="["+i+(e.length>0?'="'+e+'"':"")+"]"}else 8&r?s+="."+i:4&r&&(s+=" "+i);else""===s||Sr(i)||(e+=Er(o,s),s=""),r=i,o=o||!Sr(r);n++}return""!==s&&(e+=Er(o,s)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const kr={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ar(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const s=n[r],o=n[r+1];if(-1!==o){const n=t.data[o];ke(s),n.contentQueries(2,e[o],o)}}}function Rr(t,e,n,r,s,o,i,a,l,u){const c=e.blueprint.slice();return c[0]=s,c[2]=140|r,pe(c),c[3]=c[15]=t,c[8]=n,c[10]=i||t&&t[10],c[11]=a||t&&t[11],c[12]=l||t&&t[12]||null,c[9]=u||t&&t[9]||null,c[6]=o,c[16]=2==e.type?t[16]:c,c}function Ir(t,e,n,r,s){let o=t.data[e];if(null===o)o=function(t,e,n,r,s){const o=we(),i=Se(),a=t.data[e]=function(t,e,n,r,s,o){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:s,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,i?o:o&&o.parent,n,e,r,s);return null===t.firstChild&&(t.firstChild=a),null!==o&&(i?null==o.child&&null!==a.parent&&(o.child=a):null===o.next&&(o.next=a)),a}(t,e,n,r,s),ge.lFrame.inI18n&&(o.flags|=64);else if(64&o.type){o.type=n,o.value=r,o.attrs=s;const t=function(){const t=ge.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}();o.injectorIndex=null===t?-1:t.injectorIndex}return be(o,!0),o}function Or(t,e,n,r){if(0===n)return-1;const s=e.length;for(let o=0;o<n;o++)e.push(r),t.blueprint.push(r),t.data.push(null);return s}function Pr(t,e,n){Ie(e);try{const r=t.viewQuery;null!==r&&ts(1,r,n);const s=t.template;null!==s&&Ur(t,e,s,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&Ar(t,e),t.staticViewQueries&&ts(2,t.viewQuery,n);const o=t.components;null!==o&&function(t,e){for(let n=0;n<e.length;n++)Jr(t,e[n])}(e,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0),r}finally{e[2]&=-5,Ue()}}function jr(t,e,n,r){const s=e[2];if(256==(256&s))return;Ie(e);const o=Ce();try{pe(e),ge.lFrame.bindingIndex=t.bindingStartIndex,null!==n&&Ur(t,e,n,2,r);const i=3==(3&s);if(!o)if(i){const n=t.preOrderCheckHooks;null!==n&&Me(e,n,null)}else{const n=t.preOrderHooks;null!==n&&Le(e,n,0,null),Fe(e,0)}if(function(t){for(let e=Wn(t);null!==e;e=Qn(e)){if(!e[2])continue;const t=e[9];for(let e=0;e<t.length;e++){const n=t[e],r=n[3];0==(1024&n[2])&&fe(r,1),n[2]|=1024}}}(e),function(t){for(let e=Wn(t);null!==e;e=Qn(e))for(let t=Gt;t<e.length;t++){const n=e[t],r=n[1];he(n)&&jr(r,n,r.template,n[8])}}(e),null!==t.contentQueries&&Ar(t,e),!o)if(i){const n=t.contentCheckHooks;null!==n&&Me(e,n)}else{const n=t.contentHooks;null!==n&&Le(e,n,1),Fe(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let t=0;t<n.length;t++){const r=n[t];if(r<0)Ne(~r);else{const s=r,o=n[++t],i=n[++t];Ee(o,s),i(2,e[s])}}}finally{Ne(-1)}}(t,e);const a=t.components;null!==a&&function(t,e){for(let n=0;n<e.length;n++)Wr(t,e[n])}(e,a);const l=t.viewQuery;if(null!==l&&ts(2,l,r),!o)if(i){const n=t.viewCheckHooks;null!==n&&Me(e,n)}else{const n=t.viewHooks;null!==n&&Le(e,n,2),Fe(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),o||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,fe(e[3],-1))}finally{Ue()}}function Dr(t,e,n,r){const s=e[10],o=!Ce(),i=4==(4&e[2]);try{o&&!i&&s.begin&&s.begin(),i&&Pr(t,e,r),jr(t,e,n,r)}finally{o&&!i&&s.end&&s.end()}}function Ur(t,e,n,r,s){const o=ge.lFrame.selectedIndex,i=2&r;try{Ne(-1),i&&e.length>20&&function(t,e,n,r){if(!r)if(3==(3&e[2])){const n=t.preOrderCheckHooks;null!==n&&Me(e,n,20)}else{const n=t.preOrderHooks;null!==n&&Le(e,n,0,20)}Ne(20)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e,0,Ce()),n(r,s)}finally{Ne(o)}}function Nr(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=Hr(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function Hr(t,e,n,r,s,o,i,a,l,u){const c=20+r,h=c+s,d=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:kr);return n}(c,h),p="function"==typeof u?u():u;return d[1]={type:t,blueprint:d,template:n,queries:null,viewQuery:a,declTNode:e,data:d.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:l,consts:p,incompleteFirstPass:!1}}function Mr(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){const s=t[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(e,s):n[r]=[e,s]}return n}function Lr(t,e,n,r,s,o){const i=o.hostBindings;if(i){let n=t.hostBindingOpCodes;null===n&&(n=t.hostBindingOpCodes=[]);const o=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(n)!=o&&n.push(o),n.push(r,s,i)}}function Fr(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function $r(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function Vr(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;Kt(e)&&(n[""]=t)}}function zr(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Br(t,e,n,r,s){t.data[r]=s;const o=s.factory||(s.factory=Xt(s.type)),i=new Be(o,Kt(s),null);t.blueprint[r]=i,n[r]=i,Lr(t,e,0,r,Or(t,n,s.hostVars,kr),s)}function qr(t,e,n){const r=le(e,t),s=Nr(n),o=t[10],i=Yr(t,Rr(t,s,null,n.onPush?64:16,r,e,o,o.createRenderer(r,n),null,null));t[e.index]=i}function Zr(t,e,n,r,s,o){const i=o[e];if(null!==i){const t=r.setInput;for(let e=0;e<i.length;){const s=i[e++],o=i[e++],a=i[e++];null!==t?r.setInput(n,a,s,o):n[o]=a}}}function Gr(t,e){let n=null,r=0;for(;r<e.length;){const s=e[r];if(0!==s)if(5!==s){if("number"==typeof s)break;t.hasOwnProperty(s)&&(null===n&&(n=[]),n.push(s,t[s],e[r+1])),r+=2}else r+=2;else r+=4}return n}function Wr(t,e){const n=ue(e,t);if(he(n)){const t=n[1];80&n[2]?jr(t,n,t.template,n[8]):n[5]>0&&Qr(n)}}function Qr(t){for(let n=Wn(t);null!==n;n=Qn(n))for(let t=Gt;t<n.length;t++){const e=n[t];if(1024&e[2]){const t=e[1];jr(t,e,t.template,e[8])}else e[5]>0&&Qr(e)}const e=t[1].components;if(null!==e)for(let n=0;n<e.length;n++){const r=ue(e[n],t);he(r)&&r[5]>0&&Qr(r)}}function Jr(t,e){const n=ue(e,t),r=n[1];!function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}(r,n),Pr(r,n,n[8])}function Yr(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function Kr(t,e,n){const r=e[10];r.begin&&r.begin();try{jr(t,e,t.template,n)}catch(s){throw function(t,e){const n=t[9],r=n?n.get($n,null):null;r&&r.handleError(e)}(e,s),s}finally{r.end&&r.end()}}function Xr(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=ce(n),s=r[1];Dr(s,r,s.template,n)}}(t[8])}function ts(t,e,n){ke(0),e(t,n)}const es=(()=>Promise.resolve(null))();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ns(t,e,n){let r=n?t.styles:null,s=n?t.classes:null,o=0;if(null!==e)for(let i=0;i<e.length;i++){const t=e[i];"number"==typeof t?o=t:1==o?s=tt(s,t):2==o&&(r=tt(r,t+": "+e[++i]+";"))}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=s:t.classesWithoutHost=s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const rs=new _n("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ss{get(t,e=En){if(e===En){const e=new Error(`NullInjectorError: No provider for ${X(t)}!`);throw e.name="NullInjectorError",e}return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const os=new _n("Set Injector scope."),is={},as={},ls=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let us;function cs(){return void 0===us&&(us=new ss),us}function hs(t,e=null,n=null,r){return new ds(t,n,e||cs(),r)}class ds{constructor(t,e,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];e&&Sn(e,n=>this.processProvider(n,t,e)),Sn([t],t=>this.processInjectorType(t,[],s)),this.records.set(rs,fs(void 0,this));const o=this.records.get(os);this.scope=null!=o?o.value:null,this.source=r||("object"==typeof t?null:X(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,e=En,n=mt.Default){this.assertNotDestroyed();const r=In(this);try{if(!(n&mt.SkipSelf)){let e=this.records.get(t);if(void 0===e){const n=("function"==typeof(s=t)||"object"==typeof s&&s instanceof _n)&&ut(t);e=n&&this.injectableDefInScope(n)?fs(ps(t),is):null,this.records.set(t,e)}if(null!=e)return this.hydrate(t,e)}return(n&mt.Self?cs():this.parent).get(t,e=n&mt.Optional&&e===En?null:e)}catch(o){if("NullInjectorError"===o.name){if((o.ngTempTokenPath=o.ngTempTokenPath||[]).unshift(X(t)),r)throw o;return function(t,e,n,r){const s=t.ngTempTokenPath;throw e[kn]&&s.unshift(e[kn]),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let s=X(e);if(Array.isArray(e))s=e.map(X).join(" -> ");else if("object"==typeof e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let r=e[n];t.push(n+":"+("string"==typeof r?JSON.stringify(r):X(r)))}s=`{${t.join(", ")}}`}return`${n}${r?"("+r+")":""}[${s}]: ${t.replace(Tn,"\n  ")}`}("\n"+t.message,s,n,r),t.ngTokenPath=s,t.ngTempTokenPath=null,t}(o,t,"R3InjectorError",this.source)}throw o}finally{In(r)}var s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((e,n)=>t.push(X(n))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,e,n){if(!(t=rt(t)))return!1;let r=ht(t);const s=null==r&&t.ngModule||void 0,o=void 0===s?t:s,i=-1!==n.indexOf(o);if(void 0!==s&&(r=ht(s)),null==r)return!1;if(null!=r.imports&&!i){let t;n.push(o);try{Sn(r.imports,r=>{this.processInjectorType(r,e,n)&&(void 0===t&&(t=[]),t.push(r))})}finally{}if(void 0!==t)for(let e=0;e<t.length;e++){const{ngModule:n,providers:r}=t[e];Sn(r,t=>this.processProvider(t,n,r||ls))}}this.injectorDefTypes.add(o);const a=Xt(o)||(()=>new o);this.records.set(o,fs(a,is));const l=r.providers;if(null!=l&&!i){const e=t;Sn(l,t=>this.processProvider(t,e,l))}return void 0!==s&&void 0!==t.providers}processProvider(t,e,n){let r=ms(t=rt(t))?t:rt(t&&t.provide);const s=function(t,e,n){return gs(t)?fs(void 0,t.useValue):fs(function(t,e,n){let r;if(ms(t)){const e=rt(t);return Xt(e)||ps(e)}if(gs(t))r=()=>rt(t.useValue);else if((s=t)&&s.useFactory)r=()=>t.useFactory(...jn(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>Pn(rt(t.useExisting));else{const e=rt(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return Xt(e)||ps(e);r=()=>new e(...jn(t.deps))}var s;return r}(t),is)}(t);if(ms(t)||!0!==t.multi)this.records.get(r);else{let e=this.records.get(r);e||(e=fs(void 0,is,!0),e.factory=()=>jn(e.multi),this.records.set(r,e)),r=t,e.multi.push(t)}this.records.set(r,s)}hydrate(t,e){var n;return e.value===is&&(e.value=as,e.value=e.factory()),"object"==typeof e.value&&e.value&&null!==(n=e.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(e.value),e.value}injectableDefInScope(t){return!!t.providedIn&&("string"==typeof t.providedIn?"any"===t.providedIn||t.providedIn===this.scope:this.injectorDefTypes.has(t.providedIn))}}function ps(t){const e=ut(t),n=null!==e?e.factory:Xt(t);if(null!==n)return n;if(t instanceof _n)throw new Error(`Token ${X(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const n=function(t,e){const n=[];for(let r=0;r<t;r++)n.push("?");return n}(e);throw new Error(`Can't resolve all parameters for ${X(t)}: (${n.join(", ")}).`)}const n=function(t){const e=t&&(t[dt]||t[ft]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function fs(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function gs(t){return null!==t&&"object"==typeof t&&An in t}function ms(t){return"function"==typeof t}const ys=function(t,e,n){return function(t,e=null,n=null,r){const s=hs(t,e,n,r);return s._resolveInjectorDefTypes(),s}({name:n},e,t,n)};let vs=(()=>{class t{static create(t,e){return Array.isArray(t)?ys(t,e,""):ys(t.providers,t.parent,t.name||"")}}return t.THROW_IF_NOT_FOUND=En,t.NULL=new ss,t.\u0275prov=at({token:t,providedIn:"any",factory:()=>Pn(rs)}),t.__NG_ELEMENT_ID__=-1,t})();function _s(t,e){He(ce(t)[1],_e())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let ws=null;function bs(){if(!ws){const t=kt.Symbol;if(t&&t.iterator)ws=t.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<t.length;++e){const n=t[e];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(ws=n)}}}return ws}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ss(t){return!!Cs(t)&&(Array.isArray(t)||!(t instanceof Map)&&bs()in t)}function Cs(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function xs(t,e=mt.Default){const n=ye();return null===n?Pn(t,e):un(_e(),n,rt(t),e)}function Es(t,e,n,r,s){const o=s?"class":"style";!function(t,e,n,r,s){for(let o=0;o<n.length;){const i=n[o++],a=n[o++],l=e[i],u=t.data[i];null!==u.setInput?u.setInput(l,s,r,a):l[a]=s}}(t,n,e.inputs[o],o,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ts(t,e,n,r){const s=ye(),o=ve(),i=20+t,a=s[11],l=s[i]=Kn(a,e,ge.lFrame.currentNamespace),u=o.firstCreatePass?function(t,e,n,r,s,o,i){const a=e.consts,l=Ir(e,t,2,s,de(a,o));return function(t,e,n,r){let s=!1;if(me()){const o=function(t,e,n){const r=t.directiveRegistry;let s=null;if(r)for(let o=0;o<r.length;o++){const i=r[o];xr(n,i.selectors,!1)&&(s||(s=[]),on(en(n,e),t,i.type),Kt(i)?($r(t,n),s.unshift(i)):s.push(i))}return s}(t,e,n),i=null===r?null:{"":-1};if(null!==o){s=!0,zr(n,t.data.length,o.length);for(let t=0;t<o.length;t++){const e=o[t];e.providersResolver&&e.providersResolver(e)}let r=!1,a=!1,l=Or(t,e,o.length,null);for(let s=0;s<o.length;s++){const u=o[s];n.mergedAttrs=Ge(n.mergedAttrs,u.hostAttrs),Br(t,n,e,l,u),Vr(l,u,i),null!==u.contentQueries&&(n.flags|=8),null===u.hostBindings&&null===u.hostAttrs&&0===u.hostVars||(n.flags|=128);const c=u.type.prototype;!r&&(c.ngOnChanges||c.ngOnInit||c.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),r=!0),a||!c.ngOnChanges&&!c.ngDoCheck||((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),a=!0),l++}!function(t,e){const n=e.directiveEnd,r=t.data,s=e.attrs,o=[];let i=null,a=null;for(let l=e.directiveStart;l<n;l++){const t=r[l],n=t.inputs,u=null===s||_r(e)?null:Gr(n,s);o.push(u),i=Mr(n,l,i),a=Mr(t.outputs,l,a)}null!==i&&(i.hasOwnProperty("class")&&(e.flags|=16),i.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=o,e.inputs=i,e.outputs=a}(t,n)}i&&function(t,e,n){if(e){const r=t.localNames=[];for(let t=0;t<e.length;t+=2){const s=n[e[t+1]];if(null==s)throw new st("301",`Export of name '${e[t+1]}' not found!`);r.push(e[t],s)}}}(n,r,i)}n.mergedAttrs=Ge(n.mergedAttrs,n.attrs)}(e,n,l,de(a,i)),null!==l.attrs&&ns(l,l.attrs,!1),null!==l.mergedAttrs&&ns(l,l.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,l),l}(i,o,s,0,e,n,r):o.data[i];be(u,!0);const c=u.mergedAttrs;null!==c&&qe(a,l,c);const h=u.classes;null!==h&&gr(a,l,h);const d=u.styles;null!==d&&fr(a,l,d),64!=(64&u.flags)&&ar(o,s,l,u),0===ge.lFrame.elementDepthCount&&Vn(l,s),ge.lFrame.elementDepthCount++,function(t){return 1==(1&t.flags)}(u)&&(function(t,e,n){me()&&(function(t,e,n,r){const s=n.directiveStart,o=n.directiveEnd;t.firstCreatePass||en(n,e),Vn(r,e);const i=n.initialInputs;for(let a=s;a<o;a++){const r=t.data[a],o=Kt(r);o&&qr(e,n,r);const l=pn(e,t,a,n);Vn(l,e),null!==i&&Zr(0,a-s,l,r,0,i),o&&(ue(n.index,e)[8]=l)}}(t,e,n,le(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,s=n.directiveEnd,o=n.index,i=ge.lFrame.currentDirectiveIndex;try{Ne(o);for(let n=r;n<s;n++){const r=t.data[n],s=e[n];Te(n),null===r.hostBindings&&0===r.hostVars&&null===r.hostAttrs||Fr(r,s)}}finally{Ne(-1),Te(i)}}(t,e,n))}(o,s,u),function(t,e,n){if(Jt(e)){const r=e.directiveEnd;for(let s=e.directiveStart;s<r;s++){const e=t.data[s];e.contentQueries&&e.contentQueries(1,n[s],s)}}}(o,u,s)),null!==r&&function(t,e,n=le){const r=e.localNames;if(null!==r){let s=e.index+1;for(let o=0;o<r.length;o+=2){const i=r[o+1],a=-1===i?n(e,t):t[i];t[s++]=a}}}(s,u)}function ks(t,e,n,r){Ts(t,e,n,r),function(){let t=_e();Se()?ge.lFrame.isParent=!1:(t=t.parent,be(t,!1));const e=t;ge.lFrame.elementDepthCount--;const n=ve();n.firstCreatePass&&(He(n,t),Jt(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&Es(n,e,ye(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e)&&Es(n,e,ye(),e.stylesWithoutHost,!1)}()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function As(t){return!!t&&"function"==typeof t.then}const Rs=void 0;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Is=["en",[["a","p"],["AM","PM"],Rs],[["AM","PM"],Rs,Rs],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Rs,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Rs,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Rs,"{1} 'at' {0}",Rs],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){let e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Os={};function Ps(t){return t in Os||(Os[t]=kt.ng&&kt.ng.common&&kt.ng.common.locales&&kt.ng.common.locales[t]),Os[t]}var js=function(t){return t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData",t}({});const Ds="en-US";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Us=Ds;function Ns(t){var e,n;n="Expected localeId to be defined",null==(e=t)&&function(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`)}(n,e),"string"==typeof t&&(Us=t.toLowerCase().replace(/_/g,"-"))}class Hs{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ms{resolveComponentFactory(t){throw function(t){const e=Error(`No component factory found for ${X(t)}. Did you add it to @NgModule.entryComponents?`);return e.ngComponent=t,e}(t)}}let Ls=(()=>{class t{}return t.NULL=new Ms,t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Fs(...t){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function $s(t,e){return new zs(le(t,e))}const Vs=function(){return $s(_e(),ye())};let zs=(()=>{class t{constructor(t){this.nativeElement=t}}return t.__NG_ELEMENT_ID__=Vs,t})();class Bs{}let qs=(()=>{class t{}return t.\u0275prov=at({token:t,providedIn:"root",factory:()=>null}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Zs{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const Gs=new Zs("11.2.11");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ws{constructor(){}supports(t){return Ss(t)}create(t){return new Js(t)}}const Qs=(t,e)=>e;class Js{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Qs}forEachItem(t){let e;for(e=this._itHead;null!==e;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,n=this._removalsHead,r=0,s=null;for(;e||n;){const o=!n||e&&e.currentIndex<to(n,r,s)?e:n,i=to(o,r,s),a=o.currentIndex;if(o===n)r--,n=n._nextRemoved;else if(e=e._next,null==o.previousIndex)r++;else{s||(s=[]);const t=i-r,e=a-r;if(t!=e){for(let n=0;n<t;n++){const r=n<s.length?s[n]:s[n]=0,o=r+n;e<=o&&o<t&&(s[n]=r+1)}s[o.previousIndex]=e-t}}i!==a&&t(o,i,a)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)t(e)}diff(t){if(null==t&&(t=[]),!Ss(t))throw new Error(`Error trying to diff '${X(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e,n,r,s=this._itHead,o=!1;if(Array.isArray(t)){this.length=t.length;for(let e=0;e<this.length;e++)n=t[e],r=this._trackByFn(e,n),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,n,r,e)),Object.is(s.item,n)||this._addIdentityChange(s,n)):(s=this._mismatch(s,n,r,e),o=!0),s=s._next}else e=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[bs()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(t,t=>{r=this._trackByFn(e,t),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,t,r,e)),Object.is(s.item,t)||this._addIdentityChange(s,t)):(s=this._mismatch(s,t,r,e),o=!0),s=s._next,e++}),this.length=e;return this._truncate(s),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,n,r){let s;return null===t?s=this._itTail:(s=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,s,r)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,s,r)):t=this._addAfter(new Ys(e,n),s,r),t}_verifyReinsertion(t,e,n,r){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==s?t=this._reinsertAfter(s,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const e=t._next;this._addToRemovals(this._unlink(t)),t=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,s=t._nextRemoved;return null===r?this._removalsHead=s:r._nextRemoved=s,null===s?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(t,e,n),this._addToMoves(t,n),t}_moveAfter(t,e,n){return this._unlink(t),this._insertAfter(t,e,n),this._addToMoves(t,n),t}_addAfter(t,e,n){return this._insertAfter(t,e,n),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,e,n){const r=null===e?this._itHead:e._next;return t._next=r,t._prev=e,null===r?this._itTail=t:r._prev=t,null===e?this._itHead=t:e._next=t,null===this._linkedRecords&&(this._linkedRecords=new Xs),this._linkedRecords.put(t),t.currentIndex=n,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const e=t._prev,n=t._next;return null===e?this._itHead=n:e._next=n,null===n?this._itTail=e:n._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Xs),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class Ys{constructor(t,e){this.item=t,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Ks{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===e||e<=n.currentIndex)&&Object.is(n.trackById,t))return n;return null}remove(t){const e=t._prevDup,n=t._nextDup;return null===e?this._head=n:e._nextDup=n,null===n?this._tail=e:n._prevDup=e,null===this._head}}class Xs{constructor(){this.map=new Map}put(t){const e=t.trackById;let n=this.map.get(e);n||(n=new Ks,this.map.set(e,n)),n.add(t)}get(t,e){const n=this.map.get(t);return n?n.get(t,e):null}remove(t){const e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function to(t,e,n){const r=t.previousIndex;if(null===r)return r;let s=0;return n&&r<n.length&&(s=n[r]),r+e+s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class eo{constructor(){}supports(t){return t instanceof Map||Cs(t)}create(){return new no}}class no{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let e;for(e=this._mapHead;null!==e;e=e._next)t(e)}forEachPreviousItem(t){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)t(e)}forEachChangedItem(t){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}diff(t){if(t){if(!(t instanceof Map||Cs(t)))throw new Error(`Error trying to diff '${X(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(t,(t,n)=>{if(e&&e.key===n)this._maybeAddToChanges(e,t),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(n,t);e=this._insertBeforeOrAppend(e,r)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let t=e;null!==t;t=t._nextRemoved)t===this._mapHead&&(this._mapHead=null),this._records.delete(t.key),t._nextRemoved=t._next,t.previousValue=t.currentValue,t.currentValue=null,t._prev=null,t._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,e){if(t){const n=t._prev;return e._next=t,e._prev=n,t._prev=e,n&&(n._next=e),t===this._mapHead&&(this._mapHead=e),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(t,e){if(this._records.has(t)){const n=this._records.get(t);this._maybeAddToChanges(n,e);const r=n._prev,s=n._next;return r&&(r._next=s),s&&(s._prev=r),n._next=null,n._prev=null,n}const n=new ro(t);return this._records.set(t,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,e){Object.is(e,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=e,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,e){t instanceof Map?t.forEach(e):Object.keys(t).forEach(n=>e(t[n],n))}}class ro{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function so(){return new oo([new Ws])}let oo=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(null!=n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>t.create(e,n||so()),deps:[[t,new Hn,new Nn]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(null!=e)return e;throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}return t.\u0275prov=at({token:t,providedIn:"root",factory:so}),t})();function io(){return new ao([new eo])}let ao=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>t.create(e,n||io()),deps:[[t,new Hn,new Nn]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(e)return e;throw new Error(`Cannot find a differ supporting object '${t}'`)}}return t.\u0275prov=at({token:t,providedIn:"root",factory:io}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function lo(t,e,n,r,s=!1){for(;null!==n;){const o=e[n.index];if(null!==o&&r.push(ae(o)),Qt(o))for(let t=Gt;t<o.length;t++){const e=o[t],n=e[1].firstChild;null!==n&&lo(e[1],e,n,r)}const i=n.type;if(8&i)lo(t,e,n.child,r);else if(32&i){const t=Zn(n,e);let s;for(;s=t();)r.push(s)}else if(16&i){const t=ur(e,n);if(Array.isArray(t))r.push(...t);else{const n=Gn(e[16]);lo(n[1],n,t,r,!0)}}n=s?n.projectionNext:n.next}return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class uo{constructor(t,e){this._lView=t,this._cdRefInjectingView=e,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,e=t[1];return lo(e,t,e.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Qt(t)){const e=t[8],n=e?e.indexOf(this):-1;n>-1&&(tr(t,n),xn(e,n))}this._attachedToViewContainer=!1}er(this._lView[1],this._lView)}onDestroy(t){!function(t,e,n,r){const s=(o=e)[7]||(o[7]=[]);var o;s.push(r)}(0,this._lView,0,t)}markForCheck(){!function(t){for(;t;){t[2]|=64;const e=Gn(t);if(0!=(512&t[2])&&!e)return t;t=e}}(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Kr(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){xe(!0);try{Kr(t,e,n)}finally{xe(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,dr(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class co extends uo{constructor(t){super(t),this._view=t}detectChanges(){Xr(this._view)}checkNoChanges(){!function(t){xe(!0);try{Xr(t)}finally{xe(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ho=function(t=!1){return function(t,e,n){if(!n&&Yt(t)){const n=ue(t.index,e);return new uo(n,n)}return 47&t.type?new uo(e[16],e):null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(_e(),ye(),t)};let po=(()=>{class t{}return t.__NG_ELEMENT_ID__=ho,t.__ChangeDetectorRef__=!0,t})();const fo=[new eo],go=new oo([new Ws]),mo=new ao(fo);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class yo{}class vo{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _o=function(){return function(t,e){let n;const r=e[t.index];if(Qt(r))n=r;else{let s;if(8&t.type)s=ae(r);else{const n=e[11];s=n.createComment("");const r=le(t,e);rr(n,ir(n,r),s,function(t,e){return oe(t)?t.nextSibling(e):e.nextSibling}(n,r),!1)}e[t.index]=n=new Array(r,!0,!1,e,null,0,t,s,null,null),Yr(e,n)}return new So(n,t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(_e(),ye())};let wo=(()=>{class t{}return t.__NG_ELEMENT_ID__=_o,t})();const bo=wo,So=class extends bo{constructor(t,e,n){super(),this._lContainer=t,this._hostTNode=e,this._hostLView=n}get element(){return $s(this._hostTNode,this._hostLView)}get injector(){return new mn(this._hostTNode,this._hostLView)}get parentInjector(){const t=sn(this._hostTNode,this._hostLView);if(Qe(t)){const e=Ye(t,this._hostLView),n=Je(t);return new mn(e[1].data[n+8],e)}return new mn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const e=Co(this._lContainer);return null!==e&&e[t]||null}get length(){return this._lContainer.length-Gt}createEmbeddedView(t,e,n){const r=t.createEmbeddedView(e||{});return this.insert(r,n),r}createComponent(t,e,n,r,s){const o=n||this.parentInjector;if(!s&&null==t.ngModule&&o){const t=o.get(yo,null);t&&(s=t)}const i=t.create(o,r,void 0,s);return this.insert(i.hostView,e),i}insert(t,e){const n=t._lView,r=n[1];if(Qt(n[3])){const e=this.indexOf(t);if(-1!==e)this.detach(e);else{const e=n[3],r=new So(e,e[6],e[3]);r.detach(r.indexOf(t))}}const s=this._adjustIndex(e),o=this._lContainer;!function(t,e,n,r){const s=Gt+r,o=n.length;r>0&&(n[s-1][4]=e),r<o-Gt?(e[4]=n[s],Cn(n,Gt+r,e)):(n.push(e),e[4]=null),e[3]=n;const i=e[17];null!==i&&n!==i&&function(t,e){const n=t[9];e[16]!==e[3][3][16]&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(i,e);const a=e[19];null!==a&&a.insertView(t),e[2]|=128}(r,n,o,s);const i=cr(s,o),a=n[11],l=ir(a,o[7]);return null!==l&&function(t,e,n,r,s,o){r[0]=s,r[6]=e,dr(t,r,n,1,s,o)}(r,o[6],a,n,l,i),t.attachToViewContainerRef(),Cn(xo(o),s,t),t}move(t,e){return this.insert(t,e)}indexOf(t){const e=Co(this._lContainer);return null!==e?e.indexOf(t):-1}remove(t){const e=this._adjustIndex(t,-1),n=tr(this._lContainer,e);n&&(xn(xo(this._lContainer),e),er(n[1],n))}detach(t){const e=this._adjustIndex(t,-1),n=tr(this._lContainer,e);return n&&null!=xn(xo(this._lContainer),e)?new uo(n):null}_adjustIndex(t,e=0){return null==t?this.length+e:t}};function Co(t){return t[8]}function xo(t){return t[8]||(t[8]=[])}const Eo={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class To extends Ls{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const e=qt(t);return new Ro(e,this.ngModule)}}function ko(t){const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push({propName:t[n],templateName:n});return e}const Ao=new _n("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>zn});class Ro extends Hs{constructor(t,e){super(),this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=t.selectors.map(Tr).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return ko(this.componentDef.inputs)}get outputs(){return ko(this.componentDef.outputs)}create(t,e,n,r){const s=(r=r||this.ngModule)?function(t,e){return{get:(n,r,s)=>{const o=t.get(n,Eo,s);return o!==Eo||r===Eo?o:e.get(n,r,s)}}}(t,r.injector):t,o=s.get(Bs,ie),i=s.get(qs,null),a=o.createRenderer(null,this.componentDef),l=this.componentDef.selectors[0][0]||"div",u=n?function(t,e,n){if(oe(t))return t.selectRootElement(e,n===St.ShadowDom);let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(a,n,this.componentDef.encapsulation):Kn(o.createRenderer(null,this.componentDef),l,function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(l)),c=this.componentDef.onPush?576:528,h={components:[],scheduler:zn,clean:es,playerHandler:null,flags:0},d=Hr(0,null,null,1,0,null,null,null,null,null),p=Rr(null,d,h,c,null,null,o,a,i,s);let f,g;Ie(p);try{const t=function(t,e,n,r,s,o){const i=n[1];n[20]=t;const a=Ir(i,20,2,"#host",null),l=a.mergedAttrs=e.hostAttrs;null!==l&&(ns(a,l,!0),null!==t&&(qe(s,t,l),null!==a.classes&&gr(s,t,a.classes),null!==a.styles&&fr(s,t,a.styles)));const u=r.createRenderer(t,e),c=Rr(n,Nr(e),null,e.onPush?64:16,n[20],a,r,u,null,null);return i.firstCreatePass&&(on(en(a,n),i,e.type),$r(i,a),zr(a,n.length,1)),Yr(n,c),n[20]=c}(u,this.componentDef,p,o,a);if(u)if(n)qe(a,u,["ng-version",Gs.full]);else{const{attrs:t,classes:e}=function(t){const e=[],n=[];let r=1,s=2;for(;r<t.length;){let o=t[r];if("string"==typeof o)2===s?""!==o&&e.push(o,t[++r]):8===s&&n.push(o);else{if(!Sr(s))break;s=o}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);t&&qe(a,u,t),e&&e.length>0&&gr(a,u,e.join(" "))}if(g=d.data[20],void 0!==e){const t=g.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=e[n];t.push(null!=r?Array.from(r):null)}}f=function(t,e,n,r,s){const o=n[1],i=function(t,e,n){const r=_e();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Br(t,r,e,Or(t,e,1,null),n));const s=pn(e,t,r.directiveStart,r);Vn(s,e);const o=le(r,e);return o&&Vn(o,e),s}(o,n,e);if(r.components.push(i),t[8]=i,s&&s.forEach(t=>t(i,e)),e.contentQueries){const t=_e();e.contentQueries(1,i,t.directiveStart)}const a=_e();return!o.firstCreatePass||null===e.hostBindings&&null===e.hostAttrs||(Ne(a.index),Lr(n[1],a,0,a.directiveStart,a.directiveEnd,e),Fr(e,i)),i}(t,this.componentDef,p,h,[_s]),Pr(d,p,null)}finally{Ue()}return new Io(this.componentType,f,$s(g,p),p,g)}}class Io extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{}{constructor(t,e,n,r,s){super(),this.location=n,this._rootLView=r,this._tNode=s,this.instance=e,this.hostView=this.changeDetectorRef=new co(r),this.componentType=t}get injector(){return new mn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Oo=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Po extends yo{constructor(t,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new To(this);const n=Zt(t),r=t[Dt]||null;r&&Ns(r),this._bootstrapComponents=Bn(n.bootstrap),this._r3Injector=hs(t,e,[{provide:yo,useValue:this},{provide:Ls,useValue:this.componentFactoryResolver}],X(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,e=vs.THROW_IF_NOT_FOUND,n=mt.Default){return t===vs||t===yo||t===rs?this:this._r3Injector.get(t,e,n)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class jo extends vo{constructor(t){super(),this.moduleType=t,null!==Zt(t)&&function(t){const e=new Set;!function t(n){const r=Zt(n,!0),s=r.id;null!==s&&(function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${X(e)} vs ${X(e.name)}`)}(s,Oo.get(s),n),Oo.set(s,n));const o=Bn(r.imports);for(const i of o)e.has(i)||(e.add(i),t(i))}(t)}(t)}create(t){return new Po(this.moduleType,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Do(t){return e=>{setTimeout(t,void 0,e)}}const Uo=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends C{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,e,n){var r,s,o;let i=t,a=e||(()=>null),l=n;if(t&&"object"==typeof t){const e=t;i=null===(r=e.next)||void 0===r?void 0:r.bind(e),a=null===(s=e.error)||void 0===s?void 0:s.bind(e),l=null===(o=e.complete)||void 0===o?void 0:o.bind(e)}this.__isAsync&&(a=Do(a),i&&(i=Do(i)),l&&(l=Do(l)));const u=super.subscribe({next:i,error:a,complete:l});return t instanceof h&&t.add(u),u}},No=new _n("Application Initializer");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ho=(()=>{class t{constructor(t){this.appInits=t,this.resolve=Fs,this.reject=Fs,this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}runInitializers(){if(this.initialized)return;const t=[],e=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const e=this.appInits[n]();As(e)&&t.push(e)}Promise.all(t).then(()=>{e()}).catch(t=>{this.reject(t)}),0===t.length&&e(),this.initialized=!0}}return t.\u0275fac=function(e){return new(e||t)(Pn(No,8))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Mo=new _n("AppId"),Lo={provide:Mo,useFactory:function(){return`${Fo()}${Fo()}${Fo()}`},deps:[]};function Fo(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const $o=new _n("Platform Initializer"),Vo=new _n("Platform ID"),zo=new _n("appBootstrapListener");let Bo=(()=>{class t{log(t){console.log(t)}warn(t){console.warn(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const qo=new _n("LocaleId"),Zo=new _n("DefaultCurrencyCode");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Go{constructor(t,e){this.ngModuleFactory=t,this.componentFactories=e}}const Wo=function(t){return new jo(t)},Qo=Wo,Jo=function(t){return Promise.resolve(Wo(t))},Yo=function(t){const e=Wo(t),n=Bn(Zt(t).declarations).reduce((t,e)=>{const n=qt(e);return n&&t.push(new Ro(n)),t},[]);return new Go(e,n)},Ko=Yo,Xo=function(t){return Promise.resolve(Yo(t))};let ti=(()=>{class t{constructor(){this.compileModuleSync=Qo,this.compileModuleAsync=Jo,this.compileModuleAndAllComponentsSync=Ko,this.compileModuleAndAllComponentsAsync=Xo}clearCache(){}clearCacheFor(t){}getModuleId(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();const ei=(()=>Promise.resolve(0))();function ni(t){"undefined"==typeof Zone?ei.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ri{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:e=!1,shouldCoalesceRunChangeDetection:n=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Uo(!1),this.onMicrotaskEmpty=new Uo(!1),this.onStable=new Uo(!1),this.onError=new Uo(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!n&&e,r.shouldCoalesceRunChangeDetection=n,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=function(){let t=kt.requestAnimationFrame,e=kt.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=()=>{!function(t){-1===t.lastRequestAnimationFrameId&&(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(kt,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,ii(t),oi(t)},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),ii(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,s,o,i,a)=>{try{return ai(t),n.invokeTask(s,o,i,a)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===o.type||t.shouldCoalesceRunChangeDetection)&&e(),li(t)}},onInvoke:(n,r,s,o,i,a,l)=>{try{return ai(t),n.invoke(s,o,i,a,l)}finally{t.shouldCoalesceRunChangeDetection&&e(),li(t)}},onHasTask:(e,n,r,s)=>{e.hasTask(r,s),n===r&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,ii(t),oi(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(e,n,r,s)=>(e.handleError(r,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(r)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ri.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(ri.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,e,n){return this._inner.run(t,e,n)}runTask(t,e,n,r){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,t,si,Fs,Fs);try{return s.runTask(o,e,n)}finally{s.cancelTask(o)}}runGuarded(t,e,n){return this._inner.runGuarded(t,e,n)}runOutsideAngular(t){return this._outer.run(t)}}const si={};function oi(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function ii(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId)}function ai(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function li(t){t._nesting--,oi(t)}class ui{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Uo,this.onMicrotaskEmpty=new Uo,this.onStable=new Uo,this.onError=new Uo}run(t,e,n){return t.apply(e,n)}runGuarded(t,e,n){return t.apply(e,n)}runOutsideAngular(t){return t()}runTask(t,e,n,r){return t.apply(e,n)}}let ci=(()=>{class t{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ri.assertNotInAngularZone(),ni(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())ni(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(e=>!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,e,n){let r=-1;e&&e>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(t=>t.timeoutId!==r),t(this._didWork,this.getPendingTasks())},e)),this._callbacks.push({doneCb:t,timeoutId:r,updateCb:n})}whenStable(t,e,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(t,e,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,e,n){return[]}}return t.\u0275fac=function(e){return new(e||t)(Pn(ri))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})(),hi=(()=>{class t{constructor(){this._applications=new Map,fi.addToWindow(this)}registerApplication(t,e){this._applications.set(t,e)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,e=!0){return fi.findTestabilityInTree(this,t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();class di{addToWindow(t){}findTestabilityInTree(t,e,n){return null}}let pi,fi=new di,gi=!0,mi=!1;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const yi=new _n("AllowMultipleToken");class vi{constructor(t,e){this.name=t,this.token=e}}function _i(t,e,n=[]){const r=`Platform: ${e}`,s=new _n(r);return(e=[])=>{let o=wi();if(!o||o.injector.get(yi,!1))if(t)t(n.concat(e).concat({provide:s,useValue:!0}));else{const t=n.concat(e).concat({provide:s,useValue:!0},{provide:os,useValue:"platform"});!function(t){if(pi&&!pi.destroyed&&!pi.injector.get(yi,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");pi=t.get(bi);const e=t.get($o,null);e&&e.forEach(t=>t())}(vs.create({providers:t,name:r}))}return function(t){const e=wi();if(!e)throw new Error("No platform exists!");if(!e.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return e}(s)}}function wi(){return pi&&!pi.destroyed?pi:null}let bi=(()=>{class t{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,e){const n=function(t,e){let n;return n="noop"===t?new ui:("zone.js"===t?void 0:t)||new ri({enableLongStackTrace:(mi=!0,gi),shouldCoalesceEventChangeDetection:!!(null==e?void 0:e.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==e?void 0:e.ngZoneRunCoalescing)}),n}(e?e.ngZone:void 0,{ngZoneEventCoalescing:e&&e.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:e&&e.ngZoneRunCoalescing||!1}),r=[{provide:ri,useValue:n}];return n.run(()=>{const e=vs.create({providers:r,parent:this.injector,name:t.moduleType.name}),s=t.create(e),o=s.injector.get($n,null);if(!o)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return n.runOutsideAngular(()=>{const t=n.onError.subscribe({next:t=>{o.handleError(t)}});s.onDestroy(()=>{xi(this._modules,s),t.unsubscribe()})}),function(t,e,n){try{const r=n();return As(r)?r.catch(n=>{throw e.runOutsideAngular(()=>t.handleError(n)),n}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}(o,n,()=>{const t=s.injector.get(Ho);return t.runInitializers(),t.donePromise.then(()=>(Ns(s.injector.get(qo,Ds)||Ds),this._moduleDoBootstrap(s),s))})})}bootstrapModule(t,e=[]){const n=Si({},e);return function(t,e,n){const r=new jo(n);return Promise.resolve(r)}(0,0,t).then(t=>this.bootstrapModuleFactory(t,n))}_moduleDoBootstrap(t){const e=t.injector.get(Ci);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(t=>e.bootstrap(t));else{if(!t.instance.ngDoBootstrap)throw new Error(`The module ${X(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);t.instance.ngDoBootstrap(e)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(t=>t.destroy()),this._destroyListeners.forEach(t=>t()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(e){return new(e||t)(Pn(vs))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();function Si(t,e){return Array.isArray(e)?e.reduce(Si,t):Object.assign(Object.assign({},t),e)}let Ci=(()=>{class t{constructor(t,e,n,r,s){this._zone=t,this._injector=e,this._exceptionHandler=n,this._componentFactoryResolver=r,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const o=new v(t=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{t.next(this._stable),t.complete()})}),i=new v(t=>{let e;this._zone.runOutsideAngular(()=>{e=this._zone.onStable.subscribe(()=>{ri.assertNotInAngularZone(),ni(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,t.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{ri.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{t.next(!1)}))});return()=>{e.unsubscribe(),n.unsubscribe()}});this.isStable=function(...t){let e=Number.POSITIVE_INFINITY,n=null,r=t[t.length-1];return E(r)?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop()),null===n&&1===t.length&&t[0]instanceof v?t[0]:z(e)(B(t,n))}(o,i.pipe(t=>{return q()((e=Y,function(t){let n;n="function"==typeof e?e:function(){return e};const r=Object.create(t,Q);return r.source=t,r.subjectFactory=n,r})(t));var e}))}bootstrap(t,e){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=t instanceof Hs?t:this._componentFactoryResolver.resolveComponentFactory(t),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(yo),s=n.create(vs.NULL,[],e||n.selector,r),o=s.location.nativeElement,i=s.injector.get(ci,null),a=i&&s.injector.get(hi);return i&&a&&a.registerApplication(o,i),s.onDestroy(()=>{this.detachView(s.hostView),xi(this.components,s),a&&a.unregisterApplication(o)}),this._loadComponent(s),s}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let t of this._views)t.detectChanges()}catch(t){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))}finally{this._runningTick=!1}}attachView(t){const e=t;this._views.push(e),e.attachToAppRef(this)}detachView(t){const e=t;xi(this._views,e),e.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(zo,[]).concat(this._bootstrapListeners).forEach(e=>e(t))}ngOnDestroy(){this._views.slice().forEach(t=>t.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return t.\u0275fac=function(e){return new(e||t)(Pn(ri),Pn(vs),Pn($n),Pn(Ls),Pn(Ho))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();function xi(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ei{}class Ti{}const ki={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let Ai=(()=>{class t{constructor(t,e){this._compiler=t,this._config=e||ki}load(t){return this.loadAndCompile(t)}loadAndCompile(t){let[e,r]=t.split("#");return void 0===r&&(r="default"),n("zn8P")(e).then(t=>t[r]).then(t=>Ri(t,e,r)).then(t=>this._compiler.compileModuleAsync(t))}loadFactory(t){let[e,r]=t.split("#"),s="NgFactory";return void 0===r&&(r="default",s=""),n("zn8P")(this._config.factoryPathPrefix+e+this._config.factoryPathSuffix).then(t=>t[r+s]).then(t=>Ri(t,e,r))}}return t.\u0275fac=function(e){return new(e||t)(Pn(ti),Pn(Ti,8))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();function Ri(t,e,n){if(!t)throw new Error(`Cannot find '${n}' in '${e}'`);return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ii=_i(null,"core",[{provide:Vo,useValue:"unknown"},{provide:bi,deps:[vs]},{provide:hi,deps:[]},{provide:Bo,deps:[]}]),Oi=[{provide:Ci,useClass:Ci,deps:[ri,vs,$n,Ls,Ho]},{provide:Ao,deps:[ri],useFactory:function(t){let e=[];return t.onStable.subscribe(()=>{for(;e.length;)e.pop()()}),function(t){e.push(t)}}},{provide:Ho,useClass:Ho,deps:[[new Nn,No]]},{provide:ti,useClass:ti,deps:[]},Lo,{provide:oo,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return go},deps:[]},{provide:ao,useFactory:function(){return mo},deps:[]},{provide:qo,useFactory:function(t){return Ns(t=t||"undefined"!=typeof $localize&&$localize.locale||Ds),t},deps:[[new Un(qo),new Nn,new Hn]]},{provide:Zo,useValue:"USD"}];let Pi=(()=>{class t{constructor(t){}}return t.\u0275fac=function(e){return new(e||t)(Pn(Ci))},t.\u0275mod=Vt({type:t}),t.\u0275inj=lt({providers:Oi}),t})(),ji=null;function Di(){return ji}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ui=new _n("DocumentToken");let Ni=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=at({factory:Hi,token:t,providedIn:"platform"}),t})();function Hi(){return Pn(Li)}const Mi=new _n("Location Initialized");let Li=(()=>{class t extends Ni{constructor(t){super(),this._doc=t,this._init()}_init(){this.location=Di().getLocation(),this._history=Di().getHistory()}getBaseHrefFromDOM(){return Di().getBaseHref(this._doc)}onPopState(t){Di().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",t,!1)}onHashChange(t){Di().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",t,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(t){this.location.pathname=t}pushState(t,e,n){Fi()?this._history.pushState(t,e,n):this.location.hash=n}replaceState(t,e,n){Fi()?this._history.replaceState(t,e,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}return t.\u0275fac=function(e){return new(e||t)(Pn(Ui))},t.\u0275prov=at({factory:$i,token:t,providedIn:"platform"}),t})();function Fi(){return!!window.history.pushState}function $i(){return new Li(Pn(Ui))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vi(t,e){if(0==t.length)return e;if(0==e.length)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,2==n?t+e.substring(1):1==n?t+e:t+"/"+e}function zi(t){const e=t.match(/#|\?|$/),n=e&&e.index||t.length;return t.slice(0,n-("/"===t[n-1]?1:0))+t.slice(n)}function Bi(t){return t&&"?"!==t[0]?"?"+t:t}let qi=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=at({factory:Zi,token:t,providedIn:"root"}),t})();function Zi(t){const e=Pn(Ui).location;return new Wi(Pn(Ni),e&&e.origin||"")}const Gi=new _n("appBaseHref");let Wi=(()=>{class t extends qi{constructor(t,e){if(super(),this._platformLocation=t,null==e&&(e=this._platformLocation.getBaseHrefFromDOM()),null==e)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=e}onPopState(t){this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t)}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Vi(this._baseHref,t)}path(t=!1){const e=this._platformLocation.pathname+Bi(this._platformLocation.search),n=this._platformLocation.hash;return n&&t?`${e}${n}`:e}pushState(t,e,n,r){const s=this.prepareExternalUrl(n+Bi(r));this._platformLocation.pushState(t,e,s)}replaceState(t,e,n,r){const s=this.prepareExternalUrl(n+Bi(r));this._platformLocation.replaceState(t,e,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return t.\u0275fac=function(e){return new(e||t)(Pn(Ni),Pn(Gi,8))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})(),Qi=(()=>{class t extends qi{constructor(t,e){super(),this._platformLocation=t,this._baseHref="",null!=e&&(this._baseHref=e)}onPopState(t){this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t)}getBaseHref(){return this._baseHref}path(t=!1){let e=this._platformLocation.hash;return null==e&&(e="#"),e.length>0?e.substring(1):e}prepareExternalUrl(t){const e=Vi(this._baseHref,t);return e.length>0?"#"+e:e}pushState(t,e,n,r){let s=this.prepareExternalUrl(n+Bi(r));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(t,e,s)}replaceState(t,e,n,r){let s=this.prepareExternalUrl(n+Bi(r));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(t,e,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return t.\u0275fac=function(e){return new(e||t)(Pn(Ni),Pn(Gi,8))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})(),Ji=(()=>{class t{constructor(t,e){this._subject=new Uo,this._urlChangeListeners=[],this._platformStrategy=t;const n=this._platformStrategy.getBaseHref();this._platformLocation=e,this._baseHref=zi(Ki(n)),this._platformStrategy.onPopState(t=>{this._subject.emit({url:this.path(!0),pop:!0,state:t.state,type:t.type})})}path(t=!1){return this.normalize(this._platformStrategy.path(t))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(t,e=""){return this.path()==this.normalize(t+Bi(e))}normalize(e){return t.stripTrailingSlash(function(t,e){return t&&e.startsWith(t)?e.substring(t.length):e}(this._baseHref,Ki(e)))}prepareExternalUrl(t){return t&&"/"!==t[0]&&(t="/"+t),this._platformStrategy.prepareExternalUrl(t)}go(t,e="",n=null){this._platformStrategy.pushState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Bi(e)),n)}replaceState(t,e="",n=null){this._platformStrategy.replaceState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Bi(e)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(t){this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}))}_notifyUrlChangeListeners(t="",e){this._urlChangeListeners.forEach(n=>n(t,e))}subscribe(t,e,n){return this._subject.subscribe({next:t,error:e,complete:n})}}return t.\u0275fac=function(e){return new(e||t)(Pn(qi),Pn(Ni))},t.normalizeQueryParams=Bi,t.joinWithSlash=Vi,t.stripTrailingSlash=zi,t.\u0275prov=at({factory:Yi,token:t,providedIn:"root"}),t})();function Yi(){return new Ji(Pn(qi),Pn(Ni))}function Ki(t){return t.replace(/\/index.html$/,"")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Xi=function(t){return t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ta{}let ea=(()=>{class t extends ta{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(function(t){return function(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);let n=Ps(e);if(n)return n;const r=e.split("-")[0];if(n=Ps(r),n)return n;if("en"===r)return Is;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[js.PluralCase]}(e||this.locale)(t)){case Xi.Zero:return"zero";case Xi.One:return"one";case Xi.Two:return"two";case Xi.Few:return"few";case Xi.Many:return"many";default:return"other"}}}return t.\u0275fac=function(e){return new(e||t)(Pn(qo))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})(),na=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Vt({type:t}),t.\u0275inj=lt({providers:[{provide:ta,useClass:ea}]}),t})(),ra=(()=>{class t{}return t.\u0275prov=at({token:t,providedIn:"root",factory:()=>new sa(Pn(Ui),window)}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class sa{constructor(t,e){this.document=t,this.window=e,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const e=function(t,e){const n=t.getElementById(e)||t.getElementsByName(e)[0];if(n)return n;if("function"==typeof t.createTreeWalker&&t.body&&(t.body.createShadowRoot||t.body.attachShadow)){const n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);let r=n.currentNode;for(;r;){const t=r.shadowRoot;if(t){const n=t.getElementById(e)||t.querySelector(`[name="${e}"]`);if(n)return n}r=n.nextNode()}}return null}(this.document,t);e&&(this.scrollToElement(e),this.attemptFocus(e))}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=t)}}scrollToElement(t){const e=t.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}attemptFocus(t){return t.focus(),this.document.activeElement===t}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=oa(this.window.history)||oa(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch(t){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(t){return!1}}}function oa(t){return Object.getOwnPropertyDescriptor(t,"scrollRestoration")}class ia extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v11.2.11
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends class{}{constructor(){super()}supportsDOMEvents(){return!0}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{static makeCurrent(){var t;t=new ia,ji||(ji=t)}getProperty(t,e){return t[e]}log(t){window.console&&window.console.log&&window.console.log(t)}logGroup(t){window.console&&window.console.group&&window.console.group(t)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(t,e,n){return t.addEventListener(e,n,!1),()=>{t.removeEventListener(e,n,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){return t.parentNode&&t.parentNode.removeChild(t),t}getValue(t){return t.value}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(t){const e=la||(la=document.querySelector("base"),la)?la.getAttribute("href"):null;return null==e?null:(n=e,aa||(aa=document.createElement("a")),aa.setAttribute("href",n),"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}resetBaseElement(){la=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const t=n.indexOf("="),[r,s]=-1==t?[n,""]:[n.slice(0,t),n.slice(t+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}(document.cookie,t)}}let aa,la=null;const ua=new _n("TRANSITION_ID"),ca=[{provide:No,useFactory:function(t,e,n){return()=>{n.get(Ho).donePromise.then(()=>{const n=Di();Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition")===t).forEach(t=>n.remove(t))})}},deps:[ua,Ui,vs],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ha{static init(){var t;t=new ha,fi=t}addToWindow(t){kt.getAngularTestability=(e,n=!0)=>{const r=t.findTestabilityInTree(e,n);if(null==r)throw new Error("Could not find testability for element.");return r},kt.getAllAngularTestabilities=()=>t.getAllTestabilities(),kt.getAllAngularRootElements=()=>t.getAllRootElements(),kt.frameworkStabilizers||(kt.frameworkStabilizers=[]),kt.frameworkStabilizers.push(t=>{const e=kt.getAllAngularTestabilities();let n=e.length,r=!1;const s=function(e){r=r||e,n--,0==n&&t(r)};e.forEach(function(t){t.whenStable(s)})})}findTestabilityInTree(t,e,n){if(null==e)return null;const r=t.getTestability(e);return null!=r?r:n?Di().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const da=new _n("EventManagerPlugins");let pa=(()=>{class t{constructor(t,e){this._zone=e,this._eventNameToPlugin=new Map,t.forEach(t=>t.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,e,n){return this._findPluginFor(e).addEventListener(t,e,n)}addGlobalEventListener(t,e,n){return this._findPluginFor(e).addGlobalEventListener(t,e,n)}getZone(){return this._zone}_findPluginFor(t){const e=this._eventNameToPlugin.get(t);if(e)return e;const n=this._plugins;for(let r=0;r<n.length;r++){const e=n[r];if(e.supports(t))return this._eventNameToPlugin.set(t,e),e}throw new Error(`No event manager plugin found for event ${t}`)}}return t.\u0275fac=function(e){return new(e||t)(Pn(da),Pn(ri))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();class fa{constructor(t){this._doc=t}addGlobalEventListener(t,e,n){const r=Di().getGlobalEventTarget(this._doc,t);if(!r)throw new Error(`Unsupported event target ${r} for event ${e}`);return this.addEventListener(r,e,n)}}let ga=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(t){const e=new Set;t.forEach(t=>{this._stylesSet.has(t)||(this._stylesSet.add(t),e.add(t))}),this.onStylesAdded(e)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})(),ma=(()=>{class t extends ga{constructor(t){super(),this._doc=t,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(t.head)}_addStylesToHost(t,e){t.forEach(t=>{const n=this._doc.createElement("style");n.textContent=t,this._styleNodes.add(e.appendChild(n))})}addHost(t){this._addStylesToHost(this._stylesSet,t),this._hostNodes.add(t)}removeHost(t){this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach(e=>this._addStylesToHost(t,e))}ngOnDestroy(){this._styleNodes.forEach(t=>Di().remove(t))}}return t.\u0275fac=function(e){return new(e||t)(Pn(Ui))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ya={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},va=/%COMP%/g;function _a(t,e,n){for(let r=0;r<e.length;r++){let s=e[r];Array.isArray(s)?_a(t,s,n):(s=s.replace(va,t),n.push(s))}return n}function wa(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let ba=(()=>{class t{constructor(t,e,n){this.eventManager=t,this.sharedStylesHost=e,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new Sa(t)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;switch(e.encapsulation){case St.Emulated:{let n=this.rendererByCompId.get(e.id);return n||(n=new Ca(this.eventManager,this.sharedStylesHost,e,this.appId),this.rendererByCompId.set(e.id,n)),n.applyToHost(t),n}case 1:case St.ShadowDom:return new xa(this.eventManager,this.sharedStylesHost,t,e);default:if(!this.rendererByCompId.has(e.id)){const t=_a(e.id,e.styles,[]);this.sharedStylesHost.addStyles(t),this.rendererByCompId.set(e.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(Pn(pa),Pn(ma),Pn(Mo))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();class Sa{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(ya[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,n){t&&t.insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error(`The selector "${t}" did not match any elements`);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;const s=ya[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){const r=ya[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(qn.DashCase|qn.Important)?t.style.setProperty(e,n,r&qn.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&qn.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t[e]=n}setValue(t,e){t.nodeValue=e}listen(t,e,n){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,wa(n)):this.eventManager.addEventListener(t,e,wa(n))}}class Ca extends Sa{constructor(t,e,n,r){super(t),this.component=n;const s=_a(r+"-"+n.id,n.styles,[]);e.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(va,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(va,r+"-"+n.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}}class xa extends Sa{constructor(t,e,n,r){super(t),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=_a(r.id,r.styles,[]);for(let o=0;o<s.length;o++){const t=document.createElement("style");t.textContent=s[o],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let Ea=(()=>{class t extends fa{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,n){return t.addEventListener(e,n,!1),()=>this.removeEventListener(t,e,n)}removeEventListener(t,e,n){return t.removeEventListener(e,n)}}return t.\u0275fac=function(e){return new(e||t)(Pn(Ui))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ta=["alt","control","meta","shift"],ka={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Aa={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},Ra={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let Ia=(()=>{class t extends fa{constructor(t){super(t)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,r){const s=t.parseEventName(n),o=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Di().onAndCancel(e,s.domEventName,o))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=t._normalizeKey(n.pop());let o="";if(Ta.forEach(t=>{const e=n.indexOf(t);e>-1&&(n.splice(e,1),o+=t+".")}),o+=s,0!=n.length||0===s.length)return null;const i={};return i.domEventName=r,i.fullKey=o,i}static getEventFullKey(t){let e="",n=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&Aa.hasOwnProperty(e)&&(e=Aa[e]))}return ka[e]||e}(t);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),Ta.forEach(r=>{r!=n&&(0,Ra[r])(t)&&(e+=r+".")}),e+=n,e}static eventCallback(e,n,r){return s=>{t.getEventFullKey(s)===e&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}}return t.\u0275fac=function(e){return new(e||t)(Pn(Ui))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();const Oa=_i(Ii,"browser",[{provide:Vo,useValue:"browser"},{provide:$o,useValue:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){ia.makeCurrent(),ha.init()},multi:!0},{provide:Ui,useFactory:function(){return function(t){se=t}(document),document},deps:[]}]),Pa=[[],{provide:os,useValue:"root"},{provide:$n,useFactory:function(){return new $n},deps:[]},{provide:da,useClass:Ea,multi:!0,deps:[Ui,ri,Vo]},{provide:da,useClass:Ia,multi:!0,deps:[Ui]},[],{provide:ba,useClass:ba,deps:[pa,ma,Mo]},{provide:Bs,useExisting:ba},{provide:ga,useExisting:ma},{provide:ma,useClass:ma,deps:[Ui]},{provide:ci,useClass:ci,deps:[ri]},{provide:pa,useClass:pa,deps:[da,ri]},[]];let ja=(()=>{class t{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:Mo,useValue:e.appId},{provide:ua,useExisting:Mo},ca]}}}return t.\u0275fac=function(e){return new(e||t)(Pn(t,12))},t.\u0275mod=Vt({type:t}),t.\u0275inj=lt({providers:Pa,imports:[na,Pi]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Da(...t){let e=t[t.length-1];return E(e)?(t.pop(),U(t,e)):B(t)}"undefined"!=typeof window&&window;class Ua extends C{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const e=super._subscribe(t);return e&&!e.closed&&t.next(this._value),e}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new w;return this._value}next(t){super.next(this._value=t)}}class Na extends f{notifyNext(t,e,n,r,s){this.destination.next(e)}notifyError(t,e){this.destination.error(t)}notifyComplete(t){this.destination.complete()}}class Ha extends f{constructor(t,e,n){super(),this.parent=t,this.outerValue=e,this.outerIndex=n,this.index=0}_next(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)}_error(t){this.parent.notifyError(t,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}function Ma(t,e,n,r,s=new Ha(t,n,r)){if(!s.closed)return e instanceof v?e.subscribe(s):D(e)(s)}const La={};class Fa{constructor(t){this.resultSelector=t}call(t,e){return e.subscribe(new $a(t,this.resultSelector))}}class $a extends Na{constructor(t,e){super(t),this.resultSelector=e,this.active=0,this.values=[],this.observables=[]}_next(t){this.values.push(La),this.observables.push(t)}_complete(){const t=this.observables,e=t.length;if(0===e)this.destination.complete();else{this.active=e,this.toRespond=e;for(let n=0;n<e;n++)this.add(Ma(this,t[n],void 0,n))}}notifyComplete(t){0==(this.active-=1)&&this.destination.complete()}notifyNext(t,e,n){const r=this.values,s=this.toRespond?r[n]===La?--this.toRespond:this.toRespond:0;r[n]=e,0===s&&(this.resultSelector?this._tryResultSelector(r):this.destination.next(r.slice()))}_tryResultSelector(t){let e;try{e=this.resultSelector.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}const Va=(()=>{function t(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return t.prototype=Object.create(Error.prototype),t})();function za(...t){return z(1)(Da(...t))}const Ba=new v(t=>t.complete());function qa(t){return t?function(t){return new v(e=>t.schedule(()=>e.complete()))}(t):Ba}function Za(t){return new v(e=>{let n;try{n=t()}catch(r){return void e.error(r)}return(n?N(n):qa()).subscribe(e)})}function Ga(t,e){return"function"==typeof e?n=>n.pipe(Ga((n,r)=>N(t(n,r)).pipe(T((t,s)=>e(n,t,r,s))))):e=>e.lift(new Wa(t))}class Wa{constructor(t){this.project=t}call(t,e){return e.subscribe(new Qa(t,this.project))}}class Qa extends M{constructor(t,e){super(t),this.project=e,this.index=0}_next(t){let e;const n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this._innerSub(e)}_innerSub(t){const e=this.innerSubscription;e&&e.unsubscribe();const n=new H(this),r=this.destination;r.add(n),this.innerSubscription=L(t,n),this.innerSubscription!==n&&r.add(this.innerSubscription)}_complete(){const{innerSubscription:t}=this;t&&!t.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=void 0}notifyComplete(){this.innerSubscription=void 0,this.isStopped&&super._complete()}notifyNext(t){this.destination.next(t)}}const Ja=(()=>{function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t})();function Ya(t){return e=>0===t?qa():e.lift(new Ka(t))}class Ka{constructor(t){if(this.total=t,this.total<0)throw new Ja}call(t,e){return e.subscribe(new Xa(t,this.total))}}class Xa extends f{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){const e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))}}function tl(t,e){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new el(t,e,n))}}class el{constructor(t,e,n=!1){this.accumulator=t,this.seed=e,this.hasSeed=n}call(t,e){return e.subscribe(new nl(t,this.accumulator,this.seed,this.hasSeed))}}class nl extends f{constructor(t,e,n,r){super(t),this.accumulator=e,this._seed=n,this.hasSeed=r,this.index=0}get seed(){return this._seed}set seed(t){this.hasSeed=!0,this._seed=t}_next(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)}_tryNext(t){const e=this.index++;let n;try{n=this.accumulator(this.seed,t,e)}catch(r){this.destination.error(r)}this.seed=n,this.destination.next(n)}}function rl(t,e){return function(n){return n.lift(new sl(t,e))}}class sl{constructor(t,e){this.predicate=t,this.thisArg=e}call(t,e){return e.subscribe(new ol(t,this.predicate,this.thisArg))}}class ol extends f{constructor(t,e,n){super(t),this.predicate=e,this.thisArg=n,this.count=0}_next(t){let e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}e&&this.destination.next(t)}}function il(t){return function(e){const n=new al(t),r=e.lift(n);return n.caught=r}}class al{constructor(t){this.selector=t}call(t,e){return e.subscribe(new ll(t,this.selector,this.caught))}}class ll extends M{constructor(t,e,n){super(t),this.selector=e,this.caught=n}error(t){if(!this.isStopped){let n;try{n=this.selector(t,this.caught)}catch(e){return void super.error(e)}this._unsubscribeAndRecycle();const r=new H(this);this.add(r);const s=L(n,r);s!==r&&this.add(s)}}}function ul(t,e){return F(t,e,1)}function cl(t){return function(e){return 0===t?qa():e.lift(new hl(t))}}class hl{constructor(t){if(this.total=t,this.total<0)throw new Ja}call(t,e){return e.subscribe(new dl(t,this.total))}}class dl extends f{constructor(t,e){super(t),this.total=e,this.ring=new Array,this.count=0}_next(t){const e=this.ring,n=this.total,r=this.count++;e.length<n?e.push(t):e[r%n]=t}_complete(){const t=this.destination;let e=this.count;if(e>0){const n=this.count>=this.total?this.total:this.count,r=this.ring;for(let s=0;s<n;s++){const s=e++%n;t.next(r[s])}}t.complete()}}function pl(t=ml){return e=>e.lift(new fl(t))}class fl{constructor(t){this.errorFactory=t}call(t,e){return e.subscribe(new gl(t,this.errorFactory))}}class gl extends f{constructor(t,e){super(t),this.errorFactory=e,this.hasValue=!1}_next(t){this.hasValue=!0,this.destination.next(t)}_complete(){if(this.hasValue)return this.destination.complete();{let e;try{e=this.errorFactory()}catch(t){e=t}this.destination.error(e)}}}function ml(){return new Va}function yl(t=null){return e=>e.lift(new vl(t))}class vl{constructor(t){this.defaultValue=t}call(t,e){return e.subscribe(new _l(t,this.defaultValue))}}class _l extends f{constructor(t,e){super(t),this.defaultValue=e,this.isEmpty=!0}_next(t){this.isEmpty=!1,this.destination.next(t)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}function wl(t,e){const n=arguments.length>=2;return r=>r.pipe(t?rl((e,n)=>t(e,n,r)):y,Ya(1),n?yl(e):pl(()=>new Va))}function bl(){}function Sl(t,e,n){return function(r){return r.lift(new Cl(t,e,n))}}class Cl{constructor(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}call(t,e){return e.subscribe(new xl(t,this.nextOrObserver,this.error,this.complete))}}class xl extends f{constructor(t,e,n,s){super(t),this._tapNext=bl,this._tapError=bl,this._tapComplete=bl,this._tapError=n||bl,this._tapComplete=s||bl,r(e)?(this._context=this,this._tapNext=e):e&&(this._context=e,this._tapNext=e.next||bl,this._tapError=e.error||bl,this._tapComplete=e.complete||bl)}_next(t){try{this._tapNext.call(this._context,t)}catch(e){return void this.destination.error(e)}this.destination.next(t)}_error(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)}_complete(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()}}class El{constructor(t){this.callback=t}call(t,e){return e.subscribe(new Tl(t,this.callback))}}class Tl extends f{constructor(t,e){super(t),this.add(new h(e))}}
/**
 * @license Angular v11.2.11
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class kl{constructor(t,e){this.id=t,this.url=e}}class Al extends kl{constructor(t,e,n="imperative",r=null){super(t,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Rl extends kl{constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Il extends kl{constructor(t,e,n){super(t,e),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Ol extends kl{constructor(t,e,n){super(t,e),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Pl extends kl{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class jl extends kl{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Dl extends kl{constructor(t,e,n,r,s){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Ul extends kl{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Nl extends kl{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Hl{constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Ml{constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Ll{constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Fl{constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class $l{constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Vl{constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class zl{constructor(t,e,n){this.routerEvent=t,this.position=e,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Bl="primary";class ql{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){const e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}}function Zl(t){return new ql(t)}function Gl(t){const e=Error("NavigationCancelingError: "+t);return e.ngNavigationCancelingError=!0,e}function Wl(t,e,n){const r=n.path.split("/");if(r.length>t.length)return null;if("full"===n.pathMatch&&(e.hasChildren()||r.length<t.length))return null;const s={};for(let o=0;o<r.length;o++){const e=r[o],n=t[o];if(e.startsWith(":"))s[e.substring(1)]=n;else if(e!==n.path)return null}return{consumed:t.slice(0,r.length),posParams:s}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ql(t,e){const n=t?Object.keys(t):void 0,r=e?Object.keys(e):void 0;if(!n||!r||n.length!=r.length)return!1;let s;for(let o=0;o<n.length;o++)if(s=n[o],!Jl(t[s],e[s]))return!1;return!0}function Jl(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;const n=[...t].sort(),r=[...e].sort();return n.every((t,e)=>r[e]===t)}return t===e}function Yl(t){return Array.prototype.concat.apply([],t)}function Kl(t){return t.length>0?t[t.length-1]:null}function Xl(t,e){for(const n in t)t.hasOwnProperty(n)&&e(t[n],n)}function tu(t){return(e=t)&&"function"==typeof e.subscribe?t:As(t)?N(Promise.resolve(t)):Da(t);var e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function eu(t,e,n){return n?function(t,e){return Ql(t,e)}(t.queryParams,e.queryParams)&&nu(t.root,e.root):function(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(n=>Jl(t[n],e[n]))}(t.queryParams,e.queryParams)&&ru(t.root,e.root)}function nu(t,e){if(!lu(t.segments,e.segments))return!1;if(t.numberOfChildren!==e.numberOfChildren)return!1;for(const n in e.children){if(!t.children[n])return!1;if(!nu(t.children[n],e.children[n]))return!1}return!0}function ru(t,e){return su(t,e,e.segments)}function su(t,e,n){if(t.segments.length>n.length)return!!lu(t.segments.slice(0,n.length),n)&&!e.hasChildren();if(t.segments.length===n.length){if(!lu(t.segments,n))return!1;for(const n in e.children){if(!t.children[n])return!1;if(!ru(t.children[n],e.children[n]))return!1}return!0}{const r=n.slice(0,t.segments.length),s=n.slice(t.segments.length);return!!lu(t.segments,r)&&!!t.children.primary&&su(t.children.primary,e,s)}}class ou{constructor(t,e,n){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Zl(this.queryParams)),this._queryParamMap}toString(){return hu.serialize(this)}}class iu{constructor(t,e){this.segments=t,this.children=e,this.parent=null,Xl(e,(t,e)=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return du(this)}}class au{constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap||(this._parameterMap=Zl(this.parameters)),this._parameterMap}toString(){return _u(this)}}function lu(t,e){return t.length===e.length&&t.every((t,n)=>t.path===e[n].path)}class uu{}class cu{parse(t){const e=new xu(t);return new ou(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){var e;return`/${pu(t.root,!0)}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${gu(e)}=${gu(t)}`).join("&"):`${gu(e)}=${gu(n)}`});return e.length?`?${e.join("&")}`:""}(t.queryParams)}${"string"==typeof t.fragment?`#${e=t.fragment,encodeURI(e)}`:""}`}}const hu=new cu;function du(t){return t.segments.map(t=>_u(t)).join("/")}function pu(t,e){if(!t.hasChildren())return du(t);if(e){const e=t.children.primary?pu(t.children.primary,!1):"",n=[];return Xl(t.children,(t,e)=>{e!==Bl&&n.push(`${e}:${pu(t,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}{const e=function(t,e){let n=[];return Xl(t.children,(t,r)=>{r===Bl&&(n=n.concat(e(t,r)))}),Xl(t.children,(t,r)=>{r!==Bl&&(n=n.concat(e(t,r)))}),n}(t,(e,n)=>n===Bl?[pu(t.children.primary,!1)]:[`${n}:${pu(e,!1)}`]);return 1===Object.keys(t.children).length&&null!=t.children.primary?`${du(t)}/${e[0]}`:`${du(t)}/(${e.join("//")})`}}function fu(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function gu(t){return fu(t).replace(/%3B/gi,";")}function mu(t){return fu(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function yu(t){return decodeURIComponent(t)}function vu(t){return yu(t.replace(/\+/g,"%20"))}function _u(t){return`${mu(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${mu(t)}=${mu(e[t])}`).join("")}`;var e}const wu=/^[^\/()?;=#]+/;function bu(t){const e=t.match(wu);return e?e[0]:""}const Su=/^[^=?&#]+/,Cu=/^[^?&#]+/;class xu{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new iu([],{}):new iu([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(n.primary=new iu(t,e)),n}parseSegment(){const t=bu(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(t),new au(yu(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const e=bu(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=bu(this.remaining);t&&(n=t,this.capture(n))}t[yu(e)]=yu(n)}parseQueryParam(t){const e=function(t){const e=t.match(Su);return e?e[0]:""}(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=function(t){const e=t.match(Cu);return e?e[0]:""}(this.remaining);t&&(n=t,this.capture(n))}const r=vu(e),s=vu(n);if(t.hasOwnProperty(r)){let e=t[r];Array.isArray(e)||(e=[e],t[r]=e),e.push(s)}else t[r]=s}parseParens(t){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=bu(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let s;n.indexOf(":")>-1?(s=n.substr(0,n.indexOf(":")),this.capture(s),this.capture(":")):t&&(s=Bl);const o=this.parseChildren();e[s]=1===Object.keys(o).length?o.primary:new iu([],o),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new Error(`Expected "${t}".`)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Eu{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){const e=Tu(t,this._root);return e?e.children.map(t=>t.value):[]}firstChild(t){const e=Tu(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){const e=ku(t,this._root);return e.length<2?[]:e[e.length-2].children.map(t=>t.value).filter(e=>e!==t)}pathFromRoot(t){return ku(t,this._root).map(t=>t.value)}}function Tu(t,e){if(t===e.value)return e;for(const n of e.children){const e=Tu(t,n);if(e)return e}return null}function ku(t,e){if(t===e.value)return[e];for(const n of e.children){const r=ku(t,n);if(r.length)return r.unshift(e),r}return[]}class Au{constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}}function Ru(t){const e={};return t&&t.children.forEach(t=>e[t.value.outlet]=t),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Iu extends Eu{constructor(t,e){super(t),this.snapshot=e,Nu(this,t)}toString(){return this.snapshot.toString()}}function Ou(t,e){const n=function(t,e){const n=new Du([],{},{},"",{},Bl,e,null,t.root,-1,{});return new Uu("",new Au(n,[]))}(t,e),r=new Ua([new au("",{})]),s=new Ua({}),o=new Ua({}),i=new Ua({}),a=new Ua(""),l=new Pu(r,s,i,a,o,Bl,e,n.root);return l.snapshot=n.root,new Iu(new Au(l,[]),n)}class Pu{constructor(t,e,n,r,s,o,i,a){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=i,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(T(t=>Zl(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(T(t=>Zl(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function ju(t,e="emptyOnly"){const n=t.pathFromRoot;let r=0;if("always"!==e)for(r=n.length-1;r>=1;){const t=n[r],e=n[r-1];if(t.routeConfig&&""===t.routeConfig.path)r--;else{if(e.component)break;r--}}return function(t){return t.reduce((t,e)=>({params:Object.assign(Object.assign({},t.params),e.params),data:Object.assign(Object.assign({},t.data),e.data),resolve:Object.assign(Object.assign({},t.resolve),e._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class Du{constructor(t,e,n,r,s,o,i,a,l,u,c){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=i,this.routeConfig=a,this._urlSegment=l,this._lastPathIndex=u,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Zl(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Zl(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Uu extends Eu{constructor(t,e){super(e),this.url=t,Nu(this,e)}toString(){return Hu(this._root)}}function Nu(t,e){e.value._routerState=t,e.children.forEach(e=>Nu(t,e))}function Hu(t){const e=t.children.length>0?` { ${t.children.map(Hu).join(", ")} } `:"";return`${t.value}${e}`}function Mu(t){if(t.snapshot){const e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,Ql(e.queryParams,n.queryParams)||t.queryParams.next(n.queryParams),e.fragment!==n.fragment&&t.fragment.next(n.fragment),Ql(e.params,n.params)||t.params.next(n.params),function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!Ql(t[n],e[n]))return!1;return!0}(e.url,n.url)||t.url.next(n.url),Ql(e.data,n.data)||t.data.next(n.data)}else t.snapshot=t._futureSnapshot,t.data.next(t._futureSnapshot.data)}function Lu(t,e){var n,r;return Ql(t.params,e.params)&&lu(n=t.url,r=e.url)&&n.every((t,e)=>Ql(t.parameters,r[e].parameters))&&!(!t.parent!=!e.parent)&&(!t.parent||Lu(t.parent,e.parent))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Fu(t,e,n){if(n&&t.shouldReuseRoute(e.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=e.value;const s=function(t,e,n){return e.children.map(e=>{for(const r of n.children)if(t.shouldReuseRoute(e.value,r.value.snapshot))return Fu(t,e,r);return Fu(t,e)})}(t,e,n);return new Au(r,s)}{if(t.shouldAttach(e.value)){const n=t.retrieve(e.value);if(null!==n){const t=n.route;return $u(e,t),t}}const n=new Pu(new Ua((r=e.value).url),new Ua(r.params),new Ua(r.queryParams),new Ua(r.fragment),new Ua(r.data),r.outlet,r.component,r),s=e.children.map(e=>Fu(t,e));return new Au(n,s)}var r;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}function $u(t,e){if(t.value.routeConfig!==e.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(t.children.length!==e.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");e.value._futureSnapshot=t.value;for(let n=0;n<t.children.length;++n)$u(t.children[n],e.children[n])}function Vu(t){return"object"==typeof t&&null!=t&&!t.outlets&&!t.segmentPath}function zu(t){return"object"==typeof t&&null!=t&&t.outlets}function Bu(t,e,n,r,s){let o={};return r&&Xl(r,(t,e)=>{o[e]=Array.isArray(t)?t.map(t=>`${t}`):`${t}`}),new ou(n.root===t?e:qu(n.root,t,e),o,s)}function qu(t,e,n){const r={};return Xl(t.children,(t,s)=>{r[s]=t===e?n:qu(t,e,n)}),new iu(t.segments,r)}class Zu{constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&Vu(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(zu);if(r&&r!==Kl(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Gu{constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}}function Wu(t,e,n){if(t||(t=new iu([],{})),0===t.segments.length&&t.hasChildren())return Qu(t,e,n);const r=function(t,e,n){let r=0,s=e;const o={match:!1,pathIndex:0,commandIndex:0};for(;s<t.segments.length;){if(r>=n.length)return o;const e=t.segments[s],i=n[r];if(zu(i))break;const a=`${i}`,l=r<n.length-1?n[r+1]:null;if(s>0&&void 0===a)break;if(a&&l&&"object"==typeof l&&void 0===l.outlets){if(!Xu(a,l,e))return o;r+=2}else{if(!Xu(a,{},e))return o;r++}s++}return{match:!0,pathIndex:s,commandIndex:r}}(t,e,n),s=n.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){const e=new iu(t.segments.slice(0,r.pathIndex),{});return e.children.primary=new iu(t.segments.slice(r.pathIndex),t.children),Qu(e,0,s)}return r.match&&0===s.length?new iu(t.segments,{}):r.match&&!t.hasChildren()?Ju(t,e,n):r.match?Qu(t,0,s):Ju(t,e,n)}function Qu(t,e,n){if(0===n.length)return new iu(t.segments,{});{const r=function(t){return zu(t[0])?t[0].outlets:{[Bl]:t}}(n),s={};return Xl(r,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(s[r]=Wu(t.children[r],e,n))}),Xl(t.children,(t,e)=>{void 0===r[e]&&(s[e]=t)}),new iu(t.segments,s)}}function Ju(t,e,n){const r=t.segments.slice(0,e);let s=0;for(;s<n.length;){const o=n[s];if(zu(o)){const t=Yu(o.outlets);return new iu(r,t)}if(0===s&&Vu(n[0])){r.push(new au(t.segments[e].path,Ku(n[0]))),s++;continue}const i=zu(o)?o.outlets.primary:`${o}`,a=s<n.length-1?n[s+1]:null;i&&a&&Vu(a)?(r.push(new au(i,Ku(a))),s+=2):(r.push(new au(i,{})),s++)}return new iu(r,{})}function Yu(t){const e={};return Xl(t,(t,n)=>{"string"==typeof t&&(t=[t]),null!==t&&(e[n]=Ju(new iu([],{}),0,t))}),e}function Ku(t){const e={};return Xl(t,(t,n)=>e[n]=`${t}`),e}function Xu(t,e,n){return t==n.path&&Ql(e,n.parameters)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class tc{constructor(t,e,n,r){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r}activate(t){const e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),Mu(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){const r=Ru(e);t.children.forEach(t=>{const e=t.value.outlet;this.deactivateRoutes(t,r[e],n),delete r[e]}),Xl(r,(t,e)=>{this.deactivateRouteAndItsChildren(t,n)})}deactivateRoutes(t,e,n){const r=t.value,s=e?e.value:null;if(r===s)if(r.component){const s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(t,e,s.children)}else this.deactivateChildRoutes(t,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){const n=e.getContext(t.value.outlet);if(n&&n.outlet){const e=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:e,route:t,contexts:r})}}deactivateRouteAndOutlet(t,e){const n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=Ru(t);for(const o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);n&&n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated(),n.attachRef=null,n.resolver=null,n.route=null)}activateChildRoutes(t,e,n){const r=Ru(e);t.children.forEach(t=>{this.activateRoutes(t,r[t.value.outlet],n),this.forwardEvent(new Vl(t.value.snapshot))}),t.children.length&&this.forwardEvent(new Fl(t.value.snapshot))}activateRoutes(t,e,n){const r=t.value,s=e?e.value:null;if(Mu(r),r===s)if(r.component){const s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,s.children)}else this.activateChildRoutes(t,e,n);else if(r.component){const e=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const t=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),e.children.onOutletReAttached(t.contexts),e.attachRef=t.componentRef,e.route=t.route.value,e.outlet&&e.outlet.attach(t.componentRef,t.route.value),ec(t.route)}else{const n=function(t){for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig;if(t&&t.component)return null}return null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(r.snapshot),s=n?n.module.componentFactoryResolver:null;e.attachRef=null,e.route=r,e.resolver=s,e.outlet&&e.outlet.activateWith(r,s),this.activateChildRoutes(t,null,e.children)}}else this.activateChildRoutes(t,null,n)}}function ec(t){Mu(t.value),t.children.forEach(ec)}class nc{constructor(t,e){this.routes=t,this.module=e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function rc(t){return"function"==typeof t}function sc(t){return t instanceof ou}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const oc=Symbol("INITIAL_VALUE");function ic(){return Ga(t=>function(...t){let e,n;return E(t[t.length-1])&&(n=t.pop()),"function"==typeof t[t.length-1]&&(e=t.pop()),1===t.length&&l(t[0])&&(t=t[0]),B(t,n).lift(new Fa(e))}(t.map(t=>t.pipe(Ya(1),function(...t){const e=t[t.length-1];return E(e)?(t.pop(),n=>za(t,n,e)):e=>za(t,e)}(oc)))).pipe(tl((t,e)=>{let n=!1;return e.reduce((t,r,s)=>{if(t!==oc)return t;if(r===oc&&(n=!0),!n){if(!1===r)return r;if(s===e.length-1||sc(r))return r}return t},t)},oc),rl(t=>t!==oc),T(t=>sc(t)?t:!0===t),Ya(1)))}let ac=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Mt({type:t,selectors:[["ng-component"]],decls:1,vars:0,template:function(t,e){1&t&&ks(0,"router-outlet")},directives:function(){return[Xc]},encapsulation:2}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function lc(t,e=""){for(let n=0;n<t.length;n++){const r=t[n];uc(r,cc(e,r))}}function uc(t,e){t.children&&lc(t.children,e)}function cc(t,e){return e?t||e.path?t&&!e.path?`${t}/`:!t&&e.path?e.path:`${t}/${e.path}`:"":t}function hc(t){const e=t.children&&t.children.map(hc),n=e?Object.assign(Object.assign({},t),{children:e}):Object.assign({},t);return!n.component&&(e||n.loadChildren)&&n.outlet&&n.outlet!==Bl&&(n.component=ac),n}function dc(t){return t.outlet||Bl}function pc(t,e){const n=t.filter(t=>dc(t)===e);return n.push(...t.filter(t=>dc(t)!==e)),n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const fc={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function gc(t,e,n){var r;if(""===e.path)return"full"===e.pathMatch&&(t.hasChildren()||n.length>0)?Object.assign({},fc):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const s=(e.matcher||Wl)(n,t,e);if(!s)return Object.assign({},fc);const o={};Xl(s.posParams,(t,e)=>{o[e]=t.path});const i=s.consumed.length>0?Object.assign(Object.assign({},o),s.consumed[s.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:s.consumed,lastChild:s.consumed.length,parameters:i,positionalParamSegments:null!==(r=s.posParams)&&void 0!==r?r:{}}}function mc(t,e,n,r,s="corrected"){if(n.length>0&&function(t,e,n){return n.some(n=>yc(t,e,n)&&dc(n)!==Bl)}(t,n,r)){const s=new iu(e,function(t,e,n,r){const s={};s.primary=r,r._sourceSegment=t,r._segmentIndexShift=e.length;for(const o of n)if(""===o.path&&dc(o)!==Bl){const n=new iu([],{});n._sourceSegment=t,n._segmentIndexShift=e.length,s[dc(o)]=n}return s}(t,e,r,new iu(n,t.children)));return s._sourceSegment=t,s._segmentIndexShift=e.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function(t,e,n){return n.some(n=>yc(t,e,n))}(t,n,r)){const o=new iu(t.segments,function(t,e,n,r,s,o){const i={};for(const a of r)if(yc(t,n,a)&&!s[dc(a)]){const n=new iu([],{});n._sourceSegment=t,n._segmentIndexShift="legacy"===o?t.segments.length:e.length,i[dc(a)]=n}return Object.assign(Object.assign({},s),i)}(t,e,n,r,t.children,s));return o._sourceSegment=t,o._segmentIndexShift=e.length,{segmentGroup:o,slicedSegments:n}}const o=new iu(t.segments,t.children);return o._sourceSegment=t,o._segmentIndexShift=e.length,{segmentGroup:o,slicedSegments:n}}function yc(t,e,n){return(!(t.hasChildren()||e.length>0)||"full"!==n.pathMatch)&&""===n.path}function vc(t,e,n,r){return!!(dc(t)===r||r!==Bl&&yc(e,n,t))&&("**"===t.path||gc(e,t,n).matched)}function _c(t,e,n){return 0===e.length&&!t.children[n]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class wc{constructor(t){this.segmentGroup=t||null}}class bc{constructor(t){this.urlTree=t}}function Sc(t){return new v(e=>e.error(new wc(t)))}function Cc(t){return new v(e=>e.error(new bc(t)))}function xc(t){return new v(e=>e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))}class Ec{constructor(t,e,n,r,s){this.configLoader=e,this.urlSerializer=n,this.urlTree=r,this.config=s,this.allowRedirects=!0,this.ngModule=t.get(yo)}apply(){const t=mc(this.urlTree.root,[],[],this.config).segmentGroup,e=new iu(t.segments,t.children);return this.expandSegmentGroup(this.ngModule,this.config,e,Bl).pipe(T(t=>this.createUrlTree(Tc(t),this.urlTree.queryParams,this.urlTree.fragment))).pipe(il(t=>{if(t instanceof bc)return this.allowRedirects=!1,this.match(t.urlTree);if(t instanceof wc)throw this.noMatchError(t);throw t}))}match(t){return this.expandSegmentGroup(this.ngModule,this.config,t.root,Bl).pipe(T(e=>this.createUrlTree(Tc(e),t.queryParams,t.fragment))).pipe(il(t=>{if(t instanceof wc)throw this.noMatchError(t);throw t}))}noMatchError(t){return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)}createUrlTree(t,e,n){const r=t.segments.length>0?new iu([],{[Bl]:t}):t;return new ou(r,e,n)}expandSegmentGroup(t,e,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(t,e,n).pipe(T(t=>new iu([],t))):this.expandSegment(t,n,e,n.segments,r,!0)}expandChildren(t,e,n){const r=[];for(const s of Object.keys(n.children))"primary"===s?r.unshift(s):r.push(s);return N(r).pipe(ul(r=>{const s=n.children[r],o=pc(e,r);return this.expandSegmentGroup(t,o,s,r).pipe(T(t=>({segment:t,outlet:r})))}),tl((t,e)=>(t[e.outlet]=e.segment,t),{}),function(t,e){const n=arguments.length>=2;return r=>r.pipe(t?rl((e,n)=>t(e,n,r)):y,cl(1),n?yl(e):pl(()=>new Va))}())}expandSegment(t,e,n,r,s,o){return N(n).pipe(ul(i=>this.expandSegmentAgainstRoute(t,e,n,i,r,s,o).pipe(il(t=>{if(t instanceof wc)return Da(null);throw t}))),wl(t=>!!t),il((t,n)=>{if(t instanceof Va||"EmptyError"===t.name){if(_c(e,r,s))return Da(new iu([],{}));throw new wc(e)}throw t}))}expandSegmentAgainstRoute(t,e,n,r,s,o,i){return vc(r,e,s,o)?void 0===r.redirectTo?this.matchSegmentAgainstRoute(t,e,r,s,o):i&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,o):Sc(e):Sc(e)}expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,o){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o):this.expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,s,o)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,e,n,r){const s=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?Cc(s):this.lineralizeSegments(n,s).pipe(F(n=>{const s=new iu(n,{});return this.expandSegment(t,s,e,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,s,o){const{matched:i,consumedSegments:a,lastChild:l,positionalParamSegments:u}=gc(e,r,s);if(!i)return Sc(e);const c=this.applyRedirectCommands(a,r.redirectTo,u);return r.redirectTo.startsWith("/")?Cc(c):this.lineralizeSegments(r,c).pipe(F(r=>this.expandSegment(t,e,n,r.concat(s.slice(l)),o,!1)))}matchSegmentAgainstRoute(t,e,n,r,s){if("**"===n.path)return n.loadChildren?(n._loadedConfig?Da(n._loadedConfig):this.configLoader.load(t.injector,n)).pipe(T(t=>(n._loadedConfig=t,new iu(r,{})))):Da(new iu(r,{}));const{matched:o,consumedSegments:i,lastChild:a}=gc(e,n,r);if(!o)return Sc(e);const l=r.slice(a);return this.getChildConfig(t,n,r).pipe(F(t=>{const r=t.module,o=t.routes,{segmentGroup:a,slicedSegments:u}=mc(e,i,l,o),c=new iu(a.segments,a.children);if(0===u.length&&c.hasChildren())return this.expandChildren(r,o,c).pipe(T(t=>new iu(i,t)));if(0===o.length&&0===u.length)return Da(new iu(i,{}));const h=dc(n)===s;return this.expandSegment(r,c,o,u,h?Bl:s,!0).pipe(T(t=>new iu(i.concat(t.segments),t.children)))}))}getChildConfig(t,e,n){return e.children?Da(new nc(e.children,t)):e.loadChildren?void 0!==e._loadedConfig?Da(e._loadedConfig):this.runCanLoadGuards(t.injector,e,n).pipe(F(n=>n?this.configLoader.load(t.injector,e).pipe(T(t=>(e._loadedConfig=t,t))):function(t){return new v(e=>e.error(Gl(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))}(e))):Da(new nc([],t))}runCanLoadGuards(t,e,n){const r=e.canLoad;return r&&0!==r.length?Da(r.map(r=>{const s=t.get(r);let o;if(function(t){return t&&rc(t.canLoad)}(s))o=s.canLoad(e,n);else{if(!rc(s))throw new Error("Invalid CanLoad guard");o=s(e,n)}return tu(o)})).pipe(ic(),Sl(t=>{if(!sc(t))return;const e=Gl(`Redirecting to "${this.urlSerializer.serialize(t)}"`);throw e.url=t,e}),T(t=>!0===t)):Da(!0)}lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return Da(n);if(r.numberOfChildren>1||!r.children.primary)return xc(t.redirectTo);r=r.children.primary}}applyRedirectCommands(t,e,n){return this.applyRedirectCreatreUrlTree(e,this.urlSerializer.parse(e),t,n)}applyRedirectCreatreUrlTree(t,e,n,r){const s=this.createSegmentGroup(t,e.root,n,r);return new ou(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){const n={};return Xl(t,(t,r)=>{if("string"==typeof t&&t.startsWith(":")){const s=t.substring(1);n[r]=e[s]}else n[r]=t}),n}createSegmentGroup(t,e,n,r){const s=this.createSegments(t,e.segments,n,r);let o={};return Xl(e.children,(e,s)=>{o[s]=this.createSegmentGroup(t,e,n,r)}),new iu(s,o)}createSegments(t,e,n,r){return e.map(e=>e.path.startsWith(":")?this.findPosParam(t,e,r):this.findOrReturn(e,n))}findPosParam(t,e,n){const r=n[e.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);return r}findOrReturn(t,e){let n=0;for(const r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}}function Tc(t){const e={};for(const n of Object.keys(t.children)){const r=Tc(t.children[n]);(r.segments.length>0||r.hasChildren())&&(e[n]=r)}return function(t){if(1===t.numberOfChildren&&t.children.primary){const e=t.children.primary;return new iu(t.segments.concat(e.segments),e.children)}return t}(new iu(t.segments,e))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class kc{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class Ac{constructor(t,e){this.component=t,this.route=e}}function Rc(t,e,n){const r=t._root;return Oc(r,e?e._root:null,n,[r.value])}function Ic(t,e,n){const r=function(t){if(!t)return null;for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig}return null}(e);return(r?r.module.injector:n).get(t)}function Oc(t,e,n,r,s={canDeactivateChecks:[],canActivateChecks:[]}){const o=Ru(e);return t.children.forEach(t=>{!function(t,e,n,r,s={canDeactivateChecks:[],canActivateChecks:[]}){const o=t.value,i=e?e.value:null,a=n?n.getContext(t.value.outlet):null;if(i&&o.routeConfig===i.routeConfig){const l=function(t,e,n){if("function"==typeof n)return n(t,e);switch(n){case"pathParamsChange":return!lu(t.url,e.url);case"pathParamsOrQueryParamsChange":return!lu(t.url,e.url)||!Ql(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Lu(t,e)||!Ql(t.queryParams,e.queryParams);case"paramsChange":default:return!Lu(t,e)}}(i,o,o.routeConfig.runGuardsAndResolvers);l?s.canActivateChecks.push(new kc(r)):(o.data=i.data,o._resolvedData=i._resolvedData),Oc(t,e,o.component?a?a.children:null:n,r,s),l&&a&&a.outlet&&a.outlet.isActivated&&s.canDeactivateChecks.push(new Ac(a.outlet.component,i))}else i&&Pc(e,a,s),s.canActivateChecks.push(new kc(r)),Oc(t,null,o.component?a?a.children:null:n,r,s)}(t,o[t.value.outlet],n,r.concat([t.value]),s),delete o[t.value.outlet]}),Xl(o,(t,e)=>Pc(t,n.getContext(e),s)),s}function Pc(t,e,n){const r=Ru(t),s=t.value;Xl(r,(t,r)=>{Pc(t,s.component?e?e.children.getContext(r):null:e,n)}),n.canDeactivateChecks.push(new Ac(s.component&&e&&e.outlet&&e.outlet.isActivated?e.outlet.component:null,s))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class jc{}function Dc(t){return new v(e=>e.error(t))}class Uc{constructor(t,e,n,r,s,o){this.rootComponentType=t,this.config=e,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=o}recognize(){const t=mc(this.urlTree.root,[],[],this.config.filter(t=>void 0===t.redirectTo),this.relativeLinkResolution).segmentGroup,e=this.processSegmentGroup(this.config,t,Bl);if(null===e)return null;const n=new Du([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},Bl,this.rootComponentType,null,this.urlTree.root,-1,{}),r=new Au(n,e),s=new Uu(this.url,r);return this.inheritParamsAndData(s._root),s}inheritParamsAndData(t){const e=t.value,n=ju(e,this.paramsInheritanceStrategy);e.params=Object.freeze(n.params),e.data=Object.freeze(n.data),t.children.forEach(t=>this.inheritParamsAndData(t))}processSegmentGroup(t,e,n){return 0===e.segments.length&&e.hasChildren()?this.processChildren(t,e):this.processSegment(t,e,e.segments,n)}processChildren(t,e){const n=[];for(const s of Object.keys(e.children)){const r=e.children[s],o=pc(t,s),i=this.processSegmentGroup(o,r,s);if(null===i)return null;n.push(...i)}const r=Hc(n);return r.sort((t,e)=>t.value.outlet===Bl?-1:e.value.outlet===Bl?1:t.value.outlet.localeCompare(e.value.outlet)),r}processSegment(t,e,n,r){for(const s of t){const t=this.processSegmentAgainstRoute(s,e,n,r);if(null!==t)return t}return _c(e,n,r)?[]:null}processSegmentAgainstRoute(t,e,n,r){if(t.redirectTo||!vc(t,e,n,r))return null;let s,o=[],i=[];if("**"===t.path){const r=n.length>0?Kl(n).parameters:{};s=new Du(n,r,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Fc(t),dc(t),t.component,t,Mc(e),Lc(e)+n.length,$c(t))}else{const r=gc(e,t,n);if(!r.matched)return null;o=r.consumedSegments,i=n.slice(r.lastChild),s=new Du(o,r.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Fc(t),dc(t),t.component,t,Mc(e),Lc(e)+o.length,$c(t))}const a=function(t){return t.children?t.children:t.loadChildren?t._loadedConfig.routes:[]}(t),{segmentGroup:l,slicedSegments:u}=mc(e,o,i,a.filter(t=>void 0===t.redirectTo),this.relativeLinkResolution);if(0===u.length&&l.hasChildren()){const t=this.processChildren(a,l);return null===t?null:[new Au(s,t)]}if(0===a.length&&0===u.length)return[new Au(s,[])];const c=dc(t)===r,h=this.processSegment(a,l,u,c?Bl:r);return null===h?null:[new Au(s,h)]}}function Nc(t){const e=t.value.routeConfig;return e&&""===e.path&&void 0===e.redirectTo}function Hc(t){const e=[],n=new Set;for(const r of t){if(!Nc(r)){e.push(r);continue}const t=e.find(t=>r.value.routeConfig===t.value.routeConfig);void 0!==t?(t.children.push(...r.children),n.add(t)):e.push(r)}for(const r of n){const t=Hc(r.children);e.push(new Au(r.value,t))}return e.filter(t=>!n.has(t))}function Mc(t){let e=t;for(;e._sourceSegment;)e=e._sourceSegment;return e}function Lc(t){let e=t,n=e._segmentIndexShift?e._segmentIndexShift:0;for(;e._sourceSegment;)e=e._sourceSegment,n+=e._segmentIndexShift?e._segmentIndexShift:0;return n-1}function Fc(t){return t.data||{}}function $c(t){return t.resolve||{}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Vc(t){return Ga(e=>{const n=t(e);return n?N(n).pipe(T(()=>e)):Da(e)})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class zc extends class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}}{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Bc=new _n("ROUTES");class qc{constructor(t,e,n,r){this.loader=t,this.compiler=e,this.onLoadStartListener=n,this.onLoadEndListener=r}load(t,e){if(e._loader$)return e._loader$;this.onLoadStartListener&&this.onLoadStartListener(e);const n=this.loadModuleFactory(e.loadChildren).pipe(T(n=>{this.onLoadEndListener&&this.onLoadEndListener(e);const r=n.create(t);return new nc(Yl(r.injector.get(Bc,void 0,mt.Self|mt.Optional)).map(hc),r)}),il(t=>{throw e._loader$=void 0,t}));return e._loader$=new W(n,()=>new C).pipe(q()),e._loader$}loadModuleFactory(t){return"string"==typeof t?N(this.loader.load(t)):tu(t()).pipe(F(t=>t instanceof vo?Da(t):N(this.compiler.compileModuleAsync(t))))}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Zc{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new Gc,this.attachRef=null}}class Gc{constructor(){this.contexts=new Map}onChildOutletCreated(t,e){const n=this.getOrCreateContext(t);n.outlet=e,this.contexts.set(t,n)}onChildOutletDestroyed(t){const e=this.getContext(t);e&&(e.outlet=null)}onOutletDeactivated(){const t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new Zc,this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Wc{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Qc(t){throw t}function Jc(t,e,n){return e.parse("/")}function Yc(t,e){return Da(null)}let Kc=(()=>{class t{constructor(t,e,n,r,s,o,i,a){this.rootComponentType=t,this.urlSerializer=e,this.rootContexts=n,this.location=r,this.config=a,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.lastLocationChangeInfo=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new C,this.errorHandler=Qc,this.malformedUriErrorHandler=Jc,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Yc,afterPreactivation:Yc},this.urlHandlingStrategy=new Wc,this.routeReuseStrategy=new zc,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.ngModule=s.get(yo),this.console=s.get(Bo);const l=s.get(ri);this.isNgZoneEnabled=l instanceof ri&&ri.isInAngularZone(),this.resetConfig(a),this.currentUrlTree=new ou(new iu([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new qc(o,i,t=>this.triggerEvent(new Hl(t)),t=>this.triggerEvent(new Ml(t))),this.routerState=Ou(this.currentUrlTree,this.rootComponentType),this.transitions=new Ua({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(t){const e=this.events;return t.pipe(rl(t=>0!==t.id),T(t=>Object.assign(Object.assign({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl)})),Ga(t=>{let n=!1,r=!1;return Da(t).pipe(Sl(t=>{this.currentNavigation={id:t.id,initialUrl:t.currentRawUrl,extractedUrl:t.extractedUrl,trigger:t.source,extras:t.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Ga(t=>{const n=!this.navigated||t.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))return Da(t).pipe(Ga(t=>{const n=this.transitions.getValue();return e.next(new Al(t.id,this.serializeUrl(t.extractedUrl),t.source,t.restoredState)),n!==this.transitions.getValue()?Ba:Promise.resolve(t)}),(r=this.ngModule.injector,s=this.configLoader,o=this.urlSerializer,i=this.config,Ga(t=>function(t,e,n,r,s){return new Ec(t,e,n,r,s).apply()}(r,s,o,t.extractedUrl,i).pipe(T(e=>Object.assign(Object.assign({},t),{urlAfterRedirects:e}))))),Sl(t=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:t.urlAfterRedirects})}),function(t,e,n,r,s){return F(o=>function(t,e,n,r,s="emptyOnly",o="legacy"){try{const i=new Uc(t,e,n,r,s,o).recognize();return null===i?Dc(new jc):Da(i)}catch(i){return Dc(i)}}(t,e,o.urlAfterRedirects,n(o.urlAfterRedirects),r,s).pipe(T(t=>Object.assign(Object.assign({},o),{targetSnapshot:t}))))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(this.rootComponentType,this.config,t=>this.serializeUrl(t),this.paramsInheritanceStrategy,this.relativeLinkResolution),Sl(t=>{"eager"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(t.urlAfterRedirects,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects);const n=new Pl(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);e.next(n)}));var r,s,o,i;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:s,restoredState:o,extras:i}=t,a=new Al(n,this.serializeUrl(r),s,o);e.next(a);const l=Ou(r,this.rootComponentType).snapshot;return Da(Object.assign(Object.assign({},t),{targetSnapshot:l,urlAfterRedirects:r,extras:Object.assign(Object.assign({},i),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=t.rawUrl,this.browserUrlTree=t.urlAfterRedirects,t.resolve(null),Ba}),Vc(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:s,extras:{skipLocationChange:o,replaceUrl:i}}=t;return this.hooks.beforePreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:s,skipLocationChange:!!o,replaceUrl:!!i})}),Sl(t=>{const e=new jl(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),T(t=>Object.assign(Object.assign({},t),{guards:Rc(t.targetSnapshot,t.currentSnapshot,this.rootContexts)})),function(t,e){return F(n=>{const{targetSnapshot:r,currentSnapshot:s,guards:{canActivateChecks:o,canDeactivateChecks:i}}=n;return 0===i.length&&0===o.length?Da(Object.assign(Object.assign({},n),{guardsResult:!0})):function(t,e,n,r){return N(t).pipe(F(t=>function(t,e,n,r,s){const o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;return o&&0!==o.length?Da(o.map(o=>{const i=Ic(o,e,s);let a;if(function(t){return t&&rc(t.canDeactivate)}(i))a=tu(i.canDeactivate(t,e,n,r));else{if(!rc(i))throw new Error("Invalid CanDeactivate guard");a=tu(i(t,e,n,r))}return a.pipe(wl())})).pipe(ic()):Da(!0)}(t.component,t.route,n,e,r)),wl(t=>!0!==t,!0))}(i,r,s,t).pipe(F(n=>n&&"boolean"==typeof n?function(t,e,n,r){return N(e).pipe(ul(e=>za(function(t,e){return null!==t&&e&&e(new Ll(t)),Da(!0)}(e.route.parent,r),function(t,e){return null!==t&&e&&e(new $l(t)),Da(!0)}(e.route,r),function(t,e,n){const r=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(t=>function(t){const e=t.routeConfig?t.routeConfig.canActivateChild:null;return e&&0!==e.length?{node:t,guards:e}:null}(t)).filter(t=>null!==t).map(e=>Za(()=>Da(e.guards.map(s=>{const o=Ic(s,e.node,n);let i;if(function(t){return t&&rc(t.canActivateChild)}(o))i=tu(o.canActivateChild(r,t));else{if(!rc(o))throw new Error("Invalid CanActivateChild guard");i=tu(o(r,t))}return i.pipe(wl())})).pipe(ic())));return Da(s).pipe(ic())}(t,e.path,n),function(t,e,n){const r=e.routeConfig?e.routeConfig.canActivate:null;return r&&0!==r.length?Da(r.map(r=>Za(()=>{const s=Ic(r,e,n);let o;if(function(t){return t&&rc(t.canActivate)}(s))o=tu(s.canActivate(e,t));else{if(!rc(s))throw new Error("Invalid CanActivate guard");o=tu(s(e,t))}return o.pipe(wl())}))).pipe(ic()):Da(!0)}(t,e.route,n))),wl(t=>!0!==t,!0))}(r,o,t,e):Da(n)),T(t=>Object.assign(Object.assign({},n),{guardsResult:t})))})}(this.ngModule.injector,t=>this.triggerEvent(t)),Sl(t=>{if(sc(t.guardsResult)){const e=Gl(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);throw e.url=t.guardsResult,e}const e=new Dl(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot,!!t.guardsResult);this.triggerEvent(e)}),rl(t=>{if(!t.guardsResult){this.resetUrlToCurrentUrlTree();const n=new Il(t.id,this.serializeUrl(t.extractedUrl),"");return e.next(n),t.resolve(!1),!1}return!0}),Vc(t=>{if(t.guards.canActivateChecks.length)return Da(t).pipe(Sl(t=>{const e=new Ul(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),Ga(t=>{let n=!1;return Da(t).pipe((r=this.paramsInheritanceStrategy,s=this.ngModule.injector,F(t=>{const{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return Da(t);let o=0;return N(n).pipe(ul(t=>function(t,e,n,r){return function(t,e,n,r){const s=Object.keys(t);if(0===s.length)return Da({});const o={};return N(s).pipe(F(s=>function(t,e,n,r){const s=Ic(t,e,r);return tu(s.resolve?s.resolve(e,n):s(e,n))}(t[s],e,n,r).pipe(Sl(t=>{o[s]=t}))),cl(1),F(()=>Object.keys(o).length===s.length?Da(o):Ba))}(t._resolve,t,e,r).pipe(T(e=>(t._resolvedData=e,t.data=Object.assign(Object.assign({},t.data),ju(t,n).resolve),null)))}(t.route,e,r,s)),Sl(()=>o++),cl(1),F(e=>o===n.length?Da(t):Ba))})),Sl({next:()=>n=!0,complete:()=>{if(!n){const n=new Il(t.id,this.serializeUrl(t.extractedUrl),"At least one route resolver didn't emit any value.");e.next(n),t.resolve(!1)}}}));var r,s}),Sl(t=>{const e=new Nl(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}))}),Vc(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:s,extras:{skipLocationChange:o,replaceUrl:i}}=t;return this.hooks.afterPreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:s,skipLocationChange:!!o,replaceUrl:!!i})}),T(t=>{const e=function(t,e,n){const r=Fu(t,e._root,n?n._root:void 0);return new Iu(r,e)}(this.routeReuseStrategy,t.targetSnapshot,t.currentRouterState);return Object.assign(Object.assign({},t),{targetRouterState:e})}),Sl(t=>{this.currentUrlTree=t.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.rawUrl),this.routerState=t.targetRouterState,"deferred"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects)}),(o=this.rootContexts,i=this.routeReuseStrategy,a=t=>this.triggerEvent(t),T(t=>(new tc(i,t.targetRouterState,t.currentRouterState,a).activate(o),t))),Sl({next(){n=!0},complete(){n=!0}}),(s=()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new Il(t.id,this.serializeUrl(t.extractedUrl),`Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);e.next(n),t.resolve(!1)}this.currentNavigation=null},t=>t.lift(new El(s))),il(n=>{if(r=!0,(s=n)&&s.ngNavigationCancelingError){const r=sc(n.url);r||(this.navigated=!0,this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl));const s=new Il(t.id,this.serializeUrl(t.extractedUrl),n.message);e.next(s),r?setTimeout(()=>{const e=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);this.scheduleNavigation(e,"imperative",null,{skipLocationChange:t.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:t.resolve,reject:t.reject,promise:t.promise})},0):t.resolve(!1)}else{this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl);const r=new Ol(t.id,this.serializeUrl(t.extractedUrl),n);e.next(r);try{t.resolve(this.errorHandler(n))}catch(o){t.reject(o)}}var s;return Ba}));var s,o,i,a}))}resetRootComponentType(t){this.rootComponentType=t,this.routerState.root.component=this.rootComponentType}getTransition(){const t=this.transitions.value;return t.urlAfterRedirects=this.browserUrlTree,t}setTransition(t){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),t))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(t=>{const e=this.extractLocationChangeInfoFromEvent(t);this.shouldScheduleNavigation(this.lastLocationChangeInfo,e)&&setTimeout(()=>{const{source:t,state:n,urlTree:r}=e,s={replaceUrl:!0};if(n){const t=Object.assign({},n);delete t.navigationId,0!==Object.keys(t).length&&(s.state=t)}this.scheduleNavigation(r,t,n,s)},0),this.lastLocationChangeInfo=e}))}extractLocationChangeInfoFromEvent(t){var e;return{source:"popstate"===t.type?"popstate":"hashchange",urlTree:this.parseUrl(t.url),state:(null===(e=t.state)||void 0===e?void 0:e.navigationId)?t.state:null,transitionId:this.getTransition().id}}shouldScheduleNavigation(t,e){if(!t)return!0;const n=e.urlTree.toString()===t.urlTree.toString();return!(e.transitionId===t.transitionId&&n&&("hashchange"===e.source&&"popstate"===t.source||"popstate"===e.source&&"hashchange"===t.source))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(t){this.events.next(t)}resetConfig(t){lc(t),this.config=t.map(hc),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(t,e={}){const{relativeTo:n,queryParams:r,fragment:s,queryParamsHandling:o,preserveFragment:i}=e,a=n||this.routerState.root,l=i?this.currentUrlTree.fragment:s;let u=null;switch(o){case"merge":u=Object.assign(Object.assign({},this.currentUrlTree.queryParams),r);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=r||null}return null!==u&&(u=this.removeEmptyProps(u)),function(t,e,n,r,s){if(0===n.length)return Bu(e.root,e.root,e,r,s);const o=function(t){if("string"==typeof t[0]&&1===t.length&&"/"===t[0])return new Zu(!0,0,t);let e=0,n=!1;const r=t.reduce((t,r,s)=>{if("object"==typeof r&&null!=r){if(r.outlets){const e={};return Xl(r.outlets,(t,n)=>{e[n]="string"==typeof t?t.split("/"):t}),[...t,{outlets:e}]}if(r.segmentPath)return[...t,r.segmentPath]}return"string"!=typeof r?[...t,r]:0===s?(r.split("/").forEach((r,s)=>{0==s&&"."===r||(0==s&&""===r?n=!0:".."===r?e++:""!=r&&t.push(r))}),t):[...t,r]},[]);return new Zu(n,e,r)}(n);if(o.toRoot())return Bu(e.root,new iu([],{}),e,r,s);const i=function(t,e,n){if(t.isAbsolute)return new Gu(e.root,!0,0);if(-1===n.snapshot._lastPathIndex){const t=n.snapshot._urlSegment;return new Gu(t,t===e.root,0)}const r=Vu(t.commands[0])?0:1;return function(t,e,n){let r=t,s=e,o=n;for(;o>s;){if(o-=s,r=r.parent,!r)throw new Error("Invalid number of '../'");s=r.segments.length}return new Gu(r,!1,s-o)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,t.numberOfDoubleDots)}(o,e,t),a=i.processChildren?Qu(i.segmentGroup,i.index,o.commands):Wu(i.segmentGroup,i.index,o.commands);return Bu(i.segmentGroup,a,e,r,s)}(a,this.currentUrlTree,t,u,l)}navigateByUrl(t,e={skipLocationChange:!1}){const n=sc(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(r,"imperative",null,e)}navigate(t,e={skipLocationChange:!1}){return function(t){for(let e=0;e<t.length;e++){const n=t[e];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${e}`)}}(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){let e;try{e=this.urlSerializer.parse(t)}catch(n){e=this.malformedUriErrorHandler(n,this.urlSerializer,t)}return e}isActive(t,e){if(sc(t))return eu(this.currentUrlTree,t,e);const n=this.parseUrl(t);return eu(this.currentUrlTree,n,e)}removeEmptyProps(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return null!=r&&(e[n]=r),e},{})}processNavigations(){this.navigations.subscribe(t=>{this.navigated=!0,this.lastSuccessfulId=t.id,this.events.next(new Rl(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,t.resolve(!0)},t=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(t,e,n,r,s){if(this.disposed)return Promise.resolve(!1);const o=this.getTransition(),i="imperative"!==e&&"imperative"===(null==o?void 0:o.source),a=(this.lastSuccessfulId===o.id||this.currentNavigation?o.rawUrl:o.urlAfterRedirects).toString()===t.toString();if(i&&a)return Promise.resolve(!0);let l,u,c;s?(l=s.resolve,u=s.reject,c=s.promise):c=new Promise((t,e)=>{l=t,u=e});const h=++this.navigationId;return this.setTransition({id:h,source:e,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:t,extras:r,resolve:l,reject:u,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(t=>Promise.reject(t))}setBrowserUrl(t,e,n,r){const s=this.urlSerializer.serialize(t);r=r||{},this.location.isCurrentPathEqualTo(s)||e?this.location.replaceState(s,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(s,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(t,e,n){this.routerState=t,this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return t.\u0275fac=function(e){return new(e||t)(Pn(bn),Pn(uu),Pn(Gc),Pn(Ji),Pn(vs),Pn(Ei),Pn(ti),Pn(void 0))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})(),Xc=(()=>{class t{constructor(t,e,n,r,s){this.parentContexts=t,this.location=e,this.resolver=n,this.changeDetector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new Uo,this.deactivateEvents=new Uo,this.name=r||Bl,t.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const t=this.parentContexts.getContext(this.name);t&&t.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=t;const n=(e=e||this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,s=new th(t,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,s),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return t.\u0275fac=function(e){return new(e||t)(xs(Gc),xs(wo),xs(Ls),("name",function(t,e){const n=t.attrs;if(n){const t=n.length;let r=0;for(;r<t;){const s=n[r];if(Ze(s))break;if(0===s)r+=2;else if("number"==typeof s)for(r++;r<t&&"string"==typeof n[r];)r++;else{if(s===e)return n[r+1];r+=2}}}return null}(_e(),"name")),xs(po))},t.\u0275dir=Bt({type:t,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),t})();class th{constructor(t,e,n){this.route=t,this.childContexts=e,this.parent=n}get(t,e){return t===Pu?this.route:t===Gc?this.childContexts:this.parent.get(t,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class eh{}class nh{preload(t,e){return Da(null)}}let rh=(()=>{class t{constructor(t,e,n,r,s){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=new qc(e,n,e=>t.triggerEvent(new Hl(e)),e=>t.triggerEvent(new Ml(e)))}setUpPreloading(){this.subscription=this.router.events.pipe(rl(t=>t instanceof Rl),ul(()=>this.preload())).subscribe(()=>{})}preload(){const t=this.injector.get(yo);return this.processRoutes(t,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,e){const n=[];for(const r of e)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const t=r._loadedConfig;n.push(this.processRoutes(t.module,t.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(t,r)):r.children&&n.push(this.processRoutes(t,r.children));return N(n).pipe(z(),T(t=>{}))}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>(e._loadedConfig?Da(e._loadedConfig):this.loader.load(t.injector,e)).pipe(F(t=>(e._loadedConfig=t,this.processRoutes(t.module,t.routes)))))}}return t.\u0275fac=function(e){return new(e||t)(Pn(Kc),Pn(Ei),Pn(ti),Pn(vs),Pn(eh))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})(),sh=(()=>{class t{constructor(t,e,n={}){this.router=t,this.viewportScroller=e,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(t=>{t instanceof Al?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Rl&&(this.lastId=t.id,this.scheduleScrollEvent(t,this.router.parseUrl(t.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(t=>{t instanceof zl&&(t.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,e){this.router.triggerEvent(new zl(t,"popstate"===this.lastSource?this.store[this.restoredId]:null,e))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(Pn(Kc),Pn(ra),Pn(void 0))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const oh=new _n("ROUTER_CONFIGURATION"),ih=new _n("ROUTER_FORROOT_GUARD"),ah=[Ji,{provide:uu,useClass:cu},{provide:Kc,useFactory:function(t,e,n,r,s,o,i,a={},l,u){const c=new Kc(null,t,e,n,r,s,o,Yl(i));if(l&&(c.urlHandlingStrategy=l),u&&(c.routeReuseStrategy=u),function(t,e){t.errorHandler&&(e.errorHandler=t.errorHandler),t.malformedUriErrorHandler&&(e.malformedUriErrorHandler=t.malformedUriErrorHandler),t.onSameUrlNavigation&&(e.onSameUrlNavigation=t.onSameUrlNavigation),t.paramsInheritanceStrategy&&(e.paramsInheritanceStrategy=t.paramsInheritanceStrategy),t.relativeLinkResolution&&(e.relativeLinkResolution=t.relativeLinkResolution),t.urlUpdateStrategy&&(e.urlUpdateStrategy=t.urlUpdateStrategy)}(a,c),a.enableTracing){const t=Di();c.events.subscribe(e=>{t.logGroup(`Router Event: ${e.constructor.name}`),t.log(e.toString()),t.log(e),t.logGroupEnd()})}return c},deps:[uu,Gc,Ji,vs,Ei,ti,Bc,oh,[class{},new Nn],[class{},new Nn]]},Gc,{provide:Pu,useFactory:function(t){return t.routerState.root},deps:[Kc]},{provide:Ei,useClass:Ai},rh,nh,class{preload(t,e){return e().pipe(il(()=>Da(null)))}},{provide:oh,useValue:{enableTracing:!1}}];function lh(){return new vi("Router",Kc)}let uh=(()=>{class t{constructor(t,e){}static forRoot(e,n){return{ngModule:t,providers:[ah,ph(e),{provide:ih,useFactory:dh,deps:[[Kc,new Nn,new Hn]]},{provide:oh,useValue:n||{}},{provide:qi,useFactory:hh,deps:[Ni,[new Un(Gi),new Nn],oh]},{provide:sh,useFactory:ch,deps:[Kc,ra,oh]},{provide:eh,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:nh},{provide:vi,multi:!0,useFactory:lh},[fh,{provide:No,multi:!0,useFactory:gh,deps:[fh]},{provide:yh,useFactory:mh,deps:[fh]},{provide:zo,multi:!0,useExisting:yh}]]}}static forChild(e){return{ngModule:t,providers:[ph(e)]}}}return t.\u0275fac=function(e){return new(e||t)(Pn(ih,8),Pn(Kc,8))},t.\u0275mod=Vt({type:t}),t.\u0275inj=lt({}),t})();function ch(t,e,n){return n.scrollOffset&&e.setOffset(n.scrollOffset),new sh(t,e,n)}function hh(t,e,n={}){return n.useHash?new Qi(t,e):new Wi(t,e)}function dh(t){return"guarded"}function ph(t){return[{provide:wn,multi:!0,useValue:t},{provide:Bc,multi:!0,useValue:t}]}let fh=(()=>{class t{constructor(t){this.injector=t,this.initNavigation=!1,this.resultOfPreactivationDone=new C}appInitializer(){return this.injector.get(Mi,Promise.resolve(null)).then(()=>{let t=null;const e=new Promise(e=>t=e),n=this.injector.get(Kc),r=this.injector.get(oh);return"disabled"===r.initialNavigation?(n.setUpLocationChangeListener(),t(!0)):"enabled"===r.initialNavigation||"enabledBlocking"===r.initialNavigation?(n.hooks.afterPreactivation=()=>this.initNavigation?Da(null):(this.initNavigation=!0,t(!0),this.resultOfPreactivationDone),n.initialNavigation()):t(!0),e})}bootstrapListener(t){const e=this.injector.get(oh),n=this.injector.get(rh),r=this.injector.get(sh),s=this.injector.get(Kc),o=this.injector.get(Ci);t===o.components[0]&&("enabledNonBlocking"!==e.initialNavigation&&void 0!==e.initialNavigation||s.initialNavigation(),n.setUpPreloading(),r.init(),s.resetRootComponentType(o.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}}return t.\u0275fac=function(e){return new(e||t)(Pn(vs))},t.\u0275prov=at({token:t,factory:t.\u0275fac}),t})();function gh(t){return t.appInitializer.bind(t)}function mh(t){return t.bootstrapListener.bind(t)}const yh=new _n("Router Initializer"),vh=[];let _h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Vt({type:t}),t.\u0275inj=lt({imports:[[uh.forRoot(vh)],uh]}),t})(),wh=(()=>{class t{constructor(){this.title="record10-website"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Mt({type:t,selectors:[["app-root"]],decls:2,vars:0,consts:[["src","/assets/logo.svg","alt","",2,"width","100vw"]],template:function(t,e){1&t&&(ks(0,"router-outlet"),ks(1,"img",0))},directives:[Xc],styles:[""]}),t})(),bh=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Vt({type:t,bootstrap:[wh]}),t.\u0275inj=lt({providers:[],imports:[[ja,_h]]}),t})();(function(){if(mi)throw new Error("Cannot enable prod mode after platform setup.");gi=!1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */)(),Oa().bootstrapModule(bh).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0]]]);