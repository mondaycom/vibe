import React from "react";

export type GeneralEventType = Event | React.UIEvent;
export type GenericEventCallback = (this: HTMLElement, ev: GeneralEventType) => unknown;
export type KeyboardEventCallback = (event: KeyboardEvent) => unknown;
