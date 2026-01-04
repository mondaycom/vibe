import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as d}from"./index-BfNsOeqz.js";import{M as l,C as i}from"./index-BYJnOoku.js";import{U as u,O as c,P as p,a as h,W as m}from"./useDebounceEvent.stories-Bo_F-5Ed.js";import{e as o,d as t}from"./function-arguments-Cjbh7Tou.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-yJjQv8ft.js";import"./index-CDcywKeq.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-BHzG1aTI.js";import"./noop-DX6rZLP_.js";import"./debounce-D3NSP8gs.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...s.components},{UsageGuidelines:a}=n;return a||x("UsageGuidelines"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:u}),`
`,e.jsx(n.h1,{id:"usedebounceevent",children:"useDebounceEvent"}),`
`,e.jsx(n.p,{children:"This hook generates an easy to use debounced value updater."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { useDebounceEvent } from "@vibe/core";
`})}),`
`,e.jsx(n.h2,{id:"arguments",children:"Arguments"}),`
`,e.jsx(o,{children:e.jsxs(t,{name:"options",type:"Object",children:[e.jsx(t,{name:"trim",type:"boolean",description:"Whether to trim the value or not.",default:"false"}),e.jsx(t,{name:"onChange",type:"(value: string) => void",description:"Callback function to execute on changes.",default:"() => null"}),e.jsx(t,{name:"delay",type:"number",description:"The amount of time (in ms) to delay the value's update.",default:"0"}),e.jsx(t,{name:"initialStateValue",type:"any",description:"The initial value."})]})}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsx(o,{children:e.jsxs(t,{name:"result",type:"Object",children:[e.jsx(t,{name:"inputValue",type:"any",description:"The hook's value."}),e.jsx(t,{name:"onEventChanged",type:"(event: Event) => void",description:e.jsxs(e.Fragment,{children:["A wrapper around the passed ",e.jsx(n.code,{children:"onChange"})," function."]})}),e.jsx(t,{name:"clearValue",type:"() => void",description:"Clears the current value."}),e.jsx(t,{name:"updateValue",type:"(value: any) => void",description:"Updates the current value."})]})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(a,{guidelines:["Use this hook when you need to debounce value updates (for example, text inputs)."]}),`
`,e.jsx(n.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),`
`,e.jsx(n.h3,{id:"passing-an-initial-value",children:"Passing an initial value"}),`
`,e.jsx(i,{of:p}),`
`,e.jsxs(n.h3,{id:"passing-an-onchange-handler",children:["Passing an ",e.jsx(n.code,{children:"onChange"})," handler"]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"trimming-the-value",children:"Trimming the value"}),`
`,e.jsx(i,{of:m})]})}function P(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}function x(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{P as default};
