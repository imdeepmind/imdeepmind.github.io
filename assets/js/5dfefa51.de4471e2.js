"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[8314],{79717:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"networking/protocols/rest","title":"RESTful","description":"REST (Representational State Transfer) is an architectural style for designing networked applications. It is based on a set of constraints and principles that make it suitable for creating scalable, reliable, and stateless web services. RESTful APIs (Application Programming Interfaces) are those that conform to the REST principles.","source":"@site/docs/networking/protocols/rest.md","sourceDirName":"networking/protocols","slug":"/networking/protocols/rest","permalink":"/docs/networking/protocols/rest","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/networking/protocols/rest.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736951785000,"sidebarPosition":17,"frontMatter":{"sidebar_position":17},"sidebar":"tutorialSidebar","previous":{"title":"MQTT and AMQP","permalink":"/docs/networking/protocols/mqtt-amqp"},"next":{"title":"Request-Response","permalink":"/docs/networking/communication-design-patterns/request-response"}}');var t=n(74848),i=n(28453);const o={sidebar_position:17},l="RESTful",a={},c=[{value:"Core Principles of REST",id:"core-principles-of-rest",level:2},{value:"HTTP Methods in RESTful APIs",id:"http-methods-in-restful-apis",level:2},{value:"Resources in RESTful API",id:"resources-in-restful-api",level:2},{value:"Response Format",id:"response-format",level:2},{value:"RESTful URL Design",id:"restful-url-design",level:2},{value:"RESTful API Benefits",id:"restful-api-benefits",level:2},{value:"RESTful API Example",id:"restful-api-example",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"restful",children:"RESTful"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"REST (Representational State Transfer)"})," is an architectural style for designing networked applications. It is based on a set of constraints and principles that make it suitable for creating scalable, reliable, and stateless web services. RESTful APIs (Application Programming Interfaces) are those that conform to the REST principles."]}),"\n",(0,t.jsx)(s.p,{children:"The RESTful approach to building web services is commonly used in web applications because it leverages the stateless nature of HTTP and is simple to implement and use. RESTful APIs are typically used for creating web services that interact with databases or other services in a client-server model."}),"\n",(0,t.jsx)(s.h2,{id:"core-principles-of-rest",children:"Core Principles of REST"}),"\n",(0,t.jsx)(s.p,{children:"REST is not a protocol or a standard; rather, it is an architectural style that promotes a set of constraints. These constraints are as follows:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Stateless"}),": Each request from a client to a server must contain all the necessary information to understand and process the request. The server should not store any client context between requests. Each request is independent, meaning that the server doesn\u2019t need to retain any session information between requests."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Client-Server"}),": RESTful APIs follow the client-server model. The client (typically a browser or mobile application) interacts with the server (where the data or resources reside). The client and server communicate via HTTP, but the server does not need to know anything about the client beyond the request."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Uniform Interface"}),": RESTful APIs define a uniform interface for communication between clients and servers. This means that the API design is consistent and predictable, and clients interact with the resources in a standard way (e.g., via HTTP methods like GET, POST, PUT, DELETE)."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Cacheable"}),": Responses from the server should explicitly state whether they can be cached or not. Caching can improve the performance of the system by reducing the need for redundant requests. It can be done at the client-side, server-side, or in intermediary caches."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Layered System"}),": REST allows an architecture to be composed of multiple layers, where each layer has a distinct role and functionality. For example, an intermediary server could be used for load balancing, caching, or security enforcement, without the client needing to be aware of these intermediate layers."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Code on Demand (optional)"}),": In some cases, the server can provide executable code (such as JavaScript) to the client, which can be executed on the client-side. This is an optional constraint and is rarely used in practice but adds flexibility to RESTful APIs."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"http-methods-in-restful-apis",children:"HTTP Methods in RESTful APIs"}),"\n",(0,t.jsx)(s.p,{children:"The HTTP methods are used to define the actions that can be performed on resources in a RESTful API. These methods correspond to the CRUD (Create, Read, Update, Delete) operations:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"GET"}),": Retrieves data from the server (e.g., fetching a resource or a list of resources). It is a read-only operation and should not modify the resource."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"POST"}),": Submits data to the server to create a new resource. It is used when adding new data to the server (e.g., creating a new record in a database)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"PUT"}),": Updates or replaces a resource on the server. It is typically used to update an existing resource or create a new resource if it does not already exist."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"DELETE"}),": Removes a resource from the server. It is used to delete a specific resource."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"PATCH"}),": Partially updates a resource, as opposed to PUT, which replaces the entire resource."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"resources-in-restful-api",children:"Resources in RESTful API"}),"\n",(0,t.jsxs)(s.p,{children:["In the context of REST, ",(0,t.jsx)(s.strong,{children:"resources"})," are the key abstractions. A resource is any piece of information that can be named and represented, such as data or objects. Each resource should be identified by a unique ",(0,t.jsx)(s.strong,{children:"URI (Uniform Resource Identifier)"}),", typically in the form of a URL."]}),"\n",(0,t.jsx)(s.p,{children:"Examples of resources:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A user resource: ",(0,t.jsx)(s.code,{children:"http://example.com/users/123"})]}),"\n",(0,t.jsxs)(s.li,{children:["A book resource: ",(0,t.jsx)(s.code,{children:"http://example.com/books/456"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"These resources can be operated on using the standard HTTP methods (GET, POST, PUT, DELETE, PATCH)."}),"\n",(0,t.jsx)(s.h2,{id:"response-format",children:"Response Format"}),"\n",(0,t.jsx)(s.p,{children:"RESTful APIs typically use JSON or XML as the data format for responses. JSON is the most commonly used format because it is lightweight and easy to work with in modern web applications."}),"\n",(0,t.jsx)(s.p,{children:"Example response in JSON:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": 1,\n  "name": "John Doe",\n  "email": "john.doe@example.com"\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"The response will also include HTTP status codes that indicate the result of the operation:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"200 OK"}),": The request was successful and the response contains the requested data."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"201 Created"}),": The request was successful and a new resource has been created."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"400 Bad Request"}),": The request was malformed or invalid."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"404 Not Found"}),": The resource could not be found."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"500 Internal Server Error"}),": There was a server-side error."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"restful-url-design",children:"RESTful URL Design"}),"\n",(0,t.jsx)(s.p,{children:"The design of the URLs is an essential part of RESTful APIs. URLs should represent resources and should be easy to understand and follow. Some best practices include:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Use nouns to represent resources (e.g., ",(0,t.jsx)(s.code,{children:"/users"}),", ",(0,t.jsx)(s.code,{children:"/products"}),", ",(0,t.jsx)(s.code,{children:"/orders"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:["Use plural nouns for collections of resources (e.g., ",(0,t.jsx)(s.code,{children:"/users"})," for a collection of users, ",(0,t.jsx)(s.code,{children:"/users/123"})," for a specific user)."]}),"\n",(0,t.jsx)(s.li,{children:"Avoid verbs in the URL, as the HTTP methods (GET, POST, PUT, DELETE) already define the actions to be performed."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Examples of good URL design:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/users"})," \u2013 A collection of users"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/users/123"})," \u2013 A specific user with ID 123"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/orders/456/items"})," \u2013 A collection of items in an order with ID 456"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"restful-api-benefits",children:"RESTful API Benefits"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Scalability"}),": REST APIs are stateless and can handle a large number of requests efficiently."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Simplicity"}),": RESTful APIs are simple to understand and use, as they rely on standard HTTP methods."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Flexibility"}),": REST allows different types of clients (web browsers, mobile apps, etc.) to interact with the same server using the same API."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Interoperability"}),": Since REST is based on HTTP, it can be used across different platforms and programming languages."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"restful-api-example",children:"RESTful API Example"}),"\n",(0,t.jsx)(s.p,{children:"Here\u2019s a simple example of a RESTful API for managing users:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"GET /users"}),": Retrieves a list of all users."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"POST /users"}),": Creates a new user."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"GET /users/123"}),": Retrieves a specific user with ID 123."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"PUT /users/123"}),": Updates the information of the user with ID 123."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"DELETE /users/123"}),": Deletes the user with ID 123."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);