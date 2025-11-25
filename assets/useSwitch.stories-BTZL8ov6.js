import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{u as o}from"./index-Bgok7zfD.js";import{T as i}from"./Toggle-Dikc9REV.js";import{F as d}from"./Flex-Bimzf4jb.js";const x={title:"Hooks/useSwitch"},r={render:()=>{const{isChecked:n,onChange:s}=o();return e.jsxs(d,{direction:"column",align:"start",gap:"medium",children:[e.jsx(i,{onChange:s,isSelected:n}),e.jsxs("code",{children:["isChecked: ",n.toString()]})]})},name:"Overview"},t={render:()=>{const{isChecked:n,onChange:s}=o({isDisabled:!0});return e.jsxs(d,{direction:"column",align:"start",gap:"medium",children:[e.jsx(i,{onChange:s,isSelected:n}),e.jsxs("code",{children:["isChecked: ",n.toString()]})]})},name:"Disabled"},c={render:()=>{const{isChecked:s,onChange:S}=o({defaultChecked:!0});return e.jsxs(d,{direction:"column",align:"start",gap:"medium",children:[e.jsx(i,{onChange:S,isSelected:s}),e.jsxs("code",{children:["isChecked ",s.toString()]}),e.jsxs("code",{children:["defaultChecked: ","true"]})]})},name:"Default"};var a,l,u;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,m,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var C,k,p;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(p=(k=c.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const f=["Overview","Disabled","Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:t,Overview:r,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{t as D,r as O,v as U,c as a};
