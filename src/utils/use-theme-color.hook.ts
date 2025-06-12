import { useTheme as useNBTheme } from 'native-base';
import { useMemo } from 'react';

export const useThemeColor = (color: `${string}` | `${string}.${string}`): string => {
  const { colors } = useNBTheme();

  return useMemo(() => {
    const [colorKey, shade = '200'] = color.split('.') as [string, string];

    const dynamicColors = colors as Record<string, any>;

    if (!dynamicColors[colorKey]) return color;

    const themeColor = dynamicColors[colorKey];

    return typeof themeColor === 'string' ? themeColor : themeColor?.[shade] ?? color;
  }, [color, colors]);
};
