import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{a as i,A as x}from"./AccordionItem-Bgo4Q68Z.js";import{C as d}from"./Checkbox-BE4CNrkQ.js";import{i as H,d as c,e as a}from"./interactions-utils-B9UVq9O0.js";import{userEvent as p,within as O}from"./index-JSOB3pIc.js";import{r as R}from"./interactions-helper-Bq4hWQWq.js";import{F as N}from"./Flex-2Q04fxOc.js";const s=100;function _(t,n){var o;return(o=t.getByText(n))==null?void 0:o.closest("button")}function F(t){const n=t.getByRole("region"),o=O(n.parentElement).getByRole("button");return{elPanel:n,elHeading:o}}function A(t){const n=t.queryAllByRole("region"),o=n.map(r=>O(r.parentElement).getByRole("button"));return{elPanels:n,elHeadings:o}}async function v(t,n){const o=F(t),r=_(t,n);p.click(r),await c(s);const l=t.getByRole("region");await a(r.getAttribute("aria-expanded")).toBe("true"),await a(o.elHeading.getAttribute("aria-expanded")).toBe("false"),await a(r.getAttribute("aria-controls")).toBe(l.id)}async function y(t,n){const o=A(t);p.click(o.elHeadings[0]),await c(s);const r=A(t);await a(r.elPanels.length).toBe(n),await a(o.elHeadings[0].getAttribute("aria-expanded")).toBe("false")}async function j(t,n,o){const r=_(t,n);p.click(r),await c(s);const l=A(t);await a(l.elPanels.length).toBe(o),await a(l.elHeadings[0].getAttribute("aria-expanded")).toBe("true"),await a(l.elHeadings[0].getAttribute("aria-controls")).toBe(l.elPanels[0].id)}const L=async t=>{await c(s),await y(t,0)},W=async t=>{await c(s),await v(t,"Notifications"),await c(s),await v(t,"Setting")},q=async t=>{await c(s),await y(t,1),await c(s),await y(t,0)},z=async t=>{await c(s),await j(t,"Setting",1),await c(s),await j(t,"Integration",2)},D=H({tests:[W,L],afterEach:async()=>{await R()}}),G=H({tests:[q,z],afterEach:async()=>{await R()}}),Y=t=>e.jsxs(x,{defaultIndex:[1],...t,children:[e.jsx(i,{title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Info",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Profile",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Permissions",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Security",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),J={title:"Components/Accordion",component:x,subcomponents:{AccordionItem:i},argTypes:{children:{control:!1},defaultIndex:{control:!1}},decorators:[t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{})})]},h={render:Y.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>e.jsxs(x,{allowMultiple:!0,defaultIndex:[1,3],children:[e.jsx(i,{title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),name:"Multi active",play:G},g={render:()=>e.jsxs(x,{defaultIndex:[1],children:[e.jsx(i,{title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),name:"Single active",play:D},u={render:()=>e.jsx(x,{defaultIndex:[0],children:e.jsx(i,{title:"In monday",children:e.jsxs(N,{direction:"column",gap:20,align:"start",children:[e.jsx(d,{label:"Likes my update",checked:!0}),e.jsx(d,{label:"Replies to my update"}),e.jsx(d,{label:"Replies or likes a conversation I'm a part of",checked:!0}),e.jsx(d,{label:"Subscribes me to a Board/Item/Team",checked:!0}),e.jsx(d,{label:"Writes an update on an items I'm subscribed to",checked:!0})]})})}),name:"Preferences Accordion",decorators:[t=>e.jsx("div",{style:{width:"600px"},children:e.jsx(t,{})})]};var I,f,b;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(f=h.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,S,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(S=m.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,P,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(P=g.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var E,M,T;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(M=u.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const K=["Overview","MultiActive","SingleActive","PreferencesAccordion"],te=Object.freeze(Object.defineProperty({__proto__:null,MultiActive:m,Overview:h,PreferencesAccordion:u,SingleActive:g,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{te as A,m as M,h as O,u as P,g as S};
