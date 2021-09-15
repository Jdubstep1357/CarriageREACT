import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { Input, CheckBox, Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

// modal form for Carriage Town Employees
class LoginTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            locations: ''
        };
    }

    static navigationOptions = {
        title: 'Login',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={{ color: tintColor }}
            />
        )
    }

    handleLogin() {
        console.log(JSON.stringify(this.state));
        if (this.state.remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    phone: this.state.phone,
                    email: this.state.email,
                    locations: this.state.locations
                })
            ).catch(error => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch(
                error => console.log('Could not delete user info', error)
            );
        }
    }

    componentDidMount() {
        SecureStore.getItemAsync('userinfo')
            .then(userdata => {
                const userinfo = JSON.parse(userdata);
                if (userinfo) {
                    this.setState({ firstname: userinfo.firstname });
                    this.setState({ lastname: userinfo.lastname });
                    this.setState({ phone: userinfo.phone });
                    this.setState({ email: userinfo.email });
                    this.setState({ locations: userinfo.locations });
                    this.setState({ remember: true })
                }
            });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles2.container}>
                    <Input
                        placeholder='Firstname'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={firstname => this.setState({ firstname })}
                        value={this.state.firstname}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Lastname'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={lastname => this.setState({ lastname })}
                        value={this.state.lastname}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Phone'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={phone => this.setState({ phone })}
                        value={this.state.phone}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='email'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Locations'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={locations => this.setState({ locations })}
                        value={this.state.locations}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handleLogin()}
                            title='Submit'
                            icon={
                                <Icon
                                    name='sign-in'
                                    type='font-awesome'
                                    color='#fff'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={{ backgroundColor: '#5637DD' }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
//home page 
function HomeScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 2, backgroundColor: "green" }}>
                <Button title="home" style={styles.text} onPress={() => navigation.navigate('Home')}>
                </Button>
                <Button title="locations" style={styles.text} onPress={() => navigation.navigate('Locations')}>
                </Button>
                <Button title="ready to work?" style={styles.text} onPress={() => navigation.navigate('ReadyToWork')}>
                </Button>

            </View>
        </ScrollView>

    );
}
// locations page
function LocationsScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 2, backgroundColor: "green" }}>
                <Button title="home" style={styles.text} onPress={() => navigation.navigate('Home')}>
                </Button>
                <Button title="locations" style={styles.text} onPress={() => navigation.navigate('Locations')}>
                </Button>
                <Button title="ready to work?" style={styles.text} onPress={() => navigation.navigate('ReadyToWork')}>
                </Button>

            </View>
        </ScrollView>
    );
}
//ready to work page with the form or modal
function ReadyToWorkScreen({ navigation }) {

    return (
        <ScrollView>
            <LoginTab />
            <View style={{ flex: 2, backgroundColor: "green" }}>
                <Button title="home" style={styles.text} onPress={() => navigation.navigate('Home')}>
                </Button>
                <Button title="locations" style={styles.text} onPress={() => navigation.navigate('Locations')}>
                </Button>
                <Button title="ready to work?" style={styles.text} onPress={() => navigation.navigate('ReadyToWork')}>
                </Button>

            </View>
        </ScrollView>
    );
}
// this takes the set names and redirects the user to them when buttons are 
// pressed on the bottom navigator 
const Stack = createNativeStackNavigator();

const BottomNavigator = () => {
    return (
        <View style={[styles.container, {
            flexDirection: "row"
        }]}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Locations" component={LocationsScreen} />
                    <Stack.Screen name="ReadyToWork" component={ReadyToWorkScreen} />
                </Stack.Navigator>
            </NavigationContainer>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 400
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        height: 500
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});

export default BottomNavigator;
