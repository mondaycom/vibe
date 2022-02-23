export function createEventHandler(handler) {
  if (!handler) {
    return;
  }

  let shouldStopPropagation = true;
  return e => {
    let event = {
      ...e,
      preventDefault() {
        e.preventDefault();
      },
      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },
      stopPropagation() {
        console.error(
          "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
        );
      },
      continuePropagation() {
        shouldStopPropagation = false;
      }
    };

    handler(event);

    if (shouldStopPropagation) {
      e.stopPropagation();
    }
  };
}
