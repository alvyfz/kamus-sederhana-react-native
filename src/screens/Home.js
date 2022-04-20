import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderHome from './components/HeaderHome';

export default function Home({navigation}) {
  const [data, setData] = useState([
    {judul: 'jeruk', desc: 'jeruk adalah sebuah buah.'},
    {judul: 'apel', desc: 'apel adalah sebuah buah.'},
    {judul: 'mangga', desc: 'mangga adalah sebuah buah.'},
    {judul: 'durian', desc: 'durian adalah sebuah buah.'},
    {judul: 'semangka', desc: 'semangka adalah sebuah buah.'},
    {judul: 'peer', desc: 'peer adalah sebuah buah.'},
    {judul: 'rambutan', desc: 'rambutan adalah sebuah buah.'},
    {judul: 'pepaya', desc: 'pepaya adalah sebuah buah.'},
    {judul: 'jeruk nipis', desc: 'jeruk nipis adalah sebuah buah.'},
    {judul: 'jeruk bali', desc: 'jeruk bali adalah sebuah buah.'},
    {judul: 'tomat', desc: 'tomat adalah sebuah buah.'},
    {judul: 'nangka', desc: 'nangka adalah sebuah buah.'},
    {judul: 'naga', desc: 'naga adalah sebuah buah.'},
  ]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (search.length > 0) {
      setFilteredData(
        data.filter(item => {
          return item.judul.toLowerCase().includes(search.toLowerCase());
        }),
      );
    } else {
      setFilteredData(data);
    }
  }, [search]);

  return (
    <View style={{flex: 1, backgroundColor: '#212121'}}>
      <StatusBar backgroundColor="#1976d2" />
      <HeaderHome navigation={navigation} />
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search"
        placeholderTextColor="gray"
        style={{
          backgroundColor: 'white',
          padding: 10,
          marginHorizontal: 20,
          borderRadius: 5,
          color: 'black',
          marginVertical: 10,
        }}
      />
      <FlatList
        data={filteredData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {item})}
            style={{
              marginVertical: 5,
              marginHorizontal: 20,
              backgroundColor: '#2196f3',
              borderRadius: 5,
              padding: 10,
              elevation: 3,
            }}>
            <Text style={{color: 'white'}}>{item.judul}</Text>
            <Text style={{color: 'white'}}>{item.desc}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(v, i) => i.toString()}
      />
    </View>
  );
}
