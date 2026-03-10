// Motion tokens — values sourced from packages/web/src/motion.scss
// Figma motion collection will be added in Step 10.0C (Figma Console MCP)
export const motion = {
  'motion/productive/short':   '70ms',
  'motion/productive/medium':  '100ms',
  'motion/productive/long':    '150ms',
  'motion/expressive/short':   '250ms',
  'motion/expressive/long':    '400ms',
  'motion/timing/enter':       'cubic-bezier(0, 0, 0.35, 1)',
  'motion/timing/exit':        'cubic-bezier(0.4, 0, 1, 1)',
  'motion/timing/transition':  'cubic-bezier(0.4, 0, 0.2, 1)',
  'motion/timing/emphasize':   'cubic-bezier(0, 0, 0.2, 1.4)',
} as const;

export type MotionToken = keyof typeof motion;
