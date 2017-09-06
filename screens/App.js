import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  });
  render() {

  const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>Chat with {params.name} hahaha</Text>
      </View>
    );
  }
}

export default ChatScreen;