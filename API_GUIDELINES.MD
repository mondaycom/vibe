# API Guidelines

This doc is still work in progress and will constantly be updated.

## `data-testid`s
When testing the application code that uses vibe components, it is necessary to retrieve elements. for that, `data-testid`s are used (TODO - add a link to a guide about how to test).

Each component in the library should exposes a `data-testid` which is set on the root element of the component.
In case a `data-testid` was not provided, the library will provide a default one, here's an example:

```tsx
const SomeComponent = () => {
	return ( 
	  <div data-testid={`${props['data-testid']} || getTestId(ComponentDefaultTestId.SomeComponent, id)`}/>
      ...
	  </div>
  );
}
```

Inner parts of the component would also get a data-testid, which its parent component would usually prefix with its own name. for example:
```tsx
const SomeComponent = () => {
	return ( 
	  <div data-testid={`${props['data-testid']} || getTestId(ComponentDefaultTestId.SomeComponent, id)`}/>
      <InnerComponent data-testid={`${props['data-testid']-inner-component`}>
	  </div>
  );
}
```
