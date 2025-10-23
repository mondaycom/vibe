import{j as e}from"./jsx-runtime-lwGtIXvq.js";const c=({data:a})=>e.jsx("tr",{children:a.map((o,t)=>e.jsx("td",{children:o},t))}),i=({item:a})=>e.jsx("th",{title:a,children:a}),p="_tableWrapper_1pov0_1",b="_table_1pov0_1",r={tableWrapper:p,table:b},m=({theadData:a,tbodyData:o})=>e.jsx("div",{className:r.tableWrapper,children:e.jsxs("table",{className:r.table,children:[e.jsx("thead",{children:e.jsx("tr",{children:a.map(t=>e.jsx(i,{item:t},t))})}),e.jsx("tbody",{children:o.map(t=>e.jsx(c,{data:t.items},t.id))})]})}),j={component:m,title:"Storybook Blocks/TokenTable"},s={args:{theadData:["Token","Value"],tbodyData:[{id:"1",items:["--token-1","#111"]},{id:"2",items:["--token-2","#222"]}]}};var n,l,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    theadData: ['Token', 'Value'],
    tbodyData: [{
      id: '1',
      items: ['--token-1', '#111']
    }, {
      id: '2',
      items: ['--token-2', '#222']
    }]
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const x=["Overview"],_=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{s as O,_ as T};
