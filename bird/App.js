import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BirdWatcherApp from './BirdWatcherApp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Birds</Text>
      <StatusBar style="auto" />
      <BirdWatcherApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});

