import{r as n,R as t}from"./index-Hemj67b4.js";import{a as d,G as c}from"./useGridKeyboardNavigation-3hc_Zu7D.js";import{c as P}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{D as f,L as b}from"./useGridKeyboardNavigationContext.stories.helpers-DvHcj3g3.js";import{i as D,a as T,c as h,t as a,e as E}from"./interactions-utils-BDSgavBb.js";import{r as K}from"./interactions-helper-Bq4hWQWq.js";import{F as p}from"./Flex-DIvs4XZj.js";const O=async r=>{const e=await T(r,"TL 3");h(e),await a("{arrowRight}",2),await i("TL 5"),await a("{arrowRight}",2),await i("TR 1"),await a("{arrowDown}",2),await i("TR 5"),await a("{arrowLeft}",3),await i("TL 1"),await a("{arrowDown}",4),await i("TB 5"),await a("{arrowDown}",1),await i("BL 1"),await a("{arrowUp}",1),await i("TB 5"),await a("{arrowUp}",3),await i("TL 4")},k=D({tests:[O],afterEach:async()=>{await K()}});async function i(r){const e=document.getElementsByClassName("active-item");E(e).toHaveLength(1),E(e[0]).toHaveTextContent(r)}const R=P({component:d}),B={title:"Hooks/useGridKeyboardNavigationContext",component:d,argTypes:R.argTypes,decorators:R.decorators},l={render:()=>{const r=n.useRef(null),e=n.useRef(null),o=n.useRef(null),s=d([{leftElement:e,rightElement:o}],r);return t.createElement(c.Provider,{value:s},t.createElement(p,{ref:r},t.createElement(f,{ref:e,itemsCount:15,numberOfItemsInLine:4,itemPrefix:"L"}),t.createElement(f,{ref:o,itemsCount:7,numberOfItemsInLine:2,itemPrefix:"R"})))},name:"Overview"},m={render:()=>{const r=n.useRef(null),e=n.useRef(null),o=n.useRef(null),s=n.useRef(null),I=d([{topElement:e,bottomElement:o},{topElement:o,bottomElement:s}],r);return t.createElement(c.Provider,{value:I},t.createElement(p,{ref:r,direction:"column",justify:"center",className:"use-grid-keyboard-dummy-grid-wrapper"},t.createElement(f,{ref:e,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"T"}),t.createElement(f,{ref:o,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"M",disabled:!0}),t.createElement(f,{ref:s,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"B"})))},name:"Disabled Elements"},u={render:()=>{const r=n.useRef(null),e=n.useRef(null),o=n.useRef(null),s=d([{topElement:e,bottomElement:o}],r);return t.createElement(c.Provider,{value:s},t.createElement(p,{id:"twoGridLayoutsWrapper",ref:r,direction:"column",tabIndex:-1},t.createElement(b,{id:"gridLayoutTop",itemPrefix:"T",ref:e}),t.createElement(b,{id:"gridLayoutBottom",itemPrefix:"B",ref:o})))},name:"Multiple Depths",play:k};var y,x,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,w,C;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,N,G;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(N=u.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};const M=["Overview","DisabledElements","MultipleDepths"],z=Object.freeze(Object.defineProperty({__proto__:null,DisabledElements:m,MultipleDepths:u,Overview:l,__namedExportsOrder:M,default:B},Symbol.toStringTag,{value:"Module"}));export{m as D,u as M,l as O,z as U};
