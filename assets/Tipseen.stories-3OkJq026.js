import{R as e,r as v}from"./index-Hemj67b4.js";import{a as u,T as t}from"./TipseenWizard-phlr71V5.js";import{T as r,a as f,b as R}from"./TipseenImage-BGKfMJZF.js";import{F as U}from"./Flex-DIvs4XZj.js";import{c as q}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const m="data:image/svg+xml,%3csvg%20width='288'%20height='145'%20viewBox='0%200%20288%20145'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_56661_34367)'%3e%3crect%20width='290'%20height='145'%20fill='%236C6CFF'/%3e%3crect%20opacity='0.2'%20width='195.146'%20height='143.413'%20rx='4'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%2086.0872%20112.804)'%20fill='white'/%3e%3crect%20opacity='0.2'%20width='40.654'%20height='143.413'%20rx='4'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%2045.634%20136.844)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='25.8673'%20height='7.7747'%20rx='3.88735'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%2057.823%20136.086)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='25.8673'%20height='7.7747'%20rx='3.88735'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%2070.0117%20142.889)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='25.8673'%20height='7.7747'%20rx='3.88735'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%2082.2004%20150.059)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='25.8673'%20height='7.7747'%20rx='3.88735'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%2094.3894%20157.229)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='97.4952'%20height='35.9932'%20rx='14.8194'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%20102.276%20112.058)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='212.192'%20height='9.3922'%20rx='4'%20transform='matrix(0.866044%20-0.499967%20-0.866044%20-0.499967%2042.0493%20131.417)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='54.0554'%20height='35.9932'%20rx='14.8194'%20transform='matrix(-0.866044%200.499967%200.866044%200.499967%20239.261%2032.7026)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='123.085'%20height='35.9932'%20rx='14.8194'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%20183.296%20152.777)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='57.5582'%20height='35.9932'%20rx='14.8194'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%20139.56%20133.638)'%20fill='white'/%3e%3crect%20opacity='0.1'%20width='57.5582'%20height='35.9932'%20rx='14.8194'%20transform='matrix(0.866044%20-0.499967%200.866044%200.499967%20194.768%20101.375)'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_56661_34367'%3e%3crect%20width='290'%20height='145'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",g=""+new URL("video-B70UE_qJ.mp4",import.meta.url).href,w=q({component:t}),D={title:"Components/Tipseen",component:t,subcomponents:{TipseenMedia:R,TipseenImage:f,TipseenContent:r,TipseenWizard:u},argTypes:w.argTypes,decorators:w.decorators},J=({title:i,children:c,position:h,...d})=>e.createElement(t,{modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],position:h,content:e.createElement(r,{title:i},c),...d},e.createElement("div",{style:{height:"160px"}})),o={render:J.bind({}),name:"Overview",args:{title:"Title",children:e.createElement("div",null,"Message for the user will appear here, to give more information about the feature."),position:"right"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},n={render:()=>e.createElement(U,{direction:"column"},e.createElement(t,{modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],position:"right",content:e.createElement(r,{title:"This is a title"},"Message for the user will appear here, to give more information about the feature.")},e.createElement("div",{style:{height:"180px"}})),e.createElement(t,{modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],position:"right",color:"primary",content:e.createElement(r,{title:"This is a title"},"Message for the user will appear here, to give more information about the feature.")},e.createElement("div",{style:{height:"180px"}}))),name:"Colors"},s={render:()=>{const i=[e.createElement("div",null,"Popover message №1 will appear here"),e.createElement("div",null,"Popover message №2 will appear here"),e.createElement("div",null,"Popover message №3 will appear here"),e.createElement("div",null,"Popover message №4 will appear here"),e.createElement("div",null,"Popover message №5 will appear here")],[c,h]=v.useState(2),d=v.useCallback((Y,j)=>{h(j)},[]);return e.createElement(t,{modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],position:"right",content:e.createElement(u,{title:"This is a title",steps:i,activeStepIndex:c,onChangeActiveStep:d,onFinish:()=>{}})},e.createElement("div",{style:{height:"150px"}}))},name:"Tipseen with a wizard"},a={render:()=>{const i=[e.createElement("div",null,"Message for the user will appear here, to give more information about the feature."),e.createElement("div",null,"Message for the user will appear here, to give more information about the feature."),e.createElement("div",null,"Message for the user will appear here, to give more information about the feature."),e.createElement("div",null,"Message for the user will appear here, to give more information about the feature."),e.createElement("div",null,"Message for the user will appear here, to give more information about the feature.")];return e.createElement(t,{position:"right",modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],closeButtonTheme:"light",content:e.createElement(e.Fragment,null,e.createElement(f,{src:m}),e.createElement(u,{title:"This is a title",steps:i,activeStepIndex:2}))},e.createElement("div",{style:{height:"300px"}}))},parameters:{docs:{liveEdit:{scope:{picture:m}}}},name:"Tipseen with image"},l={render:()=>e.createElement(t,{position:"right",modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],closeButtonTheme:"dark",content:e.createElement(e.Fragment,null,e.createElement(R,null,e.createElement("video",{autoPlay:!0,muted:!0,loop:!0,src:g,style:{width:"100%"}})),e.createElement(r,{title:"This is a title"},"Message for the user will appear here, to give more information about the feature."))},e.createElement("div",{style:{height:"280px"}})),parameters:{docs:{liveEdit:{scope:{video:g}}}},name:"Tipseen with custom media"},p={render:()=>e.createElement(t,{closeButtonTheme:"dark",floating:!0,content:e.createElement(e.Fragment,null,e.createElement(f,{src:m}),e.createElement(r,{title:"This is a Floating Tipseen"},"Message for the user will appear here, to give more information about the feature.")),containerSelector:"#tipseen-floating-container"}),decorators:[i=>e.createElement("div",{style:{height:"400px"},id:"tipseen-floating-container"},e.createElement(i,null))],parameters:{docs:{liveEdit:{scope:{picture:m}}}},name:"Floating Tipseen"};var T,x,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: tipseenTemplate.bind({}),
  name: "Overview",
  args: {
    title: "Title",
    children: <div>Message for the user will appear here, to give more information about the feature.</div>,
    position: "right"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var E,b,S;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="column">
        <Tipseen
      // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
      // Therefore, there is no need to move this prop in your implementations.
      modifiers={[{
        name: "preventOverflow",
        options: {
          mainAxis: false
        }
      }]} position="right" content={<TipseenContent title="This is a title">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>}>
          <div style={{
          height: "180px"
        }} />
        </Tipseen>
        <Tipseen
      // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
      // Therefore, there is no need to move this prop in your implementations.
      modifiers={[{
        name: "preventOverflow",
        options: {
          mainAxis: false
        }
      }]} position="right" color="primary" content={<TipseenContent title="This is a title">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>}>
          <div style={{
          height: "180px"
        }} />
        </Tipseen>
      </Flex>;
  },
  name: "Colors"
}`,...(S=(b=n.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var M,C,A;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const content = [<div>Popover message №1 will appear here</div>, <div>Popover message №2 will appear here</div>, <div>Popover message №3 will appear here</div>, <div>Popover message №4 will appear here</div>, <div>Popover message №5 will appear here</div>];
    const [activeStepIndex, setActiveStepIndex] = useState(2);
    const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
      setActiveStepIndex(stepIndex);
    }, []);
    return <Tipseen
    // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
    // Therefore, there is no need to move this prop in your implementations.
    modifiers={[{
      name: "preventOverflow",
      options: {
        mainAxis: false
      }
    }]} position="right" content={<TipseenWizard title="This is a title" steps={content} activeStepIndex={activeStepIndex} onChangeActiveStep={onChangeActiveStep} onFinish={() => {}} />}>
        <div style={{
        height: "150px"
      }} />
      </Tipseen>;
  },
  name: "Tipseen with a wizard"
}`,...(A=(C=s.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var O,F,I;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const content = [<div>Message for the user will appear here, to give more information about the feature.</div>, <div>Message for the user will appear here, to give more information about the feature.</div>, <div>Message for the user will appear here, to give more information about the feature.</div>, <div>Message for the user will appear here, to give more information about the feature.</div>, <div>Message for the user will appear here, to give more information about the feature.</div>];
    return <Tipseen
    // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
    // Therefore, there is no need to move this prop in your implementations.
    position="right" modifiers={[{
      name: "preventOverflow",
      options: {
        mainAxis: false
      }
    }]} closeButtonTheme="light" content={<>
            <TipseenImage src={picture} />
            <TipseenWizard title="This is a title" steps={content} activeStepIndex={2} />
          </>}>
        <div style={{
        height: "300px"
      }} />
      </Tipseen>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          picture
        }
      }
    }
  },
  name: "Tipseen with image"
}`,...(I=(F=a.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,_,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <Tipseen position="right"
    // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
    // Therefore, there is no need to move this prop in your implementations.
    modifiers={[{
      name: "preventOverflow",
      options: {
        mainAxis: false
      }
    }]} closeButtonTheme="dark" content={<>
            <TipseenMedia>
              <video autoPlay muted loop src={video} style={{
          width: "100%"
        }} />
            </TipseenMedia>
            <TipseenContent title="This is a title">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>
          </>}>
        <div style={{
        height: "280px"
      }} />
      </Tipseen>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          video
        }
      }
    }
  },
  name: "Tipseen with custom media"
}`,...(W=(_=l.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var z,B,k;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <Tipseen closeButtonTheme="dark" floating content={<>
            <TipseenImage src={picture} />
            <TipseenContent title="This is a Floating Tipseen">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>
          </>}
    // You do not have to use containerSelector, in current use this is for story only
    containerSelector="#tipseen-floating-container" />;
  },
  decorators: [Story => <div style={{
    height: "400px"
  }} id="tipseen-floating-container">
        <Story />
      </div>],
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          picture
        }
      }
    }
  },
  name: "Floating Tipseen"
}`,...(k=(B=p.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const L=["Overview","Colors","TipseenWithAWizard","TipseenWithImage","TipseenWithCustomMedia","FloatingTipseen"],V=Object.freeze(Object.defineProperty({__proto__:null,Colors:n,FloatingTipseen:p,Overview:o,TipseenWithAWizard:s,TipseenWithCustomMedia:l,TipseenWithImage:a,__namedExportsOrder:L,default:D},Symbol.toStringTag,{value:"Module"}));export{n as C,p as F,o as O,V as T,s as a,a as b,l as c};
