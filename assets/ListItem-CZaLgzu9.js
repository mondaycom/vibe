import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as p}from"./index-BfNsOeqz.js";import{M as a}from"./index-BiG4tPdb.js";import{L as d,O as l,S as c,W as h,a as x,b as j,c as f,R as u}from"./ListItem.stories-CDnzHL0R.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CHHHc5Xd.js";import"./index-DyoOSvta.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./Settings-DHIMnErx.js";import"./index-DXCg-GMl.js";import"./Invite-0V4zx4R3.js";import"./AddSmall-B_5viru5.js";import"./Workspace-BRy0vdK8.js";import"./Calendar-DUM0ORSW.js";import"./Table-COtoXgIc.js";import"./Check-BhuJDOHf.js";import"./CloseSmall-s783aDlP.js";import"./Delete-rsE7lq-b.js";import"./Drag-Ds0nT9eq.js";import"./Remove-BN6wnPjE.js";import"./DropdownChevronRight-C951c-JF.js";import"./Wand-CDIW39RM.js";import"./NewTab-BAQw6vct.js";import"./Info-LYrK74vc.js";import"./NavigationChevronRight-BDrJkoFj.js";import"./Person-C6oC2dzb.js";import"./Search-B-LsiQVE.js";import"./SortDescending-zUObFE7J.js";import"./Upgrade-CdQgCbE5.js";import"./createStoryMetaSettingsDecorator-Bbe8Ja5t.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./person1-D9Wcho68.js";import"./ListItem-75YzY7J5.js";import"./index-BpvXyOxN.js";import"./test-ids-utils-BSSgvOTA.js";import"./constants-DEBzQJwg.js";import"./BaseList-CluxU9Q3.js";import"./BaseItem-uV07xMMf.js";import"./keyCodes-Bl0ZAmu_.js";import"./Text-C9zblM82.js";import"./Typography-BI-EVOcm.js";import"./index-CqkoFCDi.js";import"./debounce-D3NSP8gs.js";import"./Tooltip-CYaljkNX.js";import"./Flex-C1guINwO.js";import"./Clickable-CiK3QIo7.js";import"./useClickableProps-CHMXaGyE.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./ssr-utils-Do6V6AqB.js";import"./constants-DSKsPEup.js";import"./noop-DX6rZLP_.js";import"./camelCase-CO1PkVrH.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./Icon-D74ZAp4x.js";import"./useEventListener-CkU0kzyk.js";import"./useKeyEvent-BeN1aNjK.js";import"./index-BKMrxRLL.js";import"./CSSTransition-Dhcv5TuQ.js";import"./extends-CCbyfPlC.js";import"./Avatar-B5FZp7lp.js";import"./colors-vars-map-DuPRA0tY.js";import"./isNil-CHIgUVhi.js";function m(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...i.components},{Canvas:o,PropsTable:n,UsageGuidelines:s}=e;return o||r("Canvas"),n||r("PropsTable"),s||r("UsageGuidelines"),t.jsxs(t.Fragment,{children:[t.jsx(a,{of:d}),`
`,t.jsx(e.h1,{id:"listitem",children:"ListItem"}),`
`,t.jsx(e.p,{children:"An item of a List component."}),`
`,t.jsx(o,{of:l}),`
`,t.jsx(e.h3,{id:"import",children:"Import"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { List, ListItem } from "@vibe/core/next";
`})}),`
`,t.jsx(e.h2,{id:"props",children:"Props"}),`
`,t.jsx(n,{}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(s,{guidelines:["ListItem uses a data-driven API with label, startElement, and endElement props.","Use startElement with type 'icon' or 'avatar' to add visual elements before the label.","Use endElement with type 'suffix' or 'icon' to add visual elements after the label.","ListItem must be used within a List component."]}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(e.h3,{id:"states",children:"States"}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(e.h3,{id:"list-item-with-an-icon",children:"List item with an icon"}),`
`,t.jsxs(e.p,{children:["Use ",t.jsx(e.code,{children:"startElement"})," with ",t.jsx(e.code,{children:'type: "icon"'})," to add an icon before the label."]}),`
`,t.jsx(o,{of:h}),`
`,t.jsx(e.h3,{id:"list-item-with-an-avatar",children:"List item with an avatar"}),`
`,t.jsxs(e.p,{children:["Use ",t.jsx(e.code,{children:"startElement"})," with ",t.jsx(e.code,{children:'type: "avatar"'})," to add an avatar before the label."]}),`
`,t.jsx(o,{of:x}),`
`,t.jsx(e.h3,{id:"list-item-with-end-element",children:"List item with end element"}),`
`,t.jsxs(e.p,{children:["Use ",t.jsx(e.code,{children:"endElement"})," to add content after the label, such as keyboard shortcuts."]}),`
`,t.jsx(o,{of:j}),`
`,t.jsx(e.h3,{id:"with-click-handler",children:"With click handler"}),`
`,t.jsxs(e.p,{children:["Use ",t.jsx(e.code,{children:"onClick"})," to handle click events on the list item."]}),`
`,t.jsx(o,{of:f}),`
`,t.jsx(e.h3,{id:"read-only",children:"Read-only"}),`
`,t.jsxs(e.p,{children:["Use ",t.jsx(e.code,{children:"readOnly"})," to make an item non-interactive."]}),`
`,t.jsx(o,{of:u})]})}function Rt(i={}){const{wrapper:e}={...p(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(m,{...i})}):m(i)}function r(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Rt as default};
