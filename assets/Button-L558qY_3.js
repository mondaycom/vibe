import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as m}from"./index-BfNsOeqz.js";import{M as h}from"./index-CY_u_BgR.js";import{l as x}from"./tip-CK87uV3P.js";import{m as p}from"./storybook-link-FKCuRuLg.js";import{B as u,O as j,a as g,S as b,D as f,b as v,P as y,I as w,L as U,c as B,d as S,A as C}from"./Button.stories-Cl7onzuG.js";import{B as n}from"./Button-DRHbYbZf.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BNu7V7B0.js";import"./index-Ds-tnOBP.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-BpvXyOxN.js";import"./Flex-qb9MRXYX.js";import"./withStaticProps-DibdfTK_.js";import"./_tslib-BMUU9Vyh.js";import"./link-CVYAeutz.js";import"./index-C4_cWVrH.js";import"./createStoryMetaSettingsDecorator-DPBO6pDt.js";import"./index-dYystfuL.js";import"./_tslib-Ct4JumdA.js";import"./Invite-BJsiPZ1j.js";import"./AddSmall-DFewX5rK.js";import"./Workspace-CefzN9Lt.js";import"./Calendar-NzkLrIBg.js";import"./Table-DaDp-EUK.js";import"./Check-CxyRTNy4.js";import"./CloseSmall-DUYWL2FE.js";import"./Delete-BKCcQViV.js";import"./Drag-8qsbRXq_.js";import"./DropdownChevronDown-Ck7VmPfy.js";import"./DropdownChevronRight-CtJWrCfY.js";import"./Email-TZY0cRuW.js";import"./Settings-C9Ssqg9X.js";import"./Wand-CS0YeGd1.js";import"./NewTab-CMglqP6P.js";import"./Info-jvFNh0HS.js";import"./NavigationChevronRight-DwBPRKWZ.js";import"./Person-XH7Sg-gK.js";import"./Remove-B_sTt2Ao.js";import"./Search-ClaS4_rs.js";import"./SortDescending-DfYW2xR2.js";import"./Upgrade-CC_w3yRG.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./createComponentTemplate-B08h-OOW.js";import"./Text-DxGBAgI1.js";import"./TypographyConstants-j7sP5Y8J.js";import"./index-C-yBOSr8.js";import"./debounce-D3NSP8gs.js";import"./Tooltip-WZdDHKve.js";import"./DialogConstants-C6vctR8T.js";import"./Flex-DIp2zxrn.js";import"./Clickable-DHJc0oio.js";import"./useClickableProps-f6_q31tC.js";import"./keyCodes-BtXLi1ea.js";import"./useMergeRef-DmpwoaL5.js";import"./function-utils-BT-tMqNc.js";import"./noop-DX6rZLP_.js";import"./withStaticProps-BEcHOprC.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./Icon-CpEYCgaz.js";import"./useEventListener-CkU0kzyk.js";import"./index-Dedp4W2d.js";import"./CSSTransition-CWtXmFMf.js";import"./extends-B6xKY8K9.js";import"./Loader-BabV-h63.js";const k=()=>e.jsxs(x,{children:["If you need to use icon as button with no text, check out"," ",e.jsx(p,{page:"Components/IconButton",size:p.sizes.SMALL,children:"IconButton"})," ","component"]});function l(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...i.components},{Canvas:o,ComponentRules:a,PropsTable:c,RelatedComponents:d,UsageGuidelines:r}=t;return o||s("Canvas"),a||s("ComponentRules"),c||s("PropsTable"),d||s("RelatedComponents"),r||s("UsageGuidelines"),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:u}),`
`,e.jsx(t.h1,{id:"button",children:"Button"}),`
`,e.jsx(t.p,{children:`Buttons allow users to trigger an action or event with a single click.
For example, you can use a button for allowing the functionality of submitting a form, opening a dialog, canceling an action,
or performing a delete operation.`}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { Button } from "@vibe/core";
`})}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r,{guidelines:["Buttons may contain icon, on the left or the right side","Use 8 px spacing between buttons","Replace text with a loader if action is submitted, but still processing","Button width is set by it’s content, avoid changing it width","Use only one primary button, and any remaining calls to action should be represented as lower emphasis buttons"]}),`
`,e.jsx(k,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(r,{guidelines:[e.jsxs(e.Fragment,{children:["Using an ",e.jsx(t.code,{children:"id"})," is recommended for all instances to ensure proper label association."]}),e.jsxs(e.Fragment,{children:["Always provide descriptive text content for buttons, or use ",e.jsx(t.code,{children:"ariaLabel"})," prop when buttons contain only icons."]}),e.jsxs(e.Fragment,{children:["Use ",e.jsx(t.code,{children:"ariaLabel"})," prop when you need to provide a custom accessible name that differs from the visible button text or for icon-only buttons."]}),e.jsxs(e.Fragment,{children:["Use ",e.jsx(t.code,{children:"ariaLabeledBy"})," prop when an external element provides the accessible name for the button."]}),e.jsxs(e.Fragment,{children:["Use ",e.jsx(t.code,{children:"ariaHasPopup"})," prop when the button triggers a popup menu or dialog."]}),e.jsxs(e.Fragment,{children:["Use ",e.jsx(t.code,{children:"ariaExpanded"})," prop to indicate when a popup triggered by the button is open or closed."]}),e.jsxs(e.Fragment,{children:["Use ",e.jsx(t.code,{children:"ariaControls"})," prop to link the button to the element it controls."]}),e.jsxs(e.Fragment,{children:["Use ",e.jsx(t.code,{children:"aria-describedby"})," prop when additional descriptive text is needed for the button."]}),e.jsxs(e.Fragment,{children:["Use ",e.jsx(t.code,{children:"aria-pressed"})," prop for toggle buttons to indicate their current pressed state."]})]}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"button-kinds",children:"Button kinds"}),`
`,e.jsx(t.p,{children:"There can be more than one button in a screen, but to create the hierarchy of actions we need to use button kinds."}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(t.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(t.p,{children:"Set disable button for something that isn’t usable. Use a tooltip on hover in order to indicate the reason of the disabled action."}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(t.h3,{id:"states",children:"States"}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(t.h3,{id:"positive-and-negative",children:"Positive and Negative"}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(t.h3,{id:"icons",children:"Icons"}),`
`,e.jsx(o,{of:w}),`
`,e.jsx(t.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),`
`,e.jsx(a,{rules:[{positive:{component:e.jsx(n,{children:"Get started"}),description:"Use 1 or 2 words, no longer than 4 words, with fewer than 20 characters including spaces."},negative:{component:e.jsx(n,{children:"Get started and enjoy discount!"}),description:"Don’t use punctuation marks such as periods or exclamation points."}},{positive:{component:e.jsx(n,{children:"Get started"}),description:"Use sentence-case capitalization."},negative:{component:[e.jsx(n,{children:"Get Started"}),e.jsx(n,{children:"GET STARTED"})],description:"Don’t use title case captalization or all caps."}},{positive:{component:[e.jsx(n,{kind:"tertiary",children:"Cancel"}),e.jsx(n,{children:"Get started"})],description:"Use primary button as the main action , put the tertiary as the second option."},negative:{component:[e.jsx(n,{children:"Get started"}),e.jsx(n,{kind:"secondary",children:"Cancel"})],description:"Use primary button next to secondary."}},{positive:{component:[e.jsx(n,{kind:"tertiary",children:"Cancel"}),e.jsx(n,{children:"Get started"})],description:"Use active verbs or phrases that clearly indicate action."},negative:{component:[e.jsx(n,{kind:"tertiary",children:"Yes"}),e.jsx(n,{children:"No"})],description:"Use vague and generic labels that make the user read the dialog before taking action."}}]}),`
`,e.jsx(t.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),`
`,e.jsx(t.h3,{id:"loading-state",children:"Loading state"}),`
`,e.jsx(o,{of:U}),`
`,e.jsx(t.h3,{id:"success-state",children:"Success state"}),`
`,e.jsx(o,{of:B}),`
`,e.jsx(t.h3,{id:"on-color-state",children:"On color state"}),`
`,e.jsx(o,{of:S}),`
`,e.jsx(t.h3,{id:"adjacent-buttons",children:"Adjacent buttons"}),`
`,e.jsx(o,{of:C}),`
`,e.jsx(t.h2,{id:"related-components",children:"Related components"}),`
`,e.jsx(d,{componentsNames:["SplitButton","ButtonGroup","Badge"]})]})}function _e(i={}){const{wrapper:t}={...m(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(l,{...i})}):l(i)}function s(i,t){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{_e as default};
