import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useContext } from "react"
import FavouriteIcon from "../../assets/icons/Favourite"
import { AppContext } from "../../context/AppContext"
import StarIcon from "../../assets/icons/Star"
import RemoveIcon from "../../assets/icons/Remove"
import AddIcon from "../../assets/icons/Add"
import { useRouter } from "expo-router";

const { width } = Dimensions.get("screen")

const data = [
  {
    id: "fi1",
    title: "Smart Shopping",
    address: "Madhapur, Hyderabad, Telangana.",
    image: require("../../assets/images/apple.png"),
    discount: "10% OFF",
    rating: 4,
    price: 500,
    discountPrice: 450,
  },
  {
    id: "fi2",
    title: "Fresh Mart",
    address: "Madhapur, Hyderabad, Telangana.",
    image: require("../../assets/images/apple.png"),
    discount: "15% OFF",
    rating: 5,
    price: 1000,
    discountPrice: 850,
  },
  {
    id: "fi3",
    title: "Grocery Express",
    address: "Madhapur, Hyderabad, Telangana.",
    image: require("../../assets/images/apple.png"),
    discount: "15% OFF",
    rating: 3,
    price: 300,
    discountPrice: 255,
  },
  {
    id: "fi4",
    title: "Pen Express",
    address: "Madhapur, Hyderabad, Telangana.",
    image: require("../../assets/images/apple.png"),
    discount: "5% OFF",
    rating: 4,
    price: 200,
    discountPrice: 190,
  },
  {
    id: "fi5",
    title: "Dio Mart",
    address: "Madhapur, Hyderabad, Telangana.",
    image: require("../../assets/images/apple.png"),
    discount: "25% OFF",
    rating: 2,
    price: 800,
    discountPrice: 600,
  },
]

const FestivalItems = () => {
  const { handleLike, likes, handleRemove, handleAdd, cart } =
    useContext(AppContext)

    const router = useRouter()
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.categoryContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.boxContainer}
            onPress={() => router.push("onboarding/tabs/singleCardDetails")}
          >
            <Text style={styles.offerContainer}>{item.discount}</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.likeContainer}
              onPress={() => handleLike(item.id)}
            >
              {likes[item.id] ? (
                <FavouriteIcon height={18} width={18} color="red" fill="red" />
              ) : (
                <FavouriteIcon
                  height={18}
                  width={18}
                  color="black"
                  fill="none"
                />
              )}
            </TouchableOpacity>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.priceContainer}>
              <Text style={styles.actualPrice}>Rs. {item.price}</Text>
              <Text style={styles.discountPrice}>Rs. {item.discountPrice}</Text>
            </View>

            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  height={16}
                  width={16}
                  color={index < item.rating ? "#FFD700" : "#999999"}
                  fill={index < item.rating ? "#FFD700" : "#999999"}
                />
              ))}
            </View>

            <View style={styles.removeAndAddContainer}>
              <View style={styles.addContainer}>
                <TouchableOpacity
                  style={[
                    styles.addAndRemove,
                    { opacity: cart[item.id] ? 1 : 0 },
                  ]}
                  onPress={() => handleRemove(item.id)}
                  disabled={!cart[item.id]}
                >
                  <RemoveIcon height={16} width={16} color="black" />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#333",
                    opacity: cart[item.id] ? 1 : 0,
                    paddingHorizontal: 5,
                  }}
                >
                  {cart[item.id] || 0}
                </Text>
                <TouchableOpacity
                  style={styles.addAndRemove}
                  onPress={() => handleAdd(item.id)}
                >
                  <AddIcon height={16} width={16} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

export default FestivalItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  boxContainer: {
    width: width / 1.4,
    height: 180,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    position: "relative",
  },
  offerContainer: {
    backgroundColor: "#E57373",
    position: "absolute",
    top: 5,
    left: 5,
    borderRadius: 15,
    zIndex: 9,
    width: 65,
    height: 30,
    elevation: 3,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    paddingTop: 7,
    marginLeft: 3,
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
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingBottom: 5,
    color: "#999999",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    gap: 4,
    marginTop: 7,
  },
  removeAndAddContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 7,
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 80,
  },
  addAndRemove: {
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
  actualPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    fontSize: 14,
  },
  discountPrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
})
