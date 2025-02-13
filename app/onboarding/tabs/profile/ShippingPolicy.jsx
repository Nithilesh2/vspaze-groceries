import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const ShippingPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.policyBox}>
        <Text style={styles.title}>Shipping Policy</Text>
        <Text style={styles.intro}>
          We strive to ensure timely and efficient delivery of your groceries. Please review our shipping policy below.
        </Text>

        <Text style={styles.sectionTitle}>Delivery Time</Text>
        <Text style={styles.text}>
          • Standard delivery: 2-5 business days.
        </Text>
        <Text style={styles.text}>
          • Express delivery: Within 24 hours (extra charges apply).
        </Text>

        <Text style={styles.sectionTitle}>Shipping Charges</Text>
        <Text style={styles.text}>
          • Free shipping on orders above ₹500.
        </Text>
        <Text style={styles.text}>
          • ₹50 shipping charge for orders below ₹500.
        </Text>

        <Text style={styles.sectionTitle}>Order Tracking</Text>
        <Text style={styles.text}>
          Customers will receive a tracking link via email/SMS once their order is dispatched.
        </Text>

        <Text style={styles.sectionTitle}>Delayed or Missing Orders</Text>
        <Text style={styles.text}>
          If your order is delayed or missing, please contact our support team at support@example.com.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ShippingPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  policyBox: {
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
