"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[8915],{2924:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"frameworks-libraries/django/file-structure","title":"File Structure","description":"When you create a Django project and app, Django generates several files and directories. Below is an overview of the typical file structure and their purposes.","source":"@site/docs/frameworks-libraries/django/file-structure.md","sourceDirName":"frameworks-libraries/django","slug":"/frameworks-libraries/django/file-structure","permalink":"/docs/frameworks-libraries/django/file-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/frameworks-libraries/django/file-structure.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735581142000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Project Setup","permalink":"/docs/frameworks-libraries/django/project-setup"},"next":{"title":"Project Structure","permalink":"/docs/frameworks-libraries/django/project-structure"}}');var n=s(4848),t=s(8453);const d={sidebar_position:4},c="File Structure",o={},l=[{value:"Project Directory (<code>myproject/</code>)",id:"project-directory-myproject",level:2},{value:"App Directory (<code>myapp/</code>)",id:"app-directory-myapp",level:2},{value:"Additional Directories (Optional or Auto-Generated)",id:"additional-directories-optional-or-auto-generated",level:2},{value:"Summary of File Roles",id:"summary-of-file-roles",level:2}];function a(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"file-structure",children:"File Structure"})}),"\n",(0,n.jsx)(r.p,{children:"When you create a Django project and app, Django generates several files and directories. Below is an overview of the typical file structure and their purposes."}),"\n",(0,n.jsxs)(r.h2,{id:"project-directory-myproject",children:["Project Directory (",(0,n.jsx)(r.code,{children:"myproject/"}),")"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"manage.py"})}),": A command-line utility to manage your project. Common commands include starting the development server, applying migrations, and creating a superuser."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:["Project Package (",(0,n.jsx)(r.code,{children:"myproject/"}),")"]}),":","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"__init__.py"})}),": Marks the directory as a Python package."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"settings.py"})}),": Main configuration file for your project."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"urls.py"})}),": Defines URL patterns for your project."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"wsgi.py"})}),": Entry point for WSGI-compatible web servers in production."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"asgi.py"})}),": Entry point for ASGI-compatible web servers, supporting asynchronous protocols."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"app-directory-myapp",children:["App Directory (",(0,n.jsx)(r.code,{children:"myapp/"}),")"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"__init__.py"})}),": Marks the directory as a Python package."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"admin.py"})}),": Registers models with the Django admin site."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"apps.py"})}),": Contains app-specific configurations."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"models.py"})}),": Defines database models for the app."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"views.py"})}),": Handles HTTP requests and returns responses."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"urls.py"})}),": (Optional) Defines app-specific URL patterns."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"serializers.py"})}),": (For DRF) Converts Python objects to JSON or other formats."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"tests.py"})}),": Contains test cases for the app."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"migrations/"})}),": Tracks database schema changes."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"additional-directories-optional-or-auto-generated",children:"Additional Directories (Optional or Auto-Generated)"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"templates/"})}),": Contains HTML templates for rendering views."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"static/"})}),": Contains static assets like CSS, JavaScript, and images."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"media/"})}),": Stores user-uploaded files."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"summary-of-file-roles",children:"Summary of File Roles"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"File/Directory"}),(0,n.jsx)(r.th,{children:"Role"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"manage.py"})}),(0,n.jsx)(r.td,{children:"Command-line utility for project management."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"settings.py"})}),(0,n.jsx)(r.td,{children:"Central configuration for the project."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"urls.py"})}),(0,n.jsx)(r.td,{children:"Defines URL routing for the project and apps."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"wsgi.py"}),"/",(0,n.jsx)(r.code,{children:"asgi.py"})]}),(0,n.jsx)(r.td,{children:"Entry points for deploying the project."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"models.py"})}),(0,n.jsx)(r.td,{children:"Defines database schema using models."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"views.py"})}),(0,n.jsx)(r.td,{children:"Handles HTTP requests and returns responses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"serializers.py"})}),(0,n.jsx)(r.td,{children:"DRF-specific file for data serialization."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"admin.py"})}),(0,n.jsx)(r.td,{children:"Registers models with the Django admin site."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"tests.py"})}),(0,n.jsx)(r.td,{children:"Contains test cases for the app."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"migrations/"})}),(0,n.jsx)(r.td,{children:"Tracks database schema changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"templates/"})}),(0,n.jsx)(r.td,{children:"Stores HTML templates for rendering data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"static/"})}),(0,n.jsx)(r.td,{children:"Contains static assets (CSS, JS, images)."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"media/"})}),(0,n.jsx)(r.td,{children:"Stores uploaded files."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>c});var i=s(6540);const n={},t=i.createContext(n);function d(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);