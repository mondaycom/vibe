import{R as e}from"./index-Hemj67b4.js";import{B as r,a as t}from"./BreadcrumbItem-DybSdVXO.js";import{i as a}from"./Workspace-BIJf5qCK.js";import{r as v}from"./createComponentTemplate-Y0VTmW_y.js";import{c as B}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const s=B({component:r,iconPropNamesArray:["icon"]}),w=v(r),E={title:"Components/BreadcrumbsBar/BreadcrumbItem",component:r,argTypes:s.argTypes,decorators:s.decorators,parameters:{docs:{liveEdit:{scope:{Workspace:a}}}}},n={render:w.bind({}),name:"Overview",args:{text:"Workspace",icon:a},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.createElement("div",{className:"monday-storybook-breadcrumb-item_column-wrapper"},e.createElement("div",{className:"monday-storybook-breadcrumb-item_row-wrapper"},e.createElement("span",null,"Link"),e.createElement(t,{type:"navigation"},e.createElement(r,{text:"Workspace",icon:a,link:"https://www.google.com"}))),e.createElement("div",{className:"monday-storybook-breadcrumb-item_row-wrapper"},e.createElement("span",null,"Function"),e.createElement(t,{type:"navigation"},e.createElement(r,{text:"Workspace",icon:a,onClick:()=>{alert("Hello")}}))),e.createElement("div",{className:"monday-storybook-breadcrumb-item_row-wrapper"},e.createElement("span",null,"Disabled"),e.createElement(t,{type:"indication"},e.createElement(r,{text:"Workspace",icon:a,disabled:!0}))),e.createElement("div",{className:"monday-storybook-breadcrumb-item_row-wrapper"},e.createElement("span",null,"Current"),e.createElement(t,{type:"indication"},e.createElement(r,{text:"Workspace",icon:a,isCurrent:!0})))),name:"States"},c={render:()=>e.createElement("div",{className:"monday-storybook-breadcrumb-item_column-wrapper"},e.createElement("div",{className:"monday-storybook-breadcrumb-item_row-wrapper"},e.createElement("span",null,"With Icon"),e.createElement(t,{type:"indication"},e.createElement(r,{text:"Workspace",icon:a}))),e.createElement("div",{className:"monday-storybook-breadcrumb-item_row-wrapper"},e.createElement("span",null,"Without Icon"),e.createElement(t,{type:"indication"},e.createElement(r,{text:"Workspace"})))),name:"With icon"};var m,i,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,l,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(l=o.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var u,y,k;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const W=["Overview","States","WithIcon"],S=Object.freeze(Object.defineProperty({__proto__:null,Overview:n,States:o,WithIcon:c,__namedExportsOrder:W,default:E},Symbol.toStringTag,{value:"Module"}));export{S as B,n as O,o as S,c as W};
