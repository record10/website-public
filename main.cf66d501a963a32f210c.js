(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("zUnb")},zUnb:function(t,e,n){"use strict";function r(t){return"function"==typeof t}n.r(e);let s=!1;const i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else s&&console.log("RxJS: Back to a better error behavior. Thank you. <3");s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function o(t){setTimeout(()=>{throw t},0)}const a={closed:!0,next(t){},error(t){if(i.useDeprecatedSynchronousErrorHandling)throw t;o(t)},complete(){}},l=(()=>Array.isArray||(t=>t&&"number"==typeof t.length))();function u(t){return null!==t&&"object"==typeof t}const c=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();let h=(()=>{class t{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:s,_unsubscribe:i,_subscriptions:o}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(let t=0;t<n.length;++t)n[t].remove(this);if(r(i)){s&&(this._unsubscribe=void 0);try{i.call(this)}catch(a){e=a instanceof c?d(a.errors):[a]}}if(l(o)){let t=-1,n=o.length;for(;++t<n;){const n=o[t];if(u(n))try{n.unsubscribe()}catch(a){e=e||[],a instanceof c?e=e.concat(d(a.errors)):e.push(a)}}}if(e)throw new c(e)}add(e){let n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){const e=n;n=new t,n._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof t){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(t){const e=this._subscriptions;if(e){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}}return t.EMPTY=function(t){return t.closed=!0,t}(new t),t})();function d(t){return t.reduce((t,e)=>t.concat(e instanceof c?e.errors:e),[])}const f=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class p extends h{constructor(t,e,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=a;break;case 1:if(!t){this.destination=a;break}if("object"==typeof t){t instanceof p?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new g(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new g(this,t,e,n)}}[f](){return this}static create(t,e,n){const r=new p(t,e,n);return r.syncErrorThrowable=!1,r}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class g extends p{constructor(t,e,n,s){let i;super(),this._parentSubscriber=t;let o=this;r(e)?i=e:e&&(i=e.next,n=e.error,s=e.complete,e!==a&&(o=Object.create(e),r(o.unsubscribe)&&this.add(o.unsubscribe.bind(o)),o.unsubscribe=this.unsubscribe.bind(this))),this._context=o,this._next=i,this._error=n,this._complete=s}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:e}=this;i.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:n}=i;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):o(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;o(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const e=()=>this._complete.call(this._context);i.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,e){try{t.call(this._context,e)}catch(n){if(this.unsubscribe(),i.useDeprecatedSynchronousErrorHandling)throw n;o(n)}}__tryOrSetError(t,e,n){if(!i.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(r){return i.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(o(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const m=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function v(t){return t}let y=(()=>{class t{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(e){const n=new t;return n.source=this,n.operator=e,n}subscribe(t,e,n){const{operator:r}=this,s=function(t,e,n){if(t){if(t instanceof p)return t;if(t[f])return t[f]()}return t||e||n?new p(t,e,n):new p(a)}(t,e,n);if(s.add(r?r.call(s,this.source):this.source||i.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),i.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(t){try{return this._subscribe(t)}catch(e){i.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){const{closed:e,destination:n,isStopped:r}=t;if(e||r)return!1;t=n&&n instanceof p?n:null}return!0}(t)?t.error(e):console.warn(e)}}forEach(t,e){return new(e=_(e))((e,n)=>{let r;r=this.subscribe(e=>{try{t(e)}catch(s){n(s),r&&r.unsubscribe()}},n,e)})}_subscribe(t){const{source:e}=this;return e&&e.subscribe(t)}[m](){return this}pipe(...t){return 0===t.length?this:(0===(e=t).length?v:1===e.length?e[0]:function(t){return e.reduce((t,e)=>e(t),t)})(this);var e}toPromise(t){return new(t=_(t))((t,e)=>{let n;this.subscribe(t=>n=t,t=>e(t),()=>t(n))})}}return t.create=e=>new t(e),t})();function _(t){if(t||(t=i.Promise||Promise),!t)throw new Error("no Promise impl found");return t}const w=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class b extends h{constructor(t,e){super(),this.subject=t,this.subscriber=e,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,e=t.observers;if(this.subject=null,!e||0===e.length||t.isStopped||t.closed)return;const n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}class S extends p{constructor(t){super(t),this.destination=t}}let C=(()=>{class t extends y{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[f](){return new S(this)}lift(t){const e=new x(this,this);return e.operator=t,e}next(t){if(this.closed)throw new w;if(!this.isStopped){const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].next(t)}}error(t){if(this.closed)throw new w;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].error(t);this.observers.length=0}complete(){if(this.closed)throw new w;this.isStopped=!0;const{observers:t}=this,e=t.length,n=t.slice();for(let r=0;r<e;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new w;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new w;return this.hasError?(t.error(this.thrownError),h.EMPTY):this.isStopped?(t.complete(),h.EMPTY):(this.observers.push(t),new b(this,t))}asObservable(){const t=new y;return t.source=this,t}}return t.create=(t,e)=>new x(t,e),t})();class x extends C{constructor(t,e){super(),this.destination=t,this.source=e}next(t){const{destination:e}=this;e&&e.next&&e.next(t)}error(t){const{destination:e}=this;e&&e.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:e}=this;return e?this.source.subscribe(t):h.EMPTY}}function E(t){return t&&"function"==typeof t.schedule}function T(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new k(t,e))}}class k{constructor(t,e){this.project=t,this.thisArg=e}call(t,e){return e.subscribe(new A(t,this.project,this.thisArg))}}class A extends p{constructor(t,e,n){super(t),this.project=e,this.count=0,this.thisArg=n||this}_next(t){let e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}const R=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()};function I(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const O=I(),P=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function j(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}const N=t=>{if(t&&"function"==typeof t[m])return r=t,t=>{const e=r[m]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(P(t))return R(t);if(j(t))return n=t,t=>(n.then(e=>{t.closed||(t.next(e),t.complete())},e=>t.error(e)).then(null,o),t);if(t&&"function"==typeof t[O])return e=t,t=>{const n=e[O]();for(;;){let e;try{e=n.next()}catch(r){return t.error(r),t}if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add(()=>{n.return&&n.return()}),t};{const e=u(t)?"an invalid object":`'${t}'`;throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var e,n,r};function U(t,e){return new y(n=>{const r=new h;let s=0;return r.add(e.schedule(function(){s!==t.length?(n.next(t[s++]),n.closed||r.add(this.schedule())):n.complete()})),r})}function D(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[m]}(t))return function(t,e){return new y(n=>{const r=new h;return r.add(e.schedule(()=>{const s=t[m]();r.add(s.subscribe({next(t){r.add(e.schedule(()=>n.next(t)))},error(t){r.add(e.schedule(()=>n.error(t)))},complete(){r.add(e.schedule(()=>n.complete()))}}))})),r})}(t,e);if(j(t))return function(t,e){return new y(n=>{const r=new h;return r.add(e.schedule(()=>t.then(t=>{r.add(e.schedule(()=>{n.next(t),r.add(e.schedule(()=>n.complete()))}))},t=>{r.add(e.schedule(()=>n.error(t)))}))),r})}(t,e);if(P(t))return U(t,e);if(function(t){return t&&"function"==typeof t[O]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new y(n=>{const r=new h;let s;return r.add(()=>{s&&"function"==typeof s.return&&s.return()}),r.add(e.schedule(()=>{s=t[O](),r.add(e.schedule(function(){if(n.closed)return;let t,e;try{const n=s.next();t=n.value,e=n.done}catch(r){return void n.error(r)}e?n.complete():(n.next(t),this.schedule())}))})),r})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof y?t:new y(N(t))}class L extends p{constructor(t){super(),this.parent=t}_next(t){this.parent.notifyNext(t)}_error(t){this.parent.notifyError(t),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class H extends p{notifyNext(t){this.destination.next(t)}notifyError(t){this.destination.error(t)}notifyComplete(){this.destination.complete()}}function M(t,e){if(e.closed)return;if(t instanceof y)return t.subscribe(e);let n;try{n=N(t)(e)}catch(r){e.error(r)}return n}function F(t,e,n=Number.POSITIVE_INFINITY){return"function"==typeof e?r=>r.pipe(F((n,r)=>D(t(n,r)).pipe(T((t,s)=>e(n,t,r,s))),n)):("number"==typeof e&&(n=e),e=>e.lift(new V(t,n)))}class V{constructor(t,e=Number.POSITIVE_INFINITY){this.project=t,this.concurrent=e}call(t,e){return e.subscribe(new $(t,this.project,this.concurrent))}}class $ extends H{constructor(t,e,n=Number.POSITIVE_INFINITY){super(t),this.project=e,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)}_tryNext(t){let e;const n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(e)}_innerSub(t){const e=new L(this),n=this.destination;n.add(e);const r=M(t,e);r!==e&&n.add(r)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(t){this.destination.next(t)}notifyComplete(){const t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function q(t=Number.POSITIVE_INFINITY){return F(v,t)}function z(t,e){return e?U(t,e):new y(R(t))}function B(){return function(t){return t.lift(new W(t))}}class W{constructor(t){this.connectable=t}call(t,e){const{connectable:n}=this;n._refCount++;const r=new G(t,n),s=e.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class G extends p{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:n}=this,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class Z extends y{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new h,t.add(this.source.subscribe(new K(this.getSubject(),this))),t.closed&&(this._connection=null,t=h.EMPTY)),t}refCount(){return B()(this)}}const Q=(()=>{const t=Z.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class K extends S{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function Y(){return new C}
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
function J(t){for(let e in t)if(t[e]===J)return e;throw Error("Could not find renamed property on target object.")}
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
 */const et=J({__forward_ref__:J});function nt(t){return t.__forward_ref__=nt,t.toString=function(){return X(this())},t}function rt(t){return"function"==typeof(e=t)&&e.hasOwnProperty(et)&&e.__forward_ref__===nt?t():t;var e;
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
 */(t,e)),this.code=t}}function it(t){return"string"==typeof t?t:null==t?"":String(t)}function ot(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():it(t)}function at(t,e){const n=e?` in ${e}`:"";throw new st("201",`No provider for ${ot(t)} found${n}`)}
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
function lt(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ut(t){return{providers:t.providers||[],imports:t.imports||[]}}function ct(t){return ht(t,ft)||ht(t,gt)}function ht(t,e){return t.hasOwnProperty(e)?t[e]:null}function dt(t){return t&&(t.hasOwnProperty(pt)||t.hasOwnProperty(mt))?t[pt]:null}const ft=J({"\u0275prov":J}),pt=J({"\u0275inj":J}),gt=J({ngInjectableDef:J}),mt=J({ngInjectorDef:J});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var vt=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let yt;function _t(t){const e=yt;return yt=t,e}function wt(t,e,n){const r=ct(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&vt.Optional?null:void 0!==e?e:void at(X(t),"Injector")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function bt(t){return{toString:t}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var St=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}({}),Ct=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const xt="undefined"!=typeof globalThis&&globalThis,Et="undefined"!=typeof window&&window,Tt="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,kt="undefined"!=typeof global&&global,At=xt||kt||Et||Tt,Rt={},It=[],Ot=J({"\u0275cmp":J}),Pt=J({"\u0275dir":J}),jt=J({"\u0275pipe":J}),Nt=J({"\u0275mod":J}),Ut=J({"\u0275loc":J}),Dt=J({"\u0275fac":J}),Lt=J({__NG_ELEMENT_ID__:J});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Ht=0;function Mt(t){return bt(()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===St.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||It,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||Ct.Emulated,id:"c",styles:t.styles||It,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,s=t.features,i=t.pipes;return n.id+=Ht++,n.inputs=zt(t.inputs,e),n.outputs=zt(t.outputs),s&&s.forEach(t=>t(n)),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(Ft):null,n.pipeDefs=i?()=>("function"==typeof i?i():i).map(Vt):null,n})}function Ft(t){return Wt(t)||function(t){return t[Pt]||null}(t)}function Vt(t){return function(t){return t[jt]||null}(t)}const $t={};function qt(t){const e={type:t.type,bootstrap:t.bootstrap||It,declarations:t.declarations||It,imports:t.imports||It,exports:t.exports||It,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&bt(()=>{$t[t.id]=t.type}),e}function zt(t,e){if(null==t)return Rt;const n={};for(const r in t)if(t.hasOwnProperty(r)){let s=t[r],i=s;Array.isArray(s)&&(i=s[1],s=s[0]),n[s]=r,e&&(e[s]=i)}return n}const Bt=Mt;function Wt(t){return t[Ot]||null}function Gt(t,e){const n=t[Nt]||null;if(!n&&!0===e)throw new Error(`Type ${X(t)} does not have '\u0275mod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Zt=20,Qt=10;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Kt(t){return Array.isArray(t)&&"object"==typeof t[1]}function Yt(t){return Array.isArray(t)&&!0===t[1]}function Jt(t){return 0!=(8&t.flags)}function Xt(t){return 2==(2&t.flags)}function te(t){return 1==(1&t.flags)}function ee(t){return null!==t.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ne(t,e){return t.hasOwnProperty(Dt)?t[Dt]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class re{constructor(t,e,n){this.previousValue=t,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function se(){return ie}function ie(t){return t.type.prototype.ngOnChanges&&(t.setInput=ae),oe}function oe(){const t=le(this),e=null==t?void 0:t.current;if(e){const n=t.previous;if(n===Rt)t.previous=e;else for(let t in e)n[t]=e[t];t.current=null,this.ngOnChanges(e)}}function ae(t,e,n,r){const s=le(t)||function(t,e){return t.__ngSimpleChanges__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,{previous:Rt,current:null}),i=s.current||(s.current={}),o=s.previous,a=this.declaredInputs[n],l=o[a];i[a]=new re(l&&l.currentValue,e,o===Rt),t[r]=e}function le(t){return t.__ngSimpleChanges__||null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let ue;function ce(t){return!!t.listen}se.ngInherit=!0;const he={createRenderer:(t,e)=>void 0!==ue?ue:"undefined"!=typeof document?document:void 0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function de(t){for(;Array.isArray(t);)t=t[0];return t}function fe(t,e){return de(e[t.index])}function pe(t,e){return t.data[e]}function ge(t,e){const n=e[t];return Kt(n)?n:n[0]}function me(t){const e=function(t){return t.__ngContext__||null}(t);return e?Array.isArray(e)?e:e.lView:null}function ve(t){return 4==(4&t[2])}function ye(t){return 128==(128&t[2])}function _e(t,e){return null==e?null:t[e]}function we(t){t[18]=0}function be(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Se={lFrame:Ve(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Ce(){return Se.bindingsEnabled}function xe(){return Se.lFrame.lView}function Ee(){return Se.lFrame.tView}function Te(){let t=ke();for(;null!==t&&64===t.type;)t=t.parent;return t}function ke(){return Se.lFrame.currentTNode}function Ae(t,e){const n=Se.lFrame;n.currentTNode=t,n.isParent=e}function Re(){return Se.lFrame.isParent}function Ie(){return Se.isInCheckNoChangesMode}function Oe(t){Se.isInCheckNoChangesMode=t}function Pe(){return Se.lFrame.bindingIndex++}function je(t,e){const n=Se.lFrame;n.bindingIndex=n.bindingRootIndex=t,Ne(e)}function Ne(t){Se.lFrame.currentDirectiveIndex=t}function Ue(){return Se.lFrame.currentQueryIndex}function De(t){Se.lFrame.currentQueryIndex=t}function Le(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function He(t,e,n){if(n&vt.SkipSelf){let r=e,s=t;for(;r=r.parent,!(null!==r||n&vt.Host||(r=Le(s),null===r)||(s=s[15],10&r.type)););if(null===r)return!1;e=r,t=s}const r=Se.lFrame=Fe();return r.currentTNode=e,r.lView=t,!0}function Me(t){const e=Fe(),n=t[1];Se.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Fe(){const t=Se.lFrame,e=null===t?null:t.child;return null===e?Ve(t):e}function Ve(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function $e(){const t=Se.lFrame;return Se.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const qe=$e;function ze(){const t=$e();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Be(){return Se.lFrame.selectedIndex}function We(t){Se.lFrame.selectedIndex=t}function Ge(){const t=Se.lFrame;return pe(t.tView,t.selectedIndex)}function Ze(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const e=t.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:s,ngAfterViewInit:i,ngAfterViewChecked:o,ngOnDestroy:a}=e;r&&(t.contentHooks||(t.contentHooks=[])).push(-n,r),s&&((t.contentHooks||(t.contentHooks=[])).push(n,s),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,s)),i&&(t.viewHooks||(t.viewHooks=[])).push(-n,i),o&&((t.viewHooks||(t.viewHooks=[])).push(n,o),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,o)),null!=a&&(t.destroyHooks||(t.destroyHooks=[])).push(n,a)}}function Qe(t,e,n){Je(t,e,3,n)}function Ke(t,e,n,r){(3&t[2])===n&&Je(t,e,n,r)}function Ye(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function Je(t,e,n,r){const s=null!=r?r:-1,i=e.length-1;let o=0;for(let a=void 0!==r?65535&t[18]:0;a<i;a++)if("number"==typeof e[a+1]){if(o=e[a],null!=r&&o>=r)break}else e[a]<0&&(t[18]+=65536),(o<s||-1==s)&&(Xe(t,n,e,a),t[18]=(4294901760&t[18])+a+2),a++}function Xe(t,e,n,r){const s=n[r]<0,i=n[r+1],o=t[s?-n[r]:n[r]];if(s){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048;try{i.call(o)}finally{}}}else try{i.call(o)}finally{}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const tn=-1;class en{constructor(t,e,n){this.factory=t,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=n}}function nn(t,e,n){const r=ce(t);let s=0;for(;s<n.length;){const i=n[s];if("number"==typeof i){if(0!==i)break;s++;const o=n[s++],a=n[s++],l=n[s++];r?t.setAttribute(e,a,l,o):e.setAttributeNS(o,a,l)}else{const o=i,a=n[++s];sn(o)?r&&t.setProperty(e,o,a):r?t.setAttribute(e,o,a):e.setAttribute(o,a),s++}}return s}function rn(t){return 3===t||4===t||6===t}function sn(t){return 64===t.charCodeAt(0)}function on(t,e){if(null===e||0===e.length);else if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const s=e[r];"number"==typeof s?n=s:0===n||an(t,n,s,null,-1===n||2===n?e[++r]:null)}}return t}function an(t,e,n,r,s){let i=0,o=t.length;if(-1===e)o=-1;else for(;i<t.length;){const n=t[i++];if("number"==typeof n){if(n===e){o=-1;break}if(n>e){o=i-1;break}}}for(;i<t.length;){const e=t[i];if("number"==typeof e)break;if(e===n){if(null===r)return void(null!==s&&(t[i+1]=s));if(r===t[i+1])return void(t[i+2]=s)}i++,null!==r&&i++,null!==s&&i++}-1!==o&&(t.splice(o,0,e),i=o+1),t.splice(i++,0,n),null!==r&&t.splice(i++,0,r),null!==s&&t.splice(i++,0,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ln(t){return t!==tn}function un(t){return 32767&t}function cn(t,e){let n=t>>16,r=e;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let hn=!0;function dn(t){const e=hn;return hn=t,e}let fn=0;function pn(t,e){const n=mn(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,gn(r.data,t),gn(e,null),gn(r.blueprint,null));const s=vn(t,e),i=t.injectorIndex;if(ln(s)){const t=un(s),n=cn(s,e),r=n[1].data;for(let s=0;s<8;s++)e[i+s]=n[t+s]|r[t+s]}return e[i+8]=s,i}function gn(t,e){t.push(0,0,0,0,0,0,0,0,e)}function mn(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function vn(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,s=e;for(;null!==s;){const t=s[1],e=t.type;if(r=2===e?t.declTNode:1===e?s[6]:null,null===r)return tn;if(n++,s=s[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return tn}function yn(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Lt)&&(r=n[Lt]),null==r&&(r=n[Lt]=fn++);const s=255&r;e.data[t+(s>>5)]|=1<<s}(t,e,n)}function _n(t,e,n){if(n&vt.Optional)return t;at(e,"NodeInjector")}function wn(t,e,n,r){if(n&vt.Optional&&void 0===r&&(r=null),0==(n&(vt.Self|vt.Host))){const s=t[9],i=_t(void 0);try{return s?s.get(e,r,n&vt.Optional):wt(e,r,n&vt.Optional)}finally{_t(i)}}return _n(r,e,n)}function bn(t,e,n,r=vt.Default,s){if(null!==t){const i=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(Lt)?t[Lt]:void 0;return"number"==typeof e?e>=0?255&e:Cn:e}(n);if("function"==typeof i){if(!He(e,t,r))return r&vt.Host?_n(s,n,r):wn(e,n,r,s);try{const t=i();if(null!=t||r&vt.Optional)return t;at(n)}finally{qe()}}else if("number"==typeof i){let s=null,o=mn(t,e),a=tn,l=r&vt.Host?e[16][6]:null;for((-1===o||r&vt.SkipSelf)&&(a=-1===o?vn(t,e):e[o+8],a!==tn&&An(r,!1)?(s=e[1],o=un(a),e=cn(a,e)):o=-1);-1!==o;){const t=e[1];if(kn(i,o,t.data)){const t=xn(o,e,n,s,r,l);if(t!==Sn)return t}a=e[o+8],a!==tn&&An(r,e[1].data[o+8]===l)&&kn(i,o,e)?(s=t,o=un(a),e=cn(a,e)):o=-1}}}return wn(e,n,r,s)}const Sn={};function Cn(){return new Rn(Te(),xe())}function xn(t,e,n,r,s,i){const o=e[1],a=o.data[t+8],l=En(a,o,n,null==r?Xt(a)&&hn:r!=o&&0!=(3&a.type),s&vt.Host&&i===a);return null!==l?Tn(e,o,l,a):Sn}function En(t,e,n,r,s){const i=t.providerIndexes,o=e.data,a=1048575&i,l=t.directiveStart,u=i>>20,c=s?a+u:t.directiveEnd;for(let h=r?a:a+u;h<c;h++){const t=o[h];if(h<l&&n===t||h>=l&&t.type===n)return h}if(s){const t=o[l];if(t&&ee(t)&&t.type===n)return l}return null}function Tn(t,e,n,r){let s=t[n];const i=e.data;if(s instanceof en){const o=s;o.resolving&&function(t,e){throw new st("200",`Circular dependency in DI detected for ${t}`)}(ot(i[n]));const a=dn(o.canSeeViewProviders);o.resolving=!0;const l=o.injectImpl?_t(o.injectImpl):null;He(t,r,vt.Default);try{s=t[n]=o.factory(void 0,i,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const{ngOnChanges:r,ngOnInit:s,ngDoCheck:i}=e.type.prototype;if(r){const r=ie(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,r)}s&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,s),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,i))}(n,i[n],e)}finally{null!==l&&_t(l),dn(a),o.resolving=!1,qe()}}return s}function kn(t,e,n){return!!(n[e+(t>>5)]&1<<t)}function An(t,e){return!(t&vt.Self||t&vt.Host&&e)}class Rn{constructor(t,e){this._tNode=t,this._lView=e}get(t,e){return bn(this._tNode,this._lView,t,void 0,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function In(t){return function(t,e){if("class"===e)return t.classes;if("style"===e)return t.styles;const n=t.attrs;if(n){const t=n.length;let r=0;for(;r<t;){const s=n[r];if(rn(s))break;if(0===s)r+=2;else if("number"==typeof s)for(r++;r<t&&"string"==typeof n[r];)r++;else{if(s===e)return n[r+1];r+=2}}}return null}(Te(),t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const On="__parameters__";function Pn(t,e,n){return bt(()=>{const r=function(t){return function(...e){if(t){const n=t(...e);for(const t in n)this[t]=n[t]}}}(e);function s(...t){if(this instanceof s)return r.apply(this,t),this;const e=new s(...t);return n.annotation=e,n;function n(t,n,r){const s=t.hasOwnProperty(On)?t[On]:Object.defineProperty(t,On,{value:[]})[On];for(;s.length<=r;)s.push(null);return(s[r]=s[r]||[]).push(e),t}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class jn{constructor(t,e){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.\u0275prov=lt({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Nn=new jn("AnalyzeForEntryComponents"),Un=Function;function Dn(t,e){void 0===e&&(e=t);for(let n=0;n<t.length;n++){let r=t[n];Array.isArray(r)?(e===t&&(e=t.slice(0,n)),Dn(r,e)):e!==t&&e.push(r)}return e}function Ln(t,e){t.forEach(t=>Array.isArray(t)?Ln(t,e):e(t))}function Hn(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Mn(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Fn={},Vn=/\n/gm,$n="__source",qn=J({provide:String,useValue:J});let zn;function Bn(t){const e=zn;return zn=t,e}function Wn(t,e=vt.Default){if(void 0===zn)throw new Error("inject() must be called from an injection context");return null===zn?wt(t,void 0,e):zn.get(t,e&vt.Optional?null:void 0,e)}function Gn(t,e=vt.Default){return(yt||Wn)(rt(t),e)}function Zn(t){const e=[];for(let n=0;n<t.length;n++){const r=rt(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let t,n=vt.Default;for(let e=0;e<r.length;e++){const s=r[e],i=s.__NG_DI_FLAG__;"number"==typeof i?-1===i?t=s.token:n|=i:t=s}e.push(Gn(t,n))}else e.push(Gn(r))}return e}function Qn(t,e){return t.__NG_DI_FLAG__=e,t.prototype.__NG_DI_FLAG__=e,t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Kn=Qn(Pn("Inject",t=>({token:t})),-1),Yn=Qn(Pn("Optional"),8),Jn=Qn(Pn("SkipSelf"),4);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Xn{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const tr=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,er=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var nr=function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function rr(t){const e=function(){const t=xe();return t&&t[12]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */();return e?e.sanitize(nr.URL,t)||"":function(t,e){const n=function(t){return t instanceof Xn&&t.getTypeName()||null}(t);if(null!=n&&n!==e){if("ResourceURL"===n&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===e}(t,"URL")?(r=t)instanceof Xn?r.changingThisBreaksApplicationSecurity:r:(n=it(t),(n=String(n)).match(tr)||n.match(er)?n:"unsafe:"+n);var n,r}function sr(t){return t.ngDebugContext}function ir(t){return t.ngOriginalError}function or(t,...e){t.error(...e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ar{constructor(){this._console=console}handleError(t){const e=this._findOriginalError(t),n=this._findContext(t),r=function(t){return t.ngErrorLogger||or}(t);r(this._console,"ERROR",t),e&&r(this._console,"ORIGINAL ERROR",e),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(t){return t?sr(t)?sr(t):this._findContext(ir(t)):null}_findOriginalError(t){let e=ir(t);for(;e&&ir(e);)e=ir(e);return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function lr(t,e){t.__ngContext__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ur=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(At))();function cr(t){return t instanceof Function?t():t}
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
var hr=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function dr(t,e){return(void 0)(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function fr(t){const e=t[3];return Yt(e)?e[3]:e}function pr(t){return mr(t[13])}function gr(t){return mr(t[4])}function mr(t){for(;null!==t&&!Yt(t);)t=t[4];return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function vr(t,e,n,r,s){if(null!=r){let i,o=!1;Yt(r)?i=r:Kt(r)&&(o=!0,r=r[0]);const a=de(r);0===t&&null!==n?null==s?xr(e,n,a):Cr(e,n,a,s||null,!0):1===t&&null!==n?Cr(e,n,a,s||null,!0):2===t?function(t,e,n){const r=Tr(t,e);r&&function(t,e,n,r){ce(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}(e,a,o):3===t&&e.destroyNode(a),null!=i&&function(t,e,n,r,s){const i=n[7];i!==de(n)&&vr(e,t,r,i,s);for(let o=Qt;o<n.length;o++){const s=n[o];Pr(s[1],s,t,e,r,i)}}(e,t,i,n,s)}}function yr(t,e,n){return ce(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function _r(t,e){const n=t[9],r=n.indexOf(e),s=e[3];1024&e[2]&&(e[2]&=-1025,be(s,-1)),n.splice(r,1)}function wr(t,e){if(t.length<=Qt)return;const n=Qt+e,r=t[n];if(r){const i=r[17];null!==i&&i!==t&&_r(i,r),e>0&&(t[n-1][4]=r[4]);const o=Mn(t,Qt+e);Pr(r[1],s=r,s[11],2,null,null),s[0]=null,s[6]=null;const a=o[19];null!==a&&a.detachView(o[1]),r[3]=null,r[4]=null,r[2]&=-129}var s;return r}function br(t,e){if(!(256&e[2])){const n=e[11];ce(n)&&n.destroyNode&&Pr(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return Sr(t[1],t);for(;e;){let n=null;if(Kt(e))n=e[13];else{const t=e[10];t&&(n=t)}if(!n){for(;e&&!e[4]&&e!==t;)Kt(e)&&Sr(e[1],e),e=e[3];null===e&&(e=t),Kt(e)&&Sr(e[1],e),n=e&&e[4]}e=n}}(e)}}function Sr(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const t=e[n[r]];if(!(t instanceof en)){const e=n[r+1];if(Array.isArray(e))for(let n=0;n<e.length;n+=2)e[n+1].call(t[e[n]]);else e.call(t)}}}(t,e),function(t,e){const n=t.cleanup,r=e[7];let s=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const t=n[i+1],o="function"==typeof t?t(e):de(e[t]),a=r[s=n[i+2]],l=n[i+3];"boolean"==typeof l?o.removeEventListener(n[i],a,l):l>=0?r[s=l]():r[s=-l].unsubscribe(),i+=2}else{const t=r[s=n[i+1]];n[i].call(t)}if(null!==r){for(let t=s+1;t<r.length;t++)(0,r[t])();e[7]=null}}(t,e),1===e[1].type&&ce(e[11])&&e[11].destroy();const n=e[17];if(null!==n&&Yt(e[3])){n!==e[3]&&_r(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function Cr(t,e,n,r,s){ce(t)?t.insertBefore(e,n,r,s):e.insertBefore(n,r,s)}function xr(t,e,n){ce(t)?t.appendChild(e,n):e.appendChild(n)}function Er(t,e,n,r,s){null!==r?Cr(t,e,n,r,s):xr(t,e,n)}function Tr(t,e){return ce(t)?t.parentNode(e):e.parentNode}function kr(t,e,n,r){const s=function(t,e,n){return function(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const e=t.data[r.directiveStart].encapsulation;if(e===Ct.None||e===Ct.Emulated)return null}return fe(r,n)}(t,e.parent,n)}(t,r,e),i=e[11],o=function(t,e,n){return function(t,e,n){return 40&t.type?fe(t,n):null}(t,0,n)}(r.parent||e[6],0,e);if(null!=s)if(Array.isArray(n))for(let a=0;a<n.length;a++)Er(i,s,n[a],o,!1);else Er(i,s,n,o,!1)}function Ar(t,e){if(null!==e){const n=e.type;if(3&n)return fe(e,t);if(4&n)return Ir(-1,t[e.index]);if(8&n){const n=e.child;if(null!==n)return Ar(t,n);{const n=t[e.index];return Yt(n)?Ir(-1,n):de(n)}}if(32&n)return dr(e,t)()||de(t[e.index]);{const n=Rr(t,e);return null!==n?Array.isArray(n)?n[0]:Ar(fr(t[16]),n):Ar(t,e.next)}}return null}function Rr(t,e){return null!==e?t[16][6].projection[e.projection]:null}function Ir(t,e){const n=Qt+t+1;if(n<e.length){const t=e[n],r=t[1].firstChild;if(null!==r)return Ar(t,r)}return e[7]}function Or(t,e,n,r,s,i,o){for(;null!=n;){const a=r[n.index],l=n.type;if(o&&0===e&&(a&&lr(de(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)Or(t,e,n.child,r,s,i,!1),vr(e,t,s,a,i);else if(32&l){const o=dr(n,r);let l;for(;l=o();)vr(e,t,s,l,i);vr(e,t,s,a,i)}else 16&l?jr(t,e,r,n,s,i):vr(e,t,s,a,i);n=o?n.projectionNext:n.next}}function Pr(t,e,n,r,s,i){Or(n,r,t.firstChild,e,s,i,!1)}function jr(t,e,n,r,s,i){const o=n[16],a=o[6].projection[r.projection];if(Array.isArray(a))for(let l=0;l<a.length;l++)vr(e,t,s,a[l],i);else Or(t,e,a,o[3],s,i,!0)}function Nr(t,e,n){ce(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function Ur(t,e,n){ce(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Dr(t,e,n){let r=t.length;for(;;){const s=t.indexOf(e,n);if(-1===s)return s;if(0===s||t.charCodeAt(s-1)<=32){const n=e.length;if(s+n===r||t.charCodeAt(s+n)<=32)return s}n=s+1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Lr="ng-template";function Hr(t,e,n){let r=0;for(;r<t.length;){let s=t[r++];if(n&&"class"===s){if(s=t[r],-1!==Dr(s.toLowerCase(),e,0))return!0}else if(1===s){for(;r<t.length&&"string"==typeof(s=t[r++]);)if(s.toLowerCase()===e)return!0;return!1}}return!1}function Mr(t){return 4===t.type&&t.value!==Lr}function Fr(t,e,n){return e===(4!==t.type||n?t.value:Lr)}function Vr(t,e,n){let r=4;const s=t.attrs||[],i=function(t){for(let e=0;e<t.length;e++)if(rn(t[e]))return e;return t.length}(s);let o=!1;for(let a=0;a<e.length;a++){const l=e[a];if("number"!=typeof l){if(!o)if(4&r){if(r=2|1&r,""!==l&&!Fr(t,l,n)||""===l&&1===e.length){if($r(r))return!1;o=!0}}else{const u=8&r?l:e[++a];if(8&r&&null!==t.attrs){if(!Hr(t.attrs,u,n)){if($r(r))return!1;o=!0}continue}const c=qr(8&r?"class":l,s,Mr(t),n);if(-1===c){if($r(r))return!1;o=!0;continue}if(""!==u){let t;t=c>i?"":s[c+1].toLowerCase();const e=8&r?t:null;if(e&&-1!==Dr(e,u,0)||2&r&&u!==t){if($r(r))return!1;o=!0}}}}else{if(!o&&!$r(r)&&!$r(l))return!1;if(o&&$r(l))continue;o=!1,r=l|1&r}}return $r(r)||o}function $r(t){return 0==(1&t)}function qr(t,e,n,r){if(null===e)return-1;let s=0;if(r||!n){let n=!1;for(;s<e.length;){const r=e[s];if(r===t)return s;if(3===r||6===r)n=!0;else{if(1===r||2===r){let t=e[++s];for(;"string"==typeof t;)t=e[++s];continue}if(4===r)break;if(0===r){s+=4;continue}}s+=n?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function zr(t,e,n=!1){for(let r=0;r<e.length;r++)if(Vr(t,e[r],n))return!0;return!1}function Br(t,e){return t?":not("+e.trim()+")":e}function Wr(t){let e=t[0],n=1,r=2,s="",i=!1;for(;n<t.length;){let o=t[n];if("string"==typeof o)if(2&r){const e=t[++n];s+="["+o+(e.length>0?'="'+e+'"':"")+"]"}else 8&r?s+="."+o:4&r&&(s+=" "+o);else""===s||$r(o)||(e+=Br(i,s),s=""),r=o,i=i||!$r(r);n++}return""!==s&&(e+=Br(i,s)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Gr={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Zr(t){Qr(Ee(),xe(),Be()+t,Ie())}function Qr(t,e,n,r){if(!r)if(3==(3&e[2])){const r=t.preOrderCheckHooks;null!==r&&Qe(e,r,n)}else{const r=t.preOrderHooks;null!==r&&Ke(e,r,0,n)}We(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Kr(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const s=n[r],i=n[r+1];if(-1!==i){const n=t.data[i];De(s),n.contentQueries(2,e[i],i)}}}function Yr(t,e,n,r,s,i,o,a,l,u){const c=e.blueprint.slice();return c[0]=s,c[2]=140|r,we(c),c[3]=c[15]=t,c[8]=n,c[10]=o||t&&t[10],c[11]=a||t&&t[11],c[12]=l||t&&t[12]||null,c[9]=u||t&&t[9]||null,c[6]=i,c[16]=2==e.type?t[16]:c,c}function Jr(t,e,n,r,s){let i=t.data[e];if(null===i)i=function(t,e,n,r,s){const i=ke(),o=Re(),a=t.data[e]=function(t,e,n,r,s,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:s,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,o?i:i&&i.parent,n,e,r,s);return null===t.firstChild&&(t.firstChild=a),null!==i&&(o?null==i.child&&null!==a.parent&&(i.child=a):null===i.next&&(i.next=a)),a}(t,e,n,r,s),Se.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=s;const t=function(){const t=Se.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}();i.injectorIndex=null===t?-1:t.injectorIndex}return Ae(i,!0),i}function Xr(t,e,n,r){if(0===n)return-1;const s=e.length;for(let i=0;i<n;i++)e.push(r),t.blueprint.push(r),t.data.push(null);return s}function ts(t,e,n){Me(e);try{const r=t.viewQuery;null!==r&&Rs(1,r,n);const s=t.template;null!==s&&rs(t,e,s,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&Kr(t,e),t.staticViewQueries&&Rs(2,t.viewQuery,n);const i=t.components;null!==i&&function(t,e){for(let n=0;n<e.length;n++)xs(t,e[n])}(e,i)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0),r}finally{e[2]&=-5,ze()}}function es(t,e,n,r){const s=e[2];if(256==(256&s))return;Me(e);const i=Ie();try{we(e),Se.lFrame.bindingIndex=t.bindingStartIndex,null!==n&&rs(t,e,n,2,r);const o=3==(3&s);if(!i)if(o){const n=t.preOrderCheckHooks;null!==n&&Qe(e,n,null)}else{const n=t.preOrderHooks;null!==n&&Ke(e,n,0,null),Ye(e,0)}if(function(t){for(let e=pr(t);null!==e;e=gr(e)){if(!e[2])continue;const t=e[9];for(let e=0;e<t.length;e++){const n=t[e],r=n[3];0==(1024&n[2])&&be(r,1),n[2]|=1024}}}(e),function(t){for(let e=pr(t);null!==e;e=gr(e))for(let t=Qt;t<e.length;t++){const n=e[t],r=n[1];ye(n)&&es(r,n,r.template,n[8])}}(e),null!==t.contentQueries&&Kr(t,e),!i)if(o){const n=t.contentCheckHooks;null!==n&&Qe(e,n)}else{const n=t.contentHooks;null!==n&&Ke(e,n,1),Ye(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let t=0;t<n.length;t++){const r=n[t];if(r<0)We(~r);else{const s=r,i=n[++t],o=n[++t];je(i,s),o(2,e[s])}}}finally{We(-1)}}(t,e);const a=t.components;null!==a&&function(t,e){for(let n=0;n<e.length;n++)Ss(t,e[n])}(e,a);const l=t.viewQuery;if(null!==l&&Rs(2,l,r),!i)if(o){const n=t.viewCheckHooks;null!==n&&Qe(e,n)}else{const n=t.viewHooks;null!==n&&Ke(e,n,2),Ye(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),i||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,be(e[3],-1))}finally{ze()}}function ns(t,e,n,r){const s=e[10],i=!Ie(),o=ve(e);try{i&&!o&&s.begin&&s.begin(),o&&ts(t,e,r),es(t,e,n,r)}finally{i&&!o&&s.end&&s.end()}}function rs(t,e,n,r,s){const i=Be(),o=2&r;try{We(-1),o&&e.length>Zt&&Qr(t,e,Zt,Ie()),n(r,s)}finally{We(i)}}function ss(t,e,n){Ce()&&(function(t,e,n,r){const s=n.directiveStart,i=n.directiveEnd;t.firstCreatePass||pn(n,e),lr(r,e);const o=n.initialInputs;for(let a=s;a<i;a++){const r=t.data[a],i=ee(r);i&&ys(e,n,r);const l=Tn(e,t,a,n);lr(l,e),null!==o&&_s(0,a-s,l,r,0,o),i&&(ge(n.index,e)[8]=l)}}(t,e,n,fe(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,s=n.directiveEnd,i=n.index,o=Se.lFrame.currentDirectiveIndex;try{We(i);for(let n=r;n<s;n++){const r=t.data[n],s=e[n];Ne(n),null===r.hostBindings&&0===r.hostVars&&null===r.hostAttrs||fs(r,s)}}finally{We(-1),Ne(o)}}(t,e,n))}function is(t,e,n=fe){const r=e.localNames;if(null!==r){let s=e.index+1;for(let i=0;i<r.length;i+=2){const o=r[i+1],a=-1===o?n(e,t):t[o];t[s++]=a}}}function os(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=as(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function as(t,e,n,r,s,i,o,a,l,u){const c=Zt+r,h=c+s,d=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:Gr);return n}(c,h),f="function"==typeof u?u():u;return d[1]={type:t,blueprint:d,template:n,queries:null,viewQuery:a,declTNode:e,data:d.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof o?o():o,firstChild:null,schemas:l,consts:f,incompleteFirstPass:!1}}function ls(t,e,n,r){const s=Os(e);null===n?s.push(r):(s.push(n),t.firstCreatePass&&Ps(t).push(r,s.length-1))}function us(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){const s=t[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(e,s):n[r]=[e,s]}return n}function cs(t,e,n,r,s,i,o,a){const l=fe(e,n);let u,c=e.inputs;var h;!a&&null!=c&&(u=c[r])?(Ns(t,n,u,r,s),Xt(e)&&function(t,e){const n=ge(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3&e.type&&(r="class"===(h=r)?"className":"for"===h?"htmlFor":"formaction"===h?"formAction":"innerHtml"===h?"innerHTML":"readonly"===h?"readOnly":"tabindex"===h?"tabIndex":h,s=null!=o?o(s,e.value||"",r):s,ce(i)?i.setProperty(l,r,s):sn(r)||(l.setProperty?l.setProperty(r,s):l[r]=s))}function hs(t,e,n,r){let s=!1;if(Ce()){const i=function(t,e,n){const r=t.directiveRegistry;let s=null;if(r)for(let i=0;i<r.length;i++){const o=r[i];zr(n,o.selectors,!1)&&(s||(s=[]),yn(pn(n,e),t,o.type),ee(o)?(ps(t,n),s.unshift(o)):s.push(o))}return s}(t,e,n),o=null===r?null:{"":-1};if(null!==i){s=!0,ms(n,t.data.length,i.length);for(let t=0;t<i.length;t++){const e=i[t];e.providersResolver&&e.providersResolver(e)}let r=!1,a=!1,l=Xr(t,e,i.length,null);for(let s=0;s<i.length;s++){const u=i[s];n.mergedAttrs=on(n.mergedAttrs,u.hostAttrs),vs(t,n,e,l,u),gs(l,u,o),null!==u.contentQueries&&(n.flags|=8),null===u.hostBindings&&null===u.hostAttrs&&0===u.hostVars||(n.flags|=128);const c=u.type.prototype;!r&&(c.ngOnChanges||c.ngOnInit||c.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),r=!0),a||!c.ngOnChanges&&!c.ngDoCheck||((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),a=!0),l++}!function(t,e){const n=e.directiveEnd,r=t.data,s=e.attrs,i=[];let o=null,a=null;for(let l=e.directiveStart;l<n;l++){const t=r[l],n=t.inputs,u=null===s||Mr(e)?null:ws(n,s);i.push(u),o=us(n,l,o),a=us(t.outputs,l,a)}null!==o&&(o.hasOwnProperty("class")&&(e.flags|=16),o.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=i,e.inputs=o,e.outputs=a}(t,n)}o&&function(t,e,n){if(e){const r=t.localNames=[];for(let t=0;t<e.length;t+=2){const s=n[e[t+1]];if(null==s)throw new st("301",`Export of name '${e[t+1]}' not found!`);r.push(e[t],s)}}}(n,r,o)}return n.mergedAttrs=on(n.mergedAttrs,n.attrs),s}function ds(t,e,n,r,s,i){const o=i.hostBindings;if(o){let n=t.hostBindingOpCodes;null===n&&(n=t.hostBindingOpCodes=[]);const i=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(n)!=i&&n.push(i),n.push(r,s,o)}}function fs(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function ps(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function gs(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;ee(e)&&(n[""]=t)}}function ms(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function vs(t,e,n,r,s){t.data[r]=s;const i=s.factory||(s.factory=ne(s.type)),o=new en(i,ee(s),null);t.blueprint[r]=o,n[r]=o,ds(t,e,0,r,Xr(t,n,s.hostVars,Gr),s)}function ys(t,e,n){const r=fe(e,t),s=os(n),i=t[10],o=Es(t,Yr(t,s,null,n.onPush?64:16,r,e,i,i.createRenderer(r,n),null,null));t[e.index]=o}function _s(t,e,n,r,s,i){const o=i[e];if(null!==o){const t=r.setInput;for(let e=0;e<o.length;){const s=o[e++],i=o[e++],a=o[e++];null!==t?r.setInput(n,a,s,i):n[i]=a}}}function ws(t,e){let n=null,r=0;for(;r<e.length;){const s=e[r];if(0!==s)if(5!==s){if("number"==typeof s)break;t.hasOwnProperty(s)&&(null===n&&(n=[]),n.push(s,t[s],e[r+1])),r+=2}else r+=2;else r+=4}return n}function bs(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function Ss(t,e){const n=ge(e,t);if(ye(n)){const t=n[1];80&n[2]?es(t,n,t.template,n[8]):n[5]>0&&Cs(n)}}function Cs(t){for(let n=pr(t);null!==n;n=gr(n))for(let t=Qt;t<n.length;t++){const e=n[t];if(1024&e[2]){const t=e[1];es(t,e,t.template,e[8])}else e[5]>0&&Cs(e)}const e=t[1].components;if(null!==e)for(let n=0;n<e.length;n++){const r=ge(e[n],t);ye(r)&&r[5]>0&&Cs(r)}}function xs(t,e){const n=ge(e,t),r=n[1];!function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}(r,n),ts(r,n,n[8])}function Es(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function Ts(t){for(;t;){t[2]|=64;const e=fr(t);if(0!=(512&t[2])&&!e)return t;t=e}return null}function ks(t,e,n){const r=e[10];r.begin&&r.begin();try{es(t,e,t.template,n)}catch(s){throw js(e,s),s}finally{r.end&&r.end()}}function As(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=me(n),s=r[1];ns(s,r,s.template,n)}}(t[8])}function Rs(t,e,n){De(0),e(t,n)}const Is=(()=>Promise.resolve(null))();function Os(t){return t[7]||(t[7]=[])}function Ps(t){return t.cleanup||(t.cleanup=[])}function js(t,e){const n=t[9],r=n?n.get(ar,null):null;r&&r.handleError(e)}function Ns(t,e,n,r,s){for(let i=0;i<n.length;){const o=n[i++],a=n[i++],l=e[o],u=t.data[o];null!==u.setInput?u.setInput(l,s,r,a):l[a]=s}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Us(t,e,n){let r=n?t.styles:null,s=n?t.classes:null,i=0;if(null!==e)for(let o=0;o<e.length;o++){const t=e[o];"number"==typeof t?i=t:1==i?s=tt(s,t):2==i&&(r=tt(r,t+": "+e[++o]+";"))}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=s:t.classesWithoutHost=s}
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
const Ds=new jn("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ls{get(t,e=Fn){if(e===Fn){const e=new Error(`NullInjectorError: No provider for ${X(t)}!`);throw e.name="NullInjectorError",e}return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Hs=new jn("Set Injector scope."),Ms={},Fs={},Vs=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let $s;function qs(){return void 0===$s&&($s=new Ls),$s}function zs(t,e=null,n=null,r){return new Bs(t,n,e||qs(),r)}class Bs{constructor(t,e,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];e&&Ln(e,n=>this.processProvider(n,t,e)),Ln([t],t=>this.processInjectorType(t,[],s)),this.records.set(Ds,Gs(void 0,this));const i=this.records.get(Hs);this.scope=null!=i?i.value:null,this.source=r||("object"==typeof t?null:X(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,e=Fn,n=vt.Default){this.assertNotDestroyed();const r=Bn(this);try{if(!(n&vt.SkipSelf)){let e=this.records.get(t);if(void 0===e){const n=("function"==typeof(s=t)||"object"==typeof s&&s instanceof jn)&&ct(t);e=n&&this.injectableDefInScope(n)?Gs(Ws(t),Ms):null,this.records.set(t,e)}if(null!=e)return this.hydrate(t,e)}return(n&vt.Self?qs():this.parent).get(t,e=n&vt.Optional&&e===Fn?null:e)}catch(i){if("NullInjectorError"===i.name){if((i.ngTempTokenPath=i.ngTempTokenPath||[]).unshift(X(t)),r)throw i;return function(t,e,n,r){const s=t.ngTempTokenPath;throw e[$n]&&s.unshift(e[$n]),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let s=X(e);if(Array.isArray(e))s=e.map(X).join(" -> ");else if("object"==typeof e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let r=e[n];t.push(n+":"+("string"==typeof r?JSON.stringify(r):X(r)))}s=`{${t.join(", ")}}`}return`${n}${r?"("+r+")":""}[${s}]: ${t.replace(Vn,"\n  ")}`}("\n"+t.message,s,n,r),t.ngTokenPath=s,t.ngTempTokenPath=null,t}(i,t,"R3InjectorError",this.source)}throw i}finally{Bn(r)}var s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((e,n)=>t.push(X(n))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,e,n){if(!(t=rt(t)))return!1;let r=dt(t);const s=null==r&&t.ngModule||void 0,i=void 0===s?t:s,o=-1!==n.indexOf(i);if(void 0!==s&&(r=dt(s)),null==r)return!1;if(null!=r.imports&&!o){let t;n.push(i);try{Ln(r.imports,r=>{this.processInjectorType(r,e,n)&&(void 0===t&&(t=[]),t.push(r))})}finally{}if(void 0!==t)for(let e=0;e<t.length;e++){const{ngModule:n,providers:r}=t[e];Ln(r,t=>this.processProvider(t,n,r||Vs))}}this.injectorDefTypes.add(i);const a=ne(i)||(()=>new i);this.records.set(i,Gs(a,Ms));const l=r.providers;if(null!=l&&!o){const e=t;Ln(l,t=>this.processProvider(t,e,l))}return void 0!==s&&void 0!==t.providers}processProvider(t,e,n){let r=Qs(t=rt(t))?t:rt(t&&t.provide);const s=function(t,e,n){return Zs(t)?Gs(void 0,t.useValue):Gs(function(t,e,n){let r;if(Qs(t)){const e=rt(t);return ne(e)||Ws(e)}if(Zs(t))r=()=>rt(t.useValue);else if((s=t)&&s.useFactory)r=()=>t.useFactory(...Zn(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>Gn(rt(t.useExisting));else{const e=rt(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return ne(e)||Ws(e);r=()=>new e(...Zn(t.deps))}var s;return r}(t),Ms)}(t);if(Qs(t)||!0!==t.multi)this.records.get(r);else{let e=this.records.get(r);e||(e=Gs(void 0,Ms,!0),e.factory=()=>Zn(e.multi),this.records.set(r,e)),r=t,e.multi.push(t)}this.records.set(r,s)}hydrate(t,e){var n;return e.value===Ms&&(e.value=Fs,e.value=e.factory()),"object"==typeof e.value&&e.value&&null!==(n=e.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(e.value),e.value}injectableDefInScope(t){return!!t.providedIn&&("string"==typeof t.providedIn?"any"===t.providedIn||t.providedIn===this.scope:this.injectorDefTypes.has(t.providedIn))}}function Ws(t){const e=ct(t),n=null!==e?e.factory:ne(t);if(null!==n)return n;if(t instanceof jn)throw new Error(`Token ${X(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const n=function(t,e){const n=[];for(let r=0;r<t;r++)n.push("?");return n}(e);throw new Error(`Can't resolve all parameters for ${X(t)}: (${n.join(", ")}).`)}const n=function(t){const e=t&&(t[ft]||t[gt]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function Gs(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Zs(t){return null!==t&&"object"==typeof t&&qn in t}function Qs(t){return"function"==typeof t}const Ks=function(t,e,n){return function(t,e=null,n=null,r){const s=zs(t,e,n,r);return s._resolveInjectorDefTypes(),s}({name:n},e,t,n)};let Ys=(()=>{class t{static create(t,e){return Array.isArray(t)?Ks(t,e,""):Ks(t.providers,t.parent,t.name||"")}}return t.THROW_IF_NOT_FOUND=Fn,t.NULL=new Ls,t.\u0275prov=lt({token:t,providedIn:"any",factory:()=>Gn(Ds)}),t.__NG_ELEMENT_ID__=-1,t})();function Js(t,e){Ze(me(t)[1],Te())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Xs=null;function ti(){if(!Xs){const t=At.Symbol;if(t&&t.iterator)Xs=t.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<t.length;++e){const n=t[e];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(Xs=n)}}}return Xs}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ei(t){return!!ni(t)&&(Array.isArray(t)||!(t instanceof Map)&&ti()in t)}function ni(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ri(t,e,n){return!Object.is(t[e],n)&&(t[e]=n,!0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function si(t,e,n,r){const s=xe();return ri(s,Pe(),e)&&(Ee(),function(t,e,n,r,s,i){const o=fe(t,e);!function(t,e,n,r,s,i,o){if(null==i)ce(t)?t.removeAttribute(e,s,n):e.removeAttribute(s);else{const a=null==o?it(i):o(i,r||"",s);ce(t)?t.setAttribute(e,s,a,n):n?e.setAttributeNS(n,s,a):e.setAttribute(s,a)}}(e[11],o,i,t.value,n,r,s)}(Ge(),s,t,e,n,r)),si}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ii(t,e,n,r,s,i,o,a){const l=xe(),u=Ee(),c=t+Zt,h=u.firstCreatePass?
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n,r,s,i,o,a,l){const u=e.consts,c=Jr(e,t,4,o||null,_e(u,a));hs(e,n,c,_e(u,l)),Ze(e,c);const h=c.tViews=as(2,c,r,s,i,e.directiveRegistry,e.pipeRegistry,null,e.schemas,u);return null!==e.queries&&(e.queries.template(e,c),h.queries=e.queries.embeddedTView(c)),c}(c,u,l,e,n,r,s,i,o):u.data[c];Ae(h,!1);const d=l[11].createComment("");kr(u,l,d,h),lr(d,l),Es(l,l[c]=bs(d,l,d,h)),te(h)&&ss(u,l,h),null!=o&&is(l,h,a)}
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
function oi(t,e=vt.Default){const n=xe();return null===n?Gn(t,e):bn(Te(),n,rt(t),e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ai(t,e,n){const r=xe();return ri(r,Pe(),e)&&cs(Ee(),Ge(),r,t,e,r[11],n,!1),ai}function li(t,e,n,r,s){const i=s?"class":"style";Ns(t,n,e.inputs[i],i,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ui(t,e,n,r){const s=xe(),i=Ee(),o=Zt+t,a=s[11],l=s[o]=yr(a,e,Se.lFrame.currentNamespace),u=i.firstCreatePass?function(t,e,n,r,s,i,o){const a=e.consts,l=Jr(e,t,2,s,_e(a,i));return hs(e,n,l,_e(a,o)),null!==l.attrs&&Us(l,l.attrs,!1),null!==l.mergedAttrs&&Us(l,l.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,l),l}(o,i,s,0,e,n,r):i.data[o];Ae(u,!0);const c=u.mergedAttrs;null!==c&&nn(a,l,c);const h=u.classes;null!==h&&Ur(a,l,h);const d=u.styles;null!==d&&Nr(a,l,d),64!=(64&u.flags)&&kr(i,s,l,u),0===Se.lFrame.elementDepthCount&&lr(l,s),Se.lFrame.elementDepthCount++,te(u)&&(ss(i,s,u),function(t,e,n){if(Jt(e)){const r=e.directiveEnd;for(let s=e.directiveStart;s<r;s++){const e=t.data[s];e.contentQueries&&e.contentQueries(1,n[s],s)}}}(i,u,s)),null!==r&&is(s,u)}function ci(){let t=Te();Re()?Se.lFrame.isParent=!1:(t=t.parent,Ae(t,!1));const e=t;Se.lFrame.elementDepthCount--;const n=Ee();n.firstCreatePass&&(Ze(n,t),Jt(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&li(n,e,xe(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e)&&li(n,e,xe(),e.stylesWithoutHost,!1)}function hi(t,e,n,r){ui(t,e,n,r),ci()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function di(t){return!!t&&"function"==typeof t.then}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function fi(t,e,n=!1,r){const s=xe(),i=Ee(),o=Te();return function(t,e,n,r,s,i,o=!1,a){const l=te(r),u=t.firstCreatePass&&Ps(t),c=Os(e);let h=!0;if(3&r.type){const d=fe(r,e),f=a?a(d):Rt,p=f.target||d,g=c.length,m=a?t=>a(de(t[r.index])).target:r.index;if(ce(n)){let o=null;if(!a&&l&&(o=function(t,e,n,r){const s=t.cleanup;if(null!=s)for(let i=0;i<s.length-1;i+=2){const t=s[i];if(t===n&&s[i+1]===r){const t=e[7],n=s[i+2];return t.length>n?t[n]:null}"string"==typeof t&&(i+=2)}return null}(t,e,s,r.index)),null!==o)(o.__ngLastListenerFn__||o).__ngNextListenerFn__=i,o.__ngLastListenerFn__=i,h=!1;else{i=gi(r,e,0,i,!1);const t=n.listen(f.name||p,s,i);c.push(i,t),u&&u.push(s,m,g,g+1)}}else i=gi(r,e,0,i,!0),p.addEventListener(s,i,o),c.push(i),u&&u.push(s,m,g,o)}else i=gi(r,e,0,i,!1);const d=r.outputs;let f;if(h&&null!==d&&(f=d[s])){const t=f.length;if(t)for(let n=0;n<t;n+=2){const t=e[f[n]][f[n+1]].subscribe(i),o=c.length;c.push(i,t),u&&u.push(s,r.index,o,-(o+1))}}}(i,s,s[11],o,t,e,n,r),fi}function pi(t,e,n,r){try{return!1!==n(r)}catch(s){return js(t,s),!1}}function gi(t,e,n,r,s){return function n(i){if(i===Function)return r;const o=2&t.flags?ge(t.index,e):e;0==(32&e[2])&&Ts(o);let a=pi(e,0,r,i),l=n.__ngNextListenerFn__;for(;l;)a=pi(e,0,l,i)&&a,l=l.__ngNextListenerFn__;return s&&!1===a&&(i.preventDefault(),i.returnValue=!1),a}}
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
function mi(t,e=""){const n=xe(),r=Ee(),s=t+Zt,i=r.firstCreatePass?Jr(r,s,1,e,null):r.data[s],o=n[s]=function(t,e){return ce(t)?t.createText(e):t.createTextNode(e)}(n[11],e);kr(r,n,o,i),Ae(i,!1)}
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
function vi(t,e,n){const r=xe();return ri(r,Pe(),e)&&cs(Ee(),Ge(),r,t,e,r[11],n,!0),vi}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const yi=void 0;var _i=["en",[["a","p"],["AM","PM"],yi],[["AM","PM"],yi,yi],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],yi,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],yi,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",yi,"{1} 'at' {0}",yi],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){let e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let wi={};function bi(t){return t in wi||(wi[t]=At.ng&&At.ng.common&&At.ng.common.locales&&At.ng.common.locales[t]),wi[t]}var Si=function(t){return t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData",t}({});const Ci="en-US";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let xi=Ci;function Ei(t){var e,n;n="Expected localeId to be defined",null==(e=t)&&function(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`)}(n,e),"string"==typeof t&&(xi=t.toLowerCase().replace(/_/g,"-"))}class Ti{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ki{resolveComponentFactory(t){throw function(t){const e=Error(`No component factory found for ${X(t)}. Did you add it to @NgModule.entryComponents?`);return e.ngComponent=t,e}(t)}}let Ai=(()=>{class t{}return t.NULL=new ki,t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ri(...t){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ii(t,e){return new Pi(fe(t,e))}const Oi=function(){return Ii(Te(),xe())};let Pi=(()=>{class t{constructor(t){this.nativeElement=t}}return t.__NG_ELEMENT_ID__=Oi,t})();function ji(t){return t instanceof Pi?t.nativeElement:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ni{}let Ui=(()=>{class t{}return t.__NG_ELEMENT_ID__=()=>Di(),t})();const Di=function(){const t=xe(),e=ge(Te().index,t);return function(t){return t[11]}(Kt(e)?e:t)};let Li=(()=>{class t{}return t.\u0275prov=lt({token:t,providedIn:"root",factory:()=>null}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Hi{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const Mi=new Hi("11.2.11");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Fi{constructor(){}supports(t){return ei(t)}create(t){return new $i(t)}}const Vi=(t,e)=>e;class $i{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Vi}forEachItem(t){let e;for(e=this._itHead;null!==e;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,n=this._removalsHead,r=0,s=null;for(;e||n;){const i=!n||e&&e.currentIndex<Wi(n,r,s)?e:n,o=Wi(i,r,s),a=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(e=e._next,null==i.previousIndex)r++;else{s||(s=[]);const t=o-r,e=a-r;if(t!=e){for(let n=0;n<t;n++){const r=n<s.length?s[n]:s[n]=0,i=r+n;e<=i&&i<t&&(s[n]=r+1)}s[i.previousIndex]=e-t}}o!==a&&t(i,o,a)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)t(e)}diff(t){if(null==t&&(t=[]),!ei(t))throw new Error(`Error trying to diff '${X(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e,n,r,s=this._itHead,i=!1;if(Array.isArray(t)){this.length=t.length;for(let e=0;e<this.length;e++)n=t[e],r=this._trackByFn(e,n),null!==s&&Object.is(s.trackById,r)?(i&&(s=this._verifyReinsertion(s,n,r,e)),Object.is(s.item,n)||this._addIdentityChange(s,n)):(s=this._mismatch(s,n,r,e),i=!0),s=s._next}else e=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[ti()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(t,t=>{r=this._trackByFn(e,t),null!==s&&Object.is(s.trackById,r)?(i&&(s=this._verifyReinsertion(s,t,r,e)),Object.is(s.item,t)||this._addIdentityChange(s,t)):(s=this._mismatch(s,t,r,e),i=!0),s=s._next,e++}),this.length=e;return this._truncate(s),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,n,r){let s;return null===t?s=this._itTail:(s=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,s,r)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,s,r)):t=this._addAfter(new qi(e,n),s,r),t}_verifyReinsertion(t,e,n,r){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==s?t=this._reinsertAfter(s,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const e=t._next;this._addToRemovals(this._unlink(t)),t=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,s=t._nextRemoved;return null===r?this._removalsHead=s:r._nextRemoved=s,null===s?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(t,e,n),this._addToMoves(t,n),t}_moveAfter(t,e,n){return this._unlink(t),this._insertAfter(t,e,n),this._addToMoves(t,n),t}_addAfter(t,e,n){return this._insertAfter(t,e,n),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,e,n){const r=null===e?this._itHead:e._next;return t._next=r,t._prev=e,null===r?this._itTail=t:r._prev=t,null===e?this._itHead=t:e._next=t,null===this._linkedRecords&&(this._linkedRecords=new Bi),this._linkedRecords.put(t),t.currentIndex=n,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const e=t._prev,n=t._next;return null===e?this._itHead=n:e._next=n,null===n?this._itTail=e:n._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Bi),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class qi{constructor(t,e){this.item=t,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class zi{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===e||e<=n.currentIndex)&&Object.is(n.trackById,t))return n;return null}remove(t){const e=t._prevDup,n=t._nextDup;return null===e?this._head=n:e._nextDup=n,null===n?this._tail=e:n._prevDup=e,null===this._head}}class Bi{constructor(){this.map=new Map}put(t){const e=t.trackById;let n=this.map.get(e);n||(n=new zi,this.map.set(e,n)),n.add(t)}get(t,e){const n=this.map.get(t);return n?n.get(t,e):null}remove(t){const e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Wi(t,e,n){const r=t.previousIndex;if(null===r)return r;let s=0;return n&&r<n.length&&(s=n[r]),r+e+s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Gi{constructor(){}supports(t){return t instanceof Map||ni(t)}create(){return new Zi}}class Zi{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let e;for(e=this._mapHead;null!==e;e=e._next)t(e)}forEachPreviousItem(t){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)t(e)}forEachChangedItem(t){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}diff(t){if(t){if(!(t instanceof Map||ni(t)))throw new Error(`Error trying to diff '${X(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(t,(t,n)=>{if(e&&e.key===n)this._maybeAddToChanges(e,t),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(n,t);e=this._insertBeforeOrAppend(e,r)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let t=e;null!==t;t=t._nextRemoved)t===this._mapHead&&(this._mapHead=null),this._records.delete(t.key),t._nextRemoved=t._next,t.previousValue=t.currentValue,t.currentValue=null,t._prev=null,t._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,e){if(t){const n=t._prev;return e._next=t,e._prev=n,t._prev=e,n&&(n._next=e),t===this._mapHead&&(this._mapHead=e),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(t,e){if(this._records.has(t)){const n=this._records.get(t);this._maybeAddToChanges(n,e);const r=n._prev,s=n._next;return r&&(r._next=s),s&&(s._prev=r),n._next=null,n._prev=null,n}const n=new Qi(t);return this._records.set(t,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,e){Object.is(e,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=e,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,e){t instanceof Map?t.forEach(e):Object.keys(t).forEach(n=>e(t[n],n))}}class Qi{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ki(){return new Yi([new Fi])}let Yi=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(null!=n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>t.create(e,n||Ki()),deps:[[t,new Jn,new Yn]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(null!=e)return e;throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}return t.\u0275prov=lt({token:t,providedIn:"root",factory:Ki}),t})();function Ji(){return new Xi([new Gi])}let Xi=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>t.create(e,n||Ji()),deps:[[t,new Jn,new Yn]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(e)return e;throw new Error(`Cannot find a differ supporting object '${t}'`)}}return t.\u0275prov=lt({token:t,providedIn:"root",factory:Ji}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function to(t,e,n,r,s=!1){for(;null!==n;){const i=e[n.index];if(null!==i&&r.push(de(i)),Yt(i))for(let t=Qt;t<i.length;t++){const e=i[t],n=e[1].firstChild;null!==n&&to(e[1],e,n,r)}const o=n.type;if(8&o)to(t,e,n.child,r);else if(32&o){const t=dr(n,e);let s;for(;s=t();)r.push(s)}else if(16&o){const t=Rr(e,n);if(Array.isArray(t))r.push(...t);else{const n=fr(e[16]);to(n[1],n,t,r,!0)}}n=s?n.projectionNext:n.next}return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class eo{constructor(t,e){this._lView=t,this._cdRefInjectingView=e,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,e=t[1];return to(e,t,e.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Yt(t)){const e=t[8],n=e?e.indexOf(this):-1;n>-1&&(wr(t,n),Mn(e,n))}this._attachedToViewContainer=!1}br(this._lView[1],this._lView)}onDestroy(t){ls(this._lView[1],this._lView,null,t)}markForCheck(){Ts(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){ks(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){Oe(!0);try{ks(t,e,n)}finally{Oe(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,Pr(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class no extends eo{constructor(t){super(t),this._view=t}detectChanges(){As(this._view)}checkNoChanges(){!function(t){Oe(!0);try{As(t)}finally{Oe(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ro=function(t=!1){return function(t,e,n){if(!n&&Xt(t)){const n=ge(t.index,e);return new eo(n,n)}return 47&t.type?new eo(e[16],e):null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(Te(),xe(),t)};let so=(()=>{class t{}return t.__NG_ELEMENT_ID__=ro,t.__ChangeDetectorRef__=!0,t})();const io=[new Gi],oo=new Yi([new Fi]),ao=new Xi(io),lo=function(){return fo(Te(),xe())};let uo=(()=>{class t{}return t.__NG_ELEMENT_ID__=lo,t})();const co=uo,ho=class extends co{constructor(t,e,n){super(),this._declarationLView=t,this._declarationTContainer=e,this.elementRef=n}createEmbeddedView(t){const e=this._declarationTContainer.tViews,n=Yr(this._declarationLView,e,t,16,null,e.declTNode,null,null,null,null);n[17]=this._declarationLView[this._declarationTContainer.index];const r=this._declarationLView[19];return null!==r&&(n[19]=r.createEmbeddedView(e)),ts(e,n,t),new eo(n)}};function fo(t,e){return 4&t.type?new ho(e,t,Ii(t,e)):null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class po{}class go{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const mo=function(){return So(Te(),xe())};let vo=(()=>{class t{}return t.__NG_ELEMENT_ID__=mo,t})();const yo=vo,_o=class extends yo{constructor(t,e,n){super(),this._lContainer=t,this._hostTNode=e,this._hostLView=n}get element(){return Ii(this._hostTNode,this._hostLView)}get injector(){return new Rn(this._hostTNode,this._hostLView)}get parentInjector(){const t=vn(this._hostTNode,this._hostLView);if(ln(t)){const e=cn(t,this._hostLView),n=un(t);return new Rn(e[1].data[n+8],e)}return new Rn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const e=wo(this._lContainer);return null!==e&&e[t]||null}get length(){return this._lContainer.length-Qt}createEmbeddedView(t,e,n){const r=t.createEmbeddedView(e||{});return this.insert(r,n),r}createComponent(t,e,n,r,s){const i=n||this.parentInjector;if(!s&&null==t.ngModule&&i){const t=i.get(po,null);t&&(s=t)}const o=t.create(i,r,void 0,s);return this.insert(o.hostView,e),o}insert(t,e){const n=t._lView,r=n[1];if(Yt(n[3])){const e=this.indexOf(t);if(-1!==e)this.detach(e);else{const e=n[3],r=new _o(e,e[6],e[3]);r.detach(r.indexOf(t))}}const s=this._adjustIndex(e),i=this._lContainer;!function(t,e,n,r){const s=Qt+r,i=n.length;r>0&&(n[s-1][4]=e),r<i-Qt?(e[4]=n[s],Hn(n,Qt+r,e)):(n.push(e),e[4]=null),e[3]=n;const o=e[17];null!==o&&n!==o&&function(t,e){const n=t[9];e[16]!==e[3][3][16]&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(o,e);const a=e[19];null!==a&&a.insertView(t),e[2]|=128}(r,n,i,s);const o=Ir(s,i),a=n[11],l=Tr(a,i[7]);return null!==l&&function(t,e,n,r,s,i){r[0]=s,r[6]=e,Pr(t,r,n,1,s,i)}(r,i[6],a,n,l,o),t.attachToViewContainerRef(),Hn(bo(i),s,t),t}move(t,e){return this.insert(t,e)}indexOf(t){const e=wo(this._lContainer);return null!==e?e.indexOf(t):-1}remove(t){const e=this._adjustIndex(t,-1),n=wr(this._lContainer,e);n&&(Mn(bo(this._lContainer),e),br(n[1],n))}detach(t){const e=this._adjustIndex(t,-1),n=wr(this._lContainer,e);return n&&null!=Mn(bo(this._lContainer),e)?new eo(n):null}_adjustIndex(t,e=0){return null==t?this.length+e:t}};function wo(t){return t[8]}function bo(t){return t[8]||(t[8]=[])}function So(t,e){let n;const r=e[t.index];if(Yt(r))n=r;else{let s;if(8&t.type)s=de(r);else{const n=e[11];s=n.createComment("");const r=fe(t,e);Cr(n,Tr(n,r),s,function(t,e){return ce(t)?t.nextSibling(e):e.nextSibling}(n,r),!1)}e[t.index]=n=bs(r,e,s,t),Es(e,n)}return new _o(n,t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Co={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class xo extends Ai{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const e=Wt(t);return new ko(e,this.ngModule)}}function Eo(t){const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push({propName:t[n],templateName:n});return e}const To=new jn("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>ur});class ko extends Ti{constructor(t,e){super(),this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=t.selectors.map(Wr).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return Eo(this.componentDef.inputs)}get outputs(){return Eo(this.componentDef.outputs)}create(t,e,n,r){const s=(r=r||this.ngModule)?function(t,e){return{get:(n,r,s)=>{const i=t.get(n,Co,s);return i!==Co||r===Co?i:e.get(n,r,s)}}}(t,r.injector):t,i=s.get(Ni,he),o=s.get(Li,null),a=i.createRenderer(null,this.componentDef),l=this.componentDef.selectors[0][0]||"div",u=n?function(t,e,n){if(ce(t))return t.selectRootElement(e,n===Ct.ShadowDom);let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(a,n,this.componentDef.encapsulation):yr(i.createRenderer(null,this.componentDef),l,function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(l)),c=this.componentDef.onPush?576:528,h={components:[],scheduler:ur,clean:Is,playerHandler:null,flags:0},d=as(0,null,null,1,0,null,null,null,null,null),f=Yr(null,d,h,c,null,null,i,a,o,s);let p,g;Me(f);try{const t=function(t,e,n,r,s,i){const o=n[1];n[20]=t;const a=Jr(o,20,2,"#host",null),l=a.mergedAttrs=e.hostAttrs;null!==l&&(Us(a,l,!0),null!==t&&(nn(s,t,l),null!==a.classes&&Ur(s,t,a.classes),null!==a.styles&&Nr(s,t,a.styles)));const u=r.createRenderer(t,e),c=Yr(n,os(e),null,e.onPush?64:16,n[20],a,r,u,null,null);return o.firstCreatePass&&(yn(pn(a,n),o,e.type),ps(o,a),ms(a,n.length,1)),Es(n,c),n[20]=c}(u,this.componentDef,f,i,a);if(u)if(n)nn(a,u,["ng-version",Mi.full]);else{const{attrs:t,classes:e}=function(t){const e=[],n=[];let r=1,s=2;for(;r<t.length;){let i=t[r];if("string"==typeof i)2===s?""!==i&&e.push(i,t[++r]):8===s&&n.push(i);else{if(!$r(s))break;s=i}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);t&&nn(a,u,t),e&&e.length>0&&Ur(a,u,e.join(" "))}if(g=pe(d,Zt),void 0!==e){const t=g.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=e[n];t.push(null!=r?Array.from(r):null)}}p=function(t,e,n,r,s){const i=n[1],o=function(t,e,n){const r=Te();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),vs(t,r,e,Xr(t,e,1,null),n));const s=Tn(e,t,r.directiveStart,r);lr(s,e);const i=fe(r,e);return i&&lr(i,e),s}(i,n,e);if(r.components.push(o),t[8]=o,s&&s.forEach(t=>t(o,e)),e.contentQueries){const t=Te();e.contentQueries(1,o,t.directiveStart)}const a=Te();return!i.firstCreatePass||null===e.hostBindings&&null===e.hostAttrs||(We(a.index),ds(n[1],a,0,a.directiveStart,a.directiveEnd,e),fs(e,o)),o}(t,this.componentDef,f,h,[Js]),ts(d,f,null)}finally{ze()}return new Ao(this.componentType,p,Ii(g,f),f,g)}}class Ao extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{}{constructor(t,e,n,r,s){super(),this.location=n,this._rootLView=r,this._tNode=s,this.instance=e,this.hostView=this.changeDetectorRef=new no(r),this.componentType=t}get injector(){return new Rn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
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
const Ro=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Io extends po{constructor(t,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new xo(this);const n=Gt(t),r=t[Ut]||null;r&&Ei(r),this._bootstrapComponents=cr(n.bootstrap),this._r3Injector=zs(t,e,[{provide:po,useValue:this},{provide:Ai,useValue:this.componentFactoryResolver}],X(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,e=Ys.THROW_IF_NOT_FOUND,n=vt.Default){return t===Ys||t===po||t===Ds?this:this._r3Injector.get(t,e,n)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Oo extends go{constructor(t){super(),this.moduleType=t,null!==Gt(t)&&function(t){const e=new Set;!function t(n){const r=Gt(n,!0),s=r.id;null!==s&&(function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${X(e)} vs ${X(e.name)}`)}(s,Ro.get(s),n),Ro.set(s,n));const i=cr(r.imports);for(const o of i)e.has(o)||(e.add(o),t(o))}(t)}(t)}create(t){return new Io(this.moduleType,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Po(t){return e=>{setTimeout(t,void 0,e)}}const jo=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends C{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,e,n){var r,s,i;let o=t,a=e||(()=>null),l=n;if(t&&"object"==typeof t){const e=t;o=null===(r=e.next)||void 0===r?void 0:r.bind(e),a=null===(s=e.error)||void 0===s?void 0:s.bind(e),l=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}this.__isAsync&&(a=Po(a),o&&(o=Po(o)),l&&(l=Po(l)));const u=super.subscribe({next:o,error:a,complete:l});return t instanceof h&&t.add(u),u}};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function No(){return this._results[ti()]()}class Uo{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const e=ti(),n=Uo.prototype;n[e]||(n[e]=No)}get changes(){return this._changes||(this._changes=new jo)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,e){return this._results.reduce(t,e)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,e){const n=this;n.dirty=!1;const r=Dn(t);(this._changesDetected=!function(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){let s=t[r],i=e[r];if(n&&(s=n(s),i=n(i)),i!==s)return!1}return!0}(n._results,r,e))&&(n._results=r,n.length=r.length,n.last=r[this.length-1],n.first=r[0])}notifyOnChanges(){!this._changes||!this._changesDetected&&this._emitDistinctChangesOnly||this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Do{constructor(t){this.queryList=t,this.matches=null}clone(){return new Do(this.queryList)}setDirty(){this.queryList.setDirty()}}class Lo{constructor(t=[]){this.queries=t}createEmbeddedView(t){const e=t.queries;if(null!==e){const n=null!==t.contentQueries?t.contentQueries[0]:e.length,r=[];for(let t=0;t<n;t++){const n=e.getByIndex(t);r.push(this.queries[n.indexInDeclarationView].clone())}return new Lo(r)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let e=0;e<this.queries.length;e++)null!==Zo(t,e).matches&&this.queries[e].setDirty()}}class Ho{constructor(t,e,n=null){this.predicate=t,this.flags=e,this.read=n}}class Mo{constructor(t=[]){this.queries=t}elementStart(t,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(t,e)}elementEnd(t){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(t)}embeddedTView(t){let e=null;for(let n=0;n<this.length;n++){const r=null!==e?e.length:0,s=this.getByIndex(n).embeddedTView(t,r);s&&(s.indexInDeclarationView=n,null!==e?e.push(s):e=[s])}return null!==e?new Mo(e):null}template(t,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(t,e)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Fo{constructor(t,e=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=e}elementStart(t,e){this.isApplyingToNode(e)&&this.matchTNode(t,e)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,e){this.elementStart(t,e)}embeddedTView(t,e){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,e),new Fo(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const e=this._declarationNodeIndex;let n=t.parent;for(;null!==n&&8&n.type&&n.index!==e;)n=n.parent;return e===(null!==n?n.index:-1)}return this._appliesToNextNode}matchTNode(t,e){const n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){const s=n[r];this.matchTNodeWithReadOption(t,e,Vo(e,s)),this.matchTNodeWithReadOption(t,e,En(e,t,s,!1,!1))}else n===uo?4&e.type&&this.matchTNodeWithReadOption(t,e,-1):this.matchTNodeWithReadOption(t,e,En(e,t,n,!1,!1))}matchTNodeWithReadOption(t,e,n){if(null!==n){const r=this.metadata.read;if(null!==r)if(r===Pi||r===vo||r===uo&&4&e.type)this.addMatch(e.index,-2);else{const n=En(e,t,r,!1,!1);null!==n&&this.addMatch(e.index,n)}else this.addMatch(e.index,n)}}addMatch(t,e){null===this.matches?this.matches=[t,e]:this.matches.push(t,e)}}function Vo(t,e){const n=t.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===e)return n[r+1];return null}function $o(t,e,n,r){return-1===n?function(t,e){return 11&t.type?Ii(t,e):4&t.type?fo(t,e):null}(e,t):-2===n?function(t,e,n){return n===Pi?Ii(e,t):n===uo?fo(e,t):n===vo?So(e,t):void 0}(t,e,r):Tn(t,t[1],n,e)}function qo(t,e,n,r){const s=e[19].queries[r];if(null===s.matches){const r=t.data,i=n.matches,o=[];for(let t=0;t<i.length;t+=2){const s=i[t];o.push(s<0?null:$o(e,r[s],i[t+1],n.metadata.read))}s.matches=o}return s.matches}function zo(t,e,n,r){const s=t.queries.getByIndex(n),i=s.matches;if(null!==i){const o=qo(t,e,s,n);for(let t=0;t<i.length;t+=2){const n=i[t];if(n>0)r.push(o[t/2]);else{const s=i[t+1],o=e[-n];for(let t=Qt;t<o.length;t++){const e=o[t];e[17]===e[3]&&zo(e[1],e,s,r)}if(null!==o[9]){const t=o[9];for(let e=0;e<t.length;e++){const n=t[e];zo(n[1],n,s,r)}}}}}return r}function Bo(t){const e=xe(),n=Ee(),r=Ue();De(r+1);const s=Zo(n,r);if(t.dirty&&ve(e)===(2==(2&s.metadata.flags))){if(null===s.matches)t.reset([]);else{const i=s.crossesNgTemplate?zo(n,e,r,[]):qo(n,e,s,r);t.reset(i,ji),t.notifyOnChanges()}return!0}return!1}function Wo(t,e,n,r){const s=Ee();if(s.firstCreatePass){const i=Te();(function(t,e,n){null===t.queries&&(t.queries=new Mo),t.queries.track(new Fo(e,n))})(s,new Ho(e,n,r),i.index),function(t,e){const n=t.contentQueries||(t.contentQueries=[]);e!==(n.length?n[n.length-1]:-1)&&n.push(t.queries.length-1,e)}(s,t),2==(2&n)&&(s.staticContentQueries=!0)}!function(t,e,n){const r=new Uo(4==(4&n));ls(t,e,r,r.destroy),null===e[19]&&(e[19]=new Lo),e[19].queries.push(new Do(r))}(s,xe(),n)}function Go(){return t=xe(),e=Ue(),t[19].queries[e].queryList;var t,e}function Zo(t,e){return t.queries.getByIndex(e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Qo=new jn("Application Initializer");let Ko=(()=>{class t{constructor(t){this.appInits=t,this.resolve=Ri,this.reject=Ri,this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}runInitializers(){if(this.initialized)return;const t=[],e=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const e=this.appInits[n]();di(e)&&t.push(e)}Promise.all(t).then(()=>{e()}).catch(t=>{this.reject(t)}),0===t.length&&e(),this.initialized=!0}}return t.\u0275fac=function(e){return new(e||t)(Gn(Qo,8))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Yo=new jn("AppId"),Jo={provide:Yo,useFactory:function(){return`${Xo()}${Xo()}${Xo()}`},deps:[]};function Xo(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const ta=new jn("Platform Initializer"),ea=new jn("Platform ID"),na=new jn("appBootstrapListener");let ra=(()=>{class t{log(t){console.log(t)}warn(t){console.warn(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const sa=new jn("LocaleId"),ia=new jn("DefaultCurrencyCode");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class oa{constructor(t,e){this.ngModuleFactory=t,this.componentFactories=e}}const aa=function(t){return new Oo(t)},la=aa,ua=function(t){return Promise.resolve(aa(t))},ca=function(t){const e=aa(t),n=cr(Gt(t).declarations).reduce((t,e)=>{const n=Wt(e);return n&&t.push(new ko(n)),t},[]);return new oa(e,n)},ha=ca,da=function(t){return Promise.resolve(ca(t))};let fa=(()=>{class t{constructor(){this.compileModuleSync=la,this.compileModuleAsync=ua,this.compileModuleAndAllComponentsSync=ha,this.compileModuleAndAllComponentsAsync=da}clearCache(){}clearCacheFor(t){}getModuleId(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();const pa=(()=>Promise.resolve(0))();function ga(t){"undefined"==typeof Zone?pa.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
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
class ma{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:e=!1,shouldCoalesceRunChangeDetection:n=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new jo(!1),this.onMicrotaskEmpty=new jo(!1),this.onStable=new jo(!1),this.onError=new jo(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!n&&e,r.shouldCoalesceRunChangeDetection=n,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=function(){let t=At.requestAnimationFrame,e=At.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=()=>{!function(t){-1===t.lastRequestAnimationFrameId&&(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(At,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,_a(t),ya(t)},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),_a(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,s,i,o,a)=>{try{return wa(t),n.invokeTask(s,i,o,a)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||t.shouldCoalesceRunChangeDetection)&&e(),ba(t)}},onInvoke:(n,r,s,i,o,a,l)=>{try{return wa(t),n.invoke(s,i,o,a,l)}finally{t.shouldCoalesceRunChangeDetection&&e(),ba(t)}},onHasTask:(e,n,r,s)=>{e.hasTask(r,s),n===r&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,_a(t),ya(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(e,n,r,s)=>(e.handleError(r,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(r)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ma.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(ma.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,e,n){return this._inner.run(t,e,n)}runTask(t,e,n,r){const s=this._inner,i=s.scheduleEventTask("NgZoneEvent: "+r,t,va,Ri,Ri);try{return s.runTask(i,e,n)}finally{s.cancelTask(i)}}runGuarded(t,e,n){return this._inner.runGuarded(t,e,n)}runOutsideAngular(t){return this._outer.run(t)}}const va={};function ya(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function _a(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId)}function wa(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function ba(t){t._nesting--,ya(t)}class Sa{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new jo,this.onMicrotaskEmpty=new jo,this.onStable=new jo,this.onError=new jo}run(t,e,n){return t.apply(e,n)}runGuarded(t,e,n){return t.apply(e,n)}runOutsideAngular(t){return t()}runTask(t,e,n,r){return t.apply(e,n)}}let Ca=(()=>{class t{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ma.assertNotInAngularZone(),ga(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())ga(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(e=>!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,e,n){let r=-1;e&&e>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(t=>t.timeoutId!==r),t(this._didWork,this.getPendingTasks())},e)),this._callbacks.push({doneCb:t,timeoutId:r,updateCb:n})}whenStable(t,e,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(t,e,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,e,n){return[]}}return t.\u0275fac=function(e){return new(e||t)(Gn(ma))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})(),xa=(()=>{class t{constructor(){this._applications=new Map,ka.addToWindow(this)}registerApplication(t,e){this._applications.set(t,e)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,e=!0){return ka.findTestabilityInTree(this,t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();class Ea{addToWindow(t){}findTestabilityInTree(t,e,n){return null}}let Ta,ka=new Ea,Aa=!0,Ra=!1;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ia=new jn("AllowMultipleToken");class Oa{constructor(t,e){this.name=t,this.token=e}}function Pa(t,e,n=[]){const r=`Platform: ${e}`,s=new jn(r);return(e=[])=>{let i=ja();if(!i||i.injector.get(Ia,!1))if(t)t(n.concat(e).concat({provide:s,useValue:!0}));else{const t=n.concat(e).concat({provide:s,useValue:!0},{provide:Hs,useValue:"platform"});!function(t){if(Ta&&!Ta.destroyed&&!Ta.injector.get(Ia,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Ta=t.get(Na);const e=t.get(ta,null);e&&e.forEach(t=>t())}(Ys.create({providers:t,name:r}))}return function(t){const e=ja();if(!e)throw new Error("No platform exists!");if(!e.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return e}(s)}}function ja(){return Ta&&!Ta.destroyed?Ta:null}let Na=(()=>{class t{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,e){const n=function(t,e){let n;return n="noop"===t?new Sa:("zone.js"===t?void 0:t)||new ma({enableLongStackTrace:(Ra=!0,Aa),shouldCoalesceEventChangeDetection:!!(null==e?void 0:e.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==e?void 0:e.ngZoneRunCoalescing)}),n}(e?e.ngZone:void 0,{ngZoneEventCoalescing:e&&e.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:e&&e.ngZoneRunCoalescing||!1}),r=[{provide:ma,useValue:n}];return n.run(()=>{const e=Ys.create({providers:r,parent:this.injector,name:t.moduleType.name}),s=t.create(e),i=s.injector.get(ar,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return n.runOutsideAngular(()=>{const t=n.onError.subscribe({next:t=>{i.handleError(t)}});s.onDestroy(()=>{La(this._modules,s),t.unsubscribe()})}),function(t,e,n){try{const r=n();return di(r)?r.catch(n=>{throw e.runOutsideAngular(()=>t.handleError(n)),n}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}(i,n,()=>{const t=s.injector.get(Ko);return t.runInitializers(),t.donePromise.then(()=>(Ei(s.injector.get(sa,Ci)||Ci),this._moduleDoBootstrap(s),s))})})}bootstrapModule(t,e=[]){const n=Ua({},e);return function(t,e,n){const r=new Oo(n);return Promise.resolve(r)}(0,0,t).then(t=>this.bootstrapModuleFactory(t,n))}_moduleDoBootstrap(t){const e=t.injector.get(Da);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(t=>e.bootstrap(t));else{if(!t.instance.ngDoBootstrap)throw new Error(`The module ${X(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);t.instance.ngDoBootstrap(e)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(t=>t.destroy()),this._destroyListeners.forEach(t=>t()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(e){return new(e||t)(Gn(Ys))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();function Ua(t,e){return Array.isArray(e)?e.reduce(Ua,t):Object.assign(Object.assign({},t),e)}let Da=(()=>{class t{constructor(t,e,n,r,s){this._zone=t,this._injector=e,this._exceptionHandler=n,this._componentFactoryResolver=r,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new y(t=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{t.next(this._stable),t.complete()})}),o=new y(t=>{let e;this._zone.runOutsideAngular(()=>{e=this._zone.onStable.subscribe(()=>{ma.assertNotInAngularZone(),ga(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,t.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{ma.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{t.next(!1)}))});return()=>{e.unsubscribe(),n.unsubscribe()}});this.isStable=function(...t){let e=Number.POSITIVE_INFINITY,n=null,r=t[t.length-1];return E(r)?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop()),null===n&&1===t.length&&t[0]instanceof y?t[0]:q(e)(z(t,n))}(i,o.pipe(t=>{return B()((e=Y,function(t){let n;n="function"==typeof e?e:function(){return e};const r=Object.create(t,Q);return r.source=t,r.subjectFactory=n,r})(t));var e}))}bootstrap(t,e){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=t instanceof Ti?t:this._componentFactoryResolver.resolveComponentFactory(t),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(po),s=n.create(Ys.NULL,[],e||n.selector,r),i=s.location.nativeElement,o=s.injector.get(Ca,null),a=o&&s.injector.get(xa);return o&&a&&a.registerApplication(i,o),s.onDestroy(()=>{this.detachView(s.hostView),La(this.components,s),a&&a.unregisterApplication(i)}),this._loadComponent(s),s}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let t of this._views)t.detectChanges()}catch(t){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))}finally{this._runningTick=!1}}attachView(t){const e=t;this._views.push(e),e.attachToAppRef(this)}detachView(t){const e=t;La(this._views,e),e.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(na,[]).concat(this._bootstrapListeners).forEach(e=>e(t))}ngOnDestroy(){this._views.slice().forEach(t=>t.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return t.\u0275fac=function(e){return new(e||t)(Gn(ma),Gn(Ys),Gn(ar),Gn(Ai),Gn(Ko))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();function La(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}
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
class Ha{}class Ma{}const Fa={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let Va=(()=>{class t{constructor(t,e){this._compiler=t,this._config=e||Fa}load(t){return this.loadAndCompile(t)}loadAndCompile(t){let[e,r]=t.split("#");return void 0===r&&(r="default"),n("zn8P")(e).then(t=>t[r]).then(t=>$a(t,e,r)).then(t=>this._compiler.compileModuleAsync(t))}loadFactory(t){let[e,r]=t.split("#"),s="NgFactory";return void 0===r&&(r="default",s=""),n("zn8P")(this._config.factoryPathPrefix+e+this._config.factoryPathSuffix).then(t=>t[r+s]).then(t=>$a(t,e,r))}}return t.\u0275fac=function(e){return new(e||t)(Gn(fa),Gn(Ma,8))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();function $a(t,e,n){if(!t)throw new Error(`Cannot find '${n}' in '${e}'`);return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const qa=Pa(null,"core",[{provide:ea,useValue:"unknown"},{provide:Na,deps:[Ys]},{provide:xa,deps:[]},{provide:ra,deps:[]}]),za=[{provide:Da,useClass:Da,deps:[ma,Ys,ar,Ai,Ko]},{provide:To,deps:[ma],useFactory:function(t){let e=[];return t.onStable.subscribe(()=>{for(;e.length;)e.pop()()}),function(t){e.push(t)}}},{provide:Ko,useClass:Ko,deps:[[new Yn,Qo]]},{provide:fa,useClass:fa,deps:[]},Jo,{provide:Yi,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return oo},deps:[]},{provide:Xi,useFactory:function(){return ao},deps:[]},{provide:sa,useFactory:function(t){return Ei(t=t||"undefined"!=typeof $localize&&$localize.locale||Ci),t},deps:[[new Kn(sa),new Yn,new Jn]]},{provide:ia,useValue:"USD"}];let Ba=(()=>{class t{constructor(t){}}return t.\u0275fac=function(e){return new(e||t)(Gn(Da))},t.\u0275mod=qt({type:t}),t.\u0275inj=ut({providers:za}),t})(),Wa=null;function Ga(){return Wa}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Za=new jn("DocumentToken");let Qa=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=lt({factory:Ka,token:t,providedIn:"platform"}),t})();function Ka(){return Gn(Ja)}const Ya=new jn("Location Initialized");let Ja=(()=>{class t extends Qa{constructor(t){super(),this._doc=t,this._init()}_init(){this.location=Ga().getLocation(),this._history=Ga().getHistory()}getBaseHrefFromDOM(){return Ga().getBaseHref(this._doc)}onPopState(t){Ga().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",t,!1)}onHashChange(t){Ga().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",t,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(t){this.location.pathname=t}pushState(t,e,n){Xa()?this._history.pushState(t,e,n):this.location.hash=n}replaceState(t,e,n){Xa()?this._history.replaceState(t,e,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}return t.\u0275fac=function(e){return new(e||t)(Gn(Za))},t.\u0275prov=lt({factory:tl,token:t,providedIn:"platform"}),t})();function Xa(){return!!window.history.pushState}function tl(){return new Ja(Gn(Za))}
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
 */function el(t,e){if(0==t.length)return e;if(0==e.length)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,2==n?t+e.substring(1):1==n?t+e:t+"/"+e}function nl(t){const e=t.match(/#|\?|$/),n=e&&e.index||t.length;return t.slice(0,n-("/"===t[n-1]?1:0))+t.slice(n)}function rl(t){return t&&"?"!==t[0]?"?"+t:t}let sl=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=lt({factory:il,token:t,providedIn:"root"}),t})();function il(t){const e=Gn(Za).location;return new al(Gn(Qa),e&&e.origin||"")}const ol=new jn("appBaseHref");let al=(()=>{class t extends sl{constructor(t,e){if(super(),this._platformLocation=t,null==e&&(e=this._platformLocation.getBaseHrefFromDOM()),null==e)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=e}onPopState(t){this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t)}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return el(this._baseHref,t)}path(t=!1){const e=this._platformLocation.pathname+rl(this._platformLocation.search),n=this._platformLocation.hash;return n&&t?`${e}${n}`:e}pushState(t,e,n,r){const s=this.prepareExternalUrl(n+rl(r));this._platformLocation.pushState(t,e,s)}replaceState(t,e,n,r){const s=this.prepareExternalUrl(n+rl(r));this._platformLocation.replaceState(t,e,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return t.\u0275fac=function(e){return new(e||t)(Gn(Qa),Gn(ol,8))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})(),ll=(()=>{class t extends sl{constructor(t,e){super(),this._platformLocation=t,this._baseHref="",null!=e&&(this._baseHref=e)}onPopState(t){this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t)}getBaseHref(){return this._baseHref}path(t=!1){let e=this._platformLocation.hash;return null==e&&(e="#"),e.length>0?e.substring(1):e}prepareExternalUrl(t){const e=el(this._baseHref,t);return e.length>0?"#"+e:e}pushState(t,e,n,r){let s=this.prepareExternalUrl(n+rl(r));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(t,e,s)}replaceState(t,e,n,r){let s=this.prepareExternalUrl(n+rl(r));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(t,e,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return t.\u0275fac=function(e){return new(e||t)(Gn(Qa),Gn(ol,8))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})(),ul=(()=>{class t{constructor(t,e){this._subject=new jo,this._urlChangeListeners=[],this._platformStrategy=t;const n=this._platformStrategy.getBaseHref();this._platformLocation=e,this._baseHref=nl(hl(n)),this._platformStrategy.onPopState(t=>{this._subject.emit({url:this.path(!0),pop:!0,state:t.state,type:t.type})})}path(t=!1){return this.normalize(this._platformStrategy.path(t))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(t,e=""){return this.path()==this.normalize(t+rl(e))}normalize(e){return t.stripTrailingSlash(function(t,e){return t&&e.startsWith(t)?e.substring(t.length):e}(this._baseHref,hl(e)))}prepareExternalUrl(t){return t&&"/"!==t[0]&&(t="/"+t),this._platformStrategy.prepareExternalUrl(t)}go(t,e="",n=null){this._platformStrategy.pushState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+rl(e)),n)}replaceState(t,e="",n=null){this._platformStrategy.replaceState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+rl(e)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(t){this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}))}_notifyUrlChangeListeners(t="",e){this._urlChangeListeners.forEach(n=>n(t,e))}subscribe(t,e,n){return this._subject.subscribe({next:t,error:e,complete:n})}}return t.\u0275fac=function(e){return new(e||t)(Gn(sl),Gn(Qa))},t.normalizeQueryParams=rl,t.joinWithSlash=el,t.stripTrailingSlash=nl,t.\u0275prov=lt({factory:cl,token:t,providedIn:"root"}),t})();function cl(){return new ul(Gn(sl),Gn(Qa))}function hl(t){return t.replace(/\/index.html$/,"")}
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
var dl=function(t){return t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class fl{}let pl=(()=>{class t extends fl{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(function(t){return function(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);let n=bi(e);if(n)return n;const r=e.split("-")[0];if(n=bi(r),n)return n;if("en"===r)return _i;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[Si.PluralCase]}(e||this.locale)(t)){case dl.Zero:return"zero";case dl.One:return"one";case dl.Two:return"two";case dl.Few:return"few";case dl.Many:return"many";default:return"other"}}}return t.\u0275fac=function(e){return new(e||t)(Gn(sa))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})(),gl=(()=>{class t{constructor(t,e){this._viewContainer=t,this._context=new ml,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=e}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){vl("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){vl("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,e){return!0}}return t.\u0275fac=function(e){return new(e||t)(oi(vo),oi(uo))},t.\u0275dir=Bt({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ml{constructor(){this.$implicit=null,this.ngIf=null}}function vl(t,e){if(e&&!e.createEmbeddedView)throw new Error(`${t} must be a TemplateRef, but received '${X(e)}'.`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let yl=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=qt({type:t}),t.\u0275inj=ut({providers:[{provide:fl,useClass:pl}]}),t})(),_l=(()=>{class t{}return t.\u0275prov=lt({token:t,providedIn:"root",factory:()=>new wl(Gn(Za),window)}),t})();class wl{constructor(t,e){this.document=t,this.window=e,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const e=function(t,e){const n=t.getElementById(e)||t.getElementsByName(e)[0];if(n)return n;if("function"==typeof t.createTreeWalker&&t.body&&(t.body.createShadowRoot||t.body.attachShadow)){const n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);let r=n.currentNode;for(;r;){const t=r.shadowRoot;if(t){const n=t.getElementById(e)||t.querySelector(`[name="${e}"]`);if(n)return n}r=n.nextNode()}}return null}(this.document,t);e&&(this.scrollToElement(e),this.attemptFocus(e))}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=t)}}scrollToElement(t){const e=t.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}attemptFocus(t){return t.focus(),this.document.activeElement===t}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=bl(this.window.history)||bl(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch(t){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(t){return!1}}}function bl(t){return Object.getOwnPropertyDescriptor(t,"scrollRestoration")}class Sl extends
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
 */{static makeCurrent(){var t;t=new Sl,Wa||(Wa=t)}getProperty(t,e){return t[e]}log(t){window.console&&window.console.log&&window.console.log(t)}logGroup(t){window.console&&window.console.group&&window.console.group(t)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(t,e,n){return t.addEventListener(e,n,!1),()=>{t.removeEventListener(e,n,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){return t.parentNode&&t.parentNode.removeChild(t),t}getValue(t){return t.value}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(t){const e=xl||(xl=document.querySelector("base"),xl)?xl.getAttribute("href"):null;return null==e?null:(n=e,Cl||(Cl=document.createElement("a")),Cl.setAttribute("href",n),"/"===Cl.pathname.charAt(0)?Cl.pathname:"/"+Cl.pathname);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}resetBaseElement(){xl=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const t=n.indexOf("="),[r,s]=-1==t?[n,""]:[n.slice(0,t),n.slice(t+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}(document.cookie,t)}}let Cl,xl=null;const El=new jn("TRANSITION_ID"),Tl=[{provide:Qo,useFactory:function(t,e,n){return()=>{n.get(Ko).donePromise.then(()=>{const n=Ga();Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition")===t).forEach(t=>n.remove(t))})}},deps:[El,Za,Ys],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class kl{static init(){var t;t=new kl,ka=t}addToWindow(t){At.getAngularTestability=(e,n=!0)=>{const r=t.findTestabilityInTree(e,n);if(null==r)throw new Error("Could not find testability for element.");return r},At.getAllAngularTestabilities=()=>t.getAllTestabilities(),At.getAllAngularRootElements=()=>t.getAllRootElements(),At.frameworkStabilizers||(At.frameworkStabilizers=[]),At.frameworkStabilizers.push(t=>{const e=At.getAllAngularTestabilities();let n=e.length,r=!1;const s=function(e){r=r||e,n--,0==n&&t(r)};e.forEach(function(t){t.whenStable(s)})})}findTestabilityInTree(t,e,n){if(null==e)return null;const r=t.getTestability(e);return null!=r?r:n?Ga().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Al=new jn("EventManagerPlugins");let Rl=(()=>{class t{constructor(t,e){this._zone=e,this._eventNameToPlugin=new Map,t.forEach(t=>t.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,e,n){return this._findPluginFor(e).addEventListener(t,e,n)}addGlobalEventListener(t,e,n){return this._findPluginFor(e).addGlobalEventListener(t,e,n)}getZone(){return this._zone}_findPluginFor(t){const e=this._eventNameToPlugin.get(t);if(e)return e;const n=this._plugins;for(let r=0;r<n.length;r++){const e=n[r];if(e.supports(t))return this._eventNameToPlugin.set(t,e),e}throw new Error(`No event manager plugin found for event ${t}`)}}return t.\u0275fac=function(e){return new(e||t)(Gn(Al),Gn(ma))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();class Il{constructor(t){this._doc=t}addGlobalEventListener(t,e,n){const r=Ga().getGlobalEventTarget(this._doc,t);if(!r)throw new Error(`Unsupported event target ${r} for event ${e}`);return this.addEventListener(r,e,n)}}let Ol=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(t){const e=new Set;t.forEach(t=>{this._stylesSet.has(t)||(this._stylesSet.add(t),e.add(t))}),this.onStylesAdded(e)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})(),Pl=(()=>{class t extends Ol{constructor(t){super(),this._doc=t,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(t.head)}_addStylesToHost(t,e){t.forEach(t=>{const n=this._doc.createElement("style");n.textContent=t,this._styleNodes.add(e.appendChild(n))})}addHost(t){this._addStylesToHost(this._stylesSet,t),this._hostNodes.add(t)}removeHost(t){this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach(e=>this._addStylesToHost(t,e))}ngOnDestroy(){this._styleNodes.forEach(t=>Ga().remove(t))}}return t.\u0275fac=function(e){return new(e||t)(Gn(Za))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const jl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Nl=/%COMP%/g;function Ul(t,e,n){for(let r=0;r<e.length;r++){let s=e[r];Array.isArray(s)?Ul(t,s,n):(s=s.replace(Nl,t),n.push(s))}return n}function Dl(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let Ll=(()=>{class t{constructor(t,e,n){this.eventManager=t,this.sharedStylesHost=e,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new Hl(t)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;switch(e.encapsulation){case Ct.Emulated:{let n=this.rendererByCompId.get(e.id);return n||(n=new Ml(this.eventManager,this.sharedStylesHost,e,this.appId),this.rendererByCompId.set(e.id,n)),n.applyToHost(t),n}case 1:case Ct.ShadowDom:return new Fl(this.eventManager,this.sharedStylesHost,t,e);default:if(!this.rendererByCompId.has(e.id)){const t=Ul(e.id,e.styles,[]);this.sharedStylesHost.addStyles(t),this.rendererByCompId.set(e.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(Gn(Rl),Gn(Pl),Gn(Yo))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();class Hl{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(jl[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,n){t&&t.insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error(`The selector "${t}" did not match any elements`);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;const s=jl[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){const r=jl[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(hr.DashCase|hr.Important)?t.style.setProperty(e,n,r&hr.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&hr.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t[e]=n}setValue(t,e){t.nodeValue=e}listen(t,e,n){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,Dl(n)):this.eventManager.addEventListener(t,e,Dl(n))}}class Ml extends Hl{constructor(t,e,n,r){super(t),this.component=n;const s=Ul(r+"-"+n.id,n.styles,[]);e.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(Nl,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(Nl,r+"-"+n.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}}class Fl extends Hl{constructor(t,e,n,r){super(t),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=Ul(r.id,r.styles,[]);for(let i=0;i<s.length;i++){const t=document.createElement("style");t.textContent=s[i],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let Vl=(()=>{class t extends Il{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,n){return t.addEventListener(e,n,!1),()=>this.removeEventListener(t,e,n)}removeEventListener(t,e,n){return t.removeEventListener(e,n)}}return t.\u0275fac=function(e){return new(e||t)(Gn(Za))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const $l=["alt","control","meta","shift"],ql={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},zl={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},Bl={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let Wl=(()=>{class t extends Il{constructor(t){super(t)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,r){const s=t.parseEventName(n),i=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ga().onAndCancel(e,s.domEventName,i))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=t._normalizeKey(n.pop());let i="";if($l.forEach(t=>{const e=n.indexOf(t);e>-1&&(n.splice(e,1),i+=t+".")}),i+=s,0!=n.length||0===s.length)return null;const o={};return o.domEventName=r,o.fullKey=i,o}static getEventFullKey(t){let e="",n=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&zl.hasOwnProperty(e)&&(e=zl[e]))}return ql[e]||e}(t);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),$l.forEach(r=>{r!=n&&(0,Bl[r])(t)&&(e+=r+".")}),e+=n,e}static eventCallback(e,n,r){return s=>{t.getEventFullKey(s)===e&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}}return t.\u0275fac=function(e){return new(e||t)(Gn(Za))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();const Gl=Pa(qa,"browser",[{provide:ea,useValue:"browser"},{provide:ta,useValue:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){Sl.makeCurrent(),kl.init()},multi:!0},{provide:Za,useFactory:function(){return function(t){ue=t}(document),document},deps:[]}]),Zl=[[],{provide:Hs,useValue:"root"},{provide:ar,useFactory:function(){return new ar},deps:[]},{provide:Al,useClass:Vl,multi:!0,deps:[Za,ma,ea]},{provide:Al,useClass:Wl,multi:!0,deps:[Za]},[],{provide:Ll,useClass:Ll,deps:[Rl,Pl,Yo]},{provide:Ni,useExisting:Ll},{provide:Ol,useExisting:Pl},{provide:Pl,useClass:Pl,deps:[Za]},{provide:Ca,useClass:Ca,deps:[ma]},{provide:Rl,useClass:Rl,deps:[Al,ma]},[]];let Ql=(()=>{class t{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:Yo,useValue:e.appId},{provide:El,useExisting:Yo},Tl]}}}return t.\u0275fac=function(e){return new(e||t)(Gn(t,12))},t.\u0275mod=qt({type:t}),t.\u0275inj=ut({providers:Zl,imports:[yl,Ba]}),t})();
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
function Kl(...t){let e=t[t.length-1];return E(e)?(t.pop(),U(t,e)):z(t)}"undefined"!=typeof window&&window;class Yl extends C{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const e=super._subscribe(t);return e&&!e.closed&&t.next(this._value),e}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new w;return this._value}next(t){super.next(this._value=t)}}class Jl extends p{notifyNext(t,e,n,r,s){this.destination.next(e)}notifyError(t,e){this.destination.error(t)}notifyComplete(t){this.destination.complete()}}class Xl extends p{constructor(t,e,n){super(),this.parent=t,this.outerValue=e,this.outerIndex=n,this.index=0}_next(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)}_error(t){this.parent.notifyError(t,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}function tu(t,e,n,r,s=new Xl(t,n,r)){if(!s.closed)return e instanceof y?e.subscribe(s):N(e)(s)}const eu={};class nu{constructor(t){this.resultSelector=t}call(t,e){return e.subscribe(new ru(t,this.resultSelector))}}class ru extends Jl{constructor(t,e){super(t),this.resultSelector=e,this.active=0,this.values=[],this.observables=[]}_next(t){this.values.push(eu),this.observables.push(t)}_complete(){const t=this.observables,e=t.length;if(0===e)this.destination.complete();else{this.active=e,this.toRespond=e;for(let n=0;n<e;n++)this.add(tu(this,t[n],void 0,n))}}notifyComplete(t){0==(this.active-=1)&&this.destination.complete()}notifyNext(t,e,n){const r=this.values,s=this.toRespond?r[n]===eu?--this.toRespond:this.toRespond:0;r[n]=e,0===s&&(this.resultSelector?this._tryResultSelector(r):this.destination.next(r.slice()))}_tryResultSelector(t){let e;try{e=this.resultSelector.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}const su=(()=>{function t(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return t.prototype=Object.create(Error.prototype),t})();function iu(...t){return q(1)(Kl(...t))}const ou=new y(t=>t.complete());function au(t){return t?function(t){return new y(e=>t.schedule(()=>e.complete()))}(t):ou}function lu(t){return new y(e=>{let n;try{n=t()}catch(r){return void e.error(r)}return(n?D(n):au()).subscribe(e)})}function uu(t,e){return"function"==typeof e?n=>n.pipe(uu((n,r)=>D(t(n,r)).pipe(T((t,s)=>e(n,t,r,s))))):e=>e.lift(new cu(t))}class cu{constructor(t){this.project=t}call(t,e){return e.subscribe(new hu(t,this.project))}}class hu extends H{constructor(t,e){super(t),this.project=e,this.index=0}_next(t){let e;const n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this._innerSub(e)}_innerSub(t){const e=this.innerSubscription;e&&e.unsubscribe();const n=new L(this),r=this.destination;r.add(n),this.innerSubscription=M(t,n),this.innerSubscription!==n&&r.add(this.innerSubscription)}_complete(){const{innerSubscription:t}=this;t&&!t.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=void 0}notifyComplete(){this.innerSubscription=void 0,this.isStopped&&super._complete()}notifyNext(t){this.destination.next(t)}}const du=(()=>{function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t})();function fu(t){return e=>0===t?au():e.lift(new pu(t))}class pu{constructor(t){if(this.total=t,this.total<0)throw new du}call(t,e){return e.subscribe(new gu(t,this.total))}}class gu extends p{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){const e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))}}function mu(t,e){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new vu(t,e,n))}}class vu{constructor(t,e,n=!1){this.accumulator=t,this.seed=e,this.hasSeed=n}call(t,e){return e.subscribe(new yu(t,this.accumulator,this.seed,this.hasSeed))}}class yu extends p{constructor(t,e,n,r){super(t),this.accumulator=e,this._seed=n,this.hasSeed=r,this.index=0}get seed(){return this._seed}set seed(t){this.hasSeed=!0,this._seed=t}_next(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)}_tryNext(t){const e=this.index++;let n;try{n=this.accumulator(this.seed,t,e)}catch(r){this.destination.error(r)}this.seed=n,this.destination.next(n)}}function _u(t,e){return function(n){return n.lift(new wu(t,e))}}class wu{constructor(t,e){this.predicate=t,this.thisArg=e}call(t,e){return e.subscribe(new bu(t,this.predicate,this.thisArg))}}class bu extends p{constructor(t,e,n){super(t),this.predicate=e,this.thisArg=n,this.count=0}_next(t){let e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}e&&this.destination.next(t)}}function Su(t){return function(e){const n=new Cu(t),r=e.lift(n);return n.caught=r}}class Cu{constructor(t){this.selector=t}call(t,e){return e.subscribe(new xu(t,this.selector,this.caught))}}class xu extends H{constructor(t,e,n){super(t),this.selector=e,this.caught=n}error(t){if(!this.isStopped){let n;try{n=this.selector(t,this.caught)}catch(e){return void super.error(e)}this._unsubscribeAndRecycle();const r=new L(this);this.add(r);const s=M(n,r);s!==r&&this.add(s)}}}function Eu(t,e){return F(t,e,1)}function Tu(t){return function(e){return 0===t?au():e.lift(new ku(t))}}class ku{constructor(t){if(this.total=t,this.total<0)throw new du}call(t,e){return e.subscribe(new Au(t,this.total))}}class Au extends p{constructor(t,e){super(t),this.total=e,this.ring=new Array,this.count=0}_next(t){const e=this.ring,n=this.total,r=this.count++;e.length<n?e.push(t):e[r%n]=t}_complete(){const t=this.destination;let e=this.count;if(e>0){const n=this.count>=this.total?this.total:this.count,r=this.ring;for(let s=0;s<n;s++){const s=e++%n;t.next(r[s])}}t.complete()}}function Ru(t=Pu){return e=>e.lift(new Iu(t))}class Iu{constructor(t){this.errorFactory=t}call(t,e){return e.subscribe(new Ou(t,this.errorFactory))}}class Ou extends p{constructor(t,e){super(t),this.errorFactory=e,this.hasValue=!1}_next(t){this.hasValue=!0,this.destination.next(t)}_complete(){if(this.hasValue)return this.destination.complete();{let e;try{e=this.errorFactory()}catch(t){e=t}this.destination.error(e)}}}function Pu(){return new su}function ju(t=null){return e=>e.lift(new Nu(t))}class Nu{constructor(t){this.defaultValue=t}call(t,e){return e.subscribe(new Uu(t,this.defaultValue))}}class Uu extends p{constructor(t,e){super(t),this.defaultValue=e,this.isEmpty=!0}_next(t){this.isEmpty=!1,this.destination.next(t)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}function Du(t,e){const n=arguments.length>=2;return r=>r.pipe(t?_u((e,n)=>t(e,n,r)):v,fu(1),n?ju(e):Ru(()=>new su))}function Lu(){}function Hu(t,e,n){return function(r){return r.lift(new Mu(t,e,n))}}class Mu{constructor(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}call(t,e){return e.subscribe(new Fu(t,this.nextOrObserver,this.error,this.complete))}}class Fu extends p{constructor(t,e,n,s){super(t),this._tapNext=Lu,this._tapError=Lu,this._tapComplete=Lu,this._tapError=n||Lu,this._tapComplete=s||Lu,r(e)?(this._context=this,this._tapNext=e):e&&(this._context=e,this._tapNext=e.next||Lu,this._tapError=e.error||Lu,this._tapComplete=e.complete||Lu)}_next(t){try{this._tapNext.call(this._context,t)}catch(e){return void this.destination.error(e)}this.destination.next(t)}_error(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)}_complete(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()}}class Vu{constructor(t){this.callback=t}call(t,e){return e.subscribe(new $u(t,this.callback))}}class $u extends p{constructor(t,e){super(t),this.add(new h(e))}}
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
 */class qu{constructor(t,e){this.id=t,this.url=e}}class zu extends qu{constructor(t,e,n="imperative",r=null){super(t,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Bu extends qu{constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Wu extends qu{constructor(t,e,n){super(t,e),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Gu extends qu{constructor(t,e,n){super(t,e),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Zu extends qu{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Qu extends qu{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ku extends qu{constructor(t,e,n,r,s){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Yu extends qu{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ju extends qu{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Xu{constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class tc{constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class ec{constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class nc{constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class rc{constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class sc{constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class ic{constructor(t,e,n){this.routerEvent=t,this.position=e,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const oc="primary";class ac{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){const e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}}function lc(t){return new ac(t)}function uc(t){const e=Error("NavigationCancelingError: "+t);return e.ngNavigationCancelingError=!0,e}function cc(t,e,n){const r=n.path.split("/");if(r.length>t.length)return null;if("full"===n.pathMatch&&(e.hasChildren()||r.length<t.length))return null;const s={};for(let i=0;i<r.length;i++){const e=r[i],n=t[i];if(e.startsWith(":"))s[e.substring(1)]=n;else if(e!==n.path)return null}return{consumed:t.slice(0,r.length),posParams:s}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function hc(t,e){const n=t?Object.keys(t):void 0,r=e?Object.keys(e):void 0;if(!n||!r||n.length!=r.length)return!1;let s;for(let i=0;i<n.length;i++)if(s=n[i],!dc(t[s],e[s]))return!1;return!0}function dc(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;const n=[...t].sort(),r=[...e].sort();return n.every((t,e)=>r[e]===t)}return t===e}function fc(t){return Array.prototype.concat.apply([],t)}function pc(t){return t.length>0?t[t.length-1]:null}function gc(t,e){for(const n in t)t.hasOwnProperty(n)&&e(t[n],n)}function mc(t){return(e=t)&&"function"==typeof e.subscribe?t:di(t)?D(Promise.resolve(t)):Kl(t);var e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function vc(t,e,n){return n?function(t,e){return hc(t,e)}(t.queryParams,e.queryParams)&&yc(t.root,e.root):function(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(n=>dc(t[n],e[n]))}(t.queryParams,e.queryParams)&&_c(t.root,e.root)}function yc(t,e){if(!xc(t.segments,e.segments))return!1;if(t.numberOfChildren!==e.numberOfChildren)return!1;for(const n in e.children){if(!t.children[n])return!1;if(!yc(t.children[n],e.children[n]))return!1}return!0}function _c(t,e){return wc(t,e,e.segments)}function wc(t,e,n){if(t.segments.length>n.length)return!!xc(t.segments.slice(0,n.length),n)&&!e.hasChildren();if(t.segments.length===n.length){if(!xc(t.segments,n))return!1;for(const n in e.children){if(!t.children[n])return!1;if(!_c(t.children[n],e.children[n]))return!1}return!0}{const r=n.slice(0,t.segments.length),s=n.slice(t.segments.length);return!!xc(t.segments,r)&&!!t.children.primary&&wc(t.children.primary,e,s)}}class bc{constructor(t,e,n){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=lc(this.queryParams)),this._queryParamMap}toString(){return kc.serialize(this)}}class Sc{constructor(t,e){this.segments=t,this.children=e,this.parent=null,gc(e,(t,e)=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ac(this)}}class Cc{constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap||(this._parameterMap=lc(this.parameters)),this._parameterMap}toString(){return Uc(this)}}function xc(t,e){return t.length===e.length&&t.every((t,n)=>t.path===e[n].path)}class Ec{}class Tc{parse(t){const e=new Fc(t);return new bc(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){var e;return`/${Rc(t.root,!0)}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${Oc(e)}=${Oc(t)}`).join("&"):`${Oc(e)}=${Oc(n)}`});return e.length?`?${e.join("&")}`:""}(t.queryParams)}${"string"==typeof t.fragment?`#${e=t.fragment,encodeURI(e)}`:""}`}}const kc=new Tc;function Ac(t){return t.segments.map(t=>Uc(t)).join("/")}function Rc(t,e){if(!t.hasChildren())return Ac(t);if(e){const e=t.children.primary?Rc(t.children.primary,!1):"",n=[];return gc(t.children,(t,e)=>{e!==oc&&n.push(`${e}:${Rc(t,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}{const e=function(t,e){let n=[];return gc(t.children,(t,r)=>{r===oc&&(n=n.concat(e(t,r)))}),gc(t.children,(t,r)=>{r!==oc&&(n=n.concat(e(t,r)))}),n}(t,(e,n)=>n===oc?[Rc(t.children.primary,!1)]:[`${n}:${Rc(e,!1)}`]);return 1===Object.keys(t.children).length&&null!=t.children.primary?`${Ac(t)}/${e[0]}`:`${Ac(t)}/(${e.join("//")})`}}function Ic(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Oc(t){return Ic(t).replace(/%3B/gi,";")}function Pc(t){return Ic(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function jc(t){return decodeURIComponent(t)}function Nc(t){return jc(t.replace(/\+/g,"%20"))}function Uc(t){return`${Pc(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${Pc(t)}=${Pc(e[t])}`).join("")}`;var e}const Dc=/^[^\/()?;=#]+/;function Lc(t){const e=t.match(Dc);return e?e[0]:""}const Hc=/^[^=?&#]+/,Mc=/^[^?&#]+/;class Fc{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Sc([],{}):new Sc([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(n.primary=new Sc(t,e)),n}parseSegment(){const t=Lc(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(t),new Cc(jc(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const e=Lc(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=Lc(this.remaining);t&&(n=t,this.capture(n))}t[jc(e)]=jc(n)}parseQueryParam(t){const e=function(t){const e=t.match(Hc);return e?e[0]:""}(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=function(t){const e=t.match(Mc);return e?e[0]:""}(this.remaining);t&&(n=t,this.capture(n))}const r=Nc(e),s=Nc(n);if(t.hasOwnProperty(r)){let e=t[r];Array.isArray(e)||(e=[e],t[r]=e),e.push(s)}else t[r]=s}parseParens(t){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=Lc(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let s;n.indexOf(":")>-1?(s=n.substr(0,n.indexOf(":")),this.capture(s),this.capture(":")):t&&(s=oc);const i=this.parseChildren();e[s]=1===Object.keys(i).length?i.primary:new Sc([],i),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new Error(`Expected "${t}".`)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Vc{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){const e=$c(t,this._root);return e?e.children.map(t=>t.value):[]}firstChild(t){const e=$c(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){const e=qc(t,this._root);return e.length<2?[]:e[e.length-2].children.map(t=>t.value).filter(e=>e!==t)}pathFromRoot(t){return qc(t,this._root).map(t=>t.value)}}function $c(t,e){if(t===e.value)return e;for(const n of e.children){const e=$c(t,n);if(e)return e}return null}function qc(t,e){if(t===e.value)return[e];for(const n of e.children){const r=qc(t,n);if(r.length)return r.unshift(e),r}return[]}class zc{constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}}function Bc(t){const e={};return t&&t.children.forEach(t=>e[t.value.outlet]=t),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Wc extends Vc{constructor(t,e){super(t),this.snapshot=e,Jc(this,t)}toString(){return this.snapshot.toString()}}function Gc(t,e){const n=function(t,e){const n=new Kc([],{},{},"",{},oc,e,null,t.root,-1,{});return new Yc("",new zc(n,[]))}(t,e),r=new Yl([new Cc("",{})]),s=new Yl({}),i=new Yl({}),o=new Yl({}),a=new Yl(""),l=new Zc(r,s,o,a,i,oc,e,n.root);return l.snapshot=n.root,new Wc(new zc(l,[]),n)}class Zc{constructor(t,e,n,r,s,i,o,a){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=i,this.component=o,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(T(t=>lc(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(T(t=>lc(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function Qc(t,e="emptyOnly"){const n=t.pathFromRoot;let r=0;if("always"!==e)for(r=n.length-1;r>=1;){const t=n[r],e=n[r-1];if(t.routeConfig&&""===t.routeConfig.path)r--;else{if(e.component)break;r--}}return function(t){return t.reduce((t,e)=>({params:Object.assign(Object.assign({},t.params),e.params),data:Object.assign(Object.assign({},t.data),e.data),resolve:Object.assign(Object.assign({},t.resolve),e._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class Kc{constructor(t,e,n,r,s,i,o,a,l,u,c){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=i,this.component=o,this.routeConfig=a,this._urlSegment=l,this._lastPathIndex=u,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=lc(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=lc(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Yc extends Vc{constructor(t,e){super(e),this.url=t,Jc(this,e)}toString(){return Xc(this._root)}}function Jc(t,e){e.value._routerState=t,e.children.forEach(e=>Jc(t,e))}function Xc(t){const e=t.children.length>0?` { ${t.children.map(Xc).join(", ")} } `:"";return`${t.value}${e}`}function th(t){if(t.snapshot){const e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,hc(e.queryParams,n.queryParams)||t.queryParams.next(n.queryParams),e.fragment!==n.fragment&&t.fragment.next(n.fragment),hc(e.params,n.params)||t.params.next(n.params),function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!hc(t[n],e[n]))return!1;return!0}(e.url,n.url)||t.url.next(n.url),hc(e.data,n.data)||t.data.next(n.data)}else t.snapshot=t._futureSnapshot,t.data.next(t._futureSnapshot.data)}function eh(t,e){var n,r;return hc(t.params,e.params)&&xc(n=t.url,r=e.url)&&n.every((t,e)=>hc(t.parameters,r[e].parameters))&&!(!t.parent!=!e.parent)&&(!t.parent||eh(t.parent,e.parent))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function nh(t,e,n){if(n&&t.shouldReuseRoute(e.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=e.value;const s=function(t,e,n){return e.children.map(e=>{for(const r of n.children)if(t.shouldReuseRoute(e.value,r.value.snapshot))return nh(t,e,r);return nh(t,e)})}(t,e,n);return new zc(r,s)}{if(t.shouldAttach(e.value)){const n=t.retrieve(e.value);if(null!==n){const t=n.route;return rh(e,t),t}}const n=new Zc(new Yl((r=e.value).url),new Yl(r.params),new Yl(r.queryParams),new Yl(r.fragment),new Yl(r.data),r.outlet,r.component,r),s=e.children.map(e=>nh(t,e));return new zc(n,s)}var r;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}function rh(t,e){if(t.value.routeConfig!==e.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(t.children.length!==e.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");e.value._futureSnapshot=t.value;for(let n=0;n<t.children.length;++n)rh(t.children[n],e.children[n])}function sh(t){return"object"==typeof t&&null!=t&&!t.outlets&&!t.segmentPath}function ih(t){return"object"==typeof t&&null!=t&&t.outlets}function oh(t,e,n,r,s){let i={};return r&&gc(r,(t,e)=>{i[e]=Array.isArray(t)?t.map(t=>`${t}`):`${t}`}),new bc(n.root===t?e:ah(n.root,t,e),i,s)}function ah(t,e,n){const r={};return gc(t.children,(t,s)=>{r[s]=t===e?n:ah(t,e,n)}),new Sc(t.segments,r)}class lh{constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&sh(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(ih);if(r&&r!==pc(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class uh{constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}}function ch(t,e,n){if(t||(t=new Sc([],{})),0===t.segments.length&&t.hasChildren())return hh(t,e,n);const r=function(t,e,n){let r=0,s=e;const i={match:!1,pathIndex:0,commandIndex:0};for(;s<t.segments.length;){if(r>=n.length)return i;const e=t.segments[s],o=n[r];if(ih(o))break;const a=`${o}`,l=r<n.length-1?n[r+1]:null;if(s>0&&void 0===a)break;if(a&&l&&"object"==typeof l&&void 0===l.outlets){if(!gh(a,l,e))return i;r+=2}else{if(!gh(a,{},e))return i;r++}s++}return{match:!0,pathIndex:s,commandIndex:r}}(t,e,n),s=n.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){const e=new Sc(t.segments.slice(0,r.pathIndex),{});return e.children.primary=new Sc(t.segments.slice(r.pathIndex),t.children),hh(e,0,s)}return r.match&&0===s.length?new Sc(t.segments,{}):r.match&&!t.hasChildren()?dh(t,e,n):r.match?hh(t,0,s):dh(t,e,n)}function hh(t,e,n){if(0===n.length)return new Sc(t.segments,{});{const r=function(t){return ih(t[0])?t[0].outlets:{[oc]:t}}(n),s={};return gc(r,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(s[r]=ch(t.children[r],e,n))}),gc(t.children,(t,e)=>{void 0===r[e]&&(s[e]=t)}),new Sc(t.segments,s)}}function dh(t,e,n){const r=t.segments.slice(0,e);let s=0;for(;s<n.length;){const i=n[s];if(ih(i)){const t=fh(i.outlets);return new Sc(r,t)}if(0===s&&sh(n[0])){r.push(new Cc(t.segments[e].path,ph(n[0]))),s++;continue}const o=ih(i)?i.outlets.primary:`${i}`,a=s<n.length-1?n[s+1]:null;o&&a&&sh(a)?(r.push(new Cc(o,ph(a))),s+=2):(r.push(new Cc(o,{})),s++)}return new Sc(r,{})}function fh(t){const e={};return gc(t,(t,n)=>{"string"==typeof t&&(t=[t]),null!==t&&(e[n]=dh(new Sc([],{}),0,t))}),e}function ph(t){const e={};return gc(t,(t,n)=>e[n]=`${t}`),e}function gh(t,e,n){return t==n.path&&hc(e,n.parameters)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class mh{constructor(t,e,n,r){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r}activate(t){const e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),th(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){const r=Bc(e);t.children.forEach(t=>{const e=t.value.outlet;this.deactivateRoutes(t,r[e],n),delete r[e]}),gc(r,(t,e)=>{this.deactivateRouteAndItsChildren(t,n)})}deactivateRoutes(t,e,n){const r=t.value,s=e?e.value:null;if(r===s)if(r.component){const s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(t,e,s.children)}else this.deactivateChildRoutes(t,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){const n=e.getContext(t.value.outlet);if(n&&n.outlet){const e=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:e,route:t,contexts:r})}}deactivateRouteAndOutlet(t,e){const n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=Bc(t);for(const i of Object.keys(s))this.deactivateRouteAndItsChildren(s[i],r);n&&n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated(),n.attachRef=null,n.resolver=null,n.route=null)}activateChildRoutes(t,e,n){const r=Bc(e);t.children.forEach(t=>{this.activateRoutes(t,r[t.value.outlet],n),this.forwardEvent(new sc(t.value.snapshot))}),t.children.length&&this.forwardEvent(new nc(t.value.snapshot))}activateRoutes(t,e,n){const r=t.value,s=e?e.value:null;if(th(r),r===s)if(r.component){const s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,s.children)}else this.activateChildRoutes(t,e,n);else if(r.component){const e=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const t=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),e.children.onOutletReAttached(t.contexts),e.attachRef=t.componentRef,e.route=t.route.value,e.outlet&&e.outlet.attach(t.componentRef,t.route.value),vh(t.route)}else{const n=function(t){for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig;if(t&&t.component)return null}return null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(r.snapshot),s=n?n.module.componentFactoryResolver:null;e.attachRef=null,e.route=r,e.resolver=s,e.outlet&&e.outlet.activateWith(r,s),this.activateChildRoutes(t,null,e.children)}}else this.activateChildRoutes(t,null,n)}}function vh(t){th(t.value),t.children.forEach(vh)}class yh{constructor(t,e){this.routes=t,this.module=e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _h(t){return"function"==typeof t}function wh(t){return t instanceof bc}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const bh=Symbol("INITIAL_VALUE");function Sh(){return uu(t=>function(...t){let e,n;return E(t[t.length-1])&&(n=t.pop()),"function"==typeof t[t.length-1]&&(e=t.pop()),1===t.length&&l(t[0])&&(t=t[0]),z(t,n).lift(new nu(e))}(t.map(t=>t.pipe(fu(1),function(...t){const e=t[t.length-1];return E(e)?(t.pop(),n=>iu(t,n,e)):e=>iu(t,e)}(bh)))).pipe(mu((t,e)=>{let n=!1;return e.reduce((t,r,s)=>{if(t!==bh)return t;if(r===bh&&(n=!0),!n){if(!1===r)return r;if(s===e.length-1||wh(r))return r}return t},t)},bh),_u(t=>t!==bh),T(t=>wh(t)?t:!0===t),fu(1)))}let Ch=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Mt({type:t,selectors:[["ng-component"]],decls:1,vars:0,template:function(t,e){1&t&&hi(0,"router-outlet")},directives:function(){return[_d]},encapsulation:2}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function xh(t,e=""){for(let n=0;n<t.length;n++){const r=t[n];Eh(r,Th(e,r))}}function Eh(t,e){t.children&&xh(t.children,e)}function Th(t,e){return e?t||e.path?t&&!e.path?`${t}/`:!t&&e.path?e.path:`${t}/${e.path}`:"":t}function kh(t){const e=t.children&&t.children.map(kh),n=e?Object.assign(Object.assign({},t),{children:e}):Object.assign({},t);return!n.component&&(e||n.loadChildren)&&n.outlet&&n.outlet!==oc&&(n.component=Ch),n}function Ah(t){return t.outlet||oc}function Rh(t,e){const n=t.filter(t=>Ah(t)===e);return n.push(...t.filter(t=>Ah(t)!==e)),n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ih={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function Oh(t,e,n){var r;if(""===e.path)return"full"===e.pathMatch&&(t.hasChildren()||n.length>0)?Object.assign({},Ih):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const s=(e.matcher||cc)(n,t,e);if(!s)return Object.assign({},Ih);const i={};gc(s.posParams,(t,e)=>{i[e]=t.path});const o=s.consumed.length>0?Object.assign(Object.assign({},i),s.consumed[s.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:s.consumed,lastChild:s.consumed.length,parameters:o,positionalParamSegments:null!==(r=s.posParams)&&void 0!==r?r:{}}}function Ph(t,e,n,r,s="corrected"){if(n.length>0&&function(t,e,n){return n.some(n=>jh(t,e,n)&&Ah(n)!==oc)}(t,n,r)){const s=new Sc(e,function(t,e,n,r){const s={};s.primary=r,r._sourceSegment=t,r._segmentIndexShift=e.length;for(const i of n)if(""===i.path&&Ah(i)!==oc){const n=new Sc([],{});n._sourceSegment=t,n._segmentIndexShift=e.length,s[Ah(i)]=n}return s}(t,e,r,new Sc(n,t.children)));return s._sourceSegment=t,s._segmentIndexShift=e.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function(t,e,n){return n.some(n=>jh(t,e,n))}(t,n,r)){const i=new Sc(t.segments,function(t,e,n,r,s,i){const o={};for(const a of r)if(jh(t,n,a)&&!s[Ah(a)]){const n=new Sc([],{});n._sourceSegment=t,n._segmentIndexShift="legacy"===i?t.segments.length:e.length,o[Ah(a)]=n}return Object.assign(Object.assign({},s),o)}(t,e,n,r,t.children,s));return i._sourceSegment=t,i._segmentIndexShift=e.length,{segmentGroup:i,slicedSegments:n}}const i=new Sc(t.segments,t.children);return i._sourceSegment=t,i._segmentIndexShift=e.length,{segmentGroup:i,slicedSegments:n}}function jh(t,e,n){return(!(t.hasChildren()||e.length>0)||"full"!==n.pathMatch)&&""===n.path}function Nh(t,e,n,r){return!!(Ah(t)===r||r!==oc&&jh(e,n,t))&&("**"===t.path||Oh(e,t,n).matched)}function Uh(t,e,n){return 0===e.length&&!t.children[n]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Dh{constructor(t){this.segmentGroup=t||null}}class Lh{constructor(t){this.urlTree=t}}function Hh(t){return new y(e=>e.error(new Dh(t)))}function Mh(t){return new y(e=>e.error(new Lh(t)))}function Fh(t){return new y(e=>e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))}class Vh{constructor(t,e,n,r,s){this.configLoader=e,this.urlSerializer=n,this.urlTree=r,this.config=s,this.allowRedirects=!0,this.ngModule=t.get(po)}apply(){const t=Ph(this.urlTree.root,[],[],this.config).segmentGroup,e=new Sc(t.segments,t.children);return this.expandSegmentGroup(this.ngModule,this.config,e,oc).pipe(T(t=>this.createUrlTree($h(t),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Su(t=>{if(t instanceof Lh)return this.allowRedirects=!1,this.match(t.urlTree);if(t instanceof Dh)throw this.noMatchError(t);throw t}))}match(t){return this.expandSegmentGroup(this.ngModule,this.config,t.root,oc).pipe(T(e=>this.createUrlTree($h(e),t.queryParams,t.fragment))).pipe(Su(t=>{if(t instanceof Dh)throw this.noMatchError(t);throw t}))}noMatchError(t){return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)}createUrlTree(t,e,n){const r=t.segments.length>0?new Sc([],{[oc]:t}):t;return new bc(r,e,n)}expandSegmentGroup(t,e,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(t,e,n).pipe(T(t=>new Sc([],t))):this.expandSegment(t,n,e,n.segments,r,!0)}expandChildren(t,e,n){const r=[];for(const s of Object.keys(n.children))"primary"===s?r.unshift(s):r.push(s);return D(r).pipe(Eu(r=>{const s=n.children[r],i=Rh(e,r);return this.expandSegmentGroup(t,i,s,r).pipe(T(t=>({segment:t,outlet:r})))}),mu((t,e)=>(t[e.outlet]=e.segment,t),{}),function(t,e){const n=arguments.length>=2;return r=>r.pipe(t?_u((e,n)=>t(e,n,r)):v,Tu(1),n?ju(e):Ru(()=>new su))}())}expandSegment(t,e,n,r,s,i){return D(n).pipe(Eu(o=>this.expandSegmentAgainstRoute(t,e,n,o,r,s,i).pipe(Su(t=>{if(t instanceof Dh)return Kl(null);throw t}))),Du(t=>!!t),Su((t,n)=>{if(t instanceof su||"EmptyError"===t.name){if(Uh(e,r,s))return Kl(new Sc([],{}));throw new Dh(e)}throw t}))}expandSegmentAgainstRoute(t,e,n,r,s,i,o){return Nh(r,e,s,i)?void 0===r.redirectTo?this.matchSegmentAgainstRoute(t,e,r,s,i):o&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i):Hh(e):Hh(e)}expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,i):this.expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,e,n,r){const s=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?Mh(s):this.lineralizeSegments(n,s).pipe(F(n=>{const s=new Sc(n,{});return this.expandSegment(t,s,e,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,s,i){const{matched:o,consumedSegments:a,lastChild:l,positionalParamSegments:u}=Oh(e,r,s);if(!o)return Hh(e);const c=this.applyRedirectCommands(a,r.redirectTo,u);return r.redirectTo.startsWith("/")?Mh(c):this.lineralizeSegments(r,c).pipe(F(r=>this.expandSegment(t,e,n,r.concat(s.slice(l)),i,!1)))}matchSegmentAgainstRoute(t,e,n,r,s){if("**"===n.path)return n.loadChildren?(n._loadedConfig?Kl(n._loadedConfig):this.configLoader.load(t.injector,n)).pipe(T(t=>(n._loadedConfig=t,new Sc(r,{})))):Kl(new Sc(r,{}));const{matched:i,consumedSegments:o,lastChild:a}=Oh(e,n,r);if(!i)return Hh(e);const l=r.slice(a);return this.getChildConfig(t,n,r).pipe(F(t=>{const r=t.module,i=t.routes,{segmentGroup:a,slicedSegments:u}=Ph(e,o,l,i),c=new Sc(a.segments,a.children);if(0===u.length&&c.hasChildren())return this.expandChildren(r,i,c).pipe(T(t=>new Sc(o,t)));if(0===i.length&&0===u.length)return Kl(new Sc(o,{}));const h=Ah(n)===s;return this.expandSegment(r,c,i,u,h?oc:s,!0).pipe(T(t=>new Sc(o.concat(t.segments),t.children)))}))}getChildConfig(t,e,n){return e.children?Kl(new yh(e.children,t)):e.loadChildren?void 0!==e._loadedConfig?Kl(e._loadedConfig):this.runCanLoadGuards(t.injector,e,n).pipe(F(n=>n?this.configLoader.load(t.injector,e).pipe(T(t=>(e._loadedConfig=t,t))):function(t){return new y(e=>e.error(uc(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))}(e))):Kl(new yh([],t))}runCanLoadGuards(t,e,n){const r=e.canLoad;return r&&0!==r.length?Kl(r.map(r=>{const s=t.get(r);let i;if(function(t){return t&&_h(t.canLoad)}(s))i=s.canLoad(e,n);else{if(!_h(s))throw new Error("Invalid CanLoad guard");i=s(e,n)}return mc(i)})).pipe(Sh(),Hu(t=>{if(!wh(t))return;const e=uc(`Redirecting to "${this.urlSerializer.serialize(t)}"`);throw e.url=t,e}),T(t=>!0===t)):Kl(!0)}lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return Kl(n);if(r.numberOfChildren>1||!r.children.primary)return Fh(t.redirectTo);r=r.children.primary}}applyRedirectCommands(t,e,n){return this.applyRedirectCreatreUrlTree(e,this.urlSerializer.parse(e),t,n)}applyRedirectCreatreUrlTree(t,e,n,r){const s=this.createSegmentGroup(t,e.root,n,r);return new bc(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){const n={};return gc(t,(t,r)=>{if("string"==typeof t&&t.startsWith(":")){const s=t.substring(1);n[r]=e[s]}else n[r]=t}),n}createSegmentGroup(t,e,n,r){const s=this.createSegments(t,e.segments,n,r);let i={};return gc(e.children,(e,s)=>{i[s]=this.createSegmentGroup(t,e,n,r)}),new Sc(s,i)}createSegments(t,e,n,r){return e.map(e=>e.path.startsWith(":")?this.findPosParam(t,e,r):this.findOrReturn(e,n))}findPosParam(t,e,n){const r=n[e.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);return r}findOrReturn(t,e){let n=0;for(const r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}}function $h(t){const e={};for(const n of Object.keys(t.children)){const r=$h(t.children[n]);(r.segments.length>0||r.hasChildren())&&(e[n]=r)}return function(t){if(1===t.numberOfChildren&&t.children.primary){const e=t.children.primary;return new Sc(t.segments.concat(e.segments),e.children)}return t}(new Sc(t.segments,e))}
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
class qh{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class zh{constructor(t,e){this.component=t,this.route=e}}function Bh(t,e,n){const r=t._root;return Gh(r,e?e._root:null,n,[r.value])}function Wh(t,e,n){const r=function(t){if(!t)return null;for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig}return null}(e);return(r?r.module.injector:n).get(t)}function Gh(t,e,n,r,s={canDeactivateChecks:[],canActivateChecks:[]}){const i=Bc(e);return t.children.forEach(t=>{!function(t,e,n,r,s={canDeactivateChecks:[],canActivateChecks:[]}){const i=t.value,o=e?e.value:null,a=n?n.getContext(t.value.outlet):null;if(o&&i.routeConfig===o.routeConfig){const l=function(t,e,n){if("function"==typeof n)return n(t,e);switch(n){case"pathParamsChange":return!xc(t.url,e.url);case"pathParamsOrQueryParamsChange":return!xc(t.url,e.url)||!hc(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!eh(t,e)||!hc(t.queryParams,e.queryParams);case"paramsChange":default:return!eh(t,e)}}(o,i,i.routeConfig.runGuardsAndResolvers);l?s.canActivateChecks.push(new qh(r)):(i.data=o.data,i._resolvedData=o._resolvedData),Gh(t,e,i.component?a?a.children:null:n,r,s),l&&a&&a.outlet&&a.outlet.isActivated&&s.canDeactivateChecks.push(new zh(a.outlet.component,o))}else o&&Zh(e,a,s),s.canActivateChecks.push(new qh(r)),Gh(t,null,i.component?a?a.children:null:n,r,s)}(t,i[t.value.outlet],n,r.concat([t.value]),s),delete i[t.value.outlet]}),gc(i,(t,e)=>Zh(t,n.getContext(e),s)),s}function Zh(t,e,n){const r=Bc(t),s=t.value;gc(r,(t,r)=>{Zh(t,s.component?e?e.children.getContext(r):null:e,n)}),n.canDeactivateChecks.push(new zh(s.component&&e&&e.outlet&&e.outlet.isActivated?e.outlet.component:null,s))}
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
class Qh{}function Kh(t){return new y(e=>e.error(t))}class Yh{constructor(t,e,n,r,s,i){this.rootComponentType=t,this.config=e,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=i}recognize(){const t=Ph(this.urlTree.root,[],[],this.config.filter(t=>void 0===t.redirectTo),this.relativeLinkResolution).segmentGroup,e=this.processSegmentGroup(this.config,t,oc);if(null===e)return null;const n=new Kc([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},oc,this.rootComponentType,null,this.urlTree.root,-1,{}),r=new zc(n,e),s=new Yc(this.url,r);return this.inheritParamsAndData(s._root),s}inheritParamsAndData(t){const e=t.value,n=Qc(e,this.paramsInheritanceStrategy);e.params=Object.freeze(n.params),e.data=Object.freeze(n.data),t.children.forEach(t=>this.inheritParamsAndData(t))}processSegmentGroup(t,e,n){return 0===e.segments.length&&e.hasChildren()?this.processChildren(t,e):this.processSegment(t,e,e.segments,n)}processChildren(t,e){const n=[];for(const s of Object.keys(e.children)){const r=e.children[s],i=Rh(t,s),o=this.processSegmentGroup(i,r,s);if(null===o)return null;n.push(...o)}const r=Xh(n);return r.sort((t,e)=>t.value.outlet===oc?-1:e.value.outlet===oc?1:t.value.outlet.localeCompare(e.value.outlet)),r}processSegment(t,e,n,r){for(const s of t){const t=this.processSegmentAgainstRoute(s,e,n,r);if(null!==t)return t}return Uh(e,n,r)?[]:null}processSegmentAgainstRoute(t,e,n,r){if(t.redirectTo||!Nh(t,e,n,r))return null;let s,i=[],o=[];if("**"===t.path){const r=n.length>0?pc(n).parameters:{};s=new Kc(n,r,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,nd(t),Ah(t),t.component,t,td(e),ed(e)+n.length,rd(t))}else{const r=Oh(e,t,n);if(!r.matched)return null;i=r.consumedSegments,o=n.slice(r.lastChild),s=new Kc(i,r.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,nd(t),Ah(t),t.component,t,td(e),ed(e)+i.length,rd(t))}const a=function(t){return t.children?t.children:t.loadChildren?t._loadedConfig.routes:[]}(t),{segmentGroup:l,slicedSegments:u}=Ph(e,i,o,a.filter(t=>void 0===t.redirectTo),this.relativeLinkResolution);if(0===u.length&&l.hasChildren()){const t=this.processChildren(a,l);return null===t?null:[new zc(s,t)]}if(0===a.length&&0===u.length)return[new zc(s,[])];const c=Ah(t)===r,h=this.processSegment(a,l,u,c?oc:r);return null===h?null:[new zc(s,h)]}}function Jh(t){const e=t.value.routeConfig;return e&&""===e.path&&void 0===e.redirectTo}function Xh(t){const e=[],n=new Set;for(const r of t){if(!Jh(r)){e.push(r);continue}const t=e.find(t=>r.value.routeConfig===t.value.routeConfig);void 0!==t?(t.children.push(...r.children),n.add(t)):e.push(r)}for(const r of n){const t=Xh(r.children);e.push(new zc(r.value,t))}return e.filter(t=>!n.has(t))}function td(t){let e=t;for(;e._sourceSegment;)e=e._sourceSegment;return e}function ed(t){let e=t,n=e._segmentIndexShift?e._segmentIndexShift:0;for(;e._sourceSegment;)e=e._sourceSegment,n+=e._segmentIndexShift?e._segmentIndexShift:0;return n-1}function nd(t){return t.data||{}}function rd(t){return t.resolve||{}}
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
function sd(t){return uu(e=>{const n=t(e);return n?D(n).pipe(T(()=>e)):Kl(e)})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class id extends class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}}{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const od=new jn("ROUTES");class ad{constructor(t,e,n,r){this.loader=t,this.compiler=e,this.onLoadStartListener=n,this.onLoadEndListener=r}load(t,e){if(e._loader$)return e._loader$;this.onLoadStartListener&&this.onLoadStartListener(e);const n=this.loadModuleFactory(e.loadChildren).pipe(T(n=>{this.onLoadEndListener&&this.onLoadEndListener(e);const r=n.create(t);return new yh(fc(r.injector.get(od,void 0,vt.Self|vt.Optional)).map(kh),r)}),Su(t=>{throw e._loader$=void 0,t}));return e._loader$=new Z(n,()=>new C).pipe(B()),e._loader$}loadModuleFactory(t){return"string"==typeof t?D(this.loader.load(t)):mc(t()).pipe(F(t=>t instanceof go?Kl(t):D(this.compiler.compileModuleAsync(t))))}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ld{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new ud,this.attachRef=null}}class ud{constructor(){this.contexts=new Map}onChildOutletCreated(t,e){const n=this.getOrCreateContext(t);n.outlet=e,this.contexts.set(t,n)}onChildOutletDestroyed(t){const e=this.getContext(t);e&&(e.outlet=null)}onOutletDeactivated(){const t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new ld,this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class cd{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function hd(t){throw t}function dd(t,e,n){return e.parse("/")}function fd(t,e){return Kl(null)}let pd=(()=>{class t{constructor(t,e,n,r,s,i,o,a){this.rootComponentType=t,this.urlSerializer=e,this.rootContexts=n,this.location=r,this.config=a,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.lastLocationChangeInfo=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new C,this.errorHandler=hd,this.malformedUriErrorHandler=dd,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:fd,afterPreactivation:fd},this.urlHandlingStrategy=new cd,this.routeReuseStrategy=new id,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.ngModule=s.get(po),this.console=s.get(ra);const l=s.get(ma);this.isNgZoneEnabled=l instanceof ma&&ma.isInAngularZone(),this.resetConfig(a),this.currentUrlTree=new bc(new Sc([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new ad(i,o,t=>this.triggerEvent(new Xu(t)),t=>this.triggerEvent(new tc(t))),this.routerState=Gc(this.currentUrlTree,this.rootComponentType),this.transitions=new Yl({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(t){const e=this.events;return t.pipe(_u(t=>0!==t.id),T(t=>Object.assign(Object.assign({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl)})),uu(t=>{let n=!1,r=!1;return Kl(t).pipe(Hu(t=>{this.currentNavigation={id:t.id,initialUrl:t.currentRawUrl,extractedUrl:t.extractedUrl,trigger:t.source,extras:t.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),uu(t=>{const n=!this.navigated||t.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))return Kl(t).pipe(uu(t=>{const n=this.transitions.getValue();return e.next(new zu(t.id,this.serializeUrl(t.extractedUrl),t.source,t.restoredState)),n!==this.transitions.getValue()?ou:Promise.resolve(t)}),(r=this.ngModule.injector,s=this.configLoader,i=this.urlSerializer,o=this.config,uu(t=>function(t,e,n,r,s){return new Vh(t,e,n,r,s).apply()}(r,s,i,t.extractedUrl,o).pipe(T(e=>Object.assign(Object.assign({},t),{urlAfterRedirects:e}))))),Hu(t=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:t.urlAfterRedirects})}),function(t,e,n,r,s){return F(i=>function(t,e,n,r,s="emptyOnly",i="legacy"){try{const o=new Yh(t,e,n,r,s,i).recognize();return null===o?Kh(new Qh):Kl(o)}catch(o){return Kh(o)}}(t,e,i.urlAfterRedirects,n(i.urlAfterRedirects),r,s).pipe(T(t=>Object.assign(Object.assign({},i),{targetSnapshot:t}))))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(this.rootComponentType,this.config,t=>this.serializeUrl(t),this.paramsInheritanceStrategy,this.relativeLinkResolution),Hu(t=>{"eager"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(t.urlAfterRedirects,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects);const n=new Zu(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);e.next(n)}));var r,s,i,o;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:s,restoredState:i,extras:o}=t,a=new zu(n,this.serializeUrl(r),s,i);e.next(a);const l=Gc(r,this.rootComponentType).snapshot;return Kl(Object.assign(Object.assign({},t),{targetSnapshot:l,urlAfterRedirects:r,extras:Object.assign(Object.assign({},o),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=t.rawUrl,this.browserUrlTree=t.urlAfterRedirects,t.resolve(null),ou}),sd(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:s,extras:{skipLocationChange:i,replaceUrl:o}}=t;return this.hooks.beforePreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:s,skipLocationChange:!!i,replaceUrl:!!o})}),Hu(t=>{const e=new Qu(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),T(t=>Object.assign(Object.assign({},t),{guards:Bh(t.targetSnapshot,t.currentSnapshot,this.rootContexts)})),function(t,e){return F(n=>{const{targetSnapshot:r,currentSnapshot:s,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return 0===o.length&&0===i.length?Kl(Object.assign(Object.assign({},n),{guardsResult:!0})):function(t,e,n,r){return D(t).pipe(F(t=>function(t,e,n,r,s){const i=e&&e.routeConfig?e.routeConfig.canDeactivate:null;return i&&0!==i.length?Kl(i.map(i=>{const o=Wh(i,e,s);let a;if(function(t){return t&&_h(t.canDeactivate)}(o))a=mc(o.canDeactivate(t,e,n,r));else{if(!_h(o))throw new Error("Invalid CanDeactivate guard");a=mc(o(t,e,n,r))}return a.pipe(Du())})).pipe(Sh()):Kl(!0)}(t.component,t.route,n,e,r)),Du(t=>!0!==t,!0))}(o,r,s,t).pipe(F(n=>n&&"boolean"==typeof n?function(t,e,n,r){return D(e).pipe(Eu(e=>iu(function(t,e){return null!==t&&e&&e(new ec(t)),Kl(!0)}(e.route.parent,r),function(t,e){return null!==t&&e&&e(new rc(t)),Kl(!0)}(e.route,r),function(t,e,n){const r=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(t=>function(t){const e=t.routeConfig?t.routeConfig.canActivateChild:null;return e&&0!==e.length?{node:t,guards:e}:null}(t)).filter(t=>null!==t).map(e=>lu(()=>Kl(e.guards.map(s=>{const i=Wh(s,e.node,n);let o;if(function(t){return t&&_h(t.canActivateChild)}(i))o=mc(i.canActivateChild(r,t));else{if(!_h(i))throw new Error("Invalid CanActivateChild guard");o=mc(i(r,t))}return o.pipe(Du())})).pipe(Sh())));return Kl(s).pipe(Sh())}(t,e.path,n),function(t,e,n){const r=e.routeConfig?e.routeConfig.canActivate:null;return r&&0!==r.length?Kl(r.map(r=>lu(()=>{const s=Wh(r,e,n);let i;if(function(t){return t&&_h(t.canActivate)}(s))i=mc(s.canActivate(e,t));else{if(!_h(s))throw new Error("Invalid CanActivate guard");i=mc(s(e,t))}return i.pipe(Du())}))).pipe(Sh()):Kl(!0)}(t,e.route,n))),Du(t=>!0!==t,!0))}(r,i,t,e):Kl(n)),T(t=>Object.assign(Object.assign({},n),{guardsResult:t})))})}(this.ngModule.injector,t=>this.triggerEvent(t)),Hu(t=>{if(wh(t.guardsResult)){const e=uc(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);throw e.url=t.guardsResult,e}const e=new Ku(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot,!!t.guardsResult);this.triggerEvent(e)}),_u(t=>{if(!t.guardsResult){this.resetUrlToCurrentUrlTree();const n=new Wu(t.id,this.serializeUrl(t.extractedUrl),"");return e.next(n),t.resolve(!1),!1}return!0}),sd(t=>{if(t.guards.canActivateChecks.length)return Kl(t).pipe(Hu(t=>{const e=new Yu(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),uu(t=>{let n=!1;return Kl(t).pipe((r=this.paramsInheritanceStrategy,s=this.ngModule.injector,F(t=>{const{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return Kl(t);let i=0;return D(n).pipe(Eu(t=>function(t,e,n,r){return function(t,e,n,r){const s=Object.keys(t);if(0===s.length)return Kl({});const i={};return D(s).pipe(F(s=>function(t,e,n,r){const s=Wh(t,e,r);return mc(s.resolve?s.resolve(e,n):s(e,n))}(t[s],e,n,r).pipe(Hu(t=>{i[s]=t}))),Tu(1),F(()=>Object.keys(i).length===s.length?Kl(i):ou))}(t._resolve,t,e,r).pipe(T(e=>(t._resolvedData=e,t.data=Object.assign(Object.assign({},t.data),Qc(t,n).resolve),null)))}(t.route,e,r,s)),Hu(()=>i++),Tu(1),F(e=>i===n.length?Kl(t):ou))})),Hu({next:()=>n=!0,complete:()=>{if(!n){const n=new Wu(t.id,this.serializeUrl(t.extractedUrl),"At least one route resolver didn't emit any value.");e.next(n),t.resolve(!1)}}}));var r,s}),Hu(t=>{const e=new Ju(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}))}),sd(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:s,extras:{skipLocationChange:i,replaceUrl:o}}=t;return this.hooks.afterPreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:s,skipLocationChange:!!i,replaceUrl:!!o})}),T(t=>{const e=function(t,e,n){const r=nh(t,e._root,n?n._root:void 0);return new Wc(r,e)}(this.routeReuseStrategy,t.targetSnapshot,t.currentRouterState);return Object.assign(Object.assign({},t),{targetRouterState:e})}),Hu(t=>{this.currentUrlTree=t.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.rawUrl),this.routerState=t.targetRouterState,"deferred"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects)}),(i=this.rootContexts,o=this.routeReuseStrategy,a=t=>this.triggerEvent(t),T(t=>(new mh(o,t.targetRouterState,t.currentRouterState,a).activate(i),t))),Hu({next(){n=!0},complete(){n=!0}}),(s=()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new Wu(t.id,this.serializeUrl(t.extractedUrl),`Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);e.next(n),t.resolve(!1)}this.currentNavigation=null},t=>t.lift(new Vu(s))),Su(n=>{if(r=!0,(s=n)&&s.ngNavigationCancelingError){const r=wh(n.url);r||(this.navigated=!0,this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl));const s=new Wu(t.id,this.serializeUrl(t.extractedUrl),n.message);e.next(s),r?setTimeout(()=>{const e=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);this.scheduleNavigation(e,"imperative",null,{skipLocationChange:t.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:t.resolve,reject:t.reject,promise:t.promise})},0):t.resolve(!1)}else{this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl);const r=new Gu(t.id,this.serializeUrl(t.extractedUrl),n);e.next(r);try{t.resolve(this.errorHandler(n))}catch(i){t.reject(i)}}var s;return ou}));var s,i,o,a}))}resetRootComponentType(t){this.rootComponentType=t,this.routerState.root.component=this.rootComponentType}getTransition(){const t=this.transitions.value;return t.urlAfterRedirects=this.browserUrlTree,t}setTransition(t){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),t))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(t=>{const e=this.extractLocationChangeInfoFromEvent(t);this.shouldScheduleNavigation(this.lastLocationChangeInfo,e)&&setTimeout(()=>{const{source:t,state:n,urlTree:r}=e,s={replaceUrl:!0};if(n){const t=Object.assign({},n);delete t.navigationId,0!==Object.keys(t).length&&(s.state=t)}this.scheduleNavigation(r,t,n,s)},0),this.lastLocationChangeInfo=e}))}extractLocationChangeInfoFromEvent(t){var e;return{source:"popstate"===t.type?"popstate":"hashchange",urlTree:this.parseUrl(t.url),state:(null===(e=t.state)||void 0===e?void 0:e.navigationId)?t.state:null,transitionId:this.getTransition().id}}shouldScheduleNavigation(t,e){if(!t)return!0;const n=e.urlTree.toString()===t.urlTree.toString();return!(e.transitionId===t.transitionId&&n&&("hashchange"===e.source&&"popstate"===t.source||"popstate"===e.source&&"hashchange"===t.source))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(t){this.events.next(t)}resetConfig(t){xh(t),this.config=t.map(kh),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(t,e={}){const{relativeTo:n,queryParams:r,fragment:s,queryParamsHandling:i,preserveFragment:o}=e,a=n||this.routerState.root,l=o?this.currentUrlTree.fragment:s;let u=null;switch(i){case"merge":u=Object.assign(Object.assign({},this.currentUrlTree.queryParams),r);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=r||null}return null!==u&&(u=this.removeEmptyProps(u)),function(t,e,n,r,s){if(0===n.length)return oh(e.root,e.root,e,r,s);const i=function(t){if("string"==typeof t[0]&&1===t.length&&"/"===t[0])return new lh(!0,0,t);let e=0,n=!1;const r=t.reduce((t,r,s)=>{if("object"==typeof r&&null!=r){if(r.outlets){const e={};return gc(r.outlets,(t,n)=>{e[n]="string"==typeof t?t.split("/"):t}),[...t,{outlets:e}]}if(r.segmentPath)return[...t,r.segmentPath]}return"string"!=typeof r?[...t,r]:0===s?(r.split("/").forEach((r,s)=>{0==s&&"."===r||(0==s&&""===r?n=!0:".."===r?e++:""!=r&&t.push(r))}),t):[...t,r]},[]);return new lh(n,e,r)}(n);if(i.toRoot())return oh(e.root,new Sc([],{}),e,r,s);const o=function(t,e,n){if(t.isAbsolute)return new uh(e.root,!0,0);if(-1===n.snapshot._lastPathIndex){const t=n.snapshot._urlSegment;return new uh(t,t===e.root,0)}const r=sh(t.commands[0])?0:1;return function(t,e,n){let r=t,s=e,i=n;for(;i>s;){if(i-=s,r=r.parent,!r)throw new Error("Invalid number of '../'");s=r.segments.length}return new uh(r,!1,s-i)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,t.numberOfDoubleDots)}(i,e,t),a=o.processChildren?hh(o.segmentGroup,o.index,i.commands):ch(o.segmentGroup,o.index,i.commands);return oh(o.segmentGroup,a,e,r,s)}(a,this.currentUrlTree,t,u,l)}navigateByUrl(t,e={skipLocationChange:!1}){const n=wh(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(r,"imperative",null,e)}navigate(t,e={skipLocationChange:!1}){return function(t){for(let e=0;e<t.length;e++){const n=t[e];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${e}`)}}(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){let e;try{e=this.urlSerializer.parse(t)}catch(n){e=this.malformedUriErrorHandler(n,this.urlSerializer,t)}return e}isActive(t,e){if(wh(t))return vc(this.currentUrlTree,t,e);const n=this.parseUrl(t);return vc(this.currentUrlTree,n,e)}removeEmptyProps(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return null!=r&&(e[n]=r),e},{})}processNavigations(){this.navigations.subscribe(t=>{this.navigated=!0,this.lastSuccessfulId=t.id,this.events.next(new Bu(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,t.resolve(!0)},t=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(t,e,n,r,s){if(this.disposed)return Promise.resolve(!1);const i=this.getTransition(),o="imperative"!==e&&"imperative"===(null==i?void 0:i.source),a=(this.lastSuccessfulId===i.id||this.currentNavigation?i.rawUrl:i.urlAfterRedirects).toString()===t.toString();if(o&&a)return Promise.resolve(!0);let l,u,c;s?(l=s.resolve,u=s.reject,c=s.promise):c=new Promise((t,e)=>{l=t,u=e});const h=++this.navigationId;return this.setTransition({id:h,source:e,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:t,extras:r,resolve:l,reject:u,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(t=>Promise.reject(t))}setBrowserUrl(t,e,n,r){const s=this.urlSerializer.serialize(t);r=r||{},this.location.isCurrentPathEqualTo(s)||e?this.location.replaceState(s,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(s,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(t,e,n){this.routerState=t,this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return t.\u0275fac=function(e){return new(e||t)(Gn(Un),Gn(Ec),Gn(ud),Gn(ul),Gn(Ys),Gn(Ha),Gn(fa),Gn(void 0))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})(),gd=(()=>{class t{constructor(t,e,n,r,s){this.router=t,this.route=e,this.commands=[],this.onChanges=new C,null==n&&r.setAttribute(s.nativeElement,"tabindex","0")}ngOnChanges(t){this.onChanges.next(this)}set routerLink(t){this.commands=null!=t?Array.isArray(t)?t:[t]:[]}onClick(){const t={skipLocationChange:vd(this.skipLocationChange),replaceUrl:vd(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,t),!0}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:vd(this.preserveFragment)})}}return t.\u0275fac=function(e){return new(e||t)(oi(pd),oi(Zc),In("tabindex"),oi(Ui),oi(Pi))},t.\u0275dir=Bt({type:t,selectors:[["","routerLink","",5,"a",5,"area"]],hostBindings:function(t,e){1&t&&fi("click",function(){return e.onClick()})},inputs:{routerLink:"routerLink",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo"},features:[se]}),t})(),md=(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.locationStrategy=n,this.commands=[],this.onChanges=new C,this.subscription=t.events.subscribe(t=>{t instanceof Bu&&this.updateTargetUrlAndHref()})}set routerLink(t){this.commands=null!=t?Array.isArray(t)?t:[t]:[]}ngOnChanges(t){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(t,e,n,r,s){if(0!==t||e||n||r||s)return!0;if("string"==typeof this.target&&"_self"!=this.target)return!0;const i={skipLocationChange:vd(this.skipLocationChange),replaceUrl:vd(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,i),!1}updateTargetUrlAndHref(){this.href=this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:vd(this.preserveFragment)})}}return t.\u0275fac=function(e){return new(e||t)(oi(pd),oi(Zc),oi(sl))},t.\u0275dir=Bt({type:t,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(t,e){1&t&&fi("click",function(t){return e.onClick(t.button,t.ctrlKey,t.shiftKey,t.altKey,t.metaKey)}),2&t&&(vi("href",e.href,rr),si("target",e.target))},inputs:{routerLink:"routerLink",target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo"},features:[se]}),t})();function vd(t){return""===t||!!t}let yd=(()=>{class t{constructor(t,e,n,r,s,i){this.router=t,this.element=e,this.renderer=n,this.cdr=r,this.link=s,this.linkWithHref=i,this.classes=[],this.isActive=!1,this.routerLinkActiveOptions={exact:!1},this.routerEventsSubscription=t.events.subscribe(t=>{t instanceof Bu&&this.update()})}ngAfterContentInit(){Kl(this.links.changes,this.linksWithHrefs.changes,Kl(null)).pipe(q()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){var t;null===(t=this.linkInputChangesSubscription)||void 0===t||t.unsubscribe();const e=[...this.links.toArray(),...this.linksWithHrefs.toArray(),this.link,this.linkWithHref].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=D(e).pipe(q()).subscribe(t=>{this.isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(t){const e=Array.isArray(t)?t:t.split(" ");this.classes=e.filter(t=>!!t)}ngOnChanges(t){this.update()}ngOnDestroy(){var t;this.routerEventsSubscription.unsubscribe(),null===(t=this.linkInputChangesSubscription)||void 0===t||t.unsubscribe()}update(){this.links&&this.linksWithHrefs&&this.router.navigated&&Promise.resolve().then(()=>{const t=this.hasActiveLinks();this.isActive!==t&&(this.isActive=t,this.cdr.markForCheck(),this.classes.forEach(e=>{t?this.renderer.addClass(this.element.nativeElement,e):this.renderer.removeClass(this.element.nativeElement,e)}))})}isLinkActive(t){return e=>t.isActive(e.urlTree,this.routerLinkActiveOptions.exact)}hasActiveLinks(){const t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.linkWithHref&&t(this.linkWithHref)||this.links.some(t)||this.linksWithHrefs.some(t)}}return t.\u0275fac=function(e){return new(e||t)(oi(pd),oi(Pi),oi(Ui),oi(so),oi(gd,8),oi(md,8))},t.\u0275dir=Bt({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(t,e,n){if(1&t&&(Wo(n,gd,1),Wo(n,md,1)),2&t){let t;Bo(t=Go())&&(e.links=t),Bo(t=Go())&&(e.linksWithHrefs=t)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",routerLinkActive:"routerLinkActive"},exportAs:["routerLinkActive"],features:[se]}),t})(),_d=(()=>{class t{constructor(t,e,n,r,s){this.parentContexts=t,this.location=e,this.resolver=n,this.changeDetector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new jo,this.deactivateEvents=new jo,this.name=r||oc,t.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const t=this.parentContexts.getContext(this.name);t&&t.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=t;const n=(e=e||this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,s=new wd(t,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,s),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return t.\u0275fac=function(e){return new(e||t)(oi(ud),oi(vo),oi(Ai),In("name"),oi(so))},t.\u0275dir=Bt({type:t,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),t})();class wd{constructor(t,e,n){this.route=t,this.childContexts=e,this.parent=n}get(t,e){return t===Zc?this.route:t===ud?this.childContexts:this.parent.get(t,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class bd{}class Sd{preload(t,e){return Kl(null)}}let Cd=(()=>{class t{constructor(t,e,n,r,s){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=new ad(e,n,e=>t.triggerEvent(new Xu(e)),e=>t.triggerEvent(new tc(e)))}setUpPreloading(){this.subscription=this.router.events.pipe(_u(t=>t instanceof Bu),Eu(()=>this.preload())).subscribe(()=>{})}preload(){const t=this.injector.get(po);return this.processRoutes(t,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,e){const n=[];for(const r of e)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const t=r._loadedConfig;n.push(this.processRoutes(t.module,t.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(t,r)):r.children&&n.push(this.processRoutes(t,r.children));return D(n).pipe(q(),T(t=>{}))}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>(e._loadedConfig?Kl(e._loadedConfig):this.loader.load(t.injector,e)).pipe(F(t=>(e._loadedConfig=t,this.processRoutes(t.module,t.routes)))))}}return t.\u0275fac=function(e){return new(e||t)(Gn(pd),Gn(Ha),Gn(fa),Gn(Ys),Gn(bd))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})(),xd=(()=>{class t{constructor(t,e,n={}){this.router=t,this.viewportScroller=e,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(t=>{t instanceof zu?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Bu&&(this.lastId=t.id,this.scheduleScrollEvent(t,this.router.parseUrl(t.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(t=>{t instanceof ic&&(t.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,e){this.router.triggerEvent(new ic(t,"popstate"===this.lastSource?this.store[this.restoredId]:null,e))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(Gn(pd),Gn(_l),Gn(void 0))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ed=new jn("ROUTER_CONFIGURATION"),Td=new jn("ROUTER_FORROOT_GUARD"),kd=[ul,{provide:Ec,useClass:Tc},{provide:pd,useFactory:function(t,e,n,r,s,i,o,a={},l,u){const c=new pd(null,t,e,n,r,s,i,fc(o));if(l&&(c.urlHandlingStrategy=l),u&&(c.routeReuseStrategy=u),function(t,e){t.errorHandler&&(e.errorHandler=t.errorHandler),t.malformedUriErrorHandler&&(e.malformedUriErrorHandler=t.malformedUriErrorHandler),t.onSameUrlNavigation&&(e.onSameUrlNavigation=t.onSameUrlNavigation),t.paramsInheritanceStrategy&&(e.paramsInheritanceStrategy=t.paramsInheritanceStrategy),t.relativeLinkResolution&&(e.relativeLinkResolution=t.relativeLinkResolution),t.urlUpdateStrategy&&(e.urlUpdateStrategy=t.urlUpdateStrategy)}(a,c),a.enableTracing){const t=Ga();c.events.subscribe(e=>{t.logGroup(`Router Event: ${e.constructor.name}`),t.log(e.toString()),t.log(e),t.logGroupEnd()})}return c},deps:[Ec,ud,ul,Ys,Ha,fa,od,Ed,[class{},new Yn],[class{},new Yn]]},ud,{provide:Zc,useFactory:function(t){return t.routerState.root},deps:[pd]},{provide:Ha,useClass:Va},Cd,Sd,class{preload(t,e){return e().pipe(Su(()=>Kl(null)))}},{provide:Ed,useValue:{enableTracing:!1}}];function Ad(){return new Oa("Router",pd)}let Rd=(()=>{class t{constructor(t,e){}static forRoot(e,n){return{ngModule:t,providers:[kd,jd(e),{provide:Td,useFactory:Pd,deps:[[pd,new Yn,new Jn]]},{provide:Ed,useValue:n||{}},{provide:sl,useFactory:Od,deps:[Qa,[new Kn(ol),new Yn],Ed]},{provide:xd,useFactory:Id,deps:[pd,_l,Ed]},{provide:bd,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:Sd},{provide:Oa,multi:!0,useFactory:Ad},[Nd,{provide:Qo,multi:!0,useFactory:Ud,deps:[Nd]},{provide:Ld,useFactory:Dd,deps:[Nd]},{provide:na,multi:!0,useExisting:Ld}]]}}static forChild(e){return{ngModule:t,providers:[jd(e)]}}}return t.\u0275fac=function(e){return new(e||t)(Gn(Td,8),Gn(pd,8))},t.\u0275mod=qt({type:t}),t.\u0275inj=ut({}),t})();function Id(t,e,n){return n.scrollOffset&&e.setOffset(n.scrollOffset),new xd(t,e,n)}function Od(t,e,n={}){return n.useHash?new ll(t,e):new al(t,e)}function Pd(t){return"guarded"}function jd(t){return[{provide:Nn,multi:!0,useValue:t},{provide:od,multi:!0,useValue:t}]}let Nd=(()=>{class t{constructor(t){this.injector=t,this.initNavigation=!1,this.resultOfPreactivationDone=new C}appInitializer(){return this.injector.get(Ya,Promise.resolve(null)).then(()=>{let t=null;const e=new Promise(e=>t=e),n=this.injector.get(pd),r=this.injector.get(Ed);return"disabled"===r.initialNavigation?(n.setUpLocationChangeListener(),t(!0)):"enabled"===r.initialNavigation||"enabledBlocking"===r.initialNavigation?(n.hooks.afterPreactivation=()=>this.initNavigation?Kl(null):(this.initNavigation=!0,t(!0),this.resultOfPreactivationDone),n.initialNavigation()):t(!0),e})}bootstrapListener(t){const e=this.injector.get(Ed),n=this.injector.get(Cd),r=this.injector.get(xd),s=this.injector.get(pd),i=this.injector.get(Da);t===i.components[0]&&("enabledNonBlocking"!==e.initialNavigation&&void 0!==e.initialNavigation||s.initialNavigation(),n.setUpPreloading(),r.init(),s.resetRootComponentType(i.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}}return t.\u0275fac=function(e){return new(e||t)(Gn(Ys))},t.\u0275prov=lt({token:t,factory:t.\u0275fac}),t})();function Ud(t){return t.appInitializer.bind(t)}function Dd(t){return t.bootstrapListener.bind(t)}const Ld=new jn("Router Initializer");
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
let Hd=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Mt({type:t,selectors:[["app-docs"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),t})(),Md=(()=>{class t{constructor(){}getOS(){var t=window.navigator.userAgent,e=window.navigator.platform,n="";return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(e)?n="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(e)?n="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(e)?n="Windows":/Android/.test(t)?n="Android":!n&&/Linux/.test(e)&&(n="Linux"),n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=lt({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Fd(t,e){1&t&&(ui(0,"a",24),mi(1," Download for Windows "),hi(2,"i",25),ci())}function Vd(t,e){1&t&&(ui(0,"a",26),mi(1," Download for Mac "),hi(2,"i",27),ci())}const $d=[{path:"",component:(()=>{class t{constructor(t){this.osService=t,this.os=""}ngOnInit(){this.os=this.osService.getOS()}}return t.\u0275fac=function(e){return new(e||t)(oi(Md))},t.\u0275cmp=Mt({type:t,selectors:[["app-landing"]],decls:70,vars:2,consts:[[1,"m-4"],[1,"row"],[1,"col-sm-6"],[1,"card","border-0","shadow"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["class","btn btn-primary rounded-pill shadow-sm","href","https://github.com/record10/electron-public/releases/download/v0.0.16/Record10-Setup-0.0.16.exe",4,"ngIf"],["class","btn btn-primary rounded-pill","href","https://github.com/record10/electron-public/releases/download/v0.0.16/Record10-0.0.16.dmg",4,"ngIf"],[1,"row","mt-2"],[1,"col-sm-6","offset-sm-6"],[1,"list-group","list-group-flush"],[1,"list-group-item","border-0"],[1,"fas","fa-sitemap","me-2"],[1,"badge","bg-primary","shadow-sm","border-0","me-1","rounded-pill"],[1,"fas","fa-user-friends","me-2"],[1,"fas","fa-user-cog","me-2"],[1,"fas","fa-book-reader","me-2"],[1,"fas","fa-plug","me-2"],[1,"fas","fa-cloud","me-2"],[1,"fas","fa-table","me-2"],[1,"fas","fa-file-excel"],[1,"fas","fa-search","me-2"],[1,"fas","fa-peace","me-2"],["href","https://github.com/record10/electron-public/releases/download/v0.0.16/Record10-Setup-0.0.16.exe",1,"btn","btn-primary","rounded-pill","shadow-sm"],[1,"fab","fa-microsoft"],["href","https://github.com/record10/electron-public/releases/download/v0.0.16/Record10-0.0.16.dmg",1,"btn","btn-primary","rounded-pill"],[1,"fab","fa-apple"]],template:function(t,e){1&t&&(ui(0,"div",0),ui(1,"div",1),ui(2,"div",2),ui(3,"div",3),ui(4,"div",4),ui(5,"h5",5),mi(6,"Record 10 App"),ci(),ui(7,"p",6),mi(8,"Design the application & Record the data your way!!!"),ci(),ii(9,Fd,3,0,"a",7),ii(10,Vd,3,0,"a",8),ci(),ci(),ci(),ci(),ui(11,"div",9),ui(12,"div",10),ui(13,"div",3),ui(14,"div",4),ui(15,"h5",5),mi(16,"Feature & Highlights"),ci(),ui(17,"ul",11),ui(18,"li",12),hi(19,"i",13),mi(20," Application Architecture You Decide\xa0 "),ui(21,"span",14),mi(22,"Top Menu"),ci(),ui(23,"span",14),mi(24,"Menu"),ci(),ui(25,"span",14),mi(26,"Sub Menu"),ci(),ui(27,"span",14),mi(28,"Tab"),ci(),ui(29,"span",14),mi(30,"Form"),ci(),ui(31,"span",14),mi(32,"Validations"),ci(),ci(),ui(33,"li",12),hi(34,"i",15),mi(35," User Management \xa0 "),ui(36,"span",14),mi(37,"Unlimited Users"),ci(),ci(),ui(38,"li",12),hi(39,"i",16),mi(40," User Roles \xa0 "),ui(41,"span",14),mi(42,"Unlimited Roles"),ci(),ci(),ui(43,"li",12),hi(44,"i",17),mi(45," \xa0Navigation Restrictions "),ci(),ui(46,"li",12),hi(47,"i",18),mi(48," \xa0\xa0Can Work Completely Offline "),ci(),ui(49,"li",12),hi(50,"i",19),mi(51," Can Connect to Cloud "),ci(),ui(52,"li",12),hi(53,"i",20),mi(54," \xa0Bulk Import & Export \xa0 "),ui(55,"span",14),hi(56,"i",21),mi(57," csv"),ci(),ci(),ui(58,"li",12),hi(59,"i",22),mi(60," \xa0Seamless Search "),ci(),ui(61,"li",12),hi(62,"i",23),mi(63," \xa0Uses Mongo DB \xa0 "),ui(64,"span",14),mi(65,"Complete Data Privacy"),ci(),ui(66,"span",14),mi(67,"You Control the Database"),ci(),ui(68,"span",14),mi(69,"Peace of Mind"),ci(),ci(),ci(),ci(),ci(),ci(),ci(),ci()),2&t&&(Zr(9),ai("ngIf","Windows"==e.os),Zr(1),ai("ngIf","Mac OS"==e.os))},directives:[gl],styles:[".container-fluid[_ngcontent-%COMP%]{background-image:url(/assets/logo.svg)}.badge[_ngcontent-%COMP%]{font-weight:400!important}"]}),t})()},{path:"docs",component:Hd}];let qd=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=qt({type:t}),t.\u0275inj=ut({imports:[[Rd.forRoot($d)],Rd]}),t})(),zd=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Mt({type:t,selectors:[["app-header"]],decls:16,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar","navbar-dark","bg-dark"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["src","/assets/logo.svg","alt","","height","50"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","/","routerLinkActive","active",1,"nav-link"],["routerLink","/docs","routerLinkActive","active",1,"nav-link"],[1,"d-flex"]],template:function(t,e){1&t&&(ui(0,"nav",0),ui(1,"div",1),ui(2,"div"),ui(3,"a",2),hi(4,"img",3),ci(),ci(),ui(5,"button",4),hi(6,"span",5),ci(),ui(7,"div",6),ui(8,"ul",7),ui(9,"li",8),ui(10,"a",9),mi(11,"Home"),ci(),ci(),ui(12,"li",8),ui(13,"a",10),mi(14,"Docs"),ci(),ci(),ci(),hi(15,"form",11),ci(),ci(),ci())},directives:[md,yd],styles:[""]}),t})(),Bd=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Mt({type:t,selectors:[["app-footer"]],decls:16,vars:0,consts:[[1,"bg-dark"],[1,"container","py-3"],[1,"row"],[1,"col-lg-4","col-md-6","mb-4","mb-lg-0"],["src","img/logo.png","alt","","width","180",1,"mb-3"],[1,"col-lg-2","col-md-6","mb-4","mb-lg-0"],[1,"col-lg-4","col-md-6","mb-lg-0","text-end"],[1,"me-5"],["href","mailto:success@record10.com",2,"text-decoration","none"],[1,"fa","fa-paper-plane"],[1,"container","text-end"],[1,"text-muted","mb-0","py-2"]],template:function(t,e){1&t&&(ui(0,"footer",0),ui(1,"div",1),ui(2,"div",2),ui(3,"div",3),hi(4,"img",4),ci(),hi(5,"div",5),hi(6,"div",5),ui(7,"div",6),ui(8,"span",7),ui(9,"a",8),mi(10,"Mail Us "),hi(11,"i",9),ci(),ci(),ci(),ci(),ci(),ui(12,"div",0),ui(13,"div",10),ui(14,"p",11),mi(15,"\xa9 2021 Record10 All rights reserved."),ci(),ci(),ci(),ci())},styles:[""]}),t})(),Wd=(()=>{class t{constructor(){this.title="record10-website"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Mt({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"container-fluid","p-0","m-0",2,"min-height","100vh"]],template:function(t,e){1&t&&(ui(0,"div",0),hi(1,"app-header"),ui(2,"div"),hi(3,"router-outlet"),ci(),hi(4,"app-footer"),ci())},directives:[zd,_d,Bd],styles:[".container-fluid[_ngcontent-%COMP%]{background-image:url(/assets/logo.svg)}"]}),t})(),Gd=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=qt({type:t,bootstrap:[Wd]}),t.\u0275inj=ut({providers:[],imports:[[Ql,qd]]}),t})();(function(){if(Ra)throw new Error("Cannot enable prod mode after platform setup.");Aa=!1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */)(),Gl().bootstrapModule(Gd).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0]]]);