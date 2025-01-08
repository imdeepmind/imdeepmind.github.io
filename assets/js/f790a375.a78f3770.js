"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[541],{67686:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"version-control/git/stashing","title":"Stashing in Git","description":"Stashing is a feature in Git that allows you to temporarily save changes in your working directory and index (staged files) without committing them. It\u2019s useful when you need to switch branches or perform other tasks but aren\u2019t ready to commit your current changes.","source":"@site/docs/version-control/git/stashing.md","sourceDirName":"version-control/git","slug":"/version-control/git/stashing","permalink":"/docs/version-control/git/stashing","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/version-control/git/stashing.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735631792000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"HEAD and reflog","permalink":"/docs/version-control/git/head-reflog"},"next":{"title":"Introduction","permalink":"/docs/design-patterns/introduction"}}');var a=n(74848),t=n(28453);const l={sidebar_position:7},r="Stashing in Git",h={},c=[{value:"Common Stashing Commands",id:"common-stashing-commands",level:2},{value:"Create a Stash",id:"create-a-stash",level:3},{value:"List Stashes",id:"list-stashes",level:3},{value:"Apply a Stash",id:"apply-a-stash",level:3},{value:"Pop a Stash",id:"pop-a-stash",level:3},{value:"Drop a Stash",id:"drop-a-stash",level:3},{value:"Clear All Stashes",id:"clear-all-stashes",level:3},{value:"Advanced Stashing Features",id:"advanced-stashing-features",level:2},{value:"Stashing with a Message",id:"stashing-with-a-message",level:3},{value:"Stashing Specific Files",id:"stashing-specific-files",level:3},{value:"Branching from a Stash",id:"branching-from-a-stash",level:3},{value:"Viewing a Stash\u2019s Changes",id:"viewing-a-stashs-changes",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function o(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"stashing-in-git",children:"Stashing in Git"})}),"\n",(0,a.jsx)(e.p,{children:"Stashing is a feature in Git that allows you to temporarily save changes in your working directory and index (staged files) without committing them. It\u2019s useful when you need to switch branches or perform other tasks but aren\u2019t ready to commit your current changes."}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"What is a Stash?"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"A stash is a snapshot of your working directory and index at a specific point in time."}),"\n",(0,a.jsx)(e.li,{children:"Stashes are stored in a stack-like structure, where you can apply or drop them as needed."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Use Cases for Stashing:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Switching branches without committing changes."}),"\n",(0,a.jsx)(e.li,{children:"Cleaning your working directory temporarily."}),"\n",(0,a.jsx)(e.li,{children:"Experimenting with changes without affecting the current state."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"common-stashing-commands",children:"Common Stashing Commands"}),"\n",(0,a.jsx)(e.h3,{id:"create-a-stash",children:"Create a Stash"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Save the current working directory and index:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"This moves your changes to a stash and reverts your working directory to the last committed state."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Including Untracked Files"}),":\nBy default, untracked files are not stashed. To include them:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash -u\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Including Ignored Files"}),":\nIf you want to stash ignored files as well:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash -a\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"list-stashes",children:"List Stashes"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["View all stashes in your repository:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash list\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Example output:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"stash@{0}: WIP on main: 123abc Fix bug\nstash@{1}: WIP on feature: 456def Add new feature\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"apply-a-stash",children:"Apply a Stash"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Apply the most recent stash to your working directory:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash apply\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Apply a specific stash:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash apply stash@{1}\n"})}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:"Applying a stash does not remove it from the stash list."}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"pop-a-stash",children:"Pop a Stash"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Apply the most recent stash and remove it from the stash list:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash pop\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Pop a specific stash:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash pop stash@{1}\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"drop-a-stash",children:"Drop a Stash"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Delete a specific stash:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash drop stash@{0}\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Delete the most recent stash:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash drop\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"clear-all-stashes",children:"Clear All Stashes"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Remove all stashes:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash clear\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"advanced-stashing-features",children:"Advanced Stashing Features"}),"\n",(0,a.jsx)(e.h3,{id:"stashing-with-a-message",children:"Stashing with a Message"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Add a description to your stash:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'git stash push -m "Fix for issue #123"\n'})}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:"The message will appear in the stash list."}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"stashing-specific-files",children:"Stashing Specific Files"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Stash only specific files:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash push <file1> <file2>\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"branching-from-a-stash",children:"Branching from a Stash"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Create a new branch from a stash:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash branch <branch-name>\n"})}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:"This applies the stash to the new branch and removes it from the stash list."}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"viewing-a-stashs-changes",children:"Viewing a Stash\u2019s Changes"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Show the changes stored in a stash:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash show\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Show detailed changes (like ",(0,a.jsx)(e.code,{children:"git diff"}),"):","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash show -p stash@{0}\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Use Stash Messages"}),":"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Always add a message to your stashes to make it easier to identify their purpose."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Don\u2019t Leave Stashes for Too Long"}),":"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Stashes are meant for temporary storage. Apply or drop them as soon as possible to avoid confusion."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsxs)(e.strong,{children:["Be Cautious with ",(0,a.jsx)(e.code,{children:"stash clear"})]}),":"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"This command permanently deletes all stashes. Double-check before running it."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Check for Conflicts"}),":"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Applying or popping a stash may result in conflicts if the changes clash with the current state of your repository. Resolve these conflicts like you would during a merge."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Recovering a Dropped Stash"}),":"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["If you accidentally drop a stash, you may still recover it if its reference exists in the reflog:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git reflog\n"})}),"\n","Look for the stash commit hash and create a branch from it:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git branch <branch-name> <commit-hash>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Untracked Files Not Stashed"}),":"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Ensure you use the ",(0,a.jsx)(e.code,{children:"-u"})," or ",(0,a.jsx)(e.code,{children:"-a"})," option if you want untracked or ignored files to be included in the stash."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Stash Conflicts"}),":"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["If applying a stash results in conflicts, resolve the conflicts manually and use:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git stash drop\n"})}),"\n","to remove the stash once resolved."]}),"\n"]}),"\n"]}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(o,{...s})}):o(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>l,x:()=>r});var i=n(96540);const a={},t=i.createContext(a);function l(s){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:l(s.components),i.createElement(t.Provider,{value:e},s.children)}}}]);