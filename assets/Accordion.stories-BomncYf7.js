import{R as e}from"./index-Hemj67b4.js";import{a as n,A}from"./AccordionItem-CwloITnH.js";import{C as d}from"./Checkbox-eRCpXEeq.js";import{i as H,d as c,e as l}from"./interactions-utils-BDSgavBb.js";import{userEvent as E,within as O}from"./index-JSOB3pIc.js";import{r as _}from"./interactions-helper-Bq4hWQWq.js";import{F}from"./Flex-DIvs4XZj.js";const o=100;function N(t,i){var a;return(a=t.getByText(i))==null?void 0:a.closest("button")}function L(t){const i=t.getByRole("region"),a=O(i.parentElement).getByRole("button");return{elPanel:i,elHeading:a}}function y(t){const i=t.queryAllByRole("region"),a=i.map(r=>O(r.parentElement).getByRole("button"));return{elPanels:i,elHeadings:a}}async function v(t,i){const a=L(t),r=N(t,i);E.click(r),await c(o);const s=t.getByRole("region");await l(r.getAttribute("aria-expanded")).toBe("true"),await l(a.elHeading.getAttribute("aria-expanded")).toBe("false"),await l(r.getAttribute("aria-controls")).toBe(s.id)}async function p(t,i){const a=y(t);E.click(a.elHeadings[0]),await c(o);const r=y(t);await l(r.elPanels.length).toBe(i),await l(a.elHeadings[0].getAttribute("aria-expanded")).toBe("false")}async function I(t,i,a){const r=N(t,i);E.click(r),await c(o);const s=y(t);await l(s.elPanels.length).toBe(a),await l(s.elHeadings[0].getAttribute("aria-expanded")).toBe("true"),await l(s.elHeadings[0].getAttribute("aria-controls")).toBe(s.elPanels[0].id)}const j=async t=>{await c(o),await p(t,0)},W=async t=>{await c(o),await v(t,"Notifications"),await c(o),await v(t,"Setting")},q=async t=>{await c(o),await p(t,1),await c(o),await p(t,0)},z=async t=>{await c(o),await I(t,"Setting",1),await c(o),await I(t,"Integration",2)},D=H({tests:[W,j],afterEach:async()=>{await _()}}),G=H({tests:[q,z],afterEach:async()=>{await _()}}),Y=t=>e.createElement(A,{defaultIndex:[1],...t},e.createElement(n,{title:"Notifications"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Setting"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Info"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Profile"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Permissions"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Security"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Connectivity"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Integration"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Assets"},e.createElement("div",{style:{height:150}}))),J={title:"Components/Accordion",component:A,subcomponents:{AccordionItem:n},argTypes:{children:{control:!1},defaultIndex:{control:!1}},decorators:[t=>e.createElement("div",{style:{width:"300px"}},e.createElement(t,null))]},m={render:Y.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},g={render:()=>e.createElement(A,{allowMultiple:!0,defaultIndex:[1,3]},e.createElement(n,{title:"Notifications"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Setting"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Connectivity"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Integration"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Assets"},e.createElement("div",{style:{height:150}}))),name:"Multi active",play:G},u={render:()=>e.createElement(A,{defaultIndex:[1]},e.createElement(n,{title:"Notifications"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Setting"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Connectivity"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Integration"},e.createElement("div",{style:{height:150}})),e.createElement(n,{title:"Assets"},e.createElement("div",{style:{height:150}}))),name:"Single active",play:D},h={render:()=>e.createElement(A,{defaultIndex:[0]},e.createElement(n,{title:"In monday"},e.createElement(F,{direction:"column",gap:20,align:"start"},e.createElement(d,{label:"Likes my update",checked:!0}),e.createElement(d,{label:"Replies to my update"}),e.createElement(d,{label:"Replies or likes a conversation I'm a part of",checked:!0}),e.createElement(d,{label:"Subscribes me to a Board/Item/Team",checked:!0}),e.createElement(d,{label:"Writes an update on an items I'm subscribed to",checked:!0})))),name:"Preferences Accordion",decorators:[t=>e.createElement("div",{style:{width:"600px"}},e.createElement(t,null))]};var f,b,w;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: accordionTemplate.bind({}),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,x,k;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Accordion allowMultiple defaultIndex={[1, 3]}>
      <AccordionItem title="Notifications">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem title="Setting">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem title="Connectivity">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem title="Integration">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem title="Assets">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
    </Accordion>,
  name: "Multi active",
  play: accordionMultiActivePlaySuite
}`,...(k=(x=g.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,P,B;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Accordion defaultIndex={[1]}>
      <AccordionItem title="Notifications">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem title="Setting">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem title="Connectivity">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem title="Integration">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem title="Assets">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
    </Accordion>,
  name: "Single active",
  play: accordionSingleActivePlaySuite
}`,...(B=(P=u.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var M,T,R;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Accordion defaultIndex={[0]}>
      <AccordionItem title="In monday">
        <Flex direction="column" gap={20} align="start">
          <Checkbox label="Likes my update" checked />
          <Checkbox label="Replies to my update" />
          <Checkbox label="Replies or likes a conversation I'm a part of" checked />
          <Checkbox label="Subscribes me to a Board/Item/Team" checked />
          <Checkbox label="Writes an update on an items I'm subscribed to" checked />
        </Flex>
      </AccordionItem>
    </Accordion>,
  name: "Preferences Accordion",
  decorators: [(Story: React.ComponentType) => <div style={{
    width: "600px"
  }}>
        <Story />
      </div>]
}`,...(R=(T=h.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const K=["Overview","MultiActive","SingleActive","PreferencesAccordion"],te=Object.freeze(Object.defineProperty({__proto__:null,MultiActive:g,Overview:m,PreferencesAccordion:h,SingleActive:u,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{te as A,g as M,m as O,h as P,u as S};
