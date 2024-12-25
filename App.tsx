import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Root } from './src/router';
import { Provider } from 'react-redux';
import store from './src/store/store.index';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <Root/>
    </Provider>
  )
}

export default App

