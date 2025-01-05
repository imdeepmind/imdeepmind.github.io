"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[774],{6917:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"programming-languages/python/reference-counting","title":"Reference Counting","description":"Reference counting is the primary memory management technique in Python. It keeps track of how many references (or pointers) are pointing to an object in memory. When an object\'s reference count drops to zero, it means the object is no longer accessible and can be safely deallocated by Python\'s memory manager.","source":"@site/docs/programming-languages/python/reference-counting.md","sourceDirName":"programming-languages/python","slug":"/programming-languages/python/reference-counting","permalink":"/docs/programming-languages/python/reference-counting","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/python/reference-counting.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735567654000,"sidebarPosition":19,"frontMatter":{"sidebar_position":19},"sidebar":"tutorialSidebar","previous":{"title":"Memory Management","permalink":"/docs/programming-languages/python/memory-management"},"next":{"title":"Generational Garbage Collection","permalink":"/docs/programming-languages/python/generational-garbage-collector"}}');var t=r(4848),s=r(8453);const i={sidebar_position:19},o="Reference Counting",l={},a=[{value:"How Reference Counting Works",id:"how-reference-counting-works",level:2},{value:"Lifecycle of an Object (Reference Counting)",id:"lifecycle-of-an-object-reference-counting",level:3},{value:"Reference Count Updates",id:"reference-count-updates",level:2},{value:"Incrementing the Reference Count",id:"incrementing-the-reference-count",level:3},{value:"Decrementing the Reference Count",id:"decrementing-the-reference-count",level:3},{value:"Advantages of Reference Counting",id:"advantages-of-reference-counting",level:2},{value:"Limitations of Reference Counting",id:"limitations-of-reference-counting",level:2},{value:"Tools for Inspecting Reference Counts",id:"tools-for-inspecting-reference-counts",level:2},{value:"<code>sys.getrefcount()</code>",id:"sysgetrefcount",level:3},{value:"<code>gc</code> Module",id:"gc-module",level:3},{value:"Visualization of Reference Counting",id:"visualization-of-reference-counting",level:2},{value:"Reference Count Increment/Decrement Flow",id:"reference-count-incrementdecrement-flow",level:3},{value:"Circular Reference Problem",id:"circular-reference-problem",level:3},{value:"Example with Circular Reference and Garbage Collector",id:"example-with-circular-reference-and-garbage-collector",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"reference-counting",children:"Reference Counting"})}),"\n",(0,t.jsxs)(n.p,{children:["Reference counting is the ",(0,t.jsx)(n.strong,{children:"primary memory management technique"})," in Python. It keeps track of how many references (or pointers) are pointing to an object in memory. When an object's reference count drops to ",(0,t.jsx)(n.strong,{children:"zero"}),", it means the object is no longer accessible and can be safely deallocated by Python's memory manager."]}),"\n",(0,t.jsx)(n.h2,{id:"how-reference-counting-works",children:"How Reference Counting Works"}),"\n",(0,t.jsx)(n.p,{children:"Every Python object contains metadata, which includes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type Information"}),": The type of the object (e.g., integer, string, list)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reference Count"}),": A counter that keeps track of how many variables or objects reference it."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whenever an object is ",(0,t.jsx)(n.strong,{children:"referenced"})," or ",(0,t.jsx)(n.strong,{children:"dereferenced"}),", its reference count is adjusted:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Increment the Reference Count"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When a new variable or object refers to an existing object, the reference count is increased."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Decrement the Reference Count"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When a reference to the object is removed (e.g., a variable is deleted or goes out of scope), the reference count is decreased."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"lifecycle-of-an-object-reference-counting",children:"Lifecycle of an Object (Reference Counting)"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\n    A[Object Created] --\x3e|Reference Count = 1| B[More References Added]\n    B --\x3e|Increment Count| C[Reference Count > 1]\n    C --\x3e|References Removed| D[Reference Count = 0]\n    D --\x3e|Deallocated| E[Memory Released]"}),"\n",(0,t.jsx)(n.h2,{id:"reference-count-updates",children:"Reference Count Updates"}),"\n",(0,t.jsxs)(n.p,{children:["Reference count updates occur during ",(0,t.jsx)(n.strong,{children:"assignment"}),", ",(0,t.jsx)(n.strong,{children:"function calls"}),", and when references are explicitly removed."]}),"\n",(0,t.jsx)(n.h3,{id:"incrementing-the-reference-count",children:"Incrementing the Reference Count"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Variable Assignment"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Assigning an object to a variable increases the reference count."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"x = [1, 2, 3]  # Reference count = 1\ny = x          # Reference count = 2 (x and y point to the same object)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Adding to a Data Structure"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adding an object to a container (e.g., list, dictionary) increases its reference count."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"my_list = []\nx = [1, 2, 3]\nmy_list.append(x)  # Reference count = 2 (x and my_list[0] point to the same object)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Function Calls"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Passing an object as an argument to a function temporarily increments the reference count."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def my_func(obj):\n    pass\n\nx = [1, 2, 3]\nmy_func(x)  # Reference count increases during the function call and decreases afterward\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"decrementing-the-reference-count",children:"Decrementing the Reference Count"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Deleting a Variable"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Deleting a variable reduces the reference count."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"x = [1, 2, 3]  # Reference count = 1\ndel x          # Reference count = 0 (object is deallocated)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Object Goes Out of Scope"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When a local variable in a function goes out of scope, its reference count decreases."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def my_func():\n    x = [1, 2, 3]  # Reference count = 1\nmy_func()          # Reference count = 0 after function execution\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Removing from a Data Structure"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Removing an object from a container decreases its reference count."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"my_list = []\nx = [1, 2, 3]\nmy_list.append(x)  # Reference count = 2\nmy_list.remove(x)  # Reference count = 1\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"advantages-of-reference-counting",children:"Advantages of Reference Counting"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Immediate Deallocation"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Objects are deallocated as soon as their reference count reaches zero, ensuring memory is released promptly."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Simple to Implement"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reference counting is straightforward and easy to understand."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Predictability"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The memory lifecycle is predictable since objects are deallocated immediately when they are no longer referenced."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"limitations-of-reference-counting",children:"Limitations of Reference Counting"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Circular References"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Reference counting alone cannot handle circular references, where objects reference each other. These objects will never have a reference count of zero, resulting in ",(0,t.jsx)(n.strong,{children:"memory leaks"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example of Circular References"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\na = Node(1)\nb = Node(2)\na.next = b\nb.next = a  # Circular reference (a -> b -> a)\n\ndel a\ndel b\n# Objects are not deallocated because their reference count never reaches 0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Solution"}),": Python\u2019s garbage collector (GC) detects and handles circular references using its ",(0,t.jsx)(n.strong,{children:"generational garbage collection"})," mechanism."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Performance Overhead"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reference counting requires incrementing and decrementing counters during every assignment and deletion, which can be computationally expensive."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Not Suitable for Multithreading"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reference counting may suffer from performance bottlenecks in multithreaded programs, as maintaining reference counts across threads requires synchronization."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tools-for-inspecting-reference-counts",children:"Tools for Inspecting Reference Counts"}),"\n",(0,t.jsx)(n.p,{children:"Python provides tools to inspect and manipulate reference counts for debugging or educational purposes."}),"\n",(0,t.jsx)(n.h3,{id:"sysgetrefcount",children:(0,t.jsx)(n.code,{children:"sys.getrefcount()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sys"})," module provides a function to get the reference count of an object."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import sys\n\nx = [1, 2, 3]\nprint(sys.getrefcount(x))  # Output: Reference count (typically 2 due to internal references)\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"gc-module",children:[(0,t.jsx)(n.code,{children:"gc"})," Module"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"gc"})," module provides utilities to interact with Python's garbage collector and inspect circular references."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import gc\n\n# Enable or disable garbage collection\ngc.disable()\ngc.enable()\n\n# Collect unreachable objects (handles circular references)\ngc.collect()\n\n# List all objects tracked by the garbage collector\nprint(gc.get_objects())\n"})}),"\n",(0,t.jsx)(n.h2,{id:"visualization-of-reference-counting",children:"Visualization of Reference Counting"}),"\n",(0,t.jsx)(n.h3,{id:"reference-count-incrementdecrement-flow",children:"Reference Count Increment/Decrement Flow"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\n    A[Object in Memory] --\x3e|New Reference| B[Increment Reference Count]\n    A --\x3e|Reference Removed| C[Decrement Reference Count]\n    C --\x3e|Reference Count = 0| D[Deallocate Object]"}),"\n",(0,t.jsx)(n.h3,{id:"circular-reference-problem",children:"Circular Reference Problem"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\n    A[Object A] --\x3e B[Object B]\n    B --\x3e A"}),"\n",(0,t.jsxs)(n.p,{children:["In this case, ",(0,t.jsx)(n.code,{children:"Object A"})," and ",(0,t.jsx)(n.code,{children:"Object B"})," reference each other, so their reference counts will never reach 0, causing a memory leak unless the garbage collector intervenes."]}),"\n",(0,t.jsx)(n.h2,{id:"example-with-circular-reference-and-garbage-collector",children:"Example with Circular Reference and Garbage Collector"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import gc\n\nclass Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\n# Create circular reference\na = Node(1)\nb = Node(2)\na.next = b\nb.next = a\n\n# Break the circular reference\na.next = None\nb.next = None\n\n# Run garbage collection\ngc.collect()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Feature"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Details"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Incrementing Count"})}),(0,t.jsx)(n.td,{children:"Happens when a new reference is created (e.g., assignment or function call)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Decrementing Count"})}),(0,t.jsx)(n.td,{children:"Happens when a reference is deleted or goes out of scope."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Limitations"})}),(0,t.jsx)(n.td,{children:"Cannot handle circular references, and may add performance overhead."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Tooling"})}),(0,t.jsxs)(n.td,{children:["Use ",(0,t.jsx)(n.code,{children:"sys.getrefcount()"})," to inspect counts and ",(0,t.jsx)(n.code,{children:"gc"})," for garbage collection."]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var c=r(6540);const t={},s=c.createContext(t);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);