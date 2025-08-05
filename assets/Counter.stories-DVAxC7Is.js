import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{C as n}from"./Counter-D2I5rwEB.js";import{D as u}from"./Divider-Dxm0fdi1.js";import{I as g}from"./Icon-CDdqL_gb.js";import{A as Q}from"./Avatar-BnB0-Ru2.js";import{F as t}from"./Flex-2Q04fxOc.js";import{T as r}from"./Text-C9ywLJgn.js";import{t as m,a as h}from"./index-CUPFiJE2.js";import{b as p}from"./Workspace-BIJf5qCK.js";import{c as W}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const $=W({component:n}),q={title:"Components/Counter",component:n,decorators:$.decorators},i={render:R=>e.jsx(n,{count:5,...R}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsxs(t,{gap:160,children:[e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,size:"xs"}),e.jsx(r,{children:"XS"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,size:"small"}),e.jsx(r,{children:"Small"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5}),e.jsx(r,{children:"Large"})]})]})},s={render:()=>e.jsxs(t,{gap:160,children:[e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5}),e.jsx(r,{children:"Primary"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,color:"negative"}),e.jsx(r,{children:"Negative or notification"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,color:"dark"}),e.jsx(r,{children:"Dark"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,color:"light"}),e.jsx(r,{children:"Light"})]})]})},a={render:()=>e.jsxs(t,{gap:160,children:[e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,kind:"line"}),e.jsx(r,{children:"Primary"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,color:"negative",kind:"line"}),e.jsx(r,{children:"Negative or notification"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,color:"dark",kind:"line"}),e.jsx(r,{children:"Dark"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:5,color:"light",kind:"line"}),e.jsx(r,{children:"Light"})]})]})},l={render:()=>e.jsxs(t,{gap:160,children:[e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:10,maxDigits:1}),e.jsx(r,{children:"One digit limit"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:100,maxDigits:2}),e.jsx(r,{children:"Two digits limit"})]}),e.jsxs(t,{direction:"column",gap:"large",style:{width:"100px"},align:"start",children:[e.jsx(n,{count:1e3}),e.jsx(r,{children:"Three digits limit"})]})]})},c={render:()=>e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Q,{type:"icon",icon:m,backgroundColor:"royal"}),e.jsx("div",{style:{position:"absolute",top:"-5px",right:"-5px"},children:e.jsx(n,{count:5,maxDigits:1,color:"negative"})})]}),parameters:{docs:{liveEdit:{scope:{Notifications:m}}}}},d={render:()=>e.jsxs(t,{gap:28,children:[e.jsxs(t,{direction:"column",gap:"large",align:"start",children:[e.jsx(r,{children:"UX Writing & microcopy Re..."}),e.jsx(r,{children:"Mobile Data- Iteration Plan..."}),e.jsx(r,{children:"Q Plans."})]}),e.jsxs(t,{direction:"column",gap:"large",align:"start",children:[e.jsx(n,{count:195,color:"dark"}),e.jsx(n,{count:141,color:"dark"}),e.jsx(n,{count:99,color:"dark"})]})]})},x={render:()=>e.jsxs(t,{gap:12,direction:"column",align:"start",children:[e.jsx(g,{icon:h,iconSize:"36"}),e.jsx(u,{}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(g,{icon:p,iconSize:"36"}),e.jsx("div",{style:{position:"absolute",bottom:0,right:-3},children:e.jsx(n,{count:5,size:"small"})})]}),e.jsx(u,{}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(g,{icon:p,iconSize:"36"}),e.jsx("div",{style:{position:"absolute",bottom:0,right:-3},children:e.jsx(n,{count:5,color:"dark",size:"small"})})]})]}),parameters:{docs:{liveEdit:{scope:{AddUpdate:h,Update:p}}}}};var j,v,y;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: CounterProps) => <Counter count={5} {...args} />,
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var F,T,C;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Flex gap={160}>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} size="xs" />
        <Text>XS</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} size="small" />
        <Text>Small</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} />
        <Text>Large</Text>
      </Flex>
    </Flex>
}`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var w,S,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex gap={160}>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} />
        <Text>Primary</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} color="negative" />
        <Text>Negative or notification</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} color="dark" />
        <Text>Dark</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} color="light" />
        <Text>Light</Text>
      </Flex>
    </Flex>
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var k,b,z;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex gap={160}>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} kind="line" />
        <Text>Primary</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} color="negative" kind="line" />
        <Text>Negative or notification</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} color="dark" kind="line" />
        <Text>Dark</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={5} color="light" kind="line" />
        <Text>Light</Text>
      </Flex>
    </Flex>
}`,...(z=(b=a.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var D,O,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Flex gap={160}>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={10} maxDigits={1} />
        <Text>One digit limit</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={100} maxDigits={2} />
        <Text>Two digits limit</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{
      width: "100px"
    }} align="start">
        <Counter count={1000} />
        <Text>Three digits limit</Text>
      </Flex>
    </Flex>
}`,...(N=(O=l.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var U,E,P;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      position: "relative"
    }}>
        <Avatar type="icon" icon={Notifications} backgroundColor="royal" />
        <div style={{
        position: "absolute",
        top: "-5px",
        right: "-5px"
      }}>
          <Counter count={5} maxDigits={1} color="negative" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Notifications
        }
      }
    }
  }
}`,...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var I,L,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Flex gap={28}>
      <Flex direction="column" gap="large" align="start">
        <Text>UX Writing & microcopy Re...</Text>
        <Text>Mobile Data- Iteration Plan...</Text>
        <Text>Q Plans.</Text>
      </Flex>
      <Flex direction="column" gap="large" align="start">
        <Counter count={195} color="dark" />
        <Counter count={141} color="dark" />
        <Counter count={99} color="dark" />
      </Flex>
    </Flex>
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var A,M,X;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Flex gap={12} direction="column" align="start">
      <Icon icon={AddUpdate} iconSize="36" />
      <Divider />
      <div style={{
      position: "relative"
    }}>
        <Icon icon={Update} iconSize="36" />
        <div style={{
        position: "absolute",
        bottom: 0,
        right: -3
      }}>
          <Counter count={5} size="small" />
        </div>
      </div>
      <Divider />
      <div style={{
      position: "relative"
    }}>
        <Icon icon={Update} iconSize="36" />
        <div style={{
        position: "absolute",
        bottom: 0,
        right: -3
      }}>
          <Counter count={5} color="dark" size="small" />
        </div>
      </div>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          AddUpdate,
          Update
        }
      }
    }
  }
}`,...(X=(M=x.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};const B=["Overview","Sizes","Colors","Outline","Limits","NotificationCounter","CounterOnInboxFilters","CountTheNumberOfUpdates"],re=Object.freeze(Object.defineProperty({__proto__:null,Colors:s,CountTheNumberOfUpdates:x,CounterOnInboxFilters:d,Limits:l,NotificationCounter:c,Outline:a,Overview:i,Sizes:o,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{re as C,l as L,c as N,i as O,o as S,s as a,a as b,d as c,x as d};
