import{R as e}from"./index-Hemj67b4.js";import{T as t}from"./Text-B2fubIt7.js";import{L as q}from"./Link-s0y4jlGK.js";import{b as m,H as p}from"./Heading-ILPymVjj.js";import{F as i}from"./Flex-DIvs4XZj.js";import{t as A}from"./Tooltip.interactions-I-GSti-S.js";import{i as D}from"./interactions-utils-BDSgavBb.js";import{B as o}from"./Box-CI4IQ3Nw.js";import{r as P}from"./createComponentTemplate-Y0VTmW_y.js";import{m as n}from"./storybook-link-CyTpmT3K.js";import{c as N}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const u="ellipsis-text-example",x="overflow-text-examples-container";async function j(g){await A(g,()=>g.findByTestId(u))}const M=D({tests:[j]}),h=N({component:t}),R={title:"Text/Text",component:t,argTypes:h.argTypes,decorators:h.decorators},W=P(t),r={render:W.bind({}),name:"Overview",args:{children:"Hi, I'm a text!"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.createElement(i,{gap:"large",direction:"column",justify:"start",align:"start"},e.createElement(i,{gap:"small",direction:"column",justify:"start",align:"start"},e.createElement(t,{type:"text1",weight:"bold"},"This is text1 bold"),e.createElement(t,{type:"text1",weight:"medium"},"This is text1 medium"),e.createElement(t,{type:"text1",weight:"normal"},"This is text1 normal")),e.createElement(i,{gap:"small",direction:"column",justify:"start",align:"start"},e.createElement(t,{type:"text2",weight:"bold"},"This is text2 bold"),e.createElement(t,{type:"text2",weight:"medium"},"This is text2 medium"),e.createElement(t,{type:"text2",weight:"normal"},"This is text2 normal")),e.createElement(i,{gap:"small",direction:"column",justify:"start",align:"start"},e.createElement(t,{type:"text3",weight:"medium"},"This is text3 medium"),e.createElement(t,{type:"text3",weight:"normal"},"This is text3 normal")))},s={render:()=>e.createElement(i,{direction:"column",align:"start",gap:"small"},e.createElement(t,{color:"primary"},"Primary text"),e.createElement(t,{color:"secondary"},"Secondary text"),e.createElement(o,{style:{backgroundColor:"var(--primary-color)",width:"150px"},padding:"small"},e.createElement(t,{align:"center",color:"onPrimary"},"On primary text")),e.createElement(o,{style:{width:"150px"},backgroundColor:"invertedColorBackground",padding:"small"},e.createElement(t,{align:"center",color:"onInverted"},"On inverted text")),e.createElement(o,{style:{width:"150px",backgroundColor:"black"},padding:"small"},e.createElement(t,{align:"center",color:"fixedLight"},"Fixed light")),e.createElement(o,{style:{width:"150px",backgroundColor:"whitesmoke"},padding:"small"},e.createElement(t,{align:"center",color:"fixedDark"},"Fixed dark")))},l={render:()=>e.createElement(i,{direction:"column",id:x,justify:"start",align:"initial",gap:"small",style:{width:"480px"}},e.createElement(p,{type:m.H3},"Text with 1 line"),e.createElement(t,{"data-testid":u,tooltipProps:{containerSelector:`#${x}`}},"This is an example of text with overflow and a Tooltip to help or provide information about specific components when a user hovers over them."),e.createElement(p,{type:m.H3},"Text with 2 lines"),e.createElement(t,{maxLines:2},"This is an example of text with ellipsis which displayed after two full lines of content this is an example of text with ellipsis which displayed after two full lines of content"),e.createElement(p,{type:m.H3},"Text with array of elements"),e.createElement(t,{maxLines:1},["This is an example of array of texts and ",e.createElement(q,{text:"Other elements",href:"https://www.monday.com",inheritFontSize:!0,inlineText:!0})," that are overflowing and create a tooltip with the correct information"])),parameters:{docs:{liveEdit:{scope:{OVERFLOW_TEXT_CONTAINER_ID:x,ONE_LINE_ELLIPSIS_TEST_ID:u,HeadingType:m}}}},play:M},d={render:()=>e.createElement(i,{direction:"column"},e.createElement(t,{element:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.createElement(t,{element:"p",ellipsis:!0,maxLines:3},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},c={render:()=>e.createElement(i,{direction:"column",align:"start",gap:"small"},e.createElement(t,{align:"center"},"This is the story of a"," ",e.createElement(n,{page:"Foundations/Typography",size:n.sizes.SMALL},"link")," ","inside running text."),e.createElement(o,{style:{backgroundColor:"var(--primary-color)",width:"420px"},padding:"small"},e.createElement(t,{align:"center",color:"onPrimary"},"This is the story of a"," ",e.createElement(n,{page:"Foundations/Typography",size:n.sizes.SMALL},"link")," ","inside running text on a primary color")),e.createElement(o,{style:{width:"420px"},backgroundColor:"invertedColorBackground",padding:"small"},e.createElement(t,{align:"center",color:"onInverted"},"This is the story of a"," ",e.createElement(n,{page:"Foundations/Typography",size:n.sizes.SMALL},"link")," ","inside running text on an inverted color")),e.createElement(o,{style:{backgroundColor:"black",width:"420px"},padding:"small"},e.createElement(t,{ellipsis:!1,style:{},align:"center",color:"fixedLight"},"This is the story of a"," ",e.createElement(n,{page:"Foundations/Typography",size:n.sizes.SMALL},"link")," ","inside running text with fixed light color")),e.createElement(o,{style:{backgroundColor:"whitesmoke",width:"420px"},padding:"small"},e.createElement(t,{ellipsis:!1,align:"center",color:"fixedDark"},"This is the story of a"," ",e.createElement(n,{page:"Foundations/Typography",size:n.sizes.SMALL},"link")," ","inside running text with fixed dark color"))),parameters:{docs:{liveEdit:{scope:{StorybookLink:n}}}},name:"Links inside running text"};var y,T,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(T=r.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var k,w,E;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var L,b,S;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,F,O;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var _,I,C;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var z,B,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(B=c.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const U=["Overview","SizesAndWeights","Colors","Overflow","Paragraph","LinksInsideRunningText"],ie=Object.freeze(Object.defineProperty({__proto__:null,Colors:s,LinksInsideRunningText:c,Overflow:l,Overview:r,Paragraph:d,SizesAndWeights:a,__namedExportsOrder:U,default:R},Symbol.toStringTag,{value:"Module"}));export{s as C,c as L,r as O,d as P,a as S,ie as T,l as a};
