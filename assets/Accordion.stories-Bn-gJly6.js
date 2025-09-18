import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{a as i,A as h}from"./AccordionItem-Dd1sKk_d.js";import{C as l}from"./Checkbox-DLgR0mHF.js";import{i as H,d as r,e as a}from"./interactions-utils-C-1LoDmD.js";import{userEvent as f,within as N}from"./index-i7od9_os.js";import{r as O}from"./interactions-helper-BLVzu_Hd.js";import{F}from"./Flex-D6jv3OvD.js";const s=100;function q(t,n){var o;return(o=t.getByText(n))==null?void 0:o.closest("button")}function V(t){const n=t.getByRole("region"),o=N(n.parentElement).getByRole("button");return{elPanel:n,elHeading:o}}function y(t){const n=t.queryAllByRole("region"),o=n.map(c=>N(c.parentElement).getByRole("button"));return{elPanels:n,elHeadings:o}}async function j(t,n){const o=V(t),c=q(t,n);f.click(c),await r(s);const d=t.getByRole("region");await a(c.getAttribute("aria-expanded")).toBe("true"),await a(o.elHeading.getAttribute("aria-expanded")).toBe("false"),await a(c.getAttribute("aria-controls")).toBe(d.id)}async function v(t,n){const o=y(t);f.click(o.elHeadings[0]),await r(s);const c=y(t);await a(c.elPanels.length).toBe(n),await a(o.elHeadings[0].getAttribute("aria-expanded")).toBe("false")}async function b(t,n,o){const c=q(t,n);f.click(c),await r(s);const d=y(t);await a(d.elPanels.length).toBe(o),await a(d.elHeadings[0].getAttribute("aria-expanded")).toBe("true"),await a(d.elHeadings[0].getAttribute("aria-controls")).toBe(d.elPanels[0].id)}const L=async t=>{await r(s),await v(t,0)},W=async t=>{await r(s),await j(t,"Notifications"),await r(s),await j(t,"Setting")},z=async t=>{await r(s),await v(t,1),await r(s),await v(t,0)},D=async t=>{await r(s),await b(t,"Setting",1),await r(s),await b(t,"Integration",2)},x=H({tests:[W,L],afterEach:async()=>{await O()}}),A=H({tests:[z,D],afterEach:async()=>{await O()}});try{x.displayName="accordionSingleActivePlaySuite",x.__docgenInfo={description:"",displayName:"accordionSingleActivePlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}try{A.displayName="accordionMultiActivePlaySuite",A.__docgenInfo={description:"",displayName:"accordionMultiActivePlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const G=t=>e.jsxs(h,{id:"overview-accordion",defaultIndex:[1],...t,children:[e.jsx(i,{id:"overview-notifications",title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-setting",title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-info",title:"Info",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-profile",title:"Profile",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-permissions",title:"Permissions",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-security",title:"Security",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-connectivity",title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-integration",title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"overview-assets",title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),Y={title:"Components/Accordion",component:h,subcomponents:{AccordionItem:i},argTypes:{children:{control:!1},defaultIndex:{control:!1}},decorators:[t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{})})]},m={render:G.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},u={render:()=>e.jsxs(h,{id:"multi-active-accordion",allowMultiple:!0,defaultIndex:[1,3],children:[e.jsx(i,{id:"multi-notifications",title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"multi-setting",title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"multi-connectivity",title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"multi-integration",title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"multi-assets",title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),name:"Multi active",play:A},g={render:()=>e.jsxs(h,{id:"single-active-accordion",defaultIndex:[1],children:[e.jsx(i,{id:"single-notifications",title:"Notifications",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"single-setting",title:"Setting",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"single-connectivity",title:"Connectivity",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"single-integration",title:"Integration",children:e.jsx("div",{style:{height:150}})}),e.jsx(i,{id:"single-assets",title:"Assets",children:e.jsx("div",{style:{height:150}})})]}),name:"Single active",play:x},p={render:()=>e.jsx(h,{id:"preferences-accordion",defaultIndex:[0],children:e.jsx(i,{id:"preferences-monday",title:"In monday",children:e.jsxs(F,{direction:"column",gap:20,align:"start",children:[e.jsx(l,{id:"pref-likes",label:"Likes my update",checked:!0}),e.jsx(l,{id:"pref-replies",label:"Replies to my update"}),e.jsx(l,{id:"pref-conversation",label:"Replies or likes a conversation I'm a part of",checked:!0}),e.jsx(l,{id:"pref-subscribes",label:"Subscribes me to a Board/Item/Team",checked:!0}),e.jsx(l,{id:"pref-updates",label:"Writes an update on an items I'm subscribed to",checked:!0})]})})}),name:"Preferences Accordion",decorators:[t=>e.jsx("div",{style:{width:"600px"},children:e.jsx(t,{})})]};var I,w,S;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,_,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var C,E,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(E=g.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var M,R,T;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const J=["Overview","MultiActive","SingleActive","PreferencesAccordion"],te=Object.freeze(Object.defineProperty({__proto__:null,MultiActive:u,Overview:m,PreferencesAccordion:p,SingleActive:g,__namedExportsOrder:J,default:Y},Symbol.toStringTag,{value:"Module"}));export{te as A,u as M,m as O,p as P,g as S};
