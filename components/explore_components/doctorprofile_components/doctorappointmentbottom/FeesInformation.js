import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Global_Styles from '../../../../utils/Global_Styles';

const FeesInformation = () => {
  const data = [
    { id: 1, icon: 'dollar', title: 'In Person', subtext: 'Meet Doctor at the Hospital', amount: '$50', image: require('../../../../assets/images/call.png') },
    { id: 2, icon: 'credit-card', title: 'Video Call', subtext: 'Contact Doctor through Video call', amount: '$20', image: require('../../../../assets/images/VideoCall.png') },
    { id: 3, icon: 'stethoscope', title: 'Message', subtext: 'Contact Doctor through Text', amount: '$30', image: require('../../../../assets/images/Text.png') },
  ];

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image
            source={item.image}
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtext}>{item.subtext}</Text>
          </View>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 0,
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    width: '100%',
  },
  icon: {
    marginRight: 15,
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtext: {
    fontSize: 12,
    color: 'gray',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Global_Styles.PrimaryColour,
  },
});

export default FeesInformation;
