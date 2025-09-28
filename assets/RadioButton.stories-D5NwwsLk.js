import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{r as u}from"./index-CTZeEbLr.js";import{R as o}from"./RadioButton-CF_9YP7A.js";import{i as E,a as P,c as F,d as N,e as a,j as q}from"./interactions-utils-ClDtON5t.js";import{B as O}from"./Button-BmfXCbqd.js";import{F as R}from"./Flex-Brm3wHG7.js";import{r as A}from"./createComponentTemplate-B08h-OOW.js";const D=100,i=(e,n)=>P(e,n).parentElement.firstChild.firstChild.checked,m=async e=>{const n=q(e,"button");await F(n),await N(D)},V=async e=>{const n=P(e,"I was mentioned");await F(n),await N(D),a(i(e,"I was mentioned")).toBe(!0)},p=async e=>{await a(i(e,"Radio 1")).toBe(!0),await m(e),await a(i(e,"Radio 1")).toBe(!1),await a(i(e,"Radio 2")).toBe(!0),await m(e),await a(i(e,"Radio 2")).toBe(!1),await a(i(e,"Radio 3")).toBe(!0),await m(e)},x=E({tests:[V]}),b=E({tests:[p]});try{p.displayName="controlRadioButton",p.__docgenInfo={description:"",displayName:"controlRadioButton",props:{}}}catch{}try{x.displayName="clickRadioButtonPlaySuite",x.__docgenInfo={description:"",displayName:"clickRadioButtonPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}try{b.displayName="controlRadioButtonPlaySuite",b.__docgenInfo={description:"",displayName:"controlRadioButtonPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const L=A(o),$={title:"Components/RadioButton",component:o},d={render:L.bind({}),args:{id:"overview-radio",text:"Selection"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>t.jsxs(R,{gap:"medium",children:[t.jsx(o,{id:"states-regular",text:"Regular"}),t.jsx(o,{id:"states-selected",text:"Selected",checked:!0}),t.jsx(o,{id:"states-disabled",text:"Disabled",disabled:!0,disabledReason:"Disabled reason"}),t.jsx(o,{id:"states-disabled-checked",text:"Disabled",checked:!0,disabled:!0})]})},s={render:()=>t.jsxs(R,{direction:"column",gap:"medium",align:"start",children:[t.jsx("div",{id:"inbox-view-label",children:"Inbox view options"}),t.jsx(o,{id:"inbox-updates",text:"Inbox updates",name:"radio-buttons-group-4",defaultChecked:!0}),t.jsx(o,{id:"was-mentioned",text:"I was mentioned",name:"radio-buttons-group-4"}),t.jsx(o,{id:"all-updates",text:"All updates",name:"radio-buttons-group-4"})]}),play:x,name:"Radio button in items list"},l={render:()=>{const[e,n]=u.useState(0),g=u.useCallback(()=>{n(T=>(T+1)%3)},[n]),c=u.useCallback(()=>{},[]);return t.jsxs(R,{direction:"column",gap:"medium",align:"start",children:[t.jsx("div",{id:"controlled-radio-label",children:"Controlled radio buttons"}),t.jsx(O,{id:"select-next-button",kind:"secondary",onClick:g,children:`Select next radio button (Radio ${(e+1)%3+1}) `}),t.jsx(o,{id:"radio-1",text:"Radio 1",name:"radio-buttons-group-5",checked:e===0,onSelect:c}),t.jsx(o,{id:"radio-2",text:"Radio 2",name:"radio-buttons-group-5",checked:e===1,onSelect:c}),t.jsx(o,{id:"radio-3",text:"Radio 3",name:"radio-buttons-group-5",checked:e===2,onSelect:c})]})},play:b,name:"Controlled Radio buttons"};var B,y,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: radioButtonTemplate.bind({}),
  args: {
    id: "overview-radio",
    text: "Selection"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,_,h;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <RadioButton id="states-regular" text="Regular" />
      <RadioButton id="states-selected" text="Selected" checked />
      <RadioButton id="states-disabled" text="Disabled" disabled disabledReason="Disabled reason" />
      <RadioButton id="states-disabled-checked" text="Disabled" checked disabled />
    </Flex>
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var C,w,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" align="start">
      <div id="inbox-view-label">Inbox view options</div>
      <RadioButton id="inbox-updates" text="Inbox updates" name="radio-buttons-group-4" defaultChecked />
      <RadioButton id="was-mentioned" text="I was mentioned" name="radio-buttons-group-4" />
      <RadioButton id="all-updates" text="All updates" name="radio-buttons-group-4" />
    </Flex>,
  play: clickRadioButtonPlaySuite,
  name: "Radio button in items list"
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var I,v,j;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const onClickCB = useCallback(() => {
      setSelectedIndex(prev => (prev + 1) % 3);
    }, [setSelectedIndex]);
    const onChange = useCallback(() => {}, []);
    return <Flex direction="column" gap="medium" align="start">
        <div id="controlled-radio-label">Controlled radio buttons</div>
        <Button id="select-next-button" kind="secondary" onClick={onClickCB}>{\`Select next radio button (Radio \${(selectedIndex + 1) % 3 + 1}) \`}</Button>
        <RadioButton id="radio-1" text="Radio 1" name="radio-buttons-group-5" checked={selectedIndex === 0} onSelect={onChange} />
        <RadioButton id="radio-2" text="Radio 2" name="radio-buttons-group-5" checked={selectedIndex === 1} onSelect={onChange} />
        <RadioButton id="radio-3" text="Radio 3" name="radio-buttons-group-5" checked={selectedIndex === 2} onSelect={onChange} />
      </Flex>;
  },
  play: controlRadioButtonPlaySuite,
  name: "Controlled Radio buttons"
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const z=["Overview","States","RadioButtonInItemsList","ControlledRadioButtons"],U=Object.freeze(Object.defineProperty({__proto__:null,ControlledRadioButtons:l,Overview:d,RadioButtonInItemsList:s,States:r,__namedExportsOrder:z,default:$},Symbol.toStringTag,{value:"Module"}));export{l as C,d as O,U as R,r as S,s as a};
