import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Text, Button, View } from 'react-native';

class HomeScreen extends React.Component{

    render(){

        return (

            <View>
                <Text>home</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat',{name:'姣'})}
                    title="点我"
                />
            </View>

        );

    }

}

export default HomeScreen;