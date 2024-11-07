# @vibe/icons

This package includes all of the icons of monday.com's [Vibe Design System](https://vibe.monday.com/?path=/story/media-icon--icons-list-story), available as React components and raw SVGs and with lazy loading support for optimized performance and flexible usage in your projects.


## Installation

To install, use the following command:

```bash
npm install @vibe/icons
```

## Usage

#### Using React Components

```javascript
import { Close } from "@vibe/icons";
```

#### Using Lazy React Components

```javascript
import { Close } from "@vibe/icons/lazy";
```

#### Using Raw SVG Files

```javascript
import { Close as CloseSvg } from "@vibe/icons/raw";
```


## Peer dependencies

We are reliant on React and React DOM, we are using them as externals, and we don't package them to the package, so you must have them in your project
