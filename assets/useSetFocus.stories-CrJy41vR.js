import{j as o}from"./jsx-runtime-lwGtIXvq.js";import{r as d}from"./index-CTZeEbLr.js";import{u as b}from"./index-ChMa3XFl.js";import{F as p}from"./Flex-Bimzf4jb.js";import{T as x}from"./TextField-D2v604IJ.js";import{B as r}from"./Button-zprqw9Vf.js";const B="_controlButton_mhy6u_1",F="_focusLabel_mhy6u_6",t={controlButton:B,focusLabel:F},_={title:"Hooks/useSetFocus"},e={render:()=>{const a=()=>{},i=()=>{},n=d.useRef(null),{isFocused:s,focus:m,blur:f}=b({ref:n,focusCallback:a,blurCallback:i});return o.jsxs(p,{direction:"column",children:[o.jsx(x,{ref:n,placeholder:"Input..."}),o.jsx(r,{onClick:m,className:t.controlButton,children:"Focus"}),o.jsx(r,{onClick:f,className:t.controlButton,children:"Blur"}),o.jsxs("div",{className:t.focusLabel,children:["Is focused: ",s==null?void 0:s.toString()]})]})},name:"Overview"};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const focusCallback = () => {};
    const blurCallback = () => {};
    const ref = useRef(null);
    const {
      isFocused,
      focus,
      blur
    } = useSetFocus({
      ref,
      focusCallback,
      blurCallback
    });
    return <Flex direction="column">
        <TextField ref={ref} placeholder="Input..." />
        <Button onClick={focus} className={styles.controlButton}>
          Focus
        </Button>
        <Button onClick={blur} className={styles.controlButton}>
          Blur
        </Button>
        <div className={styles.focusLabel}>Is focused: {isFocused?.toString()}</div>
      </Flex>;
  },
  name: "Overview"
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const v=["Overview"],O=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{e as O,O as U};
