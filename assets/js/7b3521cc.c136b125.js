"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[8449],{35795:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"programming-languages/javascript/conditions-loops","title":"Conditions and Loops","description":"Conditionals","source":"@site/docs/programming-languages/javascript/conditions-loops.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/conditions-loops","permalink":"/docs/programming-languages/javascript/conditions-loops","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/conditions-loops.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735115573000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Asynchronous Programming","permalink":"/docs/programming-languages/javascript/asynchronous"},"next":{"title":"Execution Context","permalink":"/docs/programming-languages/javascript/execution-context"}}');var s=o(74848),t=o(28453);const l={sidebar_position:7},a="Conditions and Loops",c={},r=[{value:"Conditionals",id:"conditionals",level:2},{value:"<code>if</code> Statement",id:"if-statement",level:3},{value:"<code>if...else</code> Statement",id:"ifelse-statement",level:3},{value:"<code>else if</code> Statement",id:"else-if-statement",level:3},{value:"Ternary Operator",id:"ternary-operator",level:3},{value:"Switch Statement",id:"switch-statement",level:3},{value:"Loops in JavaScript",id:"loops-in-javascript",level:2},{value:"<code>for</code> Loop",id:"for-loop",level:3},{value:"<code>while</code> Loop",id:"while-loop",level:3},{value:"<code>do...while</code> Loop",id:"dowhile-loop",level:3},{value:"<code>for...in</code> Loop",id:"forin-loop",level:3},{value:"<code>for...of</code> Loop",id:"forof-loop",level:3},{value:"Important Notes on Loops and Conditionals",id:"important-notes-on-loops-and-conditionals",level:2},{value:"Short-circuiting in Logical Operators",id:"short-circuiting-in-logical-operators",level:3},{value:"Breaking and Continuing in Loops",id:"breaking-and-continuing-in-loops",level:3},{value:"Infinite Loops",id:"infinite-loops",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"conditions-and-loops",children:"Conditions and Loops"})}),"\n",(0,s.jsx)(n.h2,{id:"conditionals",children:"Conditionals"}),"\n",(0,s.jsx)(n.p,{children:"Conditionals allow you to control the flow of your program based on certain conditions. JavaScript provides several ways to handle conditional logic."}),"\n",(0,s.jsxs)(n.h3,{id:"if-statement",children:[(0,s.jsx)(n.code,{children:"if"})," Statement"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"if"})," statement is the simplest form of conditional. It executes a block of code only if a specified condition evaluates to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (condition) {\n  // Code to execute if condition is true\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'let age = 18;\nif (age >= 18) {\n  console.log("You are an adult");\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"ifelse-statement",children:[(0,s.jsx)(n.code,{children:"if...else"})," Statement"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"if...else"})," statement allows you to specify a block of code to execute when the condition is true, and another block of code to execute when it is false."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (condition) {\n  // Code to execute if condition is true\n} else {\n  // Code to execute if condition is false\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'let age = 16;\nif (age >= 18) {\n  console.log("You are an adult");\n} else {\n  console.log("You are a minor");\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"else-if-statement",children:[(0,s.jsx)(n.code,{children:"else if"})," Statement"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"else if"})," statement allows for multiple conditions to be checked in sequence. If the first condition is false, it checks the next one, and so on."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (condition1) {\n  // Code to execute if condition1 is true\n} else if (condition2) {\n  // Code to execute if condition2 is true\n} else {\n  // Code to execute if none of the conditions are true\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'let age = 20;\nif (age >= 65) {\n  console.log("You are a senior");\n} else if (age >= 18) {\n  console.log("You are an adult");\n} else {\n  console.log("You are a minor");\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ternary-operator",children:"Ternary Operator"}),"\n",(0,s.jsxs)(n.p,{children:["The ternary operator provides a shorthand for an ",(0,s.jsx)(n.code,{children:"if...else"})," statement. It's used for simple conditional expressions."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"condition ? expressionIfTrue : expressionIfFalse;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'let age = 18;\nlet status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status); // \'Adult\'\n'})}),"\n",(0,s.jsx)(n.h3,{id:"switch-statement",children:"Switch Statement"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"switch"})," statement is used to execute one of many blocks of code based on the value of a variable or expression. It\u2019s an alternative to multiple ",(0,s.jsx)(n.code,{children:"if...else if"})," statements when checking for several possible conditions."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"switch (expression) {\n  case value1:\n    // Code to execute if expression === value1\n    break;\n  case value2:\n    // Code to execute if expression === value2\n    break;\n  default:\n  // Code to execute if expression doesn't match any value\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'let day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Start of the week");\n    break;\n  case "Friday":\n    console.log("End of the week");\n    break;\n  default:\n    console.log("Midweek");\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"loops-in-javascript",children:"Loops in JavaScript"}),"\n",(0,s.jsx)(n.p,{children:"Loops allow you to repeat a block of code multiple times until a specified condition is met."}),"\n",(0,s.jsxs)(n.h3,{id:"for-loop",children:[(0,s.jsx)(n.code,{children:"for"})," Loop"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"for"})," loop is the most commonly used loop, ideal when you know the number of iterations beforehand."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"for (initialization; condition; increment / decrement) {\n  // Code to execute on each iteration\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"for (let i = 0; i < 5; i++) {\n  console.log(i); // Outputs: 0 1 2 3 4\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"while-loop",children:[(0,s.jsx)(n.code,{children:"while"})," Loop"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"while"})," loop executes the block of code as long as the specified condition evaluates to ",(0,s.jsx)(n.code,{children:"true"}),". If the condition is false initially, the block will not execute."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"while (condition) {\n  // Code to execute while the condition is true\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let i = 0;\nwhile (i < 5) {\n  console.log(i); // Outputs: 0 1 2 3 4\n  i++;\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"dowhile-loop",children:[(0,s.jsx)(n.code,{children:"do...while"})," Loop"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"do...while"})," loop is similar to the ",(0,s.jsx)(n.code,{children:"while"})," loop, but it guarantees that the block of code is executed at least once before checking the condition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"do {\n  // Code to execute at least once\n} while (condition);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let i = 0;\ndo {\n  console.log(i); // Outputs: 0 1 2 3 4\n  i++;\n} while (i < 5);\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"forin-loop",children:[(0,s.jsx)(n.code,{children:"for...in"})," Loop"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"for...in"})," loop is used to iterate over the properties of an object. It is not commonly used for arrays because the order of properties is not guaranteed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"for (let key in object) {\n  // Code to execute for each property of the object\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'let person = { name: "Alice", age: 25 };\nfor (let key in person) {\n  console.log(key + ": " + person[key]);\n}\n// Outputs:\n// name: Alice\n// age: 25\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"forof-loop",children:[(0,s.jsx)(n.code,{children:"for...of"})," Loop"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"for...of"})," loop is used to iterate over iterable objects like arrays, strings, and other collections. It provides a simpler way to loop through the values of an iterable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"for (let item of iterable) {\n  // Code to execute for each item in the iterable\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let numbers = [1, 2, 3, 4, 5];\nfor (let num of numbers) {\n  console.log(num); // Outputs: 1 2 3 4 5\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"important-notes-on-loops-and-conditionals",children:"Important Notes on Loops and Conditionals"}),"\n",(0,s.jsx)(n.h3,{id:"short-circuiting-in-logical-operators",children:"Short-circuiting in Logical Operators"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["JavaScript uses short-circuit evaluation in logical operators (",(0,s.jsx)(n.code,{children:"&&"}),", ",(0,s.jsx)(n.code,{children:"||"}),"). This means the evaluation stops as soon as the result is determined."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"&&"})," stops when a ",(0,s.jsx)(n.code,{children:"false"})," value is encountered, and ",(0,s.jsx)(n.code,{children:"||"})," stops when a ",(0,s.jsx)(n.code,{children:"true"})," value is encountered."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let x = 0;\nif (x && 1 / x) {\n  // This code will not run because x is falsy (0).\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"breaking-and-continuing-in-loops",children:"Breaking and Continuing in Loops"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can use the ",(0,s.jsx)(n.code,{children:"break"})," statement to exit a loop early, and the ",(0,s.jsx)(n.code,{children:"continue"})," statement to skip the current iteration and move to the next."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"for (let i = 0; i < 5; i++) {\n  if (i === 2) {\n    continue; // Skip the iteration when i equals 2\n  }\n  console.log(i); // Outputs: 0 1 3 4\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"infinite-loops",children:"Infinite Loops"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Be cautious with loops that have conditions that never become ",(0,s.jsx)(n.code,{children:"false"}),", as they can result in infinite loops, which can crash the browser or application."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"while (true) {\n  // This will run forever unless explicitly broken out of\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var i=o(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);