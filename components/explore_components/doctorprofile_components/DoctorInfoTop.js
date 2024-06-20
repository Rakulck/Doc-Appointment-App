import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Global_Styles from '../../../utils/Global_Styles';

const DoctorInfoTop = ({ navigation,onPressBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={22}/>
        </TouchableOpacity>
      {/* Doctor Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/doc1.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      {/* Icons Section */}
      <View style={styles.iconsContainer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.iconItem1}>
            <Ionicons name="heart" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.captionText}>10</Text>
          <Text style={styles.captionText1}>Patients</Text>
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.iconItem2}>
            <Ionicons name="calendar" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.captionText}>10 +</Text>
          <Text style={styles.captionText1}>Experience</Text>
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.iconItem3}>
            <Ionicons name="star" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.captionText}>4.9</Text>
          <Text style={styles.captionText1}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    backgroundColor: '#18A0FB',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 110,
    height: 120,
    borderRadius: Global_Styles.BorderRadius,
    padding: 10,
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  iconsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingBottom:20,
  },
  iconWrapper: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconItem1: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 100,
    backgroundColor: "#39B0FF",
  },
  iconItem2: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 100,
    backgroundColor: "#39B0FF",
  },
  iconItem3: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 100,
    backgroundColor: "#39B0FF",
  },
  iconCaption: {
    color: '#fff',
    fontSize: 16,
  },
  captionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  captionText1: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  }
});

export default DoctorInfoTop;
