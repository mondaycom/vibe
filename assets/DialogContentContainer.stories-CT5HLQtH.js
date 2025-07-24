import{R as o}from"./index-Hemj67b4.js";import{D as a}from"./DialogContentContainer-BmCeWtAc.js";import{B as t}from"./Box-DnEG61CI.js";import{r as v}from"./createComponentTemplate-Y0VTmW_y.js";import{c as D}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const i=D({component:a,ignoreControlsPropNamesArray:["children"]}),f=v(a),y={title:"Components/DialogContentContainer",component:a,argTypes:i.argTypes,decorators:i.decorators},e={render:f.bind({}),name:"Overview",args:{children:o.createElement(t,{margin:"medium",padding:"medium"})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>o.createElement(a,{type:"popover"},o.createElement(t,{margin:"medium",padding:"medium"}))},n={render:()=>o.createElement(a,{type:"modal"},o.createElement(t,{margin:"medium",padding:"medium"}))};var m,s,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: dialogContentContainerTemplate.bind({}),
  name: "Overview",
  args: {
    children: <Box margin="medium" padding="medium" />
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DialogContentContainer type="popover">
      <Box margin="medium" padding="medium" />
    </DialogContentContainer>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,u,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DialogContentContainer type="modal">
      <Box margin="medium" padding="medium" />
    </DialogContentContainer>
}`,...(C=(u=n.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const E=["Overview","Popover","Modal"],B=Object.freeze(Object.defineProperty({__proto__:null,Modal:n,Overview:e,Popover:r,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{B as D,n as M,e as O,r as P};
