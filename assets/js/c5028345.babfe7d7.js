"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[4711],{244:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"programming-languages/python/loop-control-functions","title":"Loops, Control Structures, and Functions","description":"Python Loops","source":"@site/docs/programming-languages/python/loop-control-functions.md","sourceDirName":"programming-languages/python","slug":"/programming-languages/python/loop-control-functions","permalink":"/docs/programming-languages/python/loop-control-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/python/loop-control-functions.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735387675000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Common Data Structures in Python","permalink":"/docs/programming-languages/python/data-structure"},"next":{"title":"*args and **kwargs","permalink":"/docs/programming-languages/python/args-kwargs"}}');var s=i(4848),o=i(8453);const t={sidebar_position:5},l="Loops, Control Structures, and Functions",a={},c=[{value:"Python Loops",id:"python-loops",level:2},{value:"For Loop",id:"for-loop",level:3},{value:"While Loop",id:"while-loop",level:3},{value:"Loop Control Statements",id:"loop-control-statements",level:3},{value:"Python Control Structures",id:"python-control-structures",level:2},{value:"If Statement",id:"if-statement",level:3},{value:"If-Elif-Else",id:"if-elif-else",level:3},{value:"Ternary Operator",id:"ternary-operator",level:3},{value:"Python Functions",id:"python-functions",level:2},{value:"Defining a Function",id:"defining-a-function",level:3},{value:"Return Statement",id:"return-statement",level:3},{value:"Default Arguments",id:"default-arguments",level:3},{value:"Variable-Length Arguments",id:"variable-length-arguments",level:3},{value:"Lambda Functions",id:"lambda-functions",level:3},{value:"Function Scopes",id:"function-scopes",level:3}];function d(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"loops-control-structures-and-functions",children:"Loops, Control Structures, and Functions"})}),"\n",(0,s.jsx)(e.h2,{id:"python-loops",children:"Python Loops"}),"\n",(0,s.jsxs)(e.p,{children:["Loops allow We to iterate over a sequence (like a list, tuple, string, or range) and execute a block of code repeatedly. Python supports two primary types of loops: ",(0,s.jsx)(e.code,{children:"for"})," and ",(0,s.jsx)(e.code,{children:"while"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"for-loop",children:"For Loop"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"for"})," loop iterates over a sequence (e.g., a list, string, or range) and executes a block of code for each item in the sequence."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for i in range(5):\n    print(i)\n"})}),"\n",(0,s.jsx)(e.p,{children:"This will output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"0\n1\n2\n3\n4\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for variable in iterable:\n    # block of code\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"range(start, stop, step)"})," generates a sequence of numbers starting from ",(0,s.jsx)(e.code,{children:"start"})," to ",(0,s.jsx)(e.code,{children:"stop"})," (exclusive), with an optional step size.",(0,s.jsx)(e.br,{}),"\n","Example:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for i in range(2, 10, 2):\n    print(i)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"2\n4\n6\n8\n"})}),"\n",(0,s.jsx)(e.h3,{id:"while-loop",children:"While Loop"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"while"})," loop repeats a block of code as long as a given condition is true. It requires a conditional expression to determine when to stop."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"i = 0\nwhile i < 5:\n    print(i)\n    i += 1\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"0\n1\n2\n3\n4\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"while condition:\n    # block of code\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["It's crucial to ensure that the condition will eventually become ",(0,s.jsx)(e.code,{children:"False"})," to avoid an infinite loop."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"loop-control-statements",children:"Loop Control Statements"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"break"}),": Terminates the loop completely."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for i in range(10):\n    if i == 5:\n        break\n    print(i)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"0\n1\n2\n3\n4\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"continue"}),": Skips the current iteration and proceeds with the next iteration."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for i in range(5):\n    if i == 3:\n        continue\n    print(i)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"0\n1\n2\n4\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"pass"}),": Does nothing, used as a placeholder where code is syntactically required but We don't want any action to be taken."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"for i in range(5):\n    if i == 3:\n        pass\n    print(i)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"0\n1\n2\n3\n4\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"python-control-structures",children:"Python Control Structures"}),"\n",(0,s.jsx)(e.p,{children:"Control structures in Python manage the flow of execution by deciding which code to execute based on conditions."}),"\n",(0,s.jsx)(e.h3,{id:"if-statement",children:"If Statement"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"if"})," statement evaluates a condition and executes a block of code if the condition is ",(0,s.jsx)(e.code,{children:"True"}),". If ",(0,s.jsx)(e.code,{children:"False"}),", the ",(0,s.jsx)(e.code,{children:"else"})," block can execute."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'x = 10\nif x > 5:\n    print("x is greater than 5")\n'})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"x is greater than 5\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"if condition:\n    # block of code\nelif another_condition:\n    # block of code\nelse:\n    # block of code\n"})}),"\n",(0,s.jsx)(e.h3,{id:"if-elif-else",children:"If-Elif-Else"}),"\n",(0,s.jsxs)(e.p,{children:["We can chain multiple conditions using ",(0,s.jsx)(e.code,{children:"elif"})," (else if). If the ",(0,s.jsx)(e.code,{children:"if"})," condition fails, the ",(0,s.jsx)(e.code,{children:"elif"})," condition is checked. If no condition is ",(0,s.jsx)(e.code,{children:"True"}),", the ",(0,s.jsx)(e.code,{children:"else"})," block runs."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'x = 10\nif x > 15:\n    print("x is greater than 15")\nelif x > 5:\n    print("x is greater than 5")\nelse:\n    print("x is 5 or less")\n'})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"x is greater than 5\n"})}),"\n",(0,s.jsx)(e.h3,{id:"ternary-operator",children:"Ternary Operator"}),"\n",(0,s.jsx)(e.p,{children:"Python also supports a shorthand if-else expression known as the ternary operator:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'x = 10\nresult = "x is greater than 5" if x > 5 else "x is 5 or less"\nprint(result)\n'})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"x is greater than 5\n"})}),"\n",(0,s.jsx)(e.h2,{id:"python-functions",children:"Python Functions"}),"\n",(0,s.jsx)(e.p,{children:"Functions allow We to organize Our code into reusable blocks, improving modularity and readability. Functions can accept parameters and return values."}),"\n",(0,s.jsx)(e.h3,{id:"defining-a-function",children:"Defining a Function"}),"\n",(0,s.jsxs)(e.p,{children:["Functions are defined using the ",(0,s.jsx)(e.code,{children:"def"})," keyword followed by the function name, a list of parameters in parentheses, and a block of code."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Abhishek")\n'})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Hello, Abhishek!\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"def function_name(parameters):\n    # block of code\n"})}),"\n",(0,s.jsx)(e.h3,{id:"return-statement",children:"Return Statement"}),"\n",(0,s.jsxs)(e.p,{children:["Functions can return a value using the ",(0,s.jsx)(e.code,{children:"return"})," keyword."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"def add(a, b):\n    return a + b\n\nresult = add(2, 3)\nprint(result)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"5\n"})}),"\n",(0,s.jsx)(e.h3,{id:"default-arguments",children:"Default Arguments"}),"\n",(0,s.jsx)(e.p,{children:"Python allows We to define default values for function parameters. If no argument is provided, the default value is used."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def greet(name="Guest"):\n    print(f"Hello, {name}!")\n\ngreet()  # Uses default value\ngreet("Abhishek")\n'})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Hello, Guest!\nHello, Abhishek!\n"})}),"\n",(0,s.jsx)(e.h3,{id:"variable-length-arguments",children:"Variable-Length Arguments"}),"\n",(0,s.jsxs)(e.p,{children:["Python supports functions that accept a variable number of arguments using ",(0,s.jsx)(e.code,{children:"*args"})," (for non-keyword arguments) and ",(0,s.jsx)(e.code,{children:"**kwargs"})," (for keyword arguments)."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"*args"})}),": Collects additional positional arguments into a tuple."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"def print_args(*args):\n    for arg in args:\n        print(arg)\n\nprint_args(1, 2, 3)\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"1\n2\n3\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["**",(0,s.jsx)(e.code,{children:"**kwargs"}),"**: Collects additional keyword arguments into a dictionary."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def print_kwargs(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")\n\nprint_kwargs(name="Abhishek", age=25)\n'})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"name: Abhishek\nage: 25\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"lambda-functions",children:"Lambda Functions"}),"\n",(0,s.jsxs)(e.p,{children:["A ",(0,s.jsx)(e.code,{children:"lambda"})," function is a small anonymous function defined using the ",(0,s.jsx)(e.code,{children:"lambda"})," keyword. It's typically used for simple operations where defining a full function is unnecessary."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"add = lambda x, y: x + y\nprint(add(3, 5))\n"})}),"\n",(0,s.jsx)(e.p,{children:"Output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"8\n"})}),"\n",(0,s.jsx)(e.h3,{id:"function-scopes",children:"Function Scopes"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Global Scope"}),": Variables defined outside any function are accessible everywhere in the code."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Local Scope"}),": Variables defined inside a function are accessible only within that function."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Python allows We to use the ",(0,s.jsx)(e.code,{children:"global"})," keyword to modify a global variable inside a function."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"x = 10  # Global variable\n\ndef modify_global():\n    global x\n    x = 20  # Modifies the global variable\n\nmodify_global()\nprint(x)  # Output: 20\n"})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>l});var r=i(6540);const s={},o=r.createContext(s);function t(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);