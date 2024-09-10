import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Rating } from 'react-native-elements';
import Global_Styles from '../../utils/Global_Styles';
import { Ionicons } from '@expo/vector-icons';
const Ratings = ({ isVisible, onClose, onSubmit, doctorName, doctorImage }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingSubmit = () => {
    onSubmit(rating, review);
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      swipeDirection="down"
      style={styles.bottomModal}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close-outline" size={28} color={'white'}></Ionicons>
        </TouchableOpacity>
        <View style={styles.doctorInfoContainer}>
          <Image source={doctorImage} style={styles.doctorImage} />
          <Text style={styles.doctorName}>Doctor name</Text> 
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.modalTitle}>Let us know how it went!</Text>
          <Rating
            startingValue={rating}
            imageSize={30}
            onFinishRating={setRating}
            style={{ paddingVertical: 10 }}
          />
          <TextInput
            style={styles.reviewInput}
            placeholder="Write your review here..."
            value={review}
            onChangeText={setReview}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleRatingSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    color:"white"
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,  },
  doctorInfoContainer: {
    backgroundColor: Global_Styles.PrimaryColour, // Example background color
    paddingTop: 30,
    width: "100%",
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    bottom:10,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: "white",
    padding: 40,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "white",
  },
  ratingContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  reviewInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: Global_Styles.PrimaryColour,
    padding: 10,
    paddingHorizontal:20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 30,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Ratings;
