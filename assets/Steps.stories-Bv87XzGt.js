import{r as t,R as e}from"./index-Hemj67b4.js";import{S as o}from"./Steps-Zdcw6jAs.js";import{T as z,a as H}from"./TipseenWizard-kMN1ETCK.js";import{F as M}from"./Flex-pz2uwxlA.js";import{c as R}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const w=[e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null)],b=[{name:"preventOverflow",options:{mainAxis:!1}},{name:"flip",options:{fallbackPlacements:[]}}],Q=()=>{const[i,s]=t.useState(2),r=t.useCallback(()=>{s(n=>n-1)},[]),c=t.useCallback(()=>{s(n=>n+1)},[]),p=t.useCallback((n,a)=>{s(a)},[]);return e.createElement(o,{type:"numbers",steps:w,activeStepIndex:i,onChangeActiveStep:p,backButtonProps:{onClick:r},nextButtonProps:{onClick:c},onFinish:()=>{}})},U=()=>{const[i,s]=t.useState(2),r=t.useCallback(()=>{s(n=>n-1)},[]),c=t.useCallback(()=>{s(n=>n+1)},[]),p=t.useCallback((n,a)=>{s(a)},[]);return e.createElement(o,{steps:w,activeStepIndex:i,onChangeActiveStep:p,backButtonProps:{onClick:r},nextButtonProps:{onClick:c},onFinish:()=>{}})},g=R({component:o,actionPropsArray:["onChangeActiveStep"]}),l=[e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null)],D={title:"Components/Steps",component:o,argTypes:g.argTypes,decorators:g.decorators,parameters:{docs:{liveEdit:{scope:{steps5:l}}}}},j=i=>{const[s,r]=t.useState(2),c=t.useCallback(()=>{r(a=>a-1)},[]),p=t.useCallback(()=>{r(a=>a+1)},[]),n=t.useCallback((a,x)=>{r(x)},[]);return e.createElement(o,{activeStepIndex:s,backButtonProps:{onClick:c},nextButtonProps:{onClick:p},...i,onChangeActiveStep:n,onFinish:()=>{}})},d={render:j.bind({}),name:"Overview",args:{steps:l},parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>e.createElement(M,{direction:"column",gap:"medium"},e.createElement(o,{type:"numbers",steps:l,activeStepIndex:2}),e.createElement(o,{steps:l,activeStepIndex:2}),e.createElement("div",{style:{padding:"15px 103px 20px"}},e.createElement(o,{steps:l,activeStepIndex:2,areNavigationButtonsHidden:!0})))},v={render:()=>e.createElement(M,{direction:"column",gap:"medium",style:{padding:"var(--sb-spacing-small)",backgroundColor:"var(--sb-primary-color)"}},e.createElement(o,{steps:l,activeStepIndex:2,color:"on-primary-color",type:"numbers"}),e.createElement(o,{steps:l,activeStepIndex:2,color:"on-primary-color"}),e.createElement("div",{style:{padding:"15px 103px 20px"}},e.createElement(o,{steps:l,activeStepIndex:2,color:"on-primary-color",areNavigationButtonsHidden:!0})))},u={render:()=>{const[i,s]=t.useState(2),r=t.useCallback(()=>{s(n=>n-1)},[]),c=t.useCallback(()=>{s(n=>n+1)},[]),p=t.useCallback((n,a)=>{s(a)},[]);return e.createElement("div",null,e.createElement(o,{steps:l,isContentOnTop:!0,activeStepIndex:i,onChangeActiveStep:p,backButtonProps:{onClick:r},nextButtonProps:{onClick:c},onFinish:()=>{}}))}},S={render:()=>{const i=[e.createElement("div",null,"Message number 1"),e.createElement("div",null,"Message number 2"),e.createElement("div",null,"Message number 3"),e.createElement("div",null,"Message number 4"),e.createElement("div",null,"Message number 5")],[s,r]=t.useState(2),c=t.useCallback(()=>{r(a=>a-1)},[]),p=t.useCallback(()=>{r(a=>a+1)},[]),n=t.useCallback((a,x)=>{r(x)},[]);return e.createElement(z,{position:"right",modifiers:b,animationType:"opacity-and-slide",content:e.createElement(H,{title:"This is a title",steps:i,onChangeActiveStep:n,activeStepIndex:s,backButtonProps:{size:"small",onClick:c},nextButtonProps:{kind:"primary",size:"small",onClick:p},onFinish:()=>{}})},e.createElement("div",{style:{width:"10px",height:"150px"}}))},parameters:{docs:{liveEdit:{scope:{modifiers:b}}}}};var C,k,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(k=d.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var I,y,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium">
      <Steps type="numbers" steps={steps5} activeStepIndex={2} />
      <Steps steps={steps5} activeStepIndex={2} />
      <div style={{
      padding: "15px 103px 20px"
    }}>
        <Steps steps={steps5} activeStepIndex={2} areNavigationButtonsHidden />
      </div>
    </Flex>
}`,...(A=(y=m.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var h,P,T;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(P=v.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var N,f,B;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(f=u.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var _,F,O;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(F=S.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const W=["Overview","Types","OnPrimary","NavigableSteps","StepsInsideATipseen"],V=Object.freeze(Object.defineProperty({__proto__:null,NavigableSteps:u,OnPrimary:v,Overview:d,StepsInsideATipseen:S,Types:m,__namedExportsOrder:W,default:D},Symbol.toStringTag,{value:"Module"}));export{u as N,d as O,V as S,m as T,v as a,U as b,Q as c,S as d};
