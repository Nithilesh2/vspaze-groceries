import React, { useRef, useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native"
import Svg, { Circle } from "react-native-svg"

const { width } = Dimensions.get("screen")

const SemiCircleCutout = () => (
  <Svg width="20" height="40" viewBox="0 0 20 40" fill="none">
    <Circle cx="10" cy="21" r="7.5" fill="rgb(94, 191, 94)" />
  </Svg>
)

const vouchers = [
  {
    name: "FIRST VISIT OFFER",
    discount: "55%",
    code: "FIR2025",
    expiryDate: "07 DEC 2025",
  },
  {
    name: "DIWALI OFFER",
    discount: "25%",
    code: "DIW2025",
    expiryDate: "15 NOV 2025",
  },
  {
    name: "LAUNCHING OFFER",
    discount: "75%",
    code: "LAUNCH2025",
    expiryDate: "31 DEC 2025",
  },
]

const VoucherCard = ({ item }) => (
  <View style={styles.voucherWrapper}>
    <View style={styles.voucher}>
      <View style={styles.leftVoucherContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>COUPON</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.middleText}>{item.discount}</Text>
          <Text style={styles.middleText}>OFF</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>DISCOUNT</Text>
        </View>
      </View>
      <View style={styles.rightVoucherContainer}>
        <View style={styles.topVContainer}>
          <Text style={styles.topVText}>{item.name}</Text>
        </View>
        <View style={styles.bottomVContainer}>
          <Text style={styles.bottomVText}>{item.code}</Text>
        </View>
        <View style={styles.middleVContainer}>
          <Text style={styles.middleVText}>THIS VOUCHER VALID UNTIL</Text>
          <Text style={[styles.middleVText, { textAlign: "center" }]}>
            {item.expiryDate}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.semiCircleRight}>
      {Array.from({ length: 12 }).map((_, index) => (
        <SemiCircleCutout key={index} />
      ))}
    </View>
    <View style={styles.semiCircleLeft}>
      {Array.from({ length: 12 }).map((_, index) => (
        <SemiCircleCutout key={index} />
      ))}
    </View>
  </View>
)

const GroceryVoucher = () => {
  const flatListRef = useRef(null)
  const scrollX = useRef(new Animated.Value(0)).current
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % vouchers.length
      setCurrentIndex(nextIndex)
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true })
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={vouchers}
        renderItem={({ item }) => <VoucherCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width)
          setCurrentIndex(index)
        }}
        scrollEnabled={false}
      />

      <View style={styles.pagination}>
        {vouchers.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  voucherWrapper: {
    alignItems: "center",
    width: width,
    alignContent: "center",
  },
  semiCircleRight: {
    position: "absolute",
    right: 39,
    top: 0,
    transform: [{ translateY: -20 }],
    flexDirection: "row",
    gap: 4,
  },
  semiCircleLeft: {
    position: "absolute",
    right: 39,
    bottom: -38,
    transform: [{ translateY: -20 }],
    flexDirection: "row",
    gap: 4,
  },
  voucher: {
    backgroundColor: "white",
    width: 325,
    alignItems: "center",
    borderRadius: 10,
    height: 120,
    flexDirection: "row",
  },
  leftVoucherContainer: {
    alignItems: "center",
    backgroundColor: "rgba(220, 20, 60, 0.84)",
    height: "100%",
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 125,
  },
  topContainer: {
    marginTop: 15,
  },
  topText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  middleContainer: {
    marginTop: 5,
  },
  middleText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  bottomContainer: {
    marginTop: 5,
  },
  bottomText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  rightVoucherContainer: {
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    width: 200,
  },
  topVContainer: {
    marginTop: 5,
    paddingVertical: 5,
  },
  topVText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  middleVContainer: {
    paddingVertical: 5,
  },
  middleVText: {
    fontSize: 11,
    color: "black",
    fontWeight: "bold",
  },
  bottomVContainer: {
    paddingVertical: 3,
    borderWidth: 1.5,
    borderStyle: "dashed",
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  bottomVText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "rgba(220, 20, 60, 0.84)",
  },
  inactiveDot: {
    backgroundColor: "#ddd",
  },
})

export default GroceryVoucher
