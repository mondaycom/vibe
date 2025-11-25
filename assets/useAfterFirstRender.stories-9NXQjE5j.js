import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as l}from"./index-CTZeEbLr.js";import{u as p}from"./index-DPTcyynS.js";import{H as t}from"./Heading-B02tO7j0.js";import{F as m}from"./Flex-Bimzf4jb.js";import{B as f}from"./Button-zprqw9Vf.js";const R={title:"Hooks/useAfterFirstRender"},r={render:()=>{const n=p(),[d,a]=l.useState(0),c=()=>{a(u=>u+1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"h3",weight:"normal",children:n.current?"It is after the first render!":"This is the first render!"}),e.jsxs("p",{children:["Rerender count: ",d]}),e.jsx(f,{onClick:c,children:"Rerender component"})]})},decorators:[n=>e.jsx(m,{direction:"column",align:"start",children:e.jsx(n,{})})],parameters:{docs:{liveEdit:{scope:{Heading:t}}}}};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
