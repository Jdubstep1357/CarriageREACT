import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LocationsScreen from './Locations';
import LocationOneScreen from './LocationOne';
import { createStackNavigator } from '@react-navigation/stack';
import LocationOneInfoScreen from './LocationOneInfo';

<View>
  <LocationsScreen />

  <LocationOneScreen />
</View>

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator initialRouteName="Locations">
        <Stack.Screen name="OneLocation" component={LocationOneScreen} />
        <Stack.Screen name="InfoOneLocation" component={LocationOneInfoScreen} />
        <Stack.Screen name="Locations" component={LocationsScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    borderColor: '#48b74e',
    borderWidth: 5
  },

  Pic: {
    padding: 150,
    borderColor: '#48b74e',
    borderWidth: 5,
    marginVertical: 30
  },

  topBox: {
    backgroundColor: 'blue',
    width: 200
  },
  HeaderText: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 150,
    fontWeight: 'bold'
  },
  BigText: {
    fontSize: 33,
    textAlign: 'center',
    marginTop: 20
  },
  SmallText: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5
  },
});