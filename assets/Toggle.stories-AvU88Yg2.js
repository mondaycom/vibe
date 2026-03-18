import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as z}from"./createStoryMetaSettingsDecorator-DJeVV-64.js";import{T as a}from"./Toggle-CvFG4jeo.js";import{r as F}from"./createComponentTemplate-B08h-OOW.js";import{t as i}from"./multiple-story-elements-wrapper-BwWT0vu7.js";import{F as n}from"./Flex-DZptE16X.js";import{T as M}from"./Text-DKH6hkNh.js";const d=z({component:a,actionPropsArray:["onChange"]}),O={title:"Components/Toggle",component:a,argTypes:d.argTypes,decorators:d.decorators},_=F(a),o={render:_.bind({}),args:{id:"overview-toggle","aria-label":"Toggle option"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(n,{direction:"column",gap:"medium",children:[e.jsx(a,{id:"states-off","aria-label":"Toggle off state",isDefaultSelected:!1}),e.jsx(a,{id:"states-on","aria-label":"Toggle on state"})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},s={render:()=>e.jsxs(n,{gap:"large",children:[e.jsx(a,{id:"size-medium","aria-label":"Medium toggle",size:"medium"}),e.jsx(a,{id:"size-small","aria-label":"Small toggle",size:"small"})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},t={render:()=>e.jsxs(n,{direction:"column",gap:"large",children:[e.jsx(a,{id:"disabled-off","aria-label":"Disabled toggle off",isDefaultSelected:!1,disabled:!0}),e.jsx(a,{id:"disabled-on","aria-label":"Disabled toggle on",disabled:!0})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},l={render:()=>e.jsxs(n,{gap:"medium",children:[e.jsx(M,{id:"automation-label",children:"Board automations"}),e.jsx(a,{id:"automation-toggle","aria-label":"Toggle board automations"})]}),name:"Turn on/ off an automation"};var m,g,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: toggleTemplate.bind({}),
  args: {
    id: "overview-toggle",
    "aria-label": "Toggle option"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var c,u,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium">
      <Toggle id="states-off" aria-label="Toggle off state" isDefaultSelected={false} />
      <Toggle id="states-on" aria-label="Toggle on state" />
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
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,T,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Flex gap="large">
      <Toggle id="size-medium" aria-label="Medium toggle" size="medium" />
      <Toggle id="size-small" aria-label="Small toggle" size="small" />
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
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,E,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large">
      <Toggle id="disabled-off" aria-label="Disabled toggle off" isDefaultSelected={false} disabled />
      <Toggle id="disabled-on" aria-label="Disabled toggle on" disabled />
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
}`,...(v=(E=t.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var j,y,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Text id="automation-label">Board automations</Text>
      <Toggle id="automation-toggle" aria-label="Toggle board automations" />
    </Flex>,
  name: "Turn on/ off an automation"
}`,...(D=(y=l.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const h=["Overview","States","Size","Disabled","TurnOnOffAnAutomation"],k=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Overview:o,Size:s,States:r,TurnOnOffAnAutomation:l,__namedExportsOrder:h,default:O},Symbol.toStringTag,{value:"Module"}));export{t as D,o as O,r as S,k as T,s as a,l as b};
