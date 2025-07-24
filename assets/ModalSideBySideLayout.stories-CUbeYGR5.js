import{R as e,r as k}from"./index-Hemj67b4.js";import{T,M as F,a as B,b as o,c as a,d as h}from"./ModalFooterWizard-BeKhxx3F.js";import{w as j}from"./Modal.stories.helpers-DeKaG6sj.js";import{M as i}from"./ModalSideBySideLayout-BNOecz0Q.js";import{M as l}from"./ModalMedia-CNgwSPWy.js";import{u as H}from"./useWizard-Brh8lqKR.js";import{T as z}from"./TextField-Dc_mArgZ.js";import{F as v}from"./Flex-DIvs4XZj.js";import{D as Y}from"./Dropdown-wtr36BWv.js";import{F as Q}from"./FieldLabel-DfmdapVI.js";import{I as Z}from"./IconButton-CfYEqm1b.js";import{B as P}from"./Button-DEM-Hn8V.js";import{T as c}from"./Text-B2fubIt7.js";import{L as I}from"./Link-s0y4jlGK.js";import{r as $}from"./Workspace-BIJf5qCK.js";import{c as ee}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const r=""+new URL("media-image-iH3LJkS7.png",import.meta.url).href,O=ee({component:h}),te={title:"Components/Modal [New]/Side by side modal",component:h,subcomponents:{ModalSideBySideLayout:i,ModalMedia:l,ModalHeader:a,ModalContent:o,ModalFooter:B,ModalFooterWizard:F,TransitionView:T},argTypes:O.argTypes,decorators:O.decorators,parameters:{layout:"fullscreen",docs:{liveEdit:{scope:{FieldLabel:Q,mediaImage:r}}}}},C={decorators:[(n,t)=>j(n,{size:"medium",isDocsView:t.viewMode==="docs",allowFullViewInDocs:!0})],render:(n,{show:t,setShow:d,container:s})=>{const p=[e.createElement(i,null,e.createElement(a,{title:"Side by side modal",description:e.createElement(c,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(I,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(o,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}}))),e.createElement(i,null,e.createElement(a,{title:"Side by side modal",description:e.createElement(c,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(I,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(o,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})))],{activeStep:m,direction:u,next:y,back:w,isFirstStep:M,isLastStep:g,goToStep:S}=H({stepCount:p.length}),x=g?"Confirm":"Next";return e.createElement(h,{id:"modal-sbs",show:t,size:"large",onClose:()=>d(!1),style:{height:400},container:s,...n},e.createElement(T,{activeStep:m,direction:u},p),e.createElement(F,{activeStep:m,stepCount:p.length,onStepClick:S,primaryButton:{text:x,onClick:y},secondaryButton:{text:"Back",onClick:w,disabled:M}}))},parameters:{docs:{liveEdit:{isEnabled:!1}}}},E={decorators:[(n,t)=>j(n,{size:"medium",isDocsView:t.viewMode==="docs"})],render:(n,{show:t,setShow:d,container:s})=>{const p=[{label:"English",value:"en"},{label:"Hebrew",value:"he"}],m=[e.createElement(i,null,e.createElement(a,{title:"Modal with wizard",description:"Fill in the details"}),e.createElement(o,null,e.createElement(v,{direction:"column",gap:"medium"},e.createElement(z,{title:"Full name",placeholder:"John Dow"}),e.createElement(z,{title:"Email",placeholder:"Email@monday.com"}))),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}}))),e.createElement(i,null,e.createElement(a,{title:"Modal with wizard",description:"Update your settings defenitions"}),e.createElement(o,null,e.createElement(v,{direction:"column",gap:"medium",align:"stretch"},e.createElement(z,{title:"Fill address",placeholder:"City, street, number"}),e.createElement(v,{direction:"column",align:"stretch"},e.createElement(Q,{labelText:"Language preferences"}),e.createElement(Y,{insideOverflowWithTransformContainer:!0,insideLayerContext:!0,size:"small",placeholder:p[0].label,options:p})))),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})))],{activeStep:u,direction:y,next:w,back:M,isFirstStep:g,isLastStep:S,goToStep:x}=H({stepCount:m.length}),L=S?"Confirm":"Next";return e.createElement(h,{id:"modal-sbs",show:t,size:"large",onClose:()=>d(!1),container:s,style:{height:400}},e.createElement(T,{activeStep:u,direction:y},m),e.createElement(F,{activeStep:u,stepCount:m.length,onStepClick:x,primaryButton:{text:L,onClick:w},secondaryButton:{text:"Back",onClick:M,disabled:g}}))}},b={decorators:[(n,t)=>j(n,{size:"medium",isDocsView:t.viewMode==="docs"})],render:(n,{show:t,setShow:d,container:s})=>e.createElement(h,{id:"modal-sbs",show:t,renderHeaderAction:e.createElement(Z,{icon:$,size:"small",kind:"tertiary",ariaLabel:"Open Menu"}),size:"large",onClose:()=>d(!1),container:s,style:{height:400}},e.createElement(i,null,e.createElement(a,{title:"Modal title"}),e.createElement(o,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}}))),e.createElement(B,{primaryButton:{text:"Confirm",onClick:()=>d(!1)},secondaryButton:{text:"Cancel",onClick:()=>d(!1)}}))},f={render:()=>{const[n,t]=k.useState(!1),[d,s]=k.useState(!1),[p,m]=k.useState(!1),u=k.useRef(null),y=[e.createElement(i,null,e.createElement(a,{title:"Modal title"}),e.createElement(o,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}}))),e.createElement(i,null,e.createElement(a,{title:"Modal title"}),e.createElement(o,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}}))),e.createElement(i,null,e.createElement(a,{title:"Modal title"}),e.createElement(o,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})))],{activeStep:w,direction:M,next:g,back:S,isFirstStep:x,isLastStep:L,goToStep:X}=H({stepCount:y.length});return e.createElement(e.Fragment,null,e.createElement(v,{gap:"large",style:{paddingBlock:40}},e.createElement(P,{ref:u,onClick:()=>t(!0)},"Anchor"),e.createElement(P,{onClick:()=>s(!0)},"Center pop"),e.createElement(P,{onClick:()=>m(!0)},"Transition")),e.createElement(h,{id:"modal-sbs-anchor",show:n,anchorElementRef:u,size:"large",onClose:()=>t(!1),style:{height:400}},e.createElement(i,null,e.createElement(a,{title:"Modal title"}),e.createElement(o,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}}))),e.createElement(B,{primaryButton:{text:"Confirm",onClick:()=>t(!1)},secondaryButton:{text:"Cancel",onClick:()=>t(!1)}})),e.createElement(h,{id:"modal-sbs-center",show:d,size:"large",onClose:()=>s(!1),style:{height:400}},e.createElement(i,null,e.createElement(a,{title:"Modal title"}),e.createElement(o,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")),e.createElement(l,null,e.createElement("img",{src:r,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}}))),e.createElement(B,{primaryButton:{text:"Confirm",onClick:()=>s(!1)},secondaryButton:{text:"Cancel",onClick:()=>s(!1)}})),e.createElement(h,{id:"modal-sbs-transition",show:p,size:"large",onClose:()=>m(!1),style:{height:400}},e.createElement(T,{activeStep:w,direction:M},y),e.createElement(F,{activeStep:w,stepCount:y.length,onStepClick:X,primaryButton:{text:L?"Confirm":"Next",onClick:g},secondaryButton:{text:"Back",onClick:S,disabled:x}})))}};var A,V,W;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(V=C.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var D,R,_;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
              <FieldLabel labelText="Language preferences" />
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
}`,...(_=(R=E.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var N,J,U;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(J=b.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var q,G,K;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(G=f.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const ne=["Overview","Wizard","HeaderWithIconButton","Animation"],Se=Object.freeze(Object.defineProperty({__proto__:null,Animation:f,HeaderWithIconButton:b,Overview:C,Wizard:E,__namedExportsOrder:ne,default:te},Symbol.toStringTag,{value:"Module"}));export{f as A,b as H,C as O,Se as S,E as W};
