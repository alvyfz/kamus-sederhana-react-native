import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import HeaderStack from './components/HeaderStack';
export default function About({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#212121'}}>
      <StatusBar backgroundColor="#1976d2" />
      <HeaderStack navigation={navigation} title="About" />
      <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
        Aplikasi ini dibuat oleh Alvy Fauzi
      </Text>
    </View>
  );
}
