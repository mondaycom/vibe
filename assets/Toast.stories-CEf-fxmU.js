import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as s}from"./index-CTZeEbLr.js";import{c as $}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{r as ee}from"./createComponentTemplate-B08h-OOW.js";import{T as t}from"./Toast-DM3CZBaE.js";import{F as te}from"./Flex-Bimzf4jb.js";import{B as f}from"./Button-zprqw9Vf.js";const y=$({component:t,iconPropNamesArray:["icon"]}),ne=[T=>e.jsx("div",{style:{padding:"40px",position:"static",transform:"translate(0, 0)",marginRight:"auto",marginLeft:"auto"},children:e.jsx(T,{})})],se={title:"Components/Toast",component:t,argTypes:y.argTypes,decorators:[...y.decorators,...ne]},ae=ee(t),a={render:ae.bind({}),name:"Overview",args:{id:"overview-toast",children:"General message toast",open:!0,actions:[{type:"button",content:"Button"}]},parameters:{chromatic:{pauseAnimationAtEnd:!1},docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsx(t,{id:"default-with-button",open:!0,actions:[{type:"button",content:"Button"}],children:"General message toast"}),name:"Default with button",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},r={render:()=>e.jsx(t,{id:"toast-with-link",open:!0,actions:[{type:"link",text:"Link to action",href:"https://monday.com"}],children:"General message toast"}),name:"Toast with link"},i={render:()=>e.jsx(t,{id:"toast-loading",open:!0,loading:!0,children:"General message toast"}),name:"Toast with loading",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},c={render:()=>e.jsx(t,{id:"success-message",open:!0,type:"positive",actions:[{type:"button",content:"Undo 5"}],children:"Positive message toast"}),name:"Success message"},u={render:()=>e.jsx(t,{id:"error-message",open:!0,actions:[{type:"button",content:"Button"}],type:"negative",children:"Negative message toast"}),name:"Error message"},m={render:()=>e.jsx(t,{id:"warning-message",open:!0,actions:[{type:"button",content:"Button"}],type:"warning",children:"Warning message toast"}),name:"Warning message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},l={render:()=>e.jsx(t,{id:"dark-message",open:!0,actions:[{type:"button",content:"Button"}],type:"dark",children:"Dark message toast"}),name:"Dark message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},d={render:()=>e.jsx(t,{id:"feedback-loop",open:!0,type:"positive",actions:[{type:"button",content:"Undo"}],children:"We successfully deleted 1 item"}),parameters:{chromatic:{pauseAnimationAtEnd:!1}}},p={render:()=>{const[T,h]=s.useState(!1),[V,k]=s.useState(!1),[n,g]=s.useState(!1),X=s.useCallback(()=>{h(!0),g(!0),setTimeout(()=>{g(!1)},1e3)},[]),Z=s.useCallback(()=>{k(!0),g(!0),setTimeout(()=>{g(!1)},1e3)},[]);return e.jsxs(te,{gap:"medium",children:[e.jsx(f,{id:"animation-success-button",ariaLabel:"Trigger success toast",onClick:X,kind:f.kinds.SECONDARY,children:"Success action"}),e.jsx(f,{id:"animation-failure-button",ariaLabel:"Trigger failure toast",onClick:Z,kind:f.kinds.SECONDARY,children:"Failure action"}),e.jsx(t,{id:"animation-success-toast",open:T,type:n?"normal":"positive",actions:n?[]:[{type:"button",content:"Undo"}],onClose:()=>h(!1),autoHideDuration:2e3,loading:n,children:n?"Deleting 1 selected item...":"We successfully deleted 1 item"}),e.jsx(t,{id:"animation-failure-toast",open:V,type:n?"normal":"negative",onClose:()=>k(!1),autoHideDuration:2e3,loading:n,children:n?"Deleting 1 selected item...":"Something went wrong"})]})}};var b,S,D;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: toastTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-toast",
    children: "General message toast",
    open: true,
    actions: [{
      type: "button",
      content: "Button"
    }]
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: false
    },
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var A,v,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="default-with-button" open actions={[{
      type: "button",
      content: "Button"
    }]}>
        General message toast
      </Toast>;
  },
  name: "Default with button",
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: false
    }
  }
}`,...(E=(v=o.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var x,O,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="toast-with-link" open actions={[{
      type: "link",
      text: "Link to action",
      href: "https://monday.com"
    }]}>
        General message toast
      </Toast>;
  },
  name: "Toast with link"
}`,...(w=(O=r.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var C,B,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="toast-loading" open loading>
        General message toast
      </Toast>;
  },
  name: "Toast with loading",
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
}`,...(j=(B=i.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var W,F,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="success-message" open type="positive" actions={[{
      type: "button",
      content: "Undo 5"
    }]}>
        Positive message toast
      </Toast>;
  },
  name: "Success message"
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,G,N;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="error-message" open actions={[{
      type: "button",
      content: "Button"
    }]} type="negative">
        Negative message toast
      </Toast>;
  },
  name: "Error message"
}`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var _,I,R;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="warning-message" open actions={[{
      type: "button",
      content: "Button"
    }]} type="warning">
        Warning message toast
      </Toast>;
  },
  name: "Warning message",
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: false
    }
  }
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var U,H,P;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="dark-message" open actions={[{
      type: "button",
      content: "Button"
    }]} type="dark">
        Dark message toast
      </Toast>;
  },
  name: "Dark message",
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: false
    }
  }
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var Y,z,q;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="feedback-loop" open type="positive" actions={[{
      type: "button",
      content: "Undo"
    }]}>
        We successfully deleted 1 item
      </Toast>;
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: false
    }
  }
}`,...(q=(z=d.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [successToastOpen, setSuccessToastOpen] = useState(false);
    const [failureToastOpen, setFailureToastOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const onSuccessClick = useCallback(() => {
      setSuccessToastOpen(true);
      setIsDeleting(true);
      setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
    }, []);
    const onFailureClick = useCallback(() => {
      setFailureToastOpen(true);
      setIsDeleting(true);
      setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
    }, []);
    return <Flex gap="medium">
        <Button id="animation-success-button" ariaLabel="Trigger success toast" onClick={onSuccessClick} kind={Button.kinds.SECONDARY}>
          Success action
        </Button>
        <Button id="animation-failure-button" ariaLabel="Trigger failure toast" onClick={onFailureClick} kind={Button.kinds.SECONDARY}>
          Failure action
        </Button>
        <Toast id="animation-success-toast" open={successToastOpen} type={isDeleting ? "normal" : "positive"} actions={isDeleting ? [] : [{
        type: "button",
        content: "Undo"
      }]} onClose={() => setSuccessToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>
          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}
        </Toast>
        <Toast id="animation-failure-toast" open={failureToastOpen} type={isDeleting ? "normal" : "negative"} onClose={() => setFailureToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>
          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}
        </Toast>
      </Flex>;
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const oe=["Overview","DefaultWithButton","ToastWithLink","ToastWithLoading","SuccessMessage","ErrorMessage","WarningMessage","DarkMessage","FeedbackLoop","Animation"],pe=Object.freeze(Object.defineProperty({__proto__:null,Animation:p,DarkMessage:l,DefaultWithButton:o,ErrorMessage:u,FeedbackLoop:d,Overview:a,SuccessMessage:c,ToastWithLink:r,ToastWithLoading:i,WarningMessage:m,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{p as A,o as D,u as E,d as F,a as O,c as S,pe as T,m as W,r as a,i as b,l as c};
