import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as k,R as he}from"./index-Hemj67b4.js";import{e as l,d as o,c as m,b as d,a as c,T as i}from"./TableBody-BYFX7trK.js";import{T as ce}from"./TableVirtualizedBody-D_39X8Ra.js";import{a as h}from"./Label-BNC9BjIO.js";import{F as me}from"./Flex-2Q04fxOc.js";import{f as u,g as b,h as T,s as A,p as R,i as D,j as O,v as L,k as v,l as I,m as H,n as ue}from"./Table.stories.helpers-BB7y_PSe.js";import{c as Te}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const z=Te({component:i,ignoreControlsPropNamesArray:["children","errorState","emptyState"]}),xe={title:"Components/Table",component:i,subcomponents:{TableHeader:c,TableHeaderCell:d,TableBody:m,TableRow:o,TableCell:l,TableVirtualizedBody:ce},argTypes:z.argTypes,decorators:z.decorators,parameters:{docs:{liveEdit:{scope:{TableAvatar:u}}}}},x={render:()=>{const t=[{id:"sentOn",title:"Sent on",width:150,loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"},{id:"sentBy",title:"Sent by",width:{min:120,max:200},infoContent:"This is the sender",loadingStateType:"circle"},{id:"status",title:"Status",width:150,infoContent:"Info content for the status column",loadingStateType:"medium-text"},{id:"emailsSent",title:"Emails sent",width:150,loadingStateType:"medium-text"}],a=[{id:"1",sentOn:"2020-01-01",sentBy:"John Doe",subject:"Lorem ipsum dolor",status:"Sent",emailsSent:100},{id:"3",sentOn:"2023-03-03",sentBy:"Some Person",subject:"This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",status:"Sent",emailsSent:999},{id:"2",sentOn:"2022-02-02",sentBy:"Other Name",subject:"This is the subject",status:"Sent",emailsSent:99}];return e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((n,s)=>e.jsx(d,{title:n.title},s))}),e.jsx(m,{children:a.map(n=>e.jsxs(o,{children:[e.jsx(l,{children:n.sentOn}),e.jsx(l,{children:n.subject}),e.jsx(l,{children:e.jsx(u,{text:n.sentBy})}),e.jsx(l,{children:e.jsx(h,{text:n.status,color:"positive"})}),e.jsx(l,{children:n.emailsSent})]},n.id))})]})},parameters:{docs:{liveEdit:{isEnabled:!1}}},name:"Overview"},y={render:()=>{const t=[{id:"sentOn",title:"Sent on",loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"}],a=[{id:1,sentOn:"2020-01-01",subject:"Lorem ipsum dolor"},{id:2,sentOn:"2022-02-02",subject:"This is the subject"}];return e.jsxs(e.Fragment,{children:[e.jsxs(i,{style:{width:"auto"},size:"small",errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((n,s)=>e.jsx(d,{title:n.title,icon:n.icon,infoContent:n.infoContent},s))}),e.jsx(m,{children:a.map(n=>e.jsxs(o,{children:[e.jsx(l,{children:n.sentOn}),e.jsx(l,{children:n.subject})]},n.id))})]}),e.jsxs(i,{style:{width:"auto"},size:"medium",errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((n,s)=>e.jsx(d,{title:n.title,icon:n.icon,infoContent:n.infoContent},s))}),e.jsx(m,{children:a.map(n=>e.jsxs(o,{children:[e.jsx(l,{children:n.sentOn}),e.jsx(l,{children:n.subject})]},n.id))})]}),e.jsxs(i,{style:{width:"auto"},size:"large",errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((n,s)=>e.jsx(d,{title:n.title,icon:n.icon,infoContent:n.infoContent},s))}),e.jsx(m,{children:a.map(n=>e.jsxs(o,{children:[e.jsx(l,{children:n.sentOn}),e.jsx(l,{children:n.subject})]},n.id))})]})]})},decorators:[t=>e.jsx(me,{align:"start",justify:"space-between",gap:"medium",style:{flex:1},children:e.jsx(t,{})})],name:"Sizes"},S={render:()=>{const t=[{id:"sentOn",title:"Sent on",width:150,loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"},{id:"sentBy",title:"Sent by",width:{min:120,max:200},infoContent:"This is the sender",loadingStateType:"circle"},{id:"status",title:"Status",width:150,infoContent:"Info content for the status column",loadingStateType:"medium-text"},{id:"emailsSent",title:"Emails sent",width:150,loadingStateType:"medium-text"}],a=[{id:"1",sentOn:"2020-01-01",sentBy:"John Doe",subject:"Lorem ipsum dolor",status:"Sent",emailsSent:100},{id:"3",sentOn:"2023-03-03",sentBy:"Some Person",subject:"This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",status:"Sent",emailsSent:999},{id:"2",sentOn:"2022-02-02",sentBy:"Other Name",subject:"This is the subject",status:"Sent",emailsSent:99}];return e.jsxs(e.Fragment,{children:[e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((n,s)=>e.jsx(d,{title:n.title},s))}),e.jsx(m,{children:a.map(n=>e.jsxs(o,{children:[e.jsx(l,{children:n.sentOn}),e.jsx(l,{children:n.subject}),e.jsx(l,{children:e.jsx(u,{text:n.sentBy})}),e.jsx(l,{children:e.jsx(h,{text:n.status,color:"positive"})}),e.jsx(l,{children:n.emailsSent})]},n.id))})]}),e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,withoutBorder:!0,children:[e.jsx(c,{children:t.map((n,s)=>e.jsx(d,{title:n.title},s))}),e.jsx(m,{children:a.map(n=>e.jsxs(o,{children:[e.jsx(l,{children:n.sentOn}),e.jsx(l,{children:n.subject}),e.jsx(l,{children:e.jsx(u,{text:n.sentBy})}),e.jsx(l,{children:e.jsx(h,{text:n.status,color:"positive"})}),e.jsx(l,{children:n.emailsSent})]},n.id))})]})]})},decorators:[t=>e.jsx(me,{direction:"column",gap:40,children:e.jsx(t,{})})],name:"Borders"},p={render:()=>{const[t,a]=k.useState(T),[n,s]=k.useState({}),B=(r,f)=>{s({[r]:f}),a(ue(r,f,t))};return e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:b,children:[e.jsx(c,{children:b.map((r,f)=>e.jsx(d,{title:r.title,icon:r.icon,infoContent:r.infoContent,onSortClicked:be=>B(r.id,be),sortState:n[r.id]},f))}),e.jsx(m,{children:t.map(r=>e.jsxs(o,{children:[e.jsx(l,{children:r.sentOn}),e.jsx(l,{children:r.subject}),e.jsx(l,{children:e.jsx(u,{text:r.sentBy})}),e.jsx(l,{children:e.jsx(h,{text:r.status,color:"positive"})}),e.jsx(l,{children:r.emailsSent})]},r.id))})]})},parameters:{docs:{liveEdit:{scope:{emailTableData:T,emailColumns:b}}}},name:"Table Header Functionality"},j={render:()=>e.jsxs(i,{dataState:{isLoading:!0},errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:b,children:[e.jsx(c,{children:b.map((t,a)=>e.jsx(d,{title:t.title},a))}),e.jsx(m,{children:T.map(t=>e.jsxs(o,{children:[e.jsx(l,{children:t.sentOn}),e.jsx(l,{children:t.subject}),e.jsx(l,{children:e.jsx(u,{text:t.sentBy})}),e.jsx(l,{children:e.jsx(h,{text:t.status,color:"positive"})}),e.jsx(l,{children:t.emailsSent})]},t.id))})]}),parameters:{docs:{liveEdit:{scope:{emailTableData:T,emailColumns:b}}}},name:"Loading"},C={render:()=>e.jsx("div",{style:{height:220,width:"100%"},children:e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:O,children:[e.jsx(c,{children:O.map((t,a)=>e.jsx(d,{title:t.title},a))}),e.jsx(m,{children:D.map(t=>e.jsxs(o,{children:[e.jsx(l,{children:t.sentOn}),e.jsx(l,{children:e.jsx(h,{text:t.priority,color:R[t.priority]})}),e.jsx(l,{children:t.subject}),e.jsx(l,{children:e.jsx(u,{text:t.sentBy})}),e.jsx(l,{children:e.jsx(h,{text:t.status,color:A[t.status]})}),e.jsx(l,{children:t.emailsSent})]},t.id))})]})}),parameters:{docs:{liveEdit:{scope:{scrollTableColumns:O,scrollTableData:D,priorityColumnToLabelColor:R,statusColumnToLabelColor:A}}}},name:"Scroll"},g={render:()=>{const t=n=>e.jsx(o,{children:v.map(s=>e.jsx(l,{sticky:s.id==="id",children:n[s.id]},s.id))}),a=he.useCallback(n=>e.jsx(c,{children:n.map((s,B)=>e.jsx(d,{sticky:B===0,...s},B))}),[]);return e.jsx(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:v,style:{height:250},children:e.jsx(ce,{rowRenderer:t,items:L,columns:v,headerRenderer:a})})},parameters:{docs:{liveEdit:{scope:{virtualizedScrollTableColumns:v,virtualizedScrollTableData:L}}}},name:"Virtualized Scroll"},w={render:()=>e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:H,children:[e.jsx(c,{children:H.map((t,a)=>e.jsx(d,{sticky:a===0,title:t.title},a))}),e.jsx(m,{children:I.map(t=>e.jsxs(o,{children:[e.jsx(l,{sticky:!0,children:t.projectName}),e.jsx(l,{children:e.jsx(h,{text:t.status,color:A[t.status]})}),e.jsx(l,{children:t.description}),e.jsx(l,{children:t.createdOn}),e.jsx(l,{children:t.emailsSent}),e.jsx(l,{children:t.owner}),e.jsx(l,{children:t.priority}),e.jsx(l,{children:t.category}),e.jsx(l,{children:t.dueDate}),e.jsx(l,{children:t.comments})]},t.id))})]}),parameters:{docs:{liveEdit:{scope:{stickyColumns:H,stickyTableData:I,statusColumnToLabelColor:A}}}},name:"Sticky column"},E={render:()=>{const t=a=>a.id==="2";return e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:b,children:[e.jsx(c,{children:b.map((a,n)=>e.jsx(d,{title:a.title},n))}),e.jsx(m,{children:T.map(a=>e.jsxs(o,{highlighted:t(a),children:[e.jsx(l,{children:a.sentOn}),e.jsx(l,{children:a.subject}),e.jsx(l,{children:e.jsx(u,{text:a.sentBy})}),e.jsx(l,{children:e.jsx(h,{text:a.status,color:"positive"})}),e.jsx(l,{children:a.emailsSent})]},a.id))})]})},parameters:{docs:{liveEdit:{scope:{emailColumns:b,emailTableData:T}}}},name:"Highlighted row"};var F,N,V;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const columns: TableColumn[] = [{
      id: "sentOn",
      title: "Sent on",
      width: 150,
      loadingStateType: "medium-text"
    }, {
      id: "subject",
      title: "Subject",
      loadingStateType: "long-text"
    }, {
      id: "sentBy",
      title: "Sent by",
      width: {
        min: 120,
        max: 200
      },
      infoContent: "This is the sender",
      loadingStateType: "circle"
    }, {
      id: "status",
      title: "Status",
      width: 150,
      infoContent: "Info content for the status column",
      loadingStateType: "medium-text"
    }, {
      id: "emailsSent",
      title: "Emails sent",
      width: 150,
      loadingStateType: "medium-text"
    }];
    const data = [{
      id: "1",
      sentOn: "2020-01-01",
      sentBy: "John Doe",
      subject: "Lorem ipsum dolor",
      status: "Sent",
      emailsSent: 100
    }, {
      id: "3",
      sentOn: "2023-03-03",
      sentBy: "Some Person",
      subject: "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
      status: "Sent",
      emailsSent: 999
    }, {
      id: "2",
      sentOn: "2022-02-02",
      sentBy: "Other Name",
      subject: "This is the subject",
      status: "Sent",
      emailsSent: 99
    }];
    return <Table errorState={<h1 style={{
      textAlign: "center"
    }}>Error State</h1>} emptyState={<h1 style={{
      textAlign: "center"
    }}>Empty State</h1>} columns={columns}>
        <TableHeader>
          {columns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} />)}
        </TableHeader>
        <TableBody>
          {data.map(rowItem => <TableRow key={rowItem.id}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color="positive" />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  },
  name: "Overview"
}`,...(V=(N=x.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,P,J;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const columns: TableColumn[] = [{
      id: "sentOn",
      title: "Sent on",
      loadingStateType: "medium-text"
    }, {
      id: "subject",
      title: "Subject",
      loadingStateType: "long-text"
    }];
    const data = [{
      id: 1,
      sentOn: "2020-01-01",
      subject: "Lorem ipsum dolor"
    }, {
      id: 2,
      sentOn: "2022-02-02",
      subject: "This is the subject"
    }];
    return <>
        <Table style={{
        width: "auto"
      }} size="small" errorState={<h1 style={{
        textAlign: "center"
      }}>Error State</h1>} emptyState={<h1 style={{
        textAlign: "center"
      }}>Empty State</h1>} columns={columns}>
          <TableHeader>
            {columns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} icon={headerCell.icon} infoContent={headerCell.infoContent} />)}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
        <Table style={{
        width: "auto"
      }} size="medium" errorState={<h1 style={{
        textAlign: "center"
      }}>Error State</h1>} emptyState={<h1 style={{
        textAlign: "center"
      }}>Empty State</h1>} columns={columns}>
          <TableHeader>
            {columns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} icon={headerCell.icon} infoContent={headerCell.infoContent} />)}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
        <Table style={{
        width: "auto"
      }} size="large" errorState={<h1 style={{
        textAlign: "center"
      }}>Error State</h1>} emptyState={<h1 style={{
        textAlign: "center"
      }}>Empty State</h1>} columns={columns}>
          <TableHeader>
            {columns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} icon={headerCell.icon} infoContent={headerCell.infoContent} />)}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </>;
  },
  decorators: [(Story: typeof React.Component) => <Flex align="start" justify="space-between" gap="medium" style={{
    flex: 1
  }}>
        <Story />
      </Flex>],
  name: "Sizes"
}`,...(J=(P=y.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var M,q,G;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const columns: TableColumn[] = [{
      id: "sentOn",
      title: "Sent on",
      width: 150,
      loadingStateType: "medium-text"
    }, {
      id: "subject",
      title: "Subject",
      loadingStateType: "long-text"
    }, {
      id: "sentBy",
      title: "Sent by",
      width: {
        min: 120,
        max: 200
      },
      infoContent: "This is the sender",
      loadingStateType: "circle"
    }, {
      id: "status",
      title: "Status",
      width: 150,
      infoContent: "Info content for the status column",
      loadingStateType: "medium-text"
    }, {
      id: "emailsSent",
      title: "Emails sent",
      width: 150,
      loadingStateType: "medium-text"
    }];
    const data = [{
      id: "1",
      sentOn: "2020-01-01",
      sentBy: "John Doe",
      subject: "Lorem ipsum dolor",
      status: "Sent",
      emailsSent: 100
    }, {
      id: "3",
      sentOn: "2023-03-03",
      sentBy: "Some Person",
      subject: "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
      status: "Sent",
      emailsSent: 999
    }, {
      id: "2",
      sentOn: "2022-02-02",
      sentBy: "Other Name",
      subject: "This is the subject",
      status: "Sent",
      emailsSent: 99
    }];
    return <>
        <Table errorState={<h1 style={{
        textAlign: "center"
      }}>Error State</h1>} emptyState={<h1 style={{
        textAlign: "center"
      }}>Empty State</h1>} columns={columns}>
          <TableHeader>
            {columns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} />)}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
                <TableCell>
                  <TableAvatar text={rowItem.sentBy} />
                </TableCell>
                <TableCell>
                  <Label text={rowItem.status} color="positive" />
                </TableCell>
                <TableCell>{rowItem.emailsSent}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
        <Table errorState={<h1 style={{
        textAlign: "center"
      }}>Error State</h1>} emptyState={<h1 style={{
        textAlign: "center"
      }}>Empty State</h1>} columns={columns} withoutBorder>
          <TableHeader>
            {columns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} />)}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
                <TableCell>
                  <TableAvatar text={rowItem.sentBy} />
                </TableCell>
                <TableCell>
                  <Label text={rowItem.status} color="positive" />
                </TableCell>
                <TableCell>{rowItem.emailsSent}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </>;
  },
  decorators: [(Story: typeof React.Component) => <Flex direction="column" gap={40}>
        <Story />
      </Flex>],
  name: "Borders"
}`,...(G=(q=S.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [tableData, setTableData] = useState(emailTableData);
    const [sorting, setSorting] = useState<{
      [key: string]: "asc" | "desc" | "none";
    }>({});
    const onSort = (columnId: string, sortState: "asc" | "desc" | "none") => {
      setSorting({
        [columnId]: sortState
      });
      setTableData(sort(columnId as keyof (typeof tableData)[number], sortState, tableData));
    };
    return <Table errorState={<h1 style={{
      textAlign: "center"
    }}>Error State</h1>} emptyState={<h1 style={{
      textAlign: "center"
    }}>Empty State</h1>} columns={emailColumns}>
        <TableHeader>
          {emailColumns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} icon={headerCell.icon} infoContent={headerCell.infoContent} onSortClicked={sortState => onSort(headerCell.id, sortState)} sortState={sorting[headerCell.id]} />)}
        </TableHeader>
        <TableBody>
          {tableData.map(rowItem => <TableRow key={rowItem.id}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color="positive" />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          emailTableData,
          emailColumns
        }
      }
    }
  },
  name: "Table Header Functionality"
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Table dataState={{
    isLoading: true
  }} errorState={<h1 style={{
    textAlign: "center"
  }}>Error State</h1>} emptyState={<h1 style={{
    textAlign: "center"
  }}>Empty State</h1>} columns={emailColumns}>
      <TableHeader>
        {emailColumns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} />)}
      </TableHeader>
      <TableBody>
        {emailTableData.map(rowItem => <TableRow key={rowItem.id}>
            <TableCell>{rowItem.sentOn}</TableCell>
            <TableCell>{rowItem.subject}</TableCell>
            <TableCell>
              <TableAvatar text={rowItem.sentBy} />
            </TableCell>
            <TableCell>
              <Label text={rowItem.status} color="positive" />
            </TableCell>
            <TableCell>{rowItem.emailsSent}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          emailTableData,
          emailColumns
        }
      }
    }
  },
  name: "Loading"
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 220,
    width: "100%"
  }}>
      <Table errorState={<h1 style={{
      textAlign: "center"
    }}>Error State</h1>} emptyState={<h1 style={{
      textAlign: "center"
    }}>Empty State</h1>} columns={scrollTableColumns}>
        <TableHeader>
          {scrollTableColumns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} />)}
        </TableHeader>
        <TableBody>
          {scrollTableData.map(rowItem => <TableRow key={rowItem.id}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>
                <Label text={rowItem.priority} color={priorityColumnToLabelColor[rowItem.priority]} />
              </TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color={statusColumnToLabelColor[rowItem.status]} />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          scrollTableColumns,
          scrollTableData,
          priorityColumnToLabelColor,
          statusColumnToLabelColor
        }
      }
    }
  },
  name: "Scroll"
}`,...(ee=($=C.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,le;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const Row = (data: (typeof virtualizedScrollTableData)[number]) => {
      return <TableRow>
          {virtualizedScrollTableColumns.map(column => {
          return <TableCell sticky={column.id === "id"} key={column.id}>
                {data[column.id as keyof typeof data]}
              </TableCell>;
        })}
        </TableRow>;
    };
    const Header = React.useCallback((columns: TableColumn[]) => {
      return <TableHeader>
          {columns.map((cell, index) => <TableHeaderCell sticky={index === 0} key={index} {...cell} />)}
        </TableHeader>;
    }, []);
    return <Table errorState={<h1 style={{
      textAlign: "center"
    }}>Error State</h1>} emptyState={<h1 style={{
      textAlign: "center"
    }}>Empty State</h1>} columns={virtualizedScrollTableColumns} style={{
      height: 250
    }}>
        <TableVirtualizedBody rowRenderer={Row} items={virtualizedScrollTableData} columns={virtualizedScrollTableColumns} headerRenderer={Header} />
      </Table>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          virtualizedScrollTableColumns,
          virtualizedScrollTableData
        }
      }
    }
  },
  name: "Virtualized Scroll"
}`,...(le=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ae,se,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    return <Table errorState={<h1 style={{
      textAlign: "center"
    }}>Error State</h1>} emptyState={<h1 style={{
      textAlign: "center"
    }}>Empty State</h1>} columns={stickyColumns}>
        <TableHeader>
          {stickyColumns.map((headerCell, index) => <TableHeaderCell sticky={index === 0} key={index} title={headerCell.title} />)}
        </TableHeader>
        <TableBody>
          {stickyTableData.map(rowItem => <TableRow key={rowItem.id}>
              <TableCell sticky>{rowItem.projectName}</TableCell>
              <TableCell>
                <Label text={rowItem.status} color={statusColumnToLabelColor[rowItem.status]} />
              </TableCell>
              <TableCell>{rowItem.description}</TableCell>
              <TableCell>{rowItem.createdOn}</TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
              <TableCell>{rowItem.owner}</TableCell>
              <TableCell>{rowItem.priority}</TableCell>
              <TableCell>{rowItem.category}</TableCell>
              <TableCell>{rowItem.dueDate}</TableCell>
              <TableCell>{rowItem.comments}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          stickyColumns,
          stickyTableData,
          statusColumnToLabelColor
        }
      }
    }
  },
  name: "Sticky column"
}`,...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,oe,de;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const shouldRowBeHighlighted = (rowItem: (typeof emailTableData)[number]) => {
      return rowItem.id === "2";
    };
    return <Table errorState={<h1 style={{
      textAlign: "center"
    }}>Error State</h1>} emptyState={<h1 style={{
      textAlign: "center"
    }}>Empty State</h1>} columns={emailColumns}>
        <TableHeader>
          {emailColumns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} />)}
        </TableHeader>
        <TableBody>
          {emailTableData.map(rowItem => <TableRow key={rowItem.id} highlighted={shouldRowBeHighlighted(rowItem)}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color="positive" />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          emailColumns,
          emailTableData
        }
      }
    }
  },
  name: "Highlighted row"
}`,...(de=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const ye=["Overview","Sizes","Borders","TableHeaderFunctionality","Loading","Scroll","VirtualizedScroll","StickyColumn","HighlightedRow"],fe=Object.freeze(Object.defineProperty({__proto__:null,Borders:S,HighlightedRow:E,Loading:j,Overview:x,Scroll:C,Sizes:y,StickyColumn:w,TableHeaderFunctionality:p,VirtualizedScroll:g,__namedExportsOrder:ye,default:xe},Symbol.toStringTag,{value:"Module"}));export{S as B,E as H,j as L,x as O,y as S,fe as T,g as V,p as a,C as b,w as c};
