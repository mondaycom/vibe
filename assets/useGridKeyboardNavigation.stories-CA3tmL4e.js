import{r as t,R as n}from"./index-Hemj67b4.js";import{a as f}from"./index-B-lxVbXh.js";import{c as x}from"./index-BpvXyOxN.js";import{u as N}from"./useGridKeyboardNavigation-3hc_Zu7D.js";import{B as k}from"./Button-t0_MS1N7.js";import{r as O}from"./range-Bu-eLZAw.js";const E=72,_=24,L=f("item selected"),S={title:"Hooks/useGridKeyboardNavigation"},s={render:()=>{const m=t.useRef(null),u=[2,4,6],[i,I]=t.useState(15),[a,v]=t.useState(4),p=t.useMemo(()=>a*E+2*_,[a]),o=t.useMemo(()=>O(i).map(e=>`${e}.`),[i]),y=t.useCallback(e=>o[e],[o]),{activeIndex:g,onSelectionAction:d}=N({ref:m,numberOfItemsInLine:a,itemsCount:i,getItemByIndex:y,onItemClicked:L,disabledIndexes:u}),C=t.useCallback(e=>()=>d(e),[d]);return n.createElement("div",null,n.createElement("div",{className:"use-grid-keyboard-nav-comp-wrapper",style:{width:p},ref:m,tabIndex:-1},o.map((e,r)=>n.createElement(k,{key:e,disabled:u.includes(r),onClick:C(r),kind:"secondary",className:x("use-grid-keyboard-nav-item",{"active-item":r===g})},e))),n.createElement("div",{className:"use-grid-keyboard-nav-controls"},n.createElement("div",null,"Items count:"," ",n.createElement("input",{value:i,onChange:e=>I(Number(e.target.value)),type:"number",min:1})),n.createElement("div",null,"Number of items in line:"," ",n.createElement("input",{value:a,onChange:e=>v(Number(e.target.value)),type:"number",min:1}))))},name:"Overview"};var c,l,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef(null);
    const disabledIndexes = [2, 4, 6];
    const [itemsCount, setItemsCount] = useState<number>(15);
    const [numberOfItemsInLine, setNumberOfItemsInLine] = useState<number>(4);
    const width = useMemo(() => numberOfItemsInLine * ELEMENT_WIDTH_PX + 2 * PADDING_PX, [numberOfItemsInLine]);
    const items: string[] = useMemo(() => range(itemsCount).map((num: number) => \`\${num}.\`), [itemsCount]);
    const getItemByIndex = useCallback((index: number) => items[index], [items]);
    const {
      activeIndex,
      onSelectionAction
    } = useGridKeyboardNavigation({
      ref,
      numberOfItemsInLine,
      itemsCount,
      getItemByIndex,
      onItemClicked: ON_CLICK,
      disabledIndexes
    });
    const onClickByIndex = useCallback((index: number) => () => onSelectionAction(index), [onSelectionAction]);
    return <div>
        <div className="use-grid-keyboard-nav-comp-wrapper" style={{
        width
      }} ref={ref} tabIndex={-1}>
          {items.map((item, index) => <Button key={item} disabled={disabledIndexes.includes(index)} onClick={onClickByIndex(index)} kind="secondary" className={cx("use-grid-keyboard-nav-item", {
          "active-item": index === activeIndex
        })}>
              {item}
            </Button>)}
        </div>
        <div className="use-grid-keyboard-nav-controls">
          <div>
            Items count:{" "}
            <input value={itemsCount} onChange={e => setItemsCount(Number(e.target.value))} type="number" min={1} />
          </div>
          <div>
            Number of items in line:{" "}
            <input value={numberOfItemsInLine} onChange={e => setNumberOfItemsInLine(Number(e.target.value))} type="number" min={1} />
          </div>
        </div>
      </div>;
  },
  name: "Overview"
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const B=["Overview"],A=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{s as O,A as U};
