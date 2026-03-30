import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as l}from"./index-BfNsOeqz.js";import{M as d,S as g}from"./index--Ip3RW-P.js";import{S as h,a as u,U as x}from"./spacing.stories-Ct-tIjp_.js";import{s as f}from"./frame-C1tr8Naz.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CHEwd5ob.js";import"./index-BTOHs1-0.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./TableBody-xBGOVDZ7.js";import"./index-BpvXyOxN.js";import"./test-ids-utils-BSSgvOTA.js";import"./constants-DEBzQJwg.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./ssr-utils-Do6V6AqB.js";import"./Info-LYrK74vc.js";import"./Flex-7H_pA1dJ.js";import"./Clickable-DnQGpUs5.js";import"./useClickableProps-Ul4gSWS9.js";import"./keyCodes-BPHiFfps.js";import"./constants-CenpDJY1.js";import"./noop-DX6rZLP_.js";import"./camelCase-CO1PkVrH.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./Icon-BxXgVPAg.js";import"./useEventListener-CkU0kzyk.js";import"./useKeyEvent-BeN1aNjK.js";import"./Text-BXsRVAov.js";import"./Typography-Bce0_5U4.js";import"./index-CqkoFCDi.js";import"./debounce-D3NSP8gs.js";import"./Tooltip-BB_8xbyk.js";import"./index-BKMrxRLL.js";import"./CSSTransition-Dhcv5TuQ.js";import"./extends-CCbyfPlC.js";import"./IconButton-DJtmQjMs.js";import"./AddSmall-B_5viru5.js";import"./Button-CAkxRwa_.js";import"./Loader-B0wBwV8P.js";import"./Skeleton-DluMJWok.js";import"./SortDescending-zUObFE7J.js";const j=""+new URL("FlexSpacingExample-DCg7ji93.png",import.meta.url).href,v=""+new URL("Do1-D6wK0u5b.png",import.meta.url).href,y=""+new URL("Dont1-2AW7VfcX.png",import.meta.url).href,w=""+new URL("Do2-BJouDBNE.png",import.meta.url).href,C=""+new URL("Dont2-CZG8RIyq.png",import.meta.url).href,D=""+new URL("Do3-B4ACi_W6.png",import.meta.url).href,b=""+new URL("Dont3-CSBUN9Vu.png",import.meta.url).href,U="_imageContainer_1d4ef_1",S="_imageFlex_1d4ef_7",R="_rulesImage_1d4ef_12",t={imageContainer:U,imageFlex:S,rulesImage:R};function c(s){const n={h1:"h1",h2:"h2",h4:"h4",img:"img",p:"p",...l(),...s.components},{Canvas:a,ComponentRules:o,RelatedComponents:r,StorybookLink:p,UsageGuidelines:m}=n;return a||i("Canvas"),o||i("ComponentRules"),r||i("RelatedComponents"),p||i("StorybookLink"),m||i("UsageGuidelines"),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(n.h1,{id:"spacing",children:"Spacing"}),`
`,e.jsx(n.p,{children:`A spacing scale is a foundational part of a design system,
providing a set of consistent spacing values for margins, padding, and gaps.
Clear spacing patterns enable designers and developers to build cohesive layouts while maintaining hierarchy and readability,
and creating more intuitive user experiences.`}),`
`,e.jsx(n.h2,{id:"the-spacing-scale",children:"The spacing scale"}),`
`,e.jsx(n.p,{children:`Our spacing scale is modular, which ensures flexibility, alignment, and balance across our platform.
It includes both small increments for small components or detailed designs, and large increments for patterns or layouts.`}),`
`,e.jsx(n.p,{children:`Each spacing value has its own token.
The tokens are used inside the components and should also be included between the components when building a layout.`}),`
`,e.jsx(u,{}),`
`,e.jsx(n.h2,{id:"applying-the-spacing-scale",children:"Applying the spacing scale"}),`
`,e.jsx(n.h4,{id:"different-use-cases-require-different-ranges-of-spacing-to-achieve-the-best-outcomes-here-are-a-few-guidelines-to-follow",children:"Different use cases require different ranges of spacing to achieve the best outcomes. Here are a few guidelines to follow:"}),`
`,e.jsx(m,{guidelines:["Stay consistent with paddings and sizes across similar UI patterns.","Group similar items together using similar spacing.","The distance between elements creates semantic meaning: elements that are placed close to one another are assumed to be related.","Use larger spacing around elements to emphasize their importance and draw more focus to them."]}),`
`,e.jsx(n.h2,{id:"code-example",children:"Code example"}),`
`,e.jsx(g,{language:"css",dark:!0,code:`
  margin: var(--space-8);
margin: var(--space-8) var(--space-4);
margin: var(--space-32) 0 var(--space-16) 0;
margin-right: var(--space-12);
          
padding: var(--space-16);
padding: var(--space-20) var(--space-8);
padding: var(--space-32) var(--space-16) 0 var(--space-16);          
`}),`
`,e.jsx(n.h2,{id:"usage-and-examples",children:"Usage and examples"}),`
`,e.jsx(a,{of:x,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"flex-spacing",children:"Flex spacing"}),`
`,e.jsx(n.p,{children:"Flex spacing is a form of spacing that creates equal distance between components. Vibe provides a flex component that utilizes the spacing scale to set consistent spacing between items."}),`
`,e.jsxs(n.p,{children:["For easier use, you can use our ",e.jsx(p,{page:"Layout/Flex",children:"flex component"})," to position sub-elements. This component works both horizontally and vertically, avoiding the need for a custom CSS file."]}),`
`,e.jsx(f,{className:t.imageContainer,children:e.jsx("img",{className:t.imageFlex,src:j,alt:""})}),`
`,e.jsx(n.h2,{id:"dos-and-donts",children:"Do’s and Dont’s"}),`
`,e.jsx(o,{rules:[{componentContainerClassName:t.rulesImage,positive:{component:e.jsx(n.img,{src:v,alt:"",style:{maxWidth:"100%"}}),description:"Use small-sized spacing to group related items together, so users can scan the content easily."},negative:{component:e.jsx(n.img,{src:y,alt:"",style:{maxWidth:"100%"}}),description:"Don't use large-sized spacing between related items."}},{componentContainerClassName:t.rulesImage,positive:{component:e.jsx(n.img,{src:w,alt:"",style:{maxWidth:"100%"}}),description:"Use the same spacing for similar items or patterns."},negative:{component:e.jsx(n.img,{src:C,alt:"",style:{maxWidth:"100%"}}),description:"Don't use different spacing for similar items or patterns."}},{componentContainerClassName:t.rulesImage,positive:{component:e.jsx(n.img,{src:D,alt:"",style:{maxWidth:"100%"}}),description:"Use larger spacing to emphasize key elements, such as headings and CTAs."},negative:{component:e.jsx(n.img,{src:b,alt:"",style:{maxWidth:"100%"}}),description:"Don't use small spacing if you want to emphasize an element."}}]}),`
`,e.jsx(n.h2,{id:"up-next",children:"Up next"}),`
`,e.jsx(r,{componentsNames:["typography","shadow","colors"]})]})}function ve(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}function i(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ve as default};
