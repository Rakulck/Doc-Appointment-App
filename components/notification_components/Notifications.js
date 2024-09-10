import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import Ratings from './Ratings';
import { notificationsData } from '../../utils/data/NotificationsData';
import Global_Styles from '../../utils/Global_Styles';

const Notifications = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRatingSubmit = (rating, review) => {
    console.log(`Rating: ${rating}, Review: ${review}`);
  };

  const openRatingModal = (doctor) => {
    setSelectedDoctor(doctor);
    toggleModal();
  };

  const handleReschedule = (doctor) => {
    // Navigate to the doctor's appointment booking screen
    navigation.navigate('DoctorAppointmentBooking', { doctor });
  };

  const handleCancel = (doctor) => {
    console.log(`Cancel appointment for: ${doctor.message}`);
  };

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.message}>
          {item.message}{' '}
          {item.link && (
            <TouchableOpacity onPress={() => openRatingModal(item)}>
              <Text style={styles.link}>{item.link}</Text>
            </TouchableOpacity>
          )}
        </Text>
        {item.upcoming && (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleReschedule(item)}
            >
              <Text style={styles.actionButtonText}>Reschedule</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCancel(item)}>
              <Text style={styles.cancelLink}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  const renderSection = ({ item }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.date}>{item.date}</Text>
      <FlatList
        data={item.notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(notification) => notification.id}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Image source={require('../../../assets/back.png')} style={styles.backIcon} /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <FlatList
        data={notificationsData}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
      />
      {selectedDoctor && (
        <Ratings
          isVisible={isModalVisible}
          onClose={toggleModal}
          onSubmit={handleRatingSubmit}
          doctorName={selectedDoctor.message} // Assuming the message contains the doctor's name
          doctorImage={require('../../assets/images/doc1.png')} // Assuming the icon contains the doctor's image
        />
      )}
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
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: '#333333',
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center"
  },
  link: {
    color: '#007BFF',
  },
  time: {
    fontSize: 12,
    color: '#999999',
    marginTop: 5,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionButton: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Global_Styles.PrimaryColour,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
  },
  cancelLink: {
    color: '#007BFF',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Notifications;
