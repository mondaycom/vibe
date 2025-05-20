# Storybook Code Examples

## Default with button

```tsx
const actions: ToastAction[] = useMemo(() => [{
  type: "button",
  content: "Button"
}], []);
return <Toast open autoHideDuration={5000} actions={actions} className="monday-storybook-toast_wrapper">
        General message toast
      </Toast>;
```

## Toast with link

```tsx
const actions: ToastAction[] = useMemo(() => [{
  type: "link",
  text: "Link to action",
  href: "https://monday.com"
}], []);
return <Toast open actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        General message toast
      </Toast>;
```

## Toast with loading

```tsx
return <Toast open loading className="monday-storybook-toast_wrapper">
        General message toast
      </Toast>;
```

## Success message

```tsx
const actions: ToastAction[] = useMemo(() => [{
  type: "button",
  content: "Undo 5"
}], []);
return <Toast open type="positive" actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        Positive message toast
      </Toast>;
```

## Error message

```tsx
const actions: ToastAction[] = useMemo(() => [{
  type: "button",
  content: "Button"
}], []);
return <Toast open actions={actions} type="negative" autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        Negative message toast
      </Toast>;
```

## Warning message

```tsx
const actions: ToastAction[] = useMemo(() => [{
  type: "button",
  content: "Button"
}], []);
return <Toast open actions={actions} type="warning" autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        Warning message toast
      </Toast>;
```

## Dark message

```tsx
const actions: ToastAction[] = useMemo(() => [{
  type: "button",
  content: "Button"
}], []);
return <Toast open actions={actions} type="dark" autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        Dark message toast
      </Toast>;
```

## FeedbackLoop

```tsx
const actions = useMemo(() => [{
  type: Toast.actionTypes.BUTTON,
  content: "Undo"
}], []);
return <Toast open type={Toast.types.POSITIVE} actions={actions} className="monday-storybook-toast_wrapper">
        We successfully deleted 1 item
      </Toast>;
```

## Animation

```tsx
const [successToastOpen, setSuccessToastOpen] = useState(false);
const [failureToastOpen, setFailureToastOpen] = useState(false);
const [isDeleting, setIsDeleting] = useState(false);
const onSuccessClick = useCallback(() => {
  setSuccessToastOpen(true);
  setIsDeleting(true);
  setTimeout(() => {
    setIsDeleting(false);
  }, 1000);
}, []);
const onFailureClick = useCallback(() => {
  setFailureToastOpen(true);
  setIsDeleting(true);
  setTimeout(() => {
    setIsDeleting(false);
  }, 1000);
}, []);
const actions = useMemo<ToastAction[]>(() => [{
  type: "button",
  content: "Undo"
}], []);
return <>
        <Button onClick={onSuccessClick} kind={Button.kinds.SECONDARY}>
          Success action
        </Button>
        <Button onClick={onFailureClick} kind={Button.kinds.SECONDARY}>
          Failure action
        </Button>
        <Toast open={successToastOpen} type={isDeleting ? "normal" : "positive"} actions={isDeleting ? [] : actions} onClose={() => setSuccessToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>
          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}
        </Toast>
        <Toast open={failureToastOpen} type={isDeleting ? "normal" : "negative"} onClose={() => setFailureToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>
          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}
        </Toast>
      </>;
```

