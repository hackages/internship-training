(this.webpackJsonptraininginternship=this.webpackJsonptraininginternship||[]).push([[0],{63:function(e,t,a){e.exports=a(90)},67:function(e,t,a){},68:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),i=(a(67),a(53)),o=a(22),u=(a(68),a(38)),s=a.n(u);var m={getLessons:function(){return s.a.get("https://plateform-h-api-dev.now.sh/activities?types[]=event&types[]=learningPath&sortBy=dates&sortByType=asc&periods[]=upcoming&price=true&privacies[]=public&published=true&toPopulate[]=topics&toPopulate[]=location").then((function(e){return e.data}))},getLesson:function(e){return s.a.get("https://plateform-h-api-dev.now.sh/activities/"+e+"?toPopulate[]=subscribers&toPopulate[]=topics&toPopulate[]=location&toPopulate[]=groups&toPopulate[]=owner&toPopulate[]=mentors&toPopulate[]=contacts&toPopulate[]=steps.activities").then((function(e){return e.data}))}},p=a(26),E=a(120),h=a(114),d=a(115),v=a(117),f=a(116),g=a(118),y=a(112);function b(){return l.a.createElement("div",{className:"centered"},l.a.createElement(y.a,null))}var w=function(e){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL_BASE:"https://plateform-h-api-dev.now.sh/",REACT_APP_URL_BASE_PAYMENT:"https://payments.hackages.io/"})),console.log("https://plateform-h-api-dev.now.sh/");var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1];if(Object(n.useEffect)((function(){m.getLessons().then((function(e){c(e)}))}),[]),r&&r.activities){var i=r.activities.map((function(e){return l.a.createElement(P,{key:e.title,value:e})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Trainings offered by Hackages"),l.a.createElement(h.a,null,i))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null))},P=function(e){var t=e.value;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(d.a,{variant:"outlined"},l.a.createElement(f.a,null,l.a.createElement("h4",null,"".concat(t.dates[0]," ").concat(t.title," ")),l.a.createElement("p",null,"".concat(t.dates.length," days  at ").concat(t.location.country," - ").concat(t.location.locality," price ->  ").concat(t.price,"\u20ac")),l.a.createElement("p",null," langage ->  ".concat(t.topics[0].name))),l.a.createElement(v.a,null,l.a.createElement(g.a,{size:"small"},l.a.createElement(p.b,{to:"/details/".concat(t.id)}," Order now ! "))))))},O=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=e.match.params.id;return Object(n.useEffect)((function(){m.getLesson(i).then((function(e){c(e)}))}),[i]),r&&r.activity?l.a.createElement("div",null,l.a.createElement("h1",null,"Details"),l.a.createElement("p",null,"Title : ",r.activity.title),l.a.createElement("p",null,"Date : ",r.activity.dates[0]),l.a.createElement("p",null,"days : ",r.activity.dates.length),l.a.createElement("p",null,"Price : ",r.activity.price+" \u20ac"," / day "),l.a.createElement("p",null,"Language : ",r.activity.topics[0].name),l.a.createElement("section",null,l.a.createElement("h2",null," Description "),l.a.createElement("p",null,r.activity.description)),l.a.createElement(g.a,{variant:"outlined",color:"primary"},l.a.createElement(p.b,{to:"/payment/".concat(i)}," Buy "))):l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null))},B=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"404"),l.a.createElement("p",null,"Page not found"))},S=a(119),j=function(){var e=Object(n.useContext)(C).snackBarState;return l.a.createElement("div",null,l.a.createElement(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.show,autoHideDuration:1e3,message:e.text}))},k=a(23),A=a(57),F=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=e.match.params.id;return Object(n.useEffect)((function(){m.getLesson(i).then((function(e){c(e)}))}),[i]),r&&r.activity?l.a.createElement("div",null,l.a.createElement("h1",null," The order is about : "," ",r.activity.title," "),l.a.createElement("h3",null,r.activity.price+" \u20ac"),l.a.createElement(x,{value:i})):l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null))},x=function(e){var t={color:"red"},a=e.value,r=Object(n.useContext)(C).showSnackBar;return l.a.createElement("div",null,l.a.createElement(A.a,{initialValues:{firstname:"",lastname:"",email:""},validate:function(e){var t={};return e.firstname?e.firstname.length<=2&&(t.firstname="At least 3 characters are needed"):t.firstname="Required",e.lastname?e.lastname.length<=2&&(t.lastname="At least 3 characters are needed"):t.lastname="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,t){t.setSubmitting;r({text:"Validation ok"}),window.location="".concat("https://payments.hackages.io/","?id=").concat(a,"&redirectTo=https%3A%2F%2Fdev.community.hackages.io%2Factivity%2Fevent%2F").concat(a,"&email=").concat(e.email)}},(function(e){var a=e.values,n=e.errors,r=e.touched,c=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return l.a.createElement("form",{onSubmit:o},"Name ",l.a.createElement("input",{type:"text",name:"firstname",onChange:c,onBlur:i,value:a.firstname}),l.a.createElement("span",{style:t},n.firstname&&r.firstname&&n.firstname),l.a.createElement("br",null),"Surname ",l.a.createElement("input",{type:"text",name:"lastname",onChange:c,onBlur:i,value:a.lastname}),l.a.createElement("span",{style:t},n.lastname&&r.lastname&&n.lastname),l.a.createElement("br",null),"Your mail ",l.a.createElement("input",{type:"email",name:"email",onChange:c,onBlur:i,value:a.email}),l.a.createElement("span",{style:t},n.email&&r.email&&n.email),l.a.createElement(g.a,{size:"small",variant:"outlined",color:"primary",type:"submit",disabled:!!(n.firstname&&n.lastname&&n.email)},"Purchase"))})))},C=l.a.createContext({});var L=function(){var e=l.a.useState({show:!1,text:""}),t=Object(o.a)(e,2),a=t[0],n=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.Provider,{value:{snackBarState:a,showSnackBar:function(e){n(Object(i.a)({},e,{show:!0})),setTimeout((function(){n({show:!1})}),2e3)}}},l.a.createElement(p.a,null,l.a.createElement(k.c,null,l.a.createElement(k.a,{exact:!0,path:"/",component:w}),l.a.createElement(k.a,{path:"/details/:id",component:O}),l.a.createElement(k.a,{path:"/payment/:id",component:F}),l.a.createElement(k.a,{path:"**",component:B}))),l.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.7420ab45.chunk.js.map