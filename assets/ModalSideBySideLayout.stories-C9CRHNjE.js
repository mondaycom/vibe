import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as k}from"./index-CTZeEbLr.js";import{c as X}from"./createStoryMetaSettingsDecorator-DPBO6pDt.js";import{w as H}from"./Modal.stories.helpers-hwEv0A0E.js";import{T,M as F,a as B,b as o,c as i,d as m}from"./ModalContent-BaJW8d0D.js";import{M as a}from"./ModalMedia-3_hJ2nWK.js";import{M as s}from"./ModalSideBySideLayout-DEWuM9zL.js";import{u as I}from"./useWizard-C20oyI_-.js";import{r as Y}from"./Workspace-CefzN9Lt.js";import{F as v}from"./Flex-DIp2zxrn.js";import{T as z}from"./TextField-Btcvtf7n.js";import{L as Z}from"./Label-CpF5OaXH.js";import{D as $}from"./Dropdown-CHT0bg5O.js";import{T as d}from"./Text-CIqulAzV.js";import{I as ee}from"./IconButton-DiEI_vOy.js";import{B as P}from"./Button-Dnxv6-sL.js";import{L as O}from"./Link-BcuKzmxB.js";const r=""+new URL("content-image-iH3LJkS7.png",import.meta.url).href,E=X({component:m}),te={title:"Components/Modal [New]/Side by side modal",component:m,subcomponents:{ModalSideBySideLayout:s,ModalMedia:a,ModalHeader:i,ModalContent:o,ModalFooter:B,ModalFooterWizard:F,TransitionView:T},argTypes:E.argTypes,decorators:E.decorators,parameters:{layout:"fullscreen",docs:{liveEdit:{scope:{mediaImage:r}}}}},C={decorators:[(n,t)=>H(n,{size:"medium",isDocsView:t.viewMode==="docs",allowFullViewInDocs:!0})],render:(n,{show:t,setShow:c,container:l})=>{const p=[e.jsxs(s,{children:[e.jsx(i,{title:"Side by side modal",description:e.jsxs(d,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(O,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(o,{children:e.jsx(d,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),e.jsxs(s,{children:[e.jsx(i,{title:"Side by side modal",description:e.jsxs(d,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(O,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(o,{children:e.jsx(d,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]})],{activeStep:h,direction:u,next:x,back:y,isFirstStep:w,isLastStep:M,goToStep:g}=I({stepCount:p.length}),S=M?"Confirm":"Next";return e.jsxs(m,{id:"modal-sbs",show:t,size:"large",onClose:()=>c(!1),style:{height:400},container:l,...n,children:[e.jsx(T,{activeStep:h,direction:u,children:p}),e.jsx(F,{activeStep:h,stepCount:p.length,onStepClick:g,primaryButton:{text:S,onClick:x},secondaryButton:{text:"Back",onClick:y,disabled:w}})]})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},j={decorators:[(n,t)=>H(n,{size:"medium",isDocsView:t.viewMode==="docs"})],render:(n,{show:t,setShow:c,container:l})=>{const p=[{label:"English",value:"en"},{label:"Hebrew",value:"he"}],h=[e.jsxs(s,{children:[e.jsx(i,{title:"Modal with wizard",description:"Fill in the details"}),e.jsx(o,{children:e.jsxs(v,{direction:"column",gap:"medium",children:[e.jsx(z,{title:"Full name",placeholder:"John Dow"}),e.jsx(z,{title:"Email",placeholder:"Email@monday.com"})]})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),e.jsxs(s,{children:[e.jsx(i,{title:"Modal with wizard",description:"Update your settings defenitions"}),e.jsx(o,{children:e.jsxs(v,{direction:"column",gap:"medium",align:"stretch",children:[e.jsx(z,{title:"Fill address",placeholder:"City, street, number"}),e.jsxs(v,{direction:"column",align:"stretch",children:[e.jsx(Z,{labelText:"Language preferences"}),e.jsx($,{insideOverflowWithTransformContainer:!0,insideLayerContext:!0,size:"small",placeholder:p[0].label,options:p})]})]})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]})],{activeStep:u,direction:x,next:y,back:w,isFirstStep:M,isLastStep:g,goToStep:S}=I({stepCount:h.length}),L=g?"Confirm":"Next";return e.jsxs(m,{id:"modal-sbs",show:t,size:"large",onClose:()=>c(!1),container:l,style:{height:400},children:[e.jsx(T,{activeStep:u,direction:x,children:h}),e.jsx(F,{activeStep:u,stepCount:h.length,onStepClick:S,primaryButton:{text:L,onClick:y},secondaryButton:{text:"Back",onClick:w,disabled:M}})]})}},f={decorators:[(n,t)=>H(n,{size:"medium",isDocsView:t.viewMode==="docs"})],render:(n,{show:t,setShow:c,container:l})=>e.jsxs(m,{id:"modal-sbs",show:t,renderHeaderAction:e.jsx(ee,{icon:Y,size:"small",kind:"tertiary",ariaLabel:"Open Menu"}),size:"large",onClose:()=>c(!1),container:l,style:{height:400},children:[e.jsxs(s,{children:[e.jsx(i,{title:"Modal title"}),e.jsx(o,{children:e.jsx(d,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),e.jsx(B,{primaryButton:{text:"Confirm",onClick:()=>c(!1)},secondaryButton:{text:"Cancel",onClick:()=>c(!1)}})]})},b={render:()=>{const[n,t]=k.useState(!1),[c,l]=k.useState(!1),[p,h]=k.useState(!1),u=k.useRef(null),x=[e.jsxs(s,{children:[e.jsx(i,{title:"Modal title"}),e.jsx(o,{children:e.jsx(d,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),e.jsxs(s,{children:[e.jsx(i,{title:"Modal title"}),e.jsx(o,{children:e.jsx(d,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),e.jsxs(s,{children:[e.jsx(i,{title:"Modal title"}),e.jsx(o,{children:e.jsx(d,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]})],{activeStep:y,direction:w,next:M,back:g,isFirstStep:S,isLastStep:L,goToStep:Q}=I({stepCount:x.length});return e.jsxs(e.Fragment,{children:[e.jsxs(v,{gap:"large",style:{paddingBlock:40},children:[e.jsx(P,{ref:u,onClick:()=>t(!0),children:"Anchor"}),e.jsx(P,{onClick:()=>l(!0),children:"Center pop"}),e.jsx(P,{onClick:()=>h(!0),children:"Transition"})]}),e.jsxs(m,{id:"modal-sbs-anchor",show:n,anchorElementRef:u,size:"large",onClose:()=>t(!1),style:{height:400},children:[e.jsxs(s,{children:[e.jsx(i,{title:"Modal title"}),e.jsx(o,{children:e.jsx(d,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),e.jsx(B,{primaryButton:{text:"Confirm",onClick:()=>t(!1)},secondaryButton:{text:"Cancel",onClick:()=>t(!1)}})]}),e.jsxs(m,{id:"modal-sbs-center",show:c,size:"large",onClose:()=>l(!1),style:{height:400},children:[e.jsxs(s,{children:[e.jsx(i,{title:"Modal title"}),e.jsx(o,{children:e.jsx(d,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),e.jsx(a,{children:e.jsx("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),e.jsx(B,{primaryButton:{text:"Confirm",onClick:()=>l(!1)},secondaryButton:{text:"Cancel",onClick:()=>l(!1)}})]}),e.jsxs(m,{id:"modal-sbs-transition",show:p,size:"large",onClose:()=>h(!1),style:{height:400},children:[e.jsx(T,{activeStep:y,direction:w,children:x}),e.jsx(F,{activeStep:y,stepCount:x.length,onStepClick:Q,primaryButton:{text:L?"Confirm":"Next",onClick:M},secondaryButton:{text:"Back",onClick:g,disabled:S}})]})]})}};var A,V,W;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    size: "medium",
    isDocsView: context.viewMode === "docs",
    allowFullViewInDocs: true
  })],
  render: (args, {
    show,
    setShow,
    container
  }) => {
    const steps = [<ModalSideBySideLayout>
        <ModalHeader title="Side by side modal" description={<Text type="text1">
              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
            </Text>} />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
      </ModalSideBySideLayout>, <ModalSideBySideLayout>
        <ModalHeader title="Side by side modal" description={<Text type="text1">
              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
            </Text>} />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
      </ModalSideBySideLayout>];
    const {
      activeStep,
      direction,
      next,
      back,
      isFirstStep,
      isLastStep,
      goToStep
    } = useWizard({
      stepCount: steps.length
    });
    const primaryButtonText = isLastStep ? "Confirm" : "Next";
    return <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)} style={{
      height: 400
    }} container={container} {...args}>
        <TransitionView activeStep={activeStep} direction={direction}>
          {steps}
        </TransitionView>
        <ModalFooterWizard activeStep={activeStep} stepCount={steps.length} onStepClick={goToStep} primaryButton={{
        text: primaryButtonText,
        onClick: next
      }} secondaryButton={{
        text: "Back",
        onClick: back,
        disabled: isFirstStep
      }} />
      </Modal>;
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(W=(V=C.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var D,_,R;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    size: "medium",
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    const dropdownOptions = [{
      label: "English",
      value: "en"
    }, {
      label: "Hebrew",
      value: "he"
    }];
    const steps = [<ModalSideBySideLayout>
        <ModalHeader title="Modal with wizard" description="Fill in the details" />
        <ModalContent>
          <Flex direction="column" gap="medium">
            <TextField title="Full name" placeholder="John Dow" />
            <TextField title="Email" placeholder="Email@monday.com" />
          </Flex>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
      </ModalSideBySideLayout>, <ModalSideBySideLayout>
        <ModalHeader title="Modal with wizard" description="Update your settings defenitions" />
        <ModalContent>
          <Flex direction="column" gap="medium" align="stretch">
            <TextField title="Fill address" placeholder="City, street, number" />
            <Flex direction="column" align="stretch">
              <Label labelText="Language preferences" />
              <Dropdown insideOverflowWithTransformContainer insideLayerContext size="small" placeholder={dropdownOptions[0].label} options={dropdownOptions} />
            </Flex>
          </Flex>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
      </ModalSideBySideLayout>];
    const {
      activeStep,
      direction,
      next,
      back,
      isFirstStep,
      isLastStep,
      goToStep
    } = useWizard({
      stepCount: steps.length
    });
    const primaryButtonText = isLastStep ? "Confirm" : "Next";
    return <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)} container={container} style={{
      height: 400
    }}>
        <TransitionView activeStep={activeStep} direction={direction}>
          {steps}
        </TransitionView>
        <ModalFooterWizard activeStep={activeStep} stepCount={steps.length} onStepClick={goToStep} primaryButton={{
        text: primaryButtonText,
        onClick: next
      }} secondaryButton={{
        text: "Back",
        onClick: back,
        disabled: isFirstStep
      }} />
      </Modal>;
  }
}`,...(R=(_=j.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var N,J,U;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    size: "medium",
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-sbs" show={show} renderHeaderAction={<IconButton icon={Menu} size="small" kind="tertiary" ariaLabel="Open Menu" />} size="large" onClose={() => setShow(false)} container={container} style={{
      height: 400
    }}>
        <ModalSideBySideLayout>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
          <ModalMedia>
            <img src={mediaImage} alt="side by side placeholder" style={{
            width: "100%",
            objectFit: "cover"
          }} />
          </ModalMedia>
        </ModalSideBySideLayout>
        <ModalFooter primaryButton={{
        text: "Confirm",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Cancel",
        onClick: () => setShow(false)
      }} />
      </Modal>;
  }
}`,...(U=(J=f.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var q,G,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [showAnchor, setShowAnchor] = useState(false);
    const [showCenterPop, setShowCenterPop] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const anchorButtonRef = useRef<HTMLButtonElement>(null);
    const transitionSteps = [<ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
      </ModalSideBySideLayout>, <ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
      </ModalSideBySideLayout>, <ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
      </ModalSideBySideLayout>];
    const {
      activeStep,
      direction,
      next,
      back,
      isFirstStep,
      isLastStep,
      goToStep
    } = useWizard({
      stepCount: transitionSteps.length
    });
    return <>
        <Flex gap="large" style={{
        paddingBlock: 40
      }}>
          <Button ref={anchorButtonRef} onClick={() => setShowAnchor(true)}>
            Anchor
          </Button>
          <Button onClick={() => setShowCenterPop(true)}>Center pop</Button>
          <Button onClick={() => setShowTransition(true)}>Transition</Button>
        </Flex>

        <Modal id="modal-sbs-anchor" show={showAnchor} anchorElementRef={anchorButtonRef} size="large" onClose={() => setShowAnchor(false)} style={{
        height: 400
      }}>
          <ModalSideBySideLayout>
            <ModalHeader title="Modal title" />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
            <ModalMedia>
              <img src={mediaImage} alt="side by side placeholder" style={{
              width: "100%",
              objectFit: "cover"
            }} />
            </ModalMedia>
          </ModalSideBySideLayout>
          <ModalFooter primaryButton={{
          text: "Confirm",
          onClick: () => setShowAnchor(false)
        }} secondaryButton={{
          text: "Cancel",
          onClick: () => setShowAnchor(false)
        }} />
        </Modal>

        <Modal id="modal-sbs-center" show={showCenterPop} size="large" onClose={() => setShowCenterPop(false)} style={{
        height: 400
      }}>
          <ModalSideBySideLayout>
            <ModalHeader title="Modal title" />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
            <ModalMedia>
              <img src={mediaImage} alt="side by side placeholder" style={{
              width: "100%",
              objectFit: "cover"
            }} />
            </ModalMedia>
          </ModalSideBySideLayout>
          <ModalFooter primaryButton={{
          text: "Confirm",
          onClick: () => setShowCenterPop(false)
        }} secondaryButton={{
          text: "Cancel",
          onClick: () => setShowCenterPop(false)
        }} />
        </Modal>

        <Modal id="modal-sbs-transition" show={showTransition} size="large" onClose={() => setShowTransition(false)} style={{
        height: 400
      }}>
          <TransitionView activeStep={activeStep} direction={direction}>
            {transitionSteps}
          </TransitionView>
          <ModalFooterWizard activeStep={activeStep} stepCount={transitionSteps.length} onStepClick={goToStep} primaryButton={{
          text: isLastStep ? "Confirm" : "Next",
          onClick: next
        }} secondaryButton={{
          text: "Back",
          onClick: back,
          disabled: isFirstStep
        }} />
        </Modal>
      </>;
  }
}`,...(K=(G=b.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const ne=["Overview","Wizard","HeaderWithIconButton","Animation"],Se=Object.freeze(Object.defineProperty({__proto__:null,Animation:b,HeaderWithIconButton:f,Overview:C,Wizard:j,__namedExportsOrder:ne,default:te},Symbol.toStringTag,{value:"Module"}));export{b as A,f as H,C as O,Se as S,j as W};
