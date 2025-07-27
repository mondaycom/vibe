import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as b}from"./index-Hemj67b4.js";import{E as n}from"./ExpandCollapse--SeQJW2d.js";import{H as I}from"./Heading-B7OKz01H.js";import{I as L}from"./Icon-CDdqL_gb.js";import{V as H}from"./Workspace-BIJf5qCK.js";import{c as R}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{T as p}from"./Text-DK-F53Ij.js";const i=R({component:n,ignoreControlsPropNamesArray:["headerComponentRenderer"]}),_={title:"Components/ExpandCollapse",component:n,argTypes:i.argTypes,decorators:i.decorators,parameters:{docs:{liveEdit:{scope:{}}}}},t={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsxs(n,{title:"Expand collapse",children:[e.jsx(p,{type:"text2",maxLines:2,children:"Insert here any component that you want, here is a robot for you"}),e.jsx(L,{iconType:"svg",icon:H,iconSize:40})]})}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{title:"Open by default",defaultOpenState:!0,children:e.jsx(p,{type:"text2",maxLines:2,children:"Insert here any component that you want"})})})},o={render:()=>{const[d,O]=b.useState(!1);return e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{title:"Controlled open state",open:d,onClick:()=>O(T=>!T),children:e.jsx(p,{type:"text2",maxLines:2,children:"Insert here any component that you want"})})})}},a={render:()=>{const d=()=>e.jsx(I,{type:"h3",children:"Any component you want"});return e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{headerComponentRenderer:d,children:e.jsx(p,{type:"text2",maxLines:2,children:"Insert here any component that you want"})})})}},s={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{hideBorder:!0,title:"Without borders",children:e.jsx(p,{type:"text2",maxLines:2,children:"Insert here any component that you want"})})})};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,u,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px"
  }}>
      <ExpandCollapse title="Open by default" defaultOpenState>
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    </div>
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,C,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var E,w,f;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var j,S,g;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px"
  }}>
      <ExpandCollapse hideBorder title="Without borders">
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    </div>
}`,...(g=(S=s.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const B=["Overview","OpenByDefault","ControlledOpenState","CustomHeaderRenderer","WithoutBorders"],V=Object.freeze(Object.defineProperty({__proto__:null,ControlledOpenState:o,CustomHeaderRenderer:a,OpenByDefault:r,Overview:t,WithoutBorders:s,__namedExportsOrder:B,default:_},Symbol.toStringTag,{value:"Module"}));export{o as C,V as E,t as O,s as W,r as a,a as b};
