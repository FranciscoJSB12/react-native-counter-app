import { SafeAreaView } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWorldScreen />
    </SafeAreaView>
  );
};

export default App;
