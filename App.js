import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text_1}>Hello World! From Richard!</Text>
      <Text style={styles.text_2}>Edited using VSC!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#423f3f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_1: {
    color: '#f2ee79',
    fontSize: 18
  },

  text_2: {
    color: '#ffffff',
    fontSize: 10
  },
});
