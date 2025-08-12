import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{useMDXComponents as l}from"./index-CXa8ra7y.js";import{M as d}from"./index-DvTj7gFf.js";import{D as s}from"./DiffCodeBlock-BrZiYZKc.js";import{l as t}from"./tip-BKixvd9t.js";import"./index-Hemj67b4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-vW8jzX8Q.js";import"./index-BrHWkShK.js";import"./index-D63y3F3s.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-BpvXyOxN.js";import"./Flex-DaTSFknt.js";import"./withStaticProps-DibdfTK_.js";const c=""+new URL("props-DFVwWYvT.gif",import.meta.url).href,h=""+new URL("package-split-DkGby0Jr.png",import.meta.url).href,a=""+new URL("layers-DGCxNTWT.gif",import.meta.url).href;function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components},{StorybookLink:i}=n;return i||x("StorybookLink"),e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Migration Guide"}),`
`,e.jsx(n.h1,{id:"vibe-3-migration-guide",children:"Vibe 3 Migration Guide"}),`
`,e.jsxs("div",{style:{lineHeight:"1.8"},children:[e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#intro",children:"Intro"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#new-features-",children:"New Features ✨"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#migration-steps-",children:"Migration Steps 🚀"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#breaking-changes-",children:"Breaking Changes 🚨"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#general",children:"General"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#typography",children:"Typography"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#components",children:"Components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#colors",children:"Colors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icons",children:"Icons"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#faq-",children:"FAQ ❓"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#help-",children:"Help 🙏"})}),`
`]}),e.jsx(n.h2,{id:"intro",children:"Intro"}),e.jsx(n.p,{children:"Vibe 3 is a major update to the Vibe design system, introducing several new features, enhancements, and breaking changes. This guide will walk you through the changes to help you transition smoothly from v2 to v3."}),e.jsx(t,{title:"Migration from v1 to v2",emoji:!1,children:e.jsxs(n.p,{children:["To migrate from v1 to v2, please refer to the ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/tree/master/docs/vibe2-migration-guide.md",rel:"nofollow",children:`Vibe 2 migration
guide`})]})}),e.jsx(n.h2,{id:"new-features-",children:"New Features ✨"}),e.jsx(n.h3,{id:"package-rename",children:"Package rename"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"monday-ui-react-core"})," package has been renamed to ",e.jsx(n.code,{children:"@vibe/core"})," to better reflect the library's purpose and align with the Vibe branding. In addition, the ",e.jsx(n.code,{children:"/icons"})," entry point has been moved to a new ",e.jsx(n.code,{children:"@vibe/icons"})," package."]}),e.jsx("img",{src:h,alt:"packages split diagram",width:"500"}),e.jsx(n.h3,{id:"reduced-bundle-size",children:"Reduced bundle size"}),e.jsx(n.p,{children:"By removing CommonJS support, dividing the library into packages, and optimizing the library exports - the bundle size has been reduced by 43%, resulting in faster load times and improved performance."}),e.jsx(n.h3,{id:"new-typography-system",children:"New Typography System"}),e.jsxs(n.p,{children:["New and improved ",e.jsx(i,{page:"Text/Heading",children:"Heading"}),", ",e.jsx(i,{page:"Components/EditableHeading",children:"EditableHeading"})," components. For more info, check the ",e.jsx(n.a,{href:"#typography",children:"Typography"})," section."]}),e.jsx(n.h3,{id:"enhanced-typescript-support",children:"Enhanced Typescript Support"}),e.jsx(n.p,{children:"All components' types and interfaces are exported for better type-safe compositions. For example:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, ButtonProps, ButtonSize } from "@vibe/core";
`})}),e.jsx(n.h3,{id:"improved-prop-type-checking",children:"Improved prop type-checking"}),e.jsx(n.p,{children:"Now you can use type-safe strings instead of static enums for props, providing a better and faster development experience:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before
<Button kind={Button.kinds.PRIMARY} size={Button.sizes.SMALL}>click</Button>

// After
<Button kind="primary" size="small">click</Button>
`})}),e.jsx(n.p,{children:"See IntelliSense in action in your favorite IDE:"}),e.jsx("img",{src:c,width:"300",alt:"Using props values instead of enums"}),e.jsx(n.p,{children:"You can keep using the static properties, although not recommended, as they are likely to be deprecated in the future."}),e.jsx(n.h3,{id:"improved-layering-of-floating-components",children:"Improved layering of floating components"}),e.jsx(n.p,{children:"When used inside Modals, the floating components (i.e., Tooltip, Tipseen, Dialog) will now be rendered inside the Modal's container by default, ensuring they are always on top. This change prevents any z-index interference and ensures a consistent user experience."}),e.jsx("img",{src:a,alt:"floating elements on modal",width:"500"}),e.jsx(n.h2,{id:"migration-steps-",children:"Migration Steps 🚀"}),e.jsx(n.p,{children:"Most of the changes required to migrate from Vibe 2 to Vibe 3 are covered by an automatic migration script, but some manual changes may still be required, especially changes that are related to style, UX, or behavior."}),e.jsx(n.p,{children:"These steps will guide you through the migration process:"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Install ",e.jsx(n.code,{children:"@vibe/core"})," (and ",e.jsx(n.code,{children:"@vibe/icons"}),", if needed) and remove ",e.jsx(n.code,{children:"monday-ui-react-core"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @vibe/core @vibe/icons # or npm install @vibe/core @vibe/icons
yarn remove monday-ui-react-core # or npm uninstall monday-ui-react-core
`})}),`
`,e.jsxs(n.p,{children:["The changes in your ",e.jsx(n.code,{children:"package.json"})," file should look like this:"]}),`
`]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`"dependencies": {
- "monday-ui-react-core": "^2.120.0",
+ "@vibe/core": "^3.0.0",
+ "@vibe/icons": "^1.0.0"
  ...
},`})}),e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run the migration script to update your codebase:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @vibe/codemod -m v3
`})}),`
`,e.jsxs(n.p,{children:["For more information, and for more options, refer to the ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/blob/master/packages/codemod/README.md",rel:"nofollow",children:"@vibe/codemod"})," docs."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Follow the changes in the ",e.jsx(n.a,{href:"#breaking-changes-",children:"Breaking Changes 🚨"})," section below and apply any manual changes required."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Review the changes and test your application thoroughly"})," to ensure everything works as expected."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Run Prettier or any code formatting tool to format the changes made by the migration script [optional]."}),`
`]}),`
`]}),e.jsx(n.h2,{id:"breaking-changes-",children:"Breaking Changes 🚨"}),e.jsx(n.p,{children:"Several breaking changes have been made to optimize and streamline the library. These changes include the removal of deprecated components, updates to component APIs, and overall enhancements."}),e.jsxs(n.p,{children:["Please note that the following changes are ",e.jsx(n.strong,{children:"complementary to the migration script"})," and require manual intervention, assuming that the migration script has ran successfully. If you prefer migrating entirely manually (without the ",e.jsx(n.code,{children:"@vibe/codemod"})," script), please refer to the ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/blob/master/packages/core/docs/vibe-3-changelog.md",rel:"nofollow",children:"Complete Vibe 3 changelog"}),"."]}),e.jsx(n.h3,{id:"general",children:"General"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CommonJS support has been removed"})," to modernize the library, reduce complexity, and ensure better compatibility with modern JavaScript tooling and ESM (ECMAScript Modules) standards."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"monday-ui-react-core/storybookComponents"})," entry ",e.jsx(n.strong,{children:"was removed"}),", use the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/vibe-storybook-components",rel:"nofollow",children:"vibe-storybook-components"})," package instead."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"monday-ui-react-core/dist/main.css"})," ",e.jsx(n.strong,{children:"was removed"}),", use ",e.jsx(n.code,{children:"@vibe/core/tokens"})," instead to load all relevant CSS tokens:"]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- import "monday-ui-react-core/dist/main.css";
+ import "@vibe/core/tokens";
`})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"monday-ui-style/src/Icons"})," ",e.jsx(n.strong,{children:"was removed"}),", use ",e.jsx(n.code,{children:"@vibe/icons/raw"})," instead to use svg icons:"]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- import Close from "monday-ui-style/src/Icons/Close.svg";
+ import { Close } from "@vibe/icons/raw";
`})}),e.jsx(n.h3,{id:"typography",children:"Typography"}),e.jsx(n.p,{children:"The typography system has been updated to provide a more consistent and accessible experience. The new typography system includes a set of predefined text styles and sizes that can be easily applied to components."}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(i,{page:"Text/Text",children:"Text"}),` component for paragraphs, labels, and texts up to
16px. It includes 3 variants: `,e.jsx("code",{children:"text1"}),", ",e.jsx("code",{children:"text2"})," and ",e.jsx("code",{children:"text3"}),`. Each variant has a
fixed size and three different weights.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(i,{page:"Text/Heading",children:"Heading"}),` component the for titles and text from 18px and
up. It includes 3 variants: `,e.jsx("code",{children:"h1"}),", ",e.jsx("code",{children:"h2"})," and ",e.jsx("code",{children:"h3"}),`. Each of these variant is mapped
to an `,e.jsx("code",{children:"h1"}),", ",e.jsx("code",{children:"h2"}),", ",e.jsx("code",{children:"h3"})," element accordingly."]}),`
`]}),`
`]}),e.jsx(n.p,{children:"To replace old typography usages:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H1 Main heading"})," (",e.jsx(n.code,{children:"--font-h1"}),") → ",e.jsx(n.strong,{children:"Heading/H1/normal"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H2 Secondary heading"})," (",e.jsx(n.code,{children:"--font-h2"}),") → ",e.jsx(n.strong,{children:"Heading/H2/bold"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H3 Tertiary heading"})," (",e.jsx(n.code,{children:"--font-h3"}),") → ",e.jsx(n.strong,{children:"Heading/H2/light"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H4 Fourth heading"})," (",e.jsx(n.code,{children:"--font-h4"}),") → ",e.jsx(n.strong,{children:"Heading/H3/bold"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H5 Paragraph"})," (",e.jsx(n.code,{children:"--font-h5"}),") → ",e.jsx(n.strong,{children:"Text/text1/bold"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H6 UI text"})," (",e.jsx(n.code,{children:"--font-general-label"}),") → ",e.jsx(n.strong,{children:"Text/text2/normal"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium Text"})," (",e.jsx(n.code,{children:"--font-subtext"}),") → ",e.jsx(n.strong,{children:"Text/text2/normal"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"P Paragraph text"})," (",e.jsx(n.code,{children:"--font-paragraph"}),") → ",e.jsx(n.strong,{children:"Text/text1/normal"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium text link"})," (",e.jsx(n.code,{children:"--font-general-label"}),", ",e.jsx(n.code,{children:"--link-color"}),") → ",e.jsx(n.strong,{children:"Text/text2/normal"})]}),`
`]}),e.jsxs(n.p,{children:["For more information, refer to the ",e.jsx(i,{page:"Foundations/Typography",children:"Typography"})," docs."]}),e.jsx(n.h3,{id:"components",children:"Components"}),e.jsxs(n.p,{children:["The following components have been ",e.jsx(n.strong,{children:"removed"})," and are no longer available:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Input"})," - use ",e.jsx(i,{page:"Components/TextField",children:"TextField"})," instead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"EditableInput"})," - use ",e.jsx(i,{page:"Components/EditableText",children:"EditableText"})," instead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchComponent"})," - use ",e.jsx(i,{page:"Components/Search",children:"Search"})," instead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ResponsiveList"})," - use ",e.jsx(i,{page:"Hooks/useIsOverflowing",children:"useIsOverflowing"})," hook instead, to show/hide content based on overflow"]}),`
`]}),e.jsxs(n.p,{children:["These components were ",e.jsx(n.strong,{children:"rewritten from scratch"})," with new API and style, offering better accessibility and usability:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{page:"Text/Heading",children:"Heading"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{page:"Components/EditableHeading",children:"EditableHeading"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{page:"Components/Search",children:"Search"}),`
`]}),`
`]}),e.jsxs(n.p,{children:["Make sure to import them from ",e.jsx(n.code,{children:"@vibe/core"})," instead of the ",e.jsx(n.code,{children:"/next"})," entry:"]}),e.jsx(s,{code:`- import { Heading, EditableHeading, Search } from "monday-ui-react-core/next";
+ import { Heading, EditableHeading, Search } from "@vibe/core";
`}),e.jsx(n.p,{children:"The following components have breaking changes to their API, behavior, or style, as detailed below:"}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"AvatarGroup"})}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component no longer has padding at the bottom"}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Button"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"children"})," prop is now required"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"})," sizes were removed, use ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"})," respectively:"]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- <Button size="sm">
+ <Button size="small">
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Chips"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"DARK_INDIGO"})," and ",e.jsx(n.code,{children:"BLACKISH"})," colors were removed from the ",e.jsx(n.code,{children:"color"})," prop"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"clickable"})," and ",e.jsx(n.code,{children:"isClickable"})," props were removed, use ",e.jsx(n.code,{children:"onClick"})," instead, to get clickable behavior and style:"]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- <Chips clickable>
+ <Chips onClick={() => {}}>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Counter"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"})," sizes were removed, use ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"})," respectively:"]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- <Counter size="sm">
+ <Counter size="small">
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"DialogContentContainer"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['The "medium" ',e.jsx(n.code,{children:"size"}),` now has an increased padding, correcting a previous sizing issue where "medium" and "small" had identical paddings. As a result, "small" is now the default size. If no size was specified there's no action required.`]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Flex"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Flex.gaps.NONE"})," property has been removed. To specify no gap simply omit the ",e.jsx(n.code,{children:"gap"})," prop"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Dropdown"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"xxs"}),", ",e.jsx(n.code,{children:"xs"})," sizes were acting as the ",e.jsx(n.code,{children:"small"})," size and were therefore removed. Use ",e.jsx(n.code,{children:"small"})," instead"]}),`
`,e.jsx(n.li,{children:"New readonly style"}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Icon"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"clickable"}),", ",e.jsx(n.code,{children:"onClick"})," props were removed, use ",e.jsx(n.code,{children:"<IconButton>"})," for clickable icons:"]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- <Icon icon={Heart} clickable onClick={() => {}}>
+ <IconButton icon={Heart} onClick={() => {}}>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Label"})}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'The "Spin In" animation was removed'}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"MenuButton"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"hideWhenReferenceHidden"}),' prop default value changes to "true", meaning when the MenuButton is hidden hide the dialog and tooltip as well. To disable this behavior set ',e.jsx(n.code,{children:"hideWhenReferenceHidden"}),' to "false"']}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"MenuItem"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The provided tooltip (when the text is overflowing) now wraps the entire element so non-block layout given to the ",e.jsx(n.code,{children:"title"})," prop may break"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Modal"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"hideCloseButton"})," has been removed since Modals should always have a close button. It has also been removed from ModalHeader component."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"unmountOnClose"}),' prop default value changes to "true", meaning the Modal will not render when ',e.jsx(n.code,{children:"show"}),' is "false". To disable this behavior set ',e.jsx(n.code,{children:"unmountOnClose"}),' to "false"']}),`
`,e.jsx(n.li,{children:"Tooltips, Tipseens, and Dialogs on Modals will now be rendered inside the Modal's container by default, without any z-index interference"}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"SplitButton"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"data-testId"})," prop will no longer be applied to the internal elements, only the root element"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Steps"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"isOnPrimary"})," prop was removed, use ",e.jsx(n.code,{children:'color="primary'})," instead:"]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- <Steps isOnPrimary>
+ <Steps color="primary">
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tabs"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The browser's default margin/padding for ",e.jsx(n.code,{children:"ul"})," and ",e.jsx(n.code,{children:"li"})," elements were reset"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"TabList"})}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component no longer gets a padding bottom"}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"TabPanels"})}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"TabPanels will render only the active tab instead of rendering all the panels"}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"TextField"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"iconsNames"})," prop no longer accepts the ",e.jsx(n.code,{children:"layout"})," property"]}),`
`,e.jsxs(n.li,{children:["Providing the ",e.jsx(n.code,{children:"required"})," prop will now show a red asterisk, implying that the field is mandatory, and so the ",e.jsx(n.code,{children:"requiredAsterisk"})," prop was removed"]}),`
`,e.jsx(n.li,{children:"New readonly style"}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"})," sizes were removed, use ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"})," respectively:"]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- <TextField size="sm">
+ <TextField size="small">
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tipseen"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"content"})," prop is now mandatory"]}),`
`,e.jsxs(n.li,{children:["The default ",e.jsx(n.code,{children:"color"})," has changed from 'primary' to 'inverted'. To keep the previous color, set the ",e.jsx(n.code,{children:"color"})," prop to 'primary'"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"showDelay"})," prop's default value has changed to 100"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"justify"})," prop was removed, and so the ",e.jsx(n.code,{children:"Tipseen.justifyTypes"})," static property was removed as well"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"TipseenContent"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"submitButtonProps"}),", ",e.jsx(n.code,{children:"dismissButtonProps"})," props were removed, use ",e.jsx(n.code,{children:"submitButtonText"})," and ",e.jsx(n.code,{children:"dismissButtonText"})," to change the buttons' text"]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tooltip"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"paddingSize"}),", ",e.jsx(n.code,{children:"justify"}),", and ",e.jsx(n.code,{children:"arrowPosition"})," props were removed. Accordingly the ",e.jsx(n.code,{children:"Tooltip.paddingSizes"}),", ",e.jsx(n.code,{children:"Tooltip.justifyTypes"}),", and ",e.jsx(n.code,{children:"Tooltip.arrowPositions"})," static properties were removed as well"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"theme"}),' prop can now accept only "dark" or "primary"']}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"position"}),' prop can now accept only "top, right, bottom, left"']}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"showOnDialogEnter"})," prop's default value has changed to ",e.jsx(n.code,{children:"true"}),"; now the tooltip will remain open by default when hovering over it"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"hideDelay"})," prop's default value changed to 100"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"addKeyboardHideShowTriggersByDefault"})," default changed to true, making it accessible with keyboard navigation"]}),`
`,e.jsx(n.li,{children:"The tooltip's max-width is now set to 240px"}),`
`,e.jsxs(n.li,{children:["The Tooltip's ",e.jsx(n.code,{children:"content"})," is now wrapped in another ",e.jsx(n.code,{children:"div"}),", meaning that non-block layouts inside the tooltip may break"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"containerSelector"})," will now fallback to ",e.jsx(n.code,{children:"document.body"})," instead of ",e.jsx(n.code,{children:"#tooltips-container"})," if not provided"]}),`
`]}),e.jsx(n.h3,{id:"colors",children:"Colors"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"--shareable-color"})," and ",e.jsx(n.code,{children:"--private-color"})," CSS variables were removed for all themes"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"color-warning"}),", ",e.jsx(n.code,{children:"color-warning-hover"}),", ",e.jsx(n.code,{children:"color-warning-select"}),", ",e.jsx(n.code,{children:"color-warning-select-hover"})," colors were removed from the ",e.jsx(n.code,{children:"colors.json"})," file (in ",e.jsx(n.code,{children:"monday-ui-style"})," package), use ",e.jsx(n.code,{children:"warning-color-*"})," respectively"]}),`
`]}),e.jsx(n.h3,{id:"icons",children:"Icons"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Upgrade"})," icon has been removed, and the ",e.jsx(n.code,{children:"Featured"})," icon has been renamed to ",e.jsx(n.code,{children:"Upgrade"}),":"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Replay"})," icon has been renamed to ",e.jsx(n.code,{children:"Reply"})]}),`
`]}),e.jsx("ul",{children:e.jsx(s,{code:`- <Icon icon={Featured}>
+ <Icon icon={Upgrade}>
`})}),e.jsx(n.h2,{id:"faq-",children:"FAQ ❓"}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"What is the best way to migrate to Vibe 3?"})}),e.jsx(n.p,{children:"It is recommended to follow the migration steps outlined in this guide to ensure a smooth transition from Vibe 2 to Vibe 3."}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Are there any manual changes required after running the migration script?"})}),e.jsxs(n.p,{children:["While the migration script covers most changes, some manual changes may still be required where style, UX, or behavior changes are involved. You should walk through the ",e.jsx(n.a,{href:"#breaking-changes-",children:"breaking changes"})," section to identify any manual changes required."]}),e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Do I need to stop using static properties (e.g. ",e.jsx(n.code,{children:"Button.kinds.PRIMARY"}),") in my code?"]})}),e.jsxs(n.p,{children:["You can still use static properties, but it is recommended to use type-safe strings instead. Static properties are likely to be deprecated in the future. To migrate to type-safe strings, use the following script: ",e.jsx(n.code,{children:"npx @vibe/codemod -m enums"}),"."]}),e.jsx(n.p,{children:e.jsxs(n.strong,{children:["I have already been using Heading, EditableHeading, Search from ",e.jsx(n.code,{children:"/next"}),", do I need to change anything?"]})}),e.jsxs(n.p,{children:["If you have been using these components from ",e.jsx(n.code,{children:"/next"}),", you will only need to update your imports to use the components from the main entry (",e.jsx(n.code,{children:"@vibe/core"}),")."]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Are there any known issues or limitations with Vibe 3?"})}),e.jsxs(n.p,{children:["While we have made every effort to ensure Vibe 3 is stable and reliable, there may be some known issues or limitations. If you encounter any problems, please create an ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/issues/new/choose",rel:"nofollow",children:"issue"}),"."]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"What if I don't want to migrate to Vibe 3?"})}),e.jsx(n.p,{children:"While we recommend migrating to Vibe 3 to take advantage of the new features and improvements, you can continue using Vibe 2. However, please note that Vibe 2 will no longer recieve any new features or updates aside from critical bug fixes, and will reach EOL upon the next major version (Vibe 4) release."}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"The migration script failed to run, what should I do?"})}),e.jsxs(n.p,{children:["Make sure to run the migration script in the root directory of your project, and make sure to run it on a clean git branch to avoid any conflicts. If you still encounter issues, please create an ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/issues/new/choose",rel:"nofollow",children:"issue"})," describing the steps, system info and any error messages you received."]})]}),`
`,e.jsx(n.h2,{id:"help-",children:"Help 🙏"}),`
`,e.jsxs(n.p,{children:["If you have any questions, feedback, or need help, please don't hesitate to reach out to us. You can provide ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/discussions",rel:"nofollow",children:"feedback"})," or ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/issues/new/choose",rel:"nofollow",children:"report issues"})," in the ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe",rel:"nofollow",children:"Vibe repository"})," on GitHub."]})]})}function S(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}function x(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
