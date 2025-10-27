import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r,R as S}from"./index-CTZeEbLr.js";import{F as he}from"./index.esm-B4DTZ0aw.js";import{D as t}from"./Dropdown-BoFZdLUj.js";import{T as c}from"./Text-BwLUW2oo.js";import{a as C}from"./Settings-WHGZN_3r.js";import{C as xe}from"./index-CkcRWdy2.js";import{c as ve}from"./createStoryMetaSettingsDecorator-DMY_JaA7.js";import{F as l}from"./Flex-DYzKCQWz.js";const M=""+new URL("person-02JXxArq.png",import.meta.url).href,E=""+new URL("person3-BJmOcBh7.png",import.meta.url).href,$=""+new URL("person2-C3M6GG-9.png",import.meta.url).href,F=ve({component:t,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),be={title:"Components/Dropdown [New]",component:t,argTypes:F.argTypes,decorators:F.decorators},ge=n=>{const a=r.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsx("div",{style:{height:"150px",width:"300px"},children:e.jsx(t,{options:a,label:"Label",helperText:"Helper text",...n})})},u={render:ge.bind({}),args:{id:"overview-dropdown",ariaLabel:"Overview dropdown",placeholder:"Placeholder text here",clearAriaLabel:"Clear"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>{const n=r.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"sizes-large",ariaLabel:"Large dropdown",options:n,placeholder:"Placeholder text here",size:"large",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"sizes-medium",ariaLabel:"Medium dropdown",options:n,placeholder:"Placeholder text here",size:"medium",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"sizes-small",ariaLabel:"Small dropdown",options:n,placeholder:"Placeholder text here",size:"small",clearAriaLabel:"Clear"})})]})}},h={render:()=>e.jsxs(l,{direction:"row",gap:"medium",children:[e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"states-default",ariaLabel:"Default dropdown",options:[],placeholder:"Default",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"states-disabled",ariaLabel:"Disabled dropdown",options:[],placeholder:"Disabled",disabled:!0,clearAriaLabel:"Clear"})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"states-error",ariaLabel:"Error dropdown",options:[],placeholder:"Error",error:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"states-readonly",ariaLabel:"Readonly dropdown",options:[],placeholder:"Readonly",readOnly:!0,clearAriaLabel:"Clear"})})]})]})},x={render:()=>{const n=r.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}],[]);return e.jsxs(l,{gap:"large",align:"start",justify:"start",children:[e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Single line with hidden options"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(t,{placeholder:"Single line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,clearAriaLabel:"Clear"})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Multiple lines"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(t,{placeholder:"Multiple line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,multiline:!0,clearAriaLabel:"Clear"})})]})]})}},v={render:()=>{const n=r.useMemo(()=>[{value:"email",label:"Email",startElement:{type:"icon",value:C}},{value:"attach",label:"Attach",startElement:{type:"icon",value:xe}}],[]),a=r.useMemo(()=>[{value:"Julia",label:"Julia Martinez",startElement:{type:"avatar",value:M}},{value:"Sophia",label:"Sophia Johnson",startElement:{type:"avatar",value:$}},{value:"Marco",label:"Marco DiAngelo",startElement:{type:"avatar",value:E}}],[]);return e.jsxs(l,{gap:"large",align:"start",justify:"start",children:[e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Single value"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:n[0],options:n,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:a[0],options:a,clearAriaLabel:"Clear"})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Multiple values"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:[n[0]],options:n,multi:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:[a[0]],options:a,multi:!0,clearAriaLabel:"Clear"})})]})]})},parameters:{docs:{liveEdit:{scope:{person1:M,person2:$,person3:E}}}}},b={render:()=>{const n=r.useMemo(()=>Array.from({length:10},(a,o)=>({value:`Option ${o+1}`,label:`Option ${o+1}`})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Searchable for an item",options:n,searchable:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})}},g={render:()=>{const n=r.useMemo(()=>Array.from({length:2},(o,s)=>({label:`Group ${s+1}`,options:Array.from({length:3},(i,d)=>({value:`${s*2+d+1}`,label:`Option ${s*2+d+1}`}))})),[]),a=r.useMemo(()=>Array.from({length:2},(o,s)=>({options:Array.from({length:2},(i,d)=>({value:`${s*2+d+1}`,label:`Option ${s*2+d+1}`}))})),[]);return e.jsxs(l,{gap:"medium",align:"start",justify:"start",children:[e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Group by divider"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by divider",options:a,withGroupDivider:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Group by category title"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by category title",options:n,maxMenuHeight:170,clearAriaLabel:"Clear"})})]}),e.jsxs(l,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Group by category title sticky"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by category title sticky",options:n,stickyGroupTitle:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})]})]})}},w={render:()=>{const n=r.useMemo(()=>[{value:"icon",label:"Label with icon",startElement:{type:"icon",value:C}},{value:"avatar",label:"Label with avatar",startElement:{type:"avatar",value:M}},{value:"indent",label:"Label with indent",startElement:{type:"indent"}}],[]),a=r.useMemo(()=>[{value:"endIcon",label:"Label with end icon",endElement:{type:"icon",value:C}},{value:"hintText",label:"Label with hint text",endElement:{type:"suffix",value:"Hint text"}}],[]);return e.jsxs(l,{gap:"large",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n,label:"Start Elements",required:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:a,label:"End Elements",required:!0,clearAriaLabel:"Clear"})})]})}},y={render:()=>{const n=r.useMemo(()=>Array.from({length:10},(a,o)=>({value:`Option ${o+1}`,label:`Option ${o+1}`})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n,defaultValue:[n[0],n[2],n[3]],label:"Label",required:!0,multi:!0,showSelectedOptions:!1,clearAriaLabel:"Clear"})})}},f={render:()=>{const n=r.useMemo(()=>Array.from({length:2},(a,o)=>({value:`Option ${o+1}`,label:`Option ${o+1}`,tooltipProps:{content:`Description for option ${o+1}`}})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n,clearAriaLabel:"Clear"})})}},L={render:()=>{const n=r.useMemo(()=>[{options:Array.from({length:1e3},(s,i)=>({value:`option-${i+1}`,label:`Option ${i+1}`}))}],[]),a=r.useMemo(()=>Array.from({length:10},(s,i)=>({label:`Group ${i+1}`,options:Array.from({length:100},(d,j)=>({value:`group-${i+1}-option-${j+1}`,label:`Group ${i+1} - Option ${j+1}`}))})),[]),o=r.useCallback(({children:s})=>{const i=[],d=O=>{S.Children.forEach(O,p=>{var A,D;S.isValidElement(p)&&(p.type==="li"||(A=p.props)!=null&&A.role?i.push(p):(D=p.props)!=null&&D.children&&d(p.props.children))})};if(d(s),i.length===0)return e.jsx("div",{children:"No options available"});const j=40,ue=200,me=r.useCallback(({index:O,style:p})=>{const A=i[O];return e.jsx("div",{style:p,children:A})},[i]);return e.jsx(he,{height:ue,width:"100%",itemCount:i.length,itemSize:j,overscanCount:5,children:me})},[]);return e.jsxs(l,{gap:"large",align:"start",children:[e.jsx("div",{style:{width:"350px"},children:e.jsx(t,{placeholder:"Search",options:n,label:"Virtualized",menuRenderer:o,searchable:!0,maxMenuHeight:250,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px"},children:e.jsx(t,{placeholder:"Search",options:a,label:"Grouped Virtualized",menuRenderer:o,searchable:!0,maxMenuHeight:250,clearAriaLabel:"Clear"})})]})},name:"Virtualized Dropdown"};var z,R,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: dropdownTemplate.bind({}),
  args: {
    id: "overview-dropdown",
    ariaLabel: "Overview dropdown",
    placeholder: "Placeholder text here",
    clearAriaLabel: "Clear"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(G=(R=u.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var T,I,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
          <Dropdown id="sizes-large" ariaLabel="Large dropdown" options={options} placeholder="Placeholder text here" size="large" clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="sizes-medium" ariaLabel="Medium dropdown" options={options} placeholder="Placeholder text here" size="medium" clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="sizes-small" ariaLabel="Small dropdown" options={options} placeholder="Placeholder text here" size="small" clearAriaLabel="Clear" />
        </div>
      </>;
  }
}`,...(V=(I=m.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var _,H,P;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex direction="row" gap="medium">
      <Flex direction="column" gap="medium">
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="states-default" ariaLabel="Default dropdown" options={[]} placeholder="Default" clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="states-disabled" ariaLabel="Disabled dropdown" options={[]} placeholder="Disabled" disabled clearAriaLabel="Clear" />
        </div>
      </Flex>
      <Flex direction="column" gap="medium">
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="states-error" ariaLabel="Error dropdown" options={[]} placeholder="Error" error clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="states-readonly" ariaLabel="Readonly dropdown" options={[]} placeholder="Readonly" readOnly clearAriaLabel="Clear" />
        </div>
      </Flex>
    </Flex>
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var W,B,k;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
            <Dropdown placeholder="Single line multi state" defaultValue={[options[0], options[1], options[2]]} options={options} multi clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple lines</Text>
          <div style={{
          width: "350px",
          marginBottom: "50px"
        }}>
            <Dropdown placeholder="Multiple line multi state" defaultValue={[options[0], options[1], options[2]]} options={options} multi multiline clearAriaLabel="Clear" />
          </div>
        </Flex>
      </Flex>;
  }
}`,...(k=(B=x.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var J,q,N;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
            <Dropdown defaultValue={optionsIcons[0]} options={optionsIcons} clearAriaLabel="Clear" />
          </div>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown defaultValue={optionsAvatar[0]} options={optionsAvatar} clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple values</Text>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown defaultValue={[optionsIcons[0]]} options={optionsIcons} multi clearAriaLabel="Clear" />
          </div>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown defaultValue={[optionsAvatar[0]]} options={optionsAvatar} multi clearAriaLabel="Clear" />
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
}`,...(N=(q=v.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var U,K,X;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <Dropdown placeholder={"Searchable for an item"} options={options} searchable maxMenuHeight={170} clearAriaLabel="Clear" />
      </div>;
  }
}`,...(X=(K=b.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Q,Y,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
            <Dropdown placeholder="Group by divider" options={optionsWithoutGroupLabel} withGroupDivider maxMenuHeight={170} clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category title</Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown placeholder="Group by category title" options={options} maxMenuHeight={170} clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category title sticky</Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown placeholder="Group by category title sticky" options={options} stickyGroupTitle maxMenuHeight={170} clearAriaLabel="Clear" />
          </div>
        </Flex>
      </Flex>;
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const startOptions: DropdownOption<Record<string, unknown>>[] = useMemo(() => [{
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
    const endOptions: DropdownOption<Record<string, unknown>>[] = useMemo(() => [{
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
          <Dropdown placeholder={"Placeholder text here"} options={startOptions} label="Start Elements" required clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown placeholder={"Placeholder text here"} options={endOptions} label="End Elements" required clearAriaLabel="Clear" />
        </div>
      </Flex>;
  }
}`,...(te=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,ae,le;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
        <Dropdown placeholder={"Placeholder text here"} options={options} defaultValue={[options[0], options[2], options[3]]} label="Label" required multi showSelectedOptions={false} clearAriaLabel="Clear" />
      </div>;
  }
}`,...(le=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var oe,ie,se;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        <Dropdown placeholder={"Placeholder text here"} options={optionsWithTooltips} clearAriaLabel="Clear" />
      </div>;
  }
}`,...(se=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,pe,ce;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      options: Array.from({
        length: 1000
      }, (_, index) => ({
        value: \`option-\${index + 1}\`,
        label: \`Option \${index + 1}\`
      }))
    }], []);
    const groupedOptions = useMemo(() => Array.from({
      length: 10
    }, (_, groupIndex) => ({
      label: \`Group \${groupIndex + 1}\`,
      options: Array.from({
        length: 100
      }, (_, optionIndex) => ({
        value: \`group-\${groupIndex + 1}-option-\${optionIndex + 1}\`,
        label: \`Group \${groupIndex + 1} - Option \${optionIndex + 1}\`
      }))
    })), []);
    const virtualizedMenuRenderer = useCallback(({
      children
    }: {
      children: React.ReactNode;
    }) => {
      const flattenedOptions: React.ReactElement[] = [];
      const flattenOptions = (reactNode: React.ReactNode) => {
        React.Children.forEach(reactNode, childElement => {
          if (React.isValidElement(childElement)) {
            if (childElement.type === "li" || childElement.props?.role) {
              flattenedOptions.push(childElement);
            } else if (childElement.props?.children) {
              flattenOptions(childElement.props.children);
            }
          }
        });
      };
      flattenOptions(children);
      if (flattenedOptions.length === 0) {
        return <div>No options available</div>;
      }
      const itemHeight = 40;
      const containerHeight = 200;

      // Row renderer that preserves original elements with all their downshift props
      const VirtualizedRow = useCallback(({
        index,
        style
      }: {
        index: number;
        style: React.CSSProperties;
      }) => {
        const option = flattenedOptions[index];
        return <div style={style}>{option}</div>;
      }, [flattenedOptions]);
      return <List height={containerHeight} width="100%" itemCount={flattenedOptions.length} itemSize={itemHeight} overscanCount={5}>
          {VirtualizedRow}
        </List>;
    }, []);
    return <Flex gap="large" align="start">
        <div style={{
        width: "350px"
      }}>
          <Dropdown placeholder="Search" options={options} label="Virtualized" menuRenderer={virtualizedMenuRenderer} searchable maxMenuHeight={250} clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "350px"
      }}>
          <Dropdown placeholder="Search" options={groupedOptions} label="Grouped Virtualized" menuRenderer={virtualizedMenuRenderer} searchable maxMenuHeight={250} clearAriaLabel="Clear" />
        </div>
      </Flex>;
  },
  name: "Virtualized Dropdown"
}`,...(ce=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};const we=["Overview","Sizes","States","MultiSelect","DropdownWithIconOrAvatar","Searchable","DropdownWithGroups","DropdownItemWithElements","DropdownHideSelectedItems","DropdownWithTooltips","DropdownWithVirtualization"],Se=Object.freeze(Object.defineProperty({__proto__:null,DropdownHideSelectedItems:y,DropdownItemWithElements:w,DropdownWithGroups:g,DropdownWithIconOrAvatar:v,DropdownWithTooltips:f,DropdownWithVirtualization:L,MultiSelect:x,Overview:u,Searchable:b,Sizes:m,States:h,__namedExportsOrder:we,default:be},Symbol.toStringTag,{value:"Module"}));export{Se as D,x as M,u as O,m as S,h as a,v as b,b as c,g as d,w as e,y as f,f as g,L as h};
