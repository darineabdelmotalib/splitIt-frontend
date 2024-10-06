import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const loadingPage = ({ navigation, route }) => {
  const { billData } = route.params; // Receive billData from CheckList

  useEffect(() => {
    const timer = setTimeout(() => {
      // Pass the billData to the resultsPage component after 3 seconds
      navigation.navigate('resultPage', { billData }); // Make sure the billData is passed here
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer when the component is unmounted
  }, [navigation, billData]); // Add billData to the dependency array

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/banana.png')} style={styles.loadingPage__logo} />
      <Image source={require('../../assets/loadingText.png')} style={styles.loadingPage__text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDF90',
    height: '100%',
    width: '100%',
  },

  loadingPage__logo: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },

  loadingPage__text: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default loadingPage;
