import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as u}from"./index-Hemj67b4.js";import{A as t}from"./AttentionBox-Bnhtj5jP.js";import{D as G}from"./DialogContentContainer-CTtMW4dm.js";import{I as K}from"./Icon-CDdqL_gb.js";import{S as X}from"./Search-DEqjCZg_.js";import{A as $}from"./Avatar-CXX6HRKl.js";import{F as n}from"./Flex-2Q04fxOc.js";import{A as R}from"./AttentionBoxLink-DLewbyjc.js";import{B as g}from"./Button-B_IqwA2w.js";import{T as s}from"./Text-BdZ2Jiqm.js";import{c as q}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{t as r}from"./Info-BB4o2YOm.js";import{l as y}from"./Settings-DOfpeGYp.js";import{t as b}from"./ThumbsUp-DnZbk6gE.js";import{p as i}from"./story-description-B5F6CX2L.js";import{a as f}from"./Invite-CWwo6O26.js";import{r as J}from"./createComponentTemplate-Y0VTmW_y.js";import{H as Q}from"./Heading-B6Hih4aG.js";const v=""+new URL("person-BWCqTmiy.png",import.meta.url).href,A=q({component:t,iconPropNamesArray:["icon"],actionPropsArray:["onClose"]}),V=J(t),Z={title:"Components/AttentionBox",component:t,subcomponents:{AttentionBoxLink:R},argTypes:A.argTypes,decorators:A.decorators,parameters:{docs:{liveEdit:{scope:{Info:r}}}}},a={render:()=>e.jsx("div",{style:{width:"340px"},children:V({onClose:()=>{},title:"Attention box title",text:"Studies show that 100% of people who celebrate birthdays, will eventually die."})}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>e.jsxs(n,{direction:"column",gap:"small",align:"start",children:[e.jsx(i,{description:"Primary",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{title:"Enabling SSO Login",text:"Will cause all your team lose access to the account until using the correct SSO source.",icon:r})})}),e.jsx(i,{description:"Success",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{title:"You're doing great",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",type:"success",icon:b})})}),e.jsx(i,{description:"Danger",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:"danger"})})}),e.jsx(i,{description:"Warning",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:"warning",icon:r})})}),e.jsx(i,{description:"Dark",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{title:"What a great idea!",text:"You can also make this list sortable by tagging the items with tags column",type:"dark",icon:y})})})]}),parameters:{docs:{liveEdit:{scope:{StoryDescription:i,ThumbsUp:b,Favorite:y}}}}},l={render:()=>e.jsx(t,{compact:!0,children:e.jsxs(n,{justify:"space-between",gap:"xs",style:{minWidth:"320px"},children:["Get your monday.com notifications",e.jsx(R,{href:"",text:"Learn more"})]})})},d={render:()=>{const o=u.useCallback(()=>null,[]);return e.jsxs(n,{gap:"large",align:"start",children:[e.jsx("div",{style:{width:"274px"},children:e.jsx(t,{title:"Regular attention box",text:"Dismissable attention box with two lines of content.",onClose:o,icon:r})}),e.jsx("div",{style:{width:"274px"},children:e.jsx(t,{text:"Attention box in compact mode",onClose:o,compact:!0})})]})}},p={render:()=>e.jsxs(n,{direction:"column",align:"start",children:[e.jsx(Q,{type:"h3",weight:"bold",children:"Cross-Account Copier"}),e.jsx(s,{style:{margin:"4px 0 10px"},children:"Copy boards and dashboards to another account"}),e.jsx(t,{compact:!0,withIconWithoutHeader:!0,icon:r,text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",type:"dark"})]})},m={render:()=>{const o=u.useCallback(()=>null,[]);return e.jsx(G,{style:{width:"380px",padding:"var(--spacing-medium)"},children:e.jsxs(n,{direction:"column",gap:"medium",align:"initial",children:[e.jsx(X,{placeholder:"Search by name, role, team, or email"}),e.jsx(s,{style:{paddingInlineStart:"5px",marginTop:"4px"},children:"Suggested people"}),e.jsxs(n,{direction:"column",gap:"medium",align:"start",children:[e.jsxs(n,{gap:"small",children:[e.jsx($,{size:"medium",src:v,type:"img"}),e.jsxs(n,{gap:"xs",children:[e.jsx(s,{children:"May Kishon "}),e.jsx(s,{color:"secondary",children:"(UX/UI Product Designer)"})]})]}),e.jsxs(n,{gap:"small",children:[e.jsx(K,{iconSize:"32",icon:f,style:{padding:"0 6px"}}),e.jsx(s,{children:"Invite new board member by email"})]}),e.jsx(t,{text:"Hold ⌘ to select more than one person or team",compact:!0,onClose:o})]})]})})},parameters:{docs:{liveEdit:{scope:{person:v,Invite:f}}}},name:"Attention box inside a dialog/combobox"},x={render:()=>{const[o,h]=u.useState(!1),z=u.useCallback(()=>{h(!0)},[]);return e.jsx(e.Fragment,{children:e.jsxs(n,{gap:n.gaps.MEDIUM,style:{height:"44px"},children:[e.jsx(g,{onClick:z,kind:g.kinds.SECONDARY,children:"Entry animation"}),o&&e.jsx(t,{compact:!0,withIconWithoutHeader:!0,entryAnimation:!0,icon:r,text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",onClose:()=>h(!1)})]})})},name:"Attention box inside a dialog/combobox"};var w,S,j;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "340px"
  }}>
      {attentionBoxTemplate({
      onClose: () => {},
      title: "Attention box title",
      text: "Studies show that 100% of people who celebrate birthdays, will eventually die."
    })}
    </div>,
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,B,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="small" align="start">
      <StoryDescription description="Primary">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox title="Enabling SSO Login" text="Will cause all your team lose access to the account until using the correct SSO source." icon={Info} />
        </div>
      </StoryDescription>
      <StoryDescription description="Success">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox title="You're doing great" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." type="success" icon={ThumbsUp} />
        </div>
      </StoryDescription>
      <StoryDescription description="Danger">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type="danger" />
        </div>
      </StoryDescription>
      <StoryDescription description="Warning">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type="warning" icon={Info} />
        </div>
      </StoryDescription>
      <StoryDescription description="Dark">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox title="What a great idea!" text="You can also make this list sortable by tagging the items with tags column" type="dark" icon={Favorite} />
        </div>
      </StoryDescription>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          StoryDescription,
          ThumbsUp,
          Favorite
        }
      }
    }
  }
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var k,O,F;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <AttentionBox compact>
      <Flex justify="space-between" gap="xs" style={{
      minWidth: "320px"
    }}>
        Get your monday.com notifications
        <AttentionBoxLink href="" text="Learn more" />
      </Flex>
    </AttentionBox>
}`,...(F=(O=l.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var I,T,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const mockOnClose = useCallback(() => null, []);
    return <Flex gap="large" align="start">
        <div style={{
        width: "274px"
      }}>
          <AttentionBox title="Regular attention box" text="Dismissable attention box with two lines of content." onClose={mockOnClose} icon={Info} />
        </div>
        <div style={{
        width: "274px"
      }}>
          <AttentionBox text="Attention box in compact mode" onClose={mockOnClose} compact />
        </div>
      </Flex>;
  }
}`,...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var W,L,H;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Flex direction="column" align="start">
      <Heading type="h3" weight="bold">
        Cross-Account Copier
      </Heading>
      <Text style={{
      margin: "4px 0 10px"
    }}>Copy boards and dashboards to another account</Text>
      <AttentionBox compact withIconWithoutHeader icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." type="dark" />
    </Flex>
}`,...(H=(L=p.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var U,Y,M;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const mockOnClose = useCallback(() => null, []);
    return <DialogContentContainer style={{
      width: "380px",
      padding: "var(--spacing-medium)"
    }}>
        <Flex direction="column" gap="medium" align="initial">
          <Search placeholder="Search by name, role, team, or email" />
          <Text style={{
          paddingInlineStart: "5px",
          marginTop: "4px"
        }}>Suggested people</Text>
          <Flex direction="column" gap="medium" align="start">
            <Flex gap="small">
              <Avatar size="medium" src={person} type="img" />
              <Flex gap="xs">
                <Text>May Kishon </Text>
                <Text color="secondary">(UX/UI Product Designer)</Text>
              </Flex>
            </Flex>
            <Flex gap="small">
              <Icon iconSize="32" icon={Invite} style={{
              padding: "0 6px"
            }} />
              <Text>Invite new board member by email</Text>
            </Flex>
            <AttentionBox text="Hold ⌘ to select more than one person or team" compact onClose={mockOnClose} />
          </Flex>
        </Flex>
      </DialogContentContainer>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person,
          Invite
        }
      }
    }
  },
  name: "Attention box inside a dialog/combobox"
}`,...(M=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var P,_,N;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setOpen] = useState(false);
    const onClick = useCallback(() => {
      setOpen(true);
    }, []);
    return <>
        <Flex gap={Flex.gaps.MEDIUM} style={{
        height: "44px"
      }}>
          <Button onClick={onClick} kind={Button.kinds.SECONDARY}>
            Entry animation
          </Button>
          {isOpen && <AttentionBox compact withIconWithoutHeader entryAnimation icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." onClose={() => setOpen(false)} />}
        </Flex>
      </>;
  },
  name: "Attention box inside a dialog/combobox"
}`,...(N=(_=x.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const ee=["Overview","States","AttentionBoxWithLink","Dismissable","NaturalAttentionBox","AttentionBoxInsideADialogCombobox","AttentionBoxAnimation"],ve=Object.freeze(Object.defineProperty({__proto__:null,AttentionBoxAnimation:x,AttentionBoxInsideADialogCombobox:m,AttentionBoxWithLink:l,Dismissable:d,NaturalAttentionBox:p,Overview:a,States:c,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{ve as A,d as D,p as N,a as O,c as S,l as a,m as b,x as c};
