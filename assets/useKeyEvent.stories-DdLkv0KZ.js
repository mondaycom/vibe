import{r as c,R as i}from"./index-Hemj67b4.js";import{u as m}from"./index-8zVcErkr.js";const d={title:"Hooks/useKeyEvent"},e={render:()=>{const[a,n]=c.useState("-");return m({keys:["1","2","3","4","5","6","7","8","9","0"],callback:o=>n(o.key)}),i.createElement("div",null,"Last pressed digit: ",a)},name:"Overview"};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [keyName, setKeyName] = useState("-");
    useKeyEvent({
      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      // @ts-ignore
      callback: e => setKeyName(e.key)
    });
    return <div>Last pressed digit: {keyName}</div>;
  },
  name: "Overview"
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const u=["Overview"],l=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{e as O,l as U};
