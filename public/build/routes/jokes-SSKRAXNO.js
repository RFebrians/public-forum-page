import{a as k}from"/build/_shared/chunk-NZCB3PMS.js";import{a as u}from"/build/_shared/chunk-EYYFEV5H.js";import{b as o,f as a,g as n,k as l}from"/build/_shared/chunk-BE4YDBKA.js";import"/build/_shared/chunk-GUACUXYP.js";import{b as t,e,f as s}from"/build/_shared/chunk-AKSB5QXU.js";s();s();var j=t(k()),f=t(u());var m="/build/_assets/jokes-MGLBGUHK.css";var c=()=>[{rel:"stylesheet",href:m}];function d(){let r=n();return e.createElement("div",{className:"jokes-layout"},e.createElement("header",{className:"jokes-header"},e.createElement("div",{className:"container"},e.createElement("h1",{className:"home-link"},e.createElement(o,{to:"/",title:"Remix Jokes","aria-label":"Remix Jokes"},e.createElement("span",{className:"logo"},"\u{1F92A}"),e.createElement("span",{className:"logo-medium"},"Forum"))),r.user?e.createElement("div",{className:"user-info"},e.createElement("span",null,`Hi ${r.user.username}`),e.createElement(a,{action:"/logout",method:"post"},e.createElement("button",{type:"submit",className:"button"},"Logout"))):e.createElement(o,{to:"/login"},"Login"))),e.createElement("main",{className:"jokes-main"},e.createElement("div",{className:"container"},e.createElement("div",{className:"jokes-list"},r.jokeListItems.length?e.createElement(e.Fragment,null,e.createElement(o,{to:"."},"Get More Post Topic"),e.createElement("p",null,"Here are a post to check out:"),e.createElement("ul",null,r.jokeListItems.map(({id:i,name:p})=>e.createElement("li",{key:i},e.createElement(o,{to:i,prefetch:"intent"},p)))),e.createElement(o,{to:"new",className:"button"},"Create a Post")):null),e.createElement("div",{className:"jokes-outlet"},e.createElement(l.Outlet,null)))),e.createElement("footer",{className:"jokes-footer"},e.createElement("div",{className:"container"},e.createElement(o,{reloadDocument:!0,to:"/jokes.rss"},"RSS"))))}export{d as default,c as links};
