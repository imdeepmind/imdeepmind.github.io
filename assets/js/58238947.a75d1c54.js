"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[6423],{4656:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"programming-languages/javascript/coercion-conversion","title":"Type Coercion vs Type Conversion","description":"In JavaScript, handling data types and performing operations that involve different data types is a common occurrence. JavaScript has two important concepts related to types: Type Coercion and Type Conversion. Although these terms are often used interchangeably, they have distinct meanings in the context of JavaScript programming.","source":"@site/docs/programming-languages/javascript/coercion-conversion.md","sourceDirName":"programming-languages/javascript","slug":"/programming-languages/javascript/coercion-conversion","permalink":"/docs/programming-languages/javascript/coercion-conversion","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/javascript/coercion-conversion.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735588931000,"sidebarPosition":17,"frontMatter":{"sidebar_position":17},"sidebar":"tutorialSidebar","previous":{"title":"Object-Oriented Programming (OOPs)","permalink":"/docs/programming-languages/javascript/oop"},"next":{"title":"\\"use strict\\"","permalink":"/docs/programming-languages/javascript/use-strict"}}');var i=r(4848),s=r(8453);const t={sidebar_position:17},c="Type Coercion vs Type Conversion",l={},a=[{value:"Type Coercion",id:"type-coercion",level:2},{value:"Examples of Type Coercion",id:"examples-of-type-coercion",level:3},{value:"String and Number Coercion (Concatenation and Addition)",id:"string-and-number-coercion-concatenation-and-addition",level:4},{value:"Boolean Coercion (Truthiness/Falsiness)",id:"boolean-coercion-truthinessfalsiness",level:4},{value:"Coercion during Comparison (Equality operators)",id:"coercion-during-comparison-equality-operators",level:4},{value:"Type Conversion",id:"type-conversion",level:2},{value:"Examples of Type Conversion",id:"examples-of-type-conversion",level:3},{value:"Converting a String to a Number",id:"converting-a-string-to-a-number",level:4},{value:"Converting a Number to a String",id:"converting-a-number-to-a-string",level:4},{value:"Converting to Boolean",id:"converting-to-boolean",level:4},{value:"Differences Between Type Coercion and Type Conversion",id:"differences-between-type-coercion-and-type-conversion",level:2},{value:"Falsy and Truthy Values in JavaScript",id:"falsy-and-truthy-values-in-javascript",level:2},{value:"Falsy Values",id:"falsy-values",level:3},{value:"Truthy Values",id:"truthy-values",level:3},{value:"When to Use Type Coercion and Type Conversion",id:"when-to-use-type-coercion-and-type-conversion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"type-coercion-vs-type-conversion",children:"Type Coercion vs Type Conversion"})}),"\n",(0,i.jsxs)(n.p,{children:["In JavaScript, handling data types and performing operations that involve different data types is a common occurrence. JavaScript has two important concepts related to types: ",(0,i.jsx)(n.strong,{children:"Type Coercion"})," and ",(0,i.jsx)(n.strong,{children:"Type Conversion"}),". Although these terms are often used interchangeably, they have distinct meanings in the context of JavaScript programming."]}),"\n",(0,i.jsx)(n.h2,{id:"type-coercion",children:"Type Coercion"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type Coercion"})," refers to the ",(0,i.jsx)(n.strong,{children:"automatic or implicit"})," conversion of one data type to another by JavaScript. This happens when you perform an operation on values of different types, and JavaScript converts one of the operands to a suitable type for the operation. This process is automatic, and the programmer does not have to explicitly call a conversion function."]}),"\n",(0,i.jsxs)(n.p,{children:["JavaScript uses ",(0,i.jsx)(n.strong,{children:"implicit coercion"}),", which means that the interpreter automatically converts types in certain situations, based on the operation being performed."]}),"\n",(0,i.jsx)(n.h3,{id:"examples-of-type-coercion",children:"Examples of Type Coercion"}),"\n",(0,i.jsx)(n.h4,{id:"string-and-number-coercion-concatenation-and-addition",children:"String and Number Coercion (Concatenation and Addition)"}),"\n",(0,i.jsx)(n.p,{children:"When a number is added to a string, JavaScript implicitly converts the number to a string."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let result = 5 + "5";\nconsole.log(result); // Output: "55" (Number 5 is coerced to string "5")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this case, the number ",(0,i.jsx)(n.code,{children:"5"})," is coerced into a string ",(0,i.jsx)(n.code,{children:'"5"'}),", and then the two strings are concatenated."]}),"\n",(0,i.jsx)(n.h4,{id:"boolean-coercion-truthinessfalsiness",children:"Boolean Coercion (Truthiness/Falsiness)"}),"\n",(0,i.jsxs)(n.p,{children:["JavaScript has rules for ",(0,i.jsx)(n.strong,{children:"truthy"})," and ",(0,i.jsx)(n.strong,{children:"falsy"})," values. Falsy values are automatically coerced to ",(0,i.jsx)(n.code,{children:"false"}),", and truthy values are coerced to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'if ("hello") {\n  console.log("This is truthy!");\n} else {\n  console.log("This is falsy!");\n}\n// Output: This is truthy!\n\nif (0) {\n  console.log("This is truthy!");\n} else {\n  console.log("This is falsy!");\n}\n// Output: This is falsy!\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the first condition, ",(0,i.jsx)(n.code,{children:'"hello"'})," is a truthy value, so the condition evaluates to ",(0,i.jsx)(n.code,{children:"true"}),". In the second, ",(0,i.jsx)(n.code,{children:"0"})," is a falsy value, so the condition evaluates to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"coercion-during-comparison-equality-operators",children:"Coercion during Comparison (Equality operators)"}),"\n",(0,i.jsxs)(n.p,{children:["JavaScript uses type coercion in comparison operations, especially with the loose equality ",(0,i.jsx)(n.code,{children:"=="})," operator."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'console.log(5 == "5"); // Output: true\nconsole.log(null == undefined); // Output: true\nconsole.log(0 == false); // Output: true\nconsole.log(false == ""); // Output: true\n'})}),"\n",(0,i.jsx)(n.p,{children:"In these cases, JavaScript converts the operands to a common type before comparing them."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'5 == "5"'})," is ",(0,i.jsx)(n.code,{children:"true"})," because JavaScript coerces the string ",(0,i.jsx)(n.code,{children:'"5"'})," into a number."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"null == undefined"})," is ",(0,i.jsx)(n.code,{children:"true"})," because they are considered loosely equal."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"0 == false"})," and ",(0,i.jsx)(n.code,{children:'false == ""'})," are ",(0,i.jsx)(n.code,{children:"true"})," because both ",(0,i.jsx)(n.code,{children:"false"})," and ",(0,i.jsx)(n.code,{children:'""'})," are coerced to ",(0,i.jsx)(n.code,{children:"0"})," when compared."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"type-conversion",children:"Type Conversion"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type Conversion"})," (also called ",(0,i.jsx)(n.strong,{children:"Explicit Type Conversion"}),") is the process where a programmer manually converts a value from one type to another using JavaScript functions or methods. Unlike ",(0,i.jsx)(n.strong,{children:"type coercion"}),", which is automatic, type conversion requires explicit action from the developer to change the type."]}),"\n",(0,i.jsx)(n.h3,{id:"examples-of-type-conversion",children:"Examples of Type Conversion"}),"\n",(0,i.jsx)(n.h4,{id:"converting-a-string-to-a-number",children:"Converting a String to a Number"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"Number()"})," function to explicitly convert a string into a number."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let num = Number("123");\nconsole.log(num); // Output: 123 (string "123" is explicitly converted to number 123)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Other functions like ",(0,i.jsx)(n.code,{children:"parseInt()"})," and ",(0,i.jsx)(n.code,{children:"parseFloat()"})," also perform similar operations, but ",(0,i.jsx)(n.code,{children:"parseInt()"})," is for converting to integers, while ",(0,i.jsx)(n.code,{children:"parseFloat()"})," converts to floating-point numbers."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let intNum = parseInt("100.5");\nconsole.log(intNum); // Output: 100 (parseInt converts the string to integer)\n\nlet floatNum = parseFloat("100.5");\nconsole.log(floatNum); // Output: 100.5 (parseFloat keeps the decimal)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"converting-a-number-to-a-string",children:"Converting a Number to a String"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"String()"})," function or the ",(0,i.jsx)(n.code,{children:".toString()"})," method to explicitly convert a number to a string."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'let str = String(123);\nconsole.log(str); // Output: "123" (number 123 is converted to string "123")\n\nlet str2 = (123).toString();\nconsole.log(str2); // Output: "123"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"converting-to-boolean",children:"Converting to Boolean"}),"\n",(0,i.jsxs)(n.p,{children:["To explicitly convert a value to a boolean, you can use the ",(0,i.jsx)(n.code,{children:"Boolean()"})," function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let isTrue = Boolean(1); // Output: true (1 is truthy)\nlet isFalse = Boolean(0); // Output: false (0 is falsy)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["JavaScript will convert truthy values (non-zero numbers, non-empty strings, objects, etc.) to ",(0,i.jsx)(n.code,{children:"true"}),", and falsy values (",(0,i.jsx)(n.code,{children:"0"}),", ",(0,i.jsx)(n.code,{children:"NaN"}),", ",(0,i.jsx)(n.code,{children:"null"}),", ",(0,i.jsx)(n.code,{children:"undefined"}),", ",(0,i.jsx)(n.code,{children:'""'}),") to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"differences-between-type-coercion-and-type-conversion",children:"Differences Between Type Coercion and Type Conversion"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Aspect"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Type Coercion"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Type Conversion"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Definition"})}),(0,i.jsx)(n.td,{children:"Implicit conversion done by JavaScript automatically."}),(0,i.jsx)(n.td,{children:"Explicit conversion done by the programmer."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Control"})}),(0,i.jsx)(n.td,{children:"Programmer has no control over when it happens."}),(0,i.jsx)(n.td,{children:"Programmer has full control over the conversion process."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Occurrence"})}),(0,i.jsx)(n.td,{children:"Occurs during operations like addition, comparisons, etc."}),(0,i.jsxs)(n.td,{children:["Occurs when using functions like ",(0,i.jsx)(n.code,{children:"Number()"}),", ",(0,i.jsx)(n.code,{children:"String()"}),", etc."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Example"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'5 + "5"'})," \u2192 ",(0,i.jsx)(n.code,{children:'"55"'})]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'Number("5")'})," \u2192 ",(0,i.jsx)(n.code,{children:"5"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Flexibility"})}),(0,i.jsx)(n.td,{children:"Automatic and might lead to unexpected results."}),(0,i.jsx)(n.td,{children:"Provides more predictable and controlled results."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"falsy-and-truthy-values-in-javascript",children:"Falsy and Truthy Values in JavaScript"}),"\n",(0,i.jsxs)(n.p,{children:["Understanding ",(0,i.jsx)(n.strong,{children:"truthy"})," and ",(0,i.jsx)(n.strong,{children:"falsy"})," values is important for type coercion, as JavaScript automatically converts values in conditional checks."]}),"\n",(0,i.jsx)(n.h3,{id:"falsy-values",children:"Falsy Values"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"false"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"-0"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"0n"})," (BigInt zero)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'""'})," (empty string)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"null"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"undefined"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"NaN"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Any value that is not falsy is considered truthy."}),"\n",(0,i.jsx)(n.h3,{id:"truthy-values",children:"Truthy Values"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"hello"'}),", ",(0,i.jsx)(n.code,{children:'"false"'}),", and any non-empty string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"42"}),", ",(0,i.jsx)(n.code,{children:"3.14"}),", and any non-zero number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[]"})," (empty array)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{}"})," (empty object)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"function() {}"})," (function)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Infinity"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"when-to-use-type-coercion-and-type-conversion",children:"When to Use Type Coercion and Type Conversion"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type Coercion"}),": It is usually best to avoid relying on implicit coercion as it can lead to unexpected results, especially in comparisons. Instead, be aware of how JavaScript will perform coercion and use strict equality (",(0,i.jsx)(n.code,{children:"==="}),") where possible."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type Conversion"}),": Use explicit conversion when you need precise control over the type of your variables. This makes your code clearer and avoids unpredictable behavior."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var o=r(6540);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);