import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {vs, s} from 'react-native-size-matters'
import { VoiceCircleIcon } from '../icons/Icons'

const VoiceCircle = () => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.text1}>Have the Best</Text> 
      <Text style={styles.text2}>Yoga Experience</Text>
      </View>
      <View style={styles.voiceCircle}>
        <VoiceCircleIcon/>
      </View>
    </View>
  )
}

export default VoiceCircle

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: vs(30),
        gap: s(20),
    },
    text1: {
        color: "#fff",
        fontSize: 25
    },
    text2: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        lineHeight: 38.5,
    },
    voiceCircle: {
       alignItems: "center",
       justifyContent: "center",
       marginBottom: 20,
       marginLeft: 20
    }
})