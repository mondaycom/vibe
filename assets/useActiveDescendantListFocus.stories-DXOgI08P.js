import{j as s}from"./jsx-runtime-DDzbWKUH.js";import{r as d}from"./index-Hemj67b4.js";import{c as m}from"./index-BpvXyOxN.js";import{F as x}from"./Flex-BEu-Gd_z.js";import{S as y}from"./Search-CCKm7GTu.js";import{r as C}from"./interactions-helper-Bq4hWQWq.js";import{i as E,p as n,f as O,e as I}from"./interactions-utils-DS6eZy-C.js";import{N as i,g as R,b as S}from"./test-ids-utils-CSfXomCJ.js";import{u as f}from"./index-Bs0C4iL5.js";const A="_visualFocus_rjk6q_2",r={visualFocus:A},g=E({tests:[_],afterEach:async()=>{await C()}});async function N(t){return await O(t,R(S.SEARCH))}async function a(t){I(document.activeElement).toEqual(t)}async function o(t){const e=document.getElementsByClassName(r.visualFocus);I(e).toHaveLength(1),I(e[0]).toHaveTextContent(t)}async function _(t){const e=await N(t);e.focus(),await n(i.DOWN_ARROW),await o("Item 1"),await a(e),await n(i.DOWN_ARROW),await o("Item 2"),await a(e),await n(i.UP_ARROW),await o("Item 1"),await a(e),await n(i.UP_ARROW),await o("Item 3"),await a(e),await n(i.DOWN_ARROW),await o("Item 1"),await a(e)}const b={title:"Hooks/useActiveDescendantListFocus"},c={render:()=>{const t=d.useRef(null),e=["id-1","id-2","id-3"],w=d.useCallback(()=>!0,[]),l=d.useCallback(()=>{alert("clicked")},[]),{focusedElementProps:v,visualFocusItemId:u}=f({focusedElementRef:t,focusedElementRole:f.roles.COMBOBOX,itemsIds:e,onItemClick:l,isItemSelectable:w,isHorizontalList:!1,isIgnoreSpaceAsItemSelection:!0});return s.jsxs(x,{direction:"column",children:[s.jsx(y,{ref:t,role:v.role,currentAriaResultId:v["aria-activedescendant"]}),s.jsxs("ul",{children:[s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-1"}),id:"id-1",children:"Item 1"},"id-1"),s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-2"}),id:"id-2",children:"Item 2"},"id-2"),s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-3"}),id:"id-3",children:"Item 3"},"id-3")]})]})},name:"Overview",play:g};var p,F,k;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(k=(F=c.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const j=["Overview"],U=Object.freeze(Object.defineProperty({__proto__:null,Overview:c,__namedExportsOrder:j,default:b},Symbol.toStringTag,{value:"Module"}));export{c as O,U};
