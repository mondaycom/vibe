import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as g}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{D as i}from"./Divider-5b08Ypxw.js";const t=g({component:i}),m=p=>e.jsx("div",{style:{width:"400px",height:"40px"},children:e.jsx(i,{...p})}),v={title:"Components/Divider",component:i,argTypes:t.argTypes,decorators:t.decorators},n={render:m.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"400px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",height:40},children:[e.jsx("span",{style:{marginRight:"var(--sb-spacing-large)",alignSelf:"center"},children:"Horizontal"}),e.jsx(i,{direction:"horizontal"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",height:200},children:[e.jsx("span",{style:{marginRight:"var(--sb-spacing-large)",alignSelf:"center"},children:"Vertical"}),e.jsx(i,{direction:"vertical"})]})]}),name:"Directions"};var s,a,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: dividerTemplate.bind({}),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    width: "400px"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      height: 40
    }}>
        <span style={{
        marginRight: "var(--sb-spacing-large)",
        alignSelf: "center"
      }}>
          Horizontal
        </span>
        <Divider direction="horizontal" />
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      height: 200
    }}>
        <span style={{
        marginRight: "var(--sb-spacing-large)",
        alignSelf: "center"
      }}>
          Vertical
        </span>
        <Divider direction="vertical" />
      </div>
    </div>,
  name: "Directions"
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Overview","Directions"],D=Object.freeze(Object.defineProperty({__proto__:null,Directions:r,Overview:n,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{D,n as O,r as a};
