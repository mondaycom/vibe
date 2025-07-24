import{r,R as d}from"./index-Hemj67b4.js";import{u as l}from"./index-DLqmmtYJ.js";import{B as m}from"./Box-DnEG61CI.js";const v={title:"Hooks/useEventListener"},e={render:()=>{const t=r.useRef(null),[u,n]=r.useState(!1),c=r.useCallback(()=>{n(!0)},[n]);return l({ref:t,callback:c,eventName:"mouseenter"}),d.createElement(m,{ref:t,border:!0,rounded:"small",padding:"medium"},u?"Boom!":"Hover me")},name:"Overview"};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const i=["Overview"],E=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:i,default:v},Symbol.toStringTag,{value:"Module"}));export{e as O,E as U};
