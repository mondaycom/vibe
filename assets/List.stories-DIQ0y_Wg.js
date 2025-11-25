import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{r as B}from"./index-CTZeEbLr.js";import{c as k}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{p}from"./person1-D9Wcho68.js";import{p as h}from"./person2-D4QHDNDB.js";import{p as I}from"./person3-BX6ktRh1.js";import{L,a}from"./ListItemIcon-COx_DHcF.js";import{f as x,g as j}from"./index-BVKo2bYj.js";import{d as g}from"./Workspace-CefzN9Lt.js";import{p as l}from"./story-description-B8U8K6Zm.js";import{L as e,a as c}from"./List-mSzysk9y.js";import{L as i}from"./ListItem-DHW4rchd.js";import{F as P}from"./Flex-Bimzf4jb.js";import{D as u}from"./DialogContentContainer-BBTL4acN.js";const y=k({component:e}),R={title:"Components/List/List",component:e,subcomponents:{ListItem:i,ListItemIcon:a,ListItemAvatar:L},argTypes:y.argTypes,decorators:y.decorators},U=z=>{const d=B.useCallback(()=>alert("On click!"),[]);return t.jsxs(e,{...z,children:[t.jsx(i,{onClick:d,children:"Board Power up"}),t.jsx(i,{onClick:d,children:"Team Power up"}),t.jsx(i,{onClick:d,children:"Essentials"})]})},s={render:U.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},n={render:()=>t.jsxs(e,{children:[t.jsx(c,{children:"First category"}),t.jsx(i,{children:"List item 1"}),t.jsx(i,{children:"List item 2"}),t.jsx(c,{children:"Second category"}),t.jsx(i,{children:"List item 3"}),t.jsx(i,{children:"List item 4"})]})},r={render:()=>t.jsxs(e,{children:[t.jsxs(i,{id:"list-1",children:[t.jsx(a,{icon:g}),"List item 1"]}),t.jsxs(i,{id:"list-2",children:[t.jsx(a,{icon:j}),"List item 2"]}),t.jsxs(i,{id:"list-3",children:[t.jsx(a,{icon:x}),"List item 3"]})]}),parameters:{docs:{liveEdit:{scope:{Board:g,Team:j,ThumbsUp:x}}}}},m={render:()=>t.jsxs(e,{children:[t.jsxs(i,{id:"list-1",children:[t.jsx(L,{src:p}),"List item 1"]}),t.jsxs(i,{id:"list-2",children:[t.jsx(L,{src:h}),"List item 2"]}),t.jsxs(i,{id:"list-3",children:[t.jsx(L,{src:I}),"List item 3"]})]}),parameters:{docs:{liveEdit:{scope:{person1:p,person2:h,person3:I}}}}},o={render:()=>t.jsxs(P,{align:"start",gap:"large",style:{width:"100%"},direction:"column",children:[t.jsx(l,{description:"Regular",children:t.jsx(u,{style:{height:"162px",width:"200px"},children:t.jsxs(e,{renderOnlyVisibleItems:!0,style:{height:"100%",width:"100%"},children:[t.jsx(i,{children:"List item 1"}),t.jsx(i,{children:"List item 2"}),t.jsx(i,{children:"List item 3"}),t.jsx(i,{children:"List item 4"}),t.jsx(i,{children:"List item 5"}),t.jsx(i,{children:"List item 6"}),t.jsx(i,{children:"List item 7"}),t.jsx(i,{children:"List item 8"}),t.jsx(i,{children:"List item 9"}),t.jsx(i,{children:"List item 10"}),t.jsx(i,{children:"List item 11"}),t.jsx(i,{children:"List item 12"})]})})}),t.jsx(l,{description:"With categories",children:t.jsx(u,{style:{height:"159px",width:"200px"},children:t.jsxs(e,{renderOnlyVisibleItems:!0,style:{height:"100%",width:"100%"},children:[t.jsx(c,{children:"First category"}),t.jsx(i,{children:"List item 1"}),t.jsx(i,{children:"List item 2"}),t.jsx(c,{children:"Second category"}),t.jsx(i,{children:"List item 3"}),t.jsx(i,{children:"List item 4"}),t.jsx(i,{children:"List item 5"}),t.jsx(i,{children:"List item 6"}),t.jsx(i,{children:"List item 7"}),t.jsx(i,{children:"List item 8"}),t.jsx(i,{children:"List item 9"}),t.jsx(i,{children:"List item 10"}),t.jsx(i,{children:"List item 11"}),t.jsx(i,{children:"List item 12"})]})})})]}),parameters:{docs:{liveEdit:{scope:{StoryDescription:l}}}}};var v,S,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var f,b,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <List>
      <ListTitle>First category</ListTitle>
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
      <ListTitle>Second category</ListTitle>
      <ListItem>List item 3</ListItem>
      <ListItem>List item 4</ListItem>
    </List>
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var C,O,E;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem id="list-1">
        <ListItemIcon icon={Board} />
        List item 1
      </ListItem>
      <ListItem id="list-2">
        <ListItemIcon icon={Team} />
        List item 2
      </ListItem>
      <ListItem id="list-3">
        <ListItemIcon icon={ThumbsUp} />
        List item 3
      </ListItem>
    </List>,
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
}`,...(E=(O=r.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var D,W,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem id="list-1">
        <ListItemAvatar src={person1} />
        List item 1
      </ListItem>
      <ListItem id="list-2">
        <ListItemAvatar src={person2} />
        List item 2
      </ListItem>
      <ListItem id="list-3">
        <ListItemAvatar src={person3} />
        List item 3
      </ListItem>
    </List>,
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
}`,...(F=(W=m.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var _,A,V;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex align="start" gap="large" style={{
    width: "100%"
  }} direction="column">
      <StoryDescription description="Regular">
        <DialogContentContainer style={{
        height: "162px",
        width: "200px"
      }}>
          <List renderOnlyVisibleItems style={{
          height: "100%",
          width: "100%"
        }}>
            <ListItem>List item 1</ListItem>
            <ListItem>List item 2</ListItem>
            <ListItem>List item 3</ListItem>
            <ListItem>List item 4</ListItem>
            <ListItem>List item 5</ListItem>
            <ListItem>List item 6</ListItem>
            <ListItem>List item 7</ListItem>
            <ListItem>List item 8</ListItem>
            <ListItem>List item 9</ListItem>
            <ListItem>List item 10</ListItem>
            <ListItem>List item 11</ListItem>
            <ListItem>List item 12</ListItem>
          </List>
        </DialogContentContainer>
      </StoryDescription>
      <StoryDescription description="With categories">
        <DialogContentContainer style={{
        height: "159px",
        width: "200px"
      }}>
          <List renderOnlyVisibleItems style={{
          height: "100%",
          width: "100%"
        }}>
            <ListTitle>First category</ListTitle>
            <ListItem>List item 1</ListItem>
            <ListItem>List item 2</ListItem>
            <ListTitle>Second category</ListTitle>
            <ListItem>List item 3</ListItem>
            <ListItem>List item 4</ListItem>
            <ListItem>List item 5</ListItem>
            <ListItem>List item 6</ListItem>
            <ListItem>List item 7</ListItem>
            <ListItem>List item 8</ListItem>
            <ListItem>List item 9</ListItem>
            <ListItem>List item 10</ListItem>
            <ListItem>List item 11</ListItem>
            <ListItem>List item 12</ListItem>
          </List>
        </DialogContentContainer>
      </StoryDescription>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          StoryDescription
        }
      }
    }
  }
}`,...(V=(A=o.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const M=["Overview","ListWithCategories","ListWithIcons","ListWithAvatars","ListWithVirtualizationOptimization"],st=Object.freeze(Object.defineProperty({__proto__:null,ListWithAvatars:m,ListWithCategories:n,ListWithIcons:r,ListWithVirtualizationOptimization:o,Overview:s,__namedExportsOrder:M,default:R},Symbol.toStringTag,{value:"Module"}));export{st as L,s as O,n as a,r as b,m as c,o as d};
