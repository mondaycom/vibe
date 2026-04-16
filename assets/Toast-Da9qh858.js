import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as d}from"./index-BfNsOeqz.js";import{M as c}from"./index-D8bByWG8.js";import{T as h,O as l,D as f,a as u,b as x,S as g,E as j,W as w,c as b,F as v,A as y}from"./Toast.stories-CwZVCHgK.js";import{l as T}from"./tip-CK87uV3P.js";import{m as k}from"./storybook-link-C_q2g1jx.js";import{r as m}from"./usage-guidelines-DaF3e-2f.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Du8WtWvp.js";import"./index-B460DqIH.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./createStoryMetaSettingsDecorator-C07DgdqT.js";import"./index-D1D0uiJ1.js";import"./Invite-0V4zx4R3.js";import"./AddSmall-B_5viru5.js";import"./Workspace-BRy0vdK8.js";import"./Calendar-DUM0ORSW.js";import"./Table-COtoXgIc.js";import"./Check-BhuJDOHf.js";import"./CloseSmall-s783aDlP.js";import"./Delete-rsE7lq-b.js";import"./Drag-Ds0nT9eq.js";import"./Remove-BN6wnPjE.js";import"./DropdownChevronRight-C951c-JF.js";import"./Email-BmMi5Ll_.js";import"./Settings-Dllwc6G3.js";import"./Wand-CDIW39RM.js";import"./NewTab-BAQw6vct.js";import"./Info-LYrK74vc.js";import"./NavigationChevronRight-BDrJkoFj.js";import"./Person-C6oC2dzb.js";import"./Search-B-LsiQVE.js";import"./SortDescending-zUObFE7J.js";import"./Upgrade-CdQgCbE5.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Toast-Dna6d-iC.js";import"./test-ids-utils-BSSgvOTA.js";import"./constants-DEBzQJwg.js";import"./index-BpvXyOxN.js";import"./Link-CWZ1Cqal.js";import"./camelCase-CO1PkVrH.js";import"./Icon-BxXgVPAg.js";import"./constants-CenpDJY1.js";import"./noop-DX6rZLP_.js";import"./useEventListener-CkU0kzyk.js";import"./useKeyEvent-BeN1aNjK.js";import"./ssr-utils-Do6V6AqB.js";import"./keyCodes-BPHiFfps.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./Button-CAkxRwa_.js";import"./Loader-B0wBwV8P.js";import"./index-BxdhJjph.js";import"./CSSTransition-Dhcv5TuQ.js";import"./extends-CCbyfPlC.js";import"./Text-Bn4lX0iC.js";import"./Typography-D0i8w_Jp.js";import"./index-CqkoFCDi.js";import"./debounce-D3NSP8gs.js";import"./Tooltip-BlbcRfFE.js";import"./Flex-7H_pA1dJ.js";import"./Clickable-DnQGpUs5.js";import"./useClickableProps-Ul4gSWS9.js";import"./index-BKMrxRLL.js";import"./IconButton-xcDP9Sdd.js";import"./createComponentTemplate-B08h-OOW.js";import"./Flex-qb9MRXYX.js";import"./withStaticProps-DibdfTK_.js";import"./_tslib-BMUU9Vyh.js";import"./link-CVYAeutz.js";import"./index-CZy3fjCD.js";const A=()=>e.jsxs(T,{title:"Check yourself",children:["Need to inform the user about a system’s action? Use an"," ",e.jsx(k,{page:"Components/AlertBanner",size:"small",children:"AlertBanner"})," ","instead."]}),D=""+new URL("do1-DwSLsM1r.png",import.meta.url).href,R=""+new URL("dont1-irbUFarv.png",import.meta.url).href,U=""+new URL("do2-P9RuEZoQ.png",import.meta.url).href,C=""+new URL("dont2-CY0Rm-1c.png",import.meta.url).href,L=""+new URL("do3-D8YDq07e.png",import.meta.url).href,M=""+new URL("dont3-B_AiyhZ9.png",import.meta.url).href;function p(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...d(),...i.components},{Canvas:t,ComponentRules:n,PropsTable:r,RelatedComponents:a}=o;return t||s("Canvas"),n||s("ComponentRules"),r||s("PropsTable"),a||s("RelatedComponents"),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(o.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(o.p,{children:"A toast notification is a message object that presents timely information, including confirmation of actions, alerts, and errors."}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(o.h3,{id:"import",children:"Import"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { Toast } from "@vibe/core";
`})}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(m,{guidelines:["Use toast notifications immediately after a specific event such as a user action that does not relate to an object on the page. Toast used as a feedback loop to a user’s action.","Toasts should appear one at a time, and only disappear when no longer required.","Always be concise, write a short and clear message.","Where possible, give follow up actions to allow the user to become more informed or resolve the issue.","Always provide an action button or option to undo.","Toast should overlay permanent UI elements without blocking important actions."]}),`
`,e.jsx(A,{}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(m,{guidelines:[e.jsxs(e.Fragment,{children:["For dismissible Toasts, use the ",e.jsx(o.code,{children:"closeButtonAriaLabel"}),' prop to provide a descriptive accessible name for the close button (e.g., "Dismiss notification", "Close success message").']})]}),`
`,e.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o.h3,{id:"default-with-button",children:"Default with button"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(o.h3,{id:"toast-with-link",children:"Toast with link"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(o.h3,{id:"toast-with-loading",children:"Toast with loading"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(o.h3,{id:"success-message",children:"Success message"}),`
`,e.jsx(o.p,{children:"Use to providing a feedback loop. For example: Item copied."}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(o.h3,{id:"error-message",children:"Error message"}),`
`,e.jsx(o.p,{children:"Use when something was deleted, a problem has occurred, etc."}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(o.h3,{id:"warning-message",children:"Warning message"}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(o.h3,{id:"dark-message",children:"Dark message"}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(o.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),`
`,e.jsx(n,{rules:[{positive:{component:e.jsx(o.img,{src:D,width:"100%"}),description:"Use only one toast on a screen at a time."},negative:{component:e.jsx(o.img,{src:R,width:"100%"}),description:e.jsx(e.Fragment,{children:"Don’t place more than one toast on a screen at a time."})}},{positive:{component:e.jsx(o.img,{src:U,width:"100%"}),description:"Always offer an option to undo the action. Keep the toast for 60 seconds before auto-removing it."},negative:{component:e.jsx(o.img,{src:C,width:"100%"}),description:"Don’t offer an action without letting the user undo it."}},{positive:{component:e.jsx(o.img,{src:L,width:"100%"}),description:"If the toast message has 2 steps, make sure both toasts have roughly the same width."},negative:{component:e.jsx(o.img,{src:M,width:"100%"}),description:"If the toast message has 2 steps, don’t use toasts with very different widths."}}]}),`
`,e.jsx(o.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),`
`,e.jsx(o.h3,{id:"feedback-loop",children:"Feedback loop"}),`
`,e.jsx(o.p,{children:"After a user has done an action, provide feedback to close the loop. For example, when an item has been deleted, duplicated, etc."}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(o.h3,{id:"animation",children:"Animation"}),`
`,e.jsx(o.p,{children:"Our toast includes 2 animations: slide-in and transform. The transform animation is triggered when the toast changes from one state to another (for example, from loading to success)."}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(o.h2,{id:"related-components",children:"Related components"}),`
`,e.jsx(a,{componentsNames:["AlertBanner","Tooltip","AttentionBox"]})]})}function eo(i={}){const{wrapper:o}={...d(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(p,{...i})}):p(i)}function s(i,o){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{eo as default};
