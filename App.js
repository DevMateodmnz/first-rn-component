import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './components/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Little Lemon!</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;