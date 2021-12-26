(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{26:function(t,e,n){t.exports={form:"ContactForm_form__fa09Q"}},27:function(t,e,n){t.exports={filter:"Filter_filter__1wNEw"}},28:function(t,e,n){t.exports={item:"ContactList_item__3vUdv"}},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(12),u=n.n(c),s=n(4),i=n(5),o=n(29),l=n(7),b=Object(i.b)("contacts/Filter"),f=n(2),j=n.n(f),p=n(6),d=n(9),m=n.n(d);function h(){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(j.a.mark((function t(e,n){var r,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("/contacts",{name:e,number:n});case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(j.a.mark((function t(e){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}m.a.defaults.baseURL="https://61bef9d1b25c3a00173f4c17.mockapi.io";var g,k=Object(i.c)("contacts/FetchContacts",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var r,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,h();case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),C=Object(i.c)("contacts/AddContact",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var r,a,c,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,a=e.number,c=n.rejectWithValue,t.prev=2,t.next=5,v(r,a);case 5:return u=t.sent,t.abrupt("return",u);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",c(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}()),_=Object(i.c)("contacts/DeleteContact",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var r,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,y(e);case 4:return a=t.sent,t.abrupt("return",a.id);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),F=Object(i.d)({name:"contacts",initialState:{items:[],filter:"",error:null},reducers:Object(l.a)({},b,(function(t,e){var n=e.payload;t.filter=n})),extraReducers:(g={},Object(l.a)(g,k.fulfilled,(function(t,e){var n=e.payload;t.items=n})),Object(l.a)(g,C.fulfilled,(function(t,e){var n=e.payload;t.items=[].concat(Object(o.a)(t.items),[n])})),Object(l.a)(g,_.fulfilled,(function(t,e){var n=e.payload;t.items=t.items.filter((function(t){return t.id!==n}))})),Object(l.a)(g,k.rejected,(function(t,e){var n=e.payload;t.error=n})),Object(l.a)(g,C.rejected,(function(t,e){var n=e.payload;t.error=n})),Object(l.a)(g,_.rejected,(function(t,e){var n=e.payload;t.error=n})),g)}).reducer,A=Object(i.a)({reducer:{contacts:F}}),N=n(16),S=n(26),z=n.n(S),L=function(t){return t.contacts.items},D=function(t){return t.contacts.filter},E=function(t){var e=L(t),n=D(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},J=n(1);function V(){var t=Object(r.useState)(""),e=Object(N.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),u=Object(N.a)(c,2),i=u[0],o=u[1],l=Object(s.c)(L),b=Object(s.b)(),f=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":a(r);break;case"number":o(r)}};return Object(J.jsx)("div",{children:Object(J.jsxs)("form",{className:z.a.form,onSubmit:function(t){t.preventDefault();!function(t){return l.find((function(e){return e.name===t}))}(n)?b(C({name:n,number:i})):alert("".concat(n," is already in contacts")),a(""),o("")},children:[Object(J.jsx)("label",{htmlFor:"",children:"Name"}),Object(J.jsx)("input",{type:"text",name:"name",value:n,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(J.jsx)("label",{htmlFor:"",children:"Number"}),Object(J.jsx)("input",{type:"tel",name:"number",value:i,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(J.jsx)("button",{type:"submit",children:"Add contact"})]})})}var W=n(27),Z=n.n(W);function q(){var t=Object(s.c)(D),e=Object(s.b)();return Object(J.jsx)("div",{className:Z.a.filter,children:Object(J.jsxs)("label",{children:["Find contacts by name",Object(J.jsx)("input",{type:"text",value:t,onChange:function(t){return e(b(t.target.value))}})]})})}var B=n(28),M=n.n(B);function R(){var t=Object(s.c)(E),e=Object(s.b)();return Object(r.useEffect)((function(){return e(k())}),[e]),Object(J.jsx)(J.Fragment,{children:t.length>0&&Object(J.jsx)("ul",{children:t.map((function(t){var n=t.name,r=t.number,a=t.id;return Object(J.jsxs)("li",{className:M.a.item,children:[Object(J.jsxs)("p",{children:[n," : ",r]}),Object(J.jsx)("button",{onClick:function(){e(_(a))},children:"Delete"})]},a)}))})})}function U(){return Object(J.jsxs)("div",{className:"container",children:[Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(V,{}),Object(J.jsx)("h2",{children:"Contacts"}),Object(J.jsx)(q,{}),Object(J.jsx)(R,{})]})}n(60);u.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(s.a,{store:A,children:Object(J.jsx)(U,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.602e55e6.chunk.js.map