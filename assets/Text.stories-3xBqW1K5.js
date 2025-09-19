import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{T as t}from"./Text-1SYDbpP1.js";import{L as H}from"./Link-D05CMsge.js";import{b as p,H as m}from"./Heading-UCHqiZl3.js";import{F as n}from"./Flex-D6jv3OvD.js";import{t as A}from"./Tooltip.interactions-D4nkTuj9.js";import{i as D}from"./interactions-utils-Dfct-TkD.js";import{B as o}from"./Box-CjIlZ8OJ.js";import{r as N}from"./createComponentTemplate-B08h-OOW.js";import{m as i}from"./storybook-link-DE4Ty7s_.js";import{c as P}from"./createStoryMetaSettingsDecorator-M9remOuO.js";const h="ellipsis-text-example",u="overflow-text-examples-container";async function M(x){await A(x,()=>x.findByTestId(h))}const g=D({tests:[M]});try{g.displayName="textOverflowSuite",g.__docgenInfo={description:"",displayName:"textOverflowSuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const y=P({component:t}),R={title:"Text/Text",component:t,argTypes:y.argTypes,decorators:y.decorators},V=N(t),r={render:V.bind({}),name:"Overview",args:{children:"Hi, I'm a text!"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.jsxs(n,{gap:"large",direction:"column",justify:"start",align:"start",children:[e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"text1",weight:"bold",children:"This is text1 bold"}),e.jsx(t,{type:"text1",weight:"medium",children:"This is text1 medium"}),e.jsx(t,{type:"text1",weight:"normal",children:"This is text1 normal"})]}),e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"text2",weight:"bold",children:"This is text2 bold"}),e.jsx(t,{type:"text2",weight:"medium",children:"This is text2 medium"}),e.jsx(t,{type:"text2",weight:"normal",children:"This is text2 normal"})]}),e.jsxs(n,{gap:"small",direction:"column",justify:"start",align:"start",children:[e.jsx(t,{type:"text3",weight:"medium",children:"This is text3 medium"}),e.jsx(t,{type:"text3",weight:"normal",children:"This is text3 normal"})]})]})},s={render:()=>e.jsxs(n,{direction:"column",align:"start",gap:"small",children:[e.jsx(t,{color:"primary",children:"Primary text"}),e.jsx(t,{color:"secondary",children:"Secondary text"}),e.jsx(o,{style:{backgroundColor:"var(--primary-color)",width:"150px"},padding:"small",children:e.jsx(t,{align:"center",color:"onPrimary",children:"On primary text"})}),e.jsx(o,{style:{width:"150px"},backgroundColor:"invertedColorBackground",padding:"small",children:e.jsx(t,{align:"center",color:"onInverted",children:"On inverted text"})}),e.jsx(o,{style:{width:"150px",backgroundColor:"black"},padding:"small",children:e.jsx(t,{align:"center",color:"fixedLight",children:"Fixed light"})}),e.jsx(o,{style:{width:"150px",backgroundColor:"whitesmoke"},padding:"small",children:e.jsx(t,{align:"center",color:"fixedDark",children:"Fixed dark"})})]})},l={render:()=>e.jsxs(n,{direction:"column",id:u,justify:"start",align:"initial",gap:"small",style:{width:"480px"},children:[e.jsx(m,{type:p.H3,children:"Text with 1 line"}),e.jsx(t,{"data-testid":h,tooltipProps:{containerSelector:`#${u}`},children:"This is an example of text with overflow and a Tooltip to help or provide information about specific components when a user hovers over them."}),e.jsx(m,{type:p.H3,children:"Text with 2 lines"}),e.jsx(t,{maxLines:2,children:"This is an example of text with ellipsis which displayed after two full lines of content this is an example of text with ellipsis which displayed after two full lines of content"}),e.jsx(m,{type:p.H3,children:"Text with array of elements"}),e.jsx(t,{maxLines:1,children:["This is an example of array of texts and ",e.jsx(H,{text:"Other elements",href:"https://www.monday.com",inheritFontSize:!0,inlineText:!0})," that are overflowing and create a tooltip with the correct information"]})]}),parameters:{docs:{liveEdit:{scope:{OVERFLOW_TEXT_CONTAINER_ID:u,ONE_LINE_ELLIPSIS_TEST_ID:h,HeadingType:p}}}},play:g},d={render:()=>e.jsxs(n,{direction:"column",children:[e.jsx(t,{element:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(t,{element:"p",ellipsis:!0,maxLines:3,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},c={render:()=>e.jsxs(n,{direction:"column",align:"start",gap:"small",children:[e.jsxs(t,{align:"center",children:["This is the story of a"," ",e.jsx(i,{page:"Foundations/Typography",size:i.sizes.SMALL,children:"link"})," ","inside running text."]}),e.jsx(o,{style:{backgroundColor:"var(--primary-color)",width:"420px"},padding:"small",children:e.jsxs(t,{align:"center",color:"onPrimary",children:["This is the story of a"," ",e.jsx(i,{page:"Foundations/Typography",size:i.sizes.SMALL,children:"link"})," ","inside running text on a primary color"]})}),e.jsx(o,{style:{width:"420px"},backgroundColor:"invertedColorBackground",padding:"small",children:e.jsxs(t,{align:"center",color:"onInverted",children:["This is the story of a"," ",e.jsx(i,{page:"Foundations/Typography",size:i.sizes.SMALL,children:"link"})," ","inside running text on an inverted color"]})}),e.jsx(o,{style:{backgroundColor:"black",width:"420px"},padding:"small",children:e.jsxs(t,{ellipsis:!1,style:{},align:"center",color:"fixedLight",children:["This is the story of a"," ",e.jsx(i,{page:"Foundations/Typography",size:i.sizes.SMALL,children:"link"})," ","inside running text with fixed light color"]})}),e.jsx(o,{style:{backgroundColor:"whitesmoke",width:"420px"},padding:"small",children:e.jsxs(t,{ellipsis:!1,align:"center",color:"fixedDark",children:["This is the story of a"," ",e.jsx(i,{page:"Foundations/Typography",size:i.sizes.SMALL,children:"link"})," ","inside running text with fixed dark color"]})})]}),parameters:{docs:{liveEdit:{scope:{StorybookLink:i}}}},name:"Links inside running text"};var T,f,w;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: textTemplate.bind({}),
  name: "Overview",
  args: {
    children: "Hi, I'm a text!"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,L,b;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex gap="large" direction="column" justify="start" align="start">
      <Flex gap="small" direction="column" justify="start" align="start">
        <Text type="text1" weight="bold">
          This is text1 bold
        </Text>
        <Text type="text1" weight="medium">
          This is text1 medium
        </Text>
        <Text type="text1" weight="normal">
          This is text1 normal
        </Text>
      </Flex>

      <Flex gap="small" direction="column" justify="start" align="start">
        <Text type="text2" weight="bold">
          This is text2 bold
        </Text>
        <Text type="text2" weight="medium">
          This is text2 medium
        </Text>
        <Text type="text2" weight="normal">
          This is text2 normal
        </Text>
      </Flex>
      <Flex gap="small" direction="column" justify="start" align="start">
        <Text type="text3" weight="medium">
          This is text3 medium
        </Text>
        <Text type="text3" weight="normal">
          This is text3 normal
        </Text>
      </Flex>
    </Flex>
}`,...(b=(L=a.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var v,j,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex direction="column" align="start" gap="small">
      <Text color="primary">Primary text</Text>
      <Text color="secondary">Secondary text</Text>
      <Box style={{
      backgroundColor: "var(--primary-color)",
      width: "150px"
    }} padding="small">
        <Text align="center" color="onPrimary">
          On primary text
        </Text>
      </Box>
      <Box style={{
      width: "150px"
    }} backgroundColor="invertedColorBackground" padding="small">
        <Text align="center" color="onInverted">
          On inverted text
        </Text>
      </Box>
      <Box style={{
      width: "150px",
      backgroundColor: "black"
    }} padding="small">
        <Text align="center" color="fixedLight">
          Fixed light
        </Text>
      </Box>
      <Box style={{
      width: "150px",
      backgroundColor: "whitesmoke"
    }} padding="small">
        <Text align="center" color="fixedDark">
          Fixed dark
        </Text>
      </Box>
    </Flex>
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var _,E,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex direction="column" id={OVERFLOW_TEXT_CONTAINER_ID} justify="start" align="initial" gap="small" style={{
    width: "480px"
  }}>
      <Heading type={HeadingType.H3}>Text with 1 line</Heading>
      <Text data-testid={ONE_LINE_ELLIPSIS_TEST_ID}
    /**for testing purposes**/ tooltipProps={{
      containerSelector: \`#\${OVERFLOW_TEXT_CONTAINER_ID}\`
    }}>
        This is an example of text with overflow and a Tooltip to help or provide information about specific components
        when a user hovers over them.
      </Text>
      <Heading type={HeadingType.H3}>Text with 2 lines</Heading>
      <Text maxLines={2}>
        This is an example of text with ellipsis which displayed after two full lines of content this is an example of
        text with ellipsis which displayed after two full lines of content
      </Text>
      <Heading type={HeadingType.H3}>Text with array of elements</Heading>
      <Text maxLines={1}>
        {["This is an example of array of texts and ", <Link text="Other elements" href="https://www.monday.com" inheritFontSize inlineText />, " that are overflowing and create a tooltip with the correct information"]}
      </Text>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          OVERFLOW_TEXT_CONTAINER_ID,
          ONE_LINE_ELLIPSIS_TEST_ID,
          HeadingType
        }
      }
    }
  },
  play: textOverflowSuite
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var O,I,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Flex direction="column">
      <Text element="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
      <Text element="p" ellipsis maxLines={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </Flex>
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var z,q,B;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex direction="column" align="start" gap="small">
      <Text align="center">
        This is the story of a{" "}
        <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
          link
        </StorybookLink>{" "}
        inside running text.
      </Text>
      <Box style={{
      backgroundColor: "var(--primary-color)",
      width: "420px"
    }} padding="small">
        <Text align="center" color="onPrimary">
          This is the story of a{" "}
          <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
            link
          </StorybookLink>{" "}
          inside running text on a primary color
        </Text>
      </Box>
      <Box style={{
      width: "420px"
    }} backgroundColor="invertedColorBackground" padding="small">
        <Text align="center" color="onInverted">
          This is the story of a{" "}
          <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
            link
          </StorybookLink>{" "}
          inside running text on an inverted color
        </Text>
      </Box>
      <Box style={{
      backgroundColor: "black",
      width: "420px"
    }} padding="small">
        <Text ellipsis={false} style={{}} align="center" color="fixedLight">
          This is the story of a{" "}
          <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
            link
          </StorybookLink>{" "}
          inside running text with fixed light color
        </Text>
      </Box>
      <Box style={{
      backgroundColor: "whitesmoke",
      width: "420px"
    }} padding="small">
        <Text ellipsis={false} align="center" color="fixedDark">
          This is the story of a{" "}
          <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
            link
          </StorybookLink>{" "}
          inside running text with fixed dark color
        </Text>
      </Box>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          StorybookLink
        }
      }
    }
  },
  name: "Links inside running text"
}`,...(B=(q=c.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const W=["Overview","SizesAndWeights","Colors","Overflow","Paragraph","LinksInsideRunningText"],ne=Object.freeze(Object.defineProperty({__proto__:null,Colors:s,LinksInsideRunningText:c,Overflow:l,Overview:r,Paragraph:d,SizesAndWeights:a,__namedExportsOrder:W,default:R},Symbol.toStringTag,{value:"Module"}));export{s as C,c as L,r as O,d as P,a as S,ne as T,l as a};
