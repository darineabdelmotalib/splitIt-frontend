import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Receipt = ({navigation}) => {
  
  function handleSubmit() {
    navigation.navigate('checkList')
  }

    return (
        <View style={styles.container}>
        <Image
            style={styles.receipt}
            source={require('../../assets/receipt.jpeg')}
        />

        <TouchableOpacity 
            style={styles.button} 
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
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
receipt: {
    width: 500, 
    height: 400,
    marginBottom: 20,
    resizeMode: 'contain',
    marginBottom: 70
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
});

export default Receipt;
