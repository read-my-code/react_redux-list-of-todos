(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a,s=c(9),n=c.n(s),l=c(3),r=c(17),o=c(7),i=c(15),d=c(16),j=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(5);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));var m=function(e){return{type:"query/Change",payload:e}},O=function(e){return{type:"status/Change",payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:a.All},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/Change":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"status/Change":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},f=c(13),p=function(e){return{type:"todos/ADD",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?[].concat(Object(f.a)(e),Object(f.a)(t.payload)):e},y=Object(o.combineReducers)({currentTodo:b,filter:x,todos:v}),N=Object(o.createStore)(y,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),g=c(0),C=c.n(g),T=(c(25),c(26),c(12)),k=c.n(T),w=c(1),A=C.a.memo((function(e){var t=e.todos,c=e.selectedTodo,a=Object(l.b)();return Object(w.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("th",{children:"Title"}),Object(w.jsx)("th",{children:" "})]})}),Object(w.jsx)("tbody",{children:t.map((function(e){return Object(w.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(w.jsx)("td",{className:"is-vcentered",children:e.id}),Object(w.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(w.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("td",{className:"is-vcentered is-expanded",children:Object(w.jsx)("p",{className:k()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(w.jsx)("td",{className:"has-text-right is-vcentered",children:Object(w.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){a(j(e))}(e)},children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:k()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id})})})})})]},e.id)}))})]})})),E=(l.b,l.c),S=function(){var e=E((function(e){return e.filter.status})),t=E((function(e){return e.filter.query})),c=Object(l.b)();return Object(w.jsxs)("form",{className:"field has-addons",children:[Object(w.jsx)("p",{className:"control",children:Object(w.jsx)("span",{className:"select",children:Object(w.jsxs)("select",{"data-cy":"statusSelect",value:e,onChange:function(e){switch(e.target.value){case a.Active:c(O(a.Active));break;case a.Completed:c(O(a.Completed));break;default:c(O(a.All))}},children:[Object(w.jsx)("option",{value:"all",children:"All"}),Object(w.jsx)("option",{value:"active",children:"Active"}),Object(w.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(w.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(w.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){c(m(e.target.value.toLowerCase()))},value:t}),Object(w.jsx)("span",{className:"icon is-left",children:Object(w.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(w.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(w.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(m(""))}})})]})]})},q=c(4),D=(c(28),function(){return Object(w.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(w.jsx)("div",{className:"Loader__content"})})});function L(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var _=function(e){var t=e.todo,c=Object(g.useState)(null),a=Object(q.a)(c,2),s=a[0],n=a[1],r=Object(l.b)();return Object(g.useEffect)((function(){var e;(e=t.userId,L("/users/".concat(e))).then(n)}),[]),Object(w.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(w.jsx)("div",{className:"modal-background"}),s?Object(w.jsxs)("div",{className:"modal-card",children:[Object(w.jsxs)("header",{className:"modal-card-head",children:[Object(w.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(w.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){r(u())}})]}),Object(w.jsxs)("div",{className:"modal-card-body",children:[Object(w.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(w.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(w.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(w.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(w.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]}):Object(w.jsx)(D,{})]})},M=function(){var e=Object(l.b)(),t=E((function(e){return e.todos})),c=E((function(e){return e.filter.query})),s=E((function(e){return e.filter.status})),n=E((function(e){return e.currentTodo})),r=Object(g.useMemo)((function(){return t.filter((function(e){var t=e.title.trim().toLowerCase().includes(c.trim().toLowerCase());switch(s){case a.Active:return t&&!e.completed;case a.Completed:return t&&e.completed;default:return t}}))}),[t,c,s]);return Object(g.useEffect)((function(){L("/todos").then((function(t){e(p(t))}))}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"section",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("h1",{className:"title",children:"Todos:"}),Object(w.jsx)("div",{className:"block",children:Object(w.jsx)(S,{})}),Object(w.jsx)("div",{className:"block",children:t.length?Object(w.jsx)(A,{todos:r,selectedTodo:n}):Object(w.jsx)(D,{})})]})})}),n&&Object(w.jsx)(_,{todo:n})]})},B=function(){return Object(w.jsx)(l.a,{store:N,children:Object(w.jsx)(r.a,{children:Object(w.jsx)(M,{})})})};n.a.render(Object(w.jsx)(B,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7a100659.chunk.js.map