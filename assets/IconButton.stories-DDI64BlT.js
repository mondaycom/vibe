import{R as e}from"./index-Hemj67b4.js";import{I as n}from"./IconButton-CfYEqm1b.js";import{T as r}from"./Text-B2fubIt7.js";import{F as t}from"./Flex-DIvs4XZj.js";import{B as X}from"./Button-DEM-Hn8V.js";import{I as p}from"./Icon-zHybxhV-.js";import{A as q}from"./Avatar-QlYnpo6V.js";import{i as N,p as b,v as g}from"./index-BA_MN9l1.js";import{r as U}from"./createComponentTemplate-Y0VTmW_y.js";import{l as y,V as o,t as a}from"./Workspace-BIJf5qCK.js";import{r as v}from"./Wand-Cv7iNunW.js";import{t as x}from"./Drag-po37gvvh.js";import{a as I}from"./CloseSmall-CIab6kaf.js";import{B as P}from"./Box-CI4IQ3Nw.js";import{D as G}from"./Divider-CPEi52zL.js";import{n as V}from"./link-ByEAMSgF.js";import{c as J}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const B=""+new URL("person-BWCqTmiy.png",import.meta.url).href,E=J({component:n,iconPropNamesArray:["icon"],actionPropsArray:["onClick"]}),Q=U(n),Y={title:"Components/IconButton",component:n,argTypes:E.argTypes,decorators:E.decorators},i={render:Q.bind({}),args:{ariaLabel:"Add",icon:N},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"}},e.createElement(n,{icon:y,kind:"primary",ariaLabel:"My primary IconButton"}),e.createElement(n,{icon:y,kind:"secondary",ariaLabel:"My secondary IconButton"}),e.createElement(n,{icon:y,kind:"tertiary",ariaLabel:"My tertiary IconButton"})),parameters:{docs:{liveEdit:{scope:{Bolt:y}}}}},l={render:()=>e.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"}},e.createElement(n,{key:"xxs",icon:o,kind:"secondary",size:"xxs",ariaLabel:"My xxs IconButton"}),e.createElement(n,{key:"xs",icon:o,kind:"secondary",size:"xs",ariaLabel:"My xs IconButton"}),e.createElement(n,{key:"small",icon:o,kind:"secondary",size:"small",ariaLabel:"My small IconButton"}),e.createElement(n,{key:"medium",icon:o,kind:"secondary",size:"medium",ariaLabel:"My medium IconButton"}),e.createElement(n,{key:"large",icon:o,kind:"secondary",size:"large",ariaLabel:"My large IconButton"})),parameters:{docs:{liveEdit:{scope:{Robot:o}}}}},c={render:()=>e.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"}},e.createElement(n,{icon:a,kind:"primary",ariaLabel:"My small active IconButton",active:!0}),e.createElement(n,{icon:a,kind:"secondary",ariaLabel:"My active medium IconButton",active:!0}),e.createElement(n,{icon:a,kind:"tertiary",ariaLabel:"My active large IconButton",active:!0})),parameters:{docs:{liveEdit:{scope:{Doc:a}}}}},d={render:()=>e.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"}},e.createElement(n,{icon:a,kind:"primary",ariaLabel:"My small disabled IconButton",disabled:!0,disabledReason:"This function is not available"}),e.createElement(n,{icon:a,kind:"secondary",ariaLabel:"My disabled medium IconButton",disabled:!0,disabledReason:"This function is not available"}),e.createElement(n,{icon:a,kind:"tertiary",ariaLabel:"My disabled large IconButton",disabled:!0,disabledReason:"This function is not available"})),parameters:{docs:{liveEdit:{scope:{Doc:a}}}}},m={render:()=>e.createElement(P,{border:!0,rounded:"medium",style:{width:"50%"}},e.createElement(t,{direction:"column",align:"start"},e.createElement(t,{gap:"small",style:{padding:"var(--sb-spacing-small)"}},e.createElement(p,{icon:x}),e.createElement(r,{type:"text1"},"Widget name"),e.createElement(n,{icon:v,ariaLabel:"Filter the widget by everything",size:"small"})),e.createElement(G,{withoutMargin:!0}),e.createElement("div",{style:{height:"200px",width:"100%",backgroundColor:"var(--sb-primary-background-hover-color)"}}))),parameters:{docs:{liveEdit:{scope:{Drag:x,Filter:v}}}},name:"Icon button as toolbar button"},u={render:()=>e.createElement(t,{gap:"medium",style:{width:"100%"}},e.createElement(P,{border:!0,rounded:"small",paddingX:"large",style:{width:"100%"}},e.createElement(t,{justify:"start",gap:"large",style:{height:"94px"}},e.createElement(t,{direction:"column",justify:"center",style:{color:"var(--sb-icon-color)"}},e.createElement(p,{icon:g,iconSize:40}),e.createElement(r,{type:"text1",id:"monday-recycle-bin-title"},"Item")),e.createElement(G,{direction:"vertical"}),e.createElement(q,{size:"large",src:B,type:"img"}),e.createElement(t,{direction:"column",align:"start",ariaLabelledby:"monday-recycle-bin-title",style:{flexGrow:1}},e.createElement(t,{gap:"xs"},e.createElement(V,{withoutSpacing:!0,href:""},"Hadas Farhi"),e.createElement("span",null,"deleted the item"),e.createElement(r,{type:"text1",element:"span",weight:"medium"},"Hello World"),e.createElement("span",null,"from the board")),e.createElement(r,{type:"text1",element:"span",weight:"medium"},"Tasks"),e.createElement(t,{gap:"xs"},e.createElement(p,{icon:b}),e.createElement(r,{weight:"medium"},"13m"),e.createElement(r,null,"(Available for restore in the next 1M)"))),e.createElement(X,null,"Restore"))),e.createElement(n,{icon:I,size:"small",ariaLabel:"Remove from Recycle bin"})),parameters:{docs:{liveEdit:{scope:{person1:B,Item:g,Time:b,CloseSmall:I}}}},name:"Icon button as close button"};var f,h,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: iconButtonTemplate.bind({}),
  args: {
    ariaLabel: "Add",
    icon: Add
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var L,M,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  }}>
      <IconButton icon={Bolt} kind="primary" ariaLabel="My primary IconButton" />
      <IconButton icon={Bolt} kind="secondary" ariaLabel="My secondary IconButton" />
      <IconButton icon={Bolt} kind="tertiary" ariaLabel="My tertiary IconButton" />
    </div>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Bolt
        }
      }
    }
  }
}`,...(w=(M=s.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var T,F,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  }}>
      <IconButton key="xxs" icon={Robot} kind="secondary" size="xxs" ariaLabel="My xxs IconButton" />
      <IconButton key="xs" icon={Robot} kind="secondary" size="xs" ariaLabel="My xs IconButton" />
      <IconButton key="small" icon={Robot} kind="secondary" size="small" ariaLabel="My small IconButton" />
      <IconButton key="medium" icon={Robot} kind="secondary" size="medium" ariaLabel="My medium IconButton" />
      <IconButton key="large" icon={Robot} kind="secondary" size="large" ariaLabel="My large IconButton" />
    </div>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Robot
        }
      }
    }
  }
}`,...(S=(F=l.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var R,z,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  }}>
      <IconButton icon={Doc} kind="primary" ariaLabel="My small active IconButton" active />
      <IconButton icon={Doc} kind="secondary" ariaLabel="My active medium IconButton" active />
      <IconButton icon={Doc} kind="tertiary" ariaLabel="My active large IconButton" active />
    </div>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Doc
        }
      }
    }
  }
}`,...(D=(z=c.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var C,A,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  }}>
      <IconButton icon={Doc} kind="primary" ariaLabel="My small disabled IconButton" disabled disabledReason="This function is not available" />
      <IconButton icon={Doc} kind="secondary" ariaLabel="My disabled medium IconButton" disabled disabledReason="This function is not available" />
      <IconButton icon={Doc} kind="tertiary" ariaLabel="My disabled large IconButton" disabled disabledReason="This function is not available" />
    </div>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Doc
        }
      }
    }
  }
}`,...(j=(A=d.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var _,O,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Box border rounded="medium" style={{
    width: "50%"
  }}>
      <Flex direction="column" align="start">
        <Flex gap="small" style={{
        padding: "var(--sb-spacing-small)"
      }}>
          <Icon icon={Drag} />
          <Text type="text1">Widget name</Text>
          <IconButton icon={Filter} ariaLabel="Filter the widget by everything" size="small" />
        </Flex>
        <Divider withoutMargin />
        <div style={{
        height: "200px",
        width: "100%",
        backgroundColor: "var(--sb-primary-background-hover-color)"
      }} />
      </Flex>
    </Box>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Drag,
          Filter
        }
      }
    }
  },
  name: "Icon button as toolbar button"
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var H,$,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Flex gap="medium" style={{
    width: "100%"
  }}>
      <Box border rounded="small" paddingX="large" style={{
      width: "100%"
    }}>
        <Flex justify="start" gap="large" style={{
        height: "94px"
      }}>
          <Flex direction="column" justify="center" style={{
          color: "var(--sb-icon-color)"
        }}>
            <Icon icon={Item} iconSize={40} />
            <Text type="text1" id="monday-recycle-bin-title">
              Item
            </Text>
          </Flex>
          <Divider direction="vertical" />
          <Avatar size="large" src={person1} type="img" />
          <Flex direction="column" align="start" ariaLabelledby="monday-recycle-bin-title" style={{
          flexGrow: 1
        }}>
            <Flex gap="xs">
              <Link withoutSpacing href="">
                Hadas Farhi
              </Link>
              <span>deleted the item</span>
              <Text type="text1" element="span" weight="medium">
                Hello World
              </Text>
              <span>from the board</span>
            </Flex>
            <Text type="text1" element="span" weight="medium">
              Tasks
            </Text>
            <Flex gap="xs">
              <Icon icon={Time} />
              <Text weight="medium">13m</Text>
              <Text>(Available for restore in the next 1M)</Text>
            </Flex>
          </Flex>
          <Button>Restore</Button>
        </Flex>
      </Box>
      <IconButton icon={CloseSmall} size="small" ariaLabel="Remove from Recycle bin" />
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1,
          Item,
          Time,
          CloseSmall
        }
      }
    }
  },
  name: "Icon button as close button"
}`,...(K=($=u.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const Z=["Overview","Kinds","Sizes","Active","Disabled","IconButtonAsToolbarButton","IconButtonAsCloseButton"],ve=Object.freeze(Object.defineProperty({__proto__:null,Active:c,Disabled:d,IconButtonAsCloseButton:u,IconButtonAsToolbarButton:m,Kinds:s,Overview:i,Sizes:l,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{c as A,d as D,ve as I,s as K,i as O,l as S,m as a,u as b};
