import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Home/Homepage';
import TopBar from './Home/TopBar';
import BottomNavigator from './Home/BotomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Homepage />
      <BottomNavigator />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
