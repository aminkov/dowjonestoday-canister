(self.webpackChunkgatsby_gitbook_boilerplate=self.webpackChunkgatsby_gitbook_boilerplate||[]).push([[114],{2023:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(7294));function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=90,c=219,u=222,p=192,f=100,d=3e3,h="navigator"in n.g&&/Win/i.test(navigator.platform),y="navigator"in n.g&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),g="npm__react-simple-code-editor__textarea",m=function(e){function t(){var e,n,o;a(this,t);for(var i=arguments.length,g=Array(i),m=0;m<i;m++)g[m]=arguments[m];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(g))),o.state={capture:!0},o._recordCurrentState=function(){var e=o._input;if(e){var t=e.value,n=e.selectionStart,r=e.selectionEnd;o._recordChange({value:t,selectionStart:n,selectionEnd:r})}},o._getLines=function(e,t){return e.substring(0,t).split("\n")},o._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o._history,i=n.stack,a=n.offset;if(i.length&&a>-1){o._history.stack=i.slice(0,a+1);var s=o._history.stack.length;if(s>f){var l=s-f;o._history.stack=i.slice(l,s),o._history.offset=Math.max(o._history.offset-l,0)}}var c=Date.now();if(t){var u=o._history.stack[o._history.offset];if(u&&c-u.timestamp<d){var p=/[^a-z0-9]([a-z0-9]+)$/i,h=o._getLines(u.value,u.selectionStart).pop().match(p),y=o._getLines(e.value,e.selectionStart).pop().match(p);if(h&&y&&y[1].startsWith(h[1]))return void(o._history.stack[o._history.offset]=r({},e,{timestamp:c}))}}o._history.stack.push(r({},e,{timestamp:c})),o._history.offset++},o._updateInput=function(e){var t=o._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,o.props.onValueChange(e.value))},o._applyEdits=function(e){var t=o._input,n=o._history.stack[o._history.offset];n&&t&&(o._history.stack[o._history.offset]=r({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),o._recordChange(e),o._updateInput(e)},o._undoEdit=function(){var e=o._history,t=e.stack,n=e.offset,r=t[n-1];r&&(o._updateInput(r),o._history.offset=Math.max(n-1,0))},o._redoEdit=function(){var e=o._history,t=e.stack,n=e.offset,r=t[n+1];r&&(o._updateInput(r),o._history.offset=Math.min(n+1,t.length-1))},o._handleKeyDown=function(e){var t=o.props,n=t.tabSize,r=t.insertSpaces,i=t.ignoreTabKey,a=t.onKeyDown;if(!a||(a(e),!e.defaultPrevented)){27===e.keyCode&&e.target.blur();var s=e.target,f=s.value,d=s.selectionStart,g=s.selectionEnd,m=(r?" ":"\t").repeat(n);if(9===e.keyCode&&!i&&o.state.capture)if(e.preventDefault(),e.shiftKey){var v=o._getLines(f,d),b=v.length-1,_=o._getLines(f,g).length-1,C=f.split("\n").map((function(e,t){return t>=b&&t<=_&&e.startsWith(m)?e.substring(m.length):e})).join("\n");if(f!==C){var S=v[b];o._applyEdits({value:C,selectionStart:S.startsWith(m)?d-m.length:d,selectionEnd:g-(f.length-C.length)})}}else if(d!==g){var E=o._getLines(f,d),k=E.length-1,x=o._getLines(f,g).length-1,w=E[k];o._applyEdits({value:f.split("\n").map((function(e,t){return t>=k&&t<=x?m+e:e})).join("\n"),selectionStart:/\S/.test(w)?d+m.length:d,selectionEnd:g+m.length*(x-k+1)})}else{var O=d+m.length;o._applyEdits({value:f.substring(0,d)+m+f.substring(g),selectionStart:O,selectionEnd:O})}else if(8===e.keyCode){var j=d!==g;if(f.substring(0,d).endsWith(m)&&!j){e.preventDefault();var P=d-m.length;o._applyEdits({value:f.substring(0,d-m.length)+f.substring(g),selectionStart:P,selectionEnd:P})}}else if(13===e.keyCode){if(d===g){var K=o._getLines(f,d).pop().match(/^\s+/);if(K&&K[0]){e.preventDefault();var L="\n"+K[0],D=d+L.length;o._applyEdits({value:f.substring(0,d)+L+f.substring(g),selectionStart:D,selectionEnd:D})}}}else if(57===e.keyCode||e.keyCode===c||e.keyCode===u||e.keyCode===p){var I=void 0;57===e.keyCode&&e.shiftKey?I=["(",")"]:e.keyCode===c?I=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===u?I=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==p||e.shiftKey||(I=["`","`"]),d!==g&&I&&(e.preventDefault(),o._applyEdits({value:f.substring(0,d)+I[0]+f.substring(d,g)+I[1]+f.substring(g),selectionStart:d,selectionEnd:g+2}))}else!(y?e.metaKey&&e.keyCode===l:e.ctrlKey&&e.keyCode===l)||e.shiftKey||e.altKey?(y?e.metaKey&&e.keyCode===l&&e.shiftKey:h?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===l&&e.shiftKey)&&!e.altKey?(e.preventDefault(),o._redoEdit()):77!==e.keyCode||!e.ctrlKey||y&&!e.shiftKey||(e.preventDefault(),o.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),o._undoEdit())}},o._handleChange=function(e){var t=e.target,n=t.value,r=t.selectionStart,i=t.selectionEnd;o._recordChange({value:n,selectionStart:r,selectionEnd:i},!0),o.props.onValueChange(n)},o._history={stack:[],offset:-1},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.style,a=t.padding,s=t.highlight,l=t.textareaId,c=t.textareaClassName,u=t.autoFocus,p=t.disabled,f=t.form,d=t.maxLength,h=t.minLength,y=t.name,m=t.placeholder,b=t.readOnly,_=t.required,C=t.onClick,S=t.onFocus,E=t.onBlur,k=t.onKeyUp,x=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),w=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),O={paddingTop:a,paddingRight:a,paddingBottom:a,paddingLeft:a},j=s(n);return i.createElement("div",r({},w,{style:r({},v.container,o)}),i.createElement("textarea",{ref:function(t){return e._input=t},style:r({},v.editor,v.textarea,O),className:g+(c?" "+c:""),id:l,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:C,onKeyUp:k,onFocus:S,onBlur:E,disabled:p,form:f,maxLength:d,minLength:h,name:y,placeholder:m,readOnly:b,required:_,autoFocus:u,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),i.createElement("pre",r({className:x,"aria-hidden":"true",style:r({},v.editor,v.highlight,O)},"string"==typeof j?{dangerouslySetInnerHTML:{__html:j+"<br />"}}:{children:j})),i.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"}}))}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}}]),t}(i.Component);m.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t.Z=m;var v={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}},1740:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7294),o=n(2023),i=n(509),a=n(3376),s=n(6675),l=n(2941),c=n.n(l),u={plain:{color:"#C5C8C6",backgroundColor:"#1D1F21"},styles:[{types:["prolog","comment","doctype","cdata"],style:{color:"hsl(30, 20%, 50%)"}},{types:["property","tag","boolean","number","constant","symbol"],style:{color:"hsl(350, 40%, 70%)"}},{types:["attr-name","string","char","builtin","insterted"],style:{color:"hsl(75, 70%, 60%)"}},{types:["operator","entity","url","string","variable","language-css"],style:{color:"hsl(40, 90%, 60%)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["regex","important"],style:{color:"#e90"}},{types:["atrule","attr-value","keyword"],style:{color:"hsl(350, 40%, 70%)"}},{types:["punctuation","symbol"],style:{opacity:"0.7"}}]},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},g=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},m=function(e){var t=(0,r.useState)({code:e.code||""}),n=t[0],s=t[1];(0,r.useEffect)((function(){n.prevCodeProp&&e.code!==n.prevCodeProp&&s({code:e.code,prevCodeProp:e.code})}),[e.code]);(0,r.useEffect)((function(){e.onChange&&e.onChange(n.code)}),[n.code]);var l=e.style,c=e.theme,f=(e.onChange,y(e,["style","theme","onChange"])),h=n.code,g=c&&"object"===p(c.plain)?c.plain:{};return r.createElement(o.Z,d({value:h,padding:10,highlight:function(t){return r.createElement(i.ZP,{Prism:a.Z,code:t,theme:e.theme||u,language:e.language},(function(e){var t=e.tokens,n=e.getLineProps,o=e.getTokenProps;return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement("div",n({line:e,key:t}),e.map((function(e,t){return r.createElement("span",o({token:e,key:t}))})))})))}))},onValueChange:function(e){s({code:e})},style:d({whiteSpace:"pre",fontFamily:"monospace"},g,l)},f))},v=(0,r.createContext)({}),b={assign:c()},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=d({},t,{objectAssign:"_poly.assign",transforms:d({dangerousForOf:!0,dangerousTaggedTemplateString:!0},t.transforms)});return(0,s.v)(e,n).code},C=function(e,t){return function(n){function o(){return f(this,o),g(this,n.apply(this,arguments))}return h(o,n),o.prototype.componentDidCatch=function(e){t(e)},o.prototype.render=function(){return"function"==typeof e?r.createElement(e,null):e},o}(r.Component)},S=function(e,t){var n=Object.keys(t),o=n.map((function(e){return t[e]}));return(new(Function.prototype.bind.apply(Function,[null].concat(["_poly","React"],n,[e])))).apply(void 0,[b,r].concat(o))};function E(e){var t=e.children,n=e.code,o=e.language,i=e.theme,a=e.disabled,s=e.scope,l=e.transformCode,c=e.transpileOptions,u=e.noInline,p=void 0!==u&&u,f=(0,r.useState)({error:void 0,element:void 0}),h=f[0],y=f[1];function g(e){var t={code:l?l(e):e,scope:s,transpileOptions:c},n=function(e){return y({error:e.toString(),element:void 0})},r=function(e){return y({error:void 0,element:e})};try{p?(y({error:void 0,element:null}),function(e,t,n){var r=e.code,o=void 0===r?"":r,i=e.scope,a=void 0===i?{}:i,s=e.transpileOptions;if(!/render\s*\(/.test(o))return n(new SyntaxError("No-Inline evaluations must call `render`."));S(_(o,s),d({},a,{render:function(e){void 0===e?n(new SyntaxError("`render` must be called with valid JSX.")):t(C(e,n))}}))}(t,r,n)):r(function(e,t){var n=e.code,r=void 0===n?"":n,o=e.scope,i=void 0===o?{}:o,a=e.transpileOptions,s=r.trim().replace(/;$/,""),l=_("return ("+s+")",a).trim();return C(S(l,i),t)}(t,n))}catch(o){n(o)}}(0,r.useEffect)((function(){g(n)}),[n,s,p,l,c]);return r.createElement(v.Provider,{value:d({},h,{code:n,language:o,theme:i,disabled:a,onError:function(e){return y({error:e.toString()})},onChange:function(e){return g(e)}})},t)}function k(e){var t=(0,r.useContext)(v),n=t.code,o=t.language,i=t.theme,a=t.disabled,s=t.onChange;return r.createElement(m,d({theme:i,code:n,language:o,disabled:a,onChange:s},e))}function x(e){var t=(0,r.useContext)(v).error;return t?r.createElement("pre",e,t):null}function w(e){var t=e.Component,n=y(e,["Component"]),o=(0,r.useContext)(v).element;return r.createElement(t,n,o?r.createElement(o,null):null)}E.defaultProps={code:"",noInline:!1,language:"jsx",disabled:!1},w.defaultProps={Component:"div"};var O=n(3431),j=function(e){var t=e.code;return(0,O.tZ)(E,{code:t},(0,O.tZ)(k,null),(0,O.tZ)(x,null),(0,O.tZ)(w,null))}},4585:function(e,t,n){var r=n(1226);e.exports=r},1011:function(e,t,n){n(3642);var r=n(9612);e.exports=r.Object.assign},2941:function(e,t,n){e.exports=n(1587)},1587:function(e,t,n){var r=n(4585);e.exports=r},2280:function(e,t,n){"use strict";var r=n(4691),o=n(6957),i=n(6463),a=n(3235),s=n(8992),l=n(9140),c=n(6209),u=n(8415),p=n(8266),f=Object.assign,d=Object.defineProperty,h=o([].concat);e.exports=!f||a((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||s(f({},t)).join("")!=o}))?function(e,t){for(var n=u(e),o=arguments.length,a=1,f=l.f,d=c.f;o>a;)for(var y,g=p(arguments[a++]),m=f?h(s(g),f(g)):s(g),v=m.length,b=0;v>b;)y=m[b++],r&&!i(d,g,y)||(n[y]=g[y]);return n}:f},9612:function(e,t,n){var r=n(4075);e.exports=r},6297:function(e,t,n){"use strict";var r=n(7218).end,o=n(102);e.exports=o("trimEnd")?function(){return r(this)}:"".trimEnd},102:function(e,t,n){var r=n(946).PROPER,o=n(3235),i=n(9992);e.exports=function(e){return o((function(){return!!i[e]()||"​᠎"!=="​᠎"[e]()||r&&i[e].name!==e}))}},1097:function(e,t,n){"use strict";var r=n(7218).start,o=n(102);e.exports=o("trimStart")?function(){return r(this)}:"".trimStart},7218:function(e,t,n){var r=n(6957),o=n(6660),i=n(9018),a=n(9992),s=r("".replace),l="["+a+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),p=function(e){return function(t){var n=i(o(t));return 1&e&&(n=s(n,c,"")),2&e&&(n=s(n,u,"")),n}};e.exports={start:p(1),end:p(2),trim:p(3)}},9018:function(e,t,n){var r=n(5514),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},9992:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},3642:function(e,t,n){var r=n(8845),o=n(2280);r({target:"Object",stat:!0,arity:2,forced:Object.assign!==o},{assign:o})},7690:function(e,t,n){n(8347);var r=n(8845),o=n(6297);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==o},{trimEnd:o})},5818:function(e,t,n){var r=n(8845),o=n(1097);r({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==o},{trimLeft:o})},8347:function(e,t,n){var r=n(8845),o=n(6297);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==o},{trimRight:o})},7043:function(e,t,n){n(5818);var r=n(8845),o=n(1097);r({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==o},{trimStart:o})},1226:function(e,t,n){var r=n(1011);e.exports=r},1752:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1120);function o(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=(0,r.Z)(e)););return e}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=o(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},i.apply(null,arguments)}}}]);
//# sourceMappingURL=114-349b980209ed87052195.js.map