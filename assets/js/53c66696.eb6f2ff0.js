"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[1817],{9043:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"programming-languages/python/python-basics","title":"Python Basics","description":"Variables and Data Types","source":"@site/docs/programming-languages/python/python-basics.md","sourceDirName":"programming-languages/python","slug":"/programming-languages/python/python-basics","permalink":"/docs/programming-languages/python/python-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/python/python-basics.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736056644000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/programming-languages/python/introduction"},"next":{"title":"Variable Scoping","permalink":"/docs/programming-languages/python/scoping"}}');var r=i(4848),t=i(8453);const d={sidebar_position:2},l="Python Basics",c={},a=[{value:"Variables and Data Types",id:"variables-and-data-types",level:2},{value:"Basic Operators",id:"basic-operators",level:2},{value:"Precedence and Associativity",id:"precedence-and-associativity",level:2},{value:"Operator Precedence",id:"operator-precedence",level:3},{value:"Operator Associativity",id:"operator-associativity",level:3},{value:"Parentheses",id:"parentheses",level:3},{value:"Operator Precedence and Associativity Table",id:"operator-precedence-and-associativity-table",level:3},{value:"List Comprehension",id:"list-comprehension",level:2},{value:"Basic I/O",id:"basic-io",level:2},{value:"Mutation",id:"mutation",level:2},{value:"Key Points",id:"key-points",level:3},{value:"Unpacking Symbol in Python",id:"unpacking-symbol-in-python",level:2},{value:"Unpacking with <code>*</code> (Single Asterisk)",id:"unpacking-with--single-asterisk",level:3},{value:"Unpacking Elements into Variables",id:"unpacking-elements-into-variables",level:4},{value:"Example",id:"example",level:5},{value:"Explanation",id:"explanation",level:5},{value:"Function Arguments Unpacking",id:"function-arguments-unpacking",level:4},{value:"Example",id:"example-1",level:5},{value:"Unpacking in List or Set Literals",id:"unpacking-in-list-or-set-literals",level:4},{value:"Example",id:"example-2",level:5},{value:"Unpacking for <code>zip()</code> in Matrix Transposition",id:"unpacking-for-zip-in-matrix-transposition",level:4},{value:"Example",id:"example-3",level:5},{value:"Collecting Excess Positional Arguments",id:"collecting-excess-positional-arguments",level:4},{value:"Example",id:"example-4",level:5},{value:"Unpacking with <code>**</code> (Double Asterisk)",id:"unpacking-with--double-asterisk",level:3},{value:"Function Keyword Argument Unpacking",id:"function-keyword-argument-unpacking",level:4},{value:"Example",id:"example-5",level:5},{value:"Merging Dictionaries",id:"merging-dictionaries",level:4},{value:"Example",id:"example-6",level:5},{value:"Collecting Keyword Arguments",id:"collecting-keyword-arguments",level:4},{value:"Example",id:"example-7",level:5},{value:"Combining <code>*</code> and <code>**</code> in Functions",id:"combining--and--in-functions",level:3},{value:"Example",id:"example-8",level:5},{value:"Unpacking in For Loops",id:"unpacking-in-for-loops",level:3},{value:"Example",id:"example-9",level:4},{value:"Nested Unpacking",id:"nested-unpacking",level:3},{value:"Example",id:"example-10",level:4},{value:"Summary of <code>*</code> and <code>**</code> Usage",id:"summary-of--and--usage",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"python-basics",children:"Python Basics"})}),"\n",(0,r.jsx)(n.h2,{id:"variables-and-data-types",children:"Variables and Data Types"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Variables"}),": Variables in Python are used to store data and do not require explicit declaration. They are created when a value is assigned."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'age = 25  # Integer\nname = "Alice"  # String\nis_student = True  # Boolean\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data Types"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"int"}),": Integer, e.g., ",(0,r.jsx)(n.code,{children:"5"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"float"}),": Floating-point number, e.g., ",(0,r.jsx)(n.code,{children:"5.0"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"str"}),": String, e.g., ",(0,r.jsx)(n.code,{children:'"Hello"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"bool"}),": Boolean, e.g., ",(0,r.jsx)(n.code,{children:"True"})," or ",(0,r.jsx)(n.code,{children:"False"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NoneType"}),": Represents the absence of value, ",(0,r.jsx)(n.code,{children:"None"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"basic-operators",children:"Basic Operators"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arithmetic Operators"}),": ",(0,r.jsx)(n.code,{children:"+"}),", ",(0,r.jsx)(n.code,{children:"-"}),", ",(0,r.jsx)(n.code,{children:"*"}),", ",(0,r.jsx)(n.code,{children:"/"}),", ",(0,r.jsx)(n.code,{children:"//"})," (floor division), ",(0,r.jsx)(n.code,{children:"%"})," (modulus), ",(0,r.jsx)(n.code,{children:"**"})," (exponent)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Comparison Operators"}),": ",(0,r.jsx)(n.code,{children:"=="}),", ",(0,r.jsx)(n.code,{children:"!="}),", ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:"<="}),", ",(0,r.jsx)(n.code,{children:">="})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Logical Operators"}),": ",(0,r.jsx)(n.code,{children:"and"}),", ",(0,r.jsx)(n.code,{children:"or"}),", ",(0,r.jsx)(n.code,{children:"not"})]}),"\n",(0,r.jsx)(n.h2,{id:"precedence-and-associativity",children:"Precedence and Associativity"}),"\n",(0,r.jsxs)(n.p,{children:["In Python, ",(0,r.jsx)(n.strong,{children:"precedence"})," determines the order in which operators are evaluated in an expression, while ",(0,r.jsx)(n.strong,{children:"associativity"})," defines the direction in which operators of the same precedence level are evaluated."]}),"\n",(0,r.jsx)(n.h3,{id:"operator-precedence",children:"Operator Precedence"}),"\n",(0,r.jsx)(n.p,{children:"Operators with higher precedence are evaluated before operators with lower precedence. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"result = 10 + 5 * 2  # Multiplication (*) has higher precedence than addition (+)\nprint(result)  # Output: 20\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here, ",(0,r.jsx)(n.code,{children:"5 * 2"})," is evaluated first, and then ",(0,r.jsx)(n.code,{children:"10 + 10"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"operator-associativity",children:"Operator Associativity"}),"\n",(0,r.jsx)(n.p,{children:"When operators of the same precedence appear together, associativity determines their evaluation order:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Left-to-right associativity"}),": Most operators (e.g., ",(0,r.jsx)(n.code,{children:"+"}),", ",(0,r.jsx)(n.code,{children:"-"}),", ",(0,r.jsx)(n.code,{children:"*"}),", ",(0,r.jsx)(n.code,{children:"/"}),", etc.) are evaluated from left to right.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"result = 10 - 5 + 2  # Evaluated as (10 - 5) + 2\nprint(result)  # Output: 7\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Right-to-left associativity"}),": Some operators (e.g., ",(0,r.jsx)(n.code,{children:"**"})," for exponentiation and assignment operators like ",(0,r.jsx)(n.code,{children:"="}),") are evaluated from right to left.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"result = 2 ** 3 ** 2  # Evaluated as 2 ** (3 ** 2)\nprint(result)  # Output: 512\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"parentheses",children:"Parentheses"}),"\n",(0,r.jsx)(n.p,{children:"To explicitly define the evaluation order, you can use parentheses:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"result = (10 + 5) * 2  # Parentheses override default precedence\nprint(result)  # Output: 30\n"})}),"\n",(0,r.jsx)(n.h3,{id:"operator-precedence-and-associativity-table",children:"Operator Precedence and Associativity Table"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Operator"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Associativity"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"()"})}),(0,r.jsx)(n.td,{children:"Parentheses"}),(0,r.jsx)(n.td,{children:"N/A (Highest precedence)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"**"})}),(0,r.jsx)(n.td,{children:"Exponentiation"}),(0,r.jsx)(n.td,{children:"Right-to-left"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"+x, -x, ~x"})}),(0,r.jsx)(n.td,{children:"Unary plus, minus, bitwise NOT"}),(0,r.jsx)(n.td,{children:"Right-to-left"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"*, /, //, %"})}),(0,r.jsx)(n.td,{children:"Multiplication, division, floor division, modulo"}),(0,r.jsx)(n.td,{children:"Left-to-right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"+, -"})}),(0,r.jsx)(n.td,{children:"Addition, subtraction"}),(0,r.jsx)(n.td,{children:"Left-to-right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<<, >>"})}),(0,r.jsx)(n.td,{children:"Bitwise shift operators"}),(0,r.jsx)(n.td,{children:"Left-to-right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"&"})}),(0,r.jsx)(n.td,{children:"Bitwise AND"}),(0,r.jsx)(n.td,{children:"Left-to-right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"^"})}),(0,r.jsx)(n.td,{children:"Bitwise XOR"}),(0,r.jsx)(n.td,{children:"Left-to-right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"`"}),(0,r.jsx)(n.td,{children:"`"}),(0,r.jsx)(n.td,{children:"Bitwise OR"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"==, !=, >, >=, <, <=, is, is not, in, not in"})}),(0,r.jsx)(n.td,{children:"Comparison and membership operators"}),(0,r.jsx)(n.td,{children:"Left-to-right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"not"})}),(0,r.jsx)(n.td,{children:"Logical NOT"}),(0,r.jsx)(n.td,{children:"Right-to-left"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"and"})}),(0,r.jsx)(n.td,{children:"Logical AND"}),(0,r.jsx)(n.td,{children:"Left-to-right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"or"})}),(0,r.jsx)(n.td,{children:"Logical OR"}),(0,r.jsx)(n.td,{children:"Left-to-right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"=, +=, -=, *=, /=, %=, **=, //="})}),(0,r.jsx)(n.td,{children:"Assignment operators"}),(0,r.jsx)(n.td,{children:"Right-to-left"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lambda"})}),(0,r.jsx)(n.td,{children:"Lambda expressions"}),(0,r.jsx)(n.td,{children:"N/A (Lowest precedence)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"list-comprehension",children:"List Comprehension"}),"\n",(0,r.jsx)(n.p,{children:"A concise way to create lists based on existing iterables."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"squares = [x**2 for x in range(10)]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"basic-io",children:"Basic I/O"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Input"}),": ",(0,r.jsx)(n.code,{children:"input()"})," function to take user input."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'name = input("Enter Our name: ")\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Output"}),": ",(0,r.jsx)(n.code,{children:"print()"})," function to display output."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'print("Hello, World!")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"mutation",children:"Mutation"}),"\n",(0,r.jsx)(n.h3,{id:"key-points",children:"Key Points"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Mutable Data Structures"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Can be modified after creation."}),"\n",(0,r.jsxs)(n.li,{children:["Examples: ",(0,r.jsx)(n.code,{children:"list"}),", ",(0,r.jsx)(n.code,{children:"dict"}),", ",(0,r.jsx)(n.code,{children:"set"}),", ",(0,r.jsx)(n.code,{children:"bytearray"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Immutable Data Structures"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cannot be modified after creation."}),"\n",(0,r.jsxs)(n.li,{children:["Examples: ",(0,r.jsx)(n.code,{children:"tuple"}),", ",(0,r.jsx)(n.code,{children:"str"}),", ",(0,r.jsx)(n.code,{children:"frozenset"}),", ",(0,r.jsx)(n.code,{children:"bytes"}),", ",(0,r.jsx)(n.code,{children:"range"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here is a table summarizing common Python data structures and whether they are ",(0,r.jsx)(n.strong,{children:"mutable"})," or ",(0,r.jsx)(n.strong,{children:"immutable"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Data Structure"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Mutable"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["List (",(0,r.jsx)(n.code,{children:"list"}),")"]})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Can be modified after creation (e.g., adding, removing, or changing elements)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["Tuple (",(0,r.jsx)(n.code,{children:"tuple"}),")"]})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Immutable sequence; cannot be changed after creation."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["Dictionary (",(0,r.jsx)(n.code,{children:"dict"}),")"]})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Keys and values can be added, removed, or updated."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["Set (",(0,r.jsx)(n.code,{children:"set"}),")"]})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Can add or remove elements; unordered collection of unique elements."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["String (",(0,r.jsx)(n.code,{children:"str"}),")"]})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Immutable sequence of characters; cannot be modified after creation."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["Frozen Set (",(0,r.jsx)(n.code,{children:"frozenset"}),")"]})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsxs)(n.td,{children:["Immutable version of ",(0,r.jsx)(n.code,{children:"set"}),"; cannot add or remove elements."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["Bytes (",(0,r.jsx)(n.code,{children:"bytes"}),")"]})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Immutable sequence of bytes (binary data)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["Bytearray (",(0,r.jsx)(n.code,{children:"bytearray"}),")"]})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["Mutable version of ",(0,r.jsx)(n.code,{children:"bytes"}),"; can modify individual bytes."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:["Range (",(0,r.jsx)(n.code,{children:"range"}),")"]})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Immutable sequence representing a range of numbers."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"unpacking-symbol-in-python",children:"Unpacking Symbol in Python"}),"\n",(0,r.jsxs)(n.p,{children:["In Python, unpacking is a mechanism that allows you to assign values from an iterable (like a list, tuple, or dictionary) to multiple variables in a single step. The unpacking operation is done using the ",(0,r.jsx)(n.code,{children:"*"})," and ",(0,r.jsx)(n.code,{children:"**"})," symbols. Below is a detailed explanation of their usage:"]}),"\n",(0,r.jsxs)(n.h3,{id:"unpacking-with--single-asterisk",children:["Unpacking with ",(0,r.jsx)(n.code,{children:"*"})," (Single Asterisk)"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"*"})," symbol is used for unpacking elements from ",(0,r.jsx)(n.strong,{children:"iterables"})," (like lists, tuples, or sets)."]}),"\n",(0,r.jsx)(n.h4,{id:"unpacking-elements-into-variables",children:"Unpacking Elements into Variables"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"*"})," symbol can capture multiple elements from an iterable into a list."]}),"\n",(0,r.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Unpacking a list\na, *b, c = [1, 2, 3, 4, 5]\nprint(a)  # 1\nprint(b)  # [2, 3, 4]\nprint(c)  # 5\n"})}),"\n",(0,r.jsx)(n.h5,{id:"explanation",children:"Explanation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"a"})," gets the first element."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"c"})," gets the last element."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"*b"})," captures all the elements in the middle."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"function-arguments-unpacking",children:"Function Arguments Unpacking"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"*"})," symbol can unpack an iterable (like a list or tuple) and pass its elements as arguments to a function."]}),"\n",(0,r.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def add(a, b, c):\n    return a + b + c\n\nargs = [1, 2, 3]\nresult = add(*args)  # Unpacks the list [1, 2, 3] into a, b, c\nprint(result)  # 6\n"})}),"\n",(0,r.jsx)(n.h4,{id:"unpacking-in-list-or-set-literals",children:"Unpacking in List or Set Literals"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:"*"})," to unpack elements into a new list or set."]}),"\n",(0,r.jsx)(n.h5,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# List Unpacking\na = [1, 2, 3]\nb = [*a, 4, 5]\nprint(b)  # [1, 2, 3, 4, 5]\n\n# Set Unpacking\ns1 = {1, 2, 3}\ns2 = {*s1, 4, 5}\nprint(s2)  # {1, 2, 3, 4, 5}\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"unpacking-for-zip-in-matrix-transposition",children:["Unpacking for ",(0,r.jsx)(n.code,{children:"zip()"})," in Matrix Transposition"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"*"})," operator can unpack rows of a matrix to pass them as arguments to the ",(0,r.jsx)(n.code,{children:"zip()"})," function."]}),"\n",(0,r.jsx)(n.h5,{id:"example-3",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"matrix = [[1, 2], [3, 4], [5, 6]]\ntransposed = list(zip(*matrix))\nprint(transposed)  # [(1, 3, 5), (2, 4, 6)]\n"})}),"\n",(0,r.jsx)(n.h4,{id:"collecting-excess-positional-arguments",children:"Collecting Excess Positional Arguments"}),"\n",(0,r.jsxs)(n.p,{children:["In function definitions, the ",(0,r.jsx)(n.code,{children:"*"})," symbol allows you to collect extra positional arguments into a tuple."]}),"\n",(0,r.jsx)(n.h5,{id:"example-4",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def func(a, *args):\n    print(a)      # First argument\n    print(args)   # Remaining arguments as a tuple\n\nfunc(1, 2, 3, 4)  # Output: 1 and (2, 3, 4)\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"unpacking-with--double-asterisk",children:["Unpacking with ",(0,r.jsx)(n.code,{children:"**"})," (Double Asterisk)"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"**"})," symbol is used for unpacking ",(0,r.jsx)(n.strong,{children:"dictionaries"})," into key-value pairs."]}),"\n",(0,r.jsx)(n.h4,{id:"function-keyword-argument-unpacking",children:"Function Keyword Argument Unpacking"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:"**"})," to unpack a dictionary and pass its key-value pairs as keyword arguments to a function."]}),"\n",(0,r.jsx)(n.h5,{id:"example-5",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def greet(name, age):\n    print(f"Hello {name}, you are {age} years old.")\n\ndata = {"name": "Alice", "age": 25}\ngreet(**data)  # Equivalent to: greet(name="Alice", age=25)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"merging-dictionaries",children:"Merging Dictionaries"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:"**"})," to unpack multiple dictionaries into a new dictionary."]}),"\n",(0,r.jsx)(n.h5,{id:"example-6",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"d1 = {\"a\": 1, \"b\": 2}\nd2 = {\"c\": 3, \"d\": 4}\nmerged = {**d1, **d2}\nprint(merged)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"collecting-keyword-arguments",children:"Collecting Keyword Arguments"}),"\n",(0,r.jsxs)(n.p,{children:["In function definitions, ",(0,r.jsx)(n.code,{children:"**"})," allows you to collect excess keyword arguments into a dictionary."]}),"\n",(0,r.jsx)(n.h5,{id:"example-7",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def func(a, **kwargs):\n    print(a)        # First argument\n    print(kwargs)   # Remaining keyword arguments as a dictionary\n\nfunc(1, b=2, c=3)  # Output: 1 and {'b': 2, 'c': 3}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"combining--and--in-functions",children:["Combining ",(0,r.jsx)(n.code,{children:"*"})," and ",(0,r.jsx)(n.code,{children:"**"})," in Functions"]}),"\n",(0,r.jsxs)(n.p,{children:["You can use both ",(0,r.jsx)(n.code,{children:"*"})," and ",(0,r.jsx)(n.code,{children:"**"})," together in function definitions to handle both extra positional and keyword arguments."]}),"\n",(0,r.jsx)(n.h5,{id:"example-8",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def func(a, *args, **kwargs):\n    print(a)         # First argument\n    print(args)      # Extra positional arguments\n    print(kwargs)    # Extra keyword arguments\n\nfunc(1, 2, 3, b=4, c=5)\n# Output:\n# 1\n# (2, 3)\n# {'b': 4, 'c': 5}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"unpacking-in-for-loops",children:"Unpacking in For Loops"}),"\n",(0,r.jsx)(n.p,{children:"You can unpack iterables while iterating through them in a loop."}),"\n",(0,r.jsx)(n.h4,{id:"example-9",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"pairs = [(1, 2), (3, 4), (5, 6)]\nfor a, b in pairs:\n    print(a, b)\n# Output:\n# 1 2\n# 3 4\n# 5 6\n"})}),"\n",(0,r.jsx)(n.h3,{id:"nested-unpacking",children:"Nested Unpacking"}),"\n",(0,r.jsx)(n.p,{children:"Python allows unpacking within nested structures."}),"\n",(0,r.jsx)(n.h4,{id:"example-10",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"nested = [1, (2, 3), 4]\na, (b, c), d = nested\nprint(a, b, c, d)  # 1 2 3 4\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"summary-of--and--usage",children:["Summary of ",(0,r.jsx)(n.code,{children:"*"})," and ",(0,r.jsx)(n.code,{children:"**"})," Usage"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Symbol"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Use Case"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"*"})}),(0,r.jsx)(n.td,{children:"Unpacking Iterables"}),(0,r.jsx)(n.td,{children:"Used to unpack lists, tuples, sets, or other iterables."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"*"})}),(0,r.jsx)(n.td,{children:"Collect Positional Arguments"}),(0,r.jsx)(n.td,{children:"Collects extra positional arguments into a tuple."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"*"})}),(0,r.jsx)(n.td,{children:"List/Set Unpacking"}),(0,r.jsx)(n.td,{children:"Unpacks iterables into new lists or sets."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"*"})}),(0,r.jsxs)(n.td,{children:["For ",(0,r.jsx)(n.code,{children:"zip()"})," Matrix Transposition"]}),(0,r.jsx)(n.td,{children:"Unpacks rows for transposition."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"**"})}),(0,r.jsx)(n.td,{children:"Unpacking Dictionaries"}),(0,r.jsx)(n.td,{children:"Used to unpack key-value pairs into function calls or new dictionaries."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"**"})}),(0,r.jsx)(n.td,{children:"Collect Keyword Arguments"}),(0,r.jsx)(n.td,{children:"Collects extra keyword arguments into a dictionary."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);