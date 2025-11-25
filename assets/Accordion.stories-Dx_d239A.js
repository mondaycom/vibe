import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{i as H,r as O,d as s,e as a}from"./interactions-utils-CEzMMPBA.js";import{userEvent as x,within as R}from"./index-i7od9_os.js";import{a as i,A as p}from"./AccordionItem-CYgLeC-Z.js";import{C as l}from"./Checkbox-M_d8YXaL.js";import{F as N}from"./Flex-Bimzf4jb.js";const c=100;function _(t,n){var o;return(o=t.getByText(n))==null?void 0:o.closest("button")}function F(t){const n=t.getByRole("region"),o=R(n.parentElement).getByRole("button");return{elPanel:n,elHeading:o}}function v(t){const n=t.queryAllByRole("region"),o=n.map(r=>R(r.parentElement).getByRole("button"));return{elPanels:n,elHeadings:o}}async function A(t,n){const o=F(t),r=_(t,n);x.click(r),await s(c);const d=t.getByRole("region");await a(r.getAttribute("aria-expanded")).toBe("true"),await a(o.elHeading.getAttribute("aria-expanded")).toBe("false"),await a(r.getAttribute("aria-controls")).toBe(d.id)}async function y(t,n){const o=v(t);x.click(o.elHeadings[0]),await s(c);const r=v(t);await a(r.elPanels.length).toBe(n),await a(o.elHeadings[0].getAttribute("aria-expanded")).toBe("false")}async function f(t,n,o){const r=_(t,n);x.click(r),await s(c);const d=v(t);await a(d.elPanels.length).toBe(o),await a(d.elHeadings[0].getAttribute("aria-expanded")).toBe("true"),await a(d.elHeadings[0].getAttribute("aria-controls")).toBe(d.elPanels[0].id)}const L=async t=>{await s(c),await y(t,0)},W=async t=>{await s(c),await A(t,"Notifications"),await s(c),await A(t,"Setting")},q=async t=>{await s(c),await y(t,1),await s(c),await y(t,0)},z=async t=>{await s(c),await f(t,"Setting",1),await s(c),await f(t,"Integration",2)},D=H({tests:[W,L],afterEach:async()=>{await O()}}),G=H({tests:[q,z],afterEach:async()=>{await O()}}),Y=t=>e.jsxs(p,{id:"overview-accordion",defaultIndex:[1],...t,children:[e.jsx(i,{id:"overview-notifications",title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-setting",title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-info",title:"Info",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-profile",title:"Profile",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-permissions",title:"Permissions",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-security",title:"Security",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-connectivity",title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-integration",title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-assets",title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),J={title:"Components/Accordion",component:p,subcomponents:{AccordionItem:i},argTypes:{children:{control:!1},defaultIndex:{control:!1}},decorators:[t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{})})]},m={render:Y.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},g={render:()=>e.jsxs(p,{id:"multi-active-accordion",allowMultiple:!0,defaultIndex:[1,3],children:[e.jsx(i,{id:"multi-notifications",title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"multi-setting",title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"multi-connectivity",title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"multi-integration",title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"multi-assets",title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),name:"Multi active",play:G},h={render:()=>e.jsxs(p,{id:"single-active-accordion",defaultIndex:[1],children:[e.jsx(i,{id:"single-notifications",title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"single-setting",title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"single-connectivity",title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"single-integration",title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"single-assets",title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),name:"Single active",play:D},u={render:()=>e.jsx(p,{id:"preferences-accordion",defaultIndex:[0],children:e.jsx(i,{id:"preferences-monday",title:"In monday",children:e.jsxs(N,{direction:"column",gap:20,align:"start",children:[e.jsx(l,{id:"pref-likes",label:"Likes my update",checked:!0}),e.jsx(l,{id:"pref-replies",label:"Replies to my update"}),e.jsx(l,{id:"pref-conversation",label:"Replies or likes a conversation I'm a part of",checked:!0}),e.jsx(l,{id:"pref-subscribes",label:"Subscribes me to a Board/Item/Team",checked:!0}),e.jsx(l,{id:"pref-updates",label:"Writes an update on an items I'm subscribed to",checked:!0})]})})}),name:"Preferences Accordion",decorators:[t=>e.jsx("div",{style:{width:"600px"},children:e.jsx(t,{})})]};var j,I,b;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(b=(I=m.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var w,S,k;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Accordion id="multi-active-accordion" allowMultiple defaultIndex={[1, 3]}>
      <AccordionItem id="multi-notifications" title="Notifications">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem id="multi-setting" title="Setting">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem id="multi-connectivity" title="Connectivity">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem id="multi-integration" title="Integration">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem id="multi-assets" title="Assets">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
    </Accordion>,
  name: "Multi active",
  play: accordionMultiActivePlaySuite
}`,...(k=(S=g.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,P,B;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Accordion id="single-active-accordion" defaultIndex={[1]}>
      <AccordionItem id="single-notifications" title="Notifications">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem id="single-setting" title="Setting">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem id="single-connectivity" title="Connectivity">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem id="single-integration" title="Integration">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
      <AccordionItem id="single-assets" title="Assets">
        <div style={{
        height: 150
      }} />
      </AccordionItem>
    </Accordion>,
  name: "Single active",
  play: accordionSingleActivePlaySuite
}`,...(B=(P=h.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var E,M,T;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Accordion id="preferences-accordion" defaultIndex={[0]}>
      <AccordionItem id="preferences-monday" title="In monday">
        <Flex direction="column" gap={20} align="start">
          <Checkbox id="pref-likes" label="Likes my update" checked />
          <Checkbox id="pref-replies" label="Replies to my update" />
          <Checkbox id="pref-conversation" label="Replies or likes a conversation I'm a part of" checked />
          <Checkbox id="pref-subscribes" label="Subscribes me to a Board/Item/Team" checked />
          <Checkbox id="pref-updates" label="Writes an update on an items I'm subscribed to" checked />
        </Flex>
      </AccordionItem>
    </Accordion>,
  name: "Preferences Accordion",
  decorators: [(Story: React.ComponentType) => <div style={{
    width: "600px"
  }}>
        <Story />
      </div>]
}`,...(T=(M=u.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const K=["Overview","MultiActive","SingleActive","PreferencesAccordion"],ee=Object.freeze(Object.defineProperty({__proto__:null,MultiActive:g,Overview:m,PreferencesAccordion:u,SingleActive:h,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{ee as A,g as M,m as O,u as P,h as S};
