(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l);a(13),a(15);function c(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-warning "},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"#"},e.name),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},e.about))),r.a.createElement("form",{className:"d-flex",role:"search"},r.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search"))))))}c.defualtProps={name:"SetNamehere",about:"SetTittleHere"};var m=a(1);function i(e){var t=Object(n.useState)("Write Somthing here"),a=Object(m.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)("Copy"),i=Object(m.a)(c,2),s=i[0],u=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("h1",null,e.heading,"  "),r.a.createElement("textarea",{className:"form-control",onChange:function(e){console.log("Onchange Cliked"),o(e.target.value),u("Copy")},value:l,id:"myText",rows:"10"})),r.a.createElement("div",{className:"hcont"},r.a.createElement("button",{type:"button",onClick:function(){console.log("upper cliked"),o(l.toUpperCase())},className:"btn btn-primary mx-2"},"Convert UpperCase"),r.a.createElement("button",{type:"button",onClick:function(){o(l.toLowerCase())},className:"btn btn-primary mx-2"},"Convert LowerCase"),r.a.createElement("button",{type:"button",onClick:function(){var e=l.toLowerCase().split(" ");console.log(e);for(var t=0;t<e.length;t++)e[t]=e[t][0].toUpperCase()+e[t].slice(1);var a=e.join(" ");o(a)},className:"btn btn-primary mx-2"},"Convert TitleCase"),r.a.createElement("button",{type:"button",onClick:function(){var e=document.querySelector("#myText");e.focus(),e.select();try{document.execCommand("copy"),u("Copied")}catch(t){u("Try again")}},className:"btn btn-primary mx-2"},s),r.a.createElement("button",{type:"button",onClick:function(){o("")},className:"btn btn-primary mx-2"},"Clear Text"),r.a.createElement("button",{type:"button",onClick:function(){!function(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}("Txtaction.txt",l)},className:"btn btn-primary mx-2"},"Dowload"),r.a.createElement("button",{type:"button",onClick:function(){for(var e=l.split(" "),t=0,a=[],n=0;n<e.length;n++)""!==e[n]&&(a[t]=e[n],t+=1);o(a.join(" "))},className:"btn btn-primary mx-2"},"Extra Spaces Remove"))),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"PriView :"),r.a.createElement("h4",null,"Number of Word  :",function(){for(var e=l.split(" "),t=0,a=0;a<e.length;a++)""!==e[a]&&(t+=1);return t}()),r.a.createElement("h4",null,"Number of Charactor :",function(){for(var e=l.split(" "),t=0,a=[],n=0;n<e.length;n++)""!==e[n]&&(a[t]=e[n],t+=1);return a.join("").length}()),r.a.createElement("p",null,"Write Somthing here"===l||" "===l?"No Preview Available!":l)))}var s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{name:"TXTaction",about:"AboutUs"}),r.a.createElement(i,{heading:"Text Analyzing"}))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null))),u()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.4078b38b.chunk.js.map