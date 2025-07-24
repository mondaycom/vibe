import{R as e}from"./index-Hemj67b4.js";import{B as t}from"./ButtonGroup-BCdXJXXt.js";import{T as a}from"./Text-C0CU0_Vh.js";import{F as c}from"./Flex-DIvs4XZj.js";import{r as j}from"./createComponentTemplate-Y0VTmW_y.js";import{c as P}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const v=P({component:t,actionPropsArray:["onSelect"]}),U=j(t),Y={title:"Components/ButtonGroup",component:t,argTypes:v.argTypes,decorators:v.decorators},n={render:U.bind({}),args:{options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}],value:1},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.createElement(t,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},o={render:()=>e.createElement(t,{groupAriaLabel:"button group aria label",value:1,kind:t.kinds.TERTIARY,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},l={render:()=>e.createElement(t,{disabled:!0,groupAriaLabel:"button group aria label",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},u={render:()=>e.createElement(t,{groupAriaLabel:"button group aria label",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta",disabled:!0,tooltipContent:"I'm the worst variant ever"}]}),name:"Disabled - Singe Button"},s={render:()=>e.createElement(c,{gap:60},e.createElement(c,{direction:"column",gap:16,align:"start"},e.createElement(a,{type:a.types.TEXT1},"Medium"),e.createElement(t,{groupAriaLabel:"button group aria label",size:t.sizes.MEDIUM,value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})),e.createElement(c,{direction:"column",gap:16,align:"start"},e.createElement(a,{type:a.types.TEXT1},"Small"),e.createElement(t,{groupAriaLabel:"button group aria label",size:t.sizes.SMALL,value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})))},i={render:()=>e.createElement(c,{direction:"column",gap:16,align:"start"},e.createElement(a,{type:a.types.TEXT1},"Function"),e.createElement(t,{groupAriaLabel:"button group aria label",size:t.sizes.SMALL,value:1,options:[{value:1,text:"Sum"},{value:2,text:"Average"},{value:3,text:"Median"},{value:4,text:"Min"}]})),name:"Button group in settings"},p={render:()=>e.createElement(t,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"}]}),name:"Button group as toggle"},m={render:()=>e.createElement("div",{style:{width:"100%"}},e.createElement(t,{groupAriaLabel:"Full Width Button Group",fullWidth:!0,value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"},{value:3,text:"Table"},{value:4,text:"Masonry"}]})),name:"Full width button group"};var d,x,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: buttonGroupTemplate.bind({}),
  args: {
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
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,B,G;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ButtonGroup groupAriaLabel="button group aria label" value={1} options={[{
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
}`,...(G=(B=r.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var A,T,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ButtonGroup groupAriaLabel="button group aria label" value={1} kind={ButtonGroup.kinds.TERTIARY} options={[{
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
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,L,h;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ButtonGroup disabled groupAriaLabel="button group aria label" options={[{
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
}`,...(h=(L=l.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var D,y,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ButtonGroup groupAriaLabel="button group aria label" options={[{
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
}`,...(F=(y=u.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var M,f,z;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Flex gap={60}>
      <Flex direction="column" gap={16} align="start">
        <Text type={Text.types.TEXT1}>Medium</Text>
        <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.MEDIUM} value={1} options={[{
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
        <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.SMALL} value={1} options={[{
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
}`,...(z=(f=s.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var w,I,_;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap={16} align="start">
      <Text type={Text.types.TEXT1}>Function</Text>
      <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.SMALL} value={1} options={[{
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
}`,...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var O,R,W;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <ButtonGroup groupAriaLabel="button group aria label" value={1} options={[{
    value: 1,
    text: "Grid"
  }, {
    value: 2,
    text: "List"
  }]} />,
  name: "Button group as toggle"
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var X,k,C;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%"
  }}>
      <ButtonGroup groupAriaLabel="Full Width Button Group" fullWidth value={1} options={[{
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
}`,...(C=(k=m.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const q=["Overview","Default","Tertiary","Disabled","DisabledSingeButton","Size","ButtonGroupInSettings","ButtonGroupAsToggle","FullWidthButtonGroup"],Z=Object.freeze(Object.defineProperty({__proto__:null,ButtonGroupAsToggle:p,ButtonGroupInSettings:i,Default:r,Disabled:l,DisabledSingeButton:u,FullWidthButtonGroup:m,Overview:n,Size:s,Tertiary:o,__namedExportsOrder:q,default:Y},Symbol.toStringTag,{value:"Module"}));export{Z as B,r as D,m as F,n as O,s as S,o as T,l as a,u as b,i as c,p as d};
