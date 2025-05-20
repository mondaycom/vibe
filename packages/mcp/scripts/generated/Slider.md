# Storybook Code Examples

## Sizes

```tsx
<>
      <Slider size="small" defaultValue={12} />
      <Slider size="medium" defaultValue={24} />
      <Slider size="large" defaultValue={35} />
    </>
```

## Ranged

```tsx
<>
      <Slider data-testid={"monday-ranged-slider-s"} size="small" ranged={true} />
      <Slider data-testid={"monday-ranged-slider-m"} size="medium" ranged={true} defaultValue={[12, 55]} />
      <Slider size="large" ranged={true} defaultValue={[25, 32]} />
    </>
```

## Colors

```tsx
<>
      <Slider color="positive" defaultValue={34} size="medium" />
      <Slider color="negative" ranged={true} defaultValue={[12, 55]} size="medium" />
      <Slider color="primary" defaultValue={12} size="medium" />
    </>
```

## Disabled

```tsx
<>
      <Slider disabled={true} defaultValue={24} color="positive" size="medium" />
      <Slider disabled={true} color="negative" size="medium" />
      <Slider disabled={true} ranged={true} defaultValue={[12, 55]} color="primary" size="medium" />
    </>
```

## WithLabels

```tsx
<>
      <Slider indicateSelection={true} defaultValue={12} size="small" />
      <Slider indicateSelection={true} ranged={true} defaultValue={[12, 55]} size="small" />
      <Slider
  // @ts-ignore
  prefix={{
    icon: Sound
  }} indicateSelection={true} defaultValue={70} size="small" />
      <Slider
  // @ts-ignore
  prefix={{
    icon: Video
  }}
  // @ts-ignore
  postfix={{
    icon: Sound
  }} defaultValue={45} size="medium" />
      <Slider prefix="Vol" indicateSelection={true} defaultValue={0} size="large" />
    </>
```

## ShowValue

```tsx
<>
      <Slider data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size="small" />
      <Slider data-testid={"monday-slider-show-value-m"} showValue={true} defaultValue={55} size="medium" />
      <Slider data-testid={"monday-slider-show-value-l"} showValue={true} defaultValue={89} size="large" />
    </>
```

## Limits, Steps

```tsx
<>
      <Slider prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size="small" />
      <Slider prefix="Step 2, Max: 20" max={20} step={2} indicateSelection={true} defaultValue={4} size="medium" />
      <Slider prefix="from 20%" postfix="till 80%" min={20} max={80} showValue={true} defaultValue={62} size="large" />
      <Slider ranged={true} indicateSelection={true} min={100} max={200} step={10} size="large" />
    </>
```

## Customisation

```tsx
<>
      <Slider id="my-app-slider" data-testid={"my-app-slider"} className="my-custom-class" defaultValue={19} prefix="Check Dev-Tools for Custom Classes" size="medium" />
      <Slider id="custom-value-formatter" className="my-custom-formatter" defaultValue={3} min={1} max={10} indicateSelection={true} valueFormatter={value => `${value}GB`} prefix="Custom value formatter" size="medium" />
      <Slider id="custom-value-formatter" className="my-long-formatter" defaultValue={3} min={1} max={10} indicateSelection={true} selectionIndicatorWidth="120px" valueFormatter={value => `${value} meter/hour`} prefix="Long value formatter" size="medium" />
      <Slider id="custom-prefix" className="my-slider-wide" defaultValue={50} prefix={<Chips label="Custom component" readOnly />} postfix={(value, valueText) => {
    // set css: .my-slider-wide { max-width: none }
    return <span style={{
      whiteSpace: "nowrap"
    }}>{`RenderProps: ${valueText} (${value}) `}</span>;
  }} size="medium" />
    </>
```

