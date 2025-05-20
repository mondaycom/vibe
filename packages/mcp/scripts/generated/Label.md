# Storybook Code Examples

## Kinds

```tsx
<Flex style={{
  marginLeft: "30px",
  marginTop: "10px",
  gap: "184px"
}}>
      <Flex direction="column" align="start" gap="large">
        <Label text="New" />
        <Text>Fill</Text>
      </Flex>
      <Flex direction="column" align="start" gap="large">
        <Label text="New" kind="line" />
        <Text>Outline</Text>
      </Flex>
    </Flex>
```

## Sizes

```tsx
<>
      <Label text="New" />
      <Label text="New" size="small" />
    </>
```

## Colors

```tsx
<>
      <Label text="New" />
      <Label text="New" color="negative" />
      <Label text="New" color="positive" />
      <Label text="New" color="dark" />
      <Label text="New" kind="line" />
      <Label text="New" color="negative" kind="line" />
      <Label text="New" color="positive" kind="line" />
      <Label text="New" color="dark" kind="line" />
    </>
```

## Clickable

```tsx
<>
      <Label text="New" onClick={NOOP} />
      <Label text="New" kind="line" onClick={NOOP} />
    </>
```

## Secondary label

```tsx
<Flex direction="column" gap="large">
      <Box style={{
    width: "300px"
  }}>
        <Flex align="center" gap="small">
          <Heading type="h3">Gannt</Heading>
          <Label text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1">
          Plan, track and present your projects visually using the Gannt chart
        </Text>
      </Box>
      <Box style={{
    width: "300px",
    marginTop: "8px"
  }}>
        <Flex align="center" gap="small">
          <Heading type="h3" style={{
        display: "inline"
      }}>
            Apps
          </Heading>
          <Label text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1" style={{
      marginTop: "8px"
    }}>
          Enhance your dashboard with widgets built on the monday apps framework
        </Text>
      </Box>
    </Flex>
```

## Celebration

```tsx
const [animate, setAnimate] = useState(false);
useEffect(() => {
  setTimeout(() => {
    setAnimate(false);
  }, 500);
}, [animate]);
return <>
        <Label text="New" kind="line" celebrationAnimation={animate} />
        <Button size="small" kind="tertiary" onClick={() => setAnimate(true)}>
          Click to celebrate
        </Button>
      </>;
```

