import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as l}from"./index-BfNsOeqz.js";import{M as d,S as g}from"./index-whpNpd5R.js";import{S as h,a as u,U as x}from"./spacing.stories-DZZJvnI9.js";import{s as f}from"./frame-C1tr8Naz.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CyNHpt1V.js";import"./index-Btn-aQnD.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./TableBody-CZReKGjQ.js";import"./index-BpvXyOxN.js";import"./test-ids-utils-DBF55-X4.js";import"./constants-BFnbiwiw.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./ssr-utils-Do6V6AqB.js";import"./withStaticProps-DfSG2La2.js";import"./IconButton-JurPCAum.js";import"./Tooltip-Dvm8S2lu.js";import"./typesciptCssModulesHelper-DQ-2Bs84.js";import"./DialogConstants-C6vctR8T.js";import"./Flex-DIp2zxrn.js";import"./Clickable-DHJc0oio.js";import"./useClickableProps-f6_q31tC.js";import"./keyCodes-BtXLi1ea.js";import"./useMergeRef-DmpwoaL5.js";import"./function-utils-BT-tMqNc.js";import"./noop-DX6rZLP_.js";import"./withStaticProps-BEcHOprC.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./Icon-CpEYCgaz.js";import"./useEventListener-CkU0kzyk.js";import"./index-Dedp4W2d.js";import"./CSSTransition-CWtXmFMf.js";import"./extends-B6xKY8K9.js";import"./sizes-BOsbvv4u.js";import"./Button-DE1bV8I3.js";import"./Loader-BabV-h63.js";import"./AddSmall-DFewX5rK.js";import"./_tslib-Ct4JumdA.js";import"./Text-XElpACAf.js";import"./TypographyConstants-BmKPiGPE.js";import"./useIsOverflowing-CqkoFCDi.js";import"./debounce-D3NSP8gs.js";import"./Info-jvFNh0HS.js";import"./Skeleton-C1JxO6Wz.js";import"./SortDescending-DfYW2xR2.js";const j=""+new URL("FlexSpacingExample-DCg7ji93.png",import.meta.url).href,v=""+new URL("Do1-D6wK0u5b.png",import.meta.url).href,y=""+new URL("Dont1-2AW7VfcX.png",import.meta.url).href,w=""+new URL("Do2-BJouDBNE.png",import.meta.url).href,C=""+new URL("Dont2-CZG8RIyq.png",import.meta.url).href,D=""+new URL("Do3-B4ACi_W6.png",import.meta.url).href,b=""+new URL("Dont3-CSBUN9Vu.png",import.meta.url).href,U="_imageContainer_1d4ef_1",S="_imageFlex_1d4ef_7",R="_rulesImage_1d4ef_12",s={imageContainer:U,imageFlex:S,rulesImage:R};function c(t){const n={h1:"h1",h2:"h2",h4:"h4",img:"img",p:"p",...l(),...t.components},{Canvas:o,ComponentRules:a,RelatedComponents:r,StorybookLink:p,UsageGuidelines:m}=n;return o||i("Canvas"),a||i("ComponentRules"),r||i("RelatedComponents"),p||i("StorybookLink"),m||i("UsageGuidelines"),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
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
`,e.jsx(o,{of:x,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"flex-spacing",children:"Flex spacing"}),`
`,e.jsx(n.p,{children:"Flex spacing is a form of spacing that creates equal distance between components. Vibe provides a flex component that utilizes the spacing scale to set consistent spacing between items."}),`
`,e.jsxs(n.p,{children:["For easier use, you can use our ",e.jsx(p,{page:"Layout/Flex",children:"flex component"})," to position sub-elements. This component works both horizontally and vertically, avoiding the need for a custom CSS file."]}),`
`,e.jsx(f,{className:s.imageContainer,children:e.jsx("img",{className:s.imageFlex,src:j,alt:""})}),`
`,e.jsx(n.h2,{id:"dos-and-donts",children:"Do’s and Dont’s"}),`
`,e.jsx(a,{rules:[{componentContainerClassName:s.rulesImage,positive:{component:e.jsx(n.img,{src:v,alt:"",style:{maxWidth:"100%"}}),description:"Use small-sized spacing to group related items together, so users can scan the content easily."},negative:{component:e.jsx(n.img,{src:y,alt:"",style:{maxWidth:"100%"}}),description:"Don't use large-sized spacing between related items."}},{componentContainerClassName:s.rulesImage,positive:{component:e.jsx(n.img,{src:w,alt:"",style:{maxWidth:"100%"}}),description:"Use the same spacing for similar items or patterns."},negative:{component:e.jsx(n.img,{src:C,alt:"",style:{maxWidth:"100%"}}),description:"Don't use different spacing for similar items or patterns."}},{componentContainerClassName:s.rulesImage,positive:{component:e.jsx(n.img,{src:D,alt:"",style:{maxWidth:"100%"}}),description:"Use larger spacing to emphasize key elements, such as headings and CTAs."},negative:{component:e.jsx(n.img,{src:b,alt:"",style:{maxWidth:"100%"}}),description:"Don't use small spacing if you want to emphasize an element."}}]}),`
`,e.jsx(n.h2,{id:"up-next",children:"Up next"}),`
`,e.jsx(r,{componentsNames:["typography","shadow","colors"]})]})}function be(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}function i(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{be as default};
