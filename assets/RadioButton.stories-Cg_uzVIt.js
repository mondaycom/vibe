import{R as t,r as u}from"./index-Hemj67b4.js";import{R as o}from"./RadioButton-0tmJ0Z1t.js";import{i as P,a as F,c as N,d as D,e as a,j as O}from"./interactions-utils-DlKgNicw.js";import{B as A}from"./Button-t0_MS1N7.js";import{F as g}from"./Flex-pz2uwxlA.js";import{r as V}from"./createComponentTemplate-Y0VTmW_y.js";const T=100,r=(e,n)=>F(e,n).parentElement.firstChild.firstChild.checked,m=async e=>{const n=O(e,"button");await N(n),await D(T)},j=async e=>{const n=F(e,"I was mentioned");await N(n),await D(T),a(r(e,"I was mentioned")).toBe(!0)},p=async e=>{await a(r(e,"Radio 1")).toBe(!0),await m(e),await a(r(e,"Radio 1")).toBe(!1),await a(r(e,"Radio 2")).toBe(!0),await m(e),await a(r(e,"Radio 2")).toBe(!1),await a(r(e,"Radio 3")).toBe(!0),await m(e)},R=P({tests:[j]}),b=P({tests:[p]});try{p.displayName="controlRadioButton",p.__docgenInfo={description:"",displayName:"controlRadioButton",props:{}}}catch{}try{R.displayName="clickRadioButtonPlaySuite",R.__docgenInfo={description:"",displayName:"clickRadioButtonPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}try{b.displayName="controlRadioButtonPlaySuite",b.__docgenInfo={description:"",displayName:"controlRadioButtonPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const L=V(o),$={title:"Components/RadioButton",component:o},i={render:L.bind({}),args:{text:"Selection"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>t.createElement(g,{gap:"medium"},t.createElement(o,{text:"Regular"}),t.createElement(o,{text:"Selected",checked:!0}),t.createElement(o,{text:"Disabled",disabled:!0,disabledReason:"Disabled reason"}),t.createElement(o,{text:"Disabled",checked:!0,disabled:!0}))},s={render:()=>t.createElement(g,{direction:"column",gap:"medium",align:"start"},t.createElement("div",null,"Inbox view options"),t.createElement(o,{text:"Inbox updates",name:"radio-buttons-group-4",defaultChecked:!0}),t.createElement(o,{text:"I was mentioned",name:"radio-buttons-group-4"}),t.createElement(o,{text:"All updates",name:"radio-buttons-group-4"})),play:R,name:"Radio button in items list"},l={render:()=>{const[e,n]=u.useState(0),x=u.useCallback(()=>{n(q=>(q+1)%3)},[n]),c=u.useCallback(()=>{},[]);return t.createElement(g,{direction:"column",gap:"medium",align:"start"},t.createElement("div",null,"Controlled radio buttons"),t.createElement(A,{kind:"secondary",onClick:x},`Select next radio button (Radio ${(e+1)%3+1}) `),t.createElement(o,{text:"Radio 1",name:"radio-buttons-group-5",checked:e===0,onSelect:c}),t.createElement(o,{text:"Radio 2",name:"radio-buttons-group-5",checked:e===1,onSelect:c}),t.createElement(o,{text:"Radio 3",name:"radio-buttons-group-5",checked:e===2,onSelect:c}))},play:b,name:"Controlled Radio buttons"};var B,y,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var E,f,h;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" align="start">
      <div>Inbox view options</div>
      <RadioButton text="Inbox updates" name="radio-buttons-group-4" defaultChecked />
      <RadioButton text="I was mentioned" name="radio-buttons-group-4" />
      <RadioButton text="All updates" name="radio-buttons-group-4" />
    </Flex>,
  play: clickRadioButtonPlaySuite,
  name: "Radio button in items list"
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var I,w,v;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const z=["Overview","States","RadioButtonInItemsList","ControlledRadioButtons"],Q=Object.freeze(Object.defineProperty({__proto__:null,ControlledRadioButtons:l,Overview:i,RadioButtonInItemsList:s,States:d,__namedExportsOrder:z,default:$},Symbol.toStringTag,{value:"Module"}));export{l as C,i as O,Q as R,d as S,s as a};
