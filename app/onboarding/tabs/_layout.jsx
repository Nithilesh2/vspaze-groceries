import React, { useContext } from "react"
import { Tabs } from "expo-router"
import HomeIcon from "../../../assets/icons/Home"
import ShoppingCartIcon from "../../../assets/icons/Cart"
import ProfileIcon from "./../../../assets/icons/Profile"
import FavouriteIcon from "./../../../assets/icons/Favourite"
import OrdersIcon from "./../../../assets/icons/Orders"
import { AppContext } from "../../../context/AppContext";
import { Text, View } from 'react-native';

const _layout = () => {

  const { getTotalCartItems } = useContext(AppContext)
  const cartCount = getTotalCartItems()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 55,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: 2,
        },
        tabBarActiveTintColor: "green",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon height={28} width={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="category"
        options={{
          title: "Favourite",
          tabBarIcon: ({ color, size }) => (
            <FavouriteIcon width={28} height={28} color={color} fill="none" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <View>
              <ShoppingCartIcon width={28} height={28} color={color} strokeWidth={1.4} />
              {cartCount > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: -6,
                    top: -3,
                    backgroundColor: "red",
                    borderRadius: 10,
                    width: 18,
                    height: 18,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>{cartCount}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, size }) => (
            <OrdersIcon
              width={28}
              height={28}
              color={color}
              strokeWidth={1.4}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon height={28} width={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categoryTabs"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="groceryItem"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="festivalItemsTabs"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="singleCardDetails"
        options={{
          href: null,
        }}
      />
    </Tabs>
  )
}

export default _layout
