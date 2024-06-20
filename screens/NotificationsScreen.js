import { View, Text,StyleSheet,TouchableOpacity,TextInput,Image } from 'react-native'
import React from 'react'
import LoginScreen from '../components/auth_components/login_components/Login';
import SocialSignup from '../components/auth_components/social_auth_components/SocialSignUp';

const NotificationsScreen = () => {
  return (
      <View style={styles.container}>
        <LoginScreen/>
        <SocialSignup/>
      </View>
    );
  };

export default NotificationsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  
});