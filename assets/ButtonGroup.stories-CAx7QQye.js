import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as C}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{r as P}from"./createComponentTemplate-B08h-OOW.js";import{B as t}from"./ButtonGroup-C6dB_IP5.js";import{F as g}from"./Flex-Bimzf4jb.js";import{T as a}from"./Text-DVNPP_6L.js";const m=C({component:t,actionPropsArray:["onSelect"]}),U=P(t),V={title:"Components/ButtonGroup",component:t,argTypes:m.argTypes,decorators:m.decorators},n={render:U.bind({}),args:{id:"overview-button-group",groupAriaLabel:"Overview button group",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}],value:1},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsx(t,{id:"default-button-group",groupAriaLabel:"Default button group",value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},r={render:()=>e.jsx(t,{id:"tertiary-button-group",groupAriaLabel:"Tertiary button group",value:1,kind:t.kinds.TERTIARY,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},u={render:()=>e.jsx(t,{id:"disabled-button-group",disabled:!0,groupAriaLabel:"Disabled button group",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},l={render:()=>e.jsx(t,{id:"disabled-single-button-group",groupAriaLabel:"Button group with disabled option",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta",disabled:!0,tooltipContent:"I'm the worst variant ever"}]}),name:"Disabled - Singe Button"},s={render:()=>e.jsxs(g,{gap:60,children:[e.jsxs(g,{direction:"column",gap:16,align:"start",children:[e.jsx(a,{type:a.types.TEXT1,children:"Medium"}),e.jsx(t,{id:"size-medium-button-group",groupAriaLabel:"Medium size button group",size:t.sizes.MEDIUM,value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})]}),e.jsxs(g,{direction:"column",gap:16,align:"start",children:[e.jsx(a,{type:a.types.TEXT1,children:"Small"}),e.jsx(t,{id:"size-small-button-group",groupAriaLabel:"Small size button group",size:t.sizes.SMALL,value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})]})]})},i={render:()=>e.jsxs(g,{direction:"column",gap:16,align:"start",children:[e.jsx(a,{type:a.types.TEXT1,children:"Function"}),e.jsx(t,{id:"settings-button-group",groupAriaLabel:"Function selection button group",size:t.sizes.SMALL,value:1,options:[{value:1,text:"Sum"},{value:2,text:"Average"},{value:3,text:"Median"},{value:4,text:"Min"}]})]}),name:"Button group in settings"},p={render:()=>e.jsx(t,{id:"toggle-button-group",groupAriaLabel:"View toggle button group",value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"}]}),name:"Button group as toggle"},d={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(t,{id:"full-width-button-group",groupAriaLabel:"Full width button group",fullWidth:!0,value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"},{value:3,text:"Table"},{value:4,text:"Masonry"}]})}),name:"Full width button group"};var v,x,c;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: buttonGroupTemplate.bind({}),
  args: {
    id: "overview-button-group",
    groupAriaLabel: "Overview button group",
    options: [{
      value: 1,
      text: "Alpha"
    }, {
      value: 2,
      text: "Beta"
    }, {
      value: 3,
      text: "Gamma"
    }, {
      value: 4,
      text: "Delta"
    }],
    value: 1
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(c=(x=n.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var b,B,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ButtonGroup id="default-button-group" groupAriaLabel="Default button group" value={1} options={[{
    value: 1,
    text: "Alpha"
  }, {
    value: 2,
    text: "Beta"
  }, {
    value: 3,
    text: "Gamma"
  }, {
    value: 4,
    text: "Delta"
  }]} />
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var G,T,h;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ButtonGroup id="tertiary-button-group" groupAriaLabel="Tertiary button group" value={1} kind={ButtonGroup.kinds.TERTIARY} options={[{
    value: 1,
    text: "Alpha"
  }, {
    value: 2,
    text: "Beta"
  }, {
    value: 3,
    text: "Gamma"
  }, {
    value: 4,
    text: "Delta"
  }]} />
}`,...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var S,L,D;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ButtonGroup id="disabled-button-group" disabled groupAriaLabel="Disabled button group" options={[{
    value: 1,
    text: "Alpha"
  }, {
    value: 2,
    text: "Beta"
  }, {
    value: 3,
    text: "Gamma"
  }, {
    value: 4,
    text: "Delta"
  }]} />
}`,...(D=(L=u.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var y,z,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ButtonGroup id="disabled-single-button-group" groupAriaLabel="Button group with disabled option" options={[{
    value: 1,
    text: "Alpha"
  }, {
    value: 2,
    text: "Beta"
  }, {
    value: 3,
    text: "Gamma"
  }, {
    value: 4,
    text: "Delta",
    disabled: true,
    tooltipContent: "I'm the worst variant ever"
  }]} />,
  name: "Disabled - Singe Button"
}`,...(f=(z=l.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var j,F,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex gap={60}>
      <Flex direction="column" gap={16} align="start">
        <Text type={Text.types.TEXT1}>Medium</Text>
        <ButtonGroup id="size-medium-button-group" groupAriaLabel="Medium size button group" size={ButtonGroup.sizes.MEDIUM} value={1} options={[{
        value: 1,
        text: "Alpha"
      }, {
        value: 2,
        text: "Beta"
      }, {
        value: 3,
        text: "Gamma"
      }, {
        value: 4,
        text: "Delta"
      }]} />
      </Flex>
      <Flex direction="column" gap={16} align="start">
        <Text type={Text.types.TEXT1}>Small</Text>
        <ButtonGroup id="size-small-button-group" groupAriaLabel="Small size button group" size={ButtonGroup.sizes.SMALL} value={1} options={[{
        value: 1,
        text: "Alpha"
      }, {
        value: 2,
        text: "Beta"
      }, {
        value: 3,
        text: "Gamma"
      }, {
        value: 4,
        text: "Delta"
      }]} />
      </Flex>
    </Flex>
}`,...(w=(F=s.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var M,E,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap={16} align="start">
      <Text type={Text.types.TEXT1}>Function</Text>
      <ButtonGroup id="settings-button-group" groupAriaLabel="Function selection button group" size={ButtonGroup.sizes.SMALL} value={1} options={[{
      value: 1,
      text: "Sum"
    }, {
      value: 2,
      text: "Average"
    }, {
      value: 3,
      text: "Median"
    }, {
      value: 4,
      text: "Min"
    }]} />
    </Flex>,
  name: "Button group in settings"
}`,...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var O,_,X;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <ButtonGroup id="toggle-button-group" groupAriaLabel="View toggle button group" value={1} options={[{
    value: 1,
    text: "Grid"
  }, {
    value: 2,
    text: "List"
  }]} />,
  name: "Button group as toggle"
}`,...(X=(_=p.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var R,k,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%"
  }}>
      <ButtonGroup id="full-width-button-group" groupAriaLabel="Full width button group" fullWidth value={1} options={[{
      value: 1,
      text: "Grid"
    }, {
      value: 2,
      text: "List"
    }, {
      value: 3,
      text: "Table"
    }, {
      value: 4,
      text: "Masonry"
    }]} />
    </div>,
  name: "Full width button group"
}`,...(W=(k=d.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};const Y=["Overview","Default","Tertiary","Disabled","DisabledSingeButton","Size","ButtonGroupInSettings","ButtonGroupAsToggle","FullWidthButtonGroup"],Z=Object.freeze(Object.defineProperty({__proto__:null,ButtonGroupAsToggle:p,ButtonGroupInSettings:i,Default:o,Disabled:u,DisabledSingeButton:l,FullWidthButtonGroup:d,Overview:n,Size:s,Tertiary:r,__namedExportsOrder:Y,default:V},Symbol.toStringTag,{value:"Module"}));export{Z as B,o as D,d as F,n as O,s as S,r as T,u as a,l as b,i as c,p as d};
