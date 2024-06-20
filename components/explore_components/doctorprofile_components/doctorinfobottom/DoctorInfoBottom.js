import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Reviews from './Reviews';

const DoctorInfoBottom = () => {
  return (
    <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.doctorName}>Dr. John Doe</Text>
          <Text style={styles.designation}>Cardiologist - City Hospital</Text>
        </View>
        <ScrollView  contentContainerStyle={styles.scrollContainer}>   
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About Doctor</Text>
          <Text style={styles.aboutText}>
            Dr. John Doe is a renowned cardiologist with over 20 years of experience in treating various heart conditions. He is known for his compassionate care and expertise in the field.
          </Text>
        </View>
   
        <Reviews/>

      </ScrollView>
    </View>
  );
};

export default DoctorInfoBottom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 65,
    borderTopLeftRadius: 65,
    backgroundColor: "white",
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  designation: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: 'gray',
    lineHeight: 20,
  },
  scrollContainer:{
    paddingBottom:62
  }
  
});
