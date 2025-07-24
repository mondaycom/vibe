import{R as e,r as p}from"./index-Hemj67b4.js";import{T as A,M as H,a as d,b as r,c as i,d as c}from"./ModalFooterWizard-DWVqFfsB.js";import{M as s}from"./ModalBasicLayout-C3VAkq-U.js";import{F as ce}from"./Flex-DIvs4XZj.js";import{B as M}from"./Button-DEM-Hn8V.js";import{T as a}from"./Text-C0CU0_Vh.js";import{L as u}from"./Link-s0y4jlGK.js";import{u as de}from"./useWizard-Brh8lqKR.js";import{I as pe}from"./IconButton-BIAWrK7n.js";import{w}from"./Modal.stories.helpers-Borx98DH.js";import{C as me}from"./Checkbox-eRCpXEeq.js";import{r as we}from"./Workspace-BIJf5qCK.js";import{c as Me}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const D=Me({component:c}),ye={title:"Components/Modal [New]/Basic modal",component:c,subcomponents:{ModalBasicLayout:s,ModalHeader:i,ModalContent:r,ModalFooter:d,ModalFooterWizard:H,TransitionView:A},argTypes:D.argTypes,decorators:D.decorators,parameters:{layout:"fullscreen"}},x={decorators:[(o,t)=>w(o,{isDocsView:t.viewMode==="docs",allowFullViewInDocs:!0})],render:(o,{show:t,setShow:n,container:l})=>e.createElement(c,{id:"modal-basic",show:t,size:"medium",onClose:()=>n(!1),container:l,...o},e.createElement(s,null,e.createElement(i,{title:"Modal title",description:e.createElement(a,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(u,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}})),parameters:{docs:{liveEdit:{isEnabled:!1}}}},C={render:()=>{const[o,t]=p.useState(!1),[n,l]=p.useState(!1),[h,m]=p.useState(!1);return e.createElement(e.Fragment,null,e.createElement(ce,{gap:"large",style:{paddingBlock:40}},e.createElement(M,{onClick:()=>t(!0)},"Small"),e.createElement(M,{onClick:()=>l(!0)},"Medium"),e.createElement(M,{onClick:()=>m(!0)},"Large")),e.createElement(c,{id:"modal-basic-small",show:o,size:"small",onClose:()=>t(!1)},e.createElement(s,null,e.createElement(i,{title:"Modal title",description:e.createElement(a,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(u,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>t(!1)},secondaryButton:{text:"Cancel",onClick:()=>t(!1)}})),e.createElement(c,{id:"modal-basic-medium",show:n,size:"medium",onClose:()=>l(!1)},e.createElement(s,null,e.createElement(i,{title:"Modal title",description:e.createElement(a,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(u,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>l(!1)},secondaryButton:{text:"Cancel",onClick:()=>l(!1)}})),e.createElement(c,{id:"modal-basic-large",show:h,size:"large",onClose:()=>m(!1)},e.createElement(s,null,e.createElement(i,{title:"Modal title",description:e.createElement(a,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(u,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>m(!1)},secondaryButton:{text:"Cancel",onClick:()=>m(!1)}})))}},f={decorators:[(o,t)=>w(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:l})=>e.createElement(c,{id:"modal-basic",show:t,alertModal:!0,size:"medium",onClose:()=>n(!1),container:l},e.createElement(s,null,e.createElement(i,{title:"Alert modal"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"This will allow closing the modal only by the close buttons and not by ESC or by clicking outside."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}}))},k={decorators:[(o,t)=>w(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:l})=>e.createElement(c,{id:"modal-basic",show:t,size:"medium",onClose:()=>n(!1),container:l,style:{height:400}},e.createElement(s,null,e.createElement(i,{title:"Scrollable modal"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task. The Basic Modal is intended for straightforward tasks, like selecting items or gathering basic information. Basic Modals help users focus on a single task without distractions. These modals do not support images or videos. When the content of the modal is too large to fit within the viewport, the modal content should become scrollable while the header and footer stay sticky. If the scroll is too long, consider switching to a different modal size or a different layout. Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}}))},g={decorators:[(o,t)=>w(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:l})=>{const h=[e.createElement(s,null,e.createElement(i,{title:"Modal with wizard"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(s,null,e.createElement(i,{title:"Modal with wizard"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(s,null,e.createElement(i,{title:"Modal with wizard"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")))],{activeStep:m,direction:T,next:y,back:b,isFirstStep:z,isLastStep:L,goToStep:F}=de({stepCount:h.length}),P=L?"Confirm":"Next";return e.createElement(c,{id:"modal-basic",show:t,size:"medium",onClose:()=>n(!1),container:l},e.createElement(A,{activeStep:m,direction:T},h),e.createElement(H,{activeStep:m,stepCount:h.length,onStepClick:F,primaryButton:{text:P,onClick:y},secondaryButton:{text:"Back",onClick:b,disabled:z}}))}},S={decorators:[(o,t)=>w(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:l})=>e.createElement(c,{id:"modal-basic",show:t,size:"medium",onClose:()=>n(!1),container:l},e.createElement(s,null,e.createElement(i,{title:"Modal title",description:e.createElement(a,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(u,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)},renderSideAction:e.createElement(me,{label:"Don't show again"})}))},E={decorators:[(o,t)=>w(o,{size:"large",isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:l})=>e.createElement(c,{id:"modal-basic",show:t,size:"small",onClose:()=>n(!1),container:l},e.createElement(s,null,e.createElement(i,{title:"Want to delete?"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"There are other tasks connected to this task. Deleting this task will remove any existing connections. It will be kept in trash for 30 days."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)}}))},B={decorators:[(o,t)=>w(o,{isDocsView:t.viewMode==="docs"})],render:(o,{show:t,setShow:n,container:l})=>e.createElement(c,{id:"modal-basic",show:t,renderHeaderAction:e.createElement(pe,{icon:we,size:"small",kind:"tertiary",ariaLabel:"Open Menu"}),size:"medium",onClose:()=>n(!1),container:l},e.createElement(s,null,e.createElement(i,{title:"Modal title",description:e.createElement(a,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(u,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>n(!1)},secondaryButton:{text:"Cancel",onClick:()=>n(!1)},renderSideAction:e.createElement(me,{label:"Don't show again"})}))},v={render:()=>{const[o,t]=p.useState(!1),[n,l]=p.useState(!1),[h,m]=p.useState(!1),T=p.useRef(null),y=[e.createElement(s,null,e.createElement(i,{title:"Modal with wizard"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(s,null,e.createElement(i,{title:"Modal with wizard"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(s,null,e.createElement(i,{title:"Modal with wizard"}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.")))],{activeStep:b,direction:z,next:L,back:F,isFirstStep:P,isLastStep:ue,goToStep:he}=de({stepCount:y.length});return e.createElement(e.Fragment,null,e.createElement(ce,{gap:"large",style:{paddingBlock:40}},e.createElement(M,{ref:T,onClick:()=>t(!0)},"Anchor"),e.createElement(M,{onClick:()=>l(!0)},"Center pop"),e.createElement(M,{onClick:()=>m(!0)},"Transition")),e.createElement(c,{id:"modal-basic-anchor",show:o,anchorElementRef:T,size:"medium",onClose:()=>t(!1)},e.createElement(s,null,e.createElement(i,{title:"Modal title",description:e.createElement(a,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(u,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>t(!1)},secondaryButton:{text:"Cancel",onClick:()=>t(!1)}})),e.createElement(c,{id:"modal-basic-center",show:n,size:"medium",onClose:()=>l(!1)},e.createElement(s,null,e.createElement(i,{title:"Modal title",description:e.createElement(a,{type:"text1"},"Modal subtitle, can come with icon ",e.createElement(u,{inheritFontSize:!0,inlineText:!0,text:"and link."}))}),e.createElement(r,null,e.createElement(a,{type:"text1",align:"inherit",element:"p"},"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."))),e.createElement(d,{primaryButton:{text:"Confirm",onClick:()=>l(!1)},secondaryButton:{text:"Cancel",onClick:()=>l(!1)}})),e.createElement(c,{id:"modal-basic-transition",show:h,size:"medium",onClose:()=>m(!1)},e.createElement(A,{activeStep:b,direction:z},y),e.createElement(H,{activeStep:b,stepCount:y.length,onStepClick:he,primaryButton:{text:ue?"Confirm":"Next",onClick:L},secondaryButton:{text:"Back",onClick:F,disabled:P}})))}};var V,_,W;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(_=x.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var O,I,R;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(I=C.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var N,j,q;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(j=f.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,J,K;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,le;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var re,ie,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const xe=["Overview","Sizes","AlertModal","Scroll","Wizard","FooterWithExtraContent","Confirmation","HeaderWithIconButton","Animation"],Pe=Object.freeze(Object.defineProperty({__proto__:null,AlertModal:f,Animation:v,Confirmation:E,FooterWithExtraContent:S,HeaderWithIconButton:B,Overview:x,Scroll:k,Sizes:C,Wizard:g,__namedExportsOrder:xe,default:ye},Symbol.toStringTag,{value:"Module"}));export{f as A,E as C,S as F,B as H,Pe as M,x as O,C as S,g as W,k as a,v as b};
