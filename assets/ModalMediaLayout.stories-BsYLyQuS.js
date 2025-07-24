import{R as e,r as b}from"./index-Hemj67b4.js";import{T as F,M as B,a as y,b as i,c as r,d as m}from"./ModalFooterWizard-BeKhxx3F.js";import{M as l}from"./ModalMedia-CNgwSPWy.js";import{M as d}from"./ModalMediaLayout-CsDtXW1s.js";import{T as c}from"./Text-B2fubIt7.js";import{L as C}from"./Link-s0y4jlGK.js";import{u as q}from"./useWizard-Brh8lqKR.js";import{I as Q}from"./IconButton-CfYEqm1b.js";import{F as X}from"./Flex-DIvs4XZj.js";import{B as L}from"./Button-DEM-Hn8V.js";import{w as S}from"./Modal.stories.helpers-DeKaG6sj.js";import{r as Z}from"./Workspace-BIJf5qCK.js";import{c as $}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const s=""+new URL("media-image-BMRPF0YN.png",import.meta.url).href,j=$({component:m}),ee={title:"Components/Modal [New]/Media modal",component:m,subcomponents:{ModalMediaLayout:d,ModalMedia:l,ModalHeader:r,ModalContent:i,ModalFooter:y,ModalFooterWizard:B,TransitionView:F},argTypes:j.argTypes,decorators:j.decorators,parameters:{layout:"fullscreen",docs:{liveEdit:{scope:{mediaImage:s}}}}},M={decorators:[(a,t)=>S(a,{size:"large",isDocsView:t.viewMode==="docs",allowFullViewInDocs:!0})],render:(a,{show:t,setShow:n,container:o})=>e.createElement(m,{id:"modal-media",show:t,size:"medium",onClose:()=>n(!1),container:o,...a},e.createElement(d,null,e.createElement(l,null,e.createElement("img",{src:s,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})),e.createElement(r,{title:"Modal title"}),e.createElement(i,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"The media modal is ideal for introducing new features or onboarding, the user can also"," ",e.createElement(C,{inheritFontSize:!0,inlineText:!0,text:"add a link"}),"."))),e.createElement(y,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}})),parameters:{docs:{liveEdit:{isEnabled:!1}}}},h={decorators:[(a,t)=>S(a,{size:"large",isDocsView:t.viewMode==="docs"})],render:(a,{show:t,setShow:n,container:o})=>{const p=[e.createElement(d,null,e.createElement(l,null,e.createElement("img",{src:s,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})),e.createElement(r,{title:"Modal with wizard"}),e.createElement(i,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"We have made some changes to our modal component. Keep reading to see what improvements we made."))),e.createElement(d,null,e.createElement(l,null,e.createElement("img",{src:s,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})),e.createElement(r,{title:"Modal with wizard"}),e.createElement(i,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an animation.")))],{activeStep:u,direction:f,next:E,back:k,isFirstStep:T,isLastStep:v,goToStep:z}=q({stepCount:p.length}),J=v?"Confirm":"Next";return e.createElement(m,{id:"modal-media",show:t,size:"medium",onClose:()=>n(!1),container:o},e.createElement(F,{activeStep:u,direction:f},p),e.createElement(B,{activeStep:u,stepCount:p.length,onStepClick:z,primaryButton:{text:J,onClick:E},secondaryButton:{text:"Back",onClick:k,disabled:T}}))}},w={decorators:[(a,t)=>S(a,{size:"large",isDocsView:t.viewMode==="docs"})],render:(a,{show:t,setShow:n,container:o})=>e.createElement(m,{id:"modal-media",show:t,size:"medium",onClose:()=>n(!1),container:o},e.createElement(d,null,e.createElement(l,null,e.createElement("img",{src:s,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})),e.createElement(r,{title:"Meet our new feature"}),e.createElement(i,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Introducing our latest feature designed to make your workflow faster and easier. For more details"," ",e.createElement(C,{inheritFontSize:!0,inlineText:!0,text:"click here"}),"."))),e.createElement(y,{primaryButton:{text:"Got it",onClick:()=>n(!1)},secondaryButton:{text:"Dismiss",onClick:()=>n(!1)}}))},g={decorators:[(a,t)=>S(a,{size:"large",isDocsView:t.viewMode==="docs"})],render:(a,{show:t,setShow:n,container:o})=>e.createElement(m,{id:"modal-media",show:t,renderHeaderAction:e.createElement(Q,{icon:Z,size:"small",kind:"tertiary",ariaLabel:"Open Menu"}),size:"medium",onClose:()=>n(!1),container:o},e.createElement(d,null,e.createElement(l,null,e.createElement("img",{src:s,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})),e.createElement(r,{title:"Modal title"}),e.createElement(i,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"The media modal is ideal for introducing new features or onboarding, the user can also"," ",e.createElement(C,{inheritFontSize:!0,inlineText:!0,text:"add a link"}),"."))),e.createElement(y,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}}))},x={render:()=>{const[a,t]=b.useState(!1),[n,o]=b.useState(!1),p=[e.createElement(d,null,e.createElement(l,null,e.createElement("img",{src:s,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})),e.createElement(r,{title:"Modal with wizard"}),e.createElement(i,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"We have made some changes to our modal component. Keep reading to see what improvements we made."))),e.createElement(d,null,e.createElement(l,null,e.createElement("img",{src:s,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})),e.createElement(r,{title:"Modal with wizard"}),e.createElement(i,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an animation.")))],{activeStep:u,direction:f,next:E,back:k,isFirstStep:T,isLastStep:v,goToStep:z}=q({stepCount:p.length});return e.createElement(e.Fragment,null,e.createElement(X,{gap:"large",style:{paddingBlock:40}},e.createElement(L,{onClick:()=>t(!0)},"Center pop"),e.createElement(L,{onClick:()=>o(!0)},"Transition")),e.createElement(m,{id:"modal-media-center",show:a,size:"medium",onClose:()=>t(!1)},e.createElement(d,null,e.createElement(l,null,e.createElement("img",{src:s,alt:"media placeholder",style:{width:"100%",objectFit:"cover"}})),e.createElement(r,{title:"Modal title"}),e.createElement(i,null,e.createElement(c,{type:"text1",align:"inherit",element:"p"},"The media modal is ideal for introducing new features or onboarding, the user can also"," ",e.createElement(C,{inheritFontSize:!0,inlineText:!0,text:"add a link"}),"."))),e.createElement(y,{primaryButton:{text:"Confirm",onClick:()=>t(!1)},secondaryButton:{text:"Cancel",onClick:()=>t(!1)}})),e.createElement(m,{id:"modal-media-transition",show:n,size:"medium",onClose:()=>o(!1)},e.createElement(F,{activeStep:u,direction:f},p),e.createElement(B,{activeStep:u,stepCount:p.length,onStepClick:z,primaryButton:{text:v?"Confirm":"Next",onClick:E},secondaryButton:{text:"Back",onClick:k,disabled:T}})))}};var I,P,V;M.parameters={...M.parameters,docs:{...(I=M.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(P=M.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var W,H,D;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(H=h.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var O,_,N;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(_=w.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var A,K,R;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(K=g.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var G,U,Y;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const te=["Overview","Wizard","Announcement","HeaderWithIconButton","Animation"],he=Object.freeze(Object.defineProperty({__proto__:null,Animation:x,Announcement:w,HeaderWithIconButton:g,Overview:M,Wizard:h,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{w as A,g as H,he as M,M as O,h as W,x as a};
