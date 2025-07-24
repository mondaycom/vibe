import{R as e,r as I}from"./index-Hemj67b4.js";import{E as t}from"./ExpandCollapse-BetF0uwa.js";import{H as L}from"./Heading-ILPymVjj.js";import{I as H}from"./Icon-zHybxhV-.js";import{V as R}from"./Workspace-BIJf5qCK.js";import{c as _}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{T as p}from"./Text-B2fubIt7.js";const l=_({component:t,ignoreControlsPropNamesArray:["headerComponentRenderer"]}),B={title:"Components/ExpandCollapse",component:t,argTypes:l.argTypes,decorators:l.decorators,parameters:{docs:{liveEdit:{scope:{}}}}},n={render:()=>e.createElement("div",{style:{width:"300px"}},e.createElement(t,{title:"Expand collapse"},e.createElement(p,{type:"text2",maxLines:2},"Insert here any component that you want, here is a robot for you"),e.createElement(H,{iconType:"svg",icon:R,iconSize:40}))),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.createElement("div",{style:{width:"300px"}},e.createElement(t,{title:"Open by default",defaultOpenState:!0},e.createElement(p,{type:"text2",maxLines:2},"Insert here any component that you want")))},a={render:()=>{const[d,T]=I.useState(!1);return e.createElement("div",{style:{width:"300px"}},e.createElement(t,{title:"Controlled open state",open:d,onClick:()=>T(b=>!b)},e.createElement(p,{type:"text2",maxLines:2},"Insert here any component that you want")))}},o={render:()=>{const d=()=>e.createElement(L,{type:"h3"},"Any component you want");return e.createElement("div",{style:{width:"300px"}},e.createElement(t,{headerComponentRenderer:d},e.createElement(p,{type:"text2",maxLines:2},"Insert here any component that you want")))}},s={render:()=>e.createElement("div",{style:{width:"300px"}},e.createElement(t,{hideBorder:!0,title:"Without borders"},e.createElement(p,{type:"text2",maxLines:2},"Insert here any component that you want")))};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: "300px"
    }}>
        <ExpandCollapse title="Expand collapse">
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,u,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px"
  }}>
      <ExpandCollapse title="Open by default" defaultOpenState>
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    </div>
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var E,h,C;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,w,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,g,O;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px"
  }}>
      <ExpandCollapse hideBorder title="Without borders">
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    </div>
}`,...(O=(g=s.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};const W=["Overview","OpenByDefault","ControlledOpenState","CustomHeaderRenderer","WithoutBorders"],N=Object.freeze(Object.defineProperty({__proto__:null,ControlledOpenState:a,CustomHeaderRenderer:o,OpenByDefault:r,Overview:n,WithoutBorders:s,__namedExportsOrder:W,default:B},Symbol.toStringTag,{value:"Module"}));export{a as C,N as E,n as O,s as W,r as a,o as b};
