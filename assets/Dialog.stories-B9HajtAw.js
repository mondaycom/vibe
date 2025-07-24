import{R as e}from"./index-Hemj67b4.js";import{i as de,f as ie,e as le}from"./interactions-utils-BDSgavBb.js";import{userEvent as A,waitFor as oe,fireEvent as ge}from"./index-JSOB3pIc.js";import{u as s}from"./index-DS1BdwZI.js";import{H as z}from"./DialogConstants-DkeX1sw_.js";import{D as o}from"./Tooltip-C_-kbcOd.js";import{t as O}from"./Info-BB4o2YOm.js";import{D as a}from"./DialogContentContainer-CjdfO6CD.js";import{I as ae}from"./IconButton-CfYEqm1b.js";import{c as he}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as n}from"./Flex-DIvs4XZj.js";import{S as t}from"./Skeleton-BikSzT0_.js";import{B as r}from"./Button-DEM-Hn8V.js";const B="click-outside-dialog",b="context-menu-dialog",f="hide-triggers-container",F="click-outside-button",me=ce(B,()=>A.click(re())),ue=ce(b,()=>ge.contextMenu(re())),pe=de({tests:[me,ue],beforeAll:async i=>{const l=await ie(i,F);await A.click(l),await A.click(l),await oe(async()=>{const c=await se(i,B);le(c).toBeInTheDocument()},{timeout:100})},afterEach:async()=>{const i=document.activeElement;i&&i.blur&&i!==document.body&&i.blur()}});function re(){return document.querySelector(`[data-testid=${f}]`)}async function se(i,l){return await ie(i,l)}async function ke(i){await oe(()=>le(i).not.toBeInTheDocument(),{timeout:1e3})}function ce(i,l){return async function(c){const g=await se(c,i);l(c,g),await ke(g)}}const _=he({component:o}),I={options:z,control:{type:"multi-select"},table:{type:{summary:Object.values(z).join(" | ")}}},ye={title:"Components/Dialog",component:o,argTypes:{..._.argTypes,hideTrigger:I,showTrigger:I},decorators:_.decorators,parameters:{docs:{liveEdit:{scope:{useSwitch:s}}}}},x={render:()=>e.createElement("div",{style:{padding:"80px var(--sb-spacing-small)"}},e.createElement(o,{modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["click"],position:"right",content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(i,l)=>e.createElement(n,{key:l,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(ae,{icon:O,active:!0,kind:"secondary"}))),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},w={render:()=>{const{isChecked:i,onChange:l}=s({defaultChecked:!1}),{isChecked:c,onChange:g}=s({defaultChecked:!1}),{isChecked:k,onChange:u}=s({defaultChecked:!1}),{isChecked:h,onChange:p}=s({defaultChecked:!1}),d=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.createElement(n,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium"},e.createElement(o,{modifiers:d,open:i,position:"top",showTrigger:[],hideTrigger:[],content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(y,m)=>e.createElement(n,{key:m,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(r,{kind:"secondary",onClick:l,active:i},"Top")),e.createElement(o,{modifiers:d,position:"bottom",showTrigger:[],hideTrigger:[],open:c,content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(y,m)=>e.createElement(n,{key:m,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(r,{kind:"secondary",onClick:g,active:c},"Bottom")),e.createElement(o,{modifiers:d,showTrigger:[],hideTrigger:[],position:"right",open:k,content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(y,m)=>e.createElement(n,{key:m,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(r,{kind:"secondary",onClick:u,active:k},"Right")),e.createElement(o,{modifiers:d,position:"left",showTrigger:[],hideTrigger:[],open:h,content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(y,m)=>e.createElement(n,{key:m,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(r,{kind:"secondary",onClick:p,active:h},"Left")))},name:"Positions"},v={render:()=>{const{isChecked:i,onChange:l}=s({defaultChecked:!1}),{isChecked:c,onChange:g}=s({defaultChecked:!1}),{isChecked:k,onChange:u}=s({defaultChecked:!1}),h=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.createElement(n,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium"},e.createElement(o,{modifiers:h,showTrigger:["click"],hideTrigger:["click"],content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(p,d)=>e.createElement(n,{key:d,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(r,{kind:"secondary",active:i,onClick:l},"On click")),e.createElement(o,{modifiers:h,showTrigger:["mouseenter"],hideTrigger:["mouseleave"],content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(p,d)=>e.createElement(n,{key:d,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement("div",{onMouseEnter:g,onMouseLeave:g},e.createElement(r,{kind:"secondary",active:c},"On mouse enter"))),e.createElement(o,{modifiers:h,showTrigger:["focus"],hideTrigger:["blur"],content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(p,d)=>e.createElement(n,{key:d,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(r,{onFocus:u,onBlur:u,kind:"secondary",active:k},"On focus")),e.createElement(o,{modifiers:h,shouldShowOnMount:!0,showTrigger:[],hideTrigger:[],position:"right",content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(p,d)=>e.createElement(n,{key:d,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(r,{kind:"secondary",active:!0},"On mount")))},name:"Show triggers",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},E={render:()=>{const{isChecked:i,onChange:l}=s({defaultChecked:!0}),{isChecked:c,onChange:g}=s({defaultChecked:!0}),{isChecked:k,onChange:u}=s({defaultChecked:!0}),{isChecked:h,onChange:p}=s({defaultChecked:!0}),{isChecked:d,onChange:y}=s({defaultChecked:!0}),{isChecked:m,onChange:W}=s({defaultChecked:!0}),C=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.createElement(n,{"data-testid":f,id:f,style:{paddingInline:"var(--sb-spacing-small)"},wrap:!0,direction:"column",justify:"start",align:"start"},e.createElement(o,{modifiers:C,shouldShowOnMount:!0,containerSelector:`#${f}`,onClickOutside:g,position:"right",showTrigger:["click"],hideTrigger:["clickoutside"],content:e.createElement(a,{"data-testid":B},e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),e.createElement(n,{gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0}))))},e.createElement(r,{"data-testid":F,kind:"secondary",active:c,onClick:g,style:{marginBlock:"54px"}},"On click outside")),e.createElement(o,{modifiers:C,shouldShowOnMount:!0,position:"right",showTrigger:["click"],hideTrigger:["click"],content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),e.createElement(n,{gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0}))))},e.createElement(r,{kind:"secondary",active:i,onClick:l,style:{marginBlock:"54px"}},"On click")),e.createElement(o,{modifiers:C,shouldShowOnMount:!0,position:"right",showTrigger:["focus","click"],hideTrigger:["blur"],content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),e.createElement(n,{gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0}))))},e.createElement(r,{kind:"secondary",active:h,onClick:p,style:{marginBlock:"54px"}},"On blur")),e.createElement(o,{modifiers:C,shouldShowOnMount:!0,position:"right",showTrigger:["click"],hideTrigger:["onContentClick"],onContentClick:y,content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),e.createElement(n,{gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0}))))},e.createElement(r,{kind:"secondary",active:d,onClick:y,style:{marginBlock:"54px"}},"On content click")),e.createElement(o,{modifiers:C,shouldShowOnMount:!0,showTrigger:["mouseenter"],hideTrigger:["mouseleave"],position:"right",onDialogDidHide:u,onDialogDidShow:u,content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),e.createElement(n,{gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0}))))},e.createElement(r,{kind:"secondary",active:k,onClick:u,style:{marginBlock:"54px"}},"On mouse leave")),e.createElement(o,{modifiers:C,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["contextmenu"],position:"right",containerSelector:`#${f}`,onDialogDidHide:W,onDialogDidShow:W,content:e.createElement(a,{"data-testid":b},e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),e.createElement(n,{gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0}))))},e.createElement(r,{kind:"secondary",active:m,style:{marginBlock:"54px"}},"On right click")))},name:"Hide triggers",play:pe,parameters:{chromatic:{pauseAnimationAtEnd:!0},docs:{liveEdit:{scope:{HIDE_TRIGGERS_CONTAINER:f,CLICK_OUTSIDE_DIALOG:B,CLICK_OUTSIDE_DIALOG_BUTTON:F,CONTEXT_MENU_DIALOG:b}}}}},D={render:()=>{const{isChecked:i,onChange:l}=s({defaultChecked:!1});return e.createElement(o,{showTrigger:[],open:i,content:e.createElement(a,null,e.createElement(a,null,e.createElement(r,{kind:"secondary",onClick:()=>l(!1)},"This will close as well")))},e.createElement(r,{onClick:()=>l(!i)},"Click me to toggle the Dialog"))},name:"Controlled Dialog"},T={render:()=>{const i=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.createElement("div",{style:{padding:"80px var(--sb-spacing-small)"}},e.createElement(o,{tooltip:!0,modifiers:i,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["click"],position:"right",content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(l,c)=>e.createElement(n,{key:c,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(ae,{icon:O,active:!0,kind:"secondary"})))},name:"Dialog with tooltip",parameters:{docs:{liveEdit:{scope:{Info:O}}}}},S={render:()=>{const{isChecked:i,onChange:l}=s({defaultChecked:!1});return e.createElement(n,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium"},e.createElement("div",{className:"scrollable",style:{height:"300px",width:"400px",overflow:"auto"}},e.createElement("div",{style:{height:"800px"}},e.createElement(o,{open:i,position:"left",showTrigger:[],hideTrigger:[],containerSelector:".scrollable",disableContainerScroll:!0,content:e.createElement(a,null,e.createElement(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"}},e.createElement(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(c,g)=>e.createElement(n,{key:g,gap:"small",style:{width:"100%"}},e.createElement(t,{type:"circle",width:20,height:20}),e.createElement(t,{type:"text",size:"small",fullWidth:!0})))))},e.createElement(r,{kind:"secondary",onClick:l,active:i},"Click")))))},name:"Disable scroll when dialog open"};var M,L,R;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
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
            </DialogContentContainer>}>
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
}`,...(R=(L=x.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var H,N,G;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(N=w.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var U,j,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(j=v.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var P,$,X;E.parameters={...E.parameters,docs:{...(P=E.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(X=($=E.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var q,J,Q;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Ce=["Overview","Positions","ShowTriggers","HideTriggers","ControlledDialog","DialogWithTooltip","DisableScrollWhenDialogOpen"],We=Object.freeze(Object.defineProperty({__proto__:null,ControlledDialog:D,DialogWithTooltip:T,DisableScrollWhenDialogOpen:S,HideTriggers:E,Overview:x,Positions:w,ShowTriggers:v,__namedExportsOrder:Ce,default:ye},Symbol.toStringTag,{value:"Module"}));export{D as C,We as D,E as H,x as O,w as P,v as S,T as a,S as b};
