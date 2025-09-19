import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{F as n}from"./Flex-D6jv3OvD.js";import{H as t}from"./Heading-UCHqiZl3.js";import{t as I}from"./Tooltip.interactions-D4nkTuj9.js";import{i as B}from"./interactions-utils-Dfct-TkD.js";import{D as L}from"./Divider-DKlLqHdh.js";import{S as N}from"./Search-BYRr3CZh.js";import{C as F}from"./Checkbox-DLgR0mHF.js";import{B as k}from"./Button-lmknnYep.js";import{B as c}from"./Box-CjIlZ8OJ.js";import{r as C}from"./createComponentTemplate-B08h-OOW.js";import{z as P}from"./index-CkcRWdy2.js";import{c as D}from"./createStoryMetaSettingsDecorator-M9remOuO.js";const g="ellipsis-title-example",s="overflow-title-examples-container";async function M(d){await I(d,async()=>await d.findByTestId(g))}const m=B({tests:[M]});try{m.displayName="headingOverflowSuite",m.__docgenInfo={description:"",displayName:"headingOverflowSuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const p=D({component:t}),R=C(t),A={title:"Text/Heading",component:t,argTypes:p.argTypes,decorators:p.decorators},i={render:R.bind({}),name:"Overview",args:{children:"Title"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(n,{gap:"large",direction:"column",justify:"start",align:"start",children:[e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"h1",weight:"bold",children:"Bold H1 title"}),e.jsx(t,{type:"h1",weight:"medium",children:"Medium H1 title"}),e.jsx(t,{type:"h1",weight:"normal",children:"Normal H1 title"}),e.jsx(t,{type:"h1",weight:"light",children:"Light H1 title"})]}),e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"h2",weight:"bold",children:"Bold H2 title"}),e.jsx(t,{type:"h2",weight:"medium",children:"Medium H2 title"}),e.jsx(t,{type:"h2",weight:"normal",children:"Normal H2 title"}),e.jsx(t,{type:"h2",weight:"light",children:"Light H2 title"})]}),e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"h3",weight:"bold",children:"Bold H3 title"}),e.jsx(t,{type:"h3",weight:"medium",children:"Medium H3 title"}),e.jsx(t,{type:"h3",weight:"normal",children:"Normal H3 title"}),e.jsx(t,{type:"h3",weight:"light",children:"Light H3 title"})]})]})},a={render:()=>e.jsxs(n,{direction:"column",align:"start",gap:"small",children:[e.jsx(t,{type:"h2",color:"primary",children:"Primary title"}),e.jsx(t,{type:"h2",color:"secondary",children:"Secondary title"}),e.jsx(c,{style:{backgroundColor:"var(--primary-color)"},padding:"small",children:e.jsx(t,{element:"div",type:"h2",align:"center",color:"onPrimary",children:"On primary title"})}),e.jsx(c,{backgroundColor:"invertedColorBackground",padding:"small",children:e.jsx(t,{element:"div",type:"h2",align:"center",color:"onInverted",children:"On inverted title"})})]})},o={render:()=>e.jsxs(n,{id:s,direction:"column",gap:"medium",align:"stretch",style:{width:"480px"},children:[e.jsx(t,{type:"h2",children:"Heading without overflow"}),e.jsx(t,{type:"h2","data-testid":g,tooltipProps:{containerSelector:`#${s}`},children:"Heading with ellipsis and tooltip when hovering"}),e.jsx("div",{children:e.jsx(t,{type:"h2",maxLines:2,children:"Heading with two lines overflow and a tooltip. Heading with two lines overflow and a tooltip. Heading with two lines overflow and a tooltip."})})]}),parameters:{docs:{liveEdit:{scope:{OVERFLOW_TITLE_CONTAINER_ID:s,ONE_LINE_ELLIPSIS_TEST_ID:g}}}},play:m},l={render:()=>e.jsxs("div",{style:{width:"100%"},children:[e.jsx(t,{type:"h1",id:"my-work-id",children:"My work"}),e.jsx(L,{}),e.jsxs(n,{align:"center",gap:"small","aria-labelledby":"my-work-id",style:{marginTop:"var(--spacing-medium"},children:[e.jsx(c,{style:{width:"146px"},children:e.jsx(N,{placeholder:"Search"})}),e.jsx(F,{label:"Hide done items",checked:!0}),e.jsx(k,{leftIcon:P,kind:"tertiary",children:"Customize"})]})]}),name:"Built-in page header (not editable)"};var h,y,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(y=i.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var H,x,w;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var v,f,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var _,T,E;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,O,b;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const V=["Overview","TypesAndWeights","Colors","Overflow","BuiltInPageHeaderNotEditable"],ne=Object.freeze(Object.defineProperty({__proto__:null,BuiltInPageHeaderNotEditable:l,Colors:a,Overflow:o,Overview:i,TypesAndWeights:r,__namedExportsOrder:V,default:A},Symbol.toStringTag,{value:"Module"}));export{l as B,a as C,ne as H,i as O,r as T,o as a};
