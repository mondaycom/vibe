import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as s}from"./index-CTZeEbLr.js";import{c as $}from"./createStoryMetaSettingsDecorator-DJeVV-64.js";import{T as t}from"./Toast-o7zooxHV.js";import{r as ee}from"./createComponentTemplate-B08h-OOW.js";import{F as te}from"./Flex-DZptE16X.js";import{B as y}from"./Button-CbqyrOxW.js";const b=$({component:t,iconPropNamesArray:["icon"]}),ne=[f=>e.jsx("div",{style:{padding:"40px",position:"static",transform:"translate(0, 0)",marginRight:"auto",marginLeft:"auto"},children:e.jsx(f,{})})],se={title:"Components/Toast",component:t,argTypes:b.argTypes,decorators:[...b.decorators,...ne]},ae=ee(t),a={render:ae.bind({}),name:"Overview",args:{id:"overview-toast",children:"General message toast",open:!0,actions:[{type:"button",content:"Button"}]},parameters:{chromatic:{pauseAnimationAtEnd:!1},docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsx(t,{id:"default-with-button",open:!0,actions:[{type:"button",content:"Button"}],children:"General message toast"}),name:"Default with button",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},r={render:()=>e.jsx(t,{id:"toast-with-link",open:!0,actions:[{type:"link",text:"Link to action",href:"https://monday.com"}],children:"General message toast"}),name:"Toast with link"},i={render:()=>e.jsx(t,{id:"toast-loading",open:!0,loading:!0,children:"General message toast"}),name:"Toast with loading",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},c={render:()=>e.jsx(t,{id:"success-message",open:!0,type:"positive",actions:[{type:"button",content:"Undo 5"}],children:"Positive message toast"}),name:"Success message"},u={render:()=>e.jsx(t,{id:"error-message",open:!0,actions:[{type:"button",content:"Button"}],type:"negative",children:"Negative message toast"}),name:"Error message"},l={render:()=>e.jsx(t,{id:"warning-message",open:!0,actions:[{type:"button",content:"Button"}],type:"warning",children:"Warning message toast"}),name:"Warning message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},m={render:()=>e.jsx(t,{id:"dark-message",open:!0,actions:[{type:"button",content:"Button"}],type:"dark",children:"Dark message toast"}),name:"Dark message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},d={render:()=>e.jsx(t,{id:"feedback-loop",open:!0,type:"positive",actions:[{type:"button",content:"Undo"}],children:"We successfully deleted 1 item"}),parameters:{chromatic:{pauseAnimationAtEnd:!1}}},p={render:()=>{const[f,T]=s.useState(!1),[X,h]=s.useState(!1),[n,g]=s.useState(!1),Y=s.useCallback(()=>{T(!0),g(!0),setTimeout(()=>{g(!1)},1e3)},[]),Z=s.useCallback(()=>{h(!0),g(!0),setTimeout(()=>{g(!1)},1e3)},[]);return e.jsxs(te,{gap:"medium",children:[e.jsx(y,{id:"animation-success-button","aria-label":"Trigger success toast",onClick:Y,kind:"secondary",children:"Success action"}),e.jsx(y,{id:"animation-failure-button","aria-label":"Trigger failure toast",onClick:Z,kind:"secondary",children:"Failure action"}),e.jsx(t,{id:"animation-success-toast",open:f,type:n?"normal":"positive",actions:n?[]:[{type:"button",content:"Undo"}],onClose:()=>T(!1),autoHideDuration:2e3,loading:n,children:n?"Deleting 1 selected item...":"We successfully deleted 1 item"}),e.jsx(t,{id:"animation-failure-toast",open:X,type:n?"normal":"negative",onClose:()=>h(!1),autoHideDuration:2e3,loading:n,children:n?"Deleting 1 selected item...":"Something went wrong"})]})}};var k,S,D;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var v,A,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(A=o.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var w,E,O;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(E=r.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var j,C,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(C=i.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var W,F,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="success-message" open type="positive" actions={[{
      type: "button",
      content: "Undo 5"
    }]}>
        Positive message toast
      </Toast>;
  },
  name: "Success message"
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var L,G,_;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    return <Toast id="error-message" open actions={[{
      type: "button",
      content: "Button"
    }]} type="negative">
        Negative message toast
      </Toast>;
  },
  name: "Error message"
}`,...(_=(G=u.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var I,U,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(U=l.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var P,N,R;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(N=m.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,q,J;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(q=d.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,V;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        <Button id="animation-success-button" aria-label="Trigger success toast" onClick={onSuccessClick} kind="secondary">
          Success action
        </Button>
        <Button id="animation-failure-button" aria-label="Trigger failure toast" onClick={onFailureClick} kind="secondary">
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
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const oe=["Overview","DefaultWithButton","ToastWithLink","ToastWithLoading","SuccessMessage","ErrorMessage","WarningMessage","DarkMessage","FeedbackLoop","Animation"],pe=Object.freeze(Object.defineProperty({__proto__:null,Animation:p,DarkMessage:m,DefaultWithButton:o,ErrorMessage:u,FeedbackLoop:d,Overview:a,SuccessMessage:c,ToastWithLink:r,ToastWithLoading:i,WarningMessage:l,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{p as A,o as D,u as E,d as F,a as O,c as S,pe as T,l as W,r as a,i as b,m as c};
