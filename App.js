import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Homepage from './Home/Homepage';
import TopBar from './Home/TopBar';
import BottomNavigator from './Home/BotomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

/* 
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <BottomNavigator />
        <TopBar />
        <Homepage />

      </View>
    </ScrollView>
  );
}
*/

//Home page all of the content of the homepage goes here
//how to put in information on it
function HomeScreen() {
  return (
    <ScrollView>
    <View styles={styles.container}>
    <TopBar />
    <Homepage />
    </View>
    </ScrollView>
  );
}

//Locations page
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
               <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>

      
   
 

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
