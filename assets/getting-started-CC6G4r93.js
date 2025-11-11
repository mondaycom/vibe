import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{useMDXComponents as o}from"./index-BfNsOeqz.js";import{M as r,f as s}from"./index-Dm1n4anH.js";import"./index-CTZeEbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B7LUXjQL.js";import"./index-BO5_ldJP.js";import"./index-BrqHMYbN.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";const a=`# @vibe/core

<a href="https://bundlephobia.com/package/@vibe/core"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@vibe/core"></a>
<a href="https://www.npmjs.com/package/@vibe/core"><img alt="NPM Version" src="https://img.shields.io/npm/v/@vibe/core?label=@vibe/core"></a>

> Vibe Design System's Core Component Library in React

## Usage

Components are imported from the library's root entry:

\`\`\`javascript
import { Button } from "@vibe/core";
\`\`\`

### Font installation

We don't import fonts ourselves, we work best with the following fonts -
Poppins, Figtree and Roboto, we recommend adding the following \`link\` import to your application

\`\`\`html
<link
  href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>
\`\`\`

## Theming

Theming is supported using CSS variables - for more info on theming please read the [theme guidelines](./docs/theming.md) file.

## Experimental SSR (Server Side Rendering)

Components are using style injection on the client side (into <head> element)
This is not usable on the server side.
In order to get the required styles on the server side, you should initialize

\`\`\`javascript
globalThis.injectedStyles = {};
\`\`\`

in order to have each server side render component css inserted into the injectedStyles object
each component will insert its css string under a unique key.
Then you can join all the values into one string and add it under a \`<style>\` element

## Experimental Component Metadata for LLMs

You can access component metadata (props, descriptions, etc.) via the \`/meta\` export path:

\`\`\`javascript
import metadata from "@vibe/core/meta";
\`\`\`

**Note:** This feature is experimental and currently intended for internal Vibe LLM efforts. The structure and content of the metadata object are subject to change without notice in future versions. We cannot guarantee stability for this feature, yet.
`;function i(n){const t={h1:"h1",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting Started"}),`
`,e.jsx(t.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(s,{children:a.replace(/^[\s\S]*?(?=## Overview)/,"")})]})}function v(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{v as default};
