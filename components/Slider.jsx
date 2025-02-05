import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import SliderItem from "./SliderItem";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

const Slider = ({ itemList }) => {
  const { width } = useWindowDimensions();
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % itemList.length;
      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [itemList]);

  return (
    <Animated.FlatList
      ref={flatListRef}
      data={itemList}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={onScrollHandler}
      renderItem={({ item, index }) => {
        return <SliderItem item={item} index={index} scrollX={scrollX} />;
      }}
      getItemLayout={(data, index) => ({
        length: width,
        offset: width * index,
        index,
      })}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({});