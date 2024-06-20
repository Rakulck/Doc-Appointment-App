// SpecialistsRender.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Global_Styles from '../../../utils/Global_Styles';
import { DoctorsData } from '../../../utils/data/DoctorsData';

import { useNavigation } from '@react-navigation/native';

const SpecialistsRender = ({ data }) => {

  const navigation = useNavigation();

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DoctorProfile', { doctor: item })}>
      <View style={styles.imageContainer}>
        <Image source={item.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.designation}>{item.designation}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Specialists</Text>
      <FlatList
        data={DoctorsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
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
    marginHorizontal: Global_Styles.MarginHorizontal,
  },
  item: {
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: 'white',
    height: "auto",
    width: 112,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: '100%',
    borderRadius: 50,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color:Global_Styles.TextColour,
    textAlign:"center"
  },
  designation: {
    fontSize: 12,
    color: Global_Styles.TextColour,
  },
  flatListContent: {
    paddingLeft: 10,
  },
  imageContainer: {
    width: 112,
    height: 130,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: Global_Styles.PrimaryColour,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer:{
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:5,
    paddingVertical:10,
    fontSize:15,
  }
});

export default SpecialistsRender;
