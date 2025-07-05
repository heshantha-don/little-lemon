import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';

import Home from '../screens/Home/Home';
import Onboarding from '../screens/Onboarding/Onboarding';

const Stack = createStackNavigator();

export const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{header: () => null, headerShown: false}}
            initialRouteName={Routes.Onboarding}
        >
            <Stack.Screen name={Routes.Onboarding} component={Onboarding} />
            <Stack.Screen name={Routes.Home} component={Home} />
        </Stack.Navigator>
    );
};