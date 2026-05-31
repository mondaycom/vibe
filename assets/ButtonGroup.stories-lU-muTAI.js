import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as R}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{B as t}from"./ButtonGroup-7dTJJc2c.js";import{F as d}from"./Flex-7H_pA1dJ.js";import{T as g}from"./Text-BXo2MFDE.js";const x=R({component:t,actionPropsArray:["onSelect"]}),q={title:"Components/ButtonGroup",component:t,argTypes:x.argTypes,decorators:x.decorators},a={render:m=>e.jsx("div",{style:{width:m.fullWidth?"100%":"fit-content"},children:e.jsx(t,{...m})}),args:{id:"overview-button-group",groupAriaLabel:"Overview button group",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}],value:1},parameters:{docs:{liveEdit:{isEnabled:!1}}}},n={render:()=>e.jsx(t,{id:"default-button-group",groupAriaLabel:"Default button group",value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},o={render:()=>e.jsx(t,{id:"tertiary-button-group",groupAriaLabel:"Tertiary button group",value:1,kind:"tertiary",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},r={render:()=>e.jsx(t,{id:"disabled-button-group",disabled:!0,groupAriaLabel:"Disabled button group",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},u={render:()=>e.jsx(t,{id:"disabled-single-button-group",groupAriaLabel:"Button group with disabled option",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta",disabled:!0,tooltipContent:"I'm the worst variant ever"}]}),name:"Disabled - Singe Button"},l={render:()=>e.jsxs(d,{gap:60,children:[e.jsxs(d,{direction:"column",gap:16,align:"start",children:[e.jsx(g,{type:"text1",children:"Medium"}),e.jsx(t,{id:"size-medium-button-group",groupAriaLabel:"Medium size button group",size:"medium",value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})]}),e.jsxs(d,{direction:"column",gap:16,align:"start",children:[e.jsx(g,{type:"text1",children:"Small"}),e.jsx(t,{id:"size-small-button-group",groupAriaLabel:"Small size button group",size:"small",value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})]})]})},s={render:()=>e.jsxs(d,{direction:"column",gap:16,align:"start",children:[e.jsx(g,{type:"text1",children:"Function"}),e.jsx(t,{id:"settings-button-group",groupAriaLabel:"Function selection button group",size:"small",value:1,options:[{value:1,text:"Sum"},{value:2,text:"Average"},{value:3,text:"Median"},{value:4,text:"Min"}]})]}),name:"Button group in settings"},i={render:()=>e.jsx(t,{id:"toggle-button-group",groupAriaLabel:"View toggle button group",value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"}]}),name:"Button group as toggle"},p={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(t,{id:"full-width-button-group",groupAriaLabel:"Full width button group",fullWidth:!0,value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"},{value:3,text:"Table"},{value:4,text:"Masonry"}]})}),name:"Full width button group"};var v,c,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    width: args.fullWidth ? "100%" : "fit-content"
  }}>
      <ButtonGroup {...args} />
    </div>,
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
}`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var B,h,A;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var G,S,D;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ButtonGroup id="tertiary-button-group" groupAriaLabel="Tertiary button group" value={1} kind="tertiary" options={[{
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
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var y,f,L;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(f=r.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var j,w,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(w=u.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var T,z,M;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Flex gap={60}>
      <Flex direction="column" gap={16} align="start">
        <Text type="text1">Medium</Text>
        <ButtonGroup id="size-medium-button-group" groupAriaLabel="Medium size button group" size="medium" value={1} options={[{
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
        <Text type="text1">Small</Text>
        <ButtonGroup id="size-small-button-group" groupAriaLabel="Small size button group" size="small" value={1} options={[{
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
}`,...(M=(z=l.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var O,_,E;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap={16} align="start">
      <Text type="text1">Function</Text>
      <ButtonGroup id="settings-button-group" groupAriaLabel="Function selection button group" size="small" value={1} options={[{
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
}`,...(E=(_=s.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var W,I,C;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ButtonGroup id="toggle-button-group" groupAriaLabel="View toggle button group" value={1} options={[{
    value: 1,
    text: "Grid"
  }, {
    value: 2,
    text: "List"
  }]} />,
  name: "Button group as toggle"
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var k,P,V;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const H=["Overview","Default","Tertiary","Disabled","DisabledSingeButton","Size","ButtonGroupInSettings","ButtonGroupAsToggle","FullWidthButtonGroup"],X=Object.freeze(Object.defineProperty({__proto__:null,ButtonGroupAsToggle:i,ButtonGroupInSettings:s,Default:n,Disabled:r,DisabledSingeButton:u,FullWidthButtonGroup:p,Overview:a,Size:l,Tertiary:o,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{X as B,n as D,p as F,a as O,l as S,o as T,r as a,u as b,s as c,i as d};
