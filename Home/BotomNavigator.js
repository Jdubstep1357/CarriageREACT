import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, Button} from 'react-native-elements';

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
                <Text style={styles.text}>
                        Ready To Work?
                </Text>
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

export default BottomNavigator;
