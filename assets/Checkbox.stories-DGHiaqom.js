import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as p}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{C as a}from"./Checkbox-QIo2SsFb.js";import{r as u}from"./createComponentTemplate-B08h-OOW.js";import{L as t}from"./Link-CWZ1Cqal.js";const o=p({component:a,actionPropsArray:["onChange"]}),g=u(a),S={title:"Components/Checkbox",component:a,decorators:o.decorators,argTypes:o.argTypes},r={render:g.bind({}),args:{label:"Option",defaultChecked:!0,id:"checkbox-1","aria-label":"Checkbox option"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Regular",id:"checkbox-2","aria-label":"Regular checkbox"}),e.jsx(a,{label:"Selected",checked:!0,id:"checkbox-3","aria-label":"Selected checkbox"}),e.jsx(a,{label:"Indeterminate",indeterminate:!0,id:"checkbox-4","aria-label":"Indeterminate checkbox"}),e.jsx(a,{label:"Disabled",disabled:!0,id:"checkbox-5","aria-label":"Disabled checkbox"}),e.jsx(a,{label:"Disabled checked",disabled:!0,checked:!0,id:"checkbox-6","aria-label":"Disabled checked checkbox"}),e.jsx(a,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0,id:"checkbox-7","aria-label":"Disabled indeterminate checkbox"})]})},i={render:()=>e.jsx(a,{id:"single-checkbox","aria-label":"Agree to terms and privacy policy",checked:!0,label:e.jsxs(e.Fragment,{children:["I agree to the ",e.jsx(t,{href:"#",text:"Terms of Service",inlineText:!0})," and"," ",e.jsx(t,{href:"#",text:"Privacy Policy",inlineText:!0}),"."]})}),name:"Single checkbox"};var l,n,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: checkboxTemplate.bind({}),
  args: {
    label: "Option",
    defaultChecked: true,
    id: "checkbox-1",
    "aria-label": "Checkbox option"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var s,b,x;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <>
      <Checkbox label="Regular" id="checkbox-2" aria-label="Regular checkbox" />
      <Checkbox label="Selected" checked id="checkbox-3" aria-label="Selected checkbox" />
      <Checkbox label="Indeterminate" indeterminate id="checkbox-4" aria-label="Indeterminate checkbox" />
      <Checkbox label="Disabled" disabled id="checkbox-5" aria-label="Disabled checkbox" />
      <Checkbox label="Disabled checked" disabled checked id="checkbox-6" aria-label="Disabled checked checkbox" />
      <Checkbox label="Disabled indeterminate" disabled indeterminate id="checkbox-7" aria-label="Disabled indeterminate checkbox" />
    </>
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,k,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Checkbox id="single-checkbox" aria-label="Agree to terms and privacy policy" checked label={<>
          I agree to the <Link href={"#"} text="Terms of Service" inlineText></Link> and{" "}
          <Link href={"#"} text="Privacy Policy" inlineText></Link>.
        </>} />,
  name: "Single checkbox"
}`,...(m=(k=i.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};const C=["Overview","States","SingleCheckbox"],T=Object.freeze(Object.defineProperty({__proto__:null,Overview:r,SingleCheckbox:i,States:c,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{T as C,r as O,c as S,i as a};
