import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as te}from"./createStoryMetaSettingsDecorator-BOvb12cd.js";import{i as ie,r as re,d as s,e as d}from"./interactions-utils-B98y9kQA.js";import{within as g,fireEvent as V}from"./index-i7od9_os.js";import{r as se}from"./createComponentTemplate-B08h-OOW.js";import{z as B,A as z}from"./index-uCO9J26T.js";import{S as i}from"./Slider-BRQW3S0A.js";import{F as u}from"./Flex-DIp2zxrn.js";import{C as de}from"./Chips-B0k3Wioo.js";const n=50,R=20,ne=5;function m(t,r){const a=t.getBoundingClientRect(),l=a.top+a.height/2;V.click(t,{clientX:r,clientY:l})}async function c(t,r){const a=t.getBoundingClientRect(),l=a.left+a.width/2,o=a.top+a.height/2,le=(r-l)/R;let L=l;V.pointerDown(t,{clientX:L,clientY:o});for(let j=0;j<R;j++)L+=le,await s(ne),V.pointerMove(document,{clientX:L,clientY:o});V.pointerUp(document,{clientX:L,clientY:o})}async function oe(t){const r=t.getByTestId("monday-slider-show-value-s__rail"),a=r.getBoundingClientRect(),l=g(r).getByRole("slider");m(r,a.left),await s(n),d(l.getAttribute("aria-valuenow")).toBe("0"),m(r,a.right),await s(n),d(l.getAttribute("aria-valuenow")).toBe("100"),m(r,a.left+a.width*.5),await s(n),d(l.getAttribute("aria-valuenow")).toBe("50")}async function ue(t){const r=t.getByTestId("monday-slider-show-value-m__rail"),a=r.getBoundingClientRect(),l=g(r).getByRole("slider");await c(l,a.left+a.width*.25),await s(n),d(l.getAttribute("aria-valuenow")).toBe("25"),await c(l,a.left+a.width*.75),await s(n),d(l.getAttribute("aria-valuenow")).toBe("75")}async function me(t){const r=t.getByTestId("monday-ranged-slider-m__rail"),a=r.getBoundingClientRect(),l=g(r).getByTestId("monday-ranged-slider-m__thumb-0"),o=g(r).getByTestId("monday-ranged-slider-m__thumb-1");m(r,a.left),await s(n),d(l.getAttribute("aria-valuenow")).toBe("0"),m(r,a.right),await s(n),d(o.getAttribute("aria-valuenow")).toBe("100"),m(r,a.left+a.width*.25),await s(n),d(l.getAttribute("aria-valuenow")).toBe("25"),m(r,a.left+a.width*.75),await s(n),d(o.getAttribute("aria-valuenow")).toBe("75")}async function ce(t){const r=t.getByTestId("monday-ranged-slider-s__rail"),a=r.getBoundingClientRect(),l=g(r).getByTestId("monday-ranged-slider-s__thumb-0"),o=g(r).getByTestId("monday-ranged-slider-s__thumb-1");await c(l,a.left+a.width*.25),await s(n),d(l.getAttribute("aria-valuenow")).toBe("25"),await c(o,a.left+a.width*.65),await s(n),d(o.getAttribute("aria-valuenow")).toBe("65"),await c(l,a.left+a.width*.95),await s(n),d(o.getAttribute("aria-valuenow")).toBe("95"),await c(l,a.left+a.width*.05),await s(n),d(l.getAttribute("aria-valuenow")).toBe("5")}const ge=ie({tests:[oe,ue],afterEach:async()=>{await re()}}),pe=ie({tests:[me,ce],afterEach:async()=>{await re()}}),fe=te({component:i}),xe={title:"Components/Slider",component:i,argTypes:fe},be=se(i),p={render:be.bind({}),args:{id:"overview-slider",ariaLabel:"Overview slider"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},f={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"sizes-small",ariaLabel:"Small slider",size:"small",defaultValue:12}),e.jsx(i,{id:"sizes-medium",ariaLabel:"Medium slider",size:"medium",defaultValue:24}),e.jsx(i,{id:"sizes-large",ariaLabel:"Large slider",size:"large",defaultValue:35})]})},x={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"ranged-small",ariaLabel:"Small ranged slider","data-testid":"monday-ranged-slider-s",size:"small",ranged:!0}),e.jsx(i,{id:"ranged-medium",ariaLabel:"Medium ranged slider","data-testid":"monday-ranged-slider-m",size:"medium",ranged:!0,defaultValue:[12,55]}),e.jsx(i,{id:"ranged-large",ariaLabel:"Large ranged slider",size:"large",ranged:!0,defaultValue:[25,32]})]}),play:pe},b={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"color-positive",ariaLabel:"Positive color slider",color:"positive",defaultValue:34,size:"medium"}),e.jsx(i,{id:"color-negative",ariaLabel:"Negative color ranged slider",color:"negative",ranged:!0,defaultValue:[12,55],size:"medium"}),e.jsx(i,{id:"color-primary",ariaLabel:"Primary color slider",color:"primary",defaultValue:12,size:"medium"})]})},S={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"disabled-positive",ariaLabel:"Disabled positive slider",disabled:!0,defaultValue:24,color:"positive",size:"medium"}),e.jsx(i,{id:"disabled-negative",ariaLabel:"Disabled negative slider",disabled:!0,color:"negative",size:"medium"}),e.jsx(i,{id:"disabled-ranged",ariaLabel:"Disabled ranged primary slider",disabled:!0,ranged:!0,defaultValue:[12,55],color:"primary",size:"medium"})]})},v={render:()=>e.jsxs(u,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(i,{id:"labeled-simple",ariaLabel:"Simple labeled slider",indicateSelection:!0,defaultValue:12,size:"small"}),e.jsx(i,{id:"labeled-ranged",ariaLabel:"Labeled ranged slider",indicateSelection:!0,ranged:!0,defaultValue:[12,55],size:"small"}),e.jsx(i,{id:"labeled-sound",ariaLabel:"Sound slider with icon",prefix:{icon:z},indicateSelection:!0,defaultValue:70,size:"small"}),e.jsx(i,{id:"labeled-video",ariaLabel:"Video slider with icons",prefix:{icon:B},postfix:{icon:z},defaultValue:45,size:"medium"}),e.jsx(i,{id:"labeled-volume",ariaLabel:"Volume slider",prefix:"Vol",indicateSelection:!0,defaultValue:0,size:"large"})]}),parameters:{docs:{liveEdit:{scope:{Sound:z,Video:B}}}}},w={render:()=>e.jsxs(u,{gap:"medium",flex:"1",children:[e.jsx(i,{id:"show-value-small",ariaLabel:"Small slider showing value","data-testid":"monday-slider-show-value-s",showValue:!0,defaultValue:12,size:"small"}),e.jsx(i,{id:"show-value-medium",ariaLabel:"Medium slider showing value","data-testid":"monday-slider-show-value-m",showValue:!0,defaultValue:55,size:"medium"}),e.jsx(i,{id:"show-value-large",ariaLabel:"Large slider showing value","data-testid":"monday-slider-show-value-l",showValue:!0,defaultValue:89,size:"large"})]}),play:ge},h={render:()=>e.jsxs(u,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(i,{id:"step-10",ariaLabel:"Slider with step 10",prefix:"Step 10",step:10,indicateSelection:!0,defaultValue:10,size:"small"}),e.jsx(i,{id:"step-2-max-20",ariaLabel:"Slider with step 2 max 20",prefix:"Step 2, Max: 20",max:20,step:2,indicateSelection:!0,defaultValue:4,size:"medium"}),e.jsx(i,{id:"percentage-range",ariaLabel:"Percentage range slider from 20% to 80%",prefix:"from 20%",postfix:"till 80%",min:20,max:80,showValue:!0,defaultValue:62,size:"large"}),e.jsx(i,{id:"ranged-100-200",ariaLabel:"Ranged slider from 100 to 200",ranged:!0,indicateSelection:!0,min:100,max:200,step:10,size:"large"})]}),name:"Limits, Steps"},y={render:()=>e.jsxs(u,{direction:"column",gap:"large",style:{width:"500px"},children:[e.jsx(i,{id:"my-app-slider","data-testid":"my-app-slider",className:"my-custom-class",defaultValue:19,prefix:"Check Dev-Tools for Custom Classes",size:"medium"}),e.jsx(i,{id:"custom-value-formatter",className:"my-custom-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,valueFormatter:t=>`${t}GB`,prefix:"Custom value formatter",size:"medium"}),e.jsx(i,{id:"custom-value-formatter",className:"my-long-formatter",defaultValue:3,min:1,max:10,indicateSelection:!0,selectionIndicatorWidth:"120px",valueFormatter:t=>`${t} meter/hour`,prefix:"Long value formatter",size:"medium"}),e.jsx(i,{id:"custom-prefix",className:"my-slider-wide",defaultValue:50,prefix:e.jsx(de,{label:"Custom component",readOnly:!0}),postfix:(t,r)=>e.jsx("span",{style:{whiteSpace:"nowrap"},children:`RenderProps: ${r} (${t}) `}),size:"medium"})]})};var C,T,_;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,F,A;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="sizes-small" ariaLabel="Small slider" size="small" defaultValue={12} />
      <Slider id="sizes-medium" ariaLabel="Medium slider" size="medium" defaultValue={24} />
      <Slider id="sizes-large" ariaLabel="Large slider" size="large" defaultValue={35} />
    </Flex>
}`,...(A=(F=f.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var D,M,P;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="ranged-small" ariaLabel="Small ranged slider" data-testid={"monday-ranged-slider-s"} size="small" ranged={true} />
      <Slider id="ranged-medium" ariaLabel="Medium ranged slider" data-testid={"monday-ranged-slider-m"} size="medium" ranged={true} defaultValue={[12, 55]} />
      <Slider id="ranged-large" ariaLabel="Large ranged slider" size="large" ranged={true} defaultValue={[25, 32]} />
    </Flex>,
  play: rangedSliderMouseEventsPlaySuite
}`,...(P=(M=x.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var N,O,I;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="color-positive" ariaLabel="Positive color slider" color="positive" defaultValue={34} size="medium" />
      <Slider id="color-negative" ariaLabel="Negative color ranged slider" color="negative" ranged={true} defaultValue={[12, 55]} size="medium" />
      <Slider id="color-primary" ariaLabel="Primary color slider" color="primary" defaultValue={12} size="medium" />
    </Flex>
}`,...(I=(O=b.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var $,X,Y;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="disabled-positive" ariaLabel="Disabled positive slider" disabled={true} defaultValue={24} color="positive" size="medium" />
      <Slider id="disabled-negative" ariaLabel="Disabled negative slider" disabled={true} color="negative" size="medium" />
      <Slider id="disabled-ranged" ariaLabel="Disabled ranged primary slider" disabled={true} ranged={true} defaultValue={[12, 55]} color="primary" size="medium" />
    </Flex>
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var k,G,W;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(G=v.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var H,U,q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" flex="1">
      <Slider id="show-value-small" ariaLabel="Small slider showing value" data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size="small" />
      <Slider id="show-value-medium" ariaLabel="Medium slider showing value" data-testid={"monday-slider-show-value-m"} showValue={true} defaultValue={55} size="medium" />
      <Slider id="show-value-large" ariaLabel="Large slider showing value" data-testid={"monday-slider-show-value-l"} showValue={true} defaultValue={89} size="large" />
    </Flex>,
  play: nonRangedSliderMouseEventsPlaySuite
}`,...(q=(U=w.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" style={{
    width: "500px"
  }}>
      <Slider id="step-10" ariaLabel="Slider with step 10" prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size="small" />
      <Slider id="step-2-max-20" ariaLabel="Slider with step 2 max 20" prefix="Step 2, Max: 20" max={20} step={2} indicateSelection={true} defaultValue={4} size="medium" />
      <Slider id="percentage-range" ariaLabel="Percentage range slider from 20% to 80%" prefix="from 20%" postfix="till 80%" min={20} max={80} showValue={true} defaultValue={62} size="large" />
      <Slider id="ranged-100-200" ariaLabel="Ranged slider from 100 to 200" ranged={true} indicateSelection={true} min={100} max={200} step={10} size="large" />
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
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Se=["Overview","Sizes","Ranged","Colors","Disabled","WithLabels","ShowValue","LimitsSteps","Customisation"],Re=Object.freeze(Object.defineProperty({__proto__:null,Colors:b,Customisation:y,Disabled:S,LimitsSteps:h,Overview:p,Ranged:x,ShowValue:w,Sizes:f,WithLabels:v,__namedExportsOrder:Se,default:xe},Symbol.toStringTag,{value:"Module"}));export{b as C,S as D,h as L,p as O,x as R,Re as S,v as W,f as a,w as b,y as c};
