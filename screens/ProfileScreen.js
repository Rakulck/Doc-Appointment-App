import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from '../components/auth_components/signup_components/Signup'
import SocialSignup from '../components/auth_components/social_auth_components/SocialSignUp';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Signup/>
      <SocialSignup/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20
  },
});

export default ProfileScreen;
