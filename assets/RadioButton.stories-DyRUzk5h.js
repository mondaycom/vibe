import{j as t}from"./jsx-runtime-DDzbWKUH.js";import{r as u}from"./index-Hemj67b4.js";import{R as o}from"./RadioButton-B8P6Rqz0.js";import{i as E,a as P,c as F,d as N,e as a,j as q}from"./interactions-utils-BNrKOnHl.js";import{B as O}from"./Button-CyE8V2PM.js";import{F as b}from"./Flex-2Q04fxOc.js";import{r as A}from"./createComponentTemplate-Y0VTmW_y.js";const D=100,r=(e,n)=>P(e,n).parentElement.firstChild.firstChild.checked,m=async e=>{const n=q(e,"button");await F(n),await N(D)},V=async e=>{const n=P(e,"I was mentioned");await F(n),await N(D),a(r(e,"I was mentioned")).toBe(!0)},p=async e=>{await a(r(e,"Radio 1")).toBe(!0),await m(e),await a(r(e,"Radio 1")).toBe(!1),await a(r(e,"Radio 2")).toBe(!0),await m(e),await a(r(e,"Radio 2")).toBe(!1),await a(r(e,"Radio 3")).toBe(!0),await m(e)},x=E({tests:[V]}),R=E({tests:[p]});try{p.displayName="controlRadioButton",p.__docgenInfo={description:"",displayName:"controlRadioButton",props:{}}}catch{}try{x.displayName="clickRadioButtonPlaySuite",x.__docgenInfo={description:"",displayName:"clickRadioButtonPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}try{R.displayName="controlRadioButtonPlaySuite",R.__docgenInfo={description:"",displayName:"controlRadioButtonPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const L=A(o),$={title:"Components/RadioButton",component:o},i={render:L.bind({}),args:{text:"Selection"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>t.jsxs(b,{gap:"medium",children:[t.jsx(o,{text:"Regular"}),t.jsx(o,{text:"Selected",checked:!0}),t.jsx(o,{text:"Disabled",disabled:!0,disabledReason:"Disabled reason"}),t.jsx(o,{text:"Disabled",checked:!0,disabled:!0})]})},s={render:()=>t.jsxs(b,{direction:"column",gap:"medium",align:"start",children:[t.jsx("div",{children:"Inbox view options"}),t.jsx(o,{text:"Inbox updates",name:"radio-buttons-group-4",defaultChecked:!0}),t.jsx(o,{text:"I was mentioned",name:"radio-buttons-group-4"}),t.jsx(o,{text:"All updates",name:"radio-buttons-group-4"})]}),play:x,name:"Radio button in items list"},l={render:()=>{const[e,n]=u.useState(0),g=u.useCallback(()=>{n(T=>(T+1)%3)},[n]),c=u.useCallback(()=>{},[]);return t.jsxs(b,{direction:"column",gap:"medium",align:"start",children:[t.jsx("div",{children:"Controlled radio buttons"}),t.jsx(O,{kind:"secondary",onClick:g,children:`Select next radio button (Radio ${(e+1)%3+1}) `}),t.jsx(o,{text:"Radio 1",name:"radio-buttons-group-5",checked:e===0,onSelect:c}),t.jsx(o,{text:"Radio 2",name:"radio-buttons-group-5",checked:e===1,onSelect:c}),t.jsx(o,{text:"Radio 3",name:"radio-buttons-group-5",checked:e===2,onSelect:c})]})},play:R,name:"Controlled Radio buttons"};var B,y,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: radioButtonTemplate.bind({}),
  args: {
    text: "Selection"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,_,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <RadioButton text="Regular" />
      <RadioButton text="Selected" checked />
      <RadioButton text="Disabled" disabled disabledReason="Disabled reason" />
      <RadioButton text="Disabled" checked disabled />
    </Flex>
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var h,f,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" align="start">
      <div>Inbox view options</div>
      <RadioButton text="Inbox updates" name="radio-buttons-group-4" defaultChecked />
      <RadioButton text="I was mentioned" name="radio-buttons-group-4" />
      <RadioButton text="All updates" name="radio-buttons-group-4" />
    </Flex>,
  play: clickRadioButtonPlaySuite,
  name: "Radio button in items list"
}`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var w,j,v;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const onClickCB = useCallback(() => {
      setSelectedIndex(prev => (prev + 1) % 3);
    }, [setSelectedIndex]);
    const onChange = useCallback(() => {}, []);
    return <Flex direction="column" gap="medium" align="start">
        <div>Controlled radio buttons</div>
        <Button kind="secondary" onClick={onClickCB}>{\`Select next radio button (Radio \${(selectedIndex + 1) % 3 + 1}) \`}</Button>
        <RadioButton text="Radio 1" name="radio-buttons-group-5" checked={selectedIndex === 0} onSelect={onChange} />
        <RadioButton text="Radio 2" name="radio-buttons-group-5" checked={selectedIndex === 1} onSelect={onChange} />
        <RadioButton text="Radio 3" name="radio-buttons-group-5" checked={selectedIndex === 2} onSelect={onChange} />
      </Flex>;
  },
  play: controlRadioButtonPlaySuite,
  name: "Controlled Radio buttons"
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const z=["Overview","States","RadioButtonInItemsList","ControlledRadioButtons"],U=Object.freeze(Object.defineProperty({__proto__:null,ControlledRadioButtons:l,Overview:i,RadioButtonInItemsList:s,States:d,__namedExportsOrder:z,default:$},Symbol.toStringTag,{value:"Module"}));export{l as C,i as O,U as R,d as S,s as a};
