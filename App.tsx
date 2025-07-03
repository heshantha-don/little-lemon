import { SafeAreaView, StatusBar, useColorScheme, Text } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Hello, World!</Text>
    </SafeAreaView>
  );
};

export default App;
