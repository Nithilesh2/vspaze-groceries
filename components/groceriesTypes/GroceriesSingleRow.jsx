import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GroceriesCard from "./GroceriesCard";

const { width } = Dimensions.get("window");

const GroceriesSingleRow = () => {
  const data = [
    { id: 1, image: require("../../assets/images/vegetable-basket.png") },
    { id: 2, image: require("../../assets/images/vegetable-basket.png") },
    { id: 3, image: require("../../assets/images/vegetable-basket.png") },
    { id: 4, image: require("../../assets/images/vegetable-basket.png") },
    { id: 5, image: require("../../assets/images/vegetable-basket.png") },
    { id: 6, image: require("../../assets/images/vegetable-basket.png") },
    { id: 7, image: require("../../assets/images/vegetable-basket.png") },
    { id: 8, image: require("../../assets/images/vegetable-basket.png") },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cardWrapper}>
      <GroceriesCard image={item.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default GroceriesSingleRow;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
    gap: 5
  },
  cardWrapper: {
    width: width / 4 - 20,
    marginHorizontal: 5,
  },
});