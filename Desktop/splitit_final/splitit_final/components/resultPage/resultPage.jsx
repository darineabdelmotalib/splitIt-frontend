import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import axios from 'axios';

const NumberOfPeople = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState('5'); 

    const handleNextPress = async () => {
        try {
            const response = await axios.post("http://207.23.173.203:8080/calculate/numberOfPeople", { selectedValue });
            console.log(response.data)
            navigation.navigate('checkList');

        } catch (error) {
            console.log("Could not connect:", error)
          }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>How many ppl?</Text>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                        
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                </Picker>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDF90',
    },

    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },

    pickerContainer: {
        width: 150,
        height: 200,
        backgroundColor: '#E4BC59', 
        borderRadius: 20,
        justifyContent: 'center',
        alignContent: "center",
        marginBottom: 50,
        marginTop: 30
    },
    picker: {
        height: 200,
        width: 150,
        color: '#000',
    },
    pickerItem: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default NumberOfPeople;