import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as i}from"./index-Hemj67b4.js";import{M as O}from"./ModalExampleContent-DadVorGT.js";import{D as t}from"./Dropdown-BTN3KGdv.js";import{T as s}from"./Text-C76qTSxj.js";import{a as f}from"./Settings-DOfpeGYp.js";import{C as se}from"./index-BA_MN9l1.js";import{M as pe,L as de}from"./LegacyModal-Bbi5rB8c.js";import{c as ce}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as l}from"./Flex-Cp1baZ2x.js";import{D as ue}from"./DialogContentContainer-CZkltT8K.js";import{B as me}from"./Box-Cj5xRWpL.js";import{B as he}from"./Button-dXlc__kx.js";const M=""+new URL("person-02JXxArq.png",import.meta.url).href,S=""+new URL("person3-BJmOcBh7.png",import.meta.url).href,E=""+new URL("person2-C3M6GG-9.png",import.meta.url).href,F=ce({component:t,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),xe={title:"Components/Dropdown [Alpha]",component:t,argTypes:F.argTypes,decorators:F.decorators},ve=n=>{const o=i.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsx("div",{style:{height:"150px",width:"300px"},children:e.jsx(t,{options:o,label:"Label",helperText:"Helper text",...n})})},d={render:ve.bind({}),args:{placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>{const n=i.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:n,placeholder:"Placeholder text here",size:"large"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:n,placeholder:"Placeholder text here",size:"medium"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:n,placeholder:"Placeholder text here",size:"small"})})]})}},u={render:()=>e.jsxs(l,{direction:"row",gap:"medium",children:[e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:[],placeholder:"Default"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:[],placeholder:"Disabled",disabled:!0})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:[],placeholder:"Error",error:!0})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:[],placeholder:"Readonly",readOnly:!0})})]})]})},m={render:()=>{const n=i.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}],[]);return e.jsxs(l,{gap:"large",align:"start",justify:"start",children:[e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Single line with hidden options"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(t,{placeholder:"Single line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Multiple lines"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(t,{placeholder:"Multiple line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,multiline:!0})})]})]})}},h={render:()=>{const n=i.useMemo(()=>[{value:"email",label:"Email",startElement:{type:"icon",value:f}},{value:"attach",label:"Attach",startElement:{type:"icon",value:se}}],[]),o=i.useMemo(()=>[{value:"Julia",label:"Julia Martinez",startElement:{type:"avatar",value:M}},{value:"Sophia",label:"Sophia Johnson",startElement:{type:"avatar",value:E}},{value:"Marco",label:"Marco DiAngelo",startElement:{type:"avatar",value:S}}],[]);return e.jsxs(l,{gap:"large",align:"start",justify:"start",children:[e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Single value"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:n[0],options:n})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:o[0],options:o})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Multiple values"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:[n[0]],options:n,multi:!0})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:[o[0]],options:o,multi:!0})})]})]})},parameters:{docs:{liveEdit:{scope:{person1:M,person2:E,person3:S}}}}},x={render:()=>{const n=i.useMemo(()=>Array.from({length:10},(o,r)=>({value:`Option ${r+1}`,label:`Option ${r+1}`})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Searchable for an item",options:n,searchable:!0,maxMenuHeight:170})})}},v={render:()=>{const n=i.useMemo(()=>Array.from({length:2},(r,a)=>({label:`Group ${a+1}`,options:Array.from({length:3},(j,p)=>({value:`${a*2+p+1}`,label:`Option ${a*2+p+1}`}))})),[]),o=i.useMemo(()=>Array.from({length:2},(r,a)=>({options:Array.from({length:2},(j,p)=>({value:`${a*2+p+1}`,label:`Option ${a*2+p+1}`}))})),[]);return e.jsxs(l,{gap:"medium",align:"start",justify:"start",children:[e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by divider"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by divider",options:o,withGroupDivider:!0,maxMenuHeight:170})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by category title"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by category title",options:n,maxMenuHeight:170})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by category title sticky"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by category title sticky",options:n,stickyGroupTitle:!0,maxMenuHeight:170})})]})]})}},g={render:()=>{const n=i.useMemo(()=>[{value:"icon",label:"Label with icon",startElement:{type:"icon",value:f}},{value:"avatar",label:"Label with avatar",startElement:{type:"avatar",value:M}},{value:"indent",label:"Label with indent",startElement:{type:"indent"}}],[]),o=i.useMemo(()=>[{value:"endIcon",label:"Label with end icon",endElement:{type:"icon",value:f}},{value:"hintText",label:"Label with hint text",endElement:{type:"suffix",value:"Hint text"}}],[]);return e.jsxs(l,{gap:"large",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n,label:"Start Elements",required:!0})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:o,label:"End Elements",required:!0})})]})}},w={render:()=>{const n=i.useMemo(()=>Array.from({length:10},(o,r)=>({value:`Option ${r+1}`,label:`Option ${r+1}`})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n,defaultValue:[n[0],n[2],n[3]],label:"Label",required:!0,multi:!0,showSelectedOptions:!0})})}},y={render:()=>{const n=i.useMemo(()=>Array.from({length:2},(o,r)=>({value:`Option ${r+1}`,label:`Option ${r+1}`,tooltipProps:{content:`Description for option ${r+1}`}})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n})})}},b={render:()=>{const n=i.useMemo(()=>Array.from({length:15},(p,D)=>({value:`${D+1}`,label:`Option ${D+1}`})),[]),[o,r]=i.useState(!1),a=i.useCallback(()=>{r(!1)},[r]),j={width:"350px",height:"200px",overflow:"auto"};return e.jsxs(l,{gap:"large",children:[e.jsxs(ue,{style:j,children:[e.jsx(O,{}),e.jsx(me,{marginTop:"medium",marginBottom:"xxl",children:e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Dropdown inside DialogContentContainer",options:n})})})]}),e.jsxs("div",{children:[e.jsx(he,{onClick:()=>r(!0),children:"Open Modal"}),e.jsx(pe,{title:"Modal with dropdown",show:o,onClose:a,children:e.jsx(de,{children:e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Dropdown",options:n})})})})]})]})},parameters:{docs:{liveEdit:{scope:{ModalExampleContent:O}}}},name:"Dropdown inside popover"};var T,A,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: dropdownTemplate.bind({}),
  args: {
    placeholder: "Placeholder text here"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var $,B,I;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: 1,
      label: "Option 1"
    }, {
      value: 2,
      label: "Option 2"
    }, {
      value: 3,
      label: "Option 3"
    }], []);
    return <>
        <div style={{
        width: "300px"
      }}>
          <Dropdown options={options} placeholder="Placeholder text here" size="large" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown options={options} placeholder="Placeholder text here" size="medium" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown options={options} placeholder="Placeholder text here" size="small" />
        </div>
      </>;
  }
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var G,L,P;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Flex direction="row" gap="medium">
      <Flex direction="column" gap="medium">
        <div style={{
        width: "300px"
      }}>
          <Dropdown options={[]} placeholder="Default" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown options={[]} placeholder="Disabled" disabled />
        </div>
      </Flex>
      <Flex direction="column" gap="medium">
        <div style={{
        width: "300px"
      }}>
          <Dropdown options={[]} placeholder="Error" error />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown options={[]} placeholder="Readonly" readOnly />
        </div>
      </Flex>
    </Flex>
}`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var _,V,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "1",
      label: "Option 1"
    }, {
      value: "2",
      label: "Option 2"
    }, {
      value: "3",
      label: "Option 3"
    }, {
      value: "4",
      label: "Option 4"
    }], []);
    return <Flex gap="large" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Single line with hidden options</Text>
          <div style={{
          width: "350px",
          marginBottom: "50px"
        }}>
            <Dropdown placeholder="Single line multi state" defaultValue={[options[0], options[1], options[2]]} options={options} multi />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple lines</Text>
          <div style={{
          width: "350px",
          marginBottom: "50px"
        }}>
            <Dropdown placeholder="Multiple line multi state" defaultValue={[options[0], options[1], options[2]]} options={options} multi multiline />
          </div>
        </Flex>
      </Flex>;
  }
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var k,z,H;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const optionsIcons: any = useMemo(() => [{
      value: "email",
      label: "Email",
      startElement: {
        type: "icon",
        value: Email
      }
    }, {
      value: "attach",
      label: "Attach",
      startElement: {
        type: "icon",
        value: Attach
      }
    }], []);
    const optionsAvatar: any = useMemo(() => [{
      value: "Julia",
      label: "Julia Martinez",
      startElement: {
        type: "avatar",
        value: person1
      }
    }, {
      value: "Sophia",
      label: "Sophia Johnson",
      startElement: {
        type: "avatar",
        value: person2
      }
    }, {
      value: "Marco",
      label: "Marco DiAngelo",
      startElement: {
        type: "avatar",
        value: person3
      }
    }], []);
    return <Flex gap="large" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Single value</Text>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown defaultValue={optionsIcons[0]} options={optionsIcons} />
          </div>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown defaultValue={optionsAvatar[0]} options={optionsAvatar} />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple values</Text>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown defaultValue={[optionsIcons[0]]} options={optionsIcons} multi />
          </div>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown defaultValue={[optionsAvatar[0]]} options={optionsAvatar} multi />
          </div>
        </Flex>
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1,
          person2,
          person3
        }
      }
    }
  }
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var R,J,q;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => Array.from({
      length: 10
    }, (_, i) => ({
      value: \`Option \${i + 1}\`,
      label: \`Option \${i + 1}\`
    })), []);
    return <div style={{
      width: "300px"
    }}>
        <Dropdown placeholder={"Searchable for an item"} options={options} searchable maxMenuHeight={170} />
      </div>;
  }
}`,...(q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var U,K,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => Array.from({
      length: 2
    }, (_, groupIndex) => ({
      label: \`Group \${groupIndex + 1}\`,
      options: Array.from({
        length: 3
      }, (_, optionIndex) => ({
        value: \`\${groupIndex * 2 + optionIndex + 1}\`,
        label: \`Option \${groupIndex * 2 + optionIndex + 1}\`
      }))
    })), []);
    const optionsWithoutGroupLabel = useMemo(() => Array.from({
      length: 2
    }, (_, groupIndex) => ({
      options: Array.from({
        length: 2
      }, (_, optionIndex) => ({
        value: \`\${groupIndex * 2 + optionIndex + 1}\`,
        label: \`Option \${groupIndex * 2 + optionIndex + 1}\`
      }))
    })), []);
    return <Flex gap="medium" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Group by divider</Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown placeholder="Group by divider" options={optionsWithoutGroupLabel} withGroupDivider maxMenuHeight={170} />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category title</Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown placeholder="Group by category title" options={options} maxMenuHeight={170} />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category title sticky</Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown placeholder="Group by category title sticky" options={options} stickyGroupTitle maxMenuHeight={170} />
          </div>
        </Flex>
      </Flex>;
  }
}`,...(X=(K=v.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var N,Q,Y;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const startOptions: BaseListItemData<Record<string, unknown>>[] = useMemo(() => [{
      value: "icon",
      label: "Label with icon",
      startElement: {
        type: "icon",
        value: Email
      }
    }, {
      value: "avatar",
      label: "Label with avatar",
      startElement: {
        type: "avatar",
        value: person1
      }
    }, {
      value: "indent",
      label: "Label with indent",
      startElement: {
        type: "indent"
      }
    }], []);
    const endOptions: BaseListItemData<Record<string, unknown>>[] = useMemo(() => [{
      value: "endIcon",
      label: "Label with end icon",
      endElement: {
        type: "icon",
        value: Email
      }
    }, {
      value: "hintText",
      label: "Label with hint text",
      endElement: {
        type: "suffix",
        value: "Hint text"
      }
    }], []);
    return <Flex gap="large">
        <div style={{
        width: "300px"
      }}>
          <Dropdown placeholder={"Placeholder text here"} options={startOptions} label="Start Elements" required />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown placeholder={"Placeholder text here"} options={endOptions} label="End Elements" required />
        </div>
      </Flex>;
  }
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => Array.from({
      length: 10
    }, (_, i) => ({
      value: \`Option \${i + 1}\`,
      label: \`Option \${i + 1}\`
    })), []);
    return <div style={{
      width: "300px"
    }}>
        <Dropdown placeholder={"Placeholder text here"} options={options} defaultValue={[options[0], options[2], options[3]]} label="Label" required multi showSelectedOptions />
      </div>;
  }
}`,...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,re;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const optionsWithTooltips = useMemo(() => Array.from({
      length: 2
    }, (_, i) => ({
      value: \`Option \${i + 1}\`,
      label: \`Option \${i + 1}\`,
      tooltipProps: {
        content: \`Description for option \${i + 1}\`
      }
    })), []);
    return <div style={{
      width: "300px"
    }}>
        <Dropdown placeholder={"Placeholder text here"} options={optionsWithTooltips} />
      </div>;
  }
}`,...(re=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,ie,ae;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => Array.from({
      length: 15
    }, (_, i) => ({
      value: \`\${i + 1}\`,
      label: \`Option \${i + 1}\`
    })), []);
    const [show, setShow] = useState(false);
    const closeModal = useCallback(() => {
      setShow(false);
    }, [setShow]);
    const dialogStyle = {
      width: "350px",
      height: "200px",
      overflow: "auto"
    };
    return <Flex gap="large">
        <DialogContentContainer style={dialogStyle}>
          <ModalExampleContent />
          <Box marginTop="medium" marginBottom="xxl">
            <div style={{
            width: "300px"
          }}>
              <Dropdown placeholder="Dropdown inside DialogContentContainer" options={options} />
            </div>
          </Box>
        </DialogContentContainer>
        <div>
          <Button onClick={() => setShow(true)}>Open Modal</Button>
          <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
            <ModalContent>
              <div style={{
              width: "300px"
            }}>
                <Dropdown placeholder="Dropdown" options={options} />
              </div>
            </ModalContent>
          </Modal>
        </div>
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          ModalExampleContent
        }
      }
    }
  },
  name: "Dropdown inside popover"
}`,...(ae=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};const ge=["Overview","Sizes","States","MultiSelect","DropdownWithIconOrAvatar","Searchable","DropdownWithGroups","DropdownItemWithElements","DropdownShowSelectedItems","DropdownWithTooltips","DropdownInsidePopover"],Ce=Object.freeze(Object.defineProperty({__proto__:null,DropdownInsidePopover:b,DropdownItemWithElements:g,DropdownShowSelectedItems:w,DropdownWithGroups:v,DropdownWithIconOrAvatar:h,DropdownWithTooltips:y,MultiSelect:m,Overview:d,Searchable:x,Sizes:c,States:u,__namedExportsOrder:ge,default:xe},Symbol.toStringTag,{value:"Module"}));export{Ce as D,m as M,d as O,c as S,u as a,h as b,x as c,v as d,g as e,w as f,y as g};
