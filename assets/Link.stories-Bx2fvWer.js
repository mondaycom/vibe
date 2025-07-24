import{R as e}from"./index-Hemj67b4.js";import{L as t}from"./Link-s0y4jlGK.js";import{t as c}from"./Info-BB4o2YOm.js";import{c as d}from"./index-BA_MN9l1.js";import{c as m}from"./Workspace-BIJf5qCK.js";import{c as F}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const p=F({component:t,iconPropNamesArray:["icon"]}),O={title:"Components/Link",component:t,argTypes:p.argTypes,decorators:p.decorators},n={render:_=>e.createElement(t,{text:"Read more",href:"https://www.monday.com",..._}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.createElement(t,{text:"Default",href:"https://www.monday.com"})},o={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{text:"اقرأ أكثر",href:"https://www.monday.com",icon:d}),e.createElement(t,{text:"קרא עוד",href:"https://www.monday.com",iconPosition:"end",icon:c})),parameters:{docs:{liveEdit:{scope:{IconLink:d,Info:c}}}}},a={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{text:"Read more",href:"https://www.monday.com",icon:m}),e.createElement(t,{text:"Read more",href:"https://www.monday.com",iconPosition:"end",icon:m})),parameters:{docs:{liveEdit:{scope:{ExternalPage:m}}}}},s={render:()=>e.createElement("div",null,"Lorem Ipsum has been the industry's ",e.createElement(t,{inlineText:!0,inheritFontSize:!0,text:"standard",href:"https://www.monday.com"})," dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")},i={render:()=>e.createElement("div",null,`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. `,e.createElement(t,{text:"Read more",href:"https://www.monday.com",inheritFontSize:!0,inlineText:!0}))};var l,h,w;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link text="Read more" href="https://www.monday.com" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var u,y,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Link text="Default" href="https://www.monday.com" />
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,x,g;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var L,E,v;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(v=(E=a.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var S,b,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div>
      {\`Lorem Ipsum has been the industry's \`}
      <Link inlineText inheritFontSize text="standard" href="https://www.monday.com" />
      {\` dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\`}
    </div>
}`,...(R=(b=s.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var I,P,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div>
      {\`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. \`}
      <Link text="Read more" href="https://www.monday.com" inheritFontSize inlineText />
    </div>
}`,...(T=(P=i.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const z=["Overview","States","RightToLeft","WithIcons","ReferenceLink","ShorteningTexts"],C=Object.freeze(Object.defineProperty({__proto__:null,Overview:n,ReferenceLink:s,RightToLeft:o,ShorteningTexts:i,States:r,WithIcons:a,__namedExportsOrder:z,default:O},Symbol.toStringTag,{value:"Module"}));export{C as L,n as O,o as R,r as S,a as W,s as a,i as b};
