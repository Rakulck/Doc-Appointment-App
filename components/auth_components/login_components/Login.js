import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Welcome{'\n'}
       Back!
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
        />
        {/* <TouchableOpacity style={styles.eyeIcon} onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            source={passwordVisible ? require('../../assets/icons/eye-open.png') : require('../../assets/icons/eye-closed.png')}
            style={styles.eyeImage}
          />
        </TouchableOpacity> */}
      </View>
      
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Sign In</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
          <Text> Dont'have an account?
          </Text>
          <Text style={styles.signupButtonText}> Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  input: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
  },
  eyeIcon: {
    padding: 10,
  },
  eyeImage: {
    width: 25,
    height: 25,
  },
  forgotPasswordButton: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#18A0FB',
    fontSize: 14,
  },
  signinButton: {
    backgroundColor: '#18A0FB',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop:30,
    elevation:5
  },
  signinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',

  },
  signupButton: {
    justifyContent:"center",
      alignItems: 'center',
      flexDirection:"row"
    },
    signupButtonText: {
      color: '#18A0FB',
      fontSize: 14,
      fontWeight: '500',
    },
});
