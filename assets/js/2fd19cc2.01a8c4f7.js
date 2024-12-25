"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[7509],{2033:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"programming-languages/go/variable","title":"Variables and Scope","description":"Variables in Go","source":"@site/docs/programming-languages/go/variable.md","sourceDirName":"programming-languages/go","slug":"/programming-languages/go/variable","permalink":"/docs/programming-languages/go/variable","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/go/variable.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735124491000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/programming-languages/go/introduction"},"next":{"title":"Mutation","permalink":"/docs/programming-languages/go/mutation"}}');var l=a(4848),s=a(8453);const r={sidebar_position:2},c="Variables and Scope",o={},t=[{value:"Variables in Go",id:"variables-in-go",level:2},{value:"Variable Declaration",id:"variable-declaration",level:3},{value:"Multiple Variable Declarations",id:"multiple-variable-declarations",level:3},{value:"Default Values",id:"default-values",level:3},{value:"Data Types in Go",id:"data-types-in-go",level:2},{value:"Basic Data Types",id:"basic-data-types",level:3},{value:"Composite Data Types",id:"composite-data-types",level:3},{value:"Array",id:"array",level:4},{value:"Slice",id:"slice",level:4},{value:"Map",id:"map",level:4},{value:"Struct",id:"struct",level:4},{value:"Pointer",id:"pointer",level:4},{value:"Special Types",id:"special-types",level:3},{value:"Interface",id:"interface",level:4},{value:"Function Type",id:"function-type",level:4},{value:"Variable Scope in Go",id:"variable-scope-in-go",level:2},{value:"Local Scope",id:"local-scope",level:3},{value:"Package Scope",id:"package-scope",level:3},{value:"Global Scope",id:"global-scope",level:3},{value:"Shadowing",id:"shadowing",level:3},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"variables-and-scope",children:"Variables and Scope"})}),"\n",(0,l.jsx)(n.h2,{id:"variables-in-go",children:"Variables in Go"}),"\n",(0,l.jsxs)(n.p,{children:["A variable in Go is a storage location with a name, associated with a type, that holds a value. Variables can be declared using the ",(0,l.jsx)(n.code,{children:"var"})," keyword or short declaration syntax."]}),"\n",(0,l.jsx)(n.h3,{id:"variable-declaration",children:"Variable Declaration"}),"\n",(0,l.jsx)(n.p,{children:"Go supports three ways to declare variables:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["Using ",(0,l.jsx)(n.code,{children:"var"})," keyword (explicit type):"]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'var name string\nname = "John"\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["Using ",(0,l.jsx)(n.code,{children:"var"})," keyword (implicit type inference):"]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"var age = 30\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Short variable declaration (only inside functions):"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'name := "Alice"\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"multiple-variable-declarations",children:"Multiple Variable Declarations"}),"\n",(0,l.jsx)(n.p,{children:"You can declare and initialize multiple variables at once:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'var x, y int = 10, 20\na, b := 3.14, "Hello"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"default-values",children:"Default Values"}),"\n",(0,l.jsx)(n.p,{children:"If a variable is declared but not initialized, it gets a default value based on its type:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Numeric types: ",(0,l.jsx)(n.code,{children:"0"})]}),"\n",(0,l.jsxs)(n.li,{children:["Strings: ",(0,l.jsx)(n.code,{children:'""'})]}),"\n",(0,l.jsxs)(n.li,{children:["Booleans: ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsxs)(n.li,{children:["Pointers, slices, maps, channels, interfaces: ",(0,l.jsx)(n.code,{children:"nil"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"data-types-in-go",children:"Data Types in Go"}),"\n",(0,l.jsx)(n.p,{children:"Go is a statically typed language, meaning the type of a variable is determined at compile time."}),"\n",(0,l.jsx)(n.h3,{id:"basic-data-types",children:"Basic Data Types"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Numeric Types:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Integer: ",(0,l.jsx)(n.code,{children:"int"}),", ",(0,l.jsx)(n.code,{children:"int8"}),", ",(0,l.jsx)(n.code,{children:"int16"}),", ",(0,l.jsx)(n.code,{children:"int32"}),", ",(0,l.jsx)(n.code,{children:"int64"})," (and their unsigned counterparts ",(0,l.jsx)(n.code,{children:"uint"}),", etc.)"]}),"\n",(0,l.jsxs)(n.li,{children:["Floating-point: ",(0,l.jsx)(n.code,{children:"float32"}),", ",(0,l.jsx)(n.code,{children:"float64"})]}),"\n",(0,l.jsxs)(n.li,{children:["Complex numbers: ",(0,l.jsx)(n.code,{children:"complex64"}),", ",(0,l.jsx)(n.code,{children:"complex128"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"String:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"UTF-8 encoded sequence of characters."}),"\n",(0,l.jsx)(n.li,{children:"Immutable."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Boolean:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Represented as ",(0,l.jsx)(n.code,{children:"true"})," or ",(0,l.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"composite-data-types",children:"Composite Data Types"}),"\n",(0,l.jsx)(n.h4,{id:"array",children:"Array"}),"\n",(0,l.jsx)(n.p,{children:"Fixed-size, homogeneous collection of elements."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"var arr [5]int\narr[0] = 10\n"})}),"\n",(0,l.jsx)(n.h4,{id:"slice",children:"Slice"}),"\n",(0,l.jsx)(n.p,{children:"Dynamic-sized, more powerful abstraction over arrays."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"nums := []int{1, 2, 3, 4}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"map",children:"Map"}),"\n",(0,l.jsx)(n.p,{children:"Key-value pairs."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'scores := map[string]int{"Alice": 90, "Bob": 85}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"struct",children:"Struct"}),"\n",(0,l.jsx)(n.p,{children:"Custom data structure grouping multiple fields."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"type Person struct {\n    Name string\n    Age  int\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"pointer",children:"Pointer"}),"\n",(0,l.jsx)(n.p,{children:"Holds the memory address of a variable."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"var p *int\n"})}),"\n",(0,l.jsx)(n.h3,{id:"special-types",children:"Special Types"}),"\n",(0,l.jsx)(n.h4,{id:"interface",children:"Interface"}),"\n",(0,l.jsx)(n.p,{children:"Defines a set of methods that a type must implement."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"type Shape interface {\n    Area() float64\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"function-type",children:"Function Type"}),"\n",(0,l.jsx)(n.p,{children:"Functions are first-class citizens and can be assigned to variables."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"var add func(int, int) int\n"})}),"\n",(0,l.jsx)(n.h2,{id:"variable-scope-in-go",children:"Variable Scope in Go"}),"\n",(0,l.jsx)(n.p,{children:"The scope of a variable defines where it can be accessed in a program."}),"\n",(0,l.jsx)(n.h3,{id:"local-scope",children:"Local Scope"}),"\n",(0,l.jsx)(n.p,{children:"Variables declared inside a function or block are accessible only within that block."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"func main() {\n    x := 10 // Local to main\n    fmt.Println(x)\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"package-scope",children:"Package Scope"}),"\n",(0,l.jsx)(n.p,{children:"Variables declared outside functions (at the package level) are accessible across the same package."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"var count int // Accessible by all functions in the package\n"})}),"\n",(0,l.jsx)(n.h3,{id:"global-scope",children:"Global Scope"}),"\n",(0,l.jsx)(n.p,{children:'Go doesn\'t have true "global variables" because all variables are bound to a package. However, public variables (starting with an uppercase letter) can be accessed by other packages if exported.'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"var PublicVar int // Accessible from other packages\n"})}),"\n",(0,l.jsx)(n.h3,{id:"shadowing",children:"Shadowing"}),"\n",(0,l.jsx)(n.p,{children:"A local variable can shadow a package-level or global variable with the same name."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"var x = 5\n\nfunc main() {\n    x := 10 // Shadows the package-level variable\n    fmt.Println(x) // Prints 10\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Always initialize variables when possible to avoid confusion with default values."}),"\n",(0,l.jsxs)(n.li,{children:["Use short declarations (",(0,l.jsx)(n.code,{children:":="}),") for concise code, but only within functions."]}),"\n",(0,l.jsx)(n.li,{children:"Use descriptive variable names to make the code readable."}),"\n",(0,l.jsx)(n.li,{children:"Keep variable scope as narrow as possible to reduce side effects."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example Code"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\n// Package-level variable\nvar packageVar = "I\'m accessible within this package!"\n\nfunc main() {\n    // Local variables\n    var localVar int = 42\n    shortVar := "I was declared using short syntax!"\n\n    fmt.Println(packageVar)\n    fmt.Println(localVar)\n    fmt.Println(shortVar)\n\n    demonstrateScope()\n}\n\nfunc demonstrateScope() {\n    // Access package-level variable\n    fmt.Println(packageVar)\n\n    // localVar is not accessible here, so the following line would cause an error:\n    // fmt.Println(localVar)\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var i=a(6540);const l={},s=i.createContext(l);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);