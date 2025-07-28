import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{i as de,f as ie,e as le}from"./interactions-utils-DlKgNicw.js";import{userEvent as A,waitFor as oe,fireEvent as he}from"./index-JSOB3pIc.js";import{u as c}from"./index-DS1BdwZI.js";import{H as z}from"./DialogConstants-DkeX1sw_.js";import{D as l}from"./Tooltip-Bnazf5Ct.js";import{t as O}from"./Info-BB4o2YOm.js";import{I as se}from"./IconButton-B0kVMTxI.js";import{D as s}from"./DialogContentContainer-CTtMW4dm.js";import{c as ge}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as t}from"./Flex-2Q04fxOc.js";import{S as n}from"./Skeleton-bKf2F5b0.js";import{B as a}from"./Button-B_IqwA2w.js";const B="click-outside-dialog",b="context-menu-dialog",C="hide-triggers-container",F="click-outside-button",ue=ce(B,()=>A.click(ae())),pe=ce(b,()=>he.contextMenu(ae())),me=de({tests:[ue,pe],beforeAll:async i=>{const o=await ie(i,F);await A.click(o),await A.click(o),await oe(async()=>{const r=await re(i,B);le(r).toBeInTheDocument()},{timeout:100})},afterEach:async()=>{const i=document.activeElement;i&&i.blur&&i!==document.body&&i.blur()}});function ae(){return document.querySelector(`[data-testid=${C}]`)}async function re(i,o){return await ie(i,o)}async function xe(i){await oe(()=>le(i).not.toBeInTheDocument(),{timeout:1e3})}function ce(i,o){return async function(r){const h=await re(r,i);o(r,h),await xe(h)}}const _=ge({component:l}),I={options:z,control:{type:"multi-select"},table:{type:{summary:Object.values(z).join(" | ")}}},ke={title:"Components/Dialog",component:l,argTypes:{..._.argTypes,hideTrigger:I,showTrigger:I},decorators:_.decorators,parameters:{docs:{liveEdit:{scope:{useSwitch:c}}}}},f={render:i=>e.jsx("div",{style:{padding:"80px var(--sb-spacing-small)"},children:e.jsx(l,{modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["click"],position:"right",content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(o,r)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},r))]})}),...i,children:e.jsx(se,{icon:O,active:!0,kind:"secondary"})})}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},w={render:()=>{const{isChecked:i,onChange:o}=c({defaultChecked:!1}),{isChecked:r,onChange:h}=c({defaultChecked:!1}),{isChecked:x,onChange:p}=c({defaultChecked:!1}),{isChecked:g,onChange:m}=c({defaultChecked:!1}),d=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.jsxs(t,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:[e.jsx(l,{modifiers:d,open:i,position:"top",showTrigger:[],hideTrigger:[],content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(k,u)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(a,{kind:"secondary",onClick:o,active:i,children:"Top"})}),e.jsx(l,{modifiers:d,position:"bottom",showTrigger:[],hideTrigger:[],open:r,content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(k,u)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(a,{kind:"secondary",onClick:h,active:r,children:"Bottom"})}),e.jsx(l,{modifiers:d,showTrigger:[],hideTrigger:[],position:"right",open:x,content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(k,u)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(a,{kind:"secondary",onClick:p,active:x,children:"Right"})}),e.jsx(l,{modifiers:d,position:"left",showTrigger:[],hideTrigger:[],open:g,content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(k,u)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(a,{kind:"secondary",onClick:m,active:g,children:"Left"})})]})},name:"Positions"},v={render:()=>{const{isChecked:i,onChange:o}=c({defaultChecked:!1}),{isChecked:r,onChange:h}=c({defaultChecked:!1}),{isChecked:x,onChange:p}=c({defaultChecked:!1}),g=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.jsxs(t,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:[e.jsx(l,{modifiers:g,showTrigger:["click"],hideTrigger:["click"],content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(m,d)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},d))]})}),children:e.jsx(a,{kind:"secondary",active:i,onClick:o,children:"On click"})}),e.jsx(l,{modifiers:g,showTrigger:["mouseenter"],hideTrigger:["mouseleave"],content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(m,d)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},d))]})}),children:e.jsx("div",{onMouseEnter:h,onMouseLeave:h,children:e.jsx(a,{kind:"secondary",active:r,children:"On mouse enter"})})}),e.jsx(l,{modifiers:g,showTrigger:["focus"],hideTrigger:["blur"],content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(m,d)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},d))]})}),children:e.jsx(a,{onFocus:p,onBlur:p,kind:"secondary",active:x,children:"On focus"})}),e.jsx(l,{modifiers:g,shouldShowOnMount:!0,showTrigger:[],hideTrigger:[],position:"right",content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(m,d)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},d))]})}),children:e.jsx(a,{kind:"secondary",active:!0,children:"On mount"})})]})},name:"Show triggers",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},j={render:()=>{const{isChecked:i,onChange:o}=c({defaultChecked:!0}),{isChecked:r,onChange:h}=c({defaultChecked:!0}),{isChecked:x,onChange:p}=c({defaultChecked:!0}),{isChecked:g,onChange:m}=c({defaultChecked:!0}),{isChecked:d,onChange:k}=c({defaultChecked:!0}),{isChecked:u,onChange:W}=c({defaultChecked:!0}),y=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.jsxs(t,{"data-testid":C,id:C,style:{paddingInline:"var(--sb-spacing-small)"},wrap:!0,direction:"column",justify:"start",align:"start",children:[e.jsx(l,{modifiers:y,shouldShowOnMount:!0,containerSelector:`#${C}`,onClickOutside:h,position:"right",showTrigger:["click"],hideTrigger:["clickoutside"],content:e.jsx(s,{"data-testid":B,children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(a,{"data-testid":F,kind:"secondary",active:r,onClick:h,style:{marginBlock:"54px"},children:"On click outside"})}),e.jsx(l,{modifiers:y,shouldShowOnMount:!0,position:"right",showTrigger:["click"],hideTrigger:["click"],content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(a,{kind:"secondary",active:i,onClick:o,style:{marginBlock:"54px"},children:"On click"})}),e.jsx(l,{modifiers:y,shouldShowOnMount:!0,position:"right",showTrigger:["focus","click"],hideTrigger:["blur"],content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(a,{kind:"secondary",active:g,onClick:m,style:{marginBlock:"54px"},children:"On blur"})}),e.jsx(l,{modifiers:y,shouldShowOnMount:!0,position:"right",showTrigger:["click"],hideTrigger:["onContentClick"],onContentClick:k,content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(a,{kind:"secondary",active:d,onClick:k,style:{marginBlock:"54px"},children:"On content click"})}),e.jsx(l,{modifiers:y,shouldShowOnMount:!0,showTrigger:["mouseenter"],hideTrigger:["mouseleave"],position:"right",onDialogDidHide:p,onDialogDidShow:p,content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(a,{kind:"secondary",active:x,onClick:p,style:{marginBlock:"54px"},children:"On mouse leave"})}),e.jsx(l,{modifiers:y,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["contextmenu"],position:"right",containerSelector:`#${C}`,onDialogDidHide:W,onDialogDidShow:W,content:e.jsx(s,{"data-testid":b,children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(a,{kind:"secondary",active:u,style:{marginBlock:"54px"},children:"On right click"})})]})},name:"Hide triggers",play:me,parameters:{chromatic:{pauseAnimationAtEnd:!0},docs:{liveEdit:{scope:{HIDE_TRIGGERS_CONTAINER:C,CLICK_OUTSIDE_DIALOG:B,CLICK_OUTSIDE_DIALOG_BUTTON:F,CONTEXT_MENU_DIALOG:b}}}}},D={render:()=>{const{isChecked:i,onChange:o}=c({defaultChecked:!1});return e.jsx(l,{showTrigger:[],open:i,content:e.jsx(s,{children:e.jsx(s,{children:e.jsx(a,{kind:"secondary",onClick:()=>o(!1),children:"This will close as well"})})}),children:e.jsx(a,{onClick:()=>o(!i),children:"Click me to toggle the Dialog"})})},name:"Controlled Dialog"},T={render:()=>{const i=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.jsx("div",{style:{padding:"80px var(--sb-spacing-small)"},children:e.jsx(l,{tooltip:!0,modifiers:i,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["click"],position:"right",content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(o,r)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},r))]})}),children:e.jsx(se,{icon:O,active:!0,kind:"secondary"})})})},name:"Dialog with tooltip",parameters:{docs:{liveEdit:{scope:{Info:O}}}}},S={render:()=>{const{isChecked:i,onChange:o}=c({defaultChecked:!1});return e.jsx(t,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:e.jsx("div",{className:"scrollable",style:{height:"300px",width:"400px",overflow:"auto"},children:e.jsx("div",{style:{height:"800px"},children:e.jsx(l,{open:i,position:"left",showTrigger:[],hideTrigger:[],containerSelector:".scrollable",disableContainerScroll:!0,content:e.jsx(s,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(r,h)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},h))]})}),children:e.jsx(a,{kind:"secondary",onClick:o,active:i,children:"Click"})})})})})},name:"Disable scroll when dialog open"};var E,M,L;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: DialogProps) => {
    return <div style={{
      padding: "80px var(--sb-spacing-small)"
    }}>
        <Dialog modifiers={[{
        name: "preventOverflow",
        options: {
          mainAxis: false
        }
      }]} shouldShowOnMount showTrigger={["click"]} hideTrigger={["click"]} position={"right"} content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>)}
              </Flex>
            </DialogContentContainer>} {...args}>
          <IconButton icon={Info} active kind="secondary" />
        </Dialog>
      </div>;
  },
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(L=(M=f.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var R,H,N;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render:
  // for prevent dialog to move while scrolling
  () => {
    // For maintain active state of each button according to the dialog open state (this hooks is available for your usage)
    const {
      isChecked: checkedTop,
      onChange: onChangeTop
    } = useSwitch({
      defaultChecked: false
    });
    const {
      isChecked: checkedBottom,
      onChange: onChangeBottom
    } = useSwitch({
      defaultChecked: false
    });
    const {
      isChecked: checkedRight,
      onChange: onChangeRight
    } = useSwitch({
      defaultChecked: false
    });
    const {
      isChecked: checkedLeft,
      onChange: onChangeLeft
    } = useSwitch({
      defaultChecked: false
    });
    const modifiers = [{
      name: "preventOverflow",
      options: {
        mainAxis: false
      }
    }];
    return <Flex style={{
      padding: "80px var(--sb-spacing-small)"
    }} gap="medium">
          <Dialog modifiers={modifiers} open={checkedTop} position="top" showTrigger={[]} hideTrigger={[]} content={<DialogContentContainer>
                <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                  <Skeleton type="text" size="h1" fullWidth />
                  {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                      <Skeleton type="circle" width={20} height={20} />
                      <Skeleton type="text" size="small" fullWidth />
                    </Flex>)}
                </Flex>
              </DialogContentContainer>}>
            <Button kind="secondary" onClick={onChangeTop} active={checkedTop}>
              Top
            </Button>
          </Dialog>
          <Dialog modifiers={modifiers} position="bottom" showTrigger={[]} hideTrigger={[]} open={checkedBottom} content={<DialogContentContainer>
                <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                  <Skeleton type="text" size="h1" fullWidth />
                  {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                      <Skeleton type="circle" width={20} height={20} />
                      <Skeleton type="text" size="small" fullWidth />
                    </Flex>)}
                </Flex>
              </DialogContentContainer>}>
            <Button kind="secondary" onClick={onChangeBottom} active={checkedBottom}>
              Bottom
            </Button>
          </Dialog>
          <Dialog modifiers={modifiers} showTrigger={[]} hideTrigger={[]} position="right" open={checkedRight} content={<DialogContentContainer>
                <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                  <Skeleton type="text" size="h1" fullWidth />
                  {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                      <Skeleton type="circle" width={20} height={20} />
                      <Skeleton type="text" size="small" fullWidth />
                    </Flex>)}
                </Flex>
              </DialogContentContainer>}>
            <Button kind="secondary" onClick={onChangeRight} active={checkedRight}>
              Right
            </Button>
          </Dialog>
          <Dialog modifiers={modifiers} position="left" showTrigger={[]} hideTrigger={[]} open={checkedLeft} content={<DialogContentContainer>
                <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                  <Skeleton type="text" size="h1" fullWidth />
                  {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                      <Skeleton type="circle" width={20} height={20} />
                      <Skeleton type="text" size="small" fullWidth />
                    </Flex>)}
                </Flex>
              </DialogContentContainer>}>
            <Button kind="secondary" onClick={onChangeLeft} active={checkedLeft}>
              Left
            </Button>
          </Dialog>
        </Flex>;
  },
  name: "Positions"
}`,...(N=(H=w.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var G,U,P;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const {
      isChecked: clickButtonActive,
      onChange: onClickClickButton
    } = useSwitch({
      defaultChecked: false
    });
    const {
      isChecked: hoverButtonActive,
      onChange: onHoverButton
    } = useSwitch({
      defaultChecked: false
    });
    const {
      isChecked: focusButtonActive,
      onChange: onFocusButton
    } = useSwitch({
      defaultChecked: false
    });
    const modifiers = [{
      name: "preventOverflow",
      options: {
        mainAxis: false
      }
    }];
    return <Flex style={{
      padding: "80px var(--sb-spacing-small)"
    }} gap="medium">
        <Dialog modifiers={modifiers} showTrigger={["click"]} hideTrigger={["click"]} content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>)}
              </Flex>
            </DialogContentContainer>}>
          <Button kind="secondary" active={clickButtonActive} onClick={onClickClickButton}>
            On click
          </Button>
        </Dialog>
        <Dialog modifiers={modifiers} showTrigger={["mouseenter"]} hideTrigger={["mouseleave"]} content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>)}
              </Flex>
            </DialogContentContainer>}>
          <div onMouseEnter={onHoverButton} onMouseLeave={onHoverButton}>
            <Button kind="secondary" active={hoverButtonActive}>
              On mouse enter
            </Button>
          </div>
        </Dialog>
        <Dialog modifiers={modifiers} showTrigger={["focus"]} hideTrigger={["blur"]} content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>)}
              </Flex>
            </DialogContentContainer>}>
          <Button onFocus={onFocusButton} onBlur={onFocusButton} kind="secondary" active={focusButtonActive}>
            On focus
          </Button>
        </Dialog>
        <Dialog modifiers={modifiers} shouldShowOnMount showTrigger={[]} hideTrigger={[]} position="right" content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>)}
              </Flex>
            </DialogContentContainer>}>
          <Button kind="secondary" active>
            On mount
          </Button>
        </Dialog>
      </Flex>;
  },
  name: "Show triggers",
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
}`,...(P=(U=v.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var K,$,X;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    // For maintain active state of each button according to the dialog open state (this hooks is available for your usage)
    const {
      isChecked: clickButtonActive,
      onChange: switchClickButtonActive
    } = useSwitch({
      defaultChecked: true
    });
    const {
      isChecked: clickOutsideButtonActive,
      onChange: switchClickOutsideActive
    } = useSwitch({
      defaultChecked: true
    });
    const {
      isChecked: mouseLeaveButtonActive,
      onChange: switchMouseLeaveActive
    } = useSwitch({
      defaultChecked: true
    });
    const {
      isChecked: blurButtonActive,
      onChange: switchBlurButtonActive
    } = useSwitch({
      defaultChecked: true
    });
    const {
      isChecked: contentClickButtonActive,
      onChange: switchContentClickActive
    } = useSwitch({
      defaultChecked: true
    });
    const {
      isChecked: contextMenuButtonActive,
      onChange: switchContextMenuActive
    } = useSwitch({
      defaultChecked: true
    });

    // for prevent dialog to move while scrolling
    const modifiers = [{
      name: "preventOverflow",
      options: {
        mainAxis: false
      }
    }];
    return <Flex data-testid={HIDE_TRIGGERS_CONTAINER} id={HIDE_TRIGGERS_CONTAINER} style={{
      paddingInline: "var(--sb-spacing-small)"
    }} wrap direction="column" justify="start" align="start">
        <Dialog modifiers={modifiers} shouldShowOnMount containerSelector={\`#\${HIDE_TRIGGERS_CONTAINER}\`} onClickOutside={switchClickOutsideActive} position="right" showTrigger={["click"]} hideTrigger={["clickoutside"]} content={<DialogContentContainer data-testid={CLICK_OUTSIDE_DIALOG}>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{
            width: "100%"
          }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>}>
          <Button data-testid={CLICK_OUTSIDE_DIALOG_BUTTON} kind="secondary" active={clickOutsideButtonActive} onClick={switchClickOutsideActive} style={{
          marginBlock: "54px"
        }}>
            On click outside
          </Button>
        </Dialog>
        <Dialog modifiers={modifiers} shouldShowOnMount position="right" showTrigger={["click"]} hideTrigger={["click"]} content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{
            width: "100%"
          }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>}>
          <Button kind="secondary" active={clickButtonActive} onClick={switchClickButtonActive} style={{
          marginBlock: "54px"
        }}>
            On click
          </Button>
        </Dialog>
        <Dialog modifiers={modifiers} shouldShowOnMount position="right" showTrigger={["focus", "click"]} hideTrigger={["blur"]} content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{
            width: "100%"
          }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>}>
          <Button kind="secondary" active={blurButtonActive} onClick={switchBlurButtonActive} style={{
          marginBlock: "54px"
        }}>
            On blur
          </Button>
        </Dialog>
        <Dialog modifiers={modifiers} shouldShowOnMount position="right" showTrigger={["click"]} hideTrigger={["onContentClick"]} onContentClick={switchContentClickActive} content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{
            width: "100%"
          }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>}>
          <Button kind="secondary" active={contentClickButtonActive} onClick={switchContentClickActive} style={{
          marginBlock: "54px"
        }}>
            On content click
          </Button>
        </Dialog>
        <Dialog modifiers={modifiers} shouldShowOnMount showTrigger={["mouseenter"]} hideTrigger={["mouseleave"]} position="right" onDialogDidHide={switchMouseLeaveActive} onDialogDidShow={switchMouseLeaveActive} content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{
            width: "100%"
          }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>}>
          <Button kind="secondary" active={mouseLeaveButtonActive} onClick={switchMouseLeaveActive} style={{
          marginBlock: "54px"
        }}>
            On mouse leave
          </Button>
        </Dialog>
        <Dialog modifiers={modifiers} shouldShowOnMount showTrigger={["click"]} hideTrigger={["contextmenu"]} position="right" containerSelector={\`#\${HIDE_TRIGGERS_CONTAINER}\`} onDialogDidHide={switchContextMenuActive} onDialogDidShow={switchContextMenuActive} content={<DialogContentContainer data-testid={CONTEXT_MENU_DIALOG}>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{
            width: "100%"
          }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>}>
          <Button kind="secondary" active={contextMenuButtonActive} style={{
          marginBlock: "54px"
        }}>
            On right click
          </Button>
        </Dialog>
      </Flex>;
  },
  name: "Hide triggers",
  play: closeTriggersInteractionSuite,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    },
    docs: {
      liveEdit: {
        scope: {
          HIDE_TRIGGERS_CONTAINER,
          CLICK_OUTSIDE_DIALOG,
          CLICK_OUTSIDE_DIALOG_BUTTON,
          CONTEXT_MENU_DIALOG
        }
      }
    }
  }
}`,...(X=($=j.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var q,J,Q;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const {
      isChecked: isOpen,
      onChange: setIsOpen
    } = useSwitch({
      defaultChecked: false
    });
    return <Dialog
    //disable default triggers
    showTrigger={[]}
    // manage the opening state in the app level
    open={isOpen} content={<DialogContentContainer>
            <DialogContentContainer>
              <Button kind="secondary"
        // @ts-ignore
        onClick={() => setIsOpen(false)}>
                This will close as well
              </Button>
            </DialogContentContainer>
          </DialogContentContainer>}>
        <Button
      // @ts-ignore
      onClick={() => setIsOpen(!isOpen)}>
          Click me to toggle the Dialog
        </Button>
      </Dialog>;
  },
  name: "Controlled Dialog"
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,Y,Z;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  // for prevent dialog to move while scrolling
  render: () => {
    const modifiers = [{
      name: "preventOverflow",
      options: {
        mainAxis: false
      }
    }];
    return <div style={{
      padding: "80px var(--sb-spacing-small)"
    }}>
        <Dialog tooltip modifiers={modifiers} shouldShowOnMount showTrigger={["click"]} hideTrigger={["click"]} position="right" content={<DialogContentContainer>
              <Flex direction="column" align="start" gap="small" style={{
          width: "150px",
          padding: "var(--sb-spacing-small)"
        }}>
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({
            length: 3
          }, (_value, index: number) => <Flex key={index} gap="small" style={{
            width: "100%"
          }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>)}
              </Flex>
            </DialogContentContainer>}>
          <IconButton icon={Info} active kind="secondary" />
        </Dialog>
      </div>;
  },
  name: "Dialog with tooltip",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Info
        }
      }
    }
  }
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    // For maintain active state of each button according to the dialog open state (this hooks is available for your usage)
    const {
      isChecked: checkedTop,
      onChange: onChangeTop
    } = useSwitch({
      defaultChecked: false
    });
    return <Flex style={{
      padding: "80px var(--sb-spacing-small)"
    }} gap="medium">
        <div className={"scrollable"} style={{
        height: "300px",
        width: "400px",
        overflow: "auto"
      }}>
          <div style={{
          height: "800px"
        }}>
            <Dialog open={checkedTop} position="left" showTrigger={[]} hideTrigger={[]} containerSelector={".scrollable"} disableContainerScroll content={<DialogContentContainer>
                  <Flex direction="column" align="start" gap="small" style={{
              width: "150px",
              padding: "var(--sb-spacing-small)"
            }}>
                    <Skeleton type="text" size="h1" fullWidth />
                    {Array.from({
                length: 3
              }, (_value, index: number) => <Flex key={index} gap="small" style={{
                width: "100%"
              }}>
                        <Skeleton type="circle" width={20} height={20} />
                        <Skeleton type="text" size="small" fullWidth />
                      </Flex>)}
                  </Flex>
                </DialogContentContainer>}>
              <Button kind="secondary" onClick={onChangeTop} active={checkedTop}>
                Click
              </Button>
            </Dialog>
          </div>
        </div>
      </Flex>;
  },
  name: "Disable scroll when dialog open"
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const ye=["Overview","Positions","ShowTriggers","HideTriggers","ControlledDialog","DialogWithTooltip","DisableScrollWhenDialogOpen"],We=Object.freeze(Object.defineProperty({__proto__:null,ControlledDialog:D,DialogWithTooltip:T,DisableScrollWhenDialogOpen:S,HideTriggers:j,Overview:f,Positions:w,ShowTriggers:v,__namedExportsOrder:ye,default:ke},Symbol.toStringTag,{value:"Module"}));export{D as C,We as D,j as H,f as O,w as P,v as S,T as a,S as b};
