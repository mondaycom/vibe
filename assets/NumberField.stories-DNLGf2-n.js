import{r as s,R as e}from"./index-Hemj67b4.js";import{N as a}from"./NumberField-BtwBQICZ.js";import{F as m}from"./Flex-DIvs4XZj.js";import{g as v}from"./Workspace-BIJf5qCK.js";import{c as L}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const S=L({component:a,actionPropsArray:["onChange"],iconPropNamesArray:["leftIcon"]}),R={title:"Components/NumberField",component:a,argTypes:S.argTypes,decorators:S.decorators},i={render:n=>{const[l,t]=s.useState(n.value||0);return e.createElement("div",{style:{width:300}},e.createElement(a,{...n,value:l,onChange:r=>t(r)}))},decorators:[],parameters:{docs:{liveEdit:{enabled:!1}}}},o={render:()=>{const[n,l]=s.useState(2),[t,r]=s.useState(2),[g,V]=s.useState(2);return e.createElement(m,{gap:"medium",align:"start"},e.createElement(a,{id:"size-large",value:n,onChange:l,label:"Large",size:"large"}),e.createElement(a,{id:"size-medium",value:t,onChange:r,label:"Medium",size:"medium"}),e.createElement(a,{id:"size-small",value:g,onChange:V,label:"Small",size:"small"}))}},u={render:()=>{const[n,l]=s.useState(10),[t,r]=s.useState(5);return e.createElement(m,{direction:"column",gap:"medium",align:"start"},e.createElement(a,{id:"success-state",value:n,onChange:l,label:"Success State",success:!0,infoText:"This is a success message"}),e.createElement(a,{id:"error-state",value:t,onChange:r,label:"Error State",error:!0,infoText:"This is an error message"}),e.createElement(a,{id:"readonly-state",value:42,onChange:()=>{},label:"Read Only State",readOnly:!0,infoText:"Read-only field"}),e.createElement(a,{id:"disabled-state",value:5,onChange:()=>{},label:"Disabled State",disabled:!0,infoText:"Cannot edit when disabled"}))}},d={render:()=>{const[n,l]=s.useState(50),[t,r]=s.useState(!0),g=h=>{l(h)},V=h=>{r(h)};return e.createElement(m,{direction:"column",gap:"medium",align:"start",style:{width:300}},e.createElement(a,{id:"validation-example",value:n,onChange:g,onValidityChange:V,label:"Validation Example (Range: 0-100)",min:0,max:100,allowOutOfBounds:!0,success:t,error:!t,infoText:t?"Value is within valid range!":"Value is outside the valid range (0-100)"}))}},c={render:()=>{const[n,l]=s.useState(1),[t,r]=s.useState(100);return e.createElement(m,{direction:"column",gap:"medium",align:"start"},e.createElement(a,{id:"with-icon",value:n,onChange:l,label:"With Icon",leftIcon:v}),e.createElement(a,{id:"with-info",value:t,onChange:r,label:"With Info Text",infoText:"You are doing great!"}))},parameters:{docs:{liveEdit:{scope:{TextBig:v}}}}};var p,b,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,C,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var F,y,T;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(y=u.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var w,N,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(N=d.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var z,O,M;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(O=c.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const _=["Overview","Sizes","States","Validation","Variants"],A=Object.freeze(Object.defineProperty({__proto__:null,Overview:i,Sizes:o,States:u,Validation:d,Variants:c,__namedExportsOrder:_,default:R},Symbol.toStringTag,{value:"Module"}));export{A as N,i as O,o as S,c as V,u as a,d as b};
