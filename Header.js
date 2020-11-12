
import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import App from './App';

const Header = (title) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#111111',
        fontSize: 30,
    }
});

export default Header;
