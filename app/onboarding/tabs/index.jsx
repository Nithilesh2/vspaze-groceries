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
  Linking,
} from "react-native"
import React, { useContext } from "react"
import SearchBar from "../../../components/SearchBar"
import Slider from "../../../components/Slider"
import GroceriesSingleRow from "../../../components/groceriesTypes/GroceriesSingleRow"
import { useRouter } from "expo-router"
import SpecialOffersCard from "../../../components/specialOffers/SpecialOffersCard"
import FestivalItems from "../../../components/festivalItems/FestivalItems"
import Toast from "react-native-toast-message"
import { AppContext } from "../../../context/AppContext"
const { width } = Dimensions.get("window")

const Index = () => {
  const router = useRouter()
  const openWhatsApp = (phoneNumber) => {
    const url = `https://wa.me/${phoneNumber}`
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "WhatsApp is not installed!")
    )
  }
  const { toastConfig } = useContext(AppContext)
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="green" />
        <ScrollView style={styles.bottom}>
          <SearchBar />
          <View style={styles.sliderContainer}>
            <Slider />
          </View>

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
            <Text style={styles.title}>Special Offers</Text>
            <Image
              source={require("../../../assets/images/discount.png")}
              style={styles.discountImg}
            />
          </View>
          <View style={styles.middleOffers}>
            <Text style={[styles.seeMore, { paddingRight: 15 }]}>See All</Text>
          </View>

          <ScrollView
            horizontal
            pagingEnabled={true}
            style={styles.cardsContainer}
            snapToInterval={width / 2}
            decelerationRate="normal"
          >
            <SpecialOffersCard />
          </ScrollView>

          <View style={[styles.middle, { marginTop: 15 }]}>
            <Text style={styles.title}>Festival Items</Text>
            <Image
              source={require("../../../assets/images/discount.png")}
              style={styles.discountImg}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.middleOffers}
            onPress={() => router.push("/onboarding/tabs/festivalItemsTabs")}
          >
            <Text style={[styles.seeMore, { paddingRight: 15 }]}>See All</Text>
          </TouchableOpacity>
          <ScrollView
            horizontal
            pagingEnabled={true}
            style={styles.cardsContainer}
            snapToInterval={1}
            decelerationRate="normal"
          >
            <FestivalItems />
          </ScrollView>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.whatsAppAndDeliveredContainer}
            onPress={() => openWhatsApp(919908581431)}
          >
            <Image
              source={require("../../../assets/images/whatsapp.png")}
              style={styles.whatsAppImage}
            />
          </TouchableOpacity>

          <View style={styles.whatsAppAndDeliveredContainer}>
            <Text style={styles.deliveredText}>Delivered in Next Day</Text>
          </View>
        </ScrollView>
        <Toast position="bottom" bottomOffset={80} config={toastConfig} />
      </SafeAreaView>
    </>
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
  sliderContainer: {
    width: "100%",
    marginBottom: 20,
    height: 210,
  },
  middle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  middleOffers: {
    width: "100%",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 24,
    paddingRight: 20,
    textTransform: "uppercase",
    textAlign: "center",
    color: "gold",
    fontWeight: "bold",
  },
  discountImg: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 75,
  },
  bottom: {
    marginTop: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    width: "100%",
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
    borderRadius: 20,
  },
  whatsAppAndDeliveredContainer: {
    width: width,
    alignItems: "center",
  },
  whatsAppImage: {
    width: "95%",
    height: 160,
    borderRadius: 10,
    objectFit: "contain",
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  deliveredText: {
    width: "95%",
    height: 50,
    resizeMode: "contain",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 15,
  },
})
