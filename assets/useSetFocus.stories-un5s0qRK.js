import{r as d,R as e}from"./index-Hemj67b4.js";import{u as b}from"./index-DxqC8EIR.js";import{F as p}from"./Flex-DIvs4XZj.js";import{T as B}from"./TextField-Dc_mArgZ.js";import{B as c}from"./Button-DEM-Hn8V.js";const F="_controlButton_mhy6u_1",_="_focusLabel_mhy6u_6",n={controlButton:F,focusLabel:_},v={title:"Hooks/useSetFocus"},o={render:()=>{const a=()=>{},m=()=>{},s=d.useRef(null),{isFocused:t,focus:i,blur:f}=b({ref:s,focusCallback:a,blurCallback:m});return e.createElement(p,{direction:"column"},e.createElement(B,{ref:s,placeholder:"Input..."}),e.createElement(c,{onClick:i,className:n.controlButton},"Focus"),e.createElement(c,{onClick:f,className:n.controlButton},"Blur"),e.createElement("div",{className:n.focusLabel},"Is focused: ",t==null?void 0:t.toString()))},name:"Overview"};var r,l,u;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const k=["Overview"],E=Object.freeze(Object.defineProperty({__proto__:null,Overview:o,__namedExportsOrder:k,default:v},Symbol.toStringTag,{value:"Module"}));export{o as O,E as U};
