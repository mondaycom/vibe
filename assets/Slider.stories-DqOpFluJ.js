import{R as e}from"./index-Hemj67b4.js";import{S as a}from"./Slider-DWjuYzCQ.js";import{C as I}from"./Chips-CkRHyT8j.js";import{F as t}from"./Flex-DIvs4XZj.js";import{r as q}from"./createComponentTemplate-Y0VTmW_y.js";import{r as f,g as p}from"./index-BA_MN9l1.js";import{c as A}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const H=A({component:a}),J={title:"Components/Slider",component:a,argTypes:H},K=q(a),l={render:K.bind({}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},i={render:()=>e.createElement(t,{gap:"medium",flex:"1"},e.createElement(a,{size:"small",defaultValue:12}),e.createElement(a,{size:"medium",defaultValue:24}),e.createElement(a,{size:"large",defaultValue:35}))},s={render:()=>e.createElement(t,{gap:"medium",flex:"1"},e.createElement(a,{"data-testid":"monday-ranged-slider-s",size:"small",ranged:!0}),e.createElement(a,{"data-testid":"monday-ranged-slider-m",size:"medium",ranged:!0,defaultValue:[12,55]}),e.createElement(a,{size:"large",ranged:!0,defaultValue:[25,32]}))},d={render:()=>e.createElement(t,{gap:"medium",flex:"1"},e.createElement(a,{color:"positive",defaultValue:34,size:"medium"}),e.createElement(a,{color:"negative",ranged:!0,defaultValue:[12,55],size:"medium"}),e.createElement(a,{color:"primary",defaultValue:12,size:"medium"}))},n={render:()=>e.createElement(t,{gap:"medium",flex:"1"},e.createElement(a,{disabled:!0,defaultValue:24,color:"positive",size:"medium"}),e.createElement(a,{disabled:!0,color:"negative",size:"medium"}),e.createElement(a,{disabled:!0,ranged:!0,defaultValue:[12,55],color:"primary",size:"medium"}))},o={render:()=>e.createElement(t,{direction:"column",gap:"large",style:{width:"500px"}},e.createElement(a,{indicateSelection:!0,defaultValue:12,size:"small"}),e.createElement(a,{indicateSelection:!0,ranged:!0,defaultValue:[12,55],size:"small"}),e.createElement(a,{prefix:{icon:p},indicateSelection:!0,defaultValue:70,size:"small"}),e.createElement(a,{prefix:{icon:f},postfix:{icon:p},defaultValue:45,size:"medium"}),e.createElement(a,{prefix:"Vol",indicateSelection:!0,defaultValue:0,size:"large"})),parameters:{docs:{liveEdit:{scope:{Sound:p,Video:f}}}}},m={render:()=>e.createElement(t,{gap:"medium",flex:"1"},e.createElement(a,{"data-testid":"monday-slider-show-value-s",showValue:!0,defaultValue:12,size:"small"}),e.createElement(a,{"data-testid":"monday-slider-show-value-m",showValue:!0,defaultValue:55,size:"medium"}),e.createElement(a,{"data-testid":"monday-slider-show-value-l",showValue:!0,defaultValue:89,size:"large"}))},u={render:()=>e.createElement(t,{direction:"column",gap:"large",style:{width:"500px"}},e.createElement(a,{prefix:"Step 10",step:10,indicateSelection:!0,defaultValue:10,size:"small"}),e.createElement(a,{prefix:"Step 2, Max: 20",max:20,step:2,indicateSelection:!0,defaultValue:4,size:"medium"}),e.createElement(a,{prefix:"from 20%",postfix:"till 80%",min:20,max:80,showValue:!0,defaultValue:62,size:"large"}),e.createElement(a,{ranged:!0,indicateSelection:!0,min:100,max:200,step:10,size:"large"})),name:"Limits, Steps"},c={render:()=>e.createElement(t,{direction:"column",gap:"large",style:{width:"500px"}},e.createElement(a,{id:"my-app-slider","data-testid":"my-app-slider",className:"my-custom-class",defaultValue:19,prefix:"Check Dev-Tools for Custom Classes",size:"medium"}),e.createElement(a,{id:"custom-value-formatter",className:"my-custom-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,valueFormatter:r=>`${r}GB`,prefix:"Custom value formatter",size:"medium"}),e.createElement(a,{id:"custom-value-formatter",className:"my-long-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,selectionIndicatorWidth:"120px",valueFormatter:r=>`${r} meter/hour`,prefix:"Long value formatter",size:"medium"}),e.createElement(a,{id:"custom-prefix",className:"my-slider-wide",defaultValue:50,prefix:e.createElement(I,{label:"Custom component",readOnly:!0}),postfix:(r,G)=>e.createElement("span",{style:{whiteSpace:"nowrap"}},`RenderProps: ${G} (${r}) `),size:"medium"}))};var S,g,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: sliderTemplate.bind({}),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var V,z,v;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider size="small" defaultValue={12} />
      <Slider size="medium" defaultValue={24} />
      <Slider size="large" defaultValue={35} />
    </Flex>
}`,...(v=(z=i.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var y,E,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider data-testid={"monday-ranged-slider-s"} size="small" ranged={true} />
      <Slider data-testid={"monday-ranged-slider-m"} size="medium" ranged={true} defaultValue={[12, 55]} />
      <Slider size="large" ranged={true} defaultValue={[25, 32]} />
    </Flex>

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: rangedSliderMouseEventsPlaySuite
}`,...(h=(E=s.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var w,b,F;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider color="positive" defaultValue={34} size="medium" />
      <Slider color="negative" ranged={true} defaultValue={[12, 55]} size="medium" />
      <Slider color="primary" defaultValue={12} size="medium" />
    </Flex>
}`,...(F=(b=d.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var C,O,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider disabled={true} defaultValue={24} color="positive" size="medium" />
      <Slider disabled={true} color="negative" size="medium" />
      <Slider disabled={true} ranged={true} defaultValue={[12, 55]} color="primary" size="medium" />
    </Flex>
}`,...(T=(O=n.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var L,$,D;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=($=o.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var N,R,_;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size="small" />
      <Slider data-testid={"monday-slider-show-value-m"} showValue={true} defaultValue={55} size="medium" />
      <Slider data-testid={"monday-slider-show-value-l"} showValue={true} defaultValue={89} size="large" />
    </Flex>

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: nonRangedSliderMouseEventsPlaySuite
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var k,M,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size="small" />
      <Slider prefix="Step 2, Max: 20" max={20} step={2} indicateSelection={true} defaultValue={4} size="medium" />
      <Slider prefix="from 20%" postfix="till 80%" min={20} max={80} showValue={true} defaultValue={62} size="large" />
      <Slider ranged={true} indicateSelection={true} min={100} max={200} step={10} size="large" />
    </Flex>,
  name: "Limits, Steps"
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var W,j,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const Q=["Overview","Sizes","Ranged","Colors","Disabled","WithLabels","ShowValue","LimitsSteps","Customisation"],re=Object.freeze(Object.defineProperty({__proto__:null,Colors:d,Customisation:c,Disabled:n,LimitsSteps:u,Overview:l,Ranged:s,ShowValue:m,Sizes:i,WithLabels:o,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{d as C,n as D,u as L,l as O,s as R,re as S,o as W,i as a,m as b,c};
