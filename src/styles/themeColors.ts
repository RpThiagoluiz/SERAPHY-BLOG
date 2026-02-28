import { theme } from './theme';
import type { Theme } from './theme';

export type ColorWeight = keyof Theme['colors']['neutrals'];

export type BrandColorWeight = keyof Theme['colors']['primary'];

export type ColorBase = keyof Theme['colors'];

function buildPaths<K extends ColorBase>(group: K) {
  const keys = Object.keys(
    theme.colors[group],
  ) as (keyof (typeof theme.colors)[K])[];
  return Object.fromEntries(
    keys.map((k) => [k, `${String(group)}.${String(k)}`]),
  ) as Record<keyof (typeof theme.colors)[K], string>;
}

function buildBrandPaths<K extends 'primary' | 'secondary' | 'accent'>(
  group: K,
) {
  const paths = buildPaths(group);
  return { ...paths, base: paths.medium } as typeof paths & { base: string };
}

const paths = {
  neutrals: buildPaths('neutrals'),
  primary: buildBrandPaths('primary'),
  secondary: buildBrandPaths('secondary'),
  accent: buildBrandPaths('accent'),
} as const;

export const themeColors = paths;

export type ThemeColorPath =
  | (typeof paths.neutrals)[keyof typeof paths.neutrals]
  | (typeof paths.primary)[keyof typeof paths.primary]
  | (typeof paths.secondary)[keyof typeof paths.secondary]
  | (typeof paths.accent)[keyof typeof paths.accent];

const colorCache = new WeakMap<Theme, Map<string, string>>();

function getCacheForTheme(theme: Theme): Map<string, string> {
  let cache = colorCache.get(theme);
  if (!cache) {
    cache = new Map();
    colorCache.set(theme, cache);
  }
  return cache;
}

export function getThemeColor(
  theme: Theme,
  path: ThemeColorPath | string,
): string | undefined {
  const cache = getCacheForTheme(theme);

  if (cache.has(path)) {
    return cache.get(path);
  }

  const value = path
    .split('.')
    .reduce<unknown>(
      (acc, part) =>
        acc && typeof acc === 'object' && part in acc
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      theme.colors as Record<string, unknown>,
    );

  if (typeof value === 'string') {
    cache.set(path, value);
    return value;
  }

  return undefined;
}

export function hexToRgba(hex: string, opacity: number): string {
  const match =
    hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i) ||
    hex.match(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);

  if (!match) return hex;

  const [r, g, b] = match
    .slice(1)
    .map((x) => parseInt(x.length === 1 ? x + x : x, 16));

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
