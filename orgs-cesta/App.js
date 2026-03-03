import { StyleSheet, StatusBar, View } from 'react-native';
import Cestas from './src/telas/cestas';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Cestas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,              // 🔥 VERY IMPORTANT
    backgroundColor: '#fff',
  },
});