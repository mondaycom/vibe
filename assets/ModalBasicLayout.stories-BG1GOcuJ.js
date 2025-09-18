import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as p}from"./index-CTZeEbLr.js";import{T as A,M as H,a as d,b as s,c as r,d as c}from"./ModalFooterWizard-Vf02bp30.js";import{M as l}from"./ModalBasicLayout-C7_quxyG.js";import{F as ce}from"./Flex-D6jv3OvD.js";import{B as w}from"./Button-lmknnYep.js";import{T as a}from"./Text-1SYDbpP1.js";import{L as u}from"./Link-D05CMsge.js";import{u as de}from"./useWizard-B-GLCu9z.js";import{I as pe}from"./IconButton-C4r7nQVz.js";import{w as x}from"./Modal.stories.helpers-D7vtpmd7.js";import{C as he}from"./Checkbox-DLgR0mHF.js";import{r as xe}from"./Workspace-DtDO7RvQ.js";import{c as we}from"./createStoryMetaSettingsDecorator-M9remOuO.js";const D=we({component:c}),Me={title:"Components/Modal [New]/Basic modal",component:c,subcomponents:{ModalBasicLayout:l,ModalHeader:r,ModalContent:s,ModalFooter:d,ModalFooterWizard:H,TransitionView:A},argTypes:D.argTypes,decorators:D.decorators,parameters:{layout:"fullscreen"}},y={decorators:[(o,t)=>x(o,{isDocsView:t.viewMode==="docs",allowFullViewInDocs:!0})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(c,{id:"modal-basic",show:t,size:"medium",onClose:()=>n(!1),container:i,...o,children:[e.jsxs(l,{children:[e.jsx(r,{title:"Modal title",description:e.jsxs(a,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(u,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}})]}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},C={render:()=>{const[o,t]=p.useState(!1),[n,i]=p.useState(!1),[m,h]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{gap:"large",style:{paddingBlock:40},children:[e.jsx(w,{onClick:()=>t(!0),children:"Small"}),e.jsx(w,{onClick:()=>i(!0),children:"Medium"}),e.jsx(w,{onClick:()=>h(!0),children:"Large"})]}),e.jsxs(c,{id:"modal-basic-small",show:o,size:"small",onClose:()=>t(!1),children:[e.jsxs(l,{children:[e.jsx(r,{title:"Modal title",description:e.jsxs(a,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(u,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>t(!1)},secondaryButton:{text:"Cancel",onClick:()=>t(!1)}})]}),e.jsxs(c,{id:"modal-basic-medium",show:n,size:"medium",onClose:()=>i(!1),children:[e.jsxs(l,{children:[e.jsx(r,{title:"Modal title",description:e.jsxs(a,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(u,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>i(!1)},secondaryButton:{text:"Cancel",onClick:()=>i(!1)}})]}),e.jsxs(c,{id:"modal-basic-large",show:m,size:"large",onClose:()=>h(!1),children:[e.jsxs(l,{children:[e.jsx(r,{title:"Modal title",description:e.jsxs(a,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(u,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>h(!1)},secondaryButton:{text:"Cancel",onClick:()=>h(!1)}})]})]})}},f={decorators:[(o,t)=>x(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(c,{id:"modal-basic",show:t,alertModal:!0,size:"medium",onClose:()=>n(!1),container:i,children:[e.jsxs(l,{children:[e.jsx(r,{title:"Alert modal"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"This will allow closing the modal only by the close buttons and not by ESC or by clicking outside."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}})]})},k={decorators:[(o,t)=>x(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(c,{id:"modal-basic",show:t,size:"medium",onClose:()=>n(!1),container:i,style:{height:400},children:[e.jsxs(l,{children:[e.jsx(r,{title:"Scrollable modal"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task. The Basic Modal is intended for straightforward tasks, like selecting items or gathering basic information. Basic Modals help users focus on a single task without distractions. These modals do not support images or videos. When the content of the modal is too large to fit within the viewport, the modal content should become scrollable while the header and footer stay sticky. If the scroll is too long, consider switching to a different modal size or a different layout. Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}})]})},g={decorators:[(o,t)=>x(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>{const m=[e.jsxs(l,{children:[e.jsx(r,{title:"Modal with wizard"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsxs(l,{children:[e.jsx(r,{title:"Modal with wizard"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsxs(l,{children:[e.jsx(r,{title:"Modal with wizard"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]})],{activeStep:h,direction:T,next:M,back:b,isFirstStep:z,isLastStep:L,goToStep:F}=de({stepCount:m.length}),P=L?"Confirm":"Next";return e.jsxs(c,{id:"modal-basic",show:t,size:"medium",onClose:()=>n(!1),container:i,children:[e.jsx(A,{activeStep:h,direction:T,children:m}),e.jsx(H,{activeStep:h,stepCount:m.length,onStepClick:F,primaryButton:{text:P,onClick:M},secondaryButton:{text:"Back",onClick:b,disabled:z}})]})}},S={decorators:[(o,t)=>x(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(c,{id:"modal-basic",show:t,size:"medium",onClose:()=>n(!1),container:i,children:[e.jsxs(l,{children:[e.jsx(r,{title:"Modal title",description:e.jsxs(a,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(u,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)},renderSideAction:e.jsx(he,{label:"Don't show again"})})]})},j={decorators:[(o,t)=>x(o,{size:"large",isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(c,{id:"modal-basic",show:t,size:"small",onClose:()=>n(!1),container:i,children:[e.jsxs(l,{children:[e.jsx(r,{title:"Want to delete?"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"There are other tasks connected to this task. Deleting this task will remove any existing connections. It will be kept in trash for 30 days."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}})]})},B={decorators:[(o,t)=>x(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:i})=>e.jsxs(c,{id:"modal-basic",show:t,renderHeaderAction:e.jsx(pe,{icon:xe,size:"small",kind:"tertiary",ariaLabel:"Open Menu"}),size:"medium",onClose:()=>n(!1),container:i,children:[e.jsxs(l,{children:[e.jsx(r,{title:"Modal title",description:e.jsxs(a,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(u,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)},renderSideAction:e.jsx(he,{label:"Don't show again"})})]})},v={render:()=>{const[o,t]=p.useState(!1),[n,i]=p.useState(!1),[m,h]=p.useState(!1),T=p.useRef(null),M=[e.jsxs(l,{children:[e.jsx(r,{title:"Modal with wizard"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsxs(l,{children:[e.jsx(r,{title:"Modal with wizard"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsxs(l,{children:[e.jsx(r,{title:"Modal with wizard"}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]})],{activeStep:b,direction:z,next:L,back:F,isFirstStep:P,isLastStep:ue,goToStep:me}=de({stepCount:M.length});return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{gap:"large",style:{paddingBlock:40},children:[e.jsx(w,{ref:T,onClick:()=>t(!0),children:"Anchor"}),e.jsx(w,{onClick:()=>i(!0),children:"Center pop"}),e.jsx(w,{onClick:()=>h(!0),children:"Transition"})]}),e.jsxs(c,{id:"modal-basic-anchor",show:o,anchorElementRef:T,size:"medium",onClose:()=>t(!1),children:[e.jsxs(l,{children:[e.jsx(r,{title:"Modal title",description:e.jsxs(a,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(u,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>t(!1)},secondaryButton:{text:"Cancel",onClick:()=>t(!1)}})]}),e.jsxs(c,{id:"modal-basic-center",show:n,size:"medium",onClose:()=>i(!1),children:[e.jsxs(l,{children:[e.jsx(r,{title:"Modal title",description:e.jsxs(a,{type:"text1",children:["Modal subtitle, can come with icon ",e.jsx(u,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),e.jsx(s,{children:e.jsx(a,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})})]}),e.jsx(d,{primaryButton:{text:"Confirm",onClick:()=>i(!1)},secondaryButton:{text:"Cancel",onClick:()=>i(!1)}})]}),e.jsxs(c,{id:"modal-basic-transition",show:m,size:"medium",onClose:()=>h(!1),children:[e.jsx(A,{activeStep:b,direction:z,children:M}),e.jsx(H,{activeStep:b,stepCount:M.length,onStepClick:me,primaryButton:{text:ue?"Confirm":"Next",onClick:L},secondaryButton:{text:"Back",onClick:F,disabled:P}})]})]})}};var V,_,W;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    isDocsView: context.viewMode === "docs",
    allowFullViewInDocs: true
  })],
  render: (args, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)} container={container} {...args}>
        <ModalBasicLayout>
          <ModalHeader title="Modal title" description={<Text type="text1">
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>} />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
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
}`,...(W=(_=y.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var O,E,I;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [showSmall, setShowSmall] = useState(false);
    const [showMedium, setShowMedium] = useState(false);
    const [showLarge, setShowLarge] = useState(false);
    return <>
        <Flex gap="large" style={{
        paddingBlock: 40
      }}>
          <Button onClick={() => setShowSmall(true)}>Small</Button>
          <Button onClick={() => setShowMedium(true)}>Medium</Button>
          <Button onClick={() => setShowLarge(true)}>Large</Button>
        </Flex>

        <Modal id="modal-basic-small" show={showSmall} size="small" onClose={() => setShowSmall(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
          text: "Confirm",
          onClick: () => setShowSmall(false)
        }} secondaryButton={{
          text: "Cancel",
          onClick: () => setShowSmall(false)
        }} />
        </Modal>

        <Modal id="modal-basic-medium" show={showMedium} size="medium" onClose={() => setShowMedium(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
          text: "Confirm",
          onClick: () => setShowMedium(false)
        }} secondaryButton={{
          text: "Cancel",
          onClick: () => setShowMedium(false)
        }} />
        </Modal>

        <Modal id="modal-basic-large" show={showLarge} size="large" onClose={() => setShowLarge(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
          text: "Confirm",
          onClick: () => setShowLarge(false)
        }} secondaryButton={{
          text: "Cancel",
          onClick: () => setShowLarge(false)
        }} />
        </Modal>
      </>;
  }
}`,...(I=(E=C.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var R,N,q;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-basic" show={show} alertModal size="medium" onClose={() => setShow(false)} container={container}>
        <ModalBasicLayout>
          <ModalHeader title="Alert modal" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              This will allow closing the modal only by the close buttons and not by ESC or by clicking outside.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
        text: "Confirm",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Cancel",
        onClick: () => setShow(false)
      }} />
      </Modal>;
  }
}`,...(q=(N=f.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var G,J,K;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)} container={container} style={{
      height: 400
    }}>
        <ModalBasicLayout>
          <ModalHeader title="Scrollable modal" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task. The Basic Modal is intended for
              straightforward tasks, like selecting items or gathering basic information. Basic Modals help users focus
              on a single task without distractions. These modals do not support images or videos. When the content of
              the modal is too large to fit within the viewport, the modal content should become scrollable while the
              header and footer stay sticky. If the scroll is too long, consider switching to a different modal size or
              a different layout. Modal content will appear here, you can custom it however you want, according to the
              user needs. Please make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
        text: "Confirm",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Cancel",
        onClick: () => setShow(false)
      }} />
      </Modal>;
  }
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    const steps = [<ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>, <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>, <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>];
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
    return <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)} container={container}>
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
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)} container={container}>
        <ModalBasicLayout>
          <ModalHeader title="Modal title" description={<Text type="text1">
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>} />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
        text: "Confirm",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Cancel",
        onClick: () => setShow(false)
      }} renderSideAction={<Checkbox label="Don't show again" />} />
      </Modal>;
  }
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    size: "large",
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-basic" show={show} size="small" onClose={() => setShow(false)} container={container}>
        <ModalBasicLayout>
          <ModalHeader title="Want to delete?" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              There are other tasks connected to this task. Deleting this task will remove any existing connections. It
              will be kept in trash for 30 days.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
        text: "Confirm",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Cancel",
        onClick: () => setShow(false)
      }} />
      </Modal>;
  }
}`,...(ne=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,ie;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: [(Story, context) => withOpenedModalPreview(Story, {
    isDocsView: context.viewMode === "docs"
  })],
  render: (_, {
    show,
    setShow,
    container
  }) => {
    return <Modal id="modal-basic" show={show} renderHeaderAction={<IconButton icon={Menu} size="small" kind="tertiary" ariaLabel="Open Menu" />} size="medium" onClose={() => setShow(false)} container={container}>
        <ModalBasicLayout>
          <ModalHeader title="Modal title" description={<Text type="text1">
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>} />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
        text: "Confirm",
        onClick: () => setShow(false)
      }} secondaryButton={{
        text: "Cancel",
        onClick: () => setShow(false)
      }} renderSideAction={<Checkbox label="Don't show again" />} />
      </Modal>;
  }
}`,...(ie=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var se,re,le;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [showAnchor, setShowAnchor] = useState(false);
    const [showCenterPop, setShowCenterPop] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const anchorButtonRef = useRef<HTMLButtonElement>(null);
    const transitionSteps = [<ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>, <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>, <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>];
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

        <Modal id="modal-basic-anchor" show={showAnchor} anchorElementRef={anchorButtonRef} size="medium" onClose={() => setShowAnchor(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
          text: "Confirm",
          onClick: () => setShowAnchor(false)
        }} secondaryButton={{
          text: "Cancel",
          onClick: () => setShowAnchor(false)
        }} />
        </Modal>

        <Modal id="modal-basic-center" show={showCenterPop} size="medium" onClose={() => setShowCenterPop(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
          text: "Confirm",
          onClick: () => setShowCenterPop(false)
        }} secondaryButton={{
          text: "Cancel",
          onClick: () => setShowCenterPop(false)
        }} />
        </Modal>

        <Modal id="modal-basic-transition" show={showTransition} size="medium" onClose={() => setShowTransition(false)}>
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
}`,...(le=(re=v.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const ye=["Overview","Sizes","AlertModal","Scroll","Wizard","FooterWithExtraContent","Confirmation","HeaderWithIconButton","Animation"],Ae=Object.freeze(Object.defineProperty({__proto__:null,AlertModal:f,Animation:v,Confirmation:j,FooterWithExtraContent:S,HeaderWithIconButton:B,Overview:y,Scroll:k,Sizes:C,Wizard:g,__namedExportsOrder:ye,default:Me},Symbol.toStringTag,{value:"Module"}));export{f as A,j as C,S as F,B as H,Ae as M,y as O,C as S,g as W,k as a,v as b};
