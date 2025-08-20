import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{T as a}from"./Toggle-wN_iyDhk.js";import{F as l}from"./Flex-C_iewCip.js";import{T as D}from"./Text-B1Efz5nS.js";import{r as z}from"./createComponentTemplate-Y0VTmW_y.js";import{t as i}from"./multiple-story-elements-wrapper-BoOYIFzD.js";import{c as F}from"./createStoryMetaSettingsDecorator-Dhc6yWra.js";const d=F({component:a,actionPropsArray:["onChange"]}),M={title:"Components/Toggle",component:a,argTypes:d.argTypes,decorators:d.decorators},O=z(a),o={render:O.bind({}),args:{id:"overview-toggle",ariaLabel:"Toggle option"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(a,{id:"states-off",ariaLabel:"Toggle off state",isDefaultSelected:!1}),e.jsx(a,{id:"states-on",ariaLabel:"Toggle on state"})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},s={render:()=>e.jsxs(l,{gap:"large",children:[e.jsx(a,{id:"size-medium",ariaLabel:"Medium toggle",size:"medium"}),e.jsx(a,{id:"size-small",ariaLabel:"Small toggle",size:"small"})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},t={render:()=>e.jsxs(l,{direction:"column",gap:"large",children:[e.jsx(a,{id:"disabled-off",ariaLabel:"Disabled toggle off",isDefaultSelected:!1,disabled:!0}),e.jsx(a,{id:"disabled-on",ariaLabel:"Disabled toggle on",disabled:!0})]}),parameters:{docs:{liveEdit:{scope:{MultipleStoryElementsWrapper:i}}}}},n={render:()=>e.jsxs(l,{gap:"medium",children:[e.jsx(D,{id:"automation-label",children:"Board automations"}),e.jsx(a,{id:"automation-toggle",ariaLabel:"Toggle board automations"})]}),name:"Turn on/ off an automation"};var m,g,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: toggleTemplate.bind({}),
  args: {
    id: "overview-toggle",
    ariaLabel: "Toggle option"
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
      <Toggle id="states-off" ariaLabel="Toggle off state" isDefaultSelected={false} />
      <Toggle id="states-on" ariaLabel="Toggle on state" />
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
      <Toggle id="size-medium" ariaLabel="Medium toggle" size="medium" />
      <Toggle id="size-small" ariaLabel="Small toggle" size="small" />
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
      <Toggle id="disabled-off" ariaLabel="Disabled toggle off" isDefaultSelected={false} disabled />
      <Toggle id="disabled-on" ariaLabel="Disabled toggle on" disabled />
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
}`,...(v=(E=t.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var j,L,y;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Text id="automation-label">Board automations</Text>
      <Toggle id="automation-toggle" ariaLabel="Toggle board automations" />
    </Flex>,
  name: "Turn on/ off an automation"
}`,...(y=(L=n.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const _=["Overview","States","Size","Disabled","TurnOnOffAnAutomation"],R=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Overview:o,Size:s,States:r,TurnOnOffAnAutomation:n,__namedExportsOrder:_,default:M},Symbol.toStringTag,{value:"Module"}));export{t as D,o as O,r as S,R as T,s as a,n as b};
