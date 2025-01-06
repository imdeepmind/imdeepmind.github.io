"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[4659],{83915:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"programming-languages/javascript/variables","title":"Variables","description":"Variables in JavaScript are used to store data values, which can be of various types like numbers, strings, objects, and arrays.","source":"@site/docs/programming-languages/javascript/variables.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/variables","permalink":"/docs/programming-languages/javascript/variables","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/variables.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1734371540000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/programming-languages/javascript/introduction"},"next":{"title":"Data Types","permalink":"/docs/programming-languages/javascript/data-types"}}');var i=a(74848),l=a(28453);const c={sidebar_position:2},r="Variables",o={},t=[{value:"Variable Declaration Keywords",id:"variable-declaration-keywords",level:2},{value:"<code>var</code>",id:"var",level:3},{value:"<code>let</code>",id:"let",level:3},{value:"<code>const</code>",id:"const",level:3},{value:"Variable Scope",id:"variable-scope",level:2},{value:"Global Scope",id:"global-scope",level:3},{value:"Local Scope",id:"local-scope",level:3},{value:"Block Scope",id:"block-scope",level:3},{value:"Namespaces",id:"namespaces",level:2},{value:"Creating a Namespace",id:"creating-a-namespace",level:3},{value:"Nested Namespaces",id:"nested-namespaces",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"variables",children:"Variables"})}),"\n",(0,i.jsx)(n.p,{children:"Variables in JavaScript are used to store data values, which can be of various types like numbers, strings, objects, and arrays."}),"\n",(0,i.jsx)(n.h2,{id:"variable-declaration-keywords",children:"Variable Declaration Keywords"}),"\n",(0,i.jsxs)(n.p,{children:["JavaScript offers three main keywords to declare variables: ",(0,i.jsx)(n.code,{children:"var"}),", ",(0,i.jsx)(n.code,{children:"let"}),", and ",(0,i.jsx)(n.code,{children:"const"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"var",children:(0,i.jsx)(n.code,{children:"var"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scope"}),": ",(0,i.jsx)(n.code,{children:"var"})," is function-scoped or globally scoped. This means if declared inside a function, it can only be accessed within that function; if declared outside, it\u2019s accessible everywhere."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hoisting"}),": Variables declared with ",(0,i.jsx)(n.code,{children:"var"})," are hoisted, meaning they can be accessed before their declaration, but they are initialized as ",(0,i.jsx)(n.code,{children:"undefined"})," until the actual declaration is reached."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Re-declaration"}),": You can re-declare ",(0,i.jsx)(n.code,{children:"var"})," variables in the same scope.\nExample:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var name = "Alice";\nconsole.log(name); // Outputs: Alice\n'})}),"\n",(0,i.jsx)(n.h3,{id:"let",children:(0,i.jsx)(n.code,{children:"let"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scope"}),": ",(0,i.jsx)(n.code,{children:"let"})," is block-scoped, meaning it\u2019s only accessible within the nearest enclosing block (like within an ",(0,i.jsx)(n.code,{children:"if"})," statement or a loop)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hoisting"}),": Similar to ",(0,i.jsx)(n.code,{children:"var"}),", ",(0,i.jsx)(n.code,{children:"let"})," variables are hoisted, but accessing them before declaration results in a ",(0,i.jsx)(n.code,{children:"ReferenceError"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Re-declaration"}),": You cannot re-declare a ",(0,i.jsx)(n.code,{children:"let"})," variable in the same block."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let age = 25;\nif (true) {\n  let age = 30; // Different scope\n  console.log(age); // Outputs: 30\n}\nconsole.log(age); // Outputs: 25\n"})}),"\n",(0,i.jsx)(n.h3,{id:"const",children:(0,i.jsx)(n.code,{children:"const"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scope"}),": Like ",(0,i.jsx)(n.code,{children:"let"}),", ",(0,i.jsx)(n.code,{children:"const"})," is also block-scoped."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hoisting"}),": ",(0,i.jsx)(n.code,{children:"const"})," variables are hoisted and cannot be accessed before their declaration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Re-declaration"}),": You cannot re-declare or re-assign a ",(0,i.jsx)(n.code,{children:"const"})," variable. It must be initialized at the time of declaration."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const pi = 3.14;\n// pi = 3.14159; // Error: Assignment to constant variable\nconsole.log(pi); // Outputs: 3.14\n"})}),"\n",(0,i.jsx)(n.h2,{id:"variable-scope",children:"Variable Scope"}),"\n",(0,i.jsx)(n.p,{children:"Scope defines where a variable is accessible in your code."}),"\n",(0,i.jsx)(n.h3,{id:"global-scope",children:"Global Scope"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Variables declared outside any function or block are in the global scope and can be accessed from anywhere in your code."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var globalVar = "I am global!";\nfunction showGlobal() {\n  console.log(globalVar);\n}\nshowGlobal(); // Outputs: I am global!\n'})}),"\n",(0,i.jsx)(n.h3,{id:"local-scope",children:"Local Scope"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Variables declared inside a function are local to that function and cannot be accessed outside it."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function myFunction() {\n  var localVar = "I am local!";\n  console.log(localVar);\n}\nmyFunction(); // Outputs: I am local!\n// console.log(localVar); // Error: localVar is not defined\n'})}),"\n",(0,i.jsx)(n.h3,{id:"block-scope",children:"Block Scope"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Variables declared with ",(0,i.jsx)(n.code,{children:"let"})," and ",(0,i.jsx)(n.code,{children:"const"})," within a block (e.g., inside an ",(0,i.jsx)(n.code,{children:"if"})," statement) are limited to that block."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'if (true) {\n  let blockVar = "I am block-scoped!";\n  console.log(blockVar); // Outputs: I am block-scoped!\n}\n// console.log(blockVar); // Error: blockVar is not defined\n'})}),"\n",(0,i.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Definition"}),": A namespace is a container that helps organize code and prevents name collisions. It allows grouping related variables and functions together under a single identifier."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),": Namespaces are especially useful in larger applications to avoid conflicts between variables and functions with the same name."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-namespace",children:"Creating a Namespace"}),"\n",(0,i.jsx)(n.p,{children:"You can create a namespace using an object:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const MyNamespace = {\n  variable1: "Value 1",\n  variable2: "Value 2",\n  myFunction: function () {\n    console.log("Function inside namespace");\n  },\n};\n\n// Accessing namespace properties\nconsole.log(MyNamespace.variable1); // Outputs: Value 1\nMyNamespace.myFunction(); // Outputs: Function inside namespace\n'})}),"\n",(0,i.jsx)(n.h3,{id:"nested-namespaces",children:"Nested Namespaces"}),"\n",(0,i.jsx)(n.p,{children:"Namespaces can be nested to create a hierarchy:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const App = {\n  Module1: {\n    variable1: "Module 1 Variable",\n    function1: function () {\n      console.log("Function in Module 1");\n    },\n  },\n  Module2: {\n    variable2: "Module 2 Variable",\n    function2: function () {\n      console.log("Function in Module 2");\n    },\n  },\n};\n\n// Accessing nested namespace properties\nconsole.log(App.Module1.variable1); // Outputs: Module 1 Variable\nApp.Module2.function2(); // Outputs: Function in Module 2\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>r});var s=a(96540);const i={},l=s.createContext(i);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);