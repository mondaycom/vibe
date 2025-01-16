"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[8417],{"./src/components/DialogContentContainer/__stories__/DialogContentContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal,Overview:()=>Overview,Popover:()=>Popover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DialogContentContainer_stories});__webpack_require__("../../node_modules/react/index.js");var DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DialogContentContainerExample_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/DialogContentContainer/__stories__/DialogContentContainerExample.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DialogContentContainerExample_module.A,options);const _stories_DialogContentContainerExample_module=DialogContentContainerExample_module.A&&DialogContentContainerExample_module.A.locals?DialogContentContainerExample_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),DialogContentContainerExample=function DialogContentContainerExample(){return(0,jsx_runtime.jsxs)("div",{className:_stories_DialogContentContainerExample_module["content-example"],children:[(0,jsx_runtime.jsx)("p",{children:"I could be anything when i grow up"}),(0,jsx_runtime.jsx)("p",{children:"even Moshe Zemach"})]})};DialogContentContainerExample.displayName="DialogContentContainerExample";const _stories_DialogContentContainerExample=DialogContentContainerExample;DialogContentContainerExample.__docgenInfo={description:"",methods:[],displayName:"DialogContentContainerExample"};var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:DialogContentContainer.A,ignoreControlsPropNamesArray:["children"]}),dialogContentContainerTemplate=(0,createComponentTemplate.M)(DialogContentContainer.A);const DialogContentContainer_stories={parameters:{storySource:{source:'import React from "react";\nimport DialogContentContainer from "../DialogContentContainer";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport DialogContentContainerExample from "./DialogContentContainerExample";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: DialogContentContainer,\n  ignoreControlsPropNamesArray: ["children"]\n});\n\nconst dialogContentContainerTemplate = createComponentTemplate(DialogContentContainer);\n\nexport default {\n  title: "Components/DialogContentContainer",\n  component: DialogContentContainer,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nexport const Overview = {\n  render: dialogContentContainerTemplate.bind({}),\n  name: "Overview",\n\n  args: {\n    children: <DialogContentContainerExample />\n  }\n};\n\nexport const Popover = {\n  render: () => (\n    <DialogContentContainer type={DialogContentContainer.types.POPOVER}>\n      <DialogContentContainerExample />\n    </DialogContentContainer>\n  ),\n\n  name: "Popover"\n};\n\nexport const Modal = {\n  render: () => (\n    <DialogContentContainer type={DialogContentContainer.types.MODAL}>\n      <DialogContentContainerExample />\n    </DialogContentContainer>\n  ),\n\n  name: "Modal"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:21},endLoc:{col:1,line:28},startBody:{col:24,line:21},endBody:{col:1,line:28}},popover:{startLoc:{col:23,line:30},endLoc:{col:1,line:38},startBody:{col:23,line:30},endBody:{col:1,line:38}},modal:{startLoc:{col:21,line:40},endLoc:{col:1,line:48},startBody:{col:21,line:40},endBody:{col:1,line:48}}}}},title:"Components/DialogContentContainer",component:DialogContentContainer.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:dialogContentContainerTemplate.bind({}),name:"Overview",args:{children:(0,jsx_runtime.jsx)(_stories_DialogContentContainerExample,{})}},Popover={render:function render(){return(0,jsx_runtime.jsx)(DialogContentContainer.A,{type:DialogContentContainer.A.types.POPOVER,children:(0,jsx_runtime.jsx)(_stories_DialogContentContainerExample,{})})},name:"Popover"},Modal={render:function render(){return(0,jsx_runtime.jsx)(DialogContentContainer.A,{type:DialogContentContainer.A.types.MODAL,children:(0,jsx_runtime.jsx)(_stories_DialogContentContainerExample,{})})},name:"Modal"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: dialogContentContainerTemplate.bind({}),\n  name: "Overview",\n  args: {\n    children: <DialogContentContainerExample />\n  }\n}',...Overview.parameters?.docs?.source}}},Popover.parameters={...Popover.parameters,docs:{...Popover.parameters?.docs,source:{originalSource:'{\n  render: () => <DialogContentContainer type={DialogContentContainer.types.POPOVER}>\n      <DialogContentContainerExample />\n    </DialogContentContainer>,\n  name: "Popover"\n}',...Popover.parameters?.docs?.source}}},Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:'{\n  render: () => <DialogContentContainer type={DialogContentContainer.types.MODAL}>\n      <DialogContentContainerExample />\n    </DialogContentContainer>,\n  name: "Modal"\n}',...Modal.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Popover","Modal"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/DialogContentContainer/__stories__/DialogContentContainerExample.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".DialogContentContainerExample-module_content-example{background-color:var(--primary-selected-color);padding:var(--spacing-xxl);display:flex;flex-direction:column;justify-content:center;color:var(--primary-text-color)}","",{version:3,sources:["webpack://./src/components/DialogContentContainer/__stories__/DialogContentContainerExample.module.scss"],names:[],mappings:"AAAA,sDACE,8CAAA,CACA,0BAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,+BAAA",sourcesContent:[".content-example {\n  background-color: var(--primary-selected-color);\n  padding: var(--spacing-xxl);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: var(--primary-text-color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"content-example":"DialogContentContainerExample-module_content-example"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);