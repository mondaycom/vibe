import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{L as s}from"./Link-BU7s9Y2d.js";import{C as r}from"./Checkbox-D94AFM10.js";import{r as k}from"./createComponentTemplate-Y0VTmW_y.js";import{c as u}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const o=u({component:r,actionPropsArray:["onChange"]}),g=k(r),S={title:"Components/Checkbox",component:r,decorators:o.decorators,argTypes:o.argTypes},t={render:g.bind({}),args:{label:"Option",defaultChecked:!0},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Regular"}),e.jsx(r,{label:"Selected",checked:!0}),e.jsx(r,{label:"Indeterminate",indeterminate:!0}),e.jsx(r,{label:"Disabled",disabled:!0}),e.jsx(r,{label:"Disabled checked",disabled:!0,checked:!0}),e.jsx(r,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0})]})},n={render:()=>e.jsx(r,{checked:!0,label:e.jsxs(e.Fragment,{children:["I agree to the ",e.jsx(s,{href:"#",text:"Terms of Service",inlineText:!0})," and"," ",e.jsx(s,{href:"#",text:"Privacy Policy",inlineText:!0}),"."]})}),name:"Single checkbox"};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: checkboxTemplate.bind({}),
  args: {
    label: "Option",
    defaultChecked: true
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,b,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <Checkbox label="Regular" />
      <Checkbox label="Selected" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </>
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var x,h,p;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Checkbox checked label={<>
          I agree to the <Link href={"#"} text="Terms of Service" inlineText></Link> and{" "}
          <Link href={"#"} text="Privacy Policy" inlineText></Link>.
        </>} />,
  name: "Single checkbox"
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const C=["Overview","States","SingleCheckbox"],O=Object.freeze(Object.defineProperty({__proto__:null,Overview:t,SingleCheckbox:n,States:a,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{O as C,t as O,a as S,n as a};
