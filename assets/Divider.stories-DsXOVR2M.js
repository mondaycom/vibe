import{R as e}from"./index-Hemj67b4.js";import{D as t}from"./Divider-CPEi52zL.js";import{c as p}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const i=p({component:t}),g=m=>e.createElement("div",{style:{width:"400px",height:"40px"}},e.createElement(t,{...m})),v={title:"Components/Divider",component:t,argTypes:i.argTypes,decorators:i.decorators},n={render:g.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",width:"400px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",height:40}},e.createElement("span",{style:{marginRight:"var(--sb-spacing-large)",alignSelf:"center"}},"Horizontal"),e.createElement(t,{direction:"horizontal"})),e.createElement("div",{style:{display:"flex",alignItems:"center",height:200}},e.createElement("span",{style:{marginRight:"var(--sb-spacing-large)",alignSelf:"center"}},"Vertical"),e.createElement(t,{direction:"vertical"}))),name:"Directions"};var a,s,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["Overview","Directions"],x=Object.freeze(Object.defineProperty({__proto__:null,Directions:r,Overview:n,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{x as D,n as O,r as a};
