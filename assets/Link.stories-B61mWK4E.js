import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as _}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{t as c}from"./Info-jvFNh0HS.js";import{e as m}from"./index-BVKo2bYj.js";import{t as d}from"./Workspace-CefzN9Lt.js";import{L as n}from"./Link-CePbMRWx.js";const p=_({component:n,iconPropNamesArray:["icon"]}),F={title:"Components/Link",component:n,argTypes:p.argTypes,decorators:p.decorators},t={render:T=>e.jsx(n,{id:"overview-link",text:"Read more",href:"https://www.monday.com",...T}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsx(n,{id:"states-default",text:"Default",href:"https://www.monday.com"})},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"rtl-arabic",text:"اقرأ أكثر",href:"https://www.monday.com",icon:m}),e.jsx(n,{id:"rtl-hebrew",text:"קרא עוד",href:"https://www.monday.com",iconPosition:"end",icon:c})]}),parameters:{docs:{liveEdit:{scope:{IconLink:m,Info:c}}}}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"icon-start",text:"Read more",href:"https://www.monday.com",icon:d}),e.jsx(n,{id:"icon-end",text:"Read more",href:"https://www.monday.com",iconPosition:"end",icon:d})]}),parameters:{docs:{liveEdit:{scope:{ExternalPage:d}}}}},a={render:()=>e.jsxs("div",{children:["Lorem Ipsum has been the industry's ",e.jsx(n,{id:"reference-link",inlineText:!0,inheritFontSize:!0,text:"standard",href:"https://www.monday.com"})," dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."]})},i={render:()=>e.jsxs("div",{children:[`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. `,e.jsx(n,{id:"shortening-link",text:"Read more",href:"https://www.monday.com",inheritFontSize:!0,inlineText:!0})]})};var h,w,l;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link id="overview-link" text="Read more" href="https://www.monday.com" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(l=(w=t.parameters)==null?void 0:w.docs)==null?void 0:l.source}}};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Link id="states-default" text="Default" href="https://www.monday.com" />
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,k,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <>
      <Link id="rtl-arabic" text="اقرأ أكثر" href="https://www.monday.com" icon={IconLink} />
      <Link id="rtl-hebrew" text="קרא עוד" href="https://www.monday.com" iconPosition="end" icon={Info} />
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
}`,...(g=(k=o.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var L,v,b;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <>
      <Link id="icon-start" text="Read more" href="https://www.monday.com" icon={ExternalPage} />
      <Link id="icon-end" text="Read more" href="https://www.monday.com" iconPosition="end" icon={ExternalPage} />
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
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,j,E;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div>
      {\`Lorem Ipsum has been the industry's \`}
      <Link id="reference-link" inlineText inheritFontSize text="standard" href="https://www.monday.com" />
      {\` dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\`}
    </div>
}`,...(E=(j=a.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var R,I,P;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div>
      {\`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. \`}
      <Link id="shortening-link" text="Read more" href="https://www.monday.com" inheritFontSize inlineText />
    </div>
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const O=["Overview","States","RightToLeft","WithIcons","ReferenceLink","ShorteningTexts"],C=Object.freeze(Object.defineProperty({__proto__:null,Overview:t,ReferenceLink:a,RightToLeft:o,ShorteningTexts:i,States:r,WithIcons:s,__namedExportsOrder:O,default:F},Symbol.toStringTag,{value:"Module"}));export{C as L,t as O,o as R,r as S,s as W,a,i as b};
