(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(6),c=t.n(r),s=(t(12),t(1)),l=t(2),i=t(4),u=t(3),h=(t(13),t(14),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set6")}),o.a.createElement("h2",null,e.monster.name),o.a.createElement("p",null,e.monster.email))}),m=function(e){return o.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return o.a.createElement(h,{key:e.id,monster:e})})))},d=(t(15),function(e){var n=e.placeholder,t=e.handleChange;return o.a.createElement("input",{type:"search",className:"search",placeholder:n,onChange:t})}),f=(t(16),function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monsters Rolodex"),o.a.createElement(d,{placeholder:"Search Monsters",handleChange:this.handleChange}),o.a.createElement(m,{monsters:a}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})})).catch((function(e){return console.log(e)}))}}]),t}(a.Component));t(17),a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4748885a.chunk.js.map