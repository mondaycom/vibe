# Codemod Examples for Vibe Breaking Changes

## Simple Prop Rename

```typescript
// Transform: oldProp → newProp
import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Transform JSX prop usage
  root
    .find(j.JSXElement)
    .filter(path => {
      const name = path.value.openingElement?.name;
      return name && name.type === 'JSXIdentifier' && name.name === 'ComponentName';
    })
    .forEach(path => {
      const attributes = path.value.openingElement?.attributes || [];
      attributes.forEach(attr => {
        if (
          attr.type === 'JSXAttribute' &&
          attr.name?.type === 'JSXIdentifier' &&
          attr.name.name === 'oldProp'
        ) {
          attr.name.name = 'newProp';
        }
      });
    });

  return root.toSource();
};

export default transform;
```

## Enum to String Union Migration

```typescript
// Transform: ComponentName.SIZE.LARGE → "large"
import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Replace enum member access with string literal
  root
    .find(j.MemberExpression, {
      object: {
        type: 'MemberExpression',
        object: { name: 'ComponentName' },
        property: { name: 'SIZE' }
      }
    })
    .forEach(path => {
      const property = path.value.property;
      if (property.type === 'Identifier') {
        const stringValue = property.name.toLowerCase();
        j(path).replaceWith(j.literal(stringValue));
      }
    });

  return root.toSource();
};

export default transform;
```

## Complex Import Path Update

```typescript
// Transform: from old package to new package structure
import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Update import declarations
  root
    .find(j.ImportDeclaration)
    .filter(path => {
      return path.value.source.value?.includes('@vibe/core/components/ComponentName');
    })
    .forEach(path => {
      if (path.value.source.type === 'Literal') {
        path.value.source.value = '@vibe/component-name';
      }
    });

  return root.toSource();
};

export default transform;
```

## Testing Codemod Changes

```bash
# Test codemod on specific file
npx jscodeshift -t packages/codemod/src/transforms/component-prop-rename.ts packages/core/src/components/Button/__tests__/Button.test.tsx --dry

# Test on directory
npx jscodeshift -t packages/codemod/src/transforms/component-prop-rename.ts packages/core/src/components/ --dry

# Apply transformation
npx jscodeshift -t packages/codemod/src/transforms/component-prop-rename.ts packages/core/src/components/

# Add to codemod CLI
# Edit packages/codemod/src/index.ts to include new transform
```

## Codemod Integration Checklist

- [ ] Transform handles JSX usage
- [ ] Transform handles TypeScript interfaces
- [ ] Transform handles prop destructuring
- [ ] Transform handles spread props appropriately
- [ ] Test cases cover edge cases
- [ ] Dry run shows expected changes
- [ ] Added to codemod CLI interface
- [ ] Documentation includes usage example