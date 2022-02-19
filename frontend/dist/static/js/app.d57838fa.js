(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$auth.isLoading?n("Loading"):n("div",{staticClass:"d-flex flex-column h-100",attrs:{id:"app"}},[[n("NavBar"),n("div",{staticClass:"container flex-grow-1"},[n("div",{staticClass:"mt-5"},[n("router-view")],1)]),n("Footer")]],2)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container mb-3"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand logo"}),n("MainNav"),n("AuthNav")],1)])])},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v(" Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[t._v("Profile")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/external-api"}},[t._v(" External API ")])],1)])},u=[],p={name:"MainNav"},d=p,h=n("2877"),f=Object(h["a"])(d,l,u,!1,null,null,null),v=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-nav ml-auto"},[n("AuthenticationButton")],1)},g=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$auth.isAuthenticated?n("LogoutButton"):n("LoginButton")],1)},_=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$auth.isAuthenticated?t._e():n("button",{staticClass:"btn btn-primary btn-block",on:{click:t.login}},[t._v(" Log In ")])},x=[],w={name:"LoginButton",methods:{login:function(){this.$auth.loginWithRedirect()}}},k=w,y=Object(h["a"])(k,C,x,!1,null,null,null),A=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$auth.isAuthenticated?n("button",{staticClass:"btn btn-danger btn-block",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v(" Log Out ")]):t._e()},j=[],E={name:"LogoutButton",methods:{logout:function(){this.$auth.logout(),this.$router.push({path:"/"})}}},$=E,S=Object(h["a"])($,O,j,!1,null,null,null),M=S.exports,R={name:"AuthenticationButton",components:{LogoutButton:M,LoginButton:A}},L=R,P=Object(h["a"])(L,b,_,!1,null,null,null),B=P.exports,I={name:"AuthNav",components:{AuthenticationButton:B}},T=I,N=Object(h["a"])(T,m,g,!1,null,null,null),U=N.exports,H={name:"NavBar",components:{AuthNav:U,MainNav:v}},J=H,W=Object(h["a"])(J,o,c,!1,null,null,null),F=W.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-light p-3 text-center"},[n("div",{staticClass:"logo"}),n("p",[t._v(" Sample project provided by "),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com"}},[t._v(" Auth0 ")])])])}],G={name:"Footer"},V=G,q=Object(h["a"])(V,z,D,!1,null,null,null),Y=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("img",{attrs:{src:t.loadingImg,alt:"Loading..."}})])},Q=[],X={name:"Loading",data:function(){return{loadingImg:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg"}}},Z=X,tt=Object(h["a"])(Z,K,Q,!1,null,null,null),et=tt.exports,nt={components:{Loading:et,Footer:Y,NavBar:F}},at=nt,rt=Object(h["a"])(at,s,i,!1,null,null,null),st=rt.exports,it=n("8c4f"),ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero"),n("hr"),n("HomeContent")],1)},ct=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center hero"},[n("img",{staticClass:"mb-3 app-logo",attrs:{src:t.heroLogo,alt:"Vue logo",width:"120"}}),n("h1",{staticClass:"mb-4"},[t._v("Vue Sample Project")]),t._m(0)])},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"lead"},[t._v(" This is a sample application that demonstrates an authentication flow for an SPA, using "),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/quickstart/spa/vuejs"}},[t._v(" Vue ")])])}],pt={name:"Hero",data:function(){return{heroLogo:"https://cdn.auth0.com/blog/auth0-vue-sample/assets/logo.png"}}},dt=pt,ht=Object(h["a"])(dt,lt,ut,!1,null,null,null),ft=ht.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"next-steps"},[n("h2",{staticClass:"my-5 text-center"},[t._v("What can I do next?")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 mb-4"},[n("h6",{staticClass:"mb-3"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/connections"}},[n("i",{staticClass:"fas fa-link mr-2"}),t._v("Configure other identity providers ")])]),n("p",[t._v(" Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server. ")])]),n("div",{staticClass:"col-md"}),n("div",{staticClass:"col-md-5 mb-4"},[n("h6",{staticClass:"mb-3"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/multifactor-authentication"}},[n("i",{staticClass:"fas fa-link mr-2"}),t._v("Enable Multi-Factor Authentication ")])]),n("p",[t._v(" Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported. ")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 mb-4"},[n("h6",{staticClass:"mb-3"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/anomaly-detection"}},[n("i",{staticClass:"fas fa-link mr-2"}),t._v("Anomaly Detection ")])]),n("p",[t._v(" Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts. ")])]),n("div",{staticClass:"col-md"}),n("div",{staticClass:"col-md-5 mb-4"},[n("h6",{staticClass:"mb-3"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/rules"}},[n("i",{staticClass:"fas fa-link mr-2"}),t._v("Learn About Rules ")])]),n("p",[t._v(" Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities. ")])])])])}],gt={name:"HomeContent"},bt=gt,_t=Object(h["a"])(bt,vt,mt,!1,null,null,null),Ct=_t.exports,xt={name:"home",components:{Hero:ft,HomeContent:Ct}},wt=xt,kt=Object(h["a"])(wt,ot,ct,!1,null,null,null),yt=kt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row align-items-center profile-header"},[n("div",{staticClass:"col-md-2 mb-3"},[n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})]),n("div",{staticClass:"col-md text-center text-md-left"},[n("h2",[t._v(t._s(t.$auth.user.name))]),n("p",{staticClass:"lead text-muted"},[t._v(t._s(t.$auth.user.email))])])]),n("div",{staticClass:"row"},[n("pre",{staticClass:"col-12 text-light bg-dark p-4"},[t._v(t._s(JSON.stringify(t.$auth.user,null,2)))])])])},Ot=[],jt={},Et=Object(h["a"])(jt,At,Ot,!1,null,null,null),$t=Et.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("External API")]),t._m(0),n("div",{staticClass:"btn-group mt-5",attrs:{role:"group","aria-label":"External API Requests Examples"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.callApiEndpoint}},[t._v(" Get Public Message ")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.callApiSecuredEndpoint}},[t._v(" Get Private Message ")])]),t.apiMessage?n("div",{staticClass:"mt-5"},[n("h6",{staticClass:"muted"},[t._v("Result")]),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("code",{staticClass:"col-12 text-light bg-dark p-4"},[t._v(" "+t._s(JSON.stringify(t.apiMessage,null,2))+" ")])])])]):t._e()])},Mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" You use will use a button to call an external API using an access token, and the API will validate it using the API's audience value. "),n("strong",[t._v("This route should be private")]),t._v(". ")])}],Rt=(n("99af"),n("d3b7"),n("96cf"),n("1da1")),Lt=n("8160"),Pt={name:"Api",data:function(){return{apiMessage:null}},methods:{callApiEndpoint:function(){var t=this;return Object(Rt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Lt["d"],"/api/public"));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a),t.apiMessage=a.msg,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.apiMessage="Error: the server responded with '".concat(e.t0.response.status,": ").concat(e.t0.response.statusText,"'");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},callApiSecuredEndpoint:function(){var t=this;return Object(Rt["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.getTokenSilently();case 2:return n=e.sent,e.prev=3,e.next=6,fetch("".concat(Lt["d"],"/api/private"),{headers:{Authorization:"Bearer ".concat(n)}});case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,console.log(r),t.apiMessage=r.iss,e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](3),console.log(e.t0),t.apiMessage="Error: the server responded with '".concat(e.t0.response.status,": ").concat(e.t0.response.statusText,"'");case 18:case"end":return e.stop()}}),e,null,[[3,14]])})))()}}},Bt=Pt,It=Object(h["a"])(Bt,St,Mt,!1,null,null,null),Tt=It.exports,Nt=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("5530")),Ut=n("15fd"),Ht=n("9767"),Jt=function(){return a},Wt=function(t){var e=t.onRedirectCallback,n=void 0===e?function(){return window.history.replaceState({},document.title,window.location.pathname)}:e,s=t.redirectUri,i=void 0===s?window.location.origin:s,o=Object(Ut["a"])(t,["onRedirectCallback","redirectUri"]);return a||(a=new r["a"]({data:function(){return{auth0Client:null,isLoading:!0,isAuthenticated:!1,user:{},error:null}},methods:{handleRedirectCallback:function(){var t=this;return Object(Rt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),t.error=e.t0;case 13:return e.prev=13,t.isLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},logout:function(t){return this.auth0Client.logout(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)}},created:function(){var t=this;return Object(Rt["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(Ht["a"])(Object(Nt["a"])(Object(Nt["a"])({},o),{},{domain:o.domain,client_id:o.clientId,audience:o.audience,redirect_uri:i}));case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:a=e.sent,r=a.appState,n(r);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](3),t.error=e.t0;case 15:return e.prev=15,e.next=18,t.auth0Client.isAuthenticated();case 18:return t.isAuthenticated=e.sent,e.next=21,t.auth0Client.getUser();case 21:return t.user=e.sent,t.isLoading=!1,e.finish(15);case 24:case"end":return e.stop()}}),e,null,[[3,12,15,24]])})))()}}),a)},Ft={install:function(t,e){t.prototype.$auth=Wt(e)}},zt=function(t,e,n){var a=Jt(),r=function(){if(a.isAuthenticated)return n();a.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!a.isLoading)return r();a.$watch("isLoading",(function(t){if(!1===t)return r()}))};r["a"].use(it["a"]);var Dt=new it["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:yt},{path:"/profile",name:"profile",component:$t,beforeEnter:zt},{path:"/external-api",name:"external-api",component:Tt,beforeEnter:zt}]}),Gt=Dt;n("034b");r["a"].use(Ft,{domain:Lt["c"],clientId:Lt["b"],audience:Lt["a"],onRedirectCallback:function(t){Gt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),r["a"].config.productionTip=!1,new r["a"]({router:Gt,render:function(t){return t(st)}}).$mount("#app")},8160:function(t){t.exports=JSON.parse('{"c":"mlexperience.eu.auth0.com","b":"kKWMYTUjJwbRQh8tEGVoudMmODo95hKM","a":"http://www.justresumes.net:8000/api/private","d":"https://www.justresumes.net:8000"}')}});
//# sourceMappingURL=app.d57838fa.js.map