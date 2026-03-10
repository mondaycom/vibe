export const components = {
  'button/radius-default': 16,
  'button/radius-sm': 12,
  'list-item/negative-margin': -8,
} as const;

export type ComponentToken = keyof typeof components;
