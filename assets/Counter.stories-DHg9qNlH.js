import{R as e}from"./index-Hemj67b4.js";import{C as t}from"./Counter-tqJNw08f.js";import{D as p}from"./Divider-CPEi52zL.js";import{I as u}from"./Icon-zHybxhV-.js";import{A as Q}from"./Avatar-DumOSK4_.js";import{F as n}from"./Flex-DIvs4XZj.js";import{T as r}from"./Text-C0CU0_Vh.js";import{t as x,a as E}from"./index-BA_MN9l1.js";import{b as g}from"./Workspace-BIJf5qCK.js";import{c as W}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const $=W({component:t}),q={title:"Components/Counter",component:t,decorators:$.decorators},a={render:j=>e.createElement(t,{count:5,...j}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.createElement(n,{gap:160},e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,size:"xs"}),e.createElement(r,null,"XS")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,size:"small"}),e.createElement(r,null,"Small")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5}),e.createElement(r,null,"Large")))},l={render:()=>e.createElement(n,{gap:160},e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5}),e.createElement(r,null,"Primary")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,color:"negative"}),e.createElement(r,null,"Negative or notification")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,color:"dark"}),e.createElement(r,null,"Dark")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,color:"light"}),e.createElement(r,null,"Light")))},i={render:()=>e.createElement(n,{gap:160},e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,kind:"line"}),e.createElement(r,null,"Primary")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,color:"negative",kind:"line"}),e.createElement(r,null,"Negative or notification")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,color:"dark",kind:"line"}),e.createElement(r,null,"Dark")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:5,color:"light",kind:"line"}),e.createElement(r,null,"Light")))},c={render:()=>e.createElement(n,{gap:160},e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:10,maxDigits:1}),e.createElement(r,null,"One digit limit")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:100,maxDigits:2}),e.createElement(r,null,"Two digits limit")),e.createElement(n,{direction:"column",gap:"large",style:{width:"100px"},align:"start"},e.createElement(t,{count:1e3}),e.createElement(r,null,"Three digits limit")))},s={render:()=>e.createElement("div",{style:{position:"relative"}},e.createElement(Q,{type:"icon",icon:x,backgroundColor:"royal"}),e.createElement("div",{style:{position:"absolute",top:"-5px",right:"-5px"}},e.createElement(t,{count:5,maxDigits:1,color:"negative"}))),parameters:{docs:{liveEdit:{scope:{Notifications:x}}}}},m={render:()=>e.createElement(n,{gap:28},e.createElement(n,{direction:"column",gap:"large",align:"start"},e.createElement(r,null,"UX Writing & microcopy Re..."),e.createElement(r,null,"Mobile Data- Iteration Plan..."),e.createElement(r,null,"Q Plans.")),e.createElement(n,{direction:"column",gap:"large",align:"start"},e.createElement(t,{count:195,color:"dark"}),e.createElement(t,{count:141,color:"dark"}),e.createElement(t,{count:99,color:"dark"})))},d={render:()=>e.createElement(n,{gap:12,direction:"column",align:"start"},e.createElement(u,{icon:E,iconSize:"36"}),e.createElement(p,null),e.createElement("div",{style:{position:"relative"}},e.createElement(u,{icon:g,iconSize:"36"}),e.createElement("div",{style:{position:"absolute",bottom:0,right:-3}},e.createElement(t,{count:5,size:"small"}))),e.createElement(p,null),e.createElement("div",{style:{position:"relative"}},e.createElement(u,{icon:g,iconSize:"36"}),e.createElement("div",{style:{position:"absolute",bottom:0,right:-3}},e.createElement(t,{count:5,color:"dark",size:"small"})))),parameters:{docs:{liveEdit:{scope:{AddUpdate:E,Update:g}}}}};var v,y,F;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: CounterProps) => <Counter count={5} {...args} />,
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var h,T,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var w,S,f;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var k,b,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(b=i.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var D,O,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(O=c.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var U,P,I;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(I=(P=s.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var L,_,A;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var M,R,X;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(R=d.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};const B=["Overview","Sizes","Colors","Outline","Limits","NotificationCounter","CounterOnInboxFilters","CountTheNumberOfUpdates"],re=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,CountTheNumberOfUpdates:d,CounterOnInboxFilters:m,Limits:c,NotificationCounter:s,Outline:i,Overview:a,Sizes:o,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{re as C,c as L,s as N,a as O,o as S,l as a,i as b,m as c,d};
