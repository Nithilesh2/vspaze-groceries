import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const RefundPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.policyBox}>
        <Text style={styles.title}>Refund Policy</Text>
        <Text style={styles.intro}>
          Our refund policy outlines the conditions under which refunds are processed for grocery purchases made through our app.
        </Text>

        <Text style={styles.sectionTitle}>Eligibility for Refunds</Text>
        <Text style={styles.text}>
          • Refunds are applicable only for defective, damaged, or incorrect items delivered.
        </Text>
        <Text style={styles.text}>
          • Perishable items are eligible for a refund only if reported within 24 hours of delivery.
        </Text>

        <Text style={styles.sectionTitle}>Refund Process</Text>
        <Text style={styles.text}>
          • To request a refund, contact our support team with order details and proof of issue (photos if applicable).
        </Text>
        <Text style={styles.text}>
          • Our team will review the request and process eligible refunds within 5-7 business days.
        </Text>

        <Text style={styles.sectionTitle}>Non-Refundable Items</Text>
        <Text style={styles.text}>
          • Opened or used grocery items (unless defective).
        </Text>
        <Text style={styles.text}>
          • Discounted or promotional items unless explicitly stated otherwise.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions or need assistance, reach out to us at support@example.com or call +91 98765 43210.
        </Text>
      </View>
    </ScrollView>
  );
};

export default RefundPolicy;

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
