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
import React from "react"
import Carousel from "react-native-reanimated-carousel"
import SearchBar from "../../../components/SearchBar"

const { width } = Dimensions.get("window")

const images = [
  { id: 1, src: require("../../../assets/images/one.jpg") },
  { id: 2, src: require("../../../assets/images/two.jpeg") },
  { id: 3, src: require("../../../assets/images/three.jpeg") },
]

const Index = () => {
  const addToCart = (itemName) => {
    Alert.alert("Success", `${itemName} added to cart!`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="green" />
      <ScrollView style={styles.bottom}>
        <SearchBar />
        <View style={styles.containerView}>
          <Carousel
            loop
            width={width}
            height={200}
            autoPlay={true}
            data={images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <Image source={item.src} style={styles.image} />
              </View>
            )}
          />
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
    height: 230,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  slide: {
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    objectFit: "cover",
    alignSelf: "center",
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
})
