import * as React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



/*
const BottomNavigator = () => {
   return(
        <View style={[styles.container, {
            flexDirection: "row"
        }]}>
            <View>
                <Button
                    title='Home'
                    icon={
                        <Icon 
                            name='home'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{marginRight: 10}}
                        />
                    }
                />
            </View>
            <View>
                <Button
                    title='Locations'
                    icon={
                        <Icon 
                            name='search-location'
                            type='font-awesome'
                            color='lightblue'
                            iconStyle={{marginRight: 5}}
                        />
                    }
                />
            </View>
            <View style={{flex: 2, backgroundColor: "orange"}}>
                <Button title='ready to work?' styles={styles.text} onPress={() => Navigate.navigate('ReadyToWork')}></Button>
            </View>
        </View>      
    );
};
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 200
        },
        text: {
            fontSize: 20,
            color: 'white'
        }
    });
    */

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ backgroundColor: '#694fad' }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomNavigator;
