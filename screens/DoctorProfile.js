import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DoctorInfoBottom from '../components/explore_components/doctorprofile_components/doctorinfobottom/DoctorInfoBottom';
import DoctorInfoTop from '../components/explore_components/doctorprofile_components/DoctorInfoTop';
import AppointmentButton from '../components/explore_components/doctorprofile_components/AppointmentButton';
import DoctorApppointment from '../components/explore_components/doctorprofile_components/doctorappointmentbottom/DoctorApppointment';

const DoctorProfile = () => {
  const [showAppointment, setShowAppointment] = useState(false);

  const handleAppointmentPress = () => {
    setShowAppointment(true);
  };

  const handleBackPress = () => {
    setShowAppointment(false);
  };

  return (
    <View style={styles.container}>
      <DoctorInfoTop />
      {!showAppointment ? <DoctorInfoBottom /> : null}
      <AppointmentButton onPress={handleAppointmentPress} />
      {showAppointment && <DoctorApppointment onPressBack={handleBackPress} />}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18A0FB',
    position: 'relative',
  },
});

export default DoctorProfile;
