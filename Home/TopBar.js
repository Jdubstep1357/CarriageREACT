import React from 'react';
import { View, StyleSheet } from 'react-native';

const TopBar = () => {
    return (
        <View style={styles.container}>
        </View>
    );
}
//changed marginbottom from 200 to 20 so pages could fit 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(255,100,100)',
        width: 1000,
        paddingTop: 100,
        marginBottom: 20
    },
});

export default TopBar;
