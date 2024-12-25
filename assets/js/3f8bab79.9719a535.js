"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[5451],{8938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"programming-languages/go/mutation","title":"Mutation","description":"Mutation refers to the process of altering the state or value of a variable, object, or data structure after it has been created. In Go, mutation is a common concept, especially in data structures like slices, maps, and structs. Go provides mechanisms to perform mutations while also emphasizing immutability in certain contexts (like strings).","source":"@site/docs/programming-languages/go/mutation.md","sourceDirName":"programming-languages/go","slug":"/programming-languages/go/mutation","permalink":"/docs/programming-languages/go/mutation","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/go/mutation.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735124491000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Variables and Scope","permalink":"/docs/programming-languages/go/variable"},"next":{"title":"Conditions and Loops","permalink":"/docs/programming-languages/go/condition"}}');var a=t(4848),s=t(8453);const r={sidebar_position:3},l="Mutation",o={},c=[{value:"Mutable vs. Immutable Data in Go",id:"mutable-vs-immutable-data-in-go",level:2},{value:"Mutation of Slices",id:"mutation-of-slices",level:2},{value:"Example: Mutating a Slice",id:"example-mutating-a-slice",level:3},{value:"Key Points:",id:"key-points",level:3},{value:"Mutation of Maps",id:"mutation-of-maps",level:2},{value:"Example: Mutating a Map",id:"example-mutating-a-map",level:3},{value:"Key Points:",id:"key-points-1",level:3},{value:"Mutation of Structs",id:"mutation-of-structs",level:2},{value:"Example: Mutating Struct Fields",id:"example-mutating-struct-fields",level:3},{value:"Key Points:",id:"key-points-2",level:3},{value:"Strings in Go (Immutable)",id:"strings-in-go-immutable",level:2},{value:"Example: String Mutation (Incorrect)",id:"example-string-mutation-incorrect",level:3},{value:"Example: Creating a New String",id:"example-creating-a-new-string",level:3},{value:"Key Points:",id:"key-points-3",level:3},{value:"Mutation with Pointers",id:"mutation-with-pointers",level:2},{value:"Example: Mutating a Value via Pointer",id:"example-mutating-a-value-via-pointer",level:3},{value:"Key Points:",id:"key-points-4",level:3},{value:"Mutation in Channels",id:"mutation-in-channels",level:2},{value:"Example: Mutating Data Passed Through Channels",id:"example-mutating-data-passed-through-channels",level:3},{value:"Key Points:",id:"key-points-5",level:3},{value:"Concurrent Mutation",id:"concurrent-mutation",level:2},{value:"Example: Protecting Shared Data",id:"example-protecting-shared-data",level:3},{value:"Key Points:",id:"key-points-6",level:3},{value:"Best Practices for Mutation in Go",id:"best-practices-for-mutation-in-go",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"mutation",children:"Mutation"})}),"\n",(0,a.jsx)(n.p,{children:"Mutation refers to the process of altering the state or value of a variable, object, or data structure after it has been created. In Go, mutation is a common concept, especially in data structures like slices, maps, and structs. Go provides mechanisms to perform mutations while also emphasizing immutability in certain contexts (like strings)."}),"\n",(0,a.jsx)(n.h2,{id:"mutable-vs-immutable-data-in-go",children:"Mutable vs. Immutable Data in Go"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Mutable Data:"})," Data that can be changed after it is created. Examples include slices, maps, structs, and pointers."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Immutable Data:"})," Data that cannot be changed once created. For example, strings and constants."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"mutation-of-slices",children:"Mutation of Slices"}),"\n",(0,a.jsx)(n.p,{children:"Slices are references to an underlying array. Mutating a slice affects the underlying array."}),"\n",(0,a.jsx)(n.h3,{id:"example-mutating-a-slice",children:"Example: Mutating a Slice"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    nums := []int{1, 2, 3}\n    fmt.Println("Before mutation:", nums)\n\n    nums[0] = 10 // Mutating the first element\n    fmt.Println("After mutation:", nums)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Before mutation: [1 2 3]\nAfter mutation: [10 2 3]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"key-points",children:"Key Points:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A slice's elements can be modified directly."}),"\n",(0,a.jsxs)(n.li,{children:["Appending to a slice (",(0,a.jsx)(n.code,{children:"append"}),") may create a new underlying array if the capacity is exceeded, but mutations on existing elements will still affect the original data."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"mutation-of-maps",children:"Mutation of Maps"}),"\n",(0,a.jsx)(n.p,{children:"Maps are inherently mutable in Go. Adding, updating, or deleting keys changes the map in place."}),"\n",(0,a.jsx)(n.h3,{id:"example-mutating-a-map",children:"Example: Mutating a Map"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    scores := map[string]int{"Alice": 90, "Bob": 85}\n    fmt.Println("Before mutation:", scores)\n\n    // Adding a new key-value pair\n    scores["Charlie"] = 92\n\n    // Updating an existing key\n    scores["Alice"] = 95\n\n    // Deleting a key\n    delete(scores, "Bob")\n\n    fmt.Println("After mutation:", scores)\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Before mutation: map[Alice:90 Bob:85]\nAfter mutation: map[Alice:95 Charlie:92]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"key-points-1",children:"Key Points:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Maps are always passed by reference."}),"\n",(0,a.jsx)(n.li,{children:"Mutating a map in one function affects the original map in the calling function."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"mutation-of-structs",children:"Mutation of Structs"}),"\n",(0,a.jsx)(n.p,{children:"Struct fields can be mutated if they are accessed directly, or through pointers."}),"\n",(0,a.jsx)(n.h3,{id:"example-mutating-struct-fields",children:"Example: Mutating Struct Fields"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\ntype Person struct {\n    Name string\n    Age  int\n}\n\nfunc main() {\n    p := Person{Name: "John", Age: 30}\n    fmt.Println("Before mutation:", p)\n\n    // Direct mutation\n    p.Name = "Alice"\n\n    // Pointer-based mutation\n    mutateAge(&p, 35)\n\n    fmt.Println("After mutation:", p)\n}\n\nfunc mutateAge(person *Person, newAge int) {\n    person.Age = newAge\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Before mutation: {John 30}\nAfter mutation: {Alice 35}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"key-points-2",children:"Key Points:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Struct fields are mutable by default."}),"\n",(0,a.jsx)(n.li,{children:"Passing a pointer to a struct allows the function to mutate its fields."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"strings-in-go-immutable",children:"Strings in Go (Immutable)"}),"\n",(0,a.jsx)(n.p,{children:'Strings in Go are immutable. Any operation that seems to "change" a string actually creates a new string.'}),"\n",(0,a.jsx)(n.h3,{id:"example-string-mutation-incorrect",children:"Example: String Mutation (Incorrect)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"str := \"Hello\"\nstr[0] = 'h' // Compilation error: cannot assign to str[0]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-creating-a-new-string",children:"Example: Creating a New String"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    str := "Hello"\n    mutatedStr := "h" + str[1:] // Create a new string\n    fmt.Println(mutatedStr)     // Output: "hello"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"key-points-3",children:"Key Points:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Strings cannot be modified in place."}),"\n",(0,a.jsx)(n.li,{children:'To "mutate" a string, create a new string using operations like concatenation or slicing.'}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"mutation-with-pointers",children:"Mutation with Pointers"}),"\n",(0,a.jsx)(n.p,{children:"Pointers allow for direct mutation of variables by referencing their memory addresses."}),"\n",(0,a.jsx)(n.h3,{id:"example-mutating-a-value-via-pointer",children:"Example: Mutating a Value via Pointer"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    x := 10\n    fmt.Println("Before mutation:", x)\n\n    mutate(&x)\n\n    fmt.Println("After mutation:", x)\n}\n\nfunc mutate(num *int) {\n    *num = 20 // Dereference pointer to mutate value\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Before mutation: 10\nAfter mutation: 20\n"})}),"\n",(0,a.jsx)(n.h3,{id:"key-points-4",children:"Key Points:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Pointers enable mutation of variables outside their original scope."}),"\n",(0,a.jsx)(n.li,{children:"Care must be taken to avoid unintended side effects when sharing pointers."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"mutation-in-channels",children:"Mutation in Channels"}),"\n",(0,a.jsx)(n.p,{children:"Channels are used to communicate between goroutines, and the data sent through a channel is immutable (copies are sent). However, if you send a reference type (like a slice or a pointer), the referenced data can still be mutated."}),"\n",(0,a.jsx)(n.h3,{id:"example-mutating-data-passed-through-channels",children:"Example: Mutating Data Passed Through Channels"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    ch := make(chan []int)\n    nums := []int{1, 2, 3}\n\n    go func() {\n        nums[0] = 42 // Mutate the slice\n        ch <- nums   // Send the mutated slice\n    }()\n\n    result := <-ch\n    fmt.Println(result) // Output: [42 2 3]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"key-points-5",children:"Key Points:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data passed through channels is immutable if it\u2019s a value type (like integers or structs)."}),"\n",(0,a.jsx)(n.li,{children:"If you pass a reference type (like slices or pointers), the data can still be mutated."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"concurrent-mutation",children:"Concurrent Mutation"}),"\n",(0,a.jsxs)(n.p,{children:["Go provides synchronization primitives (like ",(0,a.jsx)(n.code,{children:"sync.Mutex"}),") to handle concurrent mutation of shared data."]}),"\n",(0,a.jsx)(n.h3,{id:"example-protecting-shared-data",children:"Example: Protecting Shared Data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nfunc main() {\n    var count int\n    var mu sync.Mutex\n    var wg sync.WaitGroup\n\n    for i := 0; i < 5; i++ {\n        wg.Add(1)\n        go func() {\n            defer wg.Done()\n            mu.Lock()\n            count++ // Safely mutate shared variable\n            mu.Unlock()\n        }()\n    }\n\n    wg.Wait()\n    fmt.Println("Final count:", count)\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"key-points-6",children:"Key Points:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use ",(0,a.jsx)(n.code,{children:"sync.Mutex"})," to protect shared mutable data in concurrent programs."]}),"\n",(0,a.jsx)(n.li,{children:"Avoid race conditions by synchronizing access to shared variables."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"best-practices-for-mutation-in-go",children:"Best Practices for Mutation in Go"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Minimize Mutation:"})," Prefer immutable data structures where possible to avoid unintended side effects."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Use Pointers Wisely:"})," Only pass pointers when necessary, as they can introduce complexity and side effects."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Document Mutations:"})," Clearly indicate functions or methods that perform mutations."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Handle Concurrency Carefully:"})," Use synchronization mechanisms like ",(0,a.jsx)(n.code,{children:"sync.Mutex"})," or atomic operations to avoid race conditions."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Immutable Alternatives:"})," When working with strings or immutable data, prefer creating new instances rather than attempting mutations."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);