(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{24:function(n,t,e){},28:function(n,t,e){"use strict";e.r(t);var a,o,r,c=e(0),i=e.n(c),s=e(12),l=e.n(s),d=(e(23),e(24),e(17)),b=e(4),u=e(5),p=e(8),m=e(7),h=e(29),f=e(13),x=e(2),j=e(3),g=j.a.div(a||(a=Object(x.a)(['\n  align-items: center;\n  text-align: center;\n  margin-bottom: 30px;\n\n  .form-label {\n    display: block;\n    margin-bottom: 10px;\n    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n    font-weight: 500;\n    font-size: 20px;\n    color: #6b7b96;\n  }\n  .form-input {\n    display: block;\n    padding: 5px;\n    text-align: center;\n    margin: 0 auto;\n    color: #636161;\n    outline: none;\n  }\n\n  input:focus {\n    box-shadow: 1px 1px 2px 0 #12bcb0;\n    border: 1px solid #dbd9d9;\n  }\n\n  .addBtn {\n    margin-top: 20px;\n    padding: 5px;\n    background-color: transparent;\n    border: 2px solid gray;\n    border-radius: 5px;\n    font-weight: 700;\n    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    &:hover,\n    &:focus {\n      box-shadow: 1px 1px 2px 0 #0b2349;\n    }\n  }\n']))),O=e(1),C=function(n){Object(p.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(b.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))).state={name:"",number:""},n.nameId=Object(h.a)(),n.phoneId=Object(h.a)(),n.handelInputChange=function(t){var e=t.target,a=e.name,o=e.value;n.setState(Object(f.a)({},a,o))},n.handelFormSubmit=function(t){var e=n.state,a=e.name,o=e.number;t.preventDefault(),n.props.onSubmit(a,o),n.setState({name:"",number:""})},n}return Object(u.a)(e,[{key:"render",value:function(){return Object(O.jsx)(g,{children:Object(O.jsxs)("form",{className:"contacts-form",onSubmit:this.handelFormSubmit,children:[Object(O.jsxs)("label",{className:"form-label",id:this.nameId,children:["Name",Object(O.jsx)("input",{className:"form-input",type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,id:this.nameId,onChange:this.handelInputChange,autoComplete:"off"})]}),Object(O.jsxs)("label",{className:"form-label",id:this.phoneId,children:["Number",Object(O.jsx)("input",{className:"form-input",type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number can only contains digits (min 8 digits), spaces, dashes, parentheses and can start with +",required:!0,id:this.phoneId,onChange:this.handelInputChange,autoComplete:"off"})]}),Object(O.jsx)("button",{className:"addBtn",type:"submit",children:"Add contact"})]})})}}]),e}(c.Component),v=j.a.div(o||(o=Object(x.a)(["\n  text-align: center;\n\n  .title {\n    color: #6b7b96;\n    margin-bottom: 10px;\n  }\n\n  .finde-input {\n    display: block;\n    padding: 5px;\n    text-align: center;\n    margin: 0 auto;\n    color: #636161;\n    outline: none;\n  }\n\n  input:focus {\n    box-shadow: 1px 1px 2px 0 #12bcb0;\n    border: 1px solid #dbd9d9;\n  }\n"]))),y=function(n){var t=n.filter,e=n.onChange;return Object(O.jsxs)(v,{children:[Object(O.jsx)("h3",{className:"title",children:"Finde contacts by name"}),Object(O.jsx)("form",{children:Object(O.jsx)("label",{children:Object(O.jsx)("input",{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,onChange:e,className:"finde-input",autoComplete:"off"})})})]})},w=j.a.ul(r||(r=Object(x.a)(["\n  margin-top: 30px;\n  .item {\n    &:not(:last-child) {\n      margin-bottom: 15px;\n    }\n  }\n  p {\n    display: inline-block;\n    margin-right: 20px;\n  }\n\n  .name {\n    color: #052f74;\n    font-weight: 600;\n    font-size: 20px;\n  }\n\n  .number {\n    color: #202733;\n    font-weight: 600;\n    font-size: 17px;\n  }\n\n  .delBtn {\n    display: block;\n    margin-left: auto;\n    padding: 5px;\n    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    border: 2px solid gray;\n    border-radius: 5px;\n    font-weight: 700;\n    &:hover,\n    &:focus {\n      box-shadow: 1px 1px 3px 0 #fc0202;\n    }\n  }\n"]))),k=function(n){var t=n.contacts,e=n.deleteContact;return Object(O.jsx)(w,{children:t.map((function(n){var t=n.id,a=n.name,o=n.number;return Object(O.jsxs)("li",{className:"item",children:[Object(O.jsxs)("p",{className:"name",children:[a,":"]}),Object(O.jsx)("p",{className:"number",children:o}),Object(O.jsx)("button",{className:"delBtn",type:"button",onClick:function(){return e(t)},children:"Delete"})]},t)}))})},N=function(n){Object(p.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(b.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(t,e){var a={id:Object(h.a)(),name:t,number:e};if(n.state.contacts.map((function(n){return n.name.toLowerCase()})).includes(t.toLowerCase()))return alert('Contact "'.concat(t,'" already exists'));n.setState((function(n){return{contacts:[a].concat(Object(d.a)(n.contacts))}}))},n.deleteContact=function(t){!1!==window.confirm("Delete this contact?")&&n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.getVisibleContacts=function(){var t=n.state.filter.toLowerCase();return n.state.contacts.filter((function(n){return n.name.toLowerCase().includes(t)}))},n}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),t=JSON.parse(n);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(n,t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var n=this.getVisibleContacts();return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(C,{onSubmit:this.addContact}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(y,{filter:this.state.filter,onChange:this.changeFilter}),Object(O.jsx)(k,{contacts:n,deleteContact:this.deleteContact})]})}}]),e}(c.Component);l.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.757b3edd.chunk.js.map