import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/colors';
import Home from '../screens/Home';
import Character from '../screens/Character';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={
        {
          headerTitleAlign: 'center',
          title: 'Marvel Characters',
          headerStyle: {
            backgroundColor: colors.green
          }
        }
      }>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Character" component={Character} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;