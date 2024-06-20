import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Facts from './Facts';
import { Dimensions } from 'react-native';
import Global_Styles from '../../../utils/Global_Styles';

const windowWidth=Dimensions.get('window').width

const RenderFacts = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.fact}>{item.fact}</Text>
        </View>
    );

    return (
        <FlatList
            data={Facts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
showsHorizontalScrollIndicator={false}        />
    );
}

const styles = StyleSheet.create({
    item: {
        // backgroundColor: '#f9c2ff',
        paddingHorizontal: 10,
        paddingVertical:5,
        marginTop: 30,
        borderRadius:Global_Styles.BorderRadius,
        width:windowWidth-80,
        backgroundColor:"#2CAAFF",
        justifyContent:"center",
       marginLeft:10,
       marginRight:5
    },
    fact: {
        fontSize: 14,
        textAlign:'center',
        fontWeight:'400',
        color:'white'
    },
});

export default RenderFacts;
