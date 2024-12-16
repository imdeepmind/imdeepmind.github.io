"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[817],{9043:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"programming-languages/python/python-basics","title":"Python Basics","description":"Variables and Data Types","source":"@site/docs/programming-languages/python/python-basics.md","sourceDirName":"programming-languages/python","slug":"/programming-languages/python/python-basics","permalink":"/docs/programming-languages/python/python-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/python/python-basics.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1734182655000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/programming-languages/python/introduction"},"next":{"title":"Variable Scoping","permalink":"/docs/programming-languages/python/scoping"}}');var r=s(4848),o=s(8453);const t={sidebar_position:2},l="Python Basics",a={},c=[{value:"Variables and Data Types",id:"variables-and-data-types",level:2},{value:"Basic Operators",id:"basic-operators",level:2},{value:"Control Flow Statements",id:"control-flow-statements",level:2},{value:"Loops",id:"loops",level:2},{value:"Functions",id:"functions",level:2},{value:"List Comprehension",id:"list-comprehension",level:2},{value:"Basic I/O",id:"basic-io",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"python-basics",children:"Python Basics"})}),"\n",(0,r.jsx)(n.h2,{id:"variables-and-data-types",children:"Variables and Data Types"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Variables"}),": Variables in Python are used to store data and do not require explicit declaration. They are created when a value is assigned."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'age = 25  # Integer\nname = "Alice"  # String\nis_student = True  # Boolean\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data Types"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"int"}),": Integer, e.g., ",(0,r.jsx)(n.code,{children:"5"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"float"}),": Floating-point number, e.g., ",(0,r.jsx)(n.code,{children:"5.0"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"str"}),": String, e.g., ",(0,r.jsx)(n.code,{children:'"Hello"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"bool"}),": Boolean, e.g., ",(0,r.jsx)(n.code,{children:"True"})," or ",(0,r.jsx)(n.code,{children:"False"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NoneType"}),": Represents the absence of value, ",(0,r.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"basic-operators",children:"Basic Operators"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arithmetic Operators"}),": ",(0,r.jsx)(n.code,{children:"+"}),", ",(0,r.jsx)(n.code,{children:"-"}),", ",(0,r.jsx)(n.code,{children:"*"}),", ",(0,r.jsx)(n.code,{children:"/"}),", ",(0,r.jsx)(n.code,{children:"//"})," (floor division), ",(0,r.jsx)(n.code,{children:"%"})," (modulus), ",(0,r.jsx)(n.code,{children:"**"})," (exponent)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Comparison Operators"}),": ",(0,r.jsx)(n.code,{children:"=="}),", ",(0,r.jsx)(n.code,{children:"!="}),", ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:"<="}),", ",(0,r.jsx)(n.code,{children:">="})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Logical Operators"}),": ",(0,r.jsx)(n.code,{children:"and"}),", ",(0,r.jsx)(n.code,{children:"or"}),", ",(0,r.jsx)(n.code,{children:"not"})]}),"\n",(0,r.jsx)(n.h2,{id:"control-flow-statements",children:"Control Flow Statements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Conditional Statements"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["Used to make decisions in the code. ",(0,r.jsx)(n.code,{children:"if"}),", ",(0,r.jsx)(n.code,{children:"elif"}),", and ",(0,r.jsx)(n.code,{children:"else"})," keywords are used for conditional branching."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'x = 10\nif x > 5:\n    print("Greater than 5")\nelif x == 5:\n    print("Equal to 5")\nelse:\n    print("Less than 5")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"loops",children:"Loops"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"for Loop"}),": Used to iterate over a sequence (e.g., list, tuple, string)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"for i in range(5):  # Iterates from 0 to 4\n    print(i)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"while Loop"}),": Repeats as long as a condition is true."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"count = 0\nwhile count < 5:\n    print(count)\n    count += 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Loop Control Statements"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"break"}),": Exits the loop immediately."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"continue"}),": Skips the current iteration and continues to the next one."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(n.p,{children:["Functions are defined using the ",(0,r.jsx)(n.code,{children:"def"})," keyword. They can take arguments and return values."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default Arguments"}),": You can set default values for parameters."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def greet(name="World"):\n    return f"Hello, {name}!"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Lambda Functions"}),": Anonymous, single-line functions."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"add = lambda x, y: x + y\nprint(add(3, 4))  # Outputs 7\n"})}),"\n",(0,r.jsx)(n.h2,{id:"list-comprehension",children:"List Comprehension"}),"\n",(0,r.jsx)(n.p,{children:"A concise way to create lists based on existing iterables."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"squares = [x**2 for x in range(10)]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"basic-io",children:"Basic I/O"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Input"}),": ",(0,r.jsx)(n.code,{children:"input()"})," function to take user input."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'name = input("Enter your name: ")\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Output"}),": ",(0,r.jsx)(n.code,{children:"print()"})," function to display output."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'print("Hello, World!")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);