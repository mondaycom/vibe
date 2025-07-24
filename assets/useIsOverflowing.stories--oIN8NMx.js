import{r as s,R as e}from"./index-Hemj67b4.js";import{u as v}from"./useIsOverflowing-DshK7x5b.js";import{T as d}from"./TextField-DNTTQ99p.js";import{T as x}from"./Tooltip-DUrP1YXb.js";import{F as i}from"./Flex-DIvs4XZj.js";const g="_textContainer_11qne_1",O="_input_11qne_12",l={textContainer:g,input:O},w={title:"Hooks/useIsOverflowing"},t={render:()=>{const u=({text:n})=>{const r=s.useRef(null),o=v({ref:r});return e.createElement(i,{direction:"column",gap:"medium",align:"start"},e.createElement("div",null,"Is overflowing: ",o.toString()),e.createElement(x,{content:o?n:void 0},e.createElement("div",{ref:r,className:l.textContainer},n)))},[p,f]=s.useState("");return e.createElement(i,{direction:"column",gap:"small",align:"start"},e.createElement(d,{onChange:f,placeholder:"Type text here",className:l.input}),e.createElement(u,{text:p}))},name:"Overview"};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Overview"],S=Object.freeze(Object.defineProperty({__proto__:null,Overview:t,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{t as O,S as U};
