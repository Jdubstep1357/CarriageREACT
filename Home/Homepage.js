import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MainText = () => {
   return(
        <View style={styles.top}>

            <Text style={styles.container}>
                Hello!
            </Text>
        </View>
   );
}

    const styles = StyleSheet.create({
        container: {
            fontSize: 60,
            color: '#48b74e',
            backgroundColor: 'green'
        },
    });

export default MainText;
