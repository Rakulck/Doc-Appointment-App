import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Reviews = () => {
    const reviews = [
        { id: 1, name: 'Patient A', review: 'Great doctor, very attentive and knowledgeable.', rating: 5, time: '2 hrs ago' },
        { id: 2, name: 'Patient B', review: 'Had a wonderful experience. Highly recommended!', rating: 4, time: '1 day ago' },
        { id: 3, name: 'Patient C', review: 'Very professional and caring.', rating: 5, time: '3 days ago' },
        { id: 4, name: 'Patient C', review: 'Very professional and caring.', rating: 5, time: '3 days ago' },
        { id: 5, name: 'Patient C', review: 'Very professional and caring.', rating: 5, time: '3 days ago' },
    
        { id: 6, name: 'Patient C', review: 'Very professional and caring.', rating: 5, time: '3 days ago' },
    
      ];
  return (
    <View style={styles.reviewsContainer}>
    
          <Text style={styles.reviewsTitle}>Recent Reviews</Text>

          {reviews.map(review => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewName}>{review.name}</Text>
                <View style={styles.ratingContainer}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Ionicons key={index} name="star" size={14} color="#ffd700" />
                  ))}
                </View>
                <Text style={styles.reviewTime}>{review.time}</Text>
              </View>
              <Text style={styles.reviewText}>{review.review}</Text>
            </View>
          ))}
        </View>
  )
}

export default Reviews

const styles=StyleSheet.create({
    reviewsContainer: {
        paddingHorizontal: 20,
      },
      reviewsTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
      },
      reviewItem: {
        marginBottom: 15,
      },
      reviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      reviewName: {
        fontSize: 14,
        fontWeight: '500',
      },
      ratingContainer: {
        flexDirection: 'row',
        paddingHorizontal:20
      },
      reviewTime: {
        fontSize: 12,
        color: 'gray',
        justifyContent:"flex-end"
      },
      reviewText: {
        fontSize: 14,
        color: 'gray',
        lineHeight: 20,
        marginTop: 5,
      },
})