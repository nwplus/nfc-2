import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton';

const WorkshopsScreen = props => {
    return (
        <View style={styles.container}>
            <MenuButton navigation={props.navigation} />
            <Text style={styles.text}>Workshops</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    }
});

export default WorkshopsScreen;