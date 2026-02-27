import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{s as z,D as l}from"./Dialog-BIJHUFm8.js";import{c as he}from"./createStoryMetaSettingsDecorator-DPBO6pDt.js";import{i as ge,f as oe,e as B}from"./interactions-utils-Dm-vasmR.js";import{userEvent as se,waitFor as A,fireEvent as ue}from"./index-i7od9_os.js";import{u as d}from"./index-Bgok7zfD.js";import{t as O}from"./Info-jvFNh0HS.js";import{I as ae}from"./IconButton-DiEI_vOy.js";import{D as s}from"./DialogContentContainer-BeKFb57x.js";import{F as n}from"./Flex-DIp2zxrn.js";import{S as t}from"./Skeleton-B_NVxWmK.js";import{B as r}from"./Button-Dnxv6-sL.js";const y="click-outside-dialog",F="context-menu-dialog",k="hide-triggers-container",W="click-outside-button",pe=ce(y,()=>se.click(re())),me=ce(F,()=>ue.contextMenu(re())),xe=ge({tests:[pe,me],beforeAll:async i=>{const o=await oe(i,W);try{await b(i,y)}catch{await se.click(o),await A(async()=>{const c=await b(i,y);B(c).toBeInTheDocument()},{timeout:1e3})}await A(async()=>{const c=await b(i,y);B(c).toBeInTheDocument()},{timeout:1e3})},afterEach:async()=>{const i=document.activeElement;i&&i.blur&&i!==document.body&&i.blur()}});function re(){return document.querySelector(`[data-testid=${k}]`)}async function b(i,o){return await oe(i,o)}async function ke(i){await A(()=>B(i).not.toBeInTheDocument(),{timeout:2e3})}function ce(i,o){return async function(c){const h=await b(c,i);await A(()=>B(h).toBeInTheDocument(),{timeout:100}),await new Promise(p=>setTimeout(p,50)),o(c,h),await ke(h)}}const a=[z({mainAxis:!1})],_=he({component:l}),M=["click","clickoutside","esckey","tab","mouseenter","mouseleave","enter","mousedown","focus","blur","onContentClick","contextmenu"],E={options:M,control:{type:"multi-select"},table:{type:{summary:M.join(" | ")}}},ye={title:"Components/Dialog",component:l,argTypes:{..._.argTypes,hideTrigger:E,showTrigger:E},decorators:_.decorators,parameters:{docs:{liveEdit:{scope:{useSwitch:d,shift:z,preventMainAxisShift:a}}}}},w={render:i=>e.jsx("div",{style:{padding:"80px var(--sb-spacing-small)"},children:e.jsx(l,{id:"overview-dialog","aria-label":"Overview dialog",middleware:a,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["click"],position:"right",content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(o,c)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},c))]})}),...i,children:e.jsx(ae,{id:"overview-dialog-trigger",ariaLabel:"Open information dialog",icon:O,active:!0,kind:"secondary"})})}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},v={render:()=>{const{isChecked:i,onChange:o}=d({defaultChecked:!1}),{isChecked:c,onChange:h}=d({defaultChecked:!1}),{isChecked:p,onChange:m}=d({defaultChecked:!1}),{isChecked:x,onChange:g}=d({defaultChecked:!1});return e.jsxs(n,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:[e.jsx(l,{id:"positions-top-dialog","aria-label":"Top positioned dialog",middleware:a,open:i,position:"top",showTrigger:[],hideTrigger:[],content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(C,u)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(r,{id:"positions-top-button",ariaLabel:"Toggle top dialog",kind:"secondary",onClick:o,active:i,children:"Top"})}),e.jsx(l,{id:"positions-bottom-dialog","aria-label":"Bottom positioned dialog",middleware:a,position:"bottom",showTrigger:[],hideTrigger:[],open:c,content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(C,u)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(r,{id:"positions-bottom-button",ariaLabel:"Toggle bottom dialog",kind:"secondary",onClick:h,active:c,children:"Bottom"})}),e.jsx(l,{id:"positions-right-dialog","aria-label":"Right positioned dialog",middleware:a,showTrigger:[],hideTrigger:[],position:"right",open:p,content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(C,u)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(r,{id:"positions-right-button",ariaLabel:"Toggle right dialog",kind:"secondary",onClick:m,active:p,children:"Right"})}),e.jsx(l,{id:"positions-left-dialog","aria-label":"Left positioned dialog",middleware:a,position:"left",showTrigger:[],hideTrigger:[],open:x,content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(C,u)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(r,{id:"positions-left-button",ariaLabel:"Toggle left dialog",kind:"secondary",onClick:g,active:x,children:"Left"})})]})},name:"Positions"},f={render:()=>{const{isChecked:i,onChange:o}=d({defaultChecked:!1}),{isChecked:c,onChange:h}=d({defaultChecked:!1}),{isChecked:p,onChange:m}=d({defaultChecked:!1});return e.jsxs(n,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:[e.jsx(l,{middleware:a,showTrigger:["click"],hideTrigger:["click"],content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(x,g)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},g))]})}),children:e.jsx(r,{kind:"secondary",active:i,onClick:o,children:"On click"})}),e.jsx(l,{middleware:a,showTrigger:["mouseenter"],hideTrigger:["mouseleave"],content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(x,g)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},g))]})}),children:e.jsx("div",{onMouseEnter:h,onMouseLeave:h,children:e.jsx(r,{kind:"secondary",active:c,children:"On mouse enter"})})}),e.jsx(l,{middleware:a,showTrigger:["focus"],hideTrigger:["blur"],content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(x,g)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},g))]})}),children:e.jsx(r,{onFocus:m,onBlur:m,kind:"secondary",active:p,children:"On focus"})}),e.jsx(l,{middleware:a,shouldShowOnMount:!0,showTrigger:[],hideTrigger:[],position:"right",content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(x,g)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},g))]})}),children:e.jsx(r,{kind:"secondary",active:!0,children:"On mount"})})]})},name:"Show triggers",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},j={render:()=>{const{isChecked:i,onChange:o}=d({defaultChecked:!0}),{isChecked:c,onChange:h}=d({defaultChecked:!0}),{isChecked:p,onChange:m}=d({defaultChecked:!0}),{isChecked:x,onChange:g}=d({defaultChecked:!0}),{isChecked:C,onChange:u}=d({defaultChecked:!0}),{isChecked:de,onChange:I}=d({defaultChecked:!0});return e.jsxs(n,{"data-testid":k,id:k,style:{paddingInline:"var(--sb-spacing-small)"},wrap:!0,direction:"column",justify:"start",align:"start",children:[e.jsx(l,{middleware:a,shouldShowOnMount:!0,containerSelector:`#${k}`,onClickOutside:h,position:"right",showTrigger:["click"],hideTrigger:["clickoutside"],content:e.jsx(s,{"data-testid":y,children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{"data-testid":W,kind:"secondary",active:c,onClick:h,style:{marginBlock:"54px"},children:"On click outside"})}),e.jsx(l,{middleware:a,shouldShowOnMount:!0,position:"right",showTrigger:["click"],hideTrigger:["click"],content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:i,onClick:o,style:{marginBlock:"54px"},children:"On click"})}),e.jsx(l,{middleware:a,shouldShowOnMount:!0,position:"right",showTrigger:["focus","click"],hideTrigger:["blur"],content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:x,onClick:g,style:{marginBlock:"54px"},children:"On blur"})}),e.jsx(l,{middleware:a,shouldShowOnMount:!0,position:"right",showTrigger:["click"],hideTrigger:["onContentClick"],onContentClick:u,content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:C,onClick:u,style:{marginBlock:"54px"},children:"On content click"})}),e.jsx(l,{middleware:a,shouldShowOnMount:!0,showTrigger:["mouseenter"],hideTrigger:["mouseleave"],position:"right",onDialogDidHide:m,onDialogDidShow:m,content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:p,onClick:m,style:{marginBlock:"54px"},children:"On mouse leave"})}),e.jsx(l,{middleware:a,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["contextmenu"],position:"right",containerSelector:`#${k}`,onDialogDidHide:I,onDialogDidShow:I,content:e.jsx(s,{"data-testid":F,children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:de,style:{marginBlock:"54px"},children:"On right click"})})]})},name:"Hide triggers",play:xe,parameters:{chromatic:{pauseAnimationAtEnd:!0},docs:{liveEdit:{scope:{HIDE_TRIGGERS_CONTAINER:k,CLICK_OUTSIDE_DIALOG:y,CLICK_OUTSIDE_DIALOG_BUTTON:W,CONTEXT_MENU_DIALOG:F}}}}},S={render:()=>{const{isChecked:i,onChange:o}=d({defaultChecked:!1});return e.jsx(l,{showTrigger:[],open:i,content:e.jsx(s,{children:e.jsx(s,{children:e.jsx(r,{kind:"secondary",onClick:()=>o(!1),children:"This will close as well"})})}),children:e.jsx(r,{onClick:()=>o(!i),children:"Click me to toggle the Dialog"})})},name:"Controlled Dialog"},T={render:()=>e.jsx("div",{style:{padding:"80px var(--sb-spacing-small)"},children:e.jsx(l,{tooltip:!0,middleware:a,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["click"],position:"right",content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(i,o)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},o))]})}),children:e.jsx(ae,{icon:O,active:!0,kind:"secondary"})})}),name:"Dialog with tooltip",parameters:{docs:{liveEdit:{scope:{Info:O,shift:z,preventMainAxisShift:a}}}}},D={render:()=>{const{isChecked:i,onChange:o}=d({defaultChecked:!1});return e.jsx(n,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:e.jsx("div",{className:"scrollable",style:{height:"300px",width:"400px",overflow:"auto"},children:e.jsx("div",{style:{height:"800px"},children:e.jsx(l,{open:i,position:"left",showTrigger:[],hideTrigger:[],containerSelector:".scrollable",disableContainerScroll:!0,content:e.jsx(s,{children:e.jsxs(n,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(t,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(c,h)=>e.jsxs(n,{gap:"small",style:{width:"100%"},children:[e.jsx(t,{type:"circle",width:20,height:20}),e.jsx(t,{type:"text",size:"small",fullWidth:!0})]},h))]})}),children:e.jsx(r,{kind:"secondary",onClick:o,active:i,children:"Click"})})})})})},name:"Disable scroll when dialog open"};var L,R,H;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: DialogProps) => {
    return <div style={{
      padding: "80px var(--sb-spacing-small)"
    }}>
        <Dialog id="overview-dialog" aria-label="Overview dialog" middleware={preventMainAxisShift} shouldShowOnMount showTrigger={["click"]} hideTrigger={["click"]} position={"right"} content={<DialogContentContainer>
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
          <IconButton id="overview-dialog-trigger" ariaLabel="Open information dialog" icon={Info} active kind="secondary" />
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
}`,...(H=(R=w.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var N,G,U;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    return <Flex style={{
      padding: "80px var(--sb-spacing-small)"
    }} gap="medium">
          <Dialog id="positions-top-dialog" aria-label="Top positioned dialog" middleware={preventMainAxisShift} open={checkedTop} position="top" showTrigger={[]} hideTrigger={[]} content={<DialogContentContainer>
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
            <Button id="positions-top-button" ariaLabel="Toggle top dialog" kind="secondary" onClick={onChangeTop} active={checkedTop}>
              Top
            </Button>
          </Dialog>
          <Dialog id="positions-bottom-dialog" aria-label="Bottom positioned dialog" middleware={preventMainAxisShift} position="bottom" showTrigger={[]} hideTrigger={[]} open={checkedBottom} content={<DialogContentContainer>
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
            <Button id="positions-bottom-button" ariaLabel="Toggle bottom dialog" kind="secondary" onClick={onChangeBottom} active={checkedBottom}>
              Bottom
            </Button>
          </Dialog>
          <Dialog id="positions-right-dialog" aria-label="Right positioned dialog" middleware={preventMainAxisShift} showTrigger={[]} hideTrigger={[]} position="right" open={checkedRight} content={<DialogContentContainer>
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
            <Button id="positions-right-button" ariaLabel="Toggle right dialog" kind="secondary" onClick={onChangeRight} active={checkedRight}>
              Right
            </Button>
          </Dialog>
          <Dialog id="positions-left-dialog" aria-label="Left positioned dialog" middleware={preventMainAxisShift} position="left" showTrigger={[]} hideTrigger={[]} open={checkedLeft} content={<DialogContentContainer>
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
            <Button id="positions-left-button" ariaLabel="Toggle left dialog" kind="secondary" onClick={onChangeLeft} active={checkedLeft}>
              Left
            </Button>
          </Dialog>
        </Flex>;
  },
  name: "Positions"
}`,...(U=(G=v.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var P,K,$;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    return <Flex style={{
      padding: "80px var(--sb-spacing-small)"
    }} gap="medium">
        <Dialog middleware={preventMainAxisShift} showTrigger={["click"]} hideTrigger={["click"]} content={<DialogContentContainer>
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
        <Dialog middleware={preventMainAxisShift} showTrigger={["mouseenter"]} hideTrigger={["mouseleave"]} content={<DialogContentContainer>
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
        <Dialog middleware={preventMainAxisShift} showTrigger={["focus"]} hideTrigger={["blur"]} content={<DialogContentContainer>
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
        <Dialog middleware={preventMainAxisShift} shouldShowOnMount showTrigger={[]} hideTrigger={[]} position="right" content={<DialogContentContainer>
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
}`,...($=(K=f.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var X,q,J;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    return <Flex data-testid={HIDE_TRIGGERS_CONTAINER} id={HIDE_TRIGGERS_CONTAINER} style={{
      paddingInline: "var(--sb-spacing-small)"
    }} wrap direction="column" justify="start" align="start">
        <Dialog middleware={preventMainAxisShift} shouldShowOnMount containerSelector={\`#\${HIDE_TRIGGERS_CONTAINER}\`} onClickOutside={switchClickOutsideActive} position="right" showTrigger={["click"]} hideTrigger={["clickoutside"]} content={<DialogContentContainer data-testid={CLICK_OUTSIDE_DIALOG}>
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
        <Dialog middleware={preventMainAxisShift} shouldShowOnMount position="right" showTrigger={["click"]} hideTrigger={["click"]} content={<DialogContentContainer>
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
        <Dialog middleware={preventMainAxisShift} shouldShowOnMount position="right" showTrigger={["focus", "click"]} hideTrigger={["blur"]} content={<DialogContentContainer>
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
        <Dialog middleware={preventMainAxisShift} shouldShowOnMount position="right" showTrigger={["click"]} hideTrigger={["onContentClick"]} onContentClick={switchContentClickActive} content={<DialogContentContainer>
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
        <Dialog middleware={preventMainAxisShift} shouldShowOnMount showTrigger={["mouseenter"]} hideTrigger={["mouseleave"]} position="right" onDialogDidHide={switchMouseLeaveActive} onDialogDidShow={switchMouseLeaveActive} content={<DialogContentContainer>
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
        <Dialog middleware={preventMainAxisShift} shouldShowOnMount showTrigger={["click"]} hideTrigger={["contextmenu"]} position="right" containerSelector={\`#\${HIDE_TRIGGERS_CONTAINER}\`} onDialogDidHide={switchContextMenuActive} onDialogDidShow={switchContextMenuActive} content={<DialogContentContainer data-testid={CONTEXT_MENU_DIALOG}>
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
}`,...(J=(q=j.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,V,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(V=S.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,ee,te;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: "80px var(--sb-spacing-small)"
    }}>
        <Dialog tooltip middleware={preventMainAxisShift} shouldShowOnMount showTrigger={["click"]} hideTrigger={["click"]} position="right" content={<DialogContentContainer>
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
          Info,
          shift,
          preventMainAxisShift
        }
      }
    }
  }
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ie,le;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Ce=["Overview","Positions","ShowTriggers","HideTriggers","ControlledDialog","DialogWithTooltip","DisableScrollWhenDialogOpen"],We=Object.freeze(Object.defineProperty({__proto__:null,ControlledDialog:S,DialogWithTooltip:T,DisableScrollWhenDialogOpen:D,HideTriggers:j,Overview:w,Positions:v,ShowTriggers:f,__namedExportsOrder:Ce,default:ye},Symbol.toStringTag,{value:"Module"}));export{S as C,We as D,j as H,w as O,v as P,f as S,T as a,D as b};
