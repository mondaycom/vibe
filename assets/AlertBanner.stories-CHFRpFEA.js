import{R as e}from"./index-Hemj67b4.js";import{A as n,a as t}from"./AlertBannerText-Bxkv98yk.js";import{A as M,a as r}from"./AlertBannerLink-BztvEVbZ.js";import{c as P}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as U}from"./Flex-DIvs4XZj.js";const d=P({component:t,actionPropsArray:["onClose"]}),W=a=>e.createElement(t,{...a},e.createElement(n,{text:"Alert banner message"}),e.createElement(r,{text:"this is a CTA",href:"https://monday.com"})),j={title:"Components/AlertBanner",component:t,subcomponents:{AlertBannerText:n,AlertBannerLink:r,AlertBannerButton:M},argTypes:d.argTypes,decorators:[...d.decorators,a=>e.createElement("div",{style:{width:"610px"}},e.createElement(a,null))]},o={render:W.bind({}),name:"Overview"},s={render:()=>e.createElement(U,{direction:"column",gap:16},e.createElement(t,null,e.createElement(n,{text:"Alert banner message"}),e.createElement(r,{text:"this is a CTA",href:"https://monday.com"})),e.createElement(t,{backgroundColor:"positive"},e.createElement(n,{text:"Alert banner message"}),e.createElement(r,{text:"this is a CTA",href:"https://monday.com"})),e.createElement(t,{backgroundColor:"negative"},e.createElement(n,{text:"Alert banner message"}),e.createElement(r,{text:"this is a CTA",href:"https://monday.com"})),e.createElement(t,{backgroundColor:"warning"},e.createElement(n,{text:"Alert banner message"}),e.createElement(r,{text:"this is a CTA",href:"https://monday.com"})),e.createElement(t,{backgroundColor:"dark"},e.createElement(n,{text:"Alert banner message"}),e.createElement(r,{text:"this is a CTA",href:"https://monday.com"}))),name:"Types"},l={render:()=>e.createElement(t,null,e.createElement(n,{text:"Lorem ipsum dolor sit amet"}),e.createElement(M,null,"Lorem Ipsum")),name:"Alert Banner with button"},m={render:()=>e.createElement(t,null,e.createElement(n,{text:"Alert banner message"}),e.createElement(r,{text:"this is a CTA",href:"https://monday.com"})),name:"Alert Banner with link"},c={render:()=>e.createElement(t,{backgroundColor:"dark"},e.createElement(n,{text:"Join us at Elevate 2022"}),e.createElement(r,{text:"RSVP now",href:"https://monday.com"})),name:"Alert banner as an announcement"},i={render:()=>e.createElement(t,null,e.createElement(n,{text:"7 days left on your monday CRM trial"}),e.createElement(r,{text:"Upgrade now",href:"https://monday.com"})),name:"Alert banner as an opportunity to upgrade"},A={render:()=>e.createElement(t,null,e.createElement(n,{text:"This is a really long alert..."}),e.createElement(r,{text:"Call to action",href:"https://monday.com"})),name:"Overflow text",decorators:[a=>e.createElement("div",{style:{width:"320px"}},e.createElement(a,null))]};var p,u,B;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: alertBannerTemplate.bind({}),
  name: "Overview"
}`,...(B=(u=o.parameters)==null?void 0:u.docs)==null?void 0:B.source}}};var h,x,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,E,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <AlertBanner>
      <AlertBannerText text="Lorem ipsum dolor sit amet" />
      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>
    </AlertBanner>,
  name: "Alert Banner with button"
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <AlertBanner>
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert Banner with link"
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,v,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <AlertBanner backgroundColor="dark">
      <AlertBannerText text="Join us at Elevate 2022" />
      <AlertBannerLink text="RSVP now" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert banner as an announcement"
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,L,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AlertBanner>
      <AlertBannerText text="7 days left on your monday CRM trial" />
      <AlertBannerLink text="Upgrade now" href="https://monday.com" />
    </AlertBanner>,
  name: "Alert banner as an opportunity to upgrade"
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var R,_,F;A.parameters={...A.parameters,docs:{...(R=A.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(_=A.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const I=["Overview","Types","AlertBannerWithButton","AlertBannerWithLink","AlertBannerAsAnAnnouncement","AlertBannerAsAnOpportunityToUpgrade","OverflowText"],G=Object.freeze(Object.defineProperty({__proto__:null,AlertBannerAsAnAnnouncement:c,AlertBannerAsAnOpportunityToUpgrade:i,AlertBannerWithButton:l,AlertBannerWithLink:m,OverflowText:A,Overview:o,Types:s,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{G as A,o as O,s as T,l as a,m as b,c,i as d,A as e};
