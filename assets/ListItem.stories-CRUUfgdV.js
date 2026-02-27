import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as m}from"./index-CTZeEbLr.js";import{c as z}from"./createStoryMetaSettingsDecorator-DPBO6pDt.js";import{p}from"./person1-D9Wcho68.js";import{L as t,a}from"./ListItem-fZACoaC0.js";import{c as u}from"./index-dYystfuL.js";import{l as v,e as L}from"./Settings-C9Ssqg9X.js";const b=z({component:t}),N={title:"Components/List [New]/ListItem",component:t,argTypes:b.argTypes,decorators:b.decorators},n={render:d=>e.jsx(a,{ariaLabel:"List item overview",children:e.jsx(t,{...d})}),name:"Overview",args:{label:"List item",value:"item-1"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.jsxs(a,{ariaLabel:"States example",children:[e.jsx(t,{label:"Default state",value:"default"}),e.jsx(t,{label:"Disabled state",value:"disabled",disabled:!0}),e.jsx(t,{label:"Selected state",value:"selected",selected:!0})]}),name:"States"},i={render:()=>e.jsx(a,{ariaLabel:"List with icon",children:e.jsx(t,{label:"Productivity",value:"productivity",startElement:{type:"icon",value:u}})}),name:"List item with an icon",parameters:{docs:{liveEdit:{scope:{Send:u}}}}},r={render:()=>e.jsx(a,{ariaLabel:"List with avatar",children:e.jsx(t,{label:"Sophia Johnson",value:"sophia",startElement:{type:"avatar",value:p}})}),name:"List item with an avatar",parameters:{docs:{liveEdit:{scope:{person1:p}}}}},l={render:()=>e.jsx("div",{style:{width:250},children:e.jsxs(a,{ariaLabel:"List with end elements",children:[e.jsx(t,{label:"Settings",value:"settings",startElement:{type:"icon",value:L},endElement:{type:"suffix",value:"⌘S"}}),e.jsx(t,{label:"Favorites",value:"favorites",startElement:{type:"icon",value:v},endElement:{type:"suffix",value:"⌘F"}})]})}),name:"List item with end element",parameters:{docs:{liveEdit:{scope:{Settings:L,Favorite:v}}}}},o={render:function(){const[A,B]=m.useState(0),J=m.useCallback(()=>{B(M=>M+1)},[]);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["Click count: ",A]}),e.jsx(a,{ariaLabel:"Clickable list",children:e.jsx(t,{label:"Click me!",value:"clickable",onClick:J})})]})},name:"With click handler"},c={render:()=>e.jsxs(a,{ariaLabel:"Read-only list",children:[e.jsx(t,{label:"Editable item",value:"editable"}),e.jsx(t,{label:"Read-only item",value:"readonly",readOnly:!0})]}),name:"Read-only"};var h,y,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: ListItemProps) => <List ariaLabel="List item overview">
      <ListItem {...args} />
    </List>,
  name: "Overview",
  args: {
    label: "List item",
    value: "item-1"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,E,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <List ariaLabel="States example">
      <ListItem label="Default state" value="default" />
      <ListItem label="Disabled state" value="disabled" disabled />
      <ListItem label="Selected state" value="selected" selected />
    </List>,
  name: "States"
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var k,C,g;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <List ariaLabel="List with icon">
      <ListItem label="Productivity" value="productivity" startElement={{
      type: "icon",
      value: Send
    }} />
    </List>,
  name: "List item with an icon",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Send
        }
      }
    }
  }
}`,...(g=(C=i.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var j,w,I;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <List ariaLabel="List with avatar">
      <ListItem label="Sophia Johnson" value="sophia" startElement={{
      type: "avatar",
      value: person1
    }} />
    </List>,
  name: "List item with an avatar",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1
        }
      }
    }
  }
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var W,O,R;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 250
  }}>
      <List ariaLabel="List with end elements">
        <ListItem label="Settings" value="settings" startElement={{
        type: "icon",
        value: Settings
      }} endElement={{
        type: "suffix",
        value: "⌘S"
      }} />
        <ListItem label="Favorites" value="favorites" startElement={{
        type: "icon",
        value: Favorite
      }} endElement={{
        type: "suffix",
        value: "⌘F"
      }} />
      </List>
    </div>,
  name: "List item with end element",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Settings,
          Favorite
        }
      }
    }
  }
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var F,_,D;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function WithClickHandlerExample() {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = useCallback(() => {
      setClickCount(prev => prev + 1);
    }, []);
    return <div>
        <p style={{
        marginBottom: 16
      }}>Click count: {clickCount}</p>
        <List ariaLabel="Clickable list">
          <ListItem label="Click me!" value="clickable" onClick={handleClick} />
        </List>
      </div>;
  },
  name: "With click handler"
}`,...(D=(_=o.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var H,P,T;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <List ariaLabel="Read-only list">
      <ListItem label="Editable item" value="editable" />
      <ListItem label="Read-only item" value="readonly" readOnly />
    </List>,
  name: "Read-only"
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const q=["Overview","States","WithIcon","WithAvatar","WithEndElement","WithClickHandler","ReadOnly"],Z=Object.freeze(Object.defineProperty({__proto__:null,Overview:n,ReadOnly:c,States:s,WithAvatar:r,WithClickHandler:o,WithEndElement:l,WithIcon:i,__namedExportsOrder:q,default:N},Symbol.toStringTag,{value:"Module"}));export{Z as L,n as O,c as R,s as S,i as W,r as a,l as b,o as c};
