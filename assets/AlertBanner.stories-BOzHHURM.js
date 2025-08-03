import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{A as n,a as r}from"./AlertBannerText-BinWgi8Z.js";import{A as F,a as t}from"./AlertBannerLink-20Jp4JDj.js";import{c as M}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as P}from"./Flex-2Q04fxOc.js";const A=M({component:r,actionPropsArray:["onClose"]}),U=a=>e.jsxs(r,{...a,children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),W={title:"Components/AlertBanner",component:r,subcomponents:{AlertBannerText:n,AlertBannerLink:t,AlertBannerButton:F},argTypes:A.argTypes,decorators:[...A.decorators,a=>e.jsx("div",{style:{width:"610px"},children:e.jsx(a,{})})]},s={render:U.bind({}),name:"Overview"},o={render:()=>e.jsxs(P,{direction:"column",gap:16,children:[e.jsxs(r,{children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),e.jsxs(r,{backgroundColor:"positive",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),e.jsxs(r,{backgroundColor:"negative",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),e.jsxs(r,{backgroundColor:"warning",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),e.jsxs(r,{backgroundColor:"dark",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]})]}),name:"Types"},l={render:()=>e.jsxs(r,{children:[e.jsx(n,{text:"Lorem ipsum dolor sit amet"}),e.jsx(F,{children:"Lorem Ipsum"})]}),name:"Alert Banner with button"},i={render:()=>e.jsxs(r,{children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),name:"Alert Banner with link"},m={render:()=>e.jsxs(r,{backgroundColor:"dark",children:[e.jsx(n,{text:"Join us at Elevate 2022"}),e.jsx(t,{text:"RSVP now",href:"https://monday.com"})]}),name:"Alert banner as an announcement"},c={render:()=>e.jsxs(r,{children:[e.jsx(n,{text:"7 days left on your monday CRM trial"}),e.jsx(t,{text:"Upgrade now",href:"https://monday.com"})]}),name:"Alert banner as an opportunity to upgrade"},d={render:()=>e.jsxs(r,{children:[e.jsx(n,{text:"This is a really long alert..."}),e.jsx(t,{text:"Call to action",href:"https://monday.com"})]}),name:"Overflow text",decorators:[a=>e.jsx("div",{style:{width:"320px"},children:e.jsx(a,{})})]};var x,p,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: alertBannerTemplate.bind({}),
  name: "Overview"
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var B,u,g;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap={16}>
      <AlertBanner>
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor="positive">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor="negative">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor="warning">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor="dark">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
    </Flex>,
  name: "Types"
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,j,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <AlertBanner>
      <AlertBannerText text="Lorem ipsum dolor sit amet" />
      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>
    </AlertBanner>,
  name: "Alert Banner with button"
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var b,f,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <AlertBanner>
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert Banner with link"
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,v,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <AlertBanner backgroundColor="dark">
      <AlertBannerText text="Join us at Elevate 2022" />
      <AlertBannerLink text="RSVP now" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert banner as an announcement"
}`,...(w=(v=m.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,L,O;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AlertBanner>
      <AlertBannerText text="7 days left on your monday CRM trial" />
      <AlertBannerLink text="Upgrade now" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert banner as an opportunity to upgrade"
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var _,R,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <AlertBanner>
      <AlertBannerText text="This is a really long alert..." />
      <AlertBannerLink text="Call to action" href="https://monday.com" />
    </AlertBanner>,
  name: "Overflow text",
  decorators: [(Story: React.ComponentType) => <div style={{
    width: "320px"
  }}>
        <Story />
      </div>]
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const I=["Overview","Types","AlertBannerWithButton","AlertBannerWithLink","AlertBannerAsAnAnnouncement","AlertBannerAsAnOpportunityToUpgrade","OverflowText"],G=Object.freeze(Object.defineProperty({__proto__:null,AlertBannerAsAnAnnouncement:m,AlertBannerAsAnOpportunityToUpgrade:c,AlertBannerWithButton:l,AlertBannerWithLink:i,OverflowText:d,Overview:s,Types:o,__namedExportsOrder:I,default:W},Symbol.toStringTag,{value:"Module"}));export{G as A,s as O,o as T,l as a,i as b,m as c,c as d,d as e};
