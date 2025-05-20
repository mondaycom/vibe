# Storybook Code Examples

## Button kinds

```tsx
<>
      <Button>Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="tertiary">Tertiary</Button>
    </>
```

## Sizes

```tsx
<>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </>
```

## Disabled

```tsx
<>
      <Button disabled>Primary</Button>
      <Button kind="secondary" disabled>
        Secondary
      </Button>
      <Button kind="tertiary" disabled>
        Tertiary
      </Button>
    </>
```

## States

```tsx
<>
      <Button>Regular</Button>
      <Button active>Active</Button>
    </>
```

## Positive and Negative

```tsx
<>
      <Button color="positive">Positive</Button>
      <Button color="negative">Negative</Button>
    </>
```

## Icons

```tsx
<>
      <Button rightIcon={Calendar}>Right icon</Button>
      <Button leftIcon={Calendar}>Left icon</Button>
    </>
```

## Loading state

```tsx
const [loading, setLoading] = useState(false);
const onClick = useCallback(() => {
  setLoading(true);
}, [setLoading]);
return <Button loading={loading} onClick={onClick}>
        Click here for loading
      </Button>;
```

## Success state

```tsx
const [success, setSuccess] = useState(false);
const onClick = useCallback(() => {
  setSuccess(true);
}, [setSuccess]);
return <Button success={success} onClick={onClick} successIcon={Check} successText="Success">
        Click here for success
      </Button>;
```

## On color states

```tsx
<>
      <div style={{
    display: "flex",
    flexDirection: "column"
  }}>
        <Text type={Text.types.TEXT1} style={{
      marginBottom: "var(--sb-spacing-small)"
    }}>
          Regular
        </Text>
        <div className="monday-storybook-button_on-color-button">
          <Button color="on-primary-color" marginRight>
            Primary on color
          </Button>
          <Button color="on-primary-color" kind="secondary" marginRight>
            Secondary on color
          </Button>
          <Button color="on-primary-color" kind="tertiary">
            Tertiary on color
          </Button>
        </div>
        <br />
        <Text type={Text.types.TEXT1} style={{
      marginBottom: "var(--sb-spacing-small)"
    }}>
          Disabled
        </Text>
        <div className="monday-storybook-button_on-color-button">
          <Button color="on-primary-color" disabled marginRight>
            Primary on color
          </Button>
          <Button color="on-primary-color" disabled marginRight kind="secondary">
            Secondary on color
          </Button>
          <Button color="on-primary-color" disabled kind="tertiary">
            Tertiary on color
          </Button>
        </div>
      </div>
    </>
```

## Adjacent buttons

```tsx
<div>
      <Button kind="secondary" size="small" ariaLabel="decrease zoom level" rightFlat>
        <Remove />
      </Button>
      <Button kind="secondary" size="small" ariaLabel="increase zoom level" leftFlat>
        <Add />
      </Button>
    </div>
```

