/*!
* CookieConsent 3.0.0-rc.13
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='data-category';class s{constructor(){this.t={mode:t,revision:0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],g:!1,C:null,v:null,S:null,h:'',D:!0,T:!1,N:!0,k:[],j:!1,F:'',M:!1,O:[],I:[],A:[],R:[],P:!1,B:!1,J:!1,L:[],U:[],G:null,H:[],q:[],K:{},V:{},W:{},X:{},Y:{},Z:[]},this.$={ee:{},te:{}},this.oe={},this.ne={se:'cc:onFirstConsent',ce:'cc:onConsent',re:'cc:onChange'}}}const c=new s,r=(e,t)=>e.indexOf(t),a=(e,t)=>-1!==r(e,t),i=e=>Array.isArray(e),l=e=>'string'==typeof e,f=e=>!!e&&'object'==typeof e&&!i(e),d=e=>'function'==typeof e,_=e=>Object.keys(e),u=e=>Array.from(new Set(e)),p=e=>e.dispatchEvent(new Event('change')),m=e=>{const t=document.createElement(e);return'button'===e&&(t.type=e),t},g=(e,t,o)=>e.setAttribute(t,o),C=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},v=(e,t,o)=>e.getAttribute(o?'data-'+t:t),y=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=y(n)}return t},S=()=>{const e={},{O:t,K:o,V:n}=c.o;for(const s of t)e[s]=b(n[s],_(o[s]));return e},h=()=>{const e=c.t.cookie.expiresAfterDays;return d(e)?e(c.o.F):e},b=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!a(n,e))).concat(n.filter((e=>!a(o,e))))},w=e=>{c.o.I=u(e),c.o.F=(()=>{let e='custom';const{I:t,O:o,A:n}=c.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},D=(e,t,o)=>{const{re:n,ce:s,se:r,ae:a,ie:i,le:l}=c.oe,f=c.ne,_={cookie:c.o.p};e===f.se?d(r)&&r(y(_)):e===f.ce?d(s)&&s(y(_)):(_.changedCategories=c.o.k,_.changedServices=c.o.X,d(n)&&n(y(_))),((e,t)=>{dispatchEvent(new CustomEvent(e,{detail:t}))})(e,y(_))},T=e=>{const{V:t,X:o,O:s,K:r,Z:i,p:l,k:f}=c.o;for(const e of s){const n=o[e]||t[e]||[];for(const o of n){const n=r[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.fe&&a(t[e],o)&&d(s)?(n.fe=!0,s()):n.fe&&!a(t[e],o)&&d(c)&&(n.fe=!1,c())}}if(!c.t.manageScriptTags)return;const _=i,u=e||l.categories||[],p=(e,s)=>{if(s>=e.length)return;const c=i[s];if(c.de)return p(e,s+1);const r=c._e,l=c.ue,d=c.pe,_=a(u,l),y=!!d&&a(t[l],d);if(!d&&!c.me&&_||!d&&c.me&&!_&&a(f,l)||d&&!c.me&&y||d&&c.me&&!y&&a(o[l]||[],d)){c.de=!0;const t=v(r,'type',!0);C(r,'type',!!t),C(r,n);let o=v(r,'src',!0);o&&C(r,'src',!0);const a=m('script');a.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)g(a,e,r[e]||v(r,e));t&&(a.type=t),o?a.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(a.onload=a.onerror=()=>{p(e,++s)}),r.replaceWith(a),i)return}p(e,++s)};p(_,0)},E=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:r,sameSite:i}=c.t.cookie,l=encodeURIComponent(JSON.stringify(c.o.p)),f=e?(()=>{const e=c.o.S,t=e?new Date-e:0;return 864e5*h()-t})():864e5*h(),d=new Date;d.setTime(d.getTime()+f);let _=n+'='+l+(0!==f?'; expires='+d.toUTCString():'')+'; Path='+s+'; SameSite='+i;a(t,'.')&&(_+='; Domain='+r),'https:'===o&&(_+='; Secure'),document.cookie=_,c.o.p},N=(e,t,o)=>{const n=o||c.t.cookie.domain,s=t||c.t.cookie.path,r='www.'===n.slice(0,4),a=r&&n.substring(4),i=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)i(t),i(t,n),r&&i(t,a)},x=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(k(e||c.t.cookie.name,!0)),k=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},j=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},F=(e,n=[])=>{((e,t)=>{const{O:o,I:n,A:s,ge:r,W:f,K:d}=c.o;let u=[];if(e){i(e)?u.push(...e):l(e)&&(u='all'===e?o:[e]);for(const e of o)f[e]=a(u,e)?_(d[e]):[]}else u=r?(()=>{const e=c.$.ee;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})():n;u=u.filter((e=>!a(o,e)||!a(t,e))),u.push(...s),w(u)})(e,n),(e=>{const t=c.o,{W:o,A:n,V:s,K:r,O:i}=t,l=i;t.Y=y(s);for(const e of l){const t=r[e],c=_(t),i=o[e]&&o[e].length>0,l=a(n,e);if(0!==c.length){if(s[e]=[],l)s[e].push(...c);else if(i){const t=o[e];s[e].push(...t)}else s[e]=[];s[e]=u(s[e])}}})(),(()=>{const e=c.o;c.t.mode===o&&e.D?e.k=b(e.R,e.I):e.k=b(e.I,e.p.categories);let n=e.k.length>0,s=!1;for(const t of e.O)e.X[t]=b(e.V[t],e.Y[t]),e.X[t].length>0&&(s=!0);const i=c.$.ee;for(let t in i)i[t].checked=a(e.I,t);for(const t of e.O){const o=c.$.te[t],n=e.V[t];for(const e in o)o[e].checked=a(n,e)}e.v||(e.v=new Date),e.h||(e.h=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:y(e.I),revision:c.t.revision,data:e.C,consentTimestamp:e.v.toISOString(),consentId:e.h,services:y(e.V)};let l=!1;(e.D||n||s)&&(e.D&&(e.D=!1,l=!0),e.S?e.S=new Date:e.S=e.v,e.p.lastConsentTimestamp=e.S.toISOString(),E(),c.t.autoClearCookies&&(l||!e.D&&n)&&(e=>{const t=c.o,o=j();t.j=!1;let n=e?t.O:t.k;n=n.filter((e=>{let o=t.M[e];return!!o&&!o.readOnly&&!!o.autoClear}));for(const s of n){const n=t.M[s].autoClear,c=n&&n.cookies||[],i=a(t.k,s),l=!a(t.I,s),f=i&&l;if(e&&l||!e&&f){!0===n.reloadPage&&f&&(t.j=!0);for(const e of c){let t=[];const n=e.name,s=e.domain,c=e.path;if(n instanceof RegExp)for(let e of o)n.test(e)&&t.push(e);else{let e=r(o,n);e>-1&&t.push(o[e])}t.length>0&&N(t,c,s)}}}})(l),T()),l&&(D(c.ne.se),D(c.ne.ce),c.t.mode===t)||((n||s)&&D(c.ne.re),e.j&&location.reload())})()},M=(e,t,o)=>{let n=[];const s=e=>{if(l(e)){let t=k(e);''!==t&&n.push(t)}else n.push(...j(e))};if(i(e))for(let t of e)s(t);else s(e);N(n,t,o)},O=(e,t)=>{const o=x(t);return e?o[e]:o},I=()=>!c.o.D;e.acceptCategory=F,e.acceptService=(e,t)=>{const{O:o,K:n}=c.o;if(!(e&&t&&l(t)&&a(o,t)&&0!==_(n[t]).length))return!1;((e,t)=>{const o=c.o,{K:n,W:s,ge:r}=o,f=c.$.te[t]||{},d=c.$.ee[t]||{},m=_(n[t]);if(s[t]=[],l(e)){if('all'===e){if(s[t].push(...m),r)for(let e in f)f[e].checked=!0,p(f[e])}else if(a(m,e)&&s[t].push(e),r)for(let t in f)f[t].checked=e===t,p(f[t])}else if(i(e))for(let o of m){const n=a(e,o);n&&s[t].push(o),r&&(f[o].checked=n,p(f[o]))}const g=0===s[t].length;o.I=g?o.I.filter((e=>e!==t)):u([...o.I,t]),r&&(d.checked=!g,p(d))})(e,t),F()},e.acceptedCategory=e=>{const t=c.o.D?[]:c.o.I;return a(t,e)},e.acceptedService=(e,t)=>{const o=c.o.D?[]:c.o.V[t];return a(o,e)},e.eraseCookies=M,e.getConfig=e=>{const t=c.t,o=c.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=O,e.getUserPreferences=()=>{const{F:e,V:t}=c.o,{accepted:o,rejected:n}=(()=>{const{D:e,I:t,O:o}=c.o;return{accepted:t,rejected:e?[]:o.filter((e=>!a(t,e)))}})();return y({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:S()})},e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=m('script'),f(t))for(const e in t)g(o,e,t[e]);var s,c;o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,s=document.head,c=o,s.appendChild(c)}))},e.reset=e=>{const{name:t,path:o,domain:n}=c.t.cookie;e&&M(t,o,n);for(const{Ce:e,ve:t,ye:o}of c.o.m)e.removeEventListener(t,o);const r=new s;for(const e in c)c[e]=r[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:s,ne:r}=c,d=window;if(!d._ccRun){if(d._ccRun=!0,(e=>{const{$:t,t:s,o:r}=c,i=s,l=r,{cookie:d}=i,u=c.oe,p=e.cookie,m=e.categories,g=_(m)||[],C=navigator,y=document;t.Se=y,t.he=y.documentElement,d.domain=location.hostname,l.i=e,l.M=m,l.O=g,u.se=e.onFirstConsent,u.ce=e.onConsent,u.re=e.onChange;const{mode:S,autoClearCookies:h,revision:b,manageScriptTags:w,hideFromBots:D}=e;S===o&&(i.mode=S),'boolean'==typeof h&&(i.autoClearCookies=h),'boolean'==typeof w&&(i.manageScriptTags=w),'number'==typeof b&&b>=0&&(i.revision=b,l.T=!0),!1===D&&(i.hideFromBots=!1),!0===i.hideFromBots&&C&&(l.P=C.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(C.userAgent)||C.webdriver),f(p)&&(i.cookie={...d,...p}),i.autoClearCookies,l.T,i.manageScriptTags,(e=>{const{M:t,K:o,V:n,W:s,A:r}=c.o;for(let a of e){const e=t[a],i=e.services||{},l=f(i)&&_(i)||[];o[a]={},n[a]=[],s[a]=[],e.readOnly&&(r.push(a),n[a]=l),c.$.te[a]={};for(let e of l){const t=i[e];t.fe=!1,o[a][e]=t}}})(g),(()=>{if(!c.t.manageScriptTags)return;const e=c.o,t=(o=document,s='script['+n+']',o.querySelectorAll(s));var o,s;for(const o of t){let t=v(o,n),s=o.dataset.service||'',c=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),c=!0),'!'===s.charAt(0)&&(s=s.slice(1),c=!0),a(e.O,t)&&(e.Z.push({_e:o,de:!1,me:c,ue:t,pe:s}),s)){const o=e.K[t];o[s]||(o[s]={fe:!1})}}})()})(e),t.P)return;if((()=>{const e=c.o,t=c.t,n=x(),{categories:s,services:r,consentId:a,consentTimestamp:f,lastConsentTimestamp:d,data:_,revision:u}=n,p=i(s);e.p=n,e.h=a;const m=!!a&&l(a);e.v=f,e.v&&(e.v=new Date(f)),e.S=d,e.S&&(e.S=new Date(d)),e.C=void 0!==_?_:null,e.T&&m&&u!==t.revision&&(e.N=!1),e.D=!(m&&e.N&&e.v&&e.S&&p),e.D,e.D?t.mode===o&&((()=>{const e=c.o;for(const t of e.O){const n=e.M[t];if(n.readOnly||n.enabled&&e.i.mode===o){e.R.push(t);const o=e.K[t]||{};for(let n in o)e.V[t].push(n)}}})(),e.I=[...e.R]):(e.V={...e.V,...r},w([...e.A,...s])),e.W={...e.V}})(),I())return T(),D(r.ce);s.mode===o&&T(t.R)}},e.setCookieData=e=>{let t,o=e.value,n=e.mode,s=!1;const r=c.o;if('update'===n){r.C=t=O('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(r.C=t,r.p.data=t,E(!0)),s},e.validConsent=I,e.validCookie=e=>''!==k(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
