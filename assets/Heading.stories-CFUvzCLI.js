import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as _}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{i as b}from"./interactions-utils-CEzMMPBA.js";import{t as B}from"./Tooltip.interactions-6iwspJ-H.js";import{r as L}from"./createComponentTemplate-B08h-OOW.js";import{S as N}from"./Search-1tqW-CcQ.js";import{C as F}from"./Checkbox-M_d8YXaL.js";import{w as C}from"./index-BVKo2bYj.js";import{H as t}from"./Heading-B02tO7j0.js";import{F as n}from"./Flex-Bimzf4jb.js";import{B as s}from"./Box-BwRYjhPo.js";import{D as k}from"./Divider-5b08Ypxw.js";import{B as P}from"./Button-zprqw9Vf.js";const c="ellipsis-title-example",d="overflow-title-examples-container";async function D(g){await B(g,async()=>await g.findByTestId(c))}const M=b({tests:[D]}),m=_({component:t}),R=L(t),A={title:"Text/Heading",component:t,argTypes:m.argTypes,decorators:m.decorators},i={render:R.bind({}),name:"Overview",args:{children:"Title"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(n,{gap:"large",direction:"column",justify:"start",align:"start",children:[e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"h1",weight:"bold",children:"Bold H1 title"}),e.jsx(t,{type:"h1",weight:"medium",children:"Medium H1 title"}),e.jsx(t,{type:"h1",weight:"normal",children:"Normal H1 title"}),e.jsx(t,{type:"h1",weight:"light",children:"Light H1 title"})]}),e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"h2",weight:"bold",children:"Bold H2 title"}),e.jsx(t,{type:"h2",weight:"medium",children:"Medium H2 title"}),e.jsx(t,{type:"h2",weight:"normal",children:"Normal H2 title"}),e.jsx(t,{type:"h2",weight:"light",children:"Light H2 title"})]}),e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"h3",weight:"bold",children:"Bold H3 title"}),e.jsx(t,{type:"h3",weight:"medium",children:"Medium H3 title"}),e.jsx(t,{type:"h3",weight:"normal",children:"Normal H3 title"}),e.jsx(t,{type:"h3",weight:"light",children:"Light H3 title"})]})]})},a={render:()=>e.jsxs(n,{direction:"column",align:"start",gap:"small",children:[e.jsx(t,{type:"h2",color:"primary",children:"Primary title"}),e.jsx(t,{type:"h2",color:"secondary",children:"Secondary title"}),e.jsx(s,{style:{backgroundColor:"var(--primary-color)"},padding:"small",children:e.jsx(t,{element:"div",type:"h2",align:"center",color:"onPrimary",children:"On primary title"})}),e.jsx(s,{backgroundColor:"invertedColorBackground",padding:"small",children:e.jsx(t,{element:"div",type:"h2",align:"center",color:"onInverted",children:"On inverted title"})})]})},o={render:()=>e.jsxs(n,{id:d,direction:"column",gap:"medium",align:"stretch",style:{width:"480px"},children:[e.jsx(t,{type:"h2",children:"Heading without overflow"}),e.jsx(t,{type:"h2","data-testid":c,tooltipProps:{containerSelector:`#${d}`},children:"Heading with ellipsis and tooltip when hovering"}),e.jsx("div",{children:e.jsx(t,{type:"h2",maxLines:2,children:"Heading with two lines overflow and a tooltip. Heading with two lines overflow and a tooltip. Heading with two lines overflow and a tooltip."})})]}),parameters:{docs:{liveEdit:{scope:{OVERFLOW_TITLE_CONTAINER_ID:d,ONE_LINE_ELLIPSIS_TEST_ID:c}}}},play:M},l={render:()=>e.jsxs("div",{style:{width:"100%"},children:[e.jsx(t,{type:"h1",id:"my-work-id",children:"My work"}),e.jsx(k,{}),e.jsxs(n,{align:"center",gap:"small","aria-labelledby":"my-work-id",style:{marginTop:"var(--spacing-medium"},children:[e.jsx(s,{style:{width:"146px"},children:e.jsx(N,{placeholder:"Search"})}),e.jsx(F,{label:"Hide done items",checked:!0}),e.jsx(P,{leftIcon:C,kind:"tertiary",children:"Customize"})]})]}),name:"Built-in page header (not editable)"};var p,h,y;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var H,u,x;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var w,v,j;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var f,T,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var O,S,I;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const W=["Overview","TypesAndWeights","Colors","Overflow","BuiltInPageHeaderNotEditable"],ne=Object.freeze(Object.defineProperty({__proto__:null,BuiltInPageHeaderNotEditable:l,Colors:a,Overflow:o,Overview:i,TypesAndWeights:r,__namedExportsOrder:W,default:A},Symbol.toStringTag,{value:"Module"}));export{l as B,a as C,ne as H,i as O,r as T,o as a};
