import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Global_Styles from '../../utils/Global_Styles';
import { DoctorsData } from '../../utils/data/DoctorsData';

const PreviousAppointments = ({ onClose }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.designation}>{item.designation}</Text>
      </View>
    </View>
  );

  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.title}>Previous Appointments</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <FontAwesome name="close" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={DoctorsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
    maxHeight: '80%', // Adjust the height to your preference
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Global_Styles.PrimaryColour,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    alignItems:"center",
    justifyContent:"center"
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
    padding: 10,
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
});

export default PreviousAppointments;
