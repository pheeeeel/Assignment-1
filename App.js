import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  const changeBackgroundColor = () => {
    setBackgroundColor(backgroundColor === '#0088ff' ? 'grey' : '#0088ff');
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Amirthavahini(22MIS1127)</Text>
      <Button title="Change Background" onPress={changeBackgroundColor} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
});
export default App;