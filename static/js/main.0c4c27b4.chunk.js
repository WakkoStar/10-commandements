(this["webpackJsonp10-commandements"]=this["webpackJsonp10-commandements"]||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),m=(a(22),a(23),a(12)),i=[{name:"charo \xe9dition",image:"charo.png"},{name:"boire en soir\xe9e \xe9dition - sp\xe9cial faible",image:"boire-faible.png"},{name:"boire en soir\xe9e \xe9dition - sp\xe9cial citerne",image:"boire-citerne.png"},{name:"barbecue \xe9dition",image:"barbecue.png"}],u=a(7),o=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),s=o[0],E=o[1];return Object(n.useEffect)((function(){!function(){if(""!==a){var e=i.filter((function(e){return e.name.includes(a.toLowerCase())}));E(e)}else E(i)}()}),[a]),r.a.createElement("div",{className:"commandement_list"},r.a.createElement("div",{className:"presentation_list"},r.a.createElement("h1",null,"LES 10 COMMANDEMENTS"),r.a.createElement("p",null,"Ce site internet \xe0 \xe9t\xe9 cr\xe9e dans le but de r\xe9pertorier les 10 commandements sous diff\xe9rents th\xe9matiques.",r.a.createElement("br",null),"Les commandements de chaque th\xe8me sont vou\xe9s \xe0 \xeatre un guide de vie mais aussi de bonne conduite. ",r.a.createElement("br",null),"Bonne lecture.")),r.a.createElement("div",{className:"search_list"},r.a.createElement("p",null,"Rechercher parmi les articles : "),r.a.createElement("input",{type:"text",value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"table_list"},r.a.createElement("p",null,"Liste des 10 commandement par th\xe8me"),r.a.createElement("table",{border:"1"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Nom"))),r.a.createElement("tbody",null,s.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement(u.b,{to:"/"+t},e.name)))}))))))},s=function(e){var t=e.name;return r.a.createElement("div",{className:"commandement_article"},r.a.createElement(u.b,{to:"/"},"Retour aux liste"),r.a.createElement("h1",null,t),r.a.createElement("img",{src:"./Images/"+function(e){return i.find((function(t){return t.name===e})).image}(t),alt:t}))},E=a(1);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{basename:window.location.pathname||""},r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},r.a.createElement(o,null)),i.map((function(e,t){var a=e.name;return r.a.createElement(E.a,{path:"/"+t,key:t},r.a.createElement(s,{name:a}))})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0c4c27b4.chunk.js.map