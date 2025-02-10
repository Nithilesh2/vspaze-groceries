import React, { useState } from "react"
import { StyleSheet, View, TextInput } from "react-native"
import Notification03Icon from "./../assets/icons/Bell"
import SearchIcon from "../assets/icons/Search"

const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search your needs..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="black"
        />
        <SearchIcon height={24} width={24} color="black" style={styles.searchIcon}/>
      </View>
      <Notification03Icon
        height={30}
        width={30}
        color="black"
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: 45,
    borderRadius: 40,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  searchBar: {
    borderRadius: 40,
    width: "85%",
    height: 40,
    paddingLeft: 15,
    paddingRight: 40,
    fontSize: 17,
  },
  icon: {
    position: "absolute",
    right: 30,
    zIndex: 1,
  },
  searchIcon: {
    position: "absolute",
    right: 15,
    zIndex: 1,
    tintColor: "black",
  }
})
