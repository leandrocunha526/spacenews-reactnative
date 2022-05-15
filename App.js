import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Details from "./src/pages/Details";
import { StatusBar } from 'expo-status-bar';

import { Appbar } from 'react-native-paper';

import FilterByTitle from "./src/pages/FilterByTitle";
import FilterByDate from './src/pages/FilterByDate';

const Stack = createStackNavigator();

function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header>
      <StatusBar style="light" />
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Space News" />
    </Appbar.Header>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: CustomNavigationBar,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="FilterByTitle" component={FilterByTitle} />
        <Stack.Screen name="FilterByDate" component={FilterByDate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
