import{R as e,r as a}from"./index-Hemj67b4.js";import{M as S}from"./ModalExampleContent-CYCzOJqw.js";import{D as t}from"./Dropdown-CDNAFSWe.js";import{T as s}from"./Text-CBUmQ7si.js";import{a as f}from"./Settings-DOfpeGYp.js";import{C as se}from"./index-BA_MN9l1.js";import{M as pe,L as de}from"./LegacyModal-CI7Cscis.js";import{c as ce}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as l}from"./Flex-pz2uwxlA.js";import{D as me}from"./DialogContentContainer-BmCeWtAc.js";import{B as ue}from"./Box-DnEG61CI.js";import{B as he}from"./Button-t0_MS1N7.js";const M=""+new URL("person-02JXxArq.png",import.meta.url).href,O=""+new URL("person3-BJmOcBh7.png",import.meta.url).href,F=""+new URL("person2-C3M6GG-9.png",import.meta.url).href,T=ce({component:t,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),ve={title:"Components/Dropdown [Alpha]",component:t,argTypes:T.argTypes,decorators:T.decorators},xe=n=>{const r=a.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.createElement("div",{style:{height:"150px",width:"300px"}},e.createElement(t,{options:r,label:"Label",helperText:"Helper text",...n}))},d={render:xe.bind({}),args:{placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>{const n=a.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.createElement(e.Fragment,null,e.createElement("div",{style:{width:"300px"}},e.createElement(t,{options:n,placeholder:"Placeholder text here",size:"large"})),e.createElement("div",{style:{width:"300px"}},e.createElement(t,{options:n,placeholder:"Placeholder text here",size:"medium"})),e.createElement("div",{style:{width:"300px"}},e.createElement(t,{options:n,placeholder:"Placeholder text here",size:"small"})))}},m={render:()=>e.createElement(l,{direction:"row",gap:"medium"},e.createElement(l,{direction:"column",gap:"medium"},e.createElement("div",{style:{width:"300px"}},e.createElement(t,{options:[],placeholder:"Default"})),e.createElement("div",{style:{width:"300px"}},e.createElement(t,{options:[],placeholder:"Disabled",disabled:!0}))),e.createElement(l,{direction:"column",gap:"medium"},e.createElement("div",{style:{width:"300px"}},e.createElement(t,{options:[],placeholder:"Error",error:!0})),e.createElement("div",{style:{width:"300px"}},e.createElement(t,{options:[],placeholder:"Readonly",readOnly:!0}))))},u={render:()=>{const n=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}],[]);return e.createElement(l,{gap:"large",align:"start",justify:"start"},e.createElement(l,{direction:"column",gap:"medium"},e.createElement(s,null,"Single line with hidden options"),e.createElement("div",{style:{width:"350px",marginBottom:"50px"}},e.createElement(t,{placeholder:"Single line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0}))),e.createElement(l,{direction:"column",gap:"medium"},e.createElement(s,null,"Multiple lines"),e.createElement("div",{style:{width:"350px",marginBottom:"50px"}},e.createElement(t,{placeholder:"Multiple line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,multiline:!0}))))}},h={render:()=>{const n=a.useMemo(()=>[{value:"email",label:"Email",startElement:{type:"icon",value:f}},{value:"attach",label:"Attach",startElement:{type:"icon",value:se}}],[]),r=a.useMemo(()=>[{value:"Julia",label:"Julia Martinez",startElement:{type:"avatar",value:M}},{value:"Sophia",label:"Sophia Johnson",startElement:{type:"avatar",value:F}},{value:"Marco",label:"Marco DiAngelo",startElement:{type:"avatar",value:O}}],[]);return e.createElement(l,{gap:"large",align:"start",justify:"start"},e.createElement(l,{direction:"column",gap:"medium"},e.createElement(s,null,"Single value"),e.createElement("div",{style:{width:"350px",marginBottom:"10px"}},e.createElement(t,{defaultValue:n[0],options:n})),e.createElement("div",{style:{width:"350px",marginBottom:"10px"}},e.createElement(t,{defaultValue:r[0],options:r}))),e.createElement(l,{direction:"column",gap:"medium"},e.createElement(s,null,"Multiple values"),e.createElement("div",{style:{width:"350px",marginBottom:"10px"}},e.createElement(t,{defaultValue:[n[0]],options:n,multi:!0})),e.createElement("div",{style:{width:"350px",marginBottom:"10px"}},e.createElement(t,{defaultValue:[r[0]],options:r,multi:!0}))))},parameters:{docs:{liveEdit:{scope:{person1:M,person2:F,person3:O}}}}},v={render:()=>{const n=a.useMemo(()=>Array.from({length:10},(r,o)=>({value:`Option ${o+1}`,label:`Option ${o+1}`})),[]);return e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Searchable for an item",options:n,searchable:!0,maxMenuHeight:170}))}},x={render:()=>{const n=a.useMemo(()=>Array.from({length:2},(o,i)=>({label:`Group ${i+1}`,options:Array.from({length:3},(b,p)=>({value:`${i*2+p+1}`,label:`Option ${i*2+p+1}`}))})),[]),r=a.useMemo(()=>Array.from({length:2},(o,i)=>({options:Array.from({length:2},(b,p)=>({value:`${i*2+p+1}`,label:`Option ${i*2+p+1}`}))})),[]);return e.createElement(l,{gap:"medium",align:"start",justify:"start"},e.createElement(l,{direction:"column",gap:"medium"},e.createElement(s,null,"Group by divider"),e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Group by divider",options:r,withGroupDivider:!0,maxMenuHeight:170}))),e.createElement(l,{direction:"column",gap:"medium"},e.createElement(s,null,"Group by category title"),e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Group by category title",options:n,maxMenuHeight:170}))),e.createElement(l,{direction:"column",gap:"medium"},e.createElement(s,null,"Group by category title sticky"),e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Group by category title sticky",options:n,stickyGroupTitle:!0,maxMenuHeight:170}))))}},g={render:()=>{const n=a.useMemo(()=>[{value:"icon",label:"Label with icon",startElement:{type:"icon",value:f}},{value:"avatar",label:"Label with avatar",startElement:{type:"avatar",value:M}},{value:"indent",label:"Label with indent",startElement:{type:"indent"}},{value:"endIcon",label:"Label with end icon",endElement:{type:"icon",value:f}},{value:"hintText",label:"Label with hint text",endElement:{type:"suffix",value:"Hint text"}}],[]);return e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Placeholder text here",options:n,label:"Label",required:!0}))}},w={render:()=>{const n=a.useMemo(()=>Array.from({length:10},(r,o)=>({value:`Option ${o+1}`,label:`Option ${o+1}`})),[]);return e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Placeholder text here",options:n,defaultValue:[n[0],n[2],n[3]],label:"Label",required:!0,multi:!0,showSelectedOptions:!0}))}},y={render:()=>{const n=a.useMemo(()=>Array.from({length:2},(r,o)=>({value:`Option ${o+1}`,label:`Option ${o+1}`,tooltipProps:{content:`Description for option ${o+1}`}})),[]);return e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Placeholder text here",options:n}))}},E={render:()=>{const n=a.useMemo(()=>Array.from({length:15},(p,D)=>({value:`${D+1}`,label:`Option ${D+1}`})),[]),[r,o]=a.useState(!1),i=a.useCallback(()=>{o(!1)},[o]),b={width:"350px",height:"200px",overflow:"auto"};return e.createElement(l,{gap:"large"},e.createElement(me,{style:b},e.createElement(S,null),e.createElement(ue,{marginTop:"medium",marginBottom:"xxl"},e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Dropdown inside DialogContentContainer",options:n})))),e.createElement("div",null,e.createElement(he,{onClick:()=>o(!0)},"Open Modal"),e.createElement(pe,{title:"Modal with dropdown",show:r,onClose:i},e.createElement(de,null,e.createElement("div",{style:{width:"300px"}},e.createElement(t,{placeholder:"Dropdown",options:n}))))))},parameters:{docs:{liveEdit:{scope:{ModalExampleContent:S}}}},name:"Dropdown inside popover"};var A,C,$;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(C=d.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var B,I,G;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(I=c.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var L,_,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(_=m.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var V,W,k;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(W=u.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var z,H,R;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var j,J,q;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var U,K,X;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(K=x.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var N,Q,Y;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const options: BaseListItemData<Record<string, unknown>>[] = useMemo(() => [{
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
    }, {
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
    return <div style={{
      width: "300px"
    }}>
        <Dropdown placeholder={"Placeholder text here"} options={options} label="Label" required />
      </div>;
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
}`,...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ae,re,ie;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const ge=["Overview","Sizes","States","MultiSelect","DropdownWithIconOrAvatar","Searchable","DropdownWithGroups","DropdownItemWithElements","DropdownShowSelectedItems","DropdownWithTooltips","DropdownInsidePopover"],Ce=Object.freeze(Object.defineProperty({__proto__:null,DropdownInsidePopover:E,DropdownItemWithElements:g,DropdownShowSelectedItems:w,DropdownWithGroups:x,DropdownWithIconOrAvatar:h,DropdownWithTooltips:y,MultiSelect:u,Overview:d,Searchable:v,Sizes:c,States:m,__namedExportsOrder:ge,default:ve},Symbol.toStringTag,{value:"Module"}));export{Ce as D,u as M,d as O,c as S,m as a,h as b,v as c,x as d,g as e,w as f,y as g};
