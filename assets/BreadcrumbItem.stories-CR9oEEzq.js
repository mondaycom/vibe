import{j as r}from"./jsx-runtime-lwGtIXvq.js";import{c as k}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{i as a}from"./Workspace-CefzN9Lt.js";import{B as e,a as n}from"./BreadcrumbItem-C7-4QTUT.js";import{r as v}from"./createComponentTemplate-B08h-OOW.js";const c=k({component:e,iconPropNamesArray:["icon"]}),B=v(e),w={title:"Components/BreadcrumbsBar/BreadcrumbItem",component:e,argTypes:c.argTypes,decorators:c.decorators,parameters:{docs:{liveEdit:{scope:{Workspace:a}}}}},s={render:B.bind({}),name:"Overview",args:{text:"Workspace",icon:a},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>r.jsxs("div",{className:"monday-storybook-breadcrumb-item_column-wrapper",children:[r.jsxs("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[r.jsx("span",{children:"Link"}),r.jsx(n,{type:"navigation",children:r.jsx(e,{text:"Workspace",icon:a,link:"https://www.google.com"})})]}),r.jsxs("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[r.jsx("span",{children:"Function"}),r.jsx(n,{type:"navigation",children:r.jsx(e,{text:"Workspace",icon:a,onClick:()=>{alert("Hello")}})})]}),r.jsxs("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[r.jsx("span",{children:"Disabled"}),r.jsx(n,{type:"indication",children:r.jsx(e,{text:"Workspace",icon:a,disabled:!0})})]}),r.jsxs("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[r.jsx("span",{children:"Current"}),r.jsx(n,{type:"indication",children:r.jsx(e,{text:"Workspace",icon:a,isCurrent:!0})})]})]}),name:"States"},t={render:()=>r.jsxs("div",{className:"monday-storybook-breadcrumb-item_column-wrapper",children:[r.jsxs("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[r.jsx("span",{children:"With Icon"}),r.jsx(n,{type:"indication",children:r.jsx(e,{text:"Workspace",icon:a})})]}),r.jsxs("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[r.jsx("span",{children:"Without Icon"}),r.jsx(n,{type:"indication",children:r.jsx(e,{text:"Workspace"})})]})]}),name:"With icon"};var i,m,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: breadcrumbItemTemplate.bind({}),
  name: "Overview",
  args: {
    text: "Workspace",
    icon: Workspace
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,b,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="monday-storybook-breadcrumb-item_column-wrapper">
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Link</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="Workspace" icon={Workspace} link="https://www.google.com" />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Function</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="Workspace" icon={Workspace} onClick={() => {
          alert("Hello");
        }} />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Disabled</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" icon={Workspace} disabled />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Current</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />
        </BreadcrumbsBar>
      </div>
    </div>,
  name: "States"
}`,...(l=(b=o.parameters)==null?void 0:b.docs)==null?void 0:l.source}}};var u,y,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="monday-storybook-breadcrumb-item_column-wrapper">
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>With Icon</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" icon={Workspace} />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Without Icon</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" />
        </BreadcrumbsBar>
      </div>
    </div>,
  name: "With icon"
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const h=["Overview","States","WithIcon"],N=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,States:o,WithIcon:t,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{N as B,s as O,o as S,t as W};
