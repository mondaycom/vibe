import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as v}from"./index-CTZeEbLr.js";import{u as C}from"./index-BxdhJjph.js";import{F as o}from"./Flex-Bimzf4jb.js";import{C as s}from"./Counter-B4ANueEA.js";import{B as p}from"./Button-zprqw9Vf.js";const x="_counterContainer_10oij_1",j="_counterLabel_10oij_5",t={counterContainer:x,counterLabel:j},_={title:"Hooks/usePrevious"},n={render:()=>{const[r,a]=v.useState(1),l=C(r),m=()=>{a(d=>d+1)};return e.jsxs(o,{direction:"column",children:[e.jsxs(o,{className:t.counterContainer,direction:"column",children:[e.jsx("div",{className:t.counterLabel,children:"Current"}),e.jsx(s,{count:r})]}),e.jsxs(o,{className:t.counterContainer,direction:"column",children:[e.jsx("div",{className:t.counterLabel,children:"Previous"}),e.jsx(s,{count:l})]}),e.jsx(p,{onClick:m,children:"Increment"})]})},name:"Overview"};var c,u,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(1);
    const prevCount = usePrevious(count);
    const incrementButtonOnClick = () => {
      setCount(prevValue => prevValue + 1);
    };
    return <Flex direction="column">
        <Flex className={styles.counterContainer} direction="column">
          <div className={styles.counterLabel}>Current</div>
          <Counter count={count} />
        </Flex>
        <Flex className={styles.counterContainer} direction="column">
          <div className={styles.counterLabel}>Previous</div>
          <Counter count={prevCount} />
        </Flex>
        <Button onClick={incrementButtonOnClick}>Increment</Button>
      </Flex>;
  },
  name: "Overview"
}`,...(i=(u=n.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const O=["Overview"],B=Object.freeze(Object.defineProperty({__proto__:null,Overview:n,__namedExportsOrder:O,default:_},Symbol.toStringTag,{value:"Module"}));export{n as O,B as U};
