import React from 'react';
import { View, StyleSheet } from 'react-native';

const TopBar = () => {
   return(
        <View style={styles.container}>
        </View>
   );
}

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'rgb(255,100,100)',
            width: 1000,
            paddingTop: 50,
            marginBottom: 100
        },
    });

export default TopBar;
