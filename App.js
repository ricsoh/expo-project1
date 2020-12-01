import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.fillerContainer}></View>

      <View style={styles.titleContainer}>
        <Text style={styles.text_1}>Hello World! From Richard!</Text>
        <Text style={styles.text_2}>Edited using VSC!</Text>
      </View>

      <View style={styles.fillerContainer}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#423f3f',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  fillerContainer: {
    flex: 0.25,
    padding: 10,
    backgroundColor: 'brown',
    width: "50%",
  },

  titleContainer: {
    flex: 0.5,
    padding: 10,
    margin: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    borderWidth: 15,
    borderColor: 'lightgray',
  },

  text_1: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
  },

  text_2: {
    color: 'white',
    fontSize: 10,
  },
});
