import{R as e,r as x}from"./index-Hemj67b4.js";import{A as t}from"./AttentionBox-CJ0XWwk8.js";import{D as G}from"./DialogContentContainer-BmCeWtAc.js";import{I as K}from"./Icon-BF1oN_oR.js";import{S as X}from"./Search-CLpGEDce.js";import{A as $}from"./Avatar-DD1JLpr9.js";import{F as n}from"./Flex-pz2uwxlA.js";import{A as z}from"./AttentionBoxLink-CMXmoR0l.js";import{B as y}from"./Button-t0_MS1N7.js";import{T as i}from"./Text-CBUmQ7si.js";import{c as q}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{t as r}from"./Info-BB4o2YOm.js";import{l as h}from"./Settings-DOfpeGYp.js";import{t as b}from"./ThumbsUp-DnZbk6gE.js";import{p as a}from"./story-description-B5F6CX2L.js";import{a as f}from"./Invite-CWwo6O26.js";import{r as J}from"./createComponentTemplate-Y0VTmW_y.js";import{H as Q}from"./Heading-C4fcuytm.js";const E=""+new URL("person-BWCqTmiy.png",import.meta.url).href,v=q({component:t,iconPropNamesArray:["icon"],actionPropsArray:["onClose"]}),V=J(t),Z={title:"Components/AttentionBox",component:t,subcomponents:{AttentionBoxLink:z},argTypes:v.argTypes,decorators:v.decorators,parameters:{docs:{liveEdit:{scope:{Info:r}}}}},s={render:()=>e.createElement("div",{style:{width:"340px"}},V({onClose:()=>{},title:"Attention box title",text:"Studies show that 100% of people who celebrate birthdays, will eventually die."})),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>e.createElement(n,{direction:"column",gap:"small",align:"start"},e.createElement(a,{description:"Primary"},e.createElement("div",{style:{width:"340px"}},e.createElement(t,{title:"Enabling SSO Login",text:"Will cause all your team lose access to the account until using the correct SSO source.",icon:r}))),e.createElement(a,{description:"Success"},e.createElement("div",{style:{width:"340px"}},e.createElement(t,{title:"You're doing great",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",type:"success",icon:b}))),e.createElement(a,{description:"Danger"},e.createElement("div",{style:{width:"340px"}},e.createElement(t,{title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:"danger"}))),e.createElement(a,{description:"Warning"},e.createElement("div",{style:{width:"340px"}},e.createElement(t,{title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:"warning",icon:r}))),e.createElement(a,{description:"Dark"},e.createElement("div",{style:{width:"340px"}},e.createElement(t,{title:"What a great idea!",text:"You can also make this list sortable by tagging the items with tags column",type:"dark",icon:h})))),parameters:{docs:{liveEdit:{scope:{StoryDescription:a,ThumbsUp:b,Favorite:h}}}}},l={render:()=>e.createElement(t,{compact:!0},e.createElement(n,{justify:"space-between",gap:"xs",style:{minWidth:"320px"}},"Get your monday.com notifications",e.createElement(z,{href:"",text:"Learn more"})))},m={render:()=>{const o=x.useCallback(()=>null,[]);return e.createElement(n,{gap:"large",align:"start"},e.createElement("div",{style:{width:"274px"}},e.createElement(t,{title:"Regular attention box",text:"Dismissable attention box with two lines of content.",onClose:o,icon:r})),e.createElement("div",{style:{width:"274px"}},e.createElement(t,{text:"Attention box in compact mode",onClose:o,compact:!0})))}},p={render:()=>e.createElement(n,{direction:"column",align:"start"},e.createElement(Q,{type:"h3",weight:"bold"},"Cross-Account Copier"),e.createElement(i,{style:{margin:"4px 0 10px"}},"Copy boards and dashboards to another account"),e.createElement(t,{compact:!0,withIconWithoutHeader:!0,icon:r,text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",type:"dark"}))},d={render:()=>{const o=x.useCallback(()=>null,[]);return e.createElement(G,{style:{width:"380px",padding:"var(--spacing-medium)"}},e.createElement(n,{direction:"column",gap:"medium",align:"initial"},e.createElement(X,{placeholder:"Search by name, role, team, or email"}),e.createElement(i,{style:{paddingInlineStart:"5px",marginTop:"4px"}},"Suggested people"),e.createElement(n,{direction:"column",gap:"medium",align:"start"},e.createElement(n,{gap:"small"},e.createElement($,{size:"medium",src:E,type:"img"}),e.createElement(n,{gap:"xs"},e.createElement(i,null,"May Kishon "),e.createElement(i,{color:"secondary"},"(UX/UI Product Designer)"))),e.createElement(n,{gap:"small"},e.createElement(K,{iconSize:"32",icon:f,style:{padding:"0 6px"}}),e.createElement(i,null,"Invite new board member by email")),e.createElement(t,{text:"Hold ⌘ to select more than one person or team",compact:!0,onClose:o}))))},parameters:{docs:{liveEdit:{scope:{person:E,Invite:f}}}},name:"Attention box inside a dialog/combobox"},u={render:()=>{const[o,g]=x.useState(!1),j=x.useCallback(()=>{g(!0)},[]);return e.createElement(e.Fragment,null,e.createElement(n,{gap:n.gaps.MEDIUM,style:{height:"44px"}},e.createElement(y,{onClick:j,kind:y.kinds.SECONDARY},"Entry animation"),o&&e.createElement(t,{compact:!0,withIconWithoutHeader:!0,entryAnimation:!0,icon:r,text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",onClose:()=>g(!1)})))},name:"Attention box inside a dialog/combobox"};var A,w,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,B,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(O=l.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var I,T,W;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(T=m.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var L,H,U;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex direction="column" align="start">
      <Heading type="h3" weight="bold">
        Cross-Account Copier
      </Heading>
      <Text style={{
      margin: "4px 0 10px"
    }}>Copy boards and dashboards to another account</Text>
      <AttentionBox compact withIconWithoutHeader icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." type="dark" />
    </Flex>
}`,...(U=(H=p.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var Y,M,P;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,_,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const ee=["Overview","States","AttentionBoxWithLink","Dismissable","NaturalAttentionBox","AttentionBoxInsideADialogCombobox","AttentionBoxAnimation"],fe=Object.freeze(Object.defineProperty({__proto__:null,AttentionBoxAnimation:u,AttentionBoxInsideADialogCombobox:d,AttentionBoxWithLink:l,Dismissable:m,NaturalAttentionBox:p,Overview:s,States:c,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{fe as A,m as D,p as N,s as O,c as S,l as a,d as b,u as c};
