import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection:'row', backgroundColor: 'orange', height: 100,marginTop:10}}>
        <Image source={require("../screens/Image/user.png")} style={{ width: 50, height: 50, borderRadius: 75, marginTop:15}} />
        <Text style={{ color: 'black', fontSize: 24, fontWeight: "bold",marginTop:35,marginLeft:15 }}>Sriwahyuni</Text>
      </View>
      <View>
        <Text>BIO</Text>
      </View>
    </View>

  )
}

export default About

const styles = StyleSheet.create({})