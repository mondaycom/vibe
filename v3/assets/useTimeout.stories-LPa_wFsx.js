import{j as a}from"./jsx-runtime-lwGtIXvq.js";import{r as n}from"./index-CTZeEbLr.js";import{u as i}from"./index-CoRONL_B.js";const c={title:"Hooks/useTimeout"},e={render:()=>{const o=n.useCallback(()=>{alert("5s passed")},[]);return i({time:5e3,callback:o}),a.jsx("div",{children:"Alert is coming!"})},name:"Overview"};var r,s,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const m=["Overview"],p=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{e as O,p as U};
