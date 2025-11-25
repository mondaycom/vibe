import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as P}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{r as g}from"./index-CTZeEbLr.js";import{r as M}from"./createComponentTemplate-B08h-OOW.js";import{L as n}from"./Label-C2WeSdrM.js";import{F as a}from"./Flex-Bimzf4jb.js";import{T as p}from"./Text-DVNPP_6L.js";import{B as b}from"./Box-BwRYjhPo.js";import{H as u}from"./Heading-B02tO7j0.js";import{B as D}from"./Button-zprqw9Vf.js";const w=P({component:n}),I={title:"Components/Label",component:n,argTypes:w.argTypes,decorators:w.decorators},m=c=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 180px)",marginInlineStart:"30px",marginTop:"10px",gap:"50px",width:"100%"},children:e.jsx(c,{})}),R=M(n),t={render:R.bind({}),name:"Overview",args:{id:"overview-label",text:"New"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},i={render:()=>e.jsxs(a,{style:{marginLeft:"30px",marginTop:"10px",gap:"184px"},children:[e.jsxs(a,{direction:"column",align:"start",gap:"large",children:[e.jsx(n,{id:"kinds-fill",text:"New"}),e.jsx(p,{children:"Fill"})]}),e.jsxs(a,{direction:"column",align:"start",gap:"large",children:[e.jsx(n,{id:"kinds-outline",text:"New",kind:"line"}),e.jsx(p,{children:"Outline"})]})]}),name:"Kinds"},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"sizes-medium",text:"New"}),e.jsx(n,{id:"sizes-small",text:"New",size:"small"})]}),decorators:[m],name:"Sizes"},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"colors-default-fill",text:"New"}),e.jsx(n,{id:"colors-negative-fill",text:"New",color:"negative"}),e.jsx(n,{id:"colors-positive-fill",text:"New",color:"positive"}),e.jsx(n,{id:"colors-dark-fill",text:"New",color:"dark"}),e.jsx(n,{id:"colors-default-line",text:"New",kind:"line"}),e.jsx(n,{id:"colors-negative-line",text:"New",color:"negative",kind:"line"}),e.jsx(n,{id:"colors-positive-line",text:"New",color:"positive",kind:"line"}),e.jsx(n,{id:"colors-dark-line",text:"New",color:"dark",kind:"line"})]}),decorators:[m],name:"Colors"},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"clickable-fill","aria-label":"Clickable new feature label",text:"New",onClick:()=>{}}),e.jsx(n,{id:"clickable-line","aria-label":"Clickable new feature label",text:"New",kind:"line",onClick:()=>{}})]}),decorators:[m],name:"Clickable"},o={render:()=>e.jsxs(a,{direction:"column",gap:"large",children:[e.jsxs(b,{style:{width:"300px"},children:[e.jsxs(a,{align:"center",gap:"small",children:[e.jsx(u,{id:"gantt-heading",type:"h3",children:"Gannt"}),e.jsx(n,{id:"gantt-label",text:"New",kind:"line"})]}),e.jsx(p,{element:"p",type:"text1",children:"Plan, track and present your projects visually using the Gannt chart"})]}),e.jsxs(b,{style:{width:"300px",marginTop:"8px"},children:[e.jsxs(a,{align:"center",gap:"small",children:[e.jsx(u,{id:"apps-heading",type:"h3",style:{display:"inline"},children:"Apps"}),e.jsx(n,{id:"apps-label",text:"New",kind:"line"})]}),e.jsx(p,{element:"p",type:"text1",style:{marginTop:"8px"},children:"Enhance your dashboard with widgets built on the monday apps framework"})]})]}),name:"Secondary label"},d={render:()=>{const[c,x]=g.useState(!1);return g.useEffect(()=>{setTimeout(()=>{x(!1)},500)},[c]),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"celebration-label",text:"New",kind:"line",celebrationAnimation:c}),e.jsx(D,{id:"celebration-button",ariaLabel:"Trigger celebration animation",size:"small",kind:"tertiary",onClick:()=>x(!0),children:"Click to celebrate"})]})},parameters:{chromatic:{pauseAnimationAtEnd:!0}}};var k,h,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: labelTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-label",
    text: "New"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,y,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex style={{
    marginLeft: "30px",
    marginTop: "10px",
    gap: "184px"
  }}>
      <Flex direction="column" align="start" gap="large">
        <Label id="kinds-fill" text="New" />
        <Text>Fill</Text>
      </Flex>
      <Flex direction="column" align="start" gap="large">
        <Label id="kinds-outline" text="New" kind="line" />
        <Text>Outline</Text>
      </Flex>
    </Flex>,
  name: "Kinds"
}`,...(N=(y=i.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var v,L,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <>
      <Label id="sizes-medium" text="New" />
      <Label id="sizes-small" text="New" size="small" />
    </>,
  decorators: [withGrid],
  name: "Sizes"
}`,...(T=(L=r.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var C,S,F;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <>
      <Label id="colors-default-fill" text="New" />
      <Label id="colors-negative-fill" text="New" color="negative" />
      <Label id="colors-positive-fill" text="New" color="positive" />
      <Label id="colors-dark-fill" text="New" color="dark" />
      <Label id="colors-default-line" text="New" kind="line" />
      <Label id="colors-negative-line" text="New" color="negative" kind="line" />
      <Label id="colors-positive-line" text="New" color="positive" kind="line" />
      <Label id="colors-dark-line" text="New" color="dark" kind="line" />
    </>,
  decorators: [withGrid],
  name: "Colors"
}`,...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var z,E,A;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <Label id="clickable-fill" aria-label="Clickable new feature label" text="New" onClick={() => {}} />
      <Label id="clickable-line" aria-label="Clickable new feature label" text="New" kind="line" onClick={() => {}} />
    </>,
  decorators: [withGrid],
  name: "Clickable"
}`,...(A=(E=s.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var B,O,G;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large">
      <Box style={{
      width: "300px"
    }}>
        <Flex align="center" gap="small">
          <Heading id="gantt-heading" type="h3">
            Gannt
          </Heading>
          <Label id="gantt-label" text="New" kind="line" />
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
          <Heading id="apps-heading" type="h3" style={{
          display: "inline"
        }}>
            Apps
          </Heading>
          <Label id="apps-label" text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1" style={{
        marginTop: "8px"
      }}>
          Enhance your dashboard with widgets built on the monday apps framework
        </Text>
      </Box>
    </Flex>,
  name: "Secondary label"
}`,...(G=(O=o.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var _,H,K;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }, [animate]);
    return <>
        <Label id="celebration-label" text="New" kind="line" celebrationAnimation={animate} />
        <Button id="celebration-button" ariaLabel="Trigger celebration animation" size="small" kind="tertiary" onClick={() => setAnimate(true)}>
          Click to celebrate
        </Button>
      </>;
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
}`,...(K=(H=d.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const q=["Overview","Kinds","Sizes","Colors","Clickable","SecondaryLabel","Celebration"],ne=Object.freeze(Object.defineProperty({__proto__:null,Celebration:d,Clickable:s,Colors:l,Kinds:i,Overview:t,SecondaryLabel:o,Sizes:r,__namedExportsOrder:q,default:I},Symbol.toStringTag,{value:"Module"}));export{l as C,i as K,ne as L,t as O,r as S,s as a,o as b,d as c};
