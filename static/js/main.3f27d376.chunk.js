(this["webpackJsonpquiz-typescript"]=this["webpackJsonpquiz-typescript"]||[]).push([[0],{24:function(n,e,t){},26:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),i=t(15),o=t.n(i),s=(t(24),t(4)),u=t(2),l=t.n(u),f=t(8),d=t(3),b=(t(26),t(5)),p=t(6);function x(){var n=Object(b.a)(["\n  transition: all 0.3s ease;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"]);return x=function(){return n},n}function j(){var n=Object(b.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n  p {\n    font-size: 1rem;\n  }\n"]);return j=function(){return n},n}var g,h=p.b.div(j()),O=p.b.div(x(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56FFA4, #59BC86)":!e&&t?"linear-gradient(90deg, #FF5656, #C16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),m=function(n){var e=n.question,t=n.answers,a=n.callback,c=n.userAnswer,i=n.questionNum,o=n.totalQuestions;return Object(r.jsxs)(h,{children:[Object(r.jsxs)("p",{children:["Question: ",i," / ",o]}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(r.jsx)("div",{children:t.map((function(n){return Object(r.jsx)(O,{correct:(null===c||void 0===c?void 0:c.correctAnswer)===n,userClicked:(null===c||void 0===c?void 0:c.answer)===n,children:Object(r.jsx)("button",{disabled:c,value:n,onClick:a,children:Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})})}))})]})},v=t(13),w=function(){var n=Object(f.a)(l.a.mark((function n(e,t){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(v.a)(Object(v.a)({},n),{},{answers:(e=[].concat(Object(s.a)(n.incorrect_answers),[n.correct_answer]),Object(s.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function k(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > p {\n    color: #fff;\n  }\n  .score {\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n  }\n  h1 {\n    font-family: Fascinate Inline;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    font-weight: 400;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    text-align: center;\n    margin: 20px;\n  }\n  .start, .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #ffffff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n  .start {\n    max-width: 200px;\n  }\n"]);return k=function(){return n},n}function y(){var n=Object(b.a)(["\n    html {\n        height: 100%;\n    }\n    body {\n        background-color: navy;\n        margin: 0;\n        padding: 0 20px;\n        display flex;\n        justify-content: center\n    }\n    * {\n        box-sizing: border-box;\n        font-family: 'Catamaran', sans-serif;\n    }\n"]);return y=function(){return n},n}!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(g||(g={}));var S=Object(p.a)(y()),z=p.b.div(k()),C=10;var F=function(){var n=Object(a.useState)(!1),e=Object(d.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)([]),o=Object(d.a)(i,2),u=o[0],b=o[1],p=Object(a.useState)(0),x=Object(d.a)(p,2),j=x[0],h=x[1],O=Object(a.useState)([]),v=Object(d.a)(O,2),k=v[0],y=v[1],F=Object(a.useState)(0),q=Object(d.a)(F,2),A=q[0],_=q[1],I=Object(a.useState)(!0),M=Object(d.a)(I,2),N=M[0],E=M[1];console.log(w(C,g.EASY));var L=function(){var n=Object(f.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),E(!1),n.next=4,w(C,g.EASY);case 4:e=n.sent,b(e),_(0),y([]),h(0),c(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=Object(f.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(e=j+1)===C?E(!0):h(e);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S,{}),Object(r.jsxs)(z,{children:[Object(r.jsx)("h1",{children:"Quiz"}),N||k.length===C?Object(r.jsx)("button",{className:"start",onClick:L,children:"Begain Quiz"}):null,N?null:Object(r.jsxs)("p",{className:"score",children:["Score: ",A]}),t?Object(r.jsx)("p",{children:"Loading...."}):null,t||N?null:Object(r.jsx)(m,{questionNum:j+1,totalQuestions:C,question:u[j].question,answers:u[j].answers,userAnswer:k?k[j]:void 0,callback:function(n){if(!N){var e=n.currentTarget.value,t=u[j].correct_answer===e;t&&_((function(n){return n+1}));var r={question:u[j].question,answer:e,correct:t,correctAnswer:u[j].correct_answer};y((function(n){return[].concat(Object(s.a)(n),[r])}))}}}),N||t||k.length!==j+1||9===j?null:Object(r.jsx)("button",{className:"next",onClick:Q,children:"Next"})]})]})},q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root")),q()}},[[29,1,2]]]);
//# sourceMappingURL=main.3f27d376.chunk.js.map