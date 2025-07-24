import{R as t,r as x}from"./index-Hemj67b4.js";import{u}from"./index-CxHVRCQs.js";const S={title:"Hooks/useDebounceEvent"},a={render:()=>{const{inputValue:e,onEventChanged:n}=u({delay:100,onChange:()=>{}});return t.createElement("input",{type:"text",value:e,onChange:n})},name:"Overview"},r={render:()=>{const{inputValue:e,onEventChanged:n}=u({initialStateValue:"bla bla bla",onChange:()=>{}});return t.createElement("input",{type:"text",value:e,onChange:n})},name:"Passing an initial value"},s={render:()=>{const[e,n]=x.useState(0),{inputValue:V,onEventChanged:y}=u({onChange:D=>n(D.length)});return t.createElement(t.Fragment,null,t.createElement("input",{type:"text",value:V,onChange:y}),t.createElement("span",null,"Input has ",e," characters"))},name:"Passing an `onChange` handler"},o={render:()=>{const{inputValue:e,onEventChanged:n}=u({trim:!0,onChange:()=>{}});return t.createElement("input",{type:"text",value:e,onChange:n})},name:"With trim"};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      inputValue,
      onEventChanged
    }: UseDebounceResult = useDebounceEvent({
      delay: 100,
      onChange: () => {}
    });
    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },
  name: "Overview"
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var g,p,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const {
      inputValue,
      onEventChanged
    }: UseDebounceResult = useDebounceEvent({
      initialStateValue: "bla bla bla",
      onChange: () => {}
    });
    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },
  name: "Passing an initial value"
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var d,m,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [length, setLength] = useState(0);
    const {
      inputValue,
      onEventChanged
    }: UseDebounceResult = useDebounceEvent({
      onChange: (value: string) => setLength(value.length)
    });
    return <>
        <input type="text" value={inputValue} onChange={onEventChanged} />
        <span>Input has {length} characters</span>
      </>;
  },
  name: "Passing an \`onChange\` handler"
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var C,E,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const {
      inputValue,
      onEventChanged
    }: UseDebounceResult = useDebounceEvent({
      trim: true,
      onChange: () => {}
    });
    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },
  name: "With trim"
}`,...(b=(E=o.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const O=["Overview","PassingAnInitialValue","PassingAnOnChangeHandler","WithTrim"],R=Object.freeze(Object.defineProperty({__proto__:null,Overview:a,PassingAnInitialValue:r,PassingAnOnChangeHandler:s,WithTrim:o,__namedExportsOrder:O,default:S},Symbol.toStringTag,{value:"Module"}));export{a as O,r as P,R as U,o as W,s as a};
