import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as xe}from"./index-CTZeEbLr.js";import{a as s}from"./Workspace-BRy0vdK8.js";import{E as f}from"./Email-BmMi5Ll_.js";import{F as c,S as I}from"./Settings-Dllwc6G3.js";import{P as w}from"./Person-C6oC2dzb.js";import{S as k}from"./Search-B-LsiQVE.js";import{c as n,d as l}from"./index-D1D0uiJ1.js";import{c as he}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{F}from"./index.esm-XHNhqDsf.js";import{p as z}from"./person1-D9Wcho68.js";import{p as B}from"./person2-D4QHDNDB.js";import{p as D}from"./person3-BX6ktRh1.js";import{L as o}from"./ListTitle-D4rLEADh.js";import{L as t,a}from"./ListItem-C4uYbtF9.js";import{D as T}from"./DialogContentContainer-BenjnFfs.js";import{F as u}from"./Flex-7H_pA1dJ.js";import{T as C}from"./Text-BXsRVAov.js";const W=he({component:a}),ye={title:"Components/List [New]/List",component:a,subcomponents:{ListItem:t,ListTitle:o},argTypes:W.argTypes,decorators:W.decorators},ge=m=>{const i=xe.useCallback(()=>alert("On click!"),[]);return e.jsxs(a,{...m,children:[e.jsx(t,{label:"Board Power up",onClick:i}),e.jsx(t,{label:"Team Power up",onClick:i}),e.jsx(t,{label:"Essentials",onClick:i})]})},d={render:ge,name:"Overview",args:{"aria-label":"Power ups list"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},v={render:()=>e.jsxs(a,{"aria-label":"List with icons",children:[e.jsx(t,{label:"List item 1",value:"list-1",startElement:{type:"icon",value:s}}),e.jsx(t,{label:"List item 2",value:"list-2",startElement:{type:"icon",value:l}}),e.jsx(t,{label:"List item 3",value:"list-3",startElement:{type:"icon",value:n}})]}),name:"List with icons",parameters:{docs:{liveEdit:{scope:{Board:s,Team:l,ThumbsUp:n}}}}},p={render:()=>e.jsxs(a,{"aria-label":"List with avatars",children:[e.jsx(t,{label:"List item 1",value:"list-1",startElement:{type:"avatar",value:z}}),e.jsx(t,{label:"List item 2",value:"list-2",startElement:{type:"avatar",value:B}}),e.jsx(t,{label:"List item 3",value:"list-3",startElement:{type:"avatar",value:D}})]}),name:"List with avatars",parameters:{docs:{liveEdit:{scope:{person1:z,person2:B,person3:D}}}}},L={render:()=>e.jsxs(a,{"aria-label":"List with title",children:[e.jsx(o,{children:"Category A"}),e.jsx(t,{label:"List item 1",value:"list-1",startElement:{type:"icon",value:s}}),e.jsx(t,{label:"List item 2",value:"list-2",startElement:{type:"icon",value:l}}),e.jsx(o,{children:"Category B"}),e.jsx(t,{label:"List item 3",value:"list-3",startElement:{type:"icon",value:n}}),e.jsx(t,{label:"List item 4",value:"list-4",startElement:{type:"icon",value:c}})]}),name:"List with title",parameters:{docs:{liveEdit:{scope:{Board:s,Team:l,ThumbsUp:n,Favorite:c}}}}},b={render:()=>e.jsx(T,{style:{width:"250px"},children:e.jsxs(a,{"aria-label":"List with sticky titles",maxHeight:200,children:[e.jsx(o,{sticky:!0,children:"Category A"}),e.jsx(t,{label:"List item 1",value:"1",startElement:{type:"icon",value:s}}),e.jsx(t,{label:"List item 2",value:"2",startElement:{type:"icon",value:s}}),e.jsx(t,{label:"List item 3",value:"3",startElement:{type:"icon",value:s}}),e.jsx(t,{label:"List item 4",value:"4",startElement:{type:"icon",value:s}}),e.jsx(o,{sticky:!0,children:"Category B"}),e.jsx(t,{label:"List item 5",value:"5",startElement:{type:"icon",value:l}}),e.jsx(t,{label:"List item 6",value:"6",startElement:{type:"icon",value:l}}),e.jsx(t,{label:"List item 7",value:"7",startElement:{type:"icon",value:l}}),e.jsx(t,{label:"List item 8",value:"8",startElement:{type:"icon",value:l}}),e.jsx(o,{sticky:!0,children:"Category C"}),e.jsx(t,{label:"List item 9",value:"9",startElement:{type:"icon",value:n}}),e.jsx(t,{label:"List item 10",value:"10",startElement:{type:"icon",value:n}}),e.jsx(t,{label:"List item 11",value:"11",startElement:{type:"icon",value:n}}),e.jsx(t,{label:"List item 12",value:"12",startElement:{type:"icon",value:n}})]})}),name:"Sticky title",parameters:{docs:{liveEdit:{scope:{Board:s,Team:l,ThumbsUp:n}}}}},x={render:()=>e.jsx(T,{style:{width:"200px"},children:e.jsxs(a,{"aria-label":"Scrollable list",maxHeight:162,children:[e.jsx(t,{label:"List item 1",value:"1"}),e.jsx(t,{label:"List item 2",value:"2"}),e.jsx(t,{label:"List item 3",value:"3"}),e.jsx(t,{label:"List item 4",value:"4"}),e.jsx(t,{label:"List item 5",value:"5"}),e.jsx(t,{label:"List item 6",value:"6"}),e.jsx(t,{label:"List item 7",value:"7"}),e.jsx(t,{label:"List item 8",value:"8"}),e.jsx(t,{label:"List item 9",value:"9"}),e.jsx(t,{label:"List item 10",value:"10"}),e.jsx(t,{label:"List item 11",value:"11"}),e.jsx(t,{label:"List item 12",value:"12"})]})}),name:"Scrollable list"},h={render:()=>e.jsxs(u,{gap:"large",align:"start",children:[e.jsxs(u,{direction:"column",gap:"small",align:"start",children:[e.jsx(C,{type:"text1",weight:"bold",children:"Small"}),e.jsx("div",{style:{width:200},children:e.jsxs(a,{"aria-label":"Small list",size:"small",children:[e.jsx(t,{label:"Small item 1",value:"1"}),e.jsx(t,{label:"Small item 2",value:"2"}),e.jsx(t,{label:"Small item 3",value:"3"})]})})]}),e.jsxs(u,{direction:"column",gap:"small",align:"start",children:[e.jsx(C,{type:"text1",weight:"bold",children:"Medium"}),e.jsx("div",{style:{width:200},children:e.jsxs(a,{"aria-label":"Medium list",size:"medium",children:[e.jsx(t,{label:"Medium item 1",value:"1"}),e.jsx(t,{label:"Medium item 2",value:"2"}),e.jsx(t,{label:"Medium item 3",value:"3"})]})})]}),e.jsxs(u,{direction:"column",gap:"small",align:"start",children:[e.jsx(C,{type:"text1",weight:"bold",children:"Large"}),e.jsx("div",{style:{width:200},children:e.jsxs(a,{"aria-label":"Large list",size:"large",children:[e.jsx(t,{label:"Large item 1",value:"1"}),e.jsx(t,{label:"Large item 2",value:"2"}),e.jsx(t,{label:"Large item 3",value:"3"})]})})]})]}),name:"Sizes"},y={render:()=>e.jsx(u,{gap:"large",align:"start",children:e.jsxs(a,{"aria-label":"States example",children:[e.jsx(t,{label:"Default state",value:"default"}),e.jsx(t,{label:"Disabled state",value:"disabled",disabled:!0}),e.jsx(t,{label:"Selected state",value:"selected",selected:!0})]})}),name:"States"},g={render:()=>e.jsx(T,{style:{width:250},children:e.jsxs(a,{"aria-label":"List in dialog",maxHeight:200,children:[e.jsx(t,{label:"View Profile",value:"profile",startElement:{type:"icon",value:w}}),e.jsx(t,{label:"Settings",value:"settings",startElement:{type:"icon",value:I}}),e.jsx(t,{label:"Favorites",value:"favorites",startElement:{type:"icon",value:c}}),e.jsx(t,{label:"Email Preferences",value:"email",startElement:{type:"icon",value:f}}),e.jsx(t,{label:"Team Settings",value:"team",startElement:{type:"icon",value:l}})]})}),name:"In dialog container",parameters:{docs:{liveEdit:{scope:{Person:w,Settings:I,Favorite:c,Email:f,Team:l}}}}},j={render:function(){const[i,r]=xe.useState(null);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:16},children:["Last clicked: ",i??"None"]}),e.jsx("div",{style:{width:300},children:e.jsxs(a,{"aria-label":"Clickable list",children:[e.jsx(t,{label:"Click me",value:"1",onClick:()=>r("Item 1")}),e.jsx(t,{label:"Or click me",value:"2",onClick:()=>r("Item 2")}),e.jsx(t,{label:"Disabled (can't click)",value:"3",disabled:!0,onClick:()=>r("Item 3")})]})})]})},name:"With click handler"},E={render:()=>e.jsx("div",{style:{width:300},children:e.jsxs(a,{"aria-label":"List with end elements",children:[e.jsx(t,{label:"Settings",value:"1",startElement:{type:"icon",value:I},endElement:{type:"suffix",value:"⌘S"}}),e.jsx(t,{label:"Favorites",value:"2",startElement:{type:"icon",value:c},endElement:{type:"suffix",value:"⌘F"}}),e.jsx(t,{label:"Search",value:"3",startElement:{type:"icon",value:k},endElement:{type:"suffix",value:"⌘K"}})]})}),name:"With end elements",parameters:{docs:{liveEdit:{scope:{Settings:I,Favorite:c,Search:k}}}}},S={render:()=>{const m=Array.from({length:1e3},(i,r)=>({label:`Item ${r+1}`,value:`${r+1}`}));return e.jsx(F,{height:300,width:300,itemCount:m.length,itemSize:32,children:({index:i,style:r})=>e.jsx("div",{style:r,children:e.jsx(t,{label:m[i].label,value:m[i].value})})})},name:"Virtualized list",parameters:{docs:{liveEdit:{scope:{FixedSizeList:F}}}}};var P,M,O;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: listTemplate,
  name: "Overview",
  args: {
    "aria-label": "Power ups list"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var H,U,A;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <List aria-label="List with icons">
      <ListItem label="List item 1" value="list-1" startElement={{
      type: "icon",
      value: Board
    }} />
      <ListItem label="List item 2" value="list-2" startElement={{
      type: "icon",
      value: Team
    }} />
      <ListItem label="List item 3" value="list-3" startElement={{
      type: "icon",
      value: ThumbsUp
    }} />
    </List>,
  name: "List with icons",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Board,
          Team,
          ThumbsUp
        }
      }
    }
  }
}`,...(A=(U=v.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var _,V,$;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <List aria-label="List with avatars">
      <ListItem label="List item 1" value="list-1" startElement={{
      type: "avatar",
      value: person1
    }} />
      <ListItem label="List item 2" value="list-2" startElement={{
      type: "avatar",
      value: person2
    }} />
      <ListItem label="List item 3" value="list-3" startElement={{
      type: "avatar",
      value: person3
    }} />
    </List>,
  name: "List with avatars",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1,
          person2,
          person3
        }
      }
    }
  }
}`,...($=(V=p.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var N,K,R;L.parameters={...L.parameters,docs:{...(N=L.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <List aria-label="List with title">
      <ListTitle>Category A</ListTitle>
      <ListItem label="List item 1" value="list-1" startElement={{
      type: "icon",
      value: Board
    }} />
      <ListItem label="List item 2" value="list-2" startElement={{
      type: "icon",
      value: Team
    }} />
      <ListTitle>Category B</ListTitle>
      <ListItem label="List item 3" value="list-3" startElement={{
      type: "icon",
      value: ThumbsUp
    }} />
      <ListItem label="List item 4" value="list-4" startElement={{
      type: "icon",
      value: Favorite
    }} />
    </List>,
  name: "List with title",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Board,
          Team,
          ThumbsUp,
          Favorite
        }
      }
    }
  }
}`,...(R=(K=L.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var q,G,J;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <DialogContentContainer style={{
    width: "250px"
  }}>
      <List aria-label="List with sticky titles" maxHeight={200}>
        <ListTitle sticky>Category A</ListTitle>
        <ListItem label="List item 1" value="1" startElement={{
        type: "icon",
        value: Board
      }} />
        <ListItem label="List item 2" value="2" startElement={{
        type: "icon",
        value: Board
      }} />
        <ListItem label="List item 3" value="3" startElement={{
        type: "icon",
        value: Board
      }} />
        <ListItem label="List item 4" value="4" startElement={{
        type: "icon",
        value: Board
      }} />
        <ListTitle sticky>Category B</ListTitle>
        <ListItem label="List item 5" value="5" startElement={{
        type: "icon",
        value: Team
      }} />
        <ListItem label="List item 6" value="6" startElement={{
        type: "icon",
        value: Team
      }} />
        <ListItem label="List item 7" value="7" startElement={{
        type: "icon",
        value: Team
      }} />
        <ListItem label="List item 8" value="8" startElement={{
        type: "icon",
        value: Team
      }} />
        <ListTitle sticky>Category C</ListTitle>
        <ListItem label="List item 9" value="9" startElement={{
        type: "icon",
        value: ThumbsUp
      }} />
        <ListItem label="List item 10" value="10" startElement={{
        type: "icon",
        value: ThumbsUp
      }} />
        <ListItem label="List item 11" value="11" startElement={{
        type: "icon",
        value: ThumbsUp
      }} />
        <ListItem label="List item 12" value="12" startElement={{
        type: "icon",
        value: ThumbsUp
      }} />
      </List>
    </DialogContentContainer>,
  name: "Sticky title",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Board,
          Team,
          ThumbsUp
        }
      }
    }
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <DialogContentContainer style={{
    width: "200px"
  }}>
      <List aria-label="Scrollable list" maxHeight={162}>
        <ListItem label="List item 1" value="1" />
        <ListItem label="List item 2" value="2" />
        <ListItem label="List item 3" value="3" />
        <ListItem label="List item 4" value="4" />
        <ListItem label="List item 5" value="5" />
        <ListItem label="List item 6" value="6" />
        <ListItem label="List item 7" value="7" />
        <ListItem label="List item 8" value="8" />
        <ListItem label="List item 9" value="9" />
        <ListItem label="List item 10" value="10" />
        <ListItem label="List item 11" value="11" />
        <ListItem label="List item 12" value="12" />
      </List>
    </DialogContentContainer>,
  name: "Scrollable list"
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Flex gap="large" align="start">
      <Flex direction="column" gap="small" align="start">
        <Text type="text1" weight="bold">
          Small
        </Text>
        <div style={{
        width: 200
      }}>
          <List aria-label="Small list" size="small">
            <ListItem label="Small item 1" value="1" />
            <ListItem label="Small item 2" value="2" />
            <ListItem label="Small item 3" value="3" />
          </List>
        </div>
      </Flex>
      <Flex direction="column" gap="small" align="start">
        <Text type="text1" weight="bold">
          Medium
        </Text>
        <div style={{
        width: 200
      }}>
          <List aria-label="Medium list" size="medium">
            <ListItem label="Medium item 1" value="1" />
            <ListItem label="Medium item 2" value="2" />
            <ListItem label="Medium item 3" value="3" />
          </List>
        </div>
      </Flex>
      <Flex direction="column" gap="small" align="start">
        <Text type="text1" weight="bold">
          Large
        </Text>
        <div style={{
        width: 200
      }}>
          <List aria-label="Large list" size="large">
            <ListItem label="Large item 1" value="1" />
            <ListItem label="Large item 2" value="2" />
            <ListItem label="Large item 3" value="3" />
          </List>
        </div>
      </Flex>
    </Flex>,
  name: "Sizes"
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,ie;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Flex gap="large" align="start">
      <List aria-label="States example">
        <ListItem label="Default state" value="default" />
        <ListItem label="Disabled state" value="disabled" disabled />
        <ListItem label="Selected state" value="selected" selected />
      </List>
    </Flex>,
  name: "States"
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,ne,re;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <DialogContentContainer style={{
    width: 250
  }}>
      <List aria-label="List in dialog" maxHeight={200}>
        <ListItem label="View Profile" value="profile" startElement={{
        type: "icon",
        value: Person
      }} />
        <ListItem label="Settings" value="settings" startElement={{
        type: "icon",
        value: Settings
      }} />
        <ListItem label="Favorites" value="favorites" startElement={{
        type: "icon",
        value: Favorite
      }} />
        <ListItem label="Email Preferences" value="email" startElement={{
        type: "icon",
        value: Email
      }} />
        <ListItem label="Team Settings" value="team" startElement={{
        type: "icon",
        value: Team
      }} />
      </List>
    </DialogContentContainer>,
  name: "In dialog container",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Person,
          Settings,
          Favorite,
          Email,
          Team
        }
      }
    }
  }
}`,...(re=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var me,oe,ce;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: function WithClickHandlerExample() {
    const [lastClicked, setLastClicked] = useState<string | null>(null);
    return <div>
        <p style={{
        marginBottom: 16
      }}>Last clicked: {lastClicked ?? "None"}</p>
        <div style={{
        width: 300
      }}>
          <List aria-label="Clickable list">
            <ListItem label="Click me" value="1" onClick={() => setLastClicked("Item 1")} />
            <ListItem label="Or click me" value="2" onClick={() => setLastClicked("Item 2")} />
            <ListItem label="Disabled (can't click)" value="3" disabled onClick={() => setLastClicked("Item 3")} />
          </List>
        </div>
      </div>;
  },
  name: "With click handler"
}`,...(ce=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ue,de,ve;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <List aria-label="List with end elements">
        <ListItem label="Settings" value="1" startElement={{
        type: "icon",
        value: Settings
      }} endElement={{
        type: "suffix",
        value: "⌘S"
      }} />
        <ListItem label="Favorites" value="2" startElement={{
        type: "icon",
        value: Favorite
      }} endElement={{
        type: "suffix",
        value: "⌘F"
      }} />
        <ListItem label="Search" value="3" startElement={{
        type: "icon",
        value: Search
      }} endElement={{
        type: "suffix",
        value: "⌘K"
      }} />
      </List>
    </div>,
  name: "With end elements",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Settings,
          Favorite,
          Search
        }
      }
    }
  }
}`,...(ve=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var pe,Le,be;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const items = Array.from({
      length: 1000
    }, (_, i) => ({
      label: \`Item \${i + 1}\`,
      value: \`\${i + 1}\`
    }));
    return <FixedSizeList height={300} width={300} itemCount={items.length} itemSize={32}>
        {({
        index,
        style
      }) => <div style={style}>
            <ListItem label={items[index].label} value={items[index].value} />
          </div>}
      </FixedSizeList>;
  },
  name: "Virtualized list",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          FixedSizeList
        }
      }
    }
  }
}`,...(be=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:be.source}}};const je=["Overview","ListWithIcons","ListWithAvatars","ListWithTitle","StickyTitle","ScrollableList","Sizes","States","InDialogContainer","WithClickHandler","WithEndElements","VirtualizedList"],Ae=Object.freeze(Object.defineProperty({__proto__:null,InDialogContainer:g,ListWithAvatars:p,ListWithIcons:v,ListWithTitle:L,Overview:d,ScrollableList:x,Sizes:h,States:y,StickyTitle:b,VirtualizedList:S,WithClickHandler:j,WithEndElements:E,__namedExportsOrder:je,default:ye},Symbol.toStringTag,{value:"Module"}));export{g as I,Ae as L,d as O,b as S,S as V,E as W,v as a,p as b,L as c,x as d,h as e,y as f};
