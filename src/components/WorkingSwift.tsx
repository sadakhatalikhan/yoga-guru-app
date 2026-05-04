import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {vs, s} from 'react-native-size-matters'

const shifts = [
    {label: 'Morning', backgroundColor: '#fff'},
    {label: 'Afternoon', backgroundColor: '#FBF6B5'},
    {label: 'Evening', backgroundColor: '#FAE8FB'},
    {label: 'Night', backgroundColor: '#CCF4F2'}
];

const WorkingSwift = () => {
  return (
    <View style={styles.container}>
      {
        shifts.map((shift, index) => (
         <TouchableOpacity
            key={index}
            style={[styles.button, {backgroundColor: shift.backgroundColor}]}
         >
            <Text style={styles.text}>{shift.label}</Text>
         </TouchableOpacity>   
      ))}
    </View>
  )
}

export default WorkingSwift

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: s(10),
        marginTop: vs(5)
    },
    button: {
        height: vs(35),
        width: s(70),
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: '#000'
    }
})