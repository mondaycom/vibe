import{r as s,R as e}from"./index-Hemj67b4.js";import{M as n}from"./MultiStepIndicator-DkyKE_AI.js";import{r as j}from"./createComponentTemplate-Y0VTmW_y.js";import{t as x}from"./Upgrade-Jax58DJ-.js";const H={title:"Components/MultiStepIndicator",component:n},W=j(n),i={render:W.bind({}),name:"Overview",args:{steps:[{key:"FULFILLED",status:"fulfilled",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"},{key:"PENDING",status:"pending",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"},{key:"PENDING-2",status:"pending",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"}]},parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>{const t=s.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.createElement("div",null,"Vertical",e.createElement(n,{textPlacement:"vertical",steps:t}),"Horizontal",e.createElement(n,{steps:t}))}},r={render:()=>{const t=s.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.createElement("div",null,"Primary",e.createElement(n,{steps:t,type:"primary"}),"Success",e.createElement(n,{steps:t,type:"success"}),"Danger",e.createElement(n,{steps:t,type:"danger"}),"Dark",e.createElement(n,{steps:t,type:"dark"}))}},a={render:()=>{const t=s.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending",subtitleText:"Pending subtitle"}],[]);return e.createElement("div",null,"Regular",e.createElement(n,{steps:t,size:"regular"}),"Compact",e.createElement(n,{steps:t,size:"compact"}))}},u={render:()=>{const t=s.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.createElement("div",null,"Default (check)",e.createElement(n,{steps:t}),"Number instead of icon",e.createElement(n,{steps:t,isFulfilledStepDisplayNumber:!0}),"Custom",e.createElement(n,{steps:t,fulfilledStepIcon:x}))},parameters:{docs:{liveEdit:{scope:{Upgrade:x}}}}},p={render:()=>{const t=s.useMemo(()=>[{key:"PENDING",status:"pending",titleText:"First step title",subtitleText:"First subtitle"},{key:"PENDING-2",status:"pending",titleText:"Second step title",subtitleText:"Second subtitle"},{key:"PENDING-3",status:"pending",titleText:"Third step title",subtitleText:"Third subtitle"}],[]),[z,V]=s.useState(t);return s.useEffect(()=>{const O=c=>{const o=c.findIndex(R=>R.status!=="fulfilled");if(o===-1)return t;const T=[...c],m=T[o];return m.status==="pending"?T[o]={...m,status:"active"}:T[o]={...m,status:"fulfilled"},T},_=setInterval(()=>{V(c=>O(c))},2e3);return()=>{clearInterval(_)}},[t]),e.createElement(n,{steps:z})}},d={render:()=>{const t=s.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Step 1",subtitleText:"Learn how to use monday CRM"},{key:"PENDING",status:"pending",titleText:"Step 2",subtitleText:"Integrate your email"},{key:"PENDING-3",status:"pending",titleText:"Step 3",subtitleText:"Import your data"}],[]);return e.createElement(n,{steps:t,textPlacement:"vertical"})}};var S,b,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: multiStepIndicatorTemplate.bind({}),
  name: "Overview",
  args: {
    steps: [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Everything you can do with Monday",
      subtitleText: "Subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Everything you can do with Monday",
      subtitleText: "Subtitle"
    }, {
      key: "PENDING-2",
      status: "pending",
      titleText: "Everything you can do with Monday",
      subtitleText: "Subtitle"
    }]
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var I,f,E;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Fulfilled title",
      subtitleText: "Fulfilled subtitle"
    }, {
      key: "ACTIVE",
      status: "active",
      titleText: "Active title",
      subtitleText: "Active subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Pending title",
      subtitleText: "Pending subtitle"
    }], []);
    return <div>
        Vertical
        <MultiStepIndicator textPlacement="vertical" steps={steps} />
        Horizontal
        <MultiStepIndicator steps={steps} />
      </div>;
  }
}`,...(E=(f=l.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var g,v,N;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Fulfilled title",
      subtitleText: "Fulfilled subtitle"
    }, {
      key: "ACTIVE",
      status: "active",
      titleText: "Active title",
      subtitleText: "Active subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Pending title",
      subtitleText: "Pending subtitle"
    }], []);
    return <div>
        Primary
        <MultiStepIndicator steps={steps} type="primary" />
        Success
        <MultiStepIndicator steps={steps} type="success" />
        Danger
        <MultiStepIndicator steps={steps} type="danger" />
        Dark
        <MultiStepIndicator steps={steps} type="dark" />
      </div>;
  }
}`,...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var F,k,P;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Fulfilled title",
      subtitleText: "Fulfilled subtitle"
    }, {
      key: "ACTIVE",
      status: "active",
      titleText: "Active title",
      subtitleText: "Active subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Pending",
      subtitleText: "Pending subtitle"
    }], []);
    return <div>
        Regular
        <MultiStepIndicator steps={steps} size="regular" />
        Compact
        <MultiStepIndicator steps={steps} size="compact" />
      </div>;
  }
}`,...(P=(k=a.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var D,M,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Fulfilled title",
      subtitleText: "Fulfilled subtitle"
    }, {
      key: "ACTIVE",
      status: "active",
      titleText: "Active title",
      subtitleText: "Active subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Pending title",
      subtitleText: "Pending subtitle"
    }], []);
    return <div>
        Default (check)
        <MultiStepIndicator steps={steps} />
        Number instead of icon
        <MultiStepIndicator steps={steps} isFulfilledStepDisplayNumber={true} />
        Custom
        <MultiStepIndicator steps={steps} fulfilledStepIcon={Upgrade} />
      </div>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Upgrade
        }
      }
    }
  }
}`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var A,G,h;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const initialSteps = useMemo<Step[]>(() => [{
      key: "PENDING",
      status: "pending",
      titleText: "First step title",
      subtitleText: "First subtitle"
    }, {
      key: "PENDING-2",
      status: "pending",
      titleText: "Second step title",
      subtitleText: "Second subtitle"
    }, {
      key: "PENDING-3",
      status: "pending",
      titleText: "Third step title",
      subtitleText: "Third subtitle"
    }], []);
    const [steps, setSteps] = useState<Step[]>(initialSteps);
    useEffect(() => {
      const getNextStepsState = (currentSteps: Step[]): Step[] => {
        const currentStepIndex = currentSteps.findIndex(step => step.status !== "fulfilled");
        if (currentStepIndex === -1) {
          return initialSteps;
        }
        const newSteps = [...currentSteps];
        const stepToUpdate = newSteps[currentStepIndex];
        if (stepToUpdate.status === "pending") {
          newSteps[currentStepIndex] = {
            ...stepToUpdate,
            status: "active"
          };
        } else {
          newSteps[currentStepIndex] = {
            ...stepToUpdate,
            status: "fulfilled"
          };
        }
        return newSteps;
      };
      const interval = setInterval(() => {
        setSteps(prevSteps => getNextStepsState(prevSteps));
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    }, [initialSteps]);
    return <MultiStepIndicator steps={steps} />;
  }
}`,...(h=(G=p.parameters)==null?void 0:G.docs)==null?void 0:h.source}}};var U,w,C;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Step 1",
      subtitleText: "Learn how to use monday CRM"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Step 2",
      subtitleText: "Integrate your email"
    }, {
      key: "PENDING-3",
      status: "pending",
      titleText: "Step 3",
      subtitleText: "Import your data"
    }], []);
    return <MultiStepIndicator steps={steps} textPlacement="vertical" />;
  }
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const q=["Overview","Placements","Types","Sizes","FulfilledIcons","TransitionAnimation","MultiStepWizard"],X=Object.freeze(Object.defineProperty({__proto__:null,FulfilledIcons:u,MultiStepWizard:d,Overview:i,Placements:l,Sizes:a,TransitionAnimation:p,Types:r,__namedExportsOrder:q,default:H},Symbol.toStringTag,{value:"Module"}));export{u as F,X as M,i as O,l as P,a as S,r as T,p as a,d as b};
