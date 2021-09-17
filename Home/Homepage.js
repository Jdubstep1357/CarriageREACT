import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MainText = () => {
    return (

        <View>



            <View style={styles.container}>
                <Text>first one</Text>
            </View>

            <Text style={styles.HeaderText}>
                What we do for you
            </Text>


            <View style={styles.Pic} />
            <Text style={styles.BigText} >
                We clean your stores
            </Text>
            <Text style={styles.SmallText}>
                Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum
            </Text>

            <View style={styles.Pic} />
            <Text style={styles.BigText} >
                We wash windows
            </Text>
            <Text style={styles.SmallText}>
                Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum
            </Text>



            <View style={styles.Pic} />
            <Text style={styles.BigText} >
                We disinfect a lot things
            </Text>
            <Text style={styles.SmallText}>
                Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum
            </Text>


            <Text style={styles.HeaderText}>
                How we keep our employees safe
            </Text>


            <View style={styles.Pic} />
            <Text style={styles.BigText} >
                We all wear masks!
            </Text>
            <Text style={styles.SmallText}>
                Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum
            </Text>

            <View style={styles.Pic} />
            <Text style={styles.BigText} >
                We obey covid 19's guidelines
            </Text>
            <Text style={styles.SmallText}>
                Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum
            </Text>



            <View style={styles.Pic} />
            <Text style={styles.BigText} >
                We strictly adhere to stuff
            </Text>
            <Text style={styles.SmallText}>
                Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum Lorem ipsum Lorem ipsum  Loremipsum Lorem ipsum
            </Text>



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

export default MainText;
