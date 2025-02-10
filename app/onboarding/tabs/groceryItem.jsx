import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useContext } from "react"
import { ScrollView } from "react-native"
import LeftArrowIcon from "../../../assets/icons/LeftArrow"
import { useRouter } from "expo-router"
import FavouriteIcon from "../../../assets/icons/Favourite"
import { AppContext } from "../../../context/AppContext"
import RemoveIcon from "../../../assets/icons/Remove"
import AddIcon from "../../../assets/icons/Add"

const { width } = Dimensions.get("window")
const GroceryItem = () => {
  const { handleLike, likes, handleRemove, handleAdd, cart } =
    useContext(AppContext)
  const data = [
    {
      id: "gi1",
      title: "Water",
      description: "Pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water1.png"),
    },
    {
      id: "gi2",
      title: "Milk",
      description: "Nutrient-rich cow's milk.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
    {
      id: "gi3",
      title: "Water",
      description: "Pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water1.png"),
    },
    {
      id: "gi4",
      title: "Milk",
      description: "Nutrient-rich cow's milk.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
    {
      id: "gi5",
      title: "Water",
      description: "Pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water1.png"),
    },
    {
      id: "gi6",
      title: "Milk",
      description: "Nutrient-rich cow's milk.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
    {
      id: "gi7",
      title: "Water",
      description: "Pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water1.png"),
    },
    {
      id: "gi8",
      title: "Milk",
      description: "Nutrient-rich cow's milk.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
    {
      id: "gi9",
      title: "Water",
      description: "Pure drinking water for hydration.",
      amount: 30,
      image: require("../../../assets/images/water1.png"),
    },
    {
      id: "gi10",
      title: "Milk",
      description: "Nutrient-rich cow's milk.",
      amount: 45,
      image: require("../../../assets/images/milk.png"),
    },
  ]

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
          {data.map((item) => (
            <TouchableOpacity
              onPress={() =>
                router.push(`/onboarding/tabs/singleCardDetails?id=${item.id}`)
              }
              key={item.id}
              style={styles.card}
              activeOpacity={0.9}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.likeContainer}
                onPress={() => handleLike(item.id)}
              >
                {likes[item.id] ? (
                  <FavouriteIcon
                    height={18}
                    width={18}
                    color="red"
                    fill="red"
                  />
                ) : (
                  <FavouriteIcon
                    height={18}
                    width={18}
                    color="black"
                    fill="none"
                  />
                )}
              </TouchableOpacity>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <Text style={styles.cardAmount}>{item.amount} lbs</Text>
              {cart[item.id] ? (
                <View style={styles.addContainer}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.addAndRemove}
                    onPress={() => handleRemove(item.id)}
                  >
                    <RemoveIcon height={16} width={16} color="white" />
                  </TouchableOpacity>
                  <Text style={styles.cartQuantity}>{cart[item.id]}</Text>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.addAndRemove}
                    onPress={() => handleAdd(item.id)}
                  >
                    <AddIcon height={16} width={16} color="white" />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.addToCartButton}
                  onPress={() => handleAdd(item.id)}
                >
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
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
  likeContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    borderRadius: 50,
    elevation: 3,
    zIndex: 9,
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
    height: 300,
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
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  addAndRemove: {
    backgroundColor: "#ff5722",
    padding: 5,
    borderRadius: 8,
  },
  cartQuantity: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 10,
  },
})
