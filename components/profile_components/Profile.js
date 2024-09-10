import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InviteFriend from './InviteFriend';
import PreviousAppointments from './PreviousAppointments';
import Help from './Help';
import { menuData } from '../../utils/data/MenuData';

const Menu = ({ navigation }) => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [selectedSheet, setSelectedSheet] = useState(null);

  const toggleSwitch = () => setIsNotificationEnabled((previousState) => !previousState);

  const handleMenuPress = (label) => {
    if (label === 'Invite a friend') {
      setSelectedSheet('InviteFriend');
    } else if (label === 'Previous Appointments') {
      setSelectedSheet('PreviousAppointments');
    } else if (label === 'Help') {
      setSelectedSheet('Help');
    } else if (label === 'My Profile') {
      navigation.navigate('MyProfile');
    }
  };

  const renderItem = ({ item }) => (
    <MenuItem
      icon={item.icon}
      label={item.label}
      type={item.type}
      switchValue={isNotificationEnabled}
      onSwitchChange={toggleSwitch}
      onPress={() => handleMenuPress(item.label)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Image source={require('../../../assets/back.png')} style={styles.backIcon} /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/ck.jpg')} style={styles.profileImage} />
        <Text style={styles.profileName}>Rakul CK</Text>
        <Text style={styles.profileEmail}>rakulck31@gmail.com</Text>
      </View>

      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.menuContainer}
      />

      {selectedSheet === 'InviteFriend' && <InviteFriend onClose={() => setSelectedSheet(null)} />}
      {selectedSheet === 'PreviousAppointments' && <PreviousAppointments onClose={() => setSelectedSheet(null)} />}
      {selectedSheet === 'Help' && <Help onClose={() => setSelectedSheet(null)} />}
    </View>
  );
};

const MenuItem = ({ icon, label, type, switchValue, onSwitchChange, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress} disabled={type === 'switch'}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.menuLabel}>{label}</Text>
    {type === 'switch' ? (
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={switchValue ? "#009EFF" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onSwitchChange}
        value={switchValue}
      />
    ) : (
      <Ionicons name="chevron-forward-outline" size={20} />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 100,
    paddingHorizontal: 20,
    backgroundColor: '#009EFF',
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    alignItems:"center",
    justifyContent:"center",
    marginLeft:"40%"
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    marginTop: -55,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666666',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 20,
  },
  menuLabel: {
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    fontSize: 18,
    color: '#007BFF',
  },
});

export default Menu;
