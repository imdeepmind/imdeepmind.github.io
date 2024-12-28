"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[648],{1980:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"programming-languages/python/multiprocessing","title":"Multithreading, Multiprocessing, and Asyncio","description":"Multithreading and Multiprocessing","source":"@site/docs/programming-languages/python/multiprocessing.md","sourceDirName":"programming-languages/python","slug":"/programming-languages/python/multiprocessing","permalink":"/docs/programming-languages/python/multiprocessing","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/programming-languages/python/multiprocessing.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735387675000,"sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"File Handling","permalink":"/docs/programming-languages/python/file-handling"},"next":{"title":"Decorators","permalink":"/docs/programming-languages/python/decorator"}}');var i=s(4848),t=s(8453);const a={sidebar_position:13},o="Multithreading, Multiprocessing, and Asyncio",l={},d=[{value:"Multithreading and Multiprocessing",id:"multithreading-and-multiprocessing",level:2},{value:"Threading Basics",id:"threading-basics",level:3},{value:"Example:",id:"example",level:4},{value:"Multiprocessing Module",id:"multiprocessing-module",level:3},{value:"Example:",id:"example-1",level:4},{value:"When to Use Each:",id:"when-to-use-each",level:3},{value:"Asyncio",id:"asyncio",level:2},{value:"Understanding Asynchronous Programming",id:"understanding-asynchronous-programming",level:3},{value:"Async and Await",id:"async-and-await",level:3},{value:"Example:",id:"example-2",level:4},{value:"Using Asyncio for Concurrent Tasks",id:"using-asyncio-for-concurrent-tasks",level:3},{value:"Example:",id:"example-3",level:4},{value:"When to Use Asyncio:",id:"when-to-use-asyncio",level:3},{value:"Key Differences Between Threading, Multiprocessing, and Asyncio",id:"key-differences-between-threading-multiprocessing-and-asyncio",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"multithreading-multiprocessing-and-asyncio",children:"Multithreading, Multiprocessing, and Asyncio"})}),"\n",(0,i.jsx)(n.h2,{id:"multithreading-and-multiprocessing",children:"Multithreading and Multiprocessing"}),"\n",(0,i.jsxs)(n.p,{children:["Python offers two popular approaches for concurrent programming: ",(0,i.jsx)(n.strong,{children:"Multithreading"})," and ",(0,i.jsx)(n.strong,{children:"Multiprocessing"}),". Both are useful for improving the performance of certain types of programs, but they serve different purposes. Understanding when and how to use them can help improve the efficiency of Our code."]}),"\n",(0,i.jsx)(n.h3,{id:"threading-basics",children:"Threading Basics"}),"\n",(0,i.jsx)(n.p,{children:"Threading allows We to run multiple threads (smaller units of a process) concurrently. This is ideal for I/O-bound tasks, where the program spends time waiting for external resources like file I/O, network operations, or user input."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Shared Memory"}),": All threads in a process share the same memory space, which makes data sharing easier but also introduces potential risks related to data integrity (e.g., race conditions)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Global Interpreter Lock (GIL)"}),": Python\u2019s GIL prevents multiple threads from executing Python bytecode at the same time. This limits threading to I/O-bound tasks. For CPU-bound tasks, threads are not as efficient."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Threading Module"}),": Python\u2019s ",(0,i.jsx)(n.code,{children:"threading"})," module provides a way to create and manage threads."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import threading\nimport time\n\ndef print_numbers():\n    for i in range(5):\n        print(i)\n        time.sleep(1)\n\n# Create two threads\nthread1 = threading.Thread(target=print_numbers)\nthread2 = threading.Thread(target=print_numbers)\n\n# Start the threads\nthread1.start()\nthread2.start()\n\n# Wait for both threads to finish\nthread1.join()\nthread2.join()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"multiprocessing-module",children:"Multiprocessing Module"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"multiprocessing module"})," is used when We need to parallelize CPU-bound tasks. Unlike threads, processes are independent and do not share memory. Each process runs in its own memory space, which allows true parallel execution, bypassing the GIL."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Separate Memory Space"}),": Processes do not share memory, so there is no risk of data corruption or race conditions. However, inter-process communication (IPC) is necessary to exchange data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"True Parallelism"}),": Processes can run on different CPU cores, allowing true parallelism for CPU-bound tasks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multiprocessing Module"}),": The ",(0,i.jsx)(n.code,{children:"multiprocessing"})," module in Python provides the tools to create and manage processes."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import multiprocessing\nimport time\n\ndef print_numbers():\n    for i in range(5):\n        print(i)\n        time.sleep(1)\n\nif __name__ == "__main__":\n    # Create two processes\n    process1 = multiprocessing.Process(target=print_numbers)\n    process2 = multiprocessing.Process(target=print_numbers)\n\n    # Start the processes\n    process1.start()\n    process2.start()\n\n    # Wait for both processes to finish\n    process1.join()\n    process2.join()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"when-to-use-each",children:"When to Use Each:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Threading"}),": Best for I/O-bound tasks where the program spends a lot of time waiting for external resources (e.g., web scraping, file I/O, or network communication)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multiprocessing"}),": Ideal for CPU-bound tasks, such as heavy computation or data processing tasks, where We want to take full advantage of multiple CPU cores."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"asyncio",children:"Asyncio"}),"\n",(0,i.jsx)(n.h3,{id:"understanding-asynchronous-programming",children:"Understanding Asynchronous Programming"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Asynchronous programming"})," allows We to write code that performs tasks concurrently, without blocking the main thread. Instead of creating new threads or processes, async programming runs tasks within a single thread, switching between tasks when one is waiting for I/O or other operations."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"asyncio"})," module in Python provides a framework for writing asynchronous code. It uses the ",(0,i.jsx)(n.code,{children:"async"})," and ",(0,i.jsx)(n.code,{children:"await"})," keywords to define and run asynchronous functions."]}),"\n",(0,i.jsx)(n.h3,{id:"async-and-await",children:"Async and Await"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"async"}),": Defines a function as asynchronous, indicating it will be used with ",(0,i.jsx)(n.code,{children:"await"})," and will not block the program."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"await"}),": Used to call another asynchronous function. It allows the program to wait for the result of a function without blocking the entire thread."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import asyncio\n\nasync def print_numbers():\n    for i in range(5):\n        print(i)\n        await asyncio.sleep(1)  # Simulate a non-blocking I/O operation\n\n# Run the async function\nasync def main():\n    await asyncio.gather(print_numbers(), print_numbers())\n\n# Start the event loop\nasyncio.run(main())\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the example above:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"async def"})," is used to define asynchronous functions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"await asyncio.sleep(1)"})," is a non-blocking sleep, simulating an I/O-bound operation."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-asyncio-for-concurrent-tasks",children:"Using Asyncio for Concurrent Tasks"}),"\n",(0,i.jsxs)(n.p,{children:["The power of ",(0,i.jsx)(n.code,{children:"asyncio"})," lies in running concurrent tasks without creating multiple threads or processes. The event loop handles scheduling and executing asynchronous tasks, switching between tasks when necessary."]}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import asyncio\n\nasync def fetch_data(url):\n    print(f\"Fetching {url}\")\n    await asyncio.sleep(2)  # Simulating an I/O operation like downloading data\n    print(f\"Finished fetching {url}\")\n\nasync def main():\n    urls = ['http://example.com', 'http://example.org', 'http://example.net']\n    tasks = [fetch_data(url) for url in urls]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fetch_data"})," is an asynchronous function that simulates an I/O-bound task (e.g., downloading data from a URL)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"asyncio.gather()"})," is used to run multiple asynchronous functions concurrently."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"when-to-use-asyncio",children:"When to Use Asyncio:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Asyncio"})," is particularly suited for I/O-bound operations where the program is waiting on external resources (e.g., network requests, database queries)."]}),"\n",(0,i.jsx)(n.li,{children:"It is best used when tasks are relatively lightweight and involve waiting for I/O, such as handling multiple HTTP requests, web scraping, or managing multiple database connections."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"key-differences-between-threading-multiprocessing-and-asyncio",children:"Key Differences Between Threading, Multiprocessing, and Asyncio"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Feature"}),(0,i.jsx)(n.th,{children:"Threading"}),(0,i.jsx)(n.th,{children:"Multiprocessing"}),(0,i.jsx)(n.th,{children:"Asyncio"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Use Case"})}),(0,i.jsx)(n.td,{children:"I/O-bound tasks"}),(0,i.jsx)(n.td,{children:"CPU-bound tasks"}),(0,i.jsx)(n.td,{children:"I/O-bound tasks"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Concurrency Type"})}),(0,i.jsx)(n.td,{children:"Concurrent threads sharing memory"}),(0,i.jsx)(n.td,{children:"Independent processes with separate memory"}),(0,i.jsx)(n.td,{children:"Cooperative multitasking within a single thread"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"GIL"})}),(0,i.jsx)(n.td,{children:"Affected by the Global Interpreter Lock (GIL)"}),(0,i.jsx)(n.td,{children:"No GIL limitation (true parallelism)"}),(0,i.jsx)(n.td,{children:"No GIL limitation (async context)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Overhead"})}),(0,i.jsx)(n.td,{children:"Lower overhead, more efficient for I/O"}),(0,i.jsx)(n.td,{children:"Higher overhead due to process creation"}),(0,i.jsx)(n.td,{children:"Minimal overhead"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Memory"})}),(0,i.jsx)(n.td,{children:"Shared memory between threads"}),(0,i.jsx)(n.td,{children:"Separate memory for each process"}),(0,i.jsx)(n.td,{children:"Single-threaded, no shared memory"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Best For"})}),(0,i.jsx)(n.td,{children:"Web scraping, file I/O, network calls"}),(0,i.jsx)(n.td,{children:"Data processing, heavy computations"}),(0,i.jsx)(n.td,{children:"Handling many concurrent I/O-bound tasks"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(6540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);