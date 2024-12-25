"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[9236],{1004:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"programming-languages/javascript/callback-hof","title":"Callbacks and Higher-Order Functions","description":"In JavaScript, callbacks and higher-order functions are key concepts, especially when dealing with asynchronous programming, functional programming paradigms, and code modularity.","source":"@site/docs/programming-languages/javascript/callback-hof.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/callback-hof","permalink":"/docs/programming-languages/javascript/callback-hof","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/callback-hof.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735114838000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Functions","permalink":"/docs/programming-languages/javascript/functions"},"next":{"title":"Conditions and Loops","permalink":"/docs/programming-languages/javascript/conditions-loops"}}');var r=a(4848),t=a(8453);const i={sidebar_position:6},c="Callbacks and Higher-Order Functions",o={},l=[{value:"Callbacks",id:"callbacks",level:2},{value:"Characteristics of Callbacks:",id:"characteristics-of-callbacks",level:3},{value:"Example of a Callback Function",id:"example-of-a-callback-function",level:4},{value:"Callback as an Anonymous Function",id:"callback-as-an-anonymous-function",level:4},{value:"Higher-Order Functions",id:"higher-order-functions",level:2},{value:"Characteristics of Higher-Order Functions:",id:"characteristics-of-higher-order-functions",level:3},{value:"Example 1: Function that Takes Another Function as an Argument",id:"example-1-function-that-takes-another-function-as-an-argument",level:4},{value:"Example 2: Function that Returns Another Function",id:"example-2-function-that-returns-another-function",level:4},{value:"Example 3: Array Methods as Higher-Order Functions",id:"example-3-array-methods-as-higher-order-functions",level:4},{value:"Key Differences Between Callbacks and Higher-Order Functions",id:"key-differences-between-callbacks-and-higher-order-functions",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"callbacks-and-higher-order-functions",children:"Callbacks and Higher-Order Functions"})}),"\n",(0,r.jsxs)(e.p,{children:["In JavaScript, ",(0,r.jsx)(e.strong,{children:"callbacks"})," and ",(0,r.jsx)(e.strong,{children:"higher-order functions"})," are key concepts, especially when dealing with asynchronous programming, functional programming paradigms, and code modularity."]}),"\n",(0,r.jsx)(e.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,r.jsxs)(e.p,{children:["A ",(0,r.jsx)(e.strong,{children:"callback"})," is a function that is passed as an argument to another function, which is then executed after a certain event or condition is met. Callbacks allow you to control the flow of execution in asynchronous operations and handle results when they're ready."]}),"\n",(0,r.jsx)(e.h3,{id:"characteristics-of-callbacks",children:"Characteristics of Callbacks:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Asynchronous"}),": Callbacks are often used in asynchronous operations such as reading files, making API calls, or processing user input."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Synchronous"}),": They can also be used for synchronous operations, though they are most commonly associated with asynchronous programming."]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"example-of-a-callback-function",children:"Example of a Callback Function"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'function fetchData(callback) {\n  // Simulating asynchronous data fetching\n  setTimeout(() => {\n    const data = { userId: 1, name: "Alice" };\n    callback(data); // Passing data to the callback function\n  }, 2000);\n}\n\nfunction displayData(data) {\n  console.log("User Data:", data);\n}\n\n// Calling fetchData and passing displayData as the callback\nfetchData(displayData);\n'})}),"\n",(0,r.jsx)(e.p,{children:"In the above example:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"fetchData"})," simulates fetching data asynchronously and accepts a callback (",(0,r.jsx)(e.code,{children:"displayData"}),")."]}),"\n",(0,r.jsxs)(e.li,{children:["Once the data is fetched, it is passed to the ",(0,r.jsx)(e.code,{children:"displayData"})," function as an argument."]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"callback-as-an-anonymous-function",children:"Callback as an Anonymous Function"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'function fetchData(callback) {\n  setTimeout(() => {\n    const data = { userId: 1, name: "Bob" };\n    callback(data);\n  }, 2000);\n}\n\nfetchData(function (data) {\n  console.log("User Data:", data);\n});\n'})}),"\n",(0,r.jsx)(e.h2,{id:"higher-order-functions",children:"Higher-Order Functions"}),"\n",(0,r.jsxs)(e.p,{children:["A ",(0,r.jsx)(e.strong,{children:"higher-order function"})," is a function that either:"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Takes one or more functions as arguments, or"}),"\n",(0,r.jsx)(e.li,{children:"Returns a function as a result."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Higher-order functions are a fundamental concept in functional programming and help promote more reusable and modular code."}),"\n",(0,r.jsx)(e.h3,{id:"characteristics-of-higher-order-functions",children:"Characteristics of Higher-Order Functions:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"They allow functions to be treated as first-class citizens, meaning they can be passed around as arguments, returned from other functions, and assigned to variables."}),"\n",(0,r.jsx)(e.li,{children:"Higher-order functions are often used in callbacks, event handlers, and when working with functional libraries like Lodash."}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"example-1-function-that-takes-another-function-as-an-argument",children:"Example 1: Function that Takes Another Function as an Argument"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'function greet(name, callback) {\n  const greeting = `Hello, ${name}!`;\n  callback(greeting); // Passing greeting to callback\n}\n\ngreet("Alice", function (message) {\n  console.log(message); // Output: Hello, Alice!\n});\n'})}),"\n",(0,r.jsxs)(e.p,{children:["Here, the ",(0,r.jsx)(e.code,{children:"greet"})," function is a higher-order function because it takes another function (callback) as an argument and calls it inside."]}),"\n",(0,r.jsx)(e.h4,{id:"example-2-function-that-returns-another-function",children:"Example 2: Function that Returns Another Function"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function multiplyBy(factor) {\n  return function (number) {\n    return number * factor;\n  };\n}\n\nconst multiplyByTwo = multiplyBy(2);\nconsole.log(multiplyByTwo(5)); // Output: 10\n\nconst multiplyByThree = multiplyBy(3);\nconsole.log(multiplyByThree(5)); // Output: 15\n"})}),"\n",(0,r.jsx)(e.p,{children:"In this example:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["The ",(0,r.jsx)(e.code,{children:"multiplyBy"})," function returns a new function that can multiply a number by a given factor."]}),"\n",(0,r.jsxs)(e.li,{children:["The returned function (e.g., ",(0,r.jsx)(e.code,{children:"multiplyByTwo"}),") is then invoked with specific values."]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"example-3-array-methods-as-higher-order-functions",children:"Example 3: Array Methods as Higher-Order Functions"}),"\n",(0,r.jsxs)(e.p,{children:["Many JavaScript array methods, like ",(0,r.jsx)(e.code,{children:"map()"}),", ",(0,r.jsx)(e.code,{children:"filter()"}),", and ",(0,r.jsx)(e.code,{children:"reduce()"}),", are examples of higher-order functions because they take a function as an argument."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const numbers = [1, 2, 3, 4, 5];\n\n// Using map, which is a higher-order function\nconst doubledNumbers = numbers.map(function (num) {\n  return num * 2;\n});\n\nconsole.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]\n"})}),"\n",(0,r.jsx)(e.h2,{id:"key-differences-between-callbacks-and-higher-order-functions",children:"Key Differences Between Callbacks and Higher-Order Functions"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Aspect"}),(0,r.jsx)(e.th,{children:"Callback"}),(0,r.jsx)(e.th,{children:"Higher-Order Function"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Definition"})}),(0,r.jsx)(e.td,{children:"A function passed as an argument to another function."}),(0,r.jsx)(e.td,{children:"A function that either takes one or more functions as arguments or returns a function."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Purpose"})}),(0,r.jsx)(e.td,{children:"Used to handle asynchronous operations or pass a function to another for execution later."}),(0,r.jsx)(e.td,{children:"Used to create more reusable, modular, and composable functions."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Example"})}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"setTimeout()"})," accepting a function as the callback."]}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"map()"})," or ",(0,r.jsx)(e.code,{children:"filter()"})," array methods that take a function as an argument."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Return Value"})}),(0,r.jsx)(e.td,{children:"Typically, callbacks do not return a value; they are executed later."}),(0,r.jsx)(e.td,{children:"Can return a new function or modify a data structure."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Typical Use Case"})}),(0,r.jsx)(e.td,{children:"Asynchronous handling, event handling, error handling."}),(0,r.jsx)(e.td,{children:"Functional programming, creating abstractions, functional composition."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(e.p,{children:["Both ",(0,r.jsx)(e.strong,{children:"callbacks"})," and ",(0,r.jsx)(e.strong,{children:"higher-order functions"})," are foundational concepts in JavaScript:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Callbacks"})," enable asynchronous operations and deferred execution."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Higher-order functions"})," make JavaScript more powerful by allowing functions to be used as arguments or returned as values."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Understanding and utilizing these concepts allows developers to write more concise, flexible, and modular code, especially when dealing with asynchronous processes, event handling, and functional programming techniques."})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>c});var s=a(6540);const r={},t=s.createContext(r);function i(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);