import{j as l}from"./jsx-runtime-lwGtIXvq.js";import{r}from"./index-CTZeEbLr.js";import{c as d}from"./index-B4QhyL3l.js";import{B as m}from"./Box-BwRYjhPo.js";const C={title:"Hooks/useClickOutside"},e={render:()=>{const[c,t]=r.useState(0),n=r.useRef(null),i=r.useCallback(()=>{t(a=>a+1)},[t]);return d({ref:n,callback:i}),l.jsxs(m,{ref:n,border:!0,rounded:"small",padding:"medium",children:["Click outside ",c]})},name:"Overview"};var o,s,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const p=["Overview"],v=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:p,default:C},Symbol.toStringTag,{value:"Module"}));export{e as O,v as U};
