"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[2823],{9622:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"programming-languages/python/execution-flow","title":"Execution Flow","description":"How CPython Works","source":"@site/docs/programming-languages/python/execution-flow.md","sourceDirName":"programming-languages/python","slug":"/programming-languages/python/execution-flow","permalink":"/docs/programming-languages/python/execution-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/python/execution-flow.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735562525000,"sidebarPosition":17,"frontMatter":{"sidebar_position":17},"sidebar":"tutorialSidebar","previous":{"title":"Pytest","permalink":"/docs/programming-languages/python/pytest"},"next":{"title":"Memory Management","permalink":"/docs/programming-languages/python/memory-management"}}');var o=i(4848),r=i(8453);const s={sidebar_position:17},l="Execution Flow",c={},d=[{value:"How CPython Works",id:"how-cpython-works",level:2},{value:"Source Code (.py file)",id:"source-code-py-file",level:3},{value:"Lexical Analysis (Tokenizer)",id:"lexical-analysis-tokenizer",level:3},{value:"Parsing",id:"parsing",level:3},{value:"Compilation to Bytecode",id:"compilation-to-bytecode",level:3},{value:"Execution by the Python Virtual Machine (PVM)",id:"execution-by-the-python-virtual-machine-pvm",level:3},{value:"How PyPy Works",id:"how-pypy-works",level:2},{value:"Source Code Handling",id:"source-code-handling",level:3},{value:"Tracing JIT Compilation",id:"tracing-jit-compilation",level:3},{value:"Execution Process",id:"execution-process",level:3},{value:"Garbage Collection and Memory Management",id:"garbage-collection-and-memory-management",level:3},{value:"CPython vs. PyPy",id:"cpython-vs-pypy",level:2},{value:"PyPy JIT Compiler: Key Advantages",id:"pypy-jit-compiler-key-advantages",level:2},{value:"Workflow Comparison",id:"workflow-comparison",level:2},{value:"CPython Execution Workflow",id:"cpython-execution-workflow",level:3},{value:"PyPy Execution Workflow",id:"pypy-execution-workflow",level:3},{value:"When to Use CPython vs. PyPy",id:"when-to-use-cpython-vs-pypy",level:2},{value:"Summary",id:"summary",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"execution-flow",children:"Execution Flow"})}),"\n",(0,o.jsx)(n.h2,{id:"how-cpython-works",children:"How CPython Works"}),"\n",(0,o.jsx)(n.p,{children:"CPython processes Python code through the following steps:"}),"\n",(0,o.jsx)(n.mermaid,{value:'graph TD\n    A["Python Source Code (.py)"] --\x3e|Tokenization| B[Tokens]\n    B --\x3e|Parsing| C[AST]\n    C --\x3e|Compilation| D["Bytecode (.pyc)"]\n    D --\x3e|Interpretation| E[Python Virtual Machine]\n    E --\x3e|Execute Bytecode| F[Final Output]'}),"\n",(0,o.jsx)(n.h3,{id:"source-code-py-file",children:"Source Code (.py file)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Python code is written as plain text files with a ",(0,o.jsx)(n.code,{children:".py"})," extension."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"lexical-analysis-tokenizer",children:"Lexical Analysis (Tokenizer)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The source code is converted into a stream of ",(0,o.jsx)(n.strong,{children:"tokens"}),", which are the smallest meaningful units of the language (e.g., keywords, operators, identifiers)."]}),"\n",(0,o.jsx)(n.li,{children:"This step ensures the syntax of the code is correct."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Example for ",(0,o.jsx)(n.code,{children:"x = 10 + 2"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NAME"})," (",(0,o.jsx)(n.code,{children:"x"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OP"})," (",(0,o.jsx)(n.code,{children:"="}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NUMBER"})," (",(0,o.jsx)(n.code,{children:"10"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OP"})," (",(0,o.jsx)(n.code,{children:"+"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NUMBER"})," (",(0,o.jsx)(n.code,{children:"2"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"parsing",children:"Parsing"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Tokens are passed to the ",(0,o.jsx)(n.strong,{children:"parser"}),", which organizes them into an ",(0,o.jsx)(n.strong,{children:"Abstract Syntax Tree (AST)"}),". This tree represents the code's structure and semantics."]}),"\n",(0,o.jsx)(n.li,{children:"The AST is used to ensure logical correctness of the code."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example AST:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Assign(\n    targets=[Name(id='x', ctx=Store())],\n    value=BinOp(\n        left=Constant(value=10),\n        op=Add(),\n        right=Constant(value=2)\n    )\n)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"compilation-to-bytecode",children:"Compilation to Bytecode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The AST is compiled into ",(0,o.jsx)(n.strong,{children:"bytecode"}),", an intermediate, platform-independent representation."]}),"\n",(0,o.jsxs)(n.li,{children:["Bytecode is stored in ",(0,o.jsx)(n.code,{children:".pyc"})," files in the ",(0,o.jsx)(n.code,{children:"__pycache__"})," directory for faster re-execution."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example bytecode:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"LOAD_CONST 10\nLOAD_CONST 2\nBINARY_ADD\nSTORE_NAME x\n"})}),"\n",(0,o.jsx)(n.h3,{id:"execution-by-the-python-virtual-machine-pvm",children:"Execution by the Python Virtual Machine (PVM)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The PVM (Python Virtual Machine) is a stack-based interpreter that executes the bytecode line by line."}),"\n",(0,o.jsx)(n.li,{children:"The PVM handles runtime aspects like function calls, I/O, exception handling, and managing Python objects."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-pypy-works",children:"How PyPy Works"}),"\n",(0,o.jsxs)(n.p,{children:["PyPy differs significantly from CPython by introducing a ",(0,o.jsx)(n.strong,{children:"Just-In-Time (JIT) compiler"}),". Instead of interpreting bytecode line-by-line, PyPy uses JIT to optimize code execution by dynamically compiling frequently executed code into machine code."]}),"\n",(0,o.jsx)(n.mermaid,{value:'graph TD\n    A["Python Source Code (.py)"] --\x3e|Tokenization| B[Tokens]\n    B --\x3e|Parsing| C[AST]\n    C --\x3e|Compilation| D[Bytecode]\n    D --\x3e|Start Execution| E[Tracing JIT Compiler]\n    E --\x3e|Identify Hot Loops| F[Machine Code Generation]\n    F --\x3e|Execute Machine Code| G[Final Output]'}),"\n",(0,o.jsx)(n.h3,{id:"source-code-handling",children:"Source Code Handling"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Like CPython, PyPy also begins with source code written in ",(0,o.jsx)(n.code,{children:".py"})," files, performs tokenization, parsing, and bytecode generation."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"tracing-jit-compilation",children:"Tracing JIT Compilation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'PyPy analyzes the running program and identifies "hot loops"\u2014sections of code that are executed repeatedly.'}),"\n",(0,o.jsxs)(n.li,{children:["Instead of interpreting these loops repeatedly, PyPy compiles them into optimized ",(0,o.jsx)(n.strong,{children:"machine code"})," during runtime."]}),"\n",(0,o.jsx)(n.li,{children:"This reduces the overhead of interpretation for frequently executed code, making PyPy significantly faster than CPython in many cases."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"execution-process",children:"Execution Process"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"For code outside of hot loops, PyPy behaves similarly to CPython, interpreting bytecode."}),"\n",(0,o.jsx)(n.li,{children:"For hot loops, the machine code generated by JIT is executed directly, bypassing the slower interpretation step."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"garbage-collection-and-memory-management",children:"Garbage Collection and Memory Management"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"PyPy has its own garbage collector and memory management system, separate from CPython, which is tailored for JIT-compiled programs."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"cpython-vs-pypy",children:"CPython vs. PyPy"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Feature"}),(0,o.jsx)(n.th,{children:"CPython"}),(0,o.jsx)(n.th,{children:"PyPy"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Implementation"})}),(0,o.jsx)(n.td,{children:"Written in C"}),(0,o.jsx)(n.td,{children:"Written in RPython (a restricted subset of Python)."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Execution Method"})}),(0,o.jsx)(n.td,{children:"Interprets bytecode line by line."}),(0,o.jsx)(n.td,{children:"Uses JIT to compile and execute machine code for hot paths."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Performance"})}),(0,o.jsx)(n.td,{children:"Slower for many computational tasks."}),(0,o.jsx)(n.td,{children:"Faster for long-running programs or programs with many loops."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Compatibility"})}),(0,o.jsx)(n.td,{children:"The reference implementation; highly compatible."}),(0,o.jsx)(n.td,{children:"High compatibility, though not 100% identical."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Memory Usage"})}),(0,o.jsx)(n.td,{children:"Higher memory usage for objects."}),(0,o.jsx)(n.td,{children:"Typically better memory optimization."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"pypy-jit-compiler-key-advantages",children:"PyPy JIT Compiler: Key Advantages"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Dynamic Compilation"}),": Converts Python bytecode into machine code during runtime."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Loop Optimization"}),": Identifies and compiles frequently executed loops for faster execution."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Better Performance for Numeric Code"}),": Often outperforms CPython for tasks involving heavy computation, such as numerical or scientific computing."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Reduced Interpreter Overhead"}),": By eliminating the need to repeatedly interpret bytecode, PyPy reduces runtime overhead."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"workflow-comparison",children:"Workflow Comparison"}),"\n",(0,o.jsx)(n.h3,{id:"cpython-execution-workflow",children:"CPython Execution Workflow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Write Python source code (",(0,o.jsx)(n.code,{children:".py"})," file)."]}),"\n",(0,o.jsx)(n.li,{children:"Lexical analysis and parsing into an Abstract Syntax Tree (AST)."}),"\n",(0,o.jsx)(n.li,{children:"Compilation into bytecode."}),"\n",(0,o.jsx)(n.li,{children:"Interpretation of bytecode by the Python Virtual Machine (PVM)."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"pypy-execution-workflow",children:"PyPy Execution Workflow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Write Python source code (",(0,o.jsx)(n.code,{children:".py"})," file)."]}),"\n",(0,o.jsx)(n.li,{children:"Lexical analysis and parsing into an Abstract Syntax Tree (AST)."}),"\n",(0,o.jsx)(n.li,{children:"Compilation into bytecode."}),"\n",(0,o.jsx)(n.li,{children:'Interpretation begins, but JIT analyzes runtime behavior and identifies "hot paths."'}),"\n",(0,o.jsx)(n.li,{children:"Hot paths are compiled into machine code for optimized execution."}),"\n",(0,o.jsx)(n.li,{children:"Machine code is cached for reuse during program execution."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"when-to-use-cpython-vs-pypy",children:"When to Use CPython vs. PyPy"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CPython"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Best for general-purpose use, especially when compatibility with C extensions or third-party libraries is critical."}),"\n",(0,o.jsx)(n.li,{children:"Recommended for applications with minimal computational bottlenecks."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"PyPy"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ideal for programs with performance-critical sections, such as numerical computing, machine learning, or large-scale data processing."}),"\n",(0,o.jsx)(n.li,{children:"Best suited for long-running applications where JIT can optimize performance over time."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CPython"})," is the reference implementation of Python that executes bytecode using a Python Virtual Machine."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"PyPy"})," is an alternative implementation that uses JIT compilation to dynamically optimize Python code at runtime."]}),"\n",(0,o.jsx)(n.li,{children:"PyPy achieves significant performance improvements, particularly for computation-heavy or loop-intensive programs, while still providing high compatibility with Python."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);