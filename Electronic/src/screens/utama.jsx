import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Utama = () => {
  return (
    <View style={styles.container}>

      <View style={{ alignItems: 'center' }} >
        <Image source={require("../screens/Image/logo.jpg")} style={{ width: 370, height: 150, marginTop: 10, marginLeft: 50, marginRight: 50, borderRadius: 10 }} />
      </View>
      <View>

        <ScrollView horizontal={true} style={{}}>

          <View style={{ flexDirection: 'row', marginBottom: 30 }}>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
                  <View style={{ marginRight: 27 }}>
                    <Image source={require("../screens/Image/cold.png")} style={{ borderRadius: 10, width: 50, height: 70, marginTop: 20, marginLeft: 20 }} />
                  </View>
                  <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Cold Coffe</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, marginLeft: 4, marginRight: 3, color: 'black' }}>enak diminum waktu panas hari</Text>
                  </View>
                  <View style={{ backgroundColor: 'orange', marginLeft: 100, width: 30, borderRadius: 5, marginTop: -2 }}>
                    <Text style={{ color: 'black', fontSize: 20, marginTop: 2 }}>10k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
                  <View style={{ marginRight: 24 }}>
                    <Image source={require("../screens/Image/hot.png")} style={{ borderRadius: 10, width:60, height: 70, marginTop: 20, marginLeft: 20 }} />
                  </View>
                  <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Hot Coffe</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
                  </View>
                  <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 27, borderRadius: 5 }}>
                    <Text style={{ color: 'black', fontSize: 20, marginLeft: 4 }}>7k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
                  <View style={{ marginRight: 24 }}>
                    <Image source={require("../screens/Image/espresso.png")} style={{ borderRadius: 5, width: 70, height: 60, marginTop: 20, marginLeft: 20 }} />
                  </View>
                  <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Espresso</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
                  </View>
                  <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 27 , borderRadius: 5,marginTop:10}}>
                    <Text style={{ color: 'black', fontSize: 20, marginLeft: 4 }}>8k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
                  <View style={{ marginRight: 24 }}>
                    <Image source={require("../screens/Image/macchiato.png")} style={{ borderRadius: 10, width: 65, height: 70, marginTop: 20, marginLeft: 20 }} />
                  </View>
                  <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Macchiato</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
                  </View>
                  <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 27 ,borderRadius: 5}}>
                    <Text style={{ color: 'black', fontSize: 20, marginLeft: 4 }}>7k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
                  <View style={{ marginRight: 27 }}>
                    <Image source={require("../screens/Image/americano.png")} style={{ borderRadius: 10, width: 50, height: 70, marginTop: 20, marginLeft: 20 }} />
                  </View>
                  <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Americano</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, marginLeft: 4, marginRight: 3, color: 'black' }}>enak diminum waktu panas hari</Text>
                  </View>
                  <View style={{ backgroundColor: 'orange', marginLeft: 100, width: 30, borderRadius: 5, marginTop: -2 }}>
                    <Text style={{ color: 'black', fontSize: 20, marginTop: 2 }}>10k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
                  <View style={{ marginRight: 24 }}>
                    <Image source={require("../screens/Image/affogato.png")} style={{ borderRadius: 10, width: 70, height: 60, marginTop: 20, marginLeft: 20 }} />
                  </View>
                  <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Affogato</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
                  </View>
                  <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 27, borderRadius: 5,marginTop:10 }}>
                    <Text style={{ color: 'black', fontSize: 20, marginLeft: 4 }}>8k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
                  <View style={{ marginRight: 24 }}>
                    <Image source={require("../screens/Image/mocha.png")} style={{ borderRadius: 10, width: 50, height: 70, marginTop: 20, marginLeft: 20 }} />
                  </View>
                  <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Moccha</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
                  </View>
                  <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 30,borderRadius: 5 }}>
                    <Text style={{ color: 'black', fontSize: 20, marginLeft: 2 }}>12k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'white', width: 120, height: 150, borderRadius: 10, marginLeft: 10, marginTop: 10, alignItems: 'center', elevation: 8 }}>
                  <View style={{ marginRight: 24 }}>
                    <Image source={require("../screens/Image/cappucino.png")} style={{ borderRadius: 10, width: 80, height: 70, marginTop: 20, marginLeft: 10 }} />
                  </View>
                  <View style={{ position: 'relative', marginTop: 10, marginRight: 25 }} >
                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Cappucino</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10, marginLeft: 7, marginRight: 5, color: 'black' }}>enak diminum saat cuaca dingin</Text>
                  </View>
                  <View style={{ backgroundColor: 'orange', marginLeft: 110, width: 27 ,borderRadius: 5}}>
                    <Text style={{ color: 'black', fontSize: 20, marginLeft: 4 }}>9k</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{ marginTop: 8 }}>
        <View style={{ marginLeft: 15, flexDirection: 'row' }}>
          <Text style={{ color: "brown", fontSize: 25, fontWeight: 'bold' }}>Populer</Text>
          <Text style={{ fontSize: 15, color: 'black', marginLeft: 230, marginTop: 5 }}>See all</Text>
        </View>
      </View>


        <ScrollView>

            <View>
              <View style={{ marginTop: 20, elevation: 15 }}>
                <View style={{ backgroundColor: 'white', height: 130, width: 370, borderRadius: 15, marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
                  <Image source={require("../screens/Image/cold.png")} style={{ width: 70, height: 90, marginLeft: 15, borderRadius: 10, marginTop: 21.5 }} />
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
                  <Image source={require("../screens/Image/mocha.png")} style={{ width: 70, height: 90, marginLeft: 15, borderRadius: 10, marginTop: 21.5 }} />
                  <View>
                    <Text style={{ color: 'black', marginLeft: 20, marginTop: 40, fontWeight: 'bold', fontSize: 20 }}>Moccha</Text>
                    <Text style={{ marginLeft: 20, color: 'black', }}>enak diminum waktu panas</Text>
                    <Text style={{ color: 'black', marginLeft: 20 }}>hari</Text>
                    <View>
                      <Text style={{ color: 'black', fontSize: 30, marginLeft: 220, marginTop: -55 }}>12k</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 15, elevation: 15 }}>
                <View style={{ backgroundColor: 'white', height: 130, width: 370, borderRadius: 15, marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
                  <Image source={require("../screens/Image/cappucino.png")} style={{ width: 80, height: 70, marginLeft: 15, borderRadius: 10, marginTop: 21.5 }} />
                  <View>
                    <Text style={{ color: 'black', marginLeft: 20, marginTop: 40, fontWeight: 'bold', fontSize: 20 }}>Cappucino</Text>
                    <Text style={{ marginLeft: 20, color: 'black', }}>enak diminum waktu panas</Text>
                    <Text style={{ color: 'black', marginLeft: 20 }}>hari</Text>
                    <View>
                      <Text style={{ color: 'black', fontSize: 30, marginLeft: 220, marginTop: -55 }}>9k</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
        </ScrollView>
      



    </View>

  )
}

export default Utama

const styles = StyleSheet.create({})