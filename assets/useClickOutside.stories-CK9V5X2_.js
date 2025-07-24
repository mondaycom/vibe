import{r,R as l}from"./index-Hemj67b4.js";import{u as d}from"./index-NFRdg0hY.js";import{B as m}from"./Box-CI4IQ3Nw.js";const C={title:"Hooks/useClickOutside"},e={render:()=>{const[c,t]=r.useState(0),n=r.useRef(null),a=r.useCallback(()=>{t(i=>i+1)},[t]);return d({ref:n,callback:a}),l.createElement(m,{ref:n,border:!0,rounded:"small",padding:"medium"},"Click outside ",c)},name:"Overview"};var o,s,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [counter, setCounter] = useState(0);
    const ref = useRef(null);
    const onClick = useCallback(() => {
      setCounter(currentCounter => {
        return currentCounter + 1;
      });
    }, [setCounter]);
    useClickOutside({
      ref,
      callback: onClick
    });
    return <Box ref={ref} border rounded="small" padding="medium">
        Click outside {counter}
      </Box>;
  },
  name: "Overview"
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const k=["Overview"],b=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{e as O,b as U};
