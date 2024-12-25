"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[2660],{8698:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"git/merge-and-rebase","title":"Git Merge, Rebase, and Squash","description":"Git is a powerful version control system, and understanding how to manage commits and branches effectively is key to maintaining a clean and organized codebase. Below are detailed explanations of some core Git concepts: Merge, Rebase, Squash, Three-Way Merge, Fast Forward, and how they work in different scenarios.","source":"@site/docs/git/merge-and-rebase.md","sourceDirName":"git","slug":"/git/merge-and-rebase","permalink":"/docs/git/merge-and-rebase","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/git/merge-and-rebase.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735055585000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Git config","permalink":"/docs/git/git-config"},"next":{"title":"Remote Repositories in Git","permalink":"/docs/git/remote-repositories"}}');var i=r(4848),s=r(8453);const a={sidebar_position:4},o="Git Merge, Rebase, and Squash",c={},h=[{value:"Git Merge",id:"git-merge",level:2},{value:"Three-Way Merge (ORT)",id:"three-way-merge-ort",level:3},{value:"Fast Forward Merge",id:"fast-forward-merge",level:3},{value:"Git Rebase",id:"git-rebase",level:2},{value:"Git Squash",id:"git-squash",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"git-merge-rebase-and-squash",children:"Git Merge, Rebase, and Squash"})}),"\n",(0,i.jsxs)(n.p,{children:["Git is a powerful version control system, and understanding how to manage commits and branches effectively is key to maintaining a clean and organized codebase. Below are detailed explanations of some core Git concepts: ",(0,i.jsx)(n.strong,{children:"Merge"}),", ",(0,i.jsx)(n.strong,{children:"Rebase"}),", ",(0,i.jsx)(n.strong,{children:"Squash"}),", ",(0,i.jsx)(n.strong,{children:"Three-Way Merge"}),", ",(0,i.jsx)(n.strong,{children:"Fast Forward"}),", and how they work in different scenarios."]}),"\n",(0,i.jsx)(n.h2,{id:"git-merge",children:"Git Merge"}),"\n",(0,i.jsxs)(n.p,{children:["Git merge is used to combine the changes from one branch into another. Typically, you'll merge a feature branch into the main branch (e.g., ",(0,i.jsx)(n.code,{children:"main"})," or ",(0,i.jsx)(n.code,{children:"develop"}),"). The merge process looks at the commit histories of both branches and merges them."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How it works"}),": When you perform a merge, Git looks at the common ancestor (the commit where both branches diverged) and compares the changes made in both branches. If there are no conflicts, it combines the changes into a new merge commit."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Merge Commit"}),": A new commit is created to record the merge operation. This commit has two parent commits: the previous commit on the target branch and the last commit on the source branch."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout main\ngit merge feature-branch\n"})}),"\n",(0,i.jsx)(n.mermaid,{value:'gitGraph\n   commit id: "A"\n   commit id: "B"\n   branch feature-branch\n   commit id: "C"\n   checkout main\n   merge feature-branch\n   commit id: "M" tag: "Merge Commit"'}),"\n",(0,i.jsx)(n.h3,{id:"three-way-merge-ort",children:"Three-Way Merge (ORT)"}),"\n",(0,i.jsx)(n.p,{children:"A three-way merge occurs when Git merges two branches and uses the common ancestor (the merge base) to resolve any changes between them."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How it works"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Git identifies the common ancestor commit, where the two branches diverged."}),"\n",(0,i.jsx)(n.li,{children:"It compares the changes made in the two branches since that commit."}),"\n",(0,i.jsx)(n.li,{children:"It automatically merges the changes unless there are conflicts."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ORT (Octopus Recursive Tree)"}),": ORT is a newer merge algorithm used by Git to speed up and handle more complex merge scenarios. It resolves the three-way merge more efficiently, handling multiple merges more effectively."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout main\ngit merge feature-branch\n"})}),"\n",(0,i.jsx)(n.mermaid,{value:'gitGraph\n   commit id: "A" tag: "Base"\n   commit id: "B" tag: "main"\n   branch feature-branch\n   commit id: "C" tag: "feature"\n   checkout main\n   merge feature-branch\n   commit id: "M" tag: "Merge Commit"'}),"\n",(0,i.jsx)(n.h3,{id:"fast-forward-merge",children:"Fast Forward Merge"}),"\n",(0,i.jsx)(n.p,{children:'A fast-forward merge occurs when the target branch has no commits since the branch you are merging from diverged. In this case, Git can simply "fast-forward" the target branch pointer to the latest commit of the source branch without creating a merge commit.'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How it works"}),": If the target branch is directly behind the source branch (i.e., no new commits in the target branch since the source branch was created), Git simply moves the pointer of the target branch to the latest commit of the source branch."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout main\ngit merge feature-branch\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the target branch (e.g., ",(0,i.jsx)(n.code,{children:"main"}),") hasn\u2019t moved forward, the result is a fast-forward merge."]}),"\n",(0,i.jsx)(n.mermaid,{value:'gitGraph\n   commit id: "A" tag: "Base"\n   commit id: "B" tag: "main"\n   branch feature-branch\n   commit id: "C" tag: "feature"\n   checkout main\n   merge feature-branch\n   commit id: "C" tag: "main"'}),"\n",(0,i.jsx)(n.h2,{id:"git-rebase",children:"Git Rebase"}),"\n",(0,i.jsx)(n.p,{children:'Rebasing is the process of moving or "replaying" commits from one branch onto another. Instead of creating a merge commit, rebase rewrites the commit history to appear as if the changes were made in sequence.'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How it works"}),": When you rebase, Git will take the commits from your current branch and reapply them on top of the target branch, effectively re-writing history. This creates a linear commit history and eliminates the need for a merge commit."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Interactive Rebase"}),": You can perform an interactive rebase to reorder, edit, or squash commits before applying them."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout feature-branch\ngit rebase main\n"})}),"\n",(0,i.jsx)(n.h2,{id:"git-squash",children:"Git Squash"}),"\n",(0,i.jsx)(n.p,{children:"Squashing is the process of combining multiple commits into a single commit. This is often used when you want to tidy up a branch before merging it to the main branch."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How it works"}),": In an interactive rebase, you can mark commits for squashing. When squashed, the changes from multiple commits are combined into a single commit."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use Case"}),': Squash is often used to simplify a branch history, especially when the branch has many small commits or "fixup" commits that are not meaningful individually.']}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout feature-branch\ngit rebase -i main\n"})}),"\n",(0,i.jsxs)(n.p,{children:["During the rebase, you mark commits with ",(0,i.jsx)(n.code,{children:"squash"})," or ",(0,i.jsx)(n.code,{children:"fixup"})," to combine them."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);