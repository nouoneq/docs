"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[482],{5019:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(5893),s=i(1151);const r={sidebar_position:1},l="Installation",a={id:"self-hosting/installation",title:"Installation",description:"Our official Cloud offering is the easiest way to start using Linkwarden and is typically more affordable than renting a VPS.",source:"@site/docs/self-hosting/installation.md",sourceDirName:"self-hosting",slug:"/self-hosting/installation",permalink:"/self-hosting/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/linkwarden/docs/blob/main/docs/self-hosting/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/api/overview"},next:{title:"Environment Variables",permalink:"/self-hosting/environment-variables"}},o={},d=[{value:"Installation",id:"installation-1",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Docker \ud83d\udc0b",id:"docker-",level:3},{value:"1. Clone the Linkwarden repository",id:"1-clone-the-linkwarden-repository",level:4},{value:"2. Configure the Environment Variables",id:"2-configure-the-environment-variables",level:4},{value:"3. Run it!",id:"3-run-it",level:4},{value:"Manual Installation",id:"manual-installation",level:3},{value:"1. Clone the Linkwarden repository",id:"1-clone-the-linkwarden-repository-1",level:4},{value:"2. Install the necessary dependancies",id:"2-install-the-necessary-dependancies",level:4},{value:"3. Configure the Environment Variables",id:"3-configure-the-environment-variables",level:4},{value:"4. Build and setup the database:",id:"4-build-and-setup-the-database",level:4},{value:"5. Start the app:",id:"5-start-the-app",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Our official ",(0,t.jsx)(n.a,{href:"https://linkwarden.app/#pricing",children:"Cloud"})," offering is the easiest way to start using Linkwarden and is typically more affordable than renting a VPS."]}),(0,t.jsx)(n.p,{children:"Plus, your subscription supports both the development and the continuous improvement of the app for everyone!"}),(0,t.jsx)(n.p,{children:"Alternatively, if you prefer self-hosting Linkwarden, no problem! You still have access to all the core features."})]}),"\n",(0,t.jsx)(n.p,{children:"Here you can find everything you need to setup a fully fledged Linkwarden instance on your own server."}),"\n",(0,t.jsx)(n.h2,{id:"installation-1",children:"Installation"}),"\n",(0,t.jsx)(n.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Linkwarden has a pretty minimal hardware requirements - it was tested on a 2gb VPS and it ran pretty smoothly, the most intense part is when you build the app, but once it's running it's relatively lightweight."}),"\n",(0,t.jsx)(n.h3,{id:"docker-",children:"Docker \ud83d\udc0b"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Requirements:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docker"}),"\n",(0,t.jsx)(n.li,{children:"Git"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"1-clone-the-linkwarden-repository",children:"1. Clone the Linkwarden repository"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ git clone https://github.com/linkwarden/linkwarden.git\n$ cd linkwarden\n"})}),"\n",(0,t.jsx)(n.h4,{id:"2-configure-the-environment-variables",children:"2. Configure the Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Inside the ",(0,t.jsx)(n.code,{children:"/linkwarden"})," folder, create a file named ",(0,t.jsx)(n.code,{children:".env"}),", open it and paste the following text inside it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"NEXTAUTH_SECRET=VERY_SENSITIVE_SECRET\nNEXTAUTH_URL=http://localhost:3000/api/v1/auth\nPOSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The only thing you ",(0,t.jsx)(n.strong,{children:"MUST"})," change here is ",(0,t.jsx)(n.code,{children:"YOUR_POSTGRES_PASSWORD"})," and ",(0,t.jsx)(n.code,{children:"VERY_SENSITIVE_SECRET"}),", they both should be different secret phrases."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"NEXTAUTH_URL"})," should be changed to your domain name ",(0,t.jsx)(n.em,{children:"only if you are hosting it somewhere else"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"3-run-it",children:"3. Run it!"}),"\n",(0,t.jsx)(n.p,{children:"In the main folder (where you create the .env file) simply run the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ docker compose up\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After a few minutes (depending on your internet connection) you can access Linkwarden via ",(0,t.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," (or whichever hostname you deployed Linkwarden on)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Enjoy!"})}),"\n",(0,t.jsx)(n.h3,{id:"manual-installation",children:"Manual Installation"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The Manual Installation is targeted towards a more technical audience, to take a easier path, go for installation using ",(0,t.jsx)(n.a,{href:"/self-hosting/installation#docker-",children:"Docker"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Requirements:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Git"}),"\n",(0,t.jsx)(n.li,{children:"Node.js"}),"\n",(0,t.jsx)(n.li,{children:"Yarn"}),"\n",(0,t.jsx)(n.li,{children:"Postgres"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Y2Z/monolith",children:"Monolith"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"1-clone-the-linkwarden-repository-1",children:"1. Clone the Linkwarden repository"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ git clone https://github.com/linkwarden/linkwarden.git\n$ cd linkwarden\n"})}),"\n",(0,t.jsx)(n.h4,{id:"2-install-the-necessary-dependancies",children:"2. Install the necessary dependancies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ yarn\n$ npx playwright install-deps\n"})}),"\n",(0,t.jsx)(n.h4,{id:"3-configure-the-environment-variables",children:"3. Configure the Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Inside the ",(0,t.jsx)(n.code,{children:"/linkwarden"})," folder, create a file named ",(0,t.jsx)(n.code,{children:".env"}),", open it and paste the following text inside it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"NEXTAUTH_SECRET=VERY_SENSITIVE_SECRET\nNEXTAUTH_URL=http://localhost:3000/api/v1/auth\nDATABASE_URL=postgresql://[USERNAME]:[PASSWORD]@localhost:[PORT]/[DATABASE]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The only thing you ",(0,t.jsx)(n.strong,{children:"MUST"})," change here is ",(0,t.jsx)(n.code,{children:"VERY_SENSITIVE_SECRET"})," and ",(0,t.jsx)(n.code,{children:"DATABASE_URL"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"NEXTAUTH_URL"})," should be changed to your domain name ",(0,t.jsx)(n.em,{children:"only if you are hosting it somewhere else"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"4-build-and-setup-the-database",children:"4. Build and setup the database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ yarn build\n$ yarn prisma migrate deploy\n"})}),"\n",(0,t.jsx)(n.h4,{id:"5-start-the-app",children:"5. Start the app:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ yarn start\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(7294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);