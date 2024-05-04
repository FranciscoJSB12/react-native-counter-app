import { View, Text, StyleSheet } from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
