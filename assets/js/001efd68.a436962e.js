"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[1045],{3754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"programming-languages/javascript/mutation","title":"Mutation and Immutability","description":"In JavaScript, mutation refers to modifying or changing a value directly in memory, while immutability involves creating new values without altering the original data. Understanding which data types are mutable or immutable is essential for managing data flow and avoiding unintended side effects.","source":"@site/docs/programming-languages/javascript/mutation.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/mutation","permalink":"/docs/programming-languages/javascript/mutation","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/mutation.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1734371540000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Data Types","permalink":"/docs/programming-languages/javascript/data-types"},"next":{"title":"Introduction","permalink":"/docs/programming-languages/go/introduction"}}');var i=n(4848),r=n(8453);const s={sidebar_position:4},l="Mutation and Immutability",d={},c=[{value:"Mutable vs. Immutable Data Types in JavaScript",id:"mutable-vs-immutable-data-types-in-javascript",level:2},{value:"Immutable Data Types",id:"immutable-data-types",level:3},{value:"Example with Primitive Types",id:"example-with-primitive-types",level:4},{value:"Immutable String Example",id:"immutable-string-example",level:4},{value:"Mutable Data Types",id:"mutable-data-types",level:3},{value:"Example with Mutable Objects",id:"example-with-mutable-objects",level:4},{value:"Mutable Array Example",id:"mutable-array-example",level:4},{value:"Controlling Mutation with <code>const</code>, <code>Object.freeze()</code>, and Libraries",id:"controlling-mutation-with-const-objectfreeze-and-libraries",level:2},{value:"Summary",id:"summary",level:3}];function o(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"mutation-and-immutability",children:"Mutation and Immutability"})}),"\n",(0,i.jsxs)(t.p,{children:["In JavaScript, ",(0,i.jsx)(t.strong,{children:"mutation"})," refers to modifying or changing a value directly in memory, while ",(0,i.jsx)(t.strong,{children:"immutability"})," involves creating new values without altering the original data. Understanding which data types are mutable or immutable is essential for managing data flow and avoiding unintended side effects."]}),"\n",(0,i.jsx)(t.h2,{id:"mutable-vs-immutable-data-types-in-javascript",children:"Mutable vs. Immutable Data Types in JavaScript"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Immutable Data Types (Cannot be Mutated)"}),"\n",(0,i.jsx)(t.li,{children:"Mutable Data Types (Can be Mutated)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"immutable-data-types",children:"Immutable Data Types"}),"\n",(0,i.jsxs)(t.p,{children:["JavaScript\u2019s ",(0,i.jsx)(t.strong,{children:"primitive types"})," are immutable. This includes:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Number"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"String"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"BigInt"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Symbol"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Undefined"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Null"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These data types are immutable because their values, once created, cannot be changed directly. Instead, any operation that appears to modify an immutable type actually creates a new value."}),"\n",(0,i.jsx)(t.h4,{id:"example-with-primitive-types",children:"Example with Primitive Types"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"let x = 10;\nlet y = x; // Copies the value of x (10) to y\n\ny = 20; // Changing y does not affect x\nconsole.log(x); // Output: 10\nconsole.log(y); // Output: 20\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In this example, reassigning ",(0,i.jsx)(t.code,{children:"y"})," does not affect ",(0,i.jsx)(t.code,{children:"x"})," because ",(0,i.jsx)(t.code,{children:"y"})," holds a copy of the original value rather than a reference to it."]}),"\n",(0,i.jsx)(t.h4,{id:"immutable-string-example",children:"Immutable String Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'let str = "Hello";\nlet newStr = str.replace("H", "J");\n\nconsole.log(str); // Output: "Hello" (original string remains unchanged)\nconsole.log(newStr); // Output: "Jello" (new string created)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Even though it seems like ",(0,i.jsx)(t.code,{children:"replace()"})," would modify ",(0,i.jsx)(t.code,{children:"str"}),", the operation returns a new string without altering the original one."]}),"\n",(0,i.jsx)(t.h3,{id:"mutable-data-types",children:"Mutable Data Types"}),"\n",(0,i.jsxs)(t.p,{children:["In JavaScript, ",(0,i.jsx)(t.strong,{children:"reference types"})," like objects and arrays are mutable. This includes:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Object"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Array"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Function"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These data types are mutable because they are stored as references, which means multiple variables can refer to the same object or array in memory. Mutating a reference type via one variable affects all variables that reference the same object."}),"\n",(0,i.jsx)(t.h4,{id:"example-with-mutable-objects",children:"Example with Mutable Objects"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'let person = { name: "Alice" };\nlet alias = person; // Both person and alias refer to the same object\n\nalias.name = "Bob"; // Modifying alias also affects person\nconsole.log(person.name); // Output: "Bob"\nconsole.log(alias.name); // Output: "Bob"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In this example, ",(0,i.jsx)(t.code,{children:"person"})," and ",(0,i.jsx)(t.code,{children:"alias"})," both point to the same object in memory. Changing the ",(0,i.jsx)(t.code,{children:"name"})," property on ",(0,i.jsx)(t.code,{children:"alias"})," mutates the object, which is reflected when accessing ",(0,i.jsx)(t.code,{children:"person.name"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"mutable-array-example",children:"Mutable Array Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"let arr1 = [1, 2, 3];\nlet arr2 = arr1; // arr1 and arr2 reference the same array\n\narr2.push(4); // Modifying arr2 also affects arr1\nconsole.log(arr1); // Output: [1, 2, 3, 4]\nconsole.log(arr2); // Output: [1, 2, 3, 4]\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Since arrays are mutable, operations like ",(0,i.jsx)(t.code,{children:"push()"})," mutate the original array, affecting all references to that array."]}),"\n",(0,i.jsxs)(t.h2,{id:"controlling-mutation-with-const-objectfreeze-and-libraries",children:["Controlling Mutation with ",(0,i.jsx)(t.code,{children:"const"}),", ",(0,i.jsx)(t.code,{children:"Object.freeze()"}),", and Libraries"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"const"})}),": Prevents reassignment of a variable but does not make it immutable. For instance, a ",(0,i.jsx)(t.code,{children:"const"})," object or array can still have its properties or elements modified."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'const obj = { name: "Alice" };\nobj.name = "Bob"; // Allowed, as it modifies the object but does not reassign it\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Object.freeze()"})}),": Prevents modification of an object\u2019s properties, making the object effectively immutable at the top level. Note, however, that it does not make nested objects immutable (this is a shallow freeze)."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'const frozenObj = Object.freeze({ name: "Alice" });\nfrozenObj.name = "Bob"; // Ignored in strict mode, no effect\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Immutability Libraries"}),": Libraries like ",(0,i.jsx)(t.code,{children:"Immutable.js"})," and ",(0,i.jsx)(t.code,{children:"Immer"})," can create deeply immutable data structures, which is useful for state management in complex applications."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Data Type"}),(0,i.jsx)(t.th,{children:"Mutability"}),(0,i.jsx)(t.th,{children:"Example"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Number"})}),(0,i.jsx)(t.td,{children:"Immutable"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"let x = 5; x = x + 1;"})}),(0,i.jsx)(t.td,{children:"Creates new values, not modified directly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Immutable"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"abc".replace("a", "z")'})}),(0,i.jsx)(t.td,{children:"Returns a new string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsx)(t.td,{children:"Immutable"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"let isTrue = true;"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Object"})}),(0,i.jsx)(t.td,{children:"Mutable"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'{ name: "Alice" }'})}),(0,i.jsx)(t.td,{children:"Properties can be changed directly"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array"})}),(0,i.jsx)(t.td,{children:"Mutable"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[1, 2, 3].push(4)"})}),(0,i.jsx)(t.td,{children:"Elements can be added, removed, or changed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Function"})}),(0,i.jsx)(t.td,{children:"Mutable"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"function greet() {}"})}),(0,i.jsx)(t.td,{children:"Properties can be added to function objects"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Understanding the mutability of different data types helps manage data effectively, especially when working with complex applications where unintended mutations can lead to bugs and side effects."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);