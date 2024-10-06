import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const ResultPage = ({ route, navigation }) => {
  // Get billData passed from LoadingPage
  const { billData } = route.params;

  console.log(billData);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/totalTitle.png')} style={styles.resultPage__title} />

      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {billData.map((person, index) => (
            <View key={index} style={styles.personContainer}>
              <Text style={styles.personText}>
                {person.name}: ${person.totalAmount}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Scan Again button */}
      <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('landingPage')}>
        <Text style={styles.scanButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDF90',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36, // Reduced font size for the title
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  listContainer: {
    backgroundColor: '#7FA0E7', // Green background color
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    maxHeight: '60%', // Limit the height to enable scrolling when needed
    borderRadius: 40,
    marginTop: 5
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
  personContainer: {
    marginVertical: 5, // Reduced vertical spacing
  },
  personText: {
    fontSize: 18, // Smaller font size
    fontWeight: 'bold',
    color: 'white',
  },
  scanButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 40,
  },
  scanButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },

  resultPage__title: {
    width: 140,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10
  }
});

export default ResultPage;
