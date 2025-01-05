"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[2975],{5790:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"programming-languages/go/functions","title":"Functions","description":"Functions are fundamental building blocks in Go, allowing you to write reusable, modular, and maintainable code. A function is a group of statements that perform a specific task and can optionally return a result.","source":"@site/docs/programming-languages/go/functions.md","sourceDirName":"programming-languages/go","slug":"/programming-languages/go/functions","permalink":"/docs/programming-languages/go/functions","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/go/functions.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735124491000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Pointers","permalink":"/docs/programming-languages/go/pointers"},"next":{"title":"Introduction","permalink":"/docs/frameworks-libraries/introduction"}}');var r=i(4848),l=i(8453);const t={sidebar_position:5},s="Functions",c={},o=[{value:"What Are Functions?",id:"what-are-functions",level:2},{value:"Defining and Calling Functions",id:"defining-and-calling-functions",level:2},{value:"Defining a Function",id:"defining-a-function",level:3},{value:"Syntax:",id:"syntax",level:4},{value:"Example:",id:"example",level:4},{value:"Calling a Function",id:"calling-a-function",level:3},{value:"Example:",id:"example-1",level:4},{value:"Function Parameters",id:"function-parameters",level:2},{value:"Single Parameter",id:"single-parameter",level:3},{value:"Example:",id:"example-2",level:4},{value:"Multiple Parameters",id:"multiple-parameters",level:3},{value:"Example:",id:"example-3",level:4},{value:"Shortened Syntax for Same Type Parameters",id:"shortened-syntax-for-same-type-parameters",level:3},{value:"Example:",id:"example-4",level:4},{value:"Variadic Functions",id:"variadic-functions",level:3},{value:"Syntax:",id:"syntax-1",level:4},{value:"Example:",id:"example-5",level:4},{value:"Return Values",id:"return-values",level:2},{value:"Single Return Value",id:"single-return-value",level:3},{value:"Example:",id:"example-6",level:4},{value:"Multiple Return Values",id:"multiple-return-values",level:3},{value:"Example:",id:"example-7",level:4},{value:"Named Return Values",id:"named-return-values",level:3},{value:"Example:",id:"example-8",level:4},{value:"Anonymous Functions",id:"anonymous-functions",level:2},{value:"Example:",id:"example-9",level:4},{value:"Closures",id:"closures",level:2},{value:"Example:",id:"example-10",level:4},{value:"Defer, Panic, and Recover in Functions",id:"defer-panic-and-recover-in-functions",level:2},{value:"Defer",id:"defer",level:3},{value:"Example:",id:"example-11",level:4},{value:"Panic",id:"panic",level:3},{value:"Example:",id:"example-12",level:4},{value:"Recover",id:"recover",level:3},{value:"Example:",id:"example-13",level:4},{value:"Function as First-Class Citizens",id:"function-as-first-class-citizens",level:2},{value:"Example:",id:"example-14",level:4},{value:"Methods",id:"methods",level:2},{value:"Example:",id:"example-15",level:4},{value:"Best Practices for Functions",id:"best-practices-for-functions",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"functions",children:"Functions"})}),"\n",(0,r.jsx)(e.p,{children:"Functions are fundamental building blocks in Go, allowing you to write reusable, modular, and maintainable code. A function is a group of statements that perform a specific task and can optionally return a result."}),"\n",(0,r.jsx)(e.h2,{id:"what-are-functions",children:"What Are Functions?"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"A function in Go is a reusable block of code that can be called with arguments."}),"\n",(0,r.jsx)(e.li,{children:"Functions can accept parameters, perform operations, and return results."}),"\n",(0,r.jsx)(e.li,{children:"They are first-class citizens in Go, meaning they can be assigned to variables, passed as arguments, and returned by other functions."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"defining-and-calling-functions",children:"Defining and Calling Functions"}),"\n",(0,r.jsx)(e.h3,{id:"defining-a-function",children:"Defining a Function"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"func"})," keyword is used to define a function."]}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func functionName(parameters) returnType {\n    // Function body\n}\n"})}),"\n",(0,r.jsx)(e.h4,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc greet(name string) string {\n    return "Hello, " + name\n}\n\nfunc main() {\n    message := greet("Abhishek")\n    fmt.Println(message)\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"calling-a-function",children:"Calling a Function"}),"\n",(0,r.jsx)(e.p,{children:"To execute a function, simply call it by its name and pass the required arguments."}),"\n",(0,r.jsx)(e.h4,{id:"example-1",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc add(a int, b int) int {\n    return a + b\n}\n\nfunc main() {\n    sum := add(5, 7)\n    fmt.Println("Sum:", sum)\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"function-parameters",children:"Function Parameters"}),"\n",(0,r.jsx)(e.h3,{id:"single-parameter",children:"Single Parameter"}),"\n",(0,r.jsx)(e.p,{children:"A function can take a single parameter."}),"\n",(0,r.jsx)(e.h4,{id:"example-2",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func square(num int) int {\n    return num * num\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"multiple-parameters",children:"Multiple Parameters"}),"\n",(0,r.jsx)(e.p,{children:"A function can take multiple parameters."}),"\n",(0,r.jsx)(e.h4,{id:"example-3",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func multiply(a int, b int) int {\n    return a * b\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"shortened-syntax-for-same-type-parameters",children:"Shortened Syntax for Same Type Parameters"}),"\n",(0,r.jsx)(e.p,{children:"If multiple consecutive parameters share the same type, you can omit the type for all but the last parameter."}),"\n",(0,r.jsx)(e.h4,{id:"example-4",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func subtract(a, b int) int {\n    return a - b\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"variadic-functions",children:"Variadic Functions"}),"\n",(0,r.jsxs)(e.p,{children:["A variadic function accepts a variable number of arguments of the same type, denoted by ",(0,r.jsx)(e.code,{children:"..."}),"."]}),"\n",(0,r.jsx)(e.h4,{id:"syntax-1",children:"Syntax:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func functionName(args ...type) returnType {\n    // Function body\n}\n"})}),"\n",(0,r.jsx)(e.h4,{id:"example-5",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc sum(nums ...int) int {\n    total := 0\n    for _, num := range nums {\n        total += num\n    }\n    return total\n}\n\nfunc main() {\n    result := sum(1, 2, 3, 4)\n    fmt.Println("Sum:", result)\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(e.h3,{id:"single-return-value",children:"Single Return Value"}),"\n",(0,r.jsx)(e.p,{children:"A function can return a single value."}),"\n",(0,r.jsx)(e.h4,{id:"example-6",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func add(a, b int) int {\n    return a + b\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"multiple-return-values",children:"Multiple Return Values"}),"\n",(0,r.jsx)(e.p,{children:"Functions in Go can return multiple values, making it easy to return results and errors."}),"\n",(0,r.jsx)(e.h4,{id:"example-7",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc divide(a, b int) (int, error) {\n    if b == 0 {\n        return 0, fmt.Errorf("division by zero")\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    result, err := divide(10, 2)\n    if err != nil {\n        fmt.Println("Error:", err)\n    } else {\n        fmt.Println("Result:", result)\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"named-return-values",children:"Named Return Values"}),"\n",(0,r.jsx)(e.p,{children:"You can name return values in the function signature, which acts like declaring variables."}),"\n",(0,r.jsx)(e.h4,{id:"example-8",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func calculate(a, b int) (sum, product int) {\n    sum = a + b\n    product = a * b\n    return\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"anonymous-functions",children:"Anonymous Functions"}),"\n",(0,r.jsx)(e.p,{children:"Functions in Go can be defined without a name, known as anonymous functions. These are often used for short-lived purposes or as arguments to higher-order functions."}),"\n",(0,r.jsx)(e.h4,{id:"example-9",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    // Anonymous function assigned to a variable\n    square := func(x int) int {\n        return x * x\n    }\n    fmt.Println("Square:", square(5))\n\n    // Immediately Invoked Function Expression (IIFE)\n    func(msg string) {\n        fmt.Println(msg)\n    }("Hello, Go!")\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"closures",children:"Closures"}),"\n",(0,r.jsx)(e.p,{children:"A closure is a function value that captures variables from its surrounding scope. These variables remain accessible even after the scope in which they were declared ends."}),"\n",(0,r.jsx)(e.h4,{id:"example-10",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc counter() func() int {\n    count := 0\n    return func() int {\n        count++\n        return count\n    }\n}\n\nfunc main() {\n    increment := counter()\n    fmt.Println(increment()) // 1\n    fmt.Println(increment()) // 2\n    fmt.Println(increment()) // 3\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"defer-panic-and-recover-in-functions",children:"Defer, Panic, and Recover in Functions"}),"\n",(0,r.jsx)(e.h3,{id:"defer",children:"Defer"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"defer"})," keyword postpones the execution of a statement until the surrounding function completes."]}),"\n",(0,r.jsx)(e.h4,{id:"example-11",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    defer fmt.Println("This is deferred")\n    fmt.Println("This is executed first")\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Output:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"This is executed first\nThis is deferred\n"})}),"\n",(0,r.jsx)(e.h3,{id:"panic",children:"Panic"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"panic"})," function stops the normal execution of a program and begins the process of unwinding the stack."]}),"\n",(0,r.jsx)(e.h4,{id:"example-12",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Start")\n    panic("Something went wrong")\n    fmt.Println("End") // This won\'t execute\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"recover",children:"Recover"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"recover"})," function is used to regain control of a panicking program. It is typically used inside a ",(0,r.jsx)(e.code,{children:"defer"})," block."]}),"\n",(0,r.jsx)(e.h4,{id:"example-13",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println("Recovered from panic:", r)\n        }\n    }()\n    fmt.Println("Before panic")\n    panic("Something went wrong")\n    fmt.Println("After panic") // This won\'t execute\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Output:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Before panic\nRecovered from panic: Something went wrong\n"})}),"\n",(0,r.jsx)(e.h2,{id:"function-as-first-class-citizens",children:"Function as First-Class Citizens"}),"\n",(0,r.jsx)(e.p,{children:"In Go, functions are first-class citizens, meaning they can be:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Assigned to variables."}),"\n",(0,r.jsx)(e.li,{children:"Passed as arguments to other functions."}),"\n",(0,r.jsx)(e.li,{children:"Returned from other functions."}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"example-14",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc add(a, b int) int {\n    return a + b\n}\n\nfunc operate(a, b int, op func(int, int) int) int {\n    return op(a, b)\n}\n\nfunc main() {\n    result := operate(5, 3, add)\n    fmt.Println("Result:", result)\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(e.p,{children:"In Go, functions can be associated with types, making them methods. A method is simply a function with a receiver."}),"\n",(0,r.jsx)(e.h4,{id:"example-15",children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\ntype Rectangle struct {\n    Width, Height float64\n}\n\n// Method with a receiver\nfunc (r Rectangle) Area() float64 {\n    return r.Width * r.Height\n}\n\nfunc main() {\n    rect := Rectangle{Width: 5, Height: 10}\n    fmt.Println("Area:", rect.Area())\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"best-practices-for-functions",children:"Best Practices for Functions"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Keep Functions Small:"})," Each function should perform one task."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Use Descriptive Names:"})," Function names should clearly indicate their purpose."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Avoid Side Effects:"})," Minimize unexpected changes to global or shared variables."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Use Errors Effectively:"})," Return and handle errors appropriately."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Use Variadic Functions Sparingly:"})," Use them only when necessary, as they can reduce clarity."]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>s});var a=i(6540);const r={},l=a.createContext(r);function t(n){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),a.createElement(l.Provider,{value:e},n.children)}}}]);