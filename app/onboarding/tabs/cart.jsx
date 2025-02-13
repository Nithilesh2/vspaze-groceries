import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../../../context/AppContext"
import RemoveIcon from "../../../assets/icons/Remove"
import AddIcon from "../../../assets/icons/Add"

const Cart = () => {
  const { cart, handleAdd, handleRemove } = useContext(AppContext)
  const data = [
    {
      id: "so1",
      name: "Apple",
      oldPrice: 100,
      price: 50,
      rating: 4,
      image: require("../../../assets/images/apple.png"),
    },
    {
      id: "so2",
      name: "Banana",
      oldPrice: 80,
      price: 40,
      rating: 3,
      image: require("../../../assets/images/apple.png"),
    },
    {
      id: "so3",
      name: "Grapes",
      oldPrice: 120,
      price: 60,
      rating: 1,
      image: require("../../../assets/images/apple.png"),
    },
    {
      id: "fi1",
      title: "Smart Shopping",
      address: "Madhapur, Hyderabad, Telangana.",
      image: require("../../../assets/images/apple.png"),
      discount: "10% OFF",
      rating: 4,
      price: 500,
      discountPrice: 450,
    },
    {
      id: "fi2",
      title: "Fresh Mart",
      address: "Madhapur, Hyderabad, Telangana.",
      image: require("../../../assets/images/apple.png"),
      discount: "15% OFF",
      rating: 5,
      price: 1000,
      discountPrice: 850,
    },
    {
      id: "fi3",
      title: "Grocery Express",
      address: "Madhapur, Hyderabad, Telangana.",
      image: require("../../../assets/images/apple.png"),
      discount: "15% OFF",
      rating: 3,
      price: 300,
      discountPrice: 255,
    },
    {
      id: "fi4",
      title: "Pen Express",
      address: "Madhapur, Hyderabad, Telangana.",
      image: require("../../../assets/images/apple.png"),
      discount: "5% OFF",
      rating: 4,
      price: 200,
      discountPrice: 190,
    },
    {
      id: "fi5",
      title: "Dio Mart",
      address: "Madhapur, Hyderabad, Telangana.",
      image: require("../../../assets/images/apple.png"),
      discount: "25% OFF",
      rating: 2,
      price: 800,
      discountPrice: 600,
    },
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

  const isCartEmpty = Object.keys(cart).length === 0
  const cartItems = data.filter((item) => cart[item.id])

  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum + (item.price || item.amount || item.discountPrice) * cart[item.id],
    0
  )
  const discount = 2.3
  const subtotal = totalAmount - discount
  const freeDeliveryThreshold = 495.3
  const amountNeededForFreeDelivery = freeDeliveryThreshold - subtotal

  return (
    <View style={styles.container}>
      {isCartEmpty ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
          <ScrollView style={styles.scrollContainer}>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <View style={styles.itemContainerLeft}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.itemContainerMiddle}>
                  <Text style={styles.itemTextTop}>
                    {item.name || item.title}
                  </Text>
                  <View style={styles.itemCostContainer}>
                    <Text style={styles.itemTextBottomOfferAmount}>
                      ₹ {item.price || item.amount || item.discountPrice}
                    </Text>
                    {item.oldPrice && (
                      <Text style={styles.itemTextBottomActualAmount}>
                        ₹ {item.oldPrice}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={styles.removeAndAddContainer}>
                  <View style={styles.addContainer}>
                    <TouchableOpacity
                      style={styles.addAndRemove}
                      onPress={() => handleRemove(item.id)}
                    >
                      <RemoveIcon height={16} width={16} color="black" />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{cart[item.id]}</Text>

                    <TouchableOpacity
                      style={styles.addAndRemove}
                      onPress={() => handleAdd(item.id)}
                    >
                      <AddIcon height={16} width={16} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Item Price</Text>
              <Text style={styles.bottomText}>₹ {totalAmount.toFixed(2)}</Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Discount</Text>
              <Text style={styles.bottomText}>(-) ₹ {discount.toFixed(2)}</Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomTextForFree}>
                {amountNeededForFreeDelivery > 0
                  ? `₹ ${amountNeededForFreeDelivery.toFixed(
                      2
                    )} more for free delivery`
                  : "Free Delivery applied!"}
              </Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomTextSubTotal}>Subtotal</Text>
              <Text style={styles.bottomTextAmount}>
                ₹ {subtotal.toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity style={styles.confirmButton} activeOpacity={0.9}>
              <Text style={styles.confirmButtonText}>
                Confirm Delivery Details
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    width: "100%",
    height: 80,
    alignSelf: "center",
    padding: 10,
  },
  itemContainerLeft: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  itemContainerMiddle: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemTextTop: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemCostContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 5,
  },
  itemTextBottomOfferAmount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  itemTextBottomActualAmount: {
    fontSize: 14,
    color: "#aaa",
    textDecorationLine: "line-through",
  },
  removeAndAddContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
  },
  addAndRemove: {
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 5,
  },
  bottomContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bottomText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "bold",
  },
  bottomTextForFree: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomTextSubTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "darkgreen",
  },
  bottomTextAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "darkgreen",
  },
  confirmButton: {
    backgroundColor: "#90EE90",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
})
