"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[5198],{35884:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"frameworks-libraries/django/permissions","title":"Permissions, Access Control, Throttling","description":"Django Rest Framework provides robust tools for controlling who can access your APIs, what they can do, and how often they can make requests. Below is a detailed explanation of these concepts.","source":"@site/docs/frameworks-libraries/django/permissions.md","sourceDirName":"frameworks-libraries/django","slug":"/frameworks-libraries/django/permissions","permalink":"/docs/frameworks-libraries/django/permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/frameworks-libraries/django/permissions.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1737900458000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Authentication","permalink":"/docs/frameworks-libraries/django/authentication"},"next":{"title":"Querying and Filtering","permalink":"/docs/frameworks-libraries/django/querying-filtering"}}');var i=n(74848),t=n(28453);const o={sidebar_position:9},l="Permissions, Access Control, Throttling",c={},a=[{value:"Permissions",id:"permissions",level:2},{value:"Types of Permissions",id:"types-of-permissions",level:3},{value:"Built-in Permission Classes",id:"built-in-permission-classes",level:3},{value:"Custom Permissions",id:"custom-permissions",level:3},{value:"Object-Level Permissions",id:"object-level-permissions",level:3},{value:"Access Control",id:"access-control",level:2},{value:"Common Access Control Patterns",id:"common-access-control-patterns",level:3},{value:"Setting Access Control at View Level",id:"setting-access-control-at-view-level",level:3},{value:"Throttling",id:"throttling",level:2},{value:"Types of Throttles",id:"types-of-throttles",level:3},{value:"Configuring Throttling",id:"configuring-throttling",level:3},{value:"Custom Throttle Classes",id:"custom-throttle-classes",level:3},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"permissions-access-control-throttling",children:"Permissions, Access Control, Throttling"})}),"\n",(0,i.jsx)(s.p,{children:"Django Rest Framework provides robust tools for controlling who can access your APIs, what they can do, and how often they can make requests. Below is a detailed explanation of these concepts."}),"\n",(0,i.jsx)(s.h2,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsx)(s.p,{children:"Permissions in DRF define whether a request should be granted or denied based on the user making the request. Permissions are checked during the view processing stage."}),"\n",(0,i.jsx)(s.h3,{id:"types-of-permissions",children:"Types of Permissions"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Global Permissions"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Apply to all views by setting the ",(0,i.jsx)(s.code,{children:"DEFAULT_PERMISSION_CLASSES"})," in your settings:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"REST_FRAMEWORK = {\n    'DEFAULT_PERMISSION_CLASSES': [\n        'rest_framework.permissions.IsAuthenticated',\n    ]\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"View-Level Permissions"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Set per view using the ",(0,i.jsx)(s.code,{children:"permission_classes"})," attribute:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from rest_framework.permissions import IsAuthenticated\n\nclass ExampleView(APIView):\n    permission_classes = [IsAuthenticated]\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"built-in-permission-classes",children:"Built-in Permission Classes"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"AllowAny"}),": Allows unrestricted access to all users, including unauthenticated users."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"IsAuthenticated"}),": Grants access only to authenticated users."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"IsAdminUser"}),": Grants access only to users with ",(0,i.jsx)(s.code,{children:"is_staff=True"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"IsAuthenticatedOrReadOnly"}),": Authenticated users have full access; unauthenticated users can only read (GET, HEAD, OPTIONS)."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"custom-permissions",children:"Custom Permissions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Create custom permission classes by inheriting ",(0,i.jsx)(s.code,{children:"BasePermission"})," and overriding the ",(0,i.jsx)(s.code,{children:"has_permission"})," or ",(0,i.jsx)(s.code,{children:"has_object_permission"})," methods:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from rest_framework.permissions import BasePermission\n\nclass IsOwnerOrReadOnly(BasePermission):\n    def has_object_permission(self, request, view, obj):\n        # Allow read-only methods for everyone\n        if request.method in ['GET', 'HEAD', 'OPTIONS']:\n            return True\n        # Write permissions are only allowed to the object's owner\n        return obj.owner == request.user\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"object-level-permissions",children:"Object-Level Permissions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Used to check permissions for individual objects, typically combined with a custom ",(0,i.jsx)(s.code,{children:"has_object_permission"})," method."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"access-control",children:"Access Control"}),"\n",(0,i.jsx)(s.p,{children:"Access control ensures specific user roles or groups have access to certain resources or actions."}),"\n",(0,i.jsx)(s.h3,{id:"common-access-control-patterns",children:"Common Access Control Patterns"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Role-Based Access Control (RBAC)"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Use Django's built-in user groups and permissions."}),"\n",(0,i.jsx)(s.li,{children:"Assign users to groups and attach permissions to groups."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Object-Level Access"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Determine whether a user can interact with a specific object. For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"def has_object_permission(self, request, view, obj):\n    return obj.created_by == request.user\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"setting-access-control-at-view-level",children:"Setting Access Control at View Level"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Permissions can be layered to enforce both global and per-object rules:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"throttling",children:"Throttling"}),"\n",(0,i.jsx)(s.p,{children:"Throttling controls the rate of requests a client can make to your API, helping prevent abuse or overloading."}),"\n",(0,i.jsx)(s.h3,{id:"types-of-throttles",children:"Types of Throttles"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"AnonRateThrottle"}),": Limits requests from unauthenticated users."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"UserRateThrottle"}),": Limits requests from authenticated users."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"ScopedRateThrottle"}),": Limits requests on specific views or viewsets based on a custom scope."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"configuring-throttling",children:"Configuring Throttling"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Add throttling classes in ",(0,i.jsx)(s.code,{children:"settings.py"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"REST_FRAMEWORK = {\n    'DEFAULT_THROTTLE_CLASSES': [\n        'rest_framework.throttling.AnonRateThrottle',\n        'rest_framework.throttling.UserRateThrottle',\n    ],\n    'DEFAULT_THROTTLE_RATES': {\n        'anon': '10/min',  # 10 requests per minute for unauthenticated users\n        'user': '1000/day',  # 1000 requests per day for authenticated users\n    }\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Override throttle rates per view:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from rest_framework.throttling import UserRateThrottle\n\nclass ExampleThrottle(UserRateThrottle):\n    rate = '5/min'  # Custom rate for this view\n\nclass MyView(APIView):\n    throttle_classes = [ExampleThrottle]\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"custom-throttle-classes",children:"Custom Throttle Classes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Create custom throttles by subclassing ",(0,i.jsx)(s.code,{children:"BaseThrottle"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from rest_framework.throttling import BaseThrottle\n\nclass CustomThrottle(BaseThrottle):\n    def allow_request(self, request, view):\n        # Logic to determine if the request should be allowed\n        return True\n\n    def wait(self):\n        # Time (in seconds) until the next request is allowed\n        return 60\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.strong,{children:"AllowAny"})," sparingly to avoid unrestricted access."]}),"\n",(0,i.jsx)(s.li,{children:"Combine multiple permission classes for fine-grained control."}),"\n",(0,i.jsx)(s.li,{children:"Set reasonable throttle and rate limits to balance performance and user experience."}),"\n",(0,i.jsx)(s.li,{children:"Test access control rules thoroughly to ensure secure behavior."}),"\n",(0,i.jsx)(s.li,{children:"Leverage logging and monitoring tools to track API usage and throttling behavior."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(96540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);