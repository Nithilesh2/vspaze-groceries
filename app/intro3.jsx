import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { useRouter } from "expo-router"

const Intro3 = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/intro-3.jpg")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.bottomSection}>
          <Text style={styles.title}>
            Quality Groceries, Quick Delivery, Happy You!
          </Text>

          <View style={styles.dotsContainer}>
            {[0, 1, 2].map((dot, index) => (
              <View
                key={index}
                style={[styles.dot, index === 2 && styles.activeDot]}
              />
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("onboarding/")}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Intro3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
  },
  image: {
    width: "100%",
    height: "50%",
    alignContent: "center",
  },
  bottomSection: {
    width: "100%",
    height: "40%",
    backgroundColor: "#90EE90",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 32,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 40,
    alignItems: "center"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(162, 162, 162)",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "black",
    width: 10,
    height: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.76)",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingBottom: 40,
  },
})
