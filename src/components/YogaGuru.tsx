import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {vs, s} from 'react-native-size-matters'

const YogaGuru = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.yogaText}>Yoga Gurus</Text>
      <Text style={styles.yogaQuotationText}>Perform yoga and poses</Text>
    </View>
  )
}

export default YogaGuru

const styles = StyleSheet.create({
    container: {
        height: vs(100),
        width: '100%',
        marginTop: vs(10),
        alignItems: "center",
        justifyContent: "center"
    },
    yogaText: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold"
    },
    yogaQuotationText: {
        color: "#9E9999",
        fontSize: 15,
        marginTop: 6
    }
})