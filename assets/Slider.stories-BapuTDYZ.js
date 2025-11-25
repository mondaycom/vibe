import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as I}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{r as q}from"./createComponentTemplate-B08h-OOW.js";import{m as g,n as p}from"./index-BVKo2bYj.js";import{S as a}from"./Slider-BI-uplgW.js";import{F as i}from"./Flex-Bimzf4jb.js";import{C as A}from"./Chips-B0mGgHv5.js";const H=I({component:a}),J={title:"Components/Slider",component:a,argTypes:H},K=q(a),l={render:K.bind({}),args:{id:"overview-slider",ariaLabel:"Overview slider"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.jsxs(i,{gap:"medium",flex:"1",children:[e.jsx(a,{id:"sizes-small",ariaLabel:"Small slider",size:"small",defaultValue:12}),e.jsx(a,{id:"sizes-medium",ariaLabel:"Medium slider",size:"medium",defaultValue:24}),e.jsx(a,{id:"sizes-large",ariaLabel:"Large slider",size:"large",defaultValue:35})]})},d={render:()=>e.jsxs(i,{gap:"medium",flex:"1",children:[e.jsx(a,{id:"ranged-small",ariaLabel:"Small ranged slider","data-testid":"monday-ranged-slider-s",size:"small",ranged:!0}),e.jsx(a,{id:"ranged-medium",ariaLabel:"Medium ranged slider","data-testid":"monday-ranged-slider-m",size:"medium",ranged:!0,defaultValue:[12,55]}),e.jsx(a,{id:"ranged-large",ariaLabel:"Large ranged slider",size:"large",ranged:!0,defaultValue:[25,32]})]})},t={render:()=>e.jsxs(i,{gap:"medium",flex:"1",children:[e.jsx(a,{id:"color-positive",ariaLabel:"Positive color slider",color:"positive",defaultValue:34,size:"medium"}),e.jsx(a,{id:"color-negative",ariaLabel:"Negative color ranged slider",color:"negative",ranged:!0,defaultValue:[12,55],size:"medium"}),e.jsx(a,{id:"color-primary",ariaLabel:"Primary color slider",color:"primary",defaultValue:12,size:"medium"})]})},o={render:()=>e.jsxs(i,{gap:"medium",flex:"1",children:[e.jsx(a,{id:"disabled-positive",ariaLabel:"Disabled positive slider",disabled:!0,defaultValue:24,color:"positive",size:"medium"}),e.jsx(a,{id:"disabled-negative",ariaLabel:"Disabled negative slider",disabled:!0,color:"negative",size:"medium"}),e.jsx(a,{id:"disabled-ranged",ariaLabel:"Disabled ranged primary slider",disabled:!0,ranged:!0,defaultValue:[12,55],color:"primary",size:"medium"})]})},n={render:()=>e.jsxs(i,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(a,{id:"labeled-simple",ariaLabel:"Simple labeled slider",indicateSelection:!0,defaultValue:12,size:"small"}),e.jsx(a,{id:"labeled-ranged",ariaLabel:"Labeled ranged slider",indicateSelection:!0,ranged:!0,defaultValue:[12,55],size:"small"}),e.jsx(a,{id:"labeled-sound",ariaLabel:"Sound slider with icon",prefix:{icon:p},indicateSelection:!0,defaultValue:70,size:"small"}),e.jsx(a,{id:"labeled-video",ariaLabel:"Video slider with icons",prefix:{icon:g},postfix:{icon:p},defaultValue:45,size:"medium"}),e.jsx(a,{id:"labeled-volume",ariaLabel:"Volume slider",prefix:"Vol",indicateSelection:!0,defaultValue:0,size:"large"})]}),parameters:{docs:{liveEdit:{scope:{Sound:p,Video:g}}}}},u={render:()=>e.jsxs(i,{gap:"medium",flex:"1",children:[e.jsx(a,{id:"show-value-small",ariaLabel:"Small slider showing value","data-testid":"monday-slider-show-value-s",showValue:!0,defaultValue:12,size:"small"}),e.jsx(a,{id:"show-value-medium",ariaLabel:"Medium slider showing value","data-testid":"monday-slider-show-value-m",showValue:!0,defaultValue:55,size:"medium"}),e.jsx(a,{id:"show-value-large",ariaLabel:"Large slider showing value","data-testid":"monday-slider-show-value-l",showValue:!0,defaultValue:89,size:"large"})]})},m={render:()=>e.jsxs(i,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(a,{id:"step-10",ariaLabel:"Slider with step 10",prefix:"Step 10",step:10,indicateSelection:!0,defaultValue:10,size:"small"}),e.jsx(a,{id:"step-2-max-20",ariaLabel:"Slider with step 2 max 20",prefix:"Step 2, Max: 20",max:20,step:2,indicateSelection:!0,defaultValue:4,size:"medium"}),e.jsx(a,{id:"percentage-range",ariaLabel:"Percentage range slider from 20% to 80%",prefix:"from 20%",postfix:"till 80%",min:20,max:80,showValue:!0,defaultValue:62,size:"large"}),e.jsx(a,{id:"ranged-100-200",ariaLabel:"Ranged slider from 100 to 200",ranged:!0,indicateSelection:!0,min:100,max:200,step:10,size:"large"})]}),name:"Limits, Steps"},c={render:()=>e.jsxs(i,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(a,{id:"my-app-slider","data-testid":"my-app-slider",className:"my-custom-class",defaultValue:19,prefix:"Check Dev-Tools for Custom Classes",size:"medium"}),e.jsx(a,{id:"custom-value-formatter",className:"my-custom-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,valueFormatter:r=>`${r}GB`,prefix:"Custom value formatter",size:"medium"}),e.jsx(a,{id:"custom-value-formatter",className:"my-long-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,selectionIndicatorWidth:"120px",valueFormatter:r=>`${r} meter/hour`,prefix:"Long value formatter",size:"medium"}),e.jsx(a,{id:"custom-prefix",className:"my-slider-wide",defaultValue:50,prefix:e.jsx(A,{label:"Custom component",readOnly:!0}),postfix:(r,G)=>e.jsx("span",{style:{whiteSpace:"nowrap"},children:`RenderProps: ${G} (${r}) `}),size:"medium"})]})};var x,f,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: sliderTemplate.bind({}),
  args: {
    id: "overview-slider",
    ariaLabel: "Overview slider"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,v,V;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="sizes-small" ariaLabel="Small slider" size="small" defaultValue={12} />
      <Slider id="sizes-medium" ariaLabel="Medium slider" size="medium" defaultValue={24} />
      <Slider id="sizes-large" ariaLabel="Large slider" size="large" defaultValue={35} />
    </Flex>
}`,...(V=(v=s.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var L,z,h;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="ranged-small" ariaLabel="Small ranged slider" data-testid={"monday-ranged-slider-s"} size="small" ranged={true} />
      <Slider id="ranged-medium" ariaLabel="Medium ranged slider" data-testid={"monday-ranged-slider-m"} size="medium" ranged={true} defaultValue={[12, 55]} />
      <Slider id="ranged-large" ariaLabel="Large ranged slider" size="large" ranged={true} defaultValue={[25, 32]} />
    </Flex>

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: rangedSliderMouseEventsPlaySuite
}`,...(h=(z=d.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var w,y,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="color-positive" ariaLabel="Positive color slider" color="positive" defaultValue={34} size="medium" />
      <Slider id="color-negative" ariaLabel="Negative color ranged slider" color="negative" ranged={true} defaultValue={[12, 55]} size="medium" />
      <Slider id="color-primary" ariaLabel="Primary color slider" color="primary" defaultValue={12} size="medium" />
    </Flex>
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var F,C,D;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="disabled-positive" ariaLabel="Disabled positive slider" disabled={true} defaultValue={24} color="positive" size="medium" />
      <Slider id="disabled-negative" ariaLabel="Disabled negative slider" disabled={true} color="negative" size="medium" />
      <Slider id="disabled-ranged" ariaLabel="Disabled ranged primary slider" disabled={true} ranged={true} defaultValue={[12, 55]} color="primary" size="medium" />
    </Flex>
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var O,M,P;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider id="labeled-simple" ariaLabel="Simple labeled slider" indicateSelection={true} defaultValue={12} size="small" />
      <Slider id="labeled-ranged" ariaLabel="Labeled ranged slider" indicateSelection={true} ranged={true} defaultValue={[12, 55]} size="small" />
      <Slider id="labeled-sound" ariaLabel="Sound slider with icon"
    // @ts-ignore
    prefix={{
      icon: Sound
    }} indicateSelection={true} defaultValue={70} size="small" />
      <Slider id="labeled-video" ariaLabel="Video slider with icons"
    // @ts-ignore
    prefix={{
      icon: Video
    }}
    // @ts-ignore
    postfix={{
      icon: Sound
    }} defaultValue={45} size="medium" />
      <Slider id="labeled-volume" ariaLabel="Volume slider" prefix="Vol" indicateSelection={true} defaultValue={0} size="large" />
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
}`,...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var E,N,T;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="show-value-small" ariaLabel="Small slider showing value" data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size="small" />
      <Slider id="show-value-medium" ariaLabel="Medium slider showing value" data-testid={"monday-slider-show-value-m"} showValue={true} defaultValue={55} size="medium" />
      <Slider id="show-value-large" ariaLabel="Large slider showing value" data-testid={"monday-slider-show-value-l"} showValue={true} defaultValue={89} size="large" />
    </Flex>

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: nonRangedSliderMouseEventsPlaySuite
}`,...(T=(N=u.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var R,$,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider id="step-10" ariaLabel="Slider with step 10" prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size="small" />
      <Slider id="step-2-max-20" ariaLabel="Slider with step 2 max 20" prefix="Step 2, Max: 20" max={20} step={2} indicateSelection={true} defaultValue={4} size="medium" />
      <Slider id="percentage-range" ariaLabel="Percentage range slider from 20% to 80%" prefix="from 20%" postfix="till 80%" min={20} max={80} showValue={true} defaultValue={62} size="large" />
      <Slider id="ranged-100-200" ariaLabel="Ranged slider from 100 to 200" ranged={true} indicateSelection={true} min={100} max={200} step={10} size="large" />
    </Flex>,
  name: "Limits, Steps"
}`,...(_=($=m.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var k,W,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider id="my-app-slider" data-testid={"my-app-slider"} className="my-custom-class" defaultValue={19} prefix="Check Dev-Tools for Custom Classes" size="medium" />
      <Slider id="custom-value-formatter" className="my-custom-formatter" defaultValue={3} min={1} max={10} indicateSelection={true} valueFormatter={(value: number) => \`\${value}GB\`} prefix="Custom value formatter" size="medium" />
      <Slider id="custom-value-formatter" className="my-long-formatter" defaultValue={3} min={1} max={10} indicateSelection={true} selectionIndicatorWidth="120px" valueFormatter={(value: number) => \`\${value} meter/hour\`} prefix="Long value formatter" size="medium" />
      <Slider id="custom-prefix" className="my-slider-wide" defaultValue={50} prefix={<Chips label="Custom component" readOnly />} postfix={(value: number, valueText: string) => {
      // set css: .my-slider-wide { max-width: none }
      return <span style={{
        whiteSpace: "nowrap"
      }}>{\`RenderProps: \${valueText} (\${value}) \`}</span>;
    }} size="medium" />
    </Flex>
}`,...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Q=["Overview","Sizes","Ranged","Colors","Disabled","WithLabels","ShowValue","LimitsSteps","Customisation"],re=Object.freeze(Object.defineProperty({__proto__:null,Colors:t,Customisation:c,Disabled:o,LimitsSteps:m,Overview:l,Ranged:d,ShowValue:u,Sizes:s,WithLabels:n,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{t as C,o as D,m as L,l as O,d as R,re as S,n as W,s as a,u as b,c};
