import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{r as n}from"./index-CTZeEbLr.js";import{c as I}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{D as d,L as b}from"./useGridKeyboardNavigationContext.stories.helpers-BiuR4N0K.js";import{i as P,r as D,a as T,c as j,t as a,e as x}from"./interactions-utils-CEzMMPBA.js";import{a as f,G as c}from"./useGridKeyboardNavigation-z8aN9zIc.js";import{F as p}from"./Flex-Bimzf4jb.js";const K=async r=>{const e=await T(r,"TL 3");j(e),await a("{arrowRight}",2),await i("TL 5"),await a("{arrowRight}",2),await i("TR 1"),await a("{arrowDown}",2),await i("TR 5"),await a("{arrowLeft}",3),await i("TL 1"),await a("{arrowDown}",4),await i("TB 5"),await a("{arrowDown}",1),await i("BL 1"),await a("{arrowUp}",1),await i("TB 5"),await a("{arrowUp}",3),await i("TL 4")},O=P({tests:[K],afterEach:async()=>{await D()}});async function i(r){const e=document.getElementsByClassName("active-item");x(e).toHaveLength(1),x(e[0]).toHaveTextContent(r)}const R=I({component:f}),k={title:"Hooks/useGridKeyboardNavigationContext",component:f,argTypes:R.argTypes,decorators:R.decorators},l={render:()=>{const r=n.useRef(null),e=n.useRef(null),o=n.useRef(null),s=f([{leftElement:e,rightElement:o}],r);return t.jsx(c.Provider,{value:s,children:t.jsxs(p,{ref:r,children:[t.jsx(d,{ref:e,itemsCount:15,numberOfItemsInLine:4,itemPrefix:"L"}),t.jsx(d,{ref:o,itemsCount:7,numberOfItemsInLine:2,itemPrefix:"R"})]})})},name:"Overview"},m={render:()=>{const r=n.useRef(null),e=n.useRef(null),o=n.useRef(null),s=n.useRef(null),G=f([{topElement:e,bottomElement:o},{topElement:o,bottomElement:s}],r);return t.jsx(c.Provider,{value:G,children:t.jsxs(p,{ref:r,direction:"column",justify:"center",className:"use-grid-keyboard-dummy-grid-wrapper",children:[t.jsx(d,{ref:e,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"T"}),t.jsx(d,{ref:o,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"M",disabled:!0}),t.jsx(d,{ref:s,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"B"})]})})},name:"Disabled Elements"},u={render:()=>{const r=n.useRef(null),e=n.useRef(null),o=n.useRef(null),s=f([{topElement:e,bottomElement:o}],r);return t.jsx(c.Provider,{value:s,children:t.jsxs(p,{id:"twoGridLayoutsWrapper",ref:r,direction:"column",tabIndex:-1,children:[t.jsx(b,{id:"gridLayoutTop",itemPrefix:"T",ref:e}),t.jsx(b,{id:"gridLayoutBottom",itemPrefix:"B",ref:o})]})})},name:"Multiple Depths",play:O};var y,E,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const wrapperRef = useRef(null);
    const leftElRef = useRef(null);
    const rightElRef = useRef(null);
    const keyboardContext = useGridKeyboardNavigationContext([{
      leftElement: leftElRef,
      rightElement: rightElRef
    }], wrapperRef);
    return <GridKeyboardNavigationContext.Provider value={keyboardContext}>
        <Flex ref={wrapperRef}>
          <DummyNavigableGrid ref={leftElRef} itemsCount={15} numberOfItemsInLine={4} itemPrefix="L" />
          <DummyNavigableGrid ref={rightElRef} itemsCount={7} numberOfItemsInLine={2} itemPrefix="R" />
        </Flex>
      </GridKeyboardNavigationContext.Provider>;
  },
  name: "Overview"
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var g,w,C;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const wrapperRef = useRef(null);
    const topElRef = useRef(null);
    const middleElRef = useRef(null);
    const bottomElRef = useRef(null);
    const keyboardContext = useGridKeyboardNavigationContext([{
      topElement: topElRef,
      bottomElement: middleElRef
    }, {
      topElement: middleElRef,
      bottomElement: bottomElRef
    }], wrapperRef);
    return <GridKeyboardNavigationContext.Provider value={keyboardContext}>
        <Flex ref={wrapperRef} direction="column" justify="center" className="use-grid-keyboard-dummy-grid-wrapper">
          <DummyNavigableGrid ref={topElRef} itemsCount={3} numberOfItemsInLine={3} itemPrefix="T" />
          <DummyNavigableGrid ref={middleElRef} itemsCount={3} numberOfItemsInLine={3} itemPrefix="M" disabled />
          <DummyNavigableGrid ref={bottomElRef} itemsCount={3} numberOfItemsInLine={3} itemPrefix="B" />
        </Flex>
      </GridKeyboardNavigationContext.Provider>;
  },
  name: "Disabled Elements"
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,N,h;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const wrapperRef = useRef(null);
    const topElRef = useRef(null);
    const bottomElRef = useRef(null);
    const keyboardContext = useGridKeyboardNavigationContext([{
      topElement: topElRef,
      bottomElement: bottomElRef
    }], wrapperRef);
    return <GridKeyboardNavigationContext.Provider value={keyboardContext}>
        <Flex id="twoGridLayoutsWrapper" ref={wrapperRef} direction="column" tabIndex={-1}>
          <LayoutWithInnerKeyboardNavigation id="gridLayoutTop" itemPrefix="T" ref={topElRef} />
          <LayoutWithInnerKeyboardNavigation id="gridLayoutBottom" itemPrefix="B" ref={bottomElRef} />
        </Flex>
      </GridKeyboardNavigationContext.Provider>;
  },
  name: "Multiple Depths",
  play: useGridContextMultipleDepthsPlaySuite
}`,...(h=(N=u.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};const B=["Overview","DisabledElements","MultipleDepths"],z=Object.freeze(Object.defineProperty({__proto__:null,DisabledElements:m,MultipleDepths:u,Overview:l,__namedExportsOrder:B,default:k},Symbol.toStringTag,{value:"Module"}));export{m as D,u as M,l as O,z as U};
