import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as t}from"./index-CTZeEbLr.js";import{S as r}from"./Steps-XRTBzft1.js";import{c as E}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{T as z,a as H}from"./TipseenWizard-SFuhvdSA.js";import{F as w}from"./Flex-Bimzf4jb.js";const M=[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})],b=[{name:"preventOverflow",options:{mainAxis:!1}},{name:"flip",options:{fallbackPlacements:[]}}],U=()=>{const[p,n]=t.useState(2),a=t.useCallback(()=>{n(s=>s-1)},[]),o=t.useCallback(()=>{n(s=>s+1)},[]),c=t.useCallback((s,i)=>{n(i)},[]);return e.jsx(r,{type:"numbers",steps:M,activeStepIndex:p,onChangeActiveStep:c,backButtonProps:{onClick:a},nextButtonProps:{onClick:o},onFinish:()=>{}})},V=()=>{const[p,n]=t.useState(2),a=t.useCallback(()=>{n(s=>s-1)},[]),o=t.useCallback(()=>{n(s=>s+1)},[]),c=t.useCallback((s,i)=>{n(i)},[]);return e.jsx(r,{steps:M,activeStepIndex:p,onChangeActiveStep:c,backButtonProps:{onClick:a},nextButtonProps:{onClick:o},onFinish:()=>{}})},g=E({component:r,actionPropsArray:["onChangeActiveStep"]}),d=[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})],D={title:"Components/Steps",component:r,argTypes:g.argTypes,decorators:g.decorators,parameters:{docs:{liveEdit:{scope:{steps5:d}}}}},R=p=>{const[n,a]=t.useState(2),o=t.useCallback(()=>{a(i=>i-1)},[]),c=t.useCallback(()=>{a(i=>i+1)},[]),s=t.useCallback((i,S)=>{a(S)},[]);return e.jsx(r,{id:"overview-steps",activeStepIndex:n,backButtonProps:{onClick:o},nextButtonProps:{onClick:c},...p,onChangeActiveStep:s,onFinish:()=>{}})},l={render:R.bind({}),name:"Overview",args:{steps:d},parameters:{docs:{liveEdit:{isEnabled:!1}}}},v={render:()=>e.jsxs(w,{direction:"column",gap:"medium",children:[e.jsx(r,{id:"types-numbers",type:"numbers",steps:d,activeStepIndex:2}),e.jsx(r,{id:"types-default",steps:d,activeStepIndex:2}),e.jsx("div",{style:{padding:"15px 103px 20px"},children:e.jsx(r,{id:"types-no-nav",steps:d,activeStepIndex:2,areNavigationButtonsHidden:!0})})]})},m={render:()=>e.jsxs(w,{direction:"column",gap:"medium",style:{padding:"var(--sb-spacing-small)",backgroundColor:"var(--sb-primary-color)"},children:[e.jsx(r,{id:"primary-numbers",steps:d,activeStepIndex:2,color:"on-primary-color",type:"numbers"}),e.jsx(r,{id:"primary-default",steps:d,activeStepIndex:2,color:"on-primary-color"}),e.jsx("div",{style:{padding:"15px 103px 20px"},children:e.jsx(r,{id:"primary-no-nav",steps:d,activeStepIndex:2,color:"on-primary-color",areNavigationButtonsHidden:!0})})]})},x={render:()=>{const[p,n]=t.useState(2),a=t.useCallback(()=>{n(s=>s-1)},[]),o=t.useCallback(()=>{n(s=>s+1)},[]),c=t.useCallback((s,i)=>{n(i)},[]);return e.jsx("div",{children:e.jsx(r,{id:"navigable-steps",steps:d,isContentOnTop:!0,activeStepIndex:p,onChangeActiveStep:c,backButtonProps:{onClick:a},nextButtonProps:{onClick:o},onFinish:()=>{}})})}},u={render:()=>{const p=[e.jsx("div",{children:"Message number 1"}),e.jsx("div",{children:"Message number 2"}),e.jsx("div",{children:"Message number 3"}),e.jsx("div",{children:"Message number 4"}),e.jsx("div",{children:"Message number 5"})],[n,a]=t.useState(2),o=t.useCallback(()=>{a(i=>i-1)},[]),c=t.useCallback(()=>{a(i=>i+1)},[]),s=t.useCallback((i,S)=>{a(S)},[]);return e.jsx(z,{id:"tipseen-with-steps",position:"right",modifiers:b,animationType:"opacity-and-slide",content:e.jsx(H,{id:"tipseen-wizard",title:"This is a title",steps:p,onChangeActiveStep:s,activeStepIndex:n,backButtonProps:{size:"small",onClick:o},nextButtonProps:{kind:"primary",size:"small",onClick:c},onFinish:()=>{}}),children:e.jsx("div",{style:{width:"10px",height:"150px"}})})},parameters:{docs:{liveEdit:{scope:{modifiers:b}}}}};var y,C,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var h,I,j;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium">
      <Steps id="types-numbers" type="numbers" steps={steps5} activeStepIndex={2} />
      <Steps id="types-default" steps={steps5} activeStepIndex={2} />
      <div style={{
      padding: "15px 103px 20px"
    }}>
        <Steps id="types-no-nav" steps={steps5} activeStepIndex={2} areNavigationButtonsHidden />
      </div>
    </Flex>
}`,...(j=(I=v.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var A,P,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" style={{
    padding: "var(--sb-spacing-small)",
    backgroundColor: "var(--sb-primary-color)"
  }}>
      <Steps id="primary-numbers" steps={steps5} activeStepIndex={2} color="on-primary-color" type="numbers" />
      <Steps id="primary-default" steps={steps5} activeStepIndex={2} color="on-primary-color" />
      <div style={{
      padding: "15px 103px 20px"
    }}>
        <Steps id="primary-no-nav" steps={steps5} activeStepIndex={2} color="on-primary-color" areNavigationButtonsHidden />
      </div>
    </Flex>
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var f,N,B;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        <Steps id="navigable-steps" steps={steps5} isContentOnTop activeStepIndex={activeStepIndex} onChangeActiveStep={onChangeActiveStep} backButtonProps={{
        onClick: stepPrev
      }} nextButtonProps={{
        onClick: stepNext
      }} onFinish={() => {}} />
      </div>;
  }
}`,...(B=(N=x.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var _,F,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    return <Tipseen id="tipseen-with-steps" position="right" modifiers={modifiers} animationType="opacity-and-slide" content={<TipseenWizard id="tipseen-wizard" title="This is a title" steps={steps} onChangeActiveStep={onChangeActiveStep} activeStepIndex={activeStepIndex} backButtonProps={{
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
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const W=["Overview","Types","OnPrimary","NavigableSteps","StepsInsideATipseen"],X=Object.freeze(Object.defineProperty({__proto__:null,NavigableSteps:x,OnPrimary:m,Overview:l,StepsInsideATipseen:u,Types:v,__namedExportsOrder:W,default:D},Symbol.toStringTag,{value:"Module"}));export{x as N,l as O,X as S,v as T,m as a,V as b,U as c,u as d};
