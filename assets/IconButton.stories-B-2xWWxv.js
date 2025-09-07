import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{I as n}from"./IconButton-t36CoXmh.js";import{T as o}from"./Text-A3hPU_Wc.js";import{F as t}from"./Flex-BEu-Gd_z.js";import{B as X}from"./Button-iAbJtqkU.js";import{I as p}from"./Icon-F8zJl_9g.js";import{A as q}from"./Avatar-CX195UWp.js";import{i as N,o as x,u as b}from"./index-VC5anwLh.js";import{r as U}from"./createComponentTemplate-Y0VTmW_y.js";import{l as u,V as a,t as i}from"./Workspace-BIJf5qCK.js";import{r as v}from"./Wand-Cv7iNunW.js";import{t as g}from"./Drag-po37gvvh.js";import{a as h}from"./CloseSmall-CIab6kaf.js";import{B as P}from"./Box-D9cKzrT2.js";import{D as G}from"./Divider-DLAtuxCi.js";import{a as V}from"./link-Dw3-1D-q.js";import{c as J}from"./createStoryMetaSettingsDecorator-CZWEfz_r.js";const I=""+new URL("person-BWCqTmiy.png",import.meta.url).href,B=J({component:n,iconPropNamesArray:["icon"],actionPropsArray:["onClick"]}),Q=U(n),Y={title:"Components/IconButton",component:n,argTypes:B.argTypes,decorators:B.decorators},r={render:Q.bind({}),args:{id:"overview-icon-button",ariaLabel:"Add",icon:N},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"},children:[e.jsx(n,{id:"kinds-primary",icon:u,kind:"primary",ariaLabel:"My primary IconButton"}),e.jsx(n,{id:"kinds-secondary",icon:u,kind:"secondary",ariaLabel:"My secondary IconButton"}),e.jsx(n,{id:"kinds-tertiary",icon:u,kind:"tertiary",ariaLabel:"My tertiary IconButton"})]}),parameters:{docs:{liveEdit:{scope:{Bolt:u}}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"},children:[e.jsx(n,{id:"sizes-xxs",icon:a,kind:"secondary",size:"xxs",ariaLabel:"My xxs IconButton"},"xxs"),e.jsx(n,{id:"sizes-xs",icon:a,kind:"secondary",size:"xs",ariaLabel:"My xs IconButton"},"xs"),e.jsx(n,{id:"sizes-small",icon:a,kind:"secondary",size:"small",ariaLabel:"My small IconButton"},"small"),e.jsx(n,{id:"sizes-medium",icon:a,kind:"secondary",size:"medium",ariaLabel:"My medium IconButton"},"medium"),e.jsx(n,{id:"sizes-large",icon:a,kind:"secondary",size:"large",ariaLabel:"My large IconButton"},"large")]}),parameters:{docs:{liveEdit:{scope:{Robot:a}}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"},children:[e.jsx(n,{id:"active-primary",icon:i,kind:"primary",ariaLabel:"My small active IconButton",active:!0}),e.jsx(n,{id:"active-secondary",icon:i,kind:"secondary",ariaLabel:"My active medium IconButton",active:!0}),e.jsx(n,{id:"active-tertiary",icon:i,kind:"tertiary",ariaLabel:"My active large IconButton",active:!0})]}),parameters:{docs:{liveEdit:{scope:{Doc:i}}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"},children:[e.jsx(n,{id:"disabled-primary",icon:i,kind:"primary",ariaLabel:"My small disabled IconButton",disabled:!0,disabledReason:"This function is not available"}),e.jsx(n,{id:"disabled-secondary",icon:i,kind:"secondary",ariaLabel:"My disabled medium IconButton",disabled:!0,disabledReason:"This function is not available"}),e.jsx(n,{id:"disabled-tertiary",icon:i,kind:"tertiary",ariaLabel:"My disabled large IconButton",disabled:!0,disabledReason:"This function is not available"})]}),parameters:{docs:{liveEdit:{scope:{Doc:i}}}}},m={render:()=>e.jsx(P,{border:!0,rounded:"medium",style:{width:"50%"},children:e.jsxs(t,{direction:"column",align:"start",children:[e.jsxs(t,{gap:"small",style:{padding:"var(--sb-spacing-small)"},children:[e.jsx(p,{icon:g}),e.jsx(o,{type:"text1",children:"Widget name"}),e.jsx(n,{id:"toolbar-filter-button",icon:v,ariaLabel:"Filter the widget by everything",size:"small"})]}),e.jsx(G,{withoutMargin:!0}),e.jsx("div",{style:{height:"200px",width:"100%",backgroundColor:"var(--sb-primary-background-hover-color)"}})]})}),parameters:{docs:{liveEdit:{scope:{Drag:g,Filter:v}}}},name:"Icon button as toolbar button"},y={render:()=>e.jsxs(t,{gap:"medium",style:{width:"100%"},children:[e.jsx(P,{border:!0,rounded:"small",paddingX:"large",style:{width:"100%"},children:e.jsxs(t,{justify:"start",gap:"large",style:{height:"94px"},children:[e.jsxs(t,{direction:"column",justify:"center",style:{color:"var(--sb-icon-color)"},children:[e.jsx(p,{icon:b,iconSize:40}),e.jsx(o,{type:"text1",id:"monday-recycle-bin-title",children:"Item"})]}),e.jsx(G,{direction:"vertical"}),e.jsx(q,{size:"large",src:I,type:"img"}),e.jsxs(t,{direction:"column",align:"start",ariaLabelledby:"monday-recycle-bin-title",style:{flexGrow:1},children:[e.jsxs(t,{gap:"xs",children:[e.jsx(V,{withoutSpacing:!0,href:"",children:"Hadas Farhi"}),e.jsx("span",{children:"deleted the item"}),e.jsx(o,{type:"text1",element:"span",weight:"medium",children:"Hello World"}),e.jsx("span",{children:"from the board"})]}),e.jsx(o,{type:"text1",element:"span",weight:"medium",children:"Tasks"}),e.jsxs(t,{gap:"xs",children:[e.jsx(p,{icon:x}),e.jsx(o,{weight:"medium",children:"13m"}),e.jsx(o,{children:"(Available for restore in the next 1M)"})]})]}),e.jsx(X,{id:"restore-button",ariaLabel:"Restore deleted item",children:"Restore"})]})}),e.jsx(n,{id:"close-recycle-button",icon:h,size:"small",ariaLabel:"Remove from Recycle bin"})]}),parameters:{docs:{liveEdit:{scope:{person1:I,Item:b,Time:x,CloseSmall:h}}}},name:"Icon button as close button"};var j,f,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: iconButtonTemplate.bind({}),
  args: {
    id: "overview-icon-button",
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
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var L,w,M;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  }}>
      <IconButton id="kinds-primary" icon={Bolt} kind="primary" ariaLabel="My primary IconButton" />
      <IconButton id="kinds-secondary" icon={Bolt} kind="secondary" ariaLabel="My secondary IconButton" />
      <IconButton id="kinds-tertiary" icon={Bolt} kind="tertiary" ariaLabel="My tertiary IconButton" />
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
}`,...(M=(w=s.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var T,z,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  }}>
      <IconButton key="xxs" id="sizes-xxs" icon={Robot} kind="secondary" size="xxs" ariaLabel="My xxs IconButton" />
      <IconButton key="xs" id="sizes-xs" icon={Robot} kind="secondary" size="xs" ariaLabel="My xs IconButton" />
      <IconButton key="small" id="sizes-small" icon={Robot} kind="secondary" size="small" ariaLabel="My small IconButton" />
      <IconButton key="medium" id="sizes-medium" icon={Robot} kind="secondary" size="medium" ariaLabel="My medium IconButton" />
      <IconButton key="large" id="sizes-large" icon={Robot} kind="secondary" size="large" ariaLabel="My large IconButton" />
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
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var R,S,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  }}>
      <IconButton id="active-primary" icon={Doc} kind="primary" ariaLabel="My small active IconButton" active />
      <IconButton id="active-secondary" icon={Doc} kind="secondary" ariaLabel="My active medium IconButton" active />
      <IconButton id="active-tertiary" icon={Doc} kind="tertiary" ariaLabel="My active large IconButton" active />
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
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var C,E,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  }}>
      <IconButton id="disabled-primary" icon={Doc} kind="primary" ariaLabel="My small disabled IconButton" disabled disabledReason="This function is not available" />
      <IconButton id="disabled-secondary" icon={Doc} kind="secondary" ariaLabel="My disabled medium IconButton" disabled disabledReason="This function is not available" />
      <IconButton id="disabled-tertiary" icon={Doc} kind="tertiary" ariaLabel="My disabled large IconButton" disabled disabledReason="This function is not available" />
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
}`,...(A=(E=c.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var _,O,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Box border rounded="medium" style={{
    width: "50%"
  }}>
      <Flex direction="column" align="start">
        <Flex gap="small" style={{
        padding: "var(--sb-spacing-small)"
      }}>
          <Icon icon={Drag} />
          <Text type="text1">Widget name</Text>
          <IconButton id="toolbar-filter-button" icon={Filter} ariaLabel="Filter the widget by everything" size="small" />
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
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var H,$,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
          <Button id="restore-button" ariaLabel="Restore deleted item">
            Restore
          </Button>
        </Flex>
      </Box>
      <IconButton id="close-recycle-button" icon={CloseSmall} size="small" ariaLabel="Remove from Recycle bin" />
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
}`,...(K=($=y.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const Z=["Overview","Kinds","Sizes","Active","Disabled","IconButtonAsToolbarButton","IconButtonAsCloseButton"],ve=Object.freeze(Object.defineProperty({__proto__:null,Active:l,Disabled:c,IconButtonAsCloseButton:y,IconButtonAsToolbarButton:m,Kinds:s,Overview:r,Sizes:d,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{l as A,c as D,ve as I,s as K,r as O,d as S,m as a,y as b};
