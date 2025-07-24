import{R as e}from"./index-Hemj67b4.js";import{T as r}from"./Toggle-mKnxMjQI.js";import{F as l}from"./Flex-DIvs4XZj.js";import{T as D}from"./Text-B2fubIt7.js";import{r as M}from"./createComponentTemplate-Y0VTmW_y.js";import{t as m}from"./multiple-story-elements-wrapper-BoOYIFzD.js";import{c as z}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const c=z({component:r,actionPropsArray:["onChange"]}),_={title:"Components/Toggle",component:r,argTypes:c.argTypes,decorators:c.decorators},W=M(r),t={render:W.bind({}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.createElement(l,{direction:"column",gap:"medium"},e.createElement(r,{isDefaultSelected:!1}),e.createElement(r,null)),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:m}}}}},n={render:()=>e.createElement(l,{gap:"large"},e.createElement(r,{size:"medium"}),e.createElement(r,{size:"small"})),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:m}}}}},o={render:()=>e.createElement(l,{direction:"column",gap:"large"},e.createElement(r,{isDefaultSelected:!1,disabled:!0}),e.createElement(r,{disabled:!0})),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:m}}}}},s={render:()=>e.createElement(l,{gap:"medium"},e.createElement(D,null,"Board automations"),e.createElement(r,null)),name:"Turn on/ off an automation"};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: toggleTemplate.bind({}),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,E;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium">
      <Toggle isDefaultSelected={false} />
      <Toggle />
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          MultipleStoryElementsWrapper
        }
      }
    }
  }
}`,...(E=(g=a.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var f,S,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Flex gap="large">
      <Toggle size="medium" />
      <Toggle size="small" />
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          MultipleStoryElementsWrapper
        }
      }
    }
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var b,x,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large">
      <Toggle isDefaultSelected={false} disabled />
      <Toggle disabled />
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          MultipleStoryElementsWrapper
        }
      }
    }
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,F,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Text>Board automations</Text>
      <Toggle />
    </Flex>,
  name: "Turn on/ off an automation"
}`,...(O=(F=s.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const A=["Overview","States","Size","Disabled","TurnOnOffAnAutomation"],k=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Overview:t,Size:n,States:a,TurnOnOffAnAutomation:s,__namedExportsOrder:A,default:_},Symbol.toStringTag,{value:"Module"}));export{o as D,t as O,a as S,k as T,n as a,s as b};
