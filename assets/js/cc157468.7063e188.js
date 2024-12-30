"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[4444],{643:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"frameworks-libraries/react/components","title":"Component Composition and Design","description":"Component Trees: Structuring and Nesting Components","source":"@site/docs/frameworks-libraries/react/components.md","sourceDirName":"frameworks-libraries/react","slug":"/frameworks-libraries/react/components","permalink":"/docs/frameworks-libraries/react/components","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/frameworks-libraries/react/components.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735581142000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"React Hooks","permalink":"/docs/frameworks-libraries/react/hooks"},"next":{"title":"State Management","permalink":"/docs/frameworks-libraries/react/state-management"}}');var r=s(4848),i=s(8453);const o={sidebar_position:4},l="Component Composition and Design",a={},c=[{value:"Component Trees: Structuring and Nesting Components",id:"component-trees-structuring-and-nesting-components",level:2},{value:"Composition vs. Inheritance",id:"composition-vs-inheritance",level:2},{value:"Controlled vs. Uncontrolled Components",id:"controlled-vs-uncontrolled-components",level:2},{value:"Controlled Components",id:"controlled-components",level:3},{value:"Uncontrolled Components",id:"uncontrolled-components",level:3},{value:"Fragments: Returning Multiple Elements Without Extra DOM Nodes",id:"fragments-returning-multiple-elements-without-extra-dom-nodes",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"component-composition-and-design",children:"Component Composition and Design"})}),"\n",(0,r.jsx)(e.h2,{id:"component-trees-structuring-and-nesting-components",children:"Component Trees: Structuring and Nesting Components"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Component Trees"})," represent the hierarchical structure of React components. They help in visualizing how data flows and components are related."]}),"\n",(0,r.jsxs)(e.li,{children:["Key considerations when structuring components:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Single Responsibility Principle (SRP)"}),": Each component should handle a single part of the UI or functionality."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Reusability"}),": Design components to be reusable where applicable (e.g., Button, Input)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Separation of Concerns"}),": Divide the application into presentational components (focused on UI) and container components (managing state and logic)."]}),"\n",(0,r.jsxs)(e.li,{children:["Example:","\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"const App = () => (\n  <div>\n    <Header />\n    <Main>\n      <Sidebar />\n      <Content />\n    </Main>\n    <Footer />\n  </div>\n);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Best Practices"}),":","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Keep components small and focused."}),"\n",(0,r.jsx)(e.li,{children:"Use meaningful names that reflect their purpose."}),"\n",(0,r.jsx)(e.li,{children:"Maintain a clear hierarchy to improve readability and debugging."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"composition-vs-inheritance",children:"Composition vs. Inheritance"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Composition"})," is the preferred approach in React. It involves combining components to build more complex UIs."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsxs)(e.strong,{children:[(0,r.jsx)(e.code,{children:"children"})," Props"]}),": Pass components or elements as children to other components."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'const Card = ({ children }: { children: React.ReactNode }) => (\n  <div className="card">{children}</div>\n);\n\nconst App = () => (\n  <Card>\n    <h1>Title</h1>\n    <p>Content inside the card.</p>\n  </Card>\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Render Props"}),": Pass a function as a prop to dynamically determine what to render."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'const DataFetcher = ({\n  render,\n}: {\n  render: (data: string) => JSX.Element;\n}) => {\n  const data = "Fetched Data";\n  return render(data);\n};\n\nconst App = () => <DataFetcher render={(data) => <div>{data}</div>} />;\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Higher-Order Components (HOCs)"}),": A function that takes a component and returns a new component."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'const withLogger = (Component: React.ComponentType) => {\n  return (props: any) => {\n    console.log("Rendering", Component.name);\n    return <Component {...props} />;\n  };\n};\n\nconst Hello = () => <h1>Hello</h1>;\nconst HelloWithLogger = withLogger(Hello);\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Inheritance"})," is rarely used in React because it can make components tightly coupled and harder to maintain."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"controlled-vs-uncontrolled-components",children:"Controlled vs. Uncontrolled Components"}),"\n",(0,r.jsx)(e.h3,{id:"controlled-components",children:"Controlled Components"}),"\n",(0,r.jsxs)(e.p,{children:["React controls the form elements' state. The value is stored in the component's state and updated via ",(0,r.jsx)(e.code,{children:"onChange"})," handlers."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Use Case"}),": When you need to validate, manipulate, or monitor input values."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'const ControlledInput = () => {\n  const [value, setValue] = React.useState("");\n\n  return (\n    <input\n      value={value}\n      onChange={(e) => setValue(e.target.value)}\n      placeholder="Type here"\n    />\n  );\n};\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"uncontrolled-components",children:"Uncontrolled Components"}),"\n",(0,r.jsx)(e.p,{children:"The DOM itself maintains the form elements' state, and you access values using refs."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Use Case"}),": When minimal interaction with the input is needed (e.g., file uploads)."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Example:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'const UncontrolledInput = () => {\n  const inputRef = React.useRef<HTMLInputElement>(null);\n\n  const handleSubmit = () => {\n    alert(inputRef.current?.value);\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} placeholder="Type here" />\n      <button onClick={handleSubmit}>Submit</button>\n    </div>\n  );\n};\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Key Differences"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Controlled components provide better control and enable real-time validation."}),"\n",(0,r.jsx)(e.li,{children:"Uncontrolled components are simpler and faster to set up."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"fragments-returning-multiple-elements-without-extra-dom-nodes",children:"Fragments: Returning Multiple Elements Without Extra DOM Nodes"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"What are Fragments?"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Fragments allow you to return multiple elements from a component without adding an extra wrapper node in the DOM."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Why Use Fragments?"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["To avoid unnecessary ",(0,r.jsx)(e.code,{children:"<div>"}),' wrappers (commonly referred to as "div soup").']}),"\n",(0,r.jsx)(e.li,{children:"To keep the DOM cleaner and improve performance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Syntax"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Short syntax: ",(0,r.jsx)(e.code,{children:"<>...</>"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["Long syntax: ",(0,r.jsx)(e.code,{children:"<React.Fragment>...</React.Fragment>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"const FragmentExample = () => (\n  <>\n    <h1>Title</h1>\n    <p>This is a paragraph.</p>\n  </>\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Key Benefits"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Reduces unnecessary nodes in the DOM."}),"\n",(0,r.jsx)(e.li,{children:"Improves performance in scenarios involving large component trees."}),"\n",(0,r.jsx)(e.li,{children:"Enables better styling and layout management without excessive wrappers."}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>l});var t=s(6540);const r={},i=t.createContext(r);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);