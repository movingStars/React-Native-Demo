import React from 'react';
import {AppRegistry, Text, View, Button ,TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'

import ChatScreen from './screens/App';

class HomeScreen extends React.Component {

  constructor(props){

    super(props);
    this.state = {
        text:''
    }

  }

  componentDidMount() {
      SplashScreen.hide();//关闭启动页
  }

  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <Text>Hello, Chat App!</Text>
            <Button
              onPress={() => navigate('Chat',{name:'jiao'})}
              title="Chat with jiao"
            />

            <View style={{flex: 1,flexDirection:'row',justifyContent: 'space-between'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              </View>

            <View style={{padding: 10}}>
                <TextInput
                  style={{height: 40}}
                  placeholder="Type here to translate!"
                  onChangeText={(text) => this.setState({text})}
                  keyboardType='numeric'
                  returnKeyType='done'
                />
                <Text style={{padding: 10, fontSize: 42}}>
                  {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
              </View>

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