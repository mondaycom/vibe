import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as l}from"./index-Hemj67b4.js";import{u as p}from"./index-BhJ9w1Ot.js";import{B as m}from"./Button-CVjt-pk_.js";import{F as f}from"./Flex-2Q04fxOc.js";import{H as t}from"./Heading-C31v9qSM.js";const R={title:"Hooks/useAfterFirstRender"},r={render:()=>{const n=p(),[d,a]=l.useState(0),c=()=>{a(u=>u+1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"h3",weight:"normal",children:n.current?"It is after the first render!":"This is the first render!"}),e.jsxs("p",{children:["Rerender count: ",d]}),e.jsx(m,{onClick:c,children:"Rerender component"})]})},decorators:[n=>e.jsx(f,{direction:"column",align:"start",children:e.jsx(n,{})})],parameters:{docs:{liveEdit:{scope:{Heading:t}}}}};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const h=["Overview"],A=Object.freeze(Object.defineProperty({__proto__:null,Overview:r,__namedExportsOrder:h,default:R},Symbol.toStringTag,{value:"Module"}));export{r as O,A as U};
