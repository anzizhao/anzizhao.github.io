webpackJsonp([8,12],{552:function(e,t,o){(function(e){!function(){var t=o(6),n=o(4),a=o(2),r=o(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return n.getRootInstances(a)},r)}();try{(function(){"use strict";function e(){return[{link:"http://www.koalac.com",title:"考拉先生",classname:"koalac",roles:[{name:"js研发工程师",job:"公司oa前端开发",skills:"Angularjs, restfulApi, requirejs"}]},{link:"http://www.hikvision.com/cn/index.html?jmode=j1",title:"海康威视数字",classname:"hikvision",roles:[{name:"c++研发工程师",job:"网络sdk的开发",skills:"c++, MFC, "}]}]}Object.defineProperty(t,"__esModule",{value:!0}),t.getPortfolio=e}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var n=o(5);n(e,o(1))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to portfolio.js: "+e.message)})}e.hot.dispose(function(o){o.makeHot=e.makeHot,o.foundReactClasses=t})}()}}).call(t,o(3)(e))},557:function(e,t,o){(function(e){!function(){var t=o(6),n=o(4),a=o(2),r=o(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return n.getRootInstances(a)},r)}();try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),c=n(s),u=o(552),f=o(95),p=n(f),m=function(e){function t(){return a(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=(0,u.getPortfolio)(),t=function(e){return e.map(function(e){return c["default"].createElement("div",{key:e.title,className:"role_wrapper clearfix"},c["default"].createElement("p",{className:"role"},e.name),c["default"].createElement("p",{className:"role_title"},e.job,c["default"].createElement("br",null),c["default"].createElement("span",{className:"role_skills"},e.skills)))})},o=e.map(function(e){var o=(0,p["default"])("portfolio_item","clearfix",e.classname);return c["default"].createElement("div",{key:e.title,className:o},c["default"].createElement("h2",null,c["default"].createElement("a",{href:e.link,target:"_blank"},"(visit site)")," ",e.title),t(e.roles))});return c["default"].createElement("div",{className:"posts"},o)}}]),t}(s.Component);t["default"]=m,e.exports=m}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var n=o(5);n(e,o(1))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to Portfolio.js: "+e.message)})}e.hot.dispose(function(o){o.makeHot=e.makeHot,o.foundReactClasses=t})}()}}).call(t,o(3)(e))}});
//# sourceMappingURL=8.8bundle.js.map