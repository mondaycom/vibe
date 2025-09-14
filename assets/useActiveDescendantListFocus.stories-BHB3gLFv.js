import{j as s}from"./jsx-runtime-lwGtIXvq.js";import{r as d}from"./index-CTZeEbLr.js";import{c as m}from"./index-BpvXyOxN.js";import{F as E}from"./Flex-D6jv3OvD.js";import{S as _}from"./Search-DAVDN4z4.js";import{r as g}from"./interactions-helper-BLVzu_Hd.js";import{i as x,p as n,f as C,e as v}from"./interactions-utils-BiS5KEZv.js";import{N as i,g as R,b as O}from"./test-ids-utils-CSfXomCJ.js";import{u as f}from"./index-D7y6ogVE.js";const S="_visualFocus_rjk6q_2",r={visualFocus:S},p=x({tests:[A],afterEach:async()=>{await g()}});async function b(e){return await C(e,R(O.SEARCH))}async function a(e){v(document.activeElement).toEqual(e)}async function o(e){const t=document.getElementsByClassName(r.visualFocus);v(t).toHaveLength(1),v(t[0]).toHaveTextContent(e)}async function A(e){const t=await b(e);t.focus(),await n(i.DOWN_ARROW),await o("Item 1"),await a(t),await n(i.DOWN_ARROW),await o("Item 2"),await a(t),await n(i.UP_ARROW),await o("Item 1"),await a(t),await n(i.UP_ARROW),await o("Item 3"),await a(t),await n(i.DOWN_ARROW),await o("Item 1"),await a(t)}try{p.displayName="overviewInteractionSuite",p.__docgenInfo={description:"",displayName:"overviewInteractionSuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const N={title:"Hooks/useActiveDescendantListFocus"},c={render:()=>{const e=d.useRef(null),t=["id-1","id-2","id-3"],k=d.useCallback(()=>!0,[]),l=d.useCallback(()=>{alert("clicked")},[]),{focusedElementProps:I,visualFocusItemId:u}=f({focusedElementRef:e,focusedElementRole:f.roles.COMBOBOX,itemsIds:t,onItemClick:l,isItemSelectable:k,isHorizontalList:!1,isIgnoreSpaceAsItemSelection:!0});return s.jsxs(E,{direction:"column",children:[s.jsx(_,{ref:e,role:I.role,currentAriaResultId:I["aria-activedescendant"]}),s.jsxs("ul",{children:[s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-1"}),id:"id-1",children:"Item 1"},"id-1"),s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-2"}),id:"id-2",children:"Item 2"},"id-2"),s.jsx("li",{onClick:l,className:m({[r.visualFocus]:u==="id-3"}),id:"id-3",children:"Item 3"},"id-3")]})]})},name:"Overview",play:p};var y,F,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(F=c.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const h=["Overview"],M=Object.freeze(Object.defineProperty({__proto__:null,Overview:c,__namedExportsOrder:h,default:N},Symbol.toStringTag,{value:"Module"}));export{c as O,M as U};
