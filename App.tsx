import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomScreenTabs from './src/screens/BottomScreenTabs';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomScreenTabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424'
  },
});
