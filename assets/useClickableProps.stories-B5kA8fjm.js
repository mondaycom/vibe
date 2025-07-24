import{r,R as i}from"./index-Hemj67b4.js";import{u as t}from"./useClickableProps-BnhuEIMR.js";const p={title:"Hooks/useClickableProps"},e={render:()=>{const a=r.useRef(null),c=r.useCallback(()=>alert("click!"),[]),n=t({onClick:c,id:"clickable-id",ariaHidden:!1,ariaHasPopup:!1,ariaExpanded:!1},a);return i.createElement("div",{...n,className:"monday-storybook-use-clickable-props",ref:a},"I act like a button")},name:"Overview"};var s,l,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const onClick = useCallback(() => alert("click!"), []);
    const clickableProps = useClickableProps({
      onClick: onClick,
      id: "clickable-id",
      ariaHidden: false,
      ariaHasPopup: false,
      ariaExpanded: false
    }, ref);
    return <div {...clickableProps} className="monday-storybook-use-clickable-props" ref={ref}>
        I act like a button
      </div>;
  },
  name: "Overview"
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const d=["Overview"],b=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{e as O,b as U};
