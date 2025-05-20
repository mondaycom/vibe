# Storybook Code Examples

## Overview

```tsx
virtualizedListTemplate = (args: VirtualizedListItem) => {
  const itemRenderer = useCallback((item: VirtualizedListItem, index: number, style: React.CSSProperties) => {
    const backgroundColor = index % 2 === 0 ? "#e1e1e1" : "#f8f8f0";
    return <div key={index} style={style}>
        <div className={styles.virtualizedListItem} style={{
        backgroundColor,
        height: item.height
      }}>
          {(item.value as React.ReactNode)}
        </div>
      </div>;
  }, []);
  return <Flex align="start" gap="large" style={{
    width: "100%"
  }} direction="row">
      <div style={{
      width: 330,
      height: 300,
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    }}>
        <div style={{
        width: 200,
        height: "100%"
      }}>
          <h3>Vertical List</h3>
          <VirtualizedList {...args} items={generateItems(30, 1000, "vertical")} itemRenderer={itemRenderer} getItemSize={item => item.height} />
        </div>
      </div>
      <div style={{
      flexGrow: 1,
      height: 300,
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    }}>
        <div style={{
        height: "100%",
        width: "100%"
      }}>
          <h3>Horizontal List</h3>
          <VirtualizedList {...args} items={generateItems(100, 1000, "horizontal")} itemRenderer={itemRenderer} getItemSize={item => item.width} layout="horizontal" />
        </div>
      </div>
    </Flex>;
}
```

