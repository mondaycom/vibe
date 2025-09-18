import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{i as he,f as se,e as A}from"./interactions-utils-Bu1jROHA.js";import{userEvent as ae,waitFor as O,fireEvent as ge}from"./index-i7od9_os.js";import{u as c}from"./index-DyvIjvLb.js";import{H as E}from"./DialogConstants-DkeX1sw_.js";import{D as l}from"./Tooltip-Cf28_m_C.js";import{t as F}from"./Info-jvFNh0HS.js";import{I as re}from"./IconButton-CkYJCuju.js";import{D as o}from"./DialogContentContainer-CyLYKep7.js";import{c as ue}from"./createStoryMetaSettingsDecorator-M9remOuO.js";import{F as t}from"./Flex-D6jv3OvD.js";import{S as n}from"./Skeleton-BWuSK9Pd.js";import{B as r}from"./Button-BE-fZxPU.js";const C="click-outside-dialog",W="context-menu-dialog",f="hide-triggers-container",_="click-outside-button",pe=de(C,()=>ae.click(ce())),me=de(W,()=>ge.contextMenu(ce())),z=he({tests:[pe,me],beforeAll:async i=>{const s=await se(i,_);try{await B(i,C)}catch{await ae.click(s),await O(async()=>{const a=await B(i,C);A(a).toBeInTheDocument()},{timeout:1e3})}await O(async()=>{const a=await B(i,C);A(a).toBeInTheDocument()},{timeout:1e3})},afterEach:async()=>{const i=document.activeElement;i&&i.blur&&i!==document.body&&i.blur()}});function ce(){return document.querySelector(`[data-testid=${f}]`)}async function B(i,s){return await se(i,s)}async function xe(i){await O(()=>A(i).not.toBeInTheDocument(),{timeout:2e3})}function de(i,s){return async function(a){const h=await B(a,i);await O(()=>A(h).toBeInTheDocument(),{timeout:100}),await new Promise(p=>setTimeout(p,50)),s(a,h),await xe(h)}}try{z.displayName="closeTriggersInteractionSuite",z.__docgenInfo={description:"",displayName:"closeTriggersInteractionSuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const L=ue({component:l}),M={options:E,control:{type:"multi-select"},table:{type:{summary:Object.values(E).join(" | ")}}},ye={title:"Components/Dialog",component:l,argTypes:{...L.argTypes,hideTrigger:M,showTrigger:M},decorators:L.decorators,parameters:{docs:{liveEdit:{scope:{useSwitch:c}}}}},v={render:i=>e.jsx("div",{style:{padding:"80px var(--sb-spacing-small)"},children:e.jsx(l,{id:"overview-dialog","aria-label":"Overview dialog",modifiers:[{name:"preventOverflow",options:{mainAxis:!1}}],shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["click"],position:"right",content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(s,a)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},a))]})}),...i,children:e.jsx(re,{id:"overview-dialog-trigger",ariaLabel:"Open information dialog",icon:F,active:!0,kind:"secondary"})})}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},w={render:()=>{const{isChecked:i,onChange:s}=c({defaultChecked:!1}),{isChecked:a,onChange:h}=c({defaultChecked:!1}),{isChecked:p,onChange:m}=c({defaultChecked:!1}),{isChecked:g,onChange:x}=c({defaultChecked:!1}),d=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.jsxs(t,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:[e.jsx(l,{id:"positions-top-dialog","aria-label":"Top positioned dialog",modifiers:d,open:i,position:"top",showTrigger:[],hideTrigger:[],content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(y,u)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(r,{id:"positions-top-button",ariaLabel:"Toggle top dialog",kind:"secondary",onClick:s,active:i,children:"Top"})}),e.jsx(l,{id:"positions-bottom-dialog","aria-label":"Bottom positioned dialog",modifiers:d,position:"bottom",showTrigger:[],hideTrigger:[],open:a,content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(y,u)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(r,{id:"positions-bottom-button",ariaLabel:"Toggle bottom dialog",kind:"secondary",onClick:h,active:a,children:"Bottom"})}),e.jsx(l,{id:"positions-right-dialog","aria-label":"Right positioned dialog",modifiers:d,showTrigger:[],hideTrigger:[],position:"right",open:p,content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(y,u)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(r,{id:"positions-right-button",ariaLabel:"Toggle right dialog",kind:"secondary",onClick:m,active:p,children:"Right"})}),e.jsx(l,{id:"positions-left-dialog","aria-label":"Left positioned dialog",modifiers:d,position:"left",showTrigger:[],hideTrigger:[],open:g,content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(y,u)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},u))]})}),children:e.jsx(r,{id:"positions-left-button",ariaLabel:"Toggle left dialog",kind:"secondary",onClick:x,active:g,children:"Left"})})]})},name:"Positions"},j={render:()=>{const{isChecked:i,onChange:s}=c({defaultChecked:!1}),{isChecked:a,onChange:h}=c({defaultChecked:!1}),{isChecked:p,onChange:m}=c({defaultChecked:!1}),g=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.jsxs(t,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:[e.jsx(l,{modifiers:g,showTrigger:["click"],hideTrigger:["click"],content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(x,d)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},d))]})}),children:e.jsx(r,{kind:"secondary",active:i,onClick:s,children:"On click"})}),e.jsx(l,{modifiers:g,showTrigger:["mouseenter"],hideTrigger:["mouseleave"],content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(x,d)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},d))]})}),children:e.jsx("div",{onMouseEnter:h,onMouseLeave:h,children:e.jsx(r,{kind:"secondary",active:a,children:"On mouse enter"})})}),e.jsx(l,{modifiers:g,showTrigger:["focus"],hideTrigger:["blur"],content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(x,d)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},d))]})}),children:e.jsx(r,{onFocus:m,onBlur:m,kind:"secondary",active:p,children:"On focus"})}),e.jsx(l,{modifiers:g,shouldShowOnMount:!0,showTrigger:[],hideTrigger:[],position:"right",content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(x,d)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},d))]})}),children:e.jsx(r,{kind:"secondary",active:!0,children:"On mount"})})]})},name:"Show triggers",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},T={render:()=>{const{isChecked:i,onChange:s}=c({defaultChecked:!0}),{isChecked:a,onChange:h}=c({defaultChecked:!0}),{isChecked:p,onChange:m}=c({defaultChecked:!0}),{isChecked:g,onChange:x}=c({defaultChecked:!0}),{isChecked:d,onChange:y}=c({defaultChecked:!0}),{isChecked:u,onChange:I}=c({defaultChecked:!0}),k=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.jsxs(t,{"data-testid":f,id:f,style:{paddingInline:"var(--sb-spacing-small)"},wrap:!0,direction:"column",justify:"start",align:"start",children:[e.jsx(l,{modifiers:k,shouldShowOnMount:!0,containerSelector:`#${f}`,onClickOutside:h,position:"right",showTrigger:["click"],hideTrigger:["clickoutside"],content:e.jsx(o,{"data-testid":C,children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{"data-testid":_,kind:"secondary",active:a,onClick:h,style:{marginBlock:"54px"},children:"On click outside"})}),e.jsx(l,{modifiers:k,shouldShowOnMount:!0,position:"right",showTrigger:["click"],hideTrigger:["click"],content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:i,onClick:s,style:{marginBlock:"54px"},children:"On click"})}),e.jsx(l,{modifiers:k,shouldShowOnMount:!0,position:"right",showTrigger:["focus","click"],hideTrigger:["blur"],content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:g,onClick:x,style:{marginBlock:"54px"},children:"On blur"})}),e.jsx(l,{modifiers:k,shouldShowOnMount:!0,position:"right",showTrigger:["click"],hideTrigger:["onContentClick"],onContentClick:y,content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:d,onClick:y,style:{marginBlock:"54px"},children:"On content click"})}),e.jsx(l,{modifiers:k,shouldShowOnMount:!0,showTrigger:["mouseenter"],hideTrigger:["mouseleave"],position:"right",onDialogDidHide:m,onDialogDidShow:m,content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:p,onClick:m,style:{marginBlock:"54px"},children:"On mouse leave"})}),e.jsx(l,{modifiers:k,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["contextmenu"],position:"right",containerSelector:`#${f}`,onDialogDidHide:I,onDialogDidShow:I,content:e.jsx(o,{"data-testid":W,children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]})]})}),children:e.jsx(r,{kind:"secondary",active:u,style:{marginBlock:"54px"},children:"On right click"})})]})},name:"Hide triggers",play:z,parameters:{chromatic:{pauseAnimationAtEnd:!0},docs:{liveEdit:{scope:{HIDE_TRIGGERS_CONTAINER:f,CLICK_OUTSIDE_DIALOG:C,CLICK_OUTSIDE_DIALOG_BUTTON:_,CONTEXT_MENU_DIALOG:W}}}}},D={render:()=>{const{isChecked:i,onChange:s}=c({defaultChecked:!1});return e.jsx(l,{showTrigger:[],open:i,content:e.jsx(o,{children:e.jsx(o,{children:e.jsx(r,{kind:"secondary",onClick:()=>s(!1),children:"This will close as well"})})}),children:e.jsx(r,{onClick:()=>s(!i),children:"Click me to toggle the Dialog"})})},name:"Controlled Dialog"},S={render:()=>{const i=[{name:"preventOverflow",options:{mainAxis:!1}}];return e.jsx("div",{style:{padding:"80px var(--sb-spacing-small)"},children:e.jsx(l,{tooltip:!0,modifiers:i,shouldShowOnMount:!0,showTrigger:["click"],hideTrigger:["click"],position:"right",content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(s,a)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},a))]})}),children:e.jsx(re,{icon:F,active:!0,kind:"secondary"})})})},name:"Dialog with tooltip",parameters:{docs:{liveEdit:{scope:{Info:F}}}}},b={render:()=>{const{isChecked:i,onChange:s}=c({defaultChecked:!1});return e.jsx(t,{style:{padding:"80px var(--sb-spacing-small)"},gap:"medium",children:e.jsx("div",{className:"scrollable",style:{height:"300px",width:"400px",overflow:"auto"},children:e.jsx("div",{style:{height:"800px"},children:e.jsx(l,{open:i,position:"left",showTrigger:[],hideTrigger:[],containerSelector:".scrollable",disableContainerScroll:!0,content:e.jsx(o,{children:e.jsxs(t,{direction:"column",align:"start",gap:"small",style:{width:"150px",padding:"var(--sb-spacing-small)"},children:[e.jsx(n,{type:"text",size:"h1",fullWidth:!0}),Array.from({length:3},(a,h)=>e.jsxs(t,{gap:"small",style:{width:"100%"},children:[e.jsx(n,{type:"circle",width:20,height:20}),e.jsx(n,{type:"text",size:"small",fullWidth:!0})]},h))]})}),children:e.jsx(r,{kind:"secondary",onClick:s,active:i,children:"Click"})})})})})},name:"Disable scroll when dialog open"};var R,H,N;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: DialogProps) => {
    return <div style={{
      padding: "80px var(--sb-spacing-small)"
    }}>
        <Dialog id="overview-dialog" aria-label="Overview dialog" modifiers={[{
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
}`,...(N=(H=v.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var G,U,P;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
          <Dialog id="positions-top-dialog" aria-label="Top positioned dialog" modifiers={modifiers} open={checkedTop} position="top" showTrigger={[]} hideTrigger={[]} content={<DialogContentContainer>
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
          <Dialog id="positions-bottom-dialog" aria-label="Bottom positioned dialog" modifiers={modifiers} position="bottom" showTrigger={[]} hideTrigger={[]} open={checkedBottom} content={<DialogContentContainer>
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
          <Dialog id="positions-right-dialog" aria-label="Right positioned dialog" modifiers={modifiers} showTrigger={[]} hideTrigger={[]} position="right" open={checkedRight} content={<DialogContentContainer>
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
          <Dialog id="positions-left-dialog" aria-label="Left positioned dialog" modifiers={modifiers} position="left" showTrigger={[]} hideTrigger={[]} open={checkedLeft} content={<DialogContentContainer>
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
}`,...(P=(U=w.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var K,$,q;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=($=j.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var X,V,J;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(V=T.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var Q,Y,Z;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ie,le,oe;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(le=b.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const ke=["Overview","Positions","ShowTriggers","HideTriggers","ControlledDialog","DialogWithTooltip","DisableScrollWhenDialogOpen"],We=Object.freeze(Object.defineProperty({__proto__:null,ControlledDialog:D,DialogWithTooltip:S,DisableScrollWhenDialogOpen:b,HideTriggers:T,Overview:v,Positions:w,ShowTriggers:j,__namedExportsOrder:ke,default:ye},Symbol.toStringTag,{value:"Module"}));export{D as C,We as D,T as H,v as O,w as P,j as S,S as a,b};
