import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as s}from"./index-BfNsOeqz.js";import{M as t}from"./index-VgClc7PN.js";import{D as n}from"./DiffCodeBlock-CdSfgPcm.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Yuxi58G0.js";import"./index-CKwgWYbs.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";function r(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components/Combobox [Deprecated]/Migration Guide"}),`
`,e.jsx(o.h1,{id:"combobox-migration-guide",children:"Combobox Migration Guide"}),`
`,e.jsxs("div",{style:{lineHeight:"1.8"},children:[e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#why-migrate-",children:"Why Migrate? ✨"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#migration-steps-",children:"Migration Steps 🚀"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#breaking-changes-",children:"Breaking Changes 🚨"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#complete-migration-examples",children:"Complete Migration Examples"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#faq-",children:"FAQ ❓"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#help-",children:"Help 🙏"})}),`
`]}),e.jsx(o.h2,{id:"overview",children:"Overview"}),e.jsx(o.p,{children:"The Combobox component is deprecated in favor of the new Dropdown's box mode. The box mode provides the same always-visible list functionality with significant improvements in accessibility, performance, and developer experience."}),e.jsx(o.h2,{id:"why-migrate-",children:"Why Migrate? ✨"}),e.jsx(o.h3,{id:"enhanced-accessibility",children:"Enhanced Accessibility"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Proper ARIA attributes"})," and keyboard navigation"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Screen reader optimized"})," with clear announcements"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Improved focus management"})," and visual indicators"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Better form integration"})," with proper label associations"]}),`
`]}),e.jsx(o.h3,{id:"better-performance",children:"Better Performance"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Smaller bundle size"})," through optimized implementation"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Improved rendering"})," for large datasets"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Automatic virtualization"})," for performance optimization"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Better memory usage"})," with optimized re-renders"]}),`
`]}),e.jsx(o.h3,{id:"enhanced-typescript-support",children:"Enhanced TypeScript Support"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Full generic type support"})," with ",e.jsx(o.code,{children:"<Item>"})," type parameter"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Better type safety"})," for options and callbacks"]}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Comprehensive prop type definitions"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"IntelliSense improvements"})," for better developer experience"]}),`
`]}),e.jsx(o.h3,{id:"improved-form-integration",children:"Improved Form Integration"}),e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Built-in label, helper text, and error state support"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Better validation"})," and required field handling"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Proper form field structure"})," and semantics"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Native form integration"})," without additional wrappers"]}),`
`]}),e.jsx(o.h3,{id:"enhanced-features",children:"Enhanced Features"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Sticky group headers"})," with ",e.jsx(o.code,{children:"stickyGroupTitle"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Custom filtering"})," with ",e.jsx(o.code,{children:"filterOption"})," prop"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Richer option structures"})," with start/end elements"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Better tooltip integration"})," with ",e.jsx(o.code,{children:"tooltipProps"})]}),`
`]}),e.jsx(o.h2,{id:"migration-steps-",children:"Migration Steps 🚀"}),e.jsx(o.h3,{id:"quick-migration-example",children:"Quick Migration Example"}),e.jsx(n,{code:`- import { Combobox } from "@vibe/core";
+ import { Dropdown } from "@vibe/core/next";

- <Combobox
- placeholder="Search options"
- options={[
-     { id: "1", label: "Option 1" },
-     { id: "2", label: "Option 2" }
- ]}
- onClick={(option) => console.log(option)}
- />

* <Dropdown
* searchable
* boxMode
* placeholder="Search options"
* options={[
*     { value: "1", label: "Option 1" },
*     { value: "2", label: "Option 2" }
* ]}
* onChange={(option) => console.log(option)}
* ariaLabel="Select an option"
* />`}),e.jsx(o.h3,{id:"1-update-import-path",children:"1. Update Import Path"}),e.jsx(n,{code:`- import { Combobox } from "@vibe/core";
+ import { Dropdown } from "@vibe/core/next";`}),e.jsx(o.h3,{id:"2-enable-box-mode-and-search",children:"2. Enable Box Mode and Search"}),e.jsxs(o.p,{children:["Box mode requires ",e.jsx(o.code,{children:"searchable={true}"})," and ",e.jsx(o.code,{children:"boxMode={true}"}),":"]}),e.jsx(n,{code:`- <Combobox options={options} />
+ <Dropdown options={options} searchable boxMode />`}),e.jsx(o.h3,{id:"3-update-option-data-structure",children:"3. Update Option Data Structure"}),e.jsx(n,{code:`- const options = [
-   { id: "1", label: "Option 1" },
-   { id: "2", label: "Option 2" }
- ];
+ const options = [
+   { value: "1", label: "Option 1" },
+   { value: "2", label: "Option 2" }
+ ];`}),e.jsx(o.h3,{id:"4-update-categories-to-groups",children:"4. Update Categories to Groups"}),e.jsx(n,{code:`- const categories = {
-   cat1: { id: "cat1", label: "Category 1" },
-   cat2: { id: "cat2", label: "Category 2" }
- };
- const options = [
-   { id: "1", label: "Option 1", categoryId: "cat1" },
-   { id: "2", label: "Option 2", categoryId: "cat2" }
- ];
+ const options = [
+   {
+     label: "Category 1",
+     options: [
+       { value: "1", label: "Option 1" }
+     ]
+   },
+   {
+     label: "Category 2",
+     options: [
+       { value: "2", label: "Option 2" }
+     ]
+   }
+ ];`}),e.jsx(o.h3,{id:"5-update-callbacks",children:"5. Update Callbacks"}),e.jsx(n,{code:`- <Combobox
-   onClick={(option) => handleSelect(option)}
-   onFilterChanged={(value) => handleSearch(value)}
- />
+ <Dropdown
+   onChange={(option) => handleSelect(option)}
+   onInputChange={(value) => handleSearch(value)}
+ />`}),e.jsx(o.h2,{id:"breaking-changes-",children:"Breaking Changes 🚨"}),e.jsx(o.h3,{id:"removed-props",children:"Removed Props"}),e.jsx(o.p,{children:"These props are no longer available in the new Dropdown box mode:"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"onOptionHover"})})," - Not needed in new implementation"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"onOptionLeave"})})," - Not needed in new implementation"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"shouldScrollToSelectedItem"})})," - Handled automatically"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"renderOnlyVisibleOptions"})})," - Automatic virtualization built-in"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"searchIcon"})})," - Handled automatically"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"onAddNew"})})," - Use ",e.jsx(o.code,{children:"menuRenderer"}),' for custom "add new" functionality']}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"addNewLabel"})})," - Use ",e.jsx(o.code,{children:"menuRenderer"}),' for custom "add new" functionality']}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"noResultsRenderer"})})," - Use ",e.jsx(o.code,{children:"noOptionsMessage"})," prop instead (accepts ReactNode)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"searchWrapperClassName"})})," - Style via main ",e.jsx(o.code,{children:"className"})," prop"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"optionClassName"})})," - Use ",e.jsx(o.code,{children:"optionRenderer"})," for custom option styling"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"stickyCategoryClassName"})})," - Style via CSS"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"disableFilter"})})," - Simply don't use the ",e.jsx(o.code,{children:"searchable"})," prop"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"optionLineHeight"})})," - Handled automatically by the component"]}),`
`]}),e.jsx(o.h3,{id:"changed-props",children:"Changed Props"}),e.jsx(o.p,{children:"These props have been renamed or changed behavior:"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsxs(o.strong,{children:[e.jsx(o.code,{children:"id"})," → ",e.jsx(o.code,{children:"id"})]})," - Update structure from ",e.jsx(o.code,{children:"{id, label}"})," to ",e.jsx(o.code,{children:"{value, label}"})," for options"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"onClick"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"onChange"})})," - Renamed for consistency with form inputs"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"onFilterChanged"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"onInputChange"})})," - Renamed for consistency"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"categories"})})," → ",e.jsxs(o.strong,{children:[e.jsx(o.code,{children:"options"})," (grouped)"]})," - Categories become nested group structure"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"filter"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"filterOption"})})," - Custom filtering with different signature"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"filterValue"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"inputValue"})})," - For controlled search input"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"defaultFilter"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"defaultInputValue"})})," - For uncontrolled default search value"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"clearFilterOnSelection"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"clearInputOnChange"})})," - Renamed for consistency"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"noResultsMessage"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"noOptionsMessage"})})," - Renamed and accepts ReactNode"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"optionsListHeight"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"menuHeight"})})," - Renamed for consistency"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"stickyCategories"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"stickyGroupTitle"})})," - Renamed to match new terminology"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"withCategoriesDivider"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"withGroupDivider"})})," - Renamed to match new terminology"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"searchInputAriaLabel"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"inputAriaLabel"})})," - Renamed for consistency"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"maxOptionsWithoutScroll"})})," → ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"maxMenuHeight"})})," - Different approach to limiting height"]}),`
`]}),e.jsx(o.h3,{id:"required-new-props",children:"Required New Props"}),e.jsx(o.p,{children:"You must add these props to enable box mode:"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"searchable"})})," - ",e.jsx(o.strong,{children:"Required"}),": Set to ",e.jsx(o.code,{children:"true"})," to enable search functionality"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"boxMode"})})," - ",e.jsx(o.strong,{children:"Required"}),": Set to ",e.jsx(o.code,{children:"true"})," to display as always-visible box"]}),`
`]}),e.jsx(o.h3,{id:"new-props-optional",children:"New Props (Optional)"}),e.jsx(o.p,{children:"These new props provide enhanced functionality:"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"label"})})," - Built-in label support for form integration"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"helperText"})})," - Built-in helper text support"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"error"})})," - Built-in error state support"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"required"})})," - Built-in required field indicator"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"ariaLabel"})})," - Proper accessibility label for the dropdown"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"tooltipProps"})})," - Enhanced tooltip integration"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"dir"})})," - Text direction support (ltr/rtl)"]}),`
`]}),e.jsx(o.h3,{id:"option-data-structure-changes",children:"Option Data Structure Changes"}),e.jsx(o.p,{children:"The most important breaking change is the option data structure:"}),e.jsx(n,{code:`- // Combobox: uses "id" property
- const options = [
-   { id: "1", label: "Option 1" },
-   { id: "2", label: "Option 2" }
- ];
+ // Dropdown: uses "value" property
+ const options = [
+   { value: "1", label: "Option 1" },
+   { value: "2", label: "Option 2" }
+ ];`}),e.jsx(o.h3,{id:"categories-to-groups",children:"Categories to Groups"}),e.jsx(o.p,{children:"Category structure has changed from a flat map to nested groups:"}),e.jsx(n,{code:`- // Combobox: separate categories object
- const categories = {
-   cat1: { id: "cat1", label: "Category 1" }
- };
- const options = [
-   { id: "1", label: "Option 1", categoryId: "cat1" }
- ];
+ // Dropdown: nested group structure
+ const options = [
+   {
+     label: "Category 1",
+     options: [
+       { value: "1", label: "Option 1" }
+     ]
+   }
+ ];`}),e.jsx(o.h2,{id:"complete-migration-examples",children:"Complete Migration Examples"}),e.jsx(o.h3,{id:"basic-combobox-to-box-mode",children:"Basic Combobox to Box Mode"}),e.jsx(n,{code:`- <Combobox
-   id="basic-combobox"
-   placeholder="Search people"
-   options={[
-     { id: "1", label: "John Doe" },
-     { id: "2", label: "Jane Smith" }
-   ]}
-   onClick={(option) => setSelected(option)}
-   searchInputAriaLabel="Search for people"
- />
+ <Dropdown
+   id="basic-dropdown"
+   searchable
+   boxMode
+   placeholder="Search people"
+   options={[
+     { value: "1", label: "John Doe" },
+     { value: "2", label: "Jane Smith" }
+   ]}
+   onChange={(option) => setSelected(option)}
+   ariaLabel="Search for people"
+ />`}),e.jsx(o.h3,{id:"combobox-with-categories-to-grouped-dropdown",children:"Combobox with Categories to Grouped Dropdown"}),e.jsx(n,{code:`- const categories = {
-   suggested: { id: "suggested", label: "Suggested" },
-   all: { id: "all", label: "All People" }
- };
-
- <Combobox
-   placeholder="Select person"
-   categories={categories}
-   options={[
-     { id: "1", label: "John", categoryId: "suggested" },
-     { id: "2", label: "Jane", categoryId: "suggested" },
-     { id: "3", label: "Bob", categoryId: "all" }
-   ]}
-   stickyCategories
-   withCategoriesDivider
-   onClick={(option) => setSelected(option)}
- />
+ <Dropdown
+   searchable
+   boxMode
+   placeholder="Select person"
+   options={[
+     {
+       label: "Suggested",
+       options: [
+         { value: "1", label: "John" },
+         { value: "2", label: "Jane" }
+       ]
+     },
+     {
+       label: "All People",
+       options: [
+         { value: "3", label: "Bob" }
+       ]
+     }
+   ]}
+   stickyGroupTitle
+   withGroupDivider
+   onChange={(option) => setSelected(option)}
+   ariaLabel="Select person"
+ />`}),e.jsx(o.h3,{id:"combobox-with-icons-to-dropdown-with-elements",children:"Combobox with Icons to Dropdown with Elements"}),e.jsx(n,{code:`- <Combobox
-   placeholder="Select option"
-   options={[
-     {
-       id: "1",
-       label: "Email",
-       leftRenderer: () => <Email />
-     },
-     {
-       id: "2",
-       label: "Send",
-       leftRenderer: () => <Send />
-     }
-   ]}
-   onClick={(option) => setSelected(option)}
- />
+ <Dropdown
+   searchable
+   boxMode
+   placeholder="Select option"
+   options={[
+     {
+       value: "1",
+       label: "Email",
+       startElement: { type: "icon", value: Email }
+     },
+     {
+       value: "2",
+       label: "Send",
+       startElement: { type: "icon", value: Send }
+     }
+   ]}
+   onChange={(option) => setSelected(option)}
+   ariaLabel="Select option"
+ />`}),e.jsx(o.h3,{id:"combobox-with-custom-filter",children:"Combobox with Custom Filter"}),e.jsx(n,{code:`- <Combobox
-   options={options}
-   filter={(filterValue, options) => {
-     return options.filter(opt =>
-       opt.label.toLowerCase().includes(filterValue.toLowerCase())
-     );
-   }}
-   onClick={(option) => setSelected(option)}
- />
+ <Dropdown
+   searchable
+   boxMode
+   options={options}
+   filterOption={(option, inputValue) => {
+     return option.label.toLowerCase().includes(inputValue.toLowerCase());
+   }}
+   onChange={(option) => setSelected(option)}
+   ariaLabel="Select option"
+ />`}),e.jsx(o.h3,{id:"combobox-with-add-new-functionality",children:'Combobox with "Add New" Functionality'}),e.jsx(n,{code:`- <Combobox
-   options={options}
-   onAddNew={(value) => {
-     const newOption = { id: Date.now(), label: value };
-     setOptions([...options, newOption]);
-   }}
-   addNewLabel={(value) => \`Add "\${value}"\`}
-   onClick={(option) => setSelected(option)}
- />
+ <Dropdown
+   searchable
+   boxMode
+   options={options}
+   onChange={(option) => setSelected(option)}
+   menuRenderer={({ children, filteredOptions }) => (
+     <>
+       {children}
+       {filteredOptions.length === 0 && inputValue && (
+         <Button onClick={() => {
+           const newOption = { value: Date.now(), label: inputValue };
+           setOptions([...options, newOption]);
+         }}>
+           Add "{inputValue}"
+         </Button>
+       )}
+     </>
+   )}
+   ariaLabel="Select or create option"
+ />`}),e.jsx(o.h3,{id:"form-integration-example",children:"Form Integration Example"}),e.jsx(o.p,{children:"One of the biggest improvements is built-in form field support:"}),e.jsx(n,{code:`- <div>
-   <label htmlFor="person-combobox">Select Person</label>
-   <Combobox
-     id="person-combobox"
-     options={options}
-     onClick={(option) => setSelected(option)}
-   />
-   <span className="helper-text">Choose a person to assign</span>
-   {error && <span className="error">{error}</span>}
- </div>
+ <Dropdown
+   id="person-dropdown"
+   searchable
+   boxMode
+   label="Select Person"
+   helperText="Choose a person to assign"
+   error={error}
+   required
+   options={options}
+   onChange={(option) => setSelected(option)}
+   ariaLabel="Select person"
+ />`}),e.jsx(o.h2,{id:"faq-",children:"FAQ ❓"}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Q: When should I migrate to Dropdown box mode?"}),`
A: We recommend migrating when updating your codebase or when you need the enhanced accessibility and performance features. The new implementation is production-ready.`]}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Q: Will Combobox be removed?"}),`
A: Yes, Combobox will be removed in Vibe 4. We'll provide ample notice and migration support.`]}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Q: Can I use both Combobox and Dropdown box mode during migration?"}),`
A: Yes, you can use both during the migration period. Migrate components incrementally at your own pace.`]}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Q: What if I have a large number of Combobox instances?"}),`
A: Start with new features and gradually migrate existing ones. The migration is straightforward and can be done incrementally.`]}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Q: Are there any features missing from Dropdown box mode?"}),`
A: Dropdown box mode covers all major use cases. If you're using advanced Combobox features, check the prop migration reference or reach out for help.`]})]}),`
`,e.jsx(o.h2,{id:"help-",children:"Help 🙏"}),`
`,e.jsx(o.p,{children:"If you have any questions, feedback, or need help with migration, please don't hesitate to reach out:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"GitHub Issues"}),": ",e.jsx(o.a,{href:"https://github.com/mondaycom/vibe/issues/new/choose",rel:"nofollow",children:"Report issues"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"GitHub Discussions"}),": ",e.jsx(o.a,{href:"https://github.com/mondaycom/vibe/discussions",rel:"nofollow",children:"Ask questions"})]}),`
`]})]})}function b(i={}){const{wrapper:o}={...s(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(r,{...i})}):r(i)}export{b as default};
