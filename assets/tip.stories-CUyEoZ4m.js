import{j as i}from"./jsx-runtime-lwGtIXvq.js";import{T as e}from"./tip-DachXx9K.js";import{F as o}from"./Flex-wmhmkp5A.js";import{L as y}from"./Link-jLiiF1iI.js";const g={component:e,title:"Storybook Blocks/Tip"},s={args:{children:i.jsxs(i.Fragment,{children:["This tip shows some helpful information. It can also show ",i.jsx(y,{text:"links",href:"#",inlineText:!0})," to more information"]})}},r={args:{title:"Completed",children:"This tip shows some helpful information.",emoji:"✅"}},t={render:()=>i.jsxs(o,{gap:o.gaps.SMALL,direction:o.directions.COLUMN,align:o.align.START,children:[i.jsx(e,{type:e.types.PRIMARY,children:"This is a primary tip."}),i.jsx(e,{type:e.types.SUCCESS,children:"This is a success tip."}),i.jsx(e,{type:e.types.WARNING,children:"This is a warning tip."}),i.jsx(e,{type:e.types.DANGER,children:"This is a danger tip."}),i.jsx(e,{type:e.types.DARK,children:"This is a dark tip."})]})};var p,n,a;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        This tip shows some helpful information. It can also show <Link text="links" href="#" inlineText /> to more
        information
      </>
  }
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Completed',
    children: 'This tip shows some helpful information.',
    emoji: '✅'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var T,d,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Flex gap={Flex.gaps.SMALL} direction={Flex.directions.COLUMN} align={Flex.align.START}>
      <Tip type={Tip.types.PRIMARY}>This is a primary tip.</Tip>
      <Tip type={Tip.types.SUCCESS}>This is a success tip.</Tip>
      <Tip type={Tip.types.WARNING}>This is a warning tip.</Tip>
      <Tip type={Tip.types.DANGER}>This is a danger tip.</Tip>
      <Tip type={Tip.types.DARK}>This is a dark tip.</Tip>
    </Flex>
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const x=["Overview","Emoji","Types"],R=Object.freeze(Object.defineProperty({__proto__:null,Emoji:r,Overview:s,Types:t,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{r as E,s as O,R as T,t as a};
