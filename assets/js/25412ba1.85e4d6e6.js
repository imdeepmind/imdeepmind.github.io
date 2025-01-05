"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[1851],{1350:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"programming-languages/javascript/this","title":"The this Keyword","description":"In JavaScript, the this keyword is a powerful and often misunderstood concept. It refers to the execution context (the object to which the function belongs) at runtime. The value of this depends on how and where a function is invoked, rather than where it is declared.","source":"@site/docs/programming-languages/javascript/this.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/this","permalink":"/docs/programming-languages/javascript/this","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/this.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735631262000,"sidebarPosition":17,"frontMatter":{"sidebar_position":17},"sidebar":"tutorialSidebar","previous":{"title":"Type Coercion vs Type Conversion","permalink":"/docs/programming-languages/javascript/coercion-conversion"},"next":{"title":"\\"use strict\\"","permalink":"/docs/programming-languages/javascript/use-strict"}}');var i=s(4848),o=s(8453);const c={sidebar_position:17},r="The this Keyword",d={},l=[{value:"The Basics of <code>this</code>",id:"the-basics-of-this",level:2},{value:"<code>this</code> in Different Contexts",id:"this-in-different-contexts",level:2},{value:"In an Object Method",id:"in-an-object-method",level:3},{value:"In a Constructor Function",id:"in-a-constructor-function",level:3},{value:"In Class Methods",id:"in-class-methods",level:3},{value:"In Event Handlers",id:"in-event-handlers",level:3},{value:"In Arrow Functions",id:"in-arrow-functions",level:3},{value:"In <code>setTimeout</code> and <code>setInterval</code>",id:"in-settimeout-and-setinterval",level:3},{value:"Explicitly Binding <code>this</code>",id:"explicitly-binding-this",level:2},{value:"<code>call</code> Method",id:"call-method",level:3},{value:"<code>apply</code> Method",id:"apply-method",level:3},{value:"<code>bind</code> Method",id:"bind-method",level:3},{value:"<code>this</code> in Arrow Functions",id:"this-in-arrow-functions",level:2},{value:"<code>this</code> in Different Modes",id:"this-in-different-modes",level:2},{value:"Non-strict Mode",id:"non-strict-mode",level:3},{value:"Strict Mode",id:"strict-mode",level:3},{value:"Common Pitfalls with <code>this</code>",id:"common-pitfalls-with-this",level:2},{value:"The Importance of Context",id:"the-importance-of-context",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"the-this-keyword",children:["The ",(0,i.jsx)(n.code,{children:"this"})," Keyword"]})}),"\n",(0,i.jsxs)(n.p,{children:["In JavaScript, the ",(0,i.jsx)(n.code,{children:"this"})," keyword is a powerful and often misunderstood concept. It refers to the execution context (the object to which the function belongs) at runtime. The value of ",(0,i.jsx)(n.code,{children:"this"})," depends on ",(0,i.jsx)(n.strong,{children:"how"})," and ",(0,i.jsx)(n.strong,{children:"where"})," a function is invoked, rather than where it is declared."]}),"\n",(0,i.jsxs)(n.h2,{id:"the-basics-of-this",children:["The Basics of ",(0,i.jsx)(n.code,{children:"this"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Global Context"}),": When ",(0,i.jsx)(n.code,{children:"this"})," is used in the global scope (outside any function), it refers to the global object.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In browsers, the global object is ",(0,i.jsx)(n.code,{children:"window"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In Node.js, the global object is ",(0,i.jsx)(n.code,{children:"global"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"console.log(this); // In a browser: Window object\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inside a Function"}),": In a non-strict mode function, ",(0,i.jsx)(n.code,{children:"this"})," refers to the global object. In strict mode (",(0,i.jsx)(n.code,{children:"'use strict'"}),"), it will be ",(0,i.jsx)(n.code,{children:"undefined"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function showThis() {\n  console.log(this);\n}\nshowThis(); // Global object (Window in browsers) or undefined in strict mode\n\n("use strict");\nfunction showStrictThis() {\n  console.log(this);\n}\nshowStrictThis(); // undefined\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"this-in-different-contexts",children:[(0,i.jsx)(n.code,{children:"this"})," in Different Contexts"]}),"\n",(0,i.jsxs)(n.p,{children:["The behavior of ",(0,i.jsx)(n.code,{children:"this"})," changes depending on the context of execution:"]}),"\n",(0,i.jsx)(n.h3,{id:"in-an-object-method",children:"In an Object Method"}),"\n",(0,i.jsxs)(n.p,{children:["When a function is called as a method of an object, ",(0,i.jsx)(n.code,{children:"this"})," refers to the object itself."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const obj = {\n  name: "Alice",\n  greet: function () {\n    console.log(this.name);\n  },\n};\nobj.greet(); // Output: Alice\n'})}),"\n",(0,i.jsx)(n.h3,{id:"in-a-constructor-function",children:"In a Constructor Function"}),"\n",(0,i.jsxs)(n.p,{children:["When a function is used as a constructor (called with the ",(0,i.jsx)(n.code,{children:"new"})," keyword), ",(0,i.jsx)(n.code,{children:"this"})," refers to the newly created object."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function Person(name) {\n  this.name = name;\n}\nconst person1 = new Person("John");\nconsole.log(person1.name); // Output: John\n'})}),"\n",(0,i.jsx)(n.h3,{id:"in-class-methods",children:"In Class Methods"}),"\n",(0,i.jsxs)(n.p,{children:["In ES6 classes, ",(0,i.jsx)(n.code,{children:"this"})," refers to the instance of the class."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'class Animal {\n  constructor(type) {\n    this.type = type;\n  }\n  getType() {\n    console.log(this.type);\n  }\n}\nconst dog = new Animal("Dog");\ndog.getType(); // Output: Dog\n'})}),"\n",(0,i.jsx)(n.h3,{id:"in-event-handlers",children:"In Event Handlers"}),"\n",(0,i.jsxs)(n.p,{children:["In event handlers, ",(0,i.jsx)(n.code,{children:"this"})," refers to the element that triggered the event."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'document.querySelector("button").addEventListener("click", function () {\n  console.log(this); // The button element\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"in-arrow-functions",children:"In Arrow Functions"}),"\n",(0,i.jsxs)(n.p,{children:["Arrow functions do ",(0,i.jsx)(n.strong,{children:"not"})," have their own ",(0,i.jsx)(n.code,{children:"this"}),". Instead, they inherit ",(0,i.jsx)(n.code,{children:"this"})," from the surrounding lexical scope (where the arrow function was defined)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const obj = {\n  name: \"Bob\",\n  greet: function () {\n    const arrowFunc = () => {\n      console.log(this.name); // 'this' is inherited from the greet() method\n    };\n    arrowFunc();\n  },\n};\nobj.greet(); // Output: Bob\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"in-settimeout-and-setinterval",children:["In ",(0,i.jsx)(n.code,{children:"setTimeout"})," and ",(0,i.jsx)(n.code,{children:"setInterval"})]}),"\n",(0,i.jsxs)(n.p,{children:["In regular functions used with ",(0,i.jsx)(n.code,{children:"setTimeout"})," or ",(0,i.jsx)(n.code,{children:"setInterval"}),", ",(0,i.jsx)(n.code,{children:"this"})," defaults to the global object. To avoid this, use arrow functions or ",(0,i.jsx)(n.code,{children:"bind()"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"setTimeout(function () {\n  console.log(this); // Global object (Window)\n}, 1000);\n\nsetTimeout(() => {\n  console.log(this); // Inherits 'this' from the enclosing scope\n}, 1000);\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"explicitly-binding-this",children:["Explicitly Binding ",(0,i.jsx)(n.code,{children:"this"})]}),"\n",(0,i.jsxs)(n.p,{children:["JavaScript provides methods to explicitly bind the value of ",(0,i.jsx)(n.code,{children:"this"}),":"]}),"\n",(0,i.jsxs)(n.h3,{id:"call-method",children:[(0,i.jsx)(n.code,{children:"call"})," Method"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"call()"})," method calls a function with an explicit ",(0,i.jsx)(n.code,{children:"this"})," value and arguments passed individually."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function greet(greeting) {\n  console.log(`${greeting}, ${this.name}`);\n}\nconst person = { name: "Alice" };\ngreet.call(person, "Hello"); // Output: Hello, Alice\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"apply-method",children:[(0,i.jsx)(n.code,{children:"apply"})," Method"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"apply()"})," method is similar to ",(0,i.jsx)(n.code,{children:"call()"}),", but it takes arguments as an array."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'greet.apply(person, ["Hi"]); // Output: Hi, Alice\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"bind-method",children:[(0,i.jsx)(n.code,{children:"bind"})," Method"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"bind()"})," method creates a new function with a permanently bound ",(0,i.jsx)(n.code,{children:"this"})," value."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const boundGreet = greet.bind(person, "Hey");\nboundGreet(); // Output: Hey, Alice\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"this-in-arrow-functions",children:[(0,i.jsx)(n.code,{children:"this"})," in Arrow Functions"]}),"\n",(0,i.jsxs)(n.p,{children:["Arrow functions do not have their own ",(0,i.jsx)(n.code,{children:"this"}),"; they inherit ",(0,i.jsx)(n.code,{children:"this"})," from their enclosing lexical scope."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function outerFunction() {\n  const arrowFunc = () => {\n    console.log(this);\n  };\n  arrowFunc();\n}\nouterFunction.call({ name: "Lexical Scope" }); // Output: { name: "Lexical Scope" }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Arrow functions are especially useful in cases where you want to preserve the value of ",(0,i.jsx)(n.code,{children:"this"})," in nested functions or callbacks."]}),"\n",(0,i.jsxs)(n.h2,{id:"this-in-different-modes",children:[(0,i.jsx)(n.code,{children:"this"})," in Different Modes"]}),"\n",(0,i.jsx)(n.h3,{id:"non-strict-mode",children:"Non-strict Mode"}),"\n",(0,i.jsxs)(n.p,{children:["In non-strict mode, ",(0,i.jsx)(n.code,{children:"this"})," defaults to the global object when used in a regular function."]}),"\n",(0,i.jsx)(n.h3,{id:"strict-mode",children:"Strict Mode"}),"\n",(0,i.jsxs)(n.p,{children:["In strict mode (",(0,i.jsx)(n.code,{children:"'use strict'"}),"), ",(0,i.jsx)(n.code,{children:"this"})," remains ",(0,i.jsx)(n.code,{children:"undefined"})," in a regular function."]}),"\n",(0,i.jsxs)(n.h2,{id:"common-pitfalls-with-this",children:["Common Pitfalls with ",(0,i.jsx)(n.code,{children:"this"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Losing Context in Callbacks"}),"\nWhen passing an object\u2019s method as a callback, the value of ",(0,i.jsx)(n.code,{children:"this"})," can be lost."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const obj = {\n  name: "Alice",\n  greet: function () {\n    console.log(this.name);\n  },\n};\nconst greet = obj.greet;\ngreet(); // Output: undefined (or error in strict mode)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," Bind ",(0,i.jsx)(n.code,{children:"this"})," explicitly using ",(0,i.jsx)(n.code,{children:"bind()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const boundGreet = obj.greet.bind(obj);\nboundGreet(); // Output: Alice\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"this"})," in Event Handlers"]}),"\nWhen using arrow functions in event handlers, ",(0,i.jsx)(n.code,{children:"this"})," refers to the enclosing scope, not the event target."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'document.querySelector("button").addEventListener("click", () => {\n  console.log(this); // Does not refer to the button, but to the enclosing context\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," Use a regular function to preserve ",(0,i.jsx)(n.code,{children:"this"})," as the event target."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"the-importance-of-context",children:"The Importance of Context"}),"\n",(0,i.jsxs)(n.p,{children:["The value of ",(0,i.jsx)(n.code,{children:"this"})," is determined dynamically, depending on how a function is invoked. This makes ",(0,i.jsx)(n.code,{children:"this"})," powerful but also tricky to use correctly. Understanding the different contexts in which ",(0,i.jsx)(n.code,{children:"this"})," operates is crucial for writing predictable and maintainable JavaScript code."]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Context"}),(0,i.jsxs)(n.th,{children:["Value of ",(0,i.jsx)(n.code,{children:"this"})]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Global Scope"})}),(0,i.jsxs)(n.td,{children:["Global object (",(0,i.jsx)(n.code,{children:"window"})," in browsers)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Regular Function (Non-strict)"})}),(0,i.jsx)(n.td,{children:"Global object"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Regular Function (Strict)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Object Method"})}),(0,i.jsx)(n.td,{children:"Object the method belongs to"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Constructor Function"})}),(0,i.jsx)(n.td,{children:"Newly created object"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Class Method"})}),(0,i.jsx)(n.td,{children:"Instance of the class"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Arrow Function"})}),(0,i.jsx)(n.td,{children:"Lexically inherited from enclosing scope"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Event Handler"})}),(0,i.jsx)(n.td,{children:"Event target (DOM element)"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(6540);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);