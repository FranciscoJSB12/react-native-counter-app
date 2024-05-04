import { SafeAreaView } from 'react-native';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
//import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*<HelloWorldScreen />*/}
      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;
