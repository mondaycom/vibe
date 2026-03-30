import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as ne}from"./index-CTZeEbLr.js";import{B as t}from"./BaseItem-BXMi1bmn.js";import{E as ie}from"./Email-BmMi5Ll_.js";import{S as g,F as x}from"./Settings-Dllwc6G3.js";import{P as y}from"./Person-C6oC2dzb.js";import{S as se}from"./Search-B-LsiQVE.js";import{B as a}from"./BaseList-CjipLkcp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BpvXyOxN.js";import"./keyCodes-BPHiFfps.js";import"./Avatar-DIiq31X9.js";import"./test-ids-utils-BSSgvOTA.js";import"./constants-DEBzQJwg.js";import"./colors-vars-map-1xEW7YrD.js";import"./camelCase-CO1PkVrH.js";import"./Clickable-DnQGpUs5.js";import"./useClickableProps-Ul4gSWS9.js";import"./useMergeRef-Do2VYePL.js";import"./useIsomorphicLayoutEffect-BBiFUoiz.js";import"./ssr-utils-Do6V6AqB.js";import"./constants-CenpDJY1.js";import"./noop-DX6rZLP_.js";import"./Icon-BxXgVPAg.js";import"./useEventListener-CkU0kzyk.js";import"./useKeyEvent-BeN1aNjK.js";import"./typesciptCssModulesHelper-Ji7rRrZn.js";import"./isNil-CHIgUVhi.js";import"./Tooltip-BB_8xbyk.js";import"./Flex-7H_pA1dJ.js";import"./index-BrqHMYbN.js";import"./index-BKMrxRLL.js";import"./CSSTransition-Dhcv5TuQ.js";import"./extends-CCbyfPlC.js";import"./Text-BXsRVAov.js";import"./Typography-Bce0_5U4.js";import"./index-CqkoFCDi.js";import"./debounce-D3NSP8gs.js";import"./keyCodes-DhPS-8Mm.js";const Ke={title:"Internal/BaseList",component:a,tags:["internal"]},s={render:i=>e.jsxs(a,{...i,"aria-label":"Example list",style:{width:300},children:[e.jsx(t,{item:{value:"1",label:"First item",startElement:{type:"icon",value:y}}}),e.jsx(t,{item:{value:"2",label:"Second item",startElement:{type:"icon",value:ie}}}),e.jsx(t,{item:{value:"3",label:"Third item",startElement:{type:"icon",value:g}}})]})},l={render:()=>e.jsxs(a,{"aria-label":"List with selection",style:{width:300},size:"small",children:[e.jsx(t,{item:{value:"1",label:"Unselected item"}}),e.jsx(t,{item:{value:"2",label:"Selected item"},selected:!0}),e.jsx(t,{item:{value:"3",label:"Another unselected item"}})]})},r={render:()=>e.jsxs(a,{"aria-label":"List with disabled items",style:{width:300},children:[e.jsx(t,{item:{value:"1",label:"Enabled item"}}),e.jsx(t,{item:{value:"2",label:"Disabled item",disabled:!0}}),e.jsx(t,{item:{value:"3",label:"Another enabled item"}})]})},o={render:()=>e.jsx(a,{"aria-label":"Scrollable list",maxHeight:200,style:{width:300},children:Array.from({length:10},(i,n)=>e.jsx(t,{item:{value:String(n),label:`Item ${n+1}`}},n))})},m={render:function(){const[n,ae]=ne.useState(0);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["Currently focused index: ",n]}),e.jsxs(a,{"aria-label":"List with focus callback",onFocusChange:ae,style:{width:300},children:[e.jsx(t,{item:{value:"1",label:"First item",startElement:{type:"icon",value:x}}}),e.jsx(t,{item:{value:"2",label:"Second item",startElement:{type:"icon",value:se}}}),e.jsx(t,{item:{value:"3",label:"Third item",startElement:{type:"icon",value:g}}})]})]})}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8},children:"Small"}),e.jsxs(a,{"aria-label":"Small list",size:"small",style:{width:200},children:[e.jsx(t,{item:{value:"1",label:"Small item 1"}}),e.jsx(t,{item:{value:"2",label:"Small item 2"}})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8},children:"Medium"}),e.jsxs(a,{"aria-label":"Medium list",size:"medium",style:{width:200},children:[e.jsx(t,{item:{value:"1",label:"Medium item 1"}}),e.jsx(t,{item:{value:"2",label:"Medium item 2"}})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8},children:"Large"}),e.jsxs(a,{"aria-label":"Large list",size:"large",style:{width:200},children:[e.jsx(t,{item:{value:"1",label:"Large item 1"}}),e.jsx(t,{item:{value:"2",label:"Large item 2"}})]})]})]})},c={render:()=>e.jsxs(a,{"aria-label":"Menu example",role:"menu",style:{width:250},children:[e.jsx(t,{item:{value:"profile",label:"View Profile",startElement:{type:"icon",value:y}},role:"menuitem"}),e.jsx(t,{item:{value:"settings",label:"Settings",startElement:{type:"icon",value:g}},role:"menuitem"}),e.jsx(t,{item:{value:"favorites",label:"Favorites",startElement:{type:"icon",value:x}},role:"menuitem"})]})},u={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:16},children:"Try using arrow keys to navigate. The focus will wrap from the last item to the first (and vice versa)."}),e.jsxs(a,{"aria-label":"List with keyboard navigation",style:{width:300},children:[e.jsx(t,{item:{value:"1",label:"First item - Press ↑ to wrap to last"}}),e.jsx(t,{item:{value:"2",label:"Second item"}}),e.jsx(t,{item:{value:"3",label:"Third item"}}),e.jsx(t,{item:{value:"4",label:"Fourth item - Press ↓ to wrap to first"}})]})]})},p={render:()=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["Press ",e.jsx("strong",{children:"Home"})," to jump to the first item, or ",e.jsx("strong",{children:"End"})," to jump to the last item."]}),e.jsx(a,{"aria-label":"List with Home/End navigation",style:{width:300},children:Array.from({length:8},(i,n)=>e.jsx(t,{item:{value:String(n),label:`Item ${n+1}`}},n))})]})},v={render:()=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["Press ",e.jsx("strong",{children:"Page Up"})," or ",e.jsx("strong",{children:"Page Down"})," to move by 10 items at a time."]}),e.jsx(a,{"aria-label":"List with PageUp/PageDown navigation",maxHeight:300,style:{width:300},children:Array.from({length:25},(i,n)=>e.jsx(t,{item:{value:String(n),label:`Item ${n+1}`}},n))})]})},h={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:16},children:"This list starts with the third item focused (defaultFocusIndex=2)."}),e.jsxs(a,{"aria-label":"List with default focus",defaultFocusIndex:2,style:{width:300},children:[e.jsx(t,{item:{value:"1",label:"First item"}}),e.jsx(t,{item:{value:"2",label:"Second item"}}),e.jsx(t,{item:{value:"3",label:"Third item (initially focused)"}}),e.jsx(t,{item:{value:"4",label:"Fourth item"}})]})]})},b={render:()=>{const i="list-details";return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["This list controls the details panel below (using ",e.jsx("code",{children:"aria-controls"}),")."]}),e.jsxs(a,{"aria-label":"Navigation list","aria-controls":i,style:{width:300},children:[e.jsx(t,{item:{value:"1",label:"Settings",startElement:{type:"icon",value:g}}}),e.jsx(t,{item:{value:"2",label:"Profile",startElement:{type:"icon",value:y}}}),e.jsx(t,{item:{value:"3",label:"Favorites",startElement:{type:"icon",value:x}}})]}),e.jsx("div",{id:i,style:{marginTop:16,padding:16,border:"1px solid #ccc",borderRadius:4},children:e.jsx("p",{children:"Details panel controlled by the list above"})})]})}};var B,j,w;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <BaseList {...args} aria-label="Example list" style={{
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
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,S,f;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <BaseList aria-label="List with selection" style={{
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
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var L,E,F;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <BaseList aria-label="List with disabled items" style={{
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
}`,...(F=(E=r.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var P,T,A;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <BaseList aria-label="Scrollable list" maxHeight={200} style={{
    width: 300
  }}>
      {Array.from({
      length: 10
    }, (_, i) => <BaseItem key={i} item={{
      value: String(i),
      label: \`Item \${i + 1}\`
    }} />)}
    </BaseList>
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var D,k,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function WithFocusCallbackExample() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    return <div>
        <p style={{
        marginBottom: 16
      }}>Currently focused index: {focusedIndex}</p>
        <BaseList aria-label="List with focus callback" onFocusChange={setFocusedIndex} style={{
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
}`,...(M=(k=m.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var W,z,C;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <div>
        <p style={{
        marginBottom: 8
      }}>Small</p>
        <BaseList aria-label="Small list" size="small" style={{
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
        <BaseList aria-label="Medium list" size="medium" style={{
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
        <BaseList aria-label="Large list" size="large" style={{
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
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var H,_,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <BaseList aria-label="Menu example" role="menu" style={{
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
}`,...(N=(_=c.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var U,$,O;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 16
    }}>
        Try using arrow keys to navigate. The focus will wrap from the last item to the first (and vice versa).
      </p>
      <BaseList aria-label="List with keyboard navigation" style={{
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
}`,...(O=($=u.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var R,K,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 16
    }}>
        Press <strong>Home</strong> to jump to the first item, or <strong>End</strong> to jump to the last item.
      </p>
      <BaseList aria-label="List with Home/End navigation" style={{
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
}`,...(V=(K=p.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var q,G,J;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 16
    }}>
        Press <strong>Page Up</strong> or <strong>Page Down</strong> to move by 10 items at a time.
      </p>
      <BaseList aria-label="List with PageUp/PageDown navigation" maxHeight={300} style={{
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
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 16
    }}>This list starts with the third item focused (defaultFocusIndex=2).</p>
      <BaseList aria-label="List with default focus" defaultFocusIndex={2} style={{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const detailsId = "list-details";
    return <div>
        <p style={{
        marginBottom: 16
      }}>
          This list controls the details panel below (using <code>aria-controls</code>).
        </p>
        <BaseList aria-label="Navigation list" aria-controls={detailsId} style={{
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
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ve=["Overview","WithSelectedItem","WithDisabledItems","ScrollableList","WithFocusCallback","Sizes","AsMenu","KeyboardNavigationWithLooping","HomeEndNavigation","PageUpDownNavigation","DefaultFocusIndex","WithAriaControls"];export{c as AsMenu,h as DefaultFocusIndex,p as HomeEndNavigation,u as KeyboardNavigationWithLooping,s as Overview,v as PageUpDownNavigation,o as ScrollableList,d as Sizes,b as WithAriaControls,r as WithDisabledItems,m as WithFocusCallback,l as WithSelectedItem,Ve as __namedExportsOrder,Ke as default};
