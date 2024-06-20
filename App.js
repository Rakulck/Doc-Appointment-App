import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation'; // Adjust the import path if necessary
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer style={Styles.container}>
      <Navigation />
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
container:{
  backgroundColor:"#F9F9F9"
}
})