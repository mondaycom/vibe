import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{useMDXComponents as d}from"./index-CXa8ra7y.js";import{M as l,C as s}from"./index-BiJO_qad.js";import{U as p,O as u,P as c,a as h,W as m}from"./useDebounceEvent.stories-BbnQE_3T.js";import{e as a,d as t}from"./function-arguments-cT2l_yKe.js";import"./index-Hemj67b4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DSbkyfhr.js";import"./index-DMuH19xN.js";import"./index-D63y3F3s.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-CxHVRCQs.js";import"./noop-DX6rZLP_.js";import"./debounce-D-uO1lYf.js";import"./isObject-C3e4t58V.js";import"./_baseGetTag-ENn7h-yl.js";import"./toNumber-CBHRrcgy.js";import"./isSymbol-DWIQbemu.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...i.components},{UsageGuidelines:o}=n;return o||x("UsageGuidelines"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p}),`
`,e.jsx(n.h1,{id:"usedebounceevent",children:"useDebounceEvent"}),`
`,e.jsx(n.p,{children:"This hook generates an easy to use debounced value updater."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { useDebounceEvent } from "@vibe/core/hooks";
`})}),`
`,e.jsx(n.h2,{id:"arguments",children:"Arguments"}),`
`,e.jsx(a,{children:e.jsxs(t,{name:"options",type:"Object",children:[e.jsx(t,{name:"trim",type:"boolean",description:"Whether to trim the value or not.",default:"false"}),e.jsx(t,{name:"onChange",type:"(value: string) => void",description:"Callback function to execute on changes.",default:"() => null"}),e.jsx(t,{name:"delay",type:"number",description:"The amount of time (in ms) to delay the value's update.",default:"0"}),e.jsx(t,{name:"initialStateValue",type:"any",description:"The initial value."})]})}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsx(a,{children:e.jsxs(t,{name:"result",type:"Object",children:[e.jsx(t,{name:"inputValue",type:"any",description:"The hook's value."}),e.jsx(t,{name:"onEventChanged",type:"(event: Event) => void",description:e.jsxs(e.Fragment,{children:["A wrapper around the passed ",e.jsx(n.code,{children:"onChange"})," function."]})}),e.jsx(t,{name:"clearValue",type:"() => void",description:"Clears the current value."}),e.jsx(t,{name:"updateValue",type:"(value: any) => void",description:"Updates the current value."})]})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{guidelines:["Use this hook when you need to debounce value updates (for example, text inputs)."]}),`
`,e.jsx(n.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),`
`,e.jsx(n.h3,{id:"passing-an-initial-value",children:"Passing an initial value"}),`
`,e.jsx(s,{of:c}),`
`,e.jsxs(n.h3,{id:"passing-an-onchange-handler",children:["Passing an ",e.jsx(n.code,{children:"onChange"})," handler"]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"trimming-the-value",children:"Trimming the value"}),`
`,e.jsx(s,{of:m})]})}function W(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}function x(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{W as default};
