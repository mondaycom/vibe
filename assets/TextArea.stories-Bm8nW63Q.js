import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{T as r}from"./TextArea-H63bN3Wu.js";import{r as A}from"./createComponentTemplate-Y0VTmW_y.js";import{c as y}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const i=y({component:r}),w={title:"Components/TextArea",component:r,argTypes:i.argTypes,decorators:i.decorators},j=o=>e.jsx("div",{style:{width:300},children:e.jsx(o,{})}),z=o=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",gap:"16px",width:"100%"},children:e.jsx(o,{})}),f=A(r),a={render:f.bind({}),args:{label:"Text area label",helpText:"Helper text"},parameters:{docs:{liveEdit:{isEnabled:!1}}},decorators:[j]},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"large",label:"Large text area"}),e.jsx(r,{size:"small",label:"Small text area"})]}),decorators:[z]},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"small",label:"Success state",success:!0}),e.jsx(r,{size:"small",label:"Error state",error:!0}),e.jsx(r,{size:"small",label:"Disabled state",disabled:!0}),e.jsx(r,{size:"small",label:"Read only state",readOnly:!0})]}),decorators:[z]},l={render:()=>e.jsx(r,{size:"small",label:"Text area label",error:!0,required:!0,helpText:"Validation text"}),decorators:[j]};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,x,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <>
      <TextArea size="large" label="Large text area" />
      <TextArea size="small" label="Small text area" />
    </>,
  decorators: [withGrid]
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var b,u,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <>
      <TextArea size="small" label="Success state" success />
      <TextArea size="small" label="Error state" error />
      <TextArea size="small" label="Disabled state" disabled />
      <TextArea size="small" label="Read only state" readOnly />
    </>,
  decorators: [withGrid]
}`,...(T=(u=s.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var g,h,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <TextArea size="small" label="Text area label" error required helpText="Validation text" />,
  decorators: [withFixedWidth]
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const v=["Overview","Sizes","States","Validation"],V=Object.freeze(Object.defineProperty({__proto__:null,Overview:a,Sizes:t,States:s,Validation:l,__namedExportsOrder:v,default:w},Symbol.toStringTag,{value:"Module"}));export{a as O,t as S,V as T,l as V,s as a};
