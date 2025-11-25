import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{u as l}from"./useWizard-C20oyI_-.js";import{F as t}from"./Flex-Bimzf4jb.js";import{H as i}from"./Heading-B02tO7j0.js";import{B as n}from"./Button-zprqw9Vf.js";import{S as b}from"./Steps-XRTBzft1.js";const A="_stepper_dhr8e_1",M={stepper:A},T=s=>e.jsx(t,{direction:t.directions.COLUMN,gap:t.gaps.MEDIUM,children:e.jsx(s,{})}),H={title:"Hooks/useWizard",decorators:[T]},p={render:()=>{const{activeStep:s,next:r,back:a,isFirstStep:o}=l({stepCount:5,onFinish:()=>alert("Wizard Completed!")});return e.jsxs(e.Fragment,{children:[e.jsxs(i,{weight:i.weights.MEDIUM,type:i.types.H3,children:["Active Step: ",s]}),e.jsxs(t,{gap:t.gaps.SMALL,children:[e.jsx(n,{kind:n.kinds.TERTIARY,onClick:a,disabled:o,children:"Back"}),e.jsx(n,{onClick:r,children:"Next"})]})]})}},d={render:()=>{const{activeStep:s,next:r,back:a,isFirstStep:o}=l({initialStep:2,stepCount:5});return e.jsxs(e.Fragment,{children:[e.jsxs(i,{weight:i.weights.MEDIUM,type:i.types.H3,children:["Active Step: ",s]}),e.jsxs(t,{gap:t.gaps.SMALL,children:[e.jsx(n,{kind:n.kinds.TERTIARY,onClick:a,disabled:o,children:"Back"}),e.jsx(n,{onClick:r,children:"Next"})]})]})}},c={render:()=>{const{activeStep:s,next:r,back:a,goToStep:o,isFirstStep:j}=l({stepCount:5}),B=[e.jsx("div",{children:"Step 1"}),e.jsx("div",{children:"Step 2"}),e.jsx("div",{children:"Step 3"}),e.jsx("div",{children:"Step 4"}),e.jsx("div",{children:"Step 5"})];return e.jsxs(e.Fragment,{children:[e.jsx(b,{className:M.stepper,areNavigationButtonsHidden:!0,isContentOnTop:!0,steps:B,activeStepIndex:s,onChangeActiveStep:(W,F)=>o(F)}),e.jsxs(t,{gap:t.gaps.SMALL,children:[e.jsx(n,{kind:n.kinds.TERTIARY,onClick:a,disabled:j,children:"Back"}),e.jsx(n,{onClick:r,children:"Next"})]})]})}};var S,x,u;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <Heading weight={Heading.weights.MEDIUM} type={Heading.types.H3}>
          Active Step: {activeStep}
        </Heading>
        <Flex gap={Flex.gaps.SMALL}>
          <Button kind={Button.kinds.TERTIARY} onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>;
  }
}`,...(u=(x=p.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,k,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        <Heading weight={Heading.weights.MEDIUM} type={Heading.types.H3}>
          Active Step: {activeStep}
        </Heading>
        <Flex gap={Flex.gaps.SMALL}>
          <Button kind={Button.kinds.TERTIARY} onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>;
  }
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var h,m,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        <Flex gap={Flex.gaps.SMALL}>
          <Button kind={Button.kinds.TERTIARY} onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>;
  }
}`,...(C=(m=c.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};const I=["Overview","WithInitialStep","WithStepsComponent"],z=Object.freeze(Object.defineProperty({__proto__:null,Overview:p,WithInitialStep:d,WithStepsComponent:c,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{p as O,z as U,d as W,c as a};
