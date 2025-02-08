import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useContext } from "react"
// import { useRouter } from "expo-router"
import FavouriteIcon from "../../assets/icons/Favourite"
import AddIcon from "../../assets/icons/Add"
import RemoveIcon from "./../../assets/icons/Remove"
import { AppContext } from "../../context/AppContext"

const { width } = Dimensions.get("screen")

const SpecialOffersCard = ({ itemId }) => {
  const { handleLike, likes, handleRemove, handleAdd, cart } =
    useContext(AppContext)
  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity activeOpacity={1} style={styles.boxContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.likeContainer}
          onPress={() => handleLike(itemId)}
        >
          {likes[itemId] ? (
            <FavouriteIcon height={18} width={18} color="red" fill="red" />
          ) : (
            <FavouriteIcon height={18} width={18} color="black" fill="none" />
          )}
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/apple.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>50% Off</Text>
          <Text style={styles.title}>Apple</Text>
          <View style={styles.pricingContainer}>
            <Text style={styles.oldPrice}>Rs. 100</Text>
            <Text style={styles.price}> Rs. 50</Text>
          </View>

          <View style={styles.removeAndAddContainer}>
            <View style={styles.addContainer}>
              <TouchableOpacity
                style={[styles.addAndRemove, { opacity: cart[itemId] ? 1 : 0 }]}
                onPress={() => handleRemove(itemId)}
                disabled={!cart[itemId]}
              >
                <RemoveIcon height={18} width={18} color="black" />
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#333",
                  opacity: cart[itemId] ? 1 : 0,
                  paddingHorizontal: 5
                }}
              >
                {cart[itemId] || 0}
              </Text>
              <TouchableOpacity
                style={styles.addAndRemove}
                onPress={() => handleAdd(itemId)}
              >
                <AddIcon height={18} width={18} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SpecialOffersCard

const styles = StyleSheet.create({
  categoryContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  boxContainer: {
    width: width / 2.5,
    height: 250,
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
    width: 55,
    height: 25,
    borderRadius: 15,
    paddingLeft: 5,
    paddingTop: 5,
    marginLeft: 3,
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
  removeAndAddContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
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
