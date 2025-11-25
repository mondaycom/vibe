import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as j}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{T as a}from"./TextArea-i22eT_Z4.js";import{r as w}from"./createComponentTemplate-B08h-OOW.js";const o=j({component:a}),y={title:"Components/TextArea",component:a,argTypes:o.argTypes,decorators:o.decorators},v=i=>e.jsx("div",{style:{width:300},children:e.jsx(i,{})}),z=i=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",gap:"16px",width:"100%"},children:e.jsx(i,{})}),A=w(a),r={render:A.bind({}),args:{id:"overview-textarea","aria-label":"Overview text area",label:"Text area label",helpText:"Helper text"},parameters:{docs:{liveEdit:{isEnabled:!1}}},decorators:[v]},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"sizes-large","aria-label":"Large text area",size:"large",label:"Large text area"}),e.jsx(a,{id:"sizes-small","aria-label":"Small text area",size:"small",label:"Small text area"})]}),decorators:[z]},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"states-success","aria-label":"Success text area",size:"small",label:"Success state",success:!0}),e.jsx(a,{id:"states-error","aria-label":"Error text area",size:"small",label:"Error state",error:!0}),e.jsx(a,{id:"states-disabled","aria-label":"Disabled text area",size:"small",label:"Disabled state",disabled:!0}),e.jsx(a,{id:"states-readonly","aria-label":"Read only text area",size:"small",label:"Read only state",readOnly:!0})]}),decorators:[z]},l={render:()=>e.jsx(a,{id:"validation-textarea","aria-label":"Text area with validation",size:"small",label:"Text area label",error:!0,required:!0,helpText:"Validation text"}),decorators:[v]};var d,n,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: textAreaTemplate.bind({}),
  args: {
    id: "overview-textarea",
    "aria-label": "Overview text area",
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var x,m,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <>
      <TextArea id="sizes-large" aria-label="Large text area" size="large" label="Large text area" />
      <TextArea id="sizes-small" aria-label="Small text area" size="small" label="Small text area" />
    </>,
  decorators: [withGrid]
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,u,T;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <>
      <TextArea id="states-success" aria-label="Success text area" size="small" label="Success state" success />
      <TextArea id="states-error" aria-label="Error text area" size="small" label="Error state" error />
      <TextArea id="states-disabled" aria-label="Disabled text area" size="small" label="Disabled state" disabled />
      <TextArea id="states-readonly" aria-label="Read only text area" size="small" label="Read only state" readOnly />
    </>,
  decorators: [withGrid]
}`,...(T=(u=s.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var g,S,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <TextArea id="validation-textarea" aria-label="Text area with validation" size="small" label="Text area label" error required helpText="Validation text" />,
  decorators: [withFixedWidth]
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const E=["Overview","Sizes","States","Validation"],F=Object.freeze(Object.defineProperty({__proto__:null,Overview:r,Sizes:t,States:s,Validation:l,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{r as O,t as S,F as T,l as V,s as a};
