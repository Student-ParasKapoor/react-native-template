import { ButtonKind, ButtonSize } from 'boilerplate-react-native/src/types/button';
import { useTheme } from 'native-base';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { useThemeColor } from '@/utils/use-theme-color.hook';

export const useButtonStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    activityIndicator: {
      marginHorizontal: theme.space['1'],
    },
    button: {
      alignItems: 'center',
      borderRadius: theme.radii.md,
      flexDirection: 'row',
      gap: theme.space['2'],
      justifyContent: 'center',
      minHeight: 40,
    },
    enhancer: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 24,
    },
    horizontalStack: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: theme.space['1'],
    },
  });
};

export const useKindStyles = () => {
  const theme = useTheme();
  const primaryText = useThemeColor('lightText');
  const dangerText = useThemeColor('lightText');

  return {
    [ButtonKind.PRIMARY]: StyleSheet.create({
      base: {
        backgroundColor: theme.colors.primary['500'],
        borderRadius: theme.radii.md,
      },
      enabled: { opacity: 1 },
      disabled: { opacity: 0.5 },
      text: { color: primaryText },
    }),
    [ButtonKind.SECONDARY]: StyleSheet.create({
      base: {
        borderRadius: theme.radii.md,
        borderColor: theme.colors.primary['500'],
        borderWidth: 1,
      },
      enabled: { opacity: 1 },
      disabled: { opacity: 0.5 },
      text: { color: theme.colors.primary['500'] },
    }),
    [ButtonKind.TERTIARY]: StyleSheet.create({
      base: {
        borderWidth: 0,
      },
      enabled: { opacity: 1 },
      disabled: { opacity: 0.5 },
      text: { color: theme.colors.primary['500'] },
    }),
    [ButtonKind.DANGER]: StyleSheet.create({
      base: {
        backgroundColor: theme.colors.danger['700'],
        borderRadius: theme.radii.md,
      },
      enabled: { opacity: 1 },
      disabled: { opacity: 0.5 },
      text: { color: dangerText },
    }),
  } as Record<
    ButtonKind,
    { base: ViewStyle; disabled: ViewStyle; enabled: ViewStyle; text: TextStyle }
  >;
};

export const useSizeStyles = () => {
  const theme = useTheme();

  return {
    [ButtonSize.COMPACT]: StyleSheet.create({
      container: { padding: theme.space[1] },
      text: { fontSize: theme.fontSizes.sm },
    }),
    [ButtonSize.DEFAULT]: StyleSheet.create({
      container: { padding: theme.space[2] },
      text: { fontSize: theme.fontSizes.md },
    }),
    [ButtonSize.LARGE]: StyleSheet.create({
      container: { padding: theme.space[3] },
      text: { fontSize: theme.fontSizes.lg },
    }),
    [ButtonSize.MINI]: StyleSheet.create({
      container: { padding: theme.space[1] / 2 },
      text: { fontSize: theme.fontSizes.xs },
    }),
  } as Record<ButtonSize, { container: ViewStyle; text: TextStyle }>;
};
