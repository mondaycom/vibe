import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{T as r}from"./Toggle-CUvTLBPe.js";import{F as l}from"./Flex-2Q04fxOc.js";import{T as O}from"./Text-H9hbjM9B.js";import{r as D}from"./createComponentTemplate-Y0VTmW_y.js";import{t as i}from"./multiple-story-elements-wrapper-BoOYIFzD.js";import{c as M}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const d=M({component:r,actionPropsArray:["onChange"]}),z={title:"Components/Toggle",component:r,argTypes:d.argTypes,decorators:d.decorators},_=D(r),s={render:_.bind({}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(r,{isDefaultSelected:!1}),e.jsx(r,{})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},o={render:()=>e.jsxs(l,{gap:"large",children:[e.jsx(r,{size:"medium"}),e.jsx(r,{size:"small"})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},n={render:()=>e.jsxs(l,{direction:"column",gap:"large",children:[e.jsx(r,{isDefaultSelected:!1,disabled:!0}),e.jsx(r,{disabled:!0})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},t={render:()=>e.jsxs(l,{gap:"medium",children:[e.jsx(O,{children:"Board automations"}),e.jsx(r,{})]}),name:"Turn on/ off an automation"};var m,c,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: toggleTemplate.bind({}),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,S,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,j,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var v,y,F;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Text>Board automations</Text>
      <Toggle />
    </Flex>,
  name: "Turn on/ off an automation"
}`,...(F=(y=t.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};const h=["Overview","States","Size","Disabled","TurnOnOffAnAutomation"],k=Object.freeze(Object.defineProperty({__proto__:null,Disabled:n,Overview:s,Size:o,States:a,TurnOnOffAnAutomation:t,__namedExportsOrder:h,default:z},Symbol.toStringTag,{value:"Module"}));export{n as D,s as O,a as S,k as T,o as a,t as b};
