import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.aboutBox}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.intro}>
          Welcome to our grocery app! We are committed to providing fresh and high-quality groceries delivered to your doorstep with ease and convenience.
        </Text>

        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.text}>
          Our mission is to revolutionize grocery shopping by making fresh and quality products accessible to everyone through seamless online ordering and timely delivery.
        </Text>

        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <Text style={styles.text}>
          • Wide range of fresh groceries sourced from trusted suppliers.
        </Text>
        <Text style={styles.text}>
          • Fast and reliable delivery to your doorstep.
        </Text>
        <Text style={styles.text}>
          • Easy-to-use app with secure payment options.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.text}>
          Have questions or feedback? Reach out to us at support@example.com or call +91 98765 43210.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  aboutBox: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'darkgreen',
  },
  intro: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'darkgreen',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});
