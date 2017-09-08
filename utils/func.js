const ImagePicker = require('react-native-image-picker');

import { ToastAndroid, Alert } from 'react-native';


/*
 * Toast提示语  没有mask  参数为必须
 * message ==>  提示语
 * duration ==>  显示的时间长短  short/long
 * location ==>  显示的位置  top/center/bottom
*/
export const myToast = (message,duration,location) => {

    const arg1 = ToastAndroid[`${duration.toUpperCase()}`];
    const arg2 = ToastAndroid[`${location.toUpperCase()}`];

    ToastAndroid.showWithGravity(message, arg1, arg2);

}

export const myAlert = () => {

    Alert.alert(
        '提示',
        '哈哈哈',
        [
            {text: '确认', onPress: () => console.log('OK Pressed!')},
        ]
    )

}