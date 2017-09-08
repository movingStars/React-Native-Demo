import React from 'react';
import { View, Text, Button, Image, ToastAndroid, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

var ImagePicker = require('react-native-image-picker');

var options = {
  title: '选择图片',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'从相册选择'
};

class ChatScreen extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            avatarSource:require('../imgs/tabBar/in-ch.png')
        };
    }

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  });

  chooseImg = () => {

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });

        ToastAndroid.show('图片选中', ToastAndroid.LONG);

      }
    });

  }

  render() {

  const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>Chat with {params.name}</Text>
        <Button
            onPress = {this.chooseImg}
            title="选择图片"
        />
        <View
            style={{flex:1,flexDirection:'row',justifyContent:'center'}}

            onPress={Alert.alert(
               'Alert Title',
               '哈哈哈',
               [
                    {text: '确认', onPress: () => console.log('OK Pressed!')},
               ]
            )}
        >
           <Image
              source={this.state.avatarSource}
              style={{width:100,height:100,marginTop:100}}
           />
        </View>
      </View>
    );
  }
}

export default ChatScreen;