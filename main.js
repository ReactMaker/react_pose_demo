!function(e){function t(t){for(var a,l,s=t[0],u=t[1],i=t[2],c=0,d=[];c<s.length;c++)l=s[c],n[l]&&d.push(n[l][0]),n[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(_&&_(t);d.length;)d.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={1:0},o=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var _=u;o.push([349,0]),r()}({166:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.Button=t.Item=t.Fade=t.DraggableCircle=void 0;var a,n=i(r(165)),o=(0,n.default)(["\n  padding: 20px;\n  margin: 10px 0;\n  border: 1px solid #ccc;\n  color: #555;\n"],["\n  padding: 20px;\n  margin: 10px 0;\n  border: 1px solid #ccc;\n  color: #555;\n"]),l=(0,n.default)(["\n  margin: 10px;\n"],["\n  margin: 10px;\n"]),s=i(r(99)),u=i(r(158));function i(e){return e&&e.__esModule?e:{default:e}}(a=r(7).enterModule)&&a(e);var _,c,d=t.DraggableCircle=s.default.circle({draggable:!0}),f=t.Fade=s.default.div({enter:{opacity:1},exit:{opacity:0}}),p=t.Item=(0,u.default)(f)(o),m=t.Button=u.default.button(l);_=r(7).default,c=r(7).leaveModule,_&&(_.register(d,"DraggableCircle","/Users/hyman/test/simple_react_start_kit/src/containers/Home/style.js"),_.register(f,"Fade","/Users/hyman/test/simple_react_start_kit/src/containers/Home/style.js"),_.register(p,"Item","/Users/hyman/test/simple_react_start_kit/src/containers/Home/style.js"),_.register(m,"Button","/Users/hyman/test/simple_react_start_kit/src/containers/Home/style.js"),c(e))}).call(this,r(41)(e))},243:function(e,t){},244:function(e,t){},279:function(e,t){},281:function(e,t){},337:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _toConsumableArray2=__webpack_require__(336),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_getPrototypeOf=__webpack_require__(319),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(316),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(315),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(311),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(295),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(3),_react2=_interopRequireDefault(_react),_randomstring=__webpack_require__(287),_randomstring2=_interopRequireDefault(_randomstring),_reactPose=__webpack_require__(99),_style=__webpack_require__(166),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__(7).enterModule,enterModule&&enterModule(module);var Main=function(_Component){function Main(){var e,t,r,a;(0,_classCallCheck3.default)(this,Main);for(var n=arguments.length,o=Array(n),l=0;l<n;l++)o[l]=arguments[l];return t=r=(0,_possibleConstructorReturn3.default)(this,(e=Main.__proto__||(0,_getPrototypeOf2.default)(Main)).call.apply(e,[this].concat(o))),r.state={items:[]},r.addItem=function(){var e={id:Math.random(),name:_randomstring2.default.generate()};r.setState({items:[].concat((0,_toConsumableArray3.default)(r.state.items),[e])})},r.shuffle=function(){for(var e=[];r.state.items.length;){var t=Math.floor(Math.random()*r.state.items.length);e.push(r.state.items.splice(t,1)[0])}r.setState({items:e})},r.removeItem=function(){var e=Math.floor(Math.random()*r.state.items.length);r.state.items.splice(e,1),r.setState({items:[].concat((0,_toConsumableArray3.default)(r.state.items))})},a=t,(0,_possibleConstructorReturn3.default)(r,a)}return(0,_inherits3.default)(Main,_Component),(0,_createClass3.default)(Main,[{key:"render",value:function(){var e=this.state.items;return _react2.default.createElement(_react.Fragment,null,_react2.default.createElement(_style.Button,{onClick:this.addItem},"add item"),_react2.default.createElement(_style.Button,{onClick:this.shuffle},"shuffle"),_react2.default.createElement(_style.Button,{onClick:this.removeItem},"remove item"),_react2.default.createElement(_reactPose.PoseGroup,null,e.map(function(e){return _react2.default.createElement(_style.Item,{key:e.id},e.name)})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Main}(_react.Component),reactHotLoader,leaveModule;exports.default=Main,reactHotLoader=__webpack_require__(7).default,leaveModule=__webpack_require__(7).leaveModule,reactHotLoader&&(reactHotLoader.register(Main,"Main","/Users/hyman/test/simple_react_start_kit/src/containers/Home/Home.js"),leaveModule(module))}).call(this,__webpack_require__(41)(module))},338:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a,n,o=r(337),l=(a=o)&&a.__esModule?a:{default:a};(n=r(7).enterModule)&&n(e);var s,u,i=l.default;t.default=i,s=r(7).default,u=r(7).leaveModule,s&&(s.register(i,"default","/Users/hyman/test/simple_react_start_kit/src/containers/index.js"),u(e))}).call(this,r(41)(e))},349:function(e,t,r){"use strict";(function(e){var t,a=l(r(3)),n=l(r(347)),o=r(7);function l(e){return e&&e.__esModule?e:{default:e}}(t=r(7).enterModule)&&t(e);var s,u,i=function(){var e=r(338).default;n.default.render(a.default.createElement(o.AppContainer,null,a.default.createElement(e,null)),document.getElementById("app"))};i(),s=r(7).default,u=r(7).leaveModule,s&&(s.register(i,"render","/Users/hyman/test/simple_react_start_kit/src/index.js"),u(e))}).call(this,r(41)(e))}});