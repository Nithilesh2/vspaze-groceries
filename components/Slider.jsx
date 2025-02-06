import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native"
import React, { useEffect } from "react"
import Animated, {
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated"
import { Dimensions } from "react-native"

const { width } = Dimensions.get("screen")
const cardLen = width * 0.8
const spacing = width * 0.02
const sideCardLen = (width * 0.18) / 2

const Slider = ({ itemList }) => {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

  const scrollX = useSharedValue(0)
  const flatListRef = React.useRef(null)

  const data = [
    { id: "1", src: require("../assets/images/one.jpg") },
    { id: "2", src: require("../assets/images/two.jpg") },
    { id: "3", src: require("../assets/images/three.jpeg") },
    { id: "4", src: require("../assets/images/one.jpg") },
    { id: "5", src: require("../assets/images/two.jpg") },
    { id: "6", src: require("../assets/images/three.jpeg") },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      scrollX.value += cardLen + spacing * 2
      if (scrollX.value >= cardLen * data.length) {
        scrollX.value = 0
      }
      flatListRef.current.scrollToOffset({
        offset: scrollX.value,
        animated: true,
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const RenderItem = ({ item, index }) => {
    const size = useSharedValue(0.8)
    const inputRange = [
      (index - 1) * cardLen,
      index * cardLen,
      (index + 1) * cardLen,
    ]

    size.value = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolation.CLAMP
    )
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    )
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [-width * 0.1, 0, width * 0.1],
      Extrapolation.CLAMP
    )

    const cardStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: size.value , translateX}],
        opacity
      }
    })
    return (
      <View
        style={[
          styles.itemContainer,
          cardStyle,
          {
            marginLeft: index === 0 ? sideCardLen : spacing,
            marginRight: index === data.length - 1 ? sideCardLen : spacing,
          },
        ]}
      >
        <Image source={item.src} style={{ height: "100%", width: "100%", borderRadius: 10 }} />
      </View>
    )
  }

  return (
    <Animated.View>
      <AnimatedFlatList
        ref={flatListRef}
        data={data}
        horizontal
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          scrollX.value = event.nativeEvent.contentOffset.x
        }}
        scrollEventThrottle={16}
        decelerationRate={0.9}
        snapToInterval={cardLen + spacing * 2.8}
        disableIntervalMomentum={true}
        snapToAlignment="center"
        disableScrollViewPanResponder={true}
      />
    </Animated.View>
  )
}

export default Slider

const styles = StyleSheet.create({
  itemContainer: {
    height: 210,
    width: cardLen,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
})
