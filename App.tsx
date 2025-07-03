import { StatusBar, useColorScheme, View} from 'react-native';
import Onboarding from './screens/Onboarding/Onboarding';
import globalStyle from './assets/style/globalStyle';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={globalStyle.flex}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Onboarding />
    </View>
  );
};

export default App;
