import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const CancellationPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.policyBox}>
        <Text style={styles.title}>Cancellation Policy</Text>
        <Text style={styles.intro}>
          We understand that plans may change. Please review our cancellation policy below.
        </Text>

        <Text style={styles.sectionTitle}>Order Cancellation</Text>
        <Text style={styles.text}>
          • Orders can be canceled before dispatch without any charges.
        </Text>
        <Text style={styles.text}>
          • Once the order is dispatched, cancellations are not allowed.
        </Text>

        <Text style={styles.sectionTitle}>Refund for Canceled Orders</Text>
        <Text style={styles.text}>
          • If an order is canceled before dispatch, a full refund will be processed within 5-7 business days.
        </Text>
        <Text style={styles.text}>
          • Refunds will be credited to the original payment method.
        </Text>

        <Text style={styles.sectionTitle}>How to Cancel</Text>
        <Text style={styles.text}>
          Customers can cancel their orders via the app or by contacting customer support at support@example.com.
        </Text>
      </View>
    </ScrollView>
  );
};

export default CancellationPolicy;

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