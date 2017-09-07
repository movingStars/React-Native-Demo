import React from 'react';
import {AppRegistry, Text, View, Button ,TextInput, Image, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'

//tabBar 页面
import ChatScreen from './screenSheet/App';
import Home from './screenSheet/tabBar/homeScreen/index';
import Borrow from './screenSheet/tabBar/borrowScreen/index';
import Lend from './screenSheet/tabBar/lendScreen/index';
import Search from './screenSheet/tabBar/searchScreen/index';
import Person from './screenSheet/tabBar/personScreen/index';

//tabBar 图片
const inCh = require('./imgs/tabBar/in-ch.png');
const inUn = require('./imgs/tabBar/in-un.png');
const indexCh = require('./imgs/tabBar/index-ch.png');
const indexUn = require('./imgs/tabBar/index-un.png');
const outCh = require('./imgs/tabBar/out-ch.png');
const outUn = require('./imgs/tabBar/out-un.png');
const searchCh = require('./imgs/tabBar/search-ch.png');
const searchUn = require('./imgs/tabBar/search-un.png');
const personCh = require('./imgs/tabBar/person-ch.png');
const personUn = require('./imgs/tabBar/person-un.png');

//首页
class HomeScreen extends React.Component {
  componentDidMount() {
    SplashScreen.hide();//关闭启动页
  }

  static navigationOptions = {
      tabBarLabel: '首页',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? indexCh : indexUn}
          style={[styles.icon]}
        />
      )
  };

  render() {
    return (
        <Home navigation={this.props.navigation}/>
    );
  }
}

//求借款
class BorrowScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel: '求借款',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? inCh : inUn}
          style={[styles.icon]}
        />
      )
  };
  render() {
    return <Borrow navigation={this.props.navigation}/>
  }
}

//去出借
class LendScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel: '去出借',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? outCh : outUn}
          style={[styles.icon]}
        />
      )
  };
  render() {
    return <Lend navigation={this.props.navigation}/>
  }
}

//查信用
class CreditScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel: '查信用',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? searchCh : searchUn}
          style={[styles.icon]}
        />
      )
  };
  render() {
    return <Search navigation={this.props.navigation}/>
  }
}

//我的
class PersonScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel: '我的',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? personCh : personUn}
          style={[styles.icon]}
        />
      )
  };
  render() {
    return <Person navigation={this.props.navigation}/>
  }
}

//tabBar配置
const MainScreenNavigator = TabNavigator({
    Home: { screen: HomeScreen },
    Borrow: { screen: BorrowScreen },
    Lend: { screen: LendScreen },
    Credit: { screen: CreditScreen },
    Person: { screen: PersonScreen },
  },{
     tabBarPosition: 'bottom',
     animationEnabled :false,
     //swipeEnabled:false,
     lazy:true,
     tabBarOptions: {
       labelStyle: {
         fontSize: 12,
         color:'#dbb76b',
         marginTop:0
       },
       style: {
         backgroundColor: '#fff',
         borderTopWidth:1,
         borderTopColor:'#ddd',
         height:56
       },
       indicatorStyle :{
         height:0
       },
       iconStyle:{

       },
       showIcon: true
     }
  }
);

//tabBar 不设置导航条
MainScreenNavigator.navigationOptions = {
  header:null
};

//tabBar图标的样式
const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

//导航页面配置
const YXB_Android = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('YXB_Android', () => YXB_Android);