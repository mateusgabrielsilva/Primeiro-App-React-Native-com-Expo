import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Uhull!</Text>
      <Text style={styles.text}>Minha primeira aplicação com React Native e Expo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#145DA0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
});
