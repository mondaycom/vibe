import fs from "fs";
import path from "path";

const REACT_ICONS_FOLDER = path.resolve("./src/react");
const LAZY_EXPORTS_FOLDER = path.resolve("./src/lazy");

if (!fs.existsSync(LAZY_EXPORTS_FOLDER)) {
  fs.mkdirSync(LAZY_EXPORTS_FOLDER);
}

const iconFiles = fs.readdirSync(REACT_ICONS_FOLDER).filter(file => file.endsWith(".tsx"));

iconFiles.forEach(file => {
  const fileNameWithoutExtension = path.basename(file, ".tsx");
  const lazyComponentCode = `import React, { lazy, Suspense } from 'react';

const ${fileNameWithoutExtension}Icon = lazy(() => import('../react/${fileNameWithoutExtension}'));

const ${fileNameWithoutExtension} = ({ fallback = <div />, ...props }) => (
  <Suspense fallback={fallback}>
    <${fileNameWithoutExtension}Icon {...props} />
  </Suspense>
);

export default ${fileNameWithoutExtension};
`;

  fs.writeFileSync(path.join(LAZY_EXPORTS_FOLDER, `${fileNameWithoutExtension}.tsx`), lazyComponentCode);
});

// Create an index.js file that exports all lazy-loaded components
const indexContent = iconFiles
  .map(file => {
    const fileNameWithoutExtension = path.basename(file, ".tsx");
    return `export { default as Lazy${fileNameWithoutExtension}Icon } from './${fileNameWithoutExtension}';`;
  })
  .join("\n");

fs.writeFileSync(path.join(LAZY_EXPORTS_FOLDER, "index.ts"), indexContent);

console.log(`Generated lazy components and index.ts for ${iconFiles.length} icons.`);
