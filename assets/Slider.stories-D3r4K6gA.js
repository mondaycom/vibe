import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as te}from"./createStoryMetaSettingsDecorator-DJeVV-64.js";import{i as ie,r as le,d as s,e as d}from"./interactions-utils-CgUjUaHh.js";import{within as p,fireEvent as z}from"./index-i7od9_os.js";import{S as i}from"./Slider-8kgD6-Wn.js";import{r as se}from"./createComponentTemplate-B08h-OOW.js";import{y as R,z as j}from"./index-DLpaL66y.js";import{F as u}from"./Flex-DZptE16X.js";import{C as de}from"./Chips-_6GUdDoE.js";const n=50,C=20,ne=5;function m(t,l){const a=t.getBoundingClientRect(),r=a.top+a.height/2;z.click(t,{clientX:l,clientY:r})}async function c(t,l){const a=t.getBoundingClientRect(),r=a.left+a.width/2,o=a.top+a.height/2,re=(l-r)/C;let V=r;z.pointerDown(t,{clientX:V,clientY:o});for(let B=0;B<C;B++)V+=re,await s(ne),z.pointerMove(document,{clientX:V,clientY:o});z.pointerUp(document,{clientX:V,clientY:o})}async function oe(t){const l=await t.findByTestId("monday-slider-show-value-s__rail"),a=l.getBoundingClientRect(),r=await p(l).findByRole("slider");m(l,a.left),await s(n),d(r.getAttribute("aria-valuenow")).toBe("0"),m(l,a.right),await s(n),d(r.getAttribute("aria-valuenow")).toBe("100"),m(l,a.left+a.width*.5),await s(n),d(r.getAttribute("aria-valuenow")).toBe("50")}async function ue(t){const l=await t.findByTestId("monday-slider-show-value-m__rail"),a=l.getBoundingClientRect(),r=await p(l).findByRole("slider");await c(r,a.left+a.width*.25),await s(n),d(r.getAttribute("aria-valuenow")).toBe("25"),await c(r,a.left+a.width*.75),await s(n),d(r.getAttribute("aria-valuenow")).toBe("75")}async function me(t){const l=await t.findByTestId("monday-ranged-slider-m__rail"),a=l.getBoundingClientRect(),r=await p(l).findByTestId("monday-ranged-slider-m__thumb-0"),o=await p(l).findByTestId("monday-ranged-slider-m__thumb-1");m(l,a.left),await s(n),d(r.getAttribute("aria-valuenow")).toBe("0"),m(l,a.right),await s(n),d(o.getAttribute("aria-valuenow")).toBe("100"),m(l,a.left+a.width*.25),await s(n),d(r.getAttribute("aria-valuenow")).toBe("25"),m(l,a.left+a.width*.75),await s(n),d(o.getAttribute("aria-valuenow")).toBe("75")}async function ce(t){const l=await t.findByTestId("monday-ranged-slider-s__rail"),a=l.getBoundingClientRect(),r=await p(l).findByTestId("monday-ranged-slider-s__thumb-0"),o=await p(l).findByTestId("monday-ranged-slider-s__thumb-1");await c(r,a.left+a.width*.25),await s(n),d(r.getAttribute("aria-valuenow")).toBe("25"),await c(o,a.left+a.width*.65),await s(n),d(o.getAttribute("aria-valuenow")).toBe("65"),await c(r,a.left+a.width*.95),await s(n),d(o.getAttribute("aria-valuenow")).toBe("95"),await c(r,a.left+a.width*.05),await s(n),d(r.getAttribute("aria-valuenow")).toBe("5")}const pe=ie({tests:[oe,ue],afterEach:async()=>{await le()}}),ge=ie({tests:[me,ce],afterEach:async()=>{await le()}}),fe=te({component:i}),xe={title:"Components/Slider",component:i,argTypes:fe},be=se(i),g={render:be.bind({}),args:{id:"overview-slider","aria-label":"Overview slider"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},f={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"sizes-small","aria-label":"Small slider",size:"small",defaultValue:12}),e.jsx(i,{id:"sizes-medium","aria-label":"Medium slider",size:"medium",defaultValue:24}),e.jsx(i,{id:"sizes-large","aria-label":"Large slider",size:"large",defaultValue:35})]})},x={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"ranged-small","aria-label":"Small ranged slider","data-testid":"monday-ranged-slider-s",size:"small",ranged:!0}),e.jsx(i,{id:"ranged-medium","aria-label":"Medium ranged slider","data-testid":"monday-ranged-slider-m",size:"medium",ranged:!0,defaultValue:[12,55]}),e.jsx(i,{id:"ranged-large","aria-label":"Large ranged slider",size:"large",ranged:!0,defaultValue:[25,32]})]}),play:ge},b={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"color-positive","aria-label":"Positive color slider",color:"positive",defaultValue:34,size:"medium"}),e.jsx(i,{id:"color-negative","aria-label":"Negative color ranged slider",color:"negative",ranged:!0,defaultValue:[12,55],size:"medium"}),e.jsx(i,{id:"color-primary","aria-label":"Primary color slider",color:"primary",defaultValue:12,size:"medium"})]})},S={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"disabled-positive","aria-label":"Disabled positive slider",disabled:!0,defaultValue:24,color:"positive",size:"medium"}),e.jsx(i,{id:"disabled-negative","aria-label":"Disabled negative slider",disabled:!0,color:"negative",size:"medium"}),e.jsx(i,{id:"disabled-ranged","aria-label":"Disabled ranged primary slider",disabled:!0,ranged:!0,defaultValue:[12,55],color:"primary",size:"medium"})]})},w={render:()=>e.jsxs(u,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(i,{id:"labeled-simple","aria-label":"Simple labeled slider",indicateSelection:!0,defaultValue:12,size:"small"}),e.jsx(i,{id:"labeled-ranged","aria-label":"Labeled ranged slider",indicateSelection:!0,ranged:!0,defaultValue:[12,55],size:"small"}),e.jsx(i,{id:"labeled-sound","aria-label":"Sound slider with icon",prefix:{icon:j},indicateSelection:!0,defaultValue:70,size:"small"}),e.jsx(i,{id:"labeled-video","aria-label":"Video slider with icons",prefix:{icon:R},postfix:{icon:j},defaultValue:45,size:"medium"}),e.jsx(i,{id:"labeled-volume","aria-label":"Volume slider",prefix:"Vol",indicateSelection:!0,defaultValue:0,size:"large"})]}),parameters:{docs:{liveEdit:{scope:{Sound:j,Video:R}}}}},v={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"show-value-small","aria-label":"Small slider showing value","data-testid":"monday-slider-show-value-s",showValue:!0,defaultValue:12,size:"small"}),e.jsx(i,{id:"show-value-medium","aria-label":"Medium slider showing value","data-testid":"monday-slider-show-value-m",showValue:!0,defaultValue:55,size:"medium"}),e.jsx(i,{id:"show-value-large","aria-label":"Large slider showing value","data-testid":"monday-slider-show-value-l",showValue:!0,defaultValue:89,size:"large"})]}),play:pe},h={render:()=>e.jsxs(u,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(i,{id:"step-10","aria-label":"Slider with step 10",prefix:"Step 10",step:10,indicateSelection:!0,defaultValue:10,size:"small"}),e.jsx(i,{id:"step-2-max-20","aria-label":"Slider with step 2 max 20",prefix:"Step 2, Max: 20",max:20,step:2,indicateSelection:!0,defaultValue:4,size:"medium"}),e.jsx(i,{id:"percentage-range","aria-label":"Percentage range slider from 20% to 80%",prefix:"from 20%",postfix:"till 80%",min:20,max:80,showValue:!0,defaultValue:62,size:"large"}),e.jsx(i,{id:"ranged-100-200","aria-label":"Ranged slider from 100 to 200",ranged:!0,indicateSelection:!0,min:100,max:200,step:10,size:"large"})]}),name:"Limits, Steps"},y={render:()=>e.jsxs(u,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(i,{id:"my-app-slider","data-testid":"my-app-slider",className:"my-custom-class",defaultValue:19,prefix:"Check Dev-Tools for Custom Classes",size:"medium"}),e.jsx(i,{id:"custom-value-formatter",className:"my-custom-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,valueFormatter:t=>`${t}GB`,prefix:"Custom value formatter",size:"medium"}),e.jsx(i,{id:"custom-value-formatter",className:"my-long-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,selectionIndicatorWidth:"120px",valueFormatter:t=>`${t} meter/hour`,prefix:"Long value formatter",size:"medium"}),e.jsx(i,{id:"custom-prefix",className:"my-slider-wide",defaultValue:50,prefix:e.jsx(de,{label:"Custom component",readOnly:!0}),postfix:(t,l)=>e.jsx("span",{style:{whiteSpace:"nowrap"},children:`RenderProps: ${l} (${t}) `}),size:"medium"})]})};var T,_,E;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: sliderTemplate.bind({}),
  args: {
    id: "overview-slider",
    "aria-label": "Overview slider"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,A,D;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="sizes-small" aria-label="Small slider" size="small" defaultValue={12} />
      <Slider id="sizes-medium" aria-label="Medium slider" size="medium" defaultValue={24} />
      <Slider id="sizes-large" aria-label="Large slider" size="large" defaultValue={35} />
    </Flex>
}`,...(D=(A=f.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,M,P;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="ranged-small" aria-label="Small ranged slider" data-testid={"monday-ranged-slider-s"} size="small" ranged={true} />
      <Slider id="ranged-medium" aria-label="Medium ranged slider" data-testid={"monday-ranged-slider-m"} size="medium" ranged={true} defaultValue={[12, 55]} />
      <Slider id="ranged-large" aria-label="Large ranged slider" size="large" ranged={true} defaultValue={[25, 32]} />
    </Flex>,
  play: rangedSliderMouseEventsPlaySuite
}`,...(P=(M=x.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var N,O,I;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="color-positive" aria-label="Positive color slider" color="positive" defaultValue={34} size="medium" />
      <Slider id="color-negative" aria-label="Negative color ranged slider" color="negative" ranged={true} defaultValue={[12, 55]} size="medium" />
      <Slider id="color-primary" aria-label="Primary color slider" color="primary" defaultValue={12} size="medium" />
    </Flex>
}`,...(I=(O=b.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var $,X,Y;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="disabled-positive" aria-label="Disabled positive slider" disabled={true} defaultValue={24} color="positive" size="medium" />
      <Slider id="disabled-negative" aria-label="Disabled negative slider" disabled={true} color="negative" size="medium" />
      <Slider id="disabled-ranged" aria-label="Disabled ranged primary slider" disabled={true} ranged={true} defaultValue={[12, 55]} color="primary" size="medium" />
    </Flex>
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var k,G,W;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider id="labeled-simple" aria-label="Simple labeled slider" indicateSelection={true} defaultValue={12} size="small" />
      <Slider id="labeled-ranged" aria-label="Labeled ranged slider" indicateSelection={true} ranged={true} defaultValue={[12, 55]} size="small" />
      <Slider id="labeled-sound" aria-label="Sound slider with icon"
    // @ts-ignore
    prefix={{
      icon: Sound
    }} indicateSelection={true} defaultValue={70} size="small" />
      <Slider id="labeled-video" aria-label="Video slider with icons"
    // @ts-ignore
    prefix={{
      icon: Video
    }}
    // @ts-ignore
    postfix={{
      icon: Sound
    }} defaultValue={45} size="medium" />
      <Slider id="labeled-volume" aria-label="Volume slider" prefix="Vol" indicateSelection={true} defaultValue={0} size="large" />
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
}`,...(W=(G=w.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var H,U,q;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="show-value-small" aria-label="Small slider showing value" data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size="small" />
      <Slider id="show-value-medium" aria-label="Medium slider showing value" data-testid={"monday-slider-show-value-m"} showValue={true} defaultValue={55} size="medium" />
      <Slider id="show-value-large" aria-label="Large slider showing value" data-testid={"monday-slider-show-value-l"} showValue={true} defaultValue={89} size="large" />
    </Flex>,
  play: nonRangedSliderMouseEventsPlaySuite
}`,...(q=(U=v.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider id="step-10" aria-label="Slider with step 10" prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size="small" />
      <Slider id="step-2-max-20" aria-label="Slider with step 2 max 20" prefix="Step 2, Max: 20" max={20} step={2} indicateSelection={true} defaultValue={4} size="medium" />
      <Slider id="percentage-range" aria-label="Percentage range slider from 20% to 80%" prefix="from 20%" postfix="till 80%" min={20} max={80} showValue={true} defaultValue={62} size="large" />
      <Slider id="ranged-100-200" aria-label="Ranged slider from 100 to 200" ranged={true} indicateSelection={true} min={100} max={200} step={10} size="large" />
    </Flex>,
  name: "Limits, Steps"
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,ae;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Se=["Overview","Sizes","Ranged","Colors","Disabled","WithLabels","ShowValue","LimitsSteps","Customisation"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Colors:b,Customisation:y,Disabled:S,LimitsSteps:h,Overview:g,Ranged:x,ShowValue:v,Sizes:f,WithLabels:w,__namedExportsOrder:Se,default:xe},Symbol.toStringTag,{value:"Module"}));export{b as C,S as D,h as L,g as O,x as R,Ce as S,w as W,f as a,v as b,y as c};
