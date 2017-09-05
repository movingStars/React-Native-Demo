import React from 'react';
import {AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ChatScreen from './App';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <Text>Hello, Chat App!</Text>
            <Button
              onPress={() => navigate('Chat')}
              title="Chat with Lucy"
            />
          </View>
        );
  }
}

const YXB_Android = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('YXB_Android', () => YXB_Android);