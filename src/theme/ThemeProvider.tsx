import { NativeBaseProvider } from 'native-base';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { Appearance } from 'react-native';

import { lightTheme, darkTheme } from '../app-theme';

type ThemeContextType = {
  toggleTheme: () => void;
  colorMode: 'light' | 'dark';
};

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  colorMode: 'light',
});

export const AppThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const systemColor = Appearance.getColorScheme() || 'light';
  const [colorMode, setColorMode] = useState<'light' | 'dark'>(systemColor);

  const toggleTheme = () => setColorMode(prev => (prev === 'light' ? 'dark' : 'light'));
  const theme = colorMode === 'dark' ? darkTheme : lightTheme;

  const value = useMemo(() => ({ toggleTheme, colorMode }), [toggleTheme, colorMode]);

  return (
    <ThemeContext.Provider value={value}>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
