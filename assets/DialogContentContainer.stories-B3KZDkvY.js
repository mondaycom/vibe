import{j as o}from"./jsx-runtime-lwGtIXvq.js";import{c as v}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{r as x}from"./createComponentTemplate-B08h-OOW.js";import{D as a}from"./DialogContentContainer-BBTL4acN.js";import{B as t}from"./Box-BwRYjhPo.js";const i=v({component:a,ignoreControlsPropNamesArray:["children"]}),D=x(a),f={title:"Components/DialogContentContainer",component:a,argTypes:i.argTypes,decorators:i.decorators},e={render:D.bind({}),name:"Overview",args:{children:o.jsx(t,{margin:"medium",padding:"medium"})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>o.jsx(a,{type:"popover",children:o.jsx(t,{margin:"medium",padding:"medium"})})},n={render:()=>o.jsx(a,{type:"modal",children:o.jsx(t,{margin:"medium",padding:"medium"})})};var s,m,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DialogContentContainer type="popover">
      <Box margin="medium" padding="medium" />
    </DialogContentContainer>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,u,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DialogContentContainer type="modal">
      <Box margin="medium" padding="medium" />
    </DialogContentContainer>
}`,...(C=(u=n.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const y=["Overview","Popover","Modal"],E=Object.freeze(Object.defineProperty({__proto__:null,Modal:n,Overview:e,Popover:r,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{E as D,n as M,e as O,r as P};
