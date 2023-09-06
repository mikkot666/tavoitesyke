import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [hrLowerLimit, setHrLowerLimit] = useState(0);
  const [hrUpperLimit, setHrUpperLimit] = useState(0);

  function change(text) {
    setAge(text);
    const lowerLimit = (220 - text) * 0.65;
    const upperLimit = (220 - text) * 0.85;
    setHrLowerLimit(lowerLimit);
    setHrUpperLimit(upperLimit);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => change(text)}
      keyboardType='decimal-pad'/>
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{hrLowerLimit.toFixed(0)} - {hrUpperLimit.toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});
