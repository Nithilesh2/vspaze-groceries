import { StyleSheet, Text, View, FlatList } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../../../context/AppContext"

const Cart = () => {
  const { cart } = useContext(AppContext)

  const isCartEmpty = Object.keys(cart).length === 0

  return (
    <View style={styles.container}>
      {isCartEmpty ? (
        <Text style={styles.title}>No data</Text>
      ) : (
        <FlatList
          data={Object.entries(cart)}
          keyExtractor={([itemId]) => itemId}
          renderItem={({ item }) => {
            const [itemId, quantity] = item
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                  Item ID: {itemId} - Quantity: {quantity}
                </Text>
              </View>
            )
          }}
        />
      )}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
