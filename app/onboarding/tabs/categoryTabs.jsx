import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native"
import React from "react"
import LeftArrowIcon from "./../../../assets/icons/LeftArrow"
import { useRouter } from "expo-router"
import { Dimensions } from "react-native"

const { width } = Dimensions.get("window")

const categoryTabs = () => {
  
  const data = 
  [
    {
      id: 1,
      icon: require("../../../assets/images/data-1-1.jpg"),
    },
    {
      id: 2,
      icon: require("../../../assets/images/data-1-2.jpg"),
    },
    {
      id: 3,
      icon: require("../../../assets/images/data-1-3.jpg"),
    },
    {
      id: 4,
      icon: require("../../../assets/images/data-1-1.jpg"),
    },
    {
      id: 5,
      icon: require("../../../assets/images/data-1-2.jpg"),
    },
    {
      id: 6,
      icon: require("../../../assets/images/data-1-3.jpg"),
    },
    {
      id: 7,
      icon: require("../../../assets/images/data-1-1.jpg"),
    },
    {
      id: 8,
      icon: require("../../../assets/images/data-1-2.jpg"),
    },
    {
      id: 9,
      icon: require("../../../assets/images/data-1-3.jpg"),
    },
    {
      id: 10,
      icon: require("../../../assets/images/data-1-1.jpg"),
    },
    {
      id: 11,
      icon: require("../../../assets/images/data-1-2.jpg"),
    },
    {
      id: 12,
      icon: require("../../../assets/images/data-1-3.jpg"),
    },
    {
      id: 13,
      icon: require("../../../assets/images/data-1-1.jpg"),
    },
    {
      id: 14,
      icon: require("../../../assets/images/data-1-2.jpg"),
    },
    {
      id: 15,
      icon: require("../../../assets/images/data-1-3.jpg"),
    },
  ]

  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.top}>
          <LeftArrowIcon
            height={26}
            width={26}
            color="black"
            onPress={() => router.back()}
          />
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View style={styles.categoryContainer}>
          {data.map((item) => (
            <View key={item.id} style={styles.boxContainer}>
              <Image source={item.icon} style={styles.image} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default categoryTabs

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
  categoryContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  boxContainer: {
    width: width / 3.4,
    height: 110,
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
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
})
