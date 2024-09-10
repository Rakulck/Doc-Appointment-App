import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Global_Styles from '../utils/Global_Styles';
import PaymentButton from '../components/payment_component/PaymentButton';

const Payment = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('Credit Card');

  const paymentMethods = [
    { id: 'creditCard', label: 'Credit / Debit card', icon: require('../assets/payment_icons/creditcard_logo.png') },
    { id: 'googlePay', label: 'Google Pay', icon: require('../assets/payment_icons/google_logo.png') },
    { id: 'applePay', label: 'Apple Pay', icon: require('../assets/payment_icons/apple_logo.png') },
    { id: 'paypal', label: 'Paypal', icon: require('../assets/payment_icons/paypal_logo.png') },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment</Text>
        </View>

        <View style={styles.doctorInfo}>
          <Image source={require('../assets/images/doc1.png')} style={styles.doctorImage} />
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>Dr. Kawsar Ahmed</Text>
            <Text style={styles.doctorSpeciality}>Cardiologist - Cumilla clinic</Text>
            <TouchableOpacity style={styles.appointmentButton}>
              <Text style={styles.appointmentButtonText}>Got Appointment</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$20</Text>
        </View>

        {paymentMethods.map((method) => (
          <TouchableOpacity key={method.id} style={styles.paymentMethod} onPress={() => setSelectedMethod(method.label)}>
            <Image source={method.icon} style={styles.paymentIcon} />
            <Text style={styles.paymentLabel}>{method.label}</Text>
            <View style={styles.radioButton}>
              {selectedMethod === method.label && <View style={styles.radioButtonSelected} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <PaymentButton style={styles.paymentButton} title="Payment" onPress={() => console.log('Proceed to Payment')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '30%',
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 50,
  },
  doctorImage: {
    width: 70,
    height: 80,
    borderRadius: 20,
    borderTopRightRadius: 0,
    padding: 20,
    backgroundColor: Global_Styles.PrimaryColour,
  },
  doctorDetails: {
    flex: 1,
    marginLeft: 10,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: '500',
  },
  doctorSpeciality: {
    fontSize: 13,
    color: '#777',
  },
  appointmentButton: {
    backgroundColor: '#2CAAFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
  },
  appointmentButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  price: {
    fontSize: 14,
    padding: 3,
    fontWeight: '500',
    color: 'white',
    borderRadius: 10,
    backgroundColor: Global_Styles.PrimaryColour,
    marginTop: 60,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  paymentLabel: {
    flex: 1,
    fontSize: 16,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#18A0FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#18A0FB',
  },
  paymentButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Payment;