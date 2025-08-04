import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{S as a}from"./Slider-CZzP6xpE.js";import{C as I}from"./Chips-BLapcmvZ.js";import{F as r}from"./Flex-2Q04fxOc.js";import{r as q}from"./createComponentTemplate-Y0VTmW_y.js";import{r as x,g as p}from"./index-CUPFiJE2.js";import{c as A}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const H=A({component:a}),J={title:"Components/Slider",component:a,argTypes:H},K=q(a),i={render:K.bind({}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},t={render:()=>e.jsxs(r,{gap:"medium",flex:"1",children:[e.jsx(a,{size:"small",defaultValue:12}),e.jsx(a,{size:"medium",defaultValue:24}),e.jsx(a,{size:"large",defaultValue:35})]})},l={render:()=>e.jsxs(r,{gap:"medium",flex:"1",children:[e.jsx(a,{"data-testid":"monday-ranged-slider-s",size:"small",ranged:!0}),e.jsx(a,{"data-testid":"monday-ranged-slider-m",size:"medium",ranged:!0,defaultValue:[12,55]}),e.jsx(a,{size:"large",ranged:!0,defaultValue:[25,32]})]})},d={render:()=>e.jsxs(r,{gap:"medium",flex:"1",children:[e.jsx(a,{color:"positive",defaultValue:34,size:"medium"}),e.jsx(a,{color:"negative",ranged:!0,defaultValue:[12,55],size:"medium"}),e.jsx(a,{color:"primary",defaultValue:12,size:"medium"})]})},o={render:()=>e.jsxs(r,{gap:"medium",flex:"1",children:[e.jsx(a,{disabled:!0,defaultValue:24,color:"positive",size:"medium"}),e.jsx(a,{disabled:!0,color:"negative",size:"medium"}),e.jsx(a,{disabled:!0,ranged:!0,defaultValue:[12,55],color:"primary",size:"medium"})]})},n={render:()=>e.jsxs(r,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(a,{indicateSelection:!0,defaultValue:12,size:"small"}),e.jsx(a,{indicateSelection:!0,ranged:!0,defaultValue:[12,55],size:"small"}),e.jsx(a,{prefix:{icon:p},indicateSelection:!0,defaultValue:70,size:"small"}),e.jsx(a,{prefix:{icon:x},postfix:{icon:p},defaultValue:45,size:"medium"}),e.jsx(a,{prefix:"Vol",indicateSelection:!0,defaultValue:0,size:"large"})]}),parameters:{docs:{liveEdit:{scope:{Sound:p,Video:x}}}}},u={render:()=>e.jsxs(r,{gap:"medium",flex:"1",children:[e.jsx(a,{"data-testid":"monday-slider-show-value-s",showValue:!0,defaultValue:12,size:"small"}),e.jsx(a,{"data-testid":"monday-slider-show-value-m",showValue:!0,defaultValue:55,size:"medium"}),e.jsx(a,{"data-testid":"monday-slider-show-value-l",showValue:!0,defaultValue:89,size:"large"})]})},m={render:()=>e.jsxs(r,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(a,{prefix:"Step 10",step:10,indicateSelection:!0,defaultValue:10,size:"small"}),e.jsx(a,{prefix:"Step 2, Max: 20",max:20,step:2,indicateSelection:!0,defaultValue:4,size:"medium"}),e.jsx(a,{prefix:"from 20%",postfix:"till 80%",min:20,max:80,showValue:!0,defaultValue:62,size:"large"}),e.jsx(a,{ranged:!0,indicateSelection:!0,min:100,max:200,step:10,size:"large"})]}),name:"Limits, Steps"},c={render:()=>e.jsxs(r,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(a,{id:"my-app-slider","data-testid":"my-app-slider",className:"my-custom-class",defaultValue:19,prefix:"Check Dev-Tools for Custom Classes",size:"medium"}),e.jsx(a,{id:"custom-value-formatter",className:"my-custom-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,valueFormatter:s=>`${s}GB`,prefix:"Custom value formatter",size:"medium"}),e.jsx(a,{id:"custom-value-formatter",className:"my-long-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,selectionIndicatorWidth:"120px",valueFormatter:s=>`${s} meter/hour`,prefix:"Long value formatter",size:"medium"}),e.jsx(a,{id:"custom-prefix",className:"my-slider-wide",defaultValue:50,prefix:e.jsx(I,{label:"Custom component",readOnly:!0}),postfix:(s,G)=>e.jsx("span",{style:{whiteSpace:"nowrap"},children:`RenderProps: ${G} (${s}) `}),size:"medium"})]})};var f,S,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: sliderTemplate.bind({}),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var V,z,v;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider size="small" defaultValue={12} />
      <Slider size="medium" defaultValue={24} />
      <Slider size="large" defaultValue={35} />
    </Flex>
}`,...(v=(z=t.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var y,h,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider data-testid={"monday-ranged-slider-s"} size="small" ranged={true} />
      <Slider data-testid={"monday-ranged-slider-m"} size="medium" ranged={true} defaultValue={[12, 55]} />
      <Slider size="large" ranged={true} defaultValue={[25, 32]} />
    </Flex>

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: rangedSliderMouseEventsPlaySuite
}`,...(j=(h=l.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var w,b,F;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider color="positive" defaultValue={34} size="medium" />
      <Slider color="negative" ranged={true} defaultValue={[12, 55]} size="medium" />
      <Slider color="primary" defaultValue={12} size="medium" />
    </Flex>
}`,...(F=(b=d.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var C,O,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider disabled={true} defaultValue={24} color="positive" size="medium" />
      <Slider disabled={true} color="negative" size="medium" />
      <Slider disabled={true} ranged={true} defaultValue={[12, 55]} color="primary" size="medium" />
    </Flex>
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var T,L,$;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider indicateSelection={true} defaultValue={12} size="small" />
      <Slider indicateSelection={true} ranged={true} defaultValue={[12, 55]} size="small" />
      <Slider
    // @ts-ignore
    prefix={{
      icon: Sound
    }} indicateSelection={true} defaultValue={70} size="small" />
      <Slider
    // @ts-ignore
    prefix={{
      icon: Video
    }}
    // @ts-ignore
    postfix={{
      icon: Sound
    }} defaultValue={45} size="medium" />
      <Slider prefix="Vol" indicateSelection={true} defaultValue={0} size="large" />
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Sound,
          Video
        }
      }
    }
  }
}`,...($=(L=n.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var D,N,R;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size="small" />
      <Slider data-testid={"monday-slider-show-value-m"} showValue={true} defaultValue={55} size="medium" />
      <Slider data-testid={"monday-slider-show-value-l"} showValue={true} defaultValue={89} size="large" />
    </Flex>

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: nonRangedSliderMouseEventsPlaySuite
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,k,M;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size="small" />
      <Slider prefix="Step 2, Max: 20" max={20} step={2} indicateSelection={true} defaultValue={4} size="medium" />
      <Slider prefix="from 20%" postfix="till 80%" min={20} max={80} showValue={true} defaultValue={62} size="large" />
      <Slider ranged={true} indicateSelection={true} min={100} max={200} step={10} size="large" />
    </Flex>,
  name: "Limits, Steps"
}`,...(M=(k=m.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var P,W,B;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider id="my-app-slider" data-testid={"my-app-slider"} className="my-custom-class" defaultValue={19} prefix="Check Dev-Tools for Custom Classes" size="medium" />
      <Slider id="custom-value-formatter" className="my-custom-formatter" defaultValue={3} min={1} max={10} indicateSelection={true} valueFormatter={value => \`\${value}GB\`} prefix="Custom value formatter" size="medium" />
      <Slider id="custom-value-formatter" className="my-long-formatter" defaultValue={3} min={1} max={10} indicateSelection={true} selectionIndicatorWidth="120px" valueFormatter={value => \`\${value} meter/hour\`} prefix="Long value formatter" size="medium" />
      <Slider id="custom-prefix" className="my-slider-wide" defaultValue={50} prefix={<Chips label="Custom component" readOnly />} postfix={(value, valueText) => {
      // set css: .my-slider-wide { max-width: none }
      return <span style={{
        whiteSpace: "nowrap"
      }}>{\`RenderProps: \${valueText} (\${value}) \`}</span>;
    }} size="medium" />
    </Flex>
}`,...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Q=["Overview","Sizes","Ranged","Colors","Disabled","WithLabels","ShowValue","LimitsSteps","Customisation"],se=Object.freeze(Object.defineProperty({__proto__:null,Colors:d,Customisation:c,Disabled:o,LimitsSteps:m,Overview:i,Ranged:l,ShowValue:u,Sizes:t,WithLabels:n,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{d as C,o as D,m as L,i as O,l as R,se as S,n as W,t as a,u as b,c};
