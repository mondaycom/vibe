import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as c,R as Z}from"./index-CTZeEbLr.js";import{a as Xe,b as Ye,B as a}from"./BaseItem-B-sr_9RN.js";import{c as Ze}from"./index-BpvXyOxN.js";import{u as Qe}from"./useMergeRef-Do2VYePL.js";import{u as et}from"./useIsomorphicLayoutEffect-BBiFUoiz.js";import{u as tt}from"./index-gB5zY9qh.js";import{k as h}from"./keyCodes-DhPS-8Mm.js";import{t as H}from"./Person-XH7Sg-gK.js";import{l as nt}from"./Email-TZY0cRuW.js";import{e as O,l as $}from"./Settings-C9Ssqg9X.js";import{r as at}from"./Search-ClaS4_rs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./typesciptCssModulesHelper-DQ-2Bs84.js";import"./function-utils-CgdCy1w7.js";import"./Avatar-DNY_DuOT.js";import"./test-ids-utils-DBF55-X4.js";import"./constants-BFnbiwiw.js";import"./colors-vars-map-B-3B1jIC.js";import"./withStaticProps-DfSG2La2.js";import"./withStaticProps-BEcHOprC.js";import"./Icon-CpEYCgaz.js";import"./useMergeRef-DmpwoaL5.js";import"./noop-DX6rZLP_.js";import"./useEventListener-CkU0kzyk.js";import"./keyCodes-BtXLi1ea.js";import"./isNil-CHIgUVhi.js";import"./Clickable-DHJc0oio.js";import"./useClickableProps-f6_q31tC.js";import"./function-utils-BT-tMqNc.js";import"./Tooltip-WZdDHKve.js";import"./DialogConstants-C6vctR8T.js";import"./Flex-DIp2zxrn.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./index-BrqHMYbN.js";import"./index-Dedp4W2d.js";import"./CSSTransition-CWtXmFMf.js";import"./extends-B6xKY8K9.js";import"./Text-DxGBAgI1.js";import"./TypographyConstants-j7sP5Y8J.js";import"./index-C-yBOSr8.js";import"./debounce-D3NSP8gs.js";import"./ssr-utils-Do6V6AqB.js";import"./index-CkU0kzyk.js";import"./_tslib-Ct4JumdA.js";const it=["option","listitem","menuitem","tab","treeitem"],st={listbox:"option",menu:"menuitem",menubar:"menuitem",tablist:"tab",tree:"treeitem",list:"listitem"},rt=t=>st[t]||"listitem",G=(t,n,s)=>s||`${t}-item-${n}`,K=t=>t instanceof HTMLElement&&it.includes(t.getAttribute("role")||""),B=t=>K(t)?t.getAttribute("aria-disabled")!=="true":!1,lt={ul:"li",ol:"li",nav:"a"},ot=t=>lt[t]||"div",Q=(t,n,s,o=!0)=>{const i=s==="next"?1:-1;let r=n+i;for(;r>=0&&r<t.length;){if(B(t[r]))return r;r+=i}if(o)for(r=s==="next"?0:t.length-1;r!==n;){if(B(t[r]))return r;if(r+=i,r<0||r>=t.length)break}},Me=t=>t.findIndex(B),Ne=t=>{for(let n=t.length-1;n>=0;n--)if(B(t[n]))return n;return-1},mt=t=>t.findIndex(n=>K(n)?n.getAttribute("aria-selected")==="true":!1),dt=({defaultFocusIndex:t,onFocusChange:n,listId:s,disabled:o})=>{const i=c.useRef([]),[r,g]=c.useState(!1),[u,f]=c.useState(-1),[d,l]=c.useState(void 0),v=c.useCallback((p,b)=>{o||(f(b),l(p),n==null||n(b,p))},[n,o]),j=c.useCallback((p,b)=>{i.current[b]=p},[]);return c.useEffect(()=>{if(o||r)return;const p=i.current;if(p.length===0||p.every(E=>E===null))return;const b=mt(p),w=b!==-1?b:t,F=p[w];if(F){const E=G(s,w,F.id);v(E,w),g(!0)}},[s,o,t,v,r]),{focusIndex:u,activeDescendantId:d,updateFocusedItem:v,registerItem:j,childrenRefs:i}},ct=[h.UP_ARROW,h.DOWN_ARROW,h.HOME,h.END,h.PAGE_UP,h.PAGE_DOWN],Ve=10,ut=(t,n)=>{const s=Math.max(0,n-Ve);for(let i=s;i<n;i++)if(B(t[i]))return i;const o=Me(t);return o!==-1?o:void 0},pt=(t,n)=>{const s=Math.min(t.length-1,n+Ve);for(let i=s;i>n;i--)if(B(t[i]))return i;const o=Ne(t);return o!==-1?o:void 0},ht=({focusIndex:t,childrenRefs:n,listId:s,updateFocusedItem:o,componentRef:i,disabled:r})=>{const g=c.useCallback(u=>{if(r)return;const{key:f}=u,d=n.current;let l;switch(f){case h.UP_ARROW:u.preventDefault(),l=Q(d,t,"prev");break;case h.DOWN_ARROW:u.preventDefault(),l=Q(d,t,"next");break;case h.HOME:u.preventDefault(),l=Me(d),l===-1&&(l=void 0);break;case h.END:u.preventDefault(),l=Ne(d),l===-1&&(l=void 0);break;case h.PAGE_UP:u.preventDefault(),l=ut(d,t);break;case h.PAGE_DOWN:u.preventDefault(),l=pt(d,t);break;default:return}if(l!==void 0){const v=d[l];if(v){const j=G(s,l,v.id);o(j,l),v.focus()}}},[t,n,s,o,r]);tt({keys:ct,callback:g,ref:i})},bt="_baseList_1n8jr_6",vt={baseList:bt},m=c.forwardRef(({className:t,id:n,as:s="ul",children:o,ariaLabel:i,ariaDescribedBy:r,"aria-controls":g,role:u="listbox",size:f="medium",maxHeight:d,focusOnMount:l=!1,defaultFocusIndex:v=0,onFocusChange:j,style:p,disabled:b=!1,"data-testid":w,...F},E)=>{const A=c.useRef(null),qe=Qe(E,A),Ce=s,{focusIndex:y,activeDescendantId:We,updateFocusedItem:U,registerItem:J,childrenRefs:x}=dt({defaultFocusIndex:v,onFocusChange:j,listId:n,disabled:b});ht({focusIndex:y,childrenRefs:x,listId:n,updateFocusedItem:U,componentRef:A,disabled:b}),et(()=>{l&&A.current&&requestAnimationFrame(()=>{var S;(S=A.current)==null||S.focus()})},[l]);const Oe=c.useMemo(()=>{const S=Z.Children.toArray(o);return x.current=x.current.slice(0,S.length),S.map((I,L)=>{if(!Z.isValidElement(I))return I;const X=G(n,L,I.props.id),z=x.current[L],Y=z==null||K(z),He=typeof I.type=="string",$e=I.props.role||(He?void 0:rt(u)),Ge=Je=>{x.current[L]=Je},Ke={index:L,id:X,highlighted:y===L&&Y,tabIndex:y===L&&Y?0:-1,component:ot(s),size:f,role:$e,refCallback:Ge};return e.jsx(Xe,{value:Ke,children:I},X)})},[o,s,y,n,u,f,x]),Ue=c.useMemo(()=>({activeItemIndex:y,updateFocusedItem:U,registerItem:J,size:f}),[y,U,J,f]),ze=c.useMemo(()=>d?{...p,"--baselist-max-height":typeof d=="number"?`${d}px`:d}:p,[d,p]);return e.jsx(Ye,{value:Ue,children:e.jsx(Ce,{ref:qe,id:n,className:Ze(vt.baseList,t),style:ze,"aria-label":i,"aria-describedby":r,"aria-controls":g,"aria-activedescendant":We,"aria-disabled":b||void 0,role:u,tabIndex:-1,"data-testid":w,...F,children:Oe})})});try{m.displayName="BaseList",m.__docgenInfo={description:"",displayName:"BaseList",props:{id:{defaultValue:null,description:"A unique identifier for the list. Required to ensure unique IDs across micro-frontends.",name:"id",required:!0,type:{name:"string"}},as:{defaultValue:{value:"ul"},description:'The HTML element to render as. Defaults to "ul".',name:"as",required:!1,type:{name:"BaseListElement"}},children:{defaultValue:null,description:"The child elements inside the list.",name:"children",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},ariaLabel:{defaultValue:null,description:"The ARIA label describing the list. Required for accessibility when ariaDescribedBy is not provided.",name:"ariaLabel",required:!1,type:{name:"string"}},ariaDescribedBy:{defaultValue:null,description:"The ID of an element that describes the list.",name:"ariaDescribedBy",required:!1,type:{name:"string"}},"aria-controls":{defaultValue:null,description:"The ID of an element controlled by the list.",name:"aria-controls",required:!1,type:{name:"string"}},role:{defaultValue:{value:"listbox"},description:'The ARIA role of the list. Defaults to "listbox".',name:"role",required:!1,type:{name:"AriaRole"}},size:{defaultValue:{value:"medium"},description:"The size of the list items.",name:"size",required:!1,type:{name:"BaseItemSizes"}},maxHeight:{defaultValue:null,description:"The maximum height of the list container. Enables scrolling when content exceeds this height.",name:"maxHeight",required:!1,type:{name:"string | number"}},focusOnMount:{defaultValue:{value:"false"},description:"If true, the list will automatically focus on mount.",name:"focusOnMount",required:!1,type:{name:"boolean"}},defaultFocusIndex:{defaultValue:{value:"0"},description:"Index of the item that should be focused initially. Defaults to 0.",name:"defaultFocusIndex",required:!1,type:{name:"number"}},onFocusChange:{defaultValue:null,description:"Callback fired when the focused item changes.",name:"onFocusChange",required:!1,type:{name:"(index: number, id?: string) => void"}},disabled:{defaultValue:{value:"false"},description:"If true, disables all keyboard navigation and focus management.",name:"disabled",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"A unique identifier for testing purposes.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const dn={title:"Internal/BaseList",component:m,tags:["internal"]},P={render:t=>e.jsxs(m,{...t,ariaLabel:"Example list",style:{width:300},children:[e.jsx(a,{item:{value:"1",label:"First item",startElement:{type:"icon",value:H}}}),e.jsx(a,{item:{value:"2",label:"Second item",startElement:{type:"icon",value:nt}}}),e.jsx(a,{item:{value:"3",label:"Third item",startElement:{type:"icon",value:O}}})]})},D={render:()=>e.jsxs(m,{ariaLabel:"List with selection",style:{width:300},size:"small",children:[e.jsx(a,{item:{value:"1",label:"Unselected item"}}),e.jsx(a,{item:{value:"2",label:"Selected item"},selected:!0}),e.jsx(a,{item:{value:"3",label:"Another unselected item"}})]})},R={render:()=>e.jsxs(m,{ariaLabel:"List with disabled items",style:{width:300},children:[e.jsx(a,{item:{value:"1",label:"Enabled item"}}),e.jsx(a,{item:{value:"2",label:"Disabled item",disabled:!0}}),e.jsx(a,{item:{value:"3",label:"Another enabled item"}})]})},_={render:()=>e.jsx(m,{ariaLabel:"Scrollable list",maxHeight:200,style:{width:300},children:Array.from({length:10},(t,n)=>e.jsx(a,{item:{value:String(n),label:`Item ${n+1}`}},n))})},k={render:function(){const[n,s]=c.useState(0);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["Currently focused index: ",n]}),e.jsxs(m,{ariaLabel:"List with focus callback",onFocusChange:s,style:{width:300},children:[e.jsx(a,{item:{value:"1",label:"First item",startElement:{type:"icon",value:$}}}),e.jsx(a,{item:{value:"2",label:"Second item",startElement:{type:"icon",value:at}}}),e.jsx(a,{item:{value:"3",label:"Third item",startElement:{type:"icon",value:O}}})]})]})}},T={render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8},children:"Small"}),e.jsxs(m,{ariaLabel:"Small list",size:"small",style:{width:200},children:[e.jsx(a,{item:{value:"1",label:"Small item 1"}}),e.jsx(a,{item:{value:"2",label:"Small item 2"}})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8},children:"Medium"}),e.jsxs(m,{ariaLabel:"Medium list",size:"medium",style:{width:200},children:[e.jsx(a,{item:{value:"1",label:"Medium item 1"}}),e.jsx(a,{item:{value:"2",label:"Medium item 2"}})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8},children:"Large"}),e.jsxs(m,{ariaLabel:"Large list",size:"large",style:{width:200},children:[e.jsx(a,{item:{value:"1",label:"Large item 1"}}),e.jsx(a,{item:{value:"2",label:"Large item 2"}})]})]})]})},M={render:()=>e.jsxs(m,{ariaLabel:"Menu example",role:"menu",style:{width:250},children:[e.jsx(a,{item:{value:"profile",label:"View Profile",startElement:{type:"icon",value:H}},role:"menuitem"}),e.jsx(a,{item:{value:"settings",label:"Settings",startElement:{type:"icon",value:O}},role:"menuitem"}),e.jsx(a,{item:{value:"favorites",label:"Favorites",startElement:{type:"icon",value:$}},role:"menuitem"})]})},N={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:16},children:"Try using arrow keys to navigate. The focus will wrap from the last item to the first (and vice versa)."}),e.jsxs(m,{ariaLabel:"List with keyboard navigation",style:{width:300},children:[e.jsx(a,{item:{value:"1",label:"First item - Press ↑ to wrap to last"}}),e.jsx(a,{item:{value:"2",label:"Second item"}}),e.jsx(a,{item:{value:"3",label:"Third item"}}),e.jsx(a,{item:{value:"4",label:"Fourth item - Press ↓ to wrap to first"}})]})]})},V={render:()=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["Press ",e.jsx("strong",{children:"Home"})," to jump to the first item, or ",e.jsx("strong",{children:"End"})," to jump to the last item."]}),e.jsx(m,{ariaLabel:"List with Home/End navigation",style:{width:300},children:Array.from({length:8},(t,n)=>e.jsx(a,{item:{value:String(n),label:`Item ${n+1}`}},n))})]})},q={render:()=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["Press ",e.jsx("strong",{children:"Page Up"})," or ",e.jsx("strong",{children:"Page Down"})," to move by 10 items at a time."]}),e.jsx(m,{ariaLabel:"List with PageUp/PageDown navigation",maxHeight:300,style:{width:300},children:Array.from({length:25},(t,n)=>e.jsx(a,{item:{value:String(n),label:`Item ${n+1}`}},n))})]})},C={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:16},children:"This list starts with the third item focused (defaultFocusIndex=2)."}),e.jsxs(m,{ariaLabel:"List with default focus",defaultFocusIndex:2,style:{width:300},children:[e.jsx(a,{item:{value:"1",label:"First item"}}),e.jsx(a,{item:{value:"2",label:"Second item"}}),e.jsx(a,{item:{value:"3",label:"Third item (initially focused)"}}),e.jsx(a,{item:{value:"4",label:"Fourth item"}})]})]})},W={render:()=>{const t="list-details";return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["This list controls the details panel below (using ",e.jsx("code",{children:"aria-controls"}),")."]}),e.jsxs(m,{ariaLabel:"Navigation list","aria-controls":t,style:{width:300},children:[e.jsx(a,{item:{value:"1",label:"Settings",startElement:{type:"icon",value:O}}}),e.jsx(a,{item:{value:"2",label:"Profile",startElement:{type:"icon",value:H}}}),e.jsx(a,{item:{value:"3",label:"Favorites",startElement:{type:"icon",value:$}}})]}),e.jsx("div",{id:t,style:{marginTop:16,padding:16,border:"1px solid #ccc",borderRadius:4},children:e.jsx("p",{children:"Details panel controlled by the list above"})})]})}};var ee,te,ne;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <BaseList {...args} ariaLabel="Example list" style={{
    width: 300
  }}>
      <BaseItem item={{
      value: "1",
      label: "First item",
      startElement: {
        type: "icon",
        value: Person
      }
    }} />
      <BaseItem item={{
      value: "2",
      label: "Second item",
      startElement: {
        type: "icon",
        value: Email
      }
    }} />
      <BaseItem item={{
      value: "3",
      label: "Third item",
      startElement: {
        type: "icon",
        value: Settings
      }
    }} />
    </BaseList>
}`,...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,ie,se;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <BaseList ariaLabel="List with selection" style={{
    width: 300
  }} size="small">
      <BaseItem item={{
      value: "1",
      label: "Unselected item"
    }} />
      <BaseItem item={{
      value: "2",
      label: "Selected item"
    }} selected />
      <BaseItem item={{
      value: "3",
      label: "Another unselected item"
    }} />
    </BaseList>
}`,...(se=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var re,le,oe;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <BaseList ariaLabel="List with disabled items" style={{
    width: 300
  }}>
      <BaseItem item={{
      value: "1",
      label: "Enabled item"
    }} />
      <BaseItem item={{
      value: "2",
      label: "Disabled item",
      disabled: true
    }} />
      <BaseItem item={{
      value: "3",
      label: "Another enabled item"
    }} />
    </BaseList>
}`,...(oe=(le=R.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var me,de,ce;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <BaseList ariaLabel="Scrollable list" maxHeight={200} style={{
    width: 300
  }}>
      {Array.from({
      length: 10
    }, (_, i) => <BaseItem key={i} item={{
      value: String(i),
      label: \`Item \${i + 1}\`
    }} />)}
    </BaseList>
}`,...(ce=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,he;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: function WithFocusCallbackExample() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    return <div>
        <p style={{
        marginBottom: 16
      }}>Currently focused index: {focusedIndex}</p>
        <BaseList ariaLabel="List with focus callback" onFocusChange={setFocusedIndex} style={{
        width: 300
      }}>
          <BaseItem item={{
          value: "1",
          label: "First item",
          startElement: {
            type: "icon",
            value: Favorite
          }
        }} />
          <BaseItem item={{
          value: "2",
          label: "Second item",
          startElement: {
            type: "icon",
            value: Search
          }
        }} />
          <BaseItem item={{
          value: "3",
          label: "Third item",
          startElement: {
            type: "icon",
            value: Settings
          }
        }} />
        </BaseList>
      </div>;
  }
}`,...(he=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var be,ve,fe;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <div>
        <p style={{
        marginBottom: 8
      }}>Small</p>
        <BaseList ariaLabel="Small list" size="small" style={{
        width: 200
      }}>
          <BaseItem item={{
          value: "1",
          label: "Small item 1"
        }} />
          <BaseItem item={{
          value: "2",
          label: "Small item 2"
        }} />
        </BaseList>
      </div>
      <div>
        <p style={{
        marginBottom: 8
      }}>Medium</p>
        <BaseList ariaLabel="Medium list" size="medium" style={{
        width: 200
      }}>
          <BaseItem item={{
          value: "1",
          label: "Medium item 1"
        }} />
          <BaseItem item={{
          value: "2",
          label: "Medium item 2"
        }} />
        </BaseList>
      </div>
      <div>
        <p style={{
        marginBottom: 8
      }}>Large</p>
        <BaseList ariaLabel="Large list" size="large" style={{
        width: 200
      }}>
          <BaseItem item={{
          value: "1",
          label: "Large item 1"
        }} />
          <BaseItem item={{
          value: "2",
          label: "Large item 2"
        }} />
        </BaseList>
      </div>
    </div>
}`,...(fe=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ge,ye,xe;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <BaseList ariaLabel="Menu example" role="menu" style={{
    width: 250
  }}>
      <BaseItem item={{
      value: "profile",
      label: "View Profile",
      startElement: {
        type: "icon",
        value: Person
      }
    }} role="menuitem" />
      <BaseItem item={{
      value: "settings",
      label: "Settings",
      startElement: {
        type: "icon",
        value: Settings
      }
    }} role="menuitem" />
      <BaseItem item={{
      value: "favorites",
      label: "Favorites",
      startElement: {
        type: "icon",
        value: Favorite
      }
    }} role="menuitem" />
    </BaseList>
}`,...(xe=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Ie,Le,Be;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 16
    }}>
        Try using arrow keys to navigate. The focus will wrap from the last item to the first (and vice versa).
      </p>
      <BaseList ariaLabel="List with keyboard navigation" style={{
      width: 300
    }}>
        <BaseItem item={{
        value: "1",
        label: "First item - Press ↑ to wrap to last"
      }} />
        <BaseItem item={{
        value: "2",
        label: "Second item"
      }} />
        <BaseItem item={{
        value: "3",
        label: "Third item"
      }} />
        <BaseItem item={{
        value: "4",
        label: "Fourth item - Press ↓ to wrap to first"
      }} />
      </BaseList>
    </div>
}`,...(Be=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var je,we,Ee;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 16
    }}>
        Press <strong>Home</strong> to jump to the first item, or <strong>End</strong> to jump to the last item.
      </p>
      <BaseList ariaLabel="List with Home/End navigation" style={{
      width: 300
    }}>
        {Array.from({
        length: 8
      }, (_, i) => <BaseItem key={i} item={{
        value: String(i),
        label: \`Item \${i + 1}\`
      }} />)}
      </BaseList>
    </div>
}`,...(Ee=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Se,Fe,Ae;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 16
    }}>
        Press <strong>Page Up</strong> or <strong>Page Down</strong> to move by 10 items at a time.
      </p>
      <BaseList ariaLabel="List with PageUp/PageDown navigation" maxHeight={300} style={{
      width: 300
    }}>
        {Array.from({
        length: 25
      }, (_, i) => <BaseItem key={i} item={{
        value: String(i),
        label: \`Item \${i + 1}\`
      }} />)}
      </BaseList>
    </div>
}`,...(Ae=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var Pe,De,Re;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 16
    }}>This list starts with the third item focused (defaultFocusIndex=2).</p>
      <BaseList ariaLabel="List with default focus" defaultFocusIndex={2} style={{
      width: 300
    }}>
        <BaseItem item={{
        value: "1",
        label: "First item"
      }} />
        <BaseItem item={{
        value: "2",
        label: "Second item"
      }} />
        <BaseItem item={{
        value: "3",
        label: "Third item (initially focused)"
      }} />
        <BaseItem item={{
        value: "4",
        label: "Fourth item"
      }} />
      </BaseList>
    </div>
}`,...(Re=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var _e,ke,Te;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const detailsId = "list-details";
    return <div>
        <p style={{
        marginBottom: 16
      }}>
          This list controls the details panel below (using <code>aria-controls</code>).
        </p>
        <BaseList ariaLabel="Navigation list" aria-controls={detailsId} style={{
        width: 300
      }}>
          <BaseItem item={{
          value: "1",
          label: "Settings",
          startElement: {
            type: "icon",
            value: Settings
          }
        }} />
          <BaseItem item={{
          value: "2",
          label: "Profile",
          startElement: {
            type: "icon",
            value: Person
          }
        }} />
          <BaseItem item={{
          value: "3",
          label: "Favorites",
          startElement: {
            type: "icon",
            value: Favorite
          }
        }} />
        </BaseList>
        <div id={detailsId} style={{
        marginTop: 16,
        padding: 16,
        border: "1px solid #ccc",
        borderRadius: 4
      }}>
          <p>Details panel controlled by the list above</p>
        </div>
      </div>;
  }
}`,...(Te=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};const cn=["Overview","WithSelectedItem","WithDisabledItems","ScrollableList","WithFocusCallback","Sizes","AsMenu","KeyboardNavigationWithLooping","HomeEndNavigation","PageUpDownNavigation","DefaultFocusIndex","WithAriaControls"];export{M as AsMenu,C as DefaultFocusIndex,V as HomeEndNavigation,N as KeyboardNavigationWithLooping,P as Overview,q as PageUpDownNavigation,_ as ScrollableList,T as Sizes,W as WithAriaControls,R as WithDisabledItems,k as WithFocusCallback,D as WithSelectedItem,cn as __namedExportsOrder,dn as default};
