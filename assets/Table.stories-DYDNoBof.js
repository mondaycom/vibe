import{R as e,r as H}from"./index-Hemj67b4.js";import{e as l,d as i,c as d,b as m,a as c,T as o}from"./TableBody-DwDc3O2l.js";import{T as ce}from"./TableVirtualizedBody-CsPLReEj.js";import{a as b}from"./Label-DY0EIcZF.js";import{F as de}from"./Flex-DIvs4XZj.js";import{f as T,g as u,h as y,s as v,p as R,i as D,j as A,v as L,k as f,l as I,m as O,n as be}from"./Table.stories.helpers-DzWtlXG6.js";import{c as Te}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const z=Te({component:o,ignoreControlsPropNamesArray:["children","errorState","emptyState"]}),ye={title:"Components/Table",component:o,subcomponents:{TableHeader:c,TableHeaderCell:m,TableBody:d,TableRow:i,TableCell:l,TableVirtualizedBody:ce},argTypes:z.argTypes,decorators:z.decorators,parameters:{docs:{liveEdit:{scope:{TableAvatar:T}}}}},S={render:()=>{const t=[{id:"sentOn",title:"Sent on",width:150,loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"},{id:"sentBy",title:"Sent by",width:{min:120,max:200},infoContent:"This is the sender",loadingStateType:"circle"},{id:"status",title:"Status",width:150,infoContent:"Info content for the status column",loadingStateType:"medium-text"},{id:"emailsSent",title:"Emails sent",width:150,loadingStateType:"medium-text"}],a=[{id:"1",sentOn:"2020-01-01",sentBy:"John Doe",subject:"Lorem ipsum dolor",status:"Sent",emailsSent:100},{id:"3",sentOn:"2023-03-03",sentBy:"Some Person",subject:"This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",status:"Sent",emailsSent:999},{id:"2",sentOn:"2022-02-02",sentBy:"Other Name",subject:"This is the subject",status:"Sent",emailsSent:99}];return e.createElement(o,{errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:t},e.createElement(c,null,t.map((n,r)=>e.createElement(m,{key:r,title:n.title}))),e.createElement(d,null,a.map(n=>e.createElement(i,{key:n.id},e.createElement(l,null,n.sentOn),e.createElement(l,null,n.subject),e.createElement(l,null,e.createElement(T,{text:n.sentBy})),e.createElement(l,null,e.createElement(b,{text:n.status,color:"positive"})),e.createElement(l,null,n.emailsSent)))))},parameters:{docs:{liveEdit:{isEnabled:!1}}},name:"Overview"},p={render:()=>{const t=[{id:"sentOn",title:"Sent on",loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"}],a=[{id:1,sentOn:"2020-01-01",subject:"Lorem ipsum dolor"},{id:2,sentOn:"2022-02-02",subject:"This is the subject"}];return e.createElement(e.Fragment,null,e.createElement(o,{style:{width:"auto"},size:"small",errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:t},e.createElement(c,null,t.map((n,r)=>e.createElement(m,{key:r,title:n.title,icon:n.icon,infoContent:n.infoContent}))),e.createElement(d,null,a.map(n=>e.createElement(i,{key:n.id},e.createElement(l,null,n.sentOn),e.createElement(l,null,n.subject))))),e.createElement(o,{style:{width:"auto"},size:"medium",errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:t},e.createElement(c,null,t.map((n,r)=>e.createElement(m,{key:r,title:n.title,icon:n.icon,infoContent:n.infoContent}))),e.createElement(d,null,a.map(n=>e.createElement(i,{key:n.id},e.createElement(l,null,n.sentOn),e.createElement(l,null,n.subject))))),e.createElement(o,{style:{width:"auto"},size:"large",errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:t},e.createElement(c,null,t.map((n,r)=>e.createElement(m,{key:r,title:n.title,icon:n.icon,infoContent:n.infoContent}))),e.createElement(d,null,a.map(n=>e.createElement(i,{key:n.id},e.createElement(l,null,n.sentOn),e.createElement(l,null,n.subject))))))},decorators:[t=>e.createElement(de,{align:"start",justify:"space-between",gap:"medium",style:{flex:1}},e.createElement(t,null))],name:"Sizes"},h={render:()=>{const t=[{id:"sentOn",title:"Sent on",width:150,loadingStateType:"medium-text"},{id:"subject",title:"Subject",loadingStateType:"long-text"},{id:"sentBy",title:"Sent by",width:{min:120,max:200},infoContent:"This is the sender",loadingStateType:"circle"},{id:"status",title:"Status",width:150,infoContent:"Info content for the status column",loadingStateType:"medium-text"},{id:"emailsSent",title:"Emails sent",width:150,loadingStateType:"medium-text"}],a=[{id:"1",sentOn:"2020-01-01",sentBy:"John Doe",subject:"Lorem ipsum dolor",status:"Sent",emailsSent:100},{id:"3",sentOn:"2023-03-03",sentBy:"Some Person",subject:"This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",status:"Sent",emailsSent:999},{id:"2",sentOn:"2022-02-02",sentBy:"Other Name",subject:"This is the subject",status:"Sent",emailsSent:99}];return e.createElement(e.Fragment,null,e.createElement(o,{errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:t},e.createElement(c,null,t.map((n,r)=>e.createElement(m,{key:r,title:n.title}))),e.createElement(d,null,a.map(n=>e.createElement(i,{key:n.id},e.createElement(l,null,n.sentOn),e.createElement(l,null,n.subject),e.createElement(l,null,e.createElement(T,{text:n.sentBy})),e.createElement(l,null,e.createElement(b,{text:n.status,color:"positive"})),e.createElement(l,null,n.emailsSent))))),e.createElement(o,{errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:t,withoutBorder:!0},e.createElement(c,null,t.map((n,r)=>e.createElement(m,{key:r,title:n.title}))),e.createElement(d,null,a.map(n=>e.createElement(i,{key:n.id},e.createElement(l,null,n.sentOn),e.createElement(l,null,n.subject),e.createElement(l,null,e.createElement(T,{text:n.sentBy})),e.createElement(l,null,e.createElement(b,{text:n.status,color:"positive"})),e.createElement(l,null,n.emailsSent))))))},decorators:[t=>e.createElement(de,{direction:"column",gap:40},e.createElement(t,null))],name:"Borders"},E={render:()=>{const[t,a]=H.useState(y),[n,r]=H.useState({}),k=(s,B)=>{r({[s]:B}),a(be(s,B,t))};return e.createElement(o,{errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:u},e.createElement(c,null,u.map((s,B)=>e.createElement(m,{key:B,title:s.title,icon:s.icon,infoContent:s.infoContent,onSortClicked:ue=>k(s.id,ue),sortState:n[s.id]}))),e.createElement(d,null,t.map(s=>e.createElement(i,{key:s.id},e.createElement(l,null,s.sentOn),e.createElement(l,null,s.subject),e.createElement(l,null,e.createElement(T,{text:s.sentBy})),e.createElement(l,null,e.createElement(b,{text:s.status,color:"positive"})),e.createElement(l,null,s.emailsSent)))))},parameters:{docs:{liveEdit:{scope:{emailTableData:y,emailColumns:u}}}},name:"Table Header Functionality"},C={render:()=>e.createElement(o,{dataState:{isLoading:!0},errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:u},e.createElement(c,null,u.map((t,a)=>e.createElement(m,{key:a,title:t.title}))),e.createElement(d,null,y.map(t=>e.createElement(i,{key:t.id},e.createElement(l,null,t.sentOn),e.createElement(l,null,t.subject),e.createElement(l,null,e.createElement(T,{text:t.sentBy})),e.createElement(l,null,e.createElement(b,{text:t.status,color:"positive"})),e.createElement(l,null,t.emailsSent))))),parameters:{docs:{liveEdit:{scope:{emailTableData:y,emailColumns:u}}}},name:"Loading"},g={render:()=>e.createElement("div",{style:{height:220,width:"100%"}},e.createElement(o,{errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:A},e.createElement(c,null,A.map((t,a)=>e.createElement(m,{key:a,title:t.title}))),e.createElement(d,null,D.map(t=>e.createElement(i,{key:t.id},e.createElement(l,null,t.sentOn),e.createElement(l,null,e.createElement(b,{text:t.priority,color:R[t.priority]})),e.createElement(l,null,t.subject),e.createElement(l,null,e.createElement(T,{text:t.sentBy})),e.createElement(l,null,e.createElement(b,{text:t.status,color:v[t.status]})),e.createElement(l,null,t.emailsSent)))))),parameters:{docs:{liveEdit:{scope:{scrollTableColumns:A,scrollTableData:D,priorityColumnToLabelColor:R,statusColumnToLabelColor:v}}}},name:"Scroll"},x={render:()=>{const t=n=>e.createElement(i,null,f.map(r=>e.createElement(l,{sticky:r.id==="id",key:r.id},n[r.id]))),a=e.useCallback(n=>e.createElement(c,null,n.map((r,k)=>e.createElement(m,{sticky:k===0,key:k,...r}))),[]);return e.createElement(o,{errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:f,style:{height:250}},e.createElement(ce,{rowRenderer:t,items:L,columns:f,headerRenderer:a}))},parameters:{docs:{liveEdit:{scope:{virtualizedScrollTableColumns:f,virtualizedScrollTableData:L}}}},name:"Virtualized Scroll"},w={render:()=>e.createElement(o,{errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:O},e.createElement(c,null,O.map((t,a)=>e.createElement(m,{sticky:a===0,key:a,title:t.title}))),e.createElement(d,null,I.map(t=>e.createElement(i,{key:t.id},e.createElement(l,{sticky:!0},t.projectName),e.createElement(l,null,e.createElement(b,{text:t.status,color:v[t.status]})),e.createElement(l,null,t.description),e.createElement(l,null,t.createdOn),e.createElement(l,null,t.emailsSent),e.createElement(l,null,t.owner),e.createElement(l,null,t.priority),e.createElement(l,null,t.category),e.createElement(l,null,t.dueDate),e.createElement(l,null,t.comments))))),parameters:{docs:{liveEdit:{scope:{stickyColumns:O,stickyTableData:I,statusColumnToLabelColor:v}}}},name:"Sticky column"},j={render:()=>{const t=a=>a.id==="2";return e.createElement(o,{errorState:e.createElement("h1",{style:{textAlign:"center"}},"Error State"),emptyState:e.createElement("h1",{style:{textAlign:"center"}},"Empty State"),columns:u},e.createElement(c,null,u.map((a,n)=>e.createElement(m,{key:n,title:a.title}))),e.createElement(d,null,y.map(a=>e.createElement(i,{key:a.id,highlighted:t(a)},e.createElement(l,null,a.sentOn),e.createElement(l,null,a.subject),e.createElement(l,null,e.createElement(T,{text:a.sentBy})),e.createElement(l,null,e.createElement(b,{text:a.status,color:"positive"})),e.createElement(l,null,a.emailsSent)))))},parameters:{docs:{liveEdit:{scope:{emailColumns:u,emailTableData:y}}}},name:"Highlighted row"};var F,N,V;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(N=S.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,P,J;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(P=p.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var M,q,G;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,U;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,le;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ae,re,se;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,me;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(me=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};const Se=["Overview","Sizes","Borders","TableHeaderFunctionality","Loading","Scroll","VirtualizedScroll","StickyColumn","HighlightedRow"],je=Object.freeze(Object.defineProperty({__proto__:null,Borders:h,HighlightedRow:j,Loading:C,Overview:S,Scroll:g,Sizes:p,StickyColumn:w,TableHeaderFunctionality:E,VirtualizedScroll:x,__namedExportsOrder:Se,default:ye},Symbol.toStringTag,{value:"Module"}));export{h as B,j as H,C as L,S as O,p as S,je as T,x as V,E as a,g as b,w as c};
