"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[4041],{91527:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"programming-languages/go/array-maps","title":"Arrays, Slices and, Maps","description":"In Go, arrays, slices, and maps are built-in types used for storing and working with collections of data. Each of these data structures serves a different purpose and has its own unique characteristics and use cases. Understanding how they work will help you write more efficient and effective Go code.","source":"@site/docs/programming-languages/go/array-maps.md","sourceDirName":"programming-languages/go","slug":"/programming-languages/go/array-maps","permalink":"/docs/programming-languages/go/array-maps","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/go/array-maps.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1744173129000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Conditions and Loops","permalink":"/docs/programming-languages/go/condition"},"next":{"title":"Functions","permalink":"/docs/programming-languages/go/functions"}}');var a=i(74848),r=i(28453);const l={sidebar_position:6},t="Arrays, Slices and, Maps",c={},o=[{value:"Arrays in Go",id:"arrays-in-go",level:2},{value:"Key Characteristics of Arrays",id:"key-characteristics-of-arrays",level:3},{value:"Declaring an Array",id:"declaring-an-array",level:3},{value:"Accessing Elements",id:"accessing-elements",level:3},{value:"Arrays and Memory",id:"arrays-and-memory",level:3},{value:"Array Length",id:"array-length",level:3},{value:"Slices in Go",id:"slices-in-go",level:2},{value:"Key Characteristics of Slices",id:"key-characteristics-of-slices",level:3},{value:"Declaring a Slice",id:"declaring-a-slice",level:3},{value:"Accessing and Modifying Elements",id:"accessing-and-modifying-elements",level:3},{value:"Slicing a Slice",id:"slicing-a-slice",level:3},{value:"Appending to a Slice",id:"appending-to-a-slice",level:3},{value:"Passing Slices to Functions",id:"passing-slices-to-functions",level:3},{value:"Length and Capacity",id:"length-and-capacity",level:3},{value:"Maps in Go",id:"maps-in-go",level:2},{value:"Key Characteristics of Maps",id:"key-characteristics-of-maps",level:3},{value:"Declaring a Map",id:"declaring-a-map",level:3},{value:"Adding and Accessing Elements",id:"adding-and-accessing-elements",level:3},{value:"Checking if a Key Exists",id:"checking-if-a-key-exists",level:3},{value:"Deleting Elements",id:"deleting-elements",level:3},{value:"Iterating Over Maps",id:"iterating-over-maps",level:3},{value:"Maps and Functions",id:"maps-and-functions",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"arrays-slices-and-maps",children:"Arrays, Slices and, Maps"})}),"\n",(0,a.jsxs)(n.p,{children:["In Go, ",(0,a.jsx)(n.strong,{children:"arrays"}),", ",(0,a.jsx)(n.strong,{children:"slices"}),", and ",(0,a.jsx)(n.strong,{children:"maps"})," are built-in types used for storing and working with collections of data. Each of these data structures serves a different purpose and has its own unique characteristics and use cases. Understanding how they work will help you write more efficient and effective Go code."]}),"\n",(0,a.jsx)(n.h2,{id:"arrays-in-go",children:"Arrays in Go"}),"\n",(0,a.jsxs)(n.p,{children:["An ",(0,a.jsx)(n.strong,{children:"array"})," in Go is a fixed-size, ordered collection of elements of the same type. The length of an array is part of its type, meaning that arrays with different lengths are considered different types."]}),"\n",(0,a.jsx)(n.h3,{id:"key-characteristics-of-arrays",children:"Key Characteristics of Arrays"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Fixed Size:"})," The size of an array is defined at the time of its declaration and cannot be changed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Homogeneous:"})," All elements in an array must be of the same type (e.g., all integers, all strings)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Memory Allocation:"})," Arrays are stored in contiguous blocks of memory."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"declaring-an-array",children:"Declaring an Array"}),"\n",(0,a.jsx)(n.p,{children:"To declare an array in Go, you specify the type of the elements followed by the length of the array."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"var arr [5]int // An array of 5 integers\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also initialize the array at the time of declaration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"var arr = [3]int{1, 2, 3}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, Go allows you to omit the size and let the compiler infer it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"arr := [...]int{1, 2, 3} // The compiler infers the size (3)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"accessing-elements",children:"Accessing Elements"}),"\n",(0,a.jsx)(n.p,{children:"You can access elements of an array using an index (starting from 0):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"arr[0] = 10  // Set the first element to 10\nfmt.Println(arr[0]) // Get the first element\n"})}),"\n",(0,a.jsx)(n.h3,{id:"arrays-and-memory",children:"Arrays and Memory"}),"\n",(0,a.jsxs)(n.p,{children:["When you pass an array to a function, Go passes the ",(0,a.jsx)(n.strong,{children:"entire array"})," by value (copying the array), so modifying the array inside the function will not affect the original array outside the function. To modify an array inside a function, you would need to pass a pointer to the array."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"func modifyArray(arr [3]int) {\n    arr[0] = 99\n}\n\nfunc main() {\n    arr := [3]int{1, 2, 3}\n    modifyArray(arr)\n    fmt.Println(arr) // Output: [1 2 3]\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"array-length",children:"Array Length"}),"\n",(0,a.jsxs)(n.p,{children:["You can get the length of an array using the built-in ",(0,a.jsx)(n.code,{children:"len()"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"fmt.Println(len(arr)) // Output: 3\n"})}),"\n",(0,a.jsx)(n.h2,{id:"slices-in-go",children:"Slices in Go"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"slice"})," is a more flexible, dynamic view into an array. Unlike arrays, slices can grow and shrink in size as needed. Slices are a more common data structure in Go, and they provide powerful capabilities to work with sequences of data."]}),"\n",(0,a.jsx)(n.h3,{id:"key-characteristics-of-slices",children:"Key Characteristics of Slices"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Dynamic Size:"})," Unlike arrays, slices do not have a fixed size. You can append elements, and their size can grow or shrink."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Reference Type:"})," Slices are reference types, meaning they point to an underlying array. When you pass a slice to a function, the function can modify the contents of the slice."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Literals:"})," A slice is created using a range of elements from an existing array or using the ",(0,a.jsx)(n.code,{children:"make()"})," function."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"declaring-a-slice",children:"Declaring a Slice"}),"\n",(0,a.jsx)(n.p,{children:"Slices are typically declared in one of two ways:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Using an array literal:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"slice := []int{1, 2, 3, 4} // Slice with initial elements\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Using ",(0,a.jsx)(n.code,{children:"make()"})," function:"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"slice := make([]int, 5) // Creates a slice of length 5 with default values (zeros)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can also create a slice with a specific ",(0,a.jsx)(n.strong,{children:"capacity"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"slice := make([]int, 5, 10) // Slice with length 5 and capacity 10\n"})}),"\n",(0,a.jsx)(n.h3,{id:"accessing-and-modifying-elements",children:"Accessing and Modifying Elements"}),"\n",(0,a.jsx)(n.p,{children:"Just like arrays, you access and modify elements in a slice using indices:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"slice[0] = 10  // Modify the first element\nfmt.Println(slice[0]) // Get the first element\n"})}),"\n",(0,a.jsx)(n.h3,{id:"slicing-a-slice",children:"Slicing a Slice"}),"\n",(0,a.jsx)(n.p,{children:"You can create a sub-slice by specifying a range:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"s := []int{1, 2, 3, 4, 5}\nsubSlice := s[1:4] // Slice from index 1 to 3 (not including 4)\nfmt.Println(subSlice) // Output: [2 3 4]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"appending-to-a-slice",children:"Appending to a Slice"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"append()"})," function is used to add elements to a slice. This function returns a new slice with the added elements."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"s := []int{1, 2, 3}\ns = append(s, 4) // Adds 4 to the slice\nfmt.Println(s)   // Output: [1 2 3 4]\n"})}),"\n",(0,a.jsx)(n.p,{children:"If the slice's underlying array is full (i.e., the slice has reached its capacity), Go automatically allocates a new, larger array to accommodate the new elements."}),"\n",(0,a.jsx)(n.h3,{id:"passing-slices-to-functions",children:"Passing Slices to Functions"}),"\n",(0,a.jsx)(n.p,{children:"Slices are reference types, so when passed to a function, the function can modify the underlying array directly."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"func modifySlice(s []int) {\n    s[0] = 99\n}\n\nfunc main() {\n    slice := []int{1, 2, 3}\n    modifySlice(slice)\n    fmt.Println(slice) // Output: [99 2 3]\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"length-and-capacity",children:"Length and Capacity"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Length:"})," The number of elements in the slice (",(0,a.jsx)(n.code,{children:"len()"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Capacity:"})," The number of elements the slice can accommodate before it needs to be resized (",(0,a.jsx)(n.code,{children:"cap()"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"fmt.Println(len(slice))  // Length\nfmt.Println(cap(slice))  // Capacity\n"})}),"\n",(0,a.jsx)(n.h2,{id:"maps-in-go",children:"Maps in Go"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"map"})," is an unordered collection of key-value pairs. Maps are similar to dictionaries in Python or hash tables in other languages. The keys in a map must be of a type that is comparable (e.g., primitive types, strings, etc.)."]}),"\n",(0,a.jsx)(n.h3,{id:"key-characteristics-of-maps",children:"Key Characteristics of Maps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Unordered:"})," Maps do not maintain the order of elements."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Dynamic Size:"})," You can add or remove key-value pairs from a map at runtime."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Key Lookup:"})," You can quickly retrieve values associated with keys using a hash table-like mechanism."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"declaring-a-map",children:"Declaring a Map"}),"\n",(0,a.jsxs)(n.p,{children:["Maps are declared using the ",(0,a.jsx)(n.code,{children:"make()"})," function or map literals."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Using ",(0,a.jsx)(n.code,{children:"make()"})," function:"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"m := make(map[string]int) // A map from strings to integers\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Using map literal:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'m := map[string]int{\n    "Alice": 30,\n    "Bob":   25,\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"adding-and-accessing-elements",children:"Adding and Accessing Elements"}),"\n",(0,a.jsx)(n.p,{children:"You can add key-value pairs to a map by using the key as the index."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'m["Charlie"] = 35 // Add a key-value pair to the map\nfmt.Println(m["Alice"]) // Output: 30\n'})}),"\n",(0,a.jsx)(n.p,{children:"If you attempt to access a key that doesn't exist, it will return the zero value for the map's value type."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'value := m["NonExistentKey"] // Will return the zero value (0 in this case)\nfmt.Println(value)            // Output: 0\n'})}),"\n",(0,a.jsx)(n.h3,{id:"checking-if-a-key-exists",children:"Checking if a Key Exists"}),"\n",(0,a.jsx)(n.p,{children:'To check if a key exists in a map, you can use the "comma ok" idiom:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'value, exists := m["Bob"]\nif exists {\n    fmt.Println("Bob\'s age is", value)\n} else {\n    fmt.Println("Bob not found")\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"deleting-elements",children:"Deleting Elements"}),"\n",(0,a.jsxs)(n.p,{children:["You can remove key-value pairs from a map using the ",(0,a.jsx)(n.code,{children:"delete()"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'delete(m, "Bob") // Removes the key "Bob" and its associated value\n'})}),"\n",(0,a.jsx)(n.h3,{id:"iterating-over-maps",children:"Iterating Over Maps"}),"\n",(0,a.jsxs)(n.p,{children:["You can use a ",(0,a.jsx)(n.code,{children:"for"})," loop with the ",(0,a.jsx)(n.code,{children:"range"})," keyword to iterate over the keys and values of a map."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"for key, value := range m {\n    fmt.Println(key, value)\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"maps-and-functions",children:"Maps and Functions"}),"\n",(0,a.jsx)(n.p,{children:"Maps are reference types, so when you pass a map to a function, the function can modify the map's contents."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'func modifyMap(m map[string]int) {\n    m["Alice"] = 40\n}\n\nfunc main() {\n    m := map[string]int{"Alice": 30, "Bob": 25}\n    modifyMap(m)\n    fmt.Println(m["Alice"]) // Output: 40\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var s=i(96540);const a={},r=s.createContext(a);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);