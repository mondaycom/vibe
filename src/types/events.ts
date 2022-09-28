import React from "react";

export type GeneralEventType = Event | React.UIEvent;
export type GenericEventCallback = (ev: GeneralEventType) => unknown;
export type KeyboardEventCallback = (event: KeyboardEvent) => unknown;
