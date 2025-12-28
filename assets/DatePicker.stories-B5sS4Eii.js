import{j as a}from"./jsx-runtime-lwGtIXvq.js";import{r as D}from"./index-CTZeEbLr.js";import{h as m,D as n}from"./DatePicker-CY6B5HXP.js";import{c as E}from"./createStoryMetaSettingsDecorator-ByqFV25U.js";import{D as p}from"./DialogContentContainer-BeKFb57x.js";const c={startDate:m("2023-05-01"),endDate:m("2023-05-03")},u=E({component:n,actionPropsArray:["onPickDate"]}),I={title:"Components/DatePicker [Deprecated]",component:n,argTypes:u.argTypes,decorators:u.decorators,parameters:{docs:{liveEdit:{scope:{MOCK_INITIAL_DATE:c}}}}},O=t=>{const[r,e]=D.useState(c.startDate);return a.jsx(p,{children:a.jsx(n,{id:"overview-date-picker","data-testid":"date-picker",date:r,onPickDate:j=>e(j),...t})})},s={render:O.bind({}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>{const[t,r]=D.useState(c.startDate);return a.jsx(p,{children:a.jsx(n,{id:"single-day-picker","data-testid":"date-picker",date:t,onPickDate:e=>r(e)})})},name:"Single Day"},i={render:()=>{const[t,r]=D.useState(c);return a.jsx(p,{children:a.jsx(n,{id:"date-range-picker",date:t.startDate,endDate:t.endDate,range:!0,"data-testid":"date-picker",onPickDate:e=>r(e)})})},name:"Date Range"},d={render:()=>{const[t,r]=D.useState(c.startDate);return a.jsx(p,{children:a.jsx(n,{id:"custom-phrases-picker","data-testid":"date-picker",date:t,onPickDate:e=>r(e),phrases:{chooseAvailableDate:({date:e})=>`This is the date you are about to choose: ${e}`}})})},name:"With Custom Phrases"};var l,g,k;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DatePickerTemplate.bind({}),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var h,C,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);
    return <DialogContentContainer>
        <DatePicker id="single-day-picker" data-testid="date-picker" date={date} onPickDate={(d: Moment) => setDate(d)} />
      </DialogContentContainer>;
  },
  name: "Single Day"
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var S,v,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState(MOCK_INITIAL_DATE);
    return <DialogContentContainer>
        <DatePicker id="date-range-picker" date={date.startDate} endDate={date.endDate} range data-testid="date-picker" onPickDate={(d: RangeDate) => setDate(d)} />
      </DialogContentContainer>;
  },
  name: "Date Range"
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var _,y,x;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);
    return <DialogContentContainer>
        <DatePicker id="custom-phrases-picker" data-testid="date-picker" date={date} onPickDate={(d: Moment) => setDate(d)} phrases={{
        chooseAvailableDate: ({
          date
        }) => \`This is the date you are about to choose: \${date}\`
      }} />
      </DialogContentContainer>;
  },
  name: "With Custom Phrases"
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const b=["Overview","SingleDay","DateRange","WithCustomPhrases"],K=Object.freeze(Object.defineProperty({__proto__:null,DateRange:i,Overview:s,SingleDay:o,WithCustomPhrases:d,__namedExportsOrder:b,default:I},Symbol.toStringTag,{value:"Module"}));export{K as D,s as O,o as S,i as a};
