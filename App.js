import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Homepage from './Home/Homepage';
import TopBar from './Home/TopBar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Locations } from './Home/Locations';


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

function Locations() {
  return (
    <View>
    <Locations />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
               <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Locations" component={Locations} />
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
