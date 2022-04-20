import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function HeaderHome({navigation}) {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#2196f3',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View></View>
      <Text
        style={{
          marginLeft: 20,
          fontWeight: 'bold',
          color: 'white',
          fontSize: 16,
        }}>
        Home
      </Text>
      <TouchableOpacity
        style={{marginRight: 20}}
        onPress={() => navigation.navigate('About')}>
        <Icon name="user" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
