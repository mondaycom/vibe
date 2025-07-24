import{R as e,r as u}from"./index-Hemj67b4.js";import{a as t}from"./Label-CoAw5UaU.js";import{B as M}from"./Button-DEM-Hn8V.js";import{N as d}from"./function-utils-6EQ2u6TA.js";import{F as n}from"./Flex-DIvs4XZj.js";import{B as w}from"./Box-CI4IQ3Nw.js";import{H as E}from"./Heading-NvFrzz5O.js";import{T as p}from"./Text-C0CU0_Vh.js";import{r as R}from"./createComponentTemplate-Y0VTmW_y.js";import{c as D}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const b=D({component:t}),I={title:"Components/Label",component:t,argTypes:b.argTypes,decorators:b.decorators},x=m=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 180px)",marginInlineStart:"30px",marginTop:"10px",gap:"50px",width:"100%"}},e.createElement(m,null)),q=R(t),a={render:q.bind({}),name:"Overview",args:{text:"New"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.createElement(n,{style:{marginLeft:"30px",marginTop:"10px",gap:"184px"}},e.createElement(n,{direction:"column",align:"start",gap:"large"},e.createElement(t,{text:"New"}),e.createElement(p,null,"Fill")),e.createElement(n,{direction:"column",align:"start",gap:"large"},e.createElement(t,{text:"New",kind:"line"}),e.createElement(p,null,"Outline"))),name:"Kinds"},l={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{text:"New"}),e.createElement(t,{text:"New",size:"small"})),decorators:[x],name:"Sizes"},o={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{text:"New"}),e.createElement(t,{text:"New",color:"negative"}),e.createElement(t,{text:"New",color:"positive"}),e.createElement(t,{text:"New",color:"dark"}),e.createElement(t,{text:"New",kind:"line"}),e.createElement(t,{text:"New",color:"negative",kind:"line"}),e.createElement(t,{text:"New",color:"positive",kind:"line"}),e.createElement(t,{text:"New",color:"dark",kind:"line"})),decorators:[x],name:"Colors"},i={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{text:"New",onClick:d}),e.createElement(t,{text:"New",kind:"line",onClick:d})),decorators:[x],name:"Clickable",parameters:{docs:{liveEdit:{scope:{NOOP:d}}}}},s={render:()=>e.createElement(n,{direction:"column",gap:"large"},e.createElement(w,{style:{width:"300px"}},e.createElement(n,{align:"center",gap:"small"},e.createElement(E,{type:"h3"},"Gannt"),e.createElement(t,{text:"New",kind:"line"})),e.createElement(p,{element:"p",type:"text1"},"Plan, track and present your projects visually using the Gannt chart")),e.createElement(w,{style:{width:"300px",marginTop:"8px"}},e.createElement(n,{align:"center",gap:"small"},e.createElement(E,{type:"h3",style:{display:"inline"}},"Apps"),e.createElement(t,{text:"New",kind:"line"})),e.createElement(p,{element:"p",type:"text1",style:{marginTop:"8px"}},"Enhance your dashboard with widgets built on the monday apps framework"))),name:"Secondary label"},c={render:()=>{const[m,g]=u.useState(!1);return u.useEffect(()=>{setTimeout(()=>{g(!1)},500)},[m]),e.createElement(e.Fragment,null,e.createElement(t,{text:"New",kind:"line",celebrationAnimation:m}),e.createElement(M,{size:"small",kind:"tertiary",onClick:()=>g(!0)},"Click to celebrate"))},parameters:{chromatic:{pauseAnimationAtEnd:!0}}};var y,N,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: labelTemplate.bind({}),
  name: "Overview",
  args: {
    text: "New"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(k=(N=a.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var f,h,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Flex style={{
    marginLeft: "30px",
    marginTop: "10px",
    gap: "184px"
  }}>
      <Flex direction="column" align="start" gap="large">
        <Label text="New" />
        <Text>Fill</Text>
      </Flex>
      <Flex direction="column" align="start" gap="large">
        <Label text="New" kind="line" />
        <Text>Outline</Text>
      </Flex>
    </Flex>,
  name: "Kinds"
}`,...(L=(h=r.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var S,T,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <>
      <Label text="New" />
      <Label text="New" size="small" />
    </>,
  decorators: [withGrid],
  name: "Sizes"
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var C,F,O;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <>
      <Label text="New" />
      <Label text="New" color="negative" />
      <Label text="New" color="positive" />
      <Label text="New" color="dark" />
      <Label text="New" kind="line" />
      <Label text="New" color="negative" kind="line" />
      <Label text="New" color="positive" kind="line" />
      <Label text="New" color="dark" kind="line" />
    </>,
  decorators: [withGrid],
  name: "Colors"
}`,...(O=(F=o.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var A,B,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <>
      <Label text="New" onClick={NOOP} />
      <Label text="New" kind="line" onClick={NOOP} />
    </>,
  decorators: [withGrid],
  name: "Clickable",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          NOOP
        }
      }
    }
  }
}`,...(z=(B=i.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var G,P,_;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large">
      <Box style={{
      width: "300px"
    }}>
        <Flex align="center" gap="small">
          <Heading type="h3">Gannt</Heading>
          <Label text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1">
          Plan, track and present your projects visually using the Gannt chart
        </Text>
      </Box>
      <Box style={{
      width: "300px",
      marginTop: "8px"
    }}>
        <Flex align="center" gap="small">
          <Heading type="h3" style={{
          display: "inline"
        }}>
            Apps
          </Heading>
          <Label text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1" style={{
        marginTop: "8px"
      }}>
          Enhance your dashboard with widgets built on the monday apps framework
        </Text>
      </Box>
    </Flex>,
  name: "Secondary label"
}`,...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var H,K,j;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }, [animate]);
    return <>
        <Label text="New" kind="line" celebrationAnimation={animate} />
        <Button size="small" kind="tertiary" onClick={() => setAnimate(true)}>
          Click to celebrate
        </Button>
      </>;
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
}`,...(j=(K=c.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};const J=["Overview","Kinds","Sizes","Colors","Clickable","SecondaryLabel","Celebration"],ne=Object.freeze(Object.defineProperty({__proto__:null,Celebration:c,Clickable:i,Colors:o,Kinds:r,Overview:a,SecondaryLabel:s,Sizes:l,__namedExportsOrder:J,default:I},Symbol.toStringTag,{value:"Module"}));export{o as C,r as K,ne as L,a as O,l as S,i as a,s as b,c};
