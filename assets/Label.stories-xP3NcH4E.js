import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{a as n}from"./Label-CykvnSIj.js";import{B as M}from"./Button-DgBL92G0.js";import{N as m}from"./function-utils-6EQ2u6TA.js";import{r as u}from"./index-Hemj67b4.js";import{F as t}from"./Flex-BwTwg4EO.js";import{B as w}from"./Box-tjS_L1BV.js";import{H as b}from"./Heading-9U-cKs9y.js";import{T as p}from"./Text-BIudgOyK.js";import{r as D}from"./createComponentTemplate-Y0VTmW_y.js";import{c as I}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const h=I({component:n}),R={title:"Components/Label",component:n,argTypes:h.argTypes,decorators:h.decorators},x=d=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 180px)",marginInlineStart:"30px",marginTop:"10px",gap:"50px",width:"100%"},children:e.jsx(d,{})}),q=D(n),r={render:q.bind({}),name:"Overview",args:{text:"New"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.jsxs(t,{style:{marginLeft:"30px",marginTop:"10px",gap:"184px"},children:[e.jsxs(t,{direction:"column",align:"start",gap:"large",children:[e.jsx(n,{text:"New"}),e.jsx(p,{children:"Fill"})]}),e.jsxs(t,{direction:"column",align:"start",gap:"large",children:[e.jsx(n,{text:"New",kind:"line"}),e.jsx(p,{children:"Outline"})]})]}),name:"Kinds"},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"New"}),e.jsx(n,{text:"New",size:"small"})]}),decorators:[x],name:"Sizes"},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"New"}),e.jsx(n,{text:"New",color:"negative"}),e.jsx(n,{text:"New",color:"positive"}),e.jsx(n,{text:"New",color:"dark"}),e.jsx(n,{text:"New",kind:"line"}),e.jsx(n,{text:"New",color:"negative",kind:"line"}),e.jsx(n,{text:"New",color:"positive",kind:"line"}),e.jsx(n,{text:"New",color:"dark",kind:"line"})]}),decorators:[x],name:"Colors"},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"New",onClick:m}),e.jsx(n,{text:"New",kind:"line",onClick:m})]}),decorators:[x],name:"Clickable",parameters:{docs:{liveEdit:{scope:{NOOP:m}}}}},l={render:()=>e.jsxs(t,{direction:"column",gap:"large",children:[e.jsxs(w,{style:{width:"300px"},children:[e.jsxs(t,{align:"center",gap:"small",children:[e.jsx(b,{type:"h3",children:"Gannt"}),e.jsx(n,{text:"New",kind:"line"})]}),e.jsx(p,{element:"p",type:"text1",children:"Plan, track and present your projects visually using the Gannt chart"})]}),e.jsxs(w,{style:{width:"300px",marginTop:"8px"},children:[e.jsxs(t,{align:"center",gap:"small",children:[e.jsx(b,{type:"h3",style:{display:"inline"},children:"Apps"}),e.jsx(n,{text:"New",kind:"line"})]}),e.jsx(p,{element:"p",type:"text1",style:{marginTop:"8px"},children:"Enhance your dashboard with widgets built on the monday apps framework"})]})]}),name:"Secondary label"},c={render:()=>{const[d,g]=u.useState(!1);return u.useEffect(()=>{setTimeout(()=>{g(!1)},500)},[d]),e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"New",kind:"line",celebrationAnimation:d}),e.jsx(M,{size:"small",kind:"tertiary",onClick:()=>g(!0),children:"Click to celebrate"})]})},parameters:{chromatic:{pauseAnimationAtEnd:!0}}};var j,y,N;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(y=r.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var k,f,L;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(L=(f=a.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var S,T,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <>
      <Label text="New" />
      <Label text="New" size="small" />
    </>,
  decorators: [withGrid],
  name: "Sizes"
}`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var C,F,O;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var E,A,B;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var z,G,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(P=(G=l.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var _,H,K;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(H=c.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const J=["Overview","Kinds","Sizes","Colors","Clickable","SecondaryLabel","Celebration"],re=Object.freeze(Object.defineProperty({__proto__:null,Celebration:c,Clickable:o,Colors:i,Kinds:a,Overview:r,SecondaryLabel:l,Sizes:s,__namedExportsOrder:J,default:R},Symbol.toStringTag,{value:"Module"}));export{i as C,a as K,re as L,r as O,s as S,o as a,l as b,c};
