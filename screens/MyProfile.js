import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const MyProfile = () => {
  const [name, setName] = useState('Rakul CK');
  const [email, setEmail] = useState('rakulck31@gmail.com');
  const [contact, setContact] = useState('1234567890');
  const [height, setHeight] = useState('175 cm');
  const [weight, setWeight] = useState('70 kg');
  const [dob, setDob] = useState('01-01-1990');
  const [bloodGroup, setBloodGroup] = useState('O+');
  const [gender, setGender] = useState('Male');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Image source={require('../../../assets/back.png')} style={styles.backIcon} /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/images/ck.jpg')} style={styles.profileImage} />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={false} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Contact</Text>
          <TextInput style={styles.input} value={contact} onChangeText={setContact} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Height</Text>
          <TextInput style={styles.input} value={height} onChangeText={setHeight} editable={false} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Weight</Text>
          <TextInput style={styles.input} value={weight} onChangeText={setWeight} editable={false} />
        </View>

        <View style={styles.infoRow}>  
          {/* add a calendar here */}
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput style={styles.input} value={dob} onChangeText={setDob} editable={false} /> 
  
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Blood Group</Text>
          <TextInput style={styles.input} value={bloodGroup} onChangeText={setBloodGroup} editable={false} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.input} value={gender} onChangeText={setGender} editable={false} />
        </View>
      </View>
    </View>
  );
};

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
  editButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#009EFF',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#ffffff',
  },
  infoContainer: {
    padding: 20,
    paddingHorizontal:20
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333333',
    width: 100,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 10,
    flex: 1,
  },
});

export default MyProfile;
