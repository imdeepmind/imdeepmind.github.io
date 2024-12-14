"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[170],{325:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"data-structure-and-algorithms/two-pointers","title":"Two Pointers","description":"Definition","source":"@site/docs/data-structure-and-algorithms/two-pointers.md","sourceDirName":"data-structure-and-algorithms","slug":"/data-structure-and-algorithms/two-pointers","permalink":"/docs/data-structure-and-algorithms/two-pointers","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/data-structure-and-algorithms/two-pointers.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1734168488000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Arrays and Hashing","permalink":"/docs/data-structure-and-algorithms/arrays-and-hasing"},"next":{"title":"Introduction","permalink":"/docs/programming-languages/introduction"}}');var t=r(4848),s=r(8453);const o={sidebar_position:3},a="Two Pointers",l={},d=[{value:"Definition",id:"definition",level:2},{value:"Key Scenarios for Two Pointers",id:"key-scenarios-for-two-pointers",level:2},{value:"Time Complexity",id:"time-complexity",level:2},{value:"Common Problems Solved Using Two Pointers",id:"common-problems-solved-using-two-pointers",level:2},{value:"Example Algorithms and Problems",id:"example-algorithms-and-problems",level:2},{value:"A. Finding Pairs with a Target Sum",id:"a-finding-pairs-with-a-target-sum",level:3},{value:"Check if a String is a Palindrome",id:"check-if-a-string-is-a-palindrome",level:3},{value:"Remove Duplicates from Sorted Array",id:"remove-duplicates-from-sorted-array",level:3},{value:"Advantages of Two Pointers",id:"advantages-of-two-pointers",level:2},{value:"When to Use Two Pointers",id:"when-to-use-two-pointers",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"two-pointers",children:"Two Pointers"})}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Two Pointers"})," technique involves using two pointers (or indices) to traverse or manipulate a data structure, typically an array or string. These pointers can move in the same direction, opposite directions, or with one pointer lagging behind the other."]}),"\n",(0,t.jsx)(n.p,{children:"This technique is particularly useful for problems involving searching, sorting, or comparing elements in arrays."}),"\n",(0,t.jsx)(n.h2,{id:"key-scenarios-for-two-pointers",children:"Key Scenarios for Two Pointers"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Opposite Direction (Start and End)"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Used when the problem involves comparisons or operations on both ends of the array."}),"\n",(0,t.jsx)(n.li,{children:"Example: Checking if an array is a palindrome."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Same Direction (Sliding)"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Both pointers move in the same direction to explore different ranges or maintain a dynamic window."}),"\n",(0,t.jsx)(n.li,{children:"Example: Sliding window problems like finding the smallest subarray with a given sum."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fixed vs Moving"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"One pointer is fixed, while the other traverses the array to find a solution."}),"\n",(0,t.jsx)(n.li,{children:"Example: Finding pairs with a specific sum."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Efficient"}),": Most Two Pointers algorithms run in O(n) because each pointer usually traverses the array only once."]}),"\n",(0,t.jsx)(n.li,{children:"Some problems may require preprocessing like sorting, which adds an additional O(n log n)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"common-problems-solved-using-two-pointers",children:"Common Problems Solved Using Two Pointers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Problem Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example Problem"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Finding Pairs with a Target Sum"}),(0,t.jsx)(n.td,{children:"Check if there are two elements in an array that add up to a target value."}),(0,t.jsx)(n.td,{children:"Two Sum (sorted array)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sorting-related Comparisons"}),(0,t.jsx)(n.td,{children:"Merge two sorted arrays, remove duplicates, etc."}),(0,t.jsx)(n.td,{children:"Merging sorted arrays"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Palindrome Check"}),(0,t.jsx)(n.td,{children:"Determine if a string or array is a palindrome."}),(0,t.jsx)(n.td,{children:"Check Palindrome"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Removing Elements"}),(0,t.jsx)(n.td,{children:"Filter elements or modify an array in-place."}),(0,t.jsx)(n.td,{children:"Remove duplicates from sorted array"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Window-based Optimization"}),(0,t.jsx)(n.td,{children:"Find subarrays or windows meeting specific criteria."}),(0,t.jsx)(n.td,{children:"Longest substring without repeating chars"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example-algorithms-and-problems",children:"Example Algorithms and Problems"}),"\n",(0,t.jsx)(n.h3,{id:"a-finding-pairs-with-a-target-sum",children:"A. Finding Pairs with a Target Sum"}),"\n",(0,t.jsxs)(n.p,{children:["Two pointers approach is ideal for sorted arrays.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Problem"}),": Find if a pair in the array sums to a given target."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def two_sum_sorted(arr, target):\n    left, right = 0, len(arr) - 1\n    \n    while left < right:\n        current_sum = arr[left] + arr[right]\n        if current_sum == target:\n            return (arr[left], arr[right])\n        elif current_sum < target:\n            left += 1\n        else:\n            right -= 1\n    \n    return None\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Time Complexity"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sorting: O(n log n) (if not sorted already)"}),"\n",(0,t.jsx)(n.li,{children:"Two Pointers: O(n)"}),"\n",(0,t.jsx)(n.li,{children:"Overall: O(n log n)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"check-if-a-string-is-a-palindrome",children:"Check if a String is a Palindrome"}),"\n",(0,t.jsx)(n.p,{children:"Use two pointers to compare characters from both ends."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    \n    while left < right:\n        if s[left] != s[right]:\n            return False\n        left += 1\n        right -= 1\n    \n    return True\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Time Complexity"}),": O(n)"]}),"\n",(0,t.jsx)(n.h3,{id:"remove-duplicates-from-sorted-array",children:"Remove Duplicates from Sorted Array"}),"\n",(0,t.jsx)(n.p,{children:"Modify the array in-place to remove duplicates."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def remove_duplicates(nums):\n    if not nums:\n        return 0\n    \n    write_pointer = 1\n    for read_pointer in range(1, len(nums)):\n        if nums[read_pointer] != nums[read_pointer - 1]:\n            nums[write_pointer] = nums[read_pointer]\n            write_pointer += 1\n    \n    return write_pointer\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Time Complexity"}),": O(n)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Space Complexity"}),": O(1)"]}),"\n",(0,t.jsx)(n.h2,{id:"advantages-of-two-pointers",children:"Advantages of Two Pointers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Efficiency"}),": Often reduces O(n\xb2) solutions to O(n)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Space-Saving"}),": Typically requires O(1) additional space."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplicity"}),": Straightforward to implement for many problems."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"when-to-use-two-pointers",children:"When to Use Two Pointers"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Array or String Problems"}),": Involve ranges, pairs, or comparisons."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sorted Data"}),": Exploit order for quick navigation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optimization Problems"}),": Maximize/minimize a value within constraints."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Two Pointers"})," technique is a versatile and efficient approach for solving a variety of problems in arrays and strings. By carefully managing the movement of pointers, you can achieve significant performance improvements, especially for sorted or linear data structures."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(6540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);