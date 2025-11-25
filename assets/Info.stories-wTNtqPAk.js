import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as k}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{I as t}from"./Info-B_gJijUo.js";import{F as i}from"./Flex-Bimzf4jb.js";import{B as j}from"./Box-BwRYjhPo.js";import{T as l}from"./Text-DVNPP_6L.js";const s=k({component:t,enumPropNamesArray:["position"],actionPropsArray:["onDialogShow","onDialogHide"]}),v={title:"Components/Info [New]",component:t,argTypes:{...s.argTypes},decorators:s.decorators},o={render:w=>e.jsx(t,{...w}),args:{id:"overview-info",body:"Message will appear here, to give more context related information. This is meant for detailed supplemental information, where tooltips do not suffice. This is not the place for critical information for task-completion but rather paragraph-like text serving as supplemental info.",link:{text:"Learn more about content",href:"#"},title:"Placement: Bottom start","aria-label":"Overview information"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsx(i,{justify:"center",align:"center",style:{minHeight:"400px",width:"100%"},children:e.jsxs(j,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:"var(--space-48)",alignItems:"center",justifyItems:"center"},children:[e.jsxs(i,{direction:"column",gap:"medium",align:"center",children:[e.jsx(l,{id:"bottom-direction",align:"center",type:"text1",weight:"medium",ellipsis:!1,children:"Bottom"}),e.jsx(t,{id:"bottom-direction-info-button","aria-labelledby":"bottom-direction",title:"Placement: Bottom",body:"This dialog's direction is from the bottom",link:{text:"Learn more about dialog direction",href:"#"},position:"bottom-start"})]}),e.jsxs(i,{direction:"column",gap:"medium",align:"center",children:[e.jsx(l,{id:"left-direction",align:"center",type:"text1",weight:"medium",ellipsis:!1,children:"Left"}),e.jsx(t,{id:"left-direction-info-button","aria-labelledby":"left-direction",title:"Placement: Left",body:"This dialog's direction is from the left",link:{text:"Learn more about dialog direction",href:"#"},position:"left-start"})]}),e.jsxs(i,{direction:"column",gap:"medium",align:"center",children:[e.jsx(l,{id:"right-direction",align:"center",type:"text1",weight:"medium",ellipsis:!1,children:"Right"}),e.jsx(t,{id:"right-direction-info-button","aria-labelledby":"right-direction",title:"Placement: Right",body:"This dialog's direction is from the right",link:{text:"Learn more about dialog direction",href:"#"},position:"right-start"})]}),e.jsxs(i,{direction:"column",gap:"medium",align:"center",children:[e.jsx(l,{id:"top-direction",align:"center",type:"text1",weight:"medium",ellipsis:!1,children:"Top"}),e.jsx(t,{id:"top-direction-info-button","aria-labelledby":"top-direction",title:"Placement: Top",body:"This dialog's direction is from the top",link:{text:"Learn more about dialog direction",href:"#"},position:"top-start"})]})]})})},n={render:()=>e.jsx(t,{id:"custom-link-info","aria-label":"Information with external link",title:"External link example",body:"This info dialog contains a link that opens in a new tab.",link:{text:"Visit external site",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer"}})},a={render:()=>e.jsx(t,{id:"disabled-info","aria-label":"Disabled information",title:"Disabled info",body:"This info dialog is disabled and cannot be opened.",disabled:!0})};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Info {...args} />,
  args: {
    id: "overview-info",
    body: "Message will appear here, to give more context related information. This is meant for detailed supplemental information, where tooltips do not suffice. This is not the place for critical information for task-completion but rather paragraph-like text serving as supplemental info.",
    link: {
      text: "Learn more about content",
      href: "#"
    },
    title: "Placement: Bottom start",
    "aria-label": "Overview information"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex justify="center" align="center" style={{
    minHeight: "400px",
    width: "100%"
  }}>
      <Box style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: "var(--space-48)",
      alignItems: "center",
      justifyItems: "center"
    }}>
        <Flex direction="column" gap="medium" align="center">
          <Text id="bottom-direction" align="center" type="text1" weight="medium" ellipsis={false}>
            Bottom
          </Text>
          <Info id="bottom-direction-info-button" aria-labelledby="bottom-direction" title="Placement: Bottom" body="This dialog's direction is from the bottom" link={{
          text: "Learn more about dialog direction",
          href: "#"
        }} position="bottom-start" />
        </Flex>
        <Flex direction="column" gap="medium" align="center">
          <Text id="left-direction" align="center" type="text1" weight="medium" ellipsis={false}>
            Left
          </Text>
          <Info id="left-direction-info-button" aria-labelledby="left-direction" title="Placement: Left" body="This dialog's direction is from the left" link={{
          text: "Learn more about dialog direction",
          href: "#"
        }} position="left-start" />
        </Flex>
        <Flex direction="column" gap="medium" align="center">
          <Text id="right-direction" align="center" type="text1" weight="medium" ellipsis={false}>
            Right
          </Text>
          <Info id="right-direction-info-button" aria-labelledby="right-direction" title="Placement: Right" body="This dialog's direction is from the right" link={{
          text: "Learn more about dialog direction",
          href: "#"
        }} position="right-start" />
        </Flex>
        <Flex direction="column" gap="medium" align="center">
          <Text id="top-direction" align="center" type="text1" weight="medium" ellipsis={false}>
            Top
          </Text>
          <Info id="top-direction-info-button" aria-labelledby="top-direction" title="Placement: Top" body="This dialog's direction is from the top" link={{
          text: "Learn more about dialog direction",
          href: "#"
        }} position="top-start" />
        </Flex>
      </Box>
    </Flex>
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,b,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Info id="custom-link-info" aria-label="Information with external link" title="External link example" body="This info dialog contains a link that opens in a new tab." link={{
    text: "Visit external site",
    href: "https://www.example.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }} />
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var u,y,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Info id="disabled-info" aria-label="Disabled information" title="Disabled info" body="This info dialog is disabled and cannot be opened." disabled />
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const I=["Overview","Directions","WithCustomLink","Disabled"],_=Object.freeze(Object.defineProperty({__proto__:null,Directions:r,Disabled:a,Overview:o,WithCustomLink:n,__namedExportsOrder:I,default:v},Symbol.toStringTag,{value:"Module"}));export{r as D,_ as I,o as O};
