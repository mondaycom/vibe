import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as k,R as he}from"./index-CTZeEbLr.js";import{c as ue}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{f as u,g as b,h as x,s as A,p as R,i as D,j as O,v as L,k as f,l as I,m as H,n as Te}from"./Table.stories.helpers-hEV7AQrl.js";import{T as ce}from"./TableVirtualizedBody-9Sn1adTE.js";import{e as n,d as o,c as m,b as d,a as c,T as i}from"./TableBody-DDoG4yM4.js";import{L as h}from"./Label-C2WeSdrM.js";import{F as me}from"./Flex-Bimzf4jb.js";const z=ue({component:i,ignoreControlsPropNamesArray:["children","errorState","emptyState"]}),xe={title:"Components/Table",component:i,subcomponents:{TableHeader:c,TableHeaderCell:d,TableBody:m,TableRow:o,TableCell:n,TableVirtualizedBody:ce},argTypes:z.argTypes,decorators:z.decorators,parameters:{docs:{liveEdit:{scope:{TableAvatar:u}}}}},y={render:t=>{const a=[{id:"sentOn",title:"Sent on",width:150,loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"},{id:"sentBy",title:"Sent by",width:{min:120,max:200},infoContent:"This is the sender",loadingStateType:"circle"},{id:"status",title:"Status",width:150,infoContent:"Info content for the status column",loadingStateType:"medium-text"},{id:"emailsSent",title:"Emails sent",width:150,loadingStateType:"medium-text"}],l=[{id:"1",sentOn:"2020-01-01",sentBy:"John Doe",subject:"Lorem ipsum dolor",status:"Sent",emailsSent:100},{id:"3",sentOn:"2023-03-03",sentBy:"Some Person",subject:"This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",status:"Sent",emailsSent:999},{id:"2",sentOn:"2022-02-02",sentBy:"Other Name",subject:"This is the subject",status:"Sent",emailsSent:99}];return e.jsxs(i,{id:"overview-table",...t,errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:a,children:[e.jsx(c,{children:a.map((s,T)=>e.jsx(d,{title:s.title},T))}),e.jsx(m,{children:l.map(s=>e.jsxs(o,{children:[e.jsx(n,{children:s.sentOn}),e.jsx(n,{children:s.subject}),e.jsx(n,{children:e.jsx(u,{text:s.sentBy})}),e.jsx(n,{children:e.jsx(h,{text:s.status,color:"positive"})}),e.jsx(n,{children:s.emailsSent})]},s.id))})]})},parameters:{docs:{liveEdit:{isEnabled:!1}}},name:"Overview"},S={render:()=>{const t=[{id:"sentOn",title:"Sent on",loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"}],a=[{id:1,sentOn:"2020-01-01",subject:"Lorem ipsum dolor"},{id:2,sentOn:"2022-02-02",subject:"This is the subject"}];return e.jsxs(e.Fragment,{children:[e.jsxs(i,{id:"sizes-small-table",style:{width:"auto"},size:"small",errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((l,s)=>e.jsx(d,{title:l.title,icon:l.icon,infoContent:l.infoContent},s))}),e.jsx(m,{children:a.map(l=>e.jsxs(o,{children:[e.jsx(n,{children:l.sentOn}),e.jsx(n,{children:l.subject})]},l.id))})]}),e.jsxs(i,{style:{width:"auto"},size:"medium",errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((l,s)=>e.jsx(d,{title:l.title,icon:l.icon,infoContent:l.infoContent},s))}),e.jsx(m,{children:a.map(l=>e.jsxs(o,{children:[e.jsx(n,{children:l.sentOn}),e.jsx(n,{children:l.subject})]},l.id))})]}),e.jsxs(i,{style:{width:"auto"},size:"large",errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((l,s)=>e.jsx(d,{title:l.title,icon:l.icon,infoContent:l.infoContent},s))}),e.jsx(m,{children:a.map(l=>e.jsxs(o,{children:[e.jsx(n,{children:l.sentOn}),e.jsx(n,{children:l.subject})]},l.id))})]})]})},decorators:[t=>e.jsx(me,{align:"start",justify:"space-between",gap:"medium",style:{flex:1},children:e.jsx(t,{})})],name:"Sizes"},p={render:()=>{const t=[{id:"sentOn",title:"Sent on",width:150,loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"},{id:"sentBy",title:"Sent by",width:{min:120,max:200},infoContent:"This is the sender",loadingStateType:"circle"},{id:"status",title:"Status",width:150,infoContent:"Info content for the status column",loadingStateType:"medium-text"},{id:"emailsSent",title:"Emails sent",width:150,loadingStateType:"medium-text"}],a=[{id:"1",sentOn:"2020-01-01",sentBy:"John Doe",subject:"Lorem ipsum dolor",status:"Sent",emailsSent:100},{id:"3",sentOn:"2023-03-03",sentBy:"Some Person",subject:"This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",status:"Sent",emailsSent:999},{id:"2",sentOn:"2022-02-02",sentBy:"Other Name",subject:"This is the subject",status:"Sent",emailsSent:99}];return e.jsxs(e.Fragment,{children:[e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,children:[e.jsx(c,{children:t.map((l,s)=>e.jsx(d,{title:l.title},s))}),e.jsx(m,{children:a.map(l=>e.jsxs(o,{children:[e.jsx(n,{children:l.sentOn}),e.jsx(n,{children:l.subject}),e.jsx(n,{children:e.jsx(u,{text:l.sentBy})}),e.jsx(n,{children:e.jsx(h,{text:l.status,color:"positive"})}),e.jsx(n,{children:l.emailsSent})]},l.id))})]}),e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:t,withoutBorder:!0,children:[e.jsx(c,{children:t.map((l,s)=>e.jsx(d,{title:l.title},s))}),e.jsx(m,{children:a.map(l=>e.jsxs(o,{children:[e.jsx(n,{children:l.sentOn}),e.jsx(n,{children:l.subject}),e.jsx(n,{children:e.jsx(u,{text:l.sentBy})}),e.jsx(n,{children:e.jsx(h,{text:l.status,color:"positive"})}),e.jsx(n,{children:l.emailsSent})]},l.id))})]})]})},decorators:[t=>e.jsx(me,{direction:"column",gap:40,children:e.jsx(t,{})})],name:"Borders"},j={render:()=>{const[t,a]=k.useState(x),[l,s]=k.useState({}),T=(r,v)=>{s({[r]:v}),a(Te(r,v,t))};return e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:b,children:[e.jsx(c,{children:b.map((r,v)=>e.jsx(d,{title:r.title,icon:r.icon,infoContent:r.infoContent,onSortClicked:be=>T(r.id,be),sortState:l[r.id]},v))}),e.jsx(m,{children:t.map(r=>e.jsxs(o,{children:[e.jsx(n,{children:r.sentOn}),e.jsx(n,{children:r.subject}),e.jsx(n,{children:e.jsx(u,{text:r.sentBy})}),e.jsx(n,{children:e.jsx(h,{text:r.status,color:"positive"})}),e.jsx(n,{children:r.emailsSent})]},r.id))})]})},parameters:{docs:{liveEdit:{scope:{emailTableData:x,emailColumns:b}}}},name:"Table Header Functionality"},C={render:()=>e.jsxs(i,{dataState:{isLoading:!0},errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:b,children:[e.jsx(c,{children:b.map((t,a)=>e.jsx(d,{title:t.title},a))}),e.jsx(m,{children:x.map(t=>e.jsxs(o,{children:[e.jsx(n,{children:t.sentOn}),e.jsx(n,{children:t.subject}),e.jsx(n,{children:e.jsx(u,{text:t.sentBy})}),e.jsx(n,{children:e.jsx(h,{text:t.status,color:"positive"})}),e.jsx(n,{children:t.emailsSent})]},t.id))})]}),parameters:{docs:{liveEdit:{scope:{emailTableData:x,emailColumns:b}}}},name:"Loading"},g={render:()=>e.jsx("div",{style:{height:220,width:"100%"},children:e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:O,children:[e.jsx(c,{children:O.map((t,a)=>e.jsx(d,{title:t.title},a))}),e.jsx(m,{children:D.map(t=>e.jsxs(o,{children:[e.jsx(n,{children:t.sentOn}),e.jsx(n,{children:e.jsx(h,{text:t.priority,color:R[t.priority]})}),e.jsx(n,{children:t.subject}),e.jsx(n,{children:e.jsx(u,{text:t.sentBy})}),e.jsx(n,{children:e.jsx(h,{text:t.status,color:A[t.status]})}),e.jsx(n,{children:t.emailsSent})]},t.id))})]})}),parameters:{docs:{liveEdit:{scope:{scrollTableColumns:O,scrollTableData:D,priorityColumnToLabelColor:R,statusColumnToLabelColor:A}}}},name:"Scroll"},w={render:()=>{const t=l=>e.jsx(o,{children:f.map(s=>e.jsx(n,{sticky:s.id==="id",children:l[s.id]},s.id))}),a=he.useCallback(l=>e.jsx(c,{children:l.map((s,T)=>e.jsx(d,{sticky:T===0,...s},T))}),[]);return e.jsx(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:f,style:{height:250},children:e.jsx(ce,{rowRenderer:t,items:L,columns:f,headerRenderer:a})})},parameters:{docs:{liveEdit:{scope:{virtualizedScrollTableColumns:f,virtualizedScrollTableData:L}}}},name:"Virtualized Scroll"},E={render:()=>e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:H,children:[e.jsx(c,{children:H.map((t,a)=>e.jsx(d,{sticky:a===0,title:t.title},a))}),e.jsx(m,{children:I.map(t=>e.jsxs(o,{children:[e.jsx(n,{sticky:!0,children:t.projectName}),e.jsx(n,{children:e.jsx(h,{text:t.status,color:A[t.status]})}),e.jsx(n,{children:t.description}),e.jsx(n,{children:t.createdOn}),e.jsx(n,{children:t.emailsSent}),e.jsx(n,{children:t.owner}),e.jsx(n,{children:t.priority}),e.jsx(n,{children:t.category}),e.jsx(n,{children:t.dueDate}),e.jsx(n,{children:t.comments})]},t.id))})]}),parameters:{docs:{liveEdit:{scope:{stickyColumns:H,stickyTableData:I,statusColumnToLabelColor:A}}}},name:"Sticky column"},B={render:()=>{const t=a=>a.id==="2";return e.jsxs(i,{errorState:e.jsx("h1",{style:{textAlign:"center"},children:"Error State"}),emptyState:e.jsx("h1",{style:{textAlign:"center"},children:"Empty State"}),columns:b,children:[e.jsx(c,{children:b.map((a,l)=>e.jsx(d,{title:a.title},l))}),e.jsx(m,{children:x.map(a=>e.jsxs(o,{highlighted:t(a),children:[e.jsx(n,{children:a.sentOn}),e.jsx(n,{children:a.subject}),e.jsx(n,{children:e.jsx(u,{text:a.sentBy})}),e.jsx(n,{children:e.jsx(h,{text:a.status,color:"positive"})}),e.jsx(n,{children:a.emailsSent})]},a.id))})]})},parameters:{docs:{liveEdit:{scope:{emailColumns:b,emailTableData:x}}}},name:"Highlighted row"};var F,N,P;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: TableProps) => {
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
    return <Table id="overview-table" {...args} errorState={<h1 style={{
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
}`,...(P=(N=y.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var V,_,J;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        <Table id="sizes-small-table" style={{
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
}`,...(J=(_=S.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var M,q,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,U;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,le;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ae,se,re;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(se=E.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,oe,de;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const ye=["Overview","Sizes","Borders","TableHeaderFunctionality","Loading","Scroll","VirtualizedScroll","StickyColumn","HighlightedRow"],ve=Object.freeze(Object.defineProperty({__proto__:null,Borders:p,HighlightedRow:B,Loading:C,Overview:y,Scroll:g,Sizes:S,StickyColumn:E,TableHeaderFunctionality:j,VirtualizedScroll:w,__namedExportsOrder:ye,default:xe},Symbol.toStringTag,{value:"Module"}));export{p as B,B as H,C as L,y as O,S,ve as T,w as V,j as a,g as b,E as c};
