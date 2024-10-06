import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {

    function handleQuickScanPress() {
        navigation.navigate('receiptPage'); // Navigate to 'IndexPage' or your desired component
    }

    return (
        <View style={styles.landingPage}>
            <Image
                style={styles.title}
                source={require('../../assets/logo.png')}
            />
            <Image
                style={styles.logo}
                source={require('../../assets/banana.png')}
            />
            <Text style={styles.motto}>split bills, not friendships</Text>

            {/* Quick Scan button */}
            <TouchableOpacity style={styles.button} onPress={handleQuickScanPress}>
                <Text style={styles.buttonText}>Quick Scan</Text>
            </TouchableOpacity>

            {/* Log In button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    landingPage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDF90',
    },
    title: {
        color: "white",
        fontSize: 80,
        fontWeight: 'bold',
        marginTop: 50,
        resizeMode: 'contain',
        height: 200,
        width: 280,
        marginBottom:-50
    },
    landingPage__buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 50,
        marginVertical: 10,
        width: '60%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    motto: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 100,
        marginTop: -20
    },
    logo: {
        width: 230,
        height: 260,
        resizeMode: 'contain',
        marginBottom: 0,
    },
});

export default LandingPage;
