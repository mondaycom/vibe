# Storybook Code Examples

## Sizes

```tsx
<div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Small" />
      <TextField placeholder="Medium" size="medium" />
      <TextField placeholder="Large" size="large" />
    </div>
```

## States

```tsx
<div className="monday-storybook-text-field_wrapper">
      <div className="monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing">
        <TextField placeholder="Disabled" size="medium" disabled />
        <TextField placeholder="With icon" iconName={Email} size="medium" />
        <TextField placeholder="With clickable icon" iconTooltipContent="Copy" iconName={Duplicate} onIconClick={() => {}} size="medium" />
      </div>
      <div className="monday-storybook-text-field_column-wrapper">
        <TextField placeholder="With field label" title="Name" size="medium" />
        <TextField placeholder="Success" validation={{
      status: "success"
    }} iconName={Check} size="medium" />
        <TextField placeholder="Error" validation={{
      status: "error"
    }} iconName={CloseSmall} size="medium" />
      </div>
    </div>
```

## Validation

```tsx
<div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Validate me" title="Name" size="medium" validation={{
    status: "error",
    text: "Validation text"
  }} />
    </div>
```

## Text field in a form

```tsx
<div className="monday-storybook-text-field_box">
      <Heading type="h1" weight="bold" maxLines={2}>
        Dark Mode Feedback From
      </Heading>
      <div className="monday-storybook-text-field_box_wrapper">
        <TextField title="Your Name" size="medium" placeholder="John Doe" />
        <TextField title="Email" size="medium" placeholder="email@monday.com" />
      </div>
    </div>
```

## Input field with placeholder text

```tsx
<div className="monday-storybook-text-field_size">
      <TextField title="Invite with email" labelIconName={Email} placeholder="Enter one or more email" size="medium" />
    </div>
```

## Required input field

```tsx
<div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Your email" title="Email Address" size="medium" required />
    </div>
```

## Input field with date

```tsx
<div className="monday-storybook-text-field_size">
      <TextField size="medium" type="date" />
    </div>
```

## Input field with date and time

```tsx
<div className="monday-storybook-text-field_size">
      <TextField size="medium" type="datetime-local" />
    </div>
```

