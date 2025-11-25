import{j as n}from"./jsx-runtime-lwGtIXvq.js";import{r as t}from"./index-CTZeEbLr.js";import{a as y}from"./index-B-lxVbXh.js";import{c as C}from"./index-BpvXyOxN.js";import{r as N}from"./range-D3V44zw2.js";import{u as k}from"./useGridKeyboardNavigation-z8aN9zIc.js";import{B as O}from"./Button-zprqw9Vf.js";const _=72,h=24,L=y("item selected"),j={title:"Hooks/useGridKeyboardNavigation"},s={render:()=>{const m=t.useRef(null),d=[2,4,6],[i,I]=t.useState(15),[o,v]=t.useState(4),x=t.useMemo(()=>o*_+2*h,[o]),r=t.useMemo(()=>N(i).map(e=>`${e}.`),[i]),p=t.useCallback(e=>r[e],[r]),{activeIndex:f,onSelectionAction:u}=k({ref:m,numberOfItemsInLine:o,itemsCount:i,getItemByIndex:p,onItemClicked:L,disabledIndexes:d}),g=t.useCallback(e=>()=>u(e),[u]);return n.jsxs("div",{children:[n.jsx("div",{className:"use-grid-keyboard-nav-comp-wrapper",style:{width:x},ref:m,tabIndex:-1,children:r.map((e,a)=>n.jsx(O,{disabled:d.includes(a),onClick:g(a),kind:"secondary",className:C("use-grid-keyboard-nav-item",{"active-item":a===f}),children:e},e))}),n.jsxs("div",{className:"use-grid-keyboard-nav-controls",children:[n.jsxs("div",{children:["Items count:"," ",n.jsx("input",{value:i,onChange:e=>I(Number(e.target.value)),type:"number",min:1})]}),n.jsxs("div",{children:["Number of items in line:"," ",n.jsx("input",{value:o,onChange:e=>v(Number(e.target.value)),type:"number",min:1})]})]})]})},name:"Overview"};var c,l,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const S=["Overview"],A=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,__namedExportsOrder:S,default:j},Symbol.toStringTag,{value:"Module"}));export{s as O,A as U};
