import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as b}from"./index-CTZeEbLr.js";import{c as I}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{E as n}from"./ExpandCollapse-uTvOlyzG.js";import{V as L}from"./Workspace-CefzN9Lt.js";import{T as d}from"./Text-DVNPP_6L.js";import{I as H}from"./Icon-CMBPUOKb.js";import{H as R}from"./Heading-B02tO7j0.js";const i=I({component:n,ignoreControlsPropNamesArray:["headerComponentRenderer"]}),_={title:"Components/ExpandCollapse",component:n,argTypes:i.argTypes,decorators:i.decorators,parameters:{docs:{liveEdit:{scope:{}}}}},r={render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsxs(n,{title:"Expand collapse",...t,children:[e.jsx(d,{type:"text2",maxLines:2,children:"Insert here any component that you want, here is a robot for you"}),e.jsx(H,{iconType:"svg",icon:L,iconSize:40})]})}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{title:"Open by default",defaultOpenState:!0,children:e.jsx(d,{type:"text2",maxLines:2,children:"Insert here any component that you want"})})})},a={render:()=>{const[t,O]=b.useState(!1);return e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{title:"Controlled open state",open:t,onClick:()=>O(T=>!T),children:e.jsx(d,{type:"text2",maxLines:2,children:"Insert here any component that you want"})})})}},s={render:()=>{const t=()=>e.jsx(R,{type:"h3",children:"Any component you want"});return e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{headerComponentRenderer:t,children:e.jsx(d,{type:"text2",maxLines:2,children:"Insert here any component that you want"})})})}},p={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{hideBorder:!0,title:"Without borders",children:e.jsx(d,{type:"text2",maxLines:2,children:"Insert here any component that you want"})})})};var l,c,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: ExpandCollapseProps) => {
    return <div style={{
      width: "300px"
    }}>
        <ExpandCollapse title="Expand collapse" {...args}>
          <Text type="text2" maxLines={2}>
            Insert here any component that you want, here is a robot for you
          </Text>
          <Icon iconType="svg" icon={Robot} iconSize={40} />
        </ExpandCollapse>
      </div>;
  },
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var m,u,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px"
  }}>
      <ExpandCollapse title="Open by default" defaultOpenState>
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    </div>
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,C,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      width: "300px"
    }}>
        <ExpandCollapse title="Controlled open state" open={open} onClick={() => setOpen(prevState => !prevState)}>
          <Text type="text2" maxLines={2}>
            Insert here any component that you want
          </Text>
        </ExpandCollapse>
      </div>;
  }
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var E,w,f;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const ExpandCollapseCustomHeadingComponent = () => {
      return <Heading type="h3">Any component you want</Heading>;
    };
    return <div style={{
      width: "300px"
    }}>
        <ExpandCollapse headerComponentRenderer={ExpandCollapseCustomHeadingComponent}>
          <Text type="text2" maxLines={2}>
            Insert here any component that you want
          </Text>
        </ExpandCollapse>
      </div>;
  }
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var g,j,S;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px"
  }}>
      <ExpandCollapse hideBorder title="Without borders">
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    </div>
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const B=["Overview","OpenByDefault","ControlledOpenState","CustomHeaderRenderer","WithoutBorders"],V=Object.freeze(Object.defineProperty({__proto__:null,ControlledOpenState:a,CustomHeaderRenderer:s,OpenByDefault:o,Overview:r,WithoutBorders:p,__namedExportsOrder:B,default:_},Symbol.toStringTag,{value:"Module"}));export{a as C,V as E,r as O,p as W,o as a,s as b};
