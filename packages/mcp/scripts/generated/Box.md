# Storybook Code Examples

## Overview

```tsx
boxTemplate = (args: BoxProps) => <Box border rounded="medium" padding="large" marginBottom="medium" {...args} style={{
  width: "100%"
}}>
    Box composite component
  </Box>
```

## BackgroundColors

```tsx
<>
      <Box backgroundColor="primaryBackgroundColor" padding="large" marginBottom="medium">
        primaryBackgroundColor
      </Box>
      <Box backgroundColor="secondaryBackgroundColor" padding="large" marginBottom="medium">
        secondaryBackgroundColor
      </Box>
      <Box backgroundColor="greyBackgroundColor" padding="large" marginBottom="medium">
        greyBackgroundColor
      </Box>
      <Box backgroundColor="allgreyBackgroundColor" padding="large" marginBottom="medium">
        allgreyBackgroundColor
      </Box>
      <Box textColor="textColorOnInverted" backgroundColor="invertedColorBackground" padding="large" marginBottom="medium">
        invertedColorBackground
      </Box>
    </>
```

## TextColors

```tsx
<>
      <Box textColor="primaryTextColor" padding="large" marginBottom="medium">
        textPrimaryTextColor
      </Box>
      <Box backgroundColor="invertedColorBackground" textColor="textColorOnInverted" padding="large" marginBottom="medium">
        textColorOnInverted
      </Box>
      <Box textColor="secondaryTextColor" padding="large" marginBottom="medium">
        secondaryTextColor
      </Box>
    </>
```

## Border

```tsx
<>
      <Box border padding="large" marginBottom="medium">
        default
      </Box>
    </>
```

## BorderColor

```tsx
<>
      <Box border borderColor="uiBorderColor" padding="large" marginBottom="medium">
        uiBorderColor
      </Box>
      <Box border borderColor="layoutBorderColor" padding="large" marginBottom="medium">
        layoutBorderColor
      </Box>
    </>
```

## RoundCorners

```tsx
<>
      <Box border rounded="small" padding="large" marginBottom="medium">
        small
      </Box>
      <Box border rounded="medium" padding="large" marginBottom="medium">
        medium
      </Box>
      <Box border rounded="big" padding="large" marginBottom="medium">
        big
      </Box>
    </>
```

## Shadow

```tsx
<>
      <Box shadow="xs" padding="large" marginBottom="medium">
        xs
      </Box>
      <Box shadow="small" padding="large" marginBottom="medium">
        small
      </Box>
      <Box shadow="medium" padding="large" marginBottom="medium">
        medium
      </Box>
      <Box shadow="large" padding="large" marginBottom="medium">
        large
      </Box>
    </>
```

## Margin

```tsx
<>
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="xs">
          xs
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="small">
          small
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="medium">
          medium
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="large">
          large
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="xl">
          xl
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="xxl">
          xxl
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="xxxl">
          xxxl
        </Box>
      </Box>
      <Divider withoutMargin />
    </>
```

## Padding

```tsx
<>
      <Box style={{
    backgroundColor: "var(--color-sky-selected)"
  }} marginBottom="medium" border padding="xs">
        <Box backgroundColor="primaryBackgroundColor">xs</Box>
      </Box>
      <Box style={{
    backgroundColor: "var(--color-sky-selected)"
  }} marginBottom="medium" border padding="small">
        <Box backgroundColor="primaryBackgroundColor">small</Box>
      </Box>
      <Box style={{
    backgroundColor: "var(--color-sky-selected)"
  }} marginBottom="medium" border padding="medium">
        <Box backgroundColor="primaryBackgroundColor">medium</Box>
      </Box>
      <Box style={{
    backgroundColor: "var(--color-sky-selected)"
  }} marginBottom="medium" border padding="large">
        <Box backgroundColor="primaryBackgroundColor">large</Box>
      </Box>
      <Divider withoutMargin />
      <Box style={{
    backgroundColor: "var(--color-sky-selected)"
  }} marginBottom="medium" border padding="xl">
        <Box backgroundColor="primaryBackgroundColor">xl</Box>
      </Box>
      <Box style={{
    backgroundColor: "var(--color-sky-selected)"
  }} marginBottom="medium" border padding="xxl">
        <Box backgroundColor="primaryBackgroundColor">xxl</Box>
      </Box>
      <Box style={{
    backgroundColor: "var(--color-sky-selected)"
  }} marginBottom="medium" border padding="xxxl">
        <Box backgroundColor="primaryBackgroundColor">xxxl</Box>
      </Box>
    </>
```

## Disabled

```tsx
<Box backgroundColor="allgreyBackgroundColor" border disabled padding="large" marginBottom="medium">
      disabled
    </Box>
```

