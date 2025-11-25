import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{r as u}from"./index-CTZeEbLr.js";import{i as y,a as v,c as E,d as F,e as a,j as T}from"./interactions-utils-CEzMMPBA.js";import{R as o}from"./RadioButton-D1mG-W3L.js";import{r as O}from"./createComponentTemplate-B08h-OOW.js";import{F as x}from"./Flex-Bimzf4jb.js";import{B as P}from"./Button-zprqw9Vf.js";const _=100,d=(e,n)=>v(e,n).parentElement.firstChild.firstChild.checked,m=async e=>{const n=T(e,"button");await E(n),await F(_)},A=async e=>{const n=v(e,"I was mentioned");await E(n),await F(_),a(d(e,"I was mentioned")).toBe(!0)},L=async e=>{await a(d(e,"Radio 1")).toBe(!0),await m(e),await a(d(e,"Radio 1")).toBe(!1),await a(d(e,"Radio 2")).toBe(!0),await m(e),await a(d(e,"Radio 2")).toBe(!1),await a(d(e,"Radio 3")).toBe(!0),await m(e)},N=y({tests:[A]}),$=y({tests:[L]}),z=O(o),G={title:"Components/RadioButton",component:o},i={render:z.bind({}),args:{id:"overview-radio",text:"Selection"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>t.jsxs(x,{gap:"medium",children:[t.jsx(o,{id:"states-regular",text:"Regular"}),t.jsx(o,{id:"states-selected",text:"Selected",checked:!0}),t.jsx(o,{id:"states-disabled",text:"Disabled",disabled:!0,disabledReason:"Disabled reason"}),t.jsx(o,{id:"states-disabled-checked",text:"Disabled",checked:!0,disabled:!0})]})},r={render:()=>t.jsxs(x,{direction:"column",gap:"medium",align:"start",children:[t.jsx("div",{id:"inbox-view-label",children:"Inbox view options"}),t.jsx(o,{id:"inbox-updates",text:"Inbox updates",name:"radio-buttons-group-4",defaultChecked:!0}),t.jsx(o,{id:"was-mentioned",text:"I was mentioned",name:"radio-buttons-group-4"}),t.jsx(o,{id:"all-updates",text:"All updates",name:"radio-buttons-group-4"})]}),play:N,name:"Radio button in items list"},l={render:()=>{const[e,n]=u.useState(0),p=u.useCallback(()=>{n(D=>(D+1)%3)},[n]),c=u.useCallback(()=>{},[]);return t.jsxs(x,{direction:"column",gap:"medium",align:"start",children:[t.jsx("div",{id:"controlled-radio-label",children:"Controlled radio buttons"}),t.jsx(P,{id:"select-next-button",kind:"secondary",onClick:p,children:`Select next radio button (Radio ${(e+1)%3+1}) `}),t.jsx(o,{id:"radio-1",text:"Radio 1",name:"radio-buttons-group-5",checked:e===0,onSelect:c}),t.jsx(o,{id:"radio-2",text:"Radio 2",name:"radio-buttons-group-5",checked:e===1,onSelect:c}),t.jsx(o,{id:"radio-3",text:"Radio 3",name:"radio-buttons-group-5",checked:e===2,onSelect:c})]})},play:$,name:"Controlled Radio buttons"};var b,R,B;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(R=i.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var g,S,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <RadioButton id="states-regular" text="Regular" />
      <RadioButton id="states-selected" text="Selected" checked />
      <RadioButton id="states-disabled" text="Disabled" disabled disabledReason="Disabled reason" />
      <RadioButton id="states-disabled-checked" text="Disabled" checked disabled />
    </Flex>
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,h,w;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" align="start">
      <div id="inbox-view-label">Inbox view options</div>
      <RadioButton id="inbox-updates" text="Inbox updates" name="radio-buttons-group-4" defaultChecked />
      <RadioButton id="was-mentioned" text="I was mentioned" name="radio-buttons-group-4" />
      <RadioButton id="all-updates" text="All updates" name="radio-buttons-group-4" />
    </Flex>,
  play: clickRadioButtonPlaySuite,
  name: "Radio button in items list"
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var I,j,f;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const H=["Overview","States","RadioButtonInItemsList","ControlledRadioButtons"],V=Object.freeze(Object.defineProperty({__proto__:null,ControlledRadioButtons:l,Overview:i,RadioButtonInItemsList:r,States:s,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{l as C,i as O,V as R,s as S,r as a};
