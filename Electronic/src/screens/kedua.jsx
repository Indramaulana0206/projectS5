// Pencarian.js

import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text } from 'react-native';

const Kedua = () => {
  const [searchText, setSearchText] = useState('');

  const updateSearch = (text) => {
    setSearchText(text);
    // Implement logic untuk memproses pencarian di sini
  };

  return (
      <View style={{backgroundColor:'brown',height:100}}>
        <SearchBar
          placeholder="Cari..."
          onChangeText={updateSearch}
          value={searchText}
        />
        <Text style={{ color: 'black'}}>Hasil Pencarian: {searchText}</Text>
        {/* Tambahkan logika untuk menampilkan hasil pencarian di sini */
        <View style={{marginTop:20,}}>
          <Text>cofee</Text>
        </View>
        }
      </View>


  );
};

export default Kedua;
