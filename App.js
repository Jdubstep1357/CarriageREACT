import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Homepage from './Home/Homepage';
import TopBar from './Home/TopBar';
import BottomNavigator from './Home/BotomNavigator';


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TopBar />
        <Homepage />
        <BottomNavigator />

      </View>
    </ScrollView>
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
