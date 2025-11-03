import{j as d}from"./jsx-runtime-lwGtIXvq.js";import{r}from"./index-CTZeEbLr.js";import{u as l}from"./index-CkU0kzyk.js";import{B as c}from"./Box-BwRYjhPo.js";const i={title:"Hooks/useEventListener"},e={render:()=>{const t=r.useRef(null),[u,o]=r.useState(!1),m=r.useCallback(()=>{o(!0)},[o]);return l({ref:t,callback:m,eventName:"mouseenter"}),d.jsx(c,{ref:t,border:!0,rounded:"small",padding:"medium",children:u?"Boom!":"Hover me"})},name:"Overview"};var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);
    const callback = useCallback(() => {
      setHovered(true);
    }, [setHovered]);
    useEventListener({
      ref,
      callback,
      eventName: "mouseenter"
    });
    return <Box ref={ref} border rounded="small" padding="medium">
        {hovered ? "Boom!" : "Hover me"}
      </Box>;
  },
  name: "Overview"
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const v=["Overview"],E=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:v,default:i},Symbol.toStringTag,{value:"Module"}));export{e as O,E as U};
