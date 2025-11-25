import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as u}from"./index-CTZeEbLr.js";import{c as K}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{t as a}from"./Info-jvFNh0HS.js";import{a as R,A as t}from"./AttentionBoxLink-CokHSpeR.js";import{l as b}from"./Settings-DqG0P6p1.js";import{f as h}from"./index-BVKo2bYj.js";import{p as i}from"./story-description-B8U8K6Zm.js";import{a as y}from"./Invite-BJsiPZ1j.js";import{r as G}from"./createComponentTemplate-B08h-OOW.js";import{S as X}from"./Search-1tqW-CcQ.js";import{F as n}from"./Flex-Bimzf4jb.js";import{H as $}from"./Heading-B02tO7j0.js";import{T as s}from"./Text-DVNPP_6L.js";import{D as q}from"./DialogContentContainer-BBTL4acN.js";import{A as J}from"./Avatar-CwVuOGB7.js";import{I as Q}from"./Icon-CMBPUOKb.js";import{B as f}from"./Button-zprqw9Vf.js";const v=""+new URL("person-BWCqTmiy.png",import.meta.url).href,w=K({component:t,iconPropNamesArray:["icon"],actionPropsArray:["onClose"]}),V=G(t),Z={title:"Components/AttentionBox [Deprecated]",component:t,subcomponents:{AttentionBoxLink:R},argTypes:w.argTypes,decorators:w.decorators,parameters:{docs:{liveEdit:{scope:{Info:a}}}}},r={render:()=>e.jsx("div",{style:{width:"340px"},children:V({id:"overview-attention-box","aria-label":"Informational message about birthdays",onClose:()=>{},title:"Attention box title",text:"Studies show that 100% of people who celebrate birthdays, will eventually die."})}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>e.jsxs(n,{direction:"column",gap:"small",align:"start",children:[e.jsx(i,{description:"Primary",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{id:"states-primary","aria-label":"SSO login warning",title:"Enabling SSO Login",text:"Will cause all your team lose access to the account until using the correct SSO source.",icon:a})})}),e.jsx(i,{description:"Success",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{id:"states-success","aria-label":"Success message",title:"You're doing great",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",type:"success",icon:h})})}),e.jsx(i,{description:"Danger",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{id:"states-danger","aria-label":"Storage space warning",title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:"danger"})})}),e.jsx(i,{description:"Warning",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{id:"states-warning","aria-label":"Storage space warning",title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:"warning",icon:a})})}),e.jsx(i,{description:"Dark",children:e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{id:"states-dark","aria-label":"Helpful tip about tagging items",title:"What a great idea!",text:"You can also make this list sortable by tagging the items with tags column",type:"dark",icon:b})})})]}),parameters:{docs:{liveEdit:{scope:{StoryDescription:i,ThumbsUp:h,Favorite:b}}}}},c={render:()=>e.jsx(t,{id:"with-link-attention-box","aria-label":"Notification settings reminder",compact:!0,children:e.jsxs(n,{justify:"space-between",gap:"xs",style:{minWidth:"320px"},children:["Get your monday.com notifications",e.jsx(R,{id:"learn-more-link",href:"",text:"Learn more"})]})})},d={render:()=>{const o=u.useCallback(()=>{},[]);return e.jsxs(n,{gap:"large",align:"start",children:[e.jsx("div",{style:{width:"274px"},children:e.jsx(t,{id:"dismissable-regular","aria-label":"Dismissable information message",title:"Regular attention box",text:"Dismissable attention box with two lines of content.",onClose:o,icon:a})}),e.jsx("div",{style:{width:"274px"},children:e.jsx(t,{id:"dismissable-compact","aria-label":"Dismissable compact message",text:"Attention box in compact mode",onClose:o,compact:!0})})]})}},p={render:()=>e.jsxs(n,{direction:"column",align:"start",children:[e.jsx($,{id:"cross-account-heading",type:"h3",weight:"bold",children:"Cross-Account Copier"}),e.jsx(s,{style:{margin:"4px 0 10px"},children:"Copy boards and dashboards to another account"}),e.jsx(t,{id:"natural-attention-box","aria-label":"Instructions for copying content",compact:!0,withIconWithoutHeader:!0,icon:a,text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",type:"dark"})]})},m={render:()=>{const o=u.useCallback(()=>{},[]);return e.jsx(q,{style:{width:"380px",padding:"var(--spacing-medium)"},children:e.jsxs(n,{direction:"column",gap:"medium",align:"initial",children:[e.jsx(X,{id:"dialog-search",inputAriaLabel:"Search people by name, role, team, or email",placeholder:"Search by name, role, team, or email"}),e.jsx(s,{style:{paddingInlineStart:"5px",marginTop:"4px"},children:"Suggested people"}),e.jsxs(n,{direction:"column",gap:"medium",align:"start",children:[e.jsxs(n,{gap:"small",children:[e.jsx(J,{id:"may-avatar",size:"medium",src:v,type:"img",ariaLabel:"May Kishon"}),e.jsxs(n,{gap:"xs",children:[e.jsx(s,{children:"May Kishon "}),e.jsx(s,{color:"secondary",children:"(UX/UI Product Designer)"})]})]}),e.jsxs(n,{gap:"small",children:[e.jsx(Q,{id:"invite-icon",iconSize:"32",icon:y,style:{padding:"0 6px"}}),e.jsx(s,{children:"Invite new board member by email"})]}),e.jsx(t,{id:"dialog-attention-box","aria-label":"Multiple selection tip",text:"Hold ⌘ to select more than one person or team",compact:!0,onClose:o})]})]})})},parameters:{docs:{liveEdit:{scope:{person:v,Invite:y}}}},name:"Attention box inside a dialog/combobox"},x={render:()=>{const[o,g]=u.useState(!1),z=u.useCallback(()=>{g(!0)},[]);return e.jsx(e.Fragment,{children:e.jsxs(n,{gap:n.gaps.MEDIUM,style:{height:"44px"},children:[e.jsx(f,{id:"animation-trigger",ariaLabel:"Show attention box with entry animation",onClick:z,kind:f.kinds.SECONDARY,children:"Entry animation"}),o&&e.jsx(t,{id:"animated-attention-box","aria-label":"Animated instructions for copying content",compact:!0,withIconWithoutHeader:!0,entryAnimation:!0,icon:a,text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",onClose:()=>g(!1)})]})})},name:"Attention box inside a dialog/combobox"};var S,A,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "340px"
  }}>
      {attentionBoxTemplate({
      id: "overview-attention-box",
      "aria-label": "Informational message about birthdays",
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
}`,...(j=(A=r.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var C,k,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="small" align="start">
      <StoryDescription description="Primary">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox id="states-primary" aria-label="SSO login warning" title="Enabling SSO Login" text="Will cause all your team lose access to the account until using the correct SSO source." icon={Info} />
        </div>
      </StoryDescription>
      <StoryDescription description="Success">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox id="states-success" aria-label="Success message" title="You're doing great" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." type="success" icon={ThumbsUp} />
        </div>
      </StoryDescription>
      <StoryDescription description="Danger">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox id="states-danger" aria-label="Storage space warning" title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type="danger" />
        </div>
      </StoryDescription>
      <StoryDescription description="Warning">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox id="states-warning" aria-label="Storage space warning" title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type="warning" icon={Info} />
        </div>
      </StoryDescription>
      <StoryDescription description="Dark">
        <div style={{
        width: "340px"
      }}>
          <AttentionBox id="states-dark" aria-label="Helpful tip about tagging items" title="What a great idea!" text="You can also make this list sortable by tagging the items with tags column" type="dark" icon={Favorite} />
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
}`,...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var B,O,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <AttentionBox id="with-link-attention-box" aria-label="Notification settings reminder" compact>
      <Flex justify="space-between" gap="xs" style={{
      minWidth: "320px"
    }}>
        Get your monday.com notifications
        <AttentionBoxLink id="learn-more-link" href="" text="Learn more" />
      </Flex>
    </AttentionBox>
}`,...(I=(O=c.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var F,T,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const mockOnClose = useCallback((): void => {}, []);
    return <Flex gap="large" align="start">
        <div style={{
        width: "274px"
      }}>
          <AttentionBox id="dismissable-regular" aria-label="Dismissable information message" title="Regular attention box" text="Dismissable attention box with two lines of content." onClose={mockOnClose} icon={Info} />
        </div>
        <div style={{
        width: "274px"
      }}>
          <AttentionBox id="dismissable-compact" aria-label="Dismissable compact message" text="Attention box in compact mode" onClose={mockOnClose} compact />
        </div>
      </Flex>;
  }
}`,...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var L,W,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex direction="column" align="start">
      <Heading id="cross-account-heading" type="h3" weight="bold">
        Cross-Account Copier
      </Heading>
      <Text style={{
      margin: "4px 0 10px"
    }}>Copy boards and dashboards to another account</Text>
      <AttentionBox id="natural-attention-box" aria-label="Instructions for copying content" compact withIconWithoutHeader icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." type="dark" />
    </Flex>
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var M,U,Y;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const mockOnClose = useCallback((): void => {}, []);
    return <DialogContentContainer style={{
      width: "380px",
      padding: "var(--spacing-medium)"
    }}>
        <Flex direction="column" gap="medium" align="initial">
          <Search id="dialog-search" inputAriaLabel="Search people by name, role, team, or email" placeholder="Search by name, role, team, or email" />
          <Text style={{
          paddingInlineStart: "5px",
          marginTop: "4px"
        }}>Suggested people</Text>
          <Flex direction="column" gap="medium" align="start">
            <Flex gap="small">
              <Avatar id="may-avatar" size="medium" src={person} type="img" ariaLabel="May Kishon" />
              <Flex gap="xs">
                <Text>May Kishon </Text>
                <Text color="secondary">(UX/UI Product Designer)</Text>
              </Flex>
            </Flex>
            <Flex gap="small">
              <Icon id="invite-icon" iconSize="32" icon={Invite} style={{
              padding: "0 6px"
            }} />
              <Text>Invite new board member by email</Text>
            </Flex>
            <AttentionBox id="dialog-attention-box" aria-label="Multiple selection tip" text="Hold ⌘ to select more than one person or team" compact onClose={mockOnClose} />
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
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var N,P,_;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setOpen] = useState(false);
    const onClick = useCallback(() => {
      setOpen(true);
    }, []);
    return <>
        <Flex gap={Flex.gaps.MEDIUM} style={{
        height: "44px"
      }}>
          <Button id="animation-trigger" ariaLabel="Show attention box with entry animation" onClick={onClick} kind={Button.kinds.SECONDARY}>
            Entry animation
          </Button>
          {isOpen && <AttentionBox id="animated-attention-box" aria-label="Animated instructions for copying content" compact withIconWithoutHeader entryAnimation icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." onClose={() => setOpen(false)} />}
        </Flex>
      </>;
  },
  name: "Attention box inside a dialog/combobox"
}`,...(_=(P=x.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const ee=["Overview","States","AttentionBoxWithLink","Dismissable","NaturalAttentionBox","AttentionBoxInsideADialogCombobox","AttentionBoxAnimation"],fe=Object.freeze(Object.defineProperty({__proto__:null,AttentionBoxAnimation:x,AttentionBoxInsideADialogCombobox:m,AttentionBoxWithLink:c,Dismissable:d,NaturalAttentionBox:p,Overview:r,States:l,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{fe as A,d as D,p as N,r as O,l as S,c as a,m as b,x as c};
