import { ReactNode } from 'react';
import { Text, Pressable, StyleSheet, Platform } from 'react-native';

interface Props {
  onPress?: () => void;
  onLongPress?: () => void;
  children: ReactNode;
}

export const PrimaryButton = ({ onPress, onLongPress, children }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onLongPress={() => onPress && onPress()}
      onPress={() => onLongPress && onLongPress()}>
      <Text style={{ color: Platform.OS === 'android' ? 'white' : '#4746Ab' }}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
