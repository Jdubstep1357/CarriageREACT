import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function LocationOneScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>MALocation1</Text>
      </View>

      <View style={styles.container}>
        <Text>MALocation2</Text>
      </View>

      <View style={styles.container}>
        <Text>MALocation3</Text>
      </View>

      <View style={styles.container}>
        <Text>MALocation4</Text>
      </View>

      <View style={styles.container}>
        <Text>MALocation5</Text>
      </View>

      <View style={styles.container}>
        <Text>MALocation6</Text>
      </View>

    </ScrollView>
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

export default LocationOneScreen;