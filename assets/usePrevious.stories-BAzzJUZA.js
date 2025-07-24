import{r as C,R as e}from"./index-Hemj67b4.js";import{u as d}from"./index-CXrJR90Q.js";import{F as o}from"./Flex-DIvs4XZj.js";import{C as c}from"./Counter-tqJNw08f.js";import{B as p}from"./Button-DEM-Hn8V.js";const _="_counterContainer_10oij_1",O="_counterLabel_10oij_5",t={counterContainer:_,counterLabel:O},b={title:"Hooks/usePrevious"},n={render:()=>{const[r,i]=C.useState(1),l=d(r),m=()=>{i(v=>v+1)};return e.createElement(o,{direction:"column"},e.createElement(o,{className:t.counterContainer,direction:"column"},e.createElement("div",{className:t.counterLabel},"Current"),e.createElement(c,{count:r})),e.createElement(o,{className:t.counterContainer,direction:"column"},e.createElement("div",{className:t.counterLabel},"Previous"),e.createElement(c,{count:l})),e.createElement(p,{onClick:m},"Increment"))},name:"Overview"};var s,u,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(u=n.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const x=["Overview"],y=Object.freeze(Object.defineProperty({__proto__:null,Overview:n,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{n as O,y as U};
