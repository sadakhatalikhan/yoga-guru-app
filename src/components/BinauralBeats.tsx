import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {vs, s} from 'react-native-size-matters'

const BinauralBeats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.binauralText}>Binaural Beats</Text>
      <Text style={styles.binauralQuotationText}>Relax with binaural beats</Text>
    </View>
  )
}

export default BinauralBeats

const styles = StyleSheet.create({
  container: {
    height: vs(100),
    width: '100%',
    marginTop: vs(10),
    alignItems: "center",
    justifyContent: "center"
},
binauralText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold"
},
binauralQuotationText: {
    color: "#9E9999",
    fontSize: 15,
    marginTop: 6
}
})