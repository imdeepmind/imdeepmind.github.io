"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[980],{2899:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"programming-languages/python/scoping","title":"Variable Scoping","description":"Variable scoping in Python determines the accessibility of variables within different parts of the code. It defines where a variable can be read or modified. Python follows specific scoping rules, which are influenced by the LEGB rule (Local, Enclosing, Global, Built-in). Understanding scoping is crucial to avoid conflicts and unexpected behavior in your programs.","source":"@site/docs/programming-languages/python/scoping.md","sourceDirName":"programming-languages/python","slug":"/programming-languages/python/scoping","permalink":"/docs/programming-languages/python/scoping","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/programming-languages/python/scoping.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Python Basics","permalink":"/docs/programming-languages/python/python-basics"},"next":{"title":"Common Data Structures in Python","permalink":"/docs/programming-languages/python/data-structure"}}');var l=i(4848),o=i(8453);const r={sidebar_position:3},c="Variable Scoping",a={},d=[{value:"Scope of Variables",id:"scope-of-variables",level:2},{value:"The LEGB Rule",id:"the-legb-rule",level:2},{value:"Modifying Variables in Different Scopes",id:"modifying-variables-in-different-scopes",level:2},{value:"1. Using <code>global</code> Keyword",id:"1-using-global-keyword",level:3},{value:"2. Using <code>nonlocal</code> Keyword",id:"2-using-nonlocal-keyword",level:3},{value:"Shadowing of Variables",id:"shadowing-of-variables",level:2},{value:"Dynamic Nature of Python Scoping",id:"dynamic-nature-of-python-scoping",level:2},{value:"Best Practices for Variable Scoping",id:"best-practices-for-variable-scoping",level:2}];function t(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"variable-scoping",children:"Variable Scoping"})}),"\n",(0,l.jsxs)(e.p,{children:["Variable scoping in Python determines the accessibility of variables within different parts of the code. It defines where a variable can be read or modified. Python follows specific scoping rules, which are influenced by the ",(0,l.jsx)(e.strong,{children:"LEGB rule"})," (Local, Enclosing, Global, Built-in). Understanding scoping is crucial to avoid conflicts and unexpected behavior in your programs."]}),"\n",(0,l.jsx)(e.h2,{id:"scope-of-variables",children:"Scope of Variables"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Local Scope"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Variables defined inside a function are said to have a ",(0,l.jsx)(e.strong,{children:"local scope"}),"."]}),"\n",(0,l.jsx)(e.li,{children:"These variables are accessible only within the function where they are declared."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"def my_function():\n    x = 10  # Local variable\n    print(x)\n\nmy_function()\n# print(x)  # Error: x is not accessible outside the function\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Enclosing Scope"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["This refers to variables in the ",(0,l.jsx)(e.strong,{children:"scope of enclosing (outer) functions"})," in a nested function structure."]}),"\n",(0,l.jsxs)(e.li,{children:["These variables are neither local nor global to the inner function but are in its ",(0,l.jsx)(e.strong,{children:"enclosing scope"}),"."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'def outer_function():\n    x = "Outer variable"\n\n    def inner_function():\n        print(x)  # Accessing enclosing variable\n\n    inner_function()\n\nouter_function()\n'})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Global Scope"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Variables defined at the top level of a script or module have a ",(0,l.jsx)(e.strong,{children:"global scope"}),"."]}),"\n",(0,l.jsx)(e.li,{children:"They can be accessed and modified throughout the module unless shadowed by a local variable."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'x = "Global variable"\n\ndef my_function():\n    print(x)  # Accessing global variable\n\nmy_function()\n'})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Built-in Scope"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["This refers to Python\u2019s ",(0,l.jsx)(e.strong,{children:"built-in functions and names"})," (e.g., ",(0,l.jsx)(e.code,{children:"print"}),", ",(0,l.jsx)(e.code,{children:"len"}),", ",(0,l.jsx)(e.code,{children:"type"}),")."]}),"\n",(0,l.jsx)(e.li,{children:"These names are always accessible unless overridden."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"print(len([1, 2, 3]))  # Built-in function\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"the-legb-rule",children:"The LEGB Rule"}),"\n",(0,l.jsxs)(e.p,{children:["Python resolves variable names using the ",(0,l.jsx)(e.strong,{children:"LEGB"})," rule:"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"L"}),"ocal: Checks the innermost scope (inside the current function)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"E"}),"nclosing: Checks the scope of any enclosing functions."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"G"}),"lobal: Checks the global (module-level) scope."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"B"}),"uilt-in: Checks Python\u2019s built-in namespace."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'x = "Global"\n\ndef outer_function():\n    x = "Enclosing"\n\n    def inner_function():\n        x = "Local"\n        print(x)  # Prints "Local"\n\n    inner_function()\n\nouter_function()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"modifying-variables-in-different-scopes",children:"Modifying Variables in Different Scopes"}),"\n",(0,l.jsxs)(e.h3,{id:"1-using-global-keyword",children:["1. Using ",(0,l.jsx)(e.code,{children:"global"})," Keyword"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["If you want to modify a ",(0,l.jsx)(e.strong,{children:"global variable"})," inside a function, use the ",(0,l.jsx)(e.code,{children:"global"})," keyword."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"x = 10\n\ndef modify_global():\n    global x\n    x = 20  # Modifies the global variable\n\nmodify_global()\nprint(x)  # Output: 20\n"})}),"\n",(0,l.jsxs)(e.h3,{id:"2-using-nonlocal-keyword",children:["2. Using ",(0,l.jsx)(e.code,{children:"nonlocal"})," Keyword"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["To modify a variable in an ",(0,l.jsx)(e.strong,{children:"enclosing scope"}),", use the ",(0,l.jsx)(e.code,{children:"nonlocal"})," keyword."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'def outer_function():\n    x = "Enclosing"\n\n    def inner_function():\n        nonlocal x\n        x = "Modified Enclosing"\n\n    inner_function()\n    print(x)  # Output: Modified Enclosing\n\nouter_function()\n'})}),"\n",(0,l.jsx)(e.h2,{id:"shadowing-of-variables",children:"Shadowing of Variables"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["A variable in a local scope can ",(0,l.jsx)(e.strong,{children:"shadow"})," (override) variables in an outer or global scope with the same name."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'x = "Global"\n\ndef my_function():\n    x = "Local"  # Shadows the global variable\n    print(x)\n\nmy_function()  # Output: Local\nprint(x)       # Output: Global\n'})}),"\n",(0,l.jsx)(e.h2,{id:"dynamic-nature-of-python-scoping",children:"Dynamic Nature of Python Scoping"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Python allows the declaration of variables dynamically at runtime.",(0,l.jsx)(e.br,{}),"\n","Example:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"def dynamic_example():\n    if True:\n        x = 100  # x exists only within the function\n    print(x)  # Output: 100\n\ndynamic_example()\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Variables declared in ",(0,l.jsx)(e.code,{children:"if"}),", ",(0,l.jsx)(e.code,{children:"for"}),", and ",(0,l.jsx)(e.code,{children:"while"})," blocks are still accessible within the function (unlike some languages like C++ or Java)."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"best-practices-for-variable-scoping",children:"Best Practices for Variable Scoping"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["Avoid Overusing ",(0,l.jsx)(e.code,{children:"global"})," and ",(0,l.jsx)(e.code,{children:"nonlocal"}),":"]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Use ",(0,l.jsx)(e.code,{children:"global"})," and ",(0,l.jsx)(e.code,{children:"nonlocal"})," sparingly as they make code harder to read and debug."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Use Descriptive Names:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Use meaningful variable names to reduce the risk of unintended shadowing."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Minimize Global Variables:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Restrict the use of global variables as they can lead to unexpected behavior in larger programs."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Encapsulate Logic in Functions:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Encapsulation promotes the use of local scope and reduces conflicts."}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(6540);const l={},o=s.createContext(l);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);