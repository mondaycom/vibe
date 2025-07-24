import{R as e}from"./index-Hemj67b4.js";import{L as c}from"./Link-Dyeh7tHW.js";import{C as r}from"./Checkbox-BOnRnDL3.js";import{r as u}from"./createComponentTemplate-Y0VTmW_y.js";import{c as x}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const l=x({component:r,actionPropsArray:["onChange"]}),g=u(r),S={title:"Components/Checkbox",component:r,decorators:l.decorators,argTypes:l.argTypes},t={render:g.bind({}),args:{label:"Option",defaultChecked:!0},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{label:"Regular"}),e.createElement(r,{label:"Selected",checked:!0}),e.createElement(r,{label:"Indeterminate",indeterminate:!0}),e.createElement(r,{label:"Disabled",disabled:!0}),e.createElement(r,{label:"Disabled checked",disabled:!0,checked:!0}),e.createElement(r,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0}))},n={render:()=>e.createElement(r,{checked:!0,label:e.createElement(e.Fragment,null,"I agree to the ",e.createElement(c,{href:"#",text:"Terms of Service",inlineText:!0})," and"," ",e.createElement(c,{href:"#",text:"Privacy Policy",inlineText:!0}),".")}),name:"Single checkbox"};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,m,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <Checkbox label="Regular" />
      <Checkbox label="Selected" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </>
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,p,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Checkbox checked label={<>
          I agree to the <Link href={"#"} text="Terms of Service" inlineText></Link> and{" "}
          <Link href={"#"} text="Privacy Policy" inlineText></Link>.
        </>} />,
  name: "Single checkbox"
}`,...(k=(p=n.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const C=["Overview","States","SingleCheckbox"],O=Object.freeze(Object.defineProperty({__proto__:null,Overview:t,SingleCheckbox:n,States:a,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{O as C,t as O,a as S,n as a};
