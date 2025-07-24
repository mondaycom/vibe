import{r as o,R as n}from"./index-Hemj67b4.js";import{u as c}from"./index-CpWJpgjH.js";const i={title:"Hooks/useTimeout"},e={render:()=>{const a=o.useCallback(()=>{alert("5s passed")},[]);return c({time:5e3,callback:a}),n.createElement("div",null,"Alert is coming!")},name:"Overview"};var r,t,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const callback = useCallback(() => {
      alert("5s passed");
    }, []);
    useTimeout({
      time: 5000,
      callback
    });
    return <div>Alert is coming!</div>;
  },
  name: "Overview"
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const l=["Overview"],d=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{e as O,d as U};
