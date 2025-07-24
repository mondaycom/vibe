import{r as m,R as s}from"./index-Hemj67b4.js";import{c as d}from"./index-BpvXyOxN.js";import{F as y}from"./Flex-DIvs4XZj.js";import{S as w}from"./Search-CBvUGcBN.js";import{r as C}from"./interactions-helper-Bq4hWQWq.js";import{i as R,p as n,f as O,e as I}from"./interactions-utils-BDSgavBb.js";import{N as a,g as S,b as A}from"./test-ids-utils-9ISiqDto.js";import{u as f}from"./index-Bs0C4iL5.js";const g="_visualFocus_rjk6q_2",r={visualFocus:g},x=R({tests:[_],afterEach:async()=>{await C()}});async function N(t){return await O(t,S(A.SEARCH))}async function i(t){I(document.activeElement).toEqual(t)}async function c(t){const e=document.getElementsByClassName(r.visualFocus);I(e).toHaveLength(1),I(e[0]).toHaveTextContent(t)}async function _(t){const e=await N(t);e.focus(),await n(a.DOWN_ARROW),await c("Item 1"),await i(e),await n(a.DOWN_ARROW),await c("Item 2"),await i(e),await n(a.UP_ARROW),await c("Item 1"),await i(e),await n(a.UP_ARROW),await c("Item 3"),await i(e),await n(a.DOWN_ARROW),await c("Item 1"),await i(e)}const b={title:"Hooks/useActiveDescendantListFocus"},o={render:()=>{const t=m.useRef(null),e=["id-1","id-2","id-3"],k=m.useCallback(()=>!0,[]),l=m.useCallback(()=>{alert("clicked")},[]),{focusedElementProps:v,visualFocusItemId:u}=f({focusedElementRef:t,focusedElementRole:f.roles.COMBOBOX,itemsIds:e,onItemClick:l,isItemSelectable:k,isHorizontalList:!1,isIgnoreSpaceAsItemSelection:!0});return s.createElement(y,{direction:"column"},s.createElement(w,{ref:t,role:v.role,currentAriaResultId:v["aria-activedescendant"]}),s.createElement("ul",null,s.createElement("li",{onClick:l,className:d({[r.visualFocus]:u==="id-1"}),id:"id-1",key:"id-1"},"Item 1"),s.createElement("li",{onClick:l,className:d({[r.visualFocus]:u==="id-2"}),id:"id-2",key:"id-2"},"Item 2"),s.createElement("li",{onClick:l,className:d({[r.visualFocus]:u==="id-3"}),id:"id-3",key:"id-3"},"Item 3")))},name:"Overview",play:x};var p,F,E;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const focusedElementRef = useRef<HTMLInputElement | null>(null);
    const itemsIds: string[] = ["id-1", "id-2", "id-3"];
    const isItemSelectable = useCallback((): boolean => true, []);
    const onItemClick = useCallback((): void => {
      alert("clicked");
    }, []);
    const {
      focusedElementProps,
      visualFocusItemId
    } = useActiveDescendantListFocus({
      focusedElementRef,
      focusedElementRole: useActiveDescendantListFocus.roles.COMBOBOX,
      itemsIds,
      onItemClick,
      isItemSelectable,
      isHorizontalList: false,
      isIgnoreSpaceAsItemSelection: true
    });
    return <Flex direction="column">
        <Search ref={focusedElementRef}
      // @ts-ignore
      role={focusedElementProps.role} currentAriaResultId={focusedElementProps["aria-activedescendant"]} />
        <ul>
          <li onClick={onItemClick} className={cx({
          [styles.visualFocus]: visualFocusItemId === "id-1"
        })} id="id-1" key="id-1">
            Item 1
          </li>
          <li onClick={onItemClick} className={cx({
          [styles.visualFocus]: visualFocusItemId === "id-2"
        })} id="id-2" key="id-2">
            Item 2
          </li>
          <li onClick={onItemClick} className={cx({
          [styles.visualFocus]: visualFocusItemId === "id-3"
        })} id="id-3" key="id-3">
            Item 3
          </li>
        </ul>
      </Flex>;
  },
  name: "Overview",
  // @ts-ignore
  play: overviewInteractionSuite
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const L=["Overview"],U=Object.freeze(Object.defineProperty({__proto__:null,Overview:o,__namedExportsOrder:L,default:b},Symbol.toStringTag,{value:"Module"}));export{o as O,U};
