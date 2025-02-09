import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../../../context/AppContext"
import { useRouter } from "expo-router"

const Category = () => {
  const { likes, user } = useContext(AppContext)
  const router = useRouter()

  if (!user) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/developer-activity-concept-illustration.png")}
          style={styles.image}
        />
        <Text style={styles.noData1}>You are not logged in</Text>
        <Text style={styles.noData2}>Please login to continue</Text>
        <TouchableOpacity
          style={styles.loginBtn}
          activeOpacity={0.9}
          onPress={() => router.push("onboarding/")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const likedItems = Object.keys(likes).filter((itemId) => likes[itemId])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite Items</Text>
      {likedItems.length === 0 ? (
        <Text style={styles.noData}>No favorites added yet</Text>
      ) : (
        <FlatList
          data={likedItems}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>Item ID: {item}</Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  noData1: {
    fontSize: 24,
    color: "black",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  noData2: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
    textAlign: "center",
  },
  loginBtn: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
})
