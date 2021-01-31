(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"a":"http://localhost:3900/api"}')},51:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),o=n(26),c=n.n(o),i=n(10),l=(n(51),n(2)),u=n(5),d=n(6),h=n(8),p=n(7),b=n(4),j=n(21),m=n(32),v=n(3),f=n.n(v),O=n(12),g=n(43),x=n.n(g),y=n(20),k=n.n(y);var w={init:function(){},log:function(e){console.error(e)}};k.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(w.log(e),j.b.error("An unexpected error occurrred.")),Promise.reject(e)}));var S={get:k.a.get,post:k.a.post,put:k.a.put,delete:k.a.delete,setJwt:function(e){k.a.defaults.headers.common["x-auth-token"]=e}},C=n(17),N=C.a+"/auth",I="token";function P(){return(P=Object(O.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post(N,{email:t,password:n});case 2:r=e.sent,a=r.data,localStorage.setItem(I,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return localStorage.getItem(I)}S.setJwt(_());var R={login:function(e,t){return P.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem(I,e)},logout:function(){localStorage.removeItem(I)},getCurrentUser:function(){try{var e=localStorage.getItem(I);return x()(e)}catch(t){return null}},getJwt:_},A=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).raiseSort=function(t){var n=Object(l.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.renderSortIcon=function(t){var n=e.props.sortColumn;return t.path!==n.path?null:"asc"===n.order?Object(r.jsx)("i",{className:"fa fa-sort-asc"}):Object(r.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:this.props.columns.map((function(t){return Object(r.jsxs)("th",{className:"clickable",onClick:function(){return e.raiseSort(t.path)},children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(a.Component),T=n(18),D=n.n(T),M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderCell=function(e,t){return t.content?t.content(e):D.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return Object(r.jsx)("tbody",{children:n.map((function(t){return Object(r.jsx)("tr",{children:a.map((function(n){return Object(r.jsx)("td",{children:e.renderCell(t,n)},e.createKey(t,n))}))},t._id)}))})}}]),n}(a.Component),E=function(e){var t=e.columns,n=e.sortColumn,a=e.onSort,s=e.data;return Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)(A,{columns:t,sortColumn:n,onSort:a}),Object(r.jsx)(M,{columns:t,data:s})]})},L=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(r.jsx)("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},G=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return Object(r.jsx)(i.b,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(r.jsx)(L,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return Object(r.jsx)("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm",children:"Delete"})}};var a=R.getCurrentUser();return a&&a.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.onSort,a=e.sortColumn;return Object(r.jsx)(E,{columns:this.columns,data:t,sortColumn:a,onSort:n})}}]),n}(a.Component),U=function(e){var t=e.items,n=e.textProperty,a=e.valueProperty,s=e.selectedItem,o=e.onItemSelect;return Object(r.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(r.jsx)("li",{onClick:function(){return o(e)},className:e===s?"list-group-item active":"list-group-item",children:e[n]},e[a])}))})};U.defaultProps={textProperty:"name",valueProperty:"_id"};var W=U,q=function(e){var t=e.itemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChange,o=Math.ceil(t/n);if(1===o)return null;var c=D.a.range(1,o+1);return Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(r.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(r.jsx)("a",{className:"page-link",onClick:function(){return s(e)},children:e})},e)}))})})},B=C.a+"/movies";function F(e){return"".concat(B,"/").concat(e)}function J(e){return S.get(F(e))}function Q(e){if(e._id){var t=Object(l.a)({},e);return delete t._id,S.put(F(e._id),t)}return S.post(B,e)}function z(e){return S.delete(F(e))}function K(){return S.get(C.a+"/genres")}function V(e,t,n){var r=(t-1)*n;return D()(e).slice(r).take(n).value()}var H=function(e){var t=e.value,n=e.onChange;return Object(r.jsx)("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})},$=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],genres:[],currentPage:1,pageSize:4,searchQuery:"",selectedGenre:null,sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(){var t=Object(O.a)(f.a.mark((function t(n){var r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.movies,a=r.filter((function(e){return e._id!==n._id})),e.setState({movies:a}),t.prev=3,t.next=6,z(n._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&j.b.error("This movie has already been deleted."),e.setState({movies:r});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var n=Object(m.a)(e.state.movies),r=n.indexOf(t);n[r]=Object(l.a)({},n[r]),n[r].liked=!n[r].liked,e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,searchQuery:"",currentPage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:null,currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPagedData=function(){var t=e.state,n=t.pageSize,r=t.currentPage,a=t.sortColumn,s=t.selectedGenre,o=t.searchQuery,c=t.movies,i=c;o?i=c.filter((function(e){return e.title.toLowerCase().startsWith(o.toLowerCase())})):s&&s._id&&(i=c.filter((function(e){return e.genre._id===s._id})));var l=V(D.a.orderBy(i,[a.path],[a.order]),r,n);return{totalCount:i.length,data:l}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(O.a)(f.a.mark((function e(){var t,n,r,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:return t=e.sent,n=t.data,r=[{_id:"",name:"All Genres"}].concat(Object(m.a)(n)),e.next=7,S.get(B);case 7:a=e.sent,s=a.data,this.setState({movies:s,genres:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies.length,t=this.state,n=t.pageSize,a=t.currentPage,s=t.sortColumn,o=t.searchQuery,c=this.props.user;if(0===e)return Object(r.jsx)("p",{children:"There are no movies in the database."});var l=this.getPagedData(),u=l.totalCount,d=l.data;return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(W,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})}),Object(r.jsxs)("div",{className:"col",children:[c&&Object(r.jsx)(i.b,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20},children:"New Movie"}),Object(r.jsxs)("p",{children:["Showing ",u," movies in the database."]}),Object(r.jsx)(H,{value:o,onChange:this.handleSearch}),Object(r.jsx)(G,{movies:d,sortColumn:s,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),Object(r.jsx)(q,{itemsCount:u,pageSize:n,currentPage:a,onPageChange:this.handlePageChange})]})]})}}]),n}(a.Component),X=n(11),Y=n.n(X),Z=n(24),ee=n(45),te=n(22),ne=function(e){var t=e.name,n=e.label,a=e.error,s=Object(te.a)(e,["name","label","error"]);return Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:t,children:n}),Object(r.jsx)("input",Object(l.a)(Object(l.a)({},s),{},{name:t,id:t,className:"form-control"})),a&&Object(r.jsx)("div",{className:"alert alert-danger",children:a})]})},re=function(e){var t=e.name,n=e.label,a=e.options,s=e.error,o=Object(te.a)(e,["name","label","options","error"]);return Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:t,children:n}),Object(r.jsxs)("select",Object(l.a)(Object(l.a)({name:t,id:t},o),{},{className:"form-control",children:[Object(r.jsx)("option",{value:""}),a.map((function(e){return Object(r.jsx)("option",{value:e._id,children:e.name},e._id)}))]})),s&&Object(r.jsx)("div",{className:"alert alert-danger",children:s})]})},ae=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{},errors:{}},e.validate=function(){var t=Y.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var n,r={},a=Object(ee.a)(t.details);try{for(a.s();!(n=a.n()).done;){var s=n.value;r[s.path[0]]=s.message}}catch(o){a.e(o)}finally{a.f()}return r},e.validateProperty=function(t){var n=t.name,r=t.value,a=Object(Z.a)({},n,r),s=Object(Z.a)({},n,e.schema[n]),o=Y.a.validate(a,s).error;return o?o.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,r=Object(l.a)({},e.state.errors),a=e.validateProperty(n);a?r[n.name]=a:delete r[n.name];var s=Object(l.a)({},e.state.data);s[n.name]=n.value,e.setState({data:s,errors:r})},e}return Object(d.a)(n,[{key:"renderButton",value:function(e){return Object(r.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderSelect",value:function(e,t,n){var a=this.state,s=a.data,o=a.errors;return Object(r.jsx)(re,{name:e,value:s[e],label:t,options:n,onChange:this.handleChange,error:o[e]})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=this.state,s=a.data,o=a.errors;return Object(r.jsx)(ne,{type:n,name:e,value:s[e],label:t,onChange:this.handleChange,error:o[e]})}}]),n}(a.Component),se=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:Y.a.string(),title:Y.a.string().required().label("Title"),genreId:Y.a.string().required().label("Genre"),numberInStock:Y.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:Y.a.number().required().min(0).max(10).label("Daily Rental Rate")},e.doSubmit=Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"populateGenres",value:function(){var e=Object(O.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:t=e.sent,n=t.data,this.setState({genres:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateMovie",value:function(){var e=Object(O.a)(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,J(t);case 6:n=e.sent,r=n.data,this.setState({data:this.mapToViewModel(r)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Movie Form"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")]})]})}}]),n}(ae),oe=function(){return Object(r.jsx)("h1",{children:"Customers"})},ce=function(){return Object(r.jsx)("h1",{children:"Rentals"})},ie=function(){return Object(r.jsx)("h1",{children:"Not Found"})},le=function(e){var t=e.user;return Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Vidly"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(r.jsxs)("div",{className:"navbar-nav",children:[Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/movies",children:"Movies"}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/customers",children:"Customers"}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/rentals",children:"Rentals"}),!t&&Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/login",children:"Login"}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/register",children:"Register"})]}),t&&Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/profile",children:t.name}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/logout",children:"Logout"})]})]})})]})},ue=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:""},errors:{}},e.schema={username:Y.a.string().required().label("Username"),password:Y.a.string().required().label("Password")},e.doSubmit=Object(O.a)(f.a.mark((function t(){var n,r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.state.data,t.next=4,R.login(n.username,n.password);case 4:r=e.props.location.state,window.location=r?r.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((a=Object(l.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:a}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(d.a)(n,[{key:"render",value:function(){return R.getCurrentUser()?Object(r.jsx)(b.a,{to:"/"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")]})]})}}]),n}(ae),de=C.a+"/users";function he(e){return S.post(de,{email:e.username,password:e.password,name:e.name})}var pe=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:Y.a.string().required().email().label("Username"),password:Y.a.string().required().min(5).label("Password"),name:Y.a.string().required().label("Name")},e.doSubmit=Object(O.a)(f.a.mark((function t(){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,he(e.state.data);case 3:n=t.sent,R.loginWithJwt(n.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(l.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Register"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")]})]})}}]),n}(ae),be=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){R.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),n}(a.Component),je=function(e){e.path;var t=e.component,n=e.render,a=Object(te.a)(e,["path","component","render"]);return Object(r.jsx)(b.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return R.getCurrentUser()?t?Object(r.jsx)(t,Object(l.a)({},e)):n(e):Object(r.jsx)(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},me=(n(78),n(79),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=R.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this,t=this.state.user;return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(j.a,{}),Object(r.jsx)(le,{user:t}),Object(r.jsx)("main",{className:"container",children:Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{path:"/register",component:pe}),Object(r.jsx)(b.b,{path:"/login",component:ue}),Object(r.jsx)(b.b,{path:"/logout",component:be}),Object(r.jsx)(je,{path:"/movies/:id",component:se}),Object(r.jsx)(b.b,{path:"/movies",render:function(t){return Object(r.jsx)($,Object(l.a)(Object(l.a)({},t),{},{user:e.state.user}))}}),Object(r.jsx)(b.b,{path:"/customers",component:oe}),Object(r.jsx)(b.b,{path:"/rentals",component:ce}),Object(r.jsx)(b.b,{path:"/not-found",component:ie}),Object(r.jsx)(b.a,{from:"/",exact:!0,to:"/movies"}),Object(r.jsx)(b.a,{to:"/not-found"})]})})]})}}]),n}(a.Component)),ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(80),n(81);console.log("SPIDERMAN",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NAME),c.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(me,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");ve?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):fe(e)}))}}()}},[[82,1,2]]]);
//# sourceMappingURL=main.0bc7d420.chunk.js.map