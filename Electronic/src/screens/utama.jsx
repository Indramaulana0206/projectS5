import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Utama = () => {
  return (
    <View style={styles.container}>
    <View>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black', fontFamily: 'Arial', }}>Coffe Shop</Text>
    </View>
    <TouchableOpacity>    
        <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
          <View style={{ marginRight: 28 }}>
            <Image source={require("../screens/Image/cold.jpg")} style={{ width: 50, height: 70, marginTop: 20, marginLeft: 20 }} />
          </View>
          <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
            <Text style={{ color: 'black' }} >Cold Coffe</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, marginLeft: 5, color: 'black' }}>enak diminum waktu panas hari</Text>
          </View>
          <View style={{ backgroundColor: 'orange', marginLeft: 100, width: 30 }}>
            <Text style={{ color: 'black', fontSize: 20 }}>10k</Text>
          </View>
        </View>
        <View></View>
        <Text style={styles.text}></Text> 
    </TouchableOpacity>
    </View>

  )
}

export default Utama

const styles = StyleSheet.create({})