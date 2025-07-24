import{R as e}from"./index-Hemj67b4.js";import{T as r}from"./TextArea-DaHdiZXn.js";import{r as A}from"./createComponentTemplate-Y0VTmW_y.js";import{c as y}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const n=y({component:r}),w={title:"Components/TextArea",component:r,argTypes:n.argTypes,decorators:n.decorators},z=o=>e.createElement("div",{style:{width:300}},e.createElement(o,null)),h=o=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",gap:"16px",width:"100%"}},e.createElement(o,null)),f=A(r),a={render:f.bind({}),args:{label:"Text area label",helpText:"Helper text"},parameters:{docs:{liveEdit:{isEnabled:!1}}},decorators:[z]},t={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{size:"large",label:"Large text area"}),e.createElement(r,{size:"small",label:"Small text area"})),decorators:[h]},s={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{size:"small",label:"Success state",success:!0}),e.createElement(r,{size:"small",label:"Error state",error:!0}),e.createElement(r,{size:"small",label:"Disabled state",disabled:!0}),e.createElement(r,{size:"small",label:"Read only state",readOnly:!0})),decorators:[h]},l={render:()=>e.createElement(r,{size:"small",label:"Text area label",error:!0,required:!0,helpText:"Validation text"}),decorators:[z]};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: textAreaTemplate.bind({}),
  args: {
    label: "Text area label",
    helpText: "Helper text"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  },
  decorators: [withFixedWidth]
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <>
      <TextArea size="large" label="Large text area" />
      <TextArea size="small" label="Small text area" />
    </>,
  decorators: [withGrid]
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,b,T;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <TextArea size="small" label="Success state" success />
      <TextArea size="small" label="Error state" error />
      <TextArea size="small" label="Disabled state" disabled />
      <TextArea size="small" label="Read only state" readOnly />
    </>,
  decorators: [withGrid]
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var g,E,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <TextArea size="small" label="Text area label" error required helpText="Validation text" />,
  decorators: [withFixedWidth]
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const v=["Overview","Sizes","States","Validation"],R=Object.freeze(Object.defineProperty({__proto__:null,Overview:a,Sizes:t,States:s,Validation:l,__namedExportsOrder:v,default:w},Symbol.toStringTag,{value:"Module"}));export{a as O,t as S,R as T,l as V,s as a};
