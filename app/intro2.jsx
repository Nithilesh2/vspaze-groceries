import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { useRouter } from "expo-router"

const Intro2 = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/intro-2.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.bottomSection}>
          <Text style={styles.title}>
            Groceries Made Simple – Order, Relax, Enjoy!
          </Text>

          <View style={styles.dotsContainer}>
            {[0, 1, 2].map((dot, index) => (
              <View
                key={index}
                style={[styles.dot, index === 1 && styles.activeDot]}
              />
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/")}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("intro3")}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Intro2

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
    backgroundColor: "green",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 32,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "darkgreen",
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
  }
})
