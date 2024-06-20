import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Global_Styles from '../../utils/Global_Styles';
import { DoctorsData } from '../../utils/data/DoctorsData';

const SpecialistsRenderExplore = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
     <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DoctorProfile', { doctor: item })}
      contentContainerStyle
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.designation}>{item.designation}</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.timingContainer}>
            <Text style={styles.timing}>11:00 am - 12:00 pm</Text>
          </View>
          <TouchableOpacity style={styles.plusIconContainer} activeOpacity={0.8} 
          onPress={() => navigation.navigate('DoctorProfile', { doctor: item })}>
            <FontAwesome name="plus" size={18} color="white" />
          </TouchableOpacity>
        </View>
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
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    marginBottom: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  item: {
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: 'white',
    height: 'auto',
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  designation: {
    fontSize: 12,
    color: Global_Styles.TextColour,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  flatListContent: {
    paddingLeft: 10,
    paddingBottom:42
  },
  imageContainer: {
    width: 70,
    height: 80,
    borderRadius: 20,
    borderTopRightRadius: 0,
    overflow: 'hidden',
    backgroundColor: Global_Styles.PrimaryColour,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  timingContainer: {
    backgroundColor: '#E1F6FF',
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
  },
  timing: {
    fontSize: 12,
    color: Global_Styles.PrimaryColour,
  },
  plusIconContainer: {
    backgroundColor: Global_Styles.PrimaryColour,
    borderRadius: 10,
    padding: 8,
    marginLeft: '35%',
  },
});

export default SpecialistsRenderExplore;
