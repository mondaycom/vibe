import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as u}from"./index-BfNsOeqz.js";import{M as h}from"./index-D8bByWG8.js";import{l as x}from"./tip-CK87uV3P.js";import{m}from"./storybook-link-C_q2g1jx.js";import{M as f,O as j,P as g,T as b,S as y,F as w,a as v,b as T}from"./MultiStepIndicator.stories-CM4huoOr.js";import{M as n}from"./MultiStepIndicator-BdO-MSSp.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Du8WtWvp.js";import"./index-B460DqIH.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-BpvXyOxN.js";import"./Flex-qb9MRXYX.js";import"./withStaticProps-DibdfTK_.js";import"./_tslib-BMUU9Vyh.js";import"./link-CVYAeutz.js";import"./index-CZy3fjCD.js";import"./Upgrade-CdQgCbE5.js";import"./createComponentTemplate-B08h-OOW.js";import"./Check-BhuJDOHf.js";import"./Divider-D0Oy2bpS.js";import"./test-ids-utils-BSSgvOTA.js";import"./constants-DEBzQJwg.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./keyCodes-DhPS-8Mm.js";import"./HiddenText-DZk3PqwD.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./ssr-utils-Do6V6AqB.js";import"./Clickable-DnQGpUs5.js";import"./useClickableProps-Ul4gSWS9.js";import"./keyCodes-BPHiFfps.js";import"./constants-CenpDJY1.js";import"./noop-DX6rZLP_.js";import"./SwitchTransition-C88AiGZf.js";import"./CSSTransition-Dhcv5TuQ.js";import"./extends-CCbyfPlC.js";import"./Icon-BxXgVPAg.js";import"./useEventListener-CkU0kzyk.js";import"./useKeyEvent-BeN1aNjK.js";import"./camelCase-CO1PkVrH.js";const S=[{status:"fulfilled",titleText:"Plan options",subtitleText:"Choose plan"},{status:"pending",titleText:"Seats",subtitleText:"Number of users"},{status:"pending",titleText:"Paying method",subtitleText:"How to pay"}],I=[{status:"fulfilled",titleText:"Plan options",subtitleText:""},{status:"pending",titleText:"Seats",subtitleText:"Number of users"},{status:"pending",titleText:"Paying method",subtitleText:"How to pay"}],d=[{status:"fulfilled",titleText:"Plan",subtitleText:""},{status:"pending",titleText:"Seats",subtitleText:""},{status:"pending",titleText:"Method",subtitleText:""}],z=()=>t.jsxs(x,{title:"Not what you were looking for?",children:["In order to navigate between content without a linear progress, use the"," ",t.jsx(m,{page:"Components/Tabs",size:"small",children:"Tabs"})," ","or"," ",t.jsx(m,{page:"Components/ButtonGroup",size:"small",children:"Button group"})," ","component."]});function c(s){const e={code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...s.components},{Canvas:i,ComponentRules:r,PropsTable:a,RelatedComponents:p,UsageGuidelines:l}=e;return i||o("Canvas"),r||o("ComponentRules"),a||o("PropsTable"),p||o("RelatedComponents"),l||o("UsageGuidelines"),t.jsxs(t.Fragment,{children:[t.jsx(h,{of:f}),`
`,t.jsx(e.h1,{id:"multistepindicator",children:"MultiStepIndicator"}),`
`,t.jsx(e.p,{children:"Tabular navigation component that helps users visualize and interact with a multi-step process."}),`
`,t.jsx(i,{of:j}),`
`,t.jsx(e.h3,{id:"import",children:"Import"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { MultiStepIndicator } from "@vibe/core";
`})}),`
`,t.jsx(e.h2,{id:"props",children:"Props"}),`
`,t.jsx(a,{}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(l,{guidelines:["Use wizard to break a larger goal into manageable steps.","If a workflow needs more than 6 steps, consider how you might simplify it or break it up into multiple tasks.","Always position the wizard at the top of the multi-step process so that the user has a common reference point as they move between steps."]}),`
`,t.jsx(z,{}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(e.h3,{id:"placements",children:"Placements"}),`
`,t.jsx(e.p,{children:"Placements"}),`
`,t.jsx(i,{of:g}),`
`,t.jsx(e.h3,{id:"types",children:"Types"}),`
`,t.jsx(e.p,{children:"There are 4 types: Primary, success, danger, dark."}),`
`,t.jsx(i,{of:b}),`
`,t.jsx(e.h3,{id:"sizes",children:"Sizes"}),`
`,t.jsx(e.p,{children:"Compact is a smaller version of the Regular Wizard Stepper, and is suitable for smaller containers. In case you need to display more content, use the Regular size. As of now, vertical placement is not supported."}),`
`,t.jsx(i,{of:y}),`
`,t.jsx(e.h3,{id:"fulfilled-icons",children:"Fulfilled Icons"}),`
`,t.jsx(i,{of:w}),`
`,t.jsx(e.h3,{id:"transition-animation",children:"Transition Animation"}),`
`,t.jsx(e.p,{children:"State transition automatic example"}),`
`,t.jsx(i,{of:v}),`
`,t.jsx(e.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),`
`,t.jsx(r,{rules:[{positive:{component:t.jsx(n,{steps:S,textPlacement:"vertical",className:"monday-storybook-multiStepIndicator_big-size"}),description:"Be consistent with the information you include under each step. If you’re using a subtitle on one step, use for all steps."},negative:{component:t.jsx(n,{steps:I,textPlacement:"vertical",className:"monday-storybook-multiStepIndicator_big-size"}),description:"Don’t place subheader on one step only."}},{positive:{component:t.jsxs(e.div,{className:"monday-storybook-multiStepIndicator_box-wrapper",children:[t.jsx(n,{steps:d,textPlacement:"vertical",className:"monday-storybook-multiStepIndicator_small-size"}),t.jsx(e.div,{className:"monday-storybook-multiStepIndicator_spacing"})]}),description:"While using the wizard component, keep the default spacing between the wizard steps, even if the wizard width is smaller than the page width."},className:"monday-storybook-multiStepIndicator_overflow",negative:{component:t.jsxs(e.div,{className:"monday-storybook-multiStepIndicator_box-wrapper",children:[t.jsx(n,{steps:d,textPlacement:"vertical",className:"monday-storybook-multiStepIndicator_line",dividerComponentClassName:"monday-storybook-multiStepIndicator_line_divider"}),t.jsx(e.div,{className:"monday-storybook-multiStepIndicator_spacing"})]}),description:"Do not override the spacing between the wizard steps according to the page width."}}]}),`
`,t.jsx(e.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),`
`,t.jsx(e.h3,{id:"multi-step-wizard",children:"Multi step wizard"}),`
`,t.jsx(i,{of:T}),`
`,t.jsx(e.h2,{id:"related-components",children:"Related components"}),`
`,t.jsx(p,{componentsNames:["Tabs","Breadcrumbs","Steps"]})]})}function jt(s={}){const{wrapper:e}={...u(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(c,{...s})}):c(s)}function o(s,e){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{jt as default};
