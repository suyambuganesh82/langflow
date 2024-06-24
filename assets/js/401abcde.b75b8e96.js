"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1129],{7533:(e,n,o)=>{o.d(n,{A:()=>r});var t=o(6540),i=o(1122),s=o(6025),a=o(4848);const r=e=>{let{alt:n,sources:o,style:r}=e;const[l,d]=(0,t.useState)(!1),c=e=>{"Escape"===e.key&&d(!1)};(0,t.useEffect)((()=>(l?document.addEventListener("keydown",c):document.removeEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)})),[l]);return(0,a.jsx)("div",{className:"zoomable-image "+(l?"fullscreen":""),onClick:()=>{d(!l)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...r},children:(0,a.jsx)(i.A,{className:"zoomable-image-inner",alt:n,sources:{light:(0,s.Ay)(o.light),dark:(0,s.Ay)(o.dark)}})})}},7761:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>m,contentTitle:()=>g,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>h});o(6540);var t=o(4848),i=o(8453),s=(o(1122),o(6025)),a=o(7533),r=o(3554),l=o.n(r),d=o(7293);const c={},g="Playground",u={id:"administration/playground",title:"Playground",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/administration/playground.mdx",sourceDirName:"administration",slug:"/administration/playground",permalink:"/administration/playground",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Command Line Interface (CLI)",permalink:"/administration/cli"},next:{title:"Chat Memory",permalink:"/administration/memories"}},m={},h=[{value:"Playground I/O",id:"playground-io",level:2},{value:"Memory Management",id:"memory-management",level:2}];function p(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",ol:"ol",li:"li",img:"img",h2:"h2",ul:"ul",a:"a"},(0,i.RP)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"playground",children:"Playground"}),"\n",(0,t.jsx)(d.A,{type:"warning",title:"warning",children:(0,t.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,t.jsx)(d.A,{type:"info",children:(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.strong,{children:"My Collection"}),"\xa0page, click the\xa0Playground\xa0button in one of your flow cards.\nIt will directly open up a window with that project's Playground, without even showing the flow (this also works for flows hosted on the Langflow Store!)."]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Playground"})," is a dynamic interface designed for real-time interaction with agents, allowing users to access and manage memories and monitor the inputs and outputs. Here, users can directly prototype and experiment with their configured components or AI models, making adjustments and observing different outcomes in real-time."]}),"\n",(0,t.jsx)(n.p,{children:"It even works for flows hosted on the Langflow store!"}),"\n",(0,t.jsx)(n.p,{children:"As long as you have a flow properly working, you can interact with it by clicking the\xa0Playground\xa0button."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["From your ",(0,t.jsx)(n.strong,{children:"Collections"})," page, click the ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.img,{src:o(4757).A+"",loading:"lazy",alt:"Playground icon",width:"24",height:"24"}),"Playground"]})," in one of your flows.\nThe ",(0,t.jsx)(n.strong,{children:"Playground"})," window opens."]}),"\n"]}),"\n",(0,t.jsx)(a.A,{alt:"Docusaurus themed image",sources:{light:(0,s.Ay)("img/playground-chat.png"),dark:(0,s.Ay)("img/playground-chat.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Chat with your bot as you normally would, all without having to open the editor."}),"\n"]}),"\n",(0,t.jsx)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"},children:(0,t.jsx)(l(),{playing:!0,controls:!0,url:"/videos/langflow_playground.mp4"})}),"\n",(0,t.jsx)(n.h2,{id:"playground-io",children:"Playground I/O"}),"\n",(0,t.jsx)(n.p,{children:"The Playground's window arrangement changes depending on what components are being used."}),"\n",(0,t.jsx)(n.p,{children:"Adding or removing any of the below components modifies your Playground so you can monitor the inputs and outputs."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Chat Input"}),"\n",(0,t.jsx)(n.li,{children:"Text Input"}),"\n",(0,t.jsx)(n.li,{children:"Chat Output"}),"\n",(0,t.jsx)(n.li,{children:"Text Output"}),"\n",(0,t.jsx)(n.li,{children:"Data Output"}),"\n",(0,t.jsx)(n.li,{children:"Inspect Memory"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can also select ",(0,t.jsx)(n.strong,{children:"Options"})," > ",(0,t.jsx)(n.strong,{children:"Logs"})," to see your flow's logs."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"../components/inputs-and-outputs",children:"Inputs and Outputs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"memory-management",children:"Memory Management"}),"\n",(0,t.jsxs)(n.p,{children:["When you send a message, under ",(0,t.jsx)(n.strong,{children:"Memories"}),", you can view a table of previous interactions for this session."]}),"\n",(0,t.jsx)(n.p,{children:"Langflow allows every chat message to be stored, and a single flow can have multiple memory sessions. This enables you to create multiple \u201cmemories\u201d for agents to store and recall specific information as needed."}),"\n",(0,t.jsx)(n.p,{children:"You can edit and remove previous messages to inspect and validate a model\u2019s response behavior."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"./memories",children:"Memories"}),"."]})]})}const y=function(e={}){const{wrapper:n}=Object.assign({},(0,i.RP)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},4757:(e,n,o)=>{o.d(n,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYm90LW1lc3NhZ2Utc3F1YXJlIj4KICA8cGF0aCBkPSJNMTIgNlYySDgiIC8+CiAgPHBhdGggZD0ibTggMTgtNCA0VjhhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMloiIC8+CiAgPHBhdGggZD0iTTIgMTJoMiIgLz4KICA8cGF0aCBkPSJNOSAxMXYyIiAvPgogIDxwYXRoIGQ9Ik0xNSAxMXYyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgo8L3N2Zz4g"},8453:(e,n,o)=>{o.d(n,{RP:()=>s,xA:()=>r});var t=o(6540);const i=t.createContext({});function s(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||a:s(e),t.createElement(i.Provider,{value:r},n)}}}]);