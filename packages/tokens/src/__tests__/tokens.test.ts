import { describe, it, expect } from 'vitest';
import { colors, dimensions, typography, motion, components, primitives } from '../index';

describe('@ezds/tokens — colors', () => {
  it('exports light, dark, and black modes', () => {
    expect(colors).toHaveProperty('light');
    expect(colors).toHaveProperty('dark');
    expect(colors).toHaveProperty('black');
  });

  it('dark mode is not identical to light mode', () => {
    expect(colors.dark).not.toEqual(colors.light);
  });

  it('black mode is not identical to light mode', () => {
    expect(colors.black).not.toEqual(colors.light);
  });

  it('all modes have the same token keys', () => {
    const lightKeys = Object.keys(colors.light).sort();
    const darkKeys = Object.keys(colors.dark).sort();
    const blackKeys = Object.keys(colors.black).sort();
    expect(darkKeys).toEqual(lightKeys);
    expect(blackKeys).toEqual(lightKeys);
  });

  it('color values are valid hex strings or rgba', () => {
    const hexOrRgba = /^(#[0-9a-fA-F]{3,8}|rgba?\(.+\))$/;
    for (const value of Object.values(colors.light)) {
      expect(value).toMatch(hexOrRgba);
    }
  });

  it('contains required semantic tokens', () => {
    expect(colors.light).toHaveProperty('color/background/primary');
    expect(colors.light).toHaveProperty('color/text/default');
    expect(colors.light).toHaveProperty('color/background/accent/default');
  });
});

describe('@ezds/tokens — dimensions', () => {
  it('exports a flat object', () => {
    expect(typeof dimensions).toBe('object');
    expect(dimensions).not.toBeNull();
  });

  it('spacing values are positive numbers', () => {
    const spacingEntries = Object.entries(dimensions).filter(([k]) => k.startsWith('space/'));
    expect(spacingEntries.length).toBeGreaterThan(0);
    for (const [, value] of spacingEntries) {
      expect(typeof value).toBe('number');
      expect(value as number).toBeGreaterThan(0);
    }
  });

  it('disabled/opacity is 0.38', () => {
    expect(dimensions['disabled/opacity']).toBe(0.38);
  });

  it('shadow values are strings', () => {
    expect(typeof dimensions['shadow/small']).toBe('string');
    expect(dimensions['shadow/small']).toContain('rgba');
  });
});

describe('@ezds/tokens — motion', () => {
  it('exports all 9 motion tokens', () => {
    const keys = Object.keys(motion);
    expect(keys).toHaveLength(9);
  });

  it('duration tokens end in ms', () => {
    expect(motion['motion/productive/short']).toMatch(/\d+ms$/);
    expect(motion['motion/expressive/long']).toMatch(/\d+ms$/);
  });

  it('timing tokens are cubic-bezier values', () => {
    expect(motion['motion/timing/enter']).toMatch(/^cubic-bezier/);
    expect(motion['motion/timing/transition']).toMatch(/^cubic-bezier/);
  });
});

describe('@ezds/tokens — typography', () => {
  it('exports font-family tokens', () => {
    expect(typography).toHaveProperty('font-family/body');
    expect(typography).toHaveProperty('font-family/title');
  });

  it('font-family/body includes IBM Plex Sans', () => {
    expect(typography['font-family/body']).toContain('IBM Plex Sans');
  });

  it('font-family/title includes Poppins', () => {
    expect(typography['font-family/title']).toContain('Poppins');
  });

  it('font-weight tokens are numeric', () => {
    expect(typeof typography['font-weight/40']).toBe('number');
    expect(typeof typography['font-weight/60']).toBe('number');
  });
});
