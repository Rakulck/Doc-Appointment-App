import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Global_Styles from '../../../utils/Global_Styles';
import { useNavigation } from '@react-navigation/native';

const AvailableDoctors = () => {
  // Dummy data for available doctors
  const doctorsData = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Dentist', image: require('../../../assets/images/doc1.png'), availableDate: 'Apr 25 - Apr 28', starRating: 4.5 },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Dentist', image: require('../../../assets/images/doc1.png'), availableDate: 'May 3 - May 4', starRating: 4.7 },
    { id: 3, name: 'Dr. Jane Smith', specialty: 'Dentist', image: require('../../../assets/images/doc1.png'), availableDate: 'May 3 - May 4', starRating: 4.7 },
    { id: 4, name: 'Dr. Jane Smith', specialty: 'Dentist', image: require('../../../assets/images/doc1.png'), availableDate: 'May 3 - May 4', starRating: 4.7 },
    { id: 5, name: 'Dr. Jane Smith', specialty: 'Dentist', image: require('../../../assets/images/doc1.png'), availableDate: 'May 3 - May 4', starRating: 4.7 },

    // Add more doctors as needed
  ];

  const navigation = useNavigation();

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.9} style={styles.item} onPress={() => navigation.navigate('DoctorProfile', { doctor: item })}>
      <View style={styles.topContainer}>
        <Text style={styles.specialty}>{`Looking For Your ${item.specialty}`}</Text>
        <Text style={styles.specialty}>Specialist Doctors</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeftContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{`${item.availableDate}`}</Text>
          <Text style={styles.details}>{`Star Rating: ${item.starRating}`}</Text>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRightContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Doctor</Text>
      <FlatList
        data={doctorsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
    color:"#A6A3B8",
    paddingHorizontal:Global_Styles.MarginHorizontal
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#18A0FB',
    padding: 15,
    width:305,
    marginRight:10,
    
  },
  topContainer: {
    marginBottom: 10,
  },
  specialty: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginRight:82
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLeftContainer: {
    flex: 1,
    marginLeft:8,
    // backgroundColor:"red"
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    paddingTop:5,
    marginBottom: 5,
  },
  details: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
    marginBottom: 5,
  },
  bookNowButton: {
    backgroundColor: '#2CAAFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight:60,
  },
  bookNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bottomRightContainer: {
    // backgroundColor:"red",
    marginRight:20
  },
  image: {
    width: 100,
    height: 100,
    
    // borderRadius: 50,
  },
});

export default AvailableDoctors;
