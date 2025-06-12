import { ButtonKind, ButtonSize } from 'boilerplate-react-native/src/types/button';
import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, Text, View, GestureResponderEvent, DimensionValue } from 'react-native';

import Spinner from '../spinner/spinner';

import { useButtonStyles, useKindStyles, useSizeStyles } from './button.styles';

interface ButtonProps {
  disabled?: boolean;
  endEnhancer?: React.ReactElement | string;
  isLoading?: boolean;
  kind?: ButtonKind;
  onClick?: (event: GestureResponderEvent) => void;
  size?: ButtonSize;
  startEnhancer?: React.ReactElement | string;
  width?: DimensionValue;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  disabled = false,
  endEnhancer,
  isLoading = false,
  kind = ButtonKind.PRIMARY,
  onClick,
  size = ButtonSize.DEFAULT,
  startEnhancer,
  width,
}) => {
  const kindStyles = useKindStyles();
  const sizeStyles = useSizeStyles();
  const styles = useButtonStyles();

  const kindStyle = kindStyles[kind];
  const sizeStyle = sizeStyles[size];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        kindStyle.base,
        disabled || isLoading ? kindStyle.disabled : kindStyle.enabled,
        sizeStyle.container,
        width ? { width } : {},
      ]}
      disabled={disabled || isLoading}
      onPress={onClick}
      accessibilityRole="button"
    >
      <View style={styles.horizontalStack}>
        {startEnhancer && (
          <View style={styles.enhancer}>
            {typeof startEnhancer === 'string' ? (
              <Text style={[kindStyle.text, sizeStyle.text]}>{startEnhancer}</Text>
            ) : (
              startEnhancer
            )}
          </View>
        )}
        <Text style={[kindStyle.text, sizeStyle.text]}>{children}</Text>
        {isLoading && <Spinner />}
        {endEnhancer && (
          <View style={styles.enhancer}>
            {typeof endEnhancer === 'string' ? (
              <Text style={[kindStyle.text, sizeStyle.text]}>{endEnhancer}</Text>
            ) : (
              endEnhancer
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
