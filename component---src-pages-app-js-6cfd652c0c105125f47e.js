(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Bl7J:function(t,e,n){"use strict";var a=n("q1tI"),o=n.n(a),r=(n("f3/d"),n("Wbzz")),c=n("a/Iw"),l=n("qKvR");function u(){var t="";return t=Object(c.c)()?"Hello "+Object(c.a)().name:"You are not logged in",Object(l.d)("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},Object(l.d)("span",null,t),Object(l.d)("nav",null,Object(l.d)(r.Link,{to:"/"},"Home")," ",Object(l.d)(r.Link,{to:"/app/profile"},"Profile")," ",Object(c.c)()?Object(l.d)("a",{href:"/",onClick:function(t){t.preventDefault(),Object(c.d)((function(){return Object(r.navigate)("/app/login")}))}},"Logout"):null))}e.a=function(t){var e=t.children;return Object(l.d)(o.a.Fragment,null,Object(l.d)(u,null),e)}},"a/Iw":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l}));var a=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},o=function(t){return window.localStorage.setItem("gatsbyUser",JSON.stringify(t))},r=function(t){var e=t.username,n=t.password;return"john"===e&&"pass"===n&&o({username:"john",name:"Johnny",email:"johnny@example.org"})},c=function(){return!!a().username},l=function(t){o({}),t()}},y9VM:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),o=n.n(a),r=n("YwZP"),c=n("Bl7J"),l=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Wbzz")),u=n("a/Iw"),i=n("qKvR");var p=function(t){var e=t.component,n=t.location,a=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["component","location"]);return Object(u.c)()||"/app/login"===n.pathname?Object(i.d)(e,a):(Object(l.navigate)("/app/login"),null)},d=(n("f3/d"),function(){return Object(i.d)(o.a.Fragment,null,Object(i.d)("h1",null,"Your profile"),Object(i.d)("ul",null,Object(i.d)("li",null,"Name: ",Object(u.a)().name),Object(i.d)("li",null,"E-mail: ",Object(u.a)().email)))});var b=function(t){var e,n;function a(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).state={username:"",password:""},e.handleUpdate=function(t){var n;e.setState(((n={})[t.target.name]=t.target.value,n))},e.handleSubmit=function(t){t.preventDefault(),Object(u.b)(e.state)},e}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this;return Object(u.c)()&&Object(l.navigate)("/app/profile"),Object(i.d)(o.a.Fragment,null,Object(i.d)("h1",null,"Log in"),Object(i.d)("h3",null,"urername: john, password: pass"),Object(i.d)("form",{method:"post",onSubmit:function(e){t.handleSubmit(e),Object(l.navigate)("/app/profile")}},Object(i.d)("label",null,"Username",Object(i.d)("input",{type:"text",name:"username",onChange:this.handleUpdate})),Object(i.d)("label",null,"Password",Object(i.d)("input",{type:"password",name:"password",onChange:this.handleUpdate})),Object(i.d)("input",{type:"submit",value:"Log In"})))},a}(o.a.Component);e.default=function(){return Object(i.d)(c.a,null,Object(i.d)(r.Router,null,Object(i.d)(p,{path:"/app/profile",component:d}),Object(i.d)(b,{path:"/app/login"})))}}}]);
//# sourceMappingURL=component---src-pages-app-js-6cfd652c0c105125f47e.js.map