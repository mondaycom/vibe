import{j as n}from"./jsx-runtime-DDzbWKUH.js";import{r as a}from"./index-Hemj67b4.js";import{M as g,L as h}from"./LegacyModal-DTRuwoET.js";import{D as e}from"./Dropdown-B74nzzkE.js";import{M as c}from"./ModalExampleContent-92nzTSEs.js";import{B as v}from"./Box-CI4IQ3Nw.js";import{F as E}from"./Flex-2Q04fxOc.js";import{D as w}from"./Tooltip-XRyjLrpx.js";import{B as s}from"./Button-g4d77Vkl.js";import{D as O}from"./DialogContentContainer-CTtMW4dm.js";const I={title:"Technical Patterns/Dropdowns inside pop-overs"},r=()=>{const[t,o]=a.useState(!1),i=a.useCallback(()=>{o(!1)},[o]),l=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}];return n.jsxs("div",{children:[n.jsx(s,{onClick:()=>o(!0),children:"Open Modal"}),n.jsx(g,{title:"Modal with dropdown",show:t,onClose:i,children:n.jsx(h,{children:n.jsx(e,{options:l})})})]})},p=()=>{const[t,o]=a.useState(!1),i=a.useCallback(()=>{o(!1)},[o]),l=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}],[]),m={width:"350px",height:"200px",overflow:"auto"},b=[{name:"preventOverflow",options:{mainAxis:!1}}];return n.jsxs(E,{gap:"large",children:[n.jsxs(O,{style:m,children:[n.jsx(c,{}),n.jsx(v,{marginTop:"medium",marginBottom:"xxl",children:n.jsx(e,{placeholder:"Dropdown inside DialogContentContainer",options:l,menuPosition:e.menuPositions.FIXED})})]}),n.jsxs("div",{children:[n.jsx(s,{onClick:()=>o(!0),children:"Open Modal"}),n.jsx(g,{title:"Modal with dropdown",show:t,onClose:i,children:n.jsx(h,{children:n.jsx(e,{placeholder:"Dropdown",options:l,menuPosition:e.menuPositions.FIXED})})})]}),n.jsx(w,{modifiers:b,showTrigger:["click"],hideTrigger:["click"],content:n.jsxs(O,{style:m,children:[n.jsx(c,{}),n.jsx(v,{marginTop:"medium",marginBottom:"xxl",children:n.jsx(e,{placeholder:"Dropdown",options:l,menuPosition:e.menuPositions.FIXED})})]}),children:n.jsx(s,{kind:"primary",color:"negative",children:"Popup Dialog"})})]})},d=()=>{const[t,o]=a.useState(!1),i=a.useCallback(()=>{o(!1)},[o]),l=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}],[]),m=[{name:"preventOverflow",options:{mainAxis:!1}}],b={width:"350px",height:"200px",overflow:"auto"};return n.jsxs(E,{gap:"large",children:[n.jsxs(O,{style:b,children:[n.jsx(c,{}),n.jsx(v,{marginTop:"medium",marginBottom:"xxl",children:n.jsx(e,{placeholder:"Dropdown inside DialogContentContainer",options:l,insideOverflowContainer:!0})})]}),n.jsxs("div",{children:[n.jsx(s,{onClick:()=>o(!0),children:"Open Modal"}),n.jsx(g,{title:"Modal with dropdown",show:t,onClose:i,children:n.jsx(h,{children:n.jsx(e,{options:l,insideOverflowContainer:!0})})})]}),n.jsx(w,{modifiers:m,showTrigger:["click"],hideTrigger:["click"],content:n.jsxs(O,{style:b,children:[n.jsx(c,{}),n.jsx(v,{marginTop:"medium",marginBottom:"xxl",children:n.jsx(e,{placeholder:"Dropdown",options:l,insideOverflowContainer:!0})})]}),children:n.jsx(s,{color:"negative",children:"Popup Dialog"})})]})},u=()=>{const t=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}],[]),o={width:"300px",height:"200px",overflow:"auto"},i=n.jsxs(O,{style:o,children:[n.jsx(c,{}),n.jsx(v,{marginTop:"medium",marginBottom:"xxl",children:n.jsx(e,{placeholder:"Dropdown",options:t,insideOverflowWithTransformContainer:!0})})]});return n.jsx(w,{content:i,hideTrigger:"clickoutside",showTrigger:"click",children:n.jsx(s,{children:"Popup Dialog"})})};var x,C,D;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [show, setShow] = useState<boolean>(false);
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const options: DropdownOption[] = [{
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
  }, {
    value: "5",
    label: "Option 5"
  }, {
    value: "6",
    label: "Option 6"
  }, {
    value: "7",
    label: "Option 7"
  }, {
    value: "8",
    label: "Option 8"
  }, {
    value: "9",
    label: "Option 9"
  }, {
    value: "10",
    label: "Option 10"
  }, {
    value: "11",
    label: "Option 11"
  }, {
    value: "12",
    label: "Option 12"
  }, {
    value: "13",
    label: "Option 13"
  }, {
    value: "14",
    label: "Option 14"
  }, {
    value: "15",
    label: "Option 15"
  }];
  return <div>
      <Button onClick={() => setShow(true)}>Open Modal</Button>
      <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
        <ModalContent>
          <Dropdown options={options} />
        </ModalContent>
      </Modal>
    </div>;
}`,...(D=(C=r.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var f,M,j;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [show, setShow] = useState<boolean>(false);
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const options: DropdownOption[] = useMemo(() => [{
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
  }, {
    value: "5",
    label: "Option 5"
  }, {
    value: "6",
    label: "Option 6"
  }, {
    value: "7",
    label: "Option 7"
  }, {
    value: "8",
    label: "Option 8"
  }, {
    value: "9",
    label: "Option 9"
  }, {
    value: "10",
    label: "Option 10"
  }, {
    value: "11",
    label: "Option 11"
  }, {
    value: "12",
    label: "Option 12"
  }, {
    value: "13",
    label: "Option 13"
  }, {
    value: "14",
    label: "Option 14"
  }, {
    value: "15",
    label: "Option 15"
  }], []);
  const dialogStyle: React.CSSProperties = {
    width: "350px",
    height: "200px",
    overflow: "auto"
  };
  const modifiers = [{
    name: "preventOverflow",
    options: {
      mainAxis: false
    }
  }];
  return <Flex gap="large">
      <DialogContentContainer style={dialogStyle}>
        <ModalExampleContent />
        <Box marginTop="medium" marginBottom="xxl">
          <Dropdown placeholder="Dropdown inside DialogContentContainer" options={options} menuPosition={Dropdown.menuPositions.FIXED} />
        </Box>
      </DialogContentContainer>
      <div>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
          <ModalContent>
            <Dropdown placeholder="Dropdown" options={options} menuPosition={Dropdown.menuPositions.FIXED} />
          </ModalContent>
        </Modal>
      </div>
      <Dialog modifiers={modifiers} showTrigger={["click"]} hideTrigger={["click"]} content={<DialogContentContainer style={dialogStyle}>
            <ModalExampleContent />
            <Box marginTop="medium" marginBottom="xxl">
              <Dropdown placeholder="Dropdown" options={options} menuPosition={Dropdown.menuPositions.FIXED} />
            </Box>
          </DialogContentContainer>}>
        <Button kind="primary" color="negative">
          Popup Dialog
        </Button>
      </Dialog>
    </Flex>;
}`,...(j=(M=p.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var S,B,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [show, setShow] = useState<boolean>(false);
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const options: DropdownOption[] = useMemo(() => [{
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
  }, {
    value: "5",
    label: "Option 5"
  }, {
    value: "6",
    label: "Option 6"
  }, {
    value: "7",
    label: "Option 7"
  }, {
    value: "8",
    label: "Option 8"
  }, {
    value: "9",
    label: "Option 9"
  }, {
    value: "10",
    label: "Option 10"
  }, {
    value: "11",
    label: "Option 11"
  }, {
    value: "12",
    label: "Option 12"
  }, {
    value: "13",
    label: "Option 13"
  }, {
    value: "14",
    label: "Option 14"
  }, {
    value: "15",
    label: "Option 15"
  }], []);
  const modifiers = [{
    name: "preventOverflow",
    options: {
      mainAxis: false
    }
  }];
  const dialogStyle: React.CSSProperties = {
    width: "350px",
    height: "200px",
    overflow: "auto"
  };
  return <Flex gap="large">
      <DialogContentContainer style={dialogStyle}>
        <ModalExampleContent />
        <Box marginTop="medium" marginBottom="xxl">
          <Dropdown placeholder="Dropdown inside DialogContentContainer" options={options} insideOverflowContainer />
        </Box>
      </DialogContentContainer>
      <div>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
          <ModalContent>
            <Dropdown options={options} insideOverflowContainer />
          </ModalContent>
        </Modal>
      </div>
      <Dialog modifiers={modifiers} showTrigger={["click"]} hideTrigger={["click"]} content={<DialogContentContainer style={dialogStyle}>
            <ModalExampleContent />
            <Box marginTop="medium" marginBottom="xxl">
              <Dropdown placeholder="Dropdown" options={options} insideOverflowContainer />
            </Box>
          </DialogContentContainer>}>
        <Button color="negative">Popup Dialog</Button>
      </Dialog>
    </Flex>;
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var k,y,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const options: DropdownOption[] = useMemo(() => [{
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
  }, {
    value: "5",
    label: "Option 5"
  }, {
    value: "6",
    label: "Option 6"
  }, {
    value: "7",
    label: "Option 7"
  }, {
    value: "8",
    label: "Option 8"
  }, {
    value: "9",
    label: "Option 9"
  }, {
    value: "10",
    label: "Option 10"
  }, {
    value: "11",
    label: "Option 11"
  }, {
    value: "12",
    label: "Option 12"
  }, {
    value: "13",
    label: "Option 13"
  }, {
    value: "14",
    label: "Option 14"
  }, {
    value: "15",
    label: "Option 15"
  }], []);
  const dialogStyle: React.CSSProperties = {
    width: "300px",
    height: "200px",
    overflow: "auto"
  };
  const secondDialogContent = <DialogContentContainer style={dialogStyle}>
      <ModalExampleContent />
      <Box marginTop="medium" marginBottom="xxl">
        <Dropdown placeholder="Dropdown" options={options} insideOverflowWithTransformContainer />
      </Box>
    </DialogContentContainer>;
  return <Dialog content={secondDialogContent} hideTrigger="clickoutside" showTrigger="click">
      <Button>Popup Dialog</Button>
    </Dialog>;
}`,...(P=(y=u.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const F=["ModalWithDamagedDropdown","MenuPosition","InsideOverflowContainer","InsideOverflowWithTransformContainer"],J=Object.freeze(Object.defineProperty({__proto__:null,InsideOverflowContainer:d,InsideOverflowWithTransformContainer:u,MenuPosition:p,ModalWithDamagedDropdown:r,__namedExportsOrder:F,default:I},Symbol.toStringTag,{value:"Module"}));export{J as D,d as I,r as M,p as a,u as b};
