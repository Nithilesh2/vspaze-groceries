import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { ScrollView } from "react-native"
import LeftArrowIcon from "../../../assets/icons/LeftArrow";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window")
const GroceryItem = () => {
  const data = [
    {
      id: 1,
      title: "Water",
      description: "Fresh and pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water.jpeg"),
    },
    {
      id: 2,
      title: "Milk",
      description: "Fresh milk from healthy cows, rich in nutrients.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
    {
      id: 3,
      title: "Water",
      description: "Fresh and pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water.jpeg"),
    },
    {
      id: 4,
      title: "Milk",
      description: "Fresh milk from healthy cows, rich in nutrients.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
    {
      id: 5,
      title: "Water",
      description: "Fresh and pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water.jpeg"),
    },
    {
      id: 6,
      title: "Milk",
      description: "Fresh milk from healthy cows, rich in nutrients.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
    {
      id: 7,
      title: "Water",
      description: "Fresh and pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water.jpeg"),
    },
    {
      id: 8,
      title: "Milk",
      description: "Fresh milk from healthy cows, rich in nutrients.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
    {
      id: 9,
      title: "Water",
      description: "Fresh and pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water.jpeg"),
    },
    {
      id: 10,
      title: "Milk",
      description: "Fresh milk from healthy cows, rich in nutrients.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
  ]
  const addToCart = (itemName) => {
    Alert.alert("Success", `${itemName} added to cart!`)
  }
  const router = useRouter()
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <LeftArrowIcon
            height={26}
            width={26}
            color="black"
            onPress={() => router.back()}
          />
          <Text style={styles.headerText}>Category Items</Text>
        </View>
        <View style={styles.cardsContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <Text style={styles.cardAmount}>{item.amount} lbs</Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToCart("Water")}
              >
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default GroceryItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  top: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginVertical: 20,
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    width: width / 2.5,
    height: 280,
    padding: 10,
    marginBottom: 20,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 50,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginVertical: 5,
  },
  cardAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 5,
  },
  addToCartButton: {
    backgroundColor: "#ff5722",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
})
