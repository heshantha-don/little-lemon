import { StatusBar, useColorScheme, View} from 'react-native';
import Onboarding from './screens/Onboarding/Onboarding';
import globalStyle from './assets/style/globalStyle';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './navigation/MainNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <View style={globalStyle.flex}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainNavigation />
      </View>
    </NavigationContainer>
  );
};

export default App;
