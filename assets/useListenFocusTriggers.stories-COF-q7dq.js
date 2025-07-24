import{r as t,R as s}from"./index-Hemj67b4.js";import{u as d}from"./index-BMFTbhVI.js";import{F}from"./Flex-DIvs4XZj.js";import{B as g}from"./Button-DEM-Hn8V.js";const v={title:"Hooks/useListenFocusTriggers"},e={render:()=>{const[a,o]=t.useState("-"),n=t.useRef(null),i=t.useCallback(m=>{o("mouse")},[]),l=t.useCallback(m=>{o("keyboard")},[]);return d({ref:n,onFocusByMouse:i,onFocusByKeyboard:l}),s.createElement(F,{direction:"column",gap:"medium",align:"start"},s.createElement(g,{ref:n},"Focus target"),s.createElement("div",null,"Received focus by: ",a))},name:"Overview"};var r,u,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState<string>("-");
    const ref = useRef<HTMLButtonElement>(null);
    const onFocusByMouse = useCallback((_event: FocusEvent) => {
      setText("mouse");
    }, []);
    const onFocusByKeyboard = useCallback((_event: FocusEvent) => {
      setText("keyboard");
    }, []);
    useListenFocusTriggers({
      ref: ref,
      onFocusByMouse: onFocusByMouse,
      onFocusByKeyboard: onFocusByKeyboard
    });
    return <Flex direction="column" gap="medium" align="start">
        <Button ref={ref}>Focus target</Button>
        <div>Received focus by: {text}</div>
      </Flex>;
  },
  name: "Overview"
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const y=["Overview"],B=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{e as O,B as U};
