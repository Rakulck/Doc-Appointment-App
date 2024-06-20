import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Search from '../components/home_components/Search/Search'
import SpecialistsRender from '../components/explore_components/SpecialistsRenderExplore'

const ExploreScreen = () => {
  return (
    <View style={Styles.container}>
      <Search />
      <SpecialistsRender/>
    </View>
  )
}

export default ExploreScreen
const Styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Use flexGrow instead of flex to ensure the ScrollView fills the screen
    backgroundColor: "#F9F9F9",
  },
  content: { 
    padding: 20,
  },
});
