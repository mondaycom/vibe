import{j as i}from"./jsx-runtime-DDzbWKUH.js";import{r as m}from"./index-Hemj67b4.js";import{u as c}from"./index-8zVcErkr.js";const d={title:"Hooks/useKeyEvent"},e={render:()=>{const[n,a]=m.useState("-");return c({keys:["1","2","3","4","5","6","7","8","9","0"],callback:o=>a(o.key)}),i.jsxs("div",{children:["Last pressed digit: ",n]})},name:"Overview"};var r,s,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const u=["Overview"],l=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{e as O,l as U};
