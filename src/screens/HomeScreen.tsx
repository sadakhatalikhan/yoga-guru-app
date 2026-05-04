import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreenHeader from '../components/HomeScreenHeader'
import VoiceCircle from '../components/VoiceCircle'
import WorkingSwift from '../components/WorkingSwift'
import {vs, s} from 'react-native-size-matters'
import YogaGuru from '../components/YogaGuru'
import Meditation from '../components/Meditation'
import BinauralBeats from '../components/BinauralBeats'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <HomeScreenHeader />
        <VoiceCircle />
        <WorkingSwift />
        <YogaGuru />
        <Meditation />
        <BinauralBeats />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginLeft: s(20),
    }
})