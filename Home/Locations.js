import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function LocationsScreen({ navigation }) {
  return (
    <View >
      <MyStack />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Weird</Text>
      </View>

      <View style={styles.container}>
        <Text>MA</Text>
        <Button
          title="Go to MA locations"
          onPress={() => navigation.navigate('Location1')}
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

function Location1({ navigation }) {
  return (
    <View>

      <View style={styles.container}>
        <Text>Location1</Text>
        <Button
          title="Go back"
          onPress={() => navigation.navigate('LocationsScreen')}
        />
      </View>

      <View style={styles.container}>
        <Text>Location2</Text>
      </View>

      <View style={styles.container}>
        <Text>Location3</Text>
      </View>

      <View style={styles.container}>
        <Text>Location4</Text>
      </View>

      <View style={styles.container}>
        <Text>Location5</Text>
      </View>

      <View style={styles.container}>
        <Text>Location6</Text>
      </View>

    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer independent='true'>
      <Stack.Navigator>
        <Stack.Screen name="Location1" component={Location1} />
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

export default LocationsScreen;