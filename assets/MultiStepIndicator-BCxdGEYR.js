import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as u}from"./index-BfNsOeqz.js";import{M as h}from"./index-bq5mHL_I.js";import{l as x}from"./tip-CK87uV3P.js";import{m as n}from"./storybook-link-bOv1uh8g.js";import{M as f,O as j,P as g,T as b,S as y,F as w,a as v,b as T}from"./MultiStepIndicator.stories-DHr5Fb6f.js";import{M as r}from"./MultiStepIndicator-J0JRZSDA.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BhqxqsP0.js";import"./index-Deuq_OHB.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-BpvXyOxN.js";import"./Flex-qb9MRXYX.js";import"./withStaticProps-DibdfTK_.js";import"./_tslib-BMUU9Vyh.js";import"./link-CVYAeutz.js";import"./index-DyVibw0Y.js";import"./createComponentTemplate-B08h-OOW.js";import"./Upgrade-CC_w3yRG.js";import"./_tslib-Ct4JumdA.js";import"./Divider-5b08Ypxw.js";import"./test-ids-utils-BiWUJdxm.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./withStaticProps-DfSG2La2.js";import"./function-utils-C5K4iOy1.js";import"./useClickableProps-lXORseOQ.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./ssr-utils-Do6V6AqB.js";import"./index-CkU0kzyk.js";import"./index-gB5zY9qh.js";import"./HiddenText-At1riZfB.js";import"./Clickable-tjPirwzH.js";import"./noop-DX6rZLP_.js";import"./SwitchTransition-BdYiaobP.js";import"./CSSTransition-CWtXmFMf.js";import"./extends-B6xKY8K9.js";import"./Check-CxyRTNy4.js";import"./camelCase-CO1PkVrH.js";import"./Icon-BKjd_X8Z.js";const S=[{status:"fulfilled",titleText:"Plan options",subtitleText:"Choose plan"},{status:"pending",titleText:"Seats",subtitleText:"Number of users"},{status:"pending",titleText:"Paying method",subtitleText:"How to pay"}],z=[{status:"fulfilled",titleText:"Plan options",subtitleText:""},{status:"pending",titleText:"Seats",subtitleText:"Number of users"},{status:"pending",titleText:"Paying method",subtitleText:"How to pay"}],d=[{status:"fulfilled",titleText:"Plan",subtitleText:""},{status:"pending",titleText:"Seats",subtitleText:""},{status:"pending",titleText:"Method",subtitleText:""}],I=()=>e.jsxs(x,{title:"Not what you were looking for?",children:["In order to navigate between content without a linear progress, use the"," ",e.jsx(n,{page:"Components/Tabs",size:n.sizes.SMALL,children:"Tabs"})," ","or"," ",e.jsx(n,{page:"Components/ButtonGroup",size:n.sizes.SMALL,children:"Button group"})," ","component."]});function c(s){const t={code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...s.components},{Canvas:i,ComponentRules:a,PropsTable:p,RelatedComponents:l,UsageGuidelines:m}=t;return i||o("Canvas"),a||o("ComponentRules"),p||o("PropsTable"),l||o("RelatedComponents"),m||o("UsageGuidelines"),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:f}),`
`,e.jsx(t.h1,{id:"multistepindicator",children:"MultiStepIndicator"}),`
`,e.jsx(t.p,{children:"Tabular navigation component that helps users visualize and interact with a multi-step process."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { MultiStepIndicator } from "@vibe/core";
`})}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(m,{guidelines:["Use wizard to break a larger goal into manageable steps.","If a workflow needs more than 6 steps, consider how you might simplify it or break it up into multiple tasks.","Always position the wizard at the top of the multi-step process so that the user has a common reference point as they move between steps."]}),`
`,e.jsx(I,{}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"placements",children:"Placements"}),`
`,e.jsx(t.p,{children:"Placements"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.p,{children:"There are 4 types: Primary, success, danger, dark."}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(t.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsx(t.p,{children:"Compact is a smaller version of the Regular Wizard Stepper, and is suitable for smaller containers. In case you need to display more content, use the Regular size. As of now, vertical placement is not supported."}),`
`,e.jsx(i,{of:y}),`
`,e.jsx(t.h3,{id:"fulfilled-icons",children:"Fulfilled Icons"}),`
`,e.jsx(i,{of:w}),`
`,e.jsx(t.h3,{id:"transition-animation",children:"Transition Animation"}),`
`,e.jsx(t.p,{children:"State transition automatic example"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(t.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),`
`,e.jsx(a,{rules:[{positive:{component:e.jsx(r,{steps:S,textPlacement:"vertical",className:"monday-storybook-multiStepIndicator_big-size"}),description:"Be consistent with the information you include under each step. If you’re using a subtitle on one step, use for all steps."},negative:{component:e.jsx(r,{steps:z,textPlacement:"vertical",className:"monday-storybook-multiStepIndicator_big-size"}),description:"Don’t place subheader on one step only."}},{positive:{component:e.jsxs(t.div,{className:"monday-storybook-multiStepIndicator_box-wrapper",children:[e.jsx(r,{steps:d,textPlacement:"vertical",className:"monday-storybook-multiStepIndicator_small-size"}),e.jsx(t.div,{className:"monday-storybook-multiStepIndicator_spacing"})]}),description:"While using the wizard component, keep the default spacing between the wizard steps, even if the wizard width is smaller than the page width."},className:"monday-storybook-multiStepIndicator_overflow",negative:{component:e.jsxs(t.div,{className:"monday-storybook-multiStepIndicator_box-wrapper",children:[e.jsx(r,{steps:d,textPlacement:"vertical",className:"monday-storybook-multiStepIndicator_line",dividerComponentClassName:"monday-storybook-multiStepIndicator_line_divider"}),e.jsx(t.div,{className:"monday-storybook-multiStepIndicator_spacing"})]}),description:"Do not override the spacing between the wizard steps according to the page width."}}]}),`
`,e.jsx(t.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),`
`,e.jsx(t.h3,{id:"multi-step-wizard",children:"Multi step wizard"}),`
`,e.jsx(i,{of:T}),`
`,e.jsx(t.h2,{id:"related-components",children:"Related components"}),`
`,e.jsx(l,{componentsNames:["Tabs","Breadcrumbs","Steps"]})]})}function fe(s={}){const{wrapper:t}={...u(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(c,{...s})}):c(s)}function o(s,t){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{fe as default};
