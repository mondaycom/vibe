import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as t}from"./index-Hemj67b4.js";import{S as i}from"./Steps-BXyJ5FcK.js";import{T as w,a as z}from"./TipseenWizard-DOxIijAc.js";import{F as M}from"./Flex-2Q04fxOc.js";import{c as H}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const E=[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})],b=[{name:"preventOverflow",options:{mainAxis:!1}},{name:"flip",options:{fallbackPlacements:[]}}],U=()=>{const[o,n]=t.useState(2),r=t.useCallback(()=>{n(s=>s-1)},[]),p=t.useCallback(()=>{n(s=>s+1)},[]),c=t.useCallback((s,a)=>{n(a)},[]);return e.jsx(i,{type:"numbers",steps:E,activeStepIndex:o,onChangeActiveStep:c,backButtonProps:{onClick:r},nextButtonProps:{onClick:p},onFinish:()=>{}})},V=()=>{const[o,n]=t.useState(2),r=t.useCallback(()=>{n(s=>s-1)},[]),p=t.useCallback(()=>{n(s=>s+1)},[]),c=t.useCallback((s,a)=>{n(a)},[]);return e.jsx(i,{steps:E,activeStepIndex:o,onChangeActiveStep:c,backButtonProps:{onClick:r},nextButtonProps:{onClick:p},onFinish:()=>{}})},g=H({component:i,actionPropsArray:["onChangeActiveStep"]}),d=[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})],D={title:"Components/Steps",component:i,argTypes:g.argTypes,decorators:g.decorators,parameters:{docs:{liveEdit:{scope:{steps5:d}}}}},R=o=>{const[n,r]=t.useState(2),p=t.useCallback(()=>{r(a=>a-1)},[]),c=t.useCallback(()=>{r(a=>a+1)},[]),s=t.useCallback((a,S)=>{r(S)},[]);return e.jsx(i,{activeStepIndex:n,backButtonProps:{onClick:p},nextButtonProps:{onClick:c},...o,onChangeActiveStep:s,onFinish:()=>{}})},l={render:R.bind({}),name:"Overview",args:{steps:d},parameters:{docs:{liveEdit:{isEnabled:!1}}}},v={render:()=>e.jsxs(M,{direction:"column",gap:"medium",children:[e.jsx(i,{type:"numbers",steps:d,activeStepIndex:2}),e.jsx(i,{steps:d,activeStepIndex:2}),e.jsx("div",{style:{padding:"15px 103px 20px"},children:e.jsx(i,{steps:d,activeStepIndex:2,areNavigationButtonsHidden:!0})})]})},x={render:()=>e.jsxs(M,{direction:"column",gap:"medium",style:{padding:"var(--sb-spacing-small)",backgroundColor:"var(--sb-primary-color)"},children:[e.jsx(i,{steps:d,activeStepIndex:2,color:"on-primary-color",type:"numbers"}),e.jsx(i,{steps:d,activeStepIndex:2,color:"on-primary-color"}),e.jsx("div",{style:{padding:"15px 103px 20px"},children:e.jsx(i,{steps:d,activeStepIndex:2,color:"on-primary-color",areNavigationButtonsHidden:!0})})]})},m={render:()=>{const[o,n]=t.useState(2),r=t.useCallback(()=>{n(s=>s-1)},[]),p=t.useCallback(()=>{n(s=>s+1)},[]),c=t.useCallback((s,a)=>{n(a)},[]);return e.jsx("div",{children:e.jsx(i,{steps:d,isContentOnTop:!0,activeStepIndex:o,onChangeActiveStep:c,backButtonProps:{onClick:r},nextButtonProps:{onClick:p},onFinish:()=>{}})})}},u={render:()=>{const o=[e.jsx("div",{children:"Message number 1"}),e.jsx("div",{children:"Message number 2"}),e.jsx("div",{children:"Message number 3"}),e.jsx("div",{children:"Message number 4"}),e.jsx("div",{children:"Message number 5"})],[n,r]=t.useState(2),p=t.useCallback(()=>{r(a=>a-1)},[]),c=t.useCallback(()=>{r(a=>a+1)},[]),s=t.useCallback((a,S)=>{r(S)},[]);return e.jsx(w,{position:"right",modifiers:b,animationType:"opacity-and-slide",content:e.jsx(z,{title:"This is a title",steps:o,onChangeActiveStep:s,activeStepIndex:n,backButtonProps:{size:"small",onClick:p},nextButtonProps:{kind:"primary",size:"small",onClick:c},onFinish:()=>{}}),children:e.jsx("div",{style:{width:"10px",height:"150px"}})})},parameters:{docs:{liveEdit:{scope:{modifiers:b}}}}};var C,k,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: NavigableStepsTemplate.bind({}),
  name: "Overview",
  args: {
    steps: steps5
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var h,y,j;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium">
      <Steps type="numbers" steps={steps5} activeStepIndex={2} />
      <Steps steps={steps5} activeStepIndex={2} />
      <div style={{
      padding: "15px 103px 20px"
    }}>
        <Steps steps={steps5} activeStepIndex={2} areNavigationButtonsHidden />
      </div>
    </Flex>
}`,...(j=(y=v.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var A,P,T;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" style={{
    padding: "var(--sb-spacing-small)",
    backgroundColor: "var(--sb-primary-color)"
  }}>
      <Steps steps={steps5} activeStepIndex={2} color="on-primary-color" type="numbers" />
      <Steps steps={steps5} activeStepIndex={2} color="on-primary-color" />
      <div style={{
      padding: "15px 103px 20px"
    }}>
        <Steps steps={steps5} activeStepIndex={2} color="on-primary-color" areNavigationButtonsHidden />
      </div>
    </Flex>
}`,...(T=(P=x.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var f,N,B;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [activeStepIndex, setActiveStepIndex] = useState(2);
    const stepPrev = useCallback(() => {
      setActiveStepIndex(prevState => prevState - 1);
    }, []);
    const stepNext = useCallback(() => {
      setActiveStepIndex(prevState => prevState + 1);
    }, []);
    const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
      setActiveStepIndex(stepIndex);
    }, []);
    return <div>
        <Steps steps={steps5} isContentOnTop activeStepIndex={activeStepIndex} onChangeActiveStep={onChangeActiveStep} backButtonProps={{
        onClick: stepPrev
      }} nextButtonProps={{
        onClick: stepNext
      }} onFinish={() => {}} />
      </div>;
  }
}`,...(B=(N=m.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var _,F,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const steps = [<div>Message number 1</div>, <div>Message number 2</div>, <div>Message number 3</div>, <div>Message number 4</div>, <div>Message number 5</div>];
    const [activeStepIndex, setActiveStepIndex] = useState(2);
    const stepPrev = useCallback(() => {
      setActiveStepIndex(prevState => prevState - 1);
    }, []);
    const stepNext = useCallback(() => {
      setActiveStepIndex(prevState => prevState + 1);
    }, []);
    const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
      setActiveStepIndex(stepIndex);
    }, []);
    return <Tipseen position="right" modifiers={modifiers} animationType="opacity-and-slide" content={<TipseenWizard title="This is a title" steps={steps} onChangeActiveStep={onChangeActiveStep} activeStepIndex={activeStepIndex} backButtonProps={{
      size: "small",
      onClick: stepPrev
    }} nextButtonProps={{
      kind: "primary",
      size: "small",
      onClick: stepNext
    }} onFinish={() => {}} />}>
        <div style={{
        width: "10px",
        height: "150px"
      }} />
      </Tipseen>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          modifiers
        }
      }
    }
  }
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const W=["Overview","Types","OnPrimary","NavigableSteps","StepsInsideATipseen"],X=Object.freeze(Object.defineProperty({__proto__:null,NavigableSteps:m,OnPrimary:x,Overview:l,StepsInsideATipseen:u,Types:v,__namedExportsOrder:W,default:D},Symbol.toStringTag,{value:"Module"}));export{m as N,l as O,X as S,v as T,x as a,V as b,U as c,u as d};
