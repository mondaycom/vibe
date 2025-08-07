import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{L as n}from"./Link-CUWz9N70.js";import{C as r}from"./Checkbox-C1AXefu7.js";import{r as p}from"./createComponentTemplate-Y0VTmW_y.js";import{c as u}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const o=u({component:r,actionPropsArray:["onChange"]}),g=p(r),S={title:"Components/Checkbox",component:r,decorators:o.decorators,argTypes:o.argTypes},t={render:g.bind({}),args:{label:"Option",defaultChecked:!0,id:"checkbox-1"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Regular",id:"checkbox-2"}),e.jsx(r,{label:"Selected",checked:!0,id:"checkbox-3"}),e.jsx(r,{label:"Indeterminate",indeterminate:!0,id:"checkbox-4"}),e.jsx(r,{label:"Disabled",disabled:!0,id:"checkbox-5"}),e.jsx(r,{label:"Disabled checked",disabled:!0,checked:!0,id:"checkbox-6"}),e.jsx(r,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0,id:"checkbox-7"})]})},c={render:()=>e.jsx(r,{checked:!0,label:e.jsxs(e.Fragment,{children:["I agree to the ",e.jsx(n,{href:"#",text:"Terms of Service",inlineText:!0})," and"," ",e.jsx(n,{href:"#",text:"Privacy Policy",inlineText:!0}),"."]})}),name:"Single checkbox"};var i,s,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: checkboxTemplate.bind({}),
  args: {
    label: "Option",
    defaultChecked: true,
    id: "checkbox-1"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,b,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <>
      <Checkbox label="Regular" id="checkbox-2" />
      <Checkbox label="Selected" checked id="checkbox-3" />
      <Checkbox label="Indeterminate" indeterminate id="checkbox-4" />
      <Checkbox label="Disabled" disabled id="checkbox-5" />
      <Checkbox label="Disabled checked" disabled checked id="checkbox-6" />
      <Checkbox label="Disabled indeterminate" disabled indeterminate id="checkbox-7" />
    </>
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,m,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Checkbox checked label={<>
          I agree to the <Link href={"#"} text="Terms of Service" inlineText></Link> and{" "}
          <Link href={"#"} text="Privacy Policy" inlineText></Link>.
        </>} />,
  name: "Single checkbox"
}`,...(k=(m=c.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};const C=["Overview","States","SingleCheckbox"],O=Object.freeze(Object.defineProperty({__proto__:null,Overview:t,SingleCheckbox:c,States:a,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{O as C,t as O,a as S,c as a};
