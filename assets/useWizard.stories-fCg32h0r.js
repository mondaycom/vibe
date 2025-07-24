import{R as e}from"./index-Hemj67b4.js";import{u as l}from"./useWizard-Brh8lqKR.js";import{S as h}from"./Steps-Zdcw6jAs.js";import{H as s}from"./Heading-C4fcuytm.js";import{F as t}from"./Flex-pz2uwxlA.js";import{B as n}from"./Button-t0_MS1N7.js";const A="_stepper_dhr8e_1",M={stepper:A},T=i=>e.createElement(t,{direction:t.directions.COLUMN,gap:t.gaps.MEDIUM},e.createElement(i,null)),H={title:"Hooks/useWizard",decorators:[T]},p={render:()=>{const{activeStep:i,next:a,back:r,isFirstStep:o}=l({stepCount:5,onFinish:()=>alert("Wizard Completed!")});return e.createElement(e.Fragment,null,e.createElement(s,{weight:s.weights.MEDIUM,type:s.types.H3},"Active Step: ",i),e.createElement(t,{gap:t.gaps.SMALL},e.createElement(n,{kind:n.kinds.TERTIARY,onClick:r,disabled:o},"Back"),e.createElement(n,{onClick:a},"Next")))}},c={render:()=>{const{activeStep:i,next:a,back:r,isFirstStep:o}=l({initialStep:2,stepCount:5});return e.createElement(e.Fragment,null,e.createElement(s,{weight:s.weights.MEDIUM,type:s.types.H3},"Active Step: ",i),e.createElement(t,{gap:t.gaps.SMALL},e.createElement(n,{kind:n.kinds.TERTIARY,onClick:r,disabled:o},"Back"),e.createElement(n,{onClick:a},"Next")))}},d={render:()=>{const{activeStep:i,next:a,back:r,goToStep:o,isFirstStep:B}=l({stepCount:5}),F=[e.createElement("div",null,"Step 1"),e.createElement("div",null,"Step 2"),e.createElement("div",null,"Step 3"),e.createElement("div",null,"Step 4"),e.createElement("div",null,"Step 5")];return e.createElement(e.Fragment,null,e.createElement(h,{className:M.stepper,areNavigationButtonsHidden:!0,isContentOnTop:!0,steps:F,activeStepIndex:i,onChangeActiveStep:(W,b)=>o(b)}),e.createElement(t,{gap:t.gaps.SMALL},e.createElement(n,{kind:n.kinds.TERTIARY,onClick:r,disabled:B},"Back"),e.createElement(n,{onClick:a},"Next")))}};var u,S,m;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(S=p.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var g,k,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var E,x,C;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const I=["Overview","WithInitialStep","WithStepsComponent"],N=Object.freeze(Object.defineProperty({__proto__:null,Overview:p,WithInitialStep:c,WithStepsComponent:d,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{p as O,N as U,c as W,d as a};
