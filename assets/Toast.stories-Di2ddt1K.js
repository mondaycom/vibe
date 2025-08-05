import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as s}from"./index-Hemj67b4.js";import{T as t}from"./Toast-Bdhw3VI4.js";import{B as T}from"./Button-CmXrS9k2.js";import{F as $}from"./Flex-2Q04fxOc.js";import{r as ee}from"./createComponentTemplate-Y0VTmW_y.js";import{c as te}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const S=te({component:t,iconPropNamesArray:["icon"]}),ne=[f=>e.jsx("div",{style:{padding:"40px",position:"static",transform:"translate(0, 0)",marginRight:"auto",marginLeft:"auto"},children:e.jsx(f,{})})],se={title:"Components/Toast",component:t,argTypes:S.argTypes,decorators:[...S.decorators,...ne]},ae=ee(t),a={render:ae.bind({}),name:"Overview",args:{children:"General message toast",open:!0,actions:[{type:"button",content:"Button"}]},parameters:{chromatic:{pauseAnimationAtEnd:!1},docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsx(t,{open:!0,actions:[{type:"button",content:"Button"}],children:"General message toast"}),name:"Default with button",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},r={render:()=>e.jsx(t,{open:!0,actions:[{type:"link",text:"Link to action",href:"https://monday.com"}],children:"General message toast"}),name:"Toast with link"},i={render:()=>e.jsx(t,{open:!0,loading:!0,children:"General message toast"}),name:"Toast with loading",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},c={render:()=>e.jsx(t,{open:!0,type:"positive",actions:[{type:"button",content:"Undo 5"}],children:"Positive message toast"}),name:"Success message"},u={render:()=>e.jsx(t,{open:!0,actions:[{type:"button",content:"Button"}],type:"negative",children:"Negative message toast"}),name:"Error message"},m={render:()=>e.jsx(t,{open:!0,actions:[{type:"button",content:"Button"}],type:"warning",children:"Warning message toast"}),name:"Warning message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},p={render:()=>e.jsx(t,{open:!0,actions:[{type:"button",content:"Button"}],type:"dark",children:"Dark message toast"}),name:"Dark message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},l={render:()=>e.jsx(t,{open:!0,type:"positive",actions:[{type:"button",content:"Undo"}],children:"We successfully deleted 1 item"}),parameters:{chromatic:{pauseAnimationAtEnd:!1}}},d={render:()=>{const[f,h]=s.useState(!1),[V,y]=s.useState(!1),[n,g]=s.useState(!1),X=s.useCallback(()=>{h(!0),g(!0),setTimeout(()=>{g(!1)},1e3)},[]),Z=s.useCallback(()=>{y(!0),g(!0),setTimeout(()=>{g(!1)},1e3)},[]);return e.jsxs($,{gap:"medium",children:[e.jsx(T,{onClick:X,kind:T.kinds.SECONDARY,children:"Success action"}),e.jsx(T,{onClick:Z,kind:T.kinds.SECONDARY,children:"Failure action"}),e.jsx(t,{open:f,type:n?"normal":"positive",actions:n?[]:[{type:"button",content:"Undo"}],onClose:()=>h(!1),autoHideDuration:2e3,loading:n,children:n?"Deleting 1 selected item...":"We successfully deleted 1 item"}),e.jsx(t,{open:V,type:n?"normal":"negative",onClose:()=>y(!1),autoHideDuration:2e3,loading:n,children:n?"Deleting 1 selected item...":"Something went wrong"})]})}};var k,D,b;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(b=(D=a.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var A,E,v;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var x,O,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(O=r.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var B,j,W;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var w,F,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <Toast open type="positive" actions={[{
      type: "button",
      content: "Undo 5"
    }]}>
        Positive message toast
      </Toast>;
  },
  name: "Success message"
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var L,G,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    return <Toast open actions={[{
      type: "button",
      content: "Button"
    }]} type="negative">
        Negative message toast
      </Toast>;
  },
  name: "Error message"
}`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var _,I,R;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var U,H,P;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var Y,z,q;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(q=(z=l.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const oe=["Overview","DefaultWithButton","ToastWithLink","ToastWithLoading","SuccessMessage","ErrorMessage","WarningMessage","DarkMessage","FeedbackLoop","Animation"],de=Object.freeze(Object.defineProperty({__proto__:null,Animation:d,DarkMessage:p,DefaultWithButton:o,ErrorMessage:u,FeedbackLoop:l,Overview:a,SuccessMessage:c,ToastWithLink:r,ToastWithLoading:i,WarningMessage:m,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{d as A,o as D,u as E,l as F,a as O,c as S,de as T,m as W,r as a,i as b,p as c};
