import{R as e,r as a}from"./index-Hemj67b4.js";import{T as t}from"./Toast-B1oCEFXE.js";import{B as T}from"./Button-t0_MS1N7.js";import{F as $}from"./Flex-pz2uwxlA.js";import{r as ee}from"./createComponentTemplate-Y0VTmW_y.js";import{c as te}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const E=te({component:t,iconPropNamesArray:["icon"]}),ne=[f=>e.createElement("div",{style:{padding:"40px",position:"static",transform:"translate(0, 0)",marginRight:"auto",marginLeft:"auto"}},e.createElement(f,null))],ae={title:"Components/Toast",component:t,argTypes:E.argTypes,decorators:[...E.decorators,...ne]},se=ee(t),s={render:se.bind({}),name:"Overview",args:{children:"General message toast",open:!0,actions:[{type:"button",content:"Button"}]},parameters:{chromatic:{pauseAnimationAtEnd:!1},docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.createElement(t,{open:!0,actions:[{type:"button",content:"Button"}]},"General message toast"),name:"Default with button",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},r={render:()=>e.createElement(t,{open:!0,actions:[{type:"link",text:"Link to action",href:"https://monday.com"}]},"General message toast"),name:"Toast with link"},i={render:()=>e.createElement(t,{open:!0,loading:!0},"General message toast"),name:"Toast with loading",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},c={render:()=>e.createElement(t,{open:!0,type:"positive",actions:[{type:"button",content:"Undo 5"}]},"Positive message toast"),name:"Success message"},u={render:()=>e.createElement(t,{open:!0,actions:[{type:"button",content:"Button"}],type:"negative"},"Negative message toast"),name:"Error message"},m={render:()=>e.createElement(t,{open:!0,actions:[{type:"button",content:"Button"}],type:"warning"},"Warning message toast"),name:"Warning message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},l={render:()=>e.createElement(t,{open:!0,actions:[{type:"button",content:"Button"}],type:"dark"},"Dark message toast"),name:"Dark message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},p={render:()=>e.createElement(t,{open:!0,type:"positive",actions:[{type:"button",content:"Undo"}]},"We successfully deleted 1 item"),parameters:{chromatic:{pauseAnimationAtEnd:!1}}},d={render:()=>{const[f,y]=a.useState(!1),[V,S]=a.useState(!1),[n,g]=a.useState(!1),X=a.useCallback(()=>{y(!0),g(!0),setTimeout(()=>{g(!1)},1e3)},[]),Z=a.useCallback(()=>{S(!0),g(!0),setTimeout(()=>{g(!1)},1e3)},[]);return e.createElement($,{gap:"medium"},e.createElement(T,{onClick:X,kind:T.kinds.SECONDARY},"Success action"),e.createElement(T,{onClick:Z,kind:T.kinds.SECONDARY},"Failure action"),e.createElement(t,{open:f,type:n?"normal":"positive",actions:n?[]:[{type:"button",content:"Undo"}],onClose:()=>y(!1),autoHideDuration:2e3,loading:n},n?"Deleting 1 selected item...":"We successfully deleted 1 item"),e.createElement(t,{open:V,type:n?"normal":"negative",onClose:()=>S(!1),autoHideDuration:2e3,loading:n},n?"Deleting 1 selected item...":"Something went wrong"))}};var k,D,h;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: toastTemplate.bind({}),
  name: "Overview",
  args: {
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
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var b,A,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <Toast open actions={[{
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
}`,...(v=(A=o.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var O,C,B;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <Toast open actions={[{
      type: "link",
      text: "Link to action",
      href: "https://monday.com"
    }]}>
        General message toast
      </Toast>;
  },
  name: "Toast with link"
}`,...(B=(C=r.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var W,w,F;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <Toast open loading>
        General message toast
      </Toast>;
  },
  name: "Toast with loading",
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
}`,...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var M,x,L;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <Toast open type="positive" actions={[{
      type: "button",
      content: "Undo 5"
    }]}>
        Positive message toast
      </Toast>;
  },
  name: "Success message"
}`,...(L=(x=c.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var G,N,R;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <Toast open actions={[{
      type: "button",
      content: "Button"
    }]} type="negative">
        Negative message toast
      </Toast>;
  },
  name: "Error message"
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,I,U;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <Toast open actions={[{
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
}`,...(U=(I=m.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var H,P,Y;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    return <Toast open actions={[{
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
}`,...(Y=(P=l.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var j,z,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <Toast open type="positive" actions={[{
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
}`,...(q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        <Button onClick={onSuccessClick} kind={Button.kinds.SECONDARY}>
          Success action
        </Button>
        <Button onClick={onFailureClick} kind={Button.kinds.SECONDARY}>
          Failure action
        </Button>
        <Toast open={successToastOpen} type={isDeleting ? "normal" : "positive"} actions={isDeleting ? [] : [{
        type: "button",
        content: "Undo"
      }]} onClose={() => setSuccessToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>
          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}
        </Toast>
        <Toast open={failureToastOpen} type={isDeleting ? "normal" : "negative"} onClose={() => setFailureToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>
          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}
        </Toast>
      </Flex>;
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const oe=["Overview","DefaultWithButton","ToastWithLink","ToastWithLoading","SuccessMessage","ErrorMessage","WarningMessage","DarkMessage","FeedbackLoop","Animation"],pe=Object.freeze(Object.defineProperty({__proto__:null,Animation:d,DarkMessage:l,DefaultWithButton:o,ErrorMessage:u,FeedbackLoop:p,Overview:s,SuccessMessage:c,ToastWithLink:r,ToastWithLoading:i,WarningMessage:m,__namedExportsOrder:oe,default:ae},Symbol.toStringTag,{value:"Module"}));export{d as A,o as D,u as E,p as F,s as O,c as S,pe as T,m as W,r as a,i as b,l as c};
