"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[160],{2467:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"programming-languages/python/standard-library","title":"Standard Library","description":"Python\'s Standard Library is a collection of modules that are included with Python. These modules provide a wide variety of functionalities that help solve common programming tasks like working with files, handling data, and performing operations on collections, strings, etc. The great thing about the Python Standard Library is that it\u2019s built-in and doesn\u2019t require any external installation.","source":"@site/docs/programming-languages/python/standard-library.md","sourceDirName":"programming-languages/python","slug":"/programming-languages/python/standard-library","permalink":"/docs/programming-languages/python/standard-library","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/python/standard-library.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735113659000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Loops, Control Structures, and Functions","permalink":"/docs/programming-languages/python/loop-control-functions"},"next":{"title":"Pythonic Code","permalink":"/docs/programming-languages/python/pythonic-code"}}');var i=r(4848),s=r(8453);const o={sidebar_position:5},l="Standard Library",d={},a=[{value:"<code>itertools</code> Module",id:"itertools-module",level:2},{value:"<code>count(start=0, step=1)</code>",id:"countstart0-step1",level:3},{value:"<code>cycle(iterable)</code>",id:"cycleiterable",level:3},{value:"<code>repeat(object, times=None)</code>",id:"repeatobject-timesnone",level:3},{value:"<code>permutations(iterable, r)</code>",id:"permutationsiterable-r",level:3},{value:"<code>combinations(iterable, r)</code>",id:"combinationsiterable-r",level:3},{value:"<code>product(*iterables, repeat=1)</code>",id:"productiterables-repeat1",level:3},{value:"<code>collections</code> Module",id:"collections-module",level:2},{value:"<code>namedtuple(typename, field_names)</code>",id:"namedtupletypename-field_names",level:3},{value:"<code>deque</code>",id:"deque",level:3},{value:"<code>Counter</code>",id:"counter",level:3},{value:"<code>defaultdict</code>",id:"defaultdict",level:3},{value:"<code>OrderedDict</code>",id:"ordereddict",level:3},{value:"<code>functools</code> Module",id:"functools-module",level:2},{value:"<code>partial(func, \\*args, **kwargs)</code>*",id:"partialfunc-args-kwargs",level:3},{value:"<code>lru_cache(maxsize=128)</code>",id:"lru_cachemaxsize128",level:3},{value:"<code>reduce(function, iterable, initializer=None)</code>",id:"reducefunction-iterable-initializernone",level:3},{value:"<code>os</code> Module",id:"os-module",level:2},{value:"<code>os.getcwd()</code>",id:"osgetcwd",level:3},{value:"<code>os.listdir(path)</code>",id:"oslistdirpath",level:3},{value:"<code>os.path.join(path, *paths)</code>",id:"ospathjoinpath-paths",level:3},{value:"<code>os.mkdir(path)</code>",id:"osmkdirpath",level:3},{value:"<code>os.remove(path)</code>",id:"osremovepath",level:3},{value:"<code>os.environ</code>",id:"osenviron",level:3},{value:"<code>heapq</code> Module",id:"heapq-module",level:2},{value:"<code>heapify(iterable)</code>",id:"heapifyiterable",level:3},{value:"<code>heappush(heap, item)</code>",id:"heappushheap-item",level:3},{value:"<code>heappop(heap)</code>",id:"heappopheap",level:3},{value:"<code>heappushpop(heap, item)</code>",id:"heappushpopheap-item",level:3},{value:"<code>heapreplace(heap, item)</code>",id:"heapreplaceheap-item",level:3},{value:"<code>nlargest(n, iterable, key=None)</code>",id:"nlargestn-iterable-keynone",level:3},{value:"<code>nsmallest(n, iterable, key=None)</code>",id:"nsmallestn-iterable-keynone",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"standard-library",children:"Standard Library"})}),"\n",(0,i.jsxs)(n.p,{children:["Python's ",(0,i.jsx)(n.strong,{children:"Standard Library"})," is a collection of modules that are included with Python. These modules provide a wide variety of functionalities that help solve common programming tasks like working with files, handling data, and performing operations on collections, strings, etc. The great thing about the Python Standard Library is that it\u2019s built-in and doesn\u2019t require any external installation."]}),"\n",(0,i.jsxs)(n.p,{children:["Below, we\u2019ll cover some important modules from the standard library, focusing on ",(0,i.jsx)(n.code,{children:"itertools"}),", ",(0,i.jsx)(n.code,{children:"collections"}),", ",(0,i.jsx)(n.code,{children:"functools"}),", and ",(0,i.jsx)(n.code,{children:"os"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"itertools-module",children:[(0,i.jsx)(n.code,{children:"itertools"})," Module"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"itertools"})," provides a set of fast, memory-efficient tools that work on iterators to produce complex iterators. These are very useful for iterating over data in a functional way and for creating efficient looping constructs."]}),"\n",(0,i.jsx)(n.h3,{id:"countstart0-step1",children:(0,i.jsx)(n.code,{children:"count(start=0, step=1)"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an iterator that generates consecutive numbers, starting from ",(0,i.jsx)(n.code,{children:"start"})," and incrementing by ",(0,i.jsx)(n.code,{children:"step"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import itertools\nfor num in itertools.count(10, 2):\n    if num > 20: break\n    print(num)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"10\n12\n14\n16\n18\n20\n"})}),"\n",(0,i.jsx)(n.h3,{id:"cycleiterable",children:(0,i.jsx)(n.code,{children:"cycle(iterable)"})}),"\n",(0,i.jsx)(n.p,{children:"Cycles through an iterable endlessly."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import itertools\ncounter = 0\nfor val in itertools.cycle([1, 2, 3]):\n    if counter == 6: break\n    print(val)\n    counter += 1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\n2\n3\n1\n2\n3\n"})}),"\n",(0,i.jsx)(n.h3,{id:"repeatobject-timesnone",children:(0,i.jsx)(n.code,{children:"repeat(object, times=None)"})}),"\n",(0,i.jsx)(n.p,{children:"Repeats an object for a specified number of times."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import itertools\nfor val in itertools.repeat("Hello", 3):\n    print(val)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hello\nHello\nHello\n"})}),"\n",(0,i.jsx)(n.h3,{id:"permutationsiterable-r",children:(0,i.jsx)(n.code,{children:"permutations(iterable, r)"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns all possible permutations of length ",(0,i.jsx)(n.code,{children:"r"})," from the iterable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import itertools\nfor perm in itertools.permutations([1, 2, 3]):\n    print(perm)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(1, 2, 3)\n(1, 3, 2)\n(2, 1, 3)\n(2, 3, 1)\n(3, 1, 2)\n(3, 2, 1)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"combinationsiterable-r",children:(0,i.jsx)(n.code,{children:"combinations(iterable, r)"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns all possible combinations of length ",(0,i.jsx)(n.code,{children:"r"})," from the iterable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import itertools\nfor comb in itertools.combinations([1, 2, 3]):\n    print(comb)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(1,)\n(2,)\n(3,)\n(1, 2)\n(1, 3)\n(2, 3)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"productiterables-repeat1",children:(0,i.jsx)(n.code,{children:"product(*iterables, repeat=1)"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the Cartesian product of input iterables. Equivalent to nested for-loops."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import itertools\nfor prod in itertools.product([1, 2], repeat=2):\n    print(prod)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(1, 1)\n(1, 2)\n(2, 1)\n(2, 2)\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"collections-module",children:[(0,i.jsx)(n.code,{children:"collections"})," Module"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"collections"})," module provides specialized container datatypes, beyond the built-in ",(0,i.jsx)(n.code,{children:"list"}),", ",(0,i.jsx)(n.code,{children:"dict"}),", ",(0,i.jsx)(n.code,{children:"tuple"}),", and ",(0,i.jsx)(n.code,{children:"set"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"namedtupletypename-field_names",children:(0,i.jsx)(n.code,{children:"namedtuple(typename, field_names)"})}),"\n",(0,i.jsx)(n.p,{children:"Creates a tuple-like object with named fields, making the code more readable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from collections import namedtuple\nPerson = namedtuple('Person', 'name age')\np1 = Person(name='Alice', age=30)\nprint(p1.name, p1.age)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Alice 30\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deque",children:(0,i.jsx)(n.code,{children:"deque"})}),"\n",(0,i.jsx)(n.p,{children:"A list-like container optimized for appending and popping elements from both ends."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from collections import deque\nd = deque([1, 2, 3])\nd.appendleft(0)\nd.append(4)\nprint(d)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"deque([0, 1, 2, 3, 4])\n"})}),"\n",(0,i.jsx)(n.h3,{id:"counter",children:(0,i.jsx)(n.code,{children:"Counter"})}),"\n",(0,i.jsxs)(n.p,{children:["A subclass of ",(0,i.jsx)(n.code,{children:"dict"})," designed to count hashable objects. It returns the count of each element in an iterable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from collections import Counter\ntext = "apple apple orange"\ncount = Counter(text.split())\nprint(count)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Counter({'apple': 2, 'orange': 1})\n"})}),"\n",(0,i.jsx)(n.h3,{id:"defaultdict",children:(0,i.jsx)(n.code,{children:"defaultdict"})}),"\n",(0,i.jsxs)(n.p,{children:["A subclass of ",(0,i.jsx)(n.code,{children:"dict"})," that provides a default value for non-existent keys. Useful for handling missing dictionary keys gracefully."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from collections import defaultdict\nd = defaultdict(int)\nd['a'] += 1\nprint(d)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"defaultdict(<class 'int'>, {'a': 1})\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ordereddict",children:(0,i.jsx)(n.code,{children:"OrderedDict"})}),"\n",(0,i.jsx)(n.p,{children:"A dictionary that maintains the order of items as they are added."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from collections import OrderedDict\nd = OrderedDict([('a', 1), ('b', 2)])\nd['c'] = 3\nprint(d)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"OrderedDict([('a', 1), ('b', 2), ('c', 3)])\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"functools-module",children:[(0,i.jsx)(n.code,{children:"functools"})," Module"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"functools"})," module provides higher-order functions that act on or return other functions. It includes tools for memoization, function composition, and partial function application."]}),"\n",(0,i.jsxs)(n.h3,{id:"partialfunc-args-kwargs",children:[(0,i.jsx)(n.code,{children:"partial(func, \\*args, **kwargs)"}),"*"]}),"\n",(0,i.jsx)(n.p,{children:"Creates a new function with some arguments pre-filled."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from functools import partial\ndef multiply(a, b):\n    return a * b\ndouble = partial(multiply, 2)\nprint(double(5))  # 2 * 5\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"10\n"})}),"\n",(0,i.jsx)(n.h3,{id:"lru_cachemaxsize128",children:(0,i.jsx)(n.code,{children:"lru_cache(maxsize=128)"})}),"\n",(0,i.jsx)(n.p,{children:"A decorator that caches the results of function calls to speed up repeated calls with the same arguments."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from functools import lru_cache\n@lru_cache(maxsize=2)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(5))  # 5\nprint(fibonacci(6))  # 8\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"5\n8\n"})}),"\n",(0,i.jsx)(n.h3,{id:"reducefunction-iterable-initializernone",children:(0,i.jsx)(n.code,{children:"reduce(function, iterable, initializer=None)"})}),"\n",(0,i.jsx)(n.p,{children:"Applies a binary function to a sequence of elements, reducing the sequence to a single value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from functools import reduce\nnums = [1, 2, 3, 4]\nresult = reduce(lambda x, y: x * y, nums)\nprint(result)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"24\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"os-module",children:[(0,i.jsx)(n.code,{children:"os"})," Module"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"os"})," module provides a way to interact with the operating system, enabling tasks like file manipulation, directory traversal, and process management."]}),"\n",(0,i.jsx)(n.h3,{id:"osgetcwd",children:(0,i.jsx)(n.code,{children:"os.getcwd()"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the current working directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import os\nprint(os.getcwd())\n"})}),"\n",(0,i.jsx)(n.h3,{id:"oslistdirpath",children:(0,i.jsx)(n.code,{children:"os.listdir(path)"})}),"\n",(0,i.jsx)(n.p,{children:"Lists the contents of a directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import os\nprint(os.listdir('.'))  # Lists files in the current directory\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ospathjoinpath-paths",children:(0,i.jsx)(n.code,{children:"os.path.join(path, *paths)"})}),"\n",(0,i.jsx)(n.p,{children:"Joins one or more path components."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import os\npath = os.path.join('folder', 'subfolder', 'file.txt')\nprint(path)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"folder/subfolder/file.txt\n"})}),"\n",(0,i.jsx)(n.h3,{id:"osmkdirpath",children:(0,i.jsx)(n.code,{children:"os.mkdir(path)"})}),"\n",(0,i.jsx)(n.p,{children:"Creates a directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import os\nos.mkdir('new_folder')\n"})}),"\n",(0,i.jsx)(n.h3,{id:"osremovepath",children:(0,i.jsx)(n.code,{children:"os.remove(path)"})}),"\n",(0,i.jsx)(n.p,{children:"Removes a file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import os\nos.remove('file.txt')\n"})}),"\n",(0,i.jsx)(n.h3,{id:"osenviron",children:(0,i.jsx)(n.code,{children:"os.environ"})}),"\n",(0,i.jsx)(n.p,{children:"Provides access to environment variables."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import os\nprint(os.environ.get('HOME'))  # Prints the user's home directory path\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"heapq-module",children:[(0,i.jsx)(n.code,{children:"heapq"})," Module"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"heapq"})," module in Python provides an implementation of the ",(0,i.jsx)(n.strong,{children:"heap queue algorithm"}),", also known as the ",(0,i.jsx)(n.strong,{children:"priority queue algorithm"}),". Heaps are binary trees that satisfy the heap property: in a ",(0,i.jsx)(n.strong,{children:"min-heap"}),", for any given node, the value of the parent is less than or equal to the values of its children, and in a ",(0,i.jsx)(n.strong,{children:"max-heap"}),", the value of the parent is greater than or equal to the values of its children. Python\u2019s ",(0,i.jsx)(n.code,{children:"heapq"})," module implements a ",(0,i.jsx)(n.strong,{children:"min-heap"})," by default, where the smallest element is always at the root."]}),"\n",(0,i.jsx)(n.h3,{id:"heapifyiterable",children:(0,i.jsx)(n.code,{children:"heapify(iterable)"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"heapify()"})," function transforms a list into a heap, in-place, in linear time. It takes an iterable and rearranges the elements so that they satisfy the heap property."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import heapq\nnums = [10, 20, 15, 30, 40]\nheapq.heapify(nums)\nprint(nums)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[10, 20, 15, 30, 40]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After applying ",(0,i.jsx)(n.code,{children:"heapify()"}),", the list ",(0,i.jsx)(n.code,{children:"nums"})," is transformed into a heap where the smallest element is at the root."]}),"\n",(0,i.jsx)(n.h3,{id:"heappushheap-item",children:(0,i.jsx)(n.code,{children:"heappush(heap, item)"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"heappush()"})," function pushes an element onto the heap, maintaining the heap property. The element is inserted in the correct position, so that the heap property is still valid after the insertion."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import heapq\nheap = [10, 20, 15]\nheapq.heappush(heap, 5)\nprint(heap)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[5, 10, 15, 20]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The element ",(0,i.jsx)(n.code,{children:"5"})," is inserted into the heap and the heap property is maintained."]}),"\n",(0,i.jsx)(n.h3,{id:"heappopheap",children:(0,i.jsx)(n.code,{children:"heappop(heap)"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"heappop()"})," function removes and returns the smallest element from the heap, maintaining the heap property. After the smallest element is removed, the heap is restructured to ensure the next smallest element is at the root."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import heapq\nheap = [5, 10, 15, 20]\nsmallest = heapq.heappop(heap)\nprint(smallest)  # 5\nprint(heap)      # [10, 20, 15]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"5\n[10, 20, 15]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The smallest element ",(0,i.jsx)(n.code,{children:"5"})," is removed, and the heap property is maintained."]}),"\n",(0,i.jsx)(n.h3,{id:"heappushpopheap-item",children:(0,i.jsx)(n.code,{children:"heappushpop(heap, item)"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"heappushpop()"})," function first pushes an element onto the heap and then pops and returns the smallest element. This operation is more efficient than doing a separate ",(0,i.jsx)(n.code,{children:"heappush()"})," followed by a ",(0,i.jsx)(n.code,{children:"heappop()"}),", because it only requires one heap rearrangement."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import heapq\nheap = [10, 20, 30]\nresult = heapq.heappushpop(heap, 15)\nprint(result)  # 10\nprint(heap)    # [15, 20, 30]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"10\n[15, 20, 30]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The element ",(0,i.jsx)(n.code,{children:"15"})," is added to the heap, and the smallest element (",(0,i.jsx)(n.code,{children:"10"}),") is popped and returned."]}),"\n",(0,i.jsx)(n.h3,{id:"heapreplaceheap-item",children:(0,i.jsx)(n.code,{children:"heapreplace(heap, item)"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"heapreplace()"})," function pops the smallest element from the heap and then pushes a new element onto the heap. This is similar to performing a ",(0,i.jsx)(n.code,{children:"heappop()"})," followed by a ",(0,i.jsx)(n.code,{children:"heappush()"}),", but it's more efficient as it only requires one rearrangement of the heap."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import heapq\nheap = [10, 20, 30]\nresult = heapq.heapreplace(heap, 5)\nprint(result)  # 10\nprint(heap)    # [5, 20, 30]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"10\n[5, 20, 30]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The smallest element (",(0,i.jsx)(n.code,{children:"10"}),") is removed, and the new element (",(0,i.jsx)(n.code,{children:"5"}),") is added to the heap."]}),"\n",(0,i.jsx)(n.h3,{id:"nlargestn-iterable-keynone",children:(0,i.jsx)(n.code,{children:"nlargest(n, iterable, key=None)"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"nlargest()"})," function returns the ",(0,i.jsx)(n.code,{children:"n"})," largest elements from an iterable, based on the natural order or a specified ",(0,i.jsx)(n.code,{children:"key"})," function. This function uses a heap internally for efficient selection."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import heapq\nnums = [10, 20, 15, 30, 5]\nlargest = heapq.nlargest(3, nums)\nprint(largest)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[30, 20, 15]\n"})}),"\n",(0,i.jsx)(n.p,{children:"The three largest numbers from the list are returned."}),"\n",(0,i.jsx)(n.h3,{id:"nsmallestn-iterable-keynone",children:(0,i.jsx)(n.code,{children:"nsmallest(n, iterable, key=None)"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"nsmallest()"})," function returns the ",(0,i.jsx)(n.code,{children:"n"})," smallest elements from an iterable, based on the natural order or a specified ",(0,i.jsx)(n.code,{children:"key"})," function. This function also uses a heap internally."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import heapq\nnums = [10, 20, 15, 30, 5]\nsmallest = heapq.nsmallest(3, nums)\nprint(smallest)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[5, 10, 15]\n"})}),"\n",(0,i.jsx)(n.p,{children:"The three smallest numbers from the list are returned."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);