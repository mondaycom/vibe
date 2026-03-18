import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{r as D}from"./index-CTZeEbLr.js";import{u}from"./index-BHzG1aTI.js";const S={title:"Hooks/useDebounceEvent"},a={render:()=>{const{inputValue:e,onEventChanged:n}=u({delay:100,onChange:()=>{}});return t.jsx("input",{type:"text",value:e,onChange:n})},name:"Overview"},r={render:()=>{const{inputValue:e,onEventChanged:n}=u({initialStateValue:"bla bla bla",onChange:()=>{}});return t.jsx("input",{type:"text",value:e,onChange:n})},name:"Passing an initial value"},s={render:()=>{const[e,n]=D.useState(0),{inputValue:x,onEventChanged:V}=u({onChange:y=>n(y.length)});return t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:x,onChange:V}),t.jsxs("span",{children:["Input has ",e," characters"]})]})},name:"Passing an `onChange` handler"},o={render:()=>{const{inputValue:e,onEventChanged:n}=u({trim:!0,onChange:()=>{}});return t.jsx("input",{type:"text",value:e,onChange:n})},name:"With trim"};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,g,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var d,v,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(v=s.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var C,E,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(E=o.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const j=["Overview","PassingAnInitialValue","PassingAnOnChangeHandler","WithTrim"],f=Object.freeze(Object.defineProperty({__proto__:null,Overview:a,PassingAnInitialValue:r,PassingAnOnChangeHandler:s,WithTrim:o,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{a as O,r as P,f as U,o as W,s as a};
