import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as s}from"./index-BfNsOeqz.js";import{M as m,C as c}from"./index-DnzBwfD0.js";import{U as a,O as p}from"./useTimeout.stories-LPa_wFsx.js";import{e as i,d as o}from"./function-arguments-Cjbh7Tou.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C75m0RZw.js";import"./index-uihkBZtH.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-CoRONL_B.js";import"./noop-DX6rZLP_.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:a}),`
`,e.jsx(t.h1,{id:"usetimeout",children:"useTimeout"}),`
`,e.jsx(t.p,{children:"Use this hook when you need to perform an action with timeout, this hook will cancel the timeout when the component unmounts."}),`
`,e.jsx(c,{of:p}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { useTimeout } from "@vibe/core";
`})}),`
`,e.jsx(t.h2,{id:"arguments",children:"Arguments"}),`
`,e.jsx(i,{children:e.jsxs(o,{name:"options",type:"Object",children:[e.jsx(o,{name:"time",type:"number",description:"The time (in ms) to wait before execution.",default:"0"}),e.jsx(o,{name:"callback",type:"(value: string) => void",description:"Callback function to execute when provided time has passed.",required:!0}),e.jsx(o,{name:"ignoreZeroTime",type:"boolean",description:"If time provided is 0 (defer) ignore the callback.",default:"false"})]})}),`
`,e.jsx(t.h2,{id:"returns",children:"Returns"}),`
`,e.jsx(i,{children:e.jsx(o,{name:"result",type:"Array",children:e.jsx(o,{type:"() => void",description:"Cancels the timeout."})})})]})}function k(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{k as default};
