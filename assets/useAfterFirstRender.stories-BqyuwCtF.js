import{R as e,r as u}from"./index-Hemj67b4.js";import{u as m}from"./index-BhJ9w1Ot.js";import{B as p}from"./Button-t0_MS1N7.js";import{F as f}from"./Flex-pz2uwxlA.js";import{H as n}from"./Heading-C4fcuytm.js";const R={title:"Hooks/useAfterFirstRender"},r={render:()=>{const t=m(),[i,d]=u.useState(0),c=()=>{d(l=>l+1)};return e.createElement(e.Fragment,null,e.createElement(n,{type:"h3",weight:"normal"},t.current?"It is after the first render!":"This is the first render!"),e.createElement("p",null,"Rerender count: ",i),e.createElement(p,{onClick:c},"Rerender component"))},decorators:[t=>e.createElement(f,{direction:"column",align:"start"},e.createElement(t,null))],parameters:{docs:{liveEdit:{scope:{Heading:n}}}}};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const isAfterFirstRender = useAfterFirstRender();
    const [renderCount, setRenderCount] = useState(0);
    const handleRerender = () => {
      setRenderCount(prevCount => prevCount + 1);
    };
    return <>
        <Heading type="h3" weight="normal">
          {isAfterFirstRender.current ? "It is after the first render!" : "This is the first render!"}
        </Heading>
        <p>Rerender count: {renderCount}</p>
        <Button onClick={handleRerender}>Rerender component</Button>
      </>;
  },
  decorators: [Story => <Flex direction="column" align="start">
        <Story />
      </Flex>],
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Heading
        }
      }
    }
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const h=["Overview"],A=Object.freeze(Object.defineProperty({__proto__:null,Overview:r,__namedExportsOrder:h,default:R},Symbol.toStringTag,{value:"Module"}));export{r as O,A as U};
