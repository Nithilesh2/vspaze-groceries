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
import AddIcon from "../../assets/icons/Add"
import RemoveIcon from "../../assets/icons/Remove"
import { AppContext } from "../../context/AppContext"
import StarIcon from "../../assets/icons/Star"
import { router } from "expo-router"

const { width } = Dimensions.get("screen")

const data = [
  {
    id: "so1",
    name: "Apple",
    oldPrice: 100,
    price: 50,
    rating: 4,
    image: require("../../assets/images/apple.png"),
  },
  {
    id: "so2",
    name: "Banana",
    oldPrice: 80,
    price: 40,
    rating: 3,
    image: require("../../assets/images/apple.png"),
  },
  {
    id: "so3",
    name: "Grapes",
    oldPrice: 120,
    price: 60,
    rating: 1,
    image: require("../../assets/images/apple.png"),
  },
]

const SpecialOffersCard = () => {
  const { handleLike, likes, handleRemove, handleAdd, cart } =
    useContext(AppContext)
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.categoryContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.boxContainer}
            onPress={() =>
              router.push(`/onboarding/tabs/singleCardDetails?id=${item.id}`)
            }
          >
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
            <View style={styles.textContainer}>
              <Text style={styles.subtitle}>50% Off</Text>
              <Text style={styles.title}>{item.name}</Text>
              <View style={styles.pricingContainer}>
                <Text style={styles.oldPrice}>Rs. {item.oldPrice}</Text>
                <Text style={styles.price}> Rs. {item.price}</Text>
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
                      fontSize: 14,
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
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

export default SpecialOffersCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  categoryContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  boxContainer: {
    width: width / 2.5,
    height: 280,
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
  textContainer: {
    paddingVertical: 10,
    justifyContent: "space-between",
    gap: 2,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#E57373",
    width: 65,
    height: 25,
    borderRadius: 15,
    paddingTop: 5,
    marginLeft: 3,
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 10,
  },
  pricingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  oldPrice: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
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
    marginTop: 7,
    width: "100%",
    paddingHorizontal: 10,
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
})
