import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, scrollX, index }) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [-width * 0.1, 0, width * 0.1],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }, { translateX }],
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      <Image source={item.src} style={styles.image} />
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
});