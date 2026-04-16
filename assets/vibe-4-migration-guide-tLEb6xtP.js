import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as o}from"./index-BfNsOeqz.js";import{M as d}from"./index-D8bByWG8.js";import"./DiffCodeBlock-CdSfgPcm.js";import{l as i}from"./tip-CK87uV3P.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Du8WtWvp.js";import"./index-B460DqIH.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-BpvXyOxN.js";import"./Flex-qb9MRXYX.js";import"./withStaticProps-DibdfTK_.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Migration Guide"}),`
`,e.jsx(n.h1,{id:"vibe-4-migration-guide",children:"Vibe 4 Migration Guide"}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{style:{lineHeight:"1.8"},children:[e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#whats-new-",children:"What's New ✨"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#migration-steps-",children:"Migration Steps 🚀"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#breaking-changes-",children:"Breaking Changes 🚨"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#components",children:"Components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#hooks",children:"Hooks"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#css-and-design-tokens",children:"CSS and Design Tokens"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#faq-",children:"FAQ ❓"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#help-",children:"Help 🙏"})}),`
`]}),e.jsxs(n.p,{children:["Vibe 4 is a major update to the Vibe design system, built for ",e.jsx(n.strong,{children:"React 19 compatibility"}),". It also delivers a leaner bundle, modern APIs, and stronger type safety. Legacy components, deprecated enums, and outdated dependencies have been removed in favor of simpler, more consistent alternatives."]}),e.jsx(i,{title:"Older versions migrations",emoji:!1,children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["From v2 to v3 see ",e.jsx(n.a,{href:"https://vibe.monday.com/v3/?path=/docs/migration-guide--docs",rel:"nofollow",children:"Vibe 3 migration guide"})]}),`
`,e.jsxs(n.li,{children:["From v1 to v2 see ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/tree/master/packages/docs/src/pages/migration-guide/vibe2-migration-guide.md",rel:"nofollow",children:"Vibe 2 migration guide"})]}),`
`]})}),e.jsx(n.h2,{id:"whats-new-",children:"What's New ✨"}),e.jsx(n.h3,{id:"react-19-support",children:"React 19 support"}),e.jsx(n.p,{children:"Vibe 4 is fully compatible with React 19."}),e.jsxs(n.p,{children:["If your app is upgrading to React 19, you ",e.jsx(n.strong,{children:"must"})," upgrade to Vibe 4 — Vibe 3 is not compatible with React 19."]}),e.jsx(n.h3,{id:"new-component-implementations",children:"New component implementations"}),e.jsx(n.p,{children:"Several components have been completely rewritten with new APIs:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dropdown"})," - New custom implementation replacing the old ",e.jsx(n.code,{children:"react-select"}),"-based Dropdown"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modal"})," - New component with layout-based API (",e.jsx(n.code,{children:"ModalBasicLayout"}),", ",e.jsx(n.code,{children:"ModalMediaLayout"}),", etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AttentionBox"})," - New implementation with simplified props"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DatePicker"})," - New implementation using native ",e.jsx(n.code,{children:"Date"})," objects and ",e.jsx(n.code,{children:"date-fns"})," instead of ",e.jsx(n.code,{children:"moment"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dialog/Tooltip/Tipseen"})," - Now powered by Floating UI (replacing Popper.js)"]}),`
`]}),e.jsx(n.h3,{id:"smaller-bundle",children:"Smaller bundle"}),e.jsx(n.p,{children:"Several internal runtime dependencies have been removed resulting in a significantly smaller bundle."}),e.jsx(n.h3,{id:"no-more-enums-or-static-properties",children:"No more enums or static properties"}),e.jsxs(n.p,{children:["All deprecated enum exports (e.g. ",e.jsx(n.code,{children:"ButtonType"}),", ",e.jsx(n.code,{children:"DialogPositionEnum"}),") and static property accessors (e.g. ",e.jsx(n.code,{children:"Button.sizes.LARGE"}),") have been removed in favor of string literals, which are type-safe, tree-shakeable, and provide the same IntelliSense experience."]}),e.jsx(n.h3,{id:"standard-aria-props",children:"Standard ARIA props"}),e.jsxs(n.p,{children:["Custom camelCase ARIA props (",e.jsx(n.code,{children:"ariaLabel"}),", ",e.jsx(n.code,{children:"ariaHidden"}),", etc.) have been replaced with the standard HTML ",e.jsx(n.code,{children:"aria-*"})," attributes that React natively supports, eliminating an unnecessary abstraction layer."]}),e.jsx(n.h2,{id:"migration-steps-",children:"Migration Steps 🚀"}),e.jsx(n.h3,{id:"with-ai-recommended",children:"With AI (recommended)"}),e.jsx(i,{emoji:!1,type:"success",title:"Install the Vibe MCP",children:e.jsxs(n.p,{children:["To migrate faster and easier using AI, make sure you have the ",e.jsx(n.a,{href:"?path=/docs/mcp--docs",children:"Vibe MCP server"})," installed."]})}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Ask your AI assistant:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Help me migrate this project from Vibe 3 to Vibe 4 using the Vibe MCP v4 migration tool
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"This will scan your codebase, identify the breaking changes, run the codemods automatically, and will fix all the issues."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Review the changes and test your application thoroughly."})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run your code formatter to clean up any formatting changes from the codemod (optional)."}),`
`]}),`
`]}),e.jsx(n.h3,{id:"manually",children:"Manually"}),e.jsx(n.p,{children:"If you prefer to migrate manually, follow these steps:"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Update ",e.jsx(n.code,{children:"@vibe/core"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @vibe/core@^4.0.0
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run the automated migration codemod:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @vibe/codemod -m v4
`})}),`
`,e.jsxs(n.p,{children:["The codemod handles enum-to-string-literal conversions, ARIA prop renames, Icon prop renames, and several component-specific migrations. For more options, see the ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/blob/master/packages/codemod/README.md",rel:"nofollow",children:"@vibe/codemod docs"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Follow the ",e.jsx(n.a,{href:"#breaking-changes-",children:"Breaking Changes"})," section below and apply any remaining manual changes."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Review the changes and test your application thoroughly."})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run your code formatter to clean up any formatting changes from the codemod (optional)."}),`
`]}),`
`]}),e.jsx(n.h2,{id:"breaking-changes-",children:"Breaking Changes 🚨"}),e.jsxs(n.p,{children:["The following changes are ",e.jsx(n.strong,{children:"complementary to the migration codemod"})," and may require manual intervention. If you prefer to migrate entirely by hand (without ",e.jsx(n.code,{children:"@vibe/codemod"}),"), refer to the ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/blob/master/packages/docs/src/pages/migration-guide/v4-changelog.md",rel:"nofollow",children:"Complete Vibe 4 changelog"}),"."]}),e.jsx(n.h3,{id:"components",children:"Components"}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"AttentionBox"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component has been completely rewritten with a new API. Legacy ",e.jsx(n.code,{children:"AttentionBox"})," removed, new implementation (previously at ",e.jsx(n.code,{children:"@vibe/core/next"}),") promoted to ",e.jsx(n.code,{children:"@vibe/core"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AttentionBoxLink"})," component removed, use the ",e.jsx(n.code,{children:"link"})," prop instead"]}),`
`,e.jsxs(n.li,{children:["Type values changed: ",e.jsx(n.code,{children:'"success"'})," → ",e.jsx(n.code,{children:'"positive"'}),", ",e.jsx(n.code,{children:'"danger"'})," → ",e.jsx(n.code,{children:'"negative"'}),", ",e.jsx(n.code,{children:'"dark"'})," → ",e.jsx(n.code,{children:'"neutral"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"entryAnimation"})," prop → ",e.jsx(n.code,{children:"animate"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"withoutIcon"})," / ",e.jsx(n.code,{children:"withIconWithoutHeader"})," props removed — use ",e.jsx(n.code,{children:"icon={false}"})]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Clickable"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ariaHasPopup"})," now accepts ",e.jsx(n.code,{children:"boolean"})," only (was ",e.jsx(n.code,{children:"boolean | string"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tabIndex"})," now accepts ",e.jsx(n.code,{children:"number"})," only (was ",e.jsx(n.code,{children:"string | number"}),")"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"DatePicker"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The legacy DatePicker (based on ",e.jsx(n.code,{children:"react-dates"})," and ",e.jsx(n.code,{children:"moment.js"}),") has been replaced with a completely new component (previously at ",e.jsx(n.code,{children:"@vibe/core/next"}),") with a different visual design, and promoted to ",e.jsx(n.code,{children:"@vibe/core"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date"})," prop now uses native ",e.jsx(n.code,{children:"Date"})," objects instead of ",e.jsx(n.code,{children:"moment.Moment"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onPickDate"})," prop renamed to ",e.jsx(n.code,{children:"onDateChange"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"range"})," boolean prop replaced with ",e.jsx(n.code,{children:'mode: "single" | "range"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moment"})," no longer required as a peer dependency"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Dialog"})}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The legacy class-based Dialog (Popper.js) has been replaced with a new functional Dialog (Floating UI)"}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"modifiers"})," prop (Popper.js) has been removed — use ",e.jsx(n.a,{href:"https://floating-ui.com/docs/middleware",rel:"nofollow",children:"middleware"})," prop (Floating UI) instead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addKeyboardHideShowTriggersByDefault"})," now defaults to ",e.jsx(n.code,{children:"true"})," — set it explicitly to ",e.jsx(n.code,{children:"false"})," if you relied on the previous default"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Dropdown"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The old ",e.jsx(n.code,{children:"react-select"}),"-based Dropdown has been removed. The new custom Dropdown (previously at ",e.jsx(n.code,{children:"@vibe/core/next"}),") is now the default with a completely different API. See the ",e.jsx(n.a,{href:"?path=/docs/components-dropdown-migration-guide--docs",children:"Dropdown Migration Guide"})," for full details"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Combobox"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Combobox"})," component is marked as ",e.jsx(n.strong,{children:"deprecated"})," and will be removed in a future version. Use ",e.jsx(n.a,{href:"?path=/docs/components-dropdown--docs",children:"Dropdown with box mode"})," instead"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Icon"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"})," prop now applies to ",e.jsx(n.code,{children:'type="src"'})," icons (previously only affected ",e.jsx(n.code,{children:'type="svg"'}),")"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"MenuButton"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["MenuButton now passes ",e.jsx(n.code,{children:"focusItemIndexOnMount={0}"})," to its Menu children by default, so the first menu item is focused when the menu opens"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"MenuItem"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"children"})," prop now accepts only a single ",e.jsx(n.code,{children:"MenuChild"}),", not ",e.jsx(n.code,{children:"MenuChild[]"})," (passing an array was already a runtime error in v3)"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The legacy Modal has been removed and replaced with a completely new Modal component with a different API (previously at ",e.jsx(n.code,{children:"@vibe/core/next"}),") and promoted to ",e.jsx(n.code,{children:"@vibe/core"}),`
See the `,e.jsx(n.a,{href:"?path=/docs/components-modal--docs",children:"Modal documentation"})," for the full API"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Steps"})}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The finish button now renders by default on the last step"}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tipseen"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"modifiers"})," prop (Popper.js) has been removed — use ",e.jsx(n.a,{href:"https://floating-ui.com/docs/middleware",rel:"nofollow",children:e.jsx(n.code,{children:"middleware"})})," instead (same as Dialog)"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tooltip"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"modifiers"})," prop (Popper.js) has been removed — use ",e.jsx(n.a,{href:"https://floating-ui.com/docs/middleware",rel:"nofollow",children:e.jsx(n.code,{children:"middleware"})})," instead (same as Dialog)"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Toggle"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The duplicate ",e.jsx(n.code,{children:'data-testid="toggle"'})," has been removed from the internal visual ",e.jsx(n.code,{children:"div"})," — the test ID is now only on the ",e.jsx(n.code,{children:"<input>"})," element. Update any test selectors that targeted the visual div."]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"VirtualizedGrid"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"itemRenderer"})," return type corrected to ",e.jsx(n.code,{children:"ReactElement"})," — if TypeScript reports errors, ensure your renderer explicitly returns ",e.jsx(n.code,{children:"ReactElement"})]}),`
`]}),e.jsx(n.h3,{id:"hooks",children:"Hooks"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useMergeRefs"})})," removed from ",e.jsx(n.code,{children:"@vibe/core"})," — use the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/react-merge-refs",rel:"nofollow",children:e.jsx(n.code,{children:"react-merge-refs"})})," package instead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useListenFocusTriggers"})})," removed from ",e.jsx(n.code,{children:"@vibe/core"})," — inline the logic using ",e.jsx(n.code,{children:"useEventListener"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useActiveDescendantListFocus"})})," — ",e.jsx(n.code,{children:"onItemClickCallback"})," and ",e.jsx(n.code,{children:"createOnItemClickCallback"})," return values removed, use ",e.jsx(n.code,{children:"onItemClick"})," directly"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useKeyEvent"})})," — ",e.jsx(n.code,{children:"callback"})," type changed from ",e.jsx(n.code,{children:"GenericEventCallback"})," to ",e.jsx(n.code,{children:"KeyboardEventCallback"})," (native ",e.jsx(n.code,{children:"KeyboardEvent"}),")"]}),`
`]}),e.jsx(n.h3,{id:"css-and-design-tokens",children:"CSS and Design Tokens"}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Spacing Tokens"})}),e.jsx(n.p,{children:"The deprecated semantic spacing CSS custom properties have been removed. Replace with numeric tokens:"}),e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Removed Token"}),e.jsx(n.th,{children:"Replacement"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--spacing-xs"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--space-4"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--spacing-small"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--space-8"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--spacing-medium"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--space-16"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--spacing-large"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--space-24"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--spacing-xl"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--space-32"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--spacing-xxl"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--space-48"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"--spacing-xxxl"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"--space-64"})})]})]})]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Auto-fix available"}),": Run ",e.jsx(n.code,{children:'npx stylelint --fix "**/*.scss"'})," with the ",e.jsx(n.code,{children:"@vibe/style/use-new-spacing-tokens"})," rule enabled."]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Input Padding"})}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"padding-inline-start"})," reduced from ",e.jsx(n.code,{children:"16px"})," to ",e.jsx(n.code,{children:"8px"})," across TextField, BaseInput, TextArea, and Dropdown Trigger."]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Input Placeholder Color"})}),e.jsxs(n.p,{children:["Inputs now use ",e.jsx(n.code,{children:"var(--placeholder-color)"})," instead of ",e.jsx(n.code,{children:"var(--secondary-text-color)"}),"."]}),e.jsx(n.h2,{id:"faq-",children:"FAQ ❓"}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"What is the best way to migrate to Vibe 4?"})}),e.jsxs(n.p,{children:["Follow the ",e.jsx(n.a,{href:"#migration-steps-",children:"Migration Steps"})," above. It is highly recommended to use the Vibe MCP to handle all the changes."]}),e.jsx(n.p,{children:e.jsxs(n.strong,{children:["I was using enums like ",e.jsx(n.code,{children:"Button.sizes.LARGE"})," — what do I use now?"]})}),e.jsxs(n.p,{children:["Use string literals: ",e.jsx(n.code,{children:'"large"'}),". They are fully type-safe and provide the same IntelliSense autocomplete in your IDE. Run ",e.jsx(n.code,{children:"npx @vibe/codemod -m enums"})," to migrate automatically."]}),e.jsx(n.p,{children:e.jsxs(n.strong,{children:["I was importing components from ",e.jsx(n.code,{children:"@vibe/core/next"})," — what changed?"]})}),e.jsxs(n.p,{children:["Most components from ",e.jsx(n.code,{children:"@vibe/core/next"})," (AttentionBox, Dropdown, DatePicker, Dialog, Modal) have been promoted to ",e.jsx(n.code,{children:"@vibe/core"}),". Update your imports to use ",e.jsx(n.code,{children:"@vibe/core"})," directly and follow the API changes (if any)."]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Is Vibe 4 compatible with React 19?"})}),e.jsxs(n.p,{children:["Yes. Vibe 4 is fully compatible with React 19. Note that Vibe 3 is ",e.jsx(n.strong,{children:"not"})," compatible with React 19, so if you are upgrading to React 19, you must upgrade to Vibe 4."]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"What if I don't want to migrate to Vibe 4?"})}),e.jsx(n.p,{children:"You can continue using Vibe 3 with React 16–18, but it will only receive critical bug fixes. New features, improvements, and React 19 support are only available in Vibe 4."}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"The migration script failed — what should I do?"})}),e.jsxs(n.p,{children:["Run the script in the root of your project on a clean git branch. If issues persist, please ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/issues/new/choose",rel:"nofollow",children:"report an issue"})," with the error message and your environment details."]})]}),`
`,e.jsx(n.h2,{id:"help-",children:"Help 🙏"}),`
`,e.jsxs(n.p,{children:["If you have any questions, feedback, or need help, please don't hesitate to reach out. You can provide ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/discussions",rel:"nofollow",children:"feedback"})," or ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/issues/new/choose",rel:"nofollow",children:"report issues"})," in the ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe",rel:"nofollow",children:"Vibe repository"})," on GitHub."]})]})}function v(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{v as default};
