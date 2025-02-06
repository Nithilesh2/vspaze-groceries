import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native"
import React, { useState } from "react"
import SearchBar from "../../../components/SearchBar"
import Slider from "../../../components/Slider"
import GroceriesSingleRow from "../../../components/groceriesTypes/GroceriesSingleRow"
import { useRouter } from "expo-router"
import Carousel from "react-native-reanimated-carousel"

const { width } = Dimensions.get("window")

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const router = useRouter()

  const addToCart = (itemName) => {
    Alert.alert("Success", `${itemName} added to cart!`)
  }

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.src} style={styles.carouselImage} />
    </View>
  )

  const images = [
    { id: 1, src: require("../../../assets/images/one.jpg") },
    { id: 2, src: require("../../../assets/images/two.jpg") },
    { id: 3, src: require("../../../assets/images/three.jpeg") },
    { id: 4, src: require("../../../assets/images/one.jpg") },
    { id: 5, src: require("../../../assets/images/two.jpg") },
    { id: 6, src: require("../../../assets/images/three.jpeg") },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="green" />
      <ScrollView style={styles.bottom}>
        <SearchBar />
        {/* <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width}
            height={250}
            autoPlay={true}
            autoPlayInterval={3000}
            data={images}
            // scrollAnimationDuration={1000}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <Image source={item.src} style={styles.image} />
              </View>
            )}
          />

          <View style={styles.pagination}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index ? styles.activeDot : null,
                ]}
              />
            ))}
          </View>
        </View> */}
        <Slider />

        <View style={styles.groceriesCard}>
          <Text style={styles.groceriesTitle}>Categories</Text>
          <View style={styles.groceriesContainer}>
            <View style={styles.seeAllContainer}>
              <TouchableOpacity
                onPress={() => router.push("/onboarding/tabs/categoryTabs")}
              >
                <Text style={styles.seeMore}>See All</Text>
              </TouchableOpacity>
            </View>
            <GroceriesSingleRow />
            <GroceriesSingleRow />
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>Get healthy food for good health</Text>
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/images/water.jpeg")}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Water</Text>
            <Text style={styles.cardDescription}>
              Fresh and pure drinking water for hydration.
            </Text>
            <Text style={styles.cardAmount}>₹30</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => addToCart("Water")}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../../../assets/images/milk.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Milk</Text>
            <Text style={styles.cardDescription}>
              Fresh milk from healthy cows, rich in nutrients.
            </Text>
            <Text style={styles.cardAmount}>₹45</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => addToCart("Milk")}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    paddingTop: StatusBar.currentHeight - 50 || 20,
  },
  containerView: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  slide: {
    width: width,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 30,
    textTransform: "uppercase",
    textAlign: "center",
    color: "gold",
  },
  bottom: {
    marginTop: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginVertical: 20,
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
  groceriesCard: {
    borderRadius: 10,
    overflow: "hidden",
    width: width,
    marginTop: 30,
    marginBottom: 20,
  },
  groceriesTitle: {
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 10,
    textTransform: "uppercase",
    color: "gold",
    textAlign: "center",
  },
  groceriesContainer: {
    width: width,
  },
  seeMore: {
    color: "gold",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    textDecorationLine: "underline",
    marginHorizontal: 16,
    width: 100,
  },
  seeAllContainer: {
    alignItems: "flex-end",
    paddingRight: 16,
  },
  image: {
    width: 300,
    height: 220,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 20
  },
  pagination: {
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "gold",
    width: 12,
    height: 12,
    borderRadius: 15,
  },
})
