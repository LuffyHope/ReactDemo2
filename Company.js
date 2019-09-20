import React from 'react';
import {
  View,
  Image,
} from 'react-native';

const Company = () => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Image style={{ width: 240, height: 90,alignSelf:'center'}}
                source={require('../ReactDemo2/android/app/src/main/res/mipmap-xhdpi/baidu.jpg')}/>
    </View>
  );
};


export default Company;
