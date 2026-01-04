import{j as o}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as l}from"./index-BfNsOeqz.js";import{M as a,C as i}from"./index-BYJnOoku.js";import{D as h,M as c,a as m,I as u,b as w}from"./dropdown-in-modals.stories-DLdzApv-.js";import{l as t}from"./tip-CK87uV3P.js";import{a as s}from"./link-CVYAeutz.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-yJjQv8ft.js";import"./index-CDcywKeq.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./ModalExampleContent-onqsteLs.js";import"./Flex-DIp2zxrn.js";import"./index-BpvXyOxN.js";import"./Clickable-DHJc0oio.js";import"./useClickableProps-f6_q31tC.js";import"./keyCodes-BtXLi1ea.js";import"./useMergeRef-DmpwoaL5.js";import"./function-utils-BT-tMqNc.js";import"./noop-DX6rZLP_.js";import"./withStaticProps-BEcHOprC.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./Skeleton-C1JxO6Wz.js";import"./test-ids-utils-DBF55-X4.js";import"./constants-BFnbiwiw.js";import"./typesciptCssModulesHelper-DQ-2Bs84.js";import"./withStaticProps-DfSG2La2.js";import"./LegacyModal-Cf3-RZc5.js";import"./Text-DxGBAgI1.js";import"./TypographyConstants-j7sP5Y8J.js";import"./index-C-yBOSr8.js";import"./debounce-D3NSP8gs.js";import"./Tooltip-WZdDHKve.js";import"./DialogConstants-C6vctR8T.js";import"./Icon-CpEYCgaz.js";import"./useEventListener-CkU0kzyk.js";import"./index-Dedp4W2d.js";import"./CSSTransition-CWtXmFMf.js";import"./extends-B6xKY8K9.js";import"./function-utils-CgdCy1w7.js";import"./Heading-BRC2G7st.js";import"./CloseSmall-DUYWL2FE.js";import"./_tslib-Ct4JumdA.js";import"./IconButton-_JclEtT6.js";import"./Button-D6WYxEhH.js";import"./Loader-BabV-h63.js";import"./AddSmall-DFewX5rK.js";import"./index-gB5zY9qh.js";import"./index-CkU0kzyk.js";import"./ssr-utils-Do6V6AqB.js";import"./keyCodes-B-UZ88ng.js";import"./Dropdown-D9QSm6XU.js";import"./inheritsLoose-C4PSNlvh.js";import"./memoize-one.esm-CcMeOnPo.js";import"./index-Dk74W0Oi.js";import"./sizes-BOsbvv4u.js";import"./Chips-CPg2hm5b.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./colors-vars-map-B-3B1jIC.js";import"./Avatar-DNY_DuOT.js";import"./isNil-CHIgUVhi.js";import"./index-ChMa3XFl.js";import"./index-BxdhJjph.js";import"./dom-utils-DHb5sSO5.js";import"./DropdownChevronDown-Ck7VmPfy.js";import"./Counter-Cu1tFSzY.js";import"./index-DPTcyynS.js";import"./SwitchTransition-BdYiaobP.js";import"./DialogContentContainer-BeKFb57x.js";import"./Box-CSuEa9xb.js";import"./Flex-qb9MRXYX.js";import"./withStaticProps-DibdfTK_.js";const p=()=>o.jsx(t,{type:t.types.WARNING,emoji:"⚠️",title:"Known issue",children:`This solution have a serious issue - it doesn't properly support options-scrolling on popovers when lacking of screen space. 
    We recommend checking using other options instead of this one.`});function d(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...l(),...n.components},{RelatedComponents:r}=e;return r||f("RelatedComponents"),o.jsxs(o.Fragment,{children:[o.jsx(a,{of:h}),`
`,o.jsx(e.h1,{id:"display-dropdowns-inside-pop-overs",children:"Display dropdowns inside pop-overs"}),`
`,o.jsx("p",{children:o.jsx(t,{title:"New Dropdown Available",emoji:"🚀",children:o.jsxs(e.p,{children:["Consider using the new ",o.jsx(s,{href:"/?path=/docs/components-dropdown-alpha--docs",children:"Dropdown component"}),` which
handles pop-overs automatically without requiring these workarounds. It's built with better accessibility and
performance.`]})})}),`
`,o.jsx(e.h2,{id:"problem-description",children:"Problem description"}),`
`,o.jsxs(e.p,{children:["Our dropdowns are implemented using the ",o.jsx(s,{href:"https://react-select.com/home",withoutSpacing:!0,children:"React Select"}),` library.
One of the styling issues with React Select dropdowns is that the menu is not fully displayed when its container has `,o.jsx("code",{children:"overflow: hidden"}),", ",o.jsx("code",{children:"overflow: auto"}),", or ",o.jsx("code",{children:"overflow: scroll"}),`.
As a result, when dropdown menus are placed inside a scrolling container or within a Vibe's dialog or modal, the dropdown menu appears damaged, as you can see in the following examples.`]}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(e.p,{children:`To address this problem, we need to adjust the styling of the dropdown menu to ensure it appears correctly even within these specific container.
We implemented few methods for solving this issue.`}),`
`,o.jsx(e.h2,{id:"solution-1-menuposition--fixed",children:"Solution 1: menuPosition = 'fixed'"}),`
`,o.jsxs(e.p,{children:["To handle straightforward scenarios of displaying dropdowns inside a container with relevant overflow styles, you can set ",o.jsx("code",{children:"menuPosition"})," prop to ",o.jsx("code",{children:"Dropdown.menuPositions.FIXED"}),`.
This prop overrides the dropdown menu's default settings and ensures proper display within the container.
`,o.jsx(e.strong,{children:"This solution will work for most cases single select dropdown inside Vibe's Modal or DialogContentContainer, it will not work properly for Vibe's Dialog."})]}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(e.h2,{id:"solution-2-insideoverflowcontainer",children:"Solution 2: insideOverflowContainer"}),`
`,o.jsxs(e.p,{children:["To handle straightforward scenarios of displaying dropdowns inside a container with relevant overflow styles, you can utilize our dropdown's ",o.jsx("code",{children:"insideOverflowContainer"}),` prop.
This prop overrides the dropdown menu's default settings and ensures proper display within the container.
`,o.jsx(e.strong,{children:"This solution will work for single select dropdown inside Vibe's Modal or DialogContentContainer cases, it will not work for Vibe's Dialog."})]}),`
`,o.jsx(p,{}),`
`,o.jsx(e.p,{children:`Please note that this solution is intended for the most basic use cases and may not function optimally if your
overflow container has one parent or more with conflicting overflow definitions.`}),`
`,o.jsx(i,{of:u}),`
`,o.jsx(e.h2,{id:"solution-3-insideoverflowwithtransformcontainer",children:"Solution 3: insideOverflowWithTransformContainer"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx("code",{children:"insideOverflowContainer"}),` prop will not function as expected for dropdowns displayed inside Vibe's dialog components.
The reason is that Vibe dialogs use CSS transform to position the dialog next to the attached element.
For this specific case, use the 'insideOverflowWithTransformContainer' prop to ensure proper display and functionality.`]}),`
`,o.jsx(p,{}),`
`,o.jsx(i,{of:w}),`
`,o.jsx(e.h2,{id:"solution-4-popupscontainerselector",children:"Solution 4: popupsContainerSelector"}),`
`,o.jsxs(e.p,{children:["For the most complex use cases, you can utilize our dropdown's ",o.jsx("code",{children:"popupsContainerSelector"}),` prop.
This prop allows you to render all the dropdown's popovers in a different node in the DOM, as specified by the provided selector.
This prop will solve all the issues described before and also allow you to control under which DOM element other dropdown containers will render.
To implement this solution and ensure proper display of all dropdown popovers, you need to define a few styles for the container selector, as shown in the following code example:`]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`.container {
  top: 0; // Set the container and the beginning of the web page
  right: 0; // Set the container and the beginning of the web page
  position: "fixed"; // The container should not move when scrolling the web page
  width: "100%"; // The container should cover the whole viewport
  height: "100%"; // The container should cover the whole viewport
  pointerevents: "none"; // The container should not block any event
  zindex: 99999; // The container z index should be heigher from the z-index of the modal/dialog which contains the dropdown itself
}
.container * {
  pointer-events: auto; // all container children should handle events as usual
}
`})}),`
`,o.jsx(e.p,{children:`This solution can be useful for multiselection dropdown with single line state, which contains multiple popovers (one for the dropdown menu and one for the selections which hidden under the counter).
If you have defined the dropdown's popovers container styles as required, you can use it as demonstrated in the following example:`}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`<div>
  <div
    id="popovers-container"
    style={{
      position: "fixed",
      width: "100%",
      pointerEvents: "none",
      zIndex: 99999,
      height: "100%",
      top: 0,
      right: 0
    }}
    className={styles.pointerEventsAutoToAllChildren}
  />
  <Button onClick={() => setShow(true)}>Open Modal</Button>
  <Modal id="modal-with-multiple-choice" title="Modal with dropdown" show={show} onClose={closeModal}>
    <ModalContent>
      <Dropdown multi options={options} popupsContainerSelector="#popovers-container" />
    </ModalContent>
  </Modal>
</div>
`})}),`
`,o.jsx(r,{componentsNames:["Dialog","Dropdown","DialogContentContainer"]})]})}function Fo(n={}){const{wrapper:e}={...l(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(d,{...n})}):d(n)}function f(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Fo as default};
