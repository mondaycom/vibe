import{R as e}from"./index-Hemj67b4.js";import{F as n}from"./Flex-DIvs4XZj.js";import{H as t}from"./Heading-ILPymVjj.js";import{t as b}from"./Tooltip.interactions-I-GSti-S.js";import{i as B}from"./interactions-utils-BDSgavBb.js";import{D as L}from"./Divider-CPEi52zL.js";import{S as N}from"./Search-CBvUGcBN.js";import{C as F}from"./Checkbox-C5HAAAFi.js";import{B as C}from"./Button-DEM-Hn8V.js";import{B as s}from"./Box-CI4IQ3Nw.js";import{r as k}from"./createComponentTemplate-Y0VTmW_y.js";import{z as P}from"./index-BA_MN9l1.js";import{c as D}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const m="ellipsis-title-example",d="overflow-title-examples-container";async function j(c){await b(c,async()=>await c.findByTestId(m))}const M=B({tests:[j]}),g=D({component:t}),R=k(t),A={title:"Text/Heading",component:t,argTypes:g.argTypes,decorators:g.decorators},i={render:R.bind({}),name:"Overview",args:{children:"Title"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.createElement(n,{gap:"large",direction:"column",justify:"start",align:"start"},e.createElement(n,{gap:"small",direction:"column",justify:"start",align:"start"},e.createElement(t,{type:"h1",weight:"bold"},"Bold H1 title"),e.createElement(t,{type:"h1",weight:"medium"},"Medium H1 title"),e.createElement(t,{type:"h1",weight:"normal"},"Normal H1 title"),e.createElement(t,{type:"h1",weight:"light"},"Light H1 title")),e.createElement(n,{gap:"small",direction:"column",justify:"start",align:"start"},e.createElement(t,{type:"h2",weight:"bold"},"Bold H2 title"),e.createElement(t,{type:"h2",weight:"medium"},"Medium H2 title"),e.createElement(t,{type:"h2",weight:"normal"},"Normal H2 title"),e.createElement(t,{type:"h2",weight:"light"},"Light H2 title")),e.createElement(n,{gap:"small",direction:"column",justify:"start",align:"start"},e.createElement(t,{type:"h3",weight:"bold"},"Bold H3 title"),e.createElement(t,{type:"h3",weight:"medium"},"Medium H3 title"),e.createElement(t,{type:"h3",weight:"normal"},"Normal H3 title"),e.createElement(t,{type:"h3",weight:"light"},"Light H3 title")))},r={render:()=>e.createElement(n,{direction:"column",align:"start",gap:"small"},e.createElement(t,{type:"h2",color:"primary"},"Primary title"),e.createElement(t,{type:"h2",color:"secondary"},"Secondary title"),e.createElement(s,{style:{backgroundColor:"var(--primary-color)"},padding:"small"},e.createElement(t,{element:"div",type:"h2",align:"center",color:"onPrimary"},"On primary title")),e.createElement(s,{backgroundColor:"invertedColorBackground",padding:"small"},e.createElement(t,{element:"div",type:"h2",align:"center",color:"onInverted"},"On inverted title")))},l={render:()=>e.createElement(n,{id:d,direction:"column",gap:"medium",align:"stretch",style:{width:"480px"}},e.createElement(t,{type:"h2"},"Heading without overflow"),e.createElement(t,{type:"h2","data-testid":m,tooltipProps:{containerSelector:`#${d}`}},"Heading with ellipsis and tooltip when hovering"),e.createElement("div",null,e.createElement(t,{type:"h2",maxLines:2},"Heading with two lines overflow and a tooltip. Heading with two lines overflow and a tooltip. Heading with two lines overflow and a tooltip."))),parameters:{docs:{liveEdit:{scope:{OVERFLOW_TITLE_CONTAINER_ID:d,ONE_LINE_ELLIPSIS_TEST_ID:m}}}},play:M},o={render:()=>e.createElement("div",{style:{width:"100%"}},e.createElement(t,{type:"h1",id:"my-work-id"},"My work"),e.createElement(L,null),e.createElement(n,{align:"center",gap:"small","aria-labelledby":"my-work-id",style:{marginTop:"var(--spacing-medium"}},e.createElement(s,{style:{width:"146px"}},e.createElement(N,{placeholder:"Search"})),e.createElement(F,{label:"Hide done items",checked:!0}),e.createElement(C,{leftIcon:P,kind:"tertiary"},"Customize"))),name:"Built-in page header (not editable)"};var p,h,y;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: textTemplate.bind({}),
  name: "Overview",
  args: {
    children: "Title"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var H,u,w;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Flex gap="large" direction="column" justify="start" align="start">
      <Flex gap="small" direction="column" justify="start" align="start">
        <Heading type="h1" weight="bold">
          Bold H1 title
        </Heading>
        <Heading type="h1" weight="medium">
          Medium H1 title
        </Heading>
        <Heading type="h1" weight="normal">
          Normal H1 title
        </Heading>
        <Heading type="h1" weight="light">
          Light H1 title
        </Heading>
      </Flex>
      <Flex gap="small" direction="column" justify="start" align="start">
        <Heading type="h2" weight="bold">
          Bold H2 title
        </Heading>
        <Heading type="h2" weight="medium">
          Medium H2 title
        </Heading>
        <Heading type="h2" weight="normal">
          Normal H2 title
        </Heading>
        <Heading type="h2" weight="light">
          Light H2 title
        </Heading>
      </Flex>
      <Flex gap="small" direction="column" justify="start" align="start">
        <Heading type="h3" weight="bold">
          Bold H3 title
        </Heading>
        <Heading type="h3" weight="medium">
          Medium H3 title
        </Heading>
        <Heading type="h3" weight="normal">
          Normal H3 title
        </Heading>
        <Heading type="h3" weight="light">
          Light H3 title
        </Heading>
      </Flex>
    </Flex>
}`,...(w=(u=a.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var E,v,f;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Flex direction="column" align="start" gap="small">
      <Heading type="h2" color="primary">
        Primary title
      </Heading>
      <Heading type="h2" color="secondary">
        Secondary title
      </Heading>
      <Box style={{
      backgroundColor: "var(--primary-color)"
    }} padding="small">
        <Heading element="div" type="h2" align="center" color="onPrimary">
          On primary title
        </Heading>
      </Box>
      <Box backgroundColor="invertedColorBackground" padding="small">
        <Heading element="div" type="h2" align="center" color="onInverted">
          On inverted title
        </Heading>
      </Box>
    </Flex>
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,T,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Flex id={OVERFLOW_TITLE_CONTAINER_ID} direction="column" gap="medium" align="stretch" style={{
    width: "480px"
  }}>
      <Heading type="h2">Heading without overflow</Heading>
      <Heading type="h2"
    /**for testing purposes**/ data-testid={ONE_LINE_ELLIPSIS_TEST_ID} tooltipProps={{
      containerSelector: \`#\${OVERFLOW_TITLE_CONTAINER_ID}\`
    }}>
        Heading with ellipsis and tooltip when hovering
      </Heading>
      <div>
        <Heading type="h2" maxLines={2}>
          Heading with two lines overflow and a tooltip. Heading with two lines overflow and a tooltip. Heading with two
          lines overflow and a tooltip.
        </Heading>
      </div>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          OVERFLOW_TITLE_CONTAINER_ID,
          ONE_LINE_ELLIPSIS_TEST_ID
        }
      }
    }
  },
  play: headingOverflowSuite
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var S,I,_;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%"
  }}>
      <Heading type="h1" id="my-work-id">
        My work
      </Heading>
      <Divider />
      <Flex align="center" gap="small" aria-labelledby="my-work-id" style={{
      marginTop: "var(--spacing-medium"
    }}>
        <Box style={{
        width: "146px"
      }}>
          <Search placeholder="Search" />
        </Box>
        <Checkbox label="Hide done items" checked />
        <Button leftIcon={Custom} kind="tertiary">
          Customize
        </Button>
      </Flex>
    </div>,
  name: "Built-in page header (not editable)"
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const W=["Overview","TypesAndWeights","Colors","Overflow","BuiltInPageHeaderNotEditable"],ne=Object.freeze(Object.defineProperty({__proto__:null,BuiltInPageHeaderNotEditable:o,Colors:r,Overflow:l,Overview:i,TypesAndWeights:a,__namedExportsOrder:W,default:A},Symbol.toStringTag,{value:"Module"}));export{o as B,r as C,ne as H,i as O,a as T,l as a};
