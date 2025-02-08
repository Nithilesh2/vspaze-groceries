import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from "react-native"
import React, { useEffect } from "react"
import Animated, {
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  runOnJS,
} from "react-native-reanimated"

const { width } = Dimensions.get("screen")
const cardLen = width * 0.8
const spacing = width * 0.02
const sideCardLen = (width * 0.18) / 2

const Slider = ({ itemList }) => {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
  const scrollX = useSharedValue(0)
  const currentIndex = useSharedValue(0)
  const flatListRef = React.useRef(null)
  let autoScroll = React.useRef(null)

  const data = [
    { id: "1", src: require("../assets/images/one.jpg") },
    { id: "2", src: require("../assets/images/two.jpg") },
    { id: "3", src: require("../assets/images/three.jpeg") },
    { id: "4", src: require("../assets/images/one.jpg") },
    { id: "5", src: require("../assets/images/two.jpg") },
    { id: "6", src: require("../assets/images/three.jpeg") },
  ]

  useEffect(() => {
    startAutoScroll()
    return () => clearInterval(autoScroll.current)
  }, [])

  const startAutoScroll = () => {
    clearInterval(autoScroll.current)
    autoScroll.current = setInterval(() => {
      runOnJS(moveToNextSlide)()
    }, 3000)
  }

  const moveToNextSlide = () => {
    let nextIndex = (currentIndex.value + 1) % data.length
    flatListRef.current?.scrollToOffset({
      offset: nextIndex * (cardLen + spacing * 2),
      animated: true,
    })
  }

  const onScrollEnd = (event) => {
    let newIndex = Math.round(event.nativeEvent.contentOffset.x / (cardLen + spacing * 2))
    currentIndex.value = newIndex
    scrollX.value = newIndex * (cardLen + spacing * 2)
    startAutoScroll()
  }

  const RenderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * (cardLen + spacing * 2),
      index * (cardLen + spacing * 2),
      (index + 1) * (cardLen + spacing * 2),
    ]

    const scale = useDerivedValue(() =>
      interpolate(scrollX.value, inputRange, [0.8, 1, 0.8], Extrapolation.CLAMP)
    )

    const opacity = useDerivedValue(() =>
      interpolate(scrollX.value, inputRange, [0.5, 1, 0.5], Extrapolation.CLAMP)
    )

    const translateX = useDerivedValue(() =>
      interpolate(scrollX.value, inputRange, [-width * 0.1, 0, width * 0.1], Extrapolation.CLAMP)
    )

    const cardStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }, { translateX: translateX.value }],
      opacity: opacity.value,
    }))

    return (
      <Animated.View
        style={[
          styles.itemContainer,
          cardStyle,
          {
            marginLeft: index === 0 ? sideCardLen : spacing,
            marginRight: index === data.length - 1 ? sideCardLen : spacing,
          },
        ]}
      >
        <Image source={item.src} style={styles.image} />
      </Animated.View>
    )
  }

  const Pagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_, index) => {
          const animatedDotStyle = useAnimatedStyle(() => {
            const dotSize = interpolate(
              scrollX.value,
              [
                (index - 1) * (cardLen + spacing * 2),
                index * (cardLen + spacing * 2),
                (index + 1) * (cardLen + spacing * 2),
              ],
              [8, 12, 8],
              Extrapolation.CLAMP
            )

            const backgroundColor = interpolate(
              scrollX.value,
              [
                (index - 1) * (cardLen + spacing * 2),
                index * (cardLen + spacing * 2),
                (index + 1) * (cardLen + spacing * 2),
              ],
              [0.5, 1, 0.5],
              Extrapolation.CLAMP
            )

            return {
              width: dotSize,
              height: dotSize,
              backgroundColor: `rgba(255, 255, 255, ${backgroundColor})`,
            }
          })

          return <Animated.View key={index} style={[styles.dot, animatedDotStyle]} />
        })}
      </View>
    )
  }

  return (
    <View>
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
        onMomentumScrollEnd={onScrollEnd}
        scrollEventThrottle={16}
        decelerationRate={0.9}
        snapToInterval={cardLen + spacing * 2.8}
        disableIntervalMomentum={true}
        snapToAlignment="center"
        disableScrollViewPanResponder={true}
      />
      <Pagination />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  itemContainer: {
    height: 210,
    width: cardLen,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "#bbb",
    marginHorizontal: 5,
  },
})
