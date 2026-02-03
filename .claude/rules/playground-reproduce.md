# Playground Reproduce

**Purpose**: Use when creating interactive examples for Vibe's Storybook Playground (vibe.monday.com/playground) - including bug reproductions, component demonstrations, feasibility testing, or consumer examples.

**Triggered by**: Keywords like "playground", "reproduce bug", "interactive example", "user reported an issue" or "demonstrate".

## Overview

Vibe supports a Playground in its Storybook, accessible at `vibe.monday.com/playground`.

Your goal is to output a working playground code *directly in the chat* (do not write it to a file).

Behind the scenes, this playground uses:

- **CodeMirror** for the editor interface (via `storybook-addon-playground` addon)
- **React Live** for rendering the code in real-time

## When to Use the Playground

The Playground is for **one-time usage scenarios**:

- Creating bug reproductions for issue reports
- Testing component combinations and integrations
- Validating if a feature is feasible with current or updated code
- Demonstrating to consumers how to achieve specific behaviors
- Helping consumers understand usage patterns

**Important**: Playground examples are NOT for documentation or long-term storage. They are ephemeral demonstrations.

## React Live Constraints

React Live has strict requirements for the code format:

### ✅ MUST: Single Anonymous Component

The code MUST be wrapped in a single anonymous arrow function component:

```javascript
() => {
  const [timesClicked, setTimesClicked] = useState(0);

  function onButtonClick() {
    setTimesClicked(prev => prev + 1);
  }

  return (
    <Flex direction="column" gap="medium">
      <Button onClick={onButtonClick}>
        Clicked {timesClicked} time{timesClicked === 1 ? "" : "s"}
      </Button>
    </Flex>
  );
};
```

### ❌ CANNOT: Multiple Root Components

React Live cannot render multiple components at the root level. This will NOT work:

```javascript
// ❌ Bad - Multiple root components
const ComponentA = () => <div>A</div>;
const ComponentB = () => <div>B</div>;
```

### ✅ WORKAROUND: Define Components Inside

For multi-component bugs (e.g., re-render issues), define child components INSIDE the root anonymous component:

```javascript
() => {
  const ChildComponent = ({ value }) => {
    console.log("ChildComponent rendered");
    return <div>{value}</div>;
  };

  const AnotherComponent = () => {
    return <Text>Another component</Text>;
  };

  return (
    <Flex direction="column" gap="small">
      <ChildComponent value="test" />
      <AnotherComponent />
    </Flex>
  );
};
```

## Available Components

### Default Components (Vibe 3.0 / Next)

All Vibe components are available by their standard names and default to the "next" versions:

```javascript
<Button />
<Dropdown />
<Modal />
<TextField />
```

### Icons

Access all Vibe icons via the `VibeIcons` prefix:

```javascript
<VibeIcons.RemoveRound />
<VibeIcons.Check />
<VibeIcons.Close />
```

### Legacy Components (Vibe 2.0)

To use older versions of components, use the `VibeLegacy` prefix:

```javascript
<VibeLegacy.Modal />
<VibeLegacy.Dropdown />
```

### React Hooks

All standard React hooks are available (`useState`, `useEffect`, `useCallback`, etc.).

## Editor Tabs

The Playground has two tabs:

### JSX Tab

Write your component code here using the anonymous component format.

### CSS Tab

Write CSS styles here. Reference these styles in the JSX tab using `className`:

```javascript
// JSX tab
() => {
  return <div className="my-custom-class">Styled content</div>;
}

// CSS tab
.my-custom-class {
  background: red;
  padding: 16px;
}
```

**Note**: CSS Modules are NOT supported. Use plain class names as strings.

## Best Practices

### Keep It Simple

Focus ONLY on reproducing the specific issue. Don't add unrelated complexity.

```javascript
// ❌ Bad - Bug about Menu text, but adding unnecessary icons
() => {
  return (
    <Menu>
      <MenuItem icon={<VibeIcons.Check />}>Item with icon</MenuItem>
      <MenuItem icon={<VibeIcons.Star />}>Another with icon</MenuItem>
    </Menu>
  );
};

// ✅ Good - Focus on the Menu text issue
() => {
  return (
    <Menu>
      <MenuItem>Simple menu item text</MenuItem>
      <MenuItem>Another menu item</MenuItem>
    </Menu>
  );
};
```

### Ask Questions

Before generating playground code, ask human:

- What is the specific behavior they're trying to reproduce?
- Which components are involved?
- What should the expected vs. actual behavior be?
- Are there any specific props or states that trigger the issue?
- More related questions you think are worth asking.
- Do not bug human with too many questions if you think you already understood most of the issue and what human wants.

### Use JavaScript, Not TypeScript

TypeScript types are valid code but add no value in the Playground. Keep code simple by using Javascript only.

### Minimal Reproduction

Strip away everything not essential to demonstrating the issue:

```javascript
// ❌ Too complex for a simple button bug
() => {
  const [state, setState] = useState({ count: 0, enabled: true, label: "Click" });
  const handleClick = useCallback(() => {
    setState(prev => ({ ...prev, count: prev.count + 1 }));
  }, []);

  return (
    <Flex direction="column" gap="large" padding="large">
      <Heading>Button Test</Heading>
      <Button onClick={handleClick}>
        {state.label} {state.count}
      </Button>
    </Flex>
  );
};

// ✅ Minimal reproduction
() => {
  return <Button>Test button label</Button>;
};
```

## Accessing the Playground

Users can access the playground directly at: **vibe.monday.com/playground**

Or navigate through Storybook UI to the "Playground" story.

Press `D` on the keyboard to toggle the editor visibility in Storybook.

## Playground Code Generation Guidelines

When generating playground code:

### Code Structure
- **Always wrap in anonymous arrow function**: `() => { /* code */ };`
- **Use JavaScript, not TypeScript** for simplicity
- **Define child components inside** the main anonymous component if needed
- **Focus on the minimal reproduction** of the specific issue

### Component Usage
- **Use standard Vibe component names** (`Button`, `Modal`, `TextField`)
- **Use `VibeIcons.IconName`** for icons
- **Use `VibeLegacy.ComponentName`** for Vibe 2.0 components when needed
- **Use React hooks** (`useState`, `useEffect`, etc.) as needed

### Before Generating Code
- **Ask clarifying questions** about the specific behavior to reproduce
- **Understand the expected vs actual behavior**
- **Identify the minimum components needed** for the reproduction

### Example Template
```javascript
() => {
  // State and hooks if needed
  const [state, setState] = useState(initialValue);

  // Event handlers if needed
  const handleAction = () => {
    // handler logic
  };

  // Child components if needed (defined inside)
  const ChildComponent = ({ prop }) => {
    return <div>{prop}</div>;
  };

  // Main render
  return (
    <Flex direction="column" gap="medium">
      {/* Minimal components to reproduce the issue */}
      <Button onClick={handleAction}>Test Button</Button>
      <ChildComponent prop={state} />
    </Flex>
  );
};
```

## Claude Implementation Notes

When creating playground reproductions:

- **Output code directly in chat** - don't create files
- **Use the anonymous arrow function format** required by React Live
- **Ask clarifying questions** before generating code to understand the issue
- **Keep it minimal** - only include what's necessary to reproduce the issue
- **Use JavaScript syntax** instead of TypeScript
- **Test component combinations** when asked to demonstrate feasibility
- **Focus on the specific behavior** being reported or requested
- **Remember it's ephemeral** - not for long-term documentation