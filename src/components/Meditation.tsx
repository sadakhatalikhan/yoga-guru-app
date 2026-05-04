import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {vs, s} from 'react-native-size-matters'

const Meditation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.meditationText}>Meditation</Text>
      <Text style={styles.meditationQuotationText}>achieve inner peace</Text>
    </View>
  )
}

export default Meditation

const styles = StyleSheet.create({
    container: {
        height: vs(100),
        width: '100%',
        marginTop: vs(10),
        alignItems: "center",
        justifyContent: "center"
    },
    meditationText: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold"
    },
    meditationQuotationText: {
        color: "#9E9999",
        fontSize: 15,
        marginTop: 6
    }
})