(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),c=a.n(r),o=(a(20),a(12)),l=a(7),s=a(8),m=a(2),u=a(14),d=a(13),h=(a(21),a(22),a(10)),v=(a(23),a(9));var f=function(e){var t=e.items;console.log(t);var a=t.map((function(t){return console.log(t.key),i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){return e.editItem(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(v.a,{className:"faicon",icon:"trash",onClick:function(){return e.deleteItem(t.text)}}))))}));return i.a.createElement("div",null,i.a.createElement(h.a,{duration:300,easing:"ease-in-out"},a))},k=a(4),p=a(11);k.b.add(p.a);var I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.addItem=n.addItem.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n.editItem=n.editItem.bind(Object(m.a)(n)),n.clear=n.clear.bind(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;this.setState({items:[].concat(Object(o.a)(this.state.items),[t]),currentItem:{text:"",key:""}})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.text!==e}));this.setState({items:t})}},{key:"editItem",value:function(e,t){var a=this.state.items;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({items:a})}},{key:"clear",value:function(){this.setState({items:[]})}},{key:"render",value:function(){return console.log(this.state.currentItem.key),i.a.createElement("div",{className:"app"},i.a.createElement("header",null,i.a.createElement("form",{id:"to-do-form"},i.a.createElement("input",{type:"text",placeholder:"Enter text",value:this.state.currentItem.text,onChange:this.handleChange}),i.a.createElement("button",{type:"submit",className:"addButton",onClick:this.addItem},"Add"))),i.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,editItem:this.editItem}),i.a.createElement("button",{type:"button",className:"clearButton",onClick:this.clear},"Clear"))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1e3fd05a.chunk.js.map