(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(145),i=n(150);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("h1",null,"Hi from the second page"),o.a.createElement("p",null,"Welcome to page 2"),o.a.createElement(a.Link,{to:"/"},"Go back to the homepage"))}},143:function(e,t,n){"use strict";var r=n(33);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=r(n(151)),a=r(n(152)),i=r(n(7)),u=r(n(48)),s=r(n(49)),c=r(n(4)),l=r(n(0)),f=n(15),p=n(145);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),y=d(n);return l.default.createElement(f.Link,(0,a.default)({to:y,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(n,{state:c,replace:m})),!0}},h))},t}(l.default.Component);h.propTypes=(0,a.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var y=h;t.default=y;var v=function(e,t){window.___navigate(d(e),t)};t.navigate=v;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},144:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(147),i=n.n(a),u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f={},p=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=n.join("-");return r&&(o+="-"+r),f[o]?e(t,n,r+1):(f[o]=t,o)},d="@@loadable-components/loadable";var m=function(e){return e.default||e},h=function(){return null};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ErrorComponent,r=void 0===n?h:n,a=t.LoadingComponent,f=void 0===a?h:a,y=t.render,v=t.modules,g=t.asyncMode,b=function(t){function n(e){u(this,n);var r=l(this,t.call(this,e));return r.state={Component:n.Component,error:null,loading:!n.Component},r.mounted=!1,r.loadingPromise=null,"undefined"!=typeof window&&null===r.state.Component&&null===r.loadingPromise&&(r.loadingPromise=n.load().then(function(e){r.safeSetState({Component:e,loading:!1})}).catch(function(e){r.safeSetState({error:e,loading:!1})})),r}return c(n,t),n.load=function(){return n.loadingPromise||(n.loadingPromise=e().then(function(e){var t,r=m(e);return n.Component=r,i()(n,r,((t={Component:!0,loadingPromise:!0,load:!0})[d]=!0,t.componentId=!0,t)),r}).catch(function(e){throw n.loadingPromise=null,e})),n.loadingPromise},n.prototype.componentDidMount=function(){this.mounted=!0},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.safeSetState=function(e){this.mounted&&this.setState(e)},n.prototype.render=function(){var e=this.state,t=e.Component,n=e.error;if("function"==typeof y)return y(s({},this.state,{ownProps:this.props}));if(null!==t)return o.a.createElement(t,this.props);if(null!==n)return o.a.createElement(r,{error:n,ownProps:this.props});if(g)throw this.loadingPromise;return o.a.createElement(f,this.props)},n}(o.a.Component);if(b.Component=null,b.loadingPromise=null,b[d]=function(){return b},v){var w=p(b,v);b.componentId=w}return b}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),u=n(143),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(146),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var f=n(34);n.d(t,"parsePath",function(){return f.a});var p=o.a.createContext({}),d=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,n){var r;e.exports=(r=n(153))&&r.default||r},147:function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(148),i=(n(0),{childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0}),u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s=o({},a.ForwardRef,(o(r={},"$$typeof",!0),o(r,"render",!0),r)),c=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var o=d(n);o&&o!==m&&e(t,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var h=s[t.$$typeof]||i,y=s[n.$$typeof]||i,v=0;v<a.length;++v){var g=a[v];if(!(u[g]||r&&r[g]||y&&y[g]||h&&h[g])){var b=p(n,g);try{c(t,g,b)}catch(e){}}}return t}return t}},148:function(e,t,n){"use strict";e.exports=n(149)},149:function(e,t,n){"use strict";
/** @license React v16.5.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.placeholder"):60113;function m(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case i:case s:case u:return e;default:switch(e=e&&e.$$typeof){case l:case p:case c:return e;default:return t}}case a:return t}}}t.typeOf=m,t.AsyncMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=p,t.Fragment=i,t.Profiler=s,t.Portal=a,t.StrictMode=u,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===s||e===u||e===d||"object"==typeof e&&null!==e&&("function"==typeof e.then||e.$$typeof===c||e.$$typeof===l||e.$$typeof===p)},t.isAsyncMode=function(e){return m(e)===f},t.isContextConsumer=function(e){return m(e)===l},t.isContextProvider=function(e){return m(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return m(e)===p},t.isFragment=function(e){return m(e)===i},t.isProfiler=function(e){return m(e)===s},t.isPortal=function(e){return m(e)===a},t.isStrictMode=function(e){return m(e)===u}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(144),o=Object(r.a)(function(){return Promise.all([n.e(9),n.e(8)]).then(n.bind(null,156))})},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},152:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},153:function(e,t,n){"use strict";n.r(t);n(35);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),u=n(50),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-page-2-js-449e60ce7a9957200936.js.map