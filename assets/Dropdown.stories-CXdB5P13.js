import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as o,R as F}from"./index-Hemj67b4.js";import{F as he}from"./index.esm-CsnITLvm.js";import{D as t}from"./Dropdown-I7Jfz8zn.js";import{T as c}from"./Text-H9hbjM9B.js";import{a as S}from"./Settings-DOfpeGYp.js";import{C as xe}from"./index-CUPFiJE2.js";import{c as ve}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";import{F as i}from"./Flex-2Q04fxOc.js";const E=""+new URL("person-02JXxArq.png",import.meta.url).href,A=""+new URL("person3-BJmOcBh7.png",import.meta.url).href,R=""+new URL("person2-C3M6GG-9.png",import.meta.url).href,G=ve({component:t,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),ge={title:"Components/Dropdown [Alpha]",component:t,argTypes:G.argTypes,decorators:G.decorators},ye=n=>{const r=o.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsx("div",{style:{height:"150px",width:"300px"},children:e.jsx(t,{options:r,label:"Label",helperText:"Helper text",...n})})},u={render:ye.bind({}),args:{placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>{const n=o.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:n,placeholder:"Placeholder text here",size:"large"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:n,placeholder:"Placeholder text here",size:"medium"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:n,placeholder:"Placeholder text here",size:"small"})})]})}},h={render:()=>e.jsxs(i,{direction:"row",gap:"medium",children:[e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:[],placeholder:"Default"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:[],placeholder:"Disabled",disabled:!0})})]}),e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:[],placeholder:"Error",error:!0})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:[],placeholder:"Readonly",readOnly:!0})})]})]})},x={render:()=>{const n=o.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}],[]);return e.jsxs(i,{gap:"large",align:"start",justify:"start",children:[e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Single line with hidden options"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(t,{placeholder:"Single line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0})})]}),e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Multiple lines"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(t,{placeholder:"Multiple line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,multiline:!0})})]})]})}},v={render:()=>{const n=o.useMemo(()=>[{value:"email",label:"Email",startElement:{type:"icon",value:S}},{value:"attach",label:"Attach",startElement:{type:"icon",value:xe}}],[]),r=o.useMemo(()=>[{value:"Julia",label:"Julia Martinez",startElement:{type:"avatar",value:E}},{value:"Sophia",label:"Sophia Johnson",startElement:{type:"avatar",value:R}},{value:"Marco",label:"Marco DiAngelo",startElement:{type:"avatar",value:A}}],[]);return e.jsxs(i,{gap:"large",align:"start",justify:"start",children:[e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Single value"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:n[0],options:n})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:r[0],options:r})})]}),e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Multiple values"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:[n[0]],options:n,multi:!0})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(t,{defaultValue:[r[0]],options:r,multi:!0})})]})]})},parameters:{docs:{liveEdit:{scope:{person1:E,person2:R,person3:A}}}}},g={render:()=>{const n=o.useMemo(()=>Array.from({length:10},(r,l)=>({value:`Option ${l+1}`,label:`Option ${l+1}`})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Searchable for an item",options:n,searchable:!0,maxMenuHeight:170})})}},y={render:()=>{const n=o.useMemo(()=>Array.from({length:2},(l,s)=>({label:`Group ${s+1}`,options:Array.from({length:3},(a,p)=>({value:`${s*2+p+1}`,label:`Option ${s*2+p+1}`}))})),[]),r=o.useMemo(()=>Array.from({length:2},(l,s)=>({options:Array.from({length:2},(a,p)=>({value:`${s*2+p+1}`,label:`Option ${s*2+p+1}`}))})),[]);return e.jsxs(i,{gap:"medium",align:"start",justify:"start",children:[e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Group by divider"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by divider",options:r,withGroupDivider:!0,maxMenuHeight:170})})]}),e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Group by category title"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by category title",options:n,maxMenuHeight:170})})]}),e.jsxs(i,{direction:"column",gap:"medium",children:[e.jsx(c,{children:"Group by category title sticky"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Group by category title sticky",options:n,stickyGroupTitle:!0,maxMenuHeight:170})})]})]})}},b={render:()=>{const n=o.useMemo(()=>[{value:"icon",label:"Label with icon",startElement:{type:"icon",value:S}},{value:"avatar",label:"Label with avatar",startElement:{type:"avatar",value:E}},{value:"indent",label:"Label with indent",startElement:{type:"indent"}}],[]),r=o.useMemo(()=>[{value:"endIcon",label:"Label with end icon",endElement:{type:"icon",value:S}},{value:"hintText",label:"Label with hint text",endElement:{type:"suffix",value:"Hint text"}}],[]);return e.jsxs(i,{gap:"large",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n,label:"Start Elements",required:!0})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:r,label:"End Elements",required:!0})})]})}},w={render:()=>{const n=o.useMemo(()=>Array.from({length:10},(r,l)=>({value:`Option ${l+1}`,label:`Option ${l+1}`})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n,defaultValue:[n[0],n[2],n[3]],label:"Label",required:!0,multi:!0,showSelectedOptions:!1})})}},f={render:()=>{const n=o.useMemo(()=>Array.from({length:2},(r,l)=>({value:`Option ${l+1}`,label:`Option ${l+1}`,tooltipProps:{content:`Description for option ${l+1}`}})),[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{placeholder:"Placeholder text here",options:n})})}},j={render:()=>{const n=o.useMemo(()=>[{options:Array.from({length:1e3},(s,a)=>({value:`option-${a+1}`,label:`Option ${a+1}`}))}],[]),r=o.useMemo(()=>Array.from({length:10},(s,a)=>({label:`Group ${a+1}`,options:Array.from({length:100},(p,O)=>({value:`group-${a+1}-option-${O+1}`,label:`Group ${a+1} - Option ${O+1}`}))})),[]),l=o.useCallback(({children:s})=>{const a=[],p=D=>{F.Children.forEach(D,d=>{var M,$;F.isValidElement(d)&&(d.type==="li"||(M=d.props)!=null&&M.role?a.push(d):($=d.props)!=null&&$.children&&p(d.props.children))})};if(p(s),a.length===0)return e.jsx("div",{children:"No options available"});const O=40,ue=200,me=o.useCallback(({index:D,style:d})=>{const M=a[D];return e.jsx("div",{style:d,children:M})},[a]);return e.jsx(he,{height:ue,width:"100%",itemCount:a.length,itemSize:O,overscanCount:5,children:me})},[]);return e.jsxs(i,{gap:"large",align:"start",children:[e.jsx("div",{style:{width:"350px"},children:e.jsx(t,{placeholder:"Search",options:n,label:"Virtualized",menuRenderer:l,searchable:!0,maxMenuHeight:250})}),e.jsx("div",{style:{width:"350px"},children:e.jsx(t,{placeholder:"Search",options:r,label:"Grouped Virtualized",menuRenderer:l,searchable:!0,maxMenuHeight:250})})]})},name:"Virtualized Dropdown"};var T,z,I;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var V,_,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var H,P,C;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(C=(P=h.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var B,W,k;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(W=x.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var J,q,N;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(N=(q=v.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var U,K,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(K=g.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Q,Y,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,re,ie;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        <Dropdown placeholder={"Placeholder text here"} options={options} defaultValue={[options[0], options[2], options[3]]} label="Label" required multi showSelectedOptions={false} />
      </div>;
  }
}`,...(ie=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,ae,se;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var pe,de,ce;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
          <Dropdown placeholder="Search" options={options} label="Virtualized" menuRenderer={virtualizedMenuRenderer} searchable maxMenuHeight={250} />
        </div>
        <div style={{
        width: "350px"
      }}>
          <Dropdown placeholder="Search" options={groupedOptions} label="Grouped Virtualized" menuRenderer={virtualizedMenuRenderer} searchable maxMenuHeight={250} />
        </div>
      </Flex>;
  },
  name: "Virtualized Dropdown"
}`,...(ce=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const be=["Overview","Sizes","States","MultiSelect","DropdownWithIconOrAvatar","Searchable","DropdownWithGroups","DropdownItemWithElements","DropdownHideSelectedItems","DropdownWithTooltips","DropdownWithVirtualization"],Fe=Object.freeze(Object.defineProperty({__proto__:null,DropdownHideSelectedItems:w,DropdownItemWithElements:b,DropdownWithGroups:y,DropdownWithIconOrAvatar:v,DropdownWithTooltips:f,DropdownWithVirtualization:j,MultiSelect:x,Overview:u,Searchable:g,Sizes:m,States:h,__namedExportsOrder:be,default:ge},Symbol.toStringTag,{value:"Module"}));export{Fe as D,x as M,u as O,m as S,h as a,v as b,g as c,y as d,b as e,w as f,f as g,j as h};
