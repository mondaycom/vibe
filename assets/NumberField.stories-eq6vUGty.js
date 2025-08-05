import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as t}from"./index-Hemj67b4.js";import{N as a}from"./NumberField-BaXhrf0Z.js";import{F as m}from"./Flex-BwTwg4EO.js";import{g as p}from"./Workspace-BIJf5qCK.js";import{c as M}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const v=M({component:a,actionPropsArray:["onChange"],iconPropNamesArray:["leftIcon"]}),L={title:"Components/NumberField",component:a,argTypes:v.argTypes,decorators:v.decorators},i={render:n=>{const[r,s]=t.useState(n.value||0);return e.jsx("div",{style:{width:300},children:e.jsx(a,{...n,value:r,onChange:l=>s(l)})})},decorators:[],parameters:{docs:{liveEdit:{enabled:!1}}}},o={render:()=>{const[n,r]=t.useState(2),[s,l]=t.useState(2),[g,V]=t.useState(2);return e.jsxs(m,{gap:"medium",align:"start",children:[e.jsx(a,{id:"size-large",value:n,onChange:r,label:"Large",size:"large"}),e.jsx(a,{id:"size-medium",value:s,onChange:l,label:"Medium",size:"medium"}),e.jsx(a,{id:"size-small",value:g,onChange:V,label:"Small",size:"small"})]})}},u={render:()=>{const[n,r]=t.useState(10),[s,l]=t.useState(5);return e.jsxs(m,{direction:"column",gap:"medium",align:"start",children:[e.jsx(a,{id:"success-state",value:n,onChange:r,label:"Success State",success:!0,infoText:"This is a success message"}),e.jsx(a,{id:"error-state",value:s,onChange:l,label:"Error State",error:!0,infoText:"This is an error message"}),e.jsx(a,{id:"readonly-state",value:42,onChange:()=>{},label:"Read Only State",readOnly:!0,infoText:"Read-only field"}),e.jsx(a,{id:"disabled-state",value:5,onChange:()=>{},label:"Disabled State",disabled:!0,infoText:"Cannot edit when disabled"})]})}},d={render:()=>{const[n,r]=t.useState(50),[s,l]=t.useState(!0),g=h=>{r(h)},V=h=>{l(h)};return e.jsx(m,{direction:"column",gap:"medium",align:"start",style:{width:300},children:e.jsx(a,{id:"validation-example",value:n,onChange:g,onValidityChange:V,label:"Validation Example (Range: 0-100)",min:0,max:100,allowOutOfBounds:!0,success:s,error:!s,infoText:s?"Value is within valid range!":"Value is outside the valid range (0-100)"})})}},c={render:()=>{const[n,r]=t.useState(1),[s,l]=t.useState(100);return e.jsxs(m,{direction:"column",gap:"medium",align:"start",children:[e.jsx(a,{id:"with-icon",value:n,onChange:r,label:"With Icon",leftIcon:p}),e.jsx(a,{id:"with-info",value:s,onChange:l,label:"With Info Text",infoText:"You are doing great!"})]})},parameters:{docs:{liveEdit:{scope:{TextBig:p}}}}};var S,x,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || 0);
    return <div style={{
      width: 300
    }}>
        <NumberField {...args} value={value} onChange={newValue => setValue(newValue)} />
      </div>;
  },
  decorators: [],
  parameters: {
    docs: {
      liveEdit: {
        enabled: false
      }
    }
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,C,F;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [valueL, setValueL] = useState(2);
    const [valueM, setValueM] = useState(2);
    const [valueS, setValueS] = useState(2);
    return <Flex gap="medium" align="start">
        <NumberField id="size-large" value={valueL} onChange={setValueL} label="Large" size="large" />
        <NumberField id="size-medium" value={valueM} onChange={setValueM} label="Medium" size="medium" />
        <NumberField id="size-small" value={valueS} onChange={setValueS} label="Small" size="small" />
      </Flex>;
  }
}`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var y,T,j;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [successValue, setSuccessValue] = useState(10);
    const [errorValue, setErrorValue] = useState(5);
    return <Flex direction="column" gap="medium" align="start">
        <NumberField id="success-state" value={successValue} onChange={setSuccessValue} label="Success State" success infoText="This is a success message" />
        <NumberField id="error-state" value={errorValue} onChange={setErrorValue} label="Error State" error infoText="This is an error message" />
        <NumberField id="readonly-state" value={42} onChange={() => {}} label="Read Only State" readOnly infoText="Read-only field" />
        <NumberField id="disabled-state" value={5} onChange={() => {}} label="Disabled State" disabled infoText="Cannot edit when disabled" />
      </Flex>;
  }
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var w,N,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    const [isValid, setIsValid] = useState(true);
    const handleChange = (newValue: number) => {
      setValue(newValue);
    };
    const handleValidityChange = (valid: boolean) => {
      setIsValid(valid);
    };
    return <Flex direction="column" gap="medium" align="start" style={{
      width: 300
    }}>
        <NumberField id="validation-example" value={value} onChange={handleChange} onValidityChange={handleValidityChange} label="Validation Example (Range: 0-100)" min={0} max={100} allowOutOfBounds success={isValid} error={!isValid} infoText={isValid ? "Value is within valid range!" : "Value is outside the valid range (0-100)"} />
      </Flex>;
  }
}`,...(I=(N=d.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var z,E,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [iconValue, setIconValue] = useState(1);
    const [infoValue, setInfoValue] = useState(100);
    return <Flex direction="column" gap="medium" align="start">
        <NumberField id="with-icon" value={iconValue} onChange={setIconValue} label="With Icon" leftIcon={TextBig} />
        <NumberField id="with-info" value={infoValue} onChange={setInfoValue} label="With Info Text" infoText="You are doing great!" />
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          TextBig
        }
      }
    }
  }
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const R=["Overview","Sizes","States","Validation","Variants"],Y=Object.freeze(Object.defineProperty({__proto__:null,Overview:i,Sizes:o,States:u,Validation:d,Variants:c,__namedExportsOrder:R,default:L},Symbol.toStringTag,{value:"Module"}));export{Y as N,i as O,o as S,c as V,u as a,d as b};
