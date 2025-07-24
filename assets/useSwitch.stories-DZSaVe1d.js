import{R as e}from"./index-Hemj67b4.js";import{u as o}from"./index-DS1BdwZI.js";import{T as s}from"./Toggle-BdLLThVH.js";import{F as d}from"./Flex-pz2uwxlA.js";const f={title:"Hooks/useSwitch"},r={render:()=>{const{isChecked:n,onChange:t}=o();return e.createElement(d,{direction:"column",align:"start",gap:"medium"},e.createElement(s,{onChange:t,isSelected:n}),e.createElement("code",null,"isChecked: ",n.toString()))},name:"Overview"},c={render:()=>{const{isChecked:n,onChange:t}=o({isDisabled:!0});return e.createElement(d,{direction:"column",align:"start",gap:"medium"},e.createElement(s,{onChange:t,isSelected:n}),e.createElement("code",null,"isChecked: ",n.toString()))},name:"Disabled"},a={render:()=>{const{isChecked:t,onChange:p}=o({defaultChecked:!0});return e.createElement(d,{direction:"column",align:"start",gap:"medium"},e.createElement(s,{onChange:p,isSelected:t}),e.createElement("code",null,"isChecked ",t.toString()),e.createElement("code",null,"defaultChecked: ","true"))},name:"Default"};var i,l,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const {
      isChecked,
      onChange
    } = useSwitch();
    return <Flex direction="column" align="start" gap="medium">
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked: {isChecked.toString()}</code>
      </Flex>;
  },
  name: "Overview"
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,g,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const {
      isChecked,
      onChange
    } = useSwitch({
      isDisabled: true
    });
    return <Flex direction="column" align="start" gap="medium">
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked: {isChecked.toString()}</code>
      </Flex>;
  },
  name: "Disabled"
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,k,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const defaultChecked = true;
    const {
      isChecked,
      onChange
    } = useSwitch({
      defaultChecked
    });
    return <Flex direction="column" align="start" gap="medium">
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked {isChecked.toString()}</code>
        <code>defaultChecked: {defaultChecked.toString()}</code>
      </Flex>;
  },
  name: "Default"
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const w=["Overview","Disabled","Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:c,Overview:r,__namedExportsOrder:w,default:f},Symbol.toStringTag,{value:"Module"}));export{c as D,r as O,x as U,a};
