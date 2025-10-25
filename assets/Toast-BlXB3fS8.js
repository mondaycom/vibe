import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as c}from"./index-BfNsOeqz.js";import{M as h}from"./index-Z--dVy_r.js";import{T as l,O as f,D as u,a as x,b as g,S as j,E as w,W as b,c as v,F as y,A}from"./Toast.stories-uvwlL1NF.js";import{l as T}from"./tip-CK87uV3P.js";import{m}from"./storybook-link-DWFwfLIZ.js";import{r as p}from"./usage-guidelines-DaF3e-2f.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CrOs9Jmf.js";import"./index-C_BMBL_j.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./Toast-BKnEVzqG.js";import"./test-ids-utils-B1IbFLmr.js";import"./index-BpvXyOxN.js";import"./Text-BwLUW2oo.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./TypographyConstants-BPC4crwB.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./ssr-utils-Do6V6AqB.js";import"./useIsOverflowing-CqkoFCDi.js";import"./debounce-D3NSP8gs.js";import"./Tooltip-CT7Hoq9W.js";import"./function-utils-C5K4iOy1.js";import"./index-Bt5DuqPA.js";import"./index-CkU0kzyk.js";import"./index-gB5zY9qh.js";import"./index-BGSF-Nm4.js";import"./useClickableProps-BJf5EuJX.js";import"./CSSTransition-CWtXmFMf.js";import"./extends-B6xKY8K9.js";import"./camelCase-CO1PkVrH.js";import"./DialogConstants-DkeX1sw_.js";import"./Flex-DYzKCQWz.js";import"./Clickable-B9_U6rsC.js";import"./noop-DX6rZLP_.js";import"./withStaticProps-DfSG2La2.js";import"./Icon-BxXV8fvZ.js";import"./withStaticProps-DoUMAG04.js";import"./Link-kEB9F9pq.js";import"./Button-ov_yT1Pd.js";import"./Loader-XtPXB_TQ.js";import"./Info-jvFNh0HS.js";import"./_tslib-Ct4JumdA.js";import"./Workspace-DtDO7RvQ.js";import"./Check-CxyRTNy4.js";import"./IconButton-B8aU6Dre.js";import"./sizes-BOsbvv4u.js";import"./AddSmall-DFewX5rK.js";import"./index-BxdhJjph.js";import"./CloseSmall-DUYWL2FE.js";import"./createComponentTemplate-B08h-OOW.js";import"./createStoryMetaSettingsDecorator-DMY_JaA7.js";import"./iconsMetaData-DNlBVpvD.js";import"./index-CkcRWdy2.js";import"./Invite-BJsiPZ1j.js";import"./Calendar-NzkLrIBg.js";import"./Table-DaDp-EUK.js";import"./Settings-WHGZN_3r.js";import"./Drag-8qsbRXq_.js";import"./DropdownChevronDown-Ck7VmPfy.js";import"./DropdownChevronRight-CtJWrCfY.js";import"./Wand-CS0YeGd1.js";import"./NewTab-CMglqP6P.js";import"./NavigationChevronRight-DwBPRKWZ.js";import"./Remove-B_sTt2Ao.js";import"./ThumbsUp-WQ1WzAOd.js";import"./Search-ClaS4_rs.js";import"./SortDescending-DfYW2xR2.js";import"./Upgrade-CC_w3yRG.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Flex-qb9MRXYX.js";import"./withStaticProps-DibdfTK_.js";import"./_tslib-BMUU9Vyh.js";import"./link-CVYAeutz.js";import"./index-BNdWxoNm.js";const k=()=>e.jsxs(T,{title:"Check yourself",children:["Need to inform the user about a system’s action? Use an"," ",e.jsx(m,{page:"Components/AlertBanner",size:m.sizes.SMALL,children:"AlertBanner"})," ","instead."]}),D=""+new URL("do1-DwSLsM1r.png",import.meta.url).href,R=""+new URL("dont1-irbUFarv.png",import.meta.url).href,U=""+new URL("do2-P9RuEZoQ.png",import.meta.url).href,L=""+new URL("dont2-CY0Rm-1c.png",import.meta.url).href,C=""+new URL("do3-D8YDq07e.png",import.meta.url).href,M=""+new URL("dont3-B_AiyhZ9.png",import.meta.url).href;function d(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...c(),...i.components},{Canvas:t,ComponentRules:n,PropsTable:r,RelatedComponents:a}=o;return t||s("Canvas"),n||s("ComponentRules"),r||s("PropsTable"),a||s("RelatedComponents"),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(o.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(o.p,{children:"A toast notification is a message object that presents timely information, including confirmation of actions, alerts, and errors."}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(o.h3,{id:"import",children:"Import"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { Toast } from "@vibe/core";
`})}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(p,{guidelines:["Use toast notifications immediately after a specific event such as a user action that does not relate to an object on the page. Toast used as a feedback loop to a user’s action.","Toasts should appear one at a time, and only disappear when no longer required.","Always be concise, write a short and clear message.","Where possible, give follow up actions to allow the user to become more informed or resolve the issue.","Always provide an action button or option to undo.","Toast should overlay permanent UI elements without blocking important actions."]}),`
`,e.jsx(k,{}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(p,{guidelines:[e.jsxs(e.Fragment,{children:["For dismissible Toasts, use the ",e.jsx(o.code,{children:"closeButtonAriaLabel"}),' prop to provide a descriptive accessible name for the close button (e.g., "Dismiss notification", "Close success message").']})]}),`
`,e.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o.h3,{id:"default-with-button",children:"Default with button"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(o.h3,{id:"toast-with-link",children:"Toast with link"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(o.h3,{id:"toast-with-loading",children:"Toast with loading"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(o.h3,{id:"success-message",children:"Success message"}),`
`,e.jsx(o.p,{children:"Use to providing a feedback loop. For example: Item copied."}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(o.h3,{id:"error-message",children:"Error message"}),`
`,e.jsx(o.p,{children:"Use when something was deleted, a problem has occurred, etc."}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(o.h3,{id:"warning-message",children:"Warning message"}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(o.h3,{id:"dark-message",children:"Dark message"}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(o.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),`
`,e.jsx(n,{rules:[{positive:{component:e.jsx(o.img,{src:D,width:"100%"}),description:"Use only one toast on a screen at a time."},negative:{component:e.jsx(o.img,{src:R,width:"100%"}),description:e.jsx(e.Fragment,{children:"Don’t place more than one toast on a screen at a time."})}},{positive:{component:e.jsx(o.img,{src:U,width:"100%"}),description:"Always offer an option to undo the action. Keep the toast for 60 seconds before auto-removing it."},negative:{component:e.jsx(o.img,{src:L,width:"100%"}),description:"Don’t offer an action without letting the user undo it."}},{positive:{component:e.jsx(o.img,{src:C,width:"100%"}),description:"If the toast message has 2 steps, make sure both toasts have roughly the same width."},negative:{component:e.jsx(o.img,{src:M,width:"100%"}),description:"If the toast message has 2 steps, don’t use toasts with very different widths."}}]}),`
`,e.jsx(o.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),`
`,e.jsx(o.h3,{id:"feedback-loop",children:"Feedback loop"}),`
`,e.jsx(o.p,{children:"After a user has done an action, provide feedback to close the loop. For example, when an item has been deleted, duplicated, etc."}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(o.h3,{id:"animation",children:"Animation"}),`
`,e.jsx(o.p,{children:"Our toast includes 2 animations: slide-in and transform. The transform animation is triggered when the toast changes from one state to another (for example, from loading to success)."}),`
`,e.jsx(t,{of:A}),`
`,e.jsx(o.h2,{id:"related-components",children:"Related components"}),`
`,e.jsx(a,{componentsNames:["AlertBanner","Tooltip","AttentionBox"]})]})}function so(i={}){const{wrapper:o}={...c(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(d,{...i})}):d(i)}function s(i,o){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{so as default};
