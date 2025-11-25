import{j as i}from"./jsx-runtime-lwGtIXvq.js";import{r}from"./index-CTZeEbLr.js";import{u as t}from"./useClickableProps-CtaZWk7Q.js";const p={title:"Hooks/useClickableProps"},e={render:()=>{const a=r.useRef(null),n=r.useCallback(()=>alert("click!"),[]),c=t({onClick:n,id:"clickable-id",ariaHidden:!1,ariaHasPopup:!1,ariaExpanded:!1},a);return i.jsx("div",{...c,className:"monday-storybook-use-clickable-props",ref:a,children:"I act like a button"})},name:"Overview"};var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const d=["Overview"],m=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{e as O,m as U};
