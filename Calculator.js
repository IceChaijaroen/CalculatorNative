import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#111111',
    fontSize: 100,
    textAlign: "right",
    textAlignVertical: "center"
  },
  button: {
    fontSize: 100,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    width: '100%',
    height: 80,
    backgroundColor: 'powderblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  customBtnText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 60,
    fontWeight: '400',
    color: "#fff",
  },
  customBtnBG: {
    backgroundColor: "#007aff",
    width: 100,
    height: 100,
    borderRadius: 5
  },
  customBtnNum: {
    backgroundColor: "#73C6B6",
    width: 100,
    height: 100,
    borderRadius: 5
  },
  customBtnEqual: {
    backgroundColor: "#EC7063",
    width: 100,
    height: 100,
    borderRadius: 5
  }
});


