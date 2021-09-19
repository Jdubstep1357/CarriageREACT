import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Location1Screen from './Location1';

//I call the navigation function here 
//Problem happens at line 19, no declaration is found
function LocationsScreen({ navigation }) {
  return (
    <View >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Weird</Text>
      </View>

      <View style={styles.container}>
        <Text>MA</Text>
        <Button
          title="Go to MA locations"
          onPress={() => navigation.navigate({ name: 'Location1Screen' })}
        />
      </View>

      <View style={styles.container}>
        <Text>VT</Text>
      </View>

      <View style={styles.container}>
        <Text>NH</Text>
      </View>

    </View>
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

export default LocationsScreen;