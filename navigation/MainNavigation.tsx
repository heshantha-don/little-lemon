import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Routes } from './Routes';
import { Constance } from '../assets/utils/Constance';

import Home from '../screens/Home/Home';
import Onboarding from '../screens/Onboarding/Onboarding';
import Profile from '../screens/Profile/Profile';

import FoodMenuTabTitle from '../components/FoodMenuTabTitle/FoodMenuTabTitle';
import FoodMenuTabContent from '../components/FoodMenuTabContent/FoodMenuTabContent';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const FoodMenuTabsNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: 'transparent',
                },
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderBottomColor: '#E5E5E5',
                    borderBottomWidth: 1,
                    paddingBottom: 12,
                },
            }}>
            <Tab.Screen name={Constance.STARTERS} 
                        options={{
                            tabBarLabel: ({ focused }) => <FoodMenuTabTitle title={Constance.STARTERS} isFocused={focused} />
                        }}
                        component={FoodMenuTabContent}
            />
            <Tab.Screen name={Constance.MAINS} 
                        options={{
                            tabBarLabel: ({ focused }) => <FoodMenuTabTitle title={Constance.MAINS} isFocused={focused} />
                        }}
                        component={FoodMenuTabContent}
            />
            <Tab.Screen name={Constance.DESSERTS} 
                        options={{
                            tabBarLabel: ({ focused }) => <FoodMenuTabTitle title={Constance.DESSERTS} isFocused={focused} />
                        }}
                        component={FoodMenuTabContent}
            />
            <Tab.Screen name={Constance.DRINKS} 
                        options={{
                            tabBarLabel: ({ focused }) => <FoodMenuTabTitle title={Constance.DRINKS} isFocused={focused} />
                        }}
                        component={FoodMenuTabContent}
            />
        </Tab.Navigator>
    );
};

export const NavigationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{header: () => null, headerShown: false}}
            initialRouteName={Routes.Onboarding}
        >
            <Stack.Screen name={Routes.Onboarding} component={Onboarding} />
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile}  />
        </Stack.Navigator>
    );
};