_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"8oxB":function(n,t){var e,r,o=n.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(n){if(e===setTimeout)return setTimeout(n,0);if((e===u||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:u}catch(n){e=u}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(n){r=i}}();var s,a=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?a=s.concat(a):l=-1,a.length&&h())}function h(){if(!f){var n=c(p);f=!0;for(var t=a.length;t;){for(s=a,a=[];++l<t;)s&&s[l].run();l=-1,t=a.length}s=null,f=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function d(n,t){this.fun=n,this.array=t}function v(){}o.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];a.push(new d(n,t)),1!==a.length||f||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"HaE+":function(n,t,e){"use strict";function r(n,t,e,r,o,u,i){try{var c=n[u](i),s=c.value}catch(a){return void e(a)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var i=n.apply(t,e);function c(n){r(i,o,u,c,s,"next",n)}function s(n){r(i,o,u,c,s,"throw",n)}c(void 0)}))}}e.d(t,"a",(function(){return o}))},INWo:function(n,t,e){"use strict";(function(n){e.d(t,"a",(function(){return s}));var r=e("o0o1"),o=e.n(r),u=e("HaE+"),i=e("nOHt"),c=e.n(i);function s(n,t){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(o.a.mark((function t(e,r){var u,i,s,a,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.env.MY_API_URL||"",s=null===(u=r.req)||void 0===u?void 0:u.headers.cookie,t.next=4,fetch("".concat(i,"/api/").concat(e),{headers:{cookie:s}});case 4:if(401!==(a=t.sent).status||r.req){t.next=12;break}return c.a.replace("/login"),t.next=9,a.json();case 9:return t.t0=t.sent,t.t1={userInfo:t.t0},t.abrupt("return",{props:t.t1});case 12:if(401!==a.status||!r.req){t.next=20;break}return null===(f=r.res)||void 0===f||f.writeHead(302,{Location:"".concat(n.env.MY_API_URL,"/login")}),r.res.end(),t.next=17,a.json();case 17:return t.t2=t.sent,t.t3={userInfo:t.t2},t.abrupt("return",{props:t.t3});case 20:return t.next=22,a.json();case 22:return t.t4=t.sent,t.t5={userInfo:t.t4},t.abrupt("return",{props:t.t5});case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}).call(this,e("8oxB"))},et9c:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members",function(){return e("nc1C")}])},nc1C:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return s}));var r=e("o0o1"),o=e.n(r),u=e("HaE+"),i=e("nKUr"),c=(e("q1tI"),e("INWo"));function s(n){var t=n.userInfo;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"This is list of members:"}),Object(i.jsx)("br",{}),t.map((function(n,t){return Object(i.jsx)("div",{children:n.name},t)}))]})}s.getInitialProps=function(){var n=Object(u.a)(o.a.mark((function n(t){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.a)("members",t);case 2:return e=n.sent,n.abrupt("return",{userInfo:e.props.userInfo});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}},[["et9c",0,1,2]]]);