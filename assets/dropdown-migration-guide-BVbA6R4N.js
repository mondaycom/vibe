import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{useMDXComponents as r}from"./index-CXa8ra7y.js";import{M as t}from"./index-BhtjH93-.js";import{D as i}from"./DiffCodeBlock-BrZiYZKc.js";import{l}from"./tip-BKixvd9t.js";import"./index-Hemj67b4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BoMporuu.js";import"./index-B2vSB2uV.js";import"./index-D63y3F3s.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./index-BpvXyOxN.js";import"./Flex-DaTSFknt.js";import"./withStaticProps-DibdfTK_.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components/Dropdown [Alpha]/Migration Guide"}),`
`,e.jsx(n.h1,{id:"dropdown-migration-guide",children:"Dropdown Migration Guide"}),`
`,e.jsxs("div",{style:{lineHeight:"1.8"},children:[e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#why-migrate-",children:"Why Migrate? ✨"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#migration-steps-",children:"Migration Steps 🚀"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#breaking-changes-",children:"Breaking Changes 🚨"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#enhanced-option-data-structure-",children:"Enhanced Option Data Structure 🎯"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#type-safety-improvements-",children:"Type Safety Improvements 🛡️"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#faq-",children:"FAQ ❓"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#help-",children:"Help 🙏"})}),`
`]}),e.jsx(n.h2,{id:"overview",children:"Overview"}),e.jsxs(n.p,{children:["The Dropdown component has been completely rewritten from scratch to provide better accessibility, performance, and developer experience. The new implementation is built on top of the ",e.jsx(n.strong,{children:"Downshift library"})," instead of ",e.jsx(n.strong,{children:"react-select"}),", offering significant improvements across all areas."]}),e.jsx(l,{title:"Alpha Release",emoji:"⚠️",children:e.jsxs(n.p,{children:["The new Dropdown is currently in ",e.jsx(n.strong,{children:"Alpha"})," and available under ",e.jsx(n.code,{children:"@vibe/core/next"}),`. It will eventually replace the
current implementation in the main package.`]})}),e.jsx(n.h2,{id:"why-migrate-",children:"Why Migrate? ✨"}),e.jsx(n.h3,{id:"enhanced-accessibility",children:"Enhanced Accessibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Proper ARIA attributes"})," and keyboard navigation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Screen reader optimized"})," with clear announcements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single combobox role"})," to avoid confusion"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Improved focus management"})," and visual indicators"]}),`
`]}),e.jsx(n.h3,{id:"better-performance",children:"Better Performance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smaller bundle size"})," (no react-select dependency)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Native implementation"})," with optimized rendering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Improved performance"})," for large datasets"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Better memory usage"})," with optimized re-renders"]}),`
`]}),e.jsx(n.h3,{id:"enhanced-typescript-support",children:"Enhanced TypeScript Support"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Full generic type support"})," with ",e.jsx(n.code,{children:"<Item>"})," type parameter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Better type safety"})," for options and callbacks"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Comprehensive prop type definitions"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"IntelliSense improvements"})," for better developer experience"]}),`
`]}),e.jsx(n.h3,{id:"improved-form-integration",children:"Improved Form Integration"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Built-in label, helper text, and error state support"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Better validation"})," and required field handling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Proper form field structure"})," and semantics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Native form integration"})," without additional wrappers"]}),`
`]}),e.jsx(n.h3,{id:"enhanced-features",children:"Enhanced Features"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sticky group headers"})," with ",e.jsx(n.code,{children:"stickyGroupTitle"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom filtering"})," with ",e.jsx(n.code,{children:"filterOption"})," prop"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Control selected options visibility"})," with ",e.jsx(n.code,{children:"showSelectedOptions"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Better tooltip integration"})," with ",e.jsx(n.code,{children:"tooltipProps"})]}),`
`]}),e.jsx(n.h2,{id:"migration-steps-",children:"Migration Steps 🚀"}),e.jsx(n.h3,{id:"1-update-import-path",children:"1. Update Import Path"}),e.jsx(i,{code:`- import { Dropdown } from "@vibe/core";
+ import { Dropdown } from "@vibe/core/next";`}),e.jsx(n.h3,{id:"2-update-option-data-structure",children:"2. Update Option Data Structure"}),e.jsxs(n.p,{children:["The new Dropdown expects options with explicit ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"value"})," properties:"]}),e.jsx(i,{code:`- const options = [
-   { id: 1, text: "Option 1" },
-   { id: 2, text: "Option 2" }
- ];
+ const options = [
+   { value: 1, label: "Option 1" },
+   { value: 2, label: "Option 2" }
+ ];`}),e.jsx(n.h3,{id:"3-update-form-integration",children:"3. Update Form Integration"}),e.jsx(i,{code:`- <div>
-   <label>Select an option</label>
-   <Dropdown options={options} />
-   <span>Helper text here</span>
- </div>
+ <Dropdown
+  label="Select an option"
+  helperText="Helper text here"
+  required
+  error={hasError}
+  options={options}
+ />`}),e.jsx(n.h2,{id:"breaking-changes-",children:"Breaking Changes 🚨"}),e.jsx(n.h3,{id:"removed-props",children:"Removed Props"}),e.jsx(n.p,{children:"These props are no longer available in the new implementation:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"extraStyles"})})," - Use CSS classes instead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"menuPortalTarget"})})," - Handled automatically with better positioning"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"isVirtualized"})})," - Built-in performance optimization"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"asyncOptions"})})," - Use external data fetching with ",e.jsx(n.code,{children:"options"})," prop"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"cacheOptions"})})," - Handle caching externally"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"loadingMessage"})})," - Use ",e.jsx(n.code,{children:"helperText"})," with loading indicator"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"onMenuScrollToBottom"})})," - Use ",e.jsx(n.code,{children:"onScroll"})," instead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"captureMenuScroll"})})," - Handled automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"insideOverflowContainer"})})," - Handled automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"insideOverflowWithTransformContainer"})})," - Handled automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"insideLayerContext"})})," - Handled automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"popupsContainerSelector"})})," - Handled automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"tooltipContent"})})," - Use ",e.jsx(n.code,{children:"tooltipProps"})," instead for enhanced tooltip support"]}),`
`]}),e.jsx(n.h3,{id:"changed-props",children:"Changed Props"}),e.jsx(n.p,{children:"These props have different default values or behavior:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"searchable"})})," - ",e.jsx(n.strong,{children:"BREAKING CHANGE"}),": Now defaults to ",e.jsx(n.code,{children:"false"})," (was ",e.jsx(n.code,{children:"true"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"showSelectedOptions"})})," - ",e.jsx(n.strong,{children:"BREAKING CHANGE"}),": Defaults to ",e.jsx(n.code,{children:"true"}),". In the old Dropdown, selected options were always hidden in multi select mode."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"multi"})})," - Better type safety and native chip display"]}),`
`]}),e.jsx(n.h3,{id:"new-props",children:"New Props"}),e.jsx(n.p,{children:"These props are new and provide enhanced functionality:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"label"})})," - Built-in label support"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"helperText"})})," - Built-in helper text support"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"error"})})," - Built-in error state support"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"required"})})," - Built-in required field support"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"stickyGroupTitle"})})," - Sticky group headers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"showSelectedOptions"})})," - Control selected options visibility (defaults to ",e.jsx(n.code,{children:"true"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"filterOption"})})," - Custom filtering logic"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"tooltipProps"})})," - Enhanced tooltip integration (replaces ",e.jsx(n.code,{children:"tooltipContent"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"inputAriaLabel"})})," - ARIA label for input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"menuAriaLabel"})})," - ARIA label for menu"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"dir"})})," - Text direction support instead of ",e.jsx(n.code,{children:"rtl"})," prop"]}),`
`]}),e.jsx(n.h3,{id:"tooltip-integration-changes",children:"Tooltip Integration Changes"}),e.jsx(n.p,{children:"The tooltip integration has been improved in the new Dropdown:"}),e.jsx(i,{code:`- // Old Dropdown: Simple string tooltip on the trigger
- <Dropdown
-   options={options}
-   tooltipContent="Simple tooltip text"
- />
+ // New Dropdown: Full tooltip props support
+ <Dropdown
+ options={options}
+ tooltipProps={{
+     content: "Enhanced tooltip text",
+     position: "top",
+     hideDelay: 0
+ }}
+ />
+ // Option-level tooltips
+ const optionsWithTooltips = [
+ {
+     value: "option1",
+     label: "Option 1",
+     tooltipProps: {
+       content: "Description for this option"
+     }
+ }
+ ];`}),e.jsx(n.h3,{id:"selected-options-visibility-behavior",children:"Selected Options Visibility Behavior"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"BREAKING CHANGE"}),": The new Dropdown changes how selected options are displayed in the dropdown list:"]}),e.jsx(i,{code:`// Old Dropdown: Selected options always visible in list
- <Dropdown options={options} value={selectedOption} />
-   // Selected option still appears in the list when opened
+ // New Dropdown: Selected options hidden by default
+ <Dropdown options={options} value={selectedOption} />
+ // Selected option is hidden from the list when opened
+
+ // To restore old behavior:
+ <Dropdown
+ options={options}
+ value={selectedOption}
+ showSelectedOptions
+ />`}),e.jsx(n.h3,{id:"search-functionality-changes",children:"Search Functionality Changes"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"BREAKING CHANGE"}),": The new Dropdown changes the default search behavior:"]}),e.jsx(i,{code:`// Old Dropdown: Searchable by default
- <Dropdown options={options} />
-   // Search input was enabled by default
+ // New Dropdown: Not searchable by default
+ <Dropdown options={options} />
+ // No search input, simple select behavior
+
+ // To restore old search behavior:
+ <Dropdown
+ options={options}
+ searchable
+ />`}),e.jsx(n.h4,{id:"when-to-enable-search",children:"When to Enable Search"}),e.jsx(n.p,{children:"Enable search for dropdowns with many options or when users need to filter:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Enable search for large option lists
<Dropdown options={manyOptions} searchable placeholder="Search options..." />
`})}),e.jsx(n.h2,{id:"enhanced-option-data-structure-",children:"Enhanced Option Data Structure 🎯"}),e.jsx(n.h3,{id:"start-and-end-elements",children:"Start and End Elements"}),e.jsx(n.p,{children:"The new Dropdown supports rich option structures with start and end elements, allowing you to add icons, avatars, suffixes, and custom content to your options:"}),e.jsx(i,{code:`- const options = [
-   { value: 1, label: "Option 1" },
-   { value: 2, label: "Option 2" }
- ];
+ const options = [
+   {
+     value: 1, 
+     label: "Option 1",
+     startElement: { type: "icon", value: "email" },
+     endElement: { type: "suffix", value: "Beta" }
+   },
+   {
+     value: 2,
+     label: "Option 2", 
+     startElement: { type: "avatar", value: "user.jpg", square: true },
+     endElement: { type: "icon", value: "check" }
+   }
+ ];`}),e.jsx(n.h4,{id:"available-element-types",children:"Available Element Types"}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Start Elements:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"avatar"})})," - Display user avatars: ",e.jsx(n.code,{children:'{ type: "avatar", value: "image.jpg", square?: boolean }'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"icon"})})," - Display icons: ",e.jsx(n.code,{children:'{ type: "icon", value: "iconName" }'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"indent"})})," - Add indentation: ",e.jsx(n.code,{children:'{ type: "indent" }'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"custom"})})," - Custom content: ",e.jsx(n.code,{children:'{ type: "custom", render: () => <CustomComponent /> }'})]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"End Elements:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"icon"})})," - Display icons: ",e.jsx(n.code,{children:'{ type: "icon", value: "iconName" }'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"suffix"})})," - Display text suffix: ",e.jsx(n.code,{children:'{ type: "suffix", value: "Hint text" }'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"custom"})})," - Custom content: ",e.jsx(n.code,{children:'{ type: "custom", render: () => <CustomComponent /> }'})]}),`
`]}),e.jsx(n.h4,{id:"multi-select-chip-integration",children:"Multi-Select Chip Integration"}),e.jsx(n.p,{children:"Elements are automatically integrated with chips in multi-select mode:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const optionsWithElements = [
  {
    value: "user1",
    label: "John Doe",
    startElement: { type: "avatar", value: "john.jpg" },
    endElement: { type: "suffix", value: "Admin" },
    chipColor: "primary" // Controls chip color in multi-select
  }
];

<Dropdown
  multi
  options={optionsWithElements}
  // Start elements become chip left icons/avatars
  // Chip colors are controlled via chipColor property
/>;
`})}),e.jsx(n.h2,{id:"type-safety-improvements-️",children:"Type Safety Improvements 🛡️"}),e.jsx(n.p,{children:"The new Dropdown provides full TypeScript support with generics:"}),e.jsx(i,{code:`- interface Option {
-   value: any;
-   label: string;
- }
+ interface User {
+  value: number;
+  label: string;
+  email: string;
+ }
+ <Dropdown<User>
+ options={users}
+ onChange={(user) => {
+     // user is fully typed as User
+     console.log(user.email);
+ }}
+ />`}),e.jsx(n.h3,{id:"enhanced-type-safety",children:"Enhanced Type Safety"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Multi-select with proper typing
interface Task {
  value: string;
  label: string;
  priority: "high" | "medium" | "low";
}

<Dropdown<Task>
  multi
  options={tasks}
  onChange={selectedTasks => {
    // selectedTasks is properly typed as Task[]
    selectedTasks.forEach(task => {
      console.log(task.priority); // TypeScript knows this exists
    });
  }}
/>;
`})}),e.jsx(n.h2,{id:"faq-",children:"FAQ ❓"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: When should I migrate to the new Dropdown?"}),`
A: The new Dropdown is currently in Alpha. We recommend migrating for new projects or when you need the enhanced accessibility and performance features.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: Will the old Dropdown be deprecated?"}),`
A: Yes, the old Dropdown will be deprecated in the next major version (Vibe 4). We'll provide ample notice and migration support.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: Can I use both implementations in the same project?"}),`
A: Yes, you can import the new Dropdown from `,e.jsx(n.code,{children:"@vibe/core/next"})," and the old one from ",e.jsx(n.code,{children:"@vibe/core"})," during the migration period."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: Are there any features missing from the new Dropdown?"}),`
A: The new Dropdown covers all major use cases. If you're using `,e.jsx(n.code,{children:"asyncOptions"}),", implement data fetching externally and pass the results to the ",e.jsx(n.code,{children:"options"})," prop."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: How do I handle async data loading?"}),`
A: Implement your own data fetching logic and pass the results to the `,e.jsx(n.code,{children:"options"})," prop. You can use the ",e.jsx(n.code,{children:"helperText"})," prop to show loading states."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: Is the new Dropdown accessible?"}),`
A: Yes! The new Dropdown is built with accessibility as a core principle.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: How do I migrate tooltip functionality?"}),`
A: Replace `,e.jsx(n.code,{children:"tooltipContent"})," with ",e.jsx(n.code,{children:"tooltipProps"})," for dropdown-level tooltips. The new implementation also supports option-level tooltips via the ",e.jsx(n.code,{children:"tooltipProps"})," property on individual options."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: Why is my dropdown no longer searchable?"}),`
A: The new Dropdown defaults to `,e.jsx(n.code,{children:"searchable={false}"})," since most dropdowns don't need search functionality. Add the ",e.jsx(n.code,{children:"searchable"})," prop to enable search: ",e.jsx(n.code,{children:"<Dropdown searchable options={options} />"})]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: How do I add icons or avatars to dropdown options?"}),`
A: Use the `,e.jsx(n.code,{children:"startElement"})," and ",e.jsx(n.code,{children:"endElement"})," properties on option objects. The new Dropdown supports icons, avatars, indentation, suffixes, and custom elements."]})]}),`
`,e.jsx(n.h2,{id:"help-",children:"Help 🙏"}),`
`,e.jsx(n.p,{children:"If you have any questions, feedback, or need help with migration, please don't hesitate to reach out:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GitHub Issues"}),": ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/issues/new/choose",rel:"nofollow",children:"Report issues"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GitHub Discussions"}),": ",e.jsx(n.a,{href:"https://github.com/mondaycom/vibe/discussions",rel:"nofollow",children:"Ask questions"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The new Dropdown represents a significant improvement in accessibility, performance, and developer experience. We're excited to see what you build with it! 🚀"})]})}function D(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{D as default};
