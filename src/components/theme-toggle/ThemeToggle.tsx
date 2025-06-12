import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useTheme } from '../../theme/ThemeProvider';

export const ThemeToggle = () => {
  const { toggleTheme, colorMode } = useTheme();
  return (
    <TouchableOpacity onPress={toggleTheme} style={{ padding: 10 }}>
      <Text>{colorMode === 'light' ? 'Switch to Dark' : 'Switch to Light'}</Text>
    </TouchableOpacity>
  );
};
