"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[2187],{1989:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"frameworks-libraries/django/project-structure","title":"Project Structure","description":"In Django Rest Framework (DRF) projects, the project is typically structured to organize code logically and maintain scalability. The general structure follows Django\'s modular design, with the addition of DRF components for building RESTful APIs. Here\'s a breakdown of the main components:","source":"@site/docs/frameworks-libraries/django/project-structure.md","sourceDirName":"frameworks-libraries/django","slug":"/frameworks-libraries/django/project-structure","permalink":"/docs/frameworks-libraries/django/project-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/frameworks-libraries/django/project-structure.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735581142000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"File Structure","permalink":"/docs/frameworks-libraries/django/file-structure"},"next":{"title":"Models and ORM","permalink":"/docs/frameworks-libraries/django/model-orm"}}');var i=n(4848),t=n(8453);const o={sidebar_position:4},l="Project Structure",a={},d=[{value:"Basic Structure of a DRF Project",id:"basic-structure-of-a-drf-project",level:2},{value:"Key Components",id:"key-components",level:2},{value:"Models (models.py)",id:"models-modelspy",level:3},{value:"Serializers (serializers.py)",id:"serializers-serializerspy",level:3},{value:"Views (views.py)",id:"views-viewspy",level:3},{value:"URLs (urls.py)",id:"urls-urlspy",level:3},{value:"Apps (App Structure)",id:"apps-app-structure",level:3},{value:"Connection between Models, Serializers, Views, URLs",id:"connection-between-models-serializers-views-urls",level:2},{value:"Example Flow:",id:"example-flow",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"project-structure",children:"Project Structure"})}),"\n",(0,i.jsx)(s.p,{children:"In Django Rest Framework (DRF) projects, the project is typically structured to organize code logically and maintain scalability. The general structure follows Django's modular design, with the addition of DRF components for building RESTful APIs. Here's a breakdown of the main components:"}),"\n",(0,i.jsx)(s.h2,{id:"basic-structure-of-a-drf-project",children:"Basic Structure of a DRF Project"}),"\n",(0,i.jsx)(s.p,{children:"A typical DRF project structure looks like this:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"project_name/\n\u2502\n\u251c\u2500\u2500 manage.py\n\u251c\u2500\u2500 project_name/\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u251c\u2500\u2500 urls.py\n\u2502   \u251c\u2500\u2500 wsgi.py\n\u2502   \u2514\u2500\u2500 asgi.py\n\u2514\u2500\u2500 apps/\n    \u2514\u2500\u2500 app_name/\n        \u251c\u2500\u2500 __init__.py\n        \u251c\u2500\u2500 admin.py\n        \u251c\u2500\u2500 apps.py\n        \u251c\u2500\u2500 models.py\n        \u251c\u2500\u2500 serializers.py\n        \u251c\u2500\u2500 views.py\n        \u251c\u2500\u2500 urls.py\n        \u251c\u2500\u2500 tests.py\n        \u2514\u2500\u2500 migrations/\n"})}),"\n",(0,i.jsx)(s.h2,{id:"key-components",children:"Key Components"}),"\n",(0,i.jsx)(s.h3,{id:"models-modelspy",children:"Models (models.py)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Models represent the data structure of your application, i.e., the database tables."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Role"}),": They define fields, relationships between data, and methods that operate on the data."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Example"}),": If you're building a blog, a model for ",(0,i.jsx)(s.code,{children:"Post"})," might look like this:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from django.db import models\n\nclass Post(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()\n    created_at = models.DateTimeField(auto_now_add=True)\n\n    def __str__(self):\n        return self.title\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"serializers-serializerspy",children:"Serializers (serializers.py)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Serializers convert complex data types (like models) into native Python data types (e.g., dictionaries) that can then be rendered into JSON or XML, and vice versa."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Role"}),": They define how model instances should be serialized and validated for input/output. They also handle data transformation when sending or receiving it from the API."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from rest_framework import serializers\nfrom .models import Post\n\nclass PostSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Post\n        fields = ['id', 'title', 'content', 'created_at']\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"views-viewspy",children:"Views (views.py)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Views handle the business logic for your API and determine what data to show, how to show it, and how to handle incoming requests."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Role"}),": Views can either be class-based views (CBVs) or function-based views (FBVs). They use serializers to process data and send appropriate responses."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Example"})," (Using DRF's ",(0,i.jsx)(s.code,{children:"APIView"}),"):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from rest_framework import generics\nfrom .models import Post\nfrom .serializers import PostSerializer\n\nclass PostListView(generics.ListCreateAPIView):\n    queryset = Post.objects.all()\n    serializer_class = PostSerializer\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"urls-urlspy",children:"URLs (urls.py)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": URLs define the routing of incoming HTTP requests to the appropriate view."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Role"}),": URLs map the requested endpoint (e.g., ",(0,i.jsx)(s.code,{children:"/posts/"}),") to a specific view in ",(0,i.jsx)(s.code,{children:"views.py"}),". DRF provides easy integration with Django\u2019s URL routing system."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from django.urls import path\nfrom .views import PostListView\n\nurlpatterns = [\n    path('posts/', PostListView.as_view(), name='post-list')\n]\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"apps-app-structure",children:"Apps (App Structure)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),': In Django, an "app" is a modular unit that encapsulates a specific part of the project, such as a blog, user authentication, or payment processing.']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Role"}),": Each app can have its own models, views, serializers, and URLs, and they can be reused across different projects. Apps are like self-contained modules."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example"}),": You might have an app called ",(0,i.jsx)(s.code,{children:"blog"}),", another for ",(0,i.jsx)(s.code,{children:"users"}),", etc."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"connection-between-models-serializers-views-urls",children:"Connection between Models, Serializers, Views, URLs"}),"\n",(0,i.jsx)(s.p,{children:"Here is how the components interact:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Models"})," define the data structure."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Serializers"})," transform the models into data formats suitable for the API (e.g., JSON) and validate incoming data."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Views"})," handle the logic for processing requests and interacting with the models through serializers."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"URLs"})," route requests to the appropriate views."]}),"\n"]}),"\n",(0,i.jsx)(s.mermaid,{value:"graph TB\n    A[Models] --\x3e|defines data structure| B[Serializers]\n    B --\x3e|converts to JSON/XML| C[Views]\n    C --\x3e|handles business logic| D[URLs]\n    D --\x3e|routes to view| E[Request/Response]\n\n    subgraph App Structure\n        F[Models] --\x3e G[Serializers]\n        G --\x3e H[Views]\n        H --\x3e I[URLs]\n    end\n\n    A -.->|defined in app| F\n    G -.->|connected to app| G\n    H -.->|connected to app| H"}),"\n",(0,i.jsx)(s.h2,{id:"example-flow",children:"Example Flow:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["A client sends a GET request to ",(0,i.jsx)(s.code,{children:"/posts/"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"urls.py"})," file maps this URL to the ",(0,i.jsx)(s.code,{children:"PostListView"})," in ",(0,i.jsx)(s.code,{children:"views.py"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The view uses the ",(0,i.jsx)(s.code,{children:"PostSerializer"})," to convert data from the database into a JSON response."]}),"\n",(0,i.jsx)(s.li,{children:"The serialized data is returned to the client as a response."}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(6540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);