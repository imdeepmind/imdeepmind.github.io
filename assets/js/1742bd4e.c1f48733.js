"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[5866],{88760:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"frameworks-libraries/react/under-the-hood","title":"React Under the Hood","description":"React is a JavaScript library that simplifies the process of building user interfaces by using a declarative, component-based approach. Under the hood, React uses a Virtual DOM and a process called Reconciliation to efficiently update and render the UI. This internal mechanism is key to React\u2019s performance and usability.","source":"@site/docs/frameworks-libraries/react/under-the-hood.md","sourceDirName":"frameworks-libraries/react","slug":"/frameworks-libraries/react/under-the-hood","permalink":"/docs/frameworks-libraries/react/under-the-hood","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/frameworks-libraries/react/under-the-hood.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735711473000,"sidebarPosition":16,"frontMatter":{"sidebar_position":16},"sidebar":"tutorialSidebar","previous":{"title":"Error Handling and Error Boundaries","permalink":"/docs/frameworks-libraries/react/error-handling"},"next":{"title":"Introduction","permalink":"/docs/frameworks-libraries/django/introduction"}}');var s=i(74848),r=i(28453);const a={sidebar_position:16},l="React Under the Hood",c={},o=[{value:"React: Declarative and Component-Based",id:"react-declarative-and-component-based",level:2},{value:"Declarative Approach",id:"declarative-approach",level:3},{value:"Component-Based Architecture",id:"component-based-architecture",level:3},{value:"Virtual DOM: What and Why?",id:"virtual-dom-what-and-why",level:2},{value:"Key Advantages",id:"key-advantages",level:3},{value:"How React Works Internally",id:"how-react-works-internally",level:2},{value:"Render Phase (Virtual DOM Creation)",id:"render-phase-virtual-dom-creation",level:3},{value:"Reconciliation Phase (Diffing Algorithm)",id:"reconciliation-phase-diffing-algorithm",level:3},{value:"Commit Phase (DOM Updates)",id:"commit-phase-dom-updates",level:3},{value:"Reconciliation Algorithm: Core of React&#39;s Efficiency",id:"reconciliation-algorithm-core-of-reacts-efficiency",level:2},{value:"Goals of Reconciliation",id:"goals-of-reconciliation",level:3},{value:"Steps in the Reconciliation Algorithm",id:"steps-in-the-reconciliation-algorithm",level:3},{value:"Optimizations in the Reconciliation Algorithm",id:"optimizations-in-the-reconciliation-algorithm",level:3},{value:"How React Updates the DOM",id:"how-react-updates-the-dom",level:2},{value:"Process",id:"process",level:3},{value:"Example",id:"example",level:3},{value:"Fiber Architecture: Enhancing Reconciliation",id:"fiber-architecture-enhancing-reconciliation",level:2},{value:"Advantages of React\u2019s Reconciliation Algorithm",id:"advantages-of-reacts-reconciliation-algorithm",level:2},{value:"Virtual DOM vs Real DOM",id:"virtual-dom-vs-real-dom",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"react-under-the-hood",children:"React Under the Hood"})}),"\n",(0,s.jsxs)(n.p,{children:["React is a ",(0,s.jsx)(n.strong,{children:"JavaScript library"})," that simplifies the process of building user interfaces by using a declarative, component-based approach. Under the hood, React uses a ",(0,s.jsx)(n.strong,{children:"Virtual DOM"})," and a process called ",(0,s.jsx)(n.strong,{children:"Reconciliation"})," to efficiently update and render the UI. This internal mechanism is key to React\u2019s performance and usability."]}),"\n",(0,s.jsx)(n.h2,{id:"react-declarative-and-component-based",children:"React: Declarative and Component-Based"}),"\n",(0,s.jsx)(n.h3,{id:"declarative-approach",children:"Declarative Approach"}),"\n",(0,s.jsxs)(n.p,{children:["React allows developers to define ",(0,s.jsx)(n.strong,{children:"what the UI should look like"})," at any given time, and React internally handles the updates to make the UI match the desired state. This eliminates the need for manually updating the DOM."]}),"\n",(0,s.jsx)(n.h3,{id:"component-based-architecture",children:"Component-Based Architecture"}),"\n",(0,s.jsxs)(n.p,{children:["React applications are composed of small, reusable, and isolated ",(0,s.jsx)(n.strong,{children:"components"}),", which manage their state and props. These components enable scalable application development by dividing the UI into logical building blocks."]}),"\n",(0,s.jsx)(n.h2,{id:"virtual-dom-what-and-why",children:"Virtual DOM: What and Why?"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Virtual DOM"})," is a lightweight, in-memory representation of the ",(0,s.jsx)(n.strong,{children:"real DOM"}),". It is essentially a JavaScript object that mimics the structure of the DOM but does not directly interact with the browser."]}),"\n",(0,s.jsx)(n.h3,{id:"key-advantages",children:"Key Advantages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficient Updates"}),": By updating only the Virtual DOM and synchronizing it with the real DOM, React avoids costly direct DOM manipulations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance Boost"}),": React calculates the minimal set of changes (patches) to update the real DOM efficiently."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cross-Platform"}),": React can render components to the DOM, mobile platforms (via React Native), and even servers, thanks to its abstraction layer."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-react-works-internally",children:"How React Works Internally"}),"\n",(0,s.jsx)(n.p,{children:"React\u2019s internal workflow can be divided into three main phases:"}),"\n",(0,s.jsx)(n.h3,{id:"render-phase-virtual-dom-creation",children:"Render Phase (Virtual DOM Creation)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["When a React component renders for the first time or updates due to state/prop changes:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["React calls the component's ",(0,s.jsx)(n.code,{children:"render()"})," method (or the function component) to produce JSX."]}),"\n",(0,s.jsxs)(n.li,{children:["React converts the JSX into a ",(0,s.jsx)(n.strong,{children:"Virtual DOM tree"}),", which is a lightweight representation of the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reconciliation-phase-diffing-algorithm",children:"Reconciliation Phase (Diffing Algorithm)"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["React compares the new Virtual DOM tree with the previous one (if it exists) using a ",(0,s.jsx)(n.strong,{children:"Reconciliation Algorithm"})," to identify the minimal set of changes (also called ",(0,s.jsx)(n.strong,{children:"diffs"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"commit-phase-dom-updates",children:"Commit Phase (DOM Updates)"}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"The calculated changes (diffs) are batched and applied to the real DOM in an efficient manner to bring it in sync with the updated Virtual DOM."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reconciliation-algorithm-core-of-reacts-efficiency",children:"Reconciliation Algorithm: Core of React's Efficiency"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Reconciliation Algorithm"})," is the process React uses to determine how to update the real DOM when the Virtual DOM changes. It ensures that updates are performed efficiently by minimizing unnecessary DOM manipulations."]}),"\n",(0,s.jsx)(n.h3,{id:"goals-of-reconciliation",children:"Goals of Reconciliation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Find changes between the new and old Virtual DOM trees."}),"\n",(0,s.jsx)(n.li,{children:"Generate the minimal set of operations to update the real DOM."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"steps-in-the-reconciliation-algorithm",children:"Steps in the Reconciliation Algorithm"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tree Diffing"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["React compares the new Virtual DOM tree with the previous one ",(0,s.jsx)(n.strong,{children:"node by node"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If the root elements are of different types, React assumes the entire subtree has changed and replaces it completely."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<div>Old</div>  \u2192  <span>New</span>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["React will destroy the ",(0,s.jsx)(n.code,{children:"<div>"})," and create a new ",(0,s.jsx)(n.code,{children:"<span>"})," instead of reusing the old node."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Component Diffing"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the root elements are of the same type, React will keep the existing DOM node and compare their attributes, children, and content."}),"\n",(0,s.jsxs)(n.li,{children:["For components:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React checks if the component type has changed."}),"\n",(0,s.jsx)(n.li,{children:"If the component type is the same, React reuses the component instance and updates its props/state."}),"\n",(0,s.jsx)(n.li,{children:"If the component type is different, React destroys the old instance and creates a new one."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"List Diffing"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Lists are optimized using ",(0,s.jsx)(n.strong,{children:"keys"}),", which act as unique identifiers for each list item."]}),"\n",(0,s.jsx)(n.li,{children:"When React encounters a list, it uses keys to identify which items were added, removed, or reordered."}),"\n",(0,s.jsx)(n.li,{children:"Without keys, React assumes the entire list has changed and re-renders it."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example of list with keys:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<ul>\n  {items.map((item) => (\n    <li key={item.id}>{item.name}</li>\n  ))}\n</ul>\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"optimizations-in-the-reconciliation-algorithm",children:"Optimizations in the Reconciliation Algorithm"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Shallow Comparison"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["React compares elements by their ",(0,s.jsx)(n.strong,{children:"type"})," and ",(0,s.jsx)(n.strong,{children:"key"}),". If the type or key changes, React assumes the element has changed entirely."]}),"\n",(0,s.jsx)(n.li,{children:"If the type is the same, React compares only the attributes and children of the element."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Efficient Tree Updates"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React skips unnecessary re-renders by reusing unchanged components and DOM elements."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Batching Updates"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React groups multiple state updates into a single batch to avoid redundant rendering."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Key Usage for Lists"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["By using ",(0,s.jsx)(n.code,{children:"key"})," attributes in lists, React identifies which elements in a list have changed, improving the performance of list updates."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-react-updates-the-dom",children:"How React Updates the DOM"}),"\n",(0,s.jsx)(n.h3,{id:"process",children:"Process"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"React creates the new Virtual DOM based on the updated state or props."}),"\n",(0,s.jsx)(n.li,{children:"It compares the new Virtual DOM tree with the old one using the reconciliation algorithm."}),"\n",(0,s.jsx)(n.li,{children:"React calculates the minimal set of changes (diffs)."}),"\n",(0,s.jsx)(n.li,{children:"The changes are applied to the real DOM, avoiding unnecessary re-renders."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function Counter() {\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When the button is clicked, React:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Updates the Virtual DOM for ",(0,s.jsx)(n.code,{children:"<p>Count: {count}</p>"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Compares the new Virtual DOM with the old one."}),"\n",(0,s.jsxs)(n.li,{children:["Identifies that only the text inside ",(0,s.jsx)(n.code,{children:"<p>"})," has changed."]}),"\n",(0,s.jsx)(n.li,{children:"Updates only the text node in the real DOM, leaving the rest unchanged."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fiber-architecture-enhancing-reconciliation",children:"Fiber Architecture: Enhancing Reconciliation"}),"\n",(0,s.jsxs)(n.p,{children:["React introduced the ",(0,s.jsx)(n.strong,{children:"Fiber Architecture"})," to improve performance by splitting rendering work into smaller chunks. This enables React to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Interrupt rendering tasks and prioritize more important ones (e.g., user interactions)."}),"\n",(0,s.jsx)(n.li,{children:"Resume rendering tasks later, ensuring a smooth user experience."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Fiber enhances reconciliation by allowing ",(0,s.jsx)(n.strong,{children:"incremental rendering"})," and prioritizing tasks based on urgency."]}),"\n",(0,s.jsx)(n.h2,{id:"advantages-of-reacts-reconciliation-algorithm",children:"Advantages of React\u2019s Reconciliation Algorithm"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Performance Optimization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Updates are batched, and only the minimal set of changes is applied to the DOM."}),"\n",(0,s.jsx)(n.li,{children:"React avoids unnecessary updates by comparing Virtual DOM trees."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Declarative UI"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Developers specify what the UI should look like, and React handles the complex reconciliation and updates behind the scenes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cross-Platform Consistency"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The reconciliation process works across various rendering targets, such as the web (real DOM), mobile (React Native), and servers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"virtual-dom-vs-real-dom",children:"Virtual DOM vs Real DOM"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Aspect"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Virtual DOM"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Real DOM"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Performance"})}),(0,s.jsx)(n.td,{children:"Fast updates via diffing and batching"}),(0,s.jsx)(n.td,{children:"Slower updates due to direct manipulation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Ease of Use"})}),(0,s.jsx)(n.td,{children:"Abstracted from developers"}),(0,s.jsx)(n.td,{children:"Requires manual updates"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Reusability"})}),(0,s.jsx)(n.td,{children:"Efficient reuse of unchanged nodes"}),(0,s.jsx)(n.td,{children:"Updates the entire tree"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Rendering"})}),(0,s.jsx)(n.td,{children:"Optimized and batched updates"}),(0,s.jsx)(n.td,{children:"Immediate and synchronous updates"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);