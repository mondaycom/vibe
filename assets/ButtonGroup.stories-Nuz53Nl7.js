import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{B as t}from"./ButtonGroup-D-uZlGdW.js";import{T as a}from"./Text-C4UM3wLo.js";import{F as d}from"./Flex-2Q04fxOc.js";import{r as C}from"./createComponentTemplate-Y0VTmW_y.js";import{c as P}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const m=P({component:t,actionPropsArray:["onSelect"]}),U=C(t),Y={title:"Components/ButtonGroup",component:t,argTypes:m.argTypes,decorators:m.decorators},n={render:U.bind({}),args:{options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}],value:1},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsx(t,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},o={render:()=>e.jsx(t,{groupAriaLabel:"button group aria label",value:1,kind:t.kinds.TERTIARY,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},u={render:()=>e.jsx(t,{disabled:!0,groupAriaLabel:"button group aria label",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})},l={render:()=>e.jsx(t,{groupAriaLabel:"button group aria label",options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta",disabled:!0,tooltipContent:"I'm the worst variant ever"}]}),name:"Disabled - Singe Button"},s={render:()=>e.jsxs(d,{gap:60,children:[e.jsxs(d,{direction:"column",gap:16,align:"start",children:[e.jsx(a,{type:a.types.TEXT1,children:"Medium"}),e.jsx(t,{groupAriaLabel:"button group aria label",size:t.sizes.MEDIUM,value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})]}),e.jsxs(d,{direction:"column",gap:16,align:"start",children:[e.jsx(a,{type:a.types.TEXT1,children:"Small"}),e.jsx(t,{groupAriaLabel:"button group aria label",size:t.sizes.SMALL,value:1,options:[{value:1,text:"Alpha"},{value:2,text:"Beta"},{value:3,text:"Gamma"},{value:4,text:"Delta"}]})]})]})},i={render:()=>e.jsxs(d,{direction:"column",gap:16,align:"start",children:[e.jsx(a,{type:a.types.TEXT1,children:"Function"}),e.jsx(t,{groupAriaLabel:"button group aria label",size:t.sizes.SMALL,value:1,options:[{value:1,text:"Sum"},{value:2,text:"Average"},{value:3,text:"Median"},{value:4,text:"Min"}]})]}),name:"Button group in settings"},p={render:()=>e.jsx(t,{groupAriaLabel:"button group aria label",value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"}]}),name:"Button group as toggle"},x={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(t,{groupAriaLabel:"Full Width Button Group",fullWidth:!0,value:1,options:[{value:1,text:"Grid"},{value:2,text:"List"},{value:3,text:"Table"},{value:4,text:"Masonry"}]})}),name:"Full width button group"};var v,c,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var b,B,G;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(G=(B=r.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var A,T,h;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var S,L,D;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(L=u.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var y,j,F;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(F=(j=l.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var M,E,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var z,w,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var _,O,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ButtonGroup groupAriaLabel="button group aria label" value={1} options={[{
    value: 1,
    text: "Grid"
  }, {
    value: 2,
    text: "List"
  }]} />,
  name: "Button group as toggle"
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var X,R,k;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(k=(R=x.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const q=["Overview","Default","Tertiary","Disabled","DisabledSingeButton","Size","ButtonGroupInSettings","ButtonGroupAsToggle","FullWidthButtonGroup"],Z=Object.freeze(Object.defineProperty({__proto__:null,ButtonGroupAsToggle:p,ButtonGroupInSettings:i,Default:r,Disabled:u,DisabledSingeButton:l,FullWidthButtonGroup:x,Overview:n,Size:s,Tertiary:o,__namedExportsOrder:q,default:Y},Symbol.toStringTag,{value:"Module"}));export{Z as B,r as D,x as F,n as O,s as S,o as T,u as a,l as b,i as c,p as d};
