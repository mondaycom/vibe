import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as s}from"./index-CTZeEbLr.js";import{u as d}from"./useIsOverflowing-CqkoFCDi.js";import{T as f}from"./Tooltip-Bz77u-mN.js";import{F as i}from"./Flex-Bimzf4jb.js";import{T as v}from"./TextField-D2v604IJ.js";const g="_textContainer_11qne_1",O="_input_11qne_12",l={textContainer:g,input:O},w={title:"Hooks/useIsOverflowing"},t={render:()=>{const x=({text:n})=>{const r=s.useRef(null),o=d({ref:r});return e.jsxs(i,{direction:"column",gap:"medium",align:"start",children:[e.jsxs("div",{children:["Is overflowing: ",o.toString()]}),e.jsx(f,{content:o?n:void 0,children:e.jsx("div",{ref:r,className:l.textContainer,children:n})})]})},[p,u]=s.useState("");return e.jsxs(i,{direction:"column",gap:"small",align:"start",children:[e.jsx(v,{onChange:u,placeholder:"Type text here",className:l.input}),e.jsx(x,{text:p})]})},name:"Overview"};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ComponentWithOverflow = ({
      text
    }: {
      text: string;
    }) => {
      const ref = useRef(null);
      const isOverflowing = useIsOverflowing({
        ref
      });
      return <Flex direction="column" gap="medium" align="start">
          <div>Is overflowing: {isOverflowing.toString()}</div>
          <Tooltip content={isOverflowing ? text : undefined}>
            <div ref={ref} className={styles.textContainer}>
              {text}
            </div>
          </Tooltip>
        </Flex>;
    };
    const [text, setText] = useState("");
    return <Flex direction="column" gap="small" align="start">
        <TextField onChange={setText} placeholder="Type text here" className={styles.input} />
        <ComponentWithOverflow text={text} />
      </Flex>;
  },
  name: "Overview"
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const h=["Overview"],y=Object.freeze(Object.defineProperty({__proto__:null,Overview:t,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{t as O,y as U};
