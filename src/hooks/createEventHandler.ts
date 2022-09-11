export function createEventHandler(handler: (event: UIEvent) => unknown) {
  if (!handler) {
    return;
  }

  let shouldStopPropagation = true;
  return (e: UIEvent) => {
    let event = {
      ...e,
      preventDefault() {
        e.preventDefault();
      },
      isDefaultPrevented() {
        return e.defaultPrevented;
      },
      stopPropagation() {
        console.error(
          "stopPropagation is now the default behavior for events. You can use continuePropagation() to revert this behavior."
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
