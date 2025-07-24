import{R as e,r as o}from"./index-Hemj67b4.js";import{a as d,M as s,b as X,L as m,c as T}from"./LegacyModal-CR-Zo8KL.js";import{B as V}from"./Button-DEM-Hn8V.js";import{F as Y}from"./Flex-DIvs4XZj.js";import{c as k}from"./index-BpvXyOxN.js";import{l as _}from"./tip-BKixvd9t.js";import{m as x}from"./storybook-link-CyTpmT3K.js";import{D as Z}from"./Tooltip-C_-kbcOd.js";import{D as $}from"./DialogContentContainer-CjdfO6CD.js";import{H as ee}from"./Heading-ILPymVjj.js";import{E as v}from"./EditableHeading-SjTpOMNg.js";import{t as oe}from"./Upgrade-Jax58DJ-.js";import{c as te}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const ne="_modalDialogBadExample_1wm0f_1",le="_wrapper_1wm0f_1",ae="_content_1wm0f_6",re="_heading_1wm0f_10",se="_footer_1wm0f_13",u={modalDialogBadExample:ne,wrapper:le,content:ae,heading:re,footer:se},c=({title:a="Open modal",setShow:n,openModalButtonRef:l,color:t=void 0,testId:r=void 0})=>e.createElement(V,{onClick:()=>n(!0),ref:l,color:t,"data-testid":r},a),D=({bestPractice:a,modalTitle:n,buttonTitle:l,children:t,hideFooter:r,show:i=!1,openModalTestId:M,...S})=>{const[E,h]=o.useState(i),B=o.useRef(null),p=o.useCallback(()=>{h(!1)},[]),b=c({testId:M,title:l||n,setShow:h,openModalButtonRef:B,color:a?"positive":"negative"}),R=r?null:e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:p,onSecondaryButtonClick:p});return e.createElement(e.Fragment,null,b,e.createElement(s,{id:"story-book-modal",title:n,triggerElement:B.current,show:E,onClose:p,closeButtonAriaLabel:"close",...S,contentSpacing:!0},t,R))},ke=()=>{const[a,n]=o.useState(!1),l=o.useCallback(()=>{n(!1)},[]),t=o.useCallback(()=>{n(!0)},[]),r=e.createElement($,{style:{width:"500px",margin:"auto"}},e.createElement(Y,{className:k(u.modalDialogBadExample,u.content),direction:"column",justify:"start",align:"start"},e.createElement(ee,{className:k(u.modalDialogBadExample,u.heading),type:"h2"},"Dialog title"),"Dialog content",e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",className:k(u.modalDialogBadExample,u.footer),onPrimaryButtonClick:l,onSecondaryButtonClick:l})));return e.createElement(Z,{open:a,onClickOutside:l,wrapperClassName:k(u.modalDialogBadExample,u.wrapper),content:r},e.createElement(V,{onClick:t,color:"negative"},"Click here"))},xe=()=>e.createElement(_,null,"Set ",e.createElement("code",null,"alertDialog")," to ",e.createElement("code",null,"true")," in order to allow closing the modal only by the close buttons and not by ESC or by clicking outside."),be=()=>e.createElement(_,null,"For creating a popover positioned next to other components, like customized menus, check out our"," ",e.createElement(x,{page:"Components/Dialog/Dialog",size:x.sizes.SMALL},"Dialog")," ","component."),Re=()=>e.createElement(_,{title:"Dev tip"},`If you wish to implement a dropdown inside a Modal container and need help displaying the dropdown's popovers
    correctly, read more about our dropdown in popovers technical pattern `,e.createElement(x,{page:"Technical patterns/Dropdowns inside pop overs",story:"Modal with damaged dropdown",size:x.sizes.SMALL},"here."));try{c.displayName="useHelperOpenModalButton",c.__docgenInfo={description:"",displayName:"useHelperOpenModalButton",props:{}}}catch{}try{D.displayName="ModalExampleWrapper",D.__docgenInfo={description:"",displayName:"ModalExampleWrapper",props:{}}}catch{}const N=te({component:s,actionPropsArray:["onClose"]}),ce=({onClose:a,...n})=>{const[l,t]=o.useState(!1),r=o.useRef(null),i=o.useCallback(()=>t(!1),[]),M=c({title:n.title,setShow:t,openModalButtonRef:r});return e.createElement("div",null,M,e.createElement(s,{id:"story-book-modal",title:"Modal title",description:"Subtitle description text goes here",contentSpacing:!0,triggerElement:r.current,show:l,onClose:i,...n},e.createElement(m,null,e.createElement("p",null,"Modal content goes here")),e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:i,onSecondaryButtonClick:i})))},de={title:"Components/Modal [Deprecated]",component:s,subcomponents:{ModalHeader:T,ModalContent:m,ModalFooter:X},argTypes:N.argTypes,decorators:N.decorators},C={render:ce.bind({}),name:"Overview"},f={render:()=>{const[a,n]=o.useState(!1),[l,t]=o.useState(!1),[r,i]=o.useState(!1),M=o.useRef(null),S=o.useRef(null),E=o.useRef(null),h=o.useCallback(()=>n(!1),[]),B=o.useCallback(()=>t(!1),[]),p=o.useCallback(()=>i(!1),[]),F=c({title:"Default",setShow:n,openModalButtonRef:M}),b=c({title:"Full size",setShow:t,openModalButtonRef:S}),R=c({title:"Custom size (720px)",setShow:i,openModalButtonRef:E});return e.createElement(e.Fragment,null,F,e.createElement(s,{id:"storybook-modal-normal",title:"Modal title",triggerElement:M.current,show:a,onClose:h,contentSpacing:!0},e.createElement(m,null,"Modal content goes here"),e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:h,onSecondaryButtonClick:h})),b,e.createElement(s,{id:"storybook-modal-full",title:"Modal title",triggerElement:S.current,show:l,onClose:B,width:"full-width",contentSpacing:!0},e.createElement(m,null,"Modal content goes here"),e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:B,onSecondaryButtonClick:B})),R,e.createElement(s,{id:"storybook-modal-custom",title:"Modal title",triggerElement:E.current,show:r,onClose:p,width:"720px",contentSpacing:!0},e.createElement(m,null,"Modal content goes here"),e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:p,onSecondaryButtonClick:p})))},name:"Sizes"},g={render:()=>{const[a,n]=o.useState(!1),l=o.useRef(null),t=o.useCallback(()=>{n(!1)},[]),r=c({title:"Header with icon",setShow:n,openModalButtonRef:l});return e.createElement("div",null,r,e.createElement(s,{id:"story-book-modal",title:"Modal header with an Icon",triggerElement:l.current,show:a,onClose:t,closeButtonAriaLabel:"close",contentSpacing:!0},e.createElement(T,{title:"Modal Heading",icon:oe,iconSize:32}),e.createElement(m,null,"Modal content goes here"),e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:t,onSecondaryButtonClick:t})))},name:"Modal with icon"},y={render:()=>{const[a,n]=o.useState(!1),l=o.useRef(null),t=o.useCallback(()=>{n(!1)},[]),r=c({title:"Alert dialog",setShow:n,openModalButtonRef:l});return e.createElement("div",null,r,e.createElement(s,{alertDialog:!0,id:"story-book-modal",title:"Alert modal",triggerElement:l.current,show:a,onClose:t,contentSpacing:!0},e.createElement(m,null,"Modal content goes here"),e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:t,onSecondaryButtonClick:t})))},name:"Alert Modal"},w={render:()=>{const[a,n]=o.useState(!1),l=o.useRef(null),t=o.useCallback(()=>{n(!1)},[]),r=c({title:"Open modal",setShow:n,openModalButtonRef:l});return e.createElement("div",null,r,e.createElement(s,{id:"story-book-modal",triggerElement:l.current,show:a,onClose:t,closeButtonAriaLabel:"close",contentSpacing:!0},e.createElement(T,{description:"Description text goes here"},e.createElement(v,{type:v.types.H2,value:"Modal title"})),e.createElement(m,null,"Modal content goes here"),e.createElement(d,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:t,onSecondaryButtonClick:t})))},name:"Modal with editable title"};var H,A,O;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: modalTemplate.bind({}),
  name: "Overview"
}`,...(O=(A=C.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var P,z,I;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(z=f.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,W,j;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(W=g.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var U,q,G;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ie=["Overview","Sizes","ModalWithIcon","AlertModal","ModalWithEditableTitle"],Te=Object.freeze(Object.defineProperty({__proto__:null,AlertModal:y,ModalWithEditableTitle:w,ModalWithIcon:g,Overview:C,Sizes:f,__namedExportsOrder:ie,default:de},Symbol.toStringTag,{value:"Module"}));export{y as A,ke as D,Te as M,C as O,f as S,xe as T,be as a,g as b,D as c,Re as d,w as e};
