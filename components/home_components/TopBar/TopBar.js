import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Global_Styles from '../../../utils/Global_Styles';


const TopBar = () => {
  return (
    <View style={homeStyles.welcome_container}>
      <TouchableOpacity style={homeStyles.logoContainer}>
        {/* Your profile_pic */}
        <View style={homeStyles.logo}>
          <Image
            source={require('../../../assets/images/ck.jpg')}
            style={homeStyles.profileImage}
          />
        </View>
      </TouchableOpacity>
      {/* Welcome text */}
      <TouchableOpacity style={homeStyles.textContainer}>
        <Text style={homeStyles.welcome_container_Text1}>Hey, Rakul ck</Text>
        <Text style={homeStyles.welcome_container_Text2}>Let's Start......!</Text>
      </TouchableOpacity>
      {/* Notification icon */}
      <TouchableOpacity style={homeStyles.notificationIconContainer}>
      <Ionicons name="chatbubbles-outline" size={30}/>    
     </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const homeStyles = StyleSheet.create({
  welcome_container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 50,
    marginHorizontal:Global_Styles.MarginHorizontal, 
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Make it circular
    overflow: 'hidden', // Clip the image to the border radius
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 3,
  },
  welcome_container_Text1: {
    fontSize: 24,
    fontWeight: "600",
  },
  welcome_container_Text2: {
    fontSize: 14,
  },
  notificationIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight:6  
  },
});
