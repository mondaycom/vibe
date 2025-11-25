import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as W}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{A as R,a as t}from"./AlertBannerLink-BxSH8Xzs.js";import{A as n,a as r}from"./AlertBannerText-I7tg1ZEI.js";import{F}from"./Flex-Bimzf4jb.js";const p=W({component:r,actionPropsArray:["onClose"]}),M=a=>e.jsxs(r,{...a,children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),U={title:"Components/AlertBanner",component:r,subcomponents:{AlertBannerText:n,AlertBannerLink:t,AlertBannerButton:R},argTypes:p.argTypes,decorators:[...p.decorators,a=>e.jsx("div",{style:{width:"610px"},children:e.jsx(a,{})})]},s={render:M.bind({}),args:{id:"overview-alert-banner",ariaLabel:"Overview alert banner"},name:"Overview"},o={render:()=>e.jsxs(F,{direction:"column",gap:16,children:[e.jsxs(r,{id:"type-primary",ariaLabel:"Primary alert banner",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),e.jsxs(r,{id:"type-positive",ariaLabel:"Success alert banner",backgroundColor:"positive",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),e.jsxs(r,{id:"type-negative",ariaLabel:"Error alert banner",backgroundColor:"negative",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),e.jsxs(r,{id:"type-warning",ariaLabel:"Warning alert banner",backgroundColor:"warning",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),e.jsxs(r,{id:"type-dark",ariaLabel:"Dark alert banner",backgroundColor:"dark",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]})]}),name:"Types"},i={render:()=>e.jsxs(r,{id:"with-button",ariaLabel:"Alert banner with action button",children:[e.jsx(n,{text:"Lorem ipsum dolor sit amet"}),e.jsx(R,{children:"Lorem Ipsum"})]}),name:"Alert Banner with button"},l={render:()=>e.jsxs(r,{id:"with-link",ariaLabel:"Alert banner with link",children:[e.jsx(n,{text:"Alert banner message"}),e.jsx(t,{text:"this is a CTA",href:"https://monday.com"})]}),name:"Alert Banner with link"},d={render:()=>e.jsxs(r,{id:"announcement",ariaLabel:"Event announcement",backgroundColor:"dark",children:[e.jsx(n,{text:"Join us at Elevate 2022"}),e.jsx(t,{text:"RSVP now",href:"https://monday.com"})]}),name:"Alert banner as an announcement"},m={render:()=>e.jsxs(r,{id:"upgrade-opportunity",ariaLabel:"Trial upgrade opportunity",onClose:()=>{},closeButtonAriaLabel:"Close upgrade banner",children:[e.jsx(n,{text:"7 days left on your monday CRM trial"}),e.jsx(t,{text:"Upgrade now",href:"https://monday.com"})]}),name:"Alert banner as an opportunity to upgrade"},c={render:()=>e.jsxs(r,{id:"overflow-text",ariaLabel:"Long text alert banner",children:[e.jsx(n,{text:"This is a really long alert..."}),e.jsx(t,{text:"Call to action",href:"https://monday.com"})]}),name:"Overflow text",decorators:[a=>e.jsx("div",{style:{width:"320px"},children:e.jsx(a,{})})]};var A,x,h;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: alertBannerTemplate.bind({}),
  args: {
    id: "overview-alert-banner",
    ariaLabel: "Overview alert banner"
  },
  name: "Overview"
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,b,B;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap={16}>
      <AlertBanner id="type-primary" ariaLabel="Primary alert banner">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-positive" ariaLabel="Success alert banner" backgroundColor="positive">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-negative" ariaLabel="Error alert banner" backgroundColor="negative">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-warning" ariaLabel="Warning alert banner" backgroundColor="warning">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-dark" ariaLabel="Dark alert banner" backgroundColor="dark">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
    </Flex>,
  name: "Types"
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var g,y,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <AlertBanner id="with-button" ariaLabel="Alert banner with action button">
      <AlertBannerText text="Lorem ipsum dolor sit amet" />
      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>
    </AlertBanner>,
  name: "Alert Banner with button"
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,L,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <AlertBanner id="with-link" ariaLabel="Alert banner with link">
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert Banner with link"
}`,...(v=(L=l.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var w,k,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <AlertBanner id="announcement" ariaLabel="Event announcement" backgroundColor="dark">
      <AlertBannerText text="Join us at Elevate 2022" />
      <AlertBannerLink text="RSVP now" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert banner as an announcement"
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var C,S,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <AlertBanner id="upgrade-opportunity" ariaLabel="Trial upgrade opportunity" onClose={() => {}} closeButtonAriaLabel="Close upgrade banner">
      <AlertBannerText text="7 days left on your monday CRM trial" />
      <AlertBannerLink text="Upgrade now" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert banner as an opportunity to upgrade"
}`,...(O=(S=m.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var E,_,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <AlertBanner id="overflow-text" ariaLabel="Long text alert banner">
      <AlertBannerText text="This is a really long alert..." />
      <AlertBannerLink text="Call to action" href="https://monday.com" />
    </AlertBanner>,
  name: "Overflow text",
  decorators: [(Story: React.ComponentType) => <div style={{
    width: "320px"
  }}>
        <Story />
      </div>]
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const D=["Overview","Types","AlertBannerWithButton","AlertBannerWithLink","AlertBannerAsAnAnnouncement","AlertBannerAsAnOpportunityToUpgrade","OverflowText"],G=Object.freeze(Object.defineProperty({__proto__:null,AlertBannerAsAnAnnouncement:d,AlertBannerAsAnOpportunityToUpgrade:m,AlertBannerWithButton:i,AlertBannerWithLink:l,OverflowText:c,Overview:s,Types:o,__namedExportsOrder:D,default:U},Symbol.toStringTag,{value:"Module"}));export{G as A,s as O,o as T,i as a,l as b,d as c,m as d,c as e};
