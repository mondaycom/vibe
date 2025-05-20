# Storybook Code Examples

## Overview

```tsx
tooltipTemplate = (args: TooltipProps) => {
  return <div className="monday-storybook-tooltip_overview">
      <Tooltip
    // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
    // Therefore, there is no need to move this prop in your implementations.
    modifiers={modifiers} {...args} open>
        <div />
      </Tooltip>
    </div>;
}
```

## Positions

```tsx
return <div className="monday-storybook-tooltip_positions">
        <div>
          {/* The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
           Therefore, there is no need to move this prop in your implementations. */}
          <Tooltip modifiers={modifiers} content="Top" shouldShowOnMount position="bottom" open>
            <div />
          </Tooltip>
        </div>
        <div>
          <Tooltip modifiers={modifiers} content="Bottom" shouldShowOnMount open>
            <div />
          </Tooltip>
        </div>
        <div>
          <Tooltip modifiers={modifiers} content="Left" position="right" shouldShowOnMount open>
            <div />
          </Tooltip>
        </div>
        <div>
          <Tooltip modifiers={modifiers} content="Right" position="left" shouldShowOnMount open>
            <div />
          </Tooltip>
        </div>
      </div>;
```

