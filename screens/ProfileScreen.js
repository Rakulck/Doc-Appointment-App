import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Signup from '../components/auth_components/signup_components/Signup';
import SocialSignup from '../components/auth_components/social_auth_components/SocialSignUp';
import Profile from '../components/profile_components/Profile';
import Global_Styles from '../utils/Global_Styles';
import MyProfile from './MyProfile';
import Payment from './PaymentScreen';

const profileScreenData = [
  { id: '1', component: 'Profile' },
];

const ProfileScreen = () => {
  const renderItem = ({ item }) => {
    switch (item.component) {
      case 'Profile':
        return <Profile/>;
      
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={profileScreenData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ProfileScreen;
