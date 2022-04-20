import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import HeaderStack from './components/HeaderStack';

export default function Detail({route, navigation}) {
  const {item} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#212121'}}>
      <StatusBar backgroundColor="#1976d2" />
      <HeaderStack navigation={navigation} title="Detail" />
      <View
        style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {item.judul}
        </Text>
        <Text style={{color: 'white', fontSize: 18}}>{item.desc}</Text>
      </View>
    </View>
  );
}
