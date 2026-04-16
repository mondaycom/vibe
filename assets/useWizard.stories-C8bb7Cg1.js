import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{F as c}from"./Flex-7H_pA1dJ.js";import{u as d}from"./useWizard-C20oyI_-.js";import{H as C}from"./Heading-CE8CoG9V.js";import{B as n}from"./Button-CAkxRwa_.js";import{S as b}from"./Steps-DahsanPr.js";const W="_stepper_dhr8e_1",y={stepper:W},_=t=>e.jsx(c,{direction:"column",gap:"medium",children:e.jsx(t,{})}),z={title:"Hooks/useWizard",decorators:[_]},a={render:()=>{const{activeStep:t,next:i,back:s,isFirstStep:r}=d({stepCount:5,onFinish:()=>alert("Wizard Completed!")});return e.jsxs(e.Fragment,{children:[e.jsxs(C,{weight:"medium",type:"h3",children:["Active Step: ",t]}),e.jsxs(c,{gap:"small",children:[e.jsx(n,{kind:"tertiary",onClick:s,disabled:r,children:"Back"}),e.jsx(n,{onClick:i,children:"Next"})]})]})}},o={render:()=>{const{activeStep:t,next:i,back:s,isFirstStep:r}=d({initialStep:2,stepCount:5});return e.jsxs(e.Fragment,{children:[e.jsxs(C,{weight:"medium",type:"h3",children:["Active Step: ",t]}),e.jsxs(c,{gap:"small",children:[e.jsx(n,{kind:"tertiary",onClick:s,disabled:r,children:"Back"}),e.jsx(n,{onClick:i,children:"Next"})]})]})}},p={render:()=>{const{activeStep:t,next:i,back:s,goToStep:r,isFirstStep:j}=d({stepCount:5}),B=[e.jsx("div",{children:"Step 1"}),e.jsx("div",{children:"Step 2"}),e.jsx("div",{children:"Step 3"}),e.jsx("div",{children:"Step 4"}),e.jsx("div",{children:"Step 5"})];return e.jsxs(e.Fragment,{children:[e.jsx(b,{className:y.stepper,areNavigationButtonsHidden:!0,isContentOnTop:!0,steps:B,activeStepIndex:t,onChangeActiveStep:(f,F)=>r(F)}),e.jsxs(c,{gap:"small",children:[e.jsx(n,{kind:"tertiary",onClick:s,disabled:j,children:"Back"}),e.jsx(n,{onClick:i,children:"Next"})]})]})}};var l,u,S;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      activeStep,
      next,
      back,
      isFirstStep
    } = useWizard({
      stepCount: 5,
      onFinish: () => alert("Wizard Completed!")
    });
    return <>
        <Heading weight="medium" type="h3">
          Active Step: {activeStep}
        </Heading>
        <Flex gap="small">
          <Button kind="tertiary" onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>;
  }
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var m,x,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const {
      activeStep,
      next,
      back,
      isFirstStep
    } = useWizard({
      initialStep: 2,
      stepCount: 5
    });
    return <>
        <Heading weight="medium" type="h3">
          Active Step: {activeStep}
        </Heading>
        <Flex gap="small">
          <Button kind="tertiary" onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>;
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,k,g;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const {
      activeStep,
      next,
      back,
      goToStep,
      isFirstStep
    } = useWizard({
      stepCount: 5
    });
    const stepsContent = [<div>Step 1</div>, <div>Step 2</div>, <div>Step 3</div>, <div>Step 4</div>, <div>Step 5</div>];
    return <>
        <Steps className={styles.stepper} areNavigationButtonsHidden isContentOnTop steps={stepsContent} activeStepIndex={activeStep} onChangeActiveStep={(_e, stepIndex) => goToStep(stepIndex)} />
        <Flex gap="small">
          <Button kind="tertiary" onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>;
  }
}`,...(g=(k=p.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const N=["Overview","WithInitialStep","WithStepsComponent"],U=Object.freeze(Object.defineProperty({__proto__:null,Overview:a,WithInitialStep:o,WithStepsComponent:p,__namedExportsOrder:N,default:z},Symbol.toStringTag,{value:"Module"}));export{a as O,U,o as W,p as a};
