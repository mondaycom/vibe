import{j as r}from"./jsx-runtime-lwGtIXvq.js";import{r as n}from"./index-CTZeEbLr.js";import{a as f,G as c}from"./useGridKeyboardNavigation-BxWlzq0Q.js";import{c as I}from"./createStoryMetaSettingsDecorator-M9remOuO.js";import{D as d,L as b}from"./useGridKeyboardNavigationContext.stories.helpers-ZF6OWuQy.js";import{i as D,a as T,c as j,t as a,e as x}from"./interactions-utils-BR-zX9e0.js";import{r as K}from"./interactions-helper-BLVzu_Hd.js";import{F as y}from"./Flex-Brm3wHG7.js";const O=async e=>{const t=await T(e,"TL 3");j(t),await a("{arrowRight}",2),await i("TL 5"),await a("{arrowRight}",2),await i("TR 1"),await a("{arrowDown}",2),await i("TR 5"),await a("{arrowLeft}",3),await i("TL 1"),await a("{arrowDown}",4),await i("TB 5"),await a("{arrowDown}",1),await i("BL 1"),await a("{arrowUp}",1),await i("TB 5"),await a("{arrowUp}",3),await i("TL 4")},p=D({tests:[O],afterEach:async()=>{await K()}});async function i(e){const t=document.getElementsByClassName("active-item");x(t).toHaveLength(1),x(t[0]).toHaveTextContent(e)}try{p.displayName="useGridContextMultipleDepthsPlaySuite",p.__docgenInfo={description:"",displayName:"useGridContextMultipleDepthsPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const R=I({component:f}),_={title:"Hooks/useGridKeyboardNavigationContext",component:f,argTypes:R.argTypes,decorators:R.decorators},l={render:()=>{const e=n.useRef(null),t=n.useRef(null),o=n.useRef(null),s=f([{leftElement:t,rightElement:o}],e);return r.jsx(c.Provider,{value:s,children:r.jsxs(y,{ref:e,children:[r.jsx(d,{ref:t,itemsCount:15,numberOfItemsInLine:4,itemPrefix:"L"}),r.jsx(d,{ref:o,itemsCount:7,numberOfItemsInLine:2,itemPrefix:"R"})]})})},name:"Overview"},m={render:()=>{const e=n.useRef(null),t=n.useRef(null),o=n.useRef(null),s=n.useRef(null),P=f([{topElement:t,bottomElement:o},{topElement:o,bottomElement:s}],e);return r.jsx(c.Provider,{value:P,children:r.jsxs(y,{ref:e,direction:"column",justify:"center",className:"use-grid-keyboard-dummy-grid-wrapper",children:[r.jsx(d,{ref:t,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"T"}),r.jsx(d,{ref:o,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"M",disabled:!0}),r.jsx(d,{ref:s,itemsCount:3,numberOfItemsInLine:3,itemPrefix:"B"})]})})},name:"Disabled Elements"},u={render:()=>{const e=n.useRef(null),t=n.useRef(null),o=n.useRef(null),s=f([{topElement:t,bottomElement:o}],e);return r.jsx(c.Provider,{value:s,children:r.jsxs(y,{id:"twoGridLayoutsWrapper",ref:e,direction:"column",tabIndex:-1,children:[r.jsx(b,{id:"gridLayoutTop",itemPrefix:"T",ref:t}),r.jsx(b,{id:"gridLayoutBottom",itemPrefix:"B",ref:o})]})})},name:"Multiple Depths",play:p};var g,E,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var w,C,L;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var h,N,G;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(G=(N=u.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};const S=["Overview","DisabledElements","MultipleDepths"],V=Object.freeze(Object.defineProperty({__proto__:null,DisabledElements:m,MultipleDepths:u,Overview:l,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{m as D,u as M,l as O,V as U};
