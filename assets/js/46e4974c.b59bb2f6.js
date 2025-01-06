"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[5869],{25424:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"programming-languages/javascript/closures","title":"Closures and Lexical Scoping","description":"Closures","source":"@site/docs/programming-languages/javascript/closures.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/closures","permalink":"/docs/programming-languages/javascript/closures","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/closures.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735588931000,"sidebarPosition":12,"frontMatter":{"sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"Event Loop","permalink":"/docs/programming-languages/javascript/event-loop"},"next":{"title":"Callbacks and Higher-Order Functions","permalink":"/docs/programming-languages/javascript/callback-hof"}}');var r=i(74848),t=i(28453);const o={sidebar_position:12},c="Closures and Lexical Scoping",l={},a=[{value:"Closures",id:"closures",level:2},{value:"How Closures Work",id:"how-closures-work",level:3},{value:"Example of Closures in JavaScript",id:"example-of-closures-in-javascript",level:4},{value:"Key Characteristics of Closures",id:"key-characteristics-of-closures",level:3},{value:"Use Cases of Closures",id:"use-cases-of-closures",level:3},{value:"Lexical Scoping",id:"lexical-scoping",level:2},{value:"Example of Lexical Scoping in JavaScript",id:"example-of-lexical-scoping-in-javascript",level:3},{value:"Key Characteristics of Lexical Scoping",id:"key-characteristics-of-lexical-scoping",level:3},{value:"Behavior of Lexical Scoping in Closures",id:"behavior-of-lexical-scoping-in-closures",level:3},{value:"Example",id:"example",level:4},{value:"Difference Between Closures and Lexical Scoping",id:"difference-between-closures-and-lexical-scoping",level:3},{value:"Advantages of Closures",id:"advantages-of-closures",level:3},{value:"Common Pitfalls",id:"common-pitfalls",level:3},{value:"Fixing the Loop Issue",id:"fixing-the-loop-issue",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"closures-and-lexical-scoping",children:"Closures and Lexical Scoping"})}),"\n",(0,r.jsx)(n.h2,{id:"closures",children:"Closures"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"closure"}),' is a fundamental concept in programming, particularly in languages like JavaScript, Python, and Go, that captures the idea of a function "remembering" the variables from its surrounding scope even after that scope has exited. Closures allow functions to access variables defined outside their immediate scope, and this capability is often used for creating encapsulation, maintaining state, and implementing higher-order functions.']}),"\n",(0,r.jsxs)(n.p,{children:["In simpler terms, ",(0,r.jsx)(n.strong,{children:"closures"}),' enable you to "close over" variables from an outer function within an inner function, allowing the inner function to maintain access to these variables after the outer function has finished executing.']}),"\n",(0,r.jsx)(n.h3,{id:"how-closures-work",children:"How Closures Work"}),"\n",(0,r.jsx)(n.p,{children:"When a function is declared inside another function, the inner function can access:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Its own local variables."}),"\n",(0,r.jsx)(n.li,{children:"The variables declared in its containing (outer) function."}),"\n",(0,r.jsx)(n.li,{children:"Variables in the global scope."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the outer function finishes executing, its local variables are normally discarded. However, if an inner function ",(0,r.jsx)(n.strong,{children:"retains a reference to these variables"}),", they are preserved in the closure, keeping them alive."]}),"\n",(0,r.jsx)(n.h4,{id:"example-of-closures-in-javascript",children:"Example of Closures in JavaScript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function outerFunction() {\n  let counter = 0;\n\n  function innerFunction() {\n    counter++;\n    console.log(counter);\n  }\n\n  return innerFunction;\n}\n\nconst incrementCounter = outerFunction();\nincrementCounter(); // Output: 1\nincrementCounter(); // Output: 2\nincrementCounter(); // Output: 3\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the above example:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"innerFunction"}),' is a closure because it "remembers" the ',(0,r.jsx)(n.code,{children:"counter"})," variable from ",(0,r.jsx)(n.code,{children:"outerFunction"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Even though ",(0,r.jsx)(n.code,{children:"outerFunction"})," has finished executing, the ",(0,r.jsx)(n.code,{children:"counter"})," variable is preserved because ",(0,r.jsx)(n.code,{children:"innerFunction"})," is still holding a reference to it."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-characteristics-of-closures",children:"Key Characteristics of Closures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Closures enable functions to access variables from their lexical scope, even if the outer function has already returned."}),"\n",(0,r.jsx)(n.li,{children:"They help maintain state across multiple invocations without using global variables."}),"\n",(0,r.jsx)(n.li,{children:"Each closure maintains its own copy of the variables it has closed over."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"use-cases-of-closures",children:"Use Cases of Closures"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data Encapsulation"}),"\nClosures can be used to create private variables, a common pattern for encapsulating state."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createCounter() {\n  let count = 0;\n\n  return {\n    increment: function () {\n      count++;\n      console.log(count);\n    },\n    decrement: function () {\n      count--;\n      console.log(count);\n    },\n  };\n}\n\nconst counter = createCounter();\ncounter.increment(); // Output: 1\ncounter.increment(); // Output: 2\ncounter.decrement(); // Output: 1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Function Factories"}),"\nClosures are often used to create customized functions."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createMultiplier(multiplier: number) {\n  return function (value: number) {\n    return value * multiplier;\n  };\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\n\nconsole.log(double(5)); // Output: 10\nconsole.log(triple(5)); // Output: 15\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Callbacks and Event Handlers"}),"\nClosures are extensively used in asynchronous programming and event handling."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function setupEventHandlers() {\n  for (let i = 1; i <= 3; i++) {\n    setTimeout(function () {\n      console.log(`Button ${i} clicked`);\n    }, i * 1000);\n  }\n}\n\nsetupEventHandlers();\n// Output:\n// Button 1 clicked\n// Button 2 clicked\n// Button 3 clicked\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"lexical-scoping",children:"Lexical Scoping"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Lexical scoping"})," (also called ",(0,r.jsx)(n.strong,{children:"static scoping"}),") determines how variable names are resolved in nested functions: ",(0,r.jsx)(n.strong,{children:"the scope of a variable is defined by its position in the source code and the nested structure of the program."})]}),"\n",(0,r.jsx)(n.p,{children:'In a lexically scoped language, a function\'s scope is defined when the function is written, not when it is executed. This is why a function can "remember" the variables of its surrounding scope\u2014because its scope is determined at definition time.'}),"\n",(0,r.jsx)(n.h3,{id:"example-of-lexical-scoping-in-javascript",children:"Example of Lexical Scoping in JavaScript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function outerFunction() {\n  let outerVariable = "I\'m from outerFunction";\n\n  function innerFunction() {\n    console.log(outerVariable);\n  }\n\n  innerFunction();\n}\n\nouterFunction();\n// Output: "I\'m from outerFunction"\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the above example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"innerFunction"})," has access to ",(0,r.jsx)(n.code,{children:"outerVariable"})," because of ",(0,r.jsx)(n.strong,{children:"lexical scoping"}),". The scope is determined by the location of ",(0,r.jsx)(n.code,{children:"outerVariable"})," in the source code (inside ",(0,r.jsx)(n.code,{children:"outerFunction"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-characteristics-of-lexical-scoping",children:"Key Characteristics of Lexical Scoping"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Variables are resolved based on their location in the code, not the runtime call stack."}),"\n",(0,r.jsx)(n.li,{children:"Functions defined in a specific scope have access to variables declared in that scope and its parent scopes."}),"\n",(0,r.jsx)(n.li,{children:"The nesting of functions in the code defines the scope hierarchy."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"behavior-of-lexical-scoping-in-closures",children:"Behavior of Lexical Scoping in Closures"}),"\n",(0,r.jsx)(n.p,{children:'Lexical scoping is the foundation of closures because closures rely on the function\'s ability to "remember" the variables in the lexical scope where it was created.'}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function makeGreeter(greeting: string) {\n  return function (name: string) {\n    console.log(`${greeting}, ${name}!`);\n  };\n}\n\nconst sayHello = makeGreeter("Hello");\nconst sayHi = makeGreeter("Hi");\n\nsayHello("Alice"); // Output: "Hello, Alice!"\nsayHi("Bob"); // Output: "Hi, Bob!"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Here:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['The inner function "remembers" the ',(0,r.jsx)(n.code,{children:"greeting"})," variable because of ",(0,r.jsx)(n.strong,{children:"lexical scoping"}),", even after ",(0,r.jsx)(n.code,{children:"makeGreeter"})," has returned."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"difference-between-closures-and-lexical-scoping",children:"Difference Between Closures and Lexical Scoping"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Closures"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Lexical Scoping"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Closures allow functions to retain access to their lexical environment even after the outer function has executed."}),(0,r.jsx)(n.td,{children:"Lexical scoping defines how variable names are resolved based on their location in the source code."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'Requires a function to be defined within another function to "capture" the outer scope\'s variables.'}),(0,r.jsx)(n.td,{children:"Does not require functions; it's simply a rule for resolving variable names."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Used for state preservation, data encapsulation, and higher-order functions."}),(0,r.jsx)(n.td,{children:"Provides the mechanism by which closures work."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"advantages-of-closures",children:"Advantages of Closures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Closures provide a clean way to encapsulate state and behavior."}),"\n",(0,r.jsx)(n.li,{children:"They help avoid global variables by maintaining state in a local, private scope."}),"\n",(0,r.jsx)(n.li,{children:"Essential for callbacks, event handlers, and asynchronous programming."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"common-pitfalls",children:"Common Pitfalls"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Memory Leaks"}),": Improper use of closures can lead to memory leaks as variables in the closure may remain in memory longer than necessary."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Unexpected Behavior"}),": Capturing variables in a loop may lead to unexpected results if not handled properly (e.g., capturing the loop variable)."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"fixing-the-loop-issue",children:"Fixing the Loop Issue"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function setupEventHandlers() {\n  for (var i = 1; i <= 3; i++) {\n    (function (i) {\n      setTimeout(function () {\n        console.log(`Button ${i} clicked`);\n      }, i * 1000);\n    })(i);\n  }\n}\n\nsetupEventHandlers();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here, an ",(0,r.jsx)(n.strong,{children:"Immediately Invoked Function Expression (IIFE)"})," is used to create a new scope for each iteration."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);