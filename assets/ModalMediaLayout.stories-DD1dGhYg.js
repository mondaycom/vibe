import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as b}from"./index-Hemj67b4.js";import{T as F,M as B,a as y,b as a,c as r,d as m}from"./ModalFooterWizard-CCBFs2st.js";import{M as s}from"./ModalMedia-D_vcxwpT.js";import{M as d}from"./ModalMediaLayout-tVBPdt7L.js";import{T as c}from"./Text-pILbyd_a.js";import{L as C}from"./Link-pf1aUtKz.js";import{u as q}from"./useWizard-Brh8lqKR.js";import{I as Q}from"./IconButton-BhS4UUwE.js";import{F as X}from"./Flex-BwTwg4EO.js";import{B as L}from"./Button-zigxp5ZV.js";import{w as j}from"./Modal.stories.helpers-B64WE4dB.js";import{r as Z}from"./Workspace-BIJf5qCK.js";import{c as $}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const l=""+new URL("media-image-BMRPF0YN.png",import.meta.url).href,I=$({component:m}),ee={title:"Components/Modal [New]/Media modal",component:m,subcomponents:{ModalMediaLayout:d,ModalMedia:s,ModalHeader:r,ModalContent:a,ModalFooter:y,ModalFooterWizard:B,TransitionView:F},argTypes:I.argTypes,decorators:I.decorators,parameters:{layout:"fullscreen",docs:{liveEdit:{scope:{mediaImage:l}}}}},u={decorators:[(o,t)=>j(o,{size:"large",isDocsView:t.viewMode==="docs",allowFullViewInDocs:!0})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(m,{id:"modal-media",show:t,size:"medium",onClose:()=>n(!1),container:i,...o,children:[e.jsxs(d,{children:[e.jsx(s,{children:e.jsx("img",{src:l,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})}),e.jsx(r,{title:"Modal title"}),e.jsx(a,{children:e.jsxs(c,{type:"text1",align:"inherit",element:"p",children:["The media modal is ideal for introducing new features or onboarding, the user can also"," ",e.jsx(C,{inheritFontSize:!0,inlineText:!0,text:"add a link"}),"."]})})]}),e.jsx(y,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}})]}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},x={decorators:[(o,t)=>j(o,{size:"large",isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>{const p=[e.jsxs(d,{children:[e.jsx(s,{children:e.jsx("img",{src:l,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})}),e.jsx(r,{title:"Modal with wizard"}),e.jsx(a,{children:e.jsx(c,{type:"text1",align:"inherit",element:"p",children:"We have made some changes to our modal component. Keep reading to see what improvements we made."})})]}),e.jsxs(d,{children:[e.jsx(s,{children:e.jsx("img",{src:l,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})}),e.jsx(r,{title:"Modal with wizard"}),e.jsx(a,{children:e.jsx(c,{type:"text1",align:"inherit",element:"p",children:"Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an animation."})})]})],{activeStep:h,direction:S,next:f,back:k,isFirstStep:T,isLastStep:v,goToStep:z}=q({stepCount:p.length}),J=v?"Confirm":"Next";return e.jsxs(m,{id:"modal-media",show:t,size:"medium",onClose:()=>n(!1),container:i,children:[e.jsx(F,{activeStep:h,direction:S,children:p}),e.jsx(B,{activeStep:h,stepCount:p.length,onStepClick:z,primaryButton:{text:J,onClick:f},secondaryButton:{text:"Back",onClick:k,disabled:T}})]})}},M={decorators:[(o,t)=>j(o,{size:"large",isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(m,{id:"modal-media",show:t,size:"medium",onClose:()=>n(!1),container:i,children:[e.jsxs(d,{children:[e.jsx(s,{children:e.jsx("img",{src:l,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})}),e.jsx(r,{title:"Meet our new feature"}),e.jsx(a,{children:e.jsxs(c,{type:"text1",align:"inherit",element:"p",children:["Introducing our latest feature designed to make your workflow faster and easier. For more details"," ",e.jsx(C,{inheritFontSize:!0,inlineText:!0,text:"click here"}),"."]})})]}),e.jsx(y,{primaryButton:{text:"Got it",onClick:()=>n(!1)},secondaryButton:{text:"Dismiss",onClick:()=>n(!1)}})]})},w={decorators:[(o,t)=>j(o,{size:"large",isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(m,{id:"modal-media",show:t,renderHeaderAction:e.jsx(Q,{icon:Z,size:"small",kind:"tertiary",ariaLabel:"Open Menu"}),size:"medium",onClose:()=>n(!1),container:i,children:[e.jsxs(d,{children:[e.jsx(s,{children:e.jsx("img",{src:l,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})}),e.jsx(r,{title:"Modal title"}),e.jsx(a,{children:e.jsxs(c,{type:"text1",align:"inherit",element:"p",children:["The media modal is ideal for introducing new features or onboarding, the user can also"," ",e.jsx(C,{inheritFontSize:!0,inlineText:!0,text:"add a link"}),"."]})})]}),e.jsx(y,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}})]})},g={render:()=>{const[o,t]=b.useState(!1),[n,i]=b.useState(!1),p=[e.jsxs(d,{children:[e.jsx(s,{children:e.jsx("img",{src:l,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})}),e.jsx(r,{title:"Modal with wizard"}),e.jsx(a,{children:e.jsx(c,{type:"text1",align:"inherit",element:"p",children:"We have made some changes to our modal component. Keep reading to see what improvements we made."})})]}),e.jsxs(d,{children:[e.jsx(s,{children:e.jsx("img",{src:l,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})}),e.jsx(r,{title:"Modal with wizard"}),e.jsx(a,{children:e.jsx(c,{type:"text1",align:"inherit",element:"p",children:"Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an animation."})})]})],{activeStep:h,direction:S,next:f,back:k,isFirstStep:T,isLastStep:v,goToStep:z}=q({stepCount:p.length});return e.jsxs(e.Fragment,{children:[e.jsxs(X,{gap:"large",style:{paddingBlock:40},children:[e.jsx(L,{onClick:()=>t(!0),children:"Center pop"}),e.jsx(L,{onClick:()=>i(!0),children:"Transition"})]}),e.jsxs(m,{id:"modal-media-center",show:o,size:"medium",onClose:()=>t(!1),children:[e.jsxs(d,{children:[e.jsx(s,{children:e.jsx("img",{src:l,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})}),e.jsx(r,{title:"Modal title"}),e.jsx(a,{children:e.jsxs(c,{type:"text1",align:"inherit",element:"p",children:["The media modal is ideal for introducing new features or onboarding, the user can also"," ",e.jsx(C,{inheritFontSize:!0,inlineText:!0,text:"add a link"}),"."]})})]}),e.jsx(y,{primaryButton:{text:"Confirm",onClick:()=>t(!1)},secondaryButton:{text:"Cancel",onClick:()=>t(!1)}})]}),e.jsxs(m,{id:"modal-media-transition",show:n,size:"medium",onClose:()=>i(!1),children:[e.jsx(F,{activeStep:h,direction:S,children:p}),e.jsx(B,{activeStep:h,stepCount:p.length,onStepClick:z,primaryButton:{text:v?"Confirm":"Next",onClick:f},secondaryButton:{text:"Back",onClick:k,disabled:T}})]})]})}};var P,V,W;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    size: "large",
    isDocsView: context.viewMode === "docs",
    allowFullViewInDocs: true
  })],
  render: (args, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-media" show={show} size="medium" onClose={() => setShow(false)} container={container} {...args}>
        <ModalMediaLayout>
          <ModalMedia>
            <img src={mediaImage} alt="media placeholder" style={{
            width: "100%",
            objectFit: "cover"
          }} />
          </ModalMedia>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              The media modal is ideal for introducing new features or onboarding, the user can also{" "}
              <Link inheritFontSize inlineText text="add a link" />.
            </Text>
          </ModalContent>
        </ModalMediaLayout>
        <ModalFooter primaryButton={{
        text: "Confirm",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Cancel",
        onClick: () => setShow(false)
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
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var H,D,O;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    size: "large",
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    const steps = [<ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            We have made some changes to our modal component. Keep reading to see what improvements we made.
          </Text>
        </ModalContent>
      </ModalMediaLayout>, <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an
            animation.
          </Text>
        </ModalContent>
      </ModalMediaLayout>];
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
    return <Modal id="modal-media" show={show} size="medium" onClose={() => setShow(false)} container={container}>
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
}`,...(O=(D=x.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var _,N,E;M.parameters={...M.parameters,docs:{...(_=M.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    size: "large",
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-media" show={show} size="medium" onClose={() => setShow(false)} container={container}>
        <ModalMediaLayout>
          <ModalMedia>
            <img src={mediaImage} alt="media placeholder" style={{
            width: "100%",
            objectFit: "cover"
          }} />
          </ModalMedia>
          <ModalHeader title="Meet our new feature" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Introducing our latest feature designed to make your workflow faster and easier. For more details{" "}
              <Link inheritFontSize inlineText text="click here" />.
            </Text>
          </ModalContent>
        </ModalMediaLayout>
        <ModalFooter primaryButton={{
        text: "Got it",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Dismiss",
        onClick: () => setShow(false)
      }} />
      </Modal>;
  }
}`,...(E=(N=M.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var A,K,R;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    size: "large",
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-media" show={show} renderHeaderAction={<IconButton icon={Menu} size="small" kind="tertiary" ariaLabel="Open Menu" />} size="medium" onClose={() => setShow(false)} container={container}>
        <ModalMediaLayout>
          <ModalMedia>
            <img src={mediaImage} alt="media placeholder" style={{
            width: "100%",
            objectFit: "cover"
          }} />
          </ModalMedia>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              The media modal is ideal for introducing new features or onboarding, the user can also{" "}
              <Link inheritFontSize inlineText text="add a link" />.
            </Text>
          </ModalContent>
        </ModalMediaLayout>
        <ModalFooter primaryButton={{
        text: "Confirm",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Cancel",
        onClick: () => setShow(false)
      }} />
      </Modal>;
  }
}`,...(R=(K=w.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var G,U,Y;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [showCenterPop, setShowCenterPop] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const transitionSteps = [<ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            We have made some changes to our modal component. Keep reading to see what improvements we made.
          </Text>
        </ModalContent>
      </ModalMediaLayout>, <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an
            animation.
          </Text>
        </ModalContent>
      </ModalMediaLayout>];
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
          <Button onClick={() => setShowCenterPop(true)}>Center pop</Button>
          <Button onClick={() => setShowTransition(true)}>Transition</Button>
        </Flex>

        <Modal id="modal-media-center" show={showCenterPop} size="medium" onClose={() => setShowCenterPop(false)}>
          <ModalMediaLayout>
            <ModalMedia>
              <img src={mediaImage} alt="media placeholder" style={{
              width: "100%",
              objectFit: "cover"
            }} />
            </ModalMedia>
            <ModalHeader title="Modal title" />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                The media modal is ideal for introducing new features or onboarding, the user can also{" "}
                <Link inheritFontSize inlineText text="add a link" />.
              </Text>
            </ModalContent>
          </ModalMediaLayout>
          <ModalFooter primaryButton={{
          text: "Confirm",
          onClick: () => setShowCenterPop(false)
        }} secondaryButton={{
          text: "Cancel",
          onClick: () => setShowCenterPop(false)
        }} />
        </Modal>

        <Modal id="modal-media-transition" show={showTransition} size="medium" onClose={() => setShowTransition(false)}>
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
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const te=["Overview","Wizard","Announcement","HeaderWithIconButton","Animation"],Me=Object.freeze(Object.defineProperty({__proto__:null,Animation:g,Announcement:M,HeaderWithIconButton:w,Overview:u,Wizard:x,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{M as A,w as H,Me as M,u as O,x as W,g as a};
