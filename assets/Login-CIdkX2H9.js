import{r as a,a as u,u as p,j as e}from"./index-Lp3Nj8Ml.js";import{N as x}from"./Navbar-0eXBLow4.js";import"./Logo-Btp3yCoH.js";const h="_login_1avtf_1",t={login:h};function f(){const[l,r]=a.useState("jack@example.com"),[i,c]=a.useState("qwerty"),n=u(),{login:d,isAuthenticated:o}=p(),m=s=>{s.preventDefault(),d(l,i)};return a.useEffect(()=>{o&&n("/worldWise/app",{replace:!0})},[o,n]),e.jsxs("div",{className:t.login,children:[e.jsx(x,{}),e.jsx("main",{className:" h-100 py-5",children:e.jsx("div",{className:"row h-100 m-0 py-5 justify-content-center align-items-center ",children:e.jsxs("form",{className:"col-11 col-sm-6 col-md-5 col-lg-4 d-flex flex-column gap-3 p-3  rounded-2",onSubmit:m,children:[e.jsxs("div",{className:t.row,children:[e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsx("input",{type:"email",id:"email",onChange:s=>r(s.target.value),value:l})]}),e.jsxs("div",{className:t.row,children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{type:"password",id:"password",onChange:s=>c(s.target.value),value:i})]}),e.jsx("div",{children:e.jsx("button",{className:"btn",children:"Login"})})]})})})]})}export{f as default};