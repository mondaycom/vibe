"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[7157],{"./src/components/Menu/MenuDivider/__stories__/MenuDivider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MenuWithDivider:()=>MenuWithDivider,Overview:()=>Overview,SubMenuWithDivider:()=>SubMenuWithDivider,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _MenuDivider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Menu/MenuDivider/MenuDivider.tsx"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Menu/Menu/Menu.tsx"),_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Menu/MenuItem/MenuItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from "react";\nimport MenuDivider from "../MenuDivider";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport Menu from "../../Menu/Menu";\nimport MenuItem from "../../MenuItem/MenuItem";\n\nexport default {\n  title: "Navigation/Menu/MenuDivider",\n  component: MenuDivider\n};\n\nconst menuDividerTemplate = createComponentTemplate(MenuDivider);\n\nexport const Overview = {\n  render: menuDividerTemplate.bind({}),\n  name: "Overview"\n};\n\nexport const MenuWithDivider = {\n  render: () => (\n    <div\n      style={{\n        width: 200\n      }}\n    >\n      <Menu>\n        <MenuItem title="Menu item 1" />\n        <MenuDivider />\n        <MenuItem title="Menu item 2" />\n      </Menu>\n    </div>\n  ),\n\n  name: "Menu with divider"\n};\n\nexport const SubMenuWithDivider = {\n  render: () => (\n    <div\n      style={{\n        width: 200,\n        height: 90\n      }}\n    >\n      <Menu>\n        <MenuItem title="Item with sub menu">\n          <Menu>\n            <MenuItem title="Item 1" />\n            <MenuDivider />\n            <MenuItem title="Item 2" />\n          </Menu>\n        </MenuItem>\n      </Menu>\n    </div>\n  ),\n\n  name: "Sub menu with divider"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:14},endLoc:{col:1,line:17},startBody:{col:24,line:14},endBody:{col:1,line:17}},"menu-with-divider":{startLoc:{col:31,line:19},endLoc:{col:1,line:35},startBody:{col:31,line:19},endBody:{col:1,line:35}},"sub-menu-with-divider":{startLoc:{col:34,line:37},endLoc:{col:1,line:58},startBody:{col:34,line:37},endBody:{col:1,line:58}}}}},title:"Navigation/Menu/MenuDivider",component:_MenuDivider__WEBPACK_IMPORTED_MODULE_2__.A};var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.M)(_MenuDivider__WEBPACK_IMPORTED_MODULE_2__.A).bind({}),name:"Overview"},MenuWithDivider={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:200},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Menu item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuDivider__WEBPACK_IMPORTED_MODULE_2__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Menu item 2"})]})})},name:"Menu with divider"},SubMenuWithDivider={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:200,height:90},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Item with sub menu",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuDivider__WEBPACK_IMPORTED_MODULE_2__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Item 2"})]})})})})},name:"Sub menu with divider"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: menuDividerTemplate.bind({}),\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},MenuWithDivider.parameters={...MenuWithDivider.parameters,docs:{...MenuWithDivider.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 200\n  }}>\n      <Menu>\n        <MenuItem title="Menu item 1" />\n        <MenuDivider />\n        <MenuItem title="Menu item 2" />\n      </Menu>\n    </div>,\n  name: "Menu with divider"\n}',...MenuWithDivider.parameters?.docs?.source}}},SubMenuWithDivider.parameters={...SubMenuWithDivider.parameters,docs:{...SubMenuWithDivider.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 200,\n    height: 90\n  }}>\n      <Menu>\n        <MenuItem title="Item with sub menu">\n          <Menu>\n            <MenuItem title="Item 1" />\n            <MenuDivider />\n            <MenuItem title="Item 2" />\n          </Menu>\n        </MenuItem>\n      </Menu>\n    </div>,\n  name: "Sub menu with divider"\n}',...SubMenuWithDivider.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","MenuWithDivider","SubMenuWithDivider"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}}]);