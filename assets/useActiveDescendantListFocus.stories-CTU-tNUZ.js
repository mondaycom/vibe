import{j as s}from"./jsx-runtime-lwGtIXvq.js";import{r as d}from"./index-CTZeEbLr.js";import{c as m}from"./index-BpvXyOxN.js";import{i as k,r as x,p as n,N as i,f as y,e as I}from"./interactions-utils-CEzMMPBA.js";import{g as E,C as O}from"./useMergeRef-Cs5OHCni.js";import{u as f}from"./index-DtzvftkN.js";import{S as R}from"./Search-1tqW-CcQ.js";import{F as S}from"./Flex-Bimzf4jb.js";const A="_visualFocus_1wz89_1",r={visualFocus:A},g=k({tests:[_],afterEach:async()=>{await x()}});async function N(t){return await y(t,E(O.SEARCH))}async function a(t){I(document.activeElement).toEqual(t)}async function o(t){const e=document.getElementsByClassName(r.visualFocus);I(e).toHaveLength(1),I(e[0]).toHaveTextContent(t)}async function _(t){const e=await N(t);e.focus(),await n(i.DOWN_ARROW),await o("Item 1"),await a(e),await n(i.DOWN_ARROW),await o("Item 2"),await a(e),await n(i.UP_ARROW),await o("Item 1"),await a(e),await n(i.UP_ARROW),await o("Item 3"),await a(e),await n(i.DOWN_ARROW),await o("Item 1"),await a(e)}const b={title:"Hooks/useActiveDescendantListFocus"},c={render:()=>{const t=d.useRef(null),e=["id-1","id-2","id-3"],C=d.useCallback(()=>!0,[]),l=d.useCallback(()=>{alert("clicked")},[]),{focusedElementProps:v,visualFocusItemId:u}=f({focusedElementRef:t,focusedElementRole:f.roles.COMBOBOX,itemsIds:e,onItemClick:l,isItemSelectable:C,isHorizontalList:!1,isIgnoreSpaceAsItemSelection:!0});return s.jsxs(S,{direction:"column",children:[s.jsx(R,{ref:t,role:v.role,currentAriaResultId:v["aria-activedescendant"]}),s.jsxs("ul",{children:[s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-1"}),id:"id-1",children:"Item 1"},"id-1"),s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-2"}),id:"id-2",children:"Item 2"},"id-2"),s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-3"}),id:"id-3",children:"Item 3"},"id-3")]})]})},name:"Overview",play:g};var p,F,w;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  play: overviewInteractionSuite
}`,...(w=(F=c.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const L=["Overview"],z=Object.freeze(Object.defineProperty({__proto__:null,Overview:c,__namedExportsOrder:L,default:b},Symbol.toStringTag,{value:"Module"}));export{c as O,z as U};
