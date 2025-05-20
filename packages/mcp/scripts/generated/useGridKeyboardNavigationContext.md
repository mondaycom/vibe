# Storybook Code Examples

## Overview

```tsx
const wrapperRef = useRef(null);
const leftElRef = useRef(null);
const rightElRef = useRef(null);
const keyboardContext = useGridKeyboardNavigationContext([{
  leftElement: leftElRef,
  rightElement: rightElRef
}], wrapperRef);
return <GridKeyboardNavigationContext.Provider value={keyboardContext}>
        <Flex ref={wrapperRef}>
          <DummyNavigableGrid ref={leftElRef} itemsCount={15} numberOfItemsInLine={4} itemPrefix="L" />
          <DummyNavigableGrid ref={rightElRef} itemsCount={7} numberOfItemsInLine={2} itemPrefix="R" />
        </Flex>
      </GridKeyboardNavigationContext.Provider>;
```

## Disabled Elements

```tsx
const wrapperRef = useRef(null);
const topElRef = useRef(null);
const middleElRef = useRef(null);
const bottomElRef = useRef(null);
const keyboardContext = useGridKeyboardNavigationContext([{
  topElement: topElRef,
  bottomElement: middleElRef
}, {
  topElement: middleElRef,
  bottomElement: bottomElRef
}], wrapperRef);
return <GridKeyboardNavigationContext.Provider value={keyboardContext}>
        <Flex ref={wrapperRef} direction="column" justify="center" className="use-grid-keyboard-dummy-grid-wrapper">
          <DummyNavigableGrid ref={topElRef} itemsCount={3} numberOfItemsInLine={3} itemPrefix="T" />
          <DummyNavigableGrid ref={middleElRef} itemsCount={3} numberOfItemsInLine={3} itemPrefix="M" disabled />
          <DummyNavigableGrid ref={bottomElRef} itemsCount={3} numberOfItemsInLine={3} itemPrefix="B" />
        </Flex>
      </GridKeyboardNavigationContext.Provider>;
```

## Multiple Depths

```tsx
const wrapperRef = useRef(null);
const topElRef = useRef(null);
const bottomElRef = useRef(null);
const keyboardContext = useGridKeyboardNavigationContext([{
  topElement: topElRef,
  bottomElement: bottomElRef
}], wrapperRef);
return <GridKeyboardNavigationContext.Provider value={keyboardContext}>
        <Flex id="twoGridLayoutsWrapper" ref={wrapperRef} direction="column" tabIndex={-1}>
          <LayoutWithInnerKeyboardNavigation id="gridLayoutTop" itemPrefix="T" ref={topElRef} />
          <LayoutWithInnerKeyboardNavigation id="gridLayoutBottom" itemPrefix="B" ref={bottomElRef} />
        </Flex>
      </GridKeyboardNavigationContext.Provider>;
```

