import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function HeaderStack({navigation, title}) {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#2196f3',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{marginLeft: 20}}
        onPress={() => navigation.pop()}>
        <Icon name="angle-left" size={24} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          marginRight: 35,
          fontWeight: 'bold',
          color: 'white',
          fontSize: 16,
        }}>
        {title}
      </Text>
      <View></View>
    </View>
  );
}
