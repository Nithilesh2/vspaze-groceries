import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native"
import React, { useState } from "react"
import LeftArrowIcon from "./../../../assets/icons/LeftArrow"
import { AntDesign } from "@expo/vector-icons"
import FavouriteIcon from "../../../assets/icons/Favourite"
import StarIcon from "../../../assets/icons/Star"
import { router, useRouter } from "expo-router";

const { width } = Dimensions.get("window")

const SingleCardDetails = () => {
  const [quantity, setQuantity] = useState(1)
  const [activeIndex, setActiveIndex] = useState(0)
  const price = 40.5
  const discountPrice = 45.0
  const totalAmount = (quantity * price).toFixed(2)
  const router = useRouter()

  const images = [
    require("./../../../assets/images/apple.png"),
    require("./../../../assets/images/apple-2.png"),
    require("./../../../assets/images/apple-3.jpg"),
  ]

  const renderItem = ({ item }) => (
    <Image source={item} style={styles.productImage} />
  )

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === activeIndex ? "green" : "gray" },
            ]}
          />
        ))}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity activeOpacity={0.9} style={styles.top}>
          <LeftArrowIcon
            height={26}
            width={26}
            color="black"
            onPress={() => router.back()}
          />
          <Text style={styles.headerText}>Item Details</Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <FlatList
            data={images}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / width
              )
              setActiveIndex(index)
            }}
          />
          {renderPaginationDots()}
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.oneContainer}>
            <Text style={styles.productName}>Apple</Text>
            <FavouriteIcon height={18} width={18} color="black" fill="none" />
          </View>
          <Text style={styles.subText}>Smart Shopping</Text>

          <View style={styles.priceContainer}>
            <View style={styles.price}>
              <Text style={styles.price}>₹ {price}</Text>
              <Text style={styles.discountPrice}>₹ {discountPrice}</Text>
            </View>
            <View style={styles.itemWeightType}>
              <Text style={styles.itemWeightText}>Kg</Text>
            </View>
          </View>

          <View style={styles.stockContainer}>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>0.0</Text>
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  height={20}
                  width={20}
                  color="grey"
                  fill="grey"
                  key={index}
                />
              ))}
            </View>
            <Text style={styles.inStock}>In Stock</Text>
          </View>

          <View style={styles.horizantalLine} />

          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Quantity</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                style={styles.quantityButton}
              >
                <AntDesign name="minus" size={12} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setQuantity(quantity + 1)}
                style={styles.quantityButton}
              >
                <AntDesign name="plus" size={12} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.totalAmount}>Total Amount: ₹ {totalAmount}</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Fresh and juicy apples, perfect for a healthy snack. Sourced
              directly from organic farms to ensure the best quality.
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity activeOpacity={0.9} style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SingleCardDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
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
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  productImage: {
    width: width,
    height: 200,
    resizeMode: "contain",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  detailsContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    gap: 6,
  },
  oneContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    color: "green",
    marginVertical: 5,
  },
  priceContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  discountPrice: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "gray",
  },
  itemWeightType: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ccc",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  itemWeightText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
  },
  stockContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
    marginRight: 10,
  },
  inStock: {
    color: "green",
    fontWeight: "bold",
  },
  horizantalLine: {
    width: "100%",
    height: 2,
    backgroundColor: "lightgray",
    marginVertical: 15,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityButton: {
    padding: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginTop: 20,
  },
  descriptionContainer: {
    marginTop: 15,
    borderRadius: 10,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 16,
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "#00A859",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
})
