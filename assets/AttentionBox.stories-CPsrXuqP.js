import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as a}from"./index-CTZeEbLr.js";import{c as ie}from"./createStoryMetaSettingsDecorator-DPBO6pDt.js";import{A as t}from"./AttentionBox-BlWFUUzf.js";import{t as Q}from"./Info-jvFNh0HS.js";import{a as w}from"./Invite-BJsiPZ1j.js";import{S as se}from"./Search-DGy_VcGk.js";import{T as i}from"./Text-DxGBAgI1.js";import{F as n}from"./Flex-DIp2zxrn.js";import{B as Z}from"./Button-DRHbYbZf.js";import{H as ee}from"./Heading-BRC2G7st.js";import{D as re}from"./DialogContentContainer-BeKFb57x.js";import{B as te}from"./Box-CSuEa9xb.js";import{A as ae}from"./Avatar-KNcBrWV2.js";import{I as le}from"./Icon-CpEYCgaz.js";import{S as r}from"./Skeleton-B_NVxWmK.js";const f=""+new URL("person-02JXxArq.png",import.meta.url).href,C=""+new URL("content-image-iH3LJkS7.png",import.meta.url).href,v=ie({component:t,actionPropsArray:["onClose"]}),ce={title:"Components/AttentionBox [New]",component:t,argTypes:v.argTypes,decorators:v.decorators},l={render:o=>e.jsx("div",{style:{maxWidth:600},children:e.jsx(t,{...o})}),args:{title:"Attention box title",text:"This action will cause your team to lose access to the account until you use the correct SSO source.",action:{text:"Button",onClick:()=>{}},link:{href:"#",text:"Read more"},onClose:()=>{}},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"240px 600px",columnGap:"var(--space-16)",rowGap:"var(--space-24)",alignItems:"center"},children:[e.jsx(i,{type:"text1",weight:"bold",children:"Primary"}),e.jsx(t,{title:"Heads up",text:"This message gives you helpful context without requiring immediate action.",onClose:()=>{}}),e.jsx(i,{type:"text1",weight:"bold",children:"Neutral"}),e.jsx(t,{type:"neutral",title:"General note",text:"Use this style for more subtle visual emphasis, or for or neutral custom contexts.",onClose:()=>{}}),e.jsx(i,{type:"text1",weight:"bold",children:"Positive"}),e.jsx(t,{type:"positive",title:"You're doing great",text:"Indicates success , the user can keep working without interruptions.",onClose:()=>{}}),e.jsx(i,{type:"text1",weight:"bold",children:"Warning"}),e.jsx(t,{type:"warning",title:"Caution",text:"Shows important warnings the user should review before moving forward.",onClose:()=>{}}),e.jsx(i,{type:"text1",weight:"bold",children:"Negative"}),e.jsx(t,{type:"negative",title:"Low on free space",text:"Highlights errors or limitations the user should be aware of.",onClose:()=>{}})]})},d={render:()=>e.jsxs(n,{gap:"large",align:"start",children:[e.jsx(t,{title:"Heads up",text:"This message gives you helpful context without requiring immediate action.",action:{text:"Button",onClick:()=>{}},link:{href:"#",text:"Read more"},onClose:()=>{}}),e.jsx(t,{text:"This message gives you helpful context without requiring immediate action.",action:{text:"Button",onClick:()=>{}},link:{href:"#",text:"Read more"},onClose:()=>{}})]})},m={render:()=>e.jsx("div",{style:{maxWidth:600},children:e.jsx(t,{compact:!0,text:"Here's something you might want to know. This message gives you helpful context without requiring immediate action.",action:{text:"Button",onClick:()=>{}},link:{href:"#",text:"Read more"},onClose:()=>{}})})},u={render:()=>e.jsx("div",{style:{maxWidth:600},children:e.jsx(t,{title:"Heads up",text:"Here's something you might want to know. This message gives you helpful context without requiring immediate action.",action:{text:"Button",onClick:()=>{}},link:{href:"#",text:"Read more"},onClose:()=>{}})})},x={render:()=>{const[o,s]=a.useState(!0);return o?e.jsx("div",{style:{maxWidth:600},children:e.jsx(t,{compact:!0,text:"This message gives you helpful context without requiring immediate action.",onClose:()=>s(!1)})}):e.jsx(Z,{onClick:()=>s(!0),children:"Show AttentionBox"})}},h={render:()=>e.jsxs(n,{gap:"large",align:"start",children:[e.jsx(t,{icon:!1,text:"This message gives you helpful context without requiring immediate action.",action:{text:"Button",onClick:()=>{}},link:{href:"#",text:"Read more"},onClose:()=>{}}),e.jsx(t,{text:"This message gives you helpful context without requiring immediate action.",action:{text:"Button",onClick:()=>{}},link:{href:"#",text:"Read more"},onClose:()=>{}})]}),name:"Icon"},p={render:()=>e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"100%"},children:[e.jsx(ee,{type:"h3",weight:"bold",children:"Cross-Account Copier"}),e.jsx(i,{children:"Copy boards and dashboards to another account"}),e.jsx(t,{compact:!0,type:"neutral",text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",link:{href:"#",text:"Read more"},onClose:()=>{}})]}),parameters:{docs:{liveEdit:{scope:{Info:Q}}}}},g={render:()=>e.jsx(re,{style:{padding:0},children:e.jsx(te,{style:{width:380},padding:"medium",children:e.jsxs(n,{direction:"column",gap:"medium",align:"stretch",children:[e.jsx(se,{placeholder:"Search by name, role, team, or email"}),e.jsx(i,{children:"Suggested people"}),e.jsxs(n,{direction:"column",gap:"medium",align:"start",children:[e.jsxs(n,{gap:"small",children:[e.jsx(ae,{size:"medium",src:f,type:"img"}),e.jsxs(n,{gap:"xs",children:[e.jsx(i,{element:"span",children:"Julia Martinez "}),e.jsx(i,{color:"secondary",element:"span",children:"(UX/UI Product Designer)"})]})]}),e.jsxs(n,{gap:"small",children:[e.jsx(le,{iconSize:"32",icon:w}),e.jsx(i,{children:"Invite new board member by email"})]}),e.jsx(t,{text:"Hold ⌘ to select more than one person or team",onClose:()=>{}})]})]})})}),parameters:{docs:{liveEdit:{scope:{person:f,Invite:w}}}}},y={render:()=>{const[o,s]=a.useState("button"),ne=a.useCallback(()=>{s("skeleton"),setTimeout(()=>{s("content")},2e3)},[]);a.useEffect(()=>{o==="content"&&setTimeout(()=>{s("attention")},750)},[o]);const oe=a.useCallback(()=>{s("button")},[]);return e.jsxs(n,{align:"start",direction:"column",gap:"medium",style:{width:"100%",maxWidth:720,minHeight:260},children:[o==="button"&&e.jsx(Z,{onClick:ne,kind:"secondary",children:"Entry animation"}),o==="skeleton"&&e.jsxs(n,{align:"start",direction:"column",gap:"medium",style:{width:"100%"},children:[e.jsx(r,{type:"text",size:"h2",width:300}),e.jsxs(n,{align:"start",gap:"medium",style:{width:"100%"},children:[e.jsx(r,{width:150,height:150}),e.jsxs(n,{direction:"column",align:"stretch",gap:"small",style:{width:"100%"},children:[e.jsx(r,{type:"text",size:"h5",fullWidth:!0}),e.jsx(r,{type:"text",size:"h5",fullWidth:!0}),e.jsx(r,{type:"text",size:"h5",fullWidth:!0}),e.jsx(r,{type:"text",size:"h5",width:200})]})]})]}),(o==="content"||o==="attention")&&e.jsxs(n,{align:"start",direction:"column",gap:"medium",style:{width:"100%"},children:[o==="attention"&&e.jsx(t,{compact:!0,text:"This action will cause your team to lose access to the account until you will use the correct SSO.",onClose:oe}),e.jsxs(n,{align:"start",direction:"column",gap:"medium",style:{width:"100%"},children:[e.jsx(ee,{type:"h3",children:"Entry animation"}),e.jsxs(n,{align:"stretch",gap:"medium",style:{width:"100%"},children:[e.jsx(te,{style:{width:150,height:150,flexShrink:0},rounded:"small",children:e.jsx("img",{src:C,alt:"Image placeholder",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs(i,{ellipsis:!1,children:["Here's"," a sneak peek at how it works. The entry animation is an integral part of the experience we provide. ","It's"," up to you to ensure that the surrounding layout shifts downward smoothly when the Attention Box enters the view."]})]})]})]})]})},parameters:{docs:{liveEdit:{scope:{Info:Q,contentImage:C}}}}};var k,b,j;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: AttentionBoxProps) => <div style={{
    maxWidth: 600
  }}>
      <AttentionBox {...args} />
    </div>,
  args: {
    title: "Attention box title",
    text: "This action will cause your team to lose access to the account until you use the correct SSO source.",
    action: {
      text: "Button",
      onClick: () => {}
    },
    link: {
      href: "#",
      text: "Read more"
    },
    onClose: () => {}
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,B,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "240px 600px",
    columnGap: "var(--space-16)",
    rowGap: "var(--space-24)",
    alignItems: "center"
  }}>
      <Text type="text1" weight="bold">
        Primary
      </Text>
      <AttentionBox title="Heads up" text="This message gives you helpful context without requiring immediate action." onClose={() => {}} />
      <Text type="text1" weight="bold">
        Neutral
      </Text>
      <AttentionBox type="neutral" title="General note" text="Use this style for more subtle visual emphasis, or for or neutral custom contexts." onClose={() => {}} />
      <Text type="text1" weight="bold">
        Positive
      </Text>
      <AttentionBox type="positive" title="You're doing great" text="Indicates success , the user can keep working without interruptions." onClose={() => {}} />
      <Text type="text1" weight="bold">
        Warning
      </Text>
      <AttentionBox type="warning" title="Caution" text="Shows important warnings the user should review before moving forward." onClose={() => {}} />
      <Text type="text1" weight="bold">
        Negative
      </Text>
      <AttentionBox type="negative" title="Low on free space" text="Highlights errors or limitations the user should be aware of." onClose={() => {}} />
    </div>
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var A,F,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Flex gap="large" align="start">
      <AttentionBox title="Heads up" text="This message gives you helpful context without requiring immediate action." action={{
      text: "Button",
      onClick: () => {}
    }} link={{
      href: "#",
      text: "Read more"
    }} onClose={() => {}} />
      <AttentionBox text="This message gives you helpful context without requiring immediate action." action={{
      text: "Button",
      onClick: () => {}
    }} link={{
      href: "#",
      text: "Read more"
    }} onClose={() => {}} />
    </Flex>
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var H,E,W;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 600
  }}>
      <AttentionBox compact text="Here's something you might want to know. This message gives you helpful context without requiring immediate action." action={{
      text: "Button",
      onClick: () => {}
    }} link={{
      href: "#",
      text: "Read more"
    }} onClose={() => {}} />
    </div>
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var R,q,z;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 600
  }}>
      <AttentionBox title="Heads up" text="Here's something you might want to know. This message gives you helpful context without requiring immediate action." action={{
      text: "Button",
      onClick: () => {}
    }} link={{
      href: "#",
      text: "Read more"
    }} onClose={() => {}} />
    </div>
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var D,O,L;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? <div style={{
      maxWidth: 600
    }}>
        <AttentionBox compact text="This message gives you helpful context without requiring immediate action." onClose={() => setVisible(false)} />
      </div> : <Button onClick={() => setVisible(true)}>Show AttentionBox</Button>;
  }
}`,...(L=(O=x.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var P,U,_;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Flex gap="large" align="start">
      <AttentionBox icon={false} text="This message gives you helpful context without requiring immediate action." action={{
      text: "Button",
      onClick: () => {}
    }} link={{
      href: "#",
      text: "Read more"
    }} onClose={() => {}} />
      <AttentionBox text="This message gives you helpful context without requiring immediate action." action={{
      text: "Button",
      onClick: () => {}
    }} link={{
      href: "#",
      text: "Read more"
    }} onClose={() => {}} />
    </Flex>,
  name: "Icon"
}`,...(_=(U=h.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var G,M,N;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Flex direction="column" align="start" gap="small" style={{
    width: "100%"
  }}>
      <Heading type="h3" weight="bold">
        Cross-Account Copier
      </Heading>
      <Text>Copy boards and dashboards to another account</Text>
      <AttentionBox compact type="neutral" text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." link={{
      href: "#",
      text: "Read more"
    }} onClose={() => {}} />
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Info
        }
      }
    }
  }
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var J,V,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    return <DialogContentContainer style={{
      padding: 0
    }}>
        <Box style={{
        width: 380
      }} padding="medium">
          <Flex direction="column" gap="medium" align="stretch">
            <Search placeholder="Search by name, role, team, or email" />
            <Text>Suggested people</Text>
            <Flex direction="column" gap="medium" align="start">
              <Flex gap="small">
                <Avatar size="medium" src={person} type="img" />
                <Flex gap="xs">
                  <Text element="span">Julia Martinez </Text>
                  <Text color="secondary" element="span">
                    (UX/UI Product Designer)
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="small">
                <Icon iconSize="32" icon={Invite} />
                <Text>Invite new board member by email</Text>
              </Flex>
              <AttentionBox text="Hold ⌘ to select more than one person or team" onClose={() => {}} />
            </Flex>
          </Flex>
        </Box>
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
  }
}`,...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,$,K;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    type Stage = "button" | "skeleton" | "content" | "attention";
    const [stage, setStage] = useState<Stage>("button");
    const onClick = useCallback(() => {
      setStage("skeleton");
      setTimeout(() => {
        setStage("content");
      }, 2000);
    }, []);
    useEffect(() => {
      if (stage === "content") {
        setTimeout(() => {
          setStage("attention");
        }, 750);
      }
    }, [stage]);
    const reset = useCallback(() => {
      setStage("button");
    }, []);
    return <Flex align="start" direction="column" gap="medium" style={{
      width: "100%",
      maxWidth: 720,
      minHeight: 260
    }}>
        {/* Button Stage */}
        {stage === "button" && <Button onClick={onClick} kind="secondary">
            Entry animation
          </Button>}

        {/* Skeleton Stage */}
        {stage === "skeleton" && <Flex align="start" direction="column" gap="medium" style={{
        width: "100%"
      }}>
            <Skeleton type="text" size="h2" width={300} />
            <Flex align="start" gap="medium" style={{
          width: "100%"
        }}>
              <Skeleton width={150} height={150} />
              <Flex direction="column" align="stretch" gap="small" style={{
            width: "100%"
          }}>
                <Skeleton type="text" size="h5" fullWidth />
                <Skeleton type="text" size="h5" fullWidth />
                <Skeleton type="text" size="h5" fullWidth />
                <Skeleton type="text" size="h5" width={200} />
              </Flex>
            </Flex>
          </Flex>}

        {/* Content Stage */}
        {(stage === "content" || stage === "attention") && <Flex align="start" direction="column" gap="medium" style={{
        width: "100%"
      }}>
            {stage === "attention" && <AttentionBox compact text="This action will cause your team to lose access to the account until you will use the correct SSO." onClose={reset} />}

            {/* Main Content */}
            <Flex align="start" direction="column" gap="medium" style={{
          width: "100%"
        }}>
              <Heading type="h3">Entry animation</Heading>
              <Flex align="stretch" gap="medium" style={{
            width: "100%"
          }}>
                <Box style={{
              width: 150,
              height: 150,
              flexShrink: 0
            }} rounded="small">
                  <img src={contentImage} alt="Image placeholder" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} />
                </Box>
                <Text ellipsis={false}>
                  {"Here's"} a sneak peek at how it works. The entry animation is an integral part of the experience we
                  provide. {"It's"} up to you to ensure that the surrounding layout shifts downward smoothly when the
                  Attention Box enters the view.
                </Text>
              </Flex>
            </Flex>
          </Flex>}
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Info,
          contentImage
        }
      }
    }
  }
}`,...(K=($=y.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const de=["Overview","Types","Default","Compact","LinkAndButton","Dismissible","IconStory","AttentionBoxWithLayouts","AttentionBoxInsideADialogCombobox","EntryAnimation"],Te=Object.freeze(Object.defineProperty({__proto__:null,AttentionBoxInsideADialogCombobox:g,AttentionBoxWithLayouts:p,Compact:m,Default:d,Dismissible:x,EntryAnimation:y,IconStory:h,LinkAndButton:u,Overview:l,Types:c,__namedExportsOrder:de,default:ce},Symbol.toStringTag,{value:"Module"}));export{Te as A,m as C,d as D,y as E,h as I,u as L,l as O,c as T,x as a,p as b,g as c};
