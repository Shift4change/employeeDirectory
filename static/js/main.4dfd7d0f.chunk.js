(this.webpackJsonpemp=this.webpackJsonpemp||[]).push([[0],{21:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),u=a(4),o=a.n(u);var s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Employee Directory "),r.a.createElement("p",null,"click on  .... to filter by heading or use the search box to narrow your results.   "))};function m(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onChange:e.handler,value:e.val,name:"search",type:"text",className:"searchInput",id:"searchBox",placeholder:"Search"}))}var i=a(15),h=a(19),p=a(16),E=a(17),d=a(20),f=a(18),y=(a(43),function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={people:[],search:"",display:[]},e.handleInputChange=function(t){var a=t.target.value.toLowerCase(),n=e.state.people.filter((function(e){return e.name.first.toLowerCase().includes(a)}));e.setState({display:n,search:a})},e.sortByName=function(){var t=Object(i.a)(Array,Object(h.a)(e.state.people)).sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));e.setState({display:t})},e.sortByEmail=function(){var t=e.state.people.sort((function(e,t){return t.email>e.email?-1:e.email>t.email?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),console.log("sort by gender"),e.setState({results:t})},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;o.a.get("https://randomuser.me/api/?results=10").then((function(t){e.setState({people:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("table",null,r.a.createElement(m,{handler:this.handleInputChange,val:this.state.search}),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Name",r.a.createElement("button",{onClick:this.sortByName},"Sort")),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"DOB"))),r.a.createElement("tbody",null,this.state.people.map((function(e){return r.a.createElement("tr",{key:e.id.value},r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:"thumb"})),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob.date))}))))}}]),a}(r.a.Component));var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4dfd7d0f.chunk.js.map