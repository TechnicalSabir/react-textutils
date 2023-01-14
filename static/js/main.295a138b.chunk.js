(this["webpackJsonpreact-textutils"]=this["webpackJsonpreact-textutils"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),r=n.n(a),l=(n(10),n(2)),o=(n(11),n(0));function i(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"! "]})," ",e.alert.msg]})})}function d(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item"})]}),Object(o.jsxs)("div",{className:"d-flex",children:[Object(o.jsx)("div",{className:"bg-primary rounded m-2",onClick:function(){return e.toggleMode("primary")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(o.jsx)("div",{className:"bg-success rounded m-2",onClick:function(){return e.toggleMode("success")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(o.jsx)("div",{className:"bg-warning rounded m-2",onClick:function(){return e.toggleMode("warning")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(o.jsx)("div",{className:"bg-danger rounded m-2",onClick:function(){return e.toggleMode("danger")},style:{height:"30px",width:"30px",cursor:"pointer"}})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:function(){return e.toggleMode(null)},type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h2",{className:"my-3",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",onChange:function(e){a(e.target.value)},id:"myBox",rows:"5",value:s})}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1",onClick:function(){a(s.toUpperCase()),e.showAlert("Coverted to uppercase","success")},children:"Text to uppercase"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1",onClick:function(){a(s.toLowerCase()),e.showAlert("Coverted to lowercase","success")},children:"Text to lower"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1",onClick:function(){navigator.clipboard.writeText(s.value),e.showAlert("Text has been successfully copied.","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1",onClick:function(){var t=s.split(/[ ]+/);a(t.join(" ")),e.showAlert("Extra Spaces removed successfully","success")},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1",onClick:function(){a(""),e.showAlert("Text successfully Removed","success")},children:"Clear Text"}),Object(o.jsx)("input",{type:"color",className:"form-control-color",onChange:function(e){document.getElementById("myBox").style.color=e.target.value}})]}),Object(o.jsxs)("div",{className:"container my-2",children:[Object(o.jsx)("h3",{style:{color:"red"},children:"Your text summary"}),Object(o.jsxs)("p",{children:[s.split(/\s+/).filter((function(e){return 0!==e.length})).length," words, ",s.length," characters"]}),Object(o.jsxs)("p",{children:[.008*s.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read."]}),Object(o.jsx)("h4",{children:"Preview"}),Object(o.jsx)("p",{children:s.length>0?s:"Noting to preview"})]})]})}d.defaultProps={title:"Navbar"};var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),n=t[0],s=(t[1],Object(c.useState)(null)),a=Object(l.a)(s,2),r=a[0],u=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{mode:n,toggleMode:function(e){console.log(e),document.body.classList.add("bg-".concat(e))}}),Object(o.jsx)(i,{alert:r}),Object(o.jsx)(b,{showAlert:function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),2e3)},heading:"Enter the text to analyze"})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.295a138b.chunk.js.map