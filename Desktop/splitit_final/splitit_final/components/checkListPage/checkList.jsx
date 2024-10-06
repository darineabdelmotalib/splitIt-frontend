import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import question from "../../assets/title.png";
import axios from "axios";

const CheckList = ({ navigation }) => {
  // Initialize an array of food items with their prices
  const foodItems = [
    { name: 'Pesto Pizza', price: 12.99 },
    { name: 'Gelato', price: 4.99 },
    { name: 'Mushroom Risotto', price: 14.99 },
    { name: 'Margherita Pizza', price: 10.99 },
  ];

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [name, setName] = useState('');

  const handlePress = (foodItem) => {
    const isSelected = selectedButtons.some((item) => item.name === foodItem.name);

    if (isSelected) {
      setSelectedButtons(selectedButtons.filter((item) => item.name !== foodItem.name));
    } else {
      setSelectedButtons([...selectedButtons, foodItem]);
    }
  };

  const submitOrder = async (order) => {
    try {
      const response = await axios.post("http://207.23.173.203:8080/calculate/checklist", { order });
      console.log("Order submitted:", response.data);
    } catch (error) {
      console.log("Could not connect:", error);
    }
  };

  const handleSubmit = async () => {
    const order = {
      name: name,
      selectedFood: selectedButtons,
    };

    await submitOrder(order);

    // Reset form after successful submit
    setName('');
    setSelectedButtons([]);
  };

  const handleDone = async () => {
    // Submit the last person's order before calling splitBill
    const order = {
      name: name,
      selectedFood: selectedButtons,
    };

    await submitOrder(order); // Make sure the last person's order is submitted first

    try {
      const response = await axios.get("http://207.23.173.203:8080/calculate/splitBill");
      const billData = response.data; // Assuming response.data contains the bill data
      console.log(billData);

      // Pass billData to the LoadingPage
      navigation.navigate('loadingPage', { billData });
    } catch (error) {
      console.log("Could not connect:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={question} style={styles.question} />

      {/* Text Input for user to enter their name */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Render food items with prices */}
      {foodItems.map((foodItem) => (
        <TouchableOpacity
          key={foodItem.name}
          style={[
            styles.button,
            selectedButtons.some((item) => item.name === foodItem.name) && styles.selectedButton,
          ]}
          onPress={() => handlePress(foodItem)}
        >
          <Text style={styles.buttonText}>
            {foodItem.name} - ${foodItem.price.toFixed(2)}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Stacked Next and Done buttons */}
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.submitText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFDF90',
    padding: 20,
  },

  question: {
    resizeMode: 'contain',
    width: 250,
    height: 100,
    marginTop: 70,
  },

  input: {
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 70,
    paddingLeft: 25,
  },

  button: {
    backgroundColor: '#B8CBF4',
    padding: 15,
    borderRadius: 50,
    width: '80%',
    marginVertical: 6,
  },

  selectedButton: {
    backgroundColor: '#7FA0E7',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  selectedText: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
  },

  buttonStack: {
    width: '80%',
    marginTop: 30,
  },

  submit: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    marginTop: 30,
    width: '60%',
    alignSelf: 'center',
  },

  doneButton: {
    backgroundColor: '#7FA0E7',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },

  submitText: {
    color: '#7FA0E7',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  doneText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CheckList;
