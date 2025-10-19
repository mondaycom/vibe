import{j as o}from"./jsx-runtime-lwGtIXvq.js";import{r as e}from"./index-CTZeEbLr.js";import{a as c,M as r,b as X,L as p,c as T}from"./LegacyModal-CIg5ogyj.js";import{B as V}from"./Button-BmfXCbqd.js";import{F as Y}from"./Flex-Brm3wHG7.js";import{c as k}from"./index-BpvXyOxN.js";import{l as _}from"./tip-CK87uV3P.js";import{m as b}from"./storybook-link-DXCJBxd4.js";import{D as Z}from"./Tooltip-C-Jn4wPI.js";import{D as $}from"./DialogContentContainer-BJ3T4Ri3.js";import{H as oo}from"./Heading-C456QkcL.js";import{E as v}from"./EditableHeading-CxlKuzzF.js";import{t as eo}from"./Upgrade-CC_w3yRG.js";import{c as to}from"./createStoryMetaSettingsDecorator-M9remOuO.js";const no="_modalDialogBadExample_1wm0f_1",lo="_wrapper_1wm0f_1",ao="_content_1wm0f_6",so="_heading_1wm0f_10",ro="_footer_1wm0f_13",u={modalDialogBadExample:no,wrapper:lo,content:ao,heading:so,footer:ro},d=({title:a="Open modal",setShow:n,openModalButtonRef:l,color:t=void 0,testId:s=void 0})=>o.jsx(V,{onClick:()=>n(!0),ref:l,color:t,"data-testid":s,children:a}),D=({bestPractice:a,modalTitle:n,buttonTitle:l,children:t,hideFooter:s,show:i=!1,openModalTestId:M,...x})=>{const[S,h]=e.useState(i),B=e.useRef(null),m=e.useCallback(()=>{h(!1)},[]),j=d({testId:M,title:l||n,setShow:h,openModalButtonRef:B,color:a?"positive":"negative"}),R=s?null:o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:m,onSecondaryButtonClick:m});return o.jsxs(o.Fragment,{children:[j,o.jsxs(r,{id:"story-book-modal",title:n,triggerElement:B.current,show:S,onClose:m,closeButtonAriaLabel:"close",...x,contentSpacing:!0,children:[t,R]})]})},jo=()=>{const[a,n]=e.useState(!1),l=e.useCallback(()=>{n(!1)},[]),t=e.useCallback(()=>{n(!0)},[]),s=o.jsx($,{style:{width:"500px",margin:"auto"},children:o.jsxs(Y,{className:k(u.modalDialogBadExample,u.content),direction:"column",justify:"start",align:"start",children:[o.jsx(oo,{className:k(u.modalDialogBadExample,u.heading),type:"h2",children:"Dialog title"}),"Dialog content",o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",className:k(u.modalDialogBadExample,u.footer),onPrimaryButtonClick:l,onSecondaryButtonClick:l})]})});return o.jsx(Z,{open:a,onClickOutside:l,wrapperClassName:k(u.modalDialogBadExample,u.wrapper),content:s,children:o.jsx(V,{onClick:t,color:"negative",children:"Click here"})})},Ro=()=>o.jsxs(_,{children:["Set ",o.jsx("code",{children:"alertDialog"})," to ",o.jsx("code",{children:"true"})," in order to allow closing the modal only by the close buttons and not by ESC or by clicking outside."]}),To=()=>o.jsxs(_,{children:["For creating a popover positioned next to other components, like customized menus, check out our"," ",o.jsx(b,{page:"Components/Dialog/Dialog",size:b.sizes.SMALL,children:"Dialog"})," ","component."]}),_o=()=>o.jsxs(_,{title:"Dev tip",children:[`If you wish to implement a dropdown inside a Modal container and need help displaying the dropdown's popovers
    correctly, read more about our dropdown in popovers technical pattern `,o.jsx(b,{page:"Technical patterns/Dropdowns inside pop overs",story:"Modal with damaged dropdown",size:b.sizes.SMALL,children:"here."})]});try{d.displayName="useHelperOpenModalButton",d.__docgenInfo={description:"",displayName:"useHelperOpenModalButton",props:{}}}catch{}try{D.displayName="ModalExampleWrapper",D.__docgenInfo={description:"",displayName:"ModalExampleWrapper",props:{}}}catch{}const E=to({component:r,actionPropsArray:["onClose"]}),co=({onClose:a,...n})=>{const[l,t]=e.useState(!1),s=e.useRef(null),i=e.useCallback(()=>t(!1),[]),M=d({title:n.title,setShow:t,openModalButtonRef:s});return o.jsxs("div",{children:[M,o.jsxs(r,{id:"story-book-modal",title:"Modal title",description:"Subtitle description text goes here",contentSpacing:!0,triggerElement:s.current,show:l,onClose:i,...n,children:[o.jsx(p,{children:o.jsx("p",{children:"Modal content goes here"})}),o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:i,onSecondaryButtonClick:i})]})]})},io={title:"Components/Modal [Deprecated]",component:r,subcomponents:{ModalHeader:T,ModalContent:p,ModalFooter:X},argTypes:E.argTypes,decorators:E.decorators},f={render:co.bind({}),name:"Overview"},C={render:()=>{const[a,n]=e.useState(!1),[l,t]=e.useState(!1),[s,i]=e.useState(!1),M=e.useRef(null),x=e.useRef(null),S=e.useRef(null),h=e.useCallback(()=>n(!1),[]),B=e.useCallback(()=>t(!1),[]),m=e.useCallback(()=>i(!1),[]),F=d({title:"Default",setShow:n,openModalButtonRef:M}),j=d({title:"Full size",setShow:t,openModalButtonRef:x}),R=d({title:"Custom size (720px)",setShow:i,openModalButtonRef:S});return o.jsxs(o.Fragment,{children:[F,o.jsxs(r,{id:"storybook-modal-normal",title:"Modal title",triggerElement:M.current,show:a,onClose:h,contentSpacing:!0,children:[o.jsx(p,{children:"Modal content goes here"}),o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:h,onSecondaryButtonClick:h})]}),j,o.jsxs(r,{id:"storybook-modal-full",title:"Modal title",triggerElement:x.current,show:l,onClose:B,width:"full-width",contentSpacing:!0,children:[o.jsx(p,{children:"Modal content goes here"}),o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:B,onSecondaryButtonClick:B})]}),R,o.jsxs(r,{id:"storybook-modal-custom",title:"Modal title",triggerElement:S.current,show:s,onClose:m,width:"720px",contentSpacing:!0,children:[o.jsx(p,{children:"Modal content goes here"}),o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:m,onSecondaryButtonClick:m})]})]})},name:"Sizes"},g={render:()=>{const[a,n]=e.useState(!1),l=e.useRef(null),t=e.useCallback(()=>{n(!1)},[]),s=d({title:"Header with icon",setShow:n,openModalButtonRef:l});return o.jsxs("div",{children:[s,o.jsxs(r,{id:"story-book-modal",title:"Modal header with an Icon",triggerElement:l.current,show:a,onClose:t,closeButtonAriaLabel:"close",contentSpacing:!0,children:[o.jsx(T,{title:"Modal Heading",icon:eo,iconSize:32}),o.jsx(p,{children:"Modal content goes here"}),o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:t,onSecondaryButtonClick:t})]})]})},name:"Modal with icon"},y={render:()=>{const[a,n]=e.useState(!1),l=e.useRef(null),t=e.useCallback(()=>{n(!1)},[]),s=d({title:"Alert dialog",setShow:n,openModalButtonRef:l});return o.jsxs("div",{children:[s,o.jsxs(r,{alertDialog:!0,id:"story-book-modal",title:"Alert modal",triggerElement:l.current,show:a,onClose:t,contentSpacing:!0,children:[o.jsx(p,{children:"Modal content goes here"}),o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:t,onSecondaryButtonClick:t})]})]})},name:"Alert Modal"},w={render:()=>{const[a,n]=e.useState(!1),l=e.useRef(null),t=e.useCallback(()=>{n(!1)},[]),s=d({title:"Open modal",setShow:n,openModalButtonRef:l});return o.jsxs("div",{children:[s,o.jsxs(r,{id:"story-book-modal",triggerElement:l.current,show:a,onClose:t,closeButtonAriaLabel:"close",contentSpacing:!0,children:[o.jsx(T,{description:"Description text goes here",children:o.jsx(v,{type:v.types.H2,value:"Modal title"})}),o.jsx(p,{children:"Modal content goes here"}),o.jsx(c,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:t,onSecondaryButtonClick:t})]})]})},name:"Modal with editable title"};var N,H,A;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: modalTemplate.bind({}),
  name: "Overview"
}`,...(A=(H=f.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var O,P,z;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [showNormal, setShowNormal] = useState(false);
    const [showFull, setShowFull] = useState(false);
    const [showCustom, setShowCustom] = useState(false);
    const openModalButtonRefNormal = useRef(null);
    const openModalButtonRefFull = useRef(null);
    const openModalButtonRefCustom = useRef(null);
    const closeModalNormal = useCallback(() => setShowNormal(false), []);
    const closeModalFull = useCallback(() => setShowFull(false), []);
    const closeModalCustom = useCallback(() => setShowCustom(false), []);
    const openModalButtonNormal = useHelperOpenModalButton({
      title: "Default",
      setShow: setShowNormal,
      openModalButtonRef: openModalButtonRefNormal
    });
    const openModalButtonFull = useHelperOpenModalButton({
      title: "Full size",
      setShow: setShowFull,
      openModalButtonRef: openModalButtonRefFull
    });
    const openModalButtonCustom = useHelperOpenModalButton({
      title: "Custom size (720px)",
      setShow: setShowCustom,
      openModalButtonRef: openModalButtonRefCustom
    });
    return <>
        {/* Default Width Modal */}
        {openModalButtonNormal}
        <Modal id="storybook-modal-normal" title="Modal title" triggerElement={openModalButtonRefNormal.current} show={showNormal} onClose={closeModalNormal} contentSpacing>
          <ModalContent>Modal content goes here</ModalContent>
          <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModalNormal} onSecondaryButtonClick={closeModalNormal} />
        </Modal>

        {/* Full Width Modal */}
        {openModalButtonFull}
        <Modal id="storybook-modal-full" title="Modal title" triggerElement={openModalButtonRefFull.current} show={showFull} onClose={closeModalFull} width="full-width" contentSpacing>
          <ModalContent>Modal content goes here</ModalContent>
          <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModalFull} onSecondaryButtonClick={closeModalFull} />
        </Modal>

        {/* Custom Width Modal */}
        {openModalButtonCustom}
        <Modal id="storybook-modal-custom" title="Modal title" triggerElement={openModalButtonRefCustom.current} show={showCustom} onClose={closeModalCustom} width="720px" contentSpacing>
          <ModalContent>Modal content goes here</ModalContent>
          <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModalCustom} onSecondaryButtonClick={closeModalCustom} />
        </Modal>
      </>;
  },
  name: "Sizes"
}`,...(z=(P=C.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var I,L,W;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  // Boilerplate for creating a modal, not relevant for add icon to the header
  render:
  // Internal helper, not part of the API
  // Modal header with an icon example
  /** Please implement your custom Modal header and set it as child for adding an Icon to your modal **/
  () => {
    const [show, setShow] = useState(false);
    const openModalButtonRef = useRef(null);
    const closeModal = useCallback(() => {
      setShow(false);
    }, []);
    const openModalButton = useHelperOpenModalButton({
      title: "Header with icon",
      setShow,
      openModalButtonRef
    });
    return <div>
          {openModalButton}
          <Modal id={"story-book-modal"} title="Modal header with an Icon" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} closeButtonAriaLabel={"close"} contentSpacing>
            {}
            <ModalHeader title={"Modal Heading"} icon={Upgrade} iconSize={32} />
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />
          </Modal>
        </div>;
  },
  name: "Modal with icon"
}`,...(W=(L=g.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var U,q,G;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  // Boilerplate for creating a modal, not relevant for add icon to the header
  render:
  // Internal helper, not part of the API
  // Modal header with an icon example
  // this makes your modal as alert dialog
  () => {
    const [show, setShow] = useState(false);
    const openModalButtonRef = useRef(null);
    const closeModal = useCallback(() => {
      setShow(false);
    }, []);
    const openModalButton = useHelperOpenModalButton({
      title: "Alert dialog",
      setShow,
      openModalButtonRef
    });
    return <div>
          {openModalButton}
          <Modal alertDialog id="story-book-modal" title="Alert modal" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} contentSpacing>
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />
          </Modal>
        </div>;
  },
  name: "Alert Modal"
}`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  // Boilerplate for creating a modal, not relevant for add icon to the header
  render:
  // Internal helper, not part of the API
  // Modal header with an icon example
  /** Please follow the design guidelines when implementing custom title **/
  () => {
    const [show, setShow] = useState(false);
    const openModalButtonRef = useRef(null);
    const closeModal = useCallback(() => {
      setShow(false);
    }, []);
    const openModalButton = useHelperOpenModalButton({
      title: "Open modal",
      setShow,
      openModalButtonRef
    });
    return <div>
          {openModalButton}
          <Modal id={"story-book-modal"} triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} closeButtonAriaLabel={"close"} contentSpacing>
            <ModalHeader description={"Description text goes here"}>
              <EditableHeading type={EditableHeading.types.H2} value={"Modal title"} />
            </ModalHeader>
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />
          </Modal>
        </div>;
  },
  name: "Modal with editable title"
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const uo=["Overview","Sizes","ModalWithIcon","AlertModal","ModalWithEditableTitle"],Fo=Object.freeze(Object.defineProperty({__proto__:null,AlertModal:y,ModalWithEditableTitle:w,ModalWithIcon:g,Overview:f,Sizes:C,__namedExportsOrder:uo,default:io},Symbol.toStringTag,{value:"Module"}));export{y as A,jo as D,Fo as M,f as O,C as S,Ro as T,To as a,g as b,D as c,_o as d,w as e};
