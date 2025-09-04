import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{a as n}from"./Label-ClnZBh_H.js";import{B as M}from"./Button-bpAINS_f.js";import{N as m}from"./function-utils-6tFwS_v-.js";import{r as b}from"./index-Hemj67b4.js";import{F as a}from"./Flex-DyEHjGyy.js";import{B as u}from"./Box-D9cKzrT2.js";import{H as w}from"./Heading-hQYXBHoe.js";import{T as p}from"./Text-DCxsFWAH.js";import{r as D}from"./createComponentTemplate-Y0VTmW_y.js";import{c as I}from"./createStoryMetaSettingsDecorator-CZWEfz_r.js";const k=I({component:n}),R={title:"Components/Label",component:n,argTypes:k.argTypes,decorators:k.decorators},x=c=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 180px)",marginInlineStart:"30px",marginTop:"10px",gap:"50px",width:"100%"},children:e.jsx(c,{})}),q=D(n),t={render:q.bind({}),name:"Overview",args:{id:"overview-label",text:"New"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},i={render:()=>e.jsxs(a,{style:{marginLeft:"30px",marginTop:"10px",gap:"184px"},children:[e.jsxs(a,{direction:"column",align:"start",gap:"large",children:[e.jsx(n,{id:"kinds-fill",text:"New"}),e.jsx(p,{children:"Fill"})]}),e.jsxs(a,{direction:"column",align:"start",gap:"large",children:[e.jsx(n,{id:"kinds-outline",text:"New",kind:"line"}),e.jsx(p,{children:"Outline"})]})]}),name:"Kinds"},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"sizes-medium",text:"New"}),e.jsx(n,{id:"sizes-small",text:"New",size:"small"})]}),decorators:[x],name:"Sizes"},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"colors-default-fill",text:"New"}),e.jsx(n,{id:"colors-negative-fill",text:"New",color:"negative"}),e.jsx(n,{id:"colors-positive-fill",text:"New",color:"positive"}),e.jsx(n,{id:"colors-dark-fill",text:"New",color:"dark"}),e.jsx(n,{id:"colors-default-line",text:"New",kind:"line"}),e.jsx(n,{id:"colors-negative-line",text:"New",color:"negative",kind:"line"}),e.jsx(n,{id:"colors-positive-line",text:"New",color:"positive",kind:"line"}),e.jsx(n,{id:"colors-dark-line",text:"New",color:"dark",kind:"line"})]}),decorators:[x],name:"Colors"},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"clickable-fill","aria-label":"Clickable new feature label",text:"New",onClick:m}),e.jsx(n,{id:"clickable-line","aria-label":"Clickable new feature label",text:"New",kind:"line",onClick:m})]}),decorators:[x],name:"Clickable",parameters:{docs:{liveEdit:{scope:{NOOP:m}}}}},o={render:()=>e.jsxs(a,{direction:"column",gap:"large",children:[e.jsxs(u,{style:{width:"300px"},children:[e.jsxs(a,{align:"center",gap:"small",children:[e.jsx(w,{id:"gantt-heading",type:"h3",children:"Gannt"}),e.jsx(n,{id:"gantt-label",text:"New",kind:"line"})]}),e.jsx(p,{element:"p",type:"text1",children:"Plan, track and present your projects visually using the Gannt chart"})]}),e.jsxs(u,{style:{width:"300px",marginTop:"8px"},children:[e.jsxs(a,{align:"center",gap:"small",children:[e.jsx(w,{id:"apps-heading",type:"h3",style:{display:"inline"},children:"Apps"}),e.jsx(n,{id:"apps-label",text:"New",kind:"line"})]}),e.jsx(p,{element:"p",type:"text1",style:{marginTop:"8px"},children:"Enhance your dashboard with widgets built on the monday apps framework"})]})]}),name:"Secondary label"},d={render:()=>{const[c,g]=b.useState(!1);return b.useEffect(()=>{setTimeout(()=>{g(!1)},500)},[c]),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"celebration-label",text:"New",kind:"line",celebrationAnimation:c}),e.jsx(M,{id:"celebration-button",ariaLabel:"Trigger celebration animation",size:"small",kind:"tertiary",onClick:()=>g(!0),children:"Click to celebrate"})]})},parameters:{chromatic:{pauseAnimationAtEnd:!0}}};var h,f,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,N,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(N=i.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var L,T,C;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <>
      <Label id="sizes-medium" text="New" />
      <Label id="sizes-small" text="New" size="small" />
    </>,
  decorators: [withGrid],
  name: "Sizes"
}`,...(C=(T=r.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,F,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var E,z,A;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <>
      <Label id="clickable-fill" aria-label="Clickable new feature label" text="New" onClick={NOOP} />
      <Label id="clickable-line" aria-label="Clickable new feature label" text="New" kind="line" onClick={NOOP} />
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
}`,...(A=(z=s.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,G,P;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(G=o.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var _,H,K;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(H=d.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const J=["Overview","Kinds","Sizes","Colors","Clickable","SecondaryLabel","Celebration"],te=Object.freeze(Object.defineProperty({__proto__:null,Celebration:d,Clickable:s,Colors:l,Kinds:i,Overview:t,SecondaryLabel:o,Sizes:r,__namedExportsOrder:J,default:R},Symbol.toStringTag,{value:"Module"}));export{l as C,i as K,te as L,t as O,r as S,s as a,o as b,d as c};
