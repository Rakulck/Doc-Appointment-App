import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/home_components/TopBar/TopBar';
import AvailableDoctors from '../components/home_components/AvailableDoctors/AvailableDoctors';
import RenderFacts from '../components/home_components/Facts/RenderFacts';
import SpecialistsRender from '../components/home_components/Specialists/SpecialistsRender';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={homeStyles.container}>
            <TopBar />
            {/* <Search /> */}
            <RenderFacts/>
            <SpecialistsRender />
            <AvailableDoctors />
        </ScrollView>
    );
};

export default HomeScreen;

const homeStyles = StyleSheet.create({
    container: {
        flexGrow: 1, // Use flexGrow instead of flex to ensure the ScrollView fills the screen
        backgroundColor: "#F9F9F9",
    },
    content: {
        padding: 20,
    },
});
