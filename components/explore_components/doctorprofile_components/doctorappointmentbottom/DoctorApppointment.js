import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo-icons
import FeesInformation from './FeesInformation';
import BookAppointmentButton from './BookAppointmentButton'
const DoctorAppointment = ({ onPressBack, onPressAppointment }) => {
  // Sample data for time slots
  const morningSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
  ];

  const afternoonSlots = [
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const eveningSlots = [
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
  ];

  // Sample data for dates (assuming next 7 days)
  const dates = [
    { id: '1', date: ' 24', day: 'Mon' },
    { id: '2', date: ' 25', day: 'Tue' },
    { id: '3', date: ' 26', day: 'Wed' },
    { id: '4', date: ' 27', day: 'Thur' },
    { id: '5', date: ' 28', day: 'Fri' },
    { id: '6', date: ' 29', day: 'Sat' },
    { id: '7', date: ' 30', day: 'Sun' },
  ];

  const renderDateItem = ({ item }) => (
    <TouchableOpacity style={styles.dateItem}>
      <Text style={styles.dateText}>{`${item.day}\n${item.date}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={22}/>
        </TouchableOpacity>
      
      </View>

      <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.monthText}>May</Text>
        <FlatList
          horizontal
          data={dates}
          keyExtractor={(item) => item.id}
          renderItem={renderDateItem}
          contentContainerStyle={styles.dateList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.slotsText}>Morning Slots</Text>
        <View style={styles.timeSlotsContainer}>
          {morningSlots.map((slot, index) => (
            <View key={index} style={styles.timeSlotItem}>
              <Text style={styles.timeSlotText}>{slot}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.slotsText}>Afternoon Slots</Text>
        <View style={styles.timeSlotsContainer}>
          {afternoonSlots.map((slot, index) => (
            <View key={index} style={styles.timeSlotItem}>
              <Text style={styles.timeSlotText}>{slot}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.slotsText}>Evening Slots</Text>
        <View style={styles.timeSlotsContainer}>
          {eveningSlots.map((slot, index) => (
            <View key={index} style={styles.timeSlotItem}>
              <Text style={styles.timeSlotText}>{slot}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.slotsText}>Fees Information</Text>
        <FeesInformation/>
      </ScrollView>
      <BookAppointmentButton title="Book Appointment" onPress={onPressAppointment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal:4,
    borderTopRightRadius: 65,
    borderTopLeftRadius: 65,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    padding: 10,
    // backgroundColor: 'grey',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  monthText: {
    fontSize: 18,
    fontWeight:'500'
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  dateList: {
    marginTop: 20,
    height: 55, // Adjusted height
  },
  dateItem: {
    paddingVertical: 1,
    backgroundColor: '#eee',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius:0
  },
  dateText: {
    fontSize: 16,
    textAlign: 'center',
  },
  slotsText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 20,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal:20,
    marginTop: 10,
  },
  timeSlotItem: {
    width: '26%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    alignItems: 'center',
  },
  timeSlotText: {
    fontSize: 12,
  },
});

export default DoctorAppointment;
