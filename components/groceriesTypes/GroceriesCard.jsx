import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const GroceriesCard = ({ image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default GroceriesCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 90,
    width: 80,
    backgroundColor: "rgb(242 242 242)",
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 80,
    resizeMode: "contain",
  },
});