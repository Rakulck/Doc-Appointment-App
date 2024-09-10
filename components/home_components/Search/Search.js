import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={homeStyles.search_container}>
      <Ionicons name="search" size={24} color="#979797" />
      <TextInput
        placeholder="    Search"
        placeholderTextColor="#979797"
        style={{ flex: 1, marginHorizontal: 5 }}
      />
      <TouchableOpacity style={homeStyles.filter_container}>
        <Ionicons name="filter" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const homeStyles = StyleSheet.create({
  search_container: {
    marginTop: 80,
    marginHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',

  },
  filter_container: {
    padding: "3%",
    borderRadius: 10,
    backgroundColor: "#18A0FB"
  }
});