import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{L as n}from"./Link-BU7s9Y2d.js";import{t as m}from"./Info-BB4o2YOm.js";import{c as d}from"./index-BA_MN9l1.js";import{c}from"./Workspace-BIJf5qCK.js";import{c as _}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const p=_({component:n,iconPropNamesArray:["icon"]}),F={title:"Components/Link",component:n,argTypes:p.argTypes,decorators:p.decorators},t={render:T=>e.jsx(n,{text:"Read more",href:"https://www.monday.com",...T}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsx(n,{text:"Default",href:"https://www.monday.com"})},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"اقرأ أكثر",href:"https://www.monday.com",icon:d}),e.jsx(n,{text:"קרא עוד",href:"https://www.monday.com",iconPosition:"end",icon:m})]}),parameters:{docs:{liveEdit:{scope:{IconLink:d,Info:m}}}}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"Read more",href:"https://www.monday.com",icon:c}),e.jsx(n,{text:"Read more",href:"https://www.monday.com",iconPosition:"end",icon:c})]}),parameters:{docs:{liveEdit:{scope:{ExternalPage:c}}}}},a={render:()=>e.jsxs("div",{children:["Lorem Ipsum has been the industry's ",e.jsx(n,{inlineText:!0,inheritFontSize:!0,text:"standard",href:"https://www.monday.com"})," dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."]})},i={render:()=>e.jsxs("div",{children:[`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. `,e.jsx(n,{text:"Read more",href:"https://www.monday.com",inheritFontSize:!0,inlineText:!0})]})};var h,w,l;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link text="Read more" href="https://www.monday.com" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(l=(w=t.parameters)==null?void 0:w.docs)==null?void 0:l.source}}};var x,u,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Link text="Default" href="https://www.monday.com" />
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,k,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <>
      <Link text="اقرأ أكثر" href="https://www.monday.com" icon={IconLink} />
      <Link text="קרא עוד" href="https://www.monday.com" iconPosition="end" icon={Info} />
    </>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          IconLink,
          Info
        }
      }
    }
  }
}`,...(g=(k=o.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var L,v,S;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <>
      <Link text="Read more" href="https://www.monday.com" icon={ExternalPage} />
      <Link text="Read more" href="https://www.monday.com" iconPosition="end" icon={ExternalPage} />
    </>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          ExternalPage
        }
      }
    }
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,j,E;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div>
      {\`Lorem Ipsum has been the industry's \`}
      <Link inlineText inheritFontSize text="standard" href="https://www.monday.com" />
      {\` dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\`}
    </div>
}`,...(E=(j=a.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var R,I,P;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div>
      {\`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. \`}
      <Link text="Read more" href="https://www.monday.com" inheritFontSize inlineText />
    </div>
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const O=["Overview","States","RightToLeft","WithIcons","ReferenceLink","ShorteningTexts"],C=Object.freeze(Object.defineProperty({__proto__:null,Overview:t,ReferenceLink:a,RightToLeft:o,ShorteningTexts:i,States:r,WithIcons:s,__namedExportsOrder:O,default:F},Symbol.toStringTag,{value:"Module"}));export{C as L,t as O,o as R,r as S,s as W,a,i as b};
