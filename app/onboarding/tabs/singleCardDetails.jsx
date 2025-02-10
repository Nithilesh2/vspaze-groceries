import React, { useContext, useState, useRef } from "react";
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
  Animated,
} from "react-native";
import LeftArrowIcon from "./../../../assets/icons/LeftArrow";
import { AntDesign } from "@expo/vector-icons";
import FavouriteIcon from "../../../assets/icons/Favourite";
import StarIcon from "../../../assets/icons/Star";
import { router, useLocalSearchParams } from "expo-router";
import ShoppingCartIcon from "../../../assets/icons/Cart";
import { AppContext } from "../../../context/AppContext";

const data = [
  {
    id: "so1",
    name: "Apple",
    images: [
      require("./../../../assets/images/apple.png"),
      require("./../../../assets/images/apple-2.png"),
      require("./../../../assets/images/apple-3.jpg"),
    ],
    category: "Smart Shopping",
    price: 40.5,
    discountPrice: 45.0,
    unit: "Kg",
    rating: 3.0,
    inStock: true,
    description:
      "Fresh and juicy apples, perfect for a healthy snack. Sourced directly from organic farms to ensure the best quality.",
  },
  {
    id: "gi2",
    name: "Milk",
    images: [
      require("./../../../assets/images/milk.png"),
      require("./../../../assets/images/milk.png"),
      require("./../../../assets/images/milk.png"),
    ],
    category: "Dairy Products",
    price: 25.0,
    discountPrice: 30.0,
    unit: "Litre",
    rating: 4.0,
    inStock: true,
    description:
      "Fresh and pure cow milk, rich in calcium and essential nutrients. Ideal for daily consumption and dairy preparations.",
  },
  {
    id: "gi1",
    name: "Water",
    images: [
      require("./../../../assets/images/water1.png"),
      require("./../../../assets/images/water1.png"),
      require("./../../../assets/images/water1.png"),
    ],
    category: "Beverages",
    price: 10.0,
    discountPrice: 12.0,
    unit: "Litre",
    rating: 5.0,
    inStock: true,
    description:
      "Clean and purified drinking water, ensuring safety and hydration. Sourced from natural springs for a refreshing taste.",
  },
];

const { width } = Dimensions.get("window");

const SingleCardDetails = () => {
  const { handleAdd, handleRemove, getTotalCartItems, cart } = useContext(AppContext);
  const cartCount = getTotalCartItems();

  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const { id } = useLocalSearchParams();

  const isAppleProduct = /^((fi|so)[1-9]|(fi|so)10)$/.test(id);
  const isWaterProduct = /^gi[13579]$/.test(id);
  const isMilkProduct = /^gi[02468]$/.test(id);

  const product = isAppleProduct
    ? data[0]
    : isMilkProduct
    ? data[1]
    : isWaterProduct
    ? data[2]
    : null;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLoading = () => {
    setLoading(true);
    handleAdd(id);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setLoading(false));
      }, 1000);
    });
  };

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 50, fontSize: 18 }}>
          Product not found.
        </Text>
      </SafeAreaView>
    );
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
          <View>
            <ShoppingCartIcon
              width={28}
              height={28}
              color="black"
              strokeWidth={1.4}
            />
            {cartCount > 0 && (
              <View
                style={{
                  position: "absolute",
                  right: -6,
                  top: -3,
                  backgroundColor: "red",
                  borderRadius: 10,
                  width: 18,
                  height: 18,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
                >
                  {cartCount}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <FlatList
            data={product.images}
            renderItem={({ item }) => (
              <Image source={item} style={styles.productImage} />
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / width
              );
              setActiveIndex(index);
            }}
          />
          <View style={styles.paginationContainer}>
            {product.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  { backgroundColor: index === activeIndex ? "green" : "gray" },
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.oneContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <FavouriteIcon height={18} width={18} color="black" fill="none" />
          </View>
          <Text style={styles.subText}>{product.category}</Text>

          <View style={styles.priceContainer}>
            <View style={styles.price}>
              <Text style={styles.price}>₹ {product.price}</Text>
              <Text style={styles.discountPrice}>
                ₹ {product.discountPrice}
              </Text>
            </View>
            <View style={styles.itemWeightType}>
              <Text style={styles.itemWeightText}>{product.unit}</Text>
            </View>
          </View>

          <View style={styles.stockContainer}>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{product.rating}</Text>
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  height={20}
                  width={20}
                  color={index < product.rating ? "gold" : "grey"}
                  fill={index < product.rating ? "gold" : "grey"}
                  key={index}
                />
              ))}
            </View>
            <Text style={styles.inStock}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Text>
          </View>

          <View style={styles.horizantalLine} />

          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Quantity</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.quantityButton}
                onPress={() => handleRemove(id)}
              >
                <AntDesign name="minus" size={12} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{cart[id] || 0}</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.quantityButton}
                onPress={() => handleAdd(id)}
              >
                <AntDesign name="plus" size={12} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.totalAmount}>Total Amount: ₹ {}</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.addToCartButton}
        onPress={handleLoading}
      >
        {loading ? (
          <Animated.View style={[styles.toastConfig, { opacity: fadeAnim }]}>
            <View style={styles.left}>
              <Text style={styles.title}>Item Added</Text>
              <Text style={styles.subtitle}>Check your cart for details</Text>
            </View>
            <Text
              style={styles.right}
              onPress={() => router.push("onboarding/tabs/cart")}
            >
              View
            </Text>
          </Animated.View>
        ) : (
          <Text style={styles.addToCartText}>Add To Cart</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SingleCardDetails;

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
    color: "black",
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
    height: 55,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  toastConfig: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    width: "80%",
    gap: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
  },
  right: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
});