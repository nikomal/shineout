(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[13],{1342:function(e,n,t){"use strict";var o=t(12),l=t(15),a=t(4),r=t(5),i=t(8),d=t(2),c=t(18),s=t(7),h=t(1),u=t(0),g=t.n(u),p=t(14),v=t.n(p),m=t(19),f=t(37),b=t(268),y=t(11),k=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleNodeClick=n.handleNodeClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleNodeClick",value:function(e){var n=this.props.datum.getPath(e).path;this.props.onPathChange(e,null,n)}},{key:"renderClear",value:function(){var e=this.props,n=e.clearable,t=e.value,a=e.disabled,r=e.onClear,i=v()(Object(y.x)("indicator","close"),Object(y.f)("close"));return n&&0<t.length&&!a?g.a.createElement("a",{className:i,href:"javascript:;",onClick:r}):null}},{key:"renderPlaceholder",value:function(){return g.a.createElement("span",{className:v()(Object(y.n)("placeholder"),Object(y.x)("ellipsis"))},this.props.placeholder," ")}},{key:"renderResult",value:function(){var a=this,e=this.props,n=e.datum,r=e.value,t=e.renderItem,i=e.renderResult,d=r.map(function(e){return n.getDataById(e)}),o=i||t;return"string"==typeof o&&(o=function(e){return e[o]}),d.map(function(e,n){var t=e&&o(e);return t?g.a.createElement("a",{className:Object(y.f)("item"),onClick:a.handleNodeClick.bind(a,r[n]),key:n},t):null})}},{key:"render",value:function(){var e=this.props,n=e.style,t=0===e.value.length?this.renderPlaceholder():this.renderResult();return g.a.createElement("div",{className:Object(y.f)("result"),style:n},t,!this.props.multiple&&g.a.createElement("a",{className:Object(y.x)("indicator","caret"),href:"javascript:;"}),this.renderClear())}}]),t}(u.PureComponent);k.defaultProps={value:[]};var C=k,j=t(284),O=t(67),x={marginRight:8,marginTop:-1,verticalAlign:"top"},I=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={loading:!1},n.handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handlePathChange=n.handlePathChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"checkDisabled",value:function(){var e=this.props,n=e.datum,t=e.id;return!!e.disabled||n.isDisabled(t)}},{key:"handleClick",value:function(){var e=this.props,n=e.id,t=e.data,a=e.path,r=e.onChange,i=e.onPathChange,d=e.loader,o=e.multiple;i(n,t,a),o||r([].concat(Object(l.a)(a),[n])),d&&!this.state.loading&&(this.setState({loading:!0}),d(n,t))}},{key:"handlePathChange",value:function(){var e=this.props,n=e.id,t=e.data,a=e.path;(0,e.onPathChange)(n,t,a)}},{key:"handleChange",value:function(e,n){var t=this.props,a=t.datum,r=t.id,i=t.onChange;a.set(r,n?1:0),i(a.getValue())}},{key:"renderContent",value:function(){var e=this.props,n=e.id,t=e.active,a=e.data,r=e.renderItem;return("function"==typeof r?r:function(e){return e[r]})(a,t,n)}},{key:"render",value:function(){var e=this.props,n=e.active,t=e.data,a=e.multiple,r=e.datum,i=e.id,d=e.loader,o=e.expandTrigger,l=this.state.loading,c=this.checkDisabled(),s=Object(y.f)("node",n&&"active",c&&"disabled",t.children&&0<t.children.length&&"has-children",d&&!l&&void 0===t.children&&"may-be-children"),h={},u={};return c||"hover-only"===o&&t.children&&0!==t.children.length||(u.onClick=this.handleClick,h.cursor="pointer"),"hover"!==o&&"hover-only"!==o||(u.onMouseEnter=this.handlePathChange),g.a.createElement("div",Object.assign({className:s,style:h},u),a&&g.a.createElement(j.a,{checked:r.getChecked(i),disabled:c,onChange:this.handleChange,style:x}),this.renderContent(),l&&void 0===t.children&&g.a.createElement(O.a,{className:Object(y.f)("loading"),size:10,name:"ring"}))}}]),t}(m.b),w=t(31),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={},n.getText=n.getText.bind(Object(h.a)(Object(h.a)(n))),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"getKey",value:function(e,n){var t=this.props,a=t.keygen,r=t.parentId;return"function"==typeof a?a(e,r):a?e[a]:r+(r?",":"")+n}},{key:"getText",value:function(e){return this.props.text[e]||Object(w.a)(e)}},{key:"render",value:function(){var a=this,e=this.props,n=e.data,r=Object(o.a)(e,["data"]);return n&&0!==n.length?g.a.createElement("div",{className:Object(y.f)("list")},n.map(function(e,n){var t=a.getKey(e,n);return g.a.createElement(I,Object.assign({},r,{key:t,active:r.id===t,id:t,data:e}))})):g.a.createElement("span",{className:Object(y.f)("no-data")},this.getText("noData"))}}]),t}(u.Component);E.defaultProps={id:"",parentId:"",text:{}};var R=E,T=t(64),S=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={focus:!1,path:[],position:"drop-down"},n.datum=new b.a({data:e.data,loader:e.loader,keygen:e.keygen,mode:e.mode,onChange:e.onChange,value:e.value||e.defaultValue,disabled:"function"==typeof e.disabled?e.disabled:void 0}),n.isRendered=!1,n.selectId="select_".concat(Object(f.b)()),n.handleFocus=n.handleState.bind(Object(h.a)(Object(h.a)(n)),!0),n.handleBlur=n.handleState.bind(Object(h.a)(Object(h.a)(n)),!1),n.handleClickAway=n.handleClickAway.bind(Object(h.a)(Object(h.a)(n))),n.handlePathChange=n.handlePathChange.bind(Object(h.a)(Object(h.a)(n))),n.handleClear=n.handleClear.bind(Object(h.a)(Object(h.a)(n))),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){this.datum.mode=this.props.mode,e.value!==this.props.value&&this.datum.setValue(this.props.value||[]),e.data!==this.props.data&&this.datum.setData(this.props.data)}},{key:"componentWillUnmount",value:function(){Object(c.a)(Object(d.a)(t.prototype),"componentWillUnmount",this).call(this),this.clearClickAway()}},{key:"bindClickAway",value:function(){document.addEventListener("click",this.handleClickAway)}},{key:"clearClickAway",value:function(){document.removeEventListener("click",this.handleClickAway)}},{key:"handleClickAway",value:function(e){(function e(n,t){return n.getAttribute("data-id")===t||!!n.parentElement&&e(n.parentElement,t)})(e.target,this.selectId)||this.handleState(!1)}},{key:"handlePathChange",value:function(e,n,t){var a=this;setTimeout(function(){a.setState({path:[].concat(Object(l.a)(t),[e])})},50)}},{key:"handleClear",value:function(){var e=this,n=this.props,t=n.mode,a=n.onChange;void 0===t?this.setState({path:[]}):this.datum.setValue([]),a([]),setTimeout(function(){return e.handleState(!1)},10)}},{key:"handleState",value:function(e){if(!0!==this.props.disabled&&e!==this.state.focus){var n=this.props,t=n.onBlur,a=n.onFocus,r=n.height,i=this.props.position;if(!i)T.b.height<r+this.element.getBoundingClientRect().bottom&&(i="drop-up");this.setState({focus:e,position:i||"drop-down"}),e?(this.bindClickAway(),this.renderPending=!1,a()):(this.clearClickAway(),t())}}},{key:"renderList",value:function(){var a=this,e=this.props,n=e.data,t=e.keygen,r=e.renderItem,i=e.height,d=e.mode,o=e.onChange,l=e.loader,c=e.onItemClick,s=e.expandTrigger,h=this.state,u=h.focus,p=h.path;if(!u&&!this.isRendered)return null;this.isRendered=!0;var m={datum:this.datum,renderItem:r,keygen:t,loader:l,onPathChange:this.handlePathChange,onChange:o,onItemClick:c,multiple:void 0!==d,expandTrigger:s},f=v()(Object(y.x)("options"),Object(y.f)("options")),b=n;return g.a.createElement("div",{className:f,style:0===n.length?{height:"auto",width:"100%"}:{height:i}},g.a.createElement(R,Object.assign({},m,{key:"root",data:b,id:p[0],parentId:"",path:[]})),p.map(function(n,t){return(b=b.find(function(e){return a.datum.getKey(e,p[t-1])===n}))&&b.children&&0<b.children.length?(b=b.children,g.a.createElement(R,Object.assign({},m,{key:n,data:b,id:p[t+1],parentId:p[t],path:p.slice(0,t+1)}))):null}))}},{key:"render",value:function(){var n=this,e=this.props,t=e.placeholder,a=e.disabled,r=e.size,i=Object(o.a)(e,["placeholder","disabled","size"]),d=v()(Object(y.f)("_",r,this.state.focus&&"focus",a&&"disabled"),Object(y.x)(this.state.position));return g.a.createElement("div",{className:d,onClick:this.handleFocus,"data-id":this.selectId,ref:function(e){n.element=e}},g.a.createElement(C,Object.assign({},i,{multiple:void 0!==i.mode,datum:this.datum,placeholder:t,onClear:this.handleClear,onPathChange:this.handlePathChange})),this.renderList())}}]),t}(m.b);S.defaultProps={clearable:!0,expandTrigger:"click",height:300,data:[],mode:1};var P=S,N=t(51),D=t(48),A=t(13),W=Object(A.a)(N.a,Object(D.a)({className:Object(y.x)("_"),tag:"span"}))(P);W.displayName="ShineoutCascader";n.a=W},284:function(e,n,t){"use strict";var a=t(51),r=t(13),l=t(228),i=t(66),d=t(4),o=t(5),c=t(8),s=t(2),h=t(18),u=t(7),p=t(1),m=t(0),f=t.n(m),b=t(14),g=t.n(b),v=t(19),y=t(37),k=t(3),C=t(226),j=t(11),O=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n.handleUpdate=n.handleUpdate.bind(Object(p.a)(Object(p.a)(n))),n.handleRawChange=n.handleRawChange.bind(Object(p.a)(Object(p.a)(n))),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(h.a)(Object(s.a)(t.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(k.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(h.a)(Object(s.a)(t.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(k.a,this.handleUpdate)}},{key:"getContent",value:function(e){var n=this.props.renderItem;return"string"==typeof n?e[n]:"function"==typeof n?n(e):""}},{key:"handleUpdate",value:function(){this.forceUpdate()}},{key:"handleClick",value:function(e,n,t){var a=this.props,r=a.data,i=a.datum;n?i.add(r[t]):i.remove(r[t])}},{key:"handleRawChange",value:function(e,n){var t=this.props.datum;n?t.add(e):t.remove(e)}},{key:"render",value:function(){var t=this,e=this.props,n=e.block,a=e.data,r=e.datum,i=e.keygen,d=e.children,o=g()(Object(j.g)("group",n&&"block"),this.props.className);return void 0===a?f.a.createElement("div",{className:o},f.a.createElement(C.a,{value:{onRawChange:this.handleRawChange,checked:r.check.bind(r)}},d)):f.a.createElement("div",{className:o},a.map(function(e,n){return f.a.createElement(l.a,{checked:r.check(e),disabled:r.disabled(e),key:Object(y.a)(e,i,n),htmlValue:n,index:n,onChange:t.handleClick},t.getContent(e))}),d)}}]),t}(v.b);O.defaultProps={renderItem:function(e){return e}};var x=O,I=Object(r.a)(a.a,C.b)(l.a);I.Group=Object(r.a)(a.a,i.a.hoc({bindProps:["disabled","format","prediction"]}))(x),I.Checkbox=l.a,I.displayName="ShineoutCheckbox",I.Group.displayName="ShineoutCheckboxGroup";n.a=I},523:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(214),d=t(215),o=t(20),l=t(524),c=t.n(l),s=t(525),h=t.n(s),u=Object(o.b)(c.a,h.a),p=[{name:"01-base",title:Object(o.b)("基本用法 \n 基础的级联用法","Base \n Basic usage of Cascader"),component:t(526).default,rawText:t(542)},{name:"02-multiple",title:Object(o.b)("多选 \n 设置 mode 属性，使组件变为多选，mode 可选值如下 \n 0: 只返回完全选中的节点，包含父节点 \n 1: 返回全部选中的节点和半选中的父节点 \n 2: 只返回选中的子节点 \n 3: 如果父节点选中，只返回父节点","Multiple \n Set the mode property change the component to multiple select \n 0: Return only the fully selected node, including the parent node. \n 1: Return the fully selected nodes and semi-selected parent nodes. \n 2: Return only the selected child node. \n 3: Return only the parent node, if the parent node is selected."),component:t(543).default,rawText:t(544)},{name:"03-hover",title:Object(o.b)("移入展开 \n 设置 expandTrigger 为 'hover' 或 'hover-only', 可以在鼠标移入节点时展开，默认为 'click' \n 如果值为 'hover-only'，父节点只能 hover 触发展开, 只有子节点可以点击选择值","Hover \n Set expandTrigger to 'hover' or 'hover-only', expand the node when mouse hover, default value is 'click'."),component:t(545).default,rawText:t(546)},{name:"04-disabled",title:Object(o.b)("禁用 \n disabled 为函数时，根据返回结果禁用节点，同时禁用子节点 \n disabled 为 true 时，禁用全部节点","disabled \n When the disabled property is a function, disable the node and its child nodes according to the returned result. \n When the disabled property is true, disable all nodes."),component:t(547).default,rawText:t(548)},{name:"05-lazyload",title:Object(o.b)("动态加载 \n 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数","Lazy load \n Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded."),component:t(549).default,rawText:t(550)}];n.default=Object(i.a)(function(e){return r.a.createElement(d.b,Object.assign({},e,{codes:void 0,source:u,examples:p}))})},524:function(e,n){e.exports="# Cascader *级联选择*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| clearable | bool | true | 是否显示清除数据图标 |\n| data | array[{children:[]}] | [] | 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点 |\n| defaultValue | array\\[key] | 无 | 默认选中的 key （非受控） | \n| disabled | boolean \\| function(d) | false | 显示选择框时有效，为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用 |\n| expandTrigger | string | 'click' | 节点展开触发方式，可选值为 \\['click', 'hover', 'hover-only'] |\n| keygen | string \\| function(obj, parentKey):string | 必填 | 生成key的辅助方法<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| loader | function(key, d) | 无 | 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点 |\n| mode | \\[0\\|1\\|2\\|3\\] | 1 | 选中值模式，未设置值为单选<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点 |\n| onChange | function(array) | 无 | 设置 onChange 属性时，显示 选择框。参数为当前选中值，和 mode 属性相关 |\n| onItemChange | function(key, d) | 无 | 节点点击触发事件 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| renderResult | string \\| function(d) | renderItem | 选中后在结果中显示的内容，默认和 renderItem 相同 |\n| value | array\\[key] | 无 | 选中的 key （受控） | \n"},525:function(e,n){e.exports="# Cascader\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| clearable | bool | false | If clearable is true, show clear value icon |\n| data | array[{children:[]}] | [] | data. The child node is children. If the children value is null or its length is 0, it is render as a leaf node. |\n| disabled | boolean \\| function(d) | false | When it is true, all nodes disable the selection; when it is a function, it determines whether it is disabled according to the return result of the function. |\n| expandTrigger | string | 'click' | Expand mode, options: \\['click', 'hover'] |\n| keygen | string \\| function(obj, parentKey):string | required | Auxiliary method for generating key. <br />When it is a function, use the return value of this function. <br /> When it is a string, use the data value corresponding to this string. For example, 'id' is the same thing as (d) => d.id. |\n| loader | function(key) | - | If the loader attribute is a function, the node with no children is regarded as dynamically loaded node. Click expanded button to trigger the loader event. The children property is null or its length is 0 will be regarded as a leaf node. |\n| mode | \\[0\\|1\\|2\\|3\\] | 1 | mode <br />0: Returns only the fully selected node including the parent node. <br />1: Returns all selected nodes and semi-selected nodes. <br />2: Return only the selected child nodes. <br />3: If the parent node is full selected, only return the parent node. |\n| onChange | function(array) | - | When the onChange property is set, the selection box is displayed. The parameter is the current selected value, which is related to the mode property. |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string].<br /> When it is a function, return the result of this function. |\n| renderResult | string \\| function(d) | renderItem | The content displayed in the result after selecting, if not set, use renderItem |\n| defaultValue | array\\[key] | - | Default selected key (not controlled) | \n| value | array\\[key] | - | Selected key (controlled) |\n"},526:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(1342),d=t(233);n.default=function(){return r.a.createElement(i.a,{data:d.b,keygen:"id",renderItem:function(e){return"node ".concat(e.text)}})}},542:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基础的级联用法\n * en - Base\n *   -- Basic usage of Cascader\n */\n\nimport React from 'react'\nimport { Cascader } from 'shineout'\nimport { cascader as data } from 'doc/data/tree'\n\nexport default function() {\n  return <Cascader data={data} keygen=\"id\" renderItem={n => `node ${n.text}`} />\n}\n"},543:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var r=t(4),i=t(5),d=t(8),o=t(2),l=t(7),c=t(29),a=t(0),s=t.n(a),h=t(317),u=t(1342),p=t(233),m=[{value:0,text:"mode=0 (full)"},{value:1,text:"mode=1 (half)"},{value:2,text:"mode=2 (child only)"},{value:3,text:"mode=3 (shallow)"}];var f=function(e){function a(e){var n;Object(r.a)(this,a),(n=Object(d.a)(this,Object(o.a)(a).call(this,e))).handleChange=function(e){n.setState({value:e})},n.handleModeChange=function(e){n.setState({mode:e,value:[]})},n.renderItem=function(e){return"node ".concat(e.id)};var t=[];return function e(n,t){var a=Object(c.a)(n,1)[0];a&&(t.push(a.id),a.children&&e(a.children,t))}(p.b,t),n.state={mode:1,value:t},n}return Object(l.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,n=e.mode,t=e.value;return s.a.createElement("div",null,s.a.createElement(h.a.Group,{keygen:"value",value:n,format:"value",onChange:this.handleModeChange,data:m,renderItem:"text"}),s.a.createElement("br",null),s.a.createElement(u.a,{data:p.b,keygen:"id",mode:n,onChange:this.handleChange,renderItem:this.renderItem,value:t}))}}]),a}(s.a.Component)},544:function(e,n){e.exports="/**\n * cn - 多选\n *    -- 设置 mode 属性，使组件变为多选，mode 可选值如下\n *    -- 0: 只返回完全选中的节点，包含父节点\n *    -- 1: 返回全部选中的节点和半选中的父节点\n *    -- 2: 只返回选中的子节点\n *    -- 3: 如果父节点选中，只返回父节点\n * en - Multiple\n *   -- Set the mode property change the component to multiple select\n *    -- 0: Return only the fully selected node, including the parent node.\n *    -- 1: Return the fully selected nodes and semi-selected parent nodes.\n *    -- 2: Return only the selected child node.\n *    -- 3: Return only the parent node, if the parent node is selected.\n */\n\nimport React from 'react'\nimport { Cascader, Radio } from 'shineout'\nimport { cascader as data } from 'doc/data/tree'\n\nconst modeList = [\n  { value: 0, text: 'mode=0 (full)' },\n  { value: 1, text: 'mode=1 (half)' },\n  { value: 2, text: 'mode=2 (child only)' },\n  { value: 3, text: 'mode=3 (shallow)' },\n]\n\nfunction getValue(list, value) {\n  const [node] = list\n  if (!node) return\n  value.push(node.id)\n  if (node.children) getValue(node.children, value)\n}\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n\n    const value = []\n    getValue(data, value)\n\n    this.state = { mode: 1, value }\n  }\n\n  handleChange = value => {\n    this.setState({ value })\n  }\n\n  handleModeChange = mode => {\n    this.setState({ mode, value: [] })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    const { mode, value } = this.state\n\n    return (\n      <div>\n        <Radio.Group\n          keygen=\"value\"\n          value={mode}\n          format=\"value\"\n          onChange={this.handleModeChange}\n          data={modeList}\n          renderItem=\"text\"\n        />\n\n        <br />\n\n        <Cascader\n          data={data}\n          keygen=\"id\"\n          mode={mode}\n          onChange={this.handleChange}\n          renderItem={this.renderItem}\n          value={value}\n        />\n      </div>\n    )\n  }\n}\n"},545:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(1342),d=t(233);n.default=function(){return r.a.createElement(i.a,{data:d.b,keygen:"id",expandTrigger:"hover-only",renderItem:function(e){return"node ".concat(e.text)},renderResult:function(e){return e.children&&0<e.children.length?"":e.text},style:{width:300}})}},546:function(e,n){e.exports="/**\n * cn - 移入展开\n *    -- 设置 expandTrigger 为 'hover' 或 'hover-only', 可以在鼠标移入节点时展开，默认为 'click'\n *    -- 如果值为 'hover-only'，父节点只能 hover 触发展开, 只有子节点可以点击选择值\n * en - Hover\n *    -- Set expandTrigger to 'hover' or 'hover-only', expand the node when mouse hover, default value is 'click'.\n */\n\nimport React from 'react'\nimport { Cascader } from 'shineout'\nimport { cascader as data } from 'doc/data/tree'\n\nexport default function() {\n  return (\n    <Cascader\n      data={data}\n      keygen=\"id\"\n      expandTrigger=\"hover-only\"\n      renderItem={n => `node ${n.text}`}\n      renderResult={n => (n.children && n.children.length > 0 ? '' : n.text)}\n      style={{ width: 300 }}\n    />\n  )\n}\n"},547:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(1342),d=t(233),o=function(e){return"1-0"===e.id||"2"===e.id};n.default=function(){return r.a.createElement(i.a,{data:d.b,keygen:"id",disabled:o,mode:2,renderItem:function(e){return"node ".concat(e.text)}})}},548:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- disabled 为函数时，根据返回结果禁用节点，同时禁用子节点\n *    -- disabled 为 true 时，禁用全部节点\n * en - disabled\n *    -- When the disabled property is a function, disable the node and its child nodes according to the returned result.\n *    -- When the disabled property is true, disable all nodes.\n */\n\nimport React from 'react'\nimport { Cascader } from 'shineout'\nimport { cascader as data } from 'doc/data/tree'\n\nconst isDisabled = d => d.id === '1-0' || d.id === '2'\n\nexport default function() {\n  return <Cascader data={data} keygen=\"id\" disabled={isDisabled} mode={2} renderItem={n => `node ${n.text}`} />\n}\n"},549:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var r=t(15),a=t(4),i=t(5),d=t(8),o=t(2),l=t(7),c=t(0),s=t.n(c),h=t(27),u=t(1342),p=["0","1","2","3","4","5","6","7","8"].map(function(e){return{id:e}}),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(d.a)(this,Object(o.a)(t).call(this,e))).loader=function(e){var a=e.split(",");setTimeout(function(){n.setState(Object(h.a)(function(e){var t=e.data;a.forEach(function(n,e){t=t.find(function(e){return e.id===n}),e<a.length-1&&(t=t.children)}),t.children=Object(r.a)(Array.from({length:Math.round(4*Math.random())},function(e,n){return n}).map(function(e){return{id:"".concat(t.id,"-").concat(e)}}))}))},500)},n.keyGenerator=function(e,n){return"".concat(n,",").concat(e.id).replace(/^,/,"")},n.handleChange=function(e){return n.setState({value:e})},n.renderItem=function(e){return"node ".concat(e.id)},n.state={data:p,value:[]},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,{data:this.state.data,keygen:this.keyGenerator,loader:this.loader,renderItem:this.renderItem,onChange:this.handleChange,value:this.state.value})}}]),t}(c.Component)},550:function(e,n){e.exports="/**\n * cn - 动态加载\n *    -- 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数\n * en - Lazy load\n *    -- Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Cascader } from 'shineout'\n\nconst initData = ['0', '1', '2', '3', '4', '5', '6', '7', '8'].map(i => ({ id: i }))\nconst createRange = () => Array.from({ length: Math.round(Math.random() * 4) }, (_, i) => i)\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: initData, value: [] }\n  }\n\n  loader = key => {\n    const path = key.split(',')\n\n    setTimeout(() => {\n      this.setState(\n        immer(draft => {\n          let { data } = draft\n          path.forEach((pid, i) => {\n            data = data.find(d => d.id === pid)\n            if (i < path.length - 1) data = data.children\n          })\n          data.children = [...createRange().map(i => ({ id: `${data.id}-${i}` }))]\n        })\n      )\n    }, 500)\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  handleChange = value => this.setState({ value })\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Cascader\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        loader={this.loader}\n        renderItem={this.renderItem}\n        onChange={this.handleChange}\n        value={this.state.value}\n      />\n    )\n  }\n}\n"}}]);