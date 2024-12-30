"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[2446],{1539:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"git/introduction","title":"Introduction","description":"Git is a distributed version control system that helps developers track changes in source code during software development. Created by Linus Torvalds in 2005, Git is designed to handle projects of all sizes with speed and efficiency. Its primary purpose is to coordinate work among multiple developers, manage code changes, and maintain a history of every modification made to the codebase.","source":"@site/docs/git/introduction.md","sourceDirName":"git","slug":"/git/introduction","permalink":"/docs/git/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/git/introduction.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735022655000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Models and ORM","permalink":"/docs/frameworks-libraries/django/model-orm"},"next":{"title":"Git Internals","permalink":"/docs/git/git-internals"}}');var o=n(4848),s=n(8453);const r={sidebar_position:1},a="Introduction",l={},d=[{value:"Core Features of Git",id:"core-features-of-git",level:2},{value:"Getting Started with Git",id:"getting-started-with-git",level:2},{value:"Setting Up Git",id:"setting-up-git",level:3},{value:"Creating a Repository",id:"creating-a-repository",level:3},{value:"Initializing a New Repository",id:"initializing-a-new-repository",level:4},{value:"Cloning an Existing Repository",id:"cloning-an-existing-repository",level:4}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,o.jsx)(i.p,{children:"Git is a distributed version control system that helps developers track changes in source code during software development. Created by Linus Torvalds in 2005, Git is designed to handle projects of all sizes with speed and efficiency. Its primary purpose is to coordinate work among multiple developers, manage code changes, and maintain a history of every modification made to the codebase."}),"\n",(0,o.jsx)(i.p,{children:"Git is widely popular due to its distributed nature, allowing every developer to have a full copy of the project\u2019s history on their local machine. It is free, open-source, and supports non-linear workflows, making it a vital tool for modern software development."}),"\n",(0,o.jsx)(i.h2,{id:"core-features-of-git",children:"Core Features of Git"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Version Control:"})," Tracks changes in files and allows you to revert to previous versions when necessary."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Branching and Merging:"})," Enables developers to work on isolated branches and merge them into the main codebase when ready."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Distributed System:"})," Each developer has a complete copy of the repository, ensuring no single point of failure."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Collaboration:"})," Facilitates seamless teamwork by allowing multiple developers to work on the same project simultaneously."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Staging Area:"})," Provides a space to prepare changes before committing them to the repository."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"getting-started-with-git",children:"Getting Started with Git"}),"\n",(0,o.jsxs)(i.p,{children:["To start using Git, you need to install it on your system. Git can be downloaded from its official website (",(0,o.jsx)(i.a,{href:"https://git-scm.com/",children:"https://git-scm.com/"}),") or installed using package managers like ",(0,o.jsx)(i.code,{children:"apt"})," on Ubuntu or ",(0,o.jsx)(i.code,{children:"brew"})," on macOS."]}),"\n",(0,o.jsx)(i.p,{children:"Once installed, you can verify it by running:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git --version\n"})}),"\n",(0,o.jsx)(i.h3,{id:"setting-up-git",children:"Setting Up Git"}),"\n",(0,o.jsx)(i.p,{children:"Before creating or working with repositories, configure your user details:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:'git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"\n'})}),"\n",(0,o.jsx)(i.p,{children:"These details will be associated with your commits."}),"\n",(0,o.jsx)(i.h3,{id:"creating-a-repository",children:"Creating a Repository"}),"\n",(0,o.jsx)(i.p,{children:"A repository (repo) is where Git stores all the information about a project, including its history of changes. There are two ways to create a Git repository: initializing a new repository or cloning an existing one."}),"\n",(0,o.jsx)(i.h4,{id:"initializing-a-new-repository",children:"Initializing a New Repository"}),"\n",(0,o.jsx)(i.p,{children:"To create a new repository:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Navigate to your project directory:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"cd /path/to/your/project\n"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Initialize the Git repository:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git init\n"})}),"\n",(0,o.jsxs)(i.p,{children:["This creates a hidden ",(0,o.jsx)(i.code,{children:".git"})," folder in your project directory, which contains all the metadata for Git to track the project."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Add files to the repository:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git add .\n"})}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"."})," adds all files in the current directory to the staging area. Alternatively, you can specify individual files."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Commit the changes:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:'git commit -m "Initial commit"\n'})}),"\n",(0,o.jsx)(i.p,{children:"This saves the changes to the repository with a descriptive message."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h4,{id:"cloning-an-existing-repository",children:"Cloning an Existing Repository"}),"\n",(0,o.jsx)(i.p,{children:"To contribute to or use an existing project:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Use the repository URL to clone it:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/username/repository.git\n"})}),"\n",(0,o.jsx)(i.p,{children:"This creates a new directory named after the repository and downloads its contents."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Navigate to the cloned repository:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"cd repository\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(6540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);