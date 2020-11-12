import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Calculator from './Calculator';
import Header from './Header';

export default function App() {

  let isTest = true;
  let content;
  if (!isTest) {
    //ontent = <Calculator />
  } else {
    content = (
      <View style={styles.main}>
        <View style={styles.workingSpace}>
          <Header title='เครื่องคิดเลข' style={styles.header} />
          <Calculator />
        </View>
      </View>
    );
  }

  return content;
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%'
  },
  workingSpace: {
    backgroundColor: 'powderblue'
  },
});

//tets merge feature/funtionPlus