import { Image, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { useRouter } from "expo-router"

const GroceriesCard = ({ image }) => {
  const router = useRouter()
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.9}
      onPress={() => router.push("/onboarding/tabs/groceryItem")}
    >
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  )
}

export default GroceriesCard

const styles = StyleSheet.create({
  cardContainer: {
    height: 90,
    width: 80,
    backgroundColor: "rgb(242 242 242)",
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 80,
    resizeMode: "contain",
  },
})
