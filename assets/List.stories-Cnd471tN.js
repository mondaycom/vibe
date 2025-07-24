import{R as t,r as R}from"./index-Hemj67b4.js";import{L as i,a as L}from"./List-BZWiPkPJ.js";import{L as e}from"./ListItem-Cr9G06Ed.js";import{L as l,a as o}from"./ListItemIcon-CERbNpLg.js";import{D as d}from"./DialogContentContainer-CjdfO6CD.js";import{p as I}from"./person1-D9Wcho68.js";import{p as E,a as u}from"./person3-B60Gf7uf.js";import{t as g}from"./ThumbsUp-DnZbk6gE.js";import{d as h}from"./index-BA_MN9l1.js";import{d as y}from"./Workspace-BIJf5qCK.js";import{p}from"./story-description-B5F6CX2L.js";import{c as k}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as P}from"./Flex-DIvs4XZj.js";const v=k({component:i}),U={title:"Components/List/List",component:i,subcomponents:{ListItem:e,ListItemIcon:o,ListItemAvatar:l},argTypes:v.argTypes,decorators:v.decorators},j=B=>{const c=R.useCallback(()=>alert("On click!"),[]);return t.createElement(i,{...B},t.createElement(e,{onClick:c},"Board Power up"),t.createElement(e,{onClick:c},"Team Power up"),t.createElement(e,{onClick:c},"Essentials"))},s={render:j.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},n={render:()=>t.createElement(i,null,t.createElement(L,null,"First category"),t.createElement(e,null,"List item 1"),t.createElement(e,null,"List item 2"),t.createElement(L,null,"Second category"),t.createElement(e,null,"List item 3"),t.createElement(e,null,"List item 4"))},r={render:()=>t.createElement(i,null,t.createElement(e,{id:"list-1"},t.createElement(o,{icon:y}),"List item 1"),t.createElement(e,{id:"list-2"},t.createElement(o,{icon:h}),"List item 2"),t.createElement(e,{id:"list-3"},t.createElement(o,{icon:g}),"List item 3")),parameters:{docs:{liveEdit:{scope:{Board:y,Team:h,ThumbsUp:g}}}}},m={render:()=>t.createElement(i,null,t.createElement(e,{id:"list-1"},t.createElement(l,{src:I}),"List item 1"),t.createElement(e,{id:"list-2"},t.createElement(l,{src:u}),"List item 2"),t.createElement(e,{id:"list-3"},t.createElement(l,{src:E}),"List item 3")),parameters:{docs:{liveEdit:{scope:{person1:I,person2:u,person3:E}}}}},a={render:()=>t.createElement(P,{align:"start",gap:"large",style:{width:"100%"},direction:"column"},t.createElement(p,{description:"Regular"},t.createElement(d,{style:{height:"162px",width:"200px"}},t.createElement(i,{renderOnlyVisibleItems:!0,style:{height:"100%",width:"100%"}},t.createElement(e,null,"List item 1"),t.createElement(e,null,"List item 2"),t.createElement(e,null,"List item 3"),t.createElement(e,null,"List item 4"),t.createElement(e,null,"List item 5"),t.createElement(e,null,"List item 6"),t.createElement(e,null,"List item 7"),t.createElement(e,null,"List item 8"),t.createElement(e,null,"List item 9"),t.createElement(e,null,"List item 10"),t.createElement(e,null,"List item 11"),t.createElement(e,null,"List item 12")))),t.createElement(p,{description:"With categories"},t.createElement(d,{style:{height:"159px",width:"200px"}},t.createElement(i,{renderOnlyVisibleItems:!0,style:{height:"100%",width:"100%"}},t.createElement(L,null,"First category"),t.createElement(e,null,"List item 1"),t.createElement(e,null,"List item 2"),t.createElement(L,null,"Second category"),t.createElement(e,null,"List item 3"),t.createElement(e,null,"List item 4"),t.createElement(e,null,"List item 5"),t.createElement(e,null,"List item 6"),t.createElement(e,null,"List item 7"),t.createElement(e,null,"List item 8"),t.createElement(e,null,"List item 9"),t.createElement(e,null,"List item 10"),t.createElement(e,null,"List item 11"),t.createElement(e,null,"List item 12"))))),parameters:{docs:{liveEdit:{scope:{StoryDescription:p}}}}};var S,T,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,w,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <List>
      <ListTitle>First category</ListTitle>
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
      <ListTitle>Second category</ListTitle>
      <ListItem>List item 3</ListItem>
      <ListItem>List item 4</ListItem>
    </List>
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var O,x,D;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(x=r.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var W,F,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var A,V,z;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(V=a.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const M=["Overview","ListWithCategories","ListWithIcons","ListWithAvatars","ListWithVirtualizationOptimization"],it=Object.freeze(Object.defineProperty({__proto__:null,ListWithAvatars:m,ListWithCategories:n,ListWithIcons:r,ListWithVirtualizationOptimization:a,Overview:s,__namedExportsOrder:M,default:U},Symbol.toStringTag,{value:"Module"}));export{it as L,s as O,n as a,r as b,m as c,a as d};
