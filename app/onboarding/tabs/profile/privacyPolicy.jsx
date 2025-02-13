import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainContent}>
        <View style={styles.policyBox}>
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.intro}>
            Your privacy is important to us. This document outlines how we
            collect, use, and protect your data in our grocery application.
          </Text>

          <View style={styles.policyList}>
            <View style={styles.listItem}>
              <Text style={styles.bold}>Data Collection:</Text>
              <View style={styles.subList}>
                <Text style={styles.subListText}>
                  • Personal details: Name, address, phone number, email.
                </Text>
                <Text style={styles.subListText}>
                  • Order details: Items purchased, delivery preferences.
                </Text>
                <Text style={styles.subListText}>
                  • Payment details: Payment method, transaction history.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bold}>Data Usage:</Text>
              <View style={styles.subList}>
                <Text style={styles.subListText}>
                  • To process orders and deliver groceries.
                </Text>
                <Text style={styles.subListText}>
                  • To provide customer support and resolve issues.
                </Text>
                <Text style={styles.subListText}>
                  • To send notifications and promotional offers.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bold}>Data Sharing:</Text>
              <View style={styles.subList}>
                <Text style={styles.subListText}>
                  • Sharing data with delivery partners for order fulfillment.
                </Text>
                <Text style={styles.subListText}>
                  • Sharing limited data with analytics tools to improve services.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bold}>Data Security:</Text>
              <View style={styles.subList}>
                <Text style={styles.subListText}>
                  • Using encryption to protect personal information.
                </Text>
                <Text style={styles.subListText}>
                  • Implementing security measures to prevent unauthorized access.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bold}>User Consent:</Text>
              <Text>
                Data processing is done only after the user agrees to the
                privacy policy.
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bold}>Data Retention and Deletion:</Text>
              <View style={styles.subList}>
                <Text style={styles.subListText}>
                  • Retaining order data for customer support and tracking.
                </Text>
                <Text style={styles.subListText}>
                  • Deleting data upon user request.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bold}>User Rights:</Text>
              <View style={styles.subList}>
                <Text style={styles.subListText}>
                  • Users can request access to, update, or delete their
                  personal data.
                </Text>
                <Text style={styles.subListText}>
                  • Responding promptly to user complaints.
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.ourPrivacy}>
            Our privacy policy explains how we collect, process, and protect
            your personal data while using our grocery app. Your data is
            safeguarded using secure encryption techniques.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
  policyBox: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "darkgreen",
  },
  intro: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 15,
    color: "#555",
  },
  policyList: {
    paddingLeft: 10,
  },
  listItem: {
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
    color: "darkgreen",
    fontSize: 16,
  },
  subList: {
    marginTop: 5,
  },
  ourPrivacy: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "500",
  },
  subListText: {
    marginBottom: 5,
    fontSize: 16,
  },
})

export default PrivacyPolicy
