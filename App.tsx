import { StatusBar, useColorScheme, View} from 'react-native';
import globalStyle from './assets/style/globalStyle';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './navigation/MainNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <View style={globalStyle.flex}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationStack />
      </View>
    </NavigationContainer>
  );
};

export default App;
