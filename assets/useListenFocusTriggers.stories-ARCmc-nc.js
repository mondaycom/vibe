import{j as o}from"./jsx-runtime-lwGtIXvq.js";import{r as s}from"./index-CTZeEbLr.js";import{u as m}from"./index-BlWfPOxY.js";import{F}from"./Flex-Bimzf4jb.js";import{B as g}from"./Button-zprqw9Vf.js";const v={title:"Hooks/useListenFocusTriggers"},e={render:()=>{const[a,t]=s.useState("-"),n=s.useRef(null),i=s.useCallback(d=>{t("mouse")},[]),l=s.useCallback(d=>{t("keyboard")},[]);return m({ref:n,onFocusByMouse:i,onFocusByKeyboard:l}),o.jsxs(F,{direction:"column",gap:"medium",align:"start",children:[o.jsx(g,{ref:n,children:"Focus target"}),o.jsxs("div",{children:["Received focus by: ",a]})]})},name:"Overview"};var r,u,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const f=["Overview"],T=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{e as O,T as U};
