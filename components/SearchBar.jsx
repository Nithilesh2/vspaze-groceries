import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Searchbar } from "react-native-paper"
import ShoppingCartIcon from "./../assets/icons/Cart"

const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ShoppingCartIcon
        height="32"
        width="32"
        color="white"
        strokeWidth="1.4"
        style={styles.icon}
      />
    </View>
  )
}

export default CustomSearchBar

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  searchBar: {
    borderRadius: 40,
    backgroundColor: "#f0f0f0",
    width: "85%",
  },
  icon: {
    paddingHorizontal: 30,
  },
})
