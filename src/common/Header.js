import {View, Text, TouchableOpacity,Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        backgroundColor:'#fff'
      }}>
        <TouchableOpacity style={{left:10}}>
       <Image
            source={require('../images/logo.png')}
            style={{
              width: 41,
              height: 41,
            }}
          />
           </TouchableOpacity>
           <TouchableOpacity style={{marginRight:200,marginTop:3}}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          color: '#000',
        }}>
        Become
      </Text>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 17,
          color: 'orange',
          bottom:5
        }}>
        Insider
      </Text>

      </TouchableOpacity>
     
      <TouchableOpacity
        style={{
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 30,
        }}>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
