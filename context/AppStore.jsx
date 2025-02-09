import React, { useState } from "react"
import { AppContext } from "./AppContext"
import Toast, { BaseToast } from "react-native-toast-message"
import { Dimensions, Text, TouchableOpacity, View } from "react-native"
import { useRouter } from "expo-router"

const { height } = Dimensions.get("screen")

const AppStore = ({ children }) => {
  const [likes, setLikes] = useState({})
  const [cart, setCart] = useState({})
  const router = useRouter()

  const handleLike = (itemId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [itemId]: !prevLikes[itemId],
    }))
  }

  const handleAdd = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }))

    Toast.show({
      type: "success",
      text1: "Item Added",
      text2: "Check your cart for details",
      position: "bottom",
      visibilityTime: 2000,
      autoHide: true,
    })
  }
  const toastConfig = {
    success: ({ text1, text2, props }) => (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          width: "100%",
          position: "absolute",
          top: height / 100,
          zIndex: 999,
        }}
      >
        <BaseToast
          style={{ borderLeftColor: "green", flex: 1, width: "100%" }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          onPress={() => Toast.hide()}
          text1={text1}
          text1Style={{ fontSize: 15 }}
          text2={text2}
          text2Style={{ fontSize: 13 }}
        />
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            position: "absolute",
            right: "8%",
          }}
          onPress={() => {
            router.push("onboarding/tabs/cart")
            Toast.hide()
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    ),
  }

  const handleRemove = (itemId) => {
    setCart((prevCart) => {
      if (!prevCart[itemId]) return prevCart
      const updatedCart = { ...prevCart }
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId]
      } else {
        updatedCart[itemId] -= 1
      }
      return updatedCart
    })
  }

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((total, count) => total + count, 0)
  }

  return (
    <AppContext.Provider
      value={{
        likes,
        handleLike,
        cart,
        handleAdd,
        handleRemove,
        toastConfig,
        getTotalCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppStore
