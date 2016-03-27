webpackJsonp([4,11],{166:function(e,t,a){(function(e){!function(){var t=a(7),n=a(5),o=a(2),r=a(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return n.getRootInstances(o)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){var a=arguments.length<=2||void 0===arguments[2]?null:arguments[2];return e.concat((0,s.times)((0,s.constant)(a),t-e.length))}var o=function(){function e(e,t){var a=[],n=!0,o=!1,r=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(i){o=!0,r=i}finally{try{!n&&s["return"]&&s["return"]()}finally{if(o)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),l=e(r),s=a(96),i=a(51),u=a(52),c={0:"red",1:"cyan",2:"green",3:"orange",4:"magenta",5:"blue",correct:"black",correctColor:"red"},d=l["default"].createClass({displayName:"Peg",onClick:function(e){e.stopPropagation();var t=e.target,a=t.getBoundingClientRect(),n=(a.top,a.left,a.width,a.height,this.props),o=(n.index,n.color,n.isEditable);n.changeColor,o&&this.props.showColorChooser(this.props.index,t)},render:function(){var e=this.props,t=e.color,a=e.isEditable,n="hole",o={};return null!==t&&(o={backgroundColor:c[t],borderColor:c[t]},n="peg"),a&&(o.cursor="pointer"),l["default"].createElement("div",{className:n,style:o,onClick:this.onClick})}}),p=l["default"].createClass({displayName:"ScorePeg",getType:function(e){var t=void 0,a=null;return"correct"===e?(t="small peg",a={backgroundColor:c.correct}):"correctColor"===e?(t="small peg",a={backgroundColor:c.correctColor}):t="small hole",[t,a]},render:function(){var e=this.getType(this.props.value),t=o(e,2),a=t[0],n=t[1];return l["default"].createElement("div",{className:a,style:n})}}),f=l["default"].createClass({displayName:"Scores",convertScore:function(e){if(!e)return[null,null,null,null];var t=e.get("correct",0),a=e.get("correctColor",0);return n((0,s.times)(t,(0,s.constant)("correct")).concat((0,s.times)(a,(0,s.constant)("correctColor"))),4)},render:function(){var e=this.convertScore(this.props.score),t=o(e,4),a=t[0],n=t[1],r=t[2],s=t[3];return l["default"].createElement("div",{className:"score"},l["default"].createElement("div",null,l["default"].createElement(p,{value:a}),l["default"].createElement(p,{value:n})),l["default"].createElement("div",null,l["default"].createElement(p,{value:r}),l["default"].createElement(p,{value:s})))}}),m=l["default"].createClass({displayName:"Row",allPegsSet:function(e){return e.get("pegs").every(function(e){return null!==e})},scoresOrEvaluteButton:function(e,t,a,n){return!t&&n?l["default"].createElement("div",{className:"score"},l["default"].createElement("button",{className:"checkButton",disabled:!(a&&this.allPegsSet(e)),onClick:this.props.score},"Check")):l["default"].createElement(f,{score:e.get("score")})},render:function(){var e=this.props,t=e.row,a=e.isGameOver,n=e.isEditable,o=e.isCurrentRow,r=e.showColorChooser;return l["default"].createElement("div",{className:"row"},l["default"].createElement("div",{className:"holes"},t.get("pegs").map(function(e,t){return l["default"].createElement(d,{key:t,index:t,isEditable:n,color:e,showColorChooser:r})})),this.scoresOrEvaluteButton(t,a,n,o))}}),h=l["default"].createClass({displayName:"ColorChooser",getInitialState:function(){return{isShowing:!1,style:{display:"none"}}},show:function(e){if(this.state.isShowing&&e===this.state.showingForEl)return void this.close();var t=void 0,a=void 0,n=e.getBoundingClientRect();t=window.scrollY+n.top+n.height/2,a=n.right-n.width/2,this.setState({showingForEl:e,isShowing:!0,style:{display:"block",top:t,left:a}})},close:function(){this.setState({style:{display:"none"},isShowing:!1})},colorClick:function(e){this.props.changeColor(e),this.close()},render:function(){var e=this,t=(this.props.changeColor,function(t){return l["default"].createElement("div",{className:"color",onClick:function(){return e.colorClick(t)},style:{backgroundColor:c[t]}})});return l["default"].createElement("div",{id:"colorChooser",style:this.state.style},l["default"].createElement("div",null,t(0),t(1),t(2)),l["default"].createElement("div",null,t(3),t(4),t(5)))}}),g=l["default"].createClass({displayName:"Board",showColorChooser:function(e,t){this.refs.colorChooser.show(t),this.pegIdx=e},render:function(){var e=this,t=this.props,a=t.game,n=t.dispatch,o=this.props.hasOwnProperty("editable")?this.props.editable:!0,r=a.get("rows"),s=a.get("state");if(!r)return l["default"].createElement("div",{id:"board"});var c=r.findIndex(function(e){return!e.get("score")}),d=function(){};return l["default"].createElement("div",{className:"mainPanel"},r.map(function(t,a){return l["default"].createElement(m,{key:a,isGameOver:(0,u.isGameOver)(s),isEditable:o&&!(0,u.isGameOver)(s)&&c===a,isCurrentRow:c===a,row:t,showColorChooser:o?e.showColorChooser:d,score:function(){return o?n((0,i.scoreGuess)(a)):d}})}),l["default"].createElement(h,{ref:"colorChooser",changeColor:function(t){return n((0,i.changeColor)(c,e.pegIdx,t))}}))}});t["default"]=g}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var n=a(6);n(e,a(1))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to board.jsx: "+e.message)})}e.hot.dispose(function(a){a.makeHot=e.makeHot,a.foundReactClasses=t})}()}}).call(t,a(4)(e))},167:function(e,t,a){(function(e){!function(){var t=a(7),n=a(5),o=a(2),r=a(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return n.getRootInstances(o)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),o=e(n),r=a(52),l=o["default"].createClass({displayName:"GameOverDialog",render:function(){var e=this.props,t=e.gameState,a=e.newGame,n=this.props.hasOwnProperty("buttonText")?this.props.buttonText:"Play another game",l={msg:{fontSize:24,marginBottom:20},button:{fontSize:18,padding:12}};return o["default"].createElement("div",{id:"dialog"},o["default"].createElement("div",null,o["default"].createElement("div",{style:l.msg},t===r.STATES.WON?"You won!":"You lost!"),o["default"].createElement("button",{style:l.button,onClick:a},n)))}});t["default"]=l}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var n=a(6);n(e,a(1))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to game-over-dialog.jsx: "+e.message)})}e.hot.dispose(function(a){a.makeHot=e.makeHot,a.foundReactClasses=t})}()}}).call(t,a(4)(e))},561:function(e,t,a){(function(e){!function(){var t=a(7),n=a(5),o=a(2),r=a(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return n.getRootInstances(o)},r)}();try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return{games:e.mastermind.game.get("replayableGames"),replay:e.mastermind.replay}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),l=n(r),s=a(29),i=a(96),u=a(166),c=n(u),d=a(167),p=n(d),f=a(52),m=a(51),h={toolbar:{border:"2px solid #f2f2f2",backgroundColor:"#f2f2f2",width:310,position:"fixed",bottom:50,textAlign:"center",padding:5},button:{height:40,padding:2,margin:4},img:{verticalAlign:"middle",height:36}},g=l["default"].createClass({displayName:"ReplayAutoPlayToolBar",render:function(){function e(e){return r===e?(0,i.merge)({},c.speedUpButton,{fontWeight:"bold"}):c.speedUpButton}function t(e){var t=Math.floor(e/1e3);return t>60?">1m":(0===t?t="<0":10>t&&(t=" "+t),t+"s")}var a=this.props,n=a.stop,o=a.skip,r=a.speed,s=a.setSpeed,u=a.nextEventIn,c=(0,i.merge)({},h,{speedUpButton:{height:40,margin:1}}),d=t(u);return l["default"].createElement("div",{id:"replayToolbar",style:c.toolbar},l["default"].createElement("button",{style:c.button,onClick:n},l["default"].createElement("img",{style:c.img,src:"img/ic_stop_black_48dp.png",alt:"Stop",title:"Stop"})),l["default"].createElement("span",{style:{paddingLeft:12,fontFamily:"Courier"}},d),l["default"].createElement("button",{style:c.button,onClick:o},l["default"].createElement("img",{style:c.img,src:"img/ic_skip_next_black_48dp.png",alt:"Skip",title:"Skip"})),l["default"].createElement("span",{style:{paddingLeft:12}}),l["default"].createElement("button",{style:e(1),onClick:function(){return s(1)}},"1x"),l["default"].createElement("button",{style:e(2),onClick:function(){return s(2)}},"2x"),l["default"].createElement("button",{style:e(4),onClick:function(){return s(4)}},"4x"),l["default"].createElement("button",{style:e(8),onClick:function(){return s(8)}},"8x"))}}),y=l["default"].createClass({displayName:"ReplayManualToolBar",render:function(){var e=this.props,t=e.play,a=e.start,n=e.next,o=e.prev,r=e.end,s=h;return l["default"].createElement("div",{id:"replayToolbar",style:s.toolbar},l["default"].createElement("button",{style:s.button,onClick:t},l["default"].createElement("img",{style:s.img,src:"img/ic_play_arrow_black_48dp.png",alt:"Autoplay",title:"Autoplay"})),l["default"].createElement("span",{style:{paddingLeft:12}}),l["default"].createElement("button",{style:s.button,onClick:a},l["default"].createElement("img",{style:s.img,src:"img/ic_fast_rewind_black_48dp.png",alt:"Skip to Start",title:"Skip to Start"})),l["default"].createElement("button",{style:s.button,onClick:o},l["default"].createElement("img",{style:s.img,src:"img/ic_skip_previous_black_48dp.png",alt:"Previous",title:"Previous"})),l["default"].createElement("button",{style:s.button,onClick:n},l["default"].createElement("img",{style:s.img,src:"img/ic_skip_next_black_48dp.png",alt:"Next",title:"Next"})),l["default"].createElement("button",{style:s.button,onClick:r},l["default"].createElement("img",{style:s.img,src:"img/ic_fast_forward_black_48dp.png",alt:"Skip to the End",title:"Skip to the End"})))}}),v=l["default"].createClass({displayName:"ReplayPage",getInitialState:function(){return{manualControl:!0,nextEventIn:null,speed:1}},componentDidMount:function(){this.props.dispatch((0,m.replayGame)(this.props.params.gameId)),this.props.dispatch((0,m.replayNext)(this.props.params.gameId))},componentWillUnmount:function(){this.unschedule()},switchToAutoplay:function(){this.setState({manualControl:!1})},switchToManualControl:function(){this.setState({manualControl:!0})},unschedule:function(){this.timeoutHandler&&clearTimeout(this.timeoutHandler)},setSpeed:function(e){this.setState({speed:e})},skip:function(){this.unschedule(),this.scheduleNext(!0)},stop:function(){this.unschedule(),this.switchToManualControl()},play:function(){var e=this,t=this.props,a=t.dispatch,n=t.replay;(0,f.isGameOver)(n.getIn(["game","state"]))&&(this.setState({speed:1}),a((0,m.replayMoveToStart)())),this.switchToAutoplay(),setTimeout(function(){return e.scheduleNext()},0)},scheduleNext:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],a=this.props,n=a.dispatch,o=a.replay,r=o.get("gameReplayed"),l=o.get("replayPosition"),s=function(e,t){return e+1===t.get("states").count()};if(s(l,r))return void this.switchToManualControl();var i=r.getIn(["states",l]),u=r.getIn(["states",l+1]),c=new Date(u.get("at")).getTime()-new Date(i.get("at")).getTime(),d=t?0:c/this.state.speed;this.setState({nextEventIn:d}),this.timeoutHandler=setTimeout(function(){n((0,m.replayNext)()),e.scheduleNext()},d)},render:function(){var e=this.props,t=e.dispatch,a=e.replay,n=a.get("gameReplayed"),o=a.get("showGameOverDialog",!0);if(!n)return l["default"].createElement("div",{style:{textAlign:"center"},className:"mainPanel"},l["default"].createElement("span",null,"No such game"));var r=n.get("name"),s=new Date(n.get("states").first().get("at")).toLocaleString(),i=a.get("game"),u=i.get("state");return l["default"].createElement("div",{className:"mainPanel"},l["default"].createElement("div",{style:{textAlign:"center"}},"Game played by ",l["default"].createElement("br",null),l["default"].createElement("strong",null,r),l["default"].createElement("br",null)," at ",l["default"].createElement("br",null),l["default"].createElement("em",null,s)),this.state.manualControl?l["default"].createElement(y,{play:this.play,start:function(){return t((0,m.replayMoveToStart)())},prev:function(){return t((0,m.replayPrev)())},next:function(){return t((0,m.replayNext)())},end:function(){return t((0,m.replayMoveToEnd)())}}):l["default"].createElement(g,{skip:this.skip,stop:this.stop,speed:this.state.speed,setSpeed:this.setSpeed,nextEventIn:this.state.nextEventIn}),l["default"].createElement(c["default"],{game:i,editable:!1}),(0,f.isGameOver)(u)&&o?l["default"].createElement(p["default"],{buttonText:"OK",gameState:u,newGame:function(){return t((0,m.replayHideGameOverDialog)())}}):null)}}),C=(0,s.connect)(o)(v);t["default"]=C,e.exports=C}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var n=a(6);n(e,a(1))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to replay.jsx: "+e.message)})}e.hot.dispose(function(a){a.makeHot=e.makeHot,a.foundReactClasses=t})}()}}).call(t,a(4)(e))}});
//# sourceMappingURL=4.4bundle.js.map