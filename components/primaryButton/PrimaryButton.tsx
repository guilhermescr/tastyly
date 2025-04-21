import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

type Props = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
};

export default function PrimaryButton({
  label,
  onPress,
  style,
  textStyle,
  icon,
}: Props) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
      {icon && <>{icon}</>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FF6F61',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    padding: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
