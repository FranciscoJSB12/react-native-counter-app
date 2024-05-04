import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      <PrimaryButton
        onLongPress={() => setCounter(0)}
        onPress={() => setCounter(prev => prev + 1)}>
        Increment
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
