import { View, Text, StyleSheet } from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="middle" style={styles.title}>
        Hola mundo desde react native
      </Text>
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
