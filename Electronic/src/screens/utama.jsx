import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Utama = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }} >
        <Image source={require("../screens/Image/logo.jpg")} style={{ width: 370, height: 150, marginTop: 10, marginLeft: 50, marginRight: 50, borderRadius: 10 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
              <View style={{ marginRight: 27 }}>
                <Image source={require("../screens/Image/cold.jpg")} style={{ borderRadius: 10, width: 50, height: 70, marginTop: 20, marginLeft: 20 }} />
              </View>
              <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                <Text style={{ color: 'black', fontWeight: 'bold' }} >Cold Coffe</Text>
              </View>
              <View>
                <Text style={{ fontSize: 10, marginLeft: 4, marginRight: 3, color: 'black' }}>enak diminum waktu panas hari</Text>
              </View>
              <View style={{ backgroundColor: 'orange', marginLeft: 100, width: 30 }}>
                <Text style={{ color: 'black', fontSize: 20 }}>10k</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
              <View style={{ marginRight: 24 }}>
                <Image source={require("../screens/Image/hot.jpg")} style={{ borderRadius: 10, width: 50, height: 70, marginTop: 20, marginLeft: 20 }} />
              </View>
              <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                <Text style={{ color: 'black', fontWeight: 'bold' }} >Hot Coffe</Text>
              </View>
              <View>
                <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
              </View>
              <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 27 }}>
                <Text style={{ color: 'black', fontSize: 20, marginLeft: 4 }}>7k</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
              <View style={{ marginRight: 24 }}>
                <Image source={require("../screens/Image/hot.jpg")} style={{ borderRadius: 10, width: 50, height: 70, marginTop: 20, marginLeft: 20 }} />
              </View>
              <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                <Text style={{ color: 'black', fontWeight: 'bold' }} >Hot Coffe</Text>
              </View>
              <View>
                <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
              </View>
              <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 27 }}>
                <Text style={{ color: 'black', fontSize: 20, marginLeft: 4 }}>7k</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
              <View style={{ marginRight: 24 }}>
                <Image source={require("../screens/Image/hot.jpg")} style={{ borderRadius: 10, width: 50, height: 70, marginTop: 20, marginLeft: 20 }} />
              </View>
              <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                <Text style={{ color: 'black', fontWeight: 'bold' }} >Hot Coffe</Text>
              </View>
              <View>
                <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
              </View>
              <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 27 }}>
                <Text style={{ color: 'black', fontSize: 20, marginLeft: 4 }}>7k</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <View style={{ marginLeft: 15, flexDirection: 'row' }}>
          <Text style={{ color: "brown", fontSize: 25, fontWeight: 'bold' }}>Populer</Text>
          <Text style={{ fontSize: 15, color: 'black', marginLeft: 230, marginTop: 5 }}>See all</Text>
        </View>
      </View>
      <View>
        <View style={{ marginTop: 25, elevation: 15 }}>
          <View style={{ backgroundColor: 'white', height: 130, width: 370, borderRadius: 15, marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
            <Image source={require("../screens/Image/cold.jpg")} style={{ width: 70, height: 90, marginLeft: 15, borderRadius: 10, marginTop: 21.5 }} />
            <View>
              <Text style={{ color: 'black', marginLeft: 20, marginTop: 40, fontWeight: 'bold', fontSize: 20 }}>Cold Coffe</Text>
              <Text style={{ marginLeft: 20, color: 'black', }}>enak diminum waktu panas</Text>
              <Text style={{ color: 'black', marginLeft: 20 }}>hari</Text>
              <View>
                <Text style={{ color: 'black', fontSize: 30, marginLeft: 220, marginTop: -55 }}>10k</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15, elevation: 15 }}>
          <View style={{ backgroundColor: 'white', height: 130, width: 370, borderRadius: 15, marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
            <Image source={require("../screens/Image/cold.jpg")} style={{ width: 70, height: 90, marginLeft: 15, borderRadius: 10, marginTop: 21.5 }} />
            <View>
              <Text style={{ color: 'black', marginLeft: 20, marginTop: 40, fontWeight: 'bold', fontSize: 20 }}>Cold Coffe</Text>
              <Text style={{ marginLeft: 20, color: 'black', }}>enak diminum waktu panas</Text>
              <Text style={{ color: 'black', marginLeft: 20 }}>hari</Text>
              <View>
                <Text style={{ color: 'black', fontSize: 30, marginLeft: 220, marginTop: -55 }}>10k</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15, elevation: 15 }}>
          <View style={{ backgroundColor: 'white', height: 130, width: 370, borderRadius: 15, marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
            <Image source={require("../screens/Image/cold.jpg")} style={{ width: 70, height: 90, marginLeft: 15, borderRadius: 10, marginTop: 21.5 }} />
            <View>
              <Text style={{ color: 'black', marginLeft: 20, marginTop: 40, fontWeight: 'bold', fontSize: 20 }}>Cold Coffe</Text>
              <Text style={{ marginLeft: 20, color: 'black', }}>enak diminum waktu panas</Text>
              <Text style={{ color: 'black', marginLeft: 20 }}>hari</Text>
              <View>
                <Text style={{ color: 'black', fontSize: 30, marginLeft: 220, marginTop: -55 }}>10k</Text>
              </View>
            </View>
          </View>
        </View>
      </View>



    </View>

  )
}

export default Utama

const styles = StyleSheet.create({})