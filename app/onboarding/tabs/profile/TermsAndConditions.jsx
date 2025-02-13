import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.termsBox}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.intro}>
          Please read these Terms and Conditions carefully before using this
          app.
        </Text>

        <View style={styles.termsList}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Acceptance of Terms:</Text> By using this
            app, you agree to comply with these Terms and Conditions. If you do
            not agree, please refrain from using the app.
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Eligibility:</Text>
            <View style={styles.subList}>
              <Text style={styles.subListText}>
                • You must be at least 18 years old to place an order.
              </Text>
              <Text style={styles.subListText}>
                • Users must provide accurate delivery details during
                registration.
              </Text>
            </View>
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Services Offered:</Text> The app
            facilitates online grocery shopping, allowing users to purchase
            groceries and other essential items for delivery or pickup.
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>User Responsibilities:</Text>
            <View style={styles.subList}>
              <Text style={styles.subListText}>
                • Provide correct and updated information at all times.
              </Text>
              <Text style={styles.subListText}>
                • Use the app only for lawful purposes.
              </Text>
              <Text style={styles.subListText}>
                • Maintain the confidentiality of your login credentials.
              </Text>
            </View>
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Orders and Payments:</Text> All orders
            must be paid for using the available payment methods in the app.
            Prices are subject to change without prior notice.
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Cancellation and Refunds:</Text>
            <View style={styles.subList}>
              <Text style={styles.subListText}>
                • Orders can be canceled within a specified period before
                dispatch.
              </Text>
              <Text style={styles.subListText}>
                • Refunds will be processed according to the refund policy
                mentioned in the app.
              </Text>
            </View>
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Delivery Policy:</Text>
            <View style={styles.subList}>
              <Text style={styles.subListText}>
                • Delivery times may vary based on location and availability.
              </Text>
              <Text style={styles.subListText}>
                • Users must be available to receive their orders at the
                scheduled time.
              </Text>
            </View>
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Data Privacy:</Text> User data is handled
            as per the Privacy Policy. Users must review the Privacy Policy to
            understand how their data is used.
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Third-Party Services:</Text> The app may
            collaborate with third-party vendors for product sourcing and
            delivery. The app is not responsible for the terms or actions of
            third-party providers.
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Limitation of Liability:</Text>
            <View style={styles.subList}>
              <Text style={styles.subListText}>
                • The app is not liable for any loss or damage caused by
                reliance on third-party services.
              </Text>
              <Text style={styles.subListText}>
                • The app is not responsible for errors, delays, or missing
                items in deliveries.
              </Text>
            </View>
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Termination:</Text> The app reserves the
            right to suspend or terminate user accounts for:
            <View style={styles.subList}>
              <Text style={styles.subListText}>
                • Violating terms and conditions.
              </Text>
              <Text style={styles.subListText}>
                • Providing false or misleading information.
              </Text>
            </View>
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Amendments:</Text> The app may update
            these Terms and Conditions at any time. Users will be notified of
            changes, and continued use of the app indicates acceptance of the
            updated terms.
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Governing Law:</Text> These terms are
            governed by the laws of [your country/state]. Any disputes will be
            resolved in the courts of [your jurisdiction].
          </Text>

          <Text style={styles.listItem}>
            <Text style={styles.bold}>Contact Information:</Text> For any
            queries or complaints, contact us at:
            <View style={styles.subList}>
              <Text style={styles.subListText}>
                • Email: support@example.com
              </Text>
              <Text style={styles.subListText}>• Phone: +91 98765 43210</Text>
            </View>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
  termsBox: {
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
  termsList: {
    paddingLeft: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
    color: "darkgreen",
    fontSize: 16,
  },
  subList: {
    marginLeft: 20,
    marginTop: 5,
  },
  subListText: {
    marginBottom: 5,
    fontSize: 16,
  },
})

export default TermsAndConditions
